"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"292fe0bf31b8\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/Mjk5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjI5MmZlMGJmMzFiOFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookies-next */ \"(app-pages-browser)/./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    var _session_user;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _session_user;\n        let userImg = session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email;\n        // Retrieve the base64-encoded image string from local storage\n        const storedImage = localStorage.getItem(userImg || \"\"); // Replace 'myImage' with your key\n        console.log(\"dfsfa\", userImg);\n        // Update state with the image string\n        if (storedImage) {\n            setImageSrc(storedImage);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-md\",\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex justify-between m-5 items-center h-16\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-6 items-center\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/dashboard\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            !session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/login\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/register\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: \"Register\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500\",\n                                            src: \"data:image/png;base64,\".concat(imageSrc),\n                                            alt: \"Bordered avatar\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>{\n                                                (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)(\"logged\");\n                                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n                                            },\n                                            className: \"p-2 px-5 -mt-1 bg-blue-800 rounded-full text-white\",\n                                            children: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\components\\\\Navbar.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"qTt5kGyw4hrLgLNscx4uIKwS+ek=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3RCO0FBQ3lCO0FBQ1Y7QUFFNUMsTUFBTU8sU0FBUztRQTJDTUM7O0lBMUNuQixNQUFNLEVBQUVDLE1BQU1ELE9BQU8sRUFBRSxHQUFHSCwyREFBVUE7SUFDcEMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztZQUNNTztRQUFkLElBQUlJLFVBQVVKLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNLLElBQUksY0FBYkwsb0NBQUFBLGNBQWVNLEtBQUs7UUFDbEMsOERBQThEO1FBQzlELE1BQU1DLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQ0wsV0FBUyxLQUFLLGtDQUFrQztRQUM3Rk0sUUFBUUMsR0FBRyxDQUFDLFNBQVFQO1FBQ2hCLHFDQUFxQztRQUNyQyxJQUFJRyxhQUFhO1lBQ2ZKLFlBQVlJO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7WUFDWjswQkFFRCw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUNYO2tDQUVELDhEQUFDRDtrQ0FDQyw0RUFBQ2pCLGtEQUFJQTs0QkFBQ29CLE1BQUs7c0NBQ1QsNEVBQUNDOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDSjt3QkFBSUMsV0FBVTs7NEJBQ1o7MENBRUQsOERBQUNsQixrREFBSUE7Z0NBQUNvQixNQUFLOzBDQUNULDRFQUFDQzs4Q0FBRzs7Ozs7Ozs7Ozs7NEJBRUwsQ0FBQ2hCLHdCQUNBOztrREFDRSw4REFBQ0wsa0RBQUlBO3dDQUFDb0IsTUFBSztrREFDVCw0RUFBQ0M7c0RBQUc7Ozs7Ozs7Ozs7O2tEQUVOLDhEQUFDckIsa0RBQUlBO3dDQUFDb0IsTUFBSztrREFDVCw0RUFBQ0M7c0RBQUc7Ozs7Ozs7Ozs7Ozs2REFJUjs7a0RBQ0UsOERBQUNDO21EQUFNakIsZ0JBQUFBLFFBQVFLLElBQUksY0FBWkwsb0NBQUFBLGNBQWNNLEtBQUs7Ozs7OztvQ0FBUTtrREFDbEMsOERBQUNVO2tEQUNDLDRFQUFDRTs0Q0FDQ0wsV0FBVTs0Q0FDVk0sS0FBSyx5QkFBa0MsT0FBVGpCOzRDQUM5QmtCLEtBQUk7Ozs7Ozs7Ozs7O2tEQUdSLDhEQUFDSjtrREFDQyw0RUFBQ0s7NENBQ0NDLFNBQVM7Z0RBQ1B4QiwwREFBWUEsQ0FBQztnREFDYkYsd0RBQU9BOzRDQUNUOzRDQUNBaUIsV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQjtHQXBFTWQ7O1FBQ3NCRix1REFBVUE7OztLQURoQ0U7QUFzRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeD85YTZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IGRlbGV0ZUNvb2tpZSB9IGZyb20gXCJjb29raWVzLW5leHRcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHVzZXJJbWcgPSBzZXNzaW9uPy51c2VyPy5lbWFpbDtcclxuICAgIC8vIFJldHJpZXZlIHRoZSBiYXNlNjQtZW5jb2RlZCBpbWFnZSBzdHJpbmcgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgICBjb25zdCBzdG9yZWRJbWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVzZXJJbWd8fFwiXCIpOyAvLyBSZXBsYWNlICdteUltYWdlJyB3aXRoIHlvdXIga2V5XHJcbmNvbnNvbGUubG9nKFwiZGZzZmFcIix1c2VySW1nKVxyXG4gICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIGltYWdlIHN0cmluZ1xyXG4gICAgaWYgKHN0b3JlZEltYWdlKSB7XHJcbiAgICAgIHNldEltYWdlU3JjKHN0b3JlZEltYWdlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kXCI+XHJcbiAgICAgIHtcIiBcIn1cclxuICAgICAgey8qIEFkZGVkIHNoYWRvdyAqL31cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG0tNSBpdGVtcy1jZW50ZXIgaC0xNlwiPlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICB7LyogUmVkdWNlZCBoZWlnaHQgKi99XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxsaT5Ib21lPC9saT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICB7LyogQWRqdXN0ZWQgZ2FwIGFuZCBjZW50ZXJlZCBpdGVtcyAqL31cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgIDxsaT5EYXNoYm9hcmQ8L2xpPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgeyFzZXNzaW9uID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxsaT5Mb2dpbjwvbGk+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5SZWdpc3RlcjwvbGk+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3Nlc3Npb24udXNlcj8uZW1haWx9PC9zcGFuPiB7LyogVXNlZCBzcGFuIGZvciBlbWFpbCAqL31cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCBwLTEgcm91bmRlZC1mdWxsIHJpbmctMiByaW5nLWdyYXktMzAwIGRhcms6cmluZy1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwke2ltYWdlU3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkJvcmRlcmVkIGF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ29va2llKFwibG9nZ2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHB4LTUgLW10LTEgYmctYmx1ZS04MDAgcm91bmRlZC1mdWxsIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiZGVsZXRlQ29va2llIiwiTmF2YmFyIiwic2Vzc2lvbiIsImRhdGEiLCJpbWFnZVNyYyIsInNldEltYWdlU3JjIiwidXNlckltZyIsInVzZXIiLCJlbWFpbCIsInN0b3JlZEltYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImhyZWYiLCJsaSIsInNwYW4iLCJpbWciLCJzcmMiLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.tsx\n"));

/***/ })

});