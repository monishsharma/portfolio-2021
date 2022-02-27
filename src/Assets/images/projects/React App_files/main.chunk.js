(this["webpackJsonpportfoilo"] = this["webpackJsonpportfoilo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".App {\n  min-height: 100vh;\n  \n}\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;;AAEnB","sourcesContent":[".App {\n  min-height: 100vh;\n  \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/NavBar/Navbar.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/NavBar/Navbar.css ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".navbar__custom__container {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n.navbar__custom {\n  position: relative;\n  width: 24px;\n  height: 18px;\n  cursor: pointer;\n  z-index: 1 !important;\n}\n\n.navbar__top,\n.navbar__bottom,\n.navbar__middle {\n  transform: rotate(0deg);\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n  display: block;\n  height: 2px;\n  width: 16px;\n  border-radius: 6px;\n  background-color: white;\n  position: absolute;\n  display: block;\n}\n\n.navbar__top {\n  top: 0;\n}\n\n.navbar__middle {\n  width: 24px;\n  top: 8px;\n}\n\n.navbar__bottom {\n  bottom: 0;\n}\n\n.navbar__content__container {\n  background-color: #141414;\n  position: fixed;\n  left: 0;\n  z-index: 11;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  -webkit-clip-path: circle(0px at 4rem 50%);\n          clip-path: circle(0px at 4rem 50%);\n  width: 100vw;\n  height: 100vh;\n  transition: all 0.5s ease-in-out;\n}\n\n.navbar__content__container.open {\n  -webkit-clip-path: circle(150vw at 4rem 50%);\n          clip-path: circle(150vw at 4rem 50%);\n}\n\n\n.navbar__custom.opens div:nth-child(2) {\n  position: relative;\n  transform: rotate(45deg);\n}\n\n.navbar__custom.opens div:nth-child(3) {\n  position: relative;\n  transform: rotate(-45deg);\n  width: 24px;\n  bottom: -6px;\n}\n\n.navbar__custom.opens div:nth-child(1) {\n  top: 18px;\n  width: 0%;\n  left: 50%;\n}\n\n.menu__body {\n  padding: 100px;\n  margin: 0 auto;\n  height: 500px;\n}\n\n\n.mainNav__left {\n  align-items: flex-start;\n}\n\n.mainNav__left,\n.mainNav__right {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.mainNav__right {\n  align-items: flex-end;\n}\n\n.mainNav__link__main {\n  margin-bottom: 1.5rem;\n  text-decoration: none !important;\n  color: white;\n  opacity: 0.3;\n  font-size: 4rem;\n  transition: opacity 0.1s ease, color 0.1s ease;\n}\n\n.mainNav__link__main:hover {\n  text-decoration: none;\n  opacity: 1;\n  color: white;\n  cursor: pointer;\n}\n\n.mainNav__link__main.active {\n  opacity: 1;\n}\n\n.contact {\n  margin-top: 2.5rem;\n  color: white;\n  font-size: 20px;\n  font-weight: bolder;\n}\n.mainNav__link__social {\n  padding: 8px 0 8px 8px;\n  margin-bottom: 0.5rem;\n  text-decoration: none;\n  color: white;\n  opacity: 0.3;\n  transition: opacity 0.1s ease, color 0.1s ease;\n  font-family: \"Satisfy\";\n}\n\n.mainNav__link__social:hover {\n  text-decoration: none;\n  opacity: 1;\n  color: white;\n}\n\n.nav__container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.logo {\n  color: white;\n  font-family: \"Satisfy\";\n  font-size: 34px;\n}\n.email {\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 1s ease-in-out;\n  text-decoration: none;\n}\n.email:hover {\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n  opacity: 0.7;\n}\n.portfolio__btn {\n  position: relative;\n  border: 0.125rem solid white;\n  border-radius: 0.5rem;\n  color: white;\n  padding: 0.5rem 1.5rem;\n  background-color: transparent;\n  transition: background-color 0.1s ease-in-out;\n  cursor: pointer;\n}\n.portfolio__btn:hover {\n  background-color: white;\n  color: black;\n}\n.overlay__sides {\n  margin: 3.125rem 0;\n\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  height: calc(100vh - 6.25rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.overlay__left {\n  left: 3.125rem;\n  align-items: flex-start;\n  z-index: 200;\n  z-index: 12;\n}\n\n.overlay__right {\n  right: 3.125rem;\n  align-items: flex-end;\n  z-index: 200;\n  z-index: 1;\n}\n\n.overlay__right img:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 991px) {\n  .portfolio__btn {\n    right: 1rem !important;\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .mainNav__link__main {\n    font-size: 3rem;\n  }\n  .navbar__content__container {\n    -webkit-clip-path: circle(0px at 2rem 5%);\n            clip-path: circle(0px at 2rem 5%);\n  }\n  .logo {\n    font-size: 24px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .mainNav__right {\n    display: none;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/Components/NavBar/Navbar.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,qBAAqB;AACvB;;AAEA;;;EAIE,uBAAuB;EAIvB,4BAA4B;EAC5B,eAAe;EACf,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,MAAM;AACR;;AAEA;EACE,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,OAAO;EACP,WAAW;EACX,QAAQ;EACR,SAAS;EACT,MAAM;EACN,0CAAkC;UAAlC,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,4CAAoC;UAApC,oCAAoC;AACtC;;;AAGA;EACE,kBAAkB;EAIlB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAIlB,yBAAyB;EACzB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,SAAS;EACT,SAAS;EACT,SAAS;AACX;;AAEA;EACE,cAAc;EACd,cAAc;EACd,aAAa;AACf;;;AAGA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,gCAAgC;EAChC,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,8CAA8C;AAChD;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;EACrB,YAAY;EACZ,YAAY;EACZ,8CAA8C;EAC9C,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,eAAe;EACf,UAAU;EACV,kCAAkC;EAClC,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,qBAAqB;EACrB,YAAY;EACZ,sBAAsB;EACtB,6BAA6B;EAC7B,6CAA6C;EAC7C,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,kBAAkB;;EAElB,eAAe;EACf,MAAM;EACN,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,yCAAiC;YAAjC,iCAAiC;EACnC;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF","sourcesContent":[".navbar__custom__container {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n.navbar__custom {\n  position: relative;\n  width: 24px;\n  height: 18px;\n  cursor: pointer;\n  z-index: 1 !important;\n}\n\n.navbar__top,\n.navbar__bottom,\n.navbar__middle {\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: 0.5s ease-in-out;\n  -moz-transition: 0.5s ease-in-out;\n  -o-transition: 0.5s ease-in-out;\n  transition: 0.5s ease-in-out;\n  cursor: pointer;\n  display: block;\n  height: 2px;\n  width: 16px;\n  border-radius: 6px;\n  background-color: white;\n  position: absolute;\n  display: block;\n}\n\n.navbar__top {\n  top: 0;\n}\n\n.navbar__middle {\n  width: 24px;\n  top: 8px;\n}\n\n.navbar__bottom {\n  bottom: 0;\n}\n\n.navbar__content__container {\n  background-color: #141414;\n  position: fixed;\n  left: 0;\n  z-index: 11;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  clip-path: circle(0px at 4rem 50%);\n  width: 100vw;\n  height: 100vh;\n  transition: all 0.5s ease-in-out;\n}\n\n.navbar__content__container.open {\n  clip-path: circle(150vw at 4rem 50%);\n}\n\n\n.navbar__custom.opens div:nth-child(2) {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.navbar__custom.opens div:nth-child(3) {\n  position: relative;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  width: 24px;\n  bottom: -6px;\n}\n\n.navbar__custom.opens div:nth-child(1) {\n  top: 18px;\n  width: 0%;\n  left: 50%;\n}\n\n.menu__body {\n  padding: 100px;\n  margin: 0 auto;\n  height: 500px;\n}\n\n\n.mainNav__left {\n  align-items: flex-start;\n}\n\n.mainNav__left,\n.mainNav__right {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.mainNav__right {\n  align-items: flex-end;\n}\n\n.mainNav__link__main {\n  margin-bottom: 1.5rem;\n  text-decoration: none !important;\n  color: white;\n  opacity: 0.3;\n  font-size: 4rem;\n  transition: opacity 0.1s ease, color 0.1s ease;\n}\n\n.mainNav__link__main:hover {\n  text-decoration: none;\n  opacity: 1;\n  color: white;\n  cursor: pointer;\n}\n\n.mainNav__link__main.active {\n  opacity: 1;\n}\n\n.contact {\n  margin-top: 2.5rem;\n  color: white;\n  font-size: 20px;\n  font-weight: bolder;\n}\n.mainNav__link__social {\n  padding: 8px 0 8px 8px;\n  margin-bottom: 0.5rem;\n  text-decoration: none;\n  color: white;\n  opacity: 0.3;\n  transition: opacity 0.1s ease, color 0.1s ease;\n  font-family: \"Satisfy\";\n}\n\n.mainNav__link__social:hover {\n  text-decoration: none;\n  opacity: 1;\n  color: white;\n}\n\n.nav__container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.logo {\n  color: white;\n  font-family: \"Satisfy\";\n  font-size: 34px;\n}\n.email {\n  font-size: 20px;\n  opacity: 1;\n  transition: opacity 1s ease-in-out;\n  text-decoration: none;\n}\n.email:hover {\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n  opacity: 0.7;\n}\n.portfolio__btn {\n  position: relative;\n  border: 0.125rem solid white;\n  border-radius: 0.5rem;\n  color: white;\n  padding: 0.5rem 1.5rem;\n  background-color: transparent;\n  transition: background-color 0.1s ease-in-out;\n  cursor: pointer;\n}\n.portfolio__btn:hover {\n  background-color: white;\n  color: black;\n}\n.overlay__sides {\n  margin: 3.125rem 0;\n\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  height: calc(100vh - 6.25rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.overlay__left {\n  left: 3.125rem;\n  align-items: flex-start;\n  z-index: 200;\n  z-index: 12;\n}\n\n.overlay__right {\n  right: 3.125rem;\n  align-items: flex-end;\n  z-index: 200;\n  z-index: 1;\n}\n\n.overlay__right img:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 991px) {\n  .portfolio__btn {\n    right: 1rem !important;\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .mainNav__link__main {\n    font-size: 3rem;\n  }\n  .navbar__content__container {\n    clip-path: circle(0px at 2rem 5%);\n  }\n  .logo {\n    font-size: 24px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .mainNav__right {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/ProjectDetail/index.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/ProjectDetail/index.css ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".projectDetail {\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n    z-index: 1;\n    height: 200vh;\n    /* position: fixed; */\n}\n.project_container {\n    z-index: 2;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n   justify-content: flex-end;\n    height: 100vh;\n}\n.project_heading {\n    z-index: 2;\n}\n.project_heading_h1 {\n    display: flex;\n    color: white;\n    justify-content: center;\n}\n\n.project_heading_p {\n    display: flex;\n    color: white;\n    justify-content: center;\n}\n\n.project_images {\n    height: 61.25%;\n    width: 100%;\n    margin-top: 3.75rem;\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n.project_images img {\n    position: absolute;\n\n}\n\n.project_image_holder {\n    position: relative;\n    z-index: 1;\n}\n/* .drawSvg {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n.hr {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    margin: 0;\n    width: 2px;\n    height: 50%;\n    border: none;\n    color: white;\n    background-color: currentColor;\n    /* z-index: -2; */\n    opacity: 0.5;\n}\n/* .project_content {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n\nalign-items: center;} */", "",{"version":3,"sources":["webpack://src/Components/ProjectDetail/index.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;GACvB,yBAAyB;IACxB,aAAa;AACjB;AACA;IACI,UAAU;AACd;AACA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;AACA;;;;;;;GAOG;AACH;IACI,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;IACjB,YAAY;AAChB;AACA;;;;;uBAKuB","sourcesContent":[".projectDetail {\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n    z-index: 1;\n    height: 200vh;\n    /* position: fixed; */\n}\n.project_container {\n    z-index: 2;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n   justify-content: flex-end;\n    height: 100vh;\n}\n.project_heading {\n    z-index: 2;\n}\n.project_heading_h1 {\n    display: flex;\n    color: white;\n    justify-content: center;\n}\n\n.project_heading_p {\n    display: flex;\n    color: white;\n    justify-content: center;\n}\n\n.project_images {\n    height: 61.25%;\n    width: 100%;\n    margin-top: 3.75rem;\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n.project_images img {\n    position: absolute;\n\n}\n\n.project_image_holder {\n    position: relative;\n    z-index: 1;\n}\n/* .drawSvg {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n.hr {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    margin: 0;\n    width: 2px;\n    height: 50%;\n    border: none;\n    color: white;\n    background-color: currentColor;\n    /* z-index: -2; */\n    opacity: 0.5;\n}\n/* .project_content {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n\nalign-items: center;} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/TextToPath/TextToPath.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/TextToPath/TextToPath.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.text-wrapper {\n  position: absolute;\n    width: 100%;\n    z-index: 1;\n}\n\n\nsvg text {\n\ttext-transform: uppercase;\n\tanimation: stroke 1.5s forwards ease-in;\n\tstroke-width: 1;\n\tstroke: rgb(255,255,255);\n\tfont-size: 70px;\n\tfill: transparent;\n\tfont-family: \"Poppins\", sans-serif;\n\tfont-weight: bolder;\n\topacity: .2;\n}\n@keyframes stroke {\n\t0%   {\n\t\tfill: transparent; stroke: rgb(255,255,255);\n\t\tstroke-dashoffset: 100%; stroke-dasharray: 0 50%; stroke-width: 1;\n\t}\n\t/* 80%  {fill:transparent; stroke: rgb(255,255,255); stroke-width: 1; } */\n\t100% {\n\t\tfill:transparent; stroke: rgb(255,255,255); \n\t\tstroke-dashoffset: 100%; stroke-dasharray: 50% 0; stroke-width: 1;\n\t}\n}", "",{"version":3,"sources":["webpack://src/Components/TextToPath/TextToPath.css"],"names":[],"mappings":";AACA;EACE,kBAAkB;IAChB,WAAW;IACX,UAAU;AACd;;;AAGA;CACC,yBAAyB;CACzB,uCAAuC;CACvC,eAAe;CACf,wBAAwB;CACxB,eAAe;CACf,iBAAiB;CACjB,kCAAkC;CAClC,mBAAmB;CACnB,WAAW;AACZ;AACA;CACC;EACC,iBAAiB,EAAE,wBAAwB;EAC3C,uBAAuB,EAAE,uBAAuB,EAAE,eAAe;CAClE;CACA,yEAAyE;CACzE;EACC,gBAAgB,EAAE,wBAAwB;EAC1C,uBAAuB,EAAE,uBAAuB,EAAE,eAAe;CAClE;AACD","sourcesContent":["\n.text-wrapper {\n  position: absolute;\n    width: 100%;\n    z-index: 1;\n}\n\n\nsvg text {\n\ttext-transform: uppercase;\n\tanimation: stroke 1.5s forwards ease-in;\n\tstroke-width: 1;\n\tstroke: rgb(255,255,255);\n\tfont-size: 70px;\n\tfill: transparent;\n\tfont-family: \"Poppins\", sans-serif;\n\tfont-weight: bolder;\n\topacity: .2;\n}\n@keyframes stroke {\n\t0%   {\n\t\tfill: transparent; stroke: rgb(255,255,255);\n\t\tstroke-dashoffset: 100%; stroke-dasharray: 0 50%; stroke-width: 1;\n\t}\n\t/* 80%  {fill:transparent; stroke: rgb(255,255,255); stroke-width: 1; } */\n\t100% {\n\t\tfill:transparent; stroke: rgb(255,255,255); \n\t\tstroke-dashoffset: 100%; stroke-dasharray: 50% 0; stroke-width: 1;\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/project-challenge/style.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/project-challenge/style.css ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".covidContainer {\n    height: 100vh;\n    color: white;\n    width: 100%;\n    margin: 4.375rem 0;\n    font-family: \"Poppins\", sans-serif;\n}\n.projectChallenge {\n    height: 100%;\n}\n.text-lineBefore {\n    position: relative;\n    display: flex;\n    align-items: center;\n}\n.text-lineBefore:before {\n    position: absolute;\n    left: -2.375rem;\n    content: \"\";\n    width: 1.875rem;\n    height: 0.0625rem;\n    background-color: #4b4b4d;\n}\n.spanColor {\n    font-size: 13px;\n    font-weight: 600;\n    color: #4b4b4d;\n    text-transform: uppercase;\n}\n.challenegHeading {\n    font-weight: 600;\n    margin: 0.625rem 0 1.875rem;\n    font-size: 2.2rem;\n}\n.break {\n    width: 2.5rem;\n    height: 0.25rem;\n    border: transparent;\n    margin: 0;\n}\n.challengeP {\n    margin-top: 2.5rem;\n    font-size: 1.125rem;\n    line-height: 1.8em;\n    margin-bottom: 1rem;\n    font-weight: 400;\n}\n.challenge__clientInfo {\n    margin: 0.75rem 0 1.875rem;\n    font-size: 1rem;\n    line-height: 1.7em;\n    font-size: 400;\n}\n.sources {\n    color: white;\n}\n.sources:hover{\n    cursor: pointer;\n    text-decoration: none;\n    color: white;\n    opacity: 0.7;\n}\n.prjectChallenge_images {\n    margin: 8.625rem 5.625rem 7.5rem;\n}\n.challenge__imageHolder {\n    /* display: flex; */\n    justify-content: space-between;\n    align-items: flex-end;\n}\n.prjectChallenge_images img {\n    border-radius: 25px;\n}\n.prjectChallenge_images img:nth-child(1) {\n    width: calc(70% - 2rem);\n    margin-right: 4rem;\n}\n.prjectChallenge_images img:nth-child(2) {\n    width: calc(30% - 2rem);\n    margin-bottom: 2.25rem;\n}\n\n.service__list {\n    list-style-type: none;\n    padding-left: 0;\n}\n.service__list > li {\n    line-height: 2rem;\n}", "",{"version":3,"sources":["webpack://src/Components/project-challenge/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kCAAkC;AACtC;AACA;IACI,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,qBAAqB;IACrB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,mBAAmB;IACnB,8BAA8B;IAC9B,qBAAqB;AACzB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB","sourcesContent":[".covidContainer {\n    height: 100vh;\n    color: white;\n    width: 100%;\n    margin: 4.375rem 0;\n    font-family: \"Poppins\", sans-serif;\n}\n.projectChallenge {\n    height: 100%;\n}\n.text-lineBefore {\n    position: relative;\n    display: flex;\n    align-items: center;\n}\n.text-lineBefore:before {\n    position: absolute;\n    left: -2.375rem;\n    content: \"\";\n    width: 1.875rem;\n    height: 0.0625rem;\n    background-color: #4b4b4d;\n}\n.spanColor {\n    font-size: 13px;\n    font-weight: 600;\n    color: #4b4b4d;\n    text-transform: uppercase;\n}\n.challenegHeading {\n    font-weight: 600;\n    margin: 0.625rem 0 1.875rem;\n    font-size: 2.2rem;\n}\n.break {\n    width: 2.5rem;\n    height: 0.25rem;\n    border: transparent;\n    margin: 0;\n}\n.challengeP {\n    margin-top: 2.5rem;\n    font-size: 1.125rem;\n    line-height: 1.8em;\n    margin-bottom: 1rem;\n    font-weight: 400;\n}\n.challenge__clientInfo {\n    margin: 0.75rem 0 1.875rem;\n    font-size: 1rem;\n    line-height: 1.7em;\n    font-size: 400;\n}\n.sources {\n    color: white;\n}\n.sources:hover{\n    cursor: pointer;\n    text-decoration: none;\n    color: white;\n    opacity: 0.7;\n}\n.prjectChallenge_images {\n    margin: 8.625rem 5.625rem 7.5rem;\n}\n.challenge__imageHolder {\n    /* display: flex; */\n    justify-content: space-between;\n    align-items: flex-end;\n}\n.prjectChallenge_images img {\n    border-radius: 25px;\n}\n.prjectChallenge_images img:nth-child(1) {\n    width: calc(70% - 2rem);\n    margin-right: 4rem;\n}\n.prjectChallenge_images img:nth-child(2) {\n    width: calc(30% - 2rem);\n    margin-bottom: 2.25rem;\n}\n\n.service__list {\n    list-style-type: none;\n    padding-left: 0;\n}\n.service__list > li {\n    line-height: 2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/projects-card/index.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/projects-card/index.css ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".shiftProjectYaxis {\n    position: relative;\n    top: -60px;\n    /* transform: translateY(-60px); */\n}\n.project {\n    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);;\n    border-radius: 0.75rem;\n    height: 29rem;\n    display: flex;\n    max-width: 21.25rem;\n    /* background-color: red; */\n    overflow: hidden;\n    position: relative;\n    transition: all 1s;\n    z-index: 1;\n\n}\na{\n    text-decoration: none;\n}\na:visited {\n    text-decoration: none;\n}\na:hover {\n    text-decoration: none !important;\n  }\n  a:active {\n    color: blue;\n  }\n\n.project:hover {\n    cursor: pointer;\n    z-index: 10;\n    transform: scale(1.1);\n}\n.project .shiftProjectYaxis:hover {\n    cursor: pointer;\n    z-index: 10;\n    transform: scale(1.1) !important;\n    transform: translateY(-60px) !important;\n} \n\n.project h4 {\n    color:  white;\n    padding: 1.875rem;\n}\n.project-inner {\n    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);;\n    display: flex;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    flex-direction: column;\n    align-items: flex-start;\n    position: relative;\n    height: 100%;\n    padding: 2rem 1.75rem;\n    border-radius: v4px;\n    background-color: black;\n}\n\n.nonFocusedProject {\n    opacity: 0.2;\n    animation: opacity 2s ease;\n}\n\n@keyframes opacityAnimatin {\n    100%{\n        opacity: 0.2;\n    }\n}\n\n@media (max-width: 1200px) {\n    .shiftProjectYaxis {\n        transform: translateY(0);\n    }\n}", "",{"version":3,"sources":["webpack://src/Components/projects-card/index.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,UAAU;IACV,kCAAkC;AACtC;AACA;IACI,+CAA+C;IAC/C,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;;AAEd;AACA;IACI,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,gCAAgC;EAClC;EACA;IACE,WAAW;EACb;;AAEF;IACI,eAAe;IACf,WAAW;IACX,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,WAAW;IACX,gCAAgC;IAChC,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,+CAA+C;IAC/C,aAAa;IAEb,8BAA8B;IAC9B,yBAAyB;IACzB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,wBAAwB;IAC5B;AACJ","sourcesContent":[".shiftProjectYaxis {\n    position: relative;\n    top: -60px;\n    /* transform: translateY(-60px); */\n}\n.project {\n    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);;\n    border-radius: 0.75rem;\n    height: 29rem;\n    display: flex;\n    max-width: 21.25rem;\n    /* background-color: red; */\n    overflow: hidden;\n    position: relative;\n    transition: all 1s;\n    z-index: 1;\n\n}\na{\n    text-decoration: none;\n}\na:visited {\n    text-decoration: none;\n}\na:hover {\n    text-decoration: none !important;\n  }\n  a:active {\n    color: blue;\n  }\n\n.project:hover {\n    cursor: pointer;\n    z-index: 10;\n    transform: scale(1.1);\n}\n.project .shiftProjectYaxis:hover {\n    cursor: pointer;\n    z-index: 10;\n    transform: scale(1.1) !important;\n    transform: translateY(-60px) !important;\n} \n\n.project h4 {\n    color:  white;\n    padding: 1.875rem;\n}\n.project-inner {\n    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);;\n    display: flex;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    flex-direction: column;\n    align-items: flex-start;\n    position: relative;\n    height: 100%;\n    padding: 2rem 1.75rem;\n    border-radius: v4px;\n    background-color: black;\n}\n\n.nonFocusedProject {\n    opacity: 0.2;\n    animation: opacity 2s ease;\n}\n\n@keyframes opacityAnimatin {\n    100%{\n        opacity: 0.2;\n    }\n}\n\n@media (max-width: 1200px) {\n    .shiftProjectYaxis {\n        transform: translateY(0);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/smooth-scroll/style.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Components/smooth-scroll/style.css ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".parent {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n  ", "",{"version":3,"sources":["webpack://src/Components/smooth-scroll/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,gBAAgB;EAClB","sourcesContent":[".parent {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/SectionView/SectionView.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Containers/SectionView/SectionView.css ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/About/About.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Containers/Sections/About/About.css ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".landing {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n.about__holder {\n    margin: 100px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    height: 100%;\n  }\n  .about__holder h4 {\n    color: white;\n    font-size: 1rem;\n    margin-bottom: 2.5rem;\n  }\n  .about__holder p {\n    /* color: transparent;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: white; */\n    margin: 0.75rem 0 1.875rem;\n    font-size: 2.25rem;\n    color: white;\n    font-weight: bolder;\n    margin-bottom: 2.5rem;\n  }\n  .about__section {\n    z-index: 999;\n\n    font-size: 22px;\n    line-height: 2.2em;\n    color: white;\n    text-align: left;\n    margin-bottom: 1rem;\n  }\n  .stack {\n    width: 100%;\n    margin-top: 3.75rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  .stack__img {\n  \n    /* filter: grayscale(1) contrast(1.5); */\n    width: calc(25% - 15px);\n    margin-bottom: 3.125rem;\n    max-width: 10%;\n    max-height: 10%;\n  }\n  .img__Container{\n    display: flex;\n  }\n  \n\n", "",{"version":3,"sources":["webpack://src/Containers/Sections/About/About.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;AACF;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;EACd;EACA;IACE,YAAY;IACZ,eAAe;IACf,qBAAqB;EACvB;EACA;IACE;;uCAEmC;IACnC,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,qBAAqB;EACvB;EACA;IACE,YAAY;;IAEZ,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;EACjB;EACA;;IAEE,wCAAwC;IACxC,uBAAuB;IACvB,uBAAuB;IACvB,cAAc;IACd,eAAe;EACjB;EACA;IACE,aAAa;EACf","sourcesContent":[".landing {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n.about__holder {\n    margin: 100px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    height: 100%;\n  }\n  .about__holder h4 {\n    color: white;\n    font-size: 1rem;\n    margin-bottom: 2.5rem;\n  }\n  .about__holder p {\n    /* color: transparent;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: white; */\n    margin: 0.75rem 0 1.875rem;\n    font-size: 2.25rem;\n    color: white;\n    font-weight: bolder;\n    margin-bottom: 2.5rem;\n  }\n  .about__section {\n    z-index: 999;\n\n    font-size: 22px;\n    line-height: 2.2em;\n    color: white;\n    text-align: left;\n    margin-bottom: 1rem;\n  }\n  .stack {\n    width: 100%;\n    margin-top: 3.75rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  .stack__img {\n  \n    /* filter: grayscale(1) contrast(1.5); */\n    width: calc(25% - 15px);\n    margin-bottom: 3.125rem;\n    max-width: 10%;\n    max-height: 10%;\n  }\n  .img__Container{\n    display: flex;\n  }\n  \n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/Landing/Landing.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Containers/Sections/Landing/Landing.css ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Assets_images_landing_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Assets/images/landing.png */ "./src/Assets/images/landing.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Assets_images_landing_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".landing {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .author__background {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: 40%;\n    background-position: 50%;\n  }\n  .landing__holder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  \n    justify-content: center;\n    text-align: center;\n    height: 100%;\n  }\n  .landing__holder h1 {\n    color: white;\n    font-size: 3rem;\n    margin-bottom: 2.5rem;\n    line-height: 5.3rem;\n  }", "",{"version":3,"sources":["webpack://src/Containers/Sections/Landing/Landing.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,mDAAqD;IACrD,4BAA4B;IAC5B,oBAAoB;IACpB,wBAAwB;EAC1B;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;EACd;EACA;IACE,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,mBAAmB;EACrB","sourcesContent":[".landing {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .author__background {\n    background: url(\"../../../Assets/images/landing.png\");\n    background-repeat: no-repeat;\n    background-size: 40%;\n    background-position: 50%;\n  }\n  .landing__holder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  \n    justify-content: center;\n    text-align: center;\n    height: 100%;\n  }\n  .landing__holder h1 {\n    color: white;\n    font-size: 3rem;\n    margin-bottom: 2.5rem;\n    line-height: 5.3rem;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/Projects/Xamidea/Xamidea.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Containers/Sections/Projects/Xamidea/Xamidea.css ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".xamidea__Section {\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project__image {\n  position: relative;\n}\n.projects__row {\n  /* margin: 100px auto; */\n}\n.span {\n  font-size: 1rem;\n  /* font-family: \"Sofia PRO\"; */\n  line-height: 1.3em;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.first__heading {\n  color: #ffbb4d;\n  margin-right: 1.25rem;\n}\n.second__heading {\n  color: #ed1f27;\n}\n\n.project__heading {\n  margin: 0.75rem 0 1.75rem;\n  font-weight: 600;\n  font-size: 3rem;\n  color: #ffffff;\n  line-height: 1.3em;\n}\n\n.project__Detail {\n  font-size: 1rem;\n  line-height: 2.5em;\n  color: #ffffff;\n}\n\n.check {\n  margin: 4.5rem 0;\n  color: white;\n  font-weight: 600;\n\n  transition: color .45s ease-in-out;\n}\n\n.aboutApp:hover {\n    cursor: pointer;\n}\n\n.aboutApp:hover .check {\n    cursor: pointer;\n  color: #ffbb4d;\n  font-weight: 600;\n\n\n}\n\n#laptop {\n  opacity: 0;\n}\n\n/* .img__container img {\n  opacity:0;\n  animation:load_up 2s forwards;\n  z-index: 9999;\n}\n\n\n@keyframes load_up{\n  from{opacity:0;bottom:-189%}\n  to{opacity:1;bottom:15%;}\n  \n} */", "",{"version":3,"sources":["webpack://src/Containers/Sections/Projects/Xamidea/Xamidea.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;;EAEhB,kCAAkC;AACpC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;EACjB,cAAc;EACd,gBAAgB;;;AAGlB;;AAEA;EACE,UAAU;AACZ;;AAEA;;;;;;;;;;;GAWG","sourcesContent":[".xamidea__Section {\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project__image {\n  position: relative;\n}\n.projects__row {\n  /* margin: 100px auto; */\n}\n.span {\n  font-size: 1rem;\n  /* font-family: \"Sofia PRO\"; */\n  line-height: 1.3em;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.first__heading {\n  color: #ffbb4d;\n  margin-right: 1.25rem;\n}\n.second__heading {\n  color: #ed1f27;\n}\n\n.project__heading {\n  margin: 0.75rem 0 1.75rem;\n  font-weight: 600;\n  font-size: 3rem;\n  color: #ffffff;\n  line-height: 1.3em;\n}\n\n.project__Detail {\n  font-size: 1rem;\n  line-height: 2.5em;\n  color: #ffffff;\n}\n\n.check {\n  margin: 4.5rem 0;\n  color: white;\n  font-weight: 600;\n\n  transition: color .45s ease-in-out;\n}\n\n.aboutApp:hover {\n    cursor: pointer;\n}\n\n.aboutApp:hover .check {\n    cursor: pointer;\n  color: #ffbb4d;\n  font-weight: 600;\n\n\n}\n\n#laptop {\n  opacity: 0;\n}\n\n/* .img__container img {\n  opacity:0;\n  animation:load_up 2s forwards;\n  z-index: 9999;\n}\n\n\n@keyframes load_up{\n  from{opacity:0;bottom:-189%}\n  to{opacity:1;bottom:15%;}\n  \n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/experience/sttyles.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Containers/Sections/experience/sttyles.css ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n    --color-surface: #8892b0;\n    --active-tab-color: #EF6E0C;\n}\n\n.container {\n    height: 100%;\n}\n.experience__container {\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    max-width: 800px;\n}\n.nav-link.active {\n    background-color: var(--active-tab-color) !important;\n    opacity: 1!important;\n    color: white;\n}\n.nav-link {\n    display: block;\n    padding: 0.5rem 1rem;\n    color: #fff!important;\n    font-size: 18px!important;\n}\n.CompanyName {\n    color: #ccd6f6;\n}\n.CompanyName, .CompanyName span {\n    font-size: 22px;\n    font-weight: 500;\n    margin-bottom: 5px;\n}\n.CompanyName, .CompanyName span {\n    font-size: 22px;\n    font-weight: 500;\n    margin-bottom: 5px;\n}\n.years {\n    font-size: 13px;\n    font-weight: 400;\n    letter-spacing: .05em;\n    color: #8892b0;\n    margin-bottom: 30px;\n    margin-top: 10px;\n}\n.learntList {\n    position: relative;\n    margin-bottom: 10px;\n    padding-left: 20px;\n    width: 100%;\n    font-size: 17px;\n    color: #8892b0;\n}\n.learnt li {\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 10px;\n}\n.learntList:before {\n    content: \"▹\";\n    position: absolute;\n    left: 0;\n    color: var(--color-surface);\n    font-size: 20px;\n    line-height: 28px;\n}", "",{"version":3,"sources":["webpack://src/Containers/Sections/experience/sttyles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,oDAAoD;IACpD,oBAAoB;IACpB,YAAY;AAChB;AACA;IACI,cAAc;IACd,oBAAoB;IACpB,qBAAqB;IACrB,yBAAyB;AAC7B;AACA;IACI,cAAc;AAClB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,cAAc;IACd,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,OAAO;IACP,2BAA2B;IAC3B,eAAe;IACf,iBAAiB;AACrB","sourcesContent":[":root {\n    --color-surface: #8892b0;\n    --active-tab-color: #EF6E0C;\n}\n\n.container {\n    height: 100%;\n}\n.experience__container {\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    max-width: 800px;\n}\n.nav-link.active {\n    background-color: var(--active-tab-color) !important;\n    opacity: 1!important;\n    color: white;\n}\n.nav-link {\n    display: block;\n    padding: 0.5rem 1rem;\n    color: #fff!important;\n    font-size: 18px!important;\n}\n.CompanyName {\n    color: #ccd6f6;\n}\n.CompanyName, .CompanyName span {\n    font-size: 22px;\n    font-weight: 500;\n    margin-bottom: 5px;\n}\n.CompanyName, .CompanyName span {\n    font-size: 22px;\n    font-weight: 500;\n    margin-bottom: 5px;\n}\n.years {\n    font-size: 13px;\n    font-weight: 400;\n    letter-spacing: .05em;\n    color: #8892b0;\n    margin-bottom: 30px;\n    margin-top: 10px;\n}\n.learntList {\n    position: relative;\n    margin-bottom: 10px;\n    padding-left: 20px;\n    width: 100%;\n    font-size: 17px;\n    color: #8892b0;\n}\n.learnt li {\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 10px;\n}\n.learntList:before {\n    content: \"▹\";\n    position: absolute;\n    left: 0;\n    color: var(--color-surface);\n    font-size: 20px;\n    line-height: 28px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Assets_Satisfy_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Satisfy-Regular.ttf */ "./src/Assets/Satisfy-Regular.ttf");
/* harmony import */ var _Assets_sofiapro_otf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assets/sofiapro.otf */ "./src/Assets/sofiapro.otf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Assets_Satisfy_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Assets_sofiapro_otf__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #1e1e20 !important;\n  /* perspective: 1000px; */\n  overflow-x: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n@font-face {\n  font-family: 'Satisfy';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  src: local('./Assets/Satisfy-Regular.ttf') format(\"truetype\")\n\n}\n\n@font-face {\n  font-family: 'Sofia PRO';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"OpenType \");\n  src: local('./Assets/sofiapro.otf') format(\"OpenType \")\n\n}\n\n.heading{ /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #fbd3e9, #bb377d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n#fp-nav.fp-right {\n  right: 3.5rem !important;\n}\n#fp-nav ul li a span, .fp-slidesNav ul li a span{\n  background: white !important;\n}\n#fp-nav.hide{\n  display: none;\n}\n#fp-nav.show{\n  display: block;\n}\n\n@keyframes load_up{\n  from{opacity:0;}\n  to{opacity:1;}\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,mCAAmC;EACnC,kCAAkC;EAClC,oCAAoC;EACpC,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,+DAA2D;EAC3D;;AAEF;;AAEA;EACE,wBAAwB;EACxB,gEAAqD;EACrD;;AAEF;;AAEA,UACmE,+BAA+B;EAChG,uDAAuD,EAAE,qEAAqE;EAC9H,6BAA6B;EAC7B,oCAAoC;AACtC;;;AAGA;EACE;aACW;AACb;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;;AAEA;EACE,KAAK,SAAS,CAAC;EACf,GAAG,SAAS,CAAC;AACf","sourcesContent":["body {\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #1e1e20 !important;\n  /* perspective: 1000px; */\n  overflow-x: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n@font-face {\n  font-family: 'Satisfy';\n  src: url('./Assets/Satisfy-Regular.ttf') format(\"truetype\");\n  src: local('./Assets/Satisfy-Regular.ttf') format(\"truetype\")\n\n}\n\n@font-face {\n  font-family: 'Sofia PRO';\n  src: url('./Assets/sofiapro.otf') format(\"OpenType \");\n  src: local('./Assets/sofiapro.otf') format(\"OpenType \")\n\n}\n\n.heading{\n  background: -webkit-linear-gradient(to right, #fbd3e9, #bb377d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #fbd3e9, #bb377d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n#fp-nav.fp-right {\n  right: 3.5rem !important;\n}\n#fp-nav ul li a span, .fp-slidesNav ul li a span{\n  background: white !important;\n}\n#fp-nav.hide{\n  display: none;\n}\n#fp-nav.show{\n  display: block;\n}\n\n@keyframes load_up{\n  from{opacity:0;}\n  to{opacity:1;}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/work/work.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/work/work.css ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ourWorks {\n    width: 100%;\n    /* position: fixed; */\n}\n\n\n.work_wrapper {\n    width: 100%;\n    min-height: 45vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .hero_work {\n    padding-top: 5%;\n    color: white;\n    width: 50%;\n    font-weight: 400;\n    font-size: 1.7rem;\n    line-height: 1.7em;\n    text-align: center;\n  }\n    \n.projects {\n    padding: 30px 0px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));\n\n    /* grid-gap: 1rem 1rem; */\n    grid-gap: 2rem 1rem;\n    gap: 2rem 1rem;\n}\n.navcontainer {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n}", "",{"version":3,"sources":["webpack://src/pages/work/work.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,qBAAqB;AACzB;;;AAGA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,eAAe;IACf,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;EACpB;;AAEF;IACI,iBAAiB;IACjB,aAAa;IACb,yDAAyD;;IAEzD,yBAAyB;IACzB,mBAAc;IAAd,cAAc;AAClB;AACA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB","sourcesContent":[".ourWorks {\n    width: 100%;\n    /* position: fixed; */\n}\n\n\n.work_wrapper {\n    width: 100%;\n    min-height: 45vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .hero_work {\n    padding-top: 5%;\n    color: white;\n    width: 50%;\n    font-weight: 400;\n    font-size: 1.7rem;\n    line-height: 1.7em;\n    text-align: center;\n  }\n    \n.projects {\n    padding: 30px 0px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));\n\n    /* grid-gap: 1rem 1rem; */\n    gap: 2rem 1rem;\n}\n.navcontainer {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/NavBar */ "./src/Components/NavBar/index.js");
/* harmony import */ var _Containers_SectionView_SectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Containers/SectionView/SectionView */ "./src/Containers/SectionView/SectionView.jsx");
/* harmony import */ var _pages_work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/work */ "./src/pages/work/index.js");
/* harmony import */ var _Components_ProjectDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/ProjectDetail */ "./src/Components/ProjectDetail/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_scroll_to_top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/scroll-to-top */ "./src/Components/scroll-to-top/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/App.js";










function App() {
  console.log(react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobile"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _Containers_SectionView_SectionView__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/work",
        component: _pages_work__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/work/:id",
        component: _Components_ProjectDetail__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Components_scroll_to_top__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Assets/Satisfy-Regular.ttf":
/*!****************************************!*\
  !*** ./src/Assets/Satisfy-Regular.ttf ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Satisfy-Regular.32a67135.ttf");

/***/ }),

/***/ "./src/Assets/images/landing.png":
/*!***************************************!*\
  !*** ./src/Assets/images/landing.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/landing.3d2f3b55.png");

/***/ }),

/***/ "./src/Assets/images/projects/a.png":
/*!******************************************!*\
  !*** ./src/Assets/images/projects/a.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/a.408e7a1f.png");

/***/ }),

/***/ "./src/Assets/images/projects/covid.png":
/*!**********************************************!*\
  !*** ./src/Assets/images/projects/covid.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/covid.8ffa1fe3.png");

/***/ }),

