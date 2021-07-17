module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "6UH/":
/***/ (function(module, exports) {

module.exports = {
	"ant-modal": "ant-modal___3jpmn",
	"ant-image-preview": "ant-image-preview___2XDWj",
	"zoom-enter": "zoom-enter___24E8j",
	"zoom-appear": "zoom-appear___2yWIe",
	"ant-modal-mask": "ant-modal-mask___2JI6l",
	"ant-image-preview-mask": "ant-image-preview-mask___3ssDp",
	"ant-modal-mask-hidden": "ant-modal-mask-hidden___2tudE",
	"ant-image-preview-mask-hidden": "ant-image-preview-mask-hidden___1mHPv",
	"ant-modal-wrap": "ant-modal-wrap___3q7Dc",
	"ant-image-preview-wrap": "ant-image-preview-wrap___31oCD",
	"ant-dropdown-menu-item": "ant-dropdown-menu-item___1rDkt",
	"ant-dropdown-menu-item-danger": "ant-dropdown-menu-item-danger___1Tgyq",
	"ant-dropdown": "ant-dropdown___ZXDZa",
	"ant-dropdown-wrap": "ant-dropdown-wrap___ndxRT",
	"ant-btn": "ant-btn___3fhHt",
	"anticon-down": "anticon-down___3B2H9",
	"ant-dropdown-wrap-open": "ant-dropdown-wrap-open___3Ct8P",
	"ant-dropdown-hidden": "ant-dropdown-hidden___39FoD",
	"ant-dropdown-menu-hidden": "ant-dropdown-menu-hidden___69_bk",
	"ant-dropdown-show-arrow": "ant-dropdown-show-arrow___2bGTf",
	"ant-dropdown-placement-topCenter": "ant-dropdown-placement-topCenter___-4K7r",
	"ant-dropdown-placement-topLeft": "ant-dropdown-placement-topLeft___37B8J",
	"ant-dropdown-placement-topRight": "ant-dropdown-placement-topRight___1fUAt",
	"ant-dropdown-placement-bottomCenter": "ant-dropdown-placement-bottomCenter___1wzbA",
	"ant-dropdown-placement-bottomLeft": "ant-dropdown-placement-bottomLeft___1Ti6-",
	"ant-dropdown-placement-bottomRight": "ant-dropdown-placement-bottomRight___b7Ghi",
	"ant-dropdown-arrow": "ant-dropdown-arrow___2b05E",
	"ant-dropdown-menu": "ant-dropdown-menu___2yOrZ",
	"ant-dropdown-menu-item-group-title": "ant-dropdown-menu-item-group-title___1O-0n",
	"ant-dropdown-menu-submenu-popup": "ant-dropdown-menu-submenu-popup___E80UL",
	"ant-dropdown-menu-submenu-title": "ant-dropdown-menu-submenu-title___33PrX",
	"anticon": "anticon___1538s",
	"ant-dropdown-menu-item-selected": "ant-dropdown-menu-item-selected___xmKKK",
	"ant-dropdown-menu-submenu-title-selected": "ant-dropdown-menu-submenu-title-selected___2Tc4k",
	"ant-dropdown-menu-item-disabled": "ant-dropdown-menu-item-disabled___3EY98",
	"ant-dropdown-menu-submenu-title-disabled": "ant-dropdown-menu-submenu-title-disabled___3wqnt",
	"ant-dropdown-menu-item-divider": "ant-dropdown-menu-item-divider___2DZN8",
	"ant-dropdown-menu-submenu-title-divider": "ant-dropdown-menu-submenu-title-divider___2tpyp",
	"ant-dropdown-menu-submenu-arrow": "ant-dropdown-menu-submenu-arrow___wo66Y",
	"ant-dropdown-menu-submenu-arrow-icon": "ant-dropdown-menu-submenu-arrow-icon___3vaaY",
	"ant-dropdown-menu-item-group-list": "ant-dropdown-menu-item-group-list____EJdY",
	"ant-dropdown-menu-submenu-vertical": "ant-dropdown-menu-submenu-vertical___2ZcgL",
	"ant-dropdown-menu-submenu": "ant-dropdown-menu-submenu___26zd4",
	"ant-dropdown-menu-submenu-disabled": "ant-dropdown-menu-submenu-disabled___179rx",
	"ant-dropdown-menu-submenu-selected": "ant-dropdown-menu-submenu-selected___1SVNc",
	"slide-down-enter": "slide-down-enter___cxz6C",
	"slide-down-enter-active": "slide-down-enter-active___2pQLz",
	"slide-down-appear": "slide-down-appear___zuLl7",
	"slide-down-appear-active": "slide-down-appear-active___1uFvI",
	"antSlideUpIn": "antSlideUpIn___1hfHR",
	"slide-up-enter": "slide-up-enter___1hcNi",
	"slide-up-enter-active": "slide-up-enter-active___1GZJ1",
	"slide-up-appear": "slide-up-appear___3kLB-",
	"slide-up-appear-active": "slide-up-appear-active___3EY-M",
	"antSlideDownIn": "antSlideDownIn___2jpY-",
	"slide-down-leave": "slide-down-leave___1V7sl",
	"slide-down-leave-active": "slide-down-leave-active___2J5Ep",
	"antSlideUpOut": "antSlideUpOut___10LTc",
	"slide-up-leave": "slide-up-leave___QssNg",
	"slide-up-leave-active": "slide-up-leave-active___1x0gd",
	"antSlideDownOut": "antSlideDownOut___2_3OQ",
	"ant-dropdown-trigger": "ant-dropdown-trigger___2xlYO",
	"ant-dropdown-link": "ant-dropdown-link___1D8Br",
	"ant-dropdown-button": "ant-dropdown-button___1G1Em",
	"ant-btn-group": "ant-btn-group___1qOrH",
	"ant-btn-icon-only": "ant-btn-icon-only___2UB1W",
	"ant-dropdown-menu-dark": "ant-dropdown-menu-dark___3Ddby",
	"ant-dropdown-rtl": "ant-dropdown-rtl___2p_mx",
	"ant-dropdown-menu-rtl": "ant-dropdown-menu-rtl___27LbP"
};

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "RE4Q":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "Rdar":
/***/ (function(module, exports) {

module.exports = {
	"ant-modal": "ant-modal___1W_ox",
	"ant-image-preview": "ant-image-preview___1DeeP",
	"zoom-enter": "zoom-enter___AU_qC",
	"zoom-appear": "zoom-appear___1ewa4",
	"ant-modal-mask": "ant-modal-mask___3NRQD",
	"ant-image-preview-mask": "ant-image-preview-mask___EWuu-",
	"ant-modal-mask-hidden": "ant-modal-mask-hidden___1lFNr",
	"ant-image-preview-mask-hidden": "ant-image-preview-mask-hidden___1RQn1",
	"ant-modal-wrap": "ant-modal-wrap___1aA_O",
	"ant-image-preview-wrap": "ant-image-preview-wrap___3x1Qm",
	"ant-btn": "ant-btn___3DBfg",
	"anticon": "anticon___2cXgh",
	"ant-btn-lg": "ant-btn-lg___1jQ3l",
	"ant-btn-sm": "ant-btn-sm___2KJ5Q",
	"ant-btn-primary": "ant-btn-primary___2g5r6",
	"ant-btn-group": "ant-btn-group___2ajIw",
	"ant-btn-ghost": "ant-btn-ghost___2KcQ6",
	"ant-btn-dashed": "ant-btn-dashed___3x-Pj",
	"ant-btn-danger": "ant-btn-danger___2SYjw",
	"ant-btn-link": "ant-btn-link___un3Kc",
	"ant-btn-text": "ant-btn-text___2nJ_1",
	"ant-btn-dangerous": "ant-btn-dangerous___3itLW",
	"ant-btn-icon-only": "ant-btn-icon-only___h3zIz",
	"ant-btn-round": "ant-btn-round___7LA5E",
	"ant-btn-circle": "ant-btn-circle___3HhqA",
	"ant-btn-circle-outline": "ant-btn-circle-outline___jsRn_",
	"anticon-plus": "anticon-plus___2yXAU",
	"anticon-minus": "anticon-minus___2vpx-",
	"ant-btn-loading": "ant-btn-loading___1Rt27",
	"ant-btn-loading-icon": "ant-btn-loading-icon___3yQpE",
	"ant-btn-group-lg": "ant-btn-group-lg___nIT2U",
	"ant-btn-group-sm": "ant-btn-group-sm___2rcjO",
	"ant-btn-rtl": "ant-btn-rtl___3IAo_",
	"ant-btn-group-rtl": "ant-btn-group-rtl___1Yd8e",
	"ant-btn-background-ghost": "ant-btn-background-ghost___1qIoy",
	"ant-btn-two-chinese-chars": "ant-btn-two-chinese-chars___201U-",
	"ant-btn-block": "ant-btn-block___2uArc"
};

/***/ }),

/***/ "Sw9l":
/***/ (function(module, exports) {



/***/ }),

/***/ "W85G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useIsAuthenticated; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AuthContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  isAuthenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuthenticated: () => {}
});
/**
 * The initial value of `isAuthenticated` comes from the `authenticated`
 * prop which gets set by _app. We store that value in state and ignore
 * the prop from then on. The value can be changed by calling the
 * `setAuthenticated()` method in the context.
 */

