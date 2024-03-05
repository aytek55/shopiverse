"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[9524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,u=g["".concat(p,".").concat(m)]||g[m]||d[m]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"API Integration",sidebar_position:1},i="Allegro API Integration",l={unversionedId:"dashboard/marketplaces/allegro/allegro-api-entegration",id:"dashboard/marketplaces/allegro/allegro-api-entegration",title:"Allegro API Integration",description:"Things to Do and Important Information Before the Integration Process",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/dashboard/marketplaces/allegro/allegro-api-entegration.md",sourceDirName:"dashboard/marketplaces/allegro",slug:"/dashboard/marketplaces/allegro/allegro-api-entegration",permalink:"/shopiverse/en/docs/dashboard/marketplaces/allegro/allegro-api-entegration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"API Integration",sidebar_position:1},sidebar:"dashboardSidebar",previous:{title:"Allegro",permalink:"/shopiverse/en/docs/category/allegro"},next:{title:"Category Matching",permalink:"/shopiverse/en/docs/dashboard/marketplaces/allegro/allegro-category-matching"}},p={},s=[{value:"Things to Do and Important Information Before the Integration Process",id:"things-to-do-and-important-information-before-the-integration-process",level:2},{value:"Allegro API Integration",id:"allegro-api-integration-1",level:2}],c={toc:s};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"allegro-api-integration"},"Allegro API Integration"),(0,a.kt)("h2",{id:"things-to-do-and-important-information-before-the-integration-process"},"Things to Do and Important Information Before the Integration Process"),(0,a.kt)("p",null,"Before starting the Allegro integration process, you need to define your brand. To do this, you need to open a ticket on Allegro with the category codes in which you want to list your products and request to add a brand."),(0,a.kt)("h2",{id:"allegro-api-integration-1"},"Allegro API Integration"),(0,a.kt)("p",null,'From the ShopiVerse panel, you need to click on the "',(0,a.kt)("em",{parentName:"p"},"Status"),'" section under the ',(0,a.kt)("strong",{parentName:"p"},"Settings > Stores > Allegro > API Definition"),' field, enter the "',(0,a.kt)("em",{parentName:"p"},"Client ID"),'" and "',(0,a.kt)("em",{parentName:"p"},"Secret Key"),'" information and click save first, then " You must complete the action with the "Request Authorization" button.'),(0,a.kt)("p",null,"For Client ID and Secret Key information; You need to create a new record by logging in via ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://developer.allegro.pl/"},"https://developer.allegro.pl/"))," and going to the Manage ",(0,a.kt)("strong",{parentName:"p"},"API > My Applications")," page."),(0,a.kt)("p",null,"You can fill out the page that opens when creating a new registration as stated below.\nYou can write \u201c",(0,a.kt)("em",{parentName:"p"},"ShopiVerse"),"\u201d in the \u201c",(0,a.kt)("em",{parentName:"p"},"Application Name"),"\u201d field.\nSince the \u201c",(0,a.kt)("em",{parentName:"p"},"Application description"),"\u201d field is optional, you can leave it blank.\nUnder the \u201c",(0,a.kt)("em",{parentName:"p"},"Select Application Type"),"\u201d field, \u201c",(0,a.kt)("em",{parentName:"p"},'The application has access to the browser that the user uses to sign in to Allegro (e.g., an application on a server or an executable file) The application will receive OAuth grant-type: authorization_code You can tick "'),'".\nYou can paste the link \u201c',(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://app.shopiverse.tech/tr/settings/store/allegrocallbackcode"},"https://app.shopiverse.tech/tr/settings/store/allegrocallbackcode")),"\u201d into the \u201c",(0,a.kt)("em",{parentName:"p"},"Application Path"),'\u201d field.\nYou can make API definitions with the "Register" button by making all the ticks in the "',(0,a.kt)("em",{parentName:"p"},"App permissions"),'" field and clicking the Terms & Conditions section.\nAfter creating this API definition, you will be able to enter the Details page and find the Client ID and Client Secret information under this page. You can also copy and paste this information into the "',(0,a.kt)("em",{parentName:"p"},"Client ID"),'" and "',(0,a.kt)("em",{parentName:"p"},"Secret Key"),'" fields under ',(0,a.kt)("strong",{parentName:"p"},"Settings > Stores > Allegro > API Definition")," area in ShopiVerse."))}g.isMDXComponent=!0}}]);