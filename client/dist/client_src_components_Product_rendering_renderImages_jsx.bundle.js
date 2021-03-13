/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfec"] = self["webpackChunkfec"] || []).push([["client_src_components_Product_rendering_renderImages_jsx"],{

/***/ "./client/src/components/Product_rendering/renderImages.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/Product_rendering/renderImages.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\nvar renderImages = function renderImages(props) {\n  return props.photos ? props.photos.map(function (item, i) {\n    return {\n      item: item\n    } ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n      id: \"\".concat(i),\n      onClick: function onClick(event) {\n        return props.changeLarge(event, item.photos[0].url, i);\n      },\n      className: \"thumbnails\",\n      src: item.photos[0].url,\n      width: \"167\",\n      height: \"auto\"\n    }, i) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {});\n  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderImages);\n\n//# sourceURL=webpack://fec/./client/src/components/Product_rendering/renderImages.jsx?");

/***/ })

}]);