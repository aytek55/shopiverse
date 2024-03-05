"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[8107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(n),f=r,m=h["".concat(p,".").concat(f)]||h[f]||d[f]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"API Integration",sidebar_position:1},a="Shopify API Integration",s={unversionedId:"dashboard/marketplaces/shopify/shopify-api-entegration",id:"dashboard/marketplaces/shopify/shopify-api-entegration",title:"Shopify API Integration",description:"We need to fill in the \u201cStore Name\u201d \u201cAccess Token\u201d and \u201cDefault Location Name\u201d information under the Settings > Stores > Shopify > API Definition field from the ShopiVerse panel.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/dashboard/marketplaces/shopify/shopify-api-entegration.md",sourceDirName:"dashboard/marketplaces/shopify",slug:"/dashboard/marketplaces/shopify/shopify-api-entegration",permalink:"/shopiverse/en/docs/dashboard/marketplaces/shopify/shopify-api-entegration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"API Integration",sidebar_position:1},sidebar:"dashboardSidebar",previous:{title:"Shopify",permalink:"/shopiverse/en/docs/category/shopify"},next:{title:"Category Matching",permalink:"/shopiverse/en/docs/dashboard/marketplaces/shopify/shopify-category-matching"}},p={},c=[{value:"Settings",id:"settings",level:2},{value:"Stores &gt; Shopify",id:"stores--shopify",level:2},{value:"Shopify &gt; API Definition",id:"shopify--api-definition",level:2}],l={toc:c};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shopify-api-integration"},"Shopify API Integration"),(0,r.kt)("p",null,"We need to fill in the \u201c",(0,r.kt)("strong",{parentName:"p"},"Store Name"),"\u201d \u201c",(0,r.kt)("strong",{parentName:"p"},"Access Token"),"\u201d and \u201c",(0,r.kt)("strong",{parentName:"p"},"Default Location Name"),"\u201d information under the ",(0,r.kt)("strong",{parentName:"p"},"Settings > Stores > Shopify > API Definition")," field from the ShopiVerse panel."),(0,r.kt)("p",null,"To do this, click on the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," button on the left on your ",(0,r.kt)("a",{parentName:"p",href:"https://admin.shopify.com/login"},"admin.shopify.com"),' page and select the warehouse definition under the "',(0,r.kt)("strong",{parentName:"p"},"Locations"),'" menu on the page that opens. You need to enter the "Name',(0,r.kt)("strong",{parentName:"p"},'" information in the "'),'Default Location Name**" field.'),(0,r.kt)("p",null,"Under the ",(0,r.kt)("strong",{parentName:"p"},"Settings > Domain Name"),' menu, we need to enter the domain name "xxxx" where the information ',(0,r.kt)("strong",{parentName:"p"},"xxxx.myshopify.com"),' is located in the "',(0,r.kt)("strong",{parentName:"p"},"Store Name"),'" field in the ShopiVerse panel.\nUnder the ',(0,r.kt)("strong",{parentName:"p"},"Settings > Applications and Sales Channels"),' menu, you need to click "',(0,r.kt)("strong",{parentName:"p"},"Create an Application"),'" on the "',(0,r.kt)("strong",{parentName:"p"},"Develop Application"),'" button and write "',(0,r.kt)("strong",{parentName:"p"},"ShopiVerse"),'" in the "',(0,r.kt)("strong",{parentName:"p"},"Application Name"),'" section.'),(0,r.kt)("p",null,'After this process, you need to click on the "',(0,r.kt)("strong",{parentName:"p"},"Configure"),'" button in the ',(0,r.kt)("strong",{parentName:"p"},"Configuration > Admin API integration"),' section and tick all the boxes under the "',(0,r.kt)("strong",{parentName:"p"},"Admin API Access Scopes"),'" field on the page that opens. After this process, you need to select the \u201c',(0,r.kt)("strong",{parentName:"p"},"Event Version"),"\u201d field in the \u201c",(0,r.kt)("strong",{parentName:"p"},"Webhooks subscriptions"),"\u201d section at the bottom of the page as \u201c",(0,r.kt)("strong",{parentName:"p"},"2023-07"),"\u201d and save."),(0,r.kt)("p",null,'After this process, we go to the "',(0,r.kt)("strong",{parentName:"p"},"API credentials"),'" tab and click the "',(0,r.kt)("strong",{parentName:"p"},"Install Application"),'" button in the "',(0,r.kt)("strong",{parentName:"p"},"Access Tokens"),'" field and click Install in the pop-up that opens. Afterwards, you need to view and copy the Token information once and enter this code into the \u201c',(0,r.kt)("strong",{parentName:"p"},"Access Token"),"\u201d field in the ShopiVerse panel."),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ShopiVerseSetting",src:n(95624).Z,width:"1893",height:"527"})),(0,r.kt)("h2",{id:"stores--shopify"},"Stores > Shopify"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shopif",src:n(85371).Z,width:"1905",height:"477"})),(0,r.kt)("h2",{id:"shopify--api-definition"},"Shopify > API Definition"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ShopifyAPI",src:n(86369).Z,width:"1907",height:"729"})))}h.isMDXComponent=!0},95624:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/shopiverseSetting-73a0d49bae097c250547b9c1997db1b3.png"},85371:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/shopiverseSettingShopify-8514706b8a96b1c9cb0431d11e8400dd.png"},86369:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/shopiverseSettingShopifyApi-acec24a52e300ceabe2a9706498b8321.png"}}]);