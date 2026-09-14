import * as React from 'react';
import useAPI from '../hooks/useApi';
import { RichText } from './RichText';
import { send } from 'emailjs-com';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Select = React.forwardRef(
	({ name, label, options, selectedValue, onChange }, ref) => {
		return (
			<select
				id={name}
				name={name}
				onChange={onChange}
				aria-label={label}
				ref={ref}
			>
				{options.map((option, i) => (
					<option
						key={i}
						value={option.value}
						selected={option.value === selectedValue}
					>
						{option.name}
					</option>
				))}
			</select>
		);
	}
);
Select.displayName = 'Select';

const FormError = ({ message }) => {
	return <p className="error-message">{message}</p>;
};

export const ContactForm = ({ heading, text }) => {
	const { data: options, apiLoading, apiError } = useAPI('contact-settings');
	const [data, setData] = React.useState({
		first_name: '',
		last_name: '',
		subject: 'general_inquiry',
		email_address: '',
		message: '',
	});
	const [formError, setFormError] = React.useState({});
	const [state, setState] = React.useState({
		sending: false,
		sent: false,
		failed: false,
	});
	const fnRef = React.useRef();
	const lnRef = React.useRef();
	const emailRef = React.useRef();
	const subjectRef = React.useRef();
	const messageRef = React.useRef();
	const headingRef = React.useRef();
	const bodyRef = React.useRef();
	const formRef = React.useRef();

	const handleChange = (e) => {
		const key = e.target.getAttribute('name');

		if (e.target.classList.contains('error')) {
			e.target.classList.remove('error');
			setFormError((prev) => {
				const next = { ...prev };
				delete next[key];
				return next;
			});
		}

		setData({ ...data, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const errs = {};

		if (
			data.first_name &&
			data.last_name &&
			data.email_address &&
			data.message
		) {
			setState({ ...state, sending: true });

			send(
				options.emailjs.service_id,
				options.emailjs.template_id,
				data,
				options.emailjs.user_id
			)
				.then(() => {
					setState({ ...state, sending: false, sent: true });
				})
				.catch((err) => {
					console.error('Error sending message:', err);
					setState({ ...state, sending: false, failed: true });
				});
		} else {
			if (!data.first_name && !fnRef.current.classList.contains('error')) {
				fnRef.current.classList.add('error');
				errs['first_name'] = true;
			}

			if (!data.last_name && !lnRef.current.classList.contains('error')) {
				lnRef.current.classList.add('error');
				errs['last_name'] = true;
			}

			if (
				!data.email_address &&
				!emailRef.current.classList.contains('error')
			) {
				emailRef.current.classList.add('error');
				errs['email_address'] = true;
			}

			if (!data.message && !messageRef.current.classList.contains('error')) {
				messageRef.current.classList.add('error');
				errs['message'] = true;
			}

			setFormError(errs);
		}
	};

	React.useLayoutEffect(() => {
		if (
			!fnRef.current &&
			!lnRef.current &&
			!emailRef.current &&
			!messageRef.current &&
			!headingRef.current &&
			!bodyRef.current &&
			!formRef.current
		)
			return;

		if (headingRef.current) {
			gsap.fromTo(
				headingRef.current,
				{ opacity: 0, y: -20 },
				{ opacity: 1, y: 0, duration: 0.5, scrollTrigger: headingRef.current }
			);
		}

		if (bodyRef.current) {
			gsap.fromTo(
				bodyRef.current,
				{ opacity: 0, y: -20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					delay: 0.2,
					scrollTrigger: bodyRef.current,
				}
			);
		}

		if (formRef.current) {
			gsap.fromTo(
				formRef.current,
				{ opacity: 0, y: -20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					delay: 0.4,
					scrollTrigger: formRef.current,
				}
			);
		}
	}, [options]);

	if (apiError) console.log('Error loading options:', apiError);
	if (!options || !options.emailjs || apiLoading) {
		return null;
	} else {
		return (
			<div id="contact--form" className="contact--form">
				{state.sending || state.sent || state.failed ? (
					<div className="contact--form--messages">
						{state.sending && (
							<div className="sending message">
								<h1>Sending...</h1>
							</div>
						)}
						{state.failed && (
							<div className="sending-error message">
								<h1>Oops!</h1>
								<p>
									Something is wrong your request cannot be processed at this
									time. Try again later.
								</p>
							</div>
						)}
						{state.sent && (
							<div className="thank-you message">
								<h1>{data.first_name}, your message was sent successfully!</h1>
								<p>
									Thank you {data.first_name}, I have received your{' '}
									{data.subject.replace('_', ' ')} request and will get back to
									you within 3 business days. You will also receive this message
									in your inbox here: {data.email_address}.
								</p>
								<p>
									Looking forward to speaking with you soon, have a great day!
								</p>
							</div>
						)}
					</div>
				) : (
					<>
						{(heading || text) && (
							<div className="contact--content">
								{heading && <h1 ref={headingRef}>{heading}</h1>}
								{text && (
									<RichText
										ref={bodyRef}
										className="contact--body"
										html={text}
									/>
								)}
							</div>
						)}
						<form
							ref={formRef}
							className="contact--form--form"
							onSubmit={(e) => onSubmit(e)}
						>
							<label htmlFor="subject">
								Subject: <span className="asterisk required">*</span>
							</label>
							<Select
								name="subject"
								label="Subject"
								options={[
									{ name: 'General Inquiry', value: 'general_inquiry' },
									{ name: 'Consultation', value: 'consultation' },
								]}
								selectedValue={data.subject}
								onChange={handleChange}
								ref={subjectRef}
							/>
							<label htmlFor="first_name">
								First Name: <span className="asterisk required">*</span>
							</label>
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
							{formError?.first_name && (
								<FormError message="First name is required." />
							)}
							<label htmlFor="last_name">
								Last Name: <span className="asterisk required">*</span>
							</label>
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
							{formError?.last_name && (
								<FormError message="Last name is required." />
							)}
							<label htmlFor="email_address">
								Email Address: <span className="asterisk required">*</span>
							</label>
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
							{formError?.email_address && (
								<FormError message="Email address is required." />
							)}
							<label htmlFor="message">
								Message: <span className="asterisk required">*</span>
							</label>
							<textarea
								id="message"
								name="message"
								placeholder="Message"
								value={data.message}
								onChange={(e) => handleChange(e)}
								aria-label="Message"
								ref={messageRef}
							></textarea>
							{formError?.message && (
								<FormError message="Message is required." />
							)}
							<input
								type="submit"
								value="Send Message"
								className="btn btn--med"
							/>
						</form>
					</>
				)}
			</div>
		);
	}
};
