"use strict";
(self["webpackChunkonline_portfolio_of_sherise_rogers"] = self["webpackChunkonline_portfolio_of_sherise_rogers"] || []).push([["src_pages_FourOhFour_jsx"],{

/***/ "./src/pages/FourOhFour.jsx"
/*!**********************************!*\
  !*** ./src/pages/FourOhFour.jsx ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FourOhFour: () => (/* binding */ FourOhFour)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HoverElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HoverElement */ "./src/components/HoverElement.jsx");
/* harmony import */ var _context_CursorContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CursorContextProvider */ "./src/context/CursorContextProvider.jsx");
/* harmony import */ var _context_LoadingContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/LoadingContextProvider */ "./src/context/LoadingContextProvider.jsx");





function FourOhFour() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_context_LoadingContextProvider__WEBPACK_IMPORTED_MODULE_4__.LoadingContext),
    _React$useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useContext, 1),
    loading = _React$useContext2[0];
  var _React$useContext3 = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_context_CursorContextProvider__WEBPACK_IMPORTED_MODULE_3__.CursorContext),
    _React$useContext4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useContext3, 2),
    setCursor = _React$useContext4[1];
  if (loading.isLoading) return null;
  var toggleCursor = function toggleCursor(isHovering) {
    setCursor(function () {
      return {
        active: isHovering
      };
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "four-oh-four"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "four-oh-four--container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "four-oh-four--content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", null, "Oh No!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "There's no magic in NOT finding what you're looking for, it seems the page you're trying to find no longer exists."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_HoverElement__WEBPACK_IMPORTED_MODULE_2__.HoverElement, {
    className: "btn btn--large",
    href: "/",
    onMouseEnter: function onMouseEnter(isHovering) {
      return toggleCursor(isHovering);
    },
    onMouseLeave: function onMouseLeave(isHovering) {
      return toggleCursor(isHovering);
    },
    "aria-label": "Navigate Home",
    reloadDocument: true
  }, "Back To Home"))));
}

/***/ }

}]);
//# sourceMappingURL=src_pages_FourOhFour_jsx.chunk.js.map