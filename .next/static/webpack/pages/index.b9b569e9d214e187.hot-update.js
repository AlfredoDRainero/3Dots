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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: #dddddd;\\n  display: grid;\\n  grid-template-columns: repeat(8, 1fr);\\n  grid-template-rows: repeat(4, 1fr);\\n  left:0;\\n  top:0;\\n  position:absolute;\\n  gap: 1px;\\n  height: calc(100vh - 2px ); //- 20px ); /* Usar 100vh para ocupar el 100% de la altura de la ventana */\\n  width: calc(100vw - 2px);// - 20px); //32px);\\n  //max-width: 1023px;\\n  // margin-right: 25px;\\n  @media (max-width: 1023px) {\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-template-rows: repeat(4, 1fr);\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0%, 100% {\\n    transform: translateY(0);\\n  }\\n  50% {\\n    transform: translateY(-50%);\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: translateY(100%);\\n    opacity: 1;\\n  }\\n  50% {\\n    transform: translateY(0%);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(-120%);\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  0% {\\n    transform: translateY(-120%); /* Cambiado a valor negativo para iniciar desde arriba */\\n    opacity: 1;\\n  }\\n  50% {\\n    transform: translateY(0%);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(100%); /* Cambiado a valor positivo para moverse hacia abajo */\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  text-align: right;\\n  border: 1px solid #888888;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  //white-space: nowrap;\\n  color: #212932;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 400px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 20s linear infinite; /* Aplicar la animaci\\xf3n */\\n  white-space: pre-wrap;\\n  line-height: 300px;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 300px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 10s linear infinite; /* Aplicar la animaci\\xf3n */\\n  white-space: pre-wrap;\\n  line-height: 240px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 200px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 10s linear infinite; /* Aplicar la animaci\\xf3n */\\n  white-space: pre-wrap;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  text-align: left;\\n  width: 100%;\\n  height: 100%;\\n  font-family: \"Century Gothic Bold\", sans-serif; /* Fuente Century Gothic Bold */\\n  font-size: 200px; /* Tama\\xf1o de fuente 72px */\\n  font-weight: bold;\\n  animation: ',\n        \" 15s linear infinite; /* Aplicar la animaci\\xf3n */\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nconst bounce = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst slideUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject2());\nconst slideDown = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject3());\nconst Div = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c1 = Div;\n// ------ NOMBRE ---------\nconst Letra1 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5(), bounce);\n_c2 = Letra1;\nconst Letra2 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6(), slideUp);\n_c3 = Letra2;\nconst Letra3 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject7(), slideDown);\n_c4 = Letra3;\nconst Letra4 = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject8(), slideDown);\n_c5 = Letra4;\nconst HomePage = ()=>{\n    _s();\n    const [totalDivs, setTotalDivs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(16);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const isWideScreen = window.innerWidth >= 1023;\n            setTotalDivs(isWideScreen ? 32 : 16);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        handleResize();\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n            children: [\n                ...Array(totalDivs)\n            ].map((_, index)=>{\n                let content;\n                switch(index){\n                    case 9:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra1, {\n                            children: \"2\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 142,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 10:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra2, {\n                            children: \"D\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 145,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 19:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra3, {\n                            children: \"E E E E E E E\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 148,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 20:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra1, {\n                            children: \"V V V\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 151,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 21:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra3, {\n                            children: \"S S S S\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 154,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    case 30:\n                        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Letra4, {\n                            children: \".\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                            lineNumber: 157,\n                            columnNumber: 25\n                        }, undefined);\n                        break;\n                    default:\n                        content = \"\";\n                        break;\n                }\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Div, {\n                    children: content\n                }, index, false, {\n                    fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n                    lineNumber: 164,\n                    columnNumber: 18\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n            lineNumber: 136,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\PROGRAMACION\\\\2devs\\\\pages\\\\index.jsx\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"gklDgA5/JEJ8OwbCuxyJFI7fttA=\");\n_c6 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Div\");\n$RefreshReg$(_c2, \"Letra1\");\n$RefreshReg$(_c3, \"Letra2\");\n$RefreshReg$(_c4, \"Letra3\");\n$RefreshReg$(_c5, \"Letra4\");\n$RefreshReg$(_c6, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUVVO0FBRXRELE1BQU1LLFlBQVlGLHlEQUFNQSxDQUFDRyxHQUFHO0tBQXRCRDtBQW1CTixNQUFNRSxTQUFTSCw0REFBU0E7QUFTeEIsTUFBTUksVUFBVUosNERBQVNBO0FBZXpCLE1BQU1LLFlBQVlMLDREQUFTQTtBQWUzQixNQUFNTSxNQUFNUCx5REFBTUEsQ0FBQ0csR0FBRztNQUFoQkk7QUFXTiwwQkFBMEI7QUFDMUIsTUFBTUMsU0FBU1IseURBQU1BLENBQUNHLEdBQUcscUJBTVZDO01BTlRJO0FBV04sTUFBTUMsU0FBU1QseURBQU1BLENBQUNHLEdBQUcscUJBTVZFO01BTlRJO0FBV04sTUFBTUMsU0FBU1YseURBQU1BLENBQUNHLEdBQUcscUJBTVZHO01BTlRJO0FBVU4sTUFBTUMsU0FBU1gseURBQU1BLENBQUNHLEdBQUcscUJBT1ZHO01BUFRLO0FBVU4sTUFBTUMsV0FBVzs7SUFDZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixlQUFlO1lBQ25CLE1BQU1DLGVBQWVDLE9BQU9DLFVBQVUsSUFBSTtZQUMxQ0osYUFBYUUsZUFBZSxLQUFLO1FBQ25DO1FBRUFDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVKO1FBQ2xDQTtRQUNBLE9BQU87WUFDTEUsT0FBT0csbUJBQW1CLENBQUMsVUFBVUw7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1o7a0JBQ0MsNEVBQUNEO3NCQUNFO21CQUFJbUIsTUFBTVI7YUFBVyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7Z0JBQzdCLElBQUlDO2dCQUVKLE9BQVFEO29CQUNOLEtBQUs7d0JBQ0hDLHdCQUFVLDhEQUFDakI7c0NBQU87Ozs7Ozt3QkFDbEI7b0JBQ0YsS0FBSzt3QkFDSGlCLHdCQUFVLDhEQUFDaEI7c0NBQU87Ozs7Ozt3QkFDbEI7b0JBQ0YsS0FBSzt3QkFDSGdCLHdCQUFVLDhEQUFDZjtzQ0FBTzs7Ozs7O3dCQUNsQjtvQkFDRixLQUFLO3dCQUNIZSx3QkFBVSw4REFBQ2pCO3NDQUFPOzs7Ozs7d0JBQ2xCO29CQUNGLEtBQUs7d0JBQ0hpQix3QkFBVSw4REFBQ2Y7c0NBQU87Ozs7Ozt3QkFDbEI7b0JBQ0YsS0FBSzt3QkFDSGUsd0JBQVUsOERBQUNkO3NDQUFPOzs7Ozs7d0JBQ2xCO29CQUNGO3dCQUNFYyxVQUFVO3dCQUNWO2dCQUNKO2dCQUVBLHFCQUFPLDhEQUFDbEI7OEJBQWlCa0I7bUJBQVJEOzs7OztZQUNuQjs7Ozs7Ozs7Ozs7QUFJUjtHQW5ETVo7TUFBQUE7QUFxRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGxlZnQ6MDtcclxuICB0b3A6MDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBnYXA6IDFweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAycHggKTsgLy8tIDIwcHggKTsgLyogVXNhciAxMDB2aCBwYXJhIG9jdXBhciBlbCAxMDAlIGRlIGxhIGFsdHVyYSBkZSBsYSB2ZW50YW5hICovXHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAycHgpOy8vIC0gMjBweCk7IC8vMzJweCk7XHJcbiAgLy9tYXgtd2lkdGg6IDEwMjNweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgYm91bmNlID0ga2V5ZnJhbWVzYFxyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzbGlkZVVwID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEyMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzbGlkZURvd24gPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMjAlKTsgLyogQ2FtYmlhZG8gYSB2YWxvciBuZWdhdGl2byBwYXJhIGluaWNpYXIgZGVzZGUgYXJyaWJhICovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpOyAvKiBDYW1iaWFkbyBhIHZhbG9yIHBvc2l0aXZvIHBhcmEgbW92ZXJzZSBoYWNpYSBhYmFqbyAqL1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg4ODg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy93aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGNvbG9yOiAjMjEyOTMyO1xyXG5gO1xyXG5cclxuXHJcbi8vIC0tLS0tLSBOT01CUkUgLS0tLS0tLS0tXHJcbmNvbnN0IExldHJhMSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljIEJvbGRcIiwgc2Fucy1zZXJpZjsgLyogRnVlbnRlIENlbnR1cnkgR290aGljIEJvbGQgKi9cclxuICBmb250LXNpemU6IDQwMHB4OyAvKiBUYW1hw7FvIGRlIGZ1ZW50ZSA3MnB4ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYW5pbWF0aW9uOiAke2JvdW5jZX0gMjBzIGxpbmVhciBpbmZpbml0ZTsgLyogQXBsaWNhciBsYSBhbmltYWNpw7NuICovXHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IExldHJhMiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNlbnR1cnkgR290aGljIEJvbGRcIiwgc2Fucy1zZXJpZjsgLyogRnVlbnRlIENlbnR1cnkgR290aGljIEJvbGQgKi9cclxuICBmb250LXNpemU6IDMwMHB4OyAvKiBUYW1hw7FvIGRlIGZ1ZW50ZSA3MnB4ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYW5pbWF0aW9uOiAke3NsaWRlVXB9IDEwcyBsaW5lYXIgaW5maW5pdGU7IC8qIEFwbGljYXIgbGEgYW5pbWFjacOzbiAqL1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBsaW5lLWhlaWdodDogMjQwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMZXRyYTMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJDZW50dXJ5IEdvdGhpYyBCb2xkXCIsIHNhbnMtc2VyaWY7IC8qIEZ1ZW50ZSBDZW50dXJ5IEdvdGhpYyBCb2xkICovXHJcbiAgZm9udC1zaXplOiAyMDBweDsgLyogVGFtYcOxbyBkZSBmdWVudGUgNzJweCAqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFuaW1hdGlvbjogJHtzbGlkZURvd259IDEwcyBsaW5lYXIgaW5maW5pdGU7IC8qIEFwbGljYXIgbGEgYW5pbWFjacOzbiAqL1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuYDtcclxuXHJcbmNvbnN0IExldHJhNCA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWMgQm9sZFwiLCBzYW5zLXNlcmlmOyAvKiBGdWVudGUgQ2VudHVyeSBHb3RoaWMgQm9sZCAqL1xyXG4gIGZvbnQtc2l6ZTogMjAwcHg7IC8qIFRhbWHDsW8gZGUgZnVlbnRlIDcycHggKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbmltYXRpb246ICR7c2xpZGVEb3dufSAxNXMgbGluZWFyIGluZmluaXRlOyAvKiBBcGxpY2FyIGxhIGFuaW1hY2nDs24gKi9cclxuYDtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b3RhbERpdnMsIHNldFRvdGFsRGl2c10gPSB1c2VTdGF0ZSgxNik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzV2lkZVNjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjM7XHJcbiAgICAgIHNldFRvdGFsRGl2cyhpc1dpZGVTY3JlZW4gPyAzMiA6IDE2KTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICB7Wy4uLkFycmF5KHRvdGFsRGl2cyldLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGxldCBjb250ZW50O1xyXG5cclxuICAgICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSA8TGV0cmExPjI8L0xldHJhMT47XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgY29udGVudCA9IDxMZXRyYTI+RDwvTGV0cmEyPjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOTpcclxuICAgICAgICAgICAgICBjb250ZW50ID0gPExldHJhMz5FIEUgRSBFIEUgRSBFPC9MZXRyYTM+O1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSA8TGV0cmExPlYgViBWPC9MZXRyYTE+O1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDIxOlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSA8TGV0cmEzPlMgUyBTIFM8L0xldHJhMz47XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzA6XHJcbiAgICAgICAgICAgICAgY29udGVudCA9IDxMZXRyYTQ+LjwvTGV0cmE0PjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBjb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gPERpdiBrZXk9e2luZGV4fT57Y29udGVudH08L0Rpdj47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlZCIsImtleWZyYW1lcyIsIkNvbnRhaW5lciIsImRpdiIsImJvdW5jZSIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJEaXYiLCJMZXRyYTEiLCJMZXRyYTIiLCJMZXRyYTMiLCJMZXRyYTQiLCJIb21lUGFnZSIsInRvdGFsRGl2cyIsInNldFRvdGFsRGl2cyIsImhhbmRsZVJlc2l6ZSIsImlzV2lkZVNjcmVlbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4IiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});