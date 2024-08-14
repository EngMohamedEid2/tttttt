import { toRefs, ref, computed, onMounted, onUnmounted, watch, openBlock, createElementBlock, mergeProps, hasInjectionContext, inject, version, watchEffect, getCurrentInstance, toValue, reactive, toRaw, isRef, isReactive, toRef, defineComponent, provide, defineAsyncComponent, h as h$1, unref, shallowReactive, Suspense, nextTick, Transition, useSSRContext, shallowRef, onServerPrefetch, withAsyncContext, createVNode, resolveDynamicComponent, withCtx, createBlock, Fragment, renderList, createApp, effectScope, withModifiers, getCurrentScope, onScopeDispose, onErrorCaptured, markRaw, isReadonly, isShallow } from 'vue';
import { u as useRuntimeConfig$1, e as joinRelativeURL, $ as $fetch, f as withQuery, h as hasProtocol, p as parseURL, i as isScriptProtocol, j as joinURL, k as klona, l as hash, m as parse, n as getRequestHeader, o as defu, s as sanitizeStatusCode, q as defuFn, r as destr, t as isEqual, v as setCookie, x as getCookie, y as deleteCookie, z as encodeParam, A as createHooks, B as createError$1, C as toRouteMatcher, D as createRouter$1, E as withLeadingSlash, F as encodePath } from '../routes/api/index.mjs';
import { getActiveHead } from 'unhead';
import { defineHeadPlugin, composableNames } from '@unhead/shared';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import _ from 'lodash';
import axios from 'axios';
import { createI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import mitt from 'mitt';
import { toast } from 'vue3-toastify';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderVNode, ssrRenderTeleport, ssrRenderSuspense } from 'vue/server-renderer';
import { Icon as Icon$1 } from '@iconify/vue/dist/offline';
import { loadIcon } from '@iconify/vue';
import { Navigation, Autoplay } from 'swiper';
import { OnClickOutside } from '@vueuse/components';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$2] || (_globalThis$1[globalKey$2] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

function u(e){return -1!==[null,void 0,!1].indexOf(e)}function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function p(e){var t={exports:{}};return e(t,t.exports),t.exports}var d=p((function(e,t){e.exports=function(){var e=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function t(e){return e.split("").reverse().join("")}function r(e,t){return e.substring(0,t.length)===t}function i(e,t){return e.slice(-1*t.length)===t}function n(e,t,r){if((e[t]||e[r])&&e[t]===e[r])throw new Error(t)}function o(e){return "number"==typeof e&&isFinite(e)}function a(e,t){return e=e.toString().split("e"),(+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]+t:t)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]-t:-t))).toFixed(t)}function s(e,r,i,n,s,l,u,c,p,d,f,h){var m,v,g,b=h,y="",S="";return l&&(h=l(h)),!!o(h)&&(!1!==e&&0===parseFloat(h.toFixed(e))&&(h=0),h<0&&(m=!0,h=Math.abs(h)),!1!==e&&(h=a(h,e)),-1!==(h=h.toString()).indexOf(".")?(g=(v=h.split("."))[0],i&&(y=i+v[1])):g=h,r&&(g=t(g).match(/.{1,3}/g),g=t(g.join(t(r)))),m&&c&&(S+=c),n&&(S+=n),m&&p&&(S+=p),S+=g,S+=y,s&&(S+=s),d&&(S=d(S,b)),S)}function l(e,t,n,a,s,l,u,c,p,d,f,h){var m,v="";return f&&(h=f(h)),!(!h||"string"!=typeof h)&&(c&&r(h,c)&&(h=h.replace(c,""),m=!0),a&&r(h,a)&&(h=h.replace(a,"")),p&&r(h,p)&&(h=h.replace(p,""),m=!0),s&&i(h,s)&&(h=h.slice(0,-1*s.length)),t&&(h=h.split(t).join("")),n&&(h=h.replace(n,".")),m&&(v+="-"),""!==(v=(v+=h).replace(/[^0-9\.\-.]/g,""))&&(v=Number(v),u&&(v=u(v)),!!o(v)&&v))}function u(t){var r,i,o,a={};for(void 0===t.suffix&&(t.suffix=t.postfix),r=0;r<e.length;r+=1)if(void 0===(o=t[i=e[r]]))"negative"!==i||a.negativeBefore?"mark"===i&&"."!==a.thousand?a[i]=".":a[i]=!1:a[i]="-";else if("decimals"===i){if(!(o>=0&&o<8))throw new Error(i);a[i]=o;}else if("encoder"===i||"decoder"===i||"edit"===i||"undo"===i){if("function"!=typeof o)throw new Error(i);a[i]=o;}else {if("string"!=typeof o)throw new Error(i);a[i]=o;}return n(a,"mark","thousand"),n(a,"prefix","negative"),n(a,"prefix","negativeBefore"),a}function c(t,r,i){var n,o=[];for(n=0;n<e.length;n+=1)o.push(t[e[n]]);return o.push(i),r.apply("",o)}function p(e){if(!(this instanceof p))return new p(e);"object"==typeof e&&(e=u(e),this.to=function(t){return c(e,s,t)},this.from=function(t){return c(e,l,t)});}return p}();}));var f=c(p((function(e,t){!function(e){function t(e){return r(e)&&"function"==typeof e.from}function r(e){return "object"==typeof e&&"function"==typeof e.to}function i(e){e.parentElement.removeChild(e);}function n(e){return null!=e}function o(e){e.preventDefault();}function a(e){return e.filter((function(e){return !this[e]&&(this[e]=!0)}),{})}function s(e,t){return Math.round(e/t)*t}function l(e,t){var r=e.getBoundingClientRect(),i=e.ownerDocument,n=i.documentElement,o=g(i);return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),t?r.top+o.y-n.clientTop:r.left+o.x-n.clientLeft}function u(e){return "number"==typeof e&&!isNaN(e)&&isFinite(e)}function c(e,t,r){r>0&&(h(e,t),setTimeout((function(){m(e,t);}),r));}function p(e){return Math.max(Math.min(e,100),0)}function d(e){return Array.isArray(e)?e:[e]}function f(e){var t=(e=String(e)).split(".");return t.length>1?t[1].length:0}function h(e,t){e.classList&&!/\s/.test(t)?e.classList.add(t):e.className+=" "+t;}function m(e,t){e.classList&&!/\s/.test(t)?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ");}function v(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function g(e){var t=void 0!==window.pageXOffset,r="CSS1Compat"===(e.compatMode||"");return {x:t?window.pageXOffset:r?e.documentElement.scrollLeft:e.body.scrollLeft,y:t?window.pageYOffset:r?e.documentElement.scrollTop:e.body.scrollTop}}function b(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function y(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0;}});window.addEventListener("test",null,t);}catch(e){}return e}function S(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function x(e,t){return 100/(t-e)}function w(e,t,r){return 100*t/(e[r+1]-e[r])}function E(e,t){return w(e,e[0]<0?t+Math.abs(e[0]):t-e[0],0)}function P(e,t){return t*(e[1]-e[0])/100+e[0]}function N(e,t){for(var r=1;e>=t[r];)r+=1;return r}function C(e,t,r){if(r>=e.slice(-1)[0])return 100;var i=N(r,e),n=e[i-1],o=e[i],a=t[i-1],s=t[i];return a+E([n,o],r)/x(a,s)}function k(e,t,r){if(r>=100)return e.slice(-1)[0];var i=N(r,t),n=e[i-1],o=e[i],a=t[i-1];return P([n,o],(r-a)*x(a,t[i]))}function V(e,t,r,i){if(100===i)return i;var n=N(i,e),o=e[n-1],a=e[n];return r?i-o>(a-o)/2?a:o:t[n-1]?e[n-1]+s(i-e[n-1],t[n-1]):i}var A,M;e.PipsMode=void 0,(M=e.PipsMode||(e.PipsMode={})).Range="range",M.Steps="steps",M.Positions="positions",M.Count="count",M.Values="values",e.PipsType=void 0,(A=e.PipsType||(e.PipsType={}))[A.None=-1]="None",A[A.NoValue=0]="NoValue",A[A.LargeValue=1]="LargeValue",A[A.SmallValue=2]="SmallValue";var L=function(){function e(e,t,r){var i;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var n=[];for(Object.keys(e).forEach((function(t){n.push([d(e[t]),t]);})),n.sort((function(e,t){return e[0][0]-t[0][0]})),i=0;i<n.length;i++)this.handleEntryPoint(n[i][1],n[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i]);}return e.prototype.getDistance=function(e){for(var t=[],r=0;r<this.xNumSteps.length-1;r++)t[r]=w(this.xVal,e,r);return t},e.prototype.getAbsoluteDistance=function(e,t,r){var i,n=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[n+1];)n++;else e===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||e!==this.xPct[n+1]||n++,null===t&&(t=[]);var o=1,a=t[n],s=0,l=0,u=0,c=0;for(i=r?(e-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-e)/(this.xPct[n+1]-this.xPct[n]);a>0;)s=this.xPct[n+1+c]-this.xPct[n+c],t[n+c]*o+100-100*i>100?(l=s*i,o=(a-100*i)/t[n+c],i=1):(l=t[n+c]*s/100*o,o=0),r?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),a=t[n+c]*o;return e+u},e.prototype.toStepping=function(e){return e=C(this.xVal,this.xPct,e)},e.prototype.fromStepping=function(e){return k(this.xVal,this.xPct,e)},e.prototype.getStep=function(e){return e=V(this.xPct,this.xSteps,this.snap,e)},e.prototype.getDefaultStep=function(e,t,r){var i=N(e,this.xPct);return (100===e||t&&e===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/r},e.prototype.getNearbySteps=function(e){var t=N(e,this.xPct);return {stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},e.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(f);return Math.max.apply(null,e)},e.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},e.prototype.convert=function(e){return this.getStep(this.toStepping(e))},e.prototype.handleEntryPoint=function(e,t){var r;if(!u(r="min"===e?0:"max"===e?100:parseFloat(e))||!u(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(t[0]);var i=Number(t[1]);r?this.xSteps.push(!isNaN(i)&&i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0);},e.prototype.handleStepPoint=function(e,t){if(t)if(this.xVal[e]!==this.xVal[e+1]){this.xSteps[e]=w([this.xVal[e],this.xVal[e+1]],t,0)/x(this.xPct[e],this.xPct[e+1]);var r=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],i=Math.ceil(Number(r.toFixed(3))-1),n=this.xVal[e]+this.xNumSteps[e]*i;this.xHighestCompleteStep[e]=n;}else this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];},e}(),U={to:function(e){return void 0===e?"":e.toFixed(2)},from:Number},O={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},D={tooltips:".__tooltips",aria:".__aria"};function j(e,t){if(!u(t))throw new Error("noUiSlider: 'step' is not numeric.");e.singleStep=t;}function F(e,t){if(!u(t))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=t;}function T(e,t){if(!u(t))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");e.keyboardMultiplier=t;}function z(e,t){if(!u(t))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=t;}function H(e,t){if("object"!=typeof t||Array.isArray(t))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===t.min||void 0===t.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");e.spectrum=new L(t,e.snap||!1,e.singleStep);}function q(e,t){if(t=d(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider: 'start' option is incorrect.");e.handles=t.length,e.start=t;}function R(e,t){if("boolean"!=typeof t)throw new Error("noUiSlider: 'snap' option must be a boolean.");e.snap=t;}function B(e,t){if("boolean"!=typeof t)throw new Error("noUiSlider: 'animate' option must be a boolean.");e.animate=t;}function _(e,t){if("number"!=typeof t)throw new Error("noUiSlider: 'animationDuration' option must be a number.");e.animationDuration=t;}function $(e,t){var r,i=[!1];if("lower"===t?t=[!0,!1]:"upper"===t&&(t=[!1,!0]),!0===t||!1===t){for(r=1;r<e.handles;r++)i.push(t);i.push(!1);}else {if(!Array.isArray(t)||!t.length||t.length!==e.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");i=t;}e.connect=i;}function X(e,t){switch(t){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Y(e,t){if(!u(t))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==t&&(e.margin=e.spectrum.getDistance(t));}function I(e,t){if(!u(t))throw new Error("noUiSlider: 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(t),!e.limit||e.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function W(e,t){var r;if(!u(t)&&!Array.isArray(t))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&2!==t.length&&!u(t[0])&&!u(t[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==t){for(Array.isArray(t)||(t=[t,t]),e.padding=[e.spectrum.getDistance(t[0]),e.spectrum.getDistance(t[1])],r=0;r<e.spectrum.xNumSteps.length-1;r++)if(e.padding[0][r]<0||e.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=t[0]+t[1],n=e.spectrum.xVal[0];if(i/(e.spectrum.xVal[e.spectrum.xVal.length-1]-n)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function G(e,t){switch(t){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function J(e,t){if("string"!=typeof t)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=t.indexOf("tap")>=0,i=t.indexOf("drag")>=0,n=t.indexOf("fixed")>=0,o=t.indexOf("snap")>=0,a=t.indexOf("hover")>=0,s=t.indexOf("unconstrained")>=0,l=t.indexOf("drag-all")>=0,u=t.indexOf("smooth-steps")>=0;if(n){if(2!==e.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Y(e,e.start[1]-e.start[0]);}if(s&&(e.margin||e.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:r||o,drag:i,dragAll:l,smoothSteps:u,fixed:n,snap:o,hover:a,unconstrained:s};}function K(e,t){if(!1!==t)if(!0===t||r(t)){e.tooltips=[];for(var i=0;i<e.handles;i++)e.tooltips.push(t);}else {if((t=d(t)).length!==e.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.forEach((function(e){if("boolean"!=typeof e&&!r(e))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),e.tooltips=t;}}function Q(e,t){if(t.length!==e.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");e.handleAttributes=t;}function Z(e,t){if(!r(t))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");e.ariaFormat=t;}function ee(e,r){if(!t(r))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");e.format=r;}function te(e,t){if("boolean"!=typeof t)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");e.keyboardSupport=t;}function re(e,t){e.documentElement=t;}function ie(e,t){if("string"!=typeof t&&!1!==t)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");e.cssPrefix=t;}function ne(e,t){if("object"!=typeof t)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(t).forEach((function(r){e.cssClasses[r]=e.cssPrefix+t[r];}))):e.cssClasses=t;}function oe(e){var t={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:U,format:U},r={step:{r:!1,t:j},keyboardPageMultiplier:{r:!1,t:F},keyboardMultiplier:{r:!1,t:T},keyboardDefaultStep:{r:!1,t:z},start:{r:!0,t:q},connect:{r:!0,t:$},direction:{r:!0,t:G},snap:{r:!1,t:R},animate:{r:!1,t:B},animationDuration:{r:!1,t:_},range:{r:!0,t:H},orientation:{r:!1,t:X},margin:{r:!1,t:Y},limit:{r:!1,t:I},padding:{r:!1,t:W},behaviour:{r:!0,t:J},ariaFormat:{r:!1,t:Z},format:{r:!1,t:ee},tooltips:{r:!1,t:K},keyboardSupport:{r:!0,t:te},documentElement:{r:!1,t:re},cssPrefix:{r:!0,t:ie},cssClasses:{r:!0,t:ne},handleAttributes:{r:!1,t:Q}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:O,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(r).forEach((function(o){if(n(e[o])||void 0!==i[o])r[o].t(t,n(e[o])?e[o]:i[o]);else if(r[o].r)throw new Error("noUiSlider: '"+o+"' is required.")})),t.pips=e.pips;var o=document.createElement("div"),a=void 0!==o.style.msTransform,s=void 0!==o.style.transform;t.transformRule=s?"transform":a?"msTransform":"webkitTransform";var l=[["left","top"],["right","bottom"]];return t.style=l[t.dir][t.ort],t}function ae(t,r,s){var u,f,x,w,E,P=b(),N=S()&&y(),C=t,k=r.spectrum,V=[],A=[],M=[],L=0,U={},O=t.ownerDocument,j=r.documentElement||O.documentElement,F=O.body,T="rtl"===O.dir||1===r.ort?0:100;function z(e,t){var r=O.createElement("div");return t&&h(r,t),e.appendChild(r),r}function H(e,t){var i=z(e,r.cssClasses.origin),n=z(i,r.cssClasses.handle);if(z(n,r.cssClasses.touchArea),n.setAttribute("data-handle",String(t)),r.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",(function(e){return fe(e,t)}))),void 0!==r.handleAttributes){var o=r.handleAttributes[t];Object.keys(o).forEach((function(e){n.setAttribute(e,o[e]);}));}return n.setAttribute("role","slider"),n.setAttribute("aria-orientation",r.ort?"vertical":"horizontal"),0===t?h(n,r.cssClasses.handleLower):t===r.handles-1&&h(n,r.cssClasses.handleUpper),i}function q(e,t){return !!t&&z(e,r.cssClasses.connect)}function R(e,t){var i=z(t,r.cssClasses.connects);f=[],(x=[]).push(q(i,e[0]));for(var n=0;n<r.handles;n++)f.push(H(t,n)),M[n]=n,x.push(q(i,e[n+1]));}function B(e){return h(e,r.cssClasses.target),0===r.dir?h(e,r.cssClasses.ltr):h(e,r.cssClasses.rtl),0===r.ort?h(e,r.cssClasses.horizontal):h(e,r.cssClasses.vertical),h(e,"rtl"===getComputedStyle(e).direction?r.cssClasses.textDirectionRtl:r.cssClasses.textDirectionLtr),z(e,r.cssClasses.base)}function _(e,t){return !(!r.tooltips||!r.tooltips[t])&&z(e.firstChild,r.cssClasses.tooltip)}function $(){return C.hasAttribute("disabled")}function X(e){return f[e].hasAttribute("disabled")}function Y(){E&&(ge("update"+D.tooltips),E.forEach((function(e){e&&i(e);})),E=null);}function I(){Y(),E=f.map(_),me("update"+D.tooltips,(function(e,t,i){if(E&&r.tooltips&&!1!==E[t]){var n=e[t];!0!==r.tooltips[t]&&(n=r.tooltips[t].to(i[t])),E[t].innerHTML=n;}}));}function W(){ge("update"+D.aria),me("update"+D.aria,(function(e,t,i,n,o){M.forEach((function(e){var t=f[e],n=ye(A,e,0,!0,!0,!0),a=ye(A,e,100,!0,!0,!0),s=o[e],l=String(r.ariaFormat.to(i[e]));n=k.fromStepping(n).toFixed(1),a=k.fromStepping(a).toFixed(1),s=k.fromStepping(s).toFixed(1),t.children[0].setAttribute("aria-valuemin",n),t.children[0].setAttribute("aria-valuemax",a),t.children[0].setAttribute("aria-valuenow",s),t.children[0].setAttribute("aria-valuetext",l);}));}));}function G(t){if(t.mode===e.PipsMode.Range||t.mode===e.PipsMode.Steps)return k.xVal;if(t.mode===e.PipsMode.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var r=t.values-1,i=100/r,n=[];r--;)n[r]=r*i;return n.push(100),J(n,t.stepped)}return t.mode===e.PipsMode.Positions?J(t.values,t.stepped):t.mode===e.PipsMode.Values?t.stepped?t.values.map((function(e){return k.fromStepping(k.getStep(k.toStepping(e)))})):t.values:[]}function J(e,t){return e.map((function(e){return k.fromStepping(t?k.getStep(e):e)}))}function K(t){function r(e,t){return Number((e+t).toFixed(7))}var i=G(t),n={},o=k.xVal[0],s=k.xVal[k.xVal.length-1],l=!1,u=!1,c=0;return (i=a(i.slice().sort((function(e,t){return e-t}))))[0]!==o&&(i.unshift(o),l=!0),i[i.length-1]!==s&&(i.push(s),u=!0),i.forEach((function(o,a){var s,p,d,f,h,m,v,g,b,y,S=o,x=i[a+1],w=t.mode===e.PipsMode.Steps;for(w&&(s=k.xNumSteps[a]),s||(s=x-S),void 0===x&&(x=S),s=Math.max(s,1e-7),p=S;p<=x;p=r(p,s)){for(g=(h=(f=k.toStepping(p))-c)/(t.density||1),y=h/(b=Math.round(g)),d=1;d<=b;d+=1)n[(m=c+d*y).toFixed(5)]=[k.fromStepping(m),0];v=i.indexOf(p)>-1?e.PipsType.LargeValue:w?e.PipsType.SmallValue:e.PipsType.NoValue,!a&&l&&p!==x&&(v=0),p===x&&u||(n[f.toFixed(5)]=[p,v]),c=f;}})),n}function Q(t,i,n){var o,a,s=O.createElement("div"),l=((o={})[e.PipsType.None]="",o[e.PipsType.NoValue]=r.cssClasses.valueNormal,o[e.PipsType.LargeValue]=r.cssClasses.valueLarge,o[e.PipsType.SmallValue]=r.cssClasses.valueSub,o),u=((a={})[e.PipsType.None]="",a[e.PipsType.NoValue]=r.cssClasses.markerNormal,a[e.PipsType.LargeValue]=r.cssClasses.markerLarge,a[e.PipsType.SmallValue]=r.cssClasses.markerSub,a),c=[r.cssClasses.valueHorizontal,r.cssClasses.valueVertical],p=[r.cssClasses.markerHorizontal,r.cssClasses.markerVertical];function d(e,t){var i=t===r.cssClasses.value,n=i?l:u;return t+" "+(i?c:p)[r.ort]+" "+n[e]}function f(t,o,a){if((a=i?i(o,a):a)!==e.PipsType.None){var l=z(s,!1);l.className=d(a,r.cssClasses.marker),l.style[r.style]=t+"%",a>e.PipsType.NoValue&&((l=z(s,!1)).className=d(a,r.cssClasses.value),l.setAttribute("data-value",String(o)),l.style[r.style]=t+"%",l.innerHTML=String(n.to(o)));}}return h(s,r.cssClasses.pips),h(s,0===r.ort?r.cssClasses.pipsHorizontal:r.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){f(e,t[e][0],t[e][1]);})),s}function Z(){w&&(i(w),w=null);}function ee(e){Z();var t=K(e),r=e.filter,i=e.format||{to:function(e){return String(Math.round(e))}};return w=C.appendChild(Q(t,r,i))}function te(){var e=u.getBoundingClientRect(),t="offset"+["Width","Height"][r.ort];return 0===r.ort?e.width||u[t]:e.height||u[t]}function re(e,t,i,n){var o=function(o){var a=ie(o,n.pageOffset,n.target||t);return !!a&&!($()&&!n.doNotReject)&&!(v(C,r.cssClasses.tap)&&!n.doNotReject)&&!(e===P.start&&void 0!==a.buttons&&a.buttons>1)&&(!n.hover||!a.buttons)&&(N||a.preventDefault(),a.calcPoint=a.points[r.ort],void i(a,n))},a=[];return e.split(" ").forEach((function(e){t.addEventListener(e,o,!!N&&{passive:!0}),a.push([e,o]);})),a}function ie(e,t,r){var i=0===e.type.indexOf("touch"),n=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),a=0,s=0;if(0===e.type.indexOf("MSPointer")&&(o=!0),"mousedown"===e.type&&!e.buttons&&!e.touches)return !1;if(i){var l=function(t){var i=t.target;return i===r||r.contains(i)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){var u=Array.prototype.filter.call(e.touches,l);if(u.length>1)return !1;a=u[0].pageX,s=u[0].pageY;}else {var c=Array.prototype.find.call(e.changedTouches,l);if(!c)return !1;a=c.pageX,s=c.pageY;}}return t=t||g(O),(n||o)&&(a=e.clientX+t.x,s=e.clientY+t.y),e.pageOffset=t,e.points=[a,s],e.cursor=n||o,e}function ne(e){var t=100*(e-l(u,r.ort))/te();return t=p(t),r.dir?100-t:t}function ae(e){var t=100,r=!1;return f.forEach((function(i,n){if(!X(n)){var o=A[n],a=Math.abs(o-e);(a<t||a<=t&&e>o||100===a&&100===t)&&(r=n,t=a);}})),r}function se(e,t){"mouseout"===e.type&&"HTML"===e.target.nodeName&&null===e.relatedTarget&&ue(e,t);}function le(e,t){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===e.buttons&&0!==t.buttonsProperty)return ue(e,t);var i=(r.dir?-1:1)*(e.calcPoint-t.startCalcPoint);xe(i>0,100*i/t.baseSize,t.locations,t.handleNumbers,t.connect);}function ue(e,t){t.handle&&(m(t.handle,r.cssClasses.active),L-=1),t.listeners.forEach((function(e){j.removeEventListener(e[0],e[1]);})),0===L&&(m(C,r.cssClasses.drag),Pe(),e.cursor&&(F.style.cursor="",F.removeEventListener("selectstart",o))),r.events.smoothSteps&&(t.handleNumbers.forEach((function(e){Ne(e,A[e],!0,!0,!1,!1);})),t.handleNumbers.forEach((function(e){be("update",e);}))),t.handleNumbers.forEach((function(e){be("change",e),be("set",e),be("end",e);}));}function ce(e,t){if(!t.handleNumbers.some(X)){var i;1===t.handleNumbers.length&&(i=f[t.handleNumbers[0]].children[0],L+=1,h(i,r.cssClasses.active)),e.stopPropagation();var n=[],a=re(P.move,j,le,{target:e.target,handle:i,connect:t.connect,listeners:n,startCalcPoint:e.calcPoint,baseSize:te(),pageOffset:e.pageOffset,handleNumbers:t.handleNumbers,buttonsProperty:e.buttons,locations:A.slice()}),s=re(P.end,j,ue,{target:e.target,handle:i,listeners:n,doNotReject:!0,handleNumbers:t.handleNumbers}),l=re("mouseout",j,se,{target:e.target,handle:i,listeners:n,doNotReject:!0,handleNumbers:t.handleNumbers});n.push.apply(n,a.concat(s,l)),e.cursor&&(F.style.cursor=getComputedStyle(e.target).cursor,f.length>1&&h(C,r.cssClasses.drag),F.addEventListener("selectstart",o,!1)),t.handleNumbers.forEach((function(e){be("start",e);}));}}function pe(e){e.stopPropagation();var t=ne(e.calcPoint),i=ae(t);!1!==i&&(r.events.snap||c(C,r.cssClasses.tap,r.animationDuration),Ne(i,t,!0,!0),Pe(),be("slide",i,!0),be("update",i,!0),r.events.snap?ce(e,{handleNumbers:[i]}):(be("change",i,!0),be("set",i,!0)));}function de(e){var t=ne(e.calcPoint),r=k.getStep(t),i=k.fromStepping(r);Object.keys(U).forEach((function(e){"hover"===e.split(".")[0]&&U[e].forEach((function(e){e.call(Te,i);}));}));}function fe(e,t){if($()||X(t))return !1;var i=["Left","Right"],n=["Down","Up"],o=["PageDown","PageUp"],a=["Home","End"];r.dir&&!r.ort?i.reverse():r.ort&&!r.dir&&(n.reverse(),o.reverse());var s,l=e.key.replace("Arrow",""),u=l===o[0],c=l===o[1],p=l===n[0]||l===i[0]||u,d=l===n[1]||l===i[1]||c,f=l===a[0],h=l===a[1];if(!(p||d||f||h))return !0;if(e.preventDefault(),d||p){var m=p?0:1,v=Oe(t)[m];if(null===v)return !1;!1===v&&(v=k.getDefaultStep(A[t],p,r.keyboardDefaultStep)),v*=c||u?r.keyboardPageMultiplier:r.keyboardMultiplier,v=Math.max(v,1e-7),v*=p?-1:1,s=V[t]+v;}else s=h?r.spectrum.xVal[r.spectrum.xVal.length-1]:r.spectrum.xVal[0];return Ne(t,k.toStepping(s),!0,!0),be("slide",t),be("update",t),be("change",t),be("set",t),!1}function he(e){e.fixed||f.forEach((function(e,t){re(P.start,e.children[0],ce,{handleNumbers:[t]});})),e.tap&&re(P.start,u,pe,{}),e.hover&&re(P.move,u,de,{hover:!0}),e.drag&&x.forEach((function(t,i){if(!1!==t&&0!==i&&i!==x.length-1){var n=f[i-1],o=f[i],a=[t],s=[n,o],l=[i-1,i];h(t,r.cssClasses.draggable),e.fixed&&(a.push(n.children[0]),a.push(o.children[0])),e.dragAll&&(s=f,l=M),a.forEach((function(e){re(P.start,e,ce,{handles:s,handleNumbers:l,connect:t});}));}}));}function me(e,t){U[e]=U[e]||[],U[e].push(t),"update"===e.split(".")[0]&&f.forEach((function(e,t){be("update",t);}));}function ve(e){return e===D.aria||e===D.tooltips}function ge(e){var t=e&&e.split(".")[0],r=t?e.substring(t.length):e;Object.keys(U).forEach((function(e){var i=e.split(".")[0],n=e.substring(i.length);t&&t!==i||r&&r!==n||ve(n)&&r!==n||delete U[e];}));}function be(e,t,i){Object.keys(U).forEach((function(n){var o=n.split(".")[0];e===o&&U[n].forEach((function(e){e.call(Te,V.map(r.format.to),t,V.slice(),i||!1,A.slice(),Te);}));}));}function ye(e,t,i,n,o,a,s){var l;return f.length>1&&!r.events.unconstrained&&(n&&t>0&&(l=k.getAbsoluteDistance(e[t-1],r.margin,!1),i=Math.max(i,l)),o&&t<f.length-1&&(l=k.getAbsoluteDistance(e[t+1],r.margin,!0),i=Math.min(i,l))),f.length>1&&r.limit&&(n&&t>0&&(l=k.getAbsoluteDistance(e[t-1],r.limit,!1),i=Math.min(i,l)),o&&t<f.length-1&&(l=k.getAbsoluteDistance(e[t+1],r.limit,!0),i=Math.max(i,l))),r.padding&&(0===t&&(l=k.getAbsoluteDistance(0,r.padding[0],!1),i=Math.max(i,l)),t===f.length-1&&(l=k.getAbsoluteDistance(100,r.padding[1],!0),i=Math.min(i,l))),s||(i=k.getStep(i)),!((i=p(i))===e[t]&&!a)&&i}function Se(e,t){var i=r.ort;return (i?t:e)+", "+(i?e:t)}function xe(e,t,i,n,o){var a=i.slice(),s=n[0],l=r.events.smoothSteps,u=[!e,e],c=[e,!e];n=n.slice(),e&&n.reverse(),n.length>1?n.forEach((function(e,r){var i=ye(a,e,a[e]+t,u[r],c[r],!1,l);!1===i?t=0:(t=i-a[e],a[e]=i);})):u=c=[!0];var p=!1;n.forEach((function(e,r){p=Ne(e,i[e]+t,u[r],c[r],!1,l)||p;})),p&&(n.forEach((function(e){be("update",e),be("slide",e);})),null!=o&&be("drag",s));}function we(e,t){return r.dir?100-e-t:e}function Ee(e,t){A[e]=t,V[e]=k.fromStepping(t);var i="translate("+Se(we(t,0)-T+"%","0")+")";f[e].style[r.transformRule]=i,Ce(e),Ce(e+1);}function Pe(){M.forEach((function(e){var t=A[e]>50?-1:1,r=3+(f.length+t*e);f[e].style.zIndex=String(r);}));}function Ne(e,t,r,i,n,o){return n||(t=ye(A,e,t,r,i,!1,o)),!1!==t&&(Ee(e,t),!0)}function Ce(e){if(x[e]){var t=0,i=100;0!==e&&(t=A[e-1]),e!==x.length-1&&(i=A[e]);var n=i-t,o="translate("+Se(we(t,n)+"%","0")+")",a="scale("+Se(n/100,"1")+")";x[e].style[r.transformRule]=o+" "+a;}}function ke(e,t){return null===e||!1===e||void 0===e?A[t]:("number"==typeof e&&(e=String(e)),!1!==(e=r.format.from(e))&&(e=k.toStepping(e)),!1===e||isNaN(e)?A[t]:e)}function Ve(e,t,i){var n=d(e),o=void 0===A[0];t=void 0===t||t,r.animate&&!o&&c(C,r.cssClasses.tap,r.animationDuration),M.forEach((function(e){Ne(e,ke(n[e],e),!0,!1,i);}));var a=1===M.length?0:1;if(o&&k.hasNoSize()&&(i=!0,A[0]=0,M.length>1)){var s=100/(M.length-1);M.forEach((function(e){A[e]=e*s;}));}for(;a<M.length;++a)M.forEach((function(e){Ne(e,A[e],!0,!0,i);}));Pe(),M.forEach((function(e){be("update",e),null!==n[e]&&t&&be("set",e);}));}function Ae(e){Ve(r.start,e);}function Me(e,t,r,i){if(!((e=Number(e))>=0&&e<M.length))throw new Error("noUiSlider: invalid handle number, got: "+e);Ne(e,ke(t,e),!0,!0,i),be("update",e),r&&be("set",e);}function Le(e){if(void 0===e&&(e=!1),e)return 1===V.length?V[0]:V.slice(0);var t=V.map(r.format.to);return 1===t.length?t[0]:t}function Ue(){for(ge(D.aria),ge(D.tooltips),Object.keys(r.cssClasses).forEach((function(e){m(C,r.cssClasses[e]);}));C.firstChild;)C.removeChild(C.firstChild);delete C.noUiSlider;}function Oe(e){var t=A[e],i=k.getNearbySteps(t),n=V[e],o=i.thisStep.step,a=null;if(r.snap)return [n-i.stepBefore.startValue||null,i.stepAfter.startValue-n||null];!1!==o&&n+o>i.stepAfter.startValue&&(o=i.stepAfter.startValue-n),a=n>i.thisStep.startValue?i.thisStep.step:!1!==i.stepBefore.step&&n-i.stepBefore.highestStep,100===t?o=null:0===t&&(a=null);var s=k.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}function De(){return M.map(Oe)}function je(e,t){var i=Le(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(t){void 0!==e[t]&&(s[t]=e[t]);}));var a=oe(s);o.forEach((function(t){void 0!==e[t]&&(r[t]=a[t]);})),k=a.spectrum,r.margin=a.margin,r.limit=a.limit,r.padding=a.padding,r.pips?ee(r.pips):Z(),r.tooltips?I():Y(),A=[],Ve(n(e.start)?e.start:i,t);}function Fe(){u=B(C),R(r.connect,u),he(r.events),Ve(r.start),r.pips&&ee(r.pips),r.tooltips&&I(),W();}Fe();var Te={destroy:Ue,steps:De,on:me,off:ge,get:Le,set:Ve,setHandle:Me,reset:Ae,__moveHandles:function(e,t,r){xe(e,t,A,r);},options:s,updateOptions:je,target:C,removePips:Z,removeTooltips:Y,getPositions:function(){return A.slice()},getTooltips:function(){return E},getOrigins:function(){return f},pips:ee};return Te}function se(e,t){if(!e||!e.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var r=ae(e,oe(t),t);return e.noUiSlider=r,r}var le={__spectrum:L,cssClasses:O,create:se};e.create=se,e.cssClasses=O,e.default=le,Object.defineProperty(e,"__esModule",{value:!0});}(t);})));function h(e,t){if(!Array.isArray(e)||!Array.isArray(t))return !1;const r=t.slice().sort();return e.length===t.length&&e.slice().sort().every((function(e,t){return e===r[t]}))}var m={name:"Slider",emits:["input","update:modelValue","start","slide","drag","update","change","set","end"],props:{...{value:{validator:function(e){return e=>"number"==typeof e||e instanceof Array||null==e||!1===e},required:!1},modelValue:{validator:function(e){return e=>"number"==typeof e||e instanceof Array||null==e||!1===e},required:!1}},id:{type:[String,Number],required:!1},disabled:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},orientation:{type:String,required:!1,default:"horizontal"},direction:{type:String,required:!1,default:"ltr"},tooltips:{type:Boolean,required:!1,default:!0},options:{type:Object,required:!1,default:()=>({})},merge:{type:Number,required:!1,default:-1},format:{type:[Object,Function,Boolean],required:!1,default:null},classes:{type:Object,required:!1,default:()=>({})},showTooltip:{type:String,required:!1,default:"always"},tooltipPosition:{type:String,required:!1,default:null},lazy:{type:Boolean,required:!1,default:!0},ariaLabelledby:{type:String,required:!1,default:void 0},aria:{required:!1,type:Object,default:()=>({})}},setup(a,s){const l=function(r,i,n){const{value:o,modelValue:a,min:s}=toRefs(r);let l=a&&void 0!==a.value?a:o;const c=ref(l.value);if(u(l.value)&&(l=ref(s.value)),Array.isArray(l.value)&&0==l.value.length)throw new Error("Slider v-model must not be an empty array");return {value:l,initialValue:c}}(a),c=function(t,i,n){const{classes:o,showTooltip:a,tooltipPosition:s,orientation:l}=toRefs(t),u=computed((()=>({target:"slider-target",focused:"slider-focused",tooltipFocus:"slider-tooltip-focus",tooltipDrag:"slider-tooltip-drag",ltr:"slider-ltr",rtl:"slider-rtl",horizontal:"slider-horizontal",vertical:"slider-vertical",textDirectionRtl:"slider-txt-dir-rtl",textDirectionLtr:"slider-txt-dir-ltr",base:"slider-base",connects:"slider-connects",connect:"slider-connect",origin:"slider-origin",handle:"slider-handle",handleLower:"slider-handle-lower",handleUpper:"slider-handle-upper",touchArea:"slider-touch-area",tooltip:"slider-tooltip",tooltipTop:"slider-tooltip-top",tooltipBottom:"slider-tooltip-bottom",tooltipLeft:"slider-tooltip-left",tooltipRight:"slider-tooltip-right",tooltipHidden:"slider-tooltip-hidden",active:"slider-active",draggable:"slider-draggable",tap:"slider-state-tap",drag:"slider-state-drag",pips:"slider-pips",pipsHorizontal:"slider-pips-horizontal",pipsVertical:"slider-pips-vertical",marker:"slider-marker",markerHorizontal:"slider-marker-horizontal",markerVertical:"slider-marker-vertical",markerNormal:"slider-marker-normal",markerLarge:"slider-marker-large",markerSub:"slider-marker-sub",value:"slider-value",valueHorizontal:"slider-value-horizontal",valueVertical:"slider-value-vertical",valueNormal:"slider-value-normal",valueLarge:"slider-value-large",valueSub:"slider-value-sub",...o.value})));return {classList:computed((()=>{const e={...u.value};return Object.keys(e).forEach((t=>{e[t]=Array.isArray(e[t])?e[t].filter((e=>null!==e)).join(" "):e[t];})),"always"!==a.value&&(e.target+=` ${"drag"===a.value?e.tooltipDrag:e.tooltipFocus}`),"horizontal"===l.value&&(e.tooltip+="bottom"===s.value?` ${e.tooltipBottom}`:` ${e.tooltipTop}`),"vertical"===l.value&&(e.tooltip+="right"===s.value?` ${e.tooltipRight}`:` ${e.tooltipLeft}`),e}))}}(a),p=function(t,i,n){const{format:o,step:a}=toRefs(t),s=n.value,l=n.classList,u=computed((()=>o&&o.value?"function"==typeof o.value?{to:o.value}:d({...o.value}):d({decimals:a.value>=0?0:2}))),c=computed((()=>Array.isArray(s.value)?s.value.map((e=>u.value)):u.value));return {tooltipFormat:u,tooltipsFormat:c,tooltipsMerge:(e,t,r)=>{var i="rtl"===getComputedStyle(e).direction,n="rtl"===e.noUiSlider.options.direction,o="vertical"===e.noUiSlider.options.orientation,a=e.noUiSlider.getTooltips(),s=e.noUiSlider.getOrigins();a.forEach((function(e,t){e&&s[t].appendChild(e);})),e.noUiSlider.on("update",(function(e,s,c,p,d){var f=[[]],h=[[]],m=[[]],v=0;a[0]&&(f[0][0]=0,h[0][0]=d[0],m[0][0]=u.value.to(parseFloat(e[0])));for(var g=1;g<e.length;g++)(!a[g]||e[g]-e[g-1]>t)&&(f[++v]=[],m[v]=[],h[v]=[]),a[g]&&(f[v].push(g),m[v].push(u.value.to(parseFloat(e[g]))),h[v].push(d[g]));f.forEach((function(e,t){for(var s=e.length,u=0;u<s;u++){var c=e[u];if(u===s-1){var p=0;h[t].forEach((function(e){p+=1e3-e;}));var d=o?"bottom":"right",f=n?0:s-1,v=1e3-h[t][f];p=(i&&!o?100:0)+p/s-v,a[c].innerHTML=m[t].join(r),a[c].style.display="block",a[c].style[d]=p+"%",l.value.tooltipHidden.split(" ").forEach((e=>{a[c].classList.contains(e)&&a[c].classList.remove(e);}));}else a[c].style.display="none",l.value.tooltipHidden.split(" ").forEach((e=>{a[c].classList.add(e);}));}}));}));}}}(a,0,{value:l.value,classList:c.classList}),m=function(a,s,l){const{orientation:c,direction:p,tooltips:d,step:m,min:v,max:g,merge:b,id:y,disabled:S,options:x,classes:w,format:E,lazy:P,ariaLabelledby:N,aria:C}=toRefs(a),k=l.value,V=l.initialValue,A=l.tooltipsFormat,M=l.tooltipsMerge,L=l.tooltipFormat,U=l.classList,O=ref(null),D=ref(null),j=ref(!1),F=computed((()=>{let e={cssPrefix:"",cssClasses:U.value,orientation:c.value,direction:p.value,tooltips:!!d.value&&A.value,connect:"lower",start:u(k.value)?v.value:k.value,range:{min:v.value,max:g.value}};if(m.value>0&&(e.step=m.value),Array.isArray(k.value)&&(e.connect=!0),N&&N.value||C&&Object.keys(C.value).length){let t=Array.isArray(k.value)?k.value:[k.value];e.handleAttributes=t.map((e=>Object.assign({},C.value,N&&N.value?{"aria-labelledby":N.value}:{})));}return E.value&&(e.ariaFormat=L.value),e})),T=computed((()=>{let e={id:y&&y.value?y.value:void 0};return S.value&&(e.disabled=!0),e})),z=computed((()=>Array.isArray(k.value))),H=()=>{let e=D.value.get();return Array.isArray(e)?e.map((e=>parseFloat(e))):parseFloat(e)},q=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];D.value.set(e,t);},R=e=>{s.emit("input",e),s.emit("update:modelValue",e),s.emit("update",e);},B=()=>{D.value=f.create(O.value,Object.assign({},F.value,x.value)),d.value&&z.value&&b.value>=0&&M(O.value,b.value," - "),D.value.on("set",(()=>{const e=H();s.emit("change",e),s.emit("set",e),P.value&&R(e);})),D.value.on("update",(()=>{if(!j.value)return;const e=H();z.value&&h(k.value,e)||!z.value&&k.value==e?s.emit("update",e):P.value||R(e);})),D.value.on("start",(()=>{s.emit("start",H());})),D.value.on("end",(()=>{s.emit("end",H());})),D.value.on("slide",(()=>{s.emit("slide",H());})),D.value.on("drag",(()=>{s.emit("drag",H());})),O.value.querySelectorAll("[data-handle]").forEach((e=>{e.onblur=()=>{O.value&&U.value.focused.split(" ").forEach((e=>{O.value.classList.remove(e);}));},e.onfocus=()=>{U.value.focused.split(" ").forEach((e=>{O.value.classList.add(e);}));};})),j.value=!0;},_=()=>{D.value.off(),D.value.destroy(),D.value=null;},$=(e,t)=>{j.value=!1,_(),B();};return onMounted(B),onUnmounted(_),watch(z,$,{immediate:!1}),watch(v,$,{immediate:!1}),watch(g,$,{immediate:!1}),watch(m,$,{immediate:!1}),watch(c,$,{immediate:!1}),watch(p,$,{immediate:!1}),watch(d,$,{immediate:!1}),watch(b,$,{immediate:!1}),watch(E,$,{immediate:!1,deep:!0}),watch(x,$,{immediate:!1,deep:!0}),watch(w,$,{immediate:!1,deep:!0}),watch(k,((e,t)=>{t&&("object"==typeof t&&"object"==typeof e&&e&&Object.keys(t)>Object.keys(e)||"object"==typeof t&&"object"!=typeof e||u(e))&&$();}),{immediate:!1}),watch(k,(e=>{if(u(e))return void q(v.value,!1);let t=H();z.value&&!Array.isArray(t)&&(t=[t]),(z.value&&!h(e,t)||!z.value&&e!=t)&&q(e,!1);}),{deep:!0}),{slider:O,slider$:D,isRange:z,sliderProps:T,init:B,destroy:_,refresh:$,update:q,reset:()=>{R(V.value);}}}(a,s,{value:l.value,initialValue:l.initialValue,tooltipFormat:p.tooltipFormat,tooltipsFormat:p.tooltipsFormat,tooltipsMerge:p.tooltipsMerge,classList:c.classList});return {...c,...p,...m}}};m.render=function(e,t,r,i,n,o){return openBlock(),createElementBlock("div",mergeProps(e.sliderProps,{ref:"slider"}),null,16)},m.__file="src/Slider.vue";

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.11.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const cfg0 = defineAppConfig({
  nuxtIcon: {
    size: "24px"
    // default <Icon> size applied
  }
});
const inlineConfig = {
  "nuxt": {
    "buildId": "119869f6-35c7-448d-a451-0717f70b9bff"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "deep": true };
const fetchDefaults = {};
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const __nuxt_page_meta$j = {
  layout: "custom"
};
const _routes = [
  {
    name: "404",
    path: "/404",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-CCmZ89LD.mjs').then((m) => m.default || m)
  },
  {
    name: "about-us",
    path: "/about-us",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-C-W_wmCG.mjs').then((m) => m.default || m)
  },
  {
    name: "account-addresses",
    path: "/account/addresses",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./addresses-SXwK0Q8N.mjs').then((m) => m.default || m)
  },
  {
    name: "account-bank-details",
    path: "/account/bank-details",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./bank-details-4qqFqwkA.mjs').then((m) => m.default || m)
  },
  {
    name: "account-dashboard",
    path: "/account/dashboard",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./dashboard-BkxPasy9.mjs').then((m) => m.default || m)
  },
  {
    name: "account",
    path: "/account",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-C9KNWFKh.mjs').then((m) => m.default || m)
  },
  {
    name: "account-notifications",
    path: "/account/notifications",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./notifications-B4FJhlTM.mjs').then((m) => m.default || m)
  },
  {
    name: "account-order-details-order_number",
    path: "/account/order/details/:order_number()",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_order_number_-Bx4O2Sw5.mjs').then((m) => m.default || m)
  },
  {
    name: "account-order",
    path: "/account/order",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-7B7ArKxn.mjs').then((m) => m.default || m)
  },
  {
    name: "account-point",
    path: "/account/point",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./point-BIIWxLlk.mjs').then((m) => m.default || m)
  },
  {
    name: "account-refund",
    path: "/account/refund",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./refund-DlFeEL_X.mjs').then((m) => m.default || m)
  },
  {
    name: "account-wallet",
    path: "/account/wallet",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./wallet-BRGVSEy3.mjs').then((m) => m.default || m)
  },
  {
    name: "auth-forgot-password",
    path: "/auth/forgot-password",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-9_jVEIth.mjs').then((m) => m.default || m)
  },
  {
    name: "auth-login",
    path: "/auth/login",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-_t8KHaFr.mjs').then((m) => m.default || m)
  },
  {
    name: "auth-otp",
    path: "/auth/otp",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-_nbuD95e.mjs').then((m) => m.default || m)
  },
  {
    name: "auth-register",
    path: "/auth/register",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-CZDfAymI.mjs').then((m) => m.default || m)
  },
  {
    name: "auth-update-password",
    path: "/auth/update-password",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-Dc-zja7J.mjs').then((m) => m.default || m)
  },
  {
    name: "blog-slug",
    path: "/blog/:slug()",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_slug_-CHL8d9e9.mjs').then((m) => m.default || m)
  },
  {
    name: "blog",
    path: "/blog",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-D8v8AtS3.mjs').then((m) => m.default || m)
  },
  {
    name: "cart",
    path: "/cart",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-Z6U5RU0w.mjs').then((m) => m.default || m)
  },
  {
    name: "checkout",
    path: "/checkout",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-BjYxMYyO.mjs').then((m) => m.default || m)
  },
  {
    name: "collections",
    path: "/collections",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-T-JWyWGS.mjs').then((m) => m.default || m)
  },
  {
    name: "compare",
    path: "/compare",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-Cu6luFCE.mjs').then((m) => m.default || m)
  },
  {
    name: "contact-us",
    path: "/contact-us",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-DmZHbwxS.mjs').then((m) => m.default || m)
  },
  {
    name: "faq",
    path: "/faq",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-CLX5uNHw.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-CgXVVgvD.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.name) ?? "maintenance",
    path: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.path) ?? "/maintenance",
    meta: __nuxt_page_meta$j || {},
    alias: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.alias) || [],
    redirect: __nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.redirect,
    component: () => import('./index-FjUSBPs3.mjs').then((m) => m.default || m)
  },
  {
    name: "offers",
    path: "/offers",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-CiIgXnc8.mjs').then((m) => m.default || m)
  },
  {
    name: "order-status-order_number",
    path: "/order/status/:order_number()",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_order_number_-C_Y3kk1a.mjs').then((m) => m.default || m)
  },
  {
    name: "order-success-order_number",
    path: "/order/success/:order_number()",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_order_number_-rTAxOScE.mjs').then((m) => m.default || m)
  },
  {
    name: "pages-slug",
    path: "/pages/:slug()",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_slug_-uQvaOWCX.mjs').then((m) => m.default || m)
  },
  {
    name: "product-slug",
    path: "/product/:slug()",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_slug_-CdEsSzUQ.mjs').then((m) => m.default || m)
  },
  {
    name: "search",
    path: "/search",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-GKavJey9.mjs').then((m) => m.default || m)
  },
  {
    name: "seller-become-seller",
    path: "/seller/become-seller",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-nQ2BxyKO.mjs').then((m) => m.default || m)
  },
  {
    name: "seller-store-slug",
    path: "/seller/store/:slug()",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_slug_-BoLOhI5y.mjs').then((m) => m.default || m)
  },
  {
    name: "seller-store-fruits-market",
    path: "/seller/store/fruits-market",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./fruits-market-B0NA-g_Y.mjs').then((m) => m.default || m)
  },
  {
    name: "seller-store",
    path: "/seller/store",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-pXvssiVp.mjs').then((m) => m.default || m)
  },
  {
    name: "seller-stores",
    path: "/seller/stores",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-DASQMD_b.mjs').then((m) => m.default || m)
  },
  {
    name: "theme-berlin",
    path: "/theme/berlin",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-BlzNwJEJ.mjs').then((m) => m.default || m)
  },
  {
    name: "theme-denver",
    path: "/theme/denver",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-CJHTSSBy.mjs').then((m) => m.default || m)
  },
  {
    name: "theme-madrid",
    path: "/theme/madrid",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-w9OxWphV.mjs').then((m) => m.default || m)
  },
  {
    name: "theme-osaka",
    path: "/theme/osaka",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-Rm9jFyOe.mjs').then((m) => m.default || m)
  },
  {
    name: "theme-paris",
    path: "/theme/paris",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-V4RBLUiD.mjs').then((m) => m.default || m)
  },
  {
    name: "theme-rome",
    path: "/theme/rome",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-C1K8RtRH.mjs').then((m) => m.default || m)
  },
  {
    name: "theme-tokyo",
    path: "/theme/tokyo",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-CQST0Orj.mjs').then((m) => m.default || m)
  },
  {
    name: "wishlist",
    path: "/wishlist",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-DoO4taXA.mjs').then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h$1(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index2) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index2]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
function useRequestEvent(nuxtApp = /* @__PURE__ */ useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const handler = _handler ;
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = null);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(options.getCachedData(key, nuxtApp) ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = null;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = null;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key].cancelled = true;
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform: transform2,
    pick: pick2,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform: transform2,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const BaseUrl = "http://localhost:3000/api";
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const GetHeaders = () => {
  return {
    Authorization: `Bearer ${useCookie("uat").value}`
  };
};
const isVue2 = false;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key in store) {
      const value = store[key];
      if (isRef(value) || isReactive(value)) {
        refs[key] = // ---
        toRef(store, key);
      }
    }
    return refs;
  }
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_2$2 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_2, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useApiCartStore = defineStore("api-cart-store", () => {
  let ApiCart = ref([]);
  var modals = ref({ quickView: { show: false } }), { cart } = storeToRefs(useCartStore());
  const api_AddToCart = async ({ product, quantity = 1, variation, variation_id }) => {
    var _a;
    if (((_a = product.variations) == null ? void 0 : _a.length) && !variation) {
      modals.value.quickView.item = product;
      modals.value.quickView.show = true;
    } else {
      let ItemToAdd = {
        product,
        product_id: product == null ? void 0 : product.id,
        quantity,
        variation_id: variation_id || null,
        variation: variation || null
      };
      let { data, error } = await useFetch("cart", {
        baseURL: BaseUrl,
        headers: GetHeaders(),
        method: "post",
        body: ItemToAdd
      }, "$p7udemtVcS");
      if (!error.value) {
        modals.value.quickView.show = false;
        await useCartStore().GetCartDataFromApi();
      }
    }
  };
  const api_change_quantity = async ({ CartItem, quantity = 1 }) => {
    if (cart.value.findIndex((item) => CartItem.variation_id ? item.variation_id == CartItem.variation_id && item.product_id == CartItem.product_id : item.product_id == CartItem.product_id) > -1) {
      let { data, error } = await useFetch(`cart`, {
        method: "put",
        key: "updateCartItemQuantity",
        baseURL: BaseUrl,
        headers: GetHeaders(),
        body: {
          id: CartItem.id,
          product: CartItem.product,
          product_id: CartItem.product_id,
          variation: CartItem.variation || null,
          variation_id: CartItem.variation_id || null,
          quantity
        }
      }, "$wRCaENuuwF");
      if (!error.value) {
        await useCartStore().GetCartDataFromApi();
      }
    }
  };
  const api_RemoveFromCart = async ({ CartItem }) => {
    var _a;
    let { data, error } = await useFetch(`cart/${(_a = CartItem == null ? void 0 : CartItem.CartItem) == null ? void 0 : _a.id}`, {
      method: "delete",
      baseURL: BaseUrl,
      headers: GetHeaders(),
      key: `deleteFromCart${CartItem.id}`
    }, "$ZzS2rW8F5n");
    if (!error.value) {
      await useCartStore().GetCartDataFromApi();
    }
  };
  return {
    api_AddToCart,
    ApiCart,
    api_change_quantity,
    api_RemoveFromCart
  };
});
const HandleRequest = (url, { method = "get", key, cache = false, ...options }) => {
  return useFetch(url, {
    baseURL: BaseUrl,
    headers: GetHeaders(),
    ...options,
    method,
    key,
    onResponse(context) {
      options.onResponse && options.onResponse(context);
    }
  }, "$Zs5VJTyNtd");
};
const useCheckoutStore = defineStore("checkout-store", () => {
  let CheckoutData = ref({
    products: [],
    billing_address_id: "",
    shipping_address_id: "",
    delivery_interval: "1 day",
    delivery_description: null,
    payment_method: "cod",
    wallet_balance: false,
    points_amount: false,
    coupon: null
  }), IsCheckoutDataValid = ref(false);
  let CheckoutInfo = ref({
    total: {
      convert_point_amount: -10,
      convert_wallet_balance: -84.4,
      coupon_total_discount: 10,
      points: 300,
      points_amount: 10,
      shipping_total: 0,
      sub_total: 35.19,
      tax_total: 2.54,
      total: 37.73,
      wallet_balance: 84.4
    }
  });
  let loading = ref(false);
  let couponError = ref("");
  const SetCheckoutAddress = ({ type = "shipping", id }) => {
    type == "billing" ? CheckoutData.value.billing_address_id = id : CheckoutData.value.shipping_address_id = id;
  };
  const allowApi = (value) => {
    IsCheckoutDataValid.value = value;
  };
  const getCouponCode = (value) => {
    CheckoutData.value.coupon = value;
  };
  const SetPaymentOption = (value) => {
    value && (CheckoutData.value.payment_method = value);
  };
  const setDeliveryInterval = (value) => {
    value && (CheckoutData.value.delivery_interval = value);
  };
  const setDeliveryDescription = (value) => {
    CheckoutData.value.delivery_interval = value == "Standard Delivery | Approx 5 to 7 Days" ? null : CheckoutData.value.delivery_interval;
    value && (CheckoutData.value.delivery_description = value);
  };
  const SetCheckoutProduct = ({ value }) => {
    CheckoutData.value.products = [];
    value.forEach((el) => {
      CheckoutData.value.products.push({
        product_id: el.product_id,
        variation_id: el.variation_id,
        quantity: el.quantity
      });
    });
  };
  const SetCheckoutInfo = async () => {
    if (Object.keys(CheckoutInfo.value).length) {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 4e3);
    } else {
      await HandleRequest("order", {
        baseURL: BaseUrl,
        headers: GetHeaders(),
        method: "post",
        key: "GetCheckoutData",
        body: CheckoutData.value,
        cache: false,
        onResponse({ response }) {
          CheckoutInfo.value = response._data;
          if (!response._data.success) {
            couponError.value = response._data.message;
          }
        }
      });
    }
  };
  const PlaceOrder = async () => {
    var _a;
    let { data, error } = await useFetch("order", {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "post",
      key: "PlaceOrder",
      cache: false,
      body: {
        ...CheckoutData.value,
        return_url: "http://localhost:3000/account/order/details/1000",
        cancel_url: "http://localhost:3000"
      }
    }, "$bx6vpCrZ4S");
    if (!error.value) {
      (_a = data.value) == null ? void 0 : _a.order_number;
      if (data.value.is_redirect) {
        (void 0).open(data.value.url, "");
        useRouter().push(`/account/order/details/1000`);
      } else {
        useRouter().push(`/account/order/details/1000`);
      }
    }
  };
  const SetPayment = (value) => {
    value && (CheckoutData.value.payment_method = value);
  };
  watch(() => IsCheckoutDataValid, () => {
    if (IsCheckoutDataValid && useCookie("uat").value) {
      SetCheckoutInfo();
    }
  }, { deep: true });
  return {
    CheckoutData,
    CheckoutInfo,
    SetCheckoutAddress,
    SetPayment,
    SetPaymentOption,
    SetCheckoutProduct,
    PlaceOrder,
    loading,
    setDeliveryInterval,
    setDeliveryDescription,
    getCouponCode,
    couponError,
    SetCheckoutInfo,
    allowApi
  };
});
const useCartStore = defineStore("cart-store", () => {
  var cart = ref([]);
  var modals = ref({ quickView: { show: false } });
  let cartToggle = ref(false);
  const GetCartDataFromApi = async () => {
    var _a;
    let { data, error } = await useFetch("cart", {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "get"
    }, "$zidwWXdRa5");
    if (error.value)
      ;
    else {
      cart.value = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.items;
    }
  };
  const addToCart = async ({ product, quantity = 1, variation }) => {
    var _a, _b, _c;
    if ((_a = product == null ? void 0 : product.variations) == null ? void 0 : _a.length) {
      modals.value.quickView.item = product;
      modals.value.quickView.show = true;
    } else {
      if (useCookie("uat").value) {
        await useApiCartStore().api_AddToCart({ product, quantity });
        localStorage.setItem("cart", JSON.stringify(cart.value));
        let localCart = JSON.parse(localStorage.getItem("cart"));
        if (localCart.length) {
          SetCart({ Cart: localCart });
        }
      } else {
        let ItemToAdd = {
          product_id: product == null ? void 0 : product.id,
          product,
          variation_id: (variation == null ? void 0 : variation.id) || null
        };
        let cartItemIndex = cart.value.findIndex(
          (item) => (item == null ? void 0 : item.product_id) == (product == null ? void 0 : product.id)
        );
        if (cartItemIndex < 0) {
          ItemToAdd.quantity = 1;
          cart.value.push(_.cloneDeep(ItemToAdd));
          localStorage.setItem("cart", JSON.stringify(cart.value));
          let localCart = JSON.parse(localStorage.getItem("cart"));
          if (localCart.length) {
            SetCart({ Cart: localCart });
          }
        } else {
          if (cart.value[cartItemIndex].quantity + quantity >= ((_b = cart.value[cartItemIndex].product) == null ? void 0 : _b.quantity) || ((_c = cart.value[cartItemIndex]) == null ? void 0 : _c.quantity) + quantity <= 0) {
            (/* @__PURE__ */ useNuxtApp()).$useToaster({ msg: `You cannot add this item more than ${cart.value[cartItemIndex].quantity} times`, type: "error" });
          } else {
            ItemToAdd = cart.value[cartItemIndex];
            ItemToAdd.quantity += quantity;
          }
        }
      }
    }
  };
  const addToCartProduct = async ({ product, quantity = 1, variation_id, variation }) => {
    var _a, _b;
    if (useCookie("uat").value) {
      await useApiCartStore().api_AddToCart({ product, quantity, variation, variation_id });
      localStorage.setItem("cart", JSON.stringify(cart.value));
      let localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart.length) {
        SetCart({ Cart: localCart });
      }
    } else {
      let ItemToAdd = {
        product_id: product == null ? void 0 : product.id,
        product,
        variation: variation || null,
        variation_id: variation_id || null
      };
      let cartItemIndex = cart.value.findIndex(
        (item) => (item == null ? void 0 : item.product_id) == (product == null ? void 0 : product.id)
      );
      if (cartItemIndex < 0) {
        ItemToAdd.quantity = 1;
        cart.value.push(ItemToAdd);
        localStorage.setItem("cart", JSON.stringify(cart.value));
        let localCart = JSON.parse(localStorage.getItem("cart"));
        if (localCart.length) {
          SetCart({ Cart: localCart });
        }
      } else {
        if (cart.value[cartItemIndex].quantity + quantity >= ((_a = cart.value[cartItemIndex].product) == null ? void 0 : _a.quantity) || ((_b = cart.value[cartItemIndex]) == null ? void 0 : _b.quantity) + quantity <= 0) {
          (/* @__PURE__ */ useNuxtApp()).$useToaster({ msg: `You cannot add this item more than ${cart.value[cartItemIndex].quantity} times`, type: "error" });
        } else {
          ItemToAdd = cart.value[cartItemIndex];
          ItemToAdd.quantity += quantity;
        }
      }
    }
  };
  const ChangeQuantity = ({ CartItem, quantity = 1 }) => {
    if (useCookie("uat").value) {
      useApiCartStore().api_change_quantity({ CartItem, quantity });
    } else {
      let ItemIndex = cart.value.findIndex((item) => CartItem.variation_id ? item.product_id == CartItem.product_id && item.variation_id == CartItem.variation_id : item.product_id == CartItem.product_id);
      if (ItemIndex > -1) {
        let QuantityToCheck = CartItem.variation_id ? CartItem.product.variations.filter((item) => item.id == CartItem.variation_id)[0].quantity : CartItem.product.quantity;
        if (CartItem.quantity + quantity <= QuantityToCheck) {
          if (CartItem.quantity + quantity >= 0) {
            cart.value[ItemIndex].quantity = cart.value[ItemIndex].quantity + quantity;
          } else {
            cart.value[ItemIndex].quantity = 0;
          }
        }
        if (cart.value[ItemIndex].quantity == 0) {
          RemoveFromCart(cart.value[ItemIndex]);
        }
      } else {
        CartItem.quantity > 0 ? CartItem.quantity-- : null;
      }
    }
  };
  const removeFromCart = (product) => {
    let itemIndex = cart.value.findIndex((item) => item.id == product.id);
    itemIndex > -1 && cart.value.splice(itemIndex, 1);
  };
  const ToggleModal = ({ modal = "quickView", product, value = true }) => {
    var _a, _b;
    if (product) {
      let priceArray = (_a = product.variations) == null ? void 0 : _a.map((item) => Number(item.price));
      priceArray.length && (product.CartItemPrice = `$${Math.min(...priceArray)} - $${Math.max(
        ...priceArray
      )}`);
      modals.value[modal].item = product;
    }
    modals.value[modal].show = value;
    !value && "product" in modals.value[modal] && ((_b = modals.value[modal]) == null ? true : delete _b.item);
  };
  function addSelectionToCart({ product, variation, index: index2, quantity = 1 }) {
    cart.value.findIndex((item) => item.product_id == product.id && item.variation_id == variation.id);
    if (!useCookie("uat").value) {
      cart.value.push({ product_id: product.id, variation_id: variation.id, quantity, product });
    } else {
      useApiCartStore().api_AddToCart({ product, variation });
    }
  }
  const SetCart = ({ Cart }) => {
    cart.value = Cart;
  };
  const RemoveFromCart = (CartItem) => {
    if (useCookie("uat").value) {
      useApiCartStore().api_RemoveFromCart({ CartItem });
      localStorage.removeItem({ CartItem });
    } else {
      let ItemIndex = cart.value.findIndex((item) => {
        var _a, _b, _c, _d;
        return ((_a = CartItem == null ? void 0 : CartItem.CartItem) == null ? void 0 : _a.variation_id) ? ((_b = CartItem == null ? void 0 : CartItem.CartItem) == null ? void 0 : _b.variation_id) == item.variation_id && ((_c = CartItem == null ? void 0 : CartItem.CartItem) == null ? void 0 : _c.product_id) == item.product_id : ((_d = CartItem == null ? void 0 : CartItem.CartItem) == null ? void 0 : _d.product_id) == item.product_id;
      });
      ItemIndex > -1 ? cart.value.splice(ItemIndex, 1) : null;
    }
  };
  var CartTotal = computed(() => {
    let subTotal = 0;
    cart.value.forEach((item) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      var price = ((_c = (_b = (_a = item.product) == null ? void 0 : _a.variations) == null ? void 0 : _b.filter((product) => product.id == item.variation_id)[0]) == null ? void 0 : _c.price) || ((_d = item.product) == null ? void 0 : _d.price);
      var discount = ((_g = (_f = (_e = item.product) == null ? void 0 : _e.variations) == null ? void 0 : _f.filter((product) => product.id == item.variation_id)[0]) == null ? void 0 : _g.discount) || ((_h = item.product) == null ? void 0 : _h.discount) || 0;
      subTotal += (price - price * discount / 100) * item.quantity;
    });
    return subTotal;
  });
  const GetProductFromCart = ({ CartItem }) => {
    var _a;
    return CartItem.variation_id ? CartItem.product.variations[(_a = CartItem.product.variations) == null ? void 0 : _a.findIndex((item) => item.id == CartItem.variation_id)] : CartItem.product;
  };
  const setLocalCartInDatabase = async ({ token }) => {
    let CartToAdd = cart.value.map((item) => {
      return {
        product_id: item.product_id,
        variation_id: item.variation_id || "",
        quantity: item.quantity || ""
      };
    });
    if (CartToAdd.length) {
      let { data, error } = await useFetch("cart", {
        baseURL: BaseUrl,
        headers: { Authorization: `Bearer ${token}` },
        method: "post",
        key: "InsertLocalCartInDatabase",
        body: { products: CartToAdd }
      }, "$eEQB13IoVl");
      if (!error.value) {
        cart.value = [];
        await GetCartDataFromApi();
      }
    }
  };
  function cartToggleValue(value) {
    cartToggle.value = value;
  }
  watch(() => cart, () => {
    cart.value.length && useCheckoutStore().SetCheckoutProduct({ value: cart.value });
  }, { deep: true });
  return {
    addToCart,
    setLocalCartInDatabase,
    CartTotal,
    SetCart,
    modals,
    cart,
    cartToggle,
    cartToggleValue,
    removeFromCart,
    ChangeQuantity,
    ToggleModal,
    addSelectionToCart,
    GetCartDataFromApi,
    RemoveFromCart,
    GetProductFromCart,
    addToCartProduct
  };
});
const useUserStore = defineStore("user-store", () => {
  var User = ref({
    isLoggedIn: false
  }), UserInfo = ref({});
  const setDefaultUser = () => {
  };
  const SetUser2 = (user) => {
    User.value = user;
  };
  const SetUserInfo = ({ user }) => {
    UserInfo.value = user;
  };
  const UpdateUserInfo = async () => {
    let { data: user, error } = await useFetch("self", {
      key: `GetSelfInfo`
    }, "$vpSqNedazv");
    if (!error.value) {
      UserInfo.value = user.value;
    }
  };
  const LogoutUser = async () => {
    useCookie("uat").value = null;
    UserInfo.value = {};
    User.value.isLoggedIn = false;
    localStorage.removeItem("usersAccount");
    navigateTo("/");
  };
  const GetUserInfo = async () => {
    await UpdateUserInfo();
  };
  return {
    User,
    UserInfo,
    SetUser: SetUser2,
    SetUserInfo,
    LogoutUser,
    UpdateUserInfo,
    GetUserInfo,
    setDefaultUser
  };
});
const ProtectedRoutes = [
  "/checkout",
  "/compare",
  "/wishlist",
  "/account/dashboard",
  "/account/notifications",
  "/account/addresses",
  "account/wallet",
  "/account/point",
  "/account/order",
  "/account/refund",
  "/account/bank-details"
];
const SetUser = async () => {
  storeToRefs(useUserStore());
  let ToReturn = true;
  let { data: user, error } = await useFetch("self", {
    baseURL: BaseUrl,
    headers: GetHeaders(),
    method: "get",
    cache: false,
    key: `GetSelfInfo`
  }, "$kvttfGUv8X");
  if (!error.value) {
    useUserStore().SetUserInfo({ user: user.value });
  } else {
    ToReturn = false;
  }
  return ToReturn;
};
const route_45middleware_45global = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (ProtectedRoutes.some((paths) => to.path.includes(paths))) {
    if (!([__temp, __restore] = executeAsync(() => SetUser()), __temp = await __temp, __restore(), __temp)) {
      useRouter().push("/auth/login");
    }
  }
  useCookie("uat").value && ([__temp, __restore] = executeAsync(() => SetUser()), __temp = await __temp, __restore(), __temp);
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  route_45middleware_45global,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        const to = router.resolve(initialURL);
        if ("name" in to) {
          to.name = void 0;
        }
        await router.replace({
          ...to,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const LazyAccountAddressesAddressBox = defineAsyncComponent(() => import('./AddressBox-BsV-05a5.mjs').then((r) => r.default));
const LazyAccountAddresses = defineAsyncComponent(() => import('./index-DLkjunpW.mjs').then((r) => r.default));
const LazyAccountBankDetails = defineAsyncComponent(() => import('./index-CULAZpkM.mjs').then((r) => r.default));
const LazyAccountDashboardProfileInformation = defineAsyncComponent(() => import('./ProfileInformation-BbLpRHuM.mjs').then((r) => r.default));
const LazyAccountDashboardTotalContain = defineAsyncComponent(() => import('./TotalContain-BWVIMHvg.mjs').then((r) => r.default));
const LazyAccountDashboard = defineAsyncComponent(() => import('./index-h9Rpd7UW.mjs').then((r) => r.default));
const LazyAccountNotification = defineAsyncComponent(() => import('./index-qySUpzdd.mjs').then((r) => r.default));
const LazyAccountOrdersDetailsConsumerDetails = defineAsyncComponent(() => import('./ConsumerDetails-D8UYehTm.mjs').then((r) => r.default));
const LazyAccountOrdersDetailsProductTable = defineAsyncComponent(() => import('./ProductTable-DMd6q2Wa.mjs').then((r) => r.default));
const LazyAccountOrdersDetailsSubOrders = defineAsyncComponent(() => import('./SubOrders-Bk2WBQex.mjs').then((r) => r.default));
const LazyAccountOrdersDetailsSummaryDetails = defineAsyncComponent(() => import('./SummaryDetails-DJJp0AAy.mjs').then((r) => r.default));
const LazyAccountOrdersDetailsTitleHeader = defineAsyncComponent(() => import('./TitleHeader-s6gLc4XB.mjs').then((r) => r.default));
const LazyAccountOrdersDetailsTrackingPanel = defineAsyncComponent(() => import('./TrackingPanel-C1wi9Gyc.mjs').then((r) => r.default));
const LazyAccountOrdersDetails = defineAsyncComponent(() => import('./index-D4VCYSTr.mjs').then((r) => r.default));
const LazyAccountOrders = defineAsyncComponent(() => import('./index-BP_vj9T3.mjs').then((r) => r.default));
const LazyAccountPoint = defineAsyncComponent(() => import('./index-9pESIN5M.mjs').then((r) => r.default));
const LazyAccountRefund = defineAsyncComponent(() => import('./index-DdFf13_d.mjs').then((r) => r.default));
const LazyAccountSidebarNavLink = defineAsyncComponent(() => import('./NavLink-DUfEGm2n.mjs').then((r) => r.default));
const LazyAccountSidebar = defineAsyncComponent(() => import('./index-BFISSL43.mjs').then((r) => r.default));
const LazyAccountWallet = defineAsyncComponent(() => import('./index-C3cVB596.mjs').then((r) => r.default));
const LazyAccountWrapper = defineAsyncComponent(() => import('./Wrapper-C9PHwIs4.mjs').then((r) => r.default));
const LazyAuthCommonFormLoginForm = defineAsyncComponent(() => import('./LoginForm-4z-Qvxgv.mjs').then((r) => r.default));
const LazyAuthCommonFormRegisterForm = defineAsyncComponent(() => import('./RegisterForm-BX2kCth-.mjs').then((r) => r.default));
const LazyAuthForgotPassword = defineAsyncComponent(() => import('./ForgotPassword-DROtYh3M.mjs').then((r) => r.default));
const LazyAuthLogin = defineAsyncComponent(() => import('./Login-BElyxS7I.mjs').then((r) => r.default));
const LazyAuthOTP = defineAsyncComponent(() => import('./OTP-BwQFpxFq.mjs').then((r) => r.default));
const LazyAuthRegister = defineAsyncComponent(() => import('./Register-Co9bke4_.mjs').then((r) => r.default));
const LazyAuthUpdatePssword = defineAsyncComponent(() => import('./UpdatePssword-CyVKrKD7.mjs').then((r) => r.default));
const LazyBlogContent = defineAsyncComponent(() => import('./index-BaVrQBsA.mjs').then((r) => r.default));
const LazyBlogDetails = defineAsyncComponent(() => import('./index-YyoiPBPr.mjs').then((r) => r.default));
const LazyBlogSkeletonBlogsVue = defineAsyncComponent(() => import('./index-CAh894Jp.mjs').then((r) => r.default));
const LazyBlog = defineAsyncComponent(() => import('./index-Bu5C3edu.mjs').then((r) => r.default));
const LazyBlogSidebarBlogCategory = defineAsyncComponent(() => import('./BlogCategory-ie-tYsh3.mjs').then((r) => r.default));
const LazyBlogSidebarBlogTag = defineAsyncComponent(() => import('./BlogTag-J-637fqh.mjs').then((r) => r.default));
const LazyBlogSidebarRecentPost = defineAsyncComponent(() => import('./RecentPost-BhgpHgd4.mjs').then((r) => r.default));
const LazyBlogSidebar = defineAsyncComponent(() => import('./index-CZfYNbBU.mjs').then((r) => r.default));
const LazyFooterAbout = defineAsyncComponent(() => import('./About-CqnpUXIg.mjs').then((r) => r.default));
const LazyFooterCantact = defineAsyncComponent(() => import('./Cantact-CNsFhL98.mjs').then((r) => r.default));
const LazyFooterCategory = defineAsyncComponent(() => import('./Category-BBpcVzL5.mjs').then((r) => r.default));
const LazyFooterLinks = defineAsyncComponent(() => import('./Links-DKmRfa4B.mjs').then((r) => r.default));
const LazyFooterLogo = defineAsyncComponent(() => import('./Logo-DkacPCPW.mjs').then((r) => r.default));
const LazyFooterPages = defineAsyncComponent(() => import('./Pages-DZKJdEEV.mjs').then((r) => r.default));
const LazyFooterSocial = defineAsyncComponent(() => import('./Social-B5uxyuhT.mjs').then((r) => r.default));
const LazyFooter = defineAsyncComponent(() => import('./index-0WWInS6M.mjs').then((r) => r.default));
const LazyHeaderBasicHeader = defineAsyncComponent(() => import('./index-DNSmjjhk.mjs').then((r) => r.default));
const LazyHeaderClassicHeader = defineAsyncComponent(() => import('./index-CovoJLFO.mjs').then((r) => r.default));
const LazyHeaderElementsAllCategory = defineAsyncComponent(() => import('./AllCategory-C4rpXiGu.mjs').then((r) => r.default));
const LazyHeaderElementsCarts = defineAsyncComponent(() => import('./index-PANIpzWL.mjs').then((r) => r.default));
const LazyHeaderElementsCategory = defineAsyncComponent(() => import('./Category-BCctRYkb.mjs').then((r) => r.default));
const LazyHeaderElementsCompare = defineAsyncComponent(() => import('./Compare-MWqC-tfg.mjs').then((r) => r.default));
const LazyHeaderElementsCurrency = defineAsyncComponent(() => import('./Currency-BYa7Ozta.mjs').then((r) => r.default));
const LazyHeaderElementsDeals = defineAsyncComponent(() => import('./index-BE1zGU45.mjs').then((r) => r.default));
const LazyHeaderElementsLanguage = defineAsyncComponent(() => import('./Language-Dt3xNQm7.mjs').then((r) => r.default));
const LazyHeaderElementsLogo = defineAsyncComponent(() => import('./Logo-Ded94yzr.mjs').then((r) => r.default));
const LazyHeaderElementsMenuList = defineAsyncComponent(() => import('./MenuList-DRskWRZM.mjs').then((r) => r.default));
const LazyHeaderElementsMenuProduct = defineAsyncComponent(() => import('./index-lA3JzrTY.mjs').then((r) => r.default));
const LazyHeaderElementsMyAccount = defineAsyncComponent(() => import('./MyAccount-DTotHw7b.mjs').then((r) => r.default));
const LazyHeaderElementsNavMenuButton = defineAsyncComponent(() => import('./NavMenuButton-B1Bu-7v1.mjs').then((r) => r.default));
const LazyHeaderElementsRecursiveMenu = defineAsyncComponent(() => import('./RecursiveMenu-B1Y4RyiU.mjs').then((r) => r.default));
const LazyHeaderElementsSearch = defineAsyncComponent(() => import('./Search-BWPjJoBF.mjs').then((r) => r.default));
const LazyHeaderElementsSearchBox = defineAsyncComponent(() => import('./SearchBox-DY-EliGJ.mjs').then((r) => r.default));
const LazyHeaderElementsSupport = defineAsyncComponent(() => import('./Support-7Hr7S03d.mjs').then((r) => r.default));
const LazyHeaderElementsTodayDeal = defineAsyncComponent(() => import('./TodayDeal-BVgE3-M3.mjs').then((r) => r.default));
const LazyHeaderElementsTopContent = defineAsyncComponent(() => import('./TopContent-Cya12LiP.mjs').then((r) => r.default));
const LazyHeaderElementsTopHeader = defineAsyncComponent(() => import('./TopHeader-BsQ4uSb-.mjs').then((r) => r.default));
const LazyHeaderElementsWishlist = defineAsyncComponent(() => import('./Wishlist-b9uHKA8s.mjs').then((r) => r.default));
const LazyHeaderElementsCart = defineAsyncComponent(() => import('./cart-CFBr-x30.mjs').then((r) => r.default));
const LazyHeaderMinimalHeader = defineAsyncComponent(() => import('./index-DBRg07Qz.mjs').then((r) => r.default));
const LazyHeaderStandardHeader = defineAsyncComponent(() => import('./index-BtkUq1-V.mjs').then((r) => r.default));
const LazyHeader = defineAsyncComponent(() => import('./index-BnPzsMkg.mjs').then((r) => r.default));
const LazyPagesAboutUsBlog = defineAsyncComponent(() => import('./Blog-mFJ4-hX9.mjs').then((r) => r.default));
const LazyPagesAboutUsClient = defineAsyncComponent(() => import('./Client-CcWvUnJe.mjs').then((r) => r.default));
const LazyPagesAboutUsReview = defineAsyncComponent(() => import('./Review-Bak7BAkH.mjs').then((r) => r.default));
const LazyPagesAboutUsTeam = defineAsyncComponent(() => import('./Team-YDjXk0wK.mjs').then((r) => r.default));
const LazyPagesAboutUsVegetable = defineAsyncComponent(() => import('./Vegetable-D-VcBAoC.mjs').then((r) => r.default));
const LazyPagesAboutUs = defineAsyncComponent(() => import('./index-DE-ZvsxF.mjs').then((r) => r.default));
const LazyPagesContactUsContactDetails = defineAsyncComponent(() => import('./ContactDetails-D8pkHVQ9.mjs').then((r) => r.default));
const LazyPagesContactUsContactForm = defineAsyncComponent(() => import('./ContactForm-D7K7gU4i.mjs').then((r) => r.default));
const LazyPagesContactUsMap = defineAsyncComponent(() => import('./Map-CNbQM3Gi.mjs').then((r) => r.default));
const LazyPagesContactUs = defineAsyncComponent(() => import('./index-BtpqVaIK.mjs').then((r) => r.default));
const LazyPagesContent = defineAsyncComponent(() => import('./Content-CuRKaHHO.mjs').then((r) => r.default));
const LazyPagesError404 = defineAsyncComponent(() => import('./index-vVMuuNeP.mjs').then((r) => r.default));
const LazyPagesFaq = defineAsyncComponent(() => import('./index-CFTOyZLd.mjs').then((r) => r.default));
const LazyPagesOffer = defineAsyncComponent(() => import('./index-D3k1d8vs.mjs').then((r) => r.default));
const LazyPagesSearch = defineAsyncComponent(() => import('./index-Dl-3gVWl.mjs').then((r) => r.default));
const LazyShopCartProducts = defineAsyncComponent(() => import('./Products-CIHt03Tb.mjs').then((r) => r.default));
const LazyShopCartSummary = defineAsyncComponent(() => import('./Summary-BQF_ZiMp.mjs').then((r) => r.default));
const LazyShopCheckoutAddressBlock = defineAsyncComponent(() => import('./index-DiGTEq47.mjs').then((r) => r.default));
const LazyShopCheckoutDeliveryBlock = defineAsyncComponent(() => import('./index-BtaZgQ64.mjs').then((r) => r.default));
const LazyShopCheckout = defineAsyncComponent(() => import('./index-Ckaf4cy1.mjs').then((r) => r.default));
const LazyShopCheckoutPaymentBlock = defineAsyncComponent(() => import('./index-Bk0QQMeT.mjs').then((r) => r.default));
const LazyShopCheckoutSidebarCartSummary = defineAsyncComponent(() => import('./CartSummary-L2_CZhUi.mjs').then((r) => r.default));
const LazyShopCheckoutSidebar = defineAsyncComponent(() => import('./index-BUJB8xfo.mjs').then((r) => r.default));
const LazyShopCollectionBanner = defineAsyncComponent(() => import('./index-B12s57ym.mjs').then((r) => r.default));
const LazyShopCollectionCategorySidebar = defineAsyncComponent(() => import('./index-BEF84KfY.mjs').then((r) => r.default));
const LazyShopCollectionCategorySlider = defineAsyncComponent(() => import('./index-CzCrj2QM.mjs').then((r) => r.default));
const LazyShopCollectionCategorySlug = defineAsyncComponent(() => import('./index-BYwCoyIj.mjs').then((r) => r.default));
const LazyShopCollectionLeftSidebar = defineAsyncComponent(() => import('./index-DMnDyt2w.mjs').then((r) => r.default));
const LazyShopCollectionList = defineAsyncComponent(() => import('./index-BrZ41qxV.mjs').then((r) => r.default));
const LazyShopCollectionNoSidebar = defineAsyncComponent(() => import('./index-DqKTXL16.mjs').then((r) => r.default));
const LazyShopCollectionOffCanvasFilter = defineAsyncComponent(() => import('./index-kVY9lGl6.mjs').then((r) => r.default));
const LazyShopCollectionRightSidebar = defineAsyncComponent(() => import('./index-BoeWKw4d.mjs').then((r) => r.default));
const LazyShopCollection = defineAsyncComponent(() => import('./index-Dvm2m4dB.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsBanner = defineAsyncComponent(() => import('./index-BxaGIHyk.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsCollectionCategory = defineAsyncComponent(() => import('./index-Kk-hHH79.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsCollectionProduct = defineAsyncComponent(() => import('./index-DEbpnvkR.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsCollectionSort = defineAsyncComponent(() => import('./index-C9z-JUPy.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsFilterAttribute = defineAsyncComponent(() => import('./Attribute-CbhxpYVx.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsFilterCategory = defineAsyncComponent(() => import('./Category-1rvSbpeA.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsFilterPrice = defineAsyncComponent(() => import('./Price-BZgpsa8Q.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsFilterRating = defineAsyncComponent(() => import('./Rating-D50GE10J.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsFilter = defineAsyncComponent(() => import('./index-Ciwgdybr.mjs').then((r) => r.default));
const LazyShopCollectionWidgetsSidebar = defineAsyncComponent(() => import('./index-BX6k5hJy.mjs').then((r) => r.default));
const LazyShopCompareContent = defineAsyncComponent(() => import('./Content-CikFq7xL.mjs').then((r) => r.default));
const LazyShopCompareSkeloton = defineAsyncComponent(() => import('./Skeloton-CGnaltty.mjs').then((r) => r.default));
const LazyShopCompare = defineAsyncComponent(() => import('./index-DZtymCeh.mjs').then((r) => r.default));
const LazyShopProductDetailsAccordions = defineAsyncComponent(() => import('./index-B8lFTWVo.mjs').then((r) => r.default));
const LazyShopProductDetailsImage4Image = defineAsyncComponent(() => import('./Image-C9oxrcUc.mjs').then((r) => r.default));
const LazyShopProductDetailsImage4 = defineAsyncComponent(() => import('./index-D2hMtD5O.mjs').then((r) => r.default));
const LazyShopProductDetailsSidebar = defineAsyncComponent(() => import('./index-BLH2nixh.mjs').then((r) => r.default));
const LazyShopProductDetailsSilderImage = defineAsyncComponent(() => import('./Image-Pbz6eKoP.mjs').then((r) => r.default));
const LazyShopProductDetailsSilder = defineAsyncComponent(() => import('./index-oENEhLu5.mjs').then((r) => r.default));
const LazyShopProductDetailsStickyImage = defineAsyncComponent(() => import('./Image-BXBp7EvI.mjs').then((r) => r.default));
const LazyShopProductDetailsSticky = defineAsyncComponent(() => import('./index-xfyZBlSB.mjs').then((r) => r.default));
const LazyShopProductDetailsThumbnailImages = defineAsyncComponent(() => import('./Images-LLHPLOmm.mjs').then((r) => r.default));
const LazyShopProductDetailsThumbnail = defineAsyncComponent(() => import('./index-Dm9iJoV3.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsPaymentOption = defineAsyncComponent(() => import('./index-BcRmbEuH.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductAction = defineAsyncComponent(() => import('./index-HKl3TCDR.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductBanner = defineAsyncComponent(() => import('./index-CyTwRXik.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductBundle = defineAsyncComponent(() => import('./index-pGv8rus9.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductContain = defineAsyncComponent(() => import('./index-CJpnbIWS.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductDeliveryInformation = defineAsyncComponent(() => import('./index-BeMhFN0r.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductDetailsAccordion = defineAsyncComponent(() => import('./index-CgsvLzA0.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductDetailsTabs = defineAsyncComponent(() => import('./index-BFJGnOqz.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductInformation = defineAsyncComponent(() => import('./index-Dvm0mglo.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductReview = defineAsyncComponent(() => import('./index-Chsussq8.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductSocialShare = defineAsyncComponent(() => import('./index-Ce_Crazo.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsProductView = defineAsyncComponent(() => import('./index-BPCZWda6.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsQuestionsAnswers = defineAsyncComponent(() => import('./index-BIIz-G6l.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsRelatedProducts = defineAsyncComponent(() => import('./index-DP_8h5ta.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsSaleTimer = defineAsyncComponent(() => import('./index-BJd3hL9t.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsStickyCheckout = defineAsyncComponent(() => import('./index-Bj1ttgz6.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsStoreInformation = defineAsyncComponent(() => import('./index-DDk_TMsi.mjs').then((r) => r.default));
const LazyShopProductDetailsWidgetsTrendingProducts = defineAsyncComponent(() => import('./index-WMKtNC4F.mjs').then((r) => r.default));
const LazyShopProductDetails = defineAsyncComponent(() => import('./index-B9FN2ZvK.mjs').then((r) => r.default));
const LazyShopSellerBecomeSellerAbout = defineAsyncComponent(() => import('./About-rVzQ0ppa.mjs').then((r) => r.default));
const LazyShopSellerBecomeSellerBusiness = defineAsyncComponent(() => import('./Business-DJB4Fmcg.mjs').then((r) => r.default));
const LazyShopSellerBecomeSellerSelling = defineAsyncComponent(() => import('./Selling-Ct8FzWis.mjs').then((r) => r.default));
const LazyShopSellerBecomeSellerService = defineAsyncComponent(() => import('./Service-CIXFx_bB.mjs').then((r) => r.default));
const LazyShopSellerBecomeSeller = defineAsyncComponent(() => import('./index-DmJfcx4R.mjs').then((r) => r.default));
const LazyShopSellerDetailsBasic = defineAsyncComponent(() => import('./index-B4qeDUy3.mjs').then((r) => r.default));
const LazyShopSellerDetailsClassic = defineAsyncComponent(() => import('./index-WSABCRTn.mjs').then((r) => r.default));
const LazyShopSellerStoreBasic = defineAsyncComponent(() => import('./index-F-n9KYBM.mjs').then((r) => r.default));
const LazyShopSellerStoreClassic = defineAsyncComponent(() => import('./index-CWAt_-Gu.mjs').then((r) => r.default));
const LazyShopSellerStoreSekleton = defineAsyncComponent(() => import('./index-BR7WT9uM.mjs').then((r) => r.default));
const LazyShopSellerWidgetsContectDetails = defineAsyncComponent(() => import('./index-BH6f2NPb.mjs').then((r) => r.default));
const LazyShopSellerWidgetsStoreDescription = defineAsyncComponent(() => import('./index-ExfrZjuY.mjs').then((r) => r.default));
const LazyShopSellerWidgetsStoreLogo = defineAsyncComponent(() => import('./index-C2K7bQml.mjs').then((r) => r.default));
const LazyShopSellerWidgetsStoreName = defineAsyncComponent(() => import('./index-CWXewHSq.mjs').then((r) => r.default));
const LazyShopSellerWidgetsStoreProduct = defineAsyncComponent(() => import('./index-BTC3LS2J.mjs').then((r) => r.default));
const LazyShopSellerWidgetsStoreProductCount = defineAsyncComponent(() => import('./index-DOs8NKeQ.mjs').then((r) => r.default));
const LazyShopSellerWidgetsStoreRating = defineAsyncComponent(() => import('./index-BvojuXMb.mjs').then((r) => r.default));
const LazyShopSellerWidgetsStoreSocialLink = defineAsyncComponent(() => import('./index-BVvAGb5-.mjs').then((r) => r.default));
const LazyShopWishlist = defineAsyncComponent(() => import('./index-Ci-2cIWs.mjs').then((r) => r.default));
const LazyThemesBerlin = defineAsyncComponent(() => import('./index-SHQXt7jW.mjs').then((r) => r.default));
const LazyThemesDenver = defineAsyncComponent(() => import('./index-DyDxxWGq.mjs').then((r) => r.default));
const LazyThemesMadrid = defineAsyncComponent(() => import('./index-CdrChLkR.mjs').then((r) => r.default));
const LazyThemesOsaka = defineAsyncComponent(() => import('./index-B8_RFN05.mjs').then((r) => r.default));
const LazyThemesParisLeftContent = defineAsyncComponent(() => import('./LeftContent-TSclzmZo.mjs').then((r) => r.default));
const LazyThemesParisRightContent = defineAsyncComponent(() => import('./RightContent-MYr_7Q6K.mjs').then((r) => r.default));
const LazyThemesParis = defineAsyncComponent(() => import('./index-DJ_0JLnF.mjs').then((r) => r.default));
const LazyThemesRome = defineAsyncComponent(() => import('./index-LE-MqpOA.mjs').then((r) => r.default));
const LazyThemesTokyo = defineAsyncComponent(() => import('./index-A5yCJ4uU.mjs').then((r) => r.default));
const LazyThemesWidgetsBanner = defineAsyncComponent(() => import('./index-Dn4zruDm.mjs').then((r) => r.default));
const LazyThemesWidgetsBlogSkeletonSliderBlog = defineAsyncComponent(() => import('./SkeletonSliderBlog-CqdUgaCt.mjs').then((r) => r.default));
const LazyThemesWidgetsBlog = defineAsyncComponent(() => import('./index-BKalLhOd.mjs').then((r) => r.default));
const LazyThemesWidgetsCategories = defineAsyncComponent(() => import('./index-BMB04ZHY.mjs').then((r) => r.default));
const LazyThemesWidgetsDeal = defineAsyncComponent(() => import('./index-D3nzSjU_.mjs').then((r) => r.default));
const LazyThemesWidgetsFourColumnProduct = defineAsyncComponent(() => import('./index-CqvVwqy9.mjs').then((r) => r.default));
const LazyThemesWidgetsHomeBannerBerlin = defineAsyncComponent(() => import('./Berlin-D5IfTCrN.mjs').then((r) => r.default));
const LazyThemesWidgetsHomeBannerDenver = defineAsyncComponent(() => import('./Denver-CPNrmY9e.mjs').then((r) => r.default));
const LazyThemesWidgetsHomeBannerMadrid = defineAsyncComponent(() => import('./Madrid-DqCmloTD.mjs').then((r) => r.default));
const LazyThemesWidgetsHomeBannerOsaka = defineAsyncComponent(() => import('./Osaka-D3dKKLMx.mjs').then((r) => r.default));
const LazyThemesWidgetsHomeBannerParis = defineAsyncComponent(() => import('./Paris-g35CgsyG.mjs').then((r) => r.default));
const LazyThemesWidgetsHomeBannerRome = defineAsyncComponent(() => import('./Rome-BQF3dRS2.mjs').then((r) => r.default));
const LazyThemesWidgetsHomeBannerTokyo = defineAsyncComponent(() => import('./Tokyo-Dp1gFhYA.mjs').then((r) => r.default));
const LazyThemesWidgetsProduct = defineAsyncComponent(() => import('./index-OTTPGwoa.mjs').then((r) => r.default));
const LazyThemesWidgetsService = defineAsyncComponent(() => import('./index-BWESexYH.mjs').then((r) => r.default));
const LazyThemesWidgetsWalletOffer = defineAsyncComponent(() => import('./index-BfofmLq3.mjs').then((r) => r.default));
const LazyThemesWidgetsCollection = defineAsyncComponent(() => import('./index-dr19D4Xd.mjs').then((r) => r.default));
const LazyThemesWidgetsNewsletter = defineAsyncComponent(() => import('./index-CdAkXDRf.mjs').then((r) => r.default));
const LazyWidgetsAlert = defineAsyncComponent(() => import('./index-ssVLyIbt.mjs').then((r) => r.default));
const LazyWidgetsBackToTop = defineAsyncComponent(() => import('./index-BXRY-lbz.mjs').then((r) => r.default));
const LazyWidgetsBreadcrumb = defineAsyncComponent(() => import('./index-BB3w89tg.mjs').then((r) => r.default));
const LazyWidgetsButton = defineAsyncComponent(() => import('./index-CdatWNO3.mjs').then((r) => r.default));
const LazyWidgetsCategory = defineAsyncComponent(() => import('./index-BBvJKyN0.mjs').then((r) => r.default));
const LazyWidgetsCookie = defineAsyncComponent(() => import('./index-CHHzq0OX.mjs').then((r) => r.default));
const LazyWidgetsImageLink = defineAsyncComponent(() => import('./index-uA_ar0VB.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsCommonEmailInput = defineAsyncComponent(() => import('./EmailInput-DGFq9ZV4.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsCommonLargeTextInput = defineAsyncComponent(() => import('./LargeTextInput-oqRuzrWl.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsCommonSearchDropdownInput = defineAsyncComponent(() => import('./SearchDropdownInput-BRStx1Rm.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsCommonTextInput = defineAsyncComponent(() => import('./TextInput-C4houpP8.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsEmailField = defineAsyncComponent(() => import('./EmailField-BojWyXd0.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsNonEmptyField = defineAsyncComponent(() => import('./NonEmptyField-CvQGP-Qy.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsNumberField = defineAsyncComponent(() => import('./NumberField-D_3QVr37.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsPasswordField = defineAsyncComponent(() => import('./PasswordField-7r8oKleI.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsRePasswordField = defineAsyncComponent(() => import('./RePasswordField-DTJ5pMq3.mjs').then((r) => r.default));
const LazyWidgetsInputFieldsSearchDropdown = defineAsyncComponent(() => import('./SearchDropdown-DHfaS-o_.mjs').then((r) => r.default));
const LazyWidgetsLoader = defineAsyncComponent(() => import('./index-Dg95hgCG.mjs').then((r) => r.default));
const LazyWidgetsMobileCart = defineAsyncComponent(() => import('./index-DJ1Vkv4g.mjs').then((r) => r.default));
const LazyWidgetsModalsAddressModal = defineAsyncComponent(() => import('./index-BdUW6PKo.mjs').then((r) => r.default));
const LazyWidgetsModalsChnagePasswordModal = defineAsyncComponent(() => import('./index-BtYfkuY0.mjs').then((r) => r.default));
const LazyWidgetsModalsCommon = defineAsyncComponent(() => import('./index-De4InbXS.mjs').then((r) => r.default));
const LazyWidgetsModalsConfrmationModal = defineAsyncComponent(() => import('./index-BqSnbTRI.mjs').then((r) => r.default));
const LazyWidgetsModalsDeleteModal = defineAsyncComponent(() => import('./index-DCnfHsij.mjs').then((r) => r.default));
const LazyWidgetsModalsDeliveryReturnModal = defineAsyncComponent(() => import('./index-B8xgC6e1.mjs').then((r) => r.default));
const LazyWidgetsModalsEditProdileModal = defineAsyncComponent(() => import('./index-3nSzk2YZ.mjs').then((r) => r.default));
const LazyWidgetsModalsExitModal = defineAsyncComponent(() => import('./index-DfH-Qiyu.mjs').then((r) => r.default));
const LazyWidgetsModalsNewsletterModal = defineAsyncComponent(() => import('./index-BF6SAdZD.mjs').then((r) => r.default));
const LazyWidgetsModalsPayModal = defineAsyncComponent(() => import('./index-DLFrQal3.mjs').then((r) => r.default));
const LazyWidgetsModalsProductModalImages = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Images;
}).then((r) => r.default));
const LazyWidgetsModalsProductModalMain = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Main;
}).then((r) => r.default));
const LazyWidgetsModalsProductModalRight = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Right;
}).then((r) => r.default));
const LazyWidgetsModalsProductModal = defineAsyncComponent(() => Promise.resolve().then(function() {
  return index;
}).then((r) => r.default));
const LazyWidgetsModalsQuestionModal = defineAsyncComponent(() => import('./index-BAqQL5bv.mjs').then((r) => r.default));
const LazyWidgetsModalsRefundModal = defineAsyncComponent(() => import('./index-BThYQhNe.mjs').then((r) => r.default));
const LazyWidgetsModalsReviewModal = defineAsyncComponent(() => import('./index-4U42YdIQ.mjs').then((r) => r.default));
const LazyWidgetsModalsSizeChartModal = defineAsyncComponent(() => import('./index-36xWC6J0.mjs').then((r) => r.default));
const LazyWidgetsModalsVariationModal = defineAsyncComponent(() => import('./index-CNdF-Gmr.mjs').then((r) => r.default));
const LazyWidgetsNoData = defineAsyncComponent(() => import('./index-Bmsaf34f.mjs').then((r) => r.default));
const LazyWidgetsPagination = defineAsyncComponent(() => import('./index-DORLaeSS.mjs').then((r) => r.default));
const LazyWidgetsProductBoxHorizontal = defineAsyncComponent(() => import('./Horizontal-Dkn6eSRD.mjs').then((r) => r.default));
const LazyWidgetsProductBoxSkeletonProductBox = defineAsyncComponent(() => import('./SkeletonProductBox-XWsjMSl0.mjs').then((r) => r.default));
const LazyWidgetsProductBoxVertical = defineAsyncComponent(() => import('./Vertical-DcNKOdfj.mjs').then((r) => r.default));
const LazyWidgetsProductBox = defineAsyncComponent(() => import('./index-C8UkQut3.mjs').then((r) => r.default));
const LazyWidgetsRecentlyPurchasePoppup = defineAsyncComponent(() => import('./index-BR2GCeEN.mjs').then((r) => r.default));
const LazyWidgetsStickyCart = defineAsyncComponent(() => import('./index-C-XU1qPo.mjs').then((r) => r.default));
const LazyWidgetsStickyCompare = defineAsyncComponent(() => import('./index-C3qA-KXk.mjs').then((r) => r.default));
const LazyWidgetsThemeCustomizer = defineAsyncComponent(() => import('./index-DM5_HaAX.mjs').then((r) => r.default));
const LazyWidgetsTitle = defineAsyncComponent(() => import('./index-DFV7j_wu.mjs').then((r) => r.default));
const LazyWidgetsVariantAttributes = defineAsyncComponent(() => Promise.resolve().then(function() {
  return index$1;
}).then((r) => r.default));
const LazyWidgetsWapperTab = defineAsyncComponent(() => import('./index-Dlt19KKI.mjs').then((r) => r.default));
const LazyWidgetsWrapperForm = defineAsyncComponent(() => import('./Form-Bs8W6qiJ.mjs').then((r) => r.default));
const LazyNuxtRating = defineAsyncComponent(() => Promise.resolve().then(function() {
  return NuxtRating;
}).then((r) => r.default));
const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Icon;
}).then((r) => r.default));
const LazyIconCSS = defineAsyncComponent(() => import('./IconCSS-Co3IeK21.mjs').then((r) => r.default));
const lazyGlobalComponents = [
  ["AccountAddressesAddressBox", LazyAccountAddressesAddressBox],
  ["AccountAddresses", LazyAccountAddresses],
  ["AccountBankDetails", LazyAccountBankDetails],
  ["AccountDashboardProfileInformation", LazyAccountDashboardProfileInformation],
  ["AccountDashboardTotalContain", LazyAccountDashboardTotalContain],
  ["AccountDashboard", LazyAccountDashboard],
  ["AccountNotification", LazyAccountNotification],
  ["AccountOrdersDetailsConsumerDetails", LazyAccountOrdersDetailsConsumerDetails],
  ["AccountOrdersDetailsProductTable", LazyAccountOrdersDetailsProductTable],
  ["AccountOrdersDetailsSubOrders", LazyAccountOrdersDetailsSubOrders],
  ["AccountOrdersDetailsSummaryDetails", LazyAccountOrdersDetailsSummaryDetails],
  ["AccountOrdersDetailsTitleHeader", LazyAccountOrdersDetailsTitleHeader],
  ["AccountOrdersDetailsTrackingPanel", LazyAccountOrdersDetailsTrackingPanel],
  ["AccountOrdersDetails", LazyAccountOrdersDetails],
  ["AccountOrders", LazyAccountOrders],
  ["AccountPoint", LazyAccountPoint],
  ["AccountRefund", LazyAccountRefund],
  ["AccountSidebarNavLink", LazyAccountSidebarNavLink],
  ["AccountSidebar", LazyAccountSidebar],
  ["AccountWallet", LazyAccountWallet],
  ["AccountWrapper", LazyAccountWrapper],
  ["AuthCommonFormLoginForm", LazyAuthCommonFormLoginForm],
  ["AuthCommonFormRegisterForm", LazyAuthCommonFormRegisterForm],
  ["AuthForgotPassword", LazyAuthForgotPassword],
  ["AuthLogin", LazyAuthLogin],
  ["AuthOTP", LazyAuthOTP],
  ["AuthRegister", LazyAuthRegister],
  ["AuthUpdatePssword", LazyAuthUpdatePssword],
  ["BlogContent", LazyBlogContent],
  ["BlogDetails", LazyBlogDetails],
  ["BlogSkeletonBlogsVue", LazyBlogSkeletonBlogsVue],
  ["Blog", LazyBlog],
  ["BlogSidebarBlogCategory", LazyBlogSidebarBlogCategory],
  ["BlogSidebarBlogTag", LazyBlogSidebarBlogTag],
  ["BlogSidebarRecentPost", LazyBlogSidebarRecentPost],
  ["BlogSidebar", LazyBlogSidebar],
  ["FooterAbout", LazyFooterAbout],
  ["FooterCantact", LazyFooterCantact],
  ["FooterCategory", LazyFooterCategory],
  ["FooterLinks", LazyFooterLinks],
  ["FooterLogo", LazyFooterLogo],
  ["FooterPages", LazyFooterPages],
  ["FooterSocial", LazyFooterSocial],
  ["Footer", LazyFooter],
  ["HeaderBasicHeader", LazyHeaderBasicHeader],
  ["HeaderClassicHeader", LazyHeaderClassicHeader],
  ["HeaderElementsAllCategory", LazyHeaderElementsAllCategory],
  ["HeaderElementsCarts", LazyHeaderElementsCarts],
  ["HeaderElementsCategory", LazyHeaderElementsCategory],
  ["HeaderElementsCompare", LazyHeaderElementsCompare],
  ["HeaderElementsCurrency", LazyHeaderElementsCurrency],
  ["HeaderElementsDeals", LazyHeaderElementsDeals],
  ["HeaderElementsLanguage", LazyHeaderElementsLanguage],
  ["HeaderElementsLogo", LazyHeaderElementsLogo],
  ["HeaderElementsMenuList", LazyHeaderElementsMenuList],
  ["HeaderElementsMenuProduct", LazyHeaderElementsMenuProduct],
  ["HeaderElementsMyAccount", LazyHeaderElementsMyAccount],
  ["HeaderElementsNavMenuButton", LazyHeaderElementsNavMenuButton],
  ["HeaderElementsRecursiveMenu", LazyHeaderElementsRecursiveMenu],
  ["HeaderElementsSearch", LazyHeaderElementsSearch],
  ["HeaderElementsSearchBox", LazyHeaderElementsSearchBox],
  ["HeaderElementsSupport", LazyHeaderElementsSupport],
  ["HeaderElementsTodayDeal", LazyHeaderElementsTodayDeal],
  ["HeaderElementsTopContent", LazyHeaderElementsTopContent],
  ["HeaderElementsTopHeader", LazyHeaderElementsTopHeader],
  ["HeaderElementsWishlist", LazyHeaderElementsWishlist],
  ["HeaderElementsCart", LazyHeaderElementsCart],
  ["HeaderMinimalHeader", LazyHeaderMinimalHeader],
  ["HeaderStandardHeader", LazyHeaderStandardHeader],
  ["Header", LazyHeader],
  ["PagesAboutUsBlog", LazyPagesAboutUsBlog],
  ["PagesAboutUsClient", LazyPagesAboutUsClient],
  ["PagesAboutUsReview", LazyPagesAboutUsReview],
  ["PagesAboutUsTeam", LazyPagesAboutUsTeam],
  ["PagesAboutUsVegetable", LazyPagesAboutUsVegetable],
  ["PagesAboutUs", LazyPagesAboutUs],
  ["PagesContactUsContactDetails", LazyPagesContactUsContactDetails],
  ["PagesContactUsContactForm", LazyPagesContactUsContactForm],
  ["PagesContactUsMap", LazyPagesContactUsMap],
  ["PagesContactUs", LazyPagesContactUs],
  ["PagesContent", LazyPagesContent],
  ["PagesError404", LazyPagesError404],
  ["PagesFaq", LazyPagesFaq],
  ["PagesOffer", LazyPagesOffer],
  ["PagesSearch", LazyPagesSearch],
  ["ShopCartProducts", LazyShopCartProducts],
  ["ShopCartSummary", LazyShopCartSummary],
  ["ShopCheckoutAddressBlock", LazyShopCheckoutAddressBlock],
  ["ShopCheckoutDeliveryBlock", LazyShopCheckoutDeliveryBlock],
  ["ShopCheckout", LazyShopCheckout],
  ["ShopCheckoutPaymentBlock", LazyShopCheckoutPaymentBlock],
  ["ShopCheckoutSidebarCartSummary", LazyShopCheckoutSidebarCartSummary],
  ["ShopCheckoutSidebar", LazyShopCheckoutSidebar],
  ["ShopCollectionBanner", LazyShopCollectionBanner],
  ["ShopCollectionCategorySidebar", LazyShopCollectionCategorySidebar],
  ["ShopCollectionCategorySlider", LazyShopCollectionCategorySlider],
  ["ShopCollectionCategorySlug", LazyShopCollectionCategorySlug],
  ["ShopCollectionLeftSidebar", LazyShopCollectionLeftSidebar],
  ["ShopCollectionList", LazyShopCollectionList],
  ["ShopCollectionNoSidebar", LazyShopCollectionNoSidebar],
  ["ShopCollectionOffCanvasFilter", LazyShopCollectionOffCanvasFilter],
  ["ShopCollectionRightSidebar", LazyShopCollectionRightSidebar],
  ["ShopCollection", LazyShopCollection],
  ["ShopCollectionWidgetsBanner", LazyShopCollectionWidgetsBanner],
  ["ShopCollectionWidgetsCollectionCategory", LazyShopCollectionWidgetsCollectionCategory],
  ["ShopCollectionWidgetsCollectionProduct", LazyShopCollectionWidgetsCollectionProduct],
  ["ShopCollectionWidgetsCollectionSort", LazyShopCollectionWidgetsCollectionSort],
  ["ShopCollectionWidgetsFilterAttribute", LazyShopCollectionWidgetsFilterAttribute],
  ["ShopCollectionWidgetsFilterCategory", LazyShopCollectionWidgetsFilterCategory],
  ["ShopCollectionWidgetsFilterPrice", LazyShopCollectionWidgetsFilterPrice],
  ["ShopCollectionWidgetsFilterRating", LazyShopCollectionWidgetsFilterRating],
  ["ShopCollectionWidgetsFilter", LazyShopCollectionWidgetsFilter],
  ["ShopCollectionWidgetsSidebar", LazyShopCollectionWidgetsSidebar],
  ["ShopCompareContent", LazyShopCompareContent],
  ["ShopCompareSkeloton", LazyShopCompareSkeloton],
  ["ShopCompare", LazyShopCompare],
  ["ShopProductDetailsAccordions", LazyShopProductDetailsAccordions],
  ["ShopProductDetailsImage4Image", LazyShopProductDetailsImage4Image],
  ["ShopProductDetailsImage4", LazyShopProductDetailsImage4],
  ["ShopProductDetailsSidebar", LazyShopProductDetailsSidebar],
  ["ShopProductDetailsSilderImage", LazyShopProductDetailsSilderImage],
  ["ShopProductDetailsSilder", LazyShopProductDetailsSilder],
  ["ShopProductDetailsStickyImage", LazyShopProductDetailsStickyImage],
  ["ShopProductDetailsSticky", LazyShopProductDetailsSticky],
  ["ShopProductDetailsThumbnailImages", LazyShopProductDetailsThumbnailImages],
  ["ShopProductDetailsThumbnail", LazyShopProductDetailsThumbnail],
  ["ShopProductDetailsWidgetsPaymentOption", LazyShopProductDetailsWidgetsPaymentOption],
  ["ShopProductDetailsWidgetsProductAction", LazyShopProductDetailsWidgetsProductAction],
  ["ShopProductDetailsWidgetsProductBanner", LazyShopProductDetailsWidgetsProductBanner],
  ["ShopProductDetailsWidgetsProductBundle", LazyShopProductDetailsWidgetsProductBundle],
  ["ShopProductDetailsWidgetsProductContain", LazyShopProductDetailsWidgetsProductContain],
  ["ShopProductDetailsWidgetsProductDeliveryInformation", LazyShopProductDetailsWidgetsProductDeliveryInformation],
  ["ShopProductDetailsWidgetsProductDetailsAccordion", LazyShopProductDetailsWidgetsProductDetailsAccordion],
  ["ShopProductDetailsWidgetsProductDetailsTabs", LazyShopProductDetailsWidgetsProductDetailsTabs],
  ["ShopProductDetailsWidgetsProductInformation", LazyShopProductDetailsWidgetsProductInformation],
  ["ShopProductDetailsWidgetsProductReview", LazyShopProductDetailsWidgetsProductReview],
  ["ShopProductDetailsWidgetsProductSocialShare", LazyShopProductDetailsWidgetsProductSocialShare],
  ["ShopProductDetailsWidgetsProductView", LazyShopProductDetailsWidgetsProductView],
  ["ShopProductDetailsWidgetsQuestionsAnswers", LazyShopProductDetailsWidgetsQuestionsAnswers],
  ["ShopProductDetailsWidgetsRelatedProducts", LazyShopProductDetailsWidgetsRelatedProducts],
  ["ShopProductDetailsWidgetsSaleTimer", LazyShopProductDetailsWidgetsSaleTimer],
  ["ShopProductDetailsWidgetsStickyCheckout", LazyShopProductDetailsWidgetsStickyCheckout],
  ["ShopProductDetailsWidgetsStoreInformation", LazyShopProductDetailsWidgetsStoreInformation],
  ["ShopProductDetailsWidgetsTrendingProducts", LazyShopProductDetailsWidgetsTrendingProducts],
  ["ShopProductDetails", LazyShopProductDetails],
  ["ShopSellerBecomeSellerAbout", LazyShopSellerBecomeSellerAbout],
  ["ShopSellerBecomeSellerBusiness", LazyShopSellerBecomeSellerBusiness],
  ["ShopSellerBecomeSellerSelling", LazyShopSellerBecomeSellerSelling],
  ["ShopSellerBecomeSellerService", LazyShopSellerBecomeSellerService],
  ["ShopSellerBecomeSeller", LazyShopSellerBecomeSeller],
  ["ShopSellerDetailsBasic", LazyShopSellerDetailsBasic],
  ["ShopSellerDetailsClassic", LazyShopSellerDetailsClassic],
  ["ShopSellerStoreBasic", LazyShopSellerStoreBasic],
  ["ShopSellerStoreClassic", LazyShopSellerStoreClassic],
  ["ShopSellerStoreSekleton", LazyShopSellerStoreSekleton],
  ["ShopSellerWidgetsContectDetails", LazyShopSellerWidgetsContectDetails],
  ["ShopSellerWidgetsStoreDescription", LazyShopSellerWidgetsStoreDescription],
  ["ShopSellerWidgetsStoreLogo", LazyShopSellerWidgetsStoreLogo],
  ["ShopSellerWidgetsStoreName", LazyShopSellerWidgetsStoreName],
  ["ShopSellerWidgetsStoreProduct", LazyShopSellerWidgetsStoreProduct],
  ["ShopSellerWidgetsStoreProductCount", LazyShopSellerWidgetsStoreProductCount],
  ["ShopSellerWidgetsStoreRating", LazyShopSellerWidgetsStoreRating],
  ["ShopSellerWidgetsStoreSocialLink", LazyShopSellerWidgetsStoreSocialLink],
  ["ShopWishlist", LazyShopWishlist],
  ["ThemesBerlin", LazyThemesBerlin],
  ["ThemesDenver", LazyThemesDenver],
  ["ThemesMadrid", LazyThemesMadrid],
  ["ThemesOsaka", LazyThemesOsaka],
  ["ThemesParisLeftContent", LazyThemesParisLeftContent],
  ["ThemesParisRightContent", LazyThemesParisRightContent],
  ["ThemesParis", LazyThemesParis],
  ["ThemesRome", LazyThemesRome],
  ["ThemesTokyo", LazyThemesTokyo],
  ["ThemesWidgetsBanner", LazyThemesWidgetsBanner],
  ["ThemesWidgetsBlogSkeletonSliderBlog", LazyThemesWidgetsBlogSkeletonSliderBlog],
  ["ThemesWidgetsBlog", LazyThemesWidgetsBlog],
  ["ThemesWidgetsCategories", LazyThemesWidgetsCategories],
  ["ThemesWidgetsDeal", LazyThemesWidgetsDeal],
  ["ThemesWidgetsFourColumnProduct", LazyThemesWidgetsFourColumnProduct],
  ["ThemesWidgetsHomeBannerBerlin", LazyThemesWidgetsHomeBannerBerlin],
  ["ThemesWidgetsHomeBannerDenver", LazyThemesWidgetsHomeBannerDenver],
  ["ThemesWidgetsHomeBannerMadrid", LazyThemesWidgetsHomeBannerMadrid],
  ["ThemesWidgetsHomeBannerOsaka", LazyThemesWidgetsHomeBannerOsaka],
  ["ThemesWidgetsHomeBannerParis", LazyThemesWidgetsHomeBannerParis],
  ["ThemesWidgetsHomeBannerRome", LazyThemesWidgetsHomeBannerRome],
  ["ThemesWidgetsHomeBannerTokyo", LazyThemesWidgetsHomeBannerTokyo],
  ["ThemesWidgetsProduct", LazyThemesWidgetsProduct],
  ["ThemesWidgetsService", LazyThemesWidgetsService],
  ["ThemesWidgetsWalletOffer", LazyThemesWidgetsWalletOffer],
  ["ThemesWidgetsCollection", LazyThemesWidgetsCollection],
  ["ThemesWidgetsNewsletter", LazyThemesWidgetsNewsletter],
  ["WidgetsAlert", LazyWidgetsAlert],
  ["WidgetsBackToTop", LazyWidgetsBackToTop],
  ["WidgetsBreadcrumb", LazyWidgetsBreadcrumb],
  ["WidgetsButton", LazyWidgetsButton],
  ["WidgetsCategory", LazyWidgetsCategory],
  ["WidgetsCookie", LazyWidgetsCookie],
  ["WidgetsImageLink", LazyWidgetsImageLink],
  ["WidgetsInputFieldsCommonEmailInput", LazyWidgetsInputFieldsCommonEmailInput],
  ["WidgetsInputFieldsCommonLargeTextInput", LazyWidgetsInputFieldsCommonLargeTextInput],
  ["WidgetsInputFieldsCommonSearchDropdownInput", LazyWidgetsInputFieldsCommonSearchDropdownInput],
  ["WidgetsInputFieldsCommonTextInput", LazyWidgetsInputFieldsCommonTextInput],
  ["WidgetsInputFieldsEmailField", LazyWidgetsInputFieldsEmailField],
  ["WidgetsInputFieldsNonEmptyField", LazyWidgetsInputFieldsNonEmptyField],
  ["WidgetsInputFieldsNumberField", LazyWidgetsInputFieldsNumberField],
  ["WidgetsInputFieldsPasswordField", LazyWidgetsInputFieldsPasswordField],
  ["WidgetsInputFieldsRePasswordField", LazyWidgetsInputFieldsRePasswordField],
  ["WidgetsInputFieldsSearchDropdown", LazyWidgetsInputFieldsSearchDropdown],
  ["WidgetsLoader", LazyWidgetsLoader],
  ["WidgetsMobileCart", LazyWidgetsMobileCart],
  ["WidgetsModalsAddressModal", LazyWidgetsModalsAddressModal],
  ["WidgetsModalsChnagePasswordModal", LazyWidgetsModalsChnagePasswordModal],
  ["WidgetsModalsCommon", LazyWidgetsModalsCommon],
  ["WidgetsModalsConfrmationModal", LazyWidgetsModalsConfrmationModal],
  ["WidgetsModalsDeleteModal", LazyWidgetsModalsDeleteModal],
  ["WidgetsModalsDeliveryReturnModal", LazyWidgetsModalsDeliveryReturnModal],
  ["WidgetsModalsEditProdileModal", LazyWidgetsModalsEditProdileModal],
  ["WidgetsModalsExitModal", LazyWidgetsModalsExitModal],
  ["WidgetsModalsNewsletterModal", LazyWidgetsModalsNewsletterModal],
  ["WidgetsModalsPayModal", LazyWidgetsModalsPayModal],
  ["WidgetsModalsProductModalImages", LazyWidgetsModalsProductModalImages],
  ["WidgetsModalsProductModalMain", LazyWidgetsModalsProductModalMain],
  ["WidgetsModalsProductModalRight", LazyWidgetsModalsProductModalRight],
  ["WidgetsModalsProductModal", LazyWidgetsModalsProductModal],
  ["WidgetsModalsQuestionModal", LazyWidgetsModalsQuestionModal],
  ["WidgetsModalsRefundModal", LazyWidgetsModalsRefundModal],
  ["WidgetsModalsReviewModal", LazyWidgetsModalsReviewModal],
  ["WidgetsModalsSizeChartModal", LazyWidgetsModalsSizeChartModal],
  ["WidgetsModalsVariationModal", LazyWidgetsModalsVariationModal],
  ["WidgetsNoData", LazyWidgetsNoData],
  ["WidgetsPagination", LazyWidgetsPagination],
  ["WidgetsProductBoxHorizontal", LazyWidgetsProductBoxHorizontal],
  ["WidgetsProductBoxSkeletonProductBox", LazyWidgetsProductBoxSkeletonProductBox],
  ["WidgetsProductBoxVertical", LazyWidgetsProductBoxVertical],
  ["WidgetsProductBox", LazyWidgetsProductBox],
  ["WidgetsRecentlyPurchasePoppup", LazyWidgetsRecentlyPurchasePoppup],
  ["WidgetsStickyCart", LazyWidgetsStickyCart],
  ["WidgetsStickyCompare", LazyWidgetsStickyCompare],
  ["WidgetsThemeCustomizer", LazyWidgetsThemeCustomizer],
  ["WidgetsTitle", LazyWidgetsTitle],
  ["WidgetsVariantAttributes", LazyWidgetsVariantAttributes],
  ["WidgetsWapperTab", LazyWidgetsWapperTab],
  ["WidgetsWrapperForm", LazyWidgetsWrapperForm],
  ["NuxtRating", LazyNuxtRating],
  ["Icon", LazyIcon],
  ["IconCSS", LazyIconCSS]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_2, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry2 of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
      const s = entry2.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers, width: _cWidth, height: _cHeight }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL: baseURL2 } = {}, _ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL2) {
    baseURL2 = joinURL("/", "/_ipx");
  }
  return {
    url: joinURL(baseURL2, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$uyORycHfrH = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$uyORycHfrH, defaults: {} }
};
const plugin_OrkQhMqHci = /* @__PURE__ */ defineNuxtPlugin(() => {
  const img = createImage(imageOptions);
  return {
    provide: {
      img
    }
  };
});
const axios_QMFgzss1s4 = /* @__PURE__ */ defineNuxtPlugin((async) => {
  return {
    provide: {
      axios
    }
  };
});
const directives_GDwrTGmylM = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("bgImage", {
    getSSRProps({ value }, vnode) {
      return {};
    }
  });
});
const errorHandler_cfkZ75xwSQ = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
});
const english = {
  "All Category": "All Category",
  "New": "New",
  "Hot": "Hot",
  "Home": "Home",
  "Paris": "Paris",
  "Tokyo": "Tokyo",
  "Osaka": "Osaka",
  "Rome": "Rome",
  "Madrid": "Madrid",
  "Berlin": "Berlin",
  "Denver": "Denver",
  "Help Center": "Help Center",
  "Email Address": "Email Address",
  "Theme Colo": "Theme Colo",
  "Collections": "Collections",
  "Collection Layouts": "Collection Layouts",
  "Collection Left Sidebar": "Collection Left Sidebar",
  "Collection Right Sidebar": "Collection Right Sidebar",
  "Collection No Sidebar": "Collection No Sidebar",
  "Collection 3 Grid": "Collection 3 Grid",
  "Collection 4 Grid": "Collection 4 Grid",
  "Collection 5 Grid": "Collection 5 Grid",
  "Collection List View": "Collection List View",
  "Category Slider": "Category Slider",
  "Category Sidebar": "Category Sidebar",
  "Category Banner": "Category Banner",
  "Offcanvas Filter": "Offcanvas Filter",
  "Product": "Product",
  "Product Pages": "Product Pages",
  "Product Thumbnail": "Product Thumbnail",
  "Product Images": "Product Images",
  "Product Slider": "Product Slider",
  "Product Sticky": "Product Sticky",
  "Product Accordion": "Product Accordion",
  "Product Tab": "Product Tab",
  "Product Features": "Product Features",
  "Bundle (Cross Sale)": "Bundle (Cross Sale)",
  "Hot Stock Progress": "Hot Stock Progress",
  "SOLD OUT": "SOLD OUT",
  "Sale Countdown": "Sale Countdown",
  "Product Zoom": "Product Zoom",
  "Product Variants Style": "Product Variants Style",
  "Variant Rectangle": "Variant Rectangle",
  "Variant Circle": "Variant Circle",
  "Variant Image Swatch": "Variant Image Swatch",
  "Variant Color": "Variant Color",
  "Variant Radio Button": "Variant Radio Button",
  "Variant Dropdown": "Variant Dropdown",
  "Sticky Checkout": "Sticky Checkout",
  "Dynamic Checkout": "Dynamic Checkout",
  "Secure Checkout": "Secure Checkout",
  "Active Product view": "Active Product view",
  "Active Last Orders": "Active Last Orders",
  "Product Simple": "Product Simple",
  "Product Classified": "Product Classified",
  "Size Chart": "Size Chart",
  "Delivery & Return": "Delivery & Return",
  "Payment Trust Badges": "Payment Trust Badges",
  "Ask an Expert": "Ask an Expert",
  "Product Tags": "Product Tags",
  "Product Information": "Product Information",
  "Social Share": "Social Share",
  "Related Products": "Related Products",
  "Wishlist & Compare": "Wishlist & Compare",
  "Features": "Features",
  "Theme Features": "Theme Features",
  "Sticky Compare": "Sticky Compare",
  "Cart Hover & Sticky": "Cart Hover & Sticky",
  "Cart Sidebar": "Cart Sidebar",
  "Cart Customize": "Cart Customize",
  "Email Template": "Email Template",
  "Welcome Template": "Welcome Template",
  "Abandonment": "Abandonment",
  "Offer Template": "Offer Template",
  "Order Success": "Order Success",
  "Reset Password": "Reset Password",
  "Recent Purchase Product": "Recent Purchase Product",
  "Newsletter": "Newsletter",
  "Quick View Modal": "Quick View Modal",
  "Exit Modal": "Exit Modal",
  "Invoice Template": "Invoice Template",
  "Invoice Template 1": "Invoice Template 1",
  "Invoice Template 2": "Invoice Template 2",
  "Invoice Template 3": "Invoice Template 3",
  "Blog": "Blog",
  "Blog Pages": "Blog Pages",
  "Blog List": "Blog List",
  "Grid Left Sidebar": "Grid Left Sidebar",
  "Grid Right Sidebar": "Grid Right Sidebar",
  "Grid No Sidebar": "Grid No Sidebar",
  "Blog Details": "Blog Details",
  "Pages": "Pages",
  "Authentication": "Authentication",
  "Sign In": "Sign In",
  "Sign Up": "Sign Up",
  "Forgot Password": "Forgot Password",
  "Verify OTP": "Verify OTP",
  "Update Password": "Update Password",
  "Account": "Account",
  "My Dashboard": "My Dashboard",
  "My Notifications": "My Notifications",
  "My Addresses": "My Addresses",
  "My Wallet": "My Wallet",
  "My Points": "My Points",
  "My Orders": "My Orders",
  "Order Details": "Order Details",
  "Refund History": "Refund History",
  "Payout Details": "Payout Details",
  "About Us": "About Us",
  "Browse FAQs": "Browse FAQs",
  "Cart": "Cart",
  "Checkout": "Checkout",
  "Compare": "Compare",
  "Contact Us": "Contact Us",
  "Maintenance": "Maintenance",
  "Offers": "Offers",
  "Search": "Search",
  "Wishlist": "Wishlist",
  "404": "404",
  "Seller": "Seller",
  "Become Seller": "Become Seller",
  "Seller Stores (Basic)": "Seller Stores (Basic)",
  "Seller Stores (Classic)": "Seller Stores (Classic)",
  "Store Details (Basic)": "Store Details (Basic)",
  "Store Details (Classic)": "Store Details (Classic)",
  "Categories": "Categories",
  "Shop Now": "Shop Now",
  "Trending Products": "Trending Products",
  "Saved Address": "Saved Address",
  "Add Address": "Add Address",
  "Address": "Address",
  "Pin Code": "Pin Code",
  "Phone": "Phone",
  "Edit": "Edit",
  "Remove": "Remove",
  "Bank Details": "Bank Details",
  "Bank Account No": "Bank Account No",
  "Enter Bank Account No": "Enter Bank Account No",
  "Bank Name": "Bank Name",
  "Enter Bank Name": "Enter Bank Name",
  "Holder Name": "Holder Name",
  "Enter Bank Holder Name": "Enter Bank Holder Name",
  "Swift": "Swift",
  "Enter Swift": "Enter Swift",
  "IFSC": "IFSC",
  "Enter IFSC": "Enter IFSC",
  "Paypal Details": "Paypal Details",
  "Paypal Email": "Paypal Email",
  "Enter Paypal Email": "Enter Paypal Email",
  "Save": "Save",
  "Hello": "Hello",
  "Welcome Text": "Welcome Text",
  "Balance": "Balance",
  "Total Points": "Total Points",
  "Total Orders": "Total Orders",
  "Profile Information": "Profile Information",
  "Name": "Name",
  "Login Details": "Login Details",
  "Email": "Email",
  "Password": "Password",
  "Notifications": "Notifications",
  "Order Number": "Order Number",
  "Pay Now": "Pay Now",
  "Invoice": "Invoice",
  "Image": "Image",
  "Price": "Price",
  "Quantity": "Quantity",
  "Subtotal": "Subtotal",
  "Action": "Action",
  "Ask For Refund": "Ask For Refund",
  "Consumer Details": "Consumer Details",
  "Billing Address": "Billing Address",
  "Shipping Address": "Shipping Address",
  "Shipping": "Shipping",
  "Delivery Slot": "Delivery Slot",
  "Payment Mode": "Payment Mode",
  "Payment Status": "Payment Status",
  "Summary": "Summary",
  "Shipping": "Shipping",
  "Tax": "Tax",
  "Points": "Points",
  "Wallet Balance": "Wallet Balance",
  "Coupon Discount": "Coupon Discount",
  "Total": "Total",
  "Order Date": "Order Date",
  "Total Amount": "Total Amount",
  "Status": "Status",
  "No": "No",
  "Date": "Date",
  "Amount": "Amount",
  "Payment Method": "Payment Method",
  "Option": "Option",
  "1 Point": "1 Point",
  "Remark": "Remark",
  "Transactions": "Transactions",
  "Refund": "Refund",
  "Reason": "Reason",
  "Created at": "Created at",
  "Dashboard": "Dashboard",
  "Earning Points": "Earning Points",
  "Logout": "Logout",
  "Show Menu": "Show Menu",
  "Welcome To Fastkart": "Welcome To Fastkart",
  "Forgot Your Password": "Forgot Your Password",
  "Email Address": "Email Address",
  "Email is required": "Email is required",
  "Invalid Email": "Invalid Email",
  "Send": "Send",
  "Register Your Account": "Register Your Account",
  "Login Your Account": "Login Your Account",
  "Password is required": "Password is required",
  "Remember me": "Remember me",
  "Log In": "Log In",
  "Or": "Or",
  "Don't have an account": "Don't have an account",
  "Please enter the one-time password to verify your account": "Please enter the one-time password to verify your account",
  "A code has been sent to": "A code has been sent to",
  "Validate": "Validate",
  "Welcome To Our Store": "Welcome To Our Store",
  "Create New Account": "Create New Account",
  "Full Name": "Full Name",
  "Name is required": "Name is required",
  "Phone Number": "Phone Number",
  "Phone number is required": "Phone number is required",
  "Password Confirmation": "Password Confirmation",
  "Confirm Password is required": "Confirm Password is required",
  "Confirm password does not match": "Confirm password does not match",
  "I agree with": "I agree with",
  "Terms": "Terms",
  "And": "And",
  "Privacy": "Privacy",
  "Already have an account": "Already have an account",
  "Reset Your Account Password": "Reset Your Account Password",
  "New password": "New password",
  "New Password is required": "New Password is required",
  "Confirm password": "Confirm password",
  "Submit": "Submit",
  "Recent Posts": "Recent Posts",
  "Tags": "Tags",
  "Featured": "Featured",
  "Read More": "Read More",
  "We make Organic Food In Market": "We make Organic Food In Market",
  "Just a few seconds to measure your body temperature. Up to 5 users! The battery lasts up to 2 years. There are many variations of passages of Lorem Ipsum available. We started in 2019 and haven't stopped smashing it since. A global brand that doesn't sleep, we are 24/7 and always bringing something new with over 100 new products dropping on the monthly, bringing you the latest looks for less.": "Just a few seconds to measure your body temperature. Up to 5 users! The battery lasts up to 2 years. There are many variations of passages of Lorem Ipsum available. We started in 2019 and haven't stopped smashing it since. A global brand that doesn't sleep, we are 24/7 and always bringing something new with over 100 new products dropping on the monthly, bringing you the latest looks for less.",
  "Free delivery for all orders": "Free delivery for all orders",
  "Only fresh foods": "Only fresh foods",
  "What We Do": "What We Do",
  "We are Trusted by Clients": "We are Trusted by Clients",
  "Our Creative Team": "Our Creative Team",
  "Fastkart team member": "Fastkart team member",
  "Latest Testimonials": "Latest Testimonials",
  "What people say": "What people say",
  "Our Blog": "Our Blog",
  "Our Latest Blog": "Our Latest Blog",
  "Get In Touch": "Get In Touch",
  "Enter Full Name": "Enter Full Name",
  "Subject": "Subject",
  "Enter Subject": "Enter Subject",
  "Subject is required": "Subject is required",
  "Message": "Message",
  "Enter Your Message": "Enter Your Message",
  "Message is required": "Message is required",
  "Send Message": "Send Message",
  "Enter Email Address": "Enter Email Address",
  "Enter Your Phone Number": "Enter Your Phone Number",
  "Copy Code": "Copy Code",
  "Search for products": "Search for products",
  "Sold By": "Sold By",
  "Fastkart": "Fastkart",
  "Unit": "Unit",
  "Saving": "Saving",
  "You Save": "You Save",
  "Save for later": "Save for later",
  "Cart Total": "Cart Total",
  "Process To Checkout": "Process To Checkout",
  "Return To Shopping": "Return To Shopping",
  "Cost at Checkout": "Cost at Checkout",
  "No Address Found": "No Address Found",
  "Select Timing Slot": "Select Timing Slot",
  "Add New": "Add New",
  "Delivery Options": "Delivery Options",
  "No Delivery Options Found": "No Delivery Options Found",
  "Payment Options": "Payment Options",
  "No Payment Options Found": "No Payment Options Found",
  "Not Calculated Yet": "Not Calculated Yet",
  "Would you prefer to pay using points?": "Would you prefer to pay using points?",
  "Would you prefer to pay using wallet?": "Would you prefer to pay using wallet?",
  "Have a Promo Code": "Have a Promo Code",
  "Enter Coupon Code Here": "Enter Coupon Code Here",
  "Apply": "Apply",
  "You Saved": "You Saved",
  "With this code": "With this code",
  "Coupon Applied": "Coupon Applied",
  "Place Order": "Place Order",
  "Filter Menu": "Filter Menu",
  "Sort By": "Sort By",
  "Filters": "Filters",
  "Clear All": "Clear All",
  "Back": "Back",
  "Rating": "Rating",
  "Star": "Star",
  "Discount": "Discount",
  "Availability": "Availability",
  "Review": "Review",
  "Weight": "Weight",
  "Move To Cart": "Move To Cart",
  "Order failed": "Order failed",
  "Payment Is Successfully And Your Order Is On The Way": "Payment Is Successfully And Your Order Is On The Way",
  "Payment Is Failed Please Try Again": "Payment Is Failed Please Try Again",
  "Qty": "Qty",
  "Price Details": "Price Details",
  "Shipping charges": "Shipping charges",
  "Wallet Point": "Wallet Point",
  "USD": "USD",
  "SALE": "SALE",
  "Guaranteed Safe Checkout": "Guaranteed Safe Checkout",
  "Please hurry! Only": "Please hurry! Only",
  "left in stock": "left in stock",
  "Ask a question": "Ask a question",
  "Frequently bought together": "Frequently bought together",
  "Product Selected for": "Product Selected for",
  "Add All To Cart": "Add All To Cart",
  "Customers Ordered": "Customers Ordered",
  "Active View in this item": "Active View in this item",
  "Off": "Off",
  "Add to Cart": "Add to Cart",
  "Delivery Details": "Delivery Details",
  "Description": "Description",
  "Q&A": "Q&A",
  "SKU": "SKU",
  "Stock Status": "Stock Status",
  "Gms": "Gms",
  "Items Left": "Items Left",
  "Review this product": "Review this product",
  "Let other customers know what you think": "Let other customers know what you think",
  "Write a review": "Write a review",
  "Edit Review": "Edit Review",
  "Share it": "Share it",
  "Q": "Q",
  "A": "A",
  "Hurry up! Sales Ends In": "Hurry up! Sales Ends In",
  "Days": "Days",
  "Hours": "Hours",
  "Min": "Min",
  "Sec": "Sec",
  "Contact": "Contact",
  "If You Any Query": "If You Any Query",
  "Visit Store": "Visit Store",
  "Products": "Products",
  "Follow Us": "Follow Us",
  "Sold": "Sold",
  "Items": "Items",
  "Hurry up offer end in": "Hurry up offer end in",
  "Offer Closed": "Offer Closed",
  "Subscribe": "Subscribe",
  "Code": "Code",
  "Useful Links": "Useful Links",
  "Quick Pages": "Quick Pages",
  "Customer Support 24/7": "Customer Support 24/7",
  "Download App": "Download App",
  "Stay connected": "Stay connected",
  "Menu": "Menu",
  "24/7 Support Center": "24/7 Support Center",
  "Unread messages": "Unread messages",
  "Shopping Cart": "Shopping Cart",
  "Spend": "Spend",
  "More and enjoy": "More and enjoy",
  "FREE SHIPPING": "FREE SHIPPING",
  "Congratulations": "Congratulations",
  "Enjoy free shipping on us": "Enjoy free shipping on us",
  "Your cart is currently empty": "Your cart is currently empty",
  "Shipping and taxes are calculated at checkout": "Shipping and taxes are calculated at checkout",
  "View Cart": "View Cart",
  "Deal Today": "Deal Today",
  "Hot Deals": "Hot Deals",
  "Hi": "Hi",
  "My Account": "My Account",
  "Register": "Register",
  "Log Out": "Log Out",
  "Get the App": "Get the App",
  "Loading": "Loading",
  "Edit Address": "Edit Address",
  "Title": "Title",
  "Enter Title": "Enter Title",
  "Title is required": "Title is required",
  "Enter Address": "Enter Address",
  "Street address is required": "Street address is required",
  "Country": "Country",
  "Select Country": "Select Country",
  "Country is required": "Country is required",
  "State": "State",
  "Select State": "Select State",
  "State is required": "State is required",
  "City": "City",
  "Enter City": "Enter City",
  "City is required": "City is required",
  "Pincode": "Pincode",
  "Enter Pincode": "Enter Pincode",
  "Pincode is required": "Pincode is required",
  "Enter Phone": "Enter Phone",
  "Phone number is invalid": "Phone number is invalid",
  "Cancel": "Cancel",
  "Change Password": "Change Password",
  "Current Password": "Current Password",
  "Enter Current Password": "Enter Current Password",
  "Current Password is required": "Current Password is required",
  "Enter New Password": "Enter New Password",
  "Enter Confirm Password": "Enter Confirm Password",
  "Confirmation": "Confirmation",
  "Are you sure you want to proceed": "Are you sure you want to proceed",
  "Yes": "Yes",
  "Recommended deals for you.": "Recommended deals for you.",
  "Delete Item": "Delete Item",
  "This Item Will Be Deleted Permanently. You Can't Undo This Action.": "This Item Will Be Deleted Permanently. You Can't Undo This Action.",
  "Edit Profile": "Edit Profile",
  "Enter Name": "Enter Name",
  "Email address is required": "Email address is required",
  "Please enter valid email": "Please enter valid email",
  "Wait": "Wait",
  "I'm sorry to see you go.": "I'm sorry to see you go.",
  "In order to earn 10% off your first purchase, provide your email address.": "In order to earn 10% off your first purchase, provide your email address.",
  "15%": "15%",
  "Want to make your purchase": "Want to make your purchase",
  "Plus, early access to new arrivals, exclusive sales, & lots more": "Plus, early access to new arrivals, exclusive sales, & lots more",
  "Select payment method is required": "Select payment method is required",
  "Product Details": "Product Details",
  "Your Questions": "Your Questions",
  "Enter Reason": "Enter Reason",
  "Reason is required": "Reason is required",
  "Select Payment Option": "Select Payment Option",
  "Payment type is required": "Payment type is required",
  "Rating is required": "Rating is required",
  "Review Content": "Review Content",
  "Write something": "Write something",
  "Update Item": "Update Item",
  "Add": "Add",
  "Someone Recently Purchased": "Someone Recently Purchased",
  "Minutes ago": "Minutes ago",
  "Color": "Color",
  "Theme Color": "Theme Color",
  "Dark": "Dark",
  "Light": "Light",
  "RTL": "RTL",
  "LTR": "LTR",
  "Choose": "Choose",
  "Buy Now": "Buy Now",
  "Let other customers know what you think.": "Let other customers know what you think.",
  "Have Doubts Regarding This Product": "Have Doubts Regarding This Product",
  "Post Your Question": "Post Your Question",
  "1": "1",
  "2": "2",
  "3": "3",
  "User": "User",
  "Cookies": "Cookies",
  "We use cookies to make your experience better": "We use cookies to make your experience better",
  "Privacy Policy": "Privacy Policy",
  "OK": "OK",
  "Welcome to Fastkart": "Welcome to Fastkart",
  "Reset your account password": "Reset your account password",
  "New Password": "New Password",
  "Confirm Password": "Confirm Password",
  "Password Confirmation": "Password Confirmation",
  "Notification": "Notification",
  "Welcome to your personalized My Account Dashboard. Here, you have the power to manage your entire e-commerce  experience in one place.Whether you're exploring the latest products, checking your wallet balance, or updating  your profile, everything is at your fingertips": "Welcome to your personalized My Account Dashboard. Here, you have the power to manage your entire e-commerce  experience in one place.Whether you're exploring the latest products, checking your wallet balance, or updating  your profile, everything is at your fingertips",
  "Order": "Order",
  "Created At": "Created At",
  "This Field Cannot Be Empty": "This Field Cannot Be Empty",
  "phone number is required.": "phone number is required.",
  "Frequently Asked Questions": "Frequently Asked Questions",
  "We are answering most frequent questions. No worries if you not find exact one. You can find out more by searching.": "We are answering most frequent questions. No worries if you not find exact one. You can find out more by searching.",
  "London Office": "London Office",
  "Bournemouth Office": "Bournemouth Office",
  "Copy Code ": "Copy Code ",
  " Search": " Search",
  "Select Timing Slot:": "Select Timing Slot:",
  //----------New -----------//
  "Minutes Ago": "Minutes Ago",
  "Category": "Category",
  "Recent Post": "Recent Post",
  "Email Address :": "Email Address :",
  "Become a Seller": "Become a Seller",
  "Loading...": "Loading...",
  "Free Shipping": "Free Shipping",
  "Hi , User ": "Hi , User ",
  "Forgot Password ?": "Forgot Password ?",
  "Please hurry! only": "Please hurry! only",
  "Delivery Return": "Delivery Return",
  "Ask a Question": "Ask a Question",
  " Add All To Cart": " Add All To Cart",
  "I am sorry to see you go": "I am sorry to see you go",
  "Log In Your Account": "Log In Your Account",
  "or": "or",
  "password": "password",
  "and": "and",
  "Forgot your password": "Forgot your password",
  "Email Adrress": "Email Adrress",
  "email": "email",
  // new add
  "Become a Seller": "Become a Seller",
  "Email Address": "Email Address",
  "Minutes Ago": "Minutes Ago",
  "Sold Out": "Sold Out",
  "FEATURED": "FEATURED",
  "subscribe": "subscribe",
  "All Categories": "All Categories",
  "Free Shipping": "Free Shipping",
  "Hi , User": "Hi , User",
  "items": "items"
};
const french = {
  "All Category": "Toutes catégories",
  "New": "Nouveau",
  "Hot": "Populaire",
  "Home": "Accueil",
  "Paris": "Paris",
  "Tokyo": "Tokyo",
  "Osaka": "Osaka",
  "Rome": "Rome",
  "Madrid": "Madrid",
  "Berlin": "Berlin",
  "Denver": "Denver",
  "Collections": "Collections",
  "Collection Layouts": "Mises en page de collection",
  "Collection Left Sidebar": "Collection avec barre latérale gauche",
  "Collection Right Sidebar": "Collection avec barre latérale droite",
  "Collection No Sidebar": "Collection sans barre latérale",
  "Collection 3 Grid": "Collection 3 grilles",
  "Collection 4 Grid": "Collection 4 grilles",
  "Collection 5 Grid": "Collection 5 grilles",
  "Collection List View": "Vue en liste de la collection",
  "Category Slider": "Curseur de catégorie",
  "Category Sidebar": "Barre latérale de catégorie",
  "Category Banner": "Bannière de catégorie",
  "Offcanvas Filter": "Filtre hors toile",
  "Product": "Produit",
  "Product Pages": "Pages de produit",
  "Product Thumbnail": "Miniature de produit",
  "Product Images": "Images de produit",
  "Product Slider": "Curseur de produit",
  "Product Sticky": "Produit collant",
  "Product Accordion": "Accordéon de produit",
  "Product Tab": "Onglet de produit",
  "Product Features": "Caractéristiques du produit",
  "Bundle (Cross Sale)": "Pack (Vente croisée)",
  "Hot Stock Progress": "Progrès du stock populaire",
  "SOLD OUT": "ÉPUISÉ",
  "Sale Countdown": "Compte à rebours de vente",
  "Product Zoom": "Zoom produit",
  "Product Variants Style": "Style de variantes de produit",
  "Variant Rectangle": "Rectangle de variante",
  "Variant Circle": "Cercle de variante",
  "Variant Image Swatch": "Échantillon d'image de variante",
  "Variant Color": "Couleur de variante",
  "Variant Radio Button": "Bouton radio de variante",
  "Variant Dropdown": "Menu déroulant de variante",
  "Sticky Checkout": "Caisse collante",
  "Dynamic Checkout": "Caisse dynamique",
  "Secure Checkout": "Caisse sécurisée",
  "Active Product view": "Vue active du produit",
  "Active Last Orders": "Dernières commandes actives",
  "Product Simple": "Produit simple",
  "Product Classified": "Produit classé",
  "Size Chart": "Tableau des tailles",
  "Delivery & Return": "Livraison et retour",
  "Payment Trust Badges": "Badges de confiance en paiement",
  "Ask an Expert": "Demander à un expert",
  "Product Tags": "Étiquettes de produit",
  "Product Information": "Informations sur le produit",
  "Social Share": "Partage social",
  "Related Products": "Produits connexes",
  "Wishlist & Compare": "Liste de souhaits et comparaison",
  "Features": "Fonctionnalités",
  "Theme Features": "Fonctionnalités du thème",
  "Sticky Compare": "Comparaison collante",
  "Cart Hover & Sticky": "Survol du panier et collant",
  "Cart Sidebar": "Barre latérale du panier",
  "Cart Customize": "Personnalisation du panier",
  "Email Template": "Modèle d'e-mail",
  "Welcome Template": "Modèle de bienvenue",
  "Abandonment": "Abandon",
  "Offer Template": "Modèle d'offre",
  "Order Success": "Commande réussie",
  "Reset Password": "Réinitialiser le mot de passe",
  "Recent Purchase Product": "Produit récemment acheté",
  "Newsletter": "Bulletin d'information",
  "Quick View Modal": "Fenêtre d'aperçu rapide",
  "Exit Modal": "Fenêtre de sortie",
  "Invoice Template": "Modèle de facture",
  "Invoice Template 1": "Modèle de facture 1",
  "Invoice Template 2": "Modèle de facture 2",
  "Invoice Template 3": "Modèle de facture 3",
  "Blog": "Blog",
  "Blog Pages": "Pages du blog",
  "Blog List": "Liste de blog",
  "Grid Left Sidebar": "Grille avec barre latérale gauche",
  "Grid Right Sidebar": "Grille avec barre latérale droite",
  "Grid No Sidebar": "Grille sans barre latérale",
  "Blog Details": "Détails du blog",
  "Pages": "Pages",
  "Authentication": "Authentification",
  "Sign In": "Se connecter",
  "Sign Up": "S'inscrire",
  "Forgot Password": "Mot de passe oublié",
  "Verify OTP": "Vérifier le code OTP",
  "Update Password": "Mettre à jour le mot de passe",
  "Account": "Compte",
  "My Dashboard": "Mon tableau de bord",
  "My Notifications": "Mes notifications",
  "My Addresses": "Mes adresses",
  "My Wallet": "Mon portefeuille",
  "My Points": "Mes points",
  "My Orders": "Mes commandes",
  "Order Details": "Détails de la commande",
  "Refund History": "Historique des remboursements",
  "Payout Details": "Détails du paiement",
  "About Us": "À propos de nous",
  "Browse FAQs": "Parcourir les FAQ",
  "Cart": "Panier",
  "Checkout": "Paiement",
  "Compare": "Comparer",
  "Contact Us": "Contactez-nous",
  "Maintenance": "Maintenance",
  "Offers": "Offres",
  "Search": "Recherche",
  "Wishlist": "Liste de souhaits",
  "404": "404",
  "Seller": "Vendeur",
  "Become Seller": "Devenir vendeur",
  "Seller Stores (Basic)": "Magasins du vendeur (Basique)",
  "Seller Stores (Classic)": "Magasins du vendeur (Classique)",
  "Store Details (Basic)": "Détails du magasin (Basique)",
  "Store Details (Classic)": "Détails du magasin (Classique)",
  "Categories": "Catégories",
  "Shop Now": "Acheter maintenant",
  "Trending Products": "Produits tendance",
  "Saved Address": "Adresse enregistrée",
  "Add Address": "Ajouter une adresse",
  "Address": "Adresse",
  "Pin Code": "Code postal",
  "Phone": "Téléphone",
  "Edit": "Éditer",
  "Remove": "Supprimer",
  "Bank Details": "Détails bancaires",
  "Bank Account No": "Numéro de compte bancaire",
  "Enter Bank Account No": "Entrer le numéro de compte bancaire",
  "Bank Name": "Nom de la banque",
  "Enter Bank Name": "Entrer le nom de la banque",
  "Holder Name": "Nom du titulaire",
  "Enter Bank Holder Name": "Entrer le nom du titulaire du compte",
  "Swift": "Code SWIFT",
  "Enter Swift": "Entrer le code SWIFT",
  "IFSC": "Code IFSC",
  "Enter IFSC": "Entrer le code IFSC",
  "Paypal Details": "Détails Paypal",
  "Paypal Email": "Adresse e-mail Paypal",
  "Enter Paypal Email": "Entrer l'adresse e-mail Paypal",
  "Save": "Enregistrer",
  "Hello": "Bonjour",
  "Welcome Text": "Texte de bienvenue",
  "Balance": "Solde",
  "Total Points": "Total des points",
  "Total Orders": "Total des commandes",
  "Profile Information": "Informations de profil",
  "Name": "Nom",
  "Login Details": "Détails de connexion",
  "Email": "Email",
  "Password": "Mot de passe",
  "Notifications": "Notifications",
  "Order Number": "Numéro de commande",
  "Pay Now": "Payer maintenant",
  "Invoice": "Facture",
  "Image": "Image",
  "Price": "Prix",
  "Quantity": "Quantité",
  "Subtotal": "Sous-total",
  "Action": "Action",
  "Ask For Refund": "Demander un remboursement",
  "Consumer Details": "Détails du consommateur",
  "Billing Address": "Adresse de facturation",
  "Shipping Address": "Adresse de livraison",
  "Shipping": "Livraison",
  "Delivery Slot": "Créneau de livraison",
  "Payment Mode": "Mode de paiement",
  "Payment Status": "Statut du paiement",
  "Summary": "Résumé",
  "Shipping": "Livraison",
  "Tax": "Taxe",
  "Points": "Points",
  "Wallet Balance": "Solde du portefeuille",
  "Coupon Discount": "Remise du coupon",
  "Total": "Total",
  "Order Date": "Date de commande",
  "Total Amount": "Montant total",
  "Status": "Statut",
  "No": "Numéro",
  "Date": "Date",
  "Amount": "Montant",
  "Payment Method": "Moyen de paiement",
  "Option": "Option",
  "1 Point": "1 Point",
  "Remark": "Remarque",
  "Transactions": "Transactions",
  "Refund": "Remboursement",
  "Reason": "Raison",
  "Created at": "Créé le",
  "Dashboard": "Tableau de bord",
  "Earning Points": "Points gagnés",
  "Logout": "Déconnexion",
  "Show Menu": "Afficher le menu",
  "Welcome To Fastkart": "Bienvenue sur Fastkart",
  "Forgot Your Password": "Mot de passe oublié",
  "Email Address": "Adresse e-mail",
  "Email is required": "L'adresse e-mail est obligatoire",
  "Invalid Email": "E-mail invalide",
  "Send": "Envoyer",
  "Register Your Account": "Enregistrez votre compte",
  "Login Your Account": "Connectez-vous à votre compte",
  "Password is required": "Le mot de passe est obligatoire",
  "Remember me": "Se souvenir de moi",
  "Log In": "Se connecter",
  "Or": "Ou",
  "Don't have an account": "Vous n'avez pas de compte",
  "Please enter the one-time password to verify your account": "Veuillez entrer le mot de passe à usage unique pour vérifier votre compte",
  "A code has been sent to": "Un code a été envoyé à",
  "Validate": "Valider",
  "Welcome To Our Store": "Bienvenue dans notre magasin",
  "Create New Account": "Créer un nouveau compte",
  "Full Name": "Nom complet",
  "Name is required": "Le nom est obligatoire",
  "Phone Number": "Numéro de téléphone",
  "Phone number is required": "Le numéro de téléphone est obligatoire",
  "Password Confirmation": "Confirmation du mot de passe",
  "Confirm Password is required": "La confirmation du mot de passe est obligatoire",
  "Confirm password does not match": "La confirmation du mot de passe ne correspond pas",
  "I agree with": "Je suis d'accord avec",
  "Terms": "les conditions",
  "And": "et",
  "Privacy": "la vie privée",
  "Already have an account": "Vous avez déjà un compte",
  "Reset Your Account Password": "Réinitialiser votre mot de passe de compte",
  "New password": "Nouveau mot de passe",
  "New Password is required": "Le nouveau mot de passe est obligatoire",
  "Confirm password": "Confirmer le mot de passe",
  "Submit": "Soumettre",
  "Recent Posts": "Articles récents",
  "Tags": "Mots-clés",
  "Featured": "À la une",
  "Read More": "Lire la suite",
  "We make Organic Food In Market": "Nous fabriquons de la nourriture biologique sur le marché",
  "Just a few seconds to measure your body temperature. Up to 5 users! The battery lasts up to 2 years. There are many variations of passages of Lorem Ipsum available. We started in 2019 and haven't stopped smashing it since. A global brand that doesn't sleep, we are 24/7 and always bringing something new with over 100 new products dropping on the monthly, bringing you the latest looks for less.": "Juste quelques secondes pour mesurer votre température corporelle. Jusqu'à 5 utilisateurs ! La batterie dure jusqu'à 2 ans. Il existe de nombreuses variations de passages du Lorem Ipsum disponibles. Nous avons commencé en 2019 et n'avons pas cessé de nous améliorer depuis. Une marque mondiale qui ne dort jamais, nous sommes disponibles 24/7 et apportons toujours quelque chose de nouveau, avec plus de 100 nouveaux produits chaque mois, vous offrant les derniers looks à moindre coût.",
  "Free delivery for all orders": "Livraison gratuite pour toutes les commandes",
  "Only fresh foods": "Seulement des aliments frais",
  "What We Do": "Ce que nous faisons",
  "We are Trusted by Clients": "Nous sommes approuvés par nos clients",
  "Our Creative Team": "Notre équipe créative",
  "Fastkart team member": "Membre de l'équipe Fastkart",
  "Latest Testimonials": "Derniers témoignages",
  "What people say": "Ce que disent les gens",
  "Our Blog": "Notre blog",
  "Our Latest Blog": "Notre dernier blog",
  "Get In Touch": "Contactez-nous",
  "Enter Full Name": "Entrez votre nom complet",
  "Subject": "Sujet",
  "Enter Subject": "Entrez le sujet",
  "Subject is required": "Le sujet est requis",
  "Message": "Message",
  "Enter Your Message": "Entrez votre message",
  "Message is required": "Le message est requis",
  "Send Message": "Envoyer le message",
  "Enter Email Address": "Entrez votre adresse e-mail",
  "Enter Your Phone Number": "Entrez votre numéro de téléphone",
  "Copy Code": "Copier le code",
  "Search for products": "Rechercher des produits",
  "Sold By": "Vendu par",
  "Fastkart": "Fastkart",
  "Unit": "Unité",
  "Saving": "Économie",
  "You Save": "Vous économisez",
  "Save for later": "Enregistrer pour plus tard",
  "Cart Total": "Total du panier",
  "Process To Checkout": "Procéder au paiement",
  "Return To Shopping": "Retour aux achats",
  "Cost at Checkout": "Coût à la caisse",
  "No Address Found": "Aucune adresse trouvée",
  "Select Timing Slot": "Sélectionner une plage horaire",
  "Add New": "Ajouter un nouveau",
  "Delivery Options": "Options de livraison",
  "No Delivery Options Found": "Aucune option de livraison trouvée",
  "Payment Options": "Options de paiement",
  "No Payment Options Found": "Aucune option de paiement trouvée",
  "Not Calculated Yet": "Pas encore calculé",
  "Would you prefer to pay using points?": "Préférez-vous payer avec des points ?",
  "Would you prefer to pay using a wallet?": "Préférez-vous payer avec un portefeuille ?",
  "Have a Promo Code": "Avez-vous un code promo",
  "Enter Coupon Code Here": "Entrez le code coupon ici",
  "Apply": "Appliquer",
  "You Saved": "Vous avez économisé",
  "With this code": "Avec ce code",
  "Coupon Applied": "Coupon appliqué",
  "Place Order": "Passer la commande",
  "Filter Menu": "Menu de filtre",
  "Sort By": "Trier par",
  "Filters": "Filtres",
  "Clear All": "Tout effacer",
  "Back": "Retour",
  "Rating": "Évaluation",
  "Star": "Étoile",
  "Discount": "Remise",
  "Availability": "Disponibilité",
  "Review": "Avis",
  "Weight": "Poids",
  "Move To Cart": "Ajouter au panier",
  "Order failed": "Échec de la commande",
  "Payment Is Successfully And Your Order Is On The Way": "Le paiement a réussi et votre commande est en cours de traitement",
  "Payment Is Failed Please Try Again": "Le paiement a échoué, veuillez réessayer",
  "Qty": "Qté",
  "Price Details": "Détails du prix",
  "Shipping charges": "Frais d'expédition",
  "Wallet Point": "Point de portefeuille",
  "USD": "USD",
  "SALE": "Vente",
  "Guaranteed Safe Checkout": "Paiement sécurisé garanti",
  "Please hurry! Only": "Faites vite ! Il ne reste que",
  "left in stock": "en stock",
  "Ask a question": "Poser une question",
  "Frequently bought together": "Fréquemment acheté ensemble",
  "Product Selected for": "Produit sélectionné pour",
  "Add All To Cart": "Ajouter tout au panier",
  "Customers Ordered": "Clients ayant commandé",
  "Active View in this item": "Vue active de cet article",
  "Off": "Remise",
  "Add to Cart": "Ajouter au panier",
  "Delivery Details": "Détails de livraison",
  "Description": "Description",
  "Q&A": "Questions et réponses",
  "SKU": "SKU",
  "Stock Status": "État des stocks",
  "Gms": "Gms",
  "Items Left": "Articles restants",
  "Review this product": "Donnez votre avis sur ce produit",
  "Let other customers know what you think": "Faites savoir aux autres clients ce que vous pensez",
  "Write a review": "Écrire un avis",
  "Edit Review": "Modifier l'avis",
  "Share it": "Partagez-le",
  "Q": "Q",
  "A": "R",
  "Hurry up! Sales Ends In": "Dépêchez-vous ! Fin des soldes dans",
  "Days": "Jours",
  "Hours": "Heures",
  "Min": "Min",
  "Sec": "Sec",
  "Contact": "Contact",
  "If You Any Query": "Si vous avez des questions",
  "Visit Store": "Visiter le magasin",
  "Products": "Produits",
  "Follow Us": "Suivez-nous",
  "Sold": "Vendu",
  "Items": "Articles",
  "Hurry up offer end in": "Dépêchez-vous, l'offre se termine dans",
  "Offer Closed": "Offre terminée",
  "Subscribe": "S'abonner",
  "Code": "Code",
  "Useful Links": "Liens utiles",
  "Quick Pages": "Pages rapides",
  "Customer Support 24/7": "Support client 24/7",
  "Download App": "Télécharger l'application",
  "Stay connected": "Restez connecté",
  "Menu": "Menu",
  "24/7 Support Center": "Centre de support 24/7",
  "Unread messages": "Messages non lus",
  "Shopping Cart": "Panier d'achat",
  "Spend": "Dépensez",
  "More and enjoy": "Plus et profitez",
  "FREE SHIPPING": "LIVRAISON GRATUITE",
  "Congratulations": "Félicitations",
  "Enjoy free shipping on us": "Profitez de la livraison gratuite offerte par nous",
  "Your cart is currently empty": "Votre panier est actuellement vide",
  "Shipping and taxes are calculated at checkout": "Les frais d'expédition et les taxes sont calculés à la caisse",
  "View Cart": "Voir le panier",
  "Deal Today": "Offre du jour",
  "Hot Deals": "Offres spéciales",
  "Hi": "Salut",
  "My Account": "Mon compte",
  "Register": "S'inscrire",
  "Log Out": "Se déconnecter",
  "Get the App": "Télécharger l'application",
  "Loading": "Chargement",
  "Edit Address": "Modifier l'adresse",
  "Title": "Titre",
  "Enter Title": "Entrez le titre",
  "Title is required": "Le titre est requis",
  "Enter Address": "Entrez l'adresse",
  "Street address is required": "L'adresse est requise",
  "Country": "Pays",
  "Select Country": "Sélectionnez le pays",
  "Country is required": "Le pays est requis",
  "State": "État",
  "Select State": "Sélectionnez l'État",
  "State is required": "L'État est requis",
  "City": "Ville",
  "Enter City": "Entrez la ville",
  "City is required": "La ville est requise",
  "Pincode": "Code postal",
  "Enter Pincode": "Entrez le code postal",
  "Pincode is required": "Le code postal est requis",
  "Enter Phone": "Entrez le numéro de téléphone",
  "Phone number is invalid": "Le numéro de téléphone est invalide",
  "Cancel": "Annuler",
  "Change Password": "Changer le mot de passe",
  "Current Password": "Mot de passe actuel",
  "Enter Current Password": "Entrez le mot de passe actuel",
  "Current Password is required": "Le mot de passe actuel est requis",
  "Enter New Password": "Entrez le nouveau mot de passe",
  "Enter Confirm Password": "Confirmez le mot de passe",
  "Confirmation": "Confirmation",
  "Are you sure you want to proceed": "Êtes-vous sûr de vouloir continuer",
  "Yes": "Oui",
  "Recommended deals for you.": "Offres recommandées pour vous.",
  "Delete Item": "Supprimer l'article",
  "This Item Will Be Deleted Permanently. You Can't Undo This Action.": "Cet article sera supprimé de manière permanente. Vous ne pouvez pas annuler cette action.",
  "Edit Profile": "Modifier le profil",
  "Enter Name": "Entrez le nom",
  "Email address is required": "L'adresse e-mail est requise",
  "Please enter a valid email": "Veuillez saisir une adresse e-mail valide",
  "Wait": "Attendre",
  "I'm sorry to see you go.": "Je suis désolé de vous voir partir.",
  "In order to earn 10% off your first purchase, provide your email address.": "Pour bénéficier de 10% de réduction sur votre premier achat, fournissez votre adresse e-mail.",
  "15%": "15%",
  "Want to make your purchase": "Envie de faire votre achat",
  "Plus, early access to new arrivals, exclusive sales, & lots more": "De plus, accès anticipé aux nouveautés, ventes exclusives, et bien plus encore",
  "Select payment method is required": "La sélection d'une méthode de paiement est requise",
  "Product Details": "Détails du produit",
  "Your Questions": "Vos questions",
  "Enter Reason": "Entrez la raison",
  "Reason is required": "La raison est requise",
  "Select Payment Option": "Sélectionnez l'option de paiement",
  "Payment type is required": "Le type de paiement est requis",
  "Rating is required": "La note est requise",
  "Review Content": "Contenu de l'avis",
  "Write something": "Écrivez quelque chose",
  "Update Item": "Mettre à jour l'article",
  "Add": "Ajouter",
  "Someone Recently Purchased": "Quelqu'un a récemment acheté",
  "Minutes ago": "Il y a quelques minutes",
  "Color": "Couleur",
  "Theme Color": "Couleur du thème",
  "Dark": "Sombre",
  "Light": "Clair",
  "RTL": "RTL",
  "LTR": "LTR",
  "Choose": "Choisir",
  "Buy Now": "Acheter maintenant",
  "Let other customers know what you think.": "Laissez les autres clients savoir ce que vous pensez.",
  "Have Doubts Regarding This Product": "Avez-vous des doutes concernant ce produit",
  "Post Your Question": "Posez votre question",
  "1": "1",
  "2": "2",
  "3": "3",
  "User": "Utilisateur",
  "Cookies": "Cookies",
  "We use cookies to make your experience better": "Nous utilisons des cookies pour améliorer votre expérience",
  "Privacy Policy": "Politique de confidentialité",
  "OK": "OK"
};
const i18n_sVHQBgnb3t = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en: english,
      fr: french
    }
  });
  vueApp.use(i18n);
});
const customAnimation = {
  enter: "animate__animated animate__bounceInUp",
  exit: "animate__animated animate__bounceOutUp"
};
const ssrPlugins_cEKV0TUavU = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Swiper", Swiper);
  nuxtApp.vueApp.component("SwiperSlide", SwiperSlide);
  nuxtApp.vueApp.component("RangeSlider", m);
  nuxtApp.provide("emitter", mitt());
  nuxtApp.provide("useToaster", async ({ type = "success", msg = "Your Message Here", time = 3e3, position = "top-right" }) => await toast[type](msg, { autoClose: time, position, transition: position || customAnimation, theme: "colored" }));
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin$1,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  plugin_OrkQhMqHci,
  axios_QMFgzss1s4,
  directives_GDwrTGmylM,
  errorHandler_cfkZ75xwSQ,
  i18n_sVHQBgnb3t,
  ssrPlugins_cEKV0TUavU
];
const layouts = {
  custom: () => import('./custom-BmHyxiY6.mjs').then((m) => m.default || m),
  default: () => import('./default-CIWbS6JU.mjs').then((m) => m.default || m)
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h$1(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h$1(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h$1(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h$1(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h$1(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2$1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h$1(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h$1(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h$1(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index2 = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index2 < newRoute.matched.length - 1;
}
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const appConfig2 = useAppConfig();
    ((_a = appConfig2 == null ? void 0 : appConfig2.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const props = __props;
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig2.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const icon = computed(() => {
      var _a2;
      return (_a2 = state.value) == null ? void 0 : _a2[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a2, _b, _c;
      if (!props.size && typeof ((_a2 = appConfig2.nuxtIcon) == null ? void 0 : _a2.size) === "boolean" && !((_b = appConfig2.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig2.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a2;
      return ((_a2 = appConfig2 == null ? void 0 : appConfig2.nuxtIcon) == null ? void 0 : _a2.class) ?? "icon";
    });
    async function loadIconComponent() {
      var _a2;
      if (component.value) {
        return;
      }
      if (!((_a2 = state.value) == null ? void 0 : _a2[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-cf1ec82f></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: unref(icon),
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-cf1ec82f>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-cf1ec82f"]]);
const Icon = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1
});
const _sfc_main$8 = {
  __name: "Images",
  __ssrInlineRender: true,
  props: {
    Data: Object
  },
  setup(__props) {
    let slideId = ref(0), swiperRef = ref(0), modules = [Navigation, Autoplay];
    function onSwiper(swiper) {
      swiperRef.value = swiper;
    }
    function slideTo(index2) {
      swiperRef.value.slideTo(index2 + 1, 0);
      slideId.value = index2;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row g-2" }, _attrs))}><div class="col-12"><div class="view-image-slider">`);
      _push(ssrRenderComponent(_component_swiper, {
        loop: true,
        class: "banner-slider",
        autoplay: { delay: 2500, disableOnInteraction: true },
        modules: unref(modules),
        onSwiper,
        "slides-per-view": 1,
        "space-between": 15,
        navigation: true
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a2 = __props.Data) == null ? void 0 : _a2.product_galleries, (productImages, index2) => {
              _push2(ssrRenderComponent(_component_swiper_slide, { key: index2 }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="slider-image"${_scopeId2}><img${ssrRenderAttr("src", productImages == null ? void 0 : productImages.original_url)}${ssrRenderAttr("id", productImages.id)} class="img-fluid" alt=""${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slider-image" }, [
                        createVNode("img", {
                          src: productImages == null ? void 0 : productImages.original_url,
                          id: productImages.id,
                          class: "img-fluid",
                          alt: ""
                        }, null, 8, ["src", "id"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b2 = __props.Data) == null ? void 0 : _b2.product_galleries, (productImages, index2) => {
                return openBlock(), createBlock(_component_swiper_slide, { key: index2 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slider-image" }, [
                      createVNode("img", {
                        src: productImages == null ? void 0 : productImages.original_url,
                        id: productImages.id,
                        class: "img-fluid",
                        alt: ""
                      }, null, 8, ["src", "id"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if ((_b = (_a = __props.Data) == null ? void 0 : _a.product_galleries) == null ? void 0 : _b.length) {
        _push(`<div class="col-12"><div class="bottom-slider-image left-slider no-arrow slick-top">`);
        _push(ssrRenderComponent(_component_swiper, {
          loop: true,
          class: "banner-slider",
          "slides-per-view": 3,
          "space-between": 15
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList((_a2 = __props.Data) == null ? void 0 : _a2.product_galleries, (productImages, index2) => {
                _push2(ssrRenderComponent(_component_swiper_slide, {
                  key: index2,
                  class: unref(slideId) == index2 ? "" : ""
                }, {
                  default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass([{ "active": productImages.id.toString() == slideTo.toString() }, "slider-image"])}"${_scopeId2}><img${ssrRenderAttr("src", productImages ? productImages == null ? void 0 : productImages.original_url : "/images/product.png")}${ssrRenderAttr("id", productImages.id)} class="img-fluid" alt=""${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ["slider-image", { "active": productImages.id.toString() == slideTo.toString() }]
                        }, [
                          createVNode("img", {
                            src: productImages ? productImages == null ? void 0 : productImages.original_url : "/images/product.png",
                            id: productImages.id,
                            class: "img-fluid",
                            alt: "",
                            onClick: ($event) => slideTo(index2)
                          }, null, 8, ["src", "id", "onClick"])
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList((_b2 = __props.Data) == null ? void 0 : _b2.product_galleries, (productImages, index2) => {
                  return openBlock(), createBlock(_component_swiper_slide, {
                    key: index2,
                    class: unref(slideId) == index2 ? "" : ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: ["slider-image", { "active": productImages.id.toString() == slideTo.toString() }]
                      }, [
                        createVNode("img", {
                          src: productImages ? productImages == null ? void 0 : productImages.original_url : "/images/product.png",
                          id: productImages.id,
                          class: "img-fluid",
                          alt: "",
                          onClick: ($event) => slideTo(index2)
                        }, null, 8, ["src", "id", "onClick"])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/ProductModal/Images.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Images = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$8
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NuxtRating",
  __ssrInlineRender: true,
  props: {
    ratingCount: { default: 5 },
    ratingSize: { default: "32px" },
    activeColor: { default: "#ffc700" },
    inactiveColor: { default: "#ddd" },
    ratingValue: { default: 3.7 },
    ratingContent: { default: "★" },
    readOnly: { type: Boolean, default: true }
  },
  emits: ["ratingSelected", "ratingHovered"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const selectedRating = ref(props.ratingValue);
    const hoveredRating = ref(0);
    const ratingsContent = computed(() => {
      return Array(props.ratingCount).fill(props.ratingContent).join("");
    });
    const cssVars = computed(() => ({
      "--active-color": props.activeColor,
      "--cursor-type": props.readOnly ? "default" : "pointer",
      "--inactive-color": props.inactiveColor,
      "--rating-value": hoveredRating.value ? hoveredRating.value : selectedRating.value,
      "--rating-count": props.ratingCount,
      "--rating-content": `"${ratingsContent.value}"`,
      "--rating-size": props.ratingSize
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "slider",
        "aria-valuemin": 0,
        "aria-valuemax": props.ratingCount,
        "aria-valuenow": selectedRating.value,
        style: cssVars.value,
        class: "average-rating"
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-rating/dist/runtime/components/NuxtRating.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const NuxtRating = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$7
});
const _sfc_main$6 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    product: Object,
    attributes: Object,
    isAllVariantStyleDropdown: Boolean,
    owlCar: Object
  },
  emits: ["selectVariation"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    ref(null);
    ref(1);
    let attributeValues = ref([]);
    let variantIds = ref([]);
    let soldOutAttributesIds = ref([]);
    ref([]);
    ref(null);
    watchEffect(() => {
      let product = ref();
      let attributes = ref();
      if (props.product) {
        product.value = props.product;
      }
      if (props.attributes) {
        attributes.value = props.attributes;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.attributes, (attribute, index2) => {
        _push(`<div>`);
        if (!__props.isAllVariantStyleDropdown) {
          _push(`<div class="product-title"><h4>${ssrInterpolate(attribute == null ? void 0 : attribute.name)} : ${ssrInterpolate(attribute == null ? void 0 : attribute.selected_value)}</h4></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((attribute == null ? void 0 : attribute.style) == "dropdown" || __props.isAllVariantStyleDropdown) {
          _push(`<div><select id="input-state-{{index}}" class="form-control form-select"><option selected disabled>${ssrInterpolate(_ctx.$t("Choose"))} ${ssrInterpolate(attribute == null ? void 0 : attribute.name)}</option><!--[-->`);
          ssrRenderList(attribute.attribute_values, (value, index3) => {
            var _a;
            _push(`<!--[-->`);
            if ((_a = unref(attributeValues)) == null ? void 0 : _a.includes(value.id)) {
              _push(`<option${ssrIncludeBooleanAttr(unref(variantIds).includes(value.id) && !unref(soldOutAttributesIds).includes(value.id)) ? " selected" : ""}${ssrRenderAttr("value", index3)}${ssrIncludeBooleanAttr(unref(soldOutAttributesIds).includes(value.id)) ? " disabled" : ""}>${ssrInterpolate(value.value)}</option>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></select></div>`);
        } else if ((attribute == null ? void 0 : attribute.style) == "radio") {
          _push(`<div><div class="d-flex gap-3"><!--[-->`);
          ssrRenderList(attribute.attribute_values, (value, index3) => {
            var _a;
            _push(`<div>`);
            if ((_a = unref(attributeValues)) == null ? void 0 : _a.includes(value.id)) {
              _push(`<div class="form-check"><input type="radio"${ssrRenderAttr("id", "radio-" + index3 + "-" + index3)}${ssrRenderAttr("name", "radio-group-" + index3)}${ssrRenderAttr("value", index3)}${ssrIncludeBooleanAttr(unref(variantIds).includes(value.id) && !unref(soldOutAttributesIds).includes(value.id)) ? " checked" : ""}${ssrIncludeBooleanAttr(unref(soldOutAttributesIds).includes(value.id)) ? " disabled" : ""} class="${ssrRenderClass([{ "disabled": unref(soldOutAttributesIds).includes(value.id) }, "form-check-input"])}"><label${ssrRenderAttr("for", "radio-" + index3 + "-" + index3)} class="form-check-label">${ssrInterpolate(value == null ? void 0 : value.value)}</label></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!--[-->`);
          if ((attribute == null ? void 0 : attribute.style) == "color") {
            _push(`<ul class="${ssrRenderClass([attribute == null ? void 0 : attribute.style, "select-package circle"])}"><!--[-->`);
            ssrRenderList(attribute.attribute_values, (value, index3) => {
              var _a;
              _push(`<!--[-->`);
              if ((_a = unref(attributeValues)) == null ? void 0 : _a.includes(value.id)) {
                _push(`<li class="${ssrRenderClass({ "active": unref(variantIds).includes(value.id) && !unref(soldOutAttributesIds).includes(value.id), "disabled": unref(soldOutAttributesIds).includes(value.id) })}" placement="top"><button style="${ssrRenderStyle({ "background-color": value.hex_color })}"></button></li>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<div><ul class="${ssrRenderClass([attribute == null ? void 0 : attribute.style, "select-package cricle"])}"><!--[-->`);
            ssrRenderList(attribute.attribute_values, (value, index3) => {
              var _a, _b;
              _push(`<!--[-->`);
              if ((_a = unref(attributeValues)) == null ? void 0 : _a.includes(value.id)) {
                _push(`<li class="${ssrRenderClass({ "active": unref(variantIds).includes(value.id) && !unref(soldOutAttributesIds).includes(value.id), "disabled": unref(soldOutAttributesIds).includes(value.id) })}">`);
                if ((attribute == null ? void 0 : attribute.style) == "image") {
                  _push(`<img${ssrRenderAttr("src", (value == null ? void 0 : value.variation_image) ? (_b = value == null ? void 0 : value.variation_image) == null ? void 0 : _b.original_url : "/images/product.png")}>`);
                } else {
                  _push(`<button${ssrRenderAttr("id", "value_btn")}${ssrRenderAttr("type", "button")}>${ssrInterpolate(value == null ? void 0 : value.value)}</button>`);
                }
                _push(`</li>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></ul></div>`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/VariantAttributes/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$6
});
const transform = (value) => {
  var _a, _b;
  if (!value) {
    return value;
  }
  const modifiedString = value == null ? void 0 : value.replace(/_/g, " ");
  const words = modifiedString.split(" ");
  for (let i = 0; i < (words == null ? void 0 : words.length); i++) {
    words[i] = ((_a = words[i]) == null ? void 0 : _a.charAt(0).toUpperCase()) + ((_b = words[i]) == null ? void 0 : _b.slice(1).toLowerCase());
  }
  return words == null ? void 0 : words.join(" ");
};
const useCollectionStore = defineStore("Collection-store", () => {
  let filter = ref({
    page: 1,
    // Current page number
    paginate: 40,
    // Display per page,
    status: 1,
    field: "",
    price: "",
    category_id: "",
    tag: "",
    sort: "",
    // ASC, DSC
    sortBy: "",
    rating: "",
    attribute: "",
    store_slug: "",
    current_page: ""
  });
  ref([
    { display: "Low - High Price", value: "low-high" },
    { display: "High - Low Price", value: "high-low" },
    { display: "A - Z Order", value: "a-z" },
    { display: "Z - A Order", value: "z-a" },
    { display: "Ascendind Order", value: "asc" },
    { display: "Decendind Order", value: "dsc" },
    { display: "%Off-High To Low", value: "discount-high-low" }
  ]);
  let categories = ref([]), attribute = ref([]);
  let filterObject = ref({
    selectedCategories: [],
    selectedAttributes: [],
    selectedPrice: [],
    selectedRating: [],
    sort: { display: "Ascendind Order", value: "asc" },
    field: "created_at",
    store_slug: {}
  });
  filter.value.sortBy = filterObject.value.sort;
  filter.value.field = filterObject.value.field;
  let allProducts = ref([]);
  function initialCheckedValue() {
    filterObject.value.selectedCategories = useRoute().query.category_id ? useRoute().query.category_id.split(",") : [];
    filterObject.value.selectedAttributes = useRoute().query.attribute ? useRoute().query.attribute.split(",") : [];
    filterObject.value.selectedRating = useRoute().query.rating ? useRoute().query.rating.split(",") : [];
    filterObject.value.selectedPrice = useRoute().query.price ? useRoute().query.price.split(",") : [];
  }
  function getParams() {
    filter.value.page = useRoute().query.page ? useRoute().query.page : 1;
    filter.value.field = useRoute().query.field ? useRoute().query.field : "created_at";
    filter.value.price = useRoute().query.price ? useRoute().query.price : "";
    filter.value.category_id = useRoute().query.category_id ? useRoute().query.category_id : "";
    filter.value.tag = useRoute().query.tag ? useRoute().query.tag : "";
    filter.value.sort = useRoute().query.sort ? useRoute().query.sort : "";
    filter.value.sortBy = useRoute().query.sortBy ? useRoute().query.sortBy : "";
    filter.value.rating = useRoute().query.rating ? useRoute().query.rating : "";
    filter.value.attribute = useRoute().query.attribute ? useRoute().query.attribute : "", filter.value.store_slug = useRoute().query.store_slug ? useRoute().query.store_slug : "";
  }
  watchEffect(async () => {
    getParams();
  });
  return {
    filter,
    categories,
    attribute,
    getParams,
    filterObject,
    allProducts,
    initialCheckedValue
  };
});
const useDataStore = defineStore("data-store", () => {
  let ThemeOptions = ref([]), Products = ref([]), Blogs = ref([]), searchProducts = ref([]), Categories = ref([]), Currencies = ref([]), SingleProducts = ref([]), Settings = ref([]), Notification = ref([]), offCanvasMenu = ref(false), queAns = ref(false), SearchProductParams = ref({ search: "", page: 1, paginate: 12, status: 1 }), ProductParams = {
    page: 1,
    // Current page number
    paginate: 40,
    // Display per page,
    status: 1,
    field: "created_at",
    price: "",
    category: "",
    tag: "",
    sort: "",
    // ASC, DSC
    sortBy: "asc",
    rating: "",
    attribute: ""
  };
  let selectedCategoryProducts = ref([]);
  useCollectionStore().filterObject.selectedCategories;
  const GetAllThemeOptions = async () => {
    HandleRequest("themeOptions", {
      key: "getAllThemeOptionInStore",
      onResponse({ response }) {
        ThemeOptions.value = response._data;
      }
    });
  };
  const GetAllProduct = async () => {
    HandleRequest("product", {
      key: "getAllProductsInStore",
      onResponse({ response }) {
        Products.value = response._data;
      }
    });
  };
  const GetAllSingleProduct = async () => {
    HandleRequest(`product/slug/${useRoute().params.slug}`, {
      key: "getSingleProductsInStore",
      onResponse({ response }) {
        SingleProducts.value = response._data;
      }
    });
  };
  const GetAllSearchProduct = async () => {
    HandleRequest("product", {
      key: "getAllProductsForSearchInStore",
      params: SearchProductParams.value,
      onResponse({ response }) {
        searchProducts.value = response._data;
      }
    });
  };
  const GetAllBlogs = async () => {
    HandleRequest("blog", {
      key: "getAllBlogsInStore",
      onResponse({ response }) {
        Blogs.value = response._data;
      }
    });
  };
  const GetAllCategory = async () => {
    HandleRequest("https://zezo.anevex.com/app/shop-api/categories", {
      key: "getAllCategoryInStore",
      onResponse({ response }) {
        Categories.value = response._data.data;
      }
    });
  };
  const GetAllCurrency = async () => {
    HandleRequest("currency", {
      key: "getAllCurrencyStore",
      onResponse({ response }) {
        Currencies.value = response._data;
      }
    });
  };
  GetAllCurrency();
  const GetAllNotification = async () => {
    HandleRequest("notifications", {
      key: "getAllNotificationsStore",
      onResponse({ response }) {
        Notification.value = response._data;
      }
    });
  };
  const GetAllSettings = async () => {
    HandleRequest("settings", {
      key: "getAllSettingStore",
      onResponse({ response }) {
        Settings.value = response._data;
      }
    });
  };
  const GetAllQustionAnswer = async (value) => {
    await HandleRequest("question-and-answer", {
      key: "getQuestionAnswer",
      params: { product_id: value },
      onResponse({ response }) {
        queAns.value = response._data;
      }
    });
  };
  const GetThemeoption = async () => {
    await GetAllThemeOptions();
  };
  const GetProduct = async () => {
    await GetAllProduct();
  };
  const GetCategory = async () => {
    await GetAllCategory();
  };
  const GetBlog = async () => {
    await GetAllBlogs();
  };
  const GetCurrency = async () => {
    await GetAllCurrency();
  };
  const GetSingleProduct = async () => {
    await GetAllSingleProduct();
  };
  const GetSettings = async () => {
    await GetAllSettings();
  };
  const GetSearch = async () => {
    await GetAllSearchProduct();
  };
  const GetNotifications = async () => {
    await GetAllNotification();
  };
  function setInitialParams(searchParams) {
    SearchProductParams.value.search = searchParams;
    GetAllSearchProduct();
  }
  return {
    // selectedCategory,
    selectedCategoryProducts,
    offCanvasMenu,
    ThemeOptions,
    GetThemeoption,
    Products,
    GetProduct,
    Categories,
    GetCategory,
    Currencies,
    GetCurrency,
    Blogs,
    GetBlog,
    SingleProducts,
    GetAllSingleProduct,
    GetSingleProduct,
    ProductParams,
    setInitialParams,
    SearchProductParams,
    GetSearch,
    searchProducts,
    Settings,
    GetSettings,
    GetNotifications,
    Notification,
    queAns,
    GetAllQustionAnswer
  };
});
const useCurrencyStore = defineStore("currency", () => {
  let currency = ref({});
  let { Currencies } = storeToRefs(useDataStore());
  async function allCurrency() {
    if (useCookie("currency").value) {
      currency.value = useCookie("currency").value;
    } else {
      currency.value = Currencies.value.data[0];
    }
  }
  function getCurrencyObj(currencyObj) {
    currency.value = currencyObj;
    useCookie("currency").value = currencyObj;
  }
  function convertCurrency(price) {
    return Number(price).toFixed(2);
  }
  return {
    currency,
    getCurrencyObj,
    allCurrency,
    convertCurrency
  };
});
const _sfc_main$5 = {
  __name: "Right",
  __ssrInlineRender: true,
  props: {
    selectedVariation: Object,
    Product: Object,
    attributes: Array,
    productAvailable: Boolean,
    existingCartItemIndex: Number
  },
  setup(__props) {
    storeToRefs(useCartStore());
    let selectedVariation = ref(null);
    let productQty = ref(1);
    let store = useCurrencyStore();
    store.allCurrency();
    function selectVariation(variation) {
      selectedVariation.value = variation;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
      const _component_NuxtRating = _sfc_main$7;
      const _component_WidgetsVariantAttributes = _sfc_main$6;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-6" }, _attrs))}><div class="right-sidebar-modal"><h4 class="title-name">${ssrInterpolate(unref(selectedVariation) ? (_a = unref(selectedVariation)) == null ? void 0 : _a.name : (_b = __props.Product) == null ? void 0 : _b.name)}</h4><h4 class="price">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(selectedVariation) ? (_c = unref(selectedVariation)) == null ? void 0 : _c.sale_price : (_d = __props.Product) == null ? void 0 : _d.sale_price)).toFixed(2))} `);
      if (unref(selectedVariation) ? unref(selectedVariation).discount : __props.Product.discount) {
        _push(`<del>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(selectedVariation) ? (_e = unref(selectedVariation)) == null ? void 0 : _e.price : (_f = __props.Product) == null ? void 0 : _f.price)).toFixed(2))}</del>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedVariation) ? unref(selectedVariation).discount : __props.Product.discount) {
        _push(`<label class="modal-label">${ssrInterpolate(unref(selectedVariation) ? (_g = unref(selectedVariation)) == null ? void 0 : _g.discount : (_h = __props.Product) == null ? void 0 : _h.discount)}% ${ssrInterpolate("off")}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h4><div class="product-rating">`);
      _push(ssrRenderComponent(_component_NuxtRating, {
        "read-only": true,
        ratingValue: ((_i = __props.Product) == null ? void 0 : _i.reviews_count) || 0,
        "rating-size": "25px"
      }, null, _parent));
      _push(`<div class="fs-14 ms-2 review">${ssrInterpolate(__props.Product.reviews_count)} ${ssrInterpolate("Reviews")}</div></div><div class="product-detail mb-2"><h4>${ssrInterpolate("Product Details :")}</h4><p>${__props.Product.short_description}</p></div><div class="pickup-box"><div class="product-info"><ul class="product-info-list product-info-list-2">`);
      if (__props.Product.sku) {
        _push(`<li>${ssrInterpolate(_ctx.$t("SKU"))}: ${ssrInterpolate(__props.Product.sku)}</li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_j = __props.Product) == null ? void 0 : _j.stock_status) {
        _push(`<li>${ssrInterpolate(_ctx.$t("Stock Status"))}: ${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))((_k = __props.Product) == null ? void 0 : _k.stock_status))}</li>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.Product.quantity > 0) {
        _push(`<li>${ssrInterpolate(_ctx.$t("Quantity"))}: ${ssrInterpolate(__props.Product.quantity)} ${ssrInterpolate("Items Left")}</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div>`);
      if ((_m = (_l = __props.Product) == null ? void 0 : _l.attributes) == null ? void 0 : _m.length) {
        _push(`<div class="selection-section mt-3">`);
        _push(ssrRenderComponent(_component_WidgetsVariantAttributes, {
          product: __props.Product,
          attributes: ((_n = __props.Product) == null ? void 0 : _n.attributes) || [],
          onSelectVariation: ($event) => selectVariation($event)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="modal-button"><div class="modal-qty"><div class="input-group"><button type="button" class="qty-left-minus">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:subtract-line" }, null, _parent));
      _push(`</button><input class="form-control input-number qty-input"${ssrRenderAttr("value", unref(productQty))} type="number" name="quantity" readonly><button type="button" class="qty-right-plus">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:add-line" }, null, _parent));
      _push(`</button></div></div>`);
      if (unref(selectedVariation) && ((_o = unref(selectedVariation)) == null ? void 0 : _o.stock_status) == "in_stock" || ((_p = __props.Product) == null ? void 0 : _p.stock_status) == "in_stock" && __props.Product.type === "simple") {
        _push(`<button class="btn theme-bg-color view-button icon text-white fw-bold btn-md">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:shopping-cart-line" }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("Add to Cart"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (((_q = unref(selectedVariation)) == null ? void 0 : _q.stock_status) == "out_of_stock" || ((_r = __props.Product) == null ? void 0 : _r.stock_status) == "out_of_stock") {
        _push(`<button class="btn theme-bg-color view-button icon text-white fw-bold btn-md"${ssrIncludeBooleanAttr(true) ? " disabled" : ""}>${ssrInterpolate(((_s = unref(selectedVariation)) == null ? void 0 : _s.stock_status) == "out_of_stock" || __props.Product.stock_status == "out_of_stock" ? "Sold Out" : "Add to Cart")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/ProductModal/Right.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Right = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$5
});
const _sfc_main$4 = {
  __name: "Main",
  __ssrInlineRender: true,
  props: { Data: { type: Object } },
  setup(__props) {
    var _a;
    let props = __props;
    useCartStore();
    let { cart } = storeToRefs(useCartStore());
    let attributes = ref({}), existingCartItemIndex = ref(-1), GlobalSelectedVariant = ref({}), selectedAttributeIds = ref([]), productAvailable = ref(true);
    ref(false);
    (_a = props.Data.item) == null ? void 0 : _a.attributes.forEach((attribute, i) => {
      attributes.value[attribute.name] = { dropDownOptions: attribute.attribute_values, available: true };
    });
    watch(() => attributes, () => {
      var _a2, _b, _c, _d;
      productAvailable.value = true, selectedAttributeIds.value = [], existingCartItemIndex.value = -1, GlobalSelectedVariant.value = {};
      for (const key in attributes.value) {
        ((_a2 = attributes.value[key].selected) == null ? void 0 : _a2.id) && selectedAttributeIds.value.push((_b = attributes.value[key].selected) == null ? void 0 : _b.id);
      }
      if (selectedAttributeIds.value.length == ((_d = (_c = props.Data.item.variations[0]) == null ? void 0 : _c.attribute_values) == null ? void 0 : _d.length)) {
        props.Data.item.variations.every((variant, index2) => {
          let count = 0;
          selectedAttributeIds.value.forEach((id) => {
            variant.attribute_values.map((value) => value.id).includes(id) && count++;
          });
          if (count == selectedAttributeIds.value.length) {
            GlobalSelectedVariant.value = JSON.parse(JSON.stringify(variant));
            let productIndex = cart.value.findIndex((item) => item.product_id == props.Data.item.id && item.variation_id == variant.id);
            productIndex >= 0 ? existingCartItemIndex.value = productIndex : existingCartItemIndex.value = -1;
            return false;
          } else
            return true;
        });
        Object.keys(GlobalSelectedVariant.value).length ? productAvailable.value = true : productAvailable.value = false;
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsModalsProductModalImages = _sfc_main$8;
      const _component_WidgetsModalsProductModalRight = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row g-sm-4 g-2" }, _attrs))}><div class="col-lg-6">`);
      _push(ssrRenderComponent(_component_WidgetsModalsProductModalImages, {
        Data: __props.Data.item
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_WidgetsModalsProductModalRight, {
        Product: __props.Data.item
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/ProductModal/Main.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Main = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$4
});
const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    Data: {
      type: Object
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsModalsProductModalMain = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7240fd6d>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.Data.show) {
          _push2(`<div class="modal fade theme-modal view-modal show d-block" id="view" tabindex="-1" data-v-7240fd6d><div class="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down" data-v-7240fd6d>`);
          _push2(ssrRenderComponent(unref(OnClickOutside), {
            class: "modal-content",
            onTrigger: () => {
              unref(emit)("close");
            }
          }, {
            default: withCtx((_2, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<div class="modal-header p-0" data-v-7240fd6d${_scopeId}><button type="button" class="btn-close" data-v-7240fd6d${_scopeId}>`);
                _push3(ssrRenderComponent(_component_Icon, { name: "ri:close-line" }, null, _parent2, _scopeId));
                _push3(`</button></div><div class="modal-body" data-v-7240fd6d${_scopeId}>`);
                _push3(ssrRenderComponent(_component_WidgetsModalsProductModalMain, { Data: __props.Data }, null, _parent2, _scopeId));
                _push3(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "modal-header p-0" }, [
                    createVNode("button", {
                      type: "button",
                      class: "btn-close",
                      onClick: withModifiers(() => {
                        unref(emit)("close");
                      }, ["prevent"])
                    }, [
                      createVNode(_component_Icon, { name: "ri:close-line" })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "modal-body" }, [
                    createVNode(_component_WidgetsModalsProductModalMain, { Data: __props.Data }, null, 8, ["Data"])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.Data.show) {
          _push2(`<div class="bg-overlay show d-block" data-v-7240fd6d></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/ProductModal/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7240fd6d"]]);
const index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_2
});
const useSiteStore = defineStore("site-store", () => {
  var SiteSettings = ref({});
  const SetSiteSettings = ({ settings }) => {
    settings && (SiteSettings.value = settings);
  };
  return {
    SiteSettings,
    SetSiteSettings
  };
});
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
    let __temp, __restore;
    let { modals, cart } = storeToRefs(useCartStore());
    let { Settings, ThemeOptions } = storeToRefs(useDataStore());
    let { data, error, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("settings", {
      key: "getSettingsInApp"
    })), __temp = await __temp, __restore(), __temp);
    ref(null);
    ref(true);
    const timeoutId = ref(null);
    ref(0);
    ref(["⚡ Come Back !!", "🎉 Offers for you..."]);
    ref("");
    ref(1e3);
    watch(
      () => ThemeOptions.value.options,
      (theme) => {
        var _a2, _b2;
        if (((_a2 = theme == null ? void 0 : theme.general) == null ? void 0 : _a2.mode) === "dark")
          ;
        if (((_b2 = theme == null ? void 0 : theme.general) == null ? void 0 : _b2.language_direction) === "rtl")
          ;
      }
    );
    useHead({
      link: [
        {
          rel: "icon",
          id: "appIcon",
          type: "image/png",
          href: (_d = (_c = (_b = (_a = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _a.options) == null ? void 0 : _b.logo) == null ? void 0 : _c.favicon_icon) == null ? void 0 : _d.original_url
        }
      ],
      meta: [
        {
          property: "og:title",
          content: (_g = (_f = (_e = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _e.options) == null ? void 0 : _f.seo) == null ? void 0 : _g.og_title
        }
      ],
      meta: [
        {
          property: "og:description",
          content: (_i = (_h = ThemeOptions == null ? void 0 : ThemeOptions.value.options) == null ? void 0 : _h.seo) == null ? void 0 : _i.og_description
        }
      ],
      meta: [
        {
          property: "og:image",
          content: (_m = (_l = (_k = (_j = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _j.options) == null ? void 0 : _k.seo) == null ? void 0 : _l.og_image) == null ? void 0 : _m.original_url
        }
      ],
      meta: [
        {
          property: "og:title",
          content: (_p = (_o = (_n = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _n.options) == null ? void 0 : _o.seo) == null ? void 0 : _p.og_title
        }
      ],
      meta: [
        {
          property: "description",
          content: (_s = (_r = (_q = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _q.options) == null ? void 0 : _r.seo) == null ? void 0 : _s.meta_description
        }
      ],
      meta: [
        {
          property: "keywords",
          content: (_v = (_u = (_t = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _t.options) == null ? void 0 : _u.seo) == null ? void 0 : _v.meta_tags
        }
      ]
    });
    onUnmounted(() => {
      clearTimeout(timeoutId.value);
    });
    if (!error.value) {
      useSiteStore().SetSiteSettings({ settings: data.value });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_2$1;
      const _component_WidgetsModalsProductModal = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsModalsProductModal, {
        Data: unref(modals).quickView,
        onClose: () => {
          unref(useCartStore)().ToggleModal({ value: false });
        }
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = _sfc_main$2;
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-B5IRoIyf.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./error-500-CRNDJUTx.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { __nuxt_component_2$2 as A, BaseUrl as B, useSiteStore as C, useAppConfig as D, GetHeaders as G, HandleRequest as H, _export_sfc as _, useRouter as a, useRuntimeConfig as b, navigateTo as c, __nuxt_component_1 as d, entry$1 as default, useDataStore as e, useUserStore as f, defineStore as g, useFetch as h, useRoute as i, __nuxt_component_2$1 as j, useCurrencyStore as k, useCartStore as l, useApiCartStore as m, nuxtLinkDefaults as n, useCookie as o, publicAssetsURL as p, useNuxtApp as q, useCheckoutStore as r, storeToRefs as s, transform as t, useHead as u, useCollectionStore as v, _sfc_main$7 as w, parseSize as x, useRequestEvent as y, _sfc_main$6 as z };
