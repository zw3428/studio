(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d67f8af6"],{"02e5":function(t,e,a){"use strict";a.r(e);var r,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("base-header",{staticClass:"pb-6"},[a("div",{staticClass:"row align-items-center py-4"},[a("div",{staticClass:"col-lg-6 col-7"},[a("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Studio Profile")]),a("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[a("route-breadcrumb")],1)]),a("div",{staticClass:"col-lg-6 col-5 text-right"},[a("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Save")]),a("base-button",{attrs:{size:"sm",type:"neutral"},on:{click:function(e){return e.preventDefault(),t.previewStudio(e)}}},[t._v("Preview")]),t.preview?a("base-button",{attrs:{size:"sm",type:"neutral"},on:{click:function(e){return e.preventDefault(),t.collapsePreview(e)}}},[t._v("Collapse")]):t._e()],1)])]),a("div",{staticClass:"container-fluid mt--6"},[a("div",{staticClass:"row card-wrapper"},[a("div",{class:{"col-lg-8":t.preview,"col-lg-12":!t.preview}},[a("div",{staticClass:"card mb-4"},[a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Studio Name")]),a("div",{staticClass:"has-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.studioName,expression:"studioName"}],staticClass:"form-control form-control-muted\n                          tk-border-bottom\n                          tk-font-color-black1",attrs:{type:"text"},domProps:{value:t.studioName},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){e.target.composing||(t.studioName=e.target.value)}}})])])])]),a("div",{staticClass:"col-md-4"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Email")]),a("div",{staticClass:"has-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-muted\n                          tk-border-bottom\n                          tk-font-color-black1",class:{"is-invalid":t.isInvalid},attrs:{type:"email"},domProps:{value:t.email},on:{blur:function(e){return e.preventDefault(),t.validationEmail(e)},keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isInvalid,expression:"isInvalid"}],staticClass:"invalid-feedback",staticStyle:{display:"block"}},[t._v(" The email is not correct. ")])])])]),a("div",{staticClass:"col-md-4"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Phone")]),a("div",{staticClass:"has-label"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend tk-px-width-px90"},[a("span",{staticClass:"input-group-text \n                              tk-border-bottom tk-px-width-px90 tk-text-center",staticStyle:{padding:"0"}},[a("el-select",{staticClass:"tk-select-border-none\n                                tk-border-bottom tk-select-bg-mute",model:{value:t.countryCodeSelected,callback:function(e){t.countryCodeSelected=e},expression:"countryCodeSelected"}},t._l(t.countrySelects.options,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label+"  "+t.areaCode,value:t.value}})})),1)],1)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control form-control-muted\n                            tk-border-bottom\n                            tk-font-color-black1",attrs:{type:"text"},domProps:{value:t.phone},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])])])])]),a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Address")]),a("div",{staticClass:"has-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control form-control-muted tk-border-bottom tk-font-color-black1",attrs:{type:"text"},domProps:{value:t.address},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){e.target.composing||(t.address=e.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Branding")]),a("div",{staticClass:"has-label"},[t._m(0),a("div",{staticClass:"form-group",attrs:{id:"storefrontColor"}},[a("label",{staticClass:"form-control-label d-block mb-3"},[t._v("Storefront Color")]),a("div",{staticClass:"btn-group btn-group-toggle btn-group-colors event-tag"},t._l(t.eventColors,(function(e){return a("label",{key:e,staticClass:"btn",class:[e,{"active focused":t.model.className===e}]},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.className,expression:"model.className"}],attrs:{type:"radio",name:"event-tag",autocomplete:"off"},domProps:{value:e,checked:t._q(t.model.className,e)},on:{change:function(a){return t.$set(t.model,"className",e)}}})])})),0)])])])])]),a("div",{staticClass:"col-md-6"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"}),a("div",{staticClass:"has-label",staticStyle:{"margin-top":"8px"}},[a("dropzone-file-upload",{attrs:{id:"uploadLogo"},model:{value:t.inputs.fileSingle,callback:function(e){t.$set(t.inputs,"fileSingle",e)},expression:"inputs.fileSingle"}})],1)])])])])])])])]),t.preview?a("div",{staticClass:"col-lg-4"},[t._m(1)]):t._e()])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-control tk-px-height-px130 tk-cursor-pointer",staticStyle:{"text-align":"center"}},[a("img",{staticClass:"tk-layout-inline-block tk-px-height-px108",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/tunekey-2019.appspot.com/o/images%2Finstruments%2F1.png?alt=media&token=9b3f075c-645d-4e1a-bba0-104f504786ee"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mb-4 tk-bg-color-red"},[r("div",{staticClass:"card-body"},[r("form",[r("span",[r("div",{staticClass:"form-group"},[r("div",{staticClass:"form-control-flush"},[r("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top tk-font-color-white text-xxl lh-140",staticStyle:{width:"75%"}},[t._v(" Hi student, Welcome to"),r("br"),t._v("Altered Stage! ")]),r("div",{staticClass:"avatar rounded-circle tk-layout-inline-block tk-layout-inline-block-top tk-bg-color-transparent",staticStyle:{width:"25%"}},[r("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/tunekey-2019.appspot.com/o/images%2Finstruments%2F1.png?alt=media&token=9b3f075c-645d-4e1a-bba0-104f504786ee"}})])])])]),r("div",[r("div",{staticClass:"tk-font-color-white tk-font-weight-light",staticStyle:{opacity:"0.8","margin-bottom":"0.5rem"}},[t._v(" Your lesson: ")]),r("div",{staticClass:"card mb-4"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"tk-lesson-type-instrument tk-layout-inline-block"},[r("div",{staticClass:"avatar rounded-circle"},[r("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/tunekey-2019.appspot.com/o/images%2Finstruments%2F1.png?alt=media&token=9b3f075c-645d-4e1a-bba0-104f504786ee"}})]),r("div",{staticClass:"tk-lesson-type-check"},[r("i",{staticClass:"fas fa-check-circle"})])]),r("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 80px)","margin-left":"16px"}},[r("div",{staticClass:"tk-font-weight-bold tk-font-letter-spacing-1 tk-font-color-black2 text-lg"},[t._v(" Trial lesson ")]),r("div",[r("div",{staticClass:"tk-px-width-px24 tk-px-height-px24 tk-layout-inline-block",staticStyle:{"border-radius":"40px",overflow:"hidden"}},[r("img",{staticStyle:{width:"100%"},attrs:{src:a("8121")}})]),r("div",{staticClass:"tk-layout-inline-block tk-font-color-gray tk-font-weight-light text-sm",staticStyle:{width:"calc(100% - 32px)","margin-left":"8px"}},[t._v(" Jim Morrison / Vocal ")])]),r("div",{staticClass:"tk-font-weight-light tk-font-color-gray text-sm",staticStyle:{"margin-top":"4px"}},[t._v(" Private, 60 minutes, $0 ")])])])])]),r("div",[r("div",{staticClass:"tk-font-color-white tk-font-weight-light",staticStyle:{opacity:"0.8","margin-bottom":"0.5rem"}},[t._v(" Info: ")]),r("div",{staticClass:"card mb-4"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 48px)"}},[r("div",{staticClass:"tk-font-weight-bold tk-font-letter-spacing-1 tk-font-color-black2 text-lg"},[t._v(" +1 31 642 4388 ")]),r("div",{staticClass:"tk-font-weight-light tk-font-color-gray text-sm",staticStyle:{"margin-top":"2px"}},[t._v(" Phone ")])]),r("div",{staticClass:"tk-layout-inline-block tk-px-width-px40 tk-bg-color-green tk-font-color-white tk-text-center",staticStyle:{"margint-left":"8px","border-radius":"40px","line-height":"40px"}},[r("i",{staticClass:"fas fa-phone"})])])]),r("div",{staticClass:"card mb-4"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 48px)"}},[r("div",{staticClass:"tk-font-weight-bold tk-font-letter-spacing-1 tk-font-color-black2 text-lg"},[t._v(" info@alteredstage.com ")]),r("div",{staticClass:"tk-font-weight-light tk-font-color-gray text-sm",staticStyle:{"margin-top":"2px"}},[t._v(" Email ")])]),r("div",{staticClass:"tk-layout-inline-block tk-px-width-px40 tk-bg-color-orange tk-font-color-white tk-text-center",staticStyle:{"margint-left":"8px","border-radius":"40px","line-height":"40px"}},[r("i",{staticClass:"fas fa-location-arrow"})])])]),r("div",{staticClass:"card mb-4"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 48px)"}},[r("div",{staticClass:"tk-font-weight-bold tk-font-letter-spacing-1 tk-font-color-black2 text-lg"},[t._v(" 657 W Lake St, Chicago ")]),r("div",{staticClass:"tk-font-weight-light tk-font-color-gray text-sm",staticStyle:{"margin-top":"2px"}},[t._v(" Address ")])]),r("div",{staticClass:"tk-layout-inline-block tk-px-width-px40 tk-bg-color-card6 tk-font-color-white tk-text-center",staticStyle:{"margint-left":"8px","border-radius":"40px","line-height":"40px"}},[r("i",{staticClass:"fas fa-map-marker-alt"})])])])])])])])}],n=(a("a088"),a("eb5b"),a("28f8")),l=(a("9102"),a("2984"),a("3aa8")),s=a.n(l),c=(a("086f"),a("ce6c")),u=a.n(c),d=a("b95b"),p={components:(r={DropzoneFileUpload:d["a"]},Object(n["a"])(r,u.a.name,u.a),Object(n["a"])(r,s.a.name,s.a),r),data:function(){return{address:"",phone:"",studioName:"",email:"",isInvalid:!1,preview:!1,countryCodeSelected:"+1",countrySelects:{simple:"",options:[{label:"China",areaCode:"+86",value:0},{label:"Hong Kong",areaCode:"+852",value:1},{label:"Macau",areaCode:"+853",value:2},{label:"Taiwan",areaCode:"+886",value:3},{label:"Japan",areaCode:"+81",value:4},{label:"South Korea",areaCode:"+82",value:5},{label:"USA",areaCode:"+1",value:6},{label:"Canada",areaCode:"+1",value:7},{label:"Afghanistan",areaCode:"+93",value:8},{label:"Albania",areaCode:"+355",value:9},{label:"Algeria",areaCode:"+213",value:10},{label:"American Samoa",areaCode:"+1",value:11},{label:"Andorra",areaCode:"+376",value:12},{label:"Angola",areaCode:"+244",value:13},{label:"Anguilla",areaCode:"+1",value:14},{label:"Antigua & Barbuda",areaCode:"+1",value:15},{label:"Argentina",areaCode:"+54",value:16},{label:"Armenia",areaCode:"+374",value:17},{label:"Aruba",areaCode:"+297",value:18},{label:"Ascension Island",areaCode:"+247",value:19},{label:"Australia",areaCode:"+61",value:20},{label:"Austria",areaCode:"+43",value:21},{label:"Azerbaijan",areaCode:"+994",value:22},{label:"Bahamas",areaCode:"+1",value:23},{label:"Bahrain",areaCode:"+973",value:24},{label:"Bangladesh",areaCode:"+880",value:25},{label:"Barbados",areaCode:"+1",value:26},{label:"Belarus",areaCode:"+375",value:27},{label:"Belgium",areaCode:"+32",value:28},{label:"Belize",areaCode:"+501",value:29},{label:"Benin",areaCode:"+229",value:30}]},model:{title:"",className:"bg-orange",description:"Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",start:"",end:""},eventColors:["bg-info","bg-orange","bg-red","bg-green","bg-default","bg-blue","bg-purple","bg-yellow"],inputs:{tags:["BUCHAREST","IASI","TIMISOARA"],fileSingle:[],fileMultiple:[]}}},watch:{countryCodeSelected:function(t,e){var a=this;document.getElementsByClassName("tk-select-border-none")[0].childNodes[1].childNodes[1].style.display="none",a.countrySelects.options.some((function(e){e.value===t&&setTimeout((function(){document.getElementsByClassName("tk-select-border-none")[0].childNodes[1].childNodes[1].value=e.areaCode,document.getElementsByClassName("tk-select-border-none")[0].childNodes[1].childNodes[1].style.display="block"}),10)}))}},mounted:function(){setTimeout((function(){document.getElementById("uploadLogo").childNodes[1].innerText="Drop logo here to upload",document.getElementById("uploadLogo").childNodes[1].style.height="210px",document.getElementById("uploadLogo").childNodes[1].style.lineHeight="56px",document.getElementById("storefrontColor").style.marginTop="16px"}),200)},methods:{previewStudio:function(){this.preview=!0},collapsePreview:function(){this.preview=!1},validationEmail:function(){var t=this;t.$tools.isNull(t.email)?t.isInvalid=!1:t.isInvalid=!t.$tools.isEmail(t.email)}}},f=p,v=a("c701"),m=Object(v["a"])(f,i,o,!1,null,null,null);e["default"]=m.exports},"2e91":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("c585");function r(t,e,a,r,i,o,n){try{var l=t[o](n),s=l.value}catch(c){return void a(c)}l.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(i,o){var n=t.apply(e,a);function l(t){r(n,i,o,l,s,"next",t)}function s(t){r(n,i,o,l,s,"throw",t)}l(void 0)}))}}},"6a61":function(t,e,a){var r=function(t){"use strict";var e,a=Object.prototype,r=a.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",n=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(j){s=function(t,e,a){return t[e]=a}}function c(t,e,a,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),n=new z(r||[]);return o._invoke=S(t,a,n),o}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(j){return{type:"throw",arg:j}}}t.wrap=c;var d="suspendedStart",p="suspendedYield",f="executing",v="completed",m={};function h(){}function g(){}function b(){}var y={};y[o]=function(){return this};var C=Object.getPrototypeOf,k=C&&C(C(O([])));k&&k!==a&&r.call(k,o)&&(y=k);var w=b.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function a(i,o,n,l){var s=u(t[i],t,o);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,n,l)}),(function(t){a("throw",t,n,l)})):e.resolve(d).then((function(t){c.value=t,n(c)}),(function(t){return a("throw",t,n,l)}))}l(s.arg)}var i;function o(t,r){function o(){return new e((function(e,i){a(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function S(t,e,a){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return A()}a.method=i,a.arg=o;while(1){var n=a.delegate;if(n){var l=E(n,a);if(l){if(l===m)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=f;var s=u(t,e,a);if("normal"===s.type){if(r=a.done?v:p,s.arg===m)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r=v,a.method="throw",a.arg=s.arg)}}}function E(t,a){var r=t.iterator[a.method];if(r===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,E(t,a),"throw"===a.method))return m;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=u(r,t.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,m;var o=i.arg;return o?o.done?(a[t.resultName]=o.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,m):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function O(t){if(t){var a=t[o];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,n=function a(){while(++i<t.length)if(r.call(t,i))return a.value=t[i],a.done=!1,a;return a.value=e,a.done=!0,a};return n.next=n}}return{next:A}}function A(){return{value:e,done:!0}}return g.prototype=w.constructor=b,b.constructor=g,g.displayName=s(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[n]=function(){return this},t.AsyncIterator=_,t.async=function(e,a,r,i,o){void 0===o&&(o=Promise);var n=new _(c(e,a,r,i),o);return t.isGeneratorFunction(a)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},x(w),s(w,l,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=O,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function i(r,i){return l.type="throw",l.arg=t,a.next=r,i&&(a.method="next",a.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],l=n.completion;if("root"===n.tryLoc)return i("end");if(n.tryLoc<=this.prev){var s=r.call(n,"catchLoc"),c=r.call(n,"finallyLoc");if(s&&c){if(this.prev<n.catchLoc)return i(n.catchLoc,!0);if(this.prev<n.finallyLoc)return i(n.finallyLoc)}else if(s){if(this.prev<n.catchLoc)return i(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return i(n.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var n=o?o.completion:{};return n.type=t,n.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),L(a),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var i=r.arg;L(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:O(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},8121:function(t,e,a){t.exports=a.p+"img/team-4.66618a41.jpg"},b95b:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropzone mb-3 dz-clickable",class:[t.multiple?"dropzone-multiple":"dropzone-single"]},[a("div",{staticClass:"fallback"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"projectCoverUploads",multiple:t.multiple}}),a("label",{staticClass:"custom-file-label",attrs:{for:"projectCoverUploads"}},[t._v("Choose file")])])]),t.multiple?a("ul",{ref:"previewMultiple",staticClass:"dz-preview dz-preview-multiple list-group list-group-lg list-group-flush",class:t.previewClasses},[t._m(1)]):a("div",{ref:"previewSingle",staticClass:"dz-preview dz-preview-single",class:t.previewClasses},[t._m(0)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dz-preview-cover"},[a("img",{staticClass:"dz-preview-img",attrs:{"data-dz-thumbnail":""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item px-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"avatar-img rounded",attrs:{"data-dz-thumbnail":""}})])]),a("div",{staticClass:"col ml--3"},[a("h4",{staticClass:"mb-1",attrs:{"data-dz-name":""}},[t._v("...")]),a("p",{staticClass:"small text-muted mb-0",attrs:{"data-dz-size":""}},[t._v("...")])]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{"data-dz-remove":"true"}},[a("i",{staticClass:"fas fa-trash"})])])])])}],o=(a("bf6c"),a("3610"),a("b526"),a("c585"),a("f644"),a("d211")),n=(a("6a61"),a("2e91")),l={name:"dropzone-file-upload",props:{options:{type:Object,default:function(){return{}}},value:[String,Object,Array],url:{type:String,default:"http://"},multiple:Boolean,previewClasses:[String,Object,Array]},model:{prop:"value",event:"change"},data:function(){return{currentFile:null,files:[],showList:!1}},methods:{initDropzone:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,i,n,l,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([a.e("chunk-2d207ecb"),a.e("chunk-8a841d10")]).then(a.t.bind(null,"04e0",7));case 2:r=e.sent,r=r.default||r,r.autoDiscover=!1,i=t.multiple?t.$refs.previewMultiple:t.$refs.previewSingle,n=t,l=Object(o["a"])(Object(o["a"])({},t.options),{},{url:t.url,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:i,previewTemplate:i.innerHTML,maxFiles:t.multiple?null:1,acceptedFiles:t.multiple?null:"image/*",init:function(){this.on("addedfile",(function(t){!n.multiple&&n.currentFile,n.currentFile=t}))}}),t.dropzone=new r(t.$el,l),i.innerHTML="",s=["drop","dragstart","dragend","dragenter","dragover","addedfile","removedfile","thumbnail","error","processing","uploadprogress","sending","success","complete","canceled","maxfilesreached","maxfilesexceeded","processingmultiple","sendingmultiple","successmultiple","completemultiple","canceledmultiple","totaluploadprogress","reset","queuecomplete"],s.forEach((function(e){t.dropzone.on(e,(function(a){if(t.$emit(e,a),"addedfile"===e)t.files.push(a),t.$emit("change",t.files);else if("removedfile"===e){var r=t.files.findIndex((function(t){return t.upload.uuid===a.upload.uuid}));-1!==r&&t.files.splice(r,1),t.$emit("change",t.files)}}))}));case 12:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.initDropzone();case 1:case"end":return e.stop()}}),e)})))()}},s=l,c=a("c701"),u=Object(c["a"])(s,r,i,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-d67f8af6.b6b3b4ef.js.map