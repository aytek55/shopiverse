"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[6840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(n),m=s,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[l]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={sidebar_label:"Getting Tokens"},i="Receiving Tokens",a={unversionedId:"api/auth/auth",id:"api/auth/auth",title:"Receiving Tokens",description:"Requests",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api/auth/auth.md",sourceDirName:"api/auth",slug:"/api/auth/",permalink:"/shopiverse/en/docs/api/auth/",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Getting Tokens"},sidebar:"apiSidebar",previous:{title:"Yetkilendirme",permalink:"/shopiverse/en/docs/category/yetkilendirme"},next:{title:"Sipari\u015fler",permalink:"/shopiverse/en/docs/category/sipari\u015fler"}},p={},c=[{value:"Requests",id:"requests",level:3},{value:"Responses",id:"responses",level:3},{value:"Code 200 Success Response",id:"code-200-success-response",level:4}],u={toc:c};function l(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"receiving-tokens"},"Receiving Tokens"),(0,s.kt)("h3",{id:"requests"},"Requests"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"AutRequest",src:n(37183).Z,width:"899",height:"309"})),(0,s.kt)("p",null,"You can access your ",(0,s.kt)("strong",{parentName:"p"},"Api-Key (Required)")," parameter information from the ",(0,s.kt)("strong",{parentName:"p"},"Home Page > Settings > Api Definitions")," section in the Shopiverse panel."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ApiKey",src:n(6518).Z,width:"1113",height:"609"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You can try the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://api.shopiverse.com/swagger/index.html",title:"Auth Api OwmToken"},"Auth Api OwnToken"))," method where you can get Tokens by creating the required request via ShopiVerse Api.")),(0,s.kt)("h3",{id:"responses"},"Responses"),(0,s.kt)("h4",{id:"code-200-success-response"},"Code 200 Success Response"),(0,s.kt)("p",null,'``json\n{\n"data": {\n"token": "string",\n"tokenType": "string",\n"expiration": "2023-05-24T14:15:06.683Z"\n},\n"success": true,\n"message": "string"\n}'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\n#### Code 400 BadRequest\n``json\n{\n   "success": true,\n   "message": "string"\n}\n')))}l.isMDXComponent=!0},6518:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ApiKey-2a04b5ca35899e616e1aaa16f4ce9333.png"},37183:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Auth-5cb63415747c01fbe76c1b01959101df.png"}}]);