/***/ "./src/Assets/images/projects/covid/allcases.png":
/*!*******************************************************!*\
  !*** ./src/Assets/images/projects/covid/allcases.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/allcases.4220bced.png");

/***/ }),

/***/ "./src/Assets/images/projects/covid/map.png":
/*!**************************************************!*\
  !*** ./src/Assets/images/projects/covid/map.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/map.a1941857.png");

/***/ }),

/***/ "./src/Assets/images/projects/keep-clone/keep-laptop.png":
/*!***************************************************************!*\
  !*** ./src/Assets/images/projects/keep-clone/keep-laptop.png ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/keep-laptop.50522090.png");

/***/ }),

/***/ "./src/Assets/images/projects/keep-clone/loggedin.png":
/*!************************************************************!*\
  !*** ./src/Assets/images/projects/keep-clone/loggedin.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/loggedin.b83bf78b.png");

/***/ }),

/***/ "./src/Assets/images/projects/keep-clone/loggedinm.png":
/*!*************************************************************!*\
  !*** ./src/Assets/images/projects/keep-clone/loggedinm.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/loggedinm.afca9b37.png");

/***/ }),

/***/ "./src/Assets/images/projects/keep-clone/mobilelogin.png":
/*!***************************************************************!*\
  !*** ./src/Assets/images/projects/keep-clone/mobilelogin.png ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mobilelogin.2f9c2de7.png");

/***/ }),

