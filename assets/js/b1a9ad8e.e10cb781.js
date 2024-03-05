"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[8721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(n),g=i,m=l["".concat(p,".").concat(g)]||l[g]||d[g]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},21389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_label:"\xdcr\xfcn G\xfcncelleme"},o="\xdcr\xfcn G\xfcncelleme",s={unversionedId:"api/product/put-product",id:"api/product/put-product",title:"\xdcr\xfcn G\xfcncelleme",description:"Parametre",source:"@site/docs/api/product/put-product.md",sourceDirName:"api/product",slug:"/api/product/put-product",permalink:"/shopiverse/docs/api/product/put-product",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\xdcr\xfcn G\xfcncelleme"},sidebar:"apiSidebar",previous:{title:"\xdcr\xfcn Stock-Fiyat Ekleme",permalink:"/shopiverse/docs/api/product/product-stock-price"},next:{title:"\xdcr\xfcn Olu\u015ftur",permalink:"/shopiverse/docs/api/product/set-products"}},p={},c=[{value:"Parametre",id:"parametre",level:3},{value:"Request",id:"request",level:3},{value:"Request",id:"request-1",level:4},{value:"Responses",id:"responses",level:3},{value:"Code 200 Success Response",id:"code-200-success-response",level:4},{value:"Code 400 BadRequest",id:"code-400-badrequest",level:4}],u={toc:c};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\xfcr\xfcn-g\xfcncelleme"},"\xdcr\xfcn G\xfcncelleme"),(0,i.kt)("h3",{id:"parametre"},"Parametre"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ProductstockRequest",src:n(2217).Z,width:"1824",height:"864"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"X-Client Key   Shopiverse panelde Api Tan\u0131mlar\u0131nda bulunan AP\u0130-Key bilgisidir.Api \u0130stek limiti ",(0,i.kt)("strong",{parentName:"p"},"dakikada 2 istek")," olarak sabitlenmi\u015ftir.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Shopiverse \xfczerinde bulunan \xfcr\xfcn g\xfcncelleme i\xe7in ShopiVerse Api \xfczerinden gerekli bilgileri yukar\u0131daki gibi girip gerekli iste\u011fi olu\u015fturarak ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://api.shopiverse.com/swagger/index.html",title:"Products API Put Products"},"Product Api PutProducts"))," metodunu deneyebilirsiniz.")),(0,i.kt)("h3",{id:"request"},"Request"),(0,i.kt)("h4",{id:"request-1"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "supplierProductId": 0,\n    "productStatus": "0 - Pasif",\n    "productType": "0 - StandardProduct",\n    "supplierId": 0,\n    "supplierStockCode": "string",\n    "mainProductCode": "string",\n    "productCode": "string",\n    "stockCode": "string",\n    "barcode": "string",\n    "gtin": "string",\n    "brand": "string",\n    "category": "string",\n    "packageWidth": 0,\n    "packageLength": 0,\n    "packageHeight": 0,\n    "packageWeighting": 0,\n    "packageDesi": 0,\n    "productWidth": 0,\n    "productLength": 0,\n    "productHeight": 0,\n    "productWeighting": 0,\n    "productDesi": 0,\n    "stock": 0,\n    "costPrice": 0,\n    "listPrice": 0,\n    "salePrice": 0,\n    "currency": "0 - TRY",\n    "vat": 0,\n    "videoUrl": "string",\n    "images": [\n      {\n        "rowNumber": 0,\n        "imageUrl": "string"\n      }\n    ],\n    "descriptions": [\n      {\n        "language": "0 - TR",\n        "productName": "string",\n        "shortDescription": "string",\n        "description": "string",\n        "productMaintenanceUseInfo": "string",\n        "tags": [\n          "string"\n        ]\n      }\n    ],\n    "properties": [\n      {\n        "propertyName": "0 - Materyal",\n        "propertyValue": "string"\n      }\n    ],\n    "attributes": [\n      {\n        "attributeName": "0 - Renk",\n        "attributeValue": "string"\n      }\n    ],\n    "bundles": [\n      {\n        "bundleSupplierProductId": 0,\n        "bundleStock": 0\n      }\n    ]\n  }\n]\n')),(0,i.kt)("h3",{id:"responses"},"Responses"),(0,i.kt)("h4",{id:"code-200-success-response"},"Code 200 Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "taskCode": "string"\n  },\n  "success": true,\n  "message": "string"\n}\n')),(0,i.kt)("h4",{id:"code-400-badrequest"},"Code 400 BadRequest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "string"\n}\n')))}l.isMDXComponent=!0},2217:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ShopiverseApiPutProducts-bc123cafe5a6ecc083530c8befe2ed15.png"}}]);