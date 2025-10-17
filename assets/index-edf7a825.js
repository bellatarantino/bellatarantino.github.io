var tg=Object.defineProperty;var ng=(t,e,n)=>e in t?tg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var En=(t,e,n)=>(ng(t,typeof e!="symbol"?e+"":e,n),n);function rg(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Il(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D6={exports:{}},Pl={},O6={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),ig=Symbol.for("react.portal"),sg=Symbol.for("react.fragment"),og=Symbol.for("react.strict_mode"),ag=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),ug=Symbol.for("react.forward_ref"),dg=Symbol.for("react.suspense"),hg=Symbol.for("react.memo"),fg=Symbol.for("react.lazy"),F3=Symbol.iterator;function pg(t){return t===null||typeof t!="object"?null:(t=F3&&t[F3]||t["@@iterator"],typeof t=="function"?t:null)}var L6={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F6=Object.assign,V6={};function _s(t,e,n){this.props=t,this.context=e,this.refs=V6,this.updater=n||L6}_s.prototype.isReactComponent={};_s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function U6(){}U6.prototype=_s.prototype;function d9(t,e,n){this.props=t,this.context=e,this.refs=V6,this.updater=n||L6}var h9=d9.prototype=new U6;h9.constructor=d9;F6(h9,_s.prototype);h9.isPureReactComponent=!0;var V3=Array.isArray,B6=Object.prototype.hasOwnProperty,f9={current:null},z6={key:!0,ref:!0,__self:!0,__source:!0};function j6(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)B6.call(e,r)&&!z6.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:f9.current}}function mg(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function p9(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function gg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var U3=/\/+/g;function v0(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gg(""+t.key):e.toString(36)}function r1(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case ig:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+v0(o,0):r,V3(i)?(n="",t!=null&&(n=t.replace(U3,"$&/")+"/"),r1(i,e,n,"",function(c){return c})):i!=null&&(p9(i)&&(i=mg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(U3,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",V3(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+v0(s,a);o+=r1(s,e,n,l,i)}else if(l=pg(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+v0(s,a++),o+=r1(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(t,e,n){if(t==null)return t;var r=[],i=0;return r1(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Cg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},i1={transition:null},yg={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:i1,ReactCurrentOwner:f9};Y.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!p9(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=_s;Y.Fragment=sg;Y.Profiler=ag;Y.PureComponent=d9;Y.StrictMode=og;Y.Suspense=dg;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yg;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=F6({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=f9.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)B6.call(e,l)&&!z6.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:cg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lg,_context:t},t.Consumer=t};Y.createElement=j6;Y.createFactory=function(t){var e=j6.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:ug,render:t}};Y.isValidElement=p9;Y.lazy=function(t){return{$$typeof:fg,_payload:{_status:-1,_result:t},_init:Cg}};Y.memo=function(t,e){return{$$typeof:hg,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=i1.transition;i1.transition={};try{t()}finally{i1.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return at.current.useCallback(t,e)};Y.useContext=function(t){return at.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return at.current.useDeferredValue(t)};Y.useEffect=function(t,e){return at.current.useEffect(t,e)};Y.useId=function(){return at.current.useId()};Y.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return at.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};Y.useRef=function(t){return at.current.useRef(t)};Y.useState=function(t){return at.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return at.current.useTransition()};Y.version="18.2.0";O6.exports=Y;var _=O6.exports;const Jt=Il(_),vg=rg({__proto__:null,default:Jt},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g=_,wg=Symbol.for("react.element"),Eg=Symbol.for("react.fragment"),Sg=Object.prototype.hasOwnProperty,Tg=_g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xg={key:!0,ref:!0,__self:!0,__source:!0};function $6(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Sg.call(e,r)&&!xg.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wg,type:t,key:s,ref:o,props:i,_owner:Tg.current}}Pl.Fragment=Eg;Pl.jsx=$6;Pl.jsxs=$6;D6.exports=Pl;var m9=D6.exports;const G=m9.Fragment,h=m9.jsx,I=m9.jsxs;var Ec={},W6={exports:{}},kt={},H6={exports:{}},K6={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,B){var V=N.length;N.push(B);e:for(;0<V;){var le=V-1>>>1,fe=N[le];if(0<i(fe,B))N[le]=B,N[V]=fe,V=le;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],V=N.pop();if(V!==B){N[0]=V;e:for(var le=0,fe=N.length,Pt=fe>>>1;le<Pt;){var ct=2*(le+1)-1,$n=N[ct],At=ct+1,_n=N[At];if(0>i($n,V))At<fe&&0>i(_n,$n)?(N[le]=_n,N[At]=V,le=At):(N[le]=$n,N[ct]=V,le=ct);else if(At<fe&&0>i(_n,V))N[le]=_n,N[At]=V,le=At;else break e}}return B}function i(N,B){var V=N.sortIndex-B.sortIndex;return V!==0?V:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(N){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=N)r(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function E(N){if(v=!1,C(N),!y)if(n(l)!==null)y=!0,he(S);else{var B=n(c);B!==null&&ae(E,B.startTime-N)}}function S(N,B){y=!1,v&&(v=!1,g(T),T=-1),p=!0;var V=f;try{for(C(B),d=n(l);d!==null&&(!(d.expirationTime>B)||N&&!U());){var le=d.callback;if(typeof le=="function"){d.callback=null,f=d.priorityLevel;var fe=le(d.expirationTime<=B);B=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&r(l),C(B)}else r(l);d=n(l)}if(d!==null)var Pt=!0;else{var ct=n(c);ct!==null&&ae(E,ct.startTime-B),Pt=!1}return Pt}finally{d=null,f=V,p=!1}}var k=!1,x=null,T=-1,F=5,b=-1;function U(){return!(t.unstable_now()-b<F)}function Be(){if(x!==null){var N=t.unstable_now();b=N;var B=!0;try{B=x(!0,N)}finally{B?vt():(k=!1,x=null)}}else k=!1}var vt;if(typeof m=="function")vt=function(){m(Be)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,Re=_t.port2;_t.port1.onmessage=Be,vt=function(){Re.postMessage(null)}}else vt=function(){w(Be,0)};function he(N){x=N,k||(k=!0,vt())}function ae(N,B){T=w(function(){N(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,he(S))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var V=f;f=B;try{return N()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=f;f=N;try{return B()}finally{f=V}},t.unstable_scheduleCallback=function(N,B,V){var le=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?le+V:le):V=le,N){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=V+fe,N={id:u++,callback:B,priorityLevel:N,startTime:V,expirationTime:fe,sortIndex:-1},V>le?(N.sortIndex=V,e(c,N),n(l)===null&&N===n(c)&&(v?(g(T),T=-1):v=!0,ae(E,V-le))):(N.sortIndex=fe,e(l,N),y||p||(y=!0,he(S))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var B=f;return function(){var V=f;f=B;try{return N.apply(this,arguments)}finally{f=V}}}})(K6);H6.exports=K6;var kg=H6.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G6=_,Tt=kg;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q6=new Set,ko={};function hi(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(ko[t]=e,t=0;t<e.length;t++)q6.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sc=Object.prototype.hasOwnProperty,Ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B3={},z3={};function Pg(t){return Sc.call(z3,t)?!0:Sc.call(B3,t)?!1:Ig.test(t)?z3[t]=!0:(B3[t]=!0,!1)}function Ag(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bg(t,e,n,r){if(e===null||typeof e>"u"||Ag(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var g9=/[\-:]([a-z])/g;function C9(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(g9,C9);Ke[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(g9,C9);Ke[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(g9,C9);Ke[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function y9(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bg(e,n,i,r)&&(n=null),r||i===null?Pg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=G6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Si=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),v9=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),Y6=Symbol.for("react.provider"),Q6=Symbol.for("react.context"),_9=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),kc=Symbol.for("react.suspense_list"),w9=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),X6=Symbol.for("react.offscreen"),j3=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=j3&&t[j3]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,_0;function Xs(t){if(_0===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_0=e&&e[1]||""}return`
`+_0+t}var w0=!1;function E0(t,e){if(!t||w0)return"";w0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{w0=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xs(t):""}function Rg(t){switch(t.tag){case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return t=E0(t.type,!1),t;case 11:return t=E0(t.type.render,!1),t;case 1:return t=E0(t.type,!0),t;default:return""}}function Ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Si:return"Portal";case Tc:return"Profiler";case v9:return"StrictMode";case xc:return"Suspense";case kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q6:return(t.displayName||"Context")+".Consumer";case Y6:return(t._context.displayName||"Context")+".Provider";case _9:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case w9:return e=t.displayName||null,e!==null?e:Ic(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return Ic(t(e))}catch{}}return null}function Ng(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(e);case 8:return e===v9?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J6(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mg(t){var e=J6(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=Mg(t))}function Z6(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=J6(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function k1(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pc(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $3(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e7(t,e){e=e.checked,e!=null&&y9(t,"checked",e,!1)}function Ac(t,e){e7(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&bc(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function W3(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bc(t,e,n){(e!=="number"||k1(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function H3(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Js(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function t7(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function K3(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n7(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n7(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,r7=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dg=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){Dg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function i7(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function s7(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=i7(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Og=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mc(t,e){if(e){if(Og[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oc=null;function E9(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lc=null,Wi=null,Hi=null;function G3(t){if(t=ua(t)){if(typeof Lc!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Ml(e),Lc(t.stateNode,t.type,e))}}function o7(t){Wi?Hi?Hi.push(t):Hi=[t]:Wi=t}function a7(){if(Wi){var t=Wi,e=Hi;if(Hi=Wi=null,G3(t),e)for(t=0;t<e.length;t++)G3(e[t])}}function l7(t,e){return t(e)}function c7(){}var S0=!1;function u7(t,e,n){if(S0)return t(e,n);S0=!0;try{return l7(t,e,n)}finally{S0=!1,(Wi!==null||Hi!==null)&&(c7(),a7())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Fc=!1;if(Mn)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Fc=!1}function Lg(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var so=!1,I1=null,P1=!1,Vc=null,Fg={onError:function(t){so=!0,I1=t}};function Vg(t,e,n,r,i,s,o,a,l){so=!1,I1=null,Lg.apply(Fg,arguments)}function Ug(t,e,n,r,i,s,o,a,l){if(Vg.apply(this,arguments),so){if(so){var c=I1;so=!1,I1=null}else throw Error(A(198));P1||(P1=!0,Vc=c)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d7(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function q3(t){if(fi(t)!==t)throw Error(A(188))}function Bg(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return q3(i),t;if(s===r)return q3(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function h7(t){return t=Bg(t),t!==null?f7(t):null}function f7(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f7(t);if(e!==null)return e;t=t.sibling}return null}var p7=Tt.unstable_scheduleCallback,Y3=Tt.unstable_cancelCallback,zg=Tt.unstable_shouldYield,jg=Tt.unstable_requestPaint,ke=Tt.unstable_now,$g=Tt.unstable_getCurrentPriorityLevel,S9=Tt.unstable_ImmediatePriority,m7=Tt.unstable_UserBlockingPriority,A1=Tt.unstable_NormalPriority,Wg=Tt.unstable_LowPriority,g7=Tt.unstable_IdlePriority,Al=null,fn=null;function Hg(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:qg,Kg=Math.log,Gg=Math.LN2;function qg(t){return t>>>=0,t===0?32:31-(Kg(t)/Gg|0)|0}var Oa=64,La=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function b1(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Zs(a):(s&=o,s!==0&&(r=Zs(s)))}else o=n&~i,o!==0?r=Zs(o):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function Yg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Yg(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Uc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C7(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function T0(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function Xg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function T9(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function y7(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v7,x9,_7,w7,E7,Bc=!1,Fa=[],or=null,ar=null,lr=null,Ao=new Map,bo=new Map,Qn=[],Jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Q3(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function Fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ua(e),e!==null&&x9(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Zg(t,e,n,r,i){switch(e){case"focusin":return or=Fs(or,t,e,n,r,i),!0;case"dragenter":return ar=Fs(ar,t,e,n,r,i),!0;case"mouseover":return lr=Fs(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ao.set(s,Fs(Ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bo.set(s,Fs(bo.get(s)||null,t,e,n,r,i)),!0}return!1}function S7(t){var e=jr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=d7(n),e!==null){t.blockedOn=e,E7(t.priority,function(){_7(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function s1(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oc=r,n.target.dispatchEvent(r),Oc=null}else return e=ua(n),e!==null&&x9(e),t.blockedOn=n,!1;e.shift()}return!0}function X3(t,e,n){s1(t)&&n.delete(e)}function eC(){Bc=!1,or!==null&&s1(or)&&(or=null),ar!==null&&s1(ar)&&(ar=null),lr!==null&&s1(lr)&&(lr=null),Ao.forEach(X3),bo.forEach(X3)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Bc||(Bc=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,eC)))}function Ro(t){function e(i){return Vs(i,t)}if(0<Fa.length){Vs(Fa[0],t);for(var n=1;n<Fa.length;n++){var r=Fa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Vs(or,t),ar!==null&&Vs(ar,t),lr!==null&&Vs(lr,t),Ao.forEach(e),bo.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)S7(n),n.blockedOn===null&&Qn.shift()}var Ki=jn.ReactCurrentBatchConfig,R1=!0;function tC(t,e,n,r){var i=ee,s=Ki.transition;Ki.transition=null;try{ee=1,k9(t,e,n,r)}finally{ee=i,Ki.transition=s}}function nC(t,e,n,r){var i=ee,s=Ki.transition;Ki.transition=null;try{ee=4,k9(t,e,n,r)}finally{ee=i,Ki.transition=s}}function k9(t,e,n,r){if(R1){var i=zc(t,e,n,r);if(i===null)D0(t,e,r,N1,n),Q3(t,r);else if(Zg(i,t,e,n,r))r.stopPropagation();else if(Q3(t,r),e&4&&-1<Jg.indexOf(t)){for(;i!==null;){var s=ua(i);if(s!==null&&v7(s),s=zc(t,e,n,r),s===null&&D0(t,e,r,N1,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else D0(t,e,r,null,n)}}var N1=null;function zc(t,e,n,r){if(N1=null,t=E9(r),t=jr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d7(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return N1=t,null}function T7(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($g()){case S9:return 1;case m7:return 4;case A1:case Wg:return 16;case g7:return 536870912;default:return 16}default:return 16}}var nr=null,I9=null,o1=null;function x7(){if(o1)return o1;var t,e=I9,n=e.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return o1=i.slice(t,1<r?1-r:void 0)}function a1(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function J3(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:J3,this.isPropagationStopped=J3,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},P9=It(ws),ca=_e({},ws,{view:0,detail:0}),rC=It(ca),x0,k0,Us,bl=_e({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:A9,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(x0=t.screenX-Us.screenX,k0=t.screenY-Us.screenY):k0=x0=0,Us=t),x0)},movementY:function(t){return"movementY"in t?t.movementY:k0}}),Z3=It(bl),iC=_e({},bl,{dataTransfer:0}),sC=It(iC),oC=_e({},ca,{relatedTarget:0}),I0=It(oC),aC=_e({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),lC=It(aC),cC=_e({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uC=It(cC),dC=_e({},ws,{data:0}),e2=It(dC),hC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pC[t])?!!e[t]:!1}function A9(){return mC}var gC=_e({},ca,{key:function(t){if(t.key){var e=hC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=a1(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:A9,charCode:function(t){return t.type==="keypress"?a1(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?a1(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CC=It(gC),yC=_e({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t2=It(yC),vC=_e({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:A9}),_C=It(vC),wC=_e({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),EC=It(wC),SC=_e({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TC=It(SC),xC=[9,13,27,32],b9=Mn&&"CompositionEvent"in window,oo=null;Mn&&"documentMode"in document&&(oo=document.documentMode);var kC=Mn&&"TextEvent"in window&&!oo,k7=Mn&&(!b9||oo&&8<oo&&11>=oo),n2=String.fromCharCode(32),r2=!1;function I7(t,e){switch(t){case"keyup":return xC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P7(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xi=!1;function IC(t,e){switch(t){case"compositionend":return P7(e);case"keypress":return e.which!==32?null:(r2=!0,n2);case"textInput":return t=e.data,t===n2&&r2?null:t;default:return null}}function PC(t,e){if(xi)return t==="compositionend"||!b9&&I7(t,e)?(t=x7(),o1=I9=nr=null,xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k7&&e.locale!=="ko"?null:e.data;default:return null}}var AC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i2(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AC[t.type]:e==="textarea"}function A7(t,e,n,r){o7(r),e=M1(e,"onChange"),0<e.length&&(n=new P9("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ao=null,No=null;function bC(t){B7(t,0)}function Rl(t){var e=Pi(t);if(Z6(e))return t}function RC(t,e){if(t==="change")return e}var b7=!1;if(Mn){var P0;if(Mn){var A0="oninput"in document;if(!A0){var s2=document.createElement("div");s2.setAttribute("oninput","return;"),A0=typeof s2.oninput=="function"}P0=A0}else P0=!1;b7=P0&&(!document.documentMode||9<document.documentMode)}function o2(){ao&&(ao.detachEvent("onpropertychange",R7),No=ao=null)}function R7(t){if(t.propertyName==="value"&&Rl(No)){var e=[];A7(e,No,t,E9(t)),u7(bC,e)}}function NC(t,e,n){t==="focusin"?(o2(),ao=e,No=n,ao.attachEvent("onpropertychange",R7)):t==="focusout"&&o2()}function MC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(No)}function DC(t,e){if(t==="click")return Rl(e)}function OC(t,e){if(t==="input"||t==="change")return Rl(e)}function LC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:LC;function Mo(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sc.call(e,i)||!on(t[i],e[i]))return!1}return!0}function a2(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function l2(t,e){var n=a2(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=a2(n)}}function N7(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?N7(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function M7(){for(var t=window,e=k1();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=k1(t.document)}return e}function R9(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FC(t){var e=M7(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&N7(n.ownerDocument.documentElement,n)){if(r!==null&&R9(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=l2(n,s);var o=l2(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VC=Mn&&"documentMode"in document&&11>=document.documentMode,ki=null,jc=null,lo=null,$c=!1;function c2(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$c||ki==null||ki!==k1(r)||(r=ki,"selectionStart"in r&&R9(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&Mo(lo,r)||(lo=r,r=M1(jc,"onSelect"),0<r.length&&(e=new P9("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ki)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ii={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},b0={},D7={};Mn&&(D7=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function Nl(t){if(b0[t])return b0[t];if(!Ii[t])return t;var e=Ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D7)return b0[t]=e[n];return t}var O7=Nl("animationend"),L7=Nl("animationiteration"),F7=Nl("animationstart"),V7=Nl("transitionend"),U7=new Map,u2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){U7.set(t,e),hi(e,[t])}for(var R0=0;R0<u2.length;R0++){var N0=u2[R0],UC=N0.toLowerCase(),BC=N0[0].toUpperCase()+N0.slice(1);Pr(UC,"on"+BC)}Pr(O7,"onAnimationEnd");Pr(L7,"onAnimationIteration");Pr(F7,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(V7,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zC=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function d2(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ug(r,e,void 0,t),t.currentTarget=null}function B7(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;d2(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;d2(i,a,c),s=l}}}if(P1)throw t=Vc,P1=!1,Vc=null,t}function ce(t,e){var n=e[qc];n===void 0&&(n=e[qc]=new Set);var r=t+"__bubble";n.has(r)||(z7(e,t,2,!1),n.add(r))}function M0(t,e,n){var r=0;e&&(r|=4),z7(n,t,r,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[Ba]){t[Ba]=!0,q6.forEach(function(n){n!=="selectionchange"&&(zC.has(n)||M0(n,!1,t),M0(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,M0("selectionchange",!1,e))}}function z7(t,e,n,r){switch(T7(e)){case 1:var i=tC;break;case 4:i=nC;break;default:i=k9}n=i.bind(null,e,n,t),i=void 0,!Fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function D0(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}u7(function(){var c=s,u=E9(n),d=[];e:{var f=U7.get(t);if(f!==void 0){var p=P9,y=t;switch(t){case"keypress":if(a1(n)===0)break e;case"keydown":case"keyup":p=CC;break;case"focusin":y="focus",p=I0;break;case"focusout":y="blur",p=I0;break;case"beforeblur":case"afterblur":p=I0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Z3;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_C;break;case O7:case L7:case F7:p=lC;break;case V7:p=EC;break;case"scroll":p=rC;break;case"wheel":p=TC;break;case"copy":case"cut":case"paste":p=uC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=t2}var v=(e&4)!==0,w=!v&&t==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var m=c,C;m!==null;){C=m;var E=C.stateNode;if(C.tag===5&&E!==null&&(C=E,g!==null&&(E=Po(m,g),E!=null&&v.push(Oo(m,E,C)))),w)break;m=m.return}0<v.length&&(f=new p(f,y,null,n,u),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Oc&&(y=n.relatedTarget||n.fromElement)&&(jr(y)||y[Dn]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?jr(y):null,y!==null&&(w=fi(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(v=Z3,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=t2,E="onPointerLeave",g="onPointerEnter",m="pointer"),w=p==null?f:Pi(p),C=y==null?f:Pi(y),f=new v(E,m+"leave",p,n,u),f.target=w,f.relatedTarget=C,E=null,jr(u)===c&&(v=new v(g,m+"enter",y,n,u),v.target=C,v.relatedTarget=w,E=v),w=E,p&&y)t:{for(v=p,g=y,m=0,C=v;C;C=vi(C))m++;for(C=0,E=g;E;E=vi(E))C++;for(;0<m-C;)v=vi(v),m--;for(;0<C-m;)g=vi(g),C--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=vi(v),g=vi(g)}v=null}else v=null;p!==null&&h2(d,f,p,v,!1),y!==null&&w!==null&&h2(d,w,y,v,!0)}}e:{if(f=c?Pi(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var S=RC;else if(i2(f))if(b7)S=OC;else{S=MC;var k=NC}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=DC);if(S&&(S=S(t,c))){A7(d,S,n,u);break e}k&&k(t,f,c),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&bc(f,"number",f.value)}switch(k=c?Pi(c):window,t){case"focusin":(i2(k)||k.contentEditable==="true")&&(ki=k,jc=c,lo=null);break;case"focusout":lo=jc=ki=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,c2(d,n,u);break;case"selectionchange":if(VC)break;case"keydown":case"keyup":c2(d,n,u)}var x;if(b9)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else xi?I7(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(k7&&n.locale!=="ko"&&(xi||T!=="onCompositionStart"?T==="onCompositionEnd"&&xi&&(x=x7()):(nr=u,I9="value"in nr?nr.value:nr.textContent,xi=!0)),k=M1(c,T),0<k.length&&(T=new e2(T,t,null,n,u),d.push({event:T,listeners:k}),x?T.data=x:(x=P7(n),x!==null&&(T.data=x)))),(x=kC?IC(t,n):PC(t,n))&&(c=M1(c,"onBeforeInput"),0<c.length&&(u=new e2("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=x))}B7(d,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function M1(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Po(t,n),s!=null&&r.unshift(Oo(t,s,i)),s=Po(t,e),s!=null&&r.push(Oo(t,s,i))),t=t.return}return r}function vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function h2(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Po(n,s),l!=null&&o.unshift(Oo(n,l,a))):i||(l=Po(n,s),l!=null&&o.push(Oo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jC=/\r\n?/g,$C=/\u0000|\uFFFD/g;function f2(t){return(typeof t=="string"?t:""+t).replace(jC,`
`).replace($C,"")}function za(t,e,n){if(e=f2(e),f2(t)!==e&&n)throw Error(A(425))}function D1(){}var Wc=null,Hc=null;function Kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,WC=typeof clearTimeout=="function"?clearTimeout:void 0,p2=typeof Promise=="function"?Promise:void 0,HC=typeof queueMicrotask=="function"?queueMicrotask:typeof p2<"u"?function(t){return p2.resolve(null).then(t).catch(KC)}:Gc;function KC(t){setTimeout(function(){throw t})}function O0(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ro(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function m2(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),hn="__reactFiber$"+Es,Lo="__reactProps$"+Es,Dn="__reactContainer$"+Es,qc="__reactEvents$"+Es,GC="__reactListeners$"+Es,qC="__reactHandles$"+Es;function jr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=m2(t);t!==null;){if(n=t[hn])return n;t=m2(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[hn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Ml(t){return t[Lo]||null}var Yc=[],Ai=-1;function Ar(t){return{current:t}}function ue(t){0>Ai||(t.current=Yc[Ai],Yc[Ai]=null,Ai--)}function oe(t,e){Ai++,Yc[Ai]=t.current,t.current=e}var _r={},Je=Ar(_r),mt=Ar(!1),Zr=_r;function os(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function O1(){ue(mt),ue(Je)}function g2(t,e,n){if(Je.current!==_r)throw Error(A(168));oe(Je,e),oe(mt,n)}function j7(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,Ng(t)||"Unknown",i));return _e({},n,r)}function L1(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Zr=Je.current,oe(Je,t),oe(mt,mt.current),!0}function C2(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=j7(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,ue(mt),ue(Je),oe(Je,t)):ue(mt),oe(mt,n)}var Tn=null,Dl=!1,L0=!1;function $7(t){Tn===null?Tn=[t]:Tn.push(t)}function YC(t){Dl=!0,$7(t)}function br(){if(!L0&&Tn!==null){L0=!0;var t=0,e=ee;try{var n=Tn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tn=null,Dl=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(t+1)),p7(S9,br),i}finally{ee=e,L0=!1}}return null}var bi=[],Ri=0,F1=null,V1=0,Lt=[],Ft=0,ei=null,xn=1,kn="";function Fr(t,e){bi[Ri++]=V1,bi[Ri++]=F1,F1=t,V1=e}function W7(t,e,n){Lt[Ft++]=xn,Lt[Ft++]=kn,Lt[Ft++]=ei,ei=t;var r=xn;t=kn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-nn(e)+i|n<<i|r,kn=s+t}else xn=1<<s|n<<i|r,kn=t}function N9(t){t.return!==null&&(Fr(t,1),W7(t,1,0))}function M9(t){for(;t===F1;)F1=bi[--Ri],bi[Ri]=null,V1=bi[--Ri],bi[Ri]=null;for(;t===ei;)ei=Lt[--Ft],Lt[Ft]=null,kn=Lt[--Ft],Lt[Ft]=null,xn=Lt[--Ft],Lt[Ft]=null}var St=null,Et=null,de=!1,Qt=null;function H7(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function y2(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Et=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:xn,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Et=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xc(t){if(de){var e=Et;if(e){var n=e;if(!y2(t,e)){if(Qc(t))throw Error(A(418));e=cr(n.nextSibling);var r=St;e&&y2(t,e)?H7(r,n):(t.flags=t.flags&-4097|2,de=!1,St=t)}}else{if(Qc(t))throw Error(A(418));t.flags=t.flags&-4097|2,de=!1,St=t}}}function v2(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function ja(t){if(t!==St)return!1;if(!de)return v2(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kc(t.type,t.memoizedProps)),e&&(e=Et)){if(Qc(t))throw K7(),Error(A(418));for(;e;)H7(t,e),e=cr(e.nextSibling)}if(v2(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=St?cr(t.stateNode.nextSibling):null;return!0}function K7(){for(var t=Et;t;)t=cr(t.nextSibling)}function as(){Et=St=null,de=!1}function D9(t){Qt===null?Qt=[t]:Qt.push(t)}var QC=jn.ReactCurrentBatchConfig;function qt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var U1=Ar(null),B1=null,Ni=null,O9=null;function L9(){O9=Ni=B1=null}function F9(t){var e=U1.current;ue(U1),t._currentValue=e}function Jc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){B1=t,O9=Ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(O9!==t)if(t={context:t,memoizedValue:e,next:null},Ni===null){if(B1===null)throw Error(A(308));Ni=t,B1.dependencies={lanes:0,firstContext:t}}else Ni=Ni.next=t;return e}var $r=null;function V9(t){$r===null?$r=[t]:$r.push(t)}function G7(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,V9(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function U9(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q7(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,V9(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function l1(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,T9(t,n)}}function _2(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function z1(t,e,n,r){var i=t.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(p,d,f):y,f==null)break e;d=_e({},d,f);break e;case 2:Yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=d}}function w2(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Y7=new G6.Component().refs;function Zc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=hr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(rn(e,t,i,r),l1(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=hr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(rn(e,t,i,r),l1(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=hr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ur(t,i,r),e!==null&&(rn(e,t,r,n),l1(e,t,r))}};function E2(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,r)||!Mo(i,s):!0}function Q7(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=gt(e)?Zr:Je.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function S2(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function eu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Y7,U9(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=gt(e)?Zr:Je.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ol.enqueueReplaceState(i,i.state,null),z1(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Y7&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function T2(t){var e=t._init;return e(t._payload)}function X7(t){function e(g,m){if(t){var C=g.deletions;C===null?(g.deletions=[m],g.flags|=16):C.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=fr(g,m),g.index=0,g.sibling=null,g}function s(g,m,C){return g.index=C,t?(C=g.alternate,C!==null?(C=C.index,C<m?(g.flags|=2,m):C):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,C,E){return m===null||m.tag!==6?(m=$0(C,g.mode,E),m.return=g,m):(m=i(m,C),m.return=g,m)}function l(g,m,C,E){var S=C.type;return S===Ti?u(g,m,C.props.children,E,C.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qn&&T2(S)===m.type)?(E=i(m,C.props),E.ref=Bs(g,m,C),E.return=g,E):(E=p1(C.type,C.key,C.props,null,g.mode,E),E.ref=Bs(g,m,C),E.return=g,E)}function c(g,m,C,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==C.containerInfo||m.stateNode.implementation!==C.implementation?(m=W0(C,g.mode,E),m.return=g,m):(m=i(m,C.children||[]),m.return=g,m)}function u(g,m,C,E,S){return m===null||m.tag!==7?(m=Yr(C,g.mode,E,S),m.return=g,m):(m=i(m,C),m.return=g,m)}function d(g,m,C){if(typeof m=="string"&&m!==""||typeof m=="number")return m=$0(""+m,g.mode,C),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Na:return C=p1(m.type,m.key,m.props,null,g.mode,C),C.ref=Bs(g,null,m),C.return=g,C;case Si:return m=W0(m,g.mode,C),m.return=g,m;case qn:var E=m._init;return d(g,E(m._payload),C)}if(Js(m)||Os(m))return m=Yr(m,g.mode,C,null),m.return=g,m;$a(g,m)}return null}function f(g,m,C,E){var S=m!==null?m.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return S!==null?null:a(g,m,""+C,E);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Na:return C.key===S?l(g,m,C,E):null;case Si:return C.key===S?c(g,m,C,E):null;case qn:return S=C._init,f(g,m,S(C._payload),E)}if(Js(C)||Os(C))return S!==null?null:u(g,m,C,E,null);$a(g,C)}return null}function p(g,m,C,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(C)||null,a(m,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Na:return g=g.get(E.key===null?C:E.key)||null,l(m,g,E,S);case Si:return g=g.get(E.key===null?C:E.key)||null,c(m,g,E,S);case qn:var k=E._init;return p(g,m,C,k(E._payload),S)}if(Js(E)||Os(E))return g=g.get(C)||null,u(m,g,E,S,null);$a(m,E)}return null}function y(g,m,C,E){for(var S=null,k=null,x=m,T=m=0,F=null;x!==null&&T<C.length;T++){x.index>T?(F=x,x=null):F=x.sibling;var b=f(g,x,C[T],E);if(b===null){x===null&&(x=F);break}t&&x&&b.alternate===null&&e(g,x),m=s(b,m,T),k===null?S=b:k.sibling=b,k=b,x=F}if(T===C.length)return n(g,x),de&&Fr(g,T),S;if(x===null){for(;T<C.length;T++)x=d(g,C[T],E),x!==null&&(m=s(x,m,T),k===null?S=x:k.sibling=x,k=x);return de&&Fr(g,T),S}for(x=r(g,x);T<C.length;T++)F=p(x,g,T,C[T],E),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?T:F.key),m=s(F,m,T),k===null?S=F:k.sibling=F,k=F);return t&&x.forEach(function(U){return e(g,U)}),de&&Fr(g,T),S}function v(g,m,C,E){var S=Os(C);if(typeof S!="function")throw Error(A(150));if(C=S.call(C),C==null)throw Error(A(151));for(var k=S=null,x=m,T=m=0,F=null,b=C.next();x!==null&&!b.done;T++,b=C.next()){x.index>T?(F=x,x=null):F=x.sibling;var U=f(g,x,b.value,E);if(U===null){x===null&&(x=F);break}t&&x&&U.alternate===null&&e(g,x),m=s(U,m,T),k===null?S=U:k.sibling=U,k=U,x=F}if(b.done)return n(g,x),de&&Fr(g,T),S;if(x===null){for(;!b.done;T++,b=C.next())b=d(g,b.value,E),b!==null&&(m=s(b,m,T),k===null?S=b:k.sibling=b,k=b);return de&&Fr(g,T),S}for(x=r(g,x);!b.done;T++,b=C.next())b=p(x,g,T,b.value,E),b!==null&&(t&&b.alternate!==null&&x.delete(b.key===null?T:b.key),m=s(b,m,T),k===null?S=b:k.sibling=b,k=b);return t&&x.forEach(function(Be){return e(g,Be)}),de&&Fr(g,T),S}function w(g,m,C,E){if(typeof C=="object"&&C!==null&&C.type===Ti&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Na:e:{for(var S=C.key,k=m;k!==null;){if(k.key===S){if(S=C.type,S===Ti){if(k.tag===7){n(g,k.sibling),m=i(k,C.props.children),m.return=g,g=m;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qn&&T2(S)===k.type){n(g,k.sibling),m=i(k,C.props),m.ref=Bs(g,k,C),m.return=g,g=m;break e}n(g,k);break}else e(g,k);k=k.sibling}C.type===Ti?(m=Yr(C.props.children,g.mode,E,C.key),m.return=g,g=m):(E=p1(C.type,C.key,C.props,null,g.mode,E),E.ref=Bs(g,m,C),E.return=g,g=E)}return o(g);case Si:e:{for(k=C.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===C.containerInfo&&m.stateNode.implementation===C.implementation){n(g,m.sibling),m=i(m,C.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=W0(C,g.mode,E),m.return=g,g=m}return o(g);case qn:return k=C._init,w(g,m,k(C._payload),E)}if(Js(C))return y(g,m,C,E);if(Os(C))return v(g,m,C,E);$a(g,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,C),m.return=g,g=m):(n(g,m),m=$0(C,g.mode,E),m.return=g,g=m),o(g)):n(g,m)}return w}var ls=X7(!0),J7=X7(!1),da={},pn=Ar(da),Fo=Ar(da),Vo=Ar(da);function Wr(t){if(t===da)throw Error(A(174));return t}function B9(t,e){switch(oe(Vo,e),oe(Fo,t),oe(pn,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nc(e,t)}ue(pn),oe(pn,e)}function cs(){ue(pn),ue(Fo),ue(Vo)}function Z7(t){Wr(Vo.current);var e=Wr(pn.current),n=Nc(e,t.type);e!==n&&(oe(Fo,t),oe(pn,n))}function z9(t){Fo.current===t&&(ue(pn),ue(Fo))}var me=Ar(0);function j1(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var F0=[];function j9(){for(var t=0;t<F0.length;t++)F0[t]._workInProgressVersionPrimary=null;F0.length=0}var c1=jn.ReactCurrentDispatcher,V0=jn.ReactCurrentBatchConfig,ti=0,ye=null,Ne=null,Le=null,$1=!1,co=!1,Uo=0,XC=0;function qe(){throw Error(A(321))}function $9(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function W9(t,e,n,r,i,s){if(ti=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,c1.current=t===null||t.memoizedState===null?ty:ny,t=n(r,i),co){s=0;do{if(co=!1,Uo=0,25<=s)throw Error(A(301));s+=1,Le=Ne=null,e.updateQueue=null,c1.current=ry,t=n(r,i)}while(co)}if(c1.current=W1,e=Ne!==null&&Ne.next!==null,ti=0,Le=Ne=ye=null,$1=!1,e)throw Error(A(300));return t}function H9(){var t=Uo!==0;return Uo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ye.memoizedState=Le=t:Le=Le.next=t,Le}function Wt(){if(Ne===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Le===null?ye.memoizedState:Le.next;if(e!==null)Le=e,Ne=t;else{if(t===null)throw Error(A(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?ye.memoizedState=Le=t:Le=Le.next=t}return Le}function Bo(t,e){return typeof e=="function"?e(t):e}function U0(t){var e=Wt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ti&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ye.lanes|=u,ni|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,on(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function B0(t){var e=Wt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ed(){}function td(t,e){var n=ye,r=Wt(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,K9(id.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,zo(9,rd.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(A(349));ti&30||nd(n,e,i)}return i}function nd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rd(t,e,n,r){e.value=n,e.getSnapshot=r,sd(e)&&od(t)}function id(t,e,n){return n(function(){sd(e)&&od(t)})}function sd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function od(t){var e=On(t,1);e!==null&&rn(e,t,1,-1)}function x2(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=ey.bind(null,ye,t),[e.memoizedState,t]}function zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ad(){return Wt().memoizedState}function u1(t,e,n,r){var i=dn();ye.flags|=t,i.memoizedState=zo(1|e,n,void 0,r===void 0?null:r)}function Ll(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&$9(r,o.deps)){i.memoizedState=zo(e,n,s,r);return}}ye.flags|=t,i.memoizedState=zo(1|e,n,s,r)}function k2(t,e){return u1(8390656,8,t,e)}function K9(t,e){return Ll(2048,8,t,e)}function ld(t,e){return Ll(4,2,t,e)}function cd(t,e){return Ll(4,4,t,e)}function ud(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dd(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4,4,ud.bind(null,e,t),n)}function G9(){}function hd(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$9(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fd(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$9(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pd(t,e,n){return ti&21?(on(n,e)||(n=C7(),ye.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function JC(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=V0.transition;V0.transition={};try{t(!1),e()}finally{ee=n,V0.transition=r}}function md(){return Wt().memoizedState}function ZC(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gd(t))Cd(e,n);else if(n=G7(t,e,n,r),n!==null){var i=it();rn(n,t,r,i),yd(n,e,r)}}function ey(t,e,n){var r=hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gd(t))Cd(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var l=e.interleaved;l===null?(i.next=i,V9(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=G7(t,e,i,r),n!==null&&(i=it(),rn(n,t,r,i),yd(n,e,r))}}function gd(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function Cd(t,e){co=$1=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yd(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,T9(t,n)}}var W1={readContext:$t,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},ty={readContext:$t,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:k2,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,u1(4194308,4,ud.bind(null,e,t),n)},useLayoutEffect:function(t,e){return u1(4194308,4,t,e)},useInsertionEffect:function(t,e){return u1(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZC.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:x2,useDebugValue:G9,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=x2(!1),e=t[0];return t=JC.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=dn();if(de){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Ve===null)throw Error(A(349));ti&30||nd(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,k2(id.bind(null,r,s,t),[t]),r.flags|=2048,zo(9,rd.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Ve.identifierPrefix;if(de){var n=kn,r=xn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ny={readContext:$t,useCallback:hd,useContext:$t,useEffect:K9,useImperativeHandle:dd,useInsertionEffect:ld,useLayoutEffect:cd,useMemo:fd,useReducer:U0,useRef:ad,useState:function(){return U0(Bo)},useDebugValue:G9,useDeferredValue:function(t){var e=Wt();return pd(e,Ne.memoizedState,t)},useTransition:function(){var t=U0(Bo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:ed,useSyncExternalStore:td,useId:md,unstable_isNewReconciler:!1},ry={readContext:$t,useCallback:hd,useContext:$t,useEffect:K9,useImperativeHandle:dd,useInsertionEffect:ld,useLayoutEffect:cd,useMemo:fd,useReducer:B0,useRef:ad,useState:function(){return B0(Bo)},useDebugValue:G9,useDeferredValue:function(t){var e=Wt();return Ne===null?e.memoizedState=t:pd(e,Ne.memoizedState,t)},useTransition:function(){var t=B0(Bo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:ed,useSyncExternalStore:td,useId:md,unstable_isNewReconciler:!1};function us(t,e){try{var n="",r=e;do n+=Rg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function z0(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iy=typeof WeakMap=="function"?WeakMap:Map;function vd(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){K1||(K1=!0,du=r),tu(t,e)},n}function _d(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){tu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tu(t,e),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function I2(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yy.bind(null,t,e,n),e.then(t,t))}function P2(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function A2(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var sy=jn.ReactCurrentOwner,ht=!1;function tt(t,e,n,r){e.child=t===null?J7(e,null,n,r):ls(e,t.child,n,r)}function b2(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=W9(t,e,n,r,s,i),n=H9(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(de&&n&&N9(e),e.flags|=1,tt(t,e,r,i),e.child)}function R2(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!t4(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wd(t,e,s,r,i)):(t=p1(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(o,r)&&t.ref===e.ref)return Ln(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function wd(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Mo(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,Ln(t,e,i)}return nu(t,e,n,r,i)}function Ed(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Di,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(Di,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(Di,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(Di,wt),wt|=r;return tt(t,e,i,n),e.child}function Sd(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nu(t,e,n,r,i){var s=gt(n)?Zr:Je.current;return s=os(e,s),Gi(e,i),n=W9(t,e,n,r,s,i),r=H9(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(de&&r&&N9(e),e.flags|=1,tt(t,e,n,i),e.child)}function N2(t,e,n,r,i){if(gt(n)){var s=!0;L1(e)}else s=!1;if(Gi(e,i),e.stateNode===null)d1(t,e),Q7(e,n,r),eu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=gt(n)?Zr:Je.current,c=os(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&S2(e,o,r,c),Yn=!1;var f=e.memoizedState;o.state=f,z1(e,r,o,i),l=e.memoizedState,a!==r||f!==l||mt.current||Yn?(typeof u=="function"&&(Zc(e,n,u,r),l=e.memoizedState),(a=Yn||E2(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q7(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:qt(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$t(l):(l=gt(n)?Zr:Je.current,l=os(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&S2(e,o,r,l),Yn=!1,f=e.memoizedState,o.state=f,z1(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||mt.current||Yn?(typeof p=="function"&&(Zc(e,n,p,r),y=e.memoizedState),(c=Yn||E2(e,n,c,r,f,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return ru(t,e,n,r,s,i)}function ru(t,e,n,r,i,s){Sd(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&C2(e,n,!1),Ln(t,e,s);r=e.stateNode,sy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&C2(e,n,!0),e.child}function Td(t){var e=t.stateNode;e.pendingContext?g2(t,e.pendingContext,e.pendingContext!==e.context):e.context&&g2(t,e.context,!1),B9(t,e.containerInfo)}function M2(t,e,n,r,i){return as(),D9(i),e.flags|=256,tt(t,e,n,r),e.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function su(t){return{baseLanes:t,cachePool:null,transitions:null}}function xd(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(me,i&1),t===null)return Xc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ul(o,r,0,null),t=Yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=su(n),e.memoizedState=iu,t):q9(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oy(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=fr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?su(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=iu,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function q9(t,e){return e=Ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,r){return r!==null&&D9(r),ls(e,t.child,null,n),t=q9(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=z0(Error(A(422))),Wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ul({mode:"visible",children:r.children},i,0,null),s=Yr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=su(o),e.memoizedState=iu,s);if(!(e.mode&1))return Wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=z0(s,r,void 0),Wa(t,e,o,r)}if(a=(o&t.childLanes)!==0,ht||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),rn(r,t,i,-1))}return e4(),r=z0(Error(A(421))),Wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vy.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=cr(i.nextSibling),St=e,de=!0,Qt=null,t!==null&&(Lt[Ft++]=xn,Lt[Ft++]=kn,Lt[Ft++]=ei,xn=t.id,kn=t.overflow,ei=e),e=q9(e,r.children),e.flags|=4096,e)}function D2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jc(t.return,e,n)}function j0(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kd(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&D2(t,n,e);else if(t.tag===19)D2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&j1(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),j0(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&j1(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}j0(e,!0,n,null,s);break;case"together":j0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function d1(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ay(t,e,n){switch(e.tag){case 3:Td(e),as();break;case 5:Z7(e);break;case 1:gt(e.type)&&L1(e);break;case 4:B9(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(U1,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?xd(t,e,n):(oe(me,me.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);oe(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kd(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Ed(t,e,n)}return Ln(t,e,n)}var Id,ou,Pd,Ad;Id=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ou=function(){};Pd=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wr(pn.current);var s=null;switch(n){case"input":i=Pc(t,i),r=Pc(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Rc(t,i),r=Rc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=D1)}Mc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ad=function(t,e,n,r){n!==r&&(e.flags|=4)};function zs(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ly(t,e,n){var r=e.pendingProps;switch(M9(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return gt(e.type)&&O1(),Ye(e),null;case 3:return r=e.stateNode,cs(),ue(mt),ue(Je),j9(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(pu(Qt),Qt=null))),ou(t,e),Ye(e),null;case 5:z9(e);var i=Wr(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Pd(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Ye(e),null}if(t=Wr(pn.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)ce(eo[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":$3(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":H3(r,s),ce("invalid",r)}Mc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",""+a]):ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ma(r),W3(r,s,!0);break;case"textarea":Ma(r),K3(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=D1)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n7(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Lo]=r,Id(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dc(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)ce(eo[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":$3(t,r),i=Pc(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ce("invalid",t);break;case"textarea":H3(t,r),i=Rc(t,r),ce("invalid",t);break;default:i=r}Mc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?s7(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r7(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Io(t,l):typeof l=="number"&&Io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&y9(t,s,l,o))}switch(n){case"input":Ma(t),W3(t,r,!1);break;case"textarea":Ma(t),K3(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=D1)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)Ad(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Wr(Vo.current),Wr(pn.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return Ye(e),null;case 13:if(ue(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Et!==null&&e.mode&1&&!(e.flags&128))K7(),as(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[hn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Qt!==null&&(pu(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?De===0&&(De=3):e4())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return cs(),ou(t,e),t===null&&Do(e.stateNode.containerInfo),Ye(e),null;case 10:return F9(e.type._context),Ye(e),null;case 17:return gt(e.type)&&O1(),Ye(e),null;case 19:if(ue(me),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zs(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=j1(t),o!==null){for(e.flags|=128,zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>ds&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=j1(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Ye(e),null}else 2*ke()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=me.current,oe(me,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Z9(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function cy(t,e){switch(M9(e),e.tag){case 1:return gt(e.type)&&O1(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),ue(mt),ue(Je),j9(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return z9(e),null;case 13:if(ue(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(me),null;case 4:return cs(),null;case 10:return F9(e.type._context),null;case 22:case 23:return Z9(),null;case 24:return null;default:return null}}var Ha=!1,Qe=!1,uy=typeof WeakSet=="function"?WeakSet:Set,O=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function au(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var O2=!1;function dy(t,e){if(Wc=R1,t=M7(),R9(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:t,selectionRange:n},R1=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:qt(e.type,v),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){Ee(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=O2,O2=!1,y}function uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&au(e,n,s)}i=i.next}while(i!==r)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function lu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bd(t){var e=t.alternate;e!==null&&(t.alternate=null,bd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Lo],delete e[qc],delete e[GC],delete e[qC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rd(t){return t.tag===5||t.tag===3||t.tag===4}function L2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=D1));else if(r!==4&&(t=t.child,t!==null))for(cu(t,e,n),t=t.sibling;t!==null;)cu(t,e,n),t=t.sibling}function uu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uu(t,e,n),t=t.sibling;t!==null;)uu(t,e,n),t=t.sibling}var je=null,Yt=!1;function Hn(t,e,n){for(n=n.child;n!==null;)Nd(t,e,n),n=n.sibling}function Nd(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Qe||Mi(n,e);case 6:var r=je,i=Yt;je=null,Hn(t,e,n),je=r,Yt=i,je!==null&&(Yt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Yt?(t=je,n=n.stateNode,t.nodeType===8?O0(t.parentNode,n):t.nodeType===1&&O0(t,n),Ro(t)):O0(je,n.stateNode));break;case 4:r=je,i=Yt,je=n.stateNode.containerInfo,Yt=!0,Hn(t,e,n),je=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&au(n,e,o),i=i.next}while(i!==r)}Hn(t,e,n);break;case 1:if(!Qe&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}Hn(t,e,n);break;case 21:Hn(t,e,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,Hn(t,e,n),Qe=r):Hn(t,e,n);break;default:Hn(t,e,n)}}function F2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uy),e.forEach(function(r){var i=_y.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,Yt=!1;break e;case 3:je=a.stateNode.containerInfo,Yt=!0;break e;case 4:je=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(je===null)throw Error(A(160));Nd(s,o,i),je=null,Yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ee(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Md(e,t),e=e.sibling}function Md(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),un(t),r&4){try{uo(3,t,t.return),Fl(3,t)}catch(v){Ee(t,t.return,v)}try{uo(5,t,t.return)}catch(v){Ee(t,t.return,v)}}break;case 1:Kt(e,t),un(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Kt(e,t),un(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{Io(i,"")}catch(v){Ee(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&e7(i,s),Dc(a,o);var c=Dc(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?s7(i,d):u==="dangerouslySetInnerHTML"?r7(i,d):u==="children"?Io(i,d):y9(i,u,d,c)}switch(a){case"input":Ac(i,s);break;case"textarea":t7(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?$i(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lo]=s}catch(v){Ee(t,t.return,v)}}break;case 6:if(Kt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ee(t,t.return,v)}}break;case 3:if(Kt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(v){Ee(t,t.return,v)}break;case 4:Kt(e,t),un(t);break;case 13:Kt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(X9=ke())),r&4&&F2(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Qe=(c=Qe)||u,Kt(e,t),Qe=c):Kt(e,t),un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(O=t,u=t.child;u!==null;){for(d=O=u;O!==null;){switch(f=O,p=f.child,f.tag){case 0:case 11:case 14:case 15:uo(4,f,f.return);break;case 1:Mi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Ee(r,n,v)}}break;case 5:Mi(f,f.return);break;case 22:if(f.memoizedState!==null){U2(d);continue}}p!==null?(p.return=f,O=p):U2(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i7("display",o))}catch(v){Ee(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Ee(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(e,t),un(t),r&4&&F2(t);break;case 21:break;default:Kt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rd(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Io(i,""),r.flags&=-33);var s=L2(t);uu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=L2(t);cu(t,a,o);break;default:throw Error(A(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hy(t,e,n){O=t,Dd(t)}function Dd(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ha;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Qe;a=Ha;var c=Qe;if(Ha=o,(Qe=l)&&!c)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?B2(i):l!==null?(l.return=o,O=l):B2(i);for(;s!==null;)O=s,Dd(s),s=s.sibling;O=i,Ha=a,Qe=c}V2(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):V2(t)}}function V2(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qe||Fl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&w2(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}w2(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ro(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Qe||e.flags&512&&lu(e)}catch(f){Ee(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function U2(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function B2(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ee(e,i,l)}}var s=e.return;try{lu(e)}catch(l){Ee(e,s,l)}break;case 5:var o=e.return;try{lu(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var fy=Math.ceil,H1=jn.ReactCurrentDispatcher,Y9=jn.ReactCurrentOwner,zt=jn.ReactCurrentBatchConfig,Q=0,Ve=null,be=null,He=0,wt=0,Di=Ar(0),De=0,jo=null,ni=0,Vl=0,Q9=0,ho=null,dt=null,X9=0,ds=1/0,Sn=null,K1=!1,du=null,dr=null,Ka=!1,rr=null,G1=0,fo=0,hu=null,h1=-1,f1=0;function it(){return Q&6?ke():h1!==-1?h1:h1=ke()}function hr(t){return t.mode&1?Q&2&&He!==0?He&-He:QC.transition!==null?(f1===0&&(f1=C7()),f1):(t=ee,t!==0||(t=window.event,t=t===void 0?16:T7(t.type)),t):1}function rn(t,e,n,r){if(50<fo)throw fo=0,hu=null,Error(A(185));la(t,n,r),(!(Q&2)||t!==Ve)&&(t===Ve&&(!(Q&2)&&(Vl|=n),De===4&&Xn(t,He)),Ct(t,r),n===1&&Q===0&&!(e.mode&1)&&(ds=ke()+500,Dl&&br()))}function Ct(t,e){var n=t.callbackNode;Qg(t,e);var r=b1(t,t===Ve?He:0);if(r===0)n!==null&&Y3(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Y3(n),e===1)t.tag===0?YC(z2.bind(null,t)):$7(z2.bind(null,t)),HC(function(){!(Q&6)&&br()}),n=null;else{switch(y7(r)){case 1:n=S9;break;case 4:n=m7;break;case 16:n=A1;break;case 536870912:n=g7;break;default:n=A1}n=jd(n,Od.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Od(t,e){if(h1=-1,f1=0,Q&6)throw Error(A(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=b1(t,t===Ve?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=q1(t,r);else{e=r;var i=Q;Q|=2;var s=Fd();(Ve!==t||He!==e)&&(Sn=null,ds=ke()+500,qr(t,e));do try{gy();break}catch(a){Ld(t,a)}while(1);L9(),H1.current=s,Q=i,be!==null?e=0:(Ve=null,He=0,e=De)}if(e!==0){if(e===2&&(i=Uc(t),i!==0&&(r=i,e=fu(t,i))),e===1)throw n=jo,qr(t,0),Xn(t,r),Ct(t,ke()),n;if(e===6)Xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!py(i)&&(e=q1(t,r),e===2&&(s=Uc(t),s!==0&&(r=s,e=fu(t,s))),e===1))throw n=jo,qr(t,0),Xn(t,r),Ct(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Vr(t,dt,Sn);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=X9+500-ke(),10<e)){if(b1(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gc(Vr.bind(null,t,dt,Sn),e);break}Vr(t,dt,Sn);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fy(r/1960))-r,10<r){t.timeoutHandle=Gc(Vr.bind(null,t,dt,Sn),r);break}Vr(t,dt,Sn);break;case 5:Vr(t,dt,Sn);break;default:throw Error(A(329))}}}return Ct(t,ke()),t.callbackNode===n?Od.bind(null,t):null}function fu(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=q1(t,e),t!==2&&(e=dt,dt=n,e!==null&&pu(e)),t}function pu(t){dt===null?dt=t:dt.push.apply(dt,t)}function py(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~Q9,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function z2(t){if(Q&6)throw Error(A(327));qi();var e=b1(t,0);if(!(e&1))return Ct(t,ke()),null;var n=q1(t,e);if(t.tag!==0&&n===2){var r=Uc(t);r!==0&&(e=r,n=fu(t,r))}if(n===1)throw n=jo,qr(t,0),Xn(t,e),Ct(t,ke()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,dt,Sn),Ct(t,ke()),null}function J9(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(ds=ke()+500,Dl&&br())}}function ri(t){rr!==null&&rr.tag===0&&!(Q&6)&&qi();var e=Q;Q|=1;var n=zt.transition,r=ee;try{if(zt.transition=null,ee=1,t)return t()}finally{ee=r,zt.transition=n,Q=e,!(Q&6)&&br()}}function Z9(){wt=Di.current,ue(Di)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WC(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(M9(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&O1();break;case 3:cs(),ue(mt),ue(Je),j9();break;case 5:z9(r);break;case 4:cs();break;case 13:ue(me);break;case 19:ue(me);break;case 10:F9(r.type._context);break;case 22:case 23:Z9()}n=n.return}if(Ve=t,be=t=fr(t.current,null),He=wt=e,De=0,jo=null,Q9=Vl=ni=0,dt=ho=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function Ld(t,e){do{var n=be;try{if(L9(),c1.current=W1,$1){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$1=!1}if(ti=0,Le=Ne=ye=null,co=!1,Uo=0,Y9.current=null,n===null||n.return===null){De=1,jo=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=He,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=P2(o);if(p!==null){p.flags&=-257,A2(p,o,a,s,e),p.mode&1&&I2(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){I2(s,c,e),e4();break e}l=Error(A(426))}}else if(de&&a.mode&1){var w=P2(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),A2(w,o,a,s,e),D9(us(l,a));break e}}s=l=us(l,a),De!==4&&(De=2),ho===null?ho=[s]:ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=vd(s,l,e);_2(s,g);break e;case 1:a=l;var m=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(dr===null||!dr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=_d(s,a,e);_2(s,E);break e}}s=s.return}while(s!==null)}Ud(n)}catch(S){e=S,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function Fd(){var t=H1.current;return H1.current=W1,t===null?W1:t}function e4(){(De===0||De===3||De===2)&&(De=4),Ve===null||!(ni&268435455)&&!(Vl&268435455)||Xn(Ve,He)}function q1(t,e){var n=Q;Q|=2;var r=Fd();(Ve!==t||He!==e)&&(Sn=null,qr(t,e));do try{my();break}catch(i){Ld(t,i)}while(1);if(L9(),Q=n,H1.current=r,be!==null)throw Error(A(261));return Ve=null,He=0,De}function my(){for(;be!==null;)Vd(be)}function gy(){for(;be!==null&&!zg();)Vd(be)}function Vd(t){var e=zd(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?Ud(t):be=e,Y9.current=null}function Ud(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cy(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,be=null;return}}else if(n=ly(n,e,wt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);De===0&&(De=5)}function Vr(t,e,n){var r=ee,i=zt.transition;try{zt.transition=null,ee=1,Cy(t,e,n,r)}finally{zt.transition=i,ee=r}return null}function Cy(t,e,n,r){do qi();while(rr!==null);if(Q&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xg(t,s),t===Ve&&(be=Ve=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,jd(A1,function(){return qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=ee;ee=1;var a=Q;Q|=4,Y9.current=null,dy(t,n),Md(n,t),FC(Hc),R1=!!Wc,Hc=Wc=null,t.current=n,hy(n),jg(),Q=a,ee=o,zt.transition=s}else t.current=n;if(Ka&&(Ka=!1,rr=t,G1=i),s=t.pendingLanes,s===0&&(dr=null),Hg(n.stateNode),Ct(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(K1)throw K1=!1,t=du,du=null,t;return G1&1&&t.tag!==0&&qi(),s=t.pendingLanes,s&1?t===hu?fo++:(fo=0,hu=t):fo=0,br(),null}function qi(){if(rr!==null){var t=y7(G1),e=zt.transition,n=ee;try{if(zt.transition=null,ee=16>t?16:t,rr===null)var r=!1;else{if(t=rr,rr=null,G1=0,Q&6)throw Error(A(331));var i=Q;for(Q|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:uo(8,u,s)}var d=u.child;if(d!==null)d.return=u,O=d;else for(;O!==null;){u=O;var f=u.sibling,p=u.return;if(bd(u),u===c){O=null;break}if(f!==null){f.return=p,O=f;break}O=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var m=t.current;for(O=m;O!==null;){o=O;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,O=C;else e:for(o=m;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fl(9,a)}}catch(S){Ee(a,a.return,S)}if(a===o){O=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,O=E;break e}O=a.return}}if(Q=i,br(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Al,t)}catch{}r=!0}return r}finally{ee=n,zt.transition=e}}return!1}function j2(t,e,n){e=us(n,e),e=vd(t,e,1),t=ur(t,e,1),e=it(),t!==null&&(la(t,1,e),Ct(t,e))}function Ee(t,e,n){if(t.tag===3)j2(t,t,n);else for(;e!==null;){if(e.tag===3){j2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){t=us(n,t),t=_d(e,t,1),e=ur(e,t,1),t=it(),e!==null&&(la(e,1,t),Ct(e,t));break}}e=e.return}}function yy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(He&n)===n&&(De===4||De===3&&(He&130023424)===He&&500>ke()-X9?qr(t,0):Q9|=n),Ct(t,e)}function Bd(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=it();t=On(t,e),t!==null&&(la(t,e,n),Ct(t,n))}function vy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bd(t,n)}function _y(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),Bd(t,n)}var zd;zd=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,ay(t,e,n);ht=!!(t.flags&131072)}else ht=!1,de&&e.flags&1048576&&W7(e,V1,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;d1(t,e),t=e.pendingProps;var i=os(e,Je.current);Gi(e,n),i=W9(null,e,r,t,i,n);var s=H9();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,L1(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,U9(e),i.updater=Ol,e.stateNode=i,i._reactInternals=e,eu(e,r,t,n),e=ru(null,e,r,!0,s,n)):(e.tag=0,de&&s&&N9(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(d1(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ey(r),t=qt(r,t),i){case 0:e=nu(null,e,r,t,n);break e;case 1:e=N2(null,e,r,t,n);break e;case 11:e=b2(null,e,r,t,n);break e;case 14:e=R2(null,e,r,qt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),nu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),N2(t,e,r,i,n);case 3:e:{if(Td(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,q7(t,e),z1(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=us(Error(A(423)),e),e=M2(t,e,r,n,i);break e}else if(r!==i){i=us(Error(A(424)),e),e=M2(t,e,r,n,i);break e}else for(Et=cr(e.stateNode.containerInfo.firstChild),St=e,de=!0,Qt=null,n=J7(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=Ln(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return Z7(e),t===null&&Xc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Kc(r,i)?o=null:s!==null&&Kc(r,s)&&(e.flags|=32),Sd(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&Xc(e),null;case 13:return xd(t,e,n);case 4:return B9(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),b2(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,oe(U1,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!mt.current){e=Ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=bn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=$t(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),R2(t,e,r,i,n);case 15:return wd(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),d1(t,e),e.tag=1,gt(r)?(t=!0,L1(e)):t=!1,Gi(e,n),Q7(e,r,i),eu(e,r,i,n),ru(null,e,r,!0,t,n);case 19:return kd(t,e,n);case 22:return Ed(t,e,n)}throw Error(A(156,e.tag))};function jd(t,e){return p7(t,e)}function wy(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new wy(t,e,n,r)}function t4(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ey(t){if(typeof t=="function")return t4(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_9)return 11;if(t===w9)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function p1(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")t4(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return Yr(n.children,i,s,e);case v9:o=8,i|=8;break;case Tc:return t=Ut(12,n,e,i|2),t.elementType=Tc,t.lanes=s,t;case xc:return t=Ut(13,n,e,i),t.elementType=xc,t.lanes=s,t;case kc:return t=Ut(19,n,e,i),t.elementType=kc,t.lanes=s,t;case X6:return Ul(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y6:o=10;break e;case Q6:o=9;break e;case _9:o=11;break e;case w9:o=14;break e;case qn:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function Ul(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=X6,t.lanes=n,t.stateNode={isHidden:!1},t}function $0(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function W0(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=T0(0),this.expirationTimes=T0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=T0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function n4(t,e,n,r,i,s,o,a,l){return t=new Sy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},U9(s),t}function Ty(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $d(t){if(!t)return _r;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(gt(n))return j7(t,n,e)}return e}function Wd(t,e,n,r,i,s,o,a,l){return t=n4(n,r,!0,t,i,s,o,a,l),t.context=$d(null),n=t.current,r=it(),i=hr(n),s=bn(r,i),s.callback=e??null,ur(n,s,i),t.current.lanes=i,la(t,i,r),Ct(t,r),t}function Bl(t,e,n,r){var i=e.current,s=it(),o=hr(i);return n=$d(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ur(i,e,o),t!==null&&(rn(t,i,o,s),l1(t,i,o)),o}function Y1(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function r4(t,e){$2(t,e),(t=t.alternate)&&$2(t,e)}function xy(){return null}var Hd=typeof reportError=="function"?reportError:function(t){console.error(t)};function i4(t){this._internalRoot=t}zl.prototype.render=i4.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Bl(t,e,null,null)};zl.prototype.unmount=i4.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){Bl(null,t,null,null)}),e[Dn]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=w7();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&S7(t)}};function s4(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function W2(){}function ky(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Y1(o);s.call(c)}}var o=Wd(e,r,t,0,null,!1,!1,"",W2);return t._reactRootContainer=o,t[Dn]=o.current,Do(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Y1(l);a.call(c)}}var l=n4(t,0,!1,null,null,!1,!1,"",W2);return t._reactRootContainer=l,t[Dn]=l.current,Do(t.nodeType===8?t.parentNode:t),ri(function(){Bl(e,l,n,r)}),l}function $l(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Y1(o);a.call(l)}}Bl(e,o,t,i)}else o=ky(n,e,t,i,r);return Y1(o)}v7=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(T9(e,n|1),Ct(e,ke()),!(Q&6)&&(ds=ke()+500,br()))}break;case 13:ri(function(){var r=On(t,1);if(r!==null){var i=it();rn(r,t,1,i)}}),r4(t,1)}};x9=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=it();rn(e,t,134217728,n)}r4(t,134217728)}};_7=function(t){if(t.tag===13){var e=hr(t),n=On(t,e);if(n!==null){var r=it();rn(n,t,e,r)}r4(t,e)}};w7=function(){return ee};E7=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Lc=function(t,e,n){switch(e){case"input":if(Ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ml(r);if(!i)throw Error(A(90));Z6(r),Ac(r,i)}}}break;case"textarea":t7(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};l7=J9;c7=ri;var Iy={usingClientEntryPoint:!1,Events:[ua,Pi,Ml,o7,a7,J9]},js={findFiberByHostInstance:jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Py={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h7(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Al=Ga.inject(Py),fn=Ga}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!s4(e))throw Error(A(200));return Ty(t,e,null,n)};kt.createRoot=function(t,e){if(!s4(t))throw Error(A(299));var n=!1,r="",i=Hd;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=n4(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,Do(t.nodeType===8?t.parentNode:t),new i4(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=h7(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return ri(t)};kt.hydrate=function(t,e,n){if(!jl(e))throw Error(A(200));return $l(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!s4(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Hd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wd(e,null,t,1,n??null,i,!1,s,o),t[Dn]=e.current,Do(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zl(e)};kt.render=function(t,e,n){if(!jl(e))throw Error(A(200));return $l(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!jl(t))throw Error(A(40));return t._reactRootContainer?(ri(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};kt.unstable_batchedUpdates=J9;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jl(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return $l(t,e,n,!1,r)};kt.version="18.2.0-next-9e3b772b8-20220608";function Kd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kd)}catch(t){console.error(t)}}Kd(),W6.exports=kt;var Ay=W6.exports,H2=Ay;Ec.createRoot=H2.createRoot,Ec.hydrateRoot=H2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Q1(){return Q1=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Q1.apply(this,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const K2="popstate";function by(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return mu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qd(i)}return Ny(e,n,null,t)}function yt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ry(){return Math.random().toString(36).substr(2,8)}function G2(t,e){return{usr:t.state,key:t.key,idx:e}}function mu(t,e,n,r){return n===void 0&&(n=null),Q1({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wl(e):e,{state:n,key:e&&e.key||r||Ry()})}function qd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Wl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ny(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ir.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Q1({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=ir.Pop;let w=u(),g=w==null?null:w-c;c=w,l&&l({action:a,location:v.location,delta:g})}function f(w,g){a=ir.Push;let m=mu(v.location,w,g);n&&n(m,w),c=u()+1;let C=G2(m,c),E=v.createHref(m);try{o.pushState(C,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(w,g){a=ir.Replace;let m=mu(v.location,w,g);n&&n(m,w),c=u();let C=G2(m,c),E=v.createHref(m);o.replaceState(C,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:qd(w);return m=m.replace(/ $/,"%20"),yt(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(K2,d),l=w,()=>{i.removeEventListener(K2,d),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let g=y(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return o.go(w)}};return v}var q2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(q2||(q2={}));function My(t,e,n){return n===void 0&&(n="/"),Dy(t,e,n,!1)}function Dy(t,e,n,r){let i=typeof e=="string"?Wl(e):e,s=Xd(i.pathname||"/",n);if(s==null)return null;let o=Yd(t);Oy(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Ky(s);a=Wy(o[l],c,r)}return a}function Yd(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(yt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Yi([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(yt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Yd(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:jy(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Qd(s.path))i(s,o,l)}),e}function Qd(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Qd(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Oy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$y(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ly=/^:[\w-]+$/,Fy=3,Vy=2,Uy=1,By=10,zy=-2,Y2=t=>t==="*";function jy(t,e){let n=t.split("/"),r=n.length;return n.some(Y2)&&(r+=zy),e&&(r+=Vy),n.filter(i=>!Y2(i)).reduce((i,s)=>i+(Ly.test(s)?Fy:s===""?Uy:By),r)}function $y(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Wy(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=Q2({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Q2({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Yi([s,d.pathname]),pathnameBase:Gy(Yi([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=Yi([s,d.pathnameBase]))}return o}function Q2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Hy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:f,isOptional:p}=u;if(f==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[d];return p&&!y?c[f]=void 0:c[f]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Hy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ky(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Xd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Yi=t=>t.join("/").replace(/\/\/+/g,"/"),Gy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function qy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Jd=["post","put","patch","delete"];new Set(Jd);const Yy=["get",...Jd];new Set(Yy);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X1(){return X1=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},X1.apply(this,arguments)}const Qy=_.createContext(null),Xy=_.createContext(null),Zd=_.createContext(null),Hl=_.createContext(null),Kl=_.createContext({outlet:null,matches:[],isDataRoute:!1}),eh=_.createContext(null);function o4(){return _.useContext(Hl)!=null}function Jy(){return o4()||yt(!1),_.useContext(Hl).location}function Zy(t,e){return ev(t,e)}function ev(t,e,n,r){o4()||yt(!1);let{navigator:i}=_.useContext(Zd),{matches:s}=_.useContext(Kl),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Jy(),u;if(e){var d;let w=typeof e=="string"?Wl(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||yt(!1),u=w}else u=c;let f=u.pathname||"/",p=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=My(t,{pathname:p}),v=sv(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Yi([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Yi([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?_.createElement(Hl.Provider,{value:{location:X1({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ir.Pop}},v):v}function tv(){let t=cv(),e=qy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:i},n):null,s)}const nv=_.createElement(tv,null);class rv extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?_.createElement(Kl.Provider,{value:this.props.routeContext},_.createElement(eh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iv(t){let{routeContext:e,match:n,children:r}=t,i=_.useContext(Qy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Kl.Provider,{value:e},r)}function sv(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||yt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:p}=n,y=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,f)=>{let p,y=!1,v=null,w=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||nv,l&&(c<0&&f===0?(uv("route-fallback",!1),y=!0,w=null):c===f&&(y=!0,w=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),m=()=>{let C;return p?C=v:y?C=w:d.route.Component?C=_.createElement(d.route.Component,null):d.route.element?C=d.route.element:C=u,_.createElement(iv,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:C})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?_.createElement(rv,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var gu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gu||{});function ov(t){let e=_.useContext(Xy);return e||yt(!1),e}function av(t){let e=_.useContext(Kl);return e||yt(!1),e}function lv(t){let e=av(),n=e.matches[e.matches.length-1];return n.route.id||yt(!1),n.route.id}function cv(){var t;let e=_.useContext(eh),n=ov(gu.UseRouteError),r=lv(gu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}const X2={};function uv(t,e,n){!e&&!X2[t]&&(X2[t]=!0)}function dv(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Ei(t){yt(!1)}function hv(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ir.Pop,navigator:s,static:o=!1,future:a}=t;o4()&&yt(!1);let l=e.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:l,navigator:s,static:o,future:X1({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Wl(r));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:y="default"}=r,v=_.useMemo(()=>{let w=Xd(u,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:p,key:y},navigationType:i}},[l,u,d,f,p,y,i]);return v==null?null:_.createElement(Zd.Provider,{value:c},_.createElement(Hl.Provider,{children:n,value:v}))}function fv(t){let{children:e,location:n}=t;return Zy(Cu(e),n)}new Promise(()=>{});function Cu(t,e){e===void 0&&(e=[]);let n=[];return _.Children.forEach(t,(r,i)=>{if(!_.isValidElement(r))return;let s=[...e,i];if(r.type===_.Fragment){n.push.apply(n,Cu(r.props.children,s));return}r.type!==Ei&&yt(!1),!r.props.index||!r.props.children||yt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Cu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const pv="6";try{window.__reactRouterVersion=pv}catch{}const mv="startTransition",J2=vg[mv];function gv(t){let{basename:e,children:n,future:r,window:i}=t,s=_.useRef();s.current==null&&(s.current=by({window:i,v5Compat:!0}));let o=s.current,[a,l]=_.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=_.useCallback(d=>{c&&J2?J2(()=>l(d)):l(d)},[l,c]);return _.useLayoutEffect(()=>o.listen(u),[o,u]),_.useEffect(()=>dv(r),[r]),_.createElement(hv,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Z2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Z2||(Z2={}));var e5;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(e5||(e5={}));/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yv=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),t5=t=>{const e=yv(t);return e.charAt(0).toUpperCase()+e.slice(1)},th=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=_.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>_.createElement("svg",{ref:l,...vv,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:th("lucide",i),...a},[...o.map(([c,u])=>_.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=(t,e)=>{const n=_.forwardRef(({className:r,...i},s)=>_.createElement(_v,{ref:s,iconNode:e,className:th(`lucide-${Cv(t5(t))}`,`lucide-${t}`,r),...i}));return n.displayName=t5(t),n};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Sv=wv("chevron-down",Ev),a4=_.createContext({});function l4(t){const e=_.useRef(null);return e.current===null&&(e.current=t()),e.current}const c4=typeof window<"u",nh=c4?_.useLayoutEffect:_.useEffect,Gl=_.createContext(null);function u4(t,e){t.indexOf(e)===-1&&t.push(e)}function d4(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Fn=(t,e,n)=>n>e?e:n<t?t:n;let h4=()=>{};const Vn={},rh=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function ih(t){return typeof t=="object"&&t!==null}const sh=t=>/^0[^.\s]+$/u.test(t);function f4(t){let e;return()=>(e===void 0&&(e=t()),e)}const jt=t=>t,Tv=(t,e)=>n=>e(t(n)),ha=(...t)=>t.reduce(Tv),$o=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r};class p4{constructor(){this.subscriptions=[]}add(e){return u4(this.subscriptions,e),()=>d4(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mn=t=>t*1e3,gn=t=>t/1e3;function oh(t,e){return e?t*(1e3/e):0}const ah=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,xv=1e-7,kv=12;function Iv(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=ah(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>xv&&++a<kv);return o}function fa(t,e,n,r){if(t===e&&n===r)return jt;const i=s=>Iv(s,0,1,t,n);return s=>s===0||s===1?s:ah(i(s),e,r)}const lh=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ch=t=>e=>1-t(1-e),uh=fa(.33,1.53,.69,.99),m4=ch(uh),dh=lh(m4),hh=t=>(t*=2)<1?.5*m4(t):.5*(2-Math.pow(2,-10*(t-1))),g4=t=>1-Math.sin(Math.acos(t)),fh=ch(g4),ph=lh(g4),Pv=fa(.42,0,1,1),Av=fa(0,0,.58,1),mh=fa(.42,0,.58,1),bv=t=>Array.isArray(t)&&typeof t[0]!="number",gh=t=>Array.isArray(t)&&typeof t[0]=="number",Rv={linear:jt,easeIn:Pv,easeInOut:mh,easeOut:Av,circIn:g4,circInOut:ph,circOut:fh,backIn:m4,backInOut:dh,backOut:uh,anticipate:hh},Nv=t=>typeof t=="string",n5=t=>{if(gh(t)){h4(t.length===4);const[e,n,r,i]=t;return fa(e,n,r,i)}else if(Nv(t))return Rv[t];return t},qa=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],r5={value:null,addProjectionMetrics:null};function Mv(t,e){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(d){o.has(d)&&(u.schedule(d),t()),l++,d(a)}const u={schedule:(d,f=!1,p=!1)=>{const v=p&&i?n:r;return f&&o.add(d),v.has(d)||v.add(d),d},cancel:d=>{r.delete(d),o.delete(d)},process:d=>{if(a=d,i){s=!0;return}i=!0,[n,r]=[r,n],n.forEach(c),e&&r5.value&&r5.value.frameloop[e].push(l),l=0,n.clear(),i=!1,s&&(s=!1,u.process(d))}};return u}const Dv=40;function Ch(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=qa.reduce((C,E)=>(C[E]=Mv(s,e?E:void 0),C),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:f,render:p,postRender:y}=o,v=()=>{const C=Vn.useManualTiming?i.timestamp:performance.now();n=!1,Vn.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(C-i.timestamp,Dv),1)),i.timestamp=C,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),p.process(i),y.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(v))},w=()=>{n=!0,r=!0,i.isProcessing||t(v)};return{schedule:qa.reduce((C,E)=>{const S=o[E];return C[E]=(k,x=!1,T=!1)=>(n||w(),S.schedule(k,x,T)),C},{}),cancel:C=>{for(let E=0;E<qa.length;E++)o[qa[E]].cancel(C)},state:i,steps:o}}const{schedule:ve,cancel:wr,state:$e,steps:H0}=Ch(typeof requestAnimationFrame<"u"?requestAnimationFrame:jt,!0);let m1;function Ov(){m1=void 0}const ft={now:()=>(m1===void 0&&ft.set($e.isProcessing||Vn.useManualTiming?$e.timestamp:performance.now()),m1),set:t=>{m1=t,queueMicrotask(Ov)}},yh=t=>e=>typeof e=="string"&&e.startsWith(t),C4=yh("--"),Lv=yh("var(--"),y4=t=>Lv(t)?Fv.test(t.split("/*")[0].trim()):!1,Fv=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ss={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Wo={...Ss,transform:t=>Fn(0,1,t)},Ya={...Ss,default:1},po=t=>Math.round(t*1e5)/1e5,v4=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Vv(t){return t==null}const Uv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_4=(t,e)=>n=>!!(typeof n=="string"&&Uv.test(n)&&n.startsWith(t)||e&&!Vv(n)&&Object.prototype.hasOwnProperty.call(n,e)),vh=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(v4);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Bv=t=>Fn(0,255,t),K0={...Ss,transform:t=>Math.round(Bv(t))},Hr={test:_4("rgb","red"),parse:vh("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+K0.transform(t)+", "+K0.transform(e)+", "+K0.transform(n)+", "+po(Wo.transform(r))+")"};function zv(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const yu={test:_4("#"),parse:zv,transform:Hr.transform},pa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Gn=pa("deg"),Cn=pa("%"),$=pa("px"),jv=pa("vh"),$v=pa("vw"),i5=(()=>({...Cn,parse:t=>Cn.parse(t)/100,transform:t=>Cn.transform(t*100)}))(),Oi={test:_4("hsl","hue"),parse:vh("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Cn.transform(po(e))+", "+Cn.transform(po(n))+", "+po(Wo.transform(r))+")"},Pe={test:t=>Hr.test(t)||yu.test(t)||Oi.test(t),parse:t=>Hr.test(t)?Hr.parse(t):Oi.test(t)?Oi.parse(t):yu.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Hr.transform(t):Oi.transform(t),getAnimatableNone:t=>{const e=Pe.parse(t);return e.alpha=0,Pe.transform(e)}},Wv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Hv(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(v4))==null?void 0:e.length)||0)+(((n=t.match(Wv))==null?void 0:n.length)||0)>0}const _h="number",wh="color",Kv="var",Gv="var(",s5="${}",qv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ho(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(qv,l=>(Pe.test(l)?(r.color.push(s),i.push(wh),n.push(Pe.parse(l))):l.startsWith(Gv)?(r.var.push(s),i.push(Kv),n.push(l)):(r.number.push(s),i.push(_h),n.push(parseFloat(l))),++s,s5)).split(s5);return{values:n,split:a,indexes:r,types:i}}function Eh(t){return Ho(t).values}function Sh(t){const{split:e,types:n}=Ho(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const a=n[o];a===_h?s+=po(i[o]):a===wh?s+=Pe.transform(i[o]):s+=i[o]}return s}}const Yv=t=>typeof t=="number"?0:Pe.test(t)?Pe.getAnimatableNone(t):t;function Qv(t){const e=Eh(t);return Sh(t)(e.map(Yv))}const Er={test:Hv,parse:Eh,createTransformer:Sh,getAnimatableNone:Qv};function G0(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Xv({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=G0(l,a,t+1/3),s=G0(l,a,t),o=G0(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function J1(t,e){return n=>n>0?e:t}const ge=(t,e,n)=>t+(e-t)*n,q0=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},Jv=[yu,Hr,Oi],Zv=t=>Jv.find(e=>e.test(t));function o5(t){const e=Zv(t);if(!e)return!1;let n=e.parse(t);return e===Oi&&(n=Xv(n)),n}const a5=(t,e)=>{const n=o5(t),r=o5(e);if(!n||!r)return J1(t,e);const i={...n};return s=>(i.red=q0(n.red,r.red,s),i.green=q0(n.green,r.green,s),i.blue=q0(n.blue,r.blue,s),i.alpha=ge(n.alpha,r.alpha,s),Hr.transform(i))},vu=new Set(["none","hidden"]);function e_(t,e){return vu.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function t_(t,e){return n=>ge(t,e,n)}function w4(t){return typeof t=="number"?t_:typeof t=="string"?y4(t)?J1:Pe.test(t)?a5:i_:Array.isArray(t)?Th:typeof t=="object"?Pe.test(t)?a5:n_:J1}function Th(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>w4(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function n_(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=w4(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function r_(t,e){const n=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const s=e.types[i],o=t.indexes[s][r[s]],a=t.values[o]??0;n[i]=a,r[s]++}return n}const i_=(t,e)=>{const n=Er.createTransformer(e),r=Ho(t),i=Ho(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?vu.has(t)&&!i.values.length||vu.has(e)&&!r.values.length?e_(t,e):ha(Th(r_(r,i),i.values),n):J1(t,e)};function xh(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ge(t,e,n):w4(t)(t,e)}const s_=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ve.update(e,n),stop:()=>wr(e),now:()=>$e.isProcessing?$e.timestamp:ft.now()}},kh=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let s=0;s<i;s++)r+=Math.round(t(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Z1=2e4;function E4(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<Z1;)e+=n,r=t.next(e);return e>=Z1?1/0:e}function o_(t,e=100,n){const r=n({...t,keyframes:[0,e]}),i=Math.min(E4(r),Z1);return{type:"keyframes",ease:s=>r.next(i*s).value/e,duration:gn(i)}}const a_=5;function Ih(t,e,n){const r=Math.max(e-a_,0);return oh(n-t(r),e-r)}const we={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Y0=.001;function l_({duration:t=we.duration,bounce:e=we.bounce,velocity:n=we.velocity,mass:r=we.mass}){let i,s,o=1-e;o=Fn(we.minDamping,we.maxDamping,o),t=Fn(we.minDuration,we.maxDuration,gn(t)),o<1?(i=c=>{const u=c*o,d=u*t,f=u-n,p=_u(c,o),y=Math.exp(-d);return Y0-f/p*y},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,y=Math.exp(-d),v=_u(Math.pow(c,2),o);return(-i(c)+Y0>0?-1:1)*((f-p)*y)/v}):(i=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Y0+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=u_(i,s,a);if(t=mn(t),isNaN(l))return{stiffness:we.stiffness,damping:we.damping,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const c_=12;function u_(t,e,n){let r=n;for(let i=1;i<c_;i++)r=r-t(r)/e(r);return r}function _u(t,e){return t*Math.sqrt(1-e*e)}const d_=["duration","bounce"],h_=["stiffness","damping","mass"];function l5(t,e){return e.some(n=>t[n]!==void 0)}function f_(t){let e={velocity:we.velocity,stiffness:we.stiffness,damping:we.damping,mass:we.mass,isResolvedFromDuration:!1,...t};if(!l5(t,h_)&&l5(t,d_))if(t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Fn(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:we.mass,stiffness:i,damping:s}}else{const n=l_(t);e={...e,...n,mass:we.mass},e.isResolvedFromDuration=!0}return e}function el(t=we.visualDuration,e=we.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=f_({...n,velocity:-gn(n.velocity||0)}),y=f||0,v=c/(2*Math.sqrt(l*u)),w=o-s,g=gn(Math.sqrt(l/u)),m=Math.abs(w)<5;r||(r=m?we.restSpeed.granular:we.restSpeed.default),i||(i=m?we.restDelta.granular:we.restDelta.default);let C;if(v<1){const S=_u(g,v);C=k=>{const x=Math.exp(-v*g*k);return o-x*((y+v*g*w)/S*Math.sin(S*k)+w*Math.cos(S*k))}}else if(v===1)C=S=>o-Math.exp(-g*S)*(w+(y+g*w)*S);else{const S=g*Math.sqrt(v*v-1);C=k=>{const x=Math.exp(-v*g*k),T=Math.min(S*k,300);return o-x*((y+v*g*w)*Math.sinh(T)+S*w*Math.cosh(T))/S}}const E={calculatedDuration:p&&d||null,next:S=>{const k=C(S);if(p)a.done=S>=d;else{let x=S===0?y:0;v<1&&(x=S===0?mn(y):Ih(C,S,k));const T=Math.abs(x)<=r,F=Math.abs(o-k)<=i;a.done=T&&F}return a.value=a.done?o:k,a},toString:()=>{const S=Math.min(E4(E),Z1),k=kh(x=>E.next(S*x).value,S,30);return S+"ms "+k},toTransition:()=>{}};return E}el.applyToOptions=t=>{const e=o_(t,100,el);return t.ease=e.ease,t.duration=mn(e.duration),t.type="keyframes",t};function wu({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let v=n*e;const w=d+v,g=o===void 0?w:o(w);g!==w&&(v=g-d);const m=T=>-v*Math.exp(-T/r),C=T=>g+m(T),E=T=>{const F=m(T),b=C(T);f.done=Math.abs(F)<=c,f.value=f.done?g:b};let S,k;const x=T=>{p(f.value)&&(S=T,k=el({keyframes:[f.value,y(f.value)],velocity:Ih(C,T,f.value),damping:i,stiffness:s,restDelta:c,restSpeed:u}))};return x(0),{calculatedDuration:null,next:T=>{let F=!1;return!k&&S===void 0&&(F=!0,E(T),x(T)),S!==void 0&&T>=S?k.next(T-S):(!F&&E(T),f)}}}function p_(t,e,n){const r=[],i=n||Vn.mix||xh,s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||jt:e;a=ha(l,a)}r.push(a)}return r}function m_(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(h4(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=p_(e,r,i),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=$o(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Fn(t[0],t[s-1],u)):c}function g_(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=$o(0,e,r);t.push(ge(n,1,i))}}function C_(t){const e=[0];return g_(e,t.length-1),e}function y_(t,e){return t.map(n=>n*e)}function v_(t,e){return t.map(()=>e||mh).splice(0,t.length-1)}function mo({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=bv(r)?r.map(n5):n5(r),s={done:!1,value:e[0]},o=y_(n&&n.length===e.length?n:C_(e),t),a=m_(o,e,{ease:Array.isArray(i)?i:v_(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const __=t=>t!==null;function S4(t,{repeat:e,repeatType:n="loop"},r,i=1){const s=t.filter(__),a=i<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||r===void 0?s[a]:r}const w_={decay:wu,inertia:wu,tween:mo,keyframes:mo,spring:el};function Ph(t){typeof t.type=="string"&&(t.type=w_[t.type])}class T4{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const E_=t=>t/100;class x4 extends T4{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==ft.now()&&this.tick(ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Ph(e);const{type:n=mo,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||mo;l!==mo&&typeof a[0]!="number"&&(this.mixKeyframes=ha(E_,xh(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=E4(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:p,type:y,onUpdate:v,finalKeyframe:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let C=this.currentTime,E=r;if(d){const T=Math.min(this.currentTime,i)/a;let F=Math.floor(T),b=T%1;!b&&T>=1&&(b=1),b===1&&F--,F=Math.min(F,d+1),!!(F%2)&&(f==="reverse"?(b=1-b,p&&(b-=p/a)):f==="mirror"&&(E=o)),C=Fn(0,1,b)*a}const S=m?{done:!1,value:u[0]}:E.next(C);s&&(S.value=s(S.value));let{done:k}=S;!m&&l!==null&&(k=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const x=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return x&&y!==wu&&(S.value=S4(u,this.options,w,this.speed)),v&&v(S.value),x&&this.finish(),S}then(e,n){return this.finished.then(e,n)}get duration(){return gn(this.calculatedDuration)}get time(){return gn(this.currentTime)}set time(e){var n;e=mn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(ft.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=gn(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:e=s_,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function S_(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Kr=t=>t*180/Math.PI,Eu=t=>{const e=Kr(Math.atan2(t[1],t[0]));return Su(e)},T_={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Eu,rotateZ:Eu,skewX:t=>Kr(Math.atan(t[1])),skewY:t=>Kr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Su=t=>(t=t%360,t<0&&(t+=360),t),c5=Eu,u5=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),d5=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),x_={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:u5,scaleY:d5,scale:t=>(u5(t)+d5(t))/2,rotateX:t=>Su(Kr(Math.atan2(t[6],t[5]))),rotateY:t=>Su(Kr(Math.atan2(-t[2],t[0]))),rotateZ:c5,rotate:c5,skewX:t=>Kr(Math.atan(t[4])),skewY:t=>Kr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Tu(t){return t.includes("scale")?1:0}function xu(t,e){if(!t||t==="none")return Tu(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=x_,i=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=T_,i=a}if(!i)return Tu(e);const s=r[e],o=i[1].split(",").map(I_);return typeof s=="function"?s(o):o[s]}const k_=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return xu(n,e)};function I_(t){return parseFloat(t.trim())}const Ts=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xs=(()=>new Set(Ts))(),h5=t=>t===Ss||t===$,P_=new Set(["x","y","z"]),A_=Ts.filter(t=>!P_.has(t));function b_(t){const e=[];return A_.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Qr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>xu(e,"x"),y:(t,{transform:e})=>xu(e,"y")};Qr.translateX=Qr.x;Qr.translateY=Qr.y;const Xr=new Set;let ku=!1,Iu=!1,Pu=!1;function Ah(){if(Iu){const t=Array.from(Xr).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=b_(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))==null||a.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Iu=!1,ku=!1,Xr.forEach(t=>t.complete(Pu)),Xr.clear()}function bh(){Xr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Iu=!0)})}function R_(){Pu=!0,bh(),Ah(),Pu=!1}class k4{constructor(e,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Xr.add(this),ku||(ku=!0,ve.read(bh),ve.resolveKeyframes(Ah))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;if(e[0]===null){const s=i==null?void 0:i.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(r&&n){const a=r.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),i&&s===void 0&&i.set(e[0])}S_(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Xr.delete(this)}cancel(){this.state==="scheduled"&&(Xr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const N_=t=>t.startsWith("--");function M_(t,e,n){N_(e)?t.style.setProperty(e,n):t.style[e]=n}const D_=f4(()=>window.ScrollTimeline!==void 0),O_={};function L_(t,e){const n=f4(t);return()=>O_[e]??n()}const Rh=L_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),to=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,f5={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:to([0,.65,.55,1]),circOut:to([.55,0,1,.45]),backIn:to([.31,.01,.66,-.59]),backOut:to([.33,1.53,.69,.99])};function Nh(t,e){if(t)return typeof t=="function"?Rh()?kh(t,e):"ease-out":gh(t)?to(t):Array.isArray(t)?t.map(n=>Nh(n,e)||f5.easeOut):f5[t]}function F_(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=Nh(a,i);Array.isArray(d)&&(u.easing=d);const f={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),t.animate(u,f)}function Mh(t){return typeof t=="function"&&"applyToOptions"in t}function V_({type:t,...e}){return Mh(t)&&Rh()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class U_ extends T4{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,h4(typeof e.type!="string");const c=V_(e);this.animation=F_(n,r,i,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=S4(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(u):M_(n,r,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,r;const e=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return gn(Number(e))}get time(){return gn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=mn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&D_()?(this.animation.timeline=e,jt):n(this)}}const Dh={anticipate:hh,backInOut:dh,circInOut:ph};function B_(t){return t in Dh}function z_(t){typeof t.ease=="string"&&B_(t.ease)&&(t.ease=Dh[t.ease])}const p5=10;class j_ extends U_{constructor(e){z_(e),Ph(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new x4({...o,autoplay:!1}),l=mn(this.finishedTime??this.time);n.setWithVelocity(a.sample(l-p5).value,a.sample(l).value,p5),a.stop()}}const m5=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Er.test(t)||t==="0")&&!t.startsWith("url("));function $_(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function W_(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=m5(i,e),a=m5(s,e);return!o||!a?!1:$_(t)||(n==="spring"||Mh(n))&&r}function I4(t){return ih(t)&&"offsetHeight"in t}const H_=new Set(["opacity","clipPath","filter","transform"]),K_=f4(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function G_(t){var c;const{motionValue:e,name:n,repeatDelay:r,repeatType:i,damping:s,type:o}=t;if(!I4((c=e==null?void 0:e.owner)==null?void 0:c.current))return!1;const{onUpdate:a,transformTemplate:l}=e.owner.getProps();return K_()&&n&&H_.has(n)&&(n!=="transform"||!l)&&!a&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const q_=40;class Y_ extends T4{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){var y;super(),this.stop=()=>{var v,w;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(w=this.keyframeResolver)==null||w.cancel()},this.createdAt=ft.now();const f={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...d},p=(u==null?void 0:u.KeyframeResolver)||k4;this.keyframeResolver=new p(a,(v,w,g)=>this.onKeyframesResolved(v,w,f,!g),l,c,u),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(e,n,r,i){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=r;this.resolvedAt=ft.now(),W_(e,s,o,a)||((Vn.instantAnimations||!l)&&(u==null||u(S4(e,r,n))),e[0]=e[e.length-1],r.duration=0,r.repeat=0);const f={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>q_?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:e},p=!c&&G_(f)?new j_({...f,element:f.motionValue.owner.current}):new x4(f);p.finished.then(()=>this.notifyFinished()).catch(jt),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),R_()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const Q_=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function X_(t){const e=Q_.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function Oh(t,e,n=1){const[r,i]=X_(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return rh(o)?parseFloat(o):o}return y4(i)?Oh(i,e,n+1):i}function P4(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const Lh=new Set(["width","height","top","left","right","bottom",...Ts]),J_={test:t=>t==="auto",parse:t=>t},Fh=t=>e=>e.test(t),Vh=[Ss,$,Cn,Gn,$v,jv,J_],g5=t=>Vh.find(Fh(t));function Z_(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||sh(t):!0}const ew=new Set(["brightness","contrast","saturate","opacity"]);function tw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(v4)||[];if(!r)return t;const i=n.replace(r,"");let s=ew.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const nw=/\b([a-z-]*)\(.*?\)/gu,Au={...Er,getAnimatableNone:t=>{const e=t.match(nw);return e?e.map(tw).join(" "):t}},C5={...Ss,transform:Math.round},rw={rotate:Gn,rotateX:Gn,rotateY:Gn,rotateZ:Gn,scale:Ya,scaleX:Ya,scaleY:Ya,scaleZ:Ya,skew:Gn,skewX:Gn,skewY:Gn,distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:Wo,originX:i5,originY:i5,originZ:$},A4={borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,radius:$,borderTopLeftRadius:$,borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,top:$,right:$,bottom:$,left:$,padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,backgroundPositionX:$,backgroundPositionY:$,...rw,zIndex:C5,fillOpacity:Wo,strokeOpacity:Wo,numOctaves:C5},iw={...A4,color:Pe,backgroundColor:Pe,outlineColor:Pe,fill:Pe,stroke:Pe,borderColor:Pe,borderTopColor:Pe,borderRightColor:Pe,borderBottomColor:Pe,borderLeftColor:Pe,filter:Au,WebkitFilter:Au},Uh=t=>iw[t];function Bh(t,e){let n=Uh(t);return n!==Au&&(n=Er),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const sw=new Set(["auto","none","0"]);function ow(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!sw.has(s)&&Ho(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=Bh(n,i)}class aw extends k4{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),y4(c))){const u=Oh(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Lh.has(r)||e.length!==2)return;const[i,s]=e,o=g5(i),a=g5(s);if(o!==a)if(h5(o)&&h5(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else Qr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)(e[i]===null||Z_(e[i]))&&r.push(i);r.length&&ow(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Qr[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=Qr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function lw(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;e&&(r=e.current);const i=(n==null?void 0:n[t])??r.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t)}const zh=(t,e)=>e&&typeof t=="number"?e.transform(t):t,y5=30,cw=t=>!isNaN(parseFloat(t));class uw{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{var o,a;const s=ft.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty();i&&((a=this.events.renderRequest)==null||a.notify(this.current))},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ft.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=cw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new p4);const r=this.events[e].add(n);return e==="change"?()=>{r(),ve.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>y5)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,y5);return oh(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function hs(t,e){return new uw(t,e)}const{schedule:b4,cancel:RN}=Ch(queueMicrotask,!1),Gt={x:!1,y:!1};function jh(){return Gt.x||Gt.y}function dw(t){return t==="x"||t==="y"?Gt[t]?null:(Gt[t]=!0,()=>{Gt[t]=!1}):Gt.x||Gt.y?null:(Gt.x=Gt.y=!0,()=>{Gt.x=Gt.y=!1})}function $h(t,e){const n=lw(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function v5(t){return!(t.pointerType==="touch"||jh())}function hw(t,e,n={}){const[r,i,s]=$h(t,n),o=a=>{if(!v5(a))return;const{target:l}=a,c=e(l,a);if(typeof c!="function"||!l)return;const u=d=>{v5(d)&&(c(d),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,i)};return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const Wh=(t,e)=>e?t===e?!0:Wh(t,e.parentElement):!1,R4=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,fw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function pw(t){return fw.has(t.tagName)||t.tabIndex!==-1}const g1=new WeakSet;function _5(t){return e=>{e.key==="Enter"&&t(e)}}function Q0(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const mw=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=_5(()=>{if(g1.has(n))return;Q0(n,"down");const i=_5(()=>{Q0(n,"up")}),s=()=>Q0(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function w5(t){return R4(t)&&!jh()}function gw(t,e,n={}){const[r,i,s]=$h(t,n),o=a=>{const l=a.currentTarget;if(!w5(a))return;g1.add(l);const c=e(l,a),u=(p,y)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),g1.has(l)&&g1.delete(l),w5(p)&&typeof c=="function"&&c(p,{success:y})},d=p=>{u(p,l===window||l===document||n.useGlobalTarget||Wh(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",f,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),I4(a)&&(a.addEventListener("focus",c=>mw(c,i)),!pw(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Hh(t){return ih(t)&&"ownerSVGElement"in t}function Cw(t){return Hh(t)&&t.tagName==="svg"}const Xe=t=>!!(t&&t.getVelocity),yw=[...Vh,Pe,Er],vw=t=>yw.find(Fh(t)),N4=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class _w extends _.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=I4(r)&&r.offsetWidth||0,s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft,s.right=i-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ww({children:t,isPresent:e,anchorX:n}){const r=_.useId(),i=_.useRef(null),s=_.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:o}=_.useContext(N4);return _.useInsertionEffect(()=>{const{width:a,height:l,top:c,left:u,right:d}=s.current;if(e||!i.current||!a||!l)return;const f=n==="left"?`left: ${u}`:`right: ${d}`;i.current.dataset.motionPopId=r;const p=document.createElement("style");return o&&(p.nonce=o),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${f}px !important;
            top: ${c}px !important;
          }
        `),()=>{document.head.contains(p)&&document.head.removeChild(p)}},[e]),h(_w,{isPresent:e,childRef:i,sizeRef:s,children:_.cloneElement(t,{ref:i})})}const Ew=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:a})=>{const l=l4(Sw),c=_.useId();let u=!0,d=_.useMemo(()=>(u=!1,{id:c,initial:e,isPresent:n,custom:i,onExitComplete:f=>{l.set(f,!0);for(const p of l.values())if(!p)return;r&&r()},register:f=>(l.set(f,!1),()=>l.delete(f))}),[n,l,r]);return s&&u&&(d={...d}),_.useMemo(()=>{l.forEach((f,p)=>l.set(p,!1))},[n]),_.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(t=h(ww,{isPresent:n,anchorX:a,children:t})),h(Gl.Provider,{value:d,children:t})};function Sw(){return new Map}function Kh(t=!0){const e=_.useContext(Gl);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,s=_.useId();_.useEffect(()=>{if(t)return i(s)},[t]);const o=_.useCallback(()=>t&&r&&r(s),[s,r,t]);return!n&&r?[!1,o]:[!0]}const Qa=t=>t.key||"";function E5(t){const e=[];return _.Children.forEach(t,n=>{_.isValidElement(n)&&e.push(n)}),e}const Tw=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:a="left"})=>{const[l,c]=Kh(o),u=_.useMemo(()=>E5(t),[t]),d=o&&!l?[]:u.map(Qa),f=_.useRef(!0),p=_.useRef(u),y=l4(()=>new Map),[v,w]=_.useState(u),[g,m]=_.useState(u);nh(()=>{f.current=!1,p.current=u;for(let S=0;S<g.length;S++){const k=Qa(g[S]);d.includes(k)?y.delete(k):y.get(k)!==!0&&y.set(k,!1)}},[g,d.length,d.join("-")]);const C=[];if(u!==v){let S=[...u];for(let k=0;k<g.length;k++){const x=g[k],T=Qa(x);d.includes(T)||(S.splice(k,0,x),C.push(x))}return s==="wait"&&C.length&&(S=C),m(E5(S)),w(u),null}const{forceRender:E}=_.useContext(a4);return h(G,{children:g.map(S=>{const k=Qa(S),x=o&&!l?!1:u===g||d.includes(k),T=()=>{if(y.has(k))y.set(k,!0);else return;let F=!0;y.forEach(b=>{b||(F=!1)}),F&&(E==null||E(),m(p.current),o&&(c==null||c()),r&&r())};return h(Ew,{isPresent:x,initial:!f.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:s,onExitComplete:x?void 0:T,anchorX:a,children:S},k)})})},Gh=_.createContext({strict:!1}),S5={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},fs={};for(const t in S5)fs[t]={isEnabled:e=>S5[t].some(n=>!!e[n])};function xw(t){for(const e in t)fs[e]={...fs[e],...t[e]}}const kw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function tl(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||kw.has(t)}let qh=t=>!tl(t);function Iw(t){typeof t=="function"&&(qh=e=>e.startsWith("on")?!tl(e):t(e))}try{Iw(require("@emotion/is-prop-valid").default)}catch{}function Pw(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(qh(i)||n===!0&&tl(i)||!e&&!tl(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function Aw(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}const ql=_.createContext({});function Yl(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ko(t){return typeof t=="string"||Array.isArray(t)}const M4=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],D4=["initial",...M4];function Ql(t){return Yl(t.animate)||D4.some(e=>Ko(t[e]))}function Yh(t){return!!(Ql(t)||t.variants)}function bw(t,e){if(Ql(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Ko(n)?n:void 0,animate:Ko(r)?r:void 0}}return t.inherit!==!1?e:{}}function Rw(t){const{initial:e,animate:n}=bw(t,_.useContext(ql));return _.useMemo(()=>({initial:e,animate:n}),[T5(e),T5(n)])}function T5(t){return Array.isArray(t)?t.join(" "):t}const Nw=Symbol.for("motionComponentSymbol");function Li(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Mw(t,e,n){return _.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Li(n)&&(n.current=r))},[e])}const O4=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Dw="framerAppearId",Qh="data-"+O4(Dw),Xh=_.createContext({});function Ow(t,e,n,r,i){var v,w;const{visualElement:s}=_.useContext(ql),o=_.useContext(Gh),a=_.useContext(Gl),l=_.useContext(N4).reducedMotion,c=_.useRef(null);r=r||o.renderer,!c.current&&r&&(c.current=r(t,{visualState:e,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,d=_.useContext(Xh);u&&!u.projection&&i&&(u.type==="html"||u.type==="svg")&&Lw(c.current,n,i,d);const f=_.useRef(!1);_.useInsertionEffect(()=>{u&&f.current&&u.update(n,a)});const p=n[Qh],y=_.useRef(!!p&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,p))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,p)));return nh(()=>{u&&(f.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),b4.render(u.render),y.current&&u.animationState&&u.animationState.animateChanges())}),_.useEffect(()=>{u&&(!y.current&&u.animationState&&u.animationState.animateChanges(),y.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)==null||g.call(window,p)}),y.current=!1))}),u}function Lw(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Jh(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Li(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}function Jh(t){if(t)return t.options.allowProjection!==!1?t.projection:Jh(t.parent)}function Fw({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&xw(t);function s(a,l){let c;const u={..._.useContext(N4),...a,layoutId:Vw(a)},{isStatic:d}=u,f=Rw(a),p=r(a,d);if(!d&&c4){Uw();const y=Bw(u);c=y.MeasureLayout,f.visualElement=Ow(i,p,u,e,y.ProjectionNode)}return I(ql.Provider,{value:f,children:[c&&f.visualElement?h(c,{visualElement:f.visualElement,...u}):null,n(i,a,Mw(p,f.visualElement,l),p,d,f.visualElement)]})}s.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const o=_.forwardRef(s);return o[Nw]=i,o}function Vw({layoutId:t}){const e=_.useContext(a4).id;return e&&t!==void 0?e+"-"+t:t}function Uw(t,e){_.useContext(Gh).strict}function Bw(t){const{drag:e,layout:n}=fs;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Go={};function zw(t){for(const e in t)Go[e]=t[e],C4(e)&&(Go[e].isCSSVariable=!0)}function Zh(t,{layout:e,layoutId:n}){return xs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Go[t]||t==="opacity")}const jw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$w=Ts.length;function Ww(t,e,n){let r="",i=!0;for(let s=0;s<$w;s++){const o=Ts[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=zh(a,A4[o]);if(!l){i=!1;const u=jw[o]||o;r+=`${u}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function L4(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(xs.has(l)){o=!0;continue}else if(C4(l)){i[l]=c;continue}else{const u=zh(c,A4[l]);l.startsWith("origin")?(a=!0,s[l]=u):r[l]=u}}if(e.transform||(o||n?r.transform=Ww(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;r.transformOrigin=`${l} ${c} ${u}`}}const F4=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ef(t,e,n){for(const r in e)!Xe(e[r])&&!Zh(r,n)&&(t[r]=e[r])}function Hw({transformTemplate:t},e){return _.useMemo(()=>{const n=F4();return L4(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Kw(t,e){const n=t.style||{},r={};return ef(r,n,t),Object.assign(r,Hw(t,e)),r}function Gw(t,e){const n={},r=Kw(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const qw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Yw={offset:"strokeDashoffset",array:"strokeDasharray"};function Qw(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?qw:Yw;t[s.offset]=$.transform(-r);const o=$.transform(e),a=$.transform(n);t[s.array]=`${o} ${a}`}function tf(t,{attrX:e,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(L4(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f}=t;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Qw(d,i,s,o,!1)}const nf=()=>({...F4(),attrs:{}}),rf=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Xw(t,e,n,r){const i=_.useMemo(()=>{const s=nf();return tf(s,e,rf(r),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};ef(s,t.style,t),i.style={...s,...i.style}}return i}const Jw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function V4(t){return typeof t!="string"||t.includes("-")?!1:!!(Jw.indexOf(t)>-1||/[A-Z]/u.test(t))}function Zw(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(V4(n)?Xw:Gw)(r,s,o,n),c=Pw(r,typeof n=="string",t),u=n!==_.Fragment?{...c,...l,ref:i}:{},{children:d}=r,f=_.useMemo(()=>Xe(d)?d.get():d,[d]);return _.createElement(n,{...u,children:f})}}function x5(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function U4(t,e,n,r){if(typeof e=="function"){const[i,s]=x5(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=x5(r);e=e(n!==void 0?n:t.custom,i,s)}return e}function C1(t){return Xe(t)?t.get():t}function eE({scrapeMotionValuesFromProps:t,createRenderState:e},n,r,i){return{latestValues:tE(n,r,i,t),renderState:e()}}const sf=t=>(e,n)=>{const r=_.useContext(ql),i=_.useContext(Gl),s=()=>eE(t,e,r,i);return n?s():l4(s)};function tE(t,e,n,r){const i={},s=r(t,{});for(const f in s)i[f]=C1(s[f]);let{initial:o,animate:a}=t;const l=Ql(t),c=Yh(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Yl(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const y=U4(t,f[p]);if(y){const{transitionEnd:v,transition:w,...g}=y;for(const m in g){let C=g[m];if(Array.isArray(C)){const E=u?C.length-1:0;C=C[E]}C!==null&&(i[m]=C)}for(const m in v)i[m]=v[m]}}}return i}function B4(t,e,n){var s;const{style:r}=t,i={};for(const o in r)(Xe(r[o])||e.style&&Xe(e.style[o])||Zh(o,t)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(i[o]=r[o]);return i}const nE={useVisualState:sf({scrapeMotionValuesFromProps:B4,createRenderState:F4})};function of(t,e,n){const r=B4(t,e,n);for(const i in t)if(Xe(t[i])||Xe(e[i])){const s=Ts.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}const rE={useVisualState:sf({scrapeMotionValuesFromProps:of,createRenderState:nf})};function iE(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...V4(r)?rE:nE,preloadedFeatures:t,useRender:Zw(i),createVisualElement:e,Component:r};return Fw(o)}}function qo(t,e,n){const r=t.getProps();return U4(r,e,n!==void 0?n:r.custom,t)}const bu=t=>Array.isArray(t);function sE(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,hs(n))}function oE(t){return bu(t)?t[t.length-1]||0:t}function aE(t,e){const n=qo(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=oE(s[o]);sE(t,o,a)}}function lE(t){return!!(Xe(t)&&t.add)}function Ru(t,e){const n=t.getValue("willChange");if(lE(n))return n.add(e);if(!n&&Vn.WillChange){const r=new Vn.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function af(t){return t.props[Qh]}const cE=t=>t!==null;function uE(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(cE),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const dE={type:"spring",stiffness:500,damping:25,restSpeed:10},hE=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),fE={type:"keyframes",duration:.8},pE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},mE=(t,{keyframes:e})=>e.length>2?fE:xs.has(t)?t.startsWith("scale")?hE(e[1]):dE:pE;function gE({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const z4=(t,e,n,r={},i,s)=>o=>{const a=P4(r,t)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-mn(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:i};gE(a)||Object.assign(u,mE(t,u)),u.duration&&(u.duration=mn(u.duration)),u.repeatDelay&&(u.repeatDelay=mn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),(Vn.instantAnimations||Vn.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const f=uE(u.keyframes,a);if(f!==void 0){ve.update(()=>{u.onUpdate(f),u.onComplete()});return}}return a.isSync?new x4(u):new Y_(u)};function CE({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function lf(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=e;r&&(s=r);const l=[],c=i&&t.animationState&&t.animationState.getState()[i];for(const u in a){const d=t.getValue(u,t.latestValues[u]??null),f=a[u];if(f===void 0||c&&CE(c,u))continue;const p={delay:n,...P4(s||{},u)},y=d.get();if(y!==void 0&&!d.isAnimating&&!Array.isArray(f)&&f===y&&!p.velocity)continue;let v=!1;if(window.MotionHandoffAnimation){const g=af(t);if(g){const m=window.MotionHandoffAnimation(g,u,ve);m!==null&&(p.startTime=m,v=!0)}}Ru(t,u),d.start(z4(u,d,f,t.shouldReduceMotion&&Lh.has(u)?{type:!1}:p,t,v));const w=d.animation;w&&l.push(w)}return o&&Promise.all(l).then(()=>{ve.update(()=>{o&&aE(t,o)})}),l}function Nu(t,e,n={}){var l;const r=qo(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(lf(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=i;return yE(t,e,u+c,d,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function yE(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(vE).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Nu(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function vE(t,e){return t.sortNodePosition(e)}function _E(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>Nu(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=Nu(t,e,n);else{const i=typeof e=="function"?qo(t,e,n.custom):e;r=Promise.all(lf(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}function cf(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const wE=D4.length;function uf(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?uf(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<wE;n++){const r=D4[n],i=t.props[r];(Ko(i)||i===!1)&&(e[r]=i)}return e}const EE=[...M4].reverse(),SE=M4.length;function TE(t){return e=>Promise.all(e.map(({animation:n,options:r})=>_E(t,n,r)))}function xE(t){let e=TE(t),n=k5(),r=!0;const i=l=>(c,u)=>{var f;const d=qo(t,u,l==="exit"?(f=t.presenceContext)==null?void 0:f.custom:void 0);if(d){const{transition:p,transitionEnd:y,...v}=d;c={...c,...v,...y}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=uf(t.parent)||{},d=[],f=new Set;let p={},y=1/0;for(let w=0;w<SE;w++){const g=EE[w],m=n[g],C=c[g]!==void 0?c[g]:u[g],E=Ko(C),S=g===l?m.isActive:null;S===!1&&(y=w);let k=C===u[g]&&C!==c[g]&&E;if(k&&r&&t.manuallyAnimateOnMount&&(k=!1),m.protectedKeys={...p},!m.isActive&&S===null||!C&&!m.prevProp||Yl(C)||typeof C=="boolean")continue;const x=kE(m.prevProp,C);let T=x||g===l&&m.isActive&&!k&&E||w>y&&E,F=!1;const b=Array.isArray(C)?C:[C];let U=b.reduce(i(g),{});S===!1&&(U={});const{prevResolvedValues:Be={}}=m,vt={...Be,...U},_t=ae=>{T=!0,f.has(ae)&&(F=!0,f.delete(ae)),m.needsAnimating[ae]=!0;const N=t.getValue(ae);N&&(N.liveStyle=!1)};for(const ae in vt){const N=U[ae],B=Be[ae];if(p.hasOwnProperty(ae))continue;let V=!1;bu(N)&&bu(B)?V=!cf(N,B):V=N!==B,V?N!=null?_t(ae):f.add(ae):N!==void 0&&f.has(ae)?_t(ae):m.protectedKeys[ae]=!0}m.prevProp=C,m.prevResolvedValues=U,m.isActive&&(p={...p,...U}),r&&t.blockInitialAnimation&&(T=!1),T&&(!(k&&x)||F)&&d.push(...b.map(ae=>({animation:ae,options:{type:g}})))}if(f.size){const w={};if(typeof c.initial!="boolean"){const g=qo(t,Array.isArray(c.initial)?c.initial[0]:c.initial);g&&g.transition&&(w.transition=g.transition)}f.forEach(g=>{const m=t.getBaseTarget(g),C=t.getValue(g);C&&(C.liveStyle=!0),w[g]=m??null}),d.push({animation:w})}let v=!!d.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(v=!1),r=!1,v?e(d):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(f=>{var p;return(p=f.animationState)==null?void 0:p.setActive(l,c)}),n[l].isActive=c;const u=o(l);for(const f in n)n[f].protectedKeys={};return u}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=k5(),r=!0}}}function kE(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!cf(e,t):!1}function Lr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function k5(){return{animate:Lr(!0),whileInView:Lr(),whileHover:Lr(),whileTap:Lr(),whileDrag:Lr(),whileFocus:Lr(),exit:Lr()}}class Rr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class IE extends Rr{constructor(e){super(e),e.animationState||(e.animationState=xE(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Yl(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let PE=0;class AE extends Rr{constructor(){super(...arguments),this.id=PE++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const bE={animation:{Feature:IE},exit:{Feature:AE}};function Yo(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function ma(t){return{point:{x:t.pageX,y:t.pageY}}}const RE=t=>e=>R4(e)&&t(e,ma(e));function go(t,e,n,r){return Yo(t,e,RE(n),r)}function df({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function NE({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function ME(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}const hf=1e-4,DE=1-hf,OE=1+hf,ff=.01,LE=0-ff,FE=0+ff;function nt(t){return t.max-t.min}function VE(t,e,n){return Math.abs(t-e)<=n}function I5(t,e,n,r=.5){t.origin=r,t.originPoint=ge(e.min,e.max,t.origin),t.scale=nt(n)/nt(e),t.translate=ge(n.min,n.max,t.origin)-t.originPoint,(t.scale>=DE&&t.scale<=OE||isNaN(t.scale))&&(t.scale=1),(t.translate>=LE&&t.translate<=FE||isNaN(t.translate))&&(t.translate=0)}function Co(t,e,n,r){I5(t.x,e.x,n.x,r?r.originX:void 0),I5(t.y,e.y,n.y,r?r.originY:void 0)}function P5(t,e,n){t.min=n.min+e.min,t.max=t.min+nt(e)}function UE(t,e,n){P5(t.x,e.x,n.x),P5(t.y,e.y,n.y)}function A5(t,e,n){t.min=e.min-n.min,t.max=t.min+nt(e)}function yo(t,e,n){A5(t.x,e.x,n.x),A5(t.y,e.y,n.y)}const b5=()=>({translate:0,scale:1,origin:0,originPoint:0}),Fi=()=>({x:b5(),y:b5()}),R5=()=>({min:0,max:0}),xe=()=>({x:R5(),y:R5()});function Dt(t){return[t("x"),t("y")]}function X0(t){return t===void 0||t===1}function Mu({scale:t,scaleX:e,scaleY:n}){return!X0(t)||!X0(e)||!X0(n)}function Ur(t){return Mu(t)||pf(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function pf(t){return N5(t.x)||N5(t.y)}function N5(t){return t&&t!=="0%"}function nl(t,e,n){const r=t-n,i=e*r;return n+i}function M5(t,e,n,r,i){return i!==void 0&&(t=nl(t,i,r)),nl(t,n,r)+e}function Du(t,e=0,n=1,r,i){t.min=M5(t.min,e,n,r,i),t.max=M5(t.max,e,n,r,i)}function mf(t,{x:e,y:n}){Du(t.x,e.translate,e.scale,e.originPoint),Du(t.y,n.translate,n.scale,n.originPoint)}const D5=.999999999999,O5=1.0000000000001;function BE(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ui(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,mf(t,o)),r&&Ur(s.latestValues)&&Ui(t,s.latestValues))}e.x<O5&&e.x>D5&&(e.x=1),e.y<O5&&e.y>D5&&(e.y=1)}function Vi(t,e){t.min=t.min+e,t.max=t.max+e}function L5(t,e,n,r,i=.5){const s=ge(t.min,t.max,i);Du(t,e,n,s,r)}function Ui(t,e){L5(t.x,e.x,e.scaleX,e.scale,e.originX),L5(t.y,e.y,e.scaleY,e.scale,e.originY)}function gf(t,e){return df(ME(t.getBoundingClientRect(),e))}function zE(t,e,n){const r=gf(t,n),{scroll:i}=e;return i&&(Vi(r.x,i.offset.x),Vi(r.y,i.offset.y)),r}const Cf=({current:t})=>t?t.ownerDocument.defaultView:null,F5=(t,e)=>Math.abs(t-e);function jE(t,e){const n=F5(t.x,e.x),r=F5(t.y,e.y);return Math.sqrt(n**2+r**2)}class yf{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Z0(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=jE(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:y}=d,{timestamp:v}=$e;this.history.push({...y,timestamp:v});const{onStart:w,onMove:g}=this.handlers;f||(w&&w(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=J0(f,this.transformPagePoint),ve.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:y,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Z0(d.type==="pointercancel"?this.lastMoveEventInfo:J0(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,w),y&&y(d,w)},!R4(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=ma(e),a=J0(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=$e;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Z0(a,this.history)),this.removeListeners=ha(go(this.contextWindow,"pointermove",this.handlePointerMove),go(this.contextWindow,"pointerup",this.handlePointerUp),go(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),wr(this.updatePoint)}}function J0(t,e){return e?{point:e(t.point)}:t}function V5(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Z0({point:t},e){return{point:t,delta:V5(t,vf(e)),offset:V5(t,$E(e)),velocity:WE(e,.1)}}function $E(t){return t[0]}function vf(t){return t[t.length-1]}function WE(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=vf(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>mn(e)));)n--;if(!r)return{x:0,y:0};const s=gn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function HE(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?ge(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?ge(n,t,r.max):Math.min(t,n)),t}function U5(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function KE(t,{top:e,left:n,bottom:r,right:i}){return{x:U5(t.x,n,i),y:U5(t.y,e,r)}}function B5(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function GE(t,e){return{x:B5(t.x,e.x),y:B5(t.y,e.y)}}function qE(t,e){let n=.5;const r=nt(t),i=nt(e);return i>r?n=$o(e.min,e.max-r,t.min):r>i&&(n=$o(t.min,t.max-i,e.min)),Fn(0,1,n)}function YE(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ou=.35;function QE(t=Ou){return t===!1?t=0:t===!0&&(t=Ou),{x:z5(t,"left","right"),y:z5(t,"top","bottom")}}function z5(t,e,n){return{min:j5(t,e),max:j5(t,n)}}function j5(t,e){return typeof t=="number"?t:t[e]||0}const XE=new WeakMap;class JE{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=xe(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ma(u).point)},s=(u,d)=>{const{drag:f,dragPropagation:p,onDragStart:y}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dw(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Dt(w=>{let g=this.getAxisMotionValue(w).get()||0;if(Cn.test(g)){const{projection:m}=this.visualElement;if(m&&m.layout){const C=m.layout.layoutBox[w];C&&(g=nt(C)*(parseFloat(g)/100))}}this.originPoint[w]=g}),y&&ve.postRender(()=>y(u,d)),Ru(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:y,onDrag:v}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:w}=d;if(p&&this.currentDirection===null){this.currentDirection=ZE(w),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,w),this.updateAxis("y",d.point,w),this.visualElement.render(),v&&v(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Dt(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)==null?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new yf(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Cf(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&ve.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!Xa(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=HE(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;e&&Li(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=KE(r.layoutBox,e):this.constraints=!1,this.elastic=QE(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Dt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=YE(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Li(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=zE(r,i.root,this.visualElement.getTransformPagePoint());let o=GE(i.layout.layoutBox,s);if(n){const a=n(NE(o));this.hasMutatedConstraints=!!a,a&&(o=df(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Dt(u=>{if(!Xa(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=i?200:1e6,p=i?40:1e7,y={type:"inertia",velocity:r?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,y)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Ru(this.visualElement,e),r.start(z4(e,r,0,n,this.visualElement,!1))}stopAnimation(){Dt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Dt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Dt(n=>{const{drag:r}=this.getProps();if(!Xa(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-ge(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Li(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Dt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=qE({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Dt(o=>{if(!Xa(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ge(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;XE.set(this.visualElement,this);const e=this.visualElement.current,n=go(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Li(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ve.read(r);const o=Yo(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Dt(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Ou,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Xa(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function ZE(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class eS extends Rr{constructor(e){super(e),this.removeGroupControls=jt,this.removeListeners=jt,this.controls=new JE(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||jt}unmount(){this.removeGroupControls(),this.removeListeners()}}const $5=t=>(e,n)=>{t&&ve.postRender(()=>t(e,n))};class tS extends Rr{constructor(){super(...arguments),this.removePointerDownListener=jt}onPointerDown(e){this.session=new yf(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Cf(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:$5(e),onStart:$5(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ve.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=go(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const y1={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function W5(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const $s={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if($.test(t))t=parseFloat(t);else return t;const n=W5(t,e.target.x),r=W5(t,e.target.y);return`${n}% ${r}%`}},nS={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Er.parse(t);if(i.length>5)return r;const s=Er.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=ge(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class rS extends _.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;zw(iS),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),y1.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ve.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),b4.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function _f(t){const[e,n]=Kh(),r=_.useContext(a4);return h(rS,{...t,layoutGroup:r,switchLayoutGroup:_.useContext(Xh),isPresent:e,safeToRemove:n})}const iS={borderRadius:{...$s,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:$s,borderTopRightRadius:$s,borderBottomLeftRadius:$s,borderBottomRightRadius:$s,boxShadow:nS};function sS(t,e,n){const r=Xe(t)?t:hs(t);return r.start(z4("",r,e,n)),r.animation}const oS=(t,e)=>t.depth-e.depth;class aS{constructor(){this.children=[],this.isDirty=!1}add(e){u4(this.children,e),this.isDirty=!0}remove(e){d4(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(oS),this.isDirty=!1,this.children.forEach(e)}}function lS(t,e){const n=ft.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(wr(r),t(s-e))};return ve.setup(r,!0),()=>wr(r)}const wf=["TopLeft","TopRight","BottomLeft","BottomRight"],cS=wf.length,H5=t=>typeof t=="string"?parseFloat(t):t,K5=t=>typeof t=="number"||$.test(t);function uS(t,e,n,r,i,s){i?(t.opacity=ge(0,n.opacity??1,dS(r)),t.opacityExit=ge(e.opacity??1,0,hS(r))):s&&(t.opacity=ge(e.opacity??1,n.opacity??1,r));for(let o=0;o<cS;o++){const a=`border${wf[o]}Radius`;let l=G5(e,a),c=G5(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||K5(l)===K5(c)?(t[a]=Math.max(ge(H5(l),H5(c),r),0),(Cn.test(c)||Cn.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ge(e.rotate||0,n.rotate||0,r))}function G5(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const dS=Ef(0,.5,fh),hS=Ef(.5,.95,jt);function Ef(t,e,n){return r=>r<t?0:r>e?1:n($o(t,e,r))}function q5(t,e){t.min=e.min,t.max=e.max}function Mt(t,e){q5(t.x,e.x),q5(t.y,e.y)}function Y5(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Q5(t,e,n,r,i){return t-=e,t=nl(t,1/n,r),i!==void 0&&(t=nl(t,1/i,r)),t}function fS(t,e=0,n=1,r=.5,i,s=t,o=t){if(Cn.test(e)&&(e=parseFloat(e),e=ge(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ge(s.min,s.max,r);t===s&&(a-=e),t.min=Q5(t.min,e,n,a,i),t.max=Q5(t.max,e,n,a,i)}function X5(t,e,[n,r,i],s,o){fS(t,e[n],e[r],e[i],e.scale,s,o)}const pS=["x","scaleX","originX"],mS=["y","scaleY","originY"];function J5(t,e,n,r){X5(t.x,e,pS,n?n.x:void 0,r?r.x:void 0),X5(t.y,e,mS,n?n.y:void 0,r?r.y:void 0)}function Z5(t){return t.translate===0&&t.scale===1}function Sf(t){return Z5(t.x)&&Z5(t.y)}function e8(t,e){return t.min===e.min&&t.max===e.max}function gS(t,e){return e8(t.x,e.x)&&e8(t.y,e.y)}function t8(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Tf(t,e){return t8(t.x,e.x)&&t8(t.y,e.y)}function n8(t){return nt(t.x)/nt(t.y)}function r8(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class CS{constructor(){this.members=[]}add(e){u4(this.members,e),e.scheduleRender()}remove(e){if(d4(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yS(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:y}=n;c&&(r=`perspective(${c}px) ${r}`),u&&(r+=`rotate(${u}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),p&&(r+=`skewX(${p}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const ec=["","X","Y","Z"],vS={visibility:"hidden"},_S=1e3;let wS=0;function tc(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function xf(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=af(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ve,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&xf(r)}function kf({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=wS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(TS),this.nodes.forEach(AS),this.nodes.forEach(bS),this.nodes.forEach(xS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new aS)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new p4),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Hh(o)&&!Cw(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,u&&u(),u=lS(d,250),y1.hasAnimatedSinceResize&&(y1.hasAnimatedSinceResize=!1,this.nodes.forEach(s8))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||OS,{onLayoutAnimationStart:v,onLayoutAnimationComplete:w}=c.getProps(),g=!this.targetLayout||!Tf(this.targetLayout,p),m=!d&&f;if(this.options.layoutRoot||this.resumeFrom||m||d&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...P4(y,"layout"),onPlay:v,onComplete:w};(c.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(u,m)}else d||s8(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),wr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RS),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&xf(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(i8);return}this.isUpdating||this.nodes.forEach(IS),this.isUpdating=!1,this.nodes.forEach(PS),this.nodes.forEach(ES),this.nodes.forEach(SS),this.clearAllSnapshots();const a=ft.now();$e.delta=Fn(0,1e3/60,a-$e.timestamp),$e.timestamp=a,$e.isProcessing=!0,H0.update.process($e),H0.preRender.process($e),H0.render.process($e),$e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,b4.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(kS),this.sharedNodes.forEach(NS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!nt(this.snapshot.measuredBox.x)&&!nt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=xe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Sf(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Ur(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),LS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return xe();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(FS))){const{scroll:u}=this.root;u&&(Vi(a.x,u.offset.x),Vi(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=xe();if(Mt(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Mt(a,o),Vi(a.x,d.offset.x),Vi(a.y,d.offset.y))}return a}applyTransform(o,a=!1){const l=xe();Mt(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ui(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Ur(u.latestValues)&&Ui(l,u.latestValues)}return Ur(this.latestValues)&&Ui(l,this.latestValues),l}removeTransform(o){const a=xe();Mt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ur(c.latestValues))continue;Mu(c.latestValues)&&c.updateSnapshot();const u=xe(),d=c.measurePageBox();Mt(u,d),J5(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Ur(this.latestValues)&&J5(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var f;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!(!this.layout||!(u||d))){if(this.resolvedRelativeTargetAt=$e.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xe(),this.relativeTargetOrigin=xe(),yo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Mt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=xe(),this.targetWithTransforms=xe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),UE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Mt(this.target,this.layout.layoutBox),mf(this.target,this.targetDelta)):Mt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xe(),this.relativeTargetOrigin=xe(),yo(this.relativeTargetOrigin,this.target,p.target),Mt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Mu(this.parent.latestValues)||pf(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var y;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===$e.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Mt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;BE(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=xe());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Y5(this.prevProjectionDelta.x,this.projectionDelta.x),Y5(this.prevProjectionDelta.y,this.projectionDelta.y)),Co(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!r8(this.projectionDelta.x,this.prevProjectionDelta.x)||!r8(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Fi(),this.projectionDelta=Fi(),this.projectionDeltaWithTransform=Fi()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Fi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=xe(),p=l?l.source:void 0,y=this.layout?this.layout.source:void 0,v=p!==y,w=this.getStack(),g=!w||w.members.length<=1,m=!!(v&&!g&&this.options.crossfade===!0&&!this.path.some(DS));this.animationProgress=0;let C;this.mixTargetDelta=E=>{const S=E/1e3;o8(d.x,o.x,S),o8(d.y,o.y,S),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(yo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),MS(this.relativeTarget,this.relativeTargetOrigin,f,S),C&&gS(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=xe()),Mt(C,this.relativeTarget)),v&&(this.animationValues=u,uS(u,c,this.latestValues,S,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(wr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ve.update(()=>{y1.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=hs(0)),this.currentAnimation=sS(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_S),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&If(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||xe();const d=nt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=nt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Mt(a,l),Ui(a,u),Co(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new CS),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&tc("z",o,c,this.animationValues);for(let u=0;u<ec.length;u++)tc(`rotate${ec[u]}`,o,c,this.animationValues),tc(`skew${ec[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){if(!this.instance||this.isSVG)return;if(!this.isVisible)return vS;const a={visibility:""},l=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,a.opacity="",a.pointerEvents=C1(o==null?void 0:o.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none",a;const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=C1(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ur(this.latestValues)&&(p.transform=l?l({},""):"none",this.hasProjected=!1),p}const u=c.animationValues||c.latestValues;this.applyTransformsToTarget(),a.transform=yS(this.projectionDeltaWithTransform,this.treeScale,u),l&&(a.transform=l(u,a.transform));const{x:d,y:f}=this.projectionDelta;a.transformOrigin=`${d.origin*100}% ${f.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const p in Go){if(u[p]===void 0)continue;const{correct:y,applyTo:v,isCSSVariable:w}=Go[p],g=a.transform==="none"?u[p]:y(u[p],c);if(v){const m=v.length;for(let C=0;C<m;C++)a[v[C]]=g}else w?this.options.visualElement.renderState.vars[p]=g:a[p]=g}return this.options.layoutId&&(a.pointerEvents=c===this?C1(o==null?void 0:o.pointerEvents)||"":"none"),a}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(i8),this.root.sharedNodes.clear()}}}function ES(t){t.updateLayout()}function SS(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?Dt(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=nt(f);f.min=r[d].min,f.max=f.min+p}):If(s,e.layoutBox,r)&&Dt(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=nt(r[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Fi();Co(a,r,e.layoutBox);const l=Fi();o?Co(l,t.applyTransform(i,!0),e.measuredBox):Co(l,r,e.layoutBox);const c=!Sf(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const y=xe();yo(y,e.layoutBox,f.layoutBox);const v=xe();yo(v,r,p.layoutBox),Tf(y,v)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=v,t.relativeTargetOrigin=y,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function TS(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function xS(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function kS(t){t.clearSnapshot()}function i8(t){t.clearMeasurements()}function IS(t){t.isLayoutDirty=!1}function PS(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function s8(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function AS(t){t.resolveTargetDelta()}function bS(t){t.calcProjection()}function RS(t){t.resetSkewAndRotation()}function NS(t){t.removeLeadSnapshot()}function o8(t,e,n){t.translate=ge(e.translate,0,n),t.scale=ge(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function a8(t,e,n,r){t.min=ge(e.min,n.min,r),t.max=ge(e.max,n.max,r)}function MS(t,e,n,r){a8(t.x,e.x,n.x,r),a8(t.y,e.y,n.y,r)}function DS(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const OS={duration:.45,ease:[.4,0,.1,1]},l8=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),c8=l8("applewebkit/")&&!l8("chrome/")?Math.round:jt;function u8(t){t.min=c8(t.min),t.max=c8(t.max)}function LS(t){u8(t.x),u8(t.y)}function If(t,e,n){return t==="position"||t==="preserve-aspect"&&!VE(n8(e),n8(n),.2)}function FS(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const VS=kf({attachResizeListener:(t,e)=>Yo(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nc={current:void 0},Pf=kf({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!nc.current){const t=new VS({});t.mount(window),t.setOptions({layoutScroll:!0}),nc.current=t}return nc.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),US={pan:{Feature:tS},drag:{Feature:eS,ProjectionNode:Pf,MeasureLayout:_f}};function d8(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&ve.postRender(()=>s(e,ma(e)))}class BS extends Rr{mount(){const{current:e}=this.node;e&&(this.unmount=hw(e,(n,r)=>(d8(this.node,r,"Start"),i=>d8(this.node,i,"End"))))}unmount(){}}class zS extends Rr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ha(Yo(this.node.current,"focus",()=>this.onFocus()),Yo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function h8(t,e,n){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&ve.postRender(()=>s(e,ma(e)))}class jS extends Rr{mount(){const{current:e}=this.node;e&&(this.unmount=gw(e,(n,r)=>(h8(this.node,r,"Start"),(i,{success:s})=>h8(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Lu=new WeakMap,rc=new WeakMap,$S=t=>{const e=Lu.get(t.target);e&&e(t)},WS=t=>{t.forEach($S)};function HS({root:t,...e}){const n=t||document;rc.has(n)||rc.set(n,{});const r=rc.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(WS,{root:t,...e})),r[i]}function KS(t,e,n){const r=HS(e);return Lu.set(t,n),r.observe(t),()=>{Lu.delete(t),r.unobserve(t)}}const GS={some:0,all:1};class qS extends Rr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:GS[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return KS(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(YS(e,n))&&this.startObserver()}unmount(){}}function YS({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const QS={inView:{Feature:qS},tap:{Feature:jS},focus:{Feature:zS},hover:{Feature:BS}},XS={layout:{ProjectionNode:Pf,MeasureLayout:_f}},Fu={current:null},Af={current:!1};function JS(){if(Af.current=!0,!!c4)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Fu.current=t.matches;t.addListener(e),e()}else Fu.current=!1}const ZS=new WeakMap;function eT(t,e,n){for(const r in e){const i=e[r],s=n[r];if(Xe(i))t.addValue(r,i);else if(Xe(s))t.addValue(r,hs(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,hs(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const f8=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class tT{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=k4,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=ft.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,ve.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Ql(n),this.isVariantNode=Yh(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const p=d[f];l[f]!==void 0&&Xe(p)&&p.set(l[f],!1)}}mount(e){this.current=e,ZS.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Af.current||JS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Fu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),wr(this.notifyUpdate),wr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=xs.has(e);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ve.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in fs){const n=fs[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):xe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<f8.length;r++){const i=f8[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=eT(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=hs(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(rh(r)||sh(r))?r=parseFloat(r):!vw(r)&&Er.test(n)&&(r=Bh(e,n)),this.setBaseTarget(e,Xe(r)?r.get():r)),Xe(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=U4(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[e])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!Xe(i)?i:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new p4),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class bf extends tT{constructor(){super(...arguments),this.KeyframeResolver=aw}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Xe(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Rf(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}function nT(t){return window.getComputedStyle(t)}class rT extends bf{constructor(){super(...arguments),this.type="html",this.renderInstance=Rf}readValueFromInstance(e,n){var r;if(xs.has(n))return(r=this.projection)!=null&&r.isProjecting?Tu(n):k_(e,n);{const i=nT(e),s=(C4(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return gf(e,n)}build(e,n,r){L4(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return B4(e,n,r)}}const Nf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function iT(t,e,n,r){Rf(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(Nf.has(i)?i:O4(i),e.attrs[i])}class sT extends bf{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=xe}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(xs.has(n)){const r=Uh(n);return r&&r.default||0}return n=Nf.has(n)?n:O4(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return of(e,n,r)}build(e,n,r){tf(e,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,n,r,i){iT(e,n,r,i)}mount(e){this.isSVGTag=rf(e.tagName),super.mount(e)}}const oT=(t,e)=>V4(t)?new sT(e):new rT(e,{allowProjection:t!==_.Fragment}),aT=iE({...bE,...QS,...US,...XS},oT),lT=Aw(aT),cT=()=>I("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",viewBox:"0 0 1440 980",className:"w-full h-full block max-w-5xl",preserveAspectRatio:"xMidYMax meet",children:[h("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M1056.000000,1025.000000 
	C704.362854,1025.000000 352.725739,1025.000000 1.044301,1025.000000 
	C1.044301,683.724854 1.044301,342.449738 1.044301,1.087300 
	C512.898804,1.087300 1024.797607,1.087300 1536.848145,1.087300 
	C1536.848145,342.333282 1536.848145,683.666626 1536.848145,1025.000000 
	C1475.228882,1025.000000 1413.567993,1025.000000 1351.319336,1024.688965 
	C1341.689453,1013.635803 1332.680420,1002.865906 1323.598511,992.157898 
	C1307.285645,972.924255 1290.481201,954.085327 1274.747559,934.390198 
	C1264.219971,921.211792 1254.718872,907.139282 1245.611938,892.920166 
	C1235.596191,877.282227 1236.850952,858.478394 1232.734253,841.168457 
	C1231.895142,837.640198 1231.340210,834.030151 1230.877563,830.429077 
	C1229.400269,818.928894 1228.309448,807.372009 1226.546143,795.917542 
	C1224.172485,780.497986 1221.304077,765.154785 1218.661133,749.776611 
	C1214.844604,727.570007 1211.234009,705.325806 1207.168579,683.164917 
	C1203.879028,665.233032 1197.386230,648.149658 1188.276001,632.596985 
	C1178.339600,615.634155 1166.431396,599.790955 1154.855957,583.841858 
	C1150.414307,577.721802 1144.499512,572.674805 1139.289795,567.107239 
	C1132.387329,559.730774 1125.659912,552.184265 1118.598633,544.963928 
	C1109.567505,535.729309 1100.279297,526.746216 1091.100586,517.656006 
	C1084.623291,511.241119 1078.256226,504.709595 1071.635132,498.446808 
	C1064.541504,491.737213 1057.208008,485.281433 1049.919434,478.364258 
	C1049.628540,477.391144 1049.188721,476.765747 1049.197266,476.146606 
	C1049.355225,464.790405 1049.724365,453.434937 1049.721191,442.079346 
	C1049.718262,431.351624 1049.186279,420.624298 1049.163818,409.896210 
	C1049.142700,399.836639 1049.643433,389.775970 1049.622070,379.716400 
	C1049.599854,369.240997 1049.054932,358.766388 1049.054443,348.291412 
	C1049.053955,336.559570 1049.530151,324.828156 1049.572144,313.095764 
	C1049.611206,302.190430 1049.225830,291.283691 1049.257080,280.378235 
	C1049.293457,267.668243 1049.700806,254.959198 1049.727295,242.249268 
	C1049.764893,224.190536 1049.574097,206.131439 1049.536865,188.072372 
	C1049.519531,179.627899 1049.653931,171.183197 1049.681396,162.738495 
	C1049.704346,155.675125 1050.025513,148.588333 1049.563232,141.554733 
	C1049.112061,134.691498 1047.835205,127.882545 1046.820801,120.717537 
	C1043.439087,113.989883 1037.627319,110.490936 1031.109253,109.324326 
	C1024.057495,108.062180 1016.705078,108.237190 1009.482910,108.223236 
	C997.234131,108.199577 984.985046,108.621330 972.735291,108.669968 
	C956.551147,108.734230 940.366211,108.578865 924.181702,108.595985 
	C913.809753,108.606949 903.437073,108.882828 893.066406,108.806808 
	C885.236267,108.749420 877.407837,108.081482 869.580505,108.115814 
	C857.232544,108.169960 844.886597,108.770103 832.539001,108.797791 
	C819.225891,108.827644 805.912354,108.348801 792.598206,108.297981 
	C767.073669,108.200546 741.548279,108.166687 716.023804,108.270363 
	C702.651306,108.324677 689.280945,108.811607 675.908081,108.926750 
	C670.975098,108.969223 666.031006,108.214027 661.103699,108.328423 
	C647.840576,108.636368 634.581787,109.643898 621.324829,109.584503 
	C603.468018,109.504486 585.617126,108.517578 567.758728,108.236961 
	C553.335876,108.010330 538.904968,108.182732 524.478760,108.306870 
	C509.282562,108.437622 494.088287,108.840286 478.892181,108.910469 
	C455.307098,109.019402 431.720886,108.886856 408.135681,108.980515 
	C398.103790,109.020363 390.409363,115.526131 388.595184,125.227097 
	C388.335846,151.348984 388.336304,177.140350 388.283081,203.317932 
	C388.178314,205.791061 388.127319,207.877930 388.059204,210.435516 
	C388.048828,216.610260 388.055573,222.314301 387.877563,228.178116 
	C387.841492,228.877563 387.990143,229.417252 388.111053,230.427429 
	C388.160980,245.526169 388.355713,260.154938 388.291351,274.782562 
	C388.166382,303.200470 387.786682,331.617493 387.720520,360.035339 
	C387.668304,382.465057 387.976868,404.895416 388.035675,427.325714 
	C388.102905,452.968628 387.842438,478.615448 388.250641,504.252197 
	C388.347107,510.309357 387.785980,517.446411 394.891418,521.061279 
	C394.900177,521.001404 394.862579,521.120422 394.832214,521.452637 
	C395.548126,522.451904 396.294373,523.119019 397.217834,524.108032 
	C402.784302,525.648865 408.148376,527.763611 413.567535,527.915771 
	C428.684509,528.340088 443.824249,527.897400 458.955017,527.893311 
	C499.254120,527.882324 539.553223,527.922852 579.852356,527.940735 
	C587.827209,527.944275 595.802002,527.935059 603.776855,527.937561 
	C627.832703,527.945129 651.888489,527.955078 675.944336,527.965149 
	C686.226074,527.969421 696.509583,528.089355 706.788940,527.936401 
	C712.190369,527.856018 717.584717,527.300293 723.388184,526.960083 
	C724.875244,526.931824 725.956360,526.902649 727.184937,527.071777 
	C727.868958,527.118774 728.405640,526.967407 729.413757,526.842102 
	C746.999207,526.882446 764.113281,526.915405 781.227295,526.906494 
	C808.803894,526.892212 836.380493,526.850220 864.365845,526.922058 
	C873.918396,527.515076 883.062317,528.005920 892.424255,528.796265 
	C894.225525,532.894836 895.594666,536.801208 897.431824,540.473328 
	C903.108398,551.819702 908.844727,563.140015 914.800537,574.341370 
	C917.647095,579.695007 921.041504,584.757324 924.147461,590.332825 
	C919.386414,590.782227 914.665833,590.895813 909.944946,590.907288 
	C903.839233,590.922119 897.859314,591.368225 892.514648,595.298340 
	C892.337830,595.440796 892.135315,595.847290 891.830566,595.772766 
	C890.311523,596.731079 889.097168,597.763916 887.644287,598.875977 
	C887.271484,599.055603 887.137329,599.156067 886.720459,599.270874 
	C885.932434,599.808777 885.427002,600.332275 884.693970,600.922363 
	C884.166016,601.145447 883.975952,601.388245 883.597534,601.876465 
	C881.884399,604.029236 880.469971,606.022888 878.763184,608.186584 
	C875.937866,614.217224 873.404907,620.077881 870.614380,626.182617 
	C868.906616,636.338501 867.235840,646.225281 866.113586,656.173950 
	C865.656311,660.227051 866.166077,664.440918 866.651123,668.532349 
	C867.042114,671.830872 865.535278,673.157593 862.802673,674.438354 
	C858.060974,676.660645 853.546570,679.368042 848.604492,681.962524 
	C843.932678,686.347229 838.151367,689.903259 835.508301,695.065979 
	C825.103821,715.388672 820.352417,736.560364 830.274292,758.770996 
	C830.752441,759.841370 830.327759,761.591064 829.796753,762.791321 
	C826.373657,770.528992 822.317200,778.021912 819.393372,785.936768 
	C814.717468,798.594421 814.255371,811.966736 818.224670,824.639465 
	C825.729858,848.600952 843.084961,865.360901 861.957703,880.813110 
	C871.289734,888.453613 882.347412,892.418701 893.132080,897.100769 
	C894.635376,897.753357 896.309631,899.005920 896.979309,900.419250 
	C900.519470,907.891174 903.335327,915.730347 907.199219,923.019836 
	C915.196106,938.106201 925.465515,951.808838 938.233948,962.968994 
	C950.038025,973.286499 962.777588,982.599243 977.082764,989.725891 
	C994.969849,998.636963 1013.027466,1006.577393 1032.849365,1010.097473 
	C1042.499146,1011.811096 1051.575195,1014.927795 1056.000000,1025.000000 
z`}),h("path",{fill:"#FECE98",opacity:"1.000000",stroke:"none",d:`
M1325.000000,1025.000000 
	C1243.645752,1025.000000 1162.291504,1025.000000 1080.318604,1024.690430 
	C1076.199585,1019.834290 1072.689697,1015.294678 1069.205566,1010.735535 
	C1068.410034,1009.694702 1067.449585,1008.682922 1066.996460,1007.493408 
	C1064.038086,999.729004 1058.550293,995.655762 1050.202515,994.981628 
	C1035.665649,993.807922 1022.193481,988.276550 1008.721741,983.424927 
	C998.830383,979.862793 989.416382,974.482361 980.521545,968.772156 
	C969.823120,961.904175 959.906250,953.819885 949.634888,946.284119 
	C948.220337,945.246338 946.324097,944.632812 945.314331,943.314636 
	C940.100769,936.508362 934.891663,929.679504 930.094849,922.578857 
	C926.010620,916.532898 922.487793,910.107544 918.135437,902.885742 
	C928.753113,903.265381 937.383606,902.624878 945.607666,897.228821 
	C955.837769,890.516541 962.997559,882.307068 963.783142,869.953308 
	C964.093384,865.074646 966.265747,864.062256 970.152527,863.916504 
	C977.672729,863.634277 984.470337,861.281555 990.085388,856.250183 
	C994.132446,852.623779 997.805420,848.579773 1001.860718,844.505432 
	C1005.590271,861.532837 1016.934143,874.250061 1028.313843,886.407104 
	C1038.520142,897.310608 1050.577515,906.505249 1062.032227,916.201111 
	C1065.298340,918.965820 1069.268799,917.635498 1072.835083,916.045898 
	C1076.072876,914.602722 1077.057495,912.105225 1077.132080,908.513245 
	C1077.263428,902.189880 1073.796143,898.019592 1069.231934,894.971741 
	C1058.170166,887.585083 1048.317627,879.039246 1039.301880,869.196838 
	C1030.106079,859.157715 1022.673584,848.262817 1017.764893,835.635071 
	C1015.759644,830.476562 1013.807556,825.265259 1012.336792,819.938416 
	C1009.971436,811.371521 1008.025635,802.688843 1006.196533,793.815430 
	C1006.490417,790.556274 1006.490417,787.536743 1006.490417,784.449524 
	C1010.069885,784.449524 1013.395203,784.449524 1016.720520,784.449524 
	C1016.923157,783.845886 1017.125793,783.242249 1017.328430,782.638672 
	C1015.407715,781.757202 1013.565186,780.459106 1011.550049,780.080811 
	C1007.309082,779.284790 1004.586914,777.892395 1004.916138,772.735779 
	C1005.539734,762.969055 1005.453430,753.156921 1006.079712,743.390442 
	C1006.472168,737.269409 1007.626221,731.197144 1008.464050,724.911865 
	C1016.206177,728.003174 1017.543518,727.409424 1019.411621,721.122620 
	C1018.244385,719.548035 1017.246460,718.201904 1016.248535,716.855713 
	C1018.030273,715.909363 1019.812012,714.963013 1021.593750,714.016724 
	C1025.000610,707.736328 1024.302002,701.486755 1020.499573,694.501343 
	C1018.868591,695.938293 1017.365479,697.246338 1015.880310,698.574463 
	C1013.091675,701.067993 1011.032471,700.429749 1009.800781,696.946472 
	C1007.618958,690.776367 1005.253967,684.671021 1003.073853,678.828613 
	C1004.322449,677.221619 1005.712646,675.432373 1006.988037,673.790955 
	C1008.035461,675.585510 1009.190491,677.564270 1010.345459,679.543091 
	C1011.015503,678.926331 1011.685608,678.309509 1012.355713,677.692749 
	C1014.036743,674.747498 1015.717773,671.802307 1017.680481,668.363647 
	C1023.221558,671.559692 1022.466187,663.837280 1025.739502,662.256104 
	C1027.609375,663.245728 1029.355469,664.169861 1031.148804,665.118958 
	C1033.621338,659.471619 1031.125244,655.055725 1027.337769,653.659363 
	C1021.282166,651.426758 1020.274719,657.826477 1018.276428,662.983337 
	C1017.058960,660.594788 1016.551208,659.426453 1015.896118,658.347595 
	C1014.328796,655.766602 1008.767029,653.831421 1006.638000,655.385742 
	C1003.326416,657.803345 1007.123474,659.637634 1007.460938,661.778076 
	C1007.857056,664.290527 1009.459351,667.711792 1008.397583,669.092468 
	C1006.877502,671.068909 1003.468018,671.719482 1000.747253,672.549316 
	C1000.126526,672.738525 998.326111,671.374390 998.298279,670.676208 
	C998.250854,669.488953 999.141907,668.244873 999.707397,667.057434 
	C1000.372681,665.660400 1001.960449,663.996704 1001.605286,662.996460 
	C1001.149963,661.713989 999.276794,660.486267 997.797424,660.125916 
	C995.805969,659.640808 993.607361,660.005493 992.746826,660.005493 
	C989.419067,654.130798 986.773376,649.280457 983.903625,644.566528 
	C983.409851,643.755493 981.962646,643.524902 980.974121,643.010315 
	C980.992432,642.994507 980.973022,643.037781 980.982117,642.629639 
	C980.037109,635.378540 976.803833,629.929199 970.943604,625.752258 
	C970.546204,624.997437 970.281372,624.495300 970.271484,623.789062 
	C969.979187,622.735901 969.431885,621.886841 968.659485,620.865723 
	C968.223816,620.174255 968.013245,619.654907 968.102905,618.906921 
	C970.117432,614.129944 966.773560,613.752502 963.558472,612.897644 
	C962.869324,611.854736 962.408875,610.994568 961.965576,609.735596 
	C961.364868,604.645691 959.031494,601.173035 954.537720,598.993591 
	C954.147034,598.677795 954.008179,598.434509 953.957520,597.761230 
	C953.304626,595.734314 952.730835,594.049011 951.945435,592.468872 
	C950.715759,589.994751 948.261536,587.596191 948.251160,585.157532 
	C948.228149,579.735474 945.233765,578.484375 940.942078,578.056396 
	C940.962463,578.043884 940.931030,578.056946 940.954590,577.651123 
	C940.985474,576.163574 940.992737,575.081787 941.313477,573.861450 
	C943.616516,572.479614 946.330261,571.919556 947.880676,571.036926 
	C954.163330,567.460083 961.868652,571.145752 967.618408,566.402039 
	C968.079102,566.021973 969.454468,566.557068 970.317444,566.891968 
	C973.781067,568.235779 983.894714,565.571899 985.828491,562.524475 
	C986.405640,561.615051 986.173340,560.192017 986.311951,559.004272 
	C985.128235,558.937683 983.940857,558.909180 982.761719,558.795044 
	C981.260437,558.649658 979.765869,558.434875 978.268311,558.250061 
	C978.836975,556.551147 979.186523,554.730713 980.040588,553.190063 
	C980.786499,551.844177 982.524719,550.983337 983.076172,549.608154 
	C984.268921,546.634155 984.982056,543.467834 985.988831,540.049194 
	C988.546509,541.008667 991.256226,542.881042 993.180969,538.831299 
	C994.312561,536.450256 996.378967,534.513489 998.094727,532.286377 
	C996.032593,530.899902 993.460022,529.170227 990.684143,527.303894 
	C990.238037,527.967285 989.931946,528.832703 989.320374,529.246948 
	C988.028076,530.122253 985.559082,531.610596 985.351929,531.362427 
	C983.803589,529.507446 981.106262,526.449463 981.702759,525.325806 
	C984.956665,519.195801 980.624329,517.022583 976.958313,513.977783 
	C975.881714,514.843384 975.078735,515.972046 974.089905,516.169434 
	C972.644958,516.457764 970.903687,516.430054 969.613708,515.833862 
	C968.968689,515.535706 969.043945,513.679565 968.793457,512.528076 
	C970.052429,512.258606 971.304077,511.945526 972.572510,511.732697 
	C973.672180,511.548187 975.479675,511.861237 975.794312,511.296753 
	C978.813416,505.879517 984.427063,507.280090 989.344971,506.000854 
	C990.150635,506.003723 990.611389,506.005768 991.099060,506.194275 
	C991.126038,506.380768 991.104248,506.756989 991.073486,507.148376 
	C992.049072,509.012634 993.055542,510.485535 994.042664,511.983704 
	C994.023315,512.008972 994.043335,511.950470 994.029419,512.333923 
	C994.702637,513.792480 995.389709,514.867554 996.061646,515.971313 
	C996.046570,516.000000 996.059875,515.942566 996.045166,516.307495 
	C996.723083,517.435730 997.415771,518.199036 998.328857,519.134399 
	C998.715759,519.830627 998.882263,520.354736 999.036255,521.263794 
	C1000.706055,524.081177 1002.388306,526.513733 1004.051758,528.975464 
	C1004.032898,529.004578 1004.055237,528.943848 1004.040771,529.319580 
	C1006.337830,532.795898 1008.649353,535.896545 1010.999329,539.211792 
	C1011.037842,539.426392 1011.056702,539.862122 1011.041260,540.241943 
	C1012.374390,542.396667 1013.722839,544.171570 1015.053345,545.975586 
	C1015.035339,546.004822 1015.055176,545.943909 1015.040405,546.313232 
	C1016.646484,548.452576 1018.267334,550.222656 1020.033569,552.241333 
	C1020.453430,552.992432 1020.727844,553.494995 1020.826050,554.260864 
	C1020.249939,555.005432 1019.418701,555.790894 1019.512512,555.923828 
	C1022.748413,560.511536 1025.152344,565.931030 1031.043335,567.941528 
	C1031.012451,567.954895 1031.071411,567.943115 1031.051270,568.313232 
	C1034.678833,573.614380 1038.148315,578.692932 1042.052856,583.411560 
	C1043.888306,585.629700 1046.560425,587.155396 1049.000366,589.227783 
	C1049.447754,589.919800 1049.748291,590.378906 1050.130615,591.092590 
	C1050.489258,591.558594 1050.766235,591.770081 1051.019165,591.985107 
	C1050.995239,591.988586 1051.032837,591.957397 1051.025635,592.327515 
	C1052.701660,594.447449 1054.385010,596.197205 1056.049561,597.975830 
	C1056.030762,598.004639 1056.053223,597.944458 1056.040405,598.307129 
	C1056.711060,599.416443 1057.394409,600.163086 1058.073975,600.918457 
	C1058.070068,600.927246 1058.060059,600.930420 1058.198730,601.189819 
	C1058.878296,601.636658 1059.419189,601.824036 1060.271240,602.147827 
	C1062.218628,604.141357 1063.745483,606.110107 1065.508789,607.837585 
	C1076.496460,618.602112 1087.653687,629.196106 1098.527466,640.073730 
	C1109.630005,651.179993 1120.399414,662.619263 1131.489258,673.738708 
	C1133.665894,675.921082 1136.511597,678.465698 1139.278320,678.772461 
	C1142.824707,679.165588 1147.039673,678.230164 1150.162720,676.453857 
	C1153.470825,674.572144 1153.955566,670.706421 1151.565918,667.258667 
	C1149.830811,664.755249 1147.856079,662.417908 1146.222412,659.827271 
	C1145.913696,659.120056 1145.370728,658.592102 1144.631348,657.971924 
	C1144.189819,657.705566 1144.020752,657.475586 1143.923828,656.823486 
	C1142.897827,655.656006 1141.875854,654.854736 1140.656250,653.960938 
	C1140.207886,653.699707 1140.031128,653.473389 1139.921631,652.800171 
	C1139.744873,651.473328 1139.574463,650.535706 1139.426636,649.722961 
	C1146.033081,646.224182 1149.902466,653.028748 1154.989502,653.105225 
	C1157.079834,651.026978 1159.348511,649.727844 1161.714355,648.640381 
	C1164.323608,647.441101 1167.022095,646.436218 1170.577637,644.979553 
	C1171.798096,646.580383 1173.860840,649.286194 1176.061279,652.275024 
	C1176.483276,653.327698 1176.767578,654.097229 1177.038818,655.235107 
	C1177.689209,656.403137 1178.353027,657.202759 1179.031250,658.328857 
	C1179.053101,659.090637 1179.060547,659.526062 1178.827148,660.134155 
	C1179.083008,660.851562 1179.579834,661.396362 1180.062500,661.970581 
	C1180.048462,662.000000 1180.058960,661.941101 1180.043579,662.295532 
	C1180.658569,663.430237 1181.289062,664.210571 1181.970459,665.211182 
	C1182.021484,665.431458 1182.068970,665.881104 1181.927246,666.205383 
	C1182.554688,669.036194 1183.323730,671.542725 1184.248535,674.375122 
	C1186.279053,680.646912 1188.629272,686.491089 1189.930176,692.560120 
	C1192.668579,705.335938 1194.968384,718.210022 1197.239746,731.080566 
	C1199.623047,744.585693 1202.020020,758.097534 1203.936035,771.673462 
	C1205.845581,785.202820 1206.818970,798.866943 1208.829102,812.378784 
	C1211.602783,831.020874 1214.825317,849.600220 1218.143799,868.154968 
	C1219.418579,875.282654 1221.068115,882.406372 1223.332397,889.272827 
	C1224.965942,894.226624 1227.706909,898.860046 1230.294189,903.444336 
	C1234.586426,911.049622 1238.560181,918.939148 1243.732788,925.919922 
	C1252.908081,938.302307 1262.658691,950.280518 1272.571289,962.089722 
	C1288.251587,980.770020 1304.291260,999.148376 1320.100464,1017.721252 
	C1321.984131,1019.934265 1323.378662,1022.563660 1325.000000,1025.000000 
M1052.401123,621.039124 
	C1053.735352,621.281189 1055.069458,621.523315 1056.897339,621.854980 
	C1049.572388,610.538025 1040.796875,610.851379 1037.547607,615.936401 
	C1026.318481,615.543091 1017.495056,621.186340 1007.319397,624.984436 
	C1010.237244,627.682251 1012.233459,630.461304 1014.938354,631.732422 
	C1017.087891,632.742554 1020.544250,632.755005 1022.621948,631.674683 
	C1025.115723,630.377991 1026.509277,627.106384 1028.878784,625.372742 
	C1030.133057,624.455139 1032.790283,624.286560 1034.219360,624.989319 
	C1039.049316,627.364319 1041.864136,626.427124 1042.975952,621.202026 
	C1043.733765,617.641052 1045.579468,617.372681 1048.327271,618.917419 
	C1049.459839,619.554077 1050.541626,620.280762 1052.401123,621.039124 
M1011.753174,685.993103 
	C1015.828735,684.824280 1016.203308,682.892151 1013.005310,679.445374 
	C1011.884583,680.362732 1010.737427,681.253296 1009.644348,682.206055 
	C1006.956360,684.549194 1008.559937,685.414490 1011.753174,685.993103 
z`}),h("path",{fill:"#DAA060",opacity:"1.000000",stroke:"none",d:`
M1005.902527,794.055115 
	C1008.025635,802.688843 1009.971436,811.371521 1012.336792,819.938416 
	C1013.807556,825.265259 1015.759644,830.476562 1017.764893,835.635071 
	C1022.673584,848.262817 1030.106079,859.157715 1039.301880,869.196838 
	C1048.317627,879.039246 1058.170166,887.585083 1069.231934,894.971741 
	C1073.796143,898.019592 1077.263428,902.189880 1077.132080,908.513245 
	C1077.057495,912.105225 1076.072876,914.602722 1072.835083,916.045898 
	C1069.268799,917.635498 1065.298340,918.965820 1062.032227,916.201111 
	C1050.577515,906.505249 1038.520142,897.310608 1028.313843,886.407104 
	C1016.934143,874.250061 1005.590271,861.532837 1001.860718,844.505432 
	C997.805420,848.579773 994.132446,852.623779 990.085388,856.250183 
	C984.470337,861.281555 977.672729,863.634277 970.152527,863.916504 
	C966.265747,864.062256 964.093384,865.074646 963.783142,869.953308 
	C962.997559,882.307068 955.837769,890.516541 945.607666,897.228821 
	C937.383606,902.624878 928.753113,903.265381 918.135437,902.885742 
	C922.487793,910.107544 926.010620,916.532898 930.094849,922.578857 
	C934.891663,929.679504 940.100769,936.508362 945.314331,943.314636 
	C946.324097,944.632812 948.220337,945.246338 949.634888,946.284119 
	C959.906250,953.819885 969.823120,961.904175 980.521545,968.772156 
	C989.416382,974.482361 998.830383,979.862793 1008.721741,983.424927 
	C1022.193481,988.276550 1035.665649,993.807922 1050.202515,994.981628 
	C1058.550293,995.655762 1064.038086,999.729004 1066.996460,1007.493408 
	C1067.449585,1008.682922 1068.410034,1009.694702 1069.205566,1010.735535 
	C1072.689697,1015.294678 1076.199585,1019.834290 1079.850098,1024.690430 
	C1072.312378,1025.000000 1064.624878,1025.000000 1056.468628,1025.000000 
	C1051.575195,1014.927795 1042.499146,1011.811096 1032.849365,1010.097473 
	C1013.027466,1006.577393 994.969849,998.636963 977.082764,989.725891 
	C962.777588,982.599243 950.038025,973.286499 938.233948,962.968994 
	C925.465515,951.808838 915.196106,938.106201 907.199219,923.019836 
	C903.335327,915.730347 900.519470,907.891174 896.979309,900.419250 
	C896.309631,899.005920 894.635376,897.753357 893.132080,897.100769 
	C882.347412,892.418701 871.289734,888.453613 861.957703,880.813110 
	C843.084961,865.360901 825.729858,848.600952 818.224670,824.639465 
	C814.255371,811.966736 814.717468,798.594421 819.393372,785.936768 
	C822.317200,778.021912 826.373657,770.528992 829.796753,762.791321 
	C830.327759,761.591064 830.752441,759.841370 830.274292,758.770996 
	C820.352417,736.560364 825.103821,715.388672 835.508301,695.065979 
	C838.151367,689.903259 843.932678,686.347229 848.812561,682.246765 
	C849.815125,682.585510 850.378052,682.978943 850.724182,682.838440 
	C856.348938,680.555847 861.953552,678.222961 867.537476,675.842163 
	C868.069519,675.615356 868.757324,675.037109 868.823303,674.547791 
	C869.331116,670.784729 875.928101,666.994080 868.757263,663.112732 
	C867.970947,662.687073 867.869507,660.286377 868.059204,658.884094 
	C869.159912,650.743591 870.612854,642.647766 871.570618,634.492676 
	C871.897705,631.707031 871.136108,628.793518 870.872009,625.938477 
	C873.404907,620.077881 875.937866,614.217224 879.102539,608.124023 
	C881.121521,605.833374 882.508850,603.775391 883.896240,601.717407 
	C883.975952,601.388245 884.166016,601.145447 884.867310,601.173950 
	C885.846497,600.658081 886.424805,599.957275 887.003052,599.256470 
	C887.137329,599.156067 887.271484,599.055603 887.819580,599.132690 
	C889.534119,598.155945 890.834717,597.001587 892.135254,595.847290 
	C892.135315,595.847290 892.337830,595.440796 892.825684,595.235962 
	C902.864380,594.672913 912.417542,594.361389 921.963074,593.893738 
	C923.078979,593.839050 924.239075,593.034058 925.170227,592.309143 
	C925.347229,592.171387 924.540588,590.769958 924.187805,589.951599 
	C921.041504,584.757324 917.647095,579.695007 914.800537,574.341370 
	C908.844727,563.140015 903.108398,551.819702 897.431824,540.473328 
	C895.594666,536.801208 894.225525,532.894836 892.323059,528.482544 
	C890.094421,523.532043 888.185059,519.194702 886.212646,514.561890 
	C885.977356,513.370544 885.804993,512.474731 885.428040,511.188019 
	C883.573242,504.937378 881.479797,499.160919 880.360046,493.201538 
	C877.545837,478.224243 875.334595,463.286041 876.518494,447.795593 
	C877.379517,436.529694 879.592102,425.787567 884.261780,415.843353 
	C889.746094,404.164459 900.207581,398.037354 912.893677,397.091980 
	C921.367737,396.460510 930.456421,397.795837 936.837769,403.634094 
	C945.709534,411.750885 953.425232,421.163300 961.354431,430.266174 
	C965.993896,435.592407 970.161072,441.339203 974.405823,446.997955 
	C979.778381,454.160187 985.384766,461.186005 990.228333,468.697571 
	C999.399658,482.920624 1008.099121,497.447937 1017.019531,512.209290 
	C1020.568970,518.046387 1024.093628,523.523010 1027.842163,529.284790 
	C1032.406982,535.766602 1036.547119,542.117371 1041.150146,548.112793 
	C1045.089600,553.243958 1049.675293,557.873413 1053.766968,562.894348 
	C1059.483154,569.908691 1064.659912,577.390808 1070.689697,584.114868 
	C1080.440796,594.988831 1090.560425,605.543701 1100.784546,615.978577 
	C1109.141724,624.508118 1117.830811,632.715454 1126.466553,640.967590 
	C1130.846802,645.153320 1135.434204,649.122375 1139.927979,653.189453 
	C1140.031128,653.473389 1140.207886,653.699707 1140.739868,654.287476 
	C1141.990112,655.534180 1142.958862,656.361938 1143.927734,657.189636 
	C1144.020752,657.475586 1144.189819,657.705566 1144.701904,658.258606 
	C1145.308594,659.093811 1145.648438,659.550110 1145.988281,660.006470 
	C1147.856079,662.417908 1149.830811,664.755249 1151.565918,667.258667 
	C1153.955566,670.706421 1153.470825,674.572144 1150.162720,676.453857 
	C1147.039673,678.230164 1142.824707,679.165588 1139.278320,678.772461 
	C1136.511597,678.465698 1133.665894,675.921082 1131.489258,673.738708 
	C1120.399414,662.619263 1109.630005,651.179993 1098.527466,640.073730 
	C1087.653687,629.196106 1076.496460,618.602112 1065.508789,607.837585 
	C1063.745483,606.110107 1062.218628,604.141357 1060.123779,601.892944 
	C1059.130005,601.311218 1058.595093,601.120789 1058.060059,600.930420 
	C1058.060059,600.930420 1058.070068,600.927246 1058.066406,600.599487 
	C1057.392822,599.495972 1056.723022,598.720215 1056.053223,597.944458 
	C1056.053223,597.944458 1056.030762,598.004639 1055.988159,597.647217 
	C1054.307983,595.512329 1052.670410,593.734863 1051.032837,591.957397 
	C1051.032837,591.957397 1050.995239,591.988586 1050.920044,591.743652 
	C1050.579468,591.278503 1050.314087,591.058289 1050.048706,590.838074 
	C1049.748291,590.378906 1049.447754,589.919800 1048.881592,588.923828 
	C1042.767578,581.572449 1036.919556,574.757812 1031.071411,567.943115 
	C1031.071411,567.943115 1031.012451,567.954895 1030.986572,567.600098 
	C1027.641235,562.829346 1024.321777,558.413452 1021.002258,553.997498 
	C1020.727844,553.494995 1020.453430,552.992432 1020.019043,551.905701 
	C1018.257812,549.528992 1016.656494,547.736450 1015.055176,545.943909 
	C1015.055176,545.943909 1015.035339,546.004822 1015.004639,545.635864 
	C1013.668213,543.465332 1012.362427,541.663696 1011.056702,539.862122 
	C1011.056702,539.862122 1011.037842,539.426392 1010.964722,538.865112 
	C1008.612732,535.183838 1006.333984,532.063843 1004.055237,528.943848 
	C1004.055237,528.943848 1004.032898,529.004578 1003.997803,528.630066 
	C1002.324707,525.796692 1000.686707,523.337769 999.048767,520.878906 
	C998.882263,520.354736 998.715759,519.830627 998.276245,518.817566 
	C997.355408,517.533264 996.707642,516.737915 996.059875,515.942566 
	C996.059875,515.942566 996.046570,516.000000 996.046143,515.630676 
	C995.378296,514.157776 994.710815,513.054138 994.043335,511.950500 
	C994.043335,511.950470 994.023315,512.008972 993.990967,511.631866 
	C993.007080,509.755524 992.055664,508.256256 991.104248,506.756989 
	C991.104248,506.756989 991.126038,506.380768 991.058472,505.851288 
	C990.023621,504.519836 989.056396,503.717865 988.044556,502.949402 
	C988.000000,502.982880 988.088074,502.907959 988.089172,502.543640 
	C986.412598,499.762512 984.734924,497.345764 983.028137,494.961273 
	C982.999023,494.993530 983.071960,494.946625 983.016724,494.594055 
	C979.329895,488.807373 975.698303,483.373260 972.053650,477.959229 
	C972.040588,477.979309 972.078064,477.933167 972.030762,477.591949 
	C970.696594,475.740021 969.409729,474.229309 968.136414,472.539368 
	C968.149963,472.360168 968.089233,472.005890 968.039673,471.663574 
	C966.684753,469.528168 965.379395,467.735107 964.049561,465.940002 
	C964.025024,465.937988 964.079529,465.923859 964.031494,465.584229 
	C962.014038,462.810516 960.044617,460.376434 958.047668,457.939789 
	C958.020081,457.937195 958.079224,457.922760 958.030151,457.575989 
	C954.430359,452.094360 951.061584,446.820282 947.272156,441.868073 
	C944.149902,437.787659 940.651367,433.971680 937.093689,430.254669 
	C933.784607,426.797455 930.479675,423.211884 926.643066,420.407715 
	C916.085693,412.691254 907.268921,413.781372 900.487854,426.881500 
	C894.966003,437.549164 893.719421,448.776642 894.783569,460.643097 
	C896.808472,483.222412 902.837219,504.616058 912.450562,525.068665 
	C916.780029,534.279602 920.890625,543.604492 925.551941,552.644897 
	C929.324829,559.962280 933.773499,566.931213 937.947388,574.065125 
	C937.972351,574.075500 937.918579,574.085938 937.956909,574.408569 
	C938.973816,575.839722 939.952454,576.948303 940.931030,578.056946 
	C940.931030,578.056946 940.962463,578.043884 940.970093,578.408447 
	C945.299072,585.231995 949.620422,591.690979 953.941711,598.149963 
	C954.008179,598.434509 954.147034,598.677795 954.620300,599.345459 
	C957.237671,603.252258 959.593079,606.693359 961.948364,610.134399 
	C962.408875,610.994568 962.869324,611.854736 963.658691,613.223389 
	C965.259338,615.533081 966.531006,617.334290 967.802734,619.135559 
	C968.013245,619.654907 968.223816,620.174255 968.702881,621.182739 
	C969.319763,622.445618 969.668152,623.219360 970.016541,623.993164 
	C970.281372,624.495300 970.546204,624.997437 970.967651,626.102234 
	C974.407227,632.149170 977.690125,637.593445 980.973022,643.037781 
	C980.973022,643.037781 980.992432,642.994507 981.029602,643.361694 
	C986.018555,653.249268 990.987488,662.760742 995.916016,672.293091 
	C999.327576,678.891418 1002.728394,685.496033 1006.052612,692.138611 
	C1009.992249,700.011108 1007.739380,708.292664 1006.725464,716.179443 
	C1003.908203,738.092957 1001.714050,759.996094 1003.163513,782.096741 
	C1003.427734,786.125427 1004.957153,790.071106 1005.902527,794.055115 
M943.452332,618.124390 
	C941.431641,615.293213 939.612732,612.281921 937.310791,609.701660 
	C936.030090,608.266174 933.882263,606.577026 932.232483,606.682312 
	C926.211609,607.066711 920.257996,608.428162 914.238037,608.918945 
	C905.349060,609.643555 897.558716,611.966736 893.467407,620.840393 
	C888.962585,630.611267 885.242371,640.615845 884.955811,651.556213 
	C884.779358,658.289551 883.779480,665.046143 886.913513,671.533936 
	C891.979736,682.021545 895.291626,693.173828 901.362061,703.385254 
	C912.022034,721.316833 923.933655,738.134460 938.492554,753.004089 
	C948.345764,763.067688 958.497314,772.864014 968.922485,782.331665 
	C973.686035,786.657776 979.431030,789.903137 984.730896,793.638611 
	C985.185547,793.283875 985.640198,792.929077 986.094788,792.574341 
	C985.891357,790.004333 985.703491,787.432983 985.481140,784.864624 
	C985.010315,779.426392 984.130066,773.989746 984.129700,768.552429 
	C984.129089,759.926453 984.539490,751.289124 985.106995,742.678406 
	C985.495239,736.788025 986.613892,730.948669 987.101685,725.061279 
	C987.674194,718.151245 990.082764,710.415955 987.882019,704.443604 
	C982.133545,688.843201 974.818604,673.743530 967.157288,658.946960 
	C960.041260,645.203613 951.671387,632.109497 943.452332,618.124390 
M958.014954,798.448425 
	C951.850403,793.272339 945.356628,788.433899 939.609314,782.829895 
	C933.240601,776.619995 927.414978,769.830078 921.605530,763.075317 
	C914.375061,754.668396 906.768127,746.478577 900.480164,737.394531 
	C892.588684,725.994019 885.979187,713.713318 878.613708,701.939331 
	C871.482422,690.539612 871.695068,687.943298 860.456299,697.680115 
	C847.071899,709.275818 841.193542,724.012878 844.822144,741.260315 
	C847.207947,752.600098 852.337952,763.085022 859.277771,772.834290 
	C872.563538,791.498474 888.700562,807.044006 906.915405,820.706177 
	C918.378418,829.304077 930.208557,836.976257 943.902100,841.781372 
	C953.187256,845.039673 962.391724,846.390686 972.040771,844.917053 
	C979.281433,843.811157 986.465637,835.140503 985.952881,827.805603 
	C985.242554,817.643616 979.111755,811.421265 970.489990,806.880859 
	C966.279663,804.663635 962.502625,801.623657 958.014954,798.448425 
M886.183350,829.198792 
	C883.001770,826.394409 879.641663,823.765686 876.673584,820.751099 
	C869.142517,813.102234 861.598022,805.450317 854.429138,797.467163 
	C849.758667,792.266174 845.736633,786.482849 841.343201,780.856750 
	C835.155518,789.678528 834.112183,799.220581 834.401917,808.279175 
	C834.847595,822.213867 840.932861,834.535767 850.921021,844.371521 
	C857.687500,851.034912 865.315552,856.816040 872.443359,863.121704 
	C883.955811,873.306274 897.839355,879.477661 912.225891,883.202881 
	C927.979858,887.282288 936.990906,884.546326 945.626221,869.984253 
	C947.619568,866.622864 946.995911,863.140198 943.882080,862.129333 
	C932.098816,858.304016 920.438293,854.487793 910.531372,846.435913 
	C903.013550,840.325806 894.753784,835.128540 886.183350,829.198792 
z`}),h("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M1182.068970,665.881104 
	C1182.068970,665.881104 1182.021484,665.431458 1181.962158,664.890747 
	C1181.288208,663.547058 1180.673584,662.744080 1180.058960,661.941101 
	C1180.058960,661.941101 1180.048462,662.000000 1180.041504,661.675171 
	C1179.712402,660.887390 1179.390137,660.424438 1179.067871,659.961487 
	C1179.060547,659.526062 1179.053101,659.090637 1179.016479,658.001892 
	C1178.342163,656.521362 1177.697144,655.694092 1177.052002,654.866821 
	C1176.767578,654.097229 1176.483276,653.327698 1176.092163,651.898499 
	C1173.166748,646.452698 1170.359741,641.659485 1167.526611,636.881836 
	C1163.301392,629.757019 1159.134033,622.595825 1154.774414,615.553955 
	C1153.493164,613.484436 1151.644287,611.766418 1149.953857,609.685547 
	C1149.672852,609.226501 1149.434326,609.048401 1149.071899,608.605530 
	C1147.365234,606.156921 1145.723511,604.052124 1144.092041,601.925293 
	C1144.102417,601.903198 1144.125122,601.859924 1144.074951,601.518188 
	C1141.002319,597.913635 1137.656982,594.891479 1135.014038,591.345886 
	C1124.304199,576.978210 1110.715698,565.347351 1098.421997,552.493652 
	C1088.622559,542.247986 1078.488281,532.319519 1068.398315,522.355835 
	C1062.412231,516.444580 1056.223999,510.737976 1050.052979,504.516602 
	C1049.635132,497.389984 1049.290649,490.686157 1048.964844,483.668854 
	C1049.315430,481.808594 1049.647217,480.261749 1049.979126,478.714935 
	C1057.208008,485.281433 1064.541504,491.737213 1071.635132,498.446808 
	C1078.256226,504.709595 1084.623291,511.241119 1091.100586,517.656006 
	C1100.279297,526.746216 1109.567505,535.729309 1118.598633,544.963928 
	C1125.659912,552.184265 1132.387329,559.730774 1139.289795,567.107239 
	C1144.499512,572.674805 1150.414307,577.721802 1154.855957,583.841858 
	C1166.431396,599.790955 1178.339600,615.634155 1188.276001,632.596985 
	C1197.386230,648.149658 1203.879028,665.233032 1207.168579,683.164917 
	C1211.234009,705.325806 1214.844604,727.570007 1218.661133,749.776611 
	C1221.304077,765.154785 1224.172485,780.497986 1226.546143,795.917542 
	C1228.309448,807.372009 1229.400269,818.928894 1230.877563,830.429077 
	C1231.340210,834.030151 1231.895142,837.640198 1232.734253,841.168457 
	C1236.850952,858.478394 1235.596191,877.282227 1245.611938,892.920166 
	C1254.718872,907.139282 1264.219971,921.211792 1274.747559,934.390198 
	C1290.481201,954.085327 1307.285645,972.924255 1323.598511,992.157898 
	C1332.680420,1002.865906 1341.689453,1013.635803 1350.865723,1024.688965 
	C1342.645752,1025.000000 1334.291504,1025.000000 1325.468628,1025.000000 
	C1323.378662,1022.563660 1321.984131,1019.934265 1320.100464,1017.721252 
	C1304.291260,999.148376 1288.251587,980.770020 1272.571289,962.089722 
	C1262.658691,950.280518 1252.908081,938.302307 1243.732788,925.919922 
	C1238.560181,918.939148 1234.586426,911.049622 1230.294189,903.444336 
	C1227.706909,898.860046 1224.965942,894.226624 1223.332397,889.272827 
	C1221.068115,882.406372 1219.418579,875.282654 1218.143799,868.154968 
	C1214.825317,849.600220 1211.602783,831.020874 1208.829102,812.378784 
	C1206.818970,798.866943 1205.845581,785.202820 1203.936035,771.673462 
	C1202.020020,758.097534 1199.623047,744.585693 1197.239746,731.080566 
	C1194.968384,718.210022 1192.668579,705.335938 1189.930176,692.560120 
	C1188.629272,686.491089 1186.279053,680.646912 1184.259277,673.968140 
	C1183.432617,670.783936 1182.750854,668.332520 1182.068970,665.881104 
z`}),h("path",{fill:"#A4B2BE",opacity:"1.000000",stroke:"none",d:`
M1048.946167,483.982300 
	C1049.290649,490.686157 1049.635132,497.389984 1050.023804,504.939331 
	C1049.997559,518.235901 1038.878784,527.748962 1027.618164,528.999695 
	C1024.093628,523.523010 1020.568970,518.046387 1017.450195,512.300171 
	C1021.928467,511.417725 1026.174805,511.301971 1029.994385,509.966095 
	C1031.704712,509.367859 1033.402954,506.418732 1033.633911,504.370392 
	C1034.177734,499.548492 1033.844238,494.626740 1033.850708,489.745392 
	C1033.866577,477.827972 1033.963745,465.909790 1033.858887,453.993378 
	C1033.755859,442.288239 1033.243530,430.584381 1033.271484,418.880859 
	C1033.311401,402.211487 1033.820801,385.543243 1033.856445,368.873901 
	C1033.877930,358.875946 1033.232178,348.878113 1033.147461,338.878021 
	C1033.008423,322.481323 1032.998291,306.082214 1033.117065,289.685455 
	C1033.152954,284.759369 1033.797974,279.837708 1034.469971,274.875305 
	C1035.186646,273.869629 1035.926758,272.911316 1035.952637,271.934082 
	C1036.086914,266.869904 1035.948730,261.798737 1036.073120,256.734100 
	C1036.301636,247.435730 1036.927124,238.138870 1036.880859,228.843903 
	C1036.806519,213.899094 1036.233887,198.957489 1036.037354,184.012344 
	C1035.889771,172.791245 1036.072144,161.565598 1035.889893,150.345490 
	C1035.872070,149.237259 1034.332520,148.153732 1033.431885,146.602524 
	C1033.242188,141.258392 1033.217163,136.364838 1032.933716,131.486298 
	C1032.856689,130.160965 1032.334351,128.099243 1031.442017,127.717094 
	C1027.809204,126.161446 1023.983521,124.212166 1020.173279,124.085747 
	C1011.587341,123.800896 1002.968811,124.735764 994.362427,124.758301 
	C985.584839,124.781265 976.805969,124.306427 967.854736,123.720894 
	C964.118530,123.103172 960.542297,122.472458 956.995117,122.606972 
	C951.971680,122.797485 946.969666,123.552422 941.563660,124.076576 
	C940.116211,124.063927 939.063660,124.040833 937.817017,123.754700 
	C936.714783,123.713776 935.806641,123.935890 934.581787,124.143585 
	C933.844421,124.088814 933.423706,124.048462 932.921509,123.623871 
	C927.447266,121.623032 921.989624,118.764771 916.639648,124.076683 
	C915.895874,124.078865 915.470886,124.073723 914.761597,123.755020 
	C909.646912,123.634789 904.816406,123.828110 899.673279,124.064987 
	C898.940125,124.121368 898.519592,124.134186 897.878296,123.839111 
	C894.252136,122.690109 890.828125,121.079994 887.445007,121.161911 
	C879.475037,121.354912 871.523560,122.343155 863.566711,123.033272 
	C859.680481,123.370331 855.798828,123.760170 851.506592,124.073601 
	C846.745789,124.035400 842.393433,124.049713 837.798035,123.764458 
	C833.386536,122.849655 828.862915,120.942207 825.144470,121.964226 
	C821.007324,123.101311 817.666565,122.475067 813.874939,121.689972 
	C811.015015,121.097801 807.971619,121.057175 805.037903,121.234764 
	C800.599365,121.503448 796.178162,122.631645 791.762573,122.562462 
	C786.036865,122.472740 780.327209,121.154922 774.604675,121.108810 
	C766.420105,121.042862 758.231445,121.861053 750.042053,121.914024 
	C740.450928,121.976074 730.857117,121.621933 721.264465,121.448372 
	C718.679749,121.401604 716.083008,121.172844 713.512695,121.343559 
	C706.676392,121.797630 699.856323,122.796753 693.020935,122.883995 
	C685.109436,122.984978 677.189880,122.206360 669.270813,122.134247 
	C667.564026,122.118690 665.844666,123.489326 663.753174,124.405945 
	C657.223389,124.510757 651.070740,124.467911 644.920044,124.338196 
	C640.952637,124.254524 636.987915,124.043495 632.992371,123.656815 
	C632.822205,123.169914 632.681702,122.915726 632.541199,122.661545 
	C632.372498,123.047119 632.203735,123.432693 631.787354,123.904121 
	C631.365356,124.001938 631.191040,124.013885 630.753662,123.730339 
	C621.959167,123.034821 613.430298,122.464264 604.894714,122.336349 
	C602.255798,122.296799 599.598938,123.462044 596.561279,124.113106 
	C594.096436,124.291977 592.020447,124.433418 589.937012,124.251968 
	C589.348938,123.357254 588.768311,122.785431 588.187622,122.213608 
	C587.810547,122.997826 587.433472,123.782059 586.626160,124.672180 
	C584.440308,124.698219 582.684570,124.618362 580.867798,124.275558 
	C575.959106,123.399551 571.112244,122.277466 566.263977,122.271545 
	C553.175537,122.255554 540.087280,122.794022 526.997070,122.931953 
	C523.550110,122.968269 520.091614,122.037849 516.646423,122.089195 
	C506.157990,122.245544 495.673798,122.675064 485.187012,122.966423 
	C484.032959,122.998482 482.853485,122.649681 481.719543,122.777412 
	C477.245087,123.281433 472.784088,123.905067 467.918274,124.597015 
	C462.359039,124.493263 457.199646,124.276825 451.755127,123.745468 
	C447.671631,123.282661 443.867432,122.932648 440.076508,123.041931 
	C436.028198,123.158630 431.992371,123.708939 427.491364,124.064743 
	C421.866516,124.052185 416.699463,123.951836 411.536896,124.062431 
	C405.844055,124.184395 403.906891,126.122192 403.898163,131.810211 
	C403.867798,151.620453 403.937500,171.430832 403.941589,191.241150 
	C403.950043,232.192383 404.025452,273.143860 403.909698,314.094757 
	C403.829865,342.339447 403.475464,370.583344 402.915527,399.074280 
	C402.058899,401.691193 401.117523,404.053925 401.074493,406.432953 
	C400.899719,416.093170 400.921692,425.759766 401.097870,435.419922 
	C401.120453,436.658081 402.473969,437.872040 403.199646,439.413452 
	C403.140045,440.148834 403.091705,440.567902 402.642120,441.077362 
	C401.829041,442.158386 401.061371,443.147797 401.057892,444.139862 
	C400.987366,464.091034 400.952759,484.042938 401.121979,503.992920 
	C401.133209,505.319611 402.827576,506.631989 403.835754,508.204163 
	C403.958374,508.636108 403.984314,508.814880 403.758606,509.190002 
	C405.242981,513.741028 409.596588,515.567017 416.178650,514.988037 
	C421.396515,514.529114 426.640594,514.028687 431.867615,514.081482 
	C443.765625,514.201599 455.659637,514.861145 467.556580,514.898315 
	C476.845917,514.927368 486.135162,514.216125 495.428101,514.076355 
	C506.113068,513.915649 516.802002,514.017212 527.489258,514.013672 
	C543.655945,514.008362 559.822571,514.009460 575.989258,514.010132 
	C588.986267,514.010681 601.983215,514.016602 614.980225,514.016541 
	C629.161926,514.016541 643.344482,513.922668 657.525085,514.047241 
	C664.819580,514.111267 672.111938,514.811157 679.403198,514.777893 
	C689.972168,514.729675 700.538330,514.096558 711.107544,514.035522 
	C732.513367,513.911987 753.920471,514.006897 775.327026,514.008301 
	C789.653503,514.009277 803.979980,514.005066 818.306458,514.002075 
	C825.330811,514.000610 832.357788,513.878784 839.378784,514.030396 
	C845.084045,514.153625 850.779846,514.790405 856.484253,514.866333 
	C866.412964,514.998596 876.345032,514.874207 886.275696,514.857361 
	C888.185059,519.194702 890.094421,523.532043 892.104980,528.183105 
	C883.062317,528.005920 873.918396,527.515076 864.272278,526.541931 
	C861.908325,525.705994 860.047119,525.046082 858.184937,525.043518 
	C814.039124,524.982727 769.893188,524.992737 725.747314,524.989746 
	C724.476257,524.989685 723.205139,524.989746 721.559998,524.989746 
	C722.248718,525.943481 722.615540,526.451355 722.982300,526.959229 
	C717.584717,527.300293 712.190369,527.856018 706.788940,527.936401 
	C696.509583,528.089355 686.226074,527.969421 675.944336,527.965149 
	C651.888489,527.955078 627.832703,527.945129 603.776855,527.937561 
	C595.802002,527.935059 587.827209,527.944275 579.852356,527.940735 
	C539.553223,527.922852 499.254120,527.882324 458.955017,527.893311 
	C443.824249,527.897400 428.684509,528.340088 413.567535,527.915771 
	C408.148376,527.763611 402.784302,525.648865 397.189697,523.768555 
	C396.277100,522.444946 395.569824,521.782715 394.862549,521.120422 
	C394.862579,521.120422 394.900177,521.001404 394.898376,520.679932 
	C391.468689,514.029968 389.903900,507.403351 389.916687,500.072937 
	C390.065979,414.453918 390.014404,328.834564 390.015839,243.215317 
	C390.016052,231.176071 390.015900,219.136841 390.015900,206.190155 
	C389.057159,208.056000 388.566742,209.010406 388.076324,209.964813 
	C388.127319,207.877930 388.178314,205.791061 388.648895,203.215027 
	C389.381805,201.515472 389.965668,200.305695 389.968475,199.094574 
	C390.022736,175.724091 390.028229,152.353409 389.959808,128.983002 
	C389.955811,127.619797 389.239716,126.258667 388.854980,124.896568 
	C390.409363,115.526131 398.103790,109.020363 408.135681,108.980515 
	C431.720886,108.886856 455.307098,109.019402 478.892181,108.910469 
	C494.088287,108.840286 509.282562,108.437622 524.478760,108.306870 
	C538.904968,108.182732 553.335876,108.010330 567.758728,108.236961 
	C585.617126,108.517578 603.468018,109.504486 621.324829,109.584503 
	C634.581787,109.643898 647.840576,108.636368 661.103699,108.328423 
	C666.031006,108.214027 670.975098,108.969223 675.908081,108.926750 
	C689.280945,108.811607 702.651306,108.324677 716.023804,108.270363 
	C741.548279,108.166687 767.073669,108.200546 792.598206,108.297981 
	C805.912354,108.348801 819.225891,108.827644 832.539001,108.797791 
	C844.886597,108.770103 857.232544,108.169960 869.580505,108.115814 
	C877.407837,108.081482 885.236267,108.749420 893.066406,108.806808 
	C903.437073,108.882828 913.809753,108.606949 924.181702,108.595985 
	C940.366211,108.578865 956.551147,108.734230 972.735291,108.669968 
	C984.985046,108.621330 997.234131,108.199577 1009.482910,108.223236 
	C1016.705078,108.237190 1024.057495,108.062180 1031.109253,109.324326 
	C1037.627319,110.490936 1043.439087,113.989883 1046.544189,120.983856 
	C1046.579834,125.846672 1046.974731,130.110825 1046.977539,134.375244 
	C1047.017090,194.820908 1047.002319,255.266617 1047.003052,315.712311 
	C1047.003784,369.996857 1046.988892,424.281403 1047.091309,478.565796 
	C1047.094727,480.372467 1048.300659,482.176849 1048.946167,483.982300 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M1048.964844,483.668884 
	C1048.300659,482.176849 1047.094727,480.372467 1047.091309,478.565796 
	C1046.988892,424.281403 1047.003784,369.996857 1047.003052,315.712311 
	C1047.002319,255.266617 1047.017090,194.820908 1046.977539,134.375244 
	C1046.974731,130.110825 1046.579834,125.846672 1046.644043,121.316071 
	C1047.835205,127.882545 1049.112061,134.691498 1049.563232,141.554733 
	C1050.025513,148.588333 1049.704346,155.675125 1049.681396,162.738495 
	C1049.653931,171.183197 1049.519531,179.627899 1049.536865,188.072372 
	C1049.574097,206.131439 1049.764893,224.190536 1049.727295,242.249268 
	C1049.700806,254.959198 1049.293457,267.668243 1049.257080,280.378235 
	C1049.225830,291.283691 1049.611206,302.190430 1049.572144,313.095764 
	C1049.530151,324.828156 1049.053955,336.559570 1049.054443,348.291412 
	C1049.054932,358.766388 1049.599854,369.240997 1049.622070,379.716400 
	C1049.643433,389.775970 1049.142700,399.836639 1049.163818,409.896210 
	C1049.186279,420.624298 1049.718262,431.351624 1049.721191,442.079346 
	C1049.724365,453.434937 1049.355225,464.790405 1049.197266,476.146606 
	C1049.188721,476.765747 1049.628540,477.391144 1049.919434,478.364258 
	C1049.647217,480.261749 1049.315430,481.808594 1048.964844,483.668884 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M388.059204,210.435516 
	C388.566742,209.010406 389.057159,208.056000 390.015900,206.190155 
	C390.015900,219.136841 390.016052,231.176071 390.015839,243.215317 
	C390.014404,328.834564 390.065979,414.453918 389.916687,500.072937 
	C389.903900,507.403351 391.468689,514.029968 394.889618,520.739746 
	C387.785980,517.446411 388.347107,510.309357 388.250641,504.252197 
	C387.842438,478.615448 388.102905,452.968628 388.035675,427.325714 
	C387.976868,404.895416 387.668304,382.465057 387.720520,360.035339 
	C387.786682,331.617493 388.166382,303.200470 388.291351,274.782562 
	C388.355713,260.154938 388.160980,245.526169 388.311890,230.276093 
	C388.381073,229.108963 388.221680,228.563660 388.062286,228.018356 
	C388.055573,222.314301 388.048828,216.610260 388.059204,210.435516 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M723.388184,526.960144 
	C722.615540,526.451355 722.248718,525.943481 721.559998,524.989746 
	C723.205139,524.989746 724.476257,524.989685 725.747314,524.989746 
	C769.893188,524.992737 814.039124,524.982727 858.184937,525.043518 
	C860.047119,525.046082 861.908325,525.705994 863.863525,526.439758 
	C836.380493,526.850220 808.803894,526.892212 781.227295,526.906494 
	C764.113281,526.915405 746.999207,526.882446 729.264282,526.650635 
	C728.108154,526.579956 727.572815,526.726746 727.037537,526.873474 
	C725.956360,526.902649 724.875244,526.931824 723.388184,526.960144 
z`}),h("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M870.614380,626.182617 
	C871.136108,628.793518 871.897705,631.707031 871.570618,634.492676 
	C870.612854,642.647766 869.159912,650.743591 868.059204,658.884094 
	C867.869507,660.286377 867.970947,662.687073 868.757263,663.112732 
	C875.928101,666.994080 869.331116,670.784729 868.823303,674.547791 
	C868.757324,675.037109 868.069519,675.615356 867.537476,675.842163 
	C861.953552,678.222961 856.348938,680.555847 850.724182,682.838440 
	C850.378052,682.978943 849.815125,682.585510 849.145020,682.156311 
	C853.546570,679.368042 858.060974,676.660645 862.802673,674.438354 
	C865.535278,673.157593 867.042114,671.830872 866.651123,668.532349 
	C866.166077,664.440918 865.656311,660.227051 866.113586,656.173950 
	C867.235840,646.225281 868.906616,636.338501 870.614380,626.182617 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M388.595184,125.227097 
	C389.239716,126.258667 389.955811,127.619797 389.959808,128.983002 
	C390.028229,152.353409 390.022736,175.724091 389.968475,199.094574 
	C389.965668,200.305695 389.381805,201.515472 388.702637,202.828796 
	C388.336304,177.140350 388.335846,151.348984 388.595184,125.227097 
z`}),h("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M924.147461,590.332825 
	C924.540588,590.769958 925.347229,592.171387 925.170227,592.309143 
	C924.239075,593.034058 923.078979,593.839050 921.963074,593.893738 
	C912.417542,594.361389 902.864380,594.672913 893.002502,595.093506 
	C897.859314,591.368225 903.839233,590.922119 909.944946,590.907288 
	C914.665833,590.895813 919.386414,590.782227 924.147461,590.332825 
z`}),h("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M883.597534,601.876465 
	C882.508850,603.775391 881.121521,605.833374 879.394836,607.953979 
	C880.469971,606.022888 881.884399,604.029236 883.597534,601.876465 
z`}),h("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M891.830566,595.772705 
	C890.834717,597.001587 889.534119,598.155945 888.058228,599.053467 
	C889.097168,597.763916 890.311523,596.731079 891.830566,595.772705 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M394.832214,521.452637 
	C395.569824,521.782715 396.277100,522.444946 397.012451,523.446655 
	C396.294373,523.119019 395.548126,522.451904 394.832214,521.452637 
z`}),h("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M886.720459,599.270874 
	C886.424805,599.957275 885.846497,600.658081 885.094849,601.107300 
	C885.427002,600.332275 885.932434,599.808777 886.720459,599.270874 
z`}),h("path",{fill:"#A4B2BE",opacity:"1.000000",stroke:"none",d:`
M387.877563,228.178116 
	C388.221680,228.563660 388.381073,229.108963 388.339600,229.805603 
	C387.990143,229.417252 387.841492,228.877563 387.877563,228.178116 
z`}),h("path",{fill:"#A4B2BE",opacity:"1.000000",stroke:"none",d:`
M727.184937,527.071777 
	C727.572815,526.726746 728.108154,526.579956 728.792847,526.624634 
	C728.405640,526.967407 727.868958,527.118774 727.184937,527.071777 
z`}),h("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1027.842163,529.284790 
	C1038.878784,527.748962 1049.997559,518.235901 1050.097412,505.362061 
	C1056.223999,510.737976 1062.412231,516.444580 1068.398315,522.355835 
	C1078.488281,532.319519 1088.622559,542.247986 1098.421997,552.493652 
	C1110.715698,565.347351 1124.304199,576.978210 1135.014038,591.345886 
	C1137.656982,594.891479 1141.002319,597.913635 1143.717285,601.537964 
	C1142.101074,602.052063 1140.792358,602.204651 1139.483521,602.357239 
	C1140.062866,603.420227 1140.561035,604.538635 1141.240723,605.533081 
	C1142.213989,606.957214 1143.289795,608.315247 1144.378662,609.655396 
	C1145.270630,610.753113 1146.245605,611.783508 1147.183716,612.843811 
	C1148.140991,611.858337 1149.098267,610.872803 1150.055542,609.887329 
	C1151.644287,611.766418 1153.493164,613.484436 1154.774414,615.553955 
	C1159.134033,622.595825 1163.301392,629.757019 1167.526611,636.881836 
	C1170.359741,641.659485 1173.166748,646.452698 1175.954590,651.615479 
	C1173.860840,649.286194 1171.798096,646.580383 1170.577637,644.979553 
	C1167.022095,646.436218 1164.323608,647.441101 1161.714355,648.640381 
	C1159.348511,649.727844 1157.079834,651.026978 1154.989502,653.105225 
	C1149.902466,653.028748 1146.033081,646.224182 1139.426636,649.722961 
	C1139.574463,650.535706 1139.744873,651.473328 1139.921631,652.800171 
	C1135.434204,649.122375 1130.846802,645.153320 1126.466553,640.967590 
	C1117.830811,632.715454 1109.141724,624.508118 1100.784546,615.978577 
	C1090.560425,605.543701 1080.440796,594.988831 1070.689697,584.114868 
	C1064.659912,577.390808 1059.483154,569.908691 1053.766968,562.894348 
	C1049.675293,557.873413 1045.089600,553.243958 1041.150146,548.112793 
	C1036.547119,542.117371 1032.406982,535.766602 1027.842163,529.284790 
M1146.585815,627.023438 
	C1142.501465,626.572205 1141.427124,629.364502 1140.471802,632.088989 
	C1143.408447,633.189697 1146.004883,634.162964 1149.761719,635.571167 
	C1148.859619,632.328186 1148.133301,629.717407 1146.585815,627.023438 
z`}),h("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M968.089233,472.005890 
	C968.089233,472.005890 968.149963,472.360168 968.098877,472.934631 
	C969.391296,474.983795 970.734680,476.458466 972.078064,477.933167 
	C972.078064,477.933167 972.040588,477.979309 972.035278,478.336456 
	C973.084656,480.868774 973.871399,483.234467 975.252991,485.177094 
	C977.666565,488.570679 980.445923,491.704132 983.071960,494.946625 
	C983.071960,494.946625 982.999023,494.993530 983.014893,495.361572 
	C984.574707,498.222321 982.369629,503.356323 988.088074,502.907959 
	C988.088074,502.907959 988.000000,502.982880 988.036743,503.278137 
	C988.382385,504.382233 988.691162,505.191132 989.000000,506.000000 
	C984.427063,507.280090 978.813416,505.879517 975.794312,511.296753 
	C975.479675,511.861237 973.672180,511.548187 972.572510,511.732697 
	C971.304077,511.945526 970.052429,512.258606 968.793457,512.528076 
	C969.043945,513.679565 968.968689,515.535706 969.613708,515.833862 
	C970.903687,516.430054 972.644958,516.457764 974.089905,516.169434 
	C975.078735,515.972046 975.881714,514.843384 976.958313,513.977783 
	C980.624329,517.022583 984.956665,519.195801 981.702759,525.325806 
	C981.106262,526.449463 983.803589,529.507446 985.351929,531.362427 
	C985.559082,531.610596 988.028076,530.122253 989.320374,529.246948 
	C989.931946,528.832703 990.238037,527.967285 990.684143,527.303894 
	C993.460022,529.170227 996.032593,530.899902 998.094727,532.286377 
	C996.378967,534.513489 994.312561,536.450256 993.180969,538.831299 
	C991.256226,542.881042 988.546509,541.008667 985.988831,540.049194 
	C984.982056,543.467834 984.268921,546.634155 983.076172,549.608154 
	C982.524719,550.983337 980.786499,551.844177 980.040588,553.190063 
	C979.186523,554.730713 978.836975,556.551147 978.268311,558.250061 
	C979.765869,558.434875 981.260437,558.649658 982.761719,558.795044 
	C983.940857,558.909180 985.128235,558.937683 986.311951,559.004272 
	C986.173340,560.192017 986.405640,561.615051 985.828491,562.524475 
	C983.894714,565.571899 973.781067,568.235779 970.317444,566.891968 
	C969.454468,566.557068 968.079102,566.021973 967.618408,566.402039 
	C961.868652,571.145752 954.163330,567.460083 947.880676,571.036926 
	C946.330261,571.919556 943.616516,572.479614 940.928528,573.862122 
	C939.459595,574.029480 938.689087,574.057739 937.918579,574.085938 
	C937.918579,574.085938 937.972351,574.075500 937.972778,573.659546 
	C936.735168,570.059326 935.497070,566.875122 934.258972,563.690857 
	C934.497864,563.407593 934.736694,563.124329 934.975586,562.841064 
	C936.891174,564.075439 938.806824,565.309875 940.835449,566.617004 
	C943.397095,565.699524 946.071533,564.314270 948.897278,563.850098 
	C951.713318,563.387512 954.701843,564.096008 957.578125,563.854858 
	C964.005859,563.315796 970.207458,558.913574 976.900635,562.791077 
	C976.995483,562.846008 977.370117,562.417969 977.893311,561.983459 
	C976.235596,559.925354 974.641541,557.946167 973.706360,556.785095 
	C974.636292,553.463013 975.698486,551.059875 975.923279,548.580872 
	C976.420837,543.091980 977.377808,542.323364 983.399292,544.614563 
	C981.796082,541.643494 981.085938,538.394287 979.128906,537.216064 
	C976.943604,535.900513 973.626465,536.465027 970.871216,536.217529 
	C968.459351,540.096985 968.452332,540.066406 962.591248,541.412354 
	C961.830994,541.586914 961.221130,542.337341 960.485107,542.709229 
	C953.695557,546.140137 947.093567,543.880066 941.042725,541.070557 
	C938.608887,539.940491 937.491394,535.975525 935.864014,533.439819 
	C942.504700,528.404785 935.632507,522.436401 937.720154,517.377075 
	C941.763611,517.577881 937.304443,525.552002 943.351196,523.436096 
	C944.174255,518.699585 944.969543,514.123352 945.898010,508.780518 
	C946.987732,511.587280 947.787292,513.646606 948.920593,516.565491 
	C952.042603,507.889954 957.729980,505.855072 965.350220,509.752808 
	C970.117188,506.623871 973.343323,500.199341 981.323914,502.028931 
	C979.399597,498.379425 977.013489,495.502991 974.765869,492.522217 
	C972.681091,489.757385 970.617737,487.491577 966.562561,488.893768 
	C965.112549,489.395142 963.223389,489.040527 961.653503,488.626343 
	C960.703369,488.375671 959.402344,487.325012 959.313110,486.517334 
	C959.216553,485.643860 960.144470,484.285736 961.002136,483.788300 
	C961.778259,483.338104 963.235840,483.443451 964.069153,483.897766 
	C964.799927,484.296204 965.081177,485.518921 965.560974,486.377533 
	C966.256287,486.130615 966.951538,485.883698 967.646851,485.636810 
	C967.646851,484.110107 968.033020,482.446655 967.552490,481.090149 
	C966.901367,479.251862 965.291260,477.758881 964.607117,475.925690 
	C961.814148,468.442291 953.733765,470.888214 948.692627,467.573242 
	C948.036865,467.141998 945.114136,471.334961 943.055847,471.542175 
	C940.817749,471.767456 938.432373,469.554382 935.976868,468.957031 
	C934.475159,468.591675 932.721069,469.271667 931.079163,469.472961 
	C927.562805,469.904175 924.045776,470.329407 919.772461,470.849121 
	C918.659424,473.698242 916.331299,475.504761 912.337158,472.340271 
	C911.901245,471.994812 911.026428,471.997070 910.412048,472.120789 
	C908.391785,472.527557 906.150085,474.034210 905.117371,470.732056 
	C904.490967,468.729187 903.278870,466.695801 903.388489,464.735352 
	C903.502502,462.694855 904.890137,460.725525 906.062439,457.902588 
	C910.532593,464.935089 910.796387,464.840607 917.167908,462.024475 
	C920.015442,460.765869 923.267029,460.421570 927.398682,459.399200 
	C925.765198,455.689758 923.959351,451.588867 922.153564,447.487976 
	C922.746399,452.263489 920.292175,452.162933 916.683960,451.427460 
	C914.059082,450.892426 910.792297,450.466187 908.585144,451.556763 
	C904.015808,453.814606 900.443115,451.591278 896.458618,450.851624 
	C896.780334,447.382935 896.398865,444.164459 897.484985,441.557434 
	C898.997070,437.928345 901.947632,434.918030 903.643005,431.339874 
	C905.049194,428.372223 906.545715,428.553436 908.604248,430.128265 
	C910.602173,431.656799 913.766479,433.045715 909.991699,435.630188 
	C909.339355,434.597015 908.695251,433.933655 908.051147,433.270325 
	C907.777222,433.770813 907.503296,434.271271 907.229309,434.771729 
	C908.152893,435.181152 909.076416,435.590576 910.007202,436.366028 
	C911.130737,437.181427 912.279602,438.065430 913.356201,437.984711 
	C915.275269,437.840759 917.150635,437.113770 919.429749,436.532257 
	C921.565552,435.543671 924.103882,434.211151 926.791748,433.340118 
	C927.100098,433.240234 928.243713,435.717621 928.667725,437.049988 
	C928.034607,437.793884 927.733704,438.487823 927.432800,439.181763 
	C927.796936,439.308899 928.161133,439.436005 928.525269,439.563141 
	C928.683533,438.708771 928.841797,437.854401 929.315247,437.165649 
	C930.004456,439.261871 930.378418,441.192474 930.881836,443.790955 
	C934.553894,445.766113 943.345215,443.671844 940.811279,452.424438 
	C938.943787,453.688599 937.458191,454.390900 936.512451,455.538208 
	C936.262146,455.841827 938.033020,458.491791 938.266052,458.406097 
	C940.118530,457.725037 941.823792,456.643829 944.054932,455.422241 
	C944.991394,455.757660 947.225098,457.344086 948.216003,456.773224 
	C952.014099,454.585266 954.926819,456.579346 958.079224,457.922760 
	C958.079224,457.922760 958.020081,457.937195 958.023315,458.326263 
	C958.021423,462.816650 960.418030,464.901337 964.079529,465.923859 
	C964.079529,465.923859 964.025024,465.937988 964.029419,466.315796 
	C965.385559,468.464386 966.737366,470.235138 968.089233,472.005890 
M957.826233,521.636902 
	C952.712341,519.060669 945.268005,522.890869 942.582458,529.560547 
	C944.274780,529.901611 945.946045,530.238403 947.617249,530.575195 
	C947.179016,530.883362 946.740784,531.191467 946.302551,531.499634 
	C947.018188,533.536865 947.257568,536.892334 948.541626,537.356201 
	C951.955200,538.589478 951.400513,535.039062 952.166687,533.083862 
	C953.384399,529.976379 954.791382,526.943054 956.153687,523.796875 
	C958.482666,525.113953 959.900024,525.915466 961.317444,526.716980 
	C961.549316,526.384521 961.781250,526.052063 962.013123,525.719604 
	C960.741211,524.561584 959.469299,523.403564 957.826233,521.636902 
M917.846680,445.352325 
	C918.819153,444.217377 919.791565,443.082428 920.763977,441.947479 
	C920.385620,441.513733 920.007202,441.079956 919.628784,440.646210 
	C918.146851,441.876068 916.664856,443.105957 915.182861,444.335876 
	C915.935608,444.857574 916.688354,445.379272 917.846680,445.352325 
M965.325134,523.140991 
	C966.484924,522.968384 967.644714,522.795776 968.804504,522.623230 
	C968.321899,521.856201 967.839294,521.089172 967.356628,520.322205 
	C966.605286,521.021851 965.853943,521.721436 965.325134,523.140991 
M910.026672,446.207214 
	C910.255676,447.019745 910.484680,447.832306 910.713745,448.644836 
	C911.326477,448.252991 911.939209,447.861145 912.551941,447.469299 
	C911.929688,447.000000 911.307434,446.530731 910.026672,446.207214 
M935.603149,462.117493 
	C935.873535,462.893433 936.143921,463.669373 936.414307,464.445312 
	C936.899292,464.220612 937.384277,463.995911 937.869263,463.771210 
	C937.327332,463.254089 936.785461,462.736969 935.603149,462.117493 
M961.184509,537.337280 
	C960.520508,537.749634 959.856567,538.162048 959.192566,538.574402 
	C959.595703,538.984863 959.998779,539.395325 960.401978,539.805786 
	C960.825195,539.148743 961.248474,538.491699 961.184509,537.337280 
M933.322632,452.551239 
	C933.204956,451.785522 933.087219,451.019775 932.969482,450.254059 
	C932.530090,450.337677 932.090637,450.421326 931.651306,450.504913 
	C931.992981,451.219574 932.334656,451.934235 933.322632,452.551239 
M931.325073,455.357025 
	C931.052856,456.038452 930.780640,456.719879 930.508362,457.401306 
	C931.079346,457.470551 931.650330,457.539825 932.221252,457.609070 
	C932.119568,456.948303 932.017883,456.287537 931.325073,455.357025 
M928.859192,447.509705 
	C928.431641,447.206085 928.004089,446.902496 927.576477,446.598907 
	C927.462646,447.048187 927.348816,447.497437 927.234985,447.946655 
	C927.735474,448.000397 928.235962,448.054138 928.859192,447.509705 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1006.196411,793.815430 
	C1004.957153,790.071106 1003.427734,786.125427 1003.163513,782.096741 
	C1001.714050,759.996094 1003.908203,738.092957 1006.725464,716.179443 
	C1007.739380,708.292664 1009.992249,700.011108 1006.052612,692.138611 
	C1002.728394,685.496033 999.327576,678.891418 995.916016,672.293091 
	C990.987488,662.760742 986.018555,653.249268 981.011353,643.377502 
	C981.962646,643.524902 983.409851,643.755493 983.903625,644.566528 
	C986.773376,649.280457 989.419067,654.130798 992.746826,660.005493 
	C993.607361,660.005493 995.805969,659.640808 997.797424,660.125916 
	C999.276794,660.486267 1001.149963,661.713989 1001.605286,662.996460 
	C1001.960449,663.996704 1000.372681,665.660400 999.707397,667.057434 
	C999.141907,668.244873 998.250854,669.488953 998.298279,670.676208 
	C998.326111,671.374390 1000.126526,672.738525 1000.747253,672.549316 
	C1003.468018,671.719482 1006.877502,671.068909 1008.397583,669.092468 
	C1009.459351,667.711792 1007.857056,664.290527 1007.460938,661.778076 
	C1007.123474,659.637634 1003.326416,657.803345 1006.638000,655.385742 
	C1008.767029,653.831421 1014.328796,655.766602 1015.896118,658.347595 
	C1016.551208,659.426453 1017.058960,660.594788 1018.276428,662.983337 
	C1020.274719,657.826477 1021.282166,651.426758 1027.337769,653.659363 
	C1031.125244,655.055725 1033.621338,659.471619 1031.148804,665.118958 
	C1029.355469,664.169861 1027.609375,663.245728 1025.739502,662.256104 
	C1022.466187,663.837280 1023.221558,671.559692 1017.680481,668.363647 
	C1015.717773,671.802307 1014.036743,674.747498 1012.355713,677.692749 
	C1011.685608,678.309509 1011.015503,678.926331 1010.345459,679.543091 
	C1009.190491,677.564270 1008.035461,675.585510 1006.988037,673.790955 
	C1005.712646,675.432373 1004.322449,677.221619 1003.073853,678.828613 
	C1005.253967,684.671021 1007.618958,690.776367 1009.800781,696.946472 
	C1011.032471,700.429749 1013.091675,701.067993 1015.880310,698.574463 
	C1017.365479,697.246338 1018.868591,695.938293 1020.499573,694.501343 
	C1024.302002,701.486755 1025.000610,707.736328 1021.593750,714.016724 
	C1019.812012,714.963013 1018.030273,715.909363 1016.248535,716.855713 
	C1017.246460,718.201904 1018.244385,719.548035 1019.411621,721.122620 
	C1017.543518,727.409424 1016.206177,728.003174 1008.464050,724.911865 
	C1007.626221,731.197144 1006.472168,737.269409 1006.079712,743.390442 
	C1005.453430,753.156921 1005.539734,762.969055 1004.916138,772.735779 
	C1004.586914,777.892395 1007.309082,779.284790 1011.550049,780.080811 
	C1013.565186,780.459106 1015.407715,781.757202 1017.328430,782.638672 
	C1017.125793,783.242249 1016.923157,783.845886 1016.720520,784.449524 
	C1013.395203,784.449524 1010.069885,784.449524 1006.490417,784.449524 
	C1006.490417,787.536743 1006.490417,790.556274 1006.196411,793.815430 
M1012.480469,711.833557 
	C1012.008911,710.506653 1011.537354,709.179810 1011.065796,707.852905 
	C1010.545227,708.038391 1010.024597,708.223816 1009.504028,708.409302 
	C1009.504028,710.124390 1009.504028,711.839478 1009.504028,714.231689 
	C1010.778198,713.314819 1011.399109,712.868042 1012.480469,711.833557 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M1052.023682,621.002808 
	C1050.541626,620.280762 1049.459839,619.554077 1048.327271,618.917419 
	C1045.579468,617.372681 1043.733765,617.641052 1042.975952,621.202026 
	C1041.864136,626.427124 1039.049316,627.364319 1034.219360,624.989319 
	C1032.790283,624.286560 1030.133057,624.455139 1028.878784,625.372742 
	C1026.509277,627.106384 1025.115723,630.377991 1022.621948,631.674683 
	C1020.544250,632.755005 1017.087891,632.742554 1014.938354,631.732422 
	C1012.233459,630.461304 1010.237244,627.682251 1007.319397,624.984436 
	C1017.495056,621.186340 1026.318481,615.543091 1037.547607,615.936401 
	C1040.796875,610.851379 1049.572388,610.538025 1056.897339,621.854980 
	C1055.069458,621.523315 1053.735352,621.281189 1052.023682,621.002808 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M953.957520,597.761230 
	C949.620422,591.690979 945.299072,585.231995 940.949707,578.421021 
	C945.233765,578.484375 948.228149,579.735474 948.251160,585.157532 
	C948.261536,587.596191 950.715759,589.994751 951.945435,592.468872 
	C952.730835,594.049011 953.304626,595.734314 953.957520,597.761230 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1031.051270,568.313232 
	C1036.919556,574.757812 1042.767578,581.572449 1048.734619,588.691040 
	C1046.560425,587.155396 1043.888306,585.629700 1042.052856,583.411560 
	C1038.148315,578.692932 1034.678833,573.614380 1031.051270,568.313232 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1020.826050,554.260864 
	C1024.321777,558.413452 1027.641235,562.829346 1031.017456,567.586731 
	C1025.152344,565.931030 1022.748413,560.511536 1019.512512,555.923828 
	C1019.418701,555.790894 1020.249939,555.005432 1020.826050,554.260864 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M980.982117,642.629639 
	C977.690125,637.593445 974.407227,632.149170 971.100220,626.354919 
	C976.803833,629.929199 980.037109,635.378540 980.982117,642.629639 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1011.363281,685.985962 
	C1008.559937,685.414490 1006.956360,684.549194 1009.644348,682.206055 
	C1010.737427,681.253296 1011.884583,680.362732 1013.005310,679.445374 
	C1016.203308,682.892151 1015.828735,684.824280 1011.363281,685.985962 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M961.965576,609.735596 
	C959.593079,606.693359 957.237671,603.252258 954.799683,599.459351 
	C959.031494,601.173035 961.364868,604.645691 961.965576,609.735596 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1004.040771,529.319580 
	C1006.333984,532.063843 1008.612732,535.183838 1010.926147,538.650513 
	C1008.649353,535.896545 1006.337830,532.795898 1004.040771,529.319580 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M968.102905,618.906921 
	C966.531006,617.334290 965.259338,615.533081 963.887329,613.406128 
	C966.773560,613.752502 970.117432,614.129944 968.102905,618.906921 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M999.036255,521.263794 
	C1000.686707,523.337769 1002.324707,525.796692 1004.016602,528.600952 
	C1002.388306,526.513733 1000.706055,524.081177 999.036255,521.263794 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1015.040405,546.313232 
	C1016.656494,547.736450 1018.257812,549.528992 1019.873657,551.657104 
	C1018.267334,550.222656 1016.646484,548.452576 1015.040405,546.313232 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1051.025635,592.327515 
	C1052.670410,593.734863 1054.307983,595.512329 1056.006958,597.618408 
	C1054.385010,596.197205 1052.701660,594.447449 1051.025635,592.327515 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1011.041260,540.241943 
	C1012.362427,541.663696 1013.668213,543.465332 1015.022583,545.606689 
	C1013.722839,544.171570 1012.374390,542.396667 1011.041260,540.241943 
z`}),h("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1181.927246,666.205383 
	C1182.750854,668.332520 1183.432617,670.783936 1184.103760,673.642334 
	C1183.323730,671.542725 1182.554688,669.036194 1181.927246,666.205383 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M991.073486,507.148376 
	C992.055664,508.256256 993.007080,509.755524 994.010254,511.606567 
	C993.055542,510.485535 992.049072,509.012634 991.073486,507.148376 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M937.956909,574.408569 
	C938.689087,574.057739 939.459595,574.029480 940.615051,574.000610 
	C940.992737,575.081787 940.985474,576.163574 940.954590,577.651123 
	C939.952454,576.948303 938.973816,575.839722 937.956909,574.408569 
z`}),h("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1143.923828,656.823486 
	C1142.958862,656.361938 1141.990112,655.534180 1140.937500,654.380005 
	C1141.875854,654.854736 1142.897827,655.656006 1143.923828,656.823486 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M994.029419,512.333984 
	C994.710815,513.054138 995.378296,514.157776 996.061279,515.601990 
	C995.389709,514.867554 994.702637,513.792480 994.029419,512.333984 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M989.344971,506.000854 
	C988.691162,505.191132 988.382385,504.382233 988.081360,503.244629 
	C989.056396,503.717865 990.023621,504.519836 991.031494,505.664795 
	C990.611389,506.005768 990.150635,506.003723 989.344971,506.000854 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M970.271484,623.789062 
	C969.668152,623.219360 969.319763,622.445618 968.927979,621.354797 
	C969.431885,621.886841 969.979187,622.735901 970.271484,623.789062 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M996.045166,516.307495 
	C996.707642,516.737915 997.355408,517.533264 998.055786,518.645508 
	C997.415771,518.199036 996.723083,517.435730 996.045166,516.307495 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1056.040405,598.307129 
	C1056.723022,598.720215 1057.392822,599.495972 1058.070312,600.590698 
	C1057.394409,600.163086 1056.711060,599.416443 1056.040405,598.307129 
z`}),h("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1180.043579,662.295532 
	C1180.673584,662.744080 1181.288208,663.547058 1181.911133,664.670532 
	C1181.289062,664.210571 1180.658569,663.430237 1180.043579,662.295532 
z`}),h("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1177.038818,655.235107 
	C1177.697144,655.694092 1178.342163,656.521362 1179.001953,657.675537 
	C1178.353027,657.202759 1177.689209,656.403137 1177.038818,655.235107 
z`}),h("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1178.827148,660.134155 
	C1179.390137,660.424438 1179.712402,660.887390 1180.055542,661.645752 
	C1179.579834,661.396362 1179.083008,660.851562 1178.827148,660.134155 
z`}),h("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1146.222412,659.827209 
	C1145.648438,659.550110 1145.308594,659.093811 1144.898193,658.350830 
	C1145.370728,658.592102 1145.913696,659.120056 1146.222412,659.827209 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1058.198730,601.189819 
	C1058.595093,601.120789 1059.130005,601.311218 1059.812500,601.756531 
	C1059.419189,601.824036 1058.878296,601.636658 1058.198730,601.189819 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1050.130615,591.092590 
	C1050.314087,591.058289 1050.579468,591.278503 1050.943970,591.740112 
	C1050.766235,591.770081 1050.489258,591.558594 1050.130615,591.092590 
z`}),h("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M589.944519,124.574860 
	C592.020447,124.433418 594.096436,124.291977 596.898254,124.353745 
	C599.919373,124.665649 602.218201,124.916023 604.509216,124.857979 
	C613.346375,124.634048 622.181091,124.311584 631.016724,124.025833 
	C631.191040,124.013885 631.365356,124.001938 632.032349,123.946342 
	C632.524963,123.902702 633.022034,123.889549 633.022034,123.889542 
	C636.987915,124.043495 640.952637,124.254524 644.920044,124.338196 
	C651.070740,124.467911 657.223389,124.510757 664.179810,124.595261 
	C666.142822,124.685860 667.301208,124.847122 668.459534,124.846184 
	C688.927612,124.829681 709.396179,124.868019 729.863525,124.726036 
	C738.495605,124.666153 747.125244,123.990417 755.755615,123.997879 
	C768.798218,124.009155 781.840149,124.397575 794.882996,124.578316 
	C802.413513,124.682671 809.946533,124.801208 817.476196,124.715370 
	C824.332764,124.637215 831.186218,124.291695 838.041077,124.064026 
	C842.393433,124.049713 846.745789,124.035400 851.856995,124.295700 
	C867.776917,124.429214 882.937988,124.288109 898.099060,124.147003 
	C898.519592,124.134186 898.940125,124.121368 900.010620,124.298225 
	C905.455627,124.348122 910.250732,124.208351 915.045837,124.068573 
	C915.470886,124.073723 915.895874,124.078865 916.913086,124.292793 
	C922.671204,124.337082 927.837097,124.172592 933.002991,124.008102 
	C933.423706,124.048462 933.844421,124.088814 934.808350,124.328354 
	C936.238037,124.357605 937.124573,124.187660 938.011047,124.017723 
	C939.063660,124.040833 940.116211,124.063927 941.907715,124.301575 
	C951.106995,124.360596 959.567322,124.205063 968.027649,124.049530 
	C976.805969,124.306427 985.584839,124.781265 994.362427,124.758301 
	C1002.968811,124.735764 1011.587341,123.800896 1020.173279,124.085747 
	C1023.983521,124.212166 1027.809204,126.161446 1031.442017,127.717094 
	C1032.334351,128.099243 1032.856689,130.160965 1032.933716,131.486298 
	C1033.217163,136.364838 1033.242188,141.258392 1033.336426,147.058243 
	C1033.499146,166.121262 1033.785645,184.271988 1033.850342,202.423508 
	C1033.901367,216.756866 1033.696899,231.091354 1033.568115,245.424988 
	C1033.533203,249.304535 1033.190308,253.187241 1033.290527,257.060669 
	C1033.444580,263.015350 1033.859741,268.963226 1034.164062,274.914001 
	C1033.797974,279.837708 1033.152954,284.759369 1033.117065,289.685455 
	C1032.998291,306.082214 1033.008423,322.481323 1033.147461,338.878021 
	C1033.232178,348.878113 1033.877930,358.875946 1033.856445,368.873901 
	C1033.820801,385.543243 1033.311401,402.211487 1033.271484,418.880859 
	C1033.243530,430.584381 1033.755859,442.288239 1033.858887,453.993378 
	C1033.963745,465.909790 1033.866577,477.827972 1033.850708,489.745392 
	C1033.844238,494.626740 1034.177734,499.548492 1033.633911,504.370392 
	C1033.402954,506.418732 1031.704712,509.367859 1029.994385,509.966095 
	C1026.174805,511.301971 1021.928467,511.417725 1017.425354,511.939697 
	C1008.099121,497.447937 999.399658,482.920624 990.228333,468.697571 
	C985.384766,461.186005 979.778381,454.160187 974.405823,446.997955 
	C970.161072,441.339203 965.993896,435.592407 961.354431,430.266174 
	C953.425232,421.163300 945.709534,411.750885 936.837769,403.634094 
	C930.456421,397.795837 921.367737,396.460510 912.893677,397.091980 
	C900.207581,398.037354 889.746094,404.164459 884.261780,415.843353 
	C879.592102,425.787567 877.379517,436.529694 876.518494,447.795593 
	C875.334595,463.286041 877.545837,478.224243 880.360046,493.201538 
	C881.479797,499.160919 883.573242,504.937378 885.004517,511.362305 
	C878.858337,511.729645 872.932129,511.413208 867.003479,511.358551 
	C854.645813,511.244659 842.286743,511.224091 829.928345,511.249115 
	C816.815247,511.275635 803.701843,511.353607 790.589417,511.493286 
	C777.039490,511.637665 763.490784,512.025085 749.941284,512.035767 
	C740.643250,512.042969 731.345886,511.452942 722.046265,511.380981 
	C714.135498,511.319763 706.222229,511.711334 698.309631,511.732605 
	C688.673889,511.758514 679.037720,511.609406 669.401733,511.530518 
	C661.127869,511.462830 652.854126,511.381378 644.580200,511.318481 
	C641.356812,511.293976 638.131714,511.238678 634.909973,511.310516 
	C626.723328,511.493073 618.538757,511.882782 610.352112,511.919525 
	C602.402893,511.955200 594.451294,511.500946 586.502380,511.548065 
	C579.471497,511.589752 572.444580,512.170471 565.412842,512.253479 
	C554.686646,512.380005 543.957764,512.276306 533.230042,512.296448 
	C532.610962,512.297607 531.987671,512.661499 531.374146,512.639343 
	C524.776917,512.401794 518.183105,511.979675 511.584625,511.892883 
	C505.598358,511.814117 499.605804,512.230469 493.619110,512.161621 
	C488.596985,512.103882 483.577118,511.403076 478.560089,511.445251 
	C469.428009,511.522034 460.299927,511.987518 451.168060,512.200684 
	C440.607056,512.447327 430.038055,512.881287 419.483917,512.668091 
	C414.197845,512.561340 408.404388,513.369324 404.010284,508.993683 
	C403.984314,508.814880 403.958374,508.636108 403.883545,507.794586 
	C403.823914,502.597015 403.797974,498.062134 403.805359,493.527344 
	C403.824982,481.433807 403.946991,469.339569 403.847137,457.247101 
	C403.802399,451.825226 403.324646,446.406921 403.043396,440.987000 
	C403.091705,440.567902 403.140045,440.148834 403.414856,439.148743 
	C403.699951,433.768219 403.826355,428.968140 403.788574,424.169342 
	C403.769653,421.767242 403.325623,419.369232 403.292755,416.966370 
	C403.210083,410.921021 403.251862,404.873962 403.243774,398.827606 
	C403.475464,370.583344 403.829865,342.339447 403.909698,314.094757 
	C404.025452,273.143860 403.950043,232.192383 403.941589,191.241150 
	C403.937500,171.430832 403.867798,151.620453 403.898163,131.810211 
	C403.906891,126.122192 405.844055,124.184395 411.536896,124.062431 
	C416.699463,123.951836 421.866516,124.052185 427.845886,124.281052 
	C436.453522,124.355171 444.246887,124.207779 452.040283,124.060379 
	C457.199646,124.276825 462.359039,124.493263 468.090790,124.881516 
	C487.886383,124.964043 507.109558,124.873894 526.332764,124.785721 
	C544.531494,124.702240 562.730164,124.620827 580.928894,124.538506 
	C582.684570,124.618362 584.440308,124.698219 586.980530,124.772720 
	C588.491577,124.703209 589.218018,124.639038 589.944519,124.574860 
z`}),h("path",{fill:"#FDCE98",opacity:"1.000000",stroke:"none",d:`
M943.652954,618.427002 
	C951.671387,632.109497 960.041260,645.203613 967.157288,658.946960 
	C974.818604,673.743530 982.133545,688.843201 987.882019,704.443604 
	C990.082764,710.415955 987.674194,718.151245 987.101685,725.061279 
	C986.613892,730.948669 985.495239,736.788025 985.106995,742.678406 
	C984.539490,751.289124 984.129089,759.926453 984.129700,768.552429 
	C984.130066,773.989746 985.010315,779.426392 985.481140,784.864624 
	C985.703491,787.432983 985.891357,790.004333 986.094788,792.574341 
	C985.640198,792.929077 985.185547,793.283875 984.730896,793.638611 
	C979.431030,789.903137 973.686035,786.657776 968.922485,782.331665 
	C958.497314,772.864014 948.345764,763.067688 938.492554,753.004089 
	C923.933655,738.134460 912.022034,721.316833 901.362061,703.385254 
	C895.291626,693.173828 891.979736,682.021545 886.913513,671.533936 
	C883.779480,665.046143 884.779358,658.289551 884.955811,651.556213 
	C885.242371,640.615845 888.962585,630.611267 893.467407,620.840393 
	C897.558716,611.966736 905.349060,609.643555 914.238037,608.918945 
	C920.257996,608.428162 926.211609,607.066711 932.232483,606.682312 
	C933.882263,606.577026 936.030090,608.266174 937.310791,609.701660 
	C939.612732,612.281921 941.431641,615.293213 943.652954,618.427002 
z`}),h("path",{fill:"#FDCE98",opacity:"1.000000",stroke:"none",d:`
M958.272217,798.702271 
	C962.502625,801.623657 966.279663,804.663635 970.489990,806.880859 
	C979.111755,811.421265 985.242554,817.643616 985.952881,827.805603 
	C986.465637,835.140503 979.281433,843.811157 972.040771,844.917053 
	C962.391724,846.390686 953.187256,845.039673 943.902100,841.781372 
	C930.208557,836.976257 918.378418,829.304077 906.915405,820.706177 
	C888.700562,807.044006 872.563538,791.498474 859.277771,772.834290 
	C852.337952,763.085022 847.207947,752.600098 844.822144,741.260315 
	C841.193542,724.012878 847.071899,709.275818 860.456299,697.680115 
	C871.695068,687.943298 871.482422,690.539612 878.613708,701.939331 
	C885.979187,713.713318 892.588684,725.994019 900.480164,737.394531 
	C906.768127,746.478577 914.375061,754.668396 921.605530,763.075317 
	C927.414978,769.830078 933.240601,776.619995 939.609314,782.829895 
	C945.356628,788.433899 951.850403,793.272339 958.272217,798.702271 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M910.007202,436.366028 
	C913.766479,433.045715 910.602173,431.656799 908.604248,430.128265 
	C906.545715,428.553436 905.049194,428.372223 903.643005,431.339874 
	C901.947632,434.918030 898.997070,437.928345 897.484985,441.557434 
	C896.398865,444.164459 896.780334,447.382935 896.458618,450.851624 
	C900.443115,451.591278 904.015808,453.814606 908.585144,451.556763 
	C910.792297,450.466187 914.059082,450.892426 916.683960,451.427460 
	C920.292175,452.162933 922.746399,452.263489 922.153564,447.487976 
	C923.959351,451.588867 925.765198,455.689758 927.398682,459.399200 
	C923.267029,460.421570 920.015442,460.765869 917.167908,462.024475 
	C910.796387,464.840607 910.532593,464.935089 906.062439,457.902588 
	C904.890137,460.725525 903.502502,462.694855 903.388489,464.735352 
	C903.278870,466.695801 904.490967,468.729187 905.117371,470.732056 
	C906.150085,474.034210 908.391785,472.527557 910.412048,472.120789 
	C911.026428,471.997070 911.901245,471.994812 912.337158,472.340271 
	C916.331299,475.504761 918.659424,473.698242 919.772461,470.849121 
	C924.045776,470.329407 927.562805,469.904175 931.079163,469.472961 
	C932.721069,469.271667 934.475159,468.591675 935.976868,468.957031 
	C938.432373,469.554382 940.817749,471.767456 943.055847,471.542175 
	C945.114136,471.334961 948.036865,467.141998 948.692627,467.573242 
	C953.733765,470.888214 961.814148,468.442291 964.607117,475.925690 
	C965.291260,477.758881 966.901367,479.251862 967.552490,481.090149 
	C968.033020,482.446655 967.646851,484.110107 967.646851,485.636810 
	C966.951538,485.883698 966.256287,486.130615 965.560974,486.377533 
	C965.081177,485.518921 964.799927,484.296204 964.069153,483.897766 
	C963.235840,483.443451 961.778259,483.338104 961.002136,483.788300 
	C960.144470,484.285736 959.216553,485.643860 959.313110,486.517334 
	C959.402344,487.325012 960.703369,488.375671 961.653503,488.626343 
	C963.223389,489.040527 965.112549,489.395142 966.562561,488.893768 
	C970.617737,487.491577 972.681091,489.757385 974.765869,492.522217 
	C977.013489,495.502991 979.399597,498.379425 981.323914,502.028931 
	C973.343323,500.199341 970.117188,506.623871 965.350220,509.752808 
	C957.729980,505.855072 952.042603,507.889954 948.920593,516.565491 
	C947.787292,513.646606 946.987732,511.587280 945.898010,508.780518 
	C944.969543,514.123352 944.174255,518.699585 943.351196,523.436096 
	C937.304443,525.552002 941.763611,517.577881 937.720154,517.377075 
	C935.632507,522.436401 942.504700,528.404785 935.864014,533.439819 
	C937.491394,535.975525 938.608887,539.940491 941.042725,541.070557 
	C947.093567,543.880066 953.695557,546.140137 960.485107,542.709229 
	C961.221130,542.337341 961.830994,541.586914 962.591248,541.412354 
	C968.452332,540.066406 968.459351,540.096985 970.871216,536.217529 
	C973.626465,536.465027 976.943604,535.900513 979.128906,537.216064 
	C981.085938,538.394287 981.796082,541.643494 983.399292,544.614563 
	C977.377808,542.323364 976.420837,543.091980 975.923279,548.580872 
	C975.698486,551.059875 974.636292,553.463013 973.706360,556.785095 
	C974.641541,557.946167 976.235596,559.925354 977.893311,561.983459 
	C977.370117,562.417969 976.995483,562.846008 976.900635,562.791077 
	C970.207458,558.913574 964.005859,563.315796 957.578125,563.854858 
	C954.701843,564.096008 951.713318,563.387512 948.897278,563.850098 
	C946.071533,564.314270 943.397095,565.699524 940.835449,566.617004 
	C938.806824,565.309875 936.891174,564.075439 934.975586,562.841064 
	C934.736694,563.124329 934.497864,563.407593 934.258972,563.690857 
	C935.497070,566.875122 936.735168,570.059326 937.947876,573.649170 
	C933.773499,566.931213 929.324829,559.962280 925.551941,552.644897 
	C920.890625,543.604492 916.780029,534.279602 912.450562,525.068665 
	C902.837219,504.616058 896.808472,483.222412 894.783569,460.643097 
	C893.719421,448.776642 894.966003,437.549164 900.487854,426.881500 
	C907.268921,413.781372 916.085693,412.691254 926.643066,420.407715 
	C930.479675,423.211884 933.784607,426.797455 937.093689,430.254669 
	C940.651367,433.971680 944.149902,437.787659 947.272156,441.868073 
	C951.061584,446.820282 954.430359,452.094360 958.030151,457.575989 
	C954.926819,456.579346 952.014099,454.585266 948.216003,456.773224 
	C947.225098,457.344086 944.991394,455.757660 944.054932,455.422241 
	C941.823792,456.643829 940.118530,457.725037 938.266052,458.406097 
	C938.033020,458.491791 936.262146,455.841827 936.512451,455.538208 
	C937.458191,454.390900 938.943787,453.688599 940.811279,452.424438 
	C943.345215,443.671844 934.553894,445.766113 930.881836,443.790955 
	C930.378418,441.192474 930.004456,439.261871 929.315186,437.165649 
	C928.243713,435.717621 927.100098,433.240234 926.791748,433.340118 
	C924.103882,434.211151 921.565552,435.543671 919.429749,436.532257 
	C917.150635,437.113770 915.275269,437.840759 913.356201,437.984711 
	C912.279602,438.065430 911.130737,437.181427 910.007202,436.366028 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M886.503723,829.361938 
	C894.753784,835.128540 903.013550,840.325806 910.531372,846.435913 
	C920.438293,854.487793 932.098816,858.304016 943.882080,862.129333 
	C946.995911,863.140198 947.619568,866.622864 945.626221,869.984253 
	C936.990906,884.546326 927.979858,887.282288 912.225891,883.202881 
	C897.839355,879.477661 883.955811,873.306274 872.443359,863.121704 
	C865.315552,856.816040 857.687500,851.034912 850.921021,844.371521 
	C840.932861,834.535767 834.847595,822.213867 834.401917,808.279175 
	C834.112183,799.220581 835.155518,789.678528 841.343201,780.856750 
	C845.736633,786.482849 849.758667,792.266174 854.429138,797.467163 
	C861.598022,805.450317 869.142517,813.102234 876.673584,820.751099 
	C879.641663,823.765686 883.001770,826.394409 886.503723,829.361938 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M403.758606,509.190002 
	C408.404388,513.369324 414.197845,512.561340 419.483917,512.668091 
	C430.038055,512.881287 440.607056,512.447327 451.168060,512.200684 
	C460.299927,511.987518 469.428009,511.522034 478.560089,511.445251 
	C483.577118,511.403076 488.596985,512.103882 493.619110,512.161621 
	C499.605804,512.230469 505.598358,511.814117 511.584625,511.892883 
	C518.183105,511.979675 524.776917,512.401794 531.374146,512.639343 
	C531.987671,512.661499 532.610962,512.297607 533.230042,512.296448 
	C543.957764,512.276306 554.686646,512.380005 565.412842,512.253479 
	C572.444580,512.170471 579.471497,511.589752 586.502380,511.548065 
	C594.451294,511.500946 602.402893,511.955200 610.352112,511.919525 
	C618.538757,511.882782 626.723328,511.493073 634.909973,511.310516 
	C638.131714,511.238678 641.356812,511.293976 644.580200,511.318481 
	C652.854126,511.381378 661.127869,511.462830 669.401733,511.530518 
	C679.037720,511.609406 688.673889,511.758514 698.309631,511.732605 
	C706.222229,511.711334 714.135498,511.319763 722.046265,511.380981 
	C731.345886,511.452942 740.643250,512.042969 749.941284,512.035767 
	C763.490784,512.025085 777.039490,511.637665 790.589417,511.493286 
	C803.701843,511.353607 816.815247,511.275635 829.928345,511.249115 
	C842.286743,511.224091 854.645813,511.244659 867.003479,511.358551 
	C872.932129,511.413208 878.858337,511.729645 885.209167,511.753235 
	C885.804993,512.474731 885.977356,513.370544 886.212646,514.561890 
	C876.345032,514.874207 866.412964,514.998596 856.484253,514.866333 
	C850.779846,514.790405 845.084045,514.153625 839.378784,514.030396 
	C832.357788,513.878784 825.330811,514.000610 818.306458,514.002075 
	C803.979980,514.005066 789.653503,514.009277 775.327026,514.008301 
	C753.920471,514.006897 732.513367,513.911987 711.107544,514.035522 
	C700.538330,514.096558 689.972168,514.729675 679.403198,514.777893 
	C672.111938,514.811157 664.819580,514.111267 657.525085,514.047241 
	C643.344482,513.922668 629.161926,514.016541 614.980225,514.016541 
	C601.983215,514.016602 588.986267,514.010681 575.989258,514.010132 
	C559.822571,514.009460 543.655945,514.008362 527.489258,514.013672 
	C516.802002,514.017212 506.113068,513.915649 495.428101,514.076355 
	C486.135162,514.216125 476.845917,514.927368 467.556580,514.898315 
	C455.659637,514.861145 443.765625,514.201599 431.867615,514.081482 
	C426.640594,514.028687 421.396515,514.529114 416.178650,514.988037 
	C409.596588,515.567017 405.242981,513.741028 403.758606,509.190002 
M861.513123,512.420410 
	C861.513123,512.420410 861.491272,512.475403 861.513123,512.420410 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M983.016724,494.594055 
	C980.445923,491.704132 977.666565,488.570679 975.252991,485.177094 
	C973.871399,483.234467 973.084656,480.868774 972.048340,478.316376 
	C975.698303,483.373260 979.329895,488.807373 983.016724,494.594055 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M988.089172,502.543640 
	C982.369629,503.356323 984.574707,498.222321 983.043945,495.329346 
	C984.734924,497.345764 986.412598,499.762512 988.089172,502.543640 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M964.031494,465.584229 
	C960.418030,464.901337 958.021423,462.816650 958.050903,458.328857 
	C960.044617,460.376434 962.014038,462.810516 964.031494,465.584229 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M968.039673,471.663574 
	C966.737366,470.235138 965.385559,468.464386 964.053894,466.317841 
	C965.379395,467.735107 966.684753,469.528168 968.039673,471.663574 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M972.030762,477.591919 
	C970.734680,476.458466 969.391296,474.983795 968.085327,473.113831 
	C969.409729,474.229309 970.696594,475.740021 972.030762,477.591919 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1149.953857,609.685547 
	C1149.098267,610.872803 1148.140991,611.858337 1147.183716,612.843811 
	C1146.245605,611.783508 1145.270630,610.753113 1144.378662,609.655396 
	C1143.289795,608.315247 1142.213989,606.957214 1141.240723,605.533081 
	C1140.561035,604.538635 1140.062866,603.420227 1139.483521,602.357239 
	C1140.792358,602.204651 1142.101074,602.052063 1143.767578,601.879700 
	C1144.125122,601.859924 1144.102417,601.903198 1144.069336,602.295715 
	C1145.736450,604.775269 1147.436646,606.862305 1149.136841,608.949341 
	C1149.434326,609.048401 1149.672852,609.226501 1149.953857,609.685547 
z`}),h("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1149.071899,608.605530 
	C1147.436646,606.862305 1145.736450,604.775269 1144.059082,602.317749 
	C1145.723511,604.052124 1147.365234,606.156921 1149.071899,608.605530 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M837.798035,123.764450 
	C831.186218,124.291695 824.332764,124.637215 817.476196,124.715370 
	C809.946533,124.801208 802.413513,124.682671 794.882996,124.578316 
	C781.840149,124.397575 768.798218,124.009155 755.755615,123.997879 
	C747.125244,123.990417 738.495605,124.666153 729.863525,124.726036 
	C709.396179,124.868019 688.927612,124.829681 668.459534,124.846184 
	C667.301208,124.847122 666.142822,124.685860 664.557739,124.410767 
	C665.844666,123.489326 667.564026,122.118690 669.270813,122.134247 
	C677.189880,122.206360 685.109436,122.984978 693.020935,122.883995 
	C699.856323,122.796753 706.676392,121.797630 713.512695,121.343559 
	C716.083008,121.172844 718.679749,121.401604 721.264465,121.448372 
	C730.857117,121.621933 740.450928,121.976074 750.042053,121.914024 
	C758.231445,121.861053 766.420105,121.042862 774.604675,121.108810 
	C780.327209,121.154922 786.036865,122.472740 791.762573,122.562462 
	C796.178162,122.631645 800.599365,121.503448 805.037903,121.234764 
	C807.971619,121.057175 811.015015,121.097801 813.874939,121.689972 
	C817.666565,122.475067 821.007324,123.101311 825.144470,121.964226 
	C828.862915,120.942207 833.386536,122.849655 837.798035,123.764450 
M832.471313,123.538559 
	C832.471313,123.538559 832.447937,123.580940 832.471313,123.538559 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M1034.469971,274.875305 
	C1033.859741,268.963226 1033.444580,263.015350 1033.290527,257.060669 
	C1033.190308,253.187241 1033.533203,249.304535 1033.568115,245.424988 
	C1033.696899,231.091354 1033.901367,216.756866 1033.850342,202.423508 
	C1033.785645,184.271988 1033.499146,166.121262 1033.403809,147.514465 
	C1034.332520,148.153732 1035.872070,149.237259 1035.889893,150.345490 
	C1036.072144,161.565598 1035.889771,172.791245 1036.037354,184.012344 
	C1036.233887,198.957489 1036.806519,213.899094 1036.880859,228.843903 
	C1036.927124,238.138870 1036.301636,247.435730 1036.073120,256.734100 
	C1035.948730,261.798737 1036.086914,266.869904 1035.952637,271.934082 
	C1035.926758,272.911316 1035.186646,273.869629 1034.469971,274.875305 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M580.867798,124.275558 
	C562.730164,124.620827 544.531494,124.702240 526.332764,124.785721 
	C507.109558,124.873894 487.886383,124.964043 468.490662,124.768829 
	C472.784088,123.905067 477.245087,123.281433 481.719543,122.777412 
	C482.853485,122.649681 484.032959,122.998482 485.187012,122.966423 
	C495.673798,122.675064 506.157990,122.245544 516.646423,122.089195 
	C520.091614,122.037849 523.550110,122.968269 526.997070,122.931953 
	C540.087280,122.794022 553.175537,122.255554 566.263977,122.271545 
	C571.112244,122.277466 575.959106,123.399551 580.867798,124.275558 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M402.642120,441.077362 
	C403.324646,446.406921 403.802399,451.825226 403.847137,457.247101 
	C403.946991,469.339569 403.824982,481.433807 403.805359,493.527344 
	C403.797974,498.062134 403.823914,502.597015 403.786896,507.541443 
	C402.827576,506.631989 401.133209,505.319611 401.121979,503.992920 
	C400.952759,484.042938 400.987366,464.091034 401.057892,444.139862 
	C401.061371,443.147797 401.829041,442.158386 402.642120,441.077362 
M402.573914,477.487823 
	C402.573914,477.487823 402.528748,477.479767 402.573914,477.487823 
M402.526062,504.412018 
	C402.526062,504.412018 402.598999,504.525665 402.526062,504.412018 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M897.878296,123.839111 
	C882.937988,124.288109 867.776917,124.429214 852.265503,124.348221 
	C855.798828,123.760170 859.680481,123.370331 863.566711,123.033272 
	C871.523560,122.343155 879.475037,121.354912 887.445007,121.161911 
	C890.828125,121.079994 894.252136,122.690109 897.878296,123.839111 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M402.915527,399.074280 
	C403.251862,404.873962 403.210083,410.921021 403.292755,416.966370 
	C403.325623,419.369232 403.769653,421.767242 403.788574,424.169342 
	C403.826355,428.968140 403.699951,433.768219 403.426147,438.832489 
	C402.473969,437.872040 401.120453,436.658081 401.097870,435.419922 
	C400.921692,425.759766 400.899719,416.093170 401.074493,406.432953 
	C401.117523,404.053925 402.058899,401.691193 402.915527,399.074280 
M402.476257,410.487640 
	C402.476257,410.487640 402.530426,410.510742 402.476257,410.487640 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M630.753662,123.730347 
	C622.181091,124.311584 613.346375,124.634048 604.509216,124.857979 
	C602.218201,124.916023 599.919373,124.665649 597.287231,124.316307 
	C599.598938,123.462044 602.255798,122.296799 604.894714,122.336349 
	C613.430298,122.464264 621.959167,123.034821 630.753662,123.730347 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M967.854736,123.720894 
	C959.567322,124.205063 951.106995,124.360596 942.302612,124.291130 
	C946.969666,123.552422 951.971680,122.797485 956.995117,122.606972 
	C960.542297,122.472458 964.118530,123.103172 967.854736,123.720894 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M932.921509,123.623871 
	C927.837097,124.172592 922.671204,124.337082 917.231873,124.285461 
	C921.989624,118.764771 927.447266,121.623032 932.921509,123.623871 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M451.755127,123.745461 
	C444.246887,124.207779 436.453522,124.355171 428.305603,124.286270 
	C431.992371,123.708939 436.028198,123.158630 440.076508,123.041931 
	C443.867432,122.932648 447.671631,123.282661 451.755127,123.745461 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M914.761597,123.755020 
	C910.250732,124.208351 905.455627,124.348122 900.323242,124.254669 
	C904.816406,123.828110 909.646912,123.634789 914.761597,123.755020 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M589.937012,124.251968 
	C589.218018,124.639038 588.491577,124.703209 587.410706,124.666840 
	C587.433472,123.782059 587.810547,122.997826 588.187622,122.213608 
	C588.768311,122.785431 589.348938,123.357254 589.937012,124.251968 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M937.817017,123.754684 
	C937.124573,124.187660 936.238037,124.357605 935.125000,124.342781 
	C935.806641,123.935890 936.714783,123.713776 937.817017,123.754684 
z`}),h("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M632.992371,123.656822 
	C633.022034,123.889549 632.524963,123.902702 632.279968,123.860481 
	C632.203735,123.432693 632.372498,123.047119 632.541199,122.661545 
	C632.681702,122.915726 632.822205,123.169914 632.992371,123.656822 
z`}),h("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1146.996460,627.065063 
	C1148.133301,629.717407 1148.859619,632.328186 1149.761719,635.571167 
	C1146.004883,634.162964 1143.408447,633.189697 1140.471802,632.088989 
	C1141.427124,629.364502 1142.501465,626.572205 1146.996460,627.065063 
z`}),h("path",{fill:"#FECE98",opacity:"1.000000",stroke:"none",d:`
M958.011841,521.941223 
	C959.469299,523.403564 960.741211,524.561584 962.013123,525.719604 
	C961.781250,526.052063 961.549316,526.384521 961.317444,526.716980 
	C959.900024,525.915466 958.482666,525.113953 956.153687,523.796875 
	C954.791382,526.943054 953.384399,529.976379 952.166687,533.083862 
	C951.400513,535.039062 951.955200,538.589478 948.541626,537.356201 
	C947.257568,536.892334 947.018188,533.536865 946.302551,531.499634 
	C946.740784,531.191467 947.179016,530.883362 947.617249,530.575195 
	C945.946045,530.238403 944.274780,529.901611 942.582458,529.560547 
	C945.268005,522.890869 952.712341,519.060669 958.011841,521.941223 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M917.643921,445.626648 
	C916.688354,445.379272 915.935608,444.857574 915.182861,444.335846 
	C916.664856,443.105957 918.146851,441.876068 919.628784,440.646210 
	C920.007202,441.079956 920.385620,441.513733 920.763977,441.947479 
	C919.791565,443.082428 918.819153,444.217377 917.643921,445.626648 
z`}),h("path",{fill:"#FECE98",opacity:"1.000000",stroke:"none",d:`
M965.213867,522.781006 
	C965.853943,521.721436 966.605286,521.021851 967.356628,520.322205 
	C967.839294,521.089172 968.321899,521.856201 968.804504,522.623169 
	C967.644714,522.795776 966.484924,522.968384 965.213867,522.781006 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M910.355957,446.134338 
	C911.307434,446.530731 911.929688,447.000000 912.551941,447.469299 
	C911.939209,447.861145 911.326477,448.252991 910.713745,448.644836 
	C910.484680,447.832306 910.255676,447.019745 910.355957,446.134338 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M935.923340,462.168640 
	C936.785461,462.736969 937.327332,463.254089 937.869263,463.771210 
	C937.384277,463.995911 936.899292,464.220612 936.414307,464.445312 
	C936.143921,463.669373 935.873535,462.893433 935.923340,462.168640 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M909.991699,435.630188 
	C909.076416,435.590576 908.152893,435.181152 907.229309,434.771729 
	C907.503296,434.271271 907.777222,433.770813 908.051147,433.270325 
	C908.695251,433.933655 909.339355,434.597015 909.991699,435.630188 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M961.428101,537.585938 
	C961.248474,538.491699 960.825195,539.148743 960.401978,539.805786 
	C959.998779,539.395325 959.595703,538.984863 959.192566,538.574402 
	C959.856567,538.162048 960.520508,537.749634 961.428101,537.585938 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M932.999512,452.600067 
	C932.334656,451.934235 931.992981,451.219574 931.651245,450.504944 
	C932.090637,450.421326 932.530090,450.337677 932.969482,450.254059 
	C933.087219,451.019775 933.204956,451.785522 932.999512,452.600067 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M931.620605,455.491882 
	C932.017883,456.287537 932.119568,456.948303 932.221313,457.609070 
	C931.650330,457.539825 931.079346,457.470551 930.508423,457.401306 
	C930.780640,456.719879 931.052856,456.038452 931.620605,455.491882 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M928.797852,447.808777 
	C928.235962,448.054138 927.735474,448.000397 927.234985,447.946655 
	C927.348816,447.497437 927.462646,447.048187 927.576477,446.598877 
	C928.004089,446.902496 928.431641,447.206085 928.797852,447.808777 
z`}),h("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M928.667786,437.049988 
	C928.841797,437.854401 928.683533,438.708771 928.525269,439.563141 
	C928.161133,439.436005 927.796936,439.308899 927.432800,439.181763 
	C927.733704,438.487823 928.034607,437.793884 928.667786,437.049988 
z`}),h("path",{fill:"#FECE98",opacity:"1.000000",stroke:"none",d:`
M1012.250244,712.127441 
	C1011.399109,712.868042 1010.778198,713.314819 1009.504028,714.231689 
	C1009.504028,711.839478 1009.504028,710.124390 1009.504028,708.409302 
	C1010.024597,708.223816 1010.545227,708.038391 1011.065796,707.852905 
	C1011.537354,709.179810 1012.008911,710.506653 1012.250244,712.127441 
z`}),h("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M861.502197,512.447876 
	C861.491272,512.475403 861.513123,512.420410 861.502197,512.447876 
z`}),h("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M832.459595,123.559753 
	C832.447937,123.580940 832.471313,123.538559 832.459595,123.559753 
z`}),h("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M402.551331,477.483795 
	C402.528748,477.479767 402.573914,477.487823 402.551331,477.483795 
z`}),h("path",{fill:"#A4B2BE",opacity:"1.000000",stroke:"none",d:`
M402.562531,504.468842 
	C402.598999,504.525665 402.526062,504.412018 402.562531,504.468842 
z`}),h("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M402.503357,410.499207 
	C402.530426,410.510742 402.476257,410.487640 402.503357,410.499207 
z`}),h("foreignObject",{x:500,y:190,width:700,height:470,children:I("body",{xmlns:"http://www.w3.org/1999/xhtml",children:[h("h1",{style:{fontFamily:"sans-serif",margin:0,fontSize:"70px"},children:"Hi, I'm Bella."}),h("p",{style:{fontFamily:"sans-serif",margin:0,fontSize:"50px"},children:"Harvard graduate,"}),h("p",{style:{fontFamily:"sans-serif",margin:0,fontSize:"50px"},children:"professional yapper."})]})})]});function uT(){return I("header",{className:"hidden md:flex w-full justify-between items-center px-12 py-10 text-2xl",children:[h("a",{href:"/",className:"font-bold",children:"HOME"}),I("nav",{className:"flex gap-12",children:[h("a",{href:"/faq",className:"hover:font-bold",children:"FAQ"}),h("a",{href:"/contact",className:"hover:font-bold",children:"CONTACT"})]})]})}function dT(){return I("div",{className:"min-h-screen flex flex-col flex-grow bg-cover bg-no-repeat bg-center",children:[h(uT,{}),h("div",{className:"flex-1",children:h(cT,{})}),h("footer",{className:"fixed bottom-0 left-0 w-full text-center py-3 mt-30 bg-red-600 text-white text-sm z-50",children:"This website is in development as of April 2025."})]})}const hT=({onSend:t})=>I("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"65%",viewBox:"0 0 1536 1024","enable-background":"new 0 0 1536 1024","xml:space":"preserve",children:[h("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M1.000000,362.000000 
	C1.000000,241.333328 1.000000,121.166664 1.000000,1.000000 
	C513.000000,1.000000 1025.000000,1.000000 1537.000000,1.000000 
	C1537.000000,342.333344 1537.000000,683.666687 1537.000000,1025.000000 
	C1025.000000,1025.000000 513.000000,1025.000000 1.000000,1025.000000 
	C1.000000,804.166687 1.000000,583.333313 1.000000,362.000000 
M1423.935791,53.040226 
	C1414.304688,53.026764 1404.673584,52.990585 1395.042480,53.003990 
	C1362.996826,53.048584 1330.951172,53.110989 1297.989868,53.037342 
	C1264.430420,53.080959 1230.870972,53.124577 1196.343872,53.030342 
	C1154.695312,53.071972 1113.046753,53.113602 1070.398315,53.030689 
	C1034.881104,53.075550 999.364014,53.120415 962.936462,53.040253 
	C953.305969,53.026779 943.675354,52.990585 934.044922,53.003979 
	C902.001221,53.048553 869.957581,53.110939 836.997192,53.036762 
	C801.685852,53.080086 766.374573,53.123405 730.126953,53.029354 
	C721.794617,53.019512 713.462280,52.991299 705.129944,53.003052 
	C671.803223,53.050064 638.476440,53.109497 604.193481,53.030479 
	C567.492310,53.076004 530.791199,53.121525 493.150360,53.029503 
	C484.517517,53.019615 475.884674,52.990978 467.251862,53.003162 
	C434.217255,53.049778 401.182648,53.109520 367.193542,53.030304 
	C332.726746,53.074631 298.259949,53.118954 262.889435,53.039459 
	C252.594955,53.025383 242.300461,52.987347 232.006012,53.001717 
	C200.627213,53.045517 169.248444,53.109516 136.959671,53.039169 
	C104.743195,53.039169 72.526711,53.039169 40.124046,53.039169 
	C40.124046,88.701729 40.124046,123.779625 39.839542,159.657333 
	C39.666496,161.128220 39.343193,162.598999 39.342258,164.069992 
	C39.315239,206.677750 39.315647,249.285507 39.343632,291.893280 
	C39.344475,293.177948 39.687927,294.462433 39.929459,296.730743 
	C39.938744,301.561554 39.948620,306.392365 39.957222,311.223175 
	C40.014767,343.536774 40.072041,375.850403 39.855118,408.925964 
	C39.675247,410.562653 39.339401,412.199249 39.338287,413.836060 
	C39.309483,456.228912 39.309948,498.621826 39.339191,541.014709 
	C39.340187,542.460144 39.690655,543.905273 39.934547,546.403870 
	C39.942139,551.735474 39.948959,557.067017 39.957447,562.398621 
	C40.011818,596.551453 40.066551,630.704285 39.836319,665.656860 
	C39.662846,667.127686 39.338749,668.598450 39.337811,670.069397 
	C39.310726,712.679504 39.311111,755.289673 39.339287,797.899780 
	C39.340134,799.184021 39.685966,800.468079 39.929394,802.735107 
	C39.938702,807.563354 39.949051,812.391602 39.957157,817.219849 
	C40.012756,850.348999 40.067890,883.478149 39.829861,917.435730 
	C39.660152,919.411499 39.349049,921.386841 39.343334,923.363098 
	C39.301437,937.846313 39.320736,952.329773 39.320736,966.813110 
	C39.320736,968.756470 39.320732,970.699829 39.320732,972.837524 
	C64.912704,972.837524 89.857407,972.837524 115.767723,972.969543 
	C151.292984,972.925720 186.818237,972.881897 223.230225,972.958862 
	C233.524139,972.972595 243.818069,973.009949 254.111954,972.995605 
	C285.489105,972.951843 316.866241,972.888245 349.132111,972.957825 
	C382.724792,972.916199 416.317474,972.874573 450.849762,972.970581 
	C459.482574,972.980408 468.115448,973.008911 476.748230,972.996704 
	C509.782806,972.950073 542.817383,972.890442 576.806519,972.969727 
	C611.212646,972.924255 645.618835,972.878723 680.950684,972.965820 
	C690.249878,972.977234 699.549133,973.009338 708.848328,972.996216 
	C741.226746,972.950623 773.605164,972.889282 806.916626,972.968323 
	C842.590210,972.923401 878.263733,972.878418 914.873535,972.970520 
	C924.171631,972.980347 933.469666,973.009705 942.767761,972.996460 
	C975.142273,972.950378 1007.516846,972.889465 1040.838989,972.969727 
	C1076.571289,972.924255 1112.303467,972.878845 1148.960205,972.964905 
	C1158.258667,972.976624 1167.557251,973.009338 1176.855713,972.996216 
	C1209.231689,972.950684 1241.607544,972.889282 1274.916260,972.968262 
	C1308.270874,972.923950 1341.625488,972.879700 1375.911133,972.970703 
	C1416.746338,972.970703 1457.581665,972.970703 1498.737793,972.970703 
	C1498.737793,971.073914 1498.737793,969.930847 1498.737793,968.787842 
	C1498.737793,926.863464 1498.742920,884.939148 1498.712769,843.014771 
	C1498.711914,841.737732 1498.341675,840.460938 1498.077881,838.213257 
	C1498.067383,834.386169 1498.053589,830.559021 1498.046997,826.731934 
	C1497.991699,794.619690 1497.937622,762.507385 1498.196533,729.571106 
	C1498.377808,727.931335 1498.716431,726.291748 1498.717529,724.651855 
	C1498.746582,682.339417 1498.746460,640.026917 1498.715576,597.714478 
	C1498.714478,596.266296 1498.344849,594.818359 1498.067505,592.366943 
	C1498.060425,586.707581 1498.055786,581.048157 1498.046021,575.388794 
	C1497.990112,542.600708 1497.932983,509.812653 1498.174805,476.242279 
	C1498.363281,474.609344 1498.715332,472.976562 1498.716553,471.343506 
	C1498.746704,429.024902 1498.746338,386.706238 1498.714478,344.387634 
	C1498.713379,342.942535 1498.331299,341.497681 1498.088867,339.103943 
	C1498.074707,333.125458 1498.057739,327.146973 1498.046997,321.168488 
	C1497.989258,288.787201 1497.932983,256.405914 1498.174927,223.242325 
	C1498.363403,221.609009 1498.715332,219.975815 1498.716553,218.342346 
	C1498.746704,176.013626 1498.746460,133.684906 1498.714478,91.356201 
	C1498.713379,89.910194 1498.330078,88.464485 1498.090332,86.074463 
	C1498.090332,75.177948 1498.090332,64.281425 1498.090332,53.165012 
	C1473.249390,53.165012 1449.047729,53.165012 1423.935791,53.040226 
z`}),h("path",{fill:"#EB6549",opacity:"1.000000",stroke:"none",d:`
M39.871651,295.747009 
	C39.687927,294.462433 39.344475,293.177948 39.343632,291.893280 
	C39.315647,249.285507 39.315239,206.677750 39.342258,164.069992 
	C39.343193,162.598999 39.666496,161.128220 40.269180,159.118439 
	C57.328083,140.609573 73.983887,122.664093 90.578964,104.662636 
	C106.375511,87.527382 122.108643,70.333664 137.869659,53.165657 
	C169.248444,53.109516 200.627213,53.045517 232.006012,53.001717 
	C242.300461,52.987347 252.594955,53.025383 263.205994,53.382843 
	C246.860168,71.855370 230.197754,89.984505 213.187302,108.230484 
	C211.015289,108.435631 209.191345,108.600220 207.367340,108.600983 
	C171.390366,108.616127 135.413391,108.612267 99.436409,108.612267 
	C97.478188,108.612267 95.519958,108.612267 92.925346,108.612267 
	C92.925346,110.900742 92.925346,112.680183 92.925346,114.459633 
	C92.925339,136.612122 92.951210,158.764648 92.917519,180.917084 
	C92.888138,200.233871 92.791580,219.550552 92.460800,239.058624 
	C74.755142,258.082336 57.313400,276.914673 39.871651,295.747009 
z`}),h("path",{fill:"#EB6549",opacity:"1.000000",stroke:"none",d:`
M1498.143799,839.184082 
	C1498.341675,840.460938 1498.711914,841.737732 1498.712769,843.014771 
	C1498.742920,884.939148 1498.737793,926.863464 1498.737793,968.787842 
	C1498.737793,969.930847 1498.737793,971.073914 1498.737793,972.970703 
	C1457.581665,972.970703 1416.746338,972.970703 1375.588623,972.609741 
	C1391.914917,954.133484 1408.563843,936.018250 1425.588135,917.790100 
	C1432.156616,917.677185 1438.349976,917.677185 1445.272949,917.677185 
	C1445.272949,909.881592 1445.272949,903.007446 1445.537476,895.942566 
	C1463.249268,876.895996 1480.696411,858.040039 1498.143799,839.184082 
z`}),h("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
M39.870956,801.752197 
	C39.685966,800.468079 39.340134,799.184021 39.339287,797.899780 
	C39.311111,755.289673 39.310726,712.679504 39.337811,670.069397 
	C39.338749,668.598450 39.662846,667.127686 40.266525,665.118530 
	C58.041271,645.817017 75.385803,627.053772 92.800400,608.725342 
	C92.889816,639.426208 92.933662,669.692200 92.918159,699.958191 
	C92.910492,714.920776 92.793419,729.883423 92.463608,745.041260 
	C74.757889,764.075073 57.314426,782.913635 39.870956,801.752197 
z`}),h("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
M39.878220,545.350586 
	C39.690655,543.905273 39.340187,542.460144 39.339191,541.014709 
	C39.309948,498.621826 39.309483,456.228912 39.338287,413.836060 
	C39.339401,412.199249 39.675247,410.562653 40.288425,408.386475 
	C41.077343,407.497040 41.447266,407.160400 41.786552,406.795288 
	C58.766129,388.523376 75.743118,370.249023 92.799088,352.439575 
	C92.894714,385.174591 92.932922,417.444977 92.918007,449.715393 
	C92.912086,462.519104 92.788322,475.322723 92.463837,488.310883 
	C89.286041,491.677521 86.365540,494.862396 83.438705,498.041473 
	C68.919456,513.812012 54.398533,529.580994 39.878220,545.350586 
z`}),h("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
M1498.146973,593.370361 
	C1498.344849,594.818359 1498.714478,596.266296 1498.715576,597.714478 
	C1498.746460,640.026917 1498.746582,682.339417 1498.717529,724.651855 
	C1498.716431,726.291748 1498.377808,727.931335 1497.774902,730.121094 
	C1479.993652,749.415955 1462.633911,768.160767 1445.199829,786.451416 
	C1445.106934,754.698853 1445.065430,723.400635 1445.080444,692.102356 
	C1445.087158,678.288635 1445.208496,664.474915 1445.505615,650.468018 
	C1463.204590,631.306702 1480.675781,612.338501 1498.146973,593.370361 
z`}),h("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
M1498.124756,87.018608 
	C1498.330078,88.464485 1498.713379,89.910194 1498.714478,91.356201 
	C1498.746460,133.684906 1498.746704,176.013626 1498.716553,218.342346 
	C1498.715332,219.975815 1498.363403,221.609009 1497.733154,223.776886 
	C1495.138062,226.622879 1492.984009,228.933716 1490.831421,231.245911 
	C1475.646606,247.556946 1460.462158,263.868408 1445.198608,279.700500 
	C1445.103027,248.614853 1445.063110,218.008423 1445.080444,187.402008 
	C1445.088623,172.934875 1445.206543,158.467819 1445.533936,143.812958 
	C1463.237061,124.756317 1480.680908,105.887451 1498.124756,87.018608 
z`}),h("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
M1498.126831,340.052704 
	C1498.331299,341.497681 1498.713379,342.942535 1498.714478,344.387634 
	C1498.746338,386.706238 1498.746704,429.024902 1498.716553,471.343506 
	C1498.715332,472.976562 1498.363281,474.609344 1497.733154,476.776855 
	C1495.145752,479.629089 1493.006226,481.952454 1490.853516,484.263489 
	C1475.662964,500.570251 1460.469727,516.874573 1445.198486,532.700439 
	C1445.103027,501.951813 1445.062622,471.682343 1445.080322,441.412842 
	C1445.088989,426.615051 1445.205933,411.817352 1445.535645,396.833374 
	C1463.240479,377.782349 1480.683594,358.917511 1498.126831,340.052704 
z`}),h("path",{fill:"#EB6549",opacity:"1.000000",stroke:"none",d:`
M114.802094,972.837524 
	C89.857407,972.837524 64.912704,972.837524 39.320732,972.837524 
	C39.320732,970.699829 39.320736,968.756470 39.320736,966.813110 
	C39.320736,952.329773 39.301437,937.846313 39.343334,923.363098 
	C39.349049,921.386841 39.660152,919.411499 40.240280,916.881653 
	C58.007488,897.583252 75.364273,878.838928 92.795563,860.548828 
	C92.870064,879.697571 92.870064,898.392090 92.870064,917.388672 
	C115.539627,917.388672 137.300934,917.375610 159.062195,917.411011 
	C161.024261,917.414246 162.985794,917.730835 164.783478,918.192261 
	C158.063370,925.543518 151.465271,932.565979 144.961105,939.674316 
	C134.874481,950.697998 124.851845,961.780151 114.802094,972.837524 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M1273.983521,972.833984 
	C1241.607544,972.889282 1209.231689,972.950684 1176.855713,972.996216 
	C1167.557251,973.009338 1158.258667,972.976624 1148.639526,972.608765 
	C1164.953735,954.139282 1181.588745,936.025879 1198.668945,917.851135 
	C1219.708130,917.767578 1240.302002,917.711060 1260.895996,917.732666 
	C1281.984863,917.754822 1303.073730,917.853577 1323.999878,918.221680 
	C1307.219360,936.627625 1290.601440,954.730835 1273.983521,972.833984 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M837.913879,53.166496 
	C869.957581,53.110939 902.001221,53.048553 934.044922,53.003979 
	C943.675354,52.990585 953.305969,53.026779 963.252991,53.386276 
	C946.920349,71.850632 930.271240,89.968971 913.191101,108.148628 
	C890.168396,108.232292 867.576538,108.287918 844.984863,108.266754 
	C825.885254,108.248856 806.785706,108.141998 787.860962,107.770409 
	C804.661743,89.366364 821.287842,71.266434 837.913879,53.166496 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M805.983582,972.833984 
	C773.605164,972.889282 741.226746,972.950623 708.848328,972.996216 
	C699.549133,973.009338 690.249878,972.977234 680.629761,972.608765 
	C696.946472,954.138611 713.584045,936.025574 730.666992,917.851257 
	C751.706665,917.767700 772.301147,917.711060 792.895447,917.732666 
	C813.984802,917.754761 835.074036,917.853577 856.000488,918.221558 
	C839.219666,936.627563 822.601624,954.730774 805.983582,972.833984 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M348.243408,972.832397 
	C316.866241,972.888245 285.489105,972.951843 254.111954,972.995605 
	C243.818069,973.009949 233.524139,972.972595 222.911011,972.621155 
	C228.701324,965.700012 234.841675,959.144836 240.913559,952.526794 
	C251.479584,941.010254 262.003326,929.454956 272.959412,917.856445 
	C297.955505,917.772400 322.537018,917.715698 347.118439,917.734009 
	C364.221924,917.746765 381.325317,917.862427 398.239532,918.232605 
	C394.920349,921.970398 391.802521,925.418762 388.658386,928.842957 
	C375.190948,943.510010 361.715759,958.169861 348.243408,972.832397 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M1071.398193,53.155235 
	C1113.046753,53.113602 1154.695312,53.071972 1196.661621,53.399879 
	C1190.364746,60.982296 1183.744629,68.190140 1177.136597,75.409248 
	C1167.172119,86.295441 1157.216064,97.189529 1146.859863,108.142960 
	C1119.548218,108.229424 1092.632812,108.281998 1065.717529,108.265526 
	C1050.934692,108.256477 1036.151855,108.131096 1021.573242,107.758591 
	C1028.506714,100.134491 1035.254150,92.826294 1041.961304,85.481506 
	C1051.788696,74.719856 1061.587280,63.931973 1071.398193,53.155235 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M605.149719,53.164337 
	C638.476440,53.109497 671.803223,53.050064 705.129944,53.003052 
	C713.462280,52.991299 721.794617,53.019512 730.456665,53.397125 
	C727.080444,57.805660 723.376770,61.848526 719.668152,65.886826 
	C706.748657,79.954559 693.827515,94.020737 680.450562,108.149750 
	C660.404175,108.233650 640.814026,108.289703 621.224060,108.267838 
	C599.146790,108.243202 577.069702,108.148399 555.145142,107.784470 
	C571.915100,89.378006 588.532410,71.271172 605.149719,53.164337 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M1039.891357,972.834229 
	C1007.516846,972.889465 975.142273,972.950378 942.767761,972.996460 
	C933.469666,973.009705 924.171631,972.980347 914.546082,972.604065 
	C916.666016,969.523193 919.089844,966.787170 921.564575,964.097900 
	C935.736938,948.696899 949.921448,933.307007 964.557434,917.851318 
	C985.268921,917.767212 1005.524841,917.710938 1025.780640,917.732544 
	C1047.195557,917.755432 1068.610596,917.852478 1089.867432,918.214600 
	C1084.859497,923.753784 1079.987183,928.974670 1075.164429,934.241150 
	C1063.394531,947.094299 1051.647583,959.968506 1039.891357,972.834229 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M368.148041,53.164352 
	C401.182648,53.109520 434.217255,53.049778 467.251862,53.003162 
	C475.884674,52.990978 484.517517,53.019615 493.478516,53.397339 
	C491.361847,56.480831 488.941772,59.219254 486.468109,61.908409 
	C472.303375,77.307289 458.125854,92.694473 443.492493,108.147797 
	C423.109436,108.232292 403.186554,108.289154 383.263702,108.267647 
	C361.517578,108.244164 339.771545,108.148117 318.183289,107.789062 
	C325.127869,100.197945 331.962616,92.945366 338.690033,85.594589 
	C348.549683,74.821388 358.332489,63.977886 368.148041,53.164352 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M575.851929,972.835693 
	C542.817383,972.890442 509.782806,972.950073 476.748230,972.996704 
	C468.115448,973.008911 459.482574,972.980408 450.521667,972.602661 
	C452.637970,969.519531 455.057709,966.781555 457.530914,964.092834 
	C471.696167,948.693604 485.874054,933.305908 500.507812,917.852173 
	C520.890808,917.767700 540.813660,917.710999 560.736450,917.732483 
	C582.482544,917.755981 604.228455,917.851929 625.816650,918.210938 
	C619.093811,925.554138 612.477234,932.555603 605.975464,939.662170 
	C595.893188,950.682434 585.889160,961.774231 575.851929,972.835693 
z`}),h("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M1298.905518,53.166557 
	C1330.951172,53.110989 1362.996826,53.048584 1395.042480,53.003990 
	C1404.673584,52.990585 1414.304688,53.026764 1424.252075,53.386066 
	C1407.917358,71.850449 1391.266235,89.968994 1374.184814,108.148827 
	C1351.161377,108.232399 1328.568359,108.287964 1305.975220,108.266716 
	C1286.874512,108.248749 1267.773804,108.141792 1248.852539,107.772614 
	C1252.169678,104.038162 1255.299805,100.598160 1258.446899,97.173759 
	C1271.930420,82.502190 1285.418823,67.835197 1298.905518,53.166557 
z`}),h("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M39.906380,545.877197 
	C54.398533,529.580994 68.919456,513.812012 83.438705,498.041473 
	C86.365540,494.862396 89.286041,491.677521 92.535538,488.763977 
	C92.880577,502.838959 92.932014,516.645325 92.911545,530.451599 
	C92.873077,556.397888 92.793068,582.344238 92.730339,608.290527 
	C75.385803,627.053772 58.041271,645.817017 40.408951,664.718689 
	C40.066551,630.704285 40.011818,596.551453 39.957447,562.398621 
	C39.948959,557.067017 39.942139,551.735474 39.906380,545.877197 
z`}),h("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M1445.277466,533.179688 
	C1460.469727,516.874573 1475.662964,500.570251 1490.853516,484.263489 
	C1493.006226,481.952454 1495.145752,479.629089 1497.583740,477.168030 
	C1497.932983,509.812653 1497.990112,542.600708 1498.046021,575.388794 
	C1498.055786,581.048157 1498.060425,586.707581 1498.107178,592.868652 
	C1480.675781,612.338501 1463.204590,631.306702 1445.436401,650.036377 
	C1445.118896,633.516479 1445.063110,617.234985 1445.086548,600.953613 
	C1445.119141,578.362244 1445.210938,555.770996 1445.277466,533.179688 
z`}),h("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M1498.107910,339.578308 
	C1480.683594,358.917511 1463.240479,377.782349 1445.460327,396.367340 
	C1445.108276,380.431763 1445.060791,364.776001 1445.085815,349.120331 
	C1445.122437,326.140076 1445.211060,303.159882 1445.277588,280.179688 
	C1460.462158,263.868408 1475.646606,247.556946 1490.831421,231.245911 
	C1492.984009,228.933716 1495.138062,226.622879 1497.583740,224.168030 
	C1497.932983,256.405914 1497.989258,288.787201 1498.046997,321.168488 
	C1498.057739,327.146973 1498.074707,333.125458 1498.107910,339.578308 
z`}),h("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M92.721069,860.094604 
	C75.364273,878.838928 58.007488,897.583252 40.386940,916.467407 
	C40.067890,883.478149 40.012756,850.348999 39.957157,817.219849 
	C39.949051,812.391602 39.938702,807.563354 39.900177,802.243652 
	C57.314426,782.913635 74.757889,764.075073 92.538406,745.520203 
	C92.889816,759.447021 92.935089,773.090149 92.911766,786.733215 
	C92.869957,811.187012 92.786888,835.640808 92.721069,860.094604 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M443.952667,108.085617 
	C458.125854,92.694473 472.303375,77.307289 486.468109,61.908409 
	C488.941772,59.219254 491.361847,56.480831 493.948334,53.466110 
	C530.791199,53.121525 567.492310,53.076004 604.671631,53.097412 
	C588.532410,71.271172 571.915100,89.378006 554.682434,107.852142 
	C538.619812,108.245804 523.172424,108.312172 507.725159,108.288788 
	C486.467621,108.256615 465.210175,108.156578 443.952667,108.085617 
z`}),h("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M92.720383,351.974945 
	C75.743118,370.249023 58.766129,388.523376 41.786552,406.795288 
	C41.447266,407.160400 41.077343,407.497040 40.425568,408.005493 
	C40.072041,375.850403 40.014767,343.536774 39.957222,311.223175 
	C39.948620,306.392365 39.938744,301.561554 39.900558,296.238892 
	C57.313400,276.914673 74.755142,258.082336 92.536194,239.535278 
	C92.889839,252.283478 92.934425,264.746429 92.912155,277.209259 
	C92.867607,302.131195 92.786430,327.053040 92.720383,351.974945 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M1040.365234,972.901978 
	C1051.647583,959.968506 1063.394531,947.094299 1075.164429,934.241150 
	C1079.987183,928.974670 1084.859497,923.753784 1090.328613,918.148071 
	C1103.589355,917.756470 1116.230713,917.688721 1128.871948,917.710327 
	C1151.989136,917.749878 1175.106445,917.842163 1198.223633,917.912476 
	C1181.588745,936.025879 1164.953735,954.139282 1148.177246,972.543091 
	C1112.303467,972.878845 1076.571289,972.924255 1040.365234,972.901978 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M964.101807,917.913330 
	C949.921448,933.307007 935.736938,948.696899 921.564575,964.097900 
	C919.089844,966.787170 916.666016,969.523193 914.078003,972.535522 
	C878.263733,972.878418 842.590210,972.923401 806.450073,972.901123 
	C822.601624,954.730774 839.219666,936.627563 856.449829,918.155273 
	C870.007446,917.758057 882.952942,917.688721 895.898254,917.710510 
	C918.632874,917.748779 941.367310,917.842712 964.101807,917.913330 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M1070.898193,53.092964 
	C1061.587280,63.931973 1051.788696,74.719856 1041.961304,85.481506 
	C1035.254150,92.826294 1028.506714,100.134491 1021.169189,107.831177 
	C1008.233826,108.235054 995.906616,108.309662 983.579468,108.289299 
	C960.260254,108.250771 936.941223,108.157707 913.622070,108.087311 
	C930.271240,89.968971 946.920349,71.850632 963.708191,53.448784 
	C999.364014,53.120415 1034.881104,53.075550 1070.898193,53.092964 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M272.544800,917.915894 
	C262.003326,929.454956 251.479584,941.010254 240.913559,952.526794 
	C234.841675,959.144836 228.701324,965.700012 222.467636,972.560730 
	C186.818237,972.881897 151.292984,972.925720 115.284912,972.903564 
	C124.851845,961.780151 134.874481,950.697998 144.961105,939.674316 
	C151.465271,932.565979 158.063370,925.543518 165.253540,918.128235 
	C178.847275,917.749817 191.806931,917.686951 204.766403,917.710205 
	C227.359253,917.750854 249.952011,917.844482 272.544800,917.915894 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M680.906982,108.087502 
	C693.827515,94.020737 706.748657,79.954559 719.668152,65.886826 
	C723.376770,61.848526 727.080444,57.805660 730.924805,53.465813 
	C766.374573,53.123405 801.685852,53.080086 837.455566,53.101631 
	C821.287842,71.266434 804.661743,89.366364 787.425171,107.838997 
	C775.157288,108.240631 763.499939,108.310440 751.842651,108.289932 
	C728.197388,108.248322 704.552185,108.157837 680.906982,108.087502 
z`}),h("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M1374.615112,108.087524 
	C1391.266235,89.968994 1407.917358,71.850449 1424.707275,53.448460 
	C1449.047729,53.165012 1473.249390,53.165012 1498.090332,53.165012 
	C1498.090332,64.281425 1498.090332,75.177948 1498.107544,86.546524 
	C1480.680908,105.887451 1463.237061,124.756317 1445.459717,143.348480 
	C1445.126221,131.642365 1445.126221,120.212952 1445.126221,108.299049 
	C1442.482788,108.299049 1440.520508,108.304550 1438.558105,108.298187 
	C1417.243774,108.229027 1395.929443,108.158020 1374.615112,108.087524 
z`}),h("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M1445.274292,786.905640 
	C1462.633911,768.160767 1479.993652,749.415955 1497.618164,730.533081 
	C1497.937622,762.507385 1497.991699,794.619690 1498.046997,826.731934 
	C1498.053589,830.559021 1498.067383,834.386169 1498.110840,838.698669 
	C1480.696411,858.040039 1463.249268,876.895996 1445.461670,895.465942 
	C1445.106934,886.197754 1445.065796,877.215515 1445.082886,868.233398 
	C1445.134521,841.124146 1445.208862,814.014893 1445.274292,786.905640 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M367.670776,53.097324 
	C358.332489,63.977886 348.549683,74.821388 338.690033,85.594589 
	C331.962616,92.945366 325.127869,100.197945 317.717773,107.856064 
	C282.574768,108.183022 248.055054,108.148331 213.535339,108.113647 
	C230.197754,89.984505 246.860168,71.855370 263.657867,53.444756 
	C298.259949,53.118954 332.726746,53.074631 367.670776,53.097324 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M576.329224,972.902710 
	C585.889160,961.774231 595.893188,950.682434 605.975464,939.662170 
	C612.477234,932.555603 619.093811,925.554138 626.282227,918.143921 
	C636.722107,917.755371 646.538818,917.690002 656.355347,917.708923 
	C680.977478,917.756470 705.599548,917.842163 730.221680,917.912537 
	C713.584045,936.025574 696.946472,954.138611 680.166931,972.542419 
	C645.618835,972.878723 611.212646,972.924255 576.329224,972.902710 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M500.047668,917.914368 
	C485.874054,933.305908 471.696167,948.693604 457.530914,964.092834 
	C455.057709,966.781555 452.637970,969.519531 450.051880,972.533875 
	C416.317474,972.874573 382.724792,972.916199 348.687744,972.895142 
	C361.715759,958.169861 375.190948,943.510010 388.658386,928.842957 
	C391.802521,925.418762 394.920349,921.970398 398.664093,918.164612 
	C408.091492,917.764526 416.905151,917.691895 425.718628,917.709229 
	C450.495026,917.757751 475.271332,917.843384 500.047668,917.914368 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M1298.447754,53.101948 
	C1285.418823,67.835197 1271.930420,82.502190 1258.446899,97.173759 
	C1255.299805,100.598160 1252.169678,104.038162 1248.418091,107.841530 
	C1238.346313,108.240906 1228.888184,108.310005 1219.430298,108.290710 
	C1195.372314,108.241631 1171.314331,108.153015 1147.256348,108.080238 
	C1157.216064,97.189529 1167.172119,86.295441 1177.136597,75.409248 
	C1183.744629,68.190140 1190.364746,60.982296 1197.145508,53.468807 
	C1230.870972,53.124577 1264.430420,53.080959 1298.447754,53.101948 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M1274.449951,972.901123 
	C1290.601440,954.730835 1307.219360,936.627625 1324.449341,918.155518 
	C1358.445312,917.825378 1391.828979,917.864258 1425.212769,917.903076 
	C1408.563843,936.018250 1391.914917,954.133484 1375.123047,972.542114 
	C1341.625488,972.879700 1308.270874,972.923950 1274.449951,972.901123 
z`}),h("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M137.414673,53.102413 
	C122.108643,70.333664 106.375511,87.527382 90.578964,104.662636 
	C73.983887,122.664093 57.328083,140.609573 40.411430,158.718521 
	C40.124046,123.779625 40.124046,88.701729 40.124046,53.039169 
	C72.526711,53.039169 104.743195,53.039169 137.414673,53.102413 
z`}),h("path",{fill:"#FEF2DB",opacity:"1.000000",stroke:"none",d:`
M1425.588135,917.790161 
	C1391.828979,917.864258 1358.445312,917.825378 1324.612061,917.852661 
	C1303.073730,917.853577 1281.984863,917.754822 1260.895996,917.732666 
	C1240.302002,917.711060 1219.708130,917.767578 1198.668945,917.851135 
	C1175.106445,917.842163 1151.989136,917.749878 1128.871948,917.710327 
	C1116.230713,917.688721 1103.589355,917.756470 1090.486816,917.850586 
	C1068.610596,917.852478 1047.195557,917.755432 1025.780640,917.732544 
	C1005.524841,917.710938 985.268921,917.767212 964.557495,917.851318 
	C941.367310,917.842712 918.632874,917.748779 895.898254,917.710510 
	C882.952942,917.688721 870.007446,917.758057 856.612671,917.852539 
	C835.074036,917.853577 813.984802,917.754761 792.895447,917.732666 
	C772.301147,917.711060 751.706665,917.767700 730.666992,917.851257 
	C705.599548,917.842163 680.977478,917.756470 656.355347,917.708923 
	C646.538818,917.690002 636.722107,917.755371 626.440002,917.849304 
	C604.228455,917.851929 582.482544,917.755981 560.736450,917.732483 
	C540.813660,917.710999 520.890808,917.767700 500.507812,917.852173 
	C475.271332,917.843384 450.495026,917.757751 425.718628,917.709229 
	C416.905151,917.691895 408.091492,917.764526 398.853333,917.864075 
	C381.325317,917.862427 364.221924,917.746765 347.118439,917.734009 
	C322.537018,917.715698 297.955505,917.772400 272.959412,917.856506 
	C249.952011,917.844482 227.359253,917.750854 204.766403,917.710205 
	C191.806931,917.686951 178.847275,917.749817 165.417648,917.837952 
	C162.985794,917.730835 161.024261,917.414246 159.062195,917.411011 
	C137.300934,917.375610 115.539627,917.388672 92.870064,917.388672 
	C92.870064,898.392090 92.870064,879.697571 92.795563,860.548828 
	C92.786888,835.640808 92.869957,811.187012 92.911766,786.733215 
	C92.935089,773.090149 92.889816,759.447021 92.800659,745.324951 
	C92.793419,729.883423 92.910492,714.920776 92.918159,699.958191 
	C92.933662,669.692200 92.889816,639.426208 92.800400,608.725342 
	C92.793068,582.344238 92.873077,556.397888 92.911545,530.451599 
	C92.932014,516.645325 92.880577,502.838959 92.789902,488.579529 
	C92.788322,475.322723 92.912086,462.519104 92.918007,449.715393 
	C92.932922,417.444977 92.894714,385.174591 92.799088,352.439575 
	C92.786430,327.053040 92.867607,302.131195 92.912155,277.209259 
	C92.934425,264.746429 92.889839,252.283478 92.800102,239.343933 
	C92.791580,219.550552 92.888138,200.233871 92.917519,180.917084 
	C92.951210,158.764648 92.925339,136.612122 92.925346,114.459633 
	C92.925346,112.680183 92.925346,110.900742 92.925346,108.612267 
	C95.519958,108.612267 97.478188,108.612267 99.436409,108.612267 
	C135.413391,108.612267 171.390366,108.616127 207.367340,108.600983 
	C209.191345,108.600220 211.015289,108.435631 213.187302,108.230484 
	C248.055054,108.148331 282.574768,108.183022 317.559967,108.150703 
	C339.771545,108.148117 361.517578,108.244164 383.263702,108.267647 
	C403.186554,108.289154 423.109436,108.232292 443.492493,108.147781 
	C465.210175,108.156578 486.467621,108.256615 507.725159,108.288788 
	C523.172424,108.312172 538.619812,108.245804 554.529785,108.151779 
	C577.069702,108.148399 599.146790,108.243202 621.224060,108.267838 
	C640.814026,108.289703 660.404175,108.233650 680.450562,108.149750 
	C704.552185,108.157837 728.197388,108.248322 751.842651,108.289932 
	C763.499939,108.310440 775.157288,108.240631 787.250366,108.143105 
	C806.785706,108.141998 825.885254,108.248856 844.984863,108.266754 
	C867.576538,108.287918 890.168396,108.232292 913.191101,108.148628 
	C936.941223,108.157707 960.260254,108.250771 983.579468,108.289299 
	C995.906616,108.309662 1008.233826,108.235054 1020.965027,108.130745 
	C1036.151855,108.131096 1050.934692,108.256477 1065.717529,108.265526 
	C1092.632812,108.281998 1119.548218,108.229424 1146.859863,108.142944 
	C1171.314331,108.153015 1195.372314,108.241631 1219.430298,108.290710 
	C1228.888184,108.310005 1238.346313,108.240906 1248.238770,108.143135 
	C1267.773804,108.141792 1286.874512,108.248749 1305.975220,108.266716 
	C1328.568359,108.287964 1351.161377,108.232399 1374.184814,108.148819 
	C1395.929443,108.158020 1417.243774,108.229027 1438.558105,108.298187 
	C1440.520508,108.304550 1442.482788,108.299049 1445.126221,108.299049 
	C1445.126221,120.212952 1445.126221,131.642365 1445.200439,143.536255 
	C1445.206543,158.467819 1445.088623,172.934875 1445.080444,187.402008 
	C1445.063110,218.008423 1445.103027,248.614853 1445.198486,279.700470 
	C1445.211060,303.159882 1445.122437,326.140076 1445.085815,349.120331 
	C1445.060791,364.776001 1445.108276,380.431763 1445.198730,396.553528 
	C1445.205933,411.817352 1445.088989,426.615051 1445.080322,441.412842 
	C1445.062622,471.682343 1445.103027,501.951813 1445.198486,532.700500 
	C1445.210938,555.770996 1445.119141,578.362244 1445.086548,600.953613 
	C1445.063110,617.234985 1445.118896,633.516479 1445.208496,650.229553 
	C1445.208496,664.474915 1445.087158,678.288635 1445.080444,692.102356 
	C1445.065430,723.400635 1445.106934,754.698853 1445.199829,786.451416 
	C1445.208862,814.014893 1445.134521,841.124146 1445.082886,868.233398 
	C1445.065796,877.215515 1445.106934,886.197754 1445.197144,895.656616 
	C1445.272949,903.007446 1445.272949,909.881592 1445.272949,917.677185 
	C1438.349976,917.677185 1432.156616,917.677185 1425.588135,917.790161 
M1107.035156,255.500015 
	C1107.239258,280.969421 1107.563843,306.438599 1107.606079,331.908264 
	C1107.634888,349.331268 1107.202515,366.754547 1107.100830,384.178436 
	C1107.006714,400.293671 1107.005981,416.410400 1107.117798,432.525421 
	C1107.154541,437.825470 1107.554932,443.132141 1108.005615,448.417297 
	C1108.359375,452.565765 1110.330811,455.235992 1115.014526,455.076965 
	C1118.799072,454.948486 1122.591431,455.049347 1126.380249,455.048889 
	C1144.164795,455.046844 1161.949463,455.048309 1179.734009,455.042419 
	C1246.048462,455.020477 1312.362793,454.999298 1378.677246,454.969116 
	C1387.712769,454.965027 1390.980347,451.644409 1390.978027,442.674744 
	C1390.960815,375.701874 1390.954956,308.729004 1390.948608,241.756119 
	C1390.946411,217.764374 1390.952759,193.772644 1390.955444,169.780899 
	C1390.956299,162.357391 1387.745117,159.020065 1380.506104,159.089767 
	C1377.032959,159.123215 1373.562256,159.491684 1370.090210,159.496796 
	C1349.735107,159.526749 1329.379883,159.455322 1309.024902,159.502884 
	C1301.484863,159.520508 1293.945923,159.851135 1286.405518,159.892059 
	C1273.651855,159.961258 1260.897705,159.919693 1248.143677,159.910034 
	C1245.479004,159.908020 1242.813965,159.863083 1240.149902,159.801666 
	C1234.582031,159.673309 1229.014893,159.403366 1223.447388,159.405304 
	C1214.822388,159.408295 1206.196777,159.703201 1197.572388,159.669327 
	C1184.720825,159.618851 1171.869995,159.294846 1159.018677,159.276932 
	C1152.602905,159.267990 1146.185303,159.883469 1139.770874,159.846588 
	C1132.696655,159.805939 1125.626953,159.246475 1118.551392,159.092712 
	C1113.368042,158.980057 1109.348022,160.987610 1108.249390,166.485123 
	C1107.549561,169.987213 1107.085205,173.604279 1107.096313,177.167984 
	C1107.131470,188.474777 1107.612915,199.780930 1107.598511,211.086929 
	C1107.580078,225.558182 1107.247070,240.029053 1107.035156,255.500015 
M921.024353,664.500000 
	C921.024353,487.841644 921.024414,311.183289 921.023682,134.524948 
	C921.023682,132.858398 921.355469,131.091629 920.904785,129.555893 
	C920.518372,128.239288 919.231201,127.187042 918.342407,126.017860 
	C917.253540,127.174904 915.901855,128.189087 915.168091,129.539169 
	C914.677429,130.441925 915.060547,131.822113 915.060547,132.988678 
	C915.059814,384.310181 915.054993,635.631653 915.124207,886.953186 
	C915.124939,889.553345 913.484009,893.971741 918.303589,893.791870 
	C922.646179,893.629700 920.952087,889.454773 920.954956,886.989502 
	C921.040283,813.159729 921.024353,739.329834 921.024353,664.500000 
M1255.500000,569.000000 
	C1298.665283,569.000000 1341.830688,569.034546 1384.995605,568.903076 
	C1387.278564,568.896118 1391.563477,567.331238 1391.519287,566.749268 
	C1391.180786,562.285278 1387.346313,564.078613 1384.927246,564.076965 
	C1256.598022,563.989807 1128.268921,563.988220 999.939758,564.095703 
	C997.669006,564.097595 993.407532,565.661743 993.447510,566.278076 
	C993.741394,570.806824 997.617859,568.914917 1000.008301,568.917725 
	C1084.838745,569.016052 1169.669434,569.000000 1255.500000,569.000000 
M1378.479248,708.937744 
	C1252.012451,708.937744 1125.545654,708.929321 999.078857,709.015747 
	C997.090088,709.017151 993.349182,710.335693 993.387695,710.786438 
	C993.735229,714.852783 997.171631,712.966248 999.198486,712.967896 
	C1127.831299,713.072571 1256.464233,713.062317 1385.097168,713.060547 
	C1386.429810,713.060547 1387.819458,713.264221 1389.076416,712.949219 
	C1390.036621,712.708740 1390.828613,711.797302 1391.695435,711.184387 
	C1390.785156,710.444092 1389.924194,709.151611 1388.955566,709.065125 
	C1385.814209,708.784607 1382.633179,708.946289 1378.479248,708.937744 
M1115.500000,641.062256 
	C1205.141846,641.062256 1294.783691,641.079468 1384.425415,640.969727 
	C1386.849609,640.966736 1389.272095,639.591675 1391.695435,638.856445 
	C1389.343018,638.216919 1386.990967,637.019409 1384.638184,637.017761 
	C1256.340454,636.927612 1128.042603,636.937805 999.744873,636.938171 
	C998.578552,636.938171 997.313843,636.659973 996.272034,637.021545 
	C995.113403,637.423645 994.157837,638.410889 993.113953,639.143433 
	C994.086914,639.779541 994.986023,640.702271 996.052124,640.977051 
	C997.302856,641.299500 998.698792,641.061707 1000.031738,641.061707 
	C1038.187866,641.062317 1076.343872,641.062317 1115.500000,641.062256 
z`}),h("path",{fill:"#EEC79C",opacity:"1.000000",stroke:"none",d:`
M1107.042358,255.000046 
	C1107.247070,240.029053 1107.580078,225.558182 1107.598511,211.086929 
	C1107.612915,199.780930 1107.131470,188.474777 1107.096313,177.167984 
	C1107.085205,173.604279 1107.549561,169.987213 1108.249390,166.485123 
	C1109.348022,160.987610 1113.368042,158.980057 1118.551392,159.092712 
	C1125.626953,159.246475 1132.696655,159.805939 1139.770874,159.846588 
	C1146.185303,159.883469 1152.602905,159.267990 1159.018677,159.276932 
	C1171.869995,159.294846 1184.720825,159.618851 1197.572388,159.669327 
	C1206.196777,159.703201 1214.822388,159.408295 1223.447388,159.405304 
	C1229.014893,159.403366 1234.582031,159.673309 1240.149902,159.801666 
	C1242.813965,159.863083 1245.479004,159.908020 1248.143677,159.910034 
	C1260.897705,159.919693 1273.651855,159.961258 1286.405518,159.892059 
	C1293.945923,159.851135 1301.484863,159.520508 1309.024902,159.502884 
	C1329.379883,159.455322 1349.735107,159.526749 1370.090210,159.496796 
	C1373.562256,159.491684 1377.032959,159.123215 1380.506104,159.089767 
	C1387.745117,159.020065 1390.956299,162.357391 1390.955444,169.780899 
	C1390.952759,193.772644 1390.946411,217.764374 1390.948608,241.756119 
	C1390.954956,308.729004 1390.960815,375.701874 1390.978027,442.674744 
	C1390.980347,451.644409 1387.712769,454.965027 1378.677246,454.969116 
	C1312.362793,454.999298 1246.048462,455.020477 1179.734009,455.042419 
	C1161.949463,455.048309 1144.164795,455.046844 1126.380249,455.048889 
	C1122.591431,455.049347 1118.799072,454.948486 1115.014526,455.076965 
	C1110.330811,455.235992 1108.359375,452.565765 1108.005615,448.417297 
	C1107.554932,443.132141 1107.154541,437.825470 1107.117798,432.525421 
	C1107.005981,416.410400 1107.006714,400.293671 1107.100830,384.178436 
	C1107.202515,366.754547 1107.634888,349.331268 1107.606079,331.908264 
	C1107.563843,306.438599 1107.239258,280.969421 1107.042358,255.000046 
M1125.217773,446.370728 
	C1127.283936,447.580109 1129.214355,449.355072 1131.442383,449.889221 
	C1137.320557,451.298431 1140.844360,447.284149 1143.812744,442.866364 
	C1151.721802,452.346680 1155.926636,452.526581 1164.201782,445.083649 
	C1168.891479,446.855560 1173.142090,449.815857 1177.258911,449.640076 
	C1181.463501,449.460602 1185.536743,446.202606 1190.038696,444.120636 
	C1198.688843,453.148315 1207.675659,452.224762 1215.426880,443.061584 
	C1232.249512,452.647797 1232.708740,452.653046 1242.176880,443.366028 
	C1250.634155,452.240204 1256.879395,451.953949 1264.585571,444.013519 
	C1269.151978,446.153442 1273.314087,449.656158 1277.432983,449.606049 
	C1281.718872,449.553894 1285.963013,446.070435 1290.817749,443.811707 
	C1298.417847,452.828430 1307.446533,451.665161 1316.519043,443.876190 
	C1322.755493,451.616425 1329.949829,453.120209 1339.857788,444.638947 
	C1344.458984,446.527618 1348.647461,449.597473 1352.812622,449.566040 
	C1356.754395,449.536316 1360.671753,446.251831 1365.185181,444.122711 
	C1373.600952,450.557587 1378.871460,451.213959 1383.745117,445.761475 
	C1387.859741,441.158386 1386.679810,435.181213 1380.201416,428.579010 
	C1390.079590,420.659454 1389.507446,412.538879 1379.605347,404.684784 
	C1384.507324,401.659302 1387.883789,397.974121 1386.777100,392.931061 
	C1385.807129,388.510223 1383.135376,384.462799 1381.012085,379.804626 
	C1388.087280,371.398407 1388.238281,368.545837 1381.070190,358.557922 
	C1379.357056,356.170959 1380.178833,354.923584 1382.079590,353.176300 
	C1388.336182,347.424255 1387.865601,340.126526 1381.093750,335.056030 
	C1380.319092,334.475861 1379.316650,334.199799 1378.419922,333.782715 
	C1379.153564,333.625671 1379.887207,333.468597 1380.620850,333.311523 
	C1382.415283,329.325409 1385.763916,325.266571 1385.581787,321.372894 
	C1385.386597,317.196991 1381.870728,313.176422 1379.658203,308.799347 
	C1388.480225,299.397552 1388.498047,297.320282 1379.296021,284.039581 
	C1388.038086,275.864990 1388.038086,275.864990 1378.997803,263.704102 
	C1389.619629,254.576782 1386.822021,245.045578 1378.672729,235.700531 
	C1391.586304,227.468994 1384.398926,219.478516 1378.872925,211.910110 
	C1388.126465,204.071915 1388.110229,199.793777 1379.111450,186.617188 
	C1380.497681,185.107239 1382.073730,183.637360 1383.358154,181.945999 
	C1387.518311,176.468643 1386.540405,169.316483 1381.383789,166.767273 
	C1375.138428,163.679855 1361.811646,166.416458 1357.343506,171.969910 
	C1354.548706,168.199417 1351.811768,163.664612 1346.306519,165.104935 
	C1341.939575,166.247467 1337.854858,168.469254 1333.134155,170.423187 
	C1326.365845,164.072006 1321.760132,163.844986 1313.756714,170.008011 
	C1312.985596,170.601929 1310.846191,170.738144 1310.381592,170.195999 
	C1307.506836,166.841248 1303.728638,164.899261 1299.783691,166.245590 
	C1296.273560,167.443527 1293.383911,170.459839 1289.861328,172.924835 
	C1277.548706,163.879608 1275.905151,163.734344 1268.011963,170.523849 
	C1263.671631,168.840042 1260.010132,166.233398 1256.456787,166.373215 
	C1252.871826,166.514282 1249.394043,169.380585 1246.522949,170.742798 
	C1243.028198,169.222839 1239.272705,166.159393 1235.871460,166.512146 
	C1232.467896,166.865143 1229.418457,170.632278 1226.987427,172.354721 
	C1222.953247,170.330887 1218.877319,167.550125 1214.372803,166.210770 
	C1208.607788,164.496582 1205.063965,169.019516 1201.831909,173.021988 
	C1193.034058,163.505508 1186.039062,163.331726 1179.666504,171.044540 
	C1175.530396,169.261581 1171.694458,166.411133 1167.735962,166.229431 
	C1163.559204,166.037735 1159.265625,168.392151 1155.024048,169.633926 
	C1151.846191,168.301147 1148.087036,166.019058 1144.032593,165.202087 
	C1138.922485,164.172379 1135.463257,167.560837 1133.117920,171.973587 
	C1132.376953,171.436981 1131.806274,171.242004 1131.630249,170.863571 
	C1129.047974,165.308105 1123.916016,166.480087 1119.868774,167.353699 
	C1117.307861,167.906464 1113.963257,170.918137 1113.417480,173.371490 
	C1112.462036,177.665695 1111.423950,183.124863 1116.073853,186.257080 
	C1119.894043,188.830383 1119.263550,190.972534 1117.030396,193.967361 
	C1114.185791,197.782074 1111.856445,201.938583 1113.956055,206.854553 
	C1115.520996,210.518875 1117.580444,213.972076 1119.475464,217.626694 
	C1111.783447,226.032379 1112.002686,232.337189 1118.821533,240.122253 
	C1118.602905,240.518539 1118.435547,240.999191 1118.125977,241.356369 
	C1111.731567,248.732132 1111.771851,253.209900 1117.920410,260.820679 
	C1118.538330,261.585541 1118.182129,263.955261 1117.424683,264.883820 
	C1111.362549,272.314819 1111.411743,276.740295 1117.931641,283.406647 
	C1118.581299,284.070923 1119.100586,284.862610 1119.655396,285.563721 
	C1110.483154,294.631256 1110.608032,302.907532 1118.738525,310.016846 
	C1110.865479,321.674744 1110.865601,322.927551 1118.997314,334.296234 
	C1111.869141,340.619598 1110.691284,347.420502 1118.028076,354.678497 
	C1118.641602,355.285370 1118.439575,357.558075 1117.791138,358.469788 
	C1110.708374,368.426453 1110.872437,373.127289 1118.873657,381.376984 
	C1109.817139,395.729370 1111.295288,398.171234 1118.122925,406.325195 
	C1116.308960,410.507416 1113.280029,414.356934 1113.384888,418.119171 
	C1113.492676,421.986938 1116.659058,425.769501 1118.727173,430.091309 
	C1113.282104,432.683044 1111.665039,437.908539 1114.091553,444.383484 
	C1114.713623,446.043121 1115.892334,448.072601 1117.330322,448.650848 
	C1118.340454,449.056976 1120.354248,447.461273 1121.676392,446.443329 
	C1122.764404,445.605743 1123.135864,442.834503 1125.217773,446.370728 
z`}),h("path",{fill:"#D1B493",opacity:"1.000000",stroke:"none",d:`
M921.024414,665.000000 
	C921.024353,739.329834 921.040283,813.159729 920.954956,886.989502 
	C920.952087,889.454773 922.646179,893.629700 918.303589,893.791870 
	C913.484009,893.971741 915.124939,889.553345 915.124207,886.953186 
	C915.054993,635.631653 915.059814,384.310181 915.060547,132.988678 
	C915.060547,131.822113 914.677429,130.441925 915.168091,129.539169 
	C915.901855,128.189087 917.253540,127.174904 918.342407,126.017883 
	C919.231201,127.187042 920.518372,128.239288 920.904785,129.555893 
	C921.355469,131.091629 921.023682,132.858398 921.023682,134.524948 
	C921.024414,311.183289 921.024353,487.841644 921.024414,665.000000 
z`}),h("path",{fill:"#CFB18F",opacity:"1.000000",stroke:"none",d:`
M1255.000000,569.000000 
	C1169.669434,569.000000 1084.838745,569.016052 1000.008301,568.917725 
	C997.617859,568.914917 993.741394,570.806824 993.447510,566.278076 
	C993.407532,565.661743 997.669006,564.097595 999.939758,564.095703 
	C1128.268921,563.988220 1256.598022,563.989807 1384.927246,564.076965 
	C1387.346313,564.078613 1391.180786,562.285278 1391.519287,566.749268 
	C1391.563477,567.331238 1387.278564,568.896118 1384.995605,568.903076 
	C1341.830688,569.034546 1298.665283,569.000000 1255.000000,569.000000 
z`}),h("path",{fill:"#CFB18F",opacity:"1.000000",stroke:"none",d:`
M1378.973389,708.937683 
	C1382.633179,708.946289 1385.814209,708.784607 1388.955566,709.065125 
	C1389.924194,709.151611 1390.785156,710.444092 1391.695435,711.184326 
	C1390.828613,711.797302 1390.036621,712.708740 1389.076416,712.949219 
	C1387.819458,713.264221 1386.429810,713.060547 1385.097168,713.060547 
	C1256.464233,713.062317 1127.831299,713.072571 999.198486,712.967896 
	C997.171631,712.966248 993.735229,714.852783 993.387695,710.786438 
	C993.349182,710.335693 997.090088,709.017151 999.078857,709.015747 
	C1125.545654,708.929321 1252.012451,708.937744 1378.973389,708.937683 
z`}),h("path",{fill:"#CFB18F",opacity:"1.000000",stroke:"none",d:`
M1115.000000,641.062317 
	C1076.343872,641.062317 1038.187866,641.062317 1000.031738,641.061707 
	C998.698792,641.061707 997.302856,641.299500 996.052124,640.977051 
	C994.986023,640.702271 994.086914,639.779541 993.113892,639.143433 
	C994.157837,638.410889 995.113403,637.423645 996.272034,637.021545 
	C997.313843,636.659973 998.578552,636.938171 999.744873,636.938171 
	C1128.042603,636.937805 1256.340454,636.927612 1384.638184,637.017761 
	C1386.990967,637.019409 1389.343018,638.216919 1391.695435,638.856445 
	C1389.272095,639.591675 1386.849609,640.966736 1384.425415,640.969727 
	C1294.783691,641.079468 1205.141846,641.062256 1115.000000,641.062317 
z`}),h("path",{fill:"#FDF1D7",opacity:"1.000000",stroke:"none",d:`
M1125.104248,446.033875 
	C1123.135864,442.834503 1122.764404,445.605743 1121.676392,446.443329 
	C1120.354248,447.461273 1118.340454,449.056976 1117.330322,448.650848 
	C1115.892334,448.072601 1114.713623,446.043121 1114.091553,444.383484 
	C1111.665039,437.908539 1113.282104,432.683044 1118.727173,430.091309 
	C1116.659058,425.769501 1113.492676,421.986938 1113.384888,418.119171 
	C1113.280029,414.356934 1116.308960,410.507416 1118.122925,406.325195 
	C1111.295288,398.171234 1109.817139,395.729370 1118.873657,381.376984 
	C1110.872437,373.127289 1110.708374,368.426453 1117.791138,358.469788 
	C1118.439575,357.558075 1118.641602,355.285370 1118.028076,354.678497 
	C1110.691284,347.420502 1111.869141,340.619598 1118.997314,334.296234 
	C1110.865601,322.927551 1110.865479,321.674744 1118.738525,310.016846 
	C1110.608032,302.907532 1110.483154,294.631256 1119.655396,285.563721 
	C1119.100586,284.862610 1118.581299,284.070923 1117.931641,283.406647 
	C1111.411743,276.740295 1111.362549,272.314819 1117.424683,264.883820 
	C1118.182129,263.955261 1118.538330,261.585541 1117.920410,260.820679 
	C1111.771851,253.209900 1111.731567,248.732132 1118.125977,241.356369 
	C1118.435547,240.999191 1118.602905,240.518539 1118.821533,240.122253 
	C1112.002686,232.337189 1111.783447,226.032379 1119.475464,217.626694 
	C1117.580444,213.972076 1115.520996,210.518875 1113.956055,206.854553 
	C1111.856445,201.938583 1114.185791,197.782074 1117.030396,193.967361 
	C1119.263550,190.972534 1119.894043,188.830383 1116.073853,186.257080 
	C1111.423950,183.124863 1112.462036,177.665695 1113.417480,173.371490 
	C1113.963257,170.918137 1117.307861,167.906464 1119.868774,167.353699 
	C1123.916016,166.480087 1129.047974,165.308105 1131.630249,170.863571 
	C1131.806274,171.242004 1132.376953,171.436981 1133.117920,171.973587 
	C1135.463257,167.560837 1138.922485,164.172379 1144.032593,165.202087 
	C1148.087036,166.019058 1151.846191,168.301147 1155.024048,169.633926 
	C1159.265625,168.392151 1163.559204,166.037735 1167.735962,166.229431 
	C1171.694458,166.411133 1175.530396,169.261581 1179.666504,171.044540 
	C1186.039062,163.331726 1193.034058,163.505508 1201.831909,173.021988 
	C1205.063965,169.019516 1208.607788,164.496582 1214.372803,166.210770 
	C1218.877319,167.550125 1222.953247,170.330887 1226.987427,172.354721 
	C1229.418457,170.632278 1232.467896,166.865143 1235.871460,166.512146 
	C1239.272705,166.159393 1243.028198,169.222839 1246.522949,170.742798 
	C1249.394043,169.380585 1252.871826,166.514282 1256.456787,166.373215 
	C1260.010132,166.233398 1263.671631,168.840042 1268.011963,170.523849 
	C1275.905151,163.734344 1277.548706,163.879608 1289.861328,172.924835 
	C1293.383911,170.459839 1296.273560,167.443527 1299.783691,166.245590 
	C1303.728638,164.899261 1307.506836,166.841248 1310.381592,170.195999 
	C1310.846191,170.738144 1312.985596,170.601929 1313.756714,170.008011 
	C1321.760132,163.844986 1326.365845,164.072006 1333.134155,170.423187 
	C1337.854858,168.469254 1341.939575,166.247467 1346.306519,165.104935 
	C1351.811768,163.664612 1354.548706,168.199417 1357.343506,171.969910 
	C1361.811646,166.416458 1375.138428,163.679855 1381.383789,166.767273 
	C1386.540405,169.316483 1387.518311,176.468643 1383.358154,181.945999 
	C1382.073730,183.637360 1380.497681,185.107239 1379.111450,186.617188 
	C1388.110229,199.793777 1388.126465,204.071915 1378.872925,211.910110 
	C1384.398926,219.478516 1391.586304,227.468994 1378.672729,235.700531 
	C1386.822021,245.045578 1389.619629,254.576782 1378.997803,263.704102 
	C1388.038086,275.864990 1388.038086,275.864990 1379.296021,284.039581 
	C1388.498047,297.320282 1388.480225,299.397552 1379.658203,308.799347 
	C1381.870728,313.176422 1385.386597,317.196991 1385.581787,321.372894 
	C1385.763916,325.266571 1382.415283,329.325409 1380.620850,333.311523 
	C1379.887207,333.468597 1379.153564,333.625671 1378.419922,333.782715 
	C1379.316650,334.199799 1380.319092,334.475861 1381.093750,335.056030 
	C1387.865601,340.126526 1388.336182,347.424255 1382.079590,353.176300 
	C1380.178833,354.923584 1379.357056,356.170959 1381.070190,358.557922 
	C1388.238281,368.545837 1388.087280,371.398407 1381.012085,379.804626 
	C1383.135376,384.462799 1385.807129,388.510223 1386.777100,392.931061 
	C1387.883789,397.974121 1384.507324,401.659302 1379.605347,404.684784 
	C1389.507446,412.538879 1390.079590,420.659454 1380.201416,428.579010 
	C1386.679810,435.181213 1387.859741,441.158386 1383.745117,445.761475 
	C1378.871460,451.213959 1373.600952,450.557587 1365.185181,444.122711 
	C1360.671753,446.251831 1356.754395,449.536316 1352.812622,449.566040 
	C1348.647461,449.597473 1344.458984,446.527618 1339.857788,444.638947 
	C1329.949829,453.120209 1322.755493,451.616425 1316.519043,443.876190 
	C1307.446533,451.665161 1298.417847,452.828430 1290.817749,443.811707 
	C1285.963013,446.070435 1281.718872,449.553894 1277.432983,449.606049 
	C1273.314087,449.656158 1269.151978,446.153442 1264.585571,444.013519 
	C1256.879395,451.953949 1250.634155,452.240204 1242.176880,443.366028 
	C1232.708740,452.653046 1232.249512,452.647797 1215.426880,443.061584 
	C1207.675659,452.224762 1198.688843,453.148315 1190.038696,444.120636 
	C1185.536743,446.202606 1181.463501,449.460602 1177.258911,449.640076 
	C1173.142090,449.815857 1168.891479,446.855560 1164.201782,445.083649 
	C1155.926636,452.526581 1151.721802,452.346680 1143.812744,442.866364 
	C1140.844360,447.284149 1137.320557,451.298431 1131.442383,449.889221 
	C1129.214355,449.355072 1127.283936,447.580109 1125.104248,446.033875 
M1132.401123,356.058197 
	C1132.289185,361.822113 1132.127075,367.585602 1132.074951,373.350067 
	C1131.933716,388.956909 1131.634399,404.566406 1131.807861,420.170288 
	C1131.902222,428.657898 1132.279053,428.599121 1140.972290,428.612732 
	C1177.094482,428.669220 1213.216675,428.786865 1249.338867,428.830017 
	C1267.221680,428.851410 1285.104736,428.783966 1302.987549,428.712769 
	C1322.351562,428.635681 1341.715576,428.419708 1361.078979,428.483795 
	C1364.493164,428.495087 1365.445190,427.289764 1365.422241,424.156555 
	C1365.299438,407.312988 1365.332642,390.468231 1365.196655,373.624817 
	C1365.160889,369.186096 1364.716919,364.750671 1364.882568,359.418365 
	C1364.950073,337.937073 1365.056763,316.455780 1365.076050,294.974457 
	C1365.108398,259.099487 1365.084961,223.224472 1365.084961,187.246353 
	C1364.664429,187.147430 1364.195190,186.942566 1363.724976,186.940033 
	C1337.245972,186.797150 1310.766846,186.641388 1284.287598,186.549866 
	C1235.258911,186.380417 1186.229858,186.305634 1137.202148,186.007401 
	C1132.777100,185.980484 1131.977539,187.667862 1131.984131,191.548569 
	C1132.064331,239.028564 1131.987793,286.508820 1132.043091,333.988922 
	C1132.051392,341.106842 1132.526489,348.224213 1132.401123,356.058197 
z`}),h("path",{fill:"#95B6C0",opacity:"1.000000",stroke:"none",d:`
M1132.785645,355.341858 
	C1132.526489,348.224213 1132.051392,341.106842 1132.043091,333.988922 
	C1131.987793,286.508820 1132.064331,239.028564 1131.984131,191.548569 
	C1131.977539,187.667862 1132.777100,185.980484 1137.202148,186.007401 
	C1186.229858,186.305634 1235.258911,186.380417 1284.287598,186.549866 
	C1310.766846,186.641388 1337.245972,186.797150 1363.724976,186.940033 
	C1364.195190,186.942566 1364.664429,187.147430 1365.084961,187.246353 
	C1365.084961,223.224472 1365.108398,259.099487 1365.076050,294.974457 
	C1365.056763,316.455780 1364.950073,337.937073 1364.344971,359.839142 
	C1360.211426,357.145325 1356.615356,354.030701 1352.876343,350.616577 
	C1336.597900,330.621521 1322.303833,309.713989 1310.794189,286.557465 
	C1308.221924,279.510651 1305.821655,272.766968 1303.906494,265.960846 
	C1320.359375,265.671844 1333.919434,254.859909 1335.917969,240.761261 
	C1338.909546,219.657867 1323.889893,204.016159 1302.524536,205.984390 
	C1290.378418,207.103333 1281.427734,214.190811 1278.157471,224.931458 
	C1257.492798,225.340622 1237.240234,225.188583 1217.060669,226.329239 
	C1201.075317,227.232849 1201.203003,228.656647 1196.296387,241.866196 
	C1192.889282,251.038330 1190.052368,260.423035 1186.997070,269.724670 
	C1185.361084,274.705017 1183.801880,279.710571 1181.847656,284.789917 
	C1179.356079,288.161469 1176.723999,291.229187 1175.178223,294.771088 
	C1167.295776,312.830170 1157.149902,329.487885 1144.716553,345.131195 
	C1142.254272,347.831726 1140.082031,350.366180 1137.882568,352.875000 
	C1137.855469,352.849335 1137.783081,352.830933 1137.460083,352.885406 
	C1135.686646,353.740540 1134.236084,354.541199 1132.785645,355.341858 
z`}),h("path",{fill:"#3B7AA2",opacity:"1.000000",stroke:"none",d:`
M1353.019287,350.916077 
	C1356.615356,354.030701 1360.211426,357.145325 1364.133911,360.286835 
	C1364.716919,364.750671 1365.160889,369.186096 1365.196655,373.624817 
	C1365.332642,390.468231 1365.299438,407.312988 1365.422241,424.156555 
	C1365.445190,427.289764 1364.493164,428.495087 1361.078979,428.483795 
	C1341.715576,428.419708 1322.351562,428.635681 1302.987549,428.712769 
	C1285.104736,428.783966 1267.221680,428.851410 1249.338867,428.830017 
	C1213.216675,428.786865 1177.094482,428.669220 1140.972290,428.612732 
	C1132.279053,428.599121 1131.902222,428.657898 1131.807861,420.170288 
	C1131.634399,404.566406 1131.933716,388.956909 1132.074951,373.350067 
	C1132.127075,367.585602 1132.289185,361.822113 1132.593384,355.700012 
	C1134.236084,354.541199 1135.686646,353.740540 1137.530518,353.290253 
	C1137.212402,355.597351 1136.551636,357.574799 1135.767944,359.502197 
	C1135.370361,360.479584 1134.317749,361.357941 1134.298706,362.296021 
	C1134.112061,371.521606 1134.051025,380.750214 1134.013184,389.978210 
	C1133.975586,399.139679 1133.579590,408.332031 1134.235596,417.446472 
	C1134.467041,420.662201 1137.118896,426.208893 1139.049316,426.380676 
	C1149.648071,427.323914 1160.365967,426.950531 1171.043091,426.987915 
	C1179.952881,427.019104 1188.862793,426.993011 1197.772705,426.992920 
	C1251.409790,426.992340 1305.047119,426.958893 1358.683960,427.063690 
	C1362.388550,427.070923 1363.121338,425.625336 1363.056152,422.349457 
	C1362.886963,413.857483 1362.999390,405.359955 1362.999512,396.864624 
	C1362.999512,389.112396 1362.521240,381.321808 1363.138550,373.619019 
	C1363.722046,366.338470 1361.816406,360.755890 1355.962036,356.281281 
	C1354.480103,355.148529 1353.973877,352.738983 1353.019287,350.916077 
z`}),h("path",{fill:"#4182A9",opacity:"1.000000",stroke:"none",d:`
M1352.876343,350.616577 
	C1353.973877,352.738983 1354.480103,355.148529 1355.962036,356.281281 
	C1361.816406,360.755890 1363.722046,366.338470 1363.138550,373.619019 
	C1362.521240,381.321808 1362.999512,389.112396 1362.999512,396.864624 
	C1362.999390,405.359955 1362.886963,413.857483 1363.056152,422.349457 
	C1363.121338,425.625336 1362.388550,427.070923 1358.683960,427.063690 
	C1305.047119,426.958893 1251.409790,426.992340 1197.772705,426.992920 
	C1188.862793,426.993011 1179.952881,427.019104 1171.043091,426.987915 
	C1160.365967,426.950531 1149.648071,427.323914 1139.049316,426.380676 
	C1137.118896,426.208893 1134.467041,420.662201 1134.235596,417.446472 
	C1133.579590,408.332031 1133.975586,399.139679 1134.013184,389.978210 
	C1134.051025,380.750214 1134.112061,371.521606 1134.298706,362.296021 
	C1134.317749,361.357941 1135.370361,360.479584 1135.767944,359.502197 
	C1136.551636,357.574799 1137.212402,355.597351 1137.853516,353.235779 
	C1137.783081,352.830933 1137.855469,352.849335 1138.237427,352.877838 
	C1140.748413,350.259247 1142.877441,347.612152 1145.006592,344.965088 
	C1157.149902,329.487885 1167.295776,312.830170 1175.178223,294.771088 
	C1176.723999,291.229187 1179.356079,288.161469 1182.215820,284.897400 
	C1188.131470,286.767120 1192.793579,287.407715 1197.762695,283.319794 
	C1202.304077,279.583832 1212.162476,281.668945 1216.390503,286.010742 
	C1220.531616,290.263336 1224.796631,294.395233 1229.547485,299.117004 
	C1234.333740,293.902069 1239.119995,288.876373 1243.678589,283.651947 
	C1246.582520,280.323853 1249.298218,280.545349 1251.996948,283.580231 
	C1253.644897,285.433472 1254.969360,287.573608 1256.445679,289.580109 
	C1263.432739,299.076508 1267.086182,299.252075 1274.533691,290.435669 
	C1275.283447,289.548065 1276.089233,288.672180 1276.654663,287.669830 
	C1282.085327,278.042511 1291.171143,279.952606 1297.789917,283.871704 
	C1302.069092,286.405518 1306.156860,287.678070 1310.966064,286.860596 
	C1322.303833,309.713989 1336.597900,330.621521 1352.876343,350.616577 
M1342.366943,372.960083 
	C1334.428467,370.149719 1326.897339,372.279999 1323.889893,379.601410 
	C1319.759033,389.657684 1319.581299,400.240814 1325.324707,409.876343 
	C1329.963379,417.658600 1340.701294,418.013641 1346.749634,411.352966 
	C1353.671753,403.729980 1355.725952,380.056854 1342.366943,372.960083 
M1296.319946,399.805542 
	C1293.048096,404.589752 1287.665283,408.012848 1286.296509,414.899078 
	C1294.669922,414.899078 1302.451416,415.009521 1310.224365,414.800629 
	C1311.681030,414.761475 1314.282959,413.498932 1314.318970,412.708344 
	C1314.423950,410.397461 1313.790283,407.892883 1312.743042,405.819244 
	C1312.522827,405.383118 1309.257568,406.321381 1307.473389,406.877136 
	C1304.861450,407.690796 1302.320068,408.730804 1299.748535,409.674316 
	C1299.583374,409.193817 1299.418213,408.713318 1299.253174,408.232788 
	C1303.338379,403.020294 1307.606445,397.938324 1311.452026,392.554535 
	C1314.620483,388.118591 1314.923584,383.062286 1311.854614,378.495087 
	C1308.626221,373.691071 1303.847656,370.778381 1297.895630,371.327057 
	C1292.286621,371.844116 1287.701416,374.512512 1285.719360,380.198242 
	C1285.371216,381.197205 1285.776733,382.812469 1286.433594,383.698975 
	C1286.982178,384.439484 1288.672241,385.107880 1289.386963,384.781006 
	C1290.642334,384.206879 1291.595703,382.898529 1292.574707,381.807220 
	C1295.783203,378.230652 1300.328979,377.470337 1303.653564,380.010254 
	C1307.112671,382.653046 1307.319336,386.793182 1303.981689,391.001953 
	C1301.713135,393.862518 1299.196533,396.526306 1296.319946,399.805542 
z`}),h("path",{fill:"#FDF0D5",opacity:"1.000000",stroke:"none",d:`
M1310.794189,286.557465 
	C1306.156860,287.678070 1302.069092,286.405518 1297.789917,283.871704 
	C1291.171143,279.952606 1282.085327,278.042511 1276.654663,287.669830 
	C1276.089233,288.672180 1275.283447,289.548065 1274.533691,290.435669 
	C1267.086182,299.252075 1263.432739,299.076508 1256.445679,289.580109 
	C1254.969360,287.573608 1253.644897,285.433472 1251.996948,283.580231 
	C1249.298218,280.545349 1246.582520,280.323853 1243.678589,283.651947 
	C1239.119995,288.876373 1234.333740,293.902069 1229.547485,299.117004 
	C1224.796631,294.395233 1220.531616,290.263336 1216.390503,286.010742 
	C1212.162476,281.668945 1202.304077,279.583832 1197.762695,283.319794 
	C1192.793579,287.407715 1188.131470,286.767120 1182.576172,284.812256 
	C1183.801880,279.710571 1185.361084,274.705017 1186.997070,269.724670 
	C1190.052368,260.423035 1192.889282,251.038330 1196.296387,241.866196 
	C1201.203003,228.656647 1201.075317,227.232849 1217.060669,226.329239 
	C1237.240234,225.188583 1257.492798,225.340622 1278.523193,225.075623 
	C1285.822510,226.794403 1289.636108,230.738892 1291.869507,237.193924 
	C1295.250854,246.966110 1299.526123,256.428955 1303.421387,266.023254 
	C1305.821655,272.766968 1308.221924,279.510651 1310.794189,286.557465 
z`}),h("path",{fill:"#E99F14",opacity:"1.000000",stroke:"none",d:`
M1303.906494,265.960815 
	C1299.526123,256.428955 1295.250854,246.966110 1291.869507,237.193924 
	C1289.636108,230.738892 1285.822510,226.794403 1278.966797,225.072052 
	C1281.427734,214.190811 1290.378418,207.103333 1302.524536,205.984390 
	C1323.889893,204.016159 1338.909546,219.657867 1335.917969,240.761261 
	C1333.919434,254.859909 1320.359375,265.671844 1303.906494,265.960815 
z`}),h("path",{fill:"#3B7AA2",opacity:"1.000000",stroke:"none",d:`
M1144.716431,345.131165 
	C1142.877441,347.612152 1140.748413,350.259247 1138.264648,352.903503 
	C1140.082031,350.366180 1142.254272,347.831726 1144.716431,345.131165 
z`}),h("path",{fill:"#E5A019",opacity:"1.000000",stroke:"none",d:`
M1342.715210,373.095093 
	C1355.725952,380.056854 1353.671753,403.729980 1346.749634,411.352966 
	C1340.701294,418.013641 1329.963379,417.658600 1325.324707,409.876343 
	C1319.581299,400.240814 1319.759033,389.657684 1323.889893,379.601410 
	C1326.897339,372.279999 1334.428467,370.149719 1342.715210,373.095093 
M1345.369873,390.434113 
	C1344.949951,388.332397 1344.769531,386.145508 1344.058472,384.147400 
	C1342.752441,380.477112 1340.061401,378.742706 1336.028198,378.824158 
	C1331.981812,378.905884 1329.348755,381.375458 1329.048096,384.665070 
	C1328.485107,390.827759 1328.590942,397.148407 1329.323608,403.295471 
	C1329.746704,406.844971 1332.479736,409.346161 1336.754517,409.229767 
	C1340.722534,409.121704 1343.074585,406.862793 1343.879761,403.453339 
	C1344.812988,399.501282 1344.939453,395.358673 1345.369873,390.434113 
z`}),h("path",{fill:"#E7A019",opacity:"1.000000",stroke:"none",d:`
M1296.555420,399.541840 
	C1299.196533,396.526306 1301.713135,393.862518 1303.981689,391.001953 
	C1307.319336,386.793182 1307.112671,382.653046 1303.653564,380.010254 
	C1300.328979,377.470337 1295.783203,378.230652 1292.574707,381.807220 
	C1291.595703,382.898529 1290.642334,384.206879 1289.386963,384.781006 
	C1288.672241,385.107880 1286.982178,384.439484 1286.433594,383.698975 
	C1285.776733,382.812469 1285.371216,381.197205 1285.719360,380.198242 
	C1287.701416,374.512512 1292.286621,371.844116 1297.895630,371.327057 
	C1303.847656,370.778381 1308.626221,373.691071 1311.854614,378.495087 
	C1314.923584,383.062286 1314.620483,388.118591 1311.452026,392.554535 
	C1307.606445,397.938324 1303.338379,403.020294 1299.253174,408.232788 
	C1299.418213,408.713318 1299.583374,409.193817 1299.748535,409.674316 
	C1302.320068,408.730804 1304.861450,407.690796 1307.473389,406.877136 
	C1309.257568,406.321381 1312.522827,405.383118 1312.743042,405.819244 
	C1313.790283,407.892883 1314.423950,410.397461 1314.318970,412.708344 
	C1314.282959,413.498932 1311.681030,414.761475 1310.224365,414.800629 
	C1302.451416,415.009521 1294.669922,414.899078 1286.296509,414.899078 
	C1287.665283,408.012848 1293.048096,404.589752 1296.555420,399.541840 
z`}),h("path",{fill:"#4280A6",opacity:"1.000000",stroke:"none",d:`
M1345.393066,390.866455 
	C1344.939453,395.358673 1344.812988,399.501282 1343.879761,403.453339 
	C1343.074585,406.862793 1340.722534,409.121704 1336.754517,409.229767 
	C1332.479736,409.346161 1329.746704,406.844971 1329.323608,403.295471 
	C1328.590942,397.148407 1328.485107,390.827759 1329.048096,384.665070 
	C1329.348755,381.375458 1331.981812,378.905884 1336.028198,378.824158 
	C1340.061401,378.742706 1342.752441,380.477112 1344.058472,384.147400 
	C1344.769531,386.145508 1344.949951,388.332397 1345.393066,390.866455 
z`}),h("foreignObject",{x:"150",y:"170",width:"700",height:"500",children:h("body",{xmlns:"http://www.w3.org/1999/xhtml",children:h("h1",{className:"text-2xl md:text-3xl font-semibold leading-tight tracking-tight mb-6",style:{fontFamily:"sans-serif",fontSize:"80px",marginTop:20},children:"Dear Bella,"})})}),h("foreignObject",{x:"190",y:"270",width:"690",height:"800",children:h("body",{xmlns:"http://www.w3.org/1999/xhtml",children:I("div",{children:[I("p",{style:{fontFamily:"sans-serif",fontSize:"35px",margin:0,lineHeight:2},children:["My name is",h("input",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",type:"text",placeholder:"          name",id:"input-name",style:{width:"40%",height:"30px",fontSize:"35px",backgroundColor:"transparent",marginLeft:"3px",borderBottomWidth:"1px",borderBottomColor:"black",paddingBottom:"15px"}})," ","and I am a"," ",I("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",style:{width:"20%",fontSize:"35px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},id:"input-type",children:[h("option",{children:"student"}),h("option",{children:"parent"}),h("option",{children:"other"})]}),". I am inquiring about tutoring for a",I("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-grade",style:{width:"25%",fontSize:"35px",marginLeft:"5px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[h("option",{children:"   grade"}),h("option",{children:"Grade K"}),h("option",{children:"Grade 1"}),h("option",{children:"Grade 2"}),h("option",{children:"Grade 3"}),h("option",{children:"Grade 4"}),h("option",{children:"Grade 5"}),h("option",{children:"Grade 6"}),h("option",{children:"Grade 7"}),h("option",{children:"Grade 8"}),h("option",{children:"Grade 9"}),h("option",{children:"Grade 10"}),h("option",{children:"Grade 11"}),h("option",{children:"Grade 12"}),h("option",{children:"university"}),h("option",{children:"community college"}),h("option",{children:"other"})]})," ","student in ",I("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-subject",style:{width:"45%",fontSize:"35px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[h("option",{children:"           subject"}),h("option",{children:"General: Science"}),h("option",{children:"AP Physics"}),h("option",{children:"AP Physics C"}),h("option",{children:"Honors Physics"}),h("option",{children:"Regents Physics"}),h("option",{children:"Physics I: Mechanics and Relativity"}),h("option",{children:"Physics II: Electromagnetism"}),h("option",{children:"Physics III: Waves"}),h("option",{children:"Quantum Mechanics I"}),h("option",{children:"Quantum Mechanics II"}),h("option",{children:"General: Math"}),h("option",{children:"Pre-Algebra"}),h("option",{children:"Alegbra I"}),h("option",{children:"Geometry"}),h("option",{children:"Algebra II"}),h("option",{children:"Precalculus"}),h("option",{children:"Calculus I/AP Calculus AB"}),h("option",{children:"Calculus II/AP Calculus BC"}),h("option",{children:"Calculus III/Multi-Variable Calculus"}),h("option",{children:"Linear Algebra I"}),h("option",{children:"General: Exams"}),h("option",{children:"ACT"}),h("option",{children:"SAT"}),h("option",{children:"SSAT Upper"}),h("option",{children:"SSAT Middle"}),h("option",{children:"SSAT Lower"}),h("option",{children:"ISEE Upper"}),h("option",{children:"ISEE Middle"}),h("option",{children:"ISEE Lower"}),h("option",{children:"AMC 8"}),h("option",{children:"AMC 10"}),h("option",{children:"AMC 12"}),h("option",{children:"SASMO 2-4"}),h("option",{children:"SASMO 4-6"}),h("option",{children:"SASMO 6-8"}),h("option",{children:"General: Applications"}),h("option",{children:"Middle School Application"}),h("option",{children:"High School Application"}),h("option",{children:"College Application"}),h("option",{children:"General: English"}),h("option",{children:"English Language Arts"}),h("option",{children:"English as a Second Language"}),h("option",{children:"Essay Editing"})]}),". My primary goal is to ",I("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-goal",style:{width:"20%",fontSize:"35px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[h("option",{children:"  goal"}),h("option",{children:"build confidence"}),h("option",{children:"improve grades"}),h("option",{children:"prepare for an exam"}),h("option",{children:"get ahead of my class"}),h("option",{children:"fill in gaps"}),h("option",{children:"receive support during year"}),h("option",{children:"work on a project"}),h("option",{children:"develop better habits"})]})," and I am hoping to meet",I("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-times",style:{width:"10%",fontSize:"35px",marginLeft:"5px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[h("option",{children:"1x"}),h("option",{children:"2x"}),h("option",{children:"3x"}),h("option",{children:"4x"}),h("option",{children:"5x"})]})," ","each week. I am available for a consultation call on",I("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-timeslot",style:{width:"65%",fontSize:"35px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[h("option",{children:"         dates and times"}),h("option",{children:"Sundays 6pm-8pm Eastern"}),h("option",{children:"Mondays 6pm-8pm Eastern"}),h("option",{children:"Tuesdays 6pm-8pm Eastern"}),h("option",{children:"Wednesdays 6pm-8pm Eastern"}),h("option",{children:"Thursdays 6pm-8pm Eastern"})]}),". Looking forward to your response!"]}),h("br",{})]})})}),h("foreignObject",{x:"995",y:"480",width:"400",height:"100%",children:I("body",{xmlns:"http://www.w3.org/1999/xhtml",style:{margin:0,padding:0,fontFamily:"sans-serif"},children:[h("h4",{className:"text-xl md:text-2xl font-semibold leading-tight tracking-tight mb-6",style:{margin:0,padding:0,lineHeight:2.1,textAlign:"right",fontSize:50},children:"Bella Tarantino"}),h("p",{style:{margin:0,padding:0,lineHeight:2.1,textAlign:"right",fontSize:32},children:h("i",{children:"Akita Prefecture, Japan"})}),I("p",{style:{margin:0,padding:0,lineHeight:2.1,textAlign:"right",fontSize:30},children:[h("a",{href:"mailto:tutoring@bellatarantino.com?subject=Tutoring Inquiry",children:"tutoring@bellatarantino.com"}),h("br",{}),h("br",{}),h("button",{className:"border ml-4 border-black rounded-lg text-base font-medium text-black bg-transparent hover:shadow scale-[1.05] transition-all",onClick:t,style:{width:"80%",height:"60px",width:"300px",fontSize:"35px",backgroundColor:"transparent",marginRight:10},children:"SEND"})]})]})})]});function fT(){return I("header",{className:"hidden md:flex w-full justify-between items-center px-12 py-10 text-2xl",children:[h("a",{href:"/",className:"hover:font-bold",children:"HOME"}),I("nav",{className:"flex gap-12",children:[h("a",{href:"/faq",className:"hover:font-bold",children:"FAQ"}),h("a",{href:"/contact",className:"font-bold",children:"CONTACT"})]})]})}function pT(){const[t,e]=_.useState(0),[n,r]=_.useState(!0),i=_.useRef(!0);function s(){const o=document.getElementById("input-name").value.trim(),a=document.getElementById("input-grade").value.trim(),l=document.getElementById("input-subject").value.trim(),c=document.getElementById("input-times").value.trim(),u=document.getElementById("input-goal").value.trim(),d=document.getElementById("input-timeslot").value.trim(),f=document.getElementById("input-type").value.trim().toLowerCase();i.current=!1,r(!1),setTimeout(()=>{e(S=>S+1),r(!0)},600);const y={"build confidence":"build confidence in the subject","improve grades":"improve performance and grades in the subject","prepare for an exam":"prepare for an upcoming exam","get ahead of my class":"get ahead of what's being covered in class and pursue more advanced material","fill in gaps":"fill in foundational gaps in understanding from previous units and semesters","receive support during year":"receive consistent support throughout the year","work on a project":"get guidance on a specific project","develop better habits":"build stronger study habits and routines"}[u]||u,v={name:o,grade:a,subject:l,times:c,goal:y,availability:d},w=({name:S,grade:k,subject:x,times:T,goal:F,availability:b})=>`
Hi Bella,

My name is ${S}, and I’m currently in ${k}. I’m looking for tutoring in ${x} about ${T} per week. My main goal is to ${F}, and I’d love to get started soon if you have availability.

I’m generally free around ${b} for a quick phone call to discuss next steps. Looking forward to connecting!

Thanks,  
${S}
  `.trim(),g=({name:S,grade:k,subject:x,times:T,goal:F,availability:b})=>`
Hi Bella,

I’m reaching out on behalf of my child, who is in ${k}. We’re interested in tutoring for ${x}, about ${T} per week. Our main goal is to ${F}, and we’d love to find the right fit.

I’m typically available for a quick phone call around ${b}, either this or next week. Let me know if that works for you!

Best regards,  
${S}
  `.trim(),m=({name:S,grade:k,subject:x,times:T,goal:F,availability:b})=>`
Hi Bella,

I’m writing on behalf of a student in ${k} who is interested in tutoring for ${x}, approximately ${T} per week. The goal is to ${F}, and we’re hoping to find a time to connect and learn more about your approach.

I’m generally available around ${b} for a phone call sometime soon. Please let me know what works for you!

Sincerely,  
${S}
  `.trim();let C="";f==="student"?C=w(v):f==="parent"?C=g(v):C=m(v);const E=`mailto:tutoring@bellatarantino.com?subject=Tutoring Inquiry from ${o}&body=${encodeURIComponent(C)}`;setTimeout(()=>{window.location.href=E},1500)}return I("div",{className:"min-h-screen flex flex-col bg-cover bg-no-repeat bg-center",children:[h(fT,{}),h("div",{className:"flex-1",children:h(Tw,{mode:"wait",children:n&&h(lT.div,{initial:i.current?!1:{x:"-100vw"},animate:{x:0},exit:{x:[0,-80,1e3],transition:{times:[0,.5,1],duration:.6,ease:["easeOut","easeIn"]}},transition:{duration:.6},className:"w-full",onAnimationComplete:()=>{i.current=!1},children:h("main",{className:"flex justify-center items-center px-10 text-[1.05rem] min-h-full",children:h(hT,{onSend:s})})},t)})}),h("footer",{className:"fixed bottom-0 left-0 w-full text-center py-3 bg-red-600 text-white text-sm z-50",children:"This website is in development as of April 2025."})]})}const mT=[{question:h(G,{children:I("p",{children:["What ",h(ze,{children:"qualifications"})," do you have?"]})}),answer:h(G,{children:I("p",{children:["My academic and professional background combines scientific training, tech industry experience, and almost a decade of tutoring experience. I hold a B.A. in Physics from Harvard University, where I also completed a minor in Computer Science and a language citation in"," ","Mandarin. ",h("br",{}),h("br",{})," During my time at Harvard, I interned with Google as a STEP intern, focusing on web development, and conducted research on the New Small Wheel (NSW) at the"," ","ATLAS experiment at CERN. I also served as a"," ","strategy and analytics intern at the New York City Department of Small Business Services. ",h("br",{}),h("br",{})," In addition to these roles, I have accumulated"," ","nine years of experience as a tutor, working with students across a wide range of subjects and educational levels. Now, I am a tutor and full-time assistant language teacher in English at a senior high school in Akita, Japan. For more information about client satisfaction, check out testimonials on my homepage."]})})},{question:h(G,{children:I("p",{children:["What ",h(ze,{children:"subjects"})," do you tutor?"]})}),answer:h(G,{children:I("p",{children:["I tutor lower and middle school science along with"," ","all levels of physics up until and including Quantum Mechanics."," ",h("br",{}),h("br",{})," In mathematics, I tutor all levels up until and including proof-based linear algebra. ",h("br",{}),h("br",{})," I also prepare students for a variety of competitive math and entrance exams such as the SAT, ACT, SSAT, ISEE, AMC 8/10/12, and all levels of the SASMO competition. ",h("br",{}),h("br",{})," My computer science instruction includes Python, C++, web development, and introductory data science, suitable for both high school and college students. ",h("br",{}),h("br",{})," In addition, I support English language learners across all age groups, from elementary school children to adult learners."]})})},{question:h(G,{children:I("p",{children:["What grade ",h(ze,{children:"levels"})," are you comfortable working with?"]})}),answer:h(G,{children:I("p",{children:["I am comfortable working with students from kindergarten through adults in their 50s. In most cases, I tutor content up to the"," ","undergraduate level."]})})},{question:h(G,{children:I("p",{children:["Can you support students with extra"," ",h(ze,{children:"needs"}),"?"]})}),answer:h(G,{children:h("p",{children:"Yes, I have experience working with students who are English language learners, as well as those with anxiety, depression, ADHD, autism, or dyslexia. I am here to provide support in any ways possible."})})},{question:h(G,{children:I("p",{children:["Do you help with high school and college"," ",h(ze,{children:"applications"}),"?"]})}),answer:h(G,{children:h("p",{children:"Yes, I have assisted both international and U.S.-based students in successfully gaining admission to private high schools and top 20 colleges. I would be pleased to help you navigate this process."})})},{question:h(G,{children:I("p",{children:["Do you meet ",h(ze,{children:"in-person"})," or online?"]})}),answer:h(G,{children:h("p",{children:"I offer both options. I have a dedicated Zoom link for online sessions and am also available for in-person meetings at homes, libraries, cafes, or other convenient locations. Please note that pricing may vary based on the location."})})},{question:h(G,{children:I("p",{children:["Where are you ",h(ze,{children:"based"}),"?"]})}),answer:h(G,{children:h("p",{children:"I am based in Akita Prefecture, Japan."})})},{question:h(G,{children:I("p",{children:["What will my student ",h(ze,{children:"need"})," for sessions?"]})}),answer:h(G,{children:h("p",{children:"For in-person sessions, your student will need a notebook, a pencil, and a willingness to learn. For online sessions, a laptop, desktop, or tablet is ideal (headphones are recommended). I suggest avoiding phones, and having the ability to annotate can be very helpful."})})},{question:h(G,{children:I("p",{children:["Do you ",h(ze,{children:"record"})," online sessions?"]})}),answer:h(G,{children:h("p",{children:"Yes, I can record online sessions if requested. Some students find it helpful to review recordings later. I will send you a secure link and delete the recordings upon your request. Rest assured, they are never shared with anyone."})})},{question:h(G,{children:I("p",{children:["Do you provide ",h(ze,{children:"materials"}),"?"]})}),answer:h(G,{children:h("p",{children:"Yes, I provide materials as needed. If I determine that your student requires a textbook that they do not have, I will do my best to provide a digital copy. If not, you may need to purchase it. I also provide homework, notes, study plans, cheat sheets, written solutions, and curricula tailored to your needs."})})},{question:h(G,{children:I("p",{children:["Do you provide ",h(ze,{children:"homework"})," and notes?"]})}),answer:h(G,{children:h("p",{children:"Yes, I always provide notes and am happy to assign homework if desired. I tailor any extra practice to align with class content and specific needs. After each session, I send notes, homework, and feedback to parents via email."})})},{question:h(G,{children:I("p",{children:["How can I ",h(ze,{children:"schedule"}),"?"]})}),answer:h(G,{children:I("p",{children:["You can schedule by emailing me at"," ",h("a",{href:"mailto:beetarantino@gmail.com?subject=Request%20for%20Tutoring",className:"text-blue-500",children:"beetarantino@gmail.com"}),". For first-time clients, a consultation is required. After that, you can book recurring sessions via text, email, or through Calendly, which I will provide after our consultation."]})})},{question:h(G,{children:I("p",{children:["How much ",h(ze,{children:"notice"})," do you need for scheduling?"]})}),answer:h(G,{children:h("p",{children:"I typically request at least 24 hours of notice. To ensure availability, I recommend scheduling at least 3 days in advance."})})},{question:h(G,{children:I("p",{children:["How do you handle ",h(ze,{children:"cancellations"}),", no-shows, and lateness?"]})}),answer:h(G,{children:I("p",{children:["Cancellations made within 12 hours and no-shows will incur a fee totaling the full session price. ",h("br",{}),h("br",{})," For cancellations made between 24 and 12 hours in advance, a charge of 50% will apply. ",h("br",{}),h("br",{})," I do my best to accommodate up to 10 minutes of lateness by lengthening sessions, but I do often have other clients and commitments after sessions, so this cannot be guaranteed. Time lost to lateness is lost."]})})},{question:h(G,{children:I("p",{children:["What are your ",h(ze,{children:"rates"}),"?"]})}),answer:h(G,{children:h("p",{children:"For online sessions, I charge $100 per hour. For in-person sessions, my services start at $130 per hour and vary based on the meeting location. If you are interested in group classes, please reach out to discuss pricing on a case-by-case basis."})})},{question:h(G,{children:I("p",{children:["Do you offer ",h(ze,{children:"discounts"})," or packages for groups?"]})}),answer:h(G,{children:h("p",{children:"Yes, I offer discounts for group sessions. Please contact me with details about the course and group size to discuss pricing options."})})},{question:h(G,{children:I("p",{children:["What ",h(ze,{children:"payment forms"})," do you accept?"]})}),answer:h(G,{children:h("p",{children:"I prefer payments through Venmo or Zelle. However, I am also happy to accept PayPal or cash. I will request payment directly before a session, or you can send it."})})}];function gT({question:t,answer:e,isOpen:n,onClick:r}){var s;const i=Jt.useRef(null);return I("div",{className:"border rounded-lg overflow-hidden scale-[1.05] transition-shadow hover:shadow",children:[I("button",{className:"w-full flex justify-between items-center px-5 py-4 text-left text-base md:text-lg font-medium",onClick:r,children:[t,h(Sv,{className:`w-5 h-5 transform transition-transform ${n?"rotate-180":"rotate-0"}`})]}),h("div",{ref:i,className:"px-5 border-t text-base text-gray-600 overflow-hidden transition-all duration-300 ease-in-out",style:{height:n?`${(s=i.current)==null?void 0:s.scrollHeight}px`:"0px",opacity:n?1:0},children:h("div",{className:"py-4 space-y-2",children:e})})]})}function ze({children:t}){return h("span",{className:"px-1",style:{backgroundImage:"linear-gradient(to right, #d9f99d 100%, transparent 0%)",backgroundSize:"0% 100%",backgroundRepeat:"no-repeat",animation:"highlightReveal 2s ease-out forwards"},children:t})}function CT(){return I("header",{className:"hidden md:flex w-full justify-between items-center px-12 py-10 text-2xl",children:[h("a",{href:"/",className:"hover:font-bold",children:"HOME"}),I("nav",{className:"flex gap-12",children:[h("a",{href:"/faq",className:"font-bold",children:"FAQ"}),h("a",{href:"/contact",className:"hover:font-bold",children:"CONTACT"})]})]})}function yT(){const[t,e]=_.useState(null);return I("div",{className:"min-h-screen flex flex-col bg-cover bg-no-repeat bg-center",children:[h(CT,{}),h("main",{className:"flex-1 flex justify-center px-10 text-[1.05rem]",children:I("div",{className:"max-w-6xl w-full flex flex-col gap-6",children:[I("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center pt-6",children:[I("h2",{className:"text-[2.4rem] md:text-[2.6rem] font-bold leading-snug",children:[h("span",{className:"inline-block align-middle",children:"Tutoring"})," ",h("span",{className:"align-middle",children:"with Bella Tarantino"})]}),h("div",{className:"mt-4 md:mt-0 md:ml-8",children:h("img",{src:"/img/faq-illustration-2.png",alt:"FAQ Graphic",className:"max-w-[10rem] md:max-w-[10em] h-auto"})})]}),h("div",{className:"mt-3 md:overflow-y-auto md:h-[25rem] pr-8 w-full px-10 py-2 ",children:h("div",{className:"flex flex-col gap-4",children:mT.map((n,r)=>h(gT,{question:n.question,answer:n.answer,isOpen:r===t,onClick:()=>e(r===t?null:r)},r))})})]})}),h("footer",{className:"w-full text-center py-3 bg-red-600 text-white text-sm",children:"This website is in development as of April 2025."})]})}function vT(){const[t,e]=_.useState(5);return I("div",{className:"text-center",children:[h("h1",{className:"text-3xl text-center mt-20 font-bold",children:"Requested resource not found"}),I("p",{children:["You'll be redirected in ",t]})]})}const _T=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw ks(e)},ks=function(t){return new Error("Firebase Database ("+Mf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},j4={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Df(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new ET;const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ET extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Of=function(t){const e=Df(t);return j4.encodeByteArray(e,!0)},rl=function(t){return Of(t).replace(/\./g,"")},il=function(t){try{return j4.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){return Lf(void 0,t)}function Lf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!TT(n)||(t[n]=Lf(t[n],e[n]));return t}function TT(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=()=>xT().__FIREBASE_DEFAULTS__,IT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&il(t[1]);return e&&JSON.parse(e)},$4=()=>{try{return _T()||kT()||IT()||PT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ff=t=>{var e,n;return(n=(e=$4())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},AT=t=>{const e=Ff(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vf=()=>{var t;return(t=$4())==null?void 0:t.config},Uf=t=>{var e;return(e=$4())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bf(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),a].join(".")}const vo={};function RT(){const t={prod:[],emulator:[]};for(const e of Object.keys(vo))vo[e]?t.emulator.push(e):t.prod.push(e);return t}function NT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let p8=!1;function zf(t,e){if(typeof window>"u"||typeof document>"u"||!Ps(window.location.host)||vo[t]===e||vo[t]||p8)return;vo[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=RT().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,p){f.setAttribute("width","24"),f.setAttribute("id",p),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{p8=!0,o()},f}function u(f,p){f.setAttribute("id",p),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=NT(r),p=n("text"),y=document.getElementById(p)||document.createElement("span"),v=n("learnmore"),w=document.getElementById(v)||document.createElement("a"),g=n("preprendIcon"),m=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const C=f.element;a(C),u(w,v);const E=c();l(m,g),C.append(m,y,w,E),document.body.appendChild(C)}s?(y.innerText="Preview backend disconnected.",m.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(m.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function W4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function MT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OT(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $f(){return Mf.NODE_ADMIN===!0}function LT(){try{return typeof indexedDB=="object"}catch{return!1}}function FT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="FirebaseError";class Nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VT,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ga.prototype.create)}}class ga{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nr(i,a,r)}}function UT(t,e){return t.replace(BT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Qo(il(s[0])||""),n=Qo(il(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zT=function(t){const e=Wf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jT=function(t){const e=Wf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function si(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(m8(s)&&m8(o)){if(!si(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function m8(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function no(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function WT(t,e){const n=new HT(t,e);return n.subscribe.bind(n)}class HT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ic),i.error===void 0&&(i.error=ic),i.complete===void 0&&(i.complete=ic);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}function Xl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class oi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qT=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Is;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QT(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function YT(t){return t===Br?void 0:t}function QT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const JT={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},ZT=ne.INFO,ex={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},tx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ex[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class H4{constructor(e){this.name=e,this._logLevel=ZT,this._logHandler=tx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const nx=(t,e)=>e.some(n=>t instanceof n);let g8,C8;function rx(){return g8||(g8=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ix(){return C8||(C8=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hf=new WeakMap,Uu=new WeakMap,Kf=new WeakMap,sc=new WeakMap,K4=new WeakMap;function sx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hf.set(n,t)}).catch(()=>{}),K4.set(e,t),e}function ox(t){if(Uu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Uu.set(t,e)}let Bu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ax(t){Bu=t(Bu)}function lx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return Kf.set(r,e.sort?e.sort():[e]),pr(r)}:ix().includes(t)?function(...e){return t.apply(oc(this),e),pr(Hf.get(this))}:function(...e){return pr(t.apply(oc(this),e))}}function cx(t){return typeof t=="function"?lx(t):(t instanceof IDBTransaction&&ox(t),nx(t,rx())?new Proxy(t,Bu):t)}function pr(t){if(t instanceof IDBRequest)return sx(t);if(sc.has(t))return sc.get(t);const e=cx(t);return e!==t&&(sc.set(t,e),K4.set(e,t)),e}const oc=t=>K4.get(t);function ux(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pr(o.result),l.oldVersion,l.newVersion,pr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const dx=["get","getKey","getAll","getAllKeys","count"],hx=["put","add","delete","clear"],ac=new Map;function y8(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ac.set(e,s),s}ax(t=>({...t,get:(e,n,r)=>y8(e,n)||t.get(e,n,r),has:(e,n)=>!!y8(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(px(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function px(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zu="@firebase/app",v8="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new H4("@firebase/app"),mx="@firebase/app-compat",gx="@firebase/analytics-compat",Cx="@firebase/analytics",yx="@firebase/app-check-compat",vx="@firebase/app-check",_x="@firebase/auth",wx="@firebase/auth-compat",Ex="@firebase/database",Sx="@firebase/data-connect",Tx="@firebase/database-compat",xx="@firebase/functions",kx="@firebase/functions-compat",Ix="@firebase/installations",Px="@firebase/installations-compat",Ax="@firebase/messaging",bx="@firebase/messaging-compat",Rx="@firebase/performance",Nx="@firebase/performance-compat",Mx="@firebase/remote-config",Dx="@firebase/remote-config-compat",Ox="@firebase/storage",Lx="@firebase/storage-compat",Fx="@firebase/firestore",Vx="@firebase/ai",Ux="@firebase/firestore-compat",Bx="firebase",zx="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="[DEFAULT]",jx={[zu]:"fire-core",[mx]:"fire-core-compat",[Cx]:"fire-analytics",[gx]:"fire-analytics-compat",[vx]:"fire-app-check",[yx]:"fire-app-check-compat",[_x]:"fire-auth",[wx]:"fire-auth-compat",[Ex]:"fire-rtdb",[Sx]:"fire-data-connect",[Tx]:"fire-rtdb-compat",[xx]:"fire-fn",[kx]:"fire-fn-compat",[Ix]:"fire-iid",[Px]:"fire-iid-compat",[Ax]:"fire-fcm",[bx]:"fire-fcm-compat",[Rx]:"fire-perf",[Nx]:"fire-perf-compat",[Mx]:"fire-rc",[Dx]:"fire-rc-compat",[Ox]:"fire-gcs",[Lx]:"fire-gcs-compat",[Fx]:"fire-fst",[Ux]:"fire-fst-compat",[Vx]:"fire-vertex","fire-js":"fire-js",[Bx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map,$x=new Map,$u=new Map;function _8(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if($u.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;$u.set(e,t);for(const n of ol.values())_8(n,t);for(const n of $x.values())_8(n,t);return!0}function G4(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new ga("app","Firebase",Wx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=zx;function Gf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ju,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=Vf()),!n)throw mr.create("no-options");const s=ol.get(i);if(s){if(si(n,s.options)&&si(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new XT(i);for(const l of $u.values())o.addComponent(l);const a=new Hx(n,r,o);return ol.set(i,a),a}function qf(t=ju){const e=ol.get(t);if(!e&&t===ju&&Vf())return Gf();if(!e)throw mr.create("no-app",{appName:t});return e}function gr(t,e,n){let r=jx[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(o.join(" "));return}ps(new oi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="firebase-heartbeat-database",Gx=1,Xo="firebase-heartbeat-store";let lc=null;function Yf(){return lc||(lc=ux(Kx,Gx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),lc}async function qx(t){try{const n=(await Yf()).transaction(Xo),r=await n.objectStore(Xo).get(Qf(t));return await n.done,r}catch(e){if(e instanceof Nr)Un.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function w8(t,e){try{const r=(await Yf()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,Qf(t)),await r.done}catch(n){if(n instanceof Nr)Un.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function Qf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=1024,Qx=30;class Xx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=E8();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Qx){const o=ek(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=E8(),{heartbeatsToSend:r,unsentEntries:i}=Jx(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Un.warn(n),""}}}function E8(){return new Date().toISOString().substring(0,10)}function Jx(t,e=Yx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),S8(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),S8(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LT()?FT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return w8(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return w8(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function S8(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}function ek(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){ps(new oi("platform-logger",e=>new fx(e),"PRIVATE")),ps(new oi("heartbeat",e=>new Xx(e),"PRIVATE")),gr(zu,v8,t),gr(zu,v8,"esm2020"),gr("fire-js","")}tk("");var nk="firebase",rk="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(nk,rk,"app");const T8="@firebase/database",x8="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xf="";function ik(t){Xf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sk(e)}}catch{}return new ok},Gr=Jf("localStorage"),Wu=Jf("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new H4("@firebase/database"),Zf=function(){let t=1;return function(){return t++}}(),ep=function(t){const e=GT(t),n=new $T;n.update(e);const r=n.digest();return j4.encodeByteArray(r)},Ca=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ca.apply(null,r):typeof r=="object"?e+=Me(r):e+=r,e+=" "}return e};let Jr=null,k8=!0;const ak=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Qi.logLevel=ne.VERBOSE,Jr=Qi.log.bind(Qi),e&&Wu.set("logging_enabled",!0)):typeof t=="function"?Jr=t:(Jr=null,Wu.remove("logging_enabled"))},We=function(...t){if(k8===!0&&(k8=!1,Jr===null&&Wu.get("logging_enabled")===!0&&ak(!0)),Jr){const e=Ca.apply(null,t);Jr(e)}},ya=function(t){return function(...e){We(t,...e)}},Hu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ca(...t);Qi.error(e)},Bn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ca(...t)}`;throw Qi.error(e),new Error(e)},st=function(...t){const e="FIREBASE WARNING: "+Ca(...t);Qi.warn(e)},lk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},q4=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ck=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ms="[MIN_NAME]",ai="[MAX_NAME]",pi=function(t,e){if(t===e)return 0;if(t===ms||e===ai)return-1;if(e===ms||t===ai)return 1;{const n=I8(t),r=I8(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},uk=function(t,e){return t===e?0:t<e?-1:1},Ws=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},Y4=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Me(e[r]),n+=":",n+=Y4(t[e[r]]);return n+="}",n},tp=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const np=function(t){R(!q4(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},dk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const pk=new RegExp("^-?(0*)\\d{1,10}$"),mk=-2147483648,gk=2147483647,I8=function(t){if(pk.test(t)){const e=Number(t);if(e>=mk&&e<=gk)return e}return null},Rs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ck=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_o=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Vt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class Xi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4="5",rp="v",ip="s",sp="r",op="f",ap=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lp="ls",cp="p",Ku="ac",up="websocket",dp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function _k(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fp(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===up)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===dp)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_k(t)&&(n.ns=t.namespace);const i=[];return Ge(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.counters_={}}incrementCounter(e,n=1){ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ST(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc={},uc={};function X4(t){const e=t.toString();return cc[e]||(cc[e]=new wk),cc[e]}function Ek(t,e){const n=t.toString();return uc[n]||(uc[n]=e()),uc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Rs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P8="start",Tk="close",xk="pLPCommand",kk="pRTLPCB",pp="id",mp="pw",gp="ser",Ik="cb",Pk="seg",Ak="ts",bk="d",Rk="dframe",Cp=1870,yp=30,Nk=Cp-yp,Mk=25e3,Dk=3e4;class Bi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ya(e),this.stats_=X4(n),this.urlFn=l=>(this.appCheckToken&&(l[Ku]=this.appCheckToken),fp(n,dp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Sk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dk)),ck(()=>{if(this.isClosed_)return;this.scriptTagHolder=new J4((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===P8)this.id=a,this.password=l;else if(o===Tk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[P8]="t",r[gp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Ik]=this.scriptTagHolder.uniqueCallbackIdentifier),r[rp]=Q4,this.transportSessionId&&(r[ip]=this.transportSessionId),this.lastSessionId&&(r[lp]=this.lastSessionId),this.applicationId&&(r[cp]=this.applicationId),this.appCheckToken&&(r[Ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&ap.test(location.hostname)&&(r[sp]=op);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bi.forceAllow_=!0}static forceDisallow(){Bi.forceDisallow_=!0}static isAvailable(){return Bi.forceAllow_?!0:!Bi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!dk()&&!hk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Of(n),i=tp(r,Nk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Rk]="t",r[pp]=e,r[mp]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class J4{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zf(),window[xk+this.uniqueCallbackIdentifier]=e,window[kk+this.uniqueCallbackIdentifier]=n,this.myIFrame=J4.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pp]=this.myID,e[mp]=this.myPW,e[gp]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yp+r.length<=Cp;){const o=this.pendingSegs.shift();r=r+"&"+Pk+i+"="+o.seg+"&"+Ak+i+"="+o.ts+"&"+bk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Mk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=16384,Lk=45e3;let al=null;typeof MozWebSocket<"u"?al=MozWebSocket:typeof WebSocket<"u"&&(al=WebSocket);class Xt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ya(this.connId),this.stats_=X4(n),this.connURL=Xt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[rp]=Q4,typeof location<"u"&&location.hostname&&ap.test(location.hostname)&&(o[sp]=op),n&&(o[ip]=n),r&&(o[lp]=r),i&&(o[Ku]=i),s&&(o[cp]=s),fp(e,up,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gr.set("previous_websocket_failure",!0);try{let r;$f(),this.mySock=new al(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&al!==null&&!Xt.forceDisallow_}static previouslyFailed(){return Gr.isInMemoryStorage||Gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Qo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=tp(n,Ok);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xt.responsesRequiredToBeHealthy=2;Xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{static get ALL_TRANSPORTS(){return[Bi,Xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Xt&&Xt.isAvailable();let r=n&&!Xt.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xt];else{const i=this.transports_=[];for(const s of Jo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Jo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=6e4,Vk=5e3,Uk=10*1024,Bk=100*1024,dc="t",A8="d",zk="s",b8="r",jk="e",R8="o",N8="a",M8="n",D8="p",$k="h";class Wk{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ya("c:"+this.id+":"),this.transportManager_=new Jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_o(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Uk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dc in e){const n=e[dc];n===N8?this.upgradeIfSecondaryHealthy_():n===b8?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===R8&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ws("t",e),r=Ws("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:D8,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:N8,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:M8,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ws("t",e),r=Ws("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ws(dc,e);if(A8 in e){const r=e[A8];if(n===$k){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===M8){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zk?this.onConnectionShutdown_(r):n===b8?this.onReset_(r):n===jk?Hu("Server Error: "+r):n===R8?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Q4!==r&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_o(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Fk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_o(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:D8,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends _p{static getInstance(){return new ll}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!W4()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O8=32,L8=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new re("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sr(t){return t.pieces_.length-t.pieceNum_}function se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function Z4(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Hk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function Se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new re(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function rt(t,e){const n=H(t),r=H(e);if(n===null)return e;if(n===r)return rt(se(t),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Kk(t,e){const n=Zo(t,0),r=Zo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=pi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function e3(t,e){if(Sr(t)!==Sr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Bt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sr(t)>Sr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Gk{constructor(e,n){this.errorPrefix_=n,this.parts_=Zo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jl(this.parts_[r]);Ep(this)}}function qk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jl(e),Ep(t)}function Yk(t){const e=t.parts_.pop();t.byteLength_-=Jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ep(t){if(t.byteLength_>L8)throw new Error(t.errorPrefix_+"has a key path longer than "+L8+" bytes ("+t.byteLength_+").");if(t.parts_.length>O8)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+O8+") or object contains a cycle "+zr(t))}function zr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3 extends _p{static getInstance(){return new t3}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=1e3,Qk=60*5*1e3,F8=30*1e3,Xk=1.3,Jk=3e4,Zk="server_kill",V8=3;class Rn extends vp{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rn.nextPersistentConnectionId_++,this.log_=ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hs,this.maxReconnectDelay_=Qk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!$f())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");t3.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Me(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Is,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Rn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ln(e,"w")){const r=ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=F8)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hu("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Jk&&(this.reconnectDelay_=Hs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Xk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Wk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{st(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Zk)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&st(d),l())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vu(this.interruptReasons_)&&(this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Y4(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){We("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=V8&&(this.reconnectDelay_=F8,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){We("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=V8&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xf.replace(/\./g,"-")]=1,W4()?e["framework.cordova"]=1:jf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ll.getInstance().currentlyOnline();return Vu(this.interruptReasons_)&&e}}Rn.nextPersistentConnectionId_=0;Rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(ms,e),i=new K(ms,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja;class Sp extends Zl{static get __EMPTY_NODE(){return Ja}static set __EMPTY_NODE(e){Ja=e}compare(e,n){return pi(e.name,n.name)}isDefinedOn(e){throw ks("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(ai,Ja)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Ja)}toString(){return".key"}}const Ji=new Sp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??pt.EMPTY_NODE,this.right=s??pt.EMPTY_NODE}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return pt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class eI{copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,n=pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Za(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Za(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Za(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Za(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new eI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t,e){return pi(t.name,e.name)}function n3(t,e){return pi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu;function nI(t){Gu=t}const Tp=function(t){return typeof t=="number"?"number:"+np(t):"string:"+t},xp=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ln(e,".sv"),"Priority must be a string or number.")}else R(t===Gu||t.isEmpty(),"priority of unexpected type.");R(t===Gu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U8;class Oe{static set __childrenNodeConstructor(e){U8=e}static get __childrenNodeConstructor(){return U8}constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:H(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=H(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=np(this.value_):e+=this.value_,this.lazyHash_=ep(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Oe.VALUE_TYPE_ORDER.indexOf(n),s=Oe.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kp,Ip;function rI(t){kp=t}function iI(t){Ip=t}class sI extends Zl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?pi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(ai,new Oe("[PRIORITY-POST]",Ip))}makePost(e,n){const r=kp(e);return new K(n,new Oe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ce=new sI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=Math.log(2);class aI{constructor(e){const n=s=>parseInt(Math.log(s)/oI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cl=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Fe(f,d.node,Fe.BLACK,null,null);{const p=parseInt(u/2,10)+l,y=i(l,p),v=i(p+1,c);return d=t[p],f=n?n(d):d,new Fe(f,d.node,Fe.BLACK,y,v)}},s=function(l){let c=null,u=null,d=t.length;const f=function(y,v){const w=d-y,g=d;d-=y;const m=i(w+1,g),C=t[w],E=n?n(C):C;p(new Fe(E,C.node,v,null,m))},p=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(y+1));v?f(w,Fe.BLACK):(f(w,Fe.BLACK),f(w,Fe.RED))}return u},o=new aI(t.length),a=s(o);return new pt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;const _i={};class In{static get Default(){return R(_i&&Ce,"ChildrenNode.ts has not been loaded"),hc=hc||new In({".priority":_i},{".priority":Ce}),hc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pt?n:null}hasIndex(e){return ln(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=cl(r,e.getCompare()):a=_i;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new In(u,c)}addToIndexes(e,n){const r=sl(this.indexes_,(i,s)=>{const o=ii(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===_i)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),cl(a,o.getCompare())}else return _i;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new In(r,this.indexSet_)}removeFromIndexes(e,n){const r=sl(this.indexes_,i=>{if(i===_i)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new In(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;class z{static get EMPTY_NODE(){return Ks||(Ks=new z(new pt(n3),null,In.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&xp(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ks}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ks:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ks:this.priorityNode_;return new z(i,o,s)}}updateChild(e,n){const r=H(e);if(r===null)return n;{R(H(e)!==".priority"||Sr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tp(this.getPriority().val())+":"),this.forEachChild(Ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ep(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===va?-1:0}withIndex(e){if(e===Ji||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ce),i=n.getIterator(Ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ji?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lI extends z{constructor(){super(new pt(n3),z.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const va=new lI;Object.defineProperties(K,{MIN:{value:new K(ms,z.EMPTY_NODE)},MAX:{value:new K(ai,va)}});Sp.__EMPTY_NODE=z.EMPTY_NODE;Oe.__childrenNodeConstructor=z;nI(va);iI(va);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=!0;function Ae(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,Ae(e))}if(!(t instanceof Array)&&cI){const n=[];let r=!1;if(Ge(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ae(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return z.EMPTY_NODE;const s=cl(n,tI,o=>o.name,n3);if(r){const o=cl(n,Ce.getCompare());return new z(s,Ae(e),new In({".priority":o},{".priority":Ce}))}else return new z(s,Ae(e),In.Default)}else{let n=z.EMPTY_NODE;return Ge(t,(r,i)=>{if(ln(t,r)&&r.substring(0,1)!=="."){const s=Ae(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ae(e))}}rI(Ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends Zl{constructor(e){super(),this.indexPath_=e,R(!q(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?pi(e.name,n.name):s}makePost(e,n){const r=Ae(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,va);return new K(ai,e)}toString(){return Zo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI extends Zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?pi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=Ae(e);return new K(n,r)}toString(){return".value"}}const hI=new dI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t){return{type:"value",snapshotNode:t}}function gs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ea(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ta(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ea(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(gs(n,r)):o.trackChildChange(ta(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(ea(i,s))}),n.isLeafNode()||n.forEachChild(Ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ta(i,s,o))}else r.trackChildChange(gs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.indexedFilter_=new r3(e.getIndex()),this.index_=e.getIndex(),this.startPost_=na.getStartPost_(e),this.endPost_=na.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(Ce,(o,a)=>{s.matches(new K(o,a))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new na(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new K(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ta(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ea(n,d));const v=a.updateImmediateChild(n,z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(gs(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ea(c.name,c.node)),s.trackChildChange(gs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ms}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new i3;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mI(t){return t.loadsAllData()?new r3(t.getIndex()):t.hasLimit()?new pI(t):new na(t)}function gI(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function B8(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===hI?n="$value":t.index_===Ji?n="$key":(R(t.index_ instanceof uI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function z8(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends vp{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ya("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ul.getListenId_(e,r),a={};this.listens_[o]=a;const l=B8(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),ii(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=ul.getListenId_(e,n);delete this.listens_[r]}get(e){const n=B8(e._queryParams),r=e._path.toString(),i=new Is;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+As(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qo(a.responseText)}catch{st("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return{value:null,children:new Map}}function Ap(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=H(e);t.children.has(r)||t.children.set(r,dl());const i=t.children.get(r);e=se(e),Ap(i,e,n)}}function qu(t,e,n){t.value!==null?n(e,t.value):yI(t,(r,i)=>{const s=new re(e.toString()+"/"+r);qu(i,s,n)})}function yI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ge(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j8=10*1e3,_I=30*1e3,wI=5*60*1e3;class EI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vI(e);const r=j8+(_I-j8)*Math.random();_o(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ge(e,(i,s)=>{s>0&&ln(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_o(this.reportStats_.bind(this),Math.floor(Math.random()*2*wI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zt||(Zt={}));function s3(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function o3(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function a3(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Zt.ACK_USER_WRITE,this.source=s3()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new hl(X(),n,this.revert)}}else return R(H(this.path)===e,"operationForChild called for unrelated child."),new hl(se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.source=e,this.path=n,this.type=Zt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new ra(this.source,X()):new ra(this.source,se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Zt.OVERWRITE}operationForChild(e){return q(this.path)?new li(this.source,X(),this.snap.getImmediateChild(e)):new li(this.source,se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Zt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new li(this.source,X(),n.value):new Cs(this.source,X(),n)}else return R(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cs(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function TI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(fI(o.childName,o.snapshotNode))}),Gs(t,i,"child_removed",e,r,n),Gs(t,i,"child_added",e,r,n),Gs(t,i,"child_moved",s,r,n),Gs(t,i,"child_changed",e,r,n),Gs(t,i,"value",e,r,n),i}function Gs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>kI(t,a,l)),o.forEach(a=>{const l=xI(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function xI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function kI(t,e,n){if(e.childName==null||n.childName==null)throw ks("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t,e){return{eventCache:t,serverCache:e}}function wo(t,e,n,r){return e0(new Tr(e,n,r),t.serverCache)}function bp(t,e,n,r){return e0(t.eventCache,new Tr(e,n,r))}function fl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;const II=()=>(fc||(fc=new pt(uk)),fc);class ie{static fromObject(e){let n=new ie(null);return Ge(e,(r,i)=>{n=n.set(new re(r),i)}),n}constructor(e,n=II()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(q(e))return null;{const r=H(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(se(e),n);return s!=null?{path:Se(new re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=H(e),r=this.children.get(n);return r!==null?r.subtree(se(e)):new ie(null)}}set(e,n){if(q(e))return new ie(n,this.children);{const r=H(e),s=(this.children.get(r)||new ie(null)).set(se(e),n),o=this.children.insert(r,s);return new ie(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=H(e),r=this.children.get(n);if(r){const i=r.remove(se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ie(null):new ie(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=H(e),r=this.children.get(n);return r?r.get(se(e)):null}}setTree(e,n){if(q(e))return n;{const r=H(e),s=(this.children.get(r)||new ie(null)).setTree(se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ie(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(q(e))return null;{const s=H(e),o=this.children.get(s);return o?o.findOnPath_(se(e),Se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(q(e))return this;{this.value&&r(n,this.value);const i=H(e),s=this.children.get(i);return s?s.foreachOnPath_(se(e),Se(n,i),r):new ie(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new ie(null))}}function Eo(t,e,n){if(q(e))return new sn(new ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=rt(i,e);return s=s.updateChild(o,n),new sn(t.writeTree_.set(i,s))}else{const i=new ie(n),s=t.writeTree_.setTree(e,i);return new sn(s)}}}function Yu(t,e,n){let r=t;return Ge(n,(i,s)=>{r=Eo(r,Se(e,i),s)}),r}function $8(t,e){if(q(e))return sn.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new sn(n)}}function Qu(t,e){return mi(t,e)!=null}function mi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rt(n.path,e)):null}function W8(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function Cr(t,e){if(q(e))return t;{const n=mi(t,e);return n!=null?new sn(new ie(n)):new sn(t.writeTree_.subtree(e))}}function Xu(t){return t.writeTree_.isEmpty()}function ys(t,e){return Rp(X(),t.writeTree_,e)}function Rp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Rp(Se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Se(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e){return Op(e,t)}function PI(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Eo(t.visibleWrites,e,n)),t.lastWriteId=r}function AI(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Yu(t.visibleWrites,e,n),t.lastWriteId=r}function bI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function RI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&NI(a,r.path)?i=!1:Bt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return MI(t),!0;if(r.snap)t.visibleWrites=$8(t.visibleWrites,r.path);else{const a=r.children;Ge(a,l=>{t.visibleWrites=$8(t.visibleWrites,Se(r.path,l))})}return!0}else return!1}function NI(t,e){if(t.snap)return Bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Bt(Se(t.path,n),e))return!0;return!1}function MI(t){t.visibleWrites=Np(t.allWrites,DI,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DI(t){return t.visible}function Np(t,e,n){let r=sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Bt(n,o)?(a=rt(n,o),r=Eo(r,a,s.snap)):Bt(o,n)&&(a=rt(o,n),r=Eo(r,X(),s.snap.getChild(a)));else if(s.children){if(Bt(n,o))a=rt(n,o),r=Yu(r,a,s.children);else if(Bt(o,n))if(a=rt(o,n),q(a))r=Yu(r,X(),s.children);else{const l=ii(s.children,H(a));if(l){const c=l.getChild(se(a));r=Eo(r,X(),c)}}}else throw ks("WriteRecord should have .snap or .children")}}return r}function Mp(t,e,n,r,i){if(!r&&!i){const s=mi(t.visibleWrites,e);if(s!=null)return s;{const o=Cr(t.visibleWrites,e);if(Xu(o))return n;if(n==null&&!Qu(o,X()))return null;{const a=n||z.EMPTY_NODE;return ys(o,a)}}}else{const s=Cr(t.visibleWrites,e);if(!i&&Xu(s))return n;if(!i&&n==null&&!Qu(s,X()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Bt(c.path,e)||Bt(e,c.path))},a=Np(t.allWrites,o,e),l=n||z.EMPTY_NODE;return ys(a,l)}}}function OI(t,e,n){let r=z.EMPTY_NODE;const i=mi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Cr(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const l=ys(Cr(s,new re(o)),a);r=r.updateImmediateChild(o,l)}),W8(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Cr(t.visibleWrites,e);return W8(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function LI(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Se(e,n);if(Qu(t.visibleWrites,s))return null;{const o=Cr(t.visibleWrites,s);return Xu(o)?i.getChild(n):ys(o,i.getChild(n))}}function FI(t,e,n,r){const i=Se(e,n),s=mi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Cr(t.visibleWrites,i);return ys(o,r.getNode().getImmediateChild(n))}else return null}function VI(t,e){return mi(t.visibleWrites,e)}function UI(t,e,n,r,i,s,o){let a;const l=Cr(t.visibleWrites,e),c=mi(l,X());if(c!=null)a=c;else if(n!=null)a=ys(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&u.length<i;)d(p,r)!==0&&u.push(p),p=f.getNext();return u}else return[]}function BI(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function pl(t,e,n,r){return Mp(t.writeTree,t.treePath,e,n,r)}function l3(t,e){return OI(t.writeTree,t.treePath,e)}function H8(t,e,n,r){return LI(t.writeTree,t.treePath,e,n,r)}function ml(t,e){return VI(t.writeTree,Se(t.treePath,e))}function zI(t,e,n,r,i,s){return UI(t.writeTree,t.treePath,e,n,r,i,s)}function c3(t,e,n){return FI(t.writeTree,t.treePath,e,n)}function Dp(t,e){return Op(Se(t.treePath,e),t.writeTree)}function Op(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ta(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ea(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,gs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ta(r,e.snapshotNode,i.oldSnap));else throw ks("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Lp=new $I;class u3{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return c3(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ci(this.viewCache_),s=zI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){return{filter:t}}function HI(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KI(t,e,n,r,i){const s=new jI;let o,a;if(n.type===Zt.OVERWRITE){const c=n;c.source.fromUser?o=Ju(t,e,c.path,c.snap,r,i,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=gl(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Zt.MERGE){const c=n;c.source.fromUser?o=qI(t,e,c.path,c.children,r,i,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zu(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Zt.ACK_USER_WRITE){const c=n;c.revert?o=XI(t,e,c.path,r,i,s):o=YI(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Zt.LISTEN_COMPLETE)o=QI(t,e,n.path,r,s);else throw ks("Unknown operation type: "+n.type);const l=s.getChanges();return GI(e,o,l),{viewCache:o,changes:l}}function GI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=fl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Pp(fl(e)))}}function Fp(t,e,n,r,i,s){const o=e.eventCache;if(ml(r,n)!=null)return e;{let a,l;if(q(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ci(e),u=c instanceof z?c:z.EMPTY_NODE,d=l3(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=pl(r,ci(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=H(n);if(c===".priority"){R(Sr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=H8(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=se(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=H8(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=c3(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return wo(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function gl(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=H(n);if(!l.isCompleteForPath(n)&&Sr(n)>1)return e;const y=se(n),w=l.getNode().getImmediateChild(p).updateChild(y,r);p===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),p,w,y,Lp,null)}const d=bp(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),f=new u3(i,d,s);return Fp(t,d,n,i,f,a)}function Ju(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new u3(i,e,s);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=wo(e,c,!0,t.filter.filtersNodes());else{const d=H(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=wo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=se(n),p=a.getNode().getImmediateChild(d);let y;if(q(f))y=r;else{const v=u.getCompleteChild(d);v!=null?Z4(f)===".priority"&&v.getChild(wp(f)).isEmpty()?y=v:y=v.updateChild(f,r):y=z.EMPTY_NODE}if(p.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),d,y,f,u,o);l=wo(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function K8(t,e){return t.eventCache.isCompleteForChild(e)}function qI(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Se(n,l);K8(e,H(u))&&(a=Ju(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Se(n,l);K8(e,H(u))||(a=Ju(t,a,u,c,i,s,o))}),a}function G8(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Zu(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=r:c=new ie(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),y=G8(t,p,f);l=gl(t,l,new re(d),y,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const y=e.serverCache.getNode().getImmediateChild(d),v=G8(t,y,f);l=gl(t,l,new re(d),v,i,s,o,a)}}),l}function YI(t,e,n,r,i,s,o){if(ml(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(q(n)){let c=new ie(null);return l.getNode().forEachChild(Ji,(u,d)=>{c=c.set(new re(u),d)}),Zu(t,e,n,c,i,s,a,o)}else return e}else{let c=new ie(null);return r.foreach((u,d)=>{const f=Se(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Zu(t,e,n,c,i,s,a,o)}}function QI(t,e,n,r,i){const s=e.serverCache,o=bp(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return Fp(t,o,n,r,Lp,i)}function XI(t,e,n,r,i,s){let o;if(ml(r,n)!=null)return e;{const a=new u3(r,e,i),l=e.eventCache.getNode();let c;if(q(n)||H(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=pl(r,ci(e));else{const d=e.serverCache.getNode();R(d instanceof z,"serverChildren would be complete if leaf node"),u=l3(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=H(n);let d=c3(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,se(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,z.EMPTY_NODE,se(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pl(r,ci(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||ml(r,X())!=null,wo(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new r3(r.getIndex()),s=mI(r);this.processor_=WI(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(z.EMPTY_NODE,a.getNode(),null),u=new Tr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Tr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=e0(d,u),this.eventGenerator_=new SI(this.query_)}get query(){return this.query_}}function ZI(t){return t.viewCache_.serverCache.getNode()}function eP(t){return fl(t.viewCache_)}function tP(t,e){const n=ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function q8(t){return t.eventRegistrations_.length===0}function nP(t,e){t.eventRegistrations_.push(e)}function Y8(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Q8(t,e,n,r){e.type===Zt.MERGE&&e.source.queryId!==null&&(R(ci(t.viewCache_),"We should always have a full cache before handling merges"),R(fl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=KI(t.processor_,i,e,n,r);return HI(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Vp(t,s.changes,s.viewCache.eventCache.getNode(),null)}function rP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(s,o)=>{r.push(gs(s,o))}),n.isFullyInitialized()&&r.push(Pp(n.getNode())),Vp(t,r,n.getNode(),e)}function Vp(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return TI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class Up{constructor(){this.views=new Map}}function iP(t){R(!Cl,"__referenceConstructor has already been defined"),Cl=t}function sP(){return R(Cl,"Reference.ts has not been loaded"),Cl}function oP(t){return t.views.size===0}function d3(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),Q8(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Q8(o,e,n,r));return s}}function Bp(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=pl(n,i?r:null),l=!1;a?l=!0:r instanceof z?(a=l3(n,r),l=!1):(a=z.EMPTY_NODE,l=!1);const c=e0(new Tr(a,l,!1),new Tr(r,i,!1));return new JI(e,c)}return o}function aP(t,e,n,r,i,s){const o=Bp(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nP(o,n),rP(o,n)}function lP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=xr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Y8(c,n,r)),q8(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Y8(l,n,r)),q8(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!xr(t)&&s.push(new(sP())(e._repo,e._path)),{removed:s,events:o}}function zp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yr(t,e){let n=null;for(const r of t.views.values())n=n||tP(r,e);return n}function jp(t,e){if(e._queryParams.loadsAllData())return n0(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $p(t,e){return jp(t,e)!=null}function xr(t){return n0(t)!=null}function n0(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;function cP(t){R(!yl,"__referenceConstructor has already been defined"),yl=t}function uP(){return R(yl,"Reference.ts has not been loaded"),yl}let dP=1;class X8{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=BI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function h3(t,e,n,r,i){return PI(t.pendingWriteTree_,e,n,r,i),i?Ns(t,new li(s3(),e,n)):[]}function hP(t,e,n,r){AI(t.pendingWriteTree_,e,n,r);const i=ie.fromObject(n);return Ns(t,new Cs(s3(),e,i))}function sr(t,e,n=!1){const r=bI(t.pendingWriteTree_,e);if(RI(t.pendingWriteTree_,e)){let s=new ie(null);return r.snap!=null?s=s.set(X(),!0):Ge(r.children,o=>{s=s.set(new re(o),!0)}),Ns(t,new hl(r.path,s,n))}else return[]}function _a(t,e,n){return Ns(t,new li(o3(),e,n))}function fP(t,e,n){const r=ie.fromObject(n);return Ns(t,new Cs(o3(),e,r))}function pP(t,e){return Ns(t,new ra(o3(),e))}function mP(t,e,n){const r=f3(t,n);if(r){const i=p3(r),s=i.path,o=i.queryId,a=rt(s,e),l=new ra(a3(o),a);return m3(t,s,l)}else return[]}function vl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||$p(o,e))){const l=lP(o,e,n,r);oP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>xr(p));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=yP(f);for(let y=0;y<p.length;++y){const v=p[y],w=v.query,g=Gp(t,v);t.listenProvider_.startListening(So(w),ia(t,w),g.hashFn,g.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(So(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(i0(f));t.listenProvider_.stopListening(So(f),p)}))}vP(t,c)}return a}function Wp(t,e,n,r){const i=f3(t,r);if(i!=null){const s=p3(i),o=s.path,a=s.queryId,l=rt(o,e),c=new li(a3(a),l,n);return m3(t,o,c)}else return[]}function gP(t,e,n,r){const i=f3(t,r);if(i){const s=p3(i),o=s.path,a=s.queryId,l=rt(o,e),c=ie.fromObject(n),u=new Cs(a3(a),l,c);return m3(t,o,u)}else return[]}function e9(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const y=rt(f,i);s=s||yr(p,y),o=o||xr(p)});let a=t.syncPointTree_.get(i);a?(o=o||xr(a),s=s||yr(a,X())):(a=new Up,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const v=yr(y,X());v&&(s=s.updateImmediateChild(p,v))}));const c=$p(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=i0(e);R(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=_P();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=t0(t.pendingWriteTree_,i);let d=aP(a,e,n,u,s,l);if(!c&&!o&&!r){const f=jp(a,e);d=d.concat(wP(t,e,f))}return d}function r0(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=rt(o,e),c=yr(a,l);if(c)return c});return Mp(i,e,s,n,!0)}function CP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=rt(c,n);r=r||yr(u,d)});let i=t.syncPointTree_.get(n);i?r=r||yr(i,X()):(i=new Up,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Tr(r,!0,!1):null,a=t0(t.pendingWriteTree_,e._path),l=Bp(i,e,a,s?o.getNode():z.EMPTY_NODE,s);return eP(l)}function Ns(t,e){return Hp(e,t.syncPointTree_,null,t0(t.pendingWriteTree_,X()))}function Hp(t,e,n,r){if(q(t.path))return Kp(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=yr(i,X()));let s=[];const o=H(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Dp(r,o);s=s.concat(Hp(a,l,c,u))}return i&&(s=s.concat(d3(i,t,r,n))),s}}function Kp(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=yr(i,X()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Dp(r,o),u=t.operationForChild(o);u&&(s=s.concat(Kp(u,a,l,c)))}),i&&(s=s.concat(d3(i,t,r,n))),s}function Gp(t,e){const n=e.query,r=ia(t,n);return{hashFn:()=>(ZI(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?mP(t,n._path,r):pP(t,n._path);{const s=fk(i,n);return vl(t,n,null,s)}}}}function ia(t,e){const n=i0(e);return t.queryToTagMap.get(n)}function i0(t){return t._path.toString()+"$"+t._queryIdentifier}function f3(t,e){return t.tagToQueryMap.get(e)}function p3(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function m3(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=t0(t.pendingWriteTree_,e);return d3(r,n,i,null)}function yP(t){return t.fold((e,n,r)=>{if(n&&xr(n))return[n0(n)];{let i=[];return n&&(i=zp(n)),Ge(r,(s,o)=>{i=i.concat(o)}),i}})}function So(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(uP())(t._repo,t._path):t}function vP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=i0(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function _P(){return dP++}function wP(t,e,n){const r=e._path,i=ia(t,e),s=Gp(t,n),o=t.listenProvider_.startListening(So(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!xr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!q(c)&&u&&xr(u))return[n0(u).query];{let f=[];return u&&(f=f.concat(zp(u).map(p=>p.query))),Ge(d,(p,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(So(u),ia(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g3{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new g3(n)}node(){return this.node_}}class C3{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Se(this.path_,e);return new C3(this.syncTree_,n)}node(){return r0(this.syncTree_,this.path_)}}const EP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},J8=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return SP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return TP(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},SP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},TP=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},qp=function(t,e,n,r){return v3(e,new C3(n,t),r)},y3=function(t,e,n){return v3(t,new g3(e),n)};function v3(t,e,n){const r=t.getPriority().val(),i=J8(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=J8(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Oe(a,Ae(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Oe(i))),o.forEachChild(Ce,(a,l)=>{const c=v3(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function s0(t,e){let n=e instanceof re?e:new re(e),r=t,i=H(n);for(;i!==null;){const s=ii(r.node.children,i)||{children:{},childCount:0};r=new _3(i,r,s),n=se(n),i=H(n)}return r}function gi(t){return t.node.value}function w3(t,e){t.node.value=e,t9(t)}function Yp(t){return t.node.childCount>0}function xP(t){return gi(t)===void 0&&!Yp(t)}function o0(t,e){Ge(t.node.children,(n,r)=>{e(new _3(n,t,r))})}function Qp(t,e,n,r){n&&!r&&e(t),o0(t,i=>{Qp(i,e,!0,r)}),n&&r&&e(t)}function kP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function wa(t){return new re(t.parent===null?t.name:wa(t.parent)+"/"+t.name)}function t9(t){t.parent!==null&&IP(t.parent,t.name,t)}function IP(t,e,n){const r=xP(n),i=ln(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,t9(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,t9(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/[\[\].#$\/\u0000-\u001F\u007F]/,AP=/[\[\].#$\u0000-\u001F\u007F]/,pc=10*1024*1024,E3=function(t){return typeof t=="string"&&t.length!==0&&!PP.test(t)},Xp=function(t){return typeof t=="string"&&t.length!==0&&!AP.test(t)},bP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xp(t)},Jp=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!q4(t)||t&&typeof t=="object"&&ln(t,".sv")},Zp=function(t,e,n,r){r&&e===void 0||Ea(Xl(t,"value"),e,n)},Ea=function(t,e,n){const r=n instanceof re?new Gk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zr(r));if(typeof e=="function")throw new Error(t+"contains a function "+zr(r)+" with contents = "+e.toString());if(q4(e))throw new Error(t+"contains "+e.toString()+" "+zr(r));if(typeof e=="string"&&e.length>pc/3&&Jl(e)>pc)throw new Error(t+"contains a string greater than "+pc+" utf8 bytes "+zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ge(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!E3(o)))throw new Error(t+" contains an invalid key ("+o+") "+zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qk(r,o),Ea(t,a,r),Yk(r)}),i&&s)throw new Error(t+' contains ".value" child '+zr(r)+" in addition to actual children.")}},RP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Zo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!E3(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Kk);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Bt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},NP=function(t,e,n,r){if(r&&e===void 0)return;const i=Xl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ge(e,(o,a)=>{const l=new re(o);if(Ea(i,a,Se(n,l)),Z4(l)===".priority"&&!Jp(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),RP(i,s)},em=function(t,e,n,r){if(!(r&&n===void 0)&&!Xp(n))throw new Error(Xl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},MP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),em(t,e,n,r)},S3=function(t,e){if(H(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},DP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!E3(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bP(n))throw new Error(Xl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function a0(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!e3(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function tm(t,e,n){a0(t,n),nm(t,r=>e3(r,e))}function xt(t,e,n){a0(t,n),nm(t,r=>Bt(r,e)||Bt(e,r))}function nm(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(LP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function LP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Jr&&We("event: "+n.toString()),Rs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="repo_interrupt",VP=25;class UP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new OP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dl(),this.transactionQueueTree_=new _3,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BP(t,e,n){if(t.stats_=X4(t.repoInfo_),t.forceRestClient_||Ck())t.server_=new ul(t.repoInfo_,(r,i,s,o)=>{Z8(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>e6(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Rn(t.repoInfo_,e,(r,i,s,o)=>{Z8(t,r,i,s,o)},r=>{e6(t,r)},r=>{zP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Ek(t.repoInfo_,()=>new EI(t.stats_,t.server_)),t.infoData_=new CI,t.infoSyncTree_=new X8({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=_a(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),T3(t,"connected",!1),t.serverSyncTree_=new X8({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);xt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function rm(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sa(t){return EP({timestamp:rm(t)})}function Z8(t,e,n,r,i){t.dataUpdateCount++;const s=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=sl(n,c=>Ae(c));o=gP(t.serverSyncTree_,s,l,i)}else{const l=Ae(n);o=Wp(t.serverSyncTree_,s,l,i)}else if(r){const l=sl(n,c=>Ae(c));o=fP(t.serverSyncTree_,s,l)}else{const l=Ae(n);o=_a(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=vs(t,s)),xt(t.eventQueue_,a,o)}function e6(t,e){T3(t,"connected",e),e===!1&&HP(t)}function zP(t,e){Ge(e,(n,r)=>{T3(t,n,r)})}function T3(t,e,n){const r=new re("/.info/"+e),i=Ae(n);t.infoData_.updateSnapshot(r,i);const s=_a(t.infoSyncTree_,r,i);xt(t.eventQueue_,r,s)}function l0(t){return t.nextWriteId_++}function jP(t,e,n){const r=CP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ae(i).withIndex(e._queryParams.getIndex());e9(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=_a(t.serverSyncTree_,e._path,s);else{const a=ia(t.serverSyncTree_,e);o=Wp(t.serverSyncTree_,e._path,s,a)}return xt(t.eventQueue_,e._path,o),vl(t.serverSyncTree_,e,n,null,!0),s},i=>(Ms(t,"get for query "+Me(e)+" failed: "+i),Promise.reject(new Error(i))))}function $P(t,e,n,r,i){Ms(t,"set",{path:e.toString(),value:n,priority:r});const s=Sa(t),o=Ae(n,r),a=r0(t.serverSyncTree_,e),l=y3(o,a,s),c=l0(t),u=h3(t.serverSyncTree_,e,l,c,!0);a0(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const y=f==="ok";y||st("set at "+e+" failed: "+f);const v=sr(t.serverSyncTree_,c,!y);xt(t.eventQueue_,e,v),n9(t,i,f,p)});const d=k3(t,e);vs(t,d),xt(t.eventQueue_,d,[])}function WP(t,e,n,r){Ms(t,"update",{path:e.toString(),value:n});let i=!0;const s=Sa(t),o={};if(Ge(n,(a,l)=>{i=!1,o[a]=qp(Se(e,a),Ae(l),t.serverSyncTree_,s)}),i)We("update() called with empty data.  Don't do anything."),n9(t,r,"ok",void 0);else{const a=l0(t),l=hP(t.serverSyncTree_,e,o,a);a0(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||st("update at "+e+" failed: "+c);const f=sr(t.serverSyncTree_,a,!d),p=f.length>0?vs(t,e):e;xt(t.eventQueue_,p,f),n9(t,r,c,u)}),Ge(n,c=>{const u=k3(t,Se(e,c));vs(t,u)}),xt(t.eventQueue_,e,[])}}function HP(t){Ms(t,"onDisconnectEvents");const e=Sa(t),n=dl();qu(t.onDisconnect_,X(),(i,s)=>{const o=qp(i,s,t.serverSyncTree_,e);Ap(n,i,o)});let r=[];qu(n,X(),(i,s)=>{r=r.concat(_a(t.serverSyncTree_,i,s));const o=k3(t,i);vs(t,o)}),t.onDisconnect_=dl(),xt(t.eventQueue_,X(),r)}function KP(t,e,n){let r;H(e._path)===".info"?r=e9(t.infoSyncTree_,e,n):r=e9(t.serverSyncTree_,e,n),tm(t.eventQueue_,e._path,r)}function t6(t,e,n){let r;H(e._path)===".info"?r=vl(t.infoSyncTree_,e,n):r=vl(t.serverSyncTree_,e,n),tm(t.eventQueue_,e._path,r)}function GP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(FP)}function Ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),We(n,...e)}function n9(t,e,n,r){e&&Rs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function qP(t,e,n,r,i,s){Ms(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Zf(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=x3(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ea("transaction failed: Data returned ",l,o.path),o.status=0;const c=s0(t.transactionQueueTree_,e),u=gi(c)||[];u.push(o),w3(c,u);let d;typeof l=="object"&&l!==null&&ln(l,".priority")?(d=ii(l,".priority"),R(Jp(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(r0(t.serverSyncTree_,e)||z.EMPTY_NODE).getPriority().val();const f=Sa(t),p=Ae(l,d),y=y3(p,a,f);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=y,o.currentWriteId=l0(t);const v=h3(t.serverSyncTree_,e,y,o.currentWriteId,o.applyLocally);xt(t.eventQueue_,e,v),c0(t,t.transactionQueueTree_)}}function x3(t,e,n){return r0(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function c0(t,e=t.transactionQueueTree_){if(e||u0(t,e),gi(e)){const n=sm(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&YP(t,wa(e),n)}else Yp(e)&&o0(e,n=>{c0(t,n)})}function YP(t,e,n){const r=n.map(c=>c.currentWriteId),i=x3(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=rt(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ms(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(sr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();u0(t,s0(t.transactionQueueTree_,e)),c0(t,t.transactionQueueTree_),xt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Rs(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{st("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}vs(t,e)}},o)}function vs(t,e){const n=im(t,e),r=wa(n),i=sm(t,n);return QP(t,i,r),r}function QP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=rt(n,l.path);let u=!1,d;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(sr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=VP)u=!0,d="maxretry",i=i.concat(sr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=x3(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Ea("transaction failed: Data returned ",p,l.path);let y=Ae(p);typeof p=="object"&&p!=null&&ln(p,".priority")||(y=y.updatePriority(f.getPriority()));const w=l.currentWriteId,g=Sa(t),m=y3(y,f,g);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=m,l.currentWriteId=l0(t),o.splice(o.indexOf(w),1),i=i.concat(h3(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(sr(t.serverSyncTree_,w,!0))}else u=!0,d="nodata",i=i.concat(sr(t.serverSyncTree_,l.currentWriteId,!0))}xt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}u0(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Rs(r[a]);c0(t,t.transactionQueueTree_)}function im(t,e){let n,r=t.transactionQueueTree_;for(n=H(e);n!==null&&gi(r)===void 0;)r=s0(r,n),e=se(e),n=H(e);return r}function sm(t,e){const n=[];return om(t,e,n),n.sort((r,i)=>r.order-i.order),n}function om(t,e,n){const r=gi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);o0(e,i=>{om(t,i,n)})}function u0(t,e){const n=gi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,w3(e,n.length>0?n:void 0)}o0(e,r=>{u0(t,r)})}function k3(t,e){const n=wa(im(t,e)),r=s0(t.transactionQueueTree_,e);return kP(r,i=>{mc(t,i)}),mc(t,r),Qp(r,i=>{mc(t,i)}),n}function mc(t,e){const n=gi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(sr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?w3(e,void 0):n.length=s+1,xt(t.eventQueue_,wa(e),i);for(let o=0;o<r.length;o++)Rs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function JP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):st(`Invalid query segment '${n}' in query '${t}'`)}return e}const n6=function(t,e){const n=ZP(t),r=n.namespace;n.domain==="firebase.com"&&Bn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hp(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new re(n.pathString)}},ZP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=XP(t.substring(u,d)));const f=JP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",eA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=r6.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=r6.charAt(e[i]);return R(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class lm{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return q(this._path)?null:Z4(this._path)}get ref(){return new cn(this._repo,this._path)}get _queryIdentifier(){const e=z8(this._queryParams),n=Y4(e);return n==="{}"?"default":n}get _queryObject(){return z8(this._queryParams)}isEqual(e){if(e=Ue(e),!(e instanceof d0))return!1;const n=this._repo===e._repo,r=e3(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hk(this._path)}}class cn extends d0{constructor(e,n){super(e,n,new i3,!1)}get parent(){const e=wp(this._path);return e===null?null:new cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ui{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),r=kr(this.ref,e);return new ui(this._node.getChild(n),r,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ui(i,kr(this.ref,r),Ce)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ze(t,e){return t=Ue(t),t._checkNotDeleted("ref"),e!==void 0?kr(t._root,e):t._root}function kr(t,e){return t=Ue(t),H(t._path)===null?MP("child","path",e,!1):em("child","path",e,!1),new cn(t._repo,Se(t._path,e))}function i6(t,e){t=Ue(t),S3("push",t._path),Zp("push",e,t._path,!0);const n=rm(t._repo),r=eA(n),i=kr(t,r),s=kr(t,r);let o;return e!=null?o=_l(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function _l(t,e){t=Ue(t),S3("set",t._path),Zp("set",e,t._path,!1);const n=new Is;return $P(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function s6(t,e){NP("update",e,t._path,!1);const n=new Is;return WP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function To(t){t=Ue(t);const e=new cm(()=>{}),n=new h0(e);return jP(t._repo,t,n).then(r=>new ui(r,new cn(t._repo,t._path),t._queryParams.getIndex()))}class h0{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new am("value",this,new ui(e.snapshotNode,new cn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lm(this,e,n):null}matches(e){return e instanceof h0?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class I3{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lm(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const r=kr(new cn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new am(e.type,this,new ui(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof I3?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function tA(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{t6(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new cm(n,s||void 0),a=e==="value"?new h0(o):new I3(e,o);return KP(t._repo,t,a),()=>t6(t._repo,t,a)}function v1(t,e,n,r){return tA(t,"value",e,n,r)}class nA{}class rA extends nA{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new d0(e._repo,e._path,gI(e._queryParams,this._limit),e._orderByCalled)}}function iA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new rA(t)}function sA(t,...e){let n=Ue(t);for(const r of e)n=r._apply(n);return n}iP(cn);cP(cn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="FIREBASE_DATABASE_EMULATOR_HOST",r9={};let aA=!1;function lA(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Ps(s);t.repoInfo_=new hp(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function cA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=n6(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[oA]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=n6(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Xi(Xi.OWNER):new vk(t.name,t.options,e);DP("Invalid Firebase Database URL",o),q(o.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=dA(a,t,u,new yk(t,n));return new hA(d,t)}function uA(t,e){const n=r9[e];(!n||n[t.key]!==t)&&Bn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),GP(t),delete n[t.key]}function dA(t,e,n,r){let i=r9[e.name];i||(i={},r9[e.name]=i);let s=i[t.toURLString()];return s&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new UP(t,aA,n,r),i[t.toURLString()]=s,s}class hA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cn(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function fA(t=qf(),e){const n=G4(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=AT("database");r&&pA(n,...r)}return n}function pA(t,e,n,r={}){t=Ue(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&si(r,s.repoInfo_.emulatorOptions))return;Bn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Xi(Xi.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:bT(r.mockUserToken,t.app.options.projectId);o=new Xi(a)}Ps(e)&&(Bf(e),zf("Database",!0)),lA(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){ik(bs),ps(new oi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return cA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gr(T8,x8,t),gr(T8,x8,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function o6(t,e,n){if(t=Ue(t),S3("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const r=(n==null?void 0:n.applyLocally)??!0,i=new Is,s=(a,l,c)=>{let u=null;a?i.reject(a):(u=new ui(c,new cn(t._repo,t._path),Ce),i.resolve(new gA(l,u)))},o=v1(t,()=>{});return qP(t._repo,t._path,e,s,o,r),i.promise}Rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};mA();function um(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CA=um,dm=new ga("auth","Firebase",um());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new H4("@firebase/auth");function yA(t,...e){wl.logLevel<=ne.WARN&&wl.warn(`Auth (${bs}): ${t}`,...e)}function _1(t,...e){wl.logLevel<=ne.ERROR&&wl.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw P3(t,...e)}function yn(t,...e){return P3(t,...e)}function hm(t,e,n){const r={...CA(),[e]:n};return new ga("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return hm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function P3(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dm.create(t,...e)}function j(t,e,...n){if(!t)throw P3(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _1(e),new Error(e)}function zn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i9(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function vA(){return a6()==="http:"||a6()==="https:"}function a6(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vA()||DT()||"connection"in navigator)?navigator.onLine:!0}function wA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=W4()||jf()}get(){return _A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A3(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TA=new Ta(3e4,6e4);function Mr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Dr(t,e,n,r,i={}){return pm(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=As({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return MT()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(c.credentials="include"),fm.fetch()(await mm(t,t.config.apiHost,n,a),c)})}async function pm(t,e,n){t._canInitEmulator=!1;const r={...EA,...e};try{const i=new kA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw e1(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw e1(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw e1(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw e1(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hm(t,u,c);an(t,u)}}catch(i){if(i instanceof Nr)throw i;an(t,"network-request-failed",{message:String(i)})}}async function xa(t,e,n,r,i={}){const s=await Dr(t,e,n,r,i);return"mfaPendingCredential"in s&&an(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function mm(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?A3(t.config,i):`${t.config.apiScheme}://${i}`;return SA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function xA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),TA.get())})}}function e1(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}function l6(t){return t!==void 0&&t.enterprise!==void 0}class IA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PA(t,e){return Dr(t,"GET","/v2/recaptchaConfig",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e){return Dr(t,"POST","/v1/accounts:delete",e)}async function El(t,e){return Dr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bA(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=b3(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xo(gc(i.auth_time)),issuedAtTime:xo(gc(i.iat)),expirationTime:xo(gc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gc(t){return Number(t)*1e3}function b3(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _1("JWT malformed, contained fewer than 3 sections"),null;try{const i=il(n);return i?JSON.parse(i):(_1("Failed to decode base64 JWT payload"),null)}catch(i){return _1("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function c6(t){const e=b3(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nr&&RA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await sa(t,El(e,{idToken:n}));j(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?gm(i.providerUserInfo):[],o=DA(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new s9(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function MA(t){const e=Ue(t);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e){const n=await pm(t,{},async()=>{const r=As({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await mm(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(l.credentials="include"),fm.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LA(t,e){return Dr(t,"POST","/v2/accounts:revokeToken",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):c6(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=c6(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await OA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zi;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new NA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new s9(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await sa(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bA(this,e)}reload(){return MA(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await sa(this,AA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:p,providerData:y,stsTokenManager:v}=n;j(d&&v,e,"internal-error");const w=Zi.fromJSON(this.name,v);j(typeof d=="string",e,"internal-error"),Kn(r,e.name),Kn(i,e.name),j(typeof f=="boolean",e,"internal-error"),j(typeof p=="boolean",e,"internal-error"),Kn(s,e.name),Kn(o,e.name),Kn(a,e.name),Kn(l,e.name),Kn(c,e.name),Kn(u,e.name);const g=new en({uid:d,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:w,createdAt:c,lastLoginAt:u});return y&&Array.isArray(y)&&(g.providerData=y.map(m=>({...m}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zi;i.updateFromServerResponse(n);const s=new en({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?gm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Zi;a.updateFromIdToken(r);const l=new en({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new s9(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u6=new Map;function An(t){zn(t instanceof Function,"Expected a class definition");let e=u6.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,u6.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cm.type="NONE";const d6=Cm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=w1(this.userKey,i.apiKey,s),this.fullPersistenceKey=w1("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await El(this.auth,{idToken:e}).catch(()=>{});return n?en._fromGetAccountInfoResponse(this.auth,n,e):null}return en._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(An(d6),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||An(d6);const o=w1(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const f=await El(e,{idToken:u}).catch(()=>{});if(!f)break;d=await en._fromGetAccountInfoResponse(e,f,u)}else d=en._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new es(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new es(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h6(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ym(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sm(e))return"Blackberry";if(Tm(e))return"Webos";if(vm(e))return"Safari";if((e.includes("chrome/")||_m(e))&&!e.includes("edge/"))return"Chrome";if(Em(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ym(t=ot()){return/firefox\//i.test(t)}function vm(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _m(t=ot()){return/crios\//i.test(t)}function wm(t=ot()){return/iemobile/i.test(t)}function Em(t=ot()){return/android/i.test(t)}function Sm(t=ot()){return/blackberry/i.test(t)}function Tm(t=ot()){return/webos/i.test(t)}function R3(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FA(t=ot()){var e;return R3(t)&&!!((e=window.navigator)!=null&&e.standalone)}function VA(){return OT()&&document.documentMode===10}function xm(t=ot()){return R3(t)||Em(t)||Tm(t)||Sm(t)||/windows phone/i.test(t)||wm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t,e=[]){let n;switch(t){case"Browser":n=h6(ot());break;case"Worker":n=`${h6(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e={}){return Dr(t,"GET","/v2/passwordPolicy",Mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=6;class jA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??zA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new f6(this),this.idTokenSubscription=new f6(this),this.beforeStateQueue=new UA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await El(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Nn(this));const n=e?Ue(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BA(this),n=new jA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ga("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&yA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ci(t){return Ue(t)}class f6{constructor(e){this.auth=e,this.observer=null,this.addObserver=WT(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f0={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WA(t){f0=t}function Im(t){return f0.loadJS(t)}function HA(){return f0.recaptchaEnterpriseScript}function KA(){return f0.gapiScript}function GA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qA{constructor(){this.enterprise=new YA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class YA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const QA="recaptcha-enterprise",Pm="NO_RECAPTCHA";class XA{constructor(e){this.type=QA,this.auth=Ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{PA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new IA(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;l6(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Pm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&l6(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=HA();l.length!==0&&(l+=a),Im(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function qs(t,e,n,r=!1,i=!1){const s=new XA(t);let o;if(i)o=Pm;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function p6(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await qs(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await qs(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await qs(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await qs(t,e,n,!1,!0);return r(t,u)}return Promise.reject(l)})}else{const a=await qs(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t,e){const n=G4(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(si(s,e??{}))return i;an(i,"already-initialized")}return n.initialize({options:e})}function ZA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eb(t,e,n){const r=Ci(t);j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Am(e),{host:o,port:a}=tb(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(si(c,r.config.emulator)&&si(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Ps(o)?(Bf(`${s}//${o}${l}`),zf("Auth",!0)):i||nb()}function Am(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tb(t){const e=Am(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:m6(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:m6(o)}}}function m6(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function rb(t,e){return Dr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(t,e){return xa(t,"POST","/v1/accounts:signInWithPassword",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}async function ob(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends N3{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return p6(e,n,"signInWithPassword",ib,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return sb(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return p6(e,r,"signUpPassword",rb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ob(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e){return xa(t,"POST","/v1/accounts:signInWithIdp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="http://localhost";class di extends N3{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:ab,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=As(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cb(t){const e=no(ro(t)).link,n=e?no(ro(e)).deep_link_id:null,r=no(ro(t)).deep_link_id;return(r?no(ro(r)).link:null)||r||n||e||t}class M3{constructor(e){const n=no(ro(e)),r=n.apiKey??null,i=n.oobCode??null,s=lb(n.mode??null);j(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=cb(e);try{return new M3(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.providerId=Ds.PROVIDER_ID}static credential(e,n){return oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=M3.parseLink(n);return j(r,"argument-error"),oa._fromEmailAndCode(e,r.code,r.tenantId)}}Ds.PROVIDER_ID="password";Ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends bm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends ka{constructor(){super("facebook.com")}static credential(e){return di._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return di._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends ka{constructor(){super("github.com")}static credential(e){return di._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends ka{constructor(){super("twitter.com")}static credential(e,n){return di._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e){return xa(t,"POST","/v1/accounts:signUp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await en._fromIdTokenResponse(e,r,i),o=g6(r);return new Ir({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=g6(r);return new Ir({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function g6(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t){var i;if(Vt(t.app))return Promise.reject(Nn(t));const e=Ci(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Ir({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await ub(e,{returnSecureToken:!0}),r=await Ir._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Nr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function Rm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function hb(t,e,n=!1){const r=await sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ir._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(Nn(r));const i="reauthenticate";try{const s=await sa(t,Rm(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=b3(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),Ir._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&an(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(t,e,n=!1){if(Vt(t.app))return Promise.reject(Nn(t));const r="signIn",i=await Rm(t,r,e),s=await Ir._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function pb(t,e){return Nm(Ci(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(t){const e=Ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function gb(t,e,n){return Vt(t.app)?Promise.reject(Nn(t)):pb(Ue(t),Ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mb(t),r})}function Cb(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function yb(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function vb(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function _b(t){return Ue(t).signOut()}const xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=1e3,Eb=10;class Dm extends Mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Eb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dm.type="LOCAL";const Sb=Dm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om extends Mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Om.type="SESSION";const Lm=Om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new p0(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Tb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}p0.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D3(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=D3("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function kb(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function Ib(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ab(){return Fm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="firebaseLocalStorageDb",bb=1,kl="firebaseLocalStorage",Um="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function m0(t,e){return t.transaction([kl],e?"readwrite":"readonly").objectStore(kl)}function Rb(){const t=indexedDB.deleteDatabase(Vm);return new Ia(t).toPromise()}function o9(){const t=indexedDB.open(Vm,bb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kl,{keyPath:Um})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kl)?e(r):(r.close(),await Rb(),e(await o9()))})})}async function C6(t,e,n){const r=m0(t,!0).put({[Um]:e,value:n});return new Ia(r).toPromise()}async function Nb(t,e){const n=m0(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function y6(t,e){const n=m0(t,!0).delete(e);return new Ia(n).toPromise()}const Mb=800,Db=3;class Bm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await o9(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Db)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=p0._getInstance(Ab()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Ib(),!this.activeServiceWorker)return;this.sender=new xb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await o9();return await C6(e,xl,"1"),await y6(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>C6(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>y6(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=m0(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bm.type="LOCAL";const Ob=Bm;new Ta(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t,e){return e?An(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3 extends N3{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fb(t){return Nm(t.auth,new O3(t),t.bypassAuthState)}function Vb(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),fb(n,new O3(t),t.bypassAuthState)}async function Ub(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),hb(n,new O3(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fb;case"linkViaPopup":case"linkViaRedirect":return Ub;case"reauthViaPopup":case"reauthViaRedirect":return Vb;default:an(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=new Ta(2e3,1e4);class zi extends zm{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=D3();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bb.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="pendingRedirect",E1=new Map;class jb extends zm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=E1.get(this.auth._key());if(!e){try{const r=await $b(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}E1.set(this.auth._key(),e)}return this.bypassAuthState||E1.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $b(t,e){const n=Kb(e),r=Hb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Wb(t,e){E1.set(t._key(),e)}function Hb(t){return An(t._redirectPersistence)}function Kb(t){return w1(zb,t.config.apiKey,t.name)}async function Gb(t,e,n=!1){if(Vt(t.app))return Promise.reject(Nn(t));const r=Ci(t),i=Lb(r,e),o=await new jb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=10*60*1e3;class Yb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jm(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qb&&this.cachedEventUids.clear(),this.cachedEventUids.has(v6(e))}saveEventToCache(e){this.cachedEventUids.add(v6(e)),this.lastProcessedEventTime=Date.now()}}function v6(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(t,e={}){return Dr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zb=/^https?/;async function eR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Xb(t);for(const n of e)try{if(tR(n))return}catch{}an(t,"unauthorized-domain")}function tR(t){const e=i9(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zb.test(n))return!1;if(Jb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new Ta(3e4,6e4);function _6(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rR(t){return new Promise((e,n)=>{var i,s,o;function r(){_6(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_6(),n(yn(t,"network-request-failed"))},timeout:nR.get()})}if((s=(i=vn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=vn().gapi)!=null&&o.load)r();else{const a=GA("iframefcb");return vn()[a]=()=>{gapi.load?r():n(yn(t,"network-request-failed"))},Im(`${KA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw S1=null,e})}let S1=null;function iR(t){return S1=S1||rR(t),S1}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new Ta(5e3,15e3),oR="__/auth/iframe",aR="emulator/auth/iframe",lR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uR(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?A3(e,aR):`https://${t.config.authDomain}/${oR}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=cR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${As(r).slice(1)}`}async function dR(t){const e=await iR(t),n=vn().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:uR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=vn().setTimeout(()=>{s(o)},sR.get());function l(){vn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fR=500,pR=600,mR="_blank",gR="http://localhost";class w6{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CR(t,e,n,r=fR,i=pR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...hR,width:r.toString(),height:i.toString(),top:s,left:o},c=ot().toLowerCase();n&&(a=_m(c)?mR:n),ym(c)&&(e=e||gR,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(FA(c)&&a!=="_self")return yR(e||"",a),new w6(null);const d=window.open(e||"",a,u);j(d,t,"popup-blocked");try{d.focus()}catch{}return new w6(d)}function yR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="__/auth/handler",_R="emulator/auth/handler",wR=encodeURIComponent("fac");async function E6(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof bm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof ka){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${wR}=${encodeURIComponent(l)}`:"";return`${ER(t)}?${As(a).slice(1)}${c}`}function ER({config:t}){return t.emulator?A3(t,_R):`https://${t.authDomain}/${vR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="webStorageSupport";class SR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lm,this._completeRedirectFn=Gb,this._overrideRedirectResult=Wb}async _openPopup(e,n,r,i){var o;zn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await E6(e,n,r,i9(),i);return CR(e,s,D3())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await E6(e,n,r,i9(),i);return kb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dR(e),r=new Yb(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Cc];s!==void 0&&n(!!s),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xm()||vm()||R3()}}const TR=SR;var S6="@firebase/auth",T6="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IR(t){ps(new oi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:km(t)},c=new $A(r,i,s,l);return ZA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ps(new oi("auth-internal",e=>{const n=Ci(e.getProvider("auth").getImmediate());return(r=>new xR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(S6,T6,kR(t)),gr(S6,T6,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=5*60,AR=Uf("authIdTokenMaxAge")||PR;let x6=null;const bR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AR)return;const i=n==null?void 0:n.token;x6!==i&&(x6=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function RR(t=qf()){const e=G4(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JA(t,{popupRedirectResolver:TR,persistence:[Ob,Sb,Lm]}),r=Uf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=bR(s.toString());yb(n,o,()=>o(n.currentUser)),Cb(n,a=>o(a))}}const i=Ff("auth");return i&&eb(n,`http://${i}`),n}function NR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}WA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",NR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IR("Browser");const MR={apiKey:"AIzaSyCEoRJn_5dH549cU033cIg7zC3QZ1F3c9s",authDomain:"classroom-feed-2ec8d.firebaseapp.com",databaseURL:"https://classroom-feed-2ec8d-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"classroom-feed-2ec8d",storageBucket:"classroom-feed-2ec8d.firebasestorage.app",messagingSenderId:"1024239225027",appId:"1:1024239225027:web:c98c60327f30ebbf643a76",measurementId:"G-XTB9M55X2X"},$m=Gf(MR),et=fA($m),ut=RR($m);async function ji(){return new Promise(t=>{const e=vb(ut,async n=>{n||await db(ut),e(),t()})})}var DR=typeof Element<"u",OR=typeof Map=="function",LR=typeof Set=="function",FR=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function T1(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!T1(t[r],e[r]))return!1;return!0}var s;if(OR&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!T1(r.value[1],e.get(r.value[0])))return!1;return!0}if(LR&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(FR&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(DR&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!T1(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var VR=function(e,n){try{return T1(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const UR=Il(VR);var BR=function(t,e,n,r,i,s,o,a){if(!t){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,s,o,a],u=0;l=new Error(e.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},zR=BR;const k6=Il(zR);var jR=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var u=o[c];if(!l(u))return!1;var d=e[u],f=n[u];if(s=r?r.call(i,d,f,u):void 0,s===!1||s===void 0&&d!==f)return!1}return!0};const $R=Il(jR);var Wm=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(Wm||{}),yc={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},I6=Object.values(Wm),L3={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},WR=Object.entries(L3).reduce((t,[e,n])=>(t[n]=e,t),{}),tn="data-rh",ns={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},rs=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},HR=t=>{let e=rs(t,"title");const n=rs(t,ns.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=rs(t,ns.DEFAULT_TITLE);return e||r||void 0},KR=t=>rs(t,ns.ON_CHANGE_CLIENT_STATE)||(()=>{}),vc=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),GR=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const a=i[s].toLowerCase();if(t.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),qR=t=>console&&typeof console.warn=="function"&&console.warn(t),Ys=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&qR(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(l=>{let c;const u=Object.keys(l);for(let f=0;f<u.length;f+=1){const p=u[f],y=p.toLowerCase();e.indexOf(y)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(y==="rel"&&l[y].toLowerCase()==="stylesheet")&&(c=y),e.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(c=p)}if(!c||!l[c])return!1;const d=l[c].toLowerCase();return r[c]||(r[c]={}),o[c]||(o[c]={}),r[c][d]?!1:(o[c][d]=!0,!0)}).reverse().forEach(l=>i.push(l));const a=Object.keys(o);for(let l=0;l<a.length;l+=1){const c=a[l],u={...r[c],...o[c]};r[c]=u}return i},[]).reverse()},YR=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},QR=t=>({baseTag:GR(["href"],t),bodyAttributes:vc("bodyAttributes",t),defer:rs(t,ns.DEFER),encode:rs(t,ns.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:vc("htmlAttributes",t),linkTags:Ys("link",["rel","href"],t),metaTags:Ys("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Ys("noscript",["innerHTML"],t),onChangeClientState:KR(t),scriptTags:Ys("script",["src","innerHTML"],t),styleTags:Ys("style",["cssText"],t),title:HR(t),titleAttributes:vc("titleAttributes",t),prioritizeSeoTags:YR(t,ns.PRIORITIZE_SEO_TAGS)}),Hm=t=>Array.isArray(t)?t.join(""):t,XR=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},_c=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(XR(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},P6=(t,e)=>({...t,[e]:void 0}),JR=["noscript","script","style"],a9=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Km=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),ZR=(t,e,n,r)=>{const i=Km(n),s=Hm(e);return i?`<${t} ${tn}="true" ${i}>${a9(s,r)}</${t}>`:`<${t} ${tn}="true">${a9(s,r)}</${t}>`},eN=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const d=typeof s[u]>"u"?u:`${u}="${a9(s[u],n)}"`;return c?`${c} ${d}`:d},""),a=s.innerHTML||s.cssText||"",l=JR.indexOf(t)===-1;return`${r}<${t} ${tn}="true" ${o}${l?"/>":`>${a}</${t}>`}`},""),Gm=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=L3[r];return n[i||r]=t[r],n},e),tN=(t,e,n)=>{const r={key:e,[tn]:!0},i=Gm(n,r);return[Jt.createElement("title",i,e)]},x1=(t,e)=>e.map((n,r)=>{const i={key:r,[tn]:!0};return Object.keys(n).forEach(s=>{const a=L3[s]||s;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:l}}else i[a]=n[s]}),Jt.createElement(t,i)}),Ot=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>tN(t,e.title,e.titleAttributes),toString:()=>ZR(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Gm(e),toString:()=>Km(e)};default:return{toComponent:()=>x1(t,e),toString:()=>eN(t,e,n)}}},nN=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=_c(t,yc.meta),s=_c(e,yc.link),o=_c(n,yc.script);return{priorityMethods:{toComponent:()=>[...x1("meta",i.priority),...x1("link",s.priority),...x1("script",o.priority)],toString:()=>`${Ot("meta",i.priority,r)} ${Ot("link",s.priority,r)} ${Ot("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},rN=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:a="",titleAttributes:l,prioritizeSeoTags:c}=t;let{linkTags:u,metaTags:d,scriptTags:f}=t,p={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:f}=nN(t)),{priority:p,base:Ot("base",e,r),bodyAttributes:Ot("bodyAttributes",n,r),htmlAttributes:Ot("htmlAttributes",i,r),link:Ot("link",u,r),meta:Ot("meta",d,r),noscript:Ot("noscript",s,r),script:Ot("script",f,r),style:Ot("style",o,r),title:Ot("title",{title:a,titleAttributes:l},r)}},l9=rN,t1=[],qm=!!(typeof window<"u"&&window.document&&window.document.createElement),c9=class{constructor(t,e){En(this,"instances",[]);En(this,"canUseDOM",qm);En(this,"context");En(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?t1:this.instances,add:t=>{(this.canUseDOM?t1:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?t1:this.instances).indexOf(t);(this.canUseDOM?t1:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=l9({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},iN={},Ym=Jt.createContext(iN),is,Qm=(is=class extends _.Component{constructor(n){super(n);En(this,"helmetData");this.helmetData=new c9(this.props.context||{},is.canUseDOM)}render(){return Jt.createElement(Ym.Provider,{value:this.helmetData.value},this.props.children)}},En(is,"canUseDOM",qm),is),wi=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${tn}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(a=>{const l=document.createElement(t);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")l.innerHTML=a.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const u=c,d=typeof a[u]>"u"?"":a[u];l.setAttribute(c,d)}l.setAttribute(tn,"true"),i.some((c,u)=>(o=u,l.isEqualNode(c)))?i.splice(o,1):s.push(l)}),i.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),s.forEach(a=>n.appendChild(a)),{oldTags:i,newTags:s}},u9=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(tn),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const a of o){const l=e[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),i.indexOf(a)===-1&&i.push(a);const c=s.indexOf(a);c!==-1&&s.splice(c,1)}for(let a=s.length-1;a>=0;a-=1)n.removeAttribute(s[a]);i.length===s.length?n.removeAttribute(tn):n.getAttribute(tn)!==o.join(",")&&n.setAttribute(tn,o.join(","))},sN=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=Hm(t)),u9("title",e)},A6=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:u,title:d,titleAttributes:f}=t;u9("body",r),u9("html",i),sN(d,f);const p={baseTag:wi("base",n),linkTags:wi("link",s),metaTags:wi("meta",o),noscriptTags:wi("noscript",a),scriptTags:wi("script",c),styleTags:wi("style",u)},y={},v={};Object.keys(p).forEach(w=>{const{newTags:g,oldTags:m}=p[w];g.length&&(y[w]=g),m.length&&(v[w]=p[w].oldTags)}),e&&e(),l(t,y,v)},Qs=null,oN=t=>{Qs&&cancelAnimationFrame(Qs),t.defer?Qs=requestAnimationFrame(()=>{A6(t,()=>{Qs=null})}):(A6(t),Qs=null)},aN=oN,b6=class extends _.Component{constructor(){super(...arguments);En(this,"rendered",!1)}shouldComponentUpdate(e){return!$R(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=QR(e.get().map(s=>{const o={...s.props};return delete o.context,o}));Qm.canUseDOM?aN(i):l9&&(r=l9(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},wc,lN=(wc=class extends _.Component{shouldComponentUpdate(t){return!UR(P6(this.props,"helmetData"),P6(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return k6(I6.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${I6.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),k6(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return Jt.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((l,c)=>(l[WR[c]||c]=s[c],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,i),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof c9)){const i=r;r=new c9(i.context,!0),delete n.helmetData}return r?Jt.createElement(b6,{...n,context:r.value}):Jt.createElement(Ym.Consumer,null,i=>Jt.createElement(b6,{...n,context:i}))}},En(wc,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),wc);const Xm=[{key:"thumbs_up",label:"👍"},{key:"thumbs_down",label:"👎"},{key:"angry",label:"😡"},{key:"sad",label:"😢"},{key:"happy",label:"😊"},{key:"laugh",label:"😆"},{key:"heart",label:"❤️"}],Jm=[{label:"Class 1-1",code:"YKS-11-X7P4Q2"},{label:"Class 1-2",code:"YKS-12-M4Q8D9"},{label:"Class 1-3",code:"YKS-13-R9Z2T5"},{label:"Class 1-4",code:"YKS-14-T6H7C3"},{label:"Class 1-5",code:"YKS-15-B3N5Q8"},{label:"Class 1-6",code:"YKS-16-W8K1L4"},{label:"Demo Space",code:"demo"}],cN=[{id:"content",title:"Appropriate Content",english:["Do not bully other students, but feel free to have fun with it. You're on the internet! There are going to be arguments and trolls.","An example of an okay comment is:",`"You're so dumb. Where did you get this information from? This isn't why the nabekko was canceled."`,"An example of an unacceptable comment is:",`"You're so dumb. I saw your score on the last English test. No wonder you failed!"`,"Pretend you're all strangers. You should not bring personal information or offline information into these discussions."],japanese:["他の生徒をいじめないでください。でも楽しむことは自由です。ここはインターネットなので、議論やトロールは起こりえます。","許容されるコメントの例：","「あなたってほんとバカね。どこでこの情報を手に入れたの？ これはナベッコが中止になった理由じゃないよ。」","許容されないコメントの例：","「あなたってほんとバカね。前回の英語のテストの点数を見たよ。そりゃ落ちるわけだね！」","みんな他人だと思って会話してください。個人情報やオフラインの情報を持ち込まないでください。"]},{id:"intentions",title:"Good Intentions",english:["Be well-intentioned. When you comment, react, or post, do it to make this activity work as well as it can.","We're trying to simulate the internet — not hurt feelings."],japanese:["良い意図を持って行動してください。コメントやリアクション、投稿をするときは、この活動がうまくいくようにするために動きましょう。","私たちが目指しているのはインターネットの再現であって、誰かの気持ちを傷つけることではありません。"]},{id:"room",title:"Stay in Your Room",english:["Only access your class's room. Do not share the code with other classes, and do not ask other students for their codes."],japanese:["自分のクラスのルームだけにアクセスしてください。他のクラスとコードを共有したり、ほかのクラスのコードを聞いたりしないでください。"]},{id:"login",title:"Protect Your Log-In",english:["When you create your username and password, keep it private. Your posts can be traced back to you.","If you share it and someone misuses it, there is no way for Bella to tell who did it!"],japanese:["ユーザー名とパスワードを作成したら、絶対に他人に見られないようにしてください。あなたの投稿はあなたに紐づいています。","もし誰かと共有して悪用されたら、誰がやったのかをベルラが判断する方法はありません。"]},{id:"help",title:"Ask for Help",english:["If something feels off or you are unsure how to respond, pause and ask Bella for help.","Flag anything that crosses a line so we can keep the space fun and safe for everyone."],japanese:["違和感を覚えたり、どう反応すればいいか迷ったときは、一度立ち止まってベルラに相談してください。","行き過ぎだと思う投稿を見つけたら知らせてください。みんなが楽しく安全に使える場を守りましょう。"]}],R6=/^[A-Za-z][A-Za-z\s'-]*$/,uN=/^[a-zA-Z0-9_.-]{3,20}$/;function n1(){return{username:"",password:"",firstName:"",lastName:""}}async function N6(t){if(typeof window<"u"&&window.crypto&&window.crypto.subtle&&typeof TextEncoder<"u"){const n=new TextEncoder().encode(t),r=await window.crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(r)).map(s=>s.toString(16).padStart(2,"0")).join("")}return t}function dN(t){const e=Jm.find(n=>n.code===t);return e?`Joined: ${e.label}`:t}function M6(t){return(t.trim().match(/[^\s]+/g)||[]).length}function hN(t,e,n){return Math.max(e,Math.min(n,t))}function fN(){var wn,bt;const[t,e]=_.useState(""),[n,r]=_.useState(!1),[i,s]=_.useState(""),[o,a]=_.useState(""),[l,c]=_.useState(""),[u,d]=_.useState([]),[f,p]=_.useState(()=>{if(typeof window>"u")return null;try{const P=localStorage.getItem("sns.studentProfile");if(!P)return null;const D=JSON.parse(P);if(D&&typeof D.username=="string")return D}catch{}return null}),y=!!((bt=(wn=ut.currentUser)==null?void 0:wn.providerData)!=null&&bt.some(P=>P.providerId==="password")),v=_.useMemo(()=>y?"@admin":f!=null&&f.username?`@${f.username}`:null,[y,f]),w=_.useMemo(()=>f&&(f.firstName||f.lastName)?[f.firstName,f.lastName].filter(Boolean).join(" "):"",[f]),g=!!v;_.useEffect(()=>{v&&s(v)},[v]);const m=_.useRef(null);_.useEffect(()=>{!v&&m.current&&s(""),m.current=v},[v]),_.useEffect(()=>{if(typeof window>"u")return;const P=D=>{const L=D==null?void 0:D.detail;L&&L.username?p(L):p(null)};return window.addEventListener("sns-profile-updated",P),()=>window.removeEventListener("sns-profile-updated",P)},[]);function C(P){const D=Pa(P),L=P.comments||{},Z=Object.keys(L).length;let te=0;for(const J of Object.values(L))te+=M6((J==null?void 0:J.content)||"");return .4*D+.55*Z+.05*te}const[E,S]=_.useState(""),[k,x]=_.useState({allowPosting:!0,allowReactions:!0,allowComments:!0}),[T,F]=_.useState(!1),b=_.useRef({posts:null,settings:null}),[U,Be]=_.useState(null),[vt,_t]=_.useState(!1),[Re,he]=_.useState(null),[ae,N]=_.useState(!1);_.useEffect(()=>{if(!Re){N(!1);return}N(!0);const P=setTimeout(()=>N(!1),3500),D=setTimeout(()=>he(null),4500);return()=>{clearTimeout(P),clearTimeout(D)}},[Re]);const[B,V]=_.useState(()=>{var P;return((P=ut.currentUser)==null?void 0:P.uid)||null});_.useEffect(()=>{const P=ut.onAuthStateChanged(D=>V((D==null?void 0:D.uid)||null));return ji().catch(()=>{}),()=>P()},[]);const le=40,fe=100,Pt=_.useMemo(()=>M6(o),[o]);async function ct(P){try{await ji()}catch{}if(!P)return!1;if(Jm.some(te=>te.code===P))return!0;const D=Ze(et);let L=!1,Z=!1;try{const te=await To(kr(D,`allowedRooms/${P}`));L=!!(te.exists()&&te.val()===!0)}catch{}try{Z=(await To(kr(D,`rooms/${P}`))).exists()}catch{}return L||Z}async function $n(){const P=t==null?void 0:t.trim();if(P){if(!g){he({type:"error",text:"No account found."});return}try{if(_t(!0),await ji(),!await ct(P)){r(!1),Be(null),d([]),he({type:"error",text:"Room code not found."});return}b.current.posts&&(b.current.posts(),b.current.posts=null),b.current.settings&&(b.current.settings(),b.current.settings=null),r(!0),Be(P),d([]),localStorage.setItem("sns.joinedRoom",P);const L=Ze(et,`rooms/${P}/posts`),Z=sA(L,iA(300)),te=v1(Z,Rt=>{const Nt=Rt.val()||{},pe=Object.entries(Nt).map(([Ht,Wn])=>({id:Ht,...Wn}));pe.sort((Ht,Wn)=>Wn.createdAt-Ht.createdAt),d(pe)},Rt=>{console.error("Posts subscribe failed:",Rt),he({type:"error",text:"Can't load posts."})}),J=Ze(et,`rooms/${P}/settings`),Te=v1(J,Rt=>{const Nt=Rt.val()||{};x({allowPosting:!0,allowReactions:!0,allowComments:!0,...Nt})},Rt=>{console.error("Settings subscribe failed:",Rt)});b.current.posts=te,b.current.settings=Te}catch(D){console.error("Failed to join room",D),he({type:"error",text:"Can't join room."})}finally{_t(!1)}}}const At=_.useCallback(()=>{b.current.posts&&(b.current.posts(),b.current.posts=null),b.current.settings&&(b.current.settings(),b.current.settings=null),r(!1),Be(null),d([]),S(""),e(""),he(null),localStorage.removeItem("sns.joinedRoom")},[]);_.useEffect(()=>{let P=!0;return(async()=>P&&t&&await ct(t)&&await $n())(),()=>{P=!1,b.current.posts&&b.current.posts(),b.current.settings&&b.current.settings()}},[]),_.useEffect(()=>{var te;const P=ut.currentUser;if(!P){F(!1);return}const D=!!((te=P.providerData)!=null&&te.some(J=>J.providerId==="password"));F(D);const L=Ze(et,`admins/${P.uid}`),Z=v1(L,J=>{const Te=J.val()===!0;F(D||Te)},J=>{console.warn("admins flag read failed",(J==null?void 0:J.code)||J),F(D)});return()=>Z()},[ut.currentUser]);const _n=_.useMemo(()=>{let P=Array.isArray(u)?u.filter(D=>!D.hidden):[];if(E&&E.trim()){const D=E.trim().toLowerCase();P=P.filter(L=>{const Z=(L.author||"").toLowerCase(),te=(L.text||"").toLowerCase(),J=Array.isArray(L.hashtags)?L.hashtags.join(" ").toLowerCase():(L.hashtag||"").toLowerCase();return Z.includes(D)||te.includes(D)||J.includes(D)})}return P.sort((D,L)=>C(L)-C(D)||(L.createdAt||0)-(D.createdAt||0)),P},[u,E]);function Pa(P){return Object.values(P.reactions||{}).reduce((D,L)=>D+(L||0),0)}async function g0(P){const D=U||t;if(D)try{await s6(Ze(et,`rooms/${D}/posts/${P}`),{hidden:!0}),he({type:"success",text:"Post hidden."})}catch(L){console.error("Failed to hide post",L),he({type:"error",text:"Could not hide post."})}}async function Aa(P,D){const L=U||t;if(L)try{await s6(Ze(et,`rooms/${L}/posts/${P}/comments/${D}`),{hidden:!0}),he({type:"success",text:"Comment hidden."})}catch(Z){console.error("Failed to hide comment",Z),he({type:"error",text:"Could not hide comment."})}}async function C0(P){var J;if(P.preventDefault(),!k.allowPosting&&!T||!i.trim()||!o.trim())return;const D=U||t;if(!D){alert("Join a room first.");return}const L=(l||"").split(",").map(Te=>Te.trim().toLowerCase()).filter(Boolean),Z=Array.from(new Set(L)),te={authorId:((J=ut.currentUser)==null?void 0:J.uid)||"(anon)",author:i.trim(),authorDisplayName:w||"Anonymous",text:o.trim(),hashtag:Z.join(", "),hashtags:Z,createdAt:Date.now(),reactions:Object.fromEntries(Xm.map(Te=>[Te.key,0])),comments:{},userReacts:{},hidden:!1};await i6(Ze(et,`rooms/${D}/posts`),te),a(""),c("")}async function y0(P,D){var Nt;if(!k.allowReactions&&!T)return;const L=U||t;if(!L)return;try{await ji()}catch{}const Z=(Nt=ut.currentUser)==null?void 0:Nt.uid;if(!Z)return;const te=Ze(et,`rooms/${L}/posts/${P}/userReacts/${D}/${Z}`);let J=!1,Te=!1;await o6(te,pe=>pe===!0?(Te=!0,null):(J=!0,!0));const Rt=Ze(et,`rooms/${L}/posts/${P}/reactions/${D}`);await o6(Rt,pe=>{const Ht=typeof pe=="number"?pe:0;return J?Ht+1:Te?Math.max(0,Ht-1):Ht})}async function yi(P,D,L){var J;if(!k.allowComments&&!T||!L.trim())return;const Z=U||t;if(!Z)return;const te={authorId:((J=ut.currentUser)==null?void 0:J.uid)||"(anon)",author:(D==null?void 0:D.trim())||"(anon)",content:L.trim(),at:Date.now(),hidden:!1};await i6(Ze(et,`rooms/${Z}/posts/${P}/comments`),te)}function ba(P){return Pa(P)}function M(P){return'"'+String(P??"").replace(/"/g,'""')+'"'}async function W(P){try{const L=(await To(Ze(et,`rooms/${P}/posts`))).val()||{},Z=Object.entries(L).map(([pe,Ht])=>({id:pe,...Ht})),J=[["id","authorId","author","text","hashtags","createdAt","like","love","wow","sad","commentsCount"].join(",")];for(const pe of Z){const Ht=pe.createdAt?new Date(pe.createdAt).toISOString():"",Wn=pe.reactions||{},Zm=pe.comments?Object.keys(pe.comments).length:0,eg=[pe.id,pe.authorId||"",pe.author||"",pe.text||"",Array.isArray(pe.hashtags)?pe.hashtags.join("|"):pe.hashtag||"",Ht,Wn.like??0,Wn.love??0,Wn.wow??0,Wn.sad??0,Zm].map(M).join(",");J.push(eg)}const Te=new Blob([J.join(`
`)],{type:"text/csv;charset=utf-8;"}),Rt=URL.createObjectURL(Te),Nt=document.createElement("a");Nt.href=Rt,Nt.download=`${P}-posts.csv`,document.body.appendChild(Nt),Nt.click(),document.body.removeChild(Nt),URL.revokeObjectURL(Rt)}catch(D){console.error("CSV download failed",D),alert("Could not download CSV.")}}async function Ie(P,D,L){try{await _l(Ze(et,`rooms/${P}/settings/${D}`),L),he({type:"success",text:`${D} set to ${String(L)}`})}catch(Z){console.error("Failed to update setting",D,Z),he({type:"error",text:`Could not update ${D}.`})}}async function Or(P){try{await _l(Ze(et,`rooms/${P}/posts`),null),he({type:"success",text:"All posts deleted."})}catch(D){console.error("Failed to delete posts",D),he({type:"error",text:"Could not delete."})}}return I(G,{children:[h(Qm,{children:I(lN,{children:[h("title",{children:"Yokote-Net"}),h("link",{rel:"icon",href:"/img/yokomyu-circle.png"})]})}),I("div",{className:"min-h-screen bg-slate-50 text-slate-800",children:[h("header",{className:"sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200",children:I("div",{className:"max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[h("button",{type:"button",onClick:At,className:"flex items-center gap-2 cursor-pointer outline-none focus:outline-none active:outline-none transition-none",children:h("img",{src:"/img/yokomyu-flat-transparent.png",alt:"Yokote Net logo",className:"h-8 w-auto"})}),I("div",{className:"relative flex flex-wrap items-center gap-2",children:[Re&&h("div",{className:`absolute right-full mr-3 top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${ae?"opacity-100 translate-x-0":"opacity-0 translate-x-2"}`,children:h("div",{className:`min-w-[200px] text-sm text-center rounded-full px-0 py-1 border shadow-sm ${Re.type==="success"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-rose-50 text-rose-800 border-rose-200"}`,children:Re.text})}),U&&h("span",{className:"text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1",children:h("span",{className:"font-semibold",children:dN(U)})}),h("div",{className:"flex items-center gap-2",children:h(yN,{onLogout:At})})]})]})}),h("main",{className:"max-w-5xl mx-auto px-4 py-6",children:U?I("div",{className:"grid md:grid-cols-3 gap-6",children:[h("section",{className:"md:col-span-1",children:I("div",{className:"bg-white rounded-2xl shadow p-4 space-y-4 sticky top-28",children:[h("h2",{className:"text-lg font-semibold",children:"Write a Post"}),h("input",{className:`w-full px-3 py-2 rounded-xl border border-slate-300 ${v?"bg-slate-100 text-slate-500 cursor-not-allowed":"bg-white"}`,value:v??i,onChange:P=>{v||s(P.target.value)},disabled:!!v}),h("textarea",{className:"w-full h-40 resize-y px-3 py-2 rounded-xl border border-slate-300",placeholder:"Write your 80–100 word message to the world…",value:o,onChange:P=>a(P.target.value)}),h(pN,{wordCount:Pt,min:le,max:fe}),h("input",{className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"#hashtags (comma-separated, optional)",title:"Use commas to add multiple hashtags, e.g., nabekko,help",value:l,onChange:P=>c(P.target.value)}),h("button",{onClick:C0,disabled:!k.allowPosting&&!T||!U,className:`w-full px-4 py-2 rounded-2xl font-semibold shadow ${(k.allowPosting||T)&&U?"bg-slate-900 text-white hover:bg-slate-800":"bg-slate-200 text-slate-500"}`,children:"Post"}),T&&I("div",{className:"pt-3 border-t border-slate-200 space-y-2",children:[!U&&h("p",{className:"text-xs text-slate-500",children:"Join a room to manage its settings."}),I("label",{className:"flex items-center gap-2",children:[h("input",{type:"checkbox",checked:!k.allowPosting,onChange:P=>{U&&Ie(U,"allowPosting",!P.target.checked)}}),h("span",{children:"Disable Posting"})]}),I("label",{className:"flex items-center gap-2",children:[h("input",{type:"checkbox",checked:!k.allowComments,onChange:P=>{U&&Ie(U,"allowComments",!P.target.checked)}}),h("span",{children:"Disable Comments"})]}),I("label",{className:"flex items-center gap-2",children:[h("input",{type:"checkbox",checked:!k.allowReactions,onChange:P=>{U&&Ie(U,"allowReactions",!P.target.checked)}}),h("span",{children:"Disable Reactions"})]}),I("div",{className:"space-y-2 pt-2",children:[h("button",{disabled:!U,className:`w-full px-4 py-2 rounded-2xl font-semibold shadow flex items-center justify-center gap-2 ${U?"bg-rose-600 text-white hover:bg-rose-500":"bg-slate-200 text-slate-500"}`,onClick:()=>{U&&confirm("Delete ALL posts in this room?")&&Or(U)},children:h("span",{children:"Delete All Posts"})}),h("button",{disabled:!U,className:`w-full px-4 py-2 rounded-2xl font-semibold shadow flex items-center justify-center gap-2 ${U?"bg-sky-600 text-white hover:bg-sky-500":"bg-slate-200 text-slate-500"}`,onClick:async()=>{U&&await W(U)},children:h("span",{children:"Download CSV"})})]})]})]})}),I("section",{className:"md:col-span-2 space-y-4",children:[h("div",{className:"sticky top-20 z-0",children:h("div",{className:"bg-slate-50/95 backdrop-blur px-1 pb-2",children:h("input",{className:"w-full px-3 py-2 rounded-xl border border-slate-300 bg-white shadow-sm",placeholder:"Search posts…",value:E,onChange:P=>S(P.target.value)})})}),_n.length===0?h(mN,{}):_n.map(P=>h(gN,{post:P,onReact:y0,onComment:yi,onHide:g0,onHideComment:Aa,allowReactions:k.allowReactions||T,allowComments:k.allowComments||T,total:ba(P),currentUid:B,currentHandle:v,currentDisplayName:w,isAdmin:T},P.id))]})]}):h("div",{className:"min-h-[60vh] flex flex-col items-center justify-center px-4",children:h("div",{className:"w-full max-w-3xl space-y-8 text-center",children:g?I("div",{className:"space-y-4",children:[I("div",{children:[h("h2",{className:"text-3xl font-semibold text-slate-900",children:"Enter your room code to join your space!"}),h("p",{className:"mt-2 text-lg text-slate-500",children:"ルームコードを入力してあなたのスペースに参加しよう！"})]}),I("form",{className:"w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-3",onSubmit:async P=>{P.preventDefault(),await $n()},children:[h("input",{type:"text",autoComplete:"off",className:"flex-1 px-4 py-3 rounded-2xl border border-slate-300 bg-white shadow-sm",value:t,onChange:P=>e(P.target.value),placeholder:"Enter secret room code",title:"Enter the code your teacher shared with you"}),h("button",{type:"submit",disabled:vt,className:`px-4 py-3 rounded-2xl font-semibold shadow ${vt?"bg-slate-200 text-slate-500":"bg-slate-900 text-white hover:bg-slate-800"}`,children:vt?"Joining…":"Join Room"})]}),h("p",{className:"text-sm text-slate-500",children:"Your teacher will share this secret code with you."})]}):I("div",{className:"mx-auto max-w-xl bg-white rounded-3xl shadow-sm border border-slate-200 px-6 py-8 space-y-4",children:[h("h2",{className:"text-2xl font-semibold text-slate-900",children:"No account found."}),h("p",{className:"text-base text-slate-600",children:"Please log in or create an account using the button above to join rooms, view posts, and create content."}),h("p",{className:"text-sm text-slate-500",children:"アカウントが見つかりません。上のボタンからログインするか新しいアカウントを作成して、ルームに参加したり投稿を閲覧・作成したりしてください。"})]})})})})]})]})}function pN({wordCount:t,min:e,max:n}){const r=hN((t-e)/(n-e)*100,0,100),i=t/n,s=i<=.2?"bg-rose-500":i<=.4?"bg-rose-400":i<=.6?"bg-amber-400":i<=.9?"bg-yellow-400":"bg-emerald-500";return I("div",{className:"text-sm flex items-center gap-2",children:[h("div",{className:"flex-1 h-2 bg-slate-200 rounded-full overflow-hidden",children:h("div",{className:`h-full ${s}`,style:{width:`${r}%`}})}),I("span",{className:"tabular-nums",children:[t," words"]})]})}function mN(){return I("div",{className:"bg-white rounded-2xl shadow p-8 text-center text-slate-500",children:[h("p",{className:"text-lg",children:"No posts yet. Try writing your own!"}),h("p",{className:"mt-2",children:"Be sure to read the rules before posting."})]})}function gN({post:t,onReact:e,onComment:n,onHide:r,onHideComment:i,allowReactions:s,allowComments:o,total:a,currentUid:l,currentHandle:c,currentDisplayName:u,isAdmin:d}){const[f,p]=_.useState(c||""),[y,v]=_.useState(""),[w,g]=_.useState({}),m=l,C=t.userReacts||{},E=_.useMemo(()=>t.comments?Object.entries(t.comments).filter(([,x])=>!(x!=null&&x.hidden)):[],[t.comments]),S=x=>w.hasOwnProperty(x)?!!w[x]:!!(C[x]&&m&&C[x][m]);async function k(){if(!o||!y.trim())return;const x=c||f||"Anonymous";await n(t.id,x,y),v("")}return I("article",{className:"bg-white rounded-2xl shadow p-4",children:[I("header",{className:"flex items-start justify-between gap-4",children:[I("div",{className:"flex-1",children:[h("h3",{className:"font-semibold text-slate-900",children:t.author}),h("div",{className:"text-xs text-slate-500",children:t.authorDisplayName||"Anonymous"}),h("time",{className:"text-xs text-slate-500 mt-1",children:t.createdAt?new Date(t.createdAt).toLocaleString():""})]}),(t.authorId===l||d)&&h("button",{type:"button",className:"flex items-center justify-center p-1.5 text-rose-500 hover:text-rose-600 focus:outline-none",onClick:()=>r(t.id),"aria-label":"Hide post",children:h("svg",{className:"w-4 h-4",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:h("path",{d:"M5 6h10M8 6v8m4-8v8M4 6l1 12h10l1-12M7 4l.667-1.333A1 1 0 0 1 8.6 2h2.8a1 1 0 0 1 .933.667L13 4"})})}),Array.isArray(t.hashtags)&&t.hashtags.length>0?h("div",{className:"flex flex-wrap gap-2",children:t.hashtags.map((x,T)=>h("span",{className:"text-sm text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3 py-1",children:x},T))}):t.hashtag?h("div",{className:"text-sm text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3 py-1",children:t.hashtag}):null]}),h("p",{className:"mt-3 leading-relaxed whitespace-pre-wrap",children:t.text}),I("div",{className:"mt-4 flex flex-wrap items-center gap-3",children:[!m&&h("span",{className:"text-xs text-slate-500",children:"Preparing… please wait a moment"}),Xm.map(x=>{var F;const T=S(x.key);return I("button",{onClick:async()=>{if(!(!s||!m)){g(b=>({...b,[x.key]:!T}));try{await e(t.id,x.key)}catch{g(U=>({...U,[x.key]:T}))}}},disabled:!s||!m,"aria-pressed":T,className:`px-3 py-1 rounded-full border shadow-sm ${!s||!m?"opacity-50 cursor-not-allowed":T?"text-sky-700 bg-sky-50 border-sky-200 ring-1 ring-sky-200":"hover:bg-slate-50"}`,title:x.key,children:[h("span",{className:"mr-1",children:x.label}),h("span",{className:"tabular-nums text-slate-700",children:((F=t.reactions)==null?void 0:F[x.key])??0})]},x.key)}),I("span",{className:"text-sm text-slate-500 ml-auto",children:["Total: ",a]})]}),I("div",{className:"mt-4 border-t pt-3",children:[h("h4",{className:"font-medium text-slate-900 mb-2",children:"Comments"}),E.length>0?h("ul",{className:"space-y-2 mb-3",children:E.map(([x,T])=>I("li",{className:"flex items-center justify-between gap-3 text-sm",children:[I("div",{children:[h("span",{className:"font-semibold",children:T.author}),": ",T.content]}),(T.authorId===l||d)&&h("button",{type:"button",className:"flex items-center justify-center p-1.5 text-rose-500 hover:text-rose-600 focus:outline-none",onClick:()=>i(t.id,x),"aria-label":"Hide comment",children:h("svg",{className:"w-4 h-4",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:h("path",{d:"M5 6h10M8 6v8m4-8v8M4 6l1 12h10l1-12M7 4l.667-1.333A1 1 0 0 1 8.6 2h2.8a1 1 0 0 1 .933.667L13 4"})})})]},x))}):h("p",{className:"text-sm text-slate-500 mb-3",children:"No comments yet."}),I("div",{className:"flex gap-2",children:[h("input",{className:`flex-1 px-3 py-2 rounded-xl border border-slate-300 ${o?"":"opacity-50 cursor-not-allowed"}`,placeholder:"Write a comment…",value:y,onChange:x=>v(x.target.value),onKeyDown:x=>x.key==="Enter"&&k(),disabled:!o}),h("button",{onClick:k,disabled:!o,className:`px-4 py-2 rounded-xl font-semibold shadow ${o?"bg-slate-900 text-white hover:bg-slate-800":"bg-slate-200 text-slate-500"}`,children:"Comment"})]})]})]})}function CN({item:t,isOpen:e,onToggle:n}){return I("div",{className:"border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden",children:[I("button",{type:"button",className:"w-full grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 text-left",onClick:()=>n(t.id),"aria-expanded":e,children:[h("span",{className:"text-base font-semibold text-slate-800 leading-none",children:t.title}),h("div",{className:"flex items-center justify-end",children:h("svg",{className:`w-5 h-5 text-slate-400 transition-transform duration-200 ${e?"rotate-180":"rotate-0"}`,viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:h("path",{d:"M5 8l5 5 5-5"})})})]}),h("div",{className:`grid transition-all duration-300 ease-in-out ${e?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:h("div",{className:"overflow-hidden px-4 pb-2",children:t.english.map((r,i)=>I("div",{className:"mb-2 last:mb-0",children:[h("p",{className:"text-base text-slate-700 leading-relaxed",children:r}),t.japanese[i]&&h("p",{className:"text-sm text-slate-500 mt-1 leading-relaxed",children:t.japanese[i]})]},i))})})]})}function yN({onLogout:t}){var ba;const[e,n]=_.useState(""),[r,i]=_.useState(""),[s,o]=_.useState(()=>ut.currentUser||null),[a,l]=_.useState(!1),[c,u]=_.useState(!1),[d,f]=_.useState(!1),[p,y]=_.useState("student"),[v,w]=_.useState(()=>n1()),[g,m]=_.useState(""),[C,E]=_.useState(""),[S,k]=_.useState(!1),[x,T]=_.useState({username:"",password:""}),[F,b]=_.useState(""),[U,Be]=_.useState(()=>{if(typeof window>"u")return null;try{const M=localStorage.getItem("sns.studentProfile");if(!M)return null;const W=JSON.parse(M);if(W&&W.username)return W}catch{}return null}),vt=_.useCallback(()=>{try{localStorage.removeItem("sns.studentProfile")}catch{}Be(null),T({username:"",password:""}),b(""),typeof window<"u"&&window.dispatchEvent(new CustomEvent("sns-profile-updated",{detail:null}))},[]),[_t,Re]=_.useState(!1),he=_.useRef(null),ae=_.useRef(null),N=_.useRef(null),B=_.useRef(null),V=_.useRef(null),[le,fe]=_.useState(null);_.useEffect(()=>{const M=ut.onAuthStateChanged(W=>o(W));return()=>M()},[]),_.useEffect(()=>{if(typeof window>"u")return;const M=W=>{const Ie=W==null?void 0:W.detail;Ie&&Ie.username?Be(Ie):Be(null)};return window.addEventListener("sns-profile-updated",M),()=>window.removeEventListener("sns-profile-updated",M)},[]);const Pt=!!((ba=s==null?void 0:s.providerData)!=null&&ba.some(M=>M.providerId==="password")),ct=!!(U!=null&&U.username),$n=Pt?"@admin":ct?`@${U.username}`:"",At=Pt||ct;_.useEffect(()=>{Pt?(l(!1),n(""),i("")):Re(!1)},[Pt]),_.useEffect(()=>{if(!_t)return;function M(W){he.current&&!he.current.contains(W.target)&&Re(!1)}return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[_t]),_.useEffect(()=>{if(!a)return;function M(W){W.key==="Escape"&&l(!1)}return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[a]),_.useEffect(()=>{a&&(p==="create"?N.current&&N.current.focus():p==="student"?B.current&&B.current.focus():p==="admin"&&ae.current&&ae.current.focus())},[a,p]),_.useEffect(()=>{a||(w(n1()),m(""),E(""),k(!1),T({username:"",password:""}),b(""),y("student"))},[a]),_.useEffect(()=>()=>{V.current&&clearTimeout(V.current)},[]),_.useEffect(()=>{if(!c)return;function M(W){W.key==="Escape"&&u(!1)}return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[c]),_.useEffect(()=>{if(!d)return;function M(W){W.key==="Escape"&&f(!1)}return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[d]),_.useEffect(()=>{d||fe(null)},[d]);const _n=async M=>{var W;(W=M==null?void 0:M.preventDefault)==null||W.call(M);try{await gb(ut,e.trim(),r),l(!1)}catch(Ie){alert("Login failed: "+((Ie==null?void 0:Ie.message)||Ie))}},Pa=async M=>{var wn;(wn=M==null?void 0:M.preventDefault)==null||wn.call(M),b("");try{await ji()}catch(bt){console.error("Anonymous auth failed before student login",bt),b("Could not start a session. Please try again in a moment.");return}const W=x.username.trim().toLowerCase(),Ie=x.password.trim();if(!W||!Ie){b("Enter your username and password.");return}const Or=Ze(et,`accounts/${W}`);try{const bt=await To(Or);if(!bt.exists()){b("Account not found. Check your username.");return}const P=bt.val()||{},D=await N6(Ie);if(P.passwordHash!==D){b("Incorrect password.");return}const L={username:P.username,firstName:P.firstName,lastName:P.lastName,createdAt:P.createdAt};try{localStorage.setItem("sns.studentProfile",JSON.stringify(L))}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("sns-profile-updated",{detail:L})),Be(L),T({username:"",password:""}),b(""),l(!1)}catch(bt){console.error("Student login failed",bt),b("Could not verify credentials. Double check your username and password, then contact Bella.")}},g0=async M=>{var D;(D=M==null?void 0:M.preventDefault)==null||D.call(M),m(""),E("");try{await ji()}catch(L){console.error("Anonymous auth failed before account creation",L),m("Could not connect to the server. Please try again.");return}const W=v.username.trim(),Ie=v.password.trim(),Or=v.firstName.trim(),wn=v.lastName.trim();if(!uN.test(W)){m("Choose a username with 3–20 letters, numbers, dots, hyphens, or underscores.");return}if(Ie.length<6){m("Password must be at least 6 characters long.");return}if(!R6.test(Or)||!R6.test(wn)){m("First and last name must be written in romaji (letters A–Z only).");return}const bt=W.toLowerCase(),P=Ze(et,`accounts/${bt}`);try{k(!0);let L=!1;try{L=(await To(P)).exists()}catch(Te){if(Te!=null&&Te.code&&Te.code!=="PERMISSION_DENIED")throw console.error("Account check failed",Te),Te}if(L){m("That username is already taken.");return}const Z=await N6(Ie),te={username:W,usernameLower:bt,firstName:Or,lastName:wn,passwordHash:Z,createdAt:Date.now()};await _l(P,te);const J={username:W,firstName:Or,lastName:wn,createdAt:te.createdAt};try{localStorage.setItem("sns.studentProfile",JSON.stringify(J))}catch{}typeof window<"u"&&window.dispatchEvent(new CustomEvent("sns-profile-updated",{detail:J})),w(n1()),E("Account created! Keep your username and password safe."),T({username:W,password:""}),b(""),y("student")}catch(L){console.error("Failed to create account",L);const Z=(L==null?void 0:L.code)==="PERMISSION_DENIED"?"Permission denied when saving your account. Check Firebase rules for /accounts.":(L==null?void 0:L.message)||String(L||"Unknown error");m(`Could not create account. Contact Bella. ${Z}`)}finally{k(!1)}},Aa=I("svg",{className:"w-5 h-5 text-slate-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[h("circle",{cx:"12",cy:"7",r:"4"}),h("path",{d:"M5.5 20a6.5 6.5 0 0 1 13 0"})]}),C0=I("svg",{className:"w-5 h-5 text-slate-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[h("path",{d:"M12 3.25l8 2.75v5.5c0 4.75-3.2 9-8 10.5-4.8-1.5-8-5.75-8-10.5V6z"}),h("path",{d:"M9 12.25l2.25 2.25L15 9.75"})]}),y0=I("svg",{className:"w-5 h-5 text-slate-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[h("circle",{cx:"12",cy:"12",r:"9"}),h("path",{d:"M10 9.5a2.5 2.5 0 1 1 3.8 2.2c-.75.45-1.05.85-1.05 1.7V14"}),h("circle",{cx:"12",cy:"16.5",r:".75",fill:"currentColor",stroke:"none"})]}),yi="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400";return I(G,{children:[I("div",{className:"flex items-center gap-2",children:[At?I("div",{className:"relative",ref:he,onMouseEnter:()=>{V.current&&clearTimeout(V.current),Re(!0)},onMouseLeave:()=>{V.current=setTimeout(()=>Re(!1),300)},children:[I("button",{type:"button",className:yi,"aria-haspopup":"menu","aria-expanded":_t,onClick:()=>Re(M=>!M),children:[h("span",{className:"sr-only",children:"Account menu"}),Aa]}),I("div",{className:`absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white shadow-lg transition-opacity z-60 ${_t?"opacity-100 visible":"opacity-0 invisible pointer-events-none"}`,onMouseEnter:()=>{V.current&&clearTimeout(V.current),Re(!0)},onMouseLeave:()=>{V.current=setTimeout(()=>Re(!1),300)},children:[I("div",{className:"px-4 py-2 text-sm text-slate-500",children:["Logged in as ",h("span",{className:"font-semibold text-slate-700",children:$n})]}),h("button",{type:"button",className:"w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-b-xl",onClick:async()=>{Re(!1);try{Pt?await _b(ut):ct&&vt()}finally{t==null||t()}},children:"Log out"})]})]}):I("button",{type:"button",className:yi,onClick:()=>{u(!1),f(!1),y("student"),w(n1()),m(""),E(""),n(""),i(""),l(!0)},children:[h("span",{className:"sr-only",children:"Open account options"}),Aa]}),I("button",{type:"button",className:yi,onClick:()=>{Re(!1),l(!1),u(!1),f(!0)},children:[h("span",{className:"sr-only",children:"View rules"}),C0]}),I("button",{type:"button",className:yi,onClick:()=>{Re(!1),l(!1),f(!1),u(!0)},children:[h("span",{className:"sr-only",children:"How to use Yokote Net"}),y0]})]}),a&&h("div",{className:"fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-slate-900/50 px-4 py-10",onClick:()=>l(!1),children:h("div",{className:"relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl",onClick:M=>M.stopPropagation(),children:I("div",{className:"space-y-4",children:[I("div",{className:"flex items-center gap-2 bg-slate-100 rounded-2xl p-1 text-sm font-semibold",children:[h("button",{type:"button",className:`flex-1 px-3 py-2 rounded-xl transition ${p==="student"?"bg-white shadow text-slate-900":"text-slate-500"}`,onClick:()=>{y("student"),b("")},children:"Student"}),h("button",{type:"button",className:`flex-1 px-3 py-2 rounded-xl transition ${p==="admin"?"bg-white shadow text-slate-900":"text-slate-500"}`,onClick:()=>{y("admin"),b("")},children:"Admin"}),h("button",{type:"button",className:`flex-1 px-3 py-2 rounded-xl transition ${p==="create"?"bg-white shadow text-slate-900":"text-slate-500"}`,onClick:()=>{y("create"),m(""),E(""),k(!1),b("")},children:"Create"})]}),p==="student"&&I("div",{className:"space-y-3",children:[h("h2",{className:"text-xl font-semibold text-slate-900",children:"Student Log-In"}),I("form",{className:"space-y-3",onSubmit:Pa,children:[h("input",{ref:B,className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"Username",value:x.username,onChange:M=>T(W=>({...W,username:M.target.value}))}),h("input",{className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"Password",type:"password",value:x.password,onChange:M=>T(W=>({...W,password:M.target.value}))}),F&&h("div",{className:"text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2",children:F}),h("button",{type:"submit",className:"w-full px-4 py-2 rounded-2xl font-semibold shadow bg-slate-900 text-white hover:bg-slate-800",children:"Log In"})]})]}),p==="admin"&&I("div",{className:"space-y-3",children:[h("h2",{className:"text-xl font-semibold text-slate-900",children:"Admin Log-In"}),I("form",{className:"space-y-3",onSubmit:_n,children:[h("input",{ref:ae,className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"Email",type:"email",autoComplete:"email",value:e,onChange:M=>n(M.target.value),required:!0}),h("input",{className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"Password",type:"password",autoComplete:"current-password",value:r,onChange:M=>i(M.target.value),required:!0}),h("button",{type:"submit",className:"w-full px-4 py-2 rounded-2xl font-semibold shadow bg-slate-900 text-white hover:bg-slate-800",children:"Log In"})]})]}),p==="create"&&I("div",{className:"space-y-3",children:[I("div",{className:"space-y-1",children:[h("h2",{className:"text-xl font-semibold text-slate-900",children:"Create an Account"}),h("p",{className:"text-sm text-slate-500",children:"Use romaji (A–Z) for your name. Keep your username and password safe."})]}),I("form",{className:"space-y-3",onSubmit:g0,children:[h("input",{ref:N,className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"Username (3–20 letters or numbers)",autoComplete:"username",value:v.username,onChange:M=>w(W=>({...W,username:M.target.value}))}),h("input",{className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"Password (min. 6 characters)",type:"password",autoComplete:"new-password",value:v.password,onChange:M=>w(W=>({...W,password:M.target.value}))}),I("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[h("input",{className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"First name (romaji)",autoComplete:"given-name",value:v.firstName,onChange:M=>w(W=>({...W,firstName:M.target.value}))}),h("input",{className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"Last name (romaji)",autoComplete:"family-name",value:v.lastName,onChange:M=>w(W=>({...W,lastName:M.target.value}))})]}),g&&h("div",{className:"text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2",children:g}),C&&h("div",{className:"text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2",children:C}),h("button",{type:"submit",disabled:S,className:`w-full px-4 py-2 rounded-2xl font-semibold shadow ${S?"bg-slate-200 text-slate-500":"bg-slate-900 text-white hover:bg-slate-800"}`,children:S?"Creating…":"Create Account"})]})]})]})})}),c&&h("div",{className:"fixed inset-0 z-40 flex min-h-screen items-center justify-center bg-slate-900/50 px-4 py-10",onClick:()=>u(!1),children:I("div",{className:"relative w-full max-w-lg rounded-3xl bg-white p-6 md:p-7 shadow-2xl space-y-4",onClick:M=>M.stopPropagation(),children:[I("div",{className:"space-y-2 text-left",children:[h("h2",{className:"text-2xl font-semibold text-slate-900",children:"How to Use Yokote Net"}),h("p",{className:"text-sm text-slate-500",children:"Before doing anything else, make sure you have read the rules on the home page."}),h("p",{className:"text-xs text-slate-400",children:"まず最初に、ホーム画面のルールを読んでください。"})]}),I("div",{className:"space-y-3 text-left text-base text-slate-700 leading-relaxed",children:[I("div",{children:[h("p",{children:"To use this website, enter the room code Bella gives you. That code takes you to your class's page. Stay in your own class space."}),h("p",{className:"text-sm text-slate-500 mt-1",children:"ベラにもらったルームコードを入力すると、あなたのクラス専用ページに移動します。他のクラスのページには入らないでください。"})]}),I("div",{children:[h("p",{children:"Next, click the log-in button to create an account. Use your full name, choose a custom username, and set a password you will not share with anyone."}),h("p",{className:"text-sm text-slate-500 mt-1",children:"次に、ログインボタンを押してアカウントを作成します。本名を入力し、ユーザー名と他人に教えないパスワードを設定してください。"})]}),I("div",{children:[I("p",{children:["Once you have an account, type your message and press ",h("strong",{children:"Post"})," when you are ready. You can search posts by username, tags, or content, and you can react to and comment on classmates' posts."]}),I("p",{className:"text-sm text-slate-500 mt-1",children:["アカウントができたら、メッセージを書いて準備ができたら",h("strong",{children:"Post"}),"を押してください。ユーザー名・タグ・投稿内容で検索でき、リアクションやコメントもできます。"]})]}),I("div",{children:[h("p",{className:"font-medium text-slate-800",children:"Have fun and be kind!"}),h("p",{className:"text-sm text-slate-500 mt-1",children:"楽しく、そして優しく使いましょう！"})]})]})]})}),d&&h("div",{className:"fixed inset-0 z-45 flex min-h-screen items-center justify-center bg-slate-900/50 px-4 py-10",onClick:()=>f(!1),children:I("div",{className:"relative w-full max-w-2xl max-h-[80vh] rounded-3xl bg-white p-6 md:p-7 shadow-2xl flex flex-col",onClick:M=>M.stopPropagation(),children:[I("div",{className:"space-y-2 text-left",children:[h("h2",{className:"text-2xl font-semibold text-slate-900",children:"Rules"}),h("p",{className:"text-sm text-slate-500",children:"Review these guidelines before you log in, post, or comment."}),h("p",{className:"text-xs text-slate-400",children:"ログイン・投稿・コメントをする前に必ずこのルールを確認してください。"})]}),h("div",{className:"mt-3 flex-1 overflow-y-auto pr-1 space-y-2",children:cN.map(M=>h(CN,{item:M,isOpen:le===M.id,onToggle:W=>fe(Ie=>Ie===W?null:W)},M.id))})]})})]})}function vN(){return h(gv,{children:I(fv,{children:[h(Ei,{path:"/",element:h(dT,{})}),h(Ei,{path:"/contact",element:h(pT,{})}),h(Ei,{path:"/faq",element:h(yT,{})}),h(Ei,{path:"/yokote-net",element:h(fN,{})}),h(Ei,{path:"*",element:h(vT,{})})]})})}const _N={user:JSON.parse(localStorage.getItem("user"))||null,isLoading:!1,isError:!1},wN=(t,e)=>{switch(e.type){case"LOG_IN":return localStorage.setItem("user",JSON.stringify(e.payload)),{...t,isLoading:!1,isError:!1,user:e.payload};case"LOADING":return{...t,isLoading:!0,isError:!1};case"SUCCESS":return{...t,isLoading:!1,isError:!1};case"ERROR":return{...t,isLoading:!1,isError:!0};case"LOG_OUT":return localStorage.removeItem("user"),{...t,isLoading:!1,isError:!1,user:null};default:return t}},EN=_.createContext(null),{Provider:SN}=EN;function TN({children:t}){const[e,n]=_.useReducer(wN,_N);return h(SN,{value:{state:e,dispatchUser:n},children:t})}const xN={show:!1,message:"",variant:""},kN=(t,e)=>{switch(e.type){case"SHOW":return{show:!0,message:e.payload,variant:e.variant};case"HIDE":return{show:!1,message:"",variant:""};default:return t}},IN=_.createContext(null),{Provider:PN}=IN,AN=({children:t})=>{const[e,n]=_.useReducer(kN,xN);return h(PN,{value:{alertState:e,dispatchAlert:n},children:t})};Ec.createRoot(document.getElementById("root")).render(h(Jt.StrictMode,{children:h(AN,{children:h(TN,{children:h(vN,{})})})}));
