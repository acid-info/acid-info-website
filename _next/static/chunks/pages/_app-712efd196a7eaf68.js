(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3847)}])},8654:function(e,n,t){"use strict";t.d(n,{D:function(){return c},A:function(){return l}});var o=t(5893),r=t(7294),i=t(4775),a=(t(9447),{config:i,sitemap:t(2057),codeBlockStyle:t(1768)}),s=(0,r.createContext)(a),c=function(e){var n=e.children;return(0,o.jsx)(s.Provider,{value:a,children:n})},l=function(){return(0,r.useContext)(s)}},8027:function(e,n,t){"use strict";t.d(n,{t:function(){return f},h:function(){return m}});var o=t(5893),r=t(7294),i=t(8402),a=function(e){for(var n=[],t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],o=0;o<e.length;o+=2){var r=16*parseInt(e[o],16),i=parseInt(e[o+1],16)+r;i/=255,n.push(i.toFixed(2))}var a=n[0],s=n[1],c=n[2];return t[0]=a,t[6]=s,t[12]=c,t.join(" ")},s=t(8654),c=t(3457),l=t.n(c),u=i.h.EThemeMode,d={mode:u.DARK,toggleMode:function(){}},p=(0,r.createContext)(d),f=function(e){var n=e.children,t=(0,r.useState)(e.mode||d.mode),i=t[0],c=t[1],f=(0,s.A)().config.theme.palettes[u.DARK],m=f.background.replace("#","");return(0,o.jsxs)(p.Provider,{value:{mode:i,toggleMode:function(){if(window){var e=i===u.DARK?u.LIGHT:u.DARK;document.body.className=e,c(e)}}},children:[(0,o.jsx)("svg",{width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:(0,o.jsx)("defs",{children:(0,o.jsx)("filter",{id:"colored",children:"000000"===m?(0,o.jsx)("feColorMatrix",{type:"matrix",values:"0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"}):(0,o.jsx)("feColorMatrix",{type:"matrix",values:a(m)})})})}),(0,o.jsx)(l(),{color:f.text,startPosition:.3,stopDelayMs:200,height:3,showOnShallow:!0,options:{},nonce:"logos"}),n]})},m=function(){return(0,r.useContext)(p)}},3847:function(e,n,t){"use strict";t.r(n);var o=t(5893),r=t(8654),i=t(8027);t(535),t(6774),t(1039);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){a(e,n,t[n])}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.Component,t=e.pageProps,a=t.children,l=c(t,["children"]);return(0,o.jsx)(r.D,{children:(0,o.jsx)(i.t,{children:(0,o.jsx)(n,s({},l,{children:a}))})})}},8402:function(e,n,t){"use strict";var o,r,i;t.d(n,{h:function(){return o}}),i=o||(o={}),(r=i.EThemeMode||(i.EThemeMode={})).DARK="dark",r.LIGHT="light"},535:function(){},6774:function(){},1039:function(){},1163:function(e,n,t){e.exports=t(880)},3457:function(e,n,t){var o,r=Object.create,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=e=>i(e,"__esModule",{value:!0}),d=(e,n)=>i(e,"name",{value:n,configurable:!0}),p=(e,n,t,o)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let r of s(n))!l.call(e,r)&&(t||"default"!==r)&&i(e,r,{get:()=>n[r],enumerable:!(o=a(n,r))||o.enumerable});return e},f=(e,n)=>p(u(i(null!=e?r(c(e)):{},"default",!n&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),m=(o="undefined"!=typeof WeakMap?new WeakMap:0,(e,n)=>o&&o.get(e)||(n=p(u({}),e,1),o&&o.set(e,n),n)),g={};((e,n)=>{for(var t in n)i(e,t,{get:n[t],enumerable:!0})})(g,{default:()=>x});var h=f(t(1163)),b=f(t(4865)),v=f(t(5697)),y=f(t(7294));function x({color:e="#29D",startPosition:n=.3,stopDelayMs:t=200,height:o=3,showOnShallow:r=!0,options:i,nonce:a}){let s=null;y.useEffect((()=>(i&&b.configure(i),h.default.events.on("routeChangeStart",c),h.default.events.on("routeChangeComplete",l),h.default.events.on("routeChangeError",l),()=>{h.default.events.off("routeChangeStart",c),h.default.events.off("routeChangeComplete",l),h.default.events.off("routeChangeError",l)})),[]);let c=d(((e,{shallow:t})=>{(!t||r)&&(b.set(n),b.start())}),"routeChangeStart"),l=d(((e,{shallow:n})=>{(!n||r)&&(s&&clearTimeout(s),s=setTimeout((()=>{b.done(!0)}),t))}),"routeChangeEnd");return y.createElement("style",{nonce:a},`\n      #nprogress {\n        pointer-events: none;\n      }\n      #nprogress .bar {\n        background: ${e};\n        position: fixed;\n        z-index: 9999;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: ${o}px;\n      }\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px ${e}, 0 0 5px ${e};\n        opacity: 1;\n        -webkit-transform: rotate(3deg) translate(0px, -4px);\n        -ms-transform: rotate(3deg) translate(0px, -4px);\n        transform: rotate(3deg) translate(0px, -4px);\n      }\n      #nprogress .spinner {\n        display: block;\n        position: fixed;\n        z-index: 1031;\n        top: 15px;\n        right: 15px;\n      }\n      #nprogress .spinner-icon {\n        width: 18px;\n        height: 18px;\n        box-sizing: border-box;\n        border: solid 2px transparent;\n        border-top-color: ${e};\n        border-left-color: ${e};\n        border-radius: 50%;\n        -webkit-animation: nprogresss-spinner 400ms linear infinite;\n        animation: nprogress-spinner 400ms linear infinite;\n      }\n      .nprogress-custom-parent {\n        overflow: hidden;\n        position: relative;\n      }\n      .nprogress-custom-parent #nprogress .spinner,\n      .nprogress-custom-parent #nprogress .bar {\n        position: absolute;\n      }\n      @-webkit-keyframes nprogress-spinner {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n        }\n      }\n      @keyframes nprogress-spinner {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    `)}d(x,"NextNProgress"),x.propTypes={color:v.string,startPosition:v.number,stopDelayMs:v.number,height:v.number,showOnShallow:v.bool,options:v.object,nonce:v.string},e.exports=m(g)},4865:function(e,n,t){var o,r;o=function(){var e={version:"0.2.0"},n=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function t(e,n,t){return e<n?n:e>t?t:e}function o(e){return 100*(-1+e)}function r(e,t,r){var i;return(i="translate3d"===n.positionUsing?{transform:"translate3d("+o(e)+"%,0,0)"}:"translate"===n.positionUsing?{transform:"translate("+o(e)+"%,0)"}:{"margin-left":o(e)+"%"}).transition="all "+t+"ms "+r,i}e.configure=function(e){var t,o;for(t in e)void 0!==(o=e[t])&&e.hasOwnProperty(t)&&(n[t]=o);return this},e.status=null,e.set=function(o){var s=e.isStarted();o=t(o,n.minimum,1),e.status=1===o?null:o;var c=e.render(!s),l=c.querySelector(n.barSelector),u=n.speed,d=n.easing;return c.offsetWidth,i((function(t){""===n.positionUsing&&(n.positionUsing=e.getPositioningCSS()),a(l,r(o,u,d)),1===o?(a(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){a(c,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){e.remove(),t()}),u)}),u)):setTimeout(t,u)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var t=function(){setTimeout((function(){e.status&&(e.trickle(),t())}),n.trickleSpeed)};return n.trickle&&t(),this},e.done=function(n){return n||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(n){var o=e.status;return o?("number"!==typeof n&&(n=(1-o)*t(Math.random()*o,.1,.95)),o=t(o+n,0,.994),e.set(o)):e.start()},e.trickle=function(){return e.inc(Math.random()*n.trickleRate)},function(){var n=0,t=0;e.promise=function(o){return o&&"resolved"!==o.state()?(0===t&&e.start(),n++,t++,o.always((function(){0===--t?(n=0,e.done()):e.set((n-t)/n)})),this):this}}(),e.render=function(t){if(e.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=n.template;var i,s=r.querySelector(n.barSelector),l=t?"-100":o(e.status||0),u=document.querySelector(n.parent);return a(s,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),n.showSpinner||(i=r.querySelector(n.spinnerSelector))&&d(i),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(r),r},e.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(n.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&d(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective"in e?"translate3d":n+"Transform"in e?"translate":"margin"};var i=function(){var e=[];function n(){var t=e.shift();t&&t(n)}return function(t){e.push(t),1==e.length&&n()}}(),a=function(){var e=["Webkit","O","Moz","ms"],n={};function t(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,n){return n.toUpperCase()}))}function o(n){var t=document.body.style;if(n in t)return n;for(var o,r=e.length,i=n.charAt(0).toUpperCase()+n.slice(1);r--;)if((o=e[r]+i)in t)return o;return n}function r(e){return e=t(e),n[e]||(n[e]=o(e))}function i(e,n,t){n=r(n),e.style[n]=t}return function(e,n){var t,o,r=arguments;if(2==r.length)for(t in n)void 0!==(o=n[t])&&n.hasOwnProperty(t)&&i(e,t,o);else i(e,r[1],r[2])}}();function s(e,n){return("string"==typeof e?e:u(e)).indexOf(" "+n+" ")>=0}function c(e,n){var t=u(e),o=t+n;s(t,n)||(e.className=o.substring(1))}function l(e,n){var t,o=u(e);s(e,n)&&(t=o.replace(" "+n+" "," "),e.className=t.substring(1,t.length-1))}function u(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function d(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e},void 0===(r="function"===typeof o?o.call(n,t,n,e):o)||(e.exports=r)},2703:function(e,n,t){"use strict";var o=t(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1768:function(e){"use strict";e.exports=JSON.parse('{"code[class*=\\"language-\\"]":{"fontFamily":"Consolas, Menlo, Monaco, \\"Andale Mono WT\\", \\"Andale Mono\\", \\"Lucida Console\\", \\"Lucida Sans Typewriter\\", \\"DejaVu Sans Mono\\", \\"Bitstream Vera Sans Mono\\", \\"Liberation Mono\\", \\"Nimbus Mono L\\", \\"Courier New\\", Courier, monospace","fontSize":"14px","lineHeight":"1.375","direction":"ltr","textAlign":"left","whiteSpace":"pre","wordSpacing":"normal","wordBreak":"normal","MozTabSize":"4","OTabSize":"4","tabSize":"4","WebkitHyphens":"none","MozHyphens":"none","msHyphens":"none","hyphens":"none","background":"#2a2734","color":"#9a86fd"},"pre[class*=\\"language-\\"]":{"fontFamily":"Consolas, Menlo, Monaco, \\"Andale Mono WT\\", \\"Andale Mono\\", \\"Lucida Console\\", \\"Lucida Sans Typewriter\\", \\"DejaVu Sans Mono\\", \\"Bitstream Vera Sans Mono\\", \\"Liberation Mono\\", \\"Nimbus Mono L\\", \\"Courier New\\", Courier, monospace","fontSize":"14px","lineHeight":"1.375","direction":"ltr","textAlign":"left","whiteSpace":"pre","wordSpacing":"normal","wordBreak":"normal","MozTabSize":"4","OTabSize":"4","tabSize":"4","WebkitHyphens":"none","MozHyphens":"none","msHyphens":"none","hyphens":"none","background":"#2a2734","color":"#9a86fd","padding":"1em","margin":".5em 0","overflow":"auto"},"pre > code[class*=\\"language-\\"]":{"fontSize":"1em"},"pre[class*=\\"language-\\"]::-moz-selection":{"textShadow":"none","background":"#6a51e6"},"pre[class*=\\"language-\\"] ::-moz-selection":{"textShadow":"none","background":"#6a51e6"},"code[class*=\\"language-\\"]::-moz-selection":{"textShadow":"none","background":"#6a51e6"},"code[class*=\\"language-\\"] ::-moz-selection":{"textShadow":"none","background":"#6a51e6"},"pre[class*=\\"language-\\"]::selection":{"textShadow":"none","background":"#6a51e6"},"pre[class*=\\"language-\\"] ::selection":{"textShadow":"none","background":"#6a51e6"},"code[class*=\\"language-\\"]::selection":{"textShadow":"none","background":"#6a51e6"},"code[class*=\\"language-\\"] ::selection":{"textShadow":"none","background":"#6a51e6"},":not(pre) > code[class*=\\"language-\\"]":{"padding":".1em","borderRadius":".3em"},"comment":{"color":"#6c6783"},"prolog":{"color":"#6c6783"},"doctype":{"color":"#6c6783"},"cdata":{"color":"#6c6783"},"punctuation":{"color":"#6c6783"},"namespace":{"Opacity":".7"},"tag":{"color":"#e09142"},"operator":{"color":"#e09142"},"number":{"color":"#e09142"},"property":{"color":"#9a86fd"},"function":{"color":"#9a86fd"},"tag-id":{"color":"#eeebff"},"selector":{"color":"#eeebff"},"atrule-id":{"color":"#eeebff"},"code.language-javascript":{"color":"#c4b9fe"},"attr-name":{"color":"#c4b9fe"},"code.language-css":{"color":"#ffcc99"},"code.language-scss":{"color":"#ffcc99"},"boolean":{"color":"#ffcc99"},"string":{"color":"#ffcc99"},"entity":{"color":"#ffcc99","cursor":"help"},"url":{"color":"#ffcc99"},".language-css .token.string":{"color":"#ffcc99"},".language-scss .token.string":{"color":"#ffcc99"},".style .token.string":{"color":"#ffcc99"},"attr-value":{"color":"#ffcc99"},"keyword":{"color":"#ffcc99"},"control":{"color":"#ffcc99"},"directive":{"color":"#ffcc99"},"unit":{"color":"#ffcc99"},"statement":{"color":"#ffcc99"},"regex":{"color":"#ffcc99"},"atrule":{"color":"#ffcc99"},"placeholder":{"color":"#ffcc99"},"variable":{"color":"#ffcc99"},"deleted":{"textDecoration":"line-through"},"inserted":{"borderBottom":"1px dotted #eeebff","textDecoration":"none"},"italic":{"fontStyle":"italic"},"important":{"fontWeight":"bold","color":"#c4b9fe"},"bold":{"fontWeight":"bold"},"pre > code.highlight":{"Outline":".4em solid #8a75f5","OutlineOffset":".4em"},".line-numbers.line-numbers .line-numbers-rows":{"borderRightColor":"#2c2937"},".line-numbers .line-numbers-rows > span:before":{"color":"#3c3949"},".line-highlight.line-highlight":{"background":"linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"}}')},4775:function(e){"use strict";e.exports=JSON.parse('{"theme":{"palettes":{"dark":{"background":"#000000","text":"#FFFFFF","accentActive":"#7187ff","accentMute":"#30363d"},"light":{"background":"#FFFFFF","text":"#000000","accentActive":"#7187ff","accentMute":"#dedede"}},"fontFamily":"monospace","codeTheme":"prism/duotone-dark"},"template":"default","static_assets_folder":"static-assets","navigation":{"home":"acid.md","fileOrdersInSidenav":[],"folderOrdersInSidenav":[],"external_links":[],"exclude":["join-us"],"homeTitle":"Manifesto"},"ds_id":"acid_info","seo":{"title":"Acid.info","description":"The future is a second enlightenment of the digital world.","image":"Acid-Linkpreview-1600x800.png","url":"https://acid.info","social_media":[{"provider":"twitter","handler":"ac1d_info"},{"provider":"github","handler":"acid-info"}]}}')},2057:function(e){"use strict";e.exports=JSON.parse('[{"metadata":{"published":true,"title":"Manifesto"},"navOrder":-1,"localPath":"acid.md","path":[],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Community Marketing & Communications Strategist"},"navOrder":-1,"localPath":"join-us/community-marketing-&-communications-strategist.md","path":["join-us","community-marketing-communications-strategist"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Digital Communications Lead"},"navOrder":-1,"localPath":"join-us/digital-communications-lead.md","path":["join-us","digital-communications-lead"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Grassroots Community Organizer"},"navOrder":-1,"localPath":"join-us/grassroots-community-organizer.md","path":["join-us","grassroots-community-organizer"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Head of Copy"},"navOrder":-1,"localPath":"join-us/head-of-copy.md","path":["join-us","head-of-copy"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"join-us"},"navOrder":-1,"localPath":"join-us/index.md","path":["join-us"],"children":[],"isDir":true},{"metadata":{"published":true,"title":"Senior UI/UX Designer"},"navOrder":-1,"localPath":"join-us/senior-ui-designer.md","path":["join-us","senior-ui-designer"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Web Developer","category":"jobs"},"navOrder":-1,"localPath":"join-us/web-developer.md","path":["join-us","web-developer"],"children":[],"isDir":false}]')},9447:function(e){"use strict";e.exports=JSON.parse('{"metadata":{"published":true,"title":"docs"},"navOrder":-1,"localPath":"","path":[""],"children":[{"metadata":{"published":true,"title":"Manifesto"},"navOrder":-1,"localPath":"acid.md","path":[],"children":[],"isDir":false},{"metadata":{"published":true,"title":"join-us"},"navOrder":-1,"localPath":"join-us/index.md","path":["join-us"],"children":[{"metadata":{"published":true,"title":"Community Marketing & Communications Strategist"},"navOrder":-1,"localPath":"join-us/community-marketing-&-communications-strategist.md","path":["join-us","community-marketing-communications-strategist"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Digital Communications Lead"},"navOrder":-1,"localPath":"join-us/digital-communications-lead.md","path":["join-us","digital-communications-lead"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Grassroots Community Organizer"},"navOrder":-1,"localPath":"join-us/grassroots-community-organizer.md","path":["join-us","grassroots-community-organizer"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Head of Copy"},"navOrder":-1,"localPath":"join-us/head-of-copy.md","path":["join-us","head-of-copy"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Senior UI/UX Designer"},"navOrder":-1,"localPath":"join-us/senior-ui-designer.md","path":["join-us","senior-ui-designer"],"children":[],"isDir":false},{"metadata":{"published":true,"title":"Web Developer","category":"jobs"},"navOrder":-1,"localPath":"join-us/web-developer.md","path":["join-us","web-developer"],"children":[],"isDir":false}],"isDir":true}]}')}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(880)}));var t=e.O();_N_E=t}]);