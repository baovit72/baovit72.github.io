(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ecb6ad3f71b67bb295c7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n("8af190b70a6bc55c6f1b"),a=n.n(r);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t="function"===typeof Map?new Map:void 0;return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,f(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)})(e)}function l(e,t,n){return(l=i()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&s(a,n.prototype),a}).apply(null,arguments)}function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function c(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}l((r=r.apply(e,t||[])).next())}))},p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,n,r=(t=a,n=i(),function(){var e,r=f(t);if(n){var a=f(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return c(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e.statusText)).response=e,t}return a}(u(Error));function d(e){return 204===e.status||205===e.status?null:e.json()}function y(e){if(e.status>=200&&e.status<300)return e;var t=new p(e);throw t.response=e,t}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,o=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(){var e=h(Object(r.useState)(""),2),t=e[0],n=e[1],o=h(Object(r.useState)(""),2),c=o[0],u=o[1];function l(){var e=new FormData;e.append("email",t),e.append("password",c),function(e,t){return m(this,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,t);case 2:return r=n.sent,n.next=5,y(r);case 5:return a=n.sent,n.abrupt("return",d(a));case 7:case"end":return n.stop()}}),n)})))}(window.API_DOMAIN+"/login",{method:"POST",body:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}return a.a.createElement("section",{className:"ftco-section"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("div",{className:"col-md-12 col-lg-10"},a.a.createElement("div",{className:"wrap d-md-flex"},a.a.createElement("div",{className:"text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last"},a.a.createElement("div",{className:"text w-100"},a.a.createElement("h2",null,"Ch\xe0o m\u1eebng \u0111\u1ebfn v\u1edbi \u0110\xe1nh s\u1ed1 \u0111\u1ec1 qu\u1ed1c gia"))),a.a.createElement("div",{className:"login-wrap p-4 p-lg-5"},a.a.createElement("div",{className:"d-flex"},a.a.createElement("div",{className:"w-100"},a.a.createElement("h3",{className:"mb-4"},"\u0110\u0103ng nh\u1eadp"))),a.a.createElement("form",{action:"#",className:"signin-form"},a.a.createElement("div",{className:"form-group mb-3"},a.a.createElement("label",{className:"label",htmlFor:"name"},"Email"),a.a.createElement("input",{type:"text",className:"form-control",placeholder:"Email",onChange:function(e){return n(e.target.value)},required:!0})),a.a.createElement("div",{className:"form-group mb-3"},a.a.createElement("label",{className:"label",htmlFor:"password"},"M\u1eadt kh\u1ea9u"),a.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",onChange:function(e){return u(e.target.value)},required:!0})),a.a.createElement("div",{className:"form-group"},a.a.createElement("button",{onClick:function(){return l()},className:"form-control btn btn-primary submit px-3"},"\u0110\u0103ng nh\u1eadp")),a.a.createElement("div",{className:"form-group d-md-flex"},a.a.createElement("div",{className:"w-50 text-left"},a.a.createElement("label",{className:"checkbox-wrap checkbox-primary mb-0"},"Nh\u1edb \u0111\u0103ng nh\u1eadp",a.a.createElement("input",{type:"checkbox",checked:!0}),a.a.createElement("span",{className:"checkmark"}))),a.a.createElement("div",{className:"w-50 text-md-right"},a.a.createElement("a",{href:"#"},"Qu\xean m\u1eadt kh\u1ea9u"))))))))))}}}]);