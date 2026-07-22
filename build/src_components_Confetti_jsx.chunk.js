"use strict";
(self["webpackChunkonline_portfolio_of_sherise_rogers"] = self["webpackChunkonline_portfolio_of_sherise_rogers"] || []).push([["src_components_Confetti_jsx"],{

/***/ "./src/components/Confetti.jsx"
/*!*************************************!*\
  !*** ./src/components/Confetti.jsx ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Confetti: () => (/* binding */ Confetti)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-canvas-confetti */ "./node_modules/react-canvas-confetti/dist/index.js");
/* harmony import */ var react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! canvas-confetti */ "./node_modules/canvas-confetti/dist/confetti.module.mjs");



function Confetti(_ref) {
  var _ref$action = _ref.action,
    action = _ref$action === void 0 ? false : _ref$action,
    height = _ref.height;
  var canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: height || '100%',
    top: 0,
    left: 0,
    zIndex: 5
  };
  var refAnimationInstance = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var getInstance = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (instance) {
    refAnimationInstance.current = instance;
  }, []);

  // Fire the confetti with custom options
  var fire = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    if (refAnimationInstance.current) {
      var duration = 3 * 1000;
      var end = Date.now() + duration;
      (function frame() {
        // launch a few confetti from the left edge
        (0,canvas_confetti__WEBPACK_IMPORTED_MODULE_2__["default"])({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: {
            x: 0
          },
          colors: ['#339989', '#e4f1fe', '#708080', '#cce7e8', '#99b3b3', '#66a3a3']
        });
        // and launch a few from the right edge
        (0,canvas_confetti__WEBPACK_IMPORTED_MODULE_2__["default"])({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: {
            x: 1
          },
          colors: ['#339989', '#e4f1fe', '#708080', '#cce7e8', '#99b3b3', '#66a3a3']
        });

        // keep going until we are out of time
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (action) {
      fire();
    }
  }, [action]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_canvas_confetti__WEBPACK_IMPORTED_MODULE_1___default()), {
    onInit: getInstance,
    style: canvasStyles
  });
}

/***/ }

}]);
//# sourceMappingURL=src_components_Confetti_jsx.chunk.js.map