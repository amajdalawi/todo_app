/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n    box-sizing: border-box;\\n}\\n\\n.header {\\n    padding: 30px 40px;\\n    background-color: rgb(66, 66, 66);\\n    color:aliceblue;\\n    font-size: 60px;\\n    margin: 0px;\\n}\\n\\nbody {\\n    padding: 0px;\\n    margin: 0px;\\n    min-height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.ult-con {\\n    display: flex;\\n    gap: 10px;\\n    flex: 1;\\n    background-color: rgb(66, 66, 66);\\n    /* height: 100%; */\\n}\\n\\n.main-todo {\\n    flex: 3;\\n    background-color: aliceblue;\\n}\\n\\n.sidebar {\\n    background-color: aliceblue;\\n    flex: 0.7;\\n}\\n\\n/* time sort buttons  */\\n\\n.time-sort {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 7px;\\n    padding: 10px;\\n}\\n\\n.time-sort > div {\\n    text-align: center;\\n    /* width: 100%; */\\n    padding: 10px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border: 3px rgb(66, 66, 66) solid;\\n}\\n\\n.time-sort > div:hover {\\n    transition: 100ms;\\n    cursor: pointer;\\n}\\n\\n.done:hover {\\n    color: rgb(0, 81, 255);\\n    border: 3px rgb(0, 81, 255) solid;\\n}\\n\\n.overdue:hover {\\n    color: red;\\n    border: 3px red solid;\\n}\\n\\n.all:hover, .this-week:hover {\\n    border: 3px rgb(83, 60, 60) solid;\\n    color: rgb(83, 60, 60);\\n}\\n\\n.highlighted {\\n    background-color: black;\\n    color: aliceblue;\\n}\\n/* projects container styling  */\\n\\n\\n\\n.projects-header {\\n    background-color: rgb(66, 66, 66);\\n    color: aliceblue;\\n    font-size: 26px;\\n    padding: 10px 15px;\\n}\\n\\n.projects-list {\\n    padding: 10px;\\n}\\n\\n.project-button {\\n    text-align: center;\\n    /* width: 100%; */\\n    padding: 10px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border: 3px rgb(66, 66, 66) solid;\\n\\n}\\n\\n.project-button:hover {\\n    cursor: pointer;\\n\\n}\\n\\n/* table styling */\\n\\n/* table header */\\n\\n.table-header {\\n    background-color: rgb(117, 117, 117);\\n    display: flex;\\n    padding: 10px 0px 10px 0px;\\n}\\n\\n.checked-placeholder, .checked-button-div {\\n    flex: 0.3;\\n}\\n\\n.title-h, .title-content {\\n    flex: 1;\\n}\\n\\n.desc-h, .desc-content {\\n    flex: 3;\\n}\\n\\n.due-date, .due-date-content {\\n    flex: 1;\\n    border-right: 0px;\\n}\\n\\n.buttons-placeholder, .buttons-content {\\n    flex: 0.7;\\n}\\n\\n.table-header > div {\\n    color: aliceblue;\\n    font-size: 1.2rem;\\n}\\n\\n.title-h, .desc-h, .due-date, .due-date-content, .desc-content,.title-content {\\n    padding-left: 10px;\\n    border-right: 1px rgb(196, 194, 194) solid;\\n}\\n\\n/* test row of table  */\\n\\n.checked-button-div {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.check-button {\\n    border-radius: 50%;\\n    border: 1px solid black;\\n    width: 10px;\\n    height: 10px;\\n}\\n\\n.check-button:hover {\\n    background-color: rgba(255, 68, 68, 0.623);\\n}\\n\\n.task-row {\\n    display: flex;\\n    padding: 10px 0px 10px 0px;\\n}\\n\\n.buttons-flex {\\n    display: flex;\\n    gap: 4px;\\n    justify-content: center;\\n}\\n\\n.buttons-flex > div {\\n    cursor: pointer;\\n}\\n\\n.show-info:hover {\\n    color: blue;\\n}\\n\\n.delete-button:hover {\\n    color: rgb(163, 0, 0);\\n}\\n\\n.edit-button:hover {\\n    font-weight: bold;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://todo_app/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo_app/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo_app/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo_app/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo_app/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo_app/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusHandler.js */ \"./src/statusHandler.js\");\n/* harmony import */ var _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectStateManager.js */ \"./src/projectStateManager.js\");\n\n\n\nconst dommanager = (function() {\n    function initTimeButtons() {\n\n        let allButton = document.querySelector('.all');\n        console.log(allButton);\n        allButton.onclick = function()  {\n            let allButtons = document.querySelectorAll('.time-sort > div');\n            allButtons.forEach((el) => {el.classList.remove('highlighted')});\n            allButton.classList.add('highlighted');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setPriority('');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setdate('');\n            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setProjectName(projectName);\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setFinishedStatus(false);\n            renderTable();\n        }\n        let thisWeekButton = document.querySelector('.this-week');\n        thisWeekButton.onclick = function() {\n            let allButtons = document.querySelectorAll('.time-sort > div');\n            allButtons.forEach((el) => {el.classList.remove('highlighted')});\n            thisWeekButton.classList.add('highlighted');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setPriority('');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setdate('This Week');\n            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setProjectName(projectName);\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setFinishedStatus(false);\n            renderTable();\n        }\n        let overdueButton = document.querySelector('.overdue');\n        overdueButton.onclick = function() {\n            let allButtons = document.querySelectorAll('.time-sort > div');\n            allButtons.forEach((el) => {el.classList.remove('highlighted')});\n            overdueButton.classList.add('highlighted');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setPriority('');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setdate('Overdue');\n            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setProjectName(projectName);\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setFinishedStatus(false);\n            renderTable();\n        }\n    };\n\n    function initProjects() {\n        // psmanager.resetLS();\n        if (localStorage.length == 0) {\n            _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.addProjectName('Default');\n            _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.addTodo('My first todo','Default','weoifjewf','High','2022-11-09',false);\n            _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.addTodo('My sec todo','Default','gdrgr','High','2023-11-09',false);\n            _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.addTodo('My  todo','Default','rtdrt','High','2022-12-09',false);\n        }\n    };\n\n\n    function initPage() {\n        initProjects();\n        populateProject();\n        initTimeButtons();\n\n        // Add appropriate functions to the time sort buttons\n        \n\n    };\n\n    function populateProject() {\n        let projectcontainer = document.querySelector('.projects-list');\n        let projectList = _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.getProjectList();\n        projectList.forEach((el) => {\n            let projectButton = document.createElement('div');\n            projectButton.classList.add('project-button');\n            projectButton.setAttribute('id',el);\n            projectButton.innerHTML = el;\n            projectcontainer.appendChild(projectButton)\n        })\n    };\n\n    function createModal() {\n\n    };\n\n\n\n    function renderTable() {\n        let taskList = _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.getList();\n        console.log(taskList);\n        let tableID = document.querySelector('#main-todo');\n\n        if (taskList.length == 0) {\n            tableID.appendChild(createNoTasksDiv());\n        } else {\n            taskList.forEach((el) => {\n                tableID.appendChild(createTaskRow(el['UUID'],el['title'],el['description'],el['due_date']));\n            })\n        }\n    };\n\n    function createTaskRow(uuid,title,desc,date) {\n        // create the row div itself\n        let rowDiv = document.createElement('div');\n        rowDiv.classList.add('task-row');\n        \n        // create the check sign div\n        let checkDiv = document.createElement('div');\n        checkDiv.classList.add('checked-button-div');\n        let checkCircle = document.createElement('div');\n        checkCircle.classList.add('check-button');\n        checkDiv.appendChild(checkCircle);\n        rowDiv.appendChild(checkDiv);\n\n        // create the title div\n        let titleDiv = document.createElement('div');\n        titleDiv.classList.add('title-content');\n        titleDiv.innerHTML = title;\n        rowDiv.appendChild(titleDiv);\n\n        //create the desc div\n        let descDiv = document.createElement('div');\n        descDiv.classList.add('desc-content');\n        descDiv.innerHTML = desc;\n        rowDiv.appendChild(descDiv);\n\n        // create the date div\n        let dateDiv = document.createElement('div');\n        dateDiv.classList.add('due-date-content');\n        dateDiv.innerHTML = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;\n        rowDiv.appendChild(dateDiv);\n\n        // create the buttons div\n        let buttonsDiv = document.createElement('div');\n        buttonsDiv.classList.add('buttons-content');\n        let buttonsFlex = document.createElement('div');\n        buttonsFlex.classList.add('buttons-flex');\n        buttonsDiv.appendChild(buttonsFlex);\n        let editButtonDiv = document.createElement('div');\n        editButtonDiv.classList.add('edit-button');\n        editButtonDiv.innerHTML = '<ion-icon name=\"pencil-outline\"></ion-icon>';\n        let deleteButtonDiv = document.createElement('div');\n        deleteButtonDiv.classList.add('delete-button');\n        deleteButtonDiv.innerHTML = '<ion-icon name=\"trash-outline\"></ion-icon>';\n        let infoButtonDiv = document.createElement('div');\n        infoButtonDiv.classList.add('show-info');\n        infoButtonDiv.innerHTML = '<ion-icon name=\"information-circle-outline\"></ion-icon>';\n        buttonsFlex.appendChild(editButtonDiv);\n        buttonsFlex.appendChild(deleteButtonDiv);\n        buttonsFlex.appendChild(infoButtonDiv);\n        rowDiv.appendChild(buttonsDiv);\n        \n        return rowDiv;\n    }\n\n    function createNoTasksDiv() {\n\n    }\n\n    return {initPage}\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dommanager);\n\n//# sourceURL=webpack://todo_app/./src/domManager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager.js */ \"./src/domManager.js\");\n\n\n\n\n\n\n\n\n\n_domManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initPage();\n\n\n\n\n\n\n\n\n\n\n\n\n// import {v4 as v4} from 'uuid';\n// import {status as status} from './statusHandler.js';\n// import {manager as manager} from './projectStateManager.js';\n\n// // interface/internal parts\n\n\n// // let dumpLS = (someObj) => {\n// //     for (let i = 0; i < localStorage.length; i++) {\n// //         console.log(`${localStorage.key(i)} is ${localStorage.getItem(localStorage.key(i))}`)\n// //         someObj[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i))) ;  \n// //     }\n// // }\n\n// // class ult {\n// //     constructor() {\n// //         if (localStorage.length > 0) {\n// //             dumpLS(this)\n// //         } \n// //     }\n\n// //     set_attr(uuid,attr,val) {\n// //         this[uuid][attr] = val;\n        \n// //     }\n\n// //     get_attr(uuid,attr) {\n// //         return this[uuid][attr]\n// //     }\n\n// //     addTodo(title,project,description,priority,due_date,status) {\n// //         let uuidNo = v4();\n// //         this[uuidNo] = {\n// //             title,\n// //             project,\n// //             description,\n// //             priority,\n// //             'due_date': new Date(due_date),\n// //             status\n// //         };\n// //         localStorage.setItem(uuidNo,JSON.stringify(this[uuidNo]))\n// //     }\n\n// //     resetLS() {\n// //         for (const x of this) {\n// //             delete this[x]\n// //         };\n// //         localStorage.clear();\n// //     }\n\n    \n// // }\n\n// // let z = new ult();\n// // console.log(z);\n// // z.addTodo('wow','kek','dsafa','high',new Date(1998,11,11),false);\n// // z.addTodo('wow','kek','dsafa','high',new Date(1998,11,11),false);\n// // z.addTodo('wow','kek','dsafa','high',new Date(1998,11,11),false);\n// // z.addTodo('wow','kek','dsafa','high',new Date(1998,11,11),false);\n\n\n// // //\n\n// // function sortByProject(project_name) {\n// //     let projectArray = [];\n// //     for (const x of ult) {\n// //         if (ult[x]['title'] === project_name) {\n// //             projectArray.push(Object.assign({},{'id':x},ult[x]))\n// //         }\n        \n// //     }\n// //     return projectArray\n// // }\n\n// // function renderTable(project='',date='',priority='',checked=false) {\n// //     if (project) {\n// //         console.log(sortByProject(project));\n// //     }\n// // }\n\n// // renderTable('kek')\n\n//# sourceURL=webpack://todo_app/./src/index.js?");

/***/ }),

/***/ "./src/projectStateManager.js":
/*!************************************!*\
  !*** ./src/projectStateManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"manager\": () => (/* binding */ manager)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nconst manager = (function() {\n    let project_list = [];\n    let project_tasks = {};\n\n    function dumpLS(obj) {\n        for (let i = 0; i < localStorage.length; i++) {\n            obj[localStorage.key(i)]  = JSON.parse(localStorage.getItem(localStorage.key(i)))\n        }\n    }\n\n    if (localStorage.length >  1) {\n        dumpLS(project_tasks)\n    }\n\n    function resetLS() {\n        project_tasks = {};\n        localStorage.clear();\n    }\n\n    function addTodo(title,project,description,priority,due_date,status) {\n        let uuidNo = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        project_tasks[uuidNo] = {\n            title,\n            project,\n            description,\n            priority,\n            due_date: new Date(due_date),\n            status\n        };\n        // console.log(project_tasks[uuid])\n        localStorage.setItem(uuidNo,JSON.stringify(project_tasks[uuidNo]))\n    }\n\n    function editTodoAttribute(uuid, attr, val) {\n        project_tasks[uuid][attr] = val;\n        localStorage.setItem(uuid, JSON.stringify(project_tasks[uuid]));\n    }\n\n    function getProjectTasks() {\n        return project_tasks;\n    }\n\n    function getProjectList() {\n        return  project_list;\n    }\n\n    function addProjectName(somestr) {\n        project_list.push(somestr);\n    }\n\n    function removeProjectName(somestr) {\n        for (let i = 0; i < project_list.length; i++) {\n            if (somestr == project_list[i]) {\n                project_list.splice(i,1)\n            }\n        }\n    }\n\n    return {dumpLS, resetLS, addTodo, addProjectName,removeProjectName,getProjectTasks,editTodoAttribute, getProjectList};\n})();\n\n\n\n//# sourceURL=webpack://todo_app/./src/projectStateManager.js?");

/***/ }),

/***/ "./src/statusHandler.js":
/*!******************************!*\
  !*** ./src/statusHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"status\": () => (/* binding */ status)\n/* harmony export */ });\n/* harmony import */ var _projectStateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectStateManager */ \"./src/projectStateManager.js\");\n\n\n\nconst status = (function() {\n    let priority = '';\n    let project_current = '';\n    let finished_status = false;\n    let date = '';\n\n\n    function getList() {\n        let shown_array = [];\n        \n        let project_tasks = _projectStateManager__WEBPACK_IMPORTED_MODULE_0__.manager.getProjectTasks();\n        // console.log(project_tasks)\n        for (const id of (Object.keys(project_tasks))) {\n                shown_array.push(Object.assign({},{UUID: id}, project_tasks[id]))\n        }\n        // for testing\n        console.log(`shown array is ${shown_array}`)\n        for (const x of shown_array) {\n            console.log(x);\n        }\n        \n        // if (!project_current) {\n        //     shown_array = shown_array.filter((el) => {return el['project'] == project_current})\n        // }\n        // if (priority === 'High') {\n        //     shown_array = shown_array.filter((el) => {return el['priority'] == 'High'})\n        // }\n        // if (finished_status === true) {\n        //     shown_array = shown_array.filter((el) => {return el['status'] == true})\n        // }\n        // let today = new Date(new Date().toJSON().slice(0,10));\n        // if (date === 'Today') {\n        //     shown_array = shown_array.filter((el) => {return dfns.compareAsc(today, el['due_date'] === 0)});\n        // } else if (date === 'This Week') {\n        //     shown_array = shown_array.filter((el) => {\n        //         return (dfns.compareAsc(today,el['due_date']) === -1 && dfns.compareAsc(dfns.addDays(today,7),el['due_date'] === 1))\n        //     })\n        // } else if (date === 'Overdue') {\n        //     shown_array = shown_array.filter((el) => {return dfns.compareAsc(today, el['due_date'] === 1)});\n        // }\n\n        return shown_array;\n    }\n\n    function setProjectName(name) {\n        project_current = name;\n    }\n\n    function setdate(d) {\n        // should be either a string or a date object, will see later\n        date = d;\n    }\n\n    function setPriority(prio) {\n        priority = prio;\n    }\n\n    function setFinishedStatus(st) {\n        // st must be a boolean\n        finished_status = st;\n    }\n\n    return {getList, setPriority, setProjectName,setdate,setFinishedStatus}\n})();\n\n\n\n//# sourceURL=webpack://todo_app/./src/statusHandler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;