/***/ "./src/Assets/images/projects/keep-clone/mobilenote.png":
/*!**************************************************************!*\
  !*** ./src/Assets/images/projects/keep-clone/mobilenote.png ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mobilenote.de9f3867.png");

/***/ }),

/***/ "./src/Assets/images/projects/keep.png":
/*!*********************************************!*\
  !*** ./src/Assets/images/projects/keep.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAXy0lEQVR42u3dO24cVxqGYa3A4AYEMNcOtAKFzJQyMTAhAW9A0Aq4AkLRZAMwmMCAFDBRoAGUOBAMBYINAk4UjAJK1mVmeuo0uw1asi6sPnU59T0DPMkAtqXTTf5vVZ2qurFarW4AAFksAgAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAY4C8/wv8u/nljr3PQudc567zqrAD4k1eb35H3Nr8z94b83SwABMCQQ/+wc+qHGqC3083v0j0BIABmHQDdl3S/c+woH6D62YFyZmBfAAiAWQXA5oj/2A8pwOCOa5wREAACoMbwP3LEDzD6GYEjASAAJgmAzen+Mz+IAJM563tZQAAIgL7D/8BRP8BszgYcCAABMHgAbDai+KEDmJd7AkAADBYA3RfsgR8ygNl6IAAEQNUA2OzyN/wBFhIBAkAAOPIHCIwAASAADH+AwAgQAALAhj+AwI2BAkAAfO1WPz9AAG07EAAC4JsDYPOQH/f5AyzjOQH7AkAAfGsAeMIfwIKeGCgABMBXA+Di8tn+fmAAluVIAAiAzwbA5n5/p/4BlnkpYE8ACIDPBYBX+gIs17EAEACfBMBm458fEIBl2xcAAsDRP0DoswEEgABw7R8gcC+AABAA2wA49EMBEONQAAiAbQCc+oEAiHEqAATA9vS/HwiALHsCQAB45j9AngMBIAC88Q8g8G4AASAAPPcfIM+ZABAAbv8DCLwdUAAIAD8IAIEEgADwgwAgAARAkgvP/wcQAAIgMgA8AwBAAAgAlwAAEAACQAAAIAAEgAAAQAAIAAEAgAAQAAIAAAEgAAQAAAJAAAgAAASAABAAAAgAASAAABAAAkAAACAABIAAAEAACAABAIAAEAACAAABIAAEAAACQAAIAAAEgAAQAAAIAAEgAAAEgAAQAAAIAAEgAAAQAAJAAAAgAASAAABAAAgAAQCAABAAAgAAASAABAAAAkAACAAABIAAEAAACAABIAAAEAACQAAAIAAEgAAAQAAIAAEAgAAQAAIAAAEgAAQAUd6c3Vr9/vj26t2zH9Y+/PaPtf/++1+r/7397VrKP7P957f/vvLvLv8Na40AEAACACZShvHbn75fvX9xvPrPy4fXHvC7Kv/N8t8uf4byZ/GZIAAEgACAgQb+9qh+7GH/rbZnCwQBAkAACADo6fWP361+f3r38gj/4ufZDv3PniHo/szlz17+DuXv4jNFAAgAAQBfOtJ/cmf14fykuYH/1bMD3d+p/N18xggAASAAYHu0/+jm6t3z+00e6fc5M1D+ruXv7LNHAAgAAUDu0f6Mr+mPsWfAWQEEgAAQAOQM/qd3e92at1RlLcqa+G4gAASAAMDgFwIgAASAAMDgFwIgAASAAKChe/eTr/HXeNiQZwogAASAAKCpe/jLPfCGeB1lLT1LAAEgAAQAsz/dn3A73xS3D5bHDvuOIQAEgABgdvfyO90/zq2DniGAABAAAoDZ3M/vqH/cswGeH4AAEAACANf67Q0AASAABADjeHN2a5LX8F5nB/327XzrN/Q9vbveUX9VGZ7rlw599P+Xo+vtP1f+HXP/e5bPwncSASAABABxp/zLECzP1y9DfshhWP7d5b+xfm/BjKLAJQEEgAAQAAyu7ESfw4Ny1gO/G3pTngJfnz0oZwu6P8scHnRUzlj4jiIABIAAoLopr/dvh/6cT3eXP9vUMVA+I99VBIAAEABUO9Kd4ha/cmq7DLQWr3GXP3P5s09xqWR9q6DNgQgAASAA2HX4j329uxxBl0sNSxhi5e9Q/i5jnxUon5kIQAAIAAFAE8N/6S/BGfulSCIAASAABACzHv5pb78bMwREAAJAAAgAZjf8y/Xx5J3r5dLAGHsERAACQAAIAGYz/D3FbtynKYoABIAAEAB80dC7/den+73j/tPLAt2aDH1ZoHy21hoBIAAEAKPf51/ukXcU+uWzAWWNPCcAASAABACLeMKfR9XO61HLnhiIABAAAoA/Bs6g1569v/76ZwO6NRtyL4YgQwAIAAEQbv1Wv4GONm30m+9lmfKZe4sgAkAA+EGw499p5sDLM+4MQAAIAD8Iji7rnl4OeqjPmA8PsikQASAABACzvO6/3uxn+De3OdBnJgAEgAAgaYNZ5UHimnK7ezbKv89GTQEgAAQAHvZj+AdGgIcECQABIACwocwtZY08ObD251i+G9ZWAAgAAcBSd/1XPnJ0/Xg5GwPXlwLcFSAABIAAwK5/R4x5Z3Q+nJ9YVwEgAAQAThm7fSwx7LysSQAIAAHAgtR84I8HyCz/87WmAkAACABcK3bLWOCtnfZ2CAABIABYgJrvmbfjP+PhTuU7Y00FgAAQANgkdvl8/+f3renMlc/I+xwQAAJAAFDttHA5InTdv41bPWud8XFboAAQAAIA1/7tDA+948NeAAEgAAQAwdf+3fKXe2ugvQACQAAIAEKP/p0G9tRHZwEEgAAQADSk1gt/PO3PBlAvChIAAkAA0Ijytjinf6l5GcjbHgWAABAABF3/derXpSD7QASAABAAhN365+jfWQB7QQSAABAABB7xOfr3nfCdEAACQADQ0ua/8xNH/wxyFsCrggWAABAAzPjWL0d6DHkWwGUAASAABAAL/SXvWq/nAohDASAABACBp//t9nZ3iMsAAkAACAACd/+739vzIb52hshaCgABIACY0+n/Ci+AsfnPZkAvhhIAAkAA0Jjy7naP/WWMxwO/e37fWgoAASAAmM31/wrP/n/96Ka1XPpmwO4z3vkywMuH1lIACAABwFw4/c+YlwGsowAQAAKAhVz/d1o36HJR91nbB4AAEAACwPX/y1/oT+5Yy5Rg7D7rnYOx+85ZSwEgAAQAC7j/3zq6ZOR5AAJAAAgAWrv//+VDm7oYddOo74wAEAACgAUczbn+bx+As0YCQAAIAAKf7ub57oH7ACq8N8JGQAEgAAQAjW/o8vhf4WjjqAAQAAKAwDsArKNLR+4EEAACQAAQdi3XZi6bR+0dEQACQAAQuJu7/PPW0XfHd0cACAABQNgvcadxXT4SAAJAAAgAAp/rLgAEgPdHCAABIAAI3MjlFkC3AtpAKgAEgAAgMQDcy50bABVeImUdBYAAEAAIAAQAAkAACAAEAAIAASAABAACAAGAABAAAgABgABAAAgAAYAAQAAgAASAAEAAIAAQAAJAACAAEAAIAAEgABAACAAEgAAQAAJAACAAEAACQAAIAI8CxqOAEQACQAAE2Pmd7l4GFMvLgBAAAsAPQsN2fh3w8/vWUQB4HbAAEAACgLQA8Evcd8d3RwAIAAFA4FFcuYRgHV0+cvlIAAgAAUBYANjIZQOpABAAAkAAEHor15uzW9YyTPnMd76D5MkdaykABIAAoOlf5G4FdAugcBQAAkAAEHgq150AeZeOus/cpSMEgADwgxC+mctGQN8Z3xkBIAAEAA16/+J456O51z9+Zy1DlM961+/Lh/MTaykABIAAYGpvf/rehi6+/fp/91nv+n0p3zlrKQAEgABgAXcClLMI1tL1fy+REgACQAAQthHQc91zlM/aBkAEgAAQAB7r6rYut416BLAAEAACgOQnArod0Ol/TwAUAAJAABC4D8BlAKf/Xf8XAAJAANDivd0XP/vlzqCRWL5j1lIACAABwAKfB+BuAN8P9/8LAAEgAAh8vruHAnn4j/dGCAABIAAI/SVvk5eHRYlDASAABACt3Q54fmIzIINs/nP6XwAIAAHAwh/z6lSvS0O+EwJAAAgAQu8GcBbA0b/d/wJAAAgAAh/24ojP0b+HRAkAASAAaG0z4KObVX7plyNHm74c/a83/3XfKespAASAAKCFzYAV3g3gjgCPh/bsfwEgAAQAoZsBy7VfR39tngWqsRdkfSmo+y5ZUwEgAAQAgad/3f6VeTuozaACQAAIAMI3gDkKzDz7YyOoABAAAgBnAS4vBdgQ2MTTIGud+nf0LwAEgADAWQCXAsJO/Tv6FwACQADgLIChEBh7jv4FgAAQALgm/MmlgDdnt6zrzJTPpNapf6EnAASAAMBzAf46Al4+tB9gbtf9u8+k2qUe9/0LAAEgAFjWEWKtAWE/wHKv+6+P/h/ftq4CQAAIABb1ZLhK7wjwfPjlfqbvXxxbVwEgAAQAbhFzrThl059bPQWAABAA2BAoAgKHv4c9CQABIABwzVgEBA5/ezoEgAAQALgUIALChr9T/wJAAAgAXAoQAWHD36l/ASAABAB2kIuAwOHvTg4BIAAEAKFqPkDG7WRthVr57K2vABAAAoDU/QCPbg6yH2C7scy15d32agyxYfOP6/7dZ2+dBYAAEAAkn15+fHuQIbM9yvTugJ7P9h/o7Iyn/SEABIAAYPBrzNujTfsCrvdZDHVWxh4NBIAAEAB8oly3H2rouCQw7Sl/ezMQAAJAADBpBKzPBjj9/Je3ZQ551G/4IwAEgABgsjsD/nT72bMfrPVIR/12/CMABIAA4NufFDhCBHjv/I3Bj/q3w9+lFwSAABAAzCoC0tfZ8EcACAABQGQECADDHwEgAAQAgREgAIa7vGL4IwAEgABgtncHCAC7/REAAkAAEBgBAsDLfRAAAkAAEPjEQAHgCX8IAAEgAGjo3QG1bl8TAB6uhAAQAAKAljYHlrcIVtgcKAAq7PT3Vj8EgAAQACztPnYEFAJAAAgABAACAAEgAAQAAgDfQQSAABAACAABAAJAAAgABIAAAAEgAAQAAkAAgAAQAAIAASAAQAAIAD8ICAABgAAQAAIABIAAQAAIAAEAAkAAIAAEgAAAASAAEAACQAAgABAACAABIAAQAAgABIAAEAAIAAQAAkAACAAEAAIAASAABAACAAGAABAAAoDEALB+1g8BIAAEAAaY9bN+CAABIAAwwKyf9UMACAABgAFm/awfAkAACAAMMOtn/RAAAkAAYIBZPxAAAkAAYIBZPxAAAkAAYIBZPxAAAkAAYIBZPxAAAsAPAQaY9UMACAABAAaY9UMACAABAAaY9UMACAABAAaY9UMACAABgAFmgFk/BIAAEAAYYAaY9UMACAABgAFmgFk/BIAAEAAYYNTmO4gAEAACAAEgAEAACAABgAAQACAABIAAQAAIABAAAkAAIAAEAAgAAeAHAQEgABAAAkAAgAAQAAgAASAAQAAIAASAABAAIAAEAAJAAAgABAACAAEgAAQAAgABgAAQAAIAAYAAQAAIAAGAAEAAIAAEgABAACAAEAACQAAgABAACAABIAAQAAgABIAAEAAsMwCsn/VDAAgAAYABZv2sHwJAAAgADDDrZ/0QAAJAAGCAWT/rhwAQAAIAA8z6WT8EgAAQABhg1g8EgAAQABhg1g8EgAAQABhg1g8EgAAQABhg1g8EgADwQ4ABZv0QAAJAAIABZv0QAAJAAIABZv0QAAJAAIABZv0QAAJAAGCAGWDWDwEgAAQABpgBZv0QAAJAAGCAGWDWDwEgAAQABhi1TfnZ//r37tfIr3+jXQ8EgAAwyBAAAuDaw//ZiQAw/AWAAEAAEBMA2+EvANod/uV3vwAQAAIAASAAeg1/AdDu8BcAAkAAIAAEQO/hLwDaHf4CQAAIAASAAOg9/AVAu8NfAAgAAYAAEAC9h78AaHf4CwABIAAQAAKg9/AXAO0OfwEgAAQAAkAA9B7+AqDd4S8ABIAAQAAIgN7DXwC0O/wFgAAQAAgAAdB7+AuAdoe/ABAAAgABIAB6D38B0O7wFwACQAAgAARA7+EvANod/gJAAAgABIAA6D38BUC7w18ACAABgAAQAL2HvwBod/gLAAEgABAA4QGwy/AXAO0OfwEgAAQAAiL0db41hr8AaHf4CwABIAAQAKEBUGP4C4B2h78AEAACAAEQGAC1hr8AaHf4CwABIAAQAGEBUHP4C4B2h78AEAACAAEQFAC1h78AaHf4CwABIAAQACEBMMTwFwDtDn8BIAAEAAIgIACGGv4CoN3hLwAEgABAACw8AIYc/gKg3eEvAASAAEAALDgAhh7+AqDd4S8ABIAAQAAsNADGGP4CoN3hLwAEgABAACwwAMYa/gKg3eEvAASAAEAALCwAxhz+AqDd4S8ABIAAQAAsKADGHv4CoN3hLwAEgABAACwkAKYY/gKg3eEvAASAAEAALCAAphr+AqDd4S8ABIAAQAA0HgBTDn8B0O7wFwACQABAw6Ye/gKg3eEvAASAAADDXwAEDn8BIAAEABj+AiBw+AsAASAAwPAXAIHDXwAIAAEAhr8ACBz+AkAACAAw/AVA4PAXAAJAAIDhLwACh78AEAACAAx/ARA4/AWAABAAYPgLgMDhLwAEgAAAw18ABA5/ASAABAAY/gIgcPgLAAEgAMDwFwCBw18ACAABAIa/AAgc/gJAAAgAMPwFQODwFwACQACA4S8AAoe/ABAAAgAMfwEQOPwFgAAQAGD4C4DA4S8ABIAAAMNfAAQOfwEgAAQAGP4CIHD4CwABIADA8BcAgcNfAAgAAQCGvwAIHP4CQAAIADD8BUDg8BcAAkAAgOEvAAKHvwAQAAIADH8BEDj8BYAAEABg+AuAwOEvAASAAADDXwAEDn8BIAAEABj+AiBw+AsAASAAwPAXAIHDXwAIAAEAhr8ACBz+AkAACAAw/AVA4PAXAAJAAIDhLwACh78AEAACAAz/9ACIHP4CQAAIADD8kwMgdvgLAAEgAMDwTw2A6OEvAASAAADDPzEA4oe/ABAAAgAM/7QAMPwFgAAQAGD4hwWA4S8ABIAAAMM/LAAMfwEgAAQAGP5hAWD4CwABIADA8A8LAMNfAAgAAQCGf1gAGP4CQAAIADD8wwLA8BcAAkAAgOEfFgCGvwAQAAIADP+wADD8BYAAEABg+IcFgOEvAASAAADDPywADH8BIAAEABj+YQFg+AsAASAAwPAPCwDDXwAIAAEAhn9YABj+AkAACAAw/MMCwPAXAAJAAIDhHxYAhr8AEACVAuCVoYDhTyMBYPgLAAFQMQDODAYMfxoIAMNfAAiAygFwz3DA8GfmAWD4CwABMEAAHBgQGP7MOAAMfwEgAAYKgD1DAsOfmQaA4S8ABMBQAbCJgFPDAsOfmQWA4S8ABMAIAXBoYGD4M6MAMPwFgAAYKQD23A6I4c9MAsDwFwACYKwAcDcAhj8zCQDDXwAIgAkCYN8AwfBnwgAw/AWAAJgiADYRcGyQYPgzQQAY/gJAAEwcAPYCYPgzdgAY/gJAAEwdAJsIODJUMPwZKQAMfwEgAOYSAJsI8H4ADH+GDgDDXwAIgBkGwL5LARj+DBgAhr8AEABzDIBNBHhHAIY/QwSA4S8ABMCcA8CzATD8GSAADH8BIABaCIBNBDwweDD8qRAAhr8AEAAtBcAmArwsCMOfXQLA8BcAAqDRANhzJgDDn54BYPgLAAHQagC4HIDhT88AMPwFgABYQgDYGIjhzzUCwPAXAAJgSQFw5RZBzwnA8BcAhr8AEABJAXDlYUGeGIjhLwAMfwEgAJIC4EoIHDkbgOEvAAx/ASAAwgLgyl0CXiWM4Z8dAIa/ABAAaQHw0WWBY2cEMPzjAsDwFwACIDkAPjojcOgBQhj+EQFg+AsAASAAPhsDB5vbB8umwV8MPQz/xQSA4S8ABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAADi/R948176W4YndwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/Assets/images/projects/v1/desktop.png":
/*!***************************************************!*\
  !*** ./src/Assets/images/projects/v1/desktop.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/desktop.6cc9acea.png");

/***/ }),

