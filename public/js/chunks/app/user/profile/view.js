(window.webpackJsonp=window.webpackJsonp||[]).push([[105,122],{"TBq+":function(t,e,n){"use strict";n.d(e,"p",(function(){return c})),n.d(e,"o",(function(){return l})),n.d(e,"m",(function(){return f})),n.d(e,"n",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"f",(function(){return g})),n.d(e,"k",(function(){return h})),n.d(e,"d",(function(){return v})),n.d(e,"l",(function(){return m})),n.d(e,"q",(function(){return _})),n.d(e,"e",(function(){return C})),n.d(e,"s",(function(){return $})),n.d(e,"j",(function(){return S})),n.d(e,"b",(function(){return E})),n.d(e,"r",(function(){return R})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return D})),n.d(e,"g",(function(){return k})),n.d(e,"c",(function(){return q}));n("nFxi");function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(t){var e=t.label,n=t.icon,r=t.tooltip,i=t.design,o=void 0===i?{color:"white",size:"md"}:i;return{label:e,icon:n,tooltip:r,design:o&&o.color||"white",size:o&&o.size||"md"}},c=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return a(a({},s({label:t,icon:e,tooltip:r,design:i})),{},{action:function(t){t.push({name:n,params:o,query:u})}})},l=function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};return a(a({},c(t,e,n,i,o,u,s)),{},{permissions:[r]})},f=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return a(a({},s({label:t,icon:e,tooltip:r,design:i})),{},{action:n})},d=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return f(t,e,(function(t,e){e.$emit(n.event,n.options)}),r,i)},p=function(t,e){return l($t("general.add_new"),"fas fa-plus",t,e)},g=function(t,e){return l($t("general.edit"),"fas fa-edit",t,e)},h=function(){return d("","fas fa-filter",{event:"TOGGLE_FILTER"},$t("general.filter"))},v=function(t,e){return l("","fas fa-cog",t,e,$t("general.config"))},y={storeName:"common",design:"white"},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a(a(a({},y),t),{},{options:[{label:$t("general.default"),dispatch:{sortBy:""}}].concat(r(e))})},b=function(t){return{label:t.label,icon:t.icon}},O=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return a(a({},b({label:t,icon:e})),{},{to:{name:n,params:r,query:i}})},w=function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return a(a({},O(t,e,n,i,o)),{},{permissions:[r]})},P=function(t,e,n){return a(a({},b({label:t,icon:e})),{},{action:n})},j=function(t,e,n){return P(t,e,(function(t,e){e.$emit(n.event,n.options)}))},_=function(t,e){return w($t("general.import"),"fas fa-file-import",t,e)},C=function(t,e){return w($t("general.config"),"fas fa-cog",t,e)},$=function(){return j($t("general.save_draft"),"fas fa-file-upload",{event:"SAVE_DRAFT"})},S=function(){return j($t("general.fetch_saved_draft"),"fas fa-file-download",{event:"FETCH_SAVED_DRAFT"})},E=function(){return j($t("general.clear_saved_draft"),"far fa-minus-square",{event:"CLEAR_SAVED_DRAFT"})},R=function(){return j($t("general.print"),"fas fa-print",{event:"EXPORT",options:{type:"print"}})},x=function(){return j($t("general.export_pdf"),"fas fa-file-pdf",{event:"EXPORT",options:{type:"pdf"}})},D=function(){return j($t("general.export_xls"),"fas fa-file-excel",{event:"EXPORT",options:{type:"xls"}})},k=function(){return j($t("general.export_csv"),"fas fa-file-csv",{event:"EXPORT",options:{type:"csv"}})},L={key_p:{type:"event",emit:"EXPORT",payload:{type:"print"}}},T={key_e:{type:"event",emit:"EXPORT",payload:{type:"pdf"}}},q=a(a(a({},{key_f:{type:"event",emit:"TOGGLE_FILTER"}}),L),T)},eVFJ:function(t,e,n){"use strict";var r=n("L2JU");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={components:{ProfilePageSidebox:n("zXDo").a},props:{isLoading:{type:Boolean,default:!1},loaderColor:{type:String,default:"#000000"},innerSidebarBoxClasses:{type:String,default:"p-0"}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(r.c)("config",["vars"]))},u=n("KHd+"),s=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner-sidebar-layout-wrapper",attrs:{id:"printable"}},[n("div",{staticClass:"inner-sidebar-layout"},[n("div",{staticClass:"inner-sidebar"},[n("profile-page-sidebox",{class:["p-0",t.innerSidebarBoxClasses],attrs:{"is-loading":t.isLoading,"loader-color":t.vars.colors.white}},[t._t("sidebarMainContent")],2),t._v(" "),t._t("sidebarSubContent")],2),t._v(" "),n("div",{staticClass:"inner-content-wrapper"},[t._t("mainContent")],2)]),t._v(" "),t._t("subContent")],2)}),[],!1,null,null,null);e.a=s.exports},oeRQ:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),i=n.n(r),o=n("eVFJ"),a=n("zXDo"),u=n("TBq+"),s=(n("tkDv"),n("L2JU")),c=n("BcCH");function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,n,r,i,o,a){try{var u=t[o](a),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,i)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){f(o,r,i,a,u,"next",t)}function u(t){f(o,r,i,a,u,"throw",t)}a(void 0)}))}}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={components:{ProfilePage:o.a,ProfilePageSidebox:a.a},data:function(){return{entity:null,isLoading:!1,initUrl:"users",dataTitle:$t("user.user"),fallBackRoute:"appUserList",headerButtons:null,headerLinks:null}},computed:g(g(g({},Object(s.c)("config",["vars"])),Object(s.c)("user",["uuid","hasPermission","liveUsers"])),{},{liveUser:function(){var t=this;return this.value&&this.liveUsers.find((function(e){return e.uuid===t.value.uuid}))},isOnline:function(){return!!this.liveUser}}),methods:g(g(g({},Object(s.b)("common",["Init","Get","Custom","SetPageHeader"])),Object(s.b)("config",["SetUiConfig","SetConfig"])),{},{changeStatus:function(t){var e=this;formUtil.confirmAction().then((function(n){if(n.value){e.isLoading=!0;var r={status:t};e.Custom({url:"/".concat(e.initUrl,"/").concat(e.uuid,"/status"),method:"post",data:r}).then((function(t){e.isLoading=!1,e.getInitialData()})).catch((function(t){e.isLoading=!1,formUtil.handleErrors(t)}))}else n.dismiss,Swal.DismissReason.cancel}))},setEntityData:function(t){this.entityKey&&t.hasOwnProperty(this.entityKey)?this.entity=t[this.entityKey]:this.entity=t},getInitialData:function(){var t=this;return d(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,t.Get({uuid:t.uuid});case 4:return n=e.sent,t.setEntityData(n),t.isLoading=!1,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(1),t.isLoading=!1,formUtil.handleErrors(e.t0),t.$router.push({name:t.fallBackRoute});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))()},getHeaderOptions:function(){var t=[];this.routesRequired&&this.routesRequired.add&&("object"===l(this.permissionsRequired)&&null!==this.permissionsRequired&&this.permissionsRequired.add?t.push(u.a(this.routesRequired.add,this.permissionsRequired.add)):this.permissionsRequired&&t.push(u.a(this.routesRequired.add,this.permissionsRequired))),this.headerButtons&&(t=t.concat(this.headerButtons));var e=[];return e.push(u.r()),e.push(u.h()),this.headerLinks&&(e=e.concat(this.headerLinks)),{hideLinks:this.hideHeaderLinks||!1,buttons:t,links:e,title:this.pageTitle||"",subTitle:this.pageTitle&&this.subTitle||""}},getKeyBindingOptions:function(){var t=g({},u.c);return this.routesRequired&&this.routesRequired.add&&(t.key_a=this.routesRequired.add),this.routesRequired&&this.routesRequired.edit&&(t.key_e=this.routesRequired.edit),t},applyPageHeader:function(){var t=Object.assign({},this.getHeaderOptions(),this.header||{}),e=Object.assign({},this.getKeyBindingOptions(),this.keyBindings||{});this.SetPageHeader(t),this.SetConfig({keyBindings:e})},export:function(t){var e=this;return d(i.a.mark((function t(){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isLoading=!0;try{n="Printing ".concat(e.dataTitle||""),e.printTitle&&(n=e.printTitle),r=e.configs.system.printPreview,e.$printComponent("printable",{title:n,autoPrint:!r,autoCloseAfterPrint:!r})}catch(t){}e.isLoading=!1;case 3:case"end":return t.stop()}}),t)})))()},doInit:function(){this.Init({url:this.initUrl}),this.getInitialData(),this.applyPageHeader()}}),mounted:function(){c.a.$off("EXPORT",this.export),c.a.$on("EXPORT",this.export),this.doInit()},destroyed:function(){c.a.$off("EXPORT",this.export)}},y=n("KHd+"),m=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("profile-page",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor,"inner-sidebar-box-classes":"h-100"},scopedSlots:t._u([{key:"sidebarMainContent",fn:function(){return[t.entity?n("profile-card",{attrs:{name:t.entity.profile.name,"sub-heading":t.entity.username||"-",gender:t.entity.profile.gender,image:t.entity.profile.avatar,"cover-image":t.entity.profile.cover,age:t.entity.profile.age,"data-card-color":"whitish","user-status":t.isOnline,user:t.entity,horizontal:!1,"edit-image":""}}):t._e()]},proxy:!0},{key:"mainContent",fn:function(){return[n("base-container",{attrs:{boxed:"","with-loader":"","has-footer":"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.entity?[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("view-single",{attrs:{label:t.$t("user.props.name"),value:t.entity.profile.name}})],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("view-single",{attrs:{label:t.$t("user.props.gender"),value:t.entity.profile.gender,showIfExists:"name"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("view-single",{attrs:{label:t.$t("user.props.email"),value:t.entity.email}})],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("view-single",{attrs:{label:t.$t("user.props.birth_date"),value:t._f("moment")(t.entity.profile.birthDate,t.vars.defaultDateFormat)}})],1)])]:t._e(),t._v(" "),n("div",{staticClass:"form-footer mt-5"},[n("div",{staticClass:"left-side"},[n("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.$router.back()}}},[n("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.back")))])],1),t._v(" "),n("div",{staticClass:"right-side"},[n("base-button",{attrs:{type:"button",design:"dark"},on:{click:function(e){return e.stopPropagation(),t.$router.push({name:"appProfileViewImage",params:{uuid:t.entity.uuid}})}}},[n("i",{staticClass:"fas fa-image"}),t._v(" "+t._s(t.$t("global.edit",{attribute:t.$t("user.props.image")})))]),t._v(" "),n("base-button",{attrs:{type:"button",design:"primary"},on:{click:function(e){return e.stopPropagation(),t.$router.push({name:"appProfileEdit",params:{uuid:t.entity.uuid}})}}},[n("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("global.edit",{attribute:t.$t("user.user")})))])],1)])],2)]},proxy:!0}])})}),[],!1,null,null,null);e.default=m.exports},tkDv:function(t,e,n){"use strict";n.r(e),n.d(e,"arrayOfObjects",(function(){return a})),n.d(e,"uppercase",(function(){return u})),n.d(e,"capitalize",(function(){return s})),n.d(e,"lowercase",(function(){return c})),n.d(e,"objectWithName",(function(){return l})),n.d(e,"contact",(function(){return f})),n.d(e,"contactWithAlias",(function(){return d})),n.d(e,"contactWithAssociation",(function(){return p})),n.d(e,"user",(function(){return g})),n.d(e,"employee",(function(){return h})),n.d(e,"employeeWithAlias",(function(){return v})),n.d(e,"getRegion",(function(){return y})),n.d(e,"percent",(function(){return m})),n.d(e,"date",(function(){return b})),n.d(e,"datetime",(function(){return O})),n.d(e,"truncateString",(function(){return w})),n.d(e,"limitWords",(function(){return P})),n.d(e,"badgeStatus",(function(){return j})),n.d(e,"badgeStatusYesNo",(function(){return _})),n.d(e,"badgeStatusLabel",(function(){return C})),n.d(e,"badgeStatusCompleted",(function(){return $})),n.d(e,"currency",(function(){return S})),n.d(e,"getCurrencyDescription",(function(){return E}));var r=n("g6NE"),i=n("V0LQ"),o=r.a.getters["config/vars"];function a(t,e){var n="";return t&&t.length&&e&&t.forEach((function(t){n&&(n+=", "),n+="".concat(t[e.firstAttr][e.firstAttr2]," (").concat(i.d.to(t[e.secondAttr],o.defaultCurrency,!0,!1,!0,!1),")")})),n}function u(t){return t.toUpperCase()}function s(t){return t.capitalize()}function c(t){return t.toLowerCase()}function l(t){return t.name}function f(t){return t.name}function d(t){var e=t.name,n=t.alias;return"".concat(e," (").concat(n,")")}function p(t){var e=t.name,n=t.designation;return"".concat(e," (").concat(n,")")}function g(t){return t.profile&&t.profile.name||t.username}function h(t){return t.name}function v(t){var e=t.name,n=t.alias;return"".concat(e," (").concat(n,")")}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e?e.city:"";return n=n?e.zipcode?"".concat(n," - ").concat(e.zipcode):n:"",n=e.state?n?"".concat(n,", ").concat(e.state):e.state:n,n=e.country?n?"".concat(n,", ").concat(e.country.name):e.country.name:n}function m(t){return"".concat(t," %")}function b(t){return moment(t,o.serverDateFormat).format(o.defaultDateFormat)}function O(t){return moment(t,o.serverDateTimeFormat).format(o.defaultDateTimeFormat)}function w(t,e){var n=e.max||30,r=t.length>n?e.suffix||"...":"";return t.slice(0,n)+r}function P(t,e){var n=t.split(" "),r=e.max||3,i=n.length>r?e.suffix||"...":"";return n.slice(0,r).join(" ")+i}function j(t){return t?"true":"false"}function _(t){return t?$t("general.yes"):$t("general.no")}function C(t,e){return t?$t("general.yes"):$t("general.no")}function $(t){return t?$t("utility.todo.completed"):$t("utility.todo.incomplete")}function S(t,e){var n=e&&e.currency?e.currency:o.defaultCurrency;return i.d.to(t,n,!0)}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"".concat(e.currency.name," - ").concat(e.currency.description," (").concat(e.currency.symbol,")")}},zXDo:function(t,e,n){"use strict";var r={name:"profile-page-sidebox",props:{isLoading:{type:Boolean,default:!1},minHeight:{type:Boolean,default:!0},overflowHidden:{type:Boolean,default:!0},loaderColor:{type:String,default:"#000000"}}},i=n("KHd+"),o=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("base-container",{class:["profile-sidebar-wrapper",{"overflow-hidden":this.overflowHidden}],attrs:{boxed:"","min-height":this.minHeight}},[e("animated-loader",{attrs:{"is-loading":this.isLoading,"loader-color":this.loaderColor,"overlay-color":"dark"}}),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports}}]);
//# sourceMappingURL=view.js.map?id=c076799cef1af0f2cc39