(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69798036"],{"53b1":function(t,l,a){"use strict";a.r(l);var s,e=function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",[a("base-header",{staticClass:"pb-6"},[a("div",{staticClass:"row align-items-center py-4"},[a("div",{staticClass:"col-lg-6 col-7"},[a("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Settings")]),a("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[a("route-breadcrumb")],1)]),a("div",{staticClass:"col-lg-6 col-5 text-right"},[a("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Save")])],1)])]),a("div",{staticClass:"container-fluid mt--6"},[a("div",{staticClass:"row card-wrapper"},[a("div",{class:{"col-lg-8":t.previewInvoice,"col-lg-12":!t.previewInvoice}},[a("div",{staticClass:"card mb-4"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row align-items-center"},[t._m(0),a("div",{staticClass:"col-4 text-right"},[a("span",{staticClass:"btn btn-sm btn-neutral tk-font-color-main",on:{click:function(l){return l.preventDefault(),t.previewInvoiceSettings(l)}}},[t._v("Preview")])])])]),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("base-input",{attrs:{label:"Business Info"}},[a("textarea",{staticClass:"form-control tk-font-color-black1",attrs:{id:"businessInfo",rows:"1",resize:"none"}})])],1),a("div",{staticClass:"col-md-4"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",staticStyle:{opacity:"0"}},[t._v("Pay by credit card or ACH")]),a("div",{staticClass:"has-label"},[a("div",{staticClass:"form-control"},[a("span",{staticClass:"tk-layout-inline-block tk-font-color-black1",staticStyle:{width:"calc(100% - 56px)"}},[t._v("Online payments")]),a("base-switch",{staticClass:"mr-1 tk-layout-inline-block",attrs:{"on-text":"On","off-text":"Off",type:"main"},model:{value:t.onlinePayments,callback:function(l){t.onlinePayments=l},expression:"onlinePayments"}})],1)])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("base-input",{attrs:{label:"Payment Due"}},[a("el-select",{attrs:{filterable:""},model:{value:t.paymentsDueSelects.simple,callback:function(l){t.$set(t.paymentsDueSelects,"simple",l)},expression:"paymentsDueSelects.simple"}},t._l(t.paymentsDueSelects.options,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1)],1)],1),a("div",{staticClass:"col-md-4"},[a("base-input",{attrs:{label:"Sales Tax"}},[a("el-select",{attrs:{filterable:"",placeholder:"Payment Due"},model:{value:t.salesTax.simple,callback:function(l){t.$set(t.salesTax,"simple",l)},expression:"salesTax.simple"}},t._l(t.salesTax.options,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1)],1)],1),a("div",{staticClass:"col-md-4"},[a("base-input",{attrs:{label:"Late Fee"}})],1)]),a("base-input",{attrs:{label:"Invoice Notes"}},[a("textarea",{staticClass:"form-control tk-font-color-black1",attrs:{id:"invoiceNotes",rows:"1",resize:"none"}})]),a("base-input",{attrs:{label:"Email Text"}},[a("textarea",{staticClass:"form-control tk-font-color-black1",attrs:{id:"emailTextForInvoices",rows:"6"}})])],1)])])]),t.previewInvoice?a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"card mb-4"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row align-items-center"},[t._m(1),a("div",{staticClass:"col-4 text-right"},[a("span",{staticClass:"btn btn-sm btn-neutral tk-font-color-main",on:{click:function(l){return l.preventDefault(),t.collapseInvoicePreview(l)}}},[t._v("Collapse")])])])]),t._m(2)])]):t._e()]),a("div",{staticClass:"row card-wrapper"},[a("div",{class:{"col-lg-8":t.previewPayouts,"col-lg-12":!t.previewPayouts}},[a("div",{staticClass:"card mb-4"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row align-items-center"},[t._m(3),a("div",{staticClass:"col-4 text-right"},[a("span",{staticClass:"btn btn-sm btn-neutral tk-font-color-main",attrs:{href:"#!"},on:{click:function(l){return l.preventDefault(),t.previewPayoutsSettings(l)}}},[t._v("Preview")])])])]),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("base-input",{attrs:{label:"Payout Schedule"}},[a("el-select",{attrs:{filterable:""},model:{value:t.payoutScheduleSelects.simple,callback:function(l){t.$set(t.payoutScheduleSelects,"simple",l)},expression:"payoutScheduleSelects.simple"}},t._l(t.payoutScheduleSelects.options,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1),a("div",{staticClass:"invalid-feedback tk-font-color-gray",staticStyle:{display:"block"}},[t._v(" Funds will be deducted from students' payments and split based on instructor payout fee. ")])],1)],1),"Daily"!==t.payoutScheduleSelects.simple?a("div",{staticClass:"col-md-6"},["Weekly"===t.payoutScheduleSelects.simple?a("base-input",{attrs:{label:t.payoutScheduleSelects.simple}},[a("el-select",{attrs:{filterable:""},model:{value:t.payoutScheduleWeeklySelects.simple,callback:function(l){t.$set(t.payoutScheduleWeeklySelects,"simple",l)},expression:"payoutScheduleWeeklySelects.simple"}},t._l(t.payoutScheduleWeeklySelects.options,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})),1)],1):t._e(),"Monthly"===t.payoutScheduleSelects.simple?a("base-input",{attrs:{label:t.payoutScheduleSelects.simple},scopedSlots:t._u([{key:"default",fn:function(l){var s=l.focus,e=l.blur;return a("flat-picker",{staticClass:"form-control datepicker",attrs:{config:{allowInput:!0}},on:{"on-open":s,"on-close":e},model:{value:t.dates.simple,callback:function(l){t.$set(t.dates,"simple",l)},expression:"dates.simple"}})}}],null,!1,2231347418)}):t._e()],1):t._e()]),a("base-input",{attrs:{label:"Receipt Notes"}},[a("textarea",{staticClass:"form-control tk-font-color-black1",attrs:{id:"receiptNotes",rows:"1",resize:"none"}})]),a("base-input",{attrs:{label:"Email Text"}},[a("textarea",{staticClass:"form-control tk-font-color-black1",attrs:{id:"emailTextForPayouts",rows:"6"}})])],1)])])]),t.previewPayouts?a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"card mb-4"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row align-items-center"},[t._m(4),a("div",{staticClass:"col-4 text-right"},[a("span",{staticClass:"btn btn-sm btn-neutral tk-font-color-main",on:{click:function(l){return l.preventDefault(),t.collapsePayoutsPreview(l)}}},[t._v("Collapse")])])])]),t._m(5)])]):t._e()])])],1)},i=[function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",{staticClass:"col-8"},[a("h5",{staticClass:"h3 mb-0"},[t._v("Invoice Settings")])])},function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",{staticClass:"col-8"},[a("h5",{staticClass:"h3 mb-0"},[t._v("Preview")])])},function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",{staticClass:"card-body"},[a("form",[a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-flush"},[a("img",{staticClass:"tk-layout-inline-block tk-px-width-px80",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/tunekey-2019.appspot.com/o/images%2Finstruments%2F1.png?alt=media&token=9b3f075c-645d-4e1a-bba0-104f504786ee"}}),a("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 100px)","margin-left":"20px"}},[t._v(" Business info ")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-flush"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label tk-font-color-lightGray tk-px-margin-bottom-px0"},[t._v("Due")]),a("div",{staticClass:"has-label"},[a("div",{staticClass:"form-control-flush"},[a("h3",{staticClass:"tk-font-color-black2"},[t._v(" Upon receipt ")])])])])])])])])]),a("div",{staticClass:"col-md-6"},[a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-flush"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label tk-font-color-lightGray tk-px-margin-bottom-px0"},[t._v("Issued")]),a("div",{staticClass:"has-label"},[a("div",{staticClass:"form-control-flush"},[a("h3",{staticClass:"tk-font-color-black2"},[t._v(" 10/25/2020 ")])])])])])])])])])]),a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-flush",staticStyle:{"padding-top":"10px"}},[a("h1",{staticClass:"tk-font-color-black2 tk-layout-inline-block tk-layout-inline-block-bottom tk-font-lineHeight-1"},[t._v(" Invoice ")]),a("span",{staticClass:"tk-layout-inline-block tk-px-width-px8"}),a("h3",{staticClass:"tk-font-weight-light tk-font-color-gray tk-layout-inline-block tk-layout-inline-block-bottom tk-font-lineHeight-1"},[t._v(" No.77 ")]),a("span",[a("div",{staticClass:"form-group",staticStyle:{"padding-top":"5px","margin-bottom":"10px"}},[a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"50%"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Description")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("Guitar lesson")])]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"10%"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Qty")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("7.5")])]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"20%"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Price")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("$100.00")])]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"20%","text-align":"right"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Amount")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("$100.00")])])])]),a("hr",{staticStyle:{"margin-top":"0px","margin-bottom":"10px"}}),a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"50%"}},[a("br")]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"30%","text-align":"left"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Total")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Amount Due")])]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"20%","text-align":"right"}},[a("label",{staticClass:"form-control-label tk-font-color-black2 tk-font-weight-light"},[t._v("$100.00")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("$100.00")])])])])])])])])])},function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",{staticClass:"col-8"},[a("h5",{staticClass:"h3 mb-0"},[t._v("Payouts Settings")])])},function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",{staticClass:"col-8"},[a("h5",{staticClass:"h3 mb-0"},[t._v("Preview")])])},function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("div",{staticClass:"card-body"},[a("form",[a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-flush"},[a("img",{staticClass:"tk-layout-inline-block tk-px-width-px80",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/tunekey-2019.appspot.com/o/images%2Finstruments%2F1.png?alt=media&token=9b3f075c-645d-4e1a-bba0-104f504786ee"}}),a("div",{staticClass:"tk-layout-inline-block",staticStyle:{width:"calc(100% - 100px)","margin-left":"20px"}},[t._v(" Business info ")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-flush"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label tk-font-color-lightGray"},[t._v("Schedule")]),a("div",{staticClass:"has-label"},[a("div",{staticClass:"form-control-flush"},[a("h3",{staticClass:"tk-font-color-black2"},[t._v(" Daily ")])])])])])])])])]),a("div",{staticClass:"col-md-6"},[a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-flush"},[a("span",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label tk-font-color-lightGray"},[t._v("Issued")]),a("div",{staticClass:"has-label"},[a("div",{staticClass:"form-control-flush"},[a("h3",{staticClass:"tk-font-color-black2"},[t._v(" 10/25/2020 ")])])])])])])])])])]),a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-flush",staticStyle:{"padding-top":"10px"}},[a("h1",{staticClass:"tk-font-color-black2 tk-layout-inline-block tk-layout-inline-block-bottom tk-font-lineHeight-1"},[t._v(" Payout ")]),a("span",{staticClass:"tk-layout-inline-block tk-px-width-px8"}),a("h3",{staticClass:"tk-font-weight-light tk-font-color-gray tk-layout-inline-block tk-layout-inline-block-bottom tk-font-lineHeight-1"},[t._v(" No.77 ")]),a("span",[a("div",{staticClass:"form-group",staticStyle:{"padding-top":"5px","margin-bottom":"10px"}},[a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"50%"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Description")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("Guitar lesson")])]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"10%"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Qty")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("7.5")])]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"20%"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Price")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("$100.00")])]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"20%","text-align":"right"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Amount")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("$100.00")])])])]),a("hr",{staticStyle:{"margin-top":"0px","margin-bottom":"10px"}}),a("span",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"50%"}},[a("br")]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"30%","text-align":"left"}},[a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Total")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black2"},[t._v("Amount Due")])]),a("div",{staticClass:"tk-layout-inline-block tk-layout-inline-block-top",staticStyle:{width:"20%","text-align":"right"}},[a("label",{staticClass:"form-control-label tk-font-color-black2 tk-font-weight-light"},[t._v("$100.00")]),a("br"),a("label",{staticClass:"form-control-label tk-font-color-black tk-font-weight-light"},[t._v("$100.00")])])])])])])])])])}],o=(a("82a8"),a("2a39"),a("2cb5")),c=(a("9102"),a("2984"),a("3aa8")),n=a.n(c),r=(a("086f"),a("ce6c")),b=a.n(r),u=(a("6873"),{name:"form-elements",components:(s={flatPicker:function(){return a.e("chunk-10f3ed42").then(a.t.bind(null,"85db",7))}},Object(o["a"])(s,b.a.name,b.a),Object(o["a"])(s,n.a.name,n.a),s),data:function(){return{previewInvoice:!1,previewPayouts:!1,model:{title:"",className:"bg-default",description:"Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",start:"",end:""},eventColors:["bg-info","bg-orange","bg-red","bg-green","bg-default","bg-blue","bg-purple","bg-yellow"],payoutScheduleWeeklySelects:{simple:"Monday",options:[{label:"Sunday",value:"0"},{label:"Monday",value:"1"},{label:"Tuesday",value:"2"},{label:"Wednesday",value:"3"},{label:"Thursday",value:"4"},{label:"Friday",value:"5"},{label:"Saturday",value:"6"}]},payoutScheduleSelects:{simple:"Daily",options:[{label:"Daily",value:"Daily"},{label:"Weekly",value:"Weekly"},{label:"Monthly",value:"Monthly"}]},lateFee:{simple:"$10.00",options:[{label:"$10.00",value:"10"},{label:"$16.00",value:"16"}]},salesTax:{simple:"6.00%",options:[{label:"6.00%",value:"0.06"},{label:"10.00%",value:"0.1"}]},paymentsDueSelects:{simple:"Upon Receipt",options:[{label:"Upon Receipt",value:"Upon Receipt"}]},onlinePayments:!0,dates:{simple:new Date},inputs:{tags:["BUCHAREST","IASI","TIMISOARA"],fileSingle:[],fileMultiple:[]}}},methods:{validationEmail:function(t){var l=this;l.$tools.isNull(t.email)?t.isValid=!0:t.isValid=l.$tools.isEmail(t.email)},previewInvoiceSettings:function(){this.previewInvoice=!0},collapseInvoicePreview:function(){this.previewInvoice=!1},previewPayoutsSettings:function(){this.previewPayouts=!0},collapsePayoutsPreview:function(){this.previewPayouts=!1}}}),d=u,p=a("5d22"),v=Object(p["a"])(d,e,i,!1,null,null,null);l["default"]=v.exports},6873:function(t,l,a){}}]);
//# sourceMappingURL=chunk-69798036.aad503a5.js.map