/***/ "./src/Assets/images/projects/v1/landingm2.png":
/*!*****************************************************!*\
  !*** ./src/Assets/images/projects/v1/landingm2.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/landingm2.4f470efa.png");

/***/ }),

/***/ "./src/Assets/images/projects/v1/landinngm1.png":
/*!******************************************************!*\
  !*** ./src/Assets/images/projects/v1/landinngm1.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/landinngm1.675934c5.png");

/***/ }),

/***/ "./src/Assets/images/projects/v1/lanndingd.png":
/*!*****************************************************!*\
  !*** ./src/Assets/images/projects/v1/lanndingd.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lanndingd.94fcbe5e.png");

/***/ }),

/***/ "./src/Assets/images/projects/v1/msite.png":
/*!*************************************************!*\
  !*** ./src/Assets/images/projects/v1/msite.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/msite.f97720ab.png");

/***/ }),

/***/ "./src/Assets/images/stacks/bootstrap.png":
/*!************************************************!*\
  !*** ./src/Assets/images/stacks/bootstrap.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bootstrap.d5337aa9.png");

/***/ }),

/***/ "./src/Assets/images/stacks/cdd.png":
/*!******************************************!*\
  !*** ./src/Assets/images/stacks/cdd.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cdd.de58c5eb.png");

/***/ }),

