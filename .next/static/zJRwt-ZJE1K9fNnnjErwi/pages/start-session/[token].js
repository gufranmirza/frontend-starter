(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9ONQ":function(n,t,i){"use strict";var e=i("uJQa");function r(n,t){void 0===t&&(t={});var i=function(n){if(n&&"j"===n[0]&&":"===n[1])return n.substr(2);return n}(n);if(function(n,t){return"undefined"===typeof t&&(t=!n||"{"!==n[0]&&"["!==n[0]&&'"'!==n[0]),!t}(i,t.doNotParse))try{return JSON.parse(i)}catch(e){}return n}var o=function(){return(o=Object.assign||function(n){for(var t,i=1,e=arguments.length;i<e;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},a=function(){function n(n,t){var i=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(n,t){return"string"===typeof n?e.parse(n,t):"object"===typeof n&&null!==n?n:{}}(n,t),new Promise((function(){i.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return n.prototype._updateBrowserValues=function(n){this.HAS_DOCUMENT_COOKIE&&(this.cookies=e.parse(document.cookie,n))},n.prototype._emitChange=function(n){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](n)},n.prototype.get=function(n,t,i){return void 0===t&&(t={}),this._updateBrowserValues(i),r(this.cookies[n],t)},n.prototype.getAll=function(n,t){void 0===n&&(n={}),this._updateBrowserValues(t);var i={};for(var e in this.cookies)i[e]=r(this.cookies[e],n);return i},n.prototype.set=function(n,t,i){var r;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=o(o({},this.cookies),((r={})[n]=t,r)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=e.serialize(n,t,i)),this._emitChange({name:n,value:t,options:i})},n.prototype.remove=function(n,t){var i=t=o(o({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=o({},this.cookies),delete this.cookies[n],this.HAS_DOCUMENT_COOKIE&&(document.cookie=e.serialize(n,"",i)),this._emitChange({name:n,value:void 0,options:t})},n.prototype.addChangeListener=function(n){this.changeListeners.push(n)},n.prototype.removeChangeListener=function(n){var t=this.changeListeners.indexOf(n);t>=0&&this.changeListeners.splice(t,1)},n}();t.a=a},kpAk:function(n,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/start-session/[token]",function(){return i("mIXk")}])},mIXk:function(n,t,i){"use strict";i.r(t);var e=i("q1tI"),r=i.n(e),o=i("8Kt/"),a=i.n(o),c=i("dYCX"),s=i("1OyB"),u=i("vuIU"),d=i("Ji7U"),l=i("md7G"),f=i("foSv"),p=i("wjk1"),h=i("lbd2"),m=i.n(h),v=i("vOnD");function y(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function x(){var n=y(["\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: ",";\n  height: ",";\n  margin: 6px;\n  border: 6px solid ",";\n  border-radius: 50%;\n  animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: "," transparent transparent transparent;\n\n  :nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  :nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  :nth-child(3) {\n    animation-delay: -0.15s;\n  }\n"]);return x=function(){return n},n}function b(){var n=y(["\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n"]);return b=function(){return n},n}function g(){var n=y(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return g=function(){return n},n}v.default.div(b()),v.default.div(x(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return Object(v.keyframes)(g())}),(function(n){return n.color}));function z(){var n=y(["\n  display: inline-block;\n  width: ",";\n  height: ",";\n  :after {\n    content: ' ';\n    display: block;\n    width: ",";\n    height: ",";\n    margin: 1px;\n    border-radius: 50%;\n    border: 5px solid ",";\n    border-color: "," transparent "," transparent;\n    animation: "," 1.2s linear infinite;\n  }\n"]);return z=function(){return n},n}function k(){var n=y(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return k=function(){return n},n}v.default.div(z(),(function(n){return"".concat(n.width).concat(n.sizeUnit)}),(function(n){return"".concat(n.height).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return Object(v.keyframes)(k())}));function w(){var n=y(["\n  display: inline-block;\n  width: ",";\n  height: ",";\n  margin: 6px;\n  border-radius: 50%;\n  background: ",";\n  animation: "," 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n"]);return w=function(){return n},n}function O(){var n=y(["\n  display: inline-block;\n  transform: translateZ(1px);\n"]);return O=function(){return n},n}function U(){var n=y(["\n  0%,\n  100% {\n    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\n  }\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(1800deg);\n    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\n  }\n  100% {\n    transform: rotateY(3600deg);\n  }\n"]);return U=function(){return n},n}v.default.div(O()),v.default.div(w(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return Object(v.keyframes)(U())}));function j(){var n=y(["\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  transform: rotate(45deg);\n  transform-origin: 32px 32px;\n\n  div {\n    top: 23px;\n    left: 19px;\n    position: absolute;\n    width: ",";\n    height: ",";\n    background: ",";\n    animation: "," 1.2s infinite\n      cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  div:after,\n  div:before {\n    content: ' ';\n    position: absolute;\n    display: block;\n    width: ",";\n    height: ",";\n    background: ",";\n  }\n  div:before {\n    left: -26px;\n    width: ",";\n    border-radius: 50% 0 0 50%;\n  }\n  div:after {\n    top: -26px;\n    height: ",";\n    border-radius: 50% 50% 0 0;\n  }\n"]);return j=function(){return n},n}function S(){var n=y(["\n  0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n"]);return S=function(){return n},n}v.default.div(j(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return Object(v.keyframes)(S())}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return"".concat(1.3*n.size).concat(n.sizeUnit)}),(function(n){return"".concat(1.3*n.size).concat(n.sizeUnit)}));function _(){var n=y(["\n  display: inline-block;\n  position: relative;\n  width: ",";\n  height: ",";\n\n  div {\n    animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    transform-origin: 32px 32px;\n  }\n  div:after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: ",";\n    margin: -3px 0 0 -3px;\n  }\n  div:nth-child(1) {\n    animation-delay: -0.036s;\n  }\n  div:nth-child(1):after {\n    top: 50px;\n    left: 50px;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.072s;\n  }\n  div:nth-child(2):after {\n    top: 54px;\n    left: 45px;\n  }\n  div:nth-child(3) {\n    animation-delay: -0.108s;\n  }\n\n  div:nth-child(3):after {\n    top: 57px;\n    left: 39px;\n  }\n\n  div:nth-child(4) {\n    animation-delay: -0.144s;\n  }\n\n  div:nth-child(4):after {\n    top: 58px;\n    left: 32px;\n  }\n  div:nth-child(5) {\n    animation-delay: -0.18s;\n  }\n  div:nth-child(5):after {\n    top: 57px;\n    left: 25px;\n  }\n  div:nth-child(6) {\n    animation-delay: -0.216s;\n  }\n  div:nth-child(6):after {\n    top: 54px;\n    left: 19px;\n  }\n  div:nth-child(7) {\n    animation-delay: -0.252s;\n  }\n  div:nth-child(7):after {\n    top: 50px;\n    left: 14px;\n  }\n  div:nth-child(8) {\n    animation-delay: -0.288s;\n  }\n  div:nth-child(8):after {\n    top: 45px;\n    left: 10px;\n  }\n"]);return _=function(){return n},n}function C(){var n=y(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return C=function(){return n},n}v.default.div(_(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return Object(v.keyframes)(C())}),(function(n){return n.color}));function E(){var n=y(["\n  display: inline-block;\n  position: relative;\n  width: ",";\n  height: ",";\n\n  div {\n    position: absolute;\n    width: 5px;\n    height: 5px;\n    background: ",";\n    border-radius: 50%;\n    animation: "," 1.2s linear infinite;\n  }\n\n  div:nth-child(1) {\n    animation-delay: 0s;\n    top: 29px;\n    left: 53px;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.1s;\n    top: 18px;\n    left: 50px;\n  }\n  div:nth-child(3) {\n    animation-delay: -0.2s;\n    top: 9px;\n    left: 41px;\n  }\n  div:nth-child(4) {\n    animation-delay: -0.3s;\n    top: 6px;\n    left: 29px;\n  }\n  div:nth-child(5) {\n    animation-delay: -0.4s;\n    top: 9px;\n    left: 18px;\n  }\n  div:nth-child(6) {\n    animation-delay: -0.5s;\n    top: 18px;\n    left: 9px;\n  }\n  div:nth-child(7) {\n    animation-delay: -0.6s;\n    top: 29px;\n    left: 6px;\n  }\n  div:nth-child(8) {\n    animation-delay: -0.7s;\n    top: 41px;\n    left: 9px;\n  }\n  div:nth-child(9) {\n    animation-delay: -0.8s;\n    top: 50px;\n    left: 18px;\n  }\n  div:nth-child(10) {\n    animation-delay: -0.9s;\n    top: 53px;\n    left: 29px;\n  }\n  div:nth-child(11) {\n    animation-delay: -1s;\n    top: 50px;\n    left: 41px;\n  }\n  div:nth-child(12) {\n    animation-delay: -1.1s;\n    top: 41px;\n    left: 50px;\n  }\n"]);return E=function(){return n},n}function T(){var n=y(["\n  0%, 20%, 80%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n"]);return T=function(){return n},n}v.default.div(E(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return Object(v.keyframes)(T())}));function N(){var n=y(["\n  display: inline-block;\n  position: relative;\n  width: ",";\n  height: ",";\n\n  div {\n    position: absolute;\n    top: 27px;\n    width: 11px;\n    height: 11px;\n    border-radius: 50%;\n    background: ",";\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n\n  div:nth-child(1) {\n    left: 6px;\n    animation: "," 0.6s infinite;\n  }\n  div:nth-child(2) {\n    left: 6px;\n    animation: "," 0.6s infinite;\n  }\n  div:nth-child(3) {\n    left: 26px;\n    animation: "," 0.6s infinite;\n  }\n  div:nth-child(4) {\n    left: 45px;\n    animation: "," 0.6s infinite;\n  }\n"]);return N=function(){return n},n}function I(){var n=y(["\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n"]);return I=function(){return n},n}function A(){var n=y(["\n   0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(19px, 0);\n  }\n"]);return A=function(){return n},n}function D(){var n=y(["\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]);return D=function(){return n},n}var P=function(n){return Object(v.keyframes)(A())};v.default.div(N(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return Object(v.keyframes)(D())}),(function(n){return P()}),(function(n){return P()}),(function(n){return Object(v.keyframes)(I())}));function L(){var n=y(["\n  display: inline-block;\n  position: relative;\n  width: ",";\n  height: ",";\n\n  div {\n    position: absolute;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: ",";\n    animation: "," 1.2s linear infinite;\n  }\n\n  div:nth-child(1) {\n    top: 6px;\n    left: 6px;\n    animation-delay: 0s;\n  }\n  div:nth-child(2) {\n    top: 6px;\n    left: 26px;\n    animation-delay: -0.4s;\n  }\n  div:nth-child(3) {\n    top: 6px;\n    left: 45px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(4) {\n    top: 26px;\n    left: 6px;\n    animation-delay: -0.4s;\n  }\n  div:nth-child(5) {\n    top: 26px;\n    left: 26px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(6) {\n    top: 26px;\n    left: 45px;\n    animation-delay: -1.2s;\n  }\n  div:nth-child(7) {\n    top: 45px;\n    left: 6px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(8) {\n    top: 45px;\n    left: 26px;\n    animation-delay: -1.2s;\n  }\n  div:nth-child(9) {\n    top: 45px;\n    left: 45px;\n    animation-delay: -1.6s;\n  }\n"]);return L=function(){return n},n}function R(){var n=y(["\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n"]);return R=function(){return n},n}v.default.div(L(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return Object(v.keyframes)(R())}));function H(){var n=y(["\n  display: inline-block;\n  position: relative;\n  width: ",";\n  height: ",";\n\n  &:after {\n    content: ' ';\n    display: block;\n    border-radius: 50%;\n    width: 0;\n    height: 0;\n    margin: 6px;\n    box-sizing: border-box;\n    border: 26px solid ",";\n    border-color: "," transparent "," transparent;\n    animation: "," 1.2s infinite;\n  }\n"]);return H=function(){return n},n}function M(){var n=y(["\n  0% {\n    transform: rotate(0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    transform: rotate(900deg);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n"]);return M=function(){return n},n}v.default.div(H(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return Object(v.keyframes)(M())}));function J(){var n=y(["\n  display: inline-block;\n  position: relative;\n  width: ",";\n  height: ",";\n\n  div {\n    position: absolute;\n    border: 4px solid ",";\n    opacity: 1;\n    border-radius: 50%;\n    animation: "," 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n\n  div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n"]);return J=function(){return n},n}function B(){var n=y(["\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n"]);return B=function(){return n},n}var q=v.default.div(J(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return n.color}),(function(n){return Object(v.keyframes)(B())})),K=function(n){var t=n.color,i=n.size,e=n.sizeUnit;return r.a.createElement(q,{color:t,size:i,sizeUnit:e},r.a.createElement("div",null),r.a.createElement("div",null))};function Q(){var n=y(["\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: ",";\n  height: ",";\n\n  div {\n    transform-origin: 32px 32px;\n    animation: "," 1.2s linear infinite;\n  }\n\n  div:after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    top: 3px;\n    left: 29px;\n    width: 5px;\n    height: 14px;\n    border-radius: 20%;\n    background: ",";\n  }\n  div:nth-child(1) {\n    transform: rotate(0deg);\n    animation-delay: -1.1s;\n  }\n  div:nth-child(2) {\n    transform: rotate(30deg);\n    animation-delay: -1s;\n  }\n  div:nth-child(3) {\n    transform: rotate(60deg);\n    animation-delay: -0.9s;\n  }\n  div:nth-child(4) {\n    transform: rotate(90deg);\n    animation-delay: -0.8s;\n  }\n  div:nth-child(5) {\n    transform: rotate(120deg);\n    animation-delay: -0.7s;\n  }\n  div:nth-child(6) {\n    transform: rotate(150deg);\n    animation-delay: -0.6s;\n  }\n  div:nth-child(7) {\n    transform: rotate(180deg);\n    animation-delay: -0.5s;\n  }\n  div:nth-child(8) {\n    transform: rotate(210deg);\n    animation-delay: -0.4s;\n  }\n  div:nth-child(9) {\n    transform: rotate(240deg);\n    animation-delay: -0.3s;\n  }\n  div:nth-child(10) {\n    transform: rotate(270deg);\n    animation-delay: -0.2s;\n  }\n  div:nth-child(11) {\n    transform: rotate(300deg);\n    animation-delay: -0.1s;\n  }\n  div:nth-child(12) {\n    transform: rotate(330deg);\n    animation-delay: 0s;\n  }\n"]);return Q=function(){return n},n}function X(){var n=y(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]);return X=function(){return n},n}K.defaultProps={size:64,color:"#00bfff",sizeUnit:"px"};v.default.div(Q(),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return"".concat(n.size).concat(n.sizeUnit)}),(function(n){return Object(v.keyframes)(X())}),(function(n){return n.color}));var Y=i("Zhn9"),W=i("u61H"),V=i("9ONQ"),G=i("QpBz"),Z=i.n(G),F=i("vDqi"),$=i.n(F),nn=v.default.div.withConfig({displayName:"styles__Root",componentId:"sc-1y22bnt-0"})(["padding:",";padding-top:70px;height:calc(100vh - 70px);"],p.a),tn=Object(v.default)(Y.a).withConfig({displayName:"styles__Container",componentId:"sc-1y22bnt-1"})(["display:flex;align-items:center;justify-content:center;height:calc(100vh - 300px);flex-direction:column;"]),en=v.default.div.withConfig({displayName:"styles__Info",componentId:"sc-1y22bnt-2"})(["background:",";padding:",";"],p.h,p.a),rn=r.a.createElement;function on(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var i,e=Object(f.a)(n);if(t){var r=Object(f.a)(this).constructor;i=Reflect.construct(e,arguments,r)}else i=e.apply(this,arguments);return Object(l.a)(this,i)}}var an=m.a.Title,cn=function(){Z.a.error({duration:4,content:"We could not authenticate your login request. Please try again with new login link",style:{marginTop:"100px"}})},sn=function(n){Object(d.a)(i,n);var t=on(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(u.a)(i,[{key:"componentDidMount",value:function(){var n=this.props,t=n.token,i=n.router,e=n.authenticate,r=new V.a;$.a.post("".concat(Object(W.a)("ServiceURI"),"/authenticate"),{Token:t}).then((function(n){var t=n.status,o=n.data;void 0!==o&&200===t?(r.set("session",o.AccessToken,{path:"/"}),e(!0),i.push("/")):(e(!1),cn(),setTimeout((function(){i.push("/login")}),4e3))})).catch((function(){e(!1),cn(),setTimeout((function(){i.push("/login")}),4e3)}))}},{key:"render",value:function(){return rn("div",null,rn(nn,null,rn(tn,null,rn(K,{color:p.d})," ",rn("br",null),rn(m.a.Paragraph,null," ","We are securely logging you in, please wait ..."))),rn(en,null,rn(an,{level:5,style:{fontWeight:"normal",color:p.i,margin:0,textAlign:"center",paddingTop:"25px",paddingBottom:"25px"}},rn(Y.a,null,"You will be redirected to the requested webpage after authentication is completed"))))}}]),i}(r.a.Component),un=i("kMIw"),dn=i("nOHt"),ln=i("W85G"),fn=i("qzeI"),pn=r.a.createElement;t.default=Object(fn.a)((function(){var n=Object(dn.useRouter)(),t=n.query.token,i=Object(ln.b)().setAuthenticated;return pn("div",{className:"container"},pn(a.a,null,pn("title",null,"Post Jobs, Hire Best Candidate")),pn(c.a,null),pn(sn,{token:String(t),router:n,authenticate:i}),pn(un.a,null))}))},uJQa:function(n,t,i){"use strict";t.parse=function(n,t){if("string"!==typeof n)throw new TypeError("argument str must be a string");for(var i={},r=t||{},a=n.split(o),s=r.decode||e,u=0;u<a.length;u++){var d=a[u],l=d.indexOf("=");if(!(l<0)){var f=d.substr(0,l).trim(),p=d.substr(++l,d.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),void 0==i[f]&&(i[f]=c(p,s))}}return i},t.serialize=function(n,t,i){var e=i||{},o=e.encode||r;if("function"!==typeof o)throw new TypeError("option encode is invalid");if(!a.test(n))throw new TypeError("argument name is invalid");var c=o(t);if(c&&!a.test(c))throw new TypeError("argument val is invalid");var s=n+"="+c;if(null!=e.maxAge){var u=e.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(u)}if(e.domain){if(!a.test(e.domain))throw new TypeError("option domain is invalid");s+="; Domain="+e.domain}if(e.path){if(!a.test(e.path))throw new TypeError("option path is invalid");s+="; Path="+e.path}if(e.expires){if("function"!==typeof e.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+e.expires.toUTCString()}e.httpOnly&&(s+="; HttpOnly");e.secure&&(s+="; Secure");if(e.sameSite){switch("string"===typeof e.sameSite?e.sameSite.toLowerCase():e.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s};var e=decodeURIComponent,r=encodeURIComponent,o=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function c(n,t){try{return t(n)}catch(i){return n}}}},[["kpAk",0,2,1,3,5,4,6]]]);