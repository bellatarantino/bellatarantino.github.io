var bm=Object.defineProperty;var Mm=(t,e,n)=>e in t?bm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var un=(t,e,n)=>(Mm(t,typeof e!="symbol"?e+"":e,n),n);function Dm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function al(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l6={exports:{}},ll={},c6={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),Om=Symbol.for("react.portal"),Lm=Symbol.for("react.fragment"),Fm=Symbol.for("react.strict_mode"),Vm=Symbol.for("react.profiler"),Um=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),zm=Symbol.for("react.forward_ref"),jm=Symbol.for("react.suspense"),$m=Symbol.for("react.memo"),Wm=Symbol.for("react.lazy"),f3=Symbol.iterator;function Hm(t){return t===null||typeof t!="object"?null:(t=f3&&t[f3]||t["@@iterator"],typeof t=="function"?t:null)}var u6={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d6=Object.assign,h6={};function ss(t,e,n){this.props=t,this.context=e,this.refs=h6,this.updater=n||u6}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function f6(){}f6.prototype=ss.prototype;function ju(t,e,n){this.props=t,this.context=e,this.refs=h6,this.updater=n||u6}var $u=ju.prototype=new f6;$u.constructor=ju;d6($u,ss.prototype);$u.isPureReactComponent=!0;var p3=Array.isArray,p6=Object.prototype.hasOwnProperty,Wu={current:null},m6={key:!0,ref:!0,__self:!0,__source:!0};function g6(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)p6.call(e,r)&&!m6.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ho,type:t,key:s,ref:o,props:i,_owner:Wu.current}}function Gm(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function Km(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var m3=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Km(""+t.key):e.toString(36)}function Va(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case Om:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ql(o,0):r,p3(i)?(n="",t!=null&&(n=t.replace(m3,"$&/")+"/"),Va(i,e,n,"",function(c){return c})):i!=null&&(Hu(i)&&(i=Gm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(m3,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",p3(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ql(s,a);o+=Va(s,e,n,l,i)}else if(l=Hm(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ql(s,a++),o+=Va(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(t,e,n){if(t==null)return t;var r=[],i=0;return Va(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qe={current:null},Ua={transition:null},Ym={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:Wu};H.Children={map:fa,forEach:function(t,e,n){fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fa(t,function(){e++}),e},toArray:function(t){return fa(t,function(e){return e})||[]},only:function(t){if(!Hu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=ss;H.Fragment=Lm;H.Profiler=Vm;H.PureComponent=ju;H.StrictMode=Fm;H.Suspense=jm;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ym;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=d6({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)p6.call(e,l)&&!m6.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ho,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:Bm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Um,_context:t},t.Consumer=t};H.createElement=g6;H.createFactory=function(t){var e=g6.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:zm,render:t}};H.isValidElement=Hu;H.lazy=function(t){return{$$typeof:Wm,_payload:{_status:-1,_result:t},_init:qm}};H.memo=function(t,e){return{$$typeof:$m,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Qe.current.useCallback(t,e)};H.useContext=function(t){return Qe.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Qe.current.useDeferredValue(t)};H.useEffect=function(t,e){return Qe.current.useEffect(t,e)};H.useId=function(){return Qe.current.useId()};H.useImperativeHandle=function(t,e,n){return Qe.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Qe.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Qe.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Qe.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Qe.current.useReducer(t,e,n)};H.useRef=function(t){return Qe.current.useRef(t)};H.useState=function(t){return Qe.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Qe.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Qe.current.useTransition()};H.version="18.2.0";c6.exports=H;var S=c6.exports;const bt=al(S),Qm=Dm({__proto__:null,default:bt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm=S,Jm=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),eg=Object.prototype.hasOwnProperty,tg=Xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ng={key:!0,ref:!0,__self:!0,__source:!0};function C6(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eg.call(e,r)&&!ng.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Jm,type:t,key:s,ref:o,props:i,_owner:tg.current}}ll.Fragment=Zm;ll.jsx=C6;ll.jsxs=C6;l6.exports=ll;var Gu=l6.exports;const W=Gu.Fragment,f=Gu.jsx,A=Gu.jsxs;var ec={},y6={exports:{}},ht={},v6={exports:{}},_6={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,V){var B=R.length;R.push(V);e:for(;0<B;){var se=B-1>>>1,ve=R[se];if(0<i(ve,V))R[se]=V,R[B]=ve,B=se;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var V=R[0],B=R.pop();if(B!==V){R[0]=B;e:for(var se=0,ve=R.length,oi=ve>>>1;se<oi;){var It=2*(se+1)-1,vs=R[It],N=It+1,U=R[N];if(0>i(vs,B))N<ve&&0>i(U,vs)?(R[se]=U,R[N]=B,se=N):(R[se]=vs,R[It]=B,se=It);else if(N<ve&&0>i(U,B))R[se]=U,R[N]=B,se=N;else break e}}return V}function i(R,V){var B=R.sortIndex-V.sortIndex;return B!==0?B:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,y=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(R){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=R)r(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function E(R){if(v=!1,C(R),!y)if(n(l)!==null)y=!0,Er(w);else{var V=n(c);V!==null&&ie(E,V.startTime-R)}}function w(R,V){y=!1,v&&(v=!1,g(I),I=-1),p=!0;var B=h;try{for(C(V),d=n(l);d!==null&&(!(d.expirationTime>V)||R&&!ye());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var ve=se(d.expirationTime<=V);V=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(l)&&r(l),C(V)}else r(l);d=n(l)}if(d!==null)var oi=!0;else{var It=n(c);It!==null&&ie(E,It.startTime-V),oi=!1}return oi}finally{d=null,h=B,p=!1}}var T=!1,x=null,I=-1,O=5,M=-1;function ye(){return!(t.unstable_now()-M<O)}function Ht(){if(x!==null){var R=t.unstable_now();M=R;var V=!0;try{V=x(!0,R)}finally{V?an():(T=!1,x=null)}}else T=!1}var an;if(typeof m=="function")an=function(){m(Ht)};else if(typeof MessageChannel<"u"){var Nn=new MessageChannel,ys=Nn.port2;Nn.port1.onmessage=Ht,an=function(){ys.postMessage(null)}}else an=function(){_(Ht,0)};function Er(R){x=R,T||(T=!0,an())}function ie(R,V){I=_(function(){R(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Er(w))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var B=h;h=V;try{return R()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=h;h=R;try{return V()}finally{h=B}},t.unstable_scheduleCallback=function(R,V,B){var se=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?se+B:se):B=se,R){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=B+ve,R={id:u++,callback:V,priorityLevel:R,startTime:B,expirationTime:ve,sortIndex:-1},B>se?(R.sortIndex=B,e(c,R),n(l)===null&&R===n(c)&&(v?(g(I),I=-1):v=!0,ie(E,B-se))):(R.sortIndex=ve,e(l,R),y||p||(y=!0,Er(w))),R},t.unstable_shouldYield=ye,t.unstable_wrapCallback=function(R){var V=h;return function(){var B=h;h=V;try{return R.apply(this,arguments)}finally{h=B}}}})(_6);v6.exports=_6;var rg=v6.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w6=S,dt=rg;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E6=new Set,co={};function ti(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(co[t]=e,t=0;t<e.length;t++)E6.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=Object.prototype.hasOwnProperty,ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g3={},C3={};function sg(t){return tc.call(C3,t)?!0:tc.call(g3,t)?!1:ig.test(t)?C3[t]=!0:(g3[t]=!0,!1)}function og(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ag(t,e,n,r){if(e===null||typeof e>"u"||og(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ku=/[\-:]([a-z])/g;function qu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ku,qu);Ve[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ku,qu);Ve[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ku,qu);Ve[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yu(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ag(e,n,i,r)&&(n=null),r||i===null?sg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=w6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),di=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),S6=Symbol.for("react.provider"),T6=Symbol.for("react.context"),Xu=Symbol.for("react.forward_ref"),rc=Symbol.for("react.suspense"),ic=Symbol.for("react.suspense_list"),Ju=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),I6=Symbol.for("react.offscreen"),y3=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=y3&&t[y3]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,Xl;function Ls(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var Jl=!1;function Zl(t,e){if(!t||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ls(t):""}function lg(t){switch(t.tag){case 5:return Ls(t.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case di:return"Portal";case nc:return"Profiler";case Qu:return"StrictMode";case rc:return"Suspense";case ic:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T6:return(t.displayName||"Context")+".Consumer";case S6:return(t._context.displayName||"Context")+".Provider";case Xu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ju:return e=t.displayName||null,e!==null?e:sc(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return sc(t(e))}catch{}}return null}function cg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(e);case 8:return e===Qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function k6(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ug(t){var e=k6(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ma(t){t._valueTracker||(t._valueTracker=ug(t))}function x6(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=k6(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function a1(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oc(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function v3(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P6(t,e){e=e.checked,e!=null&&Yu(t,"checked",e,!1)}function ac(t,e){P6(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&lc(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _3(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lc(t,e,n){(e!=="number"||a1(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fs=Array.isArray;function Ri(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function w3(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Fs(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function A6(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function E3(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function R6(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?R6(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ga,N6=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dg=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(t){dg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$s[e]=$s[t]})});function b6(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$s.hasOwnProperty(t)&&$s[t]?(""+e).trim():e+"px"}function M6(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=b6(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hg=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dc(t,e){if(e){if(hg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function hc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=null;function Zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pc=null,Ni=null,bi=null;function S3(t){if(t=qo(t)){if(typeof pc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=fl(e),pc(t.stateNode,t.type,e))}}function D6(t){Ni?bi?bi.push(t):bi=[t]:Ni=t}function O6(){if(Ni){var t=Ni,e=bi;if(bi=Ni=null,S3(t),e)for(t=0;t<e.length;t++)S3(e[t])}}function L6(t,e){return t(e)}function F6(){}var e0=!1;function V6(t,e,n){if(e0)return t(e,n);e0=!0;try{return L6(t,e,n)}finally{e0=!1,(Ni!==null||bi!==null)&&(F6(),O6())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var mc=!1;if(wn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){mc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{mc=!1}function fg(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ws=!1,l1=null,c1=!1,gc=null,pg={onError:function(t){Ws=!0,l1=t}};function mg(t,e,n,r,i,s,o,a,l){Ws=!1,l1=null,fg.apply(pg,arguments)}function gg(t,e,n,r,i,s,o,a,l){if(mg.apply(this,arguments),Ws){if(Ws){var c=l1;Ws=!1,l1=null}else throw Error(k(198));c1||(c1=!0,gc=c)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U6(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function T3(t){if(ni(t)!==t)throw Error(k(188))}function Cg(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return T3(i),t;if(s===r)return T3(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function B6(t){return t=Cg(t),t!==null?z6(t):null}function z6(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z6(t);if(e!==null)return e;t=t.sibling}return null}var j6=dt.unstable_scheduleCallback,I3=dt.unstable_cancelCallback,yg=dt.unstable_shouldYield,vg=dt.unstable_requestPaint,Ce=dt.unstable_now,_g=dt.unstable_getCurrentPriorityLevel,e9=dt.unstable_ImmediatePriority,$6=dt.unstable_UserBlockingPriority,u1=dt.unstable_NormalPriority,wg=dt.unstable_LowPriority,W6=dt.unstable_IdlePriority,cl=null,Zt=null;function Eg(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Ig,Sg=Math.log,Tg=Math.LN2;function Ig(t){return t>>>=0,t===0?32:31-(Sg(t)/Tg|0)|0}var Ca=64,ya=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function d1(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Vs(a):(s&=o,s!==0&&(r=Vs(s)))}else o=n&~i,o!==0?r=Vs(o):s!==0&&(r=Vs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function kg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=kg(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function H6(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function t0(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function Pg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function t9(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function G6(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K6,n9,q6,Y6,Q6,yc=!1,va=[],Kn=null,qn=null,Yn=null,fo=new Map,po=new Map,Vn=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function k3(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qo(e),e!==null&&n9(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Rg(t,e,n,r,i){switch(e){case"focusin":return Kn=Es(Kn,t,e,n,r,i),!0;case"dragenter":return qn=Es(qn,t,e,n,r,i),!0;case"mouseover":return Yn=Es(Yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fo.set(s,Es(fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,po.set(s,Es(po.get(s)||null,t,e,n,r,i)),!0}return!1}function X6(t){var e=Rr(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=U6(n),e!==null){t.blockedOn=e,Q6(t.priority,function(){q6(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fc=r,n.target.dispatchEvent(r),fc=null}else return e=qo(n),e!==null&&n9(e),t.blockedOn=n,!1;e.shift()}return!0}function x3(t,e,n){Ba(t)&&n.delete(e)}function Ng(){yc=!1,Kn!==null&&Ba(Kn)&&(Kn=null),qn!==null&&Ba(qn)&&(qn=null),Yn!==null&&Ba(Yn)&&(Yn=null),fo.forEach(x3),po.forEach(x3)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,yc||(yc=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,Ng)))}function mo(t){function e(i){return Ss(i,t)}if(0<va.length){Ss(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kn!==null&&Ss(Kn,t),qn!==null&&Ss(qn,t),Yn!==null&&Ss(Yn,t),fo.forEach(e),po.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)X6(n),n.blockedOn===null&&Vn.shift()}var Mi=Rn.ReactCurrentBatchConfig,h1=!0;function bg(t,e,n,r){var i=Y,s=Mi.transition;Mi.transition=null;try{Y=1,r9(t,e,n,r)}finally{Y=i,Mi.transition=s}}function Mg(t,e,n,r){var i=Y,s=Mi.transition;Mi.transition=null;try{Y=4,r9(t,e,n,r)}finally{Y=i,Mi.transition=s}}function r9(t,e,n,r){if(h1){var i=vc(t,e,n,r);if(i===null)d0(t,e,r,f1,n),k3(t,r);else if(Rg(i,t,e,n,r))r.stopPropagation();else if(k3(t,r),e&4&&-1<Ag.indexOf(t)){for(;i!==null;){var s=qo(i);if(s!==null&&K6(s),s=vc(t,e,n,r),s===null&&d0(t,e,r,f1,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else d0(t,e,r,null,n)}}var f1=null;function vc(t,e,n,r){if(f1=null,t=Zu(r),t=Rr(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U6(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return f1=t,null}function J6(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_g()){case e9:return 1;case $6:return 4;case u1:case wg:return 16;case W6:return 536870912;default:return 16}default:return 16}}var Wn=null,i9=null,za=null;function Z6(){if(za)return za;var t,e=i9,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return za=i.slice(t,1<r?1-r:void 0)}function ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function P3(){return!1}function ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_a:P3,this.isPropagationStopped=P3,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},s9=ft(os),Ko=de({},os,{view:0,detail:0}),Dg=ft(Ko),n0,r0,Ts,ul=de({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:o9,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(n0=t.screenX-Ts.screenX,r0=t.screenY-Ts.screenY):r0=n0=0,Ts=t),n0)},movementY:function(t){return"movementY"in t?t.movementY:r0}}),A3=ft(ul),Og=de({},ul,{dataTransfer:0}),Lg=ft(Og),Fg=de({},Ko,{relatedTarget:0}),i0=ft(Fg),Vg=de({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=ft(Vg),Bg=de({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zg=ft(Bg),jg=de({},os,{data:0}),R3=ft(jg),$g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hg[t])?!!e[t]:!1}function o9(){return Gg}var Kg=de({},Ko,{key:function(t){if(t.key){var e=$g[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:o9,charCode:function(t){return t.type==="keypress"?ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qg=ft(Kg),Yg=de({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),N3=ft(Yg),Qg=de({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:o9}),Xg=ft(Qg),Jg=de({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=ft(Jg),eC=de({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tC=ft(eC),nC=[9,13,27,32],a9=wn&&"CompositionEvent"in window,Hs=null;wn&&"documentMode"in document&&(Hs=document.documentMode);var rC=wn&&"TextEvent"in window&&!Hs,e7=wn&&(!a9||Hs&&8<Hs&&11>=Hs),b3=String.fromCharCode(32),M3=!1;function t7(t,e){switch(t){case"keyup":return nC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n7(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function iC(t,e){switch(t){case"compositionend":return n7(e);case"keypress":return e.which!==32?null:(M3=!0,b3);case"textInput":return t=e.data,t===b3&&M3?null:t;default:return null}}function sC(t,e){if(fi)return t==="compositionend"||!a9&&t7(t,e)?(t=Z6(),za=i9=Wn=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e7&&e.locale!=="ko"?null:e.data;default:return null}}var oC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function D3(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oC[t.type]:e==="textarea"}function r7(t,e,n,r){D6(r),e=p1(e,"onChange"),0<e.length&&(n=new s9("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gs=null,go=null;function aC(t){p7(t,0)}function dl(t){var e=gi(t);if(x6(e))return t}function lC(t,e){if(t==="change")return e}var i7=!1;if(wn){var s0;if(wn){var o0="oninput"in document;if(!o0){var O3=document.createElement("div");O3.setAttribute("oninput","return;"),o0=typeof O3.oninput=="function"}s0=o0}else s0=!1;i7=s0&&(!document.documentMode||9<document.documentMode)}function L3(){Gs&&(Gs.detachEvent("onpropertychange",s7),go=Gs=null)}function s7(t){if(t.propertyName==="value"&&dl(go)){var e=[];r7(e,go,t,Zu(t)),V6(aC,e)}}function cC(t,e,n){t==="focusin"?(L3(),Gs=e,go=n,Gs.attachEvent("onpropertychange",s7)):t==="focusout"&&L3()}function uC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(go)}function dC(t,e){if(t==="click")return dl(e)}function hC(t,e){if(t==="input"||t==="change")return dl(e)}function fC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:fC;function Co(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tc.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function F3(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function V3(t,e){var n=F3(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=F3(n)}}function o7(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o7(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a7(){for(var t=window,e=a1();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=a1(t.document)}return e}function l9(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pC(t){var e=a7(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o7(n.ownerDocument.documentElement,n)){if(r!==null&&l9(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=V3(n,s);var o=V3(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mC=wn&&"documentMode"in document&&11>=document.documentMode,pi=null,_c=null,Ks=null,wc=!1;function U3(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wc||pi==null||pi!==a1(r)||(r=pi,"selectionStart"in r&&l9(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ks&&Co(Ks,r)||(Ks=r,r=p1(_c,"onSelect"),0<r.length&&(e=new s9("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},a0={},l7={};wn&&(l7=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function hl(t){if(a0[t])return a0[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l7)return a0[t]=e[n];return t}var c7=hl("animationend"),u7=hl("animationiteration"),d7=hl("animationstart"),h7=hl("transitionend"),f7=new Map,B3="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){f7.set(t,e),ti(e,[t])}for(var l0=0;l0<B3.length;l0++){var c0=B3[l0],gC=c0.toLowerCase(),CC=c0[0].toUpperCase()+c0.slice(1);mr(gC,"on"+CC)}mr(c7,"onAnimationEnd");mr(u7,"onAnimationIteration");mr(d7,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(h7,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function z3(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gg(r,e,void 0,t),t.currentTarget=null}function p7(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;z3(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;z3(i,a,c),s=l}}}if(c1)throw t=gc,c1=!1,gc=null,t}function ee(t,e){var n=e[kc];n===void 0&&(n=e[kc]=new Set);var r=t+"__bubble";n.has(r)||(m7(e,t,2,!1),n.add(r))}function u0(t,e,n){var r=0;e&&(r|=4),m7(n,t,r,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Ea]){t[Ea]=!0,E6.forEach(function(n){n!=="selectionchange"&&(yC.has(n)||u0(n,!1,t),u0(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,u0("selectionchange",!1,e))}}function m7(t,e,n,r){switch(J6(e)){case 1:var i=bg;break;case 4:i=Mg;break;default:i=r9}n=i.bind(null,e,n,t),i=void 0,!mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function d0(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}V6(function(){var c=s,u=Zu(n),d=[];e:{var h=f7.get(t);if(h!==void 0){var p=s9,y=t;switch(t){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":p=qg;break;case"focusin":y="focus",p=i0;break;case"focusout":y="blur",p=i0;break;case"beforeblur":case"afterblur":p=i0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=A3;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Xg;break;case c7:case u7:case d7:p=Ug;break;case h7:p=Zg;break;case"scroll":p=Dg;break;case"wheel":p=tC;break;case"copy":case"cut":case"paste":p=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=N3}var v=(e&4)!==0,_=!v&&t==="scroll",g=v?h!==null?h+"Capture":null:h;v=[];for(var m=c,C;m!==null;){C=m;var E=C.stateNode;if(C.tag===5&&E!==null&&(C=E,g!==null&&(E=ho(m,g),E!=null&&v.push(vo(m,E,C)))),_)break;m=m.return}0<v.length&&(h=new p(h,y,null,n,u),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==fc&&(y=n.relatedTarget||n.fromElement)&&(Rr(y)||y[En]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?Rr(y):null,y!==null&&(_=ni(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(v=A3,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=N3,E="onPointerLeave",g="onPointerEnter",m="pointer"),_=p==null?h:gi(p),C=y==null?h:gi(y),h=new v(E,m+"leave",p,n,u),h.target=_,h.relatedTarget=C,E=null,Rr(u)===c&&(v=new v(g,m+"enter",y,n,u),v.target=C,v.relatedTarget=_,E=v),_=E,p&&y)t:{for(v=p,g=y,m=0,C=v;C;C=ai(C))m++;for(C=0,E=g;E;E=ai(E))C++;for(;0<m-C;)v=ai(v),m--;for(;0<C-m;)g=ai(g),C--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=ai(v),g=ai(g)}v=null}else v=null;p!==null&&j3(d,h,p,v,!1),y!==null&&_!==null&&j3(d,_,y,v,!0)}}e:{if(h=c?gi(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=lC;else if(D3(h))if(i7)w=hC;else{w=uC;var T=cC}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=dC);if(w&&(w=w(t,c))){r7(d,w,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&lc(h,"number",h.value)}switch(T=c?gi(c):window,t){case"focusin":(D3(T)||T.contentEditable==="true")&&(pi=T,_c=c,Ks=null);break;case"focusout":Ks=_c=pi=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,U3(d,n,u);break;case"selectionchange":if(mC)break;case"keydown":case"keyup":U3(d,n,u)}var x;if(a9)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else fi?t7(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(e7&&n.locale!=="ko"&&(fi||I!=="onCompositionStart"?I==="onCompositionEnd"&&fi&&(x=Z6()):(Wn=u,i9="value"in Wn?Wn.value:Wn.textContent,fi=!0)),T=p1(c,I),0<T.length&&(I=new R3(I,t,null,n,u),d.push({event:I,listeners:T}),x?I.data=x:(x=n7(n),x!==null&&(I.data=x)))),(x=rC?iC(t,n):sC(t,n))&&(c=p1(c,"onBeforeInput"),0<c.length&&(u=new R3("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=x))}p7(d,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function p1(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ho(t,n),s!=null&&r.unshift(vo(t,s,i)),s=ho(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function j3(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ho(n,s),l!=null&&o.unshift(vo(n,l,a))):i||(l=ho(n,s),l!=null&&o.push(vo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vC=/\r\n?/g,_C=/\u0000|\uFFFD/g;function $3(t){return(typeof t=="string"?t:""+t).replace(vC,`
`).replace(_C,"")}function Sa(t,e,n){if(e=$3(e),$3(t)!==e&&n)throw Error(k(425))}function m1(){}var Ec=null,Sc=null;function Tc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,wC=typeof clearTimeout=="function"?clearTimeout:void 0,W3=typeof Promise=="function"?Promise:void 0,EC=typeof queueMicrotask=="function"?queueMicrotask:typeof W3<"u"?function(t){return W3.resolve(null).then(t).catch(SC)}:Ic;function SC(t){setTimeout(function(){throw t})}function h0(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mo(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function H3(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),Xt="__reactFiber$"+as,_o="__reactProps$"+as,En="__reactContainer$"+as,kc="__reactEvents$"+as,TC="__reactListeners$"+as,IC="__reactHandles$"+as;function Rr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=H3(t);t!==null;){if(n=t[Xt])return n;t=H3(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[Xt]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function fl(t){return t[_o]||null}var xc=[],Ci=-1;function gr(t){return{current:t}}function ne(t){0>Ci||(t.current=xc[Ci],xc[Ci]=null,Ci--)}function Z(t,e){Ci++,xc[Ci]=t.current,t.current=e}var ar={},We=gr(ar),nt=gr(!1),jr=ar;function Ki(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rt(t){return t=t.childContextTypes,t!=null}function g1(){ne(nt),ne(We)}function G3(t,e,n){if(We.current!==ar)throw Error(k(168));Z(We,e),Z(nt,n)}function g7(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,cg(t)||"Unknown",i));return de({},n,r)}function C1(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,jr=We.current,Z(We,t),Z(nt,nt.current),!0}function K3(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=g7(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,ne(nt),ne(We),Z(We,t)):ne(nt),Z(nt,n)}var hn=null,pl=!1,f0=!1;function C7(t){hn===null?hn=[t]:hn.push(t)}function kC(t){pl=!0,C7(t)}function Cr(){if(!f0&&hn!==null){f0=!0;var t=0,e=Y;try{var n=hn;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hn=null,pl=!1}catch(i){throw hn!==null&&(hn=hn.slice(t+1)),j6(e9,Cr),i}finally{Y=e,f0=!1}}return null}var yi=[],vi=0,y1=null,v1=0,Ct=[],yt=0,$r=null,fn=1,pn="";function Ir(t,e){yi[vi++]=v1,yi[vi++]=y1,y1=t,v1=e}function y7(t,e,n){Ct[yt++]=fn,Ct[yt++]=pn,Ct[yt++]=$r,$r=t;var r=fn;t=pn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Ft(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function c9(t){t.return!==null&&(Ir(t,1),y7(t,1,0))}function u9(t){for(;t===y1;)y1=yi[--vi],yi[vi]=null,v1=yi[--vi],yi[vi]=null;for(;t===$r;)$r=Ct[--yt],Ct[yt]=null,pn=Ct[--yt],Ct[yt]=null,fn=Ct[--yt],Ct[yt]=null}var ut=null,ct=null,re=!1,Rt=null;function v7(t,e){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function q3(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ut=t,ct=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ut=t,ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ut=t,ct=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ac(t){if(re){var e=ct;if(e){var n=e;if(!q3(t,e)){if(Pc(t))throw Error(k(418));e=Qn(n.nextSibling);var r=ut;e&&q3(t,e)?v7(r,n):(t.flags=t.flags&-4097|2,re=!1,ut=t)}}else{if(Pc(t))throw Error(k(418));t.flags=t.flags&-4097|2,re=!1,ut=t}}}function Y3(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ut=t}function Ta(t){if(t!==ut)return!1;if(!re)return Y3(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tc(t.type,t.memoizedProps)),e&&(e=ct)){if(Pc(t))throw _7(),Error(k(418));for(;e;)v7(t,e),e=Qn(e.nextSibling)}if(Y3(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ct=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ct=null}}else ct=ut?Qn(t.stateNode.nextSibling):null;return!0}function _7(){for(var t=ct;t;)t=Qn(t.nextSibling)}function qi(){ct=ut=null,re=!1}function d9(t){Rt===null?Rt=[t]:Rt.push(t)}var xC=Rn.ReactCurrentBatchConfig;function Pt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var _1=gr(null),w1=null,_i=null,h9=null;function f9(){h9=_i=w1=null}function p9(t){var e=_1.current;ne(_1),t._currentValue=e}function Rc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){w1=t,h9=_i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function St(t){var e=t._currentValue;if(h9!==t)if(t={context:t,memoizedValue:e,next:null},_i===null){if(w1===null)throw Error(k(308));_i=t,w1.dependencies={lanes:0,firstContext:t}}else _i=_i.next=t;return e}var Nr=null;function m9(t){Nr===null?Nr=[t]:Nr.push(t)}function w7(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,m9(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function g9(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E7(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,m9(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function $a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,t9(t,n)}}function Q3(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function E1(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=de({},d,h);break e;case 2:Fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=d}}function X3(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var S7=new w6.Component().refs;function Nc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ml={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Zn(t),s=yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(Vt(e,t,i,r),$a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Zn(t),s=yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(Vt(e,t,i,r),$a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=Zn(t),i=yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&(Vt(e,t,r,n),$a(e,t,r))}};function J3(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Co(n,r)||!Co(i,s):!0}function T7(t,e,n){var r=!1,i=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=St(s):(i=rt(e)?jr:We.current,r=e.contextTypes,s=(r=r!=null)?Ki(t,i):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ml,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Z3(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ml.enqueueReplaceState(e,e.state,null)}function bc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=S7,g9(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=St(s):(s=rt(e)?jr:We.current,i.context=Ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ml.enqueueReplaceState(i,i.state,null),E1(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===S7&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Ia(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function e2(t){var e=t._init;return e(t._payload)}function I7(t){function e(g,m){if(t){var C=g.deletions;C===null?(g.deletions=[m],g.flags|=16):C.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=er(g,m),g.index=0,g.sibling=null,g}function s(g,m,C){return g.index=C,t?(C=g.alternate,C!==null?(C=C.index,C<m?(g.flags|=2,m):C):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,C,E){return m===null||m.tag!==6?(m=_0(C,g.mode,E),m.return=g,m):(m=i(m,C),m.return=g,m)}function l(g,m,C,E){var w=C.type;return w===hi?u(g,m,C.props.children,E,C.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ln&&e2(w)===m.type)?(E=i(m,C.props),E.ref=Is(g,m,C),E.return=g,E):(E=Ya(C.type,C.key,C.props,null,g.mode,E),E.ref=Is(g,m,C),E.return=g,E)}function c(g,m,C,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==C.containerInfo||m.stateNode.implementation!==C.implementation?(m=w0(C,g.mode,E),m.return=g,m):(m=i(m,C.children||[]),m.return=g,m)}function u(g,m,C,E,w){return m===null||m.tag!==7?(m=Vr(C,g.mode,E,w),m.return=g,m):(m=i(m,C),m.return=g,m)}function d(g,m,C){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_0(""+m,g.mode,C),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pa:return C=Ya(m.type,m.key,m.props,null,g.mode,C),C.ref=Is(g,null,m),C.return=g,C;case di:return m=w0(m,g.mode,C),m.return=g,m;case Ln:var E=m._init;return d(g,E(m._payload),C)}if(Fs(m)||_s(m))return m=Vr(m,g.mode,C,null),m.return=g,m;Ia(g,m)}return null}function h(g,m,C,E){var w=m!==null?m.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return w!==null?null:a(g,m,""+C,E);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case pa:return C.key===w?l(g,m,C,E):null;case di:return C.key===w?c(g,m,C,E):null;case Ln:return w=C._init,h(g,m,w(C._payload),E)}if(Fs(C)||_s(C))return w!==null?null:u(g,m,C,E,null);Ia(g,C)}return null}function p(g,m,C,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(C)||null,a(m,g,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case pa:return g=g.get(E.key===null?C:E.key)||null,l(m,g,E,w);case di:return g=g.get(E.key===null?C:E.key)||null,c(m,g,E,w);case Ln:var T=E._init;return p(g,m,C,T(E._payload),w)}if(Fs(E)||_s(E))return g=g.get(C)||null,u(m,g,E,w,null);Ia(m,E)}return null}function y(g,m,C,E){for(var w=null,T=null,x=m,I=m=0,O=null;x!==null&&I<C.length;I++){x.index>I?(O=x,x=null):O=x.sibling;var M=h(g,x,C[I],E);if(M===null){x===null&&(x=O);break}t&&x&&M.alternate===null&&e(g,x),m=s(M,m,I),T===null?w=M:T.sibling=M,T=M,x=O}if(I===C.length)return n(g,x),re&&Ir(g,I),w;if(x===null){for(;I<C.length;I++)x=d(g,C[I],E),x!==null&&(m=s(x,m,I),T===null?w=x:T.sibling=x,T=x);return re&&Ir(g,I),w}for(x=r(g,x);I<C.length;I++)O=p(x,g,I,C[I],E),O!==null&&(t&&O.alternate!==null&&x.delete(O.key===null?I:O.key),m=s(O,m,I),T===null?w=O:T.sibling=O,T=O);return t&&x.forEach(function(ye){return e(g,ye)}),re&&Ir(g,I),w}function v(g,m,C,E){var w=_s(C);if(typeof w!="function")throw Error(k(150));if(C=w.call(C),C==null)throw Error(k(151));for(var T=w=null,x=m,I=m=0,O=null,M=C.next();x!==null&&!M.done;I++,M=C.next()){x.index>I?(O=x,x=null):O=x.sibling;var ye=h(g,x,M.value,E);if(ye===null){x===null&&(x=O);break}t&&x&&ye.alternate===null&&e(g,x),m=s(ye,m,I),T===null?w=ye:T.sibling=ye,T=ye,x=O}if(M.done)return n(g,x),re&&Ir(g,I),w;if(x===null){for(;!M.done;I++,M=C.next())M=d(g,M.value,E),M!==null&&(m=s(M,m,I),T===null?w=M:T.sibling=M,T=M);return re&&Ir(g,I),w}for(x=r(g,x);!M.done;I++,M=C.next())M=p(x,g,I,M.value,E),M!==null&&(t&&M.alternate!==null&&x.delete(M.key===null?I:M.key),m=s(M,m,I),T===null?w=M:T.sibling=M,T=M);return t&&x.forEach(function(Ht){return e(g,Ht)}),re&&Ir(g,I),w}function _(g,m,C,E){if(typeof C=="object"&&C!==null&&C.type===hi&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case pa:e:{for(var w=C.key,T=m;T!==null;){if(T.key===w){if(w=C.type,w===hi){if(T.tag===7){n(g,T.sibling),m=i(T,C.props.children),m.return=g,g=m;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ln&&e2(w)===T.type){n(g,T.sibling),m=i(T,C.props),m.ref=Is(g,T,C),m.return=g,g=m;break e}n(g,T);break}else e(g,T);T=T.sibling}C.type===hi?(m=Vr(C.props.children,g.mode,E,C.key),m.return=g,g=m):(E=Ya(C.type,C.key,C.props,null,g.mode,E),E.ref=Is(g,m,C),E.return=g,g=E)}return o(g);case di:e:{for(T=C.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===C.containerInfo&&m.stateNode.implementation===C.implementation){n(g,m.sibling),m=i(m,C.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=w0(C,g.mode,E),m.return=g,g=m}return o(g);case Ln:return T=C._init,_(g,m,T(C._payload),E)}if(Fs(C))return y(g,m,C,E);if(_s(C))return v(g,m,C,E);Ia(g,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,C),m.return=g,g=m):(n(g,m),m=_0(C,g.mode,E),m.return=g,g=m),o(g)):n(g,m)}return _}var Yi=I7(!0),k7=I7(!1),Yo={},en=gr(Yo),wo=gr(Yo),Eo=gr(Yo);function br(t){if(t===Yo)throw Error(k(174));return t}function C9(t,e){switch(Z(Eo,e),Z(wo,t),Z(en,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uc(e,t)}ne(en),Z(en,e)}function Qi(){ne(en),ne(wo),ne(Eo)}function x7(t){br(Eo.current);var e=br(en.current),n=uc(e,t.type);e!==n&&(Z(wo,t),Z(en,n))}function y9(t){wo.current===t&&(ne(en),ne(wo))}var oe=gr(0);function S1(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var p0=[];function v9(){for(var t=0;t<p0.length;t++)p0[t]._workInProgressVersionPrimary=null;p0.length=0}var Wa=Rn.ReactCurrentDispatcher,m0=Rn.ReactCurrentBatchConfig,Wr=0,ce=null,Se=null,Ae=null,T1=!1,qs=!1,So=0,PC=0;function Ue(){throw Error(k(321))}function _9(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}function w9(t,e,n,r,i,s){if(Wr=s,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wa.current=t===null||t.memoizedState===null?bC:MC,t=n(r,i),qs){s=0;do{if(qs=!1,So=0,25<=s)throw Error(k(301));s+=1,Ae=Se=null,e.updateQueue=null,Wa.current=DC,t=n(r,i)}while(qs)}if(Wa.current=I1,e=Se!==null&&Se.next!==null,Wr=0,Ae=Se=ce=null,T1=!1,e)throw Error(k(300));return t}function E9(){var t=So!==0;return So=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ce.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function Tt(){if(Se===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Se.next;var e=Ae===null?ce.memoizedState:Ae.next;if(e!==null)Ae=e,Se=t;else{if(t===null)throw Error(k(310));Se=t,t={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ae===null?ce.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function To(t,e){return typeof e=="function"?e(t):e}function g0(t){var e=Tt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ce.lanes|=u,Hr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Bt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ce.lanes|=s,Hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function C0(t){var e=Tt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function P7(){}function A7(t,e){var n=ce,r=Tt(),i=e(),s=!Bt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,S9(b7.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Io(9,N7.bind(null,n,r,i,e),void 0,null),Ne===null)throw Error(k(349));Wr&30||R7(n,e,i)}return i}function R7(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function N7(t,e,n,r){e.value=n,e.getSnapshot=r,M7(e)&&D7(t)}function b7(t,e,n){return n(function(){M7(e)&&D7(t)})}function M7(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bt(t,n)}catch{return!0}}function D7(t){var e=Sn(t,1);e!==null&&Vt(e,t,1,-1)}function t2(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=NC.bind(null,ce,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function O7(){return Tt().memoizedState}function Ha(t,e,n,r){var i=Qt();ce.flags|=t,i.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function gl(t,e,n,r){var i=Tt();r=r===void 0?null:r;var s=void 0;if(Se!==null){var o=Se.memoizedState;if(s=o.destroy,r!==null&&_9(r,o.deps)){i.memoizedState=Io(e,n,s,r);return}}ce.flags|=t,i.memoizedState=Io(1|e,n,s,r)}function n2(t,e){return Ha(8390656,8,t,e)}function S9(t,e){return gl(2048,8,t,e)}function L7(t,e){return gl(4,2,t,e)}function F7(t,e){return gl(4,4,t,e)}function V7(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U7(t,e,n){return n=n!=null?n.concat([t]):null,gl(4,4,V7.bind(null,e,t),n)}function T9(){}function B7(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_9(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function z7(t,e){var n=Tt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_9(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function j7(t,e,n){return Wr&21?(Bt(n,e)||(n=H6(),ce.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function AC(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=m0.transition;m0.transition={};try{t(!1),e()}finally{Y=n,m0.transition=r}}function $7(){return Tt().memoizedState}function RC(t,e,n){var r=Zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},W7(t))H7(e,n);else if(n=w7(t,e,n,r),n!==null){var i=qe();Vt(n,t,r,i),G7(n,e,r)}}function NC(t,e,n){var r=Zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(W7(t))H7(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Bt(a,o)){var l=e.interleaved;l===null?(i.next=i,m9(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=w7(t,e,i,r),n!==null&&(i=qe(),Vt(n,t,r,i),G7(n,e,r))}}function W7(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function H7(t,e){qs=T1=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G7(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,t9(t,n)}}var I1={readContext:St,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},bC={readContext:St,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:St,useEffect:n2,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,V7.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RC.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:t2,useDebugValue:T9,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=t2(!1),e=t[0];return t=AC.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,i=Qt();if(re){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Ne===null)throw Error(k(349));Wr&30||R7(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,n2(b7.bind(null,r,s,t),[t]),r.flags|=2048,Io(9,N7.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Ne.identifierPrefix;if(re){var n=pn,r=fn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MC={readContext:St,useCallback:B7,useContext:St,useEffect:S9,useImperativeHandle:U7,useInsertionEffect:L7,useLayoutEffect:F7,useMemo:z7,useReducer:g0,useRef:O7,useState:function(){return g0(To)},useDebugValue:T9,useDeferredValue:function(t){var e=Tt();return j7(e,Se.memoizedState,t)},useTransition:function(){var t=g0(To)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:P7,useSyncExternalStore:A7,useId:$7,unstable_isNewReconciler:!1},DC={readContext:St,useCallback:B7,useContext:St,useEffect:S9,useImperativeHandle:U7,useInsertionEffect:L7,useLayoutEffect:F7,useMemo:z7,useReducer:C0,useRef:O7,useState:function(){return C0(To)},useDebugValue:T9,useDeferredValue:function(t){var e=Tt();return Se===null?e.memoizedState=t:j7(e,Se.memoizedState,t)},useTransition:function(){var t=C0(To)[0],e=Tt().memoizedState;return[t,e]},useMutableSource:P7,useSyncExternalStore:A7,useId:$7,unstable_isNewReconciler:!1};function Xi(t,e){try{var n="",r=e;do n+=lg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function y0(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OC=typeof WeakMap=="function"?WeakMap:Map;function K7(t,e,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){x1||(x1=!0,$c=r),Mc(t,e)},n}function q7(t,e,n){n=yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mc(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function r2(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=YC.bind(null,t,e,n),e.then(t,t))}function i2(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function s2(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yn(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var LC=Rn.ReactCurrentOwner,Ze=!1;function He(t,e,n,r){e.child=t===null?k7(e,null,n,r):Yi(e,t.child,n,r)}function o2(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=w9(t,e,n,r,s,i),n=E9(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(re&&n&&c9(e),e.flags|=1,He(t,e,r,i),e.child)}function a2(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!b9(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Y7(t,e,s,r,i)):(t=Ya(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(o,r)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=er(s,r),t.ref=e.ref,t.return=e,e.child=t}function Y7(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Co(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return Dc(t,e,n,r,i)}function Q7(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Ei,lt),lt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Ei,lt),lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Ei,lt),lt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Ei,lt),lt|=r;return He(t,e,i,n),e.child}function X7(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dc(t,e,n,r,i){var s=rt(n)?jr:We.current;return s=Ki(e,s),Di(e,i),n=w9(t,e,n,r,s,i),r=E9(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(re&&r&&c9(e),e.flags|=1,He(t,e,n,i),e.child)}function l2(t,e,n,r,i){if(rt(n)){var s=!0;C1(e)}else s=!1;if(Di(e,i),e.stateNode===null)Ga(t,e),T7(e,n,r),bc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=St(c):(c=rt(n)?jr:We.current,c=Ki(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Z3(e,o,r,c),Fn=!1;var h=e.memoizedState;o.state=h,E1(e,r,o,i),l=e.memoizedState,a!==r||h!==l||nt.current||Fn?(typeof u=="function"&&(Nc(e,n,u,r),l=e.memoizedState),(a=Fn||J3(e,n,a,r,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,E7(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pt(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=St(l):(l=rt(n)?jr:We.current,l=Ki(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Z3(e,o,r,l),Fn=!1,h=e.memoizedState,o.state=h,E1(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||nt.current||Fn?(typeof p=="function"&&(Nc(e,n,p,r),y=e.memoizedState),(c=Fn||J3(e,n,c,r,h,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Oc(t,e,n,r,s,i)}function Oc(t,e,n,r,i,s){X7(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&K3(e,n,!1),Tn(t,e,s);r=e.stateNode,LC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yi(e,t.child,null,s),e.child=Yi(e,null,a,s)):He(t,e,a,s),e.memoizedState=r.state,i&&K3(e,n,!0),e.child}function J7(t){var e=t.stateNode;e.pendingContext?G3(t,e.pendingContext,e.pendingContext!==e.context):e.context&&G3(t,e.context,!1),C9(t,e.containerInfo)}function c2(t,e,n,r,i){return qi(),d9(i),e.flags|=256,He(t,e,n,r),e.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Z7(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return Ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vl(o,r,0,null),t=Vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fc(n),e.memoizedState=Lc,t):I9(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return FC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lc,r}return s=t.child,t=s.sibling,r=er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function I9(t,e){return e=vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,r){return r!==null&&d9(r),Yi(e,t.child,null,n),t=I9(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=y0(Error(k(422))),ka(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vl({mode:"visible",children:r.children},i,0,null),s=Vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yi(e,t.child,null,o),e.child.memoizedState=Fc(o),e.memoizedState=Lc,s);if(!(e.mode&1))return ka(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=y0(s,r,void 0),ka(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ze||a){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),Vt(r,t,i,-1))}return N9(),r=y0(Error(k(421))),ka(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ct=Qn(i.nextSibling),ut=e,re=!0,Rt=null,t!==null&&(Ct[yt++]=fn,Ct[yt++]=pn,Ct[yt++]=$r,fn=t.id,pn=t.overflow,$r=e),e=I9(e,r.children),e.flags|=4096,e)}function u2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rc(t.return,e,n)}function v0(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ed(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(He(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u2(t,n,e);else if(t.tag===19)u2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&S1(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),v0(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&S1(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}v0(e,!0,n,null,s);break;case"together":v0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VC(t,e,n){switch(e.tag){case 3:J7(e),qi();break;case 5:x7(e);break;case 1:rt(e.type)&&C1(e);break;case 4:C9(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(_1,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?Z7(t,e,n):(Z(oe,oe.current&1),t=Tn(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ed(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Q7(t,e,n)}return Tn(t,e,n)}var td,Vc,nd,rd;td=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vc=function(){};nd=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(en.current);var s=null;switch(n){case"input":i=oc(t,i),r=oc(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=cc(t,i),r=cc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=m1)}dc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rd=function(t,e,n,r){n!==r&&(e.flags|=4)};function ks(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UC(t,e,n){var r=e.pendingProps;switch(u9(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return rt(e.type)&&g1(),Be(e),null;case 3:return r=e.stateNode,Qi(),ne(nt),ne(We),v9(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ta(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rt!==null&&(Gc(Rt),Rt=null))),Vc(t,e),Be(e),null;case 5:y9(e);var i=br(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)nd(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Be(e),null}if(t=br(en.current),Ta(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[_o]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)ee(Us[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":v3(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":w3(r,s),ee("invalid",r)}dc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,a,t),i=["children",""+a]):co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":ma(r),_3(r,s,!0);break;case"textarea":ma(r),E3(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=m1)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R6(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[_o]=r,td(t,e,!1,!1),e.stateNode=t;e:{switch(o=hc(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)ee(Us[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":v3(t,r),i=oc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),ee("invalid",t);break;case"textarea":w3(t,r),i=cc(t,r),ee("invalid",t);break;default:i=r}dc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?M6(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&N6(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&uo(t,l):typeof l=="number"&&uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Yu(t,s,l,o))}switch(n){case"input":ma(t),_3(t,r,!1);break;case"textarea":ma(t),E3(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ri(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ri(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=m1)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)rd(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=br(Eo.current),br(en.current),Ta(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=ut,t!==null))switch(t.tag){case 3:Sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Be(e),null;case 13:if(ne(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&ct!==null&&e.mode&1&&!(e.flags&128))_7(),qi(),e.flags|=98560,s=!1;else if(s=Ta(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Xt]=e}else qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else Rt!==null&&(Gc(Rt),Rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?xe===0&&(xe=3):N9())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return Qi(),Vc(t,e),t===null&&yo(e.stateNode.containerInfo),Be(e),null;case 10:return p9(e.type._context),Be(e),null;case 17:return rt(e.type)&&g1(),Be(e),null;case 19:if(ne(oe),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ks(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=S1(t),o!==null){for(e.flags|=128,ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Ji&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=S1(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Be(e),null}else 2*Ce()-s.renderingStartTime>Ji&&n!==1073741824&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return R9(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?lt&1073741824&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function BC(t,e){switch(u9(e),e.tag){case 1:return rt(e.type)&&g1(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),ne(nt),ne(We),v9(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return y9(e),null;case 13:if(ne(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(oe),null;case 4:return Qi(),null;case 10:return p9(e.type._context),null;case 22:case 23:return R9(),null;case 24:return null;default:return null}}var xa=!1,ze=!1,zC=typeof WeakSet=="function"?WeakSet:Set,b=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function Uc(t,e,n){try{n()}catch(r){pe(t,e,r)}}var d2=!1;function jC(t,e){if(Ec=h1,t=a7(),l9(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++u===r&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:t,selectionRange:n},h1=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,_=y.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:Pt(e.type,v),_);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){pe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=d2,d2=!1,y}function Ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uc(e,n,s)}i=i.next}while(i!==r)}}function Cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function id(t){var e=t.alternate;e!==null&&(t.alternate=null,id(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[_o],delete e[kc],delete e[TC],delete e[IC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sd(t){return t.tag===5||t.tag===3||t.tag===4}function h2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=m1));else if(r!==4&&(t=t.child,t!==null))for(zc(t,e,n),t=t.sibling;t!==null;)zc(t,e,n),t=t.sibling}function jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}var Oe=null,At=!1;function Mn(t,e,n){for(n=n.child;n!==null;)od(t,e,n),n=n.sibling}function od(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:ze||wi(n,e);case 6:var r=Oe,i=At;Oe=null,Mn(t,e,n),Oe=r,At=i,Oe!==null&&(At?(t=Oe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(At?(t=Oe,n=n.stateNode,t.nodeType===8?h0(t.parentNode,n):t.nodeType===1&&h0(t,n),mo(t)):h0(Oe,n.stateNode));break;case 4:r=Oe,i=At,Oe=n.stateNode.containerInfo,At=!0,Mn(t,e,n),Oe=r,At=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uc(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!ze&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,e,a)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Mn(t,e,n),ze=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function f2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zC),e.forEach(function(r){var i=XC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,At=!1;break e;case 3:Oe=a.stateNode.containerInfo,At=!0;break e;case 4:Oe=a.stateNode.containerInfo,At=!0;break e}a=a.return}if(Oe===null)throw Error(k(160));od(s,o,i),Oe=null,At=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ad(e,t),e=e.sibling}function ad(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kt(e,t),Kt(t),r&4){try{Ys(3,t,t.return),Cl(3,t)}catch(v){pe(t,t.return,v)}try{Ys(5,t,t.return)}catch(v){pe(t,t.return,v)}}break;case 1:kt(e,t),Kt(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(kt(e,t),Kt(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var i=t.stateNode;try{uo(i,"")}catch(v){pe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&P6(i,s),hc(a,o);var c=hc(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?M6(i,d):u==="dangerouslySetInnerHTML"?N6(i,d):u==="children"?uo(i,d):Yu(i,u,d,c)}switch(a){case"input":ac(i,s);break;case"textarea":A6(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ri(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ri(i,!!s.multiple,s.defaultValue,!0):Ri(i,!!s.multiple,s.multiple?[]:"",!1))}i[_o]=s}catch(v){pe(t,t.return,v)}}break;case 6:if(kt(e,t),Kt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){pe(t,t.return,v)}}break;case 3:if(kt(e,t),Kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(v){pe(t,t.return,v)}break;case 4:kt(e,t),Kt(t);break;case 13:kt(e,t),Kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(P9=Ce())),r&4&&f2(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(ze=(c=ze)||u,kt(e,t),ze=c):kt(e,t),Kt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(b=t,u=t.child;u!==null;){for(d=b=u;b!==null;){switch(h=b,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ys(4,h,h.return);break;case 1:wi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){pe(r,n,v)}}break;case 5:wi(h,h.return);break;case 22:if(h.memoizedState!==null){m2(d);continue}}p!==null?(p.return=h,b=p):m2(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=b6("display",o))}catch(v){pe(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){pe(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(e,t),Kt(t),r&4&&f2(t);break;case 21:break;default:kt(e,t),Kt(t)}}function Kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(uo(i,""),r.flags&=-33);var s=h2(t);jc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=h2(t);zc(t,a,o);break;default:throw Error(k(161))}}catch(l){pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $C(t,e,n){b=t,ld(t)}function ld(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ze;a=xa;var c=ze;if(xa=o,(ze=l)&&!c)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?g2(i):l!==null?(l.return=o,b=l):g2(i);for(;s!==null;)b=s,ld(s),s=s.sibling;b=i,xa=a,ze=c}p2(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):p2(t)}}function p2(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ze||Cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&X3(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}X3(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&mo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ze||e.flags&512&&Bc(e)}catch(h){pe(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function m2(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function g2(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cl(4,e)}catch(l){pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){pe(e,i,l)}}var s=e.return;try{Bc(e)}catch(l){pe(e,s,l)}break;case 5:var o=e.return;try{Bc(e)}catch(l){pe(e,o,l)}}}catch(l){pe(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var WC=Math.ceil,k1=Rn.ReactCurrentDispatcher,k9=Rn.ReactCurrentOwner,wt=Rn.ReactCurrentBatchConfig,G=0,Ne=null,Ee=null,Fe=0,lt=0,Ei=gr(0),xe=0,ko=null,Hr=0,yl=0,x9=0,Qs=null,Je=null,P9=0,Ji=1/0,dn=null,x1=!1,$c=null,Jn=null,Pa=!1,Hn=null,P1=0,Xs=0,Wc=null,Ka=-1,qa=0;function qe(){return G&6?Ce():Ka!==-1?Ka:Ka=Ce()}function Zn(t){return t.mode&1?G&2&&Fe!==0?Fe&-Fe:xC.transition!==null?(qa===0&&(qa=H6()),qa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:J6(t.type)),t):1}function Vt(t,e,n,r){if(50<Xs)throw Xs=0,Wc=null,Error(k(185));Go(t,n,r),(!(G&2)||t!==Ne)&&(t===Ne&&(!(G&2)&&(yl|=n),xe===4&&Un(t,Fe)),it(t,r),n===1&&G===0&&!(e.mode&1)&&(Ji=Ce()+500,pl&&Cr()))}function it(t,e){var n=t.callbackNode;xg(t,e);var r=d1(t,t===Ne?Fe:0);if(r===0)n!==null&&I3(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&I3(n),e===1)t.tag===0?kC(C2.bind(null,t)):C7(C2.bind(null,t)),EC(function(){!(G&6)&&Cr()}),n=null;else{switch(G6(r)){case 1:n=e9;break;case 4:n=$6;break;case 16:n=u1;break;case 536870912:n=W6;break;default:n=u1}n=gd(n,cd.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cd(t,e){if(Ka=-1,qa=0,G&6)throw Error(k(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=d1(t,t===Ne?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=A1(t,r);else{e=r;var i=G;G|=2;var s=dd();(Ne!==t||Fe!==e)&&(dn=null,Ji=Ce()+500,Fr(t,e));do try{KC();break}catch(a){ud(t,a)}while(1);f9(),k1.current=s,G=i,Ee!==null?e=0:(Ne=null,Fe=0,e=xe)}if(e!==0){if(e===2&&(i=Cc(t),i!==0&&(r=i,e=Hc(t,i))),e===1)throw n=ko,Fr(t,0),Un(t,r),it(t,Ce()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!HC(i)&&(e=A1(t,r),e===2&&(s=Cc(t),s!==0&&(r=s,e=Hc(t,s))),e===1))throw n=ko,Fr(t,0),Un(t,r),it(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:kr(t,Je,dn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=P9+500-Ce(),10<e)){if(d1(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ic(kr.bind(null,t,Je,dn),e);break}kr(t,Je,dn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WC(r/1960))-r,10<r){t.timeoutHandle=Ic(kr.bind(null,t,Je,dn),r);break}kr(t,Je,dn);break;case 5:kr(t,Je,dn);break;default:throw Error(k(329))}}}return it(t,Ce()),t.callbackNode===n?cd.bind(null,t):null}function Hc(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=A1(t,e),t!==2&&(e=Je,Je=n,e!==null&&Gc(e)),t}function Gc(t){Je===null?Je=t:Je.push.apply(Je,t)}function HC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~x9,e&=~yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function C2(t){if(G&6)throw Error(k(327));Oi();var e=d1(t,0);if(!(e&1))return it(t,Ce()),null;var n=A1(t,e);if(t.tag!==0&&n===2){var r=Cc(t);r!==0&&(e=r,n=Hc(t,r))}if(n===1)throw n=ko,Fr(t,0),Un(t,e),it(t,Ce()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,Je,dn),it(t,Ce()),null}function A9(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Ji=Ce()+500,pl&&Cr())}}function Gr(t){Hn!==null&&Hn.tag===0&&!(G&6)&&Oi();var e=G;G|=1;var n=wt.transition,r=Y;try{if(wt.transition=null,Y=1,t)return t()}finally{Y=r,wt.transition=n,G=e,!(G&6)&&Cr()}}function R9(){lt=Ei.current,ne(Ei)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wC(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(u9(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&g1();break;case 3:Qi(),ne(nt),ne(We),v9();break;case 5:y9(r);break;case 4:Qi();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:p9(r.type._context);break;case 22:case 23:R9()}n=n.return}if(Ne=t,Ee=t=er(t.current,null),Fe=lt=e,xe=0,ko=null,x9=yl=Hr=0,Je=Qs=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function ud(t,e){do{var n=Ee;try{if(f9(),Wa.current=I1,T1){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}T1=!1}if(Wr=0,Ae=Se=ce=null,qs=!1,So=0,k9.current=null,n===null||n.return===null){xe=1,ko=e,Ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=i2(o);if(p!==null){p.flags&=-257,s2(p,o,a,s,e),p.mode&1&&r2(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){r2(s,c,e),N9();break e}l=Error(k(426))}}else if(re&&a.mode&1){var _=i2(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),s2(_,o,a,s,e),d9(Xi(l,a));break e}}s=l=Xi(l,a),xe!==4&&(xe=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=K7(s,l,e);Q3(s,g);break e;case 1:a=l;var m=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Jn===null||!Jn.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=q7(s,a,e);Q3(s,E);break e}}s=s.return}while(s!==null)}fd(n)}catch(w){e=w,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function dd(){var t=k1.current;return k1.current=I1,t===null?I1:t}function N9(){(xe===0||xe===3||xe===2)&&(xe=4),Ne===null||!(Hr&268435455)&&!(yl&268435455)||Un(Ne,Fe)}function A1(t,e){var n=G;G|=2;var r=dd();(Ne!==t||Fe!==e)&&(dn=null,Fr(t,e));do try{GC();break}catch(i){ud(t,i)}while(1);if(f9(),G=n,k1.current=r,Ee!==null)throw Error(k(261));return Ne=null,Fe=0,xe}function GC(){for(;Ee!==null;)hd(Ee)}function KC(){for(;Ee!==null&&!yg();)hd(Ee)}function hd(t){var e=md(t.alternate,t,lt);t.memoizedProps=t.pendingProps,e===null?fd(t):Ee=e,k9.current=null}function fd(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BC(n,e),n!==null){n.flags&=32767,Ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ee=null;return}}else if(n=UC(n,e,lt),n!==null){Ee=n;return}if(e=e.sibling,e!==null){Ee=e;return}Ee=e=t}while(e!==null);xe===0&&(xe=5)}function kr(t,e,n){var r=Y,i=wt.transition;try{wt.transition=null,Y=1,qC(t,e,n,r)}finally{wt.transition=i,Y=r}return null}function qC(t,e,n,r){do Oi();while(Hn!==null);if(G&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Pg(t,s),t===Ne&&(Ee=Ne=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,gd(u1,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wt.transition,wt.transition=null;var o=Y;Y=1;var a=G;G|=4,k9.current=null,jC(t,n),ad(n,t),pC(Sc),h1=!!Ec,Sc=Ec=null,t.current=n,$C(n),vg(),G=a,Y=o,wt.transition=s}else t.current=n;if(Pa&&(Pa=!1,Hn=t,P1=i),s=t.pendingLanes,s===0&&(Jn=null),Eg(n.stateNode),it(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(x1)throw x1=!1,t=$c,$c=null,t;return P1&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===Wc?Xs++:(Xs=0,Wc=t):Xs=0,Cr(),null}function Oi(){if(Hn!==null){var t=G6(P1),e=wt.transition,n=Y;try{if(wt.transition=null,Y=16>t?16:t,Hn===null)var r=!1;else{if(t=Hn,Hn=null,P1=0,G&6)throw Error(k(331));var i=G;for(G|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(b=c;b!==null;){var u=b;switch(u.tag){case 0:case 11:case 15:Ys(8,u,s)}var d=u.child;if(d!==null)d.return=u,b=d;else for(;b!==null;){u=b;var h=u.sibling,p=u.return;if(id(u),u===c){b=null;break}if(h!==null){h.return=p,b=h;break}b=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,b=g;break e}b=s.return}}var m=t.current;for(b=m;b!==null;){o=b;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,b=C;else e:for(o=m;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cl(9,a)}}catch(w){pe(a,a.return,w)}if(a===o){b=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,b=E;break e}b=a.return}}if(G=i,Cr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(cl,t)}catch{}r=!0}return r}finally{Y=n,wt.transition=e}}return!1}function y2(t,e,n){e=Xi(n,e),e=K7(t,e,1),t=Xn(t,e,1),e=qe(),t!==null&&(Go(t,1,e),it(t,e))}function pe(t,e,n){if(t.tag===3)y2(t,t,n);else for(;e!==null;){if(e.tag===3){y2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=Xi(n,t),t=q7(e,t,1),e=Xn(e,t,1),t=qe(),e!==null&&(Go(e,1,t),it(e,t));break}}e=e.return}}function YC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(Fe&n)===n&&(xe===4||xe===3&&(Fe&130023424)===Fe&&500>Ce()-P9?Fr(t,0):x9|=n),it(t,e)}function pd(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=qe();t=Sn(t,e),t!==null&&(Go(t,e,n),it(t,n))}function QC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pd(t,n)}function XC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),pd(t,n)}var md;md=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nt.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,VC(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,re&&e.flags&1048576&&y7(e,v1,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ga(t,e),t=e.pendingProps;var i=Ki(e,We.current);Di(e,n),i=w9(null,e,r,t,i,n);var s=E9();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rt(r)?(s=!0,C1(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,g9(e),i.updater=ml,e.stateNode=i,i._reactInternals=e,bc(e,r,t,n),e=Oc(null,e,r,!0,s,n)):(e.tag=0,re&&s&&c9(e),He(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ga(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ZC(r),t=Pt(r,t),i){case 0:e=Dc(null,e,r,t,n);break e;case 1:e=l2(null,e,r,t,n);break e;case 11:e=o2(null,e,r,t,n);break e;case 14:e=a2(null,e,r,Pt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Dc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),l2(t,e,r,i,n);case 3:e:{if(J7(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,E7(t,e),E1(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xi(Error(k(423)),e),e=c2(t,e,r,n,i);break e}else if(r!==i){i=Xi(Error(k(424)),e),e=c2(t,e,r,n,i);break e}else for(ct=Qn(e.stateNode.containerInfo.firstChild),ut=e,re=!0,Rt=null,n=k7(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=Tn(t,e,n);break e}He(t,e,r,n)}e=e.child}return e;case 5:return x7(e),t===null&&Ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Tc(r,i)?o=null:s!==null&&Tc(r,s)&&(e.flags|=32),X7(t,e),He(t,e,o,n),e.child;case 6:return t===null&&Ac(e),null;case 13:return Z7(t,e,n);case 4:return C9(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yi(e,null,r,n):He(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),o2(t,e,r,i,n);case 7:return He(t,e,e.pendingProps,n),e.child;case 8:return He(t,e,e.pendingProps.children,n),e.child;case 12:return He(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(_1,r._currentValue),r._currentValue=o,s!==null)if(Bt(s.value,o)){if(s.children===i.children&&!nt.current){e=Tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=yn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}He(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=St(i),r=r(i),e.flags|=1,He(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),a2(t,e,r,i,n);case 15:return Y7(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Ga(t,e),e.tag=1,rt(r)?(t=!0,C1(e)):t=!1,Di(e,n),T7(e,r,i),bc(e,r,i,n),Oc(null,e,r,!0,t,n);case 19:return ed(t,e,n);case 22:return Q7(t,e,n)}throw Error(k(156,e.tag))};function gd(t,e){return j6(t,e)}function JC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(t,e,n,r){return new JC(t,e,n,r)}function b9(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZC(t){if(typeof t=="function")return b9(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xu)return 11;if(t===Ju)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=_t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ya(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")b9(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hi:return Vr(n.children,i,s,e);case Qu:o=8,i|=8;break;case nc:return t=_t(12,n,e,i|2),t.elementType=nc,t.lanes=s,t;case rc:return t=_t(13,n,e,i),t.elementType=rc,t.lanes=s,t;case ic:return t=_t(19,n,e,i),t.elementType=ic,t.lanes=s,t;case I6:return vl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S6:o=10;break e;case T6:o=9;break e;case Xu:o=11;break e;case Ju:o=14;break e;case Ln:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=_t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vr(t,e,n,r){return t=_t(7,t,r,e),t.lanes=n,t}function vl(t,e,n,r){return t=_t(22,t,r,e),t.elementType=I6,t.lanes=n,t.stateNode={isHidden:!1},t}function _0(t,e,n){return t=_t(6,t,null,e),t.lanes=n,t}function w0(t,e,n){return e=_t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ey(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=t0(0),this.expirationTimes=t0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=t0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function M9(t,e,n,r,i,s,o,a,l){return t=new ey(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},g9(s),t}function ty(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Cd(t){if(!t)return ar;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(rt(n))return g7(t,n,e)}return e}function yd(t,e,n,r,i,s,o,a,l){return t=M9(n,r,!0,t,i,s,o,a,l),t.context=Cd(null),n=t.current,r=qe(),i=Zn(n),s=yn(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,Go(t,i,r),it(t,r),t}function _l(t,e,n,r){var i=e.current,s=qe(),o=Zn(i);return n=Cd(n),e.context===null?e.context=n:e.pendingContext=n,e=yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&(Vt(t,i,o,s),$a(t,i,o)),o}function R1(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function v2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function D9(t,e){v2(t,e),(t=t.alternate)&&v2(t,e)}function ny(){return null}var vd=typeof reportError=="function"?reportError:function(t){console.error(t)};function O9(t){this._internalRoot=t}wl.prototype.render=O9.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));_l(t,e,null,null)};wl.prototype.unmount=O9.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){_l(null,t,null,null)}),e[En]=null}};function wl(t){this._internalRoot=t}wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Y6();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&X6(t)}};function L9(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _2(){}function ry(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=R1(o);s.call(c)}}var o=yd(e,r,t,0,null,!1,!1,"",_2);return t._reactRootContainer=o,t[En]=o.current,yo(t.nodeType===8?t.parentNode:t),Gr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=R1(l);a.call(c)}}var l=M9(t,0,!1,null,null,!1,!1,"",_2);return t._reactRootContainer=l,t[En]=l.current,yo(t.nodeType===8?t.parentNode:t),Gr(function(){_l(e,l,n,r)}),l}function Sl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=R1(o);a.call(l)}}_l(e,o,t,i)}else o=ry(n,e,t,i,r);return R1(o)}K6=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(t9(e,n|1),it(e,Ce()),!(G&6)&&(Ji=Ce()+500,Cr()))}break;case 13:Gr(function(){var r=Sn(t,1);if(r!==null){var i=qe();Vt(r,t,1,i)}}),D9(t,1)}};n9=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=qe();Vt(e,t,134217728,n)}D9(t,134217728)}};q6=function(t){if(t.tag===13){var e=Zn(t),n=Sn(t,e);if(n!==null){var r=qe();Vt(n,t,e,r)}D9(t,e)}};Y6=function(){return Y};Q6=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};pc=function(t,e,n){switch(e){case"input":if(ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fl(r);if(!i)throw Error(k(90));x6(r),ac(r,i)}}}break;case"textarea":A6(t,n);break;case"select":e=n.value,e!=null&&Ri(t,!!n.multiple,e,!1)}};L6=A9;F6=Gr;var iy={usingClientEntryPoint:!1,Events:[qo,gi,fl,D6,O6,A9]},xs={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sy={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B6(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{cl=Aa.inject(sy),Zt=Aa}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!L9(e))throw Error(k(200));return ty(t,e,null,n)};ht.createRoot=function(t,e){if(!L9(t))throw Error(k(299));var n=!1,r="",i=vd;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=M9(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,yo(t.nodeType===8?t.parentNode:t),new O9(e)};ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=B6(e),t=t===null?null:t.stateNode,t};ht.flushSync=function(t){return Gr(t)};ht.hydrate=function(t,e,n){if(!El(e))throw Error(k(200));return Sl(null,t,e,!0,n)};ht.hydrateRoot=function(t,e,n){if(!L9(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yd(e,null,t,1,n??null,i,!1,s,o),t[En]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wl(e)};ht.render=function(t,e,n){if(!El(e))throw Error(k(200));return Sl(null,t,e,!1,n)};ht.unmountComponentAtNode=function(t){if(!El(t))throw Error(k(40));return t._reactRootContainer?(Gr(function(){Sl(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};ht.unstable_batchedUpdates=A9;ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!El(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Sl(t,e,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";function _d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_d)}catch(t){console.error(t)}}_d(),y6.exports=ht;var oy=y6.exports,w2=oy;ec.createRoot=w2.createRoot,ec.hydrateRoot=w2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N1(){return N1=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},N1.apply(this,arguments)}var Gn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gn||(Gn={}));const E2="popstate";function ay(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Kc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ed(i)}return cy(e,n,null,t)}function ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ly(){return Math.random().toString(36).substr(2,8)}function S2(t,e){return{usr:t.state,key:t.key,idx:e}}function Kc(t,e,n,r){return n===void 0&&(n=null),N1({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Tl(e):e,{state:n,key:e&&e.key||r||ly()})}function Ed(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Tl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cy(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gn.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(N1({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Gn.Pop;let _=u(),g=_==null?null:_-c;c=_,l&&l({action:a,location:v.location,delta:g})}function h(_,g){a=Gn.Push;let m=Kc(v.location,_,g);n&&n(m,_),c=u()+1;let C=S2(m,c),E=v.createHref(m);try{o.pushState(C,"",E)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(_,g){a=Gn.Replace;let m=Kc(v.location,_,g);n&&n(m,_),c=u();let C=S2(m,c),E=v.createHref(m);o.replaceState(C,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(_){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof _=="string"?_:Ed(_);return m=m.replace(/ $/,"%20"),ot(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(E2,d),l=_,()=>{i.removeEventListener(E2,d),l=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let g=y(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(_){return o.go(_)}};return v}var T2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(T2||(T2={}));function uy(t,e,n){return n===void 0&&(n="/"),dy(t,e,n,!1)}function dy(t,e,n,r){let i=typeof e=="string"?Tl(e):e,s=Id(i.pathname||"/",n);if(s==null)return null;let o=Sd(t);hy(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Sy(s);a=wy(o[l],c,r)}return a}function Sd(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ot(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Li([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(ot(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Sd(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:vy(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Td(s.path))i(s,o,l)}),e}function Td(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Td(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function hy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_y(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fy=/^:[\w-]+$/,py=3,my=2,gy=1,Cy=10,yy=-2,I2=t=>t==="*";function vy(t,e){let n=t.split("/"),r=n.length;return n.some(I2)&&(r+=yy),e&&(r+=my),n.filter(i=>!I2(i)).reduce((i,s)=>i+(fy.test(s)?py:s===""?gy:Cy),r)}function _y(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function wy(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=k2({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=k2({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Li([s,d.pathname]),pathnameBase:Ty(Li([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Li([s,d.pathnameBase]))}return o}function k2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ey(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:h,isOptional:p}=u;if(h==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[d];return p&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Ey(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Sy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Id(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Li=t=>t.join("/").replace(/\/\/+/g,"/"),Ty=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function Iy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kd=["post","put","patch","delete"];new Set(kd);const ky=["get",...kd];new Set(ky);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b1(){return b1=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},b1.apply(this,arguments)}const xy=S.createContext(null),Py=S.createContext(null),xd=S.createContext(null),Il=S.createContext(null),kl=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Pd=S.createContext(null);function F9(){return S.useContext(Il)!=null}function Ay(){return F9()||ot(!1),S.useContext(Il).location}function Ry(t,e){return Ny(t,e)}function Ny(t,e,n,r){F9()||ot(!1);let{navigator:i}=S.useContext(xd),{matches:s}=S.useContext(kl),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Ay(),u;if(e){var d;let _=typeof e=="string"?Tl(e):e;l==="/"||(d=_.pathname)!=null&&d.startsWith(l)||ot(!1),u=_}else u=c;let h=u.pathname||"/",p=h;if(l!=="/"){let _=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(_.length).join("/")}let y=uy(t,{pathname:p}),v=Ly(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Li([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Li([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return e&&v?S.createElement(Il.Provider,{value:{location:b1({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Gn.Pop}},v):v}function by(){let t=By(),e=Iy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const My=S.createElement(by,null);class Dy extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(kl.Provider,{value:this.props.routeContext},S.createElement(Pd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Oy(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(xy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(kl.Provider,{value:e},r)}function Ly(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||ot(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:p}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let p,y=!1,v=null,_=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||My,l&&(c<0&&h===0?(zy("route-fallback",!1),y=!0,_=null):c===h&&(y=!0,_=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,h+1)),m=()=>{let C;return p?C=v:y?C=_:d.route.Component?C=S.createElement(d.route.Component,null):d.route.element?C=d.route.element:C=u,S.createElement(Oy,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:C})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?S.createElement(Dy,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var qc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(qc||{});function Fy(t){let e=S.useContext(Py);return e||ot(!1),e}function Vy(t){let e=S.useContext(kl);return e||ot(!1),e}function Uy(t){let e=Vy(),n=e.matches[e.matches.length-1];return n.route.id||ot(!1),n.route.id}function By(){var t;let e=S.useContext(Pd),n=Fy(qc.UseRouteError),r=Uy(qc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}const x2={};function zy(t,e,n){!e&&!x2[t]&&(x2[t]=!0)}function jy(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function ui(t){ot(!1)}function $y(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gn.Pop,navigator:s,static:o=!1,future:a}=t;F9()&&ot(!1);let l=e.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:l,navigator:s,static:o,future:b1({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Tl(r));let{pathname:u="/",search:d="",hash:h="",state:p=null,key:y="default"}=r,v=S.useMemo(()=>{let _=Id(u,l);return _==null?null:{location:{pathname:_,search:d,hash:h,state:p,key:y},navigationType:i}},[l,u,d,h,p,y,i]);return v==null?null:S.createElement(xd.Provider,{value:c},S.createElement(Il.Provider,{children:n,value:v}))}function Wy(t){let{children:e,location:n}=t;return Ry(Yc(e),n)}new Promise(()=>{});function Yc(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Yc(r.props.children,s));return}r.type!==ui&&ot(!1),!r.props.index||!r.props.children||ot(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Hy="6";try{window.__reactRouterVersion=Hy}catch{}const Gy="startTransition",P2=Qm[Gy];function Ky(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=ay({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=S.useCallback(d=>{c&&P2?P2(()=>l(d)):l(d)},[l,c]);return S.useLayoutEffect(()=>o.listen(u),[o,u]),S.useEffect(()=>jy(r),[r]),S.createElement($y,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var A2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(A2||(A2={}));var R2;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(R2||(R2={}));/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yy=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),N2=t=>{const e=Yy(t);return e.charAt(0).toUpperCase()+e.slice(1)},Ad=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=S.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>S.createElement("svg",{ref:l,...Qy,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Ad("lucide",i),...a},[...o.map(([c,u])=>S.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=(t,e)=>{const n=S.forwardRef(({className:r,...i},s)=>S.createElement(Xy,{ref:s,iconNode:e,className:Ad(`lucide-${qy(N2(t))}`,`lucide-${t}`,r),...i}));return n.displayName=N2(t),n};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ev=Jy("chevron-down",Zy),V9=S.createContext({});function U9(t){const e=S.useRef(null);return e.current===null&&(e.current=t()),e.current}const B9=typeof window<"u",Rd=B9?S.useLayoutEffect:S.useEffect,xl=S.createContext(null);function z9(t,e){t.indexOf(e)===-1&&t.push(e)}function j9(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const In=(t,e,n)=>n>e?e:n<t?t:n;let $9=()=>{};const kn={},Nd=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function bd(t){return typeof t=="object"&&t!==null}const Md=t=>/^0[^.\s]+$/u.test(t);function W9(t){let e;return()=>(e===void 0&&(e=t()),e)}const Et=t=>t,tv=(t,e)=>n=>e(t(n)),Qo=(...t)=>t.reduce(tv),xo=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r};class H9{constructor(){this.subscriptions=[]}add(e){return z9(this.subscriptions,e),()=>j9(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tn=t=>t*1e3,nn=t=>t/1e3;function Dd(t,e){return e?t*(1e3/e):0}const Od=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,nv=1e-7,rv=12;function iv(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=Od(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>nv&&++a<rv);return o}function Xo(t,e,n,r){if(t===e&&n===r)return Et;const i=s=>iv(s,0,1,t,n);return s=>s===0||s===1?s:Od(i(s),e,r)}const Ld=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Fd=t=>e=>1-t(1-e),Vd=Xo(.33,1.53,.69,.99),G9=Fd(Vd),Ud=Ld(G9),Bd=t=>(t*=2)<1?.5*G9(t):.5*(2-Math.pow(2,-10*(t-1))),K9=t=>1-Math.sin(Math.acos(t)),zd=Fd(K9),jd=Ld(K9),sv=Xo(.42,0,1,1),ov=Xo(0,0,.58,1),$d=Xo(.42,0,.58,1),av=t=>Array.isArray(t)&&typeof t[0]!="number",Wd=t=>Array.isArray(t)&&typeof t[0]=="number",lv={linear:Et,easeIn:sv,easeInOut:$d,easeOut:ov,circIn:K9,circInOut:jd,circOut:zd,backIn:G9,backInOut:Ud,backOut:Vd,anticipate:Bd},cv=t=>typeof t=="string",b2=t=>{if(Wd(t)){$9(t.length===4);const[e,n,r,i]=t;return Xo(e,n,r,i)}else if(cv(t))return lv[t];return t},Ra=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],M2={value:null,addProjectionMetrics:null};function uv(t,e){let n=new Set,r=new Set,i=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(d){o.has(d)&&(u.schedule(d),t()),l++,d(a)}const u={schedule:(d,h=!1,p=!1)=>{const v=p&&i?n:r;return h&&o.add(d),v.has(d)||v.add(d),d},cancel:d=>{r.delete(d),o.delete(d)},process:d=>{if(a=d,i){s=!0;return}i=!0,[n,r]=[r,n],n.forEach(c),e&&M2.value&&M2.value.frameloop[e].push(l),l=0,n.clear(),i=!1,s&&(s=!1,u.process(d))}};return u}const dv=40;function Hd(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ra.reduce((C,E)=>(C[E]=uv(s,e?E:void 0),C),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:h,render:p,postRender:y}=o,v=()=>{const C=kn.useManualTiming?i.timestamp:performance.now();n=!1,kn.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(C-i.timestamp,dv),1)),i.timestamp=C,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),d.process(i),h.process(i),p.process(i),y.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(v))},_=()=>{n=!0,r=!0,i.isProcessing||t(v)};return{schedule:Ra.reduce((C,E)=>{const w=o[E];return C[E]=(T,x=!1,I=!1)=>(n||_(),w.schedule(T,x,I)),C},{}),cancel:C=>{for(let E=0;E<Ra.length;E++)o[Ra[E]].cancel(C)},state:i,steps:o}}const{schedule:ue,cancel:lr,state:Le,steps:E0}=Hd(typeof requestAnimationFrame<"u"?requestAnimationFrame:Et,!0);let Qa;function hv(){Qa=void 0}const et={now:()=>(Qa===void 0&&et.set(Le.isProcessing||kn.useManualTiming?Le.timestamp:performance.now()),Qa),set:t=>{Qa=t,queueMicrotask(hv)}},Gd=t=>e=>typeof e=="string"&&e.startsWith(t),q9=Gd("--"),fv=Gd("var(--"),Y9=t=>fv(t)?pv.test(t.split("/*")[0].trim()):!1,pv=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ls={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Po={...ls,transform:t=>In(0,1,t)},Na={...ls,default:1},Js=t=>Math.round(t*1e5)/1e5,Q9=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function mv(t){return t==null}const gv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,X9=(t,e)=>n=>!!(typeof n=="string"&&gv.test(n)&&n.startsWith(t)||e&&!mv(n)&&Object.prototype.hasOwnProperty.call(n,e)),Kd=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(Q9);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Cv=t=>In(0,255,t),S0={...ls,transform:t=>Math.round(Cv(t))},Mr={test:X9("rgb","red"),parse:Kd("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+S0.transform(t)+", "+S0.transform(e)+", "+S0.transform(n)+", "+Js(Po.transform(r))+")"};function yv(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Qc={test:X9("#"),parse:yv,transform:Mr.transform},Jo=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),On=Jo("deg"),rn=Jo("%"),F=Jo("px"),vv=Jo("vh"),_v=Jo("vw"),D2=(()=>({...rn,parse:t=>rn.parse(t)/100,transform:t=>rn.transform(t*100)}))(),Si={test:X9("hsl","hue"),parse:Kd("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+rn.transform(Js(e))+", "+rn.transform(Js(n))+", "+Js(Po.transform(r))+")"},we={test:t=>Mr.test(t)||Qc.test(t)||Si.test(t),parse:t=>Mr.test(t)?Mr.parse(t):Si.test(t)?Si.parse(t):Qc.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Mr.transform(t):Si.transform(t),getAnimatableNone:t=>{const e=we.parse(t);return e.alpha=0,we.transform(e)}},wv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ev(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Q9))==null?void 0:e.length)||0)+(((n=t.match(wv))==null?void 0:n.length)||0)>0}const qd="number",Yd="color",Sv="var",Tv="var(",O2="${}",Iv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ao(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(Iv,l=>(we.test(l)?(r.color.push(s),i.push(Yd),n.push(we.parse(l))):l.startsWith(Tv)?(r.var.push(s),i.push(Sv),n.push(l)):(r.number.push(s),i.push(qd),n.push(parseFloat(l))),++s,O2)).split(O2);return{values:n,split:a,indexes:r,types:i}}function Qd(t){return Ao(t).values}function Xd(t){const{split:e,types:n}=Ao(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const a=n[o];a===qd?s+=Js(i[o]):a===Yd?s+=we.transform(i[o]):s+=i[o]}return s}}const kv=t=>typeof t=="number"?0:we.test(t)?we.getAnimatableNone(t):t;function xv(t){const e=Qd(t);return Xd(t)(e.map(kv))}const cr={test:Ev,parse:Qd,createTransformer:Xd,getAnimatableNone:xv};function T0(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Pv({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=T0(l,a,t+1/3),s=T0(l,a,t),o=T0(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function M1(t,e){return n=>n>0?e:t}const ae=(t,e,n)=>t+(e-t)*n,I0=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},Av=[Qc,Mr,Si],Rv=t=>Av.find(e=>e.test(t));function L2(t){const e=Rv(t);if(!e)return!1;let n=e.parse(t);return e===Si&&(n=Pv(n)),n}const F2=(t,e)=>{const n=L2(t),r=L2(e);if(!n||!r)return M1(t,e);const i={...n};return s=>(i.red=I0(n.red,r.red,s),i.green=I0(n.green,r.green,s),i.blue=I0(n.blue,r.blue,s),i.alpha=ae(n.alpha,r.alpha,s),Mr.transform(i))},Xc=new Set(["none","hidden"]);function Nv(t,e){return Xc.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function bv(t,e){return n=>ae(t,e,n)}function J9(t){return typeof t=="number"?bv:typeof t=="string"?Y9(t)?M1:we.test(t)?F2:Ov:Array.isArray(t)?Jd:typeof t=="object"?we.test(t)?F2:Mv:M1}function Jd(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>J9(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function Mv(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=J9(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function Dv(t,e){const n=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const s=e.types[i],o=t.indexes[s][r[s]],a=t.values[o]??0;n[i]=a,r[s]++}return n}const Ov=(t,e)=>{const n=cr.createTransformer(e),r=Ao(t),i=Ao(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Xc.has(t)&&!i.values.length||Xc.has(e)&&!r.values.length?Nv(t,e):Qo(Jd(Dv(r,i),i.values),n):M1(t,e)};function Zd(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ae(t,e,n):J9(t)(t,e)}const Lv=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ue.update(e,n),stop:()=>lr(e),now:()=>Le.isProcessing?Le.timestamp:et.now()}},eh=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let s=0;s<i;s++)r+=Math.round(t(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},D1=2e4;function Z9(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<D1;)e+=n,r=t.next(e);return e>=D1?1/0:e}function Fv(t,e=100,n){const r=n({...t,keyframes:[0,e]}),i=Math.min(Z9(r),D1);return{type:"keyframes",ease:s=>r.next(i*s).value/e,duration:nn(i)}}const Vv=5;function th(t,e,n){const r=Math.max(e-Vv,0);return Dd(n-t(r),e-r)}const fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},k0=.001;function Uv({duration:t=fe.duration,bounce:e=fe.bounce,velocity:n=fe.velocity,mass:r=fe.mass}){let i,s,o=1-e;o=In(fe.minDamping,fe.maxDamping,o),t=In(fe.minDuration,fe.maxDuration,nn(t)),o<1?(i=c=>{const u=c*o,d=u*t,h=u-n,p=Jc(c,o),y=Math.exp(-d);return k0-h/p*y},s=c=>{const d=c*o*t,h=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,y=Math.exp(-d),v=Jc(Math.pow(c,2),o);return(-i(c)+k0>0?-1:1)*((h-p)*y)/v}):(i=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-k0+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=zv(i,s,a);if(t=tn(t),isNaN(l))return{stiffness:fe.stiffness,damping:fe.damping,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const Bv=12;function zv(t,e,n){let r=n;for(let i=1;i<Bv;i++)r=r-t(r)/e(r);return r}function Jc(t,e){return t*Math.sqrt(1-e*e)}const jv=["duration","bounce"],$v=["stiffness","damping","mass"];function V2(t,e){return e.some(n=>t[n]!==void 0)}function Wv(t){let e={velocity:fe.velocity,stiffness:fe.stiffness,damping:fe.damping,mass:fe.mass,isResolvedFromDuration:!1,...t};if(!V2(t,$v)&&V2(t,jv))if(t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*In(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:fe.mass,stiffness:i,damping:s}}else{const n=Uv(t);e={...e,...n,mass:fe.mass},e.isResolvedFromDuration=!0}return e}function O1(t=fe.visualDuration,e=fe.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=Wv({...n,velocity:-nn(n.velocity||0)}),y=h||0,v=c/(2*Math.sqrt(l*u)),_=o-s,g=nn(Math.sqrt(l/u)),m=Math.abs(_)<5;r||(r=m?fe.restSpeed.granular:fe.restSpeed.default),i||(i=m?fe.restDelta.granular:fe.restDelta.default);let C;if(v<1){const w=Jc(g,v);C=T=>{const x=Math.exp(-v*g*T);return o-x*((y+v*g*_)/w*Math.sin(w*T)+_*Math.cos(w*T))}}else if(v===1)C=w=>o-Math.exp(-g*w)*(_+(y+g*_)*w);else{const w=g*Math.sqrt(v*v-1);C=T=>{const x=Math.exp(-v*g*T),I=Math.min(w*T,300);return o-x*((y+v*g*_)*Math.sinh(I)+w*_*Math.cosh(I))/w}}const E={calculatedDuration:p&&d||null,next:w=>{const T=C(w);if(p)a.done=w>=d;else{let x=w===0?y:0;v<1&&(x=w===0?tn(y):th(C,w,T));const I=Math.abs(x)<=r,O=Math.abs(o-T)<=i;a.done=I&&O}return a.value=a.done?o:T,a},toString:()=>{const w=Math.min(Z9(E),D1),T=eh(x=>E.next(w*x).value,w,30);return w+"ms "+T},toTransition:()=>{}};return E}O1.applyToOptions=t=>{const e=Fv(t,100,O1);return t.ease=e.ease,t.duration=tn(e.duration),t.type="keyframes",t};function Zc({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],h={done:!1,value:d},p=I=>a!==void 0&&I<a||l!==void 0&&I>l,y=I=>a===void 0?l:l===void 0||Math.abs(a-I)<Math.abs(l-I)?a:l;let v=n*e;const _=d+v,g=o===void 0?_:o(_);g!==_&&(v=g-d);const m=I=>-v*Math.exp(-I/r),C=I=>g+m(I),E=I=>{const O=m(I),M=C(I);h.done=Math.abs(O)<=c,h.value=h.done?g:M};let w,T;const x=I=>{p(h.value)&&(w=I,T=O1({keyframes:[h.value,y(h.value)],velocity:th(C,I,h.value),damping:i,stiffness:s,restDelta:c,restSpeed:u}))};return x(0),{calculatedDuration:null,next:I=>{let O=!1;return!T&&w===void 0&&(O=!0,E(I),x(I)),w!==void 0&&I>=w?T.next(I-w):(!O&&E(I),h)}}}function Hv(t,e,n){const r=[],i=n||kn.mix||Zd,s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Et:e;a=Qo(l,a)}r.push(a)}return r}function Gv(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if($9(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=Hv(e,r,i),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const h=xo(t[d],t[d+1],u);return a[d](h)};return n?u=>c(In(t[0],t[s-1],u)):c}function Kv(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=xo(0,e,r);t.push(ae(n,1,i))}}function qv(t){const e=[0];return Kv(e,t.length-1),e}function Yv(t,e){return t.map(n=>n*e)}function Qv(t,e){return t.map(()=>e||$d).splice(0,t.length-1)}function Zs({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=av(r)?r.map(b2):b2(r),s={done:!1,value:e[0]},o=Yv(n&&n.length===e.length?n:qv(e),t),a=Gv(o,e,{ease:Array.isArray(i)?i:Qv(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const Xv=t=>t!==null;function e4(t,{repeat:e,repeatType:n="loop"},r,i=1){const s=t.filter(Xv),a=i<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||r===void 0?s[a]:r}const Jv={decay:Zc,inertia:Zc,tween:Zs,keyframes:Zs,spring:O1};function nh(t){typeof t.type=="string"&&(t.type=Jv[t.type])}class t4{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const Zv=t=>t/100;class n4 extends t4{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==et.now()&&this.tick(et.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;nh(e);const{type:n=Zs,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Zs;l!==Zs&&typeof a[0]!="number"&&(this.mixKeyframes=Qo(Zv,Zd(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Z9(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:h,repeatDelay:p,type:y,onUpdate:v,finalKeyframe:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let C=this.currentTime,E=r;if(d){const I=Math.min(this.currentTime,i)/a;let O=Math.floor(I),M=I%1;!M&&I>=1&&(M=1),M===1&&O--,O=Math.min(O,d+1),!!(O%2)&&(h==="reverse"?(M=1-M,p&&(M-=p/a)):h==="mirror"&&(E=o)),C=In(0,1,M)*a}const w=m?{done:!1,value:u[0]}:E.next(C);s&&(w.value=s(w.value));let{done:T}=w;!m&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const x=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return x&&y!==Zc&&(w.value=e4(u,this.options,_,this.speed)),v&&v(w.value),x&&this.finish(),w}then(e,n){return this.finished.then(e,n)}get duration(){return nn(this.calculatedDuration)}get time(){return nn(this.currentTime)}set time(e){var n;e=tn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(et.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=nn(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:e=Lv,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(et.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function e_(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Dr=t=>t*180/Math.PI,eu=t=>{const e=Dr(Math.atan2(t[1],t[0]));return tu(e)},t_={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:eu,rotateZ:eu,skewX:t=>Dr(Math.atan(t[1])),skewY:t=>Dr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},tu=t=>(t=t%360,t<0&&(t+=360),t),U2=eu,B2=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),z2=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),n_={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:B2,scaleY:z2,scale:t=>(B2(t)+z2(t))/2,rotateX:t=>tu(Dr(Math.atan2(t[6],t[5]))),rotateY:t=>tu(Dr(Math.atan2(-t[2],t[0]))),rotateZ:U2,rotate:U2,skewX:t=>Dr(Math.atan(t[4])),skewY:t=>Dr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function nu(t){return t.includes("scale")?1:0}function ru(t,e){if(!t||t==="none")return nu(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=n_,i=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=t_,i=a}if(!i)return nu(e);const s=r[e],o=i[1].split(",").map(i_);return typeof s=="function"?s(o):o[s]}const r_=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return ru(n,e)};function i_(t){return parseFloat(t.trim())}const cs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],us=(()=>new Set(cs))(),j2=t=>t===ls||t===F,s_=new Set(["x","y","z"]),o_=cs.filter(t=>!s_.has(t));function a_(t){const e=[];return o_.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Ur={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>ru(e,"x"),y:(t,{transform:e})=>ru(e,"y")};Ur.translateX=Ur.x;Ur.translateY=Ur.y;const Br=new Set;let iu=!1,su=!1,ou=!1;function rh(){if(su){const t=Array.from(Br).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=a_(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))==null||a.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}su=!1,iu=!1,Br.forEach(t=>t.complete(ou)),Br.clear()}function ih(){Br.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(su=!0)})}function l_(){ou=!0,ih(),rh(),ou=!1}class r4{constructor(e,n,r,i,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Br.add(this),iu||(iu=!0,ue.read(ih),ue.resolveKeyframes(rh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;if(e[0]===null){const s=i==null?void 0:i.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(r&&n){const a=r.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),i&&s===void 0&&i.set(e[0])}e_(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Br.delete(this)}cancel(){this.state==="scheduled"&&(Br.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const c_=t=>t.startsWith("--");function u_(t,e,n){c_(e)?t.style.setProperty(e,n):t.style[e]=n}const d_=W9(()=>window.ScrollTimeline!==void 0),h_={};function f_(t,e){const n=W9(t);return()=>h_[e]??n()}const sh=f_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Bs=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,$2={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bs([0,.65,.55,1]),circOut:Bs([.55,0,1,.45]),backIn:Bs([.31,.01,.66,-.59]),backOut:Bs([.33,1.53,.69,.99])};function oh(t,e){if(t)return typeof t=="function"?sh()?eh(t,e):"ease-out":Wd(t)?Bs(t):Array.isArray(t)?t.map(n=>oh(n,e)||$2.easeOut):$2[t]}function p_(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=oh(a,i);Array.isArray(d)&&(u.easing=d);const h={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),t.animate(u,h)}function ah(t){return typeof t=="function"&&"applyToOptions"in t}function m_({type:t,...e}){return ah(t)&&sh()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class g_ extends t4{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,$9(typeof e.type!="string");const c=m_(e);this.animation=p_(n,r,i,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=e4(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(u):u_(n,r,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,r;const e=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return nn(Number(e))}get time(){return nn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=tn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&d_()?(this.animation.timeline=e,Et):n(this)}}const lh={anticipate:Bd,backInOut:Ud,circInOut:jd};function C_(t){return t in lh}function y_(t){typeof t.ease=="string"&&C_(t.ease)&&(t.ease=lh[t.ease])}const W2=10;class v_ extends g_{constructor(e){y_(e),nh(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new n4({...o,autoplay:!1}),l=tn(this.finishedTime??this.time);n.setWithVelocity(a.sample(l-W2).value,a.sample(l).value,W2),a.stop()}}const H2=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(cr.test(t)||t==="0")&&!t.startsWith("url("));function __(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function w_(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=H2(i,e),a=H2(s,e);return!o||!a?!1:__(t)||(n==="spring"||ah(n))&&r}function i4(t){return bd(t)&&"offsetHeight"in t}const E_=new Set(["opacity","clipPath","filter","transform"]),S_=W9(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function T_(t){var c;const{motionValue:e,name:n,repeatDelay:r,repeatType:i,damping:s,type:o}=t;if(!i4((c=e==null?void 0:e.owner)==null?void 0:c.current))return!1;const{onUpdate:a,transformTemplate:l}=e.owner.getProps();return S_()&&n&&E_.has(n)&&(n!=="transform"||!l)&&!a&&!r&&i!=="mirror"&&s!==0&&o!=="inertia"}const I_=40;class k_ extends t4{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){var y;super(),this.stop=()=>{var v,_;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(_=this.keyframeResolver)==null||_.cancel()},this.createdAt=et.now();const h={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...d},p=(u==null?void 0:u.KeyframeResolver)||r4;this.keyframeResolver=new p(a,(v,_,g)=>this.onKeyframesResolved(v,_,h,!g),l,c,u),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(e,n,r,i){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=r;this.resolvedAt=et.now(),w_(e,s,o,a)||((kn.instantAnimations||!l)&&(u==null||u(e4(e,r,n))),e[0]=e[e.length-1],r.duration=0,r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>I_?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:e},p=!c&&T_(h)?new v_({...h,element:h.motionValue.owner.current}):new n4(h);p.finished.then(()=>this.notifyFinished()).catch(Et),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),l_()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const x_=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function P_(t){const e=x_.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function ch(t,e,n=1){const[r,i]=P_(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return Nd(o)?parseFloat(o):o}return Y9(i)?ch(i,e,n+1):i}function s4(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const uh=new Set(["width","height","top","left","right","bottom",...cs]),A_={test:t=>t==="auto",parse:t=>t},dh=t=>e=>e.test(t),hh=[ls,F,rn,On,_v,vv,A_],G2=t=>hh.find(dh(t));function R_(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Md(t):!0}const N_=new Set(["brightness","contrast","saturate","opacity"]);function b_(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Q9)||[];if(!r)return t;const i=n.replace(r,"");let s=N_.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const M_=/\b([a-z-]*)\(.*?\)/gu,au={...cr,getAnimatableNone:t=>{const e=t.match(M_);return e?e.map(b_).join(" "):t}},K2={...ls,transform:Math.round},D_={rotate:On,rotateX:On,rotateY:On,rotateZ:On,scale:Na,scaleX:Na,scaleY:Na,scaleZ:Na,skew:On,skewX:On,skewY:On,distance:F,translateX:F,translateY:F,translateZ:F,x:F,y:F,z:F,perspective:F,transformPerspective:F,opacity:Po,originX:D2,originY:D2,originZ:F},o4={borderWidth:F,borderTopWidth:F,borderRightWidth:F,borderBottomWidth:F,borderLeftWidth:F,borderRadius:F,radius:F,borderTopLeftRadius:F,borderTopRightRadius:F,borderBottomRightRadius:F,borderBottomLeftRadius:F,width:F,maxWidth:F,height:F,maxHeight:F,top:F,right:F,bottom:F,left:F,padding:F,paddingTop:F,paddingRight:F,paddingBottom:F,paddingLeft:F,margin:F,marginTop:F,marginRight:F,marginBottom:F,marginLeft:F,backgroundPositionX:F,backgroundPositionY:F,...D_,zIndex:K2,fillOpacity:Po,strokeOpacity:Po,numOctaves:K2},O_={...o4,color:we,backgroundColor:we,outlineColor:we,fill:we,stroke:we,borderColor:we,borderTopColor:we,borderRightColor:we,borderBottomColor:we,borderLeftColor:we,filter:au,WebkitFilter:au},fh=t=>O_[t];function ph(t,e){let n=fh(t);return n!==au&&(n=cr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const L_=new Set(["auto","none","0"]);function F_(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!L_.has(s)&&Ao(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=ph(n,i)}class V_ extends r4{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Y9(c))){const u=ch(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!uh.has(r)||e.length!==2)return;const[i,s]=e,o=G2(i),a=G2(s);if(o!==a)if(j2(o)&&j2(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else Ur[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)(e[i]===null||R_(e[i]))&&r.push(i);r.length&&F_(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ur[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=Ur[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function U_(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;e&&(r=e.current);const i=(n==null?void 0:n[t])??r.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t)}const mh=(t,e)=>e&&typeof t=="number"?e.transform(t):t,q2=30,B_=t=>!isNaN(parseFloat(t));class z_{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{var o,a;const s=et.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty();i&&((a=this.events.renderRequest)==null||a.notify(this.current))},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=et.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=B_(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new H9);const r=this.events[e].add(n);return e==="change"?()=>{r(),ue.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=et.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>q2)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,q2);return Dd(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zi(t,e){return new z_(t,e)}const{schedule:a4,cancel:rb}=Hd(queueMicrotask,!1),xt={x:!1,y:!1};function gh(){return xt.x||xt.y}function j_(t){return t==="x"||t==="y"?xt[t]?null:(xt[t]=!0,()=>{xt[t]=!1}):xt.x||xt.y?null:(xt.x=xt.y=!0,()=>{xt.x=xt.y=!1})}function Ch(t,e){const n=U_(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function Y2(t){return!(t.pointerType==="touch"||gh())}function $_(t,e,n={}){const[r,i,s]=Ch(t,n),o=a=>{if(!Y2(a))return;const{target:l}=a,c=e(l,a);if(typeof c!="function"||!l)return;const u=d=>{Y2(d)&&(c(d),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,i)};return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const yh=(t,e)=>e?t===e?!0:yh(t,e.parentElement):!1,l4=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,W_=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function H_(t){return W_.has(t.tagName)||t.tabIndex!==-1}const Xa=new WeakSet;function Q2(t){return e=>{e.key==="Enter"&&t(e)}}function x0(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const G_=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=Q2(()=>{if(Xa.has(n))return;x0(n,"down");const i=Q2(()=>{x0(n,"up")}),s=()=>x0(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function X2(t){return l4(t)&&!gh()}function K_(t,e,n={}){const[r,i,s]=Ch(t,n),o=a=>{const l=a.currentTarget;if(!X2(a))return;Xa.add(l);const c=e(l,a),u=(p,y)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),Xa.has(l)&&Xa.delete(l),X2(p)&&typeof c=="function"&&c(p,{success:y})},d=p=>{u(p,l===window||l===document||n.useGlobalTarget||yh(l,p.target))},h=p=>{u(p,!1)};window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",h,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),i4(a)&&(a.addEventListener("focus",c=>G_(c,i)),!H_(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function vh(t){return bd(t)&&"ownerSVGElement"in t}function q_(t){return vh(t)&&t.tagName==="svg"}const $e=t=>!!(t&&t.getVelocity),Y_=[...hh,we,cr],Q_=t=>Y_.find(dh(t)),c4=S.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class X_ extends S.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=i4(r)&&r.offsetWidth||0,s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft,s.right=i-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function J_({children:t,isPresent:e,anchorX:n}){const r=S.useId(),i=S.useRef(null),s=S.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:o}=S.useContext(c4);return S.useInsertionEffect(()=>{const{width:a,height:l,top:c,left:u,right:d}=s.current;if(e||!i.current||!a||!l)return;const h=n==="left"?`left: ${u}`:`right: ${d}`;i.current.dataset.motionPopId=r;const p=document.createElement("style");return o&&(p.nonce=o),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${h}px !important;
            top: ${c}px !important;
          }
        `),()=>{document.head.contains(p)&&document.head.removeChild(p)}},[e]),f(X_,{isPresent:e,childRef:i,sizeRef:s,children:S.cloneElement(t,{ref:i})})}const Z_=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o,anchorX:a})=>{const l=U9(ew),c=S.useId();let u=!0,d=S.useMemo(()=>(u=!1,{id:c,initial:e,isPresent:n,custom:i,onExitComplete:h=>{l.set(h,!0);for(const p of l.values())if(!p)return;r&&r()},register:h=>(l.set(h,!1),()=>l.delete(h))}),[n,l,r]);return s&&u&&(d={...d}),S.useMemo(()=>{l.forEach((h,p)=>l.set(p,!1))},[n]),S.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(t=f(J_,{isPresent:n,anchorX:a,children:t})),f(xl.Provider,{value:d,children:t})};function ew(){return new Map}function _h(t=!0){const e=S.useContext(xl);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,s=S.useId();S.useEffect(()=>{if(t)return i(s)},[t]);const o=S.useCallback(()=>t&&r&&r(s),[s,r,t]);return!n&&r?[!1,o]:[!0]}const ba=t=>t.key||"";function J2(t){const e=[];return S.Children.forEach(t,n=>{S.isValidElement(n)&&e.push(n)}),e}const tw=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1,anchorX:a="left"})=>{const[l,c]=_h(o),u=S.useMemo(()=>J2(t),[t]),d=o&&!l?[]:u.map(ba),h=S.useRef(!0),p=S.useRef(u),y=U9(()=>new Map),[v,_]=S.useState(u),[g,m]=S.useState(u);Rd(()=>{h.current=!1,p.current=u;for(let w=0;w<g.length;w++){const T=ba(g[w]);d.includes(T)?y.delete(T):y.get(T)!==!0&&y.set(T,!1)}},[g,d.length,d.join("-")]);const C=[];if(u!==v){let w=[...u];for(let T=0;T<g.length;T++){const x=g[T],I=ba(x);d.includes(I)||(w.splice(T,0,x),C.push(x))}return s==="wait"&&C.length&&(w=C),m(J2(w)),_(u),null}const{forceRender:E}=S.useContext(V9);return f(W,{children:g.map(w=>{const T=ba(w),x=o&&!l?!1:u===g||d.includes(T),I=()=>{if(y.has(T))y.set(T,!0);else return;let O=!0;y.forEach(M=>{M||(O=!1)}),O&&(E==null||E(),m(p.current),o&&(c==null||c()),r&&r())};return f(Z_,{isPresent:x,initial:!h.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:s,onExitComplete:x?void 0:I,anchorX:a,children:w},T)})})},wh=S.createContext({strict:!1}),Z2={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},es={};for(const t in Z2)es[t]={isEnabled:e=>Z2[t].some(n=>!!e[n])};function nw(t){for(const e in t)es[e]={...es[e],...t[e]}}const rw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function L1(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||rw.has(t)}let Eh=t=>!L1(t);function iw(t){typeof t=="function"&&(Eh=e=>e.startsWith("on")?!L1(e):t(e))}try{iw(require("@emotion/is-prop-valid").default)}catch{}function sw(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(Eh(i)||n===!0&&L1(i)||!e&&!L1(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function ow(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}const Pl=S.createContext({});function Al(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ro(t){return typeof t=="string"||Array.isArray(t)}const u4=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],d4=["initial",...u4];function Rl(t){return Al(t.animate)||d4.some(e=>Ro(t[e]))}function Sh(t){return!!(Rl(t)||t.variants)}function aw(t,e){if(Rl(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Ro(n)?n:void 0,animate:Ro(r)?r:void 0}}return t.inherit!==!1?e:{}}function lw(t){const{initial:e,animate:n}=aw(t,S.useContext(Pl));return S.useMemo(()=>({initial:e,animate:n}),[e5(e),e5(n)])}function e5(t){return Array.isArray(t)?t.join(" "):t}const cw=Symbol.for("motionComponentSymbol");function Ti(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function uw(t,e,n){return S.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Ti(n)&&(n.current=r))},[e])}const h4=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),dw="framerAppearId",Th="data-"+h4(dw),Ih=S.createContext({});function hw(t,e,n,r,i){var v,_;const{visualElement:s}=S.useContext(Pl),o=S.useContext(wh),a=S.useContext(xl),l=S.useContext(c4).reducedMotion,c=S.useRef(null);r=r||o.renderer,!c.current&&r&&(c.current=r(t,{visualState:e,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,d=S.useContext(Ih);u&&!u.projection&&i&&(u.type==="html"||u.type==="svg")&&fw(c.current,n,i,d);const h=S.useRef(!1);S.useInsertionEffect(()=>{u&&h.current&&u.update(n,a)});const p=n[Th],y=S.useRef(!!p&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,p))&&((_=window.MotionHasOptimisedAnimation)==null?void 0:_.call(window,p)));return Rd(()=>{u&&(h.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),a4.render(u.render),y.current&&u.animationState&&u.animationState.animateChanges())}),S.useEffect(()=>{u&&(!y.current&&u.animationState&&u.animationState.animateChanges(),y.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)==null||g.call(window,p)}),y.current=!1))}),u}function fw(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:kh(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Ti(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}function kh(t){if(t)return t.options.allowProjection!==!1?t.projection:kh(t.parent)}function pw({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&nw(t);function s(a,l){let c;const u={...S.useContext(c4),...a,layoutId:mw(a)},{isStatic:d}=u,h=lw(a),p=r(a,d);if(!d&&B9){gw();const y=Cw(u);c=y.MeasureLayout,h.visualElement=hw(i,p,u,e,y.ProjectionNode)}return A(Pl.Provider,{value:h,children:[c&&h.visualElement?f(c,{visualElement:h.visualElement,...u}):null,n(i,a,uw(p,h.visualElement,l),p,d,h.visualElement)]})}s.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const o=S.forwardRef(s);return o[cw]=i,o}function mw({layoutId:t}){const e=S.useContext(V9).id;return e&&t!==void 0?e+"-"+t:t}function gw(t,e){S.useContext(wh).strict}function Cw(t){const{drag:e,layout:n}=es;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const No={};function yw(t){for(const e in t)No[e]=t[e],q9(e)&&(No[e].isCSSVariable=!0)}function xh(t,{layout:e,layoutId:n}){return us.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!No[t]||t==="opacity")}const vw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_w=cs.length;function ww(t,e,n){let r="",i=!0;for(let s=0;s<_w;s++){const o=cs[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=mh(a,o4[o]);if(!l){i=!1;const u=vw[o]||o;r+=`${u}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function f4(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(us.has(l)){o=!0;continue}else if(q9(l)){i[l]=c;continue}else{const u=mh(c,o4[l]);l.startsWith("origin")?(a=!0,s[l]=u):r[l]=u}}if(e.transform||(o||n?r.transform=ww(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;r.transformOrigin=`${l} ${c} ${u}`}}const p4=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ph(t,e,n){for(const r in e)!$e(e[r])&&!xh(r,n)&&(t[r]=e[r])}function Ew({transformTemplate:t},e){return S.useMemo(()=>{const n=p4();return f4(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Sw(t,e){const n=t.style||{},r={};return Ph(r,n,t),Object.assign(r,Ew(t,e)),r}function Tw(t,e){const n={},r=Sw(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const Iw={offset:"stroke-dashoffset",array:"stroke-dasharray"},kw={offset:"strokeDashoffset",array:"strokeDasharray"};function xw(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?Iw:kw;t[s.offset]=F.transform(-r);const o=F.transform(e),a=F.transform(n);t[s.array]=`${o} ${a}`}function Ah(t,{attrX:e,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(f4(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:h}=t;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&xw(d,i,s,o,!1)}const Rh=()=>({...p4(),attrs:{}}),Nh=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Pw(t,e,n,r){const i=S.useMemo(()=>{const s=Rh();return Ah(s,e,Nh(r),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Ph(s,t.style,t),i.style={...s,...i.style}}return i}const Aw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function m4(t){return typeof t!="string"||t.includes("-")?!1:!!(Aw.indexOf(t)>-1||/[A-Z]/u.test(t))}function Rw(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(m4(n)?Pw:Tw)(r,s,o,n),c=sw(r,typeof n=="string",t),u=n!==S.Fragment?{...c,...l,ref:i}:{},{children:d}=r,h=S.useMemo(()=>$e(d)?d.get():d,[d]);return S.createElement(n,{...u,children:h})}}function t5(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function g4(t,e,n,r){if(typeof e=="function"){const[i,s]=t5(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=t5(r);e=e(n!==void 0?n:t.custom,i,s)}return e}function Ja(t){return $e(t)?t.get():t}function Nw({scrapeMotionValuesFromProps:t,createRenderState:e},n,r,i){return{latestValues:bw(n,r,i,t),renderState:e()}}const bh=t=>(e,n)=>{const r=S.useContext(Pl),i=S.useContext(xl),s=()=>Nw(t,e,r,i);return n?s():U9(s)};function bw(t,e,n,r){const i={},s=r(t,{});for(const h in s)i[h]=Ja(s[h]);let{initial:o,animate:a}=t;const l=Rl(t),c=Sh(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Al(d)){const h=Array.isArray(d)?d:[d];for(let p=0;p<h.length;p++){const y=g4(t,h[p]);if(y){const{transitionEnd:v,transition:_,...g}=y;for(const m in g){let C=g[m];if(Array.isArray(C)){const E=u?C.length-1:0;C=C[E]}C!==null&&(i[m]=C)}for(const m in v)i[m]=v[m]}}}return i}function C4(t,e,n){var s;const{style:r}=t,i={};for(const o in r)($e(r[o])||e.style&&$e(e.style[o])||xh(o,t)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(i[o]=r[o]);return i}const Mw={useVisualState:bh({scrapeMotionValuesFromProps:C4,createRenderState:p4})};function Mh(t,e,n){const r=C4(t,e,n);for(const i in t)if($e(t[i])||$e(e[i])){const s=cs.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}const Dw={useVisualState:bh({scrapeMotionValuesFromProps:Mh,createRenderState:Rh})};function Ow(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...m4(r)?Dw:Mw,preloadedFeatures:t,useRender:Rw(i),createVisualElement:e,Component:r};return pw(o)}}function bo(t,e,n){const r=t.getProps();return g4(r,e,n!==void 0?n:r.custom,t)}const lu=t=>Array.isArray(t);function Lw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Zi(n))}function Fw(t){return lu(t)?t[t.length-1]||0:t}function Vw(t,e){const n=bo(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=Fw(s[o]);Lw(t,o,a)}}function Uw(t){return!!($e(t)&&t.add)}function cu(t,e){const n=t.getValue("willChange");if(Uw(n))return n.add(e);if(!n&&kn.WillChange){const r=new kn.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function Dh(t){return t.props[Th]}const Bw=t=>t!==null;function zw(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(Bw),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const jw={type:"spring",stiffness:500,damping:25,restSpeed:10},$w=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Ww={type:"keyframes",duration:.8},Hw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Gw=(t,{keyframes:e})=>e.length>2?Ww:us.has(t)?t.startsWith("scale")?$w(e[1]):jw:Hw;function Kw({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const y4=(t,e,n,r={},i,s)=>o=>{const a=s4(r,t)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-tn(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:i};Kw(a)||Object.assign(u,Gw(t,u)),u.duration&&(u.duration=tn(u.duration)),u.repeatDelay&&(u.repeatDelay=tn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),(kn.instantAnimations||kn.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const h=zw(u.keyframes,a);if(h!==void 0){ue.update(()=>{u.onUpdate(h),u.onComplete()});return}}return a.isSync?new n4(u):new k_(u)};function qw({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function Oh(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=e;r&&(s=r);const l=[],c=i&&t.animationState&&t.animationState.getState()[i];for(const u in a){const d=t.getValue(u,t.latestValues[u]??null),h=a[u];if(h===void 0||c&&qw(c,u))continue;const p={delay:n,...s4(s||{},u)},y=d.get();if(y!==void 0&&!d.isAnimating&&!Array.isArray(h)&&h===y&&!p.velocity)continue;let v=!1;if(window.MotionHandoffAnimation){const g=Dh(t);if(g){const m=window.MotionHandoffAnimation(g,u,ue);m!==null&&(p.startTime=m,v=!0)}}cu(t,u),d.start(y4(u,d,h,t.shouldReduceMotion&&uh.has(u)?{type:!1}:p,t,v));const _=d.animation;_&&l.push(_)}return o&&Promise.all(l).then(()=>{ue.update(()=>{o&&Vw(t,o)})}),l}function uu(t,e,n={}){var l;const r=bo(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Oh(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=i;return Yw(t,e,u+c,d,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function Yw(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(Qw).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(uu(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function Qw(t,e){return t.sortNodePosition(e)}function Xw(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>uu(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=uu(t,e,n);else{const i=typeof e=="function"?bo(t,e,n.custom):e;r=Promise.all(Oh(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}function Lh(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const Jw=d4.length;function Fh(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?Fh(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Jw;n++){const r=d4[n],i=t.props[r];(Ro(i)||i===!1)&&(e[r]=i)}return e}const Zw=[...u4].reverse(),eE=u4.length;function tE(t){return e=>Promise.all(e.map(({animation:n,options:r})=>Xw(t,n,r)))}function nE(t){let e=tE(t),n=n5(),r=!0;const i=l=>(c,u)=>{var h;const d=bo(t,u,l==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);if(d){const{transition:p,transitionEnd:y,...v}=d;c={...c,...v,...y}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=Fh(t.parent)||{},d=[],h=new Set;let p={},y=1/0;for(let _=0;_<eE;_++){const g=Zw[_],m=n[g],C=c[g]!==void 0?c[g]:u[g],E=Ro(C),w=g===l?m.isActive:null;w===!1&&(y=_);let T=C===u[g]&&C!==c[g]&&E;if(T&&r&&t.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...p},!m.isActive&&w===null||!C&&!m.prevProp||Al(C)||typeof C=="boolean")continue;const x=rE(m.prevProp,C);let I=x||g===l&&m.isActive&&!T&&E||_>y&&E,O=!1;const M=Array.isArray(C)?C:[C];let ye=M.reduce(i(g),{});w===!1&&(ye={});const{prevResolvedValues:Ht={}}=m,an={...Ht,...ye},Nn=ie=>{I=!0,h.has(ie)&&(O=!0,h.delete(ie)),m.needsAnimating[ie]=!0;const R=t.getValue(ie);R&&(R.liveStyle=!1)};for(const ie in an){const R=ye[ie],V=Ht[ie];if(p.hasOwnProperty(ie))continue;let B=!1;lu(R)&&lu(V)?B=!Lh(R,V):B=R!==V,B?R!=null?Nn(ie):h.add(ie):R!==void 0&&h.has(ie)?Nn(ie):m.protectedKeys[ie]=!0}m.prevProp=C,m.prevResolvedValues=ye,m.isActive&&(p={...p,...ye}),r&&t.blockInitialAnimation&&(I=!1),I&&(!(T&&x)||O)&&d.push(...M.map(ie=>({animation:ie,options:{type:g}})))}if(h.size){const _={};if(typeof c.initial!="boolean"){const g=bo(t,Array.isArray(c.initial)?c.initial[0]:c.initial);g&&g.transition&&(_.transition=g.transition)}h.forEach(g=>{const m=t.getBaseTarget(g),C=t.getValue(g);C&&(C.liveStyle=!0),_[g]=m??null}),d.push({animation:_})}let v=!!d.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(v=!1),r=!1,v?e(d):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(h=>{var p;return(p=h.animationState)==null?void 0:p.setActive(l,c)}),n[l].isActive=c;const u=o(l);for(const h in n)n[h].protectedKeys={};return u}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=n5(),r=!0}}}function rE(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Lh(e,t):!1}function Tr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function n5(){return{animate:Tr(!0),whileInView:Tr(),whileHover:Tr(),whileTap:Tr(),whileDrag:Tr(),whileFocus:Tr(),exit:Tr()}}class yr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class iE extends yr{constructor(e){super(e),e.animationState||(e.animationState=nE(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Al(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let sE=0;class oE extends yr{constructor(){super(...arguments),this.id=sE++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const aE={animation:{Feature:iE},exit:{Feature:oE}};function Mo(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function Zo(t){return{point:{x:t.pageX,y:t.pageY}}}const lE=t=>e=>l4(e)&&t(e,Zo(e));function eo(t,e,n,r){return Mo(t,e,lE(n),r)}function Vh({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function cE({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function uE(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}const Uh=1e-4,dE=1-Uh,hE=1+Uh,Bh=.01,fE=0-Bh,pE=0+Bh;function Ge(t){return t.max-t.min}function mE(t,e,n){return Math.abs(t-e)<=n}function r5(t,e,n,r=.5){t.origin=r,t.originPoint=ae(e.min,e.max,t.origin),t.scale=Ge(n)/Ge(e),t.translate=ae(n.min,n.max,t.origin)-t.originPoint,(t.scale>=dE&&t.scale<=hE||isNaN(t.scale))&&(t.scale=1),(t.translate>=fE&&t.translate<=pE||isNaN(t.translate))&&(t.translate=0)}function to(t,e,n,r){r5(t.x,e.x,n.x,r?r.originX:void 0),r5(t.y,e.y,n.y,r?r.originY:void 0)}function i5(t,e,n){t.min=n.min+e.min,t.max=t.min+Ge(e)}function gE(t,e,n){i5(t.x,e.x,n.x),i5(t.y,e.y,n.y)}function s5(t,e,n){t.min=e.min-n.min,t.max=t.min+Ge(e)}function no(t,e,n){s5(t.x,e.x,n.x),s5(t.y,e.y,n.y)}const o5=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ii=()=>({x:o5(),y:o5()}),a5=()=>({min:0,max:0}),ge=()=>({x:a5(),y:a5()});function mt(t){return[t("x"),t("y")]}function P0(t){return t===void 0||t===1}function du({scale:t,scaleX:e,scaleY:n}){return!P0(t)||!P0(e)||!P0(n)}function xr(t){return du(t)||zh(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function zh(t){return l5(t.x)||l5(t.y)}function l5(t){return t&&t!=="0%"}function F1(t,e,n){const r=t-n,i=e*r;return n+i}function c5(t,e,n,r,i){return i!==void 0&&(t=F1(t,i,r)),F1(t,n,r)+e}function hu(t,e=0,n=1,r,i){t.min=c5(t.min,e,n,r,i),t.max=c5(t.max,e,n,r,i)}function jh(t,{x:e,y:n}){hu(t.x,e.translate,e.scale,e.originPoint),hu(t.y,n.translate,n.scale,n.originPoint)}const u5=.999999999999,d5=1.0000000000001;function CE(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&xi(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,jh(t,o)),r&&xr(s.latestValues)&&xi(t,s.latestValues))}e.x<d5&&e.x>u5&&(e.x=1),e.y<d5&&e.y>u5&&(e.y=1)}function ki(t,e){t.min=t.min+e,t.max=t.max+e}function h5(t,e,n,r,i=.5){const s=ae(t.min,t.max,i);hu(t,e,n,s,r)}function xi(t,e){h5(t.x,e.x,e.scaleX,e.scale,e.originX),h5(t.y,e.y,e.scaleY,e.scale,e.originY)}function $h(t,e){return Vh(uE(t.getBoundingClientRect(),e))}function yE(t,e,n){const r=$h(t,n),{scroll:i}=e;return i&&(ki(r.x,i.offset.x),ki(r.y,i.offset.y)),r}const Wh=({current:t})=>t?t.ownerDocument.defaultView:null,f5=(t,e)=>Math.abs(t-e);function vE(t,e){const n=f5(t.x,e.x),r=f5(t.y,e.y);return Math.sqrt(n**2+r**2)}class Hh{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=R0(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=vE(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:y}=d,{timestamp:v}=Le;this.history.push({...y,timestamp:v});const{onStart:_,onMove:g}=this.handlers;h||(_&&_(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=A0(h,this.transformPagePoint),ue.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:y,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=R0(d.type==="pointercancel"?this.lastMoveEventInfo:A0(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,_),y&&y(d,_)},!l4(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Zo(e),a=A0(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Le;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,R0(a,this.history)),this.removeListeners=Qo(eo(this.contextWindow,"pointermove",this.handlePointerMove),eo(this.contextWindow,"pointerup",this.handlePointerUp),eo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),lr(this.updatePoint)}}function A0(t,e){return e?{point:e(t.point)}:t}function p5(t,e){return{x:t.x-e.x,y:t.y-e.y}}function R0({point:t},e){return{point:t,delta:p5(t,Gh(e)),offset:p5(t,_E(e)),velocity:wE(e,.1)}}function _E(t){return t[0]}function Gh(t){return t[t.length-1]}function wE(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=Gh(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>tn(e)));)n--;if(!r)return{x:0,y:0};const s=nn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function EE(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?ae(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?ae(n,t,r.max):Math.min(t,n)),t}function m5(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function SE(t,{top:e,left:n,bottom:r,right:i}){return{x:m5(t.x,n,i),y:m5(t.y,e,r)}}function g5(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function TE(t,e){return{x:g5(t.x,e.x),y:g5(t.y,e.y)}}function IE(t,e){let n=.5;const r=Ge(t),i=Ge(e);return i>r?n=xo(e.min,e.max-r,t.min):r>i&&(n=xo(t.min,t.max-i,e.min)),In(0,1,n)}function kE(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const fu=.35;function xE(t=fu){return t===!1?t=0:t===!0&&(t=fu),{x:C5(t,"left","right"),y:C5(t,"top","bottom")}}function C5(t,e,n){return{min:y5(t,e),max:y5(t,n)}}function y5(t,e){return typeof t=="number"?t:t[e]||0}const PE=new WeakMap;class AE{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ge(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Zo(u).point)},s=(u,d)=>{const{drag:h,dragPropagation:p,onDragStart:y}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=j_(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mt(_=>{let g=this.getAxisMotionValue(_).get()||0;if(rn.test(g)){const{projection:m}=this.visualElement;if(m&&m.layout){const C=m.layout.layoutBox[_];C&&(g=Ge(C)*(parseFloat(g)/100))}}this.originPoint[_]=g}),y&&ue.postRender(()=>y(u,d)),cu(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:y,onDrag:v}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:_}=d;if(p&&this.currentDirection===null){this.currentDirection=RE(_),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,_),this.updateAxis("y",d.point,_),this.visualElement.render(),v&&v(u,d)},a=(u,d)=>this.stop(u,d),l=()=>mt(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)==null?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Hh(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Wh(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&ue.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!Ma(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=EE(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;e&&Ti(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=SE(r.layoutBox,e):this.constraints=!1,this.elastic=xE(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&mt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=kE(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ti(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=yE(r,i.root,this.visualElement.getTransformPagePoint());let o=TE(i.layout.layoutBox,s);if(n){const a=n(cE(o));this.hasMutatedConstraints=!!a,a&&(o=Vh(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=mt(u=>{if(!Ma(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const h=i?200:1e6,p=i?40:1e7,y={type:"inertia",velocity:r?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,y)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return cu(this.visualElement,e),r.start(y4(e,r,0,n,this.visualElement,!1))}stopAnimation(){mt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){mt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){mt(n=>{const{drag:r}=this.getProps();if(!Ma(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-ae(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ti(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};mt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=IE({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),mt(o=>{if(!Ma(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ae(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;PE.set(this.visualElement,this);const e=this.visualElement.current,n=eo(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ti(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ue.read(r);const o=Mo(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(mt(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=fu,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Ma(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function RE(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class NE extends yr{constructor(e){super(e),this.removeGroupControls=Et,this.removeListeners=Et,this.controls=new AE(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Et}unmount(){this.removeGroupControls(),this.removeListeners()}}const v5=t=>(e,n)=>{t&&ue.postRender(()=>t(e,n))};class bE extends yr{constructor(){super(...arguments),this.removePointerDownListener=Et}onPointerDown(e){this.session=new Hh(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wh(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:v5(e),onStart:v5(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ue.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=eo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Za={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _5(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ps={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(F.test(t))t=parseFloat(t);else return t;const n=_5(t,e.target.x),r=_5(t,e.target.y);return`${n}% ${r}%`}},ME={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=cr.parse(t);if(i.length>5)return r;const s=cr.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=ae(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class DE extends S.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;yw(OE),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Za.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:o}=r;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ue.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),a4.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Kh(t){const[e,n]=_h(),r=S.useContext(V9);return f(DE,{...t,layoutGroup:r,switchLayoutGroup:S.useContext(Ih),isPresent:e,safeToRemove:n})}const OE={borderRadius:{...Ps,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ps,borderTopRightRadius:Ps,borderBottomLeftRadius:Ps,borderBottomRightRadius:Ps,boxShadow:ME};function LE(t,e,n){const r=$e(t)?t:Zi(t);return r.start(y4("",r,e,n)),r.animation}const FE=(t,e)=>t.depth-e.depth;class VE{constructor(){this.children=[],this.isDirty=!1}add(e){z9(this.children,e),this.isDirty=!0}remove(e){j9(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(FE),this.isDirty=!1,this.children.forEach(e)}}function UE(t,e){const n=et.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(lr(r),t(s-e))};return ue.setup(r,!0),()=>lr(r)}const qh=["TopLeft","TopRight","BottomLeft","BottomRight"],BE=qh.length,w5=t=>typeof t=="string"?parseFloat(t):t,E5=t=>typeof t=="number"||F.test(t);function zE(t,e,n,r,i,s){i?(t.opacity=ae(0,n.opacity??1,jE(r)),t.opacityExit=ae(e.opacity??1,0,$E(r))):s&&(t.opacity=ae(e.opacity??1,n.opacity??1,r));for(let o=0;o<BE;o++){const a=`border${qh[o]}Radius`;let l=S5(e,a),c=S5(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||E5(l)===E5(c)?(t[a]=Math.max(ae(w5(l),w5(c),r),0),(rn.test(c)||rn.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ae(e.rotate||0,n.rotate||0,r))}function S5(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const jE=Yh(0,.5,zd),$E=Yh(.5,.95,Et);function Yh(t,e,n){return r=>r<t?0:r>e?1:n(xo(t,e,r))}function T5(t,e){t.min=e.min,t.max=e.max}function pt(t,e){T5(t.x,e.x),T5(t.y,e.y)}function I5(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function k5(t,e,n,r,i){return t-=e,t=F1(t,1/n,r),i!==void 0&&(t=F1(t,1/i,r)),t}function WE(t,e=0,n=1,r=.5,i,s=t,o=t){if(rn.test(e)&&(e=parseFloat(e),e=ae(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ae(s.min,s.max,r);t===s&&(a-=e),t.min=k5(t.min,e,n,a,i),t.max=k5(t.max,e,n,a,i)}function x5(t,e,[n,r,i],s,o){WE(t,e[n],e[r],e[i],e.scale,s,o)}const HE=["x","scaleX","originX"],GE=["y","scaleY","originY"];function P5(t,e,n,r){x5(t.x,e,HE,n?n.x:void 0,r?r.x:void 0),x5(t.y,e,GE,n?n.y:void 0,r?r.y:void 0)}function A5(t){return t.translate===0&&t.scale===1}function Qh(t){return A5(t.x)&&A5(t.y)}function R5(t,e){return t.min===e.min&&t.max===e.max}function KE(t,e){return R5(t.x,e.x)&&R5(t.y,e.y)}function N5(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Xh(t,e){return N5(t.x,e.x)&&N5(t.y,e.y)}function b5(t){return Ge(t.x)/Ge(t.y)}function M5(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class qE{constructor(){this.members=[]}add(e){z9(this.members,e),e.scheduleRender()}remove(e){if(j9(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function YE(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:h,skewX:p,skewY:y}=n;c&&(r=`perspective(${c}px) ${r}`),u&&(r+=`rotate(${u}deg) `),d&&(r+=`rotateX(${d}deg) `),h&&(r+=`rotateY(${h}deg) `),p&&(r+=`skewX(${p}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const N0=["","X","Y","Z"],QE={visibility:"hidden"},XE=1e3;let JE=0;function b0(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function Jh(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Dh(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ue,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&Jh(r)}function Zh({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=JE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(tS),this.nodes.forEach(oS),this.nodes.forEach(aS),this.nodes.forEach(nS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new VE)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new H9),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=vh(o)&&!q_(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,u&&u(),u=UE(d,250),Za.hasAnimatedSinceResize&&(Za.hasAnimatedSinceResize=!1,this.nodes.forEach(O5))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||hS,{onLayoutAnimationStart:v,onLayoutAnimationComplete:_}=c.getProps(),g=!this.targetLayout||!Xh(this.targetLayout,p),m=!d&&h;if(this.options.layoutRoot||this.resumeFrom||m||d&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...s4(y,"layout"),onPlay:v,onComplete:_};(c.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(u,m)}else d||O5(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),lr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lS),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Jh(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(D5);return}this.isUpdating||this.nodes.forEach(iS),this.isUpdating=!1,this.nodes.forEach(sS),this.nodes.forEach(ZE),this.nodes.forEach(eS),this.clearAllSnapshots();const a=et.now();Le.delta=In(0,1e3/60,a-Le.timestamp),Le.timestamp=a,Le.isProcessing=!0,E0.update.process(Le),E0.preRender.process(Le),E0.render.process(Le),Le.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,a4.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(rS),this.sharedNodes.forEach(cS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ue.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ue.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ge(this.snapshot.measuredBox.x)&&!Ge(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ge(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Qh(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||xr(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),fS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return ge();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(pS))){const{scroll:u}=this.root;u&&(ki(a.x,u.offset.x),ki(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=ge();if(pt(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:h}=u;u!==this.root&&d&&h.layoutScroll&&(d.wasRoot&&pt(a,o),ki(a.x,d.offset.x),ki(a.y,d.offset.y))}return a}applyTransform(o,a=!1){const l=ge();pt(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&xi(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),xr(u.latestValues)&&xi(l,u.latestValues)}return xr(this.latestValues)&&xi(l,this.latestValues),l}removeTransform(o){const a=ge();pt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!xr(c.latestValues))continue;du(c.latestValues)&&c.updateSnapshot();const u=ge(),d=c.measurePageBox();pt(u,d),P5(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return xr(this.latestValues)&&P5(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Le.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var h;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!(!this.layout||!(u||d))){if(this.resolvedRelativeTargetAt=Le.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ge(),this.relativeTargetOrigin=ge(),no(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ge(),this.targetWithTransforms=ge()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):pt(this.target,this.layout.layoutBox),jh(this.target,this.targetDelta)):pt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ge(),this.relativeTargetOrigin=ge(),no(this.relativeTargetOrigin,this.target,p.target),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||du(this.parent.latestValues)||zh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var y;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Le.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;pt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;CE(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ge());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(I5(this.prevProjectionDelta.x,this.projectionDelta.x),I5(this.prevProjectionDelta.y,this.projectionDelta.y)),to(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!M5(this.projectionDelta.x,this.prevProjectionDelta.x)||!M5(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ii(),this.projectionDelta=Ii(),this.projectionDeltaWithTransform=Ii()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Ii();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=ge(),p=l?l.source:void 0,y=this.layout?this.layout.source:void 0,v=p!==y,_=this.getStack(),g=!_||_.members.length<=1,m=!!(v&&!g&&this.options.crossfade===!0&&!this.path.some(dS));this.animationProgress=0;let C;this.mixTargetDelta=E=>{const w=E/1e3;L5(d.x,o.x,w),L5(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(no(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),uS(this.relativeTarget,this.relativeTargetOrigin,h,w),C&&KE(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=ge()),pt(C,this.relativeTarget)),v&&(this.animationValues=u,zE(u,c,this.latestValues,w,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(lr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ue.update(()=>{Za.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Zi(0)),this.currentAnimation=LE(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(XE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&ef(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ge();const d=Ge(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=Ge(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}pt(a,l),xi(a,u),to(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new qE),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&b0("z",o,c,this.animationValues);for(let u=0;u<N0.length;u++)b0(`rotate${N0[u]}`,o,c,this.animationValues),b0(`skew${N0[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){if(!this.instance||this.isSVG)return;if(!this.isVisible)return QE;const a={visibility:""},l=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,a.opacity="",a.pointerEvents=Ja(o==null?void 0:o.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none",a;const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=Ja(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!xr(this.latestValues)&&(p.transform=l?l({},""):"none",this.hasProjected=!1),p}const u=c.animationValues||c.latestValues;this.applyTransformsToTarget(),a.transform=YE(this.projectionDeltaWithTransform,this.treeScale,u),l&&(a.transform=l(u,a.transform));const{x:d,y:h}=this.projectionDelta;a.transformOrigin=`${d.origin*100}% ${h.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const p in No){if(u[p]===void 0)continue;const{correct:y,applyTo:v,isCSSVariable:_}=No[p],g=a.transform==="none"?u[p]:y(u[p],c);if(v){const m=v.length;for(let C=0;C<m;C++)a[v[C]]=g}else _?this.options.visualElement.renderState.vars[p]=g:a[p]=g}return this.options.layoutId&&(a.pointerEvents=c===this?Ja(o==null?void 0:o.pointerEvents)||"":"none"),a}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(D5),this.root.sharedNodes.clear()}}}function ZE(t){t.updateLayout()}function eS(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?mt(d=>{const h=o?e.measuredBox[d]:e.layoutBox[d],p=Ge(h);h.min=r[d].min,h.max=h.min+p}):ef(s,e.layoutBox,r)&&mt(d=>{const h=o?e.measuredBox[d]:e.layoutBox[d],p=Ge(r[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Ii();to(a,r,e.layoutBox);const l=Ii();o?to(l,t.applyTransform(i,!0),e.measuredBox):to(l,r,e.layoutBox);const c=!Qh(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const y=ge();no(y,e.layoutBox,h.layoutBox);const v=ge();no(v,r,p.layoutBox),Xh(y,v)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=v,t.relativeTargetOrigin=y,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function tS(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function nS(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function rS(t){t.clearSnapshot()}function D5(t){t.clearMeasurements()}function iS(t){t.isLayoutDirty=!1}function sS(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function O5(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function oS(t){t.resolveTargetDelta()}function aS(t){t.calcProjection()}function lS(t){t.resetSkewAndRotation()}function cS(t){t.removeLeadSnapshot()}function L5(t,e,n){t.translate=ae(e.translate,0,n),t.scale=ae(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function F5(t,e,n,r){t.min=ae(e.min,n.min,r),t.max=ae(e.max,n.max,r)}function uS(t,e,n,r){F5(t.x,e.x,n.x,r),F5(t.y,e.y,n.y,r)}function dS(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const hS={duration:.45,ease:[.4,0,.1,1]},V5=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),U5=V5("applewebkit/")&&!V5("chrome/")?Math.round:Et;function B5(t){t.min=U5(t.min),t.max=U5(t.max)}function fS(t){B5(t.x),B5(t.y)}function ef(t,e,n){return t==="position"||t==="preserve-aspect"&&!mE(b5(e),b5(n),.2)}function pS(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const mS=Zh({attachResizeListener:(t,e)=>Mo(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),M0={current:void 0},tf=Zh({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!M0.current){const t=new mS({});t.mount(window),t.setOptions({layoutScroll:!0}),M0.current=t}return M0.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),gS={pan:{Feature:bE},drag:{Feature:NE,ProjectionNode:tf,MeasureLayout:Kh}};function z5(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&ue.postRender(()=>s(e,Zo(e)))}class CS extends yr{mount(){const{current:e}=this.node;e&&(this.unmount=$_(e,(n,r)=>(z5(this.node,r,"Start"),i=>z5(this.node,i,"End"))))}unmount(){}}class yS extends yr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qo(Mo(this.node.current,"focus",()=>this.onFocus()),Mo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function j5(t,e,n){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&ue.postRender(()=>s(e,Zo(e)))}class vS extends yr{mount(){const{current:e}=this.node;e&&(this.unmount=K_(e,(n,r)=>(j5(this.node,r,"Start"),(i,{success:s})=>j5(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const pu=new WeakMap,D0=new WeakMap,_S=t=>{const e=pu.get(t.target);e&&e(t)},wS=t=>{t.forEach(_S)};function ES({root:t,...e}){const n=t||document;D0.has(n)||D0.set(n,{});const r=D0.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(wS,{root:t,...e})),r[i]}function SS(t,e,n){const r=ES(e);return pu.set(t,n),r.observe(t),()=>{pu.delete(t),r.unobserve(t)}}const TS={some:0,all:1};class IS extends yr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:TS[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return SS(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(kS(e,n))&&this.startObserver()}unmount(){}}function kS({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const xS={inView:{Feature:IS},tap:{Feature:vS},focus:{Feature:yS},hover:{Feature:CS}},PS={layout:{ProjectionNode:tf,MeasureLayout:Kh}},mu={current:null},nf={current:!1};function AS(){if(nf.current=!0,!!B9)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>mu.current=t.matches;t.addListener(e),e()}else mu.current=!1}const RS=new WeakMap;function NS(t,e,n){for(const r in e){const i=e[r],s=n[r];if($e(i))t.addValue(r,i);else if($e(s))t.addValue(r,Zi(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,Zi(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const $5=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bS{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=r4,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=et.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,ue.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Rl(n),this.isVariantNode=Sh(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in d){const p=d[h];l[h]!==void 0&&$e(p)&&p.set(l[h],!1)}}mount(e){this.current=e,RS.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),nf.current||AS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:mu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),lr(this.notifyUpdate),lr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=us.has(e);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ue.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in es){const n=es[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ge()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<$5.length;r++){const i=$5[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=NS(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Zi(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Nd(r)||Md(r))?r=parseFloat(r):!Q_(r)&&cr.test(n)&&(r=ph(e,n)),this.setBaseTarget(e,$e(r)?r.get():r)),$e(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=g4(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(r=o[e])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!$e(i)?i:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new H9),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class rf extends bS{constructor(){super(...arguments),this.KeyframeResolver=V_}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;$e(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function sf(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}function MS(t){return window.getComputedStyle(t)}class DS extends rf{constructor(){super(...arguments),this.type="html",this.renderInstance=sf}readValueFromInstance(e,n){var r;if(us.has(n))return(r=this.projection)!=null&&r.isProjecting?nu(n):r_(e,n);{const i=MS(e),s=(q9(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return $h(e,n)}build(e,n,r){f4(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return C4(e,n,r)}}const of=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function OS(t,e,n,r){sf(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(of.has(i)?i:h4(i),e.attrs[i])}class LS extends rf{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ge}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(us.has(n)){const r=fh(n);return r&&r.default||0}return n=of.has(n)?n:h4(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return Mh(e,n,r)}build(e,n,r){Ah(e,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,n,r,i){OS(e,n,r,i)}mount(e){this.isSVGTag=Nh(e.tagName),super.mount(e)}}const FS=(t,e)=>m4(t)?new LS(e):new DS(e,{allowProjection:t!==S.Fragment}),VS=Ow({...aE,...xS,...gS,...PS},FS),US=ow(VS),BS=()=>A("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",viewBox:"0 0 1440 980",className:"w-full h-full block max-w-5xl",preserveAspectRatio:"xMidYMax meet",children:[f("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FECE98",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#DAA060",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#A4B2BE",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M723.388184,526.960144 
	C722.615540,526.451355 722.248718,525.943481 721.559998,524.989746 
	C723.205139,524.989746 724.476257,524.989685 725.747314,524.989746 
	C769.893188,524.992737 814.039124,524.982727 858.184937,525.043518 
	C860.047119,525.046082 861.908325,525.705994 863.863525,526.439758 
	C836.380493,526.850220 808.803894,526.892212 781.227295,526.906494 
	C764.113281,526.915405 746.999207,526.882446 729.264282,526.650635 
	C728.108154,526.579956 727.572815,526.726746 727.037537,526.873474 
	C725.956360,526.902649 724.875244,526.931824 723.388184,526.960144 
z`}),f("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M388.595184,125.227097 
	C389.239716,126.258667 389.955811,127.619797 389.959808,128.983002 
	C390.028229,152.353409 390.022736,175.724091 389.968475,199.094574 
	C389.965668,200.305695 389.381805,201.515472 388.702637,202.828796 
	C388.336304,177.140350 388.335846,151.348984 388.595184,125.227097 
z`}),f("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M924.147461,590.332825 
	C924.540588,590.769958 925.347229,592.171387 925.170227,592.309143 
	C924.239075,593.034058 923.078979,593.839050 921.963074,593.893738 
	C912.417542,594.361389 902.864380,594.672913 893.002502,595.093506 
	C897.859314,591.368225 903.839233,590.922119 909.944946,590.907288 
	C914.665833,590.895813 919.386414,590.782227 924.147461,590.332825 
z`}),f("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M883.597534,601.876465 
	C882.508850,603.775391 881.121521,605.833374 879.394836,607.953979 
	C880.469971,606.022888 881.884399,604.029236 883.597534,601.876465 
z`}),f("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M891.830566,595.772705 
	C890.834717,597.001587 889.534119,598.155945 888.058228,599.053467 
	C889.097168,597.763916 890.311523,596.731079 891.830566,595.772705 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M394.832214,521.452637 
	C395.569824,521.782715 396.277100,522.444946 397.012451,523.446655 
	C396.294373,523.119019 395.548126,522.451904 394.832214,521.452637 
z`}),f("path",{fill:"#DBA160",opacity:"1.000000",stroke:"none",d:`
M886.720459,599.270874 
	C886.424805,599.957275 885.846497,600.658081 885.094849,601.107300 
	C885.427002,600.332275 885.932434,599.808777 886.720459,599.270874 
z`}),f("path",{fill:"#A4B2BE",opacity:"1.000000",stroke:"none",d:`
M387.877563,228.178116 
	C388.221680,228.563660 388.381073,229.108963 388.339600,229.805603 
	C387.990143,229.417252 387.841492,228.877563 387.877563,228.178116 
z`}),f("path",{fill:"#A4B2BE",opacity:"1.000000",stroke:"none",d:`
M727.184937,527.071777 
	C727.572815,526.726746 728.108154,526.579956 728.792847,526.624634 
	C728.405640,526.967407 727.868958,527.118774 727.184937,527.071777 
z`}),f("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M953.957520,597.761230 
	C949.620422,591.690979 945.299072,585.231995 940.949707,578.421021 
	C945.233765,578.484375 948.228149,579.735474 948.251160,585.157532 
	C948.261536,587.596191 950.715759,589.994751 951.945435,592.468872 
	C952.730835,594.049011 953.304626,595.734314 953.957520,597.761230 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1031.051270,568.313232 
	C1036.919556,574.757812 1042.767578,581.572449 1048.734619,588.691040 
	C1046.560425,587.155396 1043.888306,585.629700 1042.052856,583.411560 
	C1038.148315,578.692932 1034.678833,573.614380 1031.051270,568.313232 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1020.826050,554.260864 
	C1024.321777,558.413452 1027.641235,562.829346 1031.017456,567.586731 
	C1025.152344,565.931030 1022.748413,560.511536 1019.512512,555.923828 
	C1019.418701,555.790894 1020.249939,555.005432 1020.826050,554.260864 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M980.982117,642.629639 
	C977.690125,637.593445 974.407227,632.149170 971.100220,626.354919 
	C976.803833,629.929199 980.037109,635.378540 980.982117,642.629639 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1011.363281,685.985962 
	C1008.559937,685.414490 1006.956360,684.549194 1009.644348,682.206055 
	C1010.737427,681.253296 1011.884583,680.362732 1013.005310,679.445374 
	C1016.203308,682.892151 1015.828735,684.824280 1011.363281,685.985962 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M961.965576,609.735596 
	C959.593079,606.693359 957.237671,603.252258 954.799683,599.459351 
	C959.031494,601.173035 961.364868,604.645691 961.965576,609.735596 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1004.040771,529.319580 
	C1006.333984,532.063843 1008.612732,535.183838 1010.926147,538.650513 
	C1008.649353,535.896545 1006.337830,532.795898 1004.040771,529.319580 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M968.102905,618.906921 
	C966.531006,617.334290 965.259338,615.533081 963.887329,613.406128 
	C966.773560,613.752502 970.117432,614.129944 968.102905,618.906921 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M999.036255,521.263794 
	C1000.686707,523.337769 1002.324707,525.796692 1004.016602,528.600952 
	C1002.388306,526.513733 1000.706055,524.081177 999.036255,521.263794 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1015.040405,546.313232 
	C1016.656494,547.736450 1018.257812,549.528992 1019.873657,551.657104 
	C1018.267334,550.222656 1016.646484,548.452576 1015.040405,546.313232 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1051.025635,592.327515 
	C1052.670410,593.734863 1054.307983,595.512329 1056.006958,597.618408 
	C1054.385010,596.197205 1052.701660,594.447449 1051.025635,592.327515 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1011.041260,540.241943 
	C1012.362427,541.663696 1013.668213,543.465332 1015.022583,545.606689 
	C1013.722839,544.171570 1012.374390,542.396667 1011.041260,540.241943 
z`}),f("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1181.927246,666.205383 
	C1182.750854,668.332520 1183.432617,670.783936 1184.103760,673.642334 
	C1183.323730,671.542725 1182.554688,669.036194 1181.927246,666.205383 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M991.073486,507.148376 
	C992.055664,508.256256 993.007080,509.755524 994.010254,511.606567 
	C993.055542,510.485535 992.049072,509.012634 991.073486,507.148376 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M937.956909,574.408569 
	C938.689087,574.057739 939.459595,574.029480 940.615051,574.000610 
	C940.992737,575.081787 940.985474,576.163574 940.954590,577.651123 
	C939.952454,576.948303 938.973816,575.839722 937.956909,574.408569 
z`}),f("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1143.923828,656.823486 
	C1142.958862,656.361938 1141.990112,655.534180 1140.937500,654.380005 
	C1141.875854,654.854736 1142.897827,655.656006 1143.923828,656.823486 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M994.029419,512.333984 
	C994.710815,513.054138 995.378296,514.157776 996.061279,515.601990 
	C995.389709,514.867554 994.702637,513.792480 994.029419,512.333984 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M989.344971,506.000854 
	C988.691162,505.191132 988.382385,504.382233 988.081360,503.244629 
	C989.056396,503.717865 990.023621,504.519836 991.031494,505.664795 
	C990.611389,506.005768 990.150635,506.003723 989.344971,506.000854 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M970.271484,623.789062 
	C969.668152,623.219360 969.319763,622.445618 968.927979,621.354797 
	C969.431885,621.886841 969.979187,622.735901 970.271484,623.789062 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M996.045166,516.307495 
	C996.707642,516.737915 997.355408,517.533264 998.055786,518.645508 
	C997.415771,518.199036 996.723083,517.435730 996.045166,516.307495 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1056.040405,598.307129 
	C1056.723022,598.720215 1057.392822,599.495972 1058.070312,600.590698 
	C1057.394409,600.163086 1056.711060,599.416443 1056.040405,598.307129 
z`}),f("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1180.043579,662.295532 
	C1180.673584,662.744080 1181.288208,663.547058 1181.911133,664.670532 
	C1181.289062,664.210571 1180.658569,663.430237 1180.043579,662.295532 
z`}),f("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1177.038818,655.235107 
	C1177.697144,655.694092 1178.342163,656.521362 1179.001953,657.675537 
	C1178.353027,657.202759 1177.689209,656.403137 1177.038818,655.235107 
z`}),f("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1178.827148,660.134155 
	C1179.390137,660.424438 1179.712402,660.887390 1180.055542,661.645752 
	C1179.579834,661.396362 1179.083008,660.851562 1178.827148,660.134155 
z`}),f("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1146.222412,659.827209 
	C1145.648438,659.550110 1145.308594,659.093811 1144.898193,658.350830 
	C1145.370728,658.592102 1145.913696,659.120056 1146.222412,659.827209 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1058.198730,601.189819 
	C1058.595093,601.120789 1059.130005,601.311218 1059.812500,601.756531 
	C1059.419189,601.824036 1058.878296,601.636658 1058.198730,601.189819 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1050.130615,591.092590 
	C1050.314087,591.058289 1050.579468,591.278503 1050.943970,591.740112 
	C1050.766235,591.770081 1050.489258,591.558594 1050.130615,591.092590 
z`}),f("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FDCE98",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FDCE98",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M983.016724,494.594055 
	C980.445923,491.704132 977.666565,488.570679 975.252991,485.177094 
	C973.871399,483.234467 973.084656,480.868774 972.048340,478.316376 
	C975.698303,483.373260 979.329895,488.807373 983.016724,494.594055 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M988.089172,502.543640 
	C982.369629,503.356323 984.574707,498.222321 983.043945,495.329346 
	C984.734924,497.345764 986.412598,499.762512 988.089172,502.543640 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M964.031494,465.584229 
	C960.418030,464.901337 958.021423,462.816650 958.050903,458.328857 
	C960.044617,460.376434 962.014038,462.810516 964.031494,465.584229 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M968.039673,471.663574 
	C966.737366,470.235138 965.385559,468.464386 964.053894,466.317841 
	C965.379395,467.735107 966.684753,469.528168 968.039673,471.663574 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M972.030762,477.591919 
	C970.734680,476.458466 969.391296,474.983795 968.085327,473.113831 
	C969.409729,474.229309 970.696594,475.740021 972.030762,477.591919 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1149.953857,609.685547 
	C1149.098267,610.872803 1148.140991,611.858337 1147.183716,612.843811 
	C1146.245605,611.783508 1145.270630,610.753113 1144.378662,609.655396 
	C1143.289795,608.315247 1142.213989,606.957214 1141.240723,605.533081 
	C1140.561035,604.538635 1140.062866,603.420227 1139.483521,602.357239 
	C1140.792358,602.204651 1142.101074,602.052063 1143.767578,601.879700 
	C1144.125122,601.859924 1144.102417,601.903198 1144.069336,602.295715 
	C1145.736450,604.775269 1147.436646,606.862305 1149.136841,608.949341 
	C1149.434326,609.048401 1149.672852,609.226501 1149.953857,609.685547 
z`}),f("path",{fill:"#FDD09B",opacity:"1.000000",stroke:"none",d:`
M1149.071899,608.605530 
	C1147.436646,606.862305 1145.736450,604.775269 1144.059082,602.317749 
	C1145.723511,604.052124 1147.365234,606.156921 1149.071899,608.605530 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M580.867798,124.275558 
	C562.730164,124.620827 544.531494,124.702240 526.332764,124.785721 
	C507.109558,124.873894 487.886383,124.964043 468.490662,124.768829 
	C472.784088,123.905067 477.245087,123.281433 481.719543,122.777412 
	C482.853485,122.649681 484.032959,122.998482 485.187012,122.966423 
	C495.673798,122.675064 506.157990,122.245544 516.646423,122.089195 
	C520.091614,122.037849 523.550110,122.968269 526.997070,122.931953 
	C540.087280,122.794022 553.175537,122.255554 566.263977,122.271545 
	C571.112244,122.277466 575.959106,123.399551 580.867798,124.275558 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M897.878296,123.839111 
	C882.937988,124.288109 867.776917,124.429214 852.265503,124.348221 
	C855.798828,123.760170 859.680481,123.370331 863.566711,123.033272 
	C871.523560,122.343155 879.475037,121.354912 887.445007,121.161911 
	C890.828125,121.079994 894.252136,122.690109 897.878296,123.839111 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M402.915527,399.074280 
	C403.251862,404.873962 403.210083,410.921021 403.292755,416.966370 
	C403.325623,419.369232 403.769653,421.767242 403.788574,424.169342 
	C403.826355,428.968140 403.699951,433.768219 403.426147,438.832489 
	C402.473969,437.872040 401.120453,436.658081 401.097870,435.419922 
	C400.921692,425.759766 400.899719,416.093170 401.074493,406.432953 
	C401.117523,404.053925 402.058899,401.691193 402.915527,399.074280 
M402.476257,410.487640 
	C402.476257,410.487640 402.530426,410.510742 402.476257,410.487640 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M630.753662,123.730347 
	C622.181091,124.311584 613.346375,124.634048 604.509216,124.857979 
	C602.218201,124.916023 599.919373,124.665649 597.287231,124.316307 
	C599.598938,123.462044 602.255798,122.296799 604.894714,122.336349 
	C613.430298,122.464264 621.959167,123.034821 630.753662,123.730347 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M967.854736,123.720894 
	C959.567322,124.205063 951.106995,124.360596 942.302612,124.291130 
	C946.969666,123.552422 951.971680,122.797485 956.995117,122.606972 
	C960.542297,122.472458 964.118530,123.103172 967.854736,123.720894 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M932.921509,123.623871 
	C927.837097,124.172592 922.671204,124.337082 917.231873,124.285461 
	C921.989624,118.764771 927.447266,121.623032 932.921509,123.623871 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M451.755127,123.745461 
	C444.246887,124.207779 436.453522,124.355171 428.305603,124.286270 
	C431.992371,123.708939 436.028198,123.158630 440.076508,123.041931 
	C443.867432,122.932648 447.671631,123.282661 451.755127,123.745461 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M914.761597,123.755020 
	C910.250732,124.208351 905.455627,124.348122 900.323242,124.254669 
	C904.816406,123.828110 909.646912,123.634789 914.761597,123.755020 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M589.937012,124.251968 
	C589.218018,124.639038 588.491577,124.703209 587.410706,124.666840 
	C587.433472,123.782059 587.810547,122.997826 588.187622,122.213608 
	C588.768311,122.785431 589.348938,123.357254 589.937012,124.251968 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M937.817017,123.754684 
	C937.124573,124.187660 936.238037,124.357605 935.125000,124.342781 
	C935.806641,123.935890 936.714783,123.713776 937.817017,123.754684 
z`}),f("path",{fill:"#95A5B4",opacity:"1.000000",stroke:"none",d:`
M632.992371,123.656822 
	C633.022034,123.889549 632.524963,123.902702 632.279968,123.860481 
	C632.203735,123.432693 632.372498,123.047119 632.541199,122.661545 
	C632.681702,122.915726 632.822205,123.169914 632.992371,123.656822 
z`}),f("path",{fill:"#FDCF9A",opacity:"1.000000",stroke:"none",d:`
M1146.996460,627.065063 
	C1148.133301,629.717407 1148.859619,632.328186 1149.761719,635.571167 
	C1146.004883,634.162964 1143.408447,633.189697 1140.471802,632.088989 
	C1141.427124,629.364502 1142.501465,626.572205 1146.996460,627.065063 
z`}),f("path",{fill:"#FECE98",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M917.643921,445.626648 
	C916.688354,445.379272 915.935608,444.857574 915.182861,444.335846 
	C916.664856,443.105957 918.146851,441.876068 919.628784,440.646210 
	C920.007202,441.079956 920.385620,441.513733 920.763977,441.947479 
	C919.791565,443.082428 918.819153,444.217377 917.643921,445.626648 
z`}),f("path",{fill:"#FECE98",opacity:"1.000000",stroke:"none",d:`
M965.213867,522.781006 
	C965.853943,521.721436 966.605286,521.021851 967.356628,520.322205 
	C967.839294,521.089172 968.321899,521.856201 968.804504,522.623169 
	C967.644714,522.795776 966.484924,522.968384 965.213867,522.781006 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M910.355957,446.134338 
	C911.307434,446.530731 911.929688,447.000000 912.551941,447.469299 
	C911.939209,447.861145 911.326477,448.252991 910.713745,448.644836 
	C910.484680,447.832306 910.255676,447.019745 910.355957,446.134338 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M935.923340,462.168640 
	C936.785461,462.736969 937.327332,463.254089 937.869263,463.771210 
	C937.384277,463.995911 936.899292,464.220612 936.414307,464.445312 
	C936.143921,463.669373 935.873535,462.893433 935.923340,462.168640 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M909.991699,435.630188 
	C909.076416,435.590576 908.152893,435.181152 907.229309,434.771729 
	C907.503296,434.271271 907.777222,433.770813 908.051147,433.270325 
	C908.695251,433.933655 909.339355,434.597015 909.991699,435.630188 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M961.428101,537.585938 
	C961.248474,538.491699 960.825195,539.148743 960.401978,539.805786 
	C959.998779,539.395325 959.595703,538.984863 959.192566,538.574402 
	C959.856567,538.162048 960.520508,537.749634 961.428101,537.585938 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M932.999512,452.600067 
	C932.334656,451.934235 931.992981,451.219574 931.651245,450.504944 
	C932.090637,450.421326 932.530090,450.337677 932.969482,450.254059 
	C933.087219,451.019775 933.204956,451.785522 932.999512,452.600067 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M931.620605,455.491882 
	C932.017883,456.287537 932.119568,456.948303 932.221313,457.609070 
	C931.650330,457.539825 931.079346,457.470551 930.508423,457.401306 
	C930.780640,456.719879 931.052856,456.038452 931.620605,455.491882 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M928.797852,447.808777 
	C928.235962,448.054138 927.735474,448.000397 927.234985,447.946655 
	C927.348816,447.497437 927.462646,447.048187 927.576477,446.598877 
	C928.004089,446.902496 928.431641,447.206085 928.797852,447.808777 
z`}),f("path",{fill:"#FED09C",opacity:"1.000000",stroke:"none",d:`
M928.667786,437.049988 
	C928.841797,437.854401 928.683533,438.708771 928.525269,439.563141 
	C928.161133,439.436005 927.796936,439.308899 927.432800,439.181763 
	C927.733704,438.487823 928.034607,437.793884 928.667786,437.049988 
z`}),f("path",{fill:"#FECE98",opacity:"1.000000",stroke:"none",d:`
M1012.250244,712.127441 
	C1011.399109,712.868042 1010.778198,713.314819 1009.504028,714.231689 
	C1009.504028,711.839478 1009.504028,710.124390 1009.504028,708.409302 
	C1010.024597,708.223816 1010.545227,708.038391 1011.065796,707.852905 
	C1011.537354,709.179810 1012.008911,710.506653 1012.250244,712.127441 
z`}),f("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M861.502197,512.447876 
	C861.491272,512.475403 861.513123,512.420410 861.502197,512.447876 
z`}),f("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M832.459595,123.559753 
	C832.447937,123.580940 832.471313,123.538559 832.459595,123.559753 
z`}),f("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M402.551331,477.483795 
	C402.528748,477.479767 402.573914,477.487823 402.551331,477.483795 
z`}),f("path",{fill:"#A4B2BE",opacity:"1.000000",stroke:"none",d:`
M402.562531,504.468842 
	C402.598999,504.525665 402.526062,504.412018 402.562531,504.468842 
z`}),f("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
M402.503357,410.499207 
	C402.530426,410.510742 402.476257,410.487640 402.503357,410.499207 
z`}),f("foreignObject",{x:500,y:190,width:700,height:470,children:A("body",{xmlns:"http://www.w3.org/1999/xhtml",children:[f("h1",{style:{fontFamily:"sans-serif",margin:0,fontSize:"70px"},children:"Hi, I'm Bella."}),f("p",{style:{fontFamily:"sans-serif",margin:0,fontSize:"50px"},children:"Harvard graduate,"}),f("p",{style:{fontFamily:"sans-serif",margin:0,fontSize:"50px"},children:"professional yapper."})]})})]});function zS(){return A("header",{className:"hidden md:flex w-full justify-between items-center px-12 py-10 text-2xl",children:[f("a",{href:"/",className:"font-bold",children:"HOME"}),A("nav",{className:"flex gap-12",children:[f("a",{href:"/faq",className:"hover:font-bold",children:"FAQ"}),f("a",{href:"/contact",className:"hover:font-bold",children:"CONTACT"})]})]})}function jS(){return A("div",{className:"min-h-screen flex flex-col flex-grow bg-cover bg-no-repeat bg-center",children:[f(zS,{}),f("div",{className:"flex-1",children:f(BS,{})}),f("footer",{className:"fixed bottom-0 left-0 w-full text-center py-3 mt-30 bg-red-600 text-white text-sm z-50",children:"This website is in development as of April 2025."})]})}const $S=({onSend:t})=>A("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"65%",viewBox:"0 0 1536 1024","enable-background":"new 0 0 1536 1024","xml:space":"preserve",children:[f("path",{fill:"#FFFFFF",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#EB6549",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#EB6549",opacity:"1.000000",stroke:"none",d:`
M1498.143799,839.184082 
	C1498.341675,840.460938 1498.711914,841.737732 1498.712769,843.014771 
	C1498.742920,884.939148 1498.737793,926.863464 1498.737793,968.787842 
	C1498.737793,969.930847 1498.737793,971.073914 1498.737793,972.970703 
	C1457.581665,972.970703 1416.746338,972.970703 1375.588623,972.609741 
	C1391.914917,954.133484 1408.563843,936.018250 1425.588135,917.790100 
	C1432.156616,917.677185 1438.349976,917.677185 1445.272949,917.677185 
	C1445.272949,909.881592 1445.272949,903.007446 1445.537476,895.942566 
	C1463.249268,876.895996 1480.696411,858.040039 1498.143799,839.184082 
z`}),f("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
M39.870956,801.752197 
	C39.685966,800.468079 39.340134,799.184021 39.339287,797.899780 
	C39.311111,755.289673 39.310726,712.679504 39.337811,670.069397 
	C39.338749,668.598450 39.662846,667.127686 40.266525,665.118530 
	C58.041271,645.817017 75.385803,627.053772 92.800400,608.725342 
	C92.889816,639.426208 92.933662,669.692200 92.918159,699.958191 
	C92.910492,714.920776 92.793419,729.883423 92.463608,745.041260 
	C74.757889,764.075073 57.314426,782.913635 39.870956,801.752197 
z`}),f("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
M1498.146973,593.370361 
	C1498.344849,594.818359 1498.714478,596.266296 1498.715576,597.714478 
	C1498.746460,640.026917 1498.746582,682.339417 1498.717529,724.651855 
	C1498.716431,726.291748 1498.377808,727.931335 1497.774902,730.121094 
	C1479.993652,749.415955 1462.633911,768.160767 1445.199829,786.451416 
	C1445.106934,754.698853 1445.065430,723.400635 1445.080444,692.102356 
	C1445.087158,678.288635 1445.208496,664.474915 1445.505615,650.468018 
	C1463.204590,631.306702 1480.675781,612.338501 1498.146973,593.370361 
z`}),f("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
M1498.124756,87.018608 
	C1498.330078,88.464485 1498.713379,89.910194 1498.714478,91.356201 
	C1498.746460,133.684906 1498.746704,176.013626 1498.716553,218.342346 
	C1498.715332,219.975815 1498.363403,221.609009 1497.733154,223.776886 
	C1495.138062,226.622879 1492.984009,228.933716 1490.831421,231.245911 
	C1475.646606,247.556946 1460.462158,263.868408 1445.198608,279.700500 
	C1445.103027,248.614853 1445.063110,218.008423 1445.080444,187.402008 
	C1445.088623,172.934875 1445.206543,158.467819 1445.533936,143.812958 
	C1463.237061,124.756317 1480.680908,105.887451 1498.124756,87.018608 
z`}),f("path",{fill:"#EB664A",opacity:"1.000000",stroke:"none",d:`
M1498.126831,340.052704 
	C1498.331299,341.497681 1498.713379,342.942535 1498.714478,344.387634 
	C1498.746338,386.706238 1498.746704,429.024902 1498.716553,471.343506 
	C1498.715332,472.976562 1498.363281,474.609344 1497.733154,476.776855 
	C1495.145752,479.629089 1493.006226,481.952454 1490.853516,484.263489 
	C1475.662964,500.570251 1460.469727,516.874573 1445.198486,532.700439 
	C1445.103027,501.951813 1445.062622,471.682343 1445.080322,441.412842 
	C1445.088989,426.615051 1445.205933,411.817352 1445.535645,396.833374 
	C1463.240479,377.782349 1480.683594,358.917511 1498.126831,340.052704 
z`}),f("path",{fill:"#EB6549",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M1273.983521,972.833984 
	C1241.607544,972.889282 1209.231689,972.950684 1176.855713,972.996216 
	C1167.557251,973.009338 1158.258667,972.976624 1148.639526,972.608765 
	C1164.953735,954.139282 1181.588745,936.025879 1198.668945,917.851135 
	C1219.708130,917.767578 1240.302002,917.711060 1260.895996,917.732666 
	C1281.984863,917.754822 1303.073730,917.853577 1323.999878,918.221680 
	C1307.219360,936.627625 1290.601440,954.730835 1273.983521,972.833984 
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M837.913879,53.166496 
	C869.957581,53.110939 902.001221,53.048553 934.044922,53.003979 
	C943.675354,52.990585 953.305969,53.026779 963.252991,53.386276 
	C946.920349,71.850632 930.271240,89.968971 913.191101,108.148628 
	C890.168396,108.232292 867.576538,108.287918 844.984863,108.266754 
	C825.885254,108.248856 806.785706,108.141998 787.860962,107.770409 
	C804.661743,89.366364 821.287842,71.266434 837.913879,53.166496 
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M805.983582,972.833984 
	C773.605164,972.889282 741.226746,972.950623 708.848328,972.996216 
	C699.549133,973.009338 690.249878,972.977234 680.629761,972.608765 
	C696.946472,954.138611 713.584045,936.025574 730.666992,917.851257 
	C751.706665,917.767700 772.301147,917.711060 792.895447,917.732666 
	C813.984802,917.754761 835.074036,917.853577 856.000488,918.221558 
	C839.219666,936.627563 822.601624,954.730774 805.983582,972.833984 
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M348.243408,972.832397 
	C316.866241,972.888245 285.489105,972.951843 254.111954,972.995605 
	C243.818069,973.009949 233.524139,972.972595 222.911011,972.621155 
	C228.701324,965.700012 234.841675,959.144836 240.913559,952.526794 
	C251.479584,941.010254 262.003326,929.454956 272.959412,917.856445 
	C297.955505,917.772400 322.537018,917.715698 347.118439,917.734009 
	C364.221924,917.746765 381.325317,917.862427 398.239532,918.232605 
	C394.920349,921.970398 391.802521,925.418762 388.658386,928.842957 
	C375.190948,943.510010 361.715759,958.169861 348.243408,972.832397 
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M1071.398193,53.155235 
	C1113.046753,53.113602 1154.695312,53.071972 1196.661621,53.399879 
	C1190.364746,60.982296 1183.744629,68.190140 1177.136597,75.409248 
	C1167.172119,86.295441 1157.216064,97.189529 1146.859863,108.142960 
	C1119.548218,108.229424 1092.632812,108.281998 1065.717529,108.265526 
	C1050.934692,108.256477 1036.151855,108.131096 1021.573242,107.758591 
	C1028.506714,100.134491 1035.254150,92.826294 1041.961304,85.481506 
	C1051.788696,74.719856 1061.587280,63.931973 1071.398193,53.155235 
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M605.149719,53.164337 
	C638.476440,53.109497 671.803223,53.050064 705.129944,53.003052 
	C713.462280,52.991299 721.794617,53.019512 730.456665,53.397125 
	C727.080444,57.805660 723.376770,61.848526 719.668152,65.886826 
	C706.748657,79.954559 693.827515,94.020737 680.450562,108.149750 
	C660.404175,108.233650 640.814026,108.289703 621.224060,108.267838 
	C599.146790,108.243202 577.069702,108.148399 555.145142,107.784470 
	C571.915100,89.378006 588.532410,71.271172 605.149719,53.164337 
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M1039.891357,972.834229 
	C1007.516846,972.889465 975.142273,972.950378 942.767761,972.996460 
	C933.469666,973.009705 924.171631,972.980347 914.546082,972.604065 
	C916.666016,969.523193 919.089844,966.787170 921.564575,964.097900 
	C935.736938,948.696899 949.921448,933.307007 964.557434,917.851318 
	C985.268921,917.767212 1005.524841,917.710938 1025.780640,917.732544 
	C1047.195557,917.755432 1068.610596,917.852478 1089.867432,918.214600 
	C1084.859497,923.753784 1079.987183,928.974670 1075.164429,934.241150 
	C1063.394531,947.094299 1051.647583,959.968506 1039.891357,972.834229 
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M368.148041,53.164352 
	C401.182648,53.109520 434.217255,53.049778 467.251862,53.003162 
	C475.884674,52.990978 484.517517,53.019615 493.478516,53.397339 
	C491.361847,56.480831 488.941772,59.219254 486.468109,61.908409 
	C472.303375,77.307289 458.125854,92.694473 443.492493,108.147797 
	C423.109436,108.232292 403.186554,108.289154 383.263702,108.267647 
	C361.517578,108.244164 339.771545,108.148117 318.183289,107.789062 
	C325.127869,100.197945 331.962616,92.945366 338.690033,85.594589 
	C348.549683,74.821388 358.332489,63.977886 368.148041,53.164352 
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M575.851929,972.835693 
	C542.817383,972.890442 509.782806,972.950073 476.748230,972.996704 
	C468.115448,973.008911 459.482574,972.980408 450.521667,972.602661 
	C452.637970,969.519531 455.057709,966.781555 457.530914,964.092834 
	C471.696167,948.693604 485.874054,933.305908 500.507812,917.852173 
	C520.890808,917.767700 540.813660,917.710999 560.736450,917.732483 
	C582.482544,917.755981 604.228455,917.851929 625.816650,918.210938 
	C619.093811,925.554138 612.477234,932.555603 605.975464,939.662170 
	C595.893188,950.682434 585.889160,961.774231 575.851929,972.835693 
z`}),f("path",{fill:"#EB6448",opacity:"1.000000",stroke:"none",d:`
M1298.905518,53.166557 
	C1330.951172,53.110989 1362.996826,53.048584 1395.042480,53.003990 
	C1404.673584,52.990585 1414.304688,53.026764 1424.252075,53.386066 
	C1407.917358,71.850449 1391.266235,89.968994 1374.184814,108.148827 
	C1351.161377,108.232399 1328.568359,108.287964 1305.975220,108.266716 
	C1286.874512,108.248749 1267.773804,108.141792 1248.852539,107.772614 
	C1252.169678,104.038162 1255.299805,100.598160 1258.446899,97.173759 
	C1271.930420,82.502190 1285.418823,67.835197 1298.905518,53.166557 
z`}),f("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M39.906380,545.877197 
	C54.398533,529.580994 68.919456,513.812012 83.438705,498.041473 
	C86.365540,494.862396 89.286041,491.677521 92.535538,488.763977 
	C92.880577,502.838959 92.932014,516.645325 92.911545,530.451599 
	C92.873077,556.397888 92.793068,582.344238 92.730339,608.290527 
	C75.385803,627.053772 58.041271,645.817017 40.408951,664.718689 
	C40.066551,630.704285 40.011818,596.551453 39.957447,562.398621 
	C39.948959,557.067017 39.942139,551.735474 39.906380,545.877197 
z`}),f("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M1445.277466,533.179688 
	C1460.469727,516.874573 1475.662964,500.570251 1490.853516,484.263489 
	C1493.006226,481.952454 1495.145752,479.629089 1497.583740,477.168030 
	C1497.932983,509.812653 1497.990112,542.600708 1498.046021,575.388794 
	C1498.055786,581.048157 1498.060425,586.707581 1498.107178,592.868652 
	C1480.675781,612.338501 1463.204590,631.306702 1445.436401,650.036377 
	C1445.118896,633.516479 1445.063110,617.234985 1445.086548,600.953613 
	C1445.119141,578.362244 1445.210938,555.770996 1445.277466,533.179688 
z`}),f("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M1498.107910,339.578308 
	C1480.683594,358.917511 1463.240479,377.782349 1445.460327,396.367340 
	C1445.108276,380.431763 1445.060791,364.776001 1445.085815,349.120331 
	C1445.122437,326.140076 1445.211060,303.159882 1445.277588,280.179688 
	C1460.462158,263.868408 1475.646606,247.556946 1490.831421,231.245911 
	C1492.984009,228.933716 1495.138062,226.622879 1497.583740,224.168030 
	C1497.932983,256.405914 1497.989258,288.787201 1498.046997,321.168488 
	C1498.057739,327.146973 1498.074707,333.125458 1498.107910,339.578308 
z`}),f("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M92.721069,860.094604 
	C75.364273,878.838928 58.007488,897.583252 40.386940,916.467407 
	C40.067890,883.478149 40.012756,850.348999 39.957157,817.219849 
	C39.949051,812.391602 39.938702,807.563354 39.900177,802.243652 
	C57.314426,782.913635 74.757889,764.075073 92.538406,745.520203 
	C92.889816,759.447021 92.935089,773.090149 92.911766,786.733215 
	C92.869957,811.187012 92.786888,835.640808 92.721069,860.094604 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M443.952667,108.085617 
	C458.125854,92.694473 472.303375,77.307289 486.468109,61.908409 
	C488.941772,59.219254 491.361847,56.480831 493.948334,53.466110 
	C530.791199,53.121525 567.492310,53.076004 604.671631,53.097412 
	C588.532410,71.271172 571.915100,89.378006 554.682434,107.852142 
	C538.619812,108.245804 523.172424,108.312172 507.725159,108.288788 
	C486.467621,108.256615 465.210175,108.156578 443.952667,108.085617 
z`}),f("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M92.720383,351.974945 
	C75.743118,370.249023 58.766129,388.523376 41.786552,406.795288 
	C41.447266,407.160400 41.077343,407.497040 40.425568,408.005493 
	C40.072041,375.850403 40.014767,343.536774 39.957222,311.223175 
	C39.948620,306.392365 39.938744,301.561554 39.900558,296.238892 
	C57.313400,276.914673 74.755142,258.082336 92.536194,239.535278 
	C92.889839,252.283478 92.934425,264.746429 92.912155,277.209259 
	C92.867607,302.131195 92.786430,327.053040 92.720383,351.974945 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M1040.365234,972.901978 
	C1051.647583,959.968506 1063.394531,947.094299 1075.164429,934.241150 
	C1079.987183,928.974670 1084.859497,923.753784 1090.328613,918.148071 
	C1103.589355,917.756470 1116.230713,917.688721 1128.871948,917.710327 
	C1151.989136,917.749878 1175.106445,917.842163 1198.223633,917.912476 
	C1181.588745,936.025879 1164.953735,954.139282 1148.177246,972.543091 
	C1112.303467,972.878845 1076.571289,972.924255 1040.365234,972.901978 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M964.101807,917.913330 
	C949.921448,933.307007 935.736938,948.696899 921.564575,964.097900 
	C919.089844,966.787170 916.666016,969.523193 914.078003,972.535522 
	C878.263733,972.878418 842.590210,972.923401 806.450073,972.901123 
	C822.601624,954.730774 839.219666,936.627563 856.449829,918.155273 
	C870.007446,917.758057 882.952942,917.688721 895.898254,917.710510 
	C918.632874,917.748779 941.367310,917.842712 964.101807,917.913330 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M1070.898193,53.092964 
	C1061.587280,63.931973 1051.788696,74.719856 1041.961304,85.481506 
	C1035.254150,92.826294 1028.506714,100.134491 1021.169189,107.831177 
	C1008.233826,108.235054 995.906616,108.309662 983.579468,108.289299 
	C960.260254,108.250771 936.941223,108.157707 913.622070,108.087311 
	C930.271240,89.968971 946.920349,71.850632 963.708191,53.448784 
	C999.364014,53.120415 1034.881104,53.075550 1070.898193,53.092964 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M272.544800,917.915894 
	C262.003326,929.454956 251.479584,941.010254 240.913559,952.526794 
	C234.841675,959.144836 228.701324,965.700012 222.467636,972.560730 
	C186.818237,972.881897 151.292984,972.925720 115.284912,972.903564 
	C124.851845,961.780151 134.874481,950.697998 144.961105,939.674316 
	C151.465271,932.565979 158.063370,925.543518 165.253540,918.128235 
	C178.847275,917.749817 191.806931,917.686951 204.766403,917.710205 
	C227.359253,917.750854 249.952011,917.844482 272.544800,917.915894 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M680.906982,108.087502 
	C693.827515,94.020737 706.748657,79.954559 719.668152,65.886826 
	C723.376770,61.848526 727.080444,57.805660 730.924805,53.465813 
	C766.374573,53.123405 801.685852,53.080086 837.455566,53.101631 
	C821.287842,71.266434 804.661743,89.366364 787.425171,107.838997 
	C775.157288,108.240631 763.499939,108.310440 751.842651,108.289932 
	C728.197388,108.248322 704.552185,108.157837 680.906982,108.087502 
z`}),f("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M1374.615112,108.087524 
	C1391.266235,89.968994 1407.917358,71.850449 1424.707275,53.448460 
	C1449.047729,53.165012 1473.249390,53.165012 1498.090332,53.165012 
	C1498.090332,64.281425 1498.090332,75.177948 1498.107544,86.546524 
	C1480.680908,105.887451 1463.237061,124.756317 1445.459717,143.348480 
	C1445.126221,131.642365 1445.126221,120.212952 1445.126221,108.299049 
	C1442.482788,108.299049 1440.520508,108.304550 1438.558105,108.298187 
	C1417.243774,108.229027 1395.929443,108.158020 1374.615112,108.087524 
z`}),f("path",{fill:"#4881A5",opacity:"1.000000",stroke:"none",d:`
M1445.274292,786.905640 
	C1462.633911,768.160767 1479.993652,749.415955 1497.618164,730.533081 
	C1497.937622,762.507385 1497.991699,794.619690 1498.046997,826.731934 
	C1498.053589,830.559021 1498.067383,834.386169 1498.110840,838.698669 
	C1480.696411,858.040039 1463.249268,876.895996 1445.461670,895.465942 
	C1445.106934,886.197754 1445.065796,877.215515 1445.082886,868.233398 
	C1445.134521,841.124146 1445.208862,814.014893 1445.274292,786.905640 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M367.670776,53.097324 
	C358.332489,63.977886 348.549683,74.821388 338.690033,85.594589 
	C331.962616,92.945366 325.127869,100.197945 317.717773,107.856064 
	C282.574768,108.183022 248.055054,108.148331 213.535339,108.113647 
	C230.197754,89.984505 246.860168,71.855370 263.657867,53.444756 
	C298.259949,53.118954 332.726746,53.074631 367.670776,53.097324 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M576.329224,972.902710 
	C585.889160,961.774231 595.893188,950.682434 605.975464,939.662170 
	C612.477234,932.555603 619.093811,925.554138 626.282227,918.143921 
	C636.722107,917.755371 646.538818,917.690002 656.355347,917.708923 
	C680.977478,917.756470 705.599548,917.842163 730.221680,917.912537 
	C713.584045,936.025574 696.946472,954.138611 680.166931,972.542419 
	C645.618835,972.878723 611.212646,972.924255 576.329224,972.902710 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M500.047668,917.914368 
	C485.874054,933.305908 471.696167,948.693604 457.530914,964.092834 
	C455.057709,966.781555 452.637970,969.519531 450.051880,972.533875 
	C416.317474,972.874573 382.724792,972.916199 348.687744,972.895142 
	C361.715759,958.169861 375.190948,943.510010 388.658386,928.842957 
	C391.802521,925.418762 394.920349,921.970398 398.664093,918.164612 
	C408.091492,917.764526 416.905151,917.691895 425.718628,917.709229 
	C450.495026,917.757751 475.271332,917.843384 500.047668,917.914368 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M1298.447754,53.101948 
	C1285.418823,67.835197 1271.930420,82.502190 1258.446899,97.173759 
	C1255.299805,100.598160 1252.169678,104.038162 1248.418091,107.841530 
	C1238.346313,108.240906 1228.888184,108.310005 1219.430298,108.290710 
	C1195.372314,108.241631 1171.314331,108.153015 1147.256348,108.080238 
	C1157.216064,97.189529 1167.172119,86.295441 1177.136597,75.409248 
	C1183.744629,68.190140 1190.364746,60.982296 1197.145508,53.468807 
	C1230.870972,53.124577 1264.430420,53.080959 1298.447754,53.101948 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M1274.449951,972.901123 
	C1290.601440,954.730835 1307.219360,936.627625 1324.449341,918.155518 
	C1358.445312,917.825378 1391.828979,917.864258 1425.212769,917.903076 
	C1408.563843,936.018250 1391.914917,954.133484 1375.123047,972.542114 
	C1341.625488,972.879700 1308.270874,972.923950 1274.449951,972.901123 
z`}),f("path",{fill:"#4781A5",opacity:"1.000000",stroke:"none",d:`
M137.414673,53.102413 
	C122.108643,70.333664 106.375511,87.527382 90.578964,104.662636 
	C73.983887,122.664093 57.328083,140.609573 40.411430,158.718521 
	C40.124046,123.779625 40.124046,88.701729 40.124046,53.039169 
	C72.526711,53.039169 104.743195,53.039169 137.414673,53.102413 
z`}),f("path",{fill:"#FEF2DB",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#EEC79C",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#D1B493",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#CFB18F",opacity:"1.000000",stroke:"none",d:`
M1255.000000,569.000000 
	C1169.669434,569.000000 1084.838745,569.016052 1000.008301,568.917725 
	C997.617859,568.914917 993.741394,570.806824 993.447510,566.278076 
	C993.407532,565.661743 997.669006,564.097595 999.939758,564.095703 
	C1128.268921,563.988220 1256.598022,563.989807 1384.927246,564.076965 
	C1387.346313,564.078613 1391.180786,562.285278 1391.519287,566.749268 
	C1391.563477,567.331238 1387.278564,568.896118 1384.995605,568.903076 
	C1341.830688,569.034546 1298.665283,569.000000 1255.000000,569.000000 
z`}),f("path",{fill:"#CFB18F",opacity:"1.000000",stroke:"none",d:`
M1378.973389,708.937683 
	C1382.633179,708.946289 1385.814209,708.784607 1388.955566,709.065125 
	C1389.924194,709.151611 1390.785156,710.444092 1391.695435,711.184326 
	C1390.828613,711.797302 1390.036621,712.708740 1389.076416,712.949219 
	C1387.819458,713.264221 1386.429810,713.060547 1385.097168,713.060547 
	C1256.464233,713.062317 1127.831299,713.072571 999.198486,712.967896 
	C997.171631,712.966248 993.735229,714.852783 993.387695,710.786438 
	C993.349182,710.335693 997.090088,709.017151 999.078857,709.015747 
	C1125.545654,708.929321 1252.012451,708.937744 1378.973389,708.937683 
z`}),f("path",{fill:"#CFB18F",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FDF1D7",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#95B6C0",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#3B7AA2",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#4182A9",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#FDF0D5",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#E99F14",opacity:"1.000000",stroke:"none",d:`
M1303.906494,265.960815 
	C1299.526123,256.428955 1295.250854,246.966110 1291.869507,237.193924 
	C1289.636108,230.738892 1285.822510,226.794403 1278.966797,225.072052 
	C1281.427734,214.190811 1290.378418,207.103333 1302.524536,205.984390 
	C1323.889893,204.016159 1338.909546,219.657867 1335.917969,240.761261 
	C1333.919434,254.859909 1320.359375,265.671844 1303.906494,265.960815 
z`}),f("path",{fill:"#3B7AA2",opacity:"1.000000",stroke:"none",d:`
M1144.716431,345.131165 
	C1142.877441,347.612152 1140.748413,350.259247 1138.264648,352.903503 
	C1140.082031,350.366180 1142.254272,347.831726 1144.716431,345.131165 
z`}),f("path",{fill:"#E5A019",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#E7A019",opacity:"1.000000",stroke:"none",d:`
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
z`}),f("path",{fill:"#4280A6",opacity:"1.000000",stroke:"none",d:`
M1345.393066,390.866455 
	C1344.939453,395.358673 1344.812988,399.501282 1343.879761,403.453339 
	C1343.074585,406.862793 1340.722534,409.121704 1336.754517,409.229767 
	C1332.479736,409.346161 1329.746704,406.844971 1329.323608,403.295471 
	C1328.590942,397.148407 1328.485107,390.827759 1329.048096,384.665070 
	C1329.348755,381.375458 1331.981812,378.905884 1336.028198,378.824158 
	C1340.061401,378.742706 1342.752441,380.477112 1344.058472,384.147400 
	C1344.769531,386.145508 1344.949951,388.332397 1345.393066,390.866455 
z`}),f("foreignObject",{x:"150",y:"170",width:"700",height:"500",children:f("body",{xmlns:"http://www.w3.org/1999/xhtml",children:f("h1",{className:"text-2xl md:text-3xl font-semibold leading-tight tracking-tight mb-6",style:{fontFamily:"sans-serif",fontSize:"80px",marginTop:20},children:"Dear Bella,"})})}),f("foreignObject",{x:"190",y:"270",width:"690",height:"800",children:f("body",{xmlns:"http://www.w3.org/1999/xhtml",children:A("div",{children:[A("p",{style:{fontFamily:"sans-serif",fontSize:"35px",margin:0,lineHeight:2},children:["My name is",f("input",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",type:"text",placeholder:"          name",id:"input-name",style:{width:"40%",height:"30px",fontSize:"35px",backgroundColor:"transparent",marginLeft:"3px",borderBottomWidth:"1px",borderBottomColor:"black",paddingBottom:"15px"}})," ","and I am a"," ",A("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",style:{width:"20%",fontSize:"35px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},id:"input-type",children:[f("option",{children:"student"}),f("option",{children:"parent"}),f("option",{children:"other"})]}),". I am inquiring about tutoring for a",A("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-grade",style:{width:"25%",fontSize:"35px",marginLeft:"5px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[f("option",{children:"   grade"}),f("option",{children:"Grade K"}),f("option",{children:"Grade 1"}),f("option",{children:"Grade 2"}),f("option",{children:"Grade 3"}),f("option",{children:"Grade 4"}),f("option",{children:"Grade 5"}),f("option",{children:"Grade 6"}),f("option",{children:"Grade 7"}),f("option",{children:"Grade 8"}),f("option",{children:"Grade 9"}),f("option",{children:"Grade 10"}),f("option",{children:"Grade 11"}),f("option",{children:"Grade 12"}),f("option",{children:"university"}),f("option",{children:"community college"}),f("option",{children:"other"})]})," ","student in ",A("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-subject",style:{width:"45%",fontSize:"35px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[f("option",{children:"           subject"}),f("option",{children:"General: Science"}),f("option",{children:"AP Physics"}),f("option",{children:"AP Physics C"}),f("option",{children:"Honors Physics"}),f("option",{children:"Regents Physics"}),f("option",{children:"Physics I: Mechanics and Relativity"}),f("option",{children:"Physics II: Electromagnetism"}),f("option",{children:"Physics III: Waves"}),f("option",{children:"Quantum Mechanics I"}),f("option",{children:"Quantum Mechanics II"}),f("option",{children:"General: Math"}),f("option",{children:"Pre-Algebra"}),f("option",{children:"Alegbra I"}),f("option",{children:"Geometry"}),f("option",{children:"Algebra II"}),f("option",{children:"Precalculus"}),f("option",{children:"Calculus I/AP Calculus AB"}),f("option",{children:"Calculus II/AP Calculus BC"}),f("option",{children:"Calculus III/Multi-Variable Calculus"}),f("option",{children:"Linear Algebra I"}),f("option",{children:"General: Exams"}),f("option",{children:"ACT"}),f("option",{children:"SAT"}),f("option",{children:"SSAT Upper"}),f("option",{children:"SSAT Middle"}),f("option",{children:"SSAT Lower"}),f("option",{children:"ISEE Upper"}),f("option",{children:"ISEE Middle"}),f("option",{children:"ISEE Lower"}),f("option",{children:"AMC 8"}),f("option",{children:"AMC 10"}),f("option",{children:"AMC 12"}),f("option",{children:"SASMO 2-4"}),f("option",{children:"SASMO 4-6"}),f("option",{children:"SASMO 6-8"}),f("option",{children:"General: Applications"}),f("option",{children:"Middle School Application"}),f("option",{children:"High School Application"}),f("option",{children:"College Application"}),f("option",{children:"General: English"}),f("option",{children:"English Language Arts"}),f("option",{children:"English as a Second Language"}),f("option",{children:"Essay Editing"})]}),". My primary goal is to ",A("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-goal",style:{width:"20%",fontSize:"35px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[f("option",{children:"  goal"}),f("option",{children:"build confidence"}),f("option",{children:"improve grades"}),f("option",{children:"prepare for an exam"}),f("option",{children:"get ahead of my class"}),f("option",{children:"fill in gaps"}),f("option",{children:"receive support during year"}),f("option",{children:"work on a project"}),f("option",{children:"develop better habits"})]})," and I am hoping to meet",A("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-times",style:{width:"10%",fontSize:"35px",marginLeft:"5px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[f("option",{children:"1x"}),f("option",{children:"2x"}),f("option",{children:"3x"}),f("option",{children:"4x"}),f("option",{children:"5x"})]})," ","each week. I am available for a consultation call on",A("select",{className:"focus:outline-none focus:ring-0 active:outline-none active:ring-0",id:"input-timeslot",style:{width:"65%",fontSize:"35px",backgroundColor:"transparent",borderBottomWidth:"1px",borderBottomColor:"black"},children:[f("option",{children:"         dates and times"}),f("option",{children:"Sundays 6pm-8pm Eastern"}),f("option",{children:"Mondays 6pm-8pm Eastern"}),f("option",{children:"Tuesdays 6pm-8pm Eastern"}),f("option",{children:"Wednesdays 6pm-8pm Eastern"}),f("option",{children:"Thursdays 6pm-8pm Eastern"})]}),". Looking forward to your response!"]}),f("br",{})]})})}),f("foreignObject",{x:"995",y:"480",width:"400",height:"100%",children:A("body",{xmlns:"http://www.w3.org/1999/xhtml",style:{margin:0,padding:0,fontFamily:"sans-serif"},children:[f("h4",{className:"text-xl md:text-2xl font-semibold leading-tight tracking-tight mb-6",style:{margin:0,padding:0,lineHeight:2.1,textAlign:"right",fontSize:50},children:"Bella Tarantino"}),f("p",{style:{margin:0,padding:0,lineHeight:2.1,textAlign:"right",fontSize:32},children:f("i",{children:"Akita Prefecture, Japan"})}),A("p",{style:{margin:0,padding:0,lineHeight:2.1,textAlign:"right",fontSize:30},children:[f("a",{href:"mailto:tutoring@bellatarantino.com?subject=Tutoring Inquiry",children:"tutoring@bellatarantino.com"}),f("br",{}),f("br",{}),f("button",{className:"border ml-4 border-black rounded-lg text-base font-medium text-black bg-transparent hover:shadow scale-[1.05] transition-all",onClick:t,style:{width:"80%",height:"60px",width:"300px",fontSize:"35px",backgroundColor:"transparent",marginRight:10},children:"SEND"})]})]})})]});function WS(){return A("header",{className:"hidden md:flex w-full justify-between items-center px-12 py-10 text-2xl",children:[f("a",{href:"/",className:"hover:font-bold",children:"HOME"}),A("nav",{className:"flex gap-12",children:[f("a",{href:"/faq",className:"hover:font-bold",children:"FAQ"}),f("a",{href:"/contact",className:"font-bold",children:"CONTACT"})]})]})}function HS(){const[t,e]=S.useState(0),[n,r]=S.useState(!0),i=S.useRef(!0);function s(){const o=document.getElementById("input-name").value.trim(),a=document.getElementById("input-grade").value.trim(),l=document.getElementById("input-subject").value.trim(),c=document.getElementById("input-times").value.trim(),u=document.getElementById("input-goal").value.trim(),d=document.getElementById("input-timeslot").value.trim(),h=document.getElementById("input-type").value.trim().toLowerCase();i.current=!1,r(!1),setTimeout(()=>{e(w=>w+1),r(!0)},600);const y={"build confidence":"build confidence in the subject","improve grades":"improve performance and grades in the subject","prepare for an exam":"prepare for an upcoming exam","get ahead of my class":"get ahead of what's being covered in class and pursue more advanced material","fill in gaps":"fill in foundational gaps in understanding from previous units and semesters","receive support during year":"receive consistent support throughout the year","work on a project":"get guidance on a specific project","develop better habits":"build stronger study habits and routines"}[u]||u,v={name:o,grade:a,subject:l,times:c,goal:y,availability:d},_=({name:w,grade:T,subject:x,times:I,goal:O,availability:M})=>`
Hi Bella,

My name is ${w}, and I’m currently in ${T}. I’m looking for tutoring in ${x} about ${I} per week. My main goal is to ${O}, and I’d love to get started soon if you have availability.

I’m generally free around ${M} for a quick phone call to discuss next steps. Looking forward to connecting!

Thanks,  
${w}
  `.trim(),g=({name:w,grade:T,subject:x,times:I,goal:O,availability:M})=>`
Hi Bella,

I’m reaching out on behalf of my child, who is in ${T}. We’re interested in tutoring for ${x}, about ${I} per week. Our main goal is to ${O}, and we’d love to find the right fit.

I’m typically available for a quick phone call around ${M}, either this or next week. Let me know if that works for you!

Best regards,  
${w}
  `.trim(),m=({name:w,grade:T,subject:x,times:I,goal:O,availability:M})=>`
Hi Bella,

I’m writing on behalf of a student in ${T} who is interested in tutoring for ${x}, approximately ${I} per week. The goal is to ${O}, and we’re hoping to find a time to connect and learn more about your approach.

I’m generally available around ${M} for a phone call sometime soon. Please let me know what works for you!

Sincerely,  
${w}
  `.trim();let C="";h==="student"?C=_(v):h==="parent"?C=g(v):C=m(v);const E=`mailto:tutoring@bellatarantino.com?subject=Tutoring Inquiry from ${o}&body=${encodeURIComponent(C)}`;setTimeout(()=>{window.location.href=E},1500)}return A("div",{className:"min-h-screen flex flex-col bg-cover bg-no-repeat bg-center",children:[f(WS,{}),f("div",{className:"flex-1",children:f(tw,{mode:"wait",children:n&&f(US.div,{initial:i.current?!1:{x:"-100vw"},animate:{x:0},exit:{x:[0,-80,1e3],transition:{times:[0,.5,1],duration:.6,ease:["easeOut","easeIn"]}},transition:{duration:.6},className:"w-full",onAnimationComplete:()=>{i.current=!1},children:f("main",{className:"flex justify-center items-center px-10 text-[1.05rem] min-h-full",children:f($S,{onSend:s})})},t)})}),f("footer",{className:"fixed bottom-0 left-0 w-full text-center py-3 bg-red-600 text-white text-sm z-50",children:"This website is in development as of April 2025."})]})}const GS=[{question:f(W,{children:A("p",{children:["What ",f(De,{children:"qualifications"})," do you have?"]})}),answer:f(W,{children:A("p",{children:["My academic and professional background combines scientific training, tech industry experience, and almost a decade of tutoring experience. I hold a B.A. in Physics from Harvard University, where I also completed a minor in Computer Science and a language citation in"," ","Mandarin. ",f("br",{}),f("br",{})," During my time at Harvard, I interned with Google as a STEP intern, focusing on web development, and conducted research on the New Small Wheel (NSW) at the"," ","ATLAS experiment at CERN. I also served as a"," ","strategy and analytics intern at the New York City Department of Small Business Services. ",f("br",{}),f("br",{})," In addition to these roles, I have accumulated"," ","nine years of experience as a tutor, working with students across a wide range of subjects and educational levels. Now, I am a tutor and full-time assistant language teacher in English at a senior high school in Akita, Japan. For more information about client satisfaction, check out testimonials on my homepage."]})})},{question:f(W,{children:A("p",{children:["What ",f(De,{children:"subjects"})," do you tutor?"]})}),answer:f(W,{children:A("p",{children:["I tutor lower and middle school science along with"," ","all levels of physics up until and including Quantum Mechanics."," ",f("br",{}),f("br",{})," In mathematics, I tutor all levels up until and including proof-based linear algebra. ",f("br",{}),f("br",{})," I also prepare students for a variety of competitive math and entrance exams such as the SAT, ACT, SSAT, ISEE, AMC 8/10/12, and all levels of the SASMO competition. ",f("br",{}),f("br",{})," My computer science instruction includes Python, C++, web development, and introductory data science, suitable for both high school and college students. ",f("br",{}),f("br",{})," In addition, I support English language learners across all age groups, from elementary school children to adult learners."]})})},{question:f(W,{children:A("p",{children:["What grade ",f(De,{children:"levels"})," are you comfortable working with?"]})}),answer:f(W,{children:A("p",{children:["I am comfortable working with students from kindergarten through adults in their 50s. In most cases, I tutor content up to the"," ","undergraduate level."]})})},{question:f(W,{children:A("p",{children:["Can you support students with extra"," ",f(De,{children:"needs"}),"?"]})}),answer:f(W,{children:f("p",{children:"Yes, I have experience working with students who are English language learners, as well as those with anxiety, depression, ADHD, autism, or dyslexia. I am here to provide support in any ways possible."})})},{question:f(W,{children:A("p",{children:["Do you help with high school and college"," ",f(De,{children:"applications"}),"?"]})}),answer:f(W,{children:f("p",{children:"Yes, I have assisted both international and U.S.-based students in successfully gaining admission to private high schools and top 20 colleges. I would be pleased to help you navigate this process."})})},{question:f(W,{children:A("p",{children:["Do you meet ",f(De,{children:"in-person"})," or online?"]})}),answer:f(W,{children:f("p",{children:"I offer both options. I have a dedicated Zoom link for online sessions and am also available for in-person meetings at homes, libraries, cafes, or other convenient locations. Please note that pricing may vary based on the location."})})},{question:f(W,{children:A("p",{children:["Where are you ",f(De,{children:"based"}),"?"]})}),answer:f(W,{children:f("p",{children:"I am based in Akita Prefecture, Japan."})})},{question:f(W,{children:A("p",{children:["What will my student ",f(De,{children:"need"})," for sessions?"]})}),answer:f(W,{children:f("p",{children:"For in-person sessions, your student will need a notebook, a pencil, and a willingness to learn. For online sessions, a laptop, desktop, or tablet is ideal (headphones are recommended). I suggest avoiding phones, and having the ability to annotate can be very helpful."})})},{question:f(W,{children:A("p",{children:["Do you ",f(De,{children:"record"})," online sessions?"]})}),answer:f(W,{children:f("p",{children:"Yes, I can record online sessions if requested. Some students find it helpful to review recordings later. I will send you a secure link and delete the recordings upon your request. Rest assured, they are never shared with anyone."})})},{question:f(W,{children:A("p",{children:["Do you provide ",f(De,{children:"materials"}),"?"]})}),answer:f(W,{children:f("p",{children:"Yes, I provide materials as needed. If I determine that your student requires a textbook that they do not have, I will do my best to provide a digital copy. If not, you may need to purchase it. I also provide homework, notes, study plans, cheat sheets, written solutions, and curricula tailored to your needs."})})},{question:f(W,{children:A("p",{children:["Do you provide ",f(De,{children:"homework"})," and notes?"]})}),answer:f(W,{children:f("p",{children:"Yes, I always provide notes and am happy to assign homework if desired. I tailor any extra practice to align with class content and specific needs. After each session, I send notes, homework, and feedback to parents via email."})})},{question:f(W,{children:A("p",{children:["How can I ",f(De,{children:"schedule"}),"?"]})}),answer:f(W,{children:A("p",{children:["You can schedule by emailing me at"," ",f("a",{href:"mailto:beetarantino@gmail.com?subject=Request%20for%20Tutoring",className:"text-blue-500",children:"beetarantino@gmail.com"}),". For first-time clients, a consultation is required. After that, you can book recurring sessions via text, email, or through Calendly, which I will provide after our consultation."]})})},{question:f(W,{children:A("p",{children:["How much ",f(De,{children:"notice"})," do you need for scheduling?"]})}),answer:f(W,{children:f("p",{children:"I typically request at least 24 hours of notice. To ensure availability, I recommend scheduling at least 3 days in advance."})})},{question:f(W,{children:A("p",{children:["How do you handle ",f(De,{children:"cancellations"}),", no-shows, and lateness?"]})}),answer:f(W,{children:A("p",{children:["Cancellations made within 12 hours and no-shows will incur a fee totaling the full session price. ",f("br",{}),f("br",{})," For cancellations made between 24 and 12 hours in advance, a charge of 50% will apply. ",f("br",{}),f("br",{})," I do my best to accommodate up to 10 minutes of lateness by lengthening sessions, but I do often have other clients and commitments after sessions, so this cannot be guaranteed. Time lost to lateness is lost."]})})},{question:f(W,{children:A("p",{children:["What are your ",f(De,{children:"rates"}),"?"]})}),answer:f(W,{children:f("p",{children:"For online sessions, I charge $100 per hour. For in-person sessions, my services start at $130 per hour and vary based on the meeting location. If you are interested in group classes, please reach out to discuss pricing on a case-by-case basis."})})},{question:f(W,{children:A("p",{children:["Do you offer ",f(De,{children:"discounts"})," or packages for groups?"]})}),answer:f(W,{children:f("p",{children:"Yes, I offer discounts for group sessions. Please contact me with details about the course and group size to discuss pricing options."})})},{question:f(W,{children:A("p",{children:["What ",f(De,{children:"payment forms"})," do you accept?"]})}),answer:f(W,{children:f("p",{children:"I prefer payments through Venmo or Zelle. However, I am also happy to accept PayPal or cash. I will request payment directly before a session, or you can send it."})})}];function KS({question:t,answer:e,isOpen:n,onClick:r}){var s;const i=bt.useRef(null);return A("div",{className:"border rounded-lg overflow-hidden scale-[1.05] transition-shadow hover:shadow",children:[A("button",{className:"w-full flex justify-between items-center px-5 py-4 text-left text-base md:text-lg font-medium",onClick:r,children:[t,f(ev,{className:`w-5 h-5 transform transition-transform ${n?"rotate-180":"rotate-0"}`})]}),f("div",{ref:i,className:"px-5 border-t text-base text-gray-600 overflow-hidden transition-all duration-300 ease-in-out",style:{height:n?`${(s=i.current)==null?void 0:s.scrollHeight}px`:"0px",opacity:n?1:0},children:f("div",{className:"py-4 space-y-2",children:e})})]})}function De({children:t}){return f("span",{className:"px-1",style:{backgroundImage:"linear-gradient(to right, #d9f99d 100%, transparent 0%)",backgroundSize:"0% 100%",backgroundRepeat:"no-repeat",animation:"highlightReveal 2s ease-out forwards"},children:t})}function qS(){return A("header",{className:"hidden md:flex w-full justify-between items-center px-12 py-10 text-2xl",children:[f("a",{href:"/",className:"hover:font-bold",children:"HOME"}),A("nav",{className:"flex gap-12",children:[f("a",{href:"/faq",className:"font-bold",children:"FAQ"}),f("a",{href:"/contact",className:"hover:font-bold",children:"CONTACT"})]})]})}function YS(){const[t,e]=S.useState(null);return A("div",{className:"min-h-screen flex flex-col bg-cover bg-no-repeat bg-center",children:[f(qS,{}),f("main",{className:"flex-1 flex justify-center px-10 text-[1.05rem]",children:A("div",{className:"max-w-6xl w-full flex flex-col gap-6",children:[A("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center pt-6",children:[A("h2",{className:"text-[2.4rem] md:text-[2.6rem] font-bold leading-snug",children:[f("span",{className:"inline-block align-middle",children:"Tutoring"})," ",f("span",{className:"align-middle",children:"with Bella Tarantino"})]}),f("div",{className:"mt-4 md:mt-0 md:ml-8",children:f("img",{src:"/img/faq-illustration-2.png",alt:"FAQ Graphic",className:"max-w-[10rem] md:max-w-[10em] h-auto"})})]}),f("div",{className:"mt-3 md:overflow-y-auto md:h-[25rem] pr-8 w-full px-10 py-2 ",children:f("div",{className:"flex flex-col gap-4",children:GS.map((n,r)=>f(KS,{question:n.question,answer:n.answer,isOpen:r===t,onClick:()=>e(r===t?null:r)},r))})})]})}),f("footer",{className:"w-full text-center py-3 bg-red-600 text-white text-sm",children:"This website is in development as of April 2025."})]})}function QS(){const[t,e]=S.useState(5);return A("div",{className:"text-center",children:[f("h1",{className:"text-3xl text-center mt-20 font-bold",children:"Requested resource not found"}),A("p",{children:["You'll be redirected in ",t]})]})}const XS=()=>{};/**
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
 */const af={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw ds(e)},ds=function(t){return new Error("Firebase Database ("+af.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const lf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},v4={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),r.push(n[u],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new ZS;const h=s<<2|a>>4;if(r.push(h),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cf=function(t){const e=lf(t);return v4.encodeByteArray(e,!0)},V1=function(t){return cf(t).replace(/\./g,"")},U1=function(t){try{return v4.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eT(t){return uf(void 0,t)}function uf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tT(n)||(t[n]=uf(t[n],e[n]));return t}function tT(t){return t!=="__proto__"}/**
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
 */function nT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rT=()=>nT().__FIREBASE_DEFAULTS__,iT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U1(t[1]);return e&&JSON.parse(e)},_4=()=>{try{return XS()||rT()||iT()||sT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},df=t=>{var e,n;return(n=(e=_4())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},oT=t=>{const e=df(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hf=()=>{var t;return(t=_4())==null?void 0:t.config},ff=t=>{var e;return(e=_4())==null?void 0:e[`_${t}`]};/**
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
 */class ea{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function aT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[V1(JSON.stringify(n)),V1(JSON.stringify(o)),a].join(".")}const ro={};function lT(){const t={prod:[],emulator:[]};for(const e of Object.keys(ro))ro[e]?t.emulator.push(e):t.prod.push(e);return t}function cT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let W5=!1;function mf(t,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||ro[t]===e||ro[t]||W5)return;ro[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",s=lT().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,p){h.setAttribute("width","24"),h.setAttribute("id",p),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{W5=!0,o()},h}function u(h,p){h.setAttribute("id",p),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function d(){const h=cT(r),p=n("text"),y=document.getElementById(p)||document.createElement("span"),v=n("learnmore"),_=document.getElementById(v)||document.createElement("a"),g=n("preprendIcon"),m=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const C=h.element;a(C),u(_,v);const E=c();l(m,g),C.append(m,y,_,E),document.body.appendChild(C)}s?(y.innerText="Preview backend disconnected.",m.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function uT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hT(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cf(){return af.NODE_ADMIN===!0}function fT(){try{return typeof indexedDB=="object"}catch{return!1}}function pT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const mT="FirebaseError";class vr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mT,Object.setPrototypeOf(this,vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vr(i,a,r)}}function gT(t,e){return t.replace(CT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const CT=/\{\$([^}]+)}/g;/**
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
 */function Do(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
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
 */const yf=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Do(U1(s[0])||""),n=Do(U1(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},yT=function(t){const e=yf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vT=function(t){const e=yf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function $t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function B1(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(H5(s)&&H5(o)){if(!qr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function H5(t){return t!==null&&typeof t=="object"}/**
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
 */function fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class _T{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function wT(t,e){const n=new ET(t,e);return n.subscribe.bind(n)}class ET{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ST(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=O0),i.error===void 0&&(i.error=O0),i.complete===void 0&&(i.complete=O0);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ST(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function O0(){}function E4(t,e){return`${t} failed: ${e} argument `}/**
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
 */const TT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class Yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */let IT=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ea;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xT(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function kT(t){return t===Pr?void 0:t}function xT(t){return t.instantiationMode==="EAGER"}/**
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
 */class PT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const AT={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},RT=Q.INFO,NT={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},bT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=NT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class S4{constructor(e){this.name=e,this._logLevel=RT,this._logHandler=bT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const MT=(t,e)=>e.some(n=>t instanceof n);let G5,K5;function DT(){return G5||(G5=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OT(){return K5||(K5=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vf=new WeakMap,Cu=new WeakMap,_f=new WeakMap,L0=new WeakMap,T4=new WeakMap;function LT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vf.set(n,t)}).catch(()=>{}),T4.set(e,t),e}function FT(t){if(Cu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cu.set(t,e)}let yu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_f.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VT(t){yu=t(yu)}function UT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(F0(this),e,...n);return _f.set(r,e.sort?e.sort():[e]),tr(r)}:OT().includes(t)?function(...e){return t.apply(F0(this),e),tr(vf.get(this))}:function(...e){return tr(t.apply(F0(this),e))}}function BT(t){return typeof t=="function"?UT(t):(t instanceof IDBTransaction&&FT(t),MT(t,DT())?new Proxy(t,yu):t)}function tr(t){if(t instanceof IDBRequest)return LT(t);if(L0.has(t))return L0.get(t);const e=BT(t);return e!==t&&(L0.set(t,e),T4.set(e,t)),e}const F0=t=>T4.get(t);function zT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tr(o.result),l.oldVersion,l.newVersion,tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const jT=["get","getKey","getAll","getAllKeys","count"],$T=["put","add","delete","clear"],V0=new Map;function q5(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(V0.get(e))return V0.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return V0.set(e,s),s}VT(t=>({...t,get:(e,n,r)=>q5(e,n)||t.get(e,n,r),has:(e,n)=>!!q5(e,n)||t.has(e,n)}));/**
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
 */class WT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vu="@firebase/app",Y5="0.14.3";/**
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
 */const xn=new S4("@firebase/app"),GT="@firebase/app-compat",KT="@firebase/analytics-compat",qT="@firebase/analytics",YT="@firebase/app-check-compat",QT="@firebase/app-check",XT="@firebase/auth",JT="@firebase/auth-compat",ZT="@firebase/database",eI="@firebase/data-connect",tI="@firebase/database-compat",nI="@firebase/functions",rI="@firebase/functions-compat",iI="@firebase/installations",sI="@firebase/installations-compat",oI="@firebase/messaging",aI="@firebase/messaging-compat",lI="@firebase/performance",cI="@firebase/performance-compat",uI="@firebase/remote-config",dI="@firebase/remote-config-compat",hI="@firebase/storage",fI="@firebase/storage-compat",pI="@firebase/firestore",mI="@firebase/ai",gI="@firebase/firestore-compat",CI="firebase",yI="12.3.0";/**
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
 */const _u="[DEFAULT]",vI={[vu]:"fire-core",[GT]:"fire-core-compat",[qT]:"fire-analytics",[KT]:"fire-analytics-compat",[QT]:"fire-app-check",[YT]:"fire-app-check-compat",[XT]:"fire-auth",[JT]:"fire-auth-compat",[ZT]:"fire-rtdb",[eI]:"fire-data-connect",[tI]:"fire-rtdb-compat",[nI]:"fire-fn",[rI]:"fire-fn-compat",[iI]:"fire-iid",[sI]:"fire-iid-compat",[oI]:"fire-fcm",[aI]:"fire-fcm-compat",[lI]:"fire-perf",[cI]:"fire-perf-compat",[uI]:"fire-rc",[dI]:"fire-rc-compat",[hI]:"fire-gcs",[fI]:"fire-gcs-compat",[pI]:"fire-fst",[gI]:"fire-fst-compat",[mI]:"fire-vertex","fire-js":"fire-js",[CI]:"fire-js-all"};/**
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
 */const z1=new Map,_I=new Map,wu=new Map;function Q5(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(wu.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;wu.set(e,t);for(const n of z1.values())Q5(n,t);for(const n of _I.values())Q5(n,t);return!0}function I4(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new ta("app","Firebase",wI);/**
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
 */class EI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=yI;function wf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:_u,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw nr.create("bad-app-name",{appName:String(i)});if(n||(n=hf()),!n)throw nr.create("no-options");const s=z1.get(i);if(s){if(qr(n,s.options)&&qr(r,s.config))return s;throw nr.create("duplicate-app",{appName:i})}const o=new PT(i);for(const l of wu.values())o.addComponent(l);const a=new EI(n,r,o);return z1.set(i,a),a}function Ef(t=_u){const e=z1.get(t);if(!e&&t===_u&&hf())return wf();if(!e)throw nr.create("no-app",{appName:t});return e}function rr(t,e,n){let r=vI[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(o.join(" "));return}ts(new Yr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const SI="firebase-heartbeat-database",TI=1,Oo="firebase-heartbeat-store";let U0=null;function Sf(){return U0||(U0=zT(SI,TI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),U0}async function II(t){try{const n=(await Sf()).transaction(Oo),r=await n.objectStore(Oo).get(Tf(t));return await n.done,r}catch(e){if(e instanceof vr)xn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function X5(t,e){try{const r=(await Sf()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,Tf(t)),await r.done}catch(n){if(n instanceof vr)xn.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function Tf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kI=1024,xI=30;class PI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=J5();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>xI){const o=NI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=J5(),{heartbeatsToSend:r,unsentEntries:i}=AI(this._heartbeatsCache.heartbeats),s=V1(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return xn.warn(n),""}}}function J5(){return new Date().toISOString().substring(0,10)}function AI(t,e=kI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Z5(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Z5(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fT()?pT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await II(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return X5(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return X5(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Z5(t){return V1(JSON.stringify({version:2,heartbeats:t})).length}function NI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function bI(t){ts(new Yr("platform-logger",e=>new WT(e),"PRIVATE")),ts(new Yr("heartbeat",e=>new PI(e),"PRIVATE")),rr(vu,Y5,t),rr(vu,Y5,"esm2020"),rr("fire-js","")}bI("");var MI="firebase",DI="12.3.0";/**
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
 */rr(MI,DI,"app");const e8="@firebase/database",t8="1.1.0";/**
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
 */let If="";function OI(t){If=t}/**
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
 */class LI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Do(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class FI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const kf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LI(e)}}catch{}return new FI},Or=kf("localStorage"),Eu=kf("sessionStorage");/**
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
 */const Fi=new S4("@firebase/database"),xf=function(){let t=1;return function(){return t++}}(),Pf=function(t){const e=TT(t),n=new _T;n.update(e);const r=n.digest();return v4.encodeByteArray(r)},na=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=na.apply(null,r):typeof r=="object"?e+=Ie(r):e+=r,e+=" "}return e};let zr=null,n8=!0;const VI=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Fi.logLevel=Q.VERBOSE,zr=Fi.log.bind(Fi),e&&Eu.set("logging_enabled",!0)):typeof t=="function"?zr=t:(zr=null,Eu.remove("logging_enabled"))},je=function(...t){if(n8===!0&&(n8=!1,zr===null&&Eu.get("logging_enabled")===!0&&VI(!0)),zr){const e=na.apply(null,t);zr(e)}},ra=function(t){return function(...e){je(t,...e)}},Su=function(...t){const e="FIREBASE INTERNAL ERROR: "+na(...t);Fi.error(e)},Pn=function(...t){const e=`FIREBASE FATAL ERROR: ${na(...t)}`;throw Fi.error(e),new Error(e)},st=function(...t){const e="FIREBASE WARNING: "+na(...t);Fi.warn(e)},UI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},k4=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},BI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ns="[MIN_NAME]",Qr="[MAX_NAME]",ms=function(t,e){if(t===e)return 0;if(t===ns||e===Qr)return-1;if(e===ns||t===Qr)return 1;{const n=r8(t),r=r8(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zI=function(t,e){return t===e?0:t<e?-1:1},As=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},x4=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ie(e[r]),n+=":",n+=x4(t[e[r]]);return n+="}",n},Af=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function at(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Rf=function(t){P(!k4(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},jI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$I=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function WI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const HI=new RegExp("^-?(0*)\\d{1,10}$"),GI=-2147483648,KI=2147483647,r8=function(t){if(HI.test(t)){const e=Number(t);if(e>=GI&&e<=KI)return e}return null},gs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},qI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},io=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class YI{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,vt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class QI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class Vi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vi.OWNER="owner";/**
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
 */const P4="5",Nf="v",bf="s",Mf="r",Df="f",Of=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lf="ls",Ff="p",Tu="ac",Vf="websocket",Uf="long_polling";/**
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
 */class Bf{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zf(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===Vf)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Uf)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XI(t)&&(n.ns=t.namespace);const i=[];return at(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class JI{constructor(){this.counters_={}}incrementCounter(e,n=1){$t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return eT(this.counters_)}}/**
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
 */const B0={},z0={};function A4(t){const e=t.toString();return B0[e]||(B0[e]=new JI),B0[e]}function ZI(t,e){const n=t.toString();return z0[n]||(z0[n]=e()),z0[n]}/**
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
 */class ek{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&gs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const i8="start",tk="close",nk="pLPCommand",rk="pRTLPCB",jf="id",$f="pw",Wf="ser",ik="cb",sk="seg",ok="ts",ak="d",lk="dframe",Hf=1870,Gf=30,ck=Hf-Gf,uk=25e3,dk=3e4;class Pi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ra(e),this.stats_=A4(n),this.urlFn=l=>(this.appCheckToken&&(l[Tu]=this.appCheckToken),zf(n,Uf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ek(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dk)),BI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new R4((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===i8)this.id=a,this.password=l;else if(o===tk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[i8]="t",r[Wf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ik]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Nf]=P4,this.transportSessionId&&(r[bf]=this.transportSessionId),this.lastSessionId&&(r[Lf]=this.lastSessionId),this.applicationId&&(r[Ff]=this.applicationId),this.appCheckToken&&(r[Tu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Of.test(location.hostname)&&(r[Mf]=Df);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pi.forceAllow_=!0}static forceDisallow(){Pi.forceDisallow_=!0}static isAvailable(){return Pi.forceAllow_?!0:!Pi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jI()&&!$I()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cf(n),i=Af(r,ck);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[lk]="t",r[jf]=e,r[$f]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class R4{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xf(),window[nk+this.uniqueCallbackIdentifier]=e,window[rk+this.uniqueCallbackIdentifier]=n,this.myIFrame=R4.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jf]=this.myID,e[$f]=this.myPW,e[Wf]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gf+r.length<=Hf;){const o=this.pendingSegs.shift();r=r+"&"+sk+i+"="+o.seg+"&"+ok+i+"="+o.ts+"&"+ak+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(uk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const hk=16384,fk=45e3;let j1=null;typeof MozWebSocket<"u"?j1=MozWebSocket:typeof WebSocket<"u"&&(j1=WebSocket);class Nt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ra(this.connId),this.stats_=A4(n),this.connURL=Nt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Nf]=P4,typeof location<"u"&&location.hostname&&Of.test(location.hostname)&&(o[Mf]=Df),n&&(o[bf]=n),r&&(o[Lf]=r),i&&(o[Tu]=i),s&&(o[Ff]=s),zf(e,Vf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Or.set("previous_websocket_failure",!0);try{let r;Cf(),this.mySock=new j1(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&j1!==null&&!Nt.forceDisallow_}static previouslyFailed(){return Or.isInMemoryStorage||Or.get("previous_websocket_failure")===!0}markConnectionHealthy(){Or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Do(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Af(n,hk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nt.responsesRequiredToBeHealthy=2;Nt.healthyTimeout=3e4;/**
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
 */class Lo{static get ALL_TRANSPORTS(){return[Pi,Nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Nt&&Nt.isAvailable();let r=n&&!Nt.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nt];else{const i=this.transports_=[];for(const s of Lo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Lo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Lo.globalTransportInitialized_=!1;/**
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
 */const pk=6e4,mk=5e3,gk=10*1024,Ck=100*1024,j0="t",s8="d",yk="s",o8="r",vk="e",a8="o",l8="a",c8="n",u8="p",_k="h";class wk{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ra("c:"+this.id+":"),this.transportManager_=new Lo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=io(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ck?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(j0 in e){const n=e[j0];n===l8?this.upgradeIfSecondaryHealthy_():n===o8?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===a8&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=As("t",e),r=As("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:u8,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:l8,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:c8,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=As("t",e),r=As("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=As(j0,e);if(s8 in e){const r=e[s8];if(n===_k){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===c8){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yk?this.onConnectionShutdown_(r):n===o8?this.onReset_(r):n===vk?Su("Server Error: "+r):n===a8?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Su("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),P4!==r&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),io(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):io(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:u8,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Kf{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class qf{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $1 extends qf{static getInstance(){return new $1}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!w4()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const d8=32,h8=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new X("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ur(t){return t.pieces_.length-t.pieceNum_}function J(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function Yf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ek(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Xf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new X(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return Ke(J(t),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function N4(t,e){if(ur(t)!==ur(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Mt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ur(t)>ur(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Sk{constructor(e,n){this.errorPrefix_=n,this.parts_=Qf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nl(this.parts_[r]);Jf(this)}}function Tk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nl(e),Jf(t)}function Ik(t){const e=t.parts_.pop();t.byteLength_-=Nl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jf(t){if(t.byteLength_>h8)throw new Error(t.errorPrefix_+"has a key path longer than "+h8+" bytes ("+t.byteLength_+").");if(t.parts_.length>d8)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+d8+") or object contains a cycle "+Ar(t))}function Ar(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class b4 extends qf{static getInstance(){return new b4}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Rs=1e3,kk=60*5*1e3,f8=30*1e3,xk=1.3,Pk=3e4,Ak="server_kill",p8=3;class vn extends Kf{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=vn.nextPersistentConnectionId_++,this.log_=ra("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rs,this.maxReconnectDelay_=kk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");b4.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$1.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ie(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ea,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;vn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$t(e,"w")){const r=Kr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=f8)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Su("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Pk&&(this.reconnectDelay_=Rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new wk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{st(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ak)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&st(d),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gu(this.interruptReasons_)&&(this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>x4(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=p8&&(this.reconnectDelay_=f8,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=p8&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+If.replace(/\./g,"-")]=1,w4()?e["framework.cordova"]=1:gf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$1.getInstance().currentlyOnline();return gu(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
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
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
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
 */class bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(ns,e),i=new j(ns,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let Da;class Zf extends bl{static get __EMPTY_NODE(){return Da}static set __EMPTY_NODE(e){Da=e}compare(e,n){return ms(e.name,n.name)}isDefinedOn(e){throw ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Qr,Da)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Da)}toString(){return".key"}}const Ui=new Zf;/**
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
 */class Oa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Re.RED,this.left=i??tt.EMPTY_NODE,this.right=s??tt.EMPTY_NODE}copy(e,n,r,i,s){return new Re(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class Rk{copy(e,n,r,i,s){return this}insert(e,n,r){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class tt{constructor(e,n=tt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new tt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oa(this.root_,null,this.comparator_,!0,e)}}tt.EMPTY_NODE=new Rk;/**
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
 */function Nk(t,e){return ms(t.name,e.name)}function M4(t,e){return ms(t,e)}/**
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
 */let Iu;function bk(t){Iu=t}const ep=function(t){return typeof t=="number"?"number:"+Rf(t):"string:"+t},tp=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$t(e,".sv"),"Priority must be a string or number.")}else P(t===Iu||t.isEmpty(),"priority of unexpected type.");P(t===Iu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let m8;class Pe{static set __childrenNodeConstructor(e){m8=e}static get __childrenNodeConstructor(){return m8}constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:z(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ep(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Rf(this.value_):e+=this.value_,this.lazyHash_=Pf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Pe.VALUE_TYPE_ORDER.indexOf(n),s=Pe.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let np,rp;function Mk(t){np=t}function Dk(t){rp=t}class Ok extends bl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ms(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Qr,new Pe("[PRIORITY-POST]",rp))}makePost(e,n){const r=np(e);return new j(n,new Pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new Ok;/**
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
 */const Lk=Math.log(2);class Fk{constructor(e){const n=s=>parseInt(Math.log(s)/Lk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const W1=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Re(h,d.node,Re.BLACK,null,null);{const p=parseInt(u/2,10)+l,y=i(l,p),v=i(p+1,c);return d=t[p],h=n?n(d):d,new Re(h,d.node,Re.BLACK,y,v)}},s=function(l){let c=null,u=null,d=t.length;const h=function(y,v){const _=d-y,g=d;d-=y;const m=i(_+1,g),C=t[_],E=n?n(C):C;p(new Re(E,C.node,v,null,m))},p=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),_=Math.pow(2,l.count-(y+1));v?h(_,Re.BLACK):(h(_,Re.BLACK),h(_,Re.RED))}return u},o=new Fk(t.length),a=s(o);return new tt(r||e,a)};/**
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
 */let $0;const li={};class mn{static get Default(){return P(li&&le,"ChildrenNode.ts has not been loaded"),$0=$0||new mn({".priority":li},{".priority":le}),$0}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Kr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof tt?n:null}hasIndex(e){return $t(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=W1(r,e.getCompare()):a=li;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new mn(u,c)}addToIndexes(e,n){const r=B1(this.indexes_,(i,s)=>{const o=Kr(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),W1(a,o.getCompare())}else return li;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new mn(r,this.indexSet_)}removeFromIndexes(e,n){const r=B1(this.indexes_,i=>{if(i===li)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new mn(r,this.indexSet_)}}/**
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
 */let Ns;class D{static get EMPTY_NODE(){return Ns||(Ns=new D(new tt(M4),null,mn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&tp(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ns}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ns:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ns:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{P(z(e)!==".priority"||ur(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(J(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,a)=>{n[o]=a.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ep(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Pf(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ia?-1:0}withIndex(e){if(e===Ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ui?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Vk extends D{constructor(){super(new tt(M4),D.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const ia=new Vk;Object.defineProperties(j,{MIN:{value:new j(ns,D.EMPTY_NODE)},MAX:{value:new j(Qr,ia)}});Zf.__EMPTY_NODE=D.EMPTY_NODE;Pe.__childrenNodeConstructor=D;bk(ia);Dk(ia);/**
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
 */const Uk=!0;function Te(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,Te(e))}if(!(t instanceof Array)&&Uk){const n=[];let r=!1;if(at(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Te(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return D.EMPTY_NODE;const s=W1(n,Nk,o=>o.name,M4);if(r){const o=W1(n,le.getCompare());return new D(s,Te(e),new mn({".priority":o},{".priority":le}))}else return new D(s,Te(e),mn.Default)}else{let n=D.EMPTY_NODE;return at(t,(r,i)=>{if($t(t,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(e))}}Mk(Te);/**
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
 */class Bk extends bl{constructor(e){super(),this.indexPath_=e,P(!$(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ms(e.name,n.name):s}makePost(e,n){const r=Te(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,ia);return new j(Qr,e)}toString(){return Qf(this.indexPath_,0).join("/")}}/**
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
 */class zk extends bl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ms(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=Te(e);return new j(n,r)}toString(){return".value"}}const jk=new zk;/**
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
 */function ip(t){return{type:"value",snapshotNode:t}}function rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Fo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function $k(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class D4{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Fo(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(rs(n,r)):o.trackChildChange(Vo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange(Fo(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Vo(i,s,o))}else r.trackChildChange(rs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Uo{constructor(e){this.indexedFilter_=new D4(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Uo.getStartPost_(e),this.endPost_=Uo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Wk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Uo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new j(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Vo(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Fo(n,d));const v=a.updateImmediateChild(n,D.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(rs(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Fo(c.name,c.node)),s.trackChildChange(rs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
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
 */class O4{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ns}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new O4;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hk(t){return t.loadsAllData()?new D4(t.getIndex()):t.hasLimit()?new Wk(t):new Uo(t)}function Gk(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function g8(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===jk?n="$value":t.index_===Ui?n="$key":(P(t.index_ instanceof Bk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ie(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ie(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ie(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function C8(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
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
 */class H1 extends Kf{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ra("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=H1.getListenId_(e,r),a={};this.listens_[o]=a;const l=g8(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Kr(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=H1.getListenId_(e,n);delete this.listens_[r]}get(e){const n=g8(e._queryParams),r=e._path.toString(),i=new ea;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Do(a.responseText)}catch{st("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Kk{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function G1(){return{value:null,children:new Map}}function sp(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,G1());const i=t.children.get(r);e=J(e),sp(i,e,n)}}function ku(t,e,n){t.value!==null?n(e,t.value):qk(t,(r,i)=>{const s=new X(e.toString()+"/"+r);ku(i,s,n)})}function qk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Yk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&at(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const y8=10*1e3,Qk=30*1e3,Xk=5*60*1e3;class Jk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Yk(e);const r=y8+(Qk-y8)*Math.random();io(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;at(e,(i,s)=>{s>0&&$t(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),io(this.reportStats_.bind(this),Math.floor(Math.random()*2*Xk))}}/**
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
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function op(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function L4(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function F4(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class K1{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Dt.ACK_USER_WRITE,this.source=op()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new K1(q(),n,this.revert)}}else return P(z(this.path)===e,"operationForChild called for unrelated child."),new K1(J(this.path),this.affectedTree,this.revert)}}/**
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
 */class Bo{constructor(e,n){this.source=e,this.path=n,this.type=Dt.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new Bo(this.source,q()):new Bo(this.source,J(this.path))}}/**
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
 */class Xr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Dt.OVERWRITE}operationForChild(e){return $(this.path)?new Xr(this.source,q(),this.snap.getImmediateChild(e)):new Xr(this.source,J(this.path),this.snap)}}/**
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
 */class zo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Dt.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new Xr(this.source,q(),n.value):new zo(this.source,q(),n)}else return P(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zo(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class dr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Zk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ex(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push($k(o.childName,o.snapshotNode))}),bs(t,i,"child_removed",e,r,n),bs(t,i,"child_added",e,r,n),bs(t,i,"child_moved",s,r,n),bs(t,i,"child_changed",e,r,n),bs(t,i,"value",e,r,n),i}function bs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>nx(t,a,l)),o.forEach(a=>{const l=tx(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function tx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nx(t,e,n){if(e.childName==null||n.childName==null)throw ds("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Ml(t,e){return{eventCache:t,serverCache:e}}function so(t,e,n,r){return Ml(new dr(e,n,r),t.serverCache)}function ap(t,e,n,r){return Ml(t.eventCache,new dr(e,n,r))}function q1(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Jr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let W0;const rx=()=>(W0||(W0=new tt(zI)),W0);class te{static fromObject(e){let n=new te(null);return at(e,(r,i)=>{n=n.set(new X(r),i)}),n}constructor(e,n=rx()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if($(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(J(e),n);return s!=null?{path:ke(new X(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(J(e)):new te(null)}}set(e,n){if($(e))return new te(n,this.children);{const r=z(e),s=(this.children.get(r)||new te(null)).set(J(e),n),o=this.children.insert(r,s);return new te(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(J(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new te(null):new te(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(J(e)):null}}setTree(e,n){if($(e))return n;{const r=z(e),s=(this.children.get(r)||new te(null)).setTree(J(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new te(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(J(e),ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(J(e),ke(n,i),r):new te(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ut{constructor(e){this.writeTree_=e}static empty(){return new Ut(new te(null))}}function oo(t,e,n){if($(e))return new Ut(new te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ke(i,e);return s=s.updateChild(o,n),new Ut(t.writeTree_.set(i,s))}else{const i=new te(n),s=t.writeTree_.setTree(e,i);return new Ut(s)}}}function v8(t,e,n){let r=t;return at(n,(i,s)=>{r=oo(r,ke(e,i),s)}),r}function _8(t,e){if($(e))return Ut.empty();{const n=t.writeTree_.setTree(e,new te(null));return new Ut(n)}}function xu(t,e){return ri(t,e)!=null}function ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function w8(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function ir(t,e){if($(e))return t;{const n=ri(t,e);return n!=null?new Ut(new te(n)):new Ut(t.writeTree_.subtree(e))}}function Pu(t){return t.writeTree_.isEmpty()}function is(t,e){return lp(q(),t.writeTree_,e)}function lp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=lp(ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ke(t,".priority"),r)),n}}/**
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
 */function Dl(t,e){return hp(e,t)}function ix(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=oo(t.visibleWrites,e,n)),t.lastWriteId=r}function sx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ox(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ax(a,r.path)?i=!1:Mt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return lx(t),!0;if(r.snap)t.visibleWrites=_8(t.visibleWrites,r.path);else{const a=r.children;at(a,l=>{t.visibleWrites=_8(t.visibleWrites,ke(r.path,l))})}return!0}else return!1}function ax(t,e){if(t.snap)return Mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Mt(ke(t.path,n),e))return!0;return!1}function lx(t){t.visibleWrites=cp(t.allWrites,cx,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cx(t){return t.visible}function cp(t,e,n){let r=Ut.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Mt(n,o)?(a=Ke(n,o),r=oo(r,a,s.snap)):Mt(o,n)&&(a=Ke(o,n),r=oo(r,q(),s.snap.getChild(a)));else if(s.children){if(Mt(n,o))a=Ke(n,o),r=v8(r,a,s.children);else if(Mt(o,n))if(a=Ke(o,n),$(a))r=v8(r,q(),s.children);else{const l=Kr(s.children,z(a));if(l){const c=l.getChild(J(a));r=oo(r,q(),c)}}}else throw ds("WriteRecord should have .snap or .children")}}return r}function up(t,e,n,r,i){if(!r&&!i){const s=ri(t.visibleWrites,e);if(s!=null)return s;{const o=ir(t.visibleWrites,e);if(Pu(o))return n;if(n==null&&!xu(o,q()))return null;{const a=n||D.EMPTY_NODE;return is(o,a)}}}else{const s=ir(t.visibleWrites,e);if(!i&&Pu(s))return n;if(!i&&n==null&&!xu(s,q()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Mt(c.path,e)||Mt(e,c.path))},a=cp(t.allWrites,o,e),l=n||D.EMPTY_NODE;return is(a,l)}}}function ux(t,e,n){let r=D.EMPTY_NODE;const i=ri(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ir(t.visibleWrites,e);return n.forEachChild(le,(o,a)=>{const l=is(ir(s,new X(o)),a);r=r.updateImmediateChild(o,l)}),w8(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ir(t.visibleWrites,e);return w8(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dx(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ke(e,n);if(xu(t.visibleWrites,s))return null;{const o=ir(t.visibleWrites,s);return Pu(o)?i.getChild(n):is(o,i.getChild(n))}}function hx(t,e,n,r){const i=ke(e,n),s=ri(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ir(t.visibleWrites,i);return is(o,r.getNode().getImmediateChild(n))}else return null}function fx(t,e){return ri(t.visibleWrites,e)}function px(t,e,n,r,i,s,o){let a;const l=ir(t.visibleWrites,e),c=ri(l,q());if(c!=null)a=c;else if(n!=null)a=is(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=h.getNext();for(;p&&u.length<i;)d(p,r)!==0&&u.push(p),p=h.getNext();return u}else return[]}function mx(){return{visibleWrites:Ut.empty(),allWrites:[],lastWriteId:-1}}function Y1(t,e,n,r){return up(t.writeTree,t.treePath,e,n,r)}function V4(t,e){return ux(t.writeTree,t.treePath,e)}function E8(t,e,n,r){return dx(t.writeTree,t.treePath,e,n,r)}function Q1(t,e){return fx(t.writeTree,ke(t.treePath,e))}function gx(t,e,n,r,i,s){return px(t.writeTree,t.treePath,e,n,r,i,s)}function U4(t,e,n){return hx(t.writeTree,t.treePath,e,n)}function dp(t,e){return hp(ke(t.treePath,e),t.writeTree)}function hp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Cx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Vo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Fo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,rs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Vo(r,e.snapshotNode,i.oldSnap));else throw ds("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class yx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const fp=new yx;class B4{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return U4(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jr(this.viewCache_),s=gx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function vx(t){return{filter:t}}function _x(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wx(t,e,n,r,i){const s=new Cx;let o,a;if(n.type===Dt.OVERWRITE){const c=n;c.source.fromUser?o=Au(t,e,c.path,c.snap,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!$(c.path),o=X1(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Dt.MERGE){const c=n;c.source.fromUser?o=Sx(t,e,c.path,c.children,r,i,s):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ru(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Dt.ACK_USER_WRITE){const c=n;c.revert?o=kx(t,e,c.path,r,i,s):o=Tx(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Dt.LISTEN_COMPLETE)o=Ix(t,e,n.path,r,s);else throw ds("Unknown operation type: "+n.type);const l=s.getChanges();return Ex(e,o,l),{viewCache:o,changes:l}}function Ex(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=q1(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ip(q1(e)))}}function pp(t,e,n,r,i,s){const o=e.eventCache;if(Q1(r,n)!=null)return e;{let a,l;if($(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Jr(e),u=c instanceof D?c:D.EMPTY_NODE,d=V4(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Y1(r,Jr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=z(n);if(c===".priority"){P(ur(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=E8(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=J(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=E8(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=U4(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return so(e,a,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function X1(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if($(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=z(n);if(!l.isCompleteForPath(n)&&ur(n)>1)return e;const y=J(n),_=l.getNode().getImmediateChild(p).updateChild(y,r);p===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),p,_,y,fp,null)}const d=ap(e,c,l.isFullyInitialized()||$(n),u.filtersNodes()),h=new B4(i,d,s);return pp(t,d,n,i,h,a)}function Au(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new B4(i,e,s);if($(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=so(e,c,!0,t.filter.filtersNodes());else{const d=z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=so(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=J(n),p=a.getNode().getImmediateChild(d);let y;if($(h))y=r;else{const v=u.getCompleteChild(d);v!=null?Yf(h)===".priority"&&v.getChild(Xf(h)).isEmpty()?y=v:y=v.updateChild(h,r):y=D.EMPTY_NODE}if(p.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),d,y,h,u,o);l=so(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function S8(t,e){return t.eventCache.isCompleteForChild(e)}function Sx(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ke(n,l);S8(e,z(u))&&(a=Au(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ke(n,l);S8(e,z(u))||(a=Au(t,a,u,c,i,s,o))}),a}function T8(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ru(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;$(n)?c=r:c=new te(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),y=T8(t,p,h);l=X1(t,l,new X(d),y,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!p){const y=e.serverCache.getNode().getImmediateChild(d),v=T8(t,y,h);l=X1(t,l,new X(d),v,i,s,o,a)}}),l}function Tx(t,e,n,r,i,s,o){if(Q1(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if($(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return X1(t,e,n,l.getNode().getChild(n),i,s,a,o);if($(n)){let c=new te(null);return l.getNode().forEachChild(Ui,(u,d)=>{c=c.set(new X(u),d)}),Ru(t,e,n,c,i,s,a,o)}else return e}else{let c=new te(null);return r.foreach((u,d)=>{const h=ke(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ru(t,e,n,c,i,s,a,o)}}function Ix(t,e,n,r,i){const s=e.serverCache,o=ap(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return pp(t,o,n,r,fp,i)}function kx(t,e,n,r,i,s){let o;if(Q1(r,n)!=null)return e;{const a=new B4(r,e,i),l=e.eventCache.getNode();let c;if($(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Y1(r,Jr(e));else{const d=e.serverCache.getNode();P(d instanceof D,"serverChildren would be complete if leaf node"),u=V4(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=z(n);let d=U4(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,J(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,D.EMPTY_NODE,J(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Y1(r,Jr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Q1(r,q())!=null,so(e,c,o,t.filter.filtersNodes())}}/**
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
 */class xx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new D4(r.getIndex()),s=Hk(r);this.processor_=vx(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(D.EMPTY_NODE,a.getNode(),null),u=new dr(l,o.isFullyInitialized(),i.filtersNodes()),d=new dr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ml(d,u),this.eventGenerator_=new Zk(this.query_)}get query(){return this.query_}}function Px(t){return t.viewCache_.serverCache.getNode()}function Ax(t){return q1(t.viewCache_)}function Rx(t,e){const n=Jr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function I8(t){return t.eventRegistrations_.length===0}function Nx(t,e){t.eventRegistrations_.push(e)}function k8(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function x8(t,e,n,r){e.type===Dt.MERGE&&e.source.queryId!==null&&(P(Jr(t.viewCache_),"We should always have a full cache before handling merges"),P(q1(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=wx(t.processor_,i,e,n,r);return _x(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,mp(t,s.changes,s.viewCache.eventCache.getNode(),null)}function bx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(rs(s,o))}),n.isFullyInitialized()&&r.push(ip(n.getNode())),mp(t,r,n.getNode(),e)}function mp(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ex(t.eventGenerator_,e,n,i)}/**
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
 */let J1;class gp{constructor(){this.views=new Map}}function Mx(t){P(!J1,"__referenceConstructor has already been defined"),J1=t}function Dx(){return P(J1,"Reference.ts has not been loaded"),J1}function Ox(t){return t.views.size===0}function z4(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),x8(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(x8(o,e,n,r));return s}}function Cp(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Y1(n,i?r:null),l=!1;a?l=!0:r instanceof D?(a=V4(n,r),l=!1):(a=D.EMPTY_NODE,l=!1);const c=Ml(new dr(a,l,!1),new dr(r,i,!1));return new xx(e,c)}return o}function Lx(t,e,n,r,i,s){const o=Cp(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Nx(o,n),bx(o,n)}function Fx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=hr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(k8(c,n,r)),I8(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(k8(l,n,r)),I8(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!hr(t)&&s.push(new(Dx())(e._repo,e._path)),{removed:s,events:o}}function yp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function sr(t,e){let n=null;for(const r of t.views.values())n=n||Rx(r,e);return n}function vp(t,e){if(e._queryParams.loadsAllData())return Ol(t);{const r=e._queryIdentifier;return t.views.get(r)}}function _p(t,e){return vp(t,e)!=null}function hr(t){return Ol(t)!=null}function Ol(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Z1;function Vx(t){P(!Z1,"__referenceConstructor has already been defined"),Z1=t}function Ux(){return P(Z1,"Reference.ts has not been loaded"),Z1}let Bx=1;class P8{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=mx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function j4(t,e,n,r,i){return ix(t.pendingWriteTree_,e,n,r,i),i?oa(t,new Xr(op(),e,n)):[]}function Lr(t,e,n=!1){const r=sx(t.pendingWriteTree_,e);if(ox(t.pendingWriteTree_,e)){let s=new te(null);return r.snap!=null?s=s.set(q(),!0):at(r.children,o=>{s=s.set(new X(o),!0)}),oa(t,new K1(r.path,s,n))}else return[]}function sa(t,e,n){return oa(t,new Xr(L4(),e,n))}function zx(t,e,n){const r=te.fromObject(n);return oa(t,new zo(L4(),e,r))}function jx(t,e){return oa(t,new Bo(L4(),e))}function $x(t,e,n){const r=$4(t,n);if(r){const i=W4(r),s=i.path,o=i.queryId,a=Ke(s,e),l=new Bo(F4(o),a);return H4(t,s,l)}else return[]}function el(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||_p(o,e))){const l=Fx(o,e,n,r);Ox(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,p)=>hr(p));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const p=Gx(h);for(let y=0;y<p.length;++y){const v=p[y],_=v.query,g=Tp(t,v);t.listenProvider_.startListening(ao(_),jo(t,_),g.hashFn,g.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(ao(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(Fl(h));t.listenProvider_.stopListening(ao(h),p)}))}Kx(t,c)}return a}function wp(t,e,n,r){const i=$4(t,r);if(i!=null){const s=W4(i),o=s.path,a=s.queryId,l=Ke(o,e),c=new Xr(F4(a),l,n);return H4(t,o,c)}else return[]}function Wx(t,e,n,r){const i=$4(t,r);if(i){const s=W4(i),o=s.path,a=s.queryId,l=Ke(o,e),c=te.fromObject(n),u=new zo(F4(a),l,c);return H4(t,o,u)}else return[]}function Nu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const y=Ke(h,i);s=s||sr(p,y),o=o||hr(p)});let a=t.syncPointTree_.get(i);a?(o=o||hr(a),s=s||sr(a,q())):(a=new gp,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const v=sr(y,q());v&&(s=s.updateImmediateChild(p,v))}));const c=_p(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Fl(e);P(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=qx();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const u=Dl(t.pendingWriteTree_,i);let d=Lx(a,e,n,u,s,l);if(!c&&!o&&!r){const h=vp(a,e);d=d.concat(Yx(t,e,h))}return d}function Ll(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ke(o,e),c=sr(a,l);if(c)return c});return up(i,e,s,n,!0)}function Hx(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ke(c,n);r=r||sr(u,d)});let i=t.syncPointTree_.get(n);i?r=r||sr(i,q()):(i=new gp,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new dr(r,!0,!1):null,a=Dl(t.pendingWriteTree_,e._path),l=Cp(i,e,a,s?o.getNode():D.EMPTY_NODE,s);return Ax(l)}function oa(t,e){return Ep(e,t.syncPointTree_,null,Dl(t.pendingWriteTree_,q()))}function Ep(t,e,n,r){if($(t.path))return Sp(t,e,n,r);{const i=e.get(q());n==null&&i!=null&&(n=sr(i,q()));let s=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=dp(r,o);s=s.concat(Ep(a,l,c,u))}return i&&(s=s.concat(z4(i,t,r,n))),s}}function Sp(t,e,n,r){const i=e.get(q());n==null&&i!=null&&(n=sr(i,q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dp(r,o),u=t.operationForChild(o);u&&(s=s.concat(Sp(u,a,l,c)))}),i&&(s=s.concat(z4(i,t,r,n))),s}function Tp(t,e){const n=e.query,r=jo(t,n);return{hashFn:()=>(Px(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?$x(t,n._path,r):jx(t,n._path);{const s=WI(i,n);return el(t,n,null,s)}}}}function jo(t,e){const n=Fl(e);return t.queryToTagMap.get(n)}function Fl(t){return t._path.toString()+"$"+t._queryIdentifier}function $4(t,e){return t.tagToQueryMap.get(e)}function W4(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function H4(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=Dl(t.pendingWriteTree_,e);return z4(r,n,i,null)}function Gx(t){return t.fold((e,n,r)=>{if(n&&hr(n))return[Ol(n)];{let i=[];return n&&(i=yp(n)),at(r,(s,o)=>{i=i.concat(o)}),i}})}function ao(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ux())(t._repo,t._path):t}function Kx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Fl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function qx(){return Bx++}function Yx(t,e,n){const r=e._path,i=jo(t,e),s=Tp(t,n),o=t.listenProvider_.startListening(ao(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!hr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!$(c)&&u&&hr(u))return[Ol(u).query];{let h=[];return u&&(h=h.concat(yp(u).map(p=>p.query))),at(d,(p,y)=>{h=h.concat(y)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ao(u),jo(t,u))}}return o}/**
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
 */class G4{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new G4(n)}node(){return this.node_}}class K4{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new K4(this.syncTree_,n)}node(){return Ll(this.syncTree_,this.path_)}}const Qx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},A8=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Xx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Jx(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Xx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},Jx=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Zx=function(t,e,n,r){return Y4(e,new K4(n,t),r)},q4=function(t,e,n){return Y4(t,new G4(e),n)};function Y4(t,e,n){const r=t.getPriority().val(),i=A8(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=A8(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Pe(a,Te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Pe(i))),o.forEachChild(le,(a,l)=>{const c=Y4(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Q4{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Vl(t,e){let n=e instanceof X?e:new X(e),r=t,i=z(n);for(;i!==null;){const s=Kr(r.node.children,i)||{children:{},childCount:0};r=new Q4(i,r,s),n=J(n),i=z(n)}return r}function ii(t){return t.node.value}function X4(t,e){t.node.value=e,bu(t)}function Ip(t){return t.node.childCount>0}function eP(t){return ii(t)===void 0&&!Ip(t)}function Ul(t,e){at(t.node.children,(n,r)=>{e(new Q4(n,t,r))})}function kp(t,e,n,r){n&&!r&&e(t),Ul(t,i=>{kp(i,e,!0,r)}),n&&r&&e(t)}function tP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function aa(t){return new X(t.parent===null?t.name:aa(t.parent)+"/"+t.name)}function bu(t){t.parent!==null&&nP(t.parent,t.name,t)}function nP(t,e,n){const r=eP(n),i=$t(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,bu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,bu(t))}/**
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
 */const rP=/[\[\].#$\/\u0000-\u001F\u007F]/,iP=/[\[\].#$\u0000-\u001F\u007F]/,H0=10*1024*1024,xp=function(t){return typeof t=="string"&&t.length!==0&&!rP.test(t)},Pp=function(t){return typeof t=="string"&&t.length!==0&&!iP.test(t)},sP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Pp(t)},oP=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!k4(t)||t&&typeof t=="object"&&$t(t,".sv")},Ap=function(t,e,n,r){r&&e===void 0||Bl(E4(t,"value"),e,n)},Bl=function(t,e,n){const r=n instanceof X?new Sk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ar(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ar(r)+" with contents = "+e.toString());if(k4(e))throw new Error(t+"contains "+e.toString()+" "+Ar(r));if(typeof e=="string"&&e.length>H0/3&&Nl(e)>H0)throw new Error(t+"contains a string greater than "+H0+" utf8 bytes "+Ar(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(at(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!xp(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ar(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Tk(r,o),Bl(t,a,r),Ik(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ar(r)+" in addition to actual children.")}},Rp=function(t,e,n,r){if(!(r&&n===void 0)&&!Pp(n))throw new Error(E4(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Rp(t,e,n,r)},J4=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},lP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sP(n))throw new Error(E4(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class cP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Z4(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!N4(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Np(t,e,n){Z4(t,n),bp(t,r=>N4(r,e))}function zt(t,e,n){Z4(t,n),bp(t,r=>Mt(r,e)||Mt(e,r))}function bp(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(uP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();zr&&je("event: "+n.toString()),gs(r)}}}/**
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
 */const dP="repo_interrupt",hP=25;class fP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=G1(),this.transactionQueueTree_=new Q4,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pP(t,e,n){if(t.stats_=A4(t.repoInfo_),t.forceRestClient_||qI())t.server_=new H1(t.repoInfo_,(r,i,s,o)=>{R8(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>N8(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new vn(t.repoInfo_,e,(r,i,s,o)=>{R8(t,r,i,s,o)},r=>{N8(t,r)},r=>{mP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ZI(t.repoInfo_,()=>new Jk(t.stats_,t.server_)),t.infoData_=new Kk,t.infoSyncTree_=new P8({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=sa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),e3(t,"connected",!1),t.serverSyncTree_=new P8({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);zt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Mp(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zl(t){return Qx({timestamp:Mp(t)})}function R8(t,e,n,r,i){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=B1(n,c=>Te(c));o=Wx(t.serverSyncTree_,s,l,i)}else{const l=Te(n);o=wp(t.serverSyncTree_,s,l,i)}else if(r){const l=B1(n,c=>Te(c));o=zx(t.serverSyncTree_,s,l)}else{const l=Te(n);o=sa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=$l(t,s)),zt(t.eventQueue_,a,o)}function N8(t,e){e3(t,"connected",e),e===!1&&yP(t)}function mP(t,e){at(e,(n,r)=>{e3(t,n,r)})}function e3(t,e,n){const r=new X("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(r,i);const s=sa(t.infoSyncTree_,r,i);zt(t.eventQueue_,r,s)}function t3(t){return t.nextWriteId_++}function gP(t,e,n){const r=Hx(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Te(i).withIndex(e._queryParams.getIndex());Nu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=sa(t.serverSyncTree_,e._path,s);else{const a=jo(t.serverSyncTree_,e);o=wp(t.serverSyncTree_,e._path,s,a)}return zt(t.eventQueue_,e._path,o),el(t.serverSyncTree_,e,n,null,!0),s},i=>(la(t,"get for query "+Ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function CP(t,e,n,r,i){la(t,"set",{path:e.toString(),value:n,priority:r});const s=zl(t),o=Te(n,r),a=Ll(t.serverSyncTree_,e),l=q4(o,a,s),c=t3(t),u=j4(t.serverSyncTree_,e,l,c,!0);Z4(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const y=h==="ok";y||st("set at "+e+" failed: "+h);const v=Lr(t.serverSyncTree_,c,!y);zt(t.eventQueue_,e,v),wP(t,i,h,p)});const d=Fp(t,e);$l(t,d),zt(t.eventQueue_,d,[])}function yP(t){la(t,"onDisconnectEvents");const e=zl(t),n=G1();ku(t.onDisconnect_,q(),(i,s)=>{const o=Zx(i,s,t.serverSyncTree_,e);sp(n,i,o)});let r=[];ku(n,q(),(i,s)=>{r=r.concat(sa(t.serverSyncTree_,i,s));const o=Fp(t,i);$l(t,o)}),t.onDisconnect_=G1(),zt(t.eventQueue_,q(),r)}function vP(t,e,n){let r;z(e._path)===".info"?r=Nu(t.infoSyncTree_,e,n):r=Nu(t.serverSyncTree_,e,n),Np(t.eventQueue_,e._path,r)}function b8(t,e,n){let r;z(e._path)===".info"?r=el(t.infoSyncTree_,e,n):r=el(t.serverSyncTree_,e,n),Np(t.eventQueue_,e._path,r)}function _P(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dP)}function la(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function wP(t,e,n,r){e&&gs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function EP(t,e,n,r,i,s){la(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:xf(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=n3(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Bl("transaction failed: Data returned ",l,o.path),o.status=0;const c=Vl(t.transactionQueueTree_,e),u=ii(c)||[];u.push(o),X4(c,u);let d;typeof l=="object"&&l!==null&&$t(l,".priority")?(d=Kr(l,".priority"),P(oP(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Ll(t.serverSyncTree_,e)||D.EMPTY_NODE).getPriority().val();const h=zl(t),p=Te(l,d),y=q4(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=y,o.currentWriteId=t3(t);const v=j4(t.serverSyncTree_,e,y,o.currentWriteId,o.applyLocally);zt(t.eventQueue_,e,v),jl(t,t.transactionQueueTree_)}}function n3(t,e,n){return Ll(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function jl(t,e=t.transactionQueueTree_){if(e||Wl(t,e),ii(e)){const n=Op(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&SP(t,aa(e),n)}else Ip(e)&&Ul(e,n=>{jl(t,n)})}function SP(t,e,n){const r=n.map(c=>c.currentWriteId),i=n3(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ke(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{la(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Lr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Wl(t,Vl(t.transactionQueueTree_,e)),jl(t,t.transactionQueueTree_),zt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)gs(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{st("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}$l(t,e)}},o)}function $l(t,e){const n=Dp(t,e),r=aa(n),i=Op(t,n);return TP(t,i,r),r}function TP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ke(n,l.path);let u=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Lr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=hP)u=!0,d="maxretry",i=i.concat(Lr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=n3(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Bl("transaction failed: Data returned ",p,l.path);let y=Te(p);typeof p=="object"&&p!=null&&$t(p,".priority")||(y=y.updatePriority(h.getPriority()));const _=l.currentWriteId,g=zl(t),m=q4(y,h,g);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=m,l.currentWriteId=t3(t),o.splice(o.indexOf(_),1),i=i.concat(j4(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(Lr(t.serverSyncTree_,_,!0))}else u=!0,d="nodata",i=i.concat(Lr(t.serverSyncTree_,l.currentWriteId,!0))}zt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Wl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)gs(r[a]);jl(t,t.transactionQueueTree_)}function Dp(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&ii(r)===void 0;)r=Vl(r,n),e=J(e),n=z(e);return r}function Op(t,e){const n=[];return Lp(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Lp(t,e,n){const r=ii(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ul(e,i=>{Lp(t,i,n)})}function Wl(t,e){const n=ii(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,X4(e,n.length>0?n:void 0)}Ul(e,r=>{Wl(t,r)})}function Fp(t,e){const n=aa(Dp(t,e)),r=Vl(t.transactionQueueTree_,e);return tP(r,i=>{G0(t,i)}),G0(t,r),kp(r,i=>{G0(t,i)}),n}function G0(t,e){const n=ii(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Lr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?X4(e,void 0):n.length=s+1,zt(t.eventQueue_,aa(e),i);for(let o=0;o<r.length;o++)gs(r[o])}}/**
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
 */function IP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):st(`Invalid query segment '${n}' in query '${t}'`)}return e}const M8=function(t,e){const n=xP(t),r=n.namespace;n.domain==="firebase.com"&&Pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||UI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Bf(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new X(n.pathString)}},xP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=IP(t.substring(u,d)));const h=kP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const D8="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",PP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=D8.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=D8.charAt(e[i]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Vp{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class Up{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Bp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Hl{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:Yf(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const e=C8(this._queryParams),n=x4(e);return n==="{}"?"default":n}get _queryObject(){return C8(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof Hl))return!1;const n=this._repo===e._repo,r=N4(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ek(this._path)}}class Wt extends Hl{constructor(e,n){super(e,n,new O4,!1)}get parent(){const e=Xf(this._path);return e===null?null:new Wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),r=fr(this.ref,e);return new Zr(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Zr(i,fr(this.ref,r),le)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qt(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?fr(t._root,e):t._root}function fr(t,e){return t=be(t),z(t._path)===null?aP("child","path",e,!1):Rp("child","path",e,!1),new Wt(t._repo,ke(t._path,e))}function O8(t,e){t=be(t),J4("push",t._path),Ap("push",e,t._path,!0);const n=Mp(t._repo),r=PP(n),i=fr(t,r),s=fr(t,r);let o;return e!=null?o=Mu(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Mu(t,e){t=be(t),J4("set",t._path),Ap("set",e,t._path,!1);const n=new ea;return CP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function K0(t){t=be(t);const e=new Bp(()=>{}),n=new Gl(e);return gP(t._repo,t,n).then(r=>new Zr(r,new Wt(t._repo,t._path),t._queryParams.getIndex()))}class Gl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Vp("value",this,new Zr(e.snapshotNode,new Wt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Up(this,e,n):null}matches(e){return e instanceof Gl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class r3{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Up(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=fr(new Wt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Vp(e.type,this,new Zr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof r3?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function AP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{b8(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Bp(n,s||void 0),a=e==="value"?new Gl(o):new r3(e,o);return vP(t._repo,t,a),()=>b8(t._repo,t,a)}function e1(t,e,n,r){return AP(t,"value",e,n,r)}class RP{}class NP extends RP{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Hl(e._repo,e._path,Gk(e._queryParams,this._limit),e._orderByCalled)}}function bP(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new NP(t)}function MP(t,...e){let n=be(t);for(const r of e)n=r._apply(n);return n}Mx(Wt);Vx(Wt);/**
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
 */const DP="FIREBASE_DATABASE_EMULATOR_HOST",Du={};let OP=!1;function LP(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=hs(s);t.repoInfo_=new Bf(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function FP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=M8(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[DP]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=M8(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Vi(Vi.OWNER):new QI(t.name,t.options,e);lP("Invalid Firebase Database URL",o),$(o.path)||Pn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=UP(a,t,u,new YI(t,n));return new BP(d,t)}function VP(t,e){const n=Du[e];(!n||n[t.key]!==t)&&Pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_P(t),delete n[t.key]}function UP(t,e,n,r){let i=Du[e.name];i||(i={},Du[e.name]=i);let s=i[t.toURLString()];return s&&Pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new fP(t,OP,n,r),i[t.toURLString()]=s,s}class BP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(VP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pn("Cannot call "+e+" on a deleted database.")}}function zP(t=Ef(),e){const n=I4(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=oT("database");r&&jP(n,...r)}return n}function jP(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&qr(r,s.repoInfo_.emulatorOptions))return;Pn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Vi(Vi.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:aT(r.mockUserToken,t.app.options.projectId);o=new Vi(a)}hs(e)&&(pf(e),mf("Database",!0)),LP(s,i,r,o)}/**
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
 */function $P(t){OI(ps),ts(new Yr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return FP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),rr(e8,t8,t),rr(e8,t8,"esm2020")}/**
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
 */class WP{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function HP(t,e,n){if(t=be(t),J4("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const r=(n==null?void 0:n.applyLocally)??!0,i=new ea,s=(a,l,c)=>{let u=null;a?i.reject(a):(u=new Zr(c,new Wt(t._repo,t._path),le),i.resolve(new WP(l,u)))},o=e1(t,()=>{});return EP(t._repo,t._path,e,s,o,r),i.promise}vn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$P();function zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GP=zp,jp=new ta("auth","Firebase",zp());/**
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
 */const tl=new S4("@firebase/auth");function KP(t,...e){tl.logLevel<=Q.WARN&&tl.warn(`Auth (${ps}): ${t}`,...e)}function t1(t,...e){tl.logLevel<=Q.ERROR&&tl.error(`Auth (${ps}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw i3(t,...e)}function sn(t,...e){return i3(t,...e)}function $p(t,e,n){const r={...GP(),[e]:n};return new ta("auth","Firebase",r).create(e,{appName:t.name})}function _n(t){return $p(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function i3(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jp.create(t,...e)}function L(t,e,...n){if(!t)throw i3(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw t1(e),new Error(e)}function An(t,e){t||gn(e)}/**
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
 */function Ou(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function qP(){return L8()==="http:"||L8()==="https:"}function L8(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function YP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qP()||dT()||"connection"in navigator)?navigator.onLine:!0}function QP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=w4()||gf()}get(){return YP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function s3(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZP=new ca(3e4,6e4);function _r(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function wr(t,e,n,r,i={}){return Hp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=fs({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return uT()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&hs(t.emulatorConfig.host)&&(c.credentials="include"),Wp.fetch()(await Gp(t,t.config.apiHost,n,a),c)})}async function Hp(t,e,n){t._canInitEmulator=!1;const r={...XP,...e};try{const i=new tA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw La(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $p(t,u,c);jt(t,u)}}catch(i){if(i instanceof vr)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function ua(t,e,n,r,i={}){const s=await wr(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Gp(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?s3(t.config,i):`${t.config.apiScheme}://${i}`;return JP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function eA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),ZP.get())})}}function La(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function F8(t){return t!==void 0&&t.enterprise!==void 0}class nA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rA(t,e){return wr(t,"GET","/v2/recaptchaConfig",_r(t,e))}/**
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
 */async function iA(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function nl(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sA(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=o3(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lo(q0(i.auth_time)),issuedAtTime:lo(q0(i.iat)),expirationTime:lo(q0(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function q0(t){return Number(t)*1e3}function o3(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return t1("JWT malformed, contained fewer than 3 sections"),null;try{const i=U1(n);return i?JSON.parse(i):(t1("Failed to decode base64 JWT payload"),null)}catch(i){return t1("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function V8(t){const e=o3(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vr&&oA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await $o(t,nl(e,{idToken:n}));L(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?Kp(i.providerUserInfo):[],o=cA(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function lA(t){const e=be(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function uA(t,e){const n=await Hp(t,{},async()=>{const r=fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Gp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&hs(t.emulatorConfig.host)&&(l.credentials="include"),Wp.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dA(t,e){return wr(t,"POST","/v2/accounts:revokeToken",_r(t,e))}/**
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
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):V8(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=V8(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Bi;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Dn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ot{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new aA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $o(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sA(this,e)}reload(){return lA(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await $o(this,iA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:p,providerData:y,stsTokenManager:v}=n;L(d&&v,e,"internal-error");const _=Bi.fromJSON(this.name,v);L(typeof d=="string",e,"internal-error"),Dn(r,e.name),Dn(i,e.name),L(typeof h=="boolean",e,"internal-error"),L(typeof p=="boolean",e,"internal-error"),Dn(s,e.name),Dn(o,e.name),Dn(a,e.name),Dn(l,e.name),Dn(c,e.name),Dn(u,e.name);const g=new Ot({uid:d,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:_,createdAt:c,lastLoginAt:u});return y&&Array.isArray(y)&&(g.providerData=y.map(m=>({...m}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bi;i.updateFromServerResponse(n);const s=new Ot({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await rl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Kp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Bi;a.updateFromIdToken(r);const l=new Ot({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const U8=new Map;function Cn(t){An(t instanceof Function,"Expected a class definition");let e=U8.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,U8.set(t,e),e)}/**
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
 */class qp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qp.type="NONE";const B8=qp;/**
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
 */function n1(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=n1(this.userKey,i.apiKey,s),this.fullPersistenceKey=n1("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await nl(this.auth,{idToken:e}).catch(()=>{});return n?Ot._fromGetAccountInfoResponse(this.auth,n,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zi(Cn(B8),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cn(B8);const o=n1(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const h=await nl(e,{idToken:u}).catch(()=>{});if(!h)break;d=await Ot._fromGetAccountInfoResponse(e,h,u)}else d=Ot._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new zi(s,e,r))}}/**
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
 */function z8(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(em(e))return"Blackberry";if(tm(e))return"Webos";if(Qp(e))return"Safari";if((e.includes("chrome/")||Xp(e))&&!e.includes("edge/"))return"Chrome";if(Zp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yp(t=Ye()){return/firefox\//i.test(t)}function Qp(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xp(t=Ye()){return/crios\//i.test(t)}function Jp(t=Ye()){return/iemobile/i.test(t)}function Zp(t=Ye()){return/android/i.test(t)}function em(t=Ye()){return/blackberry/i.test(t)}function tm(t=Ye()){return/webos/i.test(t)}function a3(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hA(t=Ye()){var e;return a3(t)&&!!((e=window.navigator)!=null&&e.standalone)}function fA(){return hT()&&document.documentMode===10}function nm(t=Ye()){return a3(t)||Zp(t)||tm(t)||em(t)||/windows phone/i.test(t)||Jp(t)}/**
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
 */function rm(t,e=[]){let n;switch(t){case"Browser":n=z8(Ye());break;case"Worker":n=`${z8(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class pA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mA(t,e={}){return wr(t,"GET","/v2/passwordPolicy",_r(t,e))}/**
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
 */const gA=6;class CA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??gA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class yA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j8(this),this.idTokenSubscription=new j8(this),this.beforeStateQueue=new pA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nl(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(_n(this));const n=e?be(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mA(this),n=new CA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&KP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function si(t){return be(t)}class j8{constructor(e){this.auth=e,this.observer=null,this.addObserver=wT(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vA(t){Kl=t}function im(t){return Kl.loadJS(t)}function _A(){return Kl.recaptchaEnterpriseScript}function wA(){return Kl.gapiScript}function EA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class SA{constructor(){this.enterprise=new TA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const IA="recaptcha-enterprise",sm="NO_RECAPTCHA";class kA{constructor(e){this.type=IA,this.auth=si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nA(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;F8(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(sm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new SA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&F8(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_A();l.length!==0&&(l+=a),im(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ms(t,e,n,r=!1,i=!1){const s=new kA(t);let o;if(i)o=sm;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $8(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ms(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ms(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Ms(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await Ms(t,e,n,!1,!0);return r(t,u)}return Promise.reject(l)})}else{const a=await Ms(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}/**
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
 */function xA(t,e){const n=I4(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qr(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function PA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AA(t,e,n){const r=si(t);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=om(e),{host:o,port:a}=RA(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(qr(c,r.config.emulator)&&qr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,hs(o)?(pf(`${s}//${o}${l}`),mf("Auth",!0)):i||NA()}function om(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RA(t){const e=om(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:W8(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:W8(o)}}}function W8(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class l3{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function bA(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function MA(t,e){return ua(t,"POST","/v1/accounts:signInWithPassword",_r(t,e))}/**
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
 */async function DA(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}async function OA(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}/**
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
 */class Wo extends l3{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $8(e,n,"signInWithPassword",MA,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return DA(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $8(e,r,"signUpPassword",bA,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return OA(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ji(t,e){return ua(t,"POST","/v1/accounts:signInWithIdp",_r(t,e))}/**
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
 */const LA="http://localhost";class ei extends l3{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ji(e,n)}buildRequest(){const e={requestUri:LA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fs(n)}return e}}/**
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
 */function FA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VA(t){const e=zs(js(t)).link,n=e?zs(js(e)).deep_link_id:null,r=zs(js(t)).deep_link_id;return(r?zs(js(r)).link:null)||r||n||e||t}class c3{constructor(e){const n=zs(js(e)),r=n.apiKey??null,i=n.oobCode??null,s=FA(n.mode??null);L(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=VA(e);try{return new c3(n)}catch{return null}}}/**
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
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=c3.parseLink(n);return L(r,"argument-error"),Wo._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class da extends am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends da{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class zn extends da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class jn extends da{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
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
 */class $n extends da{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
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
 */async function UA(t,e){return ua(t,"POST","/v1/accounts:signUp",_r(t,e))}/**
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
 */class pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ot._fromIdTokenResponse(e,r,i),o=H8(r);return new pr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=H8(r);return new pr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function H8(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function BA(t){var i;if(vt(t.app))return Promise.reject(_n(t));const e=si(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new pr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await UA(e,{returnSecureToken:!0}),r=await pr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class il extends vr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new il(e,n,r,i)}}function lm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,s,e,r):s})}async function zA(t,e,n=!1){const r=await $o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pr._forOperation(t,"link",r)}/**
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
 */async function jA(t,e,n=!1){const{auth:r}=t;if(vt(r.app))return Promise.reject(_n(r));const i="reauthenticate";try{const s=await $o(t,lm(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=o3(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),pr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
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
 */async function cm(t,e,n=!1){if(vt(t.app))return Promise.reject(_n(t));const r="signIn",i=await lm(t,r,e),s=await pr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $A(t,e){return cm(si(t),e)}/**
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
 */async function WA(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function HA(t,e,n){return vt(t.app)?Promise.reject(_n(t)):$A(be(t),Cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&WA(t),r})}function GA(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function KA(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function qA(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function YA(t){return be(t).signOut()}const sl="__sak";/**
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
 */class um{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sl,"1"),this.storage.removeItem(sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const QA=1e3,XA=10;class dm extends um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dm.type="LOCAL";const JA=dm;/**
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
 */class hm extends um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hm.type="SESSION";const fm=hm;/**
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
 */function ZA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await ZA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
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
 */function u3(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=u3("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function on(){return window}function tR(t){on().location.href=t}/**
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
 */function pm(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function nR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function iR(){return pm()?self:null}/**
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
 */const mm="firebaseLocalStorageDb",sR=1,ol="firebaseLocalStorage",gm="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yl(t,e){return t.transaction([ol],e?"readwrite":"readonly").objectStore(ol)}function oR(){const t=indexedDB.deleteDatabase(mm);return new ha(t).toPromise()}function Fu(){const t=indexedDB.open(mm,sR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ol,{keyPath:gm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ol)?e(r):(r.close(),await oR(),e(await Fu()))})})}async function G8(t,e,n){const r=Yl(t,!0).put({[gm]:e,value:n});return new ha(r).toPromise()}async function aR(t,e){const n=Yl(t,!1).get(e),r=await new ha(n).toPromise();return r===void 0?null:r.value}function K8(t,e){const n=Yl(t,!0).delete(e);return new ha(n).toPromise()}const lR=800,cR=3;class Cm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await nR(),!this.activeServiceWorker)return;this.sender=new eR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fu();return await G8(e,sl,"1"),await K8(e,sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>G8(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>K8(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yl(i,!1).getAll();return new ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cm.type="LOCAL";const uR=Cm;new ca(3e4,6e4);/**
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
 */function dR(t,e){return e?Cn(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class d3 extends l3{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hR(t){return cm(t.auth,new d3(t),t.bypassAuthState)}function fR(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),jA(n,new d3(t),t.bypassAuthState)}async function pR(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),zA(n,new d3(t),t.bypassAuthState)}/**
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
 */class ym{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return fR;default:jt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mR=new ca(2e3,1e4);class Ai extends ym{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=u3();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mR.get())};e()}}Ai.currentPopupAction=null;/**
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
 */const gR="pendingRedirect",r1=new Map;class CR extends ym{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=r1.get(this.auth._key());if(!e){try{const r=await yR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}r1.set(this.auth._key(),e)}return this.bypassAuthState||r1.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yR(t,e){const n=wR(e),r=_R(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vR(t,e){r1.set(t._key(),e)}function _R(t){return Cn(t._redirectPersistence)}function wR(t){return n1(gR,t.config.apiKey,t.name)}async function ER(t,e,n=!1){if(vt(t.app))return Promise.reject(_n(t));const r=si(t),i=dR(r,e),o=await new CR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SR=10*60*1e3;class TR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vm(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SR&&this.cachedEventUids.clear(),this.cachedEventUids.has(q8(e))}saveEventToCache(e){this.cachedEventUids.add(q8(e)),this.lastProcessedEventTime=Date.now()}}function q8(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vm(t);default:return!1}}/**
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
 */async function kR(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
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
 */const xR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PR=/^https?/;async function AR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kR(t);for(const n of e)try{if(RR(n))return}catch{}jt(t,"unauthorized-domain")}function RR(t){const e=Ou(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PR.test(n))return!1;if(xR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NR=new ca(3e4,6e4);function Y8(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bR(t){return new Promise((e,n)=>{var i,s,o;function r(){Y8(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Y8(),n(sn(t,"network-request-failed"))},timeout:NR.get()})}if((s=(i=on().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=on().gapi)!=null&&o.load)r();else{const a=EA("iframefcb");return on()[a]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},im(`${wA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw i1=null,e})}let i1=null;function MR(t){return i1=i1||bR(t),i1}/**
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
 */const DR=new ca(5e3,15e3),OR="__/auth/iframe",LR="emulator/auth/iframe",FR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UR(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?s3(e,LR):`https://${t.config.authDomain}/${OR}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=VR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fs(r).slice(1)}`}async function BR(t){const e=await MR(t),n=on().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:UR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=on().setTimeout(()=>{s(o)},DR.get());function l(){on().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const zR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jR=500,$R=600,WR="_blank",HR="http://localhost";class Q8{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GR(t,e,n,r=jR,i=$R){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...zR,width:r.toString(),height:i.toString(),top:s,left:o},c=Ye().toLowerCase();n&&(a=Xp(c)?WR:n),Yp(c)&&(e=e||HR,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if(hA(c)&&a!=="_self")return KR(e||"",a),new Q8(null);const d=window.open(e||"",a,u);L(d,t,"popup-blocked");try{d.focus()}catch{}return new Q8(d)}function KR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qR="__/auth/handler",YR="emulator/auth/handler",QR=encodeURIComponent("fac");async function X8(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof am){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof da){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${QR}=${encodeURIComponent(l)}`:"";return`${XR(t)}?${fs(a).slice(1)}${c}`}function XR({config:t}){return t.emulator?s3(t,YR):`https://${t.authDomain}/${qR}`}/**
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
 */const Y0="webStorageSupport";class JR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fm,this._completeRedirectFn=ER,this._overrideRedirectResult=vR}async _openPopup(e,n,r,i){var o;An((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await X8(e,n,r,Ou(),i);return GR(e,s,u3())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await X8(e,n,r,Ou(),i);return tR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BR(e),r=new TR(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Y0,{type:Y0},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Y0];s!==void 0&&n(!!s),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nm()||Qp()||a3()}}const ZR=JR;var J8="@firebase/auth",Z8="1.11.0";/**
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
 */class eN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nN(t){ts(new Yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rm(t)},c=new yA(r,i,s,l);return PA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Yr("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(r=>new eN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(J8,Z8,tN(t)),rr(J8,Z8,"esm2020")}/**
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
 */const rN=5*60,iN=ff("authIdTokenMaxAge")||rN;let e6=null;const sN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iN)return;const i=n==null?void 0:n.token;e6!==i&&(e6=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oN(t=Ef()){const e=I4(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xA(t,{popupRedirectResolver:ZR,persistence:[uR,JA,fm]}),r=ff("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sN(s.toString());KA(n,o,()=>o(n.currentUser)),GA(n,a=>o(a))}}const i=df("auth");return i&&AA(n,`http://${i}`),n}function aN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}vA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nN("Browser");const lN={apiKey:"AIzaSyCEoRJn_5dH549cU033cIg7zC3QZ1F3c9s",authDomain:"classroom-feed-2ec8d.firebaseapp.com",databaseURL:"https://classroom-feed-2ec8d-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"classroom-feed-2ec8d",storageBucket:"classroom-feed-2ec8d.firebasestorage.app",messagingSenderId:"1024239225027",appId:"1:1024239225027:web:c98c60327f30ebbf643a76",measurementId:"G-XTB9M55X2X"},_m=wf(lN),Yt=zP(_m),Jt=oN(_m);async function t6(){return new Promise(t=>{const e=qA(Jt,async n=>{n||await BA(Jt),e(),t()})})}var cN=typeof Element<"u",uN=typeof Map=="function",dN=typeof Set=="function",hN=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function s1(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!s1(t[r],e[r]))return!1;return!0}var s;if(uN&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!s1(r.value[1],e.get(r.value[0])))return!1;return!0}if(dN&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(hN&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(cN&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!s1(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var fN=function(e,n){try{return s1(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const pN=al(fN);var mN=function(t,e,n,r,i,s,o,a){if(!t){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,s,o,a],u=0;l=new Error(e.replace(/%s/g,function(){return c[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},gN=mN;const n6=al(gN);var CN=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var u=o[c];if(!l(u))return!1;var d=e[u],h=n[u];if(s=r?r.call(i,d,h,u):void 0,s===!1||s===void 0&&d!==h)return!1}return!0};const yN=al(CN);var wm=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(wm||{}),Q0={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},r6=Object.values(wm),h3={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},vN=Object.entries(h3).reduce((t,[e,n])=>(t[n]=e,t),{}),Lt="data-rh",$i={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Wi=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},_N=t=>{let e=Wi(t,"title");const n=Wi(t,$i.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Wi(t,$i.DEFAULT_TITLE);return e||r||void 0},wN=t=>Wi(t,$i.ON_CHANGE_CLIENT_STATE)||(()=>{}),X0=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),EN=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const a=i[s].toLowerCase();if(t.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),SN=t=>console&&typeof console.warn=="function"&&console.warn(t),Ds=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&SN(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(l=>{let c;const u=Object.keys(l);for(let h=0;h<u.length;h+=1){const p=u[h],y=p.toLowerCase();e.indexOf(y)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(y==="rel"&&l[y].toLowerCase()==="stylesheet")&&(c=y),e.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(c=p)}if(!c||!l[c])return!1;const d=l[c].toLowerCase();return r[c]||(r[c]={}),o[c]||(o[c]={}),r[c][d]?!1:(o[c][d]=!0,!0)}).reverse().forEach(l=>i.push(l));const a=Object.keys(o);for(let l=0;l<a.length;l+=1){const c=a[l],u={...r[c],...o[c]};r[c]=u}return i},[]).reverse()},TN=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},IN=t=>({baseTag:EN(["href"],t),bodyAttributes:X0("bodyAttributes",t),defer:Wi(t,$i.DEFER),encode:Wi(t,$i.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:X0("htmlAttributes",t),linkTags:Ds("link",["rel","href"],t),metaTags:Ds("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Ds("noscript",["innerHTML"],t),onChangeClientState:wN(t),scriptTags:Ds("script",["src","innerHTML"],t),styleTags:Ds("style",["cssText"],t),title:_N(t),titleAttributes:X0("titleAttributes",t),prioritizeSeoTags:TN(t,$i.PRIORITIZE_SEO_TAGS)}),Em=t=>Array.isArray(t)?t.join(""):t,kN=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},J0=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(kN(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},i6=(t,e)=>({...t,[e]:void 0}),xN=["noscript","script","style"],Vu=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Sm=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),PN=(t,e,n,r)=>{const i=Sm(n),s=Em(e);return i?`<${t} ${Lt}="true" ${i}>${Vu(s,r)}</${t}>`:`<${t} ${Lt}="true">${Vu(s,r)}</${t}>`},AN=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,u)=>{const d=typeof s[u]>"u"?u:`${u}="${Vu(s[u],n)}"`;return c?`${c} ${d}`:d},""),a=s.innerHTML||s.cssText||"",l=xN.indexOf(t)===-1;return`${r}<${t} ${Lt}="true" ${o}${l?"/>":`>${a}</${t}>`}`},""),Tm=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=h3[r];return n[i||r]=t[r],n},e),RN=(t,e,n)=>{const r={key:e,[Lt]:!0},i=Tm(n,r);return[bt.createElement("title",i,e)]},o1=(t,e)=>e.map((n,r)=>{const i={key:r,[Lt]:!0};return Object.keys(n).forEach(s=>{const a=h3[s]||s;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:l}}else i[a]=n[s]}),bt.createElement(t,i)}),gt=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>RN(t,e.title,e.titleAttributes),toString:()=>PN(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Tm(e),toString:()=>Sm(e)};default:return{toComponent:()=>o1(t,e),toString:()=>AN(t,e,n)}}},NN=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=J0(t,Q0.meta),s=J0(e,Q0.link),o=J0(n,Q0.script);return{priorityMethods:{toComponent:()=>[...o1("meta",i.priority),...o1("link",s.priority),...o1("script",o.priority)],toString:()=>`${gt("meta",i.priority,r)} ${gt("link",s.priority,r)} ${gt("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},bN=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:a="",titleAttributes:l,prioritizeSeoTags:c}=t;let{linkTags:u,metaTags:d,scriptTags:h}=t,p={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:h}=NN(t)),{priority:p,base:gt("base",e,r),bodyAttributes:gt("bodyAttributes",n,r),htmlAttributes:gt("htmlAttributes",i,r),link:gt("link",u,r),meta:gt("meta",d,r),noscript:gt("noscript",s,r),script:gt("script",h,r),style:gt("style",o,r),title:gt("title",{title:a,titleAttributes:l},r)}},Uu=bN,Fa=[],Im=!!(typeof window<"u"&&window.document&&window.document.createElement),Bu=class{constructor(t,e){un(this,"instances",[]);un(this,"canUseDOM",Im);un(this,"context");un(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Fa:this.instances,add:t=>{(this.canUseDOM?Fa:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Fa:this.instances).indexOf(t);(this.canUseDOM?Fa:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Uu({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},MN={},km=bt.createContext(MN),Hi,xm=(Hi=class extends S.Component{constructor(n){super(n);un(this,"helmetData");this.helmetData=new Bu(this.props.context||{},Hi.canUseDOM)}render(){return bt.createElement(km.Provider,{value:this.helmetData.value},this.props.children)}},un(Hi,"canUseDOM",Im),Hi),ci=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${Lt}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(a=>{const l=document.createElement(t);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")l.innerHTML=a.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const u=c,d=typeof a[u]>"u"?"":a[u];l.setAttribute(c,d)}l.setAttribute(Lt,"true"),i.some((c,u)=>(o=u,l.isEqualNode(c)))?i.splice(o,1):s.push(l)}),i.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),s.forEach(a=>n.appendChild(a)),{oldTags:i,newTags:s}},zu=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(Lt),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const a of o){const l=e[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),i.indexOf(a)===-1&&i.push(a);const c=s.indexOf(a);c!==-1&&s.splice(c,1)}for(let a=s.length-1;a>=0;a-=1)n.removeAttribute(s[a]);i.length===s.length?n.removeAttribute(Lt):n.getAttribute(Lt)!==o.join(",")&&n.setAttribute(Lt,o.join(","))},DN=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=Em(t)),zu("title",e)},s6=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:a,onChangeClientState:l,scriptTags:c,styleTags:u,title:d,titleAttributes:h}=t;zu("body",r),zu("html",i),DN(d,h);const p={baseTag:ci("base",n),linkTags:ci("link",s),metaTags:ci("meta",o),noscriptTags:ci("noscript",a),scriptTags:ci("script",c),styleTags:ci("style",u)},y={},v={};Object.keys(p).forEach(_=>{const{newTags:g,oldTags:m}=p[_];g.length&&(y[_]=g),m.length&&(v[_]=p[_].oldTags)}),e&&e(),l(t,y,v)},Os=null,ON=t=>{Os&&cancelAnimationFrame(Os),t.defer?Os=requestAnimationFrame(()=>{s6(t,()=>{Os=null})}):(s6(t),Os=null)},LN=ON,o6=class extends S.Component{constructor(){super(...arguments);un(this,"rendered",!1)}shouldComponentUpdate(e){return!yN(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=IN(e.get().map(s=>{const o={...s.props};return delete o.context,o}));xm.canUseDOM?LN(i):Uu&&(r=Uu(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Z0,FN=(Z0=class extends S.Component{shouldComponentUpdate(t){return!pN(i6(this.props,"helmetData"),i6(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return n6(r6.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${r6.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),n6(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return bt.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((l,c)=>(l[vN[c]||c]=s[c],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,i),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Bu)){const i=r;r=new Bu(i.context,!0),delete n.helmetData}return r?bt.createElement(o6,{...n,context:r.value}):bt.createElement(km.Consumer,null,i=>bt.createElement(o6,{...n,context:i}))}},un(Z0,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Z0);const Pm=[{key:"like",label:"👍"},{key:"love",label:"❤️"},{key:"wow",label:"😮"},{key:"sad",label:"😢"}],Am=[{label:"1-1",code:"YKS-11-X7P4Q2"},{label:"1-2",code:"YKS-12-M4Q8D9"},{label:"1-3",code:"YKS-13-R9Z2T5"},{label:"1-4",code:"YKS-14-T6H7C3"},{label:"1-5",code:"YKS-15-B3N5Q8"},{label:"1-6",code:"YKS-16-W8K1L4"}];function a6(t){const e=Am.find(n=>n.code===t);return e?`${e.label} (${t})`:t}function VN(t){return(t.trim().match(/[^\s]+/g)||[]).length}function UN(t,e,n){return Math.max(e,Math.min(n,t))}function BN(){const[t,e]=S.useState(""),[n,r]=S.useState(!1),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,c]=S.useState(""),[u,d]=S.useState([]),[h,p]=S.useState("new"),[y,v]=S.useState(""),[_,g]=S.useState({allowPosting:!0,allowReactions:!0,allowComments:!0}),[m,C]=S.useState(!1),E=S.useRef({posts:null,settings:null}),[w,T]=S.useState(null),[x,I]=S.useState(!1),[O,M]=S.useState(null),ye=80,Ht=100,an=S.useMemo(()=>VN(o),[o]);async function Nn(N){try{await t6()}catch{}if(!N)return!1;if(Am.some(he=>he.code===N))return!0;const U=qt(Yt);let K=!1,_e=!1;try{const he=await K0(fr(U,`allowedRooms/${N}`));K=!!(he.exists()&&he.val()===!0)}catch{}try{_e=(await K0(fr(U,`rooms/${N}`))).exists()}catch{}return K||_e}async function ys(){const N=t==null?void 0:t.trim();if(N)try{if(I(!0),await t6(),!await Nn(N)){r(!1),T(null),d([]),M({type:"error",text:"Room code not recognized. Ask your teacher."});return}E.current.posts&&(E.current.posts(),E.current.posts=null),E.current.settings&&(E.current.settings(),E.current.settings=null),r(!0),T(N),d([]),localStorage.setItem("sns.joinedRoom",N),M({type:"success",text:`Joined ${a6(N)}`});const K=qt(Yt,`rooms/${N}/posts`),_e=MP(K,bP(300)),he=e1(_e,Gt=>{const cn=Gt.val()||{},Me=Object.entries(cn).map(([Sr,bn])=>({id:Sr,...bn}));Me.sort((Sr,bn)=>bn.createdAt-Sr.createdAt),d(Me)},Gt=>{console.error("Posts subscribe failed:",Gt),M({type:"error",text:"Could not load posts for this room."})}),me=qt(Yt,`rooms/${N}/settings`),ln=e1(me,Gt=>{const cn=Gt.val()||{};g({allowPosting:!0,allowReactions:!0,allowComments:!0,...cn})},Gt=>{console.error("Settings subscribe failed:",Gt)});E.current.posts=he,E.current.settings=ln}catch(U){console.error("Failed to join room",U),M({type:"error",text:"Could not join room (network or permissions). Try again or check DB rules."})}finally{I(!1)}}S.useEffect(()=>{let N=!0;return(async()=>N&&t&&await Nn(t)&&await ys())(),()=>{N=!1,E.current.posts&&E.current.posts(),E.current.settings&&E.current.settings()}},[]),S.useEffect(()=>{var he;const N=Jt.currentUser;if(!N){C(!1);return}const U=!!((he=N.providerData)!=null&&he.some(me=>me.providerId==="password"));C(U);const K=qt(Yt,`admins/${N.uid}`),_e=e1(K,me=>{const ln=me.val()===!0;C(U||ln)},me=>{console.warn("admins flag read failed",(me==null?void 0:me.code)||me),C(U)});return()=>_e()},[Jt.currentUser]);const Er=S.useMemo(()=>{let N=Array.isArray(u)?[...u]:[];if(y&&y.trim()){const U=y.trim().toLowerCase();N=N.filter(K=>{const _e=(K.author||"").toLowerCase(),he=(K.text||"").toLowerCase(),me=Array.isArray(K.hashtags)?K.hashtags.join(" ").toLowerCase():(K.hashtag||"").toLowerCase();return _e.includes(U)||he.includes(U)||me.includes(U)})}return h==="reactions"?N.sort((U,K)=>ie(K)-ie(U)||(K.createdAt||0)-(U.createdAt||0)):N.sort((U,K)=>(K.createdAt||0)-(U.createdAt||0)),N},[u,h,y]);function ie(N){return Object.values(N.reactions||{}).reduce((U,K)=>U+(K||0),0)}async function R(N){var me;if(N.preventDefault(),!_.allowPosting&&!m||!i.trim()||!o.trim())return;const U=w||t;if(!U){alert("Join a room first.");return}const K=(l||"").split(",").map(ln=>ln.trim().toLowerCase()).filter(Boolean),_e=Array.from(new Set(K)),he={authorId:((me=Jt.currentUser)==null?void 0:me.uid)||"(anon)",author:i.trim(),text:o.trim(),hashtag:_e.join(", "),hashtags:_e,createdAt:Date.now(),reactions:Object.fromEntries(Pm.map(ln=>[ln.key,0])),comments:{}};await O8(qt(Yt,`rooms/${U}/posts`),he),a(""),c("")}async function V(N,U){if(!_.allowReactions&&!m)return;const K=w||t;if(!K)return;const _e=qt(Yt,`rooms/${K}/posts/${N}/reactions/${U}`);await HP(_e,he=>(he||0)+1)}async function B(N,U,K){var me;if(!_.allowComments&&!m||!K.trim())return;const _e=w||t;if(!_e)return;const he={authorId:((me=Jt.currentUser)==null?void 0:me.uid)||"(anon)",author:(U==null?void 0:U.trim())||"(anon)",content:K.trim(),at:Date.now()};await O8(qt(Yt,`rooms/${_e}/posts/${N}/comments`),he)}function se(N){return ie(N)}function ve(N){return'"'+String(N??"").replace(/"/g,'""')+'"'}async function oi(N){try{const K=(await K0(qt(Yt,`rooms/${N}/posts`))).val()||{},_e=Object.entries(K).map(([Me,Sr])=>({id:Me,...Sr})),me=[["id","authorId","author","text","hashtags","createdAt","like","love","wow","sad","commentsCount"].join(",")];for(const Me of _e){const Sr=Me.createdAt?new Date(Me.createdAt).toISOString():"",bn=Me.reactions||{},Rm=Me.comments?Object.keys(Me.comments).length:0,Nm=[Me.id,Me.authorId||"",Me.author||"",Me.text||"",Array.isArray(Me.hashtags)?Me.hashtags.join("|"):Me.hashtag||"",Sr,bn.like??0,bn.love??0,bn.wow??0,bn.sad??0,Rm].map(ve).join(",");me.push(Nm)}const ln=new Blob([me.join(`
`)],{type:"text/csv;charset=utf-8;"}),Gt=URL.createObjectURL(ln),cn=document.createElement("a");cn.href=Gt,cn.download=`${N}-posts.csv`,document.body.appendChild(cn),cn.click(),document.body.removeChild(cn),URL.revokeObjectURL(Gt)}catch(U){console.error("CSV download failed",U),alert("Could not download CSV.")}}async function It(N,U,K){try{await Mu(qt(Yt,`rooms/${N}/settings/${U}`),K),M({type:"success",text:`${U} set to ${String(K)}`})}catch(_e){console.error("Failed to update setting",U,_e),M({type:"error",text:`Could not update ${U}. Check database rules.`})}}async function vs(N){try{await Mu(qt(Yt,`rooms/${N}/posts`),null),M({type:"success",text:"All posts deleted for this room."})}catch(U){console.error("Failed to delete posts",U),M({type:"error",text:"Could not delete posts. Check database rules."})}}return A(W,{children:[f(xm,{children:A(FN,{children:[f("title",{children:"Yokote-Net"}),f("link",{rel:"icon",href:"/img/yokote.png"})]})}),A("div",{className:"min-h-screen bg-slate-50 text-slate-800",children:[f("header",{className:"sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200",children:A("div",{className:"max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[f("h1",{className:"text-2xl font-bold",children:"Yokote Net"}),A("div",{className:"flex flex-wrap items-center gap-2",children:[f("input",{type:"text",autoComplete:"off",className:"px-3 py-2 rounded-xl border border-slate-300 bg-white",value:t,onChange:N=>e(N.target.value),placeholder:"Enter secret room code",title:"Enter the secret code your teacher gave you"}),f("button",{type:"button",className:"px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-100",onClick:async()=>{await ys()},children:"Join Room"}),w&&A("span",{className:"text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1",children:["Joined ✓"," ",f("span",{className:"font-semibold",children:a6(w)})]}),f("div",{className:"flex items-center gap-2",children:f(WN,{})}),A("select",{className:"px-3 py-2 rounded-xl border border-slate-300 bg-white",value:h,onChange:N=>p(N.target.value),children:[f("option",{value:"new",children:"Sort: Newest"}),f("option",{value:"reactions",children:"Sort: Most Reactions"})]}),f("input",{className:"px-3 py-2 rounded-xl border border-slate-300 bg-white",placeholder:"Search posts…",value:y,onChange:N=>v(N.target.value)})]}),O&&f("div",{className:`mt-2 text-sm rounded-md px-3 py-2 border ${O.type==="success"?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-rose-50 text-rose-800 border-rose-200"}`,children:O.text})]})}),A("main",{className:"max-w-5xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6",children:[f("section",{className:"md:col-span-1",children:A("div",{className:"bg-white rounded-2xl shadow p-4 space-y-4",children:[f("h2",{className:"text-lg font-semibold",children:"Write a Post"}),f("input",{className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"Your name (e.g., Hana)",value:i,onChange:N=>s(N.target.value)}),f("textarea",{className:"w-full h-40 resize-y px-3 py-2 rounded-xl border border-slate-300",placeholder:"Write your 80–100 word message to the world…",value:o,onChange:N=>a(N.target.value)}),f(zN,{wordCount:an,min:ye,max:Ht}),f("input",{className:"w-full px-3 py-2 rounded-xl border border-slate-300",placeholder:"#hashtags (comma-separated, optional)",title:"Use commas to add multiple hashtags, e.g., nabekko,help",value:l,onChange:N=>c(N.target.value)}),f("button",{onClick:R,disabled:!_.allowPosting&&!m||!w,className:`w-full px-4 py-2 rounded-2xl font-semibold shadow ${(_.allowPosting||m)&&w?"bg-slate-900 text-white hover:bg-slate-800":"bg-slate-200 text-slate-500"}`,children:"Post"}),m&&A("div",{className:"pt-3 border-t border-slate-200 space-y-2",children:[!w&&f("p",{className:"text-xs text-slate-500",children:"Join a room to manage its settings."}),A("label",{className:"flex items-center gap-2",children:[f("input",{type:"checkbox",checked:!_.allowPosting,onChange:N=>{w&&It(w,"allowPosting",!N.target.checked)}}),f("span",{children:"Disable Posting"})]}),A("label",{className:"flex items-center gap-2",children:[f("input",{type:"checkbox",checked:!_.allowComments,onChange:N=>{w&&It(w,"allowComments",!N.target.checked)}}),f("span",{children:"Disable Comments"})]}),A("label",{className:"flex items-center gap-2",children:[f("input",{type:"checkbox",checked:!_.allowReactions,onChange:N=>{w&&It(w,"allowReactions",!N.target.checked)}}),f("span",{children:"Disable Reactions"})]}),A("div",{className:"space-y-2 pt-2",children:[A("button",{disabled:!w,className:`w-full px-4 py-2 rounded-2xl font-semibold shadow flex items-center justify-center gap-2 ${w?"bg-rose-600 text-white hover:bg-rose-500":"bg-slate-200 text-slate-500"}`,onClick:()=>{w&&confirm("Delete ALL posts in this room?")&&vs(w)},children:[f("span",{children:"🗑️"}),f("span",{children:"Delete All Posts"})]}),A("button",{disabled:!w,className:`w-full px-4 py-2 rounded-2xl font-semibold shadow flex items-center justify-center gap-2 ${w?"bg-sky-600 text-white hover:bg-sky-500":"bg-slate-200 text-slate-500"}`,onClick:async()=>{w&&await oi(w)},children:[f("span",{children:"⬇️"}),f("span",{children:"Download CSV"})]})]})]})]})}),f("section",{className:"md:col-span-2 space-y-4",children:Er.length===0?f(jN,{}):Er.map(N=>f($N,{post:N,onReact:V,onComment:B,allowReactions:_.allowReactions||m,allowComments:_.allowComments||m,total:se(N)},N.id))})]}),f("footer",{className:"max-w-5xl mx-auto px-4 pb-10 text-center text-sm text-slate-500",children:f("p",{children:"Enter the secret class code to join. All devices in the same code see the same live feed."})})]})]})}function zN({wordCount:t,min:e,max:n}){const r=UN((t-e)/(n-e)*100,0,100),i=t<e?"bg-sky-400":t<=n?"bg-emerald-500":"bg-rose-500";return A("div",{className:"text-sm flex items-center gap-2",children:[f("div",{className:"flex-1 h-2 bg-slate-200 rounded-full overflow-hidden",children:f("div",{className:`h-full ${i}`,style:{width:`${r}%`}})}),A("span",{className:"tabular-nums",children:[t," words"]})]})}function jN(){return A("div",{className:"bg-white rounded-2xl shadow p-8 text-center text-slate-500",children:[f("p",{className:"text-lg",children:"No posts yet. Invite students to write their 80–100 word message."}),f("p",{className:"mt-2",children:"You can temporarily disable reactions until everyone has posted."})]})}function $N({post:t,onReact:e,onComment:n,allowReactions:r,allowComments:i,total:s}){const[o,a]=S.useState(""),[l,c]=S.useState("");async function u(){i&&l.trim()&&(await n(t.id,o,l),c(""))}return A("article",{className:"bg-white rounded-2xl shadow p-4",children:[A("header",{className:"flex items-start justify-between",children:[A("div",{children:[f("h3",{className:"font-semibold text-slate-900",children:t.author}),f("time",{className:"text-xs text-slate-500",children:t.createdAt?new Date(t.createdAt).toLocaleString():""})]}),Array.isArray(t.hashtags)&&t.hashtags.length>0?f("div",{className:"flex flex-wrap gap-2",children:t.hashtags.map((d,h)=>f("span",{className:"text-sm text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3 py-1",children:d},h))}):t.hashtag?f("div",{className:"text-sm text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3 py-1",children:t.hashtag}):null]}),f("p",{className:"mt-3 leading-relaxed whitespace-pre-wrap",children:t.text}),A("div",{className:"mt-4 flex flex-wrap items-center gap-3",children:[Pm.map(d=>{var h;return A("button",{onClick:()=>e(t.id,d.key),disabled:!r,className:`px-3 py-1 rounded-full border shadow-sm ${r?"hover:bg-slate-50":"opacity-50 cursor-not-allowed"}`,title:d.key,children:[f("span",{className:"mr-1",children:d.label}),f("span",{className:"tabular-nums text-slate-700",children:((h=t.reactions)==null?void 0:h[d.key])??0})]},d.key)}),A("span",{className:"text-sm text-slate-500 ml-auto",children:["Total: ",s]})]}),A("div",{className:"mt-4 border-t pt-3",children:[f("h4",{className:"font-medium text-slate-900 mb-2",children:"Comments"}),t.comments?f("ul",{className:"space-y-2 mb-3",children:Object.entries(t.comments).map(([d,h])=>A("li",{className:"text-sm",children:[f("span",{className:"font-semibold",children:h.author}),": ",h.content]},d))}):f("p",{className:"text-sm text-slate-500 mb-3",children:"No comments yet."}),A("div",{className:"flex gap-2",children:[f("input",{className:`w-36 px-3 py-2 rounded-xl border border-slate-300 ${i?"":"opacity-50 cursor-not-allowed"}`,placeholder:"Your name",value:o,onChange:d=>a(d.target.value),disabled:!i}),f("input",{className:`flex-1 px-3 py-2 rounded-xl border border-slate-300 ${i?"":"opacity-50 cursor-not-allowed"}`,placeholder:"Write a comment…",value:l,onChange:d=>c(d.target.value),onKeyDown:d=>d.key==="Enter"&&u(),disabled:!i}),f("button",{onClick:u,disabled:!i,className:`px-4 py-2 rounded-xl font-semibold shadow ${i?"bg-slate-900 text-white hover:bg-slate-800":"bg-slate-200 text-slate-500"}`,children:"Comment"})]})]})]})}function WN(){var o;const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(()=>Jt.currentUser||null);return S.useEffect(()=>{const a=Jt.onAuthStateChanged(l=>s(l));return()=>a()},[]),i&&((o=i.providerData)!=null&&o.some(a=>a.providerId==="password"))?A("div",{className:"flex items-center gap-2",children:[f("span",{className:"text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1",children:"Admin logged in"}),f("button",{className:"px-3 py-1 rounded-xl border border-slate-300 hover:bg-slate-100 text-sm",onClick:()=>YA(Jt),children:"Logout"})]}):A("details",{className:"ml-2",children:[f("summary",{className:"cursor-pointer text-sm text-slate-600",children:"Admin login"}),A("div",{className:"mt-2 flex flex-wrap gap-2 items-center",children:[f("input",{className:"px-2 py-1 rounded border border-slate-300 text-sm",placeholder:"email",value:t,onChange:a=>e(a.target.value)}),f("input",{className:"px-2 py-1 rounded border border-slate-300 text-sm",placeholder:"password",type:"password",value:n,onChange:a=>r(a.target.value)}),f("button",{className:"px-3 py-1 rounded-xl border border-slate-300 hover:bg-slate-100 text-sm",onClick:async()=>{try{await HA(Jt,t,n)}catch(a){alert("Login failed: "+((a==null?void 0:a.message)||a))}},children:"Login"})]})]})}function HN(){return f(Ky,{children:A(Wy,{children:[f(ui,{path:"/",element:f(jS,{})}),f(ui,{path:"/contact",element:f(HS,{})}),f(ui,{path:"/faq",element:f(YS,{})}),f(ui,{path:"/yokote-net",element:f(BN,{})}),f(ui,{path:"*",element:f(QS,{})})]})})}const GN={user:JSON.parse(localStorage.getItem("user"))||null,isLoading:!1,isError:!1},KN=(t,e)=>{switch(e.type){case"LOG_IN":return localStorage.setItem("user",JSON.stringify(e.payload)),{...t,isLoading:!1,isError:!1,user:e.payload};case"LOADING":return{...t,isLoading:!0,isError:!1};case"SUCCESS":return{...t,isLoading:!1,isError:!1};case"ERROR":return{...t,isLoading:!1,isError:!0};case"LOG_OUT":return localStorage.removeItem("user"),{...t,isLoading:!1,isError:!1,user:null};default:return t}},qN=S.createContext(null),{Provider:YN}=qN;function QN({children:t}){const[e,n]=S.useReducer(KN,GN);return f(YN,{value:{state:e,dispatchUser:n},children:t})}const XN={show:!1,message:"",variant:""},JN=(t,e)=>{switch(e.type){case"SHOW":return{show:!0,message:e.payload,variant:e.variant};case"HIDE":return{show:!1,message:"",variant:""};default:return t}},ZN=S.createContext(null),{Provider:eb}=ZN,tb=({children:t})=>{const[e,n]=S.useReducer(JN,XN);return f(eb,{value:{alertState:e,dispatchAlert:n},children:t})};ec.createRoot(document.getElementById("root")).render(f(bt.StrictMode,{children:f(tb,{children:f(QN,{children:f(HN,{})})})}));
