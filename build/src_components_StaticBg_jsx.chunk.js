"use strict";
(self["webpackChunkonline_portfolio_of_sherise_rogers"] = self["webpackChunkonline_portfolio_of_sherise_rogers"] || []).push([["src_components_StaticBg_jsx"],{

/***/ "./src/components/StaticBg.jsx"
/*!*************************************!*\
  !*** ./src/components/StaticBg.jsx ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaticBg: () => (/* binding */ StaticBg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var StaticBg = function StaticBg() {
  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  var Canvas = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
    (0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);
    var canvas = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)("canvas", {
      id: "animated-bg",
      className: "webgl",
      ref: ref
    });
    return canvas;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(function () {
    if (canvasRef.current) {
      var scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
      var objectsDistance = 4;
      var bodyH = document.documentElement.scrollHeight;
      scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color(0x2e303a);

      //Particles
      //Geometry
      var particlesCount = bodyH * 16;
      var positions = new Float32Array(particlesCount * 3);
      for (var i = 0; i < particlesCount; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * bodyH;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
      var particlesGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.BufferGeometry();
      particlesGeometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_2__.BufferAttribute(positions, 3));
      var particlesMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.PointsMaterial({
        color: "#e6e8e6",
        sizeAttenuation: true,
        size: 0.03
      });
      var particles = new three__WEBPACK_IMPORTED_MODULE_2__.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      //Light
      var directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight("#FFFFFF", 1);
      directionalLight.position.set(1, 1, 0);
      scene.add(directionalLight);

      //Sizes
      var sizes = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      window.addEventListener("resize", function () {
        //update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        //update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        //update renderer
        renderer.setClearColor(0x2e303a, 1);
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      //Scroll
      var scrollY = window.scrollY;
      window.addEventListener("scroll", function () {
        scrollY = window.scrollY;
      });

      //Cursor
      var cursor = {};
      cursor.x = 0;
      cursor.y = 0;
      window.addEventListener("mousemove", function (event) {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = event.clientY / sizes.height - 0.5;
      });

      //Camera Group
      var cameraGroup = new three__WEBPACK_IMPORTED_MODULE_2__.Group();
      scene.add(cameraGroup);

      //Base Camera
      var camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
      camera.position.z = 6;
      cameraGroup.add(camera);

      //Renderer
      var renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
        canvas: canvasRef.current
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      //Animate - Clock
      var clock = new three__WEBPACK_IMPORTED_MODULE_2__.Clock();
      var previousTime = 0;
      var _tick = function tick() {
        var elapsedTime = clock.getElapsedTime();
        var deltaTime = elapsedTime - previousTime;
        previousTime = elapsedTime;

        //Animate Camera
        camera.position.y = -(scrollY / sizes.height * objectsDistance);
        var parallaxX = cursor.x * 0.5;
        var parallaxY = -cursor.y * 0.5;
        cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
        cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

        //Render
        renderer.render(scene, camera);
        window.requestAnimationFrame(_tick);
      };
      _tick();
    }
  }, [canvasRef.current]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Canvas, {
    ref: canvasRef
  });
};

/***/ }

}]);
//# sourceMappingURL=src_components_StaticBg_jsx.chunk.js.map