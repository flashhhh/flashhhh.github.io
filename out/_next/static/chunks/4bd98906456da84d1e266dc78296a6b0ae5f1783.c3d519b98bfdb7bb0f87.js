(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3K3x":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("q1tI"),i=r.n(n).a.createElement,o="https://iobnm1te67.execute-api.eu-central-1.amazonaws.com/default/mailchimp-subscribe";function s(){var e=Object(n.useState)(""),t=e[0],r=e[1],s=Object(n.useState)(!1),a=s[0],u=s[1];if(a)return i("div",{className:"h-20 mb-10 text-center"},"Done! Thank you.");return i("form",{onSubmit:function(e){e.preventDefault(),fetch(o,{method:"post",body:JSON.stringify({email:t})}),u(!0)},className:"h-20 w-88 mx-auto mb-8 text-center",style:{maxWidth:"90%"}},i("span",{className:"block text-lg mb-2"},"Get latest posts and extra content"),i("div",{className:"h-8 flex"},i("input",{type:"email",value:t,placeholder:"Email",onChange:function(e){return r(e.target.value)},className:"w-3/4 px-2 border border-primary mr-2 outline-none rounded-none"}),i("input",{type:"submit",value:"Subscribe",className:"w-1/4 flex-shrink-none bg-primary text-back border border-primary cursor-pointer placeholder-faded hover:text-primary hover:bg-back rounded-none",style:{minWidth:"80px"}})))}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var n,i=r("q1tI");var o=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return o.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=s},"4NV/":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("q1tI"),i=r.n(n).a.createElement;function o(){return i("hr",{className:"mx-auto w-3/4 h-1px border-t-1 border-faded mt-4 mb-10"})}},"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return f}));var n=r("q1tI"),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"===typeof e?e(t):a({},t,{},e)),r},h=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return r?i.a.createElement(m,a({ref:t},c,{components:r})):i.a.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"===typeof e?e:n,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},"8oxB":function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,h=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||l||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},AveK:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),i=r.n(n),o=r("gRv6"),s=r("4NV/"),a=r("3K3x"),u=i.a.createElement,c=function(e){return u("div",{className:"fade-in font-serif mx-auto",style:{maxWidth:"90%",width:"44rem"}},u("header",null,u(o.a,{href:"/"},u("h1",{className:"text-center block mt-12 mb-1 text-5xl"},"Kirill Rogovoy")),u("div",{className:"mx-auto text-lg text-center"},"Code \xb7 Design \xb7 Workout \xb7 Travel \xb7 Beer"),u("div",{className:"text-center"},u(o.a,{style:1,href:"/"},"About")," \xb7 ",u(o.a,{style:1,href:"https://twitter.com/krogovoy"},"Twitter")," \xb7 ",u(o.a,{style:1,href:"/blog"},"Blog"))),u(s.a,null),u(a.a,null),u("main",null,e.children))}},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("9kyW")),i=o(r("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),o=t+i;return e[o]||(e[o]="jsx-"+(0,n.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var o=this.computeId(i,n);return{styleId:o,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},XmLi:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"c",(function(){return j})),r.d(t,"a",(function(){return k})),r.d(t,"b",(function(){return O}));var i=r("q1tI"),o=r.n(i),s=r("MX0m"),a=r.n(s),u=r("8Kt/"),c=r.n(u),l=r("nOHt"),h=r("AveK"),d=r("cBT1"),p=r("4NV/"),m=r("3K3x"),f=r("gRv6"),v=o.a.createElement;function g(e){var t=e.article,r=e.children,n=Object(l.useRouter)();return v(h.a,null,v(c.a,null,v("title",{className:"jsx-1081535726"},t.title+" \u2014 Kirill Rogovoy"),v("meta",{name:"og:title",content:t.title,className:"jsx-1081535726"}),v("meta",{name:"og:image",content:"/".concat(t.id,".jpg"),className:"jsx-1081535726"}),v("meta",{name:"description",content:t.description,className:"jsx-1081535726"}),v("meta",{name:"og:description",content:t.description,className:"jsx-1081535726"}),v("meta",{name:"keywords",content:t.keywords.join(","),className:"jsx-1081535726"})),t.tweetId&&v(w,{text:t.title,path:n.asPath}),v(f.a,{style:1,href:"/blog"},"<-"," Back to the list"),v("div",{className:"jsx-1081535726 mb-12"},v("h1",{className:"jsx-1081535726 text-link2 text-5xl leading-tight"},t.title),v("div",{className:"jsx-1081535726 italic"},"Published ",t.date)),v("div",{className:"jsx-1081535726 markdown mb-10"},r),v(p.a,null),v("div",{className:"jsx-1081535726"},v("div",{className:"jsx-1081535726 text-center mb-2"},t.tweetId?v(o.a.Fragment,null,v(f.a,{style:2,href:"https://twitter.com/krogovoy/status/".concat(t.tweetId)},"Discuss")," ","or"," ",v(f.a,{style:2,href:_(t.title,n.asPath),newTab:!0},"Share")," ","on Twitter"):v(o.a.Fragment,null,"Follow me on"," ",v(f.a,{style:2,href:"https://twitter.com/krogovoy"},"Twitter")," ","or check out my"," ",v(f.a,{style:2,href:"https://github.com/kirillrogovoy"},"Github"))),v(m.a,null)),v(y,{currentArticleId:t.id}),v(a.a,{id:"1081535726"},[".markdown{font-size:21px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;line-height:32px;text-align:start;}",".markdown img{width:100%;margin-top:15px;}",".markdown h2{font-size:34px;line-height:39px;margin:56px 0 0 0;}",".markdown h2+p{margin-top:13px;}",".markdown p{margin:29px 0 0 0;}",".markdown ul,.markdown ol{margin-top:5px;}",".markdown li{list-style-type:square;}"]))}function y(e){var t=O(3,e.currentArticleId);return 0===t.length?null:v("div",null,v("h3",{className:"text-xl"},"Other articles:"),v(d.a,{articles:t}))}function _(e,t){var r=new URL("https://rogovoy.me");r.pathname=t;var n=new URL("https://twitter.com/intent/tweet");return n.searchParams.append("text",e),n.searchParams.append("url",r.toString()),n.searchParams.append("via","krogovoy"),n.toString()}function w(e){var t=_(e.text,e.path);return v("a",{style:{position:"fixed",top:0,left:"80%",width:"50px"},target:"_blank",rel:"noreferrer noopener",href:t.toString()},v("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 455.731 455.731",xmlSpace:"preserve"}," ",v("g",null," ",v("rect",{x:0,y:0,style:{fill:"#333"},width:"455.731",height:"455.731"})," ",v("path",{style:{fill:"#FFFFFF"},d:"M60.377,337.822c30.33,19.236,66.308,30.368,104.875,30.368c108.349,0,196.18-87.841,196.18-196.18 c0-2.705-0.057-5.39-0.161-8.067c3.919-3.084,28.157-22.511,34.098-35c0,0-19.683,8.18-38.947,10.107 c-0.038,0-0.085,0.009-0.123,0.009c0,0,0.038-0.019,0.104-0.066c1.775-1.186,26.591-18.079,29.951-38.207 c0,0-13.922,7.431-33.415,13.932c-3.227,1.072-6.605,2.126-10.088,3.103c-12.565-13.41-30.425-21.78-50.25-21.78 c-38.027,0-68.841,30.805-68.841,68.803c0,5.362,0.617,10.581,1.784,15.592c-5.314-0.218-86.237-4.755-141.289-71.423 c0,0-32.902,44.917,19.607,91.105c0,0-15.962-0.636-29.733-8.864c0,0-5.058,54.416,54.407,68.329c0,0-11.701,4.432-30.368,1.272 c0,0,10.439,43.968,63.271,48.077c0,0-41.777,37.74-101.081,28.885L60.377,337.822z"})," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," ",v("g",null," ")," "))}var b=r("7ljp"),S=o.a.createElement,x=[{id:"here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about",date:"01.02.2018",title:"Here are some amazing advantages of Go that you don\u2019t hear much about",description:"I discuss why you should give Go a chance and where to start.",keywords:["golang"],origin:"https://freecodecamp.org/news/here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about-1af99de3b23a/"},{id:"test",date:"01.02.2018",title:"Here are some amazing advantages of go that you dont hear much about",description:"test description",keywords:["test"],hidden:!1,tweetId:"1162459837910978561"}];function j(e,t){var r=x.find((function(t){return t.id===e})),n={a:function(e){return S(f.a,{href:e.href,style:2},e.children)}};return S(g,{article:r},S(b.a,{components:n},S(t,null)))}function k(){return x.filter((function(e){return!e.hidden}))}function O(e,t){return function(e){for(var t=n(e),r=t.length-1;r>0;r--){var i=Math.floor(Math.random()*(r+1)),o=[t[i],t[r]];t[r]=o[0],t[i]=o[1]}return t}(k().filter((function(e){return e.id!==t}))).slice(0,e)}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,o=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,o,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,o),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,r("8oxB"))},cBT1:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("q1tI"),i=r.n(n),o=r("gRv6"),s=i.a.createElement,a=function(e){var t=e.articles;return s("div",{className:"mx-auto"},s("ul",null,t.map((function(e){return s("li",{key:e.id,className:"text-xl mb-8 list-square"},e.origin?s(o.a,{style:2,href:e.origin,newTab:!0},"".concat(e.title,", ").concat(new URL(e.origin).hostname)):s(o.a,{style:2,href:"/blog/".concat(e.id)},e.title),s("span",{className:"text-sm"},s("span",null," \u2014 "),e.date),s("span",{className:"block text-sm"},e.description))}))))}}}]);