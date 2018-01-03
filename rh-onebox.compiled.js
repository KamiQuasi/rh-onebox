!function(e,t){if("function"==typeof define&&define.amd)define(["exports","../rhelement/rhelement.compiled.js","../../lit-html/lit-html.js","../../whatwg-fetch/fetch.js"],t);else if("undefined"!=typeof exports)t(exports,require("../rhelement/rhelement.compiled.js"),require("../../lit-html/lit-html.js"),require("../../whatwg-fetch/fetch.js"));else{var r={};t(r,e.rhelementCompiled,e.litHtml,e.fetch),e.rhOnebox=r}}(this,function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(t),o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.template||console.warn("A lit-html template needs to be provided in the constructor"),n.config=r,n.htmlTemplate=r.template,n.loading=!1,n.successHandler=n.successHandler.bind(n),n.errorHandler=n.errorHandler.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),o(t,null,[{key:"observedAttributes",get:function(){return["source","term"]}}]),o(t,[{key:"attributeChangedCallback",value:function(e,t,r){switch(e){case"source":this.source=r,this.getData(this.source);break;case"term":this.term=r}}},{key:"getData",value:function(e){if(this.htmlTemplate)return this.loading=!0,fetch(e).then(function(e){return e.json()}).then(this.loading=!1).then(this.successHandler).catch(this.errorHandler)}},{key:"successHandler",value:function(e){this.data=e,this.render()}},{key:"errorHandler",value:function(e){console.log(e)}},{key:"findMatch",value:function(){var e=this,t=void 0;return this.data[this.config.arrayName].forEach(function(r){r[e.config.matchArrayName].forEach(function(n){n.toLowerCase()===e.term.toLowerCase().trim()&&(t=r)})}),t}},{key:"render",value:function(e){var t=this.findMatch();(0,r.render)(this.htmlTemplate(t),this.shadowRoot)}}]),t}();e.default=i});