/***/ "./src/Assets/images/stacks/hrml.png":
/*!*******************************************!*\
  !*** ./src/Assets/images/stacks/hrml.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/Assets/images/stacks/js.png":
/*!*****************************************!*\
  !*** ./src/Assets/images/stacks/js.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/js.286d4c70.png");

/***/ }),

/***/ "./src/Assets/images/stacks/react.png":
/*!********************************************!*\
  !*** ./src/Assets/images/stacks/react.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/react.73ac128a.png");

/***/ }),

/***/ "./src/Assets/images/stacks/redux.png":
/*!********************************************!*\
  !*** ./src/Assets/images/stacks/redux.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/redux.b3b939c6.png");

/***/ }),

/***/ "./src/Assets/images/stacks/sass.png":
/*!*******************************************!*\
  !*** ./src/Assets/images/stacks/sass.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sass.7cdbf6b5.png");

/***/ }),

/***/ "./src/Assets/images/stacks/vue.png":
/*!******************************************!*\
  !*** ./src/Assets/images/stacks/vue.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/vue.1eafbd69.png");

/***/ }),

/***/ "./src/Assets/sofiapro.otf":
/*!*********************************!*\
  !*** ./src/Assets/sofiapro.otf ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sofiapro.d36998f5.otf");

/***/ }),

/***/ "./src/Components/NavBar/Navbar.css":
/*!******************************************!*\
  !*** ./src/Components/NavBar/Navbar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/NavBar/Navbar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/NavBar/Navbar.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/NavBar/Navbar.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/NavBar/component.js":
/*!********************************************!*\
  !*** ./src/Components/NavBar/component.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.css */ "./src/Components/NavBar/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selector */ "./src/Components/NavBar/selector.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Components/NavBar/component.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable jsx-a11y/anchor-is-valid */







function Navbar(_ref) {
  _s();

  let {
    toggleNavConnect
  } = _ref;
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const hamburger = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const refContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [nav, setNav] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isScrollIndexPresent = Object.keys(history.location).includes("scrollIndex");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const navigation = document.querySelector('#fp-nav');

    if (navigation) {
      if (nav) {
        navigation.classList.add('hide');
      } else {
        navigation.classList.remove('hide');
      }

      window.fullpage_api.setAllowScrolling(!nav);
    }
  }, [nav]);

  const toggleHamburger = () => hamburger.current.classList.toggle("opens");

  const toggleNavbar = () => refContainer.current.classList.toggle("open");

  const toogleNav = () => {
    const navigation = document.querySelector('#fp-nav');
    const toggleNav = !nav;
    setNav(toggleNav);
    toggleNavConnect(toggleNav);
    if (navigation) window.fullpage_api.setAllowScrolling(nav);
    toggleNavbar();
    toggleHamburger();
  };

  const moveDown = () => {
    window.fullpage_api.moveSectionDown();
  };

  const toggleScrollAndPush = item => {
    if (history.location.pathname.includes("/work")) {
      if (item.scroll) {
        history.push({
          pathname: "/",
          scrollIndex: item.scrollIndex
        });
      } else {
        history.push(item.path);
      }
    } else {
      if (item.scroll) {
        window.fullpage_api.moveTo(item.scrollIndex);
      } else {
        if (history.location.hash) {
          if (item.title === "Work") {
            history.push(item.path);
          } else {
            window.fullpage_api.moveTo(1);
          }
        } else {
          history.push(item.path);
        }
      }
    }
  };

  const goToRoute = item => {
    toggleNavbar();
    setNav(!nav);
    toggleHamburger();
    toggleScrollAndPush(item);
  };

  const getActiveClass = item => {
    let className = "mainNav__link__main";

    if (item.scroll && history.location.pathname === "/" && !isScrollIndexPresent) {
      if (item.hash === history.location.hash) {
        className = "mainNav__link__main active";
      }
    } else {
      if (item && item.title === "Work") {
        if (history.location.pathname.includes(item.path)) {
          className = "mainNav__link__main active";
        }
      }

      if (history.location.pathname === "/" && item.hash === history.location.hash) {
        className = "mainNav__link__main active";
      }
    }

    return className;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "nav__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "overlay__sides overlay__left",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "logo",
          children: "Monish"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "navbar__custom",
          onClick: toogleNav,
          ref: hamburger,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "navbar__top"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "navbar__middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "navbar__bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          href: "mailto:sharma.monish17@gmail.com",
          className: "logo email",
          children: "sharma.monish17@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "overlay__sides overlay__right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
          className: "portfolio__btn",
          children: "Hire Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          alt: "m",
          onClick: moveDown,
          src: _selector__WEBPACK_IMPORTED_MODULE_4__["scrollDownImg"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "navbar__content__container",
        ref: refContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              md: {
                span: 5,
                offset: 1
              },
              className: "mainNav__left",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
                children: _selector__WEBPACK_IMPORTED_MODULE_4__["menuItem"].map((item, index) => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                    onClick: () => goToRoute(item),
                    className: getActiveClass(item),
                    children: item.title
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 23
                  }, this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xs: {
                span: 2,
                offset: 2
              },
              className: "mainNav__right",
              children: _selector__WEBPACK_IMPORTED_MODULE_4__["social"].map((item, index) => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                  rel: "noreferrer",
                  href: item.link,
                  target: "_blank",
                  className: "mainNav__link__social",
                  children: item.name
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

_s(Navbar, "v5xVtxhQ6U1o44m4wWOaQFwFtIU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Navbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/NavBar/index.js":
/*!****************************************!*\
  !*** ./src/Components/NavBar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./src/Components/NavBar/component.js");
/* harmony import */ var _store_reducers_nav_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/reducers/nav/actions */ "./src/store/reducers/nav/actions.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);






const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
  toggleNavConnect: _store_reducers_nav_actions__WEBPACK_IMPORTED_MODULE_3__["toggleNav"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_component__WEBPACK_IMPORTED_MODULE_2__["default"]));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/NavBar/selector.js":
/*!*******************************************!*\
  !*** ./src/Components/NavBar/selector.js ***!
  \*******************************************/
/*! exports provided: menuItem, social, getActiveSlide, scrollDownImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItem", function() { return menuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "social", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveSlide", function() { return getActiveSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollDownImg", function() { return scrollDownImg; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const menuItem = [{
  title: "Home",
  path: "/",
  hash: ""
}, {
  title: "About",
  scroll: true,
  scrollIndex: 2,
  hash: "#about"
}, {
  title: "Experience",
  scroll: true,
  scrollIndex: 3,
  hash: "#experience"
}, {
  title: "Work",
  path: "/work"
}, {
  title: "Contact",
  scroll: true,
  scrollIndex: 4
}];
const social = [{
  name: "Github",
  link: ""
}, {
  name: "Linkden",
  link: ""
}, {
  name: "Twitter",
  link: ""
}, {
  name: "Facebook",
  link: ""
}];
const getActiveSlide = () => window && window.fullpage_api && window.fullpage_api.getActiveSection();
const scrollDownImg = "https://d33wubrfki0l68.cloudfront.net/7e3b3a9d2728197688f3806d355398381d1711d6/cd9a0/images/arrowdown.6c6ed776250c7dbb606fedcb1512036b.svg";

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/ProjectDetail/component.js":
/*!***************************************************!*\
  !*** ./src/Components/ProjectDetail/component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/Components/ProjectDetail/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextToPath_TextToPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TextToPath/TextToPath */ "./src/Components/TextToPath/TextToPath.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/animation */ "./src/utils/animation.js");
/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../smooth-scroll */ "./src/Components/smooth-scroll/index.js");
/* harmony import */ var _utils_get_selected_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/get-selected-project */ "./src/utils/get-selected-project.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Components/ProjectDetail/component.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable array-callback-return */









const ProjectDetails = () => {
  _s();

  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])();
  const [selectedProject, setSelectedProject] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (id) {
      setSelectedProject(Object(_utils_get_selected_project__WEBPACK_IMPORTED_MODULE_6__["getSelectedProject"])(id));
    }
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (selectedProject && imageRef) {
      selectedProject.projectImages.map((project, index) => {
        Object(_utils_animation__WEBPACK_IMPORTED_MODULE_4__["initProjectDetailAnimation"])({
          element: imageRef.current[index],
          delay: project.delay
        });
        Object(_utils_animation__WEBPACK_IMPORTED_MODULE_4__["onScrollParallax"])({
          element: imageRef.current[index],
          animation: project.animation
        });
      });
      Object(_utils_animation__WEBPACK_IMPORTED_MODULE_4__["initProjectDetailAnimation"])({
        element: ".hr",
        delay: 3,
        animation: [{
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0
        }]
      });
    }
  }, [selectedProject, imageRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (selectedProject) {
      Object(_utils_animation__WEBPACK_IMPORTED_MODULE_4__["initProjectDetailAnimation"])({
        element: ".project_heading h1",
        duration: 3,
        animation: [{
          opacity: 0
        }, {
          opacity: 1
        }]
      });
      Object(_utils_animation__WEBPACK_IMPORTED_MODULE_4__["onScrollParallax"])({
        element: ".project_heading h1",
        animation: [{
          y: 0
        }, {
          y: -1000
        }]
      });
    }
  }, [selectedProject]);
  return selectedProject && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "projectDetail",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "project_container",
        style: {
          background: selectedProject.bgColor
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "project_heading",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
            className: "project_heading_h1",
            children: selectedProject.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "project_images",
          children: [selectedProject.projectImages.map((proj, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
              id: `img_${proj.id}`,
              src: proj.image,
              alt: proj.title,
              style: { ...proj.style
              },
              ref: el => {
                imageRef.current[proj.id] = el;
              }
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 33
          }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_TextToPath_TextToPath__WEBPACK_IMPORTED_MODULE_2__["default"], {
            style: {
              letterSpacing: selectedProject.letterSpacing
            },
            text: selectedProject.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
            className: "hr"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(selectedProject.component, {
        selectedProject: selectedProject
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 9
  }, undefined);
};

_s(ProjectDetails, "VGHd6DmUx+goDBfQA45Bat54msI=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"]];
});

