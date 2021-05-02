(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"000d":function(t,e,n){},"0bb9":function(t,e,n){"use strict";n("c30d")},"275b":function(t,e,n){},"3e2a":function(t,e,n){"use strict";n("c711")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("6c02"),o=n("1da1"),i=(n("4de4"),n("96cf"),n("5502")),c=n("d4ec"),s=n("bee2"),u=n("ade3"),d=function(){function t(){Object(c["a"])(this,t),Object(u["a"])(this,"axios",void 0),this.axios=n("bc3a").create({baseURL:"http://e28data.hemanthkishen.com/data",responseType:"json"})}return Object(s["a"])(t,[{key:"get",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axios.get(e);case 3:if(n=t.sent,!(n.status&&n.status>=300)){t.next=6;break}throw{status:n.status,statusCode:n.statusCode};case 6:return t.abrupt("return",n);case 9:return t.prev=9,t.t0=t["catch"](0),console.error("Axios get failed: ",t.t0),t.abrupt("return",{});case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"put",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axios.put(e,n);case 3:if(r=t.sent,!(r.status&&r.status>=300)){t.next=6;break}throw{status:r.status,statusCode:r.statusCode};case 6:return t.abrupt("return",r);case 9:return t.prev=9,t.t0=t["catch"](0),console.error("Axios put failed: ",t.t0),t.abrupt("return",{});case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"post",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axios.post(e,n);case 3:if(r=t.sent,!(r.status&&r.status>=300)){t.next=6;break}throw{status:r.status,statusCode:r.statusCode};case 6:return t.abrupt("return",r);case 9:return t.prev=9,t.t0=t["catch"](0),console.error("Axios post failed: ",t.t0),t.abrupt("return",{});case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.axios.delete(e);case 3:if(n=t.sent,!(n.status&&n.status>=300)){t.next=6;break}throw{status:n.status,statusCode:n.statusCode};case 6:return t.abrupt("return",n);case 9:return t.prev=9,t.t0=t["catch"](0),console.error("Axios delete failed: ",t.t0),t.abrupt("return",{});case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),l=new d,p=!1,b=p?[Object(i["a"])({})]:[],f=Object(i["b"])({plugins:b,state:function(){return{notes:[]}},mutations:{setNotes:function(t,e){t.notes=e}},actions:{loadNotes:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.get("listNotes");case 2:n=e.sent,t.commit("setNotes",n.data?n.data.data:[]);case 4:case"end":return e.stop()}}),e)})))()}},getters:{getFavoriteNotes:function(t){return function(){return t.notes.filter((function(t){return t.isFavorite}))}}}}),h=n("d8e1"),O=n.n(h),j={class:"navbar"},v=Object(r["g"])("a",{class:"navbar-logo",href:"/"},[Object(r["g"])("img",{alt:"Note Keeper",id:"logo",class:"logo",src:O.a}),Object(r["g"])("h1",null,"Note Keeper")],-1),g={class:"navbar-contents"},m=Object(r["g"])("p",{id:"description"}," Note Keeper is your one-stop shop for all your note keeping needs. ",-1);function w(t,e,n,a,o,i){var c=Object(r["w"])("router-link"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("div",j,[v,Object(r["g"])("nav",g,[Object(r["g"])("ul",null,[Object(r["g"])("li",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.links,(function(t){return Object(r["p"])(),Object(r["d"])(c,{key:t,to:o.paths[t]},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["y"])(t),1)]})),_:2},1032,["to"])})),128))])])])]),m,Object(r["g"])(s)])}var y={name:"App",data:function(){return{links:["Home","Favourites","Create new note"],paths:{Home:"/",Favourites:"/favourites","Create new note":"/new"}}}};n("3e2a"),n("9efb");y.render=w;var k=y,x=Object(r["F"])("data-v-582cfd73");Object(r["s"])("data-v-582cfd73");var N={id:"home-page"};Object(r["q"])();var C=x((function(t,e,n,a,o,i){var c=Object(r["w"])("note-card");return Object(r["p"])(),Object(r["d"])("div",N,[Object(r["g"])("ul",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(i.notes,(function(t){return Object(r["p"])(),Object(r["d"])("li",{key:t._id},[Object(r["g"])(c,{label:t.title,note:t},null,8,["label","note"])])})),128))])])})),F=Object(r["F"])("data-v-0a4f6516");Object(r["s"])("data-v-0a4f6516");var M={id:"note-card"},R={key:0,class:"star"},_={key:1,class:"star"},A={key:2,class:"title"},P={key:3,class:"title"},E={key:4,class:"content"},$={key:5,class:"content"},D={key:6},T=Object(r["g"])("label",{for:"favorite"},"Favorite",-1),S={key:0,class:"error-message"},U={key:1,class:"error-message"},q={class:"button-wrapper"};Object(r["q"])();var B=F((function(t,e,n,a,o,i){return Object(r["p"])(),Object(r["d"])("div",M,[!o.editMode&&n.note.isFavorite?(Object(r["p"])(),Object(r["d"])("div",R,"★")):Object(r["e"])("",!0),o.editMode||n.note.isFavorite?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("div",_,"☆")),o.editMode?(Object(r["p"])(),Object(r["d"])("div",A,[Object(r["E"])(Object(r["g"])("input",{type:"text",id:"title",name:"title","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.title=t}),maxlength:"30"},null,512),[[r["B"],o.title]])])):(Object(r["p"])(),Object(r["d"])("div",P,Object(r["y"])(n.note.title),1)),o.editMode?(Object(r["p"])(),Object(r["d"])("div",E,[Object(r["E"])(Object(r["g"])("textarea",{id:"content",name:"content",rows:"6",cols:"30","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.content=t}),maxlength:"200"},"\n      ",512),[[r["B"],o.content]])])):(Object(r["p"])(),Object(r["d"])("div",$,Object(r["y"])(n.note.content),1)),o.editMode?(Object(r["p"])(),Object(r["d"])("div",D,[Object(r["E"])(Object(r["g"])("input",{type:"checkbox",id:"favorite",name:"favorite","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.isFavorite=t}),"true-value":"true","false-value":"false"},null,512),[[r["A"],o.isFavorite]]),T,o.title?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("p",S,"Please enter title")),o.content?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("p",U,"Please enter content"))])):Object(r["e"])("",!0),Object(r["g"])("div",q,[!n.isNewNote&&o.editMode?(Object(r["p"])(),Object(r["d"])("button",{key:0,class:"delete-button",onClick:e[4]||(e[4]=function(){return i.handleDeleteClick&&i.handleDeleteClick.apply(i,arguments)})}," Delete ")):Object(r["e"])("",!0),!n.isNewNote&&o.editMode?(Object(r["p"])(),Object(r["d"])("button",{key:1,class:"edit-button",onClick:e[5]||(e[5]=function(){return i.handleEditClick&&i.handleEditClick.apply(i,arguments)})}," Done ")):Object(r["e"])("",!0),n.isNewNote||o.editMode?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:2,class:"edit-button",onClick:e[6]||(e[6]=function(){return i.handleEditClick&&i.handleEditClick.apply(i,arguments)})}," Edit ")),n.isNewNote&&o.editMode?(Object(r["p"])(),Object(r["d"])("button",{key:3,class:"add-button",onClick:e[7]||(e[7]=function(){return i.handleAddClick&&i.handleAddClick.apply(i,arguments)})},Object(r["y"])(o.isAdding?"Adding...":"Add"),1)):Object(r["e"])("",!0)])])})),H={name:"NoteCard",methods:{updateCard:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.put("updateNote/".concat(this.note._id),e);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),addCard:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.post("newNote",e);case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),deleteCard:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.delete("deleteNote/".concat(this.note._id));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleEditClick:function(){var t=this;if(this.editMode){var e={title:this.title,content:this.content,isFavorite:this.isFavorite};this.title&&this.content&&(this.updateCard(e),setTimeout((function(){return t.$store.dispatch("loadNotes")}),1e3))}this.title&&this.content&&(this.editMode=!this.editMode)},handleAddClick:function(){var t=this,e={title:this.title,content:this.content,isFavorite:this.isFavorite};this.title&&this.content&&(this.addCard(e),this.isAdding=!this.isAdding,setTimeout((function(){return t.$router.push("/")}),1e3))},handleDeleteClick:function(){var t=this;this.editMode=!this.editMode,this.deleteCard(),setTimeout((function(){return t.$store.dispatch("loadNotes")}),1e3)}},data:function(){return{title:this.note.title,content:this.note.content,isFavorite:this.note.isFavorite,editMode:this.isNewNote,isAdding:!1}},props:{note:{type:Object,default:null},isNewNote:{type:Boolean,default:!1}}};n("f458");H.render=B,H.__scopeId="data-v-0a4f6516";var I=H,K={name:"HomePage",data:function(){return{}},mounted:function(){this.loadNotes()},components:{"note-card":I},methods:{loadNotes:function(){this.$store.dispatch("loadNotes")}},computed:{notes:function(){return this.$store.state.notes}}};n("acd7");K.render=C,K.__scopeId="data-v-582cfd73";var V=K,J=Object(r["F"])("data-v-10faf426");Object(r["s"])("data-v-10faf426");var L={id:"favourites-page"};Object(r["q"])();var z=J((function(t,e,n,a,o,i){var c=Object(r["w"])("note-card");return Object(r["p"])(),Object(r["d"])("div",L,[Object(r["g"])("ul",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(i.filteredNotes,(function(t){return Object(r["p"])(),Object(r["d"])("li",{key:t._id},[Object(r["g"])(c,{label:t.title,note:t},null,8,["label","note"])])})),128))])])})),G={name:"FavoritesPage",data:function(){return{}},mounted:function(){this.loadNotes()},components:{"note-card":I},methods:{loadNotes:function(){this.$store.dispatch("loadNotes")}},computed:{filteredNotes:function(){return this.$store.getters.getFavoriteNotes()}}};n("0bb9");G.render=z,G.__scopeId="data-v-10faf426";var Q=G,W={id:"create-new-note"};function X(t,e,n,a,o,i){var c=Object(r["w"])("note-card");return Object(r["p"])(),Object(r["d"])("div",W,[Object(r["g"])(c,{label:o.note.title,note:o.note,isNewNote:!0},null,8,["label","note"])])}var Y={name:"CreateNewNotePage",components:{"note-card":I},data:function(){return{note:{title:"",content:"",isFavorite:!1}}}};Y.render=X;var Z=Y,tt=Object(a["a"])({history:Object(a["b"])(),routes:[{path:"/",component:V},{path:"/favourites",component:Q},{path:"/new",component:Z}]});Object(r["c"])(k).use(tt).use(f).mount("#app")},6910:function(t,e,n){},"9efb":function(t,e,n){"use strict";n("275b")},acd7:function(t,e,n){"use strict";n("6910")},c30d:function(t,e,n){},c711:function(t,e,n){},d8e1:function(t,e,n){t.exports=n.p+"img/note-keeper.efd0a70a.png"},f458:function(t,e,n){"use strict";n("000d")}});
//# sourceMappingURL=app.27212390.js.map