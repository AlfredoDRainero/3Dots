"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: #dddddd;\\n  display: grid;\\n  grid-template-columns: repeat(8, 1fr);\\n  grid-template-rows: repeat(4, 1fr);\\n  left:0;\\n  top:0;\\n  position:absolute;\\n  gap: 1px;\\n  height: calc(100vh - 2px ); //- 20px ); /* Usar 100vh para ocupar el 100% de la altura de la ventana */\\n  width: calc(100vw - 2px);// - 20px); //32px);\\n  //max-width: 1023px;\\n  // margin-right: 25px;\\n  @media (max-width: 1023px) {\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-template-rows: repeat(4, 1fr);\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0%, 100% {\\n    transform: translateY(0);\\n  }\\n  50% {\\n    transform: translateY(-50%);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: translateY(100%);\\n    opacity: 1;\\n  }\\n  50% {\\n    transform: translateY(0%);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(-120%);\\n    opacity: 0;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: translateX(-120%); /* Cambiado a valor negativo para iniciar desde arriba */\\n    opacity: 1;\\n  }\\n  50% {\\n    transform: translateX(0%);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateX(100%); /* Cambiado a valor positivo para moverse hacia abajo */\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: scale(1); /* Tama\\xf1o normal */\\n    opacity: 0;\\n  }\\n  50% {\\n    transform: scale(2); /* Zoom al 120% del tama\\xf1o normal */\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: scale(3); /* Volver al tama\\xf1o normal */\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  text-align: right;\\n  border: 1px solid #888888;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  //white-space: nowrap;\\n  color: #212932;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 400px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 20s linear infinite; /* Aplicar la animaci\\xf3n */\\n  white-space: pre-wrap;\\n  line-height: 300px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 300px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 10s linear infinite; /* Aplicar la animaci\\xf3n */\\n  white-space: pre-wrap;\\n  line-height: 240px;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 200px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 10s linear infinite; /* Aplicar la animaci\\xf3n */\\n  white-space: pre-wrap;\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  text-align: left;\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 200px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 15s linear infinite; /* Aplicar la animaci\\xf3n */\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  text-align: left;\\n  color:#FF434E;\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"arial Bold\"; /* Fuente Century Gothic Bold */\\n  font-size: 200px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 15s linear infinite; /* Aplicar la animaci\\xf3n */\\n  \\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nconst bounce = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst slideUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject2());\nconst slideDown = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject3());\nconst zoom = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject4());\nconst Div = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c1 = Div;\n// ------ NOMBRE ---------\nconst Letra1 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6(), bounce);\n_c2 = Letra1;\nconst Letra2 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject7(), slideUp);\n_c3 = Letra2;\nconst Letra3 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject8(), slideDown);\n_c4 = Letra3;\nconst Letra4 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject9(), slideDown);\n_c5 = Letra4;\nconst Letra5 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject10(), zoom);\n_c6 = Letra5;\nconst HomePage = ()=>{\n    _s();\n    const [totalDivs, setTotalDivs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(16);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const isWideScreen = window.innerWidth >= 1023;\n            setTotalDivs(isWideScreen ? 32 : 16);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        handleResize();\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n            children: [\n                ...Array(totalDivs)\n            ].map((_, index)=>{\n                let content;\n                switch(index){\n                    case 9:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra1, {\n                            children: \"2\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 170,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 10:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra2, {\n                            children: [\n                                \"D\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra3, {\n                                    children: \"D\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 34\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 173,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 12:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra5, {\n                            children: \"...\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 176,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 19:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra3, {\n                            children: [\n                                \"E E E E E E E\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra3, {\n                                    children: \"E E E\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                                    lineNumber: 179,\n                                    columnNumber: 46\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 179,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 20:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra1, {\n                            children: \"V V V\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 182,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 21:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra2, {\n                            children: \"S S S S\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 185,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 30:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra4, {\n                            children: \".\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 188,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    default:\n                        content = \"\";\n                        break;\n                }\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Div, {\n                    children: content\n                }, index, false, {\n                    fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                    lineNumber: 195,\n                    columnNumber: 18\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n            lineNumber: 164,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n        lineNumber: 163,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"gklDgA5/JEJ8OwbCuxyJFI7fttA=\");\n_c7 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Div\");\n$RefreshReg$(_c2, \"Letra1\");\n$RefreshReg$(_c3, \"Letra2\");\n$RefreshReg$(_c4, \"Letra3\");\n$RefreshReg$(_c5, \"Letra4\");\n$RefreshReg$(_c6, \"Letra5\");\n$RefreshReg$(_c7, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFFVTtBQUV0RCxNQUFNSyxZQUFZRix5REFBTUEsQ0FBQ0csR0FBRztLQUF0QkQ7QUFtQk4sTUFBTUUsU0FBU0gsNERBQVNBO0FBU3hCLE1BQU1JLFVBQVVKLDREQUFTQTtBQWV6QixNQUFNSyxZQUFZTCw0REFBU0E7QUFlM0IsTUFBTU0sT0FBT04sNERBQVNBO0FBZ0J0QixNQUFNTyxNQUFNUix5REFBTUEsQ0FBQ0csR0FBRztNQUFoQks7QUFXTiwwQkFBMEI7QUFDMUIsTUFBTUMsU0FBU1QseURBQU1BLENBQUNHLEdBQUcscUJBTVZDO01BTlRLO0FBV04sTUFBTUMsU0FBU1YseURBQU1BLENBQUNHLEdBQUcscUJBTVZFO01BTlRLO0FBV04sTUFBTUMsU0FBU1gseURBQU1BLENBQUNHLEdBQUcscUJBTVZHO01BTlRLO0FBVU4sTUFBTUMsU0FBU1oseURBQU1BLENBQUNHLEdBQUcscUJBT1ZHO01BUFRNO0FBVU4sTUFBTUMsU0FBU2IseURBQU1BLENBQUNHLEdBQUcsc0JBUVZJO01BUlRNO0FBWU4sTUFBTUMsV0FBVzs7SUFDZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixlQUFlO1lBQ25CLE1BQU1DLGVBQWVDLE9BQU9DLFVBQVUsSUFBSTtZQUMxQ0osYUFBYUUsZUFBZSxLQUFLO1FBQ25DO1FBRUFDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVKO1FBQ2xDQTtRQUNBLE9BQU87WUFDTEUsT0FBT0csbUJBQW1CLENBQUMsVUFBVUw7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2Q7a0JBQ0MsNEVBQUNEO3NCQUNFO21CQUFJcUIsTUFBTVI7YUFBVyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7Z0JBQzdCLElBQUlDO2dCQUVKLE9BQVFEO29CQUNOLEtBQUs7d0JBQ0hDLHdCQUFVLDhEQUFDbEI7c0NBQU87Ozs7Ozt3QkFDbEI7b0JBQ0YsS0FBSzt3QkFDSGtCLHdCQUFVLDhEQUFDakI7O2dDQUFPOzhDQUFDLDhEQUFDQzs4Q0FBTzs7Ozs7Ozs7Ozs7O3dCQUMzQjtvQkFDRixLQUFLO3dCQUNIZ0Isd0JBQVUsOERBQUNkO3NDQUFPOzs7Ozs7d0JBQ2xCO29CQUNGLEtBQUs7d0JBQ0hjLHdCQUFVLDhEQUFDaEI7O2dDQUFPOzhDQUFhLDhEQUFDQTs4Q0FBTzs7Ozs7Ozs7Ozs7O3dCQUN2QztvQkFDRixLQUFLO3dCQUNIZ0Isd0JBQVUsOERBQUNsQjtzQ0FBTzs7Ozs7O3dCQUNsQjtvQkFDRixLQUFLO3dCQUNIa0Isd0JBQVUsOERBQUNqQjtzQ0FBTzs7Ozs7O3dCQUNsQjtvQkFDRixLQUFLO3dCQUNIaUIsd0JBQVUsOERBQUNmO3NDQUFPOzs7Ozs7d0JBQ2xCO29CQUNGO3dCQUNFZSxVQUFVO3dCQUNWO2dCQUNKO2dCQUVBLHFCQUFPLDhEQUFDbkI7OEJBQWlCbUI7bUJBQVJEOzs7OztZQUNuQjs7Ozs7Ozs7Ozs7QUFJUjtHQXRETVo7TUFBQUE7QUF3RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGxlZnQ6MDtcclxuICB0b3A6MDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBnYXA6IDFweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAycHggKTsgLy8tIDIwcHggKTsgLyogVXNhciAxMDB2aCBwYXJhIG9jdXBhciBlbCAxMDAlIGRlIGxhIGFsdHVyYSBkZSBsYSB2ZW50YW5hICovXHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAycHgpOy8vIC0gMjBweCk7IC8vMzJweCk7XHJcbiAgLy9tYXgtd2lkdGg6IDEwMjNweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgYm91bmNlID0ga2V5ZnJhbWVzYFxyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzbGlkZVVwID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEyMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzbGlkZURvd24gPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAlKTsgLyogQ2FtYmlhZG8gYSB2YWxvciBuZWdhdGl2byBwYXJhIGluaWNpYXIgZGVzZGUgYXJyaWJhICovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyAvKiBDYW1iaWFkbyBhIHZhbG9yIHBvc2l0aXZvIHBhcmEgbW92ZXJzZSBoYWNpYSBhYmFqbyAqL1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB6b29tID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IC8qIFRhbWHDsW8gbm9ybWFsICovXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogWm9vbSBhbCAxMjAlIGRlbCB0YW1hw7FvIG5vcm1hbCAqL1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpOyAvKiBWb2x2ZXIgYWwgdGFtYcOxbyBub3JtYWwgKi9cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODg4ODtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvL3doaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6ICMyMTI5MzI7XHJcbmA7XHJcblxyXG5cclxuLy8gLS0tLS0tIE5PTUJSRSAtLS0tLS0tLS1cclxuY29uc3QgTGV0cmExID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWMgQm9sZFwiLCBzYW5zLXNlcmlmOyAvKiBGdWVudGUgQ2VudHVyeSBHb3RoaWMgQm9sZCAqL1xyXG4gIGZvbnQtc2l6ZTogNDAwcHg7IC8qIFRhbWHDsW8gZGUgZnVlbnRlIDcycHggKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbmltYXRpb246ICR7Ym91bmNlfSAyMHMgbGluZWFyIGluZmluaXRlOyAvKiBBcGxpY2FyIGxhIGFuaW1hY2nDs24gKi9cclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTGV0cmEyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWMgQm9sZFwiLCBzYW5zLXNlcmlmOyAvKiBGdWVudGUgQ2VudHVyeSBHb3RoaWMgQm9sZCAqL1xyXG4gIGZvbnQtc2l6ZTogMzAwcHg7IC8qIFRhbWHDsW8gZGUgZnVlbnRlIDcycHggKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbmltYXRpb246ICR7c2xpZGVVcH0gMTBzIGxpbmVhciBpbmZpbml0ZTsgLyogQXBsaWNhciBsYSBhbmltYWNpw7NuICovXHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNDBweDtcclxuYDtcclxuXHJcbmNvbnN0IExldHJhMyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljIEJvbGRcIiwgc2Fucy1zZXJpZjsgLyogRnVlbnRlIENlbnR1cnkgR290aGljIEJvbGQgKi9cclxuICBmb250LXNpemU6IDIwMHB4OyAvKiBUYW1hw7FvIGRlIGZ1ZW50ZSA3MnB4ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYW5pbWF0aW9uOiAke3NsaWRlRG93bn0gMTBzIGxpbmVhciBpbmZpbml0ZTsgLyogQXBsaWNhciBsYSBhbmltYWNpw7NuICovXHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG5gO1xyXG5cclxuY29uc3QgTGV0cmE0ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpYyBCb2xkXCIsIHNhbnMtc2VyaWY7IC8qIEZ1ZW50ZSBDZW50dXJ5IEdvdGhpYyBCb2xkICovXHJcbiAgZm9udC1zaXplOiAyMDBweDsgLyogVGFtYcOxbyBkZSBmdWVudGUgNzJweCAqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFuaW1hdGlvbjogJHtzbGlkZURvd259IDE1cyBsaW5lYXIgaW5maW5pdGU7IC8qIEFwbGljYXIgbGEgYW5pbWFjacOzbiAqL1xyXG5gO1xyXG5cclxuY29uc3QgTGV0cmE1ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiNGRjQzNEU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcImFyaWFsIEJvbGRcIjsgLyogRnVlbnRlIENlbnR1cnkgR290aGljIEJvbGQgKi9cclxuICBmb250LXNpemU6IDIwMHB4OyAvKiBUYW1hw7FvIGRlIGZ1ZW50ZSA3MnB4ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYW5pbWF0aW9uOiAke3pvb219IDE1cyBsaW5lYXIgaW5maW5pdGU7IC8qIEFwbGljYXIgbGEgYW5pbWFjacOzbiAqL1xyXG4gIFxyXG5gO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvdGFsRGl2cywgc2V0VG90YWxEaXZzXSA9IHVzZVN0YXRlKDE2KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgaXNXaWRlU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPj0gMTAyMztcclxuICAgICAgc2V0VG90YWxEaXZzKGlzV2lkZVNjcmVlbiA/IDMyIDogMTYpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIHtbLi4uQXJyYXkodG90YWxEaXZzKV0ubWFwKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgY29udGVudCA9IDxMZXRyYTE+MjwvTGV0cmExPjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICBjb250ZW50ID0gPExldHJhMj5EPExldHJhMz5EPC9MZXRyYTM+PC9MZXRyYTI+O1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSA8TGV0cmE1Pi4uLjwvTGV0cmE1PjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOTpcclxuICAgICAgICAgICAgICBjb250ZW50ID0gPExldHJhMz5FIEUgRSBFIEUgRSBFPExldHJhMz5FIEUgRTwvTGV0cmEzPjwvTGV0cmEzPjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyMDpcclxuICAgICAgICAgICAgICBjb250ZW50ID0gPExldHJhMT5WIFYgVjwvTGV0cmExPjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyMTpcclxuICAgICAgICAgICAgICBjb250ZW50ID0gPExldHJhMj5TIFMgUyBTPC9MZXRyYTI+O1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDMwOlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSA8TGV0cmE0Pi48L0xldHJhND47XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgY29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIDxEaXYga2V5PXtpbmRleH0+e2NvbnRlbnR9PC9EaXY+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJDb250YWluZXIiLCJkaXYiLCJib3VuY2UiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiem9vbSIsIkRpdiIsIkxldHJhMSIsIkxldHJhMiIsIkxldHJhMyIsIkxldHJhNCIsIkxldHJhNSIsIkhvbWVQYWdlIiwidG90YWxEaXZzIiwic2V0VG90YWxEaXZzIiwiaGFuZGxlUmVzaXplIiwiaXNXaWRlU2NyZWVuIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});