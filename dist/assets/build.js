(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();function Rm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var J0={exports:{}},mn={},$0={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),Bm=Symbol.for("react.portal"),Mm=Symbol.for("react.fragment"),Um=Symbol.for("react.strict_mode"),Fm=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Vm=Symbol.for("react.context"),Gm=Symbol.for("react.forward_ref"),Hm=Symbol.for("react.suspense"),qm=Symbol.for("react.memo"),Wm=Symbol.for("react.lazy"),Xs=Symbol.iterator;function Km(t){return t===null||typeof t!="object"?null:(t=Xs&&t[Xs]||t["@@iterator"],typeof t=="function"?t:null)}var td={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ed=Object.assign,rd={};function Fr(t,e,r){this.props=t,this.context=e,this.refs=rd,this.updater=r||td}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function od(){}od.prototype=Fr.prototype;function hl(t,e,r){this.props=t,this.context=e,this.refs=rd,this.updater=r||td}var xl=hl.prototype=new od;xl.constructor=hl;ed(xl,Fr.prototype);xl.isPureReactComponent=!0;var Ys=Array.isArray,ad=Object.prototype.hasOwnProperty,wl={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function id(t,e,r){var o,a={},n=null,i=null;if(e!=null)for(o in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(n=""+e.key),e)ad.call(e,o)&&!nd.hasOwnProperty(o)&&(a[o]=e[o]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var s=Array(l),m=0;m<l;m++)s[m]=arguments[m+2];a.children=s}if(t&&t.defaultProps)for(o in l=t.defaultProps,l)a[o]===void 0&&(a[o]=l[o]);return{$$typeof:Bo,type:t,key:n,ref:i,props:a,_owner:wl.current}}function Zm(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function Jm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var _s=/\/+/g;function Tn(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jm(""+t.key):e.toString(36)}function ha(t,e,r,o,a){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(n){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case Bo:case Bm:i=!0}}if(i)return i=t,a=a(i),t=o===""?"."+Tn(i,0):o,Ys(a)?(r="",t!=null&&(r=t.replace(_s,"$&/")+"/"),ha(a,e,r,"",function(m){return m})):a!=null&&(kl(a)&&(a=Zm(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(_s,"$&/")+"/")+t)),e.push(a)),1;if(i=0,o=o===""?".":o+":",Ys(t))for(var l=0;l<t.length;l++){n=t[l];var s=o+Tn(n,l);i+=ha(n,e,r,s,a)}else if(s=Km(t),typeof s=="function")for(t=s.call(t),l=0;!(n=t.next()).done;)n=n.value,s=o+Tn(n,l++),i+=ha(n,e,r,s,a);else if(n==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function Wo(t,e,r){if(t==null)return t;var o=[],a=0;return ha(t,o,"","",function(n){return e.call(r,n,a++)}),o}function $m(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},xa={transition:null},tf={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:xa,ReactCurrentOwner:wl};function ld(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Wo,forEach:function(t,e,r){Wo(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Wo(t,function(){e++}),e},toArray:function(t){return Wo(t,function(e){return e})||[]},only:function(t){if(!kl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};O.Component=Fr;O.Fragment=Mm;O.Profiler=Fm;O.PureComponent=hl;O.StrictMode=Um;O.Suspense=Hm;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tf;O.act=ld;O.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=ed({},t.props),a=t.key,n=t.ref,i=t._owner;if(e!=null){if(e.ref!==void 0&&(n=e.ref,i=wl.current),e.key!==void 0&&(a=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(s in e)ad.call(e,s)&&!nd.hasOwnProperty(s)&&(o[s]=e[s]===void 0&&l!==void 0?l[s]:e[s])}var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){l=Array(s);for(var m=0;m<s;m++)l[m]=arguments[m+2];o.children=l}return{$$typeof:Bo,type:t.type,key:a,ref:n,props:o,_owner:i}};O.createContext=function(t){return t={$$typeof:Vm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qm,_context:t},t.Consumer=t};O.createElement=id;O.createFactory=function(t){var e=id.bind(null,t);return e.type=t,e};O.createRef=function(){return{current:null}};O.forwardRef=function(t){return{$$typeof:Gm,render:t}};O.isValidElement=kl;O.lazy=function(t){return{$$typeof:Wm,_payload:{_status:-1,_result:t},_init:$m}};O.memo=function(t,e){return{$$typeof:qm,type:t,compare:e===void 0?null:e}};O.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};O.unstable_act=ld;O.useCallback=function(t,e){return ut.current.useCallback(t,e)};O.useContext=function(t){return ut.current.useContext(t)};O.useDebugValue=function(){};O.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};O.useEffect=function(t,e){return ut.current.useEffect(t,e)};O.useId=function(){return ut.current.useId()};O.useImperativeHandle=function(t,e,r){return ut.current.useImperativeHandle(t,e,r)};O.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};O.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};O.useMemo=function(t,e){return ut.current.useMemo(t,e)};O.useReducer=function(t,e,r){return ut.current.useReducer(t,e,r)};O.useRef=function(t){return ut.current.useRef(t)};O.useState=function(t){return ut.current.useState(t)};O.useSyncExternalStore=function(t,e,r){return ut.current.useSyncExternalStore(t,e,r)};O.useTransition=function(){return ut.current.useTransition()};O.version="18.3.1";$0.exports=O;var L=$0.exports;const Ct=Rm(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef=L,rf=Symbol.for("react.element"),of=Symbol.for("react.fragment"),af=Object.prototype.hasOwnProperty,nf=ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lf={key:!0,ref:!0,__self:!0,__source:!0};function sd(t,e,r){var o,a={},n=null,i=null;r!==void 0&&(n=""+r),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(i=e.ref);for(o in e)af.call(e,o)&&!lf.hasOwnProperty(o)&&(a[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)a[o]===void 0&&(a[o]=e[o]);return{$$typeof:rf,type:t,key:n,ref:i,props:a,_owner:nf.current}}mn.Fragment=of;mn.jsx=sd;mn.jsxs=sd;J0.exports=mn;var d=J0.exports,dd={exports:{}},It={},cd={exports:{}},md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(Y,C){var j=Y.length;Y.push(C);t:for(;0<j;){var R=j-1>>>1,B=Y[R];if(0<a(B,C))Y[R]=C,Y[j]=B,j=R;else break t}}function r(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var C=Y[0],j=Y.pop();if(j!==C){Y[0]=j;t:for(var R=0,B=Y.length,Re=B>>>1;R<Re;){var Bt=2*(R+1)-1,pe=Y[Bt],Xt=Bt+1,ee=Y[Xt];if(0>a(pe,j))Xt<B&&0>a(ee,pe)?(Y[R]=ee,Y[Xt]=j,R=Xt):(Y[R]=pe,Y[Bt]=j,R=Bt);else if(Xt<B&&0>a(ee,j))Y[R]=ee,Y[Xt]=j,R=Xt;else break t}}return C}function a(Y,C){var j=Y.sortIndex-C.sortIndex;return j!==0?j:Y.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;t.unstable_now=function(){return n.now()}}else{var i=Date,l=i.now();t.unstable_now=function(){return i.now()-l}}var s=[],m=[],u=1,b=null,g=3,x=!1,w=!1,k=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(Y){for(var C=r(m);C!==null;){if(C.callback===null)o(m);else if(C.startTime<=Y)o(m),C.sortIndex=C.expirationTime,e(s,C);else break;C=r(m)}}function h(Y){if(k=!1,p(Y),!w)if(r(s)!==null)w=!0,Hr(X);else{var C=r(m);C!==null&&De(h,C.startTime-Y)}}function X(Y,C){w=!1,k&&(k=!1,f(S),S=-1),x=!0;var j=g;try{for(p(C),b=r(s);b!==null&&(!(b.expirationTime>C)||Y&&!zt());){var R=b.callback;if(typeof R=="function"){b.callback=null,g=b.priorityLevel;var B=R(b.expirationTime<=C);C=t.unstable_now(),typeof B=="function"?b.callback=B:b===r(s)&&o(s),p(C)}else o(s);b=r(s)}if(b!==null)var Re=!0;else{var Bt=r(m);Bt!==null&&De(h,Bt.startTime-C),Re=!1}return Re}finally{b=null,g=j,x=!1}}var z=!1,y=null,S=-1,M=5,N=-1;function zt(){return!(t.unstable_now()-N<M)}function Le(){if(y!==null){var Y=t.unstable_now();N=Y;var C=!0;try{C=y(!0,Y)}finally{C?Te():(z=!1,y=null)}}else z=!1}var Te;if(typeof c=="function")Te=function(){c(Le)};else if(typeof MessageChannel<"u"){var Ho=new MessageChannel,Pn=Ho.port2;Ho.port1.onmessage=Le,Te=function(){Pn.postMessage(null)}}else Te=function(){E(Le,0)};function Hr(Y){y=Y,z||(z=!0,Te())}function De(Y,C){S=E(function(){Y(t.unstable_now())},C)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Y){Y.callback=null},t.unstable_continueExecution=function(){w||x||(w=!0,Hr(X))},t.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<Y?Math.floor(1e3/Y):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return r(s)},t.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var C=3;break;default:C=g}var j=g;g=C;try{return Y()}finally{g=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Y,C){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var j=g;g=Y;try{return C()}finally{g=j}},t.unstable_scheduleCallback=function(Y,C,j){var R=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?R+j:R):j=R,Y){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=j+B,Y={id:u++,callback:C,priorityLevel:Y,startTime:j,expirationTime:B,sortIndex:-1},j>R?(Y.sortIndex=j,e(m,Y),r(s)===null&&Y===r(m)&&(k?(f(S),S=-1):k=!0,De(h,j-R))):(Y.sortIndex=B,e(s,Y),w||x||(w=!0,Hr(X))),Y},t.unstable_shouldYield=zt,t.unstable_wrapCallback=function(Y){var C=g;return function(){var j=g;g=C;try{return Y.apply(this,arguments)}finally{g=j}}}})(md);cd.exports=md;var sf=cd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=L,Et=sf;function v(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fd=new Set,vo={};function ar(t,e){Ir(t,e),Ir(t+"Capture",e)}function Ir(t,e){for(vo[t]=e,t=0;t<e.length;t++)fd.add(e[t])}var se=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xi=Object.prototype.hasOwnProperty,cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ss={},Cs={};function mf(t){return xi.call(Cs,t)?!0:xi.call(Ss,t)?!1:cf.test(t)?Cs[t]=!0:(Ss[t]=!0,!1)}function ff(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pf(t,e,r,o){if(e===null||typeof e>"u"||ff(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,r,o,a,n,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=n,this.removeEmptyString=i}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var yl=/[\-:]([a-z])/g;function vl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yl,vl);st[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yl,vl);st[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yl,vl);st[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zl(t,e,r,o){var a=st.hasOwnProperty(e)?st[e]:null;(a!==null?a.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pf(e,r,a,o)&&(r=null),o||a===null?mf(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):a.mustUseProperty?t[a.propertyName]=r===null?a.type===3?!1:"":r:(e=a.attributeName,o=a.attributeNamespace,r===null?t.removeAttribute(e):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var fe=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),fr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),Xl=Symbol.for("react.strict_mode"),wi=Symbol.for("react.profiler"),pd=Symbol.for("react.provider"),gd=Symbol.for("react.context"),Yl=Symbol.for("react.forward_ref"),ki=Symbol.for("react.suspense"),yi=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ud=Symbol.for("react.offscreen"),js=Symbol.iterator;function Wr(t){return t===null||typeof t!="object"?null:(t=js&&t[js]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,Dn;function io(t){if(Dn===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Dn=e&&e[1]||""}return`
`+Dn+t}var Rn=!1;function Bn(t,e){if(!t||Rn)return"";Rn=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(m){var o=m}Reflect.construct(t,[],e)}else{try{e.call()}catch(m){o=m}t.call(e.prototype)}else{try{throw Error()}catch(m){o=m}t()}}catch(m){if(m&&o&&typeof m.stack=="string"){for(var a=m.stack.split(`
`),n=o.stack.split(`
`),i=a.length-1,l=n.length-1;1<=i&&0<=l&&a[i]!==n[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==n[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==n[l]){var s=`
`+a[i].replace(" at new "," at ");return t.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",t.displayName)),s}while(1<=i&&0<=l);break}}}finally{Rn=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?io(t):""}function gf(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=Bn(t.type,!1),t;case 11:return t=Bn(t.type.render,!1),t;case 1:return t=Bn(t.type,!0),t;default:return""}}function vi(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pr:return"Fragment";case fr:return"Portal";case wi:return"Profiler";case Xl:return"StrictMode";case ki:return"Suspense";case yi:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gd:return(t.displayName||"Context")+".Consumer";case pd:return(t._context.displayName||"Context")+".Provider";case Yl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _l:return e=t.displayName||null,e!==null?e:vi(t.type)||"Memo";case he:e=t._payload,t=t._init;try{return vi(t(e))}catch{}}return null}function uf(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vi(e);case 8:return e===Xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ie(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bf(t){var e=bd(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,n=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){o=""+i,n.call(this,i)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=bf(t))}function hd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=bd(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zi(t,e){var r=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Es(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Ie(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xd(t,e){e=e.checked,e!=null&&zl(t,"checked",e,!1)}function Xi(t,e){xd(t,e);var r=Ie(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yi(t,e.type,r):e.hasOwnProperty("defaultValue")&&Yi(t,e.type,Ie(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Is(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Yi(t,e,r){(e!=="number"||Oa(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var lo=Array.isArray;function Yr(t,e,r,o){if(t=t.options,e){e={};for(var a=0;a<r.length;a++)e["$"+r[a]]=!0;for(r=0;r<t.length;r++)a=e.hasOwnProperty("$"+t[r].value),t[r].selected!==a&&(t[r].selected=a),a&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Ie(r),e=null,a=0;a<t.length;a++){if(t[a].value===r){t[a].selected=!0,o&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function _i(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function As(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(v(92));if(lo(r)){if(1<r.length)throw Error(v(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Ie(r)}}function wd(t,e){var r=Ie(e.value),o=Ie(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function Ns(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Si(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,yd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,a){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,a)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hf=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){hf.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function vd(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function zd(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,a=vd(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,a):t[r]=a}}var xf=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ci(t,e){if(e){if(xf[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function ji(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=null;function Sl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ii=null,_r=null,Sr=null;function Os(t){if(t=Fo(t)){if(typeof Ii!="function")throw Error(v(280));var e=t.stateNode;e&&(e=bn(e),Ii(t.stateNode,t.type,e))}}function Xd(t){_r?Sr?Sr.push(t):Sr=[t]:_r=t}function Yd(){if(_r){var t=_r,e=Sr;if(Sr=_r=null,Os(t),e)for(t=0;t<e.length;t++)Os(e[t])}}function _d(t,e){return t(e)}function Sd(){}var Mn=!1;function Cd(t,e,r){if(Mn)return t(e,r);Mn=!0;try{return _d(t,e,r)}finally{Mn=!1,(_r!==null||Sr!==null)&&(Sd(),Yd())}}function Xo(t,e){var r=t.stateNode;if(r===null)return null;var o=bn(r);if(o===null)return null;r=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(v(231,e,typeof r));return r}var Ai=!1;if(se)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Ai=!1}function wf(t,e,r,o,a,n,i,l,s){var m=Array.prototype.slice.call(arguments,3);try{e.apply(r,m)}catch(u){this.onError(u)}}var po=!1,Pa=null,La=!1,Ni=null,kf={onError:function(t){po=!0,Pa=t}};function yf(t,e,r,o,a,n,i,l,s){po=!1,Pa=null,wf.apply(kf,arguments)}function vf(t,e,r,o,a,n,i,l,s){if(yf.apply(this,arguments),po){if(po){var m=Pa;po=!1,Pa=null}else throw Error(v(198));La||(La=!0,Ni=m)}}function nr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function jd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ps(t){if(nr(t)!==t)throw Error(v(188))}function zf(t){var e=t.alternate;if(!e){if(e=nr(t),e===null)throw Error(v(188));return e!==t?null:t}for(var r=t,o=e;;){var a=r.return;if(a===null)break;var n=a.alternate;if(n===null){if(o=a.return,o!==null){r=o;continue}break}if(a.child===n.child){for(n=a.child;n;){if(n===r)return Ps(a),t;if(n===o)return Ps(a),e;n=n.sibling}throw Error(v(188))}if(r.return!==o.return)r=a,o=n;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,o=n;break}if(l===o){i=!0,o=a,r=n;break}l=l.sibling}if(!i){for(l=n.child;l;){if(l===r){i=!0,r=n,o=a;break}if(l===o){i=!0,o=n,r=a;break}l=l.sibling}if(!i)throw Error(v(189))}}if(r.alternate!==o)throw Error(v(190))}if(r.tag!==3)throw Error(v(188));return r.stateNode.current===r?t:e}function Ed(t){return t=zf(t),t!==null?Id(t):null}function Id(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Id(t);if(e!==null)return e;t=t.sibling}return null}var Ad=Et.unstable_scheduleCallback,Ls=Et.unstable_cancelCallback,Xf=Et.unstable_shouldYield,Yf=Et.unstable_requestPaint,J=Et.unstable_now,_f=Et.unstable_getCurrentPriorityLevel,Cl=Et.unstable_ImmediatePriority,Nd=Et.unstable_UserBlockingPriority,Ta=Et.unstable_NormalPriority,Sf=Et.unstable_LowPriority,Od=Et.unstable_IdlePriority,fn=null,$t=null;function Cf(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(fn,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:If,jf=Math.log,Ef=Math.LN2;function If(t){return t>>>=0,t===0?32:31-(jf(t)/Ef|0)|0}var $o=64,ta=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Da(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,a=t.suspendedLanes,n=t.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?o=so(l):(n&=i,n!==0&&(o=so(n)))}else i=r&~a,i!==0?o=so(i):n!==0&&(o=so(n));if(o===0)return 0;if(e!==0&&e!==o&&!(e&a)&&(a=o&-o,n=e&-e,a>=n||a===16&&(n&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Vt(e),a=1<<r,o|=t[r],e&=~a;return o}function Af(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nf(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,a=t.expirationTimes,n=t.pendingLanes;0<n;){var i=31-Vt(n),l=1<<i,s=a[i];s===-1?(!(l&r)||l&o)&&(a[i]=Af(l,e)):s<=e&&(t.expiredLanes|=l),n&=~l}}function Oi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pd(){var t=$o;return $o<<=1,!($o&4194240)&&($o=64),t}function Un(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Mo(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vt(e),t[e]=r}function Of(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var a=31-Vt(r),n=1<<a;e[a]=0,o[a]=-1,t[a]=-1,r&=~n}}function jl(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Vt(r),a=1<<o;a&e|t[o]&e&&(t[o]|=e),r&=~a}}var D=0;function Ld(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Td,El,Dd,Rd,Bd,Pi=!1,ea=[],ze=null,Xe=null,Ye=null,Yo=new Map,_o=new Map,we=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ts(t,e){switch(t){case"focusin":case"focusout":ze=null;break;case"dragenter":case"dragleave":Xe=null;break;case"mouseover":case"mouseout":Ye=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function Zr(t,e,r,o,a,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:n,targetContainers:[a]},e!==null&&(e=Fo(e),e!==null&&El(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Lf(t,e,r,o,a){switch(e){case"focusin":return ze=Zr(ze,t,e,r,o,a),!0;case"dragenter":return Xe=Zr(Xe,t,e,r,o,a),!0;case"mouseover":return Ye=Zr(Ye,t,e,r,o,a),!0;case"pointerover":var n=a.pointerId;return Yo.set(n,Zr(Yo.get(n)||null,t,e,r,o,a)),!0;case"gotpointercapture":return n=a.pointerId,_o.set(n,Zr(_o.get(n)||null,t,e,r,o,a)),!0}return!1}function Md(t){var e=Ve(t.target);if(e!==null){var r=nr(e);if(r!==null){if(e=r.tag,e===13){if(e=jd(r),e!==null){t.blockedOn=e,Bd(t.priority,function(){Dd(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Li(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Ei=o,r.target.dispatchEvent(o),Ei=null}else return e=Fo(r),e!==null&&El(e),t.blockedOn=r,!1;e.shift()}return!0}function Ds(t,e,r){wa(t)&&r.delete(e)}function Tf(){Pi=!1,ze!==null&&wa(ze)&&(ze=null),Xe!==null&&wa(Xe)&&(Xe=null),Ye!==null&&wa(Ye)&&(Ye=null),Yo.forEach(Ds),_o.forEach(Ds)}function Jr(t,e){t.blockedOn===e&&(t.blockedOn=null,Pi||(Pi=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,Tf)))}function So(t){function e(a){return Jr(a,t)}if(0<ea.length){Jr(ea[0],t);for(var r=1;r<ea.length;r++){var o=ea[r];o.blockedOn===t&&(o.blockedOn=null)}}for(ze!==null&&Jr(ze,t),Xe!==null&&Jr(Xe,t),Ye!==null&&Jr(Ye,t),Yo.forEach(e),_o.forEach(e),r=0;r<we.length;r++)o=we[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<we.length&&(r=we[0],r.blockedOn===null);)Md(r),r.blockedOn===null&&we.shift()}var Cr=fe.ReactCurrentBatchConfig,Ra=!0;function Df(t,e,r,o){var a=D,n=Cr.transition;Cr.transition=null;try{D=1,Il(t,e,r,o)}finally{D=a,Cr.transition=n}}function Rf(t,e,r,o){var a=D,n=Cr.transition;Cr.transition=null;try{D=4,Il(t,e,r,o)}finally{D=a,Cr.transition=n}}function Il(t,e,r,o){if(Ra){var a=Li(t,e,r,o);if(a===null)Jn(t,e,o,Ba,r),Ts(t,o);else if(Lf(a,t,e,r,o))o.stopPropagation();else if(Ts(t,o),e&4&&-1<Pf.indexOf(t)){for(;a!==null;){var n=Fo(a);if(n!==null&&Td(n),n=Li(t,e,r,o),n===null&&Jn(t,e,o,Ba,r),n===a)break;a=n}a!==null&&o.stopPropagation()}else Jn(t,e,o,null,r)}}var Ba=null;function Li(t,e,r,o){if(Ba=null,t=Sl(o),t=Ve(t),t!==null)if(e=nr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=jd(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ba=t,null}function Ud(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_f()){case Cl:return 1;case Nd:return 4;case Ta:case Sf:return 16;case Od:return 536870912;default:return 16}default:return 16}}var ye=null,Al=null,ka=null;function Fd(){if(ka)return ka;var t,e=Al,r=e.length,o,a="value"in ye?ye.value:ye.textContent,n=a.length;for(t=0;t<r&&e[t]===a[t];t++);var i=r-t;for(o=1;o<=i&&e[r-o]===a[n-o];o++);return ka=a.slice(t,1<o?1-o:void 0)}function ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function Rs(){return!1}function At(t){function e(r,o,a,n,i){this._reactName=r,this._targetInst=a,this.type=o,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?ra:Rs,this.isPropagationStopped=Rs,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),e}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=At(Qr),Uo=K({},Qr,{view:0,detail:0}),Bf=At(Uo),Fn,Qn,$r,pn=K({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ol,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$r&&($r&&t.type==="mousemove"?(Fn=t.screenX-$r.screenX,Qn=t.screenY-$r.screenY):Qn=Fn=0,$r=t),Fn)},movementY:function(t){return"movementY"in t?t.movementY:Qn}}),Bs=At(pn),Mf=K({},pn,{dataTransfer:0}),Uf=At(Mf),Ff=K({},Uo,{relatedTarget:0}),Vn=At(Ff),Qf=K({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vf=At(Qf),Gf=K({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hf=At(Gf),qf=K({},Qr,{data:0}),Ms=At(qf),Wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jf(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zf[t])?!!e[t]:!1}function Ol(){return Jf}var $f=K({},Uo,{key:function(t){if(t.key){var e=Wf[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ol,charCode:function(t){return t.type==="keypress"?ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tp=At($f),ep=K({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=At(ep),rp=K({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ol}),op=At(rp),ap=K({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),np=At(ap),ip=K({},pn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lp=At(ip),sp=[9,13,27,32],Pl=se&&"CompositionEvent"in window,go=null;se&&"documentMode"in document&&(go=document.documentMode);var dp=se&&"TextEvent"in window&&!go,Qd=se&&(!Pl||go&&8<go&&11>=go),Fs=" ",Qs=!1;function Vd(t,e){switch(t){case"keyup":return sp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gr=!1;function cp(t,e){switch(t){case"compositionend":return Gd(e);case"keypress":return e.which!==32?null:(Qs=!0,Fs);case"textInput":return t=e.data,t===Fs&&Qs?null:t;default:return null}}function mp(t,e){if(gr)return t==="compositionend"||!Pl&&Vd(t,e)?(t=Fd(),ka=Al=ye=null,gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qd&&e.locale!=="ko"?null:e.data;default:return null}}var fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fp[t.type]:e==="textarea"}function Hd(t,e,r,o){Xd(o),e=Ma(e,"onChange"),0<e.length&&(r=new Nl("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var uo=null,Co=null;function pp(t){ac(t,0)}function gn(t){var e=hr(t);if(hd(e))return t}function gp(t,e){if(t==="change")return e}var qd=!1;if(se){var Gn;if(se){var Hn="oninput"in document;if(!Hn){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),Hn=typeof Gs.oninput=="function"}Gn=Hn}else Gn=!1;qd=Gn&&(!document.documentMode||9<document.documentMode)}function Hs(){uo&&(uo.detachEvent("onpropertychange",Wd),Co=uo=null)}function Wd(t){if(t.propertyName==="value"&&gn(Co)){var e=[];Hd(e,Co,t,Sl(t)),Cd(pp,e)}}function up(t,e,r){t==="focusin"?(Hs(),uo=e,Co=r,uo.attachEvent("onpropertychange",Wd)):t==="focusout"&&Hs()}function bp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gn(Co)}function hp(t,e){if(t==="click")return gn(e)}function xp(t,e){if(t==="input"||t==="change")return gn(e)}function wp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:wp;function jo(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var a=r[o];if(!xi.call(e,a)||!qt(t[a],e[a]))return!1}return!0}function qs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ws(t,e){var r=qs(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=qs(r)}}function Kd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zd(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Oa(t.document)}return e}function Ll(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kp(t){var e=Zd(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Kd(r.ownerDocument.documentElement,r)){if(o!==null&&Ll(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var a=r.textContent.length,n=Math.min(o.start,a);o=o.end===void 0?n:Math.min(o.end,a),!t.extend&&n>o&&(a=o,o=n,n=a),a=Ws(r,n);var i=Ws(r,o);a&&i&&(t.rangeCount!==1||t.anchorNode!==a.node||t.anchorOffset!==a.offset||t.focusNode!==i.node||t.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),t.removeAllRanges(),n>o?(t.addRange(e),t.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yp=se&&"documentMode"in document&&11>=document.documentMode,ur=null,Ti=null,bo=null,Di=!1;function Ks(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Di||ur==null||ur!==Oa(o)||(o=ur,"selectionStart"in o&&Ll(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),bo&&jo(bo,o)||(bo=o,o=Ma(Ti,"onSelect"),0<o.length&&(e=new Nl("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=ur)))}function oa(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var br={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},qn={},Jd={};se&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function un(t){if(qn[t])return qn[t];if(!br[t])return t;var e=br[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Jd)return qn[t]=e[r];return t}var $d=un("animationend"),tc=un("animationiteration"),ec=un("animationstart"),rc=un("transitionend"),oc=new Map,Zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ne(t,e){oc.set(t,e),ar(e,[t])}for(var Wn=0;Wn<Zs.length;Wn++){var Kn=Zs[Wn],vp=Kn.toLowerCase(),zp=Kn[0].toUpperCase()+Kn.slice(1);Ne(vp,"on"+zp)}Ne($d,"onAnimationEnd");Ne(tc,"onAnimationIteration");Ne(ec,"onAnimationStart");Ne("dblclick","onDoubleClick");Ne("focusin","onFocus");Ne("focusout","onBlur");Ne(rc,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Js(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,vf(o,e,void 0,t),t.currentTarget=null}function ac(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],a=o.event;o=o.listeners;t:{var n=void 0;if(e)for(var i=o.length-1;0<=i;i--){var l=o[i],s=l.instance,m=l.currentTarget;if(l=l.listener,s!==n&&a.isPropagationStopped())break t;Js(a,l,m),n=s}else for(i=0;i<o.length;i++){if(l=o[i],s=l.instance,m=l.currentTarget,l=l.listener,s!==n&&a.isPropagationStopped())break t;Js(a,l,m),n=s}}}if(La)throw t=Ni,La=!1,Ni=null,t}function F(t,e){var r=e[Fi];r===void 0&&(r=e[Fi]=new Set);var o=t+"__bubble";r.has(o)||(nc(e,t,2,!1),r.add(o))}function Zn(t,e,r){var o=0;e&&(o|=4),nc(r,t,o,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[aa]){t[aa]=!0,fd.forEach(function(r){r!=="selectionchange"&&(Xp.has(r)||Zn(r,!1,t),Zn(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,Zn("selectionchange",!1,e))}}function nc(t,e,r,o){switch(Ud(e)){case 1:var a=Df;break;case 4:a=Rf;break;default:a=Il}r=a.bind(null,e,r,t),a=void 0,!Ai||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),o?a!==void 0?t.addEventListener(e,r,{capture:!0,passive:a}):t.addEventListener(e,r,!0):a!==void 0?t.addEventListener(e,r,{passive:a}):t.addEventListener(e,r,!1)}function Jn(t,e,r,o,a){var n=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=o.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Ve(l),i===null)return;if(s=i.tag,s===5||s===6){o=n=i;continue t}l=l.parentNode}}o=o.return}Cd(function(){var m=n,u=Sl(r),b=[];t:{var g=oc.get(t);if(g!==void 0){var x=Nl,w=t;switch(t){case"keypress":if(ya(r)===0)break t;case"keydown":case"keyup":x=tp;break;case"focusin":w="focus",x=Vn;break;case"focusout":w="blur",x=Vn;break;case"beforeblur":case"afterblur":x=Vn;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=op;break;case $d:case tc:case ec:x=Vf;break;case rc:x=np;break;case"scroll":x=Bf;break;case"wheel":x=lp;break;case"copy":case"cut":case"paste":x=Hf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Us}var k=(e&4)!==0,E=!k&&t==="scroll",f=k?g!==null?g+"Capture":null:g;k=[];for(var c=m,p;c!==null;){p=c;var h=p.stateNode;if(p.tag===5&&h!==null&&(p=h,f!==null&&(h=Xo(c,f),h!=null&&k.push(Io(c,h,p)))),E)break;c=c.return}0<k.length&&(g=new x(g,w,null,r,u),b.push({event:g,listeners:k}))}}if(!(e&7)){t:{if(g=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",g&&r!==Ei&&(w=r.relatedTarget||r.fromElement)&&(Ve(w)||w[de]))break t;if((x||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,x?(w=r.relatedTarget||r.toElement,x=m,w=w?Ve(w):null,w!==null&&(E=nr(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=m),x!==w)){if(k=Bs,h="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(k=Us,h="onPointerLeave",f="onPointerEnter",c="pointer"),E=x==null?g:hr(x),p=w==null?g:hr(w),g=new k(h,c+"leave",x,r,u),g.target=E,g.relatedTarget=p,h=null,Ve(u)===m&&(k=new k(f,c+"enter",w,r,u),k.target=p,k.relatedTarget=E,h=k),E=h,x&&w)e:{for(k=x,f=w,c=0,p=k;p;p=lr(p))c++;for(p=0,h=f;h;h=lr(h))p++;for(;0<c-p;)k=lr(k),c--;for(;0<p-c;)f=lr(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break e;k=lr(k),f=lr(f)}k=null}else k=null;x!==null&&$s(b,g,x,k,!1),w!==null&&E!==null&&$s(b,E,w,k,!0)}}t:{if(g=m?hr(m):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var X=gp;else if(Vs(g))if(qd)X=xp;else{X=bp;var z=up}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(X=hp);if(X&&(X=X(t,m))){Hd(b,X,r,u);break t}z&&z(t,g,m),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&Yi(g,"number",g.value)}switch(z=m?hr(m):window,t){case"focusin":(Vs(z)||z.contentEditable==="true")&&(ur=z,Ti=m,bo=null);break;case"focusout":bo=Ti=ur=null;break;case"mousedown":Di=!0;break;case"contextmenu":case"mouseup":case"dragend":Di=!1,Ks(b,r,u);break;case"selectionchange":if(yp)break;case"keydown":case"keyup":Ks(b,r,u)}var y;if(Pl)t:{switch(t){case"compositionstart":var S="onCompositionStart";break t;case"compositionend":S="onCompositionEnd";break t;case"compositionupdate":S="onCompositionUpdate";break t}S=void 0}else gr?Vd(t,r)&&(S="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(S="onCompositionStart");S&&(Qd&&r.locale!=="ko"&&(gr||S!=="onCompositionStart"?S==="onCompositionEnd"&&gr&&(y=Fd()):(ye=u,Al="value"in ye?ye.value:ye.textContent,gr=!0)),z=Ma(m,S),0<z.length&&(S=new Ms(S,t,null,r,u),b.push({event:S,listeners:z}),y?S.data=y:(y=Gd(r),y!==null&&(S.data=y)))),(y=dp?cp(t,r):mp(t,r))&&(m=Ma(m,"onBeforeInput"),0<m.length&&(u=new Ms("onBeforeInput","beforeinput",null,r,u),b.push({event:u,listeners:m}),u.data=y))}ac(b,e)})}function Io(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Ma(t,e){for(var r=e+"Capture",o=[];t!==null;){var a=t,n=a.stateNode;a.tag===5&&n!==null&&(a=n,n=Xo(t,r),n!=null&&o.unshift(Io(t,n,a)),n=Xo(t,e),n!=null&&o.push(Io(t,n,a))),t=t.return}return o}function lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $s(t,e,r,o,a){for(var n=e._reactName,i=[];r!==null&&r!==o;){var l=r,s=l.alternate,m=l.stateNode;if(s!==null&&s===o)break;l.tag===5&&m!==null&&(l=m,a?(s=Xo(r,n),s!=null&&i.unshift(Io(r,s,l))):a||(s=Xo(r,n),s!=null&&i.push(Io(r,s,l)))),r=r.return}i.length!==0&&t.push({event:e,listeners:i})}var Yp=/\r\n?/g,_p=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(Yp,`
`).replace(_p,"")}function na(t,e,r){if(e=t0(e),t0(t)!==e&&r)throw Error(v(425))}function Ua(){}var Ri=null,Bi=null;function Mi(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ui=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(t){return e0.resolve(null).then(t).catch(jp)}:Ui;function jp(t){setTimeout(function(){throw t})}function $n(t,e){var r=e,o=0;do{var a=r.nextSibling;if(t.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(o===0){t.removeChild(a),So(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=a}while(r);So(e)}function _e(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function r0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Vr,Ao="__reactProps$"+Vr,de="__reactContainer$"+Vr,Fi="__reactEvents$"+Vr,Ep="__reactListeners$"+Vr,Ip="__reactHandles$"+Vr;function Ve(t){var e=t[Jt];if(e)return e;for(var r=t.parentNode;r;){if(e=r[de]||r[Jt]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=r0(t);t!==null;){if(r=t[Jt])return r;t=r0(t)}return e}t=r,r=t.parentNode}return null}function Fo(t){return t=t[Jt]||t[de],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(v(33))}function bn(t){return t[Ao]||null}var Qi=[],xr=-1;function Oe(t){return{current:t}}function V(t){0>xr||(t.current=Qi[xr],Qi[xr]=null,xr--)}function U(t,e){xr++,Qi[xr]=t.current,t.current=e}var Ae={},ft=Oe(Ae),kt=Oe(!1),$e=Ae;function Ar(t,e){var r=t.type.contextTypes;if(!r)return Ae;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var a={},n;for(n in r)a[n]=e[n];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=a),a}function yt(t){return t=t.childContextTypes,t!=null}function Fa(){V(kt),V(ft)}function o0(t,e,r){if(ft.current!==Ae)throw Error(v(168));U(ft,e),U(kt,r)}function ic(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var a in o)if(!(a in e))throw Error(v(108,uf(t)||"Unknown",a));return K({},r,o)}function Qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ae,$e=ft.current,U(ft,t),U(kt,kt.current),!0}function a0(t,e,r){var o=t.stateNode;if(!o)throw Error(v(169));r?(t=ic(t,e,$e),o.__reactInternalMemoizedMergedChildContext=t,V(kt),V(ft),U(ft,t)):V(kt),U(kt,r)}var ae=null,hn=!1,ti=!1;function lc(t){ae===null?ae=[t]:ae.push(t)}function Ap(t){hn=!0,lc(t)}function Pe(){if(!ti&&ae!==null){ti=!0;var t=0,e=D;try{var r=ae;for(D=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}ae=null,hn=!1}catch(a){throw ae!==null&&(ae=ae.slice(t+1)),Ad(Cl,Pe),a}finally{D=e,ti=!1}}return null}var wr=[],kr=0,Va=null,Ga=0,Nt=[],Ot=0,tr=null,ne=1,ie="";function Fe(t,e){wr[kr++]=Ga,wr[kr++]=Va,Va=t,Ga=e}function sc(t,e,r){Nt[Ot++]=ne,Nt[Ot++]=ie,Nt[Ot++]=tr,tr=t;var o=ne;t=ie;var a=32-Vt(o)-1;o&=~(1<<a),r+=1;var n=32-Vt(e)+a;if(30<n){var i=a-a%5;n=(o&(1<<i)-1).toString(32),o>>=i,a-=i,ne=1<<32-Vt(e)+a|r<<a|o,ie=n+t}else ne=1<<n|r<<a|o,ie=t}function Tl(t){t.return!==null&&(Fe(t,1),sc(t,1,0))}function Dl(t){for(;t===Va;)Va=wr[--kr],wr[kr]=null,Ga=wr[--kr],wr[kr]=null;for(;t===tr;)tr=Nt[--Ot],Nt[Ot]=null,ie=Nt[--Ot],Nt[Ot]=null,ne=Nt[--Ot],Nt[Ot]=null}var jt=null,St=null,G=!1,Qt=null;function dc(t,e){var r=Pt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function n0(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,St=_e(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=tr!==null?{id:ne,overflow:ie}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Pt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,jt=t,St=null,!0):!1;default:return!1}}function Vi(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gi(t){if(G){var e=St;if(e){var r=e;if(!n0(t,e)){if(Vi(t))throw Error(v(418));e=_e(r.nextSibling);var o=jt;e&&n0(t,e)?dc(o,r):(t.flags=t.flags&-4097|2,G=!1,jt=t)}}else{if(Vi(t))throw Error(v(418));t.flags=t.flags&-4097|2,G=!1,jt=t}}}function i0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function ia(t){if(t!==jt)return!1;if(!G)return i0(t),G=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mi(t.type,t.memoizedProps)),e&&(e=St)){if(Vi(t))throw cc(),Error(v(418));for(;e;)dc(t,e),e=_e(e.nextSibling)}if(i0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){St=_e(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}St=null}}else St=jt?_e(t.stateNode.nextSibling):null;return!0}function cc(){for(var t=St;t;)t=_e(t.nextSibling)}function Nr(){St=jt=null,G=!1}function Rl(t){Qt===null?Qt=[t]:Qt.push(t)}var Np=fe.ReactCurrentBatchConfig;function to(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(v(309));var o=r.stateNode}if(!o)throw Error(v(147,t));var a=o,n=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===n?e.ref:(e=function(i){var l=a.refs;i===null?delete l[n]:l[n]=i},e._stringRef=n,e)}if(typeof t!="string")throw Error(v(284));if(!r._owner)throw Error(v(290,t))}return t}function la(t,e){throw t=Object.prototype.toString.call(e),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l0(t){var e=t._init;return e(t._payload)}function mc(t){function e(f,c){if(t){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function r(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function o(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function a(f,c){return f=Ee(f,c),f.index=0,f.sibling=null,f}function n(f,c,p){return f.index=p,t?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return t&&f.alternate===null&&(f.flags|=2),f}function l(f,c,p,h){return c===null||c.tag!==6?(c=li(p,f.mode,h),c.return=f,c):(c=a(c,p),c.return=f,c)}function s(f,c,p,h){var X=p.type;return X===pr?u(f,c,p.props.children,h,p.key):c!==null&&(c.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===he&&l0(X)===c.type)?(h=a(c,p.props),h.ref=to(f,c,p),h.return=f,h):(h=Ca(p.type,p.key,p.props,null,f.mode,h),h.ref=to(f,c,p),h.return=f,h)}function m(f,c,p,h){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=si(p,f.mode,h),c.return=f,c):(c=a(c,p.children||[]),c.return=f,c)}function u(f,c,p,h,X){return c===null||c.tag!==7?(c=Ke(p,f.mode,h,X),c.return=f,c):(c=a(c,p),c.return=f,c)}function b(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=li(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ko:return p=Ca(c.type,c.key,c.props,null,f.mode,p),p.ref=to(f,null,c),p.return=f,p;case fr:return c=si(c,f.mode,p),c.return=f,c;case he:var h=c._init;return b(f,h(c._payload),p)}if(lo(c)||Wr(c))return c=Ke(c,f.mode,p,null),c.return=f,c;la(f,c)}return null}function g(f,c,p,h){var X=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return X!==null?null:l(f,c,""+p,h);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ko:return p.key===X?s(f,c,p,h):null;case fr:return p.key===X?m(f,c,p,h):null;case he:return X=p._init,g(f,c,X(p._payload),h)}if(lo(p)||Wr(p))return X!==null?null:u(f,c,p,h,null);la(f,p)}return null}function x(f,c,p,h,X){if(typeof h=="string"&&h!==""||typeof h=="number")return f=f.get(p)||null,l(c,f,""+h,X);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ko:return f=f.get(h.key===null?p:h.key)||null,s(c,f,h,X);case fr:return f=f.get(h.key===null?p:h.key)||null,m(c,f,h,X);case he:var z=h._init;return x(f,c,p,z(h._payload),X)}if(lo(h)||Wr(h))return f=f.get(p)||null,u(c,f,h,X,null);la(c,h)}return null}function w(f,c,p,h){for(var X=null,z=null,y=c,S=c=0,M=null;y!==null&&S<p.length;S++){y.index>S?(M=y,y=null):M=y.sibling;var N=g(f,y,p[S],h);if(N===null){y===null&&(y=M);break}t&&y&&N.alternate===null&&e(f,y),c=n(N,c,S),z===null?X=N:z.sibling=N,z=N,y=M}if(S===p.length)return r(f,y),G&&Fe(f,S),X;if(y===null){for(;S<p.length;S++)y=b(f,p[S],h),y!==null&&(c=n(y,c,S),z===null?X=y:z.sibling=y,z=y);return G&&Fe(f,S),X}for(y=o(f,y);S<p.length;S++)M=x(y,f,S,p[S],h),M!==null&&(t&&M.alternate!==null&&y.delete(M.key===null?S:M.key),c=n(M,c,S),z===null?X=M:z.sibling=M,z=M);return t&&y.forEach(function(zt){return e(f,zt)}),G&&Fe(f,S),X}function k(f,c,p,h){var X=Wr(p);if(typeof X!="function")throw Error(v(150));if(p=X.call(p),p==null)throw Error(v(151));for(var z=X=null,y=c,S=c=0,M=null,N=p.next();y!==null&&!N.done;S++,N=p.next()){y.index>S?(M=y,y=null):M=y.sibling;var zt=g(f,y,N.value,h);if(zt===null){y===null&&(y=M);break}t&&y&&zt.alternate===null&&e(f,y),c=n(zt,c,S),z===null?X=zt:z.sibling=zt,z=zt,y=M}if(N.done)return r(f,y),G&&Fe(f,S),X;if(y===null){for(;!N.done;S++,N=p.next())N=b(f,N.value,h),N!==null&&(c=n(N,c,S),z===null?X=N:z.sibling=N,z=N);return G&&Fe(f,S),X}for(y=o(f,y);!N.done;S++,N=p.next())N=x(y,f,S,N.value,h),N!==null&&(t&&N.alternate!==null&&y.delete(N.key===null?S:N.key),c=n(N,c,S),z===null?X=N:z.sibling=N,z=N);return t&&y.forEach(function(Le){return e(f,Le)}),G&&Fe(f,S),X}function E(f,c,p,h){if(typeof p=="object"&&p!==null&&p.type===pr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ko:t:{for(var X=p.key,z=c;z!==null;){if(z.key===X){if(X=p.type,X===pr){if(z.tag===7){r(f,z.sibling),c=a(z,p.props.children),c.return=f,f=c;break t}}else if(z.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===he&&l0(X)===z.type){r(f,z.sibling),c=a(z,p.props),c.ref=to(f,z,p),c.return=f,f=c;break t}r(f,z);break}else e(f,z);z=z.sibling}p.type===pr?(c=Ke(p.props.children,f.mode,h,p.key),c.return=f,f=c):(h=Ca(p.type,p.key,p.props,null,f.mode,h),h.ref=to(f,c,p),h.return=f,f=h)}return i(f);case fr:t:{for(z=p.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){r(f,c.sibling),c=a(c,p.children||[]),c.return=f,f=c;break t}else{r(f,c);break}else e(f,c);c=c.sibling}c=si(p,f.mode,h),c.return=f,f=c}return i(f);case he:return z=p._init,E(f,c,z(p._payload),h)}if(lo(p))return w(f,c,p,h);if(Wr(p))return k(f,c,p,h);la(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(r(f,c.sibling),c=a(c,p),c.return=f,f=c):(r(f,c),c=li(p,f.mode,h),c.return=f,f=c),i(f)):r(f,c)}return E}var Or=mc(!0),fc=mc(!1),Ha=Oe(null),qa=null,yr=null,Bl=null;function Ml(){Bl=yr=qa=null}function Ul(t){var e=Ha.current;V(Ha),t._currentValue=e}function Hi(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function jr(t,e){qa=t,Bl=yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function Tt(t){var e=t._currentValue;if(Bl!==t)if(t={context:t,memoizedValue:e,next:null},yr===null){if(qa===null)throw Error(v(308));yr=t,qa.dependencies={lanes:0,firstContext:t}}else yr=yr.next=t;return e}var Ge=null;function Fl(t){Ge===null?Ge=[t]:Ge.push(t)}function pc(t,e,r,o){var a=e.interleaved;return a===null?(r.next=r,Fl(e)):(r.next=a.next,a.next=r),e.interleaved=r,ce(t,o)}function ce(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var xe=!1;function Ql(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function le(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Se(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,P&2){var a=o.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),o.pending=e,ce(t,r)}return a=o.interleaved,a===null?(e.next=e,Fl(o)):(e.next=a.next,a.next=e),o.interleaved=e,ce(t,r)}function va(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,jl(t,r)}}function s0(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var a=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};n===null?a=n=i:n=n.next=i,r=r.next}while(r!==null);n===null?a=n=e:n=n.next=e}else a=n=e;r={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:n,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Wa(t,e,r,o){var a=t.updateQueue;xe=!1;var n=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,m=s.next;s.next=null,i===null?n=m:i.next=m,i=s;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==i&&(l===null?u.firstBaseUpdate=m:l.next=m,u.lastBaseUpdate=s))}if(n!==null){var b=a.baseState;i=0,u=m=s=null,l=n;do{var g=l.lane,x=l.eventTime;if((o&g)===g){u!==null&&(u=u.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});t:{var w=t,k=l;switch(g=e,x=r,k.tag){case 1:if(w=k.payload,typeof w=="function"){b=w.call(x,b,g);break t}b=w;break t;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,g=typeof w=="function"?w.call(x,b,g):w,g==null)break t;b=K({},b,g);break t;case 2:xe=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(m=u=x,s=b):u=u.next=x,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(u===null&&(s=b),a.baseState=s,a.firstBaseUpdate=m,a.lastBaseUpdate=u,e=a.shared.interleaved,e!==null){a=e;do i|=a.lane,a=a.next;while(a!==e)}else n===null&&(a.shared.lanes=0);rr|=i,t.lanes=i,t.memoizedState=b}}function d0(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],a=o.callback;if(a!==null){if(o.callback=null,o=r,typeof a!="function")throw Error(v(191,a));a.call(o)}}}var Qo={},te=Oe(Qo),No=Oe(Qo),Oo=Oe(Qo);function He(t){if(t===Qo)throw Error(v(174));return t}function Vl(t,e){switch(U(Oo,e),U(No,t),U(te,Qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Si(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Si(e,t)}V(te),U(te,e)}function Pr(){V(te),V(No),V(Oo)}function uc(t){He(Oo.current);var e=He(te.current),r=Si(e,t.type);e!==r&&(U(No,t),U(te,r))}function Gl(t){No.current===t&&(V(te),V(No))}var q=Oe(0);function Ka(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ei=[];function Hl(){for(var t=0;t<ei.length;t++)ei[t]._workInProgressVersionPrimary=null;ei.length=0}var za=fe.ReactCurrentDispatcher,ri=fe.ReactCurrentBatchConfig,er=0,W=null,et=null,ot=null,Za=!1,ho=!1,Po=0,Op=0;function dt(){throw Error(v(321))}function ql(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!qt(t[r],e[r]))return!1;return!0}function Wl(t,e,r,o,a,n){if(er=n,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,za.current=t===null||t.memoizedState===null?Dp:Rp,t=r(o,a),ho){n=0;do{if(ho=!1,Po=0,25<=n)throw Error(v(301));n+=1,ot=et=null,e.updateQueue=null,za.current=Bp,t=r(o,a)}while(ho)}if(za.current=Ja,e=et!==null&&et.next!==null,er=0,ot=et=W=null,Za=!1,e)throw Error(v(300));return t}function Kl(){var t=Po!==0;return Po=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?W.memoizedState=ot=t:ot=ot.next=t,ot}function Dt(){if(et===null){var t=W.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=ot===null?W.memoizedState:ot.next;if(e!==null)ot=e,et=t;else{if(t===null)throw Error(v(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},ot===null?W.memoizedState=ot=t:ot=ot.next=t}return ot}function Lo(t,e){return typeof e=="function"?e(t):e}function oi(t){var e=Dt(),r=e.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=t;var o=et,a=o.baseQueue,n=r.pending;if(n!==null){if(a!==null){var i=a.next;a.next=n.next,n.next=i}o.baseQueue=a=n,r.pending=null}if(a!==null){n=a.next,o=o.baseState;var l=i=null,s=null,m=n;do{var u=m.lane;if((er&u)===u)s!==null&&(s=s.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),o=m.hasEagerState?m.eagerState:t(o,m.action);else{var b={lane:u,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};s===null?(l=s=b,i=o):s=s.next=b,W.lanes|=u,rr|=u}m=m.next}while(m!==null&&m!==n);s===null?i=o:s.next=l,qt(o,e.memoizedState)||(xt=!0),e.memoizedState=o,e.baseState=i,e.baseQueue=s,r.lastRenderedState=o}if(t=r.interleaved,t!==null){a=t;do n=a.lane,W.lanes|=n,rr|=n,a=a.next;while(a!==t)}else a===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function ai(t){var e=Dt(),r=e.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=t;var o=r.dispatch,a=r.pending,n=e.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do n=t(n,i.action),i=i.next;while(i!==a);qt(n,e.memoizedState)||(xt=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),r.lastRenderedState=n}return[n,o]}function bc(){}function hc(t,e){var r=W,o=Dt(),a=e(),n=!qt(o.memoizedState,a);if(n&&(o.memoizedState=a,xt=!0),o=o.queue,Zl(kc.bind(null,r,o,t),[t]),o.getSnapshot!==e||n||ot!==null&&ot.memoizedState.tag&1){if(r.flags|=2048,To(9,wc.bind(null,r,o,a,e),void 0,null),nt===null)throw Error(v(349));er&30||xc(r,e,a)}return a}function xc(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=W.updateQueue,e===null?(e={lastEffect:null,stores:null},W.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function wc(t,e,r,o){e.value=r,e.getSnapshot=o,yc(e)&&vc(t)}function kc(t,e,r){return r(function(){yc(e)&&vc(t)})}function yc(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!qt(t,r)}catch{return!0}}function vc(t){var e=ce(t,1);e!==null&&Gt(e,t,1,-1)}function c0(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=Tp.bind(null,W,t),[e.memoizedState,t]}function To(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=W.updateQueue,e===null?(e={lastEffect:null,stores:null},W.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function zc(){return Dt().memoizedState}function Xa(t,e,r,o){var a=Kt();W.flags|=t,a.memoizedState=To(1|e,r,void 0,o===void 0?null:o)}function xn(t,e,r,o){var a=Dt();o=o===void 0?null:o;var n=void 0;if(et!==null){var i=et.memoizedState;if(n=i.destroy,o!==null&&ql(o,i.deps)){a.memoizedState=To(e,r,n,o);return}}W.flags|=t,a.memoizedState=To(1|e,r,n,o)}function m0(t,e){return Xa(8390656,8,t,e)}function Zl(t,e){return xn(2048,8,t,e)}function Xc(t,e){return xn(4,2,t,e)}function Yc(t,e){return xn(4,4,t,e)}function _c(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sc(t,e,r){return r=r!=null?r.concat([t]):null,xn(4,4,_c.bind(null,e,t),r)}function Jl(){}function Cc(t,e){var r=Dt();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&ql(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function jc(t,e){var r=Dt();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&ql(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function Ec(t,e,r){return er&21?(qt(r,e)||(r=Pd(),W.lanes|=r,rr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=r)}function Pp(t,e){var r=D;D=r!==0&&4>r?r:4,t(!0);var o=ri.transition;ri.transition={};try{t(!1),e()}finally{D=r,ri.transition=o}}function Ic(){return Dt().memoizedState}function Lp(t,e,r){var o=je(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Ac(t))Nc(e,r);else if(r=pc(t,e,r,o),r!==null){var a=gt();Gt(r,t,o,a),Oc(r,e,o)}}function Tp(t,e,r){var o=je(t),a={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ac(t))Nc(e,a);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var i=e.lastRenderedState,l=n(i,r);if(a.hasEagerState=!0,a.eagerState=l,qt(l,i)){var s=e.interleaved;s===null?(a.next=a,Fl(e)):(a.next=s.next,s.next=a),e.interleaved=a;return}}catch{}finally{}r=pc(t,e,a,o),r!==null&&(a=gt(),Gt(r,t,o,a),Oc(r,e,o))}}function Ac(t){var e=t.alternate;return t===W||e!==null&&e===W}function Nc(t,e){ho=Za=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Oc(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,jl(t,r)}}var Ja={readContext:Tt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Dp={readContext:Tt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Tt,useEffect:m0,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Xa(4194308,4,_c.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var r=Kt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Kt();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=Lp.bind(null,W,t),[o.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:c0,useDebugValue:Jl,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=c0(!1),e=t[0];return t=Pp.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=W,a=Kt();if(G){if(r===void 0)throw Error(v(407));r=r()}else{if(r=e(),nt===null)throw Error(v(349));er&30||xc(o,e,r)}a.memoizedState=r;var n={value:r,getSnapshot:e};return a.queue=n,m0(kc.bind(null,o,n,t),[t]),o.flags|=2048,To(9,wc.bind(null,o,n,r,e),void 0,null),r},useId:function(){var t=Kt(),e=nt.identifierPrefix;if(G){var r=ie,o=ne;r=(o&~(1<<32-Vt(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=Po++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Op++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rp={readContext:Tt,useCallback:Cc,useContext:Tt,useEffect:Zl,useImperativeHandle:Sc,useInsertionEffect:Xc,useLayoutEffect:Yc,useMemo:jc,useReducer:oi,useRef:zc,useState:function(){return oi(Lo)},useDebugValue:Jl,useDeferredValue:function(t){var e=Dt();return Ec(e,et.memoizedState,t)},useTransition:function(){var t=oi(Lo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:bc,useSyncExternalStore:hc,useId:Ic,unstable_isNewReconciler:!1},Bp={readContext:Tt,useCallback:Cc,useContext:Tt,useEffect:Zl,useImperativeHandle:Sc,useInsertionEffect:Xc,useLayoutEffect:Yc,useMemo:jc,useReducer:ai,useRef:zc,useState:function(){return ai(Lo)},useDebugValue:Jl,useDeferredValue:function(t){var e=Dt();return et===null?e.memoizedState=t:Ec(e,et.memoizedState,t)},useTransition:function(){var t=ai(Lo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:bc,useSyncExternalStore:hc,useId:Ic,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=K({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function qi(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:K({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var wn={isMounted:function(t){return(t=t._reactInternals)?nr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=gt(),a=je(t),n=le(o,a);n.payload=e,r!=null&&(n.callback=r),e=Se(t,n,a),e!==null&&(Gt(e,t,a,o),va(e,t,a))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=gt(),a=je(t),n=le(o,a);n.tag=1,n.payload=e,r!=null&&(n.callback=r),e=Se(t,n,a),e!==null&&(Gt(e,t,a,o),va(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=gt(),o=je(t),a=le(r,o);a.tag=2,e!=null&&(a.callback=e),e=Se(t,a,o),e!==null&&(Gt(e,t,o,r),va(e,t,o))}};function f0(t,e,r,o,a,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,n,i):e.prototype&&e.prototype.isPureReactComponent?!jo(r,o)||!jo(a,n):!0}function Pc(t,e,r){var o=!1,a=Ae,n=e.contextType;return typeof n=="object"&&n!==null?n=Tt(n):(a=yt(e)?$e:ft.current,o=e.contextTypes,n=(o=o!=null)?Ar(t,a):Ae),e=new e(r,n),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wn,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=n),e}function p0(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&wn.enqueueReplaceState(e,e.state,null)}function Wi(t,e,r,o){var a=t.stateNode;a.props=r,a.state=t.memoizedState,a.refs={},Ql(t);var n=e.contextType;typeof n=="object"&&n!==null?a.context=Tt(n):(n=yt(e)?$e:ft.current,a.context=Ar(t,n)),a.state=t.memoizedState,n=e.getDerivedStateFromProps,typeof n=="function"&&(qi(t,e,n,r),a.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&wn.enqueueReplaceState(a,a.state,null),Wa(t,r,a,o),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308)}function Lr(t,e){try{var r="",o=e;do r+=gf(o),o=o.return;while(o);var a=r}catch(n){a=`
Error generating stack: `+n.message+`
`+n.stack}return{value:t,source:e,stack:a,digest:null}}function ni(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Ki(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function Lc(t,e,r){r=le(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){tn||(tn=!0,il=o),Ki(t,e)},r}function Tc(t,e,r){r=le(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var a=e.value;r.payload=function(){return o(a)},r.callback=function(){Ki(t,e)}}var n=t.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(r.callback=function(){Ki(t,e),typeof o!="function"&&(Ce===null?Ce=new Set([this]):Ce.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),r}function g0(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Mp;var a=new Set;o.set(e,a)}else a=o.get(e),a===void 0&&(a=new Set,o.set(e,a));a.has(r)||(a.add(r),t=eg.bind(null,t,e,r),e.then(t,t))}function u0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function b0(t,e,r,o,a){return t.mode&1?(t.flags|=65536,t.lanes=a,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=le(-1,1),e.tag=2,Se(r,e,1))),r.lanes|=1),t)}var Up=fe.ReactCurrentOwner,xt=!1;function pt(t,e,r,o){e.child=t===null?fc(e,null,r,o):Or(e,t.child,r,o)}function h0(t,e,r,o,a){r=r.render;var n=e.ref;return jr(e,a),o=Wl(t,e,r,o,n,a),r=Kl(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,me(t,e,a)):(G&&r&&Tl(e),e.flags|=1,pt(t,e,o,a),e.child)}function x0(t,e,r,o,a){if(t===null){var n=r.type;return typeof n=="function"&&!is(n)&&n.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=n,Dc(t,e,n,o,a)):(t=Ca(r.type,null,o,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!(t.lanes&a)){var i=n.memoizedProps;if(r=r.compare,r=r!==null?r:jo,r(i,o)&&t.ref===e.ref)return me(t,e,a)}return e.flags|=1,t=Ee(n,o),t.ref=e.ref,t.return=e,e.child=t}function Dc(t,e,r,o,a){if(t!==null){var n=t.memoizedProps;if(jo(n,o)&&t.ref===e.ref)if(xt=!1,e.pendingProps=o=n,(t.lanes&a)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,me(t,e,a)}return Zi(t,e,r,o,a)}function Rc(t,e,r){var o=e.pendingProps,a=o.children,n=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(zr,_t),_t|=r;else{if(!(r&1073741824))return t=n!==null?n.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,U(zr,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=n!==null?n.baseLanes:r,U(zr,_t),_t|=o}else n!==null?(o=n.baseLanes|r,e.memoizedState=null):o=r,U(zr,_t),_t|=o;return pt(t,e,a,r),e.child}function Bc(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Zi(t,e,r,o,a){var n=yt(r)?$e:ft.current;return n=Ar(e,n),jr(e,a),r=Wl(t,e,r,o,n,a),o=Kl(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,me(t,e,a)):(G&&o&&Tl(e),e.flags|=1,pt(t,e,r,a),e.child)}function w0(t,e,r,o,a){if(yt(r)){var n=!0;Qa(e)}else n=!1;if(jr(e,a),e.stateNode===null)Ya(t,e),Pc(e,r,o),Wi(e,r,o,a),o=!0;else if(t===null){var i=e.stateNode,l=e.memoizedProps;i.props=l;var s=i.context,m=r.contextType;typeof m=="object"&&m!==null?m=Tt(m):(m=yt(r)?$e:ft.current,m=Ar(e,m));var u=r.getDerivedStateFromProps,b=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==o||s!==m)&&p0(e,i,o,m),xe=!1;var g=e.memoizedState;i.state=g,Wa(e,o,i,a),s=e.memoizedState,l!==o||g!==s||kt.current||xe?(typeof u=="function"&&(qi(e,r,u,o),s=e.memoizedState),(l=xe||f0(e,r,l,o,g,s,m))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=s),i.props=o,i.state=s,i.context=m,o=l):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{i=e.stateNode,gc(t,e),l=e.memoizedProps,m=e.type===e.elementType?l:Ut(e.type,l),i.props=m,b=e.pendingProps,g=i.context,s=r.contextType,typeof s=="object"&&s!==null?s=Tt(s):(s=yt(r)?$e:ft.current,s=Ar(e,s));var x=r.getDerivedStateFromProps;(u=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==b||g!==s)&&p0(e,i,o,s),xe=!1,g=e.memoizedState,i.state=g,Wa(e,o,i,a);var w=e.memoizedState;l!==b||g!==w||kt.current||xe?(typeof x=="function"&&(qi(e,r,x,o),w=e.memoizedState),(m=xe||f0(e,r,m,o,g,w,s)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,w,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=w),i.props=o,i.state=w,i.context=s,o=m):(typeof i.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),o=!1)}return Ji(t,e,r,o,n,a)}function Ji(t,e,r,o,a,n){Bc(t,e);var i=(e.flags&128)!==0;if(!o&&!i)return a&&a0(e,r,!1),me(t,e,n);o=e.stateNode,Up.current=e;var l=i&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&i?(e.child=Or(e,t.child,null,n),e.child=Or(e,null,l,n)):pt(t,e,l,n),e.memoizedState=o.state,a&&a0(e,r,!0),e.child}function Mc(t){var e=t.stateNode;e.pendingContext?o0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&o0(t,e.context,!1),Vl(t,e.containerInfo)}function k0(t,e,r,o,a){return Nr(),Rl(a),e.flags|=256,pt(t,e,r,o),e.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function tl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uc(t,e,r){var o=e.pendingProps,a=q.current,n=!1,i=(e.flags&128)!==0,l;if((l=i)||(l=t!==null&&t.memoizedState===null?!1:(a&2)!==0),l?(n=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(a|=1),U(q,a&1),t===null)return Gi(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(i=o.children,t=o.fallback,n?(o=e.mode,n=e.child,i={mode:"hidden",children:i},!(o&1)&&n!==null?(n.childLanes=0,n.pendingProps=i):n=vn(i,o,0,null),t=Ke(t,o,r,null),n.return=e,t.return=e,n.sibling=t,e.child=n,e.child.memoizedState=tl(r),e.memoizedState=$i,t):$l(e,i));if(a=t.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Fp(t,e,i,o,l,a,r);if(n){n=o.fallback,i=e.mode,a=t.child,l=a.sibling;var s={mode:"hidden",children:o.children};return!(i&1)&&e.child!==a?(o=e.child,o.childLanes=0,o.pendingProps=s,e.deletions=null):(o=Ee(a,s),o.subtreeFlags=a.subtreeFlags&14680064),l!==null?n=Ee(l,n):(n=Ke(n,i,r,null),n.flags|=2),n.return=e,o.return=e,o.sibling=n,e.child=o,o=n,n=e.child,i=t.child.memoizedState,i=i===null?tl(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},n.memoizedState=i,n.childLanes=t.childLanes&~r,e.memoizedState=$i,o}return n=t.child,t=n.sibling,o=Ee(n,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function $l(t,e){return e=vn({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,r,o){return o!==null&&Rl(o),Or(e,t.child,null,r),t=$l(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fp(t,e,r,o,a,n,i){if(r)return e.flags&256?(e.flags&=-257,o=ni(Error(v(422))),sa(t,e,i,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(n=o.fallback,a=e.mode,o=vn({mode:"visible",children:o.children},a,0,null),n=Ke(n,a,i,null),n.flags|=2,o.return=e,n.return=e,o.sibling=n,e.child=o,e.mode&1&&Or(e,t.child,null,i),e.child.memoizedState=tl(i),e.memoizedState=$i,n);if(!(e.mode&1))return sa(t,e,i,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var l=o.dgst;return o=l,n=Error(v(419)),o=ni(n,o,void 0),sa(t,e,i,o)}if(l=(i&t.childLanes)!==0,xt||l){if(o=nt,o!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|i)?0:a,a!==0&&a!==n.retryLane&&(n.retryLane=a,ce(t,a),Gt(o,t,a,-1))}return ns(),o=ni(Error(v(421))),sa(t,e,i,o)}return a.data==="$?"?(e.flags|=128,e.child=t.child,e=rg.bind(null,t),a._reactRetry=e,null):(t=n.treeContext,St=_e(a.nextSibling),jt=e,G=!0,Qt=null,t!==null&&(Nt[Ot++]=ne,Nt[Ot++]=ie,Nt[Ot++]=tr,ne=t.id,ie=t.overflow,tr=e),e=$l(e,o.children),e.flags|=4096,e)}function y0(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Hi(t.return,e,r)}function ii(t,e,r,o,a){var n=t.memoizedState;n===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:a}:(n.isBackwards=e,n.rendering=null,n.renderingStartTime=0,n.last=o,n.tail=r,n.tailMode=a)}function Fc(t,e,r){var o=e.pendingProps,a=o.revealOrder,n=o.tail;if(pt(t,e,o.children,r),o=q.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y0(t,r,e);else if(t.tag===19)y0(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(U(q,o),!(e.mode&1))e.memoizedState=null;else switch(a){case"forwards":for(r=e.child,a=null;r!==null;)t=r.alternate,t!==null&&Ka(t)===null&&(a=r),r=r.sibling;r=a,r===null?(a=e.child,e.child=null):(a=r.sibling,r.sibling=null),ii(e,!1,a,r,n);break;case"backwards":for(r=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Ka(t)===null){e.child=a;break}t=a.sibling,a.sibling=r,r=a,a=t}ii(e,!0,r,null,n);break;case"together":ii(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ya(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function me(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),rr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(v(153));if(e.child!==null){for(t=e.child,r=Ee(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Ee(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Qp(t,e,r){switch(e.tag){case 3:Mc(e),Nr();break;case 5:uc(e);break;case 1:yt(e.type)&&Qa(e);break;case 4:Vl(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,a=e.memoizedProps.value;U(Ha,o._currentValue),o._currentValue=a;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(U(q,q.current&1),e.flags|=128,null):r&e.child.childLanes?Uc(t,e,r):(U(q,q.current&1),t=me(t,e,r),t!==null?t.sibling:null);U(q,q.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return Fc(t,e,r);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(q,q.current),o)break;return null;case 22:case 23:return e.lanes=0,Rc(t,e,r)}return me(t,e,r)}var Qc,el,Vc,Gc;Qc=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};el=function(){};Vc=function(t,e,r,o){var a=t.memoizedProps;if(a!==o){t=e.stateNode,He(te.current);var n=null;switch(r){case"input":a=zi(t,a),o=zi(t,o),n=[];break;case"select":a=K({},a,{value:void 0}),o=K({},o,{value:void 0}),n=[];break;case"textarea":a=_i(t,a),o=_i(t,o),n=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Ua)}Ci(r,o);var i;r=null;for(m in a)if(!o.hasOwnProperty(m)&&a.hasOwnProperty(m)&&a[m]!=null)if(m==="style"){var l=a[m];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(vo.hasOwnProperty(m)?n||(n=[]):(n=n||[]).push(m,null));for(m in o){var s=o[m];if(l=a!=null?a[m]:void 0,o.hasOwnProperty(m)&&s!==l&&(s!=null||l!=null))if(m==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(r||(r={}),r[i]=s[i])}else r||(n||(n=[]),n.push(m,r)),r=s;else m==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(n=n||[]).push(m,s)):m==="children"?typeof s!="string"&&typeof s!="number"||(n=n||[]).push(m,""+s):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(vo.hasOwnProperty(m)?(s!=null&&m==="onScroll"&&F("scroll",t),n||l===s||(n=[])):(n=n||[]).push(m,s))}r&&(n=n||[]).push("style",r);var m=n;(e.updateQueue=m)&&(e.flags|=4)}};Gc=function(t,e,r,o){r!==o&&(e.flags|=4)};function eo(t,e){if(!G)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var a=t.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function Vp(t,e,r){var o=e.pendingProps;switch(Dl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return yt(e.type)&&Fa(),ct(e),null;case 3:return o=e.stateNode,Pr(),V(kt),V(ft),Hl(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(dl(Qt),Qt=null))),el(t,e),ct(e),null;case 5:Gl(e);var a=He(Oo.current);if(r=e.type,t!==null&&e.stateNode!=null)Vc(t,e,r,o,a),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(v(166));return ct(e),null}if(t=He(te.current),ia(e)){o=e.stateNode,r=e.type;var n=e.memoizedProps;switch(o[Jt]=e,o[Ao]=n,t=(e.mode&1)!==0,r){case"dialog":F("cancel",o),F("close",o);break;case"iframe":case"object":case"embed":F("load",o);break;case"video":case"audio":for(a=0;a<co.length;a++)F(co[a],o);break;case"source":F("error",o);break;case"img":case"image":case"link":F("error",o),F("load",o);break;case"details":F("toggle",o);break;case"input":Es(o,n),F("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!n.multiple},F("invalid",o);break;case"textarea":As(o,n),F("invalid",o)}Ci(r,n),a=null;for(var i in n)if(n.hasOwnProperty(i)){var l=n[i];i==="children"?typeof l=="string"?o.textContent!==l&&(n.suppressHydrationWarning!==!0&&na(o.textContent,l,t),a=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(n.suppressHydrationWarning!==!0&&na(o.textContent,l,t),a=["children",""+l]):vo.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&F("scroll",o)}switch(r){case"input":Zo(o),Is(o,n,!0);break;case"textarea":Zo(o),Ns(o);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(o.onclick=Ua)}o=a,e.updateQueue=o,o!==null&&(e.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kd(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=i.createElement(r,{is:o.is}):(t=i.createElement(r),r==="select"&&(i=t,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):t=i.createElementNS(t,r),t[Jt]=e,t[Ao]=o,Qc(t,e,!1,!1),e.stateNode=t;t:{switch(i=ji(r,o),r){case"dialog":F("cancel",t),F("close",t),a=o;break;case"iframe":case"object":case"embed":F("load",t),a=o;break;case"video":case"audio":for(a=0;a<co.length;a++)F(co[a],t);a=o;break;case"source":F("error",t),a=o;break;case"img":case"image":case"link":F("error",t),F("load",t),a=o;break;case"details":F("toggle",t),a=o;break;case"input":Es(t,o),a=zi(t,o),F("invalid",t);break;case"option":a=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},a=K({},o,{value:void 0}),F("invalid",t);break;case"textarea":As(t,o),a=_i(t,o),F("invalid",t);break;default:a=o}Ci(r,a),l=a;for(n in l)if(l.hasOwnProperty(n)){var s=l[n];n==="style"?zd(t,s):n==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&yd(t,s)):n==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&zo(t,s):typeof s=="number"&&zo(t,""+s):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(vo.hasOwnProperty(n)?s!=null&&n==="onScroll"&&F("scroll",t):s!=null&&zl(t,n,s,i))}switch(r){case"input":Zo(t),Is(t,o,!1);break;case"textarea":Zo(t),Ns(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Ie(o.value));break;case"select":t.multiple=!!o.multiple,n=o.value,n!=null?Yr(t,!!o.multiple,n,!1):o.defaultValue!=null&&Yr(t,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=Ua)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)Gc(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(v(166));if(r=He(Oo.current),He(te.current),ia(e)){if(o=e.stateNode,r=e.memoizedProps,o[Jt]=e,(n=o.nodeValue!==r)&&(t=jt,t!==null))switch(t.tag){case 3:na(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(o.nodeValue,r,(t.mode&1)!==0)}n&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Jt]=e,e.stateNode=o}return ct(e),null;case 13:if(V(q),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(G&&St!==null&&e.mode&1&&!(e.flags&128))cc(),Nr(),e.flags|=98560,n=!1;else if(n=ia(e),o!==null&&o.dehydrated!==null){if(t===null){if(!n)throw Error(v(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n[Jt]=e}else Nr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),n=!1}else Qt!==null&&(dl(Qt),Qt=null),n=!0;if(!n)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||q.current&1?rt===0&&(rt=3):ns())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return Pr(),el(t,e),t===null&&Eo(e.stateNode.containerInfo),ct(e),null;case 10:return Ul(e.type._context),ct(e),null;case 17:return yt(e.type)&&Fa(),ct(e),null;case 19:if(V(q),n=e.memoizedState,n===null)return ct(e),null;if(o=(e.flags&128)!==0,i=n.rendering,i===null)if(o)eo(n,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=Ka(t),i!==null){for(e.flags|=128,eo(n,!1),o=i.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)n=r,t=o,n.flags&=14680066,i=n.alternate,i===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=i.childLanes,n.lanes=i.lanes,n.child=i.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=i.memoizedProps,n.memoizedState=i.memoizedState,n.updateQueue=i.updateQueue,n.type=i.type,t=i.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return U(q,q.current&1|2),e.child}t=t.sibling}n.tail!==null&&J()>Tr&&(e.flags|=128,o=!0,eo(n,!1),e.lanes=4194304)}else{if(!o)if(t=Ka(i),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),eo(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!G)return ct(e),null}else 2*J()-n.renderingStartTime>Tr&&r!==1073741824&&(e.flags|=128,o=!0,eo(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(r=n.last,r!==null?r.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=J(),e.sibling=null,r=q.current,U(q,o?r&1|2:r&1),e):(ct(e),null);case 22:case 23:return as(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?_t&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function Gp(t,e){switch(Dl(e),e.tag){case 1:return yt(e.type)&&Fa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pr(),V(kt),V(ft),Hl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gl(e),null;case 13:if(V(q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Nr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(q),null;case 4:return Pr(),null;case 10:return Ul(e.type._context),null;case 22:case 23:return as(),null;case 24:return null;default:return null}}var da=!1,mt=!1,Hp=typeof WeakSet=="function"?WeakSet:Set,_=null;function vr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Z(t,e,o)}else r.current=null}function rl(t,e,r){try{r()}catch(o){Z(t,e,o)}}var v0=!1;function qp(t,e){if(Ri=Ra,t=Zd(),Ll(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var a=o.anchorOffset,n=o.focusNode;o=o.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var i=0,l=-1,s=-1,m=0,u=0,b=t,g=null;e:for(;;){for(var x;b!==r||a!==0&&b.nodeType!==3||(l=i+a),b!==n||o!==0&&b.nodeType!==3||(s=i+o),b.nodeType===3&&(i+=b.nodeValue.length),(x=b.firstChild)!==null;)g=b,b=x;for(;;){if(b===t)break e;if(g===r&&++m===a&&(l=i),g===n&&++u===o&&(s=i),(x=b.nextSibling)!==null)break;b=g,g=b.parentNode}b=x}r=l===-1||s===-1?null:{start:l,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bi={focusedElem:t,selectionRange:r},Ra=!1,_=e;_!==null;)if(e=_,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_=t;else for(;_!==null;){e=_;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,E=w.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?k:Ut(e.type,k),E);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(h){Z(e,e.return,h)}if(t=e.sibling,t!==null){t.return=e.return,_=t;break}_=e.return}return w=v0,v0=!1,w}function xo(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&t)===t){var n=a.destroy;a.destroy=void 0,n!==void 0&&rl(e,r,n)}a=a.next}while(a!==o)}}function kn(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function ol(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Hc(t){var e=t.alternate;e!==null&&(t.alternate=null,Hc(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[Ao],delete e[Fi],delete e[Ep],delete e[Ip])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qc(t){return t.tag===5||t.tag===3||t.tag===4}function z0(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qc(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function al(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Ua));else if(o!==4&&(t=t.child,t!==null))for(al(t,e,r),t=t.sibling;t!==null;)al(t,e,r),t=t.sibling}function nl(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(nl(t,e,r),t=t.sibling;t!==null;)nl(t,e,r),t=t.sibling}var it=null,Ft=!1;function ue(t,e,r){for(r=r.child;r!==null;)Wc(t,e,r),r=r.sibling}function Wc(t,e,r){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(fn,r)}catch{}switch(r.tag){case 5:mt||vr(r,e);case 6:var o=it,a=Ft;it=null,ue(t,e,r),it=o,Ft=a,it!==null&&(Ft?(t=it,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):it.removeChild(r.stateNode));break;case 18:it!==null&&(Ft?(t=it,r=r.stateNode,t.nodeType===8?$n(t.parentNode,r):t.nodeType===1&&$n(t,r),So(t)):$n(it,r.stateNode));break;case 4:o=it,a=Ft,it=r.stateNode.containerInfo,Ft=!0,ue(t,e,r),it=o,Ft=a;break;case 0:case 11:case 14:case 15:if(!mt&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var n=a,i=n.destroy;n=n.tag,i!==void 0&&(n&2||n&4)&&rl(r,e,i),a=a.next}while(a!==o)}ue(t,e,r);break;case 1:if(!mt&&(vr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(l){Z(r,e,l)}ue(t,e,r);break;case 21:ue(t,e,r);break;case 22:r.mode&1?(mt=(o=mt)||r.memoizedState!==null,ue(t,e,r),mt=o):ue(t,e,r);break;default:ue(t,e,r)}}function X0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Hp),e.forEach(function(o){var a=og.bind(null,t,o);r.has(o)||(r.add(o),o.then(a,a))})}}function Mt(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var a=r[o];try{var n=t,i=e,l=i;t:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,Ft=!1;break t;case 3:it=l.stateNode.containerInfo,Ft=!0;break t;case 4:it=l.stateNode.containerInfo,Ft=!0;break t}l=l.return}if(it===null)throw Error(v(160));Wc(n,i,a),it=null,Ft=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(m){Z(a,e,m)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kc(e,t),e=e.sibling}function Kc(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Wt(t),o&4){try{xo(3,t,t.return),kn(3,t)}catch(k){Z(t,t.return,k)}try{xo(5,t,t.return)}catch(k){Z(t,t.return,k)}}break;case 1:Mt(e,t),Wt(t),o&512&&r!==null&&vr(r,r.return);break;case 5:if(Mt(e,t),Wt(t),o&512&&r!==null&&vr(r,r.return),t.flags&32){var a=t.stateNode;try{zo(a,"")}catch(k){Z(t,t.return,k)}}if(o&4&&(a=t.stateNode,a!=null)){var n=t.memoizedProps,i=r!==null?r.memoizedProps:n,l=t.type,s=t.updateQueue;if(t.updateQueue=null,s!==null)try{l==="input"&&n.type==="radio"&&n.name!=null&&xd(a,n),ji(l,i);var m=ji(l,n);for(i=0;i<s.length;i+=2){var u=s[i],b=s[i+1];u==="style"?zd(a,b):u==="dangerouslySetInnerHTML"?yd(a,b):u==="children"?zo(a,b):zl(a,u,b,m)}switch(l){case"input":Xi(a,n);break;case"textarea":wd(a,n);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!n.multiple;var x=n.value;x!=null?Yr(a,!!n.multiple,x,!1):g!==!!n.multiple&&(n.defaultValue!=null?Yr(a,!!n.multiple,n.defaultValue,!0):Yr(a,!!n.multiple,n.multiple?[]:"",!1))}a[Ao]=n}catch(k){Z(t,t.return,k)}}break;case 6:if(Mt(e,t),Wt(t),o&4){if(t.stateNode===null)throw Error(v(162));a=t.stateNode,n=t.memoizedProps;try{a.nodeValue=n}catch(k){Z(t,t.return,k)}}break;case 3:if(Mt(e,t),Wt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(k){Z(t,t.return,k)}break;case 4:Mt(e,t),Wt(t);break;case 13:Mt(e,t),Wt(t),a=t.child,a.flags&8192&&(n=a.memoizedState!==null,a.stateNode.isHidden=n,!n||a.alternate!==null&&a.alternate.memoizedState!==null||(rs=J())),o&4&&X0(t);break;case 22:if(u=r!==null&&r.memoizedState!==null,t.mode&1?(mt=(m=mt)||u,Mt(e,t),mt=m):Mt(e,t),Wt(t),o&8192){if(m=t.memoizedState!==null,(t.stateNode.isHidden=m)&&!u&&t.mode&1)for(_=t,u=t.child;u!==null;){for(b=_=u;_!==null;){switch(g=_,x=g.child,g.tag){case 0:case 11:case 14:case 15:xo(4,g,g.return);break;case 1:vr(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){o=g,r=g.return;try{e=o,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(k){Z(o,r,k)}}break;case 5:vr(g,g.return);break;case 22:if(g.memoizedState!==null){_0(b);continue}}x!==null?(x.return=g,_=x):_0(b)}u=u.sibling}t:for(u=null,b=t;;){if(b.tag===5){if(u===null){u=b;try{a=b.stateNode,m?(n=a.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(l=b.stateNode,s=b.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=vd("display",i))}catch(k){Z(t,t.return,k)}}}else if(b.tag===6){if(u===null)try{b.stateNode.nodeValue=m?"":b.memoizedProps}catch(k){Z(t,t.return,k)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===t)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break t;for(;b.sibling===null;){if(b.return===null||b.return===t)break t;u===b&&(u=null),b=b.return}u===b&&(u=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Mt(e,t),Wt(t),o&4&&X0(t);break;case 21:break;default:Mt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(qc(r)){var o=r;break t}r=r.return}throw Error(v(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(zo(a,""),o.flags&=-33);var n=z0(t);nl(t,n,a);break;case 3:case 4:var i=o.stateNode.containerInfo,l=z0(t);al(t,l,i);break;default:throw Error(v(161))}}catch(s){Z(t,t.return,s)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wp(t,e,r){_=t,Zc(t)}function Zc(t,e,r){for(var o=(t.mode&1)!==0;_!==null;){var a=_,n=a.child;if(a.tag===22&&o){var i=a.memoizedState!==null||da;if(!i){var l=a.alternate,s=l!==null&&l.memoizedState!==null||mt;l=da;var m=mt;if(da=i,(mt=s)&&!m)for(_=a;_!==null;)i=_,s=i.child,i.tag===22&&i.memoizedState!==null?S0(a):s!==null?(s.return=i,_=s):S0(a);for(;n!==null;)_=n,Zc(n),n=n.sibling;_=a,da=l,mt=m}Y0(t)}else a.subtreeFlags&8772&&n!==null?(n.return=a,_=n):Y0(t)}}function Y0(t){for(;_!==null;){var e=_;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||kn(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!mt)if(r===null)o.componentDidMount();else{var a=e.elementType===e.type?r.memoizedProps:Ut(e.type,r.memoizedProps);o.componentDidUpdate(a,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var n=e.updateQueue;n!==null&&d0(e,n,o);break;case 3:var i=e.updateQueue;if(i!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}d0(e,i,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var m=e.alternate;if(m!==null){var u=m.memoizedState;if(u!==null){var b=u.dehydrated;b!==null&&So(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}mt||e.flags&512&&ol(e)}catch(g){Z(e,e.return,g)}}if(e===t){_=null;break}if(r=e.sibling,r!==null){r.return=e.return,_=r;break}_=e.return}}function _0(t){for(;_!==null;){var e=_;if(e===t){_=null;break}var r=e.sibling;if(r!==null){r.return=e.return,_=r;break}_=e.return}}function S0(t){for(;_!==null;){var e=_;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{kn(4,e)}catch(s){Z(e,r,s)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var a=e.return;try{o.componentDidMount()}catch(s){Z(e,a,s)}}var n=e.return;try{ol(e)}catch(s){Z(e,n,s)}break;case 5:var i=e.return;try{ol(e)}catch(s){Z(e,i,s)}}}catch(s){Z(e,e.return,s)}if(e===t){_=null;break}var l=e.sibling;if(l!==null){l.return=e.return,_=l;break}_=e.return}}var Kp=Math.ceil,$a=fe.ReactCurrentDispatcher,ts=fe.ReactCurrentOwner,Lt=fe.ReactCurrentBatchConfig,P=0,nt=null,tt=null,lt=0,_t=0,zr=Oe(0),rt=0,Do=null,rr=0,yn=0,es=0,wo=null,ht=null,rs=0,Tr=1/0,re=null,tn=!1,il=null,Ce=null,ca=!1,ve=null,en=0,ko=0,ll=null,_a=-1,Sa=0;function gt(){return P&6?J():_a!==-1?_a:_a=J()}function je(t){return t.mode&1?P&2&&lt!==0?lt&-lt:Np.transition!==null?(Sa===0&&(Sa=Pd()),Sa):(t=D,t!==0||(t=window.event,t=t===void 0?16:Ud(t.type)),t):1}function Gt(t,e,r,o){if(50<ko)throw ko=0,ll=null,Error(v(185));Mo(t,r,o),(!(P&2)||t!==nt)&&(t===nt&&(!(P&2)&&(yn|=r),rt===4&&ke(t,lt)),vt(t,o),r===1&&P===0&&!(e.mode&1)&&(Tr=J()+500,hn&&Pe()))}function vt(t,e){var r=t.callbackNode;Nf(t,e);var o=Da(t,t===nt?lt:0);if(o===0)r!==null&&Ls(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&Ls(r),e===1)t.tag===0?Ap(C0.bind(null,t)):lc(C0.bind(null,t)),Cp(function(){!(P&6)&&Pe()}),r=null;else{switch(Ld(o)){case 1:r=Cl;break;case 4:r=Nd;break;case 16:r=Ta;break;case 536870912:r=Od;break;default:r=Ta}r=nm(r,Jc.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Jc(t,e){if(_a=-1,Sa=0,P&6)throw Error(v(327));var r=t.callbackNode;if(Er()&&t.callbackNode!==r)return null;var o=Da(t,t===nt?lt:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=rn(t,o);else{e=o;var a=P;P|=2;var n=tm();(nt!==t||lt!==e)&&(re=null,Tr=J()+500,We(t,e));do try{$p();break}catch(l){$c(t,l)}while(!0);Ml(),$a.current=n,P=a,tt!==null?e=0:(nt=null,lt=0,e=rt)}if(e!==0){if(e===2&&(a=Oi(t),a!==0&&(o=a,e=sl(t,a))),e===1)throw r=Do,We(t,0),ke(t,o),vt(t,J()),r;if(e===6)ke(t,o);else{if(a=t.current.alternate,!(o&30)&&!Zp(a)&&(e=rn(t,o),e===2&&(n=Oi(t),n!==0&&(o=n,e=sl(t,n))),e===1))throw r=Do,We(t,0),ke(t,o),vt(t,J()),r;switch(t.finishedWork=a,t.finishedLanes=o,e){case 0:case 1:throw Error(v(345));case 2:Qe(t,ht,re);break;case 3:if(ke(t,o),(o&130023424)===o&&(e=rs+500-J(),10<e)){if(Da(t,0)!==0)break;if(a=t.suspendedLanes,(a&o)!==o){gt(),t.pingedLanes|=t.suspendedLanes&a;break}t.timeoutHandle=Ui(Qe.bind(null,t,ht,re),e);break}Qe(t,ht,re);break;case 4:if(ke(t,o),(o&4194240)===o)break;for(e=t.eventTimes,a=-1;0<o;){var i=31-Vt(o);n=1<<i,i=e[i],i>a&&(a=i),o&=~n}if(o=a,o=J()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Kp(o/1960))-o,10<o){t.timeoutHandle=Ui(Qe.bind(null,t,ht,re),o);break}Qe(t,ht,re);break;case 5:Qe(t,ht,re);break;default:throw Error(v(329))}}}return vt(t,J()),t.callbackNode===r?Jc.bind(null,t):null}function sl(t,e){var r=wo;return t.current.memoizedState.isDehydrated&&(We(t,e).flags|=256),t=rn(t,e),t!==2&&(e=ht,ht=r,e!==null&&dl(e)),t}function dl(t){ht===null?ht=t:ht.push.apply(ht,t)}function Zp(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var a=r[o],n=a.getSnapshot;a=a.value;try{if(!qt(n(),a))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ke(t,e){for(e&=~es,e&=~yn,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Vt(e),o=1<<r;t[r]=-1,e&=~o}}function C0(t){if(P&6)throw Error(v(327));Er();var e=Da(t,0);if(!(e&1))return vt(t,J()),null;var r=rn(t,e);if(t.tag!==0&&r===2){var o=Oi(t);o!==0&&(e=o,r=sl(t,o))}if(r===1)throw r=Do,We(t,0),ke(t,e),vt(t,J()),r;if(r===6)throw Error(v(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qe(t,ht,re),vt(t,J()),null}function os(t,e){var r=P;P|=1;try{return t(e)}finally{P=r,P===0&&(Tr=J()+500,hn&&Pe())}}function or(t){ve!==null&&ve.tag===0&&!(P&6)&&Er();var e=P;P|=1;var r=Lt.transition,o=D;try{if(Lt.transition=null,D=1,t)return t()}finally{D=o,Lt.transition=r,P=e,!(P&6)&&Pe()}}function as(){_t=zr.current,V(zr)}function We(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Sp(r)),tt!==null)for(r=tt.return;r!==null;){var o=r;switch(Dl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Fa();break;case 3:Pr(),V(kt),V(ft),Hl();break;case 5:Gl(o);break;case 4:Pr();break;case 13:V(q);break;case 19:V(q);break;case 10:Ul(o.type._context);break;case 22:case 23:as()}r=r.return}if(nt=t,tt=t=Ee(t.current,null),lt=_t=e,rt=0,Do=null,es=yn=rr=0,ht=wo=null,Ge!==null){for(e=0;e<Ge.length;e++)if(r=Ge[e],o=r.interleaved,o!==null){r.interleaved=null;var a=o.next,n=r.pending;if(n!==null){var i=n.next;n.next=a,o.next=i}r.pending=o}Ge=null}return t}function $c(t,e){do{var r=tt;try{if(Ml(),za.current=Ja,Za){for(var o=W.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Za=!1}if(er=0,ot=et=W=null,ho=!1,Po=0,ts.current=null,r===null||r.return===null){rt=1,Do=e,tt=null;break}t:{var n=t,i=r.return,l=r,s=e;if(e=lt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var m=s,u=l,b=u.tag;if(!(u.mode&1)&&(b===0||b===11||b===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var x=u0(i);if(x!==null){x.flags&=-257,b0(x,i,l,n,e),x.mode&1&&g0(n,m,e),e=x,s=m;var w=e.updateQueue;if(w===null){var k=new Set;k.add(s),e.updateQueue=k}else w.add(s);break t}else{if(!(e&1)){g0(n,m,e),ns();break t}s=Error(v(426))}}else if(G&&l.mode&1){var E=u0(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),b0(E,i,l,n,e),Rl(Lr(s,l));break t}}n=s=Lr(s,l),rt!==4&&(rt=2),wo===null?wo=[n]:wo.push(n),n=i;do{switch(n.tag){case 3:n.flags|=65536,e&=-e,n.lanes|=e;var f=Lc(n,s,e);s0(n,f);break t;case 1:l=s;var c=n.type,p=n.stateNode;if(!(n.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ce===null||!Ce.has(p)))){n.flags|=65536,e&=-e,n.lanes|=e;var h=Tc(n,l,e);s0(n,h);break t}}n=n.return}while(n!==null)}rm(r)}catch(X){e=X,tt===r&&r!==null&&(tt=r=r.return);continue}break}while(!0)}function tm(){var t=$a.current;return $a.current=Ja,t===null?Ja:t}function ns(){(rt===0||rt===3||rt===2)&&(rt=4),nt===null||!(rr&268435455)&&!(yn&268435455)||ke(nt,lt)}function rn(t,e){var r=P;P|=2;var o=tm();(nt!==t||lt!==e)&&(re=null,We(t,e));do try{Jp();break}catch(a){$c(t,a)}while(!0);if(Ml(),P=r,$a.current=o,tt!==null)throw Error(v(261));return nt=null,lt=0,rt}function Jp(){for(;tt!==null;)em(tt)}function $p(){for(;tt!==null&&!Xf();)em(tt)}function em(t){var e=am(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?rm(t):tt=e,ts.current=null}function rm(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=Gp(r,e),r!==null){r.flags&=32767,tt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,tt=null;return}}else if(r=Vp(r,e,_t),r!==null){tt=r;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);rt===0&&(rt=5)}function Qe(t,e,r){var o=D,a=Lt.transition;try{Lt.transition=null,D=1,tg(t,e,r,o)}finally{Lt.transition=a,D=o}return null}function tg(t,e,r,o){do Er();while(ve!==null);if(P&6)throw Error(v(327));r=t.finishedWork;var a=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(v(177));t.callbackNode=null,t.callbackPriority=0;var n=r.lanes|r.childLanes;if(Of(t,n),t===nt&&(tt=nt=null,lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ca||(ca=!0,nm(Ta,function(){return Er(),null})),n=(r.flags&15990)!==0,r.subtreeFlags&15990||n){n=Lt.transition,Lt.transition=null;var i=D;D=1;var l=P;P|=4,ts.current=null,qp(t,r),Kc(r,t),kp(Bi),Ra=!!Ri,Bi=Ri=null,t.current=r,Wp(r),Yf(),P=l,D=i,Lt.transition=n}else t.current=r;if(ca&&(ca=!1,ve=t,en=a),n=t.pendingLanes,n===0&&(Ce=null),Cf(r.stateNode),vt(t,J()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)a=e[r],o(a.value,{componentStack:a.stack,digest:a.digest});if(tn)throw tn=!1,t=il,il=null,t;return en&1&&t.tag!==0&&Er(),n=t.pendingLanes,n&1?t===ll?ko++:(ko=0,ll=t):ko=0,Pe(),null}function Er(){if(ve!==null){var t=Ld(en),e=Lt.transition,r=D;try{if(Lt.transition=null,D=16>t?16:t,ve===null)var o=!1;else{if(t=ve,ve=null,en=0,P&6)throw Error(v(331));var a=P;for(P|=4,_=t.current;_!==null;){var n=_,i=n.child;if(_.flags&16){var l=n.deletions;if(l!==null){for(var s=0;s<l.length;s++){var m=l[s];for(_=m;_!==null;){var u=_;switch(u.tag){case 0:case 11:case 15:xo(8,u,n)}var b=u.child;if(b!==null)b.return=u,_=b;else for(;_!==null;){u=_;var g=u.sibling,x=u.return;if(Hc(u),u===m){_=null;break}if(g!==null){g.return=x,_=g;break}_=x}}}var w=n.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var E=k.sibling;k.sibling=null,k=E}while(k!==null)}}_=n}}if(n.subtreeFlags&2064&&i!==null)i.return=n,_=i;else t:for(;_!==null;){if(n=_,n.flags&2048)switch(n.tag){case 0:case 11:case 15:xo(9,n,n.return)}var f=n.sibling;if(f!==null){f.return=n.return,_=f;break t}_=n.return}}var c=t.current;for(_=c;_!==null;){i=_;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,_=p;else t:for(i=c;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:kn(9,l)}}catch(X){Z(l,l.return,X)}if(l===i){_=null;break t}var h=l.sibling;if(h!==null){h.return=l.return,_=h;break t}_=l.return}}if(P=a,Pe(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(fn,t)}catch{}o=!0}return o}finally{D=r,Lt.transition=e}}return!1}function j0(t,e,r){e=Lr(r,e),e=Lc(t,e,1),t=Se(t,e,1),e=gt(),t!==null&&(Mo(t,1,e),vt(t,e))}function Z(t,e,r){if(t.tag===3)j0(t,t,r);else for(;e!==null;){if(e.tag===3){j0(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ce===null||!Ce.has(o))){t=Lr(r,t),t=Tc(e,t,1),e=Se(e,t,1),t=gt(),e!==null&&(Mo(e,1,t),vt(e,t));break}}e=e.return}}function eg(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&r,nt===t&&(lt&r)===r&&(rt===4||rt===3&&(lt&130023424)===lt&&500>J()-rs?We(t,0):es|=r),vt(t,e)}function om(t,e){e===0&&(t.mode&1?(e=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):e=1);var r=gt();t=ce(t,e),t!==null&&(Mo(t,e,r),vt(t,r))}function rg(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),om(t,r)}function og(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,a=t.memoizedState;a!==null&&(r=a.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(v(314))}o!==null&&o.delete(e),om(t,r)}var am;am=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)xt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return xt=!1,Qp(t,e,r);xt=!!(t.flags&131072)}else xt=!1,G&&e.flags&1048576&&sc(e,Ga,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;Ya(t,e),t=e.pendingProps;var a=Ar(e,ft.current);jr(e,r),a=Wl(null,e,o,t,a,r);var n=Kl();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(o)?(n=!0,Qa(e)):n=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ql(e),a.updater=wn,e.stateNode=a,a._reactInternals=e,Wi(e,o,t,r),e=Ji(null,e,o,!0,n,r)):(e.tag=0,G&&n&&Tl(e),pt(null,e,a,r),e=e.child),e;case 16:o=e.elementType;t:{switch(Ya(t,e),t=e.pendingProps,a=o._init,o=a(o._payload),e.type=o,a=e.tag=ng(o),t=Ut(o,t),a){case 0:e=Zi(null,e,o,t,r);break t;case 1:e=w0(null,e,o,t,r);break t;case 11:e=h0(null,e,o,t,r);break t;case 14:e=x0(null,e,o,Ut(o.type,t),r);break t}throw Error(v(306,o,""))}return e;case 0:return o=e.type,a=e.pendingProps,a=e.elementType===o?a:Ut(o,a),Zi(t,e,o,a,r);case 1:return o=e.type,a=e.pendingProps,a=e.elementType===o?a:Ut(o,a),w0(t,e,o,a,r);case 3:t:{if(Mc(e),t===null)throw Error(v(387));o=e.pendingProps,n=e.memoizedState,a=n.element,gc(t,e),Wa(e,o,null,r);var i=e.memoizedState;if(o=i.element,n.isDehydrated)if(n={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){a=Lr(Error(v(423)),e),e=k0(t,e,o,r,a);break t}else if(o!==a){a=Lr(Error(v(424)),e),e=k0(t,e,o,r,a);break t}else for(St=_e(e.stateNode.containerInfo.firstChild),jt=e,G=!0,Qt=null,r=fc(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Nr(),o===a){e=me(t,e,r);break t}pt(t,e,o,r)}e=e.child}return e;case 5:return uc(e),t===null&&Gi(e),o=e.type,a=e.pendingProps,n=t!==null?t.memoizedProps:null,i=a.children,Mi(o,a)?i=null:n!==null&&Mi(o,n)&&(e.flags|=32),Bc(t,e),pt(t,e,i,r),e.child;case 6:return t===null&&Gi(e),null;case 13:return Uc(t,e,r);case 4:return Vl(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Or(e,null,o,r):pt(t,e,o,r),e.child;case 11:return o=e.type,a=e.pendingProps,a=e.elementType===o?a:Ut(o,a),h0(t,e,o,a,r);case 7:return pt(t,e,e.pendingProps,r),e.child;case 8:return pt(t,e,e.pendingProps.children,r),e.child;case 12:return pt(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(o=e.type._context,a=e.pendingProps,n=e.memoizedProps,i=a.value,U(Ha,o._currentValue),o._currentValue=i,n!==null)if(qt(n.value,i)){if(n.children===a.children&&!kt.current){e=me(t,e,r);break t}}else for(n=e.child,n!==null&&(n.return=e);n!==null;){var l=n.dependencies;if(l!==null){i=n.child;for(var s=l.firstContext;s!==null;){if(s.context===o){if(n.tag===1){s=le(-1,r&-r),s.tag=2;var m=n.updateQueue;if(m!==null){m=m.shared;var u=m.pending;u===null?s.next=s:(s.next=u.next,u.next=s),m.pending=s}}n.lanes|=r,s=n.alternate,s!==null&&(s.lanes|=r),Hi(n.return,r,e),l.lanes|=r;break}s=s.next}}else if(n.tag===10)i=n.type===e.type?null:n.child;else if(n.tag===18){if(i=n.return,i===null)throw Error(v(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Hi(i,r,e),i=n.sibling}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}pt(t,e,a.children,r),e=e.child}return e;case 9:return a=e.type,o=e.pendingProps.children,jr(e,r),a=Tt(a),o=o(a),e.flags|=1,pt(t,e,o,r),e.child;case 14:return o=e.type,a=Ut(o,e.pendingProps),a=Ut(o.type,a),x0(t,e,o,a,r);case 15:return Dc(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,a=e.pendingProps,a=e.elementType===o?a:Ut(o,a),Ya(t,e),e.tag=1,yt(o)?(t=!0,Qa(e)):t=!1,jr(e,r),Pc(e,o,a),Wi(e,o,a,r),Ji(null,e,o,!0,t,r);case 19:return Fc(t,e,r);case 22:return Rc(t,e,r)}throw Error(v(156,e.tag))};function nm(t,e){return Ad(t,e)}function ag(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,r,o){return new ag(t,e,r,o)}function is(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ng(t){if(typeof t=="function")return is(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yl)return 11;if(t===_l)return 14}return 2}function Ee(t,e){var r=t.alternate;return r===null?(r=Pt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ca(t,e,r,o,a,n){var i=2;if(o=t,typeof t=="function")is(t)&&(i=1);else if(typeof t=="string")i=5;else t:switch(t){case pr:return Ke(r.children,a,n,e);case Xl:i=8,a|=8;break;case wi:return t=Pt(12,r,e,a|2),t.elementType=wi,t.lanes=n,t;case ki:return t=Pt(13,r,e,a),t.elementType=ki,t.lanes=n,t;case yi:return t=Pt(19,r,e,a),t.elementType=yi,t.lanes=n,t;case ud:return vn(r,a,n,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pd:i=10;break t;case gd:i=9;break t;case Yl:i=11;break t;case _l:i=14;break t;case he:i=16,o=null;break t}throw Error(v(130,t==null?t:typeof t,""))}return e=Pt(i,r,e,a),e.elementType=t,e.type=o,e.lanes=n,e}function Ke(t,e,r,o){return t=Pt(7,t,o,e),t.lanes=r,t}function vn(t,e,r,o){return t=Pt(22,t,o,e),t.elementType=ud,t.lanes=r,t.stateNode={isHidden:!1},t}function li(t,e,r){return t=Pt(6,t,null,e),t.lanes=r,t}function si(t,e,r){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ig(t,e,r,o,a){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Un(0),this.expirationTimes=Un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Un(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ls(t,e,r,o,a,n,i,l,s){return t=new ig(t,e,r,l,s),e===1?(e=1,n===!0&&(e|=8)):e=0,n=Pt(3,null,null,e),t.current=n,n.stateNode=t,n.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(n),t}function lg(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function im(t){if(!t)return Ae;t=t._reactInternals;t:{if(nr(t)!==t||t.tag!==1)throw Error(v(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(v(171))}if(t.tag===1){var r=t.type;if(yt(r))return ic(t,r,e)}return e}function lm(t,e,r,o,a,n,i,l,s){return t=ls(r,o,!0,t,a,n,i,l,s),t.context=im(null),r=t.current,o=gt(),a=je(r),n=le(o,a),n.callback=e??null,Se(r,n,a),t.current.lanes=a,Mo(t,a,o),vt(t,o),t}function zn(t,e,r,o){var a=e.current,n=gt(),i=je(a);return r=im(r),e.context===null?e.context=r:e.pendingContext=r,e=le(n,i),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Se(a,e,i),t!==null&&(Gt(t,a,i,n),va(t,a,i)),i}function on(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function E0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function ss(t,e){E0(t,e),(t=t.alternate)&&E0(t,e)}function sg(){return null}var sm=typeof reportError=="function"?reportError:function(t){console.error(t)};function ds(t){this._internalRoot=t}Xn.prototype.render=ds.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(v(409));zn(t,e,null,null)};Xn.prototype.unmount=ds.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;or(function(){zn(null,t,null,null)}),e[de]=null}};function Xn(t){this._internalRoot=t}Xn.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rd();t={blockedOn:null,target:t,priority:e};for(var r=0;r<we.length&&e!==0&&e<we[r].priority;r++);we.splice(r,0,t),r===0&&Md(t)}};function cs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yn(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function I0(){}function dg(t,e,r,o,a){if(a){if(typeof o=="function"){var n=o;o=function(){var m=on(i);n.call(m)}}var i=lm(e,o,t,0,null,!1,!1,"",I0);return t._reactRootContainer=i,t[de]=i.current,Eo(t.nodeType===8?t.parentNode:t),or(),i}for(;a=t.lastChild;)t.removeChild(a);if(typeof o=="function"){var l=o;o=function(){var m=on(s);l.call(m)}}var s=ls(t,0,!1,null,null,!1,!1,"",I0);return t._reactRootContainer=s,t[de]=s.current,Eo(t.nodeType===8?t.parentNode:t),or(function(){zn(e,s,r,o)}),s}function _n(t,e,r,o,a){var n=r._reactRootContainer;if(n){var i=n;if(typeof a=="function"){var l=a;a=function(){var s=on(i);l.call(s)}}zn(e,i,t,a)}else i=dg(r,e,t,a,o);return on(i)}Td=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=so(e.pendingLanes);r!==0&&(jl(e,r|1),vt(e,J()),!(P&6)&&(Tr=J()+500,Pe()))}break;case 13:or(function(){var o=ce(t,1);if(o!==null){var a=gt();Gt(o,t,1,a)}}),ss(t,1)}};El=function(t){if(t.tag===13){var e=ce(t,134217728);if(e!==null){var r=gt();Gt(e,t,134217728,r)}ss(t,134217728)}};Dd=function(t){if(t.tag===13){var e=je(t),r=ce(t,e);if(r!==null){var o=gt();Gt(r,t,e,o)}ss(t,e)}};Rd=function(){return D};Bd=function(t,e){var r=D;try{return D=t,e()}finally{D=r}};Ii=function(t,e,r){switch(e){case"input":if(Xi(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var a=bn(o);if(!a)throw Error(v(90));hd(o),Xi(o,a)}}}break;case"textarea":wd(t,r);break;case"select":e=r.value,e!=null&&Yr(t,!!r.multiple,e,!1)}};_d=os;Sd=or;var cg={usingClientEntryPoint:!1,Events:[Fo,hr,bn,Xd,Yd,os]},ro={findFiberByHostInstance:Ve,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mg={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ed(t),t===null?null:t.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||sg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{fn=ma.inject(mg),$t=ma}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg;It.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cs(e))throw Error(v(200));return lg(t,e,null,r)};It.createRoot=function(t,e){if(!cs(t))throw Error(v(299));var r=!1,o="",a=sm;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=ls(t,1,!1,null,null,r,!1,o,a),t[de]=e.current,Eo(t.nodeType===8?t.parentNode:t),new ds(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=Ed(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return or(t)};It.hydrate=function(t,e,r){if(!Yn(e))throw Error(v(200));return _n(null,t,e,!0,r)};It.hydrateRoot=function(t,e,r){if(!cs(t))throw Error(v(405));var o=r!=null&&r.hydratedSources||null,a=!1,n="",i=sm;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),e=lm(e,null,t,1,r??null,a,!1,n,i),t[de]=e.current,Eo(t),o)for(t=0;t<o.length;t++)r=o[t],a=r._getVersion,a=a(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,a]:e.mutableSourceEagerHydrationData.push(r,a);return new Xn(e)};It.render=function(t,e,r){if(!Yn(e))throw Error(v(200));return _n(null,t,e,!1,r)};It.unmountComponentAtNode=function(t){if(!Yn(t))throw Error(v(40));return t._reactRootContainer?(or(function(){_n(null,null,t,!1,function(){t._reactRootContainer=null,t[de]=null})}),!0):!1};It.unstable_batchedUpdates=os;It.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!Yn(r))throw Error(v(200));if(t==null||t._reactInternals===void 0)throw Error(v(38));return _n(t,e,r,!1,o)};It.version="18.3.1-next-f1338f8080-20240426";function dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dm)}catch(t){console.error(t)}}dm(),dd.exports=It;var fg=dd.exports,cm,A0=fg;cm=A0.createRoot,A0.hydrateRoot;const ms=L.createContext(null),pg=({children:t,defaultPath:e})=>{const[r,o]=L.useState(e),[a,n]=L.useState(null),i=(l,s)=>{o(l),n(s)};return d.jsx(ms.Provider,{value:{currentPath:r,navigate:i,currentProps:a},children:t})},Vo=()=>L.useContext(ms),gg=({children:t})=>{const{currentPath:e}=L.useContext(ms);return t.find(o=>o.props.path===e)},oo=({children:t})=>t,fs=t=>{const{path:e,className:r,children:o}=t,{navigate:a}=Vo();return d.jsx("a",{className:r,onClick:()=>{a(e,t)},children:o})},ug=({children:t,defaultPath:e})=>{const[r,o]=L.useState(!1);if(L.useEffect(()=>{o(!0)},[]),t)return r&&d.jsx(pg,{defaultPath:e,children:t})};var wt=function(){return wt=Object.assign||function(e){for(var r,o=1,a=arguments.length;o<a;o++){r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wt.apply(this,arguments)};function an(t,e,r){if(r||arguments.length===2)for(var o=0,a=e.length,n;o<a;o++)(n||!(o in e))&&(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}var Q="-ms-",yo="-moz-",T="-webkit-",mm="comm",Sn="rule",ps="decl",bg="@import",fm="@keyframes",hg="@layer",pm=Math.abs,gs=String.fromCharCode,cl=Object.assign;function xg(t,e){return at(t,0)^45?(((e<<2^at(t,0))<<2^at(t,1))<<2^at(t,2))<<2^at(t,3):0}function gm(t){return t.trim()}function oe(t,e){return(t=e.exec(t))?t[0]:t}function I(t,e,r){return t.replace(e,r)}function ja(t,e,r){return t.indexOf(e,r)}function at(t,e){return t.charCodeAt(e)|0}function Dr(t,e,r){return t.slice(e,r)}function Zt(t){return t.length}function um(t){return t.length}function mo(t,e){return e.push(t),t}function wg(t,e){return t.map(e).join("")}function N0(t,e){return t.filter(function(r){return!oe(r,e)})}var Cn=1,Rr=1,bm=0,Rt=0,$=0,Gr="";function jn(t,e,r,o,a,n,i,l){return{value:t,root:e,parent:r,type:o,props:a,children:n,line:Cn,column:Rr,length:i,return:"",siblings:l}}function be(t,e){return cl(jn("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function sr(t){for(;t.root;)t=be(t.root,{children:[t]});mo(t,t.siblings)}function kg(){return $}function yg(){return $=Rt>0?at(Gr,--Rt):0,Rr--,$===10&&(Rr=1,Cn--),$}function Ht(){return $=Rt<bm?at(Gr,Rt++):0,Rr++,$===10&&(Rr=1,Cn++),$}function Ze(){return at(Gr,Rt)}function Ea(){return Rt}function En(t,e){return Dr(Gr,t,e)}function ml(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vg(t){return Cn=Rr=1,bm=Zt(Gr=t),Rt=0,[]}function zg(t){return Gr="",t}function di(t){return gm(En(Rt-1,fl(t===91?t+2:t===40?t+1:t)))}function Xg(t){for(;($=Ze())&&$<33;)Ht();return ml(t)>2||ml($)>3?"":" "}function Yg(t,e){for(;--e&&Ht()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return En(t,Ea()+(e<6&&Ze()==32&&Ht()==32))}function fl(t){for(;Ht();)switch($){case t:return Rt;case 34:case 39:t!==34&&t!==39&&fl($);break;case 40:t===41&&fl(t);break;case 92:Ht();break}return Rt}function _g(t,e){for(;Ht()&&t+$!==57;)if(t+$===84&&Ze()===47)break;return"/*"+En(e,Rt-1)+"*"+gs(t===47?t:Ht())}function Sg(t){for(;!ml(Ze());)Ht();return En(t,Rt)}function Cg(t){return zg(Ia("",null,null,null,[""],t=vg(t),0,[0],t))}function Ia(t,e,r,o,a,n,i,l,s){for(var m=0,u=0,b=i,g=0,x=0,w=0,k=1,E=1,f=1,c=0,p="",h=a,X=n,z=o,y=p;E;)switch(w=c,c=Ht()){case 40:if(w!=108&&at(y,b-1)==58){ja(y+=I(di(c),"&","&\f"),"&\f",pm(m?l[m-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:y+=di(c);break;case 9:case 10:case 13:case 32:y+=Xg(w);break;case 92:y+=Yg(Ea()-1,7);continue;case 47:switch(Ze()){case 42:case 47:mo(jg(_g(Ht(),Ea()),e,r,s),s);break;default:y+="/"}break;case 123*k:l[m++]=Zt(y)*f;case 125*k:case 59:case 0:switch(c){case 0:case 125:E=0;case 59+u:f==-1&&(y=I(y,/\f/g,"")),x>0&&Zt(y)-b&&mo(x>32?P0(y+";",o,r,b-1,s):P0(I(y," ","")+";",o,r,b-2,s),s);break;case 59:y+=";";default:if(mo(z=O0(y,e,r,m,u,a,l,p,h=[],X=[],b,n),n),c===123)if(u===0)Ia(y,e,z,z,h,n,b,l,X);else switch(g===99&&at(y,3)===110?100:g){case 100:case 108:case 109:case 115:Ia(t,z,z,o&&mo(O0(t,z,z,0,0,a,l,p,a,h=[],b,X),X),a,X,b,l,o?h:X);break;default:Ia(y,z,z,z,[""],X,0,l,X)}}m=u=x=0,k=f=1,p=y="",b=i;break;case 58:b=1+Zt(y),x=w;default:if(k<1){if(c==123)--k;else if(c==125&&k++==0&&yg()==125)continue}switch(y+=gs(c),c*k){case 38:f=u>0?1:(y+="\f",-1);break;case 44:l[m++]=(Zt(y)-1)*f,f=1;break;case 64:Ze()===45&&(y+=di(Ht())),g=Ze(),u=b=Zt(p=y+=Sg(Ea())),c++;break;case 45:w===45&&Zt(y)==2&&(k=0)}}return n}function O0(t,e,r,o,a,n,i,l,s,m,u,b){for(var g=a-1,x=a===0?n:[""],w=um(x),k=0,E=0,f=0;k<o;++k)for(var c=0,p=Dr(t,g+1,g=pm(E=i[k])),h=t;c<w;++c)(h=gm(E>0?x[c]+" "+p:I(p,/&\f/g,x[c])))&&(s[f++]=h);return jn(t,e,r,a===0?Sn:l,s,m,u,b)}function jg(t,e,r,o){return jn(t,e,r,mm,gs(kg()),Dr(t,2,-2),0,o)}function P0(t,e,r,o,a){return jn(t,e,r,ps,Dr(t,0,o),Dr(t,o+1,-1),o,a)}function hm(t,e,r){switch(xg(t,e)){case 5103:return T+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return T+t+t;case 4789:return yo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return T+t+yo+t+Q+t+t;case 5936:switch(at(t,e+11)){case 114:return T+t+Q+I(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return T+t+Q+I(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return T+t+Q+I(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return T+t+Q+t+t;case 6165:return T+t+Q+"flex-"+t+t;case 5187:return T+t+I(t,/(\w+).+(:[^]+)/,T+"box-$1$2"+Q+"flex-$1$2")+t;case 5443:return T+t+Q+"flex-item-"+I(t,/flex-|-self/g,"")+(oe(t,/flex-|baseline/)?"":Q+"grid-row-"+I(t,/flex-|-self/g,""))+t;case 4675:return T+t+Q+"flex-line-pack"+I(t,/align-content|flex-|-self/g,"")+t;case 5548:return T+t+Q+I(t,"shrink","negative")+t;case 5292:return T+t+Q+I(t,"basis","preferred-size")+t;case 6060:return T+"box-"+I(t,"-grow","")+T+t+Q+I(t,"grow","positive")+t;case 4554:return T+I(t,/([^-])(transform)/g,"$1"+T+"$2")+t;case 6187:return I(I(I(t,/(zoom-|grab)/,T+"$1"),/(image-set)/,T+"$1"),t,"")+t;case 5495:case 3959:return I(t,/(image-set\([^]*)/,T+"$1$`$1");case 4968:return I(I(t,/(.+:)(flex-)?(.*)/,T+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+T+t+t;case 4200:if(!oe(t,/flex-|baseline/))return Q+"grid-column-align"+Dr(t,e)+t;break;case 2592:case 3360:return Q+I(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(o,a){return e=a,oe(o.props,/grid-\w+-end/)})?~ja(t+(r=r[e].value),"span",0)?t:Q+I(t,"-start","")+t+Q+"grid-row-span:"+(~ja(r,"span",0)?oe(r,/\d+/):+oe(r,/\d+/)-+oe(t,/\d+/))+";":Q+I(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(o){return oe(o.props,/grid-\w+-start/)})?t:Q+I(I(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return I(t,/(.+)-inline(.+)/,T+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zt(t)-1-e>6)switch(at(t,e+1)){case 109:if(at(t,e+4)!==45)break;case 102:return I(t,/(.+:)(.+)-([^]+)/,"$1"+T+"$2-$3$1"+yo+(at(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ja(t,"stretch",0)?hm(I(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return I(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,a,n,i,l,s,m){return Q+a+":"+n+m+(i?Q+a+"-span:"+(l?s:+s-+n)+m:"")+t});case 4949:if(at(t,e+6)===121)return I(t,":",":"+T)+t;break;case 6444:switch(at(t,at(t,14)===45?18:11)){case 120:return I(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+T+(at(t,14)===45?"inline-":"")+"box$3$1"+T+"$2$3$1"+Q+"$2box$3")+t;case 100:return I(t,":",":"+Q)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(t,"scroll-","scroll-snap-")+t}return t}function nn(t,e){for(var r="",o=0;o<t.length;o++)r+=e(t[o],o,t,e)||"";return r}function Eg(t,e,r,o){switch(t.type){case hg:if(t.children.length)break;case bg:case ps:return t.return=t.return||t.value;case mm:return"";case fm:return t.return=t.value+"{"+nn(t.children,o)+"}";case Sn:if(!Zt(t.value=t.props.join(",")))return""}return Zt(r=nn(t.children,o))?t.return=t.value+"{"+r+"}":""}function Ig(t){var e=um(t);return function(r,o,a,n){for(var i="",l=0;l<e;l++)i+=t[l](r,o,a,n)||"";return i}}function Ag(t){return function(e){e.root||(e=e.return)&&t(e)}}function Ng(t,e,r,o){if(t.length>-1&&!t.return)switch(t.type){case ps:t.return=hm(t.value,t.length,r);return;case fm:return nn([be(t,{value:I(t.value,"@","@"+T)})],o);case Sn:if(t.length)return wg(r=t.props,function(a){switch(oe(a,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sr(be(t,{props:[I(a,/:(read-\w+)/,":"+yo+"$1")]})),sr(be(t,{props:[a]})),cl(t,{props:N0(r,o)});break;case"::placeholder":sr(be(t,{props:[I(a,/:(plac\w+)/,":"+T+"input-$1")]})),sr(be(t,{props:[I(a,/:(plac\w+)/,":"+yo+"$1")]})),sr(be(t,{props:[I(a,/:(plac\w+)/,Q+"input-$1")]})),sr(be(t,{props:[a]})),cl(t,{props:N0(r,o)});break}return""})}}var Og={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yt={},Br=typeof process<"u"&&Yt!==void 0&&(Yt.REACT_APP_SC_ATTR||Yt.SC_ATTR)||"data-styled",xm="active",wm="data-styled-version",In="6.1.13",us=`/*!sc*/
`,ln=typeof window<"u"&&"HTMLElement"in window,Pg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yt.REACT_APP_SC_DISABLE_SPEEDY!==""?Yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yt!==void 0&&Yt.SC_DISABLE_SPEEDY!==void 0&&Yt.SC_DISABLE_SPEEDY!==""&&Yt.SC_DISABLE_SPEEDY!=="false"&&Yt.SC_DISABLE_SPEEDY),An=Object.freeze([]),Mr=Object.freeze({});function Lg(t,e,r){return r===void 0&&(r=Mr),t.theme!==r.theme&&t.theme||e||r.theme}var km=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Dg=/(^-|-$)/g;function L0(t){return t.replace(Tg,"-").replace(Dg,"")}var Rg=/(a)(d)/gi,fa=52,T0=function(t){return String.fromCharCode(t+(t>25?39:97))};function pl(t){var e,r="";for(e=Math.abs(t);e>fa;e=e/fa|0)r=T0(e%fa)+r;return(T0(e%fa)+r).replace(Rg,"$1-$2")}var ci,ym=5381,Xr=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},vm=function(t){return Xr(ym,t)};function Bg(t){return pl(vm(t)>>>0)}function Mg(t){return t.displayName||t.name||"Component"}function mi(t){return typeof t=="string"&&!0}var zm=typeof Symbol=="function"&&Symbol.for,Xm=zm?Symbol.for("react.memo"):60115,Ug=zm?Symbol.for("react.forward_ref"):60112,Fg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ym={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vg=((ci={})[Ug]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ci[Xm]=Ym,ci);function D0(t){return("type"in(e=t)&&e.type.$$typeof)===Xm?Ym:"$$typeof"in t?Vg[t.$$typeof]:Fg;var e}var Gg=Object.defineProperty,Hg=Object.getOwnPropertyNames,R0=Object.getOwnPropertySymbols,qg=Object.getOwnPropertyDescriptor,Wg=Object.getPrototypeOf,B0=Object.prototype;function _m(t,e,r){if(typeof e!="string"){if(B0){var o=Wg(e);o&&o!==B0&&_m(t,o,r)}var a=Hg(e);R0&&(a=a.concat(R0(e)));for(var n=D0(t),i=D0(e),l=0;l<a.length;++l){var s=a[l];if(!(s in Qg||r&&r[s]||i&&s in i||n&&s in n)){var m=qg(e,s);try{Gg(t,s,m)}catch{}}}}return t}function Ur(t){return typeof t=="function"}function bs(t){return typeof t=="object"&&"styledComponentId"in t}function qe(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function M0(t,e){if(t.length===0)return"";for(var r=t[0],o=1;o<t.length;o++)r+=t[o];return r}function Ro(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function gl(t,e,r){if(r===void 0&&(r=!1),!r&&!Ro(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var o=0;o<e.length;o++)t[o]=gl(t[o],e[o]);else if(Ro(e))for(var o in e)t[o]=gl(t[o],e[o]);return t}function hs(t,e){Object.defineProperty(t,"toString",{value:e})}function Go(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Kg=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,o=0;o<e;o++)r+=this.groupSizes[o];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,n=a;e>=n;)if((n<<=1)<0)throw Go(16,"".concat(e));this.groupSizes=new Uint32Array(n),this.groupSizes.set(o),this.length=n;for(var i=a;i<n;i++)this.groupSizes[i]=0}for(var l=this.indexOfGroup(e+1),s=(i=0,r.length);i<s;i++)this.tag.insertRule(l,r[i])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],o=this.indexOfGroup(e),a=o+r;this.groupSizes[e]=0;for(var n=o;n<a;n++)this.tag.deleteRule(o)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var o=this.groupSizes[e],a=this.indexOfGroup(e),n=a+o,i=a;i<n;i++)r+="".concat(this.tag.getRule(i)).concat(us);return r},t}(),Aa=new Map,sn=new Map,Na=1,pa=function(t){if(Aa.has(t))return Aa.get(t);for(;sn.has(Na);)Na++;var e=Na++;return Aa.set(t,e),sn.set(e,t),e},Zg=function(t,e){Na=e+1,Aa.set(t,e),sn.set(e,t)},Jg="style[".concat(Br,"][").concat(wm,'="').concat(In,'"]'),$g=new RegExp("^".concat(Br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tu=function(t,e,r){for(var o,a=r.split(","),n=0,i=a.length;n<i;n++)(o=a[n])&&t.registerName(e,o)},eu=function(t,e){for(var r,o=((r=e.textContent)!==null&&r!==void 0?r:"").split(us),a=[],n=0,i=o.length;n<i;n++){var l=o[n].trim();if(l){var s=l.match($g);if(s){var m=0|parseInt(s[1],10),u=s[2];m!==0&&(Zg(u,m),tu(t,u,s[3]),t.getTag().insertRules(m,a)),a.length=0}else a.push(l)}}},U0=function(t){for(var e=document.querySelectorAll(Jg),r=0,o=e.length;r<o;r++){var a=e[r];a&&a.getAttribute(Br)!==xm&&(eu(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function ru(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sm=function(t){var e=document.head,r=t||e,o=document.createElement("style"),a=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Br,"]")));return s[s.length-1]}(r),n=a!==void 0?a.nextSibling:null;o.setAttribute(Br,xm),o.setAttribute(wm,In);var i=ru();return i&&o.setAttribute("nonce",i),r.insertBefore(o,n),o},ou=function(){function t(e){this.element=Sm(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,a=0,n=o.length;a<n;a++){var i=o[a];if(i.ownerNode===r)return i}throw Go(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),au=function(){function t(e){this.element=Sm(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),nu=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),F0=ln,iu={isServer:!ln,useCSSOMInjection:!Pg},Cm=function(){function t(e,r,o){e===void 0&&(e=Mr),r===void 0&&(r={});var a=this;this.options=wt(wt({},iu),e),this.gs=r,this.names=new Map(o),this.server=!!e.isServer,!this.server&&ln&&F0&&(F0=!1,U0(this)),hs(this,function(){return function(n){for(var i=n.getTag(),l=i.length,s="",m=function(b){var g=function(f){return sn.get(f)}(b);if(g===void 0)return"continue";var x=n.names.get(g),w=i.getGroup(b);if(x===void 0||!x.size||w.length===0)return"continue";var k="".concat(Br,".g").concat(b,'[id="').concat(g,'"]'),E="";x!==void 0&&x.forEach(function(f){f.length>0&&(E+="".concat(f,","))}),s+="".concat(w).concat(k,'{content:"').concat(E,'"}').concat(us)},u=0;u<l;u++)m(u);return s}(a)})}return t.registerId=function(e){return pa(e)},t.prototype.rehydrate=function(){!this.server&&ln&&U0(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(wt(wt({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var o=r.useCSSOMInjection,a=r.target;return r.isServer?new nu(a):o?new ou(a):new au(a)}(this.options),new Kg(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(pa(e),this.names.has(e))this.names.get(e).add(r);else{var o=new Set;o.add(r),this.names.set(e,o)}},t.prototype.insertRules=function(e,r,o){this.registerName(e,r),this.getTag().insertRules(pa(e),o)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(pa(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),lu=/&/g,su=/^\s*\/\/.*$/gm;function jm(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(o){return"".concat(e," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=jm(r.children,e)),r})}function du(t){var e,r,o,a=Mr,n=a.options,i=n===void 0?Mr:n,l=a.plugins,s=l===void 0?An:l,m=function(g,x,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(e):g},u=s.slice();u.push(function(g){g.type===Sn&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(lu,r).replace(o,m))}),i.prefix&&u.push(Ng),u.push(Eg);var b=function(g,x,w,k){x===void 0&&(x=""),w===void 0&&(w=""),k===void 0&&(k="&"),e=k,r=x,o=new RegExp("\\".concat(r,"\\b"),"g");var E=g.replace(su,""),f=Cg(w||x?"".concat(w," ").concat(x," { ").concat(E," }"):E);i.namespace&&(f=jm(f,i.namespace));var c=[];return nn(f,Ig(u.concat(Ag(function(p){return c.push(p)})))),c};return b.hash=s.length?s.reduce(function(g,x){return x.name||Go(15),Xr(g,x.name)},ym).toString():"",b}var cu=new Cm,ul=du(),Em=Ct.createContext({shouldForwardProp:void 0,styleSheet:cu,stylis:ul});Em.Consumer;Ct.createContext(void 0);function Q0(){return L.useContext(Em)}var mu=function(){function t(e,r){var o=this;this.inject=function(a,n){n===void 0&&(n=ul);var i=o.name+n.hash;a.hasNameForId(o.id,i)||a.insertRules(o.id,i,n(o.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,hs(this,function(){throw Go(12,String(o.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ul),this.name+e.hash},t}(),fu=function(t){return t>="A"&&t<="Z"};function V0(t){for(var e="",r=0;r<t.length;r++){var o=t[r];if(r===1&&o==="-"&&t[0]==="-")return t;fu(o)?e+="-"+o.toLowerCase():e+=o}return e.startsWith("ms-")?"-"+e:e}var Im=function(t){return t==null||t===!1||t===""},Am=function(t){var e,r,o=[];for(var a in t){var n=t[a];t.hasOwnProperty(a)&&!Im(n)&&(Array.isArray(n)&&n.isCss||Ur(n)?o.push("".concat(V0(a),":"),n,";"):Ro(n)?o.push.apply(o,an(an(["".concat(a," {")],Am(n),!1),["}"],!1)):o.push("".concat(V0(a),": ").concat((e=a,(r=n)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in Og||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Je(t,e,r,o){if(Im(t))return[];if(bs(t))return[".".concat(t.styledComponentId)];if(Ur(t)){if(!Ur(n=t)||n.prototype&&n.prototype.isReactComponent||!e)return[t];var a=t(e);return Je(a,e,r,o)}var n;return t instanceof mu?r?(t.inject(r,o),[t.getName(o)]):[t]:Ro(t)?Am(t):Array.isArray(t)?Array.prototype.concat.apply(An,t.map(function(i){return Je(i,e,r,o)})):[t.toString()]}function pu(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(Ur(r)&&!bs(r))return!1}return!0}var gu=vm(In),uu=function(){function t(e,r,o){this.rules=e,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&pu(e),this.componentId=r,this.baseHash=Xr(gu,r),this.baseStyle=o,Cm.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,o){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))a=qe(a,this.staticRulesId);else{var n=M0(Je(this.rules,e,r,o)),i=pl(Xr(this.baseHash,n)>>>0);if(!r.hasNameForId(this.componentId,i)){var l=o(n,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,l)}a=qe(a,i),this.staticRulesId=i}else{for(var s=Xr(this.baseHash,o.hash),m="",u=0;u<this.rules.length;u++){var b=this.rules[u];if(typeof b=="string")m+=b;else if(b){var g=M0(Je(b,e,r,o));s=Xr(s,g+u),m+=g}}if(m){var x=pl(s>>>0);r.hasNameForId(this.componentId,x)||r.insertRules(this.componentId,x,o(m,".".concat(x),void 0,this.componentId)),a=qe(a,x)}}return a},t}(),Nm=Ct.createContext(void 0);Nm.Consumer;var fi={};function bu(t,e,r){var o=bs(t),a=t,n=!mi(t),i=e.attrs,l=i===void 0?An:i,s=e.componentId,m=s===void 0?function(h,X){var z=typeof h!="string"?"sc":L0(h);fi[z]=(fi[z]||0)+1;var y="".concat(z,"-").concat(Bg(In+z+fi[z]));return X?"".concat(X,"-").concat(y):y}(e.displayName,e.parentComponentId):s,u=e.displayName,b=u===void 0?function(h){return mi(h)?"styled.".concat(h):"Styled(".concat(Mg(h),")")}(t):u,g=e.displayName&&e.componentId?"".concat(L0(e.displayName),"-").concat(e.componentId):e.componentId||m,x=o&&a.attrs?a.attrs.concat(l).filter(Boolean):l,w=e.shouldForwardProp;if(o&&a.shouldForwardProp){var k=a.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;w=function(h,X){return k(h,X)&&E(h,X)}}else w=k}var f=new uu(r,g,o?a.componentStyle:void 0);function c(h,X){return function(z,y,S){var M=z.attrs,N=z.componentStyle,zt=z.defaultProps,Le=z.foldedComponentIds,Te=z.styledComponentId,Ho=z.target,Pn=Ct.useContext(Nm),Hr=Q0(),De=z.shouldForwardProp||Hr.shouldForwardProp,Y=Lg(y,Pn,zt)||Mr,C=function(pe,Xt,ee){for(var qr,Be=wt(wt({},Xt),{className:void 0,theme:ee}),Ln=0;Ln<pe.length;Ln+=1){var qo=Ur(qr=pe[Ln])?qr(Be):qr;for(var ge in qo)Be[ge]=ge==="className"?qe(Be[ge],qo[ge]):ge==="style"?wt(wt({},Be[ge]),qo[ge]):qo[ge]}return Xt.className&&(Be.className=qe(Be.className,Xt.className)),Be}(M,y,Y),j=C.as||Ho,R={};for(var B in C)C[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&C.theme===Y||(B==="forwardedAs"?R.as=C.forwardedAs:De&&!De(B,j)||(R[B]=C[B]));var Re=function(pe,Xt){var ee=Q0(),qr=pe.generateAndInjectStyles(Xt,ee.styleSheet,ee.stylis);return qr}(N,C),Bt=qe(Le,Te);return Re&&(Bt+=" "+Re),C.className&&(Bt+=" "+C.className),R[mi(j)&&!km.has(j)?"class":"className"]=Bt,R.ref=S,L.createElement(j,R)}(p,h,X)}c.displayName=b;var p=Ct.forwardRef(c);return p.attrs=x,p.componentStyle=f,p.displayName=b,p.shouldForwardProp=w,p.foldedComponentIds=o?qe(a.foldedComponentIds,a.styledComponentId):"",p.styledComponentId=g,p.target=o?a.target:t,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=o?function(X){for(var z=[],y=1;y<arguments.length;y++)z[y-1]=arguments[y];for(var S=0,M=z;S<M.length;S++)gl(X,M[S],!0);return X}({},a.defaultProps,h):h}}),hs(p,function(){return".".concat(p.styledComponentId)}),n&&_m(p,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function G0(t,e){for(var r=[t[0]],o=0,a=e.length;o<a;o+=1)r.push(e[o],t[o+1]);return r}var H0=function(t){return Object.assign(t,{isCss:!0})};function Om(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(Ur(t)||Ro(t))return H0(Je(G0(An,an([t],e,!0))));var o=t;return e.length===0&&o.length===1&&typeof o[0]=="string"?Je(o):H0(Je(G0(o,e)))}function bl(t,e,r){if(r===void 0&&(r=Mr),!e)throw Go(1,e);var o=function(a){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return t(e,r,Om.apply(void 0,an([a],n,!1)))};return o.attrs=function(a){return bl(t,e,wt(wt({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},o.withConfig=function(a){return bl(t,e,wt(wt({},r),a))},o}var Pm=function(t){return bl(bu,t)},A=Pm;km.forEach(function(t){A[t]=Pm(t)});const hu=A.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,xu=A.div`
  width: 125px;
  margin-bottom: 50px;
`,wu=A.div`
  margin-right: 13px;
  padding: 20px;
  min-width: 251px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ku=A.div`
  margin-top: 47px;
  width: 230px;
  height: 64px;
  padding: 19px 16px;
  box-sizing: border-box;
  background-color: #fafafb;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #e2e2ea;
`,yu=A.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,xs=A.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1px;
  box-sizing: border-box;
  padding: 23px 20px;
  color: #92929d;
`,vu=A(xs)`
  color: black;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1px;
`,zu=A(xs)`
  color: #92929d;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.06px;
`,pi=A(fs)`
  width: 100%;
  margin-top: 8.57px;

  box-sizing: border-box;
  padding: 8px 20px;
  color: black;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #76ccfb;
  }

  color: ${({path:t,active:e})=>t===e&&"#76ccfb"};
`,gi=A.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;var Lm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},q0=Ct.createContext&&Ct.createContext(Lm),Xu=["attr","size","title"];function Yu(t,e){if(t==null)return{};var r=_u(t,e),o,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)o=n[a],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}function _u(t,e){if(t==null)return{};var r={};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){if(e.indexOf(o)>=0)continue;r[o]=t[o]}return r}function dn(){return dn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},dn.apply(this,arguments)}function W0(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,o)}return r}function cn(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?W0(Object(r),!0).forEach(function(o){Su(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W0(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Su(t,e,r){return e=Cu(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Cu(t){var e=ju(t,"string");return typeof e=="symbol"?e:e+""}function ju(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Tm(t){return t&&t.map((e,r)=>Ct.createElement(e.tag,cn({key:r},e.attr),Tm(e.child)))}function ir(t){return e=>Ct.createElement(Eu,dn({attr:cn({},t.attr)},e),Tm(t.child))}function Eu(t){var e=r=>{var{attr:o,size:a,title:n}=t,i=Yu(t,Xu),l=a||r.size||"1em",s;return r.className&&(s=r.className),t.className&&(s=(s?s+" ":"")+t.className),Ct.createElement("svg",dn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,i,{className:s,style:cn(cn({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&Ct.createElement("title",null,n),t.children)};return q0!==void 0?Ct.createElement(q0.Consumer,null,r=>e(r)):e(Lm)}function Iu(t){return ir({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"},child:[]}]})(t)}function Au(t){return ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"},child:[]}]})(t)}function Nu(t){return ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"},child:[]}]})(t)}function ao(t){return ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"},child:[]}]})(t)}function K0(t){return ir({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448zM248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39zm16-119.7L315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39z"},child:[]},{tag:"path",attr:{d:"M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.81 343.81 0 0 0 67.24-77.4zM256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352z"},child:[]}]})(t)}function Z0(t){return ir({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"256",r:"64"},child:[]},{tag:"path",attr:{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"},child:[]}]})(t)}function Ou(t){return ir({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155.3 155.3 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z"},child:[]}]})(t)}const Pu=()=>d.jsx("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 4.89034L10.2929 0.555519C10.6834 0.161181 11.3166 0.161181 11.7071 0.555519C12.0976 0.949857 12.0976 1.58921 11.7071 1.98354L6.70711 7.03237C6.31658 7.42671 5.68342 7.42671 5.29289 7.03237L0.292893 1.98354C-0.0976311 1.58921 -0.0976311 0.949857 0.292893 0.555519C0.683418 0.161181 1.31658 0.161181 1.70711 0.555519L6 4.89034Z",fill:"#92929D"})}),Lu=()=>{const{currentPath:t}=Vo();return d.jsxs(wu,{children:[d.jsxs(ku,{children:[d.jsx(Au,{size:30,color:"#92929D"}),d.jsxs("div",{children:[d.jsx(vu,{children:"Te-Entrego"}),d.jsx("br",{}),d.jsx(zu,{children:"te-entrego.com"})]}),d.jsx(Pu,{})]}),d.jsxs(yu,{children:[d.jsx(xs,{children:" MENU"}),d.jsx(pi,{path:"orders",active:t,children:d.jsxs(d.Fragment,{children:[d.jsx(gi,{children:d.jsx(Iu,{color:"#92929D",size:19})}),"Pedidos"]})}),d.jsx(pi,{path:"shipments",active:t,children:d.jsxs(d.Fragment,{children:[d.jsx(gi,{children:d.jsx(Nu,{color:"#92929D",size:19})}),"Mis envíos"]})}),d.jsx(pi,{path:"config",active:t,children:d.jsxs(d.Fragment,{children:[d.jsx(gi,{children:d.jsx(Ou,{color:"#92929D",size:19})}),"Configuracíon"]})})]})]})},Nn=({size:t=121})=>{function e(i,l,s){return i*s/l}const r=t,n=e(r,121,47);return d.jsxs("svg",{width:t,height:n,viewBox:`0 0 ${t} ${n}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[d.jsx("rect",{width:r,height:n,fill:"url(#pattern0_91_1128)"}),d.jsxs("defs",{children:[d.jsx("pattern",{id:"pattern0_91_1128",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:d.jsx("use",{xlinkHref:"#image0_91_1128",transform:"matrix(0.0025 0 0 0.00643617 0 -0.00202128)"})}),d.jsx("image",{id:"image0_91_1128",width:"400",height:"156",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACcCAYAAABRCv0DAAAgAElEQVR4Ae1dB3jd1L03dL/Xvi5GSBwPHcW2jpwQGtZjZZBJBnGsI19dO45DgdKW0ZbRstqUsukrlFWgpQVKGaFAIbm6CSEkkMFKKKO0rEAg9tV1hhM7cWzHSfT460q2rqxxZF/b1/bx9+nT1dGZP8nnp3P+KyeH/TEEGAIMAYYAQ4AhwBBgCDAEGAIMAYYAQ4AhwBBgCDAEGAIMAYYAQ4AhwBBgCDAEsgCBCav0L1bEteOi8eT3o7Hkb6Kq9piiamsUVXtPUbWkomq7bEd9RNU+VFTtlUhMezKqardEVe2Hkbg2gaza+vUsGA7rAkOAIcAQYAj0JgLRWCJfiSeqTLL4RFE1vedHslZRE89FYonzlHj9mN7sP6ubIcAQYAgwBPoQgUWL9EOjseSZipp8SlG1pp4TRiDprI6oiXOiSz/9dh8OkzXFEGAIMAQYAplCYPaSxH8pauInSizxZh+QhstKBlYmyWsjca0gU2Ni9TAEGAIMAYZALyJAFutfUNTkBYqqfdQ/xJG+QomqWrOiJm+NPLdteC8Om1XNEGAIMAQYAj1BILqsfrIS1zZkA3G49GGrEtd+1JPxsbIMAYYAQ4AhkGEEyOJ3vxyNJX7vMmm7bC2lrxD6ukxUTS6fvzxZmGEIWHUMAYYAQ4AhEBYBJV7/v4qqvdvXRNDD9rZH1URl2LGy/AwBhgBDgCGQIQSUmLZQUbXWHk7m/blK+W2GoGDVMAQYAgwBhgAtAhE1cd0AJo4O0gLDxJpVn3yVdtwsH0OAIcAQYAj0AAElpt01GMjDGkNETa6doX74lR5AwooyBBgCDAGGQBACg4087CTCViJBT5/dZwgwBBgC3URAUbWbrAl3UJ5jiRVgOd9NeFgxhgBDgCHAEHBDIBJPXjgoScPpjyuWeMRt/CyNIcAQYAgwBLqBQHSpNnFIkEcHmSSu7AZMrAhDgCHAEGAI2BGYvzx5hKJqO4YWgWg6uIq348B+MwQYAgwBhkBIBJSYtnSokYc5Xq3m6U++FRIulp0hwBBgCDAEAIFoXKsZouRh2Yn8mb0JDAGGAEOAIRASAbKi4ZuKqjUOcQLRI0vrTwoJHcvOEGAIMASyH4Gzntn2jcpYcnQkloxG4omronHtzqia+JsS1x43DlV7UIlr/xeJJ36qxBLTw8TGGKz2HqEJMZZ4M/vfBNZDhgBDgCFAgQDEtQC35NG49lBU1T4NOSEeiKraa0Z8jGXazHM36F9ya7IiVlukqNqBkHVb2z6D7gwE7YYTS2MIMAQYAgMCAVClBdLIZFjYiKp9qKjaLyFWuR0EYxXTodLav+7Xs4HEIjHtYy+ytePGfjMEGAIMgaxCoFJNntgHmlCNEVW7EeJ6gOZRNkza2daHaDwZyaoXg3WGIcAQYAh4IWDEFO9rp4UQvzyuvZBtk3dW9CeeWOf1rFg6Q4AhwBDIGgRA4K2o2vtZMXGyrawOmU40Vjs2a14S1hGGAEOAIeBEQIklL2fE0Sl3iS6r1+HICkxi2s3O58WuGQIMAYZAViDAVGc1XYkl9Mrl2/TqNc16zSv79KoXm/ZXvbTnAPyufmlPikxiif4ilPey4kVhnWAIMAQYAnYEIrHEn7LiK7s/tqyAEOJJver5HfrC1w/o1ev27pv7wJs7Tjrvri2jp13cOGbGpU2nXHR/suzR9xprXmvfD2RSuWJ7v5BIxbL6o+3Pjf1mCDAEGAL9ikA0lvzdkCWPeNJYWdS8tl+PxJN7pt30XOJ70qI6rnhefe5Rp7eNPOr0g8YxfPI+JMrbj43ekJxx+4vbo8/v2Ltww0F9/qpdfU0kl/Xry8IaZwgwBBgCFgLRWPKiIUcesE21YruxRVW9tnlf2UPv7Djlwj8lhJN/UDsyd2pj7pGT9nNFZTrCJO0oHHWmPuLw8e35+TN3j57ys60Tr1q8jTz5cdOC9a37F6xr0aPxpLEF1st4Pms9O3ZmCDAEGAL9hoBh49EfW0b90WYsYUzwIMdY+Pp+vfL5Hc0zfvdC/bjItbVcSfnW4d85ZU9+3nSdK56nI1FOI440IhFlHcglb8RUffhhp+3mj45uO/Hs25Nz/ryxoXrt3v01r7anViW9JyfZxOKn99u/DGuYIcAQAATIYv0LC1/bvwkm1LTjxd16NcUxf3WTPn91o546w2+vo1GvWrWrywFlq17Y1Sdf7anVRpsh35Ce+LBh/M8frhXH/7gud/jk7bnDJukF3Cx/0nCsRAxCAZIRJD0/f4aee8SEg/nc7IaxZ16ZnHKjulVZVt+0cIOuV7+0W48u35rxVUlVvK6YvcUMAYYAQ6DXEUAi4bnS8mN5keBRpRVCQVF5SX7+7MLxv3jk+rJH/6PP+uNrTfZjzgNvtpz54FttZz74Vqvn8cCbrWV/e/dA+WPv6fMe/Y/38ci/denx93X5yY918vdN6cfiD/WKZ7e0zl/ddNDY8umFL3aQT4BQPPr8jj2z7lxTf3z1LbWjjo4mRx41uQVWEEAAvqsNTJoQlv7AY/I3hEl72krETirmqiR32OkHRuZO3SOc/IPtp/30L1vLHvl344L1rW2wKjGIJEMrrwpVm9HrLw5rgCHAEBjaCCCR3IYw2Zf6Yib7kUj2I0wOIEySHCbtHCY6h8k++4FKK/aj0ZEDxhl+exz8GOXgqKOjut/Bj4nqo8ZW6kXHzNeLjqlKO/jREZ0fozRMu+W5XdVr9x4ELageyw5gm2pZvb5gfSsc7dLfNzVOuuqJZOnUn2n5BTMbRhw+vrUQzfHenuokhQ0Iy5cUF0eGW28Qj8tFHpMbECafeBKJWT4/b4aee+TEFl6UdxynXF8/47ZV26PPbWsD7S1YeYGqcI/GGtd+ZPWLnRkCDAGGQMYRKMTkeJ+Jrhn28Qv5OXohf6bjgLTgowDN0emO2XoB53KgObD1o/OjI5r89ObG+S829WhShYl54avtYLexb/YfXt16wsJba/mjK7Xcw8c3wmrDTSjuwKcNYelxXpSn5eTkHOL1QIqL53wDCVI1h8mLjvLpxCRIOpDViMPHg7ykqXTyT+onXvn4Vvkfn+4Cja8F6/bqlc9t0yOxuvDjjiVu8OofS2cIMAQYAj1GYBQmY7tMcIKkF6DZjfmFs3YXotk61UFBJh1ENOpMHTSVPA8gq1Fzjck8JYieohcWl9WXP/5BA8hhQn2VgybVc9v0BWv36qBOW7G0bufkX/8jMeaMn2/Jzz9j24jDxx/ILziDZptqExLlqzmhfFRY0Hmh4kQeS/cjTHZ2wdpazZjbWyNHTAUyaeaPrgShuzbnTxt2Vq/b23bWhoN61coGww6FemUST/wxbF9ZfoYAQ4AhEAoBHkuXI0wakCjvRoLUmF8wq57DZPOo783X0ehIG83BYdJSKEh7C+HscRh5SuY1FxSXBRzzmgtGzd2Tz83enZd/RlN+4ezd4694bEf1mub2aJzWXUjK4A8m3uq1zS1z7t+4/aQf3l1XfPxZ2sjhU3aPHD75gLHa8NWkIvs5TJ7lsSxjTL4cClSXzKg0MhIJ0mUIk3c8iQQIRZR1ILXcIyfuLyya2zD2zKvqp96o1kdUrRlWJSB0p9rKi2uPu3SDJTEEGAIMgcwikDc6+u3colkjCg6fMOyYMy7OL1/8wUfzHv9An/PAP3fP+cs/m4wz/PY4Zt776s4z7nllx8x7XmnwPO59tWHGnWu3Tb9tdf2M21/c6nnc8dLW6be+UD/1pmWJyTeotWc+8FbT/NWNB6LL6DSVFqxt1he83HZQfnbLninXq4ljyq6uKywu2zbiiAl78wtmpm8hWSuA9PMnvCDdyJWQ0ZlF2apt0aFIkOfCVpgpb/LsE6gLjxw26eDIEVOahZPP23rKhX/aWvbwv3YuWNeyr+aVNmN15bMiYbYgFuTszBBgCPQNAjWrGk+sebnNsFOofrHJVNeFs8/x0h59wZo9+gI4exyw/bRgTbOxnQRbSt5Hs7H3X7O+Va95udVo33BU6CVUjiX0qpU7dZhQq9e3HCx7+F/bTrngj3XFJ5xdO+LIibtyj5xkbIn5fvWnCGQFh6VKkF/0DdI5OYXFpBjICmGyya9/XEm5DkL3EYed2sIJ0o5jleuTM25bvaPy+R0tC19rNzBy0VKL9dU4WDsMAYYAQ8BAoGrVrlsiS7shtM2Q+imVjAM0qZZvNbZzztqo69EVO5qm/XZFclz5r7YUFpVtHXH4+BbD4K+kPEgFN4EwuYMXKr7Xn49/zJj5/81juSpQ6I6JYY8CigW5wyfvFCddkJx01RP18jOf7Vq4UdfB0h1kPrAqqVhS+/f+HBNrmyHAEBiCCCixuleoJvG+JAxbWzBB1ry6D7ap2ssfe2/X+EsfrBMnnJ/Iy53akDts0n5DBddPtpFSWV6LMDk3VyTfybZHzJeQ8QjL9yBMGj1XJSB0LynX80ZM0cFepWhc9fYTz/59cvZ9rzfMX7OnBTTNqtc1359tY2P9YQgwBAYxAsqSxGGKqu3JPgJJGFtoNa+169HntrfOuG1V8rjoDXVIrEjmHjlpb97IaZ5yBPskzGOyA2FpQBjY5QvzjuIE6ScIkw32Mbj9LiicpY84YnxbAT9n59gzr9o2/Xcr90ae+XTRIH5V2dAYAgyBbENAeTZxSraQR8RQwd1uGfwdKH/iw4YJlz+aGD3porq8kdN35R4+fj+oBhuW4ulCcD8yaUaYrEdYvrBg7NxvZRv+Hv05BEiPw+SJDoNPj/GCZtnIYafrefkz9qGjo+/l5U67KD9/2lEe9bJkhgBDgCGQOQQWrNlT3a/yD9OZIRj8gQru/Jf2tMy655VtJyz4bS0aXZEc/t1Tm/JyTYM//20qPxKx7tUigVzJ8+TwzCHYuzWBHQqH5et9Ld1Nm5KCwpTGGTdq7rbi4xc+MfXm5bfMf6npnJqN+qlkRcM3e7enrHaGAENgyCFQ9VLT2We/oxu+ocA/lHFsOKiDVlZvOPyzr3ag/gXrW3SwdZCf3tw06ZdP1o2ZcUldPjdrW+6wSQcKQAU3gDR4TP7DC9KPOCyfhTB51227xyVNQ6L8G9gyGigP3BK6I0xecBmPRZAdZ1AHzss/Qy+ddKE+8arH28lTm9+q2XDg4er1bWXMa+9AeeqsnwwBHwQ4US7nsXwFj8nP7Acnyj/nBPJDvy0XTpAn86L8U5g8eYF8HyZQr8O6b2j9iCTKmcfww06NjCu76sGp1zyzdeJlD2vWMeHih2qn3qAmo8/v2G9o+NgE2nYC6NZvQwW3QTfcm69uaplz32tbTzznjrqiY2u03KMmN48cPvkgCIsDJskDYFPBlUrz7PBOmDDhiwiTGg6TVwLKG/WDfIQX5VtBtdZeT7b/5jA5hRfJ3Sn5TnpskrRxC1JK6D58cnvRuOoDJ559uz77vldbq1btemPhK+2XsFVJtj9p1j+GgAcCSJCuSftnd9nj5jD5J8eRLlsPCEsXB5Wluc+XVuh5edPBlcbu3CMnNlnHiCMm7IKtoxO+//udVat2HTRsMnpCIpYzw3V7gTgOyM982jT5mmeSY2ddXltQOHv7iMNOawGhcJBsA1YbSCTXciUVRR6wdiTzWCIIk5docECYtCBM7i0UKwZUWNiSkrLvwkcEwuQ133GCqxpulj7iu6e25XOzWo6efcX+KdfF9Egs8XHNq/vO6wCN/WAIMAQGAgKLDjVcibiQRpeJQJDnOkeEMNnVJR9NXW55BEnnwH254wC5Q17hzL1nPvR24/xVjeH8URlkk/IsW/XCTsOZYfX6lv1z//rOtlPOv29L8XEL60YcPr5h5FGnGw4bg8bCCWQ5EALPz/iKE4uga16UZyNMVgS1Yd4/iETy0EAjEsAAiWQ6EsiTQe7lwUkm4D7iiIl7ik/4vn7qhX/Uyx99f0nlqh25QViy+wwBhkCWIIAwidFMagWjy0ucXUaYLKMpG5SHF2W9sKhMzy+cme4ZF83Rh3/rZJ0fW7mLPL15b9XzDaEIBFYsYIUOBn/K8q2N025erh1TdnVtwai59blHTtwHBn8UMTc0hMnNnFhxnHP83blGojwR/FwFYdJxXyBPjhLk07rTVn+WAffyIN9BmNR2jMX54QByJdjeGjlNzz1iIrju18eRa7ZMu3lFeX/2nbXNEGAIUCJQVERGmMZjK3iRPAdf2dZhCkqf5kqlWW7VpcqSv6TUU8lLYM1sWjSvhm0bkAHwmLwKZ6+DH13xSgE3ayNXVPZ2yUnnbCk5bmGy5LiFGhxFY6vqSk7+QXL67S+CTyo68jC94ILBX/Xa5rayv77TcOpP7q/Dp/1Iy8ub3pg7bFJ7oDPD1ET3vCGzcdm6c8MibJphtCdIj3hOrs7JFpNnBoodiR0LELob8iCBLPcdK3xEmKsSrmSezosVKrilLyio+aq9PvabIcAQYAg4EThk2s3LyqtWbG+Wn/x4t3WQJz5sUuLJ3dVrmwPII2G40ABvsUAc0ee2tUz/3cr6YyPX1XElUv3ww07dDf6cKITi9eBeJFOrDecg3a5RCRmHsEHC3hEF08lkJS+SOW51ZXvaKFx+AkRQRJhs9yMT0NwynhWoBWPyMY/lRRCxMtvHx/rHEGAI9BMCC9/QMcQmBzlHxwFxySEWhZ/g3BKMv9ymS09+3DD+0r/W4tN+XDty+OQduUdOhPgiQZpUcP81Dsvn9addBthZgEYTEslev8nVdu9lTpSVfnpcPWq2AJNhYFCJBPKWbTxBz6mNx+TvhQKZ0qPGWWGGAENg8CFAFm/5mhJL1PuShRuRxDW9eu3eA5OvW7KNK5lXC67TITgSfMUG2G40IkF6gC+VJmQTmhAjHmH5t77+qNJXJBtBbRpUh7NpHLR9AaE7EAPCpJWWTGBbFGHpB7RtsHwMAYbAEEAgqmpqWAKpXrNHn/fIezsL0Jng1DCINGCS2gjxxDlM8rIZUugfqAojTOooJ9a3eVH+McgcsnlcXn2DLSpDNRqTjynHq4Odkld9LJ0hwBAYYghEVO2SsASyYH2rPvOONc35edN3G2rA6V/nadsiMMEONEjB/gYJ5FKEyUeUE+un4CYFjSk7YqCN1eovrAopNfw+zclZdKhVjp0ZAgyBIYxAZSw5OjSBrGvRZ965trWAm90SJCQ33I1geVGhMC9/oMGMMfm6ITfA5H1KItkKwufi4sjwgTbWQiydijABTb60DwCX62QmQv4ONHxYfxkCDAEPBBRVezYMiUAgo5l3rdtXwM3eF0QgtgmoCWHpFlBD9uhG1iaPG3ful2D/H2HyL9t4/Cba7UiUbxoAYz2EF8h8HpM3KccFY94MeGTtw2IdYwgwBHoXgUp1x/9E1LpjovHEvEgsMV9Rk091k0DaQhCINeHuBCPBgpJIQe+OsjdqX3QohME1bXCs8fiddyEs/X5UaYXQG73pfp2LDgV7G5rYIy7E8l5ODvlC99tmJRkCDIEBhwBZsmVEVNXOj8QT/1BUbYeiagfDkIY9r20F4iSQAwiTNzhM9rhMPM6JtpkTpN+BBtSAAzMnJwecOSJMnqcYJ4y7ncfS/Vxp+bH9OVYwEDRXUm9T9tv5zOCaEUh/PkTWNkOgLxGIxhL5iqrdrqhag50EevLbIJC717cXcLOdBHIQhLEg7zADIrlNQGlpKbKRbhmIMhJ4jrwoT0OYxKknZFF+FIz7+vIdyM0lX0NYuiCEUkDaM3KMjRFIXz481hZDoL8QUGKJnymq1tQTsnAraxDInYYMxEkgut0FC3xxg+t1xwTkNTkZMpKBKICG54tKpZNMh4Ze40tLB99cHJZO7813A9SLzTC5tNpkaX30eG6MQHrzobG6GQL9jUDN0598K6xg3I0ovNKAQKbfumpPfuGsVk5Ij9/hjNMBWKQ0fOTFHhOSc9LaCUZ9o0bP4/obx+60j0T5ZA5Lf0WYHKQcr2on3e606SxjqCGn3P5/SNkH5zPwu2YE4gScXTMEBgsCkbhWoKja216TfybSUwTywm5aArGwNb7S6VckzSCApon/YdWfTedRmIwFuUcIa+/VvEiknoyhsFQ5EgnSVQiTLb1AHBapMALpyUNiZRkC2YpA9fO131VUbVMmSMKvDl8CEeVAt+CGgz9RfpRqkhPJXogcOFBXJHxpBUIiuY3WTYrhMkSQqnNycg6hfc8MP1eifHWQw0QqvIPtQBiB0D4Ylo8hMJAQUFRtvd/En6l7JoE05RfOaqHZwvLCkMflxyBK9+ogbAetrQFgW+E6XHCTwmNyA3UwsVSM93P9AmkVFSmHmfE/tmaIHKxVht+ZEYjrE2aJDIEBjEBETVyXKYIIqsckkL35hbP2dyEQgcwMC6OxtSWSxygnwV0gIxmYdiQ5OUCAHJZ+FcLf1rucQC6y+9vix8zLNYkjSYmZHyGEvfc+swMJ+4az/AyBLEYgumrn2KBJP5P3TQJpyy+cpTsJpCcBmPgS8r+Inkh2w9YQuGTP4kfj2bWCsXO/ZWpIfUBJApshP4/Jr2m3wyjrDUsg/2a+sDwfK7vBEBh4CJzzb31F9ZpmvXpN80HaAxwiVq3cqUeW1vnH/nBx524SSGt+4ayDTgLhBPmMniJoEEkoYbt8+0AlErDR4AXpRwiTd3ppwg9LEL75we1JT58vK88QYAgEIDB83Oz/Qli6DmHytLHPD3v9gvQIj8nfeCz/mRPJn0BLx/2Q/2xYLovyXZwg3el15KPZtyOx4t7jq27aepxy/WfHRa7zP6I3fnr8/Fs2H1tx7aaTz7+3tmJpXTuErY3EEqFIpLcJxIK2sLR8jKkS6zupmRNvC8Ly7QPVIBG+6jksLeymexEafDKShxGI9XayM0OgFxFAInmqt78o+dIKvXDUXD132On6yBFT9o8cMaXd8xhu3ZvaPnL45Pajvnli6zFzrkxWrdjeWvn8jvAEcttq2MLqlRWI87EUYnI8EC8NnoZlu0huA+0nZz0D5dpw8RKsDZURQqDB1J6HEchAeYtYPwc0AgiTZvs/Xq/8FsleSr9TXSabAn6unl8wc+e8h99thrjmYWQksAKZ9ruVLX1FINaLkCIS+WEaLE2trTsLi0mxVT7bz7xQ8T0zfnlv2nF0eRdo8LTyMALJ9reI9W9QIGAakfXon9X6p+1yFmUdCZKeN2Jy08jhkxtGDp9yINwx+cCwb5zQXjrpoq3KsvrWqtArkL365BvjjfkFMw9AP+z9y4QMJOgF4MSK42hXJAiTFoTJHdksI4HxIJE8FMJ6PQ1zO/69/duNQM7doH+pUq3NBb9rcO6NA+oGh6Bksc48AQf9g7D7gwEB8gUOy+eBNTXEwXA/yM1mLO47vOQckJ6aAKU7kSj/kcfy/Vxx2f15w6feN2baxcvGSb+u/V7Z1R3HuLlXbzlmzpWJY2Zdnjxm9uWa23H0tIvroFz54g9aq1/crSuhZSD9SyDW21EoVhzNY7oVCRLJXngWxcWk0Crf32fDVxilHUxvEwNt/W4EEo3VghYgOOtsNM/wO9PHLkVN1kaW143s7+fG2mcIDAoEFr7adm312uaD81c37nccB+avbvQ9qtc0H6hataubWlh+BBLeDqSnDwO2tmgNEoFIUmTdf+q/KZcu1L7B+m214UYqrgSyTDs+zBZoT/LOX57Mmg+Anr63rDxDoF8RqFrZ8LjxzxhP6kp3DhcVXZp/7gXrvAkEiWR6f4FifNHTbwWBr60/9GWwJ/C+2xfKFW4Tf6bSXAlkaWJcT+LL0LxzZp49sJXVX+9XULtk8ZavnfXMtm94HWTxu18OqoPdZwj0GQLK0kQsxD9fKEG5X71AIKdfu6Qpv+CMLjIQJJJJfQaAR0MgjA6h/tvGi+Tu3iQSTpAn8wJZkqlJvF/rEchbTtijjEAMSJR44o+KqtV7HnHtUid27Joh0G8IRFRtid9E31v3DAL5zbNZSyDWA0FCRSkS5QcpJ9w22NrKpNNGsMrnBLKcsv2s2qry6fMGC1/r3IcE0gbepq12s+2sxLW47/9cTLs52/rM+tO3CIB3cU6Ufw7xgBAmK8CbBl8qTe3bXpitRdXE33xf2G5uUQXVOVAIxHooIVckhkFiT0LtcgKZiTB5wWcSHihk4dbPly1crXMfEogeXVqftXFiFFVb7Pe/E41piyzM2HnoIWC4XsJkD4/JfxAmf4GdD4TJaoRJG2wN97mmqBLTbvZ7YXvr3kAjEOtVNYTtKRmJ28ToTGvmRPkuXiTYKh90NuOkD1biMPDhMHnFiQMFgeyPqNolUTVRGYkl5nfnUGLawkgsGZ2/PPnfzvaz5ZoRSLY8iWzrx6JDESavIUySbmYO4BgWYbLSIBKh4nt91nslljy7t0jCr15TBrI7W2UgQQ8AlZBxIewu2hAm98J2mFe9JnG8NEhXHGnE2k0CaZuhfvgVL/wGSzojkMHyJDM7DlhtgI0XRAq1agZXV3mjo9+2ruFsmiS0Yky+bk/vtd+VseRov4m+t+4BgUz89dONeVkqRKcFnMflIvglo5z42w0rcZHwVv08lquy3XcV5djSSMKvTDcJZF+FWj9gXctYzzvozAgkCKGhdx9kHsb/UwkZB6OHsAwIkzVm8Lc6hEkTj+UrLGQMw2dRvsm67vWzomr/6i2i8Kp3wdq9+vgrH9+Rlz8jK7WwwoIOThutrwS/ydO81wYGnRwmL1LkpZ6YB0pdg41AIIonWM6DlXuluuN/wr479vyKqt3v9T8D6VFVO9+eP9O/SWzrMPJsIq/m6U++1Z26Qc2YqNrhhsX/ki0jlCWJw8DLQHfqoi0TXfrpt1PY1+Z2t9+0bfnlAxVsa+yR57YNh/diwir9i35laO6ZhuAdckOeJ4eDmyUey4tArT9lbE728aI8G+pDArkUYfIBTd0ZyRNVk1f4vbS9cc8gkKsWDxoCsR4EbG2FWJEMOnKgIbFsIxCY4KKx5EWKqt2kqNqvHcdNUVWD8MBpfxVLk6VKLHGDomqrFVXbqqhaS1TVmqOq9qkS00jelRkAACAASURBVJYq8eQvgFTSCjkuYHJV1OS1qaOj3XcD/t9edPYvEk/OcVSdU7Gs/mgYTzSW/I09vxk07qZKVUuTy0ViifOUuPaC6QmgHSz2Qd7krNftuiJWWwTjNVdP0P/tiqrtNQ/A5h1F1R4FGVamjDgrltV9z3heqT7XmW21GJ4GVG1JJJ74KdjS2PsbXVY/GcpEVO0aCxPz902RZVroIHZQd6Vad7IST1yvqNqziqq9bxv7HlMV+y0Ye1TVfl4Vr+uWTz0jRDWW77HGUliqHIkw2WyXrSJMtiIsXQx5jCitmDRY+Xv9DKypqFprwIubMRsQaMePQIBVe33QvdzAKEzGmiuSAzST6lDKk20EMntJ4r8UVdvn8/5vtl4XmJSiqvYHRdXaffKb/yvJnZF48kKrrPOcqe3jSDzxD2fdSlz7kV//gDChjPG/H0uscMsLk7CzXvu1SaKPhJw79kbU5L1B5Gpvx/4bvuwVVXuQzug08YGdGBQ18ZzbOM20xfZ2gn5DvYqqrfGpz22+bFNU7e+RWPKEoPrt9xEmb/CifKuVBnIQIBAOk4/Nraz3ESbrS0rKvgt5zC2vXVb+PjmbX1Nug+6VNL8tLL5UmtAng+6DRkBwzlYkJG2llW0EAlsPiqp95DMZvA+vClm19euKqr3uk8/9fyWu/Z/bqwZfpKHrclOrjyf+6KwftNT86o6oiXOgTFTVNnrlq1ATnrYFUD6AdN2x6Ox/fWRZ4lRnv/2uK5YmBEXVNnv11ys9oiYroF5F1dZ759Hu9mvbugdbdIqq/dmrHtr0MOrYKVsP+VGrD7ki+Y5BIIL0OzO6qA5b6NZ9MDpGmGyzrvvkXLNK/2plPKmFdYpIC5gzHwjRx3ttYZVKJ/XJoPuwEUNGklL/HfIrEliSO6GnUOPtNSE6EEhE1T50vqO263eqlm07Sokn1tnSgibItPuwReQcc8YIRE3e56w7iEBghRJRk2f5jQcmbGe9cP351/8v/cqFuLcPtoDc2nCmGfinLPTTcKVtC0hEUTXYTnIvH9PucrbpvIbVp6Jqr3jW4VW3V3os+VdnG27XvEC+D1tU1r2iIjLC2LEwhepg/8Fj8nfrPgQgBPmqdd1n55rX26cseLnN8KwbXVavBx7gO8sLnIB0g0CufsJDBiJTvVR9BkyGGiooqPkqwmRXH29Xge5478eVCRe8ao0TUhoC6S0DQAoC2RJVtde6+66b5VqUZ+qPtI9bWZ4o6WGdxv9fJJb4k71e+B1EIOZ4NJ/2G0EI7Kw3Gk+c61OmO/PBtvnLk0c423Fem7Km7tRvL9Pi2fcAAlm0SD9UiWkveZYPmO+8y3Ulf+fYMSZfRpjs5DAxVrI8P+MrvCCdzWGSB3lToSnkKvgN3sVhfnGzFXHW2yvXc//61kUL1re2Vz7fcKDy+R37fI42wxvvC933xjt+iBEIaE/0IYE8A3HhIRgWwmRfH5NW2paVS9svOF9eCgJp6y0DQAoCsU9C3f7t3LYwt2S6XZ81KUXj2kNOPIMIxCrrc37XqT2VKZmNs81ITHvS2X/7tRJP/MBZJuPXAQQSjWt3ZrxNk3SAlO3jdftdKJApqf8j+RK3+5BmkQcSpAeMPIZ1YWrbYy3C5HnHAVaHKvhDASd7XgcSyVIjpjqWHkcY3H+7HKXy4sKissVHffOkR7iisjvHlS9655g5V3w8dtbltcfMuvwzt+PoMy77+ISzbq2Vn97cNn91U7figQw1AinAZFivE4hAnuQwOcV6ybgSMtplAg+a4Hv3vkBWWf2zzhQEsl+JJS8HzSDD+BUMYCkP+Af1iwESkkBAEPoEaBSBVbuhvaRqD1DKA961xgvnlEwlOVtRk7NTQtnkpEDBbCzxiKImJ1XGkrOgXDSemAcaV/Z64XcGCOR1Z51+MoTOyTXxAWh+RWPJM6FvphbYps777ltI8Pyd7cG1qeCwI6i8qYV1fzSe/L4STyrGNltKQ4uOoH0IxNC0olthrFHi2qXWczG1s0AzK6gPLaA+7TZ+e5ppM6YjgaziRSKBq6Ti4shwUDoyXZroIG/tKIMwebsv//khPnoBmqPnHnV6y8gRU2tHjpjaNnLEVN39mKIf+d/H7Tt69uWJypUNLZUrtgeBlHYftrAm/PLJBnc7kEG6hdWbBCKSx2Ap2/HymD9ScUPShdgh36lawyeXEYjMiCn/r5Dlu5AR+PFx9pOCQNLeH4p/yrT8MJk527SuqQkkpi31UsU0A2KB+mpau47rA9ElW0dZ7bqdTQ0jvzoMVU23sva0kATyLmhGReLar0DN19Ayi2sL7PVVqNoMx1i69jGuPe7mLQBWjoHEqGoP2tuzfoP7mcB21cQHVcu2dhjnWmXhHFE1CVSsA+vwIRCKvuuKmrzA3q71G4TuptZeV7zS3pXEbVYZvzOQBsg7ECaNCBMIW72Zx2QHEshb4M0irWxP/1F7WB62PbabHe0yCUDdBWi2XsifmSx/9D+NRlTCNEB8/5H06rV7D46/4rFteXkz9jtD2iKREQjlszsIy1Xwz5X24tguAEvKuhzPWF6MBFLB85VdDOMgHWFS3716SQt4ErV10fjZ+wSineFs07qmIpC49riV3+tMM9n5ERnUmylLdFoCMQwTdf0QrzFZ6aadg98k+O8cn3rA/kNRNVi9edUBspAuPsqianK5TxkwrGwGWZLVT7ezomrjFVXb7VeP4kEgFXHtON9yYNwZS/7GrV17WqCXZVVrDGMECdbohVg6FbzwotKIe4RNsFbu5j+pYzLo0ReoURc/OqLn55+h5x4xEVYo7bnDJu0b9s0T9o4jv66vWrmzNewKBAjktEv/qg0lAgGhF8JkdwaeaSsnkj+BrYn9JXX7jUR5Yqj2RPKUHyFZbRhu7lNfQbTv2jZekG70cnWf7QRSqSZPtMbudTa3pHb6TTh+diFQb18SCM3eO/TJtL3wm/x12M7zwsVKNwwsvQkEvuLT4gCBcJ1i9XC7Vb/fGeQsfs/Fi0AUNXmrbzlV+8wpK3Lrh6kwsd+vLth+cyvbozTY6+KxdDkSpMsQli/xPqSLIR8nkl8iUb7a8xCkq8AEnsfkBg7L13sdCEvXIVG+CWH5dsibj+Zcc/T0i+/835r/23R89Ab92PJF+kk/uMsIZzsfwtqGjIleDa5MfvHIrqFEIBBLHVwQhJrQ07WbQruJNw0aaSb5BI9lOczL+vnyuYZiLNuQSK4FBQK/urOdQMCK2a//1r2ImlzrO0kEuGPvQwJ5x+pz0NmQO/lO/NoOt9WDs95g9d/0bSCwsPfDEu5F1LpjnO24XYOigW9dbisQXT/Ez04G6nMqRri1baUFGDLCyuwJK++gPZ/3iV5Qs74tuuCVtj/XvLJv4/wXGj6LLK2DvV9YIrodTYqqgVk/WLqnjliiteaVfU3jr1hclzdyehdfWHYh8GACEpQiukMgRhkjaExFKGeCYJmKsPT7oEkeAlZZVqxh8UaYfOhWP+zLclj6FSgO0NTZ6wQSS57p1Q+aLaxoPDHNq7w9HazCfScqVfN1cteHBNJFkcE+DvtvRdVu9xtTkBaVVRcFEaVhQ+FiaZNVd9AZ3In4jcFtBQL+tQKt7OOJDoWVoD5EVe2Hvn1QtX+DunBQPYPqPvzzgQYB6OiDt1Q42w/Y+4R0UFkE/ztwnr9iu3DW6zo3rmzRJSCgd05Ao3B5KFP/gQJooTAvPySBNCEs/5YvDUccpmbGrxAmCSe2Xa4F6ZGcHPKF7mKIRPk3XeoEPXRTZ522XjoCScL2EHyshD9i9VO8+pJRAgnaKvGwSrf61mcEEk+ss9oMOgduPcW0lwyjxFjybLBQdzvAn1hw8Lp0m4hg4XPyqaC+W/e7QyBgKR8w4TeCgaPVRtA5srT+JL/6QJ7jpy0YVP+Qu5971MRyTpCcBHIQov8NRjBg/5/SqC+BBOkaT+GYBzhANDBxI0wa3CZ1ZxqPyd88qqJO5kvIeGe9qWv5t9SVgEuN4Jjo+8D3EmyVdOcgi3VPkswkgShq8im/SUIZiASSSetr/62wNE0s8Bvli6WqUb9j3SKQWDIa0L6v4oDz/YcP6QBFAhAFHOssx649ECgsmjcfiXIXAgGPth5FBnSy6eSs1X3CNRQdapFArnQGiQkatFGvSG4LubrpYg0e1I7bfdMzaItzTCAwd8vvlUZDIDS68l71+6UzAvFGB4i3r8I9OA0iFQ8njx2Tejz5C++ep9/pDoFQbDl1sZVJbzX9Ct5fRdW2dfTfhUyjscRp6aXYlScCfCmZ75x4IOrWECSQWg6TX4CTNE+wXG4YQnlButMIIJMubHeSsvO6oahIOcylSiMptdUmwRZYjBNlxSsfpOfmkq8hTD5yPkdQvHArh0QyncfkZxMmTEiLk0BDIL0VUIoRiNuTSqWBXYcS0/7jN+ll8J5zBQKu8r3UfkF91vAo7N37zjvdIRDwRuzXPrg26Wwh+BdZtuU7iqqB63nPMTk10YJrHcI5eGGIEYhQPgph0m6bbDeBD/+CsXNDBe8xIpKJ5DaEid9qxkkaHdddDI5s7yD0x6lqDC5RbFmcPw8xYzV31A/jAy+h9oyjBPk0JJKnzHtv5uTkpNkeMAJJoZVtMpA+JZBY4hH7O/O5/cYqv8k2EtN+bM/v97s7BALGgX7tg2W+X5vOe2bYjKRfnZG4Nmg8kTvHn/HrDtP89K/nQbsC+co3Ti8qKC7XR5VWfMAL0o+ACLoDKgSSsZFQ2sQdlA4ub7zaNMLtpj8Ls27ZV9ceYQKudtL6wYuy8c9t+PAxicOWR3X2gRFICpFsIxDKLSywbziQgSPlw8l8ORRVW+k72aqap18o5/vVHQIJ8lasxBLwIUT9BwJyRdVAK9VzBQKCduoKh3pG001x2sQzmLewrrzy7hOPzJt5QU7u/36tJ8/eJBD7SsaJodf1QS+NLjMsple5LhO+vf9uBAI+1zgs/dVGGva64/by8JsRSAqRbCMQ6FWQC/NoLPF7CIPb08Pp/Teiakt8J1tVu8b5Hnldd4dAwKeVb/sx7WMaI0KrT6CF6lefESRrmSZa+dk5AAGEpR+4TDCDdgWi6/r4xYsXfzkAlsDbptfNgy7Y2SfpLr95LN3vVnnKXoR0EYRb9XOY/NOtnJUG0dCsvJRnRiAWeI5zNhJI0ETuZkPhGFa3Lin8gqWtWPwa6Q6BUHgfbgsjl4vGtTMCCEQjKxq+6TcOds+GwOd2Cue6TDiDmUAm6LpeaIPA9efnjtHK/IwpQ1iXp5EIaGu5NYgEcqnLc+goCysJt3JmGshANvqVd7nHCMQD0GwkEFA99pv4IBiXx3B6lGx68vXc7gmzhdQdAjEjUCb8xh7k28wOgBHD3W/7Sk2utednvwMQGIIEMknXdc4LFggCAy76YcIFGYlnvtLyY10m5Y4J3+NezLM+TP7pVgZCz4Kig1NjylkPEsjrbuV90hiBOEE0r8Gdhe+EpWpXexRNSw50phjCkJDKpUg8eXpaBzJwEY0nI35YgMzFK2qis/nAMLRurkzAD1iAZ4Goqj3mbMvt2pQl+bu1j2k3u5UdVGkg+OUE8sOU3y355+BZtePA5Bccls8aN+7cL9EM2oNA2u3xfWnqGSh5dF2fqut6F3ckvCjPRphAfJcOEvDzSwWW+va8NL95LLm68uBSmmEd7Rp1CWQdeNylxRVh8h5NH2x5GIF4gBu8Agn2/ApVZ5JAwHBTUbWgmByhbCI8hp+WbAqd2/1IBKzV0wp5XCiq9qJfPV7bcEbMGZ9Vg6E4EOANGLoUKJAHv1rLNE+v2h7DGljJ8CWKMFlmmwjSJ56OCVB6POirFUbuQSD7QEg8sJCh662u69Nfe+3dDt9QRlAYTF52xVMgZV61diPGRz3Ya7jVB4Rva38t9Mktn1sawtIMhMlqhEnYOO/dIZA2CC7k1o+epmWTHUgkpv3Fd6KjXDlkkkAAXyWWvMe3X4Zjw+S9YZ6FGavjHUVNzPUqRxVG1sdNTarviRuC+u5FIGYc9CBX8K/6ubJPWaAbbni8t+NU7Q0vDAZNuumKw4M0Or+ejQnJy0e9DQ1PAsHlg1ITQdf1KdHolfk5XzupvHh0xFfw7LViAPgMm4oOsnbg7pYuyo/aYE/7CQZ/PCZvcgKZmXbD5wL6BlHRbMRD90509u0ZZ/UUWligKnpZKiKhttCIvQHBhkIcqWh12oJKdUdajJOsIhA1cV3gZKdqN4GrcxC4gptwcLfuxDPTBAKBtCj6pYM3YoiuCEZz9j5NWKV/EfoMbvEhaJUS1zZ01BfXuoQ4tsoaz8x/BQCTchtEqwTnh2C3AttFoNEViSdPV1Qt1tGOXz0eW1jQD0XVfh1YRyzxphJLTAfC6ej70k+/rcS1BYqq+cWeN0gljCzFqn/AnTEmX3ezOnaZSN6lsXEYagRy991PnpjPl70/ki+jmHClGV4viLf/KU8yOd+rLohRgjGh0gwzA0nBioOi/z55RNLFCR4Fgfh9vYW6VxGrTVMmyCYCicY1EjhZpSbCRkVN1pp504w24VlnmkCgTjNEKy3W9UAmUVV73lxFvK2oWqPX2LzcspvbZ1u8yjnS9yqq9m9FTf4zyGWIo5zutQKBcZurEKo+RFXtUyUVShe2zOq7tONCYoCR1//noEsvGF1ewmP5YTBIg3jsCJNn4LBis4PGTmExKaYZ+FAjkC9//XRcWGIYEgZOwLwoe7oPN4zzQkzibqFuaZ6PlQcMPnlMXu0xcXT2+WmrbuvclwTiDCubTQQCX85mfG/aiRq++rtsHfUGgcA2DV1cdG9DOa8JFbburHfBeY7EE2Ve5TKW7rMCgf5EYskTMtZWGokkd1aqtbnOMbNrCgSGGoHwuFx0uDLxJBIOS55aLUYYy87J2LMOc8JvdAtLG/x4Fh3KYWkhwuTtDBKH1df+JJB2Z/zsbCIQeC5ACGEmK9AUcj7PXiGQnJwck+A+CdM/2rzO52IfU6BsKG1SDk9gfisQqx+BmIbvw8FKte5kq352DonA5zHXz3eZnPbBRBuyqgGRnSsho2kJBELReg3KVPe1JuOg80avetzSeX7GV0wDz94gDquvjEDcwDfTlGfqj6TQeupcocS0V53VBU52lMJ4Z71wbXqV9XV0SEsanfmS94GMxK09Ky0wLonXBB7XNgTFVqchEOiHEk9UmS5bOvH3atc3PVnL3JZYT7abZ04gFw0lAgEvw4arForVAwjKvWAFgbcLbtbknHaGrUWveuzphoPGFKG/S1m3ayRCyrJdCWSZdnznZNKNL0jff9b0+pwyENDuCtqvrowlZ9nx8vodNFFFVO1ur7L29GisdiwY6FFi0lrz9CdpDjkphM9v29sL+xuE4hFVu8aMNtrdyRRUdB9VKKP6QbQ+mOgpMTH6BHIYcGIYVbVbfMsFbGHZ8YGYHRThaf0weRTcvtjrZL+7gQDC8oUuE86gXYGEIRAkyp5LWyTIc11wSyMO6z6P5T/7PRo0puwIcCWPMPnEKkNxvheiHiJMtlLkdetXFwIBtxGRmPaxomogrIQtkt44PlNU7aNIXCuwY1Kz6pOvKqoGX9TgatutXY02ToOp7goeV93q2aqoiSvtbfv9jqa0eMAK3NeDqxLTXnVqlplyAyi32aUvCdowtH79g3vRWCIf4oIr8cQ63wm6g+CTO8E1SiSeuMopiwpqy7oP8enBXgYi+Pm0+ZES1y7tKKNqj/nk1WmJ3aoPzuCaxIyyGKhlBe+doibvU+L1fp6t7dWz30EIeBBIm5fDv6D6sv1+GALxc6EO7thDTNx3+OECTg9D1AVk0DH5+zhLdCMNe1pHHVbfQPUSJkGYNOHcGwd8pUO9XeJO6/oh4LYCVE/d2lWWJA6DL26rr35nWM3AF69bPbBFA2TlV97tHtRXoSamwoRousO4KapqV0diyWjFsvqjATtnOXDyB+VA1dfZF5BjgHaTs0xPr0GlGFZqiqpdrKjJa6GvKZXd5C9gS81Q4XVROe5uu0Be0F5U1X5u4QJtg0t05/gCI0Wqidu62w94P4xwtbHk2Z87RPxlRNVuVGKJG4AkYdwVce04Z3+62xYrZ0PAg0Bai4rICFu2QfMzDIFwpeWeoS15LBH6Sd8/tCxo09HW5XTGCCRHuyXnaKOL0HfQPGQ2kKxEIM3upGM11Lm1CauorOw465Q3Arwo/9QxsVhfqS9xolzuXXJg3skUgUCUQA/cLPw6zhAj3Q8tCPxEUxe4rnGrB2HyL5ryaXlc7EDc6mZpDIFMIGDGIm/128ICA9VMtMXq6EMEfAjEmgAHFZGEIRBw2e71KDgsVaZNyL5Cef8ViKkZZuHtdl7vJdA37VF20/fFNC5kBOL1aFm6DwIgeIbtIp8srrcUVXvGjzwgDodTscK1IpaYXQiA00TKyWf9YFiRhCKQ0vIxXk/LtM9wm+xd0qTfe9VjpSMs/9blOfwb7HSsPM4zOGHkMNnjUs6lD06rdInKAZ6zTXY9tBEw7WOSoP0F9hNBvtFAJgPecgPIQ4ftraGN7AAevekeYwvNRATW0LD/P1CHS00gItk/qrRC8BqnwwGi/4Qtyg961WNPB9sPHpO/Q1jbFMaki2DWyp8vzDsKYbKZ5pm55PkAfKpZdbEzQ4AWARdNr4+iqqYCsRiaYKp2mSG4VrU7FFVbpqiarydfi1giauIc2j6wfFmIQMHYud9CWL6Ew+RjlwnHbYIckFtbvFDxPUqhc7ufOxhwp0+JE2C3MpOP3HSo+X6I9q3n9ymP5SvyRke/ncn+sLqGBgKmBbxvPHGLEEKdY9p/yOJ3qXzBDQ2kB/AoweU4aGbxmPyHcoIK5X68v6EBzSpKAmlBIuG9+gvBpijxgcl7m5crd6/6vdLNFdSnIdqG9jeBrIvjCAvV6QUsSw9EwPSs62ec1517baAGHdg4yzCwECgoqPmqqeL7EeVk9fJA2Noy1V6tL3LPM8gWiouJZ+hbTpB+QomL0YaXEDzMW8GJJBqmTYTJh9BP8OAcph2WlyHghoAS024OtbJwUdV1lG+rUDVPj9dufWBpAwwBG5HQffVCaNUQkfT6Gg5aAkGYNBUK8/K9+kehveYkJ09Pp15tdKaTL3CC9Dta8khtQ8oXwrPrrIP9Ygj0DAGwnHcQQHdWHEaZqtW7Nla+uGd0z3rESg8YBIqL53zDnDRpVyTrs5FIaAmEx2QHuArxekAQQph2QjfztfoJ5b3agVC7EGyKpi0z37mMOLzQZOk9QQCszk1L/Le6SySRWOKD6jV7fuZmud+TvrGyAwSB1IqEnE8tIxHIOr/Y4n09bFoC+dxL8XbQdPLqHxLIlTSTuiPPe3512tsCP1xIIE86yjtXNdb1BtAKy8nJOcReB/vNEOgVBHT9EIgdDi5DUvHjEx/4aFuBL7BVipq4LbK0bs4iSnc0vdJvVmn2IABEYnrypfIIy2HyChKkSH+PIASBJHmeHO7VX04kv6Sc3K1J3jpvAlfwbvWCdhQ4aTSDhFn5/c4beYHMZ8ThhqZ/2oQJE74IfsQgrot/TnY3CAGwBYHVCUQ0/JwsxkeWJU6F4GRgfQ6aW27lc4dN+lUhP1d23oPInCDrG6yulJzjHfLXKa0t6YIQ6r8b4AXpL+BCEIhWVKR4WtwiUf5NNwnEIoSXOVG+C9RqEZZuQSJZijCppazzDYhQ2F8YZnO7SCSTTAIGz8abkEBe5wXyfWefUzFXiA74O++x695HgC+t2IFE8pCzJQ6TfyJMdtGu1J3l2fUARWD4uNn/ZWptfUAzCcKKBPxJ9fVwQxDIZ2Ab49U/JJJracaZ4TxrB4M3AC9Me5reac0vL4YtRsNFvij/EZ6BYQDLz/iKrY1DDJXoMWW+AZRs+dnPDCKAMHkX4U4PDTB/mMTfxMgjg0APtKrgy840sqMNirS+L7e2QhDIZr8wtJ2TldNFSK9crwT38QPtXejL/lqhmd3CEHMlFUUmkXdxYd+XfWRtdSLgJJCSkrLv8qJ862ANI9E5cvaLCgHYy+RF+ccIk/eovsIF8jo4KKSqvAeZeKHiRKr+YLIJIgR6NdVHBPICaGF59YGldyKABPIWwkTtTEn/xWH5PHjufqrZ6SVyciAvrQ0NaOx5rVhRaWQkaDE663e7hnyQ3+2eWxrI6dy07sBolB8zL9etDE0ayCBgUqfJC+MuOjpc+AcngdC0Y4wVk2G0eSFQW1DecePO/RKQFsxXQXnZ/X5AwNxrhrjrtH6bNvamjMTQbvL1nNuxgvgA+u4FGcLy7ZREZMk8qM+cQJYjkUz3apuld0XAkHe47KlbOWFCRCJ5isflIqTBxMFh8qLblqC5FQuRHuGdTSBM4s7JlBOkO3mRzAFnpKCRCDJA07Glaln8wzM0o0xCPY3g58w52YOqO3x5A1EhTP5hyhK3gxag28ocCdIDqFQ6aRQuP6EjGqVNOQVIDwlklSlPA9utel6QzrZwCDqbgdLALx6UrUOYbLAws8oacjtRvhqUPniRPGd4OsBkB8IkSfvB4yQQ8EgNzwMJFaVWOxAGAWR9HCZ5hhIOyLQwaUCYvA87CVY++xkMdhEm4IT0M4QJjONDJMoT7Xngd0qbVHrcHCPIy+o5TJ6gJXpnfey6lxGAr3lTa4vKjiQlI8m8sJ0vIeMpJ/73YJLxggUmEMp6qIkDAkuBe3avNlm6NwJIlG+C5+Gc7LxKeAnRYV/eeK6i/Bu+VJoAk7hpX7PVIgaoE2Gy3pzAVSRIl6WE9/JZ5jvxsjkRg++xRTCBmc43WxEmaXHQEZYuMMu8gET5QUMLr1SahUTyGKQ75YSm+vw7CJPXeExuAAec1qoKJl+EyT6Y1HmRSLCd1/mhI13ghYWV3tEXQbqPE+TJPJbOhFUdwqQdtgE78onkIYMsRfIUOP7kSqVZQKamIogOBGfl9To7CQTwM3HvmOyNDykgAExWgqIJaMwZuApkHeR1bnfBmI10LD/M++PK7QAACZxJREFUCWQmHFa0T7snCFCOMckFcKyB/pretYFIPrM/Z6/+s/R+QgCEZaYfKXh4gZOrQSQZ3NoKQSDv+KnHIkzupek/ZZ6n4R+onx7JoGg2pQ1IVht4i/JNQds3sGWBMDkAk6YFgBXn3kWOckhqdSHf05EXkxXQFnwdW2lwNn2VGe91IZZOTbuXmuB1uzwLbKRS74h0sT2vUZcgPYJEsh/+Z6x7CJONkJ8XCbbSUmfyBXO181J6ek4OEqRroIyfE82C0eUlZj868LDqAdIDwuq8lq6DvO6rN0PzbZWV1+vclUDkkw0fdTbyQTB+GGsJGe+sB2GyEwjXSoftLbP/t1hp1hlWkAiTD6z/Z0sFH1S5rTxwBpmnUYdAOuK42++z31mEQGoLwdiXphO2p9QxweahR38hCAS+FD0N8yC0bOqFDSZBr3yG63ZRPrlHA2KF0xBAArnU2tqBlQNMFm72PG4EYq40lqVVaF4gUb4a1Eute4a6qUdQLoSJhjB5w8prP5tbJvdaaZZXZ+vafgZtJHh37BO1sSUjSI/Y88Fvc7tMd06KVr7UxChVW9fOM9jEwFaUMx2uYYUB5S0Zj/nua655sXw9jNHvfwfKUREIJsvsxGVvj8fkb7DFaKVxqXZbrGv7uaAkUmD0vyRSAOk8Lj8GDnse63dqq0xebF2zc5YjYCMS2N8MXJHAP2ZPbCBCEMhGP+iMvWi6/nYdkyg/Cl+qfvWzez1DwJj0Ul+wB+C9ctp7uBDIIYacQiTPpbYzYGtJvtA4RHkBSk1mB61ewcSGMHH1b2bswYvyo1Ze+xlh8jLstVtplldnn4m/FmQkVn4IX8wL0o3WtXXmsPQrhEkbEFJKYSDVd7N+kEF2wcAqC2dTCeEdcyvnfGvssPXW8bFkyieMrTZMPrKXt34jLF0M20NOWY913zqHIJCYVcZ+RpjcAURtpZnbZ8lUqOnOZwfyH8tmy76NZSvHF2JyPMiU4AzyFfjftu6z8wBBAPakzZedNs7FBtMKO9QIQxCIb4Q0ZNoXUJIekMhBMJzixIrjQnWYZe4hAosONSdXHeHOLSgngcDXNWyLmELsl82tItgugmODSRgdKwe4hq9gt84ZBCKQJz3uvQz78tY9awXiNeHCFzGP5Yet/M6J10oHkkGYtILhpHGk+m3v/3q/bVLoM/h/S32BG2O2ym40jTGXWL7hgDhhu8xq2342V4Cf2bfd7Pet385xmMotB+3yE3PraYVVxn7mRXI3KApYaQiTGMIEQjs7n50xDpCn2OU4prwEttFB4A62ayBrgbnnAGhYWvWy8wBDIKUdQc6FLy2ayTkVIZHeKpuWQOAfyQs6ELIhTF6i6R8QB4/lP7MVhxeaPU8HMghStwVr9NRXeGrrwkkgMOEZz1OUF9D0yI9ADEG3B4GkJmjpcauNIAIxyMCmXeaceK16jFWCQN6yrsOegTyQSG6jKedPINJlIIgOin/jHEdYAgHhvYNAgCieoes/rM5gt0O+B2Q/oHllHcbHgg1vmvpYnixEALa2QMMk9aJRbW1tQALs8S461G84tAQCWjbOelK+qox/EBqV5BZDQ6WEMJfVTiAzfG3a9mzzD9O76FCYNGDChuadBAJpIOOg/frMFIGYtlK6FySGOq9IrrXuOydeK53H5GcQgsC6Dns2Vy1xmnJZSiBPA3EH9d9UlwbyuN0tL3yQgvDe7R5LG4AI2IiE1iARDMpqvIZKSyCgk27VYVjJGj6rDL34rjKNdFlIK6j4+gWjsupl58wgYKpl6rDX7VUjbB2mVhgpbTc3AjH3+vd51WFPzxiBWCsjvvJ/7PXDb9PWA7SQOmwevAjEsP9IyTm65SPNIjIaFdZsJBBDjdj4QCgf5cTRfg3/l+ZKs0Nd2LoPhoepaKXSH6w0dh4kCICQEdxVmHrwQZM43H8DuWxHhCCQZw2r4JTbdjCoCmqzGWwI/OKoD5JHkZXDMPxeGc9Iutg5CYI6rfn8OlRcTQLRIWKjNSD4UDDzxe0GZcbKE1SDbU4ZUxpbnbIMqw44gzYT+HWyp1m/U+8lecq6NvfiDxpGjTaVYMPwEZNm0Pay8sLZiDIpynfZ06zflg0L2HBYaXAGew6Q1/gZxubkGGrAoMiyucBm7Q1byhD7BuxZrDpBJgMGlta1/ZxyDkrqKbawPgRnolZZ6xlxmJxipSFMnrd/yFnpcOZE8icIFW1PM21zDthlHalxSReAnRDkNeeRnZAX3gGrPNhfmY4c4Z2400pn50GGgClsP9vUTQ+a1OH+a3ZhewhfWGCBDIZFQW00GgJMn/jpg+wRZO1wkCifA9bQplX6UkNNOmV01g5W6HbBrhuBwMBAvRNh8pEpTH8ajDvN9+B9u5GnH4FAWSjnBlQXAgEtIUwaweoaVhfQZ9OpIExy/3I6FoS+gQDZre5U/zvUy1ea8WRAW6wdtlO9NL2sugzSAiE8JkmzD/8wP9jq7G6GMkQgaePwIJCVYQgESB/yw1aeKYB/GmECgvKdsMVnjRNIyszziaG9lXpH6kC7E2HDOt1VBdsqz86DAAH4ZzBU9FI+kIImebj/RspiVp4G1roUxBBU51bDI28Iv0WDAPasHwJ4POCxREDN0xQsXwluMrp2fNGhhmWz7au/M8+iQ0GelvrKle+B+px2DSB3ATcmnWU6f8EENQqTsZ0pnb8MdVFbOWPrSCT7IQdYkhuhi8FdiSHP6yxn/QJhMwh+rWu3s2nMeDMob8DKzGmx7VbGnpbaDpLvgfGDGq+deCEf9NNNJRbugc0FrPKDZJHOcYAWHDwPy9bEaKeEjONKy4+19836DYaUqXaslM4zED2sxuD5A75ONzSQE4iZx9Llhjo+2A6ZfrNg9WL/UOislf0apAgYS2/Q2qKTkaRiboBLiSCC8LoPPoqusV64QQoqG1YfIWBpYYGsr4+aZM0wBBgCTgRgRWJ6XKUlEi+C8ErfDvYEzi0FZz/YNUMgDAKWIaGXHUiYulhehgBDoIcIGHYkonyO6ZbCiwzCpH9mxD+ncA3dw66z4kMQAYTlS2A1HCR0HoLQsCEzBPoTAcMCeaEhtOzedtVH8M/t1OjpzxGxtgcfAiArAevtIAH34Bs5GxFDYGAgcIhphUzntBFUMAXpJ37BpAbGsFkvGQIMAYYAQyBDCCw61FTz9CKSTeBAzqlxkqHGWTUMAYYAQ4AhMNARAG0XQ/035U11V8pRnvQDtgc90J8s6z9DgCHAEGAIMAQYAgwBhgBDgCHAEGAIMAQYAgwBhgBDgCHAEGAIhETg/wEkyNn9yc8EFQAAAABJRU5ErkJggg=="})]})]})},ws=A.div`
  width: 100%;
  max-height: 500px; /* Altura máxima del área con scroll */
  overflow-y: auto;
  padding: 0px 0px 20px 15px;
  border: solid 1px #59b6e7;
  border-radius: 10px;
  background: white;
  z-index: 2;
  box-sizing: border-box;
`,ks=A.div`
  position: sticky;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: 15px;
  background: white;
`,ys=A.table`
  width: 100%;
  table-layout: auto;
`,vs=A.thead`
  position: sticky;
  top: 15px;
  z-index: 1;
  background: #ffffff;
  color: #373737;
  font-size: 14px;
`,zs=A.tbody`
  background: #ffffff;
  z-index: 1;
`,On=A.th`
  width: 200px;
  padding: 15px;
  box-sizing: border-box;
  font-weight: 500;
  margin: 1px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.22);
`,H=A(On)`
  width: 200px;
  background: ${({active:t})=>t?"#f2f2f2":"#ffffff"};
  font-weight: 400;
  font-size: 15px;
  box-shadow: none;
  border: 1px solid #ececec;
  white-space: nowrap; /* Mantiene el texto en una sola línea */
  overflow: hidden; /* Oculta el desbordamiento */
  text-overflow: ellipsis;
`,Tu=({headers:t,data:e})=>{const o=e.map(i=>({name:i.id,created_at:i.date_created,customer:{first_name:i.billing.first_name,last_name:i.billing.last_name,city:i.billing.city},total_price:i.total,sub_total_price:i.subtotal,financial_status:i.status,fulfillment_status:"preparing",fulfillable_quantity:Object.entries(i.line_items)[0][1].quantity,line_items:[{fulfillable_quantity:Object.entries(i.line_items)[0][1].quantity}],products:i.products}));return d.jsxs(ws,{children:[d.jsx(ks,{children:" "}),d.jsxs(ys,{children:[d.jsx(vs,{children:d.jsx("tr",{children:t.map(a=>d.jsx(On,{children:a}))})}),d.jsx(zs,{children:o==null?void 0:o.map((a,n)=>{const i=n%2==0;return d.jsx(d.Fragment,{children:d.jsxs("tr",{children:[d.jsx(H,{active:i,children:a==null?void 0:a.name}),d.jsx(H,{active:i,children:a==null?void 0:a.created_at}),d.jsx(H,{active:i,children:`${a==null?void 0:a.customer.first_name} ${a==null?void 0:a.customer.last_name}`}),d.jsx(H,{active:i,children:"Tienda Online"}),d.jsx(H,{active:i,children:`$${a==null?void 0:a.total_price}`}),d.jsxs(H,{active:i,children:[" ",d.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",background:"#663399",color:"white",padding:"5px",borderRadius:"5px",textTransform:"uppercase"},children:a==null?void 0:a.financial_status})]}),d.jsx(H,{active:i,children:d.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",background:"#663399",color:"white",padding:"5px",borderRadius:"5px",textTransform:"uppercase"},children:a==null?void 0:a.fulfillment_status})}),d.jsx(H,{active:i,children:a==null?void 0:a.line_items[0].fulfillable_quantity}),d.jsx(H,{active:i,children:d.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",background:"#663399",color:"white",padding:"5px",borderRadius:"5px",textTransform:"uppercase"},children:a==null?void 0:a.fulfillment_status})}),d.jsx(H,{active:i,children:d.jsx(fs,{path:"shipment-method",order:a,children:d.jsx("button",{style:{margin:3,background:"#59b6e7"},children:"Enviar Pedido"})})})]})})})})]})]})},Du=({shopName:t})=>{const e=`${window.location.origin}/wp-json/woo/v1/orders`;return{shopify:{url:"http://127.0.0.1:3001/shopify.com/orders"},woocommerce:{url:e},vtex:{url:""}}[t]},Ru=8e3,Bu=({time:t=Ru,shopName:e="woocommerce"})=>{const r=JSON.parse(localStorage.getItem("config")??""),o=r.platform_public_key,a=r.platform_secret_key,[n,i]=L.useState([]),[l,s]=L.useState(n),[m,u]=L.useState(!0),[b,g]=L.useState(null),w=Du({shopName:e,publicKey:o,secretKey:a}).url,k=async()=>{try{const c=await(await fetch(w,{method:"GET"})).json();i(c)}catch(f){f instanceof Error&&g({error:f.message})}finally{u(!1)}},E=async()=>{try{const c=await(await fetch(w,{method:"GET"})).json();s(c)}catch(f){f instanceof Error&&g({error:f.message})}};return L.useEffect(()=>{n.length<l.length&&i(l)},[l]),L.useEffect(()=>{k();const f=setInterval(E,t);return()=>clearInterval(f)},[]),{data:n,loading:m,error:b}},Mu=({shopName:t})=>{const{data:e,loading:r,error:o}=Bu({shopName:t,time:5e3});return o?d.jsxs(d.Fragment,{children:["`",o,"`"]}):r?d.jsx(Nn,{size:250}):d.jsx(Tu,{data:e,headers:["Pedido","Fecha","Cliente","Canal","Total","Estado del pago","Estado de preparacion del pedido","Articulos","Estado de la entrega","Despacho"]})},Uu=Ct.memo(({headers:t,data:e})=>d.jsxs(ws,{children:[d.jsx(ks,{children:" "}),d.jsxs(ys,{children:[d.jsx(vs,{children:d.jsx("tr",{children:t.map(r=>d.jsx(On,{children:r}))})}),d.jsx(zs,{children:e==null?void 0:e.map((r,o)=>{const a=o%2==0;return d.jsx(d.Fragment,{children:d.jsxs("tr",{children:[d.jsx(H,{active:a,children:r==null?void 0:r.operador}),d.jsx(H,{active:a,children:r==null?void 0:r.envio}),d.jsx(H,{active:a,children:r==null?void 0:r.fecha}),d.jsxs(H,{active:a,children:[d.jsx("div",{style:{fontSize:"12px",lineHeight:"18px",background:"#663399",color:"white",padding:"5px",borderRadius:"5px",textTransform:"uppercase"},children:r==null?void 0:r.estado}),d.jsx(fs,{path:"shipment-status",shipmentData:e[o],children:d.jsx("button",{style:{margin:3,background:"#59b6e7",outline:"none"},children:"Ver estado del envio"})})]}),d.jsx(H,{active:a,children:r==null?void 0:r.cuentaremitente}),d.jsx(H,{active:a,children:r==null?void 0:r.remitente}),d.jsx(H,{active:a,children:r==null?void 0:r.destino}),d.jsx(H,{active:a,children:r==null?void 0:r.destinatario}),d.jsx(H,{active:a,children:r==null?void 0:r.unidades}),d.jsxs(H,{active:a,children:[r==null?void 0:r.peso,"kg"]})]})})})})]})]})),Fu=({shipmentData:t})=>{const{error:e,data:r,loading:o}=t;return o?d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:d.jsx(Nn,{size:250})}):e?`${e}`:d.jsx(d.Fragment,{children:d.jsx(Uu,{headers:["Operador","Num","Fecha","Estado","Cuenta Remitente","Remitente","Destino","Destinatario","Unidad","Peso"],data:r})})},Qu=A.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 1200px;
  background-color: #ffffff;
  padding: 68px 21px;
  height: 700px;
`,Vu=A.div`
  font-weight: 600;
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 28px;
  color: #171725;
`,Gu=A.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 500px;
  justify-content: space-around;
`,dr=A.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  box-sizing: border-box;
`,cr=A.div`
  display: flex;
  width: 100%;
  background-color: #fdfdfd;
  border: solid 0.66px #8a8a8a;
  border-radius: 10px;
  padding: 10px 12px;
  box-sizing: border-box;
  height: 42px;
`,mr=A.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1px;
`,no=A.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: black;
  border: none;
  outline: none;
`;A.span`
  font-weight: 650;
  font-size: 13px;
  line-height: 20px;
`;const Hu=A.select`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: black;
  border: none;
  outline: none;
`,Me=A.span`
  margin-left: 3px;
  cursor: pointer;
`,qu=A.button`
  align-self: flex-end;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  outline: none;
`,Wu=A.div`
  position: relative;
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
  margin-bottom: var(--bs-alert-margin-bottom);
  color: var(--bs-alert-color);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
  ${({theme:t})=>t==="primary"?`
      background-color:  #b7dbf0;
  color: #03346a;
  `:`
    background-color: #b8e1b1;
  color: #056513;
  `}

  padding: 10px;
  border-radius: 5px;
`,Ku={operator:"te-entrego",public_key:"",secret_key:"",platform_public_key:"",platform_secret_key:"",client_code:""},Dm=()=>{const[t,e]=L.useState({secret:!1,platform_secret:!1}),[r,o]=L.useState(!1),a=localStorage.getItem("config")?localStorage.getItem("config"):null,[n,i]=L.useState(a?JSON.parse(a):Ku),l=x=>{e({...t,...x})},s=x=>{navigator.clipboard.writeText(n[`${x}`]).then(()=>{console.log("Texto copiado al portapapeles: ",x)}).catch(k=>{console.error("Error al copiar el texto: ",k)}),(()=>{o({value:"Copiado en portapapeles",theme:"primary"}),setTimeout(()=>o(!1),3e3)})()},m=()=>{localStorage.setItem("config",JSON.stringify(n)),o({value:"Se guardo tu configuracion correctamente",theme:"success"})},u=x=>{i({...n,...x}),o(!1)},b=()=>{localStorage.setItem("config",JSON.stringify(n))};return L.useEffect(()=>{b()},[]),{handleCopyTextInput:s,handleShowInput:l,handleSaveConfig:m,handleOnChangeConfig:u,showInput:t,config:n,options:[{name:"Te-Entrego",value:"te-entrego"},{name:"TCC",value:"tcc"},{name:"Coordinadora",value:"coordinadora"},{name:"Envia",value:"envia"}],showAlert:r}},Zu=()=>{const{showInput:t,config:e,options:r,showAlert:o,handleShowInput:a,handleCopyTextInput:n,handleSaveConfig:i,handleOnChangeConfig:l}=Dm();return d.jsxs(Gu,{children:[d.jsxs(dr,{children:[d.jsx(mr,{children:"Transportista "}),d.jsx(cr,{children:d.jsx(Hu,{defaultValue:e.operator,onChange:s=>l({operator:s.target.value}),children:r.map(s=>d.jsx("option",{value:s.value,children:s.name}))})})]}),d.jsxs(dr,{children:[d.jsx(mr,{children:"Codigo de cliente: "}),d.jsxs(cr,{children:[d.jsx(no,{type:"text",onChange:s=>l({client_code:s.target.value}),value:e.client_code}),d.jsx(Me,{children:d.jsx(ao,{size:20,onClick:()=>n("client_code")})})]})]}),d.jsxs(dr,{children:[d.jsx(mr,{children:"Clave te-Entrego: "}),d.jsxs(cr,{children:[d.jsx(no,{type:"text",onChange:s=>l({public_key:s.target.value}),value:e.public_key}),d.jsx(Me,{children:d.jsx(ao,{size:20,onClick:()=>n("public_key")})})]})]}),d.jsxs(dr,{children:[d.jsx(mr,{children:"Llave de seguridad: "}),d.jsxs(cr,{children:[d.jsx(no,{type:t.secret?"text":"password",onChange:s=>l({secret_key:s.target.value}),value:e.secret_key}),d.jsx(Me,{children:t.secret?d.jsx(K0,{size:20,onClick:()=>a({secret:!1})}):d.jsx(Z0,{size:20,onClick:()=>a({secret:!0})})}),d.jsx(Me,{children:d.jsx(ao,{size:20,onClick:()=>n("secret_key")})})]})]}),d.jsxs(dr,{children:[d.jsx(mr,{children:"Clave publica plataforma: "}),d.jsxs(cr,{children:[d.jsx(no,{type:"text",onChange:s=>l({platform_public_key:s.target.value}),value:e.platform_public_key}),d.jsx(Me,{children:d.jsx(ao,{size:20,onClick:()=>n("platform_public_key")})})]})]}),d.jsxs(dr,{children:[d.jsx(mr,{children:"Llave de seguridad plataforma: "}),d.jsxs(cr,{children:[d.jsx(no,{type:t.platform_secret?"text":"password",onChange:s=>l({platform_secret_key:s.target.value}),value:e.platform_secret_key}),d.jsx(Me,{children:t.platform_secret?d.jsx(K0,{size:20,onClick:()=>a({platform_secret:!1})}):d.jsx(Z0,{size:20,onClick:()=>a({platform_secret:!0})})}),d.jsx(Me,{children:d.jsx(ao,{size:20,onClick:()=>n("platform_secret_key")})})]}),d.jsx(qu,{onClick:i,children:"Guardar"}),o&&d.jsx(Wu,{theme:o.theme,children:o.value})]})]})},Ju=(t,e)=>{const[r,o]=L.useState([]),[a,n]=L.useState(null),[i,l]=L.useState(!1),s=async()=>{l(!0);try{const u=await(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();o(u.lista),u.respuesta!=="OK"&&n(u.mensaje)}catch(m){n(m)}finally{l(!1)}};return L.useEffect(()=>{s()},[]),{error:a,loading:i,data:r}},$u={config:"Configuracíon",shipments:"Mis envíos",orders:"Pedidos","shipment-method":"Metodos de envio","shipment-status":"Estado de envio"},tb=()=>{const t=localStorage.getItem("config")?JSON.parse(localStorage.getItem("config")??""):null,e=t.client_code,r=t.public_key,o=t.secret_key,{currentPath:a}=Vo(),n=$u[a],i=Ju("https://te-entrego.com/teadmin_beta/public/api/estados_enviosv2",{min:"2021-04-18",max:"2024-12-25",codigocliente:e,accesoapi:r,llaveseguridad:o});return{path:n,shipmentData:i}},ui=()=>d.jsxs("svg",{width:"60",height:"62",viewBox:"0 0 60 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("circle",{cx:"30",cy:"30",r:"25",fill:"#E8F1FB"}),d.jsx("g",{filter:"url(#filter0_d_263_181)",children:d.jsx("circle",{cx:"30",cy:"30",r:"20",fill:"white"})}),d.jsx("path",{d:"M35.5233 24L28 31.7113L24.476 28.3707L22 30.848L28 36.6667L38 26.4767L35.5233 24Z",fill:"#BBD6F5"}),d.jsx("defs",{children:d.jsxs("filter",{id:"filter0_d_263_181",x:"2",y:"6",width:"56",height:"56",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[d.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),d.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),d.jsx("feOffset",{dy:"4"}),d.jsx("feGaussianBlur",{stdDeviation:"4"}),d.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.196078 0 0 0 0 0.286275 0 0 0 0 0.392157 0 0 0 0.1 0"}),d.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_263_181"}),d.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_263_181",result:"shape"})]})})]}),bi=()=>d.jsxs("svg",{width:"60",height:"62",viewBox:"0 0 60 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("circle",{cx:"30",cy:"30",r:"25",fill:"#76CCFB"}),d.jsx("g",{filter:"url(#filter0_d_263_114)",children:d.jsx("circle",{cx:"30",cy:"30",r:"20",fill:"white"})}),d.jsx("path",{d:"M35.5233 24L28 31.7113L24.476 28.3707L22 30.848L28 36.6667L38 26.4767L35.5233 24Z",fill:"#36B289"}),d.jsx("defs",{children:d.jsxs("filter",{id:"filter0_d_263_114",x:"2",y:"6",width:"56",height:"56",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[d.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),d.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),d.jsx("feOffset",{dy:"4"}),d.jsx("feGaussianBlur",{stdDeviation:"4"}),d.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.196078 0 0 0 0 0.286275 0 0 0 0 0.392157 0 0 0 0.1 0"}),d.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_263_114"}),d.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_263_114",result:"shape"})]})})]}),eb=()=>d.jsxs("svg",{width:"84",height:"84",viewBox:"0 0 84 84",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsxs("g",{filter:"url(#filter0_d_263_142)",children:[d.jsx("circle",{cx:"42",cy:"36",r:"30",fill:"#76CCFB"}),d.jsx("circle",{cx:"42",cy:"36",r:"27.5",stroke:"white","stroke-width":"5"})]}),d.jsx("path",{d:"M38.011 30.215C36.3 30.206 34.151 31.133 32.512 32.772C31.887 33.397 31.336 34.127 30.911 34.946C32.39 33.827 33.968 33.476 35.814 34.512C36.358 33.075 37.084 31.612 38.011 30.215ZM47.796 39.988C46.28 40.979 44.789 41.694 43.499 42.198C44.535 44.046 44.185 45.622 43.065 47.1C43.884 46.676 44.614 46.125 45.24 45.498C46.884 43.856 47.812 41.702 47.796 39.988ZM53.948 24.042C53.536 24.014 53.132 24 52.735 24C44.133 24 39.237 30.558 37.455 35.833L42.183 40.562C47.611 38.616 54 33.901 54 25.39C54 24.951 53.983 24.502 53.948 24.042ZM44.06 33.952C43.669 33.561 43.669 32.929 44.06 32.538C44.451 32.147 45.083 32.147 45.474 32.538C45.865 32.929 45.865 33.561 45.474 33.952C45.083 34.343 44.45 34.342 44.06 33.952ZM46.888 31.124C46.107 30.344 46.107 29.077 46.888 28.296C47.669 27.515 48.936 27.515 49.716 28.296C50.497 29.077 50.497 30.343 49.716 31.124C48.935 31.905 47.669 31.905 46.888 31.124ZM31.969 43.578L31.063 42.672L36.271 37.484L37.177 38.39L31.969 43.578ZM36.948 45.435L36.042 44.529L39.678 40.865L40.584 41.771L36.948 45.435ZM30.906 48L30 47.094L36.448 40.656L37.354 41.562L30.906 48Z",fill:"white"}),d.jsx("defs",{children:d.jsxs("filter",{id:"filter0_d_263_142",x:"0",y:"0",width:"84",height:"84",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[d.jsx("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),d.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),d.jsx("feOffset",{dy:"6"}),d.jsx("feGaussianBlur",{stdDeviation:"6"}),d.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.196078 0 0 0 0 0.286275 0 0 0 0 0.392157 0 0 0 0.1 0"}),d.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_263_142"}),d.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_263_142",result:"shape"})]})})]}),rb=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,ga=A.div`
  width: 84px;
  height: 84px;
`,ua=A.div`
  width: auto;
  height: 200px;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
`,hi=A.div`
  width: 62px;
  margin: 0px 25px;
  height: 2px;
  background-color: #76ccfb;
`,Ue=A.span`
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;
`,ba=A.div`
  margin-top: 21px;
`,ob=()=>{const{currentProps:t}=Vo(),e=t.shipmentData;return console.log(e),d.jsxs(rb,{children:[d.jsxs(ua,{children:[d.jsx(ga,{children:d.jsx(eb,{})}),d.jsx(Ue,{children:"en reparto"}),d.jsxs(ba,{children:[d.jsx("b",{children:"Estado:"})," ",d.jsx(Ue,{children:" en reparto"})]}),"24-04-2024"]}),d.jsx(hi,{}),d.jsxs(ua,{children:[d.jsx(ga,{children:e.estado==="TERMINAL DESTINO"||e.estado==="ENTREGADA"||e.estado==="A RECIBIR POR COORDINADORA"||e.estado==="EN TRANSPORTE"?d.jsx(bi,{}):d.jsx(ui,{})}),d.jsx(Ue,{children:"en terminal de destino"}),d.jsxs(ba,{children:[d.jsx("b",{children:"Estado:"})," ",d.jsx(Ue,{children:" en terminal de destino"})]}),"24-04-2024"]}),d.jsx(hi,{}),d.jsxs(ua,{children:[d.jsx(ga,{children:e.estado==="EN TRANSPORTE"||e.estado==="A RECIBIR POR COORDINADORA"||e.estado==="ENTREGADA"?d.jsx(bi,{}):d.jsx(ui,{})}),d.jsx(Ue,{children:"en transporte"}),d.jsxs(ba,{children:[d.jsx("b",{children:"Estado:"})," ",d.jsx(Ue,{children:" en transporte"})]}),"24-04-2024"]}),d.jsx(hi,{}),d.jsxs(ua,{children:[d.jsx(ga,{children:e.estado==="ENTREGADA"?d.jsx(bi,{}):d.jsx(ui,{})}),d.jsx(Ue,{children:"entregado"}),d.jsx(ba,{style:{color:"#60789A"},children:"Llego tu pedido"})]})]})},ab=(t,e)=>{const r=localStorage.getItem("config"),o=r&&JSON.parse(r),a=()=>{const s=o.operator;return t.findIndex(u=>u.operator.toLowerCase()===s)};console.log({currentProps:e});const[n,i]=L.useState(a());return{selectedMethod:n,handleSelectedMethod:s=>{i(s)}}},nb=A.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`,ib=({headers:t,data:e})=>{const{navigate:r,currentProps:o}=Vo(),{handleSelectedMethod:a,selectedMethod:n}=ab(e,o);return d.jsxs(d.Fragment,{children:[d.jsxs(ws,{children:[d.jsx(ks,{children:" "}),d.jsxs(ys,{children:[d.jsx(vs,{children:d.jsx("tr",{children:t.map(i=>d.jsx(On,{children:i}))})}),d.jsx(zs,{children:e==null?void 0:e.map((i,l)=>{const s=l%2==0;return d.jsx(d.Fragment,{children:d.jsxs("tr",{children:[d.jsx(H,{active:s,children:d.jsx(nb,{children:i.img?d.jsx("img",{width:100,src:i.img}):d.jsx(Nn,{})})}),d.jsx(H,{active:s,children:i==null?void 0:i.price}),d.jsx(H,{active:s,children:l===n?d.jsx("button",{style:{margin:3,background:"#ffffff",color:"#59b6e7",border:"2px solid #59b6e7",outline:"none"},children:"Seleccionado"}):d.jsx("button",{style:{margin:3,background:"#59b6e7",outline:"none"},onClick:()=>a(l),children:"Seleccionar"})})]})})})})]})]}),d.jsx("button",{style:{alignSelf:"flex-end",marginTop:40,background:"#59b6e7",outline:"none"},onClick:()=>{confirm("¿Estas segur@ que deseas confirmar este envio?")?r("shipments"):console.log("no send")},children:"Generar envio"})]})},lb=[{operator:"Te-Entrego",price:"432432",time:"1",img:null},{operator:"Coordinadora",price:"432432",time:"2",img:"./assets/coordinadora.png"},{operator:"TCC",price:"34243",time:"2",img:"./assets/tcc.png"},{operator:"Envia",price:"423243",time:"2",img:"./assets/envia.png"}],sb=()=>d.jsx(ib,{data:lb,headers:["Operador","Cotizacion","Operacion"]}),db=({shopName:t})=>{const{path:e,shipmentData:r}=tb();return d.jsxs(Qu,{children:[d.jsx(Vu,{children:e}),d.jsx(xu,{children:d.jsx(Nn,{size:121})}),d.jsxs(gg,{children:[d.jsx(oo,{path:"orders",children:d.jsx(Mu,{shopName:t})}),d.jsx(oo,{path:"shipments",children:d.jsx(Fu,{shipmentData:r})}),d.jsx(oo,{path:"shipment-method",children:d.jsx(sb,{})}),d.jsx(oo,{path:"shipment-status",children:d.jsx(ob,{})}),d.jsx(oo,{path:"config",children:d.jsx(Zu,{})})]})]})},cb=A.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
`,mb=({children:t})=>d.jsx(cb,{children:t}),fb=Om`
  :root {
    --main-bg-color-blue: #7dd1ff;
    --main-bg-color-sky-blue: #59b6e7;
    --main-color-dark-blue: #003473;
    --main-color-gray-blue: #2c406c;
    --main-color-green: #53f5d6;
    --main-color-gray-white: #f5f5f5;
  }

  h2.page-title,
  h4.page-title {
    color: var(--main-color-gray-blue);
    font-size: 2.5rem;
    font-weight: bold;
  }

  h3.page-title {
    color: var(--main-color-gray-blue);
    font-size: 2rem;
    font-weight: bold;
  }

  .card {
    border: 1px solid var(--main-bg-color-blue);
  }
  .card-dashboard {
    border: none;
  }

  .card-dashboard-blue {
    background-color: var(--main-bg-color-blue);
  }

  .card-header-dashboard {
    background-color: var(--main-color-green) !important;
  }

  .all-labels label {
    color: var(--main-color-gray-blue);
    font-weight: normal;
  }
  li > div > div > a.active {
    background: white !important;
    border-radius: 4rem !important;
    padding-bottom: -13px !important;
    padding-top: -13px !important;
  }

  ul.menu.float-left > li:last-child {
    margin-left: 10rem;
  }

  @media (min-width: 1440px) {
    ul.menu.float-left > li:last-child {
      margin-left: 22rem;
    }
  }

  @media (min-width: 1650px) {
    ul.menu.float-left > li:last-child {
      margin-left: 34rem;
    }
  }

  @media (min-width: 1920px) {
    ul.menu.float-left > li:last-child {
      margin-left: 52rem;
    }
  }

  input.form-control {
    border: 2px solid var(--main-bg-color-blue);
  }

  select.form-control {
    border: 2px solid var(--main-bg-color-blue);
  }

  h2.title-h {
    font-weight: bold;
    color: var(--main-bg-color-sky-blue);
  }
  .card-body.resultados {
    border-radius: 15px;
    background: var(--main-color-gray-white);
  }
  li.fgray {
    background: var(--main-color-gray-white);
    color: var(--main-color-gray-blue);
  }
  li.font-weight-bold {
    color: var(--main-bg-color-sky-blue);
  }
  .btn-secondary {
    background-color: var(--main-bg-color-blue) !important;
    border: var(--main-bg-color-blue);
    color: #fff !important;
    box-shadow: 5px 5px 15px #d8d8d8;
    font-weight: 900;
  }
  .btn-secondary-menu {
    background-color: var(--main-bg-color-blue) !important;
    border: var(--main-bg-color-blue);
    color: #fff !important;
    font-weight: bold;
  }
  .notes {
    background-color: var(--main-color-gray-white);
    color: #000;
    width: auto;
    padding: 2rem;
    border-radius: 2rem;
  }

  .notes img {
    width: 1.5rem;
  }

  .img-guia {
    width: 2rem;
  }
  .envi-title {
    color: var(--main-bg-color-blue) !important;
  }

  /* -------------------- clases registro --------------------- */

  /* .main-content-wrap{
    margin-top: 0px !important;
} */
  /* .layout-horizontal-bar .main-content-wrap{
    margin-top: 0px !important;
} */
  .right_register img {
    width: 18.5rem;
    margin: 5rem 0;
  }

  .right_register h1 {
    color: var(--main-color-gray-blue);
  }

  .right_register p {
    margin: 2rem 0;
    padding-inline: 2rem;
    font-size: 16px;
  }
  .right_register h5 {
    color: #ffffff !important;
    margin-top: 3rem;
  }
  .right_register button {
    margin-top: 6rem;
    color: var(--main-bg-color-sky-blue);
  }

  .btn-link:hover {
    color: var(--main-bg-color-sky-blue);
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent;
  }
  .left_register {
    background-color: var(--main-bg-color-sky-blue);
  }
  .left_register .card {
    width: 80%;
    margin: 5rem 11%;
    box-shadow: none;
    border-radius: 2rem;
  }
  .left_register .card-body {
    padding: 1.9rem;
  }
  .ilustracion {
    bottom: 4rem;
  }
  .ilustracion img {
    width: 11rem;
  }
  .left_register .checkmark {
    border-radius: 2rem;
    width: 2rem;
    height: 2rem;
    top: -0.5rem;
  }
  .checkbox-primary input:checked ~ .checkmark {
    background-color: var(--main-bg-color-sky-blue) !important;
  }
  .checkbox .ml-3 {
    color: var(--main-color-gray-blue);
  }
  .box-uno {
    position: relative;
    left: -6rem;
    top: 3rem;
  }

  .box-dos {
    position: relative;
    right: -2rem;
  }

  .box-dos img {
    width: 5rem !important;
  }
  @media (max-width: 440px) {
    .box-uno {
      left: -10rem;
    }
    .box-dos {
      margin-left: 11rem;
      top: 1rem;
    }
    .box-dos img {
      width: 6rem !important;
    }
  }

  /* -------------------- clases login --------------------- */
  .bg-login {
    background-color: var(--main-bg-color-sky-blue);
  }
  .bg {
    background-color: var(--main-bg-color-sky-blue) !important;
  }
  .bg-login img {
    width: 14rem;
  }
  .bg-login .btn-link {
    color: var(--main-bg-color-sky-blue);
  }
  .bg-login span {
    color: var(--main-bg-color-sky-blue);
  }
  .bg img {
    width: 12.5rem;
    margin: 2rem 0 2rem 0;
  }
  .bg h2,
  h5 {
    color: #fff !important;
  }
  .bg .card {
    width: 84%;
    margin: 3.1rem 9%;
    box-shadow: none;
    border-radius: 2rem;
  }

  /* -------------------- clases recuperar contraseña --------------------- */

  .img_recuperar {
    width: 6rem !important;
  }
  .exito {
    color: var(--main-bg-color-sky-blue);
  }

  /* -------------------- clases perfil --------------------- */

  .c-perfil {
    color: var(--main-bg-color-sky-blue);
  }

  input.form-control:focus {
    outline: none !important;
    background-color: #e5f5ff;
  }
  .perfil .card-body {
    padding: 3rem 8.25rem;
  }

  .form-control:focus {
    color: var(--main-bg-color-sky-blue);
    background-color: #fff;
    border-color: var(--main-bg-color-blue);
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(175, 216, 255, 0.712);
  }

  .badge {
    padding: 0.4rem !important;
  }

  .page-item.disabled .page-link,
  .page-item:last-child .page-link {
    border-color: white;
  }

  .layout-horizontal-bar .header-topnav .topnav {
    background-color: var(--main-bg-color-blue);
  }

  /* -------------------- clases dashboard --------------------- */
  .bg-green {
    background-color: var(--main-color-green);
  }

  .bg-green h3 {
    color: var(--main-color-gray-blue) !important;
  }

  p.title-card {
    color: var(--main-color-dark-blue);
    font-size: 1.5rem;
    font-weight: bold;
  }
  p.header-part-right-value {
    color: var(--main-color-dark-blue);
    font-weight: bold;
    margin-bottom: 0rem;
    margin-left: 3rem;
  }
  p.text-primary__card,
  p.header-part-right-value > span {
    color: var(--main-bg-color-blue);
    font-weight: bold;
  }
  .card-header-dashboard h3 {
    color: var(--main-color-gray-blue);
  }
  .card-dashboard-blue .content {
    max-width: none !important;
  }
  .box-uno-img {
    width: 4rem !important;
  }

  .layout-horizontal-bar .header-topnav .topnav a,
  .layout-horizontal-bar .header-topnav .topnav label {
    height: 35px !important;
    margin-top: 7px;
  }

  .btn-gray-100,
  .btn-outline-gray-100 {
    color: var(--main-bg-color-blue);
    font-weight: bold;
  }

  .card-icon-bg .card-body .content {
    margin-left: 2rem !important;
  }

  /*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
  :root {
    --blue: #003473;
    --indigo: #3f51b5;
    --purple: #663399;
    --pink: #cb3066;
    --red: #f44336;
    --orange: #e97d23;
    --yellow: #ffc107;
    --green: #4caf50;
    --teal: #20c997;
    --cyan: #9c27b0;
    --white: #fff;
    --gray: #70657b;
    --gray-dark: #52495a;
    --purple: #663399;
    --pink: #cb3066;
    --red: #f44336;
    --orange: #e97d23;
    --yellow: #ffc107;
    --green: #4caf50;
    --teal: #20c997;
    --cyan: #9c27b0;
    --white: #fff;
    --gray: #70657b;
    --primary: #663399;
    --secondary: #52495a;
    --success: #4caf50;
    --info: #003473;
    --warning: #ffc107;
    --danger: #f44336;
    --light: #bbb;
    --dark: #47404f;
    --gray-100: #f8f9fa;
    --gray-200: #eee;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #bbb;
    --gray-600: #70657b;
    --gray-700: #665c70;
    --gray-800: #52495a;
    --gray-900: #47404f;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @-ms-viewport {
    width: device-width;
  }

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  body {
    margin: 0;
    font-family: "Nunito", sans-serif;
    font-size: 0.813rem;
    font-weight: 400;
    line-height: 1.5;
    color: #47404f;
    text-align: left;
    background-color: #fff;
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  dfn {
    font-style: italic;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    color: #663399;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:hover {
    color: #402060;
    text-decoration: underline;
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }
  a:not([href]):not([tabindex]):hover,
  a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
  }
  a:not([href]):not([tabindex]):focus {
    outline: 0;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-size: 1em;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #70657b;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
  }

  h1,
  .h1 {
    font-size: 2.0325rem;
  }

  h2,
  .h2 {
    font-size: 1.626rem;
  }

  h3,
  .h3 {
    font-size: 1.42275rem;
  }

  h4,
  .h4 {
    font-size: 1.2195rem;
  }

  h5,
  .h5 {
    font-size: 1.01625rem;
  }

  h6,
  .h6 {
    font-size: 0.813rem;
  }

  .lead {
    font-size: 1.01625rem;
    font-weight: 300;
  }

  .display-1 {
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-2 {
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-3 {
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-4 {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  small,
  .small {
    font-size: 80%;
    font-weight: 400;
  }

  mark,
  .mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  .list-inline {
    padding-left: 0;
    list-style: none;
  }

  .list-inline-item {
    display: inline-block;
  }
  .list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
  }

  .initialism {
    font-size: 90%;
    text-transform: uppercase;
  }

  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.01625rem;
  }

  .blockquote-footer {
    display: block;
    font-size: 80%;
    color: #70657b;
  }
  .blockquote-footer::before {
    content: "\2014 \00A0";
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
  }

  .figure {
    display: inline-block;
  }

  .figure-img {
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .figure-caption {
    font-size: 90%;
    color: #70657b;
  }

  code {
    font-size: 87.5%;
    color: #cb3066;
    word-break: break-word;
  }
  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 87.5%;
    color: #fff;
    background-color: #47404f;
    border-radius: 0.2rem;
  }
  kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: 700;
  }

  pre {
    display: block;
    font-size: 87.5%;
    color: #47404f;
  }
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

  .pre-scrollable {
    max-height: 340px;
    overflow-y: scroll;
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  .container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
  .no-gutters > .col,
  .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }

  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col,
  .col-auto,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm,
  .col-sm-auto,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md,
  .col-md-auto,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg,
  .col-lg-auto,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl,
  .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }

  .col-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }

  .col-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }

  .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .col-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }

  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }

  .col-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }

  .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }

  .col-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-first {
    order: -1;
  }

  .order-last {
    order: 13;
  }

  .order-0 {
    order: 0;
  }

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .order-3 {
    order: 3;
  }

  .order-4 {
    order: 4;
  }

  .order-5 {
    order: 5;
  }

  .order-6 {
    order: 6;
  }

  .order-7 {
    order: 7;
  }

  .order-8 {
    order: 8;
  }

  .order-9 {
    order: 9;
  }

  .order-10 {
    order: 10;
  }

  .order-11 {
    order: 11;
  }

  .order-12 {
    order: 12;
  }

  .offset-1 {
    margin-left: 8.33333%;
  }

  .offset-2 {
    margin-left: 16.66667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.33333%;
  }

  .offset-5 {
    margin-left: 41.66667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.33333%;
  }

  .offset-8 {
    margin-left: 66.66667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.33333%;
  }

  .offset-11 {
    margin-left: 91.66667%;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-sm-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-sm-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-sm-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-sm-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-sm-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-sm-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-sm-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-sm-first {
      order: -1;
    }
    .order-sm-last {
      order: 13;
    }
    .order-sm-0 {
      order: 0;
    }
    .order-sm-1 {
      order: 1;
    }
    .order-sm-2 {
      order: 2;
    }
    .order-sm-3 {
      order: 3;
    }
    .order-sm-4 {
      order: 4;
    }
    .order-sm-5 {
      order: 5;
    }
    .order-sm-6 {
      order: 6;
    }
    .order-sm-7 {
      order: 7;
    }
    .order-sm-8 {
      order: 8;
    }
    .order-sm-9 {
      order: 9;
    }
    .order-sm-10 {
      order: 10;
    }
    .order-sm-11 {
      order: 11;
    }
    .order-sm-12 {
      order: 12;
    }
    .offset-sm-0 {
      margin-left: 0;
    }
    .offset-sm-1 {
      margin-left: 8.33333%;
    }
    .offset-sm-2 {
      margin-left: 16.66667%;
    }
    .offset-sm-3 {
      margin-left: 25%;
    }
    .offset-sm-4 {
      margin-left: 33.33333%;
    }
    .offset-sm-5 {
      margin-left: 41.66667%;
    }
    .offset-sm-6 {
      margin-left: 50%;
    }
    .offset-sm-7 {
      margin-left: 58.33333%;
    }
    .offset-sm-8 {
      margin-left: 66.66667%;
    }
    .offset-sm-9 {
      margin-left: 75%;
    }
    .offset-sm-10 {
      margin-left: 83.33333%;
    }
    .offset-sm-11 {
      margin-left: 91.66667%;
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-md-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-md-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-md-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-md-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-md-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-md-first {
      order: -1;
    }
    .order-md-last {
      order: 13;
    }
    .order-md-0 {
      order: 0;
    }
    .order-md-1 {
      order: 1;
    }
    .order-md-2 {
      order: 2;
    }
    .order-md-3 {
      order: 3;
    }
    .order-md-4 {
      order: 4;
    }
    .order-md-5 {
      order: 5;
    }
    .order-md-6 {
      order: 6;
    }
    .order-md-7 {
      order: 7;
    }
    .order-md-8 {
      order: 8;
    }
    .order-md-9 {
      order: 9;
    }
    .order-md-10 {
      order: 10;
    }
    .order-md-11 {
      order: 11;
    }
    .order-md-12 {
      order: 12;
    }
    .offset-md-0 {
      margin-left: 0;
    }
    .offset-md-1 {
      margin-left: 8.33333%;
    }
    .offset-md-2 {
      margin-left: 16.66667%;
    }
    .offset-md-3 {
      margin-left: 25%;
    }
    .offset-md-4 {
      margin-left: 33.33333%;
    }
    .offset-md-5 {
      margin-left: 41.66667%;
    }
    .offset-md-6 {
      margin-left: 50%;
    }
    .offset-md-7 {
      margin-left: 58.33333%;
    }
    .offset-md-8 {
      margin-left: 66.66667%;
    }
    .offset-md-9 {
      margin-left: 75%;
    }
    .offset-md-10 {
      margin-left: 83.33333%;
    }
    .offset-md-11 {
      margin-left: 91.66667%;
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-lg-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-lg-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-lg-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-lg-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-lg-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-lg-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-lg-first {
      order: -1;
    }
    .order-lg-last {
      order: 13;
    }
    .order-lg-0 {
      order: 0;
    }
    .order-lg-1 {
      order: 1;
    }
    .order-lg-2 {
      order: 2;
    }
    .order-lg-3 {
      order: 3;
    }
    .order-lg-4 {
      order: 4;
    }
    .order-lg-5 {
      order: 5;
    }
    .order-lg-6 {
      order: 6;
    }
    .order-lg-7 {
      order: 7;
    }
    .order-lg-8 {
      order: 8;
    }
    .order-lg-9 {
      order: 9;
    }
    .order-lg-10 {
      order: 10;
    }
    .order-lg-11 {
      order: 11;
    }
    .order-lg-12 {
      order: 12;
    }
    .offset-lg-0 {
      margin-left: 0;
    }
    .offset-lg-1 {
      margin-left: 8.33333%;
    }
    .offset-lg-2 {
      margin-left: 16.66667%;
    }
    .offset-lg-3 {
      margin-left: 25%;
    }
    .offset-lg-4 {
      margin-left: 33.33333%;
    }
    .offset-lg-5 {
      margin-left: 41.66667%;
    }
    .offset-lg-6 {
      margin-left: 50%;
    }
    .offset-lg-7 {
      margin-left: 58.33333%;
    }
    .offset-lg-8 {
      margin-left: 66.66667%;
    }
    .offset-lg-9 {
      margin-left: 75%;
    }
    .offset-lg-10 {
      margin-left: 83.33333%;
    }
    .offset-lg-11 {
      margin-left: 91.66667%;
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-xl-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-xl-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-xl-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-xl-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-xl-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-xl-first {
      order: -1;
    }
    .order-xl-last {
      order: 13;
    }
    .order-xl-0 {
      order: 0;
    }
    .order-xl-1 {
      order: 1;
    }
    .order-xl-2 {
      order: 2;
    }
    .order-xl-3 {
      order: 3;
    }
    .order-xl-4 {
      order: 4;
    }
    .order-xl-5 {
      order: 5;
    }
    .order-xl-6 {
      order: 6;
    }
    .order-xl-7 {
      order: 7;
    }
    .order-xl-8 {
      order: 8;
    }
    .order-xl-9 {
      order: 9;
    }
    .order-xl-10 {
      order: 10;
    }
    .order-xl-11 {
      order: 11;
    }
    .order-xl-12 {
      order: 12;
    }
    .offset-xl-0 {
      margin-left: 0;
    }
    .offset-xl-1 {
      margin-left: 8.33333%;
    }
    .offset-xl-2 {
      margin-left: 16.66667%;
    }
    .offset-xl-3 {
      margin-left: 25%;
    }
    .offset-xl-4 {
      margin-left: 33.33333%;
    }
    .offset-xl-5 {
      margin-left: 41.66667%;
    }
    .offset-xl-6 {
      margin-left: 50%;
    }
    .offset-xl-7 {
      margin-left: 58.33333%;
    }
    .offset-xl-8 {
      margin-left: 66.66667%;
    }
    .offset-xl-9 {
      margin-left: 75%;
    }
    .offset-xl-10 {
      margin-left: 83.33333%;
    }
    .offset-xl-11 {
      margin-left: 91.66667%;
    }
  }

  .table {
    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  }
  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }
  .table tbody + tbody {
    border-top: 2px solid #dee2e6;
  }
  .table .table {
    background-color: #fff;
  }

  .table-sm th,
  .table-sm td {
    padding: 0.3rem;
  }

  .table-bordered {
    border: 1px solid #dee2e6;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #dee2e6;
  }
  .table-bordered thead th,
  .table-bordered thead td {
    border-bottom-width: 2px;
  }

  .table-borderless th,
  .table-borderless td,
  .table-borderless thead th,
  .table-borderless tbody + tbody {
    border: 0;
  }

  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .table-hover tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }

  .table-primary,
  .table-primary > th,
  .table-primary > td {
    background-color: #d4c6e2;
  }

  .table-hover .table-primary:hover {
    background-color: #c7b5d9;
  }
  .table-hover .table-primary:hover > td,
  .table-hover .table-primary:hover > th {
    background-color: #c7b5d9;
  }

  .table-secondary,
  .table-secondary > th,
  .table-secondary > td {
    background-color: #ceccd1;
  }

  .table-hover .table-secondary:hover {
    background-color: #c1bfc5;
  }
  .table-hover .table-secondary:hover > td,
  .table-hover .table-secondary:hover > th {
    background-color: #c1bfc5;
  }

  .table-success,
  .table-success > th,
  .table-success > td {
    background-color: #cde9ce;
  }

  .table-hover .table-success:hover {
    background-color: #bbe1bd;
  }
  .table-hover .table-success:hover > td,
  .table-hover .table-success:hover > th {
    background-color: #bbe1bd;
  }

  .table-info,
  .table-info > th,
  .table-info > td {
    background-color: #b8c6d8;
  }

  .table-hover .table-info:hover {
    background-color: #a8b9cf;
  }
  .table-hover .table-info:hover > td,
  .table-hover .table-info:hover > th {
    background-color: #a8b9cf;
  }

  .table-warning,
  .table-warning > th,
  .table-warning > td {
    background-color: #ffeeba;
  }

  .table-hover .table-warning:hover {
    background-color: #ffe8a1;
  }
  .table-hover .table-warning:hover > td,
  .table-hover .table-warning:hover > th {
    background-color: #ffe8a1;
  }

  .table-danger,
  .table-danger > th,
  .table-danger > td {
    background-color: #fccac7;
  }

  .table-hover .table-danger:hover {
    background-color: #fbb3af;
  }
  .table-hover .table-danger:hover > td,
  .table-hover .table-danger:hover > th {
    background-color: #fbb3af;
  }

  .table-light,
  .table-light > th,
  .table-light > td {
    background-color: #ececec;
  }

  .table-hover .table-light:hover {
    background-color: #dfdfdf;
  }
  .table-hover .table-light:hover > td,
  .table-hover .table-light:hover > th {
    background-color: #dfdfdf;
  }

  .table-dark,
  .table-dark > th,
  .table-dark > td {
    background-color: #cccace;
  }

  .table-hover .table-dark:hover {
    background-color: #bfbdc2;
  }
  .table-hover .table-dark:hover > td,
  .table-hover .table-dark:hover > th {
    background-color: #bfbdc2;
  }

  .table-gray-100,
  .table-gray-100 > th,
  .table-gray-100 > td {
    background-color: #fdfdfe;
  }

  .table-hover .table-gray-100:hover {
    background-color: #ececf6;
  }
  .table-hover .table-gray-100:hover > td,
  .table-hover .table-gray-100:hover > th {
    background-color: #ececf6;
  }

  .table-gray-200,
  .table-gray-200 > th,
  .table-gray-200 > td {
    background-color: #fafafa;
  }

  .table-hover .table-gray-200:hover {
    background-color: #ededed;
  }
  .table-hover .table-gray-200:hover > td,
  .table-hover .table-gray-200:hover > th {
    background-color: #ededed;
  }

  .table-gray-300,
  .table-gray-300 > th,
  .table-gray-300 > td {
    background-color: #f6f7f8;
  }

  .table-hover .table-gray-300:hover {
    background-color: #e8eaed;
  }
  .table-hover .table-gray-300:hover > td,
  .table-hover .table-gray-300:hover > th {
    background-color: #e8eaed;
  }

  .table-gray-400,
  .table-gray-400 > th,
  .table-gray-400 > td {
    background-color: #f1f3f5;
  }

  .table-hover .table-gray-400:hover {
    background-color: #e2e6ea;
  }
  .table-hover .table-gray-400:hover > td,
  .table-hover .table-gray-400:hover > th {
    background-color: #e2e6ea;
  }

  .table-gray-500,
  .table-gray-500 > th,
  .table-gray-500 > td {
    background-color: #ececec;
  }

  .table-hover .table-gray-500:hover {
    background-color: #dfdfdf;
  }
  .table-hover .table-gray-500:hover > td,
  .table-hover .table-gray-500:hover > th {
    background-color: #dfdfdf;
  }

  .table-gray-600,
  .table-gray-600 > th,
  .table-gray-600 > td {
    background-color: #d7d4da;
  }

  .table-hover .table-gray-600:hover {
    background-color: #cac6ce;
  }
  .table-hover .table-gray-600:hover > td,
  .table-hover .table-gray-600:hover > th {
    background-color: #cac6ce;
  }

  .table-gray-700,
  .table-gray-700 > th,
  .table-gray-700 > td {
    background-color: #d4d1d7;
  }

  .table-hover .table-gray-700:hover {
    background-color: #c7c3cb;
  }
  .table-hover .table-gray-700:hover > td,
  .table-hover .table-gray-700:hover > th {
    background-color: #c7c3cb;
  }

  .table-gray-800,
  .table-gray-800 > th,
  .table-gray-800 > td {
    background-color: #ceccd1;
  }

  .table-hover .table-gray-800:hover {
    background-color: #c1bfc5;
  }
  .table-hover .table-gray-800:hover > td,
  .table-hover .table-gray-800:hover > th {
    background-color: #c1bfc5;
  }

  .table-gray-900,
  .table-gray-900 > th,
  .table-gray-900 > td {
    background-color: #cccace;
  }

  .table-hover .table-gray-900:hover {
    background-color: #bfbdc2;
  }
  .table-hover .table-gray-900:hover > td,
  .table-hover .table-gray-900:hover > th {
    background-color: #bfbdc2;
  }

  .table-active,
  .table-active > th,
  .table-active > td {
    background-color: rgba(0, 0, 0, 0.075);
  }

  .table-hover .table-active:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
  .table-hover .table-active:hover > td,
  .table-hover .table-active:hover > th {
    background-color: rgba(0, 0, 0, 0.075);
  }

  .table .thead-dark th {
    color: #fff;
    background-color: #47404f;
    border-color: #5b5164;
  }

  .table .thead-light th {
    color: #665c70;
    background-color: #eee;
    border-color: #dee2e6;
  }

  .table-dark {
    color: #fff;
    background-color: #47404f;
  }
  .table-dark th,
  .table-dark td,
  .table-dark thead th {
    border-color: #5b5164;
  }
  .table-dark.table-bordered {
    border: 0;
  }
  .table-dark.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.05);
  }
  .table-dark.table-hover tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.075);
  }

  @media (max-width: 575.98px) {
    .table-responsive-sm {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .table-responsive-sm > .table-bordered {
      border: 0;
    }
  }

  @media (max-width: 767.98px) {
    .table-responsive-md {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .table-responsive-md > .table-bordered {
      border: 0;
    }
  }

  @media (max-width: 991.98px) {
    .table-responsive-lg {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .table-responsive-lg > .table-bordered {
      border: 0;
    }
  }

  @media (max-width: 1199.98px) {
    .table-responsive-xl {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    .table-responsive-xl > .table-bordered {
      border: 0;
    }
  }

  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .table-responsive > .table-bordered {
    border: 0;
  }

  .form-control {
    display: block;
    width: 100%;
    height: calc(1.9695rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 0.813rem;
    line-height: 1.5;
    color: #665c70;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control::-ms-expand {
    background-color: transparent;
    border: 0;
  }
  .form-control:focus {
    color: #665c70;
    background-color: #fff;
    border-color: #a679d2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .form-control::placeholder {
    color: #70657b;
    opacity: 1;
  }
  .form-control:disabled,
  .form-control[readonly] {
    background-color: #eee;
    opacity: 1;
  }

  select.form-control:focus::-ms-value {
    color: #665c70;
    background-color: #fff;
  }

  .form-control-file,
  .form-control-range {
    display: block;
    width: 100%;
  }

  .col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
  }

  .col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.01625rem;
    line-height: 1.5;
  }

  .col-form-label-sm {
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.71137rem;
    line-height: 1.5;
  }

  .form-control-plaintext {
    display: block;
    width: 100%;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    margin-bottom: 0;
    line-height: 1.5;
    color: #47404f;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
  }
  .form-control-plaintext.form-control-sm,
  .form-control-plaintext.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }

  .form-control-sm {
    height: calc(1.56706rem + 2px);
    padding: 0.25rem 0.5rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }

  .form-control-lg {
    height: calc(2.52438rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.01625rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  select.form-control[size],
  select.form-control[multiple] {
    height: auto;
  }

  textarea.form-control {
    height: auto;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-text {
    display: block;
    margin-top: 0.25rem;
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
  }
  .form-row > .col,
  .form-row > [class*="col-"] {
    padding-right: 5px;
    padding-left: 5px;
  }

  .form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
  }

  .form-check-input {
    position: absolute;
    margin-top: 0.3rem;
    margin-left: -1.25rem;
  }
  .form-check-input:disabled ~ .form-check-label {
    color: #70657b;
  }

  .form-check-label {
    margin-bottom: 0;
  }

  .form-check-inline {
    display: inline-flex;
    align-items: center;
    padding-left: 0;
    margin-right: 0.75rem;
  }
  .form-check-inline .form-check-input {
    position: static;
    margin-top: 0;
    margin-right: 0.3125rem;
    margin-left: 0;
  }

  .valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #4caf50;
  }

  .valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    color: #fff;
    background-color: rgba(76, 175, 80, 0.9);
    border-radius: 0.25rem;
  }

  .was-validated .form-control:valid,
  .form-control.is-valid,
  .was-validated .custom-select:valid,
  .custom-select.is-valid {
    border-color: #4caf50;
  }
  .was-validated .form-control:valid:focus,
  .form-control.is-valid:focus,
  .was-validated .custom-select:valid:focus,
  .custom-select.is-valid:focus {
    border-color: #4caf50;
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
  }
  .was-validated .form-control:valid ~ .valid-feedback,
  .was-validated .form-control:valid ~ .valid-tooltip,
  .form-control.is-valid ~ .valid-feedback,
  .form-control.is-valid ~ .valid-tooltip,
  .was-validated .custom-select:valid ~ .valid-feedback,
  .was-validated .custom-select:valid ~ .valid-tooltip,
  .custom-select.is-valid ~ .valid-feedback,
  .custom-select.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .form-control-file:valid ~ .valid-feedback,
  .was-validated .form-control-file:valid ~ .valid-tooltip,
  .form-control-file.is-valid ~ .valid-feedback,
  .form-control-file.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .form-check-input:valid ~ .form-check-label,
  .form-check-input.is-valid ~ .form-check-label {
    color: #4caf50;
  }

  .was-validated .form-check-input:valid ~ .valid-feedback,
  .was-validated .form-check-input:valid ~ .valid-tooltip,
  .form-check-input.is-valid ~ .valid-feedback,
  .form-check-input.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .custom-control-input:valid ~ .custom-control-label,
  .custom-control-input.is-valid ~ .custom-control-label {
    color: #4caf50;
  }
  .was-validated .custom-control-input:valid ~ .custom-control-label::before,
  .custom-control-input.is-valid ~ .custom-control-label::before {
    background-color: #a3d7a5;
  }

  .was-validated .custom-control-input:valid ~ .valid-feedback,
  .was-validated .custom-control-input:valid ~ .valid-tooltip,
  .custom-control-input.is-valid ~ .valid-feedback,
  .custom-control-input.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated
    .custom-control-input:valid:checked
    ~ .custom-control-label::before,
  .custom-control-input.is-valid:checked ~ .custom-control-label::before {
    background-color: #6ec071;
  }

  .was-validated
    .custom-control-input:valid:focus
    ~ .custom-control-label::before,
  .custom-control-input.is-valid:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
  }

  .was-validated .custom-file-input:valid ~ .custom-file-label,
  .custom-file-input.is-valid ~ .custom-file-label {
    border-color: #4caf50;
  }
  .was-validated .custom-file-input:valid ~ .custom-file-label::after,
  .custom-file-input.is-valid ~ .custom-file-label::after {
    border-color: inherit;
  }

  .was-validated .custom-file-input:valid ~ .valid-feedback,
  .was-validated .custom-file-input:valid ~ .valid-tooltip,
  .custom-file-input.is-valid ~ .valid-feedback,
  .custom-file-input.is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .custom-file-input:valid:focus ~ .custom-file-label,
  .custom-file-input.is-valid:focus ~ .custom-file-label {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
  }

  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #f44336;
  }

  .invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    color: #fff;
    background-color: rgba(244, 67, 54, 0.9);
    border-radius: 0.25rem;
  }

  .was-validated .form-control:invalid,
  .form-control.is-invalid,
  .was-validated .custom-select:invalid,
  .custom-select.is-invalid {
    border-color: #f44336;
  }
  .was-validated .form-control:invalid:focus,
  .form-control.is-invalid:focus,
  .was-validated .custom-select:invalid:focus,
  .custom-select.is-invalid:focus {
    border-color: #f44336;
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.25);
  }
  .was-validated .form-control:invalid ~ .invalid-feedback,
  .was-validated .form-control:invalid ~ .invalid-tooltip,
  .form-control.is-invalid ~ .invalid-feedback,
  .form-control.is-invalid ~ .invalid-tooltip,
  .was-validated .custom-select:invalid ~ .invalid-feedback,
  .was-validated .custom-select:invalid ~ .invalid-tooltip,
  .custom-select.is-invalid ~ .invalid-feedback,
  .custom-select.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .form-control-file:invalid ~ .invalid-feedback,
  .was-validated .form-control-file:invalid ~ .invalid-tooltip,
  .form-control-file.is-invalid ~ .invalid-feedback,
  .form-control-file.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .form-check-input:invalid ~ .form-check-label,
  .form-check-input.is-invalid ~ .form-check-label {
    color: #f44336;
  }

  .was-validated .form-check-input:invalid ~ .invalid-feedback,
  .was-validated .form-check-input:invalid ~ .invalid-tooltip,
  .form-check-input.is-invalid ~ .invalid-feedback,
  .form-check-input.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .custom-control-input:invalid ~ .custom-control-label,
  .custom-control-input.is-invalid ~ .custom-control-label {
    color: #f44336;
  }
  .was-validated .custom-control-input:invalid ~ .custom-control-label::before,
  .custom-control-input.is-invalid ~ .custom-control-label::before {
    background-color: #fbb4af;
  }

  .was-validated .custom-control-input:invalid ~ .invalid-feedback,
  .was-validated .custom-control-input:invalid ~ .invalid-tooltip,
  .custom-control-input.is-invalid ~ .invalid-feedback,
  .custom-control-input.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated
    .custom-control-input:invalid:checked
    ~ .custom-control-label::before,
  .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
    background-color: #f77066;
  }

  .was-validated
    .custom-control-input:invalid:focus
    ~ .custom-control-label::before,
  .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(244, 67, 54, 0.25);
  }

  .was-validated .custom-file-input:invalid ~ .custom-file-label,
  .custom-file-input.is-invalid ~ .custom-file-label {
    border-color: #f44336;
  }
  .was-validated .custom-file-input:invalid ~ .custom-file-label::after,
  .custom-file-input.is-invalid ~ .custom-file-label::after {
    border-color: inherit;
  }

  .was-validated .custom-file-input:invalid ~ .invalid-feedback,
  .was-validated .custom-file-input:invalid ~ .invalid-tooltip,
  .custom-file-input.is-invalid ~ .invalid-feedback,
  .custom-file-input.is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .custom-file-input:invalid:focus ~ .custom-file-label,
  .custom-file-input.is-invalid:focus ~ .custom-file-label {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.25);
  }

  .form-inline {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  .form-inline .form-check {
    width: 100%;
  }
  @media (min-width: 576px) {
    .form-inline label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
    }
    .form-inline .form-group {
      display: flex;
      flex: 0 0 auto;
      flex-flow: row wrap;
      align-items: center;
      margin-bottom: 0;
    }
    .form-inline .form-control {
      display: inline-block;
      width: auto;
      vertical-align: middle;
    }
    .form-inline .form-control-plaintext {
      display: inline-block;
    }
    .form-inline .input-group,
    .form-inline .custom-select {
      width: auto;
    }
    .form-inline .form-check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      padding-left: 0;
    }
    .form-inline .form-check-input {
      position: relative;
      margin-top: 0;
      margin-right: 0.25rem;
      margin-left: 0;
    }
    .form-inline .custom-control {
      align-items: center;
      justify-content: center;
    }
    .form-inline .custom-control-label {
      margin-bottom: 0;
    }
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 0.813rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover,
  .btn:focus {
    text-decoration: none;
  }
  .btn:focus,
  .btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .btn.disabled,
  .btn:disabled {
    opacity: 0.65;
  }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  a.btn.disabled,
  fieldset:disabled a.btn {
    pointer-events: none;
  }

  .btn-primary {
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #53297c;
    border-color: #4d2673;
  }
  .btn-primary:focus,
  .btn-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }
  .btn-primary.disabled,
  .btn-primary:disabled {
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }
  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary:not(:disabled):not(.disabled).active,
  .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #4d2673;
    border-color: #462369;
  }
  .btn-primary:not(:disabled):not(.disabled):active:focus,
  .btn-primary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }

  .btn-secondary {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-secondary:hover {
    color: #fff;
    background-color: #3e3845;
    border-color: #38323e;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }
  .btn-secondary.disabled,
  .btn-secondary:disabled {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #38323e;
    border-color: #322d37;
  }
  .btn-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }

  .btn-success {
    color: #fff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  .btn-success:hover {
    color: #fff;
    background-color: #409444;
    border-color: #3d8b40;
  }
  .btn-success:focus,
  .btn-success.focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }
  .btn-success.disabled,
  .btn-success:disabled {
    color: #fff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  .btn-success:not(:disabled):not(.disabled):active,
  .btn-success:not(:disabled):not(.disabled).active,
  .show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #3d8b40;
    border-color: #39833c;
  }
  .btn-success:not(:disabled):not(.disabled):active:focus,
  .btn-success:not(:disabled):not(.disabled).active:focus,
  .show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }

  .btn-info {
    color: #fff;
    background-color: #003473;
    border-color: #003473;
  }
  .btn-info:hover {
    color: #fff;
    background-color: #00234d;
    border-color: #001d40;
  }
  .btn-info:focus,
  .btn-info.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 52, 115, 0.5);
  }
  .btn-info.disabled,
  .btn-info:disabled {
    color: #fff;
    background-color: #003473;
    border-color: #003473;
  }
  .btn-info:not(:disabled):not(.disabled):active,
  .btn-info:not(:disabled):not(.disabled).active,
  .show > .btn-info.dropdown-toggle {
    color: #fff;
    background-color: #001d40;
    border-color: #001733;
  }
  .btn-info:not(:disabled):not(.disabled):active:focus,
  .btn-info:not(:disabled):not(.disabled).active:focus,
  .show > .btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 52, 115, 0.5);
  }

  .btn-warning {
    color: #47404f;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-warning:hover {
    color: #47404f;
    background-color: #e0a800;
    border-color: #d39e00;
  }
  .btn-warning:focus,
  .btn-warning.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }
  .btn-warning.disabled,
  .btn-warning:disabled {
    color: #47404f;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-warning:not(:disabled):not(.disabled):active,
  .btn-warning:not(:disabled):not(.disabled).active,
  .show > .btn-warning.dropdown-toggle {
    color: #47404f;
    background-color: #d39e00;
    border-color: #c69500;
  }
  .btn-warning:not(:disabled):not(.disabled):active:focus,
  .btn-warning:not(:disabled):not(.disabled).active:focus,
  .show > .btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }

  .btn-danger {
    color: #fff;
    background-color: #f44336;
    border-color: #f44336;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #f22112;
    border-color: #ea1c0d;
  }
  .btn-danger:focus,
  .btn-danger.focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }
  .btn-danger.disabled,
  .btn-danger:disabled {
    color: #fff;
    background-color: #f44336;
    border-color: #f44336;
  }
  .btn-danger:not(:disabled):not(.disabled):active,
  .btn-danger:not(:disabled):not(.disabled).active,
  .show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #ea1c0d;
    border-color: #de1b0c;
  }
  .btn-danger:not(:disabled):not(.disabled):active:focus,
  .btn-danger:not(:disabled):not(.disabled).active:focus,
  .show > .btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }

  .btn-light {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-light:hover {
    color: #47404f;
    background-color: #a8a8a8;
    border-color: #a2a2a2;
  }
  .btn-light:focus,
  .btn-light.focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }
  .btn-light.disabled,
  .btn-light:disabled {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-light:not(:disabled):not(.disabled):active,
  .btn-light:not(:disabled):not(.disabled).active,
  .show > .btn-light.dropdown-toggle {
    color: #47404f;
    background-color: #a2a2a2;
    border-color: #9b9b9b;
  }
  .btn-light:not(:disabled):not(.disabled):active:focus,
  .btn-light:not(:disabled):not(.disabled).active:focus,
  .show > .btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }

  .btn-dark {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-dark:hover {
    color: #fff;
    background-color: #342f3a;
    border-color: #2e2932;
  }
  .btn-dark:focus,
  .btn-dark.focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }
  .btn-dark.disabled,
  .btn-dark:disabled {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-dark:not(:disabled):not(.disabled):active,
  .btn-dark:not(:disabled):not(.disabled).active,
  .show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #2e2932;
    border-color: #28242b;
  }
  .btn-dark:not(:disabled):not(.disabled):active:focus,
  .btn-dark:not(:disabled):not(.disabled).active:focus,
  .show > .btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }

  .btn-gray-100 {
    color: #47404f;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-gray-100:hover {
    color: #47404f;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
  .btn-gray-100:focus,
  .btn-gray-100.focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  .btn-gray-100.disabled,
  .btn-gray-100:disabled {
    color: #47404f;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-gray-100:not(:disabled):not(.disabled):active,
  .btn-gray-100:not(:disabled):not(.disabled).active,
  .show > .btn-gray-100.dropdown-toggle {
    color: #47404f;
    background-color: #dae0e5;
    border-color: #d3d9df;
  }
  .btn-gray-100:not(:disabled):not(.disabled):active:focus,
  .btn-gray-100:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-100.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }

  .btn-gray-200 {
    color: #47404f;
    background-color: #eee;
    border-color: #eee;
  }
  .btn-gray-200:hover {
    color: #47404f;
    background-color: #dbdbdb;
    border-color: #d5d5d5;
  }
  .btn-gray-200:focus,
  .btn-gray-200.focus {
    box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
  }
  .btn-gray-200.disabled,
  .btn-gray-200:disabled {
    color: #47404f;
    background-color: #eee;
    border-color: #eee;
  }
  .btn-gray-200:not(:disabled):not(.disabled):active,
  .btn-gray-200:not(:disabled):not(.disabled).active,
  .show > .btn-gray-200.dropdown-toggle {
    color: #47404f;
    background-color: #d5d5d5;
    border-color: #cecece;
  }
  .btn-gray-200:not(:disabled):not(.disabled):active:focus,
  .btn-gray-200:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-200.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
  }

  .btn-gray-300 {
    color: #47404f;
    background-color: #dee2e6;
    border-color: #dee2e6;
  }
  .btn-gray-300:hover {
    color: #47404f;
    background-color: #c8cfd6;
    border-color: #c1c9d0;
  }
  .btn-gray-300:focus,
  .btn-gray-300.focus {
    box-shadow: 0 0 0 0.2rem rgba(222, 226, 230, 0.5);
  }
  .btn-gray-300.disabled,
  .btn-gray-300:disabled {
    color: #47404f;
    background-color: #dee2e6;
    border-color: #dee2e6;
  }
  .btn-gray-300:not(:disabled):not(.disabled):active,
  .btn-gray-300:not(:disabled):not(.disabled).active,
  .show > .btn-gray-300.dropdown-toggle {
    color: #47404f;
    background-color: #c1c9d0;
    border-color: #bac2cb;
  }
  .btn-gray-300:not(:disabled):not(.disabled):active:focus,
  .btn-gray-300:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-300.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(222, 226, 230, 0.5);
  }

  .btn-gray-400 {
    color: #47404f;
    background-color: #ced4da;
    border-color: #ced4da;
  }
  .btn-gray-400:hover {
    color: #47404f;
    background-color: #b8c1ca;
    border-color: #b1bbc4;
  }
  .btn-gray-400:focus,
  .btn-gray-400.focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 212, 218, 0.5);
  }
  .btn-gray-400.disabled,
  .btn-gray-400:disabled {
    color: #47404f;
    background-color: #ced4da;
    border-color: #ced4da;
  }
  .btn-gray-400:not(:disabled):not(.disabled):active,
  .btn-gray-400:not(:disabled):not(.disabled).active,
  .show > .btn-gray-400.dropdown-toggle {
    color: #47404f;
    background-color: #b1bbc4;
    border-color: #aab4bf;
  }
  .btn-gray-400:not(:disabled):not(.disabled):active:focus,
  .btn-gray-400:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-400.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 212, 218, 0.5);
  }

  .btn-gray-500 {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-gray-500:hover {
    color: #47404f;
    background-color: #a8a8a8;
    border-color: #a2a2a2;
  }
  .btn-gray-500:focus,
  .btn-gray-500.focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }
  .btn-gray-500.disabled,
  .btn-gray-500:disabled {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-gray-500:not(:disabled):not(.disabled):active,
  .btn-gray-500:not(:disabled):not(.disabled).active,
  .show > .btn-gray-500.dropdown-toggle {
    color: #47404f;
    background-color: #a2a2a2;
    border-color: #9b9b9b;
  }
  .btn-gray-500:not(:disabled):not(.disabled):active:focus,
  .btn-gray-500:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-500.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }

  .btn-gray-600 {
    color: #fff;
    background-color: #70657b;
    border-color: #70657b;
  }
  .btn-gray-600:hover {
    color: #fff;
    background-color: #5d5466;
    border-color: #574e5f;
  }
  .btn-gray-600:focus,
  .btn-gray-600.focus {
    box-shadow: 0 0 0 0.2rem rgba(112, 101, 123, 0.5);
  }
  .btn-gray-600.disabled,
  .btn-gray-600:disabled {
    color: #fff;
    background-color: #70657b;
    border-color: #70657b;
  }
  .btn-gray-600:not(:disabled):not(.disabled):active,
  .btn-gray-600:not(:disabled):not(.disabled).active,
  .show > .btn-gray-600.dropdown-toggle {
    color: #fff;
    background-color: #574e5f;
    border-color: #504858;
  }
  .btn-gray-600:not(:disabled):not(.disabled):active:focus,
  .btn-gray-600:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-600.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(112, 101, 123, 0.5);
  }

  .btn-gray-700 {
    color: #fff;
    background-color: #665c70;
    border-color: #665c70;
  }
  .btn-gray-700:hover {
    color: #fff;
    background-color: #534b5b;
    border-color: #4d4554;
  }
  .btn-gray-700:focus,
  .btn-gray-700.focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 92, 112, 0.5);
  }
  .btn-gray-700.disabled,
  .btn-gray-700:disabled {
    color: #fff;
    background-color: #665c70;
    border-color: #665c70;
  }
  .btn-gray-700:not(:disabled):not(.disabled):active,
  .btn-gray-700:not(:disabled):not(.disabled).active,
  .show > .btn-gray-700.dropdown-toggle {
    color: #fff;
    background-color: #4d4554;
    border-color: #463f4d;
  }
  .btn-gray-700:not(:disabled):not(.disabled):active:focus,
  .btn-gray-700:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-700.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 92, 112, 0.5);
  }

  .btn-gray-800 {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-gray-800:hover {
    color: #fff;
    background-color: #3e3845;
    border-color: #38323e;
  }
  .btn-gray-800:focus,
  .btn-gray-800.focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }
  .btn-gray-800.disabled,
  .btn-gray-800:disabled {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-gray-800:not(:disabled):not(.disabled):active,
  .btn-gray-800:not(:disabled):not(.disabled).active,
  .show > .btn-gray-800.dropdown-toggle {
    color: #fff;
    background-color: #38323e;
    border-color: #322d37;
  }
  .btn-gray-800:not(:disabled):not(.disabled):active:focus,
  .btn-gray-800:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-800.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }

  .btn-gray-900 {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-gray-900:hover {
    color: #fff;
    background-color: #342f3a;
    border-color: #2e2932;
  }
  .btn-gray-900:focus,
  .btn-gray-900.focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }
  .btn-gray-900.disabled,
  .btn-gray-900:disabled {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-gray-900:not(:disabled):not(.disabled):active,
  .btn-gray-900:not(:disabled):not(.disabled).active,
  .show > .btn-gray-900.dropdown-toggle {
    color: #fff;
    background-color: #2e2932;
    border-color: #28242b;
  }
  .btn-gray-900:not(:disabled):not(.disabled):active:focus,
  .btn-gray-900:not(:disabled):not(.disabled).active:focus,
  .show > .btn-gray-900.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }

  .btn-outline-primary {
    color: #663399;
    background-color: transparent;
    background-image: none;
    border-color: #663399;
  }
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }
  .btn-outline-primary:focus,
  .btn-outline-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }
  .btn-outline-primary.disabled,
  .btn-outline-primary:disabled {
    color: #663399;
    background-color: transparent;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active,
  .btn-outline-primary:not(:disabled):not(.disabled).active,
  .show > .btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }
  .btn-outline-primary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }

  .btn-outline-secondary {
    color: #52495a;
    background-color: transparent;
    background-image: none;
    border-color: #52495a;
  }
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-outline-secondary:focus,
  .btn-outline-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }
  .btn-outline-secondary.disabled,
  .btn-outline-secondary:disabled {
    color: #52495a;
    background-color: transparent;
  }
  .btn-outline-secondary:not(:disabled):not(.disabled):active,
  .btn-outline-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-outline-secondary.dropdown-toggle {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }

  .btn-outline-success {
    color: #4caf50;
    background-color: transparent;
    background-image: none;
    border-color: #4caf50;
  }
  .btn-outline-success:hover {
    color: #fff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  .btn-outline-success:focus,
  .btn-outline-success.focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }
  .btn-outline-success.disabled,
  .btn-outline-success:disabled {
    color: #4caf50;
    background-color: transparent;
  }
  .btn-outline-success:not(:disabled):not(.disabled):active,
  .btn-outline-success:not(:disabled):not(.disabled).active,
  .show > .btn-outline-success.dropdown-toggle {
    color: #fff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  .btn-outline-success:not(:disabled):not(.disabled):active:focus,
  .btn-outline-success:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }

  .btn-outline-info {
    color: #003473;
    background-color: transparent;
    background-image: none;
    border-color: #003473;
  }
  .btn-outline-info:hover {
    color: #fff;
    background-color: #003473;
    border-color: #003473;
  }
  .btn-outline-info:focus,
  .btn-outline-info.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 52, 115, 0.5);
  }
  .btn-outline-info.disabled,
  .btn-outline-info:disabled {
    color: #003473;
    background-color: transparent;
  }
  .btn-outline-info:not(:disabled):not(.disabled):active,
  .btn-outline-info:not(:disabled):not(.disabled).active,
  .show > .btn-outline-info.dropdown-toggle {
    color: #fff;
    background-color: #003473;
    border-color: #003473;
  }
  .btn-outline-info:not(:disabled):not(.disabled):active:focus,
  .btn-outline-info:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 52, 115, 0.5);
  }

  .btn-outline-warning {
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107;
  }
  .btn-outline-warning:hover {
    color: #47404f;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-outline-warning:focus,
  .btn-outline-warning.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }
  .btn-outline-warning.disabled,
  .btn-outline-warning:disabled {
    color: #ffc107;
    background-color: transparent;
  }
  .btn-outline-warning:not(:disabled):not(.disabled):active,
  .btn-outline-warning:not(:disabled):not(.disabled).active,
  .show > .btn-outline-warning.dropdown-toggle {
    color: #47404f;
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .btn-outline-warning:not(:disabled):not(.disabled):active:focus,
  .btn-outline-warning:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }

  .btn-outline-danger {
    color: #f44336;
    background-color: transparent;
    background-image: none;
    border-color: #f44336;
  }
  .btn-outline-danger:hover {
    color: #fff;
    background-color: #f44336;
    border-color: #f44336;
  }
  .btn-outline-danger:focus,
  .btn-outline-danger.focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }
  .btn-outline-danger.disabled,
  .btn-outline-danger:disabled {
    color: #f44336;
    background-color: transparent;
  }
  .btn-outline-danger:not(:disabled):not(.disabled):active,
  .btn-outline-danger:not(:disabled):not(.disabled).active,
  .show > .btn-outline-danger.dropdown-toggle {
    color: #fff;
    background-color: #f44336;
    border-color: #f44336;
  }
  .btn-outline-danger:not(:disabled):not(.disabled):active:focus,
  .btn-outline-danger:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }

  .btn-outline-light {
    color: #bbb;
    background-color: transparent;
    background-image: none;
    border-color: #bbb;
  }
  .btn-outline-light:hover {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-outline-light:focus,
  .btn-outline-light.focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }
  .btn-outline-light.disabled,
  .btn-outline-light:disabled {
    color: #bbb;
    background-color: transparent;
  }
  .btn-outline-light:not(:disabled):not(.disabled):active,
  .btn-outline-light:not(:disabled):not(.disabled).active,
  .show > .btn-outline-light.dropdown-toggle {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-outline-light:not(:disabled):not(.disabled):active:focus,
  .btn-outline-light:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }

  .btn-outline-dark {
    color: #47404f;
    background-color: transparent;
    background-image: none;
    border-color: #47404f;
  }
  .btn-outline-dark:hover {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-outline-dark:focus,
  .btn-outline-dark.focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }
  .btn-outline-dark.disabled,
  .btn-outline-dark:disabled {
    color: #47404f;
    background-color: transparent;
  }
  .btn-outline-dark:not(:disabled):not(.disabled):active,
  .btn-outline-dark:not(:disabled):not(.disabled).active,
  .show > .btn-outline-dark.dropdown-toggle {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-outline-dark:not(:disabled):not(.disabled):active:focus,
  .btn-outline-dark:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }

  .btn-outline-gray-100 {
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;
  }
  .btn-outline-gray-100:hover {
    color: #47404f;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-gray-100:focus,
  .btn-outline-gray-100.focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  .btn-outline-gray-100.disabled,
  .btn-outline-gray-100:disabled {
    color: #f8f9fa;
    background-color: transparent;
  }
  .btn-outline-gray-100:not(:disabled):not(.disabled):active,
  .btn-outline-gray-100:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-100.dropdown-toggle {
    color: #47404f;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-outline-gray-100:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-100:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-100.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }

  .btn-outline-gray-200 {
    color: #eee;
    background-color: transparent;
    background-image: none;
    border-color: #eee;
  }
  .btn-outline-gray-200:hover {
    color: #47404f;
    background-color: #eee;
    border-color: #eee;
  }
  .btn-outline-gray-200:focus,
  .btn-outline-gray-200.focus {
    box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
  }
  .btn-outline-gray-200.disabled,
  .btn-outline-gray-200:disabled {
    color: #eee;
    background-color: transparent;
  }
  .btn-outline-gray-200:not(:disabled):not(.disabled):active,
  .btn-outline-gray-200:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-200.dropdown-toggle {
    color: #47404f;
    background-color: #eee;
    border-color: #eee;
  }
  .btn-outline-gray-200:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-200:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-200.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
  }

  .btn-outline-gray-300 {
    color: #dee2e6;
    background-color: transparent;
    background-image: none;
    border-color: #dee2e6;
  }
  .btn-outline-gray-300:hover {
    color: #47404f;
    background-color: #dee2e6;
    border-color: #dee2e6;
  }
  .btn-outline-gray-300:focus,
  .btn-outline-gray-300.focus {
    box-shadow: 0 0 0 0.2rem rgba(222, 226, 230, 0.5);
  }
  .btn-outline-gray-300.disabled,
  .btn-outline-gray-300:disabled {
    color: #dee2e6;
    background-color: transparent;
  }
  .btn-outline-gray-300:not(:disabled):not(.disabled):active,
  .btn-outline-gray-300:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-300.dropdown-toggle {
    color: #47404f;
    background-color: #dee2e6;
    border-color: #dee2e6;
  }
  .btn-outline-gray-300:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-300:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-300.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(222, 226, 230, 0.5);
  }

  .btn-outline-gray-400 {
    color: #ced4da;
    background-color: transparent;
    background-image: none;
    border-color: #ced4da;
  }
  .btn-outline-gray-400:hover {
    color: #47404f;
    background-color: #ced4da;
    border-color: #ced4da;
  }
  .btn-outline-gray-400:focus,
  .btn-outline-gray-400.focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 212, 218, 0.5);
  }
  .btn-outline-gray-400.disabled,
  .btn-outline-gray-400:disabled {
    color: #ced4da;
    background-color: transparent;
  }
  .btn-outline-gray-400:not(:disabled):not(.disabled):active,
  .btn-outline-gray-400:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-400.dropdown-toggle {
    color: #47404f;
    background-color: #ced4da;
    border-color: #ced4da;
  }
  .btn-outline-gray-400:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-400:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-400.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(206, 212, 218, 0.5);
  }

  .btn-outline-gray-500 {
    color: #bbb;
    background-color: transparent;
    background-image: none;
    border-color: #bbb;
  }
  .btn-outline-gray-500:hover {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-outline-gray-500:focus,
  .btn-outline-gray-500.focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }
  .btn-outline-gray-500.disabled,
  .btn-outline-gray-500:disabled {
    color: #bbb;
    background-color: transparent;
  }
  .btn-outline-gray-500:not(:disabled):not(.disabled):active,
  .btn-outline-gray-500:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-500.dropdown-toggle {
    color: #47404f;
    background-color: #bbb;
    border-color: #bbb;
  }
  .btn-outline-gray-500:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-500:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-500.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(187, 187, 187, 0.5);
  }

  .btn-outline-gray-600 {
    color: #70657b;
    background-color: transparent;
    background-image: none;
    border-color: #70657b;
  }
  .btn-outline-gray-600:hover {
    color: #fff;
    background-color: #70657b;
    border-color: #70657b;
  }
  .btn-outline-gray-600:focus,
  .btn-outline-gray-600.focus {
    box-shadow: 0 0 0 0.2rem rgba(112, 101, 123, 0.5);
  }
  .btn-outline-gray-600.disabled,
  .btn-outline-gray-600:disabled {
    color: #70657b;
    background-color: transparent;
  }
  .btn-outline-gray-600:not(:disabled):not(.disabled):active,
  .btn-outline-gray-600:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-600.dropdown-toggle {
    color: #fff;
    background-color: #70657b;
    border-color: #70657b;
  }
  .btn-outline-gray-600:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-600:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-600.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(112, 101, 123, 0.5);
  }

  .btn-outline-gray-700 {
    color: #665c70;
    background-color: transparent;
    background-image: none;
    border-color: #665c70;
  }
  .btn-outline-gray-700:hover {
    color: #fff;
    background-color: #665c70;
    border-color: #665c70;
  }
  .btn-outline-gray-700:focus,
  .btn-outline-gray-700.focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 92, 112, 0.5);
  }
  .btn-outline-gray-700.disabled,
  .btn-outline-gray-700:disabled {
    color: #665c70;
    background-color: transparent;
  }
  .btn-outline-gray-700:not(:disabled):not(.disabled):active,
  .btn-outline-gray-700:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-700.dropdown-toggle {
    color: #fff;
    background-color: #665c70;
    border-color: #665c70;
  }
  .btn-outline-gray-700:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-700:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-700.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 92, 112, 0.5);
  }

  .btn-outline-gray-800 {
    color: #52495a;
    background-color: transparent;
    background-image: none;
    border-color: #52495a;
  }
  .btn-outline-gray-800:hover {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-outline-gray-800:focus,
  .btn-outline-gray-800.focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }
  .btn-outline-gray-800.disabled,
  .btn-outline-gray-800:disabled {
    color: #52495a;
    background-color: transparent;
  }
  .btn-outline-gray-800:not(:disabled):not(.disabled):active,
  .btn-outline-gray-800:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-800.dropdown-toggle {
    color: #fff;
    background-color: #52495a;
    border-color: #52495a;
  }
  .btn-outline-gray-800:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-800:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-800.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(82, 73, 90, 0.5);
  }

  .btn-outline-gray-900 {
    color: #47404f;
    background-color: transparent;
    background-image: none;
    border-color: #47404f;
  }
  .btn-outline-gray-900:hover {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-outline-gray-900:focus,
  .btn-outline-gray-900.focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }
  .btn-outline-gray-900.disabled,
  .btn-outline-gray-900:disabled {
    color: #47404f;
    background-color: transparent;
  }
  .btn-outline-gray-900:not(:disabled):not(.disabled):active,
  .btn-outline-gray-900:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray-900.dropdown-toggle {
    color: #fff;
    background-color: #47404f;
    border-color: #47404f;
  }
  .btn-outline-gray-900:not(:disabled):not(.disabled):active:focus,
  .btn-outline-gray-900:not(:disabled):not(.disabled).active:focus,
  .show > .btn-outline-gray-900.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(71, 64, 79, 0.5);
  }

  .btn-link {
    font-weight: 400;
    color: #663399;
    background-color: transparent;
  }
  .btn-link:hover {
    color: #402060;
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent;
  }
  .btn-link:focus,
  .btn-link.focus {
    text-decoration: underline;
    border-color: transparent;
    box-shadow: none;
  }
  .btn-link:disabled,
  .btn-link.disabled {
    color: #70657b;
    pointer-events: none;
  }

  .btn-lg,
  .btn-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.01625rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  .btn-sm,
  .btn-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }

  .btn-block {
    display: block;
    width: 100%;
  }
  .btn-block + .btn-block {
    margin-top: 0.5rem;
  }

  input[type="submit"].btn-block,
  input[type="reset"].btn-block,
  input[type="button"].btn-block {
    width: 100%;
  }

  .fade {
    transition: opacity 0.15s linear;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }
  .fade:not(.show) {
    opacity: 0;
  }

  .collapse:not(.show) {
    display: none;
  }

  .collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none;
    }
  }

  .dropup,
  .dropright,
  .dropdown,
  .dropleft {
    position: relative;
  }

  .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 0.813rem;
    color: #47404f;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }

  .dropdown-menu-right {
    right: 0;
    left: auto;
  }

  .dropup .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 0.125rem;
  }

  .dropup .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0;
    border-right: 0.3em solid transparent;
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent;
  }

  .dropup .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropright .dropdown-menu {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: 0.125rem;
  }

  .dropright .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0;
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
  }

  .dropright .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropright .dropdown-toggle::after {
    vertical-align: 0;
  }

  .dropleft .dropdown-menu {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: 0.125rem;
  }

  .dropleft .dropdown-toggle::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
  }

  .dropleft .dropdown-toggle::after {
    display: none;
  }

  .dropleft .dropdown-toggle::before {
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-bottom: 0.3em solid transparent;
  }

  .dropleft .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropleft .dropdown-toggle::before {
    vertical-align: 0;
  }

  .dropdown-menu[x-placement^="top"],
  .dropdown-menu[x-placement^="right"],
  .dropdown-menu[x-placement^="bottom"],
  .dropdown-menu[x-placement^="left"] {
    right: auto;
    bottom: auto;
  }

  .dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #eee;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #47404f;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  .dropdown-item:hover,
  .dropdown-item:focus {
    color: #3b3541;
    text-decoration: none;
    background-color: #f8f9fa;
  }
  .dropdown-item.active,
  .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #663399;
  }
  .dropdown-item.disabled,
  .dropdown-item:disabled {
    color: #70657b;
    background-color: transparent;
  }

  .dropdown-menu.show {
    display: block;
  }

  .dropdown-header {
    display: block;
    padding: 0.5rem 1.5rem;
    margin-bottom: 0;
    font-size: 0.71137rem;
    color: #70657b;
    white-space: nowrap;
  }

  .dropdown-item-text {
    display: block;
    padding: 0.25rem 1.5rem;
    color: #47404f;
  }

  .btn-group,
  .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }
  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    flex: 0 1 auto;
  }
  .btn-group > .btn:hover,
  .btn-group-vertical > .btn:hover {
    z-index: 1;
  }
  .btn-group > .btn:focus,
  .btn-group > .btn:active,
  .btn-group > .btn.active,
  .btn-group-vertical > .btn:focus,
  .btn-group-vertical > .btn:active,
  .btn-group-vertical > .btn.active {
    z-index: 1;
  }
  .btn-group .btn + .btn,
  .btn-group .btn + .btn-group,
  .btn-group .btn-group + .btn,
  .btn-group .btn-group + .btn-group,
  .btn-group-vertical .btn + .btn,
  .btn-group-vertical .btn + .btn-group,
  .btn-group-vertical .btn-group + .btn,
  .btn-group-vertical .btn-group + .btn-group {
    margin-left: -1px;
  }

  .btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .btn-toolbar .input-group {
    width: auto;
  }

  .btn-group > .btn:first-child {
    margin-left: 0;
  }

  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .dropdown-toggle-split {
    padding-right: 0.5625rem;
    padding-left: 0.5625rem;
  }
  .dropdown-toggle-split::after,
  .dropup .dropdown-toggle-split::after,
  .dropright .dropdown-toggle-split::after {
    margin-left: 0;
  }
  .dropleft .dropdown-toggle-split::before {
    margin-right: 0;
  }

  .btn-sm + .dropdown-toggle-split,
  .btn-group-sm > .btn + .dropdown-toggle-split {
    padding-right: 0.375rem;
    padding-left: 0.375rem;
  }

  .btn-lg + .dropdown-toggle-split,
  .btn-group-lg > .btn + .dropdown-toggle-split {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }

  .btn-group-vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .btn-group-vertical .btn,
  .btn-group-vertical .btn-group {
    width: 100%;
  }
  .btn-group-vertical > .btn + .btn,
  .btn-group-vertical > .btn + .btn-group,
  .btn-group-vertical > .btn-group + .btn,
  .btn-group-vertical > .btn-group + .btn-group {
    margin-top: -1px;
    margin-left: 0;
  }
  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group-vertical > .btn-group:not(:last-child) > .btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .btn-group-vertical > .btn:not(:first-child),
  .btn-group-vertical > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .btn-group-toggle > .btn,
  .btn-group-toggle > .btn-group > .btn {
    margin-bottom: 0;
  }
  .btn-group-toggle > .btn input[type="radio"],
  .btn-group-toggle > .btn input[type="checkbox"],
  .btn-group-toggle > .btn-group > .btn input[type="radio"],
  .btn-group-toggle > .btn-group > .btn input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .form-control,
  .input-group > .custom-select,
  .input-group > .custom-file {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
  }
  .input-group > .form-control + .form-control,
  .input-group > .form-control + .custom-select,
  .input-group > .form-control + .custom-file,
  .input-group > .custom-select + .form-control,
  .input-group > .custom-select + .custom-select,
  .input-group > .custom-select + .custom-file,
  .input-group > .custom-file + .form-control,
  .input-group > .custom-file + .custom-select,
  .input-group > .custom-file + .custom-file {
    margin-left: -1px;
  }
  .input-group > .form-control:focus,
  .input-group > .custom-select:focus,
  .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {
    z-index: 3;
  }
  .input-group > .custom-file .custom-file-input:focus {
    z-index: 4;
  }
  .input-group > .form-control:not(:last-child),
  .input-group > .custom-select:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group > .form-control:not(:first-child),
  .input-group > .custom-select:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .input-group > .custom-file {
    display: flex;
    align-items: center;
  }
  .input-group > .custom-file:not(:last-child) .custom-file-label,
  .input-group > .custom-file:not(:last-child) .custom-file-label::after {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input-group > .custom-file:not(:first-child) .custom-file-label {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .input-group-prepend,
  .input-group-append {
    display: flex;
  }
  .input-group-prepend .btn,
  .input-group-append .btn {
    position: relative;
    z-index: 2;
  }
  .input-group-prepend .btn + .btn,
  .input-group-prepend .btn + .input-group-text,
  .input-group-prepend .input-group-text + .input-group-text,
  .input-group-prepend .input-group-text + .btn,
  .input-group-append .btn + .btn,
  .input-group-append .btn + .input-group-text,
  .input-group-append .input-group-text + .input-group-text,
  .input-group-append .input-group-text + .btn {
    margin-left: -1px;
  }

  .input-group-prepend {
    margin-right: -1px;
  }

  .input-group-append {
    margin-left: -1px;
  }

  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 0.813rem;
    font-weight: 400;
    line-height: 1.5;
    color: #665c70;
    text-align: center;
    white-space: nowrap;
    background-color: #eee;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  .input-group-text input[type="radio"],
  .input-group-text input[type="checkbox"] {
    margin-top: 0;
  }

  .input-group-lg > .form-control,
  .input-group-lg > .input-group-prepend > .input-group-text,
  .input-group-lg > .input-group-append > .input-group-text,
  .input-group-lg > .input-group-prepend > .btn,
  .input-group-lg > .input-group-append > .btn {
    height: calc(2.52438rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.01625rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  .input-group-sm > .form-control,
  .input-group-sm > .input-group-prepend > .input-group-text,
  .input-group-sm > .input-group-append > .input-group-text,
  .input-group-sm > .input-group-prepend > .btn,
  .input-group-sm > .input-group-append > .btn {
    height: calc(1.56706rem + 2px);
    padding: 0.25rem 0.5rem;
    font-size: 0.71137rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }

  .input-group > .input-group-prepend > .btn,
  .input-group > .input-group-prepend > .input-group-text,
  .input-group > .input-group-append:not(:last-child) > .btn,
  .input-group > .input-group-append:not(:last-child) > .input-group-text,
  .input-group
    > .input-group-append:last-child
    > .btn:not(:last-child):not(.dropdown-toggle),
  .input-group
    > .input-group-append:last-child
    > .input-group-text:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .input-group > .input-group-append > .btn,
  .input-group > .input-group-append > .input-group-text,
  .input-group > .input-group-prepend:not(:first-child) > .btn,
  .input-group > .input-group-prepend:not(:first-child) > .input-group-text,
  .input-group > .input-group-prepend:first-child > .btn:not(:first-child),
  .input-group
    > .input-group-prepend:first-child
    > .input-group-text:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .custom-control {
    position: relative;
    display: block;
    min-height: 1.2195rem;
    padding-left: 1.5rem;
  }

  .custom-control-inline {
    display: inline-flex;
    margin-right: 1rem;
  }

  .custom-control-input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    background-color: #663399;
  }
  .custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-control-input:active ~ .custom-control-label::before {
    color: #fff;
    background-color: #bf9fdf;
  }
  .custom-control-input:disabled ~ .custom-control-label {
    color: #70657b;
  }
  .custom-control-input:disabled ~ .custom-control-label::before {
    background-color: #eee;
  }

  .custom-control-label {
    position: relative;
    margin-bottom: 0;
  }
  .custom-control-label::before {
    position: absolute;
    top: 0.10975rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    content: "";
    user-select: none;
    background-color: #dee2e6;
  }
  .custom-control-label::after {
    position: absolute;
    top: 0.10975rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  .custom-checkbox .custom-control-label::before {
    border-radius: 0.25rem;
  }

  .custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label::before {
    background-color: #663399;
  }

  .custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
  }

  .custom-checkbox
    .custom-control-input:indeterminate
    ~ .custom-control-label::before {
    background-color: #663399;
  }

  .custom-checkbox
    .custom-control-input:indeterminate
    ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
  }

  .custom-checkbox
    .custom-control-input:disabled:checked
    ~ .custom-control-label::before {
    background-color: rgba(102, 51, 153, 0.5);
  }

  .custom-checkbox
    .custom-control-input:disabled:indeterminate
    ~ .custom-control-label::before {
    background-color: rgba(102, 51, 153, 0.5);
  }

  .custom-radio .custom-control-label::before {
    border-radius: 50%;
  }

  .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #663399;
  }

  .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
  }

  .custom-radio
    .custom-control-input:disabled:checked
    ~ .custom-control-label::before {
    background-color: rgba(102, 51, 153, 0.5);
  }

  .custom-select {
    display: inline-block;
    width: 100%;
    height: calc(1.9695rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    line-height: 1.5;
    color: #665c70;
    vertical-align: middle;
    background: #fff
      url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%2352495a' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
      no-repeat right 0.75rem center;
    background-size: 8px 10px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    appearance: none;
  }
  .custom-select:focus {
    border-color: #a679d2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(166, 121, 210, 0.5);
  }
  .custom-select:focus::-ms-value {
    color: #665c70;
    background-color: #fff;
  }
  .custom-select[multiple],
  .custom-select[size]:not([size="1"]) {
    height: auto;
    padding-right: 0.75rem;
    background-image: none;
  }
  .custom-select:disabled {
    color: #70657b;
    background-color: #eee;
  }
  .custom-select::-ms-expand {
    opacity: 0;
  }

  .custom-select-sm {
    height: calc(1.56706rem + 2px);
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 75%;
  }

  .custom-select-lg {
    height: calc(2.52438rem + 2px);
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 125%;
  }

  .custom-file {
    position: relative;
    display: inline-block;
    width: 100%;
    height: calc(1.9695rem + 2px);
    margin-bottom: 0;
  }

  .custom-file-input {
    position: relative;
    z-index: 2;
    width: 100%;
    height: calc(1.9695rem + 2px);
    margin: 0;
    opacity: 0;
  }
  .custom-file-input:focus ~ .custom-file-label {
    border-color: #a679d2;
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-file-input:focus ~ .custom-file-label::after {
    border-color: #a679d2;
  }
  .custom-file-input:disabled ~ .custom-file-label {
    background-color: #eee;
  }
  .custom-file-input:lang(en) ~ .custom-file-label::after {
    content: "Browse";
  }

  .custom-file-label {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: calc(1.9695rem + 2px);
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #665c70;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  .custom-file-label::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: block;
    height: 1.9695rem;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #665c70;
    content: "Browse";
    background-color: #eee;
    border-left: 1px solid #ced4da;
    border-radius: 0 0.25rem 0.25rem 0;
  }

  .custom-range {
    width: 100%;
    padding-left: 0;
    background-color: transparent;
    appearance: none;
  }
  .custom-range:focus {
    outline: none;
  }
  .custom-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-range:focus::-ms-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .custom-range::-moz-focus-outer {
    border: 0;
  }
  .custom-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #663399;
    border: 0;
    border-radius: 1rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .custom-range::-webkit-slider-thumb {
      transition: none;
    }
  }
  .custom-range::-webkit-slider-thumb:active {
    background-color: #bf9fdf;
  }
  .custom-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .custom-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #663399;
    border: 0;
    border-radius: 1rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .custom-range::-moz-range-thumb {
      transition: none;
    }
  }
  .custom-range::-moz-range-thumb:active {
    background-color: #bf9fdf;
  }
  .custom-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem;
  }
  .custom-range::-ms-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: 0;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    background-color: #663399;
    border: 0;
    border-radius: 1rem;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .custom-range::-ms-thumb {
      transition: none;
    }
  }
  .custom-range::-ms-thumb:active {
    background-color: #bf9fdf;
  }
  .custom-range::-ms-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: transparent;
    border-color: transparent;
    border-width: 0.5rem;
  }
  .custom-range::-ms-fill-lower {
    background-color: #dee2e6;
    border-radius: 1rem;
  }
  .custom-range::-ms-fill-upper {
    margin-right: 15px;
    background-color: #dee2e6;
    border-radius: 1rem;
  }

  .custom-control-label::before,
  .custom-file-label,
  .custom-select {
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .custom-control-label::before,
    .custom-file-label,
    .custom-select {
      transition: none;
    }
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
  }
  .nav-link:hover,
  .nav-link:focus {
    text-decoration: none;
  }
  .nav-link.disabled {
    color: #70657b;
  }

  .nav-tabs {
    border-bottom: 1px solid #dee2e6;
  }
  .nav-tabs .nav-item {
    margin-bottom: -1px;
  }
  .nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-color: #eee #eee #dee2e6;
  }
  .nav-tabs .nav-link.disabled {
    color: #70657b;
    background-color: transparent;
    border-color: transparent;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #665c70;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .nav-pills .nav-link {
    border-radius: 0.25rem;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #663399;
  }

  .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }

  .nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }

  .tab-content > .tab-pane {
    display: none;
  }

  .tab-content > .active {
    display: block;
  }

  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  .navbar > .container,
  .navbar > .container-fluid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-brand {
    display: inline-block;
    padding-top: 0.34756rem;
    padding-bottom: 0.34756rem;
    margin-right: 1rem;
    font-size: 1.01625rem;
    line-height: inherit;
    white-space: nowrap;
  }
  .navbar-brand:hover,
  .navbar-brand:focus {
    text-decoration: none;
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }

  .navbar-text {
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.01625rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .navbar-toggler:hover,
  .navbar-toggler:focus {
    text-decoration: none;
  }
  .navbar-toggler:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
  }

  @media (max-width: 575.98px) {
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 576px) {
    .navbar-expand-sm {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid {
      flex-wrap: nowrap;
    }
    .navbar-expand-sm .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 768px) {
    .navbar-expand-md {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid {
      flex-wrap: nowrap;
    }
    .navbar-expand-md .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 991.98px) {
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 992px) {
    .navbar-expand-lg {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid {
      flex-wrap: nowrap;
    }
    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 1199.98px) {
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 1200px) {
    .navbar-expand-xl {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid {
      flex-wrap: nowrap;
    }
    .navbar-expand-xl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler {
      display: none;
    }
  }

  .navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand > .container,
  .navbar-expand > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-expand .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand > .container,
  .navbar-expand > .container-fluid {
    flex-wrap: nowrap;
  }
  .navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand .navbar-toggler {
    display: none;
  }

  .navbar-light .navbar-brand {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-brand:hover,
  .navbar-light .navbar-brand:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
  }
  .navbar-light .navbar-nav .nav-link:hover,
  .navbar-light .navbar-nav .nav-link:focus {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
  }

  .navbar-light .navbar-nav .show > .nav-link,
  .navbar-light .navbar-nav .active > .nav-link,
  .navbar-light .navbar-nav .nav-link.show,
  .navbar-light .navbar-nav .nav-link.active {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }

  .navbar-light .navbar-text {
    color: rgba(0, 0, 0, 0.5);
  }
  .navbar-light .navbar-text a {
    color: rgba(0, 0, 0, 0.9);
  }
  .navbar-light .navbar-text a:hover,
  .navbar-light .navbar-text a:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-dark .navbar-brand {
    color: #fff;
  }
  .navbar-dark .navbar-brand:hover,
  .navbar-dark .navbar-brand:focus {
    color: #fff;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.5);
  }
  .navbar-dark .navbar-nav .nav-link:hover,
  .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 0.75);
  }
  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.25);
  }

  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .active > .nav-link,
  .navbar-dark .navbar-nav .nav-link.show,
  .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
  }

  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }

  .navbar-dark .navbar-text {
    color: rgba(255, 255, 255, 0.5);
  }
  .navbar-dark .navbar-text a {
    color: #fff;
  }
  .navbar-dark .navbar-text a:hover,
  .navbar-dark .navbar-text a:focus {
    color: #fff;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  .card > hr {
    margin-right: 0;
    margin-left: 0;
  }
  .card > .list-group:first-child .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .card > .list-group:last-child .list-group-item:last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
  }

  .card-title {
    margin-bottom: 0.75rem;
  }

  .card-subtitle {
    margin-top: -0.375rem;
    margin-bottom: 0;
  }

  .card-text:last-child {
    margin-bottom: 0;
  }

  .card-link:hover {
    text-decoration: none;
  }

  .card-link + .card-link {
    margin-left: 1.25rem;
  }

  .card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }
  .card-header + .list-group .list-group-item:first-child {
    border-top: 0;
  }

  .card-footer {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  }
  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }

  .card-header-tabs {
    margin-right: -0.625rem;
    margin-bottom: -0.75rem;
    margin-left: -0.625rem;
    border-bottom: 0;
  }

  .card-header-pills {
    margin-right: -0.625rem;
    margin-left: -0.625rem;
  }

  .card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
  }

  .card-img {
    width: 100%;
    border-radius: calc(0.25rem - 1px);
  }

  .card-img-top {
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }

  .card-img-bottom {
    width: 100%;
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }

  .card-deck {
    display: flex;
    flex-direction: column;
  }
  .card-deck .card {
    margin-bottom: 15px;
  }
  @media (min-width: 576px) {
    .card-deck {
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
    .card-deck .card {
      display: flex;
      flex: 1 0 0%;
      flex-direction: column;
      margin-right: 15px;
      margin-bottom: 0;
      margin-left: 15px;
    }
  }

  .card-group {
    display: flex;
    flex-direction: column;
  }
  .card-group > .card {
    margin-bottom: 15px;
  }
  @media (min-width: 576px) {
    .card-group {
      flex-flow: row wrap;
    }
    .card-group > .card {
      flex: 1 0 0%;
      margin-bottom: 0;
    }
    .card-group > .card + .card {
      margin-left: 0;
      border-left: 0;
    }
    .card-group > .card:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .card-group > .card:first-child .card-img-top,
    .card-group > .card:first-child .card-header {
      border-top-right-radius: 0;
    }
    .card-group > .card:first-child .card-img-bottom,
    .card-group > .card:first-child .card-footer {
      border-bottom-right-radius: 0;
    }
    .card-group > .card:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .card-group > .card:last-child .card-img-top,
    .card-group > .card:last-child .card-header {
      border-top-left-radius: 0;
    }
    .card-group > .card:last-child .card-img-bottom,
    .card-group > .card:last-child .card-footer {
      border-bottom-left-radius: 0;
    }
    .card-group > .card:only-child {
      border-radius: 0.25rem;
    }
    .card-group > .card:only-child .card-img-top,
    .card-group > .card:only-child .card-header {
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }
    .card-group > .card:only-child .card-img-bottom,
    .card-group > .card:only-child .card-footer {
      border-bottom-right-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {
      border-radius: 0;
    }
    .card-group
      > .card:not(:first-child):not(:last-child):not(:only-child)
      .card-img-top,
    .card-group
      > .card:not(:first-child):not(:last-child):not(:only-child)
      .card-img-bottom,
    .card-group
      > .card:not(:first-child):not(:last-child):not(:only-child)
      .card-header,
    .card-group
      > .card:not(:first-child):not(:last-child):not(:only-child)
      .card-footer {
      border-radius: 0;
    }
  }

  .card-columns .card {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 576px) {
    .card-columns {
      column-count: 3;
      column-gap: 1.25rem;
      orphans: 1;
      widows: 1;
    }
    .card-columns .card {
      display: inline-block;
      width: 100%;
    }
  }

  .accordion .card:not(:first-of-type):not(:last-of-type) {
    border-bottom: 0;
    border-radius: 0;
  }

  .accordion .card:not(:first-of-type) .card-header:first-child {
    border-radius: 0;
  }

  .accordion .card:first-of-type {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .accordion .card:last-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #eee;
    border-radius: 0.25rem;
  }

  .breadcrumb-item + .breadcrumb-item {
    padding-left: 0.5rem;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #70657b;
    content: "/";
  }

  .breadcrumb-item + .breadcrumb-item:hover::before {
    text-decoration: underline;
  }

  .breadcrumb-item + .breadcrumb-item:hover::before {
    text-decoration: none;
  }

  .breadcrumb-item.active {
    color: #70657b;
  }

  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
  }

  .page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #663399;
    background-color: #fff;
    border: 1px solid #dee2e6;
  }
  .page-link:hover {
    z-index: 2;
    color: #402060;
    text-decoration: none;
    background-color: #eee;
    border-color: #dee2e6;
  }
  .page-link:focus {
    z-index: 2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.25);
  }
  .page-link:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }

  .page-item.disabled .page-link {
    color: #70657b;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
  }

  .pagination-lg .page-link {
    padding: 0.75rem 1.5rem;
    font-size: 1.01625rem;
    line-height: 1.5;
  }

  .pagination-lg .page-item:first-child .page-link {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  .pagination-lg .page-item:last-child .page-link {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  .pagination-sm .page-link {
    padding: 0.25rem 0.5rem;
    font-size: 0.71137rem;
    line-height: 1.5;
  }

  .pagination-sm .page-item:first-child .page-link {
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }

  .pagination-sm .page-item:last-child .page-link {
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }

  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }
  .badge:empty {
    display: none;
  }

  .btn .badge {
    position: relative;
    top: -1px;
  }

  .badge-pill {
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
  }

  .badge-primary {
    color: #fff;
    background-color: #663399;
  }
  .badge-primary[href]:hover,
  .badge-primary[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #4d2673;
  }

  .badge-secondary {
    color: #fff;
    background-color: #52495a;
  }
  .badge-secondary[href]:hover,
  .badge-secondary[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #38323e;
  }

  .badge-success {
    color: #fff;
    background-color: #4caf50;
  }
  .badge-success[href]:hover,
  .badge-success[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #3d8b40;
  }

  .badge-info {
    color: #fff;
    background-color: #003473;
  }
  .badge-info[href]:hover,
  .badge-info[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #001d40;
  }

  .badge-warning {
    color: #47404f;
    background-color: #ffc107;
  }
  .badge-warning[href]:hover,
  .badge-warning[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #d39e00;
  }

  .badge-danger {
    color: #fff;
    background-color: #f44336;
  }
  .badge-danger[href]:hover,
  .badge-danger[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #ea1c0d;
  }

  .badge-light {
    color: #47404f;
    background-color: #bbb;
  }
  .badge-light[href]:hover,
  .badge-light[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #a2a2a2;
  }

  .badge-dark {
    color: #fff;
    background-color: #47404f;
  }
  .badge-dark[href]:hover,
  .badge-dark[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #2e2932;
  }

  .badge-gray-100 {
    color: #47404f;
    background-color: #f8f9fa;
  }
  .badge-gray-100[href]:hover,
  .badge-gray-100[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #dae0e5;
  }

  .badge-gray-200 {
    color: #47404f;
    background-color: #eee;
  }
  .badge-gray-200[href]:hover,
  .badge-gray-200[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #d5d5d5;
  }

  .badge-gray-300 {
    color: #47404f;
    background-color: #dee2e6;
  }
  .badge-gray-300[href]:hover,
  .badge-gray-300[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #c1c9d0;
  }

  .badge-gray-400 {
    color: #47404f;
    background-color: #ced4da;
  }
  .badge-gray-400[href]:hover,
  .badge-gray-400[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #b1bbc4;
  }

  .badge-gray-500 {
    color: #47404f;
    background-color: #bbb;
  }
  .badge-gray-500[href]:hover,
  .badge-gray-500[href]:focus {
    color: #47404f;
    text-decoration: none;
    background-color: #a2a2a2;
  }

  .badge-gray-600 {
    color: #fff;
    background-color: #70657b;
  }
  .badge-gray-600[href]:hover,
  .badge-gray-600[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #574e5f;
  }

  .badge-gray-700 {
    color: #fff;
    background-color: #665c70;
  }
  .badge-gray-700[href]:hover,
  .badge-gray-700[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #4d4554;
  }

  .badge-gray-800 {
    color: #fff;
    background-color: #52495a;
  }
  .badge-gray-800[href]:hover,
  .badge-gray-800[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #38323e;
  }

  .badge-gray-900 {
    color: #fff;
    background-color: #47404f;
  }
  .badge-gray-900[href]:hover,
  .badge-gray-900[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #2e2932;
  }

  .jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #eee;
    border-radius: 0.3rem;
  }
  @media (min-width: 576px) {
    .jumbotron {
      padding: 4rem 2rem;
    }
  }

  .jumbotron-fluid {
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
  }

  .alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

  .alert-heading {
    color: inherit;
  }

  .alert-link {
    font-weight: 700;
  }

  .alert-dismissible {
    padding-right: 3.7195rem;
  }
  .alert-dismissible .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.75rem 1.25rem;
    color: inherit;
  }

  .alert-primary {
    color: #351b50;
    background-color: #e0d6eb;
    border-color: #d4c6e2;
  }
  .alert-primary hr {
    border-top-color: #c7b5d9;
  }
  .alert-primary .alert-link {
    color: #1c0e2a;
  }

  .alert-secondary {
    color: #2a262f;
    background-color: #dcdbde;
    border-color: #ceccd1;
  }
  .alert-secondary hr {
    border-top-color: #c1bfc5;
  }
  .alert-secondary .alert-link {
    color: #110f13;
  }

  .alert-success {
    color: #285b2a;
    background-color: #dbefdc;
    border-color: #cde9ce;
  }
  .alert-success hr {
    border-top-color: #bbe1bd;
  }
  .alert-success .alert-link {
    color: #18381a;
  }

  .alert-info {
    color: #001b3c;
    background-color: #ccd6e3;
    border-color: #b8c6d8;
  }
  .alert-info hr {
    border-top-color: #a8b9cf;
  }
  .alert-info .alert-link {
    color: #000409;
  }

  .alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
  .alert-warning hr {
    border-top-color: #ffe8a1;
  }
  .alert-warning .alert-link {
    color: #533f03;
  }

  .alert-danger {
    color: #7f231c;
    background-color: #fdd9d7;
    border-color: #fccac7;
  }
  .alert-danger hr {
    border-top-color: #fbb3af;
  }
  .alert-danger .alert-link {
    color: #551713;
  }

  .alert-light {
    color: #616161;
    background-color: #f1f1f1;
    border-color: #ececec;
  }
  .alert-light hr {
    border-top-color: #dfdfdf;
  }
  .alert-light .alert-link {
    color: #484848;
  }

  .alert-dark {
    color: #252129;
    background-color: #dad9dc;
    border-color: #cccace;
  }
  .alert-dark hr {
    border-top-color: #bfbdc2;
  }
  .alert-dark .alert-link {
    color: #0c0a0d;
  }

  .alert-gray-100 {
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
  }
  .alert-gray-100 hr {
    border-top-color: #ececf6;
  }
  .alert-gray-100 .alert-link {
    color: #686868;
  }

  .alert-gray-200 {
    color: #7c7c7c;
    background-color: #fcfcfc;
    border-color: #fafafa;
  }
  .alert-gray-200 hr {
    border-top-color: #ededed;
  }
  .alert-gray-200 .alert-link {
    color: #636363;
  }

  .alert-gray-300 {
    color: #737678;
    background-color: #f8f9fa;
    border-color: #f6f7f8;
  }
  .alert-gray-300 hr {
    border-top-color: #e8eaed;
  }
  .alert-gray-300 .alert-link {
    color: #5a5c5e;
  }

  .alert-gray-400 {
    color: #6b6e71;
    background-color: #f5f6f8;
    border-color: #f1f3f5;
  }
  .alert-gray-400 hr {
    border-top-color: #e2e6ea;
  }
  .alert-gray-400 .alert-link {
    color: #525557;
  }

  .alert-gray-500 {
    color: #616161;
    background-color: #f1f1f1;
    border-color: #ececec;
  }
  .alert-gray-500 hr {
    border-top-color: #dfdfdf;
  }
  .alert-gray-500 .alert-link {
    color: #484848;
  }

  .alert-gray-600 {
    color: #3a3540;
    background-color: #e2e0e5;
    border-color: #d7d4da;
  }
  .alert-gray-600 hr {
    border-top-color: #cac6ce;
  }
  .alert-gray-600 .alert-link {
    color: #211e24;
  }

  .alert-gray-700 {
    color: #35303a;
    background-color: #e0dee2;
    border-color: #d4d1d7;
  }
  .alert-gray-700 hr {
    border-top-color: #c7c3cb;
  }
  .alert-gray-700 .alert-link {
    color: #1c191e;
  }

  .alert-gray-800 {
    color: #2a262f;
    background-color: #dcdbde;
    border-color: #ceccd1;
  }
  .alert-gray-800 hr {
    border-top-color: #c1bfc5;
  }
  .alert-gray-800 .alert-link {
    color: #110f13;
  }

  .alert-gray-900 {
    color: #252129;
    background-color: #dad9dc;
    border-color: #cccace;
  }
  .alert-gray-900 hr {
    border-top-color: #bfbdc2;
  }
  .alert-gray-900 .alert-link {
    color: #0c0a0d;
  }

  @keyframes progress-bar-stripes {
    from {
      background-position: 1rem 0;
    }
    to {
      background-position: 0 0;
    }
  }

  .progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.60975rem;
    background-color: #eee;
    border-radius: 0.25rem;
  }

  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #663399;
    transition: width 0.6s ease;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .progress-bar {
      transition: none;
    }
  }

  .progress-bar-striped {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
  }

  .progress-bar-animated {
    animation: progress-bar-stripes 1s linear infinite;
  }

  .media {
    display: flex;
    align-items: flex-start;
  }

  .media-body {
    flex: 1;
  }

  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
  }

  .list-group-item-action {
    width: 100%;
    color: #665c70;
    text-align: inherit;
  }
  .list-group-item-action:hover,
  .list-group-item-action:focus {
    color: #665c70;
    text-decoration: none;
    background-color: #f8f9fa;
  }
  .list-group-item-action:active {
    color: #47404f;
    background-color: #eee;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .list-group-item:hover,
  .list-group-item:focus {
    z-index: 1;
    text-decoration: none;
  }
  .list-group-item.disabled,
  .list-group-item:disabled {
    color: #70657b;
    background-color: #fff;
  }
  .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #663399;
    border-color: #663399;
  }

  .list-group-flush .list-group-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }

  .list-group-flush:first-child .list-group-item:first-child {
    border-top: 0;
  }

  .list-group-flush:last-child .list-group-item:last-child {
    border-bottom: 0;
  }

  .list-group-item-primary {
    color: #351b50;
    background-color: #d4c6e2;
  }
  .list-group-item-primary.list-group-item-action:hover,
  .list-group-item-primary.list-group-item-action:focus {
    color: #351b50;
    background-color: #c7b5d9;
  }
  .list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #351b50;
    border-color: #351b50;
  }

  .list-group-item-secondary {
    color: #2a262f;
    background-color: #ceccd1;
  }
  .list-group-item-secondary.list-group-item-action:hover,
  .list-group-item-secondary.list-group-item-action:focus {
    color: #2a262f;
    background-color: #c1bfc5;
  }
  .list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #2a262f;
    border-color: #2a262f;
  }

  .list-group-item-success {
    color: #285b2a;
    background-color: #cde9ce;
  }
  .list-group-item-success.list-group-item-action:hover,
  .list-group-item-success.list-group-item-action:focus {
    color: #285b2a;
    background-color: #bbe1bd;
  }
  .list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #285b2a;
    border-color: #285b2a;
  }

  .list-group-item-info {
    color: #001b3c;
    background-color: #b8c6d8;
  }
  .list-group-item-info.list-group-item-action:hover,
  .list-group-item-info.list-group-item-action:focus {
    color: #001b3c;
    background-color: #a8b9cf;
  }
  .list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #001b3c;
    border-color: #001b3c;
  }

  .list-group-item-warning {
    color: #856404;
    background-color: #ffeeba;
  }
  .list-group-item-warning.list-group-item-action:hover,
  .list-group-item-warning.list-group-item-action:focus {
    color: #856404;
    background-color: #ffe8a1;
  }
  .list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #856404;
    border-color: #856404;
  }

  .list-group-item-danger {
    color: #7f231c;
    background-color: #fccac7;
  }
  .list-group-item-danger.list-group-item-action:hover,
  .list-group-item-danger.list-group-item-action:focus {
    color: #7f231c;
    background-color: #fbb3af;
  }
  .list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #7f231c;
    border-color: #7f231c;
  }

  .list-group-item-light {
    color: #616161;
    background-color: #ececec;
  }
  .list-group-item-light.list-group-item-action:hover,
  .list-group-item-light.list-group-item-action:focus {
    color: #616161;
    background-color: #dfdfdf;
  }
  .list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #616161;
    border-color: #616161;
  }

  .list-group-item-dark {
    color: #252129;
    background-color: #cccace;
  }
  .list-group-item-dark.list-group-item-action:hover,
  .list-group-item-dark.list-group-item-action:focus {
    color: #252129;
    background-color: #bfbdc2;
  }
  .list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #252129;
    border-color: #252129;
  }

  .list-group-item-gray-100 {
    color: #818182;
    background-color: #fdfdfe;
  }
  .list-group-item-gray-100.list-group-item-action:hover,
  .list-group-item-gray-100.list-group-item-action:focus {
    color: #818182;
    background-color: #ececf6;
  }
  .list-group-item-gray-100.list-group-item-action.active {
    color: #fff;
    background-color: #818182;
    border-color: #818182;
  }

  .list-group-item-gray-200 {
    color: #7c7c7c;
    background-color: #fafafa;
  }
  .list-group-item-gray-200.list-group-item-action:hover,
  .list-group-item-gray-200.list-group-item-action:focus {
    color: #7c7c7c;
    background-color: #ededed;
  }
  .list-group-item-gray-200.list-group-item-action.active {
    color: #fff;
    background-color: #7c7c7c;
    border-color: #7c7c7c;
  }

  .list-group-item-gray-300 {
    color: #737678;
    background-color: #f6f7f8;
  }
  .list-group-item-gray-300.list-group-item-action:hover,
  .list-group-item-gray-300.list-group-item-action:focus {
    color: #737678;
    background-color: #e8eaed;
  }
  .list-group-item-gray-300.list-group-item-action.active {
    color: #fff;
    background-color: #737678;
    border-color: #737678;
  }

  .list-group-item-gray-400 {
    color: #6b6e71;
    background-color: #f1f3f5;
  }
  .list-group-item-gray-400.list-group-item-action:hover,
  .list-group-item-gray-400.list-group-item-action:focus {
    color: #6b6e71;
    background-color: #e2e6ea;
  }
  .list-group-item-gray-400.list-group-item-action.active {
    color: #fff;
    background-color: #6b6e71;
    border-color: #6b6e71;
  }

  .list-group-item-gray-500 {
    color: #616161;
    background-color: #ececec;
  }
  .list-group-item-gray-500.list-group-item-action:hover,
  .list-group-item-gray-500.list-group-item-action:focus {
    color: #616161;
    background-color: #dfdfdf;
  }
  .list-group-item-gray-500.list-group-item-action.active {
    color: #fff;
    background-color: #616161;
    border-color: #616161;
  }

  .list-group-item-gray-600 {
    color: #3a3540;
    background-color: #d7d4da;
  }
  .list-group-item-gray-600.list-group-item-action:hover,
  .list-group-item-gray-600.list-group-item-action:focus {
    color: #3a3540;
    background-color: #cac6ce;
  }
  .list-group-item-gray-600.list-group-item-action.active {
    color: #fff;
    background-color: #3a3540;
    border-color: #3a3540;
  }

  .list-group-item-gray-700 {
    color: #35303a;
    background-color: #d4d1d7;
  }
  .list-group-item-gray-700.list-group-item-action:hover,
  .list-group-item-gray-700.list-group-item-action:focus {
    color: #35303a;
    background-color: #c7c3cb;
  }
  .list-group-item-gray-700.list-group-item-action.active {
    color: #fff;
    background-color: #35303a;
    border-color: #35303a;
  }

  .list-group-item-gray-800 {
    color: #2a262f;
    background-color: #ceccd1;
  }
  .list-group-item-gray-800.list-group-item-action:hover,
  .list-group-item-gray-800.list-group-item-action:focus {
    color: #2a262f;
    background-color: #c1bfc5;
  }
  .list-group-item-gray-800.list-group-item-action.active {
    color: #fff;
    background-color: #2a262f;
    border-color: #2a262f;
  }

  .list-group-item-gray-900 {
    color: #252129;
    background-color: #cccace;
  }
  .list-group-item-gray-900.list-group-item-action:hover,
  .list-group-item-gray-900.list-group-item-action:focus {
    color: #252129;
    background-color: #bfbdc2;
  }
  .list-group-item-gray-900.list-group-item-action.active {
    color: #fff;
    background-color: #252129;
    border-color: #252129;
  }

  .close {
    float: right;
    font-size: 1.2195rem;
    font-weight: 700;
    line-height: 1;
    color: black;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
  }
  .close:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .close:not(:disabled):not(.disabled):hover,
  .close:not(:disabled):not(.disabled):focus {
    color: black;
    text-decoration: none;
    opacity: 0.75;
  }

  button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
  }

  .modal-open {
    overflow: hidden;
  }
  .modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }
  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -25%);
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
      transition: none;
    }
  }
  .modal.show .modal-dialog {
    transform: translate(0, 0);
  }

  .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
  }
  .modal-dialog-centered::before {
    display: block;
    height: calc(100vh - (0.5rem * 2));
    content: "";
  }

  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: black;
  }
  .modal-backdrop.fade {
    opacity: 0;
  }
  .modal-backdrop.show {
    opacity: 0.5;
  }

  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  .modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
  }

  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
  }

  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #eee;
  }
  .modal-footer > :not(:first-child) {
    margin-left: 0.25rem;
  }
  .modal-footer > :not(:last-child) {
    margin-right: 0.25rem;
  }

  .modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }
    .modal-dialog-centered {
      min-height: calc(100% - (1.75rem * 2));
    }
    .modal-dialog-centered::before {
      height: calc(100vh - (1.75rem * 2));
    }
    .modal-sm {
      max-width: 300px;
    }
  }

  @media (min-width: 992px) {
    .modal-lg {
      max-width: 800px;
    }
  }

  .tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 0;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.71137rem;
    word-wrap: break-word;
    opacity: 0;
  }
  .tooltip.show {
    opacity: 0.9;
  }
  .tooltip .arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
  }
  .tooltip .arrow::before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid;
  }

  .bs-tooltip-top,
  .bs-tooltip-auto[x-placement^="top"] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-top .arrow,
  .bs-tooltip-auto[x-placement^="top"] .arrow {
    bottom: 0;
  }
  .bs-tooltip-top .arrow::before,
  .bs-tooltip-auto[x-placement^="top"] .arrow::before {
    top: 0;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: black;
  }

  .bs-tooltip-right,
  .bs-tooltip-auto[x-placement^="right"] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-right .arrow,
  .bs-tooltip-auto[x-placement^="right"] .arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-right .arrow::before,
  .bs-tooltip-auto[x-placement^="right"] .arrow::before {
    right: 0;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-right-color: black;
  }

  .bs-tooltip-bottom,
  .bs-tooltip-auto[x-placement^="bottom"] {
    padding: 0.4rem 0;
  }
  .bs-tooltip-bottom .arrow,
  .bs-tooltip-auto[x-placement^="bottom"] .arrow {
    top: 0;
  }
  .bs-tooltip-bottom .arrow::before,
  .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    bottom: 0;
    border-width: 0 0.4rem 0.4rem;
    border-bottom-color: black;
  }

  .bs-tooltip-left,
  .bs-tooltip-auto[x-placement^="left"] {
    padding: 0 0.4rem;
  }
  .bs-tooltip-left .arrow,
  .bs-tooltip-auto[x-placement^="left"] .arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem;
  }
  .bs-tooltip-left .arrow::before,
  .bs-tooltip-auto[x-placement^="left"] .arrow::before {
    left: 0;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    border-left-color: black;
  }

  .tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: black;
    border-radius: 0.25rem;
  }

  .toast {
    max-width: 350px;
    overflow: hidden;
    font-size: 0.875rem;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
  }
  .toast:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  .toast.showing {
    opacity: 1;
  }
  .toast.show {
    display: block;
    opacity: 1;
  }
  .toast.hide {
    display: none;
  }

  .toast-header {
    display: flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    color: #70657b;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .toast-body {
    padding: 0.75rem;
  }

  .popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 276px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.71137rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
  }
  .popover .arrow {
    position: absolute;
    display: block;
    width: 1rem;
    height: 0.5rem;
    margin: 0 0.3rem;
  }
  .popover .arrow::before,
  .popover .arrow::after {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
  }

  .bs-popover-top,
  .bs-popover-auto[x-placement^="top"] {
    margin-bottom: 0.5rem;
  }
  .bs-popover-top .arrow,
  .bs-popover-auto[x-placement^="top"] .arrow {
    bottom: calc((0.5rem + 1px) * -1);
  }
  .bs-popover-top .arrow::before,
  .bs-popover-auto[x-placement^="top"] .arrow::before,
  .bs-popover-top .arrow::after,
  .bs-popover-auto[x-placement^="top"] .arrow::after {
    border-width: 0.5rem 0.5rem 0;
  }
  .bs-popover-top .arrow::before,
  .bs-popover-auto[x-placement^="top"] .arrow::before {
    bottom: 0;
    border-top-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-top .arrow::after,
  .bs-popover-auto[x-placement^="top"] .arrow::after {
    bottom: 1px;
    border-top-color: #fff;
  }

  .bs-popover-right,
  .bs-popover-auto[x-placement^="right"] {
    margin-left: 0.5rem;
  }
  .bs-popover-right .arrow,
  .bs-popover-auto[x-placement^="right"] .arrow {
    left: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0;
  }
  .bs-popover-right .arrow::before,
  .bs-popover-auto[x-placement^="right"] .arrow::before,
  .bs-popover-right .arrow::after,
  .bs-popover-auto[x-placement^="right"] .arrow::after {
    border-width: 0.5rem 0.5rem 0.5rem 0;
  }
  .bs-popover-right .arrow::before,
  .bs-popover-auto[x-placement^="right"] .arrow::before {
    left: 0;
    border-right-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-right .arrow::after,
  .bs-popover-auto[x-placement^="right"] .arrow::after {
    left: 1px;
    border-right-color: #fff;
  }

  .bs-popover-bottom,
  .bs-popover-auto[x-placement^="bottom"] {
    margin-top: 0.5rem;
  }
  .bs-popover-bottom .arrow,
  .bs-popover-auto[x-placement^="bottom"] .arrow {
    top: calc((0.5rem + 1px) * -1);
  }
  .bs-popover-bottom .arrow::before,
  .bs-popover-auto[x-placement^="bottom"] .arrow::before,
  .bs-popover-bottom .arrow::after,
  .bs-popover-auto[x-placement^="bottom"] .arrow::after {
    border-width: 0 0.5rem 0.5rem 0.5rem;
  }
  .bs-popover-bottom .arrow::before,
  .bs-popover-auto[x-placement^="bottom"] .arrow::before {
    top: 0;
    border-bottom-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-bottom .arrow::after,
  .bs-popover-auto[x-placement^="bottom"] .arrow::after {
    top: 1px;
    border-bottom-color: #fff;
  }
  .bs-popover-bottom .popover-header::before,
  .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -0.5rem;
    content: "";
    border-bottom: 1px solid #f7f7f7;
  }

  .bs-popover-left,
  .bs-popover-auto[x-placement^="left"] {
    margin-right: 0.5rem;
  }
  .bs-popover-left .arrow,
  .bs-popover-auto[x-placement^="left"] .arrow {
    right: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0;
  }
  .bs-popover-left .arrow::before,
  .bs-popover-auto[x-placement^="left"] .arrow::before,
  .bs-popover-left .arrow::after,
  .bs-popover-auto[x-placement^="left"] .arrow::after {
    border-width: 0.5rem 0 0.5rem 0.5rem;
  }
  .bs-popover-left .arrow::before,
  .bs-popover-auto[x-placement^="left"] .arrow::before {
    right: 0;
    border-left-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-left .arrow::after,
  .bs-popover-auto[x-placement^="left"] .arrow::after {
    right: 1px;
    border-left-color: #fff;
  }

  .popover-header {
    padding: 0.5rem 0.75rem;
    margin-bottom: 0;
    font-size: 0.813rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }
  .popover-header:empty {
    display: none;
  }

  .popover-body {
    padding: 0.5rem 0.75rem;
    color: #47404f;
  }

  .carousel {
    position: relative;
  }

  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .carousel-item {
    position: relative;
    display: none;
    align-items: center;
    width: 100%;
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .carousel-item.active,
  .carousel-item-next,
  .carousel-item-prev {
    display: block;
    transition: transform 0.6s ease;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    .carousel-item.active,
    .carousel-item-next,
    .carousel-item-prev {
      transition: none;
    }
  }

  .carousel-item-next,
  .carousel-item-prev {
    position: absolute;
    top: 0;
  }

  .carousel-item-next.carousel-item-left,
  .carousel-item-prev.carousel-item-right {
    transform: translateX(0);
  }
  @supports (transform-style: preserve-3d) {
    .carousel-item-next.carousel-item-left,
    .carousel-item-prev.carousel-item-right {
      transform: translate3d(0, 0, 0);
    }
  }

  .carousel-item-next,
  .active.carousel-item-right {
    transform: translateX(100%);
  }
  @supports (transform-style: preserve-3d) {
    .carousel-item-next,
    .active.carousel-item-right {
      transform: translate3d(100%, 0, 0);
    }
  }

  .carousel-item-prev,
  .active.carousel-item-left {
    transform: translateX(-100%);
  }
  @supports (transform-style: preserve-3d) {
    .carousel-item-prev,
    .active.carousel-item-left {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .carousel-fade .carousel-item {
    opacity: 0;
    transition-duration: 0.6s;
    transition-property: opacity;
  }

  .carousel-fade .carousel-item.active,
  .carousel-fade .carousel-item-next.carousel-item-left,
  .carousel-fade .carousel-item-prev.carousel-item-right {
    opacity: 1;
  }

  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-right {
    opacity: 0;
  }

  .carousel-fade .carousel-item-next,
  .carousel-fade .carousel-item-prev,
  .carousel-fade .carousel-item.active,
  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-prev {
    transform: translateX(0);
  }
  @supports (transform-style: preserve-3d) {
    .carousel-fade .carousel-item-next,
    .carousel-fade .carousel-item-prev,
    .carousel-fade .carousel-item.active,
    .carousel-fade .active.carousel-item-left,
    .carousel-fade .active.carousel-item-prev {
      transform: translate3d(0, 0, 0);
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: 0.5;
  }
  .carousel-control-prev:hover,
  .carousel-control-prev:focus,
  .carousel-control-next:hover,
  .carousel-control-next:focus {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: 0.9;
  }

  .carousel-control-prev {
    left: 0;
  }

  .carousel-control-next {
    right: 0;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }

  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  }
  .carousel-indicators li {
    position: relative;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .carousel-indicators li::before {
    position: absolute;
    top: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: "";
  }
  .carousel-indicators li::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: "";
  }
  .carousel-indicators .active {
    background-color: #fff;
  }

  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
  }

  .align-baseline {
    vertical-align: baseline !important;
  }

  .align-top {
    vertical-align: top !important;
  }

  .align-middle {
    vertical-align: middle !important;
  }

  .align-bottom {
    vertical-align: bottom !important;
  }

  .align-text-bottom {
    vertical-align: text-bottom !important;
  }

  .align-text-top {
    vertical-align: text-top !important;
  }

  .bg-primary {
    background-color: #663399 !important;
  }

  a.bg-primary:hover,
  a.bg-primary:focus,
  button.bg-primary:hover,
  button.bg-primary:focus {
    background-color: #4d2673 !important;
  }

  .bg-secondary {
    background-color: #52495a !important;
  }

  a.bg-secondary:hover,
  a.bg-secondary:focus,
  button.bg-secondary:hover,
  button.bg-secondary:focus {
    background-color: #38323e !important;
  }

  .bg-success {
    background-color: #4caf50 !important;
  }

  a.bg-success:hover,
  a.bg-success:focus,
  button.bg-success:hover,
  button.bg-success:focus {
    background-color: #3d8b40 !important;
  }

  .bg-info {
    background-color: #003473 !important;
  }

  a.bg-info:hover,
  a.bg-info:focus,
  button.bg-info:hover,
  button.bg-info:focus {
    background-color: #001d40 !important;
  }

  .bg-warning {
    background-color: #ffc107 !important;
  }

  a.bg-warning:hover,
  a.bg-warning:focus,
  button.bg-warning:hover,
  button.bg-warning:focus {
    background-color: #d39e00 !important;
  }

  .bg-danger {
    background-color: #f44336 !important;
  }

  a.bg-danger:hover,
  a.bg-danger:focus,
  button.bg-danger:hover,
  button.bg-danger:focus {
    background-color: #ea1c0d !important;
  }

  .bg-light {
    background-color: #bbb !important;
  }

  a.bg-light:hover,
  a.bg-light:focus,
  button.bg-light:hover,
  button.bg-light:focus {
    background-color: #a2a2a2 !important;
  }

  .bg-dark {
    background-color: #47404f !important;
  }

  a.bg-dark:hover,
  a.bg-dark:focus,
  button.bg-dark:hover,
  button.bg-dark:focus {
    background-color: #2e2932 !important;
  }

  .bg-gray-100 {
    background-color: #f8f9fa !important;
  }

  a.bg-gray-100:hover,
  a.bg-gray-100:focus,
  button.bg-gray-100:hover,
  button.bg-gray-100:focus {
    background-color: #dae0e5 !important;
  }

  .bg-gray-200 {
    background-color: #eee !important;
  }

  a.bg-gray-200:hover,
  a.bg-gray-200:focus,
  button.bg-gray-200:hover,
  button.bg-gray-200:focus {
    background-color: #d5d5d5 !important;
  }

  .bg-gray-300 {
    background-color: #dee2e6 !important;
  }

  a.bg-gray-300:hover,
  a.bg-gray-300:focus,
  button.bg-gray-300:hover,
  button.bg-gray-300:focus {
    background-color: #c1c9d0 !important;
  }

  .bg-gray-400 {
    background-color: #ced4da !important;
  }

  a.bg-gray-400:hover,
  a.bg-gray-400:focus,
  button.bg-gray-400:hover,
  button.bg-gray-400:focus {
    background-color: #b1bbc4 !important;
  }

  .bg-gray-500 {
    background-color: #bbb !important;
  }

  a.bg-gray-500:hover,
  a.bg-gray-500:focus,
  button.bg-gray-500:hover,
  button.bg-gray-500:focus {
    background-color: #a2a2a2 !important;
  }

  .bg-gray-600 {
    background-color: #70657b !important;
  }

  a.bg-gray-600:hover,
  a.bg-gray-600:focus,
  button.bg-gray-600:hover,
  button.bg-gray-600:focus {
    background-color: #574e5f !important;
  }

  .bg-gray-700 {
    background-color: #665c70 !important;
  }

  a.bg-gray-700:hover,
  a.bg-gray-700:focus,
  button.bg-gray-700:hover,
  button.bg-gray-700:focus {
    background-color: #4d4554 !important;
  }

  .bg-gray-800 {
    background-color: #52495a !important;
  }

  a.bg-gray-800:hover,
  a.bg-gray-800:focus,
  button.bg-gray-800:hover,
  button.bg-gray-800:focus {
    background-color: #38323e !important;
  }

  .bg-gray-900 {
    background-color: #47404f !important;
  }

  a.bg-gray-900:hover,
  a.bg-gray-900:focus,
  button.bg-gray-900:hover,
  button.bg-gray-900:focus {
    background-color: #2e2932 !important;
  }

  .bg-white {
    background-color: #fff !important;
  }

  .bg-transparent {
    background-color: transparent !important;
  }

  .border {
    border: 1px solid #dee2e6 !important;
  }

  .border-top {
    border-top: 1px solid #dee2e6 !important;
  }

  .border-right {
    border-right: 1px solid #dee2e6 !important;
  }

  .border-bottom {
    border-bottom: 1px solid #dee2e6 !important;
  }

  .border-left {
    border-left: 1px solid #dee2e6 !important;
  }

  .border-0 {
    border: 0 !important;
  }

  .border-top-0 {
    border-top: 0 !important;
  }

  .border-right-0 {
    border-right: 0 !important;
  }

  .border-bottom-0 {
    border-bottom: 0 !important;
  }

  .border-left-0 {
    border-left: 0 !important;
  }

  .border-primary {
    border-color: #663399 !important;
  }

  .border-secondary {
    border-color: #52495a !important;
  }

  .border-success {
    border-color: #4caf50 !important;
  }

  .border-info {
    border-color: #003473 !important;
  }

  .border-warning {
    border-color: #ffc107 !important;
  }

  .border-danger {
    border-color: #f44336 !important;
  }

  .border-light {
    border-color: #bbb !important;
  }

  .border-dark {
    border-color: #47404f !important;
  }

  .border-gray-100 {
    border-color: #f8f9fa !important;
  }

  .border-gray-200 {
    border-color: #eee !important;
  }

  .border-gray-300 {
    border-color: #dee2e6 !important;
  }

  .border-gray-400 {
    border-color: #ced4da !important;
  }

  .border-gray-500 {
    border-color: #bbb !important;
  }

  .border-gray-600 {
    border-color: #70657b !important;
  }

  .border-gray-700 {
    border-color: #665c70 !important;
  }

  .border-gray-800 {
    border-color: #52495a !important;
  }

  .border-gray-900 {
    border-color: #47404f !important;
  }

  .border-white {
    border-color: #fff !important;
  }

  .rounded {
    border-radius: 0.25rem !important;
  }

  .rounded-top {
    border-top-left-radius: 0.25rem !important;
    border-top-right-radius: 0.25rem !important;
  }

  .rounded-right {
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
  }

  .rounded-bottom {
    border-bottom-right-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }

  .rounded-left {
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .rounded-0 {
    border-radius: 0 !important;
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: "";
  }

  .d-none {
    display: none !important;
  }

  .d-inline {
    display: inline !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-table {
    display: table !important;
  }

  .d-table-row {
    display: table-row !important;
  }

  .d-table-cell {
    display: table-cell !important;
  }

  .d-flex {
    display: flex !important;
  }

  .d-inline-flex {
    display: inline-flex !important;
  }

  @media (min-width: 576px) {
    .d-sm-none {
      display: none !important;
    }
    .d-sm-inline {
      display: inline !important;
    }
    .d-sm-inline-block {
      display: inline-block !important;
    }
    .d-sm-block {
      display: block !important;
    }
    .d-sm-table {
      display: table !important;
    }
    .d-sm-table-row {
      display: table-row !important;
    }
    .d-sm-table-cell {
      display: table-cell !important;
    }
    .d-sm-flex {
      display: flex !important;
    }
    .d-sm-inline-flex {
      display: inline-flex !important;
    }
  }

  @media (min-width: 768px) {
    .d-md-none {
      display: none !important;
    }
    .d-md-inline {
      display: inline !important;
    }
    .d-md-inline-block {
      display: inline-block !important;
    }
    .d-md-block {
      display: block !important;
    }
    .d-md-table {
      display: table !important;
    }
    .d-md-table-row {
      display: table-row !important;
    }
    .d-md-table-cell {
      display: table-cell !important;
    }
    .d-md-flex {
      display: flex !important;
    }
    .d-md-inline-flex {
      display: inline-flex !important;
    }
  }

  @media (min-width: 992px) {
    .d-lg-none {
      display: none !important;
    }
    .d-lg-inline {
      display: inline !important;
    }
    .d-lg-inline-block {
      display: inline-block !important;
    }
    .d-lg-block {
      display: block !important;
    }
    .d-lg-table {
      display: table !important;
    }
    .d-lg-table-row {
      display: table-row !important;
    }
    .d-lg-table-cell {
      display: table-cell !important;
    }
    .d-lg-flex {
      display: flex !important;
    }
    .d-lg-inline-flex {
      display: inline-flex !important;
    }
  }

  @media (min-width: 1200px) {
    .d-xl-none {
      display: none !important;
    }
    .d-xl-inline {
      display: inline !important;
    }
    .d-xl-inline-block {
      display: inline-block !important;
    }
    .d-xl-block {
      display: block !important;
    }
    .d-xl-table {
      display: table !important;
    }
    .d-xl-table-row {
      display: table-row !important;
    }
    .d-xl-table-cell {
      display: table-cell !important;
    }
    .d-xl-flex {
      display: flex !important;
    }
    .d-xl-inline-flex {
      display: inline-flex !important;
    }
  }

  @media print {
    .d-print-none {
      display: none !important;
    }
    .d-print-inline {
      display: inline !important;
    }
    .d-print-inline-block {
      display: inline-block !important;
    }
    .d-print-block {
      display: block !important;
    }
    .d-print-table {
      display: table !important;
    }
    .d-print-table-row {
      display: table-row !important;
    }
    .d-print-table-cell {
      display: table-cell !important;
    }
    .d-print-flex {
      display: flex !important;
    }
    .d-print-inline-flex {
      display: inline-flex !important;
    }
  }

  .embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
  .embed-responsive::before {
    display: block;
    content: "";
  }
  .embed-responsive .embed-responsive-item,
  .embed-responsive iframe,
  .embed-responsive embed,
  .embed-responsive object,
  .embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .embed-responsive-21by9::before {
    padding-top: 42.85714%;
  }

  .embed-responsive-16by9::before {
    padding-top: 56.25%;
  }

  .embed-responsive-4by3::before {
    padding-top: 75%;
  }

  .embed-responsive-1by1::before {
    padding-top: 100%;
  }

  .flex-row {
    flex-direction: row !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-wrap {
    flex-wrap: wrap !important;
  }

  .flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-fill {
    flex: 1 1 auto !important;
  }

  .flex-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-start {
    justify-content: flex-start !important;
  }

  .justify-content-end {
    justify-content: flex-end !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .justify-content-around {
    justify-content: space-around !important;
  }

  .align-items-start {
    align-items: flex-start !important;
  }

  .align-items-end {
    align-items: flex-end !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .align-items-baseline {
    align-items: baseline !important;
  }

  .align-items-stretch {
    align-items: stretch !important;
  }

  .align-content-start {
    align-content: flex-start !important;
  }

  .align-content-end {
    align-content: flex-end !important;
  }

  .align-content-center {
    align-content: center !important;
  }

  .align-content-between {
    align-content: space-between !important;
  }

  .align-content-around {
    align-content: space-around !important;
  }

  .align-content-stretch {
    align-content: stretch !important;
  }

  .align-self-auto {
    align-self: auto !important;
  }

  .align-self-start {
    align-self: flex-start !important;
  }

  .align-self-end {
    align-self: flex-end !important;
  }

  .align-self-center {
    align-self: center !important;
  }

  .align-self-baseline {
    align-self: baseline !important;
  }

  .align-self-stretch {
    align-self: stretch !important;
  }

  @media (min-width: 576px) {
    .flex-sm-row {
      flex-direction: row !important;
    }
    .flex-sm-column {
      flex-direction: column !important;
    }
    .flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-sm-wrap {
      flex-wrap: wrap !important;
    }
    .flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-sm-fill {
      flex: 1 1 auto !important;
    }
    .flex-sm-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-sm-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-sm-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-sm-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-sm-start {
      justify-content: flex-start !important;
    }
    .justify-content-sm-end {
      justify-content: flex-end !important;
    }
    .justify-content-sm-center {
      justify-content: center !important;
    }
    .justify-content-sm-between {
      justify-content: space-between !important;
    }
    .justify-content-sm-around {
      justify-content: space-around !important;
    }
    .align-items-sm-start {
      align-items: flex-start !important;
    }
    .align-items-sm-end {
      align-items: flex-end !important;
    }
    .align-items-sm-center {
      align-items: center !important;
    }
    .align-items-sm-baseline {
      align-items: baseline !important;
    }
    .align-items-sm-stretch {
      align-items: stretch !important;
    }
    .align-content-sm-start {
      align-content: flex-start !important;
    }
    .align-content-sm-end {
      align-content: flex-end !important;
    }
    .align-content-sm-center {
      align-content: center !important;
    }
    .align-content-sm-between {
      align-content: space-between !important;
    }
    .align-content-sm-around {
      align-content: space-around !important;
    }
    .align-content-sm-stretch {
      align-content: stretch !important;
    }
    .align-self-sm-auto {
      align-self: auto !important;
    }
    .align-self-sm-start {
      align-self: flex-start !important;
    }
    .align-self-sm-end {
      align-self: flex-end !important;
    }
    .align-self-sm-center {
      align-self: center !important;
    }
    .align-self-sm-baseline {
      align-self: baseline !important;
    }
    .align-self-sm-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 768px) {
    .flex-md-row {
      flex-direction: row !important;
    }
    .flex-md-column {
      flex-direction: column !important;
    }
    .flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-md-wrap {
      flex-wrap: wrap !important;
    }
    .flex-md-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-md-fill {
      flex: 1 1 auto !important;
    }
    .flex-md-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-md-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-md-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-md-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-md-start {
      justify-content: flex-start !important;
    }
    .justify-content-md-end {
      justify-content: flex-end !important;
    }
    .justify-content-md-center {
      justify-content: center !important;
    }
    .justify-content-md-between {
      justify-content: space-between !important;
    }
    .justify-content-md-around {
      justify-content: space-around !important;
    }
    .align-items-md-start {
      align-items: flex-start !important;
    }
    .align-items-md-end {
      align-items: flex-end !important;
    }
    .align-items-md-center {
      align-items: center !important;
    }
    .align-items-md-baseline {
      align-items: baseline !important;
    }
    .align-items-md-stretch {
      align-items: stretch !important;
    }
    .align-content-md-start {
      align-content: flex-start !important;
    }
    .align-content-md-end {
      align-content: flex-end !important;
    }
    .align-content-md-center {
      align-content: center !important;
    }
    .align-content-md-between {
      align-content: space-between !important;
    }
    .align-content-md-around {
      align-content: space-around !important;
    }
    .align-content-md-stretch {
      align-content: stretch !important;
    }
    .align-self-md-auto {
      align-self: auto !important;
    }
    .align-self-md-start {
      align-self: flex-start !important;
    }
    .align-self-md-end {
      align-self: flex-end !important;
    }
    .align-self-md-center {
      align-self: center !important;
    }
    .align-self-md-baseline {
      align-self: baseline !important;
    }
    .align-self-md-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 992px) {
    .flex-lg-row {
      flex-direction: row !important;
    }
    .flex-lg-column {
      flex-direction: column !important;
    }
    .flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-lg-wrap {
      flex-wrap: wrap !important;
    }
    .flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-lg-fill {
      flex: 1 1 auto !important;
    }
    .flex-lg-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-lg-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-lg-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-lg-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-lg-start {
      justify-content: flex-start !important;
    }
    .justify-content-lg-end {
      justify-content: flex-end !important;
    }
    .justify-content-lg-center {
      justify-content: center !important;
    }
    .justify-content-lg-between {
      justify-content: space-between !important;
    }
    .justify-content-lg-around {
      justify-content: space-around !important;
    }
    .align-items-lg-start {
      align-items: flex-start !important;
    }
    .align-items-lg-end {
      align-items: flex-end !important;
    }
    .align-items-lg-center {
      align-items: center !important;
    }
    .align-items-lg-baseline {
      align-items: baseline !important;
    }
    .align-items-lg-stretch {
      align-items: stretch !important;
    }
    .align-content-lg-start {
      align-content: flex-start !important;
    }
    .align-content-lg-end {
      align-content: flex-end !important;
    }
    .align-content-lg-center {
      align-content: center !important;
    }
    .align-content-lg-between {
      align-content: space-between !important;
    }
    .align-content-lg-around {
      align-content: space-around !important;
    }
    .align-content-lg-stretch {
      align-content: stretch !important;
    }
    .align-self-lg-auto {
      align-self: auto !important;
    }
    .align-self-lg-start {
      align-self: flex-start !important;
    }
    .align-self-lg-end {
      align-self: flex-end !important;
    }
    .align-self-lg-center {
      align-self: center !important;
    }
    .align-self-lg-baseline {
      align-self: baseline !important;
    }
    .align-self-lg-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 1200px) {
    .flex-xl-row {
      flex-direction: row !important;
    }
    .flex-xl-column {
      flex-direction: column !important;
    }
    .flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-xl-wrap {
      flex-wrap: wrap !important;
    }
    .flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-xl-fill {
      flex: 1 1 auto !important;
    }
    .flex-xl-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-xl-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-xl-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-xl-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-xl-start {
      justify-content: flex-start !important;
    }
    .justify-content-xl-end {
      justify-content: flex-end !important;
    }
    .justify-content-xl-center {
      justify-content: center !important;
    }
    .justify-content-xl-between {
      justify-content: space-between !important;
    }
    .justify-content-xl-around {
      justify-content: space-around !important;
    }
    .align-items-xl-start {
      align-items: flex-start !important;
    }
    .align-items-xl-end {
      align-items: flex-end !important;
    }
    .align-items-xl-center {
      align-items: center !important;
    }
    .align-items-xl-baseline {
      align-items: baseline !important;
    }
    .align-items-xl-stretch {
      align-items: stretch !important;
    }
    .align-content-xl-start {
      align-content: flex-start !important;
    }
    .align-content-xl-end {
      align-content: flex-end !important;
    }
    .align-content-xl-center {
      align-content: center !important;
    }
    .align-content-xl-between {
      align-content: space-between !important;
    }
    .align-content-xl-around {
      align-content: space-around !important;
    }
    .align-content-xl-stretch {
      align-content: stretch !important;
    }
    .align-self-xl-auto {
      align-self: auto !important;
    }
    .align-self-xl-start {
      align-self: flex-start !important;
    }
    .align-self-xl-end {
      align-self: flex-end !important;
    }
    .align-self-xl-center {
      align-self: center !important;
    }
    .align-self-xl-baseline {
      align-self: baseline !important;
    }
    .align-self-xl-stretch {
      align-self: stretch !important;
    }
  }

  .float-left {
    float: left !important;
  }

  .float-right {
    float: right !important;
  }

  .float-none {
    float: none !important;
  }

  @media (min-width: 576px) {
    .float-sm-left {
      float: left !important;
    }
    .float-sm-right {
      float: right !important;
    }
    .float-sm-none {
      float: none !important;
    }
  }

  @media (min-width: 768px) {
    .float-md-left {
      float: left !important;
    }
    .float-md-right {
      float: right !important;
    }
    .float-md-none {
      float: none !important;
    }
  }

  @media (min-width: 992px) {
    .float-lg-left {
      float: left !important;
    }
    .float-lg-right {
      float: right !important;
    }
    .float-lg-none {
      float: none !important;
    }
  }

  @media (min-width: 1200px) {
    .float-xl-left {
      float: left !important;
    }
    .float-xl-right {
      float: right !important;
    }
    .float-xl-none {
      float: none !important;
    }
  }

  .position-static {
    position: static !important;
  }

  .position-relative {
    position: relative !important;
  }

  .position-absolute {
    position: absolute !important;
  }

  .position-fixed {
    position: fixed !important;
  }

  .position-sticky {
    position: sticky !important;
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }

  @supports (position: sticky) {
    .sticky-top {
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .sr-only-focusable:active,
  .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  .shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }

  .shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  .shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }

  .shadow-none {
    box-shadow: none !important;
  }

  .w-25 {
    width: 25% !important;
  }

  .w-50 {
    width: 50% !important;
  }

  .w-75 {
    width: 75% !important;
  }

  .w-100 {
    width: 100% !important;
  }

  .w-auto {
    width: auto !important;
  }

  .h-25 {
    height: 25% !important;
  }

  .h-50 {
    height: 50% !important;
  }

  .h-75 {
    height: 75% !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .h-auto {
    height: auto !important;
  }

  .mw-100 {
    max-width: 100% !important;
  }

  .mh-100 {
    max-height: 100% !important;
  }

  .m-0 {
    margin: 0 !important;
  }

  .mt-0,
  .my-0 {
    margin-top: 0 !important;
  }

  .mr-0,
  .mx-0 {
    margin-right: 0 !important;
  }

  .mb-0,
  .my-0 {
    margin-bottom: 0 !important;
  }

  .ml-0,
  .mx-0 {
    margin-left: 0 !important;
  }

  .m-1 {
    margin: 0.25rem !important;
  }

  .mt-1,
  .my-1 {
    margin-top: 0.25rem !important;
  }

  .mr-1,
  .mx-1 {
    margin-right: 0.25rem !important;
  }

  .mb-1,
  .my-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-1,
  .mx-1 {
    margin-left: 0.25rem !important;
  }

  .m-2 {
    margin: 0.5rem !important;
  }

  .mt-2,
  .my-2 {
    margin-top: 0.5rem !important;
  }

  .mr-2,
  .mx-2 {
    margin-right: 0.5rem !important;
  }

  .mb-2,
  .my-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-2,
  .mx-2 {
    margin-left: 0.5rem !important;
  }

  .m-3 {
    margin: 1rem !important;
  }

  .mt-3,
  .my-3 {
    margin-top: 1rem !important;
  }

  .mr-3,
  .mx-3 {
    margin-right: 1rem !important;
  }

  .mb-3,
  .my-3 {
    margin-bottom: 1rem !important;
  }

  .ml-3,
  .mx-3 {
    margin-left: 1rem !important;
  }

  .m-4 {
    margin: 1.5rem !important;
  }

  .mt-4,
  .my-4 {
    margin-top: 1.5rem !important;
  }

  .mr-4,
  .mx-4 {
    margin-right: 1.5rem !important;
  }

  .mb-4,
  .my-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-4,
  .mx-4 {
    margin-left: 1.5rem !important;
  }

  .m-5 {
    margin: 3rem !important;
  }

  .mt-5,
  .my-5 {
    margin-top: 3rem !important;
  }

  .mr-5,
  .mx-5 {
    margin-right: 3rem !important;
  }

  .mb-5,
  .my-5 {
    margin-bottom: 3rem !important;
  }

  .ml-5,
  .mx-5 {
    margin-left: 3rem !important;
  }

  .p-0 {
    padding: 0 !important;
  }

  .pt-0,
  .py-0 {
    padding-top: 0 !important;
  }

  .pr-0,
  .px-0 {
    padding-right: 0 !important;
  }

  .pb-0,
  .py-0 {
    padding-bottom: 0 !important;
  }

  .pl-0,
  .px-0 {
    padding-left: 0 !important;
  }

  .p-1 {
    padding: 0.25rem !important;
  }

  .pt-1,
  .py-1 {
    padding-top: 0.25rem !important;
  }

  .pr-1,
  .px-1 {
    padding-right: 0.25rem !important;
  }

  .pb-1,
  .py-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-1,
  .px-1 {
    padding-left: 0.25rem !important;
  }

  .p-2 {
    padding: 0.5rem !important;
  }

  .pt-2,
  .py-2 {
    padding-top: 0.5rem !important;
  }

  .pr-2,
  .px-2 {
    padding-right: 0.5rem !important;
  }

  .pb-2,
  .py-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-2,
  .px-2 {
    padding-left: 0.5rem !important;
  }

  .p-3 {
    padding: 1rem !important;
  }

  .pt-3,
  .py-3 {
    padding-top: 1rem !important;
  }

  .pr-3,
  .px-3 {
    padding-right: 1rem !important;
  }

  .pb-3,
  .py-3 {
    padding-bottom: 1rem !important;
  }

  .pl-3,
  .px-3 {
    padding-left: 1rem !important;
  }

  .p-4 {
    padding: 1.5rem !important;
  }

  .pt-4,
  .py-4 {
    padding-top: 1.5rem !important;
  }

  .pr-4,
  .px-4 {
    padding-right: 1.5rem !important;
  }

  .pb-4,
  .py-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-4,
  .px-4 {
    padding-left: 1.5rem !important;
  }

  .p-5 {
    padding: 3rem !important;
  }

  .pt-5,
  .py-5 {
    padding-top: 3rem !important;
  }

  .pr-5,
  .px-5 {
    padding-right: 3rem !important;
  }

  .pb-5,
  .py-5 {
    padding-bottom: 3rem !important;
  }

  .pl-5,
  .px-5 {
    padding-left: 3rem !important;
  }

  .m-auto {
    margin: auto !important;
  }

  .mt-auto,
  .my-auto {
    margin-top: auto !important;
  }

  .mr-auto,
  .mx-auto {
    margin-right: auto !important;
  }

  .mb-auto,
  .my-auto {
    margin-bottom: auto !important;
  }

  .ml-auto,
  .mx-auto {
    margin-left: auto !important;
  }

  @media (min-width: 576px) {
    .m-sm-0 {
      margin: 0 !important;
    }
    .mt-sm-0,
    .my-sm-0 {
      margin-top: 0 !important;
    }
    .mr-sm-0,
    .mx-sm-0 {
      margin-right: 0 !important;
    }
    .mb-sm-0,
    .my-sm-0 {
      margin-bottom: 0 !important;
    }
    .ml-sm-0,
    .mx-sm-0 {
      margin-left: 0 !important;
    }
    .m-sm-1 {
      margin: 0.25rem !important;
    }
    .mt-sm-1,
    .my-sm-1 {
      margin-top: 0.25rem !important;
    }
    .mr-sm-1,
    .mx-sm-1 {
      margin-right: 0.25rem !important;
    }
    .mb-sm-1,
    .my-sm-1 {
      margin-bottom: 0.25rem !important;
    }
    .ml-sm-1,
    .mx-sm-1 {
      margin-left: 0.25rem !important;
    }
    .m-sm-2 {
      margin: 0.5rem !important;
    }
    .mt-sm-2,
    .my-sm-2 {
      margin-top: 0.5rem !important;
    }
    .mr-sm-2,
    .mx-sm-2 {
      margin-right: 0.5rem !important;
    }
    .mb-sm-2,
    .my-sm-2 {
      margin-bottom: 0.5rem !important;
    }
    .ml-sm-2,
    .mx-sm-2 {
      margin-left: 0.5rem !important;
    }
    .m-sm-3 {
      margin: 1rem !important;
    }
    .mt-sm-3,
    .my-sm-3 {
      margin-top: 1rem !important;
    }
    .mr-sm-3,
    .mx-sm-3 {
      margin-right: 1rem !important;
    }
    .mb-sm-3,
    .my-sm-3 {
      margin-bottom: 1rem !important;
    }
    .ml-sm-3,
    .mx-sm-3 {
      margin-left: 1rem !important;
    }
    .m-sm-4 {
      margin: 1.5rem !important;
    }
    .mt-sm-4,
    .my-sm-4 {
      margin-top: 1.5rem !important;
    }
    .mr-sm-4,
    .mx-sm-4 {
      margin-right: 1.5rem !important;
    }
    .mb-sm-4,
    .my-sm-4 {
      margin-bottom: 1.5rem !important;
    }
    .ml-sm-4,
    .mx-sm-4 {
      margin-left: 1.5rem !important;
    }
    .m-sm-5 {
      margin: 3rem !important;
    }
    .mt-sm-5,
    .my-sm-5 {
      margin-top: 3rem !important;
    }
    .mr-sm-5,
    .mx-sm-5 {
      margin-right: 3rem !important;
    }
    .mb-sm-5,
    .my-sm-5 {
      margin-bottom: 3rem !important;
    }
    .ml-sm-5,
    .mx-sm-5 {
      margin-left: 3rem !important;
    }
    .p-sm-0 {
      padding: 0 !important;
    }
    .pt-sm-0,
    .py-sm-0 {
      padding-top: 0 !important;
    }
    .pr-sm-0,
    .px-sm-0 {
      padding-right: 0 !important;
    }
    .pb-sm-0,
    .py-sm-0 {
      padding-bottom: 0 !important;
    }
    .pl-sm-0,
    .px-sm-0 {
      padding-left: 0 !important;
    }
    .p-sm-1 {
      padding: 0.25rem !important;
    }
    .pt-sm-1,
    .py-sm-1 {
      padding-top: 0.25rem !important;
    }
    .pr-sm-1,
    .px-sm-1 {
      padding-right: 0.25rem !important;
    }
    .pb-sm-1,
    .py-sm-1 {
      padding-bottom: 0.25rem !important;
    }
    .pl-sm-1,
    .px-sm-1 {
      padding-left: 0.25rem !important;
    }
    .p-sm-2 {
      padding: 0.5rem !important;
    }
    .pt-sm-2,
    .py-sm-2 {
      padding-top: 0.5rem !important;
    }
    .pr-sm-2,
    .px-sm-2 {
      padding-right: 0.5rem !important;
    }
    .pb-sm-2,
    .py-sm-2 {
      padding-bottom: 0.5rem !important;
    }
    .pl-sm-2,
    .px-sm-2 {
      padding-left: 0.5rem !important;
    }
    .p-sm-3 {
      padding: 1rem !important;
    }
    .pt-sm-3,
    .py-sm-3 {
      padding-top: 1rem !important;
    }
    .pr-sm-3,
    .px-sm-3 {
      padding-right: 1rem !important;
    }
    .pb-sm-3,
    .py-sm-3 {
      padding-bottom: 1rem !important;
    }
    .pl-sm-3,
    .px-sm-3 {
      padding-left: 1rem !important;
    }
    .p-sm-4 {
      padding: 1.5rem !important;
    }
    .pt-sm-4,
    .py-sm-4 {
      padding-top: 1.5rem !important;
    }
    .pr-sm-4,
    .px-sm-4 {
      padding-right: 1.5rem !important;
    }
    .pb-sm-4,
    .py-sm-4 {
      padding-bottom: 1.5rem !important;
    }
    .pl-sm-4,
    .px-sm-4 {
      padding-left: 1.5rem !important;
    }
    .p-sm-5 {
      padding: 3rem !important;
    }
    .pt-sm-5,
    .py-sm-5 {
      padding-top: 3rem !important;
    }
    .pr-sm-5,
    .px-sm-5 {
      padding-right: 3rem !important;
    }
    .pb-sm-5,
    .py-sm-5 {
      padding-bottom: 3rem !important;
    }
    .pl-sm-5,
    .px-sm-5 {
      padding-left: 3rem !important;
    }
    .m-sm-auto {
      margin: auto !important;
    }
    .mt-sm-auto,
    .my-sm-auto {
      margin-top: auto !important;
    }
    .mr-sm-auto,
    .mx-sm-auto {
      margin-right: auto !important;
    }
    .mb-sm-auto,
    .my-sm-auto {
      margin-bottom: auto !important;
    }
    .ml-sm-auto,
    .mx-sm-auto {
      margin-left: auto !important;
    }
  }

  @media (min-width: 768px) {
    .m-md-0 {
      margin: 0 !important;
    }
    .mt-md-0,
    .my-md-0 {
      margin-top: 0 !important;
    }
    .mr-md-0,
    .mx-md-0 {
      margin-right: 0 !important;
    }
    .mb-md-0,
    .my-md-0 {
      margin-bottom: 0 !important;
    }
    .ml-md-0,
    .mx-md-0 {
      margin-left: 0 !important;
    }
    .m-md-1 {
      margin: 0.25rem !important;
    }
    .mt-md-1,
    .my-md-1 {
      margin-top: 0.25rem !important;
    }
    .mr-md-1,
    .mx-md-1 {
      margin-right: 0.25rem !important;
    }
    .mb-md-1,
    .my-md-1 {
      margin-bottom: 0.25rem !important;
    }
    .ml-md-1,
    .mx-md-1 {
      margin-left: 0.25rem !important;
    }
    .m-md-2 {
      margin: 0.5rem !important;
    }
    .mt-md-2,
    .my-md-2 {
      margin-top: 0.5rem !important;
    }
    .mr-md-2,
    .mx-md-2 {
      margin-right: 0.5rem !important;
    }
    .mb-md-2,
    .my-md-2 {
      margin-bottom: 0.5rem !important;
    }
    .ml-md-2,
    .mx-md-2 {
      margin-left: 0.5rem !important;
    }
    .m-md-3 {
      margin: 1rem !important;
    }
    .mt-md-3,
    .my-md-3 {
      margin-top: 1rem !important;
    }
    .mr-md-3,
    .mx-md-3 {
      margin-right: 1rem !important;
    }
    .mb-md-3,
    .my-md-3 {
      margin-bottom: 1rem !important;
    }
    .ml-md-3,
    .mx-md-3 {
      margin-left: 1rem !important;
    }
    .m-md-4 {
      margin: 1.5rem !important;
    }
    .mt-md-4,
    .my-md-4 {
      margin-top: 1.5rem !important;
    }
    .mr-md-4,
    .mx-md-4 {
      margin-right: 1.5rem !important;
    }
    .mb-md-4,
    .my-md-4 {
      margin-bottom: 1.5rem !important;
    }
    .ml-md-4,
    .mx-md-4 {
      margin-left: 1.5rem !important;
    }
    .m-md-5 {
      margin: 3rem !important;
    }
    .mt-md-5,
    .my-md-5 {
      margin-top: 3rem !important;
    }
    .mr-md-5,
    .mx-md-5 {
      margin-right: 3rem !important;
    }
    .mb-md-5,
    .my-md-5 {
      margin-bottom: 3rem !important;
    }
    .ml-md-5,
    .mx-md-5 {
      margin-left: 3rem !important;
    }
    .p-md-0 {
      padding: 0 !important;
    }
    .pt-md-0,
    .py-md-0 {
      padding-top: 0 !important;
    }
    .pr-md-0,
    .px-md-0 {
      padding-right: 0 !important;
    }
    .pb-md-0,
    .py-md-0 {
      padding-bottom: 0 !important;
    }
    .pl-md-0,
    .px-md-0 {
      padding-left: 0 !important;
    }
    .p-md-1 {
      padding: 0.25rem !important;
    }
    .pt-md-1,
    .py-md-1 {
      padding-top: 0.25rem !important;
    }
    .pr-md-1,
    .px-md-1 {
      padding-right: 0.25rem !important;
    }
    .pb-md-1,
    .py-md-1 {
      padding-bottom: 0.25rem !important;
    }
    .pl-md-1,
    .px-md-1 {
      padding-left: 0.25rem !important;
    }
    .p-md-2 {
      padding: 0.5rem !important;
    }
    .pt-md-2,
    .py-md-2 {
      padding-top: 0.5rem !important;
    }
    .pr-md-2,
    .px-md-2 {
      padding-right: 0.5rem !important;
    }
    .pb-md-2,
    .py-md-2 {
      padding-bottom: 0.5rem !important;
    }
    .pl-md-2,
    .px-md-2 {
      padding-left: 0.5rem !important;
    }
    .p-md-3 {
      padding: 1rem !important;
    }
    .pt-md-3,
    .py-md-3 {
      padding-top: 1rem !important;
    }
    .pr-md-3,
    .px-md-3 {
      padding-right: 1rem !important;
    }
    .pb-md-3,
    .py-md-3 {
      padding-bottom: 1rem !important;
    }
    .pl-md-3,
    .px-md-3 {
      padding-left: 1rem !important;
    }
    .p-md-4 {
      padding: 1.5rem !important;
    }
    .pt-md-4,
    .py-md-4 {
      padding-top: 1.5rem !important;
    }
    .pr-md-4,
    .px-md-4 {
      padding-right: 1.5rem !important;
    }
    .pb-md-4,
    .py-md-4 {
      padding-bottom: 1.5rem !important;
    }
    .pl-md-4,
    .px-md-4 {
      padding-left: 1.5rem !important;
    }
    .p-md-5 {
      padding: 3rem !important;
    }
    .pt-md-5,
    .py-md-5 {
      padding-top: 3rem !important;
    }
    .pr-md-5,
    .px-md-5 {
      padding-right: 3rem !important;
    }
    .pb-md-5,
    .py-md-5 {
      padding-bottom: 3rem !important;
    }
    .pl-md-5,
    .px-md-5 {
      padding-left: 3rem !important;
    }
    .m-md-auto {
      margin: auto !important;
    }
    .mt-md-auto,
    .my-md-auto {
      margin-top: auto !important;
    }
    .mr-md-auto,
    .mx-md-auto {
      margin-right: auto !important;
    }
    .mb-md-auto,
    .my-md-auto {
      margin-bottom: auto !important;
    }
    .ml-md-auto,
    .mx-md-auto {
      margin-left: auto !important;
    }
  }

  @media (min-width: 992px) {
    .m-lg-0 {
      margin: 0 !important;
    }
    .mt-lg-0,
    .my-lg-0 {
      margin-top: 0 !important;
    }
    .mr-lg-0,
    .mx-lg-0 {
      margin-right: 0 !important;
    }
    .mb-lg-0,
    .my-lg-0 {
      margin-bottom: 0 !important;
    }
    .ml-lg-0,
    .mx-lg-0 {
      margin-left: 0 !important;
    }
    .m-lg-1 {
      margin: 0.25rem !important;
    }
    .mt-lg-1,
    .my-lg-1 {
      margin-top: 0.25rem !important;
    }
    .mr-lg-1,
    .mx-lg-1 {
      margin-right: 0.25rem !important;
    }
    .mb-lg-1,
    .my-lg-1 {
      margin-bottom: 0.25rem !important;
    }
    .ml-lg-1,
    .mx-lg-1 {
      margin-left: 0.25rem !important;
    }
    .m-lg-2 {
      margin: 0.5rem !important;
    }
    .mt-lg-2,
    .my-lg-2 {
      margin-top: 0.5rem !important;
    }
    .mr-lg-2,
    .mx-lg-2 {
      margin-right: 0.5rem !important;
    }
    .mb-lg-2,
    .my-lg-2 {
      margin-bottom: 0.5rem !important;
    }
    .ml-lg-2,
    .mx-lg-2 {
      margin-left: 0.5rem !important;
    }
    .m-lg-3 {
      margin: 1rem !important;
    }
    .mt-lg-3,
    .my-lg-3 {
      margin-top: 1rem !important;
    }
    .mr-lg-3,
    .mx-lg-3 {
      margin-right: 1rem !important;
    }
    .mb-lg-3,
    .my-lg-3 {
      margin-bottom: 1rem !important;
    }
    .ml-lg-3,
    .mx-lg-3 {
      margin-left: 1rem !important;
    }
    .m-lg-4 {
      margin: 1.5rem !important;
    }
    .mt-lg-4,
    .my-lg-4 {
      margin-top: 1.5rem !important;
    }
    .mr-lg-4,
    .mx-lg-4 {
      margin-right: 1.5rem !important;
    }
    .mb-lg-4,
    .my-lg-4 {
      margin-bottom: 1.5rem !important;
    }
    .ml-lg-4,
    .mx-lg-4 {
      margin-left: 1.5rem !important;
    }
    .m-lg-5 {
      margin: 3rem !important;
    }
    .mt-lg-5,
    .my-lg-5 {
      margin-top: 3rem !important;
    }
    .mr-lg-5,
    .mx-lg-5 {
      margin-right: 3rem !important;
    }
    .mb-lg-5,
    .my-lg-5 {
      margin-bottom: 3rem !important;
    }
    .ml-lg-5,
    .mx-lg-5 {
      margin-left: 3rem !important;
    }
    .p-lg-0 {
      padding: 0 !important;
    }
    .pt-lg-0,
    .py-lg-0 {
      padding-top: 0 !important;
    }
    .pr-lg-0,
    .px-lg-0 {
      padding-right: 0 !important;
    }
    .pb-lg-0,
    .py-lg-0 {
      padding-bottom: 0 !important;
    }
    .pl-lg-0,
    .px-lg-0 {
      padding-left: 0 !important;
    }
    .p-lg-1 {
      padding: 0.25rem !important;
    }
    .pt-lg-1,
    .py-lg-1 {
      padding-top: 0.25rem !important;
    }
    .pr-lg-1,
    .px-lg-1 {
      padding-right: 0.25rem !important;
    }
    .pb-lg-1,
    .py-lg-1 {
      padding-bottom: 0.25rem !important;
    }
    .pl-lg-1,
    .px-lg-1 {
      padding-left: 0.25rem !important;
    }
    .p-lg-2 {
      padding: 0.5rem !important;
    }
    .pt-lg-2,
    .py-lg-2 {
      padding-top: 0.5rem !important;
    }
    .pr-lg-2,
    .px-lg-2 {
      padding-right: 0.5rem !important;
    }
    .pb-lg-2,
    .py-lg-2 {
      padding-bottom: 0.5rem !important;
    }
    .pl-lg-2,
    .px-lg-2 {
      padding-left: 0.5rem !important;
    }
    .p-lg-3 {
      padding: 1rem !important;
    }
    .pt-lg-3,
    .py-lg-3 {
      padding-top: 1rem !important;
    }
    .pr-lg-3,
    .px-lg-3 {
      padding-right: 1rem !important;
    }
    .pb-lg-3,
    .py-lg-3 {
      padding-bottom: 1rem !important;
    }
    .pl-lg-3,
    .px-lg-3 {
      padding-left: 1rem !important;
    }
    .p-lg-4 {
      padding: 1.5rem !important;
    }
    .pt-lg-4,
    .py-lg-4 {
      padding-top: 1.5rem !important;
    }
    .pr-lg-4,
    .px-lg-4 {
      padding-right: 1.5rem !important;
    }
    .pb-lg-4,
    .py-lg-4 {
      padding-bottom: 1.5rem !important;
    }
    .pl-lg-4,
    .px-lg-4 {
      padding-left: 1.5rem !important;
    }
    .p-lg-5 {
      padding: 3rem !important;
    }
    .pt-lg-5,
    .py-lg-5 {
      padding-top: 3rem !important;
    }
    .pr-lg-5,
    .px-lg-5 {
      padding-right: 3rem !important;
    }
    .pb-lg-5,
    .py-lg-5 {
      padding-bottom: 3rem !important;
    }
    .pl-lg-5,
    .px-lg-5 {
      padding-left: 3rem !important;
    }
    .m-lg-auto {
      margin: auto !important;
    }
    .mt-lg-auto,
    .my-lg-auto {
      margin-top: auto !important;
    }
    .mr-lg-auto,
    .mx-lg-auto {
      margin-right: auto !important;
    }
    .mb-lg-auto,
    .my-lg-auto {
      margin-bottom: auto !important;
    }
    .ml-lg-auto,
    .mx-lg-auto {
      margin-left: auto !important;
    }
  }

  @media (min-width: 1200px) {
    .m-xl-0 {
      margin: 0 !important;
    }
    .mt-xl-0,
    .my-xl-0 {
      margin-top: 0 !important;
    }
    .mr-xl-0,
    .mx-xl-0 {
      margin-right: 0 !important;
    }
    .mb-xl-0,
    .my-xl-0 {
      margin-bottom: 0 !important;
    }
    .ml-xl-0,
    .mx-xl-0 {
      margin-left: 0 !important;
    }
    .m-xl-1 {
      margin: 0.25rem !important;
    }
    .mt-xl-1,
    .my-xl-1 {
      margin-top: 0.25rem !important;
    }
    .mr-xl-1,
    .mx-xl-1 {
      margin-right: 0.25rem !important;
    }
    .mb-xl-1,
    .my-xl-1 {
      margin-bottom: 0.25rem !important;
    }
    .ml-xl-1,
    .mx-xl-1 {
      margin-left: 0.25rem !important;
    }
    .m-xl-2 {
      margin: 0.5rem !important;
    }
    .mt-xl-2,
    .my-xl-2 {
      margin-top: 0.5rem !important;
    }
    .mr-xl-2,
    .mx-xl-2 {
      margin-right: 0.5rem !important;
    }
    .mb-xl-2,
    .my-xl-2 {
      margin-bottom: 0.5rem !important;
    }
    .ml-xl-2,
    .mx-xl-2 {
      margin-left: 0.5rem !important;
    }
    .m-xl-3 {
      margin: 1rem !important;
    }
    .mt-xl-3,
    .my-xl-3 {
      margin-top: 1rem !important;
    }
    .mr-xl-3,
    .mx-xl-3 {
      margin-right: 1rem !important;
    }
    .mb-xl-3,
    .my-xl-3 {
      margin-bottom: 1rem !important;
    }
    .ml-xl-3,
    .mx-xl-3 {
      margin-left: 1rem !important;
    }
    .m-xl-4 {
      margin: 1.5rem !important;
    }
    .mt-xl-4,
    .my-xl-4 {
      margin-top: 1.5rem !important;
    }
    .mr-xl-4,
    .mx-xl-4 {
      margin-right: 1.5rem !important;
    }
    .mb-xl-4,
    .my-xl-4 {
      margin-bottom: 1.5rem !important;
    }
    .ml-xl-4,
    .mx-xl-4 {
      margin-left: 1.5rem !important;
    }
    .m-xl-5 {
      margin: 3rem !important;
    }
    .mt-xl-5,
    .my-xl-5 {
      margin-top: 3rem !important;
    }
    .mr-xl-5,
    .mx-xl-5 {
      margin-right: 3rem !important;
    }
    .mb-xl-5,
    .my-xl-5 {
      margin-bottom: 3rem !important;
    }
    .ml-xl-5,
    .mx-xl-5 {
      margin-left: 3rem !important;
    }
    .p-xl-0 {
      padding: 0 !important;
    }
    .pt-xl-0,
    .py-xl-0 {
      padding-top: 0 !important;
    }
    .pr-xl-0,
    .px-xl-0 {
      padding-right: 0 !important;
    }
    .pb-xl-0,
    .py-xl-0 {
      padding-bottom: 0 !important;
    }
    .pl-xl-0,
    .px-xl-0 {
      padding-left: 0 !important;
    }
    .p-xl-1 {
      padding: 0.25rem !important;
    }
    .pt-xl-1,
    .py-xl-1 {
      padding-top: 0.25rem !important;
    }
    .pr-xl-1,
    .px-xl-1 {
      padding-right: 0.25rem !important;
    }
    .pb-xl-1,
    .py-xl-1 {
      padding-bottom: 0.25rem !important;
    }
    .pl-xl-1,
    .px-xl-1 {
      padding-left: 0.25rem !important;
    }
    .p-xl-2 {
      padding: 0.5rem !important;
    }
    .pt-xl-2,
    .py-xl-2 {
      padding-top: 0.5rem !important;
    }
    .pr-xl-2,
    .px-xl-2 {
      padding-right: 0.5rem !important;
    }
    .pb-xl-2,
    .py-xl-2 {
      padding-bottom: 0.5rem !important;
    }
    .pl-xl-2,
    .px-xl-2 {
      padding-left: 0.5rem !important;
    }
    .p-xl-3 {
      padding: 1rem !important;
    }
    .pt-xl-3,
    .py-xl-3 {
      padding-top: 1rem !important;
    }
    .pr-xl-3,
    .px-xl-3 {
      padding-right: 1rem !important;
    }
    .pb-xl-3,
    .py-xl-3 {
      padding-bottom: 1rem !important;
    }
    .pl-xl-3,
    .px-xl-3 {
      padding-left: 1rem !important;
    }
    .p-xl-4 {
      padding: 1.5rem !important;
    }
    .pt-xl-4,
    .py-xl-4 {
      padding-top: 1.5rem !important;
    }
    .pr-xl-4,
    .px-xl-4 {
      padding-right: 1.5rem !important;
    }
    .pb-xl-4,
    .py-xl-4 {
      padding-bottom: 1.5rem !important;
    }
    .pl-xl-4,
    .px-xl-4 {
      padding-left: 1.5rem !important;
    }
    .p-xl-5 {
      padding: 3rem !important;
    }
    .pt-xl-5,
    .py-xl-5 {
      padding-top: 3rem !important;
    }
    .pr-xl-5,
    .px-xl-5 {
      padding-right: 3rem !important;
    }
    .pb-xl-5,
    .py-xl-5 {
      padding-bottom: 3rem !important;
    }
    .pl-xl-5,
    .px-xl-5 {
      padding-left: 3rem !important;
    }
    .m-xl-auto {
      margin: auto !important;
    }
    .mt-xl-auto,
    .my-xl-auto {
      margin-top: auto !important;
    }
    .mr-xl-auto,
    .mx-xl-auto {
      margin-right: auto !important;
    }
    .mb-xl-auto,
    .my-xl-auto {
      margin-bottom: auto !important;
    }
    .ml-xl-auto,
    .mx-xl-auto {
      margin-left: auto !important;
    }
  }

  .text-monospace {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  }

  .text-justify {
    text-align: justify !important;
  }

  .text-nowrap {
    white-space: nowrap !important;
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .text-left {
    text-align: left !important;
  }

  .text-right {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }

  @media (min-width: 576px) {
    .text-sm-left {
      text-align: left !important;
    }
    .text-sm-right {
      text-align: right !important;
    }
    .text-sm-center {
      text-align: center !important;
    }
  }

  @media (min-width: 768px) {
    .text-md-left {
      text-align: left !important;
    }
    .text-md-right {
      text-align: right !important;
    }
    .text-md-center {
      text-align: center !important;
    }
  }

  @media (min-width: 992px) {
    .text-lg-left {
      text-align: left !important;
    }
    .text-lg-right {
      text-align: right !important;
    }
    .text-lg-center {
      text-align: center !important;
    }
  }

  @media (min-width: 1200px) {
    .text-xl-left {
      text-align: left !important;
    }
    .text-xl-right {
      text-align: right !important;
    }
    .text-xl-center {
      text-align: center !important;
    }
  }

  .text-lowercase {
    text-transform: lowercase !important;
  }

  .text-uppercase {
    text-transform: uppercase !important;
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }

  .font-weight-light {
    font-weight: 300 !important;
  }

  .font-weight-normal {
    font-weight: 400 !important;
  }

  .font-weight-bold {
    font-weight: 700 !important;
  }

  .font-italic {
    font-style: italic !important;
  }

  .text-white {
    color: #fff !important;
  }

  .text-primary {
    color: #663399 !important;
  }

  a.text-primary:hover,
  a.text-primary:focus {
    color: #4d2673 !important;
  }

  .text-secondary {
    color: #52495a !important;
  }

  a.text-secondary:hover,
  a.text-secondary:focus {
    color: #38323e !important;
  }

  .text-success {
    color: #4caf50 !important;
  }

  a.text-success:hover,
  a.text-success:focus {
    color: #3d8b40 !important;
  }

  .text-info {
    color: #003473 !important;
  }

  a.text-info:hover,
  a.text-info:focus {
    color: #001d40 !important;
  }

  .text-warning {
    color: #ffc107 !important;
  }

  a.text-warning:hover,
  a.text-warning:focus {
    color: #d39e00 !important;
  }

  .text-danger {
    color: #f44336 !important;
  }

  a.text-danger:hover,
  a.text-danger:focus {
    color: #ea1c0d !important;
  }

  .text-light {
    color: #bbb !important;
  }

  a.text-light:hover,
  a.text-light:focus {
    color: #a2a2a2 !important;
  }

  .text-dark {
    color: #47404f !important;
  }

  a.text-dark:hover,
  a.text-dark:focus {
    color: #2e2932 !important;
  }

  .text-gray-100 {
    color: #f8f9fa !important;
  }

  a.text-gray-100:hover,
  a.text-gray-100:focus {
    color: #dae0e5 !important;
  }

  .text-gray-200 {
    color: #eee !important;
  }

  a.text-gray-200:hover,
  a.text-gray-200:focus {
    color: #d5d5d5 !important;
  }

  .text-gray-300 {
    color: #dee2e6 !important;
  }

  a.text-gray-300:hover,
  a.text-gray-300:focus {
    color: #c1c9d0 !important;
  }

  .text-gray-400 {
    color: #ced4da !important;
  }

  a.text-gray-400:hover,
  a.text-gray-400:focus {
    color: #b1bbc4 !important;
  }

  .text-gray-500 {
    color: #bbb !important;
  }

  a.text-gray-500:hover,
  a.text-gray-500:focus {
    color: #a2a2a2 !important;
  }

  .text-gray-600 {
    color: #70657b !important;
  }

  a.text-gray-600:hover,
  a.text-gray-600:focus {
    color: #574e5f !important;
  }

  .text-gray-700 {
    color: #665c70 !important;
  }

  a.text-gray-700:hover,
  a.text-gray-700:focus {
    color: #4d4554 !important;
  }

  .text-gray-800 {
    color: #52495a !important;
  }

  a.text-gray-800:hover,
  a.text-gray-800:focus {
    color: #38323e !important;
  }

  .text-gray-900 {
    color: #47404f !important;
  }

  a.text-gray-900:hover,
  a.text-gray-900:focus {
    color: #2e2932 !important;
  }

  .text-body {
    color: #47404f !important;
  }

  .text-muted {
    color: #70657b !important;
  }

  .text-black-50 {
    color: rgba(0, 0, 0, 0.5) !important;
  }

  .text-white-50 {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }

  .visible {
    visibility: visible !important;
  }

  .invisible {
    visibility: hidden !important;
  }

  @media print {
    *,
    *::before,
    *::after {
      text-shadow: none !important;
      box-shadow: none !important;
    }
    a:not(.btn) {
      text-decoration: underline;
    }
    abbr[title]::after {
      content: " (" attr(title) ")";
    }
    pre {
      white-space: pre-wrap !important;
    }
    pre,
    blockquote {
      border: 1px solid #bbb;
      page-break-inside: avoid;
    }
    thead {
      display: table-header-group;
    }
    tr,
    img {
      page-break-inside: avoid;
    }
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }
    h2,
    h3 {
      page-break-after: avoid;
    }
    @page {
      size: a3;
    }
    body {
      min-width: 992px !important;
    }
    .container {
      min-width: 992px !important;
    }
    .navbar {
      display: none;
    }
    .badge {
      border: 1px solid black;
    }
    .table {
      border-collapse: collapse !important;
    }
    .table td,
    .table th {
      background-color: #fff !important;
    }
    .table-bordered th,
    .table-bordered td {
      border: 1px solid #dee2e6 !important;
    }
    .table-dark {
      color: inherit;
    }
    .table-dark th,
    .table-dark td,
    .table-dark thead th,
    .table-dark tbody + tbody {
      border-color: #dee2e6;
    }
    .table .thead-dark th {
      color: inherit;
      border-color: #dee2e6;
    }
  }

  [dir="rtl"] .text-left {
    text-align: right !important;
  }

  [dir="rtl"] .text-right {
    text-align: left !important;
  }

  @media (min-width: 576px) {
    [dir="rtl"] .text-sm-left {
      text-align: right !important;
    }
    [dir="rtl"] .text-sm-right {
      text-align: left !important;
    }
  }

  @media (min-width: 768px) {
    [dir="rtl"] .text-md-left {
      text-align: right !important;
    }
    [dir="rtl"] .text-md-right {
      text-align: left !important;
    }
  }

  @media (min-width: 992px) {
    [dir="rtl"] .text-lg-left {
      text-align: right !important;
    }
    [dir="rtl"] .text-lg-right {
      text-align: left !important;
    }
  }

  @media (min-width: 1200px) {
    [dir="rtl"] .text-xl-left {
      text-align: right !important;
    }
    [dir="rtl"] .text-xl-right {
      text-align: left !important;
    }
  }

  [dir="rtl"] .float-left {
    float: right !important;
  }

  [dir="rtl"] .float-right {
    float: left !important;
  }

  @media (min-width: 576px) {
    [dir="rtl"] .float-sm-left {
      float: right !important;
    }
    [dir="rtl"] .float-sm-right {
      float: left !important;
    }
  }

  @media (min-width: 768px) {
    [dir="rtl"] .float-md-left {
      float: right !important;
    }
    [dir="rtl"] .float-md-right {
      float: left !important;
    }
  }

  @media (min-width: 992px) {
    [dir="rtl"] .float-lg-left {
      float: right !important;
    }
    [dir="rtl"] .float-lg-right {
      float: left !important;
    }
  }

  @media (min-width: 1200px) {
    [dir="rtl"] .float-xl-left {
      float: right !important;
    }
    [dir="rtl"] .float-xl-right {
      float: left !important;
    }
  }

  [dir="rtl"] .mr-0,
  [dir="rtl"] .mx-0 {
    margin-left: 0 !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-0,
  [dir="rtl"] .mx-0 {
    margin-right: 0 !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-1,
  [dir="rtl"] .mx-1 {
    margin-left: 0.25rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-1,
  [dir="rtl"] .mx-1 {
    margin-right: 0.25rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-2,
  [dir="rtl"] .mx-2 {
    margin-left: 0.5rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-2,
  [dir="rtl"] .mx-2 {
    margin-right: 0.5rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-3,
  [dir="rtl"] .mx-3 {
    margin-left: 1rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-3,
  [dir="rtl"] .mx-3 {
    margin-right: 1rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-4,
  [dir="rtl"] .mx-4 {
    margin-left: 1.5rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-4,
  [dir="rtl"] .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .mr-5,
  [dir="rtl"] .mx-5 {
    margin-left: 3rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .ml-5,
  [dir="rtl"] .mx-5 {
    margin-right: 3rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-0,
  [dir="rtl"] .px-0 {
    padding-left: 0 !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-0,
  [dir="rtl"] .px-0 {
    padding-right: 0 !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-1,
  [dir="rtl"] .px-1 {
    padding-left: 0.25rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-1,
  [dir="rtl"] .px-1 {
    padding-right: 0.25rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-2,
  [dir="rtl"] .px-2 {
    padding-left: 0.5rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-2,
  [dir="rtl"] .px-2 {
    padding-right: 0.5rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-3,
  [dir="rtl"] .px-3 {
    padding-left: 1rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-3,
  [dir="rtl"] .px-3 {
    padding-right: 1rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-4,
  [dir="rtl"] .px-4 {
    padding-left: 1.5rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-4,
  [dir="rtl"] .px-4 {
    padding-right: 1.5rem !important;
    margin-left: unset !important;
  }

  [dir="rtl"] .pr-5,
  [dir="rtl"] .px-5 {
    padding-left: 3rem !important;
    margin-right: unset !important;
  }

  [dir="rtl"] .pl-5,
  [dir="rtl"] .px-5 {
    padding-right: 3rem !important;
    margin-left: unset !important;
  }

  @media (min-width: 576px) {
    [dir="rtl"] .mr-sm-0,
    [dir="rtl"] .mx-sm-0 {
      margin-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-0,
    [dir="rtl"] .mx-sm-0 {
      margin-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-1,
    [dir="rtl"] .mx-sm-1 {
      margin-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-1,
    [dir="rtl"] .mx-sm-1 {
      margin-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-2,
    [dir="rtl"] .mx-sm-2 {
      margin-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-2,
    [dir="rtl"] .mx-sm-2 {
      margin-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-3,
    [dir="rtl"] .mx-sm-3 {
      margin-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-3,
    [dir="rtl"] .mx-sm-3 {
      margin-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-4,
    [dir="rtl"] .mx-sm-4 {
      margin-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-4,
    [dir="rtl"] .mx-sm-4 {
      margin-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-sm-5,
    [dir="rtl"] .mx-sm-5 {
      margin-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-sm-5,
    [dir="rtl"] .mx-sm-5 {
      margin-right: 3rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-0,
    [dir="rtl"] .px-sm-0 {
      padding-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-0,
    [dir="rtl"] .px-sm-0 {
      padding-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-1,
    [dir="rtl"] .px-sm-1 {
      padding-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-1,
    [dir="rtl"] .px-sm-1 {
      padding-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-2,
    [dir="rtl"] .px-sm-2 {
      padding-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-2,
    [dir="rtl"] .px-sm-2 {
      padding-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-3,
    [dir="rtl"] .px-sm-3 {
      padding-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-3,
    [dir="rtl"] .px-sm-3 {
      padding-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-4,
    [dir="rtl"] .px-sm-4 {
      padding-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-4,
    [dir="rtl"] .px-sm-4 {
      padding-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-sm-5,
    [dir="rtl"] .px-sm-5 {
      padding-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-sm-5,
    [dir="rtl"] .px-sm-5 {
      padding-right: 3rem !important;
      margin-left: unset !important;
    }
  }

  @media (min-width: 768px) {
    [dir="rtl"] .mr-md-0,
    [dir="rtl"] .mx-md-0 {
      margin-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-0,
    [dir="rtl"] .mx-md-0 {
      margin-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-1,
    [dir="rtl"] .mx-md-1 {
      margin-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-1,
    [dir="rtl"] .mx-md-1 {
      margin-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-2,
    [dir="rtl"] .mx-md-2 {
      margin-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-2,
    [dir="rtl"] .mx-md-2 {
      margin-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-3,
    [dir="rtl"] .mx-md-3 {
      margin-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-3,
    [dir="rtl"] .mx-md-3 {
      margin-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-4,
    [dir="rtl"] .mx-md-4 {
      margin-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-4,
    [dir="rtl"] .mx-md-4 {
      margin-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-md-5,
    [dir="rtl"] .mx-md-5 {
      margin-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-md-5,
    [dir="rtl"] .mx-md-5 {
      margin-right: 3rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-0,
    [dir="rtl"] .px-md-0 {
      padding-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-0,
    [dir="rtl"] .px-md-0 {
      padding-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-1,
    [dir="rtl"] .px-md-1 {
      padding-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-1,
    [dir="rtl"] .px-md-1 {
      padding-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-2,
    [dir="rtl"] .px-md-2 {
      padding-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-2,
    [dir="rtl"] .px-md-2 {
      padding-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-3,
    [dir="rtl"] .px-md-3 {
      padding-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-3,
    [dir="rtl"] .px-md-3 {
      padding-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-4,
    [dir="rtl"] .px-md-4 {
      padding-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-4,
    [dir="rtl"] .px-md-4 {
      padding-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-md-5,
    [dir="rtl"] .px-md-5 {
      padding-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-md-5,
    [dir="rtl"] .px-md-5 {
      padding-right: 3rem !important;
      margin-left: unset !important;
    }
  }

  @media (min-width: 992px) {
    [dir="rtl"] .mr-lg-0,
    [dir="rtl"] .mx-lg-0 {
      margin-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-0,
    [dir="rtl"] .mx-lg-0 {
      margin-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-1,
    [dir="rtl"] .mx-lg-1 {
      margin-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-1,
    [dir="rtl"] .mx-lg-1 {
      margin-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-2,
    [dir="rtl"] .mx-lg-2 {
      margin-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-2,
    [dir="rtl"] .mx-lg-2 {
      margin-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-3,
    [dir="rtl"] .mx-lg-3 {
      margin-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-3,
    [dir="rtl"] .mx-lg-3 {
      margin-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-4,
    [dir="rtl"] .mx-lg-4 {
      margin-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-4,
    [dir="rtl"] .mx-lg-4 {
      margin-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-lg-5,
    [dir="rtl"] .mx-lg-5 {
      margin-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-lg-5,
    [dir="rtl"] .mx-lg-5 {
      margin-right: 3rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-0,
    [dir="rtl"] .px-lg-0 {
      padding-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-0,
    [dir="rtl"] .px-lg-0 {
      padding-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-1,
    [dir="rtl"] .px-lg-1 {
      padding-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-1,
    [dir="rtl"] .px-lg-1 {
      padding-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-2,
    [dir="rtl"] .px-lg-2 {
      padding-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-2,
    [dir="rtl"] .px-lg-2 {
      padding-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-3,
    [dir="rtl"] .px-lg-3 {
      padding-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-3,
    [dir="rtl"] .px-lg-3 {
      padding-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-4,
    [dir="rtl"] .px-lg-4 {
      padding-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-4,
    [dir="rtl"] .px-lg-4 {
      padding-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-lg-5,
    [dir="rtl"] .px-lg-5 {
      padding-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-lg-5,
    [dir="rtl"] .px-lg-5 {
      padding-right: 3rem !important;
      margin-left: unset !important;
    }
  }

  @media (min-width: 1200px) {
    [dir="rtl"] .mr-xl-0,
    [dir="rtl"] .mx-xl-0 {
      margin-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-0,
    [dir="rtl"] .mx-xl-0 {
      margin-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-1,
    [dir="rtl"] .mx-xl-1 {
      margin-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-1,
    [dir="rtl"] .mx-xl-1 {
      margin-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-2,
    [dir="rtl"] .mx-xl-2 {
      margin-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-2,
    [dir="rtl"] .mx-xl-2 {
      margin-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-3,
    [dir="rtl"] .mx-xl-3 {
      margin-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-3,
    [dir="rtl"] .mx-xl-3 {
      margin-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-4,
    [dir="rtl"] .mx-xl-4 {
      margin-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-4,
    [dir="rtl"] .mx-xl-4 {
      margin-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .mr-xl-5,
    [dir="rtl"] .mx-xl-5 {
      margin-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .ml-xl-5,
    [dir="rtl"] .mx-xl-5 {
      margin-right: 3rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-0,
    [dir="rtl"] .px-xl-0 {
      padding-left: 0 !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-0,
    [dir="rtl"] .px-xl-0 {
      padding-right: 0 !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-1,
    [dir="rtl"] .px-xl-1 {
      padding-left: 0.25rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-1,
    [dir="rtl"] .px-xl-1 {
      padding-right: 0.25rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-2,
    [dir="rtl"] .px-xl-2 {
      padding-left: 0.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-2,
    [dir="rtl"] .px-xl-2 {
      padding-right: 0.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-3,
    [dir="rtl"] .px-xl-3 {
      padding-left: 1rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-3,
    [dir="rtl"] .px-xl-3 {
      padding-right: 1rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-4,
    [dir="rtl"] .px-xl-4 {
      padding-left: 1.5rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-4,
    [dir="rtl"] .px-xl-4 {
      padding-right: 1.5rem !important;
      margin-left: unset !important;
    }
    [dir="rtl"] .pr-xl-5,
    [dir="rtl"] .px-xl-5 {
      padding-left: 3rem !important;
      margin-right: unset !important;
    }
    [dir="rtl"] .pl-xl-5,
    [dir="rtl"] .px-xl-5 {
      padding-right: 3rem !important;
      margin-left: unset !important;
    }
  }

  [dir="rtl"] .input-group > .input-group-prepend > .btn,
  [dir="rtl"] .input-group > .input-group-prepend > .input-group-text,
  [dir="rtl"] .input-group > .input-group-append:not(:last-child) > .btn,
  [dir="rtl"]
    .input-group
    > .input-group-append:not(:last-child)
    > .input-group-text,
  [dir="rtl"]
    .input-group
    > .input-group-append:last-child
    > .btn:not(:last-child):not(.dropdown-toggle),
  [dir="rtl"]
    .input-group
    > .input-group-append:last-child
    > .input-group-text:not(:last-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  [dir="rtl"] .input-group > .input-group-append > .btn,
  [dir="rtl"] .input-group > .input-group-append > .input-group-text,
  [dir="rtl"] .input-group > .input-group-prepend:not(:first-child) > .btn,
  [dir="rtl"]
    .input-group
    > .input-group-prepend:not(:first-child)
    > .input-group-text,
  [dir="rtl"]
    .input-group
    > .input-group-prepend:first-child
    > .btn:not(:first-child),
  [dir="rtl"]
    .input-group
    > .input-group-prepend:first-child
    > .input-group-text:not(:first-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  [dir="rtl"] .input-group > .form-control:not(:last-child),
  [dir="rtl"] .input-group > .custom-select:not(:last-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  [dir="rtl"] .input-group > .form-control:not(:first-child),
  [dir="rtl"] .input-group > .custom-select:not(:first-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  [dir="rtl"] .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  [dir="rtl"] .btn-group > .btn-group:not(:last-child) > .btn,
  [dir="rtl"] .btn-group > .btn:not(:first-child),
  [dir="rtl"] .btn-group > .btn-group:not(:first-child) > .btn {
    border-radius: 0;
  }

  .sidebar-gradient-purple-indigo .sidebar-left {
    /* fallback/image non-cover color */
    background-color: #663399;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #663399),
      color-stop(100%, #33214b)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #663399 0%,
      #33214b 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* Standard */
    background: linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .gradient-purple-indigo {
    /* fallback/image non-cover color */
    background-color: #663399;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #663399),
      color-stop(100%, #33214b)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #663399 0%,
      #33214b 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* Standard */
    background: linear-gradient(-154deg, #663399 0%, #33214b 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .btn.gradient-purple-indigo:active,
  .btn.gradient-purple-indigo.active {
    /* fallback/image non-cover color */
    background-color: #663399;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -90deg,
      right top,
      color-stop(0%, #663399),
      color-stop(100%, #33214b)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* Standard */
    background: linear-gradient(-90deg, #663399 0%, #33214b 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .sidebar-gradient-black-blue .sidebar-left {
    /* fallback/image non-cover color */
    background-color: #004e92;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #004e92),
      color-stop(100%, #000428)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #004e92 0%,
      #000428 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* Standard */
    background: linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .gradient-black-blue {
    /* fallback/image non-cover color */
    background-color: #004e92;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #004e92),
      color-stop(100%, #000428)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #004e92 0%,
      #000428 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* Standard */
    background: linear-gradient(-154deg, #004e92 0%, #000428 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .btn.gradient-black-blue:active,
  .btn.gradient-black-blue.active {
    /* fallback/image non-cover color */
    background-color: #004e92;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -90deg,
      right top,
      color-stop(0%, #004e92),
      color-stop(100%, #000428)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* Standard */
    background: linear-gradient(-90deg, #004e92 0%, #000428 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .sidebar-gradient-black-gray .sidebar-left {
    /* fallback/image non-cover color */
    background-color: #404040;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #404040),
      color-stop(100%, #000000)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #404040 0%,
      #000000 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* Standard */
    background: linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .gradient-black-gray {
    /* fallback/image non-cover color */
    background-color: #404040;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #404040),
      color-stop(100%, #000000)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #404040 0%,
      #000000 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* Standard */
    background: linear-gradient(-154deg, #404040 0%, #000000 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .btn.gradient-black-gray:active,
  .btn.gradient-black-gray.active {
    /* fallback/image non-cover color */
    background-color: #404040;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -90deg,
      right top,
      color-stop(0%, #404040),
      color-stop(100%, #000000)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* Standard */
    background: linear-gradient(-90deg, #404040 0%, #000000 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .sidebar-gradient-steel-gray .sidebar-left {
    /* fallback/image non-cover color */
    background-color: #616d86;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #616d86),
      color-stop(100%, #1f1c2c)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #616d86 0%,
      #1f1c2c 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* Standard */
    background: linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .gradient-steel-gray {
    /* fallback/image non-cover color */
    background-color: #616d86;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -154deg,
      right top,
      color-stop(0%, #616d86),
      color-stop(100%, #1f1c2c)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(
      -154deg,
      #616d86 0%,
      #1f1c2c 100%
    );
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* Standard */
    background: linear-gradient(-154deg, #616d86 0%, #1f1c2c 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .btn.gradient-steel-gray:active,
  .btn.gradient-steel-gray.active {
    /* fallback/image non-cover color */
    background-color: #616d86;
    /* Firefox 3.6+ */
    background-image: -moz-linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* Safari 4+, Chrome 1+ */
    background-image: -webkit-gradient(
      linear,
      -90deg,
      right top,
      color-stop(0%, #616d86),
      color-stop(100%, #1f1c2c)
    );
    /* Safari 5.1+, Chrome 10+ */
    background-image: -webkit-linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* Opera 11.10+ */
    background-image: -o-linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* IE10+ */
    background: -ms-linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* Standard */
    background: linear-gradient(-90deg, #616d86 0%, #1f1c2c 100%);
    /* IE6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$from', endColorstr='$to',GradientType=1 );
  }

  .sidebar-blue .sidebar-left {
    background: #003473;
  }

  .blue {
    background: #003473;
  }

  .sidebar-midnight-blue .sidebar-left {
    background: #0c0c3c;
  }

  .midnight-blue {
    background: #0c0c3c;
  }

  .sidebar-indigo .sidebar-left {
    background: #3f51b5;
  }

  .indigo {
    background: #3f51b5;
  }

  .sidebar-dark-purple .sidebar-left {
    background: #322740;
  }

  .dark-purple {
    background: #322740;
  }

  .sidebar-purple .sidebar-left {
    background: #663399;
  }

  .purple {
    background: #663399;
  }

  .sidebar-pink .sidebar-left {
    background: #cb3066;
  }

  .pink {
    background: #cb3066;
  }

  .sidebar-red .sidebar-left {
    background: #f44336;
  }

  .red {
    background: #f44336;
  }

  .sidebar-orange .sidebar-left {
    background: #e97d23;
  }

  .orange {
    background: #e97d23;
  }

  .sidebar-yellow .sidebar-left {
    background: #ffc107;
  }

  .yellow {
    background: #ffc107;
  }

  .sidebar-green .sidebar-left {
    background: #4caf50;
  }

  .green {
    background: #4caf50;
  }

  .sidebar-teal .sidebar-left {
    background: #20c997;
  }

  .teal {
    background: #20c997;
  }

  .sidebar-cyan .sidebar-left {
    background: #9c27b0;
  }

  .cyan {
    background: #9c27b0;
  }

  .sidebar-gray .sidebar-left {
    background: #2d2d33;
  }

  .gray {
    background: #2d2d33;
  }

  .sidebar-slate-gray .sidebar-left {
    background: #405365;
  }

  .slate-gray {
    background: #405365;
  }

  /*
  $full-map: (
    blue: (
      100: #f31312,
      .....,
      900: #f32332
    ),
    red: (
      100: #f31312,
      .....,
      900: #f32332
    )
  )
  */
  .blue-50 {
    background-color: #73b2ff;
  }

  .text-blue-50 {
    color: black;
  }

  .blue-100 {
    background-color: #4096ff;
  }

  .text-blue-100 {
    color: black;
  }

  .blue-200 {
    background-color: #0d7aff;
  }

  .text-blue-200 {
    color: black;
  }

  .blue-300 {
    background-color: #0062d9;
  }

  .text-blue-300 {
    color: black;
  }

  .blue-400 {
    background-color: #004ba6;
  }

  .text-blue-400 {
    color: white;
  }

  .blue-500 {
    background-color: #003473;
  }

  .text-blue-500 {
    color: white;
  }

  .blue-600 {
    background-color: #001d40;
  }

  .text-blue-600 {
    color: white;
  }

  .blue-700 {
    background-color: #00060d;
  }

  .text-blue-700 {
    color: white;
  }

  .blue-800 {
    background-color: black;
  }

  .text-blue-800 {
    color: white;
  }

  .blue-900 {
    background-color: black;
  }

  .text-blue-900 {
    color: white;
  }

  .indigo-50 {
    background-color: #f7f8fc;
  }

  .text-indigo-50 {
    color: black;
  }

  .indigo-100 {
    background-color: #d1d6ef;
  }

  .text-indigo-100 {
    color: black;
  }

  .indigo-200 {
    background-color: #abb4e2;
  }

  .text-indigo-200 {
    color: black;
  }

  .indigo-300 {
    background-color: #8591d5;
  }

  .text-indigo-300 {
    color: black;
  }

  .indigo-400 {
    background-color: #606fc7;
  }

  .text-indigo-400 {
    color: black;
  }

  .indigo-500 {
    background-color: #3f51b5;
  }

  .text-indigo-500 {
    color: black;
  }

  .indigo-600 {
    background-color: #32408f;
  }

  .text-indigo-600 {
    color: white;
  }

  .indigo-700 {
    background-color: #252f69;
  }

  .text-indigo-700 {
    color: white;
  }

  .indigo-800 {
    background-color: #171e44;
  }

  .text-indigo-800 {
    color: white;
  }

  .indigo-900 {
    background-color: #0a0d1e;
  }

  .text-indigo-900 {
    color: white;
  }

  .purple-50 {
    background-color: #e6d9f2;
  }

  .text-purple-50 {
    color: black;
  }

  .purple-100 {
    background-color: #ccb3e6;
  }

  .text-purple-100 {
    color: black;
  }

  .purple-200 {
    background-color: #b38cd9;
  }

  .text-purple-200 {
    color: black;
  }

  .purple-300 {
    background-color: #9966cc;
  }

  .text-purple-300 {
    color: black;
  }

  .purple-400 {
    background-color: #8040bf;
  }

  .text-purple-400 {
    color: black;
  }

  .purple-500 {
    background-color: #663399;
  }

  .text-purple-500 {
    color: white;
  }

  .purple-600 {
    background-color: #4d2673;
  }

  .text-purple-600 {
    color: white;
  }

  .purple-700 {
    background-color: #331a4d;
  }

  .text-purple-700 {
    color: white;
  }

  .purple-800 {
    background-color: #1a0d26;
  }

  .text-purple-800 {
    color: white;
  }

  .purple-900 {
    background-color: black;
  }

  .text-purple-900 {
    color: white;
  }

  .pink-50 {
    background-color: #fefcfd;
  }

  .text-pink-50 {
    color: black;
  }

  .pink-100 {
    background-color: #f4d3de;
  }

  .text-pink-100 {
    color: black;
  }

  .pink-200 {
    background-color: #eba9c0;
  }

  .text-pink-200 {
    color: black;
  }

  .pink-300 {
    background-color: #e180a2;
  }

  .text-pink-300 {
    color: black;
  }

  .pink-400 {
    background-color: #d75784;
  }

  .text-pink-400 {
    color: black;
  }

  .pink-500 {
    background-color: #cb3066;
  }

  .text-pink-500 {
    color: black;
  }

  .pink-600 {
    background-color: #a22651;
  }

  .text-pink-600 {
    color: white;
  }

  .pink-700 {
    background-color: #791c3d;
  }

  .text-pink-700 {
    color: white;
  }

  .pink-800 {
    background-color: #4f1328;
  }

  .text-pink-800 {
    color: white;
  }

  .pink-900 {
    background-color: #260913;
  }

  .text-pink-900 {
    color: white;
  }

  .red-50 {
    background-color: white;
  }

  .text-red-50 {
    color: black;
  }

  .red-100 {
    background-color: #fff8f7;
  }

  .text-red-100 {
    color: black;
  }

  .red-200 {
    background-color: #fccbc7;
  }

  .text-red-200 {
    color: black;
  }

  .red-300 {
    background-color: #f99d97;
  }

  .text-red-300 {
    color: black;
  }

  .red-400 {
    background-color: #f77066;
  }

  .text-red-400 {
    color: black;
  }

  .red-500 {
    background-color: #f44336;
  }

  .text-red-500 {
    color: black;
  }

  .red-600 {
    background-color: #ea1c0d;
  }

  .text-red-600 {
    color: black;
  }

  .red-700 {
    background-color: #ba160a;
  }

  .text-red-700 {
    color: white;
  }

  .red-800 {
    background-color: #891008;
  }

  .text-red-800 {
    color: white;
  }

  .red-900 {
    background-color: #590b05;
  }

  .text-red-900 {
    color: white;
  }

  .orange-50 {
    background-color: white;
  }

  .text-orange-50 {
    color: black;
  }

  .orange-100 {
    background-color: #fcebdc;
  }

  .text-orange-100 {
    color: black;
  }

  .orange-200 {
    background-color: #f7cfae;
  }

  .text-orange-200 {
    color: black;
  }

  .orange-300 {
    background-color: #f2b480;
  }

  .text-orange-300 {
    color: black;
  }

  .orange-400 {
    background-color: #ee9851;
  }

  .text-orange-400 {
    color: black;
  }

  .orange-500 {
    background-color: #e97d23;
  }

  .text-orange-500 {
    color: black;
  }

  .orange-600 {
    background-color: #c56414;
  }

  .text-orange-600 {
    color: black;
  }

  .orange-700 {
    background-color: #974d0f;
  }

  .text-orange-700 {
    color: white;
  }

  .orange-800 {
    background-color: #69350a;
  }

  .text-orange-800 {
    color: white;
  }

  .orange-900 {
    background-color: #3a1e06;
  }

  .text-orange-900 {
    color: white;
  }

  .yellow-50 {
    background-color: white;
  }

  .text-yellow-50 {
    color: black;
  }

  .yellow-100 {
    background-color: #fff4d3;
  }

  .text-yellow-100 {
    color: black;
  }

  .yellow-200 {
    background-color: #ffe7a0;
  }

  .text-yellow-200 {
    color: black;
  }

  .yellow-300 {
    background-color: #ffdb6d;
  }

  .text-yellow-300 {
    color: black;
  }

  .yellow-400 {
    background-color: #ffce3a;
  }

  .text-yellow-400 {
    color: black;
  }

  .yellow-500 {
    background-color: #ffc107;
  }

  .text-yellow-500 {
    color: black;
  }

  .yellow-600 {
    background-color: #d39e00;
  }

  .text-yellow-600 {
    color: black;
  }

  .yellow-700 {
    background-color: #a07800;
  }

  .text-yellow-700 {
    color: white;
  }

  .yellow-800 {
    background-color: #6d5200;
  }

  .text-yellow-800 {
    color: white;
  }

  .yellow-900 {
    background-color: #3a2c00;
  }

  .text-yellow-900 {
    color: white;
  }

  .green-50 {
    background-color: #fcfefc;
  }

  .text-green-50 {
    color: black;
  }

  .green-100 {
    background-color: #d9eeda;
  }

  .text-green-100 {
    color: black;
  }

  .green-200 {
    background-color: #b5dfb7;
  }

  .text-green-200 {
    color: black;
  }

  .green-300 {
    background-color: #92cf94;
  }

  .text-green-300 {
    color: black;
  }

  .green-400 {
    background-color: #6ec071;
  }

  .text-green-400 {
    color: black;
  }

  .green-500 {
    background-color: #4caf50;
  }

  .text-green-500 {
    color: black;
  }

  .green-600 {
    background-color: #3d8b40;
  }

  .text-green-600 {
    color: white;
  }

  .green-700 {
    background-color: #2d682f;
  }

  .text-green-700 {
    color: white;
  }

  .green-800 {
    background-color: #1e441f;
  }

  .text-green-800 {
    color: white;
  }

  .green-900 {
    background-color: #0e210f;
  }

  .text-green-900 {
    color: white;
  }

  .teal-50 {
    background-color: #ecfcf7;
  }

  .text-teal-50 {
    color: black;
  }

  .teal-100 {
    background-color: #c0f5e5;
  }

  .text-teal-100 {
    color: black;
  }

  .teal-200 {
    background-color: #94eed3;
  }

  .text-teal-200 {
    color: black;
  }

  .teal-300 {
    background-color: #68e7c1;
  }

  .text-teal-300 {
    color: black;
  }

  .teal-400 {
    background-color: #3ce0af;
  }

  .text-teal-400 {
    color: black;
  }

  .teal-500 {
    background-color: #20c997;
  }

  .text-teal-500 {
    color: black;
  }

  .teal-600 {
    background-color: #199d76;
  }

  .text-teal-600 {
    color: white;
  }

  .teal-700 {
    background-color: #127155;
  }

  .text-teal-700 {
    color: white;
  }

  .teal-800 {
    background-color: #0b4534;
  }

  .text-teal-800 {
    color: white;
  }

  .teal-900 {
    background-color: #041913;
  }

  .text-teal-900 {
    color: white;
  }

  .cyan-50 {
    background-color: #f4def8;
  }

  .text-cyan-50 {
    color: black;
  }

  .cyan-100 {
    background-color: #e6b5ee;
  }

  .text-cyan-100 {
    color: black;
  }

  .cyan-200 {
    background-color: #d88be5;
  }

  .text-cyan-200 {
    color: black;
  }

  .cyan-300 {
    background-color: #ca61dc;
  }

  .text-cyan-300 {
    color: black;
  }

  .cyan-400 {
    background-color: #bc37d3;
  }

  .text-cyan-400 {
    color: black;
  }

  .cyan-500 {
    background-color: #9c27b0;
  }

  .text-cyan-500 {
    color: black;
  }

  .cyan-600 {
    background-color: #771e86;
  }

  .text-cyan-600 {
    color: white;
  }

  .cyan-700 {
    background-color: #52145d;
  }

  .text-cyan-700 {
    color: white;
  }

  .cyan-800 {
    background-color: #2d0b33;
  }

  .text-cyan-800 {
    color: white;
  }

  .cyan-900 {
    background-color: #080209;
  }

  .text-cyan-900 {
    color: white;
  }

  .white-50 {
    background-color: white;
  }

  .text-white-50 {
    color: black;
  }

  .white-100 {
    background-color: white;
  }

  .text-white-100 {
    color: black;
  }

  .white-200 {
    background-color: white;
  }

  .text-white-200 {
    color: black;
  }

  .white-300 {
    background-color: white;
  }

  .text-white-300 {
    color: black;
  }

  .white-400 {
    background-color: white;
  }

  .text-white-400 {
    color: black;
  }

  .white-500 {
    background-color: #fff;
  }

  .text-white-500 {
    color: black;
  }

  .white-600 {
    background-color: #e6e6e6;
  }

  .text-white-600 {
    color: black;
  }

  .white-700 {
    background-color: #cccccc;
  }

  .text-white-700 {
    color: black;
  }

  .white-800 {
    background-color: #b3b3b3;
  }

  .text-white-800 {
    color: black;
  }

  .white-900 {
    background-color: #999999;
  }

  .text-white-900 {
    color: black;
  }

  .gray-50 {
    background-color: #f0eef1;
  }

  .text-gray-50 {
    color: black;
  }

  .gray-100 {
    background-color: #d6d2da;
  }

  .text-gray-100 {
    color: black;
  }

  .gray-200 {
    background-color: #bdb6c3;
  }

  .text-gray-200 {
    color: black;
  }

  .gray-300 {
    background-color: #a39aac;
  }

  .text-gray-300 {
    color: black;
  }

  .gray-400 {
    background-color: #8a7e95;
  }

  .text-gray-400 {
    color: black;
  }

  .gray-500 {
    background-color: #70657b;
  }

  .text-gray-500 {
    color: black;
  }

  .gray-600 {
    background-color: #574e5f;
  }

  .text-gray-600 {
    color: white;
  }

  .gray-700 {
    background-color: #3d3743;
  }

  .text-gray-700 {
    color: white;
  }

  .gray-800 {
    background-color: #242027;
  }

  .text-gray-800 {
    color: white;
  }

  .gray-900 {
    background-color: #0a090b;
  }

  .text-gray-900 {
    color: white;
  }

  .gray-dark-50 {
    background-color: #d1cdd6;
  }

  .text-gray-dark-50 {
    color: black;
  }

  .gray-dark-100 {
    background-color: #b8b0bf;
  }

  .text-gray-dark-100 {
    color: black;
  }

  .gray-dark-200 {
    background-color: #9e94a8;
  }

  .text-gray-dark-200 {
    color: black;
  }

  .gray-dark-300 {
    background-color: #857891;
  }

  .text-gray-dark-300 {
    color: black;
  }

  .gray-dark-400 {
    background-color: #6b6076;
  }

  .text-gray-dark-400 {
    color: black;
  }

  .gray-dark-500 {
    background-color: #52495a;
  }

  .text-gray-dark-500 {
    color: white;
  }

  .gray-dark-600 {
    background-color: #38323e;
  }

  .text-gray-dark-600 {
    color: white;
  }

  .gray-dark-700 {
    background-color: #1f1c22;
  }

  .text-gray-dark-700 {
    color: white;
  }

  .gray-dark-800 {
    background-color: #050506;
  }

  .text-gray-dark-800 {
    color: white;
  }

  .gray-dark-900 {
    background-color: black;
  }

  .text-gray-dark-900 {
    color: white;
  }

  .purple-50 {
    background-color: #e6d9f2;
  }

  .text-purple-50 {
    color: black;
  }

  .purple-100 {
    background-color: #ccb3e6;
  }

  .text-purple-100 {
    color: black;
  }

  .purple-200 {
    background-color: #b38cd9;
  }

  .text-purple-200 {
    color: black;
  }

  .purple-300 {
    background-color: #9966cc;
  }

  .text-purple-300 {
    color: black;
  }

  .purple-400 {
    background-color: #8040bf;
  }

  .text-purple-400 {
    color: black;
  }

  .purple-500 {
    background-color: #663399;
  }

  .text-purple-500 {
    color: white;
  }

  .purple-600 {
    background-color: #4d2673;
  }

  .text-purple-600 {
    color: white;
  }

  .purple-700 {
    background-color: #331a4d;
  }

  .text-purple-700 {
    color: white;
  }

  .purple-800 {
    background-color: #1a0d26;
  }

  .text-purple-800 {
    color: white;
  }

  .purple-900 {
    background-color: black;
  }

  .text-purple-900 {
    color: white;
  }

  .pink-50 {
    background-color: #fefcfd;
  }

  .text-pink-50 {
    color: black;
  }

  .pink-100 {
    background-color: #f4d3de;
  }

  .text-pink-100 {
    color: black;
  }

  .pink-200 {
    background-color: #eba9c0;
  }

  .text-pink-200 {
    color: black;
  }

  .pink-300 {
    background-color: #e180a2;
  }

  .text-pink-300 {
    color: black;
  }

  .pink-400 {
    background-color: #d75784;
  }

  .text-pink-400 {
    color: black;
  }

  .pink-500 {
    background-color: #cb3066;
  }

  .text-pink-500 {
    color: black;
  }

  .pink-600 {
    background-color: #a22651;
  }

  .text-pink-600 {
    color: white;
  }

  .pink-700 {
    background-color: #791c3d;
  }

  .text-pink-700 {
    color: white;
  }

  .pink-800 {
    background-color: #4f1328;
  }

  .text-pink-800 {
    color: white;
  }

  .pink-900 {
    background-color: #260913;
  }

  .text-pink-900 {
    color: white;
  }

  .red-50 {
    background-color: white;
  }

  .text-red-50 {
    color: black;
  }

  .red-100 {
    background-color: #fff8f7;
  }

  .text-red-100 {
    color: black;
  }

  .red-200 {
    background-color: #fccbc7;
  }

  .text-red-200 {
    color: black;
  }

  .red-300 {
    background-color: #f99d97;
  }

  .text-red-300 {
    color: black;
  }

  .red-400 {
    background-color: #f77066;
  }

  .text-red-400 {
    color: black;
  }

  .red-500 {
    background-color: #f44336;
  }

  .text-red-500 {
    color: black;
  }

  .red-600 {
    background-color: #ea1c0d;
  }

  .text-red-600 {
    color: black;
  }

  .red-700 {
    background-color: #ba160a;
  }

  .text-red-700 {
    color: white;
  }

  .red-800 {
    background-color: #891008;
  }

  .text-red-800 {
    color: white;
  }

  .red-900 {
    background-color: #590b05;
  }

  .text-red-900 {
    color: white;
  }

  .orange-50 {
    background-color: white;
  }

  .text-orange-50 {
    color: black;
  }

  .orange-100 {
    background-color: #fcebdc;
  }

  .text-orange-100 {
    color: black;
  }

  .orange-200 {
    background-color: #f7cfae;
  }

  .text-orange-200 {
    color: black;
  }

  .orange-300 {
    background-color: #f2b480;
  }

  .text-orange-300 {
    color: black;
  }

  .orange-400 {
    background-color: #ee9851;
  }

  .text-orange-400 {
    color: black;
  }

  .orange-500 {
    background-color: #e97d23;
  }

  .text-orange-500 {
    color: black;
  }

  .orange-600 {
    background-color: #c56414;
  }

  .text-orange-600 {
    color: black;
  }

  .orange-700 {
    background-color: #974d0f;
  }

  .text-orange-700 {
    color: white;
  }

  .orange-800 {
    background-color: #69350a;
  }

  .text-orange-800 {
    color: white;
  }

  .orange-900 {
    background-color: #3a1e06;
  }

  .text-orange-900 {
    color: white;
  }

  .yellow-50 {
    background-color: white;
  }

  .text-yellow-50 {
    color: black;
  }

  .yellow-100 {
    background-color: #fff4d3;
  }

  .text-yellow-100 {
    color: black;
  }

  .yellow-200 {
    background-color: #ffe7a0;
  }

  .text-yellow-200 {
    color: black;
  }

  .yellow-300 {
    background-color: #ffdb6d;
  }

  .text-yellow-300 {
    color: black;
  }

  .yellow-400 {
    background-color: #ffce3a;
  }

  .text-yellow-400 {
    color: black;
  }

  .yellow-500 {
    background-color: #ffc107;
  }

  .text-yellow-500 {
    color: black;
  }

  .yellow-600 {
    background-color: #d39e00;
  }

  .text-yellow-600 {
    color: black;
  }

  .yellow-700 {
    background-color: #a07800;
  }

  .text-yellow-700 {
    color: white;
  }

  .yellow-800 {
    background-color: #6d5200;
  }

  .text-yellow-800 {
    color: white;
  }

  .yellow-900 {
    background-color: #3a2c00;
  }

  .text-yellow-900 {
    color: white;
  }

  .green-50 {
    background-color: #fcfefc;
  }

  .text-green-50 {
    color: black;
  }

  .green-100 {
    background-color: #d9eeda;
  }

  .text-green-100 {
    color: black;
  }

  .green-200 {
    background-color: #b5dfb7;
  }

  .text-green-200 {
    color: black;
  }

  .green-300 {
    background-color: #92cf94;
  }

  .text-green-300 {
    color: black;
  }

  .green-400 {
    background-color: #6ec071;
  }

  .text-green-400 {
    color: black;
  }

  .green-500 {
    background-color: #4caf50;
  }

  .text-green-500 {
    color: black;
  }

  .green-600 {
    background-color: #3d8b40;
  }

  .text-green-600 {
    color: white;
  }

  .green-700 {
    background-color: #2d682f;
  }

  .text-green-700 {
    color: white;
  }

  .green-800 {
    background-color: #1e441f;
  }

  .text-green-800 {
    color: white;
  }

  .green-900 {
    background-color: #0e210f;
  }

  .text-green-900 {
    color: white;
  }

  .teal-50 {
    background-color: #ecfcf7;
  }

  .text-teal-50 {
    color: black;
  }

  .teal-100 {
    background-color: #c0f5e5;
  }

  .text-teal-100 {
    color: black;
  }

  .teal-200 {
    background-color: #94eed3;
  }

  .text-teal-200 {
    color: black;
  }

  .teal-300 {
    background-color: #68e7c1;
  }

  .text-teal-300 {
    color: black;
  }

  .teal-400 {
    background-color: #3ce0af;
  }

  .text-teal-400 {
    color: black;
  }

  .teal-500 {
    background-color: #20c997;
  }

  .text-teal-500 {
    color: black;
  }

  .teal-600 {
    background-color: #199d76;
  }

  .text-teal-600 {
    color: white;
  }

  .teal-700 {
    background-color: #127155;
  }

  .text-teal-700 {
    color: white;
  }

  .teal-800 {
    background-color: #0b4534;
  }

  .text-teal-800 {
    color: white;
  }

  .teal-900 {
    background-color: #041913;
  }

  .text-teal-900 {
    color: white;
  }

  .cyan-50 {
    background-color: #f4def8;
  }

  .text-cyan-50 {
    color: black;
  }

  .cyan-100 {
    background-color: #e6b5ee;
  }

  .text-cyan-100 {
    color: black;
  }

  .cyan-200 {
    background-color: #d88be5;
  }

  .text-cyan-200 {
    color: black;
  }

  .cyan-300 {
    background-color: #ca61dc;
  }

  .text-cyan-300 {
    color: black;
  }

  .cyan-400 {
    background-color: #bc37d3;
  }

  .text-cyan-400 {
    color: black;
  }

  .cyan-500 {
    background-color: #9c27b0;
  }

  .text-cyan-500 {
    color: black;
  }

  .cyan-600 {
    background-color: #771e86;
  }

  .text-cyan-600 {
    color: white;
  }

  .cyan-700 {
    background-color: #52145d;
  }

  .text-cyan-700 {
    color: white;
  }

  .cyan-800 {
    background-color: #2d0b33;
  }

  .text-cyan-800 {
    color: white;
  }

  .cyan-900 {
    background-color: #080209;
  }

  .text-cyan-900 {
    color: white;
  }

  .white-50 {
    background-color: white;
  }

  .text-white-50 {
    color: black;
  }

  .white-100 {
    background-color: white;
  }

  .text-white-100 {
    color: black;
  }

  .white-200 {
    background-color: white;
  }

  .text-white-200 {
    color: black;
  }

  .white-300 {
    background-color: white;
  }

  .text-white-300 {
    color: black;
  }

  .white-400 {
    background-color: white;
  }

  .text-white-400 {
    color: black;
  }

  .white-500 {
    background-color: #fff;
  }

  .text-white-500 {
    color: black;
  }

  .white-600 {
    background-color: #e6e6e6;
  }

  .text-white-600 {
    color: black;
  }

  .white-700 {
    background-color: #cccccc;
  }

  .text-white-700 {
    color: black;
  }

  .white-800 {
    background-color: #b3b3b3;
  }

  .text-white-800 {
    color: black;
  }

  .white-900 {
    background-color: #999999;
  }

  .text-white-900 {
    color: black;
  }

  .gray-50 {
    background-color: #f0eef1;
  }

  .text-gray-50 {
    color: black;
  }

  .gray-100 {
    background-color: #d6d2da;
  }

  .text-gray-100 {
    color: black;
  }

  .gray-200 {
    background-color: #bdb6c3;
  }

  .text-gray-200 {
    color: black;
  }

  .gray-300 {
    background-color: #a39aac;
  }

  .text-gray-300 {
    color: black;
  }

  .gray-400 {
    background-color: #8a7e95;
  }

  .text-gray-400 {
    color: black;
  }

  .gray-500 {
    background-color: #70657b;
  }

  .text-gray-500 {
    color: black;
  }

  .gray-600 {
    background-color: #574e5f;
  }

  .text-gray-600 {
    color: white;
  }

  .gray-700 {
    background-color: #3d3743;
  }

  .text-gray-700 {
    color: white;
  }

  .gray-800 {
    background-color: #242027;
  }

  .text-gray-800 {
    color: white;
  }

  .gray-900 {
    background-color: #0a090b;
  }

  .text-gray-900 {
    color: white;
  }

  @-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-moz-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-ms-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-o-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -moz-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      -o-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -moz-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      -o-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  @-webkit-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @-moz-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @-ms-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @-o-keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

  @-webkit-keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @-moz-keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @-ms-keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @-o-keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @keyframes jello {
    11.1% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      -moz-transform: skewX(-12.5deg) skewY(-12.5deg);
      -ms-transform: skewX(-12.5deg) skewY(-12.5deg);
      -o-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      -moz-transform: skewX(6.25deg) skewY(6.25deg);
      -ms-transform: skewX(6.25deg) skewY(6.25deg);
      -o-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      -moz-transform: skewX(-3.125deg) skewY(-3.125deg);
      -ms-transform: skewX(-3.125deg) skewY(-3.125deg);
      -o-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      -moz-transform: skewX(1.5625deg) skewY(1.5625deg);
      -ms-transform: skewX(1.5625deg) skewY(1.5625deg);
      -o-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -moz-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -ms-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      -o-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);
      -moz-transform: skewX(0.39062deg) skewY(0.39062deg);
      -ms-transform: skewX(0.39062deg) skewY(0.39062deg);
      -o-transform: skewX(0.39062deg) skewY(0.39062deg);
      transform: skewX(0.39062deg) skewY(0.39062deg);
    }
    88.8% {
      -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -moz-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -ms-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      -o-transform: skewX(-0.19531deg) skewY(-0.19531deg);
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
    100% {
      -webkit-transform: none;
      -moz-transform: none;
      -ms-transform: none;
      -o-transform: none;
      transform: none;
    }
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @-moz-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @-ms-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @-o-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @-webkit-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @-moz-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @-ms-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @-o-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      -moz-transform: scale3d(1.25, 0.75, 1);
      -ms-transform: scale3d(1.25, 0.75, 1);
      -o-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      -moz-transform: scale3d(0.75, 1.25, 1);
      -ms-transform: scale3d(0.75, 1.25, 1);
      -o-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      -moz-transform: scale3d(1.15, 0.85, 1);
      -ms-transform: scale3d(1.15, 0.85, 1);
      -o-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      -moz-transform: scale3d(0.95, 1.05, 1);
      -ms-transform: scale3d(0.95, 1.05, 1);
      -o-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      -moz-transform: scale3d(1.05, 0.95, 1);
      -ms-transform: scale3d(1.05, 0.95, 1);
      -o-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -ms-transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @-webkit-keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @-moz-keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @-ms-keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @-o-keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @keyframes shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: translateX(-10px);
      -moz-transform: translateX(-10px);
      -ms-transform: translateX(-10px);
      -o-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60%,
    80% {
      -webkit-transform: translateX(10px);
      -moz-transform: translateX(10px);
      -ms-transform: translateX(10px);
      -o-transform: translateX(10px);
      transform: translateX(10px);
    }
  }

  @-webkit-keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-moz-keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-ms-keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-o-keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes swing {
    20%,
    40%,
    60%,
    80%,
    100% {
      -webkit-transform-origin: top center;
      -moz-transform-origin: top center;
      -ms-transform-origin: top center;
      -o-transform-origin: top center;
      transform-origin: top center;
    }
    20% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      -o-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-webkit-keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @-moz-keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @-ms-keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @-o-keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @keyframes tada {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    10%,
    20% {
      -webkit-transform: scale(0.9) rotate(-3deg);
      -moz-transform: scale(0.9) rotate(-3deg);
      -ms-transform: scale(0.9) rotate(-3deg);
      -o-transform: scale(0.9) rotate(-3deg);
      transform: scale(0.9) rotate(-3deg);
    }
    30%,
    50%,
    70%,
    90% {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      -o-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
    40%,
    60%,
    80% {
      -webkit-transform: scale(1.1) rotate(-3deg);
      -moz-transform: scale(1.1) rotate(-3deg);
      -ms-transform: scale(1.1) rotate(-3deg);
      -o-transform: scale(1.1) rotate(-3deg);
      transform: scale(1.1) rotate(-3deg);
    }
    100% {
      -webkit-transform: scale(1) rotate(0);
      -moz-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
    }
  }

  @-webkit-keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-moz-keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-ms-keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-o-keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @keyframes wobble {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
    15% {
      -webkit-transform: translateX(-25%) rotate(-5deg);
      -moz-transform: translateX(-25%) rotate(-5deg);
      -ms-transform: translateX(-25%) rotate(-5deg);
      -o-transform: translateX(-25%) rotate(-5deg);
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      -webkit-transform: translateX(20%) rotate(3deg);
      -moz-transform: translateX(20%) rotate(3deg);
      -ms-transform: translateX(20%) rotate(3deg);
      -o-transform: translateX(20%) rotate(3deg);
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      -webkit-transform: translateX(-15%) rotate(-3deg);
      -moz-transform: translateX(-15%) rotate(-3deg);
      -ms-transform: translateX(-15%) rotate(-3deg);
      -o-transform: translateX(-15%) rotate(-3deg);
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      -webkit-transform: translateX(10%) rotate(2deg);
      -moz-transform: translateX(10%) rotate(2deg);
      -ms-transform: translateX(10%) rotate(2deg);
      -o-transform: translateX(10%) rotate(2deg);
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      -webkit-transform: translateX(-5%) rotate(-1deg);
      -moz-transform: translateX(-5%) rotate(-1deg);
      -ms-transform: translateX(-5%) rotate(-1deg);
      -o-transform: translateX(-5%) rotate(-1deg);
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-ms-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @-moz-keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @-ms-keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @-o-keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  @-webkit-keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-moz-keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-ms-keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-o-keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @keyframes fadeOutDownBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-webkit-keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @-moz-keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @-ms-keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @-o-keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @keyframes fadeOutLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
  }

  @-webkit-keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-moz-keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-ms-keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-o-keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-webkit-keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @-moz-keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @-ms-keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @-o-keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @keyframes fadeOutRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  @-webkit-keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-moz-keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-ms-keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-o-keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @keyframes fadeOutRightBig {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-webkit-keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @-moz-keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @-ms-keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @-o-keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @keyframes fadeOutUp {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
      -moz-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }

  @-webkit-keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-moz-keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-ms-keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-o-keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @keyframes fadeOutUpBig {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-webkit-keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes slideInDown {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-moz-keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-ms-keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-o-keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes slideInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-moz-keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-ms-keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-o-keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(2000px);
      -moz-transform: translateY(2000px);
      -ms-transform: translateY(2000px);
      -o-transform: translateY(2000px);
      transform: translateY(2000px);
    }
  }

  @-webkit-keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-moz-keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-ms-keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-o-keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-2000px);
      -moz-transform: translateX(-2000px);
      -ms-transform: translateX(-2000px);
      -o-transform: translateX(-2000px);
      transform: translateX(-2000px);
    }
  }

  @-webkit-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-moz-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-ms-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-o-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(2000px);
      -moz-transform: translateX(2000px);
      -ms-transform: translateX(2000px);
      -o-transform: translateX(2000px);
      transform: translateX(2000px);
    }
  }

  @-webkit-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-moz-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-ms-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-o-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(-2000px);
      -moz-transform: translateY(-2000px);
      -ms-transform: translateY(-2000px);
      -o-transform: translateY(-2000px);
      transform: translateY(-2000px);
    }
  }

  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @-moz-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @-ms-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @-o-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @-webkit-keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @-moz-keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @-ms-keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @-o-keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @keyframes zoomInDown {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
  }

  @-webkit-keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @-moz-keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @-ms-keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @-o-keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @keyframes zoomInLeft {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    }
  }

  @-webkit-keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @-moz-keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @-ms-keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @-o-keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @keyframes zoomInRight {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    }
  }

  @-webkit-keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @-moz-keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @-ms-keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @-o-keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @keyframes zoomInUp {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
  }

  @-webkit-keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @-ms-keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      -moz-transform: scale3d(0.3, 0.3, 0.3);
      -ms-transform: scale3d(0.3, 0.3, 0.3);
      -o-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-moz-keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-ms-keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-o-keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @keyframes zoomOutDown {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-webkit-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @-moz-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @-ms-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @-o-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(-2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -ms-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @-webkit-keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @-moz-keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @-ms-keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @-o-keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
      -moz-transform: scale(0.1) translate3d(2000px, 0, 0);
      -ms-transform: scale(0.1) translate3d(2000px, 0, 0);
      -o-transform: scale(0.1) translate3d(2000px, 0, 0);
      transform: scale(0.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -ms-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @-webkit-keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-moz-keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-ms-keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @-o-keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @keyframes zoomOutUp {
    40% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -moz-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -ms-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      -o-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -moz-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -ms-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -o-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      -moz-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      -o-transform-origin: center bottom;
      transform-origin: center bottom;
    }
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .spin {
    animation: spin 2s infinite linear;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .card-title,
  .text-title {
    color: #332e38;
  }

  .text-10 {
    font-size: 10px;
  }

  .text-11 {
    font-size: 11px;
  }

  .text-12 {
    font-size: 12px;
  }

  .text-13 {
    font-size: 13px;
  }

  .text-14 {
    font-size: 14px;
  }

  .text-15 {
    font-size: 15px;
  }

  .text-16 {
    font-size: 16px;
  }

  .text-17 {
    font-size: 17px;
  }

  .text-18 {
    font-size: 18px;
  }

  .text-19 {
    font-size: 19px;
  }

  .text-20 {
    font-size: 20px;
  }

  .text-21 {
    font-size: 21px;
  }

  .text-22 {
    font-size: 22px;
  }

  .text-23 {
    font-size: 23px;
  }

  .text-24 {
    font-size: 24px;
  }

  .text-25 {
    font-size: 25px;
  }

  .text-26 {
    font-size: 26px;
  }

  .text-27 {
    font-size: 27px;
  }

  .text-28 {
    font-size: 28px;
  }

  .text-29 {
    font-size: 29px;
  }

  .text-30 {
    font-size: 30px;
  }

  .text-31 {
    font-size: 31px;
  }

  .text-32 {
    font-size: 32px;
  }

  .text-33 {
    font-size: 33px;
  }

  .text-34 {
    font-size: 34px;
  }

  .text-35 {
    font-size: 35px;
  }

  .text-36 {
    font-size: 36px;
  }

  .text-37 {
    font-size: 37px;
  }

  .text-38 {
    font-size: 38px;
  }

  .text-39 {
    font-size: 39px;
  }

  .text-40 {
    font-size: 40px;
  }

  .text-41 {
    font-size: 41px;
  }

  .text-42 {
    font-size: 42px;
  }

  .text-43 {
    font-size: 43px;
  }

  .text-44 {
    font-size: 44px;
  }

  .text-45 {
    font-size: 45px;
  }

  .text-46 {
    font-size: 46px;
  }

  .text-47 {
    font-size: 47px;
  }

  .text-48 {
    font-size: 48px;
  }

  .text-49 {
    font-size: 49px;
  }

  .text-50 {
    font-size: 50px;
  }

  .text-51 {
    font-size: 51px;
  }

  .text-52 {
    font-size: 52px;
  }

  .text-53 {
    font-size: 53px;
  }

  .text-54 {
    font-size: 54px;
  }

  .text-55 {
    font-size: 55px;
  }

  .text-56 {
    font-size: 56px;
  }

  .text-57 {
    font-size: 57px;
  }

  .text-58 {
    font-size: 58px;
  }

  .text-59 {
    font-size: 59px;
  }

  .text-60 {
    font-size: 60px;
  }

  .text-61 {
    font-size: 61px;
  }

  .text-62 {
    font-size: 62px;
  }

  .text-63 {
    font-size: 63px;
  }

  .text-64 {
    font-size: 64px;
  }

  .text-65 {
    font-size: 65px;
  }

  .text-66 {
    font-size: 66px;
  }

  .text-67 {
    font-size: 67px;
  }

  .text-68 {
    font-size: 68px;
  }

  .text-69 {
    font-size: 69px;
  }

  .text-70 {
    font-size: 70px;
  }

  .text-71 {
    font-size: 71px;
  }

  .text-72 {
    font-size: 72px;
  }

  .text-73 {
    font-size: 73px;
  }

  .text-74 {
    font-size: 74px;
  }

  .text-75 {
    font-size: 75px;
  }

  .text-76 {
    font-size: 76px;
  }

  .text-77 {
    font-size: 77px;
  }

  .text-78 {
    font-size: 78px;
  }

  .font-weight-300 {
    font-weight: 300;
  }

  .font-weight-301 {
    font-weight: 301;
  }

  .font-weight-302 {
    font-weight: 302;
  }

  .font-weight-303 {
    font-weight: 303;
  }

  .font-weight-304 {
    font-weight: 304;
  }

  .font-weight-305 {
    font-weight: 305;
  }

  .font-weight-306 {
    font-weight: 306;
  }

  .font-weight-307 {
    font-weight: 307;
  }

  .font-weight-308 {
    font-weight: 308;
  }

  .font-weight-309 {
    font-weight: 309;
  }

  .font-weight-310 {
    font-weight: 310;
  }

  .font-weight-311 {
    font-weight: 311;
  }

  .font-weight-312 {
    font-weight: 312;
  }

  .font-weight-313 {
    font-weight: 313;
  }

  .font-weight-314 {
    font-weight: 314;
  }

  .font-weight-315 {
    font-weight: 315;
  }

  .font-weight-316 {
    font-weight: 316;
  }

  .font-weight-317 {
    font-weight: 317;
  }

  .font-weight-318 {
    font-weight: 318;
  }

  .font-weight-319 {
    font-weight: 319;
  }

  .font-weight-320 {
    font-weight: 320;
  }

  .font-weight-321 {
    font-weight: 321;
  }

  .font-weight-322 {
    font-weight: 322;
  }

  .font-weight-323 {
    font-weight: 323;
  }

  .font-weight-324 {
    font-weight: 324;
  }

  .font-weight-325 {
    font-weight: 325;
  }

  .font-weight-326 {
    font-weight: 326;
  }

  .font-weight-327 {
    font-weight: 327;
  }

  .font-weight-328 {
    font-weight: 328;
  }

  .font-weight-329 {
    font-weight: 329;
  }

  .font-weight-330 {
    font-weight: 330;
  }

  .font-weight-331 {
    font-weight: 331;
  }

  .font-weight-332 {
    font-weight: 332;
  }

  .font-weight-333 {
    font-weight: 333;
  }

  .font-weight-334 {
    font-weight: 334;
  }

  .font-weight-335 {
    font-weight: 335;
  }

  .font-weight-336 {
    font-weight: 336;
  }

  .font-weight-337 {
    font-weight: 337;
  }

  .font-weight-338 {
    font-weight: 338;
  }

  .font-weight-339 {
    font-weight: 339;
  }

  .font-weight-340 {
    font-weight: 340;
  }

  .font-weight-341 {
    font-weight: 341;
  }

  .font-weight-342 {
    font-weight: 342;
  }

  .font-weight-343 {
    font-weight: 343;
  }

  .font-weight-344 {
    font-weight: 344;
  }

  .font-weight-345 {
    font-weight: 345;
  }

  .font-weight-346 {
    font-weight: 346;
  }

  .font-weight-347 {
    font-weight: 347;
  }

  .font-weight-348 {
    font-weight: 348;
  }

  .font-weight-349 {
    font-weight: 349;
  }

  .font-weight-350 {
    font-weight: 350;
  }

  .font-weight-351 {
    font-weight: 351;
  }

  .font-weight-352 {
    font-weight: 352;
  }

  .font-weight-353 {
    font-weight: 353;
  }

  .font-weight-354 {
    font-weight: 354;
  }

  .font-weight-355 {
    font-weight: 355;
  }

  .font-weight-356 {
    font-weight: 356;
  }

  .font-weight-357 {
    font-weight: 357;
  }

  .font-weight-358 {
    font-weight: 358;
  }

  .font-weight-359 {
    font-weight: 359;
  }

  .font-weight-360 {
    font-weight: 360;
  }

  .font-weight-361 {
    font-weight: 361;
  }

  .font-weight-362 {
    font-weight: 362;
  }

  .font-weight-363 {
    font-weight: 363;
  }

  .font-weight-364 {
    font-weight: 364;
  }

  .font-weight-365 {
    font-weight: 365;
  }

  .font-weight-366 {
    font-weight: 366;
  }

  .font-weight-367 {
    font-weight: 367;
  }

  .font-weight-368 {
    font-weight: 368;
  }

  .font-weight-369 {
    font-weight: 369;
  }

  .font-weight-370 {
    font-weight: 370;
  }

  .font-weight-371 {
    font-weight: 371;
  }

  .font-weight-372 {
    font-weight: 372;
  }

  .font-weight-373 {
    font-weight: 373;
  }

  .font-weight-374 {
    font-weight: 374;
  }

  .font-weight-375 {
    font-weight: 375;
  }

  .font-weight-376 {
    font-weight: 376;
  }

  .font-weight-377 {
    font-weight: 377;
  }

  .font-weight-378 {
    font-weight: 378;
  }

  .font-weight-379 {
    font-weight: 379;
  }

  .font-weight-380 {
    font-weight: 380;
  }

  .font-weight-381 {
    font-weight: 381;
  }

  .font-weight-382 {
    font-weight: 382;
  }

  .font-weight-383 {
    font-weight: 383;
  }

  .font-weight-384 {
    font-weight: 384;
  }

  .font-weight-385 {
    font-weight: 385;
  }

  .font-weight-386 {
    font-weight: 386;
  }

  .font-weight-387 {
    font-weight: 387;
  }

  .font-weight-388 {
    font-weight: 388;
  }

  .font-weight-389 {
    font-weight: 389;
  }

  .font-weight-390 {
    font-weight: 390;
  }

  .font-weight-391 {
    font-weight: 391;
  }

  .font-weight-392 {
    font-weight: 392;
  }

  .font-weight-393 {
    font-weight: 393;
  }

  .font-weight-394 {
    font-weight: 394;
  }

  .font-weight-395 {
    font-weight: 395;
  }

  .font-weight-396 {
    font-weight: 396;
  }

  .font-weight-397 {
    font-weight: 397;
  }

  .font-weight-398 {
    font-weight: 398;
  }

  .font-weight-399 {
    font-weight: 399;
  }

  .font-weight-400 {
    font-weight: 400;
  }

  .font-weight-401 {
    font-weight: 401;
  }

  .font-weight-402 {
    font-weight: 402;
  }

  .font-weight-403 {
    font-weight: 403;
  }

  .font-weight-404 {
    font-weight: 404;
  }

  .font-weight-405 {
    font-weight: 405;
  }

  .font-weight-406 {
    font-weight: 406;
  }

  .font-weight-407 {
    font-weight: 407;
  }

  .font-weight-408 {
    font-weight: 408;
  }

  .font-weight-409 {
    font-weight: 409;
  }

  .font-weight-410 {
    font-weight: 410;
  }

  .font-weight-411 {
    font-weight: 411;
  }

  .font-weight-412 {
    font-weight: 412;
  }

  .font-weight-413 {
    font-weight: 413;
  }

  .font-weight-414 {
    font-weight: 414;
  }

  .font-weight-415 {
    font-weight: 415;
  }

  .font-weight-416 {
    font-weight: 416;
  }

  .font-weight-417 {
    font-weight: 417;
  }

  .font-weight-418 {
    font-weight: 418;
  }

  .font-weight-419 {
    font-weight: 419;
  }

  .font-weight-420 {
    font-weight: 420;
  }

  .font-weight-421 {
    font-weight: 421;
  }

  .font-weight-422 {
    font-weight: 422;
  }

  .font-weight-423 {
    font-weight: 423;
  }

  .font-weight-424 {
    font-weight: 424;
  }

  .font-weight-425 {
    font-weight: 425;
  }

  .font-weight-426 {
    font-weight: 426;
  }

  .font-weight-427 {
    font-weight: 427;
  }

  .font-weight-428 {
    font-weight: 428;
  }

  .font-weight-429 {
    font-weight: 429;
  }

  .font-weight-430 {
    font-weight: 430;
  }

  .font-weight-431 {
    font-weight: 431;
  }

  .font-weight-432 {
    font-weight: 432;
  }

  .font-weight-433 {
    font-weight: 433;
  }

  .font-weight-434 {
    font-weight: 434;
  }

  .font-weight-435 {
    font-weight: 435;
  }

  .font-weight-436 {
    font-weight: 436;
  }

  .font-weight-437 {
    font-weight: 437;
  }

  .font-weight-438 {
    font-weight: 438;
  }

  .font-weight-439 {
    font-weight: 439;
  }

  .font-weight-440 {
    font-weight: 440;
  }

  .font-weight-441 {
    font-weight: 441;
  }

  .font-weight-442 {
    font-weight: 442;
  }

  .font-weight-443 {
    font-weight: 443;
  }

  .font-weight-444 {
    font-weight: 444;
  }

  .font-weight-445 {
    font-weight: 445;
  }

  .font-weight-446 {
    font-weight: 446;
  }

  .font-weight-447 {
    font-weight: 447;
  }

  .font-weight-448 {
    font-weight: 448;
  }

  .font-weight-449 {
    font-weight: 449;
  }

  .font-weight-450 {
    font-weight: 450;
  }

  .font-weight-451 {
    font-weight: 451;
  }

  .font-weight-452 {
    font-weight: 452;
  }

  .font-weight-453 {
    font-weight: 453;
  }

  .font-weight-454 {
    font-weight: 454;
  }

  .font-weight-455 {
    font-weight: 455;
  }

  .font-weight-456 {
    font-weight: 456;
  }

  .font-weight-457 {
    font-weight: 457;
  }

  .font-weight-458 {
    font-weight: 458;
  }

  .font-weight-459 {
    font-weight: 459;
  }

  .font-weight-460 {
    font-weight: 460;
  }

  .font-weight-461 {
    font-weight: 461;
  }

  .font-weight-462 {
    font-weight: 462;
  }

  .font-weight-463 {
    font-weight: 463;
  }

  .font-weight-464 {
    font-weight: 464;
  }

  .font-weight-465 {
    font-weight: 465;
  }

  .font-weight-466 {
    font-weight: 466;
  }

  .font-weight-467 {
    font-weight: 467;
  }

  .font-weight-468 {
    font-weight: 468;
  }

  .font-weight-469 {
    font-weight: 469;
  }

  .font-weight-470 {
    font-weight: 470;
  }

  .font-weight-471 {
    font-weight: 471;
  }

  .font-weight-472 {
    font-weight: 472;
  }

  .font-weight-473 {
    font-weight: 473;
  }

  .font-weight-474 {
    font-weight: 474;
  }

  .font-weight-475 {
    font-weight: 475;
  }

  .font-weight-476 {
    font-weight: 476;
  }

  .font-weight-477 {
    font-weight: 477;
  }

  .font-weight-478 {
    font-weight: 478;
  }

  .font-weight-479 {
    font-weight: 479;
  }

  .font-weight-480 {
    font-weight: 480;
  }

  .font-weight-481 {
    font-weight: 481;
  }

  .font-weight-482 {
    font-weight: 482;
  }

  .font-weight-483 {
    font-weight: 483;
  }

  .font-weight-484 {
    font-weight: 484;
  }

  .font-weight-485 {
    font-weight: 485;
  }

  .font-weight-486 {
    font-weight: 486;
  }

  .font-weight-487 {
    font-weight: 487;
  }

  .font-weight-488 {
    font-weight: 488;
  }

  .font-weight-489 {
    font-weight: 489;
  }

  .font-weight-490 {
    font-weight: 490;
  }

  .font-weight-491 {
    font-weight: 491;
  }

  .font-weight-492 {
    font-weight: 492;
  }

  .font-weight-493 {
    font-weight: 493;
  }

  .font-weight-494 {
    font-weight: 494;
  }

  .font-weight-495 {
    font-weight: 495;
  }

  .font-weight-496 {
    font-weight: 496;
  }

  .font-weight-497 {
    font-weight: 497;
  }

  .font-weight-498 {
    font-weight: 498;
  }

  .font-weight-499 {
    font-weight: 499;
  }

  .font-weight-500 {
    font-weight: 500;
  }

  .font-weight-501 {
    font-weight: 501;
  }

  .font-weight-502 {
    font-weight: 502;
  }

  .font-weight-503 {
    font-weight: 503;
  }

  .font-weight-504 {
    font-weight: 504;
  }

  .font-weight-505 {
    font-weight: 505;
  }

  .font-weight-506 {
    font-weight: 506;
  }

  .font-weight-507 {
    font-weight: 507;
  }

  .font-weight-508 {
    font-weight: 508;
  }

  .font-weight-509 {
    font-weight: 509;
  }

  .font-weight-510 {
    font-weight: 510;
  }

  .font-weight-511 {
    font-weight: 511;
  }

  .font-weight-512 {
    font-weight: 512;
  }

  .font-weight-513 {
    font-weight: 513;
  }

  .font-weight-514 {
    font-weight: 514;
  }

  .font-weight-515 {
    font-weight: 515;
  }

  .font-weight-516 {
    font-weight: 516;
  }

  .font-weight-517 {
    font-weight: 517;
  }

  .font-weight-518 {
    font-weight: 518;
  }

  .font-weight-519 {
    font-weight: 519;
  }

  .font-weight-520 {
    font-weight: 520;
  }

  .font-weight-521 {
    font-weight: 521;
  }

  .font-weight-522 {
    font-weight: 522;
  }

  .font-weight-523 {
    font-weight: 523;
  }

  .font-weight-524 {
    font-weight: 524;
  }

  .font-weight-525 {
    font-weight: 525;
  }

  .font-weight-526 {
    font-weight: 526;
  }

  .font-weight-527 {
    font-weight: 527;
  }

  .font-weight-528 {
    font-weight: 528;
  }

  .font-weight-529 {
    font-weight: 529;
  }

  .font-weight-530 {
    font-weight: 530;
  }

  .font-weight-531 {
    font-weight: 531;
  }

  .font-weight-532 {
    font-weight: 532;
  }

  .font-weight-533 {
    font-weight: 533;
  }

  .font-weight-534 {
    font-weight: 534;
  }

  .font-weight-535 {
    font-weight: 535;
  }

  .font-weight-536 {
    font-weight: 536;
  }

  .font-weight-537 {
    font-weight: 537;
  }

  .font-weight-538 {
    font-weight: 538;
  }

  .font-weight-539 {
    font-weight: 539;
  }

  .font-weight-540 {
    font-weight: 540;
  }

  .font-weight-541 {
    font-weight: 541;
  }

  .font-weight-542 {
    font-weight: 542;
  }

  .font-weight-543 {
    font-weight: 543;
  }

  .font-weight-544 {
    font-weight: 544;
  }

  .font-weight-545 {
    font-weight: 545;
  }

  .font-weight-546 {
    font-weight: 546;
  }

  .font-weight-547 {
    font-weight: 547;
  }

  .font-weight-548 {
    font-weight: 548;
  }

  .font-weight-549 {
    font-weight: 549;
  }

  .font-weight-550 {
    font-weight: 550;
  }

  .font-weight-551 {
    font-weight: 551;
  }

  .font-weight-552 {
    font-weight: 552;
  }

  .font-weight-553 {
    font-weight: 553;
  }

  .font-weight-554 {
    font-weight: 554;
  }

  .font-weight-555 {
    font-weight: 555;
  }

  .font-weight-556 {
    font-weight: 556;
  }

  .font-weight-557 {
    font-weight: 557;
  }

  .font-weight-558 {
    font-weight: 558;
  }

  .font-weight-559 {
    font-weight: 559;
  }

  .font-weight-560 {
    font-weight: 560;
  }

  .font-weight-561 {
    font-weight: 561;
  }

  .font-weight-562 {
    font-weight: 562;
  }

  .font-weight-563 {
    font-weight: 563;
  }

  .font-weight-564 {
    font-weight: 564;
  }

  .font-weight-565 {
    font-weight: 565;
  }

  .font-weight-566 {
    font-weight: 566;
  }

  .font-weight-567 {
    font-weight: 567;
  }

  .font-weight-568 {
    font-weight: 568;
  }

  .font-weight-569 {
    font-weight: 569;
  }

  .font-weight-570 {
    font-weight: 570;
  }

  .font-weight-571 {
    font-weight: 571;
  }

  .font-weight-572 {
    font-weight: 572;
  }

  .font-weight-573 {
    font-weight: 573;
  }

  .font-weight-574 {
    font-weight: 574;
  }

  .font-weight-575 {
    font-weight: 575;
  }

  .font-weight-576 {
    font-weight: 576;
  }

  .font-weight-577 {
    font-weight: 577;
  }

  .font-weight-578 {
    font-weight: 578;
  }

  .font-weight-579 {
    font-weight: 579;
  }

  .font-weight-580 {
    font-weight: 580;
  }

  .font-weight-581 {
    font-weight: 581;
  }

  .font-weight-582 {
    font-weight: 582;
  }

  .font-weight-583 {
    font-weight: 583;
  }

  .font-weight-584 {
    font-weight: 584;
  }

  .font-weight-585 {
    font-weight: 585;
  }

  .font-weight-586 {
    font-weight: 586;
  }

  .font-weight-587 {
    font-weight: 587;
  }

  .font-weight-588 {
    font-weight: 588;
  }

  .font-weight-589 {
    font-weight: 589;
  }

  .font-weight-590 {
    font-weight: 590;
  }

  .font-weight-591 {
    font-weight: 591;
  }

  .font-weight-592 {
    font-weight: 592;
  }

  .font-weight-593 {
    font-weight: 593;
  }

  .font-weight-594 {
    font-weight: 594;
  }

  .font-weight-595 {
    font-weight: 595;
  }

  .font-weight-596 {
    font-weight: 596;
  }

  .font-weight-597 {
    font-weight: 597;
  }

  .font-weight-598 {
    font-weight: 598;
  }

  .font-weight-599 {
    font-weight: 599;
  }

  .font-weight-600 {
    font-weight: 600;
  }

  .font-weight-601 {
    font-weight: 601;
  }

  .font-weight-602 {
    font-weight: 602;
  }

  .font-weight-603 {
    font-weight: 603;
  }

  .font-weight-604 {
    font-weight: 604;
  }

  .font-weight-605 {
    font-weight: 605;
  }

  .font-weight-606 {
    font-weight: 606;
  }

  .font-weight-607 {
    font-weight: 607;
  }

  .font-weight-608 {
    font-weight: 608;
  }

  .font-weight-609 {
    font-weight: 609;
  }

  .font-weight-610 {
    font-weight: 610;
  }

  .font-weight-611 {
    font-weight: 611;
  }

  .font-weight-612 {
    font-weight: 612;
  }

  .font-weight-613 {
    font-weight: 613;
  }

  .font-weight-614 {
    font-weight: 614;
  }

  .font-weight-615 {
    font-weight: 615;
  }

  .font-weight-616 {
    font-weight: 616;
  }

  .font-weight-617 {
    font-weight: 617;
  }

  .font-weight-618 {
    font-weight: 618;
  }

  .font-weight-619 {
    font-weight: 619;
  }

  .font-weight-620 {
    font-weight: 620;
  }

  .font-weight-621 {
    font-weight: 621;
  }

  .font-weight-622 {
    font-weight: 622;
  }

  .font-weight-623 {
    font-weight: 623;
  }

  .font-weight-624 {
    font-weight: 624;
  }

  .font-weight-625 {
    font-weight: 625;
  }

  .font-weight-626 {
    font-weight: 626;
  }

  .font-weight-627 {
    font-weight: 627;
  }

  .font-weight-628 {
    font-weight: 628;
  }

  .font-weight-629 {
    font-weight: 629;
  }

  .font-weight-630 {
    font-weight: 630;
  }

  .font-weight-631 {
    font-weight: 631;
  }

  .font-weight-632 {
    font-weight: 632;
  }

  .font-weight-633 {
    font-weight: 633;
  }

  .font-weight-634 {
    font-weight: 634;
  }

  .font-weight-635 {
    font-weight: 635;
  }

  .font-weight-636 {
    font-weight: 636;
  }

  .font-weight-637 {
    font-weight: 637;
  }

  .font-weight-638 {
    font-weight: 638;
  }

  .font-weight-639 {
    font-weight: 639;
  }

  .font-weight-640 {
    font-weight: 640;
  }

  .font-weight-641 {
    font-weight: 641;
  }

  .font-weight-642 {
    font-weight: 642;
  }

  .font-weight-643 {
    font-weight: 643;
  }

  .font-weight-644 {
    font-weight: 644;
  }

  .font-weight-645 {
    font-weight: 645;
  }

  .font-weight-646 {
    font-weight: 646;
  }

  .font-weight-647 {
    font-weight: 647;
  }

  .font-weight-648 {
    font-weight: 648;
  }

  .font-weight-649 {
    font-weight: 649;
  }

  .font-weight-650 {
    font-weight: 650;
  }

  .font-weight-651 {
    font-weight: 651;
  }

  .font-weight-652 {
    font-weight: 652;
  }

  .font-weight-653 {
    font-weight: 653;
  }

  .font-weight-654 {
    font-weight: 654;
  }

  .font-weight-655 {
    font-weight: 655;
  }

  .font-weight-656 {
    font-weight: 656;
  }

  .font-weight-657 {
    font-weight: 657;
  }

  .font-weight-658 {
    font-weight: 658;
  }

  .font-weight-659 {
    font-weight: 659;
  }

  .font-weight-660 {
    font-weight: 660;
  }

  .font-weight-661 {
    font-weight: 661;
  }

  .font-weight-662 {
    font-weight: 662;
  }

  .font-weight-663 {
    font-weight: 663;
  }

  .font-weight-664 {
    font-weight: 664;
  }

  .font-weight-665 {
    font-weight: 665;
  }

  .font-weight-666 {
    font-weight: 666;
  }

  .font-weight-667 {
    font-weight: 667;
  }

  .font-weight-668 {
    font-weight: 668;
  }

  .font-weight-669 {
    font-weight: 669;
  }

  .font-weight-670 {
    font-weight: 670;
  }

  .font-weight-671 {
    font-weight: 671;
  }

  .font-weight-672 {
    font-weight: 672;
  }

  .font-weight-673 {
    font-weight: 673;
  }

  .font-weight-674 {
    font-weight: 674;
  }

  .font-weight-675 {
    font-weight: 675;
  }

  .font-weight-676 {
    font-weight: 676;
  }

  .font-weight-677 {
    font-weight: 677;
  }

  .font-weight-678 {
    font-weight: 678;
  }

  .font-weight-679 {
    font-weight: 679;
  }

  .font-weight-680 {
    font-weight: 680;
  }

  .font-weight-681 {
    font-weight: 681;
  }

  .font-weight-682 {
    font-weight: 682;
  }

  .font-weight-683 {
    font-weight: 683;
  }

  .font-weight-684 {
    font-weight: 684;
  }

  .font-weight-685 {
    font-weight: 685;
  }

  .font-weight-686 {
    font-weight: 686;
  }

  .font-weight-687 {
    font-weight: 687;
  }

  .font-weight-688 {
    font-weight: 688;
  }

  .font-weight-689 {
    font-weight: 689;
  }

  .font-weight-690 {
    font-weight: 690;
  }

  .font-weight-691 {
    font-weight: 691;
  }

  .font-weight-692 {
    font-weight: 692;
  }

  .font-weight-693 {
    font-weight: 693;
  }

  .font-weight-694 {
    font-weight: 694;
  }

  .font-weight-695 {
    font-weight: 695;
  }

  .font-weight-696 {
    font-weight: 696;
  }

  .font-weight-697 {
    font-weight: 697;
  }

  .font-weight-698 {
    font-weight: 698;
  }

  .font-weight-699 {
    font-weight: 699;
  }

  .font-weight-700 {
    font-weight: 700;
  }

  .font-weight-701 {
    font-weight: 701;
  }

  .font-weight-702 {
    font-weight: 702;
  }

  .font-weight-703 {
    font-weight: 703;
  }

  .font-weight-704 {
    font-weight: 704;
  }

  .font-weight-705 {
    font-weight: 705;
  }

  .font-weight-706 {
    font-weight: 706;
  }

  .font-weight-707 {
    font-weight: 707;
  }

  .font-weight-708 {
    font-weight: 708;
  }

  .font-weight-709 {
    font-weight: 709;
  }

  .font-weight-710 {
    font-weight: 710;
  }

  .font-weight-711 {
    font-weight: 711;
  }

  .font-weight-712 {
    font-weight: 712;
  }

  .font-weight-713 {
    font-weight: 713;
  }

  .font-weight-714 {
    font-weight: 714;
  }

  .font-weight-715 {
    font-weight: 715;
  }

  .font-weight-716 {
    font-weight: 716;
  }

  .font-weight-717 {
    font-weight: 717;
  }

  .font-weight-718 {
    font-weight: 718;
  }

  .font-weight-719 {
    font-weight: 719;
  }

  .font-weight-720 {
    font-weight: 720;
  }

  .font-weight-721 {
    font-weight: 721;
  }

  .font-weight-722 {
    font-weight: 722;
  }

  .font-weight-723 {
    font-weight: 723;
  }

  .font-weight-724 {
    font-weight: 724;
  }

  .font-weight-725 {
    font-weight: 725;
  }

  .font-weight-726 {
    font-weight: 726;
  }

  .font-weight-727 {
    font-weight: 727;
  }

  .font-weight-728 {
    font-weight: 728;
  }

  .font-weight-729 {
    font-weight: 729;
  }

  .font-weight-730 {
    font-weight: 730;
  }

  .font-weight-731 {
    font-weight: 731;
  }

  .font-weight-732 {
    font-weight: 732;
  }

  .font-weight-733 {
    font-weight: 733;
  }

  .font-weight-734 {
    font-weight: 734;
  }

  .font-weight-735 {
    font-weight: 735;
  }

  .font-weight-736 {
    font-weight: 736;
  }

  .font-weight-737 {
    font-weight: 737;
  }

  .font-weight-738 {
    font-weight: 738;
  }

  .font-weight-739 {
    font-weight: 739;
  }

  .font-weight-740 {
    font-weight: 740;
  }

  .font-weight-741 {
    font-weight: 741;
  }

  .font-weight-742 {
    font-weight: 742;
  }

  .font-weight-743 {
    font-weight: 743;
  }

  .font-weight-744 {
    font-weight: 744;
  }

  .font-weight-745 {
    font-weight: 745;
  }

  .font-weight-746 {
    font-weight: 746;
  }

  .font-weight-747 {
    font-weight: 747;
  }

  .font-weight-748 {
    font-weight: 748;
  }

  .font-weight-749 {
    font-weight: 749;
  }

  .font-weight-750 {
    font-weight: 750;
  }

  .font-weight-751 {
    font-weight: 751;
  }

  .font-weight-752 {
    font-weight: 752;
  }

  .font-weight-753 {
    font-weight: 753;
  }

  .font-weight-754 {
    font-weight: 754;
  }

  .font-weight-755 {
    font-weight: 755;
  }

  .font-weight-756 {
    font-weight: 756;
  }

  .font-weight-757 {
    font-weight: 757;
  }

  .font-weight-758 {
    font-weight: 758;
  }

  .font-weight-759 {
    font-weight: 759;
  }

  .font-weight-760 {
    font-weight: 760;
  }

  .font-weight-761 {
    font-weight: 761;
  }

  .font-weight-762 {
    font-weight: 762;
  }

  .font-weight-763 {
    font-weight: 763;
  }

  .font-weight-764 {
    font-weight: 764;
  }

  .font-weight-765 {
    font-weight: 765;
  }

  .font-weight-766 {
    font-weight: 766;
  }

  .font-weight-767 {
    font-weight: 767;
  }

  .font-weight-768 {
    font-weight: 768;
  }

  .font-weight-769 {
    font-weight: 769;
  }

  .font-weight-770 {
    font-weight: 770;
  }

  .font-weight-771 {
    font-weight: 771;
  }

  .font-weight-772 {
    font-weight: 772;
  }

  .font-weight-773 {
    font-weight: 773;
  }

  .font-weight-774 {
    font-weight: 774;
  }

  .font-weight-775 {
    font-weight: 775;
  }

  .font-weight-776 {
    font-weight: 776;
  }

  .font-weight-777 {
    font-weight: 777;
  }

  .font-weight-778 {
    font-weight: 778;
  }

  .font-weight-779 {
    font-weight: 779;
  }

  .font-weight-780 {
    font-weight: 780;
  }

  .font-weight-781 {
    font-weight: 781;
  }

  .font-weight-782 {
    font-weight: 782;
  }

  .font-weight-783 {
    font-weight: 783;
  }

  .font-weight-784 {
    font-weight: 784;
  }

  .font-weight-785 {
    font-weight: 785;
  }

  .font-weight-786 {
    font-weight: 786;
  }

  .font-weight-787 {
    font-weight: 787;
  }

  .font-weight-788 {
    font-weight: 788;
  }

  .font-weight-789 {
    font-weight: 789;
  }

  .font-weight-790 {
    font-weight: 790;
  }

  .font-weight-791 {
    font-weight: 791;
  }

  .font-weight-792 {
    font-weight: 792;
  }

  .font-weight-793 {
    font-weight: 793;
  }

  .font-weight-794 {
    font-weight: 794;
  }

  .font-weight-795 {
    font-weight: 795;
  }

  .font-weight-796 {
    font-weight: 796;
  }

  .font-weight-797 {
    font-weight: 797;
  }

  .font-weight-798 {
    font-weight: 798;
  }

  .font-weight-799 {
    font-weight: 799;
  }

  .font-weight-800 {
    font-weight: 800;
  }

  .font-weight-801 {
    font-weight: 801;
  }

  .font-weight-802 {
    font-weight: 802;
  }

  .font-weight-803 {
    font-weight: 803;
  }

  .font-weight-804 {
    font-weight: 804;
  }

  .font-weight-805 {
    font-weight: 805;
  }

  .font-weight-806 {
    font-weight: 806;
  }

  .font-weight-807 {
    font-weight: 807;
  }

  .font-weight-808 {
    font-weight: 808;
  }

  .font-weight-809 {
    font-weight: 809;
  }

  .font-weight-810 {
    font-weight: 810;
  }

  .font-weight-811 {
    font-weight: 811;
  }

  .font-weight-812 {
    font-weight: 812;
  }

  .font-weight-813 {
    font-weight: 813;
  }

  .font-weight-814 {
    font-weight: 814;
  }

  .font-weight-815 {
    font-weight: 815;
  }

  .font-weight-816 {
    font-weight: 816;
  }

  .font-weight-817 {
    font-weight: 817;
  }

  .font-weight-818 {
    font-weight: 818;
  }

  .font-weight-819 {
    font-weight: 819;
  }

  .font-weight-820 {
    font-weight: 820;
  }

  .font-weight-821 {
    font-weight: 821;
  }

  .font-weight-822 {
    font-weight: 822;
  }

  .font-weight-823 {
    font-weight: 823;
  }

  .font-weight-824 {
    font-weight: 824;
  }

  .font-weight-825 {
    font-weight: 825;
  }

  .font-weight-826 {
    font-weight: 826;
  }

  .font-weight-827 {
    font-weight: 827;
  }

  .font-weight-828 {
    font-weight: 828;
  }

  .font-weight-829 {
    font-weight: 829;
  }

  .font-weight-830 {
    font-weight: 830;
  }

  .font-weight-831 {
    font-weight: 831;
  }

  .font-weight-832 {
    font-weight: 832;
  }

  .font-weight-833 {
    font-weight: 833;
  }

  .font-weight-834 {
    font-weight: 834;
  }

  .font-weight-835 {
    font-weight: 835;
  }

  .font-weight-836 {
    font-weight: 836;
  }

  .font-weight-837 {
    font-weight: 837;
  }

  .font-weight-838 {
    font-weight: 838;
  }

  .font-weight-839 {
    font-weight: 839;
  }

  .font-weight-840 {
    font-weight: 840;
  }

  .font-weight-841 {
    font-weight: 841;
  }

  .font-weight-842 {
    font-weight: 842;
  }

  .font-weight-843 {
    font-weight: 843;
  }

  .font-weight-844 {
    font-weight: 844;
  }

  .font-weight-845 {
    font-weight: 845;
  }

  .font-weight-846 {
    font-weight: 846;
  }

  .font-weight-847 {
    font-weight: 847;
  }

  .font-weight-848 {
    font-weight: 848;
  }

  .font-weight-849 {
    font-weight: 849;
  }

  .font-weight-850 {
    font-weight: 850;
  }

  .font-weight-851 {
    font-weight: 851;
  }

  .font-weight-852 {
    font-weight: 852;
  }

  .font-weight-853 {
    font-weight: 853;
  }

  .font-weight-854 {
    font-weight: 854;
  }

  .font-weight-855 {
    font-weight: 855;
  }

  .font-weight-856 {
    font-weight: 856;
  }

  .font-weight-857 {
    font-weight: 857;
  }

  .font-weight-858 {
    font-weight: 858;
  }

  .font-weight-859 {
    font-weight: 859;
  }

  .font-weight-860 {
    font-weight: 860;
  }

  .font-weight-861 {
    font-weight: 861;
  }

  .font-weight-862 {
    font-weight: 862;
  }

  .font-weight-863 {
    font-weight: 863;
  }

  .font-weight-864 {
    font-weight: 864;
  }

  .font-weight-865 {
    font-weight: 865;
  }

  .font-weight-866 {
    font-weight: 866;
  }

  .font-weight-867 {
    font-weight: 867;
  }

  .font-weight-868 {
    font-weight: 868;
  }

  .font-weight-869 {
    font-weight: 869;
  }

  .font-weight-870 {
    font-weight: 870;
  }

  .font-weight-871 {
    font-weight: 871;
  }

  .font-weight-872 {
    font-weight: 872;
  }

  .font-weight-873 {
    font-weight: 873;
  }

  .font-weight-874 {
    font-weight: 874;
  }

  .font-weight-875 {
    font-weight: 875;
  }

  .font-weight-876 {
    font-weight: 876;
  }

  .font-weight-877 {
    font-weight: 877;
  }

  .font-weight-878 {
    font-weight: 878;
  }

  .font-weight-879 {
    font-weight: 879;
  }

  .font-weight-880 {
    font-weight: 880;
  }

  .font-weight-881 {
    font-weight: 881;
  }

  .font-weight-882 {
    font-weight: 882;
  }

  .font-weight-883 {
    font-weight: 883;
  }

  .font-weight-884 {
    font-weight: 884;
  }

  .font-weight-885 {
    font-weight: 885;
  }

  .font-weight-886 {
    font-weight: 886;
  }

  .font-weight-887 {
    font-weight: 887;
  }

  .font-weight-888 {
    font-weight: 888;
  }

  .font-weight-889 {
    font-weight: 889;
  }

  .font-weight-890 {
    font-weight: 890;
  }

  .font-weight-891 {
    font-weight: 891;
  }

  .font-weight-892 {
    font-weight: 892;
  }

  .font-weight-893 {
    font-weight: 893;
  }

  .font-weight-894 {
    font-weight: 894;
  }

  .font-weight-895 {
    font-weight: 895;
  }

  .font-weight-896 {
    font-weight: 896;
  }

  .font-weight-897 {
    font-weight: 897;
  }

  .font-weight-898 {
    font-weight: 898;
  }

  .font-weight-899 {
    font-weight: 899;
  }

  .font-weight-900 {
    font-weight: 900;
  }

  .pb-80 {
    padding-bottom: 80px;
  }

  .text-small {
    font-size: 0.75rem;
  }

  .p-readable {
    max-width: 650px;
  }

  .section-info {
    font-size: 14px;
    color: #bbb;
  }

  .heading {
    color: #595062;
    font-weight: 700;
  }

  .br {
    margin: 10px 0;
  }

  .text-mute {
    color: #bbb;
  }

  .display-content {
    margin: 20px 0;
  }

  .display-1 {
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-2 {
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .display-3 {
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .t-font-bold {
    font-weight: 500 !important;
  }

  .t-font-bolder {
    font-weight: 600 !important;
  }

  .t-font-boldest {
    font-weight: 700 !important;
  }

  .t-font-u {
    text-transform: uppercase;
  }

  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .blockquote-footer {
    display: block;
    font-size: 80%;
    color: #bbb;
  }

  a.typo_link {
    position: relative;
  }

  a.typo_link:hover {
    color: #3f51b5;
  }

  a.typo_link:hover:after {
    width: 100%;
  }

  a.typo_link:after {
    display: block;
    position: absolute;
    content: "";
    width: 0%;
    height: 1px;
    left: 0;
    bottom: -4px;
    transition: width 0.3s ease;
  }

  a.typo_link.text-primary:after {
    background-color: #663399;
  }

  a.typo_link.text-secondary:after {
    background-color: #52495a;
  }

  a.typo_link.text-success:after {
    background-color: #4caf50;
  }

  a.typo_link.text-info:after {
    background-color: #003473;
  }

  a.typo_link.text-warning:after {
    background-color: #ffc107;
  }

  a.typo_link.text-danger:after {
    background-color: #f44336;
  }

  a.typo_link.text-light:after {
    background-color: #bbb;
  }

  a.typo_link.text-dark:after {
    background-color: #47404f;
  }

  a.typo_link.text-gray-100:after {
    background-color: #f8f9fa;
  }

  a.typo_link.text-gray-200:after {
    background-color: #eee;
  }

  a.typo_link.text-gray-300:after {
    background-color: #dee2e6;
  }

  a.typo_link.text-gray-400:after {
    background-color: #ced4da;
  }

  a.typo_link.text-gray-500:after {
    background-color: #bbb;
  }

  a.typo_link.text-gray-600:after {
    background-color: #70657b;
  }

  a.typo_link.text-gray-700:after {
    background-color: #665c70;
  }

  a.typo_link.text-gray-800:after {
    background-color: #52495a;
  }

  a.typo_link.text-gray-900:after {
    background-color: #47404f;
  }

  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .divider > span:first-child {
    width: 100%;
    height: 1px;
    background: #eee;
    display: inline-block;
    flex: 1;
  }

  .divider > span:last-child {
    width: 100%;
    height: 1px;
    background: #eee;
    display: inline-block;
    flex: 1;
  }

  .divider > span:not(:first-child):not(:last-child) {
    padding: 0 2rem;
  }

  .box-shadow-1 {
    box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.04),
      0 1px 6px rgba(0, 0, 0, 0.04);
  }

  .box-shadow-2 {
    box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.24),
      0 1px 6px rgba(0, 0, 0, 0.04);
  }

  .layout-sidebar-compact .main-header {
    position: absolute !important;
    width: 100%;
    left: 0;
    box-shadow: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: transparent;
    z-index: 100;
    transition: all 0.24s ease-in-out;
  }
  .layout-sidebar-compact .main-header .logo {
    display: none;
  }

  .main-header {
    position: fixed;
    height: 80px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    z-index: 100;
  }
  .main-header .menu-toggle {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-right: 12px;
  }
  .main-header .menu-toggle div {
    width: 24px;
    height: 1px;
    background: #47404f;
    margin: 3px 0;
  }
  .main-header .search-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    background: #f8f9fa;
    border: 1px solid #eee;
    border-radius: 20px;
    position: relative;
    width: 230px;
    height: 40px;
  }
  .main-header .search-bar input {
    background: transparent;
    border: 0;
    color: #212121;
    font-size: 0.8rem;
    line-height: 2;
    height: 100%;
    outline: initial !important;
    padding: 0.5rem 1rem;
    width: calc(100% - 32px);
  }
  .main-header .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .main-header .logo {
    width: 76px;
  }
  .main-header .logo img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
  }
  .main-header .header-icon {
    font-size: 19px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    margin: 0 2px;
  }
  .main-header .header-icon:hover {
    background: #f8f9fa;
  }
  .main-header .header-icon.dropdown-toggle:after {
    display: none;
  }
  .main-header .header-part-right {
    display: flex;
    align-items: center;
  }
  .main-header .header-part-right .user {
    margin-right: 2rem;
  }
  .main-header .header-part-right .user img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .main-header .notification-dropdown {
    padding: 0;
    max-height: 260px;
    cursor: pointer;
  }
  .main-header .notification-dropdown .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0;
    height: 72px;
    border-bottom: 1px solid #dee2e6;
  }
  .main-header .notification-dropdown .dropdown-item .notification-icon {
    background: #eee;
    height: 100%;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-header .notification-dropdown .dropdown-item .notification-icon i {
    font-size: 18px;
  }
  .main-header .notification-dropdown .dropdown-item .notification-details {
    padding: 0.25rem 0.75rem;
  }
  .main-header .notification-dropdown .dropdown-item:active {
    color: inherit;
    background: inherit;
  }

  @media (max-width: 1024px) {
    .main-header .search-bar {
      width: 180px;
      display: none;
    }
    .main-header .menu-toggle {
      width: 24px;
      margin: 0 36px;
    }
    .main-header .header-part-right .user {
      margin-right: 1rem;
    }
  }

  @media (max-width: 767px) {
    .main-header .search-bar {
      display: none;
    }
    .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 576px) {
    .main-header {
      height: 70px;
      padding: 0 1.5rem;
    }
    .main-header .logo {
      width: 60px;
    }
    .main-header .menu-toggle {
      width: 24px !important;
      margin: 0 10px !important;
    }
    .main-header .header-part-right .user {
      margin-right: 0;
      padding-right: 0;
    }
    .notification-dropdown {
      left: -180px !important;
    }
  }

  @media (max-width: 360px) {
    .main-header .menu-toggle {
      margin: 0;
    }
  }

  .layout-sidebar-compact.app-admin-wrap {
    width: 100%;
  }

  .layout-sidebar-compact.sidenav-open .main-content-wrap {
    width: calc(100% - 76px - 220px);
  }

  .layout-sidebar-compact.sidenav-open .sidebar-left {
    left: 0;
  }

  .layout-sidebar-compact .main-content-wrap {
    width: 100%;
    float: right;
    margin-top: 0;
    transition: all 0.24s ease-in-out;
    padding: 0 2rem;
    position: relative;
    min-height: calc(100vh - 80px);
    background: #fff;
  }

  .layout-sidebar-compact .main-content {
    margin-top: 104px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 104px);
  }

  .layout-sidebar-compact .sidebar-left-secondary,
  .layout-sidebar-compact .sidebar-left {
    position: fixed;
    top: 0;
    height: 100vh;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
    z-index: 101;
  }

  .layout-sidebar-compact .sidebar-left {
    left: calc(-76px - 20px);
    transition: all 0.24s ease-in-out;
  }
  .layout-sidebar-compact .sidebar-left .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 68px;
    border-bottom: 1px solid rgba(248, 249, 250, 0.05);
  }
  .layout-sidebar-compact .sidebar-left .logo img {
    width: 40px;
  }
  .layout-sidebar-compact .sidebar-left .navigation-left {
    list-style: none;
    text-align: center;
    width: 76px;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item {
    position: relative;
    display: block;
    width: 100%;
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid rgba(248, 249, 250, 0.05);
  }
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item:focus,
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item:active {
    outline: none;
  }
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item.lvl1 {
    text-align: center;
  }
  .layout-sidebar-compact .sidebar-left .navigation-left .nav-item.active {
    color: #fff;
    border-left: 2px solid #fff;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold {
    width: 100%;
    padding: 22px 0;
    display: block;
    color: #ffffff;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold:focus,
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold:active {
    outline: none;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .nav-icon,
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .feather {
    font-size: 24px;
    height: 24px;
    width: 24px;
    display: block;
    margin: 0 auto;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .nav-text {
    display: none;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    a {
    color: #fff;
  }
  .layout-sidebar-compact
    .sidebar-left
    .navigation-left
    .nav-item.active
    .triangle {
    display: none;
  }

  .layout-sidebar-compact.sidenav-open .sidebar-left-secondary {
    left: 76px;
  }

  .layout-sidebar-compact .sidebar-left-secondary {
    left: calc(-220px - 20px);
    width: 220px;
    padding: 0.75rem 0;
    transition: all 0.24s ease-in-out;
    background: #fff;
  }
  .layout-sidebar-compact .sidebar-left-secondary .sidebar-close {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 18px;
    padding: 16px;
  }
  .layout-sidebar-compact .sidebar-left-secondary header {
    padding: 0px 24px;
  }
  .layout-sidebar-compact .sidebar-left-secondary header .logo {
    padding: 10px 0;
    margin-bottom: 14px;
  }
  .layout-sidebar-compact .sidebar-left-secondary header .logo img {
    width: auto;
    height: 24px;
  }
  .layout-sidebar-compact .sidebar-left-secondary header h6 {
    font-size: 18px;
    margin-bottom: 4px;
    font-weight: 600;
  }
  .layout-sidebar-compact .sidebar-left-secondary header p {
    color: #70657b;
    margin-bottom: 12px;
  }
  .layout-sidebar-compact .sidebar-left-secondary .submenu-area {
    display: none;
  }
  .layout-sidebar-compact .sidebar-left-secondary .childNav {
    list-style: none;
    padding: 0;
  }
  .layout-sidebar-compact .sidebar-left-secondary .childNav li.nav-item {
    display: block;
  }
  .layout-sidebar-compact .sidebar-left-secondary .childNav li.nav-item a {
    color: #332e38;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    padding: 12px 24px;
    transition: 0.15s all ease-in;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a:hover {
    background: #eee;
  }
  .layout-sidebar-compact .sidebar-left-secondary .childNav li.nav-item a.open {
    color: #663399;
    background: #eee;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    font-size: 18px;
    margin-right: 8px;
    vertical-align: middle;
    color: #70657b;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .item-name {
    vertical-align: middle;
    font-weight: 400;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: auto;
    font-size: 11px;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    .submenu {
    margin-left: 8px;
  }
  .layout-sidebar-compact .sidebar-left-secondary > .childNav {
    margin: 0;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item.open
    > div
    > a
    > .dd-arrow {
    transform: rotate(90deg);
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item.open
    > div
    > .childNav {
    max-height: 1000px;
    overflow: visible;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item
    > div
    > a
    > .dd-arrow {
    transition: all 0.4s ease-in-out;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item
    > div
    > .childNav {
    max-height: 0;
    overflow: hidden;
    background: #fff;
    transition: all 0.4s ease-in-out;
  }
  .layout-sidebar-compact
    .sidebar-left-secondary
    li.nav-item
    > div
    > .childNav
    li.nav-item
    a {
    padding: 12px 12px 12px 50px;
  }

  .layout-sidebar-compact .sidebar-overlay {
    display: none !important;
  }

  @media (max-width: 767px) {
    .layout-sidebar-compact.sidenav-open .main-content-wrap {
      width: 100%;
    }
    .layout-sidebar-compact .sidebar-left-secondary .sidebar-close {
      display: block;
    }
  }

  @media (max-width: 576px) {
    .main-content-wrap {
      padding: 1.5rem;
    }
    .main-content-wrap.sidenav-open {
      width: 100%;
    }
    .main-content-wrap {
      margin-top: 70px;
    }
    .sidebar-left-secondary,
    .sidebar-left {
      top: 70px;
      height: calc(100vh - 70px);
    }
    .sidebar-left {
      left: calc(-90px - 20px);
    }
    .sidebar-left .navigation-left {
      width: 90px;
    }
    .sidebar-left .navigation-left .nav-item.active .triangle {
      border-width: 0 0 24px 24px;
    }
    .sidebar-left .navigation-left .nav-item .nav-item-hold {
      padding: 16px 0;
    }
    .sidebar-left-secondary {
      left: calc(-190px - 20px);
      width: 190px;
    }
    .sidebar-left-secondary.open {
      left: 90px;
    }
    .sidebar-overlay {
      height: calc(100vh - 70px);
    }
  }

  [dir="rtl"] .layout-sidebar-compact .sidebar-left {
    left: auto !important;
    right: calc(-76px - 20px);
  }

  [dir="rtl"] .layout-sidebar-compact.sidenav-open .sidebar-left {
    left: auto !important;
    right: 0;
  }

  [dir="rtl"] .layout-sidebar-compact.sidenav-open .sidebar-left-secondary {
    right: 76px;
  }

  [dir="rtl"] .layout-sidebar-compact .sidebar-left-secondary {
    left: auto !important;
    right: calc(-220px - 20px);
  }
  [dir="rtl"] .layout-sidebar-compact .sidebar-left-secondary header {
    text-align: right;
  }
  [dir="rtl"]
    .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: unset !important;
    margin-right: auto;
  }
  [dir="rtl"]
    .layout-sidebar-compact
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    margin-left: 8px;
    margin-right: 0;
  }

  [dir="rtl"] .layout-sidebar-compact .main-content-wrap {
    float: left;
  }

  .layout-sidebar-large .main-header {
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    z-index: 100;
  }
  .layout-sidebar-large .main-header .menu-toggle {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-right: 12px;
  }
  .layout-sidebar-large .main-header .menu-toggle div {
    width: 24px;
    height: 1px;
    background: #47404f;
    margin: 3px 0;
  }
  .layout-sidebar-large .main-header .search-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    background: #f8f9fa;
    border: 1px solid #eee;
    border-radius: 20px;
    position: relative;
    width: 230px;
    height: 40px;
  }
  .layout-sidebar-large .main-header .search-bar input {
    background: transparent;
    border: 0;
    color: #212121;
    font-size: 0.8rem;
    line-height: 2;
    height: 100%;
    outline: initial !important;
    padding: 0.5rem 1rem;
    width: calc(100% - 32px);
  }
  .layout-sidebar-large .main-header .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .layout-sidebar-large .main-header .logo {
    width: 120px;
  }
  .layout-sidebar-large .main-header .logo img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
  }
  .layout-sidebar-large .main-header .header-icon {
    font-size: 19px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    margin: 0 2px;
  }
  .layout-sidebar-large .main-header .header-icon:hover {
    background: #f8f9fa;
  }
  .layout-sidebar-large .main-header .header-icon.dropdown-toggle:after {
    display: none;
  }
  .layout-sidebar-large .main-header .header-part-right {
    display: flex;
    align-items: center;
  }
  .layout-sidebar-large .main-header .header-part-right .user {
    margin-right: 2rem;
  }
  .layout-sidebar-large .main-header .header-part-right .user img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .layout-sidebar-large .main-header .notification-dropdown {
    padding: 0;
    max-height: 260px;
    cursor: pointer;
  }
  .layout-sidebar-large .main-header .notification-dropdown .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0;
    height: 72px;
    border-bottom: 1px solid #dee2e6;
  }
  .layout-sidebar-large
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-icon {
    background: #eee;
    height: 100%;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout-sidebar-large
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-icon
    i {
    font-size: 18px;
  }
  .layout-sidebar-large
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-details {
    padding: 0.25rem 0.75rem;
  }
  .layout-sidebar-large
    .main-header
    .notification-dropdown
    .dropdown-item:active {
    color: inherit;
    background: inherit;
  }

  @media (max-width: 991px) {
    .layout-sidebar-large .main-header .search-bar {
      width: 180px;
    }
    .layout-sidebar-large .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 767px) {
    .layout-sidebar-large .main-header .search-bar {
      display: none;
    }
    .layout-sidebar-large .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 576px) {
    .layout-sidebar-large .main-header {
      height: 70px;
      padding: 0 1.5rem;
    }
    .layout-sidebar-large .main-header .logo {
      width: 60px;
    }
    .layout-sidebar-large .main-header .search-bar {
      display: none;
    }
    .layout-sidebar-large .main-header .menu-toggle {
      width: 60px;
    }
    .layout-sidebar-large .main-header .header-part-right .user {
      margin-right: 0;
      padding-right: 0;
    }
    .layout-sidebar-large .notification-dropdown {
      left: -0px !important;
    }
  }

  @media (max-width: 360px) {
    .layout-sidebar-large .main-header .menu-toggle {
      margin: 0;
    }
  }

  .app-admin-wrap {
    width: 100%;
  }

  .main-content-wrap {
    width: 100%;
    float: right;
    margin-top: 80px;
    transition: all 0.24s ease-in-out;
    padding: 2rem 2rem 0;
    position: relative;
    min-height: calc(100vh - 80px);
    background: #fff;
  }
  .main-content-wrap.sidenav-open {
    width: calc(100% - 120px);
  }

  .layout-sidebar-large .sidebar-left-secondary,
  .layout-sidebar-large .sidebar-left {
    position: fixed;
    top: 80px;
    height: calc(100vh - 80px);
    background: #fff;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
  }

  .layout-sidebar-large .sidebar-left {
    left: calc(-120px - 20px);
    z-index: 90;
    transition: all 0.24s ease-in-out;
  }
  .layout-sidebar-large .sidebar-left.open {
    left: 0;
  }
  .layout-sidebar-large .sidebar-left .logo {
    display: none;
  }
  .layout-sidebar-large .sidebar-left .navigation-left {
    list-style: none;
    text-align: center;
    width: 120px;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item {
    position: relative;
    display: block;
    width: 100%;
    color: #332e38;
    cursor: pointer;
    border-bottom: 1px solid #dee2e6;
  }
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item:focus,
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item:active {
    outline: none;
  }
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item.lvl1 {
    text-align: center;
  }
  .layout-sidebar-large .sidebar-left .navigation-left .nav-item.active {
    color: #663399;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item.active
    .nav-item-hold {
    color: #663399;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold {
    display: block;
    width: 100%;
    padding: 26px 0;
    color: #47404f;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold:focus,
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold:active {
    outline: none;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .nav-icon,
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .feather {
    font-size: 32px;
    height: 32px;
    width: 32px;
    display: block;
    margin: 0 auto 6px;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    .nav-text {
    font-size: 13px;
    display: block;
    font-weight: 400;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .nav-item-hold
    a {
    color: #332e38;
  }
  .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item.active
    .triangle {
    position: absolute;
    width: 0;
    height: 0;
    right: 0;
    bottom: 0;
    border-style: solid;
    border-width: 0 0 30px 30px;
    border-color: transparent transparent #663399 transparent;
  }

  .layout-sidebar-large .sidebar-left-secondary {
    left: calc(-220px - 20px);
    z-index: 89;
    width: 220px;
    padding: 0.75rem 0;
    transition: all 0.24s ease-in-out;
    background: #fff;
  }
  .layout-sidebar-large .sidebar-left-secondary.open {
    left: 120px;
  }
  .layout-sidebar-large .sidebar-left-secondary header {
    display: none;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav {
    list-style: none;
    padding: 0;
    display: none;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav li.nav-item {
    display: block;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav li.nav-item a {
    color: #332e38;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    padding: 12px 24px;
    transition: 0.15s all ease-in;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav li.nav-item a:hover {
    background: #eee;
  }
  .layout-sidebar-large .sidebar-left-secondary .childNav li.nav-item a.open {
    color: #663399;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    font-size: 18px;
    margin-right: 8px;
    vertical-align: middle;
    color: #70657b;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .item-name {
    vertical-align: middle;
    font-weight: 400;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: auto;
    font-size: 11px;
    transition: all 0.3s ease-in;
  }
  .layout-sidebar-large .sidebar-left-secondary > .childNav {
    margin: 0;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    li.nav-item.open
    > div
    > a
    > .dd-arrow {
    transform: rotate(90deg);
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    li.nav-item.open
    > div
    > .childNav {
    max-height: 1000px;
    overflow: visible;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    li.nav-item
    > div
    > a
    > .dd-arrow {
    transition: all 0.4s ease-in-out;
  }
  .layout-sidebar-large .sidebar-left-secondary li.nav-item > div > .childNav {
    max-height: 0;
    overflow: hidden;
    background: #fff;
    transition: all 0.4s ease-in-out;
  }
  .layout-sidebar-large
    .sidebar-left-secondary
    li.nav-item
    > div
    > .childNav
    li.nav-item
    a {
    padding: 12px 12px 12px 50px;
  }

  .layout-sidebar-large .sidebar-overlay {
    display: none;
    position: fixed;
    width: calc(100% - 120px - 220px);
    height: calc(100vh - 80px);
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 101;
    cursor: w-resize;
  }
  .layout-sidebar-large .sidebar-overlay.open {
    display: block;
  }

  .module-loader {
    position: fixed;
    background: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
  }
  .module-loader .loader,
  .module-loader .spinner {
    position: fixed;
    top: 45%;
    left: calc(50% + 56px);
    z-index: inherit;
  }

  @media (max-width: 576px) {
    .main-content-wrap {
      padding: 1.5rem;
    }
    .main-content-wrap.sidenav-open {
      width: 100%;
    }
    .main-content-wrap {
      margin-top: 70px;
    }
    .sidebar-left-secondary,
    .sidebar-left {
      top: 70px !important;
      height: calc(100vh - 70px);
    }
    .sidebar-left {
      left: calc(-90px - 20px);
    }
    .sidebar-left .navigation-left {
      width: 90px;
    }
    .sidebar-left .navigation-left .nav-item.active .triangle {
      border-width: 0 0 24px 24px;
    }
    .sidebar-left .navigation-left .nav-item .nav-item-hold {
      padding: 16px 0;
    }
    .sidebar-left-secondary {
      left: calc(-190px - 20px);
      width: 190px;
    }
    .sidebar-left-secondary.open {
      left: 90px;
    }
    .sidebar-overlay {
      height: calc(100vh - 70px);
    }
  }

  [dir="rtl"] .layout-sidebar-large .sidebar-left {
    left: auto !important;
    right: calc(-120px - 20px);
  }
  [dir="rtl"] .layout-sidebar-large .sidebar-left.open {
    left: auto !important;
    right: 0;
  }
  [dir="rtl"]
    .layout-sidebar-large
    .sidebar-left
    .navigation-left
    .nav-item
    .triangle {
    transform: rotate(90deg);
    right: auto;
    left: 0;
  }

  [dir="rtl"] .layout-sidebar-large .sidebar-left-secondary {
    left: auto !important;
    right: calc(-220px - 20px);
  }
  [dir="rtl"] .layout-sidebar-large .sidebar-left-secondary.open {
    left: auto !important;
    right: 120px;
  }
  [dir="rtl"]
    .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: unset !important;
    margin-right: auto;
  }
  [dir="rtl"]
    .layout-sidebar-large
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    margin-left: 8px;
    margin-right: 0;
  }

  [dir="rtl"] .layout-sidebar-large .main-content-wrap {
    float: left;
  }

  [dir="rtl"] .layout-sidebar-large .sidebar-overlay {
    right: auto !important;
    left: 0;
    cursor: e-resize;
  }

  .layout-horizontal-bar .main-content-wrap {
    width: 100%;
    float: right;
    margin-top: 140px !important;
    transition: all 0.24s ease-in-out;
    padding: 2rem 2rem 0;
    position: relative;
    min-height: calc(100vh - 160px);
    background: #fff;
  }

  .layout-horizontal-bar .main-header {
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    z-index: 100;
  }
  .layout-horizontal-bar .main-header .menu-toggle {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-right: 12px;
    display: none;
  }
  .layout-horizontal-bar .main-header .menu-toggle div {
    width: 24px;
    height: 1px;
    background: #47404f;
    margin: 3px 0;
  }
  .layout-horizontal-bar .main-header .search-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    background: #f8f9fa;
    border: 1px solid #eee;
    border-radius: 20px;
    position: relative;
    width: 230px;
    height: 40px;
  }
  .layout-horizontal-bar .main-header .search-bar input {
    background: transparent;
    border: 0;
    color: #212121;
    font-size: 0.8rem;
    line-height: 2;
    height: 100%;
    outline: initial !important;
    padding: 0.5rem 1rem;
    width: calc(100% - 32px);
  }
  .layout-horizontal-bar .main-header .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .layout-horizontal-bar .main-header .logo {
    width: 120px;
  }
  .layout-horizontal-bar .main-header .logo img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
  }
  .layout-horizontal-bar .main-header .header-icon {
    font-size: 19px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    margin: 0 2px;
  }
  .layout-horizontal-bar .main-header .header-icon:hover {
    background: #f8f9fa;
  }
  .layout-horizontal-bar .main-header .header-icon.dropdown-toggle:after {
    display: none;
  }
  .layout-horizontal-bar .main-header .header-part-right {
    display: flex;
    align-items: center;
  }
  .layout-horizontal-bar .main-header .header-part-right .user {
    margin-right: 2rem;
  }
  .layout-horizontal-bar .main-header .header-part-right .user img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .layout-horizontal-bar .main-header .notification-dropdown {
    padding: 0;
    max-height: 260px;
    cursor: pointer;
  }
  .layout-horizontal-bar .main-header .notification-dropdown .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0;
    height: 72px;
    border-bottom: 1px solid #dee2e6;
  }
  .layout-horizontal-bar
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-icon {
    background: #eee;
    height: 100%;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout-horizontal-bar
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-icon
    i {
    font-size: 18px;
  }
  .layout-horizontal-bar
    .main-header
    .notification-dropdown
    .dropdown-item
    .notification-details {
    padding: 0.25rem 0.75rem;
  }
  .layout-horizontal-bar
    .main-header
    .notification-dropdown
    .dropdown-item:active {
    color: inherit;
    background: inherit;
  }

  @media (max-width: 991px) {
    .layout-horizontal-bar .main-header .search-bar {
      width: 180px;
    }
    .layout-horizontal-bar .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 767px) {
    .layout-horizontal-bar .main-header .search-bar {
      display: none;
    }
    .layout-horizontal-bar .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
      display: block;
    }
    .layout-horizontal-bar .main-content-wrap {
      width: 100%;
      float: right;
      margin-top: 80px !important;
      transition: all 0.24s ease-in-out;
      padding: 2rem 2rem 0;
      position: relative;
      min-height: calc(100vh - 160px);
      background: #fff;
    }
    .layout-horizontal-bar .header-topnav.open {
      left: 0px;
    }
  }

  @media (max-width: 576px) {
    .layout-horizontal-bar .main-header {
      height: 70px;
      padding: 0 1.5rem;
    }
    .layout-horizontal-bar .main-header .logo {
      width: 60px;
    }
    .layout-horizontal-bar .main-header .search-bar {
      display: none;
    }
    .layout-horizontal-bar .main-header .menu-toggle {
      width: 60px;
    }
    .layout-horizontal-bar .main-header .header-part-right .user {
      margin-right: 0;
      padding-right: 0;
    }
    .layout-horizontal-bar .notification-dropdown {
      left: -0px !important;
    }
  }

  @media (max-width: 360px) {
    .layout-horizontal-bar .main-header .menu-toggle {
      margin: 0;
    }
  }

  .app-admin-wrap {
    width: 100%;
  }

  .main-content-wrap {
    width: 100%;
    float: right;
    margin-top: 80px;
    transition: all 0.24s ease-in-out;
    padding: 2rem 2rem 0;
    position: relative;
    min-height: calc(100vh - 80px);
    background: #fff;
  }
  .main-content-wrap.sidenav-open {
    width: calc(100% - 120px);
  }

  .module-loader {
    position: fixed;
    background: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
  }
  .module-loader .loader,
  .module-loader .spinner {
    position: fixed;
    top: 45%;
    left: calc(50% + 56px);
    z-index: inherit;
  }

  @media (max-width: 576px) {
    .main-content-wrap {
      padding: 1.5rem;
    }
    .main-content-wrap.sidenav-open {
      width: 100%;
    }
    .main-content-wrap {
      margin-top: 70px;
    }
  }

  [dir="rtl"] .layout-horizontal-bar .sidebar-left {
    left: auto !important;
    right: calc(-120px - 20px);
  }
  [dir="rtl"] .layout-horizontal-bar .sidebar-left.open {
    left: auto !important;
    right: 0;
  }
  [dir="rtl"]
    .layout-horizontal-bar
    .sidebar-left
    .navigation-left
    .nav-item
    .triangle {
    transform: rotate(90deg);
    right: auto;
    left: 0;
  }

  [dir="rtl"] .layout-horizontal-bar .sidebar-left-secondary {
    left: auto !important;
    right: calc(-220px - 20px);
  }
  [dir="rtl"] .layout-horizontal-bar .sidebar-left-secondary.open {
    left: auto !important;
    right: 120px;
  }
  [dir="rtl"]
    .layout-horizontal-bar
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .dd-arrow {
    margin-left: unset !important;
    margin-right: auto;
  }
  [dir="rtl"]
    .layout-horizontal-bar
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a
    .nav-icon {
    margin-left: 8px;
    margin-right: 0;
  }

  [dir="rtl"] .layout-horizontal-bar .main-content-wrap {
    float: left;
  }

  [dir="rtl"] .layout-horizontal-bar .sidebar-overlay {
    right: auto !important;
    left: 0;
    cursor: e-resize;
  }

  .app-footer {
    margin-top: 2rem;
    background: #f8f9fa;
    padding: 1.25rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .app-footer .footer-bottom {
    width: 100%;
  }
  .app-footer .footer-bottom .logo {
    width: 3rem;
    height: auto;
    margin: 4px;
  }

  .layout-sidebar-vertical .main-content-wrap {
    width: 100%;
    min-height: 100vh;
    float: right;
  }
  .layout-sidebar-vertical .main-content-wrap .main-header {
    border-radius: 5px;
    height: 64px;
  }
  .layout-sidebar-vertical .main-content-wrap .main-header .header-toggle {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-toggle
    .sidebar-full-toggle,
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-toggle
    .sidebar-compact-toggle {
    vertical-align: middle;
    padding: 0;
    min-width: 0;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background: none;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-toggle
    .sidebar-full-toggle
    i,
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-toggle
    .sidebar-compact-toggle
    i {
    background-repeat: no-repeat;
    display: inline-block;
    height: 24px;
    width: 24px;
  }
  .layout-sidebar-vertical .main-content-wrap .main-header .search-bar {
    height: 38px;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form {
    position: relative;
    background: #fff;
    border-radius: 40px;
    display: block;
    max-width: 220px;
    margin: 0;
    box-shadow: inset 0 0 2px 2px rgba(136, 136, 136, 0.2);
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 100%;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form
    .bmd-form-group {
    padding: 0;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form
    i {
    padding-left: 8px;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form
    input {
    border: none;
    padding: 0 8px;
    background: transparent;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .search-bar
    .top-search-form
    input:focus {
    outline: none;
  }
  .layout-sidebar-vertical .main-content-wrap .main-header .header-dropdown {
    text-transform: uppercase;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    .notification-badge {
    position: absolute;
    top: 8px;
    right: 14px;
    border-radius: 50%;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    .language-dropdown
    .header-btn-group
    button
    .language-text {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    margin-right: 13px;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    button:hover {
    background: none;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    button
    img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    button
    i {
    color: #111;
    height: 24px;
    width: 24px;
    display: inline-block;
    align-items: center;
    line-height: 1.6;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .header-dropdown
    .dropdown-menu
    a
    i {
    color: gray;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .profile-dropdown
    .dropdown-menu {
    left: auto !important;
    right: 12px !important;
  }
  .layout-sidebar-vertical
    .main-content-wrap
    .main-header
    .profile-dropdown
    .dropdown-menu
    .dropdown-item {
    flex-flow: row;
  }

  .b-none_button {
    border: none;
  }

  .b-none_button {
    box-shadow: none !important;
  }

  .gull-input:focus {
    box-shadow: none !important;
  }

  .avatar-dropdown .user img {
    width: 100px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer !important;
  }

  .cursor-pointer {
    cursor: pointer !important;
  }

  .gull-brand img {
    width: 60px;
    margin-right: 5px;
  }

  .gull-sidebar--width {
    width: 20px;
    margin-right: 15px;
  }

  .layout-sidebar-vertical .sidebar-panel {
    height: 100vh;
    position: fixed;
    top: 0;
    left: -240px;
    width: 240px;
    z-index: 1000;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
    background: #fff;
  }
  .layout-sidebar-vertical .sidebar-panel .brand {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout-sidebar-vertical .sidebar-panel .brand img {
    height: 20px;
  }
  .layout-sidebar-vertical .sidebar-panel .sidebar-compact-switch {
    position: relative;
    width: 24px;
    height: 12px;
    border-radius: 10px;
    border: 1px solid #70657b;
    transition: all 0.3s ease-in;
    cursor: pointer;
  }
  .layout-sidebar-vertical .sidebar-panel .sidebar-compact-switch span {
    position: absolute;
    left: 1px;
    top: 1px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #bbb;
    transition: all 0.3s ease-in;
  }
  .layout-sidebar-vertical .sidebar-panel .scroll-nav {
    height: calc(100vh - 64px);
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-photo img {
    height: 72px;
    width: 72px;
    border-radius: 50%;
    border: 1px solid #eee;
    padding: 4px;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-name {
    display: block;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-name i {
    font-size: 12px;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-control {
    margin-bottom: 1rem;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-control a {
    color: #47404f;
  }
  .layout-sidebar-vertical .sidebar-panel .app-user .app-user-control a i {
    font-size: 16px;
    height: 20px;
    width: 20px;
    line-height: 20px;
    display: inline-block;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .icon-menu-title,
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu-title {
    color: #70657b;
    font-size: 12px;
    padding: 16px 0 16px 16px;
    display: block;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .icon-menu .icon-menu-item {
    padding: 0 24px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul {
    padding: 0 12px;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul li {
    list-style: none;
    font-size: 15px;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul li a {
    color: #47404f;
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0px 15px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li
    a
    .nav-icon {
    margin-right: 10px;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li
    a
    .item-name {
    text-transform: capitalize;
    font-size: 15px;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul li a .spacer {
    margin: auto;
  }
  .layout-sidebar-vertical .sidebar-panel .side-nav .main-menu ul li a:hover {
    text-decoration: none;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li.dropdown
    > .sub-menu {
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease-in;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li.dropdown
    > .sub-menu
    a {
    height: 44px;
    padding-left: 50px;
  }
  .layout-sidebar-vertical
    .sidebar-panel
    .side-nav
    .main-menu
    ul
    li.dropdown.open
    > .sub-menu {
    max-height: 1000px;
  }

  .app-admin-wrap.sidebar-full.sidebar-closed .sidebar-panel {
    left: -240px;
  }

  .app-admin-wrap.sidebar-full.sidebar-closed .main-content-wrap {
    width: 100%;
  }

  .app-admin-wrap.sidebar-full .sidebar-panel {
    width: 240px;
    left: 0px;
  }

  .app-admin-wrap.sidebar-full .main-content-wrap {
    width: calc(100% - 240px);
    padding: 1rem 2rem 0rem;
  }

  .app-admin-wrap.sidebar-compact .sidebar-panel {
    width: 75px;
    left: 0;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .app-user,
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-title,
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu-title,
  .app-admin-wrap.sidebar-compact .sidebar-panel .item-badge,
  .app-admin-wrap.sidebar-compact .sidebar-panel .item-name {
    display: none;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .sidebar-compact-switch {
    display: none;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-item {
    flex-direction: column;
    padding: 0;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-item a {
    width: 100%;
    display: contents;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-item a i {
    padding: 5px;
    font-size: 30px;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-item a:hover {
    cursor: pointer;
    padding: 0px 10px;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu ul li a i {
    padding: 0;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu ul li a i a {
    width: 100%;
    display: contents;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu ul li a i a i {
    padding: 5px;
    font-size: 30px;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu ul li a i a:hover {
    cursor: pointer;
    padding: 0px 10px;
  }
  .app-admin-wrap.sidebar-compact
    .sidebar-panel
    .main-menu
    ul
    li
    a
    .main-menu
    ul
    li
    a
    i {
    padding: 0;
  }
  .app-admin-wrap.sidebar-compact
    .sidebar-panel
    .main-menu
    ul
    li
    a
    .main-menu
    .dropdown {
    display: none;
  }
  .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu .dropdown {
    display: none;
  }

  .app-admin-wrap.sidebar-compact .main-content-wrap {
    width: calc(100% - 65px);
    padding: 1rem 2rem 0;
  }

  .app-admin-wrap.sidebar-compact .main-content-wrap .main-header {
    height: 64px;
  }

  .main-content-wrap.sidebar-full-z-index {
    width: calc(100% - 65px) !important;
    z-index: -100;
  }

  ul.metismenu {
    position: relative;
  }

  .Ul_li--hover::before {
    content: "";
    background-color: #663399;
    position: absolute;
    height: 36px;
    width: 225px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    opacity: 0.1;
    left: -233px;
    transition: all 400ms ease;
  }

  .Ul_li--hover:hover::before {
    left: 0px;
    transition: all 300ms ease;
    z-index: -1;
  }

  .metismenu .has-arrow:after {
    right: 2em !important;
    opacity: 0.6 !important;
    width: 0.6em !important;
    height: 0.6em !important;
    border-width: 2px 0 0 2px !important;
  }

  .comp {
    position: absolute;
    top: 69px;
    right: -166px;
  }

  .header-toggle .mobile-menu-icon {
    display: none !important;
  }

  .has-arrow.without-after-element:after {
    content: none !important;
  }

  .sidebar-overlay {
    display: none;
  }

  @media only screen and (max-width: 1150px) {
    .sidebar-switch-open {
      left: 0px !important;
    }
    .app-admin-wrap.sidebar-full .sidebar-panel {
      left: -240px;
    }
    .header-toggle .mobile-menu-icon {
      display: block !important;
    }
    .switch-overlay {
      height: calc(100vh - 70px);
      display: block;
      position: fixed;
      width: calc(100% - 240px);
      height: calc(100vh - 5px);
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0);
      z-index: 20000;
      cursor: w-resize;
    }
    .app-admin-wrap.sidebar-full .main-content-wrap {
      width: calc(100% - 0px);
    }
    .sidebar-compact-switch {
      display: none;
    }
  }

  @media only screen and (max-width: 530px) {
    .mobile-hide {
      display: none !important;
    }
  }

  .has-arrow.without-after-element:after {
    content: none !important;
  }

  [dir="rtl"] .Ul_li--hover::before {
    content: "";
    background-color: #663399;
    position: absolute;
    height: 36px;
    width: 225px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    opacity: 0.1;
    right: -233px;
    transition: all 400ms ease;
  }

  [dir="rtl"] .Ul_li--hover:hover::before {
    right: 0px;
    transition: all 300ms ease;
    z-index: -1;
  }

  [dir="rtl"] .metismenu .has-arrow:after {
    left: 2em !important;
    right: auto !important;
    opacity: 0.6 !important;
    width: 0.6em !important;
    height: 0.6em !important;
    border-width: 2px 0 0 2px !important;
  }

  [dir="rtl"] .comp {
    position: absolute;
    top: 69px;
    left: -166px;
  }

  [dir="rtl"] .layout-sidebar-vertical .ml-auto,
  [dir="rtl"] .layout-sidebar-vertical .mx-auto {
    margin-right: auto !important;
  }

  [dir="rtl"] .layout-sidebar-vertical .sidebar-panel {
    height: 100vh;
    position: fixed;
    top: 0;
    right: -240px;
  }

  [dir="rtl"] .layout-sidebar-vertical .main-content-wrap {
    float: left;
  }

  [dir="rtl"] .layout-sidebar-vertical .side-nav .icon-menu-title,
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu-title {
    color: #70657b;
    font-size: 12px;
    padding: 16px 0 16px 16px;
    display: block;
  }

  [dir="rtl"] .layout-sidebar-vertical .side-nav .icon-menu .icon-menu-item {
    padding: 0 24px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }

  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul {
    padding: 0 12px;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li {
    list-style: none;
    font-size: 15px;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a {
    color: #47404f;
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0px 15px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a .nav-icon {
    margin-left: 10px;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a .item-name {
    text-transform: capitalize;
    font-size: 15px;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a .spacer {
    margin: auto;
  }
  [dir="rtl"] .layout-sidebar-vertical .side-nav .main-menu ul li a:hover {
    text-decoration: none;
  }
  [dir="rtl"]
    .layout-sidebar-vertical
    .side-nav
    .main-menu
    ul
    li.dropdown
    > .sub-menu {
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease-in;
  }
  [dir="rtl"]
    .layout-sidebar-vertical
    .side-nav
    .main-menu
    ul
    li.dropdown
    > .sub-menu
    a {
    height: 44px;
    padding-right: 50px;
  }
  [dir="rtl"]
    .layout-sidebar-vertical
    .side-nav
    .main-menu
    ul
    li.dropdown.open
    > .sub-menu {
    max-height: 1000px;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-full.sidebar-closed .sidebar-panel {
    right: -240px;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-full.sidebar-closed .main-content-wrap {
    width: 100%;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-full .sidebar-panel {
    width: 240px;
    right: 0px;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-full .main-content-wrap {
    width: calc(100% - 240px);
    padding: 1rem 2rem 0rem;
  }

  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel {
    width: 75px;
    right: 0;
  }
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .app-user,
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .icon-menu-title,
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .main-menu-title,
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .item-badge,
  [dir="rtl"] .app-admin-wrap.sidebar-compact .sidebar-panel .item-name {
    display: none;
  }

  .sidebar-panel,
  .main-content-wrap,
  .main-header {
    transition: all 0.2s ease-in;
  }

  .main-content-wrap {
    width: 100%;
    min-height: 100vh;
    float: right;
  }
  .main-content-wrap .main-content-body {
    padding: 0.66rem;
  }

  .app-admin-wrap.sidebar-compact-onhover .sidebar-compact-switch {
    background: #663399;
  }
  .app-admin-wrap.sidebar-compact-onhover .sidebar-compact-switch span {
    left: 14px;
    background: #fff;
  }

  .bg-off-white {
    background-color: #f9f9f9;
  }

  .sidebar-left-secondary .childNav li.nav-item.open > a {
    background: #eee;
  }
  .sidebar-left-secondary .childNav li.nav-item.open > a > .dd-arrow {
    transform: rotate(90deg);
  }

  .sidebar-left-secondary .childNav li.nav-item.open > .submenu {
    max-height: 1000px;
  }

  .sidebar-left-secondary .childNav li.nav-item .submenu {
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in;
  }
  .sidebar-left-secondary .childNav li.nav-item .submenu > li a {
    padding-left: 50px;
  }

  [dir="rtl"] .notification-dropdown .dropdown-item .notification-details {
    text-align: right;
  }

  [dir="rtl"] .main-header .user {
    margin-left: 2rem;
    margin-right: 0;
  }

  .active-color {
    height: 40px;
    padding: 0 12px 0 24px;
    border-radius: 0 35px 35px 0;
    margin-right: 16px;
    background-color: #663399;
    color: #fff !important;
  }

  [role="tab"] .btn {
    width: 100%;
    text-align: left;
  }
  [role="tab"] .btn:hover,
  [role="tab"] .btn:focus {
    text-decoration: none;
  }

  .accordion > .card {
    overflow: hidden;
  }

  .avatar-sm {
    width: 36px;
    height: 36px;
  }

  .avatar-md {
    width: 54px;
    height: 54px;
  }

  .avatar-lg {
    width: 80px;
    height: 80px;
  }

  .avatar-xl {
    width: 150px;
    height: 150px;
  }

  .avatar-sm-table {
    width: 20px;
    height: 20px;
  }

  .border-bottom-primary {
    border-bottom: 1px solid #663399;
  }

  .border-bottom-secondary {
    border-bottom: 1px solid #52495a;
  }

  .border-bottom-success {
    border-bottom: 1px solid #4caf50;
  }

  .border-bottom-info {
    border-bottom: 1px solid #003473;
  }

  .border-bottom-warning {
    border-bottom: 1px solid #ffc107;
  }

  .border-bottom-danger {
    border-bottom: 1px solid #f44336;
  }

  .border-bottom-light {
    border-bottom: 1px solid #bbb;
  }

  .border-bottom-dark {
    border-bottom: 1px solid #47404f;
  }

  .border-bottom-gray-100 {
    border-bottom: 1px solid #f8f9fa;
  }

  .border-bottom-gray-200 {
    border-bottom: 1px solid #eee;
  }

  .border-bottom-gray-300 {
    border-bottom: 1px solid #dee2e6;
  }

  .border-bottom-gray-400 {
    border-bottom: 1px solid #ced4da;
  }

  .border-bottom-gray-500 {
    border-bottom: 1px solid #bbb;
  }

  .border-bottom-gray-600 {
    border-bottom: 1px solid #70657b;
  }

  .border-bottom-gray-700 {
    border-bottom: 1px solid #665c70;
  }

  .border-bottom-gray-800 {
    border-bottom: 1px solid #52495a;
  }

  .border-bottom-gray-900 {
    border-bottom: 1px solid #47404f;
  }

  .border-bottom-dotted-primary {
    border-bottom: 1px dotted #663399;
  }

  .border-bottom-dotted-secondary {
    border-bottom: 1px dotted #52495a;
  }

  .border-bottom-dotted-success {
    border-bottom: 1px dotted #4caf50;
  }

  .border-bottom-dotted-info {
    border-bottom: 1px dotted #003473;
  }

  .border-bottom-dotted-warning {
    border-bottom: 1px dotted #ffc107;
  }

  .border-bottom-dotted-danger {
    border-bottom: 1px dotted #f44336;
  }

  .border-bottom-dotted-light {
    border-bottom: 1px dotted #bbb;
  }

  .border-bottom-dotted-dark {
    border-bottom: 1px dotted #47404f;
  }

  .border-bottom-dotted-gray-100 {
    border-bottom: 1px dotted #f8f9fa;
  }

  .border-bottom-dotted-gray-200 {
    border-bottom: 1px dotted #eee;
  }

  .border-bottom-dotted-gray-300 {
    border-bottom: 1px dotted #dee2e6;
  }

  .border-bottom-dotted-gray-400 {
    border-bottom: 1px dotted #ced4da;
  }

  .border-bottom-dotted-gray-500 {
    border-bottom: 1px dotted #bbb;
  }

  .border-bottom-dotted-gray-600 {
    border-bottom: 1px dotted #70657b;
  }

  .border-bottom-dotted-gray-700 {
    border-bottom: 1px dotted #665c70;
  }

  .border-bottom-dotted-gray-800 {
    border-bottom: 1px dotted #52495a;
  }

  .border-bottom-dotted-gray-900 {
    border-bottom: 1px dotted #47404f;
  }

  .card {
    border-radius: 10px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
    border: 0;
  }
  .card.border-top {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #4caf50;
  }

  .card-header,
  .card-footer {
    border-color: rgba(0, 0, 0, 0.03);
  }

  .card-title {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .card-img-overlay * {
    position: relative;
    z-index: 1;
  }

  .card-img-overlay:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.36);
    z-index: 0;
  }

  .card-img-overlay .separator {
    width: 35px;
    margin: auto;
  }

  .card-img-overlay .card-footer {
    position: absolute;
    bottom: 16px;
    left: 20px;
    border: 0;
    background: transparent;
  }
  .card-img-overlay .card-footer [class^="i-"] {
    font-size: 0.875rem;
    vertical-align: text-bottom;
  }

  .card-icon .card-body {
    padding: 2rem 0.5rem;
  }

  .card-icon [class^="i-"] {
    font-size: 32px;
  }

  .card-icon [class^="i-"],
  .card-icon .lead {
    color: #663399;
  }

  .card-icon-big .card-body {
    padding: 2rem 0.5rem;
  }

  .card-icon-big [class^="i-"] {
    font-size: 48px;
  }

  .card-icon-big [class^="i-"] {
    color: rgba(102, 51, 153, 0.6);
  }

  .card-icon-bg {
    position: relative;
    z-index: 1;
  }
  .card-icon-bg .card-body {
    display: flex;
  }
  .card-icon-bg .card-body .content {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 70px;
  }
  .card-icon-bg [class^="i-"] {
    font-size: 4rem;
    color: rgba(187, 187, 187, 0.28);
  }
  .card-icon-bg .lead {
    line-height: 1;
  }

  .card-icon-bg-primary [class^="i-"] {
    color: rgba(102, 51, 153, 0.28);
  }

  .card-icon-bg-secondary [class^="i-"] {
    color: rgba(82, 73, 90, 0.28);
  }

  .card-icon-bg-success [class^="i-"] {
    color: rgba(76, 175, 80, 0.28);
  }

  .card-icon-bg-info [class^="i-"] {
    color: rgba(0, 52, 115, 0.28);
  }

  .card-icon-bg-warning [class^="i-"] {
    color: rgba(255, 193, 7, 0.28);
  }

  .card-icon-bg-danger [class^="i-"] {
    color: rgba(244, 67, 54, 0.28);
  }

  .card-icon-bg-light [class^="i-"] {
    color: rgba(187, 187, 187, 0.28);
  }

  .card-icon-bg-dark [class^="i-"] {
    color: rgba(71, 64, 79, 0.28);
  }

  .card-icon-bg-gray-100 [class^="i-"] {
    color: rgba(248, 249, 250, 0.28);
  }

  .card-icon-bg-gray-200 [class^="i-"] {
    color: rgba(238, 238, 238, 0.28);
  }

  .card-icon-bg-gray-300 [class^="i-"] {
    color: rgba(222, 226, 230, 0.28);
  }

  .card-icon-bg-gray-400 [class^="i-"] {
    color: rgba(206, 212, 218, 0.28);
  }

  .card-icon-bg-gray-500 [class^="i-"] {
    color: rgba(187, 187, 187, 0.28);
  }

  .card-icon-bg-gray-600 [class^="i-"] {
    color: rgba(112, 101, 123, 0.28);
  }

  .card-icon-bg-gray-700 [class^="i-"] {
    color: rgba(102, 92, 112, 0.28);
  }

  .card-icon-bg-gray-800 [class^="i-"] {
    color: rgba(82, 73, 90, 0.28);
  }

  .card-icon-bg-gray-900 [class^="i-"] {
    color: rgba(71, 64, 79, 0.28);
  }

  .card-profile-1 .avatar {
    width: 80px;
    height: 80px;
    overflow: hidden;
    margin: auto;
    border-radius: 50%;
  }

  .card-ecommerce-1 .card-body [class^="i-"] {
    display: block;
    font-size: 78px;
    color: #663399;
  }

  .card-ecommerce-2 .row {
    margin: 0;
  }

  .card-ecommerce-2 .card-action,
  .card-ecommerce-2 .col {
    padding: 1rem;
  }

  .card-ecommerce-2 .card-action {
    position: relative;
    display: flex;
    align-items: center;
  }
  .card-ecommerce-2 .card-action .icon {
    font-size: 22px;
    height: 24px;
    display: inline-block;
    width: 24px;
    line-height: 24px;
    margin: 0 8px;
    cursor: pointer;
  }
  .card-ecommerce-2 .card-action:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: rgba(71, 64, 79, 0.1);
  }

  .card-ecommerce-3 .card-img-left {
    height: 220px;
    object-fit: cover;
  }

  .card-socials-simple a {
    display: inline-block;
    padding: 4px;
  }

  .card-zoom-in {
    position: relative;
    background-color: white;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .card-zoom-in:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 5px;
    opacity: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .card-zoom-in:hover {
    transform: scale(1.2);
  }

  .card-zoom-in:hover:after {
    opacity: 1;
  }

  @media screen and (max-width: 576px) {
    .card-ecommerce-3 .card-img-left {
      width: 100%;
    }
  }

  #calendar {
    float: right;
    width: 100%;
  }

  #external-events h4 {
    font-size: 16px;
    margin-top: 0;
    padding-top: 1em;
  }

  #external-events .fc-event {
    margin: 2px 0;
    cursor: move;
  }

  .create_event_wrap p {
    margin: 1.5em 0;
    font-size: 11px;
    color: #666;
  }

  .create_event_wrap p input {
    margin: 0;
    vertical-align: middle;
  }

  .fc-event {
    position: relative;
    display: block;
    font-size: 0.85em;
    line-height: 1.3;
    border-radius: 3px;
    border: 0px solid #663399 !important;
  }

  a.fc-day-grid-event {
    background: #663399;
    padding: 5px;
  }

  th.fc-day-header {
    border-bottom-width: 2px;
    padding: 10px 0px;
    display: table-cell;
    background: #f5f5f5;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  td.fc-head-container {
    padding: 0px !important;
  }

  .fc-toolbar h2 {
    margin: 0;
    font-weight: bold;
  }

  span.fa {
    font-family: "iconsmind" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }

  span.fa.fa-chevron-left:before {
    content: "\f077";
  }

  span.fa.fa-chevron-right:before {
    content: "\f07d";
  }

  .breadcrumb {
    background: transparent;
    align-items: center;
    margin: 0 0 1.25rem;
    padding: 0;
  }
  .breadcrumb h1 {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
  }
  .breadcrumb ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .breadcrumb ul li {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    line-height: 1;
    vertical-align: bottom;
    color: #70657b;
  }
  .breadcrumb ul li:after {
    position: absolute;
    top: -1px;
    right: 0;
    content: "";
    height: 16px;
    width: 1px;
    background: #70657b;
    border-radius: 5px;
  }
  .breadcrumb ul li:last-child:after {
    display: none;
  }
  .breadcrumb ul li a {
    color: #332e38;
  }

  [dir="rtl"] .breadcrumb h1 {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
    margin-left: 0.5rem;
  }

  @media (max-width: 576px) {
    .breadcrumb {
      flex-direction: column;
      align-items: flex-start;
    }
    .breadcrumb ul li:first-child {
      padding-left: 0;
    }
  }

  html [type="button"],
  .btn[type="button"] {
    -webkit-appearance: none !important;
  }

  .btn.rounded,
  .btn.btn-rounded {
    border-radius: 40px !important;
  }

  .btn.btn-xl {
    padding: 0.75rem 2rem;
    font-size: 1.18rem;
  }

  .btn:focus {
    box-shadow: none;
  }

  .btn-secondary,
  .btn-raised-secondary {
    color: #47404f !important;
    background-color: #fff !important;
  }

  .btn-icon [class^="i-"],
  .btn-icon .icon {
    vertical-align: middle;
    margin: 0 2px;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .btn-icon.rounded-circle {
    width: 44px;
    height: 44px;
    padding: 0;
  }

  .btn-icon-text [class^="i-"],
  .btn-icon-text .icon {
    vertical-align: middle;
    margin: 0 2px;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .btn-outline-email {
    background: rgba(238, 238, 238, 0.6);
  }

  .btn-spinner {
    width: 1em;
    height: 1em;
    background: transparent;
    border-radius: 50%;
    margin: 0 16px 0 0;
    border: 2px solid transparent;
  }

  .btn-checkbox .checkbox,
  .btn-checkbox .radio {
    display: inline;
  }

  .btn.btn-outline-light.btn-svg {
    border-color: #665c70;
  }
  .btn.btn-outline-light.btn-svg.active,
  .btn.btn-outline-light.btn-svg:hover {
    background: #663399;
    border-color: #663399;
  }
  .btn.btn-outline-light.btn-svg.active svg,
  .btn.btn-outline-light.btn-svg:hover svg {
    fill: #ffffff;
  }
  .btn.btn-outline-light.btn-svg:focus {
    box-shadow: none !important;
  }

  .btn-raised {
    color: #fff;
  }

  .btn-primary,
  .btn-outline-primary {
    border-color: #663399;
  }
  .btn-primary .btn-spinner,
  .btn-outline-primary .btn-spinner {
    animation: btn-glow-primary 1s ease infinite;
  }
  .btn-primary:hover,
  .btn-outline-primary:hover {
    background: #663399;
    box-shadow: 0 8px 25px -8px #663399;
    border-color: #663399;
  }
  .btn-primary:focus,
  .btn-outline-primary:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #663399;
  }

  .btn-raised.btn-raised-primary {
    background: #663399;
    box-shadow: 0 4px 6px rgba(102, 51, 153, 0.11),
      0 1px 3px rgba(102, 51, 153, 0.08);
  }

  @keyframes btn-glow-primary {
    0% {
      box-shadow: 0 0 0 0.4em #4d2673, 0 0 0 0.1em #4d2673;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #4d2673, 0 0 0 3.6em transparent;
    }
  }

  .btn-secondary,
  .btn-outline-secondary {
    border-color: #52495a;
  }
  .btn-secondary .btn-spinner,
  .btn-outline-secondary .btn-spinner {
    animation: btn-glow-secondary 1s ease infinite;
  }
  .btn-secondary:hover,
  .btn-outline-secondary:hover {
    background: #52495a;
    box-shadow: 0 8px 25px -8px #52495a;
    border-color: #52495a;
  }
  .btn-secondary:focus,
  .btn-outline-secondary:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #52495a;
  }

  .btn-raised.btn-raised-secondary {
    background: #52495a;
    box-shadow: 0 4px 6px rgba(82, 73, 90, 0.11),
      0 1px 3px rgba(82, 73, 90, 0.08);
  }

  @keyframes btn-glow-secondary {
    0% {
      box-shadow: 0 0 0 0.4em #38323e, 0 0 0 0.1em #38323e;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #38323e, 0 0 0 3.6em transparent;
    }
  }

  .btn-success,
  .btn-outline-success {
    border-color: #4caf50;
  }
  .btn-success .btn-spinner,
  .btn-outline-success .btn-spinner {
    animation: btn-glow-success 1s ease infinite;
  }
  .btn-success:hover,
  .btn-outline-success:hover {
    background: #4caf50;
    box-shadow: 0 8px 25px -8px #4caf50;
    border-color: #4caf50;
  }
  .btn-success:focus,
  .btn-outline-success:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #4caf50;
  }

  .btn-raised.btn-raised-success {
    background: #4caf50;
    box-shadow: 0 4px 6px rgba(76, 175, 80, 0.11),
      0 1px 3px rgba(76, 175, 80, 0.08);
  }

  @keyframes btn-glow-success {
    0% {
      box-shadow: 0 0 0 0.4em #3d8b40, 0 0 0 0.1em #3d8b40;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #3d8b40, 0 0 0 3.6em transparent;
    }
  }

  .btn-info,
  .btn-outline-info {
    border-color: #003473;
  }
  .btn-info .btn-spinner,
  .btn-outline-info .btn-spinner {
    animation: btn-glow-info 1s ease infinite;
  }
  .btn-info:hover,
  .btn-outline-info:hover {
    background: #003473;
    box-shadow: 0 8px 25px -8px #003473;
    border-color: #003473;
  }
  .btn-info:focus,
  .btn-outline-info:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #003473;
  }

  .btn-raised.btn-raised-info {
    background: #003473;
    box-shadow: 0 4px 6px rgba(0, 52, 115, 0.11),
      0 1px 3px rgba(0, 52, 115, 0.08);
  }

  @keyframes btn-glow-info {
    0% {
      box-shadow: 0 0 0 0.4em #001d40, 0 0 0 0.1em #001d40;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #001d40, 0 0 0 3.6em transparent;
    }
  }

  .btn-warning,
  .btn-outline-warning {
    border-color: #ffc107;
  }
  .btn-warning .btn-spinner,
  .btn-outline-warning .btn-spinner {
    animation: btn-glow-warning 1s ease infinite;
  }
  .btn-warning:hover,
  .btn-outline-warning:hover {
    background: #ffc107;
    box-shadow: 0 8px 25px -8px #ffc107;
    border-color: #ffc107;
  }
  .btn-warning:focus,
  .btn-outline-warning:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #ffc107;
  }

  .btn-raised.btn-raised-warning {
    background: #ffc107;
    box-shadow: 0 4px 6px rgba(255, 193, 7, 0.11),
      0 1px 3px rgba(255, 193, 7, 0.08);
  }

  @keyframes btn-glow-warning {
    0% {
      box-shadow: 0 0 0 0.4em #d39e00, 0 0 0 0.1em #d39e00;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #d39e00, 0 0 0 3.6em transparent;
    }
  }

  .btn-danger,
  .btn-outline-danger {
    border-color: #f44336;
  }
  .btn-danger .btn-spinner,
  .btn-outline-danger .btn-spinner {
    animation: btn-glow-danger 1s ease infinite;
  }
  .btn-danger:hover,
  .btn-outline-danger:hover {
    background: #f44336;
    box-shadow: 0 8px 25px -8px #f44336;
    border-color: #f44336;
  }
  .btn-danger:focus,
  .btn-outline-danger:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #f44336;
  }

  .btn-raised.btn-raised-danger {
    background: #f44336;
    box-shadow: 0 4px 6px rgba(244, 67, 54, 0.11),
      0 1px 3px rgba(244, 67, 54, 0.08);
  }

  @keyframes btn-glow-danger {
    0% {
      box-shadow: 0 0 0 0.4em #ea1c0d, 0 0 0 0.1em #ea1c0d;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #ea1c0d, 0 0 0 3.6em transparent;
    }
  }

  .btn-light,
  .btn-outline-light {
    border-color: #bbb;
  }
  .btn-light .btn-spinner,
  .btn-outline-light .btn-spinner {
    animation: btn-glow-light 1s ease infinite;
  }
  .btn-light:hover,
  .btn-outline-light:hover {
    background: #bbb;
    box-shadow: 0 8px 25px -8px #bbb;
    border-color: #bbb;
  }
  .btn-light:focus,
  .btn-outline-light:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #bbb;
  }

  .btn-raised.btn-raised-light {
    background: #bbb;
    box-shadow: 0 4px 6px rgba(187, 187, 187, 0.11),
      0 1px 3px rgba(187, 187, 187, 0.08);
  }

  @keyframes btn-glow-light {
    0% {
      box-shadow: 0 0 0 0.4em #a2a2a2, 0 0 0 0.1em #a2a2a2;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #a2a2a2, 0 0 0 3.6em transparent;
    }
  }

  .btn-dark,
  .btn-outline-dark {
    border-color: #47404f;
  }
  .btn-dark .btn-spinner,
  .btn-outline-dark .btn-spinner {
    animation: btn-glow-dark 1s ease infinite;
  }
  .btn-dark:hover,
  .btn-outline-dark:hover {
    background: #47404f;
    box-shadow: 0 8px 25px -8px #47404f;
    border-color: #47404f;
  }
  .btn-dark:focus,
  .btn-outline-dark:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #47404f;
  }

  .btn-raised.btn-raised-dark {
    background: #47404f;
    box-shadow: 0 4px 6px rgba(71, 64, 79, 0.11),
      0 1px 3px rgba(71, 64, 79, 0.08);
  }

  @keyframes btn-glow-dark {
    0% {
      box-shadow: 0 0 0 0.4em #2e2932, 0 0 0 0.1em #2e2932;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #2e2932, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-100,
  .btn-outline-gray-100 {
    border-color: #f8f9fa;
  }
  .btn-gray-100 .btn-spinner,
  .btn-outline-gray-100 .btn-spinner {
    animation: btn-glow-gray-100 1s ease infinite;
  }
  .btn-gray-100:hover,
  .btn-outline-gray-100:hover {
    background: #f8f9fa;
    box-shadow: 0 8px 25px -8px #f8f9fa;
    border-color: #f8f9fa;
  }
  .btn-gray-100:focus,
  .btn-outline-gray-100:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #f8f9fa;
  }

  .btn-raised.btn-raised-gray-100 {
    background: #f8f9fa;
    box-shadow: 0 4px 6px rgba(248, 249, 250, 0.11),
      0 1px 3px rgba(248, 249, 250, 0.08);
  }

  @keyframes btn-glow-gray-100 {
    0% {
      box-shadow: 0 0 0 0.4em #dae0e5, 0 0 0 0.1em #dae0e5;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #dae0e5, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-200,
  .btn-outline-gray-200 {
    border-color: #eee;
  }
  .btn-gray-200 .btn-spinner,
  .btn-outline-gray-200 .btn-spinner {
    animation: btn-glow-gray-200 1s ease infinite;
  }
  .btn-gray-200:hover,
  .btn-outline-gray-200:hover {
    background: #eee;
    box-shadow: 0 8px 25px -8px #eee;
    border-color: #eee;
  }
  .btn-gray-200:focus,
  .btn-outline-gray-200:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #eee;
  }

  .btn-raised.btn-raised-gray-200 {
    background: #eee;
    box-shadow: 0 4px 6px rgba(238, 238, 238, 0.11),
      0 1px 3px rgba(238, 238, 238, 0.08);
  }

  @keyframes btn-glow-gray-200 {
    0% {
      box-shadow: 0 0 0 0.4em #d5d5d5, 0 0 0 0.1em #d5d5d5;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #d5d5d5, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-300,
  .btn-outline-gray-300 {
    border-color: #dee2e6;
  }
  .btn-gray-300 .btn-spinner,
  .btn-outline-gray-300 .btn-spinner {
    animation: btn-glow-gray-300 1s ease infinite;
  }
  .btn-gray-300:hover,
  .btn-outline-gray-300:hover {
    background: #dee2e6;
    box-shadow: 0 8px 25px -8px #dee2e6;
    border-color: #dee2e6;
  }
  .btn-gray-300:focus,
  .btn-outline-gray-300:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #dee2e6;
  }

  .btn-raised.btn-raised-gray-300 {
    background: #dee2e6;
    box-shadow: 0 4px 6px rgba(222, 226, 230, 0.11),
      0 1px 3px rgba(222, 226, 230, 0.08);
  }

  @keyframes btn-glow-gray-300 {
    0% {
      box-shadow: 0 0 0 0.4em #c1c9d0, 0 0 0 0.1em #c1c9d0;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #c1c9d0, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-400,
  .btn-outline-gray-400 {
    border-color: #ced4da;
  }
  .btn-gray-400 .btn-spinner,
  .btn-outline-gray-400 .btn-spinner {
    animation: btn-glow-gray-400 1s ease infinite;
  }
  .btn-gray-400:hover,
  .btn-outline-gray-400:hover {
    background: #ced4da;
    box-shadow: 0 8px 25px -8px #ced4da;
    border-color: #ced4da;
  }
  .btn-gray-400:focus,
  .btn-outline-gray-400:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #ced4da;
  }

  .btn-raised.btn-raised-gray-400 {
    background: #ced4da;
    box-shadow: 0 4px 6px rgba(206, 212, 218, 0.11),
      0 1px 3px rgba(206, 212, 218, 0.08);
  }

  @keyframes btn-glow-gray-400 {
    0% {
      box-shadow: 0 0 0 0.4em #b1bbc4, 0 0 0 0.1em #b1bbc4;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #b1bbc4, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-500,
  .btn-outline-gray-500 {
    border-color: #bbb;
  }
  .btn-gray-500 .btn-spinner,
  .btn-outline-gray-500 .btn-spinner {
    animation: btn-glow-gray-500 1s ease infinite;
  }
  .btn-gray-500:hover,
  .btn-outline-gray-500:hover {
    background: #bbb;
    box-shadow: 0 8px 25px -8px #bbb;
    border-color: #bbb;
  }
  .btn-gray-500:focus,
  .btn-outline-gray-500:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #bbb;
  }

  .btn-raised.btn-raised-gray-500 {
    background: #bbb;
    box-shadow: 0 4px 6px rgba(187, 187, 187, 0.11),
      0 1px 3px rgba(187, 187, 187, 0.08);
  }

  @keyframes btn-glow-gray-500 {
    0% {
      box-shadow: 0 0 0 0.4em #a2a2a2, 0 0 0 0.1em #a2a2a2;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #a2a2a2, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-600,
  .btn-outline-gray-600 {
    border-color: #70657b;
  }
  .btn-gray-600 .btn-spinner,
  .btn-outline-gray-600 .btn-spinner {
    animation: btn-glow-gray-600 1s ease infinite;
  }
  .btn-gray-600:hover,
  .btn-outline-gray-600:hover {
    background: #70657b;
    box-shadow: 0 8px 25px -8px #70657b;
    border-color: #70657b;
  }
  .btn-gray-600:focus,
  .btn-outline-gray-600:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #70657b;
  }

  .btn-raised.btn-raised-gray-600 {
    background: #70657b;
    box-shadow: 0 4px 6px rgba(112, 101, 123, 0.11),
      0 1px 3px rgba(112, 101, 123, 0.08);
  }

  @keyframes btn-glow-gray-600 {
    0% {
      box-shadow: 0 0 0 0.4em #574e5f, 0 0 0 0.1em #574e5f;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #574e5f, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-700,
  .btn-outline-gray-700 {
    border-color: #665c70;
  }
  .btn-gray-700 .btn-spinner,
  .btn-outline-gray-700 .btn-spinner {
    animation: btn-glow-gray-700 1s ease infinite;
  }
  .btn-gray-700:hover,
  .btn-outline-gray-700:hover {
    background: #665c70;
    box-shadow: 0 8px 25px -8px #665c70;
    border-color: #665c70;
  }
  .btn-gray-700:focus,
  .btn-outline-gray-700:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #665c70;
  }

  .btn-raised.btn-raised-gray-700 {
    background: #665c70;
    box-shadow: 0 4px 6px rgba(102, 92, 112, 0.11),
      0 1px 3px rgba(102, 92, 112, 0.08);
  }

  @keyframes btn-glow-gray-700 {
    0% {
      box-shadow: 0 0 0 0.4em #4d4554, 0 0 0 0.1em #4d4554;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #4d4554, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-800,
  .btn-outline-gray-800 {
    border-color: #52495a;
  }
  .btn-gray-800 .btn-spinner,
  .btn-outline-gray-800 .btn-spinner {
    animation: btn-glow-gray-800 1s ease infinite;
  }
  .btn-gray-800:hover,
  .btn-outline-gray-800:hover {
    background: #52495a;
    box-shadow: 0 8px 25px -8px #52495a;
    border-color: #52495a;
  }
  .btn-gray-800:focus,
  .btn-outline-gray-800:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #52495a;
  }

  .btn-raised.btn-raised-gray-800 {
    background: #52495a;
    box-shadow: 0 4px 6px rgba(82, 73, 90, 0.11),
      0 1px 3px rgba(82, 73, 90, 0.08);
  }

  @keyframes btn-glow-gray-800 {
    0% {
      box-shadow: 0 0 0 0.4em #38323e, 0 0 0 0.1em #38323e;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #38323e, 0 0 0 3.6em transparent;
    }
  }

  .btn-gray-900,
  .btn-outline-gray-900 {
    border-color: #47404f;
  }
  .btn-gray-900 .btn-spinner,
  .btn-outline-gray-900 .btn-spinner {
    animation: btn-glow-gray-900 1s ease infinite;
  }
  .btn-gray-900:hover,
  .btn-outline-gray-900:hover {
    background: #47404f;
    box-shadow: 0 8px 25px -8px #47404f;
    border-color: #47404f;
  }
  .btn-gray-900:focus,
  .btn-outline-gray-900:focus {
    box-shadow: none;
    box-shadow: 0 8px 25px -8px #47404f;
  }

  .btn-raised.btn-raised-gray-900 {
    background: #47404f;
    box-shadow: 0 4px 6px rgba(71, 64, 79, 0.11),
      0 1px 3px rgba(71, 64, 79, 0.08);
  }

  @keyframes btn-glow-gray-900 {
    0% {
      box-shadow: 0 0 0 0.4em #2e2932, 0 0 0 0.1em #2e2932;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #ffffff;
    }
    100% {
      box-shadow: 0 0 0 0.4em #2e2932, 0 0 0 3.6em transparent;
    }
  }

  .btn-facebook {
    color: #fff;
    background-color: #3765c9;
    border-color: #3765c9;
  }

  .btn-facebook:hover {
    background-color: #3765c9;
    border-color: #3765c9;
  }

  .btn-google {
    color: #fff;
    background-color: #ec412c;
    border-color: #ec412c;
  }

  .btn-twitter {
    color: #fff;
    background-color: #039ff5;
    border-color: #039ff5;
  }

  .btn-instagram {
    color: #fff;
    background-color: #c13584;
    border-color: #c13584;
  }

  .btn-linkedin {
    color: #fff;
    background-color: #0077b5;
    border-color: #0077b5;
  }

  .btn-dribble {
    color: #fff;
    background-color: #ea4c89;
    border-color: #ea4c89;
  }

  .btn-youtube {
    color: #fff;
    background-color: #c4302b;
    border-color: #c4302b;
  }

  .btn-outline-facebook {
    color: #3765c9 !important;
    border-color: #3765c9;
    background: rgba(238, 238, 238, 0.6);
  }
  .btn-outline-facebook:hover {
    background: #315bb5;
    border-color: #315bb5;
    color: #fff !important;
  }

  .btn-outline-google {
    color: #ec412c !important;
    border-color: #ec412c;
    background: rgba(238, 238, 238, 0.6);
  }
  .btn-outline-google:hover {
    background: #e92c15;
    border-color: #e92c15;
    color: #fff !important;
  }

  .btn-outline-twitter {
    color: #039ff5 !important;
    border-color: #039ff5;
    background: rgba(238, 238, 238, 0.6);
  }
  .btn-outline-twitter:hover {
    background: #038fdc;
    border-color: #038fdc;
  }

  .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }

  .nav-tabs {
    border: 0;
  }
  .nav-tabs .nav-item .nav-link {
    border: 0;
    padding: 1rem;
  }
  .nav-tabs .nav-item .nav-link:not(.disabled) {
    color: inherit;
  }
  .nav-tabs .nav-item .nav-link.active {
    border-bottom: 2px solid #663399;
    background: rgba(102, 51, 153, 0.1);
  }
  .nav-tabs .nav-item .dropdown-toggle:after {
    position: absolute;
    top: calc(50% - 2px);
    right: 6px !important;
  }

  .tab-content {
    padding: 1rem;
  }

  ngb-tabset.p-0 .tab-content {
    padding: 1rem 0;
  }

  .dropdown-toggle {
    position: relative;
  }
  .dropdown-toggle.btn {
    padding-right: 28px;
  }
  .dropdown-toggle::after {
    position: absolute;
    top: calc(50% - 2px);
    right: 10px !important;
  }

  .dropdown-menu {
    border: 0;
    box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.04),
      0 1px 6px rgba(0, 0, 0, 0.08);
  }

  .dropdown-item {
    padding: 0.42rem 1.5rem;
  }

  .menu-icon-grid {
    width: 220px;
    padding: 0 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .menu-icon-grid > a {
    display: inline-flex;
    width: 6rem;
    flex-direction: column;
    align-items: center;
    padding: 18px 12px;
    color: #52495a;
    border-radius: 4px;
  }
  .menu-icon-grid > a i {
    font-size: 28px;
    margin-bottom: 4px;
  }
  .menu-icon-grid > a:hover {
    background: #663399;
    color: #fff;
  }

  .mega-menu {
    position: static;
  }
  .mega-menu .dropdown-menu {
    left: auto;
    right: 0;
    width: calc(100% - 120px);
    max-width: 1200px;
    padding: 0;
    overflow: hidden;
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
  }
  .mega-menu .dropdown-menu .bg-img {
    background: linear-gradient(to right, #663399, #003473);
  }
  .mega-menu .dropdown-menu .bg-img,
  .mega-menu .dropdown-menu .bg-img .title {
    color: #ffffff;
  }
  .mega-menu .dropdown-menu ul.links {
    list-style: none;
    margin: 0;
    padding: 0;
    column-count: 2;
  }
  .mega-menu .dropdown-menu ul.links li a {
    display: inline-block;
    margin-bottom: 8px;
    color: #70657b;
  }
  .mega-menu .dropdown-menu ul.links li a:hover {
    color: #663399;
  }

  .widget_dropdown .dropdown-menu {
    left: auto !important;
    right: 2px !important;
  }

  @media (max-width: 767px) {
    .mega-menu .dropdown-menu {
      width: calc(100% - 10px);
    }
  }

  [dir="rtl"] .mega-menu .dropdown-menu {
    left: 0 !important;
    right: 0 !important;
    margin: auto !important;
  }

  table.dataTable-collapse {
    border-collapse: collapse !important;
  }

  .form-group {
    position: relative;
    margin-bottom: 10px;
  }
  .form-group label {
    font-size: 12px;
    color: #70657b;
    margin-bottom: 4px;
  }

  .form-control {
    border: initial;
    outline: initial !important;
    background: #f8f9fa;
    border: 1px solid #ced4da;
    color: #47404f;
  }
  .form-control::placeholder {
    color: #bbb;
  }
  .form-control.rounded,
  .form-control.form-control-rounded {
    border-radius: 20px;
  }

  select.form-control {
    -webkit-appearance: none;
  }

  .input-group [type="text"].form-control {
    height: 34px;
  }

  .input-group-append .btn {
    height: 34px;
    border: 0;
  }

  [ngbdatepicker] {
    height: 34px;
  }

  /* checkbox-custom */
  .checkbox,
  .radio {
    display: block;
    position: relative;
    padding-left: 28px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
  }
  .checkbox:hover input ~ .checkmark,
  .radio:hover input ~ .checkmark {
    background-color: #bbb;
  }
  .checkbox input,
  .radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkbox input:checked ~ .checkmark,
  .radio input:checked ~ .checkmark {
    background-color: #663399;
  }
  .checkbox input:checked ~ .checkmark:after,
  .radio input:checked ~ .checkmark:after {
    display: block;
  }
  .checkbox input[disabled] ~ *,
  .radio input[disabled] ~ * {
    color: #dee2e6;
  }
  .checkbox .checkmark,
  .radio .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    background-color: #dee2e6;
  }
  .checkbox .checkmark:after,
  .radio .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 0;
    top: 0;
    right: 0;
    width: 4px;
    bottom: 0;
    margin: auto;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .checkbox-primary input:checked ~ .checkmark {
    background-color: #663399 !important;
  }

  .checkbox-secondary input:checked ~ .checkmark {
    background-color: #52495a !important;
  }

  .checkbox-success input:checked ~ .checkmark {
    background-color: #4caf50 !important;
  }

  .checkbox-info input:checked ~ .checkmark {
    background-color: #003473 !important;
  }

  .checkbox-warning input:checked ~ .checkmark {
    background-color: #ffc107 !important;
  }

  .checkbox-danger input:checked ~ .checkmark {
    background-color: #f44336 !important;
  }

  .checkbox-light input:checked ~ .checkmark {
    background-color: #bbb !important;
  }

  .checkbox-dark input:checked ~ .checkmark {
    background-color: #47404f !important;
  }

  .checkbox-gray-100 input:checked ~ .checkmark {
    background-color: #f8f9fa !important;
  }

  .checkbox-gray-200 input:checked ~ .checkmark {
    background-color: #eee !important;
  }

  .checkbox-gray-300 input:checked ~ .checkmark {
    background-color: #dee2e6 !important;
  }

  .checkbox-gray-400 input:checked ~ .checkmark {
    background-color: #ced4da !important;
  }

  .checkbox-gray-500 input:checked ~ .checkmark {
    background-color: #bbb !important;
  }

  .checkbox-gray-600 input:checked ~ .checkmark {
    background-color: #70657b !important;
  }

  .checkbox-gray-700 input:checked ~ .checkmark {
    background-color: #665c70 !important;
  }

  .checkbox-gray-800 input:checked ~ .checkmark {
    background-color: #52495a !important;
  }

  .checkbox-gray-900 input:checked ~ .checkmark {
    background-color: #47404f !important;
  }

  .checkbox-outline-primary:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-primary input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-primary .checkmark {
    background: #fff;
    border: 1px solid #663399;
  }
  .checkbox-outline-primary .checkmark:after {
    border-color: #663399;
  }

  .checkbox-outline-secondary:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-secondary input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-secondary .checkmark {
    background: #fff;
    border: 1px solid #52495a;
  }
  .checkbox-outline-secondary .checkmark:after {
    border-color: #52495a;
  }

  .checkbox-outline-success:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-success input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-success .checkmark {
    background: #fff;
    border: 1px solid #4caf50;
  }
  .checkbox-outline-success .checkmark:after {
    border-color: #4caf50;
  }

  .checkbox-outline-info:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-info input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-info .checkmark {
    background: #fff;
    border: 1px solid #003473;
  }
  .checkbox-outline-info .checkmark:after {
    border-color: #003473;
  }

  .checkbox-outline-warning:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-warning input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-warning .checkmark {
    background: #fff;
    border: 1px solid #ffc107;
  }
  .checkbox-outline-warning .checkmark:after {
    border-color: #ffc107;
  }

  .checkbox-outline-danger:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-danger input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-danger .checkmark {
    background: #fff;
    border: 1px solid #f44336;
  }
  .checkbox-outline-danger .checkmark:after {
    border-color: #f44336;
  }

  .checkbox-outline-light:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-light input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-light .checkmark {
    background: #fff;
    border: 1px solid #bbb;
  }
  .checkbox-outline-light .checkmark:after {
    border-color: #bbb;
  }

  .checkbox-outline-dark:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-dark input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-dark .checkmark {
    background: #fff;
    border: 1px solid #47404f;
  }
  .checkbox-outline-dark .checkmark:after {
    border-color: #47404f;
  }

  .checkbox-outline-gray-100:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-100 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-100 .checkmark {
    background: #fff;
    border: 1px solid #f8f9fa;
  }
  .checkbox-outline-gray-100 .checkmark:after {
    border-color: #f8f9fa;
  }

  .checkbox-outline-gray-200:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-200 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-200 .checkmark {
    background: #fff;
    border: 1px solid #eee;
  }
  .checkbox-outline-gray-200 .checkmark:after {
    border-color: #eee;
  }

  .checkbox-outline-gray-300:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-300 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-300 .checkmark {
    background: #fff;
    border: 1px solid #dee2e6;
  }
  .checkbox-outline-gray-300 .checkmark:after {
    border-color: #dee2e6;
  }

  .checkbox-outline-gray-400:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-400 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-400 .checkmark {
    background: #fff;
    border: 1px solid #ced4da;
  }
  .checkbox-outline-gray-400 .checkmark:after {
    border-color: #ced4da;
  }

  .checkbox-outline-gray-500:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-500 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-500 .checkmark {
    background: #fff;
    border: 1px solid #bbb;
  }
  .checkbox-outline-gray-500 .checkmark:after {
    border-color: #bbb;
  }

  .checkbox-outline-gray-600:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-600 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-600 .checkmark {
    background: #fff;
    border: 1px solid #70657b;
  }
  .checkbox-outline-gray-600 .checkmark:after {
    border-color: #70657b;
  }

  .checkbox-outline-gray-700:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-700 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-700 .checkmark {
    background: #fff;
    border: 1px solid #665c70;
  }
  .checkbox-outline-gray-700 .checkmark:after {
    border-color: #665c70;
  }

  .checkbox-outline-gray-800:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-800 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-800 .checkmark {
    background: #fff;
    border: 1px solid #52495a;
  }
  .checkbox-outline-gray-800 .checkmark:after {
    border-color: #52495a;
  }

  .checkbox-outline-gray-900:hover input ~ .checkmark {
    background-color: #eee;
  }

  .checkbox-outline-gray-900 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .checkbox-outline-gray-900 .checkmark {
    background: #fff;
    border: 1px solid #47404f;
  }
  .checkbox-outline-gray-900 .checkmark:after {
    border-color: #47404f;
  }

  .radio .checkmark {
    border-radius: 50%;
  }
  .radio .checkmark:after {
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: white;
  }

  .radio-primary input:checked ~ .checkmark {
    background-color: #663399;
  }

  .radio-secondary input:checked ~ .checkmark {
    background-color: #52495a;
  }

  .radio-success input:checked ~ .checkmark {
    background-color: #4caf50;
  }

  .radio-info input:checked ~ .checkmark {
    background-color: #003473;
  }

  .radio-warning input:checked ~ .checkmark {
    background-color: #ffc107;
  }

  .radio-danger input:checked ~ .checkmark {
    background-color: #f44336;
  }

  .radio-light input:checked ~ .checkmark {
    background-color: #bbb;
  }

  .radio-dark input:checked ~ .checkmark {
    background-color: #47404f;
  }

  .radio-gray-100 input:checked ~ .checkmark {
    background-color: #f8f9fa;
  }

  .radio-gray-200 input:checked ~ .checkmark {
    background-color: #eee;
  }

  .radio-gray-300 input:checked ~ .checkmark {
    background-color: #dee2e6;
  }

  .radio-gray-400 input:checked ~ .checkmark {
    background-color: #ced4da;
  }

  .radio-gray-500 input:checked ~ .checkmark {
    background-color: #bbb;
  }

  .radio-gray-600 input:checked ~ .checkmark {
    background-color: #70657b;
  }

  .radio-gray-700 input:checked ~ .checkmark {
    background-color: #665c70;
  }

  .radio-gray-800 input:checked ~ .checkmark {
    background-color: #52495a;
  }

  .radio-gray-900 input:checked ~ .checkmark {
    background-color: #47404f;
  }

  .radio-outline-primary:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-primary input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-primary .checkmark {
    background: #fff;
    border: 1px solid #663399;
  }
  .radio-outline-primary .checkmark:after {
    border: 0;
    background: #663399;
  }

  .radio-outline-secondary:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-secondary input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-secondary .checkmark {
    background: #fff;
    border: 1px solid #52495a;
  }
  .radio-outline-secondary .checkmark:after {
    border: 0;
    background: #52495a;
  }

  .radio-outline-success:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-success input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-success .checkmark {
    background: #fff;
    border: 1px solid #4caf50;
  }
  .radio-outline-success .checkmark:after {
    border: 0;
    background: #4caf50;
  }

  .radio-outline-info:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-info input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-info .checkmark {
    background: #fff;
    border: 1px solid #003473;
  }
  .radio-outline-info .checkmark:after {
    border: 0;
    background: #003473;
  }

  .radio-outline-warning:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-warning input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-warning .checkmark {
    background: #fff;
    border: 1px solid #ffc107;
  }
  .radio-outline-warning .checkmark:after {
    border: 0;
    background: #ffc107;
  }

  .radio-outline-danger:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-danger input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-danger .checkmark {
    background: #fff;
    border: 1px solid #f44336;
  }
  .radio-outline-danger .checkmark:after {
    border: 0;
    background: #f44336;
  }

  .radio-outline-light:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-light input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-light .checkmark {
    background: #fff;
    border: 1px solid #bbb;
  }
  .radio-outline-light .checkmark:after {
    border: 0;
    background: #bbb;
  }

  .radio-outline-dark:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-dark input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-dark .checkmark {
    background: #fff;
    border: 1px solid #47404f;
  }
  .radio-outline-dark .checkmark:after {
    border: 0;
    background: #47404f;
  }

  .radio-outline-gray-100:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-100 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-100 .checkmark {
    background: #fff;
    border: 1px solid #f8f9fa;
  }
  .radio-outline-gray-100 .checkmark:after {
    border: 0;
    background: #f8f9fa;
  }

  .radio-outline-gray-200:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-200 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-200 .checkmark {
    background: #fff;
    border: 1px solid #eee;
  }
  .radio-outline-gray-200 .checkmark:after {
    border: 0;
    background: #eee;
  }

  .radio-outline-gray-300:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-300 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-300 .checkmark {
    background: #fff;
    border: 1px solid #dee2e6;
  }
  .radio-outline-gray-300 .checkmark:after {
    border: 0;
    background: #dee2e6;
  }

  .radio-outline-gray-400:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-400 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-400 .checkmark {
    background: #fff;
    border: 1px solid #ced4da;
  }
  .radio-outline-gray-400 .checkmark:after {
    border: 0;
    background: #ced4da;
  }

  .radio-outline-gray-500:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-500 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-500 .checkmark {
    background: #fff;
    border: 1px solid #bbb;
  }
  .radio-outline-gray-500 .checkmark:after {
    border: 0;
    background: #bbb;
  }

  .radio-outline-gray-600:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-600 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-600 .checkmark {
    background: #fff;
    border: 1px solid #70657b;
  }
  .radio-outline-gray-600 .checkmark:after {
    border: 0;
    background: #70657b;
  }

  .radio-outline-gray-700:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-700 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-700 .checkmark {
    background: #fff;
    border: 1px solid #665c70;
  }
  .radio-outline-gray-700 .checkmark:after {
    border: 0;
    background: #665c70;
  }

  .radio-outline-gray-800:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-800 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-800 .checkmark {
    background: #fff;
    border: 1px solid #52495a;
  }
  .radio-outline-gray-800 .checkmark:after {
    border: 0;
    background: #52495a;
  }

  .radio-outline-gray-900:hover input ~ .checkmark {
    background-color: #eee;
  }

  .radio-outline-gray-900 input:checked ~ .checkmark {
    background-color: #fff !important;
  }

  .radio-outline-gray-900 .checkmark {
    background: #fff;
    border: 1px solid #47404f;
  }
  .radio-outline-gray-900 .checkmark:after {
    border: 0;
    background: #47404f;
  }

  .switch {
    position: relative;
    display: inline-block;
    padding-left: 50px;
    height: 16px;
  }
  .switch span:not(.slider) {
    position: relative;
    top: -2px;
    cursor: pointer;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .switch .slider {
    position: absolute;
    cursor: pointer;
    width: 42px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    background-color: #dee2e6;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .switch .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: -1px;
    bottom: -4px;
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .switch input:checked + .slider {
    background-color: #663399;
  }
  .switch input:focus + .slider {
    box-shadow: 0 0 1px #663399;
  }
  .switch input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  .switch-primary input:checked + .slider {
    background-color: #663399;
  }

  .switch-primary input:focus + .slider {
    box-shadow: 0 0 1px #663399;
  }

  .switch-secondary input:checked + .slider {
    background-color: #52495a;
  }

  .switch-secondary input:focus + .slider {
    box-shadow: 0 0 1px #52495a;
  }

  .switch-success input:checked + .slider {
    background-color: #4caf50;
  }

  .switch-success input:focus + .slider {
    box-shadow: 0 0 1px #4caf50;
  }

  .switch-info input:checked + .slider {
    background-color: #003473;
  }

  .switch-info input:focus + .slider {
    box-shadow: 0 0 1px #003473;
  }

  .switch-warning input:checked + .slider {
    background-color: #ffc107;
  }

  .switch-warning input:focus + .slider {
    box-shadow: 0 0 1px #ffc107;
  }

  .switch-danger input:checked + .slider {
    background-color: #f44336;
  }

  .switch-danger input:focus + .slider {
    box-shadow: 0 0 1px #f44336;
  }

  .switch-light input:checked + .slider {
    background-color: #bbb;
  }

  .switch-light input:focus + .slider {
    box-shadow: 0 0 1px #bbb;
  }

  .switch-dark input:checked + .slider {
    background-color: #47404f;
  }

  .switch-dark input:focus + .slider {
    box-shadow: 0 0 1px #47404f;
  }

  .switch-gray-100 input:checked + .slider {
    background-color: #f8f9fa;
  }

  .switch-gray-100 input:focus + .slider {
    box-shadow: 0 0 1px #f8f9fa;
  }

  .switch-gray-200 input:checked + .slider {
    background-color: #eee;
  }

  .switch-gray-200 input:focus + .slider {
    box-shadow: 0 0 1px #eee;
  }

  .switch-gray-300 input:checked + .slider {
    background-color: #dee2e6;
  }

  .switch-gray-300 input:focus + .slider {
    box-shadow: 0 0 1px #dee2e6;
  }

  .switch-gray-400 input:checked + .slider {
    background-color: #ced4da;
  }

  .switch-gray-400 input:focus + .slider {
    box-shadow: 0 0 1px #ced4da;
  }

  .switch-gray-500 input:checked + .slider {
    background-color: #bbb;
  }

  .switch-gray-500 input:focus + .slider {
    box-shadow: 0 0 1px #bbb;
  }

  .switch-gray-600 input:checked + .slider {
    background-color: #70657b;
  }

  .switch-gray-600 input:focus + .slider {
    box-shadow: 0 0 1px #70657b;
  }

  .switch-gray-700 input:checked + .slider {
    background-color: #665c70;
  }

  .switch-gray-700 input:focus + .slider {
    box-shadow: 0 0 1px #665c70;
  }

  .switch-gray-800 input:checked + .slider {
    background-color: #52495a;
  }

  .switch-gray-800 input:focus + .slider {
    box-shadow: 0 0 1px #52495a;
  }

  .switch-gray-900 input:checked + .slider {
    background-color: #47404f;
  }

  .switch-gray-900 input:focus + .slider {
    box-shadow: 0 0 1px #47404f;
  }

  [dir="rtl"] .checkbox,
  [dir="rtl"] .radio,
  [dir="rtl"] .radio {
    padding-left: 0px;
    padding-right: 28px;
  }
  [dir="rtl"] .checkbox .checkmark,
  [dir="rtl"] .radio .checkmark,
  [dir="rtl"] .radio .checkmark {
    left: auto;
    right: 0;
  }

  .icon-regular {
    font-size: 18px;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .link-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #47404f;
  }
  .link-icon i {
    margin: 0 8px;
  }

  .spinner-glow {
    display: inline-block;
    width: 1em;
    height: 1em;
    background: #dee2e6;
    border-radius: 50%;
    margin: 4px auto;
    border: 2px solid transparent;
    animation: glow 1s ease infinite;
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0.4em #a1a2a1, 0 0 0 0.1em #a1a2a1;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #605556;
    }
    100% {
      box-shadow: 0 0 0 0.4em #a1a2a1, 0 0 0 3.6em transparent;
    }
  }

  .spinner-glow-primary {
    background: rgba(102, 51, 153, 0.45);
    animation: glow-primary 1s ease infinite;
  }

  .spinner-glow-secondary {
    background: rgba(82, 73, 90, 0.45);
    animation: glow-secondary 1s ease infinite;
  }

  .spinner-glow-success {
    background: rgba(76, 175, 80, 0.45);
    animation: glow-success 1s ease infinite;
  }

  .spinner-glow-info {
    background: rgba(0, 52, 115, 0.45);
    animation: glow-info 1s ease infinite;
  }

  .spinner-glow-warning {
    background: rgba(255, 193, 7, 0.45);
    animation: glow-warning 1s ease infinite;
  }

  .spinner-glow-danger {
    background: rgba(244, 67, 54, 0.45);
    animation: glow-danger 1s ease infinite;
  }

  .spinner-glow-light {
    background: rgba(187, 187, 187, 0.45);
    animation: glow-light 1s ease infinite;
  }

  .spinner-glow-dark {
    background: rgba(71, 64, 79, 0.45);
    animation: glow-dark 1s ease infinite;
  }

  .spinner-glow-gray-100 {
    background: rgba(248, 249, 250, 0.45);
    animation: glow-gray-100 1s ease infinite;
  }

  .spinner-glow-gray-200 {
    background: rgba(238, 238, 238, 0.45);
    animation: glow-gray-200 1s ease infinite;
  }

  .spinner-glow-gray-300 {
    background: rgba(222, 226, 230, 0.45);
    animation: glow-gray-300 1s ease infinite;
  }

  .spinner-glow-gray-400 {
    background: rgba(206, 212, 218, 0.45);
    animation: glow-gray-400 1s ease infinite;
  }

  .spinner-glow-gray-500 {
    background: rgba(187, 187, 187, 0.45);
    animation: glow-gray-500 1s ease infinite;
  }

  .spinner-glow-gray-600 {
    background: rgba(112, 101, 123, 0.45);
    animation: glow-gray-600 1s ease infinite;
  }

  .spinner-glow-gray-700 {
    background: rgba(102, 92, 112, 0.45);
    animation: glow-gray-700 1s ease infinite;
  }

  .spinner-glow-gray-800 {
    background: rgba(82, 73, 90, 0.45);
    animation: glow-gray-800 1s ease infinite;
  }

  .spinner-glow-gray-900 {
    background: rgba(71, 64, 79, 0.45);
    animation: glow-gray-900 1s ease infinite;
  }

  @keyframes glow-primary {
    0% {
      box-shadow: 0 0 0 0.4em rgba(102, 51, 153, 0.45),
        0 0 0 0.1em rgba(102, 51, 153, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(102, 51, 153, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(102, 51, 153, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-secondary {
    0% {
      box-shadow: 0 0 0 0.4em rgba(82, 73, 90, 0.45),
        0 0 0 0.1em rgba(82, 73, 90, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(82, 73, 90, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(82, 73, 90, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-success {
    0% {
      box-shadow: 0 0 0 0.4em rgba(76, 175, 80, 0.45),
        0 0 0 0.1em rgba(76, 175, 80, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(76, 175, 80, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(76, 175, 80, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-info {
    0% {
      box-shadow: 0 0 0 0.4em rgba(0, 52, 115, 0.45),
        0 0 0 0.1em rgba(0, 52, 115, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(0, 52, 115, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(0, 52, 115, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-warning {
    0% {
      box-shadow: 0 0 0 0.4em rgba(255, 193, 7, 0.45),
        0 0 0 0.1em rgba(255, 193, 7, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(255, 193, 7, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(255, 193, 7, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-danger {
    0% {
      box-shadow: 0 0 0 0.4em rgba(244, 67, 54, 0.45),
        0 0 0 0.1em rgba(244, 67, 54, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(244, 67, 54, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(244, 67, 54, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-light {
    0% {
      box-shadow: 0 0 0 0.4em rgba(187, 187, 187, 0.45),
        0 0 0 0.1em rgba(187, 187, 187, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(187, 187, 187, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(187, 187, 187, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-dark {
    0% {
      box-shadow: 0 0 0 0.4em rgba(71, 64, 79, 0.45),
        0 0 0 0.1em rgba(71, 64, 79, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(71, 64, 79, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(71, 64, 79, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-100 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(248, 249, 250, 0.45),
        0 0 0 0.1em rgba(248, 249, 250, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(248, 249, 250, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(248, 249, 250, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-200 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(238, 238, 238, 0.45),
        0 0 0 0.1em rgba(238, 238, 238, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(238, 238, 238, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(238, 238, 238, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-300 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(222, 226, 230, 0.45),
        0 0 0 0.1em rgba(222, 226, 230, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(222, 226, 230, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(222, 226, 230, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-400 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(206, 212, 218, 0.45),
        0 0 0 0.1em rgba(206, 212, 218, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(206, 212, 218, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(206, 212, 218, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-500 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(187, 187, 187, 0.45),
        0 0 0 0.1em rgba(187, 187, 187, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(187, 187, 187, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(187, 187, 187, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-600 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(112, 101, 123, 0.45),
        0 0 0 0.1em rgba(112, 101, 123, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(112, 101, 123, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(112, 101, 123, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-700 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(102, 92, 112, 0.45),
        0 0 0 0.1em rgba(102, 92, 112, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(102, 92, 112, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(102, 92, 112, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-800 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(82, 73, 90, 0.45),
        0 0 0 0.1em rgba(82, 73, 90, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(82, 73, 90, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(82, 73, 90, 0.75), 0 0 0 3.6em transparent;
    }
  }

  @keyframes glow-gray-900 {
    0% {
      box-shadow: 0 0 0 0.4em rgba(71, 64, 79, 0.45),
        0 0 0 0.1em rgba(71, 64, 79, 0.45);
      transform: rotate(360deg);
    }
    50% {
      border-top-color: rgba(71, 64, 79, 0.9);
    }
    100% {
      box-shadow: 0 0 0 0.4em rgba(71, 64, 79, 0.75), 0 0 0 3.6em transparent;
    }
  }

  .spinner {
    display: inline-block;
    font-size: 10px;
    margin: auto;
    text-indent: -9999em;
    width: 4em;
    height: 4em;
    border-radius: 50%;
    position: relative;
    -webkit-animation: spin 1.4s infinite linear;
    animation: spin 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before {
    width: 50%;
    height: 50%;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  .spinner:after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .spinner-primary {
    background: #663399;
    background: -moz-linear-gradient(
      left,
      #663399 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #663399 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #663399 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #663399 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #663399 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-primary:before {
    background: #663399;
  }

  .spinner-secondary {
    background: #52495a;
    background: -moz-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #52495a 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-secondary:before {
    background: #52495a;
  }

  .spinner-success {
    background: #4caf50;
    background: -moz-linear-gradient(
      left,
      #4caf50 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #4caf50 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #4caf50 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #4caf50 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #4caf50 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-success:before {
    background: #4caf50;
  }

  .spinner-info {
    background: #003473;
    background: -moz-linear-gradient(
      left,
      #003473 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #003473 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #003473 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #003473 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #003473 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-info:before {
    background: #003473;
  }

  .spinner-warning {
    background: #ffc107;
    background: -moz-linear-gradient(
      left,
      #ffc107 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #ffc107 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #ffc107 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #ffc107 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #ffc107 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-warning:before {
    background: #ffc107;
  }

  .spinner-danger {
    background: #f44336;
    background: -moz-linear-gradient(
      left,
      #f44336 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #f44336 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #f44336 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #f44336 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #f44336 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-danger:before {
    background: #f44336;
  }

  .spinner-light {
    background: #bbb;
    background: -moz-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: -webkit-linear-gradient(
      left,
      #bbb 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: linear-gradient(to right, #bbb 10%, rgba(67, 236, 76, 0) 42%);
  }
  .spinner-light:before {
    background: #bbb;
  }

  .spinner-dark {
    background: #47404f;
    background: -moz-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #47404f 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-dark:before {
    background: #47404f;
  }

  .spinner-gray-100 {
    background: #f8f9fa;
    background: -moz-linear-gradient(
      left,
      #f8f9fa 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #f8f9fa 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #f8f9fa 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #f8f9fa 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #f8f9fa 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-100:before {
    background: #f8f9fa;
  }

  .spinner-gray-200 {
    background: #eee;
    background: -moz-linear-gradient(left, #eee 10%, rgba(67, 236, 76, 0) 42%);
    background: -webkit-linear-gradient(
      left,
      #eee 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #eee 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(left, #eee 10%, rgba(67, 236, 76, 0) 42%);
    background: linear-gradient(to right, #eee 10%, rgba(67, 236, 76, 0) 42%);
  }
  .spinner-gray-200:before {
    background: #eee;
  }

  .spinner-gray-300 {
    background: #dee2e6;
    background: -moz-linear-gradient(
      left,
      #dee2e6 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #dee2e6 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #dee2e6 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #dee2e6 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #dee2e6 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-300:before {
    background: #dee2e6;
  }

  .spinner-gray-400 {
    background: #ced4da;
    background: -moz-linear-gradient(
      left,
      #ced4da 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #ced4da 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #ced4da 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #ced4da 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #ced4da 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-400:before {
    background: #ced4da;
  }

  .spinner-gray-500 {
    background: #bbb;
    background: -moz-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: -webkit-linear-gradient(
      left,
      #bbb 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(left, #bbb 10%, rgba(67, 236, 76, 0) 42%);
    background: linear-gradient(to right, #bbb 10%, rgba(67, 236, 76, 0) 42%);
  }
  .spinner-gray-500:before {
    background: #bbb;
  }

  .spinner-gray-600 {
    background: #70657b;
    background: -moz-linear-gradient(
      left,
      #70657b 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #70657b 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #70657b 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #70657b 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #70657b 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-600:before {
    background: #70657b;
  }

  .spinner-gray-700 {
    background: #665c70;
    background: -moz-linear-gradient(
      left,
      #665c70 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #665c70 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #665c70 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #665c70 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #665c70 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-700:before {
    background: #665c70;
  }

  .spinner-gray-800 {
    background: #52495a;
    background: -moz-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #52495a 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #52495a 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-800:before {
    background: #52495a;
  }

  .spinner-gray-900 {
    background: #47404f;
    background: -moz-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: -o-linear-gradient(left, #47404f 10%, rgba(67, 236, 76, 0) 42%);
    background: -ms-linear-gradient(
      left,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
    background: linear-gradient(
      to right,
      #47404f 10%,
      rgba(67, 236, 76, 0) 42%
    );
  }
  .spinner-gray-900:before {
    background: #47404f;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .spinner-bubble {
    display: inline-block;
    font-size: 8px;
    margin: 30px auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: bubble-circle 1.3s infinite linear;
    animation: bubble-circle 1.3s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner-bubble-primary {
    color: #663399;
  }

  .spinner-bubble-secondary {
    color: #52495a;
  }

  .spinner-bubble-success {
    color: #4caf50;
  }

  .spinner-bubble-info {
    color: #003473;
  }

  .spinner-bubble-warning {
    color: #ffc107;
  }

  .spinner-bubble-danger {
    color: #f44336;
  }

  .spinner-bubble-light {
    color: #bbb;
  }

  .spinner-bubble-dark {
    color: #47404f;
  }

  .spinner-bubble-gray-100 {
    color: #f8f9fa;
  }

  .spinner-bubble-gray-200 {
    color: #eee;
  }

  .spinner-bubble-gray-300 {
    color: #dee2e6;
  }

  .spinner-bubble-gray-400 {
    color: #ced4da;
  }

  .spinner-bubble-gray-500 {
    color: #bbb;
  }

  .spinner-bubble-gray-600 {
    color: #70657b;
  }

  .spinner-bubble-gray-700 {
    color: #665c70;
  }

  .spinner-bubble-gray-800 {
    color: #52495a;
  }

  .spinner-bubble-gray-900 {
    color: #47404f;
  }

  @-webkit-keyframes bubble-circle {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }

  @keyframes bubble-circle {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }

  .loader-bubble,
  .loader-bubble:before,
  .loader-bubble:after {
    border-radius: 50%;
    width: 2em;
    height: 2em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: bubble-horz 1.8s infinite ease-in-out;
    animation: bubble-horz 1.8s infinite ease-in-out;
  }

  .loader-bubble {
    display: inline-block;
    font-size: 6px;
    margin: auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  .loader-bubble-primary {
    color: #663399;
  }

  .loader-bubble-secondary {
    color: #52495a;
  }

  .loader-bubble-success {
    color: #4caf50;
  }

  .loader-bubble-info {
    color: #003473;
  }

  .loader-bubble-warning {
    color: #ffc107;
  }

  .loader-bubble-danger {
    color: #f44336;
  }

  .loader-bubble-light {
    color: #bbb;
  }

  .loader-bubble-dark {
    color: #47404f;
  }

  .loader-bubble-gray-100 {
    color: #f8f9fa;
  }

  .loader-bubble-gray-200 {
    color: #eee;
  }

  .loader-bubble-gray-300 {
    color: #dee2e6;
  }

  .loader-bubble-gray-400 {
    color: #ced4da;
  }

  .loader-bubble-gray-500 {
    color: #bbb;
  }

  .loader-bubble-gray-600 {
    color: #70657b;
  }

  .loader-bubble-gray-700 {
    color: #665c70;
  }

  .loader-bubble-gray-800 {
    color: #52495a;
  }

  .loader-bubble-gray-900 {
    color: #47404f;
  }

  .loader-bubble:before,
  .loader-bubble:after {
    content: "";
    position: absolute;
    top: 0;
  }

  .loader-bubble:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .loader-bubble:after {
    left: 3.5em;
  }

  @-webkit-keyframes bubble-horz {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }

  @keyframes bubble-horz {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }

  .alert {
    border-radius: 10px;
  }
  .alert .close:focus {
    outline: 0;
  }

  .alert-card {
    border: none;
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #ced4da;
  }
  .alert-card.alert-success {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #4caf50;
  }
  .alert-card.alert-warning {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #ffc107;
  }
  .alert-card.alert-info {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #003473;
  }
  .alert-card.alert-danger {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #f44336;
  }
  .alert-card.alert-dark {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1),
      inset 0 2px 0 0 #70657b;
  }

  .swal2-container .swal2-modal {
    font-family: "Nunito", sans-serif;
  }

  .swal2-container .swal2-spacer {
    margin: 1.5rem 0;
  }

  .swal2-container .swal2-styled:not(.swal2-cancel) {
    background: #663399 !important;
    outline: none;
  }
  .swal2-container .swal2-styled:not(.swal2-cancel):focus {
    box-shadow: 0 0 0 0.2rem rgba(102, 51, 153, 0.5);
  }

  .sidebar-container {
    position: relative;
    overflow: hidden;
    min-height: 400px;
  }
  .sidebar-container .sidebar-content {
    position: relative;
    height: 100%;
    transition: all 0.3s ease-in;
  }
  .sidebar-container .sidebar-content:after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .sidebar-container .sidebar {
    position: absolute;
    top: 0;
    transition: all 0.3s ease-in;
    z-index: 60;
  }
  .sidebar-container .sidebar .sidebar-close {
    display: none;
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    z-index: 999;
  }

  @media (max-width: 767px) {
    .sidebar-container .sidebar {
      background: #fff;
    }
    .sidebar-container .sidebar .sidebar-close {
      display: block;
    }
  }

  img-cropper input[type="file"] {
    margin-bottom: 1rem;
  }

  .badge {
    font-weight: 600;
  }

  .badge-outline-primary {
    background: unset;
    border: 1px solid #663399;
    color: #663399;
  }

  .badge-outline-secondary {
    background: unset;
    border: 1px solid #52495a;
    color: #52495a;
  }

  .badge-outline-success {
    background: unset;
    border: 1px solid #4caf50;
    color: #4caf50;
  }

  .badge-outline-info {
    background: unset;
    border: 1px solid #003473;
    color: #003473;
  }

  .badge-outline-warning {
    background: unset;
    border: 1px solid #ffc107;
    color: #ffc107;
  }

  .badge-outline-danger {
    background: unset;
    border: 1px solid #f44336;
    color: #f44336;
  }

  .badge-outline-light {
    background: unset;
    border: 1px solid #bbb;
    color: #bbb;
  }

  .badge-outline-dark {
    background: unset;
    border: 1px solid #47404f;
    color: #47404f;
  }

  .badge-outline-gray-100 {
    background: unset;
    border: 1px solid #f8f9fa;
    color: #f8f9fa;
  }

  .badge-outline-gray-200 {
    background: unset;
    border: 1px solid #eee;
    color: #eee;
  }

  .badge-outline-gray-300 {
    background: unset;
    border: 1px solid #dee2e6;
    color: #dee2e6;
  }

  .badge-outline-gray-400 {
    background: unset;
    border: 1px solid #ced4da;
    color: #ced4da;
  }

  .badge-outline-gray-500 {
    background: unset;
    border: 1px solid #bbb;
    color: #bbb;
  }

  .badge-outline-gray-600 {
    background: unset;
    border: 1px solid #70657b;
    color: #70657b;
  }

  .badge-outline-gray-700 {
    background: unset;
    border: 1px solid #665c70;
    color: #665c70;
  }

  .badge-outline-gray-800 {
    background: unset;
    border: 1px solid #52495a;
    color: #52495a;
  }

  .badge-outline-gray-900 {
    background: unset;
    border: 1px solid #47404f;
    color: #47404f;
  }

  .badge-top-container {
    position: relative;
  }
  .badge-top-container .badge {
    position: absolute;
    top: 2px;
    right: 4px;
    border-radius: 10px;
  }

  .ul-badge-pill-primary {
    background: #663399;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-secondary {
    background: #52495a;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-success {
    background: #4caf50;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-info {
    background: #003473;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-warning {
    background: #ffc107;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-danger {
    background: #f44336;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-light {
    background: #bbb;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-dark {
    background: #47404f;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-100 {
    background: #f8f9fa;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-200 {
    background: #eee;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-300 {
    background: #dee2e6;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-400 {
    background: #ced4da;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-500 {
    background: #bbb;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-600 {
    background: #70657b;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-700 {
    background: #665c70;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-800 {
    background: #52495a;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .ul-badge-pill-gray-900 {
    background: #47404f;
    border-radius: 50%;
    width: 25px;
    height: 18px;
    color: #fff;
    line-height: 20px;
    font-size: 0.8rem;
  }

  .badge-round-primary {
    background: #663399;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-primary.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-primary.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-primary.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-primary.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-secondary {
    background: #52495a;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-secondary.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-secondary.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-secondary.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-secondary.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-success {
    background: #4caf50;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-success.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-success.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-success.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-success.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-info {
    background: #003473;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-info.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-info.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-info.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-info.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-warning {
    background: #ffc107;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-warning.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-warning.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-warning.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-warning.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-danger {
    background: #f44336;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-danger.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-danger.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-danger.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-danger.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-light {
    background: #bbb;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-light.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-light.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-light.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-light.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-dark {
    background: #47404f;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-dark.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-dark.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-dark.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-dark.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-100 {
    background: #f8f9fa;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-100.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-100.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-100.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-100.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-200 {
    background: #eee;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-200.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-200.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-200.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-200.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-300 {
    background: #dee2e6;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-300.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-300.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-300.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-300.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-400 {
    background: #ced4da;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-400.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-400.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-400.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-400.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-500 {
    background: #bbb;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-500.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-500.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-500.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-500.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-600 {
    background: #70657b;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-600.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-600.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-600.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-600.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-700 {
    background: #665c70;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-700.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-700.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-700.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-700.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-800 {
    background: #52495a;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-800.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-800.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-800.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-800.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-round-gray-900 {
    background: #47404f;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    justify-content: center;
  }
  .badge-round-gray-900.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-round-gray-900.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .badge-round-gray-900.sm {
    width: 18px;
    height: 18px;
    line-height: 13px;
    justify-content: center;
  }
  .badge-round-gray-900.pill {
    width: 45px;
    height: 18px;
    line-height: 13px;
    border-radius: 10px;
  }

  .badge-dot-primary {
    height: 4px;
    width: 4px;
    background-color: #663399;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-secondary {
    height: 4px;
    width: 4px;
    background-color: #52495a;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-success {
    height: 4px;
    width: 4px;
    background-color: #4caf50;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-info {
    height: 4px;
    width: 4px;
    background-color: #003473;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-warning {
    height: 4px;
    width: 4px;
    background-color: #ffc107;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-danger {
    height: 4px;
    width: 4px;
    background-color: #f44336;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-light {
    height: 4px;
    width: 4px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-dark {
    height: 4px;
    width: 4px;
    background-color: #47404f;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-100 {
    height: 4px;
    width: 4px;
    background-color: #f8f9fa;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-200 {
    height: 4px;
    width: 4px;
    background-color: #eee;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-300 {
    height: 4px;
    width: 4px;
    background-color: #dee2e6;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-400 {
    height: 4px;
    width: 4px;
    background-color: #ced4da;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-500 {
    height: 4px;
    width: 4px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-600 {
    height: 4px;
    width: 4px;
    background-color: #70657b;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-700 {
    height: 4px;
    width: 4px;
    background-color: #665c70;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-800 {
    height: 4px;
    width: 4px;
    background-color: #52495a;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .badge-dot-gray-900 {
    height: 4px;
    width: 4px;
    background-color: #47404f;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  .outline-round-primary {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #663399;
    color: #663399;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-secondary {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #52495a;
    color: #52495a;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-success {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #4caf50;
    color: #4caf50;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-info {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #003473;
    color: #003473;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-warning {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #ffc107;
    color: #ffc107;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-danger {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #f44336;
    color: #f44336;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-light {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #bbb;
    color: #bbb;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-dark {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #47404f;
    color: #47404f;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-100 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #f8f9fa;
    color: #f8f9fa;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-200 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #eee;
    color: #eee;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-300 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #dee2e6;
    color: #dee2e6;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-400 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #ced4da;
    color: #ced4da;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-500 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #bbb;
    color: #bbb;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-600 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #70657b;
    color: #70657b;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-700 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #665c70;
    color: #665c70;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-800 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #52495a;
    color: #52495a;
    line-height: 13px;
    justify-content: center;
  }

  .outline-round-gray-900 {
    background: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #47404f;
    color: #47404f;
    line-height: 13px;
    justify-content: center;
  }

  .badge-square-primary {
    background: #663399;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-primary.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-primary.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-secondary {
    background: #52495a;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-secondary.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-secondary.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-success {
    background: #4caf50;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-success.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-success.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-info {
    background: #003473;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-info.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-info.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-warning {
    background: #ffc107;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-warning.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-warning.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-danger {
    background: #f44336;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-danger.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-danger.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-light {
    background: #bbb;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-light.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-light.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-dark {
    background: #47404f;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-dark.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-dark.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-100 {
    background: #f8f9fa;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-100.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-100.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-200 {
    background: #eee;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-200.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-200.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-300 {
    background: #dee2e6;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-300.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-300.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-400 {
    background: #ced4da;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-400.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-400.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-500 {
    background: #bbb;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-500.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-500.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-600 {
    background: #70657b;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-600.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-600.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-700 {
    background: #665c70;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-700.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-700.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-800 {
    background: #52495a;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-800.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-800.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-square-gray-900 {
    background: #47404f;
    border-radius: 20%;
    width: 25px;
    height: 25px;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }
  .badge-square-gray-900.lg {
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .badge-square-gray-900.xl {
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .badge-round {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }

  .badge-round.badge-round-opacity-primary {
    background: #ccb3e6;
    color: #663399;
  }

  .badge-round.badge-round-opacity-secondary {
    background: #b8b0bf;
    color: #52495a;
  }

  .badge-round.badge-round-opacity-success {
    background: #d9eeda;
    color: #4caf50;
  }

  .badge-round.badge-round-opacity-info {
    background: #4096ff;
    color: #003473;
  }

  .badge-round.badge-round-opacity-warning {
    background: #fff4d3;
    color: #ffc107;
  }

  .badge-round.badge-round-opacity-danger {
    background: #fff8f7;
    color: #f44336;
  }

  .badge-round.badge-round-opacity-light {
    background: white;
    color: #bbb;
  }

  .badge-round.badge-round-opacity-dark {
    background: #ada5b6;
    color: #47404f;
  }

  .badge-round.badge-round-opacity-gray-100 {
    background: white;
    color: #f8f9fa;
  }

  .badge-round.badge-round-opacity-gray-200 {
    background: white;
    color: #eee;
  }

  .badge-round.badge-round-opacity-gray-300 {
    background: white;
    color: #dee2e6;
  }

  .badge-round.badge-round-opacity-gray-400 {
    background: white;
    color: #ced4da;
  }

  .badge-round.badge-round-opacity-gray-500 {
    background: white;
    color: #bbb;
  }

  .badge-round.badge-round-opacity-gray-600 {
    background: #d6d2da;
    color: #70657b;
  }

  .badge-round.badge-round-opacity-gray-700 {
    background: #ccc7d1;
    color: #665c70;
  }

  .badge-round.badge-round-opacity-gray-800 {
    background: #b8b0bf;
    color: #52495a;
  }

  .badge-round.badge-round-opacity-gray-900 {
    background: #ada5b6;
    color: #47404f;
  }

  .badge-square {
    border-radius: 20%;
    width: 40px;
    height: 40px;
    line-height: 30px;
    font-size: 1.2rem;
  }

  .badge-square.badge-square-opacity-primary {
    background: #ccb3e6;
    color: #663399;
  }

  .badge-square.badge-square-opacity-secondary {
    background: #b8b0bf;
    color: #52495a;
  }

  .badge-square.badge-square-opacity-success {
    background: #d9eeda;
    color: #4caf50;
  }

  .badge-square.badge-square-opacity-info {
    background: #4096ff;
    color: #003473;
  }

  .badge-square.badge-square-opacity-warning {
    background: #fff4d3;
    color: #ffc107;
  }

  .badge-square.badge-square-opacity-danger {
    background: #fff8f7;
    color: #f44336;
  }

  .badge-square.badge-square-opacity-light {
    background: white;
    color: #bbb;
  }

  .badge-square.badge-square-opacity-dark {
    background: #ada5b6;
    color: #47404f;
  }

  .badge-square.badge-square-opacity-gray-100 {
    background: white;
    color: #f8f9fa;
  }

  .badge-square.badge-square-opacity-gray-200 {
    background: white;
    color: #eee;
  }

  .badge-square.badge-square-opacity-gray-300 {
    background: white;
    color: #dee2e6;
  }

  .badge-square.badge-square-opacity-gray-400 {
    background: white;
    color: #ced4da;
  }

  .badge-square.badge-square-opacity-gray-500 {
    background: white;
    color: #bbb;
  }

  .badge-square.badge-square-opacity-gray-600 {
    background: #d6d2da;
    color: #70657b;
  }

  .badge-square.badge-square-opacity-gray-700 {
    background: #ccc7d1;
    color: #665c70;
  }

  .badge-square.badge-square-opacity-gray-800 {
    background: #b8b0bf;
    color: #52495a;
  }

  .badge-square.badge-square-opacity-gray-900 {
    background: #ada5b6;
    color: #47404f;
  }

  .w-badge {
    border-radius: 0;
    padding: 4px;
    color: #fff;
  }

  .r-badge {
    padding: 4px;
  }

  .popover {
    border: none;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
  }
  .popover .arrow::before {
    border-color: rgba(0, 0, 0, 0);
  }

  ngb-rating .star {
    position: relative;
    display: inline-block;
  }

  ngb-rating .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
  }

  .rating-primary {
    color: #663399;
  }
  .rating-primary .star {
    color: #bbb;
  }
  .rating-primary .full,
  .rating-primary .half {
    color: #663399;
  }

  .rating-secondary {
    color: #52495a;
  }
  .rating-secondary .star {
    color: #bbb;
  }
  .rating-secondary .full,
  .rating-secondary .half {
    color: #52495a;
  }

  .rating-success {
    color: #4caf50;
  }
  .rating-success .star {
    color: #bbb;
  }
  .rating-success .full,
  .rating-success .half {
    color: #4caf50;
  }

  .rating-info {
    color: #003473;
  }
  .rating-info .star {
    color: #bbb;
  }
  .rating-info .full,
  .rating-info .half {
    color: #003473;
  }

  .rating-warning {
    color: #ffc107;
  }
  .rating-warning .star {
    color: #bbb;
  }
  .rating-warning .full,
  .rating-warning .half {
    color: #ffc107;
  }

  .rating-danger {
    color: #f44336;
  }
  .rating-danger .star {
    color: #bbb;
  }
  .rating-danger .full,
  .rating-danger .half {
    color: #f44336;
  }

  .rating-light {
    color: #bbb;
  }
  .rating-light .star {
    color: #bbb;
  }
  .rating-light .full,
  .rating-light .half {
    color: #bbb;
  }

  .rating-dark {
    color: #47404f;
  }
  .rating-dark .star {
    color: #bbb;
  }
  .rating-dark .full,
  .rating-dark .half {
    color: #47404f;
  }

  .rating-gray-100 {
    color: #f8f9fa;
  }
  .rating-gray-100 .star {
    color: #bbb;
  }
  .rating-gray-100 .full,
  .rating-gray-100 .half {
    color: #f8f9fa;
  }

  .rating-gray-200 {
    color: #eee;
  }
  .rating-gray-200 .star {
    color: #bbb;
  }
  .rating-gray-200 .full,
  .rating-gray-200 .half {
    color: #eee;
  }

  .rating-gray-300 {
    color: #dee2e6;
  }
  .rating-gray-300 .star {
    color: #bbb;
  }
  .rating-gray-300 .full,
  .rating-gray-300 .half {
    color: #dee2e6;
  }

  .rating-gray-400 {
    color: #ced4da;
  }
  .rating-gray-400 .star {
    color: #bbb;
  }
  .rating-gray-400 .full,
  .rating-gray-400 .half {
    color: #ced4da;
  }

  .rating-gray-500 {
    color: #bbb;
  }
  .rating-gray-500 .star {
    color: #bbb;
  }
  .rating-gray-500 .full,
  .rating-gray-500 .half {
    color: #bbb;
  }

  .rating-gray-600 {
    color: #70657b;
  }
  .rating-gray-600 .star {
    color: #bbb;
  }
  .rating-gray-600 .full,
  .rating-gray-600 .half {
    color: #70657b;
  }

  .rating-gray-700 {
    color: #665c70;
  }
  .rating-gray-700 .star {
    color: #bbb;
  }
  .rating-gray-700 .full,
  .rating-gray-700 .half {
    color: #665c70;
  }

  .rating-gray-800 {
    color: #52495a;
  }
  .rating-gray-800 .star {
    color: #bbb;
  }
  .rating-gray-800 .full,
  .rating-gray-800 .half {
    color: #52495a;
  }

  .rating-gray-900 {
    color: #47404f;
  }
  .rating-gray-900 .star {
    color: #bbb;
  }
  .rating-gray-900 .full,
  .rating-gray-900 .half {
    color: #47404f;
  }

  .search-ui {
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 0.75rem 1.5rem 1.5rem 4.5rem;
    z-index: 9999;
    display: none;
  }
  .search-ui.open {
    display: block;
    -webkit-animation-name: slideInDown;
    -moz-animation-name: slideInDown;
    -ms-animation-name: slideInDown;
    -o-animation-name: slideInDown;
    animation-name: slideInDown;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-duration: 0.3s;
    -moz-animation-duration: 0.3s;
    -ms-animation-duration: 0.3s;
    -o-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-delay: 0;
    -moz-animation-delay: 0;
    -ms-animation-delay: 0;
    -o-animation-delay: 0;
    animation-delay: 0;
    -webkit-animation-timing-function: ease;
    -moz-animation-timing-function: ease;
    -ms-animation-timing-function: ease;
    -o-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .search-ui .search-header .logo {
    height: 64px;
    width: auto;
  }
  .search-ui input.search-input {
    font-size: 4rem;
    font-weight: 600;
    border: 0;
    margin-bottom: 1.5rem;
  }
  .search-ui input.search-input:focus {
    outline: 0;
  }
  .search-ui input.search-input::placeholder {
    color: #ced4da;
  }
  .search-ui .search-title {
    margin-bottom: 1.25rem;
  }
  .search-ui .search-title span {
    font-weight: 600;
  }

  @media (max-width: 767px) {
    .search-ui {
      padding: 1rem;
    }
  }

  /* Tagging Basic Style */
  .tagging {
    border: 1px solid #dee2e6;
    font-size: 1em;
    height: auto;
    padding: 10px 10px 15px;
    border-radius: 4px;
  }

  .tagging.editable {
    cursor: text;
  }

  .tag {
    background: none repeat scroll 0 0 #663399;
    border-radius: 2px;
    color: white;
    cursor: default;
    display: inline-block;
    position: relative;
    white-space: nowrap;
    padding: 4px 20px 4px 0;
    margin: 5px 10px 0 0;
  }

  .tag span {
    background: none repeat scroll 0 0 #592d86;
    border-radius: 2px 0 0 2px;
    margin-right: 5px;
    padding: 5px 10px 5px;
  }

  .tag .tag-i {
    color: white;
    cursor: pointer;
    font-size: 1.3em;
    height: 0;
    line-height: 0.1em;
    position: absolute;
    right: 5px;
    top: 0.7em;
    text-align: center;
    width: 10px;
  }

  .tag .tag-i:hover {
    color: black;
    text-decoration: underline;
  }

  .type-zone {
    border: 0 none;
    height: auto;
    width: auto;
    min-width: 20px;
    display: inline-block;
  }

  .type-zone:focus {
    outline: none;
  }

  .customizer {
    position: fixed;
    z-index: 9999;
    top: 100px;
    right: -380px;
    transition: 0.3s all ease-in-out;
    width: 380px;
  }
  .customizer.open {
    right: 0;
  }
  .customizer .handle {
    position: absolute;
    display: flex;
    top: 8px;
    left: -36px;
    background: #663399;
    cursor: pointer;
    padding: 10px 8px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.06);
    color: #fff;
    font-size: 20px;
    transition: 0.3s all ease-in-out;
  }
  .customizer .handle:hover {
    background: #663399;
    color: #fff;
  }
  .customizer .customizer-body {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
    max-height: calc(100vh - 140px);
    overflow-y: scroll;
    overflow-x: visible;
  }
  .customizer .customizer-body .layouts {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }
  .customizer .customizer-body .layouts .layout-box {
    position: relative;
    margin: 0 8px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.03);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    width: calc(50% - 16px);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .customizer .customizer-body .layouts .layout-box img {
    width: 180px;
  }
  .customizer .customizer-body .layouts .layout-box i {
    display: none;
    position: absolute;
    top: 0;
    text-align: center;
    right: 0;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
    width: 32px;
    color: #ffffff;
    background: #663399;
    border-radius: 0 0 0 6px;
  }
  .customizer .customizer-body .layouts .layout-box.active {
    border: 1px solid #663399;
  }
  .customizer .customizer-body .layouts .layout-box.active i {
    display: inline-block;
  }
  .customizer .customizer-body .colors {
    display: flex;
    flex-wrap: wrap;
  }
  .customizer .customizer-body .colors .color {
    width: 36px;
    height: 36px;
    display: inline-block;
    border-radius: 50%;
    margin: 8px;
    text-align: center;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.03);
    cursor: pointer;
  }
  .customizer .customizer-body .colors .color.purple {
    background: #663399;
  }
  .customizer .customizer-body .colors .color.blue {
    background: #2f47c2;
  }
  .customizer .customizer-body .colors .color i {
    display: none;
    color: #ffffff;
    font-size: 18px;
    line-height: 36px;
  }
  .customizer .customizer-body .colors .color.active i {
    display: unset;
  }

  @media (max-width: 767px) {
    .customizer {
      width: 280px;
      right: -280px;
    }
  }

  [dir="rtl"] .customizer {
    right: auto;
    left: -380px;
  }
  [dir="rtl"] .customizer.open {
    right: auto;
    left: 0;
  }
  [dir="rtl"] .customizer .handle {
    top: 8px;
    left: auto;
    right: -36px;
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 4px;
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.06);
  }

  .slider-default {
    background: #fafafa !important;
    border-radius: 15px !important;
    border: 0px solid #d3d3d3 !important;
    box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;
    height: 10px !important;
  }
  .slider-default .noUi-value-horizontal {
    display: none;
  }
  .slider-default .noUi-handle {
    width: 20px !important;
    height: 20px !important;
    left: -5px !important;
    top: -5px !important;
    border-radius: 50%;
    border: 5px solid #663399;
    box-shadow: none;
    cursor: pointer;
  }
  .slider-default .noUi-handle:after,
  .slider-default .noUi-handle:before {
    content: none !important;
    display: block;
    position: absolute;
    height: 14px;
    width: 1px;
    background: #e8e7e6;
    left: 14px;
    top: 6px;
  }
  .slider-default .noUi-handle:focus {
    outline: none;
  }
  .slider-default .noUi-connect {
    background: #663399;
    border-radius: 15px !important;
    box-shadow: inset 0 0 3px rgba(51, 51, 51, 0.45);
    -webkit-transition: background 450ms;
    transition: background 450ms;
  }

  .square-default {
    background: #fafafa !important;
    border-radius: 15px !important;
    border: 0px solid #d3d3d3 !important;
    box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;
    height: 10px !important;
  }
  .square-default .noUi-handle {
    width: 20px !important;
    height: 20px !important;
    border: 5px solid #663399;
    box-shadow: none;
    cursor: pointer;
  }
  .square-default .noUi-handle:after,
  .square-default .noUi-handle:before {
    content: " " !important;
    display: none;
    position: absolute;
    height: 14px;
    width: 1px;
    background: #e8e7e6;
    left: 14px;
    top: 6px;
  }
  .square-default .noUi-handle:focus {
    outline: none;
  }
  .square-default .noUi-connect {
    background: #663399;
    border-radius: 15px !important;
    box-shadow: inset 0 0 3px rgba(51, 51, 51, 0.45);
    -webkit-transition: background 450ms;
    transition: background 450ms;
  }

  .slider-primary .noUi-connect {
    background: #663399;
  }

  .slider-primary .noUi-handle {
    border: 5px solid #663399;
  }

  .slider-secondary .noUi-connect {
    background: #52495a;
  }

  .slider-secondary .noUi-handle {
    border: 5px solid #52495a;
  }

  .slider-success .noUi-connect {
    background: #4caf50;
  }

  .slider-success .noUi-handle {
    border: 5px solid #4caf50;
  }

  .slider-info .noUi-connect {
    background: #003473;
  }

  .slider-info .noUi-handle {
    border: 5px solid #003473;
  }

  .slider-warning .noUi-connect {
    background: #ffc107;
  }

  .slider-warning .noUi-handle {
    border: 5px solid #ffc107;
  }

  .slider-danger .noUi-connect {
    background: #f44336;
  }

  .slider-danger .noUi-handle {
    border: 5px solid #f44336;
  }

  .slider-light .noUi-connect {
    background: #bbb;
  }

  .slider-light .noUi-handle {
    border: 5px solid #bbb;
  }

  .slider-dark .noUi-connect {
    background: #47404f;
  }

  .slider-dark .noUi-handle {
    border: 5px solid #47404f;
  }

  .slider-gray-100 .noUi-connect {
    background: #f8f9fa;
  }

  .slider-gray-100 .noUi-handle {
    border: 5px solid #f8f9fa;
  }

  .slider-gray-200 .noUi-connect {
    background: #eee;
  }

  .slider-gray-200 .noUi-handle {
    border: 5px solid #eee;
  }

  .slider-gray-300 .noUi-connect {
    background: #dee2e6;
  }

  .slider-gray-300 .noUi-handle {
    border: 5px solid #dee2e6;
  }

  .slider-gray-400 .noUi-connect {
    background: #ced4da;
  }

  .slider-gray-400 .noUi-handle {
    border: 5px solid #ced4da;
  }

  .slider-gray-500 .noUi-connect {
    background: #bbb;
  }

  .slider-gray-500 .noUi-handle {
    border: 5px solid #bbb;
  }

  .slider-gray-600 .noUi-connect {
    background: #70657b;
  }

  .slider-gray-600 .noUi-handle {
    border: 5px solid #70657b;
  }

  .slider-gray-700 .noUi-connect {
    background: #665c70;
  }

  .slider-gray-700 .noUi-handle {
    border: 5px solid #665c70;
  }

  .slider-gray-800 .noUi-connect {
    background: #52495a;
  }

  .slider-gray-800 .noUi-handle {
    border: 5px solid #52495a;
  }

  .slider-gray-900 .noUi-connect {
    background: #47404f;
  }

  .slider-gray-900 .noUi-handle {
    border: 5px solid #47404f;
  }

  .slider-custom .noUi-connect {
    background: #3fb8af;
  }

  .slider-custom .noUi-handle {
    border: 5px solid #b2dfdb;
  }

  .slider-extra-large {
    height: 14px !important;
  }
  .slider-extra-large .noUi-handle {
    width: 28px !important;
    height: 28px !important;
    top: -7px !important;
  }

  .slider-large {
    height: 12px !important;
  }
  .slider-large .noUi-handle {
    width: 24px !important;
    height: 24px !important;
    top: -6px !important;
  }

  .slider-small {
    height: 6px !important;
  }
  .slider-small .noUi-handle {
    top: -7px !important;
  }

  .slider-extra-small {
    height: 3px !important;
  }
  .slider-extra-small .noUi-handle {
    top: -8px !important;
  }

  .circle-filled.slider-primary .noUi-handle {
    background: #663399;
  }

  .circle-filled.slider-secondary .noUi-handle {
    background: #52495a;
  }

  .circle-filled.slider-success .noUi-handle {
    background: #4caf50;
  }

  .circle-filled.slider-info .noUi-handle {
    background: #003473;
  }

  .circle-filled.slider-warning .noUi-handle {
    background: #ffc107;
  }

  .circle-filled.slider-danger .noUi-handle {
    background: #f44336;
  }

  .circle-filled.slider-light .noUi-handle {
    background: #bbb;
  }

  .circle-filled.slider-dark .noUi-handle {
    background: #47404f;
  }

  .circle-filled.slider-gray-100 .noUi-handle {
    background: #f8f9fa;
  }

  .circle-filled.slider-gray-200 .noUi-handle {
    background: #eee;
  }

  .circle-filled.slider-gray-300 .noUi-handle {
    background: #dee2e6;
  }

  .circle-filled.slider-gray-400 .noUi-handle {
    background: #ced4da;
  }

  .circle-filled.slider-gray-500 .noUi-handle {
    background: #bbb;
  }

  .circle-filled.slider-gray-600 .noUi-handle {
    background: #70657b;
  }

  .circle-filled.slider-gray-700 .noUi-handle {
    background: #665c70;
  }

  .circle-filled.slider-gray-800 .noUi-handle {
    background: #52495a;
  }

  .circle-filled.slider-gray-900 .noUi-handle {
    background: #47404f;
  }

  .square-default.slider-primary .noUi-handle {
    background: #663399;
  }

  .square-default.slider-secondary .noUi-handle {
    background: #52495a;
  }

  .square-default.slider-success .noUi-handle {
    background: #4caf50;
  }

  .square-default.slider-info .noUi-handle {
    background: #003473;
  }

  .square-default.slider-warning .noUi-handle {
    background: #ffc107;
  }

  .square-default.slider-danger .noUi-handle {
    background: #f44336;
  }

  .square-default.slider-light .noUi-handle {
    background: #bbb;
  }

  .square-default.slider-dark .noUi-handle {
    background: #47404f;
  }

  .square-default.slider-gray-100 .noUi-handle {
    background: #f8f9fa;
  }

  .square-default.slider-gray-200 .noUi-handle {
    background: #eee;
  }

  .square-default.slider-gray-300 .noUi-handle {
    background: #dee2e6;
  }

  .square-default.slider-gray-400 .noUi-handle {
    background: #ced4da;
  }

  .square-default.slider-gray-500 .noUi-handle {
    background: #bbb;
  }

  .square-default.slider-gray-600 .noUi-handle {
    background: #70657b;
  }

  .square-default.slider-gray-700 .noUi-handle {
    background: #665c70;
  }

  .square-default.slider-gray-800 .noUi-handle {
    background: #52495a;
  }

  .square-default.slider-gray-900 .noUi-handle {
    background: #47404f;
  }

  .square-default.slider-custom .noUi-handle,
  .circle-filled.slider-custom .noUi-handle {
    background: #b2dfdb;
  }

  .vertical-slider-example {
    display: inline-block;
  }

  .noUi-vertical {
    width: 10px !important;
    height: 150px !important;
  }

  .toast-primary {
    background-color: #663399 !important;
  }

  .toast-secondary {
    background-color: #52495a !important;
  }

  .toast-success {
    background-color: #4caf50 !important;
  }

  .toast-info {
    background-color: #003473 !important;
  }

  .toast-warning {
    background-color: #ffc107 !important;
  }

  .toast-danger {
    background-color: #f44336 !important;
  }

  .toast-light {
    background-color: #bbb !important;
  }

  .toast-dark {
    background-color: #47404f !important;
  }

  .toast-gray-100 {
    background-color: #f8f9fa !important;
  }

  .toast-gray-200 {
    background-color: #eee !important;
  }

  .toast-gray-300 {
    background-color: #dee2e6 !important;
  }

  .toast-gray-400 {
    background-color: #ced4da !important;
  }

  .toast-gray-500 {
    background-color: #bbb !important;
  }

  .toast-gray-600 {
    background-color: #70657b !important;
  }

  .toast-gray-700 {
    background-color: #665c70 !important;
  }

  .toast-gray-800 {
    background-color: #52495a !important;
  }

  .toast-gray-900 {
    background-color: #47404f !important;
  }

  .dropzone {
    min-height: 150px;
    border: 2px dashed #673ab75e !important;
    background: #f5f5f5 !important;
    padding: 20px 20px;
  }

  .nav-tabs {
    border-bottom: 1px solid #663399;
  }

  .nav-tabs .nav-item .nav-link.active {
    border: 1px solid transparent;
    background: rgba(102, 51, 153, 0.1);
    border-color: #663399 #663399 #fff;
  }

  .dropdown-toggle:after {
    display: inline-block;
    width: 0;
    height: 0;
    right: 5px;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  #calendar {
    float: right;
    width: 100%;
  }

  #external-events h4 {
    font-size: 16px;
    margin-top: 0;
    padding-top: 1em;
  }

  #external-events .fc-event {
    margin: 2px 0;
    cursor: move;
  }

  .create_event_wrap p {
    margin: 1.5em 0;
    font-size: 11px;
    color: #666;
  }

  .create_event_wrap p input {
    margin: 0;
    vertical-align: middle;
  }

  .fc-event {
    position: relative;
    display: block;
    font-size: 0.85em;
    line-height: 1.3;
    border-radius: 3px;
    border: 0px solid #663399 !important;
  }

  a.fc-day-grid-event {
    background: #663399;
    padding: 5px;
  }

  th.fc-day-header {
    border-bottom-width: 2px;
    padding: 10px 0px;
    display: table-cell;
    background: #f5f5f5;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  td.fc-head-container {
    padding: 0px !important;
  }

  .fc-toolbar h2 {
    margin: 0;
    font-weight: bold;
  }

  span.fa {
    font-family: "iconsmind" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }

  span.fa.fa-chevron-left:before {
    content: "\f077";
  }

  span.fa.fa-chevron-right:before {
    content: "\f07d";
  }

  .main-header {
    position: fixed;
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    z-index: 100;
  }
  .main-header .menu-toggle {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-right: 12px;
  }
  .main-header .menu-toggle div {
    width: 24px;
    height: 1px;
    background: #47404f;
    margin: 3px 0;
  }
  .main-header .search-bar {
    display: flex;
    align-items: center;
    justify-content: left;
    background: #f8f9fa;
    border: 1px solid #eee;
    border-radius: 20px;
    position: relative;
    width: 230px;
    height: 40px;
  }
  .main-header .search-bar input {
    background: transparent;
    border: 0;
    color: #212121;
    font-size: 0.8rem;
    line-height: 2;
    height: 100%;
    outline: initial !important;
    padding: 0.5rem 1rem;
    width: calc(100% - 32px);
  }
  .main-header .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .main-header .logo {
    width: 120px;
  }
  .main-header .logo img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
  }
  .main-header .show .header-icon {
    background: #f8f9fa;
  }
  .main-header .header-icon {
    font-size: 19px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    margin: 0 2px;
  }
  .main-header .header-icon:hover {
    background: #f8f9fa;
  }
  .main-header .header-icon.dropdown-toggle:after {
    display: none;
  }
  .main-header .header-part-right {
    display: flex;
    align-items: center;
  }
  .main-header .header-part-right .user {
    margin-right: 2rem;
  }
  .main-header .header-part-right .user img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
  }
  .main-header .notification-dropdown {
    padding: 0;
    max-height: 260px;
    cursor: pointer;
  }
  .main-header .notification-dropdown .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0;
    height: 72px;
    border-bottom: 1px solid #dee2e6;
  }
  .main-header .notification-dropdown .dropdown-item .notification-icon {
    background: #eee;
    height: 100%;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-header .notification-dropdown .dropdown-item .notification-icon i {
    font-size: 18px;
  }
  .main-header .notification-dropdown .dropdown-item .notification-details {
    padding: 0.25rem 0.75rem;
  }
  .main-header .notification-dropdown .dropdown-item:active {
    color: inherit;
    background: inherit;
  }

  @media (max-width: 991px) {
    .main-header .search-bar {
      width: 180px;
    }
    .main-header .menu-toggle {
      width: 24px;
      margin-right: 36px;
    }
  }

  @media (max-width: 615px) {
    .main-header .header-part-right .user {
      margin-right: 0rem;
    }
  }

  @media (max-width: 580px) {
    .main-header {
      height: 70px;
      padding: 0 1.5rem;
    }
    .main-header .logo {
      width: 60px;
    }
    .main-header .search-bar {
      display: none;
    }
    .main-header .menu-toggle {
      width: 60px;
    }
    .main-header .header-part-right .user {
      margin-right: 0;
      padding-right: 0;
    }
    .notification-dropdown {
      left: 10px !important;
    }
  }

  @media (max-width: 360px) {
    .main-header .menu-toggle {
      margin: 0;
    }
  }

  .layout-horizontal-bar .header-topnav {
    margin: 0;
    padding: 0;
    background-color: #fff;
    position: relative;
    z-index: 90;
    position: fixed;
    width: 100%;
    /* height: 80px; */
    top: 80px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  }
  .layout-horizontal-bar .header-topnav .container {
    padding: 0;
  }
  .layout-horizontal-bar .header-topnav .topbar-branding {
    float: left;
    height: 48px;
    padding: 8px;
    margin: 0 8px;
  }
  .layout-horizontal-bar .header-topnav .topbar-branding img {
    height: 100%;
    width: auto;
  }
  .layout-horizontal-bar .header-topnav .ps {
    overflow: initial !important;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
    -ms-touch-action: auto;
  }
  .layout-horizontal-bar .header-topnav .topnav {
    display: flex;
    align-items: center;
    height: auto;
  }
  .layout-horizontal-bar .header-topnav .header-topnav-right {
    float: right;
    height: 48px;
    display: flex;
    align-items: center;
    padding-right: 0.67rem;
  }
  .layout-horizontal-bar .header-topnav .topnav:after {
    content: "";
    display: table;
    clear: both;
  }
  .layout-horizontal-bar .header-topnav .topnav a {
    color: #333 !important;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  .layout-horizontal-bar .header-topnav .topnav label.menu-toggle {
    height: 48px;
    width: 48px;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 50%;
  }
  .layout-horizontal-bar .header-topnav .topnav label.menu-toggle .mat-icon {
    font-size: 24px;
  }
  .layout-horizontal-bar .header-topnav .topnav .toggle,
  .layout-horizontal-bar .header-topnav .topnav [id^="drop"] {
    display: none;
  }
  .layout-horizontal-bar .header-topnav .topnav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
  }
  .layout-horizontal-bar .header-topnav .topnav ul:not(.menu) {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0), 0 4px 8px rgba(0, 0, 0, 0.28);
  }
  .layout-horizontal-bar .header-topnav .topnav ul.menu {
    float: left;
    height: 48px;
    padding-right: 45px;
  }
  .layout-horizontal-bar .header-topnav .topnav ul.menu > li {
    float: left;
  }
  .layout-horizontal-bar .header-topnav .topnav ul.menu > li > div > a,
  .layout-horizontal-bar .header-topnav .topnav ul.menu > li > div > div {
    border-bottom: 2px solid;
    height: 48px;
    box-sizing: border-box;
    border-color: transparent;
    margin: 0 6px;
  }
  .layout-horizontal-bar .header-topnav .topnav ul li {
    margin: 0px;
    display: inline-block;
  }
  .layout-horizontal-bar .header-topnav .topnav a,
  .layout-horizontal-bar .header-topnav .topnav label {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px 20px;
    height: 44px;
    font-size: 0.875rem;
    text-decoration: none;
    box-sizing: border-box;
    cursor: pointer;
  }
  .layout-horizontal-bar .header-topnav .topnav ul li ul li:hover,
  .layout-horizontal-bar .header-topnav .topnav ul li ul li.open {
    background: #eeeeee;
  }
  .layout-horizontal-bar .header-topnav .topnav ul ul {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    background: #ffffff;
    color: rgba(0, 0, 0, 0.87);
    /* has to be the same number as the "line-height" of "nav a" */
    top: 48px;
    transform: translateY(-100px);
    transition: all 0.3s ease-in-out;
    z-index: -1;
    border-radius: 5px;
  }
  .layout-horizontal-bar .header-topnav .topnav ul li:hover > div > div > ul,
  .layout-horizontal-bar .header-topnav .topnav ul li:hover > div > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .layout-horizontal-bar .header-topnav .topnav ul ul li {
    width: 170px;
    float: none;
    display: list-item;
    position: relative;
  }
  .layout-horizontal-bar .header-topnav .topnav ul ul ul {
    top: 0;
    left: 170px;
  }
  .layout-horizontal-bar .header-topnav .topnav ul ul ul li {
    position: relative;
    top: 0;
  }
  .layout-horizontal-bar .header-topnav .topnav li > a:after {
    content: " +";
  }
  .layout-horizontal-bar .header-topnav .topnav li > a:only-child:after {
    content: "";
  }

  @media (max-width: 959px) {
    .header-topnav-right {
      position: absolute;
      right: 6px;
      top: 0;
    }
  }

  /* Media Queries
  --------------------------------------------- */
  @media only screen and (max-width: 768px) {
    .layout-horizontal-bar .header-topnav {
      margin: 0;
      padding: 0;
      background-color: #fff;
      position: relative;
      z-index: 10;
      position: fixed;
      width: 200px;
      top: 70px;
      height: 100%;
      padding-top: 20px;
      left: -200px;
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
      transition: all 0.5s ease-in-out;
    }
    .layout-horizontal-bar .header-topnav .ps {
      overflow: hidden !important;
      overflow-anchor: none;
      -ms-overflow-style: none;
      touch-action: auto;
      -ms-touch-action: auto;
    }
    .layout-horizontal-bar .topnav {
      margin: 0;
      max-height: calc(100vh - 80px) !important;
      /* Hide menus on hover */
    }
    .layout-horizontal-bar .topnav .menu {
      height: auto !important;
      padding-right: 0px !important;
      width: 100%;
    }
    .layout-horizontal-bar .topnav .menu li a {
      border: none !important;
    }
    .layout-horizontal-bar .topnav ul.menu {
      float: left;
      padding-left: 0px;
    }
    .layout-horizontal-bar .topnav ul.menu > li {
      float: left;
    }
    .layout-horizontal-bar .topnav ul.menu > li > div > a,
    .layout-horizontal-bar .topnav ul.menu > li > div > div {
      border-bottom: 2px solid;
      height: auto !important;
      box-sizing: border-box;
      border-color: transparent;
      margin: 0 6px;
    }
    .layout-horizontal-bar .topnav .toggle {
      display: flex;
      text-decoration: none;
      border: none;
    }
    .layout-horizontal-bar .topnav ul {
      transform: translateY(0px) !important;
      transition: max-height 0.3s ease-in-out;
    }
    .layout-horizontal-bar .topnav [id^="drop"]:checked + ul {
      opacity: 1;
      visibility: visible;
      max-height: 2000px;
    }
    .layout-horizontal-bar .topnav [id^="drop"]:checked + ul.menu {
      max-height: 300px;
      overflow-y: scroll;
    }
    .layout-horizontal-bar .topnav ul li {
      position: relative;
      opacity: 1;
      visibility: visible;
      width: 100%;
      z-index: 1;
    }
    .layout-horizontal-bar .topnav ul ul .toggle,
    .layout-horizontal-bar .topnav ul ul a {
      padding: 0 40px;
    }
    .layout-horizontal-bar .topnav ul ul ul a {
      padding: 0 80px;
    }
    .layout-horizontal-bar .topnav ul li ul li .toggle,
    .layout-horizontal-bar .topnav ul ul a,
    .layout-horizontal-bar .topnav ul ul ul a {
      padding: 14px 20px;
    }
    .layout-horizontal-bar .topnav ul ul {
      opacity: 1 !important;
      visibility: hidden !important;
      max-height: 0px;
      position: relative !important;
      background: #ffffff;
      color: rgba(0, 0, 0, 0.87);
      /* has to be the same number as the "line-height" of "nav a" */
      top: 0px !important;
      transform: translateY(-100px);
      transition: all 1s ease-in-out !important;
      z-index: 99 !important;
      border-radius: 5px;
      overflow: hidden;
      left: 0px;
    }
    .layout-horizontal-bar .topnav ul li:hover > div > div > ul,
    .layout-horizontal-bar .topnav ul li:hover > div > ul {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(0);
      transition: all 0.3s ease-in-out !important;
      max-height: 400px;
    }
    .layout-horizontal-bar .topnav ul ul li {
      opacity: 1;
      visibility: visible;
      width: 100% !important;
    }
    .layout-horizontal-bar .topnav ul:not(.menu) {
      box-shadow: none !important;
      margin-left: 5px;
      border-left: 1px dashed #eee;
    }
    .layout-horizontal-bar .topnav ul ul ul {
      left: 0;
    }
    .layout-horizontal-bar .topnav ul ul ul li {
      position: static;
    }
  }

  @media all and (max-width: 330px) {
    .topnav ul li {
      display: block;
      width: 94%;
    }
  }

  [dir="rtl"] .topnav a .mat-icon,
  [dir="rtl"] .topnav label .mat-icon {
    margin-right: 0;
    margin-left: 2px;
  }

  .app-footer {
    margin-top: 2rem;
    background: #eee;
    padding: 1.25rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .app-footer .footer-bottom {
    width: 100%;
  }
  .app-footer .footer-bottom .logo {
    width: 3rem;
    height: auto;
    margin: 4px;
  }

  .custom-separator {
    border-bottom: 1px dashed #ebedf2;
    margin: 15px 0;
  }

  div.tab-border {
    border: 1px dashed #ebedf2 !important;
    margin: 30px 0 !important;
  }

  .m-0 {
    margin: 0px !important;
  }

  .mt-0 {
    margin-top: 0px !important;
  }

  .mr-0 {
    margin-right: 0px !important;
  }

  .mb-0 {
    margin-bottom: 0px !important;
  }

  .ml-0 {
    margin-left: 0px !important;
  }

  .mx-0 {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .my-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .p-0 {
    padding: 0px !important;
  }

  .pt-0 {
    padding-top: 0px !important;
  }

  .pr-0 {
    padding-right: 0px !important;
  }

  .pb-0 {
    padding-bottom: 0px !important;
  }

  .pl-0 {
    padding-left: 0px !important;
  }

  .px-0 {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .py-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .m-8 {
    margin: 8px !important;
  }

  .mt-8 {
    margin-top: 8px !important;
  }

  .mr-8 {
    margin-right: 8px !important;
  }

  .mb-8 {
    margin-bottom: 8px !important;
  }

  .ml-8 {
    margin-left: 8px !important;
  }

  .mx-8 {
    margin-left: 8px !important;
    margin-right: 8px !important;
  }

  .my-8 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .p-8 {
    padding: 8px !important;
  }

  .pt-8 {
    padding-top: 8px !important;
  }

  .pr-8 {
    padding-right: 8px !important;
  }

  .pb-8 {
    padding-bottom: 8px !important;
  }

  .pl-8 {
    padding-left: 8px !important;
  }

  .px-8 {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .py-8 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .m-12 {
    margin: 12px !important;
  }

  .mt-12 {
    margin-top: 12px !important;
  }

  .mr-12 {
    margin-right: 12px !important;
  }

  .mb-12 {
    margin-bottom: 12px !important;
  }

  .ml-12 {
    margin-left: 12px !important;
  }

  .mx-12 {
    margin-left: 12px !important;
    margin-right: 12px !important;
  }

  .my-12 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }

  .p-12 {
    padding: 12px !important;
  }

  .pt-12 {
    padding-top: 12px !important;
  }

  .pr-12 {
    padding-right: 12px !important;
  }

  .pb-12 {
    padding-bottom: 12px !important;
  }

  .pl-12 {
    padding-left: 12px !important;
  }

  .px-12 {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .py-12 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }

  .m-16 {
    margin: 16px !important;
  }

  .mt-16 {
    margin-top: 16px !important;
  }

  .mr-16 {
    margin-right: 16px !important;
  }

  .mb-16 {
    margin-bottom: 16px !important;
  }

  .ml-16 {
    margin-left: 16px !important;
  }

  .mx-16 {
    margin-left: 16px !important;
    margin-right: 16px !important;
  }

  .my-16 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .p-16 {
    padding: 16px !important;
  }

  .pt-16 {
    padding-top: 16px !important;
  }

  .pr-16 {
    padding-right: 16px !important;
  }

  .pb-16 {
    padding-bottom: 16px !important;
  }

  .pl-16 {
    padding-left: 16px !important;
  }

  .px-16 {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .py-16 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .m-24 {
    margin: 24px !important;
  }

  .mt-24 {
    margin-top: 24px !important;
  }

  .mr-24 {
    margin-right: 24px !important;
  }

  .mb-24 {
    margin-bottom: 24px !important;
  }

  .ml-24 {
    margin-left: 24px !important;
  }

  .mx-24 {
    margin-left: 24px !important;
    margin-right: 24px !important;
  }

  .my-24 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .p-24 {
    padding: 24px !important;
  }

  .pt-24 {
    padding-top: 24px !important;
  }

  .pr-24 {
    padding-right: 24px !important;
  }

  .pb-24 {
    padding-bottom: 24px !important;
  }

  .pl-24 {
    padding-left: 24px !important;
  }

  .px-24 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .py-24 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .m-28 {
    margin: 28px !important;
  }

  .mt-28 {
    margin-top: 28px !important;
  }

  .mr-28 {
    margin-right: 28px !important;
  }

  .mb-28 {
    margin-bottom: 28px !important;
  }

  .ml-28 {
    margin-left: 28px !important;
  }

  .mx-28 {
    margin-left: 28px !important;
    margin-right: 28px !important;
  }

  .my-28 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }

  .p-28 {
    padding: 28px !important;
  }

  .pt-28 {
    padding-top: 28px !important;
  }

  .pr-28 {
    padding-right: 28px !important;
  }

  .pb-28 {
    padding-bottom: 28px !important;
  }

  .pl-28 {
    padding-left: 28px !important;
  }

  .px-28 {
    padding-left: 28px !important;
    padding-right: 28px !important;
  }

  .py-28 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }

  .m-32 {
    margin: 32px !important;
  }

  .mt-32 {
    margin-top: 32px !important;
  }

  .mr-32 {
    margin-right: 32px !important;
  }

  .mb-32 {
    margin-bottom: 32px !important;
  }

  .ml-32 {
    margin-left: 32px !important;
  }

  .mx-32 {
    margin-left: 32px !important;
    margin-right: 32px !important;
  }

  .my-32 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  .p-32 {
    padding: 32px !important;
  }

  .pt-32 {
    padding-top: 32px !important;
  }

  .pr-32 {
    padding-right: 32px !important;
  }

  .pb-32 {
    padding-bottom: 32px !important;
  }

  .pl-32 {
    padding-left: 32px !important;
  }

  .px-32 {
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  .py-32 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }

  .m-36 {
    margin: 36px !important;
  }

  .mt-36 {
    margin-top: 36px !important;
  }

  .mr-36 {
    margin-right: 36px !important;
  }

  .mb-36 {
    margin-bottom: 36px !important;
  }

  .ml-36 {
    margin-left: 36px !important;
  }

  .mx-36 {
    margin-left: 36px !important;
    margin-right: 36px !important;
  }

  .my-36 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }

  .p-36 {
    padding: 36px !important;
  }

  .pt-36 {
    padding-top: 36px !important;
  }

  .pr-36 {
    padding-right: 36px !important;
  }

  .pb-36 {
    padding-bottom: 36px !important;
  }

  .pl-36 {
    padding-left: 36px !important;
  }

  .px-36 {
    padding-left: 36px !important;
    padding-right: 36px !important;
  }

  .py-36 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }

  .m-40 {
    margin: 40px !important;
  }

  .mt-40 {
    margin-top: 40px !important;
  }

  .mr-40 {
    margin-right: 40px !important;
  }

  .mb-40 {
    margin-bottom: 40px !important;
  }

  .ml-40 {
    margin-left: 40px !important;
  }

  .mx-40 {
    margin-left: 40px !important;
    margin-right: 40px !important;
  }

  .my-40 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .p-40 {
    padding: 40px !important;
  }

  .pt-40 {
    padding-top: 40px !important;
  }

  .pr-40 {
    padding-right: 40px !important;
  }

  .pb-40 {
    padding-bottom: 40px !important;
  }

  .pl-40 {
    padding-left: 40px !important;
  }

  .px-40 {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  .py-40 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .m-44 {
    margin: 44px !important;
  }

  .mt-44 {
    margin-top: 44px !important;
  }

  .mr-44 {
    margin-right: 44px !important;
  }

  .mb-44 {
    margin-bottom: 44px !important;
  }

  .ml-44 {
    margin-left: 44px !important;
  }

  .mx-44 {
    margin-left: 44px !important;
    margin-right: 44px !important;
  }

  .my-44 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }

  .p-44 {
    padding: 44px !important;
  }

  .pt-44 {
    padding-top: 44px !important;
  }

  .pr-44 {
    padding-right: 44px !important;
  }

  .pb-44 {
    padding-bottom: 44px !important;
  }

  .pl-44 {
    padding-left: 44px !important;
  }

  .px-44 {
    padding-left: 44px !important;
    padding-right: 44px !important;
  }

  .py-44 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }

  .m-48 {
    margin: 48px !important;
  }

  .mt-48 {
    margin-top: 48px !important;
  }

  .mr-48 {
    margin-right: 48px !important;
  }

  .mb-48 {
    margin-bottom: 48px !important;
  }

  .ml-48 {
    margin-left: 48px !important;
  }

  .mx-48 {
    margin-left: 48px !important;
    margin-right: 48px !important;
  }

  .my-48 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }

  .p-48 {
    padding: 48px !important;
  }

  .pt-48 {
    padding-top: 48px !important;
  }

  .pr-48 {
    padding-right: 48px !important;
  }

  .pb-48 {
    padding-bottom: 48px !important;
  }

  .pl-48 {
    padding-left: 48px !important;
  }

  .px-48 {
    padding-left: 48px !important;
    padding-right: 48px !important;
  }

  .py-48 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }

  .m-auto {
    margin: auto !important;
  }

  .mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  ._dot {
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
  }

  ._inline-dot {
    display: inline-block;
  }

  ._round-button {
    border-radius: 50% !important;
  }

  .progress--height-2 {
    height: 5px;
  }

  .chat-sidebar-container {
    height: calc(100vh - 140px);
    min-height: unset;
  }
  .chat-sidebar-container .chat-topbar {
    height: 52px;
  }
  .chat-sidebar-container .chat-content-wrap .chat-content {
    padding: 1.5rem 1.5rem 0;
    position: relative;
    height: calc(100vh - 335px);
  }
  .chat-sidebar-container .chat-content-wrap .chat-content .message {
    position: relative;
    background: #f8f9fa;
    border-radius: 10px;
    padding: 1rem;
  }
  .chat-sidebar-container .chat-content-wrap .chat-content .message:before {
    position: absolute;
    content: "";
    top: 14px;
    right: -5px;
    background: transparent;
    border-style: solid;
    border-width: 0 10px 10px 0px;
    border-color: transparent transparent #f8f9fa transparent;
    transform: rotate(-135deg);
  }
  .chat-sidebar-container
    .chat-content-wrap
    .chat-content
    .user
    .message:before {
    left: -5px;
    right: auto;
    transform: rotate(45deg);
  }
  .chat-sidebar-container .chat-content-wrap .chat-content .chat-input-area {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .chat-sidebar-container .chat-content-wrap .spinner-glow {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% - 10px);
  }
  .chat-sidebar-container .chat-sidebar-wrap {
    width: 260px;
  }
  .chat-sidebar-container .chat-sidebar-wrap .contacts-scrollable {
    position: relative;
    height: calc(100vh - 190px);
  }
  .chat-sidebar-container .chat-sidebar-wrap .contacts-scrollable .contact {
    position: relative;
    cursor: pointer;
    transition: 0.15s all ease-in;
  }
  .chat-sidebar-container
    .chat-sidebar-wrap
    .contacts-scrollable
    .contact:hover {
    background: #f8f9fa;
  }
  .chat-sidebar-container
    .chat-sidebar-wrap
    .contacts-scrollable
    .contact:before {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    top: calc(50% - 4px);
    right: 30px;
    background: #bbb;
    border-radius: 50%;
  }
  .chat-sidebar-container
    .chat-sidebar-wrap
    .contacts-scrollable
    .contact.online:before {
    background: #4caf50;
  }

  .invoice-summary {
    width: 220px;
    text-align: right;
    float: right;
  }
  .invoice-summary.invoice-summary-input {
    width: 320px;
  }
  .invoice-summary.invoice-summary-input p span,
  .invoice-summary.invoice-summary-input h5 span {
    width: 180px;
  }
  .invoice-summary p,
  .invoice-summary h5 {
    display: flex;
    justify-content: flex-end;
  }
  .invoice-summary p span,
  .invoice-summary h5 span {
    width: 120px;
  }
  .invoice-summary p span .small-input,
  .invoice-summary h5 span .small-input {
    display: inline-block;
    width: 3rem;
    margin: 0 0.75rem;
  }

  @media print {
    body * {
      visibility: hidden;
    }
    .main-content-wrap {
      width: 100% !important;
    }
    #print-area,
    #print-area * {
      visibility: visible;
    }
    #print-area {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }

  [dir="rtl"] .invoice-summary {
    text-align: left !important;
  }

  .inbox-main-sidebar-container {
    padding: 15px;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar {
    width: 180px;
    height: 100%;
    overflow: hidden;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar .inbox-main-nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar .inbox-main-nav li a {
    padding: 0.66rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #47404f;
  }
  .inbox-main-sidebar-container
    .inbox-main-sidebar
    .inbox-main-nav
    li
    a.active {
    color: #663399;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar .inbox-main-nav li a:hover {
    color: #663399;
  }
  .inbox-main-sidebar-container .inbox-main-sidebar .inbox-main-nav li a i {
    margin-right: 8px;
  }
  .inbox-main-sidebar-container .inbox-secondary-sidebar-container {
    border-radius: 10px;
    min-height: calc(100vh - 150px);
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar-content
    .inbox-topbar {
    height: 52px;
    display: flex;
    flex-direction: row;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar-content
    .inbox-details {
    padding: 1.5rem 2rem;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar {
    overflow: hidden;
    width: 360px;
    height: 100%;
    border-right: 1px solid #eee;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item {
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 1.25rem 1rem;
    cursor: pointer;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item:hover {
    background: #f8f9fa;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item
    .avatar {
    width: 15%;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item
    .details {
    width: 60%;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item
    .date {
    width: 25%;
    font-size: 10px;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .mail-item
    .date
    span {
    float: right;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .avatar
    img {
    margin: 4px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .inbox-main-sidebar-container
    .inbox-secondary-sidebar-container
    .inbox-secondary-sidebar
    .name {
    font-size: 12px;
    display: block;
  }

  @media (max-width: 767px) {
    .mail-item {
      padding: 1rem 0.5rem !important;
    }
    .inbox-secondary-sidebar {
      width: 280px !important;
    }
  }

  [dir="rtl"]
    .inbox-main-sidebar-container
    .inbox-main-sidebar
    .inbox-main-nav
    li
    a
    i {
    margin-right: 0;
    margin-left: 8px;
  }

  .list-horizontal .list-item .list-thumb img {
    height: 74px;
    object-fit: cover;
  }

  .list-horizontal .list-item .item-title {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }

  .list-horizontal .list-item a {
    color: #47404f;
  }

  .list-grid .list-item .list-thumb img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .list-grid .list-item .card-body {
    display: block !important;
  }

  .list-grid .list-item .item-title {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-width: 300px;
  }

  .list-grid .list-item a {
    color: #47404f;
  }

  .list-grid .list-item .item-badges,
  .list-grid .list-item .item-actions {
    position: absolute;
    top: 16px;
  }

  .list-grid .list-item .item-actions {
    right: 16px;
  }

  .list-grid .list-item .item-badges {
    left: 16px;
  }

  .list-grid .list-item .item-select {
    display: none;
  }

  @media (max-width: 991px) {
    .list-horizontal .list-item .list-thumb img {
      height: 100%;
      width: 100px;
    }
    .list-horizontal .list-item .item-title {
      max-width: 200px;
    }
  }

  @media (max-width: 576px) {
    .list-horizontal .list-item .item-title {
      max-width: 150px;
    }
  }

  .user-profile .header-cover {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
  }
  .user-profile .header-cover::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
  }

  .user-profile .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -40px;
    z-index: 9;
  }

  .user-profile .profile-picture {
    border-radius: 50%;
    border: 4px solid #fff;
  }

  .user-profile .profile-nav {
    justify-content: center;
  }

  .timeline {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .timeline .timeline-item {
    position: relative;
    width: 50%;
    display: inline-block;
  }
  .timeline .timeline-item:nth-child(even) {
    padding: 0 3rem 3rem 0;
  }
  .timeline .timeline-item:nth-child(even) .timeline-badge {
    left: calc(100% - 24px);
  }
  .timeline .timeline-item:nth-child(odd) {
    float: right;
    padding: 0 0 3rem 3rem;
    margin-top: 6rem;
  }
  .timeline .timeline-item:nth-child(odd) .timeline-badge {
    right: calc(100% - 24px);
  }
  .timeline .timeline-item .timeline-badge {
    position: absolute;
    width: 48px;
    height: 48px;
  }
  .timeline .timeline-item .badge-icon {
    display: inline-block;
    text-align: center;
    font-size: 22px;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    line-height: 48px;
  }
  .timeline .timeline-item .badge-img {
    display: inline-block;
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
  .timeline .timeline-group {
    position: relative;
    z-index: 99;
    padding: 0 0 2rem 0;
  }
  .timeline .timeline-line {
    position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    background: #dee2e6;
    left: 0;
    right: 0;
    margin: auto;
  }

  @media (max-width: 767px) {
    .user-profile .header-cover {
      height: 200px;
    }
    .timeline .timeline-item {
      width: 100%;
      padding: 4rem 0 3rem !important;
    }
    .timeline .timeline-item:nth-child(odd) {
      margin-top: 1rem;
    }
    .timeline .timeline-item .timeline-badge {
      left: 0 !important;
      right: 0 !important;
      top: -16px;
      margin: auto;
    }
    .timeline .timeline-group {
      padding: 0 0 3rem;
    }
  }

  .auth-layout-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
  }
  .auth-layout-wrap .auth-content {
    max-width: 660px;
    margin: auto;
  }

  .auth-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .auth-logo img {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 1024px) {
    .auth-layout-wrap .auth-content {
      min-width: 660px;
    }
  }

  @media (max-width: 767px) {
    .auth-layout-wrap .auth-content {
      padding: 15px;
    }
    .auth-right {
      padding: 80px 15px;
    }
  }

  .not-found-wrap {
    background-image: url("../../dist-assets/images/page-bg-bottom.png");
    background-position-y: bottom;
    background-size: cover;
    background-size: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    padding: 120px 0;
  }
  .not-found-wrap h1 {
    font-weight: 800;
    margin-bottom: 16px;
    line-height: 1;
  }
  .not-found-wrap .subheading {
    font-weight: 800;
  }

  .main-header {
    position: relative;
  }
  .main-header .topbar .header-nav {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  .main-header .topbar .header-nav .topbar-item ul li {
    padding-right: 40px;
    text-transform: capitalize;
  }

  .homepage {
    padding: 80px 0;
    background: url(https://ui-lib.com/wp-content/uploads/2019/04/bg-1.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
  .homepage .main-content .logo {
    width: 80px;
    margin: auto;
  }
  .homepage .main-content h1 {
    color: #52495a;
    line-height: 1.5;
  }
  .homepage .main-content .btn-raised-primary:hover {
    color: #fff;
  }
  .homepage .main-content .btn-raised {
    transition: all 0.15s ease-in;
  }
  .homepage .main-content .btn-raised:hover {
    transform: translateY(-2px);
  }
  .homepage .main-content .dashboard-photo {
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    max-width: 960px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
  }
  .homepage .main-content .dashboard-photo img {
    width: 100%;
  }

  .features {
    padding-top: 126px;
    padding-bottom: 126px;
    background: #f8fafe;
  }
  .features .section-title {
    margin-bottom: 45px;
  }
  .features .section-title h2 {
    margin-bottom: 5px;
  }
  .features .section-title p {
    max-width: 550px;
    margin: 0 auto;
    opacity: 0.7;
  }
  .features .features-wrap .feature-card {
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0px;
    margin-bottom: 10px;
    background: transparent;
  }
  .features .features-wrap .feature-card .card-icon {
    padding: 15px;
  }
  .features .features-wrap .feature-card .card-title {
    display: flex;
    align-items: center;
    margin: 0px;
    flex-grow: 0.5;
  }
  .features .features-wrap .feature-card .card-title h6 {
    margin: 0px;
  }
  .features .features-wrap .feature-card:hover,
  .features .features-wrap .feature-card.active {
    background: linear-gradient(#8470b9, #473886);
    cursor: pointer;
  }
  .features .features-wrap .feature-card:hover .card-icon,
  .features .features-wrap .feature-card.active .card-icon {
    padding: 15px;
    color: #fff;
  }
  .features .features-wrap .feature-card:hover .card-title h6,
  .features .features-wrap .feature-card.active .card-title h6 {
    color: #fff;
  }
  .features .tab-panel {
    display: none;
    padding: 0 20px;
  }
  .features .tab-panel.active {
    display: block;
  }
  .features .tab-panel img {
    width: 100%;
  }

  .framework {
    padding-top: 126px;
    padding-bottom: 126px;
    background: #f8fafe;
  }
  .framework .section-title {
    padding-bottom: 40px;
  }
  .framework .item-photo {
    height: 180px;
    width: 180px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .framework .item-photo img {
    width: auto;
    height: auto;
    max-width: 64px;
  }
  .framework .item-photo .item-photo-text {
    font-size: 40px;
  }

  .demos {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .demos .section-title {
    padding-bottom: 35px;
  }
  .demos .demo-photo .thumbnail {
    display: block;
  }
  .demos .demo-photo img {
    width: 100%;
  }
  .demos .demo-photo a {
    text-transform: capitalize;
  }
  .demos .demo-photo a:hover {
    color: #ffffff;
  }

  .component {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .component .section-title {
    padding-bottom: 50px;
  }
  .component .component-list {
    margin-bottom: 30px;
  }
  .component .component-list ul .comoponent-list-heading {
    margin-left: 15px;
    text-transform: capitalize;
    margin-top: 2px;
  }
  .component .component-list ul li {
    list-style: none;
    margin-left: 45px;
    opacity: 0.7;
  }

  .clients {
    background-color: #f8fafe;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .clients .section-title {
    padding-bottom: 50px;
    text-align: center;
  }
  .clients .section-title h2 {
    margin-bottom: 10px;
  }
  .clients .section-title p {
    max-width: 550px;
    margin: 0 auto;
  }
  .clients .complement {
    max-width: 900px;
    margin: 0 auto;
  }
  .clients .complement .client-card {
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
      0 1px 4px rgba(0, 0, 0, 0.08);
  }
  .clients .complement .client-card .user {
    margin-left: 10px;
  }
  .clients .complement .client-card .user .user-photo {
    margin-right: 30px;
  }
  .clients .complement .client-card .user .user-photo img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .clients .complement .client-card .user .user-detail {
    margin-top: 5px;
  }
  .clients .complement .client-card .user .user-detail h6 {
    margin: 0px;
  }
  .clients .complement .client-card .user .user-detail p {
    opacity: 0.8;
  }
  .clients .complement .client-card .user-comment {
    margin-left: 10px;
  }
  .clients .complement .client-card .user-comment p {
    max-width: 800px;
    font-style: italic;
    opacity: 0.7;
  }

  .blog {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .blog h2 {
    max-width: 890px;
    margin: 0px 0px 40px 0px;
  }
  .blog p {
    max-width: 890px;
    opacity: 0.7;
  }
  .blog .blog-photo {
    margin: 20px 0px;
  }
  .blog .blog-photo img {
    width: 100%;
  }

  .footer {
    background-color: #f8fafe;
    padding-top: 80px;
  }
  .footer .footer-item {
    margin-bottom: 100px;
  }
  .footer .footer-item .social-media ul li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
  }
  .footer .footer-item .social-media ul li a {
    color: #111111a8;
    background: #fff;
    padding: 7px;
    border-radius: 5px;
  }
  .footer .footer-bootom {
    padding: 10px 0px;
    border-top: 0.2px solid #fffffffa;
  }
  .footer .footer-bootom p {
    margin: 0px;
  }
  .footer .btn-raised-primary:hover {
    color: #fff;
  }
  .footer .btn-raised {
    transition: all 0.15s ease-in;
  }
  .footer .btn-raised:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 960px) {
    .dashboard .dashboard-photo {
      max-width: calc(100% - 80px);
    }
    .dashboard {
      height: 350px;
    }
  }

  @media (max-width: 767px) {
    .main-header .navbar-nav {
      flex-direction: row;
    }
    .main-header .navbar-nav .nav-item {
      margin-right: 8px;
    }
    .main-header .topbar .header-nav {
      display: block;
    }
    .brand {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .navbar-toggler {
      padding: 5px 0px;
      font-size: 1.25rem;
      line-height: 1;
      border: 0px solid #fff;
      border-radius: 0.25rem;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      display: flex;
      justify-content: center;
    }
    .navbar-toggler .navbar-toggler-icon {
      background: #52495a;
    }
    .navbar-toggler:focus,
    .navbar-toggler:hover {
      text-decoration: none;
      outline: none;
    }
    .navbar-collapse {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-align: center;
      align-items: center;
      background: transparent;
      background-size: auto;
      background-repeat: no-repeat;
      overflow: hidden;
      z-index: 999;
      text-align: center;
    }
    .navbar-toggler-icon {
      display: inline-block;
      width: 25px;
      height: 2px;
      vertical-align: middle;
      content: "";
      background: no-repeat center center;
      background-size: 100% 100%;
      background: #fff;
      margin-top: 4px;
    }
    .dashboard {
      height: 250px;
    }
    .features .features-wrap {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .features .features-wrap .feature-card {
      padding: 10px 10px;
      margin: 5px 5px;
    }
    .features .features-wrap .feature-card .card-title {
      margin: 0px;
    }
    .features .features-wrap .feature-card .card-title h6 {
      margin: 0px;
    }
    .features .features-wrap .feature-card .card-icon {
      display: none;
    }
    .framework .item-photo {
      margin-bottom: 30px;
    }
    .component .component-list {
      margin: 0 auto;
    }
    .component .component-list ul {
      text-align: center;
      padding: 0px;
    }
    .component .component-list ul li {
      margin-left: 30px;
    }
    .component .component-list .comoponent-list-heading {
      margin-left: 3px !important;
    }
    .footer .footer-item .social-media {
      margin-top: 18px;
    }
    .footer .footer-item .social-media ul {
      padding: 0px;
    }
    .footer .footer-item .social-media ul li {
      margin-right: 20px;
      margin-left: 0px;
    }
    .footer .footer-item .selling-btn {
      margin-top: 10px;
    }
    .footer .footer-item .btn-arrow {
      margin-top: 10px;
    }
  }

  @media (max-width: 600px) {
    .homepage {
      padding: 80px 0;
    }
    .dashboard {
      height: auto;
      padding: 60px 0;
    }
    .dashboard .dashboard-photo {
      position: unset !important;
    }
  }

  @media only screen and (max-width: 991px) {
    .ul-landing__navbar.collapse:not(.show) {
      display: block !important;
    }
    .ul-landing__brand {
      max-width: 80px !important;
    }
  }

  #task-manager li.nav-item.dropdown {
    padding: 0 8px;
  }

  #task-manager li.nav-item.dropdown {
    margin: 11px 0;
    text-align: left;
  }

  #task-manager .dropdown-menu.show {
    display: block;
    margin: 21px 2px;
  }

  #task-manager .task-manager-button {
    padding: 7px 15px;
  }

  #task-manager .active {
    display: none;
  }

  #task-manager .ul-task-manager__font-date {
    font-size: 10px;
  }

  #task-manager .ul-task-manager__paragraph {
    width: 95%;
    letter-spacing: 0px;
  }

  #task-manager .ul-task-manager__media a {
    color: #3f51b5;
    font-weight: bold;
  }

  #task-manager .ul-task-manager__fonts {
    font-size: 32px;
    position: relative;
    top: 13px;
    color: #70657b;
  }

  #task-manager .ul-task-manager__media p {
    margin-bottom: 0rem;
    font-weight: 700;
  }

  #task-manager .revision-font i {
    margin-right: 15px;
    font-size: 30px;
    color: #3f51b5;
  }

  @media (max-width: 991px) {
    #task-manager .navbar-toggler {
      float: left !important;
    }
    #task-manager .filter-mobile {
      width: 100%;
      text-align: left;
      margin-top: 5px;
    }
    #task-manager li.nav-item.dropdown {
      padding: 0px;
    }
    #task-manager button.task-manager-button.navbar-toggler.text-white {
      background: #663399;
    }
  }

  #task-manager-list .ul-task-manager__dropdown-menu.show {
    display: block;
    margin: 10px 2px;
  }

  #task-manager-list .ul-task-manager__header-inline {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
  }

  #task-manager-list .ul-task-manager__list-icon {
    color: #47404f;
  }

  #task-manager-list .ul-task-manager__list-icon i {
    font-weight: 900;
    padding: 0 4px;
  }

  #task-manager-list .ul-task-manager__select-show {
    display: inline;
  }

  #task-manager-list .ul-task-manager__search-inline {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  #task-manager-list .ul-task-manager__head--width {
    width: 60px;
  }

  #task-manager-list .checkmarks {
    display: inline-block;
    width: 22px;
    height: 22px;
    -ms-transform: rotate(45deg);
    /* IE 9 */
    -webkit-transform: rotate(45deg);
    /* Chrome, Safari, Opera */
    transform: rotate(45deg);
  }

  #task-manager-list .checkmark_stem {
    position: absolute;
    width: 3px;
    height: 9px;
    background-color: #ccc;
    left: 11px;
    top: 6px;
  }

  #task-manager-list .checkmark_kick {
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: #ccc;
    left: 8px;
    top: 12px;
  }

  #task-manager-list .task-manager-list-select {
    width: 70%;
  }

  #task-manager-list .calendar i {
    color: #47404f;
    font-size: 16px;
    font-weight: 900;
    margin-right: 6px;
  }

  #task-manager-list .ul-task-manager__avatar {
    width: 36px;
    height: 36px;
  }

  #task-manager-list .ul-task-manager__font-table {
    font-size: 33px;
    position: relative;
    top: 13px;
    color: #665c70;
    cursor: pointer;
  }

  #task-manager-list .ul-task-manager__font-down {
    color: #47404f;
    font-size: 20px;
  }

  #task-manager-list .ul-task-manager__dot {
    height: 7px;
    width: 7px;
    border-radius: 50%;
    display: inline-block;
  }

  #task-manager-list .active {
    display: none;
  }

  #task-manager-list ul.pagination.justify-content-end {
    margin-bottom: 0;
  }

  #task-manager-list td.ul-task-manager__align {
    vertical-align: middle;
  }

  @media (max-width: 991px) {
    #task-manager-list .custom-sm-width {
      width: 1000px;
    }
  }

  label.ul-form__label {
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 5px;
    text-align: right;
    padding: 7px 0;
  }

  small.ul-form__text {
    margin-top: 10px;
    color: #bbb;
    font-weight: 400;
  }

  .input-right-icon {
    position: relative;
  }

  span.span-left-input-icon {
    position: absolute;
    top: 9px;
    left: 10px;
  }

  span.span-right-input-icon {
    position: absolute;
    top: 9px;
    /* left: 0; */
    right: 10px;
  }

  i.ul-form__icon {
    color: #70657b;
    font-size: 15px;
    font-weight: 600;
  }

  .ul-form__radio-inline {
    display: flex;
  }

  span.ul-form__radio-font {
    font-size: 14px;
    font-weight: 500;
  }

  .footer-delete-right {
    float: right;
  }

  .ul-card__margin-25 {
    margin: 25px 0;
  }

  @media only screen and (max-width: 991px) {
    label.ul-form--margin {
      text-align: left;
      margin-left: 20px;
    }
  }

  label.action-bar-horizontal-label {
    font-size: 15px;
  }

  .ul-form__radio {
    position: relative;
  }

  span.checkmark.ul-radio__position {
    position: absolute;
    /* bottom: -22px; */
    top: -8px;
    left: 4px;
  }

  #todo_wrap ul {
    padding: 0;
    text-align: left;
    list-style: none;
  }

  #todo_wrap hr {
    border-bottom: 0;
    margin: 15px 0;
  }

  #todo_wrap input[type="checkbox"] {
    width: 30px;
    float: left;
  }

  #todo_wrap .remove {
    float: right;
    cursor: pointer;
  }

  #todo_wrap .completed {
    text-decoration: line-through;
  }

  i.ul-tab__icon {
    font-size: 14px;
    font-weight: 500;
  }

  .ul-tab__border {
    border: 1px dashed #bbb;
    margin: 30px 0;
  }

  .ul-tab__content {
    margin: 0;
    padding-left: 0;
  }

  .ul-dropdown__toggle {
    padding: 8px 25px;
    margin: 0 5px;
  }

  .tab-border {
    border: 1px dashed #ebedf2 !important;
    margin: 30px 0 !important;
  }

  span._r_block-dot {
    display: block;
    margin: 2px 0;
  }

  ._r_btn {
    border: 1px solid #e8ecfa;
  }

  ._r_drop_right {
    padding-right: 14px !important;
  }

  .ul-accordion__link:hover {
    list-style: none;
    text-decoration: none !important;
  }

  button.ul-accordion__link {
    text-decoration: none !important;
  }

  .ul-accordion__font {
    font-size: 16px;
  }

  .ul-cursor--pointer {
    cursor: pointer;
  }

  .ul-border__bottom {
    border-bottom: 1px solid #3f51b5;
  }

  .ul-card__v-space {
    border-radius: 0;
    box-shadow: 0;
    margin: 30px 0;
  }

  .ul-card__border-radius {
    border-radius: 0;
    box-shadow: none;
  }

  .header-elements-inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }

  .ul-card__list--icon-font i {
    font-weight: 700;
    margin: 0 2px;
  }

  .accordion .ul-collapse__icon--size a::before {
    font-family: "iconsmind";
    font-size: 18px;
    font-weight: 700;
    vertical-align: bottom;
    cursor: pointer;
  }

  .accordion .ul-collapse__left-icon a.collapsed:before {
    font-family: "iconsmind";
    content: "\f083";
    margin: 0 8px;
  }

  .accordion .ul-collapse__left-icon a:before {
    font-family: "iconsmind";
    content: "\f072";
    margin: 0 8px;
  }

  .accordion .ul-collapse__right-icon a.collapsed:before {
    font-family: "iconsmind";
    content: "\f083";
    margin: 0 8px;
    float: right;
    position: absolute;
    right: 15px;
  }

  .accordion .ul-collapse__right-icon a:before {
    font-family: "iconsmind";
    content: "\f072";
    margin: 0 8px;
    float: right;
    position: absolute;
    right: 15px;
  }

  .ul-widget__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.07rem dashed #dee2e6;
    padding: 1.1rem 0;
  }

  .ul-widget1__title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #70657b;
  }

  .ul-widget__desc {
    font-size: 0.9rem;
    font-weight: normal;
  }

  .ul-widget__number {
    font-size: 1.4rem;
    font-weight: 700;
  }

  .ul-widget__item:last-child {
    border-bottom: 0;
  }

  .ul-widget__head {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    align-items: center;
  }
  .ul-widget__head.--v-margin {
    padding: 10px 0;
  }

  .ul-widget__head-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: #52495a;
  }

  .ul-widget-nav-tabs-line .nav-item .nav-link.active {
    border: 1px solid transparent;
    border-color: #fff #fff #3f51b5 #fff;
  }

  .ul-widget-nav-tabs-line .nav-link {
    font-weight: 700;
  }

  .ul-widget__body {
    margin-top: 10px;
  }

  .ul-widget2__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.4rem;
    align-items: center;
    position: relative;
  }

  .ul-widget2__info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 10px;
  }

  .ul-widget2__title {
    font-weight: 600;
    color: #70657b;
  }

  .ul-widget2__username {
    font-size: 0.7rem;
    color: #70657b;
  }

  .ul-widget__link--font i {
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 2px;
  }

  .ul-widget__link--font {
    color: #70657b;
    font-weight: 600;
    font-size: 15px;
  }

  .ul-pl-0 {
    padding-left: 0;
  }

  .ul-checkmark {
    position: absolute;
    top: -4px !important;
    left: 20px !important;
  }

  .ul-widget2__actions {
    opacity: 0;
    visibility: hidden;
  }

  .ul-widget1:hover .ul-widget2__actions {
    opacity: 1;
    visibility: visible;
    transition: 0.3s;
  }

  .pb-20 {
    padding-bottom: 20px;
  }

  .ul-widget-notification-item {
    display: flex;
    align-items: center;
    padding: 2px;
    position: relative;
    border-bottom: 1px solid #eee;
    padding: 10px 0px;
  }

  .ul-widget-notification-item:last-child {
    border-bottom: none;
  }

  .ul-widget-notification-item:hover {
    background-color: #f8f9fa;
  }

  .ul-widget-notification-item-icon {
    /* padding-left: 12px; */
    padding-right: 20px;
  }

  .ul-widget-notification-item-title {
    -webkit-transition: color 0.3s ease;
    transition: color 0.3s ease;
    font-size: 1rem;
    font-weight: 400;
    color: #665c70;
  }

  .ul-widget-notification-item-time {
    font-size: 13px;
    font-weight: 300;
    color: #bbb;
  }

  .ul-widget-notification-item::after {
    content: "\f07d";
    font-family: "iconsmind";
    position: absolute;
    /* top: 16px; */
    right: 0;
  }

  .ul-widget-notification-item i {
    font-size: 27px;
  }

  .ul-widget3-img img {
    width: 3.2rem;
    border-radius: 50%;
  }

  .ul-widget3-item {
    margin-bottom: 1rem;
    border-bottom: 0.07rem dashed #eee;
  }

  .ul-widget3-item:last-child {
    border: none;
  }

  .ul-widget3-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.8rem;
  }

  span.ul-widget3-status {
    flex-grow: 1;
    text-align: right;
  }

  .ul-widget3-info {
    padding-left: 10px;
  }

  .ul-widget4__item {
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #dee2e6;
    padding: 15px 0;
  }

  .ul-widget4__item:last-child {
    border-bottom: 0;
  }

  .ul-widget4__pic-icon {
    margin-right: 15px;
    font-size: 25px;
  }

  a.ul-widget4__title {
    color: #70657b;
    font-weight: 700;
    font-size: 15px;
  }

  a.ul-widget4__title:hover {
    color: #3f51b5;
  }

  .ul-widget4__img img {
    width: 2.5rem;
    border-radius: 5px;
    margin-right: 15px;
  }

  .ul-widget4__users {
    justify-content: space-between;
  }

  .ul-widget2__info.ul-widget4__users-info {
    flex-grow: 1;
    width: calc(100% - 135px);
  }

  span.ul-widget4__number.t-font-boldest {
    font-size: 1.1rem;
    /* font-weight: 900; */
  }

  .ul-widget5__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.43rem;
    padding-bottom: 1.57rem;
    border-bottom: 0.07rem dashed #eee;
  }

  .ul-widget5__item:last-child {
    border-bottom: none;
  }

  .ul-widget5__content {
    display: flex;
    align-items: center;
  }

  .ul-widget5__stats {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .ul-widget5__stats:first-child {
    padding-right: 3rem;
  }

  span.ul-widget5__number {
    font-size: 1.3rem;
    font-weight: 600;
    color: #70657b;
  }

  .ul-widget5__pic img {
    padding-right: 1.43rem;
    width: 8.6rem;
    border-radius: 4px;
  }

  p.ul-widget5__desc {
    margin: 0;
    padding: 0.4rem 0;
    font-size: 1rem;
    font-weight: 400;
    color: #ced4da;
  }

  .ul-widget5__info span:nth-child(even) {
    font-weight: 600;
    padding-right: 0.71rem;
  }

  .ul-widget6__head .ul-widget6__item {
    display: flex;
    align-items: center;
    margin-bottom: 1.07rem;
  }

  .ul-widget6__head .ul-widget6__item span {
    flex: 1;
    text-align: left;
    font-size: 0.8rem;
    color: #bbb;
    font-weight: 500;
  }

  .ul-widget6__head .ul-widget6__item span:last-child {
    text-align: right;
  }

  .ul-widget6__body .ul-widget6__item {
    display: flex;
    align-items: center;
    padding: 1.07rem 0;
    border-bottom: 0.07rem dashed #eee;
  }

  .ul-widget6__body .ul-widget6__item:last-child {
    border-bottom: none;
  }

  .ul-widget6__body .ul-widget6__item span {
    flex: 1;
    text-align: left;
    color: #70657b;
    font-weight: 400;
  }

  .ul-widget6__body .ul-widget6__item span:last-child {
    text-align: right;
  }

  .ul-widget6 .ul-widget6-footer {
    text-align: right;
    margin: 0;
  }

  .ul-widget-s5__pic img {
    width: 4rem;
    border-radius: 50%;
  }

  .ul-widget-s5__pic {
    padding-right: 1rem;
  }

  a.ul-widget4__title.ul-widget5__title {
    font-size: 1.1rem;
  }

  .ul-widget-s5__desc {
    margin: 0;
    color: #70657b;
  }

  .ul-widget-s5__item {
    display: flex;
    justify-content: space-between;
  }

  .ul-widget-s5__content {
    display: flex;
    align-items: center;
  }

  .ul-widget-s5__content:last-child {
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
  }

  .ul-widget-s5__progress {
    flex: 1;
    padding-right: 3rem;
  }

  .ul-widget-s5__stats {
    justify-content: space-between;
    display: flex;
    margin-bottom: 0.7rem;
  }

  .ul-widget-s5__stats span {
    font-size: 1rem;
    font-weight: 600;
    color: #665c70;
  }

  .widget-badge {
    margin: 0 !important;
  }

  .ul-widget-s6__items {
    position: relative;
  }

  .ul-widget-s6__items:before {
    content: "";
    position: absolute;
    display: block;
    width: 1px;
    background-color: #dee2e6;
    height: 100%;
    left: 3px;
    top: 14px;
  }

  p.ul-widget6__dot {
    height: 8px;
    width: 8px;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .ul-widget-s6__item {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  p.ul-widget-s6__text {
    flex-grow: 1;
    margin-left: 11px;
  }

  span.ul-widget-s6__text {
    display: flex;
    flex-grow: 1;
    /* margin-right: -26px; */
    padding-left: 12px;
    color: #70657b;
    font-weight: 600;
  }

  span.ul-widget-s6__time {
    font-size: 0.77rem;
    color: #bbb;
  }

  .ul-widget6__item--table {
    height: 400px;
    overflow-y: scroll;
  }

  tr.ul-widget6__tr--sticky-th th {
    position: sticky;
    top: 0;
    background-color: #fff;
  }

  .ul-widget-s7__items {
    display: flex;
  }

  .ul-widget-s7__item-circle {
    margin: 0 1rem;
  }

  .ul-widget-s7__item-circle i {
    font-size: 16px;
    font-weight: 900;
  }

  .ul-widget-s7 {
    position: relative;
    padding: 15px 0;
  }

  .ul-widget-s7:before {
    content: "";
    position: absolute;
    width: 1;
    height: 100%;
    background-color: #ced4da;
    width: 0.241rem;
    /* top: 0; */
    left: 72px;
    top: 22px;
  }

  p.ul-widget7__big-dot {
    height: 13px;
    width: 13px;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .ul-widget-s7__item-time {
    font-size: 1.2rem;
    font-weight: 500;
    color: #70657b;
  }
  .ul-widget-s7__item-time.ul-middle {
    display: flex;
    align-items: center;
  }

  .ul-widget-s7__item-text {
    font-size: 1rem;
    color: #70657b;
  }

  .ul-widget-s7:last-child:before {
    background-color: #f8f9fa;
  }

  .ul-vertical-line {
    height: 100%;
    width: 7px;
    display: inline-block;
    vertical-align: middle;
  }

  .ul-widget8__tbl-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
  }

  .ul-widget_user-card {
    display: -webkit-box;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 425px) {
    .ul-widget__number {
      font-size: 1.1rem;
      font-weight: 700;
    }
    .ul-widget1__title {
      font-size: 0.9rem;
    }
    .ul-widget__desc {
      font-size: 0.7rem;
    }
    .ul-widget__head {
      flex-direction: column;
    }
    .ul-widget__head-label {
      margin: 10px 0;
    }
    .ul-widget__head.v-margin {
      flex-direction: unset;
    }
  }

  @media only screen and (max-width: 1024px) {
    .ul-widget2__actions {
      opacity: 1;
      visibility: visible;
    }
  }

  @media only screen and (max-width: 768px) {
    .ul-widget-s5__content:last-child {
      width: 100%;
    }
    .ul-widget-s5__item {
      justify-content: space-between;
      display: block;
    }
    .ul-widget-s5__content {
      margin: 15px 0;
    }
  }

  @media only screen and (max-width: 375px) {
    .ul-widget5 {
      overflow-x: auto;
    }
    a.ul-widget4__title {
      font-size: 12px;
      padding-right: 5px;
    }
    a.ul-widget4__title.ul-widget5__title {
      font-size: 11px;
    }
    p.ul-widget-s5__desc {
      font-size: 11px;
    }
  }

  @media only screen and (max-width: 725px) {
    .ul-widget5__item {
      display: block;
      text-align: center !important;
    }
    .ul-widget5__content {
      display: block;
      margin-bottom: 15px;
    }
    .ul-widget5__stats:first-child {
      padding-right: 0;
    }
    .ul-widget5__stats {
      text-align: center;
    }
  }

  .ul-card__widget-chart {
    padding: 0px;
  }

  .ul-widget__chart-info {
    padding: 15px;
  }

  .ul-widget__row {
    align-items: center;
    display: flex;
  }

  .ul-widget__content {
    margin-left: 30px;
  }

  .ul-widget__row-v2 {
    text-align: center;
    text-align: -webkit-center;
  }

  .ul-widget-stat__font i {
    font-size: 35px;
  }

  .ul-widget__content-v4 {
    text-align: center;
  }

  .ul-faq__details {
    margin: 70px 0;
  }

  .ul-faq__list-details ul {
    padding-left: 10px;
    margin: 0;
  }

  .ul-faq__list-details ul li {
    list-style: none;
    color: #665c70;
    padding: 5px 0;
    font-weight: 700;
  }

  .ul-widget-card__info {
    display: flex;
    justify-content: space-between;
  }

  .ul-widget-card__info span p:first-child {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .ul-widget-card__info span p:last-child {
    font-size: 17px;
    margin: 0;
  }

  .ul-widget-card__progress-rate {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    margin-bottom: 5px;
  }

  .ul-widget-card__progress-rate span {
    font-weight: 700;
  }

  .ul-widget-card__progress-rate span:last-child {
    font-weight: 700;
    color: #ced4da;
  }

  .progress--height {
    height: 10px;
  }

  .ul-widget-card__user-info {
    text-align: center;
  }

  .ul-widget-card--line {
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 20px;
  }

  .ul-widget-card--line:last-child {
    border-bottom: none;
  }

  .ul-widget-card__rate-icon {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }
  .ul-widget-card__rate-icon.--version-2 {
    justify-content: flex-start;
  }

  .ul-widget-card__rate-icon.--version-2 span {
    margin-right: 18px;
  }

  .ul-widget-card__rate-icon span i {
    font-size: 14px;
  }

  .ul-widget-card__rate-icon span {
    font-size: 15px;
  }

  .ul-widget-card__rate-icon span i {
    font-size: 16px;
    font-weight: 600;
    margin-right: 2px;
  }

  .ul-widget-card__full-status {
    display: flex;
    justify-content: space-between;
  }

  .ul-widget-card__status1 {
    display: grid;
    text-align: -webkit-center;
    text-align: center;
  }

  .ul-widget-card__status1 span:first-child {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .ul-widget6__dot.ul-widget-card__dot-xl {
    padding: 1.35rem;
  }

  .ul-widget-s6__badge .ul-widget-card__dot {
    position: relative;
  }

  .ul-widget6__dot.ul-widget-card__dot-xl i {
    position: absolute;
    top: 35%;
    content: "";
    left: 35%;
  }

  .ul-widget-s6__items.ul-widget-card__position:before {
    left: 20px;
    top: 0;
  }

  .ul-widget-card__item {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }

  .ul-widget-card__info-v2 {
    display: grid;
    /* margin-right: 2px; */
    margin-left: 20px;
  }

  .ul-widget-card__img-bg {
    background: url("../../../../images/products/watch-2.jpg");
    background-size: cover;
    height: 500px;
    background-repeat: no-repeat, repeat;
  }

  .ul-widget-card__cloud .ul-widget-card__head h1 {
    color: #fff;
  }

  .ul-widget-card__cloud .ul-widget-card__head i {
    color: #fff !important;
  }

  .ul-widget-card__head {
    display: flex;
    justify-content: space-around;
    margin: 60px 0;
    align-items: center;
  }

  .ul-widget-card__weather-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin: 45px 0;
  }

  .ul-b4__box {
    width: 5rem;
    height: 5rem;
    background-color: #ced4da;
    display: inline-block;
    margin: 0 5px;
  }

  .ul-b4__border {
    border: 1px solid #3f51b5;
  }

  .ul-b4__border-top {
    border-top: 1px solid #3f51b5;
  }

  .ul-b4__border-right {
    border-right: 1px solid #3f51b5;
  }

  .ul-b4__border-bottom {
    border-bottom: 1px solid #3f51b5;
  }

  .ul-b4__border-left {
    border-left: 1px solid #3f51b5;
  }

  .ul-b4-utilities__code pre {
    margin: 0;
    padding: 0;
    font-size: 15px;
  }

  .ul-b4-utilities__code {
    padding: 25px 10px;
    background-color: #eee;
  }

  .ul-b4__border-0 {
    border: none;
  }

  .ul-b4__border-top-0 {
    border-top: none;
    border-bottom: 1px solid #3f51b5;
    border-right: 1px solid #3f51b5;
    border-left: 1px solid #3f51b5;
  }

  .ul-b4__border-right-0 {
    border-right: none;
    border-bottom: 1px solid #3f51b5;
    border-left: 1px solid #3f51b5;
    border-top: 1px solid #3f51b5;
  }

  .ul-b4__border-bottom-0 {
    border-bottom: none;
    border-left: 1px solid #3f51b5;
    border-top: 1px solid #3f51b5;
    border-right: 1px solid #3f51b5;
  }

  .ul-b4__border-left-0 {
    border-bottom: 1px solid #3f51b5;
    border-left: none;
    border-top: 1px solid #3f51b5;
    border-right: 1px solid #3f51b5;
  }

  .ul-b4-display__info-1 {
    margin-bottom: 60px;
  }

  .ul-b4-display__info-1 p {
    font-size: 14px;
    color: #70657b;
  }

  .ul-b4-display__table {
    margin-top: 20px;
  }

  .ul-b4-display__table tr th {
    font-size: 17px;
  }

  .ul-b4-display__table tr td {
    font-size: 14px;
  }

  .ul-display__print ul li code {
    font-size: 15px;
  }

  .ul-display__margin {
    margin: 40px 0;
  }

  .ul-display__paragraph {
    font-size: 14px;
  }

  .ul-pricing__table-1 {
    text-align: center;
    border-right: 1px solid #eee;
  }

  .ul-pricing__image {
    margin: 2rem 0;
  }

  .ul-pricing__image i {
    font-size: 7rem;
  }

  .ul-pricing__text {
    font-size: 1.2rem;
  }

  .ul-pricing__list {
    margin-bottom: 2.1rem;
  }

  .ul-pricing__main-number {
    margin: 20px 0;
  }

  .ul-pricing__list p {
    padding: 0 2.1rem;
    line-height: 2;
    font-size: 1rem;
  }

  .ul-pricing__table-list {
    width: 70%;
    margin: 0 auto;
    width: 70%;
    margin: 0 auto;
    padding-bottom: 30px;
  }

  .ul-pricing__table-2 {
    text-align: center;
    border-right: 1px solid #eee;
    padding-bottom: 15px;
  }

  .ul-pricing__month {
    font-size: 18px;
  }

  .ul-pricing__table-2:hover {
    transform: scale(1.1);
    transition: 0.6s ease-in-out;
    position: relative;
    z-index: 2;
    background-color: #f8f9fa;
  }

  .ul-pricing__header {
    margin-bottom: 30px;
    background-color: #f8f9fa;
    border-bottom-left-radius: 210px;
    border-bottom-right-radius: 210px;
    padding-bottom: 12px;
  }

  .ul-pricing__table-listing ul {
    margin: 0;
    padding: 0;
  }

  .ul-pricing__table-listing ul li {
    list-style: none;
    padding: 10px 0;
  }

  @media only screen and (max-width: 1100px) {
    .ul-pricing__main-number h3 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 991px) {
    .ul-pricing__table-1 {
      border-right: none;
    }
  }

  .ul-contact-list__image-title {
    display: flex;
    align-items: center;
  }

  .ul-link-action {
    font-size: 20px;
  }

  .ul-link-action i {
    margin-right: 5px;
  }

  .ul-contact-page__profile {
    display: flex;
    align-items: center;
  }
  .ul-contact-page__profile .user-profile {
    height: 150px;
    width: 150px;
  }

  .ul-contact-page__info {
    /* margin-right: 2px; */
    margin-left: 23px;
    width: calc(100% - 126px);
  }

  .ul-form-input {
    width: 50%;
    transition: 0.5s ease-in-out;
  }

  @media only screen and (max-width: 425px) {
    .ul-contact-page__profile {
      text-align: center;
      display: block;
    }
    .ul-contact-page__info {
      margin-left: 0;
      width: 100%;
    }
  }

  .ul-contact-detail__info-1 {
    margin: 15px 0;
  }

  .ul-contact-detail__info .ul-contact-detail__info-1 {
    margin: 15px 0;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 10px;
  }

  .ul-contact-detail__social-1 {
    display: flex;
    align-items: center;
  }

  .ul-contact-detail__social {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  span.ul-contact-detail__followers {
    font-size: 25px;
  }

  .ul-contact-detail__timeline-image img {
    width: 30%;
    height: 70%;
  }

  .ul-contact-detail__timeline-image {
    display: flex;
    justify-content: space-between;
  }

  .ul-contact-detail__timeline-row {
    margin: 20px 0;
  }

  .ul-contact-detail__timeline-image-2 img {
    width: 20%;
  }

  .ul-contact-detail__timeline-image-info {
    margin-left: 15px;
  }

  .ul-contact-detail__timeline-image-2.mt-3 {
    display: flex;
    /* align-items: center; */
    align-items: flex-end;
  }

  .ul-contact-detail__profile {
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
  }

  .ul-weather-card__img-overlay {
    background: url("../../images/products/weather-2.jpg");
    background-size: cover;
    height: 400px;
    background-position-y: center;
    background-repeat: no-repeat;
  }

  .display-4 {
    font-size: 3.5rem;
  }

  .ul-weather-card__weather-time {
    padding: 30px;
  }

  .ul-weather-card__img-overlay span {
    font-size: 20px;
  }

  .display-5 {
    font-size: 2.5rem !important;
  }

  .ul-weather-card__weather-info i {
    font-size: 25px;
    font-weight: 600;
  }

  .ul-weather-card__weather-info {
    margin: 20px 0;
  }

  .ul-weather-card__font-md {
    font-size: 20px;
    font-weight: 600;
  }

  .ul-weather-card__header {
    display: flex;
    align-items: center;
  }

  .ul-weather-card__header span {
    color: #fff;
    font-size: 18px;
  }

  .ul-weather-card__calendar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ul-weather-card__calendar-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ul-weather-card__both-group {
    padding: 25px;
  }

  .ul-weather-card__inner-card {
    width: 100%;
  }

  .ul-weather-card__info {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }

  .card .ul-weather-card__bg-img img {
    width: 100%;
    height: 300px;
  }

  .ul-weather-card__img-overlay-2 {
    position: absolute;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
  }

  .ul-weather-card__img-overlay-2 span {
    color: #fff;
  }

  .font-25 {
    font-size: 25px;
  }

  .ul-weather-card__footer-color {
    color: #3f51b5;
    font-weight: 600;
  }

  .ul-weather-card__footer-color-2 {
    color: #cb3066;
  }

  .ul-weather-card__grid-style {
    display: grid;
  }

  .ul-weather-card__weather-s-title {
    font-size: 1rem;
  }

  .ul-weather-card__footer-color-3 h5 {
    color: #20c997;
  }

  .ul-weather-card__footer-color-3 h4 {
    color: #20c997;
  }

  .ul-widget-app__row-comments {
    display: flex;
    align-items: center;
    padding: 14px;
    margin-bottom: 10px;
  }

  .ul-widget-app__row-comments:hover {
    background-color: #eee;
  }

  .ul-widget-app__row-comments:hover .ul-widget-app__icons a i {
    opacity: 1;
    visibility: visible;
  }

  .ul-widget-app__icons a i:hover {
    color: #663399;
  }

  .ul-widget-app__comment {
    width: calc(100% - 86px);
  }

  .ul-widget-app__profile-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ul-widget-app__icons {
    flex-grow: 1;
  }

  .ul-widget-app__icons {
    font-size: 17px;
  }

  .ul-widget-app__icons a i {
    margin: 0 3px;
    font-weight: 600;
    opacity: 0;
    visibility: hidden;
    vertical-align: middle;
  }

  .ul-widget-app__recent-messages {
    height: calc(100vh - 350px);
    overflow-y: scroll;
    cursor: pointer;
  }

  .ul-widget-app__skill-margin span {
    margin: 0 5px;
  }

  .ul-widget-app__profile-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .ul-widget-app__profile-footer-font a span {
    vertical-align: middle;
  }

  .ul-widget-app__profile-footer-font a i {
    vertical-align: middle;
  }

  .ul-widget-app__browser-list-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ul-widget-app__browser-list-1 span {
    flex-grow: 1;
  }

  .ul-widget-app__browser-list-1 span:last-child {
    flex-grow: 0;
  }

  span.ul-widget-app__find-font {
    position: absolute;
    /* left: 0; */
    top: 4px;
    right: 10px;
    color: #663399;
    bottom: 0;
    font-size: 20px;
  }

  .ul-widget-app__small-title {
    display: grid;
  }

  .user-profile.ul-widget-app__profile--position.mb-4 {
    position: absolute;
    top: 40%;
    left: 0;
    margin: 0 auto;
    right: 0;
    transform: translateY(-50%);
  }

  .timeline--align {
    bottom: 8px;
  }

  .ul-contact-list__image-title {
    display: flex;
    align-items: center;
  }

  .ul-link-action {
    font-size: 20px;
  }

  .ul-link-action i {
    margin-right: 5px;
  }

  .ul-product-detail__features ul li {
    list-style: none;
    margin: 8px 0;
  }

  .ul-todo-sidebar {
    float: left;
    min-width: 240px;
    width: 240px;
  }

  .ul-todo-mobile-menu {
    display: none;
  }

  .ul-todo-list-content {
    height: 100vh;
    position: relative;
  }

  .ul-todo-sidebar.open {
    left: 1px;
  }

  i.todo-sidebar-close {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    .ul-todo-list-content {
      overflow-x: hidden;
    }
    i.todo-sidebar-close {
      display: block;
    }
    .ul-todo-sidebar {
      position: absolute;
      z-index: 50;
      left: -260px;
      transition: all 0.2s ease;
    }
    .ul-todo-mobile-menu {
      display: block;
    }
  }

  .ul-contact-list-body {
    margin-top: -60px;
    position: relative;
  }

  .ul-contact-left-side {
    min-width: 230px;
    width: 230px;
    margin-right: 25px;
  }

  .ul-contact-content {
    width: calc(100% - 220px);
    /* margin-right: 30px; */
  }

  .ul-contact-main-content {
    width: 100% !important;
    display: flex;
    position: relative;
    overflow-x: hidden;
    height: 100vh;
  }

  .ul-contact-mobile-icon {
    display: none;
  }

  .contact-open {
    left: 0px !important;
  }

  .contact-close-mobile-icon {
    display: none;
  }

  .ul-contact-list-table--label label {
    display: none !important;
  }

  .ul-contact-list-table {
    min-width: 570px;
  }

  @media only screen and (max-width: 1000px) {
    .contact-close-mobile-icon {
      display: block;
    }
    .ul-contact-left-side {
      position: absolute;
      top: 0;
      z-index: 99;
      left: -235px;
      transition: all 0.2s ease;
    }
    .ul-contact-content {
      width: calc(100% - 0px);
      /* margin-right: 30px; */
    }
    .ul-contact-mobile-icon {
      display: block;
    }
  }

  html {
    font-size: 16px;
  }

  body {
    letter-spacing: 0.3px;
    line-height: 1.6;
    background: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  [tabindex="-1"]:focus {
    outline: none;
  }

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    height: 0;
  }

  select,
  button,
  textarea,
  input {
    vertical-align: baseline;
  }

  div {
    box-sizing: border-box;
  }

  html[dir="rtl"],
  html[dir="ltr"],
  body[dir="rtl"],
  body[dir="ltr"] {
    unicode-bidi: embed;
  }

  bdo[dir="rtl"] {
    direction: rtl;
    unicode-bidi: bidi-override;
  }

  bdo[dir="ltr"] {
    direction: ltr;
    unicode-bidi: bidi-override;
  }

  img {
    max-width: 100%;
  }

  a,
  a:focus,
  a:hover {
    text-decoration: none;
  }

  blockquote {
    border-left: 2px solid #eee;
    padding-left: 1rem;
    margin-bottom: 1rem;
    font-size: 1.01625rem;
  }

  .close:not(:disabled):not(.disabled):hover,
  .close:not(:disabled):not(.disabled):focus {
    outline: none;
  }

  .o-hidden {
    overflow: hidden;
  }

  .separator-breadcrumb {
    margin-bottom: 2rem;
  }

  .line-height-1 {
    line-height: 1;
  }

  .line-height-2 {
    line-height: 2;
  }

  .line-height-3 {
    line-height: 3;
  }

  .line-height-4 {
    line-height: 4;
  }

  .line-height-5 {
    line-height: 5;
  }

  .app-inro-circle {
    text-align: center;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: calc(50% - 150px);
  }
  .app-inro-circle .big-bubble {
    height: 280px;
    width: 280px;
    margin: 0 auto 20px;
    text-align: center;
    background: #663399;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .app-inro-circle .big-bubble i {
    font-size: 108px;
    color: #ffffff;
  }

  .loadscreen {
    text-align: center;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    height: 100vh;
    background: #ffffff;
    z-index: 999;
  }
  .loadscreen .loader {
    position: absolute;
    top: calc(50vh - 50px);
    left: 0;
    right: 0;
    margin: auto;
  }
  .loadscreen .logo {
    display: inline-block !important;
    width: 80px;
    height: 80px;
  }

  .img-preview {
    overflow: hidden;
    float: left;
    background-color: #eee;
    width: 100%;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .preview-lg {
    width: 200px;
    height: 150px;
  }

  .preview-md {
    width: 150px;
    height: 120px;
  }

  .preview-sm {
    width: 100px;
    height: 75px;
  }

  .custom-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  @media (max-width: 576px) {
    .app-inro-circle .big-bubble {
      width: 220px;
      height: 220px;
    }
    button.close {
      float: right;
      font-size: 1.2195rem;
      font-weight: 700;
      line-height: 1;
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity: 0.5;
      position: absolute;
      top: 0;
      right: 5px;
    }
  }

  [dir="rtl"] .rtl-ps-none .ps__rail-x,
  [dir="rtl"] .rtl-ps-none .ps__rail-y {
    display: none;
  }

  .dark-theme {
    background: #10163a;
  }
  .dark-theme .sidebar-left,
  .dark-theme .sidebar-left-secondary,
  .dark-theme .main-header,
  .dark-theme .card {
    background: #10163a;
    color: #fff !important;
  }
  .dark-theme .main-content-wrap,
  .dark-theme
    .chat-sidebar-container
    .chat-content-wrap
    .chat-content
    .message {
    background-color: #262c49;
    color: #c2c6dc !important;
  }
  .dark-theme
    .chat-sidebar-container
    .chat-content-wrap
    .chat-content
    .message::before {
    border-color: transparent transparent #262c49 transparent;
  }
  .dark-theme h1,
  .dark-theme h2,
  .dark-theme h3,
  .dark-theme h4,
  .dark-theme h5,
  .dark-theme h6,
  .dark-theme .card-title,
  .dark-theme .text-title {
    color: #c2c6dc;
  }
  .dark-theme .card-title {
    color: #c2c6dc !important;
  }
  .dark-theme a {
    color: #c2c6dc !important;
  }
  .dark-theme input,
  .dark-theme textarea {
    background: #262c49 !important;
    border-color: #10163a;
  }
  .dark-theme .app-footer {
    margin-top: 2rem;
    background: #10163a;
    padding: 1.25rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .dark-theme .app-footer .footer-bottom {
    width: 100%;
  }
  .dark-theme .app-footer .footer-bottom .logo {
    width: 3rem;
    height: auto;
    margin: 4px;
  }
  .dark-theme .navigation-left .nav-item {
    color: #c2c6dc !important;
    border-bottom: 1px solid #262c49 !important;
  }
  .dark-theme .navigation-left .nav-item .nav-item-hold {
    color: #c2c6dc !important;
  }
  .dark-theme .navigation-left .nav-item .nav-item-hold a {
    color: #c2c6dc !important;
  }
  .dark-theme .sidebar-left-secondary .childNav {
    list-style: none;
    padding: 0;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item {
    display: block;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a {
    color: #c2c6dc;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    padding: 12px 24px;
    transition: 0.15s all ease-in;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a:hover {
    background: #262c49;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a.open {
    color: #663399;
    background: #262c49;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a.open a {
    background: #262c49;
  }
  .dark-theme
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a.router-link-active {
    color: #663399;
  }
  .dark-theme
    .sidebar-left-secondary
    .childNav
    li.nav-item
    a.router-link-active
    .nav-icon {
    color: #663399;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a .nav-icon {
    font-size: 18px;
    margin-right: 8px;
    vertical-align: middle;
    color: #c2c6dc;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a .item-name {
    vertical-align: middle;
    font-weight: 400;
  }
  .dark-theme .sidebar-left-secondary .childNav li.nav-item a .dd-arrow {
    margin-left: auto;
    font-size: 11px;
    transition: all 0.3s ease-in;
  }
  .dark-theme .search-ui {
    position: fixed;
    background: #262c49;
  }
  .dark-theme .search-ui input.search-input {
    background: #262c49;
  }
  .dark-theme .search-ui input.search-input::placeholder {
    color: #c2c6dc;
  }
  .dark-theme .search-bar {
    background: #10163a !important;
    border: 1px solid #262c49 !important;
  }
  .dark-theme .search-bar input {
    color: #c2c6dc !important;
    background: #10163a !important;
  }
  .dark-theme .search-bar .search-icon {
    font-size: 18px;
    width: 24px;
    display: inline-block;
  }
  .dark-theme .border-top {
    border-top: 1px solid #10163a !important;
  }
  .dark-theme .tab-border {
    border: 1px dashed #262c49 !important;
    margin: 30px 0 !important;
  }
  .dark-theme table.vgt-table {
    background: #10163a;
  }
  .dark-theme table.tableOne.vgt-table thead tr th {
    background: #10163a;
    border-color: #262c49;
  }
  .dark-theme .list-group-item {
    background-color: #10163a;
    border: 1px solid #262c49;
  }
  .dark-theme .page-link {
    color: #c2c6dc;
    background-color: #262c49;
    border: 1px solid #10163a;
  }
  .dark-theme .dropdown-menu {
    color: #c2c6dc;
    background-color: #262c49;
    border: 1px solid #262c49;
  }
  .dark-theme .table td {
    border-top: 1px solid #262c49;
  }
  .dark-theme .table thead th {
    border-bottom: 2px solid #262c49;
  }
  .dark-theme .table .thead-light th {
    color: #c2c6dc;
    background-color: #262c49;
    border-color: #262c49;
  }
  .dark-theme .apexcharts-xaxis-label {
    fill: #c2c6dc;
  }
  .dark-theme .apexcharts-yaxis-label {
    fill: #c2c6dc;
  }
  .dark-theme .apexcharts-tooltip.light {
    border: 1px solid #10163a;
    background: #262c49;
  }
  .dark-theme .apexcharts-tooltip.light .apexcharts-tooltip-title {
    background: #10163a;
    border-bottom: 1px solid #10163a;
  }
  .dark-theme .apexcharts-legend-text {
    color: #c2c6dc !important;
  }
  .dark-theme .input-group-text {
    color: #c2c6dc;
    background-color: #262c49;
    border: 1px solid #262c49;
  }
  .dark-theme .custom-select {
    color: #c2c6dc;
    background-color: #262c49;
    border: 1px solid #262c49;
  }
  .dark-theme .header-icon:hover {
    background: #262c49 !important;
  }
  .dark-theme .calendar-parent {
    background-color: #10163a;
  }
  .dark-theme .cv-day,
  .dark-theme .cv-event,
  .dark-theme .cv-header-day,
  .dark-theme .cv-header-days,
  .dark-theme .cv-week,
  .dark-theme .cv-weeks {
    border-style: solid;
    border-color: #262c49;
  }
  .dark-theme .theme-default .cv-day.outsideOfMonth,
  .dark-theme .theme-default .cv-day.past {
    background-color: #10163a;
  }
  .dark-theme .theme-default .cv-day.today {
    background-color: #262c49;
  }
  .dark-theme .theme-default .cv-header,
  .dark-theme .theme-default .cv-header-day {
    background-color: #262c49;
  }
  .dark-theme .cv-header,
  .dark-theme .cv-header button {
    border-style: solid;
    border-color: #10163a;
    background: #262c49;
  }
  .dark-theme .vgt-global-search.vgt-clearfix {
    background: #10163a;
  }
  .dark-theme table.tableOne tbody tr th.line-numbers {
    background: #10163a;
  }
  .dark-theme div.vgt-wrap__footer.vgt-clearfix {
    background: #10163a;
  }
  .dark-theme table.vgt-table td {
    border-bottom: 1px solid #262c49;
    color: #c2c6dc;
  }
  .dark-theme table.tableOne tbody tr th.vgt-checkbox-col {
    background: #10163a;
  }
  .dark-theme th.line-numbers {
    border-bottom: 1px solid #10163a;
  }
  .dark-theme th.vgt-checkbox-col {
    border-bottom: 1px solid #10163a;
  }
  .dark-theme .ul-widget__item {
    border-bottom: 0.07rem dashed #262c49;
  }
  .dark-theme .page-item.disabled .page-link {
    background-color: #10163a;
    border-color: #10163a;
  }
  .dark-theme ul.gull-pagination li .page-link {
    border-color: #10163a !important;
  }
  .dark-theme ul.gull-pagination li .page-link:hover {
    background: #10163a;
  }
  .dark-theme .layout-sidebar-vertical .sidebar-panel {
    box-shadow: 0 1px 15px #262c49, 0 1px 6px #262c49;
    background: #10163a;
  }
  .dark-theme .layout-sidebar-vertical .main-content-wrap .main-header {
    background: #10163a !important;
  }
  .dark-theme .layout-horizontal-bar .header-topnav {
    background: #10163a;
    box-shadow: 0 1px 15px transparent, 0 1px 6px transparent;
  }
  .dark-theme .layout-horizontal-bar .header-topnav .topnav a {
    color: #c2c6dc !important;
  }
  .dark-theme .layout-horizontal-bar .header-topnav .topnav ul ul {
    background: #10163a;
    color: #c2c6dc;
  }
  .dark-theme .layout-horizontal-bar .header-topnav .topnav ul li ul li:hover {
    background: #262c49;
  }
  .dark-theme .main-header .show .header-icon {
    background: #262c49;
  }
  .dark-theme .main-header .notification-dropdown {
    color: #c2c6dc;
  }
  .dark-theme .main-header .notification-dropdown .dropdown-item {
    border-bottom: 1px solid #10163a;
    color: #c2c6dc;
  }
  .dark-theme .main-header .notification-dropdown .notification-icon {
    background: #10163a !important;
  }
  .dark-theme .dropdown-item:focus,
  .dark-theme .dropdown-item:hover {
    color: #c2c6dc;
    text-decoration: none;
    background-color: #10163a;
  }
`,pb=A.div`
  width: 100%;
  position: relative;

  ${fb}
`,gb=({cssFile:t})=>(L.useEffect(()=>{const e=document.createElement("link");return e.rel="stylesheet",e.href=t,document.head.appendChild(e),()=>{document.head.removeChild(e)}},[t]),null),ub=({onLogin:t})=>d.jsxs(d.Fragment,{children:[d.jsx(gb,{cssFile:"./styles.css"}),d.jsx(pb,{children:d.jsx("div",{className:"main-content-wrap container-fluid vh-100 mt-0 p-0",children:d.jsxs("div",{className:"row text-center align-items-center bg ",style:{height:"100%",position:"absolute",width:"100%",margin:0},children:[d.jsxs("div",{className:"col-md-4 right_register pl-5",children:[d.jsx("h2",{className:"font-weight-bold mt-5",children:"Inicio sesión"}),d.jsx("div",{className:"col-md-12",children:d.jsx("img",{src:"https://te-entrego.com/admin-assets/images/Registro_Ilus.svg",alt:""})}),d.jsx("h3",{children:"¡Todo lo que necesitas para el control contraentrega y logística de tu Ecommerce!"}),d.jsx("p",{children:"¡Comienza ya!"}),d.jsxs("h5",{children:[" ",d.jsx("strong",{children:"Te-entrego "})," S.A.S. 2024"]})]}),d.jsx("div",{className:"col-md-8 left_register bg-login",children:d.jsx("div",{className:"card",children:d.jsxs("div",{className:"card-body",children:[d.jsx("div",{className:"row",children:d.jsx("div",{className:"col-md-12 mb-3 mt-4",children:d.jsx("img",{src:"https://te-entrego.com/admin-assets/images/logo_registro.svg",alt:"Logo te entrego"})})}),d.jsxs("form",{action:"https://te-entrego.com/teadmin/public/login",method:"post","accept-charset":"utf-8",children:[d.jsx("input",{type:"hidden",name:"_te_token",value:"7f6d20ce15f9fc5a00e21bb03dea7f67"})," ",d.jsx("div",{className:"row mt-3 justify-content-center",children:d.jsxs("div",{className:"col-md-6 form-group all-labels text-left",children:[d.jsx("label",{children:"*Correo electrónico"}),d.jsx("input",{type:"email",className:"form-control",id:"usuario",name:"usuario",placeholder:"* obligatorio",required:!0})]})}),d.jsx("div",{className:"row mt-3 justify-content-center",children:d.jsxs("div",{className:"col-md-6 form-group all-labels text-left",children:[d.jsx("label",{children:"*Contraseña"}),d.jsx("input",{type:"password",className:"form-control",id:"clave",name:"clave",placeholder:"* obligatorio",required:!0})]})}),d.jsx("div",{className:"row mt-3 justify-content-center",children:d.jsxs("div",{className:"col-md-12",children:[d.jsx("button",{onClick:t,className:"btn btn-info pl-5 pr-5 font-weight-bold m-2",children:"Ingresar"}),d.jsxs("a",{href:"https://te-entrego.com/teadmin/public/registro/nuevo",className:"btn btn-dark pl-5 pr-5 font-weight-bold",id:"btn_recuperar",children:["Eres nuevo?"," "]})]})}),d.jsx("div",{className:"row mt-3 justify-content-center",children:d.jsx("div",{className:"col-md-6 mb-5",children:d.jsxs("a",{href:"https://te-entrego.com/teadmin/public/recuperar",className:"btn btn-link p-0",id:"btn_recuperar",children:["Recupera tu contraseña"," "]})})})]})]})})})]})})})]}),bb=({shopName:t})=>{Dm();const[e,r]=L.useState(!1);L.useEffect(()=>{r(!0)},[]);const[o,a]=L.useState(!0),n=()=>{a(!0)};return o?e&&d.jsx(hu,{children:d.jsx(ug,{defaultPath:"shipments",children:d.jsxs(mb,{children:[d.jsx(Lu,{}),d.jsx(db,{shopName:t})]})})}):d.jsx(d.Fragment,{children:d.jsx(ub,{onLogin:n})})};function hb(){return d.jsx(bb,{shopName:"woocommerce"})}cm(document.getElementById("root")).render(d.jsx(hb,{}));