_c = ProjectDetails;
/* harmony default export */ __webpack_exports__["default"] = (ProjectDetails);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProjectDetails");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/ProjectDetail/index.css":
/*!************************************************!*\
  !*** ./src/Components/ProjectDetail/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/ProjectDetail/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/ProjectDetail/index.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/ProjectDetail/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/ProjectDetail/index.js":
/*!***********************************************!*\
  !*** ./src/Components/ProjectDetail/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./src/Components/ProjectDetail/component.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_component__WEBPACK_IMPORTED_MODULE_2__["default"]));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/TextToPath/TextToPath.css":
/*!**************************************************!*\
  !*** ./src/Components/TextToPath/TextToPath.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./TextToPath.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/TextToPath/TextToPath.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./TextToPath.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/TextToPath/TextToPath.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./TextToPath.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/TextToPath/TextToPath.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/TextToPath/TextToPath.js":
/*!*************************************************!*\
  !*** ./src/Components/TextToPath/TextToPath.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/animation */ "./src/utils/animation.js");
/* harmony import */ var _TextToPath_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextToPath.css */ "./src/Components/TextToPath/TextToPath.css");
/* harmony import */ var _TextToPath_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TextToPath_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Components/TextToPath/TextToPath.js",
    _s = __webpack_require__.$Refresh$.signature();






function TextToPath(_ref) {
  _s();

  let {
    text,
    style
  } = _ref;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_utils_animation__WEBPACK_IMPORTED_MODULE_1__["drawSvgText"])();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "text-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
        id: "demo",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 80",
        width: "100%",
        height: "250",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("text", {
          x: "50%",
          y: "50%",
          dy: ".35em",
          "text-anchor": "middle",
          style: { ...style
          },
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(TextToPath, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = TextToPath;
/* harmony default export */ __webpack_exports__["default"] = (TextToPath);

var _c;

__webpack_require__.$Refresh$.register(_c, "TextToPath");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/project-challenge/index.js":
/*!***************************************************!*\
  !*** ./src/Components/project-challenge/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/Components/project-challenge/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/animation */ "./src/utils/animation.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Components/project-challenge/index.js",
    _s = __webpack_require__.$Refresh$.signature();







function ProjectChallenge(_ref) {
  _s();

  let {
    selectedProject
  } = _ref;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_utils_animation__WEBPACK_IMPORTED_MODULE_3__["onScrollParallax"])({
      element: "#img1",
      animation: [{
        y: 0
      }, {
        y: -200
      }],
      trigger: {
        scrollTrigger: {
          trigger: ".projectChallenge",
          scrub: true
        }
      }
    });
    Object(_utils_animation__WEBPACK_IMPORTED_MODULE_3__["onScrollParallax"])({
      element: "#img2",
      animation: [{
        y: 0
      }, {
        y: -200
      }],
      trigger: {
        scrollTrigger: {
          trigger: ".projectChallenge",
          scrub: true
        }
      }
    });
  }, []);

  const showText = text => {
    let component;
    const splittedText = text.split(",");

    if (splittedText.length < 0) {
      component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "challenge__clientInfo",
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }, this);
    } else {
      component = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
        className: "service__list",
        children: splittedText.map((txt, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
          className: "service__list",
          children: txt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }, this);
    }

    return component;
  };

  const LeftColumnn = () => {
    console.log(selectedProject.details);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: {
        span: 6,
        offset: 1
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "text-label text-lineBefore spanColor",
        children: selectedProject.details.challenges.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
        className: "challenegHeading",
        children: selectedProject.details.challenges.heading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("hr", {
        className: "break",
        style: {
          backgroundColor: selectedProject.bgColor
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "challengeP",
        children: selectedProject.details.challenges.para
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this);
  };

  const rightColumn = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: {
        span: 3,
        offset: 1
      },
      children: selectedProject.details.challenges.projectSource.map((source, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          className: "text-label  spanColor",
          children: source.subTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }, this), source.demoLink ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
          className: "challenge__clientInfo",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
            className: "sources",
            target: "_blank",
            href: source.demoLink,
            rel: "noreferrer",
            children: source.anchorText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 37
        }, this) : showText(source.text)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "covidContainer",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "projectChallenge",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
          children: [LeftColumnn(), rightColumn()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, this), selectedProject.details.challenges.sectionImages && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
        className: "prjectChallenge_images",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
              xs: {
                span: 10,
                offset: 1
              },
              className: "challenge__imageHolder",
              children: selectedProject.details.challenges.sectionImages.map((images, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                id: images.id,
                src: images.img,
                alt: "map",
                style: { ...images.style
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 41
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 70
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 9
  }, this);
}

_s(ProjectChallenge, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = ProjectChallenge;
/* harmony default export */ __webpack_exports__["default"] = (ProjectChallenge);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProjectChallenge");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/project-challenge/style.css":
/*!****************************************************!*\
  !*** ./src/Components/project-challenge/style.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/project-challenge/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/project-challenge/style.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/project-challenge/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/projects-card/component.js":
/*!***************************************************!*\
  !*** ./src/Components/projects-card/component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/Components/projects-card/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Components/projects-card/component.js";





const ProjectCard = _ref => {
  let {
    index,
    project
  } = _ref;

  const onHoverHandler = (e, index, mouseEnter) => {
    const projectId = `project_${index}`;
    const trigger = [...document.getElementsByClassName("project")];
    trigger.forEach(ele => {
      if (mouseEnter) {
        if (ele.id !== projectId) {
          ele.classList.add("nonFocusedProject");
        }
      } else {
        ele.classList.remove("nonFocusedProject");
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: `/work/${project.path}`,
    id: `project_${index}`,
    className: `project ${project.shiftYaxis ? "shiftProjectYaxis" : ""}`,
    style: {
      background: `url(${project.img}), #000000`,
      backgroundSize: `${project.size}`,
      backgroundPosition: `${project.position}`,
      backgroundRepeat: "no-repeat"
    },
    onMouseEnter: e => onHoverHandler(e, index, true),
    onMouseLeave: e => onHoverHandler(e, index, false),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
      children: project.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, undefined);
};

_c = ProjectCard;
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProjectCard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/projects-card/index.css":
/*!************************************************!*\
  !*** ./src/Components/projects-card/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/projects-card/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/projects-card/index.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/projects-card/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Components/projects-card/index.js":
/*!***********************************************!*\
  !*** ./src/Components/projects-card/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/Components/projects-card/component.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);






const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_component__WEBPACK_IMPORTED_MODULE_3__["default"])));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/scroll-to-top/index.js":
/*!***********************************************!*\
  !*** ./src/Components/scroll-to-top/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();




function ScrollToTop() {
  _s();

  const routePath = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    onTop();
  }, [routePath]);
  return null;
}

_s(ScrollToTop, "9XMmbd6xO6I7CGaAjLOmCljDT8c=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"]];
});

_c = ScrollToTop;
/* harmony default export */ __webpack_exports__["default"] = (ScrollToTop);

var _c;

__webpack_require__.$Refresh$.register(_c, "ScrollToTop");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/smooth-scroll/index.js":
/*!***********************************************!*\
  !*** ./src/Components/smooth-scroll/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/Components/smooth-scroll/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useWindowSize___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowSize. */ "./src/hooks/useWindowSize..js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Components/smooth-scroll/index.js",
    _s = __webpack_require__.$Refresh$.signature();






const SmoothScroll = _ref => {
  _s();

  let {
    children
  } = _ref;
  // 1.
  const windowSize = Object(_hooks_useWindowSize___WEBPACK_IMPORTED_MODULE_2__["default"])(); //2.

  const scrollingContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // 3.

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  }; // 4.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;
  }; // 5.


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    requestAnimationFrame(() => smoothScrollingHandler()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100; // console.log(scrollingContainerRef)

    if (scrollingContainerRef && scrollingContainerRef.current && scrollingContainerRef.current.style) {
      scrollingContainerRef.current.style.transform = `translate3d(0, -${data.previous}px, 0)`;
    } // Recursive call


    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "parent",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      ref: scrollingContainerRef,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined);
};

_s(SmoothScroll, "Cr5RCPykkoJ6IjhTfhTAOp8wFQU=", false, function () {
  return [_hooks_useWindowSize___WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = SmoothScroll;
/* harmony default export */ __webpack_exports__["default"] = (SmoothScroll);

var _c;

__webpack_require__.$Refresh$.register(_c, "SmoothScroll");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/smooth-scroll/style.css":
/*!************************************************!*\
  !*** ./src/Components/smooth-scroll/style.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/smooth-scroll/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/smooth-scroll/style.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/smooth-scroll/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Containers/SectionView/SectionView.css":
/*!****************************************************!*\
  !*** ./src/Containers/SectionView/SectionView.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./SectionView.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/SectionView/SectionView.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./SectionView.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/SectionView/SectionView.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./SectionView.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/SectionView/SectionView.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Containers/SectionView/SectionView.jsx":
/*!****************************************************!*\
  !*** ./src/Containers/SectionView/SectionView.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionView.css */ "./src/Containers/SectionView/SectionView.css");
/* harmony import */ var _SectionView_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SectionView_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sections_Landing_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sections/Landing/Landing */ "./src/Containers/Sections/Landing/Landing.jsx");
/* harmony import */ var _Sections_About_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sections/About/About */ "./src/Containers/Sections/About/About.jsx");
/* harmony import */ var _Sections_Projects_Xamidea_Xamidea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections/Projects/Xamidea/Xamidea */ "./src/Containers/Sections/Projects/Xamidea/Xamidea.jsx");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Sections_experience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Sections/experience */ "./src/Containers/Sections/experience/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Containers/SectionView/SectionView.jsx",
    _s = __webpack_require__.$Refresh$.signature();













function SectionView(_ref) {
  _s();

  let {
    history
  } = _ref;
  const [nextSection, setnextSection] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const onLeave = (origin, destination, direction) => {
    setnextSection({
      origin,
      destination
    });
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const scrollIndex = history.location.scrollIndex;

    if (scrollIndex) {
      window.fullpage_api.moveTo(scrollIndex);
    }
  }, [history]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_5___default.a, {
      anchors: ["", "about", "experience"],
      navigation: true,
      licenseKey: 'YOUR_KEY_HERE',
      scrollingSpeed: 1000
      /* Options here */
      // lockAnchors={true}
      ,
      onLeave: onLeave,
      render: _ref2 => {
        let {
          state,
          fullpageApi
        } = _ref2;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_5___default.a.Wrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "section",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Sections_Landing_Landing__WEBPACK_IMPORTED_MODULE_2__["default"], {
              section: nextSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "section",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Sections_About_About__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "section",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Sections_experience__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(SectionView, "aakTlpA1rm4Sh6kIDqyTEedFcss=");

_c = SectionView;

const mapStateToProps = _ref3 => {
  let {
    UI: {
      navDrawer
    }
  } = _ref3;
  return {
    navDrawer
  };
};

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(SectionView)));

var _c;

__webpack_require__.$Refresh$.register(_c, "SectionView");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Containers/Sections/About/About.css":
/*!*************************************************!*\
  !*** ./src/Containers/Sections/About/About.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/About/About.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/About/About.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/About/About.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Containers/Sections/About/About.jsx":
/*!*************************************************!*\
  !*** ./src/Containers/Sections/About/About.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.css */ "./src/Containers/Sections/About/About.css");
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Assets_images_stacks_bootstrap_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Assets/images/stacks/bootstrap.png */ "./src/Assets/images/stacks/bootstrap.png");
/* harmony import */ var _Assets_images_stacks_cdd_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Assets/images/stacks/cdd.png */ "./src/Assets/images/stacks/cdd.png");
/* harmony import */ var _Assets_images_stacks_hrml_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Assets/images/stacks/hrml.png */ "./src/Assets/images/stacks/hrml.png");
/* harmony import */ var _Assets_images_stacks_js_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Assets/images/stacks/js.png */ "./src/Assets/images/stacks/js.png");
/* harmony import */ var _Assets_images_stacks_react_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Assets/images/stacks/react.png */ "./src/Assets/images/stacks/react.png");
/* harmony import */ var _Assets_images_stacks_vue_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Assets/images/stacks/vue.png */ "./src/Assets/images/stacks/vue.png");
/* harmony import */ var _Assets_images_stacks_redux_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Assets/images/stacks/redux.png */ "./src/Assets/images/stacks/redux.png");
/* harmony import */ var _Assets_images_stacks_sass_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Assets/images/stacks/sass.png */ "./src/Assets/images/stacks/sass.png");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Containers/Sections/About/About.jsx";

 // IMAGES //








 // END //