const AuthProvider = ({
  children,
  authenticated
}) => {
  const [isAuthenticated, setAuthenticated] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(authenticated);
  return __jsx(AuthContext.Provider, {
    value: {
      isAuthenticated,
      setAuthenticated
    }
  }, children);
};
function useAuth() {
  const context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
function useIsAuthenticated() {
  const context = useAuth();
  return context.isAuthenticated;
}

/***/ }),

/***/ "a8i8":
/***/ (function(module, exports) {

module.exports = {
	"ant-modal": "ant-modal___3fZM0",
	"ant-image-preview": "ant-image-preview___218t7",
	"zoom-enter": "zoom-enter___3zwCV",
	"zoom-appear": "zoom-appear___Qz1yL",
	"ant-modal-mask": "ant-modal-mask___1jC3V",
	"ant-image-preview-mask": "ant-image-preview-mask___1zp6e",
	"ant-modal-mask-hidden": "ant-modal-mask-hidden___1WaMs",
	"ant-image-preview-mask-hidden": "ant-image-preview-mask-hidden___3Bo78",
	"ant-modal-wrap": "ant-modal-wrap___1oAFb",
	"ant-image-preview-wrap": "ant-image-preview-wrap___7rMSL",
	"ant-divider": "ant-divider___15v61",
	"ant-divider-vertical": "ant-divider-vertical___3o4bd",
	"ant-divider-horizontal": "ant-divider-horizontal___1b5Lf",
	"ant-divider-with-text": "ant-divider-with-text___1QSYU",
	"ant-divider-with-text-left": "ant-divider-with-text-left___3mXfC",
	"ant-divider-with-text-right": "ant-divider-with-text-right___2pueA",
	"ant-divider-inner-text": "ant-divider-inner-text___3yIW8",
	"ant-divider-dashed": "ant-divider-dashed___Cfali",
	"ant-divider-plain": "ant-divider-plain___3Son2",
	"ant-divider-rtl": "ant-divider-rtl___1Fm2W"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dleZ":
/***/ (function(module, exports) {

module.exports = {
	"ant-modal": "ant-modal___3jIWa",
	"ant-image-preview": "ant-image-preview___DzNFa",
	"zoom-enter": "zoom-enter___1Y9Kv",
	"zoom-appear": "zoom-appear___3TuOL",
	"ant-modal-mask": "ant-modal-mask___3cw0d",
	"ant-image-preview-mask": "ant-image-preview-mask___3WLwJ",
	"ant-modal-mask-hidden": "ant-modal-mask-hidden___pw_zG",
	"ant-image-preview-mask-hidden": "ant-image-preview-mask-hidden___2RAx2",
	"ant-modal-wrap": "ant-modal-wrap____lKjy",
	"ant-image-preview-wrap": "ant-image-preview-wrap___2RSIA"
};

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__("RE4Q");
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);

// EXTERNAL MODULE: ./src/core/Theme/antd.less
var antd = __webpack_require__("Sw9l");

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.css
var style = __webpack_require__("Rdar");

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/index.css
var menu_style = __webpack_require__("vVUs");

// EXTERNAL MODULE: ./node_modules/antd/lib/dropdown/style/index.css
var dropdown_style = __webpack_require__("6UH/");

// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/index.css
var icon_style = __webpack_require__("dleZ");

// EXTERNAL MODULE: ./node_modules/antd/lib/divider/style/index.css
var divider_style = __webpack_require__("a8i8");

// CONCATENATED MODULE: ./src/core/Theme/base.tsx





// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/core/config/index.ts
var config = __webpack_require__("u61H");

// EXTERNAL MODULE: ./src/core/Components/Providers/AuthProvider.tsx
var AuthProvider = __webpack_require__("W85G");

// CONCATENATED MODULE: ./src/pages/_app.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const GlobalStyle = external_styled_components_["createGlobalStyle"]``;
const theme = {};

class _app_MyApp extends app_default.a {
  render() {
    const {
      Component,
      pageProps,
      authenticated
    } = this.props;
    return __jsx("div", null, __jsx(GlobalStyle, null), __jsx(external_styled_components_["ThemeProvider"], {
      theme: theme
    }, __jsx(AuthProvider["a" /* AuthProvider */], {
      authenticated: authenticated
    }, __jsx(Component, pageProps))));
  }

}

_app_MyApp.getInitialProps = async appContext => {
  let authenticated = false;
  const request = appContext.ctx.req;

  if (request) {
    const cookies = new external_universal_cookie_default.a(request.headers.cookie || '');
    request.cookies = cookies.getAll() || {}; // Make API Call to validate Token

    await external_axios_default.a.post(`${Object(config["a" /* default */])('ServiceURI')}/validate`, {
      Token: request.cookies.session
    }, {
      headers: {
        Authorization: `BEARER ${request.cookies.session}`
      }
    }).then(res => {
      const {
        status
      } = res;

      if (status === 200) {
        authenticated = true;
      }
    }).catch(err => {
      const {
        response
      } = err;
      authenticated = false;

      if (response !== undefined && response.status === 401) {
        cookies.remove('session', {
          path: '/'
        });
        request.cookies.session = undefined;
      }
    });
  } // Call the page's `getInitialProps` and fill `appProps.pageProps`


  const appProps = await app_default.a.getInitialProps(appContext);
  return _objectSpread(_objectSpread({}, appProps), {}, {
    authenticated
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "jdQR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Project Configuration.
 *
 * NOTE: All file/folder paths should be relative to the project root. The
 * absolute paths should be resolved during runtime by our build internal/server.
 */
const values = {
  ServiceURI: 'http://localhost:8001/recruiter-api/v1',
  Social: {
    Mobile: '+91-96637-99660',
    Email: 'yourfriends@jobbox.ai'
  },
  Product: {
    Name: 'jobbox.ai '
  },
  URLs: {
    RecruiterPortal: 'https://enterprise.jobbox.ai',
    ApplicationPortal: 'https://app.jobbox.ai',
    MainPortal: 'https://jobbox.ai'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (values);

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "u61H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable */

/**
 * Unified Configuration Reader
 *
 * This helper function allows you to use the same API in accessing configuration
 * values no matter where the code is being executed (i.e. browser/node).
 *
 * e.g.
 *   import config from '../config';
 *   config('welcomeMessage'); // => "Hello World!"
 */
// PRIVATES
let configCache;
/**
 * This resolves the correct configuration source based on the execution
 * environment.  For node we use the standard config file, however, for browsers
 * we need to access the configuration object that would have been bound to
 * the "window" by our "reactApplication" middleware.
 *
 * @return {Object} The executing environment configuration object.
 */

function resolveConfigForBrowserOrServer() {
  if (configCache) {
    return configCache;
  } // NOTE: By using the "process.env.BUILD_FLAG_IS_NODE" flag here this block of code
  // will be removed when "process.env.BUILD_FLAG_IS_NODE === true".
  // If no "BUILD_FLAG_IS_NODE" env var is undefined we can assume that we are running outside
  // of a webpack run, and will therefore return the config file.


  if (typeof process.env.BUILD_FLAG_IS_NODE === 'undefined' || process.env.BUILD_FLAG_IS_NODE === 'true') {
    // i.e. running in our server/node process.
    configCache = __webpack_require__("jdQR").default; // eslint-disable-line global-require

    return configCache;
  } // To get here we are likely running in the browser.


  if (false) {} else {
    // To get here we must be running in the browser.
    console.warn('No client configuration object was bound to the window.'); // eslint-disable-line no-console

    configCache = {};
  }

  return configCache;
} // EXPORT

/**
 * This function wraps up the boilerplate needed to access the correct
 * configuration depending on whether your code will get executed in the
 * browser/node.
 *
 * i.e.
 *  - For the browser the config values are available at window.__CLIENT_CONFIG__
 *  - For a node process they are within the "<root>/config".
 *
 * To request a configuration value you must provide the repective path. For
 * example, f you had the following configuration structure:
 *   {
 *     foo: {
 *       bar: [1, 2, 3]
 *     },
 *     bob: 'bob'
 *   }
 *
 * You could use this function to access "bar" like so:
 *   import config from '../config';
 *   const value = config('foo.bar');
 *
 * And you could access "bob" like so:
 *   import config from '../config';
 *   const value = config('bob');
 *
 * If any part of the path isn't available as a configuration key/value then
 * an error will be thrown indicating that a respective configuration value
 * could not be found at the given path.
 */


function Get(path) {
  const parts = typeof path === 'string' ? path.split('.') : path;

  if (parts.length === 0) {
    throw new Error('You must provide the path to the configuration value you would like to consume.');
  }

  let result = resolveConfigForBrowserOrServer();

  for (let i = 0; i < parts.length; i += 1) {
    if (result === undefined) {
      const errorMessage = `Failed to resolve configuration value at "${parts.join('.')}".`; // This "if" block gets stripped away by webpack for production builds.

      if (process.env.BUILD_FLAG_IS_DEV === 'true' && process.env.BUILD_FLAG_IS_CLIENT === 'true') {
        throw new Error(`${errorMessage} We have noticed that you are trying to access this configuration value from the client bundle (i.e. code that will be executed in a browser). For configuration values to be exposed to the client bundle you must ensure that the path is added to the client configuration filter in the project configuration values file.`);
      }

      throw new Error(errorMessage);
    }

    result = result[parts[i]];
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (Get);

/***/ }),

/***/ "vVUs":
/***/ (function(module, exports) {

module.exports = {
	"ant-modal": "ant-modal___1SsTe",
	"ant-image-preview": "ant-image-preview___3FFQh",
	"zoom-enter": "zoom-enter___mD7wF",
	"zoom-appear": "zoom-appear___3CDTB",
	"ant-modal-mask": "ant-modal-mask___80NXC",
	"ant-image-preview-mask": "ant-image-preview-mask___1DY1R",
	"ant-modal-mask-hidden": "ant-modal-mask-hidden___3d8pG",
	"ant-image-preview-mask-hidden": "ant-image-preview-mask-hidden___39KAI",
	"ant-modal-wrap": "ant-modal-wrap___26d33",
	"ant-image-preview-wrap": "ant-image-preview-wrap___3Na8R",
	"ant-menu-item-danger": "ant-menu-item-danger___1n3zJ",
	"ant-menu-item": "ant-menu-item___3QXj1",
	"ant-menu-item-active": "ant-menu-item-active___1cA8a",
	"ant-menu-item-selected": "ant-menu-item-selected___3rrjd",
	"ant-menu": "ant-menu___2RRq1",
	"ant-menu-horizontal": "ant-menu-horizontal___1PjKY",
	"ant-menu-inline": "ant-menu-inline___26haT",
	"ant-menu-dark": "ant-menu-dark___3pylD",
	"ant-menu-hidden": "ant-menu-hidden___pQNWs",
	"ant-menu-item-group-title": "ant-menu-item-group-title___14gmE",
	"ant-menu-submenu": "ant-menu-submenu___fwyZN",
	"ant-menu-submenu-inline": "ant-menu-submenu-inline___3etQl",
	"ant-menu-submenu-selected": "ant-menu-submenu-selected___28LAr",
	"ant-menu-submenu-title": "ant-menu-submenu-title___3bb8b",
	"ant-menu-sub": "ant-menu-sub___2PehX",
	"ant-badge": "ant-badge___1poPT",
	"ant-menu-item-divider": "ant-menu-item-divider___35LIF",
	"ant-menu-submenu-open": "ant-menu-submenu-open___2uvo4",
	"ant-menu-submenu-active": "ant-menu-submenu-active___3IrtK",
	"ant-menu-vertical": "ant-menu-vertical___2vteJ",
	"ant-menu-vertical-left": "ant-menu-vertical-left___1HIY3",
	"ant-menu-vertical-right": "ant-menu-vertical-right___NcMH4",
	"zoom-big-enter-active": "zoom-big-enter-active___3ydjW",
	"zoom-big-leave-active": "zoom-big-leave-active___1QMTW",
	"anticon": "anticon___18l77",
	"ant-menu-item-only-child": "ant-menu-item-only-child___3u3Zy",
	"ant-menu-submenu-popup": "ant-menu-submenu-popup___2H23F",
	"ant-menu-submenu-placement-rightTop": "ant-menu-submenu-placement-rightTop___10PzK",
	"ant-menu-submenu-vertical": "ant-menu-submenu-vertical___33zk3",
	"ant-menu-submenu-arrow": "ant-menu-submenu-arrow___3o3Kb",
	"ant-menu-submenu-vertical-left": "ant-menu-submenu-vertical-left___1rXnB",
	"ant-menu-submenu-vertical-right": "ant-menu-submenu-vertical-right___1uO-J",
	"ant-menu-item-open": "ant-menu-item-open___2JoEf",
	"ant-menu-selected": "ant-menu-selected___2SCYD",
	"ant-menu-inline-collapsed": "ant-menu-inline-collapsed___2ngf4",
	"ant-menu-item-group": "ant-menu-item-group___273lT",
	"ant-menu-item-group-list": "ant-menu-item-group-list___25t6e",
	"ant-menu-inline-collapsed-tooltip": "ant-menu-inline-collapsed-tooltip___19kA4",
	"ant-menu-root": "ant-menu-root___2KVrJ",
	"ant-menu-inline-collapsed-noicon": "ant-menu-inline-collapsed-noicon___1sZMW",
	"ant-menu-item-disabled": "ant-menu-item-disabled___skeSW",
	"ant-menu-submenu-disabled": "ant-menu-submenu-disabled___1i4xa",
	"ant-layout-header": "ant-layout-header___3dgLd",
	"ant-menu-rtl": "ant-menu-rtl___2n7fm"
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });