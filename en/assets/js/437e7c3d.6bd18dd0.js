"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[8310],{3905:(e,l,a)=>{a.d(l,{Zo:()=>m,kt:()=>k});var t=a(67294);function n(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function r(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?r(Object(a),!0).forEach((function(l){n(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function u(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=t.createContext({}),s=function(e){var l=t.useContext(o),a=l;return e&&(a="function"==typeof e?e(l):i(i({},l),e)),a},m=function(e){var l=s(e.components);return t.createElement(o.Provider,{value:l},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},f=t.forwardRef((function(e,l){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,k=p["".concat(o,".").concat(f)]||p[f]||d[f]||r;return a?t.createElement(k,i(i({ref:l},m),{},{components:a})):t.createElement(k,i({ref:l},m))}));function k(e,l){var a=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=f;var u={};for(var o in l)hasOwnProperty.call(l,o)&&(u[o]=l[o]);u.originalType=e,u[p]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<r;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},44493:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var t=a(87462),n=(a(67294),a(3905));const r={sidebar_label:"Fulfillment Kurallar\u0131",sidebar_position:2},i="Fulfillment Kurallar\u0131",u={unversionedId:"dashboard/dashboard-tutorial/fulfillment/fulfillmentrules",id:"dashboard/dashboard-tutorial/fulfillment/fulfillmentrules",title:"Fulfillment Kurallar\u0131",description:"Birden fazla fulfillment ile \xe7al\u0131\u015f\u0131ld\u0131\u011f\u0131 durumda, bu fulfillmentlar i\xe7in kural tan\u0131mlamalar\u0131 yap\u0131l\u0131r.",source:"@site/docs/dashboard/dashboard-tutorial/fulfillment/fulfillmentrules.md",sourceDirName:"dashboard/dashboard-tutorial/fulfillment",slug:"/dashboard/dashboard-tutorial/fulfillment/fulfillmentrules",permalink:"/shopiverse/en/docs/dashboard/dashboard-tutorial/fulfillment/fulfillmentrules",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Fulfillment Kurallar\u0131",sidebar_position:2},sidebar:"dashboardSidebar",previous:{title:"Fulfillment Merkezleri",permalink:"/shopiverse/en/docs/dashboard/dashboard-tutorial/fulfillment/fulfillment-centers"},next:{title:"Fulfillment Hizmet Hesaplama",permalink:"/shopiverse/en/docs/dashboard/dashboard-tutorial/fulfillment/fulfillment-service-calculation"}},o={},s=[],m={toc:s};function p(e){let{components:l,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},m,r,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fulfillment-kurallar\u0131"},"Fulfillment Kurallar\u0131"),(0,n.kt)("p",null,"Birden fazla ",(0,n.kt)("strong",{parentName:"p"},"fulfillment")," ile \xe7al\u0131\u015f\u0131ld\u0131\u011f\u0131 durumda, bu fulfillmentlar i\xe7in ",(0,n.kt)("strong",{parentName:"p"},"kural tan\u0131mlamal"),"ar\u0131 yap\u0131l\u0131r. "),(0,n.kt)("p",null,"Kural tan\u0131mlanmas\u0131n\u0131n amac\u0131 belirli b\xf6lgelerden gelen sipari\u015flerin g\xf6nderim yap\u0131laca\u011f\u0131 deponun otomatik olarak se\xe7ilip, o depodan \xe7\u0131k\u0131\u015f\u0131n\u0131n yap\u0131lmas\u0131n\u0131 sa\u011flamakt\u0131r. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"FulfillmentRuleDefinition",src:a(96561).Z,width:"1894",height:"608"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Kural tan\u0131mlamak i\xe7in")),", "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Shopiverse panel > Fulfillment > Fulfillment Kurallar\u0131")," ekran\u0131nda \u201c",(0,n.kt)("strong",{parentName:"p"},"Kural Tan\u0131mla"),"\u201d butonuna bas\u0131l\u0131r. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"FulfillmentRuleDefinitionSave",src:a(21399).Z,width:"772",height:"612"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A\xe7\u0131lan ekran"),"daki alanlar doldurularak ",(0,n.kt)("strong",{parentName:"p"},"kural tan\u0131m\u0131")," yap\u0131l\u0131r. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fulfilment Merkezi"),", kural tan\u0131m\u0131 yap\u0131lmak istenen depo olarak se\xe7ilir. "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Hedef \xdclke")," ve ",(0,n.kt)("em",{parentName:"p"},"Hedef B\xf6lge")," se\xe7ilir.  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kural Durumu"),", \u201cEtkin\u201d veya \u201cDevre D\u0131\u015f\u0131\u201d olarak se\xe7ilir. "),(0,n.kt)("p",null,"\xd6ncelik s\u0131ras\u0131 da doldurularak kaydedilir. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kural tan\u0131m\u0131")," tamamlanm\u0131\u015ft\u0131r ve durumu \u201c",(0,n.kt)("strong",{parentName:"p"},"Etkin"),"\u201d olarak se\xe7ildiyse, hedef b\xf6lge ve \xfclkeden gelen bir sipari\u015f oldu\u011funda \xf6ncelik s\u0131ras\u0131na bak\u0131larak, sipari\u015f se\xe7ilen fulfillment merkezine y\xf6nlendirilecektir. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"FulfillmentRuleDefinitionSaveDel",src:a(48994).Z,width:"1889",height:"328"})),(0,n.kt)("p",null,"Durumu \u201c",(0,n.kt)("strong",{parentName:"p"},"Devre D\u0131\u015f\u0131"),"\u201d olarak se\xe7ildiyse, hedef b\xf6lge ve \xfclkeden gelen bir sipari\u015f oldu\u011funda, se\xe7ilen fulfillment merkezine y\xf6nlendirilmesinin istenmedi\u011fi anlam\u0131na gelmektedir. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"FulfillmentList",src:a(16721).Z,width:"1897",height:"611"})),(0,n.kt)("p",null,"\u201c",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Hedef B\xf6lge")),"\u201d butonuna bas\u0131larak a\xe7\u0131lan sayfada tan\u0131mlanan kurallar, hedef b\xf6lgelere g\xf6re gruplanm\u0131\u015f \u015fekilde listelenmektedir. "),(0,n.kt)("p",null,"\u201c",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Hedef \xdclke")),"\u201d butonuna bas\u0131larak a\xe7\u0131lan sayfada tan\u0131mlanan kurallar, hedef \xfclkelere g\xf6re gruplanm\u0131\u015f \u015fekilde listelenmektedir. "),(0,n.kt)("p",null,"\u201c",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Fulfillment Merkezi")),"\u201d butonuna bas\u0131larak a\xe7\u0131lan sayfada tan\u0131mlanan kurallar, fulfillment merkezlerine g\xf6re gruplanm\u0131\u015f \u015fekilde listelenmektedir. "),(0,n.kt)("p",null,"\u201c",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Fulfillment Harita")),"\u201d butonuna bas\u0131larak a\xe7\u0131lan sayfada tan\u0131mlanan kurallar, harita \xfczerinde g\xf6sterilmektedir. "),(0,n.kt)("p",null,"Fulfillment se\xe7imi yap\u0131larak, bu fulfillmenta ait hangi b\xf6lgeler i\xe7in kural tan\u0131m\u0131 yap\u0131ld\u0131\u011f\u0131 harita \xfczerinde g\xf6r\xfcnt\xfclenir."))}p.isMDXComponent=!0},96561:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a.p+"assets/images/RuleDefinition-6d53d78fa37da3904d9df9e4a8da8d2b.png"},21399:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a.p+"assets/images/RuleDefinitionSave-4a1d7a06afb77ee1e5918ef1b6195476.png"},48994:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a.p+"assets/images/RuleDefinitionSaveDel-abaa0b12f76c9763cc703bb533f18dee.png"},16721:(e,l,a)=>{a.d(l,{Z:()=>t});const t=a.p+"assets/images/fulfillmentlist-cd5bb177bbb66fba5379c952dffafe69.png"}}]);