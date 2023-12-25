"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/user-profile/page.tsx":
/*!***************************************!*\
  !*** ./src/app/user-profile/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst UserProfile = ()=>{\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUserData = async ()=>{\n            try {\n                const email = \"rajat@gmail.com\"; // Replace with the user's email\n                const res = await fetch(\"/api/get-user?email=\".concat(encodeURIComponent(email)));\n                if (!res.ok) {\n                    throw new Error(\"Failed to fetch user data\");\n                }\n                const data = await res.json();\n                setUserData(data);\n                setLoading(false);\n            } catch (error) {\n                setError(error.message);\n                setLoading(false);\n            }\n        };\n        getUserData();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\user-profile\\\\page.tsx\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\user-profile\\\\page.tsx\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!userData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No user data found\"\n        }, void 0, false, {\n            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\user-profile\\\\page.tsx\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"User Profile\"\n            }, void 0, false, {\n                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\user-profile\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Email: \",\n                    userData.email\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\user-profile\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Bio: \",\n                    userData.bio\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\user-profile\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Phone Number: \",\n                    userData.phone_number\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\user-profile\\\\page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\user-profile\\\\page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserProfile, \"HMpZpKOdOx8cs4CYczrefosGiwY=\");\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlci1wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxjQUFjOztJQUNsQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVuQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxjQUFjO1lBQ2xCLElBQUk7Z0JBQ0YsTUFBTUMsUUFBUSxtQkFBbUIsZ0NBQWdDO2dCQUNqRSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sdUJBQWlELE9BQTFCQyxtQkFBbUJIO2dCQUNsRSxJQUFJLENBQUNDLElBQUlHLEVBQUUsRUFBRTtvQkFDWCxNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU1DLE9BQU8sTUFBTUwsSUFBSU0sSUFBSTtnQkFDM0JiLFlBQVlZO2dCQUNaVixXQUFXO1lBQ2IsRUFBRSxPQUFPQyxPQUFXO2dCQUNsQkMsU0FBU0QsTUFBTVcsT0FBTztnQkFDdEJaLFdBQVc7WUFDYjtRQUNGO1FBRUFHO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSUosU0FBUztRQUNYLHFCQUFPLDhEQUFDYztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxJQUFJWixPQUFPO1FBQ1QscUJBQU8sOERBQUNZOztnQkFBRTtnQkFBUVo7Ozs7Ozs7SUFDcEI7SUFFQSxJQUFJLENBQUNKLFVBQVU7UUFDYixxQkFBTyw4REFBQ2dCO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNGOztvQkFBRTtvQkFBUWhCLFNBQVNPLEtBQUs7Ozs7Ozs7MEJBQ3pCLDhEQUFDUzs7b0JBQUU7b0JBQU1oQixTQUFTbUIsR0FBRzs7Ozs7OzswQkFDckIsOERBQUNIOztvQkFBRTtvQkFBZWhCLFNBQVNvQixZQUFZOzs7Ozs7Ozs7Ozs7O0FBSTdDO0dBOUNNckI7S0FBQUE7QUFnRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91c2VyLXByb2ZpbGUvcGFnZS50c3g/ZjhkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBlbWFpbCA9ICdyYWphdEBnbWFpbC5jb20nOyAvLyBSZXBsYWNlIHdpdGggdGhlIHVzZXIncyBlbWFpbFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2dldC11c2VyP2VtYWlsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVtYWlsKX1gKTtcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBkYXRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldFVzZXJEYXRhKGRhdGEpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcclxuICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRVc2VyRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3J9PC9wPjtcclxuICB9XHJcblxyXG4gIGlmICghdXNlckRhdGEpIHtcclxuICAgIHJldHVybiA8cD5ObyB1c2VyIGRhdGEgZm91bmQ8L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5Vc2VyIFByb2ZpbGU8L2gxPlxyXG4gICAgICA8cD5FbWFpbDoge3VzZXJEYXRhLmVtYWlsfTwvcD5cclxuICAgICAgPHA+QmlvOiB7dXNlckRhdGEuYmlvfTwvcD5cclxuICAgICAgPHA+UGhvbmUgTnVtYmVyOiB7dXNlckRhdGEucGhvbmVfbnVtYmVyfTwvcD5cclxuICAgICAgey8qIERpc3BsYXkgb3RoZXIgdXNlciBkYXRhIGZpZWxkcyBhcyBuZWVkZWQgKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVzZXJQcm9maWxlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldFVzZXJEYXRhIiwiZW1haWwiLCJyZXMiLCJmZXRjaCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm1lc3NhZ2UiLCJwIiwiZGl2IiwiaDEiLCJiaW8iLCJwaG9uZV9udW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/user-profile/page.tsx\n"));

/***/ })

});