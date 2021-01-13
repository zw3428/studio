(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e9bbd74"],{"02e5":function(t,e,a){"use strict";a.r(e);var l,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("base-header",{staticClass:"pb-6"},[a("div",{staticClass:"row align-items-center py-4"},[a("div",{staticClass:"col-lg-6 col-7"},[a("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Studio Profile")]),a("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[a("route-breadcrumb")],1)]),a("div",{staticClass:"col-lg-6 col-5 text-right"},[a("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Save")]),a("base-button",{attrs:{size:"sm",type:"neutral"},on:{click:function(e){return e.preventDefault(),t.previewStudio(e)}}},[t._v("Preview")]),t.preview?a("base-button",{attrs:{size:"sm",type:"neutral"},on:{click:function(e){return e.preventDefault(),t.collapsePreview(e)}}},[t._v("Collapse")]):t._e()],1)])]),a("div",{staticClass:"container-fluid mt--6"},[a("div",{staticClass:"row card-wrapper"},[a("div",{class:{"col-lg-8":t.preview,"col-lg-12":!t.preview}},[a("div",{staticClass:"card mb-4"},[a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Studio Name")]),a("div",{staticClass:"has-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.studioName,expression:"studioName"}],staticClass:"form-control form-control-muted\n                          tk-border-bottom\n                          tk-font-color-black1",attrs:{type:"text"},domProps:{value:t.studioName},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){e.target.composing||(t.studioName=e.target.value)}}})])])])]),a("div",{staticClass:"col-md-4"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Email")]),a("div",{staticClass:"has-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-muted\n                          tk-border-bottom\n                          tk-font-color-black1",class:{"is-invalid":t.isInvalid},attrs:{type:"email"},domProps:{value:t.email},on:{blur:function(e){return e.preventDefault(),t.validationEmail(e)},keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isInvalid,expression:"isInvalid"}],staticClass:"invalid-feedback",staticStyle:{display:"block"}},[t._v(" The email is not correct. ")])])])]),a("div",{staticClass:"col-md-4"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Phone")]),a("div",{staticClass:"has-label"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend tk-px-width-px90"},[a("span",{staticClass:"input-group-text \n                              tk-border-bottom tk-px-width-px90 tk-text-center",staticStyle:{padding:"0"}},[a("el-select",{staticClass:"tk-select-border-none\n                                tk-border-bottom tk-select-bg-mute",model:{value:t.countryCodeSelected,callback:function(e){t.countryCodeSelected=e},expression:"countryCodeSelected"}},t._l(t.countrySelects.options,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label+"  "+t.areaCode,value:t.value}})})),1)],1)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control form-control-muted\n                            tk-border-bottom\n                            tk-font-color-black1",attrs:{type:"text"},domProps:{value:t.phone},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])])])])]),a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Address")]),a("div",{staticClass:"has-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control form-control-muted tk-border-bottom tk-font-color-black1",attrs:{type:"text"},domProps:{value:t.address},on:{keypress:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},input:function(e){e.target.composing||(t.address=e.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"},[t._v("Branding")]),a("div",{staticClass:"has-label"},[t._m(0),a("div",{staticClass:"form-group",attrs:{id:"storefrontColor"}},[a("label",{staticClass:"form-control-label d-block mb-3"},[t._v("Storefront Color")]),a("div",{staticClass:"btn-group btn-group-toggle btn-group-colors event-tag"},t._l(t.eventColors,(function(e){return a("label",{key:e,staticClass:"btn",class:[e,{"active focused":t.model.className===e}]},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.className,expression:"model.className"}],attrs:{type:"radio",name:"event-tag",autocomplete:"off"},domProps:{value:e,checked:t._q(t.model.className,e)},on:{change:function(a){return t.$set(t.model,"className",e)}}})])})),0)])])])])]),a("div",{staticClass:"col-md-6"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label"}),a("div",{staticClass:"has-label",staticStyle:{"margin-top":"8px"}},[a("dropzone-file-upload",{attrs:{id:"uploadLogo"},model:{value:t.inputs.fileSingle,callback:function(e){t.$set(t.inputs,"fileSingle",e)},expression:"inputs.fileSingle"}})],1)])])])])])])])]),t.preview?a("div",{staticClass:"col-lg-4"},[t._m(1)]):t._e()])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-control tk-px-height-px130 tk-cursor-pointer",staticStyle:{"text-align":"center"}},[a("img",{staticClass:"tk-layout-inline-block tk-px-height-px108",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/tunekey-2019.appspot.com/o/images%2Finstruments%2F1.png?alt=media&token=9b3f075c-645d-4e1a-bba0-104f504786ee"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card mb-4 tk-bg-color-red"},[l("div",{staticClass:"card-body"},[l("form",[l("span",[l("div",{staticClass:"form-group"},[l("div",{staticClass:"form-control-flush"},[l("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top tk-font-color-white text-xxl lh-140",staticStyle:{width:"75%"}},[t._v(" Hi student, Welcome to"),l("br"),t._v("Altered Stage! ")]),l("div",{staticClass:"avatar rounded-circle tk-layout-inline-block tk-layout-inline-block-top tk-bg-color-transparent",staticStyle:{width:"25%"}},[l("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/tunekey-2019.appspot.com/o/images%2Finstruments%2F1.png?alt=media&token=9b3f075c-645d-4e1a-bba0-104f504786ee"}})])])])]),l("div",[l("div",{staticClass:"tk-font-color-white tk-font-weight-light",staticStyle:{opacity:"0.8","margin-bottom":"0.5rem"}},[t._v(" Your lesson: ")]),l("div",{staticClass:"card mb-4"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"tk-lesson-type-instrument tk-layout-inline-block"},[l("div",{staticClass:"avatar rounded-circle"},[l("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/tunekey-2019.appspot.com/o/images%2Finstruments%2F1.png?alt=media&token=9b3f075c-645d-4e1a-bba0-104f504786ee"}})]),l("div",{staticClass:"tk-lesson-type-check"},[l("i",{staticClass:"fas fa-check-circle"})])]),l("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 80px)","margin-left":"16px"}},[l("div",{staticClass:"tk-font-weight-bold tk-font-letter-spacing-1 tk-font-color-black2 text-lg"},[t._v(" Trial lesson ")]),l("div",[l("div",{staticClass:"tk-px-width-px24 tk-px-height-px24 tk-layout-inline-block",staticStyle:{"border-radius":"40px",overflow:"hidden"}},[l("img",{staticStyle:{width:"100%"},attrs:{src:a("8121")}})]),l("div",{staticClass:"tk-layout-inline-block tk-font-color-gray tk-font-weight-light text-sm",staticStyle:{width:"calc(100% - 32px)","margin-left":"8px"}},[t._v(" Jim Morrison / Vocal ")])]),l("div",{staticClass:"tk-font-weight-light tk-font-color-gray text-sm",staticStyle:{"margin-top":"4px"}},[t._v(" Private, 60 minutes, $0 ")])])])])]),l("div",[l("div",{staticClass:"tk-font-color-white tk-font-weight-light",staticStyle:{opacity:"0.8","margin-bottom":"0.5rem"}},[t._v(" Info: ")]),l("div",{staticClass:"card mb-4"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 48px)"}},[l("div",{staticClass:"tk-font-weight-bold tk-font-letter-spacing-1 tk-font-color-black2 text-lg"},[t._v(" +1 31 642 4388 ")]),l("div",{staticClass:"tk-font-weight-light tk-font-color-gray text-sm",staticStyle:{"margin-top":"2px"}},[t._v(" Phone ")])]),l("div",{staticClass:"tk-layout-inline-block tk-px-width-px40 tk-bg-color-green tk-font-color-white tk-text-center",staticStyle:{"margint-left":"8px","border-radius":"40px","line-height":"40px"}},[l("i",{staticClass:"fas fa-phone"})])])]),l("div",{staticClass:"card mb-4"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 48px)"}},[l("div",{staticClass:"tk-font-weight-bold tk-font-letter-spacing-1 tk-font-color-black2 text-lg"},[t._v(" info@alteredstage.com ")]),l("div",{staticClass:"tk-font-weight-light tk-font-color-gray text-sm",staticStyle:{"margin-top":"2px"}},[t._v(" Email ")])]),l("div",{staticClass:"tk-layout-inline-block tk-px-width-px40 tk-bg-color-orange tk-font-color-white tk-text-center",staticStyle:{"margint-left":"8px","border-radius":"40px","line-height":"40px"}},[l("i",{staticClass:"fas fa-location-arrow"})])])]),l("div",{staticClass:"card mb-4"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 48px)"}},[l("div",{staticClass:"tk-font-weight-bold tk-font-letter-spacing-1 tk-font-color-black2 text-lg"},[t._v(" 657 W Lake St, Chicago ")]),l("div",{staticClass:"tk-font-weight-light tk-font-color-gray text-sm",staticStyle:{"margin-top":"2px"}},[t._v(" Address ")])]),l("div",{staticClass:"tk-layout-inline-block tk-px-width-px40 tk-bg-color-card6 tk-font-color-white tk-text-center",staticStyle:{"margint-left":"8px","border-radius":"40px","line-height":"40px"}},[l("i",{staticClass:"fas fa-map-marker-alt"})])])])])])])])}],o=(a("a088"),a("eb5b"),a("28f8")),n=(a("9102"),a("2984"),a("3aa8")),r=a.n(n),c=(a("086f"),a("ce6c")),d=a.n(c),u=a("b95b"),p={components:(l={DropzoneFileUpload:u["a"]},Object(o["a"])(l,d.a.name,d.a),Object(o["a"])(l,r.a.name,r.a),l),data:function(){return{address:"",phone:"",studioName:"",email:"",isInvalid:!1,preview:!1,countryCodeSelected:"+1",countrySelects:{simple:"",options:[{label:"China",areaCode:"+86",value:0},{label:"Hong Kong",areaCode:"+852",value:1},{label:"Macau",areaCode:"+853",value:2},{label:"Taiwan",areaCode:"+886",value:3},{label:"Japan",areaCode:"+81",value:4},{label:"South Korea",areaCode:"+82",value:5},{label:"USA",areaCode:"+1",value:6},{label:"Canada",areaCode:"+1",value:7},{label:"Afghanistan",areaCode:"+93",value:8},{label:"Albania",areaCode:"+355",value:9},{label:"Algeria",areaCode:"+213",value:10},{label:"American Samoa",areaCode:"+1",value:11},{label:"Andorra",areaCode:"+376",value:12},{label:"Angola",areaCode:"+244",value:13},{label:"Anguilla",areaCode:"+1",value:14},{label:"Antigua & Barbuda",areaCode:"+1",value:15},{label:"Argentina",areaCode:"+54",value:16},{label:"Armenia",areaCode:"+374",value:17},{label:"Aruba",areaCode:"+297",value:18},{label:"Ascension Island",areaCode:"+247",value:19},{label:"Australia",areaCode:"+61",value:20},{label:"Austria",areaCode:"+43",value:21},{label:"Azerbaijan",areaCode:"+994",value:22},{label:"Bahamas",areaCode:"+1",value:23},{label:"Bahrain",areaCode:"+973",value:24},{label:"Bangladesh",areaCode:"+880",value:25},{label:"Barbados",areaCode:"+1",value:26},{label:"Belarus",areaCode:"+375",value:27},{label:"Belgium",areaCode:"+32",value:28},{label:"Belize",areaCode:"+501",value:29},{label:"Benin",areaCode:"+229",value:30}]},model:{title:"",className:"bg-orange",description:"Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",start:"",end:""},eventColors:["bg-info","bg-orange","bg-red","bg-green","bg-default","bg-blue","bg-purple","bg-yellow"],inputs:{tags:["BUCHAREST","IASI","TIMISOARA"],fileSingle:[],fileMultiple:[]}}},watch:{countryCodeSelected:function(t,e){var a=this;document.getElementsByClassName("tk-select-border-none")[0].childNodes[1].childNodes[1].style.display="none",a.countrySelects.options.some((function(e){e.value===t&&setTimeout((function(){document.getElementsByClassName("tk-select-border-none")[0].childNodes[1].childNodes[1].value=e.areaCode,document.getElementsByClassName("tk-select-border-none")[0].childNodes[1].childNodes[1].style.display="block"}),10)}))}},mounted:function(){setTimeout((function(){document.getElementById("uploadLogo").childNodes[1].innerText="Drop logo here to upload",document.getElementById("uploadLogo").childNodes[1].style.height="210px",document.getElementById("uploadLogo").childNodes[1].style.lineHeight="56px",document.getElementById("storefrontColor").style.marginTop="16px"}),200)},methods:{previewStudio:function(){this.preview=!0},collapsePreview:function(){this.preview=!1},validationEmail:function(){var t=this;t.$tools.isNull(t.email)?t.isInvalid=!1:t.isInvalid=!t.$tools.isEmail(t.email)}}},m=p,v=a("c701"),b=Object(v["a"])(m,s,i,!1,null,null,null);e["default"]=b.exports},8121:function(t,e,a){t.exports=a.p+"img/team-4.66618a41.jpg"},b95b:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropzone mb-3 dz-clickable",class:[t.multiple?"dropzone-multiple":"dropzone-single"]},[a("div",{staticClass:"fallback"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"projectCoverUploads",multiple:t.multiple}}),a("label",{staticClass:"custom-file-label",attrs:{for:"projectCoverUploads"}},[t._v("Choose file")])])]),t.multiple?a("ul",{ref:"previewMultiple",staticClass:"dz-preview dz-preview-multiple list-group list-group-lg list-group-flush",class:t.previewClasses},[t._m(1)]):a("div",{ref:"previewSingle",staticClass:"dz-preview dz-preview-single",class:t.previewClasses},[t._m(0)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dz-preview-cover"},[a("img",{staticClass:"dz-preview-img",attrs:{"data-dz-thumbnail":""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item px-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"avatar-img rounded",attrs:{"data-dz-thumbnail":""}})])]),a("div",{staticClass:"col ml--3"},[a("h4",{staticClass:"mb-1",attrs:{"data-dz-name":""}},[t._v("...")]),a("p",{staticClass:"small text-muted mb-0",attrs:{"data-dz-size":""}},[t._v("...")])]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{"data-dz-remove":"true"}},[a("i",{staticClass:"fas fa-trash"})])])])])}],i=(a("bf6c"),a("3610"),a("b526"),a("c585"),a("f644"),a("d211")),o=(a("6a61"),a("2e91")),n={name:"dropzone-file-upload",props:{options:{type:Object,default:function(){return{}}},value:[String,Object,Array],url:{type:String,default:"http://"},multiple:Boolean,previewClasses:[String,Object,Array]},model:{prop:"value",event:"change"},data:function(){return{currentFile:null,files:[],showList:!1}},methods:{initDropzone:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var l,s,o,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([a.e("chunk-2d207ecb"),a.e("chunk-8a841d10")]).then(a.t.bind(null,"04e0",7));case 2:l=e.sent,l=l.default||l,l.autoDiscover=!1,s=t.multiple?t.$refs.previewMultiple:t.$refs.previewSingle,o=t,n=Object(i["a"])(Object(i["a"])({},t.options),{},{url:t.url,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:s,previewTemplate:s.innerHTML,maxFiles:t.multiple?null:1,acceptedFiles:t.multiple?null:"image/*",init:function(){this.on("addedfile",(function(t){!o.multiple&&o.currentFile,o.currentFile=t}))}}),t.dropzone=new l(t.$el,n),s.innerHTML="",r=["drop","dragstart","dragend","dragenter","dragover","addedfile","removedfile","thumbnail","error","processing","uploadprogress","sending","success","complete","canceled","maxfilesreached","maxfilesexceeded","processingmultiple","sendingmultiple","successmultiple","completemultiple","canceledmultiple","totaluploadprogress","reset","queuecomplete"],r.forEach((function(e){t.dropzone.on(e,(function(a){if(t.$emit(e,a),"addedfile"===e)t.files.push(a),t.$emit("change",t.files);else if("removedfile"===e){var l=t.files.findIndex((function(t){return t.upload.uuid===a.upload.uuid}));-1!==l&&t.files.splice(l,1),t.$emit("change",t.files)}}))}));case 12:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.initDropzone();case 1:case"end":return e.stop()}}),e)})))()}},r=n,c=a("c701"),d=Object(c["a"])(r,l,s,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-4e9bbd74.b3c80ab8.js.map