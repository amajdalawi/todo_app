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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n    box-sizing: border-box;\\n}\\n\\n.header {\\n    padding: 30px 40px;\\n    background-color: rgb(66, 66, 66);\\n    color:aliceblue;\\n    font-size: 60px;\\n    margin: 0px;\\n}\\n\\nbody {\\n    padding: 0px;\\n    margin: 0px;\\n    min-height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.ult-con {\\n    display: flex;\\n    gap: 10px;\\n    flex: 1;\\n    background-color: rgb(66, 66, 66);\\n    /* height: 100%; */\\n}\\n\\n.main-todo {\\n    flex: 3;\\n    background-color: aliceblue;\\n}\\n\\n.sidebar {\\n    background-color: aliceblue;\\n    flex: 0.7;\\n}\\n\\n/* time sort buttons  */\\n\\n.time-sort {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 7px;\\n    padding: 10px;\\n}\\n\\n.time-sort > div {\\n    text-align: center;\\n    /* width: 100%; */\\n    padding: 10px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border: 3px rgb(66, 66, 66) solid;\\n}\\n\\n.time-sort > div:hover {\\n    transition: 100ms;\\n    cursor: pointer;\\n}\\n\\n.done:hover {\\n    color: rgb(0, 81, 255);\\n    border: 3px rgb(0, 81, 255) solid;\\n}\\n\\n.overdue:hover {\\n    color: red;\\n    border: 3px red solid;\\n}\\n\\n.all:hover, .this-week:hover {\\n    border: 3px rgb(83, 60, 60) solid;\\n    color: rgb(83, 60, 60);\\n}\\n\\n.highlighted {\\n    background-color: black;\\n    color: aliceblue;\\n}\\n/* projects container styling  */\\n\\n\\n\\n.projects-header {\\n    background-color: rgb(66, 66, 66);\\n    color: aliceblue;\\n    font-size: 26px;\\n    padding: 10px 15px;\\n}\\n\\n.projects-list {\\n    padding: 10px;\\n}\\n\\n.project-button {\\n    text-align: center;\\n    /* width: 100%; */\\n    padding: 10px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border: 3px rgb(66, 66, 66) solid;\\n\\n}\\n\\n.project-button:hover {\\n    cursor: pointer;\\n\\n}\\n\\n/* table styling */\\n\\n/* table header */\\n\\n.table-header {\\n    background-color: rgb(117, 117, 117);\\n    display: flex;\\n    padding: 10px 0px 10px 0px;\\n}\\n\\n.checked-placeholder, .checked-button-div {\\n    flex: 0.3;\\n}\\n\\n.title-h, .title-content {\\n    flex: 1;\\n}\\n\\n.desc-h, .desc-content {\\n    flex: 3;\\n}\\n\\n.due-date, .due-date-content {\\n    flex: 1;\\n    border-right: 0px;\\n}\\n\\n.buttons-placeholder, .buttons-content {\\n    flex: 0.7;\\n}\\n\\n.table-header > div {\\n    color: aliceblue;\\n    font-size: 1.2rem;\\n}\\n\\n.title-h, .desc-h, .due-date, .due-date-content, .desc-content,.title-content {\\n    padding-left: 10px;\\n    border-right: 1px rgb(196, 194, 194) solid;\\n}\\n\\n.buttons-placeholder {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.no-task {\\n    text-align: center;\\n    font-size: 26px;\\n    color: grey;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 15px 10px;\\n}\\n\\n/* test row of table  */\\n\\n.checked-button-div {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.check-button {\\n    border-radius: 50%;\\n    border: 1px solid black;\\n    width: 10px;\\n    height: 10px;\\n}\\n\\n.check-button:hover {\\n    background-color: rgba(255, 68, 68, 0.623);\\n}\\n\\n.task-row {\\n    display: flex;\\n    padding: 10px 0px 10px 0px;\\n}\\n\\n.buttons-flex {\\n    display: flex;\\n    gap: 4px;\\n    justify-content: center;\\n}\\n\\n.buttons-flex > div {\\n    cursor: pointer;\\n}\\n\\n.show-info:hover {\\n    color: blue;\\n}\\n\\n.delete-button:hover {\\n    color: rgb(163, 0, 0);\\n}\\n\\n.edit-button:hover {\\n    font-weight: bold;\\n}\\n\\n/* Modal styling  */\\n\\n.modal-bg {\\n    display: block; /* Hidden by default */\\n    position: fixed; /* Stay in place */\\n    z-index: 1; /* Sit on top */\\n    left: 0;\\n    top: 0;\\n    width: 100%; /* Full width */\\n    height: 100%; /* Full height */\\n    overflow: auto; /* Enable scroll if needed */\\n    background-color: rgb(0,0,0); /* Fallback color */\\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\\n}\\n\\n.modal-window {\\n    width: 30%;\\n    padding: 20px;\\n    border:rgb(66, 66, 66) solid 3px;\\n    margin: 15% auto;\\n    background-color: aliceblue;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo_app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo_app/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDays)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} - the new date with the days added\n * @throws {TypeError} - 2 arguments required\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\n\nfunction addDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyAmount);\n\n  if (isNaN(amount)) {\n    return new Date(NaN);\n  }\n\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return date;\n  }\n\n  date.setDate(date.getDate() + amount);\n  return date;\n}\n\n//# sourceURL=webpack://todo_app/./node_modules/date-fns/esm/addDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\n\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://todo_app/./node_modules/date-fns/esm/compareAsc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo_app/./node_modules/date-fns/esm/toDate/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusHandler.js */ \"./src/statusHandler.js\");\n/* harmony import */ var _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectStateManager.js */ \"./src/projectStateManager.js\");\n\n\n\nconst dommanager = (function() {\n    function initButtons() {\n        let addTaskButton = document.querySelector('.add-task-button');\n        addTaskButton.onclick = function() {\n            createModal();\n            // the modal window to add the add task form into \n            let modalWindow = document.querySelector('.modal-window');\n\n            let formEl = document.createElement('form');\n            \n            // title of task\n            let titleLabel = document.createElement('label');\n            titleLabel.setAttribute('for','title');\n            titleLabel.innerHTML = 'Title';\n            let titleForm = document.createElement('input');\n            titleForm.setAttribute('id','title');\n            titleForm.setAttribute('type','text');\n            formEl.appendChild(titleLabel);\n            formEl.appendChild(titleForm);\n\n            // task project\n            let pl = _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.getProjectList();\n            let projectListLabel = document.createElement('label');\n            projectListLabel.setAttribute('for','projectName');\n            projectListLabel.innerHTML = 'Project Name';\n            let projectListForm = document.createElement('select');\n            projectListForm.setAttribute('id','projectName');\n            projectListForm.setAttribute('name','projectName');\n            for (const x of pl) {\n                projectListForm.innerHTML += `<option value=\"${x}\">${x}</option>`\n\n            }\n            formEl.appendChild(projectListLabel);\n            formEl.appendChild(projectListForm);\n\n\n\n            modalWindow.appendChild(formEl);\n        }\n    }\n\n    function initTimeButtons() {\n\n        let allButton = document.querySelector('.all');\n        console.log(allButton);\n        allButton.onclick = function()  {\n            let allButtons = document.querySelectorAll('.time-sort > div');\n            allButtons.forEach((el) => {el.classList.remove('highlighted')});\n            allButton.classList.add('highlighted');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setPriority('');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setdate('');\n            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setProjectName('');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setFinishedStatus(false);\n            renderTable();\n        }\n        let thisWeekButton = document.querySelector('.this-week');\n        thisWeekButton.onclick = function() {\n            let allButtons = document.querySelectorAll('.time-sort > div');\n            allButtons.forEach((el) => {el.classList.remove('highlighted')});\n            thisWeekButton.classList.add('highlighted');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setPriority('');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setdate('This Week');\n            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setProjectName('');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setFinishedStatus(false);\n            renderTable();\n        }\n        let overdueButton = document.querySelector('.overdue');\n        overdueButton.onclick = function() {\n            let allButtons = document.querySelectorAll('.time-sort > div');\n            allButtons.forEach((el) => {el.classList.remove('highlighted')});\n            overdueButton.classList.add('highlighted');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setPriority('');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setdate('Overdue');\n            let projectName = document.querySelector('.clicked-project-name') ? document.querySelector('.clicked-project-name').innerHTML : '';\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setProjectName('');\n            _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.setFinishedStatus(false);\n            renderTable();\n        }\n    };\n\n    function initProjects() {\n        // psmanager.resetLS();\n        if (localStorage.length == 0) {\n            _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.addProjectName('Default');\n            _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.addTodo('My first todo','Default','weoifjewf','High','2022-11-09',false);\n            _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.addTodo('My sec todo','Default','gdrgr','High','2023-11-09',false);\n            _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.addTodo('My  todo','Default','rtdrt','High','2022-12-09',false);\n        }\n    };\n\n\n    function initPage() {\n        initProjects();\n        populateProject();\n        initTimeButtons();\n        renderTable();\n        initButtons();\n        // Add appropriate functions to the time sort buttons\n        \n\n    };\n\n    function populateProject() {\n        let projectcontainer = document.querySelector('.projects-list');\n        let projectList = _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.getProjectList();\n        console.log(`projectList is ${projectList}`)\n        console.log(projectList)\n        projectList.forEach((el) => {\n            let projectButton = document.createElement('div');\n            projectButton.classList.add('project-button');\n            projectButton.setAttribute('id',el);\n            projectButton.innerHTML = el;\n            projectcontainer.appendChild(projectButton)\n        })\n    };\n\n    function createModal() {\n\n    };\n\n\n\n    function renderTable() {\n        // remove all the divs after the table header\n        let listOfTodos = document.querySelectorAll('.task-row');\n        let mainTableDiv = document.querySelector('#main-todo');\n        for (let x of listOfTodos) {\n            mainTableDiv.removeChild(x);\n        };\n        let noTodoDiv  = document.querySelector('.no-task');\n        if (noTodoDiv) {\n            mainTableDiv.removeChild(noTodoDiv);\n\n        }\n\n        // get the list of tasks according to the status variables\n        let taskList = _statusHandler_js__WEBPACK_IMPORTED_MODULE_0__.status.getList();\n        console.log(taskList);\n        let tableID = document.querySelector('#main-todo');\n\n        if (taskList.length == 0) {\n            tableID.appendChild(createNoTasksDiv());\n        } else {\n            taskList.forEach((el) => {\n                tableID.appendChild(createTaskRow(el['UUID'],el['title'],el['description'],el['due_date']));\n            })\n        }\n    };\n\n    function createTaskRow(uuid,title,desc,date_s) {\n        // create the row div itself\n        let rowDiv = document.createElement('div');\n        rowDiv.classList.add('task-row');\n        \n        // create the check sign div\n        let checkDiv = document.createElement('div');\n        checkDiv.classList.add('checked-button-div');\n        let checkCircle = document.createElement('div');\n        checkCircle.classList.add('check-button');\n        checkCircle.onclick = function() {\n            // to do tomorrow\n        }\n        checkDiv.appendChild(checkCircle);\n        rowDiv.appendChild(checkDiv);\n\n        // create the title div\n        let titleDiv = document.createElement('div');\n        titleDiv.classList.add('title-content');\n        titleDiv.innerHTML = title;\n        rowDiv.appendChild(titleDiv);\n\n        //create the desc div\n        let descDiv = document.createElement('div');\n        descDiv.classList.add('desc-content');\n        descDiv.innerHTML = desc;\n        rowDiv.appendChild(descDiv);\n\n        // create the date div\n        let dateDiv = document.createElement('div');\n        let date = new Date(date_s);\n        dateDiv.classList.add('due-date-content');\n        dateDiv.innerHTML = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;\n        rowDiv.appendChild(dateDiv);\n\n        // create the buttons div\n        let buttonsDiv = document.createElement('div');\n        buttonsDiv.classList.add('buttons-content');\n        let buttonsFlex = document.createElement('div');\n        buttonsFlex.classList.add('buttons-flex');\n        buttonsDiv.appendChild(buttonsFlex);\n        let editButtonDiv = document.createElement('div');\n        editButtonDiv.classList.add('edit-button');\n        editButtonDiv.innerHTML = '<ion-icon name=\"pencil-outline\"></ion-icon>';\n        let deleteButtonDiv = document.createElement('div');\n        deleteButtonDiv.classList.add('delete-button');\n        deleteButtonDiv.innerHTML = '<ion-icon name=\"trash-outline\"></ion-icon>';\n        deleteButtonDiv.onclick = function() {\n            _projectStateManager_js__WEBPACK_IMPORTED_MODULE_1__.manager.removeTodo(uuid);\n            renderTable();\n        }\n        let infoButtonDiv = document.createElement('div');\n        infoButtonDiv.classList.add('show-info');\n        infoButtonDiv.innerHTML = '<ion-icon name=\"information-circle-outline\"></ion-icon>';\n        buttonsFlex.appendChild(editButtonDiv);\n        buttonsFlex.appendChild(deleteButtonDiv);\n        buttonsFlex.appendChild(infoButtonDiv);\n        rowDiv.appendChild(buttonsDiv);\n        \n        return rowDiv;\n    }\n\n    function createNoTasksDiv() {\n        // let mainTableDiv = document.querySelector('#main-todo');\n        let noTodoDiv = document.createElement('div');\n        noTodoDiv.classList.add('no-task');\n        noTodoDiv.innerHTML = 'No Tasks to show'\n        // mainTableDiv.appendChild(noTodoDiv);\n        return noTodoDiv;\n    }\n\n    function createModal() {\n        // opaque bg\n        let modalBg = document.createElement('div');\n        modalBg.classList.add('modal-bg');\n\n        // modal window element\n        let modalWindow = document.createElement('div');\n        modalWindow.classList.add('modal-window');\n        modalBg.appendChild(modalWindow);\n        let body = document.querySelector('body');\n        body.appendChild(modalBg);\n\n        window.onclick = function(e) {\n            if (e.target == modalBg) {\n                body.removeChild(modalBg);\n            }\n        }\n    }\n\n    return {initPage}\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dommanager);\n\n//# sourceURL=webpack://todo_app/./src/domManager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager.js */ \"./src/domManager.js\");\n\n\n\n_domManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initPage();\n\n//# sourceURL=webpack://todo_app/./src/index.js?");

