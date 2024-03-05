"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[7020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_label:"Ma\u011faza \xdcr\xfcn Resimleri Getirme"},s="Ma\u011faza \xdcr\xfcn Resimleri Getirme",o={unversionedId:"api/store/get-store-produsts-images",id:"api/store/get-store-produsts-images",title:"Ma\u011faza \xdcr\xfcn Resimleri Getirme",description:"GetstoresRequest",source:"@site/docs/api/store/get-store-produsts-images.md",sourceDirName:"api/store",slug:"/api/store/get-store-produsts-images",permalink:"/shopiverse/en/docs/api/store/get-store-produsts-images",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Ma\u011faza \xdcr\xfcn Resimleri Getirme"},sidebar:"apiSidebar",previous:{title:"Ma\u011fazalar",permalink:"/shopiverse/en/docs/category/ma\u011fazalar"},next:{title:"Bringing Stores",permalink:"/shopiverse/en/docs/api/store/get-stores"}},p={},l=[{value:"Responses",id:"responses",level:3},{value:"Code 200 Success Response",id:"code-200-success-response",level:4},{value:"Code 400 BadRequest",id:"code-400-badrequest",level:4}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ma\u011faza-\xfcr\xfcn-resimleri-getirme"},"Ma\u011faza \xdcr\xfcn Resimleri Getirme"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GetstoresRequest",src:r(61478).Z,width:"1836",height:"492"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"X-Client Key   Shopiverse panelde Api Tan\u0131mlar\u0131nda bulunan AP\u0130-Key bilgisidir.Api \u0130stek limiti ",(0,a.kt)("strong",{parentName:"p"},"dakikada 2 istek")," olarak sabitlenmi\u015ftir.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Shopiverse \xfczerinde bulunan ma\u011faza \xfcr\xfcn resimlerini \xe7ekmek i\xe7in ShopiVerse Api \xfczerinden gerekli bilgileri yukar\u0131daki gibi girip gerekli iste\u011fi olu\u015fturarak ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://api.shopiverse.com/swagger/index.html",title:"Store Api GetStoreProductImages"},"Store Api GetStoreProductImages"))," metodunu deneyebilirsiniz.")),(0,a.kt)("h3",{id:"responses"},"Responses"),(0,a.kt)("h4",{id:"code-200-success-response"},"Code 200 Success Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 0,\n      "storeProductId": 0,\n      "rowNumber": 0,\n      "imageUrl": "string",\n      "addTime": "2024-03-05T12:04:31.979Z",\n      "editTime": "2024-03-05T12:04:31.979Z"\n    }\n  ],\n  "success": true,\n  "message": "string"\n}\n')),(0,a.kt)("h4",{id:"code-400-badrequest"},"Code 400 BadRequest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "string"\n}\n')))}u.isMDXComponent=!0},61478:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ShopiverseApiGetStoreProductImages-030f907b15fc82201f3f38066b264ab5.png"}}]);