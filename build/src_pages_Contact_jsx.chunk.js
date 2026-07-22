"use strict";
(self["webpackChunkonline_portfolio_of_sherise_rogers"] = self["webpackChunkonline_portfolio_of_sherise_rogers"] || []).push([["src_pages_Contact_jsx"],{

/***/ "./src/components/ContactForm.jsx"
/*!****************************************!*\
  !*** ./src/components/ContactForm.jsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactForm: () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useApi */ "./src/hooks/useApi.jsx");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var ContactForm = function ContactForm(_ref) {
  var heading = _ref.heading,
    text = _ref.text;
  var _useAPI = (0,_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__["default"])('options', 'wp', true),
    options = _useAPI.data,
    apiLoading = _useAPI.apiLoading,
    apiError = _useAPI.apiError;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState({
      first_name: '',
      last_name: '',
      subject: 'general_inquiry',
      email_address: '',
      message: ''
    }),
    _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
    data = _React$useState2[0],
    setData = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState({}),
    _React$useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
    formError = _React$useState4[0],
    setFormError = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__.useState({
      sending: false,
      sent: false,
      failed: false
    }),
    _React$useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
    state = _React$useState6[0],
    setState = _React$useState6[1];
  var fnRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var lnRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var emailRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var subjectRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var messageRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var handleChange = function handleChange(e) {
    var key = e.target.getAttribute('name');
    if (e.target.classList.contains('error')) {
      e.target.classList.remove('error');
      delete formError[key];
      setFormError(_objectSpread({}, formError));
    }
    setData(_objectSpread(_objectSpread({}, data), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };
  var _onSubmit = function onSubmit(e) {
    e.preventDefault();
    var errs = {};
    if (data.first_name && data.last_name && data.email_address && data.message) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        sending: true
      }));
      (0,emailjs_com__WEBPACK_IMPORTED_MODULE_4__.send)(options.emailjs.service_id, options.emailjs.template_id, data, options.emailjs.private_key).then(function (response) {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          sending: false,
          sent: true
        }));
      })["catch"](function (err) {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          sending: false,
          failed: true
        }));
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
      if (!data.email_address && !emailRef.current.classList.contains('error')) {
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
  var Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function (_ref2, ref) {
    var name = _ref2.name,
      label = _ref2.label,
      options = _ref2.options;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("select", {
      id: name,
      name: name,
      onChange: function onChange(e) {
        return handleChange(e);
      },
      "aria-label": label,
      ref: ref
    }, options.map(function (option, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("option", {
        key: i,
        value: option.value,
        selected: option.value === data.subject
      }, option.name);
    }));
  });
  var Error = function Error(_ref3) {
    var message = _ref3.message;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
      className: "error-message"
    }, message);
  };
  if (apiError) console.log('Error loading options:', apiError);
  if (!options || !options.emailjs || apiLoading) {
    return null;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      id: "contact--form",
      className: "contact--form"
    }, state.sending || state.sent || state.failed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "contact--form--messages"
    }, state.sending && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "sending message"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", null, "Sending...")), state.failed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "sending-error message"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", null, "Oops!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Something is wrong your request cannot be processed at this time. Try again later.")), state.sent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "thank-you message"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", null, data.first_name, ", your message was sent successfully!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Thank you ", data.first_name, ", I have received your", ' ', data.subject.replace('_', ' '), " request and will get back to you within 3 business days. You will also receive this message in your inbox here: ", data.email_address, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Looking forward to speaking with you soon, have a great day!"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (heading || text) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "contact--content"
    }, heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", null, heading), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "contact--body",
      dangerouslySetInnerHTML: {
        __html: text
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
      className: "contact--form--form",
      onSubmit: function onSubmit(e) {
        return _onSubmit(e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
      "for": "subject"
    }, "Subject: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      className: "asterisk required"
    }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Select, {
      name: "subject",
      label: "Subject",
      options: [{
        name: 'General Inquiry',
        value: 'general_inquiry'
      }, {
        name: 'Consultation',
        value: 'consultation'
      }],
      ref: subjectRef
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
      "for": "first_name"
    }, "First Name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      className: "asterisk required"
    }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
      id: "first_name",
      type: "text",
      name: "first_name",
      placeholder: "First Name",
      value: data.first_name,
      onChange: function onChange(e) {
        return handleChange(e);
      },
      "aria-label": "First Name",
      ref: fnRef
    }), (formError === null || formError === void 0 ? void 0 : formError.first_name) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Error, {
      message: "First name is required."
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
      "for": "last_name"
    }, "Last Name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      className: "asterisk required"
    }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
      id: "last_name",
      type: "text",
      name: "last_name",
      placeholder: "Last Name",
      value: data.last_name,
      onChange: function onChange(e) {
        return handleChange(e);
      },
      "aria-label": "Last Name",
      ref: lnRef
    }), (formError === null || formError === void 0 ? void 0 : formError.last_name) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Error, {
      message: "Last name is required."
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
      "for": "email_address"
    }, "Email Address: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      className: "asterisk required"
    }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
      id: "email_address",
      type: "email",
      name: "email_address",
      placeholder: "Email Address",
      value: data.email_address,
      onChange: function onChange(e) {
        return handleChange(e);
      },
      "aria-label": "Email Address",
      ref: emailRef
    }), (formError === null || formError === void 0 ? void 0 : formError.email_address) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Error, {
      message: "Email address is required."
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
      "for": "message"
    }, "Message: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
      className: "asterisk required"
    }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", {
      id: "message",
      name: "message",
      placeholder: "Message",
      value: data.message,
      onChange: function onChange(e) {
        return handleChange(e);
      },
      "aria-label": "Message",
      ref: messageRef
    }), (formError === null || formError === void 0 ? void 0 : formError.message) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Error, {
      message: "Message is required."
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
      type: "submit",
      value: "Send Message",
      className: "btn btn--med"
    }))));
  }
};

