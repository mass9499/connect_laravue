(window.webpackJsonp=window.webpackJsonp||[]).push([[89,122],{"1OIG":function(t,e,n){"use strict";var i=n("o0o1"),r=n.n(i),o=n("TBq+"),u=(n("tkDv"),n("L2JU")),a=n("BcCH"),s=n("LvDl"),c=n.n(s);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,n,i,r,o,u){try{var a=t[o](u),s=a.value}catch(t){return void n(t)}a.done?e(s):Promise.resolve(s).then(i,r)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function u(t){f(o,i,r,u,a,"next",t)}function a(t){f(o,i,r,u,a,"throw",t)}u(void 0)}))}}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={components:{},data:function(){return{uuid:null,subUuid:null,entity:null,preRequisite:{},formData:{},formErrors:{},editing:!1,isLoading:!1,initialFormData:null,getInitialDataCalled:!1,autoExport:null,initUrl:"",fallBackRoute:"appDashboard",headerButtons:null,headerLinks:null,uploaderConfig:{module:"",token:"",allowedExtensions:"",allowedMaxFileSize:null,maxNoOfFiles:5,uuid:uuid()}}},watch:{$route:function(t,e){e.params.uuid!==t.params.uuid&&(this.isLoading=!0,this.uuid=t.params.uuid,this.getInitialDataCalled&&this.getInitialData())}},computed:h(h({},Object(u.c)("config",["vars","configs","allowExtraInput"])),Object(u.c)("user",["hasPermission"])),methods:h(h(h({},Object(u.b)("common",["Init","InitSub","Get","GetList","Destroy","SetMeta","SetFilters","Custom","GetPreRequisite","ResetFilters","Update","SetPageHeader"])),Object(u.b)("config",["SetUiConfig","SetConfig"])),{},{fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(n,i){e.preRequisite[i]=t.hasOwnProperty(i)?t[i]:n}))},setEntityData:function(t){this.entityKey&&t.hasOwnProperty(this.entityKey)?this.entity=t[this.entityKey]:this.entity=t},setUploaderConfig:function(t){var e=this;this.uploaderConfig.objForEach((function(n,i){e.uploaderConfig[i]=t.hasOwnProperty(i)?t[i]:n}))},getPreRequisite:function(t){var e=this;return d(r.a.mark((function n(){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.prev=1,n.next=4,e.GetPreRequisite();case 4:return i=n.sent,e.fillPreRequisite(i),c.a.isObject(i)&&i.hasOwnProperty("uploadConfig")&&e.setUploaderConfig(i.uploadConfig),"function"==typeof e.afterGetPreRequisite&&e.afterGetPreRequisite(),t&&e.$nextTick((function(){t()})),e.isLoading=!1,n.abrupt("return",i);case 13:n.prev=13,n.t0=n.catch(1),e.isLoading=!1,formUtil.handleErrors(n.t0);case 17:case"end":return n.stop()}}),n,null,[[1,13]])})))()},getInitialData:function(t){var e=this;return d(r.a.mark((function n(){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,e.getInitialDataCalled=!0,n.prev=2,n.next=5,e.Get({uuid:e.uuid});case 5:return i=n.sent,e.setEntityData(i),e.pageTitleProperty&&(e.pageTitle=e.entity[e.pageTitleProperty]+" - "+e.$t(e.$route.meta.title)),e.subTitleProperty&&(e.subTitle=e.entity[e.subTitleProperty]),e.afterGetInitialData&&"function"==typeof e.afterGetInitialData&&e.afterGetInitialData(i),t&&e.$nextTick((function(){t(i)})),e.autoExport&&setTimeout((function(){e.$nextTick((function(){e.formData&&e.formData.hasOwnProperty("loaded")&&!e.formData.loaded||e.export()}))}),2e3),e.isLoading=!1,n.abrupt("return",i);case 16:n.prev=16,n.t0=n.catch(2),e.isLoading=!1,formUtil.handleErrors(n.t0),e.$router.push({name:e.fallBackRoute});case 21:case"end":return n.stop()}}),n,null,[[2,16]])})))()},getHeaderOptions:function(){var t=[];this.routesRequired&&this.routesRequired.add&&("object"===l(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.add?t.push(o.a(this.routesRequired.add,this.permissionsRequired.add)):this.permissionsRequired?t.push(o.a(this.routesRequired.add,this.permissionsRequired)):t.push(o.a(this.routesRequired.add))),this.routesRequired&&this.routesRequired.edit&&("object"===l(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.edit?t.push(o.f(this.routesRequired.edit,this.permissionsRequired.edit)):this.permissionsRequired?t.push(o.f(this.routesRequired.edit,this.permissionsRequired)):t.push(o.f(this.routesRequired.edit))),this.routesRequired&&this.routesRequired.config&&("object"===l(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.config?t.push(o.d(this.routesRequired.config,this.permissionsRequired.config)):this.permissionsRequired?t.push(o.d(this.routesRequired.config,this.permissionsRequired)):t.push(o.d(this.routesRequired.config))),this.headerButtons&&(t=t.concat(this.headerButtons));var e=[];return e.push(o.r()),e.push(o.h()),this.headerLinks&&(e=e.concat(this.headerLinks)),{hideLinks:this.hideHeaderLinks||!1,buttons:t,links:e,title:this.pageTitle||"",subTitle:this.pageTitle&&this.subTitle||""}},getKeyBindingOptions:function(){var t=h({},o.c);return this.routesRequired&&this.routesRequired.add&&(t.key_a=this.routesRequired.add),this.routesRequired&&this.routesRequired.edit&&(t.key_e=this.routesRequired.edit),t},applyPageHeader:function(){var t=Object.assign({},this.getHeaderOptions(),this.header||{}),e=Object.assign({},this.getKeyBindingOptions(),this.keyBindings||{});this.SetPageHeader(t),this.SetConfig({keyBindings:e}),this.updatePageTitle()},updatePageTitle:function(){if(this.pageTitle&&!(this.pageTitle.length<1)){var t=window.kmenv.name;t=this.configs&&this.configs.basic&&this.configs.basic.appName?this.configs.basic.appName:t,document.title=this.pageTitle+" - "+t}},export:function(t){var e=this;return d(r.a.mark((function t(){var n,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isLoading=!0;try{n="Printing ".concat(e.dataTitle||""),e.printTitle&&(n=e.printTitle),i=e.configs.system.printPreview,e.$printComponent("printable",{title:n,autoPrint:!i,autoCloseAfterPrint:!i})}catch(t){}e.isLoading=!1;case 3:case"end":return t.stop()}}),t)})))()},doInit:function(){this.Init({url:this.initUrl}),this.initSubUrl&&this.InitSub({url:(this.subUuid?this.subUuid+"/":"")+this.initSubUrl}),this.getInitialData(this.applyPageHeader)},getBalanceClass:function(t){var e=t>0?"text-success":"text-danger";return e=t&&0!=Number(t)?e:"",e+=" font-weight-600"},momentFn:function(t,e,n){return moment(t,e||this.vars.serverDateFormat).format(n||this.vars.defaultDateFormat)}}),mounted:function(){a.a.$off("EXPORT",this.export),a.a.$on("EXPORT",this.export),this.$route.params.uuid&&(this.uuid=this.$route.params.uuid),this.$route.params.subUuid&&(this.subUuid=this.$route.params.subUuid),this.configs.system&&this.configs.system.allowedFileExtensions&&(this.uploaderConfig.allowedExtensions=this.configs.system.allowedFileExtensions),this.configs.system&&this.configs.system.postMaxSize&&(this.uploaderConfig.allowedMaxFileSize=this.configs.system.postMaxSize),this.$route.query&&this.$route.query.hasOwnProperty("print")&&(this.autoExport=!0),this.doInit()},destroyed:function(){a.a.$off("EXPORT",this.export)},beforeRouteEnter:function(t,e,n){t.params.uuid?n():n({name:e})}}},"9Jut":function(t,e,n){"use strict";n.r(e);var i={extends:n("1OIG").a,data:function(){return{initUrl:"site/queries",dataTitle:$t("site.query.query"),fallBackRoute:"appSiteQueryList"}}},r=n("KHd+"),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor,id:"printable"}},[t.entity?n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("view-single",{attrs:{label:t.$t("site.query.props.name"),value:t.entity.name}})],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("view-single",{attrs:{label:t.$t("site.query.props.email"),value:t.entity.email}})],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("view-single",{attrs:{label:t.$t("site.query.props.contact_number"),value:t.entity.contactNumber}})],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("view-single",{attrs:{label:t.$t("site.query.props.subject"),value:t.entity.subject}})],1),t._v(" "),n("div",{staticClass:"col-12 mb-3"},[n("view-paragraph",{attrs:{label:t.$t("site.query.props.message"),value:t.entity.message}})],1)]):t._e(),t._v(" "),n("div",{staticClass:"form-footer mt-3"},[n("div",{staticClass:"left-side"},[n("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.$router.back()}}},[n("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.back")))])],1),t._v(" "),n("div",{staticClass:"right-side"})])])}),[],!1,null,null,null);e.default=o.exports},"TBq+":function(t,e,n){"use strict";n.d(e,"p",(function(){return c})),n.d(e,"o",(function(){return l})),n.d(e,"m",(function(){return f})),n.d(e,"n",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"f",(function(){return h})),n.d(e,"k",(function(){return g})),n.d(e,"d",(function(){return m})),n.d(e,"l",(function(){return v})),n.d(e,"q",(function(){return P})),n.d(e,"e",(function(){return $})),n.d(e,"s",(function(){return j})),n.d(e,"j",(function(){return T})),n.d(e,"b",(function(){return x})),n.d(e,"r",(function(){return E})),n.d(e,"h",(function(){return D})),n.d(e,"i",(function(){return C})),n.d(e,"g",(function(){return S})),n.d(e,"c",(function(){return L}));n("nFxi");function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(t){var e=t.label,n=t.icon,i=t.tooltip,r=t.design,o=void 0===r?{color:"white",size:"md"}:r;return{label:e,icon:n,tooltip:i,design:o&&o.color||"white",size:o&&o.size||"md"}},c=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return u(u({},s({label:t,icon:e,tooltip:i,design:r})),{},{action:function(t){t.push({name:n,params:o,query:a})}})},l=function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};return u(u({},c(t,e,n,r,o,a,s)),{},{permissions:[i]})},f=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return u(u({},s({label:t,icon:e,tooltip:i,design:r})),{},{action:n})},d=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return f(t,e,(function(t,e){e.$emit(n.event,n.options)}),i,r)},p=function(t,e){return l($t("general.add_new"),"fas fa-plus",t,e)},h=function(t,e){return l($t("general.edit"),"fas fa-edit",t,e)},g=function(){return d("","fas fa-filter",{event:"TOGGLE_FILTER"},$t("general.filter"))},m=function(t,e){return l("","fas fa-cog",t,e,$t("general.config"))},y={storeName:"common",design:"white"},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return u(u(u({},y),t),{},{options:[{label:$t("general.default"),dispatch:{sortBy:""}}].concat(i(e))})},b=function(t){return{label:t.label,icon:t.icon}},O=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return u(u({},b({label:t,icon:e})),{},{to:{name:n,params:i,query:r}})},R=function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return u(u({},O(t,e,n,r,o)),{},{permissions:[i]})},q=function(t,e,n){return u(u({},b({label:t,icon:e})),{},{action:n})},w=function(t,e,n){return q(t,e,(function(t,e){e.$emit(n.event,n.options)}))},P=function(t,e){return R($t("general.import"),"fas fa-file-import",t,e)},$=function(t,e){return R($t("general.config"),"fas fa-cog",t,e)},j=function(){return w($t("general.save_draft"),"fas fa-file-upload",{event:"SAVE_DRAFT"})},T=function(){return w($t("general.fetch_saved_draft"),"fas fa-file-download",{event:"FETCH_SAVED_DRAFT"})},x=function(){return w($t("general.clear_saved_draft"),"far fa-minus-square",{event:"CLEAR_SAVED_DRAFT"})},E=function(){return w($t("general.print"),"fas fa-print",{event:"EXPORT",options:{type:"print"}})},D=function(){return w($t("general.export_pdf"),"fas fa-file-pdf",{event:"EXPORT",options:{type:"pdf"}})},C=function(){return w($t("general.export_xls"),"fas fa-file-excel",{event:"EXPORT",options:{type:"xls"}})},S=function(){return w($t("general.export_csv"),"fas fa-file-csv",{event:"EXPORT",options:{type:"csv"}})},k={key_p:{type:"event",emit:"EXPORT",payload:{type:"print"}}},_={key_e:{type:"event",emit:"EXPORT",payload:{type:"pdf"}}},L=u(u(u({},{key_f:{type:"event",emit:"TOGGLE_FILTER"}}),k),_)},tkDv:function(t,e,n){"use strict";n.r(e),n.d(e,"arrayOfObjects",(function(){return u})),n.d(e,"uppercase",(function(){return a})),n.d(e,"capitalize",(function(){return s})),n.d(e,"lowercase",(function(){return c})),n.d(e,"objectWithName",(function(){return l})),n.d(e,"contact",(function(){return f})),n.d(e,"contactWithAlias",(function(){return d})),n.d(e,"contactWithAssociation",(function(){return p})),n.d(e,"user",(function(){return h})),n.d(e,"employee",(function(){return g})),n.d(e,"employeeWithAlias",(function(){return m})),n.d(e,"getRegion",(function(){return y})),n.d(e,"percent",(function(){return v})),n.d(e,"date",(function(){return b})),n.d(e,"datetime",(function(){return O})),n.d(e,"truncateString",(function(){return R})),n.d(e,"limitWords",(function(){return q})),n.d(e,"badgeStatus",(function(){return w})),n.d(e,"badgeStatusYesNo",(function(){return P})),n.d(e,"badgeStatusLabel",(function(){return $})),n.d(e,"badgeStatusCompleted",(function(){return j})),n.d(e,"currency",(function(){return T})),n.d(e,"getCurrencyDescription",(function(){return x}));var i=n("g6NE"),r=n("V0LQ"),o=i.a.getters["config/vars"];function u(t,e){var n="";return t&&t.length&&e&&t.forEach((function(t){n&&(n+=", "),n+="".concat(t[e.firstAttr][e.firstAttr2]," (").concat(r.d.to(t[e.secondAttr],o.defaultCurrency,!0,!1,!0,!1),")")})),n}function a(t){return t.toUpperCase()}function s(t){return t.capitalize()}function c(t){return t.toLowerCase()}function l(t){return t.name}function f(t){return t.name}function d(t){var e=t.name,n=t.alias;return"".concat(e," (").concat(n,")")}function p(t){var e=t.name,n=t.designation;return"".concat(e," (").concat(n,")")}function h(t){return t.profile&&t.profile.name||t.username}function g(t){return t.name}function m(t){var e=t.name,n=t.alias;return"".concat(e," (").concat(n,")")}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e?e.city:"";return n=n?e.zipcode?"".concat(n," - ").concat(e.zipcode):n:"",n=e.state?n?"".concat(n,", ").concat(e.state):e.state:n,n=e.country?n?"".concat(n,", ").concat(e.country.name):e.country.name:n}function v(t){return"".concat(t," %")}function b(t){return moment(t,o.serverDateFormat).format(o.defaultDateFormat)}function O(t){return moment(t,o.serverDateTimeFormat).format(o.defaultDateTimeFormat)}function R(t,e){var n=e.max||30,i=t.length>n?e.suffix||"...":"";return t.slice(0,n)+i}function q(t,e){var n=t.split(" "),i=e.max||3,r=n.length>i?e.suffix||"...":"";return n.slice(0,i).join(" ")+r}function w(t){return t?"true":"false"}function P(t){return t?$t("general.yes"):$t("general.no")}function $(t,e){return t?$t("general.yes"):$t("general.no")}function j(t){return t?$t("utility.todo.completed"):$t("utility.todo.incomplete")}function T(t,e){var n=e&&e.currency?e.currency:o.defaultCurrency;return r.d.to(t,n,!0)}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"".concat(e.currency.name," - ").concat(e.currency.description," (").concat(e.currency.symbol,")")}}}]);
//# sourceMappingURL=view.js.map?id=df41b03fc4cd4212e00b