/***/ }),

/***/ "./src/projectStateManager.js":
/*!************************************!*\
  !*** ./src/projectStateManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"manager\": () => (/* binding */ manager)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nconst manager = (function() {\n    let project_list = [];\n    let project_tasks = {};\n\n    function dumpLS(obj) {\n        for (let i = 0; i < localStorage.length; i++) {\n            obj[localStorage.key(i)]  = JSON.parse(localStorage.getItem(localStorage.key(i)))\n        }\n    }\n\n    function ifobjinarray(obj,array) {\n        for (let i = 0; i < array.length; i++) {\n            if (array[i]  === obj)  {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    if (localStorage.length >  1) {\n        dumpLS(project_tasks)\n        // must also dump the project Names of the todo tasks form the project_tasks into the project_list variable\n        for (const keyid of Object.keys(project_tasks)) {\n            if (!ifobjinarray(project_tasks[keyid]['project'], project_list)) {\n                project_list.push(project_tasks[keyid]['project'])\n            }\n\n        }\n    }\n\n    function resetLS() {\n        project_tasks = {};\n        localStorage.clear();\n    }\n\n    function addTodo(title,project,description,priority,due_date,status) {\n        let uuidNo = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        project_tasks[uuidNo] = {\n            title,\n            project,\n            description,\n            priority,\n            due_date: new Date(due_date),\n            status\n        };\n        // console.log(project_tasks[uuid])\n        localStorage.setItem(uuidNo,JSON.stringify(project_tasks[uuidNo]))\n    }\n\n    function editTodoAttribute(uuid, attr, val) {\n        project_tasks[uuid][attr] = val;\n        localStorage.setItem(uuid, JSON.stringify(project_tasks[uuid]));\n    }\n\n    function getProjectTasks() {\n        return project_tasks;\n    }\n\n    function getProjectList() {\n        return  project_list;\n    }\n\n    function addProjectName(somestr) {\n        project_list.push(somestr);\n    }\n\n    function removeProjectName(somestr) {\n        for (let i = 0; i < project_list.length; i++) {\n            if (somestr == project_list[i]) {\n                project_list.splice(i,1)\n            }\n        }\n    }\n\n    function removeTodo(uuidno) {\n        delete project_tasks[uuidno];\n        localStorage.removeItem(uuidno);\n    }\n\n    return {dumpLS, resetLS, addTodo, addProjectName,removeProjectName,getProjectTasks,editTodoAttribute, getProjectList, removeTodo};\n})();\n\n\n\n//# sourceURL=webpack://todo_app/./src/projectStateManager.js?");

/***/ }),

/***/ "./src/statusHandler.js":
/*!******************************!*\
  !*** ./src/statusHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"status\": () => (/* binding */ status)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/addDays/index.js\");\n/* harmony import */ var _projectStateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectStateManager */ \"./src/projectStateManager.js\");\n\n\n\nconst status = (function() {\n    let priority = '';\n    let project_current = '';\n    let finished_status = false;\n    let date = '';\n\n\n    function getList() {\n        let shown_array = [];\n        \n        let project_tasks = _projectStateManager__WEBPACK_IMPORTED_MODULE_0__.manager.getProjectTasks();\n        // console.log(project_tasks)\n        for (const id of (Object.keys(project_tasks))) {\n                shown_array.push(Object.assign({},{UUID: id}, project_tasks[id]))\n        }\n        // for testing\n        // console.log(`shown array is ${shown_array}`)\n        // for (const x of shown_array) {\n        //     console.log(x);\n        // }\n        // end testing\n\n        if (project_current) {\n            shown_array = shown_array.filter((el) => {return el['project'] == project_current})\n        }\n        if (priority === 'High') {\n            shown_array = shown_array.filter((el) => {return el['priority'] == 'High'})\n        }\n        if (finished_status === true) {\n            shown_array = shown_array.filter((el) => {return el['status'] == true})\n        }\n        let today = new Date(new Date().toJSON().slice(0,10));\n        if (date === 'Today') {\n            shown_array = shown_array.filter((el) => {return date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"](today, new Date(el['due_date'])) === 0});\n        } else if (date === 'This Week') {\n            shown_array = shown_array.filter((el) => {\n                return (date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"](today,new Date(el['due_date'])) === -1 && date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"](date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"](today,7),new Date(el['due_date'])) === 1)\n            })\n        } else if (date === 'Overdue') {\n            console.log(date)\n            shown_array = shown_array.filter((el) => {\n                console.log(`the date of today var is ${today}, and for the due date it is ${new Date(el['due_date'])}`)\n                console.log(date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"](today, new Date(el['due_date'])))\n                \n                return date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"](today, new Date(el['due_date'])) === 1});\n        }\n\n        return shown_array;\n    }\n\n    function setProjectName(name) {\n        project_current = name;\n    }\n\n    function setdate(d) {\n        // should be either a string or a date object, will see later\n        date = d;\n    }\n\n    function setPriority(prio) {\n        priority = prio;\n    }\n\n    function setFinishedStatus(st) {\n        // st must be a boolean\n        finished_status = st;\n    }\n\n    return {getList, setPriority, setProjectName,setdate,setFinishedStatus}\n})();\n\n\n\n//# sourceURL=webpack://todo_app/./src/statusHandler.js?");

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