function About() {
  const skills = [{
    img: _Assets_images_stacks_hrml_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    title: "HTML"
  }, {
    img: _Assets_images_stacks_cdd_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    title: "css"
  }, {
    img: _Assets_images_stacks_js_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    title: "JS"
  }, {
    img: _Assets_images_stacks_bootstrap_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    title: "bootstrap"
  }, {
    img: _Assets_images_stacks_react_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    title: "react"
  }, {
    img: _Assets_images_stacks_vue_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    title: "vue"
  }, {
    img: _Assets_images_stacks_redux_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    title: "redux"
  }, {
    img: _Assets_images_stacks_sass_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    title: "sass"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: " landing",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          style: {
            width: "100%",
            height: "100%"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
              xs: {
                span: 10,
                offset: 1
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "about__holder",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h4", {
                  className: "reveal__heading",
                  children: "Currently Working as Software Engineer @ Cars24"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
                  className: "reveal__heading",
                  children: "Skip the long and repeating codes. I focus on building reusable code & components."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  className: "about__section reveal__heading",
                  children: "I enjoy creating things for the web whether that be websites, applications or anything. My goal is build a perfect responsive web-app what provide pixel-perfect performing experience at the user end. Just after graduating from Jaypee University of Engineering & Technology, I joined the development team at XAMIDEA where I started working on some modern front end libraries and started developing powerful web apps."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                  className: "stack reveal__heading",
                  children: skills.map((img, index) => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
                      src: img.img,
                      alt: img.title,
                      title: img.title,
                      className: "stack__img"
                    }, index, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 27
                    }, this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

__webpack_require__.$Refresh$.register(_c, "About");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Containers/Sections/Landing/Landing.css":
/*!*****************************************************!*\
  !*** ./src/Containers/Sections/Landing/Landing.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Landing.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/Landing/Landing.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Landing.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/Landing/Landing.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./Landing.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/Landing/Landing.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Containers/Sections/Landing/Landing.jsx":
/*!*****************************************************!*\
  !*** ./src/Containers/Sections/Landing/Landing.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/animation */ "./src/utils/animation.js");
/* harmony import */ var _Landing_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Landing.css */ "./src/Containers/Sections/Landing/Landing.css");
/* harmony import */ var _Landing_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Landing_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Containers/Sections/Landing/Landing.jsx",
    _s = __webpack_require__.$Refresh$.signature();







function Landing() {
  _s();

  const text = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_utils_animation__WEBPACK_IMPORTED_MODULE_2__["initProjectDetailAnimation"])({
      element: text.current,
      duration: 1,
      animation: [{
        scale: 0
      }, {
        scale: 1
      }]
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "landing",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "container",
      style: {
        width: "100%",
        height: "100%"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        style: {
          width: "100%",
          height: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          xs: {
            span: 10,
            offset: 1
          },
          className: "author__background",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "landing__holder",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
              className: "reveal__heading",
              ref: text,
              children: "Hi, I'm a Front End Developer living in Gurgaon, India. I Build user interfaces."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(Landing, "4sA2HayhWQ5WZEMF7OiT/r+NLSE=");

_c = Landing;
/* harmony default export */ __webpack_exports__["default"] = (Landing);

var _c;

__webpack_require__.$Refresh$.register(_c, "Landing");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Containers/Sections/Projects/Xamidea/Xamidea.css":
/*!**************************************************************!*\
  !*** ./src/Containers/Sections/Projects/Xamidea/Xamidea.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../../node_modules/postcss-loader/src??postcss!./Xamidea.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/Projects/Xamidea/Xamidea.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../../node_modules/postcss-loader/src??postcss!./Xamidea.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/Projects/Xamidea/Xamidea.css",
      function () {
        content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../../node_modules/postcss-loader/src??postcss!./Xamidea.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/Projects/Xamidea/Xamidea.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Containers/Sections/Projects/Xamidea/Xamidea.jsx":
/*!**************************************************************!*\
  !*** ./src/Containers/Sections/Projects/Xamidea/Xamidea.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Xamidea_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Xamidea.css */ "./src/Containers/Sections/Projects/Xamidea/Xamidea.css");
/* harmony import */ var _Xamidea_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Xamidea_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Containers/Sections/Projects/Xamidea/Xamidea.jsx";




function Xamidea(_ref) {
  let {
    section
  } = _ref;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "xamidea__Section",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "container"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_c = Xamidea;
/* harmony default export */ __webpack_exports__["default"] = (Xamidea);

var _c;

__webpack_require__.$Refresh$.register(_c, "Xamidea");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Containers/Sections/experience/component.js":
/*!*********************************************************!*\
  !*** ./src/Containers/Sections/experience/component.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selector */ "./src/Containers/Sections/experience/selector.js");
/* harmony import */ var _sttyles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sttyles.css */ "./src/Containers/Sections/experience/sttyles.css");
/* harmony import */ var _sttyles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sttyles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Containers/Sections/experience/component.js",
    _s = __webpack_require__.$Refresh$.signature();







const Experience = () => {
  _s();

  const liRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  const tabRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  const [selectedTab, setselectedTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const currentTab = _selector__WEBPACK_IMPORTED_MODULE_2__["MY_EXPERIENCE"][selectedTab];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(liRef);

    if (liRef && liRef.current && currentTab) {
      liRef.current.forEach(li => li.style.setProperty("--color-surface", currentTab.detail.color));
    }
  }, [currentTab]);

  const onTabClick = item => {
    setselectedTab(item.index);
    tabRef.current[item.index].style.setProperty("--active-tab-color", item.detail.color);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "experience__container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"].Container, {
        id: "left-tab-exmaple",
        defaultActiveKey: 1,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            sm: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
              variant: "pills",
              className: "flex-column ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Item, {
                className: "",
                children: _selector__WEBPACK_IMPORTED_MODULE_2__["MY_EXPERIENCE"].map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
                  eventKey: item.key,
                  onClick: () => onTabClick(item),
                  ref: el => {
                    tabRef.current[index] = el;
                  },
                  children: item.title
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 45
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            sm: 9,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"].Content, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"].Pane, {
                eventKey: currentTab.key,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "CompanyName",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
                    children: [currentTab.detail.role, " @ "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
                    className: "position",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                      href: currentTab.detail.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: {
                        color: currentTab.detail.color
                      },
                      children: currentTab.detail.company
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 45
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "years",
                    children: currentTab.detail.duration
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "learnt",
                    children: currentTab.detail.whatIHaveLearnt.map((learnt, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
                      className: "learntList",
                      ref: el => {
                        liRef.current[index] = el;
                      },
                      children: learnt
                    }, index, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 53
                    }, undefined))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined);
};

_s(Experience, "H+Kjw56Cfn7qoSZx1/4h6K/WaOs=");

_c = Experience;
/* harmony default export */ __webpack_exports__["default"] = (Experience);

var _c;

__webpack_require__.$Refresh$.register(_c, "Experience");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Containers/Sections/experience/index.js":
/*!*****************************************************!*\
  !*** ./src/Containers/Sections/experience/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/Containers/Sections/experience/component.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const mapStateToProps = state => ({});

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_component__WEBPACK_IMPORTED_MODULE_0__["default"]));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Containers/Sections/experience/selector.js":
/*!********************************************************!*\
  !*** ./src/Containers/Sections/experience/selector.js ***!
  \********************************************************/
/*! exports provided: MY_EXPERIENCE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_EXPERIENCE", function() { return MY_EXPERIENCE; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const MY_EXPERIENCE = [{
  title: "Cars24",
  index: 0,
  duration: "",
  key: 1,
  detail: {
    role: "Front End Developer",
    company: "Cars24",
    url: "",
    duration: "Jan 2021 - Present",
    color: "#EF6E0C",
    whatIHaveLearnt: ["Worked on Electrode from Walmart", "Worked on Server Side Rendering & client side rendering ", "Chatbot with dialogflow & react ", "A/B experiment from Google Optimize"]
  }
}, {
  title: "HealthSetGo",
  index: 1,
  duration: "",
  key: 2,
  detail: {
    role: "Front End Developer",
    company: "HealthSetGo",
    url: "https://myhealth.healthsetgo.com/login    ",
    duration: "Oct 2020 - Jan 2021",
    color: "#2EB258",
    whatIHaveLearnt: ["Worked on Covid Safe platform", "Made whole webapp responsive on multiple OS", "Made whole webapp responsive on multiple OS", "Made whole webapp responsive on multiple OS"]
  }
}, {
  title: "Xamidea",
  index: 2,
  duration: "",
  key: 3,
  detail: {
    role: "Front End Developer",
    company: "Xamidea",
    url: "https://xamidea.in/",
    duration: "Apr 2019 - Sep 2020",
    color: "#FBBE0C",
    whatIHaveLearnt: ["Worked on Vuejs application on a student learing resource webapp", "Implemented video & audio call between teacher and student", "Worked on CMS of Xamidea webapp", "Made online book seller app with reactjs with razaorpay payment library"]
  }
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Containers/Sections/experience/sttyles.css":
/*!********************************************************!*\
  !*** ./src/Containers/Sections/experience/sttyles.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./sttyles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/experience/sttyles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./sttyles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/experience/sttyles.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../node_modules/postcss-loader/src??postcss!./sttyles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Containers/Sections/experience/sttyles.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Containers/project-in-depth/covid-tracker/index.js":
/*!****************************************************************!*\
  !*** ./src/Containers/project-in-depth/covid-tracker/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_project_challenge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/project-challenge */ "./src/Components/project-challenge/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Containers/project-in-depth/covid-tracker/index.js";




function CovidTracker(_ref) {
  let {
    selectedProject
  } = _ref;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: selectedProject && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Components_project_challenge__WEBPACK_IMPORTED_MODULE_1__["default"], {
      selectedProject: selectedProject
    }, "challenges", false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 33
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_c = CovidTracker;
/* harmony default export */ __webpack_exports__["default"] = (CovidTracker);

var _c;

__webpack_require__.$Refresh$.register(_c, "CovidTracker");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Containers/project-in-depth/portfolio-v2/index.js":
/*!***************************************************************!*\
  !*** ./src/Containers/project-in-depth/portfolio-v2/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_project_challenge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/project-challenge */ "./src/Components/project-challenge/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/Containers/project-in-depth/portfolio-v2/index.js";





function PortfolioV2Component(_ref) {
  let {
    selectedProject
  } = _ref;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: selectedProject && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Components_project_challenge__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selectedProject: selectedProject
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_c = PortfolioV2Component;
/* harmony default export */ __webpack_exports__["default"] = (PortfolioV2Component);

var _c;

__webpack_require__.$Refresh$.register(_c, "PortfolioV2Component");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/constant/projects.js":
/*!**********************************!*\
  !*** ./src/constant/projects.js ***!
  \**********************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony import */ var _Assets_images_projects_covid_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Assets/images/projects/covid.png */ "./src/Assets/images/projects/covid.png");
/* harmony import */ var _Assets_images_projects_keep_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assets/images/projects/keep.png */ "./src/Assets/images/projects/keep.png");
/* harmony import */ var _Assets_images_projects_a_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/images/projects/a.png */ "./src/Assets/images/projects/a.png");
/* harmony import */ var _Assets_images_projects_v1_desktop_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/images/projects/v1/desktop.png */ "./src/Assets/images/projects/v1/desktop.png");
/* harmony import */ var _Assets_images_projects_v1_msite_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assets/images/projects/v1/msite.png */ "./src/Assets/images/projects/v1/msite.png");
/* harmony import */ var _Assets_images_projects_covid_map_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Assets/images/projects/covid/map.png */ "./src/Assets/images/projects/covid/map.png");
/* harmony import */ var _Assets_images_projects_covid_allcases_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Assets/images/projects/covid/allcases.png */ "./src/Assets/images/projects/covid/allcases.png");
/* harmony import */ var _Containers_project_in_depth_covid_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/project-in-depth/covid-tracker */ "./src/Containers/project-in-depth/covid-tracker/index.js");
/* harmony import */ var _Assets_images_projects_keep_clone_keep_laptop_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Assets/images/projects/keep-clone/keep-laptop.png */ "./src/Assets/images/projects/keep-clone/keep-laptop.png");
/* harmony import */ var _Assets_images_projects_keep_clone_mobilelogin_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Assets/images/projects/keep-clone/mobilelogin.png */ "./src/Assets/images/projects/keep-clone/mobilelogin.png");
/* harmony import */ var _Assets_images_projects_keep_clone_mobilenote_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Assets/images/projects/keep-clone/mobilenote.png */ "./src/Assets/images/projects/keep-clone/mobilenote.png");
/* harmony import */ var _Assets_images_projects_v1_lanndingd_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Assets/images/projects/v1/lanndingd.png */ "./src/Assets/images/projects/v1/lanndingd.png");
/* harmony import */ var _Assets_images_projects_v1_landinngm1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Assets/images/projects/v1/landinngm1.png */ "./src/Assets/images/projects/v1/landinngm1.png");
/* harmony import */ var _Assets_images_projects_v1_landingm2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Assets/images/projects/v1/landingm2.png */ "./src/Assets/images/projects/v1/landingm2.png");
/* harmony import */ var _Assets_images_projects_keep_clone_loggedin_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Assets/images/projects/keep-clone/loggedin.png */ "./src/Assets/images/projects/keep-clone/loggedin.png");
/* harmony import */ var _Assets_images_projects_keep_clone_loggedinm_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Assets/images/projects/keep-clone/loggedinm.png */ "./src/Assets/images/projects/keep-clone/loggedinm.png");
/* harmony import */ var _Containers_project_in_depth_portfolio_v2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Containers/project-in-depth/portfolio-v2 */ "./src/Containers/project-in-depth/portfolio-v2/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

