(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"3HR4":function(t,e,a){"use strict";var r=a("o0o1"),o=a.n(r),n=a("L2JU"),i=a("8BOd");a("i8R7");function s(t,e,a,r,o,n,i){try{var s=t[n](i),c=s.value}catch(t){return void a(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.a={components:{},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,entity:null,preRequisite:{},isLoading:!0,useUserPreference:!1,dataType:null,configType:""}},computed:f(f({},Object(n.c)("config",{configsWithPreference:"configs",configs:"configsOriginal",vars:"vars",allowExtraInput:"allowExtraInput"})),{},{formHasErrors:function(){var t=!1;return this.formErrors.objForEach((function(e){t=""!==e||t})),t}}),methods:f(f(f(f(f({},Object(n.b)("config",["GetConfig"])),Object(n.b)("user",["GetUser"])),Object(n.b)("navigation",["Generate"])),Object(n.b)("common",["Custom"])),{},{findActualValue:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return e.find((function(e){return e[a]===t}))||null},submit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.formData.hasOwnProperty("type")&&(this.formData.type=this.formData.type.snakeCase());var a=!0===e||this.useUserPreference?i.e:"module"===this.configType?i.d:i.c;if(this.beforeSubmit&&"function"==typeof this.beforeSubmit){var r=this.beforeSubmit();if(!1===r)return void(this.isLoading=!1)}a(this.formData).then((function(a){(!0===e||t.useUserPreference?t.GetUser:t.GetConfig)().then((function(){t.$toasted.success(a.message,t.$toastConfig),t.initialFormData=_.cloneDeep(t.formData),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitSuccess&&t.afterSubmitSuccess()})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitError&&t.afterSubmitError()}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(a,r){e.preRequisite[r]=t.hasOwnProperty(r)?t[r]:a})),this.isLoading=!1},fillFormData:function(){var t=this;this.isLoading=!0;var e=this.useUserPreference?this.configsWithPreference:this.configs;this.formData.type&&e[this.formData.type]&&(this.formData=formUtil.assignValues(this.formData,e[this.formData.type])),this.formData.types&&Array.isArray(this.formData.types)&&this.formData.types.forEach((function(a){t.formData=formUtil.assignValues(t.formData,e[a])})),this.formData.override&&this.formData.objForEach((function(a,r){a&&_.isObject(a)?t.formData[r]=formUtil.assignValues(t.formData[r],e[r]):t.formData[r]=e[r]?e[r]:a})),"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.isLoading=!1},getInitialData:function(t){var e,a=this;return(e=o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.isLoading=!0,e.prev=1,e.next=4,i.b(Object.keys(a.preRequisite).join(","));case 4:return r=e.sent,a.fillPreRequisite(r),t&&a.$nextTick((function(){t()})),e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(1),a.isLoading=!1,a.formErrors=formUtil.handleErrors(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,a=arguments;return new Promise((function(r,o){var n=e.apply(t,a);function i(t){s(n,r,o,i,c,"next",t)}function c(t){s(n,r,o,i,c,"throw",t)}i(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(t,e,a){this.unsavedCheck(a)}}},gn1C:function(t,e,a){"use strict";a.r(e);var r={extends:a("3HR4").a,data:function(){return{formData:{enableSnapshot:!1,anyoneCanTakeSnapshot:!1,enableSnapshotAlert:!1,snapshotAlertToUserOnly:!1,snapshotAlertToModerators:!1,type:"meeting"}}},mounted:function(){this.getInitialData()}},o=a("KHd+"),n=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("h5",{staticClass:"mb-4 pb-3 border-bottom"},[t._v(t._s(t.$t("meeting.config.snapshot")))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:t.$t("meeting.config.enable_snapshot")}},[a("base-switch",{model:{value:t.formData.enableSnapshot,callback:function(e){t.$set(t.formData,"enableSnapshot",e)},expression:"formData.enableSnapshot"}})],1)],1),t._v(" "),t.formData.enableSnapshot?[a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:t.$t("meeting.config.anyone_can_take_snapshot")}},[a("base-switch",{model:{value:t.formData.anyoneCanTakeSnapshot,callback:function(e){t.$set(t.formData,"anyoneCanTakeSnapshot",e)},expression:"formData.anyoneCanTakeSnapshot"}})],1)],1),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:t.$t("meeting.config.enable_snapshot_alert")}},[a("base-switch",{model:{value:t.formData.enableSnapshotAlert,callback:function(e){t.$set(t.formData,"enableSnapshotAlert",e)},expression:"formData.enableSnapshotAlert"}})],1)],1),t._v(" "),t.formData.enableSnapshotAlert?a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:t.$t("meeting.config.snapshot_alert_to_user_only")}},[a("base-switch",{model:{value:t.formData.snapshotAlertToUserOnly,callback:function(e){t.$set(t.formData,"snapshotAlertToUserOnly",e)},expression:"formData.snapshotAlertToUserOnly"}})],1)],1):t._e(),t._v(" "),t.formData.enableSnapshotAlert?a("div",{staticClass:"col-12 col-md-6 mb-3"},[a("switch-wrapper",{attrs:{label:t.$t("meeting.config.snapshot_alert_to_moderators")}},[a("base-switch",{model:{value:t.formData.snapshotAlertToModerators,callback:function(e){t.$set(t.formData,"snapshotAlertToModerators",e)},expression:"formData.snapshotAlertToModerators"}})],1)],1):t._e()]:t._e()],2),t._v(" "),a("div",{staticClass:"form-footer mt-5"},[a("div",{staticClass:"left-side"},[a("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.$router.back()}}},[a("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))])],1),t._v(" "),a("div",{staticClass:"right-side"},[a("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),a("base-button",{attrs:{type:"submit",design:"primary"}},[a("i",{staticClass:"fas fa-save"}),t._v(" "+t._s(t.$t("general.save")))])],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=snapshot.js.map?id=fd00ff09d520bb568d4b