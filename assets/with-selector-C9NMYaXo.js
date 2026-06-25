import{K as B,u as g,e as G,j as E,B as L,i as P,A as $,W as A,ai as N}from"./index-Gv1BuShk.js";var U={root:"m_de3d2490",colorOverlay:"m_862f3d1b",shadowOverlay:"m_98ae7f22",alphaOverlay:"m_95709ac0",childrenOverlay:"m_93e74e3"};const q={withShadow:!0},F=P((a,{radius:l,size:f})=>({root:{"--cs-radius":l===void 0?void 0:A(l),"--cs-size":$(f)}})),k=B((a,l)=>{const f=g("ColorSwatch",q,a),{classNames:S,className:m,style:y,styles:p,unstyled:w,vars:d,color:s,size:n,radius:e,withShadow:r,children:o,variant:u,attributes:t,...i}=g("ColorSwatch",q,f),v=G({name:"ColorSwatch",props:f,classes:U,className:m,style:y,classNames:S,styles:p,unstyled:w,attributes:t,vars:d,varsResolver:F});return E.jsxs(L,{ref:l,variant:u,size:n,...v("root",{focusable:!0}),...i,children:[E.jsx("span",{...v("alphaOverlay")}),r&&E.jsx("span",{...v("shadowOverlay")}),E.jsx("span",{...v("colorOverlay",{style:{backgroundColor:s}})}),E.jsx("span",{...v("childrenOverlay"),children:o})]})});k.classes=U;k.displayName="@mantine/core/ColorSwatch";var b={exports:{}},j={},_={exports:{}},O={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function K(){if(z)return O;z=1;var a=N();function l(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var f=typeof Object.is=="function"?Object.is:l,S=a.useState,m=a.useEffect,y=a.useLayoutEffect,p=a.useDebugValue;function w(e,r){var o=r(),u=S({inst:{value:o,getSnapshot:r}}),t=u[0].inst,i=u[1];return y(function(){t.value=o,t.getSnapshot=r,d(t)&&i({inst:t})},[e,o,r]),m(function(){return d(t)&&i({inst:t}),e(function(){d(t)&&i({inst:t})})},[e]),p(o),o}function d(e){var r=e.getSnapshot;e=e.value;try{var o=r();return!f(e,o)}catch{return!0}}function s(e,r){return r()}var n=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?s:w;return O.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:n,O}var D;function H(){return D||(D=1,_.exports=K()),_.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I;function J(){if(I)return j;I=1;var a=N(),l=H();function f(s,n){return s===n&&(s!==0||1/s===1/n)||s!==s&&n!==n}var S=typeof Object.is=="function"?Object.is:f,m=l.useSyncExternalStore,y=a.useRef,p=a.useEffect,w=a.useMemo,d=a.useDebugValue;return j.useSyncExternalStoreWithSelector=function(s,n,e,r,o){var u=y(null);if(u.current===null){var t={hasValue:!1,value:null};u.current=t}else t=u.current;u=w(function(){function v(c){if(!C){if(C=!0,x=c,c=r(c),o!==void 0&&t.hasValue){var h=t.value;if(o(h,c))return R=h}return R=c}if(h=R,S(x,c))return h;var W=r(c);return o!==void 0&&o(h,W)?(x=c,h):(x=c,R=W)}var C=!1,x,R,V=e===void 0?null:e;return[function(){return v(n())},V===null?void 0:function(){return v(V())}]},[n,e,r,o]);var i=m(s,u[0],u[1]);return p(function(){t.hasValue=!0,t.value=i},[i]),d(i),i},j}var M;function Q(){return M||(M=1,b.exports=J()),b.exports}var X=Q();export{k as C,H as r,X as w};
