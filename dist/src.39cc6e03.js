parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e){return r(e)||n(e)||a(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return i(e)}function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){c(a,r,o,i,u,"next",e)}function u(e){c(a,r,o,i,u,"throw",e)}i(void 0)})}}function s(e){return new f(e)}function l(e){return function(){return new p(e.apply(this,arguments))}}function p(e){var t,n;function r(t,n){try{var a=e[t](n),i=a.value,c=i instanceof f;Promise.resolve(c?i.wrapped:i).then(function(e){c?r("return"===t?"return":"next",e):o(a.done?"return":"normal",e)},function(e){r("throw",e)})}catch(u){o("throw",u)}}function o(e,o){switch(e){case"return":t.resolve({value:o,done:!0});break;case"throw":t.reject(o);break;default:t.resolve({value:o,done:!1})}(t=t.next)?r(t.key,t.arg):n=null}this._invoke=function(e,o){return new Promise(function(a,i){var c={key:e,arg:o,resolve:a,reject:i,next:null};n?n=n.next=c:(t=n=c,r(e,o))})},"function"!=typeof e.return&&(this.return=void 0)}function f(e){this.wrapped=e}"function"==typeof Symbol&&Symbol.asyncIterator&&(p.prototype[Symbol.asyncIterator]=function(){return this}),p.prototype.next=function(e){return this._invoke("next",e)},p.prototype.throw=function(e){return this._invoke("throw",e)},p.prototype.return=function(e){return this._invoke("return",e)},"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var d=new Airtable({apiKey:"keyivOeI56X4blAIx"}).base("appozkf4aTSkgrAEv");mapboxgl.accessToken="pk.eyJ1IjoidGl0b3VhbmNyZWFjaCIsImEiOiJja2hheDd2MnIwa280MnBrNG5wazhmbXY3In0.hIQY0ILrWDV0RVSO5HWcYQ";var m=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[-77.034084142948,38.909671288923],zoom:13,scrollZoom:!0});function v(){return y.apply(this,arguments)}function y(){return(y=l(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(new Promise(function(e){d("StoreLocator").select({view:"Grid view"}).firstPage(function(t,n){e(n)})}));case 2:t=e.sent,e.t0=regeneratorRuntime.keys(t);case 4:if((e.t1=e.t0()).done){e.next=10;break}return n=e.t1.value,e.next=8,{type:"feature",geometry:{type:"point",coordinates:[n.Longitude,n.Latitude],properties:{name:n.Name,description:n.DescriptionHtml}}};case 8:e.next=4;break;case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(){return g.apply(this,arguments)}function g(){return(g=u(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return n=t.sent,t.abrupt("return",{type:"FeatureCollection",features:e(n)});case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}u(regeneratorRuntime.mark(function e(){var t,n,r,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(e){var t=document.getElementsByClassName("mapboxgl-popup");t[0]&&t[0].remove();new mapboxgl.Popup({closeOnClick:!1}).setLngLat(e.geometry.coordinates).setHTML("<h3>Sweetgreen</h3><h4>"+e.properties.address+"</h4>").addTo(m)},a=function(e){m.flyTo({center:e.geometry.coordinates,zoom:15})},r=function(e){e.features.forEach(function(t,n){var r=t.properties,c=document.getElementById("listings").appendChild(document.createElement("div"));c.id="listing-"+r.id,c.className="item";var u=c.appendChild(document.createElement("a"));u.href="#",u.className="title",u.id="link-"+r.id,u.innerHTML=r.address;var s=c.appendChild(document.createElement("div"));s.innerHTML=r.city,r.phone&&(s.innerHTML+=" · "+r.phoneFormatted),u.addEventListener("click",function(t){var n,r=o(e.features);try{for(r.s();!(n=r.n()).done;){var c=n.value;this.id==="link-"+c.properties.id&&(a(c),i(c))}}catch(s){r.e(s)}finally{r.f()}var u=document.getElementsByClassName("active");u[0]&&u[0].classList.remove("active"),this.parentNode.classList.add("active")})})},n=function(){t.features.forEach(function(e){var t=document.createElement("div");t.id="marker-"+e.properties.id,t.className="marker",new mapboxgl.Marker(t,{offset:[0,-23]}).setLngLat(e.geometry.coordinates).addTo(m),t.addEventListener("click",function(t){a(e),i(e);var n=document.getElementsByClassName("active");t.stopPropagation(),n[0]&&n[0].classList.remove("active"),document.getElementById("listing-"+e.properties.id).classList.add("active")})})},e.next=6,h();case 6:(t=e.sent).features.forEach(function(e,t){e.properties.id=t}),m.on("load",function(e){m.addSource("places",{type:"geojson",data:t}),r(t),n()});case 9:case"end":return e.stop()}},e)}))();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/StoreLocator/dist/src.39cc6e03.js.map