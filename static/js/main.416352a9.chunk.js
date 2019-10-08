(window.webpackJsonpwebapp=window.webpackJsonpwebapp||[]).push([[0],{3:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c}));var n=r(0),o=r.n(n),a=Object(n.createContext)(),i=function(e){var t=e.reducer,r=e.initialState,i=e.children;return o.a.createElement(a.Provider,{value:Object(n.useReducer)(t,r)},i)},c=function(){return Object(n.useContext)(a)}},30:function(e,t,r){e.exports=r(67)},35:function(e,t,r){var n={"./Catalog/index.js":36,"./Favorite/index.js":62,"./Favorites/index.js":63,"./FavoritesButton/index.js":64,"./Header/index.js":65,"./Product/index.js":66};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=35},36:function(e,t,r){"use strict";r.r(t);var n=r(7),o=r.n(n),a=r(8),i=r(4),c=r(0),u=r.n(c),l=r(1),s=r(5),d=r(6),f=r(3),p={};p.Catalog=l.c.ul.withConfig({displayName:"Catalog",componentId:"sc-1hrev9i-0"})(["display:flex;flex-wrap:wrap;justify-content:center;list-style:none;margin:auto;max-width:1140px;padding:1rem;"]);var m=function(e){var t=Object(f.b)(),r=Object(i.a)(t,2),n=r[0].products,l=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.getProducts)();case 2:return t=e.sent,e.next=5,l({type:"loadProducts",products:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),u.a.createElement(p.Catalog,null,n.map((function(e){return u.a.createElement(s.Product,Object.assign({key:e.id},e))})))};m.defaultProps={products:[]},t.default=m},38:function(e,t,r){var n={"./favorites/index.js":39,"./getProducts/index.js":40,"./reducer/index.js":57};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=38},39:function(e,t,r){"use strict";r.r(t),r.d(t,"addFavorite",(function(){return i})),r.d(t,"loadFavoritesFromStorage",(function(){return c})),r.d(t,"removeFavorite",(function(){return u})),r.d(t,"clearFavorite",(function(){return l}));var n=r(9);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=function(e,t){return e.favorites.some((function(e){return e.productID===t.product.id}))?e.favorites.map((function(e){return e.productID===t.product.id&&e.quantity++,null})):e.favorites.push({productID:t.product.id,quantity:1}),s(e.favorites),a({},e,{favorites:e.favorites})},c=function(e,t){return a({},e,{favorites:d()})},u=function(e,t){var r=e.favorites.filter((function(e){return e.productID===t.product.id?e.quantity-1>0?(e.quantity=0===e.quantity?0:e.quantity-1,e):null:e}));return a({},e,{favorites:r})},l=function(e,t){var r=e.favorites.filter((function(e){return e.productID!==t.product.id}));return s(r),a({},e,{favorites:r})},s=function(e){localStorage.setItem("ProductCatalog-Favorites",JSON.stringify(e))},d=function(e){return JSON.parse(localStorage.getItem("ProductCatalog-Favorites"))||[]}},40:function(e,t,r){"use strict";r.r(t),r.d(t,"getProducts",(function(){return u}));var n=r(7),o=r.n(n),a=r(8),i=r(25),c=r.n(i);function u(e){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c()({method:"GET",url:"data/catalog.json",headers:{Accept:"*/*","Content-Type":"application/json"}}).catch((function(e){return console.log(e),!1}));case 2:return r=e.sent,e.abrupt("return",r.data||!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5:function(e,t,r){var n=r(35);n.keys().forEach((function(t){var r=t.replace(/^.+\/([^/]+)\/index\.js/,"$1");e.exports[r]=n(t).default}))},57:function(e,t,r){"use strict";r.r(t),r.d(t,"reducer",(function(){return c}));var n=r(9),o=r(6);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e,t){switch(t.type){case"addFavorite":return Object(o.addFavorite)(e,t);case"removeFavorite":return Object(o.removeFavorite)(e,t);case"showFavorites":return i({},e,{modal:t.status});case"loadFavoritesFromStorage":return Object(o.loadFavoritesFromStorage)(e,t);case"loadProducts":return i({},e,{products:t.products});default:return e}}},6:function(e,t,r){var n=r(38);n.keys().forEach((function(t){Object.keys(n(t)).forEach((function(r){e.exports[r]=n(t)[r]}))}))},62:function(e,t,r){"use strict";r.r(t);var n=r(4),o=r(0),a=r.n(o),i=r(1),c=r(3),u={};u.Favorite=i.c.li.withConfig({displayName:"Favorite",componentId:"sc-94mli5-0"})(["align-items:center;display:flex;flex-direction:row;& > div{padding:0.5rem;&:last-child{margin-left:auto;}}& img{padding:0.5rem;width:50px;}"]),u.Button=i.c.button.withConfig({displayName:"Favorite__Button",componentId:"sc-94mli5-1"})(["background:transparent;border:0;cursor:pointer;outline:o;&:hover{background:",";color:#fff;}"],(function(e){return e.theme.colors.primary})),u.Counter=i.c.div.withConfig({displayName:"Favorite__Counter",componentId:"sc-94mli5-2"})(["display:inline-block;margin:0 0.5rem;padding:0;text-align:center;width:1.5rem;"]);t.default=function(e){var t=Object(c.b)(),r=Object(n.a)(t,2),o=r[0].products,i=r[1],l=o.filter((function(t){return t.id===e.productID}));return l=1===l.length?l[0]:{},a.a.createElement(u.Favorite,null,a.a.createElement("img",{src:"./data/".concat(l.image)}),a.a.createElement("div",null,l.title),a.a.createElement("div",null,a.a.createElement(u.Button,{onClick:function(){return i({type:"removeFavorite",product:l})}},"-"),a.a.createElement(u.Counter,null,e.quantity),a.a.createElement(u.Button,{onClick:function(){return i({type:"addFavorite",product:l})}},"+")))}},63:function(e,t,r){"use strict";r.r(t);var n=r(4),o=r(0),a=r.n(o),i=r(1),c=r(3),u=r(5),l={},s=Object(i.d)(["from{transform:translateX(350px);}to{transform:translateX(0px);}"]);l.Favorites=i.c.ul.withConfig({displayName:"Favorites",componentId:"ltdq59-0"})(["animation:"," 0.15s linear forwards;background:#fff;display:flex;flex-direction:column;height:100vh;list-style:none;margin:0;padding:0.5rem;padding-top:100px;position:fixed;right:0;top:0;transform:translateX(350px);width:350px;"],s);var d=Object(i.d)(["from{opacity:0;}to{opacity:1;}"]);l.Modal=i.c.div.withConfig({displayName:"Favorites__Modal",componentId:"ltdq59-1"})(["animation:"," 0.25s linear forwards;background:rgba(0,0,0,0.25);left:0;height:100vh;position:fixed;top:0;width:100vw;z-index:500;"],d),l.Title=i.c.h1.withConfig({displayName:"Favorites__Title",componentId:"ltdq59-2"})(["color:",";font-family:'Kaushan Script',cursive;font-size:2rem;margin:1rem;line-height:1.35;"],(function(e){return e.theme.colors.primary}));t.default=function(e){var t=Object(c.b)(),r=Object(n.a)(t,2),i=r[0],s=i.favorites,d=i.modal,f=r[1];return Object(o.useEffect)((function(){f({type:"loadFavoritesFromStorage"})}),[f]),a.a.createElement(a.a.Fragment,null,d&&a.a.createElement(l.Modal,null,a.a.createElement(l.Favorites,null,a.a.createElement(l.Title,null,"Build your ar... collection now!"),s.map((function(e,t){return a.a.createElement(u.Favorite,Object.assign({key:t},e))})))))}},64:function(e,t,r){"use strict";r.r(t);var n=r(4),o=r(0),a=r.n(o),i=r(1),c=r(3),u={};u.FavoritesButton=i.c.button.withConfig({displayName:"FavoritesButton",componentId:"sc-1lrzgrv-0"})(["align-items:center;background:transparent;border:0;cursor:pointer;display:flex;justify-content:center;outline:0;position:fixed;right:1rem;top:1rem;z-index:600;"]),u.Icon=i.c.svg.withConfig({displayName:"FavoritesButton__Icon",componentId:"sc-1lrzgrv-1"})(["fill:",";width:50px;"],(function(e){return e.theme.colors.primary})),u.Badge=i.c.div.withConfig({displayName:"FavoritesButton__Badge",componentId:"sc-1lrzgrv-2"})(["color:",";font-size:1rem;font-weight:bold;position:absolute;"],(function(e){return e.theme.colors.primary}));t.default=function(e){var t=Object(c.b)(),r=Object(n.a)(t,2),o=r[0],i=o.modal,l=o.favorites,s=r[1],d=l.reduce((function(e,t){return e+t.quantity}),0);return a.a.createElement(u.FavoritesButton,{onClick:function(){return s({type:"showFavorites",status:!i})}},a.a.createElement(u.Badge,null,d),a.a.createElement(u.Icon,{x:"0px",y:"0px",viewBox:"0 0 510 510"},a.a.createElement("g",null,a.a.createElement("g",{id:"favorite-outline"},a.a.createElement("path",{d:"M369.75,21.675c-43.35,0-86.7,20.4-114.75,53.55c-28.05-33.15-71.4-53.55-114.75-53.55C61.2,21.675,0,82.875,0,161.925\r c0,96.9,86.7,175.95,219.3,293.25l35.7,33.15l35.7-33.15c130.05-119.85,219.3-198.9,219.3-293.25\r C510,82.875,448.8,21.675,369.75,21.675z M257.55,419.475H255l-2.55-2.55C130.05,307.274,51,235.875,51,161.925\r c0-51,38.25-89.25,89.25-89.25c38.25,0,76.5,25.5,91.8,61.2h48.45c12.75-35.7,51-61.2,89.25-61.2c51,0,89.25,38.25,89.25,89.25\r C459,235.875,379.95,307.274,257.55,419.475z"})))))}},65:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(1),i=(r(5),{});i.Header=a.c.header.withConfig({displayName:"Header",componentId:"sc-1xmaes3-0"})(["align-items:center;display:flex;flex-direction:column;height:85vh;justify-content:center;"]),i.Title=a.c.h1.withConfig({displayName:"Header__Title",componentId:"sc-1xmaes3-1"})(["color:",";font-family:'Kaushan Script',cursive;font-size:3rem;margin:1rem;line-height:1;"],(function(e){return e.theme.colors.primary})),i.SubTitle=a.c.h2.withConfig({displayName:"Header__SubTitle",componentId:"sc-1xmaes3-2"})(["color:",";display:block;font-family:'Kaushan Script',cursive;font-size:1.25rem;margin:1rem;max-width:400px;line-height:2.35rem;text-align:center;"],(function(e){return e.theme.colors.primary})),i.Header.defaultProps={theme:{colors:{primary:"palevioletred"}}};t.default=function(e){return o.a.createElement(i.Header,null,o.a.createElement(i.Title,null,"Robot Shop"),o.a.createElement(i.SubTitle,null,"Get your robot now; automate your home, do some gardening, build your army and take over the world... whatever you want! Get your robots now!"))}},66:function(e,t,r){"use strict";r.r(t);var n=r(4),o=r(0),a=r.n(o),i=r(1),c=r(3),u={};u.Product=i.c.li.withConfig({displayName:"Product",componentId:"sc-1ekgfzr-0"})(["background:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.07),0 2px 4px rgba(0,0,0,0.07),0 4px 8px rgba(0,0,0,0.07),0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07),0 32px 64px rgba(0,0,0,0.07);display:inline-block;height:250px;margin:0.5rem;position:relative;width:250px;"]),u.Image=i.c.img.withConfig({displayName:"Product__Image",componentId:"sc-1ekgfzr-1"})(["bottom:0;left:0;margin:auto;max-height:100%;max-width:100%;position:absolute;right:0;top:0;z-index:0;"]),u.Label=i.c.div.withConfig({displayName:"Product__Label",componentId:"sc-1ekgfzr-2"})(["background:#fff;bottom:0;padding:0.5rem;position:absolute;z-index:100;"]),u.Title=i.c.div.withConfig({displayName:"Product__Title",componentId:"sc-1ekgfzr-3"})(["display:inline;font-weight:700;"]),u.SubTitle=i.c.div.withConfig({displayName:"Product__SubTitle",componentId:"sc-1ekgfzr-4"})(["display:inline;"]),u.FavoriteButton=i.c.button.withConfig({displayName:"Product__FavoriteButton",componentId:"sc-1ekgfzr-5"})(["background:transparent;border:0;bottom:0.5rem;cursor:pointer;outline:0;position:absolute;right:0.5rem;z-index:100;"]),u.Icon=i.c.svg.withConfig({displayName:"Product__Icon",componentId:"sc-1ekgfzr-6"})(["fill:",";width:25px;"],(function(e){return e.theme.colors.primary})),u.Product.defaultProps={theme:{colors:{primary:"palevioletred"}}};t.default=function(e){var t=Object(c.b)(),r=Object(n.a)(t,2),o=r[0].favorites,i=r[1];return a.a.createElement(u.Product,null,a.a.createElement(u.Label,null,a.a.createElement(u.Title,null,e.title)," ",a.a.createElement(u.SubTitle,null,e.year)),a.a.createElement(u.Image,{src:"./data/".concat(e.image)}),a.a.createElement(u.FavoriteButton,{onClick:function(){return i({type:o.some((function(t){return t.productID===e.id}))?"clearFavorite":"addFavorite",product:e})}},a.a.createElement(u.Icon,{x:"0px",y:"0px",viewBox:"0 0 510 510"},a.a.createElement("g",null,o.some((function(t){return t.productID===e.id}))?a.a.createElement("g",{id:"favorite"},a.a.createElement("path",{d:"M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55\r C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"})):a.a.createElement("g",{id:"favorite-outline"},a.a.createElement("path",{d:"M369.75,21.675c-43.35,0-86.7,20.4-114.75,53.55c-28.05-33.15-71.4-53.55-114.75-53.55C61.2,21.675,0,82.875,0,161.925\r c0,96.9,86.7,175.95,219.3,293.25l35.7,33.15l35.7-33.15c130.05-119.85,219.3-198.9,219.3-293.25\r C510,82.875,448.8,21.675,369.75,21.675z M257.55,419.475H255l-2.55-2.55C130.05,307.274,51,235.875,51,161.925\r c0-51,38.25-89.25,89.25-89.25c38.25,0,76.5,25.5,91.8,61.2h48.45c12.75-35.7,51-61.2,89.25-61.2c51,0,89.25,38.25,89.25,89.25\r C459,235.875,379.95,307.274,257.55,419.475z"}))))))}},67:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(23),i=r.n(a),c=r(24),u=r(1),l=r(3),s=r(5),d={palette:{primary:["#1976d2","#2196f3","#71bcf7","#c2e2fb"],secondary:["#c2185b","#e91e63","#f06292","#f8bbd0"],danger:["#d32f2f","#f44336","#f8877f","#ffcdd2"],alert:["#ffa000","#ffc107","#ffd761","#ffecb3"],success:["#388e3c","#4caf50","#7cc47f","#c8e6c9"],white:["#fff","#fff","#eee"],grayscale:["#212121","#414141","#616161","#9e9e9e","#bdbdbd","#e0e0e0","#eeeeee","#ffffff"]}};d.colors={primary:d.palette.primary[0]},d.fonts={primary:"Helvetica Neue, Helvetica, Roboto, sans-serif",pre:"Consolas, Liberation Mono, Menlo, Courier, monospace",quote:"Georgia, serif"},d.sizes={maxWidth:"1100px"};var f=d,p=r(6);function m(){var e=Object(c.a)(["\n \t@import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat|Roboto+Slab&display=swap');\n\tbody {\n\t\tmargin:0;\n\t\tfont-size:16px;\n\t\tbackground:rgb(248, 249, 250);\n\t\tcolor:rgb(108, 117, 125);\n\t\toverflow-x: hidden;\n\t\tfont-family: 'Roboto Slab', serif;\n\t}\n\n\th1,h2,h3,h4,h5,h6 {\n\t\tfont-weight: 700;\n\t\tfont-family: 'Montserrat', sans-serif;\n\t\t}\n\n"]);return m=function(){return e},e}var v=Object(u.b)(m()),g=function(e){e.config;return o.a.createElement(l.a,{initialState:{products:[],favorites:[],modal:!1},reducer:p.reducer},o.a.createElement(u.a,{theme:f},o.a.createElement(v,null),o.a.createElement(s.Header,null),o.a.createElement(s.Catalog,null),o.a.createElement(s.FavoritesButton,null),o.a.createElement(s.Favorites,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.416352a9.chunk.js.map