"use strict";(self.webpackChunkshopiverse=self.webpackChunkshopiverse||[]).push([[4572],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>d});var a=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,i=function(e,n){if(null==e)return{};var r,a,i={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),m=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(r),c=i,d=u["".concat(s,".").concat(c)]||u[c]||k[c]||t;return r?a.createElement(d,l(l({ref:n},p),{},{components:r})):a.createElement(d,l({ref:n},p))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=r.length,l=new Array(t);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<t;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7346:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>m});var a=r(7462),i=(r(7294),r(3905));const t={sidebar_label:"Client API Giri\u015f",sidebar_position:1},l="Client API",o={unversionedId:"api/api",id:"api/api",title:"Client API",description:"Client API d\xf6k\xfcmantasyon sayfam\u0131z API kullan\u0131c\u0131lar\u0131na rehberlik etmek ve API'mizin nas\u0131l entegre edilece\u011fi konusunda gerekli bilgileri sa\u011flamak amac\u0131yla olu\u015fturulmu\u015ftur.",source:"@site/docs/api/api.md",sourceDirName:"api",slug:"/api/",permalink:"/shopiverse/docs/api/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Client API Giri\u015f",sidebar_position:1},sidebar:"apiSidebar",next:{title:"Yetkilendirme",permalink:"/shopiverse/docs/category/yetkilendirme"}},s={},m=[],p={toc:m};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-api"},"Client API"),(0,i.kt)("p",null,"Client API d\xf6k\xfcmantasyon sayfam\u0131z API kullan\u0131c\u0131lar\u0131na rehberlik etmek ve API'mizin nas\u0131l entegre edilece\u011fi konusunda gerekli bilgileri sa\u011flamak amac\u0131yla olu\u015fturulmu\u015ftur."),(0,i.kt)("p",null,"API d\xf6k\xfcmantasyon sayfam\u0131z, m\xfc\u015fterilerimizin ve geli\u015ftiricilerin i\u015flerini kolayla\u015ft\u0131rmak ve geli\u015ftirme s\xfcrecini h\u0131zland\u0131rmak i\xe7in tasarlanm\u0131\u015ft\u0131r. Bu sayede, API'yi ba\u015far\u0131l\u0131 bir \u015fekilde entegre edebilmek i\xe7in ihtiya\xe7 duyulan t\xfcm kaynaklara tek bir noktadan eri\u015febilirsiniz."),(0,i.kt)("p",null,"D\xf6k\xfcmantasyon sayfam\u0131zda a\u015fa\u011f\u0131daki bilgilere ula\u015fabilirsiniz:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"API'nin genel tan\u0131m\u0131 ve kullan\u0131m senaryolar\u0131"),": API'nin temel i\u015flevselli\u011fi hakk\u0131nda genel bir bak\u0131\u015f sa\u011flar\u0131z ve \xe7e\u015fitli kullan\u0131m senaryolar\u0131n\u0131 payla\u015f\u0131r\u0131z."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"API'nin kullan\u0131m\u0131 i\xe7in gereken kimlik do\u011frulama ve yetkilendirme y\xf6ntemleri"),": API'ye eri\u015fim sa\u011flamak ve g\xfcvenli bir \u015fekilde kullanmak i\xe7in kullan\u0131lmas\u0131 gereken kimlik do\u011frulama ve yetkilendirme y\xf6ntemlerini detayl\u0131 bir \u015fekilde a\xe7\u0131klar\u0131z."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"API'nin sundu\u011fu y\xf6ntemler ve parametreler"),": API'nin sa\u011flad\u0131\u011f\u0131 i\u015flevlerin bir listesini sunar\u0131z ve her bir y\xf6ntemin nas\u0131l kullan\u0131laca\u011f\u0131n\u0131, hangi parametrelerin ge\xe7irilece\u011fini ve hangi sonu\xe7lar\u0131n al\u0131naca\u011f\u0131n\u0131 a\xe7\u0131klar\u0131z."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\xd6rnek kodlar ve talimatlar"),": API'yi farkl\u0131 programlama dillerinde kullanman\u0131z\u0131 kolayla\u015ft\u0131rmak i\xe7in \xf6rnek kodlar ve talimatlar sunar\u0131z. Bu \u015fekilde, API'nin nas\u0131l entegre edilece\u011fi konusunda pratik bir rehberlik sa\u011flam\u0131\u015f oluruz."),(0,i.kt)("p",null,"Shopiverse i\xe7erisinde bulunan ",(0,i.kt)("strong",{parentName:"p"},"Token Alma , Ma\u011fazalar\u0131 \xc7ekme , Sipari\u015fleri \xc7ekme")," metodlar\u0131n\u0131  Swagger \xfczerinde bulunan ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://api.shopiverse.com/swagger/index.html",title:"Shopiverse API"},"Shopiverse API"))," sayfas\u0131ndan test edebilrisniz."),(0,i.kt)("p",null,"Client API d\xf6k\xfcmantasyon sayfam\u0131z, kullan\u0131c\u0131lar\u0131n API'mizi etkin bir \u015fekilde kullanabilmelerini sa\u011flamak i\xe7in s\xfcrekli olarak g\xfcncellenmektedir. Bu sayede, API'nin yeni s\xfcr\xfcmleri ve ek \xf6zellikleri hakk\u0131nda en g\xfcncel bilgilere eri\u015febilirsiniz."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"API",src:r(8218).Z,width:"387",height:"362"})))}u.isMDXComponent=!0},8218:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/api11-2c79d5c35407614b131df2f2d67cf6b8.png"}}]);