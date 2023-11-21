"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[4084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),l=c(r),d=a,y=l["".concat(s,".").concat(d)]||l[d]||f[d]||i;return r?n.createElement(y,o(o({ref:t},h),{},{components:r})):n.createElement(y,o({ref:t},h))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_label:"API Integration",sidebar_position:1},o="Shopify API Integration",p={unversionedId:"dashboard/marketplaces/shopify/shopify-api-entegration",id:"dashboard/marketplaces/shopify/shopify-api-entegration",title:"Shopify API Integration",description:"For Shopify API integration; https://www.shopify.com/partners login.\u201cApp\u201d from the left menu, then \u201cCreate an app\u201d at the top right \u201c*ShopiVerse*\u201d by typing \u201c*ShopiVerse*\u201d in the *App name* field Click on \u201cCreate app\u201d button. The values of \u201cAPI Key\u201d and \u201cApi Key Secret\u201d given on the screen are saved in the database as marketplace parameters.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/dashboard/marketplaces/shopify/shopify-api-entegration.md",sourceDirName:"dashboard/marketplaces/shopify",slug:"/dashboard/marketplaces/shopify/shopify-api-entegration",permalink:"/shopiverse/en/docs/dashboard/marketplaces/shopify/shopify-api-entegration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"API Integration",sidebar_position:1},sidebar:"dashboardSidebar",previous:{title:"Shopify",permalink:"/shopiverse/en/docs/category/shopify"},next:{title:"Category Matching",permalink:"/shopiverse/en/docs/dashboard/marketplaces/shopify/shopify-category-matching"}},s={},c=[{value:"Settings",id:"settings",level:2},{value:"Stores &gt; Shopify",id:"stores--shopify",level:2},{value:"Shopify &gt; API Definition",id:"shopify--api-definition",level:2}],h={toc:c};function l(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shopify-api-integration"},"Shopify API Integration"),(0,a.kt)("p",null,"For ",(0,a.kt)("strong",{parentName:"p"},"Shopify")," API integration; ",(0,a.kt)("a",{parentName:"p",href:"https://www.shopify.com/partners"},"https://www.shopify.com/partners")," login.",(0,a.kt)("strong",{parentName:"p"},"\u201cApp\u201d")," from the left menu, then ",(0,a.kt)("strong",{parentName:"p"},"\u201cCreate an app\u201d")," at the top right",(0,a.kt)("strong",{parentName:"p"}," \u201c",(0,a.kt)("em",{parentName:"strong"},"ShopiVerse"),"\u201d by typing \u201c",(0,a.kt)("em",{parentName:"strong"},"ShopiVerse"),"\u201d in the ",(0,a.kt)("em",{parentName:"strong"},"App name")," field Click on \u201cCreate app"),"\u201d button. The values of \u201c",(0,a.kt)("strong",{parentName:"p"},"API Key"),"\u201d and \u201c",(0,a.kt)("strong",{parentName:"p"},"Api Key Secret"),"\u201d given on the screen are saved in the database as marketplace parameters."),(0,a.kt)("p",null,'We need to fill in the "',(0,a.kt)("strong",{parentName:"p"},"Store Name"),'" field under ',(0,a.kt)("strong",{parentName:"p"},"Settings > Stores > Shopify > API Definition")," from the ShopiVerse panel."),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ShopiVerseSetting",src:r(36652).Z,width:"1893",height:"527"})),(0,a.kt)("h2",{id:"stores--shopify"},"Stores > Shopify"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shopif",src:r(35580).Z,width:"1905",height:"477"})),(0,a.kt)("h2",{id:"shopify--api-definition"},"Shopify > API Definition"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ShopifyAPI",src:r(50403).Z,width:"1907",height:"729"})))}l.isMDXComponent=!0},36652:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shopiverseSetting-73a0d49bae097c250547b9c1997db1b3.png"},35580:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shopiverseSettingShopify-8514706b8a96b1c9cb0431d11e8400dd.png"},50403:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shopiverseSettingShopifyApi-acec24a52e300ceabe2a9706498b8321.png"}}]);