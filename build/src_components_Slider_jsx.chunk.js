"use strict";
(self["webpackChunkonline_portfolio_of_sherise_rogers"] = self["webpackChunkonline_portfolio_of_sherise_rogers"] || []).push([["src_components_Slider_jsx"],{

/***/ "./src/components/Slider.jsx"
/*!***********************************!*\
  !*** ./src/components/Slider.jsx ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! embla-carousel-react */ "./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js");
/* harmony import */ var embla_carousel_auto_height__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! embla-carousel-auto-height */ "./node_modules/embla-carousel-auto-height/esm/embla-carousel-auto-height.esm.js");
/* harmony import */ var embla_carousel_fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! embla-carousel-fade */ "./node_modules/embla-carousel-fade/esm/embla-carousel-fade.esm.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_CursorContextProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/CursorContextProvider */ "./src/context/CursorContextProvider.jsx");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Image */ "./src/components/Image.jsx");
/* harmony import */ var _HoverElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HoverElement */ "./src/components/HoverElement.jsx");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/helpers */ "./src/lib/helpers.js");












gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger);
var Slider = function Slider(_ref) {
  var design_samples = _ref.design_samples;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
    _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
    isLoaded = _React$useState2[0],
    setIsLoaded = _React$useState2[1];
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_context_CursorContextProvider__WEBPACK_IMPORTED_MODULE_8__.CursorContext),
    _React$useContext2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useContext, 2),
    setCursor = _React$useContext2[1];
  var btnRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  var containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  var breakpoint = 768;
  var pluginOptions = {
    active: true,
    breakpoint: breakpoint
  };
  var options = {
    containScroll: false,
    align: 'start',
    skipSnaps: false,
    loop: false,
    slidesToScroll: 1
  };
  var plugins = [(0,embla_carousel_auto_height__WEBPACK_IMPORTED_MODULE_5__["default"])(pluginOptions), (0,embla_carousel_fade__WEBPACK_IMPORTED_MODULE_6__["default"])(pluginOptions)];
  var _useEmblaCarousel = (0,embla_carousel_react__WEBPACK_IMPORTED_MODULE_4__["default"])(options, plugins),
    _useEmblaCarousel2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useEmblaCarousel, 2),
    emblaRef = _useEmblaCarousel2[0],
    emblaApi = _useEmblaCarousel2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState([]),
    _React$useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
    scrollSnaps = _React$useState4[0],
    setScrollSnaps = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__.useState(0),
    _React$useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
    selectedSnap = _React$useState6[0],
    setSelectedSnap = _React$useState6[1];
  var scrollTo = function scrollTo(index) {
    return emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.scrollTo(index);
  };
  var snaps = emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.scrollSnapList();
  var setupSnaps = function setupSnaps() {
    return setScrollSnaps(snaps);
  };
  var setActiveSnap = function setActiveSnap() {
    return setSelectedSnap(emblaApi === null || emblaApi === void 0 ? void 0 : emblaApi.selectedScrollSnap());
  };
  var handleScroll = function handleScroll(e, id) {
    e.preventDefault();
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  var toggleCursor = function toggleCursor(isHovering) {
    setCursor(function () {
      return {
        active: isHovering
      };
    });
  };

  // Function to re-initialize Embla when the slide changes
  var reInitHeight = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function () {
    if (emblaApi) {
      emblaApi.reInit(options, plugins);
    }
  }, [emblaApi]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    if (isLoaded && emblaApi) {
      setupSnaps();
      setActiveSnap();
      reInitHeight();
      emblaApi.on('reinit', setupSnaps);
      emblaApi.on('reinit', setActiveSnap);
      emblaApi.on('select', setActiveSnap);
      emblaApi.on('select', reInitHeight);

      // Unsubscribe from the event on component unmount
      return function () {
        emblaApi.off('select', reInitHeight);
      };
    }
  }, [emblaApi, isLoaded, reInitHeight]);
  react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(function () {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(btnRef.current, {
      opacity: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'center center',
        scrub: 0.5
      }
    });
  }, [btnRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "project--slider",
    ref: containerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_HoverElement__WEBPACK_IMPORTED_MODULE_10__.HoverElement, {
    href: "#",
    className: "back-to-controls",
    passedRef: btnRef,
    onMouseEnter: function onMouseEnter(isHovering) {
      return toggleCursor(isHovering);
    },
    onMouseLeave: function onMouseLeave(isHovering) {
      return toggleCursor(isHovering);
    },
    onClick: function onClick(e) {
      return handleScroll(e, 'project--samples');
    },
    "aria-label": "Back to slider controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "back-to-controls--text"
  }, "Back to Controls")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "project--samples embla",
    id: "project--samples"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "project--section--inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    id: "project--samples--slider--nav",
    className: "project--samples--nav embla__dots"
  }, scrollSnaps.map(function (_, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('embla__dot', {
        active: index === selectedSnap
      }),
      key: index,
      onClick: function onClick() {
        return scrollTo(index);
      }
    }, index === 0 ? 'First' : "Go to slide ".concat(index + 1));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "project--samples--slider embla__viewport",
    ref: emblaRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "project--samples--slider--inner embla__container"
  }, design_samples.map(function (image, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      key: i,
      className: "project--samples--img embla__slide"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_9__.Image, {
      id: image.image,
      onLoad: function onLoad() {
        return setIsLoaded(true);
      }
    }));
  })))));
};

/***/ }

}]);
//# sourceMappingURL=src_components_Slider_jsx.chunk.js.map