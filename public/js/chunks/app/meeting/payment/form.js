(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"fPx+":function(e,t,a){(t=e.exports=a("I1BE")(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);",""]),t.push([e.i,".base-container .StripeElement{border:1px solid #dee2e9!important}",""])},ibv6:function(e,t,a){"use strict";a.r(t);var i=a("o0o1"),r=a.n(i),n=a("g+26"),o=a("L2JU"),s=a("rK9G"),c=a("IF94"),d=a("+QIf"),l=a("YZAB");function u(e,t,a,i,r,n,o){try{var s=e[n](o),c=s.value}catch(e){return void a(e)}s.done?t(c):Promise.resolve(c).then(i,r)}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){y(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f={extends:n.a,components:{StripeElementCard:s.StripeElementCard,BCard:c.a,BTabs:d.a,BTab:l.a},data:function(){return{formData:{currency:null,amount:0,payableAmount:0,source:null,token:null,charge:null,userName:"",addressLine1:"",addressLine2:"",city:"",state:"",country:"",zipcode:""},formLabels:{currency:$t("config.system.currency"),amount:$t("meeting.payment.amount"),payableAmount:$t("meeting.payment.payable_amount"),userName:$t("meeting.payment.user_name"),addressLine1:$t("meeting.payment.address_line_1"),addressLine2:$t("meeting.payment.address_line_2"),city:$t("meeting.payment.city"),state:$t("meeting.payment.state"),country:$t("meeting.payment.country"),zipcode:$t("meeting.payment.zipcode")},showPaymentOptions:!0,initialSetupCompleted:!1,paypalConfig:{},paypalButtons:null,paypalButtonsHasRendered:!1,paddleConfig:{},activePGTab:0,loading:!1,initUrl:"meetings",initSubUrl:"payment",preRequisite:{selectedCurrency:null,currencies:[],paymentGateways:[]}}},computed:m(m(m({},Object(o.c)("common",["entity"])),Object(o.c)("user",["hasActiveMembership","meetingExpiryDate","hasLifetimeMembership","email","name"])),{},{isBusy:function(){return!(this.entity&&!this.isLoading)},computedCurrency:{get:function(){return this.formData.currency?this.formData.currency.name:null},set:function(e){this.formData.currency=this.preRequisite.currencies.find((function(t){return t.name===e})),this.getCalculatedAmount(),this.preRequisite.paymentGateways.length&&"paypal"===this.preRequisite.paymentGateways[this.computedActiveTab].name&&(!0===this.paypalConfig.loaded?this.paypalScriptLoaded():this.loadPaypal()),this.preRequisite.paymentGateways.length&&"paddle"===this.preRequisite.paymentGateways[this.computedActiveTab].name&&(!0===this.paddleConfig.loaded?this.paddleScriptLoaded():this.loadPaddle())}},computedPricingForPaddle:function(){return[this.computedCurrency?"".concat(this.computedCurrency,":").concat(this.payableAmount):"USD:".concat(this.payableAmount)]},stripeConfig:function(){return this.preRequisite&&this.preRequisite.paymentGateways.length?this.preRequisite.paymentGateways[0]:{}},stripeStyle:function(){return{empty:{"::placeholder":{color:"#adb5c0"},":focus":{"::placeholder":{color:"#ced4dd"}}}}},payableAmount:function(){return this.formData.amount},computedActiveTab:{get:function(){return-1===this.activePGTab?0:this.activePGTab},set:function(e){this.activePGTab=-1===e?0:e,-1!==e&&(this.preRequisite.paymentGateways.length&&"paypal"===this.preRequisite.paymentGateways[e].name?!1===this.paypalConfig.loaded?this.loadPaypal():this.paypalScriptLoaded():(this.paypalConfig.loaded&&this.paypalButtons&&this.paypalButtons.close&&(this.paypalButtons.close(),this.paypalButtonsHasRendered=!1),this.preRequisite.paymentGateways.length&&"paddle"===this.preRequisite.paymentGateways[e].name&&(!1===this.paddleConfig.loaded?this.loadPaddle():this.paddleScriptLoaded())))}}}),methods:m(m({},Object(o.b)("user",["GetUser"])),{},{getCalculatedAmount:function(e){var t=this;this.initialSetupCompleted&&(this.isLoading=!0,this.formData.method=this.preRequisite&&this.preRequisite.paymentGateways&&this.preRequisite.paymentGateways.length?this.preRequisite.paymentGateways[this.computedActiveTab].name:null,this.Custom({url:"/".concat(this.initUrl,"/").concat(this.entity.uuid,"/payment/calculate"),method:"post",data:this.formData}).then((function(a){t.formData.amount=a.amount||0,t.formData.paddleUrl=a.paddleUrl,t.isLoading=!1,e&&_.isFunction(e)?e():t.preRequisite&&t.preRequisite.paymentGateways.length&&"paddle"===t.preRequisite.paymentGateways[t.computedActiveTab].name&&(!0===t.paddleConfig.loaded?(Paddle&&Paddle.Checkout,t.paddleScriptLoaded()):t.loadPaddle())})).catch((function(e){t.isLoading=!1,formUtil.handleErrors(e)})))},updateMeeting:function(){var e=this;this.isLoading=!0,this.Custom({url:"/".concat(this.initUrl,"/").concat(this.entity.uuid,"/payment"),method:"post",data:this.formData}).then((function(t){e.$toasted.success(t.message,e.$toastConfig),e.$route.query&&e.$route.query.hasOwnProperty("join")?e.$router.push({name:"liveMeeting",params:{uuid:e.entity.uuid}}):e.$router.push({name:"appMeetingPaymentReceipt",params:{uuid:e.entity.uuid}})})).catch((function(t){e.isLoading=!1,formUtil.handleErrors(t)}))},proceed:function(){this.formData.amount?(this.isLoading=!0,this.$refs&&this.$refs.stripeRef&&this.preRequisite.paymentGateways.length&&"stripe"===this.preRequisite.paymentGateways[this.computedActiveTab].name?this.$refs.stripeRef[0].submit():this.isLoading=!1):this.updateMeeting()},stripeTokenCreated:function(e){this.formData.token=e,this.formData.method=this.preRequisite.paymentGateways.length&&this.preRequisite.paymentGateways[this.computedActiveTab].name,this.formData.charge={source:e.id,amount:100*this.payableAmount},this.formData.payableAmount=this.formData.charge.amount,this.updateMeeting()},paypalScriptLoaded:function(){var e,t,a=this;this.loading=!0,this.isLoading=!0,this.paypalButtons&&this.paypalButtons.close&&this.paypalButtonsHasRendered&&(this.paypalButtons.close(),this.paypalButtonsHasRendered=!1),this.paypalButtons=window.paypal.Buttons({createOrder:function(e,t){a.isLoading=!0;var i={purchase_units:[{description:"".concat(window.kmenv.name," - ").concat(a.computedFrequency.name," ").concat($t("meeting.meeting")),amount:{currency_code:a.computedCurrency,value:a.payableAmount}}]};return t.order.create(i)},onApprove:(e=r.a.mark((function e(t,i){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.order.capture();case 2:n=e.sent,a.formData.token=n,a.formData.method=a.preRequisite.paymentGateways.length?a.preRequisite.paymentGateways[a.computedActiveTab].name:null,a.formData.charge={source:n.id,amount:a.payableAmount},a.formData.payableAmount=a.formData.charge.amount,a.isLoading=!1,a.updateMeeting();case 9:case"end":return e.stop()}}),e)})),t=function(){var t=this,a=arguments;return new Promise((function(i,r){var n=e.apply(t,a);function o(e){u(n,i,r,o,s,"next",e)}function s(e){u(n,i,r,o,s,"throw",e)}o(void 0)}))},function(e,a){return t.apply(this,arguments)}),onError:function(e){a.isLoading=!1,a.$toasted.error(a.$t("meeting.paypal_create_order_error"),a.$toastConfig.error)}}),this.paypalButtons.render(this.$refs.paypalRef[0]).then((function(){a.paypalButtonsHasRendered=!0})).catch((function(e){var t=a.$refs.paypalRef[0];if(t&&t.children.length>0)throw new Error(e);a.$toasted.info($t("general.kindly_reload_page"),a.$toastConfig.info)})),this.paypalConfig.loaded=!0,this.loading=!1,this.isLoading=!1},paddleScriptLoaded:function(){var e=this;Paddle&&(this.paddleConfig.mode||Paddle.Environment.set("sandbox"),Paddle.Setup({vendor:this.paddleConfig.key}),this.getCalculatedAmount((function(){Paddle.Checkout.open({method:"inline",email:e.email,country:e.formData.country,postcode:e.formData.zipcode,allowQuantity:!1,disableLogout:!0,frameTarget:"paddle-container",frameInitialHeight:416,frameStyle:"width:100%; min-width:312px; background-color: transparent; border: none;",override:e.formData.paddleUrl,successCallback:function(t){e.formData.token=t.checkout,e.formData.method=e.preRequisite.paymentGateways.length&&e.preRequisite.paymentGateways[e.computedActiveTab].name,e.formData.charge={source:t.checkout.id,amount:e.payableAmount},e.formData.payableAmount=e.formData.charge.amount,e.updateMeeting()}}),e.paddleConfig.loaded=!0})))},loadPaypal:function(){var e=document.createElement("script");e.src="https://www.paypal.com/sdk/js?client-id="+this.paypalConfig.key+"&currency="+this.computedCurrency,e.addEventListener("load",this.paypalScriptLoaded),document.body.appendChild(e)},loadPaddle:function(){var e=document.createElement("script");e.src="https://cdn.paddle.com/paddle/paddle.js",e.addEventListener("load",this.paddleScriptLoaded),document.body.appendChild(e)},getPreRequisite:function(e){var t=this;this.isLoading=!0,this.Custom({url:"/".concat(this.initUrl,"/").concat(this.entity.uuid,"/payment/pre-requisite"),method:"get"}).then((function(a){return t.fillPreRequisite(a),e(a),t.isLoading=!1,a})).catch((function(e){t.isLoading=!1,formUtil.handleErrors(e)}))},initialSetup:function(){var e=this;this.formData.currency=this.configs.system.currency,this.formData.userName=this.name,this.preRequisite?(this.formData.currency=this.preRequisite.selectedCurrency?this.preRequisite.selectedCurrency:this.preRequisite.currencies?this.preRequisite.currencies[0]:null,this.preRequisite.paymentGateways.length&&(this.paypalConfig=this.preRequisite.paymentGateways.find((function(e){return"paypal"===e.name})),this.paypalConfig&&(this.paypalConfig.loaded=!1,"paypal"===this.preRequisite.paymentGateways[this.computedActiveTab].name&&this.loadPaypal()),this.paddleConfig=this.preRequisite.paymentGateways.find((function(e){return"paddle"===e.name})),this.paddleConfig&&(this.paddleConfig.loaded=!1,"paddle"===this.preRequisite.paymentGateways[this.computedActiveTab].name&&this.loadPaddle())),this.initialSetupCompleted=!0,window.setTimeout((function(){e.getCalculatedAmount()}),1e3)):this.initialSetupCompleted=!0}}),mounted:function(){this.getPreRequisite(this.initialSetup)}},h=(a("yPW0"),a("KHd+")),b=Object(h.a)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("base-container",{attrs:{boxed:"","min-height":"full","has-form":"","has-footer":""}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.proceed.apply(null,arguments)}}},[a("animated-loader",{attrs:{"is-loading":e.isBusy,"loader-color":e.vars.loaderColor}}),e._v(" "),e.entity?[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-4"},[a("label",{staticClass:"d-block text-muted"},[e._v(e._s(e.formLabels.currency))]),e._v(" "),a("div",[e._v("\n                        "+e._s(e.computedCurrency)+"\n                    ")])]),e._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-4"},[a("view-currency",{staticClass:"text-right",attrs:{label:e.formLabels.payableAmount,value:e.payableAmount,currency:e.formData.currency,tag:"h2","data-classes":"text-success font-weight-600 text-right"}})],1)]),e._v(" "),a("h5",{staticClass:"mb-2 mt-1 pb-2 border-bottom"},[e._v(e._s(e.$t("meeting.props.billing_address")))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("base-input",{attrs:{label:e.formLabels.userName,type:"text",error:e.formErrors.userName},on:{"update:error":function(t){return e.$set(e.formErrors,"userName",t)}},model:{value:e.formData.userName,callback:function(t){e.$set(e.formData,"userName",t)},expression:"formData.userName"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4"},[a("base-input",{attrs:{label:e.formLabels.addressLine1,type:"text",error:e.formErrors.addressLine1},on:{"update:error":function(t){return e.$set(e.formErrors,"addressLine1",t)}},model:{value:e.formData.addressLine1,callback:function(t){e.$set(e.formData,"addressLine1",t)},expression:"formData.addressLine1"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4"},[a("base-input",{attrs:{label:e.formLabels.addressLine2,type:"text",error:e.formErrors.addressLine2},on:{"update:error":function(t){return e.$set(e.formErrors,"addressLine2",t)}},model:{value:e.formData.addressLine2,callback:function(t){e.$set(e.formData,"addressLine2",t)},expression:"formData.addressLine2"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4"},[a("base-input",{attrs:{label:e.formLabels.city,type:"text",error:e.formErrors.city},on:{"update:error":function(t){return e.$set(e.formErrors,"city",t)}},model:{value:e.formData.city,callback:function(t){e.$set(e.formData,"city",t)},expression:"formData.city"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4"},[a("base-input",{attrs:{label:e.formLabels.state,type:"text",error:e.formErrors.state},on:{"update:error":function(t){return e.$set(e.formErrors,"state",t)}},model:{value:e.formData.state,callback:function(t){e.$set(e.formData,"state",t)},expression:"formData.state"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4"},[a("base-input",{attrs:{label:e.formLabels.country,type:"text",error:e.formErrors.country},on:{"update:error":function(t){return e.$set(e.formErrors,"country",t)}},model:{value:e.formData.country,callback:function(t){e.$set(e.formData,"country",t)},expression:"formData.country"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-4"},[a("base-input",{attrs:{label:e.formLabels.zipcode,type:"text",error:e.formErrors.zipcode},on:{"update:error":function(t){return e.$set(e.formErrors,"zipcode",t)}},model:{value:e.formData.zipcode,callback:function(t){e.$set(e.formData,"zipcode",t)},expression:"formData.zipcode"}})],1)]),e._v(" "),a("br"),e._v(" "),e.showPaymentOptions?a("div",[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{pills:"",card:"",vertical:"",lazy:"","active-nav-item-class":"font-weight-bold py-2","nav-wrapper-class":"col-12 col-md-4 col-lg-3 border-right"},model:{value:e.computedActiveTab,callback:function(t){e.computedActiveTab=t},expression:"computedActiveTab"}},e._l(e.preRequisite.paymentGateways,(function(t){return a("b-tab",{key:t.name,attrs:{title:t.label,"title-item-class":"p-0"}},["stripe"===t.name?a("stripe-element-card",{ref:"stripeRef",refInFor:!0,attrs:{pk:e.stripeConfig.key,amount:100*e.payableAmount,locale:e.configs.system.locale,"style-object":e.stripeStyle},on:{token:e.stripeTokenCreated,loading:function(t){e.loading=t}}}):e._e(),e._v(" "),"paypal"===t.name?a("div",{ref:"paypalRef",refInFor:!0},[a("animated-loader",{attrs:{"is-loading":!e.paypalConfig.loaded&&1===e.computedActiveTab&&!e.isBusy,"loader-color":e.vars.loaderColor}})],1):e._e(),e._v(" "),"paddle"===t.name?a("div",{staticClass:"paddle-container"},[a("animated-loader",{attrs:{"is-loading":!e.paddleConfig.loaded&&2===e.computedActiveTab&&!e.isBusy,"loader-color":e.vars.loaderColor}})],1):e._e()],1)})),1)],1)],1):e._e()]:e._e(),e._v(" "),a("div",{staticClass:"form-footer mt-3"},[a("div",{staticClass:"left-side"},[a("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(t){return e.$router.back()}}},[a("i",{staticClass:"fas fa-chevron-left"}),e._v(" "+e._s(e.$t("general.cancel")))])],1),e._v(" "),a("div",{staticClass:"right-side"},[0===e.computedActiveTab?a("base-button",{attrs:{type:"submit",design:"primary"}},[e._v(e._s(e.$t("general.proceed"))+" "),a("i",{staticClass:"fas fa-chevron-right"})]):e._e()],1)])],2)])}),[],!1,null,null,null);t.default=b.exports},yPW0:function(e,t,a){"use strict";a("yq3C")},yq3C:function(e,t,a){var i=a("fPx+");"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,r);i.locals&&(e.exports=i.locals)}}]);
//# sourceMappingURL=form.js.map?id=92e003c080a92eba79bc