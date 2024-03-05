"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[3400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={},a="Adding Product Stock-Price",c={unversionedId:"api/product/product-stock-price",id:"api/product/product-stock-price",title:"Adding Product Stock-Price",description:"Parameter",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api/product/product-stock-price.md",sourceDirName:"api/product",slug:"/api/product/product-stock-price",permalink:"/shopiverse/en/docs/api/product/product-stock-price",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"\xdcr\xfcnleri Getir",permalink:"/shopiverse/en/docs/api/product/get-products"},next:{title:"\xdcr\xfcn G\xfcncelleme",permalink:"/shopiverse/en/docs/api/product/put-product"}},i={},p=[{value:"Parameter",id:"parameter",level:4},{value:"Responses",id:"responses",level:4},{value:"Code 200 Success Response",id:"code-200-success-response",level:4},{value:"Code 400 BadRequest",id:"code-400-badrequest",level:4}],u={toc:p};function d(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-product-stock-price"},"Adding Product Stock-Price"),(0,o.kt)("h4",{id:"parameter"},"Parameter"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ProductstockRequest",src:r(79027).Z,width:"1135",height:"530"}),"\n",(0,o.kt)("img",{alt:"ProductPriceRequest",src:r(79027).Z,width:"1135",height:"530"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"X-Client Key is the API-Key information found in the Api Definitions in the Shopiverse panel.Api Request limit is fixed as ",(0,o.kt)("strong",{parentName:"p"},"2 requests per minute"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},' [\n  {\n    "supplierId": 0,\n    "stockCode": "string",\n    "stock": 0,\n    "warehouse": [\n      {\n        "warehouseId": 0,\n        "stock": 0\n      }\n    ]\n  }\n]\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can try the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://api.shopiverse.com/swagger/index.html",title:"Warehouse Api ProductStock"},"Product Api SetProductStock"))," method by entering the stock price information of the products on Shopiverse via ShopiVerse Api as above and creating the necessary request.")),(0,o.kt)("h4",{id:"responses"},"Responses"),(0,o.kt)("h4",{id:"code-200-success-response"},"Code 200 Success Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "taskCode": "string"\n  },\n  "success": true,\n  "message": "string"\n}\n')),(0,o.kt)("h4",{id:"code-400-badrequest"},"Code 400 BadRequest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "string"\n}\n')))}d.isMDXComponent=!0},79027:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/SetProductPriceRequest-7f3ac823b1e210aeb6f88b8c6988ca39.png"}}]);