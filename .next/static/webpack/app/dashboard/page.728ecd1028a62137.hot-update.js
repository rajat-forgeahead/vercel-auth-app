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

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const session = useSession();\n    const { data: session, status: sessionStatus } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!session) {\n            router.replace(\"/\");\n        }\n        const fetchRandomImages = async ()=>{\n            try {\n                const response = await fetch(\"https://api.unsplash.com/photos/random?count=10&client_id=SI3vXMsWlVQkMyZBDfkTI8Ah1xgBzglIrPz42J3Ll5w\");\n                if (response.ok) {\n                    const data = await response.json();\n                    setImages(data);\n                } else {\n                    console.error(\"Failed to fetch images\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching images:\", error);\n            }\n        };\n        fetchRandomImages();\n    }, [\n        sessionStatus,\n        router\n    ]);\n    if (sessionStatus === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                \"data-drawer-target\": \"default-sidebar\",\n                \"data-drawer-toggle\": \"default-sidebar\",\n                \"aria-controls\": \"default-sidebar\",\n                type: \"button\",\n                className: \"inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"sr-only\",\n                        children: \"Open sidebar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-6 h-6\",\n                        \"aria-hidden\": \"true\",\n                        fill: \"currentColor\",\n                        viewBox: \"0 0 20 20\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            \"clip-rule\": \"evenodd\",\n                            \"fill-rule\": \"evenodd\",\n                            d: \"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 4\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                id: \"default-sidebar\",\n                className: \"fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0\",\n                \"aria-label\": \"Sidebar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"space-y-2 font-medium\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white\",\n                                        \"aria-hidden\": \"true\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        fill: \"currentColor\",\n                                        viewBox: \"0 0 22 21\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 16\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"ms-3\",\n                                        children: \"Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 16\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 10\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 4\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 sm:ml-64\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-bold mb-4\",\n                                children: \"Random Images\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                                children: images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white p-4 rounded-md shadow-md\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image.urls.small,\n                                                alt: image.alt_description,\n                                                className: \"w-full rounded-md\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mb-3 font-normal text-gray-700 dark:text-gray-400\",\n                                                children: image.alt_description\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 13\n                                            }, undefined)\n                                        ]\n                                    }, image.id, true, {\n                                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 11\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 4\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 4\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\react-hobby-projects\\\\New folder\\\\New folder\\\\New folder\\\\Auth-Dashboard-nextjs\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Dashboard, \"GvmjwNPYmTCS8XLvH02DBlwg/Cg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFFRTtBQUNUO0FBRzVDLE1BQU1LLFlBQVk7O0lBQ2hCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLE1BQU0sRUFBRU8sTUFBTUMsT0FBTyxFQUFFQyxRQUFRQyxhQUFhLEVBQUUsR0FBR1QsMkRBQVVBO0lBQzNELE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDRCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ1MsU0FBUztZQUNaSixPQUFPUyxPQUFPLENBQUM7UUFDakI7UUFFQSxNQUFNQyxvQkFBb0I7WUFDeEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCO2dCQUVGLElBQUlELFNBQVNFLEVBQUUsRUFBRTtvQkFDZixNQUFNVixPQUFPLE1BQU1RLFNBQVNHLElBQUk7b0JBQ2hDTixVQUFVTDtnQkFDWixPQUFPO29CQUNMWSxRQUFRZCxLQUFLLENBQUM7Z0JBQ2hCO1lBQ0YsRUFBRSxPQUFPQSxPQUFPO2dCQUNkYyxRQUFRZCxLQUFLLENBQUMsMEJBQTBCQTtZQUMxQztRQUNGO1FBRUFTO0lBQ0YsR0FBRztRQUFDSjtRQUFlTjtLQUFPO0lBRzFCLElBQUlNLGtCQUFrQixXQUFXO1FBQy9CLHFCQUFPLDhEQUFDVTtzQkFBRzs7Ozs7O0lBQ2I7SUFFQSxxQkFDRDs7MEJBRUQsOERBQUNDO2dCQUFPQyxzQkFBbUI7Z0JBQWtCQyxzQkFBbUI7Z0JBQWtCQyxpQkFBYztnQkFBa0JDLE1BQUs7Z0JBQVNDLFdBQVU7O2tDQUN2SSw4REFBQ0M7d0JBQUtELFdBQVU7a0NBQVU7Ozs7OztrQ0FDMUIsOERBQUNFO3dCQUFJRixXQUFVO3dCQUFVRyxlQUFZO3dCQUFPQyxNQUFLO3dCQUFlQyxTQUFRO3dCQUFZQyxPQUFNO2tDQUMxRiw0RUFBQ0M7NEJBQUtDLGFBQVU7NEJBQVVDLGFBQVU7NEJBQVVDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluRCw4REFBQ0M7Z0JBQU1DLElBQUc7Z0JBQWtCWixXQUFVO2dCQUFnR2EsY0FBVzswQkFDOUksNEVBQUNDO29CQUFJZCxXQUFVOzhCQUNaLDRFQUFDZTt3QkFBR2YsV0FBVTtrQ0FDWCw0RUFBQ2dCO3NDQUNFLDRFQUFDQztnQ0FBRUMsTUFBSztnQ0FBSWxCLFdBQVU7O2tEQUNuQiw4REFBQ0U7d0NBQUlGLFdBQVU7d0NBQXdIRyxlQUFZO3dDQUFPRyxPQUFNO3dDQUE2QkYsTUFBSzt3Q0FBZUMsU0FBUTs7MERBQ3ROLDhEQUFDRTtnREFBS0csR0FBRTs7Ozs7OzBEQUNSLDhEQUFDSDtnREFBS0csR0FBRTs7Ozs7Ozs7Ozs7O2tEQUVYLDhEQUFDVDt3Q0FBS0QsV0FBVTtrREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBU3RDLDhEQUFDYztnQkFBSWQsV0FBVTswQkFDWiw0RUFBQ2M7b0JBQUlkLFdBQVU7OEJBQ2YsNEVBQUNjO3dCQUFJZCxXQUFVOzswQ0FDWiw4REFBQ047Z0NBQUdNLFdBQVU7MENBQTBCOzs7Ozs7MENBQ3hDLDhEQUFDYztnQ0FBSWQsV0FBVTswQ0FDWmYsT0FBT2tDLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ047d0NBQW1CZCxXQUFVOzswREFDNUIsOERBQUNxQjtnREFDQ0MsS0FBS0YsTUFBTUcsSUFBSSxDQUFDQyxLQUFLO2dEQUNyQkMsS0FBS0wsTUFBTU0sZUFBZTtnREFDMUIxQixXQUFVOzs7Ozs7MERBRVosOERBQUMyQjtnREFBRTNCLFdBQVU7MERBQXFEb0IsTUFBTU0sZUFBZTs7Ozs7Ozt1Q0FOL0VOLE1BQU1SLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjVCO0dBdEZNbkM7O1FBQ1dELHNEQUFTQTtRQUd5QkQsdURBQVVBOzs7S0FKdkRFO0FBMEZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgc2lnbkluLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vdXNlci1wcm9maWxlL3BhZ2VcIjtcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXM6IHNlc3Npb25TdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZldGNoUmFuZG9tSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAnaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy9yYW5kb20/Y291bnQ9MTAmY2xpZW50X2lkPVNJM3ZYTXNXbFZRa015WkJEZmtUSThBaDF4Z0J6Z2xJclB6NDJKM0xsNXcnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBzZXRJbWFnZXMoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBpbWFnZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW1hZ2VzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFJhbmRvbUltYWdlcygpO1xyXG4gIH0sIFtzZXNzaW9uU3RhdHVzLCByb3V0ZXJdKTtcclxuXHJcbiBcclxuICBpZiAoc2Vzc2lvblN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcclxuICAgIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuIDw+XHJcblxyXG48YnV0dG9uIGRhdGEtZHJhd2VyLXRhcmdldD1cImRlZmF1bHQtc2lkZWJhclwiIGRhdGEtZHJhd2VyLXRvZ2dsZT1cImRlZmF1bHQtc2lkZWJhclwiIGFyaWEtY29udHJvbHM9XCJkZWZhdWx0LXNpZGViYXJcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiBtdC0yIG1zLTMgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHJvdW5kZWQtbGcgc206aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDBcIj5cclxuICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gc2lkZWJhcjwvc3Bhbj5cclxuICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTYgaC02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgIDxwYXRoIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yIDQuNzVBLjc1Ljc1IDAgMDEyLjc1IDRoMTQuNWEuNzUuNzUgMCAwMTAgMS41SDIuNzVBLjc1Ljc1IDAgMDEyIDQuNzV6bTAgMTAuNWEuNzUuNzUgMCAwMS43NS0uNzVoNy41YS43NS43NSAwIDAxMCAxLjVoLTcuNWEuNzUuNzUgMCAwMS0uNzUtLjc1ek0yIDEwYS43NS43NSAwIDAxLjc1LS43NWgxNC41YS43NS43NSAwIDAxMCAxLjVIMi43NUEuNzUuNzUgMCAwMTIgMTB6XCI+PC9wYXRoPlxyXG4gICA8L3N2Zz5cclxuPC9idXR0b24+XHJcblxyXG48YXNpZGUgaWQ9XCJkZWZhdWx0LXNpZGViYXJcIiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgei00MCB3LTY0IGgtc2NyZWVuIHRyYW5zaXRpb24tdHJhbnNmb3JtIC10cmFuc2xhdGUteC1mdWxsIHNtOnRyYW5zbGF0ZS14LTBcIiBhcmlhLWxhYmVsPVwiU2lkZWJhclwiPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBweC0zIHB5LTQgb3ZlcmZsb3cteS1hdXRvIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMFwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWxnIGRhcms6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzUgZGFyazp0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS05MDAgZGFyazpncm91cC1ob3Zlcjp0ZXh0LXdoaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIyIDIxXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuOTc1IDExSDEwVjQuMDI1YTEgMSAwIDAgMC0xLjA2Ni0uOTk4IDguNSA4LjUgMCAxIDAgOS4wMzkgOS4wMzkuOTk5Ljk5OSAwIDAgMC0xLTEuMDY2aC4wMDJaXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjUgMGMtLjE1NyAwLS4zMTEuMDEtLjU2NS4wMjdBMSAxIDAgMCAwIDExIDEuMDJWMTBoOC45NzVhMSAxIDAgMCAwIDEtLjkzNWMuMDEzLS4xODguMDI4LS4zNzQuMDI4LS41NjVBOC41MSA4LjUxIDAgMCAwIDEyLjUgMFpcIi8+XHJcbiAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtcy0zXCI+RGFzaGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICBcclxuICAgXHJcbiAgICAgIDwvdWw+XHJcbiAgIDwvZGl2PlxyXG48L2FzaWRlPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJwLTQgc206bWwtNjRcIj5cclxuICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1kYXNoZWQgcm91bmRlZC1sZyBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlJhbmRvbSBJbWFnZXM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cclxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2U6YW55KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW1hZ2UuaWR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLW1kIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZS51cmxzLnNtYWxsfVxyXG4gICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0X2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPntpbWFnZS5hbHRfZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICApKX1cclxuICAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiRGFzaGJvYXJkIiwicm91dGVyIiwiZXJyb3IiLCJzZXRFcnJvciIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwic2Vzc2lvblN0YXR1cyIsImltYWdlcyIsInNldEltYWdlcyIsInJlcGxhY2UiLCJmZXRjaFJhbmRvbUltYWdlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImpzb24iLCJjb25zb2xlIiwiaDEiLCJidXR0b24iLCJkYXRhLWRyYXdlci10YXJnZXQiLCJkYXRhLWRyYXdlci10b2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwidHlwZSIsImNsYXNzTmFtZSIsInNwYW4iLCJzdmciLCJhcmlhLWhpZGRlbiIsImZpbGwiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwiY2xpcC1ydWxlIiwiZmlsbC1ydWxlIiwiZCIsImFzaWRlIiwiaWQiLCJhcmlhLWxhYmVsIiwiZGl2IiwidWwiLCJsaSIsImEiLCJocmVmIiwibWFwIiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJ1cmxzIiwic21hbGwiLCJhbHQiLCJhbHRfZGVzY3JpcHRpb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});