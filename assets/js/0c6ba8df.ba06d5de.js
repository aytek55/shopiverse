"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[8850],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),l=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=l(e.components);return r.createElement(s.Provider,{value:a},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(m,p(p({ref:a},c),{},{components:t})):r.createElement(m,p({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94180:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(87462),n=(t(67294),t(3905));const i={sidebar_label:"API Entegrasyonu",sidebar_position:1},p="Wayfair API Entegrasyonu",o={unversionedId:"dashboard/marketplaces/wayfair/wayfair-api-entegration",id:"dashboard/marketplaces/wayfair/wayfair-api-entegration",title:"Wayfair API Entegrasyonu",description:"Wayfair panelinde Developer > Applications sayfas\u0131na gidilir.",source:"@site/docs/dashboard/marketplaces/wayfair/wayfair-api-entegration.md",sourceDirName:"dashboard/marketplaces/wayfair",slug:"/dashboard/marketplaces/wayfair/wayfair-api-entegration",permalink:"/shopiverse/docs/dashboard/marketplaces/wayfair/wayfair-api-entegration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"API Entegrasyonu",sidebar_position:1},sidebar:"dashboardSidebar",previous:{title:"Wayfair",permalink:"/shopiverse/docs/category/wayfair"},next:{title:"\u0130\u015f Planlar\u0131",permalink:"/shopiverse/docs/dashboard/marketplaces/wayfair/wayfair-business-plan"}},s={},l=[{value:"Client ID - Client Secret",id:"client-id---client-secret",level:2}],c={toc:l};function u(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wayfair-api-entegrasyonu"},"Wayfair API Entegrasyonu"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Wayfair")," panelinde ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Developer > Applications"))," sayfas\u0131na gidilir.\n",(0,n.kt)("strong",{parentName:"p"},"New Application")," \xfczerinden ",(0,n.kt)("em",{parentName:"p"},"Name ve Description")," alanlar\u0131 doldurulur. Bu alanlara ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"ShopiVerse"))," bilgisi girilir."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WayfairCreateApplication",src:t(81979).Z,width:"338",height:"246"})),(0,n.kt)("p",null,"Burada 2 kay\u0131t olu\u015fturup bir tanesini ",(0,n.kt)("strong",{parentName:"p"},"sandbox")," di\u011ferini ",(0,n.kt)("strong",{parentName:"p"},"production")," olarak olu\u015fturulmas\u0131 gerekiyor."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ShopiVerseSetting",src:t(67544).Z,width:"3664",height:"1880"})),(0,n.kt)("p",null,"Olu\u015fturulduktan sonra ",(0,n.kt)("strong",{parentName:"p"},"Edit")," alan\u0131 \xfczerinden giri\u015f sa\u011flanarak ",(0,n.kt)("strong",{parentName:"p"},"Client ID ve Rotate Secret")," butonuna bast\u0131ktan sonraki ",(0,n.kt)("strong",{parentName:"p"},"key")," bilgilerini kopyalarak ",(0,n.kt)("em",{parentName:"p"},"ShopiVerse")," \xfczerinde ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Wayfair ma\u011fazas\u0131 > Api Tan\u0131m"))," alan\u0131 alt\u0131nda ilgili yerlere kaydetmeniz gerekmektedir."),(0,n.kt)("h2",{id:"client-id---client-secret"},"Client ID - Client Secret"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ShopiVerseSettingShopApi",src:t(9076).Z,width:"1234",height:"847"})))}u.isMDXComponent=!0},81979:(e,a,t)=>{t.d(a,{Z:()=>r});const r="data:image/png;base64,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"},67544:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/WayfairManagement-e50a814fb26e16c653d0611804f7477f.png"},9076:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Wayfairshopapi-161022781574191b34cea07d6eeb5474.png"}}]);