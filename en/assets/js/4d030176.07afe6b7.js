"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[1090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),m=s,g=l["".concat(p,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const o={sidebar_label:"Bringing Stores"},a="Bringing Stores",i={unversionedId:"api/store/get-stores",id:"api/store/get-stores",title:"Bringing Stores",description:"Request Body",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api/store/get-stores.md",sourceDirName:"api/store",slug:"/api/store/get-stores",permalink:"/shopiverse/en/docs/api/store/get-stores",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Bringing Stores"},sidebar:"apiSidebar",previous:{title:"Ma\u011faza \xdcr\xfcn Resimleri Getirme",permalink:"/shopiverse/en/docs/api/store/get-store-produsts-images"},next:{title:"Ma\u011faza \xdcr\xfcnleri Getirme",permalink:"/shopiverse/en/docs/api/store/get-strore-products"}},p={},c=[{value:"Request Body",id:"request-body",level:3},{value:"Responses",id:"responses",level:3},{value:"Code 200 Success Response",id:"code-200-success-response",level:4},{value:"Code 400 BadRequest",id:"code-400-badrequest",level:4}],u={toc:c};function l(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"bringing-stores"},"Bringing Stores"),(0,s.kt)("h3",{id:"request-body"},"Request Body"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"GetstoresRequest",src:r(21333).Z,width:"1150",height:"402"})," "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "name": "string",\n  "marketplaceTypes": [\n    0\n  ]\n}\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"X-Client Key is the API-Key information found in the Api Definitions in the Shopiverse panel. Api Request limit is fixed as ",(0,s.kt)("strong",{parentName:"p"},"2 requests per minute"),".")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"In order to attract your stores on Shopiverse, you can try the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://api.shopiverse.com/swagger/index.html",title:"Store Api GetStores"},"Store Api GetStores"))," method by entering the necessary information as above and creating the required request. .")),(0,s.kt)("h3",{id:"responses"},"Responses"),(0,s.kt)("h4",{id:"code-200-success-response"},"Code 200 Success Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 0,\n      "status": 0,\n      "name": "string",\n      "marketplaceType": 0\n    }\n  ],\n  "success": true,\n  "message": "string"\n}\n')),(0,s.kt)("h4",{id:"code-400-badrequest"},"Code 400 BadRequest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "string"\n}\n')))}l.isMDXComponent=!0},21333:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/GetStoresRequest-c615424d92d492ab1519bf9aa1fed68f.png"}}]);