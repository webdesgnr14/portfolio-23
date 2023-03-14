/*! For license information please see appbundle.js.LICENSE.txt */
(()=>{var e,t,n,r,i={9382:(e,t,n)=>{"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Qc:()=>vn,qv:()=>yn,vI:()=>mn,vz:()=>gn});var h=function(){},f={},p={},m=null,g={mark:h,measure:h};try{"undefined"!=typeof window&&(f=window),"undefined"!=typeof document&&(p=document),"undefined"!=typeof MutationObserver&&(m=MutationObserver),"undefined"!=typeof performance&&(g=performance)}catch(e){}var v,y,b,x,w,_=(f.navigator||{}).userAgent,S=void 0===_?"":_,E=f,C=p,k=m,M=g,T=(E.document,!!C.documentElement&&!!C.head&&"function"==typeof C.addEventListener&&"function"==typeof C.createElement),D=~S.indexOf("MSIE")||~S.indexOf("Trident/"),A="___FONT_AWESOME___",P=16,O="fa",R="svg-inline--fa",F="data-fa-i2svg",L="data-fa-pseudo-element",I="data-fa-pseudo-element-pending",N="data-prefix",j="data-icon",$="fontawesome-i2svg",z="async",B=["HTML","HEAD","STYLE","SCRIPT"],U=function(){try{return!0}catch(e){return!1}}(),H="classic",V="sharp",W=[H,V];function G(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[H]}})}var q=G((s(v={},H,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),s(v,V,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),v)),Y=G((s(y={},H,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),s(y,V,{solid:"fass",regular:"fasr"}),y)),Z=G((s(b={},H,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),s(b,V,{fass:"fa-solid",fasr:"fa-regular"}),b)),X=G((s(x={},H,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),s(x,V,{"fa-solid":"fass","fa-regular":"fasr"}),x)),Q=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,K="fa-layers-text",J=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ee=G((s(w={},H,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),s(w,V,{900:"fass",400:"fasr"}),w)),te=[1,2,3,4,5,6,7,8,9,10],ne=te.concat([11,12,13,14,15,16,17,18,19,20]),re=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oe=new Set;Object.keys(Y[H]).map(oe.add.bind(oe)),Object.keys(Y[V]).map(oe.add.bind(oe));var ae=[].concat(W,u(oe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(te.map((function(e){return"".concat(e,"x")}))).concat(ne.map((function(e){return"w-".concat(e)}))),se=E.FontAwesomeConfig||{};C&&"function"==typeof C.querySelector&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=l(e,2),n=t[0],r=t[1],i=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=C.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(n));null!=i&&(se[r]=i)}));var le={styleDefault:"solid",familyDefault:"classic",cssPrefix:O,replacementClass:R,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};se.familyPrefix&&(se.cssPrefix=se.familyPrefix);var ue=i(i({},le),se);ue.autoReplaceSvg||(ue.observeMutations=!1);var ce={};Object.keys(le).forEach((function(e){Object.defineProperty(ce,e,{enumerable:!0,set:function(t){ue[e]=t,de.forEach((function(e){return e(ce)}))},get:function(){return ue[e]}})})),Object.defineProperty(ce,"familyPrefix",{enumerable:!0,set:function(e){ue.cssPrefix=e,de.forEach((function(e){return e(ce)}))},get:function(){return ue.cssPrefix}}),E.FontAwesomeConfig=ce;var de=[],he=P,fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},pe="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function me(){for(var e=12,t="";e-- >0;)t+=pe[62*Math.random()|0];return t}function ge(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ve(e){return e.classList?ge(e.classList):(e.getAttribute("class")||"").split(" ").filter((function(e){return e}))}function ye(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function be(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")}),"")}function xe(e){return e.size!==fe.size||e.x!==fe.x||e.y!==fe.y||e.rotate!==fe.rotate||e.flipX||e.flipY}var we=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function _e(){var e=O,t=R,n=ce.cssPrefix,r=ce.replacementClass,i=we;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Se=!1;function Ee(){ce.autoAddCss&&!Se&&(function(e){if(e&&T){var t=C.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=C.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}C.head.insertBefore(t,r)}}(_e()),Se=!0)}var Ce={mixout:function(){return{dom:{css:_e,insertCss:Ee}}},hooks:function(){return{beforeDOMElementCreation:function(){Ee()},beforeI2svg:function(){Ee()}}}},ke=E||{};ke[A]||(ke[A]={}),ke[A].styles||(ke[A].styles={}),ke[A].hooks||(ke[A].hooks={}),ke[A].shims||(ke[A].shims=[]);var Me=ke[A],Te=[],De=!1;function Ae(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,i=e.children,o=void 0===i?[]:i;return"string"==typeof e?ye(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(ye(e[n]),'" ')}),"").trim()}(r),">").concat(o.map(Ae).join(""),"</").concat(t,">")}function Pe(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}T&&((De=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState))||C.addEventListener("DOMContentLoaded",(function e(){C.removeEventListener("DOMContentLoaded",e),De=1,Te.map((function(e){return e()}))})));var Oe=function(e,t,n,r){var i,o,a,s=Object.keys(e),l=s.length,u=void 0!==r?function(e,t){return function(n,r,i,o){return e.call(t,n,r,i,o)}}(t,r):t;for(void 0===n?(i=1,a=e[s[0]]):(i=0,a=n);i<l;i++)a=u(a,e[o=s[i]],o,e);return a};function Re(e){var t=function(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);56320==(64512&o)?t.push(((1023&i)<<10)+(1023&o)+65536):(t.push(i),n--)}else t.push(i)}return t}(e);return 1===t.length?t[0].toString(16):null}function Fe(e){return Object.keys(e).reduce((function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t}),{})}function Le(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==n&&n,o=Fe(t);"function"!=typeof Me.hooks.addPack||r?Me.styles[e]=i(i({},Me.styles[e]||{}),o):Me.hooks.addPack(e,Fe(t)),"fas"===e&&Le("fa",t)}var Ie,Ne,je,$e=Me.styles,ze=Me.shims,Be=(s(Ie={},H,Object.values(Z[H])),s(Ie,V,Object.values(Z[V])),Ie),Ue=null,He={},Ve={},We={},Ge={},qe={},Ye=(s(Ne={},H,Object.keys(q[H])),s(Ne,V,Object.keys(q[V])),Ne);var Ze,Xe=function(){var e=function(e){return Oe($e,(function(t,n,r){return t[r]=Oe(n,e,{}),t}),{})};He=e((function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter((function(e){return"number"==typeof e})).forEach((function(t){e[t.toString(16)]=n})),e})),Ve=e((function(e,t,n){return e[n]=n,t[2]&&t[2].filter((function(e){return"string"==typeof e})).forEach((function(t){e[t]=n})),e})),qe=e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in $e||ce.autoFetchSvg,n=Oe(ze,(function(e,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||t||(i="fas"),"string"==typeof r&&(e.names[r]={prefix:i,iconName:o}),"number"==typeof r&&(e.unicodes[r.toString(16)]={prefix:i,iconName:o}),e}),{names:{},unicodes:{}});We=n.names,Ge=n.unicodes,Ue=nt(ce.styleDefault,{family:ce.familyDefault})};function Qe(e,t){return(He[e]||{})[t]}function Ke(e,t){return(qe[e]||{})[t]}function Je(e){return We[e]||{prefix:null,iconName:null}}function et(){return Ue}Ze=function(e){Ue=nt(e.styleDefault,{family:ce.familyDefault})},de.push(Ze),Xe();var tt=function(){return{prefix:null,iconName:null,rest:[]}};function nt(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).family,n=void 0===t?H:t,r=q[n][e],i=Y[n][e]||Y[n][r],o=e in Me.styles?e:null;return i||o||null}var rt=(s(je={},H,Object.keys(Z[H])),s(je,V,Object.keys(Z[V])),je);function it(e){var t,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipLookups,r=void 0!==n&&n,i=(s(t={},H,"".concat(ce.cssPrefix,"-").concat(H)),s(t,V,"".concat(ce.cssPrefix,"-").concat(V)),t),o=null,a=H;(e.includes(i[H])||e.some((function(e){return rt[H].includes(e)})))&&(a=H),(e.includes(i[V])||e.some((function(e){return rt[V].includes(e)})))&&(a=V);var l=e.reduce((function(e,t){var n=function(e,t){var n,r=t.split("-"),i=r[0],o=r.slice(1).join("-");return i!==e||""===o||(n=o,~ae.indexOf(n))?null:o}(ce.cssPrefix,t);if($e[t]?(t=Be[a].includes(t)?X[a][t]:t,o=t,e.prefix=t):Ye[a].indexOf(t)>-1?(o=t,e.prefix=nt(t,{family:a})):n?e.iconName=n:t!==ce.replacementClass&&t!==i[H]&&t!==i[V]&&e.rest.push(t),!r&&e.prefix&&e.iconName){var s="fa"===o?Je(e.iconName):{},l=Ke(e.prefix,e.iconName);s.prefix&&(o=null),e.iconName=s.iconName||l||e.iconName,e.prefix=s.prefix||e.prefix,"far"!==e.prefix||$e.far||!$e.fas||ce.autoFetchSvg||(e.prefix="fas")}return e}),tt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),l.prefix||a!==V||!$e.fass&&!ce.autoFetchSvg||(l.prefix="fass",l.iconName=Ke(l.prefix,l.iconName)||l.iconName),"fa"!==l.prefix&&"fa"!==o||(l.prefix=et()||"fas"),l}var ot=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t,n;return t=e,n=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(t){e.definitions[t]=i(i({},e.definitions[t]||{}),o[t]),Le(t,o[t]);var n=Z[H][t];n&&Le(n,o[t]),Xe()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],i=r.prefix,o=r.iconName,a=r.icon,s=a[2];e[i]||(e[i]={}),s.length>0&&s.forEach((function(t){"string"==typeof t&&(e[i][t]=a)})),e[i][o]=a})),e}}],n&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),at=[],st={},lt={},ut=Object.keys(lt);function ct(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(st[e]||[]).forEach((function(e){t=e.apply(null,[t].concat(r))})),t}function dt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(st[e]||[]).forEach((function(e){e.apply(null,n)}))}function ht(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return lt[e]?lt[e].apply(null,t):void 0}function ft(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=Ke(n,t)||t,Pe(pt.definitions,n,t)||Pe(Me.styles,n,t)}var pt=new ot,mt={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return T?(dt("beforeI2svg",e),ht("pseudoElements2svg",e),ht("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.autoReplaceSvgRoot;!1===ce.autoReplaceSvg&&(ce.autoReplaceSvg=!0),ce.observeMutations=!0,e=function(){vt({autoReplaceSvgRoot:n}),dt("watch",t)},T&&(De?setTimeout(e,0):Te.push(e))}},gt={noAuto:function(){ce.autoReplaceSvg=!1,ce.observeMutations=!1,dt("noAuto")},config:ce,dom:mt,parse:{icon:function(e){if(null===e)return null;if("object"===o(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ke(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=nt(e[0]);return{prefix:n,iconName:Ke(n,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(ce.cssPrefix,"-"))>-1||e.match(Q))){var r=it(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||et(),iconName:Ke(r.prefix,r.iconName)||r.iconName}}if("string"==typeof e){var i=et();return{prefix:i,iconName:Ke(i,e)||e}}}},library:pt,findIconDefinition:ft,toHtml:Ae},vt=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,t=void 0===e?C:e;(Object.keys(Me.styles).length>0||ce.autoFetchSvg)&&T&&ce.autoReplaceSvg&&gt.dom.i2svg({node:t})};function yt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return Ae(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(T){var t=C.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function bt(e){var t=e.icons,n=t.main,r=t.mask,o=e.prefix,a=e.iconName,s=e.transform,l=e.symbol,u=e.title,c=e.maskId,d=e.titleId,h=e.extra,f=e.watchable,p=void 0!==f&&f,m=r.found?r:n,g=m.width,v=m.height,y="fak"===o,b=[ce.replacementClass,a?"".concat(ce.cssPrefix,"-").concat(a):""].filter((function(e){return-1===h.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(h.classes).join(" "),x={children:[],attributes:i(i({},h.attributes),{},{"data-prefix":o,"data-icon":a,class:b,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})},w=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};p&&(x.attributes[F]=""),u&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(d||me())},children:[u]}),delete x.attributes.title);var _=i(i({},x),{},{prefix:o,iconName:a,main:n,mask:r,maskId:c,transform:s,symbol:l,styles:i(i({},w),h.styles)}),S=r.found&&n.found?ht("generateAbstractMask",_)||{children:[],attributes:{}}:ht("generateAbstractIcon",_)||{children:[],attributes:{}},E=S.children,C=S.attributes;return _.children=E,_.attributes=C,l?function(e){var t=e.prefix,n=e.iconName,r=e.children,o=e.attributes,a=e.symbol,s=!0===a?"".concat(t,"-").concat(ce.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},o),{},{id:s}),children:r}]}]}(_):function(e){var t=e.children,n=e.main,r=e.mask,o=e.attributes,a=e.styles,s=e.transform;if(xe(s)&&n.found&&!r.found){var l={x:n.width/n.height/2,y:.5};o.style=be(i(i({},a),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}(_)}function xt(e){var t=e.content,n=e.width,r=e.height,o=e.transform,a=e.title,s=e.extra,l=e.watchable,u=void 0!==l&&l,c=i(i(i({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});u&&(c[F]="");var d=i({},s.styles);xe(o)&&(d.transform=function(e){var t=e.transform,n=e.width,r=void 0===n?P:n,i=e.height,o=void 0===i?P:i,a=e.startCentered,s=void 0!==a&&a,l="";return l+=s&&D?"translate(".concat(t.x/he-r/2,"em, ").concat(t.y/he-o/2,"em) "):s?"translate(calc(-50% + ".concat(t.x/he,"em), calc(-50% + ").concat(t.y/he,"em)) "):"translate(".concat(t.x/he,"em, ").concat(t.y/he,"em) "),(l+="scale(".concat(t.size/he*(t.flipX?-1:1),", ").concat(t.size/he*(t.flipY?-1:1),") "))+"rotate(".concat(t.rotate,"deg) ")}({transform:o,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var h=be(d);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[t]}),a&&f.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),f}var wt=Me.styles;function _t(e){var t=e[0],n=e[1],r=l(e.slice(4),1)[0];return{found:!0,width:t,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(ce.cssPrefix,"-").concat(ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(ie.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(ie.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}var St={found:!1,width:512,height:512};function Et(e,t){var n=t;return"fa"===t&&null!==ce.styleDefault&&(t=et()),new Promise((function(r,o){if(ht("missingIconAbstract"),"fa"===n){var a=Je(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&wt[t]&&wt[t][e])return r(_t(wt[t][e]));!function(e,t){U||ce.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),r(i(i({},St),{},{icon:ce.showMissingIcons&&e&&ht("missingIconAbstract")||{}}))}))}var Ct=function(){},kt=ce.measurePerformance&&M&&M.mark&&M.measure?M:{mark:Ct,measure:Ct},Mt='FA "6.3.0"',Tt=function(e){kt.mark("".concat(Mt," ").concat(e," ends")),kt.measure("".concat(Mt," ").concat(e),"".concat(Mt," ").concat(e," begins"),"".concat(Mt," ").concat(e," ends"))},Dt={begin:function(e){return kt.mark("".concat(Mt," ").concat(e," begins")),function(){return Tt(e)}},end:Tt},At=function(){};function Pt(e){return"string"==typeof(e.getAttribute?e.getAttribute(F):null)}function Ot(e){return C.createElementNS("http://www.w3.org/2000/svg",e)}function Rt(e){return C.createElement(e)}function Ft(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ceFn,n=void 0===t?"svg"===e.tag?Ot:Rt:t;if("string"==typeof e)return C.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach((function(t){r.setAttribute(t,e.attributes[t])})),(e.children||[]).forEach((function(e){r.appendChild(Ft(e,{ceFn:n}))})),r}var Lt={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach((function(e){t.parentNode.insertBefore(Ft(e),t)})),null===t.getAttribute(F)&&ce.keepOriginalSource){var n=C.createComment(function(e){var t=" ".concat(e.outerHTML," ");return"".concat(t,"Font Awesome fontawesome.com ")}(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~ve(t).indexOf(ce.replacementClass))return Lt.replace(e);var r=new RegExp("".concat(ce.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce((function(e,t){return t===ce.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e}),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),0===i.toNode.length?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=n.map((function(e){return Ae(e)})).join("\n");t.setAttribute(F,""),t.innerHTML=o}};function It(e){e()}function Nt(e,t){var n="function"==typeof t?t:At;if(0===e.length)n();else{var r=It;ce.mutateApproach===z&&(r=E.requestAnimationFrame||It),r((function(){var t=!0===ce.autoReplaceSvg?Lt.replace:Lt[ce.autoReplaceSvg]||Lt.replace,r=Dt.begin("mutate");e.map(t),r(),n()}))}}var jt=!1;function $t(){jt=!0}function zt(){jt=!1}var Bt=null;function Ut(e){if(k&&ce.observeMutations){var t=e.treeCallback,n=void 0===t?At:t,r=e.nodeCallback,i=void 0===r?At:r,o=e.pseudoElementsCallback,a=void 0===o?At:o,s=e.observeMutationsRoot,l=void 0===s?C:s;Bt=new k((function(e){if(!jt){var t=et();ge(e).forEach((function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Pt(e.addedNodes[0])&&(ce.searchPseudoElements&&a(e.target),n(e.target)),"attributes"===e.type&&e.target.parentNode&&ce.searchPseudoElements&&a(e.target.parentNode),"attributes"===e.type&&Pt(e.target)&&~re.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){var t=e.getAttribute?e.getAttribute(N):null,n=e.getAttribute?e.getAttribute(j):null;return t&&n}(e.target)){var r=it(ve(e.target)),o=r.prefix,s=r.iconName;e.target.setAttribute(N,o||t),s&&e.target.setAttribute(j,s)}else(l=e.target)&&l.classList&&l.classList.contains&&l.classList.contains(ce.replacementClass)&&i(e.target);var l}))}})),T&&Bt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ht(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=function(e){var t,n,r=e.getAttribute("data-prefix"),i=e.getAttribute("data-icon"),o=void 0!==e.innerText?e.innerText.trim():"",a=it(ve(e));return a.prefix||(a.prefix=et()),r&&i&&(a.prefix=r,a.iconName=i),a.iconName&&a.prefix||(a.prefix&&o.length>0&&(a.iconName=(t=a.prefix,n=e.innerText,(Ve[t]||{})[n]||Qe(a.prefix,Re(e.innerText)))),!a.iconName&&ce.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}(e),r=n.iconName,o=n.prefix,a=n.rest,s=function(e){var t=ge(e.attributes).reduce((function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e}),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return ce.autoA11y&&(n?t["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(r||me()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),l=ct("parseNodeAttributes",{},e),u=t.styleParser?function(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((function(e,t){var n=t.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(":").trim()),e}),{})),n}(e):[];return i({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:u,attributes:s}},l)}var Vt=Me.styles;function Wt(e){var t="nest"===ce.autoReplaceSvg?Ht(e,{styleParser:!1}):Ht(e);return~t.extra.classes.indexOf(K)?ht("generateLayersText",e,t):ht("generateSvgReplacementMutation",e,t)}var Gt=new Set;function qt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!T)return Promise.resolve();var n=C.documentElement.classList,r=function(e){return n.add("".concat($,"-").concat(e))},i=function(e){return n.remove("".concat($,"-").concat(e))},o=ce.autoFetchSvg?Gt:W.map((function(e){return"fa-".concat(e)})).concat(Object.keys(Vt));o.includes("fa")||o.push("fa");var a=[".".concat(K,":not([").concat(F,"])")].concat(o.map((function(e){return".".concat(e,":not([").concat(F,"])")}))).join(", ");if(0===a.length)return Promise.resolve();var s=[];try{s=ge(e.querySelectorAll(a))}catch(e){}if(!(s.length>0))return Promise.resolve();r("pending"),i("complete");var l=Dt.begin("onTree"),u=s.reduce((function(e,t){try{var n=Wt(t);n&&e.push(n)}catch(e){U||"MissingIcon"===e.name&&console.error(e)}return e}),[]);return new Promise((function(e,n){Promise.all(u).then((function(n){Nt(n,(function(){r("active"),r("complete"),i("pending"),"function"==typeof t&&t(),l(),e()}))})).catch((function(e){l(),n(e)}))}))}function Yt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Wt(e).then((function(e){e&&Nt([e],t)}))}W.map((function(e){Gt.add("fa-".concat(e))})),Object.keys(q[H]).map(Gt.add.bind(Gt)),Object.keys(q[V]).map(Gt.add.bind(Gt)),Gt=u(Gt);var Zt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?fe:n,o=t.symbol,a=void 0!==o&&o,s=t.mask,l=void 0===s?null:s,u=t.maskId,c=void 0===u?null:u,d=t.title,h=void 0===d?null:d,f=t.titleId,p=void 0===f?null:f,m=t.classes,g=void 0===m?[]:m,v=t.attributes,y=void 0===v?{}:v,b=t.styles,x=void 0===b?{}:b;if(e){var w=e.prefix,_=e.iconName,S=e.icon;return yt(i({type:"icon"},e),(function(){return dt("beforeDOMElementCreation",{iconDefinition:e,params:t}),ce.autoA11y&&(h?y["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(p||me()):(y["aria-hidden"]="true",y.focusable="false")),bt({icons:{main:_t(S),mask:l?_t(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:_,transform:i(i({},fe),r),symbol:a,title:h,maskId:c,titleId:p,extra:{attributes:y,styles:x,classes:g}})}))}},Xt={mixout:function(){return{icon:(e=Zt,function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(t||{}).icon?t:ft(t||{}),o=n.mask;return o&&(o=(o||{}).icon?o:ft(o||{})),e(r,i(i({},n),{},{mask:o}))})};var e},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=qt,e.nodeCallback=Yt,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=void 0===t?C:t,r=e.callback;return qt(n,void 0===r?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.title,i=t.titleId,o=t.prefix,a=t.transform,s=t.symbol,u=t.mask,c=t.maskId,d=t.extra;return new Promise((function(t,h){Promise.all([Et(n,o),u.iconName?Et(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(u){var h=l(u,2),f=h[0],p=h[1];t([e,bt({icons:{main:f,mask:p},prefix:o,iconName:n,transform:a,symbol:s,maskId:c,title:r,titleId:i,extra:d,watchable:!0})])})).catch(h)}))},e.generateAbstractIcon=function(e){var t,n=e.children,r=e.attributes,i=e.main,o=e.transform,a=be(e.styles);return a.length>0&&(r.style=a),xe(o)&&(t=ht("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(t||i.icon),{children:n,attributes:r}}}},Qt={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.classes,r=void 0===n?[]:n;return yt({type:"layer"},(function(){dt("beforeDOMElementCreation",{assembler:e,params:t});var n=[];return e((function(e){Array.isArray(e)?e.map((function(e){n=n.concat(e.abstract)})):n=n.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(ce.cssPrefix,"-layers")].concat(u(r)).join(" ")},children:n}]}))}}}},Kt={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.title,r=void 0===n?null:n,o=t.classes,a=void 0===o?[]:o,s=t.attributes,l=void 0===s?{}:s,c=t.styles,d=void 0===c?{}:c;return yt({type:"counter",content:e},(function(){return dt("beforeDOMElementCreation",{content:e,params:t}),function(e){var t=e.content,n=e.title,r=e.extra,o=i(i(i({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=be(r.styles);a.length>0&&(o.style=a);var s=[];return s.push({tag:"span",attributes:o,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}({content:e.toString(),title:r,extra:{attributes:l,styles:d,classes:["".concat(ce.cssPrefix,"-layers-counter")].concat(u(a))}})}))}}}},Jt={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?fe:n,o=t.title,a=void 0===o?null:o,s=t.classes,l=void 0===s?[]:s,c=t.attributes,d=void 0===c?{}:c,h=t.styles,f=void 0===h?{}:h;return yt({type:"text",content:e},(function(){return dt("beforeDOMElementCreation",{content:e,params:t}),xt({content:e,transform:i(i({},fe),r),title:a,extra:{attributes:d,styles:f,classes:["".concat(ce.cssPrefix,"-layers-text")].concat(u(l))}})}))}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.title,r=t.transform,i=t.extra,o=null,a=null;if(D){var s=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();o=l.width/s,a=l.height/s}return ce.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,xt({content:e.innerHTML,width:o,height:a,transform:r,title:n,extra:i,watchable:!0})])}}},en=new RegExp('"',"ug"),tn=[1105920,1112319];function nn(e,t){var n="".concat(I).concat(t.replace(":","-"));return new Promise((function(r,o){if(null!==e.getAttribute(n))return r();var a,s,l,u=ge(e.children).filter((function(e){return e.getAttribute(L)===t}))[0],c=E.getComputedStyle(e,t),d=c.getPropertyValue("font-family").match(J),h=c.getPropertyValue("font-weight"),f=c.getPropertyValue("content");if(u&&!d)return e.removeChild(u),r();if(d&&"none"!==f&&""!==f){var p=c.getPropertyValue("content"),m=~["Sharp"].indexOf(d[2])?V:H,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(d[2])?Y[m][d[2].toLowerCase()]:ee[m][h],v=function(e){var t,n,r,i,o=e.replace(en,""),a=(0,r=(t=o).length,(i=t.charCodeAt(0))>=55296&&i<=56319&&r>1&&(n=t.charCodeAt(1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i),s=a>=tn[0]&&a<=tn[1],l=2===o.length&&o[0]===o[1];return{value:Re(l?o[0]:o),isSecondary:s||l}}(p),y=v.value,b=v.isSecondary,x=d[0].startsWith("FontAwesome"),w=Qe(g,y),_=w;if(x){var S=(s=Ge[a=y],l=Qe("fas",a),s||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null});S.iconName&&S.prefix&&(w=S.iconName,g=S.prefix)}if(!w||b||u&&u.getAttribute(N)===g&&u.getAttribute(j)===_)r();else{e.setAttribute(n,_),u&&e.removeChild(u);var k={iconName:null,title:null,titleId:null,prefix:null,transform:fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},M=k.extra;M.attributes[L]=t,Et(w,g).then((function(o){var a=bt(i(i({},k),{},{icons:{main:o,mask:tt()},prefix:g,iconName:_,extra:M,watchable:!0})),s=C.createElement("svg");"::before"===t?e.insertBefore(s,e.firstChild):e.appendChild(s),s.outerHTML=a.map((function(e){return Ae(e)})).join("\n"),e.removeAttribute(n),r()})).catch(o)}}else r()}))}function rn(e){return Promise.all([nn(e,"::before"),nn(e,"::after")])}function on(e){return!(e.parentNode===document.head||~B.indexOf(e.tagName.toUpperCase())||e.getAttribute(L)||e.parentNode&&"svg"===e.parentNode.tagName)}function an(e){if(T)return new Promise((function(t,n){var r=ge(e.querySelectorAll("*")).filter(on).map(rn),i=Dt.begin("searchPseudoElements");$t(),Promise.all(r).then((function(){i(),zt(),t()})).catch((function(){i(),zt(),n()}))}))}var sn=!1,ln=function(e){return e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},un={mixout:function(){return{parse:{transform:function(e){return ln(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-transform");return n&&(e.transform=ln(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,o=e.iconWidth,a={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(32*n.x,", ").concat(32*n.y,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),u="rotate(".concat(n.rotate," 0 0)"),c={outer:a,inner:{transform:"".concat(s," ").concat(l," ").concat(u)},path:{transform:"translate(".concat(o/2*-1," -256)")}};return{tag:"g",attributes:i({},c.outer),children:[{tag:"g",attributes:i({},c.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:i(i({},t.icon.attributes),c.path)}]}]}}}},cn={x:0,y:0,width:"100%",height:"100%"};function dn(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var hn,fn={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-mask"),r=n?it(n.split(" ").map((function(e){return e.trim()}))):tt();return r.prefix||(r.prefix=et()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t,n=e.children,r=e.attributes,o=e.main,a=e.mask,s=e.maskId,l=e.transform,u=o.width,c=o.icon,d=a.width,h=a.icon,f=function(e){var t=e.transform,n=e.iconWidth,r={transform:"translate(".concat(e.containerWidth/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(a)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:l,containerWidth:d,iconWidth:u}),p={tag:"rect",attributes:i(i({},cn),{},{fill:"white"})},m=c.children?{children:c.children.map(dn)}:{},g={tag:"g",attributes:i({},f.inner),children:[dn(i({tag:c.tag,attributes:i(i({},c.attributes),f.path)},m))]},v={tag:"g",attributes:i({},f.outer),children:[g]},y="mask-".concat(s||me()),b="clip-".concat(s||me()),x={tag:"mask",attributes:i(i({},cn),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(t=h,"g"===t.tag?t.children:[t])},x]};return n.push(w,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(y,")")},cn)}),{children:n,attributes:r}}}},pn={provides:function(e){var t=!1;E.matchMedia&&(t=E.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:i(i({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=i(i({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:i(i({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:i(i({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(a),e.push({tag:"path",attributes:i(i({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:i(i({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:i(i({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}};hn={mixoutsTo:gt}.mixoutsTo,at=[Ce,Xt,Qt,Kt,Jt,{hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=an,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=void 0===t?C:t;ce.searchPseudoElements&&an(n)}}},{mixout:function(){return{dom:{unwatch:function(){$t(),sn=!0}}}},hooks:function(){return{bootstrap:function(){Ut(ct("mutationObserverCallbacks",{}))},noAuto:function(){Bt&&Bt.disconnect()},watch:function(e){var t=e.observeMutationsRoot;sn?zt():Ut(ct("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},un,fn,pn,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}}}}],st={},Object.keys(lt).forEach((function(e){-1===ut.indexOf(e)&&delete lt[e]})),at.forEach((function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((function(e){"function"==typeof t[e]&&(hn[e]=t[e]),"object"===o(t[e])&&Object.keys(t[e]).forEach((function(n){hn[e]||(hn[e]={}),hn[e][n]=t[e][n]}))})),e.hooks){var n=e.hooks();Object.keys(n).forEach((function(e){st[e]||(st[e]=[]),st[e].push(n[e])}))}e.provides&&e.provides(lt)})),gt.noAuto,gt.config;var mn=gt.library,gn=gt.dom,vn=gt.parse,yn=(gt.findIconDefinition,gt.toHtml,gt.icon);gt.layer,gt.text,gt.counter},7814:(e,t,n)=>{"use strict";n.d(t,{G:()=>y});var r=n(9382),i=n(5697),o=n.n(i),a=n(7294);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var p=["style"],m=!1;try{m=!0}catch(e){}function g(e){return e&&"object"===u(e)&&e.prefix&&e.iconName&&e.icon?e:r.Qc.icon?r.Qc.icon(e):null===e?null:e&&"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}var y=a.forwardRef((function(e,t){var n=e.icon,i=e.mask,o=e.symbol,a=e.className,s=e.title,u=e.titleId,h=e.maskId,f=g(n),p=v("classes",[].concat(d(function(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,d=e.spinReverse,h=e.pulse,f=e.fixedWidth,p=e.inverse,m=e.border,g=e.listItem,v=e.flip,y=e.size,b=e.rotation,x=e.pull,w=(c(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":f,"fa-inverse":p,"fa-border":m,"fa-li":g,"fa-flip":!0===v,"fa-flip-horizontal":"horizontal"===v||"both"===v,"fa-flip-vertical":"vertical"===v||"both"===v},"fa-".concat(y),null!=y),c(t,"fa-rotate-".concat(b),null!=b&&0!==b),c(t,"fa-pull-".concat(x),null!=x),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map((function(e){return w[e]?e:null})).filter((function(e){return e}))}(e)),d(a.split(" ")))),x=v("transform","string"==typeof e.transform?r.Qc.transform(e.transform):e.transform),w=v("mask",g(i)),_=(0,r.qv)(f,l(l(l(l({},p),x),w),{},{symbol:o,title:s,titleId:u,maskId:h}));if(!_)return function(){var e;!m&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var S=_.abstract,E={ref:t};return Object.keys(e).forEach((function(t){y.defaultProps.hasOwnProperty(t)||(E[t]=e[t])})),b(S[0],E)}));y.displayName="FontAwesomeIcon",y.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},y.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var b=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var i=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),i=f(t.slice(0,r)),o=t.slice(r+1).trim();return i.startsWith("webkit")?e[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[i]=o,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[f(t)]=r}return e}),{attrs:{}}),a=r.style,s=void 0===a?{}:a,u=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(r,p);return o.attrs.style=l(l({},o.attrs.style),s),t.apply(void 0,[n.tag,l(l({},o.attrs),u)].concat(d(i)))}.bind(null,a.createElement)},1314:(e,t,n)=>{"use strict";n.d(t,{He:()=>l,Ld:()=>w,eC:()=>d,f3:()=>s,iG:()=>c,rS:()=>f,sb:()=>g,ys:()=>a});var r=n(4813),i=n(7294);const o=Symbol.for("Animated:node"),a=e=>e&&e[o],s=(e,t)=>(0,r.dE)(e,o,t),l=e=>e&&e[o]&&e[o].getPayload();class u{constructor(){this.payload=void 0,s(this,this)}getPayload(){return this.payload||[]}}class c extends u{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,r.is.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new c(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return r.is.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,r.is.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class d extends c{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=(0,r.mD)({output:[e,e]})}static create(e){return new d(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(r.is.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=(0,r.mD)({output:[this.getValue(),e]})),this._value=0,super.reset()}}const h={dependencies:null};class f extends u{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return(0,r.rU)(this.source,((n,i)=>{var a;(a=n)&&a[o]===a?t[i]=n.getValue(e):(0,r.j$)(n)?t[i]=(0,r.je)(n):e||(t[i]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&(0,r.S6)(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return(0,r.rU)(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){h.dependencies&&(0,r.j$)(e)&&h.dependencies.add(e);const t=l(e);t&&(0,r.S6)(t,(e=>this.add(e)))}}class p extends f{constructor(e){super(e)}static create(e){return new p(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(m)),!0)}}function m(e){return((0,r.Df)(e)?d:c).create(e)}function g(e){const t=a(e);return t?t.constructor:r.is.arr(e)?p:(0,r.Df)(e)?d:c}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}const y=(e,t)=>{const n=!r.is.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,i.forwardRef)(((o,a)=>{const s=(0,i.useRef)(null),l=n&&(0,i.useCallback)((e=>{s.current=function(e,t){return e&&(r.is.fun(e)?e(t):e.current=t),t}(a,e)}),[a]),[u,c]=function(e,t){const n=new Set;return h.dependencies=n,e.style&&(e=v({},e,{style:t.createAnimatedStyle(e.style)})),e=new f(e),h.dependencies=null,[e,n]}(o,t),d=(0,r.NW)(),p=()=>{const e=s.current;n&&!e||!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&d()},m=new b(p,c),g=(0,i.useRef)();(0,r.LI)((()=>(g.current=m,(0,r.S6)(c,(e=>(0,r.UI)(e,m))),()=>{g.current&&((0,r.S6)(g.current.deps,(e=>(0,r.iL)(e,g.current))),r.Wn.cancel(g.current.update))}))),(0,i.useEffect)(p,[]),(0,r.tf)((()=>()=>{const e=g.current;(0,r.S6)(e.deps,(t=>(0,r.iL)(t,e)))}));const y=t.getComponentProps(u.getValue());return i.createElement(e,v({},y,{ref:l}))}))};class b{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&r.Wn.write(this.update)}}const x=Symbol.for("AnimatedComponent"),w=(e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new f(e)),getComponentProps:i=(e=>e)}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:i},a=e=>{const t=_(e)||"Anonymous";return(e=r.is.str(e)?a[e]||(a[e]=y(e,o)):e[x]||(e[x]=y(e,o))).displayName=`Animated(${t})`,e};return(0,r.rU)(e,((t,n)=>{r.is.arr(e)&&(n=_(t)),a[n]=a(t)})),{animated:a}},_=e=>r.is.str(e)?e:e&&r.is.str(e.displayName)?e.displayName:r.is.fun(e)&&e.name||null},4928:(e,t,n)=>{"use strict";n.d(t,{Globals:()=>r.OH,config:()=>w,useSpring:()=>ve,useTrail:()=>ye,useTransition:()=>xe});var r=n(4813),i=n(7294),o=n(1314);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,...t){return r.is.fun(e)?e(...t):e}const l=(e,t)=>!0===e||!!(t&&e&&(r.is.fun(e)?e(t):(0,r.qo)(e).includes(t))),u=(e,t)=>r.is.obj(e)?t&&e[t]:e,c=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,d=e=>e,h=(e,t=d)=>{let n=f;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const i={};for(const o of n){const n=t(e[o],o);r.is.und(n)||(i[o]=n)}return i},f=["config","onProps","onStart","onChange","onPause","onResume","onRest"],p={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function m(e){const t=function(e){const t={};let n=0;if((0,r.rU)(e,((e,r)=>{p[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return(0,r.rU)(e,((e,r)=>r in t||(n[r]=e))),n}return a({},e)}function g(e){return e=(0,r.je)(e),r.is.arr(e)?e.map(g):(0,r.Df)(e)?r.OH.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function v(e){for(const t in e)return!0;return!1}function y(e){return r.is.fun(e)||r.is.arr(e)&&r.is.obj(e[0])}function b(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}function x(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}const w={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},_=a({},w.default,{mass:1,damping:1,easing:r.Z5.linear,clamp:!1});class S{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,_)}}function E(e,t){if(r.is.und(t.decay)){const n=!r.is.und(t.tension)||!r.is.und(t.friction);!n&&r.is.und(t.frequency)&&r.is.und(t.damping)&&r.is.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const C=[];class k{constructor(){this.changed=!1,this.values=C,this.toValues=null,this.fromValues=C,this.to=void 0,this.from=void 0,this.config=new S,this.immediate=!1}}function M(e,{key:t,props:n,defaultProps:i,state:o,actions:u}){return new Promise(((c,d)=>{var h;let f,p,m=l(null!=(h=n.cancel)?h:null==i?void 0:i.cancel,t);if(m)y();else{r.is.und(n.pause)||(o.paused=l(n.pause,t));let e=null==i?void 0:i.pause;!0!==e&&(e=o.paused||l(e,t)),f=s(n.delay||0,t),e?(o.resumeQueue.add(v),u.pause()):(u.resume(),v())}function g(){o.resumeQueue.add(v),o.timeouts.delete(p),p.cancel(),f=p.time-r.Wn.now()}function v(){f>0&&!r.OH.skipAnimation?(o.delayed=!0,p=r.Wn.setTimeout(y,f),o.pauseQueue.add(g),o.timeouts.add(p)):y()}function y(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(g),o.timeouts.delete(p),e<=(o.cancelId||0)&&(m=!0);try{u.start(a({},n,{callId:e,cancel:m}),c)}catch(e){d(e)}}}))}const T=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?P(e.get()):t.every((e=>e.noop))?D(e.get()):A(e.get(),t.every((e=>e.finished))),D=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),A=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),P=e=>({value:e,cancelled:!0,finished:!1});function O(e,t,n,i){const{callId:o,parentId:s,onRest:l}=t,{asyncTo:u,promise:c}=n;return s||e!==u||t.reset?n.promise=(async()=>{n.asyncId=o,n.asyncTo=e;const d=h(t,((e,t)=>"onRest"===t?void 0:e));let f,p;const m=new Promise(((e,t)=>(f=e,p=t))),g=e=>{const t=o<=(n.cancelId||0)&&P(i)||o!==n.asyncId&&A(i,!1);if(t)throw e.result=t,p(e),e},v=(e,t)=>{const s=new F,l=new L;return(async()=>{if(r.OH.skipAnimation)throw R(n),l.result=A(i,!1),p(l),l;g(s);const u=r.is.obj(e)?a({},e):a({},t,{to:e});u.parentId=o,(0,r.rU)(d,((e,t)=>{r.is.und(u[t])&&(u[t]=e)}));const c=await i.start(u);return g(s),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),c})()};let y;if(r.OH.skipAnimation)return R(n),A(i,!1);try{let t;t=r.is.arr(e)?(async e=>{for(const t of e)await v(t)})(e):Promise.resolve(e(v,i.stop.bind(i))),await Promise.all([t.then(f),m]),y=A(i.get(),!0,!1)}catch(e){if(e instanceof F)y=e.result;else{if(!(e instanceof L))throw e;y=e.result}}finally{o==n.asyncId&&(n.asyncId=s,n.asyncTo=s?u:void 0,n.promise=s?c:void 0)}return r.is.fun(l)&&r.Wn.batchedUpdates((()=>{l(y,i,i.item)})),y})():c}function R(e,t){(0,r.yl)(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class F extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class L extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const I=e=>e instanceof j;let N=1;class j extends r.B0{constructor(...e){super(...e),this.id=N++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=(0,o.ys)(this);return e&&e.getValue()}to(...e){return r.OH.to(this,e)}interpolate(...e){return(0,r.LW)(),r.OH.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){(0,r.k0)(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||r.fT.sort(this),(0,r.k0)(this,{type:"priority",parent:this,priority:e})}}const $=Symbol.for("SpringPhase"),z=e=>(1&e[$])>0,B=e=>(2&e[$])>0,U=e=>(4&e[$])>0,H=(e,t)=>t?e[$]|=3:e[$]&=-3,V=(e,t)=>t?e[$]|=4:e[$]&=-5;class W extends j{constructor(e,t){if(super(),this.key=void 0,this.animation=new k,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!r.is.und(e)||!r.is.und(t)){const n=r.is.obj(e)?a({},e):a({},t,{from:e});r.is.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(B(this)||this._state.asyncTo)||U(this)}get goal(){return(0,r.je)(this.animation.to)}get velocity(){const e=(0,o.ys)(this);return e instanceof o.iG?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return z(this)}get isAnimating(){return B(this)}get isPaused(){return U(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const i=this.animation;let{config:a,toValues:s}=i;const l=(0,o.He)(i.to);!l&&(0,r.j$)(i.to)&&(s=(0,r.qo)((0,r.je)(i.to))),i.values.forEach(((u,c)=>{if(u.done)return;const d=u.constructor==o.eC?1:l?l[c].lastPosition:s[c];let h=i.immediate,f=d;if(!h){if(f=u.lastPosition,a.tension<=0)return void(u.done=!0);let t=u.elapsedTime+=e;const n=i.fromValues[c],o=null!=u.v0?u.v0:u.v0=r.is.arr(a.velocity)?a.velocity[c]:a.velocity;let s;const l=a.precision||(n==d?.005:Math.min(1,.001*Math.abs(d-n)));if(r.is.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);f=n+o/(1-e)*(1-r),h=Math.abs(u.lastPosition-f)<=l,s=o*r}else{s=null==u.lastVelocity?o:u.lastVelocity;const t=a.restVelocity||l/10,i=a.clamp?0:a.bounce,c=!r.is.und(i),p=n==d?u.v0>0:n<d;let m,g=!1;const v=1,y=Math.ceil(e/v);for(let e=0;e<y&&(m=Math.abs(s)>t,m||(h=Math.abs(d-f)<=l,!h));++e)c&&(g=f==d||f>d==p,g&&(s=-s*i,f=d)),s+=(1e-6*-a.tension*(f-d)+.001*-a.friction*s)/a.mass*v,f+=s*v}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,u.durationProgress>0&&(u.elapsedTime=a.duration*u.durationProgress,t=u.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,u.durationProgress=r),f=n+a.easing(r)*(d-n),s=(f-u.lastPosition)/e,h=1==r}u.lastVelocity=s,Number.isNaN(f)&&(console.warn("Got NaN while animating:",this),h=!0)}l&&!l[c].done&&(h=!1),h?u.done=!0:t=!1,u.setValue(f,a.round)&&(n=!0)}));const u=(0,o.ys)(this),c=u.getValue();if(t){const e=(0,r.je)(i.to);c===e&&!n||a.decay?n&&a.decay&&this._onChange(c):(u.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(c)}set(e){return r.Wn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(B(this)){const{to:e,config:t}=this.animation;r.Wn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return r.is.und(e)?(n=this.queue||[],this.queue=[]):n=[r.is.obj(e)?e:a({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>T(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),R(this._state,e&&this._lastCallId),r.Wn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:i}=e;n=r.is.obj(n)?n[t]:n,(null==n||y(n))&&(n=void 0),i=r.is.obj(i)?i[t]:i,null==i&&(i=void 0);const a={to:n,from:i};return z(this)||(e.reverse&&([n,i]=[i,n]),i=(0,r.je)(i),r.is.und(i)?(0,o.ys)(this)||this._set(n):this._set(i)),a}_update(e,t){let n=a({},e);const{key:i,defaultProps:o}=this;n.default&&Object.assign(o,h(n,((e,t)=>/^on/.test(t)?u(e,i):e))),K(this,n,"onProps"),J(this,"onProps",n,this);const s=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const l=this._state;return M(++this._lastCallId,{key:i,props:n,defaultProps:o,state:l,actions:{pause:()=>{U(this)||(V(this,!0),(0,r.bl)(l.pauseQueue),J(this,"onPause",A(this,G(this,this.animation.to)),this))},resume:()=>{U(this)&&(V(this,!1),B(this)&&this._resume(),(0,r.bl)(l.resumeQueue),J(this,"onResume",A(this,G(this,this.animation.to)),this))},start:this._merge.bind(this,s)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=q(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(P(this));const i=!r.is.und(e.to),u=!r.is.und(e.from);if(i||u){if(!(t.callId>this._lastToId))return n(P(this));this._lastToId=t.callId}const{key:c,defaultProps:d,animation:h}=this,{to:f,from:p}=h;let{to:m=f,from:v=p}=e;!u||i||t.default&&!r.is.und(m)||(m=v),t.reverse&&([m,v]=[v,m]);const b=!(0,r.Xy)(v,p);b&&(h.from=v),v=(0,r.je)(v);const x=!(0,r.Xy)(m,f);x&&this._focus(m);const w=y(t.to),{config:S}=h,{decay:C,velocity:k}=S;(i||u)&&(S.velocity=0),t.config&&!w&&function(e,t,n){n&&(E(n=a({},n),t),t=a({},n,t)),E(e,t),Object.assign(e,t);for(const t in _)null==e[t]&&(e[t]=_[t]);let{mass:i,frequency:o,damping:s}=e;r.is.und(o)||(o<.01&&(o=.01),s<0&&(s=0),e.tension=Math.pow(2*Math.PI/o,2)*i,e.friction=4*Math.PI*s*i/o)}(S,s(t.config,c),t.config!==d.config?s(d.config,c):void 0);let M=(0,o.ys)(this);if(!M||r.is.und(m))return n(A(this,!0));const T=r.is.und(t.reset)?u&&!t.default:!r.is.und(v)&&l(t.reset,c),R=T?v:this.get(),F=g(m),L=r.is.num(F)||r.is.arr(F)||(0,r.Df)(F),I=!w&&(!L||l(d.immediate||t.immediate,c));if(x){const e=(0,o.sb)(m);if(e!==M.constructor){if(!I)throw Error(`Cannot animate between ${M.constructor.name} and ${e.name}, as the "to" prop suggests`);M=this._set(F)}}const N=M.constructor;let j=(0,r.j$)(m),$=!1;if(!j){const e=T||!z(this)&&b;(x||e)&&($=(0,r.Xy)(g(R),F),j=!$),((0,r.Xy)(h.immediate,I)||I)&&(0,r.Xy)(S.decay,C)&&(0,r.Xy)(S.velocity,k)||(j=!0)}if($&&B(this)&&(h.changed&&!T?j=!0:j||this._stop(f)),!w&&((j||(0,r.j$)(f))&&(h.values=M.getPayload(),h.toValues=(0,r.j$)(m)?null:N==o.eC?[1]:(0,r.qo)(F)),h.immediate!=I&&(h.immediate=I,I||T||this._set(f)),j)){const{onRest:e}=h;(0,r.S6)(Q,(e=>K(this,t,e)));const i=A(this,G(this,f));(0,r.bl)(this._pendingCalls,i),this._pendingCalls.add(n),h.changed&&r.Wn.batchedUpdates((()=>{h.changed=!T,null==e||e(i,this),T?s(d.onRest,i):null==h.onStart||h.onStart(i,this)}))}T&&this._set(R),w?n(O(t.to,t,this._state,this)):j?this._start():B(this)&&!x?this._pendingCalls.add(n):n(D(R))}_focus(e){const t=this.animation;e!==t.to&&((0,r.Ll)(this)&&this._detach(),t.to=e,(0,r.Ll)(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;(0,r.j$)(t)&&((0,r.UI)(t,this),I(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;(0,r.j$)(e)&&(0,r.iL)(e,this)}_set(e,t=!0){const n=(0,r.je)(e);if(!r.is.und(n)){const e=(0,o.ys)(this);if(!e||!(0,r.Xy)(n,e.getValue())){const i=(0,o.sb)(n);e&&e.constructor==i?e.setValue(n):(0,o.f3)(this,i.create(n)),e&&r.Wn.batchedUpdates((()=>{this._onChange(n,t)}))}}return(0,o.ys)(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,J(this,"onStart",A(this,G(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),s(this.animation.onChange,e,this)),s(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;(0,o.ys)(this).reset((0,r.je)(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),B(this)||(H(this,!0),U(this)||this._resume())}_resume(){r.OH.skipAnimation?this.finish():r.fT.start(this)}_stop(e,t){if(B(this)){H(this,!1);const n=this.animation;(0,r.S6)(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),(0,r.k0)(this,{type:"idle",parent:this});const i=t?P(this.get()):A(this.get(),G(this,null!=e?e:n.to));(0,r.bl)(this._pendingCalls,i),n.changed&&(n.changed=!1,J(this,"onRest",i,this))}}}function G(e,t){const n=g(t),i=g(e.get());return(0,r.Xy)(i,n)}function q(e,t=e.loop,n=e.to){let r=s(t);if(r){const i=!0!==r&&m(r),o=(i||e).reverse,s=!i||i.reset;return Y(a({},e,{loop:t,default:!1,pause:void 0,to:!o||y(n)?n:void 0,from:s?e.from:void 0,reset:s},i))}}function Y(e){const{to:t,from:n}=e=m(e),i=new Set;return r.is.obj(t)&&X(t,i),r.is.obj(n)&&X(n,i),e.keys=i.size?Array.from(i):null,e}function Z(e){const t=Y(e);return r.is.und(t.default)&&(t.default=h(t)),t}function X(e,t){(0,r.rU)(e,((e,n)=>null!=e&&t.add(n)))}const Q=["onStart","onRest","onChange","onPause","onResume"];function K(e,t,n){e.animation[n]=t[n]!==c(t,n)?u(t[n],e.key):void 0}function J(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const ee=["onStart","onChange","onRest"];let te=1;class ne{constructor(e,t){this.id=te++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(a({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];r.is.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Y(e)),this}start(e){let{queue:t}=this;return e?t=(0,r.qo)(e).map(Y):this.queue=[],this._flush?this._flush(this,t):(ue(this,t),re(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;(0,r.S6)((0,r.qo)(t),(t=>n[t].stop(!!e)))}else R(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(r.is.und(e))this.start({pause:!0});else{const t=this.springs;(0,r.S6)((0,r.qo)(e),(e=>t[e].pause()))}return this}resume(e){if(r.is.und(e))this.start({pause:!1});else{const t=this.springs;(0,r.S6)((0,r.qo)(e),(e=>t[e].resume()))}return this}each(e){(0,r.rU)(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,i=this._active.size>0,o=this._changed.size>0;(i&&!this._started||o&&!this._started)&&(this._started=!0,(0,r.yl)(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!i&&this._started,s=o||a&&n.size?this.get():null;o&&t.size&&(0,r.yl)(t,(([e,t])=>{t.value=s,e(t,this,this._item)})),a&&(this._started=!1,(0,r.yl)(n,(([e,t])=>{t.value=s,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}r.Wn.onFrame(this._onFrame)}}function re(e,t){return Promise.all(t.map((t=>ie(e,t)))).then((t=>T(e,t)))}async function ie(e,t,n){const{keys:i,to:o,from:a,loop:s,onRest:l,onResolve:u}=t,d=r.is.obj(t.default)&&t.default;s&&(t.loop=!1),!1===o&&(t.to=null),!1===a&&(t.from=null);const h=r.is.arr(o)||r.is.fun(o)?o:void 0;h?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):(0,r.S6)(ee,(n=>{const i=t[n];if(r.is.fun(i)){const r=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=r.get(i);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):r.set(i,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[n]=t[n])}}));const f=e._state;t.pause===!f.paused?(f.paused=t.pause,(0,r.bl)(t.pause?f.pauseQueue:f.resumeQueue)):f.paused&&(t.pause=!0);const p=(i||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),m=!0===t.cancel||!0===c(t,"cancel");(h||m&&f.asyncId)&&p.push(M(++e._lastAsyncId,{props:t,state:f,actions:{pause:r.ZT,resume:r.ZT,start(t,n){m?(R(f,e._lastAsyncId),n(P(e))):(t.onRest=l,n(O(h,t,f,e)))}}})),f.paused&&await new Promise((e=>{f.resumeQueue.add(e)}));const g=T(e,await Promise.all(p));if(s&&g.finished&&(!n||!g.noop)){const n=q(t,s,o);if(n)return ue(e,[n]),ie(e,n,!0)}return u&&r.Wn.batchedUpdates((()=>u(g,e,e.item))),g}function oe(e,t){const n=a({},e.springs);return t&&(0,r.S6)((0,r.qo)(t),(e=>{r.is.und(e.keys)&&(e=Y(e)),r.is.obj(e.to)||(e=a({},e,{to:void 0})),le(n,e,(e=>se(e)))})),ae(e,n),n}function ae(e,t){(0,r.rU)(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,(0,r.UI)(t,e))}))}function se(e,t){const n=new W;return n.key=e,t&&(0,r.UI)(n,t),n}function le(e,t,n){t.keys&&(0,r.S6)(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ue(e,t){(0,r.S6)(t,(t=>{le(e.springs,t,(t=>se(t,e)))}))}const ce=["children"],de=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,ce);const o=(0,i.useContext)(he),a=n.pause||!!o.pause,s=n.immediate||!!o.immediate;n=(0,r.Pr)((()=>({pause:a,immediate:s})),[a,s]);const{Provider:l}=he;return i.createElement(l,{value:n},t)},he=(fe=de,pe={},Object.assign(fe,i.createContext(pe)),fe.Provider._context=fe,fe.Consumer._context=fe,fe);var fe,pe;de.Provider=he.Provider,de.Consumer=he.Consumer;const me=()=>{const e=[],t=function(t){(0,r.ZR)();const i=[];return(0,r.S6)(e,((e,o)=>{if(r.is.und(t))i.push(e.start());else{const r=n(t,e,o);r&&i.push(e.start(r))}})),i};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return(0,r.S6)(e,(e=>e.pause(...arguments))),this},t.resume=function(){return(0,r.S6)(e,(e=>e.resume(...arguments))),this},t.set=function(t){(0,r.S6)(e,(e=>e.set(t)))},t.start=function(t){const n=[];return(0,r.S6)(e,((e,i)=>{if(r.is.und(t))n.push(e.start());else{const r=this._getProps(t,e,i);r&&n.push(e.start(r))}})),n},t.stop=function(){return(0,r.S6)(e,(e=>e.stop(...arguments))),this},t.update=function(t){return(0,r.S6)(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return r.is.fun(e)?e(n,t):e};return t._getProps=n,t};function ge(e,t,n){const o=r.is.fun(t)&&t;o&&!n&&(n=[]);const s=(0,i.useMemo)((()=>o||3==arguments.length?me():void 0),[]),l=(0,i.useRef)(0),u=(0,r.NW)(),c=(0,i.useMemo)((()=>({ctrls:[],queue:[],flush(e,t){const n=oe(e,t);return l.current>0&&!c.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?re(e,t):new Promise((r=>{ae(e,n),c.queue.push((()=>{r(re(e,t))})),u()}))}})),[]),d=(0,i.useRef)([...c.ctrls]),h=[],f=(0,r.zH)(e)||0;function p(e,n){for(let r=e;r<n;r++){const e=d.current[r]||(d.current[r]=new ne(null,c.flush)),n=o?o(r,e):t[r];n&&(h[r]=Z(n))}}(0,i.useMemo)((()=>{(0,r.S6)(d.current.slice(e,f),(e=>{b(e,s),e.stop(!0)})),d.current.length=e,p(f,e)}),[e]),(0,i.useMemo)((()=>{p(0,Math.min(f,e))}),n);const m=d.current.map(((e,t)=>oe(e,h[t]))),g=(0,i.useContext)(de),y=(0,r.zH)(g),w=g!==y&&v(g);(0,r.LI)((()=>{l.current++,c.ctrls=d.current;const{queue:e}=c;e.length&&(c.queue=[],(0,r.S6)(e,(e=>e()))),(0,r.S6)(d.current,((e,t)=>{null==s||s.add(e),w&&e.start({default:g});const n=h[t];n&&(x(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),(0,r.tf)((()=>()=>{(0,r.S6)(c.ctrls,(e=>e.stop(!0)))}));const _=m.map((e=>a({},e)));return s?[_,s]:_}function ve(e,t){const n=r.is.fun(e),[[i],o]=ge(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[i,o]:i}function ye(e,t,n){const i=r.is.fun(t)&&t;i&&!n&&(n=[]);let o,a=!0;const s=ge(e,((e,n)=>{const r=i?i(e,n):t;return o=r.ref,a=a&&r.reverse,r}),n||[{}]);if((0,r.LI)((()=>{(0,r.S6)(s[1].current,((e,t)=>{const n=s[1].current[t+(a?1:-1)];x(e,o),e.ref?n&&e.update({to:n.springs}):n?e.start({to:n.springs}):e.start()}))}),n),i||3==arguments.length){var l;const e=null!=(l=o)?l:s[1];return e._getProps=(t,n,i)=>{const o=r.is.fun(t)?t(i,n):t;if(o){const t=e.current[i+(o.reverse?1:-1)];return t&&(o.to=t.springs),o}},s}return s[0]}let be;function xe(e,t,n){const o=r.is.fun(t)&&t,{reset:l,sort:u,trail:c=0,expires:d=!0,exitBeforeEnter:f=!1,onDestroyed:p,ref:g,config:y}=o?o():t,w=(0,i.useMemo)((()=>o||3==arguments.length?me():void 0),[]),_=(0,r.qo)(e),S=[],E=(0,i.useRef)(null),C=l?null:E.current;(0,r.LI)((()=>{E.current=S})),(0,r.tf)((()=>((0,r.S6)(S,(e=>{null==w||w.add(e.ctrl),e.ctrl.ref=w})),()=>{(0,r.S6)(E.current,(e=>{e.expired&&clearTimeout(e.expirationId),b(e.ctrl,w),e.ctrl.stop(!0)}))})));const k=function(e,{key:t,keys:n=t},i){if(null===n){const t=new Set;return e.map((e=>{const n=i&&i.find((n=>n.item===e&&n.phase!==be.LEAVE&&!t.has(n)));return n?(t.add(n),n.key):we++}))}return r.is.und(n)?e:r.is.fun(n)?e.map(n):(0,r.qo)(n)}(_,o?o():t,C),M=l&&E.current||[];(0,r.LI)((()=>(0,r.S6)(M,(({ctrl:e,item:t,key:n})=>{b(e,w),s(p,t,n)}))));const T=[];if(C&&(0,r.S6)(C,((e,t)=>{e.expired?(clearTimeout(e.expirationId),M.push(e)):~(t=T[t]=k.indexOf(e.key))&&(S[t]=e)})),(0,r.S6)(_,((e,t)=>{S[t]||(S[t]={key:k[t],item:e,phase:be.MOUNT,ctrl:new ne},S[t].ctrl.item=e)})),T.length){let e=-1;const{leave:n}=o?o():t;(0,r.S6)(T,((t,r)=>{const i=C[r];~t?(e=S.indexOf(i),S[e]=a({},i,{item:_[t]})):n&&S.splice(++e,0,i)}))}r.is.fun(u)&&S.sort(((e,t)=>u(e.item,t.item)));let D=-c;const A=(0,r.NW)(),P=h(t),O=new Map,R=(0,i.useRef)(new Map),F=(0,i.useRef)(!1);(0,r.S6)(S,((e,n)=>{const i=e.key,l=e.phase,u=o?o():t;let h,p,v=s(u.delay||0,i);if(l==be.MOUNT)h=u.enter,p=be.ENTER;else{const e=k.indexOf(i)<0;if(l!=be.LEAVE)if(e)h=u.leave,p=be.LEAVE;else{if(!(h=u.update))return;p=be.UPDATE}else{if(e)return;h=u.enter,p=be.ENTER}}if(h=s(h,e.item,n),h=r.is.obj(h)?m(h):{to:h},!h.config){const t=y||P.config;h.config=s(t,e.item,n,p)}D+=c;const b=a({},P,{delay:v+D,ref:g,immediate:u.immediate,reset:!1},h);if(p==be.ENTER&&r.is.und(b.from)){const i=o?o():t,a=r.is.und(i.initial)||C?i.from:i.initial;b.from=s(a,e.item,n)}const{onResolve:x}=b;b.onResolve=e=>{s(x,e);const t=E.current,n=t.find((e=>e.key===i));if(n&&(!e.cancelled||n.phase==be.UPDATE)&&n.ctrl.idle){const e=t.every((e=>e.ctrl.idle));if(n.phase==be.LEAVE){const t=s(d,n.item);if(!1!==t){const r=!0===t?0:t;if(n.expired=!0,!e&&r>0)return void(r<=2147483647&&(n.expirationId=setTimeout(A,r)))}}e&&t.some((e=>e.expired))&&(R.current.delete(n),f&&(F.current=!0),A())}};const w=oe(e.ctrl,b);p===be.LEAVE&&f?R.current.set(e,{phase:p,springs:w,payload:b}):O.set(e,{phase:p,springs:w,payload:b})}));const L=(0,i.useContext)(de),I=(0,r.zH)(L),N=L!==I&&v(L);(0,r.LI)((()=>{N&&(0,r.S6)(S,(e=>{e.ctrl.start({default:L})}))}),[L]),(0,r.S6)(O,((e,t)=>{if(R.current.size){const e=S.findIndex((e=>e.key===t.key));S.splice(e,1)}})),(0,r.LI)((()=>{(0,r.S6)(R.current.size?R.current:O,(({phase:e,payload:t},n)=>{const{ctrl:r}=n;n.phase=e,null==w||w.add(r),N&&e==be.ENTER&&r.start({default:L}),t&&(x(r,t.ref),!r.ref&&!w||F.current?(r.start(t),F.current&&(F.current=!1)):r.update(t))}))}),l?void 0:n);const j=e=>i.createElement(i.Fragment,null,S.map(((t,n)=>{const{springs:o}=O.get(t)||t.ctrl,s=e(a({},o),t.item,t,n);return s&&s.type?i.createElement(s.type,a({},s.props,{key:r.is.str(t.key)||r.is.num(t.key)?t.key:t.ctrl.id,ref:s.ref})):s})));return w?[j,w]:j}!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(be||(be={}));let we=1;class _e extends j{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=(0,r.mD)(...t);const n=this._get(),i=(0,o.sb)(n);(0,o.f3)(this,i.create(n))}advance(e){const t=this._get(),n=this.get();(0,r.Xy)(t,n)||((0,o.ys)(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ee(this._active)&&Ce(this)}_get(){const e=r.is.arr(this.source)?this.source.map(r.je):(0,r.qo)((0,r.je)(this.source));return this.calc(...e)}_start(){this.idle&&!Ee(this._active)&&(this.idle=!1,(0,r.S6)((0,o.He)(this),(e=>{e.done=!1})),r.OH.skipAnimation?(r.Wn.batchedUpdates((()=>this.advance())),Ce(this)):r.fT.start(this))}_attach(){let e=1;(0,r.S6)((0,r.qo)(this.source),(t=>{(0,r.j$)(t)&&(0,r.UI)(t,this),I(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){(0,r.S6)((0,r.qo)(this.source),(e=>{(0,r.j$)(e)&&(0,r.iL)(e,this)})),this._active.clear(),Ce(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=(0,r.qo)(this.source).reduce(((e,t)=>Math.max(e,(I(t)?t.priority:0)+1)),0))}}function Se(e){return!1!==e.idle}function Ee(e){return!e.size||Array.from(e).every(Se)}function Ce(e){e.idle||(e.idle=!0,(0,r.S6)((0,o.He)(e),(e=>{e.done=!0})),(0,r.k0)(e,{type:"idle",parent:e}))}r.OH.assign({createStringInterpolator:r.qS,to:(e,t)=>new _e(e,t)}),r.fT.advance},4813:(e,t,n)=>{"use strict";n.d(t,{B0:()=>Me,OH:()=>N,UI:()=>De,k0:()=>ke,O9:()=>q,mD:()=>he,qS:()=>Be,dE:()=>S,ZR:()=>qe,LW:()=>We,S6:()=>k,rU:()=>M,Z5:()=>be,yl:()=>D,bl:()=>A,fT:()=>U,Ll:()=>Ce,je:()=>Ee,j$:()=>Se,is:()=>E,Df:()=>Ye,Xy:()=>C,ZT:()=>_,Wn:()=>i,iL:()=>Ae,qo:()=>T,NW:()=>Qe,LI:()=>Ze,Pr:()=>Ke,tf:()=>Je,zH:()=>tt});let r=b();const i=e=>m(e,r);let o=b();i.write=e=>m(e,o);let a=b();i.onStart=e=>m(e,a);let s=b();i.onFrame=e=>m(e,s);let l=b();i.onFinish=e=>m(e,l);let u=[];i.setTimeout=(e,t)=>{let n=i.now()+t,r=()=>{let e=u.findIndex((e=>e.cancel==r));~e&&u.splice(e,1),f-=~e?1:0},o={time:n,handler:e,cancel:r};return u.splice(c(n),0,o),f+=1,g(),o};let c=e=>~(~u.findIndex((t=>t.time>e))||~u.length);i.cancel=e=>{a.delete(e),s.delete(e),l.delete(e),r.delete(e),o.delete(e)},i.sync=e=>{p=!0,i.batchedUpdates(e),p=!1},i.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,i.onStart(n)}return r.handler=e,r.cancel=()=>{a.delete(n),t=null},r};let d="undefined"!=typeof window?window.requestAnimationFrame:()=>{};i.use=e=>d=e,i.now="undefined"!=typeof performance?()=>performance.now():Date.now,i.batchedUpdates=e=>e(),i.catch=console.error,i.frameLoop="always",i.advance=()=>{"demand"!==i.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):y()};let h=-1,f=0,p=!1;function m(e,t){p?(t.delete(e),e(0)):(t.add(e),g())}function g(){h<0&&(h=0,"demand"!==i.frameLoop&&d(v))}function v(){~h&&(d(v),i.batchedUpdates(y))}function y(){let e=h;h=i.now();let t=c(h);t&&(x(u.splice(0,t),(e=>e.handler())),f-=t),f?(a.flush(),r.flush(e?Math.min(64,h-e):16.667),s.flush(),o.flush(),l.flush()):h=-1}function b(){let e=new Set,t=e;return{add(n){f+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(f-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,f-=t.size,x(t,(t=>t(n)&&e.add(t))),f+=e.size,t=e)}}}function x(e,t){e.forEach((e=>{try{t(e)}catch(e){i.catch(e)}}))}var w=n(7294);function _(){}const S=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),E={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function C(e,t){if(E.arr(e)){if(!E.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const k=(e,t)=>e.forEach(t);function M(e,t,n){if(E.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const T=e=>E.und(e)?[]:E.arr(e)?e:[e];function D(e,t){if(e.size){const n=Array.from(e);e.clear(),k(n,t)}}const A=(e,...t)=>D(e,(e=>e(...t))),P=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let O,R,F=null,L=!1,I=_;var N=Object.freeze({__proto__:null,get createStringInterpolator(){return O},get to(){return R},get colors(){return F},get skipAnimation(){return L},get willAdvance(){return I},assign:e=>{e.to&&(R=e.to),e.now&&(i.now=e.now),void 0!==e.colors&&(F=e.colors),null!=e.skipAnimation&&(L=e.skipAnimation),e.createStringInterpolator&&(O=e.createStringInterpolator),e.requestAnimationFrame&&i.use(e.requestAnimationFrame),e.batchedUpdates&&(i.batchedUpdates=e.batchedUpdates),e.willAdvance&&(I=e.willAdvance),e.frameLoop&&(i.frameLoop=e.frameLoop)}});const j=new Set;let $=[],z=[],B=0;const U={get idle(){return!j.size&&!$.length},start(e){B>e.priority?(j.add(e),i.onStart(H)):(V(e),i(G))},advance:G,sort(e){if(B)i.onFrame((()=>U.sort(e)));else{const t=$.indexOf(e);~t&&($.splice(t,1),W(e))}},clear(){$=[],j.clear()}};function H(){j.forEach(V),j.clear(),i(G)}function V(e){$.includes(e)||W(e)}function W(e){$.splice(function(t,n){const r=t.findIndex((t=>t.priority>e.priority));return r<0?t.length:r}($),0,e)}function G(e){const t=z;for(let n=0;n<$.length;n++){const r=$[n];B=r.priority,r.idle||(I(r),r.advance(e),r.idle||t.push(r))}return B=0,z=$,z.length=0,$=t,$.length>0}const q={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Y="[-+]?\\d*\\.?\\d+",Z=Y+"%";function X(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Q=new RegExp("rgb"+X(Y,Y,Y)),K=new RegExp("rgba"+X(Y,Y,Y,Y)),J=new RegExp("hsl"+X(Y,Z,Z)),ee=new RegExp("hsla"+X(Y,Z,Z,Y)),te=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ne=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,re=/^#([0-9a-fA-F]{6})$/,ie=/^#([0-9a-fA-F]{8})$/;function oe(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ae(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=oe(i,r,e+1/3),a=oe(i,r,e),s=oe(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function se(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function le(e){return(parseFloat(e)%360+360)%360/360}function ue(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ce(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function de(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=re.exec(e))?parseInt(t[1]+"ff",16)>>>0:F&&void 0!==F[e]?F[e]:(t=Q.exec(e))?(se(t[1])<<24|se(t[2])<<16|se(t[3])<<8|255)>>>0:(t=K.exec(e))?(se(t[1])<<24|se(t[2])<<16|se(t[3])<<8|ue(t[4]))>>>0:(t=te.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ie.exec(e))?parseInt(t[1],16)>>>0:(t=ne.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=J.exec(e))?(255|ae(le(t[1]),ce(t[2]),ce(t[3])))>>>0:(t=ee.exec(e))?(ae(le(t[1]),ce(t[2]),ce(t[3]))|ue(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const he=(e,t,n)=>{if(E.fun(e))return e;if(E.arr(e))return he({range:e,output:t,extrapolate:n});if(E.str(e.output[0]))return O(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}return r===i?r:t===n?e<=t?r:i:(t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t),u=o(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r,u)}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}},fe=1.70158,pe=1.525*fe,me=fe+1,ge=2*Math.PI/3,ve=2*Math.PI/4.5,ye=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},be={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>me*e*e*e-fe*e*e,easeOutBack:e=>1+me*Math.pow(e-1,3)+fe*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-pe)/2:(Math.pow(2*e-2,2)*((pe+1)*(2*e-2)+pe)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ge),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ge)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ve)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ve)/2+1,easeInBounce:e=>1-ye(1-e),easeOutBounce:ye,easeInOutBounce:e=>e<.5?(1-ye(1-2*e))/2:(1+ye(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e;return 0,1,i=("end"===t?Math.floor(r):Math.ceil(r))/e,Math.min(Math.max(i,0),1);var i}};function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}const we=Symbol.for("FluidValue.get"),_e=Symbol.for("FluidValue.observers"),Se=e=>Boolean(e&&e[we]),Ee=e=>e&&e[we]?e[we]():e,Ce=e=>e[_e]||null;function ke(e,t){let n=e[_e];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Me{constructor(e){if(this[we]=void 0,this[_e]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Te(this,e)}}const Te=(e,t)=>Pe(e,we,t);function De(e,t){if(e[we]){let n=e[_e];n||Pe(e,_e,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ae(e,t){let n=e[_e];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[_e]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Pe=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Oe=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Re=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Fe=new RegExp(`(${Oe.source})(%|[a-z]+)`,"i"),Le=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ie=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ne=e=>{const[t,n]=je(e);if(!t||P())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){return window.getComputedStyle(document.documentElement).getPropertyValue(n)||e}return n&&Ie.test(n)?Ne(n):n||e},je=e=>{const t=Ie.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let $e;const ze=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Be=e=>{$e||($e=F?new RegExp(`(${Object.keys(F).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ee(e).replace(Ie,Ne).replace(Re,de).replace($e,de))),n=t.map((e=>e.match(Oe).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>he(xe({},e,{output:t}))));return e=>{var n;const i=!Fe.test(t[0])&&(null==(n=t.find((e=>Fe.test(e))))?void 0:n.replace(Oe,""));let o=0;return t[0].replace(Oe,(()=>`${r[o++](e)}${i||""}`)).replace(Le,ze)}},Ue="react-spring: ",He=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ue}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Ve=He(console.warn);function We(){Ve(`${Ue}The "interpolate" function is deprecated in v9 (use "to" instead)`)}const Ge=He(console.warn);function qe(){Ge(`${Ue}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Ye(e){return E.str(e)&&("#"==e[0]||/\d/.test(e)||!P()&&Ie.test(e)||e in(F||{}))}new WeakMap,new Set,new WeakMap,new WeakMap,new WeakMap;const Ze=P()?w.useEffect:w.useLayoutEffect,Xe=()=>{const e=(0,w.useRef)(!1);return Ze((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Qe(){const e=(0,w.useState)()[1],t=Xe();return()=>{t.current&&e(Math.random())}}function Ke(e,t){const[n]=(0,w.useState)((()=>({inputs:t,result:e()}))),r=(0,w.useRef)(),i=r.current;let o=i;return o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n,(0,w.useEffect)((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}const Je=e=>(0,w.useEffect)(e,et),et=[];function tt(e){const t=(0,w.useRef)();return(0,w.useEffect)((()=>{t.current=e})),t.current}},1472:(e,t,n)=>{"use strict";n.d(t,{animated:()=>S,config:()=>r.config,useSpring:()=>r.useSpring,useTrail:()=>r.useTrail,useTransition:()=>r.useTransition});var r=n(4928),i=n(3935),o=n(4813),a=n(1314);function s(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}const l=["style","children","scrollTop","scrollLeft","viewBox"],u=/^--/;function c(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||u.test(e)||h.hasOwnProperty(e)&&h[e]?(""+t).trim():t+"px"}const d={};let h={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const f=["Webkit","Ms","Moz","O"];h=Object.keys(h).reduce(((e,t)=>(f.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),h);const p=["x","y","z"],m=/^(matrix|translate|scale|rotate|skew)/,g=/^(translate)/,v=/^(rotate|skew)/,y=(e,t)=>o.is.num(e)&&0!==e?e+t:e,b=(e,t)=>o.is.arr(e)?e.every((e=>b(e,t))):o.is.num(e)?e===t:parseFloat(e)===t;class x extends a.rS{constructor(e){let{x:t,y:n,z:r}=e,i=s(e,p);const a=[],l=[];(t||n||r)&&(a.push([t||0,n||0,r||0]),l.push((e=>[`translate3d(${e.map((e=>y(e,"px"))).join(",")})`,b(e,0)]))),(0,o.rU)(i,((e,t)=>{if("transform"===t)a.push([e||""]),l.push((e=>[e,""===e]));else if(m.test(t)){if(delete i[t],o.is.und(e))return;const n=g.test(t)?"px":v.test(t)?"deg":"";a.push((0,o.qo)(e)),l.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${y(i,n)})`,b(i,0)]:e=>[`${t}(${e.map((e=>y(e,n))).join(",")})`,b(e,t.startsWith("scale")?1:0)])}})),a.length&&(i.transform=new w(a,l)),super(i)}}class w extends o.B0{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return(0,o.S6)(this.inputs,((n,r)=>{const i=(0,o.je)(n[0]),[a,s]=this.transforms[r](o.is.arr(i)?i:n.map(o.je));e+=" "+a,t=t&&s})),t?"none":e}observerAdded(e){1==e&&(0,o.S6)(this.inputs,(e=>(0,o.S6)(e,(e=>(0,o.j$)(e)&&(0,o.UI)(e,this)))))}observerRemoved(e){0==e&&(0,o.S6)(this.inputs,(e=>(0,o.S6)(e,(e=>(0,o.j$)(e)&&(0,o.iL)(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),(0,o.k0)(this,e)}}const _=["scrollTop","scrollLeft"];r.Globals.assign({batchedUpdates:i.unstable_batchedUpdates,createStringInterpolator:o.qS,colors:o.O9});const S=(0,a.Ld)(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:h,viewBox:f}=r,p=s(r,l),m=Object.values(p),g=Object.keys(p).map((t=>n||e.hasAttribute(t)?t:d[t]||(d[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=c(t,i[t]);u.test(t)?e.style.setProperty(t,n):e.style[t]=n}g.forEach(((t,n)=>{e.setAttribute(t,m[n])})),void 0!==a&&(e.scrollTop=a),void 0!==h&&(e.scrollLeft=h),void 0!==f&&e.setAttribute("viewBox",f)},createAnimatedStyle:e=>new x(e),getComponentProps:e=>s(e,_)}).animated},2599:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var i;n.d(t,{Ep:()=>c,RQ:()=>O,WK:()=>N,Zn:()=>M,Zq:()=>A,aU:()=>i,cP:()=>d,fp:()=>f,kG:()=>s,lX:()=>a,pC:()=>P}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(i||(i={}));const o="popstate";function a(e){return void 0===e&&(e={}),function(e,t,n,a){void 0===a&&(a={});let{window:d=document.defaultView,v5Compat:h=!1}=a,f=d.history,p=i.Pop,m=null,g=v();function v(){return(f.state||{idx:null}).idx}function y(){p=i.Pop;let e=v(),t=null==e?null:e-g;g=e,m&&m({action:p,location:x.location,delta:t})}function b(e){let t="null"!==d.location.origin?d.location.origin:d.location.href,n="string"==typeof e?e:c(e);return s(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,f.replaceState(r({},f.state,{idx:g}),""));let x={get action(){return p},get location(){return e(d,f)},listen(e){if(m)throw new Error("A history only accepts one active listener");return d.addEventListener(o,y),m=e,()=>{d.removeEventListener(o,y),m=null}},createHref:e=>t(d,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p=i.Push;let r=u(x.location,e,t);n&&n(r,e),g=v()+1;let o=l(r,g),a=x.createHref(r);try{f.pushState(o,"",a)}catch(e){d.location.assign(a)}h&&m&&m({action:p,location:x.location,delta:1})},replace:function(e,t){p=i.Replace;let r=u(x.location,e,t);n&&n(r,e),g=v();let o=l(r,g),a=x.createHref(r);f.replaceState(o,"",a),h&&m&&m({action:p,location:x.location,delta:0})},go:e=>f.go(e)};return x}((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return u("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:c(t)}),null,e)}function s(e,t){if(!1===e||null==e)throw new Error(t)}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n,i){return void 0===n&&(n=null),r({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?d(t):t,{state:n,key:t&&t.key||i||Math.random().toString(36).substr(2,8)})}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function d(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var h;function f(e,t,n){void 0===n&&(n="/");let r=M(("string"==typeof t?d(t):t).pathname||"/",n);if(null==r)return null;let i=p(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let e=0;null==o&&e<i.length;++e)o=E(i[e],k(r));return o}function p(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(s(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=O([r,a.relativePath]),u=n.concat(a);e.children&&e.children.length>0&&(s(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),p(e.children,t,u,l)),(null!=e.path||e.index)&&t.push({path:l,score:S(l,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of m(e.path))i(e,t,n);else i(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=m(r.join("/")),s=[];return s.push(...a.map((e=>""===e?o:[o,e].join("/")))),i&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));const g=/^:\w+$/,v=3,y=2,b=1,x=10,w=-2,_=e=>"*"===e;function S(e,t){let n=e.split("/"),r=n.length;return n.some(_)&&(r+=w),t&&(r+=y),n.filter((e=>!_(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?b:x)),r)}function E(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let e=0;e<n.length;++e){let a=n[e],s=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=C({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=a.route;o.push({params:r,pathname:O([i,u.pathname]),pathnameBase:R(O([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=O([i,u.pathnameBase]))}return o}function C(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),T("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));return e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return T(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s[n]||"",t),e}),{}),pathname:o,pathnameBase:a,pattern:e}}function k(e){try{return decodeURI(e)}catch(t){return T(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function M(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function T(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function D(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function A(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function P(e,t,n,i){let o;void 0===i&&(i=!1),"string"==typeof e?o=d(e):(o=r({},e),s(!o.pathname||!o.pathname.includes("?"),D("?","pathname","search",o)),s(!o.pathname||!o.pathname.includes("#"),D("#","pathname","hash",o)),s(!o.search||!o.search.includes("#"),D("#","search","hash",o)));let a,l=""===e||""===o.pathname,u=l?"/":o.pathname;if(i||null==u)a=n;else{let e=t.length-1;if(u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?d(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:F(r),hash:L(i)}}(o,a),h=u&&"/"!==u&&u.endsWith("/"),f=(l||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!h&&!f||(c.pathname+="/"),c}const O=e=>e.join("/").replace(/\/\/+/g,"/"),R=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",L=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class I extends Error{}function N(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const j=["post","put","patch","delete"],$=(new Set(j),["get",...j]);new Set($),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred")},6316:(e,t,n)=>{"use strict";n.d(t,{r:()=>a});var r,i=n(7294);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var a=function(e){return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 391.56 325.08"},e),r||(r=i.createElement("path",{fill:"currentColor",className:"logo_svg__logo--path",d:"M382.07 271.01c-34.09 34-57.94 12.34-61.93-30.32-5.8-45.85 3.14-87.11-46.55-85.16 0 0 42.76-15.86 39.37-76.99C308.6-.07 200.97.5 200.97.5c-58.38 0-112.88 37.6-89.43 102.74 8.47 23.53 38.63 44.68 61 57.72 73.77 43 42.11 126.73-41.7 141.11-107.6 7.54-145.61-92.28-87.35-156.17 18.73-20.54-5.08-13.52-23.62 10.5-45.63 59.11-8.44 162.62 88.37 167.97 100.92 5.58 163.6-103.24 87.55-161.82 38.13 1.51 69.49 5.21 76.06 58.59 12.31 100.07 69.68 107.68 102.9 73.17 12.58-13.07 25.48-41.4 7.33-23.31ZM191.6 147.93c-39.46 0-73.61-36.92-72.02-71.96 2.01-44.32 35.68-61.93 71.26-61.93 51.89 0 72.71 32.11 72.71 67.7s-23.51 66.19-71.96 66.19Z"})))}},4236:(e,t,n)=>{"use strict";n.d(t,{F:()=>o,a:()=>s});var r=n(5893),i=n(6914);function o(e){const{children:t,themeStyle:n,widthOverride:o,containerLayoutOverride:a,mode:s="live",ssr:l=!1}=e;return(0,r.jsx)(i.A,Object.assign({themeStyle:n,mode:s,containerLayoutOverride:a,widthOverride:o,ssr:l},{children:t}),void 0)}function a(e){const{lastError:t,resetError:n,themeStyle:a}=e;return(0,r.jsx)(o,Object.assign({themeStyle:a},{children:(0,r.jsx)(i.J,{type:"client",title:(0,i._)("Something went wrong","wp-eform"),description:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:(0,i._)("There was an error in the application. Reloading the page might fix it.","wp-eform")},void 0),t&&t.toString?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:(0,i._)("More information on the error can be found below.","wp-eform")},void 0),(0,r.jsx)("p",{children:t.toString()},void 0)]},void 0):null]},void 0),footer:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.K,Object.assign({onClick:()=>{window.location.reload()},style:"3d",size:i.l.SMALL},{children:(0,i._)("RELOAD PAGE","wp-eform")}),void 0),(0,r.jsx)(i.K,Object.assign({onClick:()=>{n()},style:"3d",size:i.l.SMALL,colorful:!1},{children:(0,i._)("RETRY WITHOUT RELOAD","wp-eform")}),void 0)]},void 0)},void 0)}),void 0)}function s(e){const{children:t,themeStyle:n}=e;return(0,r.jsx)(i.I,Object.assign({fallback:(e,t)=>(0,r.jsx)(a,{resetError:e,lastError:t,themeStyle:n},void 0)},{children:t}),void 0)}},6914:(e,t,n)=>{"use strict";n.d(t,{$:()=>Xu,A:()=>bo,B:()=>Xe,E:()=>et,G:()=>ht,I:()=>wd,J:()=>Tg,K:()=>Bf,L:()=>Te,N:()=>vt,Q:()=>Pe,R:()=>wt,W:()=>Lt,X:()=>Fe,Y:()=>Ae,Z:()=>Le,_:()=>bn,a$:()=>$,a0:()=>El,a2:()=>yc,a3:()=>Bl,a4:()=>jl,a5:()=>xn,aA:()=>$o,aD:()=>od,aE:()=>Yt,aF:()=>Tm,aH:()=>Ip,aI:()=>Wh,aJ:()=>Hu,aK:()=>Wu,aL:()=>Gu,aR:()=>Sn,aS:()=>Re,aT:()=>Fc,aU:()=>ld,aV:()=>je,aW:()=>Ml,aX:()=>wn,aY:()=>Ze,aZ:()=>kl,a_:()=>We,aa:()=>B,ab:()=>Kt,ad:()=>Cc,af:()=>jt,ai:()=>Oe,aj:()=>Ie,ak:()=>Bt,al:()=>dm,ap:()=>Tl,aq:()=>Vu,as:()=>Sf,at:()=>ff,au:()=>xd,ax:()=>su,ay:()=>Vf,az:()=>wc,b:()=>tt,b$:()=>io,b0:()=>qp,b1:()=>Ee,b2:()=>$e,b3:()=>ra,b4:()=>Ne,b5:()=>qe,b6:()=>oo,b7:()=>ao,b8:()=>ds,b9:()=>yf,bA:()=>kd,bB:()=>gh,bC:()=>fh,bD:()=>Td,bE:()=>Fd,bF:()=>Yd,bG:()=>Zd,bH:()=>Dd,bI:()=>Ad,bJ:()=>Pd,bK:()=>bm,bL:()=>Em,bM:()=>mo,bN:()=>yh,bO:()=>Qd,bP:()=>Sd,bQ:()=>Cd,bR:()=>Md,bS:()=>Rd,bT:()=>Gd,bU:()=>Xd,bV:()=>ad,bW:()=>ud,bX:()=>cs,bY:()=>lu,bZ:()=>Al,b_:()=>Dl,ba:()=>lf,bb:()=>$l,bc:()=>Qi,bd:()=>Xi,be:()=>Ed,bf:()=>uh,bg:()=>ph,bh:()=>vh,bi:()=>Od,bj:()=>dh,bk:()=>Ud,bl:()=>Wd,bm:()=>xh,bn:()=>vm,bo:()=>gm,bp:()=>_m,bq:()=>Ui,br:()=>xm,bs:()=>Hi,bt:()=>ta,bu:()=>hh,bv:()=>_d,bw:()=>Kd,bx:()=>co,by:()=>mh,bz:()=>ch,c:()=>nt,c0:()=>Ji,c1:()=>no,c2:()=>hi,c3:()=>Wi,c4:()=>Wp,c5:()=>bh,c6:()=>ro,c7:()=>pf,c8:()=>mf,c9:()=>wm,ca:()=>Bp,cb:()=>Hp,cc:()=>Ki,cd:()=>En,ce:()=>fm,cf:()=>hm,cg:()=>cm,ch:()=>pm,ci:()=>mm,cj:()=>Mn,ck:()=>zn,cl:()=>po,e:()=>ot,h:()=>lt,i:()=>ut,j:()=>ct,l:()=>ft,n:()=>xt,q:()=>Ct,r:()=>kt,s:()=>Mt,t:()=>Tt,u:()=>Dt,v:()=>At,x:()=>Ot,y:()=>O,z:()=>lg});var r=n(5893),i=n(7294),o=n(2788),a=n(7762),s=(n(9864),n(2596)),l=n(1472);const u=new Map,c=new WeakMap;let d,h=0;function f(e,t,n={},r=d){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){let t=function(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(c.has(n)||(h+=1,c.set(n,h.toString())),c.get(n)):"0"):e[t]}`;var n})).toString()}(e),n=u.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},u.set(t,n)}return n}(n);let s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),u.delete(i))}}class p extends i.Component{constructor(e){super(e),this.node=null,this._unobserveCb=null,this.handleNode=e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()},this.handleChange=(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),isPlainChildren(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)},this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=f(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!isPlainChildren(this.props)){const{inView:e,entry:t}=this.state;return this.props.children({inView:e,entry:t,ref:this.handleNode})}const e=this.props,{children:t,as:n}=e,r=function(e,t){if(null==e)return{};for(var n,r,i={},o=Object.keys(e);r<o.length;r++)o[r],null.indexOf(n)>=0||(i[n]=e[n]);return i}(e);return React.createElement(n||"div",_extends({ref:this.handleNode},r),t)}}const m=e=>{let t;const n=new Set,r=(e,r)=>{const i="function"==typeof e?e(t):e;if(!Object.is(i,t)){const e=t;t=(null!=r?r:"object"!=typeof i)?i:Object.assign({},t,i),n.forEach((n=>n(t,e)))}},i=()=>t,o={setState:r,getState:i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,i,o),o};var g=n(2798);const{useSyncExternalStoreWithSelector:v}=g,y=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t="function"==typeof e?(e=>e?m(e):m)(e):e,n=(e,n)=>function(e,t=e.getState,n){const r=v(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,i.useDebugValue)(r),r}(t,e,n);return Object.assign(n,t),n};var b,x=n(9382),w=n(7814),_=n(3935),S=new Uint8Array(16);function E(){if(!b&&!(b="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(S)}for(var C=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,k=[],M=0;M<256;++M)k.push((M+256).toString(16).substr(1));function T(e,t,n){var r=(e=e||{}).random||(e.rng||E)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(k[e[t+0]]+k[e[t+1]]+k[e[t+2]]+k[e[t+3]]+"-"+k[e[t+4]]+k[e[t+5]]+"-"+k[e[t+6]]+k[e[t+7]]+"-"+k[e[t+8]]+k[e[t+9]]+"-"+k[e[t+10]]+k[e[t+11]]+k[e[t+12]]+k[e[t+13]]+k[e[t+14]]+k[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&C.test(e)}(n))throw TypeError("Stringified UUID is invalid");return n}(r)}const D=(0,i.createContext)(!1);function A(e){const{cssHandles:t}=e,[n,o]=(0,i.useState)([]);return(0,i.useEffect)((()=>{const e=[];t&&"undefined"!=typeof window&&t.forEach((t=>{const n=document.querySelector(`#${t}-css`);if(n){const r=n.getAttribute("href");r&&e.push({id:t,href:r,media:n.getAttribute("media")??"all"})}})),o(e)}),[t]),(0,r.jsx)(r.Fragment,{children:n.map((e=>(0,r.jsx)("link",{rel:"stylesheet",href:e.href,media:e.media},e.id)))},void 0)}function P(){const{customCSS:e,customStyleLinks:t}="undefined"!=typeof WPEFormGraphQLApp?WPEFormGraphQLApp:{customCSS:void 0,customStyleLinks:void 0};return(0,r.jsxs)(r.Fragment,{children:[e?(0,r.jsx)("style",{type:"text/css",dangerouslySetInnerHTML:{__html:e}},void 0):null,t?t.map((e=>(0,r.jsx)("link",{rel:"stylesheet",href:e},e))):null]},void 0)}function O(e){const{children:t,inShadow:n,cssHandles:o}=e,[a,s]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{s(!0)}),[]),(0,r.jsxs)(D.Provider,Object.assign({value:n},{children:[a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P,{},void 0),n?(0,r.jsx)(A,{cssHandles:o},void 0):null]},void 0):null,t]}),void 0)}O.LinkAllAssets=function(e){const{body:t=!1,head:n=!0}=e,[o,a]=(0,i.useState)([]);return(0,i.useEffect)((()=>{const e=[];let r;const i='link[rel="stylesheet"]';r=n&&t?document.querySelectorAll(i):n?document.head.querySelectorAll(i):document.body.querySelectorAll(i),r.length&&r.forEach((t=>{const n=t.getAttribute("href");n&&e.push({id:t.getAttribute("id")??T(),href:n,media:t.getAttribute("media")??"all"})})),a(e)}),[t,n]),(0,r.jsx)(r.Fragment,{children:o.map((e=>(0,r.jsx)("link",{rel:"stylesheet",href:e.href,media:e.media},e.id)))},void 0)};var R=i,F=R.useState,L=R.useCallback,I=R.useLayoutEffect;function N(e){return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}}var j,$=function(e){var t=F(N(e?e.current:{})),n=t[0],r=t[1],i=L((function(){e.current&&r(N(e.current))}),[e]);return I((function(){if(e.current){if(i(),"function"==typeof ResizeObserver){var t=new ResizeObserver((function(){i()}));return t.observe(e.current),function(){t.disconnect(e.current),t=null}}return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}}),[e.current]),n},z={exports:{}};j=z,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)n.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&n.push(a)}}else if("object"===o)if(i.toString===Object.prototype.toString)for(var s in i)e.call(i,s)&&i[s]&&n.push(s);else n.push(i.toString())}}return n.join(" ")}j.exports?(t.default=t,j.exports=t):window.classNames=t}();var B=z.exports;function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}function W(e,t,n){return W=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&H(i,n.prototype),i},W.apply(null,arguments)}function G(e){var t="function"==typeof Map?new Map:void 0;return G=function(e){if(null===e||!function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return W(e,arguments,V(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),H(n,e)},G(e)}var q=function(e){var t,n;function r(t){return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this)}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,H(t,n),r}(G(Error));function Y(e){return Math.round(255*e)}function Z(e,t,n){return Y(e)+","+Y(t)+","+Y(n)}function X(e,t,n,r){if(void 0===r&&(r=Z),0===t)return r(n,n,n);var i=(e%360+360)%360/60,o=(1-Math.abs(2*n-1))*t,a=o*(1-Math.abs(i%2-1)),s=0,l=0,u=0;i>=0&&i<1?(s=o,l=a):i>=1&&i<2?(s=a,l=o):i>=2&&i<3?(l=o,u=a):i>=3&&i<4?(l=a,u=o):i>=4&&i<5?(s=a,u=o):i>=5&&i<6&&(s=o,u=a);var c=n-o/2;return r(s+c,l+c,u+c)}var Q={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},K=/^#[a-fA-F0-9]{6}$/,J=/^#[a-fA-F0-9]{8}$/,ee=/^#[a-fA-F0-9]{3}$/,te=/^#[a-fA-F0-9]{4}$/,ne=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,re=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,ie=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,oe=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function ae(e){if("string"!=typeof e)throw new q(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return Q[t]?"#"+Q[t]:e}(e);if(t.match(K))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(J)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(ee))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(te)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var i=ne.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var o=re.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var a=ie.exec(t);if(a){var s="rgb("+X(parseInt(""+a[1],10),parseInt(""+a[2],10)/100,parseInt(""+a[3],10)/100)+")",l=ne.exec(s);if(!l)throw new q(4,t,s);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var u=oe.exec(t.substring(0,50));if(u){var c="rgb("+X(parseInt(""+u[1],10),parseInt(""+u[2],10)/100,parseInt(""+u[3],10)/100)+")",d=ne.exec(c);if(!d)throw new q(4,t,c);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+u[4])}}throw new q(5)}function se(e){return function(e){var t,n=e.red/255,r=e.green/255,i=e.blue/255,o=Math.max(n,r,i),a=Math.min(n,r,i),s=(o+a)/2;if(o===a)return void 0!==e.alpha?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var l=o-a,u=s>.5?l/(2-o-a):l/(o+a);switch(o){case n:t=(r-i)/l+(r<i?6:0);break;case r:t=(i-n)/l+2;break;default:t=(n-r)/l+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:u,lightness:s,alpha:e.alpha}:{hue:t,saturation:u,lightness:s}}(ae(e))}var le=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function ue(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function ce(e){return ue(Math.round(255*e))}function de(e,t,n){return le("#"+ce(e)+ce(t)+ce(n))}function he(e,t,n){return X(e,t,n,de)}function fe(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return le("#"+ue(e)+ue(t)+ue(n));if("object"==typeof e&&void 0===t&&void 0===n)return le("#"+ue(e.red)+ue(e.green)+ue(e.blue));throw new q(6)}function pe(e,t,n,r){if("string"==typeof e&&"number"==typeof t){var i=ae(e);return"rgba("+i.red+","+i.green+","+i.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return r>=1?fe(e,t,n):"rgba("+e+","+t+","+n+","+r+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?fe(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new q(7)}var me=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)},ge=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha},ve=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)},ye=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha};function be(e){if("object"!=typeof e)throw new q(8);if(ge(e))return pe(e);if(me(e))return fe(e);if(ye(e))return function(e,t,n,r){if("object"==typeof e)return e.alpha>=1?he(e.hue,e.saturation,e.lightness):"rgba("+X(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new q(2)}(e);if(ve(e))return function(e,t,n){if("object"==typeof e)return he(e.hue,e.saturation,e.lightness);throw new q(1)}(e);throw new q(8)}function xe(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):xe(e,t,r)}}function we(e){return xe(e,e.length,[])}function _e(e,t,n){return Math.max(e,Math.min(t,n))}function Se(e,t){if("transparent"===t)return t;var n=se(t);return be(U({},n,{lightness:_e(0,1,n.lightness-parseFloat(e))}))}var Ee=we(Se);function Ce(e,t){if("transparent"===t)return t;var n=se(t);return be(U({},n,{saturation:_e(0,1,n.saturation-parseFloat(e))}))}var ke=we(Ce);function Me(e,t){if("transparent"===t)return t;var n=se(t);return be(U({},n,{lightness:_e(0,1,n.lightness+parseFloat(e))}))}var Te=we(Me);function De(e,t){if("transparent"===t)return t;var n=ae(t);return pe(U({},n,{alpha:_e(0,1,+(100*("number"==typeof n.alpha?n.alpha:1)-100*parseFloat(e)).toFixed(2)/100)}))}var Ae=we(De);function Pe(e,t,n){const r={};return t&&Object.keys(t).forEach((n=>{r[`${e}--${n}`]=!!t[n]})),B(e,n,r)}function Oe(e,t,n){return B(`${e}__${t}`,n)}function Re(e,t,n={},r){const{breakpoints:i}=(0,o.Fg)();return Pe(t,{...n,"size-mobile":!0,"size-tablet":e.width>=i.tablet,"size-desktop":e.width>=i.desktop,"size-desktopHd":e.width>=i.desktopHd},r)}function Fe(e,t="px"){return`${e}${t}`}function Le(e,t,n){const r=[...e];return n&&r.push(...n),`${function(e,t){return e.map((e=>`${e} ${t}`)).join(", ")}(e,t)}; will-change: ${r.join(", ")};`}const Ie=o.iv`
	box-sizing: border-box;
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	background: transparent;
	line-height: 1.5;
	text-transform: none;
	background-color: transparent;

	&:focus {
		outline: 0;
	}
`,Ne=o.iv`
	appearance: none;
	box-sizing: content-box;
`;o.iv`
	overflow: auto;
	vertical-align: top;
	resize: vertical;
`;const je=o.iv`
	p,
	ul,
	ol,
	blockquote,
	li,
	strong,
	em,
	u,
	div.para {
		line-height: 1.5;
		font-size: inherit;
	}

	ul {
		list-style: disc;
	}
	ol {
		list-style: decimal;
	}

	blockquote {
		margin: 0 0 0.75em 0.75em;
		padding: 0.625em;
		border-left: 4px solid ${e=>e.theme.borderColorSplit};
		font-style: italic;
	}

	/* Copy & Lists */
	p,
	div.para {
		margin: 0.75em 0 0 0;
		&:only-child {
			margin: 0;
		}
		&:first-child {
			margin-top: 0;
		}
	}
	ul,
	ol {
		margin: 0.75em 0 0.75em 2.5em;
		padding: 0;
	}

	div.para > div.para:last-child {
		margin: 0;
	}

	ul ul,
	ol ul,
	ul ol,
	ol ol {
		margin-top: 0;
		margin-bottom: 0;
	}
	blockquote {
		margin: 0.75em 0;
	}
	/* Headings */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0.6em 0 0 0;
		line-height: 1.2;
		clear: both;
	}
	h1 {
		font-size: ${e=>Fe(e.theme.fz.large5/e.theme.fz.base,"em")};
		line-height: 1.2;
	}
	h2 {
		font-size: ${e=>Fe(e.theme.fz.large3/e.theme.fz.base,"em")};
	}
	h3 {
		font-size: ${e=>Fe(e.theme.fz.large2/e.theme.fz.base,"em")};
	}
	h4 {
		font-size: ${e=>Fe(e.theme.fz.large1/e.theme.fz.base,"em")};
	}
	h5 {
		font-size: ${e=>Fe(e.theme.fz.small1/e.theme.fz.base,"em")};
	}
	h6 {
		font-size: ${e=>Fe(e.theme.fz.small2/e.theme.fz.base,"em")};
	}
	/* Tables */
	table {
		margin-top: ${e=>Fe(e.theme.gutter)};
		border-spacing: 0px;
		border-collapse: collapse;
		clear: both;
	}
	table td,
	table th {
		padding: 0;
		line-height: 1.5;
	}
	/* Code blocks */
	code {
		vertical-align: bottom;
		color: ${e=>e.theme.textColorSecondary};
	}
	pre {
		max-height: 300px;
		width: 100%;
		overflow: auto;
		margin: 0.75em 0 0 0;
		color: ${e=>e.theme.greyBgText};
		background-color: ${e=>e.theme.greyDarkColor};
		padding: 0.3125em;
		tab-size: 2;
		a {
			color: ${e=>e.theme.primaryBackgroundColor};
			&:hover {
				color: ${e=>e.theme.primaryLightColor};
			}
		}
	}
	pre,
	pre code {
		color: ${e=>e.theme.greyBgText};
		background-color: ${e=>e.theme.greyDarkColor};
		font-family: ${e=>e.theme.fontFamilyMono};
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	blockquote,
	table,
	pre {
		&:first-child {
			margin-top: 0;
		}
	}

	strong {
		font-weight: bold;
	}
	u {
		text-decoration: underline;
	}
	em {
		font-style: italic;
	}

	a {
		color: ${e=>e.theme.linkColor};
		text-decoration: underline;
		&:hover {
			color: ${e=>e.theme.primaryLightColor};
			text-decoration: none;
		}
	}
`,$e=(o.iv`
	overflow-wrap: break-word;
	word-wrap: break-word;
	word-break: break-word;
	hyphens: auto;
`,o.iv`
	max-width: ${e=>e.maxWidth??"100%"};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`),ze=o.iv`
	white-space: pre-wrap;
	overflow-wrap: break-word;
`;function Be(e){if(e)return{textAlign:e}}function Ue(e){let t=Math.ceil(e);return t%2!=0&&(t+=1),t}const He=o.iv`
	&::-webkit-scrollbar-thumb {
		background-color: ${e=>e.theme.borderColorSplit};
		&:hover,
		&:active {
			background-color: ${e=>e.theme.borderColorBase};
		}
	}
`,Ve=o.iv`
	overflow-x: scroll;
	&::-webkit-scrollbar {
		background-color: ${e=>e.theme.backgroundHover};
		height: ${e=>Fe(e.theme.gutter/2)};
	}
`,We=o.iv`
	${Ve}
	${He};
`,Ge=o.iv`
	overflow-y: scroll;
	&::-webkit-scrollbar {
		background-color: ${e=>e.theme.backgroundHover};
		width: ${e=>Fe(e.theme.gutter/2)};
	}
`;o.iv`
	${Ge};
	${He};
`,o.iv`
	overflow: scroll;
	&::-webkit-scrollbar {
		background-color: ${e=>e.theme.backgroundHover};
		&:horizontal {
			height: ${e=>Fe(e.theme.gutter/2)};
		}
		&:vertical {
			width: ${e=>Fe(e.theme.gutter/2)};
		}
	}
	&::-webkit-scrollbar-corner {
		background-color: ${e=>e.theme.backgroundHover};
	}
	${He};
`;const qe=o.iv`
	border: 0;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	word-wrap: normal !important;
`,Ye=o.iv`
	text-align: left;
	background: transparent;
	border: 0 none;
	outline: none;
	margin: 0;
	padding: 0;
	cursor: pointer;
	display: inline;
	font-style: normal;
	text-decoration: none;
	border-radius: 0;
`;function Ze(e){const t=(0,o.Fg)(),n="slow"===e?t.springConfigSlow:"general"===e?t.springConfigGeneral:t.springConfigStiff;return(0,i.useMemo)((()=>({...n,clamp:!0})),[n])}var Xe,Qe,Ke,Je,et,tt,nt,rt,it,ot,at,st,lt,ut,ct,dt,ht,ft,pt,mt,gt,vt,yt,bt,xt,wt,_t,St,Et,Ct,kt,Mt,Tt,Dt,At,Pt,Ot,Rt,Ft,Lt;!function(e){e.AFTER="AFTER",e.BEFORE="BEFORE"}(Xe||(Xe={})),function(e){e.BLANK="BLANK",e.POPUP="POPUP",e.SELF="SELF"}(Qe||(Qe={})),function(e){e.HIDE_FIELDS="HIDE_FIELDS",e.HIDE_PAGES="HIDE_PAGES",e.SET_VALUE_OF="SET_VALUE_OF",e.SHOW_FIELDS="SHOW_FIELDS",e.SHOW_PAGES="SHOW_PAGES"}(Ke||(Ke={})),function(e){e.ALWAYS="ALWAYS",e.AUTO="AUTO",e.OFF="OFF"}(Je||(Je={})),function(e){e.CONTAINS="CONTAINS",e.ENDS_WITH="ENDS_WITH",e.EQUALS_TO="EQUALS_TO",e.GREATER_THAN="GREATER_THAN",e.LESS_THAN="LESS_THAN",e.STARTS_WITH="STARTS_WITH"}(et||(et={})),function(e){e.LENGTH="LENGTH",e.VALUE="VALUE"}(tt||(tt={})),function(e){e.IS="IS",e.ISNOT="ISNOT"}(nt||(nt={})),function(e){e.AND="AND",e.OR="OR"}(rt||(rt={})),function(e){e.CHOICE="CHOICE",e.DESIGN="DESIGN",e.INPUT="INPUT",e.SECURITY="SECURITY"}(it||(it={})),function(e){e.NEXT_ON_ALL_VALID="NEXT_ON_ALL_VALID",e.NONE="NONE",e.ONLY_WHEN_ALL_VALID="ONLY_WHEN_ALL_VALID"}(ot||(ot={})),function(e){e.ONETIME="ONETIME",e.SUBSCRIPTION="SUBSCRIPTION"}(at||(at={})),function(e){e.PERCENTAGE="PERCENTAGE",e.VALUE="VALUE"}(st||(st={})),function(e){e.FIXED="FIXED",e.LOCAL="LOCAL",e.SCROLL="SCROLL"}(lt||(lt={})),function(e){e.BORDER_BOX="BORDER_BOX",e.CONTENT_BOX="CONTENT_BOX",e.PADDING_BOX="PADDING_BOX"}(ut||(ut={})),function(e){e.REPEAT_BOTH="REPEAT_BOTH",e.REPEAT_NONE="REPEAT_NONE",e.REPEAT_X="REPEAT_X",e.REPEAT_Y="REPEAT_Y"}(ct||(ct={})),function(e){e.LOGGED_IN="LOGGED_IN",e.LOGGED_OUT="LOGGED_OUT",e.NONE="NONE"}(dt||(dt={})),function(e){e.CENTER="CENTER",e.JUSTIFY="JUSTIFY",e.LEFT="LEFT",e.RIGHT="RIGHT"}(ht||(ht={})),function(e){e.DEFAULT="DEFAULT",e.LARGE="LARGE",e.SMALL="SMALL"}(ft||(ft={})),function(e){e.SIZE1="SIZE1",e.SIZE2="SIZE2",e.SIZE3="SIZE3",e.SIZE4="SIZE4",e.SIZE5="SIZE5",e.SIZE6="SIZE6"}(pt||(pt={})),function(e){e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6",e.P="P"}(mt||(mt={})),function(e){e.NONE="NONE",e.PRESET="PRESET",e.REGEXP="REGEXP",e.STRING="STRING"}(gt||(gt={})),function(e){e.EQUALS_TO="EQUALS_TO",e.GREATER_THAN="GREATER_THAN",e.LESS_THAN="LESS_THAN"}(vt||(vt={})),function(e){e.AUTO="AUTO",e.FOUR="FOUR",e.ONE="ONE",e.THREE="THREE",e.TWO="TWO"}(yt||(yt={})),function(e){e.CURSOR="CURSOR",e.OFFSET="OFFSET"}(bt||(bt={})),function(e){e.META="META",e.NONE="NONE",e.URL="URL"}(xt||(xt={})),function(e){e.CONDITIONAL="CONDITIONAL",e.FLAT="FLAT",e.NONE="NONE",e.PORTAL="PORTAL",e.SCOREPERCENTAGE="SCOREPERCENTAGE",e.SCORETOTAL="SCORETOTAL",e.SUBMISSION="SUBMISSION"}(wt||(wt={})),function(e){e.ALL="ALL",e.OWNED="OWNED",e.SHARED="SHARED",e.TRASHED="TRASHED"}(_t||(_t={})),function(e){e.PERCENTAGE="PERCENTAGE",e.VALUE="VALUE"}(St||(St={})),function(e){e.ADD="ADD",e.SUBTRACT="SUBTRACT"}(Et||(Et={})),function(e){e.MULTIPLE="MULTIPLE",e.SINGLE="SINGLE"}(Ct||(Ct={})),function(e){e.FIXED="FIXED",e.FLUID="FLUID"}(kt||(kt={})),function(e){e.CENTER="CENTER",e.LEFT="LEFT",e.RIGHT="RIGHT"}(Mt||(Mt={})),function(e){e.HORIZONTAL="HORIZONTAL",e.INLINE="INLINE",e.VERTICAL="VERTICAL"}(Tt||(Tt={})),function(e){e.BOXY="BOXY",e.MATERIAL="MATERIAL"}(Dt||(Dt={})),function(e){e.BOTTOM="BOTTOM",e.TOP="TOP"}(At||(At={})),function(e){e.DAY="DAY",e.MONTH="MONTH",e.WEEK="WEEK"}(Pt||(Pt={})),function(e){e.NONE="NONE",e.OVERALL="OVERALL",e.PAGE_SPECIFIC="PAGE_SPECIFIC"}(Ot||(Ot={})),function(e){e.NOT_TRASHED="NOT_TRASHED",e.TRASHED="TRASHED"}(Rt||(Rt={})),function(e){e.ALL="ALL",e.EMAIL="EMAIL",e.INTEGER="INTEGER",e.NOLETTER="NOLETTER",e.NONUMBER="NONUMBER",e.NUMBER="NUMBER",e.PHONE="PHONE",e.URL="URL"}(Ft||(Ft={})),function(e){e.FULL="FULL",e.HALF="HALF",e.MANUAL="MANUAL",e.ONEFOURTH="ONEFOURTH",e.ONETHIRD="ONETHIRD",e.THREEFOURTH="THREEFOURTH",e.TWOTHIRD="TWOTHIRD"}(Lt||(Lt={}));const It="wpeform-responsive-container",Nt=(0,i.createContext)({height:0,width:0});function jt(){return(0,i.useContext)(Nt)}const $t=(0,i.createContext)({current:null}),zt=(0,i.createContext)({current:null});function Bt(){return(0,i.useContext)(zt)}const Ut=o.iv`
	max-width: 100%;
	width: 100%;
	margin: 0 auto;
`,Ht=o.iv`
	@media screen and (min-width: ${e=>Fe(e.theme.breakpoints.tablet)}) {
		max-width: ${e=>Fe(e.theme.breakpoints.tablet)};
	}
	@media screen and (min-width: ${e=>Fe(e.theme.breakpoints.desktop)}) {
		max-width: ${e=>Fe(e.theme.breakpoints.desktop)};
	}
	@media screen and (min-width: ${e=>Fe(e.theme.breakpoints.desktopHd)}) {
		max-width: ${e=>Fe(e.theme.breakpoints.desktopHd)};
	}
`,Vt=o.ZP.div`
	${Ut};
`,Wt=o.ZP.div`
	${Ie};
	font-family: ${e=>e.theme.fontFamilyBody};
	margin: 0 auto;
	max-width: ${e=>e.width??"100%"};
	width: 100%;
	color: ${e=>e.theme.textColor};
`,Gt=o.ZP.div`
	padding: ${e=>e.noVerticalPadding?0:Fe(e.theme.gutter)}
		${e=>e.noHorizontalPadding?0:Fe(e.theme.gutter)};
	margin: 0 auto;
	max-width: 1440px;

	&.${It}--layout-FIXED {
		${Vt} {
			${Ht};
		}
	}
`,qt={height:960,width:480};function Yt(e){const{children:t,width:n="100%",containerLayout:o=kt.FIXED,noHorizontalPadding:a=!1,noVerticalPadding:s=!1}=e,l=(0,i.useRef)(null),u=(0,i.useRef)(null),c=$(u),d=Re(c,It,{[`layout-${o}`]:!0});return(0,r.jsx)(Gt,Object.assign({noHorizontalPadding:a,noVerticalPadding:s,className:d,ref:l},{children:(0,r.jsx)(Vt,{children:(0,r.jsx)(Wt,Object.assign({ref:u,width:n},{children:(0,r.jsx)(zt.Provider,Object.assign({value:l},{children:(0,r.jsx)(Nt.Provider,Object.assign({value:c},{children:(0,r.jsx)($t.Provider,Object.assign({value:u},{children:t}),void 0)}),void 0)}),void 0)}),void 0)},void 0)}),void 0)}Yt.Ssr=function(e){const{children:t,width:n="100%",containerLayout:o=kt.FIXED,noHorizontalPadding:a=!1,noVerticalPadding:s=!1}=e,l=(0,i.useRef)(null),u=Re(qt,It,{[`layout-${o}`]:!0});return(0,r.jsx)(Gt,Object.assign({noHorizontalPadding:a,noVerticalPadding:s,className:u},{children:(0,r.jsx)(Vt,{children:(0,r.jsx)(Wt,Object.assign({ref:l,width:n},{children:(0,r.jsx)(Nt.Provider,Object.assign({value:qt},{children:(0,r.jsx)($t.Provider,Object.assign({value:l},{children:t}),void 0)}),void 0)}),void 0)},void 0)}),void 0)},Yt.Portal=function(e){const{children:t}=e,n=Bt();return(0,_.createPortal)(t,n.current??document.body)};var Zt,Xt={};Zt=Xt,function(){var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function t(n){return function(n,r){var i,o,a,s,l,u,c,d,h,f=1,p=n.length,m="";for(o=0;o<p;o++)if("string"==typeof n[o])m+=n[o];else if("object"==typeof n[o]){if((s=n[o]).keys)for(i=r[f],a=0;a<s.keys.length;a++){if(null==i)throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[a],s.keys[a-1]));i=i[s.keys[a]]}else i=s.param_no?r[s.param_no]:r[f++];if(e.not_type.test(s.type)&&e.not_primitive.test(s.type)&&i instanceof Function&&(i=i()),e.numeric_arg.test(s.type)&&"number"!=typeof i&&isNaN(i))throw new TypeError(t("[sprintf] expecting number but found %T",i));switch(e.number.test(s.type)&&(d=i>=0),s.type){case"b":i=parseInt(i,10).toString(2);break;case"c":i=String.fromCharCode(parseInt(i,10));break;case"d":case"i":i=parseInt(i,10);break;case"j":i=JSON.stringify(i,null,s.width?parseInt(s.width):0);break;case"e":i=s.precision?parseFloat(i).toExponential(s.precision):parseFloat(i).toExponential();break;case"f":i=s.precision?parseFloat(i).toFixed(s.precision):parseFloat(i);break;case"g":i=s.precision?String(Number(i.toPrecision(s.precision))):parseFloat(i);break;case"o":i=(parseInt(i,10)>>>0).toString(8);break;case"s":i=String(i),i=s.precision?i.substring(0,s.precision):i;break;case"t":i=String(!!i),i=s.precision?i.substring(0,s.precision):i;break;case"T":i=Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),i=s.precision?i.substring(0,s.precision):i;break;case"u":i=parseInt(i,10)>>>0;break;case"v":i=i.valueOf(),i=s.precision?i.substring(0,s.precision):i;break;case"x":i=(parseInt(i,10)>>>0).toString(16);break;case"X":i=(parseInt(i,10)>>>0).toString(16).toUpperCase()}e.json.test(s.type)?m+=i:(!e.number.test(s.type)||d&&!s.sign?h="":(h=d?"+":"-",i=i.toString().replace(e.sign,"")),u=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",c=s.width-(h+i).length,l=s.width&&c>0?u.repeat(c):"",m+=s.align?h+i+l:"0"===u?h+l+i:l+h+i)}return m}(function(t){if(r[t])return r[t];for(var n,i=t,o=[],a=0;i;){if(null!==(n=e.text.exec(i)))o.push(n[0]);else if(null!==(n=e.modulo.exec(i)))o.push("%");else{if(null===(n=e.placeholder.exec(i)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){a|=1;var s=[],l=n[2],u=[];if(null===(u=e.key.exec(l)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(s.push(u[1]);""!==(l=l.substring(u[0].length));)if(null!==(u=e.key_access.exec(l)))s.push(u[1]);else{if(null===(u=e.index_access.exec(l)))throw new SyntaxError("[sprintf] failed to parse named argument key");s.push(u[1])}n[2]=s}else a|=2;if(3===a)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");o.push({placeholder:n[0],param_no:n[1],keys:n[2],sign:n[3],pad_char:n[4],align:n[5],width:n[6],precision:n[7],type:n[8]})}i=i.substring(n[0].length)}return r[t]=o}(n),arguments)}function n(e,n){return t.apply(null,[e].concat(n||[]))}var r=Object.create(null);Zt.sprintf=t,Zt.vsprintf=n,"undefined"!=typeof window&&(window.sprintf=t,window.vsprintf=n)}();const Qt=function(e,t){var n,r,i=0;function o(){var o,a,s=n,l=arguments.length;e:for(;s;){if(s.args.length===arguments.length){for(a=0;a<l;a++)if(s.args[a]!==arguments[a]){s=s.next;continue e}return s!==n&&(s===r&&(r=s.prev),s.prev.next=s.next,s.next&&(s.next.prev=s.prev),s.next=n,s.prev=null,n.prev=s,n=s),s.val}s=s.next}for(o=new Array(l),a=0;a<l;a++)o[a]=arguments[a];return s={args:o,val:e.apply(null,o)},n?(n.prev=s,s.next=n):r=s,i===t.maxSize?(r=r.prev).next=null:i++,n=s,s.val}return t=t||{},o.clear=function(){n=null,r=null,i=0},o}(console.error);function Kt(e,...t){try{return Xt.sprintf(e,...t)}catch(t){return Qt("sprintf error: \n\n"+t.toString()),e}}var Jt,en,tn,nn;Jt={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},en=["(","?"],tn={")":["("],":":["?","?:"]},nn=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var rn={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,n){if(e)throw t;return n}};var on={contextDelimiter:"",onMissingKey:null};function an(e,t){var n;for(n in this.data=e,this.pluralForms={},this.options={},on)this.options[n]=void 0!==t&&n in t?t[n]:on[n]}an.prototype.getPluralForm=function(e,t){var n,r,i,o,a=this.pluralForms[e];return a||("function"!=typeof(i=(n=this.data[e][""])["Plural-Forms"]||n["plural-forms"]||n.plural_forms)&&(r=function(e){var t,n,r;for(t=e.split(";"),n=0;n<t.length;n++)if(0===(r=t[n].trim()).indexOf("plural="))return r.substr(7)}(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),o=function(e){var t=function(e){for(var t,n,r,i,o=[],a=[];t=e.match(nn);){for(n=t[0],(r=e.substr(0,t.index).trim())&&o.push(r);i=a.pop();){if(tn[n]){if(tn[n][0]===i){n=tn[n][1]||n;break}}else if(en.indexOf(i)>=0||Jt[i]<Jt[n]){a.push(i);break}o.push(i)}tn[n]||a.push(n),e=e.substr(t.index+n.length)}return(e=e.trim())&&o.push(e),o.concat(a.reverse())}(e);return function(e){return function(e,t){var n,r,i,o,a,s,l=[];for(n=0;n<e.length;n++){if(a=e[n],o=rn[a]){for(r=o.length,i=Array(r);r--;)i[r]=l.pop();try{s=o.apply(null,i)}catch(e){return e}}else s=t.hasOwnProperty(a)?t[a]:+a;l.push(s)}return l[0]}(t,e)}}(r),i=function(e){return+o({n:e})}),a=this.pluralForms[e]=i),a(t)},an.prototype.dcnpgettext=function(e,t,n,r,i){var o,a,s;return o=void 0===i?0:this.getPluralForm(e,i),a=n,t&&(a=t+this.options.contextDelimiter+n),(s=this.data[e][a])&&s[o]?s[o]:(this.options.onMissingKey&&this.options.onMissingKey(n,e),0===o?n:r)};const sn={"":{plural_forms:e=>1===e?0:1}},ln=/^i18n\.(n?gettext|has_translation)(_|$)/;function un(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}function cn(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}function dn(e,t){return function(n,r,i,o=10){const a=e[t];if(!cn(n))return;if(!un(r))return;if("function"!=typeof i)return void console.error("The hook callback must be a function.");if("number"!=typeof o)return void console.error("If specified, the hook priority must be a number.");const s={callback:i,priority:o,namespace:r};if(a[n]){const e=a[n].handlers;let t;for(t=e.length;t>0&&!(o>=e[t-1].priority);t--);t===e.length?e[t]=s:e.splice(t,0,s),a.__current.forEach((e=>{e.name===n&&e.currentIndex>=t&&e.currentIndex++}))}else a[n]={handlers:[s],runs:0};"hookAdded"!==n&&e.doAction("hookAdded",n,r,i,o)}}function hn(e,t,n=!1){return function(r,i){const o=e[t];if(!cn(r))return;if(!n&&!un(i))return;if(!o[r])return 0;let a=0;if(n)a=o[r].handlers.length,o[r]={runs:o[r].runs,handlers:[]};else{const e=o[r].handlers;for(let t=e.length-1;t>=0;t--)e[t].namespace===i&&(e.splice(t,1),a++,o.__current.forEach((e=>{e.name===r&&e.currentIndex>=t&&e.currentIndex--})))}return"hookRemoved"!==r&&e.doAction("hookRemoved",r,i),a}}function fn(e,t){return function(n,r){const i=e[t];return void 0!==r?n in i&&i[n].handlers.some((e=>e.namespace===r)):n in i}}function pn(e,t,n=!1){return function(r,...i){const o=e[t];o[r]||(o[r]={handlers:[],runs:0}),o[r].runs++;const a=o[r].handlers;if(!a||!a.length)return n?i[0]:void 0;const s={name:r,currentIndex:0};for(o.__current.push(s);s.currentIndex<a.length;){const e=a[s.currentIndex].callback.apply(null,i);n&&(i[0]=e),s.currentIndex++}return o.__current.pop(),n?i[0]:void 0}}function mn(e,t){return function(){var n,r;const i=e[t];return null!==(n=null===(r=i.__current[i.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==n?n:null}}function gn(e,t){return function(n){const r=e[t];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}}function vn(e,t){return function(n){const r=e[t];if(cn(n))return r[n]&&r[n].runs?r[n].runs:0}}const yn=((e,t,n)=>{const r=new an({}),i=new Set,o=()=>{i.forEach((e=>e()))},a=(e,t="default")=>{r.data[t]={...sn,...r.data[t],...e},r.data[t][""]={...sn[""],...r.data[t][""]}},s=(e,t)=>{a(e,t),o()},l=(e="default",t,n,i,o)=>(r.data[e]||a(void 0,e),r.dcnpgettext(e,t,n,i,o)),u=(e="default")=>e,c=(e,t,r)=>{let i=l(r,t,e);return n?(i=n.applyFilters("i18n.gettext_with_context",i,e,t,r),n.applyFilters("i18n.gettext_with_context_"+u(r),i,e,t,r)):i};if(n){const e=e=>{ln.test(e)&&o()};n.addAction("hookAdded","core/i18n",e),n.addAction("hookRemoved","core/i18n",e)}return{getLocaleData:(e="default")=>r.data[e],setLocaleData:s,resetLocaleData:(e,t)=>{r.data={},r.pluralForms={},s(e,t)},subscribe:e=>(i.add(e),()=>i.delete(e)),__:(e,t)=>{let r=l(t,void 0,e);return n?(r=n.applyFilters("i18n.gettext",r,e,t),n.applyFilters("i18n.gettext_"+u(t),r,e,t)):r},_x:c,_n:(e,t,r,i)=>{let o=l(i,void 0,e,t,r);return n?(o=n.applyFilters("i18n.ngettext",o,e,t,r,i),n.applyFilters("i18n.ngettext_"+u(i),o,e,t,r,i)):o},_nx:(e,t,r,i,o)=>{let a=l(o,i,e,t,r);return n?(a=n.applyFilters("i18n.ngettext_with_context",a,e,t,r,i,o),n.applyFilters("i18n.ngettext_with_context_"+u(o),a,e,t,r,i,o)):a},isRTL:()=>"rtl"===c("ltr","text direction"),hasTranslation:(e,t,i)=>{var o,a;const s=t?t+""+e:e;let l=!(null===(o=r.data)||void 0===o||null===(a=o[null!=i?i:"default"])||void 0===a||!a[s]);return n&&(l=n.applyFilters("i18n.has_translation",l,e,t,i),l=n.applyFilters("i18n.has_translation_"+u(i),l,e,t,i)),l}}})(0,0,new class{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=dn(this,"actions"),this.addFilter=dn(this,"filters"),this.removeAction=hn(this,"actions"),this.removeFilter=hn(this,"filters"),this.hasAction=fn(this,"actions"),this.hasFilter=fn(this,"filters"),this.removeAllActions=hn(this,"actions",!0),this.removeAllFilters=hn(this,"filters",!0),this.doAction=pn(this,"actions"),this.applyFilters=pn(this,"filters",!0),this.currentAction=mn(this,"actions"),this.currentFilter=mn(this,"filters"),this.doingAction=gn(this,"actions"),this.doingFilter=gn(this,"filters"),this.didAction=vn(this,"actions"),this.didFilter=vn(this,"filters")}});yn.getLocaleData.bind(yn),yn.setLocaleData.bind(yn),yn.resetLocaleData.bind(yn),yn.subscribe.bind(yn);const bn=yn.__.bind(yn),xn=yn._x.bind(yn),wn=yn._n.bind(yn);yn._nx.bind(yn),yn.isRTL.bind(yn),yn.hasTranslation.bind(yn);const _n=(0,i.createContext)(void 0);function Sn(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*t),r=e[t];e[t]=e[n],e[n]=r}}class En{collections={};collectionOrder=[];name;changeCallbacks=[];collector=null;constructor(e,t=null){this.name=e,this.collector=t}subscribeToChanges(e){const t=T();return this.changeCallbacks.push({id:t,callback:e}),t}unsubscribeFromChanges(e){this.changeCallbacks=this.changeCallbacks.filter((t=>t.id!==e))}addItem(e,t,n){if(this.collections[e])throw new Error(`Collection ${this.name} with item ${e} already exists.`);this.collections[e]=this.collector?this.collector(t):t,n?function(e,t,n){-1===n?e.push(t):e.splice(n,0,t)}(this.collectionOrder,e,n):this.collectionOrder.push(e)}replaceItem(e,t){if(!this.collections[e])throw new Error(`Collection ${this.name} with item ${e} does not exist.`);this.collections[e]=this.collector?this.collector(t):t,this.changeCallbacks.forEach((t=>{t.callback(e)}))}addWithoutCollector(e,t){if(this.collections[e])throw new Error(`Collection ${this.name} with item ${e} already exists.`);this.collections[e]=t,this.collectionOrder.push(e)}getItem(e){if(!this.collections[e])throw new Error(`Collection ${this.name} does not have item ${e}.`);return this.collections[e]}hasItem(e){return!!this.collections[e]}deleteItem(e){const t=this.collectionOrder.findIndex((t=>t===e));if(-1===t)throw new Error(`Collection ${this.name} does not have item ${e}.`);this.collectionOrder.splice(t,1),delete this.collections[e]}getItems(e=[],t=[],n){const r=this.collectionOrder.filter((r=>!(n&&!n(this.collections[r],r))&&function(e,t=[],n=[]){return!(t.length&&!t.includes(e)||n.length&&n.includes(e))}(r,e,t)));return r.map((e=>({id:e,item:this.collections[e]})))}resetItems(){this.collectionOrder=[],this.collections={}}}const Cn={neutrals:{"050":"#F5F7FA",100:"#E4E7EB",200:"#CBD2D9",300:"#9AA5B1",400:"#7B8794",500:"#616E7C",600:"#52606D",700:"#3E4C59",800:"#323F4B",900:"#1F2933"},red:{"050":"#FFE3E3",100:"#FFBDBD",200:"#FF9B9B",300:"#F86A6A",400:"#EF4E4E",500:"#E12D39",600:"#CF1124",700:"#AB091E",800:"#8A041A",900:"#610316"},green:{"050":"#E3F9E5",100:"#C1F2C7",200:"#91E697",300:"#51CA58",400:"#31B237",500:"#18981D",600:"#0F8613",700:"#0E7817",800:"#07600E",900:"#014807"},yellow:{"050":"#FFFBEA",100:"#FFF3C4",200:"#FCE588",300:"#FADB5F",400:"#F7C948",500:"#F0B429",600:"#DE911D",700:"#CB6E17",800:"#B44D12",900:"#8D2B0B"}},kn={fontFamilyBody:"--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",fontFamilyHeading:"--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",fontFamilyMono:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',fz:{small2:12,small1:14,base:16,large1:18,large2:20,large3:24,large4:30,large5:36,large6:48,large7:60,large8:72},boldHeading:!0,italicHeading:!1,borderRadiusBase:4,gutter:20,controlHeightBase:40,boxShadowBase:"0 2px 8px rgba(0, 0, 0, .15)",boxShadowElevationOne:"0 1px 3px rgba(0, 0, 0, 0.01), 0 1px 2px rgba(0, 0, 0, 0.06)",boxShadowHover:"0 3px 6px rgba(0,0,0,0.01), 0 3px 6px rgba(0,0,0,0.06)",boxShadowBottom:"0 2px 3px rgba(0, 0, 0, 0.01), 0 2px 2px rgba(0, 0, 0, 0.06)",boxShadowTop:"0 -1px 2px rgba(0, 0, 0, 0.01), 0 -2px 6px rgba(0, 0, 0, 0.06)",boxShadowRight:"1px 0 3px 0 rgba(0,0,0,0.01), 1px 0 2px 0 rgba(0,0,0,0.06)",boxShadowInset:"inset -1px 0 3px 0 rgba(0, 0, 0, 0.01), inset -2px 2px 6px 0 rgba(0,0,0,0.06)",boxShadowNoneFocus:"0 0 0 0 transparent",boxShadow1dp:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",boxShadow2dp:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)",boxShadow3dp:"0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)",boxShadow4dp:"0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)",boxShadow6dp:"0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)",boxShadow8dp:"0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)",boxShadow9dp:"0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)",boxShadow12dp:"0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20)",boxShadow16dp:"0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)",boxShadow24dp:"0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)",transition:"300ms ease-out",transitionControl:"200ms ease-out",transitionBeizer:"300ms cubic-bezier(0.755, 0.05, 0.855, 0.06)",springConfigGeneral:l.config.gentle,springConfigStiff:l.config.stiff,springConfigSlow:l.config.slow,breakpoints:{tablet:600,desktop:984,desktopHd:1200}};function Mn(e){const t=e.neutrals??Cn.neutrals,n=e.red??Cn.red,r=e.green??Cn.green,i=e.yellow??Cn.yellow;return{successColor:r[600],warningColor:i[500],errorColor:n[600],errorBackgroundColor:n["050"],successBackgroundColor:r["050"],warningBackgroundColor:i["050"],primaryLightColor:e.primary[400],primaryColor:e.primary[500],primaryDarkColor:e.primary[700],primaryBackgroundColor:e.primary["050"],primaryBgText:"#ffffff",accentColor:e.accent?.[700]??e.primary[800],greyLightColor:t[400],greyColor:t[500],greyDarkColor:t[700],greyBgText:"#ffffff",backgroundShade:t["050"],backgroundControl:Te(.05,t[100]),backgroundHover:Ee(.05,t["050"]),appBackgroundColor:"#ffffff",linkColor:e.primary[500],headingColor:t[800],textColor:t[900],textColorSecondary:t[500],darkTextColor:t[900],lightTextColor:t["050"],disabledColor:t[200],disabledBackgroundColor:Te(.05,t[100]),borderColorBase:t[300],borderColorSplit:t[200],borderColorLight:t[100],backgroundSelected:t[100],borderColorError:n[300],boxShadowControlFocus:`0 0 0 ${Fe(3)} ${Ae(.8,e.primary[500])}`,boxShadowControlFocusError:`0 0 0 ${Fe(3)} ${Ae(.8,n[500])}`,boxShadowControlFocusSuccess:`0 0 0 ${Fe(3)} ${Ae(.8,r[500])}`,boxShadowFocus:`0 0 0 2px ${Ae(.5,e.primary[500])}`,...kn,dark:{successColor:r[300],warningColor:i[300],errorColor:n[300],errorBackgroundColor:n[900],successBackgroundColor:r[900],warningBackgroundColor:i[900],primaryBackgroundColor:e.primary[800],backgroundShade:t[800],backgroundControl:Te(.05,t[700]),backgroundHover:Ee(.05,t[800]),appBackgroundColor:t[900],linkColor:e.primary[200],headingColor:t[200],textColor:t["050"],textColorSecondary:t[200],darkTextColor:t[100],lightTextColor:t[700],disabledColor:t[600],disabledBackgroundColor:Te(.04,t[900]),borderColorBase:t[500],borderColorSplit:t[600],borderColorLight:t[700],backgroundSelected:t[700],borderColorError:n[600],boxShadowControlFocus:`0 0 0 ${Fe(3)} ${Ae(.8,e.primary[500])}`,boxShadowControlFocusError:`0 0 0 ${Fe(3)} ${Ae(.8,n[500])}`,boxShadowControlFocusSuccess:`0 0 0 ${Fe(3)} ${Ae(.8,r[500])}`,boxShadowFocus:`0 0 0 2px ${Ae(.5,e.primary[500])}`}}}const Tn=Mn({primary:{"050":"#E6F6FF",100:"#BAE3FF",200:"#7CC4FA",300:"#47A3F3",400:"#2186EB",500:"#0967D2",600:"#0552B5",700:"#03449E",800:"#01337D",900:"#002159"},accent:{700:"#099AA4"}}),Dn=Mn({primary:{"050":"#EFFCF6",100:"#C6F7E2",200:"#8EEDC7",300:"#65D6AD",400:"#3EBD93",500:"#27AB83",600:"#199473",700:"#147D64",800:"#0C6B58",900:"#014D40"},accent:{700:"#421987"}}),An=Mn({primary:{"050":"#c5d9ed",100:"#f0f0f1",200:"#72aee6",300:"#4f94d4",400:"#3582c4",500:"#2271b1",600:"#135e96",700:"#0a4b78",800:"#043959",900:"#01263a"},neutrals:{"050":"#dcdcde",100:"#c3c4c7",200:"#a7aaad",300:"#8c8f94",400:"#787c82",500:"#646970",600:"#50575e",700:"#3c434a",800:"#2c3338",900:"#1d2327"},red:{"050":"#facfd2",100:"#ffabaf",200:"#ff8085",300:"#f86368",400:"#e65054",500:"#d63638",600:"#b32d2e",700:"#8a2424",800:"#691c1c",900:"#451313"},green:{"050":"#b8e6bf",100:"#68de7c",200:"#1ed14b",300:"#00ba37",400:"#00a32a",500:"#008a20",600:"#007017",700:"#005c12",800:"#00450c",900:"#003008"},yellow:{"050":"#f5e6ab",100:"#f2d675",200:"#f0c33c",300:"#dba617",400:"#bd8600",500:"#996800",600:"#755100",700:"#614200",800:"#4a3200",900:"#362400"}}),Pn=Mn({primary:{"050":"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#F44336",500:"#E53935",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C"},accent:{700:"#D50000"}}),On=Mn({primary:{"050":"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#E91E63",500:"#D81B60",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F"},accent:{700:"#C51162"}}),Rn=Mn({primary:{"050":"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C"},accent:{700:"#AA00FF"}}),Fn=Mn({primary:{"050":"#EDE7F6",100:"#D1C4E9",200:"#B39DDB",300:"#9575CD",400:"#7E57C2",500:"#673AB7",600:"#5E35B1",700:"#512DA8",800:"#4527A0",900:"#311B92"},accent:{700:"#6200EA"}}),Ln=Mn({primary:{"050":"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E"},accent:{700:"#304FFE"}}),In=Mn({primary:{"050":"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#2196F3",500:"#1E88E5",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1"},accent:{700:"#2962FF"}}),Nn=Mn({primary:{"050":"#EFEBE9",100:"#D7CCC8",200:"#BCAAA4",300:"#A1887F",400:"#8D6E63",500:"#795548",600:"#6D4C41",700:"#5D4037",800:"#4E342E",900:"#3E2723"}}),jn=Mn({primary:{"050":"#FAFAFA",100:"#F5F5F5",200:"#EEEEEE",300:"#E0E0E0",400:"#9E9E9E",500:"#757575",600:"#757575",700:"#616161",800:"#424242",900:"#212121"}}),$n=Mn({primary:{"050":"#ECEFF1",100:"#CFD8DC",200:"#B0BEC5",300:"#90A4AE",400:"#78909C",500:"#607D8B",600:"#546E7A",700:"#455A64",800:"#37474F",900:"#263238"}}),zn=new En("WPEForm Themes");function Bn(e){return 1==(null!=(t=e)&&"object"==typeof t&&!1===Array.isArray(t))&&"[object Object]"===Object.prototype.toString.call(e);var t}function Un(e){var t,n;return!1!==Bn(e)&&"function"==typeof(t=e.constructor)&&!1!==Bn(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")}zn.addItem("vividblue",{name:"Vivid Blue",config:Tn}),zn.addItem("teal",{name:"Teal",config:Dn}),zn.addItem("wp",{name:"WordPress 5.7 Palette",config:An}),zn.addItem("materialblue",{name:"Material Blue",config:In}),zn.addItem("materialbluegray",{name:"Material Blue Gray",config:$n}),zn.addItem("materialbrown",{name:"Material Brown",config:Nn}),zn.addItem("materialdeeppurple",{name:"Material Deep Purple",config:Fn}),zn.addItem("materialgray",{name:"Material Gray",config:jn}),zn.addItem("materialindigo",{name:"Material Indigo",config:Ln}),zn.addItem("materialpink",{name:"Material Pink",config:On}),zn.addItem("materialpurple",{name:"Material Purple",config:Rn}),zn.addItem("materialred",{name:"Material Red",config:Pn});var Hn={exports:{}};function Vn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Wn(e){return!!e&&!!e[Dr]}function Gn(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof n&&Function.toString.call(n)===Ar}(e)||Array.isArray(e)||!!e[Tr]||!!e.constructor[Tr]||Qn(e)||Kn(e))}function qn(e,t,n){void 0===n&&(n=!1),0===Yn(e)?(n?Object.keys:Pr)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function Yn(e){var t=e[Dr];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Qn(e)?2:Kn(e)?3:0}function Zn(e,t){return 2===Yn(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Xn(e,t,n){var r=Yn(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function Qn(e){return Er&&e instanceof Map}function Kn(e){return Cr&&e instanceof Set}function Jn(e){return e.o||e.t}function er(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Or(e);delete t[Dr];for(var n=Pr(t),r=0;r<n.length;r++){var i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function tr(e,t){return void 0===t&&(t=!1),rr(e)||Wn(e)||!Gn(e)||(Yn(e)>1&&(e.set=e.add=e.clear=e.delete=nr),Object.freeze(e),t&&qn(e,(function(e,t){return tr(t,!0)}),!0)),e}function nr(){Vn(2)}function rr(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function ir(e){var t=Rr[e];return t||Vn(18,e),t}function or(){return _r}function ar(e,t){t&&(ir("Patches"),e.u=[],e.s=[],e.v=t)}function sr(e){lr(e),e.p.forEach(cr),e.p=null}function lr(e){e===_r&&(_r=e.l)}function ur(e){return _r={p:[],l:_r,h:e,m:!0,_:0}}function cr(e){var t=e[Dr];0===t.i||1===t.i?t.j():t.g=!0}function dr(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.O||ir("ES5").S(t,e,r),r?(n[Dr].P&&(sr(t),Vn(4)),Gn(e)&&(e=hr(t,e),t.l||pr(t,e)),t.u&&ir("Patches").M(n[Dr],e,t.u,t.s)):e=hr(t,n,[]),sr(t),t.u&&t.v(t.u,t.s),e!==Mr?e:void 0}function hr(e,t,n){if(rr(t))return t;var r=t[Dr];if(!r)return qn(t,(function(i,o){return fr(e,r,t,i,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return pr(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=er(r.k):r.o;qn(3===r.i?new Set(i):i,(function(t,o){return fr(e,r,i,t,o,n)})),pr(e,i,!1),n&&e.u&&ir("Patches").R(r,n,e.u,e.s)}return r.o}function fr(e,t,n,r,i,o){if(Wn(i)){var a=hr(e,i,o&&t&&3!==t.i&&!Zn(t.D,r)?o.concat(r):void 0);if(Xn(n,r,a),!Wn(a))return;e.m=!1}if(Gn(i)&&!rr(i)){if(!e.h.F&&e._<1)return;hr(e,i),t&&t.A.l||pr(e,i)}}function pr(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&tr(t,n)}function mr(e,t){var n=e[Dr];return(n?Jn(n):e)[t]}function gr(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function vr(e){e.P||(e.P=!0,e.l&&vr(e.l))}function yr(e){e.o||(e.o=er(e.t))}function br(e,t,n){var r=Qn(t)?ir("MapSet").N(t,n):Kn(t)?ir("MapSet").T(t,n):e.O?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:or(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=r,o=Fr;n&&(i=[r],o=Lr);var a=Proxy.revocable(i,o),s=a.revoke,l=a.proxy;return r.k=l,r.j=s,l}(t,n):ir("ES5").J(t,n);return(n?n.A:or()).p.push(r),r}function xr(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return er(e)}!function(e,t){!function(r){var i=t,o=e&&e.exports==i&&e,a="object"==typeof n.g&&n.g;a.global!==a&&a.window!==a||(r=a);var s=/([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g,l=/([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,u=function(e){for(var t="",n=(e=e.replace(s,(function(e,t,n){return u(n)+t})).replace(l,"$2$1")).length;n--;)t+=e.charAt(n);return t},c={version:"0.2.0",reverse:u};if(i&&!i.nodeType)if(o)o.exports=c;else for(var d in c)c.hasOwnProperty(d)&&(i[d]=c[d]);else r.esrever=c}(this)}(Hn,Hn.exports);var wr,_r,Sr="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),Er="undefined"!=typeof Map,Cr="undefined"!=typeof Set,kr="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Mr=Sr?Symbol.for("immer-nothing"):((wr={})["immer-nothing"]=!0,wr),Tr=Sr?Symbol.for("immer-draftable"):"__$immer_draftable",Dr=Sr?Symbol.for("immer-state"):"__$immer_state",Ar=""+Object.prototype.constructor,Pr="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Or=Object.getOwnPropertyDescriptors||function(e){var t={};return Pr(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},Rr={},Fr={get:function(e,t){if(t===Dr)return e;var n=Jn(e);if(!Zn(n,t))return function(e,t,n){var r,i=gr(t,n);return i?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!Gn(r)?r:r===mr(e.t,t)?(yr(e),e.o[t]=br(e.A.h,r,e)):r},has:function(e,t){return t in Jn(e)},ownKeys:function(e){return Reflect.ownKeys(Jn(e))},set:function(e,t,n){var r=gr(Jn(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=mr(Jn(e),t),o=null==i?void 0:i[Dr];if(o&&o.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,i)&&(void 0!==n||Zn(e.t,t)))return!0;yr(e),vr(e)}return e.o[t]===n&&"number"!=typeof n||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==mr(e.t,t)||t in e.t?(e.D[t]=!1,yr(e),vr(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Jn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){Vn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Vn(12)}},Lr={};qn(Fr,(function(e,t){Lr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Lr.deleteProperty=function(e,t){return Fr.deleteProperty.call(this,e[0],t)},Lr.set=function(e,t,n){return Fr.set.call(this,e[0],t,n,e[0])};var Ir=function(){function e(e){var t=this;this.O=kr,this.F=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var i=n;n=e;var o=t;return function(e){var t=this;void 0===e&&(e=i);for(var r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return o.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(a))}))}}var a;if("function"!=typeof n&&Vn(6),void 0!==r&&"function"!=typeof r&&Vn(7),Gn(e)){var s=ur(t),l=br(t,e,void 0),u=!0;try{a=n(l),u=!1}finally{u?sr(s):lr(s)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return ar(s,r),dr(e,s)}),(function(e){throw sr(s),e})):(ar(s,r),dr(a,s))}if(!e||"object"!=typeof e){if((a=n(e))===Mr)return;return void 0===a&&(a=e),t.F&&tr(a,!0),a}Vn(21,e)},this.produceWithPatches=function(e,n){return"function"==typeof e?function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(i))}))}:[t.produce(e,n,(function(e,t){r=e,i=t})),r,i];var r,i},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){Gn(e)||Vn(8),Wn(e)&&(e=function(e){return Wn(e)||Vn(22,e),function e(t){if(!Gn(t))return t;var n,r=t[Dr],i=Yn(t);if(r){if(!r.P&&(r.i<4||!ir("ES5").K(r)))return r.t;r.I=!0,n=xr(t,i),r.I=!1}else n=xr(t,i);return qn(n,(function(t,i){r&&function(e,t){return 2===Yn(e)?e.get(t):e[t]}(r.t,t)===i||Xn(n,t,e(i))})),3===i?new Set(n):n}(e)}(e));var t=ur(this),n=br(this,e,void 0);return n[Dr].C=!0,lr(t),n},t.finishDraft=function(e,t){var n=(e&&e[Dr]).A;return ar(n,t),dr(void 0,n)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!kr&&Vn(20),this.O=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var i=ir("Patches").$;return Wn(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(n+1))}))},e}(),Nr=new Ir,jr=Nr.produce;Nr.produceWithPatches.bind(Nr),Nr.setAutoFreeze.bind(Nr),Nr.setUseProxies.bind(Nr),Nr.applyPatches.bind(Nr);var $r=Nr.createDraft.bind(Nr),zr=Nr.finishDraft.bind(Nr),Br=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!=i--;){var a=o[i];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n};function Ur(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Hr=new WeakMap,Vr=new WeakMap,Wr=new WeakMap,Gr=new WeakMap,qr=new WeakMap;function Yr(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Zr=/\s/,Xr=/[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,Qr=/['\u2018\u2019]/,Kr=e=>{for(var t=0,n=null,r=e.charCodeAt(0);r;)if(ti(r)){var i=ni(r,e,t);if("SURR"===n||"BMP"===n)break;t+=2,n=i?"MOD":"SURR",r=e.charCodeAt(t)}else if(8205!==r)if(ii(r)){if(n&&"ZWJ"!==n&&"VAR"!==n)break;t+=1,n="BMP",r=e.charCodeAt(t)}else{if(!ri(r)){if("MOD"===n){t+=1;break}break}if(n&&"ZWJ"!==n)break;t+=1,n="VAR",r=e.charCodeAt(t)}else t+=1,n="ZWJ",r=e.charCodeAt(t);return t||1},Jr=e=>{for(var t,n=0,r=0,i=!1;t=e.charAt(r);){var o=Kr(t);t=e.slice(r,r+o);var a=e.slice(r+o);if(ei(t,a))i=!0,n+=o;else{if(i)break;n+=o}r+=o}return n},ei=(e,t)=>{if(Zr.test(e))return!1;if(Qr.test(e)){var n=t.charAt(0),r=Kr(n);n=t.slice(0,r);var i=t.slice(r);if(ei(n,i))return!0}return!Xr.test(e)},ti=e=>55296<=e&&e<=57343,ni=(e,t,n)=>{if(55356===e){var r=t.charCodeAt(n+1);return r<=57343&&r>=57339}return!1},ri=e=>e<=65039&&e>=65024,ii=e=>10084===e||9794===e||9792===e||9760===e||9877===e||9992===e||9711===e,oi={isAncestor:e=>Un(e)&&hi.isNodeList(e.children),isElement:e=>Un(e)&&hi.isNodeList(e.children)&&!ui.isEditor(e),isElementList:e=>Array.isArray(e)&&e.every((e=>oi.isElement(e))),isElementProps:e=>void 0!==e.children,matches(e,t){for(var n in t)if("children"!==n&&e[n]!==t[n])return!1;return!0}};function ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function si(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ai(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ai(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var li=new WeakMap,ui={above(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{voids:n=!1,mode:r="lowest",at:i=e.selection,match:o}=t;if(i){var a=ui.path(e,i),s="lowest"===r;for(var[l,u]of ui.levels(e,{at:a,voids:n,match:o,reverse:s}))if(!Ei.isText(l)&&!gi.equals(a,u))return[l,u]}},addMark(e,t,n){e.addMark(t,n)},after(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i={anchor:ui.point(e,t,{edge:"end"}),focus:ui.end(e,[])},{distance:o=1}=r,a=0;for(var s of ui.positions(e,si(si({},r),{},{at:i}))){if(a>o)break;0!==a&&(n=s),a++}return n},before(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i={anchor:ui.start(e,[]),focus:ui.point(e,t,{edge:"start"})},{distance:o=1}=r,a=0;for(var s of ui.positions(e,si(si({},r),{},{at:i,reverse:!0}))){if(a>o)break;0!==a&&(n=s),a++}return n},deleteBackward(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{unit:n="character"}=t;e.deleteBackward(n)},deleteForward(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{unit:n="character"}=t;e.deleteForward(n)},deleteFragment(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{direction:n="forward"}=t;e.deleteFragment(n)},edges:(e,t)=>[ui.start(e,t),ui.end(e,t)],end:(e,t)=>ui.point(e,t,{edge:"end"}),first(e,t){var n=ui.path(e,t,{edge:"start"});return ui.node(e,n)},fragment(e,t){var n=ui.range(e,t);return hi.fragment(e,n)},hasBlocks:(e,t)=>t.children.some((t=>ui.isBlock(e,t))),hasInlines:(e,t)=>t.children.some((t=>Ei.isText(t)||ui.isInline(e,t))),hasTexts:(e,t)=>t.children.every((e=>Ei.isText(e))),insertBreak(e){e.insertBreak()},insertFragment(e,t){e.insertFragment(t)},insertNode(e,t){e.insertNode(t)},insertText(e,t){e.insertText(t)},isBlock:(e,t)=>oi.isElement(t)&&!e.isInline(t),isEditor(e){if(!Un(e))return!1;var t=li.get(e);if(void 0!==t)return t;var n="function"==typeof e.addMark&&"function"==typeof e.apply&&"function"==typeof e.deleteBackward&&"function"==typeof e.deleteForward&&"function"==typeof e.deleteFragment&&"function"==typeof e.insertBreak&&"function"==typeof e.insertFragment&&"function"==typeof e.insertNode&&"function"==typeof e.insertText&&"function"==typeof e.isInline&&"function"==typeof e.isVoid&&"function"==typeof e.normalizeNode&&"function"==typeof e.onChange&&"function"==typeof e.removeMark&&(null===e.marks||Un(e.marks))&&(null===e.selection||wi.isRange(e.selection))&&hi.isNodeList(e.children)&&mi.isOperationList(e.operations);return li.set(e,n),n},isEnd(e,t,n){var r=ui.end(e,n);return bi.equals(t,r)},isEdge:(e,t,n)=>ui.isStart(e,t,n)||ui.isEnd(e,t,n),isEmpty(e,t){var{children:n}=t,[r]=n;return 0===n.length||1===n.length&&Ei.isText(r)&&""===r.text&&!e.isVoid(t)},isInline:(e,t)=>oi.isElement(t)&&e.isInline(t),isNormalizing(e){var t=Vr.get(e);return void 0===t||t},isStart(e,t,n){if(0!==t.offset)return!1;var r=ui.start(e,n);return bi.equals(t,r)},isVoid:(e,t)=>oi.isElement(t)&&e.isVoid(t),last(e,t){var n=ui.path(e,t,{edge:"end"});return ui.node(e,n)},leaf(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=ui.path(e,t,n);return[hi.leaf(e,r),r]},*levels(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{at:n=e.selection,reverse:r=!1,voids:i=!1}=t,{match:o}=t;if(null==o&&(o=()=>!0),n){var a=[],s=ui.path(e,n);for(var[l,u]of hi.levels(e,s))if(o(l,u)&&(a.push([l,u]),!i&&ui.isVoid(e,l)))break;r&&a.reverse(),yield*a}},marks(e){var{marks:t,selection:n}=e;if(!n)return null;if(t)return t;if(wi.isExpanded(n)){var[r]=ui.nodes(e,{match:Ei.isText});if(r){var[i]=r;return Yr(i,["text"])}return{}}var{anchor:o}=n,{path:a}=o,[s]=ui.leaf(e,a);if(0===o.offset){var l=ui.previous(e,{at:a,match:Ei.isText}),u=ui.above(e,{match:t=>ui.isBlock(e,t)});if(l&&u){var[c,d]=l,[,h]=u;gi.isAncestor(h,d)&&(s=c)}}return Yr(s,["text"])},next(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{mode:n="lowest",voids:r=!1}=t,{match:i,at:o=e.selection}=t;if(o){var a=ui.after(e,o,{voids:r});if(a){var[,s]=ui.last(e,[]),l=[a.path,s];if(gi.isPath(o)&&0===o.length)throw new Error("Cannot get the next node from the root node!");if(null==i)if(gi.isPath(o)){var[u]=ui.parent(e,o);i=e=>u.children.includes(e)}else i=()=>!0;var[c]=ui.nodes(e,{at:l,match:i,mode:n,voids:r});return c}}},node(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=ui.path(e,t,n);return[hi.get(e,r),r]},*nodes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{at:n=e.selection,mode:r="all",universal:i=!1,reverse:o=!1,voids:a=!1}=t,{match:s}=t;if(s||(s=()=>!0),n){var l,u;if(ci.isSpan(n))l=n[0],u=n[1];else{var c=ui.path(e,n,{edge:"start"}),d=ui.path(e,n,{edge:"end"});l=o?d:c,u=o?c:d}var h,f=hi.nodes(e,{reverse:o,from:l,to:u,pass:t=>{var[n]=t;return!a&&ui.isVoid(e,n)}}),p=[];for(var[m,g]of f){var v=h&&0===gi.compare(g,h[1]);if("highest"!==r||!v)if(s(m,g))if("lowest"===r&&v)h=[m,g];else{var y="lowest"===r?h:[m,g];y&&(i?p.push(y):yield y),h=[m,g]}else if(i&&!v&&Ei.isText(m))return}"lowest"===r&&h&&(i?p.push(h):yield h),i&&(yield*p)}},normalize(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{force:n=!1}=t,r=e=>Hr.get(e)||[];if(ui.isNormalizing(e)){if(n){var i=Array.from(hi.nodes(e),(e=>{var[,t]=e;return t}));Hr.set(e,i)}0!==r(e).length&&ui.withoutNormalizing(e,(()=>{for(var t of r(e))if(hi.has(e,t)){var[n,i]=ui.node(e,t);oi.isElement(n)&&0===n.children.length&&zi.insertNodes(e,{text:""},{at:t.concat(0),voids:!0})}for(var o=42*r(e).length,a=0;0!==r(e).length;){if(a>o)throw new Error("\n            Could not completely normalize the editor after ".concat(o," iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));var s=r(e).pop();if(hi.has(e,s)){var l=ui.node(e,s);e.normalizeNode(l)}a++}}))}},parent(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=ui.path(e,t,n),i=gi.parent(r);return ui.node(e,i)},path(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{depth:r,edge:i}=n;if(gi.isPath(t))if("start"===i){var[,o]=hi.first(e,t);t=o}else if("end"===i){var[,a]=hi.last(e,t);t=a}return wi.isRange(t)&&(t="start"===i?wi.start(t):"end"===i?wi.end(t):gi.common(t.anchor.path,t.focus.path)),bi.isPoint(t)&&(t=t.path),null!=r&&(t=t.slice(0,r)),t},hasPath:(e,t)=>hi.has(e,t),pathRef(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{affinity:r="forward"}=n,i={current:t,affinity:r,unref(){var{current:t}=i;return ui.pathRefs(e).delete(i),i.current=null,t}};return ui.pathRefs(e).add(i),i},pathRefs(e){var t=Wr.get(e);return t||(t=new Set,Wr.set(e,t)),t},point(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{edge:r="start"}=n;if(gi.isPath(t)){var i;if("end"===r){var[,o]=hi.last(e,t);i=o}else{var[,a]=hi.first(e,t);i=a}var s=hi.get(e,i);if(!Ei.isText(s))throw new Error("Cannot get the ".concat(r," point in the node at path [").concat(t,"] because it has no ").concat(r," text node."));return{path:i,offset:"end"===r?s.text.length:0}}if(wi.isRange(t)){var[l,u]=wi.edges(t);return"start"===r?l:u}return t},pointRef(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{affinity:r="forward"}=n,i={current:t,affinity:r,unref(){var{current:t}=i;return ui.pointRefs(e).delete(i),i.current=null,t}};return ui.pointRefs(e).add(i),i},pointRefs(e){var t=Gr.get(e);return t||(t=new Set,Gr.set(e,t)),t},*positions(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{at:n=e.selection,unit:r="offset",reverse:i=!1,voids:o=!1}=t;if(n){var a=ui.range(e,n),[s,l]=wi.edges(a),u=i?l:s,c=!1,d="",h=0,f=0,p=0;for(var[m,g]of ui.nodes(e,{at:n,reverse:i,voids:o})){if(oi.isElement(m)){if(!o&&e.isVoid(m)){yield ui.start(e,g);continue}if(e.isInline(m))continue;if(ui.hasInlines(e,m)){var v=gi.isAncestor(g,l.path)?l:ui.end(e,g),y=gi.isAncestor(g,s.path)?s:ui.start(e,g);d=ui.string(e,{anchor:y,focus:v},{voids:o}),d=i?Hn.exports.reverse(d):d,c=!0}}if(Ei.isText(m)){var b=gi.equals(g,u.path);for(b?(f=i?u.offset:m.text.length-u.offset,p=u.offset):(f=m.text.length,p=i?f:0),(b||c||"offset"===r)&&(yield{path:g,offset:p},c=!1);;){if(0===h){if(""===d)break;h=x(d,r),d=d.slice(h)}if(p=i?p-h:p+h,(f-=h)<0){h=-f;break}h=0,yield{path:g,offset:p}}}}}function x(e,t){return"character"===t?Kr(e):"word"===t?Jr(e):"line"===t||"block"===t?e.length:1}},previous(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{mode:n="lowest",voids:r=!1}=t,{match:i,at:o=e.selection}=t;if(o){var a=ui.before(e,o,{voids:r});if(a){var[,s]=ui.first(e,[]),l=[a.path,s];if(gi.isPath(o)&&0===o.length)throw new Error("Cannot get the previous node from the root node!");if(null==i)if(gi.isPath(o)){var[u]=ui.parent(e,o);i=e=>u.children.includes(e)}else i=()=>!0;var[c]=ui.nodes(e,{reverse:!0,at:l,match:i,mode:n,voids:r});return c}}},range:(e,t,n)=>wi.isRange(t)&&!n?t:{anchor:ui.start(e,t),focus:ui.end(e,n||t)},rangeRef(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{affinity:r="forward"}=n,i={current:t,affinity:r,unref(){var{current:t}=i;return ui.rangeRefs(e).delete(i),i.current=null,t}};return ui.rangeRefs(e).add(i),i},rangeRefs(e){var t=qr.get(e);return t||(t=new Set,qr.set(e,t)),t},removeMark(e,t){e.removeMark(t)},start:(e,t)=>ui.point(e,t,{edge:"start"}),string(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{voids:r=!1}=n,i=ui.range(e,t),[o,a]=wi.edges(i),s="";for(var[l,u]of ui.nodes(e,{at:i,match:Ei.isText,voids:r})){var c=l.text;gi.equals(u,a.path)&&(c=c.slice(0,a.offset)),gi.equals(u,o.path)&&(c=c.slice(o.offset)),s+=c}return s},unhangRange(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{voids:r=!1}=n,[i,o]=wi.edges(t);if(0!==i.offset||0!==o.offset||wi.isCollapsed(t))return t;var a=ui.above(e,{at:o,match:t=>ui.isBlock(e,t)}),s=a?a[1]:[],l={anchor:ui.start(e,[]),focus:o},u=!0;for(var[c,d]of ui.nodes(e,{at:l,match:Ei.isText,reverse:!0,voids:r}))if(u)u=!1;else if(""!==c.text||gi.isBefore(d,s)){o={path:d,offset:c.text.length};break}return{anchor:i,focus:o}},void(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return ui.above(e,si(si({},t),{},{match:t=>ui.isVoid(e,t)}))},withoutNormalizing(e,t){var n=ui.isNormalizing(e);Vr.set(e,!1);try{t()}finally{Vr.set(e,n)}ui.normalize(e)}},ci={isSpan:e=>Array.isArray(e)&&2===e.length&&e.every(gi.isPath)},di=new WeakMap,hi={ancestor(e,t){var n=hi.get(e,t);if(Ei.isText(n))throw new Error("Cannot get the ancestor node at path [".concat(t,"] because it refers to a text node instead: ").concat(n));return n},*ancestors(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};for(var r of gi.ancestors(t,n)){var i=[hi.ancestor(e,r),r];yield i}},child(e,t){if(Ei.isText(e))throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(e)));var n=e.children[t];if(null==n)throw new Error("Cannot get child at index `".concat(t,"` in node: ").concat(JSON.stringify(e)));return n},*children(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{reverse:r=!1}=n,i=hi.ancestor(e,t),{children:o}=i,a=r?o.length-1:0;r?a>=0:a<o.length;){var s=hi.child(i,a),l=t.concat(a);yield[s,l],a=r?a-1:a+1}},common(e,t,n){var r=gi.common(t,n);return[hi.get(e,r),r]},descendant(e,t){var n=hi.get(e,t);if(ui.isEditor(n))throw new Error("Cannot get the descendant node at path [".concat(t,"] because it refers to the root editor node instead: ").concat(n));return n},*descendants(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var[n,r]of hi.nodes(e,t))0!==r.length&&(yield[n,r])},*elements(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var[n,r]of hi.nodes(e,t))oi.isElement(n)&&(yield[n,r])},extractProps:e=>oi.isAncestor(e)?Yr(e,["children"]):Yr(e,["text"]),first(e,t){for(var n=t.slice(),r=hi.get(e,n);r&&!Ei.isText(r)&&0!==r.children.length;)r=r.children[0],n.push(0);return[r,n]},fragment(e,t){if(Ei.isText(e))throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(e)));var n=jr({children:e.children},(e=>{var[n,r]=wi.edges(t),i=hi.nodes(e,{reverse:!0,pass:e=>{var[,n]=e;return!wi.includes(t,n)}});for(var[,o]of i){if(!wi.includes(t,o)){var a=hi.parent(e,o),s=o[o.length-1];a.children.splice(s,1)}if(gi.equals(o,r.path)){var l=hi.leaf(e,o);l.text=l.text.slice(0,r.offset)}if(gi.equals(o,n.path)){var u=hi.leaf(e,o);u.text=u.text.slice(n.offset)}}ui.isEditor(e)&&(e.selection=null)}));return n.children},get(e,t){for(var n=e,r=0;r<t.length;r++){var i=t[r];if(Ei.isText(n)||!n.children[i])throw new Error("Cannot find a descendant at path [".concat(t,"] in node: ").concat(JSON.stringify(e)));n=n.children[i]}return n},has(e,t){for(var n=e,r=0;r<t.length;r++){var i=t[r];if(Ei.isText(n)||!n.children[i])return!1;n=n.children[i]}return!0},isNode:e=>Ei.isText(e)||oi.isElement(e)||ui.isEditor(e),isNodeList(e){if(!Array.isArray(e))return!1;var t=di.get(e);if(void 0!==t)return t;var n=e.every((e=>hi.isNode(e)));return di.set(e,n),n},last(e,t){for(var n=t.slice(),r=hi.get(e,n);r&&!Ei.isText(r)&&0!==r.children.length;){var i=r.children.length-1;r=r.children[i],n.push(i)}return[r,n]},leaf(e,t){var n=hi.get(e,t);if(!Ei.isText(n))throw new Error("Cannot get the leaf node at path [".concat(t,"] because it refers to a non-leaf node: ").concat(n));return n},*levels(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};for(var r of gi.levels(t,n)){var i=hi.get(e,r);yield[i,r]}},matches:(e,t)=>oi.isElement(e)&&oi.isElementProps(t)&&oi.matches(e,t)||Ei.isText(e)&&Ei.isTextProps(t)&&Ei.matches(e,t),*nodes(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{pass:n,reverse:r=!1}=t,{from:i=[],to:o}=t,a=new Set,s=[],l=e;!o||!(r?gi.isBefore(s,o):gi.isAfter(s,o));)if(a.has(l)||(yield[l,s]),a.has(l)||Ei.isText(l)||0===l.children.length||null!=n&&!1!==n([l,s])){if(0===s.length)break;if(!r){var u=gi.next(s);if(hi.has(e,u)){s=u,l=hi.get(e,s);continue}}r&&0!==s[s.length-1]?(s=gi.previous(s),l=hi.get(e,s)):(s=gi.parent(s),l=hi.get(e,s),a.add(l))}else{a.add(l);var c=r?l.children.length-1:0;gi.isAncestor(s,i)&&(c=i[s.length]),s=s.concat(c),l=hi.get(e,s)}},parent(e,t){var n=gi.parent(t),r=hi.get(e,n);if(Ei.isText(r))throw new Error("Cannot get the parent of path [".concat(t,"] because it does not exist in the root."));return r},string:e=>Ei.isText(e)?e.text:e.children.map(hi.string).join(""),*texts(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var[n,r]of hi.nodes(e,t))Ei.isText(n)&&(yield[n,r])}};function fi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pi(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fi(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fi(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var mi={isNodeOperation:e=>mi.isOperation(e)&&e.type.endsWith("_node"),isOperation(e){if(!Un(e))return!1;switch(e.type){case"insert_node":case"remove_node":return gi.isPath(e.path)&&hi.isNode(e.node);case"insert_text":case"remove_text":return"number"==typeof e.offset&&"string"==typeof e.text&&gi.isPath(e.path);case"merge_node":return"number"==typeof e.position&&gi.isPath(e.path)&&Un(e.properties);case"move_node":return gi.isPath(e.path)&&gi.isPath(e.newPath);case"set_node":return gi.isPath(e.path)&&Un(e.properties)&&Un(e.newProperties);case"set_selection":return null===e.properties&&wi.isRange(e.newProperties)||null===e.newProperties&&wi.isRange(e.properties)||Un(e.properties)&&Un(e.newProperties);case"split_node":return gi.isPath(e.path)&&"number"==typeof e.position&&Un(e.properties);default:return!1}},isOperationList:e=>Array.isArray(e)&&e.every((e=>mi.isOperation(e))),isSelectionOperation:e=>mi.isOperation(e)&&e.type.endsWith("_selection"),isTextOperation:e=>mi.isOperation(e)&&e.type.endsWith("_text"),inverse(e){switch(e.type){case"insert_node":return pi(pi({},e),{},{type:"remove_node"});case"insert_text":return pi(pi({},e),{},{type:"remove_text"});case"merge_node":return pi(pi({},e),{},{type:"split_node",path:gi.previous(e.path)});case"move_node":var{newPath:t,path:n}=e;if(gi.equals(t,n))return e;if(gi.isSibling(n,t))return pi(pi({},e),{},{path:t,newPath:n});var r=gi.transform(n,e),i=gi.transform(gi.next(n),e);return pi(pi({},e),{},{path:r,newPath:i});case"remove_node":return pi(pi({},e),{},{type:"insert_node"});case"remove_text":return pi(pi({},e),{},{type:"insert_text"});case"set_node":var{properties:o,newProperties:a}=e;return pi(pi({},e),{},{properties:a,newProperties:o});case"set_selection":var{properties:s,newProperties:l}=e;return pi(pi({},e),{},null==s?{properties:l,newProperties:null}:null==l?{properties:null,newProperties:s}:{properties:l,newProperties:s});case"split_node":return pi(pi({},e),{},{type:"merge_node",path:gi.next(e.path)})}}},gi={ancestors(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{reverse:n=!1}=t,r=gi.levels(e,t);return n?r.slice(1):r.slice(0,-1)},common(e,t){for(var n=[],r=0;r<e.length&&r<t.length;r++){var i=e[r];if(i!==t[r])break;n.push(i)}return n},compare(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0},endsAfter(e,t){var n=e.length-1,r=e.slice(0,n),i=t.slice(0,n),o=e[n],a=t[n];return gi.equals(r,i)&&o>a},endsAt(e,t){var n=e.length,r=e.slice(0,n),i=t.slice(0,n);return gi.equals(r,i)},endsBefore(e,t){var n=e.length-1,r=e.slice(0,n),i=t.slice(0,n),o=e[n],a=t[n];return gi.equals(r,i)&&o<a},equals:(e,t)=>e.length===t.length&&e.every(((e,n)=>e===t[n])),hasPrevious:e=>e[e.length-1]>0,isAfter:(e,t)=>1===gi.compare(e,t),isAncestor:(e,t)=>e.length<t.length&&0===gi.compare(e,t),isBefore:(e,t)=>-1===gi.compare(e,t),isChild:(e,t)=>e.length===t.length+1&&0===gi.compare(e,t),isCommon:(e,t)=>e.length<=t.length&&0===gi.compare(e,t),isDescendant:(e,t)=>e.length>t.length&&0===gi.compare(e,t),isParent:(e,t)=>e.length+1===t.length&&0===gi.compare(e,t),isPath:e=>Array.isArray(e)&&(0===e.length||"number"==typeof e[0]),isSibling(e,t){if(e.length!==t.length)return!1;var n=e.slice(0,-1),r=t.slice(0,-1);return e[e.length-1]!==t[t.length-1]&&gi.equals(n,r)},levels(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{reverse:n=!1}=t,r=[],i=0;i<=e.length;i++)r.push(e.slice(0,i));return n&&r.reverse(),r},next(e){if(0===e.length)throw new Error("Cannot get the next path of a root path [".concat(e,"], because it has no next index."));var t=e[e.length-1];return e.slice(0,-1).concat(t+1)},parent(e){if(0===e.length)throw new Error("Cannot get the parent path of the root path [".concat(e,"]."));return e.slice(0,-1)},previous(e){if(0===e.length)throw new Error("Cannot get the previous path of a root path [".concat(e,"], because it has no previous index."));var t=e[e.length-1];if(t<=0)throw new Error("Cannot get the previous path of a first child path [".concat(e,"] because it would result in a negative index."));return e.slice(0,-1).concat(t-1)},relative(e,t){if(!gi.isAncestor(t,e)&&!gi.equals(e,t))throw new Error("Cannot get the relative path of [".concat(e,"] inside ancestor [").concat(t,"], because it is not above or equal to the path."));return e.slice(t.length)},transform(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return jr(e,(r=>{var{affinity:i="forward"}=n;if(0!==e.length)switch(t.type){case"insert_node":var{path:o}=t;(gi.equals(o,r)||gi.endsBefore(o,r)||gi.isAncestor(o,r))&&(r[o.length-1]+=1);break;case"remove_node":var{path:a}=t;if(gi.equals(a,r)||gi.isAncestor(a,r))return null;gi.endsBefore(a,r)&&(r[a.length-1]-=1);break;case"merge_node":var{path:s,position:l}=t;gi.equals(s,r)||gi.endsBefore(s,r)?r[s.length-1]-=1:gi.isAncestor(s,r)&&(r[s.length-1]-=1,r[s.length]+=l);break;case"split_node":var{path:u,position:c}=t;if(gi.equals(u,r)){if("forward"===i)r[r.length-1]+=1;else if("backward"!==i)return null}else gi.endsBefore(u,r)?r[u.length-1]+=1:gi.isAncestor(u,r)&&e[u.length]>=c&&(r[u.length-1]+=1,r[u.length]-=c);break;case"move_node":var{path:d,newPath:h}=t;if(gi.equals(d,h))return;if(gi.isAncestor(d,r)||gi.equals(d,r)){var f=h.slice();return gi.endsBefore(d,h)&&d.length<h.length&&(f[d.length-1]-=1),f.concat(r.slice(d.length))}gi.isSibling(d,h)&&(gi.isAncestor(h,r)||gi.equals(h,r))?gi.endsBefore(d,r)?r[d.length-1]-=1:r[d.length-1]+=1:gi.endsBefore(h,r)||gi.equals(h,r)||gi.isAncestor(h,r)?(gi.endsBefore(d,r)&&(r[d.length-1]-=1),r[h.length-1]+=1):gi.endsBefore(d,r)&&(gi.equals(h,r)&&(r[h.length-1]+=1),r[d.length-1]-=1)}}))}};function vi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function yi(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?vi(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vi(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var bi={compare(e,t){var n=gi.compare(e.path,t.path);return 0===n?e.offset<t.offset?-1:e.offset>t.offset?1:0:n},isAfter:(e,t)=>1===bi.compare(e,t),isBefore:(e,t)=>-1===bi.compare(e,t),equals:(e,t)=>e.offset===t.offset&&gi.equals(e.path,t.path),isPoint:e=>Un(e)&&"number"==typeof e.offset&&gi.isPath(e.path),transform(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return jr(e,(e=>{var{affinity:r="forward"}=n,{path:i,offset:o}=e;switch(t.type){case"insert_node":case"move_node":e.path=gi.transform(i,t,n);break;case"insert_text":gi.equals(t.path,i)&&t.offset<=o&&(e.offset+=t.text.length);break;case"merge_node":gi.equals(t.path,i)&&(e.offset+=t.position),e.path=gi.transform(i,t,n);break;case"remove_text":gi.equals(t.path,i)&&t.offset<=o&&(e.offset-=Math.min(o-t.offset,t.text.length));break;case"remove_node":if(gi.equals(t.path,i)||gi.isAncestor(t.path,i))return null;e.path=gi.transform(i,t,n);break;case"split_node":if(gi.equals(t.path,i)){if(t.position===o&&null==r)return null;(t.position<o||t.position===o&&"forward"===r)&&(e.offset-=t.position,e.path=gi.transform(i,t,yi(yi({},n),{},{affinity:"forward"})))}else e.path=gi.transform(i,t,n)}}))}};function xi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var wi={edges(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{reverse:n=!1}=t,{anchor:r,focus:i}=e;return wi.isBackward(e)===n?[r,i]:[i,r]},end(e){var[,t]=wi.edges(e);return t},equals:(e,t)=>bi.equals(e.anchor,t.anchor)&&bi.equals(e.focus,t.focus),includes(e,t){if(wi.isRange(t)){if(wi.includes(e,t.anchor)||wi.includes(e,t.focus))return!0;var[n,r]=wi.edges(e),[i,o]=wi.edges(t);return bi.isBefore(n,i)&&bi.isAfter(r,o)}var[a,s]=wi.edges(e),l=!1,u=!1;return bi.isPoint(t)?(l=bi.compare(t,a)>=0,u=bi.compare(t,s)<=0):(l=gi.compare(t,a.path)>=0,u=gi.compare(t,s.path)<=0),l&&u},intersection(e,t){var n=Yr(e,["anchor","focus"]),[r,i]=wi.edges(e),[o,a]=wi.edges(t),s=bi.isBefore(r,o)?o:r,l=bi.isBefore(i,a)?i:a;return bi.isBefore(l,s)?null:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xi(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xi(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({anchor:s,focus:l},n)},isBackward(e){var{anchor:t,focus:n}=e;return bi.isAfter(t,n)},isCollapsed(e){var{anchor:t,focus:n}=e;return bi.equals(t,n)},isExpanded:e=>!wi.isCollapsed(e),isForward:e=>!wi.isBackward(e),isRange:e=>Un(e)&&bi.isPoint(e.anchor)&&bi.isPoint(e.focus),*points(e){yield[e.anchor,"anchor"],yield[e.focus,"focus"]},start(e){var[t]=wi.edges(e);return t},transform(e,t){var n,r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{affinity:o="inward"}=i;return"inward"===o?wi.isForward(e)?(n="forward",r="backward"):(n="backward",r="forward"):"outward"===o?wi.isForward(e)?(n="backward",r="forward"):(n="forward",r="backward"):(n=o,r=o),jr(e,(e=>{var i=bi.transform(e.anchor,t,{affinity:n}),o=bi.transform(e.focus,t,{affinity:r});if(!i||!o)return null;e.anchor=i,e.focus=o}))}};function _i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Si(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_i(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ei={equals(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{loose:r=!1}=n;function i(e){return Yr(e,["text"])}return Br(r?i(e):e,r?i(t):t)},isText:e=>Un(e)&&"string"==typeof e.text,isTextList:e=>Array.isArray(e)&&e.every((e=>Ei.isText(e))),isTextProps:e=>void 0!==e.text,matches(e,t){for(var n in t)if("text"!==n&&(!e.hasOwnProperty(n)||e[n]!==t[n]))return!1;return!0},decorations(e,t){var n=[Si({},e)];for(var r of t){var i=Yr(r,["anchor","focus"]),[o,a]=wi.edges(r),s=[],l=0;for(var u of n){var{length:c}=u.text,d=l;if(l+=c,o.offset<=d&&a.offset>=l)Object.assign(u,i),s.push(u);else if(o.offset!==a.offset&&(o.offset===l||a.offset===d)||o.offset>l||a.offset<d||a.offset===d&&0!==d)s.push(u);else{var h=u,f=void 0,p=void 0;if(a.offset<l){var m=a.offset-d;p=Si(Si({},h),{},{text:h.text.slice(m)}),h=Si(Si({},h),{},{text:h.text.slice(0,m)})}if(o.offset>d){var g=o.offset-d;f=Si(Si({},h),{},{text:h.text.slice(0,g)}),h=Si(Si({},h),{},{text:h.text.slice(g)})}Object.assign(h,i),f&&s.push(f),s.push(h),p&&s.push(p)}}n=s}return n}};function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ki(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ci(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Mi={transform(e,t){e.children=$r(e.children);var n=e.selection&&$r(e.selection);try{n=((e,t,n)=>{switch(n.type){case"insert_node":var{path:r,node:i}=n,o=hi.parent(e,r),a=r[r.length-1];if(a>o.children.length)throw new Error('Cannot apply an "insert_node" operation at path ['.concat(r,"] because the destination is past the end of the node."));if(o.children.splice(a,0,i),t)for(var[s,l]of wi.points(t))t[l]=bi.transform(s,n);break;case"insert_text":var{path:u,offset:c,text:d}=n;if(0===d.length)break;var h=hi.leaf(e,u),f=h.text.slice(0,c),p=h.text.slice(c);if(h.text=f+d+p,t)for(var[m,g]of wi.points(t))t[g]=bi.transform(m,n);break;case"merge_node":var{path:v}=n,y=hi.get(e,v),b=gi.previous(v),x=hi.get(e,b),w=hi.parent(e,v),_=v[v.length-1];if(Ei.isText(y)&&Ei.isText(x))x.text+=y.text;else{if(Ei.isText(y)||Ei.isText(x))throw new Error('Cannot apply a "merge_node" operation at path ['.concat(v,"] to nodes of different interfaces: ").concat(y," ").concat(x));x.children.push(...y.children)}if(w.children.splice(_,1),t)for(var[S,E]of wi.points(t))t[E]=bi.transform(S,n);break;case"move_node":var{path:C,newPath:k}=n;if(gi.isAncestor(C,k))throw new Error("Cannot move a path [".concat(C,"] to new path [").concat(k,"] because the destination is inside itself."));var M=hi.get(e,C),T=hi.parent(e,C),D=C[C.length-1];T.children.splice(D,1);var A=gi.transform(C,n),P=hi.get(e,gi.parent(A)),O=A[A.length-1];if(P.children.splice(O,0,M),t)for(var[R,F]of wi.points(t))t[F]=bi.transform(R,n);break;case"remove_node":var{path:L}=n,I=L[L.length-1];if(hi.parent(e,L).children.splice(I,1),t)for(var[N,j]of wi.points(t)){var $=bi.transform(N,n);if(null!=t&&null!=$)t[j]=$;else{var z=void 0,B=void 0;for(var[U,H]of hi.texts(e)){if(-1!==gi.compare(H,L)){B=[U,H];break}z=[U,H]}z?(N.path=z[1],N.offset=z[0].text.length):B?(N.path=B[1],N.offset=0):t=null}}break;case"remove_text":var{path:V,offset:W,text:G}=n;if(0===G.length)break;var q=hi.leaf(e,V),Y=q.text.slice(0,W),Z=q.text.slice(W+G.length);if(q.text=Y+Z,t)for(var[X,Q]of wi.points(t))t[Q]=bi.transform(X,n);break;case"set_node":var{path:K,properties:J,newProperties:ee}=n;if(0===K.length)throw new Error("Cannot set properties on the root node!");var te=hi.get(e,K);for(var ne in ee){if("children"===ne||"text"===ne)throw new Error('Cannot set the "'.concat(ne,'" property of nodes!'));var re=ee[ne];null==re?delete te[ne]:te[ne]=re}for(var ie in J)ee.hasOwnProperty(ie)||delete te[ie];break;case"set_selection":var{newProperties:oe}=n;if(null==oe)t=oe;else{if(null==t){if(!wi.isRange(oe))throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(JSON.stringify(oe)," when there is no current selection."));t=ki({},oe)}for(var ae in oe){var se=oe[ae];if(null==se){if("anchor"===ae||"focus"===ae)throw new Error('Cannot remove the "'.concat(ae,'" selection property'));delete t[ae]}else t[ae]=se}}break;case"split_node":var{path:le,position:ue,properties:ce}=n;if(0===le.length)throw new Error('Cannot apply a "split_node" operation at path ['.concat(le,"] because the root node cannot be split."));var de,he=hi.get(e,le),fe=hi.parent(e,le),pe=le[le.length-1];if(Ei.isText(he)){var me=he.text.slice(0,ue),ge=he.text.slice(ue);he.text=me,de=ki(ki({},ce),{},{text:ge})}else{var ve=he.children.slice(0,ue),ye=he.children.slice(ue);he.children=ve,de=ki(ki({},ce),{},{children:ye})}if(fe.children.splice(pe+1,0,de),t)for(var[be,xe]of wi.points(t))t[xe]=bi.transform(be,n)}return t})(e,n,t)}finally{e.children=zr(e.children),e.selection=n?Wn(n)?zr(n):n:null}}};function Ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Di(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ti(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ai={insertNodes(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ui.withoutNormalizing(e,(()=>{var{hanging:r=!1,voids:i=!1,mode:o="lowest"}=n,{at:a,match:s,select:l}=n;if(hi.isNode(t)&&(t=[t]),0!==t.length){var[u]=t;if(a||(a=e.selection?e.selection:e.children.length>0?ui.end(e,[]):[0],l=!0),null==l&&(l=!1),wi.isRange(a))if(r||(a=ui.unhangRange(e,a)),wi.isCollapsed(a))a=a.anchor;else{var[,c]=wi.edges(a),d=ui.pointRef(e,c);zi.delete(e,{at:a}),a=d.unref()}if(bi.isPoint(a)){null==s&&(s=Ei.isText(u)?e=>Ei.isText(e):e.isInline(u)?t=>Ei.isText(t)||ui.isInline(e,t):t=>ui.isBlock(e,t));var[h]=ui.nodes(e,{at:a.path,match:s,mode:o,voids:i});if(!h)return;var[,f]=h,p=ui.pathRef(e,f),m=ui.isEnd(e,a,f);zi.splitNodes(e,{at:a,match:s,mode:o,voids:i});var g=p.unref();a=m?gi.next(g):g}var v=gi.parent(a),y=a[a.length-1];if(i||!ui.void(e,{at:v})){for(var b of t){var x=v.concat(y);y++,e.apply({type:"insert_node",path:x,node:b})}if(l){var w=ui.end(e,a);w&&zi.select(e,w)}}}}))},liftNodes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ui.withoutNormalizing(e,(()=>{var{at:n=e.selection,mode:r="lowest",voids:i=!1}=t,{match:o}=t;if(null==o&&(o=gi.isPath(n)?Ri(e,n):t=>ui.isBlock(e,t)),n){var a=ui.nodes(e,{at:n,match:o,mode:r,voids:i}),s=Array.from(a,(t=>{var[,n]=t;return ui.pathRef(e,n)}));for(var l of s){var u=l.unref();if(u.length<2)throw new Error("Cannot lift node at a path [".concat(u,"] because it has a depth of less than `2`."));var c=ui.node(e,gi.parent(u)),[d,h]=c,f=u[u.length-1],{length:p}=d.children;if(1===p){var m=gi.next(h);zi.moveNodes(e,{at:u,to:m,voids:i}),zi.removeNodes(e,{at:h,voids:i})}else if(0===f)zi.moveNodes(e,{at:u,to:h,voids:i});else if(f===p-1){var g=gi.next(h);zi.moveNodes(e,{at:u,to:g,voids:i})}else{var v=gi.next(u),y=gi.next(h);zi.splitNodes(e,{at:v,voids:i}),zi.moveNodes(e,{at:u,to:y,voids:i})}}}}))},mergeNodes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ui.withoutNormalizing(e,(()=>{var{match:n,at:r=e.selection}=t,{hanging:i=!1,voids:o=!1,mode:a="lowest"}=t;if(r){if(null==n)if(gi.isPath(r)){var[s]=ui.parent(e,r);n=e=>s.children.includes(e)}else n=t=>ui.isBlock(e,t);if(!i&&wi.isRange(r)&&(r=ui.unhangRange(e,r)),wi.isRange(r))if(wi.isCollapsed(r))r=r.anchor;else{var[,l]=wi.edges(r),u=ui.pointRef(e,l);zi.delete(e,{at:r}),r=u.unref(),null==t.at&&zi.select(e,r)}var[c]=ui.nodes(e,{at:r,match:n,voids:o,mode:a}),d=ui.previous(e,{at:r,match:n,voids:o,mode:a});if(c&&d){var[h,f]=c,[p,m]=d;if(0!==f.length&&0!==m.length){var g,v,y=gi.next(m),b=gi.common(f,m),x=gi.isSibling(f,m),w=Array.from(ui.levels(e,{at:f}),(e=>{var[t]=e;return t})).slice(b.length).slice(0,-1),_=ui.above(e,{at:f,mode:"highest",match:t=>w.includes(t)&&Pi(e,t)}),S=_&&ui.pathRef(e,_[1]);if(Ei.isText(h)&&Ei.isText(p)){var E=Yr(h,["text"]);v=p.text.length,g=E}else{if(!oi.isElement(h)||!oi.isElement(p))throw new Error("Cannot merge the node at path [".concat(f,"] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(h)," ").concat(JSON.stringify(p)));E=Yr(h,["children"]),v=p.children.length,g=E}x||zi.moveNodes(e,{at:f,to:y,voids:o}),S&&zi.removeNodes(e,{at:S.current,voids:o}),oi.isElement(p)&&ui.isEmpty(e,p)||Ei.isText(p)&&""===p.text?zi.removeNodes(e,{at:m,voids:o}):e.apply({type:"merge_node",path:y,position:v,properties:g}),S&&S.unref()}}}}))},moveNodes(e,t){ui.withoutNormalizing(e,(()=>{var{to:n,at:r=e.selection,mode:i="lowest",voids:o=!1}=t,{match:a}=t;if(r){null==a&&(a=gi.isPath(r)?Ri(e,r):t=>ui.isBlock(e,t));var s=ui.pathRef(e,n),l=ui.nodes(e,{at:r,match:a,mode:i,voids:o}),u=Array.from(l,(t=>{var[,n]=t;return ui.pathRef(e,n)}));for(var c of u){var d=c.unref(),h=s.current;0!==d.length&&e.apply({type:"move_node",path:d,newPath:h}),s.current&&gi.isSibling(h,d)&&gi.isAfter(h,d)&&(s.current=gi.next(s.current))}s.unref()}}))},removeNodes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ui.withoutNormalizing(e,(()=>{var{hanging:n=!1,voids:r=!1,mode:i="lowest"}=t,{at:o=e.selection,match:a}=t;if(o){null==a&&(a=gi.isPath(o)?Ri(e,o):t=>ui.isBlock(e,t)),!n&&wi.isRange(o)&&(o=ui.unhangRange(e,o));var s=ui.nodes(e,{at:o,match:a,mode:i,voids:r}),l=Array.from(s,(t=>{var[,n]=t;return ui.pathRef(e,n)}));for(var u of l){var c=u.unref();if(c){var[d]=ui.node(e,c);e.apply({type:"remove_node",path:c,node:d})}}}}))},setNodes(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ui.withoutNormalizing(e,(()=>{var{match:r,at:i=e.selection}=n,{hanging:o=!1,mode:a="lowest",split:s=!1,voids:l=!1}=n;if(i){if(null==r&&(r=gi.isPath(i)?Ri(e,i):t=>ui.isBlock(e,t)),!o&&wi.isRange(i)&&(i=ui.unhangRange(e,i)),s&&wi.isRange(i)){var u=ui.rangeRef(e,i,{affinity:"inward"}),[c,d]=wi.edges(i),h="lowest"===a?"lowest":"highest",f=ui.isEnd(e,d,d.path);zi.splitNodes(e,{at:d,match:r,mode:h,voids:l,always:!f});var p=ui.isStart(e,c,c.path);zi.splitNodes(e,{at:c,match:r,mode:h,voids:l,always:!p}),i=u.unref(),null==n.at&&zi.select(e,i)}for(var[m,g]of ui.nodes(e,{at:i,match:r,mode:a,voids:l})){var v={},y={};if(0!==g.length){for(var b in t)"children"!==b&&"text"!==b&&t[b]!==m[b]&&(m.hasOwnProperty(b)&&(v[b]=m[b]),y[b]=t[b]);0!==Object.keys(y).length&&e.apply({type:"set_node",path:g,properties:v,newProperties:y})}}}}))},splitNodes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ui.withoutNormalizing(e,(()=>{var{mode:n="lowest",voids:r=!1}=t,{match:i,at:o=e.selection,height:a=0,always:s=!1}=t;if(null==i&&(i=t=>ui.isBlock(e,t)),wi.isRange(o)&&(o=Oi(e,o)),gi.isPath(o)){var l=o,u=ui.point(e,l),[c]=ui.parent(e,l);i=e=>e===c,a=u.path.length-l.length+1,o=u,s=!0}if(o){var d=ui.pointRef(e,o,{affinity:"backward"}),[h]=ui.nodes(e,{at:o,match:i,mode:n,voids:r});if(h){var f=ui.void(e,{at:o,mode:"highest"});if(!r&&f){var[p,m]=f;if(oi.isElement(p)&&e.isInline(p)){var g=ui.after(e,m);if(!g){var v=gi.next(m);zi.insertNodes(e,{text:""},{at:v,voids:r}),g=ui.point(e,v)}o=g,s=!0}a=o.path.length-m.length+1,s=!0}var y=ui.pointRef(e,o),b=o.path.length-a,[,x]=h,w=o.path.slice(0,b),_=0===a?o.offset:o.path[b]+0;for(var[S,E]of ui.levels(e,{at:w,reverse:!0,voids:r})){var C=!1;if(E.length<x.length||0===E.length||!r&&ui.isVoid(e,S))break;var k=d.current,M=ui.isEnd(e,k,E);if(s||!d||!ui.isEdge(e,k,E)){C=!0;var T=hi.extractProps(S);e.apply({type:"split_node",path:E,position:_,properties:T})}_=E[E.length-1]+(C||M?1:0)}if(null==t.at){var D=y.current||ui.end(e,[]);zi.select(e,D)}d.unref(),y.unref()}}}))},unsetNodes(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Array.isArray(t)||(t=[t]);var r={};for(var i of t)r[i]=null;zi.setNodes(e,r,n)},unwrapNodes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ui.withoutNormalizing(e,(()=>{var{mode:n="lowest",split:r=!1,voids:i=!1}=t,{at:o=e.selection,match:a}=t;if(o){null==a&&(a=gi.isPath(o)?Ri(e,o):t=>ui.isBlock(e,t)),gi.isPath(o)&&(o=ui.range(e,o));var s=wi.isRange(o)?ui.rangeRef(e,o):null,l=ui.nodes(e,{at:o,match:a,mode:n,voids:i}),u=Array.from(l,(t=>{var[,n]=t;return ui.pathRef(e,n)})),c=function(t){var n=t.unref(),[o]=ui.node(e,n),a=ui.range(e,n);r&&s&&(a=wi.intersection(s.current,a)),zi.liftNodes(e,{at:a,match:e=>oi.isAncestor(o)&&o.children.includes(e),voids:i})};for(var d of u)c(d);s&&s.unref()}}))},wrapNodes(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ui.withoutNormalizing(e,(()=>{var{mode:r="lowest",split:i=!1,voids:o=!1}=n,{match:a,at:s=e.selection}=n;if(s){if(null==a&&(a=gi.isPath(s)?Ri(e,s):e.isInline(t)?t=>ui.isInline(e,t)||Ei.isText(t):t=>ui.isBlock(e,t)),i&&wi.isRange(s)){var[l,u]=wi.edges(s),c=ui.rangeRef(e,s,{affinity:"inward"});zi.splitNodes(e,{at:u,match:a,voids:o}),zi.splitNodes(e,{at:l,match:a,voids:o}),s=c.unref(),null==n.at&&zi.select(e,s)}var d=Array.from(ui.nodes(e,{at:s,match:e.isInline(t)?t=>ui.isBlock(e,t):e=>ui.isEditor(e),mode:"lowest",voids:o}));for(var[,h]of d){var f=wi.isRange(s)?wi.intersection(s,ui.range(e,h)):s;if(f){var p=Array.from(ui.nodes(e,{at:f,match:a,mode:r,voids:o}));p.length>0&&function(){var[n]=p,r=p[p.length-1],[,i]=n,[,a]=r,s=gi.equals(i,a)?gi.parent(i):gi.common(i,a),l=ui.range(e,i,a),u=ui.node(e,s),[c]=u,d=s.length+1,h=gi.next(a.slice(0,d)),f=Di(Di({},t),{},{children:[]});zi.insertNodes(e,f,{at:h,voids:o}),zi.moveNodes(e,{at:l,match:e=>oi.isAncestor(c)&&c.children.includes(e),to:h.concat(0),voids:o})}()}}}}))}},Pi=(e,t)=>{if(oi.isElement(t)){var n=t;return!!ui.isVoid(e,t)||1===n.children.length&&Pi(e,n.children[0])}return!ui.isEditor(t)},Oi=(e,t)=>{if(wi.isCollapsed(t))return t.anchor;var[,n]=wi.edges(t),r=ui.pointRef(e,n);return zi.delete(e,{at:t}),r.unref()},Ri=(e,t)=>{var[n]=ui.node(e,t);return e=>e===n};function Fi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Li(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fi(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fi(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ii={collapse(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{edge:n="anchor"}=t,{selection:r}=e;if(r)if("anchor"===n)zi.select(e,r.anchor);else if("focus"===n)zi.select(e,r.focus);else if("start"===n){var[i]=wi.edges(r);zi.select(e,i)}else if("end"===n){var[,o]=wi.edges(r);zi.select(e,o)}},deselect(e){var{selection:t}=e;t&&e.apply({type:"set_selection",properties:t,newProperties:null})},move(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{selection:n}=e,{distance:r=1,unit:i="character",reverse:o=!1}=t,{edge:a=null}=t;if(n){"start"===a&&(a=wi.isBackward(n)?"focus":"anchor"),"end"===a&&(a=wi.isBackward(n)?"anchor":"focus");var{anchor:s,focus:l}=n,u={distance:r,unit:i},c={};if(null==a||"anchor"===a){var d=o?ui.before(e,s,u):ui.after(e,s,u);d&&(c.anchor=d)}if(null==a||"focus"===a){var h=o?ui.before(e,l,u):ui.after(e,l,u);h&&(c.focus=h)}zi.setSelection(e,c)}},select(e,t){var{selection:n}=e;if(t=ui.range(e,t),n)zi.setSelection(e,t);else{if(!wi.isRange(t))throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(t)));e.apply({type:"set_selection",properties:n,newProperties:t})}},setPoint(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{selection:r}=e,{edge:i="both"}=n;if(r){"start"===i&&(i=wi.isBackward(r)?"focus":"anchor"),"end"===i&&(i=wi.isBackward(r)?"anchor":"focus");var{anchor:o,focus:a}=r,s="anchor"===i?o:a;zi.setSelection(e,{["anchor"===i?"anchor":"focus"]:Li(Li({},s),t)})}},setSelection(e,t){var{selection:n}=e,r={},i={};if(n){for(var o in t)("anchor"===o&&null!=t.anchor&&!bi.equals(t.anchor,n.anchor)||"focus"===o&&null!=t.focus&&!bi.equals(t.focus,n.focus)||"anchor"!==o&&"focus"!==o&&t[o]!==n[o])&&(r[o]=n[o],i[o]=t[o]);Object.keys(r).length>0&&e.apply({type:"set_selection",properties:r,newProperties:i})}}},Ni={delete(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ui.withoutNormalizing(e,(()=>{var{reverse:n=!1,unit:r="character",distance:i=1,voids:o=!1}=t,{at:a=e.selection,hanging:s=!1}=t;if(a){if(wi.isRange(a)&&wi.isCollapsed(a)&&(a=a.anchor),bi.isPoint(a)){var l=ui.void(e,{at:a,mode:"highest"});if(!o&&l){var[,u]=l;a=u}else{var c={unit:r,distance:i};a={anchor:a,focus:n?ui.before(e,a,c)||ui.start(e,[]):ui.after(e,a,c)||ui.end(e,[])},s=!0}}if(gi.isPath(a))zi.removeNodes(e,{at:a,voids:o});else if(!wi.isCollapsed(a)){if(!s){var[,d]=wi.edges(a),h=ui.end(e,[]);bi.equals(d,h)||(a=ui.unhangRange(e,a,{voids:o}))}var[f,p]=wi.edges(a),m=ui.above(e,{match:t=>ui.isBlock(e,t),at:f,voids:o}),g=ui.above(e,{match:t=>ui.isBlock(e,t),at:p,voids:o}),v=m&&g&&!gi.equals(m[1],g[1]),y=gi.equals(f.path,p.path),b=o?null:ui.void(e,{at:f,mode:"highest"}),x=o?null:ui.void(e,{at:p,mode:"highest"});if(b){var w=ui.before(e,f);w&&m&&gi.isAncestor(m[1],w.path)&&(f=w)}if(x){var _=ui.after(e,p);_&&g&&gi.isAncestor(g[1],_.path)&&(p=_)}var S,E=[];for(var C of ui.nodes(e,{at:a,voids:o})){var[k,M]=C;S&&0===gi.compare(M,S)||(!o&&ui.isVoid(e,k)||!gi.isCommon(M,f.path)&&!gi.isCommon(M,p.path))&&(E.push(C),S=M)}var T=Array.from(E,(t=>{var[,n]=t;return ui.pathRef(e,n)})),D=ui.pointRef(e,f),A=ui.pointRef(e,p);if(!y&&!b){var P=D.current,[O]=ui.leaf(e,P),{path:R}=P,{offset:F}=f,L=O.text.slice(F);L.length>0&&e.apply({type:"remove_text",path:R,offset:F,text:L})}for(var I of T){var N=I.unref();zi.removeNodes(e,{at:N,voids:o})}if(!x){var j=A.current,[$]=ui.leaf(e,j),{path:z}=j,B=y?f.offset:0,U=$.text.slice(B,p.offset);U.length>0&&e.apply({type:"remove_text",path:z,offset:B,text:U})}!y&&v&&A.current&&D.current&&zi.mergeNodes(e,{at:A.current,hanging:!0,voids:o});var H=n?D.unref()||A.unref():A.unref()||D.unref();null==t.at&&H&&zi.select(e,H)}}}))},insertFragment(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ui.withoutNormalizing(e,(()=>{var{hanging:r=!1,voids:i=!1}=n,{at:o=e.selection}=n;if(t.length&&o){if(wi.isRange(o))if(r||(o=ui.unhangRange(e,o)),wi.isCollapsed(o))o=o.anchor;else{var[,a]=wi.edges(o);if(!i&&ui.void(e,{at:a}))return;var s=ui.pointRef(e,a);zi.delete(e,{at:o}),o=s.unref()}else gi.isPath(o)&&(o=ui.start(e,o));if(i||!ui.void(e,{at:o})){var l=ui.above(e,{at:o,match:t=>ui.isInline(e,t),mode:"highest",voids:i});if(l){var[,u]=l;ui.isEnd(e,o,u)?o=ui.after(e,u):ui.isStart(e,o,u)&&(o=ui.before(e,u))}var c=ui.above(e,{match:t=>ui.isBlock(e,t),at:o,voids:i}),[,d]=c,h=ui.isStart(e,o,d),f=ui.isEnd(e,o,d),p=!h||h&&f,m=!f,[,g]=hi.first({children:t},[]),[,v]=hi.last({children:t},[]),y=[],b=t=>{var[n,r]=t;return!(p&&gi.isAncestor(r,g)&&oi.isElement(n)&&!e.isVoid(n)&&!e.isInline(n)||m&&gi.isAncestor(r,v)&&oi.isElement(n)&&!e.isVoid(n)&&!e.isInline(n))};for(var x of hi.nodes({children:t},{pass:b}))x[1].length>0&&b(x)&&y.push(x);var w=[],_=[],S=[],E=!0,C=!1;for(var[k]of y)oi.isElement(k)&&!e.isInline(k)?(E=!1,C=!0,_.push(k)):E?w.push(k):S.push(k);var[M]=ui.nodes(e,{at:o,match:t=>Ei.isText(t)||ui.isInline(e,t),mode:"highest",voids:i}),[,T]=M,D=ui.isStart(e,o,T),A=ui.isEnd(e,o,T),P=ui.pathRef(e,f?gi.next(d):d),O=ui.pathRef(e,A?gi.next(T):T);zi.splitNodes(e,{at:o,match:t=>C?ui.isBlock(e,t):Ei.isText(t)||ui.isInline(e,t),mode:C?"lowest":"highest",voids:i});var R=ui.pathRef(e,!D||D&&A?gi.next(T):T);if(zi.insertNodes(e,w,{at:R.current,match:t=>Ei.isText(t)||ui.isInline(e,t),mode:"highest",voids:i}),zi.insertNodes(e,_,{at:P.current,match:t=>ui.isBlock(e,t),mode:"lowest",voids:i}),zi.insertNodes(e,S,{at:O.current,match:t=>Ei.isText(t)||ui.isInline(e,t),mode:"highest",voids:i}),!n.at){var F;F=S.length>0?gi.previous(O.current):_.length>0?gi.previous(P.current):gi.previous(R.current);var L=ui.end(e,F);zi.select(e,L)}R.unref(),P.unref(),O.unref()}}}))},insertText(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ui.withoutNormalizing(e,(()=>{var{voids:r=!1}=n,{at:i=e.selection}=n;if(i){if(gi.isPath(i)&&(i=ui.range(e,i)),wi.isRange(i))if(wi.isCollapsed(i))i=i.anchor;else{var o=wi.end(i);if(!r&&ui.void(e,{at:o}))return;var a=ui.pointRef(e,o);zi.delete(e,{at:i,voids:r}),i=a.unref(),zi.setSelection(e,{anchor:i,focus:i})}if(r||!ui.void(e,{at:i})){var{path:s,offset:l}=i;t.length>0&&e.apply({type:"insert_text",path:s,offset:l,text:t})}}}))}};function ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ji(Object(n),!0).forEach((function(t){Ur(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ji(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var zi=$i($i($i($i({},Mi),Ai),Ii),Ni);const Bi=[{type:"paragraph",children:[{text:""}]}];function Ui(e){return[{type:"paragraph",children:[{text:e}]}]}function Hi(e){if(!e)return Bi;let t;try{t=JSON.parse(e),Array.isArray(t)||(t="string"==typeof e?Ui(e):Bi)}catch(n){t="string"==typeof e?Ui(e):Bi}return 0===t.length?Bi:t}function Vi(e){return e.map((e=>"mentions"===e.type?"…":e.children?.length?Vi(e.children):hi.string(e))).join("\n")}function Wi(e){return Vi(Hi(e))}function Gi(e){let t=!0;return e.forEach((e=>{t&&(e.type&&["mentions","latex","media"].includes(e.type)?t=!1:e.children?t=Gi(e.children):e.text&&""!==e.text&&(t=!1))})),t}function qi(e,t){return Array.isArray(e)?e.map((e=>qi(e,t))):"object"==typeof e&&null!==e?Object.keys(e).reduce(((n,r)=>r===t?n:Object.assign({[r]:qi(e[r],t)},n)),{}):e}function Yi(e,t){return t.filter((t=>e.includes(t.id)))}function Zi(e){return JSON.parse(JSON.stringify(e))}function Xi(e,t){return e.filter((e=>e!==t))}function Qi(e){return e.filter(((t,n)=>e.indexOf(t)===n))}function Ki(e,t){return e.every(((e,n)=>t[n]===e))}function Ji(e,t){const n=(0,s.parse)(e)[t];return"string"==typeof n||Array.isArray(n)?n:null}function eo(e,t){if(!e)return[];const n="string"==typeof t?[t.toLowerCase()]:t.map((e=>e.toLowerCase())),r=[];return e.forEach((e=>{const t=Vi(Hi(e.label)).toLowerCase();n.includes(t)&&r.push(e.id)})),r}function to(e,t=!1){if(!e)return[];const n=e.split(",");return t?[n[0]]:n}function no(e){try{const t=JSON.parse(e??"");if(t&&"object"==typeof t)return t}catch(e){}return null}function ro(e,t){return!("object"!=typeof e||!e.type||e.type!==t)}function io(e){return null==e||""===e}function oo(e,t,n){return t.some((t=>n.includes(e[t])))}function ao(e,t,n){return t.every((t=>n.includes(e[t])))}const so=new En("EForm Fonts");function lo(e){if(!so.hasItem(e))return["inherit",null];const t=so.getItem(e);return[t.fontFamily,t.enqueue]}so.addItem("inherit",{name:bn("Inherit from theme","wp-eform"),fontFamily:"inherit",enqueue:null}),so.addItem("system",{name:bn("System UI","wp-eform"),fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',enqueue:null}),so.addItem("systemMono",{name:bn("System UI Mono","wp-eform"),fontFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",enqueue:null}),so.addItem("custom",{name:bn("Custom Font","wp-eform"),fontFamily:"",enqueue:null}),so.addItem("alegreya",{name:"Alegreya",fontFamily:"'Alegreya', serif",enqueue:"https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("b612",{name:"B612",fontFamily:"'B612', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("titilliumweb",{name:"Titillium Web",fontFamily:"'Titillium Web', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("vollkorn",{name:"Vollkorn",fontFamily:"'Vollkorn', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("ibmplexsans",{name:"IBM Plex Sans",fontFamily:"'IBM Plex Sans', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"}),so.addItem("crimsontext",{name:"Crimson Text",fontFamily:"'Crimson Text', serif",enqueue:"https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"}),so.addItem("karla",{name:"Karla",fontFamily:"'Karla', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("lora",{name:"Lora",fontFamily:"'Lora', serif",enqueue:"https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"}),so.addItem("playfairdisplay",{name:"Playfair Display",fontFamily:"'Playfair Display', serif",enqueue:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("archivo",{name:"Archivo",fontFamily:"'Archivo', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"}),so.addItem("spectral",{name:"Spectral",fontFamily:"'Spectral', serif",enqueue:"https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"}),so.addItem("roboto",{name:"Roboto",fontFamily:"'Roboto', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"}),so.addItem("montserrat",{name:"Montserrat",fontFamily:"'Montserrat', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("rubik",{name:"Rubik",fontFamily:"'Rubik', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("sourcesanspro",{name:"Source Sans Pro",fontFamily:"'Source Sans Pro', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"}),so.addItem("cormorant",{name:"Cormorant",fontFamily:"'Cormorant', serif",enqueue:"https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"}),so.addItem("worksans",{name:"Work Sans",fontFamily:"'Work Sans', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("arvo",{name:"Arvo",fontFamily:"'Arvo', serif",enqueue:"https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("lato",{name:"Lato",fontFamily:"'Lato', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"}),so.addItem("ubuntu",{name:"Ubuntu",fontFamily:"'Ubuntu', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"}),so.addItem("ptserif",{name:"PT Serif",fontFamily:"'PT Serif', serif",enqueue:"https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("ptsans",{name:"PT Sans",fontFamily:"'PT Sans', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("poppins",{name:"Poppins",fontFamily:"'Poppins', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("firasans",{name:"Fira Sans",fontFamily:"'Fira Sans', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("nunito",{name:"Nunito",fontFamily:"'Nunito', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("exo2",{name:"Exo 2",fontFamily:"'Exo 2', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("opensans",{name:"Open Sans",fontFamily:"'Open Sans', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"}),so.addItem("merriweather",{name:"Merriweather",fontFamily:"'Merriweather', serif",enqueue:"https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"}),so.addItem("notosans",{name:"Noto Sans",fontFamily:"'Noto Sans', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("spacemono",{name:"Space Mono",fontFamily:"'Space Mono', monospace",enqueue:"https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"}),so.addItem("librefranklin",{name:"Libre Franklin",fontFamily:"'Libre Franklin', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("alegreyasans",{name:"Alegreya Sans",fontFamily:"'Alegreya Sans', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap"}),so.addItem("chivo",{name:"Chivo",fontFamily:"'Chivo', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"}),so.addItem("sourceserifpro",{name:"Source Serif Pro",fontFamily:"'Source Serif Pro', serif",enqueue:"https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"}),so.addItem("archivonarrow",{name:"Archivo Narrow",fontFamily:"'Archivo Narrow', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"}),so.addItem("prozalibre",{name:"Proza Libre",fontFamily:"'Proza Libre', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"}),so.addItem("cabin",{name:"cabin",fontFamily:"'Cabin', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"}),so.addItem("raleway",{name:"Raleway",fontFamily:"'Raleway', sans-serif",enqueue:"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"}),so.addItem("anonymouspro",{name:"Anonymous Pro",fontFamily:"'Anonymous Pro', monospace",enqueue:"https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"});const uo={starter:"Starter",professional:"Professional",business:"Business"};function co(e){if(!e)return!0;const t=`isPlan${uo[e]}OrHigher`;return"undefined"!=typeof WPEFormGraphQLApp&&!!WPEFormGraphQLApp.freemius[t]&&!!WPEFormGraphQLApp.freemius[t]}const ho=zn.getItems()[0].item.config,fo=(0,i.createContext)(void 0);function po(e){const{darkMode:t,children:n}=e;return(0,r.jsx)(fo.Provider,Object.assign({value:t},{children:n}),void 0)}function mo(e){return(0,i.useMemo)((()=>function(e){return{scheme:e?.theme?.scheme,baseFont:e?.typography?.baseFont,boldHeading:e?.typography?.headFontBold,italicHeading:e?.typography?.headFontItalic,headFamily:e?.typography?.headFamily,headFamilyCustom:e?.typography?.headFamilyCustom,bodyFamily:e?.typography?.bodyFamily,bodyFamilyCustom:e?.typography?.bodyFamilyCustom,customPrimaryColor:e?.theme?.customColorPrimary,customSecondaryColor:e?.theme?.customColorSecondary,customBackgroundColor:e?.theme?.customColorBg,customTextColor:e?.theme?.customColorText,css:e?.theme?.css,maxWidth:e?.appearance?.maxWidth,containerLayout:e?.appearance?.containerLayout,darkMode:e?.theme?.darkMode}}(e)),[e])}function go(e){const t=new o.qH;let n;try{(0,a.Dq)((0,r.jsx)(o.LC,Object.assign({sheet:t.instance},{children:(0,r.jsx)(r.Fragment,{children:e},void 0)}),void 0)),n=t.getStyleElement()}catch(e){console.log(e),n=null}finally{t.seal()}return n}function vo(e){const{children:t,ssr:n,mode:i,themeStyle:a,widthOverride:s,containerLayoutOverride:l,theme:u}=e;return(0,r.jsx)(o.f6,Object.assign({theme:u},{children:n?(0,r.jsx)(Yt.Ssr,Object.assign({width:s??a?.maxWidth,containerLayout:l??a?.containerLayout,noHorizontalPadding:"preview"===i,noVerticalPadding:"preview"===i},{children:t}),void 0):(0,r.jsx)(Yt,Object.assign({width:s??a?.maxWidth,containerLayout:l??a?.containerLayout,noHorizontalPadding:"preview"===i,noVerticalPadding:"preview"===i},{children:t}),void 0)}),void 0)}function yo(e){const{children:t}=e,n=(0,i.useContext)(_n);return(0,r.jsx)(o.LC,Object.assign({target:n},{children:(0,r.jsx)(r.Fragment,{children:t},void 0)}),void 0)}function bo(e){const{mode:t,themeStyle:n,ssr:o=!1}=e,[a,s]=function(e){const[t,n]=(0,i.useState)((()=>!!co("starter")&&"undefined"!=typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches));(0,i.useEffect)((()=>{if(co("starter")){if("undefined"==typeof window)return()=>{};const e=e=>{n(e.matches)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}return()=>{}}),[]);const r=(0,i.useContext)(fo);return(0,i.useMemo)((()=>{const{baseFont:n,bodyFamily:i,boldHeading:o,customBackgroundColor:a,customPrimaryColor:s,customSecondaryColor:l,customTextColor:u,headFamily:c,italicHeading:d,scheme:h,darkMode:f}=e??{};let p=Zi(ho);h&&zn.hasItem(h)&&(p=Zi(zn.getItem(h).config)),n&&16!==n&&n>=12&&(p={...p,controlHeightBase:Ue(2.5*n),borderRadiusBase:Ue(.25*n),gutter:Math.min(Math.max(Ue(1.25*n),10),40),fz:{small2:Math.ceil(.75*n),small1:Math.ceil(.875*n),base:n,large1:Math.ceil(1.125*n),large2:Math.ceil(1.25*n),large3:Math.ceil(1.5*n),large4:Math.ceil(1.875*n),large5:Math.ceil(2.25*n),large6:Math.ceil(3*n),large7:Math.ceil(3.75*n),large8:Math.ceil(4.5*n)}});const m=[];if(p.boldHeading=!!o,p.italicHeading=!!d,c){let t="inherit";if("custom"===c)t=e?.headFamilyCustom??"inherit";else{const[e,n]=lo(c);t=e,n&&m.push(n)}p.fontFamilyHeading=t}if(i){let t="inherit";if("custom"===i)t=e?.bodyFamilyCustom??"inherit";else{const[e,n]=lo(i);t=e,n&&m.push(n)}p.fontFamilyBody=t}let g=!1;co("starter")&&!1!==r&&(t&&f===Je.AUTO||f===Je.ALWAYS||!0===r)&&p.dark&&(g=!0,p={...p,...p.dark});const v=g?Te:Ee,y=g?Ee:Te;return s&&(p.primaryColor=s,p.primaryDarkColor=v(.1,s),p.primaryLightColor=y(.1,s),p.accentColor=function(e){if("transparent"===e)return e;var t=se(e);return be(U({},t,{hue:(t.hue+180)%360}))}(s),p.primaryBgText=Te(.7,s),p.primaryBackgroundColor=y(.6,s),p.linkColor=s,p.boxShadowFocus=`0 0 0 2px ${Ae(.5,s)}`,p.boxShadowControlFocus=`0 0 0 ${Fe(3)} ${Ae(.8,s)}`),l&&(p.borderColorBase=l,p.borderColorSplit=y(.1,l),p.disabledColor=y(.28,l),p.disabledBackgroundColor=y(.45,l),p.backgroundControl=y(.44,l),console.log(p.backgroundControl),p.backgroundShade=ke(.01,y(.4,l)),p.backgroundHover=ke(.01,y(.42,l))),a&&(p.appBackgroundColor=a),u&&(p.textColor=u,p.textColorSecondary=y(.4,u),p.headingColor=y(.1,u)),[p,Qi(m)]}),[e,t,r])}(n),l=n?.css,u=(0,i.useContext)(D);(0,i.useEffect)((()=>{u&&"undefined"!=typeof window&&s&&s.length&&s.forEach((e=>{const t=function(...e){return e.join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^a-z0-9 ]/g,"").replace(/\s+/g,"-")}(e);if(!document.head.querySelector(`#${t}`)){const n=document.createElement("link");n.setAttribute("href",e),n.setAttribute("id",t),n.setAttribute("rel","stylesheet"),document.head.append(n)}}))}),[s,u]);const c=(0,r.jsx)(vo,Object.assign({theme:a},e),void 0),[d,h]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{h(!0)}),[]),(0,r.jsxs)(r.Fragment,{children:[u&&d?s.map((e=>(0,r.jsx)("link",{rel:"stylesheet",href:e},e))):null,l&&"live"===t?(0,r.jsx)("style",{type:"text/css",dangerouslySetInnerHTML:{__html:l}},void 0):null,o?(0,r.jsxs)(r.Fragment,{children:[go(c),(0,r.jsx)("div",Object.assign({className:"wpeform-root-slot__react-app"},{children:c}),void 0)]},void 0):(0,r.jsx)(yo,{children:c},void 0)]},void 0)}const xo="wpeform-component-skeleton",wo=Oe(xo,"gutter"),_o=o.ZP.div`
	${Ie};
	&.${xo}--large {
		margin-bottom: ${e=>Fe(e.theme.gutter)};
	}
	&.${xo}--small {
		margin-bottom: ${e=>Fe(e.theme.gutter/2)};
	}
	&.${xo}--para {
		margin-bottom: ${e=>Fe(.75*e.theme.fz.base)};
	}
	&.${xo}--h1 {
		margin-bottom: ${e=>Fe(1.5*e.theme.fz.large5*.6)};
	}
	&.${xo}--h2 {
		margin-bottom: ${e=>Fe(1.5*e.theme.fz.large3*.6)};
	}
	&.${xo}--h3 {
		margin-bottom: ${e=>Fe(1.5*e.theme.fz.large2*.6)};
	}
	&.${xo}--h4 {
		margin-bottom: ${e=>Fe(1.5*e.theme.fz.base*.6)};
	}
	&.${xo}--h5 {
		margin-bottom: ${e=>Fe(1.5*e.theme.fz.small1*.6)};
	}
	&.${xo}--h6 {
		margin-bottom: ${e=>Fe(1.5*e.theme.fz.small2*.6)};
	}
	&.${xo}--mb {
		margin-bottom: ${e=>Fe(e.marginBottom??0)};
	}
	&:last-child {
		margin-bottom: 0;
	}
	&.${xo}--inline {
		display: inline-block;
		margin-left: 0.25em;
		margin-right: 0.25em;
		vertical-align: middle;
		&:first-child {
			margin-left: 0;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`,So=o.F4`
	0% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0 50%;
	}
`,Eo=o.ZP.div`
	background-image: linear-gradient(
		90deg,
		${e=>Ee(.01,e.theme.backgroundControl)} 25%,
		${e=>Ee(.05,e.theme.backgroundControl)} 37%,
		${e=>Ee(.01,e.theme.backgroundControl)} 63%
	);
	background-size: 400% 100%;
	animation: ${So} 1.4s ease infinite;
	will-change: background-position;
	&.${wo}--shape-rectangle {
		border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	}
	&.${wo}--shape-circle {
		border-radius: 50%;
	}
	max-width: 100%;
	&.${wo}--color-darker {
		background-image: linear-gradient(
			90deg,
			${e=>Ee(.03,e.theme.backgroundControl)} 25%,
			${e=>Ee(.08,e.theme.backgroundControl)} 37%,
			${e=>Ee(.03,e.theme.backgroundControl)} 63%
		);
	}
	&.${wo}--inline {
		display: inline-block;
		vertical-align: middle;
	}
`;function Co(e){const{height:t,shape:n,width:i,className:o,marginBottom:a,color:s="normal",inline:l=!1}=e,u={};"string"==typeof a?u[`${a}`]=!0:"number"==typeof a&&(u.mb=!0),u.inline=l;const c=Pe(xo,u,o),d=Pe(wo,{[`shape-${n}`]:!0,[`color-${s}`]:!0,inline:l},o);return(0,r.jsx)(_o,Object.assign({className:c,marginBottom:"number"==typeof a?a:void 0},{children:(0,r.jsx)(Eo,{className:d,style:{width:"number"==typeof i?Fe(i):i,height:"number"==typeof t?Fe(t):t}},void 0)}),void 0)}function ko(e){const t=(0,o.Fg)(),{width:n,className:i,marginBottom:a,inline:s}=e;return(0,r.jsx)(Co,{marginBottom:"number"==typeof a?a:"para",width:n,height:1.5*t.fz.base,shape:"rectangle",className:i,inline:s},void 0)}function Mo(e){const t=(0,o.Fg)(),{width:n,level:i,className:a,marginBottom:s}=e;let l=1.5*t.fz.large5;return 2===i?l=1.5*t.fz.large3:3===i?l=1.5*t.fz.large2:4===i?l=1.5*t.fz.large1:5===i?l=1.5*t.fz.small1:6===i&&(l=1.5*t.fz.small2),(0,r.jsx)(Co,{marginBottom:"number"==typeof s?s:`h${i}`,width:n,height:l,shape:"rectangle",className:a},void 0)}function To(e){const{className:t}=e,n=Ue(.7*(0,o.Fg)().controlHeightBase);return(0,r.jsx)(Co,{height:n,width:n,className:t,shape:"rectangle"},void 0)}function Do(e){const{className:t}=e,n=Ue(.7*(0,o.Fg)().controlHeightBase);return(0,r.jsx)(Co,{height:n,width:n,className:t,shape:"circle"},void 0)}const Ao=o.ZP.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
`,Po=o.ZP.div`
	flex: 0 0
		${e=>Fe(Ue(.7*e.theme.controlHeightBase))};
	margin: 0 ${e=>Fe(e.theme.gutter/2)} 0 0;
`,Oo=o.ZP.div`
	flex: 1 0 auto;
`,Ro=Oe(xo,"mcq-option"),Fo=Oe(xo,"label"),Lo=o.ZP.div`
	margin: 0 0 ${e=>Fe(e.theme.gutter/2)} 0;
`;Co.Paragraph=ko,Co.Heading=Mo,Co.Avatar=function(e){return(0,r.jsx)(Co,Object.assign({},e,{width:e.height,shape:"circle"}),void 0)},Co.Checkbox=To,Co.Radio=Do,Co.Text=function(e){const t=(0,o.Fg)();return(0,r.jsx)(Co,Object.assign({height:t.controlHeightBase,shape:"rectangle",width:"100%"},e),void 0)},Co.Textarea=function(e){const t=(0,o.Fg)();return(0,r.jsx)(Co,Object.assign({height:4*t.controlHeightBase,shape:"rectangle",width:"100%"},e),void 0)},Co.MCQOption=function(e){const t=(0,o.Fg)(),{className:n,type:i,width:a}=e,s=t.fz.base;return(0,r.jsxs)(Ao,Object.assign({className:Pe(Ro,{[`type-${i}`]:!0},n)},{children:[(0,r.jsx)(Po,{children:"radio"===i?(0,r.jsx)(Do,{},void 0):(0,r.jsx)(To,{},void 0)},void 0),(0,r.jsx)(Oo,{children:(0,r.jsx)(Co,{shape:"rectangle",height:s,width:a},void 0)},void 0)]}),void 0)},Co.Label=function(e){const t=(0,o.Fg)(),{titleWidth:n,subtitleWidth:i,className:a}=e;return(0,r.jsxs)(Lo,Object.assign({className:Pe(Fo,void 0,a)},{children:[(0,r.jsx)(ko,{width:n,marginBottom:t.gutter/4},void 0),(0,r.jsx)(Mo,{width:i,marginBottom:t.fz.base-t.fz.small2,level:6},void 0)]}),void 0)};const Io="wpeform-component-grid",No=o.ZP.div`
	${Ie};
	padding: ${e=>Fe(.75*e.theme.gutter)};
	&.${Io}--no-padding {
		padding: 0;
		margin: ${e=>Fe(-.75*e.theme.gutter)};
		margin-bottom: 0;
	}
`,jo=o.ZP.div`
	margin: 0;
	display: flex;
	flex-flow: row wrap;
`;function $o(e){const{className:t,children:n,noPadding:i=!1}=e;return(0,r.jsx)(No,Object.assign({className:Pe(Io,{"no-padding":i},t)},{children:(0,r.jsx)(jo,{children:n},void 0)}),void 0)}const zo=Oe(Io,"item"),Bo=o.ZP.div`
	flex: 0 0 ${e=>e.width};
	width: ${e=>e.width};
	max-width: 100%;
	box-shadow: 0 0 0 0 ${e=>Ae(1,e.theme.primaryColor)},
		0 0 0 1px ${e=>Ae(1,e.theme.primaryColor)};
	transition: ${e=>Le(["box-shadow"],e.theme.transitionControl)};
	&:focus {
		box-shadow: 0 0 0 4px
				${e=>Ae(.85,e.theme.primaryColor)},
			0 0 0 1px ${e=>e.theme.primaryColor};
		border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
		outline: none;
	}
`;$o.Item=(0,i.forwardRef)((function(e,t){const{children:n,className:i,columnSize:a=Lt.FULL,basicWidth:s="100%",widths:l=[],tabIndex:u}=e,c=jt(),d=(0,o.Fg)();let h;if(a===Lt.MANUAL)h=s,l.forEach((e=>{c.width>=e.containerMinWidth&&(h=e.elementWidth)}));else{const{basicWidth:e,widths:t=[]}=function(e,t){const n={basicWidth:"100%",widths:[]};return e===Lt.HALF?n.widths=[{containerMinWidth:t.breakpoints.tablet-2*t.gutter,elementWidth:"50%"},{containerMinWidth:t.breakpoints.desktop-2*t.gutter,elementWidth:"50%"},{containerMinWidth:t.breakpoints.desktopHd-2*t.gutter,elementWidth:"50%"}]:e===Lt.ONEFOURTH?n.widths=[{containerMinWidth:t.breakpoints.tablet-2*t.gutter,elementWidth:"25%"},{containerMinWidth:t.breakpoints.desktop-2*t.gutter,elementWidth:"25%"},{containerMinWidth:t.breakpoints.desktopHd-2*t.gutter,elementWidth:"25%"}]:e===Lt.ONETHIRD?n.widths=[{containerMinWidth:t.breakpoints.tablet-2*t.gutter,elementWidth:"33.333333%"},{containerMinWidth:t.breakpoints.desktop-2*t.gutter,elementWidth:"33.333333%"},{containerMinWidth:t.breakpoints.desktopHd-2*t.gutter,elementWidth:"33.333333%"}]:e===Lt.THREEFOURTH?n.widths=[{containerMinWidth:t.breakpoints.tablet-2*t.gutter,elementWidth:"75%"},{containerMinWidth:t.breakpoints.desktop-2*t.gutter,elementWidth:"75%"},{containerMinWidth:t.breakpoints.desktopHd-2*t.gutter,elementWidth:"75%"}]:e===Lt.TWOTHIRD&&(n.widths=[{containerMinWidth:t.breakpoints.tablet-2*t.gutter,elementWidth:"66.66666%"},{containerMinWidth:t.breakpoints.desktop-2*t.gutter,elementWidth:"66.66666%"},{containerMinWidth:t.breakpoints.desktopHd-2*t.gutter,elementWidth:"66.66666%"}]),n}(a,d);h=e,t.forEach((e=>{c.width>=e.containerMinWidth&&(h=e.elementWidth)}))}return(0,r.jsx)(Bo,Object.assign({className:B(zo,i),width:h,ref:t,tabIndex:u},{children:n}),void 0)}));const Uo=o.ZP.div`
	padding: ${e=>Fe(e.theme.gutter*(e.dense?.5:.75))};
`;$o.Gutter=Uo;const Ho=o.ZP.div`
	margin-left: ${e=>Fe(-.75*e.theme.gutter*2)};
	margin-right: ${e=>Fe(-.75*e.theme.gutter*2)};
	margin-top: ${e=>e.vertical?Fe(-.75*e.theme.gutter*2):0};
	margin-bottom: ${e=>e.vertical?Fe(-.75*e.theme.gutter*2):0};
`;$o.NegateGutter=Ho;const Vo=o.ZP.div`
	margin-bottom: ${e=>Fe(.75*e.theme.gutter*2)};
`;$o.Bottom=Vo;const Wo=o.ZP.div`
	margin-top: ${e=>Fe(-.75*e.theme.gutter*2)};
	margin-bottom: ${e=>Fe(-.75*e.theme.gutter*2)};
`;$o.NegateVerticalGutter=Wo;const Go=o.ZP.div`
	border: 2px solid;
	border-color: ${e=>e.active?e.theme.primaryDarkColor:e.theme.borderColorBase};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	padding: ${e=>Fe(e.theme.gutter/4)};
	margin-top: ${e=>Fe(e.theme.gutter/2)};
	margin-bottom: ${e=>Fe(e.theme.gutter/2)};
	margin-right: ${e=>"left"===e.align?Fe(e.theme.gutter/2):"center"===e.align?"auto":0};
	margin-left: ${e=>"right"===e.align?Fe(e.theme.gutter/2):"center"===e.align?"auto":0};
	float: ${e=>"left"===e.align?"left":"right"===e.align?"right":"none"};
	clear: ${e=>"left"===e.align?"right":"right"===e.align?"left":"both"};
	width: ${e=>e.width};
	max-width: 100%;
	min-width: 150px;

	img,
	iframe,
	video,
	audio {
		width: 100%;
		max-width: 100%;
		margin: 0;
		display: block;
		min-height: 150px;
		border: 1px solid ${e=>e.theme.borderColorSplit};
		border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	}
	audio {
		min-height: auto;
		height: 50px;
	}
	img {
		height: auto;
		min-height: auto;
	}
`;o.ZP.div`
	position: relative;
`,o.ZP.div`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	justify-content: flex-end;
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(255, 255, 255, 0);
	will-change: background-color;
	transition: background-color ${e=>e.theme.transition};
	&:hover,
	&.active {
		background-color: rgba(255, 255, 255, 0.9);
	}
	button {
		margin: ${e=>Fe(e.theme.gutter/4)};
		margin-left: 0;
	}
`;const qo=o.ZP.div`
	margin: ${e=>Fe(e.theme.gutter/4)} 0 0 0;
	position: relative;
	text-align: center;
	font-weight: 300;
	font-style: italic;
	&:empty {
		&::before {
			content: '${bn("caption…","wp-eform")}';
			display: block;
			color: ${e=>e.theme.textColorSecondary};
			width: 100%;
			left: 0;
			white-space: pre;
			overflow: hidden;
			text-overflow: ellipsis;
			cursor: text;
			user-select: none;
			text-align: center;
		}
	}
`,Yo=(0,o.ZP)(Go)`
	border-width: 1px;
	audio,
	img,
	video,
	iframe {
		border: 0 none;
	}
`;function Zo({element:e}){const{src:t,alt:n,align:i,height:o,width:a,mediaType:s,caption:l}=e;let u;return u="youtube"===s||"vimeo"===s||"dailymotion"===s||"wistia"===s?(0,r.jsx)("iframe",{title:n,src:t,frameBorder:"0",height:o,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},void 0):"audio"===s?(0,r.jsx)("audio",{src:t,controls:!0,title:n},void 0):"video"===s?(0,r.jsx)("video",{src:t,controls:!0,title:n,height:o},void 0):(0,r.jsx)("img",{src:t,alt:n,height:o,width:a},void 0),(0,r.jsxs)(Yo,Object.assign({align:i,width:a,active:!1},{children:[u,""!==l?(0,r.jsx)(qo,{children:l},void 0):null]}),void 0)}const Xo=(0,i.lazy)((()=>n.e(760).then(n.bind(n,760)))),Qo=o.ZP.span`
	vertical-align: middle;
	margin-left: 0.25em;
	margin-right: 0.25em;
`;function Ko({element:e}){return(0,r.jsx)(Qo,{children:(0,r.jsx)(i.Suspense,Object.assign({fallback:(0,r.jsx)(Co.Paragraph,{inline:!0,width:"80px",marginBottom:0},void 0)},{children:(0,r.jsx)(Xo,{children:e.latex},void 0)}),void 0)},void 0)}const Jo=o.ZP.span`
	background-color: ${e=>e.empty?e.theme.disabledBackgroundColor:"transparent"};
	padding: 0 ${e=>e.empty?"0.25em":"0"};
	margin: 0 ${e=>e.empty?"0.25em":"0"};
	color: ${e=>e.empty?e.theme.disabledColor:"inherit"};
`,ea=(0,i.createContext)((()=>{throw new Error("No mentions renderer found. Kindly use MentionsProvider within the app.")}));function ta(e){const{mentions:t,children:n}=e;return(0,r.jsx)(ea.Provider,Object.assign({value:t},{children:n}),void 0)}function na({element:e,additionalMentions:t}){let n=(0,i.useContext)(ea)(e.character);return null!=n&&""!==n||t&&t[e.character]&&(n=t[e.character]),(0,r.jsx)(Jo,Object.assign({empty:null==n||""===n},{children:null!=n&&""!==n?n:"…"}),void 0)}const ra="wpeform-component-slateview",ia=o.ZP.div`
	color: inherit;
	line-height: 1.5;
	${ze};

	/** INLINE VIEW */
	&.${ra}--inline {
		display: inline;
		/** Just in case */
		> p:first-child,
		> blockquote:first-child {
			display: inline;
		}
	}

	${je}
`;function oa(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var aa=0;function sa(e){return"__private_"+aa+++"_"+e}function la(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var ua=function(){function e(e){void 0===e&&(e={}),Object.assign(this,e)}return e.load=function(e){return new this(e)},e}(),ca=sa("errors"),da=sa("shouldInvert"),ha={hasDigit:function(e,t){return void 0===e&&(e=1),void 0===t&&(t="should have at least $value digit(s)"),this._processValue((this._str.match(new RegExp(/\p{Nd}/,"gu"))||[]).length>=e,t,String(e))},hasLength:function(e,t){return void 0===e&&(e=0),void 0===t&&(t="should have exactly $value characters"),this._processValue(this._str.length===e,t,String(e))},hasMinLength:function(e,t){return void 0===e&&(e=1),void 0===t&&(t="should have a minimum length of $value"),this._processValue(this._str.length>=e,t,String(e))},hasMaxLength:function(e,t){return void 0===e&&(e=1),void 0===t&&(t="should have a maximum length of $value"),this._processValue(this._str.length<=e,t,String(e))},hasLowerCase:function(e,t){return void 0===e&&(e=1),void 0===t&&(t="should have at least $value lowercase character(s)"),this._processValue((this._str.match(new RegExp(/\p{Ll}/,"gu"))||[]).length>=e,t,String(e))},hasUpperCase:function(e,t){return void 0===e&&(e=1),void 0===t&&(t="should have at least $value uppercase character(s)"),this._processValue((this._str.match(new RegExp(/\p{Lu}/,"gu"))||[]).length>=e,t,String(e))},isEmail:function(e){return void 0===e&&(e="should be a valid email address"),this._processValue(null!==this._str.match(new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),e)},matches:function(e,t){return void 0===t&&(t="should match the pattern"),this._processValue(null!==this._str.match(e),t,String(e))}},fa=function(e){var t,n;function r(){var t;return t=e.apply(this,arguments)||this,Object.defineProperty(oa(t),ca,{writable:!0,value:void 0}),Object.defineProperty(oa(t),da,{writable:!0,value:void 0}),la(oa(t),ca)[ca]=[],la(oa(t),da)[da]=!1,t._str="",t._processValue=function(e,n,r){var i=la(oa(t),da)[da]?!e:e,o=null!=r?n.replace("$value",r):n;return la(oa(t),ca)[ca]=i?la(oa(t),ca)[ca]:[].concat(la(oa(t),ca)[ca],[o]),la(oa(t),da)[da]=!1,oa(t)},t.checkIf=function(e){return t._str=e,la(oa(t),ca)[ca]=[],la(oa(t),da)[da]=!1,oa(t)},t.not=function(){return la(oa(t),da)[da]=!0,oa(t)},t.isValid=function(){return 0===la(oa(t),ca)[ca].length},t.hasErrors=function(){return la(oa(t),ca)[ca]},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r}(ua).load(ha).checkIf;function pa(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ma(e){return!!e&&!!e[es]}function ga(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===ts}(e)||Array.isArray(e)||!!e[Ja]||!!e.constructor[Ja]||wa(e)||_a(e))}function va(e,t,n){void 0===n&&(n=!1),0===ya(e)?(n?Object.keys:ns)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function ya(e){var t=e[es];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:wa(e)?2:_a(e)?3:0}function ba(e,t){return 2===ya(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function xa(e,t,n){var r=ya(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function wa(e){return Za&&e instanceof Map}function _a(e){return Xa&&e instanceof Set}function Sa(e){return e.o||e.t}function Ea(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=rs(e);delete t[es];for(var n=ns(t),r=0;r<n.length;r++){var i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Ca(e,t){return void 0===t&&(t=!1),Ma(e)||ma(e)||!ga(e)||(ya(e)>1&&(e.set=e.add=e.clear=e.delete=ka),Object.freeze(e),t&&va(e,(function(e,t){return Ca(t,!0)}),!0)),e}function ka(){pa(2)}function Ma(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function Ta(e){var t=is[e];return t||pa(18,e),t}function Da(){return qa}function Aa(e,t){t&&(Ta("Patches"),e.u=[],e.s=[],e.v=t)}function Pa(e){Oa(e),e.p.forEach(Fa),e.p=null}function Oa(e){e===qa&&(qa=e.l)}function Ra(e){return qa={p:[],l:qa,h:e,m:!0,_:0}}function Fa(e){var t=e[es];0===t.i||1===t.i?t.j():t.O=!0}function La(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||Ta("ES5").S(t,e,r),r?(n[es].P&&(Pa(t),pa(4)),ga(e)&&(e=Ia(t,e),t.l||ja(t,e)),t.u&&Ta("Patches").M(n[es],e,t.u,t.s)):e=Ia(t,n,[]),Pa(t),t.u&&t.v(t.u,t.s),e!==Ka?e:void 0}function Ia(e,t,n){if(Ma(t))return t;var r=t[es];if(!r)return va(t,(function(i,o){return Na(e,r,t,i,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return ja(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=Ea(r.k):r.o;va(3===r.i?new Set(i):i,(function(t,o){return Na(e,r,i,t,o,n)})),ja(e,i,!1),n&&e.u&&Ta("Patches").R(r,n,e.u,e.s)}return r.o}function Na(e,t,n,r,i,o){if(ma(i)){var a=Ia(e,i,o&&t&&3!==t.i&&!ba(t.D,r)?o.concat(r):void 0);if(xa(n,r,a),!ma(a))return;e.m=!1}if(ga(i)&&!Ma(i)){if(!e.h.F&&e._<1)return;Ia(e,i),t&&t.A.l||ja(e,i)}}function ja(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&Ca(t,n)}function $a(e,t){var n=e[es];return(n?Sa(n):e)[t]}function za(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Ba(e){e.P||(e.P=!0,e.l&&Ba(e.l))}function Ua(e){e.o||(e.o=Ea(e.t))}function Ha(e,t,n){var r=wa(t)?Ta("MapSet").N(t,n):_a(t)?Ta("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:Da(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=r,o=os;n&&(i=[r],o=as);var a=Proxy.revocable(i,o),s=a.revoke,l=a.proxy;return r.k=l,r.j=s,l}(t,n):Ta("ES5").J(t,n);return(n?n.A:Da()).p.push(r),r}function Va(e){return ma(e)||pa(22,e),function e(t){if(!ga(t))return t;var n,r=t[es],i=ya(t);if(r){if(!r.P&&(r.i<4||!Ta("ES5").K(r)))return r.t;r.I=!0,n=Wa(t,i),r.I=!1}else n=Wa(t,i);return va(n,(function(t,i){r&&function(e,t){return 2===ya(e)?e.get(t):e[t]}(r.t,t)===i||xa(n,t,e(i))})),3===i?new Set(n):n}(e)}function Wa(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ea(e)}var Ga,qa,Ya="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),Za="undefined"!=typeof Map,Xa="undefined"!=typeof Set,Qa="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Ka=Ya?Symbol.for("immer-nothing"):((Ga={})["immer-nothing"]=!0,Ga),Ja=Ya?Symbol.for("immer-draftable"):"__$immer_draftable",es=Ya?Symbol.for("immer-state"):"__$immer_state",ts=""+Object.prototype.constructor,ns="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,rs=Object.getOwnPropertyDescriptors||function(e){var t={};return ns(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},is={},os={get:function(e,t){if(t===es)return e;var n=Sa(e);if(!ba(n,t))return function(e,t,n){var r,i=za(t,n);return i?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!ga(r)?r:r===$a(e.t,t)?(Ua(e),e.o[t]=Ha(e.A.h,r,e)):r},has:function(e,t){return t in Sa(e)},ownKeys:function(e){return Reflect.ownKeys(Sa(e))},set:function(e,t,n){var r=za(Sa(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=$a(Sa(e),t),o=null==i?void 0:i[es];if(o&&o.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,i)&&(void 0!==n||ba(e.t,t)))return!0;Ua(e),Ba(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==$a(e.t,t)||t in e.t?(e.D[t]=!1,Ua(e),Ba(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Sa(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){pa(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){pa(12)}},as={};va(os,(function(e,t){as[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),as.deleteProperty=function(e,t){return os.deleteProperty.call(this,e[0],t)},as.set=function(e,t,n){return os.set.call(this,e[0],t,n,e[0])};var ss=function(){function e(e){var t=this;this.g=Qa,this.F=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var i=n;n=e;var o=t;return function(e){var t=this;void 0===e&&(e=i);for(var r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return o.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(a))}))}}var a;if("function"!=typeof n&&pa(6),void 0!==r&&"function"!=typeof r&&pa(7),ga(e)){var s=Ra(t),l=Ha(t,e,void 0),u=!0;try{a=n(l),u=!1}finally{u?Pa(s):Oa(s)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return Aa(s,r),La(e,s)}),(function(e){throw Pa(s),e})):(Aa(s,r),La(a,s))}if(!e||"object"!=typeof e){if((a=n(e))===Ka)return;return void 0===a&&(a=e),t.F&&Ca(a,!0),a}pa(21,e)},this.produceWithPatches=function(e,n){return"function"==typeof e?function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(i))}))}:[t.produce(e,n,(function(e,t){r=e,i=t})),r,i];var r,i},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){ga(e)||pa(8),ma(e)&&(e=Va(e));var t=Ra(this),n=Ha(this,e,void 0);return n[es].C=!0,Oa(t),n},t.finishDraft=function(e,t){var n=(e&&e[es]).A;return Aa(n,t),La(void 0,n)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!Qa&&pa(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var i=Ta("Patches").$;return ma(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(n+1))}))},e}(),ls=new ss,us=ls.produce;ls.produceWithPatches.bind(ls),ls.setAutoFreeze.bind(ls),ls.setUseProxies.bind(ls),ls.applyPatches.bind(ls),ls.createDraft.bind(ls),ls.finishDraft.bind(ls);var cs=us;function ds(e,t,n){var r=this,o=(0,i.useRef)(null),a=(0,i.useRef)(0),s=(0,i.useRef)(null),l=(0,i.useRef)([]),u=(0,i.useRef)(),c=(0,i.useRef)(),d=(0,i.useRef)(e),h=(0,i.useRef)(!0);d.current=e;var f=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var p=!!(n=n||{}).leading,m=!("trailing"in n)||!!n.trailing,g="maxWait"in n,v=g?Math.max(+n.maxWait||0,t):null;(0,i.useEffect)((function(){return h.current=!0,function(){h.current=!1}}),[]);var y=(0,i.useMemo)((function(){var e=function(e){var t=l.current,n=u.current;return l.current=u.current=null,a.current=e,c.current=d.current.apply(n,t)},n=function(e,t){f&&cancelAnimationFrame(s.current),s.current=f?requestAnimationFrame(e):setTimeout(e,t)},i=function(e){if(!h.current)return!1;var n=e-o.current,r=e-a.current;return!o.current||n>=t||n<0||g&&r>=v},y=function(t){return s.current=null,m&&l.current?e(t):(l.current=u.current=null,c.current)},b=function(){var e=Date.now();if(i(e))return y(e);if(h.current){var r=e-o.current,s=e-a.current,l=t-r,u=g?Math.min(l,v-s):l;n(b,u)}},x=function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];var m=Date.now(),v=i(m);if(l.current=d,u.current=r,o.current=m,v){if(!s.current&&h.current)return a.current=o.current,n(b,t),p?e(o.current):c.current;if(g)return n(b,t),e(o.current)}return s.current||n(b,t),c.current};return x.cancel=function(){s.current&&(f?cancelAnimationFrame(s.current):clearTimeout(s.current)),a.current=0,l.current=o.current=u.current=s.current=null},x.isPending=function(){return!!s.current},x.flush=function(){return s.current?y(Date.now()):c.current},x}),[p,g,t,v,m,f]);return y}function hs(e){return hs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hs(e)}function fs(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ps(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ms(e,t,n){return t&&ps(e.prototype,t),n&&ps(e,n),e}function gs(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ys(e,t)}function vs(e){return vs=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},vs(e)}function ys(e,t){return ys=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ys(e,t)}function bs(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function xs(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=vs(e);if(t){var i=vs(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,n)}}function ws(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=vs(e)););return e}function _s(e,t,n){return _s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=ws(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}},_s(e,t,n||e)}function Ss(e,t,n,r){return Ss="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,t,n,r){var i,o=ws(e,t);if(o){if((i=Object.getOwnPropertyDescriptor(o,t)).set)return i.set.call(r,n),!0;if(!i.writable)return!1}if(i=Object.getOwnPropertyDescriptor(r,t)){if(!i.writable)return!1;i.value=n,Object.defineProperty(r,t,i)}else!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(r,t,n);return!0},Ss(e,t,n,r)}function Es(e,t,n,r,i){if(!Ss(e,t,n,r||e)&&i)throw new Error("failed to set property");return n}function Cs(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ks(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ks(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ks(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ms(e){return"string"==typeof e||e instanceof String}var Ts={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function Ds(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function As(e,t){if(t===e)return!0;var n,r=Array.isArray(t),i=Array.isArray(e);if(r&&i){if(t.length!=e.length)return!1;for(n=0;n<t.length;n++)if(!As(t[n],e[n]))return!1;return!0}if(r!=i)return!1;if(t&&e&&"object"===hs(t)&&"object"===hs(e)){var o=t instanceof Date,a=e instanceof Date;if(o&&a)return t.getTime()==e.getTime();if(o!=a)return!1;var s=t instanceof RegExp,l=e instanceof RegExp;if(s&&l)return t.toString()==e.toString();if(s!=l)return!1;var u=Object.keys(t);for(n=0;n<u.length;n++)if(!Object.prototype.hasOwnProperty.call(e,u[n]))return!1;for(n=0;n<u.length;n++)if(!As(e[u[n]],t[u[n]]))return!1;return!0}return!(!t||!e||"function"!=typeof t||"function"!=typeof e)&&t.toString()===e.toString()}var Ps=function(){function e(t,n,r,i){for(fs(this,e),this.value=t,this.cursorPos=n,this.oldValue=r,this.oldSelection=i;this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start}return ms(e,[{key:"startChangePos",get:function(){return Math.min(this.cursorPos,this.oldSelection.start)}},{key:"insertedCount",get:function(){return this.cursorPos-this.startChangePos}},{key:"inserted",get:function(){return this.value.substr(this.startChangePos,this.insertedCount)}},{key:"removedCount",get:function(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}},{key:"removed",get:function(){return this.oldValue.substr(this.startChangePos,this.removedCount)}},{key:"head",get:function(){return this.value.substring(0,this.startChangePos)}},{key:"tail",get:function(){return this.value.substring(this.startChangePos+this.insertedCount)}},{key:"removeDirection",get:function(){return!this.removedCount||this.insertedCount?Ts.NONE:this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos?Ts.RIGHT:Ts.LEFT}}]),e}(),Os=function(){function e(t){fs(this,e),Object.assign(this,{inserted:"",rawInserted:"",skip:!1,tailShift:0},t)}return ms(e,[{key:"aggregate",value:function(e){return this.rawInserted+=e.rawInserted,this.skip=this.skip||e.skip,this.inserted+=e.inserted,this.tailShift+=e.tailShift,this}},{key:"offset",get:function(){return this.tailShift+this.inserted.length}}]),e}(),Rs=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;fs(this,e),this.value=t,this.from=n,this.stop=r}return ms(e,[{key:"toString",value:function(){return this.value}},{key:"extend",value:function(e){this.value+=String(e)}},{key:"appendTo",value:function(e){return e.append(this.toString(),{tail:!0}).aggregate(e._appendPlaceholder())}},{key:"state",get:function(){return{value:this.value,from:this.from,stop:this.stop}},set:function(e){Object.assign(this,e)}},{key:"shiftBefore",value:function(e){if(this.from>=e||!this.value.length)return"";var t=this.value[0];return this.value=this.value.slice(1),t}}]),e}();function Fs(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Fs.InputMask(e,t)}var Ls=function(){function e(t){fs(this,e),this._value="",this._update(Object.assign({},e.DEFAULTS,t)),this.isInitialized=!0}return ms(e,[{key:"updateOptions",value:function(e){Object.keys(e).length&&this.withValueRefresh(this._update.bind(this,e))}},{key:"_update",value:function(e){Object.assign(this,e)}},{key:"state",get:function(){return{_value:this.value}},set:function(e){this._value=e._value}},{key:"reset",value:function(){this._value=""}},{key:"value",get:function(){return this._value},set:function(e){this.resolve(e)}},{key:"resolve",value:function(e){return this.reset(),this.append(e,{input:!0},""),this.doCommit(),this.value}},{key:"unmaskedValue",get:function(){return this.value},set:function(e){this.reset(),this.append(e,{},""),this.doCommit()}},{key:"typedValue",get:function(){return this.doParse(this.value)},set:function(e){this.value=this.doFormat(e)}},{key:"rawInputValue",get:function(){return this.extractInput(0,this.value.length,{raw:!0})},set:function(e){this.reset(),this.append(e,{raw:!0},""),this.doCommit()}},{key:"isComplete",get:function(){return!0}},{key:"nearestInputPos",value:function(e,t){return e}},{key:"extractInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this.value.slice(e,t)}},{key:"extractTail",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return new Rs(this.extractInput(e,t),e)}},{key:"appendTail",value:function(e){return Ms(e)&&(e=new Rs(String(e))),e.appendTo(this)}},{key:"_appendCharRaw",value:function(e){return e?(this._value+=e,new Os({inserted:e,rawInserted:e})):new Os}},{key:"_appendChar",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=this.state,i=this._appendCharRaw(this.doPrepare(e,t),t);if(i.inserted){var o,a=!1!==this.doValidate(t);if(a&&null!=n){var s=this.state;this.overwrite&&(o=n.state,n.shiftBefore(this.value.length));var l=this.appendTail(n);(a=l.rawInserted===n.toString())&&l.inserted&&(this.state=s)}a||(i=new Os,this.state=r,n&&o&&(n.state=o))}return i}},{key:"_appendPlaceholder",value:function(){return new Os}},{key:"append",value:function(e,t,n){if(!Ms(e))throw new Error("value should be string");var r=new Os,i=Ms(n)?new Rs(String(n)):n;t&&t.tail&&(t._beforeTailState=this.state);for(var o=0;o<e.length;++o)r.aggregate(this._appendChar(e[o],t,i));return null!=i&&(r.tailShift+=this.appendTail(i).tailShift),r}},{key:"remove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this._value=this.value.slice(0,e)+this.value.slice(t),new Os}},{key:"withValueRefresh",value:function(e){if(this._refreshing||!this.isInitialized)return e();this._refreshing=!0;var t=this.rawInputValue,n=this.value,r=e();return this.rawInputValue=t,this.value&&this.value!==n&&0===n.indexOf(this.value)&&this.append(n.slice(this.value.length),{},""),delete this._refreshing,r}},{key:"runIsolated",value:function(e){if(this._isolated||!this.isInitialized)return e(this);this._isolated=!0;var t=this.state,n=e(this);return this.state=t,delete this._isolated,n}},{key:"doPrepare",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.prepare?this.prepare(e,this,t):e}},{key:"doValidate",value:function(e){return(!this.validate||this.validate(this.value,this,e))&&(!this.parent||this.parent.doValidate(e))}},{key:"doCommit",value:function(){this.commit&&this.commit(this.value,this)}},{key:"doFormat",value:function(e){return this.format?this.format(e,this):e}},{key:"doParse",value:function(e){return this.parse?this.parse(e,this):e}},{key:"splice",value:function(e,t,n,r){var i=e+t,o=this.extractTail(i),a=this.nearestInputPos(e,r);return new Os({tailShift:a-e}).aggregate(this.remove(a)).aggregate(this.append(n,{input:!0},o))}}]),e}();function Is(e){if(null==e)throw new Error("mask property should be defined");return e instanceof RegExp?Fs.MaskedRegExp:Ms(e)?Fs.MaskedPattern:e instanceof Date||e===Date?Fs.MaskedDate:e instanceof Number||"number"==typeof e||e===Number?Fs.MaskedNumber:Array.isArray(e)||e===Array?Fs.MaskedDynamic:Fs.Masked&&e.prototype instanceof Fs.Masked?e:e instanceof Function?Fs.MaskedFunction:e instanceof Fs.Masked?e.constructor:(console.warn("Mask not found for mask",e),Fs.Masked)}function Ns(e){if(Fs.Masked&&e instanceof Fs.Masked)return e;var t=(e=Object.assign({},e)).mask;if(Fs.Masked&&t instanceof Fs.Masked)return t;var n=Is(t);if(!n)throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");return new n(e)}Ls.DEFAULTS={format:function(e){return e},parse:function(e){return e}},Fs.Masked=Ls,Fs.createMask=Ns;var js=["mask"],$s={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./},zs=function(){function e(t){fs(this,e);var n=t.mask,r=bs(t,js);this.masked=Ns({mask:n}),Object.assign(this,r)}return ms(e,[{key:"reset",value:function(){this._isFilled=!1,this.masked.reset()}},{key:"remove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return 0===e&&t>=1?(this._isFilled=!1,this.masked.remove(e,t)):new Os}},{key:"value",get:function(){return this.masked.value||(this._isFilled&&!this.isOptional?this.placeholderChar:"")}},{key:"unmaskedValue",get:function(){return this.masked.unmaskedValue}},{key:"isComplete",get:function(){return Boolean(this.masked.value)||this.isOptional}},{key:"_appendChar",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._isFilled)return new Os;var n=this.masked.state,r=this.masked._appendChar(e,t);return r.inserted&&!1===this.doValidate(t)&&(r.inserted=r.rawInserted="",this.masked.state=n),r.inserted||this.isOptional||this.lazy||t.input||(r.inserted=this.placeholderChar),r.skip=!r.inserted&&!this.isOptional,this._isFilled=Boolean(r.inserted),r}},{key:"append",value:function(){var e;return(e=this.masked).append.apply(e,arguments)}},{key:"_appendPlaceholder",value:function(){var e=new Os;return this._isFilled||this.isOptional||(this._isFilled=!0,e.inserted=this.placeholderChar),e}},{key:"extractTail",value:function(){var e;return(e=this.masked).extractTail.apply(e,arguments)}},{key:"appendTail",value:function(){var e;return(e=this.masked).appendTail.apply(e,arguments)}},{key:"extractInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0;return this.masked.extractInput(e,t,n)}},{key:"nearestInputPos",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ts.NONE,n=this.value.length,r=Math.min(Math.max(e,0),n);switch(t){case Ts.LEFT:case Ts.FORCE_LEFT:return this.isComplete?r:0;case Ts.RIGHT:case Ts.FORCE_RIGHT:return this.isComplete?r:n;case Ts.NONE:default:return r}}},{key:"doValidate",value:function(){var e,t;return(e=this.masked).doValidate.apply(e,arguments)&&(!this.parent||(t=this.parent).doValidate.apply(t,arguments))}},{key:"doCommit",value:function(){this.masked.doCommit()}},{key:"state",get:function(){return{masked:this.masked.state,_isFilled:this._isFilled}},set:function(e){this.masked.state=e.masked,this._isFilled=e._isFilled}}]),e}(),Bs=function(){function e(t){fs(this,e),Object.assign(this,t),this._value=""}return ms(e,[{key:"value",get:function(){return this._value}},{key:"unmaskedValue",get:function(){return this.isUnmasking?this.value:""}},{key:"reset",value:function(){this._isRawInput=!1,this._value=""}},{key:"remove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return this._value=this._value.slice(0,e)+this._value.slice(t),this._value||(this._isRawInput=!1),new Os}},{key:"nearestInputPos",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ts.NONE,n=this._value.length;switch(t){case Ts.LEFT:case Ts.FORCE_LEFT:return 0;case Ts.NONE:case Ts.RIGHT:case Ts.FORCE_RIGHT:default:return n}}},{key:"extractInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).raw&&this._isRawInput&&this._value.slice(e,t)||""}},{key:"isComplete",get:function(){return!0}},{key:"_appendChar",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new Os;if(this._value)return n;var r=this.char===e[0]&&(this.isUnmasking||t.input||t.raw)&&!t.tail;return r&&(n.rawInserted=this.char),this._value=n.inserted=this.char,this._isRawInput=r&&(t.raw||t.input),n}},{key:"_appendPlaceholder",value:function(){var e=new Os;return this._value||(this._value=e.inserted=this.char),e}},{key:"extractTail",value:function(){return arguments.length>1&&void 0!==arguments[1]||this.value.length,new Rs("")}},{key:"appendTail",value:function(e){return Ms(e)&&(e=new Rs(String(e))),e.appendTo(this)}},{key:"append",value:function(e,t,n){var r=this._appendChar(e,t);return null!=n&&(r.tailShift+=this.appendTail(n).tailShift),r}},{key:"doCommit",value:function(){}},{key:"state",get:function(){return{_value:this._value,_isRawInput:this._isRawInput}},set:function(e){Object.assign(this,e)}}]),e}(),Us=["chunks"],Hs=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;fs(this,e),this.chunks=t,this.from=n}return ms(e,[{key:"toString",value:function(){return this.chunks.map(String).join("")}},{key:"extend",value:function(t){if(String(t)){Ms(t)&&(t=new Rs(String(t)));var n=this.chunks[this.chunks.length-1],r=n&&(n.stop===t.stop||null==t.stop)&&t.from===n.from+n.toString().length;if(t instanceof Rs)r?n.extend(t.toString()):this.chunks.push(t);else if(t instanceof e){if(null==t.stop)for(var i;t.chunks.length&&null==t.chunks[0].stop;)(i=t.chunks.shift()).from+=t.from,this.extend(i);t.toString()&&(t.stop=t.blockIndex,this.chunks.push(t))}}}},{key:"appendTo",value:function(t){if(!(t instanceof Fs.MaskedPattern))return new Rs(this.toString()).appendTo(t);for(var n=new Os,r=0;r<this.chunks.length&&!n.skip;++r){var i=this.chunks[r],o=t._mapPosToBlock(t.value.length),a=i.stop,s=void 0;if(null!=a&&(!o||o.index<=a)&&((i instanceof e||t._stops.indexOf(a)>=0)&&n.aggregate(t._appendPlaceholder(a)),s=i instanceof e&&t._blocks[a]),s){var l=s.appendTail(i);l.skip=!1,n.aggregate(l),t._value+=l.inserted;var u=i.toString().slice(l.rawInserted.length);u&&n.aggregate(t.append(u,{tail:!0}))}else n.aggregate(t.append(i.toString(),{tail:!0}))}return n}},{key:"state",get:function(){return{chunks:this.chunks.map((function(e){return e.state})),from:this.from,stop:this.stop,blockIndex:this.blockIndex}},set:function(t){var n=t.chunks,r=bs(t,Us);Object.assign(this,r),this.chunks=n.map((function(t){var n="chunks"in t?new e:new Rs;return n.state=t,n}))}},{key:"shiftBefore",value:function(e){if(this.from>=e||!this.chunks.length)return"";for(var t=e-this.from,n=0;n<this.chunks.length;){var r=this.chunks[n],i=r.shiftBefore(t);if(r.toString()){if(!i)break;++n}else this.chunks.splice(n,1);if(i)return i}return""}}]),e}(),Vs=function(e){gs(n,e);var t=xs(n);function n(){return fs(this,n),t.apply(this,arguments)}return ms(n,[{key:"_update",value:function(e){e.mask&&(e.validate=function(t){return t.search(e.mask)>=0}),_s(vs(n.prototype),"_update",this).call(this,e)}}]),n}(Ls);Fs.MaskedRegExp=Vs;var Ws=["_blocks"],Gs=function(e){gs(n,e);var t=xs(n);function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return fs(this,n),e.definitions=Object.assign({},$s,e.definitions),t.call(this,Object.assign({},n.DEFAULTS,e))}return ms(n,[{key:"_update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.definitions=Object.assign({},this.definitions,e.definitions),_s(vs(n.prototype),"_update",this).call(this,e),this._rebuildMask()}},{key:"_rebuildMask",value:function(){var e=this,t=this.definitions;this._blocks=[],this._stops=[],this._maskedBlocks={};var r=this.mask;if(r&&t)for(var i=!1,o=!1,a=0;a<r.length;++a){if(this.blocks){var s=function(){var t=r.slice(a),n=Object.keys(e.blocks).filter((function(e){return 0===t.indexOf(e)}));n.sort((function(e,t){return t.length-e.length}));var i=n[0];if(i){var o=Ns(Object.assign({parent:e,lazy:e.lazy,placeholderChar:e.placeholderChar,overwrite:e.overwrite},e.blocks[i]));return o&&(e._blocks.push(o),e._maskedBlocks[i]||(e._maskedBlocks[i]=[]),e._maskedBlocks[i].push(e._blocks.length-1)),a+=i.length-1,"continue"}}();if("continue"===s)continue}var l=r[a],u=l in t;if(l!==n.STOP_CHAR)if("{"!==l&&"}"!==l)if("["!==l&&"]"!==l){if(l===n.ESCAPE_CHAR){if(++a,!(l=r[a]))break;u=!1}var c=u?new zs({parent:this,lazy:this.lazy,placeholderChar:this.placeholderChar,mask:t[l],isOptional:o}):new Bs({char:l,isUnmasking:i});this._blocks.push(c)}else o=!o;else i=!i;else this._stops.push(this._blocks.length)}}},{key:"state",get:function(){return Object.assign({},_s(vs(n.prototype),"state",this),{_blocks:this._blocks.map((function(e){return e.state}))})},set:function(e){var t=e._blocks,r=bs(e,Ws);this._blocks.forEach((function(e,n){return e.state=t[n]})),Es(vs(n.prototype),"state",r,this,!0)}},{key:"reset",value:function(){_s(vs(n.prototype),"reset",this).call(this),this._blocks.forEach((function(e){return e.reset()}))}},{key:"isComplete",get:function(){return this._blocks.every((function(e){return e.isComplete}))}},{key:"doCommit",value:function(){this._blocks.forEach((function(e){return e.doCommit()})),_s(vs(n.prototype),"doCommit",this).call(this)}},{key:"unmaskedValue",get:function(){return this._blocks.reduce((function(e,t){return e+t.unmaskedValue}),"")},set:function(e){Es(vs(n.prototype),"unmaskedValue",e,this,!0)}},{key:"value",get:function(){return this._blocks.reduce((function(e,t){return e+t.value}),"")},set:function(e){Es(vs(n.prototype),"value",e,this,!0)}},{key:"appendTail",value:function(e){return _s(vs(n.prototype),"appendTail",this).call(this,e).aggregate(this._appendPlaceholder())}},{key:"_appendCharRaw",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._mapPosToBlock(this.value.length),r=new Os;if(!n)return r;for(var i=n.index;;++i){var o=this._blocks[i];if(!o)break;var a=o._appendChar(e,t),s=a.skip;if(r.aggregate(a),s||a.rawInserted)break}return r}},{key:"extractTail",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,r=new Hs;return t===n||this._forEachBlocksInRange(t,n,(function(t,n,i,o){var a=t.extractTail(i,o);a.stop=e._findStopBefore(n),a.from=e._blockStartPos(n),a instanceof Hs&&(a.blockIndex=n),r.extend(a)})),r}},{key:"extractInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e===t)return"";var r="";return this._forEachBlocksInRange(e,t,(function(e,t,i,o){r+=e.extractInput(i,o,n)})),r}},{key:"_findStopBefore",value:function(e){for(var t,n=0;n<this._stops.length;++n){var r=this._stops[n];if(!(r<=e))break;t=r}return t}},{key:"_appendPlaceholder",value:function(e){var t=this,n=new Os;if(this.lazy&&null==e)return n;var r=this._mapPosToBlock(this.value.length);if(!r)return n;var i=r.index,o=null!=e?e:this._blocks.length;return this._blocks.slice(i,o).forEach((function(r){if(!r.lazy||null!=e){var i=null!=r._blocks?[r._blocks.length]:[],o=r._appendPlaceholder.apply(r,i);t._value+=o.inserted,n.aggregate(o)}})),n}},{key:"_mapPosToBlock",value:function(e){for(var t="",n=0;n<this._blocks.length;++n){var r=this._blocks[n],i=t.length;if(e<=(t+=r.value).length)return{index:n,offset:e-i}}}},{key:"_blockStartPos",value:function(e){return this._blocks.slice(0,e).reduce((function(e,t){return e+t.value.length}),0)}},{key:"_forEachBlocksInRange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0,r=this._mapPosToBlock(e);if(r){var i=this._mapPosToBlock(t),o=i&&r.index===i.index,a=r.offset,s=i&&o?i.offset:this._blocks[r.index].value.length;if(n(this._blocks[r.index],r.index,a,s),i&&!o){for(var l=r.index+1;l<i.index;++l)n(this._blocks[l],l,0,this._blocks[l].value.length);n(this._blocks[i.index],i.index,0,i.offset)}}}},{key:"remove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,r=_s(vs(n.prototype),"remove",this).call(this,e,t);return this._forEachBlocksInRange(e,t,(function(e,t,n,i){r.aggregate(e.remove(n,i))})),r}},{key:"nearestInputPos",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ts.NONE,n=this._mapPosToBlock(e)||{index:0,offset:0},r=n.offset,i=n.index,o=this._blocks[i];if(!o)return e;var a=r;0!==a&&a<o.value.length&&(a=o.nearestInputPos(r,function(e){switch(e){case Ts.LEFT:return Ts.FORCE_LEFT;case Ts.RIGHT:return Ts.FORCE_RIGHT;default:return e}}(t)));var s=a===o.value.length;if(0!==a&&!s)return this._blockStartPos(i)+a;var l=s?i+1:i;if(t===Ts.NONE){if(l>0){var u=l-1,c=this._blocks[u],d=c.nearestInputPos(0,Ts.NONE);if(!c.value.length||d!==c.value.length)return this._blockStartPos(l)}for(var h=l;h<this._blocks.length;++h){var f=this._blocks[h],p=f.nearestInputPos(0,Ts.NONE);if(!f.value.length||p!==f.value.length)return this._blockStartPos(h)+p}for(var m=l-1;m>=0;--m){var g=this._blocks[m],v=g.nearestInputPos(0,Ts.NONE);if(!g.value.length||v!==g.value.length)return this._blockStartPos(m)+g.value.length}return e}if(t===Ts.LEFT||t===Ts.FORCE_LEFT){for(var y,b=l;b<this._blocks.length;++b)if(this._blocks[b].value){y=b;break}if(null!=y){var x=this._blocks[y],w=x.nearestInputPos(0,Ts.RIGHT);if(0===w&&x.unmaskedValue.length)return this._blockStartPos(y)+w}for(var _,S=-1,E=l-1;E>=0;--E){var C=this._blocks[E],k=C.nearestInputPos(C.value.length,Ts.FORCE_LEFT);if(C.value&&0===k||(_=E),0!==k){if(k!==C.value.length)return this._blockStartPos(E)+k;S=E;break}}if(t===Ts.LEFT)for(var M=S+1;M<=Math.min(l,this._blocks.length-1);++M){var T=this._blocks[M],D=T.nearestInputPos(0,Ts.NONE),A=this._blockStartPos(M)+D;if(A>e)break;if(D!==T.value.length)return A}if(S>=0)return this._blockStartPos(S)+this._blocks[S].value.length;if(t===Ts.FORCE_LEFT||this.lazy&&!this.extractInput()&&!function(e){if(!e)return!1;var t=e.value;return!t||e.nearestInputPos(0,Ts.NONE)!==t.length}(this._blocks[l]))return 0;if(null!=_)return this._blockStartPos(_);for(var P=l;P<this._blocks.length;++P){var O=this._blocks[P],R=O.nearestInputPos(0,Ts.NONE);if(!O.value.length||R!==O.value.length)return this._blockStartPos(P)+R}return 0}if(t===Ts.RIGHT||t===Ts.FORCE_RIGHT){for(var F,L,I=l;I<this._blocks.length;++I){var N=this._blocks[I],j=N.nearestInputPos(0,Ts.NONE);if(j!==N.value.length){L=this._blockStartPos(I)+j,F=I;break}}if(null!=F&&null!=L){for(var $=F;$<this._blocks.length;++$){var z=this._blocks[$],B=z.nearestInputPos(0,Ts.FORCE_RIGHT);if(B!==z.value.length)return this._blockStartPos($)+B}return t===Ts.FORCE_RIGHT?this.value.length:L}for(var U=Math.min(l,this._blocks.length-1);U>=0;--U){var H=this._blocks[U],V=H.nearestInputPos(H.value.length,Ts.LEFT);if(0!==V){var W=this._blockStartPos(U)+V;if(W>=e)return W;break}}}return e}},{key:"maskedBlock",value:function(e){return this.maskedBlocks(e)[0]}},{key:"maskedBlocks",value:function(e){var t=this,n=this._maskedBlocks[e];return n?n.map((function(e){return t._blocks[e]})):[]}}]),n}(Ls);Gs.DEFAULTS={lazy:!0,placeholderChar:"_"},Gs.STOP_CHAR="`",Gs.ESCAPE_CHAR="\\",Gs.InputDefinition=zs,Gs.FixedDefinition=Bs,Fs.MaskedPattern=Gs;var qs=function(e){gs(n,e);var t=xs(n);function n(){return fs(this,n),t.apply(this,arguments)}return ms(n,[{key:"_matchFrom",get:function(){return this.maxLength-String(this.from).length}},{key:"_update",value:function(e){e=Object.assign({to:this.to||0,from:this.from||0},e);var t=String(e.to).length;null!=e.maxLength&&(t=Math.max(t,e.maxLength)),e.maxLength=t;for(var r=String(e.from).padStart(t,"0"),i=String(e.to).padStart(t,"0"),o=0;o<i.length&&i[o]===r[o];)++o;e.mask=i.slice(0,o).replace(/0/g,"\\0")+"0".repeat(t-o),_s(vs(n.prototype),"_update",this).call(this,e)}},{key:"isComplete",get:function(){return _s(vs(n.prototype),"isComplete",this)&&Boolean(this.value)}},{key:"boundaries",value:function(e){var t="",n="",r=Cs(e.match(/^(\D*)(\d*)(\D*)/)||[],3),i=r[1],o=r[2];return o&&(t="0".repeat(i.length)+o,n="9".repeat(i.length)+o),[t=t.padEnd(this.maxLength,"0"),n=n.padEnd(this.maxLength,"9")]}},{key:"doPrepare",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e=_s(vs(n.prototype),"doPrepare",this).call(this,e,t).replace(/\D/g,""),!this.autofix)return e;for(var r=String(this.from).padStart(this.maxLength,"0"),i=String(this.to).padStart(this.maxLength,"0"),o=this.value,a="",s=0;s<e.length;++s){var l=o+a+e[s],u=Cs(this.boundaries(l),2),c=u[0],d=u[1];Number(d)<this.from?a+=r[l.length-1]:Number(c)>this.to?a+=i[l.length-1]:a+=e[s]}return a}},{key:"doValidate",value:function(){var e,t=this.value;if(-1===t.search(/[^0]/)&&t.length<=this._matchFrom)return!0;for(var r=Cs(this.boundaries(t),2),i=r[0],o=r[1],a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return this.from<=Number(o)&&Number(i)<=this.to&&(e=_s(vs(n.prototype),"doValidate",this)).call.apply(e,[this].concat(s))}}]),n}(Gs);Fs.MaskedRange=qs;var Ys=function(e){gs(n,e);var t=xs(n);function n(e){return fs(this,n),t.call(this,Object.assign({},n.DEFAULTS,e))}return ms(n,[{key:"_update",value:function(e){e.mask===Date&&delete e.mask,e.pattern&&(e.mask=e.pattern);var t=e.blocks;e.blocks=Object.assign({},n.GET_DEFAULT_BLOCKS()),e.min&&(e.blocks.Y.from=e.min.getFullYear()),e.max&&(e.blocks.Y.to=e.max.getFullYear()),e.min&&e.max&&e.blocks.Y.from===e.blocks.Y.to&&(e.blocks.m.from=e.min.getMonth()+1,e.blocks.m.to=e.max.getMonth()+1,e.blocks.m.from===e.blocks.m.to&&(e.blocks.d.from=e.min.getDate(),e.blocks.d.to=e.max.getDate())),Object.assign(e.blocks,t),Object.keys(e.blocks).forEach((function(t){var n=e.blocks[t];"autofix"in n||(n.autofix=e.autofix)})),_s(vs(n.prototype),"_update",this).call(this,e)}},{key:"doValidate",value:function(){for(var e,t=this.date,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=_s(vs(n.prototype),"doValidate",this)).call.apply(e,[this].concat(i))&&(!this.isComplete||this.isDateExist(this.value)&&null!=t&&(null==this.min||this.min<=t)&&(null==this.max||t<=this.max))}},{key:"isDateExist",value:function(e){return this.format(this.parse(e,this),this).indexOf(e)>=0}},{key:"date",get:function(){return this.typedValue},set:function(e){this.typedValue=e}},{key:"typedValue",get:function(){return this.isComplete?_s(vs(n.prototype),"typedValue",this):null},set:function(e){Es(vs(n.prototype),"typedValue",e,this,!0)}}]),n}(Gs);Ys.DEFAULTS={pattern:"d{.}`m{.}`Y",format:function(e){return[String(e.getDate()).padStart(2,"0"),String(e.getMonth()+1).padStart(2,"0"),e.getFullYear()].join(".")},parse:function(e){var t=Cs(e.split("."),3),n=t[0],r=t[1],i=t[2];return new Date(i,r-1,n)}},Ys.GET_DEFAULT_BLOCKS=function(){return{d:{mask:qs,from:1,to:31,maxLength:2},m:{mask:qs,from:1,to:12,maxLength:2},Y:{mask:qs,from:1900,to:9999}}},Fs.MaskedDate=Ys;var Zs=function(){function e(){fs(this,e)}return ms(e,[{key:"selectionStart",get:function(){var e;try{e=this._unsafeSelectionStart}catch(e){}return null!=e?e:this.value.length}},{key:"selectionEnd",get:function(){var e;try{e=this._unsafeSelectionEnd}catch(e){}return null!=e?e:this.value.length}},{key:"select",value:function(e,t){if(null!=e&&null!=t&&(e!==this.selectionStart||t!==this.selectionEnd))try{this._unsafeSelect(e,t)}catch(e){}}},{key:"_unsafeSelect",value:function(e,t){}},{key:"isActive",get:function(){return!1}},{key:"bindEvents",value:function(e){}},{key:"unbindEvents",value:function(){}}]),e}();Fs.MaskElement=Zs;var Xs=function(e){gs(n,e);var t=xs(n);function n(e){var r;return fs(this,n),(r=t.call(this)).input=e,r._handlers={},r}return ms(n,[{key:"rootElement",get:function(){return this.input.getRootNode?this.input.getRootNode():document}},{key:"isActive",get:function(){return this.input===this.rootElement.activeElement}},{key:"_unsafeSelectionStart",get:function(){return this.input.selectionStart}},{key:"_unsafeSelectionEnd",get:function(){return this.input.selectionEnd}},{key:"_unsafeSelect",value:function(e,t){this.input.setSelectionRange(e,t)}},{key:"value",get:function(){return this.input.value},set:function(e){this.input.value=e}},{key:"bindEvents",value:function(e){var t=this;Object.keys(e).forEach((function(r){return t._toggleEventHandler(n.EVENTS_MAP[r],e[r])}))}},{key:"unbindEvents",value:function(){var e=this;Object.keys(this._handlers).forEach((function(t){return e._toggleEventHandler(t)}))}},{key:"_toggleEventHandler",value:function(e,t){this._handlers[e]&&(this.input.removeEventListener(e,this._handlers[e]),delete this._handlers[e]),t&&(this.input.addEventListener(e,t),this._handlers[e]=t)}}]),n}(Zs);Xs.EVENTS_MAP={selectionChange:"keydown",input:"input",drop:"drop",click:"click",focus:"focus",commit:"blur"},Fs.HTMLMaskElement=Xs;var Qs=function(e){gs(n,e);var t=xs(n);function n(){return fs(this,n),t.apply(this,arguments)}return ms(n,[{key:"_unsafeSelectionStart",get:function(){var e=this.rootElement,t=e.getSelection&&e.getSelection();return t&&t.anchorOffset}},{key:"_unsafeSelectionEnd",get:function(){var e=this.rootElement,t=e.getSelection&&e.getSelection();return t&&this._unsafeSelectionStart+String(t).length}},{key:"_unsafeSelect",value:function(e,t){if(this.rootElement.createRange){var n=this.rootElement.createRange();n.setStart(this.input.firstChild||this.input,e),n.setEnd(this.input.lastChild||this.input,t);var r=this.rootElement,i=r.getSelection&&r.getSelection();i&&(i.removeAllRanges(),i.addRange(n))}}},{key:"value",get:function(){return this.input.textContent},set:function(e){this.input.textContent=e}}]),n}(Xs);Fs.HTMLContenteditableMaskElement=Qs;var Ks=["mask"],Js=function(){function e(t,n){fs(this,e),this.el=t instanceof Zs?t:t.isContentEditable&&"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName?new Qs(t):new Xs(t),this.masked=Ns(n),this._listeners={},this._value="",this._unmaskedValue="",this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}return ms(e,[{key:"mask",get:function(){return this.masked.mask},set:function(e){if(!this.maskEquals(e))if(e instanceof Fs.Masked||this.masked.constructor!==Is(e)){var t=Ns({mask:e});t.unmaskedValue=this.masked.unmaskedValue,this.masked=t}else this.masked.updateOptions({mask:e})}},{key:"maskEquals",value:function(e){return null==e||e===this.masked.mask||e===Date&&this.masked instanceof Ys}},{key:"value",get:function(){return this._value},set:function(e){this.masked.value=e,this.updateControl(),this.alignCursor()}},{key:"unmaskedValue",get:function(){return this._unmaskedValue},set:function(e){this.masked.unmaskedValue=e,this.updateControl(),this.alignCursor()}},{key:"typedValue",get:function(){return this.masked.typedValue},set:function(e){this.masked.typedValue=e,this.updateControl(),this.alignCursor()}},{key:"_bindEvents",value:function(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange})}},{key:"_unbindEvents",value:function(){this.el&&this.el.unbindEvents()}},{key:"_fireEvent",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=this._listeners[e];i&&i.forEach((function(e){return e.apply(void 0,n)}))}},{key:"selectionStart",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}},{key:"cursorPos",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd},set:function(e){this.el&&this.el.isActive&&(this.el.select(e,e),this._saveSelection())}},{key:"_saveSelection",value:function(){this.value!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}},{key:"updateValue",value:function(){this.masked.value=this.el.value,this._value=this.masked.value}},{key:"updateControl",value:function(){var e=this.masked.unmaskedValue,t=this.masked.value,n=this.unmaskedValue!==e||this.value!==t;this._unmaskedValue=e,this._value=t,this.el.value!==t&&(this.el.value=t),n&&this._fireChangeEvents()}},{key:"updateOptions",value:function(e){var t=e.mask,n=bs(e,Ks),r=!this.maskEquals(t),i=!As(this.masked,n);r&&(this.mask=t),i&&this.masked.updateOptions(n),(r||i)&&this.updateControl()}},{key:"updateCursor",value:function(e){null!=e&&(this.cursorPos=e,this._delayUpdateCursor(e))}},{key:"_delayUpdateCursor",value:function(e){var t=this;this._abortUpdateCursor(),this._changingCursorPos=e,this._cursorChanging=setTimeout((function(){t.el&&(t.cursorPos=t._changingCursorPos,t._abortUpdateCursor())}),10)}},{key:"_fireChangeEvents",value:function(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}},{key:"_abortUpdateCursor",value:function(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}},{key:"alignCursor",value:function(){this.cursorPos=this.masked.nearestInputPos(this.cursorPos,Ts.LEFT)}},{key:"alignCursorFriendly",value:function(){this.selectionStart===this.cursorPos&&this.alignCursor()}},{key:"on",value:function(e,t){return this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t),this}},{key:"off",value:function(e,t){if(!this._listeners[e])return this;if(!t)return delete this._listeners[e],this;var n=this._listeners[e].indexOf(t);return n>=0&&this._listeners[e].splice(n,1),this}},{key:"_onInput",value:function(e){if(this._inputEvent=e,this._abortUpdateCursor(),!this._selection)return this.updateValue();var t=new Ps(this.el.value,this.cursorPos,this.value,this._selection),n=this.masked.rawInputValue,r=this.masked.splice(t.startChangePos,t.removed.length,t.inserted,t.removeDirection).offset,i=n===this.masked.rawInputValue?t.removeDirection:Ts.NONE,o=this.masked.nearestInputPos(t.startChangePos+r,i);this.updateControl(),this.updateCursor(o),delete this._inputEvent}},{key:"_onChange",value:function(){this.value!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}},{key:"_onDrop",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"_onFocus",value:function(e){this.alignCursorFriendly()}},{key:"_onClick",value:function(e){this.alignCursorFriendly()}},{key:"destroy",value:function(){this._unbindEvents(),this._listeners.length=0,delete this.el}}]),e}();Fs.InputMask=Js;var el=function(e){gs(n,e);var t=xs(n);function n(){return fs(this,n),t.apply(this,arguments)}return ms(n,[{key:"_update",value:function(e){e.enum&&(e.mask="*".repeat(e.enum[0].length)),_s(vs(n.prototype),"_update",this).call(this,e)}},{key:"doValidate",value:function(){for(var e,t=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.enum.some((function(e){return e.indexOf(t.unmaskedValue)>=0}))&&(e=_s(vs(n.prototype),"doValidate",this)).call.apply(e,[this].concat(i))}}]),n}(Gs);Fs.MaskedEnum=el;var tl=function(e){gs(n,e);var t=xs(n);function n(e){return fs(this,n),t.call(this,Object.assign({},n.DEFAULTS,e))}return ms(n,[{key:"_update",value:function(e){_s(vs(n.prototype),"_update",this).call(this,e),this._updateRegExps()}},{key:"_updateRegExps",value:function(){var e="^"+(this.allowNegative?"[+|\\-]?":""),t=(this.scale?"("+Ds(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExpInput=new RegExp(e+"(0|([1-9]+\\d*))?"+t),this._numberRegExp=new RegExp(e+"\\d*"+t),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(Ds).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(Ds(this.thousandsSeparator),"g")}},{key:"_removeThousandsSeparators",value:function(e){return e.replace(this._thousandsSeparatorRegExp,"")}},{key:"_insertThousandsSeparators",value:function(e){var t=e.split(this.radix);return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),t.join(this.radix)}},{key:"doPrepare",value:function(e){for(var t,r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return(t=_s(vs(n.prototype),"doPrepare",this)).call.apply(t,[this,this._removeThousandsSeparators(e.replace(this._mapToRadixRegExp,this.radix))].concat(i))}},{key:"_separatorsCount",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=0,r=0;r<e;++r)this._value.indexOf(this.thousandsSeparator,r)===r&&(++n,t&&(e+=this.thousandsSeparator.length));return n}},{key:"_separatorsCountFromSlice",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._value;return this._separatorsCount(this._removeThousandsSeparators(e).length,!0)}},{key:"extractInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,r=arguments.length>2?arguments[2]:void 0,i=Cs(this._adjustRangeWithSeparators(e,t),2);return e=i[0],t=i[1],this._removeThousandsSeparators(_s(vs(n.prototype),"extractInput",this).call(this,e,t,r))}},{key:"_appendCharRaw",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.thousandsSeparator)return _s(vs(n.prototype),"_appendCharRaw",this).call(this,e,t);var r=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,i=this._separatorsCountFromSlice(r);this._value=this._removeThousandsSeparators(this.value);var o=_s(vs(n.prototype),"_appendCharRaw",this).call(this,e,t);this._value=this._insertThousandsSeparators(this._value);var a=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,s=this._separatorsCountFromSlice(a);return o.tailShift+=(s-i)*this.thousandsSeparator.length,o.skip=!o.rawInserted&&e===this.thousandsSeparator,o}},{key:"_findSeparatorAround",value:function(e){if(this.thousandsSeparator){var t=e-this.thousandsSeparator.length+1,n=this.value.indexOf(this.thousandsSeparator,t);if(n<=e)return n}return-1}},{key:"_adjustRangeWithSeparators",value:function(e,t){var n=this._findSeparatorAround(e);n>=0&&(e=n);var r=this._findSeparatorAround(t);return r>=0&&(t=r+this.thousandsSeparator.length),[e,t]}},{key:"remove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=Cs(this._adjustRangeWithSeparators(e,t),2);e=n[0],t=n[1];var r=this.value.slice(0,e),i=this.value.slice(t),o=this._separatorsCount(r.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(r+i));var a=this._separatorsCountFromSlice(r);return new Os({tailShift:(a-o)*this.thousandsSeparator.length})}},{key:"nearestInputPos",value:function(e,t){if(!this.thousandsSeparator)return e;switch(t){case Ts.NONE:case Ts.LEFT:case Ts.FORCE_LEFT:var n=this._findSeparatorAround(e-1);if(n>=0){var r=n+this.thousandsSeparator.length;if(e<r||this.value.length<=r||t===Ts.FORCE_LEFT)return n}break;case Ts.RIGHT:case Ts.FORCE_RIGHT:var i=this._findSeparatorAround(e);if(i>=0)return i+this.thousandsSeparator.length}return e}},{key:"doValidate",value:function(e){var t=(e.input?this._numberRegExpInput:this._numberRegExp).test(this._removeThousandsSeparators(this.value));if(t){var r=this.number;t=t&&!isNaN(r)&&(null==this.min||this.min>=0||this.min<=this.number)&&(null==this.max||this.max<=0||this.number<=this.max)}return t&&_s(vs(n.prototype),"doValidate",this).call(this,e)}},{key:"doCommit",value:function(){if(this.value){var e=this.number,t=e;null!=this.min&&(t=Math.max(t,this.min)),null!=this.max&&(t=Math.min(t,this.max)),t!==e&&(this.unmaskedValue=String(t));var r=this.value;this.normalizeZeros&&(r=this._normalizeZeros(r)),this.padFractionalZeros&&(r=this._padFractionalZeros(r)),this._value=r}_s(vs(n.prototype),"doCommit",this).call(this)}},{key:"_normalizeZeros",value:function(e){var t=this._removeThousandsSeparators(e).split(this.radix);return t[0]=t[0].replace(/^(\D*)(0*)(\d*)/,(function(e,t,n,r){return t+r})),e.length&&!/\d$/.test(t[0])&&(t[0]=t[0]+"0"),t.length>1&&(t[1]=t[1].replace(/0*$/,""),t[1].length||(t.length=1)),this._insertThousandsSeparators(t.join(this.radix))}},{key:"_padFractionalZeros",value:function(e){if(!e)return e;var t=e.split(this.radix);return t.length<2&&t.push(""),t[1]=t[1].padEnd(this.scale,"0"),t.join(this.radix)}},{key:"unmaskedValue",get:function(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,".")},set:function(e){Es(vs(n.prototype),"unmaskedValue",e.replace(".",this.radix),this,!0)}},{key:"typedValue",get:function(){return Number(this.unmaskedValue)},set:function(e){Es(vs(n.prototype),"unmaskedValue",String(e),this,!0)}},{key:"number",get:function(){return this.typedValue},set:function(e){this.typedValue=e}},{key:"allowNegative",get:function(){return this.signed||null!=this.min&&this.min<0||null!=this.max&&this.max<0}}]),n}(Ls);tl.DEFAULTS={radix:",",thousandsSeparator:"",mapToRadix:["."],scale:2,signed:!1,normalizeZeros:!0,padFractionalZeros:!1},Fs.MaskedNumber=tl;var nl=function(e){gs(n,e);var t=xs(n);function n(){return fs(this,n),t.apply(this,arguments)}return ms(n,[{key:"_update",value:function(e){e.mask&&(e.validate=e.mask),_s(vs(n.prototype),"_update",this).call(this,e)}}]),n}(Ls);Fs.MaskedFunction=nl;var rl=["compiledMasks","currentMaskRef","currentMask"],il=function(e){gs(n,e);var t=xs(n);function n(e){var r;return fs(this,n),(r=t.call(this,Object.assign({},n.DEFAULTS,e))).currentMask=null,r}return ms(n,[{key:"_update",value:function(e){_s(vs(n.prototype),"_update",this).call(this,e),"mask"in e&&(this.compiledMasks=Array.isArray(e.mask)?e.mask.map((function(e){return Ns(e)})):[])}},{key:"_appendCharRaw",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._applyDispatch(e,t);return this.currentMask&&n.aggregate(this.currentMask._appendChar(e,t)),n}},{key:"_applyDispatch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tail&&null!=t._beforeTailState?t._beforeTailState._value:this.value,r=this.rawInputValue,i=t.tail&&null!=t._beforeTailState?t._beforeTailState._rawInputValue:r,o=r.slice(i.length),a=this.currentMask,s=new Os,l=a&&a.state;if(this.currentMask=this.doDispatch(e,Object.assign({},t)),this.currentMask)if(this.currentMask!==a){if(this.currentMask.reset(),i){var u=this.currentMask.append(i,{raw:!0});s.tailShift=u.inserted.length-n.length}o&&(s.tailShift+=this.currentMask.append(o,{raw:!0,tail:!0}).tailShift)}else this.currentMask.state=l;return s}},{key:"_appendPlaceholder",value:function(){var e=this._applyDispatch.apply(this,arguments);return this.currentMask&&e.aggregate(this.currentMask._appendPlaceholder()),e}},{key:"doDispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.dispatch(e,this,t)}},{key:"doValidate",value:function(){for(var e,t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=_s(vs(n.prototype),"doValidate",this)).call.apply(e,[this].concat(i))&&(!this.currentMask||(t=this.currentMask).doValidate.apply(t,i))}},{key:"reset",value:function(){this.currentMask&&this.currentMask.reset(),this.compiledMasks.forEach((function(e){return e.reset()}))}},{key:"value",get:function(){return this.currentMask?this.currentMask.value:""},set:function(e){Es(vs(n.prototype),"value",e,this,!0)}},{key:"unmaskedValue",get:function(){return this.currentMask?this.currentMask.unmaskedValue:""},set:function(e){Es(vs(n.prototype),"unmaskedValue",e,this,!0)}},{key:"typedValue",get:function(){return this.currentMask?this.currentMask.typedValue:""},set:function(e){var t=String(e);this.currentMask&&(this.currentMask.typedValue=e,t=this.currentMask.unmaskedValue),this.unmaskedValue=t}},{key:"isComplete",get:function(){return!!this.currentMask&&this.currentMask.isComplete}},{key:"remove",value:function(){var e,t=new Os;return this.currentMask&&t.aggregate((e=this.currentMask).remove.apply(e,arguments)).aggregate(this._applyDispatch()),t}},{key:"state",get:function(){return Object.assign({},_s(vs(n.prototype),"state",this),{_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map((function(e){return e.state})),currentMaskRef:this.currentMask,currentMask:this.currentMask&&this.currentMask.state})},set:function(e){var t=e.compiledMasks,r=e.currentMaskRef,i=e.currentMask,o=bs(e,rl);this.compiledMasks.forEach((function(e,n){return e.state=t[n]})),null!=r&&(this.currentMask=r,this.currentMask.state=i),Es(vs(n.prototype),"state",o,this,!0)}},{key:"extractInput",value:function(){var e;return this.currentMask?(e=this.currentMask).extractInput.apply(e,arguments):""}},{key:"extractTail",value:function(){for(var e,t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.currentMask?(e=this.currentMask).extractTail.apply(e,i):(t=_s(vs(n.prototype),"extractTail",this)).call.apply(t,[this].concat(i))}},{key:"doCommit",value:function(){this.currentMask&&this.currentMask.doCommit(),_s(vs(n.prototype),"doCommit",this).call(this)}},{key:"nearestInputPos",value:function(){for(var e,t,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return this.currentMask?(e=this.currentMask).nearestInputPos.apply(e,i):(t=_s(vs(n.prototype),"nearestInputPos",this)).call.apply(t,[this].concat(i))}},{key:"overwrite",get:function(){return this.currentMask?this.currentMask.overwrite:_s(vs(n.prototype),"overwrite",this)},set:function(e){console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')}}]),n}(Ls);il.DEFAULTS={dispatch:function(e,t,n){if(t.compiledMasks.length){var r=t.rawInputValue,i=t.compiledMasks.map((function(t,i){return t.reset(),t.append(r,{raw:!0}),t.append(e,n),{weight:t.rawInputValue.length,index:i}}));return i.sort((function(e,t){return t.weight-e.weight})),t.compiledMasks[i[0].index]}}},Fs.MaskedDynamic=il;var ol={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function al(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ol.MASKED,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ol.MASKED,r=Ns(e);return function(e){return r.runIsolated((function(r){return r[t]=e,r[n]}))}}Fs.PIPE_TYPE=ol,Fs.createPipe=al,Fs.pipe=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return al.apply(void 0,n)(e)};try{globalThis.IMask=Fs}catch(e){}var sl={exports:{}};Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);var ll="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function ul(){}function cl(){}cl.resetWarningCache=ul,sl.exports=function(){function e(e,t,n,r,i,o){if(o!==ll){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:cl,resetWarningCache:ul};return n.PropTypes=n,n}();var dl=sl.exports;function hl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fl(e){return fl=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},fl(e)}function pl(e,t){return pl=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},pl(e,t)}function ml(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var gl={mask:dl.oneOfType([dl.array,dl.func,dl.string,dl.instanceOf(RegExp),dl.oneOf([Date,Number,Fs.Masked]),dl.instanceOf(Fs.Masked)]),value:dl.any,unmask:dl.oneOfType([dl.bool,dl.oneOf(["typed"])]),prepare:dl.func,validate:dl.func,commit:dl.func,overwrite:dl.bool,onAccept:dl.func,onComplete:dl.func,placeholderChar:dl.string,lazy:dl.bool,definitions:dl.object,blocks:dl.object,pattern:dl.string,format:dl.func,parse:dl.func,autofix:dl.bool,radix:dl.string,thousandsSeparator:dl.string,mapToRadix:dl.arrayOf(dl.string),scale:dl.number,signed:dl.bool,normalizeZeros:dl.bool,padFractionalZeros:dl.bool,min:dl.oneOfType([dl.number,dl.instanceOf(Date)]),max:dl.oneOfType([dl.number,dl.instanceOf(Date)]),dispatch:dl.func,inputRef:dl.func},vl=Object.keys(gl),yl=["value","unmask","onAccept","onComplete","inputRef"],bl=vl.filter((function(e){return yl.indexOf(e)<0}));function xl(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pl(e,t)}(l,t);var n,r,o,a,s=(o=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=fl(o);if(a){var n=fl(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?ml(e):t}(this,e)});function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n)))._inputRef=e._inputRef.bind(ml(e)),e}return n=l,r=[{key:"componentDidMount",value:function(){this.props.mask&&this.initMask()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=this._extractMaskOptionsFromProps(e);t.mask?this.maskRef?(this.maskRef.updateOptions(t),"value"in e&&(e.value!==this.maskValue||"string"!=typeof e.value&&""===this.maskRef.value&&!this.maskRef.el.isActive)&&(this.maskValue=e.value)):(this.initMask(t),e.value!==this.maskValue&&this._onAccept()):(this.destroyMask(),"value"in e&&(this.element.value=e.value))}},{key:"componentWillUnmount",value:function(){this.destroyMask()}},{key:"_inputRef",value:function(e){this.element=e,this.props.inputRef&&this.props.inputRef(e)}},{key:"render",value:function(){return i.createElement(e,Object.assign({},this._extractNonMaskProps(this.props),{defaultValue:this.props.value,inputRef:this._inputRef}))}},{key:"initMask",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._extractMaskOptionsFromProps(Object.assign({},this.props));this.maskRef=Fs(this.element,e).on("accept",this._onAccept.bind(this)).on("complete",this._onComplete.bind(this)),this.maskValue=this.props.value}},{key:"destroyMask",value:function(){this.maskRef&&(this.maskRef.destroy(),delete this.maskRef)}},{key:"_extractMaskOptionsFromProps",value:function(e){return e=Object.assign({},e),Object.keys(e).filter((function(e){return bl.indexOf(e)<0})).forEach((function(t){delete e[t]})),e}},{key:"_extractNonMaskProps",value:function(e){return e=Object.assign({},e),vl.forEach((function(t){delete e[t]})),e}},{key:"maskValue",get:function(){return"typed"===this.props.unmask?this.maskRef.typedValue:this.props.unmask?this.maskRef.unmaskedValue:this.maskRef.value},set:function(e){e=null==e?"":e,"typed"===this.props.unmask?this.maskRef.typedValue=e:this.props.unmask?this.maskRef.unmaskedValue=e:this.maskRef.value=e}},{key:"_onAccept",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.props.onAccept&&(e=this.props).onAccept.apply(e,[this.maskValue,this.maskRef].concat(n))}},{key:"_onComplete",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.props.onComplete&&(e=this.props).onComplete.apply(e,[this.maskValue,this.maskRef].concat(n))}}],r&&hl(n.prototype,r),l}(i.Component);t.propTypes=gl;var n=e.displayName||e.name||"Component";return t.displayName="IMask(".concat(n,")"),t}var wl=["inputRef"];xl((function(e){var t=e.inputRef,n=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,wl);return i.createElement("input",Object.assign({},n,{ref:t}))}));const _l=new En("EForm Masks");function Sl(e,t=0){const n=Number.parseFloat(e);return Number.isNaN(n)||!Number.isFinite(n)?t:n}function El(e,t,n=0){const r=Number.parseInt(e,10);return!Number.isNaN(r)&&Number.isFinite(r)&&r>n?r:t}function Cl(e){return El(e,0,0)}function kl(e,t,n=".",r=","){let i;const o=null!=e&&e<0;i=null==e?(0).toFixed(t):Math.abs(e).toFixed(t);const a=i.split(".");let s=a[0];const l=[];for(;s.length>3;)l.unshift(s.substr(s.length-3)),s=s.substr(0,s.length-3);s.length>0&&l.unshift(s);let u=l.join(r);return o&&(u=`-${u}`),a.length>1&&(u=`${u}${n}${a[1]}`),u}function Ml(e,t="string"){let n=e/1e3;const r=Math.floor(n/3600);n-=3600*r;const i=Math.floor(n/60);return n=Math.floor(n-60*i),"string"===t?{hours:r.toString().padStart(2,"0"),minutes:i.toString().padStart(2,"0"),seconds:n.toString().padStart(2,"0")}:{hours:r,minutes:i,seconds:n}}function Tl(e,t=2){if(t<1)return Math.round(e);const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function Dl(e,t=0){let n;return n="string"==typeof e?Number.parseFloat(e):"number"==typeof e?e:t,Number.isFinite(n)||(n=t),n}function Al(e,t,n=0,r=2){if(t<=0)throw new Error(`Step cannot be less than or equal to 0, currently it is ${t}`);if(r<0)throw new Error(`Precision cannot be less than or equal to 0, currently it is ${r}`);const i=10**Math.round(Math.abs(r)),o=Math.round(t*i),a=Math.round(n*i),s=Math.round(e*i);return 0==Math.abs(s-a)%o}_l.addItem("us-phone-number",{name:bn("US phone number","wp-eform"),mask:"+1 (000) 000-0000",placeholder:xn("_","wp-eform-mask-placeholder","wp-eform"),overrideInputType:"tel",title:bn("Mobile or telephone number.","wp-eform")}),_l.addItem("us-ssn",{name:bn("US Social Security Number (SSN)","wp-eform"),mask:"000 00 0000",placeholder:xn("_","wp-eform-mask-placeholder","wp-eform"),overrideInputType:"tel",title:bn("Digits only","wp-eform")}),_l.addItem("us-zip",{name:bn("US Zip code","wp-eform"),mask:"00000",placeholder:xn("_","wp-eform-mask-placeholder","wp-eform"),overrideInputType:"tel",title:bn("Digits only","wp-eform")}),_l.addItem("date-mm-dd-yy",{name:bn("Date MM-DD-YY","wp-eform"),mask:"00-00-00",overrideInputType:"tel",placeholder:xn("_","wp-eform-mask-placeholder","wp-eform")}),_l.addItem("date-yyyy-mm-dd",{name:bn("Date YYYY-MM-DD","wp-eform"),mask:"0000-00-00",overrideInputType:"tel",placeholder:xn("_","wp-eform-mask-placeholder","wp-eform")}),_l.addItem("date-dd/mm/yy",{name:bn("Date DD/MM/YY","wp-eform"),mask:"00/00/00",overrideInputType:"tel",placeholder:xn("_","wp-eform-mask-placeholder","wp-eform")}),_l.addItem("twitter-url",{name:bn("Twitter URL","wp-eform"),mask:`https://twitter.com/*[${"*".repeat(50)}]`,placeholder:xn("_","wp-eform-mask-placeholder","wp-eform")}),_l.addItem("facebook-url",{name:bn("Facebook URL","wp-eform"),mask:`https://f\\acebook.com/*[${"*".repeat(50)}]`,placeholder:xn("_","wp-eform-mask-placeholder","wp-eform")}),_l.addItem("instagram-url",{name:bn("Instagram URL","wp-eform"),mask:`https://inst\\agr\\am.com/*[${"*".repeat(50)}]`,placeholder:xn("_","wp-eform-mask-placeholder","wp-eform")}),_l.addItem("url",{name:bn("General URL","wp-eform"),mask:`http[a]://[${"*".repeat(255)}]`,placeholder:xn("_","wp-eform-mask-placeholder","wp-eform")}),_l.addItem("rgb-hex-color",{name:bn("RGB or HEX color code","wp-eform"),mask:[{mask:"RGB,RGB,RGB",blocks:{RGB:{mask:Fs.MaskedRange,from:0,to:255}}},{mask:/^#[0-9a-f]{0,6}$/i}],placeholder:xn("_","wp-eform-mask-placeholder","wp-eform")}),_l.addItem("rgb-color",{name:bn("RGB color code","wp-eform"),mask:[{mask:"RGB,RGB,RGB",blocks:{RGB:{mask:Fs.MaskedRange,from:0,to:255}}}],placeholder:xn("_","wp-eform-mask-placeholder","wp-eform")});const Pl="wpeform-control-text",Ol=o.ZP.div`
	position: absolute;
	height: 2px;
	bottom: 0;
	left: 0;
	right: 0;
	transform-origin: 50% 50%;
	background-color: ${e=>e.theme.primaryColor};
	pointer-events: none;
	transform: scaleX(0);
	transition: ${e=>Le(["transform"],e.theme.transitionBeizer)};
`,Rl=o.ZP.input`
	${Ie};
	${Ne};
	display: block;
	width: 100%;
	height: ${e=>Fe(e.theme.controlHeightBase)};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	font-size: ${e=>Fe(e.theme.fz.base)};
	box-shadow: 0 0 0 0 transparent;
	color: ${e=>e.theme.textColor};
	padding: ${e=>Fe(e.theme.controlHeightBase/4)};
	border: 1px solid ${e=>e.theme.borderColorBase};
	background-color: ${e=>e.theme.appBackgroundColor};
	box-shadow: ${e=>e.theme.boxShadowNoneFocus};
	transition: ${e=>Le(["border-color","box-shadow"],e.theme.transitionControl)};

	&:hover {
		color: ${e=>e.theme.textColor};
		border-color: ${e=>e.theme.primaryColor};
	}

	&:active,
	&:focus {
		color: ${e=>e.theme.textColor};
		border-color: ${e=>e.theme.primaryColor};
		box-shadow: ${e=>e.theme.boxShadowControlFocus};
	}

	&::placeholder {
		color: ${e=>e.theme.textColorSecondary};
	}

	&.${Pl}__input--has-error {
		border-color: ${e=>e.theme.borderColorError};

		&:hover {
			border-color: ${e=>e.theme.borderColorError};
		}

		&:active,
		&:focus {
			border-color: ${e=>e.theme.borderColorError};
			box-shadow: ${e=>e.theme.boxShadowControlFocusError};
		}
	}

	&:disabled {
		background-color: ${e=>e.theme.disabledBackgroundColor};
		color: ${e=>e.theme.disabledColor};
		border-color: ${e=>e.theme.disabledColor};
		cursor: not-allowed;
		box-shadow: none;
	}

	&:read-only {
		background-color: ${e=>e.theme.disabledBackgroundColor};
		border-color: ${e=>e.theme.disabledColor};
		box-shadow: none;
	}

	&.${Pl}__input--type-MATERIAL {
		border: 0 none;
		border-bottom: 2px solid ${e=>e.theme.borderColorBase};
		border-radius: ${e=>Fe(e.theme.borderRadiusBase)}
			${e=>Fe(e.theme.borderRadiusBase)} 0 0;
		box-shadow: none;
		background-color: ${e=>e.theme.backgroundControl};
		transition: ${e=>Le(["background-color"],e.theme.transitionControl)};

		&:hover {
			border-color: ${e=>e.theme.borderColorBase};
		}

		&:active,
		&:focus {
			background-color: ${e=>Ae(.5,e.theme.backgroundControl)};
			border-color: ${e=>e.theme.borderColorBase};
			box-shadow: none;
		}

		&:hover
			+ ${Ol},
			&:active
			+ ${Ol},
			&:focus
			+ ${Ol} {
			transform: scaleX(1);
		}

		&.${Pl}__input--has-error {
			border-bottom-color: ${e=>e.theme.borderColorError};

			&:hover {
				border-bottom-color: ${e=>e.theme.borderColorError};
			}

			&:active,
			&:focus {
				border-bottom-color: ${e=>e.theme.borderColorError};
			}

			+ ${Ol} {
				background-color: ${e=>e.theme.borderColorError};
			}
		}

		&:disabled {
			background-color: ${e=>e.theme.disabledBackgroundColor};
			color: ${e=>e.theme.disabledColor};
			border-color: ${e=>e.theme.disabledColor};
			cursor: not-allowed;
			+ ${Ol} {
				transform: scaleX(0);
				background-color: ${e=>e.theme.disabledColor};
			}
		}

		&:read-only {
			background-color: ${e=>e.theme.disabledBackgroundColor};
			border-color: ${e=>e.theme.disabledColor};
			+ ${Ol} {
				transform: scaleX(0);
				background-color: ${e=>e.theme.disabledColor};
			}
		}
	}

	/** SIZES */
	&.${Pl}__input--size-SMALL {
		height: ${e=>Fe(.8*e.theme.controlHeightBase)};
		padding: ${e=>Fe(e.theme.controlHeightBase/8)};
		font-size: ${e=>Fe(e.theme.fz.small1)};
	}
	&.${Pl}__input--size-LARGE {
		height: ${e=>Fe(1.2*e.theme.controlHeightBase)};
		padding: ${e=>Fe(e.theme.controlHeightBase/4)};
	}

	&[type='number'] {
		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			appearance: none;
			margin: 0;
		}
	}
`,Fl=o.ZP.div`
	position: absolute;
	display: flex;
	align-items: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	/** So that we can click through it to the input */
	pointer-events: none;
	font-size: ${e=>Fe(e.theme.fz.base)};

	color: ${e=>e.theme.textColorSecondary};
	transition: ${e=>Le(["top","left","bottom","font-size"],e.theme.transitionControl)};

	> * {
		margin: 0;
		padding: 0;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`,Ll=o.ZP.div`
	position: absolute;
	top: 0;
	left: ${e=>Fe(e.theme.controlHeightBase/4)};
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	/** So that we can click through it to the input */
	pointer-events: none;
	color: ${e=>e.theme.greyLightColor};
`,Il=o.ZP.div`
	${Ie};
	position: relative;
	padding: 0;

	/** Position the default placeholder */
	${Fl} {
		top: ${e=>Fe(e.theme.controlHeightBase/4)};
		left: ${e=>Fe(e.theme.controlHeightBase/4)};
		right: ${e=>Fe(e.theme.controlHeightBase/4)};
		bottom: ${e=>Fe(e.theme.controlHeightBase/4)};
	}
	&.${Pl}--align-LEFT {
		${Fl} {
			text-align: left;
			justify-content: flex-start;
		}
	}
	&.${Pl}--align-CENTER {
		${Fl} {
			text-align: center;
			justify-content: center;
		}
	}
	&.${Pl}--align-RIGHT {
		${Fl} {
			text-align: right;
			justify-content: flex-end;
		}
	}

	&.${Pl}--has-prefix {
		${Rl} {
			/** [gutter + prefix + gutter] where gutter is controlHeightBase / 4 & prefix is fz.base */
			padding-left: ${e=>Fe(e.theme.fz.base+e.theme.controlHeightBase/4*2)};
		}
		${Fl} {
			left: ${e=>Fe(e.theme.fz.base+e.theme.controlHeightBase/4*2)};
		}
		&.${Pl}--size-SMALL {
			${Rl} {
				/** [gutter + prefix + gutter] where gutter is controlHeightBase / 8 & prefix is fz.base */
				padding-left: ${e=>Fe(e.theme.fz.base+e.theme.controlHeightBase/8*2+4)};
			}
			${Fl} {
				left: ${e=>Fe(e.theme.fz.base+e.theme.controlHeightBase/8*2)};
			}
		}

		&.${Pl}--has-error {
			${Ll} {
				color: ${e=>e.theme.errorColor};
			}
		}
	}

	/** Changes when focused */
	&.${Pl}--is-focused, &.${Pl}--is-not-empty {
		${Fl} {
			top: ${e=>Fe(e.theme.controlHeightBase/2*-1)};
			left: 0;
			bottom: ${e=>Fe(e.theme.controlHeightBase)};
			font-size: ${e=>Fe(e.theme.fz.small1)};
		}
	}
`,Nl=xl((({inputRef:e,...t})=>(0,r.jsx)(Rl,Object.assign({},t,{ref:e}),void 0)));function jl(e){const{id:t,onChange:n,value:o,prefix:a,placeholder:s,controlType:l=Dt.BOXY,controlAlignment:u=Mt.LEFT,disabled:c=!1,readOnly:d=!1,hasError:h=!1,type:f="text",masks:p,onBlur:m,innerRef:g,className:v,size:y=ft.DEFAULT,...b}=e;let x,w=f;const[_,S]=(0,i.useState)(!1),[E,C]=(0,i.useState)(o),k=ds(((e,t)=>{t(e)}),300),M=e=>{if("number"===f){let t=Dl(e,0);void 0!==b.min&&t<b.min&&(t=b.min),void 0!==b.max&&t>b.max&&(t=b.max),e=t.toString()}C(e),k(e,n)};(0,i.useEffect)((()=>{C(o)}),[o]);const T=Pe(Pl,{"has-prefix":!!a,"is-not-empty":""!==o,"is-focused":_,[`type-${l}`]:!0,"has-error":h,[`align-${u}`]:!0,[`size-${y}`]:!0},v);let D,A=!1,P=p?p.placeholder:"_";if(p&&p.maskType!==gt.NONE)if(p.maskType===gt.STRING)D=p.maskString||"",A=!0;else if(p.maskType===gt.REGEXP)D=[],p.maskRegExps.forEach((e=>{D.push({mask:new RegExp(e.pattern,e.caseSensitive?"i":void 0),lazy:!p.alwaysShowMask&&!_})})),A=!0;else{const e=p.maskPreset||"";if(_l.hasItem(e)){const t=_l.getItem(e);D=t.mask,t.overrideInputType&&(w=t.overrideInputType),x=t.title,t.placeholder&&(P=t.placeholder),A=!0}}const O=Pe(Oe(Pl,"input"),{[`type-${l}`]:!0,"has-error":h,[`size-${y}`]:!0});return(0,r.jsxs)(Il,Object.assign({className:T},{children:[a?(0,r.jsx)(Ll,{children:a},void 0):null,"string"!=typeof s&&(!A||A&&p&&!p.alwaysShowMask)?(0,r.jsx)(Fl,{children:s},void 0):null,A&&D&&p?(0,r.jsx)(Nl,{mask:D,radix:".",unmask:!1,inputRef:g,onAccept:e=>{M(e)},overwrite:!0,value:E,onFocus:()=>{S(!0)},onBlur:e=>{S(!1),k.cancel(),n(E),m?.(e)},disabled:c,readOnly:d,lazy:!p.alwaysShowMask&&!_,placeholderChar:P,placeholder:"string"==typeof s?s:void 0,title:x,type:w},void 0):(0,r.jsx)(Rl,Object.assign({id:t,type:f,className:O,value:E,onChange:e=>{M(e.target.value)},onFocus:()=>{S(!0)},onBlur:e=>{S(!1),k.cancel(),n(E),m?.(e)},disabled:c,readOnly:d,placeholder:"string"==typeof s?s:void 0,ref:g},b),void 0),l===Dt.MATERIAL?(0,r.jsx)(Ol,{},void 0):null]}),void 0)}const $l="wpeform-icon",zl=o.ZP.span`
	color: inherit;
	font-size: 1em;
	height: 1em;
	width: 1em;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-weight: normal;
	font-style: normal;

	svg:not(.svg-inline--fa) {
		height: 1em;
		width: 1em;
		fill: currentColor;
		display: block;
	}
	${x.vz.css()}
`;function Bl(e){const{iconClass:t,children:n=null,component:o,className:a,title:s}=e;let l=!1;const u=[];let c="";if(t?.startsWith("fas ")||t?.startsWith("fab ")||t?.startsWith("far ")){const e=t.split(" ");e.length>=2&&e[1]&&(u.push(e[0]),u.push(e[1].replace("fa-","")),l=!0,e.length>2&&(c=e.slice(2).join(" ")))}return(0,r.jsx)(zl,Object.assign({role:"img","aria-hidden":!e["aria-label"]||void 0,"aria-label":e["aria-label"],className:B($l,l?c:t,{"is-fallback-antd":!!o,anticon:!!o},a),title:s},{children:o?(0,i.createElement)(o,{}):l?(0,r.jsx)(w.G,{icon:u},void 0):n}),void 0)}const Ul="wpeform-answer-preview",Hl=Oe(Ul,"title"),Vl=Oe(Ul,"subtitle"),Wl=Oe(Ul,"answer"),Gl=Oe(Ul,"score-table"),ql=Oe(Ul,"score-table-container"),Yl=Oe(Ul,"score-value"),Zl=o.ZP.div`
	ul,
	ol {
		margin: 0 0 0 ${e=>Fe(e.theme.gutter)};
		padding: 0;
		list-style: disc;
	}
	ol {
		list-style: decimal;
	}
	p,
	div.para {
		margin: 0 0 ${e=>Fe(e.theme.gutter)} 0;
	}
	> p:only-child,
	> div.para:only-child {
		margin-bottom: 0;
	}
	/* Headings */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0.6em 0;
		line-height: 1.2;
		clear: both;
		color: ${e=>e.theme.headingColor};
	}
	h1 {
		font-size: ${e=>Fe(e.theme.fz.large5/e.theme.fz.base,"em")};
		line-height: 1.2;
	}
	h2 {
		font-size: ${e=>Fe(e.theme.fz.large3/e.theme.fz.base,"em")};
	}
	h3 {
		font-size: ${e=>Fe(e.theme.fz.large2/e.theme.fz.base,"em")};
	}
	h4 {
		font-size: ${e=>Fe(e.theme.fz.large1/e.theme.fz.base,"em")};
	}
	h5 {
		font-size: ${e=>Fe(e.theme.fz.small1/e.theme.fz.base,"em")};
	}
	h6 {
		font-size: ${e=>Fe(e.theme.fz.small2/e.theme.fz.base,"em")};
	}
	> *:last-child {
		margin-bottom: 0;
	}
`,Xl=o.ZP.div`
	${ze};
`,Ql=o.ZP.div`
	padding: ${e=>Fe(e.theme.gutter/2)}
		${e=>Fe(e.theme.gutter)};
	border: 1px solid ${e=>e.theme.borderColorLight};
	min-height: ${e=>Fe(e.theme.controlHeightBase)};
`,Kl=o.ZP.h3`
	font-size: ${e=>Fe(e.theme.fz.base)};
	font-weight: bold;
	font-family: ${e=>e.theme.fontFamilyHeading};
	color: ${e=>e.theme.headingColor};
	padding: 0;
	margin: 0 0 ${e=>Fe(e.theme.gutter/2)} 0;
`,Jl=o.ZP.h5`
	margin: 0 0 ${e=>Fe(e.theme.gutter/2)} 0;
	font-size: ${e=>Fe(e.theme.fz.small1)};
	color: ${e=>e.theme.textColorSecondary};
	font-weight: normal;
	font-style: italic;
	text-align: left;
	line-height: 1.2;
`,eu=o.ZP.div`
	padding: ${e=>Fe(e.theme.gutter)};
	border: 1px solid ${e=>e.theme.borderColorLight};
	border-top: 0 none;
	background-color: ${e=>e.theme.backgroundControl};
	color: ${e=>e.theme.textColor};
	font-size: ${e=>Fe(e.theme.fz.base)};
`,tu=o.ZP.div`
	width: 100%;
	overflow-y: auto;
`,nu=o.ZP.table`
	border-collapse: collapse;
	border: 1px solid ${e=>e.theme.borderColorLight};
	border-top: 0 none;
	width: 100%;
	text-align: left;
	td,
	th {
		text-align: left;
		border-collapse: collapse;
		border-right: 1px solid ${e=>e.theme.borderColorLight};
		border-bottom: 1px solid ${e=>e.theme.borderColorLight};
		padding: ${e=>Fe(e.theme.gutter/2)}
			${e=>Fe(e.theme.gutter)};
		&.${Yl} {
			font-variant-numeric: tabular-nums;
			width: 70px;
			text-align: right;
		}
	}

	&.${Gl}--has-header {
		border-top: 1px solid ${e=>e.theme.borderColorLight};

		thead {
			th {
				font-weight: bold;
				color: ${e=>e.theme.textColorSecondary};
				font-size: ${e=>Fe(e.theme.fz.small2)};
			}
		}
	}
`,ru=o.ZP.div`
	${Ie};
	padding: 0;
	margin: 0 0 ${e=>Fe(e.theme.gutter)} 0;
	font-size: ${e=>Fe(e.theme.fz.base)};
	@media print {
		break-inside: avoid-page;
	}
`,iu=o.ZP.hr`
	width: 35%;
	max-width: 150px;
	height: 2px;
	border: 0 none;
	border-radius: 2px;
	background-color: ${e=>e.theme.borderColorSplit};
	margin: ${e=>Fe(e.theme.gutter)} 0 0;
	padding: 0;
	display: block;
`,ou=o.ZP.hr`
	margin: ${e=>Fe(e.theme.gutter/2)} 0;
	height: 2px;
	border: 0 none;
	display: block;
	width: 30px;
	border-radius: 2px;
	background-color: ${e=>e.isLight?e.theme.backgroundShade:e.theme.borderColorLight};
`;function au(e){const{scores:t,scorePrecision:n,hasHeader:o=!1}=e;return(0,r.jsx)(tu,Object.assign({className:ql},{children:(0,r.jsxs)(nu,Object.assign({className:Pe(Gl,{"has-header":o})},{children:[o?(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:bn("Outcome","wp-eform")},void 0),(0,r.jsx)("th",Object.assign({className:Yl},{children:bn("Obtained","wp-eform")}),void 0),(0,r.jsx)("th",Object.assign({className:Yl},{children:bn("Out of","wp-eform")}),void 0),(0,r.jsx)("th",Object.assign({className:Yl},{children:bn("%-age","wp-eform")}),void 0)]},void 0)},void 0):null,(0,r.jsx)("tbody",{children:t.map((e=>(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:e.title},void 0),(0,r.jsx)("td",Object.assign({className:Yl},{children:kl(e.obtained,n)}),void 0),(0,r.jsx)("td",Object.assign({className:Yl},{children:kl(e.outof,n)}),void 0),(0,r.jsxs)("td",Object.assign({className:Yl},{children:[kl(e.obtained/e.outof*100,n),"%"]}),void 0)]},void 0),e.description?(0,r.jsx)("tr",{children:(0,r.jsx)("td",Object.assign({colSpan:4},{children:e.description}),void 0)},void 0):null]},e.scoreId)))},void 0)]}),void 0)}),void 0)}function su(e){const{answer:t,title:n,subtitle:i,answerDescription:o,scores:a,scorePrecision:s}=e;return(0,r.jsxs)(ru,Object.assign({className:Ul},{children:[(0,r.jsx)(Kl,Object.assign({className:Hl},{children:n}),void 0),i?(0,r.jsx)(Jl,Object.assign({className:Vl},{children:i}),void 0):null,(0,r.jsx)(Ql,Object.assign({className:Wl},{children:t}),void 0),o?(0,r.jsx)(eu,{children:o},void 0):null,a&&a.length?(0,r.jsx)(au,{scorePrecision:s,scores:a},void 0):null,(0,r.jsx)(iu,{},void 0)]}),void 0)}su.Generic=Zl,su.UserInput=Xl,su.Separator=ou,su.OptionDescription=o.ZP.div`
	font-size: ${e=>Fe(e.theme.fz.small1)};
	color: ${e=>e.theme.textColorSecondary};
	margin: 0 0 ${e=>Fe(e.theme.gutter/2)} 0;
`,su.ScoreTable=au;const lu={requiredInput:bn("The element is required, kindly enter a value.","wp-eform"),minStringInput:bn("Length of input must be %1$d, currently it is %2$d.","wp-eform"),maxStringInput:bn("Length of input can not be greater than %1$d, currently it is %2$d.","wp-eform"),inputNoLetter:bn("No letters are allowed.","wp-eform"),inputNoNumber:bn("No numbers are allowed.","wp-eform"),inputEmail:bn("The email address is incorrect.","wp-eform"),inputInteger:bn("Only integers are allowed.","wp-eform"),inputNumber:bn("Only numbers are allowed.","wp-eform"),inputNumMin:bn("Minimum required value is %1$s, currently it is %2$s.","wp-eform"),inputNumMax:bn("Maximum allowed value is %1$s, currently it is %2$s.","wp-eform"),inputPhone:bn("Please enter a valid phone number.","wp-eform"),inputUrl:bn("Please enter a valid phone URL.","wp-eform"),requiredOptions:bn("Required, please select an option.","wp-eform"),maxOptions:bn("A maximum of %1$d option(s) allowed, you have selected %2$d.","wp-eform"),minOptions:bn("A minimum of %1$d option(s) required, you have selected %2$d.","wp-eform"),requiredOther:bn("Please fill in your custom choice.","wp-eform"),requiredCaptcha:bn("The captcha is required.","wp-eform"),incorrectCaptcha:bn("The answer is incorrect. Correct answer would be %1$s.","wp-eform"),requiredCheckbox:bn("This checkbox is required.","wp-eform"),requiredToggle:bn("Please check this toggle element.","wp-eform"),sliderMinUnderFlow:bn("Value cannot be less than {min}.","wp-eform"),sliderMaxOverFlow:bn("Value cannot be greater than {max}.","wp-eform"),sliderStepOverFlow:bn("Value must be in the steps of {step}.","wp-eform"),rangeStepOverFlow:bn("Value {value} must be in the steps of {step}","wp-eform"),rangeInvariant:bn("Minimum value {min} must be less than or equal to maximum value {max}.","wp-eform"),requiredRating:bn("The rating is required.","wp-eform"),requiredRatingFeedback:bn("Please fill in the feedback.","wp-eform"),ratingInvariant:bn("Rating value is greater than maximum.","wp-eform"),requiredMatrixChoice:bn("Required, please select at-least one option every row.","wp-eform"),requiredDateTimeInput:bn("Please enter a value.","wp-eform"),dateTimeInputMustBeLess:bn("Value must not be less than %1$s.","wp-eform"),dateTimeInputMustBeGreater:bn("Value must not be greater than %1$s.","wp-eform"),dateTimeInputInvalid:bn("Invalid value used in date time input.","wp-eform"),requiredMatrixInput:bn("Please fill all the items in the table.","wp-eform"),requiredAddress:bn("Please fill in the address.","wp-eform")},uu={id:"text",hasSubmission:!0,FormUi({id:e,elementData:t,submissionData:n,updateSubmissionData:o,setElementTouched:a,controlType:s,controlLayout:l,controlAlignment:u,elementTitle:c,hasError:d=!1}){const h=n.value.text?.input??"",f=(0,i.useCallback)((e=>{const t=us(n,(t=>{t.value.text.input=e}));o(t)}),[o,n]);let p="text";const m=t.config.text?.validation?.filters.type;return m===Ft.EMAIL?p="email":m===Ft.INTEGER||m===Ft.NUMBER?p="number":m===Ft.PHONE&&(p="tel"),(0,r.jsx)(jl,{id:e,controlType:s,controlAlignment:u,value:h,onChange:f,masks:t.config.text?.validation?.masks,onBlur:()=>{a(!0)},hasError:d,placeholder:l!==Tt.INLINE?t.config.text?.interface?.placeholder||"":c,prefix:t.config.text?.interface?.icon?(0,r.jsx)(Bl,{iconClass:t.config.text.interface.icon},void 0):void 0,type:p,readOnly:t.config.text?.attributes.readonly},void 0)},isQuestion:!0,isRequired:e=>!!e.config.text?.validation?.required,getErrors(e,t){const n=[],r=!!e.config.text?.validation?.required,i=""===t.text?.input||null===t.text?.input,o=r||!r&&!i;if(r&&i&&n.push(lu.requiredInput),e.config.text?.validation?.masks.maskType===gt.NONE&&o){const o=t.text?.input||"",a=e.config.text.validation.filters;[Ft.ALL,Ft.NOLETTER,Ft.NONUMBER].includes(a.type)?(a.type===Ft.NOLETTER?n.push(...fa(o).not().matches(/[A-Za-z]/,lu.inputNoLetter).hasErrors()):a.type===Ft.NONUMBER&&n.push(...fa(o).not().matches(/[0-9]/,lu.inputNoNumber).hasErrors()),a.minString&&(r||!r&&!i)&&n.push(...fa(o).hasMinLength(a.minString,Kt(lu.minStringInput,a.minString,o.length)).hasErrors()),a.maxString&&(r||!r&&!i)&&n.push(...fa(o).hasMaxLength(a.maxString,Kt(lu.maxStringInput,a.maxString,o.length)).hasErrors())):a.type===Ft.EMAIL?n.push(...fa(o).isEmail(lu.inputEmail).hasErrors()):a.type===Ft.INTEGER||a.type===Ft.NUMBER?(n.push(...fa(o).matches(a.type===Ft.INTEGER?/^[-+]?\d+$/:/^[-+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([.]([0-9]+))?$/,a.type===Ft.INTEGER?lu.inputInteger:lu.inputNumber).hasErrors()),null!=a.minNum&&Number.parseFloat(o)<a.minNum&&n.push(Kt(lu.inputNumMin,a.minNum,o)),null!=a.maxNum&&Number.parseFloat(o)>a.maxNum&&n.push(Kt(lu.inputNumMax,a.maxNum,o))):a.type===Ft.PHONE?n.push(...fa(o).matches(/^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,lu.inputPhone).hasErrors()):a.type===Ft.URL&&n.push(...fa(o).matches(/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,lu.inputUrl).hasErrors())}return n},setValue(e,t,n){n.text&&(n.text.input=e)},isConditionTrue(e,t,n,r,i){let o;const a=i.text.input.length;if(e===tt.LENGTH){const e=Cl(r);o=n===et.GREATER_THAN?a>e:n===et.LESS_THAN?a<e:a===e}else{const e=i.text.input;if(n===et.CONTAINS)o=new RegExp(r,"gi").test(e);else if(n===et.ENDS_WITH)o=new RegExp(`${r}$`,"gi").test(e);else if(n===et.EQUALS_TO)o=r.toLowerCase()===e.toLowerCase();else if(n===et.GREATER_THAN){const t=Sl(r);o=Sl(e)>t}else if(n===et.LESS_THAN){const t=Sl(r);o=Sl(e)<t}else o=new RegExp(`^${r}`,"gi").test(e)}return t===nt.IS?o:!o},getDisplayValue:(e,t)=>t.text?.input,getNumericValue:(e,t)=>Dl(t.text?.input),getAnswerValue:(e,t)=>(0,r.jsx)(su.UserInput,{children:t.text?.input??null},void 0),getPresetValue:(e,t)=>us(t,(t=>{if(io(e.config.text?.attributes.defaultValue)||(t.text.input=e.config.text.attributes.defaultValue),e.config.text?.attributes.prefilType===xt.URL){const n=Ji(window.location.search,e.config.text.attributes.prefilParameter);n&&"string"==typeof n&&(t.text.input=n)}if(e.config.text?.attributes.prefilType===xt.META){const n=no(e.extras);n&&n.metaValue&&"string"==typeof n.metaValue&&(t.text.input=n.metaValue)}}))};var cu=function(e,t){var n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;e:for(var i=0,o=0;i<r;i++){for(var a=e.charCodeAt(i);o<n;)if(t.charCodeAt(o++)===a)continue e;return!1}return!0};const du="wpeform-component-dropdown",hu=Oe(du,"button"),fu=Oe(du,"dd-container"),pu=768,mu=o.vJ`
body {
	&.${du}-is-open-mod-body {
		overflow: hidden;
		@media screen and (min-width: ${Fe(pu)}) {
			overflow: unset;
		}
	}
}
`,gu=o.ZP.span`
	color: ${e=>e.theme.greyLightColor};
	flex: 0 0 1em;
	height: ${e=>Fe(e.theme.controlHeightBase)};
	width: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
`,vu=o.ZP.span`
	padding: 0 ${e=>Fe(e.theme.controlHeightBase/2)} 0
		${e=>Fe(e.theme.controlHeightBase/4)};
	width: calc(100% - 2em);
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	flex: 1 0 auto;
`,yu=o.ZP.div`
	${Ie};
	position: relative;
	&.${du}--align-LEFT {
		${vu} {
			text-align: left;
		}
	}
	&.${du}--align-CENTER {
		${vu} {
			text-align: center;
		}
	}
	&.${du}--align-RIGHT {
		${vu} {
			text-align: right;
		}
	}
`,bu=o.ZP.span`
	line-height: 1;
	height: 1em;
	transform: rotate(0deg);
	transform-origin: center center;
	transition: ${e=>Le(["transform","color"],e.theme.transitionControl)};
`,xu=o.ZP.span`
	color: ${e=>e.theme.greyLightColor};
	position: relative;
	flex: 0 0 1em;
	height: ${e=>Fe(e.theme.controlHeightBase)};
	width: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0 0 auto;
	&::before {
		content: '';
		display: block;
		position: absolute;
		width: 1px;
		top: 18%;
		bottom: 18%;
		background-color: ${e=>e.theme.borderColorSplit};
		left: ${e=>Fe(e.theme.controlHeightBase/-4)};
	}
`,wu=o.ZP.div`
	position: absolute;
	height: 2px;
	bottom: 0;
	left: 0;
	right: 0;
	transform-origin: 50% 50%;
	background-color: ${e=>e.theme.primaryColor};
	pointer-events: none;
	transform: scaleX(0);
	transition: ${e=>Le(["transform"],e.theme.transitionBeizer)};
`,_u=o.ZP.button`
	${Ie};
	cursor: pointer;
	text-align: left;
	background-color: ${e=>e.theme.appBackgroundColor};
	appearance: none;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	position: relative;
	overflow: hidden;
	height: ${e=>Fe(e.theme.controlHeightBase)};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	font-size: ${e=>Fe(e.theme.fz.base)};
	box-shadow: 0 0 0 0 transparent;
	color: ${e=>e.theme.textColor};
	padding: 0 ${e=>Fe(e.theme.controlHeightBase/4)};
	border: 1px solid ${e=>e.theme.borderColorBase};
	box-shadow: ${e=>e.theme.boxShadowNoneFocus};
	transition: ${e=>Le(["border-color","box-shadow"],e.theme.transitionControl)};

	&:hover {
		color: ${e=>e.theme.textColor};
		border-color: ${e=>e.theme.primaryColor};
		${xu} {
			color: ${e=>e.theme.textColor};
		}
	}

	&:active,
	&:focus {
		color: ${e=>e.theme.textColor};
		border-color: ${e=>e.theme.primaryColor};
		box-shadow: ${e=>e.theme.boxShadowControlFocus};
	}

	&.${hu}--is-open {
		border-color: ${e=>e.theme.primaryColor};
		box-shadow: ${e=>e.theme.boxShadowControlFocus};
		${bu} {
			transform: rotate(180deg);
		}
	}

	&.${hu}--is-empty {
		${vu} {
			color: ${e=>e.theme.textColorSecondary};
		}
	}

	&.${hu}--has-error {
		border-color: ${e=>e.theme.borderColorError};

		&:hover {
			border-color: ${e=>e.theme.borderColorError};
		}

		&:active,
		&:focus {
			border-color: ${e=>e.theme.borderColorError};
			box-shadow: ${e=>e.theme.boxShadowControlFocusError};
		}

		${gu} {
			color: ${e=>e.theme.errorColor};
		}
	}

	&:disabled {
		background-color: ${e=>e.theme.disabledBackgroundColor};
		color: ${e=>e.theme.disabledColor};
		border-color: ${e=>e.theme.disabledColor};
		cursor: not-allowed;
		box-shadow: none;
	}

	/** MATERIAL STYLE */
	&.${hu}--type-MATERIAL {
		border: 0 none;
		border-bottom: 2px solid ${e=>e.theme.borderColorBase};
		border-radius: ${e=>Fe(e.theme.borderRadiusBase)}
			${e=>Fe(e.theme.borderRadiusBase)} 0 0;
		box-shadow: none;
		background-color: ${e=>e.theme.backgroundControl};
		transition: ${e=>Le(["background-color"],e.theme.transitionControl)};

		&:hover {
			border-color: ${e=>e.theme.borderColorBase};
		}

		&:active,
		&:focus {
			background-color: ${e=>Ae(.5,e.theme.backgroundControl)};
			border-color: ${e=>e.theme.borderColorBase};
			box-shadow: none;
		}

		&:hover
			+ ${wu},
			&:active
			+ ${wu},
			&:focus
			+ ${wu},
			&.${hu}--is-open
			+ ${wu} {
			transform: scaleX(1);
		}

		&.${hu}--has-error {
			border-bottom-color: ${e=>e.theme.borderColorError};

			&:hover {
				border-bottom-color: ${e=>e.theme.borderColorError};
			}

			&:active,
			&:focus {
				border-bottom-color: ${e=>e.theme.borderColorError};
			}

			+ ${wu} {
				background-color: ${e=>e.theme.borderColorError};
			}
		}

		&:disabled {
			background-color: ${e=>e.theme.disabledBackgroundColor};
			color: ${e=>e.theme.disabledColor};
			border-color: ${e=>e.theme.disabledColor};
			cursor: not-allowed;
			+ ${wu} {
				transform: scaleX(0);
				background-color: ${e=>e.theme.disabledColor};
			}
		}
	}

	/** SIZES */
	&.${hu}--size-SMALL {
		height: ${e=>Fe(.8*e.theme.controlHeightBase)};
		padding: ${e=>Fe(e.theme.controlHeightBase/8)};
		/* font-size: ${e=>Fe(e.theme.fz.small1)}; */
		${vu} {
			padding: 0 ${e=>Fe(e.theme.controlHeightBase/3)} 0
				${e=>Fe(e.theme.controlHeightBase/8)};
		}
		${xu} {
			height: ${e=>Fe(.8*e.theme.controlHeightBase)};
			&::before {
				left: ${e=>Fe(e.theme.controlHeightBase/-6)};
			}
		}
	}
	&.${hu}--size-LARGE {
		height: ${e=>Fe(1.2*e.theme.controlHeightBase)};
		padding: ${e=>Fe(e.theme.controlHeightBase/4)};
		${xu} {
			height: ${e=>Fe(1.2*e.theme.controlHeightBase)};
		}
	}
`,Su=o.ZP.div`
	${Ie};
	font-size: ${e=>Fe(e.theme.fz.base)};
	font-family: ${e=>e.theme.fontFamilyBody};
	position: fixed;
	z-index: 999997;
	min-width: 300px;

	padding: 0;
	perspective: 200px;

	&.${fu}--size-SMALL {
		min-width: 130px;
	}

	/** Reverse position to bottom for smaller screens */
	@media screen and (max-width: ${Fe(pu-1)}) {
		left: ${e=>Fe(2*e.theme.gutter)};
		right: ${e=>Fe(2*e.theme.gutter)};
		bottom: 0;
		width: auto !important;
		top: auto !important;
		min-width: 100px !important;
	}

	/** We position this w.r.t screen width and not container width */
	@media screen and (min-width: ${Fe(pu)}) {
		width: ${e=>Fe(e.width||300)};
		left: ${e=>Fe(e.left||0)};
		right: auto;
		bottom: auto;
	}
`,Eu=(0,o.ZP)(l.animated.div)`
	border: 1px solid ${e=>e.theme.borderColorSplit};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	background-color: ${e=>e.theme.appBackgroundColor};
	box-shadow: ${e=>e.theme.boxShadow12dp};
	overflow: hidden;
	will-change: transform, opacity;

	/** Reverse position to bottom for smaller screens */
	@media screen and (max-width: ${Fe(pu-1)}) {
		border-bottom: 0 none;
		transform-origin: bottom center !important;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
`,Cu=o.ZP.div`
	padding: 0;
	border-bottom-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-bottom-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	max-height: calc(
		70vh - ${e=>Fe(2.5*e.theme.controlHeightBase)}
	);
	overflow-y: auto;
	overflow-x: hidden;
	/** We position this w.r.t screen width and not container width */
	@media screen and (min-width: ${Fe(pu)}) {
		max-height: calc(
			60vh - ${e=>Fe(2.5*e.theme.controlHeightBase)}
		);
	}
`,ku=o.ZP.div`
	${Ie};
	padding: ${e=>Fe(e.theme.gutter)};
	min-height: 150px;
`,Mu=o.ZP.div`
	margin: 0;
	margin-bottom: ${e=>Fe(e.theme.gutter/2)};
	&:last-child {
		margin-bottom: 0;
	}
`,Tu=o.ZP.label`
	margin: 0;
	margin-bottom: ${e=>Fe(e.theme.gutter/4)};
	display: block;
	font-size: ${e=>Fe(e.theme.fz.small1)};
	font-weight: bold;
	text-transform: uppercase;
	color: ${e=>e.theme.textColorSecondary};
`,Du=(0,o.ZP)(l.animated.div)`
	position: fixed;
	z-index: 999996;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(255, 255, 255, 0.75);
	will-change: opacity;

	@media screen and (min-width: ${Fe(pu)}) {
		display: none;
	}
`,Au=o.ZP.div`
	padding: 0;
	margin: 0;
`,Pu=o.ZP.span`
	height: ${e=>Fe(.4*e.theme.controlHeightBase)};
	width: ${e=>Fe(.4*e.theme.controlHeightBase)};
	flex: 0 0 ${e=>Fe(.4*e.theme.controlHeightBase)};
	border-radius: ${e=>Fe(.2*e.theme.controlHeightBase)};
	font-size: ${e=>Fe(.2*e.theme.controlHeightBase)};
	background-color: ${e=>e.theme.borderColorSplit};
	color: ${e=>e.theme.primaryBgText};
	margin: 0 ${e=>Fe(e.theme.gutter/2)} 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: ${e=>Le(["background-color","opacity"],e.theme.transitionControl)};
`,Ou=o.ZP.span`
	flex: 1 0
		calc(100% - ${e=>Fe(.4*e.theme.controlHeightBase)});
	width: calc(
		100% - ${e=>Fe(.4*e.theme.controlHeightBase)}
	);
	text-align: left;
	text-transform: uppercase;
	line-height: 1;
	font-weight: bold;
`,Ru=o.ZP.button`
	position: relative;
	width: 100%;
	min-height: ${e=>Fe(.8*e.theme.controlHeightBase)};
	padding: 0 ${e=>Fe(e.theme.gutter/2)};
	border-radius: 0;
	border: 0 none;
	outline: none;
	color: ${e=>e.theme.textColorSecondary};
	background-color: ${e=>e.theme.appBackgroundColor};
	font-size: ${e=>Fe(e.theme.fz.small2)};
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	text-align: left;
	cursor: pointer;
	transition: ${e=>Le(["background-color","color"],e.theme.transitionControl)};
	${Pu} {
		opacity: 0.9;
	}
	&.is-active {
		color: ${e=>e.theme.textColor};
		background-color: ${e=>e.theme.backgroundControl};
		${Pu} {
			background-color: ${e=>e.theme.successColor};
			opacity: 0.8;
		}
	}

	&:hover {
		${Pu} {
			opacity: 1;
		}
	}

	&:hover,
	&:focus,
	&:active {
		background-color: ${e=>e.theme.backgroundHover};
		color: ${e=>e.theme.textColor};
	}

	&:focus:active {
		background-color: ${e=>e.theme.primaryBackgroundColor};
		transition: ${e=>Le(["color"],e.theme.transitionControl)};
	}
`,Fu=o.ZP.div`
	display: flex;
	flex-flow: row wrap;
	padding: 0;
	margin: 0;
`,Lu=o.ZP.div`
	width: 100%;
	flex: 0 0 100%;
	border-bottom: 1px solid ${e=>e.theme.borderColorSplit};
	padding: ${e=>Fe(e.theme.gutter/4)} 0;

	&:last-child {
		border-bottom: 0 none;
	}
	@media screen and (min-width: 768px) {
		width: 50%;
		flex-basis: 50%;
		min-width: 100px;
		border-bottom: 0 none;
		border-right: 1px solid ${e=>e.theme.borderColorSplit};
		&:last-child {
			border-right: 0 none;
		}
	}
`;var Iu,Nu=["bottom","height","left","right","top","width"],ju=new Map,$u=function e(){var t=[];ju.forEach((function(e,n){var r=n.getBoundingClientRect();(function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Nu.some((function(n){return e[n]!==t[n]}))})(r,e.rect)&&(e.rect=r,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),Iu=window.requestAnimationFrame(e)};function zu(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}var Bu=zu()?i.useLayoutEffect:i.useEffect;function Uu(e,t,n){var r,o,a,s;"boolean"==typeof t?r=t:(r=null==(a=null==t?void 0:t.observe)||a,o=null==t?void 0:t.onChange),(s=n)&&"[object Function]"=={}.toString.call(s)&&(o=n);var l=(0,i.useState)(e.current),u=l[0],c=l[1],d=(0,i.useRef)(!1),h=(0,i.useRef)(!1),f=(0,i.useState)(null),p=f[0],m=f[1],g=(0,i.useRef)(o);return Bu((function(){g.current=o,e.current!==u&&c(e.current)})),Bu((function(){u&&!d.current&&(d.current=!0,m(u.getBoundingClientRect()))}),[u]),Bu((function(){var t,n,i,o=u;return h.current||(h.current=!0,o=e.current),o?(n=o,i=function(e){null==g.current||g.current(e),m(e)},t={observe:function(){var e=0===ju.size;ju.has(n)?ju.get(n).callbacks.push(i):ju.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[i]}),e&&$u()},unobserve:function(){var e=ju.get(n);if(e){var t=e.callbacks.indexOf(i);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||ju.delete(n),ju.size||cancelAnimationFrame(Iu)}}},r&&t.observe(),a):a;function a(){t&&t.unobserve()}}),[r,u,e]),p}function Hu(){const e=(0,i.useRef)(!1);return(0,i.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}function Vu(){const[e]=(0,i.useState)(T);return e}function Wu(e){const t=(0,i.useRef)();return(0,i.useEffect)((()=>{t.current=e}),[e]),t.current}function Gu(e,t){const[n,r]=(0,i.useState)(0);return(0,i.useEffect)((()=>{let t;r(e);let n=!1;return t=window.setInterval((()=>{r((e=>{const r=e-1;return r<=0?(t&&!n&&(n=!0,clearInterval(t)),0):r}))}),1e3),()=>{n||clearInterval(t)}}),[e]),(0,i.useEffect)((()=>{if(t){const n=window.setTimeout(t,1e3*e);return()=>{clearTimeout(n)}}return()=>{}}),[t,e]),n}const qu=100,Yu=(0,o.ZP)(l.animated.span)`
	display: block;
	position: absolute;
	border-radius: 50%;
	will-change: opacity, transform;
	pointer-events: none;
`;function Zu(e){const{onRest:t,width:n,height:i,left:a,top:s,darkBg:u}=e,c=(0,o.Fg)(),d=(0,l.useSpring)({from:{opacity:.4,transform:"scale(0.4)"},to:{opacity:0,transform:"scale(12)"},onRest:t,config:{tension:280,friction:110,clamp:!0}});return(0,r.jsx)(Yu,{style:{width:Fe(n),height:Fe(i),left:Fe(a),top:Fe(s),backgroundColor:u?Ae(.5,c.primaryBgText):c.primaryLightColor,...d}},void 0)}function Xu({darkBg:e}={darkBg:!1}){const[t,n]=(0,i.useState)([]),o=Hu();return[t=>{const{left:r,top:i}=t.currentTarget.getBoundingClientRect(),a=t.clientX-r,s=t.clientY-i,l=Math.min(t.currentTarget.clientWidth/4,qu),u=Math.min(t.currentTarget.clientHeight/4,qu),c=Math.max(l,u),d=t.timeStamp;n((t=>[...t,{key:d,width:c,height:c,left:a-c/2,top:s-c/2,onRest:()=>{o.current&&n((e=>e.filter((e=>e.key!==d))))},darkBg:e}]))},t.map((e=>(0,r.jsx)(Zu,Object.assign({},e),void 0)))]}const Qu=`body.${du}-is-open-mod-body {\n\toverflow: hidden;\n}\n@media screen and (min-width: ${Fe(pu)}) {\n\tbody.${du}-is-open-mod-body {\n\t\toverflow: unset;\n\t}\n}`;function Ku(e){const{isOpen:t,closePortal:n,dropdownButtonRect:a,size:s,dropdownButtonRef:l,styleProps:u,children:c,minMenuWidth:d}=e,[h,f]=(0,i.useState)({top:0,topBleeding:!1,rightBleeding:!1}),p=(0,o.Fg)(),m=(0,i.useRef)(null),g=Uu(m,{observe:window.innerWidth>=pu}),v=Bt();(0,i.useLayoutEffect)((()=>{t&&setTimeout((()=>{m.current&&m.current.focus()}),400),t?document.body.classList.add(`${du}-is-open-mod-body`):document.body.classList.remove(`${du}-is-open-mod-body`)}),[m,t]),(0,i.useLayoutEffect)((()=>{const e=()=>{f({top:0,rightBleeding:!1,topBleeding:!1})};if(window.innerWidth<pu)e();else if(a&&g){let e=a.bottom+p.gutter/2;const t=window.innerHeight,n=g.height;let r=!1;e+n>t&&(e=a.top-n-p.gutter/2,e<p.gutter/2&&(e=p.gutter/2),r=!0);const i=window.innerWidth,o=g.width;let s=!1;a.left+o+p.gutter>i&&(s=!0),f({top:e,topBleeding:r,rightBleeding:s})}else e()}),[a,g,p.gutter]),(0,i.useEffect)((()=>{if(t){const e=e=>{const t=e.target;return!(document.body.contains(t)||!v.current||v.current.contains(t))||e.target===m.current||m.current?.contains(e.target)||e.target===l.current||l.current?.contains(e.target)},t=t=>{t.target.shadowRoot||e(t)||n()},r=t=>{e(t)||n()},i=v.current;return window.addEventListener("click",t),i&&i.addEventListener("click",r),()=>{window.removeEventListener("click",t),i&&i.removeEventListener("click",r)}}return()=>{}}),[n,t,v,l]),(0,i.useEffect)((()=>{if(t){const e=e=>{"Escape"===e.key&&n()};return document.addEventListener("keyup",e),()=>{document.removeEventListener("keyup",e)}}return()=>{}}),[n,t]);const y=Pe(fu,{[`size-${s}`]:!0});let b,x=a?.width;return d&&x&&x<d&&(x=d),a&&g&&(b=h.rightBleeding?a.left-(g.width-a.width):a.left),(0,r.jsxs)(Yt.Portal,{children:[(0,r.jsx)(Du,{style:{opacity:u.opacity}},void 0),(0,r.jsx)(Su,Object.assign({style:{top:Fe(h.top)},left:b,width:x,ref:m,tabIndex:0,className:y},{children:(0,r.jsx)(Eu,Object.assign({style:u,className:B({"is-bleeding":h.topBleeding})},{children:c}),void 0)}),void 0)]},void 0)}function Ju(e){const{closePortal:t,isOpen:n,menu:i,size:a,dropdownButtonRef:s,minMenuWidth:u}=e,{dropdownContainerTransitions:c,dropdownButtonRect:d}=function(e,t){const n=Uu(t,{observe:e&&window.innerWidth>=pu}),r=(0,o.Fg)();return{dropdownContainerTransitions:(0,l.useTransition)(e,{from:{transform:window.innerWidth<pu?"translate3d(0, 50px, -50px)":"translate3d(0, 50px, 0)",opacity:0},reverse:e,enter:{opacity:1,transform:"translate3d(0, 0, 0)"},leave:{opacity:0},config:r.springConfigStiff}),dropdownButtonRect:n}}(n,s);return c(((e,o)=>o&&(0,r.jsx)("div",{children:(0,r.jsx)(Ku,Object.assign({isOpen:n,closePortal:t,size:a,dropdownButtonRect:d,dropdownButtonRef:s,styleProps:e,minMenuWidth:u},{children:i(t)}),void 0)},void 0)))}function ec(e){const{prefix:t,controlType:n=Dt.BOXY,controlAlignment:o=Mt.LEFT,size:a=ft.DEFAULT,className:s,disabled:l,buttonLabel:u,passiveButton:c=!1,menu:d,onClose:h,onOpen:f,hasError:p=!1,minMenuWidth:m,loading:g=!1,...v}=e,{isOpen:y,closePortal:b,togglePortal:x,dropdownButtonRef:w,addRipple:_,ripples:S}=function(e,t){const n=(0,i.useRef)(null),[r,o]=(0,i.useState)(!1),a=(0,i.useCallback)((()=>{o(!1),n.current&&n.current.focus()}),[]),s=(0,i.useCallback)((()=>{o((e=>!e))}),[]),l=Wu(r);(0,i.useEffect)((()=>{!0===l&&!1===r&&e?e():!1===l&&!0===r&&t&&t()}),[r,l,e,t]);const[u,c]=Xu();return(0,i.useEffect)((()=>{const e=`${du}--global-style`;if(document.head.querySelector(`style#${e}`))return()=>{};const t=document.createElement("style");return t.setAttribute("id",e),t.innerHTML=Qu,document.head.appendChild(t),()=>{const t=document.head.querySelector(`style#${e}`);t&&t.remove()}}),[]),{isOpen:r,closePortal:a,togglePortal:s,dropdownButtonRef:n,addRipple:u,ripples:c}}(h,f),E=Pe(du,{"is-open":y,[`type-${n}`]:!0,[`align-${o}`]:"string"!=typeof u},s),C=Pe(hu,{"is-empty":c,"is-open":y,[`type-${n}`]:!0,"has-error":p,[`size-${a}`]:!0});return(0,r.jsxs)(yu,Object.assign({className:E},{children:[(0,r.jsx)(mu,{},void 0),(0,r.jsxs)(_u,Object.assign({type:"button",disabled:l||g,className:C,ref:w,onClick:e=>{_(e),x()}},v,{children:[S,t||g?(0,r.jsx)(gu,{children:g?(0,r.jsx)(Bl,{iconClass:"fas fa-spinner fa-pulse"},void 0):t},void 0):null,(0,r.jsx)(vu,{children:u},void 0),(0,r.jsx)(xu,{children:(0,r.jsx)(bu,{children:(0,r.jsx)(Bl,{iconClass:"fas fa-chevron-down"},void 0)},void 0)},void 0)]}),void 0),n===Dt.MATERIAL?(0,r.jsx)(wu,{},void 0):null,(0,r.jsx)(Ju,{closePortal:b,isOpen:y,menu:d,size:a,dropdownButtonRef:w,minMenuWidth:m},void 0)]}),void 0)}ec.Widget=ku,ec.FormControl=Mu,ec.Label=Tu,ec.Menu=Au,ec.MenuItem=function(e){const{children:t,active:n,onClick:i}=e;return(0,r.jsxs)(Ru,Object.assign({className:B({"is-active":n}),onClick:e=>{e.preventDefault(),i()}},{children:[(0,r.jsx)(Pu,{children:(0,r.jsx)(Bl,{iconClass:"fas fa-check"},void 0)},void 0),(0,r.jsx)(Ou,{children:t},void 0)]}),void 0)},ec.SplitMenu=Fu,ec.SplitMenuColumn=Lu,ec.ScrollableItems=Cu;const tc="wpeform-control-select",nc=Oe(tc,"search"),rc=Oe(tc,"menu"),ic=o.ZP.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	overflow-x: auto;
`,oc=o.ZP.button`
	${Ie};
	color: ${e=>e.theme.textColor};
	padding: ${e=>Fe(e.theme.gutter/4)};
	background-color: ${e=>e.theme.backgroundControl};
	border: 0 none;
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	cursor: pointer;
	flex: 0 0 ${e=>Fe(3*e.theme.controlHeightBase/4)};
	width: ${e=>Fe(3*e.theme.controlHeightBase/4)};
	transition: ${e=>Le(["background-color","color"],e.theme.transitionControl)};

	&:hover,
	&:active,
	&:focus {
		background-color: ${e=>e.theme.errorBackgroundColor};
		color: ${e=>e.theme.errorColor};
	}
`,ac=o.ZP.div`
	padding: ${e=>Fe(e.theme.gutter/2)};
	margin: 0;
	border-bottom: 1px solid ${e=>e.theme.borderColorSplit};
	display: flex;
	flex-flow: row nowrap;
	${oc} {
		flex: 0 0 ${e=>Fe(e.theme.controlHeightBase)};
		margin-left: auto;
		width: ${e=>Fe(e.theme.controlHeightBase)};
		height: ${e=>Fe(e.theme.controlHeightBase)};
	}
`,sc=o.ZP.div`
	flex: 0 0
		calc(
			100% -
				${e=>Fe(e.theme.controlHeightBase+e.theme.gutter/2)}
		);
	width: calc(
		100% -
			${e=>Fe(e.theme.controlHeightBase+e.theme.gutter/2)}
	);
`,lc=o.ZP.div`
	margin: 0;
	padding: ${e=>Fe(e.theme.gutter/4)};
	border-top: 1px solid ${e=>e.theme.borderColorSplit};
	border-bottom-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-bottom-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
`,uc=o.ZP.div`
	font-size: ${e=>Fe(e.theme.fz.small1)};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	margin: ${e=>Fe(e.theme.gutter/4)};
	padding: 0 0 0 ${e=>Fe(e.theme.gutter/4)};
	flex: 0 0 auto;
	background-color: ${e=>e.asPlaceholder?"transparent":e.theme.backgroundControl};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: ${e=>e.asPlaceholder?e.theme.disabledColor:e.theme.textColor};
	max-width: 250px;

	span {
		padding: ${e=>Fe(e.theme.gutter/4)};
		max-width: calc(
			100% -
				${e=>e.asPlaceholder?"0px":Fe(3*e.theme.controlHeightBase/4)}
		);
		flex: 0 0 auto;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`,cc=o.ZP.div`
	padding: ${e=>Fe(2*e.theme.gutter)}
		${e=>Fe(e.theme.gutter/2)};
	color: ${e=>e.theme.greyLightColor};
	font-size: ${e=>Fe(e.theme.fz.small1)};
	width: 100%;
	text-align: center;
`,dc=o.ZP.div`
	width: 100%;
	flex: 0 0 100%;
	margin: 0 0 ${e=>Fe(e.theme.gutter/2)} 0;
	font-size: ${e=>Fe(e.theme.fz.large8)};
	color: ${e=>e.theme.disabledColor};
	.${$l} {
		display: block;
		margin: 0 auto;
	}
`,hc=o.ZP.p`
	width: 100%;
	flex: 0 0 100%;
	margin: 0;
	padding: 0;
`,fc=o.ZP.span`
	flex: 0 0 calc(100% - ${e=>Fe(e.theme.controlHeightBase)});
`,pc=o.ZP.span`
	margin-left: auto;
	flex: 0 0 ${e=>Fe(e.theme.controlHeightBase/2)};
	width: ${e=>Fe(e.theme.controlHeightBase/2)};
	height: ${e=>Fe(e.theme.controlHeightBase/2)};
	background-color: ${e=>e.theme.borderColorSplit};
	color: ${e=>e.theme.primaryBgText};
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	font-size: ${e=>Fe(.25*e.theme.controlHeightBase)};
	border-radius: 50%;
	transition: ${e=>Le(["opacity","background-color"],e.theme.transitionControl)};
`,mc=o.ZP.button`
	${Ie};
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-start;
	text-align: left;
	background-color: ${e=>e.theme.appBackgroundColor};
	color: ${e=>e.theme.textColorSecondary};
	font-size: ${e=>Fe(e.theme.fz.base)};
	padding: ${e=>Fe(e.theme.gutter/2)}
		${e=>Fe(e.theme.gutter)};
	outline: none;
	border: 0 none;
	cursor: pointer;
	transition: ${e=>Le(["background-color","color"],e.theme.transitionControl)};

	&.is-active {
		color: ${e=>e.theme.textColor};
		${pc} {
			background-color: ${e=>e.theme.successColor};
			opacity: 0.8;
		}
	}

	&:hover {
		${pc} {
			opacity: 0.5;
		}
	}

	&:hover,
	&:focus,
	&:active {
		background-color: ${e=>e.theme.backgroundHover};
		color: ${e=>e.theme.textColor};
	}

	&:focus:active {
		background-color: ${e=>e.theme.primaryBackgroundColor};
		transition: ${e=>Le(["color"],e.theme.transitionControl)};
	}
`,gc=o.ZP.div`
	&.${rc}--size-SMALL {
		${sc} {
			flex-basis: calc(
				100% -
					${e=>Fe(.8*e.theme.controlHeightBase+e.theme.gutter/4)}
			);
			width: calc(
				100% -
					${e=>Fe(.8*e.theme.controlHeightBase+e.theme.gutter/4)}
			);
		}
		${oc} {
			height: ${e=>Fe(.8*e.theme.controlHeightBase)};
			width: ${e=>Fe(.8*e.theme.controlHeightBase)};
			flex-basis: ${e=>Fe(.8*e.theme.controlHeightBase)};
			font-size: ${e=>Fe(e.theme.fz.small1)};
		}
		${mc} {
			font-size: ${e=>Fe(e.theme.fz.base)};
			padding: ${e=>Fe(e.theme.gutter/4)}
				${e=>Fe(e.theme.gutter/2)};
		}
		${pc} {
			flex-basis: ${e=>Fe(.4*e.theme.controlHeightBase)};
			width: ${e=>Fe(.4*e.theme.controlHeightBase)};
			height: ${e=>Fe(.4*e.theme.controlHeightBase)};
			font-size: ${e=>Fe(.2*e.theme.controlHeightBase)};
		}
		${fc} {
			flex-basis: calc(
				100% - ${e=>Fe(.6*e.theme.controlHeightBase)}
			);
		}
		${lc} {
			padding-top: 0;
			padding-bottom: 0;
		}
	}
`;function vc(e){const{showSearch:t,searchPlaceholder:n=bn("Search items","wp-eform"),emptyResultPlaceholder:o=bn("No items found","wp-eform"),items:a,value:s,onChange:l,toggleValue:u,itemsInValue:c,controlType:d,closePortal:h,placeholder:f,size:p,canClear:m=!0,mode:g}=e,[v,y]=(0,i.useState)(""),b=(0,i.useRef)(null),x=(0,i.useMemo)((()=>""!==v?a.filter((e=>cu(v.toLowerCase(),e.plain.toLowerCase()))):a),[v,a]);return(0,r.jsxs)(gc,Object.assign({className:Pe(rc,{[`size-${p}`]:!0})},{children:[t?(0,r.jsxs)(ac,{children:[(0,r.jsx)(sc,{children:(0,r.jsx)(jl,{size:p,innerRef:b,className:nc,value:v,onChange:y,prefix:(0,r.jsx)(Bl,{iconClass:"fas fa-search"},void 0),placeholder:n,controlType:d},void 0)},void 0),(0,r.jsx)(oc,Object.assign({type:"button",onClick:e=>{e.preventDefault(),h()}},{children:(0,r.jsx)(Bl,{iconClass:"fas fa-times"},void 0)}),void 0)]},void 0):null,(0,r.jsx)(ec.ScrollableItems,{children:x.length?x.map((e=>(0,r.jsxs)(mc,Object.assign({className:B({"is-active":s.includes(e.value)}),onClick:t=>{t.preventDefault(),u(e.value),g===Ct.SINGLE&&h()}},{children:[(0,r.jsx)(fc,{children:e.label},void 0),(0,r.jsx)(pc,{children:(0,r.jsx)(Bl,{iconClass:"fas fa-check"},void 0)},void 0)]}),e.value))):(0,r.jsxs)(cc,{children:[(0,r.jsx)(dc,{children:(0,r.jsx)(Bl,{iconClass:"fas fa-box-open"},void 0)},void 0),(0,r.jsx)(hc,{children:o},void 0)]},void 0)},void 0),m?(0,r.jsx)(lc,{children:(0,r.jsx)(ic,{children:c.length?c.map((e=>(0,r.jsxs)(uc,{children:[(0,r.jsx)("span",{children:e.label},void 0),(0,r.jsx)(oc,Object.assign({type:"button",onClick:t=>{t.preventDefault(),l(s.filter((t=>t!==e.value)))}},{children:(0,r.jsx)(Bl,{iconClass:"fas fa-times"},void 0)}),void 0)]},e.value))):(0,r.jsx)(uc,Object.assign({asPlaceholder:!0},{children:(0,r.jsx)("span",{children:f},void 0)}),void 0)},void 0)},void 0):null]}),void 0)}function yc(e){const{items:t,placeholder:n,showSearch:o=!0,searchPlaceholder:a,emptyResultPlaceholder:s,value:l,mode:u,onChange:c,controlType:d=Dt.BOXY,controlAlignment:h=Mt.LEFT,className:f,canClear:p=!0,onBlur:m,size:g=ft.DEFAULT,...v}=e,y=t.filter((e=>l&&l.includes(e.value))),b=(0,i.useCallback)((e=>{if(l.includes(e)){if(u===Ct.SINGLE)return;c(l.filter((t=>t!==e)))}else u===Ct.MULTIPLE?c([...l,e]):c([e])}),[l,u,c]),x=null===l||!l.length,w=Pe(tc,{"is-empty":x,[`type-${d}`]:!0,[`mode-${u}`]:!0,[`align-${h}`]:"string"!=typeof n},f),_=y.length?y.map((e=>e.plain)).join(", "):n;return(0,r.jsx)(ec,Object.assign({buttonLabel:_,menu:e=>(0,r.jsx)(vc,{showSearch:o,emptyResultPlaceholder:s,items:t,itemsInValue:y,onChange:c,searchPlaceholder:a,placeholder:n,toggleValue:b,value:l,controlType:d,closePortal:e,size:g,canClear:p,mode:u},void 0),className:w,controlAlignment:h,controlType:d,onClose:m,passiveButton:x,size:g},v),void 0)}const bc="wpeform-control-addon",xc=(0,o.ZP)(l.animated.div)`
	${Ie};
	&.${bc}--gutter-top {
		padding-top: ${e=>Fe(e.theme.gutter)};
	}
	&.${bc}--gutter-bottom {
		padding-bottom: ${e=>Fe(e.theme.gutter)};
	}
	&.${bc}--gutter-horizontal {
		padding-left: ${e=>Fe(e.theme.gutter)};
		padding-right: ${e=>Fe(e.theme.gutter)};
	}
	will-change: transform, opacity;
`;function wc(e){const{children:t,visible:n,gutterTop:i=!0,gutterBottom:a=!1,gutterHorizontal:s=!1,className:u}=e,c=(0,o.Fg)();return(0,l.useTransition)(n,{from:{opacity:0,transform:"translate3d(-50px, 0, 0)"},enter:{opacity:1,transform:"translate3d(0px, 0, 0)"},reverse:n,leave:{opacity:0,transform:"translate3d(50px, 0, 0)"},config:c.springConfigStiff})(((e,n)=>n&&(0,r.jsx)(xc,Object.assign({className:Pe(bc,{"gutter-top":i,"gutter-bottom":a,"gutter-horizontal":s},u),style:e},{children:t}),void 0)))}function _c(e){const{id:t,elementData:n,submissionData:o,updateSubmissionData:a}=e,s=o.value.dropdown?.other??"",l=(0,i.useCallback)((e=>{a(us(o,(t=>{t.value.dropdown.other=e})))}),[o,a]),u=!!o.value.dropdown?.selected.includes(n.config.dropdown?.interface?.othersId),c=_m(n.config.dropdown?.interface?.othersPlaceholder);return(0,r.jsx)(wc,Object.assign({visible:u},{children:(0,r.jsx)(jl,{id:`other-${t}`,value:s,onChange:l,prefix:(0,r.jsx)(Bl,{iconClass:"fas fa-pen-nib"},void 0),hasError:u&&n.config.dropdown?.validation?.required&&""===s,placeholder:c?(0,r.jsx)(xm,{nodes:c,currentElementId:n.id},void 0):bn("enter your choice here","wp-eform")},void 0)}),void 0)}const Sc={id:"dropdown",hasSubmission:!0,FormUi({id:e,elementData:t,submissionData:n,updateSubmissionData:o,setElementTouched:a,controlType:s,controlLayout:l,controlAlignment:u,elementTitle:c,hasError:d=!1}){const h=(0,i.useMemo)((()=>{const e=[...t.config.dropdown?.interface?.options??[]];return t.config.dropdown?.interface?.shuffle&&Sn(e),e.map((e=>{const n=Hi(e.label);return{label:(0,r.jsx)(xm,{nodes:n,mode:"singleline",currentElementId:t.id},void 0),plain:Vi(n),value:e.id}}))}),[t.config.dropdown?.interface?.options,t.config.dropdown?.interface?.shuffle,t.id]),f=t.config.dropdown?.interface?.others;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(yc,{id:e,items:h,disabled:t.config.dropdown?.attributes.readonly,emptyResultPlaceholder:t.config.dropdown?.interface?.emptySearchResultNotice||"",mode:t.config.dropdown?.validation?.selectType??Ct.SINGLE,onChange:e=>{o(us(n,(t=>{t.value.dropdown.selected=e})))},onBlur:()=>{a(!0)},placeholder:l!==Tt.INLINE?t.config.dropdown?.interface?.placeholder||"":c,showSearch:t.config.dropdown?.interface?.showSearch,searchPlaceholder:t.config.dropdown?.interface?.searchPlaceholder||"",value:n.value.dropdown?.selected??[],controlType:s,controlAlignment:u,hasError:d,prefix:t.config.dropdown?.interface?.icon?(0,r.jsx)(Bl,{iconClass:t.config.dropdown?.interface?.icon},void 0):void 0},void 0),f?(0,r.jsx)(_c,{elementData:t,id:e,submissionData:n,updateSubmissionData:o},void 0):null]},void 0)},isQuestion:!0,isRequired:e=>!!e.config.dropdown?.validation?.required,getErrors(e,t){const n=[],r=!!e.config.dropdown?.validation?.required,i=t.dropdown?.selected.length,o=0===i,a=e.config.dropdown?.interface?.others,s=!!t.dropdown?.selected.includes(e.config.dropdown?.interface?.othersId);if(r&&o&&n.push(lu.requiredOptions),e.config.dropdown?.validation?.selectType===Ct.SINGLE)return n;const l=e.config.dropdown?.validation?.filters.maxItems;l&&i&&i>l&&n.push(Kt(lu.maxOptions,l,i));const u=r?e.config.dropdown?.validation?.filters.minItems??1:0;return u&&i&&i<u&&n.push(Kt(lu.minOptions,u,i)),r&&a&&s&&!t.dropdown?.other&&n.push(lu.requiredOther),n},setValue(e,t,n){const r=t.config.dropdown?.interface?.options;r&&r.find((t=>t.id===e))&&(n.dropdown.selected=[e])},isConditionTrue(e,t,n,r,i,o){let a;const s=i.dropdown.selected.length;if(e===tt.LENGTH){const e=Cl(r);a=n===et.GREATER_THAN?s>e:n===et.LESS_THAN?s<e:s===e}else{const e=to(r,o.config.dropdown?.validation?.selectType===Ct.SINGLE),t=e.every((e=>i.dropdown?.selected.includes(e)))??!1;a=n===et.EQUALS_TO?s===e.length&&t:t}return t===nt.IS?a:!a},getDisplayValue(e,t){const n=t.dropdown?.selected;if(n&&n.length&&e.config.dropdown?.interface?.options.length){const t=Yi(n,e.config.dropdown.interface.options);return t.map(((e,n)=>(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(wm,{nodes:Hi(e.label),mode:"singleline"},void 0),n!==t.length-1?(0,r.jsx)("span",{children:", "},void 0):null]},e.id)))}return null},getNumericValue(e,t){const n=t.dropdown?.selected;return n&&n.length&&e.config.dropdown?.interface?.options.length?Yi(n,e.config.dropdown.interface.options).reduce(((e,t)=>e+(t.num??0)),0):0},getAnswerValue(e,t){const n=t.dropdown?.selected;if(n&&n.length&&e.config.dropdown?.interface?.options.length){const i=Yi(n,e.config.dropdown.interface.options).map((t=>{const n=Hi(t.answerDescription);return(0,r.jsxs)("li",{children:[(0,r.jsx)(xm,{nodes:Hi(t.label),mode:"singleline",currentElementId:e.id},void 0),Gi(n)?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(su.Separator,{isLight:!0},void 0),(0,r.jsx)(su.OptionDescription,{children:(0,r.jsx)(xm,{nodes:n,mode:"multiline",currentElementId:e.id},void 0)},void 0)]},void 0)]},t.id)}));return(0,r.jsxs)(su.Generic,{children:[(0,r.jsx)("ul",{children:i},void 0),t.dropdown?.other&&e.config.dropdown.interface.others&&n.includes(e.config.dropdown.interface.othersId)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(su.Separator,{},void 0),(0,r.jsx)(su.UserInput,{children:t.dropdown.other},void 0)]},void 0):null]},void 0)}return bn("No options selected.","wp-eform")},getPresetValue:(e,t)=>us(t,(t=>{if(io(e.config.dropdown?.attributes.defaultValue)||(t.dropdown.selected=to(e.config.dropdown.attributes.defaultValue,e.config.dropdown?.validation?.selectType===Ct.SINGLE)),e.config.dropdown?.attributes.prefilType===xt.URL){const n=Ji(window.location.search,e.config.dropdown.attributes.prefilParameter);if(n){const r=eo(e.config.dropdown.interface?.options,n);r.length&&(t.dropdown.selected=r)}}if(e.config.dropdown?.attributes.prefilType===xt.META){const n=no(e.extras);if(n&&n.metaValue){const r=n.metaValue;if(Array.isArray(r)){const n=[];e.config.dropdown.interface?.options.forEach((e=>{r.includes(e.id)&&n.push(e.id)})),n.length&&(t.dropdown.selected=n)}}}}))},Ec=o.ZP.div`
	padding: ${e=>Fe(e.theme.gutter/2)};
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;

	.wp-eform-iconmessage__icon {
		width: 64px;
		margin: 0 auto ${e=>Fe(e.theme.gutter/2)};
		color: ${e=>e.theme.disabledColor};
		svg {
			max-width: 64px;
			height: auto;
			display: block;
		}
		.${$l} {
			font-size: 64px;
			text-shadow: 4px 4px 0 ${e=>e.theme.backgroundShade};
		}
	}

	.wp-eform-iconmessage__text,
	.wp-eform-iconmessage__text p {
		font-size: ${e=>Fe(e.theme.fz.base)};
		color: ${e=>e.theme.disabledColor};
		text-align: center;
	}
`;function Cc({icon:e,children:t}){return(0,r.jsxs)(Ec,Object.assign({className:"wp-eform-iconmessage"},{children:[(0,r.jsx)("div",Object.assign({className:"wp-eform-iconmessage__icon"},{children:e}),void 0),(0,r.jsx)("div",Object.assign({className:"wp-eform-iconmessage__text"},{children:t}),void 0)]}),void 0)}var kc={},Mc=function(){return Mc=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Mc.apply(this,arguments)};function Tc(e){var t=0,n=0,r=e;do{t+=r.offsetTop||0,n+=r.offsetLeft||0,r=r.offsetParent}while(r);return{top:t,left:n}}Object.defineProperty(kc,"__esModule",{value:!0});var Dc=function(){function e(e){this.element=e}return e.prototype.getHorizontalScroll=function(){return this.element.scrollLeft},e.prototype.getVerticalScroll=function(){return this.element.scrollTop},e.prototype.getMaxHorizontalScroll=function(){return this.element.scrollWidth-this.element.clientWidth},e.prototype.getMaxVerticalScroll=function(){return this.element.scrollHeight-this.element.clientHeight},e.prototype.getHorizontalElementScrollOffset=function(e,t){return Tc(e).left-Tc(t).left},e.prototype.getVerticalElementScrollOffset=function(e,t){return Tc(e).top-Tc(t).top},e.prototype.scrollTo=function(e,t){this.element.scrollLeft=e,this.element.scrollTop=t},e}(),Ac=function(){function e(){}return e.prototype.getHorizontalScroll=function(){return window.scrollX||document.documentElement.scrollLeft},e.prototype.getVerticalScroll=function(){return window.scrollY||document.documentElement.scrollTop},e.prototype.getMaxHorizontalScroll=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth},e.prototype.getMaxVerticalScroll=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight},e.prototype.getHorizontalElementScrollOffset=function(e){return(window.scrollX||document.documentElement.scrollLeft)+e.getBoundingClientRect().left},e.prototype.getVerticalElementScrollOffset=function(e){return(window.scrollY||document.documentElement.scrollTop)+e.getBoundingClientRect().top},e.prototype.scrollTo=function(e,t){window.scrollTo(e,t)},e}(),Pc={elements:[],cancelMethods:[],add:function(e,t){Pc.elements.push(e),Pc.cancelMethods.push(t)},remove:function(e,t){void 0===t&&(t=!0);var n=Pc.elements.indexOf(e);n>-1&&(t&&Pc.cancelMethods[n](),Pc.elements.splice(n,1),Pc.cancelMethods.splice(n,1))}},Oc="undefined"!=typeof window,Rc={cancelOnUserAction:!0,easing:function(e){return--e*e*e+1},elementToScroll:Oc?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0},Fc=kc.default=function(e,t){return void 0===t&&(t={}),function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}(this,void 0,void 0,(function(){var n,r,i,o,a,s,l,u,c,d,h,f,p,m,g,v,y;return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(b){if(!Oc)return[2,new Promise((function(e){e(!1)}))];if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";if(o=Mc(Mc({},Rc),t),a=o.elementToScroll===window,s=!!o.elementToScroll.nodeName,!a&&!s)throw"Element to scroll needs to be either window or DOM element.";if(l=a?document.documentElement:o.elementToScroll,"smooth"===getComputedStyle(l).getPropertyValue("scroll-behavior")&&console.warn(l.tagName+' has "scroll-behavior: smooth" which can mess up with animated-scroll-to\'s animations'),u=a?new Ac:new Dc(o.elementToScroll),e instanceof Element){if(i=e,s&&(!o.elementToScroll.contains(i)||o.elementToScroll.isSameNode(i)))throw"options.elementToScroll has to be a parent of scrollToElement";n=u.getHorizontalElementScrollOffset(i,o.elementToScroll),r=u.getVerticalElementScrollOffset(i,o.elementToScroll)}else if("number"==typeof e)n=u.getHorizontalScroll(),r=e;else{if(!Array.isArray(e)||2!==e.length)throw"Wrong function signature. Check documentation.\nAvailable method signatures are:\n  animateScrollTo(y:number, options)\n  animateScrollTo([x:number | null, y:number | null], options)\n  animateScrollTo(scrollToElement:Element, options)";n=null===e[0]?u.getHorizontalScroll():e[0],r=null===e[1]?u.getVerticalScroll():e[1]}return n+=o.horizontalOffset,r+=o.verticalOffset,c=u.getMaxHorizontalScroll(),d=u.getHorizontalScroll(),n>c&&(n=c),h=n-d,f=u.getMaxVerticalScroll(),p=u.getVerticalScroll(),r>f&&(r=f),m=r-p,g=Math.abs(Math.round(h/1e3*o.speed)),v=Math.abs(Math.round(m/1e3*o.speed)),(y=g>v?g:v)<o.minDuration?y=o.minDuration:y>o.maxDuration&&(y=o.maxDuration),[2,new Promise((function(e,t){var i;0===h&&0===m&&e(!0),Pc.remove(o.elementToScroll,!0);var a=function(){f(),cancelAnimationFrame(i),e(!1)};Pc.add(o.elementToScroll,a);var s=o.cancelOnUserAction?a:function(e){return e.preventDefault()},l=o.cancelOnUserAction?{passive:!0}:{passive:!1},c=["wheel","touchstart","keydown","mousedown"],f=function(){c.forEach((function(e){o.elementToScroll.removeEventListener(e,s,l)}))};c.forEach((function(e){o.elementToScroll.addEventListener(e,s,l)}));var g=Date.now(),v=function(){var t=Date.now()-g,a=t/y,s=Math.round(d+h*o.easing(a)),l=Math.round(p+m*o.easing(a));t<y&&(s!==n||l!==r)?(u.scrollTo(s,l),i=requestAnimationFrame(v)):(u.scrollTo(n,r),cancelAnimationFrame(i),f(),Pc.remove(o.elementToScroll,!1),e(!0))};i=requestAnimationFrame(v)}))]}))}))};function Lc(e){const{children:t,visible:n,mode:i}=e;return"live"===i?n?(0,r.jsx)(r.Fragment,{children:t},void 0):null:(0,r.jsx)("div",Object.assign({style:{opacity:n?"1":"0.4"}},{children:t}),void 0)}const Ic="wpeform-component-animatein",Nc=o.ZP.div`
	perspective: 600px;
`,jc=(0,o.ZP)(l.animated.div)`
	will-change: opacity, transform;
`,$c=o.ZP.div``;function zc(e){return(0,r.jsx)(Nc,Object.assign({className:Ic},{children:(0,r.jsx)($c,{children:e.children},void 0)}),void 0)}function Bc(e){const[t,n]=(0,i.useState)(!1),{ref:o,inView:a}=function({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:u,onChange:c}={}){var d;const[h,p]=i.useState(null),m=i.useRef(),[g,v]=i.useState({inView:!!l,entry:void 0});m.current=c,i.useEffect((()=>{if(s||!h)return;let i;return i=f(h,((e,t)=>{v({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&a&&i&&(i(),i=void 0)}),{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},u),()=>{i&&i()}}),[Array.isArray(e)?e.toString():e,h,o,r,a,s,n,u,t]);const y=null==(d=g.entry)?void 0:d.target,b=i.useRef();h||!y||a||s||b.current===y||(b.current=y,v({inView:!!l,entry:void 0}));const x=[p,g.inView,g.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}({threshold:0,rootMargin:"0px 0px -50px 0px",triggerOnce:!0,skip:t});(0,i.useEffect)((()=>{!0===a&&n(!0)}),[a]);const s=Ze("slow"),u=(0,l.useSpring)({opacity:a?1:0,transform:a?"translate3d(0px, 0, 0)":"translate3d(60px, 0, 0)",config:s});return(0,r.jsx)(Nc,Object.assign({className:Ic,ref:o},{children:(0,r.jsx)(jc,Object.assign({style:u},{children:e.children}),void 0)}),void 0)}function Uc(e){const{mode:t="live"}=e;return"live"===t?(0,r.jsx)(Bc,Object.assign({},e),void 0):(0,r.jsx)(zc,Object.assign({},e),void 0)}const Hc="wpeform-component-question",Vc=o.ZP.div`
	width: 100%;
	margin: 0 0 ${e=>Fe(e.theme.gutter/2)} 0;
	flex: 0 0 100%;
`,Wc=o.ZP.label`
	display: block;
	font-size: ${e=>Fe(e.theme.fz.base)};
	font-weight: ${e=>e.theme.boldHeading?"bold":"normal"};
	font-family: ${e=>e.theme.fontFamilyHeading};
	color: ${e=>e.theme.headingColor};
	margin: 0 0 ${e=>Fe(e.theme.gutter/8)} 0;
	position: relative;
`,Gc=o.ZP.span`
	color: ${e=>e.theme.errorColor};
	font-size: ${e=>Fe(e.theme.fz.small2-4)};
	margin: 0 0 0 0.25em;
	vertical-align: super;
	position: relative;
	top: -0.2em;
`,qc=o.ZP.label`
	display: block;
	font-family: ${e=>e.theme.fontFamilyHeading};
	font-size: ${e=>Fe(e.theme.fz.base)};
	color: ${e=>e.theme.textColorSecondary};
	font-style: ${e=>e.theme.italicHeading?"italic":"normal"};
`,Yc=o.ZP.div`
	margin: ${e=>Fe(e.theme.gutter/2)} 0 0 0;
	color: ${e=>e.theme.textColor};
	font-size: ${e=>Fe(e.theme.fz.base)};
`,Zc=o.ZP.div`
	width: 100%;
	flex: 0 0 100%;
`,Xc=o.ZP.div`
	margin: ${e=>Fe(e.theme.gutter/5)} 0 0 0;
	width: 100%;
	overflow: hidden;
`,Qc=(0,o.ZP)(l.animated.p)`
	font-size: ${e=>Fe(e.theme.fz.small1)};
	line-height: 1.5;
	color: ${e=>e.theme.errorColor};
	font-weight: normal;
	margin: 0;
	padding: 0;
	.${$l} {
		font-size: ${e=>Fe(e.theme.fz.small1-6)};
		vertical-align: super;
	}
`,Kc=o.ZP.div``,Jc=o.ZP.div`
	margin: ${e=>Fe(e.theme.gutter/2)} 0 0 0;
`,ed=o.ZP.button`
	border: 0 none;
	outline: none;
	display: inline-block;
	margin: 0;
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	background-color: ${e=>e.theme.disabledBackgroundColor};
	cursor: pointer;
	color: ${e=>e.theme.textColorSecondary};
	padding: ${e=>Fe(e.theme.gutter/4)}
		${e=>Fe(e.theme.gutter/2)};
	font-size: ${e=>Fe(e.theme.fz.small2)};
	text-transform: uppercase;
	transition: ${e=>Le(["background-color","color"],e.theme.transitionControl)};

	&:hover {
		background-color: ${e=>e.theme.backgroundShade};
		color: ${e=>e.theme.textColor};
	}

	&:active,
	&:focus {
		background-color: ${e=>e.theme.backgroundControl};
		color: ${e=>e.theme.textColor};
	}

	> span {
		display: block;
	}

	&:active {
		> span {
			transform: scale(0.9);
		}
	}

	&.active {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		color: ${e=>e.theme.textColor};
	}
`,td=o.ZP.div`
	padding: ${e=>Fe(e.theme.gutter)};
	background-color: ${e=>e.theme.disabledBackgroundColor};
	font-size: ${e=>Fe(e.theme.fz.small1)};
	color: ${e=>e.theme.textColor};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-top-left-radius: 0;
`,nd=(0,o.ZP)(l.animated.div)`
	overflow: hidden;
`,rd=o.ZP.div`
	${Ie};
	display: flex;
	flex-flow: row wrap;

	/** For Layouts */
	&.${Hc}--layout-HORIZONTAL {
		/** For mobile */
		/** Let it inherit the default styling (vertical) */
		/** For Tablet and upword */
		&.${Hc}--size-tablet {
			${Vc} {
				flex: 0 0 calc(40% - ${e=>Fe(e.theme.gutter)});
				width: calc(40% - ${e=>Fe(e.theme.gutter)});
				margin-right: ${e=>Fe(e.theme.gutter)};
				margin-bottom: 0;
			}
			${Zc} {
				flex: 0 0 60%;
				width: 60%;
			}
		}
	}
	/** Vertical is default and inline will hide header */

	/** For Alignment */
	&.${Hc}--alignment-CENTER {
		${Vc} {
			text-align: center;
		}
	}
	&.${Hc}--alignment-RIGHT {
		${Vc} {
			text-align: right;
		}
	}
`;function id(){return(0,r.jsx)(Gc,{children:(0,r.jsx)(Bl,{iconClass:"fas fa-asterisk"},void 0)},void 0)}function od(e){const{id:t,layout:n=Tt.VERTICAL,alignment:a=Mt.LEFT,title:s,subtitle:u,description:c,hintMessage:d,hintIcon:h="fas fa-question",hintLabel:f,asterisk:p=!1,children:m,className:g,errors:v=[]}=e,y=Re(jt(),Hc,{"has-subtitle":!!u,"has-description":!!c,"has-hint":!!d,[`layout-${n}`]:!0,[`alignment-${a}`]:!0},g),b=(0,o.Fg)(),x=(0,l.useTransition)(v.map(((e,t)=>({err:e,index:t}))),{keys:e=>e.err,from:{transform:"translate3d(-50px, 0, 0)",opacity:0},enter:{transform:"translate3d(0px, 0, 0)",opacity:1},leave:{transform:"translate3d(50px, 0, 0)",opacity:0},config:b.springConfigGeneral,trail:200}),[w,_]=(0,i.useState)(!1),S=(0,i.useRef)(null),E=$(S),C=(0,l.useSpring)({opacity:w?1:0,height:w?E.height:0,config:{...b.springConfigStiff,clamp:!0}});return(0,r.jsxs)(rd,Object.assign({className:y},{children:[n!==Tt.INLINE&&s?(0,r.jsxs)(Vc,{children:[(0,r.jsxs)(Wc,Object.assign({htmlFor:t},{children:[s,p?(0,r.jsx)(id,{},void 0):null]}),void 0),u?(0,r.jsx)(qc,Object.assign({htmlFor:t},{children:u}),void 0):null,c?(0,r.jsx)(Yc,{children:c},void 0):null]},void 0):null,(0,r.jsxs)(Zc,{children:[(0,r.jsx)(Kc,{children:m},void 0),(0,r.jsx)(Xc,{children:x(((e,t)=>(0,r.jsxs)(Qc,Object.assign({style:e},{children:[(0,r.jsx)(Bl,{iconClass:"fas fa-asterisk"},void 0)," ",t.err]}),void 0)))},void 0),d?(0,r.jsxs)(Jc,{children:[(0,r.jsx)(ed,Object.assign({onClick:e=>{e.preventDefault(),_((e=>!e))},className:B({active:w})},{children:(0,r.jsxs)("span",{children:[h?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Bl,{iconClass:h},void 0)," "]},void 0):null,f??""]},void 0)}),void 0),(0,r.jsx)(nd,Object.assign({style:C},{children:(0,r.jsx)(td,Object.assign({ref:S},{children:d}),void 0)}),void 0)]},void 0):null]},void 0)]}),void 0)}function ad(){return window.location.href}function sd(e){let t=e.parentElement;return t&&t.host&&(t=t.host),t}function ld(e){let t;const n=[],r=/(auto|scroll)/;for(t=e;t!==document.body&&null!=t;t=sd(t)){const e=getComputedStyle(t);r.test(e.overflow+e.overflowY+e.overflowX)&&n.push(t)}return n.push(window),n}od.Asterisk=id;const ud={style:{wpEForm:"background-color: #0967D2; color: #ffffff; padding: 4px;",success:"background-color: #0F8613; color: #ffffff; padding: 4px;",error:"background-color: #CF1124; color: #ffffff; padding: 4px;",reset:"background-color: transparent; color: inherit; padding: 0;"},labels:{wpEForm:"WPEFORM",err:"ERROR"},log(...e){console&&console.log&&console.log(...e)},debug(e,t="l"){"undefined"!=typeof WPEFormGraphQLApp&&WPEFormGraphQLApp.debug&&("l"===t?this.l(e):this.e(e))},l(e,...t){console&&console.log&&console.log(`%c WPEFORM %c / ${e}`,ud.style.wpEForm,ud.style.reset,...t)},e(e){console&&console.log&&console.log(`%c ${ud.labels.wpEForm} %c %c ${ud.labels.err} %c / ${e}`,ud.style.wpEForm,ud.style.reset,ud.style.error,ud.style.reset)}},cd="wpeform-component-alert",dd=o.ZP.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: ${e=>Fe(1.5*e.theme.borderRadiusBase)};
	border-top-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-bottom-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	background-color: ${e=>e.theme.borderColorBase};
`,hd=o.ZP.div`
	height: ${e=>Fe(3*e.theme.fz.base)};
	width: ${e=>Fe(3*e.theme.fz.base)};
	border-radius: ${e=>Fe(1.5*e.theme.fz.base)};
	background-color: ${e=>Te(.2,e.theme.borderColorBase)};
	flex: 0 0 ${e=>Fe(3*e.theme.fz.base)};
	margin: 0 ${e=>Fe(e.theme.gutter)} 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${e=>e.theme.headingColor};
	.${$l} {
		height: ${e=>Fe(2*e.theme.fz.base)};
		width: ${e=>Fe(2*e.theme.fz.base)};
		font-size: ${e=>Fe(e.theme.fz.base)};
		background-color: ${e=>e.theme.appBackgroundColor};
		border-radius: ${e=>Fe(1*e.theme.fz.base)};
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
`,fd=o.ZP.div`
	flex: 1 0 100%;
`,pd=o.ZP.h4`
	font-weight: bold;
	color: ${e=>e.theme.headingColor};
	margin: 0 0 ${e=>Fe(e.theme.gutter/2)} 0;
	font-size: ${e=>Fe(e.theme.fz.base)};
	line-height: 1.2;
`,md=o.ZP.div`
	color: ${e=>e.theme.textColor};
	font-size: ${e=>Fe(e.theme.fz.base)};
	line-height: 1.5;
	p {
		font-size: ${e=>Fe(e.theme.fz.base)};
		line-height: 1.5;
	}
	code {
		padding: 0 4px;
		background-color: rgba(0, 0, 0, 0.05);
	}
	> * {
		margin: 0 0 ${e=>Fe(e.theme.gutter/2)} 0;
		&:last-child {
			margin-bottom: 0;
		}
	}
`,gd=o.ZP.button`
	${Ie};
	background-color: transparent;
	padding: 0;
	border: 0 none;
	outline: none;
	color: ${e=>Ee(.2,e.theme.borderColorBase)};
	transition: ${e=>Le(["color"],e.theme.transitionControl)};
	font-size: ${e=>Fe(e.theme.fz.small1)};
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	display: flex;
	height: ${e=>Fe(2*e.theme.fz.small1)};
	width: ${e=>Fe(2*e.theme.fz.small1)};
	align-items: center;
	justify-content: center;

	&:hover,
	&:focus {
		color: ${e=>e.theme.headingColor};
	}
`,vd=o.ZP.div`
	border-top-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-bottom-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border: 1px solid ${e=>Te(.2,e.theme.borderColorBase)};
	border-left: 0 none;
	padding: ${e=>Fe(e.theme.gutter)};
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	position: relative;
`,yd=(0,o.ZP)(l.animated.div)`
	${Ie};
	will-change: transform, opacity;
	background-color: ${e=>e.theme.appBackgroundColor};
	overflow: hidden;
	position: relative;
	padding: 0 0 0 ${e=>Fe(1.5*e.theme.borderRadiusBase)};

	/** Icon mod */
	&.${cd}--has-icon {
		${fd} {
			flex: 1 0
				calc(
					100% -
						${e=>Fe(3*e.theme.fz.base+e.theme.gutter)}
				);
			width: calc(
				100% -
					${e=>Fe(3*e.theme.fz.base+e.theme.gutter)}
			);
		}
	}

	&.${cd}--type-error {
		${dd} {
			background-color: ${e=>e.theme.errorColor};
		}
		${vd} {
			background-color: ${e=>e.theme.errorBackgroundColor};
			border-color: ${e=>Ee(.1,e.theme.errorBackgroundColor)};
		}
		${hd} {
			background-color: ${e=>Ee(.1,e.theme.errorBackgroundColor)};
		}
		${gd} {
			color: ${e=>Ee(.4,e.theme.errorBackgroundColor)};

			&:hover {
				color: ${e=>e.theme.errorColor};
			}
		}
	}
	&.${cd}--type-warn {
		${dd} {
			background-color: ${e=>e.theme.warningColor};
		}
		${vd} {
			background-color: ${e=>e.theme.warningBackgroundColor};
			border-color: ${e=>Ee(.15,e.theme.warningBackgroundColor)};
		}
		${hd} {
			background-color: ${e=>Ee(.15,e.theme.warningBackgroundColor)};
		}
		${gd} {
			color: ${e=>Ee(.4,e.theme.warningBackgroundColor)};

			&:hover {
				color: ${e=>e.theme.warningColor};
			}
		}
	}
	&.${cd}--type-success {
		${dd} {
			background-color: ${e=>e.theme.successColor};
		}
		${vd} {
			background-color: ${e=>e.theme.successBackgroundColor};
			border-color: ${e=>Ee(.1,e.theme.successBackgroundColor)};
		}
		${hd} {
			background-color: ${e=>Ee(.1,e.theme.successBackgroundColor)};
		}
		${gd} {
			color: ${e=>Ee(.4,e.theme.successBackgroundColor)};

			&:hover {
				color: ${e=>e.theme.successColor};
			}
		}
	}
	&.${cd}--type-primary {
		${dd} {
			background-color: ${e=>e.theme.primaryColor};
		}
		${vd} {
			background-color: ${e=>e.theme.primaryBackgroundColor};
			border-color: ${e=>Ee(.1,e.theme.primaryBackgroundColor)};
		}
		${hd} {
			background-color: ${e=>Ee(.1,e.theme.primaryBackgroundColor)};
		}
		${gd} {
			color: ${e=>Ee(.4,e.theme.primaryBackgroundColor)};

			&:hover {
				color: ${e=>e.theme.primaryColor};
			}
		}
	}
`,bd=o.ZP.div`
	${Ie};
	perspective: 600px;
`;function xd(e){const{children:t,icon:n,dismissable:a,type:s,title:u,onDismiss:c}=e,[d,h]=(0,i.useState)(!0),f=(0,o.Fg)();return(0,l.useTransition)(d,{from:{opacity:0,transform:"translate3d(0px, 0px, 0px)"},enter:{opacity:1,transform:"translate3d(0px, 0px, 0px)"},leave:{opacity:0,transform:"translate3d(50px, 0px, 0px)"},reverse:d,config:d?f.springConfigStiff:f.springConfigGeneral})(((e,i)=>i&&(0,r.jsx)(bd,{children:(0,r.jsxs)(yd,Object.assign({className:Pe(cd,{[`type-${s}`]:!0,dismissable:!!a,"has-icon":!!n}),style:e},{children:[(0,r.jsx)(dd,{},void 0),(0,r.jsxs)(vd,{children:[a?(0,r.jsx)(gd,Object.assign({title:bn("Dismiss","wp-eform"),onClick:e=>{e.preventDefault(),c&&c(),h(!1)}},{children:(0,r.jsx)(Bl,{iconClass:"fas fa-times"},void 0)}),void 0):null,n?(0,r.jsx)(hd,{children:(0,r.jsx)(Bl,{iconClass:n},void 0)},void 0):null,(0,r.jsxs)(fd,{children:[u?(0,r.jsx)(pd,{children:u},void 0):null,(0,r.jsx)(md,{children:t},void 0)]},void 0)]},void 0)]}),void 0)},void 0)))}class wd extends i.Component{constructor(e){super(e),this.state={hasError:!1,lastError:null}}static getDerivedStateFromError(e){return{hasError:!0,lastError:e}}componentDidCatch(e,t){"undefined"!=typeof window&&"undefined"!=typeof Sentry&&Sentry.captureException(e)}resetError=()=>{this.setState({hasError:!1,lastError:null})};render(){const{fallback:e,children:t}=this.props;return this.state.hasError?e(this.resetError,this.state.lastError):t}}function _d(e,t,n=!1){(0,i.useEffect)((()=>{if(n)return()=>{};if(0===t)return e(),()=>{};const r=setTimeout(e,1e3*t);return()=>{clearTimeout(r)}}),[e,t,n])}const Sd=(0,i.createContext)({name:void 0,elements:{},conditionals:[],pools:[],settings:{},structures:[],styles:{}});function Ed(){return(0,i.useContext)(Sd)}const Cd=(0,i.createContext)({__typename:"FormMetaType",elements:[]});function kd(){return(0,i.useContext)(Cd)}const Md=(0,i.createContext)("newsubmission");function Td(){return(0,i.useContext)(Md)}const Dd=(0,i.createContext)(!1),Ad=(0,i.createContext)(null),Pd=(0,i.createContext)({canNext:!1,goNext:()=>{},canPrevious:!1,goPrevious:()=>{},canSubmit:!1,submit:()=>{},canReset:!1,reset:()=>{},submitting:!1,submitted:!1,submittedState:"success"});function Od(){return(0,i.useContext)(Pd)}const Rd=(0,i.createContext)({});function Fd(){return(0,i.useContext)(Rd)}var Ld=Object.defineProperty,Id=Object.getOwnPropertySymbols,Nd=Object.prototype.hasOwnProperty,jd=Object.prototype.propertyIsEnumerable,$d=(e,t,n)=>t in e?Ld(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function zd(e){const t={};return e.forEach((e=>{t[e.id]=e})),t}function Bd(e,t,n){const r=[],i=t[n],o=e[n];return i&&i.children&&o&&!1===o.conditionallyHidden&&(r.push(n),i.children.forEach((n=>{r.push(...Bd(e,t,n))}))),r}function Ud(e,t,n){const r=[];return e&&e.children.forEach((e=>{r.push(...Bd(n,t,e))})),r}function Hd(e,t){const n=[],r=t.elements[e];return r&&r.children&&r.children.length&&(n.push(...r.children),r.children.forEach((e=>{n.push(...Hd(e,t))}))),n}function Vd(e,t){const n=[],r=t.structures.find((t=>t.id===e));return r?(r.children.forEach((e=>{n.push(e,...Hd(e,t))})),n):n}function Wd(e,t){let n=!0,r=null;for(let i=0;i<t.length;i++){const o=e[t[i]];if(o&&0!==o.errors.length){r=t[i],n=!1;break}}return[n,r]}function Gd(e){return{name:e.form.name??"",conditionals:qi(e.form.conditionals??{},"__typename"),elements:zd(qi(e.form.elements,"__typename")),pools:qi(e.form.pools??[],"__typename"),settings:qi(e.form.settings??{},"__typename"),structures:qi(e.form.structures??[],"__typename"),styles:qi(e.form.styles??{},"__typename")}}function qd(e,t,n=!1){const r=e.elements.find((e=>e.type===t.type));if(!r)throw new Error(`Could not find element type ${t.type} when creating default submission data value`);let i=Zi(qi(r.defaultDataValue,"__typename")),o=[];if(Wp.hasItem(t.type)){const e=Wp.getItem(t.type);n&&e.getPresetValue&&(i=e.getPresetValue(t,i)),o=e.getErrors(t,i)}return{errors:o,value:i}}function Yd(e){const t={};return e.structures.forEach((e=>{t[e.id]={id:e.id,conditionallyHidden:e.config.initiallyHidden??!1,initiallyHidden:e.config.initiallyHidden??!1}})),t}function Zd(e,t,n=!1,r){const i={},o=[];return e.structures.forEach((t=>{o.push(...Vd(t.id,e))})),o.forEach((o=>{const a=e.elements[o];i[o]=r&&r.elements[o]?r.elements[o]:{conditionallyHidden:a.appearance?.initiallyHidden||!1,id:o,type:a.type,touched:!1,...qd(t,a,n)}})),i}function Xd(e,t,n){const r=Hu(),[o,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)(!1),[u,c]=(0,i.useState)("success"),d=(0,i.useCallback)((()=>{a(!1),l(!1),c("success")}),[]),h=(0,i.useCallback)((i=>{if(!n)return void alert(bn("Cannot submit a form in preview mode.","wp-eform"));a(!0);const o=[],s=i.getState(),{elements:u,startTime:d,structures:h}=s,f=[];Object.keys(h).forEach((e=>{const n=h[e];n&&n.conditionallyHidden&&t&&f.push(...Vd(e,t))})),Object.keys(u).forEach((e=>{const t=u[e].type;Wp.hasItem(t)&&o.push({id:e,value:u[e].value,conditionallyHidden:!!f.includes(e)||u[e].conditionallyHidden})}));let p=0;co("starter")&&(p=Math.abs(Math.ceil((Date.now()-d)/1e3))),e(o,p,s.remarks).then((e=>{r.current&&(l(!0),e.errors?.length?c("error"):c("success"))})).catch((e=>{l(!0),c("networkerror")}))}),[n,e,r,t]);return{isMounted:r,submitting:o,submitted:s,submittedState:u,submit:h,reset:d}}const Qd={currentPage:"",structures:{},elements:{},formId:0,startTime:0,remarks:""};function Kd(e,t,n){const r=[];let i;return e.forEach((e=>{const o=t[e.fieldid];if(!o)return;const a=n[o.id];if(!a)return;const s=o.type;if(s&&Wp.hasItem(s)){const t=Wp.getItem(s),n=!!t.isConditionTrue&&t.isConditionTrue(e.has,e.operation,e.operator,e.value||"",o.value,a);if(void 0!==i)if(i===rt.AND){const e=r.pop()&&n;r.push(!!e)}else r.push(n);else r.push(n);i=e.relation}})),r.some((e=>!0===e))}function Jd(e,t,n,r){const i=[];return t.elements[n]&&i.push(n,...Hd(n,t)),i.length&&i.forEach((n=>{const i=t.elements[n],o=r.elements[n];if(i&&o){const{errors:t,value:n}=qd(e,i);o.value=n,o.errors=t,o.touched=!1}})),i}function eh(e,t,n,r){const i=[],o=function(e,t){const n=e.findIndex((e=>e.id===t));if(-1!==n)return[e[n],n]}(t.structures,n);return o?(o[0].children.forEach((n=>{i.push(...Jd(e,t,n,r))})),i):i}function th(e,t){let n="unknown element";return t.elements[e]&&(n=Wi(t.elements[e].appearance?.title??`element ${e}`)),n}function nh(e,t,n,r){let i=t.currentPage;return n.structures.forEach((e=>{Vd(e.id,n).includes(r)&&(i=e.id)})),e===i&&(ud.l(`%c ${function(e,t){let n="unknown page";const r=t.structures.find((t=>t.id===e));return r&&(n=Wi(r.config.title??`page ${e}`)),n}(e,n)} - ${th(r,n)} %c cannot operate conditionals on pages for current page.`,ud.style.error,ud.style.reset),!0)}function rh(e,t,n,r,i){const o=[];return e?.forEach((e=>{if(!nh(e,t,n,i)&&t.structures[e]){const i=t.structures[e].initiallyHidden;t.structures[e].conditionallyHidden=i,i&&o.push(...eh(r,n,e,t))}})),o}function ih(e,t,n,r){const i=e.elements[t],o=r.elements[t];if(i&&o){const e=qd(n,i,!0);o.value=e.value,o.errors=e.errors}}function oh(e,t,n,r){const i=[];return e?.forEach((e=>{if(t.elements[e]){const o=t.elements[e].conditionallyHidden,a=!!n.elements[e]?.appearance?.initiallyHidden;t.elements[e].conditionallyHidden=a,!0===a?Jd(r,n,e,t):o&&ih(n,e,r,t),i.push(e)}})),i}function ah(e,t,n,r,i,o=50,a=null){const{conditionals:s}=r;n[t]&&n[t].length&&n[t].forEach((l=>{const u=s.find((e=>e.id===l));if(u){const s=function(e,t,n,r,i,o){const a=[];return e.consequences.forEach((e=>{if(e.action===Ke.HIDE_FIELDS)t?function(e,t,n,r){const i=[];e?.forEach((e=>{t.elements[e]&&!1===t.elements[e].conditionallyHidden&&(t.elements[e].conditionallyHidden=!0,i.push(...Jd(r,n,e,t)))}))}(e.fieldsToHide,n,r,i):oh(e.fieldsToHide,n,r,i),e.fieldsToHide&&a.push(...e.fieldsToHide);else if(e.action===Ke.SHOW_FIELDS)t?function(e,t,n,r){const i=[];e?.forEach((e=>{if(t.elements[e]){i.push(e);const o=t.elements[e].conditionallyHidden;t.elements[e].conditionallyHidden=!1,o&&ih(n,e,r,t)}}))}(e.fieldsToShow,n,r,i):oh(e.fieldsToShow,n,r,i),e.fieldsToShow&&a.push(...e.fieldsToShow);else if(e.action===Ke.SET_VALUE_OF&&t){if(e.fieldToSet){const t=n.elements[e.fieldToSet],i=r.elements[e.fieldToSet];t&&Wp.hasItem(t.type)&&(Wp.getItem(t.type).setValue(e.value||"",i,t.value),a.push(e.fieldToSet))}}else e.action===Ke.SHOW_PAGES?t?a.push(...function(e,t,n,r){const i=[];return e?.forEach((e=>{nh(e,t,n,r)||t.structures[e]&&(t.structures[e].conditionallyHidden=!1,i.push(...Vd(e,n)))})),i}(e.pagesToShow,n,r,o)):a.push(...rh(e.pagesToShow,n,r,i,o)):e.action===Ke.HIDE_PAGES&&(t?a.push(...function(e,t,n,r,i){const o=[];return e?.forEach((e=>{nh(e,t,n,i)||t.structures[e]&&(t.structures[e].conditionallyHidden=!0,o.push(...eh(r,n,e,t)))})),o}(e.pagesToHide,n,r,i,o)):a.push(...rh(e.pagesToHide,n,r,i,o)))})),a}(u,Kd(u.events,e.elements,r.elements),e,r,i,a??t);if(s.length&&o>0)s.forEach((s=>{ah(e,s,n,r,i,o-1,a??t)}));else if(0===o){const e=th(a??t,r);ud.l(`%c ${e} %c has too many deeply nested or dependent logics. Kindly try to fix it.`,ud.style.error,ud.style.reset)}}}))}function sh(e,t){return us(e,(e=>{if("SET_DATA"===t.type)e.currentPage=t.payload.currentPage,e.elements=t.payload.elements,e.formId=t.payload.formId,e.startTime=t.payload.startTime;else if("SET_ELEMENTS_AND_STARTTIME"===t.type){const{conditionalsMap:n,elements:r,formData:i,formMeta:o,startTime:a,structures:s,fullReset:l}=t.payload;!function(e,t,n){const r=e.elements;e.elements={},Object.keys(t).forEach((i=>{n?e.elements[i]=Zi(t[i]):r[i]?e.elements[i]=r[i]:e.elements[i]=Zi(t[i])}))}(e,r,l),e.startTime=a??Date.now(),e.structures=s,e.lastTouchedElement=void 0,function(e,t,n,r){const{elements:i}=n;Object.keys(i).forEach((i=>{ah(e,i,t,n,r)}))}(e,n,i,o)}else if("SET_CURRENT_PAGE"===t.type)e.currentPage=t.payload,e.lastTouchedElement=void 0;else if("SET_ELEMENT_DATA"===t.type){const{formData:n,conditionalsMap:r,elementId:i,elementSubmissionData:o,formMeta:a}=t.payload;e.elements[i]=Zi(o),ah(e,i,r,n,a)}else if("SET_ELEMENT_TOUCHED"===t.type)e.elements[t.payload.elmId]&&(e.elements[t.payload.elmId].touched=t.payload.touched,e.lastTouchedElement=t.payload.elmId);else{if("SET_REMARKS"!==t.type)throw new Error(`ERROR: Form submission reducer does not understand the action.type ${t.type}`);e.remarks=t.payload.remarks}}))}const lh=(0,i.createContext)((()=>{throw new Error("Must be called from a StoreProvider")}));function uh(e){const[t]=(0,i.useContext)(lh);return t(e)}function ch(){const[e]=(0,i.useContext)(lh);return e((e=>e.dispatch))}function dh(){const[,e]=(0,i.useContext)(lh);return e}function hh(e){return e.elements}function fh(e){return e.startTime}function ph(e){return e.currentPage}function mh(e){return e.remarks}function gh(e){return e.structures}function vh(e){return e.lastTouchedElement}class yh extends i.Component{constructor(...e){super(...e);const{initialData:t}=this.props,{formId:n}=t,r=function(e){let t;const n=new Set,r=(e,r)=>{const i="function"==typeof e?e(t):e;if(i!==t){const e=t;t=r?i:Object.assign({},t,i),n.forEach((n=>n(t,e)))}},i=()=>t,o={setState:r,getState:i,subscribe:(e,r,o)=>r||o?((e,r=i,o=Object.is)=>{let a=r(t);function s(){const n=r(t);if(!o(a,n)){const t=a;e(a=n,t)}}return n.add(s),()=>n.delete(s)})(e,r,o):(n.add(e),()=>n.delete(e)),destroy:()=>n.clear()};return t=e(r,i,o),o}(((e,t)=>(n,r,i)=>{let o;try{o=window.__REDUX_DEVTOOLS_EXTENSION__||window.top.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!o)return i.devtools=null,e(n,r,i);const a=e(((e,t,o)=>{n(e,t),i.dispatch||i.devtools.send(i.devtools.prefix+(o||"action"),r())}),r,i);if(!i.devtools){const e=i.setState;i.setState=(t,n)=>{e(t,n),i.devtools.send(i.devtools.prefix+"setState",i.getState())},i.devtools=o.connect({name:t}),i.devtools.prefix=t?`${t} > `:"",i.devtools.subscribe((t=>{var n,r,o,a;if("DISPATCH"===t.type&&t.state){const n="JUMP_TO_ACTION"===t.payload.type||"JUMP_TO_STATE"===t.payload.type;i.dispatch||n?e(JSON.parse(t.state)):i.setState(JSON.parse(t.state))}else if("DISPATCH"===t.type&&"COMMIT"===(null==(n=t.payload)?void 0:n.type))i.devtools.init(i.getState());else if("DISPATCH"===t.type&&"IMPORT_STATE"===(null==(r=t.payload)?void 0:r.type)){const n=null==(o=t.payload.nextLiftedState)?void 0:o.actionsById;((null==(a=t.payload.nextLiftedState)?void 0:a.computedStates)||[]).forEach((({state:t},r)=>{const o=n[r]||i.devtools.prefix+"setState";0===r?i.devtools.init(t):(e(t),i.devtools.send(o,i.getState()))}))}})),i.devtools.init(a)}return a})((a=sh,s=t,(e,t,n)=>(n.dispatch=r=>(e((e=>a(e,r))),n.devtools&&n.devtools.send(n.devtools.prefix+r.type,t()),r),((e,t)=>{for(var n in t||(t={}))Nd.call(t,n)&&$d(e,n,t[n]);if(Id)for(var n of Id(t))jd.call(t,n)&&$d(e,n,t[n]);return e})({dispatch:n.dispatch},s))),`WPEFormSubmission-${n}`)),i=(o=r,console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),(e=>e?y(e):y)(o));var o,a,s;this.state={storeContextValue:[i,r]}}render(){const{children:e}=this.props;return(0,r.jsx)(lh.Provider,Object.assign({value:this.state.storeContextValue},{children:e}),void 0)}}const bh=i.memo((function(e){const{elmId:t,overrideRender:n,presentation:o="regular"}=e,a=function(){const[,e]=(0,i.useState)(Object.create(null));return(0,i.useCallback)((()=>{e(Object.create(null))}),[e])}();(0,i.useEffect)((()=>{const e=Wp.subscribeToChanges(a);return()=>{Wp.unsubscribeFromChanges(e)}}),[a]);let s=e.hasGutter??!0;const l=Ed(),u=kd(),c=l.elements[t],d=c.type,h=uh((0,i.useCallback)((e=>e.elements[t]),[t])),f=Fd(),p=Vu(),m=(0,i.useContext)(Dd),g=ch(),v=(0,i.useCallback)((e=>{if(!Wp.hasItem(d))return;const n=Wp.getItem(d);g({type:"SET_ELEMENT_DATA",payload:{elementId:t,elementSubmissionData:{...e,errors:n.getErrors(c,e.value)},conditionalsMap:f,formData:l,formMeta:u}})}),[d,g,t,c,f,l,u]),y=(0,i.useCallback)(((e=!0)=>{g({type:"SET_ELEMENT_TOUCHED",payload:{elmId:t,touched:e}})}),[t,g]),b=_m(c.appearance?.title),x=_m(c.appearance?.subtitle),w=_m(c.appearance?.description),_=_m(c.appearance?.hint),S=(0,i.useContext)(Ad),E=(0,i.useRef)(null);(0,i.useLayoutEffect)((()=>{if(S===t&&E.current){const e=E.current;Fc(e,{verticalOffset:void 0!==l.styles?.pagination?.scrollOffset?-1*l.styles.pagination.scrollOffset:-100,cancelOnUserAction:!0,elementToScroll:ld(E.current)[0]}).then((()=>{e?.focus()}))}}),[S,t,l.styles?.pagination?.scrollOffset]);const C=(0,i.useMemo)((()=>h&&!1===h.conditionallyHidden&&(h.touched||m)?h.errors:[]),[h,m]),k=Td();if(!c)return(0,r.jsx)("p",{children:Kt(bn("ERROR: The element with id %s does not exist","wp-eform"),t)},void 0);if(!h)return null;let M=null;const T=b?(0,r.jsx)(xm,{nodes:b,currentElementId:c.id},void 0):null;let D=!1;if(Wp.hasItem(d)){const e=Wp.getItem(d);D=e.isRequired(c),s=!0!==e.noGutter&&s;const i=c.appearance?.overrideControlAppearance?c.appearance.controlLayout:l.styles?.appearance?.controlLayout??Tt.VERTICAL,a=c.appearance?.overrideControlAppearance?c.appearance.controlType:l.styles?.appearance?.controlType??Dt.BOXY,u=c.appearance?.overrideControlAppearance?c.appearance.controlAlignment:l.styles?.appearance?.controlAlignment??Mt.LEFT,f=co(e.neededPlan)?(0,r.jsx)(e.FormUi,{elmId:t,id:p,elementData:c,elementTitle:T,controlType:a,controlLayout:i,controlAlignment:u,hasError:!!C.length,submissionData:h,updateSubmissionData:v,setElementTouched:y,presentation:o},void 0):(0,r.jsx)(xd,Object.assign({dismissable:!1,title:bn("This element is no longer accessible.","wp-eform"),type:"error"},{children:(0,r.jsx)("p",{children:Kt(bn("You do not have an active license for the %1$s plan. Once the license is active, this element will show up again.","wp-eform"),uo[e.neededPlan??"starter"])},void 0)}),void 0);M=e.isQuestion?(0,r.jsx)(od,Object.assign({title:e.isQuestionTitleHidden||n?void 0:T,subtitle:x&&!n?(0,r.jsx)(xm,{nodes:x,currentElementId:c.id},void 0):void 0,description:w?(0,r.jsx)(xm,{currentElementId:c.id,nodes:w,mode:"multiline"},void 0):void 0,hintLabel:c.appearance?.hintLabel||"Show Hint",hintIcon:c.appearance?.hintIcon||void 0,hintMessage:_?(0,r.jsx)(xm,{mode:"multiline",nodes:_,currentElementId:c.id},void 0):void 0,alignment:u,layout:i,asterisk:D,id:p,className:c.appearance?.className,errors:C},{children:f}),void 0):f}else M=(0,r.jsxs)("div",{children:["Element with Id ",t," and type ",c.type," does not have an UI."]},void 0);const A=S===t&&h.errors.length>=1?0:void 0;n&&(M=n(T,M,D,{ref:E,tabIndex:A}));const P=(0,r.jsx)(wd,Object.assign({fallback:(e,t)=>(0,r.jsx)(xd,Object.assign({title:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("strong",{children:bn("ERROR: ","wp-eform")},void 0),T]},void 0),type:"warn",onDismiss:e,dismissable:!0},{children:t&&t.message?t.message:bn("You can try and dismiss this to see if it works.","wp-eform")}),void 0)},{children:(0,r.jsx)(Lc,Object.assign({visible:!h.conditionallyHidden,mode:"preview"!==k?"live":"preview"},{children:(0,r.jsx)(Uc,Object.assign({mode:"preview"!==k?"live":"preview"},{children:s&&!n?(0,r.jsx)($o.Gutter,{children:M},void 0):M}),void 0)}),void 0)}),void 0);return n?P:(0,r.jsx)($o.Item,Object.assign({columnSize:c.appearance?.columnSize??Lt.FULL,basicWidth:c.appearance?.basicWidth||"100%",widths:c.appearance?.widths||[],ref:E,tabIndex:A},{children:P}),void 0)}));function xh(e){const{elements:t,emptyMessage:n}=e;return(0,r.jsx)($o,{children:t.length?t.map((e=>(0,r.jsx)(bh,{elmId:e},e))):(0,r.jsx)($o.Item,Object.assign({columnSize:Lt.FULL,basicWidth:"100%",widths:[]},{children:(0,r.jsx)(Cc,Object.assign({icon:(0,r.jsx)(Bl,{iconClass:"fas fa-envelope-open"},void 0)},{children:n}),void 0)}),void 0)},void 0)}bh.displayName="withMemo(Element)";const wh="wpeform-component-group",_h=Oe(wh,"body"),Sh=o.iv`
	content: '';
	display: block;
	width: 50px;
	height: ${e=>Fe(e.theme.borderRadiusBase)};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	background-color: ${e=>e.theme.borderColorSplit};
	position: absolute;
`,Eh=o.ZP.h3`
	padding: 0 ${e=>Fe(.75*e.theme.gutter*2)}
		${e=>Fe(.25*e.theme.gutter)};
	${e=>Fe(.75*e.theme.gutter*2)};
	margin: 0;
	color: ${e=>e.theme.headingColor};
	font-size: ${e=>Fe(e.theme.fz.large1)};
	font-weight: ${e=>e.theme.boldHeading?"bold":"normal"};
	&:empty {
		display: none;
	}
	position: relative;
	&::after {
		${Sh};
		bottom: ${e=>Fe(-1*e.theme.borderRadiusBase)};
		left: ${e=>Fe(.75*e.theme.gutter*2)};
	}
`,Ch=o.ZP.div`
	&.${_h}--has-title {
		position: relative;
		&::after {
			${Sh};
			bottom: ${e=>Fe(-1*e.theme.borderRadiusBase)};
			left: ${e=>Fe(.75*e.theme.gutter*2)};
		}
	}
`,kh=o.ZP.div`
	${Ie};
	&.${wh}--align-RIGHT {
		${Ch}::after,
		${Eh}::after {
			left: auto;
			right: ${e=>Fe(.75*e.theme.gutter*2)};
		}
		${Eh} {
			text-align: right;
		}
	}
	&.${wh}--align-CENTER {
		${Ch}::after,
		${Eh}::after {
			left: 50%;
			transform: translateX(-50%);
		}
		${Eh} {
			text-align: center;
		}
	}
`,Mh={id:"group",hasSubmission:!1,FormUi:({elementTitle:e,elementData:t,controlAlignment:n})=>(0,r.jsx)($o.NegateGutter,Object.assign({vertical:!e},{children:(0,r.jsxs)(kh,Object.assign({className:Pe(wh,{"has-title":!!e,[`align-${n}`]:!0},t.appearance?.className)},{children:[e?(0,r.jsx)(Eh,{children:e},void 0):null,(0,r.jsx)(Ch,Object.assign({className:Pe(_h,{"has-title":!!e})},{children:(0,r.jsx)(xh,{emptyMessage:bn("This group element is empty","wp-eform"),elements:t.children},void 0)}),void 0)]}),void 0)}),void 0),getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){}};function Th(){return Th=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Th.apply(this,arguments)}var Dh="undefined"!=typeof document?i.useLayoutEffect:i.useEffect,Ah=function(e,t){"function"!=typeof e?e.current=t:e(t)},Ph={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},Oh=function(e){Object.keys(Ph).forEach((function(t){e.style.setProperty(t,Ph[t],"important")}))},Rh=null,Fh=function(){},Lh=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Ih="undefined"!=typeof document&&!!document.documentElement.currentStyle,Nh=function(e,t){var n=e.cacheMeasurements,r=e.maxRows,o=e.minRows,a=e.onChange,s=void 0===a?Fh:a,l=e.onHeightChange,u=void 0===l?Fh:l,c=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),d=void 0!==c.value,h=(0,i.useRef)(null),f=function(e,t){var n=(0,i.useRef)();return(0,i.useCallback)((function(r){e.current=r,n.current&&Ah(n.current,null),n.current=t,t&&Ah(t,r)}),[t])}(h,t),p=(0,i.useRef)(0),m=(0,i.useRef)(),g=function(){var e=h.current,t=n&&m.current?m.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=function(e,t){return e.reduce((function(e,n){return e[n]=t[n],e}),{})}(Lh,t),r=n.boxSizing;return""===r?null:(Ih&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px"),{sizingStyle:n,paddingSize:parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),borderSize:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth)})}(e);if(t){m.current=t;var i=function(e,t,n,r){void 0===n&&(n=1),void 0===r&&(r=1/0),Rh||((Rh=document.createElement("textarea")).setAttribute("tabindex","-1"),Rh.setAttribute("aria-hidden","true"),Oh(Rh)),null===Rh.parentNode&&document.body.appendChild(Rh);var i=e.paddingSize,o=e.borderSize,a=e.sizingStyle,s=a.boxSizing;Object.keys(a).forEach((function(e){var t=e;Rh.style[t]=a[t]})),Oh(Rh),Rh.value=t;var l=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize}(Rh,e);Rh.value="x";var u=Rh.scrollHeight-i,c=u*n;"border-box"===s&&(c=c+i+o),l=Math.max(c,l);var d=u*r;return"border-box"===s&&(d=d+i+o),[l=Math.min(d,l),u]}(t,e.value||e.placeholder||"x",o,r),a=i[0],s=i[1];p.current!==a&&(p.current=a,e.style.setProperty("height",a+"px","important"),u(a,{rowHeight:s}))}};return"undefined"!=typeof document&&((0,i.useLayoutEffect)(g),function(e){var t,n,r=(t=e,n=(0,i.useRef)(t),Dh((function(){n.current=t})),n);(0,i.useLayoutEffect)((function(){var e=function(e){r.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])}(g)),(0,i.createElement)("textarea",Th({},c,{onChange:function(e){d||g(),s(e)},ref:f}))},jh=(0,i.forwardRef)(Nh);const $h="wpeform-control-textarea",zh=o.ZP.div`
	position: absolute;
	height: 2px;
	bottom: 0;
	left: 0;
	right: 0;
	transform-origin: 50% 50%;
	background-color: ${e=>e.theme.primaryColor};
	pointer-events: none;
	transform: scaleX(0);
	transition: ${e=>Le(["transform"],e.theme.transitionBeizer)};
`,Bh=(0,o.ZP)(jh)`
	${Ie};
	appearance: none;
	overflow: auto;
	vertical-align: top;
	resize: vertical;
	display: block;
	width: 100%;
	height: ${e=>Fe(e.theme.controlHeightBase)};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	font-size: ${e=>Fe(e.theme.fz.base)};
	box-shadow: 0 0 0 0 transparent;
	color: ${e=>e.theme.textColor};
	padding: ${e=>Fe(e.theme.controlHeightBase/4)};
	border: 1px solid ${e=>e.theme.borderColorBase};
	background-color: ${e=>e.theme.appBackgroundColor};
	box-shadow: ${e=>e.theme.boxShadowNoneFocus};
	transition: ${e=>Le(["border-color","box-shadow"],e.theme.transitionControl)};

	&:hover {
		color: ${e=>e.theme.textColor};
		border-color: ${e=>e.theme.primaryColor};
	}

	&:active,
	&:focus {
		color: ${e=>e.theme.textColor};
		border-color: ${e=>e.theme.primaryColor};
		box-shadow: ${e=>e.theme.boxShadowControlFocus};
	}

	&::placeholder {
		color: ${e=>e.theme.textColorSecondary};
	}

	&.${$h}__textarea--has-error {
		border-color: ${e=>e.theme.borderColorError};

		&:hover {
			border-color: ${e=>e.theme.borderColorError};
		}

		&:active,
		&:focus {
			border-color: ${e=>e.theme.borderColorError};
			box-shadow: ${e=>e.theme.boxShadowControlFocusError};
		}
	}

	&:disabled {
		background-color: ${e=>e.theme.disabledBackgroundColor};
		color: ${e=>e.theme.disabledColor};
		border-color: ${e=>e.theme.disabledColor};
		cursor: not-allowed;
		box-shadow: none;
	}

	&:read-only {
		background-color: ${e=>e.theme.disabledBackgroundColor};
		border-color: ${e=>e.theme.disabledColor};
		box-shadow: none;
	}

	&.${$h}__textarea--type-MATERIAL {
		border: 0 none;
		border-bottom: 2px solid ${e=>e.theme.borderColorBase};
		border-radius: ${e=>Fe(e.theme.borderRadiusBase)}
			${e=>Fe(e.theme.borderRadiusBase)} 0 0;
		box-shadow: none;
		background-color: ${e=>e.theme.backgroundControl};
		transition: ${e=>Le(["background-color"],e.theme.transitionControl)};

		&:hover {
			border-color: ${e=>e.theme.borderColorBase};
		}

		&:active,
		&:focus {
			background-color: ${e=>Ae(.5,e.theme.backgroundControl)};
			border-color: ${e=>e.theme.borderColorBase};
			box-shadow: none;
		}

		&:hover
			+ ${zh},
			&:active
			+ ${zh},
			&:focus
			+ ${zh} {
			transform: scaleX(1);
		}

		&.${$h}__textarea--has-error {
			border-bottom-color: ${e=>e.theme.borderColorError};

			&:hover {
				border-bottom-color: ${e=>e.theme.borderColorError};
			}

			&:active,
			&:focus {
				border-bottom-color: ${e=>e.theme.borderColorError};
			}

			+ ${zh} {
				background-color: ${e=>e.theme.borderColorError};
			}
		}

		&:disabled {
			background-color: ${e=>e.theme.disabledBackgroundColor};
			color: ${e=>e.theme.disabledColor};
			border-color: ${e=>e.theme.disabledColor};
			cursor: not-allowed;
			+ ${zh} {
				transform: scaleX(0);
				background-color: ${e=>e.theme.disabledColor};
			}
		}

		&:read-only {
			background-color: ${e=>e.theme.disabledBackgroundColor};
			border-color: ${e=>e.theme.disabledColor};
			+ ${zh} {
				transform: scaleX(0);
				background-color: ${e=>e.theme.disabledColor};
			}
		}
	}
`,Uh=o.ZP.div`
	position: absolute;
	display: flex;
	align-items: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	height: ${e=>Fe(e.theme.controlHeightBase/2)};
	/** So that we can click through it to the textarea */
	pointer-events: none;
	font-size: ${e=>Fe(e.theme.fz.base)};

	color: ${e=>e.theme.textColorSecondary};
	transition: ${e=>Le(["top","left","font-size"],e.theme.transitionControl)};

	> * {
		margin: 0;
		padding: 0;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`,Hh=o.ZP.div`
	position: absolute;
	top: ${e=>Fe(e.theme.controlHeightBase/4+.25*e.theme.fz.base)};
	padding: 0;
	left: ${e=>Fe(e.theme.controlHeightBase/4)};
	bottom: 0;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	/** So that we can click through it to the textarea */
	pointer-events: none;
	color: ${e=>e.theme.greyLightColor};
`,Vh=o.ZP.div`
	${Ie};
	position: relative;
	padding: 0;

	/** Position the default placeholder */
	${Uh} {
		top: ${e=>Fe(e.theme.controlHeightBase/4+.15*e.theme.fz.base)};
		left: ${e=>Fe(e.theme.controlHeightBase/4)};
		right: ${e=>Fe(e.theme.controlHeightBase/4)};
	}
	&.${$h}--align-LEFT {
		${Uh} {
			text-align: left;
			justify-content: flex-start;
		}
	}
	&.${$h}--align-CENTER {
		${Uh} {
			text-align: center;
			justify-content: center;
		}
	}
	&.${$h}--align-RIGHT {
		${Uh} {
			text-align: right;
			justify-content: flex-end;
		}
	}

	&.${$h}--has-prefix {
		${Bh} {
			/** [gutter + prefix + gutter] where gutter is controlHeightBase / 4 & prefix is fz.base */
			padding-left: ${e=>Fe(e.theme.fz.base+e.theme.controlHeightBase/4*2)};
		}
		${Uh} {
			left: ${e=>Fe(e.theme.fz.base+e.theme.controlHeightBase/4*2)};
		}
	}

	&.${$h}--has-error {
		${Hh} {
			color: ${e=>e.theme.errorColor};
		}
	}

	/** Changes when focused */
	&.${$h}--is-focused, &.${$h}--is-not-empty {
		${Uh} {
			top: ${e=>Fe(e.theme.controlHeightBase/2*-1)};
			left: 0;
			font-size: ${e=>Fe(e.theme.fz.small1)};
		}
	}
`;function Wh(e){const{id:t,onChange:n,onBlur:o,value:a,prefix:s,placeholder:l,controlType:u=Dt.BOXY,controlAlignment:c=Mt.LEFT,disabled:d=!1,readOnly:h=!1,hasError:f=!1,minRows:p=4,maxRows:m=10,className:g,...v}=e,[y,b]=(0,i.useState)(!1),[x,w]=(0,i.useState)(a),_=ds(((e,t)=>{t(e)}),300),S=(0,i.useCallback)((e=>{const t=e.target.value;w(t),_(t,n)}),[_,n]);(0,i.useEffect)((()=>{w(a)}),[a]);const E=Pe($h,{"has-prefix":!!s,"is-not-empty":""!==a,"is-focused":y,"has-error":f,[`type-${u}`]:!0,[`align-${c}`]:!0},g);return(0,r.jsxs)(Vh,Object.assign({className:E},{children:[s?(0,r.jsx)(Hh,{children:s},void 0):null,"string"!=typeof l?(0,r.jsx)(Uh,{children:l},void 0):null,(0,r.jsx)(Bh,Object.assign({minRows:p,maxRows:m,id:t,className:Pe(Oe($h,"textarea"),{[`type-${u}`]:!0,"has-error":f}),value:x,onChange:S,onFocus:()=>{b(!0)},onBlur:e=>{b(!1),_.cancel(),n(x),o?.(e)},placeholder:"string"==typeof l?l:void 0,disabled:d,readOnly:h},v),void 0),u===Dt.MATERIAL?(0,r.jsx)(zh,{},void 0):null]}),void 0)}const Gh={id:"textarea",hasSubmission:!0,FormUi({id:e,elementData:t,submissionData:n,updateSubmissionData:o,setElementTouched:a,controlType:s,controlLayout:l,controlAlignment:u,elementTitle:c,hasError:d=!1}){const h=n.value.textarea?.input??"",f=(0,i.useCallback)((e=>{const t=us(n,(t=>{t.value.textarea.input=e}));o(t)}),[o,n]);return(0,r.jsx)(Wh,{id:e,controlType:s,controlAlignment:u,onChange:f,value:h,onBlur:()=>{a(!0)},hasError:d,placeholder:l!==Tt.INLINE?t.config.textarea?.interface?.placeholder||"":c,prefix:t.config.textarea?.interface?.icon?(0,r.jsx)(Bl,{iconClass:t.config.textarea.interface.icon},void 0):void 0,readOnly:t.config.textarea?.attributes.readonly},void 0)},isQuestion:!0,isRequired:e=>!!e.config.textarea?.validation?.required,getErrors(e,t){const n=[],r=!!e.config.textarea?.validation?.required,i=""===t.textarea?.input||null===t.textarea?.input;r&&i&&n.push(lu.requiredInput);const o=t.textarea?.input||"",a=e.config.textarea?.validation?.filters;return a&&[Ft.ALL,Ft.NOLETTER,Ft.NONUMBER].includes(a.type)&&(a.type===Ft.NOLETTER?n.push(...fa(o).not().matches(/[A-Za-z]/m,lu.inputNoLetter).hasErrors()):a.type===Ft.NONUMBER&&n.push(...fa(o).not().matches(/[0-9]/m,lu.inputNoNumber).hasErrors()),a.minString&&(r||!r&&!i)&&n.push(...fa(o).hasMinLength(a.minString,Kt(lu.minStringInput,a.minString,o.length)).hasErrors()),a.maxString&&(r||!r&&!i)&&n.push(...fa(o).hasMaxLength(a.maxString,Kt(lu.maxStringInput,a.maxString,o.length)).hasErrors())),n},setValue(e,t,n){n.textarea.input=e},isConditionTrue(e,t,n,r,i){let o;const a=i.textarea.input.length;if(e===tt.LENGTH){const e=Cl(r);o=n===et.GREATER_THAN?a>e:n===et.LESS_THAN?a<e:a===e}else{const e=i.textarea.input;if(n===et.CONTAINS)o=new RegExp(r,"gi").test(e);else if(n===et.ENDS_WITH)o=new RegExp(`${r}$`,"gi").test(e);else if(n===et.EQUALS_TO)o=r.toLowerCase()===e.toLowerCase();else if(n===et.GREATER_THAN){const t=Sl(r);o=Sl(e)>t}else if(n===et.LESS_THAN){const t=Sl(r);o=Sl(e)<t}else o=new RegExp(`^${r}`,"gi").test(e)}return t===nt.IS?o:!o},getDisplayValue:(e,t)=>t.textarea?.input,getNumericValue:(e,t)=>Dl(t.textarea?.input),getAnswerValue:(e,t)=>(0,r.jsx)(su.UserInput,{children:t.textarea?.input??null},void 0),getPresetValue:(e,t)=>us(t,(t=>{if(io(e.config.textarea?.attributes.defaultValue)||(t.textarea.input=e.config.textarea.attributes.defaultValue),e.config.textarea?.attributes.prefilType===xt.URL){const n=Ji(window.location.search,e.config.textarea.attributes.prefilParameter);n&&"string"==typeof n&&(t.textarea.input=n)}if(e.config.textarea?.attributes.prefilType===xt.META){const n=no(e.extras);n&&n.metaValue&&"string"==typeof n.metaValue&&(t.textarea.input=n.metaValue)}}))},qh={id:"row",hasSubmission:!1,FormUi:({elementData:e})=>(0,r.jsx)($o.NegateGutter,Object.assign({vertical:!0,className:e.appearance?.className},{children:(0,r.jsx)(xh,{emptyMessage:bn("This row element is empty","wp-eform"),elements:e.children},void 0)}),void 0),getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){}},Yh={id:"column",hasSubmission:!1,FormUi:({elementData:e})=>(0,r.jsx)($o.NegateGutter,Object.assign({vertical:!0,className:e.appearance?.className},{children:(0,r.jsx)(xh,{emptyMessage:bn("This column element is empty","wp-eform"),elements:e.children},void 0)}),void 0),getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){}},Zh="wpeform-component-heading",Xh=o.ZP.p`
	${Ie};
	color: ${e=>e.theme.headingColor};
	line-height: 1.2;
	font-weight: ${e=>e.theme.boldHeading?"bold":"normal"};
`,Qh=o.ZP.p`
	${Ie};
	font-size: 0.6em;
	color: ${e=>e.theme.textColorSecondary};
	font-style: ${e=>e.theme.italicHeading?"italic":"normal"};
	line-height: 1.2;
	margin: 0.5em 0 0 0;
`,Kh=o.ZP.div`
	position: relative;
`,Jh=o.ZP.span`
	display: inline-block;
	margin: 0 0 0.25em 0;
	font-size: 2em;
`,ef=o.ZP.div`
	${Ie};
	display: inline-block;
	margin: 0.5em 0 0 0;
	height: ${e=>Fe(e.theme.borderRadiusBase)};
	background-color: ${e=>e.theme.headingColor};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	width: 30%;
	min-width: 100px;
	max-width: 200px;
`,tf=o.ZP.button`
	${Ie};
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: center;
	top: 0;
	right: ${e=>Fe(-1*e.theme.gutter)};
	border: 0 none;
	outline: none;
	cursor: pointer;
	font-size: ${e=>Fe(e.theme.gutter)};
	background-color: transparent;
	color: ${e=>e.theme.textColorSecondary};
	transition: ${e=>Le(["color"],e.theme.transitionControl)};
	&:hover,
	&:focus,
	&:active {
		color: ${e=>e.theme.primaryColor};
	}
`,nf=o.ZP.div`
	${Ie};
	font-size: ${e=>Fe(e.theme.fz.base)};
	line-height: 1.2;
	position: relative;

	/** Size */
	&.${Zh}--size-SIZE1 {
		font-size: ${e=>Fe(e.theme.fz.large7)};
		${tf} {
			height: ${e=>Fe(1.2*e.theme.fz.large7)};
		}
	}
	&.${Zh}--size-SIZE2 {
		font-size: ${e=>Fe(e.theme.fz.large5)};
		${tf} {
			height: ${e=>Fe(1.2*e.theme.fz.large5)};
		}
	}
	&.${Zh}--size-SIZE3 {
		font-size: ${e=>Fe(e.theme.fz.large3)};
		${tf} {
			height: ${e=>Fe(1.2*e.theme.fz.large3)};
		}
	}
	&.${Zh}--size-SIZE4 {
		font-size: ${e=>Fe(e.theme.fz.large1)};
		${tf} {
			height: ${e=>Fe(1.2*e.theme.fz.large1)};
		}
	}
	&.${Zh}--size-SIZE5 {
		font-size: ${e=>Fe(e.theme.fz.small1)};
		${tf} {
			height: ${e=>Fe(1.2*e.theme.fz.small1)};
		}
	}
	&.${Zh}--size-SIZE6 {
		font-size: ${e=>Fe(e.theme.fz.small2)};
		${tf} {
			height: ${e=>Fe(1.2*e.theme.fz.small2)};
		}
	}

	/** Align */
	&.${Zh}--alignment-LEFT {
		text-align: left;
	}
	&.${Zh}--alignment-RIGHT {
		text-align: right;
		${tf} {
			right: auto;
			left: ${e=>Fe(-1*e.theme.gutter)};
		}
	}
	&.${Zh}--alignment-CENTER {
		text-align: center;
	}
	&.${Zh}--alignment-JUSTIFY {
		text-align: justify;
	}
`,rf=o.ZP.article`
	margin: ${e=>Fe(e.theme.gutter)} 0 0 0;
	${ef} {
		margin: ${e=>Fe(e.theme.gutter)} 0 0 0;
	}
`;function of(e){return e===mt.H1?"h1":e===mt.H2?"h2":e===mt.H3?"h3":e===mt.H4?"h4":e===mt.H5?"h5":e===mt.H6?"h6":"p"}function af(e){const{icon:t,size:n,tag:i,showTop:o=!1,divider:a=!1,alignment:s,scrollToElement:l,scrollOffset:u=-100,scrollLabel:c,title:d,subtitle:h,className:f,children:p}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(nf,Object.assign({className:Pe(Zh,{[`size-${n}`]:!0,showTop:o,divider:a,[`alignment-${s}`]:!0,hasIcon:!!t,hasShowTop:o},f)},{children:[t?(0,r.jsx)(Jh,{children:(0,r.jsx)(Bl,{iconClass:t},void 0)},void 0):null,(0,r.jsxs)(Kh,{children:[(0,r.jsx)(Xh,Object.assign({as:of(i)},{children:d}),void 0),h?(0,r.jsx)(Qh,{children:h},void 0):null,o?(0,r.jsx)(tf,Object.assign({onClick:e=>{e.preventDefault(),Fc(l,{verticalOffset:u,elementToScroll:ld(l)[0]})}},{children:(0,r.jsx)(Bl,{iconClass:"fas fa-angle-up","aria-label":c},void 0)}),void 0):null]},void 0),a?(0,r.jsx)(ef,{},void 0):null]}),void 0),p?(0,r.jsxs)(rf,{children:[p,(0,r.jsx)(ef,{},void 0)]},void 0):null]},void 0)}const sf={id:"heading",hasSubmission:!1,FormUi({elementData:e,controlAlignment:t}){const n=_m(e.appearance?.title),o=_m(e.appearance?.subtitle),a=Ed(),s=(0,i.useContext)($t),l=_m(e.appearance?.description);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(af,Object.assign({title:n?(0,r.jsx)(xm,{mode:"singleline",nodes:n,currentElementId:e.id},void 0):"",subtitle:o?(0,r.jsx)(xm,{mode:"singleline",nodes:o,currentElementId:e.id},void 0):void 0,alignment:t,divider:e.config.heading?.interface?.divider,scrollLabel:bn("Scroll to top","wp-eform"),scrollToElement:s.current??document.body,showTop:e.config.heading?.interface?.showTop,size:e.config.heading?.interface?.size??pt.SIZE3,className:e.appearance?.className,tag:e.config.heading?.interface?.tag??mt.P,icon:e.config.heading?.interface?.icon,scrollOffset:void 0!==a.styles?.pagination?.scrollOffset?-1*a.styles.pagination.scrollOffset:-100},{children:l?(0,r.jsx)(xm,{mode:"multiline",currentElementId:e.id,nodes:l},void 0):null}),void 0)},void 0)},getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){}},lf="wpeform-control-checkbox",uf=o.ZP.div`
	${Ie};
	height: ${e=>Fe(Ue(.7*e.theme.controlHeightBase))};
	width: ${e=>Fe(Ue(.7*e.theme.controlHeightBase))};
	flex: 0 0
		${e=>Fe(Ue(.7*e.theme.controlHeightBase))};
	border: 1px solid ${e=>e.theme.borderColorBase};
	box-shadow: ${e=>e.theme.boxShadowNoneFocus};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	margin: 0;
	background-color: ${e=>e.theme.appBackgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: ${e=>Le(["box-shadow","border-color","background-color"],e.theme.transitionControl)};
	position: relative;

	&::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 1;
		transform: scale(0.75);
		transform-origin: center;
		border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
		background-color: 'transparent';
	}
`,cf=o.ZP.div`
	width: 100%;
	height: 100%;
	color: ${e=>e.theme.primaryBgText};
	font-size: ${e=>Fe(Ue(.35*e.theme.controlHeightBase))};
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: ${e=>Le(["opacity"],e.theme.transitionControl)};
`,df=o.ZP.div`
	user-select: none;
	color: ${e=>e.theme.textColorSecondary};
	flex: 0 0
		calc(
			100% -
				${e=>Fe(Ue(.7*e.theme.controlHeightBase)+.25*e.theme.controlHeightBase)}
		);
	width: calc(
		100% -
			${e=>Fe(Ue(.7*e.theme.controlHeightBase)+.25*e.theme.controlHeightBase)}
	);
	line-height: ${e=>Fe(Ue(.7*e.theme.controlHeightBase))};
	transition: ${e=>Le(["color"],e.theme.transitionControl)};
`,hf=o.ZP.label`
	${Ie};
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	max-width: 100%;
	width: auto;
	font-size: ${e=>Fe(e.theme.fz.base)};
	cursor: pointer;
	position: relative;

	&.${lf}--is-disabled {
		cursor: not-allowed;
	}

	&.${lf}--has-text {
		display: flex;
		width: 100%;
		${uf} {
			margin: 0 ${e=>Fe(.25*e.theme.controlHeightBase)} 0
				0;
		}
	}

	input[type='checkbox'] {
		position: absolute;
		left: 0;
		top: 0;
		height: 0;
		width: 0;
		opacity: 0;

		&:hover {
			+ ${uf} {
				border-color: ${e=>e.theme.primaryColor};
			}
			~ ${df} {
				color: ${e=>e.theme.textColor};
			}
		}

		&:focus,
		&:active {
			+ ${uf} {
				border-color: ${e=>e.theme.primaryColor};
				box-shadow: ${e=>e.theme.boxShadowControlFocus};
			}
		}

		&:checked {
			~ ${df} {
				color: ${e=>e.theme.textColor};
			}
			+ ${uf} {
				background-color: ${e=>e.theme.primaryColor};
				border-color: ${e=>e.theme.primaryColor};
				> ${cf} {
					opacity: 1;
				}
				&::before {
					transform: scale(1.7);
					opacity: 0;
					background-color: ${e=>e.theme.primaryColor};
					transition: ${e=>Le(["transform","opacity","background-color"],e.theme.transitionControl)};
				}
			}
		}

		&:disabled {
			~ ${df} {
				color: ${e=>e.theme.disabledColor};
			}

			+ ${uf} {
				border-color: ${e=>e.theme.disabledColor};
				box-shadow: none;
			}

			&:checked {
				+ ${uf} {
					background-color: ${e=>e.theme.disabledColor};
					border-color: ${e=>e.theme.disabledColor};
				}
			}
		}
	}
`;function ff(e){const{text:t,checked:n,onChange:i,onBlur:o,icon:a="fas fa-check",id:s,className:l,disabled:u,ariaLabel:c,ariaLabelledby:d,...h}=e,f=Pe(lf,{"is-checked":!!n,"has-text":!!t,"is-disabled":!!u},l);return(0,r.jsxs)(hf,Object.assign({htmlFor:s,className:f},{children:[(0,r.jsx)("input",Object.assign({type:"checkbox",checked:n,onChange:e=>{i(e.target.checked)},id:s,"aria-labelledby":d,"aria-label":c,disabled:u},h,{onBlur:e=>{o&&o(e)}}),void 0),(0,r.jsx)(uf,{children:(0,r.jsx)(cf,{children:(0,r.jsx)(Bl,{iconClass:a},void 0)},void 0)},void 0),t?(0,r.jsx)(df,{children:t},void 0):null]}),void 0)}function pf(e,t,n){let r;const i=Cl(e);return r=n===et.GREATER_THAN?t>i:n===et.LESS_THAN?t<i:t===i,r}function mf(e,t){return e===nt.IS?t:!t}function gf(e){const{id:t,elementData:n,submissionData:o,updateSubmissionData:a}=e,s=o.value.checkbox?.other??"",l=(0,i.useCallback)((e=>{a(us(o,(t=>{t.value.checkbox.other=e})))}),[o,a]),u=!!o.value.checkbox?.selected.includes(n.config.checkbox?.interface?.othersId),c=_m(n.config.checkbox?.interface?.othersPlaceholder);return(0,r.jsx)(wc,Object.assign({visible:u},{children:(0,r.jsx)(jl,{id:`other-${t}`,value:s,onChange:l,prefix:(0,r.jsx)(Bl,{iconClass:"fas fa-pen-nib"},void 0),hasError:u&&n.config.checkbox?.validation?.required&&""===s,placeholder:c?(0,r.jsx)(xm,{nodes:c,currentElementId:n.id},void 0):bn("enter your choice here","wp-eform")},void 0)}),void 0)}const vf={id:"checkbox",hasSubmission:!0,FormUi({elementData:e,id:t,setElementTouched:n,submissionData:o,updateSubmissionData:a,controlAlignment:s}){const l=e.config.checkbox?.interface?.others,u=(0,i.useMemo)((()=>{const t=[...e.config.checkbox?.interface?.options??[]];return e.config.checkbox?.interface?.shuffle&&Sn(t),t}),[e.config.checkbox?.interface?.options,e.config.checkbox?.interface?.shuffle]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Rm,Object.assign({columns:e.config.checkbox?.interface?.columns||yt.AUTO,controlAlignment:s},{children:u.map((i=>(0,r.jsx)(Rm.Item,{children:(0,r.jsx)(ff,{id:`${t}-${i.id}`,checked:o.value.checkbox?.selected.includes(i.id)||!1,disabled:e.config.checkbox?.attributes.readonly,onChange:e=>{a(us(o,e?e=>{e.value.checkbox.selected.push(i.id)}:e=>{e.value.checkbox.selected=e.value.checkbox.selected.filter((e=>e!==i.id))}))},name:`${t}[]`,text:(0,r.jsx)(xm,{nodes:Hi(i.label),mode:"singleline",currentElementId:e.id},void 0),icon:e.config.checkbox?.interface?.icon,onBlur:()=>{n(!0)}},void 0)},i.id)))}),void 0),l?(0,r.jsx)(gf,{elementData:e,id:t,submissionData:o,updateSubmissionData:a},void 0):null]},void 0)},getErrors(e,t){const n=[],r=!!e.config.checkbox?.validation?.required,i=t.checkbox?.selected.length??0,o=e.config.checkbox?.interface?.others,a=!!t.checkbox?.selected.includes(e.config.checkbox?.interface?.othersId);r&&0===i&&n.push(lu.requiredOptions);const s=e.config.checkbox?.validation?.filters.maxItems;s&&i&&i>s&&n.push(Kt(lu.maxOptions,s,i));const l=r?e.config.checkbox?.validation?.filters.minItems??1:0;return l&&i&&i<l&&n.push(Kt(lu.minOptions,l,i)),r&&o&&a&&!t.checkbox?.other&&n.push(lu.requiredOther),n},isQuestion:!0,isRequired:e=>!!e.config.checkbox?.validation?.required,setValue(e,t,n){const r=t.config.checkbox?.interface?.options;r&&r.find((t=>t.id===e))&&(n.checkbox.selected=[e])},isConditionTrue(e,t,n,r,i){let o;const a=i.checkbox.selected.length;if(e===tt.LENGTH)o=pf(r,a,n);else{const e=to(r),t=e.every((e=>i.checkbox?.selected.includes(e)))??!1;o=n===et.EQUALS_TO?a===e.length&&t:t}return mf(t,o)},getDisplayValue(e,t){const n=t.checkbox?.selected;if(n&&n.length&&e.config.checkbox?.interface?.options.length){const t=Yi(n,e.config.checkbox.interface.options);return t.map(((e,n)=>(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(wm,{nodes:Hi(e.label),mode:"singleline"},void 0),n!==t.length-1?(0,r.jsx)("span",{children:", "},void 0):null]},e.id)))}return null},getNumericValue(e,t){const n=t.checkbox?.selected;return n&&n.length&&e.config.checkbox?.interface?.options.length?Yi(n,e.config.checkbox.interface.options).reduce(((e,t)=>e+(t.num??0)),0):0},getAnswerValue(e,t){const n=t.checkbox?.selected;if(n&&n.length&&e.config.checkbox?.interface?.options.length){const i=Yi(n,e.config.checkbox.interface.options).map((t=>{const n=Hi(t.answerDescription);return(0,r.jsxs)("li",{children:[(0,r.jsx)(xm,{nodes:Hi(t.label),mode:"singleline",currentElementId:e.id},void 0),Gi(n)?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(su.Separator,{isLight:!0},void 0),(0,r.jsx)(su.OptionDescription,{children:(0,r.jsx)(xm,{nodes:n,mode:"multiline",currentElementId:e.id},void 0)},void 0)]},void 0)]},t.id)}));return(0,r.jsxs)(su.Generic,{children:[(0,r.jsx)("ul",{children:i},void 0),t.checkbox?.other&&e.config.checkbox.interface.others&&n.includes(e.config.checkbox.interface.othersId)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(su.Separator,{},void 0),(0,r.jsx)(su.UserInput,{children:t.checkbox.other},void 0)]},void 0):null]},void 0)}return bn("No options selected.","wp-eform")},getPresetValue:(e,t)=>us(t,(t=>{if(io(e.config.checkbox?.attributes.defaultValue)||(t.checkbox.selected=to(e.config.checkbox.attributes.defaultValue)),e.config.checkbox?.attributes.prefilType===xt.URL){const n=Ji(window.location.search,e.config.checkbox.attributes.prefilParameter);if(n){const r=eo(e.config.checkbox.interface?.options,n);r.length&&(t.checkbox.selected=r)}}if(e.config.checkbox?.attributes.prefilType===xt.META){const n=no(e.extras);if(n&&n.metaValue){const r=n.metaValue;if(Array.isArray(r)){const n=[];e.config.checkbox.interface?.options.forEach((e=>{r.includes(e.id)&&n.push(e.id)})),n.length&&(t.checkbox.selected=n)}}}}))},yf="wpeform-control-radio",bf=o.ZP.div`
	${Ie};
	height: ${e=>Fe(Ue(.7*e.theme.controlHeightBase))};
	width: ${e=>Fe(Ue(.7*e.theme.controlHeightBase))};
	flex: 0 0
		${e=>Fe(Ue(.7*e.theme.controlHeightBase))};
	border: 1px solid ${e=>e.theme.borderColorBase};
	box-shadow: ${e=>e.theme.boxShadowNoneFocus};
	border-radius: 100%;
	margin: 0;
	background-color: ${e=>e.theme.appBackgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: ${e=>Le(["box-shadow","border-color","background-color"],e.theme.transitionControl)};
	position: relative;

	&::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 1;
		transform: scale(0.75);
		transform-origin: center;
		border-radius: 100%;
		background-color: 'transparent';
	}
`,xf=o.ZP.div`
	width: 100%;
	height: 100%;
	color: ${e=>e.theme.primaryBgText};
	font-size: ${e=>Fe(Ue(.35*e.theme.controlHeightBase))};
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
	opacity: 0;
	transition: ${e=>Le(["opacity"],e.theme.transitionControl)};
`,wf=o.ZP.div`
	user-select: none;
	color: ${e=>e.theme.textColorSecondary};
	flex: 0 0
		calc(
			100% -
				${e=>Fe(Ue(.7*e.theme.controlHeightBase)+.25*e.theme.controlHeightBase)}
		);
	width: calc(
		100% -
			${e=>Fe(Ue(.7*e.theme.controlHeightBase)+.25*e.theme.controlHeightBase)}
	);
	line-height: ${e=>Fe(Ue(.7*e.theme.controlHeightBase))};
	transition: ${e=>Le(["color"],e.theme.transitionControl)};
`,_f=o.ZP.label`
	${Ie};
	display: inline-flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	justify-content: flex-start;
	max-width: 100%;
	width: auto;
	font-size: ${e=>Fe(e.theme.fz.base)};
	cursor: pointer;
	position: relative;

	&.${yf}--is-disabled {
		cursor: not-allowed;
	}

	&.${yf}--has-text {
		display: flex;
		width: 100%;
		${bf} {
			margin: 0 ${e=>Fe(.25*e.theme.controlHeightBase)} 0
				0;
		}
	}

	input[type='radio'] {
		position: absolute;
		left: 0;
		top: 0;
		height: 0 !important;
		width: 0 !important;
		opacity: 0;

		&:hover {
			+ ${bf} {
				border-color: ${e=>e.theme.primaryColor};
			}
			~ ${wf} {
				color: ${e=>e.theme.textColor};
			}
		}

		&:focus,
		&:active {
			+ ${bf} {
				border-color: ${e=>e.theme.primaryColor};
				box-shadow: ${e=>e.theme.boxShadowControlFocus};
			}
		}

		&:checked {
			~ ${wf} {
				color: ${e=>e.theme.textColor};
			}
			+ ${bf} {
				background-color: ${e=>e.theme.primaryColor};
				border-color: ${e=>e.theme.primaryColor};
				> ${xf} {
					opacity: 1;
				}
				&::before {
					transform: scale(1.7);
					opacity: 0;
					background-color: ${e=>e.theme.primaryColor};
					transition: ${e=>Le(["transform","opacity","background-color"],e.theme.transitionControl)};
				}
			}
		}

		&:disabled {
			~ ${wf} {
				color: ${e=>e.theme.disabledColor};
			}

			+ ${bf} {
				border-color: ${e=>e.theme.disabledColor};
				box-shadow: none;
			}

			&:checked {
				+ ${bf} {
					background-color: ${e=>e.theme.disabledColor};
					border-color: ${e=>e.theme.disabledColor};
				}
			}
		}
	}
`;function Sf(e){const{text:t,checked:n,onChange:i,onBlur:o,icon:a="fas fa-circle",id:s,className:l,disabled:u,ariaLabel:c,ariaLabelledby:d,...h}=e,f=Pe(yf,{"is-checked":!!n,"has-text":!!t,"is-disabled":!!u},l);return(0,r.jsxs)(_f,Object.assign({htmlFor:s,className:f},{children:[(0,r.jsx)("input",Object.assign({type:"radio",checked:n,onChange:e=>{i(e.target.checked)},id:s,disabled:u,onBlur:e=>{o&&o(e)},"aria-labelledby":d,"aria-label":c},h),void 0),(0,r.jsx)(bf,{children:(0,r.jsx)(xf,{children:(0,r.jsx)(Bl,{iconClass:a},void 0)},void 0)},void 0),t?(0,r.jsx)(wf,{children:t},void 0):null]}),void 0)}function Ef(e){const{id:t,elementData:n,submissionData:o,updateSubmissionData:a}=e,s=o.value.radio?.other??"",l=(0,i.useCallback)((e=>{a(us(o,(t=>{t.value.radio.other=e})))}),[o,a]),u=n.config.radio?.interface?.othersId===o.value.radio?.selected,c=_m(n.config.radio?.interface?.othersPlaceholder);return(0,r.jsx)(wc,Object.assign({visible:u},{children:(0,r.jsx)(jl,{id:`other-${t}`,value:s,onChange:l,prefix:(0,r.jsx)(Bl,{iconClass:"fas fa-pen-nib"},void 0),hasError:u&&n.config.radio?.validation?.required&&""===s,placeholder:c?(0,r.jsx)(xm,{nodes:c,currentElementId:n.id},void 0):bn("enter your choice here","wp-eform")},void 0)}),void 0)}const Cf={id:"radio",hasSubmission:!0,FormUi({elementData:e,id:t,setElementTouched:n,submissionData:o,updateSubmissionData:a,controlAlignment:s}){const l=e.config.radio?.interface?.others,u=(0,i.useMemo)((()=>{const t=[...e.config.radio?.interface?.options??[]];return e.config.radio?.interface?.shuffle&&Sn(t),t}),[e.config.radio?.interface?.options,e.config.radio?.interface?.shuffle]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Rm,Object.assign({columns:e.config.radio?.interface?.columns||yt.AUTO,controlAlignment:s},{children:u.map((i=>(0,r.jsx)(Rm.Item,{children:(0,r.jsx)(Sf,{id:`${t}-${i.id}`,checked:o.value.radio?.selected===i.id,onChange:e=>{e&&(a(us(o,(e=>{e.value.radio.selected=i.id}))),n(!0))},name:t,text:(0,r.jsx)(xm,{nodes:Hi(i.label),mode:"singleline",currentElementId:e.id},void 0),icon:e.config.radio?.interface?.icon,onBlur:()=>{n(!0)},disabled:e.config.radio?.attributes.readonly},void 0)},i.id)))}),void 0),l?(0,r.jsx)(Ef,{elementData:e,id:t,submissionData:o,updateSubmissionData:a},void 0):null]},void 0)},getErrors(e,t){const n=[],r=!!e.config.radio?.validation?.required,i=t.radio?.selected,o=e.config.radio?.interface?.others,a=t.radio?.selected===e.config.radio?.interface?.othersId;return r&&!i&&n.push(lu.requiredOptions),r&&o&&a&&!t.radio?.other&&n.push(lu.requiredOther),n},isQuestion:!0,isRequired:e=>!!e.config.radio?.validation?.required,setValue(e,t,n){const r=t.config.radio?.interface?.options;r&&r.find((t=>t.id===e))&&(n.radio.selected=e)},isConditionTrue(e,t,n,r,i){let o;const a=i.radio.selected?1:0;if(e===tt.LENGTH){const e=Cl(r);o=n===et.GREATER_THAN?a>e:n===et.LESS_THAN?a<e:a===e}else{if(n!==et.EQUALS_TO)return!1;o=i.radio.selected===r}return t===nt.IS?o:!o},getDisplayValue(e,t){const n=t.radio?.selected;if(n){const t=e.config.radio?.interface?.options.find((e=>e.id===n));return t?(0,r.jsx)(wm,{nodes:Hi(t.label),mode:"singleline"},void 0):(0,r.jsx)("span",{children:bn("Unknown","wp-eform")},void 0)}return null},getAnswerValue(e,t){const n=t.radio?.selected;if(n){const i=e.config.radio?.interface?.options.find((e=>e.id===n));if(i){const n=Hi(i.answerDescription);return(0,r.jsxs)(su.Generic,{children:[(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)(xm,{currentElementId:e.id,nodes:Hi(i.label),mode:"singleline"},void 0),Gi(n)?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(su.Separator,{isLight:!0},void 0),(0,r.jsx)(su.OptionDescription,{children:(0,r.jsx)(xm,{nodes:n,mode:"multiline",currentElementId:e.id},void 0)},void 0)]},void 0)]},void 0)},void 0),t.radio?.other&&e.config.radio?.interface?.others&&e.config.radio.interface.othersId===i.id?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(su.Separator,{},void 0),(0,r.jsx)(su.UserInput,{children:t.radio.other},void 0)]},void 0):null]},void 0)}return(0,r.jsx)("span",{children:bn("Unknown","wp-eform")},void 0)}return bn("No options selected.","wp-eform")},getNumericValue(e,t){const n=t.radio?.selected;if(n){const t=e.config.radio?.interface?.options.find((e=>e.id===n));return Dl(t?.num)}return 0},getPresetValue:(e,t)=>us(t,(t=>{if(io(e.config.radio?.attributes.defaultValue)||(t.radio.selected=e.config.radio?.attributes.defaultValue),e.config.radio?.attributes.prefilType===xt.URL){const n=Ji(window.location.search,e.config.radio.attributes.prefilParameter);if(n){const r=eo(e.config.radio.interface?.options,n);r.length&&(t.radio.selected=r.pop())}}if(e.config.radio?.attributes.prefilType===xt.META){const n=no(e.extras);n&&n.metaValue&&e.config.radio.interface?.options.forEach((e=>{e.id===n.metaValue&&(t.radio.selected=e.id)}))}}))},kf="wpeform-component-button",Mf=Oe(kf,"inner"),Tf=Oe(kf,"icon"),Df=Oe(kf,"text"),Af=Oe(kf,"bounce"),Pf=o.ZP.div`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`,Of=o.F4`
	0% {
			width: 0;
			opacity: .1
	}

	20% {
			width: 0;
			opacity: .5
	}

	to {
			width: 100%;
			opacity: 0
	}
`,Rf=o.F4`
	0%, 80%, 100% {
			transform: scale(0);
	}
	40% {
			transform: scale(1.0);
	}
`,Ff=o.ZP.div`
	position: absolute;
	height: 0.5em;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.05);
`,Lf=(0,o.ZP)(l.animated.div)`
	will-change: width;
	position: absolute;
	height: 0.5em;
	left: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.15);

	&.active {
		&::before {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: rgb(255, 255, 255);
			opacity: 0;
			animation: ${Of} 1.6s cubic-bezier(0.23, 1, 0.32, 1)
				infinite;
			content: '';
		}
	}
`,If=(0,o.ZP)(l.animated.div)`
	width: 3em;
	display: flex;
	align-items: center;
	justify-content: center;
	will-change: opacity, transform;
	position: relative;
	.${$l} {
		font-size: 1.5em;
	}
`,Nf=o.ZP.div`
	width: 3em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transform: translateY(-0.25em);
	position: relative;
	top: 2px; /** Visual adjustment */
	.${Af} {
		width: 0.75em;
		height: 0.75em;
		border-radius: 100%;
		display: inline-block;
		background-color: rgba(255, 255, 255, 0.7);
		animation: ${Rf} 1.4s infinite ease-in-out both;

		&.one {
			animation-delay: -0.32s;
		}
		&.two {
			animation-delay: -0.16s;
		}
	}
`,jf=o.ZP.button`
	${Ie};
	overflow: hidden;
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	line-height: 1.2;
	cursor: pointer;
	text-decoration: none;

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.${Tf} {
		margin-right: 0.25em;
		width: 1.2em;
		text-align: center;
		line-height: 1;
		display: inline-flex;
		justify-content: center;
		align-items: center;

		&.${Tf}--after {
			margin-left: 0.25em;
			margin-right: 0;
		}
	}

	&.${kf}--no-label {
		.${Tf} {
			margin-left: 0;
			margin-right: 0;
		}
	}

	.${Mf} {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: row nowrap;
		overflow: hidden;
	}

	.${Df} {
		max-width: 100%;
		white-space: pre;
		text-overflow: ellipsis;
	}

	&.${kf}--has-icon {
		.${Df} {
			max-width: calc(100% - 1.25em);
		}
	}

	&.${kf}--is-loading {
		opacity: 1;
		.${Mf} {
			opacity: 0;
		}
	}

	&:active:not(:disabled) {
		outline: none;
		.${Mf} {
			transform: scale(0.97);
			transform-origin: center center;
		}
	}

	/** Rounded */
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	&.${kf}--rounded {
		border-radius: ${e=>Fe(1.2*e.theme.controlHeightBase/2)};
	}

	/** Sizes */
	padding: 0 1.75em;
	height: ${e=>Fe(1.2*e.theme.controlHeightBase)};
	font-size: ${e=>Fe(e.theme.fz.base)};
	&.${kf}--size-LARGE {
		height: ${e=>Fe(1.4*e.theme.controlHeightBase)};
		font-size: ${e=>Fe(e.theme.fz.large1)};
		padding: 0 1.75em;

		&.${kf}--rounded {
			border-radius: ${e=>Fe(1.4*e.theme.controlHeightBase/2)};
		}
	}
	&.${kf}--size-SMALL {
		height: ${e=>Fe(e.theme.controlHeightBase)};
		font-size: ${e=>Fe(e.theme.fz.small1)};
		padding: 0 1em;
		&.${kf}--rounded {
			border-radius: ${e=>Fe(e.theme.controlHeightBase/2)};
		}
	}
	&.${kf}--size-TINY {
		height: ${e=>Fe(.8*e.theme.controlHeightBase)};
		font-size: ${e=>Fe(e.theme.fz.small1)};
		padding: 0 0.8em;
		&.${kf}--rounded {
			border-radius: ${e=>Fe(.4*e.theme.controlHeightBase)};
		}
	}

	/** Generic Animations */
	${Ff} {
		background-color: ${e=>Ae(.8,e.theme.borderColorBase)};
	}
	${Lf} {
		background-color: ${e=>Ae(.5,e.theme.borderColorBase)};
	}
	.${Af} {
		background-color: ${e=>Ae(.5,e.theme.borderColorBase)};
	}
	${If} {
		color: ${e=>Ae(.5,e.theme.borderColorBase)};
	}
	&.${kf}--colorful {
		${Ff} {
			background-color: ${e=>Ee(.05,e.theme.primaryLightColor)};
		}
		${Lf} {
			background-color: ${e=>e.theme.primaryDarkColor};
		}
		.${Af} {
			background-color: ${e=>e.theme.primaryDarkColor};
		}
		${If} {
			color: ${e=>e.theme.primaryDarkColor};
		}
	}

	/** Styles, we have hard-dependency on the register for performance */
	/** Otherwise if we pass css prop, then a new class is created for every buttons */
	&.${kf}--style-flat {
		background-color: ${e=>e.theme.backgroundShade};
		color: ${e=>e.theme.textColor};
		box-shadow: ${e=>e.theme.boxShadowNoneFocus};
		border: 1px solid ${e=>e.theme.backgroundShade};
		transition: ${e=>Le(["background-color","color","box-shadow","border-color"],e.theme.transitionControl)};

		&:not(:disabled):hover,
		&:not(:disabled):focus,
		&:not(:disabled):active {
			background-color: ${e=>e.theme.backgroundHover};
			border-color: ${e=>e.theme.backgroundHover};
			color: ${e=>e.theme.headingColor};
		}

		&:not(:disabled):focus,
		&:not(:disabled):active {
			border-color: ${e=>e.theme.primaryColor};
		}
		&:not(:disabled):not(:active):focus {
			box-shadow: ${e=>e.theme.boxShadowControlFocus};
		}

		&.${kf}--colorful {
			background-color: ${e=>e.theme.primaryColor};
			border-color: ${e=>e.theme.primaryColor};
			color: ${e=>e.theme.primaryBgText};

			&:not(:disabled):hover,
			&:not(:disabled):focus,
			&:not(:disabled):active {
				background-color: ${e=>e.theme.primaryLightColor};
				border-color: ${e=>e.theme.primaryLightColor};
				color: ${e=>e.theme.primaryBgText};
			}

			&:not(:disabled):focus,
			&:not(:disabled):active {
				border-color: ${e=>e.theme.primaryColor};
			}
		}
	}
	&.${kf}--style-3d {
		background-color: ${e=>e.theme.backgroundShade};
		color: ${e=>e.theme.textColor};
		box-shadow: ${e=>e.theme.boxShadowNoneFocus};
		border: 1px solid ${e=>e.theme.backgroundShade};
		border-bottom: 0.1875em solid ${e=>e.theme.borderColorBase};
		transition: ${e=>Le(["background-color","color","box-shadow","border-color"],e.theme.transitionControl)};

		&:not(:disabled):hover,
		&:not(:disabled):focus,
		&:not(:disabled):active {
			background-color: ${e=>e.theme.backgroundHover};
			border-color: ${e=>e.theme.backgroundHover};
			border-bottom-color: ${e=>e.theme.borderColorSplit};
			color: ${e=>e.theme.headingColor};
		}

		&:not(:disabled):focus,
		&:not(:disabled):active {
			border-color: ${e=>e.theme.primaryColor};
		}
		&:not(:disabled):not(:active):focus {
			box-shadow: ${e=>e.theme.boxShadowControlFocus};
		}

		&:not(:disabled):active {
			border-bottom-width: 1px;
		}

		&.${kf}--colorful {
			background-color: ${e=>e.theme.primaryColor};
			border-color: ${e=>e.theme.primaryColor};
			border-bottom-color: ${e=>e.theme.primaryDarkColor};
			color: ${e=>e.theme.primaryBgText};

			&:not(:disabled):hover,
			&:not(:disabled):focus,
			&:not(:disabled):active {
				background-color: ${e=>e.theme.primaryLightColor};
				border-color: ${e=>e.theme.primaryLightColor};
				border-bottom-color: ${e=>e.theme.primaryColor};
				color: ${e=>e.theme.primaryBgText};
			}

			&:not(:disabled):focus,
			&:not(:disabled):active {
				border-color: ${e=>e.theme.primaryDarkColor};
			}
		}
	}
	&.${kf}--style-gradient {
		background-color: ${e=>Ee(.1,e.theme.backgroundShade)};
		background-image: linear-gradient(
			to bottom,
			${e=>e.theme.backgroundHover},
			${e=>Ee(.1,e.theme.backgroundShade)}
		);
		background-size: 100% 150%;
		background-position: bottom 0 left 0;
		color: ${e=>e.theme.textColor};
		box-shadow: ${e=>e.theme.boxShadowNoneFocus};
		border: 1px solid ${e=>e.theme.borderColorBase};
		transition: ${e=>Le(["background-position","color","box-shadow","border-color"],e.theme.transitionControl)};

		&:not(:disabled):hover,
		&:not(:disabled):focus,
		&:not(:disabled):active {
			background-position: top 0 left 0;
			color: ${e=>e.theme.headingColor};
		}

		&:not(:disabled):focus,
		&:not(:disabled):active {
			border-color: ${e=>e.theme.primaryColor};
		}
		&:not(:disabled):not(:active):focus {
			box-shadow: ${e=>e.theme.boxShadowControlFocus};
		}

		&.${kf}--colorful {
			background-color: ${e=>e.theme.primaryColor};
			background-image: linear-gradient(
				to bottom,
				${e=>e.theme.primaryLightColor},
				${e=>Ee(.1,e.theme.primaryColor)}
			);
			border-color: ${e=>e.theme.primaryDarkColor};
			color: ${e=>e.theme.primaryBgText};

			&:not(:disabled):hover,
			&:not(:disabled):focus,
			&:not(:disabled):active {
				background-color: ${e=>e.theme.primaryColor};
				border-color: ${e=>e.theme.primaryDarkColor};
				color: ${e=>e.theme.primaryBgText};
			}

			&:not(:disabled):focus,
			&:not(:disabled):active {
				border-color: ${e=>e.theme.primaryDarkColor};
			}
		}
	}
	&.${kf}--style-outline {
		background-color: ${e=>e.theme.appBackgroundColor};
		color: ${e=>e.theme.textColor};
		box-shadow: ${e=>e.theme.boxShadowNoneFocus};
		border: 2px solid ${e=>e.theme.borderColorBase};
		transition: ${e=>Le(["background-color","color","box-shadow","border-color"],e.theme.transitionControl)};

		&:not(:disabled):hover,
		&:not(:disabled):focus,
		&:not(:disabled):active {
			border-color: ${e=>e.theme.borderColorSplit};
			color: ${e=>e.theme.headingColor};
		}

		&:not(:disabled):focus,
		&:not(:disabled):active {
			border-color: ${e=>e.theme.primaryColor};
		}
		&:not(:disabled):not(:active):focus {
			box-shadow: ${e=>e.theme.boxShadowControlFocus};
		}

		&.${kf}--colorful {
			border-color: ${e=>e.theme.primaryColor};
			color: ${e=>e.theme.primaryDarkColor};
			background-color: ${e=>e.theme.primaryBackgroundColor};

			&:not(:disabled):hover,
			&:not(:disabled):focus,
			&:not(:disabled):active {
				border-color: ${e=>e.theme.primaryLightColor};
			}

			&:not(:disabled):focus,
			&:not(:disabled):active {
				border-color: ${e=>e.theme.primaryDarkColor};
				color: ${e=>e.theme.primaryDarkColor};
			}
		}
	}
	&.${kf}--style-transparent {
		background-color: ${e=>Ae(1,e.theme.backgroundHover)};
		color: ${e=>e.theme.textColor};
		box-shadow: none;
		border: 0 none;
		transition: ${e=>Le(["background-color","color"],e.theme.transitionControl)};

		&:not(:disabled):hover,
		&:not(:disabled):focus,
		&:not(:disabled):active {
			background-color: ${e=>e.theme.backgroundHover};
			color: ${e=>e.theme.headingColor};
		}

		&:not(:disabled):focus,
		&:not(:disabled):active {
			background-color: ${e=>e.theme.backgroundHover};
		}
		&:not(:disabled):not(:active):focus {
			background-color: ${e=>e.theme.backgroundHover};
		}

		&.${kf}--colorful {
			background-color: ${e=>Ae(1,e.theme.primaryBackgroundColor)};

			&:not(:disabled):hover,
			&:not(:disabled):focus,
			&:not(:disabled):active {
				background-color: ${e=>e.theme.primaryBackgroundColor};
			}

			&:not(:disabled):focus,
			&:not(:disabled):active {
				background-color: ${e=>e.theme.primaryBackgroundColor};
				color: ${e=>e.theme.primaryDarkColor};
			}
		}
	}
`;function $f(e){const{loadedState:t}=e,n=(0,o.Fg)(),i=(0,l.useSpring)({from:{opacity:0,transform:"scale(0, 0) translate(0, -0.25em)"},config:n.springConfigGeneral,to:{opacity:1,transform:"scale(1, 1) translate(0, -0.25em)"}});return(0,r.jsx)(If,Object.assign({style:i},{children:(0,r.jsx)(Bl,{iconClass:"error"===t?"fas fa-exclamation":"fas fa-check"},void 0)}),void 0)}function zf(e){const{loadingDone:t,loadedState:n}=e,a=(0,o.Fg)(),[s,u]=(0,i.useState)(0),c=(0,l.useSpring)({width:`${s}%`,config:a.springConfigSlow});return(0,i.useEffect)((()=>{let e=!0;if(t)return u(100),()=>{e=!1};u(24);const n=window.setInterval((()=>{e&&u((e=>e<24?24:e<50?50:e<86?86:96))}),3e3);return()=>{e=!1,window.clearInterval(n)}}),[t]),(0,r.jsxs)(Pf,{children:[(0,r.jsx)(Ff,{},void 0),(0,r.jsx)(Lf,{style:c,className:t?"":"active"},void 0),t?(0,r.jsx)($f,{loadedState:n},void 0):(0,r.jsxs)(Nf,{children:[(0,r.jsx)("div",{className:B(Af,"one")},void 0),(0,r.jsx)("div",{className:B(Af,"two")},void 0),(0,r.jsx)("div",{className:B(Af,"three")},void 0)]},void 0)]},void 0)}function Bf(e){const{size:t=ft.DEFAULT,style:n,rounded:i=!1,colorful:o=!0,children:a,icon:s,disabled:l=!1,iconPosition:u="before",onClick:c,className:d,loading:h,loadingDone:f=!1,loadedState:p="success",asLink:m=!1,href:g,linkTarget:v="_self",title:y}=e,[b,x]=Xu({darkBg:!!o&&"outline"!==n}),w=Pe(kf,{rounded:i,colorful:o,[`size-${t}`]:!0,[`style-${n}`]:!0,"has-icon":!!s,"is-loading":!!h,"no-label":!a},d),_=(0,r.jsxs)(r.Fragment,{children:[x,(0,r.jsxs)("span",Object.assign({className:Mf},{children:[s&&"before"===u?(0,r.jsx)("span",Object.assign({className:Pe(Tf,{before:!0})},{children:(0,r.jsx)(Bl,{iconClass:s},void 0)}),void 0):null,a?(0,r.jsx)("span",Object.assign({className:Df},{children:a}),void 0):null,s&&"after"===u?(0,r.jsx)("span",Object.assign({className:Pe(Tf,{after:!0})},{children:(0,r.jsx)(Bl,{iconClass:s},void 0)}),void 0):null]}),void 0),h?(0,r.jsx)(zf,{loadingDone:f,loadedState:p,colorful:o},void 0):null]},void 0);return m&&g?(0,r.jsx)(jf,Object.assign({as:"a",href:g,className:w,onClick:e=>{b(e)},target:v,title:y},{children:_}),void 0):(0,r.jsx)(jf,Object.assign({type:"button",className:w,onClick:e=>{e.preventDefault(),b(e),c&&c(e)},disabled:l||!0===h,title:y},{children:_}),void 0)}o.ZP.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	> .${kf} {
		flex: 0 0 auto;
		margin: ${e=>Fe(e.theme.gutter/4)};
	}
`;const Uf="wpeform-component-buttongroup",Hf=o.ZP.div`
	${Ie};
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	margin-left: ${e=>Fe(e.theme.gutter/-4)};
	margin-right: ${e=>Fe(e.theme.gutter/-4)};
	> .${kf} {
		flex: 0 0 auto;
		margin: ${e=>Fe(e.theme.gutter/4)};
	}

	/** Align */
	&.${Uf}--align-LEFT {
		justify-content: flex-start;
	}
	&.${Uf}--align-CENTER {
		justify-content: center;
	}
	&.${Uf}--align-RIGHT {
		justify-content: flex-end;
	}
	&.${Uf}--align-JUSTIFY {
		justify-content: center;
		> .${kf} {
			flex-grow: 1;
		}
	}

	/** Type */
	&.${Uf}--type-navbar {
		background-color: ${e=>e.theme.backgroundShade};
		margin: 0;
		&.${Uf}--colorful {
			background-color: ${e=>e.theme.primaryColor};
		}
		/** This type would style only flat buttons */
		padding: 0;
		> .${kf}.${kf}.${kf}.${kf}.${kf} {
			margin: 0;
			border-radius: 0;
			position: relative;

			&:active,
			&:focus {
				z-index: 1;
			}
		}
	}
	&.${Uf}--type-regular {
		&.${Uf}--has-gutter-on-regular {
			padding: ${e=>Fe(e.theme.gutter)}
				${e=>Fe(1.5*e.theme.gutter)};
		}
	}
`;function Vf(e){const{type:t,align:n,children:i,colorful:o=!1,className:a,hasGutterOnregular:s=!1}=e;return(0,r.jsx)(Hf,Object.assign({className:Pe(Uf,{[`type-${t}`]:!0,[`align-${n}`]:!0,colorful:o,"has-gutter-on-regular":s},a)},{children:i}),void 0)}const Wf={id:"buttons",hasSubmission:!1,FormUi({elementData:e}){const t=Od();return(0,r.jsx)(Vf,Object.assign({className:e.appearance?.className,align:e.config.buttons?.interface?.alignment??ht.CENTER,type:"regular"},{children:e.config.buttons?.buttons.map((n=>{const i="#wpeform-prev"===n.link?"prev":"#wpeform-next"===n.link?"next":"#wpeform-submit"===n.link?"submit":"#wpeform-reset"===n.link?"reset":"custom";return(0,r.jsx)(Bf,Object.assign({style:e.config.buttons?.interface?.style??"flat",colorful:e.config.buttons?.interface?.colored,icon:n.icon,iconPosition:n.iconPosition===Xe.AFTER?"after":"before",rounded:e.config.buttons?.interface?.rounded,size:e.config.buttons?.interface?.size,onClick:()=>{if("prev"===i)t.canPrevious&&t.goPrevious();else if("next"===i)t.canNext&&t.goNext();else if("submit"===i)t.canSubmit&&t.submit();else if("reset"===i)t.canReset&&t.reset();else{const t=e.config.buttons?.attributes?.open;if(t===Qe.SELF)window.location.href=n.link;else if(t===Qe.BLANK)window.open(n.link,"_blank");else{const t=e.config.buttons?.attributes?.popupHeight??600,r=e.config.buttons?.attributes?.popupWidth??600,i=window.screenLeft,o=window.screenTop,a=window.innerWidth/2-r/2+i,s=window.innerHeight/2-t/2+o,l=window.open(n.link,"wpeform-buttons-popup",`scrollbars=yes, width=${r}, height=${t}, top=${s}, left=${a}`);l&&l.focus&&l.focus()}}},disabled:"prev"===i&&!t.canPrevious||"next"===i&&!t.canNext||"submit"===i&&!t.canSubmit||"reset"===i&&!t.canReset,loading:"submit"===i&&t.submitting,loadingDone:"submit"===i&&t.submitted,loadedState:"submit"===i?"success"===t.submittedState?"success":"error":void 0},{children:(0,r.jsx)(xm,{mode:"singleline",nodes:Hi(n.label),currentElementId:e.id},void 0)}),n.id)}))}),void 0)},getErrors:()=>[],isQuestion:!1,isRequired:()=>!1,setValue(){},isConditionTrue:()=>!0},Gf={numOne:7,numTwo:4,operation:"add",result:11,encrypted:""},qf={id:"captcha",hasSubmission:!0,FormUi({id:e,elementData:t,submissionData:n,updateSubmissionData:o,setElementTouched:a,controlType:s,controlAlignment:l,hasError:u=!1}){let c;if(t.extras)try{c=JSON.parse(t.extras)}catch(e){c=Gf}else c=Gf;const d=n.value.captcha?.solved??"",h=(0,i.useCallback)((e=>{const t=us(n,(t=>{t.value.captcha.solved=e,t.value.captcha.encrypted=c.encrypted}));o(t)}),[o,n,c.encrypted]);return(0,r.jsx)(jl,{id:e,controlType:s,controlAlignment:l,value:d,onChange:h,onBlur:()=>{a(!0)},hasError:u,placeholder:(0,r.jsx)("strong",{children:Kt(bn("%d %s %d = ?","wp-eform"),c.numOne,"add"===c.operation?"+":"-",c.numTwo)},void 0),prefix:(0,r.jsx)(Bl,{iconClass:`fas fa-${"add"===c.operation?"plus":"minus"}-square`},void 0),type:"tel"},void 0)},getErrors(e,t){const n=[];let r;if(e.extras)try{r=JSON.parse(e.extras)}catch(e){r=Gf}else r=Gf;return t.captcha?.solved||n.push(lu.requiredCaptcha),t.captcha?.solved&&t.captcha?.solved!==r.result.toString()&&n.push(Kt(lu.incorrectCaptcha,r.result)),n},isQuestion:!0,isRequired:()=>!0,setValue(){}};var Yf={},Zf={},Xf={},Qf={};!function(e){var t;Object.defineProperty(e,"__esModule",{value:!0}),e.Direction=void 0,(t=e.Direction||(e.Direction={})).Right="to right",t.Left="to left",t.Down="to bottom",t.Up="to top"}(Qf),function(e){var t=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=i,r=Qf;function o(e){return e===r.Direction.Up||e===r.Direction.Down}function a(e,t,n){e.style.transform="translate("+t+"px, "+n+"px)"}e.getStepDecimals=function(e){var t=e.toString().split(".")[1];return t?t.length:0},e.isTouchEvent=function(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length},e.isStepDivisible=function(e,t,n){var r=(t-e)/n;return parseInt(r.toString(),10)===r},e.normalizeValue=function(t,n,r,i,o,a,s){var l=1e11;if(t=Math.round(t*l)/l,!a){var u=s[n-1],c=s[n+1];if(u&&u>t)return u;if(c&&c<t)return c}if(t>i)return i;if(t<r)return r;var d=Math.floor(t*l-r*l)%Math.floor(o*l),h=Math.floor(t*l-Math.abs(d)),f=0===d?t:h/l,p=Math.abs(d/l)<o/2?f:f+o,m=e.getStepDecimals(o);return parseFloat(p.toFixed(m))},e.relativeValue=function(e,t,n){return(e-t)/(n-t)},e.isVertical=o,e.checkBoundaries=function(e,t,n){if(t>=n)throw new RangeError("min ("+t+") is equal/bigger than max ("+n+")");if(e<t)throw new RangeError("value ("+e+") is smaller than min ("+t+")");if(e>n)throw new RangeError("value ("+e+") is bigger than max ("+n+")")},e.checkValuesAgainstBoundaries=function(e,t,n){return e<t?t:e>n?n:e},e.checkInitialOverlap=function(e){if(!(e.length<2||e.slice(1).every((function(t,n){return e[n]<=t}))))throw new RangeError("values={["+e+"]} needs to be sorted when allowOverlap={false}")},e.getMargin=function(e){var t=window.getComputedStyle(e);return{top:parseInt(t["margin-top"],10),bottom:parseInt(t["margin-bottom"],10),left:parseInt(t["margin-left"],10),right:parseInt(t["margin-right"],10)}},e.getPaddingAndBorder=function(e){var t=window.getComputedStyle(e);return{top:parseInt(t["padding-top"],10)+parseInt(t["border-top-width"],10),bottom:parseInt(t["padding-bottom"],10)+parseInt(t["border-bottom-width"],10),left:parseInt(t["padding-left"],10)+parseInt(t["border-left-width"],10),right:parseInt(t["padding-right"],10)+parseInt(t["border-right-width"],10)}},e.translateThumbs=function(e,t,n){var r=n?-1:1;e.forEach((function(e,n){return a(e,r*t[n].x,t[n].y)}))},e.getClosestThumbIndex=function(e,t,n,r){for(var i=0,o=l(e[0],t,n,r),a=1;a<e.length;a++){var s=l(e[a],t,n,r);s<o&&(o=s,i=a)}return i},e.translate=a,e.schd=function(e){var t=[],n=null;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];t=r,n||(n=requestAnimationFrame((function(){n=null,e.apply(void 0,t)})))}},e.replaceAt=function(e,t,n){var r=e.slice(0);return r[t]=n,r},e.getTrackBackground=function(e){var t=e.values,n=e.colors,i=e.min,o=e.max,a=e.direction,s=void 0===a?r.Direction.Right:a,l=e.rtl,u=void 0!==l&&l;u&&s===r.Direction.Right?s=r.Direction.Left:u&&r.Direction.Left&&(s=r.Direction.Right);var c=t.slice(0).sort((function(e,t){return e-t})).map((function(e){return(e-i)/(o-i)*100})),d=c.reduce((function(e,t,r){return e+", "+n[r]+" "+t+"%, "+n[r+1]+" "+t+"%"}),"");return"linear-gradient("+s+", "+n[0]+" 0%"+d+", "+n[n.length-1]+" 100%)"},e.voidFn=function(){},e.assertUnreachable=function(e){throw new Error("Didn't expect to get here")};var s=function(e,n,r,i,o){return void 0===o&&(o=function(e){return e}),Math.ceil(t([e],Array.from(e.children)).reduce((function(e,t){var a=Math.ceil(t.getBoundingClientRect().width);if(t.innerText&&t.innerText.includes(r)&&0===t.childElementCount){var s=t.cloneNode(!0);s.innerHTML=o(n.toFixed(i)),s.style.visibility="hidden",document.body.appendChild(s),a=Math.ceil(s.getBoundingClientRect().width),document.body.removeChild(s)}return a>e?a:e}),e.getBoundingClientRect().width))};function l(e,t,n,r){var i=e.getBoundingClientRect(),a=i.left,s=i.top,l=i.width,u=i.height;return o(r)?Math.abs(n-(s+u/2)):Math.abs(t-(a+l/2))}e.useThumbOverlap=function(r,i,o,a,l,u){void 0===a&&(a=.1),void 0===l&&(l=" - "),void 0===u&&(u=function(e){return e});var c=e.getStepDecimals(a),d=n.useState({}),h=d[0],f=d[1],p=n.useState(u(i[o].toFixed(c))),m=p[0],g=p[1];return n.useEffect((function(){if(r){var e=r.getThumbs();if(e.length<1)return;var n={},a=r.getOffsets(),d=function(e,n,r,i,o,a,l){void 0===l&&(l=function(e){return e});var u=[],c=function(e){var d=s(r[e],i[e],o,a,l),h=n[e].x;n.forEach((function(n,f){var p=n.x,m=s(r[f],i[f],o,a,l);e!==f&&(h>=p&&h<=p+m||h+d>=p&&h+d<=p+m)&&(u.includes(f)||(u.push(e),u.push(f),u=t(u,[e,f]),c(f)))}))};return c(e),Array.from(new Set(u.sort()))}(o,a,e,i,l,c,u),h=u(i[o].toFixed(c));if(d.length){var p=d.reduce((function(e,n,r,i){return e.length?t(e,[a[i[r]].x]):[a[i[r]].x]}),[]);if(Math.min.apply(Math,p)===a[o].x){var m=[];d.forEach((function(e){m.push(i[e].toFixed(c))})),h=Array.from(new Set(m.sort((function(e,t){return parseFloat(e)-parseFloat(t)})))).map(u).join(l);var v=Math.min.apply(Math,p),y=Math.max.apply(Math,p),b=e[d[p.indexOf(y)]].getBoundingClientRect().width;n.left=Math.abs(v-(y+b))/2+"px",n.transform="translate(-50%, 0)"}else n.visibility="hidden"}g(h),f(n)}}),[r,i]),[m,h]}}(Xf);var Kf,Jf=(Kf=function(e,t){return Kf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Kf(e,t)},function(e,t){function n(){this.constructor=e}Kf(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),ep=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},tp=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},np=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r};Object.defineProperty(Zf,"__esModule",{value:!0});var rp=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&ep(t,e,n);return tp(t,e),t}(i),ip=Xf,op=Qf,ap=["ArrowRight","ArrowUp","k","PageUp"],sp=["ArrowLeft","ArrowDown","j","PageDown"],lp=function(e){function t(t){var n=e.call(this,t)||this;if(n.trackRef=rp.createRef(),n.thumbRefs=[],n.markRefs=[],n.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(n.props.values.length).fill(0).map((function(e,t){return t})),isChanged:!1,markOffsets:[]},n.getOffsets=function(){var e=n.props,t=e.direction,r=e.values,i=e.min,o=e.max,a=n.trackRef.current,s=a.getBoundingClientRect(),l=ip.getPaddingAndBorder(a);return n.getThumbs().map((function(e,n){var a={x:0,y:0},u=e.getBoundingClientRect(),c=ip.getMargin(e);switch(t){case op.Direction.Right:return a.x=-1*(c.left+l.left),a.y=-1*((u.height-s.height)/2+l.top),a.x+=s.width*ip.relativeValue(r[n],i,o)-u.width/2,a;case op.Direction.Left:return a.x=-1*(c.right+l.right),a.y=-1*((u.height-s.height)/2+l.top),a.x+=s.width-s.width*ip.relativeValue(r[n],i,o)-u.width/2,a;case op.Direction.Up:return a.x=-1*((u.width-s.width)/2+c.left+l.left),a.y=-l.left,a.y+=s.height-s.height*ip.relativeValue(r[n],i,o)-u.height/2,a;case op.Direction.Down:return a.x=-1*((u.width-s.width)/2+c.left+l.left),a.y=-l.left,a.y+=s.height*ip.relativeValue(r[n],i,o)-u.height/2,a;default:return ip.assertUnreachable(t)}}))},n.getThumbs=function(){return n.trackRef&&n.trackRef.current?Array.from(n.trackRef.current.children).filter((function(e){return e.hasAttribute("aria-valuenow")})):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},n.getTargetIndex=function(e){return n.getThumbs().findIndex((function(t){return t===e.target||t.contains(e.target)}))},n.addTouchEvents=function(e){document.addEventListener("touchmove",n.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",n.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",n.schdOnEnd,{passive:!1})},n.addMouseEvents=function(e){document.addEventListener("mousemove",n.schdOnMouseMove),document.addEventListener("mouseup",n.schdOnEnd)},n.onMouseDownTrack=function(e){var t;if(0===e.button)if(e.persist(),e.preventDefault(),n.addMouseEvents(e.nativeEvent),n.props.values.length>1&&n.props.draggableTrack){if(n.thumbRefs.some((function(t){var n;return null===(n=t.current)||void 0===n?void 0:n.contains(e.target)})))return;n.setState({draggedTrackPos:[e.clientX,e.clientY]},(function(){return n.onMove(e.clientX,e.clientY)}))}else{var r=ip.getClosestThumbIndex(n.thumbRefs.map((function(e){return e.current})),e.clientX,e.clientY,n.props.direction);null===(t=n.thumbRefs[r].current)||void 0===t||t.focus(),n.setState({draggedThumbIndex:r},(function(){return n.onMove(e.clientX,e.clientY)}))}},n.onResize=function(){ip.translateThumbs(n.getThumbs(),n.getOffsets(),n.props.rtl),n.calculateMarkOffsets()},n.onTouchStartTrack=function(e){var t;if(e.persist(),n.addTouchEvents(e.nativeEvent),n.props.values.length>1&&n.props.draggableTrack){if(n.thumbRefs.some((function(t){var n;return null===(n=t.current)||void 0===n?void 0:n.contains(e.target)})))return;n.setState({draggedTrackPos:[e.touches[0].clientX,e.touches[0].clientY]},(function(){return n.onMove(e.touches[0].clientX,e.touches[0].clientY)}))}else{var r=ip.getClosestThumbIndex(n.thumbRefs.map((function(e){return e.current})),e.touches[0].clientX,e.touches[0].clientY,n.props.direction);null===(t=n.thumbRefs[r].current)||void 0===t||t.focus(),n.setState({draggedThumbIndex:r},(function(){return n.onMove(e.touches[0].clientX,e.touches[0].clientY)}))}},n.onMouseOrTouchStart=function(e){if(!n.props.disabled){var t=ip.isTouchEvent(e);if(t||0===e.button){var r=n.getTargetIndex(e);-1!==r&&(t?n.addTouchEvents(e):n.addMouseEvents(e),n.setState({draggedThumbIndex:r,thumbZIndexes:n.state.thumbZIndexes.map((function(e,t){return t===r?Math.max.apply(Math,n.state.thumbZIndexes):e<=n.state.thumbZIndexes[r]?e:e-1}))}))}}},n.onMouseMove=function(e){e.preventDefault(),n.onMove(e.clientX,e.clientY)},n.onTouchMove=function(e){e.preventDefault(),n.onMove(e.touches[0].clientX,e.touches[0].clientY)},n.onKeyDown=function(e){var t=n.props,r=t.values,i=t.onChange,o=t.step,a=t.rtl,s=n.state.isChanged,l=n.getTargetIndex(e.nativeEvent),u=a?-1:1;-1!==l&&(ap.includes(e.key)?(e.preventDefault(),n.setState({draggedThumbIndex:l,isChanged:!0}),i(ip.replaceAt(r,l,n.normalizeValue(r[l]+u*("PageUp"===e.key?10*o:o),l)))):sp.includes(e.key)?(e.preventDefault(),n.setState({draggedThumbIndex:l,isChanged:!0}),i(ip.replaceAt(r,l,n.normalizeValue(r[l]-u*("PageDown"===e.key?10*o:o),l)))):"Tab"===e.key?n.setState({draggedThumbIndex:-1},(function(){s&&n.fireOnFinalChange()})):s&&n.fireOnFinalChange())},n.onKeyUp=function(e){var t=n.state.isChanged;n.setState({draggedThumbIndex:-1},(function(){t&&n.fireOnFinalChange()}))},n.onMove=function(e,t){var r=n.state,i=r.draggedThumbIndex,o=r.draggedTrackPos,a=n.props,s=a.direction,l=a.min,u=a.max,c=a.onChange,d=a.values,h=a.step,f=a.rtl;if(-1===i&&-1===o[0]&&-1===o[1])return null;var p=n.trackRef.current;if(!p)return null;var m=p.getBoundingClientRect(),g=ip.isVertical(s)?m.height:m.width;if(-1!==o[0]&&-1!==o[1]){var v=e-o[0],y=t-o[1],b=0;switch(s){case op.Direction.Right:case op.Direction.Left:b=v/g*(u-l);break;case op.Direction.Down:case op.Direction.Up:b=y/g*(u-l);break;default:ip.assertUnreachable(s)}if(f&&(b*=-1),Math.abs(b)>=h/2){for(var x=0;x<n.thumbRefs.length;x++){if(d[x]===u&&1===Math.sign(b)||d[x]===l&&-1===Math.sign(b))return;var w=d[x]+b;w>u?b=u-d[x]:w<l&&(b=l-d[x])}var _=d.slice(0);for(x=0;x<n.thumbRefs.length;x++)_=ip.replaceAt(_,x,n.normalizeValue(d[x]+b,x));n.setState({draggedTrackPos:[e,t]}),c(_)}}else{var S=0;switch(s){case op.Direction.Right:S=(e-m.left)/g*(u-l)+l;break;case op.Direction.Left:S=(g-(e-m.left))/g*(u-l)+l;break;case op.Direction.Down:S=(t-m.top)/g*(u-l)+l;break;case op.Direction.Up:S=(g-(t-m.top))/g*(u-l)+l;break;default:ip.assertUnreachable(s)}f&&(S=u+l-S),Math.abs(d[i]-S)>=h/2&&c(ip.replaceAt(d,i,n.normalizeValue(S,i)))}},n.normalizeValue=function(e,t){var r=n.props,i=r.min,o=r.max,a=r.step,s=r.allowOverlap,l=r.values;return ip.normalizeValue(e,t,i,o,a,s,l)},n.onEnd=function(e){if(e.preventDefault(),document.removeEventListener("mousemove",n.schdOnMouseMove),document.removeEventListener("touchmove",n.schdOnTouchMove),document.removeEventListener("mouseup",n.schdOnEnd),document.removeEventListener("touchend",n.schdOnEnd),document.removeEventListener("touchcancel",n.schdOnEnd),-1===n.state.draggedThumbIndex&&-1===n.state.draggedTrackPos[0]&&-1===n.state.draggedTrackPos[1])return null;n.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},(function(){n.fireOnFinalChange()}))},n.fireOnFinalChange=function(){n.setState({isChanged:!1});var e=n.props,t=e.onFinalChange,r=e.values;t&&t(r)},n.calculateMarkOffsets=function(){if(n.props.renderMark&&n.trackRef&&null!==n.trackRef.current){for(var e=window.getComputedStyle(n.trackRef.current),t=parseInt(e.width,10),r=parseInt(e.height,10),i=parseInt(e.paddingLeft,10),o=parseInt(e.paddingTop,10),a=[],s=0;s<n.numOfMarks+1;s++){var l=9999,u=9999;if(n.markRefs[s].current){var c=n.markRefs[s].current.getBoundingClientRect();l=c.height,u=c.width}n.props.direction===op.Direction.Left||n.props.direction===op.Direction.Right?a.push([Math.round(t/n.numOfMarks*s+i-u/2),-Math.round((l-r)/2)]):a.push([Math.round(r/n.numOfMarks*s+o-l/2),-Math.round((u-t)/2)])}n.setState({markOffsets:a})}},0===t.step)throw new Error('"step" property should be a positive number');n.numOfMarks=(t.max-t.min)/n.props.step,n.schdOnMouseMove=ip.schd(n.onMouseMove),n.schdOnTouchMove=ip.schd(n.onTouchMove),n.schdOnEnd=ip.schd(n.onEnd),n.thumbRefs=t.values.map((function(){return rp.createRef()}));for(var r=0;r<n.numOfMarks+1;r++)n.markRefs[r]=rp.createRef();return n}return Jf(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,n=t.values,r=t.min,i=t.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",e.onResize)},unobserve:function(){return window.removeEventListener("resize",e.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&ip.checkInitialOverlap(this.props.values),this.props.values.forEach((function(t){return ip.checkBoundaries(t,e.props.min,e.props.max)})),this.resizeObserver.observe(this.trackRef.current),ip.translateThumbs(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach((function(e){ip.isStepDivisible(r,e,i)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentDidUpdate=function(e,t){var n=this.props,r=n.max,i=n.min,o=n.step,a=n.values,s=n.rtl;if(e.max!==r||e.min!==i||e.step!==o){this.markRefs=[],this.numOfMarks=(r-i)/o;for(var l=0;l<this.numOfMarks+1;l++)this.markRefs[l]=rp.createRef()}ip.translateThumbs(this.getThumbs(),this.getOffsets(),s),e.max===r&&e.min===i&&e.step===o&&t.markOffsets.length===this.state.markOffsets.length||(this.calculateMarkOffsets(),a.forEach((function(e){ip.isStepDivisible(i,e,o)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})))},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var e=this,t=this.props,n=t.renderTrack,r=t.renderThumb,i=t.renderMark,o=void 0===i?function(){return null}:i,a=t.values,s=t.min,l=t.max,u=t.allowOverlap,c=t.disabled,d=this.state,h=d.draggedThumbIndex,f=d.thumbZIndexes,p=d.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:h>-1?"grabbing":this.props.draggableTrack?ip.isVertical(this.props.direction)?"ns-resize":"ew-resize":1!==a.length||c?"inherit":"pointer"},onMouseDown:c?ip.voidFn:this.onMouseDownTrack,onTouchStart:c?ip.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:c,children:np(p.map((function(t,n,r){return o({props:{style:e.props.direction===op.Direction.Left||e.props.direction===op.Direction.Right?{position:"absolute",left:t[0]+"px",marginTop:t[1]+"px"}:{position:"absolute",top:t[0]+"px",marginLeft:t[1]+"px"},key:"mark"+n,ref:e.markRefs[n]},index:n})})),a.map((function(t,n){var i=e.state.draggedThumbIndex===n;return r({index:n,value:t,isDragged:i,props:{style:{position:"absolute",zIndex:f[n],cursor:c?"inherit":i?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:n,tabIndex:c?void 0:0,"aria-valuemax":u?l:a[n+1]||l,"aria-valuemin":u?s:a[n-1]||s,"aria-valuenow":t,draggable:!1,ref:e.thumbRefs[n],role:"slider",onKeyDown:c?ip.voidFn:e.onKeyDown,onKeyUp:c?ip.voidFn:e.onKeyUp}})})))})},t.defaultProps={step:1,direction:op.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(rp.Component);Zf.default=lp,function(e){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(Zf);e.Range=n.default;var r=Xf;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=Qf;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})}(Yf);const up="wpeform-control-number",cp=Oe(up,"spinner-up"),dp=Oe(up,"spinner-down"),hp=o.ZP.button`
	${Ye};
	display: flex;
	flex: 0 0 50%;
	height: 50%;
	width: 100%;
	font-size: ${e=>Fe(e.theme.fz.small2-2)};
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: ${e=>e.theme.backgroundShade};
	color: ${e=>e.theme.textColorSecondary};
	position: relative;
	border-left: 1px solid ${e=>e.theme.borderColorBase};
	&:first-child {
		border-top-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
		border-bottom: 1px solid ${e=>e.theme.borderColorBase};
	}
	&:last-child {
		border-bottom-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	}
	transition: ${e=>Le(["color","height","flex-basis","background-color","border-color"],e.theme.transitionControl)};
	&:hover {
		background-color: ${e=>e.theme.backgroundHover};
		color: ${e=>e.theme.textColor};
		border-left-color: ${e=>e.theme.primaryColor};
		z-index: 2;
	}
	&:focus,
	&:active {
		border-left-color: ${e=>e.theme.primaryColor};
		color: ${e=>e.theme.primaryColor};
		z-index: 1;
	}
`;function fp(e){const{onClick:t,...n}=e;return(0,r.jsx)(hp,Object.assign({},n,{onClick:e=>{e.preventDefault(),t()}}),void 0)}const pp=o.ZP.div`
	position: absolute;
	right: 1px;
	top: 1px;
	bottom: 1px;
	overflow: hidden;
	width: ${e=>Fe(.5*e.theme.controlHeightBase)};
	border-top-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-bottom-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	display: flex;
	flex-flow: column nowrap;
	align-items: stretch;

	&:hover {
		${hp} {
			&:hover {
				flex-basis: 65%;
				height: 65%;
			}
			&:not(:hover) {
				flex-basis: 35%;
				height: 35%;
			}
		}
	}
`,mp=(0,o.ZP)(Il)`
	${Rl} {
		padding-right: ${e=>Fe(.5*e.theme.controlHeightBase+2)};
		text-align: right;
		font-variant-numeric: tabular-nums;
	}
	&.${Pl}--type-MATERIAL {
		${pp} {
			bottom: 2px;
			border-bottom-right-radius: 0;
			${hp} {
				&:last-child {
					border-bottom-right-radius: 0;
				}
			}
		}
	}
`;function gp(e){const{id:t,onChange:n,value:o,prefix:a,placeholder:s,controlType:l=Dt.BOXY,controlAlignment:u=Mt.LEFT,disabled:c=!1,readOnly:d=!1,hasError:h=!1,onBlur:f,innerRef:p,className:m,size:g=ft.DEFAULT,max:v=1/0,min:y=0,step:b=1,precision:x=2,isNullable:w=!0,..._}=e,[S,E]=(0,i.useState)(!1),[C,k]=(0,i.useState)("");(0,i.useEffect)((()=>{k(o?.toFixed(x)??"")}),[o,x]);const M=B(Pe(Pl,{"has-prefix":!!a,"is-not-empty":""!==C,"is-focused":S,[`type-${l}`]:!0,"has-error":h,[`align-${u}`]:!0,[`size-${g}`]:!0},m),up),T=Pe(Oe(Pl,"input"),{[`type-${l}`]:!0,"has-error":h,[`size-${g}`]:!0},Oe(up,"input"));return(0,r.jsxs)(mp,Object.assign({className:M},{children:[a?(0,r.jsx)(Ll,{children:a},void 0):null,"string"!=typeof s?(0,r.jsx)(Fl,{children:s},void 0):null,(0,r.jsx)(Rl,Object.assign({id:t,type:"number",className:T,value:C,onChange:e=>{k(e.target.value)},onFocus:()=>{E(!0)},onBlur:e=>{if(E(!1),""===C&&w)n(null);else{let e=Sl(C,y);e=Tl(e,x),e<y&&(e=y),e>v&&(e=v),Al(e,b,y,x)||(e=function(e,t,n,r=2){if(t<=0)throw new Error(`Step cannot be less than or equal to 0, currently it is ${t}`);if(r<0)throw new Error(`Precision cannot be less than or equal to 0, currently it is ${r}`);const i=10**Math.round(Math.abs(r)),o=Math.round(t*i),a=Math.round(n*i),s=Math.round(e*i);let l=s-(s-a)%o;return l<a&&(l=a),Tl(l/i,r)}(e,b,y,x)),e=Tl(e,x),k(e.toFixed(x)),n(e)}f?.(e)},disabled:c,readOnly:d,placeholder:"string"==typeof s?s:void 0,min:y,max:v,step:b,ref:p},_),void 0),l===Dt.MATERIAL?(0,r.jsx)(Ol,{},void 0):null,(0,r.jsxs)(pp,{children:[(0,r.jsx)(fp,Object.assign({className:cp,"aria-label":bn("Increase value","wp-eform"),onClick:()=>{let e=null!==o?o+b:y;e<y&&(e=y),e>v&&(e=v),n(Tl(e,x))}},{children:(0,r.jsx)(Bl,{iconClass:"fas fa-angle-up"},void 0)}),void 0),(0,r.jsx)(fp,Object.assign({className:dp,"aria-label":bn("Decrease value","wp-eform"),onClick:()=>{let e=null!==o?o-b:y;e<y&&(e=y),e>v&&(e=v),n(Tl(e,x))}},{children:(0,r.jsx)(Bl,{iconClass:"fas fa-angle-down"},void 0)}),void 0)]},void 0)]}),void 0)}const vp="wpeform-control-slider",yp=Oe(vp,"slider"),bp=Oe(vp,"input-min"),xp=Oe(vp,"input-max"),wp=Oe(vp,"track-base"),_p=Oe(vp,"track-line"),Sp=Oe(vp,"thumb"),Ep=Oe(vp,"thumb-tack"),Cp=Oe(vp,"mark"),kp=Oe(vp,"mark-label"),Mp=o.ZP.div`
	flex: 0 0 ${e=>Fe(1.5*e.theme.controlHeightBase)};
	width: ${e=>Fe(1.5*e.theme.controlHeightBase)};
	margin: 0;

	&.${bp} {
		margin-right: ${e=>Fe(1.25*e.theme.gutter)};
	}
	&.${xp} {
		margin-left: ${e=>Fe(1.25*e.theme.gutter)};
	}
`,Tp=o.ZP.div`
	flex: 1 1 100%;
	width: 100%;
	margin: 0;
`,Dp=o.ZP.div`
	width: 100%;
	display: flex;
	align-items: center;
	height: ${e=>Fe(.75*e.theme.controlHeightBase)};
	&.${wp}--hasMarks {
		height: ${e=>Fe(1.05*e.theme.controlHeightBase+.05*e.theme.gutter)};
	}
`,Ap=o.ZP.div`
	height: ${e=>Fe(.2*e.theme.controlHeightBase)};
	width: 100%;
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	will-change: background;
	position: relative;
`,Pp=o.ZP.div`
	height: ${e=>Fe(.25*e.theme.controlHeightBase)};
	width: ${e=>Fe(.05*e.theme.controlHeightBase)};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	background-color: ${e=>e.theme.borderColorSplit};
	transition: ${e=>Le(["background-color"],e.theme.transitionControl)};
	margin: 0 ${e=>Fe(.075*e.theme.gutter)};
`,Op=o.ZP.div`
	height: ${e=>Fe(.6*e.theme.controlHeightBase)};
	width: ${e=>Fe(.75*e.theme.controlHeightBase)};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase/2)};
	background-color: ${e=>e.theme.backgroundShade};
	box-shadow: ${e=>e.theme.boxShadow2dp},
		${e=>e.theme.boxShadowNoneFocus};
	border: 1px solid ${e=>e.theme.backgroundShade};
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	transition: ${e=>Le(["box-shadow","border-color"],e.theme.transitionControl)};

	&:hover,
	&.${Sp}--isDragged {
		${Pp} {
			background-color: ${e=>e.theme.primaryColor};
		}
	}

	&:focus {
		outline: none;
		box-shadow: ${e=>e.theme.boxShadow4dp},
			${e=>e.theme.boxShadowNoneFocus};
	}

	&:focus-visible {
		outline: none;
		box-shadow: ${e=>e.theme.boxShadow2dp},
			${e=>e.theme.boxShadowControlFocus};
		border-color: ${e=>e.theme.primaryColor};
	}

	&.${Sp}--disabled {
		background-color: ${e=>e.theme.appBackgroundColor};
		box-shadow: ${e=>e.theme.boxShadow2dp},
			${e=>e.theme.boxShadowNoneFocus};
		${Pp} {
			background-color: ${e=>e.theme.disabledColor};
		}
	}
`,Rp=o.ZP.span`
	position: absolute;
	font-size: ${e=>Fe(e.theme.fz.small2)};
	font-weight: bold;
	color: ${e=>e.theme.textColorSecondary};
	left: 50%;
	top: ${e=>Fe(.3*e.theme.controlHeightBase+.05*e.theme.gutter)};
	transform: translate(-50%, 0);
	transition: ${e=>Le(["color"],e.theme.transitionControl)};
`,Fp=o.ZP.div`
	height: ${e=>Fe(.3*e.theme.controlHeightBase)};
	&:nth-child(2n) {
		height: ${e=>Fe(.2*e.theme.controlHeightBase)};
	}
	width: ${e=>Fe(.05*e.theme.controlHeightBase)};
	border-radius: ${e=>Fe(.05*e.theme.controlHeightBase)};
	background-color: ${e=>e.theme.backgroundSelected};
	margin-top: ${e=>Fe(.3*e.theme.controlHeightBase+.2*e.theme.gutter)} !important;
	transition: ${e=>Le(["background-color"],e.theme.transitionControl)};
	&.${Cp}--inRange {
		background-color: ${e=>e.theme.primaryColor};
		${Rp} {
			color: ${e=>e.theme.primaryColor};
		}
	}
`,Lp=o.ZP.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	padding: 0 0 ${e=>Fe(e.theme.gutter/4)} 0;
	&.${vp}--has-marks {
		padding-bottom: ${e=>Fe(e.theme.gutter)};
	}

	&.${vp}--control-type-MATERIAL {
		${Dp} {
			height: ${e=>Fe(.5*e.theme.controlHeightBase)};
			&.${wp}--hasMarks {
				height: ${e=>Fe(.8*e.theme.controlHeightBase+.05*e.theme.gutter)};
			}
		}
		${Ap} {
			height: ${e=>Fe(.1*e.theme.controlHeightBase)};
		}
		${Op} {
			height: ${e=>Fe(.5*e.theme.controlHeightBase)};
			width: ${e=>Fe(.5*e.theme.controlHeightBase)};
			border-radius: ${e=>Fe(.5*e.theme.controlHeightBase)};
			background-color: ${e=>e.theme.primaryColor};
			box-shadow: ${e=>e.theme.boxShadowNoneFocus};
			border: 0 none;
			&:hover,
			&:focus {
				box-shadow: 0 0 0
					${e=>Fe(.25*e.theme.controlHeightBase)}
					${e=>Ae(.8,e.theme.primaryColor)};
			}
			&.${Sp}--isDragged {
				box-shadow: 0 0 0
					${e=>Fe(.4*e.theme.controlHeightBase)}
					${e=>Ae(.8,e.theme.primaryColor)};
			}
			&.${Sp}--disabled {
				background-color: ${e=>e.theme.borderColorBase};
				box-shadow: ${e=>e.theme.boxShadowNoneFocus};
			}
		}
		${Pp} {
			display: none;
		}
	}

	&.${vp}--disabled {
		cursor: not-allowed;

		${Fp} {
			&.${Cp}--inRange {
				background-color: ${e=>e.theme.borderColorBase};
				${Rp} {
					color: ${e=>e.theme.borderColorBase};
				}
			}
		}
	}
`;function Ip(e){const{className:t,min:n,max:a,step:s,precision:l=2,controlType:u,disabled:c=!1,hasError:d,marks:h,onBlur:f,showFreeInput:p=!0}=e;if(s<=0)throw new Error(`Step cannot be less than or equal to 0, ${s} given.`);if(n>a)throw new Error(`Min value cannot be greater than max. Given min is ${n} and max is ${a}.`);const m=(0,o.Fg)(),g=(0,i.useRef)(null),v=$(g),y=Tl(Math.ceil(.05*v.width),2);let b=Tl(Math.ceil((a-n)/s),2);"range"===e.type&&(b+=1);let x,w,_=Tl(Math.ceil(b/y),2);Number.isFinite(_)||(_=1);const S=c?m.borderColorBase:m.primaryColor,E=m.borderColorSplit;return"range"===e.type?(x=e.value,w=[E,S,E]):(x=[e.value],w=[S,E]),x[0]<n&&(x[0]=n),x[1]&&x[1]>a&&(x[1]=a),(0,r.jsxs)(Lp,Object.assign({className:Pe(vp,{[`control-type-${u??Dt.BOXY}`]:!0,"has-marks":Array.isArray(h),disabled:c},t)},{children:["range"===e.type&&p?(0,r.jsx)(Mp,Object.assign({className:bp},{children:(0,r.jsx)(gp,{value:x[0],onChange:t=>{e.onChange([t??n,e.value[1]])},min:n,max:a,step:s,precision:l,hasError:d,onBlur:f,readOnly:c,controlType:u,controlAlignment:Mt.LEFT,size:ft.SMALL,isNullable:!1},void 0)}),void 0):null,(0,r.jsx)(Tp,Object.assign({className:yp,ref:g},{children:(0,r.jsx)(Yf.Range,{step:s,min:n,max:a,values:x,onChange:t=>{"range"===e.type?e.onChange([t[0],t[1]]):e.onChange(t[0])},renderTrack:({children:e,disabled:t,isDragged:i,props:o})=>(0,r.jsx)(Dp,Object.assign({className:Pe(wp,{isDragged:i,disabled:t,hasMarks:!!h}),onMouseDown:o.onMouseDown,onTouchStart:o.onTouchStart,style:o.style},{children:(0,r.jsx)(Ap,Object.assign({className:Pe(_p,{isDragged:i,disabled:t}),ref:o.ref,style:{background:Yf.getTrackBackground({values:x,colors:w,min:n,max:a})}},{children:e}),void 0)}),void 0),renderThumb:({props:e,isDragged:t})=>(0,r.jsxs)(Op,Object.assign({className:Pe(Sp,{isDragged:t,disabled:c})},e,{children:[(0,r.jsx)(Pp,{className:Ep},void 0),(0,r.jsx)(Pp,{className:Ep},void 0)]}),void 0),renderMark:h?({props:t,index:i})=>{let o=!1;const a=n+i*s;o="single"===e.type?a<=x[0]:a>=x[0]&&a<=x[1];let l=i%_==0,u=null;if(Array.isArray(h)){const e=h.find((e=>e.index===a));e&&(l=!0,u=e.label?.replace("%%val%%",a.toString())??null)}return l?(0,r.jsx)(Fp,Object.assign({className:Pe(Cp,{inRange:o})},t,{children:u?(0,r.jsx)(Rp,Object.assign({className:kp},{children:u}),void 0):null}),void 0):null}:void 0,onFinalChange:f,disabled:c},void 0)}),void 0),p?(0,r.jsx)(Mp,Object.assign({className:xp},{children:(0,r.jsx)(gp,{value:"range"===e.type?x[1]:x[0],onChange:t=>{const r=Dl(t,n);"range"===e.type?e.onChange([e.value[0],r]):e.onChange(r)},min:"range"===e.type?e.value[0]:n,max:a,step:s,precision:l,hasError:d,onBlur:f,readOnly:c,controlType:u,controlAlignment:Mt.LEFT,size:ft.SMALL,isNullable:!1},void 0)}),void 0):null]}),void 0)}const Np={id:"slider",hasSubmission:!0,FormUi({elementData:e,setElementTouched:t,submissionData:n,updateSubmissionData:i,controlType:o,hasError:a}){const s=e.config.slider;let l;return s?.interface?.showMarks&&(l=!0,s.interface.customMarks.length&&(l=s.interface.customMarks.map((e=>({index:e.index,label:e.label??""}))))),(0,r.jsx)(Ip,{max:s?.interface?.max??10,min:s?.interface?.min??0,step:s?.interface?.step??1,precision:s?.interface?.precision??2,type:"single",onChange:e=>{i(cs(n,(t=>{t.value.slider.selected=e})))},value:n.value.slider.selected,controlType:o,disabled:s?.attributes.readonly,marks:l,hasError:a,className:e.appearance?.className,onBlur:()=>{t(!0)},showFreeInput:s?.interface?.showFreeInput},void 0)},getErrors(e,t){const n=[],r=t.slider.selected,i=e.config.slider.interface;return i?(i.min&&r<i.min&&n.push(lu.sliderMinUnderFlow.replaceAll("{min}",kl(i.min,2))),i.max&&r>i.max&&n.push(lu.sliderMaxOverFlow.replaceAll("{max}",kl(i.max,2))),Al(r,i.step,i.min,i.precision)||n.push(lu.sliderStepOverFlow.replaceAll("{step}",kl(i.step,2))),n):n},isQuestion:!0,isRequired:e=>!1,setValue(e,t,n){const r=Dl(e,t.config.slider?.interface?.min);n.slider.selected=r},isConditionTrue(e,t,n,r,i){let o=!1;const a=Dl(r,Number.NaN);if(Number.isNaN(a))return ud.l(`%c ERROR %c conditional operation on slider assumes numeric value. ${r} given.`,ud.style.error,ud.style.reset),!1;const s=i.slider.selected;return n===et.EQUALS_TO?o=s===a:n===et.GREATER_THAN?o=s>a:n===et.LESS_THAN&&(o=s<a),t===nt.IS?o:!o},getDisplayValue:(e,t)=>kl(t.slider.selected,e.config.slider?.interface?.precision??2),getAnswerValue:(e,t)=>kl(t.slider.selected,e.config.slider?.interface?.precision??2),getNumericValue:(e,t)=>t.slider.selected??0,getPresetValue:(e,t)=>cs(t,(t=>{const n=e.config.slider?.interface?.min??0;if(io(e.config.slider?.attributes.defaultValue)||(t.slider.selected=Dl(e.config.slider?.attributes.defaultValue)),e.config.slider?.attributes.prefilType===xt.URL){const n=Dl(Ji(window.location.search,e.config.slider.attributes.prefilParameter),Number.NaN);Number.isFinite(n)&&(t.slider.selected=n)}if(e.config.slider?.attributes.prefilType===xt.META){const n=no(e.extras);if(n&&n.metaValue){const e=n.metaValue;"number"==typeof e&&(t.slider.selected=e)}}t.slider.selected<n&&(t.slider.selected=n)}))};var jp,$p;function zp(){return zp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zp.apply(this,arguments)}function Bp(e){return i.createElement("svg",zp({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},e),jp||(jp=i.createElement("g",{fillRule:"evenodd"},i.createElement("path",{d:"M56 0a8 8 0 018 8v48a8 8 0 01-8 8H8a8 8 0 01-8-8V8a8 8 0 018-8h48zm-4 6H12a6 6 0 00-6 6v40a6 6 0 006 6h40a6 6 0 006-6V12a6 6 0 00-6-6z"}),i.createElement("path",{d:"M25.714 47.143c.476 0 .905-.19 1.286-.572l24.571-24.428c.381-.286.572-.667.572-1.143s-.19-.905-.572-1.286l-3.142-3.143c-.381-.38-.81-.571-1.286-.571s-.857.19-1.143.571l-20.286 20-8.428-8.714A2.09 2.09 0 0016 27.43c-.476 0-.857.142-1.143.428l-3.286 3.286A1.358 1.358 0 0011 32.286c0 .476.19.904.571 1.285l13 13c.286.381.667.572 1.143.572z"}))))}function Up(){return Up=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Up.apply(this,arguments)}function Hp(e){return i.createElement("svg",Up({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},e),$p||($p=i.createElement("path",{fillRule:"evenodd",d:"M56 0a8 8 0 018 8v48a8 8 0 01-8 8H8a8 8 0 01-8-8V8a8 8 0 018-8h48zm-4 6H12a6 6 0 00-6 6v40a6 6 0 006 6h40a6 6 0 006-6V12a6 6 0 00-6-6z"})))}const Vp={id:"singlecheckbox",hasSubmission:!0,FormUi:({elementData:e,id:t,setElementTouched:n,submissionData:i,updateSubmissionData:o,controlAlignment:a})=>(0,r.jsx)(Rm,Object.assign({columns:yt.AUTO,controlAlignment:a},{children:(0,r.jsx)(Rm.Item,{children:(0,r.jsx)(ff,{checked:i.value.singlecheckbox.selected,onChange:e=>{o(cs(i,(t=>{t.value.singlecheckbox.selected=e}))),n(!0)},className:e.appearance?.className,disabled:e.config.singlecheckbox?.attributes.readonly,icon:e.config.singlecheckbox?.interface?.icon,id:t,name:t,onBlur:()=>{n(!0)},text:(0,r.jsx)(xm,{mode:"singleline",nodes:Hi(e.appearance?.title),currentElementId:e.id},void 0)},void 0)},void 0)}),void 0),getErrors(e,t){const n=[];return!!e.config.singlecheckbox?.validation?.required&&!t.singlecheckbox?.selected&&n.push(lu.requiredCheckbox),n},isQuestion:!0,isQuestionTitleHidden:!0,isRequired:e=>!!e.config.singlecheckbox?.validation?.required,setValue(e,t,n){n.singlecheckbox.selected="true"===e},isConditionTrue(e,t,n,r,i){let o=!1;const a="true"===r;return n===et.EQUALS_TO&&(o=a===i.singlecheckbox.selected),t===nt.IS?o:!o},getDisplayValue(e,t){const n=t.singlecheckbox.selected;return bn(n?"Yes":"No","wp-eform")},getNumericValue:(e,t)=>t.singlecheckbox.selected?1:0,getAnswerValue(e,t){const n=t.singlecheckbox.selected;let i=bn("Yes.","wp-eform");return n||(i=bn("No.","wp-eform")),(0,r.jsxs)("p",{children:[(0,r.jsx)(Bl,{children:n?(0,r.jsx)(Bp,{},void 0):(0,r.jsx)(Hp,{},void 0)},void 0)," ",i]},void 0)},getPresetValue:(e,t)=>cs(t,(t=>{if(io(e.config.singlecheckbox?.attributes.defaultValue)||(t.singlecheckbox.selected="true"===e.config.singlecheckbox.attributes.defaultValue),e.config.singlecheckbox?.attributes.prefilType===xt.URL){const n=Ji(window.location.search,e.config.singlecheckbox.attributes.prefilParameter);"true"===n?t.singlecheckbox.selected=!0:"false"===n&&(t.singlecheckbox.selected=!1)}if(e.config.singlecheckbox?.attributes.prefilType===xt.META){const n=no(e.extras);if(n&&n.metaValue){const e=n.metaValue;"boolean"==typeof e&&(t.singlecheckbox.selected=e)}}}))},Wp=new En("EForm Elements UI");Wp.addItem(uu.id,uu),Wp.addItem(Gh.id,Gh),Wp.addItem(Sc.id,Sc),Wp.addItem(Mh.id,Mh),Wp.addItem(qh.id,qh),Wp.addItem(Yh.id,Yh),Wp.addItem(sf.id,sf),Wp.addItem(vf.id,vf),Wp.addItem(Cf.id,Cf),Wp.addItem(Wf.id,Wf),Wp.addItem(qf.id,qf),Wp.addItem(Np.id,Np),Wp.addItem(Vp.id,Vp);var Gp={exports:{}};!function(e,t){e.exports=function(){var e=6e4,t=36e5,n="millisecond",r="second",i="minute",o="hour",a="day",s="week",l="month",u="quarter",c="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),o=n-i<0,a=t.clone().add(r+(o?-1:1),l);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:s,d:a,D:d,h:o,m:i,s:r,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=m;var x=function(e){return e instanceof E},w=function(e,t,n){var r;if(!e)return y;if("string"==typeof e)b[e]&&(r=e),t&&(b[e]=t,r=e);else{var i=e.name;b[i]=e,r=i}return!n&&r&&(y=r),r||!n&&y},_=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new E(n)},S=v;S.l=w,S.i=x,S.w=function(e,t){return _(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e)}var g=m.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(f);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var n=_(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return _(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<_(e)},g.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,u=!!S.u(t)||t,h=S.p(e),f=function(e,t){var r=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?r:r.endOf(a)},p=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case c:return u?f(1,0):f(31,11);case l:return u?f(1,g):f(0,g+1);case s:var b=this.$locale().weekStart||0,x=(m<b?m+7:m)-b;return f(u?v-x:v+(6-x),g);case a:case d:return p(y+"Hours",0);case o:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case r:return p(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var s,u=S.p(e),h="set"+(this.$u?"UTC":""),f=(s={},s[a]=h+"Date",s[d]=h+"Date",s[l]=h+"Month",s[c]=h+"FullYear",s[o]=h+"Hours",s[i]=h+"Minutes",s[r]=h+"Seconds",s[n]=h+"Milliseconds",s)[u],p=u===a?this.$D+(t-this.$W):t;if(u===l||u===c){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[S.p(e)]()},g.add=function(n,u){var d,h=this;n=Number(n);var f=S.p(u),p=function(e){var t=_(h);return S.w(t.date(t.date()+Math.round(e*n)),h)};if(f===l)return this.set(l,this.$M+n);if(f===c)return this.set(c,this.$y+n);if(f===a)return p(1);if(f===s)return p(7);var m=(d={},d[i]=e,d[o]=t,d[r]=1e3,d)[f]||1,g=this.$d.getTime()+n*m;return S.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].substr(0,o)},d=function(e){return S.s(o%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:S.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:S.s(o,2,"0"),h:d(1),hh:d(2),a:f(o,a,!0),A:f(o,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,t){return t||m[e]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,d,h){var f,p=S.p(d),m=_(n),g=(m.utcOffset()-this.utcOffset())*e,v=this-m,y=S.m(this,m);return y=(f={},f[c]=y/12,f[l]=y,f[u]=y/3,f[s]=(v-g)/6048e5,f[a]=(v-g)/864e5,f[o]=v/t,f[i]=v/e,f[r]=v/1e3,f)[p]||v,h?y:S.a(y)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return b[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=w(e,t,!0);return r&&(n.$L=r),n},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),C=E.prototype;return _.prototype=C,[["$ms",n],["$s",r],["$m",i],["$H",o],["$W",a],["$M",l],["$y",c],["$D",d]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),_.extend=function(e,t){return e.$i||(e(t,E,_),e.$i=!0),_},_.locale=w,_.isDayjs=x,_.unix=function(e){return _(1e3*e)},_.en=b[y],_.Ls=b,_.p={},_}()}(Gp);var qp=Gp.exports,Yp={exports:{}};!function(e,t){e.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.substr(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,u=e.substr(r),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,u=r.seconds,c=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var v=s||0,y=l||0,b=u||0,x=c||0;return d?new Date(Date.UTC(m,g,p,v,y,b,x+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,v,y,b,x)):new Date(m,g,p,v,y,b,x)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!==this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}()}(Yp);var Zp=Yp.exports,Xp={exports:{}};!function(e,t){e.exports=function(){var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,o){var a=i.prototype;o.utc=function(e){return new i({date:e,utc:!0,args:arguments})},a.utc=function(t){var n=o(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},a.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var s=a.parse;a.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),s.call(this,e)};var l=a.init;a.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var u=a.utcOffset;a.utcOffset=function(r,i){var o=this.$utils().u;if(o(r))return this.$u?0:o(this.$offset)?u.call(this):this.$offset;if("string"==typeof r&&null===(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],o=i[0],a=60*+i[1]+ +i[2];return 0===a?0:"+"===o?a:-a}(r)))return this;var a=Math.abs(r)<=16?60*r:r,s=this;if(i)return s.$offset=a,s.$u=0===r,s;if(0!==r){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(s=this.local().add(a+l,e)).$offset=a,s.$x.$localOffset=l}else s=this.utc();return s};var c=a.format;a.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},a.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*e},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var d=a.toDate;a.toDate=function(e){return"s"===e&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var h=a.diff;a.diff=function(e,t,n){if(e&&this.$u===e.$u)return h.call(this,e,t,n);var r=this.local(),i=o(e).local();return h.call(r,i,t,n)}}}()}(Xp);var Qp=Xp.exports,Kp={exports:{}};!function(e,t){var n;e.exports=(n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},function(e,t,r){var i=t.prototype,o=i.format;r.en.formats=n,i.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var t=this.$locale().formats,r=function(e,t){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,i){var o=i&&i.toUpperCase();return r||t[i]||n[i]||t[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))}(e,void 0===t?{}:t);return o.call(this,r)}})}(Kp);var Jp=Kp.exports,em={exports:{}};!function(e,t){e.exports=function(e,t,n){e=e||{};var r=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,n,i){return r.fromToBase(e,t,n,i)}n.en.relativeTime=i,r.fromToBase=function(t,r,o,a,s){for(var l,u,c,d=o.$locale().relativeTime||i,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,p=0;p<f;p+=1){var m=h[p];m.d&&(l=a?n(t).diff(o,m.d,!0):o.diff(t,m.d,!0));var g=(e.rounding||Math.round)(Math.abs(l));if(c=l>0,g<=m.r||!m.r){g<=1&&p>0&&(m=h[p-1]);var v=d[m.l];s&&(g=s(""+g)),u="string"==typeof v?v.replace("%d",g):v(g,r,m.l,c);break}}if(r)return u;var y=c?d.future:d.past;return"function"==typeof y?y(u):y.replace("%s",u)},r.to=function(e,t){return o(e,t,this,!0)},r.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(a(this),e)},r.fromNow=function(e){return this.from(a(this),e)}}}(em);var tm=em.exports,nm={exports:{}};!function(e,t){e.exports=function(){var e,t,n=1e3,r=6e4,i=36e5,o=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,s=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:s,months:l,days:o,hours:i,minutes:r,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof y},h=function(e,t,n){return new y(e,n,t.$l)},f=function(e){return t.p(e)+"s"},p=function(e){return e<0},m=function(e){return p(e)?Math.ceil(e):Math.floor(e)},g=function(e){return Math.abs(e)},v=function(e,t){return e?p(e)?{negative:!0,format:""+g(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function p(e,t,n){var r=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return h(e*c[f(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){r.$d[f(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var i=e.match(u);if(i){var o=i.slice(2).map((function(e){return Number(e)}));return this.$d.years=o[0],this.$d.months=o[1],this.$d.weeks=o[2],this.$d.days=o[3],this.$d.hours=o[4],this.$d.minutes=o[5],this.$d.seconds=o[6],this.calMilliseconds(),this}}return this}var g=p.prototype;return g.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*c[n]}),0)},g.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=m(e/s),e%=s,this.$d.months=m(e/l),e%=l,this.$d.days=m(e/o),e%=o,this.$d.hours=m(e/i),e%=i,this.$d.minutes=m(e/r),e%=r,this.$d.seconds=m(e/n),e%=n,this.$d.milliseconds=e},g.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var r=v(n,"D"),i=v(this.$d.hours,"H"),o=v(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var s=v(a,"S"),l=e.negative||t.negative||r.negative||i.negative||o.negative||s.negative,u=i.format||o.format||s.format?"T":"",c=(l?"-":"")+"P"+e.format+t.format+r.format+u+i.format+o.format+s.format;return"P"===c||"-P"===c?"P0D":c},g.toJSON=function(){return this.toISOString()},g.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(e,t){return t||String(r[e])}))},g.as=function(e){return this.$ms/c[f(e)]},g.get=function(e){var t=this.$ms,n=f(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?m(t/c[n]):this.$d[n],0===t?0:t},g.add=function(e,t,n){var r;return r=t?e*c[f(t)]:d(e)?e.$ms:h(e,this).$ms,h(this.$ms+r*(n?-1:1),this)},g.subtract=function(e,t){return this.add(e,t,!0)},g.locale=function(e){var t=this.clone();return t.$l=e,t},g.clone=function(){return h(this.$ms,this)},g.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},p}();return function(n,r,i){e=i,t=i().$utils(),i.duration=function(e,t){var n=i.locale();return h(e,{$l:n},t)},i.isDuration=d;var o=r.prototype.add,a=r.prototype.subtract;r.prototype.add=function(e,t){return d(e)&&(e=e.asMilliseconds()),o.bind(this)(e,t)},r.prototype.subtract=function(e,t){return d(e)&&(e=e.asMilliseconds()),a.bind(this)(e,t)}}}()}(nm);var rm=nm.exports,im={exports:{}};!function(e,t){e.exports=function(e,t,n){var r=t.prototype,i=r.format;n.en.ordinal=function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"},r.format=function(e){var t=this,n=this.$locale(),r=this.$utils(),o=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return r.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return r.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return r.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return i.bind(this)(o)}}}(im);var om=im.exports,am={exports:{}};!function(e,t){e.exports=function(){var e="month",t="quarter";return function(n,r){var i=r.prototype;i.quarter=function(e){return this.$utils().u(e)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(e-1))};var o=i.add;i.add=function(n,r){return n=Number(n),this.$utils().p(r)===t?this.add(3*n,e):o.bind(this)(n,r)};var a=i.startOf;i.startOf=function(n,r){var i=this.$utils(),o=!!i.u(r)||r;if(i.p(n)===t){var s=this.quarter()-1;return o?this.month(3*s).startOf(e).startOf("day"):this.month(3*s+2).endOf(e).endOf("day")}return a.bind(this)(n,r)}}}()}(am);var sm=am.exports,lm={exports:{}};!function(e,t){var n;e.exports=(n="day",function(e,t,r){var i=function(e){return e.add(4-e.isoWeekday(),n)},o=t.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),n);var t,o,a,s=i(this),l=(t=this.isoWeekYear(),a=4-(o=(this.$u?r.utc:r)().year(t).startOf("year")).isoWeekday(),o.isoWeekday()>4&&(a+=7),o.add(a,n));return s.diff(l,"week")+1},o.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var a=o.startOf;o.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return"isoweek"===n.p(e)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):a.bind(this)(e,t)}})}(lm);var um=lm.exports;qp.extend(om),qp.extend(sm),qp.extend(Qp),qp.extend(Jp),qp.extend(rm),qp.extend(tm),qp.extend(Zp),qp.extend(um);const cm="YYYY-MM-DD HH:mm:ss";function dm(e){let t;return t="datetime"===e?"YYYY-MM-DD HH:mm:ss":"date"===e?"YYYY-MM-DD":"HH:mm:ss",t}function hm(e){const t=qp.utc(e,cm);if(t.isValid())return t.format(cm)}function fm(e,t){if(!e)return;if("current"===e.toLowerCase().trim())return qp.unix(t??qp.utc().unix()).format(cm);const n=e.match(/\s?(current)\s?(-|\+)\s?(\d+)\s?(second|minute|hour|day|month)s?/i);if(n){const e=t??qp.utc().unix(),r="-"===n[2].trim()?-1:1,i=Number.parseInt(n[3],10),o=n[4].trim(),a={second:1,minute:60,hour:3600,day:86400};ud.debug(`matched formula == operator: ${r}, number: ${i}, unit: ${o}`);const s=e+i*a[o]*r;return qp.unix(s).format(cm)}return hm(e)}function pm(e,t){const n=qp(e,cm),r=qp(t,cm);if(!n.isValid()||!r.isValid())return null;const i=n.diff(r);return i>0?1:0===i?0:-1}function mm(e){return qp(e,cm)}function gm(e,t){return(0,i.useMemo)((()=>{let n={};try{const t=JSON.parse(e??"");if("object"==typeof t&&Object.keys(t).length){if(t["%LOGIN_LINK%"]){const e=new URL(t["%LOGIN_LINK%"]);e.searchParams.append("redirect_to",window.location.href),t["%LOGIN_LINK%"]=e.toString()}if(t["%LOGOUT_LINK%"]){const e=new URL(t["%LOGOUT_LINK%"]);e.searchParams.append("redirect_to",window.location.href),t["%LOGOUT_LINK%"]=e.toString()}n=t}}catch(e){}return t&&(n={...n,...t}),n}),[e,t])}function vm(e,t){return(0,i.useMemo)((()=>{let n={};try{const t=JSON.parse(e??"");"object"==typeof t&&Object.keys(t).length&&(t["::submissionStartDate::"]&&(t["::submissionStartDate::"]=qp.utc(t["::submissionStartDate::"]).local().format("LLL")),t["::submissionEndDate::"]&&(t["::submissionEndDate::"]=qp.utc(t["::submissionEndDate::"]).local().format("LLL")),n=t)}catch(e){}return t&&(n={...n,...t}),n}),[e,t])}function ym(e,t,n){let i=null;return t.forEach((t=>{if(t.scoreCategory===n.id){let o=n.obtained;t.fromToType===St.PERCENTAGE&&(o=n.obtained/n.outof*100),Number.isFinite(o)&&o>=t.from&&o<=t.to&&(i="name"===e?(0,r.jsx)(Tm,{mode:"singleline",nodes:Hi(t.name)},void 0):(0,r.jsx)(Tm,{mode:"multiline",nodes:Hi(t.description)},void 0))}})),i}function bm(e,t,n,i,o,a){const s=t[e],l=n[e];if(l&&s&&0===s.errors.length&&Wp.hasItem(s.type)){const e=Wp.getItem(s.type);if(e.getDisplayValue)return e.getDisplayValue(l,s.value)}return i&&"string"==typeof i[e]?i[e]:e.startsWith("::score")?function(e,t,n){if(t&&t.length&&n?.scoreLists.length&&t.length){const i=zd(t.map((e=>({id:e.scoreId,has:e.has,obtained:e.obtained,outof:e.outof}))));let o=null;if(Object.keys(i).forEach((e=>{const t=i[e];if(t.has)if(o){const n=i[o].obtained/i[o].outof,r=t.obtained/t.outof;Number.isFinite(r)&&Number.isFinite(n)&&r>n&&(o=e)}else o=e})),o){const t=n.scoreLists.find((e=>e.id===o));if("::score-obtained-high::"===e)return kl(i[o].obtained,n.precision);if("::score-outof-high::"===e)return kl(i[o].outof,n.precision);if("::score-name-high::"===e)return(0,r.jsx)(Tm,{nodes:Hi(t?.outcomeName),mode:"singleline"},void 0);if("::score-description-high::"===e)return(0,r.jsx)(Tm,{nodes:Hi(t?.outcomeDescription),mode:"multiline"},void 0);if("::score-designation-high::"===e)return ym("name",n.designations,i[o]);if("::score-designationd-high::"===e)return ym("description",n.designations,i[o])}let a=null;return n.scoreLists.forEach((t=>{const o=t.id;e===`::score-name-${o}::`?a=(0,r.jsx)(Tm,{nodes:Hi(t.outcomeName),mode:"singleline"},void 0):e===`::score-description-${o}::`?a=(0,r.jsx)(Tm,{nodes:Hi(t.outcomeDescription),mode:"multiline"},void 0):e===`::score-obtained-${o}::`?a=kl(i[o]?.obtained,n.precision):e===`::score-outof-${o}::`?a=kl(i[o]?.outof,n.precision):e===`::score-designation-${o}::`?a=ym("name",n.designations,i[o]):e===`::score-designationd-${o}::`&&(a=ym("description",n.designations,i[o]))})),a}return null}(e,a,o):null}function xm(e){const{mode:t="singleline",nodes:n,currentElementId:o,jsonMentions:a,jsonDynamicAnchorTags:s,additionalMentions:l,additionalAnchors:u}=e,c=(0,i.useMemo)((()=>o?[o]:[]),[o]),d=vm(a,l),h=gm(s,u);return(0,r.jsx)(Tm,{mode:t,nodes:n,excludeMentionsCharacters:c,additionalMentions:d,additionalDynamicAnchorTags:h},void 0)}function wm(e){const{mode:t="singleline",nodes:n}=e;return(0,r.jsx)(Tm,{mode:t,nodes:n,renderMentions:!1},void 0)}function _m(e){return(0,i.useMemo)((()=>{const t=Hi(e);return!Gi(t)&&t}),[e])}const Sm=(0,i.createContext)({});function Em(e){const{children:t,dynamicAnchors:n}=e;return(0,r.jsx)(Sm.Provider,Object.assign({value:n},{children:t}),void 0)}function Cm(e){const{leaf:t}=e;if(!t)return null;let n=t.text;return t.bold&&(n=(0,r.jsx)("strong",{children:n},void 0)),t.italic&&(n=(0,r.jsx)("em",{children:n},void 0)),t.underline&&(n=(0,r.jsx)("u",{children:n},void 0)),t.strikethrough&&(n=(0,r.jsx)("s",{children:n},void 0)),t.code&&(n=(0,r.jsx)("code",{children:n},void 0)),t.sup&&(n=(0,r.jsx)("sup",{children:n},void 0)),t.sub&&(n=(0,r.jsx)("sub",{children:n},void 0)),t.color&&(n=(0,r.jsx)("span",Object.assign({style:{color:t.color}},{children:n}),void 0)),t.fz&&(n=(0,r.jsx)("span",Object.assign({style:{fontSize:`${t.fz}%`}},{children:n}),void 0)),(0,r.jsx)("span",{children:n},void 0)}function km(e){const{element:t,mode:n,excludeMentionsCharacters:o=[],renderMentions:a,additionalMentions:s,additionalDynamicAnchorTags:l}=e,u=(0,i.useContext)(Sm);let c;if(!t)return null;const d=t.children?(0,r.jsx)(Mm,Object.assign({mode:n,excludeMentionsCharacters:o,renderMentions:a,additionalMentions:s,additionalDynamicAnchorTags:l},{children:t.children}),void 0):null;switch(t.type){case"blockquote":return(0,r.jsx)("blockquote",Object.assign({style:Be(t.align)},{children:d}),void 0);case"bulleted-list":return(0,r.jsx)("ul",Object.assign({style:Be(t.align)},{children:d}),void 0);case"heading-one":return(0,r.jsx)("h1",Object.assign({style:Be(t.align)},{children:d}),void 0);case"heading-two":return(0,r.jsx)("h2",Object.assign({style:Be(t.align)},{children:d}),void 0);case"heading-three":return(0,r.jsx)("h3",Object.assign({style:Be(t.align)},{children:d}),void 0);case"heading-four":return(0,r.jsx)("h4",Object.assign({style:Be(t.align)},{children:d}),void 0);case"heading-five":return(0,r.jsx)("h5",Object.assign({style:Be(t.align)},{children:d}),void 0);case"heading-six":return(0,r.jsx)("h6",Object.assign({style:Be(t.align)},{children:d}),void 0);case"preformatted":return(0,r.jsx)("pre",{children:d},void 0);case"list-item":return(0,r.jsx)("li",{children:d},void 0);case"numbered-list":return(0,r.jsx)("ol",Object.assign({style:Be(t.align)},{children:d}),void 0);case"link":return c=t.url,u[c]&&(c=u[c]),l&&l[c]&&(c=l[c]),(0,r.jsx)("a",Object.assign({href:c,title:t.title,target:t.target||"_self",rel:t.rel},{children:d}),void 0);case"media":return(0,r.jsx)(Zo,{element:t},void 0);case"latex":return(0,r.jsx)(Ko,{element:t},void 0);case"mentions":return!1===a?(0,r.jsx)(Jo,Object.assign({empty:!0},{children:"…"}),void 0):o.includes(t.character)?(0,r.jsx)(Jo,Object.assign({empty:!0},{children:bn("ERROR: cannot render an element inside the same element.","wp-eform")}),void 0):(0,r.jsx)(na,{additionalMentions:s,element:t},void 0);default:return"multiline"===n?(0,r.jsx)("div",Object.assign({className:"para",style:Be(t.align)},{children:d}),void 0):(0,r.jsx)("span",Object.assign({style:Be(t.align)},{children:d}),void 0)}}function Mm(e){const{children:t,mode:n,excludeMentionsCharacters:i,renderMentions:o,additionalMentions:a,additionalDynamicAnchorTags:s}=e;return t&&t.length?(0,r.jsx)(r.Fragment,{children:t.map(((e,t)=>Ei.isText(e)?(0,r.jsx)(Cm,{leaf:e},t):(0,r.jsx)(km,{excludeMentionsCharacters:i,mode:n,element:e,renderMentions:o,additionalMentions:a,additionalDynamicAnchorTags:s},t)))},void 0):null}function Tm(e){const{nodes:t,mode:n,className:i,excludeMentionsCharacters:o,renderMentions:a=!0,additionalMentions:s,additionalDynamicAnchorTags:l}=e;return Gi(t)?null:(0,r.jsx)(ia,Object.assign({className:Pe(ra,{inline:"singleline"===n},i),as:"singleline"===n?"span":"div"},{children:"multiline"===n?(0,r.jsx)(Mm,Object.assign({excludeMentionsCharacters:o,mode:n,renderMentions:a,additionalMentions:s,additionalDynamicAnchorTags:l},{children:t}),void 0):(0,r.jsx)(Mm,Object.assign({excludeMentionsCharacters:o,mode:n,renderMentions:a,additionalMentions:s,additionalDynamicAnchorTags:l},{children:[t[0]]}),void 0)}),void 0)}const Dm="wpeform-component-optiongroup",Am=o.ZP.div`
	flex: 0 0 auto;
	width: auto;
	max-width: 100%;
	padding: ${e=>Fe(e.theme.gutter/4)};
`,Pm=o.ZP.div`
	margin: ${e=>Fe(e.theme.gutter/-2)};
	display: flex;
	flex-flow: row wrap;
`,Om=o.ZP.div`
	padding: ${e=>Fe(e.theme.gutter/4)};

	&.${Dm}--column-AUTO {
		// FIX iOS bug
		${Am} {
			.${ra}--inline {
				display: inline-block;
				width: 102%;
				&:hover {
					display: inline-block;
					width: 102%;
				}
				.${ra}--inline {
					display: inline;
					width: auto;
					&:hover {
						display: inline;
						width: auto;
					}
				}
			}
		}
	}

	&.${Dm}--column-AUTO.${Dm}--align-CENTER {
		${Pm} {
			justify-content: center;
		}
	}
	&.${Dm}--column-AUTO.${Dm}--align-RIGHT {
		${Pm} {
			justify-content: flex-end;
		}
	}

	/** Sizes */
	&.${Dm}--column-FOUR,
		&.${Dm}--column-THREE,
		&.${Dm}--column-TWO,
		&.${Dm}--column-ONE {
		${Am} {
			flex-basis: 100%;
			width: 100%;
		}
	}

	/** Tablet layout */
	&.${Dm}--size-tablet {
		&.${Dm}--column-FOUR,
			&.${Dm}--column-THREE,
			&.${Dm}--column-TWO {
			${Am} {
				flex-basis: 50%;
				width: 50%;
			}
		}
	}
	/** Desktop layout */
	&.${Dm}--size-desktop {
		&.${Dm}--column-FOUR {
			${Am} {
				flex-basis: 25%;
				width: 25%;
			}
		}
		&.${Dm}--column-THREE {
			${Am} {
				flex-basis: 33.333333%;
				width: 33.333333%;
			}
		}
		&.${Dm}--column-TWO {
			${Am} {
				flex-basis: 50%;
				width: 50%;
			}
		}
	}
`;function Rm(e){const{columns:t,children:n,controlAlignment:i}=e,o=Re(jt(),Dm,{[`column-${t}`]:!0,[`align-${i}`]:!0});return(0,r.jsx)(Om,Object.assign({className:o},{children:(0,r.jsx)(Pm,{children:n},void 0)}),void 0)}Rm.Item=Am;const Fm=o.ZP.div`
	${Ie};
	font-family: ${e=>e.theme.fontFamilyBody};
	padding: ${e=>Fe(e.theme.gutter)};
	background-color: ${e=>e.theme.appBackgroundColor};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border: 1px solid ${e=>e.theme.borderColorLight};
`;function Lm(e){return(0,r.jsx)(Fm,{children:e.children},void 0)}const Im=o.ZP.div`
	${Ie}
	margin: 0 auto;
`;function Nm(){const e=(0,o.Fg)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Co,{shape:"rectangle",height:32+e.gutter/2,width:"100%",marginBottom:"small"},void 0),(0,r.jsx)(Co,{shape:"rectangle",height:2,width:"100%",marginBottom:"large"},void 0)]},void 0)}function jm(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Nm,{},void 0),(0,r.jsx)(Co,{shape:"rectangle",height:167,width:"100%",marginBottom:"large"},void 0)]},void 0)}const $m=[52,36,49,65,42,63,86,38,75,57,43,51,85,72,44,55,45,59,75,76];function zm(e){const t=(0,o.Fg)(),{widthSet:n}=e,i=$m[n%$m.length-1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Co,{shape:"rectangle",width:`${i}%`,height:1.5*t.fz.base,marginBottom:"small"},void 0),(0,r.jsx)(Co,{shape:"rectangle",width:"100%",height:92,marginBottom:"large"},void 0),(0,r.jsx)(Co,{shape:"rectangle",width:"100%",height:2,marginBottom:"large"},void 0)]},void 0)}function Bm(e){const t=(0,o.Fg)(),n=[];for(let t=0;t<e.controls;t++)n.push((0,r.jsx)(zm,{widthSet:t+1},t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Co,{shape:"rectangle",height:1.5*t.fz.small1+t.gutter/6,width:"100%",marginBottom:t.gutter/6},void 0),(0,r.jsx)(Co,{shape:"rectangle",height:1,width:"100%",marginBottom:"large"},void 0),n]},void 0)}const Um="wpeform-component-submissionskeleton";function Hm(e){const{panels:t=2,controls:n=5}=e,i=[];for(let e=0;e<t;e++)i.push((0,r.jsx)(Bm,{controls:0===e?n:3},e));return(0,r.jsx)(Im,Object.assign({className:Um},{children:(0,r.jsxs)(Lm,{children:[(0,r.jsx)(jm,{},void 0),i]},void 0)}),void 0)}Hm.PreviewToolbar=Nm;const Vm="wpeform-component-formskeleton",Wm=o.ZP.div`
	${Ie};
`,Gm=o.ZP.div`
	margin: 0 auto;
	box-shadow: ${e=>e.theme.boxShadow4dp};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	overflow: hidden;
`,qm=o.ZP.div`
	background-color: ${e=>Te(.003,e.theme.backgroundControl)};
	width: 100%;
	overflow: hidden;
	border-top-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-top-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	padding: 0 ${e=>Fe(e.theme.gutter)} 0 0;
`,Ym=o.ZP.div`
	height: ${e=>Fe(1.25*e.theme.controlHeightBase)};
	overflow: hidden;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`,Zm=o.ZP.div`
	display: flex;
	flex-flow: row nowrap;
	width: 150px;
	padding: 0 ${e=>Fe(e.theme.gutter)};
	align-items: center;
	justify-content: flex-start;
`,Xm=o.ZP.div`
	flex: 0 0 ${e=>Fe(e.theme.fz.large3)};
	width: ${e=>Fe(e.theme.fz.large3)};
	margin: 0 ${e=>Fe(e.theme.gutter/2)} 0 0;
`,Qm=o.ZP.div`
	flex: 0 0
		calc(
			100% -
				${e=>Fe(e.theme.gutter/2+e.theme.fz.large3)}
		);
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: flex-start;
`;function Km(){const e=(0,o.Fg)();return(0,r.jsxs)(Zm,{children:[(0,r.jsx)(Xm,{children:(0,r.jsx)(Co.Avatar,{height:e.fz.large3,color:"darker"},void 0)},void 0),(0,r.jsxs)(Qm,{children:[(0,r.jsx)(Co,{height:e.fz.large1,shape:"rectangle",width:"50px",marginBottom:.25*e.gutter,color:"darker"},void 0),(0,r.jsx)(Co,{height:e.fz.small2,shape:"rectangle",width:"90px",color:"darker"},void 0)]},void 0)]},void 0)}const Jm=[{title:48,subtitle:68},{title:33,subtitle:68},{title:36,subtitle:68},{title:31,subtitle:62},{title:29,subtitle:61},{title:36,subtitle:61},{title:36,subtitle:51},{title:21,subtitle:57},{title:32,subtitle:56},{title:33,subtitle:59},{title:24,subtitle:58},{title:37,subtitle:52},{title:22,subtitle:60},{title:21,subtitle:54},{title:29,subtitle:59},{title:25,subtitle:56},{title:37,subtitle:55},{title:38,subtitle:63},{title:43,subtitle:68},{title:49,subtitle:53}],eg=[[172,128,140,149],[197,167,74,137],[145,108,140,166],[178,101,108,148],[140,194,114,105],[138,123,170,115],[148,107,129,165],[129,192,140,137],[109,186,175,81],[87,166,68,154],[194,199,110,193],[133,75,93,86],[114,108,173,82],[154,126,98,110],[168,196,183,106],[92,147,170,178],[92,144,138,70],[112,119,149,116],[172,187,114,162],[153,107,150,153]];function tg(e){const{widthSet:t}=e,n=eg[t%eg.length-1];return(0,r.jsxs)(Rm,Object.assign({columns:yt.ONE,controlAlignment:Mt.LEFT},{children:[(0,r.jsx)(Rm.Item,{children:(0,r.jsx)(Co.MCQOption,{type:"radio",width:n[0]},void 0)},void 0),(0,r.jsx)(Rm.Item,{children:(0,r.jsx)(Co.MCQOption,{type:"radio",width:n[1]},void 0)},void 0)]}),void 0)}function ng(e){const{widthSet:t}=e,n=eg[t%eg.length-1];return(0,r.jsxs)(Rm,Object.assign({columns:yt.ONE,controlAlignment:Mt.LEFT},{children:[(0,r.jsx)(Rm.Item,{children:(0,r.jsx)(Co.MCQOption,{type:"checkbox",width:n[0]},void 0)},void 0),(0,r.jsx)(Rm.Item,{children:(0,r.jsx)(Co.MCQOption,{type:"checkbox",width:n[1]},void 0)},void 0),(0,r.jsx)(Rm.Item,{children:(0,r.jsx)(Co.MCQOption,{type:"checkbox",width:n[2]},void 0)},void 0),(0,r.jsx)(Rm.Item,{children:(0,r.jsx)(Co.MCQOption,{type:"checkbox",width:n[3]},void 0)},void 0)]}),void 0)}function rg(e){const{widthSet:t}=e,{title:n,subtitle:i}=Jm[t%Jm.length-1];return(0,r.jsx)(Co.Label,{titleWidth:`${n}%`,subtitleWidth:`${i}%`},void 0)}function ig(e){const{type:t,widthSet:n}=e;return(0,r.jsx)($o.Item,Object.assign({columnSize:Lt.FULL,widths:[]},{children:(0,r.jsxs)($o.Gutter,{children:[(0,r.jsx)(rg,{widthSet:n},void 0),"checkbox"===t?(0,r.jsx)(ng,{widthSet:n},void 0):"radio"===t?(0,r.jsx)(tg,{widthSet:n},void 0):"input"===t?(0,r.jsx)(Co.Text,{},void 0):(0,r.jsx)(Co.Textarea,{},void 0)]},void 0)}),void 0)}function og(e){const{panels:t=3}=e,n=[];if(t>=1)for(let e=0;e<t;e++)n.push((0,r.jsx)(Km,{},e));else n.push((0,r.jsx)(Km,{},"1"));return(0,r.jsx)(qm,{children:(0,r.jsx)(Ym,{children:n},void 0)},void 0)}function ag(e){const{controls:t=5}=e,n=[];return t<1&&n.push((0,r.jsx)(ig,{widthSet:1,type:"radio"},"0")),t>=1&&n.push((0,r.jsx)(ig,{widthSet:1,type:"radio"},"1")),t>=2&&n.push((0,r.jsx)(ig,{widthSet:2,type:"input"},"2")),t>=3&&n.push((0,r.jsx)(ig,{widthSet:3,type:"checkbox"},"3")),t>=4&&n.push((0,r.jsx)(ig,{widthSet:4,type:"textarea"},"4")),t>=5&&n.push((0,r.jsx)(ig,{widthSet:5,type:"radio"},"5")),(0,r.jsx)(r.Fragment,{children:n},void 0)}const sg=o.ZP.div`
	background-color: ${e=>e.theme.appBackgroundColor};
	border-bottom-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-bottom-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
`;function lg({panels:e=3,controls:t=5,hasEditHeader:n=!1}){return(0,r.jsxs)(Wm,Object.assign({className:Vm},{children:[n?(0,r.jsx)(Hm.PreviewToolbar,{},void 0):null,(0,r.jsxs)(Gm,{children:[(0,r.jsx)(og,{panels:e},void 0),(0,r.jsx)(sg,{children:(0,r.jsx)($o,{children:(0,r.jsx)(ag,{controls:Math.max(2,t)},void 0)},void 0)},void 0)]},void 0)]}),void 0)}lg.FormControl=ig;const ug="wpeform-component-exception",cg=Oe(ug,"header"),dg=Oe(ug,"header-inner"),hg=Oe(ug,"label"),fg=Oe(ug,"icon"),pg=Oe(ug,"content"),mg=Oe(ug,"title"),gg=Oe(ug,"body"),vg=Oe(ug,"buttons"),yg=o.ZP.header`
	background-color: ${e=>e.theme.errorColor};
	color: ${e=>e.theme.primaryBgText};
	flex: 0 0 100%;
	padding: ${e=>Fe(e.theme.gutter/2)}
		${e=>Fe(e.theme.gutter)};
	border-top-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-top-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	display: flex;
	align-items: center;
`,bg=o.ZP.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	flex: 0 0 100%;
`,xg=o.ZP.div`
	font-size: 18px;
	flex: 0 0 ${e=>Fe(18+1.5*e.theme.gutter)};
	height: ${e=>Fe(18+1.5*e.theme.gutter)};
	width: ${e=>Fe(18+1.5*e.theme.gutter)};
	border-radius: ${e=>Fe(18+1.5*e.theme.gutter)};
	border: 4px solid ${e=>e.theme.appBackgroundColor};
	background-color: ${e=>e.theme.errorBackgroundColor};
	color: ${e=>e.theme.errorColor};
	margin: 0 ${e=>Fe(e.theme.gutter)} 0 0;
	padding: ${e=>Fe(e.theme.gutter)};
	display: flex;
	justify-content: center;
	align-items: center;
`,wg=o.ZP.p`
	margin: 0;
	padding: 0;
	font-size: ${e=>Fe(e.theme.fz.large1)};
	color: ${e=>e.theme.primaryBgText};
	text-transform: uppercase;
	font-weight: bold;
`,_g=o.ZP.article`
	flex: 0 0 100%;
`,Sg=o.ZP.h3`
	margin: ${e=>Fe(e.theme.gutter)} 0;
	color: ${e=>e.theme.headingColor};
	padding: 0 ${e=>Fe(e.theme.gutter)};
	font-size: ${e=>Fe(e.theme.fz.large2)};
`,Eg=o.ZP.div`
	padding: 0 ${e=>Fe(e.theme.gutter)};
	${je};
`,Cg=o.ZP.footer`
	background-color: ${e=>e.theme.disabledBackgroundColor};
	margin: ${e=>Fe(e.theme.gutter)} 0 0 0;
	padding: ${e=>Fe(e.theme.gutter/4)}
		${e=>Fe(e.theme.gutter/2)};
	border-bottom-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	border-bottom-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-flow: row wrap;
	> * {
		flex: 0 0 auto;
		margin: ${e=>Fe(e.theme.gutter/4)}
			${e=>Fe(e.theme.gutter/2)};
	}
`,kg=o.ZP.section`
	width: 600px;
	max-width: calc(100% - ${e=>Fe(2*e.theme.gutter)});
	margin: ${e=>Fe(e.theme.gutter)} auto;
	background-color: ${e=>e.theme.appBackgroundColor};
	border-radius: ${e=>Fe(e.theme.borderRadiusBase)};
	box-shadow: ${e=>e.theme.boxShadowBase};
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	justify-content: center;

	&.${ug}--size-tablet {
		${yg} {
			flex: 0 0 200px;
			margin: 0;
			border-radius: 0;
			border-top-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};
			border-bottom-left-radius: ${e=>Fe(e.theme.borderRadiusBase)};

			${bg} {
				flex-flow: row wrap;
				align-items: center;
				justify-content: center;
			}

			${xg} {
				margin: 0 0 ${e=>Fe(e.theme.gutter)} 0;
				font-size: 36px;
				flex: 0 0 ${e=>Fe(36+2*e.theme.gutter)};
				height: ${e=>Fe(36+2*e.theme.gutter)};
				width: ${e=>Fe(36+2*e.theme.gutter)};
				border-radius: ${e=>Fe(36+2*e.theme.gutter)};
				border: 6px solid ${e=>e.theme.appBackgroundColor};
			}
			${wg} {
				text-align: center;
				flex: 0 0 100%;
			}
		}
		${_g} {
			flex: 0 0 calc(100% - 200px);

			${Eg} {
				min-height: 100px;
			}

			${Cg} {
				border-radius: 0;
				border-top-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
				border-bottom-right-radius: ${e=>Fe(e.theme.borderRadiusBase)};
			}
		}
	}