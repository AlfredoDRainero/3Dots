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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: #dddddd;\\n  display: grid;\\n  grid-template-columns: repeat(8, 1fr);\\n  grid-template-rows: repeat(4, 1fr);\\n  left:0;\\n  top:0;\\n  position:absolute;\\n  gap: 1px;\\n  height: calc(100vh - 2px ); //- 20px ); /* Usar 100vh para ocupar el 100% de la altura de la ventana */\\n  width: calc(100vw - 2px);// - 20px); //32px);\\n  //max-width: 1023px;\\n  // margin-right: 25px;\\n  @media (max-width: 1023px) {\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-template-rows: repeat(4, 1fr);\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0%, 100% {\\n    transform: translateY(0);\\n  }\\n  50% {\\n    transform: translateY(-50%);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: translateY(100%);\\n    opacity: 1;\\n  }\\n  50% {\\n    transform: translateY(0%);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(-120%);\\n    opacity: 0;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: translateX(-120%); /* Cambiado a valor negativo para iniciar desde arriba */\\n    opacity: 1;\\n  }\\n  50% {\\n    transform: translateX(0%);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateX(100%); /* Cambiado a valor positivo para moverse hacia abajo */\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: scale(1); /* Tama\\xf1o normal */\\n    opacity: 1;\\n  }\\n  50% {\\n    transform: scale(1.2); /* Zoom al 120% del tama\\xf1o normal */\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: scale(1); /* Volver al tama\\xf1o normal */\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  text-align: right;\\n  border: 1px solid #888888;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  //white-space: nowrap;\\n  color: #212932;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 400px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 20s linear infinite; /* Aplicar la animaci\\xf3n */\\n  white-space: pre-wrap;\\n  line-height: 300px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 300px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 10s linear infinite; /* Aplicar la animaci\\xf3n */\\n  white-space: pre-wrap;\\n  line-height: 240px;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 200px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 10s linear infinite; /* Aplicar la animaci\\xf3n */\\n  white-space: pre-wrap;\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  text-align: left;\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 200px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 15s linear infinite; /* Aplicar la animaci\\xf3n */\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  text-align: left;\\n  color:#FF434E;\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"arial Bold\"; /* Fuente Century Gothic Bold */\\n  font-size: 200px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 2s linear infinite; /* Aplicar la animaci\\xf3n */\\n  \\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nconst bounce = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst slideUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject2());\nconst slideDown = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject3());\nconst zoom = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject4());\nconst Div = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c1 = Div;\n// ------ NOMBRE ---------\nconst Letra1 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6(), bounce);\n_c2 = Letra1;\nconst Letra2 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject7(), slideUp);\n_c3 = Letra2;\nconst Letra3 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject8(), slideDown);\n_c4 = Letra3;\nconst Letra4 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject9(), slideDown);\n_c5 = Letra4;\nconst Letra5 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject10(), zoom);\n_c6 = Letra5;\nconst HomePage = ()=>{\n    _s();\n    const [totalDivs, setTotalDivs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(16);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const isWideScreen = window.innerWidth >= 1023;\n            setTotalDivs(isWideScreen ? 32 : 16);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        handleResize();\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n            children: [\n                ...Array(totalDivs)\n            ].map((_, index)=>{\n                let content;\n                switch(index){\n                    case 9:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra1, {\n                            children: \"2\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 170,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 10:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra2, {\n                            children: \"D\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 173,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 12:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra5, {\n                            children: \". . .\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 176,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 19:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra3, {\n                            children: \"E E E E E E E\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 179,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 20:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra1, {\n                            children: \"V V V\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 182,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 21:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra2, {\n                            children: \"S S S S\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 185,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 30:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra4, {\n                            children: \".\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 188,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    default:\n                        content = \"\";\n                        break;\n                }\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Div, {\n                    children: content\n                }, index, false, {\n                    fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                    lineNumber: 195,\n                    columnNumber: 18\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n            lineNumber: 164,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n        lineNumber: 163,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"gklDgA5/JEJ8OwbCuxyJFI7fttA=\");\n_c7 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Div\");\n$RefreshReg$(_c2, \"Letra1\");\n$RefreshReg$(_c3, \"Letra2\");\n$RefreshReg$(_c4, \"Letra3\");\n$RefreshReg$(_c5, \"Letra4\");\n$RefreshReg$(_c6, \"Letra5\");\n$RefreshReg$(_c7, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFFVTtBQUV0RCxNQUFNSyxZQUFZRix5REFBTUEsQ0FBQ0csR0FBRztLQUF0QkQ7QUFtQk4sTUFBTUUsU0FBU0gsNERBQVNBO0FBU3hCLE1BQU1JLFVBQVVKLDREQUFTQTtBQWV6QixNQUFNSyxZQUFZTCw0REFBU0E7QUFlM0IsTUFBTU0sT0FBT04sNERBQVNBO0FBZ0J0QixNQUFNTyxNQUFNUix5REFBTUEsQ0FBQ0csR0FBRztNQUFoQks7QUFXTiwwQkFBMEI7QUFDMUIsTUFBTUMsU0FBU1QseURBQU1BLENBQUNHLEdBQUcscUJBTVZDO01BTlRLO0FBV04sTUFBTUMsU0FBU1YseURBQU1BLENBQUNHLEdBQUcscUJBTVZFO01BTlRLO0FBV04sTUFBTUMsU0FBU1gseURBQU1BLENBQUNHLEdBQUcscUJBTVZHO01BTlRLO0FBVU4sTUFBTUMsU0FBU1oseURBQU1BLENBQUNHLEdBQUcscUJBT1ZHO01BUFRNO0FBVU4sTUFBTUMsU0FBU2IseURBQU1BLENBQUNHLEdBQUcsc0JBUVZJO01BUlRNO0FBWU4sTUFBTUMsV0FBVzs7SUFDZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixlQUFlO1lBQ25CLE1BQU1DLGVBQWVDLE9BQU9DLFVBQVUsSUFBSTtZQUMxQ0osYUFBYUUsZUFBZSxLQUFLO1FBQ25DO1FBRUFDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVKO1FBQ2xDQTtRQUNBLE9BQU87WUFDTEUsT0FBT0csbUJBQW1CLENBQUMsVUFBVUw7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2Q7a0JBQ0MsNEVBQUNEO3NCQUNFO21CQUFJcUIsTUFBTVI7YUFBVyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7Z0JBQzdCLElBQUlDO2dCQUVKLE9BQVFEO29CQUNOLEtBQUs7d0JBQ0hDLHdCQUFVLDhEQUFDbEI7c0NBQU87Ozs7Ozt3QkFDbEI7b0JBQ0YsS0FBSzt3QkFDSGtCLHdCQUFVLDhEQUFDakI7c0NBQU87Ozs7Ozt3QkFDbEI7b0JBQ0YsS0FBSzt3QkFDSGlCLHdCQUFVLDhEQUFDZDtzQ0FBTzs7Ozs7O3dCQUNsQjtvQkFDRixLQUFLO3dCQUNIYyx3QkFBVSw4REFBQ2hCO3NDQUFPOzs7Ozs7d0JBQ2xCO29CQUNGLEtBQUs7d0JBQ0hnQix3QkFBVSw4REFBQ2xCO3NDQUFPOzs7Ozs7d0JBQ2xCO29CQUNGLEtBQUs7d0JBQ0hrQix3QkFBVSw4REFBQ2pCO3NDQUFPOzs7Ozs7d0JBQ2xCO29CQUNGLEtBQUs7d0JBQ0hpQix3QkFBVSw4REFBQ2Y7c0NBQU87Ozs7Ozt3QkFDbEI7b0JBQ0Y7d0JBQ0VlLFVBQVU7d0JBQ1Y7Z0JBQ0o7Z0JBRUEscUJBQU8sOERBQUNuQjs4QkFBaUJtQjttQkFBUkQ7Ozs7O1lBQ25COzs7Ozs7Ozs7OztBQUlSO0dBdERNWjtNQUFBQTtBQXdETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XHJcbiAgbGVmdDowO1xyXG4gIHRvcDowO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGdhcDogMXB4O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDJweCApOyAvLy0gMjBweCApOyAvKiBVc2FyIDEwMHZoIHBhcmEgb2N1cGFyIGVsIDEwMCUgZGUgbGEgYWx0dXJhIGRlIGxhIHZlbnRhbmEgKi9cclxuICB3aWR0aDogY2FsYygxMDB2dyAtIDJweCk7Ly8gLSAyMHB4KTsgLy8zMnB4KTtcclxuICAvL21heC13aWR0aDogMTAyM3B4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMjVweDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBib3VuY2UgPSBrZXlmcmFtZXNgXHJcbiAgMCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNsaWRlVXAgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTIwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNsaWRlRG93biA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMCUpOyAvKiBDYW1iaWFkbyBhIHZhbG9yIG5lZ2F0aXZvIHBhcmEgaW5pY2lhciBkZXNkZSBhcnJpYmEgKi9cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IC8qIENhbWJpYWRvIGEgdmFsb3IgcG9zaXRpdm8gcGFyYSBtb3ZlcnNlIGhhY2lhIGFiYWpvICovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHpvb20gPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgLyogVGFtYcOxbyBub3JtYWwgKi9cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IC8qIFpvb20gYWwgMTIwJSBkZWwgdGFtYcOxbyBub3JtYWwgKi9cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgLyogVm9sdmVyIGFsIHRhbWHDsW8gbm9ybWFsICovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg4ODg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy93aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGNvbG9yOiAjMjEyOTMyO1xyXG5gO1xyXG5cclxuXHJcbi8vIC0tLS0tLSBOT01CUkUgLS0tLS0tLS0tXHJcbmNvbnN0IExldHJhMSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljIEJvbGRcIiwgc2Fucy1zZXJpZjsgLyogRnVlbnRlIENlbnR1cnkgR290aGljIEJvbGQgKi9cclxuICBmb250LXNpemU6IDQwMHB4OyAvKiBUYW1hw7FvIGRlIGZ1ZW50ZSA3MnB4ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYW5pbWF0aW9uOiAke2JvdW5jZX0gMjBzIGxpbmVhciBpbmZpbml0ZTsgLyogQXBsaWNhciBsYSBhbmltYWNpw7NuICovXHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IExldHJhMiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljIEJvbGRcIiwgc2Fucy1zZXJpZjsgLyogRnVlbnRlIENlbnR1cnkgR290aGljIEJvbGQgKi9cclxuICBmb250LXNpemU6IDMwMHB4OyAvKiBUYW1hw7FvIGRlIGZ1ZW50ZSA3MnB4ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYW5pbWF0aW9uOiAke3NsaWRlVXB9IDEwcyBsaW5lYXIgaW5maW5pdGU7IC8qIEFwbGljYXIgbGEgYW5pbWFjacOzbiAqL1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBsaW5lLWhlaWdodDogMjQwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMZXRyYTMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpYyBCb2xkXCIsIHNhbnMtc2VyaWY7IC8qIEZ1ZW50ZSBDZW50dXJ5IEdvdGhpYyBCb2xkICovXHJcbiAgZm9udC1zaXplOiAyMDBweDsgLyogVGFtYcOxbyBkZSBmdWVudGUgNzJweCAqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFuaW1hdGlvbjogJHtzbGlkZURvd259IDEwcyBsaW5lYXIgaW5maW5pdGU7IC8qIEFwbGljYXIgbGEgYW5pbWFjacOzbiAqL1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuYDtcclxuXHJcbmNvbnN0IExldHJhNCA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWMgQm9sZFwiLCBzYW5zLXNlcmlmOyAvKiBGdWVudGUgQ2VudHVyeSBHb3RoaWMgQm9sZCAqL1xyXG4gIGZvbnQtc2l6ZTogMjAwcHg7IC8qIFRhbWHDsW8gZGUgZnVlbnRlIDcycHggKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbmltYXRpb246ICR7c2xpZGVEb3dufSAxNXMgbGluZWFyIGluZmluaXRlOyAvKiBBcGxpY2FyIGxhIGFuaW1hY2nDs24gKi9cclxuYDtcclxuXHJcbmNvbnN0IExldHJhNSA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjojRkY0MzRFO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJhcmlhbCBCb2xkXCI7IC8qIEZ1ZW50ZSBDZW50dXJ5IEdvdGhpYyBCb2xkICovXHJcbiAgZm9udC1zaXplOiAyMDBweDsgLyogVGFtYcOxbyBkZSBmdWVudGUgNzJweCAqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFuaW1hdGlvbjogJHt6b29tfSAycyBsaW5lYXIgaW5maW5pdGU7IC8qIEFwbGljYXIgbGEgYW5pbWFjacOzbiAqL1xyXG4gIFxyXG5gO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvdGFsRGl2cywgc2V0VG90YWxEaXZzXSA9IHVzZVN0YXRlKDE2KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgaXNXaWRlU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPj0gMTAyMztcclxuICAgICAgc2V0VG90YWxEaXZzKGlzV2lkZVNjcmVlbiA/IDMyIDogMTYpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIHtbLi4uQXJyYXkodG90YWxEaXZzKV0ubWFwKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgY29udGVudCA9IDxMZXRyYTE+MjwvTGV0cmExPjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICBjb250ZW50ID0gPExldHJhMj5EPC9MZXRyYTI+O1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSA8TGV0cmE1Pi4gLiAuPC9MZXRyYTU+O1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE5OlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSA8TGV0cmEzPkUgRSBFIEUgRSBFIEU8L0xldHJhMz47XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjA6XHJcbiAgICAgICAgICAgICAgY29udGVudCA9IDxMZXRyYTE+ViBWIFY8L0xldHJhMT47XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjE6XHJcbiAgICAgICAgICAgICAgY29udGVudCA9IDxMZXRyYTI+UyBTIFMgUzwvTGV0cmEyPjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzMDpcclxuICAgICAgICAgICAgICBjb250ZW50ID0gPExldHJhND4uPC9MZXRyYTQ+O1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiA8RGl2IGtleT17aW5kZXh9Pntjb250ZW50fTwvRGl2PjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVkIiwia2V5ZnJhbWVzIiwiQ29udGFpbmVyIiwiZGl2IiwiYm91bmNlIiwic2xpZGVVcCIsInNsaWRlRG93biIsInpvb20iLCJEaXYiLCJMZXRyYTEiLCJMZXRyYTIiLCJMZXRyYTMiLCJMZXRyYTQiLCJMZXRyYTUiLCJIb21lUGFnZSIsInRvdGFsRGl2cyIsInNldFRvdGFsRGl2cyIsImhhbmRsZVJlc2l6ZSIsImlzV2lkZVNjcmVlbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4IiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});