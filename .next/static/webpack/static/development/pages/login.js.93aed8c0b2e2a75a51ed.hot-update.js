webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/Containers/Login/Form/index.tsx":
/*!*********************************************!*\
  !*** ./src/Containers/Login/Form/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography */ \"./node_modules/antd/lib/typography/index.js\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _core_validations_email__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/validations/email */ \"./src/core/validations/email.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/config */ \"./src/core/config/index.ts\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/message */ \"./node_modules/antd/lib/message/index.js\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _atlaskit_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @atlaskit/button */ \"./node_modules/@atlaskit/button/dist/esm/index.js\");\n/* harmony import */ var _atlaskit_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @atlaskit/form */ \"./node_modules/@atlaskit/form/dist/esm/index.js\");\n/* harmony import */ var _atlaskit_textfield__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @atlaskit/textfield */ \"./node_modules/@atlaskit/textfield/dist/esm/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ \"./src/Containers/Login/Form/styles.tsx\");\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Title = antd_lib_typography__WEBPACK_IMPORTED_MODULE_9___default.a.Title;\n\nvar errorNotification = function errorNotification(m) {\n  antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error({\n    duration: 6,\n    content: m,\n    style: {\n      marginTop: '80px'\n    }\n  });\n};\n\nvar successNotification = function successNotification(m) {\n  antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.success({\n    duration: 6,\n    content: m,\n    style: {\n      marginTop: '80px'\n    }\n  });\n}; // eslint-disable-next-line import/no-anonymous-default-export\n\n\nvar _default = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_default, _Component);\n\n  var _super = _createSuper(_default);\n\n  function _default(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, _default);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleSubmit\", function () {\n      var email = _this.state.email;\n\n      if (!Object(_core_validations_email__WEBPACK_IMPORTED_MODULE_11__[\"ValidateEmail\"])(email)) {\n        _this.setState({\n          valid: false\n        });\n\n        return;\n      }\n\n      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(\"\".concat(Object(_core_config__WEBPACK_IMPORTED_MODULE_13__[\"default\"])('ServiceURI'), \"/login\"), {\n        Email: email\n      }).then(function (res) {\n        var status = res.status,\n            data = res.data;\n\n        if (data !== undefined && status === 200) {\n          successNotification(\"A login link has been successfully sent on the email address \".concat(email, \". Please click on the link to proceed. \"));\n\n          _this.setState({\n            email: ''\n          });\n        } else {\n          errorNotification(data.Error);\n        }\n      })[\"catch\"](function (error) {\n        var response = error.response;\n\n        if (response !== undefined && response.data !== undefined) {\n          errorNotification(response.data.Error);\n        } else {\n          errorNotification('Something went wrong, please try again');\n        }\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"onChange\", function (e) {\n      var value = e.target.value;\n\n      if (!Object(_core_validations_email__WEBPACK_IMPORTED_MODULE_11__[\"ValidateEmail\"])(value)) {\n        _this.setState({\n          valid: false\n        });\n      } else {\n        _this.setState({\n          valid: true\n        });\n      }\n\n      _this.setState({\n        email: value\n      });\n    });\n\n    _this.state = {\n      email: '',\n      valid: true\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_default, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          email = _this$state.email,\n          valid = _this$state.valid;\n      return __jsx(_styles__WEBPACK_IMPORTED_MODULE_18__[\"Root\"], null, __jsx(_atlaskit_form__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n        onSubmit: this.handleSubmit\n      }, function (_ref) {\n        var formProps = _ref.formProps;\n        return __jsx(\"form\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, formProps, {\n          name: \"validation-example\"\n        }), __jsx(_atlaskit_form__WEBPACK_IMPORTED_MODULE_16__[\"Field\"], {\n          label: \"Work Email\",\n          isRequired: true,\n          name: \"work-email\",\n          defaultValue: \"\"\n        }, function (_ref2) {\n          var fieldProps = _ref2.fieldProps;\n          return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(_atlaskit_textfield__WEBPACK_IMPORTED_MODULE_17__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, fieldProps, {\n            value: email,\n            onChange: _this2.onChange\n          })), !valid && __jsx(_atlaskit_form__WEBPACK_IMPORTED_MODULE_16__[\"ErrorMessage\"], null, \"Incorrect email address\"));\n        }), __jsx(_atlaskit_form__WEBPACK_IMPORTED_MODULE_16__[\"FormFooter\"], null, __jsx(_atlaskit_button__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n          style: {\n            height: '40px'\n          },\n          shouldFitContainer: true,\n          type: \"submit\",\n          appearance: \"primary\"\n        }, \"Login\")));\n      }), __jsx(Title, {\n        level: 5,\n        style: {\n          marginTop: '20px',\n          fontWeight: 500,\n          textAlign: 'center'\n        }\n      }, \"Don't have an account?\", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {\n        href: \"/signup\"\n      }, __jsx(\"a\", {\n        href: \"/signup\"\n      }, \"Register\"))));\n    }\n  }]);\n\n  return _default;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29udGFpbmVycy9Mb2dpbi9Gb3JtL2luZGV4LnRzeD81MWY4Il0sIm5hbWVzIjpbIlRpdGxlIiwiVHlwb2dyYXBoeSIsImVycm9yTm90aWZpY2F0aW9uIiwibSIsIm1lc3NhZ2UiLCJlcnJvciIsImR1cmF0aW9uIiwiY29udGVudCIsInN0eWxlIiwibWFyZ2luVG9wIiwic3VjY2Vzc05vdGlmaWNhdGlvbiIsInN1Y2Nlc3MiLCJwcm9wcyIsImVtYWlsIiwic3RhdGUiLCJWYWxpZGF0ZUVtYWlsIiwic2V0U3RhdGUiLCJ2YWxpZCIsImF4aW9zIiwicG9zdCIsImNvbmZpZyIsIkVtYWlsIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImRhdGEiLCJ1bmRlZmluZWQiLCJFcnJvciIsInJlc3BvbnNlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwiZm9ybVByb3BzIiwiZmllbGRQcm9wcyIsIm9uQ2hhbmdlIiwiaGVpZ2h0IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7SUFFUUEsSyxHQUFVQywwRCxDQUFWRCxLOztBQVlSLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFxQjtBQUM3Q0MsMERBQU8sQ0FBQ0MsS0FBUixDQUFjO0FBQ1pDLFlBQVEsRUFBRSxDQURFO0FBRVpDLFdBQU8sRUFBRUosQ0FGRztBQUdaSyxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFO0FBRE47QUFISyxHQUFkO0FBT0QsQ0FSRDs7QUFVQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNQLENBQUQsRUFBYTtBQUN2Q0MsMERBQU8sQ0FBQ08sT0FBUixDQUFnQjtBQUNk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QUFFRSxpQkFBSyxFQUFFckIsS0FGVDtBQUdFLG9CQUFRLEVBQUUsTUFBSSxDQUFDc0I7QUFIakIsYUFERixFQU1HLENBQUNsQixLQUFELElBQ0MsTUFBQyw0REFBRCxrQ0FQSixDQUREO0FBQUEsU0FOSCxDQURGLEVBb0JFLE1BQUMsMERBQUQsUUFDRSxNQUFDLHlEQUFEO0FBQ0UsZUFBSyxFQUFFO0FBQUVtQixrQkFBTSxFQUFFO0FBQVYsV0FEVDtBQUVFLDRCQUFrQixNQUZwQjtBQUdFLGNBQUksRUFBQyxRQUhQO0FBSUUsb0JBQVUsRUFBQztBQUpiLG1CQURGLENBcEJGLENBREQ7QUFBQSxPQURILENBREYsRUFvQ0UsTUFBQyxLQUFEO0FBQ0UsYUFBSyxFQUFFLENBRFQ7QUFFRSxhQUFLLEVBQUU7QUFDTDNCLG1CQUFTLEVBQUUsTUFETjtBQUVMNEIsb0JBQVUsRUFBRSxHQUZQO0FBR0xDLG1CQUFTLEVBQUU7QUFITjtBQUZULG1DQVE4QixHQVI5QixFQVNFLE1BQUMsaURBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWCxTQUNFO0FBQUcsWUFBSSxFQUFDO0FBQVIsb0JBREYsQ0FURixDQXBDRixDQURGO0FBb0REOzs7O0VBNUcwQkMsK0MiLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9Mb2dpbi9Gb3JtL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdhbnRkL2xpYi90eXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgVmFsaWRhdGVFbWFpbCB9IGZyb20gJ0AvY29yZS92YWxpZGF0aW9ucy9lbWFpbCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAL2NvcmUvY29uZmlnJztcbmltcG9ydCBtZXNzYWdlIGZyb20gJ2FudGQvbGliL21lc3NhZ2UnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BhdGxhc2tpdC9idXR0b24nO1xuaW1wb3J0IEZvcm0sIHsgRXJyb3JNZXNzYWdlLCBGaWVsZCwgRm9ybUZvb3RlciB9IGZyb20gJ0BhdGxhc2tpdC9mb3JtJztcblxuaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAYXRsYXNraXQvdGV4dGZpZWxkJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlcjtcbiAgYXV0aGVudGljYXRlOiBhbnk7XG59O1xuXG50eXBlIFN0YXRlID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICB2YWxpZDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IGVycm9yTm90aWZpY2F0aW9uID0gKG06IHN0cmluZyk6IHZvaWQgPT4ge1xuICBtZXNzYWdlLmVycm9yKHtcbiAgICBkdXJhdGlvbjogNixcbiAgICBjb250ZW50OiBtLFxuICAgIHN0eWxlOiB7XG4gICAgICBtYXJnaW5Ub3A6ICc4MHB4JyxcbiAgICB9LFxuICB9KTtcbn07XG5cbmNvbnN0IHN1Y2Nlc3NOb3RpZmljYXRpb24gPSAobSk6IHZvaWQgPT4ge1xuICBtZXNzYWdlLnN1Y2Nlc3Moe1xuICAgIGR1cmF0aW9uOiA2LFxuICAgIGNvbnRlbnQ6IG0sXG4gICAgc3R5bGU6IHtcbiAgICAgIG1hcmdpblRvcDogJzgwcHgnLFxuICAgIH0sXG4gIH0pO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgdmFsaWQ6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IGVtYWlsIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghVmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZDogZmFsc2UgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke2NvbmZpZygnU2VydmljZVVSSScpfS9sb2dpbmAsIHtcbiAgICAgICAgRW1haWw6IGVtYWlsLFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXM7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBzdWNjZXNzTm90aWZpY2F0aW9uKFxuICAgICAgICAgICAgYEEgbG9naW4gbGluayBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc2VudCBvbiB0aGUgZW1haWwgYWRkcmVzcyAke2VtYWlsfS4gUGxlYXNlIGNsaWNrIG9uIHRoZSBsaW5rIHRvIHByb2NlZWQuIGAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6ICcnIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVycm9yTm90aWZpY2F0aW9uKGRhdGEuRXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3I7XG4gICAgICAgIGlmIChyZXNwb25zZSAhPT0gdW5kZWZpbmVkICYmIHJlc3BvbnNlLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVycm9yTm90aWZpY2F0aW9uKHJlc3BvbnNlLmRhdGEuRXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVycm9yTm90aWZpY2F0aW9uKCdTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpbicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICBvbkNoYW5nZSA9IChlOiB7IHRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKCFWYWxpZGF0ZUVtYWlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZW1haWw6IHZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpOiBhbnkge1xuICAgIGNvbnN0IHsgZW1haWwsIHZhbGlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8c3R5bGVzLlJvb3Q+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgeyh7IGZvcm1Qcm9wcyB9KSA9PiAoXG4gICAgICAgICAgICA8Zm9ybSB7Li4uZm9ybVByb3BzfSBuYW1lPVwidmFsaWRhdGlvbi1leGFtcGxlXCI+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV29yayBFbWFpbFwiXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ3b3JrLWVtYWlsXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyh7IGZpZWxkUHJvcHMgfTogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7IXZhbGlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlPkluY29ycmVjdCBlbWFpbCBhZGRyZXNzPC9FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8Rm9ybUZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc0MHB4JyB9fVxuICAgICAgICAgICAgICAgICAgc2hvdWxkRml0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm1Gb290ZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICBsZXZlbD17NX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBEb24mYXBvczt0IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL3NpZ251cFwiPlJlZ2lzdGVyPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgIDwvc3R5bGVzLlJvb3Q+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Containers/Login/Form/index.tsx\n");

/***/ })

})