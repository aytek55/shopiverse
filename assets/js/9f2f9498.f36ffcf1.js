"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[5099],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(t),u=a,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4430:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const i={sidebar_label:"ShipEntegra"},o="ShipEntegra Entegrasyon",l={unversionedId:"dashboard/cargo-entegration/shipentegra-entegration",id:"dashboard/cargo-entegration/shipentegra-entegration",title:"ShipEntegra Entegrasyon",description:"CargoApi",source:"@site/docs/dashboard/cargo-entegration/shipentegra-entegration.md",sourceDirName:"dashboard/cargo-entegration",slug:"/dashboard/cargo-entegration/shipentegra-entegration",permalink:"/shopiverse/docs/dashboard/cargo-entegration/shipentegra-entegration",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ShipEntegra"},sidebar:"dashboardSidebar",previous:{title:"Horoz Lojistik-Karayollar\u0131",permalink:"/shopiverse/docs/dashboard/cargo-entegration/horoz-highway-cargo-entegration"},next:{title:"FulFillment Entegrasyon",permalink:"/shopiverse/docs/category/fulfillment-entegrasyon"}},p={},s=[],c={toc:s};function g(e){let{components:r,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shipentegra-entegrasyon"},"ShipEntegra Entegrasyon"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CargoApi",src:t(9887).Z,width:"1223",height:"353"})),(0,a.kt)("p",null,"Api Tan\u0131m sekmesinde kargo firmas\u0131 ve ShopiVerse entegrasyonunu sa\u011flayacak olan bilgiler tan\u0131mlan\u0131r. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'"Yeni"'),"veya ",(0,a.kt)("strong",{parentName:"p"},'"D\xfczenle"')," butonuna bas\u0131larak a\xe7\u0131lan ekranda kargo \xf6demelerinin kim taraf\u0131ndan yap\u0131laca\u011f\u0131n\u0131 belirleyen (al\u0131c\u0131 veya sat\u0131c\u0131) \xd6deme Tipi bilgisi se\xe7ilir. "),(0,a.kt)("p",null,"ShipEntegra\u2019dan al\u0131nan ",(0,a.kt)("strong",{parentName:"p"},"Api Key")," bilgisi tan\u0131mlan\u0131r. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CargoApiAdd",src:t(9050).Z,width:"1053",height:"878"})),(0,a.kt)("p",null,"Fatura i\xe7in gerekli olan di\u011fer bilgiler doldurulur ve kaydedilir. "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"ShipEntegra panelinizden ",(0,a.kt)("strong",{parentName:"p"},"telefon ve kimlik bilgilerinizi do\u011frulama")," yapt\u0131\u011f\u0131n\u0131zdan emin olun.\n",(0,a.kt)("strong",{parentName:"p"},"Api key")," bilgisini ",(0,a.kt)("strong",{parentName:"p"},"ShipEntegra destek birimini")," arayarak temin edebilirsiniz.")))}g.isMDXComponent=!0},9887:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/CargoApiAdd-5c40417dce99fb76c233e8b6f865526b.png"},9050:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/CargoApiAddNew-190e33313f47ad4deb1f9e0bd92d7e5d.png"}}]);