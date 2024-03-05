"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[6576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),l=c(n),h=a,m=l["".concat(s,".").concat(h)]||l[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_label:"ShipEntegra"},o="ShipEntegra Integration",p={unversionedId:"dashboard/cargo-entegration/shipentegra-entegration",id:"dashboard/cargo-entegration/shipentegra-entegration",title:"ShipEntegra Integration",description:"For ShipEntegra integration, ShipEntegra arrangement is selected on the ShopiVerse Panel > Settings > Shipping Company Definitions Screen.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/dashboard/cargo-entegration/shipentegra-entegration.md",sourceDirName:"dashboard/cargo-entegration",slug:"/dashboard/cargo-entegration/shipentegra-entegration",permalink:"/shopiverse/en/docs/dashboard/cargo-entegration/shipentegra-entegration",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ShipEntegra"},sidebar:"dashboardSidebar",previous:{title:"Horoz Logistics-Highways",permalink:"/shopiverse/en/docs/dashboard/cargo-entegration/horoz-highway-cargo-entegration"},next:{title:"Ticari Sistem Entegrasyonu",permalink:"/shopiverse/en/docs/category/ticari-sistem-entegrasyonu"}},s={},c=[],g={toc:c};function l(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shipentegra-integration"},"ShipEntegra Integration"),(0,a.kt)("p",null,"For ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ShipEntegra"))," integration, ",(0,a.kt)("em",{parentName:"p"},"ShipEntegra")," arrangement is selected on the ",(0,a.kt)("strong",{parentName:"p"},"ShopiVerse Panel > Settings > Shipping Company Definitions")," Screen."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ShipEntegraEdit",src:n(72443).Z,width:"1210",height:"486"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If your cargo company is not in the list, you can define it from ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/category/kargo-firma-tan%C4%B1mlar%C4%B1"},"Cargo Company Definitions")),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CargoApi",src:n(82923).Z,width:"1463",height:"457"})),(0,a.kt)("p",null,"In the API Definition tab, the information that will provide the integration of the shipping company and ShopiVerse is defined."),(0,a.kt)("p",null,"On the screen opened by pressing the ",(0,a.kt)("strong",{parentName:"p"},'"New"'),"or ",(0,a.kt)("strong",{parentName:"p"},'"Edit"')," button, the Payment Type information, which determines who will make the cargo payments (buyer or seller), is selected."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Api Key")," information received from ShipEntegra is defined."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CargoApiAdd",src:n(58266).Z,width:"1076",height:"803"})),(0,a.kt)("p",null,"Other information required for the invoice is filled in and saved."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Make sure to ",(0,a.kt)("strong",{parentName:"p"},"Verify your Phone and ID")," from your ShipEntegra panel.\n",(0,a.kt)("strong",{parentName:"p"},"Api key")," information can be obtained by calling ",(0,a.kt)("strong",{parentName:"p"},"ShipEntegra support unit"),".")))}l.isMDXComponent=!0},82923:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CargoApiAdd-bb6db70e0f93468610d9e0ae5c40a561.png"},58266:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CargoApiAddNew-064206087b9f158604403f900107dafb.png"},72443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ShipEntegraEdit-6daf269d8acdae93b2396b96ec477026.png"}}]);