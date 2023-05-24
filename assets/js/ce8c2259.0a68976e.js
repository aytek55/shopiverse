"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[6256],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return t?n.createElement(g,o(o({ref:r},c),{},{components:t})):n.createElement(g,o({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2581:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const s={sidebar_label:"Ma\u011fazalar\u0131 Getirme"},o="Ma\u011fazalar\u0131 Getirme",i={unversionedId:"api/store/get-stores",id:"api/store/get-stores",title:"Ma\u011fazalar\u0131 Getirme",description:"Request Body",source:"@site/docs/api/store/get-stores.md",sourceDirName:"api/store",slug:"/api/store/get-stores",permalink:"/shopiverse/docs/api/store/get-stores",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Ma\u011fazalar\u0131 Getirme"},sidebar:"apiSidebar",previous:{title:"Ma\u011fazalar",permalink:"/shopiverse/docs/category/ma\u011fazalar"},next:{title:"\xdcr\xfcnler",permalink:"/shopiverse/docs/category/\xfcr\xfcnler"}},l={},p=[{value:"Request Body",id:"request-body",level:3},{value:"Responses",id:"responses",level:3},{value:"Code 200 Success Response",id:"code-200-success-response",level:4},{value:"Code 400 BadRequest",id:"code-400-badrequest",level:4}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ma\u011fazalar\u0131-getirme"},"Ma\u011fazalar\u0131 Getirme"),(0,a.kt)("h3",{id:"request-body"},"Request Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "name": "string",\n  "marketplaceTypes": [\n    0\n  ]\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Shopiverse \xfczerinde bulunan ma\u011fazalar\u0131n\u0131z\u0131 \xe7ekmek i\xe7in ShopiVerse Api \xfczerinden gerekli bilgileri yukar\u0131daki gibi girip gerekli iste\u011fi olu\u015fturarak ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://api.shopiverse.com/swagger/index.html",title:"Store Api GetStores"},"Store Api GetStores"))," metodunu deneyebilirsiniz.")),(0,a.kt)("h3",{id:"responses"},"Responses"),(0,a.kt)("h4",{id:"code-200-success-response"},"Code 200 Success Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 0,\n      "status": 0,\n      "name": "string",\n      "marketplaceType": 0\n    }\n  ],\n  "success": true,\n  "message": "string"\n}\n')),(0,a.kt)("h4",{id:"code-400-badrequest"},"Code 400 BadRequest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "string"\n}\n')))}u.isMDXComponent=!0}}]);