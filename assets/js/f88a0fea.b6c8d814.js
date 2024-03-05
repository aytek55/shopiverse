"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[3757],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=i.createContext({}),l=function(e){var r=i.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return i.createElement(o.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(t),m=n,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return t?i.createElement(g,s(s({ref:r},u),{},{components:t})):i.createElement(g,s({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=m;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[c]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<a;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3497:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var i=t(87462),n=(t(67294),t(3905));const a={sidebar_label:"Tedarik\xe7ileri Getirme"},s="Tedarik\xe7ileri Getirme",p={unversionedId:"api/supplier/get-suppliers",id:"api/supplier/get-suppliers",title:"Tedarik\xe7ileri Getirme",description:"Parametre",source:"@site/docs/api/supplier/get-suppliers.md",sourceDirName:"api/supplier",slug:"/api/supplier/get-suppliers",permalink:"/shopiverse/docs/api/supplier/get-suppliers",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Tedarik\xe7ileri Getirme"},sidebar:"apiSidebar",previous:{title:"Tedarik\xe7iler",permalink:"/shopiverse/docs/category/tedarik\xe7iler"},next:{title:"Depo Bilgileri",permalink:"/shopiverse/docs/category/depo-bilgileri"}},o={},l=[{value:"Parametre",id:"parametre",level:3},{value:"Responses",id:"responses",level:3},{value:"Code 200 Success Response",id:"code-200-success-response",level:4},{value:"Code 400 BadRequest",id:"code-400-badrequest",level:4}],u={toc:l};function c(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tedarik\xe7ileri-getirme"},"Tedarik\xe7ileri Getirme"),(0,n.kt)("h3",{id:"parametre"},"Parametre"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GetSuppliersRequest",src:t(65246).Z,width:"1123",height:"407"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"X-Client Key   Shopiverse panelde Api Tan\u0131mlar\u0131nda bulunan AP\u0130-Key bilgisidir.Api \u0130stek limiti ",(0,n.kt)("strong",{parentName:"p"},"dakikada 2 istek")," olarak sabitlenmi\u015ftir.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"}," Status : string Aktif(1) , Pasif(0)\n Name : string\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Shopiverse \xfczerinde bulunan tedarik\xe7ileri \xe7ekmek i\xe7in ShopiVerse Api \xfczerinden gerekli bilgileri yukar\u0131daki gibi girip gerekli iste\u011fi olu\u015fturarak ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://api.shopiverse.com/swagger/index.html",title:"Supplier Api GetSuppliers"},"Supplier Api GetSupplier"))," metodunu deneyebilirsiniz.")),(0,n.kt)("h3",{id:"responses"},"Responses"),(0,n.kt)("h4",{id:"code-200-success-response"},"Code 200 Success Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 0,\n      "status": "0 - Pasif",\n      "code": "string",\n      "name": "string"\n    }\n  ],\n  "success": true,\n  "message": "string"\n}\n')),(0,n.kt)("h4",{id:"code-400-badrequest"},"Code 400 BadRequest"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "message": "string"\n}\n')))}c.isMDXComponent=!0},65246:(e,r,t)=>{t.d(r,{Z:()=>i});const i=t.p+"assets/images/GetSuppliersRequest-4a592a46b80de965480a0e11111ae8c7.png"}}]);