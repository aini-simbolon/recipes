/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/libs/api.js":
/*!*************************!*\
  !*** ./src/libs/api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api),\n/* harmony export */   setAuthToken: () => (/* binding */ setAuthToken)\n/* harmony export */ });\nconst { default: axios } = __webpack_require__(/*! axios */ \"axios\");\nconst api = axios.create({\n    baseURL: \"http://localhost:5000/api\"\n});\nconst setAuthToken = (token)=>{\n    if (token) {\n        api.defaults.headers.common[\"Authorization\"] = `Bearer ${token}`;\n    } else {\n        delete api.defaults.headers.common[\"Authorization\"];\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLEVBQUNBLFNBQVVDLEtBQUssRUFBQyxHQUFHQyxtQkFBT0EsQ0FBRSxvQkFBTztBQUVuQyxNQUFNQyxNQUFNRixNQUFNRyxNQUFNLENBQUU7SUFDN0JDLFNBQVM7QUFDYixHQUFHO0FBRUksTUFBTUMsZUFBZSxDQUFDQztJQUN6QixJQUFJQSxPQUFPO1FBQ1BKLElBQUlLLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFPLEVBQUVILE1BQU0sQ0FBQztJQUNwRSxPQUVLO1FBQ0QsT0FBT0osSUFBSUssUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxnQkFBZ0I7SUFDdkQ7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2xpYnMvYXBpLmpzP2MyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2RlZmF1bHQgOiBheGlvc30gPSByZXF1aXJlIChcImF4aW9zXCIpXHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlICh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGlcIlxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBdXRoVG9rZW4gPSAodG9rZW4pID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZGVsZXRlIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIkF1dGhvcml6YXRpb25cIl1cclxuICAgIH0gXHJcbn07Il0sIm5hbWVzIjpbImRlZmF1bHQiLCJheGlvcyIsInJlcXVpcmUiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwic2V0QXV0aFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/api.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/api */ \"./src/libs/api.js\");\n/* harmony import */ var _stores_UseUserStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/stores/UseUserStore */ \"./src/stores/UseUserStore.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_UseUserStore__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);\n([_stores_UseUserStore__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nfunction App({ Component, pageProps }) {\n    const { setToken } = (0,_stores_UseUserStore__WEBPACK_IMPORTED_MODULE_2__.useUserStore)();\n    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(()=>{\n        const token = localStorage.getItem(\"token\");\n        (0,_libs_api__WEBPACK_IMPORTED_MODULE_1__.setAuthToken)(token);\n        setToken(token);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n        client: queryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yunia\\\\Documents\\\\TUGASS\\\\advance\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yunia\\\\Documents\\\\TUGASS\\\\advance\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yunia\\\\Documents\\\\TUGASS\\\\advance\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDVztBQUNvQjtBQUMvQztBQUNnQjtBQUNiO0FBRzdCLE1BQU1NLGNBQWMsSUFBSUosOERBQVdBO0FBRXBCLFNBQVNLLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQsTUFBTSxFQUFDQyxRQUFRLEVBQUMsR0FBR1Qsa0VBQVlBO0lBRS9CRyxzREFBZSxDQUFDO1FBQ2QsTUFBTVEsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBRW5DZCx1REFBWUEsQ0FBQ1k7UUFDYkYsU0FBU0U7SUFDWCxHQUFFLEVBQUU7SUFFSixxQkFDRSw4REFBQ1Qsc0VBQW1CQTtRQUFDWSxRQUFRVDs7MEJBQzNCLDhEQUFDRCxvREFBT0E7Ozs7OzBCQUNSLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldEF1dGhUb2tlbiB9IGZyb20gXCJAL2xpYnMvYXBpXCI7XG5pbXBvcnQgeyB1c2VVc2VyU3RvcmUgfSBmcm9tIFwiQC9zdG9yZXMvVXNlVXNlclN0b3JlXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiXG5cblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCB7c2V0VG9rZW59ID0gdXNlVXNlclN0b3JlKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cbiAgICBzZXRBdXRoVG9rZW4odG9rZW4pO1xuICAgIHNldFRva2VuKHRva2VuKTtcbiAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic2V0QXV0aFRva2VuIiwidXNlVXNlclN0b3JlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3QiLCJUb2FzdGVyIiwicXVlcnlDbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/stores/UseUserStore.js":
/*!************************************!*\
  !*** ./src/stores/UseUserStore.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUserStore: () => (/* binding */ useUserStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);\nzustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        token: null,\n        user: null,\n        setUser: (user)=>set(()=>({\n                    user: user\n                })),\n        setToken: (token)=>set(()=>({\n                    token: token\n                }))\n    }));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL1VzZVVzZXJTdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUV4QixNQUFNQyxlQUFlRCwrQ0FBTUEsQ0FBRSxDQUFDRSxNQUFTO1FBQzFDQyxPQUFPO1FBQ1BDLE1BQU07UUFFTkMsU0FBUyxDQUFDRCxPQUFTRixJQUFJLElBQU87b0JBQUNFLE1BQU1BO2dCQUFJO1FBQ3pDRSxVQUFVLENBQUNILFFBQVVELElBQUksSUFBTztvQkFBQ0MsT0FBT0E7Z0JBQUs7SUFDakQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9zdG9yZXMvVXNlVXNlclN0b3JlLmpzPzYzMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGV9IGZyb20gJ3p1c3RhbmQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVzZXJTdG9yZSA9IGNyZWF0ZSAoKHNldCkgPT4gKHtcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgdXNlcjogbnVsbCxcclxuXHJcbiAgICBzZXRVc2VyOiAodXNlcikgPT4gc2V0KCgpID0+ICh7dXNlcjogdXNlcn0pKSxcclxuICAgIHNldFRva2VuOiAodG9rZW4pID0+IHNldCgoKSA9PiAoe3Rva2VuOiB0b2tlbn0pKVxyXG59KSk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VVc2VyU3RvcmUiLCJzZXQiLCJ0b2tlbiIsInVzZXIiLCJzZXRVc2VyIiwic2V0VG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/stores/UseUserStore.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();