/***/ },

/***/ "./src/pages/Contact.jsx"
/*!*******************************!*\
  !*** ./src/pages/Contact.jsx ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contact: () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useApi */ "./src/hooks/useApi.jsx");
/* harmony import */ var _context_LoadingContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/LoadingContextProvider */ "./src/context/LoadingContextProvider.jsx");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ContactForm */ "./src/components/ContactForm.jsx");





var Contact = function Contact() {
  var _useAPI = (0,_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__["default"])('pages/9'),
    contactData = _useAPI.data,
    apiLoading = _useAPI.apiLoading,
    apiError = _useAPI.apiError;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_context_LoadingContextProvider__WEBPACK_IMPORTED_MODULE_3__.LoadingContext),
    _React$useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useContext, 1),
    loading = _React$useContext2[0];
  if (apiError) console.log('Error fetching contact page data:', apiError);
  if (apiLoading || loading.isLoading || !(contactData !== null && contactData !== void 0 && contactData.acf)) {
    return null;
  } else {
    var _contactData$acf, _contactData$acf2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      id: "contact",
      className: "contact"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "contact--container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ContactForm__WEBPACK_IMPORTED_MODULE_4__.ContactForm, {
      text: (_contactData$acf = contactData.acf) === null || _contactData$acf === void 0 ? void 0 : _contactData$acf.body,
      heading: (_contactData$acf2 = contactData.acf) === null || _contactData$acf2 === void 0 ? void 0 : _contactData$acf2.heading
    })));
  }
};

/***/ },

/***/ "./node_modules/emailjs-com/es/api/sendPost.js"
/*!*****************************************************!*\
  !*** ./node_modules/emailjs-com/es/api/sendPost.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendPost: () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/emailjs-com/es/store/store.js");


const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target));
        });
        xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__.store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};


/***/ },

/***/ "./node_modules/emailjs-com/es/index.js"
/*!**********************************************!*\
  !*** ./node_modules/emailjs-com/es/index.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init),
/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send),
/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm)
/* harmony export */ });
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/emailjs-com/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/emailjs-com/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/emailjs-com/es/methods/sendForm/sendForm.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm,
});


/***/ },

/***/ "./node_modules/emailjs-com/es/methods/init/init.js"
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/init/init.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");

/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID = userID;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._origin = origin;
};


/***/ },

/***/ "./node_modules/emailjs-com/es/methods/send/send.js"
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/send/send.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   send: () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/emailjs-com/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/emailjs-com/es/api/sendPost.js");



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: '3.2.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ },

/***/ "./node_modules/emailjs-com/es/methods/sendForm/sendForm.js"
/*!******************************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/sendForm/sendForm.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/emailjs-com/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/emailjs-com/es/api/sendPost.js");



const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.2.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ },

/***/ "./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js"
/*!*********************************************************************!*\
  !*** ./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}


/***/ },

/***/ "./node_modules/emailjs-com/es/store/store.js"
/*!****************************************************!*\
  !*** ./node_modules/emailjs-com/es/store/store.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
const store = {
    _origin: 'https://api.emailjs.com',
};


/***/ },

/***/ "./node_modules/emailjs-com/es/utils/validateParams.js"
/*!*************************************************************!*\
  !*** ./node_modules/emailjs-com/es/utils/validateParams.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateParams: () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};


/***/ }

}]);
//# sourceMappingURL=src_pages_Contact_jsx.chunk.js.map