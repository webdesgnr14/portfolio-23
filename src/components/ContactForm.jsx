import * as React from "react";
import useAPI from "../hooks/useApi";
import { send } from 'emailjs-com';

export const ContactForm = ({ heading, text }) => {
  const options = useAPI("options", "wp", true);
  const [data, setData] = React.useState({
    first_name: '',
    last_name: '',
    subject: 'general_inquiry',
    email_address: '',
    message: '',
  });
  const [error, setError] = React.useState({});
  const [state, setState] = React.useState({ sending: false, sent: false, failed: false });
  const fnRef = React.useRef();
  const lnRef = React.useRef();
  const emailRef = React.useRef();
  const subjectRef = React.useRef();
  const messageRef = React.useRef();

  if (!options.emailjs) return null;

  const handleChange = (e) => {
    const key = e.target.getAttribute("name");

    if (e.target.classList.contains('error')) {
      e.target.classList.remove("error");
      delete error[key];
      setError(error);
    }

    setData({ ...data, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const errs = {};

    if (data.first_name && data.last_name && data.email_address && data.message) {
      setState({ ...state, sending: true});

      send(
        options.emailjs.service_id,
        options.emailjs.template_id,
        data,
        options.emailjs.private_key,
      ).then((response) => {
        setState({ ...state, sending: false, sent: true });
      }).catch((err) => {
        setState({ ...state, sending: false, failed: true });
      });
    } else {
      if (!data.first_name && !fnRef.current.classList.contains("error")) {
        fnRef.current.classList.add("error");
        errs["first_name"] = true;
      }

      if (!data.last_name && !lnRef.current.classList.contains("error")) {
        lnRef.current.classList.add("error");
        errs["last_name"] = true;
      }

      if (!data.email_address && !emailRef.current.classList.contains("error")) {
        emailRef.current.classList.add("error");
        errs["email_address"] = true;
      }

      if (!data.message && !messageRef.current.classList.contains("error")) { 
        messageRef.current.classList.add("error");
        errs["message"] = true;
      }

      setError(errs);
    }
  }

  const Select = React.forwardRef(({ name, label, options }, ref) => {
    return (
      <select
        id={name}
        name={name}
        onChange={(e) => handleChange(e)}
        aria-label={label}
        ref={ref}
      >
        {options.map((option, i) => <option key={i} value={option.value} selected={option.value === data.subject}>{option.name}</option>)}
      </select>
    )
  });

  const Error = ({ message }) => {
    return (
      <p className="error-message">{message}</p>
    );
  }

  return (
    <div id="contact--form" className="contact--form">
      {state.sending || state.sent || state.failed ?
        (
          <div className="contact--form--messages">
            {state.sending && <div className="sending message"><h1>Sending...</h1></div>}
            {state.failed && <div className="sending-error message"><h1>Oops!</h1><p>Something is wrong your request cannot be processed at this time. Try again later.</p></div>}
            {state.sent && <div className="thank-you message"><h1>{data.first_name}, your message was sent successfully!</h1><p>Thank you {data.first_name}, I have received your {data.subject.replace("_", " ")} request and will get back to you within 3 business days. You will also receive this message in your inbox here: {data.email_address}.</p><p>Looking forward to speaking with you soon, have a great day!</p></div>}
          </div>
        ) 
        : 
        (
          <>
            {(heading || text) && 
              <div className='contact--content'>
                {heading && 
                  <h1>{heading}</h1>
                }
                {text && 
                  <div className='contact--body' dangerouslySetInnerHTML={{ __html: text }} />
                }
              </div>
            }
            <form className="contact--form--form" onSubmit={(e) => onSubmit(e)}>
              <label for="subject">Subject: <span className="asterisk required">*</span></label>
              <Select name="subject" label="Subject" options={[{ name: "General Inquiry", value: "general_inquiry" }, { name: "Consultation", value: "consultation" }]} ref={subjectRef} />
              <label for="first_name">First Name: <span className="asterisk required">*</span></label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="First Name"
                value={data.first_name}
                onChange={(e) => handleChange(e)}
                aria-label="First Name"
                ref={fnRef}
              ></input>
              {error?.first_name && <Error message="First name is required." />}
              <label for="last_name">Last Name: <span className="asterisk required">*</span></label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={data.last_name}
                onChange={(e) => handleChange(e)}
                aria-label="Last Name"
                ref={lnRef}
              ></input>
              {error?.last_name && <Error message="Last name is required." />}
              <label for="email_address">Email Address: <span className="asterisk required">*</span></label>
              <input
                id="email_address"
                type="email"
                name="email_address"
                placeholder="Email Address"
                value={data.email_address}
                onChange={(e) => handleChange(e)}
                aria-label="Email Address"
                ref={emailRef}
              ></input>
              {error?.email_address && <Error message="Email address is required." />}
              <label for="message">Message: <span className="asterisk required">*</span></label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={data.message}
                onChange={(e) => handleChange(e)}
                aria-label="Message"
                ref={messageRef}
              ></textarea>
              {error?.message && <Error message="Message is required." />}
              <input type="submit" value="Send Message" className="btn btn--med" />
            </form>
          </>
        )
      }
    </div>
  );
}