/**
 * Images
 */

















/**
 * components
 */


const PROJECTS = [{
  title: "Covid-19 Tracker",
  path: "covid-19-tracker",
  key: "covid-19-tracker",
  code: "",
  img: _Assets_images_projects_covid_png__WEBPACK_IMPORTED_MODULE_0__["default"],
  text: "Covid-19",
  bgColor: "#3BE47F",
  shiftYaxis: false,
  position: "bottom",
  size: "100%",
  letterSpacing: "15px",
  component: _Containers_project_in_depth_covid_tracker__WEBPACK_IMPORTED_MODULE_7__["default"],
  projectImages: [{
    id: 0,
    image: _Assets_images_projects_covid_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    delay: 1,
    style: {
      maxWidth: "100%",
      zIndex: 1,
      // left: "30%",
      top: "-40%"
    },
    animation: [{
      y: 0
    }, {
      y: -500
    }]
  }],
  details: {
    challenges: {
      heading: "Revaluating How People get updated with rising covid cases",
      label: "The Challenge",
      para: 'Representing the actual "Covid Cases" in simlpe and discrete way. It covers total cases, total recovered, total death all around the globe and country specific and maps it. ',
      projectSource: [{
        subTitle: "Demo",
        anchorText: "Covid-19 Tracker",
        demoLink: "https://covid-19-tracker-ab2b1.web.app"
      }, {
        subTitle: "Data Source",
        anchorText: "Disease.sh",
        demoLink: "https://disease.sh"
      }, {
        subTitle: "Services",
        text: "React.js, React leaflet, Chart.js, Firebase"
      }],
      sectionImages: [{
        img: _Assets_images_projects_covid_map_png__WEBPACK_IMPORTED_MODULE_5__["default"],
        id: "img1"
      }, {
        img: _Assets_images_projects_covid_allcases_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        id: "img2"
      }]
    }
  }
}, {
  title: "Portfolio V1",
  path: "portfolio-v1",
  key: "portfolio-v1",
  code: "",
  img: _Assets_images_projects_a_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  text: "Portfolio V1",
  bgColor: "#1ea896",
  shiftYaxis: true,
  position: "30px 50px",
  size: "150%",
  letterSpacing: "0px",
  component: _Containers_project_in_depth_portfolio_v2__WEBPACK_IMPORTED_MODULE_16__["default"],
  projectImages: [{
    id: 0,
    image: _Assets_images_projects_v1_landinngm1_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    delay: 1,
    style: {
      width: "15%",
      zIndex: 9,
      // left: "30%",
      top: "-15%",
      left: "23%"
    },
    animation: [{
      y: 0
    }, {
      y: -400
    }]
  }, {
    id: 1,
    image: _Assets_images_projects_v1_lanndingd_png__WEBPACK_IMPORTED_MODULE_11__["default"],
    delay: 2,
    style: {
      width: "40%",
      zIndex: 10,
      top: "-15%"
    },
    animation: [{
      y: 0
    }, {
      y: -100
    }]
  }, {
    id: 2,
    image: _Assets_images_projects_v1_landingm2_png__WEBPACK_IMPORTED_MODULE_13__["default"],
    delay: 1,
    style: {
      width: "15%",
      zIndex: 9,
      right: "23%",
      top: "-15%"
    },
    animation: [{
      y: 0
    }, {
      y: -400
    }]
  }],
  details: {
    challenges: {
      heading: "Showcasing professional information about my work.",
      label: "The Challenge",
      para: 'Portfolio of what I have been doing and learning since I started web development. Made with reusable component and responsive design  ',
      projectSource: [{
        subTitle: "Demo",
        anchorText: "Portfolio V2",
        demoLink: "https://monish-sharma.web.app/"
      }, {
        subTitle: "Services",
        text: "React.js, Redux, Firebase"
      }],
      sectionImages: [{
        img: _Assets_images_projects_v1_desktop_png__WEBPACK_IMPORTED_MODULE_3__["default"],
        id: "img1"
      }, {
        img: _Assets_images_projects_v1_msite_png__WEBPACK_IMPORTED_MODULE_4__["default"],
        id: "img2"
      }]
    }
  }
}, {
  title: "Google Keep Clone",
  path: "google-keep-clone",
  key: "google-keep-clone",
  code: "",
  img: _Assets_images_projects_keep_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  text: "Keep Clone",
  bgColor: "#F3B400",
  shiftYaxis: false,
  position: "bottom",
  size: "contain",
  letterSpacing: "2px",
  component: _Containers_project_in_depth_portfolio_v2__WEBPACK_IMPORTED_MODULE_16__["default"],
  projectImages: [{
    id: 0,
    image: _Assets_images_projects_keep_clone_mobilelogin_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    delay: 1,
    style: {
      width: "15%",
      zIndex: 9,
      // left: "30%",
      top: "-15%",
      left: "23%"
    },
    animation: [{
      y: 0
    }, {
      y: -400
    }]
  }, {
    id: 1,
    image: _Assets_images_projects_keep_clone_keep_laptop_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    delay: 2,
    style: {
      width: "40%",
      zIndex: 10,
      // left: "30%",
      top: "-15%"
    },
    animation: [{
      y: 0
    }, {
      y: -100
    }]
  }, {
    id: 2,
    image: _Assets_images_projects_keep_clone_mobilenote_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    delay: 1,
    style: {
      width: "15%",
      zIndex: 9,
      right: "23%",
      top: "-15%"
    },
    animation: [{
      y: 0
    }, {
      y: -400
    }]
  }],
  details: {
    challenges: {
      heading: "Quickly write down what's on your mind.",
      label: "The Challenge",
      para: 'It has 2 types of notes. Firstly  which is public where any user can save and pin there notes. Secondly which is user based authentication with google.',
      projectSource: [{
        subTitle: "Demo",
        anchorText: "Google Keep",
        demoLink: "https://keep-b7764.web.app/"
      }, {
        subTitle: "Github",
        anchorText: "Google Keep Codebase",
        demoLink: "https://github.com/monishsharma/google-keep-clone"
      }, {
        subTitle: "Services",
        text: "React.js, Redux, Firebase"
      }],
      sectionImages: [{
        img: _Assets_images_projects_keep_clone_loggedin_png__WEBPACK_IMPORTED_MODULE_14__["default"],
        id: "img1"
      }, {
        img: _Assets_images_projects_keep_clone_loggedinm_png__WEBPACK_IMPORTED_MODULE_15__["default"],
        id: "img2",
        style: {
          position: "relative",
          top: "5%",
          height: "80%"
        }
      }]
    }
  }
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/hooks/useWindowSize..js":
/*!*************************************!*\
  !*** ./src/hooks/useWindowSize..js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();


function useWindowSize() {
  _s();

  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };

  const [windowSize, setWindowSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

_s(useWindowSize, "BavKeL6E6tNTiGKbwq7Pn4eTing=");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/index */ "./src/store/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/index.js";








 // import routes from "./routes";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: _store_index__WEBPACK_IMPORTED_MODULE_8__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
      children: react_device_detect__WEBPACK_IMPORTED_MODULE_9__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h1", {
        children: "mobile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 20
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 38
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/work/animation.js":
/*!*************************************!*\
  !*** ./src/pages/work/animation.js ***!
  \*************************************/
/*! exports provided: bottomToTopAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottomToTopAnimation", function() { return bottomToTopAnimation; });
/* harmony import */ var gsap_gsap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/gsap-core */ "./node_modules/gsap/gsap-core.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const bottomToTopAnimation = element => {
  if (element) {
    gsap_gsap_core__WEBPACK_IMPORTED_MODULE_0__["gsap"].fromTo(element, 2, {
      opacity: 0,
      y: 300,
      ease: gsap_gsap_core__WEBPACK_IMPORTED_MODULE_0__["Power3"].easeOut
    }, {
      opacity: 1,
      y: 0,
      ease: gsap_gsap_core__WEBPACK_IMPORTED_MODULE_0__["Power3"].easeOut
    });
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/work/component.js":
/*!*************************************!*\
  !*** ./src/pages/work/component.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _work_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work.css */ "./src/pages/work/work.css");
/* harmony import */ var _work_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_work_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_TextToPath_TextToPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/TextToPath/TextToPath */ "./src/Components/TextToPath/TextToPath.js");
/* harmony import */ var _constant_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/projects */ "./src/constant/projects.js");
/* harmony import */ var _Components_projects_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/projects-card */ "./src/Components/projects-card/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Components_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/smooth-scroll */ "./src/Components/smooth-scroll/index.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation */ "./src/pages/work/animation.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/newuser/Desktop/portfolio-2021/src/pages/work/component.js",
    _s = __webpack_require__.$Refresh$.signature();











const Work = () => {
  _s();

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const element = ref.current;
    Object(_animation__WEBPACK_IMPORTED_MODULE_7__["bottomToTopAnimation"])(element);
  }, [ref]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Components_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: "ourWorks",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "work_wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h1", {
          className: "hero_work",
          children: "Every project is solely made from scratch with reusable components, different javascript frameworks and css libraries."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Components_TextToPath_TextToPath__WEBPACK_IMPORTED_MODULE_2__["default"], {
          text: "Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        sm: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "projectsContainer",
          ref: ref,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "projects",
            children: _constant_projects__WEBPACK_IMPORTED_MODULE_3__["PROJECTS"].map((project, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Components_projects_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
              index: index,
              project: project
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 37
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 10
  }, undefined);
};

_s(Work, "8uVE59eA/r6b92xF80p7sH8rXLk=");

_c = Work;
/* harmony default export */ __webpack_exports__["default"] = (Work);

var _c;

__webpack_require__.$Refresh$.register(_c, "Work");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/work/index.js":
/*!*********************************!*\
  !*** ./src/pages/work/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./src/pages/work/component.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_component__WEBPACK_IMPORTED_MODULE_2__["default"]));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/work/work.css":
/*!*********************************!*\
  !*** ./src/pages/work/work.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./work.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/work/work.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./work.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/work/work.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./work.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/work/work.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.es5.min.js")).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./src/store/rootReducer.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], composedEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store/reducers/nav/actions.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/nav/actions.js ***!
  \*******************************************/
/*! exports provided: toggleNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleNav", function() { return toggleNav; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/reducers/nav/types.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const toggleNav = flag => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_NAV_DRAWER"],
  flag
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store/reducers/nav/reducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/nav/reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/store/reducers/nav/types.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const initialState = {
  navDrawer: false
};

const UI = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_NAV_DRAWER"]:
      {
        return { ...state,
          navDrawer: action.flag
        };
      }

    default:
      {
        return state;
      }
  }
};

_c = UI;
/* harmony default export */ __webpack_exports__["default"] = (UI);

var _c;

__webpack_require__.$Refresh$.register(_c, "UI");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store/reducers/nav/types.js":
/*!*****************************************!*\
  !*** ./src/store/reducers/nav/types.js ***!
  \*****************************************/
/*! exports provided: TOGGLE_NAV_DRAWER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_NAV_DRAWER", function() { return TOGGLE_NAV_DRAWER; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const TOGGLE_NAV_DRAWER = "TOGGLE_NAV_DRAWER";

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store/rootReducer.js":
/*!**********************************!*\
  !*** ./src/store/rootReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _reducers_nav_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/nav/reducer */ "./src/store/reducers/nav/reducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  UI: _reducers_nav_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/animation.js":
/*!********************************!*\
  !*** ./src/utils/animation.js ***!
  \********************************/
/*! exports provided: drawSvgText, parallaxScrolling, onScrollParallax, initProjectDetailAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSvgText", function() { return drawSvgText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallaxScrolling", function() { return parallaxScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onScrollParallax", function() { return onScrollParallax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initProjectDetailAnimation", function() { return initProjectDetailAnimation; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const tl = new gsap__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]();
gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
const drawSvgText = () => {
  gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('#theText', {
    duration: 1,
    drawSVG: 0,
    strokeDashoffset: 0,
    yoyo: true
  });
};
const parallaxScrolling = _ref => {
  let {
    element,
    duration,
    from,
    to
  } = _ref;
  tl.fromTo(element, duration, { ...from
  }, { ...to
  });
};
const onScrollParallax = _ref2 => {
  let {
    element,
    animation,
    trigger = null
  } = _ref2;
  console.log(animation);
  gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].timeline({ ...(trigger ? { ...trigger
    } : {
      scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    })
  }).fromTo(element, ...animation, 0); // gsap.timeline(element, {
  //     ...animation,
  //     markers: true,
  //     ease: Power0.ease,
  //     ...(trigger) ? {...trigger} : {
  //       scrollTrigger: {
  //       scrub: true,
  //       markers: true
  //   }}
  // });
};
const initProjectDetailAnimation = _ref3 => {
  let {
    element,
    delay = 0,
    duration = 0.5,
    animation = null
  } = _ref3;
  const tl = new gsap__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]();

  if (animation) {
    tl.fromTo(element, duration, ...animation).delay(delay);
  } else {
    tl.fromTo(element, duration, {
      scale: 5,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1
    }).delay(delay);
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/get-selected-project.js":
/*!*******************************************!*\
  !*** ./src/utils/get-selected-project.js ***!
  \*******************************************/
/*! exports provided: getSelectedProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedProject", function() { return getSelectedProject; });
/* harmony import */ var _constant_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/projects */ "./src/constant/projects.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

/* eslint-disable array-callback-return */

const getSelectedProject = id => {
  let selectedProject = null;
  _constant_projects__WEBPACK_IMPORTED_MODULE_0__["PROJECTS"].map(project => {
    if (project.key === id) {
      selectedProject = project;
    }
  });
  return selectedProject;
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/newuser/Desktop/portfolio-2021/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/newuser/Desktop/portfolio-2021/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/newuser/Desktop/portfolio-2021/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/newuser/Desktop/portfolio-2021/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map