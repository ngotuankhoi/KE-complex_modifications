(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},i={app:0},n=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1e0c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Index")],1)},n=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-navbar-brand",{attrs:{href:"./"}},[e._v("Karabiner-Elements complex_modifications rules")]),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{href:"https://github.com/pqrs-org/KE-complex_modifications",target:"_blank"}},[r("icon",{attrs:{name:"external-link-alt"}}),e._v(" GitHub ")],1)],1)],1)],1),r("div",{staticClass:"search"},[r("socket",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{id:"loading-spinner"}}),r("b-row",{attrs:{"align-h":"center"}},[r("b-col",{attrs:{md:"6"}},[r("search-form",{ref:"searchForm",attrs:{disabled:null===e.lunrIndex,placeholder:e.lunrIndex?"Search keywords...":"Fetching data..."},on:{submit:e.search}})],1)],1)],1),r("b-container",[r("b-list-group",{staticClass:"toc"},[r("b-list-group-item",{attrs:{variant:"info"}},[e._v("Table of Contents")]),e._l(e.filteredGroups,(function(t){return r("b-list-group-item",{key:t.id},[r("a",{attrs:{href:"#"+t.id}},[e._v(e._s(t.name))]),r("b-badge",{staticClass:"float-right",attrs:{variant:"secondary"}},[e._v(e._s(t.files.length))])],1)}))],2),r("div",{staticStyle:{"margin-top":"1rem","margin-bottom":"3rem"}},[e.allFilesExpanded?r("div",[r("b-btn",{attrs:{variant:"secondary"},on:{click:function(t){return e.setAllFileCollapsed(!0)}}},[e._v("Collapse All")])],1):r("div",[r("b-btn",{attrs:{variant:"secondary"},on:{click:function(t){return e.setAllFileCollapsed(!1)}}},[e._v("Expand All")])],1)]),e._l(e.filteredGroups,(function(t){return r("div",{key:t.id,staticClass:"card-outer",attrs:{id:t.id}},[r("b-card",{staticClass:"border-info",attrs:{header:t.name,"header-bg-variant":"info","header-text-variant":"white"}},e._l(t.files,(function(t){return r("div",{key:t.id},[t?r("div",{staticClass:"rule-card-outer",attrs:{id:t.id}},[r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r("span",{staticClass:"rule-title",on:{click:function(r){return e.toggleFileCollapsed(t.id)}}},[e.fileCollapsed[t.id]?r("span",[r("icon",{attrs:{name:"caret-square-right"}})],1):r("span",[r("icon",{attrs:{name:"caret-square-down"}})],1),e._v(" "+e._s(t.title)+" "),t.maintainers?r("div",{staticClass:"rule-maintainer"},[r("span",{staticClass:"rule-maintainer-header"},[e._v(" Maintained by ")]),r("span",{staticClass:"rule-maintainer-body"},e._l(t.maintainers,(function(t){return r("span",{key:t},[e._v(" @"),r("a",{attrs:{href:"https://github.com/"+t,target:"_blank"}},[e._v(e._s(t))])])})),0)]):e._e()]),r("div",{staticClass:"float-right"},[r("b-dropdown",{attrs:{text:"Import",variant:"primary",split:"",right:""},on:{click:function(r){return e.importJson(t.importUrl)}}},[r("b-dropdown-item-button",{on:{click:function(r){return e.importJson(t.importUrl)}}},[e._v("Import to Karabiner-Elements")]),r("b-dropdown-divider"),r("b-dropdown-item-button",{on:{click:function(r){return e.showJsonModal(t.id)}}},[r("small",[e._v("Show JSON")])]),r("b-dropdown-item-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.pageUrl+"#"+t.id,expression:"pageUrl + '#' + file.id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.urlCopied,expression:"urlCopied",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.urlCopyFailed,expression:"urlCopyFailed",arg:"error"}]},[r("small",[e._v("Copy URL")])]),r("b-dropdown-item-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.pageUrl+t.jsonUrl,expression:"pageUrl + file.jsonUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.urlCopied,expression:"urlCopied",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.urlCopyFailed,expression:"urlCopyFailed",arg:"error"}]},[r("small",[e._v("Copy JSON URL")])])],1)],1)]),r("b-collapse",{attrs:{id:t.id+"-list-group",visible:!e.fileCollapsed[t.id]}},[r("b-list-group",{attrs:{flush:""}},[e._l(t.rules,(function(t){return r("b-list-group-item",{key:t.id},[e._v(" "+e._s(t.description)+" "),t.availableSince?r("div",{staticClass:"rule-available-since"},[e._v(" Karabiner-Elements "+e._s(t.availableSince)+" or later ")]):e._e()])})),t.extraDescriptionPath?[r("b-list-group-item",[r("iframe",{attrs:{id:t.id+"-extra-description",src:"build/"+t.extraDescriptionPath}})])]:e._e()],2)],1)],1)],1):e._e()])})),0)],1)})),"example"!=e.pageName?r("div",[r("hr"),r("a",{attrs:{href:"example.html"}},[e._v("Other examples")])]):e._e(),r("b-modal",{ref:"showJsonModalRef",attrs:{id:"show-json-modal",title:e.showJsonModalTitle,size:"lg","ok-only":"","ok-title":"Close"}},[r("p",{staticClass:"show-json-modal-body"},[e._v(e._s(e.showJsonModalBody))])])],2)],1)},s=[],l=(r("a4d3"),r("e01a"),r("d28b"),r("baa5"),r("b0c0"),r("d3b7"),r("07ac"),r("25f0"),r("3ca3"),r("5319"),r("841c"),r("159b"),r("ddb0"),r("2b3d"),r("bee2")),c=r("d4ec"),d=r("bc3a"),u=r.n(d),p=r("2f21"),f=r.n(p),h=r("d58b"),m=r("f13c"),b=r.n(m),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",{on:{submit:e.submit}},[r("b-input-group",[r("b-form-input",{attrs:{disabled:e.disabled,placeholder:e.placeholder},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),r("b-input-group-append",[r("b-btn",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)],1)],1)},g=[],y={name:"SearchForm",props:{disabled:Boolean,placeholder:String},data:function(){return{searchQuery:""}},methods:{submit:function(e){e.preventDefault(),this.emit()},setSearchQuery:function(e){this.searchQuery=e,this.emit()},emit:function(){this.$emit("submit",this.searchQuery)}}},w=y,x=r("2877"),_=Object(x["a"])(w,v,g,!1,null,null,null),C=_.exports,k=r("0363"),I=r.n(k),S=function(e){var t=e.substring(e.lastIndexOf("/")+1);return-1!=t.lastIndexOf(".")&&(t=t.substring(0,t.lastIndexOf("."))),t},F=!1,E=function e(t,r){Object(c["a"])(this,e),this.id=t,this.description=r.description,this.availableSince=r.available_since},O=function(){function e(t){var r=this;Object(c["a"])(this,e),this.id=S(t.path),this.jsonUrl=t.path,this.importUrl=this.makeJsonUrl(t.path),this.extraDescriptionPath=t.extra_description_path,this.extraDescriptionText=t.extra_description_text,this.title=t.json.title,this.maintainers=t.json.maintainers,this.rules=[],t.json.rules.forEach((function(e,t){r.rules.push(new E(t,e))}))}return Object(l["a"])(e,[{key:"makeJsonUrl",value:function(e){var t=encodeURIComponent(window.location.href.replace(/[^/]+$/,"")+e);return"karabiner://karabiner/assets/complex_modifications/import?url="+t}}]),e}(),j=function e(t){var r=this;Object(c["a"])(this,e),this.id=t.id,this.name=t.name,this.files=[],t.files.forEach((function(e){r.files.push(new O(e))}))},J={name:"Index",components:{Socket:h["a"],SearchForm:C},data:function(){return{loading:!0,pageUrl:window.location.origin+window.location.pathname,pageName:this.fileName(window.location.pathname),groups:[],filteredGroups:[],allFilesExpanded:!1,fileCollapsed:{},showJsonModalTitle:"",showJsonModalBody:"",lunrIndex:null,iFrameResizers:{}}},created:function(){this.fetchData()},methods:{fileName:function(e){var t=e.substring(e.lastIndexOf("/")+1);return-1!=t.lastIndexOf(".")&&(t=t.substring(0,t.lastIndexOf("."))),t},urlSearchQuery:function(){return new URLSearchParams(location.search).get("q")},fetchData:function(){var e=this;u.a.get("build/dist.json",{headers:{"Cache-Control":"no-cache"}}).then((function(t){var r=e.fileName(window.location.pathname);""===r&&(r="index"),t.data[r].forEach((function(t){e.groups.push(new j(t))})),e.filteredGroups=e.groups,e.updateLoadingState(),e.makeLunrIndex(),e.makeIFrameResizer(),e.setAllFileCollapsed(!0),e.scrollToHash();var a=e.urlSearchQuery();null!==a&&e.$refs.searchForm.setSearchQuery(a)}))},updateLoadingState:function(){var e=this;setTimeout((function(){e.loading=!1}),500)},makeLunrIndex:function(){var e=this;this.lunrIndex=f()((function(t){t.ref("fileId"),t.field("title",{boost:2}),t.field("text"),e.groups.forEach((function(e){e.files.forEach((function(e){var r="";void 0!==e.maintainers&&e.maintainers.forEach((function(e){r+=e+" "})),e.rules.forEach((function(e){r+=e.description+" "})),r+=e.extraDescriptionText+" ",t.add({fileId:e.id,title:e.title,text:r.toLowerCase()})}))}))}))},updateAllFilesExpanded:function(){this.allFilesExpanded=!0;for(var e=0,t=Object.values(this.fileCollapsed);e<t.length;e++){var r=t[e];if(r)return void(this.allFilesExpanded=!1)}},setAllFileCollapsed:function(e){var t=this,r={};this.groups.forEach((function(a){a.files.forEach((function(a){r[a.id]=e,t.makeIFrameResizer(a.id)}))})),this.fileCollapsed=r,this.updateAllFilesExpanded()},toggleFileCollapsed:function(e){var t=this.fileCollapsed[e];this.$set(this.fileCollapsed,e,!t),this.makeIFrameResizer(e),this.updateAllFilesExpanded()},makeIFrameResizer:function(e){this.iFrameResizers[e]=I()({},"#"+e+"-extra-description")},importJson:function(e){location.href=e},showJsonModal:function(e){var t=this,r=!0,a=!1,i=void 0;try{for(var n,o=this.groups[Symbol.iterator]();!(r=(n=o.next()).done);r=!0){var s=n.value,l=!0,c=!1,d=void 0;try{for(var p,f=s.files[Symbol.iterator]();!(l=(p=f.next()).done);l=!0){var h=p.value;if(h.id==e)return this.showJsonModalTitle=h.title,this.showJsonModalBody="Loading...",this.$refs.showJsonModalRef.show(),void u.a.get(h.jsonUrl).then((function(e){t.showJsonModalBody=JSON.stringify(e.data,null,2)}))}}catch(m){c=!0,d=m}finally{try{l||null==f.return||f.return()}finally{if(c)throw d}}}}catch(m){a=!0,i=m}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}},urlCopied:function(e){alert("You just copied: "+e.text)},urlCopyFailed:function(){alert("Failed to copy texts")},scrollToHash:function(){var e=this;F||setTimeout((function(){var t=window.location.hash.substring(1),r=document.getElementById(t);r&&(F=!0,e.$set(e.fileCollapsed,t,!1),e.makeIFrameResizer(t),b.a.scrollTo(r,500,{offset:-100}))}),500)},search:function(e){var t=this;if(e!==this.urlSearchQuery()&&window.history.pushState({q:e},"","?q="+encodeURIComponent(e)),null!==this.lunrIndex)if(e){var r=new j({id:"search-result",name:"Search Result",files:[]}),a=[r],i=this.lunrIndex.query((function(t){f.a.tokenizer(e.toLowerCase()).forEach((function(e){var r=e.toString();t.term(r,{boost:100}),t.term(r,{wildcard:f.a.Query.wildcard.LEADING|f.a.Query.wildcard.TRAILING,boost:10}),t.term(r,{editDistance:2})}))}));i.forEach((function(e){var a=e.ref;t.groups.forEach((function(e){e.files.forEach((function(e){e.id==a&&r.files.push(e)}))}))})),this.filteredGroups=a,window.scrollTo(0,0)}else this.filteredGroups=this.groups}}},U=J,N=(r("7672"),Object(x["a"])(U,o,s,!1,null,"6d10f1fb",null)),M=N.exports,R={name:"app",components:{Index:M}},T=R,Q=Object(x["a"])(T,i,n,!1,null,null,null),L=Q.exports,A=(r("f9e3"),r("2dd8"),r("5f5b")),P=r("4eb5"),D=r.n(P),$=(r("d06d"),r("0874"));a["default"].config.productionTip=!1,a["default"].use(A["a"]),a["default"].use(D.a),a["default"].component("icon",$["a"]),new a["default"]({render:function(e){return e(L)}}).$mount("#app")},7672:function(e,t,r){"use strict";var a=r("1e0c"),i=r.n(a);i.a}});
//# sourceMappingURL=app.b3386ff2.js.map