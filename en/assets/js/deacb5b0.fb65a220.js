"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[9744],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,y=l["".concat(c,".").concat(m)]||l[m]||d[m]||s;return t?n.createElement(y,a(a({ref:r},u),{},{components:t})):n.createElement(y,a({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98907:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const s={sidebar_label:"Send Store Product Price"},a="Send Store Product Price",i={unversionedId:"api/store/set-store-price",id:"api/store/set-store-price",title:"Send Store Product Price",description:"Request Body",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api/store/set-store-price.md",sourceDirName:"api/store",slug:"/api/store/set-store-price",permalink:"/shopiverse/en/docs/api/store/set-store-price",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Send Store Product Price"},sidebar:"apiSidebar",previous:{title:"Bringing Stores",permalink:"/shopiverse/en/docs/api/store/get-stores"},next:{title:"G\xf6revler",permalink:"/shopiverse/en/docs/category/g\xf6revler"}},c={},p=[{value:"Request Body",id:"request-body",level:3},{value:"Responses",id:"responses",level:3},{value:"Code 200 Success Response",id:"code-200-success-response",level:4},{value:"Code 400 BadRequest",id:"code-400-badrequest",level:4}],u={toc:p};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-store-product-price"},"Send Store Product Price"),(0,o.kt)("h3",{id:"request-body"},"Request Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "storeId": 0,\n    "stockCode": "string",\n    "listPrice": 0,\n    "salePrice": 0,\n    "currency": "0 - TRY"\n  }\n]\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To pull your stores on Shopiverse, you can try the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://api.shopiverse.com/swagger/index.html",title:"Store Api SetStoreProductPrice"},"Store Api SetStorProductPrice"))," method by entering the necessary information as above through the ShopiVerse Api and creating the necessary request. .")),(0,o.kt)("h3",{id:"responses"},"Responses"),(0,o.kt)("h4",{id:"code-200-success-response"},"Code 200 Success Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "taskCode": "string"\n  },\n  "success": true,\n  "message": "string"\n}\n')),(0,o.kt)("h4",{id:"code-400-badrequest"},"Code 400 BadRequest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "string"\n}\n')))}l.isMDXComponent=!0}}]);