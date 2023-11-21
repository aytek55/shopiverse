"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[3671],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>d});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=t.createContext({}),s=function(e){var a=t.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,d=m["".concat(p,".").concat(u)]||m[u]||g[u]||i;return r?t.createElement(d,l(l({ref:a},c),{},{components:r})):t.createElement(d,l({ref:a},c))}));function d(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},15286:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(87462),n=(r(67294),r(3905));const i={sidebar_label:"API Entegrasyonu",sidebar_position:1},l="Allegro API Entegrasyonu",o={unversionedId:"dashboard/marketplaces/allegro/allegro-api-entegration",id:"dashboard/marketplaces/allegro/allegro-api-entegration",title:"Allegro API Entegrasyonu",description:"Entegrasyon S\xfcreci \xd6ncesinde Yap\u0131lmas\u0131 Gerekenler ve \xd6nemli Bilgiler",source:"@site/docs/dashboard/marketplaces/allegro/allegro-api-entegration.md",sourceDirName:"dashboard/marketplaces/allegro",slug:"/dashboard/marketplaces/allegro/allegro-api-entegration",permalink:"/shopiverse/docs/dashboard/marketplaces/allegro/allegro-api-entegration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"API Entegrasyonu",sidebar_position:1},sidebar:"dashboardSidebar",previous:{title:"Allegro",permalink:"/shopiverse/docs/category/allegro"},next:{title:"Kategori E\u015fle\u015ftirme",permalink:"/shopiverse/docs/dashboard/marketplaces/allegro/allegro-category-matching"}},p={},s=[{value:"Entegrasyon S\xfcreci \xd6ncesinde Yap\u0131lmas\u0131 Gerekenler ve \xd6nemli Bilgiler",id:"entegrasyon-s\xfcreci-\xf6ncesinde-yap\u0131lmas\u0131-gerekenler-ve-\xf6nemli-bilgiler",level:2}],c={toc:s};function m(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"allegro-api-entegrasyonu"},"Allegro API Entegrasyonu"),(0,n.kt)("h2",{id:"entegrasyon-s\xfcreci-\xf6ncesinde-yap\u0131lmas\u0131-gerekenler-ve-\xf6nemli-bilgiler"},"Entegrasyon S\xfcreci \xd6ncesinde Yap\u0131lmas\u0131 Gerekenler ve \xd6nemli Bilgiler"),(0,n.kt)("p",null,"Allegro entegrasyon s\xfcrecine ba\u015flamadan \xf6nce marka tan\u0131mlaman\u0131z\u0131 yapman\u0131z gerekmektedir. Bunun i\xe7in Allegro taraf\u0131na \xfcr\xfcnlerinizi listelemek istedi\u011finiz kategori kodlar\u0131 ile birlikte ticket a\xe7man\u0131z ve marka ekleme talebinde bulunman\u0131z gerekmektedir."),(0,n.kt)("p",null,"ShopiVerse panelinden ",(0,n.kt)("strong",{parentName:"p"},"Ayarlar > Ma\u011fazalar > Allegro >  API Tan\u0131m")," alan\u0131 alt\u0131nda \u201c",(0,n.kt)("em",{parentName:"p"},"Durum"),"\u201d k\u0131sm\u0131 tikleyip, \u201c",(0,n.kt)("em",{parentName:"p"},"Client ID"),"\u201d ve \u201c",(0,n.kt)("em",{parentName:"p"},"Secret Key"),"\u201d bilgilerini girerek ilk \xf6nce kaydet demeniz gerekiyor, daha sonra yenilenen ekranda \u201cYetki Talep Et\u201d butonu ile i\u015flem sa\u011flaman\u0131z gerekmektedir."),(0,n.kt)("p",null,"Client ID ve Secret Key bilgileri i\xe7in; ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://developer.allegro.pl/"},"https://developer.allegro.pl/"))," sayfas\u0131 \xfczerinden giri\u015f yaparak Manage ",(0,n.kt)("em",{parentName:"p"},"API > My Applications")," sayfas\u0131na girerek yeni bir kay\u0131t olu\u015fturman\u0131z gerekiyor."),(0,n.kt)("p",null,"Yeni kay\u0131t olu\u015fturulurken a\xe7\u0131lan sayfay\u0131 a\u015fa\u011f\u0131da belirtti\u011fimiz gibi doldurabilirsiniz.\n\u201c",(0,n.kt)("em",{parentName:"p"},"Application Name"),"\u201d alan\u0131nda \u201c",(0,n.kt)("em",{parentName:"p"},"ShopiVerse"),"\u201d yazabilirsiniz.\n\u201c",(0,n.kt)("em",{parentName:"p"},"Application description"),"\u201d alan\u0131 optional oldu\u011fu i\xe7in bo\u015f b\u0131rakabilirsiniz.\n\u201c",(0,n.kt)("em",{parentName:"p"},"Select Application Type"),"\u201d alan\u0131 alt\u0131nda \u201c",(0,n.kt)("em",{parentName:"p"},"The application has access to the browser that the user uses to sign in to Allegro (e.g., an application on a server or an executable file) The application will receive OAuth grant-type: authorization_code"),"\u201d olan\u0131 tikleyebilirsiniz.\n\u201c",(0,n.kt)("em",{parentName:"p"},"Application Path"),"\u201d alan\u0131na ise \u201c",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://app.shopiverse.tech/tr/settings/store/allegrocallbackcode"},"https://app.shopiverse.tech/tr/settings/store/allegrocallbackcode")),"\u201d linkini yap\u0131\u015ft\u0131rabilirsiniz.\n\u201c",(0,n.kt)("em",{parentName:"p"},"App permissions"),"\u201d alan\u0131ndaki t\xfcm tiklemeleri yap\u0131p Terms & Conditions k\u0131sm\u0131n\u0131 da tikleyerek \u201cRegister\u201d butonu ile API tan\u0131mlar\u0131n\u0131 yapabilirsiniz.\nBu API tan\u0131m\u0131n\u0131 olu\u015fturduktan sonra Details sayfas\u0131na girerek bu sayfa alt\u0131nda Client ID ve Client Secret bilgilerini bulabileceksiniz. Bu bilgileri de ShopiVerse\u2019de ",(0,n.kt)("strong",{parentName:"p"},"Ayarlar > Ma\u011fazalar > Allegro >  API Tan\u0131m")," alan\u0131 alt\u0131nda \u201c",(0,n.kt)("em",{parentName:"p"},"Client ID"),"\u201d ve \u201c",(0,n.kt)("em",{parentName:"p"},"Secret Key"),"\u201d alanlar\u0131na kopyalay\u0131p yap\u0131\u015ft\u0131rabilirsiniz."))}m.isMDXComponent=!0}}]);