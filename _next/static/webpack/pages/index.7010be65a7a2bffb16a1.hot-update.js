webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components2/Home/EndOfTheStory/Slide1/index.tsx":
/*!*************************************************************!*\
  !*** ./src/components2/Home/EndOfTheStory/Slide1/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ivan_Documents_GitHub_mercuryo_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/utils */ \"./src/utils/index.tsx\");\n/* harmony import */ var _components_Home_ui_Story__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Home/ui/Story */ \"./src/components2/Home/ui/Story/index.tsx\");\n/* harmony import */ var _components_Home_ui_Notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Home/ui/Notification */ \"./src/components2/Home/ui/Notification/index.tsx\");\n/* harmony import */ var _binance_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./binance.svg */ \"./src/components2/Home/EndOfTheStory/Slide1/binance.svg\");\n/* harmony import */ var _Slide1_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slide1.module.scss */ \"./src/components2/Home/EndOfTheStory/Slide1/Slide1.module.scss\");\n/* harmony import */ var _Slide1_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Slide1_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/ivan/Documents/GitHub/mercuryo/landing/src/components2/Home/EndOfTheStory/Slide1/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n // import PersonStory from '@components/Home/ui/PersonStory';\n\n\n\n\nvar PersonStory = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @components/Home/ui/PersonStory */ \"./src/components2/Home/ui/PersonStory/index.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @components/Home/ui/PersonStory */ \"./src/components2/Home/ui/PersonStory/index.tsx\")];\n    },\n    modules: ['@components/Home/ui/PersonStory']\n  }\n});\n_c2 = PersonStory;\nvar cn = Object(_src_utils__WEBPACK_IMPORTED_MODULE_3__[\"bemCssModules\"])(_Slide1_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a, 'Slide1');\n\nvar Slide1 = function Slide1(_ref) {\n  _s();\n\n  var className = _ref.className,\n      setStep = _ref.setStep;\n\n  var _useProgress = Object(_src_utils__WEBPACK_IMPORTED_MODULE_3__[\"useProgress\"])({\n    onEnter: function onEnter() {\n      setStep(7);\n    },\n    onLeaveBack: function onLeaveBack() {\n      setStep(6);\n    }\n  }),\n      _useProgress2 = Object(_Users_ivan_Documents_GitHub_mercuryo_landing_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useProgress, 2),\n      ref = _useProgress2[0],\n      progress = _useProgress2[1];\n\n  return __jsx(_components_Home_ui_Story__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: cn(null, [className]),\n    ref: ref,\n    anchors: {\n      niko_story3: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(PersonStory, {\n    className: cn('person-story'),\n    progress: progress,\n    fbx: \"/static/img/stories/3d/niko.fbx\",\n    texture: \"/static/img/stories/3d/wbr.jpg\",\n    image: \"/static/img/stories/chat-story/niko.svg\",\n    color: 0xff592c,\n    translateY: 320,\n    title: \"Meanwhile, Niko wants to trade\",\n    subtitle: \"So he deposits crypto to his Binance account...\",\n    title2: \"... and gets rich quick!\",\n    isRelativeFirstBlock: true,\n    classNames: {\n      title: cn('title'),\n      subtitle: cn('subtitle')\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Home_ui_Notification__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: cn('notification', {\n      hidden: progress <= 0.5\n    }),\n    icon: __jsx(_binance_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }\n    }),\n    title: \"Binance\",\n    time: \"now\",\n    subtitle: \"Balance top-up\",\n    description: \"+ 400 USDT\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Slide1, \"kNowKy00T7zPjcaYuMC2LeQmP4A=\", false, function () {\n  return [_src_utils__WEBPACK_IMPORTED_MODULE_3__[\"useProgress\"]];\n});\n\n_c3 = Slide1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slide1);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"PersonStory$dynamic\");\n$RefreshReg$(_c2, \"PersonStory\");\n$RefreshReg$(_c3, \"Slide1\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMyL0hvbWUvRW5kT2ZUaGVTdG9yeS9TbGlkZTEvaW5kZXgudHN4PzM5YjIiXSwibmFtZXMiOlsiUGVyc29uU3RvcnkiLCJkeW5hbWljIiwiY24iLCJiZW1Dc3NNb2R1bGVzIiwic3R5bGUiLCJTbGlkZTEiLCJjbGFzc05hbWUiLCJzZXRTdGVwIiwidXNlUHJvZ3Jlc3MiLCJvbkVudGVyIiwib25MZWF2ZUJhY2siLCJyZWYiLCJwcm9ncmVzcyIsIm5pa29fc3RvcnkzIiwidGl0bGUiLCJzdWJ0aXRsZSIsImhpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUVBOztBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sK0pBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLHdGQUFkO0FBQUE7QUFBQSxjQUFjLGlDQUFkO0FBQUE7QUFBQSxFQUEzQjtNQUFNRCxXO0FBRU4sSUFBTUUsRUFBRSxHQUFHQyxnRUFBYSxDQUFDQywwREFBRCxFQUFRLFFBQVIsQ0FBeEI7O0FBT0EsSUFBTUMsTUFBeUIsR0FBRyxTQUE1QkEsTUFBNEIsT0FBNEI7QUFBQTs7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLHFCQUNwQ0MsOERBQVcsQ0FBQztBQUNsQ0MsV0FBTyxFQUFFLG1CQUFNO0FBQ2JGLGFBQU8sQ0FBQyxDQUFELENBQVA7QUFDRCxLQUhpQztBQUlsQ0csZUFBVyxFQUFFLHVCQUFNO0FBQ2pCSCxhQUFPLENBQUMsQ0FBRCxDQUFQO0FBQ0Q7QUFOaUMsR0FBRCxDQUR5QjtBQUFBO0FBQUEsTUFDckRJLEdBRHFEO0FBQUEsTUFDaERDLFFBRGdEOztBQVU1RCxTQUNFLE1BQUMsaUVBQUQ7QUFBTyxhQUFTLEVBQUVWLEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBQ0ksU0FBRCxDQUFQLENBQXBCO0FBQXlDLE9BQUcsRUFBRUssR0FBOUM7QUFBbUQsV0FBTyxFQUFFO0FBQUVFLGlCQUFXLEVBQUU7QUFBZixLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQ0UsYUFBUyxFQUFFWCxFQUFFLENBQUMsY0FBRCxDQURmO0FBRUUsWUFBUSxFQUFFVSxRQUZaO0FBR0UsT0FBRyxFQUFDLGlDQUhOO0FBSUUsV0FBTyxFQUFDLGdDQUpWO0FBS0UsU0FBSyxFQUFDLHlDQUxSO0FBTUUsU0FBSyxFQUFFLFFBTlQ7QUFPRSxjQUFVLEVBQUUsR0FQZDtBQVFFLFNBQUssRUFBQyxnQ0FSUjtBQVNFLFlBQVEsRUFBQyxpREFUWDtBQVVFLFVBQU0sRUFBQywwQkFWVDtBQVdFLHdCQUFvQixNQVh0QjtBQVlFLGNBQVUsRUFBRTtBQUNWRSxXQUFLLEVBQUVaLEVBQUUsQ0FBQyxPQUFELENBREM7QUFFVmEsY0FBUSxFQUFFYixFQUFFLENBQUMsVUFBRDtBQUZGLEtBWmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWlCRSxNQUFDLHdFQUFEO0FBQ0UsYUFBUyxFQUFFQSxFQUFFLENBQUMsY0FBRCxFQUFpQjtBQUFFYyxZQUFNLEVBQUVKLFFBQVEsSUFBSTtBQUF0QixLQUFqQixDQURmO0FBRUUsUUFBSSxFQUFFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZSO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxRQUFJLEVBQUMsS0FKUDtBQUtFLFlBQVEsRUFBQyxnQkFMWDtBQU1FLGVBQVcsRUFBQyxZQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERixDQURGO0FBOEJELENBeENEOztHQUFNUCxNO1VBQ29CRyxzRDs7O01BRHBCSCxNO0FBMENTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzMi9Ib21lL0VuZE9mVGhlU3RvcnkvU2xpZGUxL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5pbXBvcnQgeyBiZW1Dc3NNb2R1bGVzLCB1c2VQcm9ncmVzcyB9IGZyb20gJ0BzcmMvdXRpbHMnO1xuaW1wb3J0IFN0b3J5IGZyb20gJ0Bjb21wb25lbnRzL0hvbWUvdWkvU3RvcnknO1xuLy8gaW1wb3J0IFBlcnNvblN0b3J5IGZyb20gJ0Bjb21wb25lbnRzL0hvbWUvdWkvUGVyc29uU3RvcnknO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICdAY29tcG9uZW50cy9Ib21lL3VpL05vdGlmaWNhdGlvbic7XG5cbmltcG9ydCBCaW5hbmNlSWNvbiBmcm9tICcuL2JpbmFuY2Uuc3ZnJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL1NsaWRlMS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFBlcnNvblN0b3J5ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bjb21wb25lbnRzL0hvbWUvdWkvUGVyc29uU3RvcnknKSk7XG5cbmNvbnN0IGNuID0gYmVtQ3NzTW9kdWxlcyhzdHlsZSwgJ1NsaWRlMScpO1xuXG5leHBvcnQgdHlwZSBUU2xpZGUxID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHNldFN0ZXAodmFsdWU6IG51bWJlcik6IHZvaWQ7XG59O1xuXG5jb25zdCBTbGlkZTE6IFJlYWN0LkZDPFRTbGlkZTE+ID0gKHsgY2xhc3NOYW1lLCBzZXRTdGVwIH0pID0+IHtcbiAgY29uc3QgW3JlZiwgcHJvZ3Jlc3NdID0gdXNlUHJvZ3Jlc3Moe1xuICAgIG9uRW50ZXI6ICgpID0+IHtcbiAgICAgIHNldFN0ZXAoNyk7XG4gICAgfSxcbiAgICBvbkxlYXZlQmFjazogKCkgPT4ge1xuICAgICAgc2V0U3RlcCg2KTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTdG9yeSBjbGFzc05hbWU9e2NuKG51bGwsIFtjbGFzc05hbWVdKX0gcmVmPXtyZWZ9IGFuY2hvcnM9e3sgbmlrb19zdG9yeTM6IDAgfX0+XG4gICAgICA8UGVyc29uU3RvcnlcbiAgICAgICAgY2xhc3NOYW1lPXtjbigncGVyc29uLXN0b3J5Jyl9XG4gICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cbiAgICAgICAgZmJ4PVwiL3N0YXRpYy9pbWcvc3Rvcmllcy8zZC9uaWtvLmZieFwiXG4gICAgICAgIHRleHR1cmU9XCIvc3RhdGljL2ltZy9zdG9yaWVzLzNkL3dici5qcGdcIlxuICAgICAgICBpbWFnZT1cIi9zdGF0aWMvaW1nL3N0b3JpZXMvY2hhdC1zdG9yeS9uaWtvLnN2Z1wiXG4gICAgICAgIGNvbG9yPXsweGZmNTkyY31cbiAgICAgICAgdHJhbnNsYXRlWT17MzIwfVxuICAgICAgICB0aXRsZT1cIk1lYW53aGlsZSwgTmlrbyB3YW50cyB0byB0cmFkZVwiXG4gICAgICAgIHN1YnRpdGxlPVwiU28gaGUgZGVwb3NpdHMgY3J5cHRvIHRvIGhpcyBCaW5hbmNlIGFjY291bnQuLi5cIlxuICAgICAgICB0aXRsZTI9XCIuLi4gYW5kIGdldHMgcmljaCBxdWljayFcIlxuICAgICAgICBpc1JlbGF0aXZlRmlyc3RCbG9ja1xuICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgdGl0bGU6IGNuKCd0aXRsZScpLFxuICAgICAgICAgIHN1YnRpdGxlOiBjbignc3VidGl0bGUnKSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE5vdGlmaWNhdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25vdGlmaWNhdGlvbicsIHsgaGlkZGVuOiBwcm9ncmVzcyA8PSAwLjUgfSl9XG4gICAgICAgICAgaWNvbj17PEJpbmFuY2VJY29uIC8+fVxuICAgICAgICAgIHRpdGxlPVwiQmluYW5jZVwiXG4gICAgICAgICAgdGltZT1cIm5vd1wiXG4gICAgICAgICAgc3VidGl0bGU9XCJCYWxhbmNlIHRvcC11cFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCIrIDQwMCBVU0RUXCJcbiAgICAgICAgLz5cbiAgICAgIDwvUGVyc29uU3Rvcnk+XG4gICAgPC9TdG9yeT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlMTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components2/Home/EndOfTheStory/Slide1/index.tsx\n");

/***/ })

})