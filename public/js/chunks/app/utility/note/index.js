(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{Eo3N:function(t,e,i){"use strict";i.r(e);var s=i("UPFT"),a={extends:i("lSlZ").a,mounted:function(){this.filters.status=!0===this.filters.status||"true"===this.filters.status}},r=i("KHd+"),o={components:{FilterForm:Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("filter-wrapper",{attrs:{boxed:t.boxed,"is-loading":t.isLoading},on:{close:function(e){return t.$emit("close")}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-4 mb-3"},[i("base-input",{attrs:{"auto-focus":"",label:t.$t("utility.note.props.title"),type:"text",disabled:t.isLoading},model:{value:t.filters.title,callback:function(e){t.$set(t.filters,"title",e)},expression:"filters.title"}})],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4 mb-3"},[i("base-input",{attrs:{label:t.$t("utility.note.props.code"),type:"text",disabled:t.isLoading},model:{value:t.filters.code,callback:function(e){t.$set(t.filters,"code",e)},expression:"filters.code"}})],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4 mb-3 d-flex justify-content-start align-items-end"},[i("base-checkbox",{staticClass:"ml-3 mb-3",model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}},[t._v("\n                "+t._s(t.$t("utility.note.props.is_published"))+"\n            ")])],1)])])}),[],!1,null,null,null).exports},extends:s.a,data:function(){return{fields:[{key:"title",label:$t("utility.note.props.title"),sort:"title"},{key:"uploads",label:$t("upload.attachments"),cantExport:!0},{key:"createdAt",label:$t("general.created_at"),sort:"created_at",transformer:"date"},{key:"visibility",label:$t("utility.note.props.visibility"),sort:"visibility"},{key:"status",label:$t("utility.note.props.status"),sort:"status",transformer:"badgeStatusYesNo"},{key:"user",label:$t("user.user"),transformer:"user"},{key:"updatedAt",label:$t("general.updated_at"),sort:"updated_at",transformer:"date",thClass:"d-none",tdClass:"d-none"},{key:"actions",label:"",cantHide:!0,tdClass:"actions-dropdown-wrapper"}],filtersOptions:{title:"",code:"",status:""},permissionsRequired:{add:"manage-note",config:"manage-note-config"},routesRequired:{add:"appUtilityNoteAdd",config:"appUtilityNoteConfig"},initUrl:"utility/notes",dataType:"note"}},mounted:function(){this.updatePageMeta()}},n=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"entity-list-container"},[i("collapse-transition",{attrs:{group:!0,duration:300,tag:"div"}},[t.showFilters?i("filter-form",{key:"filters",attrs:{boxed:!0,"pre-requisite":t.preRequisite,"is-loading":t.isLoading},on:{close:t.toggleFilter}}):t._e(),t._v(" "),i("base-container",{key:"list",staticClass:"p-0",attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.isInitialized?i("table-wrapper",{attrs:{meta:t.entities.meta,filtered:t.isFiltered,"add-button-route":"appUtilityNoteAdd","add-button-permissions":["manage-note"],"entity-title":"utility.note.note","entities-title":"utility.note.notes","entity-description":"utility.note.module_description"}},[i("b-table",{directives:[{name:"show",rawName:"v-show",value:t.entities.meta.total,expression:"entities.meta.total"}],ref:"btable",attrs:{items:t.itemsProvider,fields:t.fields,busy:t.isLoading,hover:"",striped:"",stacked:"sm","per-page":t.entities.meta.perPage,"current-page":t.entities.meta.currentPage,filters:null},on:{"update:busy":function(e){t.isLoading=e}},scopedSlots:t._u([{key:"cell(createdAt)",fn:function(e){return[i("view-date",{staticClass:"mb-0",attrs:{value:e.item.createdAt,"to-format":t.vars.defaultDateTimeFormat,tag:"span"}})]}},{key:"cell(uploads)",fn:function(e){return[i("badge",{attrs:{rounded:"",type:"primary"}},[i("i",{staticClass:"fas fa-paperclip"}),t._v(" "+t._s(e.item.uploads.length))])]}},{key:"cell(status)",fn:function(e){return[e.item.status?i("badge",{attrs:{rounded:"",type:"primary"}},[i("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("general.yes")))]):i("badge",{attrs:{rounded:"",type:"dark"}},[i("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]}},{key:"cell(user)",fn:function(t){return[i("view-user",{staticClass:"m-0",attrs:{value:t.item.user,"show-sub":!1,"inline-sub":"","show-image":!1,"data-classes":"m-0"}})]}},{key:"cell(actions)",fn:function(e){return[i("table-row-actions",[i("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appUtilityNoteView",params:{uuid:e.item.uuid}}}},[i("i",{staticClass:"fas fa-arrow-circle-right"}),t._v(" "+t._s(t.$t("global.view",{attribute:t.$t("utility.note.note")})))]),t._v(" "),i("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appUtilityNoteEdit",params:{uuid:e.item.uuid}}}},[i("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("global.edit",{attribute:t.$t("utility.note.note")})))]),t._v(" "),i("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appUtilityNoteDuplicate",params:{uuid:e.item.uuid}}}},[i("i",{staticClass:"fas fa-copy"}),t._v(" "+t._s(t.$t("global.duplicate",{attribute:t.$t("utility.note.note")})))]),t._v(" "),i("a",{staticClass:"dropdown-item",on:{click:function(i){return i.stopPropagation(),t.deleteEntity(e.item)}}},[i("i",{staticClass:"fas fa-trash"}),t._v(" "+t._s(t.$t("global.delete",{attribute:t.$t("utility.note.note")})))])],1)]}}],null,!1,3698262635)})],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports},lSlZ:function(t,e,i){"use strict";var s=i("L2JU"),a=i("BcCH");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={props:{boxed:{type:Boolean,default:!1},showCloseBtn:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},filterRouteFn:{type:Function}},computed:o(o({},Object(s.c)("common",["filters"])),Object(s.c)("config",["vars"])),methods:{submit:function(){var t=o(o(o({},this.$route.query),this.filters),{},{filtered:!0,filtered_at:moment().unix()});this.filterRouteFn&&_.isFunction(this.filterRouteFn)?this.filterRouteFn(t):this.$router.push({path:this.$route.path,query:t}).catch((function(t){}))},reset:function(){a.a.$emit("CLEAR_FILTERS")}}},u=i("KHd+"),c=Object(u.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("base-container",{staticClass:"mb-element",attrs:{boxed:t.boxed,"with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.showCloseBtn?i("close-button",{attrs:{title:t.$t("general.close")},on:{click:function(e){return t.$emit("close")}}}):t._e(),t._v(" "),i("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._t("default"),t._v(" "),t._t("footer",(function(){return[t.showFooter?i("div",{staticClass:"form-footer mt-3"},[i("div",{staticClass:"left-side"},[i("base-button",{attrs:{type:"button",design:"light",disabled:t.isLoading},on:{click:function(e){return t.$emit("close")}}},[t._v(t._s(t.$t("general.close")))])],1),t._v(" "),i("div",{staticClass:"right-side"},[i("base-button",{attrs:{type:"button",design:"light",disabled:t.isLoading},on:{click:t.reset}},[t._v(t._s(t.$t("general.clear")))]),t._v(" "),i("base-button",{attrs:{type:"submit",design:"primary",disabled:t.isLoading}},[t._v(t._s(t.$t("general.filter")))])],1)]):t._e()]}))],2)],1)}),[],!1,null,null,null).exports;function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){f(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a={components:{FilterWrapper:c},props:{preRequisite:{type:Object,default:function(){return{}}},boxed:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},computed:p(p({},Object(s.c)("common",["filters"])),Object(s.c)("config",["vars"]))}}}]);
//# sourceMappingURL=index.js.map?id=8e3b2043cce53a0afb24