(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0286":function(e,t,n){},"0bb9":function(e,t,n){"use strict";n("c30d")},"3d00":function(e,t,n){},"3e2a":function(e,t,n){"use strict";n("c711")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("1da1"),o=(n("96cf"),n("6c02")),s=(n("4de4"),n("5502")),c=n("d4ec"),i=n("bee2"),u=n("ade3"),d=function(){function e(){Object(c["a"])(this,e),Object(u["a"])(this,"axios",void 0),this.axios=n("bc3a").create({baseURL:"http://e28data.hemanthkishen.com/data",responseType:"json",withCredentials:!0})}return Object(i["a"])(e,[{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.get(t);case 3:if(n=e.sent,!(n.status&&n.status>=300)){e.next=6;break}throw{status:n.status,statusCode:n.statusCode,response:n};case 6:return e.abrupt("return",n);case 9:return e.prev=9,e.t0=e["catch"](0),console.error("Axios get failed: ",e.t0),e.abrupt("return",e.t0.response);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"put",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.put(t,n);case 3:if(r=e.sent,!(r.status&&r.status>=300)){e.next=6;break}throw{status:r.status,statusCode:r.statusCode,response:r};case 6:return e.abrupt("return",r);case 9:return e.prev=9,e.t0=e["catch"](0),console.error("Axios put failed: ",e.t0),e.abrupt("return",e.t0.response);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"post",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.post(t,n);case 3:if(r=e.sent,!(r.status&&r.status>=300)){e.next=6;break}throw{status:r.status,statusCode:r.statusCode,response:r};case 6:return e.abrupt("return",r);case 9:return e.prev=9,e.t0=e["catch"](0),console.error("Axios post failed: ",e.t0),e.abrupt("return",e.t0.response);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.delete(t);case 3:if(n=e.sent,!(n.status&&n.status>=300)){e.next=6;break}throw{status:n.status,statusCode:n.statusCode,response:n};case 6:return e.abrupt("return",n);case 9:return e.prev=9,e.t0=e["catch"](0),console.error("Axios delete failed: ",e.t0),e.abrupt("return",e.t0.response);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),l=new d,p=!1,b=p?[Object(s["a"])({})]:[],f=Object(s["b"])({plugins:b,state:function(){return{notes:[],username:null}},mutations:{setNotes:function(e,t){e.notes=t},setUsername:function(e,t){e.username=t}},actions:{loadNotes:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.post("listNotes",{username:e.state.username});case 2:n=t.sent,e.commit("setNotes",n.data?n.data.data:[]);case 4:case"end":return t.stop()}}),t)})))()},authUser:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.get("authUser");case 2:n=t.sent,"success"===n.data.status?(e.commit("setUsername",n.data?n.data.data[0].username:[]),re.push("/")):e.commit("setUsername",null);case 4:case"end":return t.stop()}}),t)})))()},logoutUser:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.get("logoutUser");case 2:n=t.sent,"success"===n.data.status&&e.commit("setUsername",null);case 4:case"end":return t.stop()}}),t)})))()}},getters:{getFavoriteNotes:function(e){return function(){return e.notes.filter((function(e){return e.isFavorite}))}}}}),h=Object(r["F"])("data-v-582cfd73");Object(r["s"])("data-v-582cfd73");var O={id:"home-page"};Object(r["q"])();var j=h((function(e,t,n,a,o,s){var c=Object(r["w"])("note-card");return Object(r["p"])(),Object(r["d"])("div",O,[Object(r["g"])("ul",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(s.notes,(function(e){return Object(r["p"])(),Object(r["d"])("li",{key:e._id},[Object(r["g"])(c,{label:e.title,note:e},null,8,["label","note"])])})),128))])])})),v=Object(r["F"])("data-v-9c683278");Object(r["s"])("data-v-9c683278");var m={id:"note-card"},g={key:0,class:"star"},w={key:1,class:"star"},y={key:2,class:"title"},k={key:3,class:"title"},x={key:4,class:"content"},N={key:5,class:"content"},C={key:6},U=Object(r["g"])("label",{for:"favorite"},"Favorite",-1),R={key:0,class:"error-message"},F={key:1,class:"error-message"},A={class:"button-wrapper"};Object(r["q"])();var M=v((function(e,t,n,a,o,s){return Object(r["p"])(),Object(r["d"])("div",m,[!o.editMode&&n.note.isFavorite?(Object(r["p"])(),Object(r["d"])("div",g,"★")):Object(r["e"])("",!0),o.editMode||n.note.isFavorite?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("div",w,"☆")),o.editMode?(Object(r["p"])(),Object(r["d"])("div",y,[Object(r["E"])(Object(r["g"])("input",{type:"text",id:"title",name:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.title=e}),maxlength:"30"},null,512),[[r["B"],o.title]])])):(Object(r["p"])(),Object(r["d"])("div",k,Object(r["y"])(n.note.title),1)),o.editMode?(Object(r["p"])(),Object(r["d"])("div",x,[Object(r["E"])(Object(r["g"])("textarea",{id:"content",name:"content",rows:"6",cols:"30","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.content=e}),maxlength:"200"},"\n      ",512),[[r["B"],o.content]])])):(Object(r["p"])(),Object(r["d"])("div",N,Object(r["y"])(n.note.content),1)),o.editMode?(Object(r["p"])(),Object(r["d"])("div",C,[Object(r["E"])(Object(r["g"])("input",{type:"checkbox",id:"favorite",name:"favorite","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.isFavorite=e}),"true-value":"true","false-value":"false"},null,512),[[r["A"],o.isFavorite]]),U,o.title?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("p",R,"Please enter title")),o.content?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("p",F,"Please enter content"))])):Object(r["e"])("",!0),Object(r["g"])("div",A,[!n.isNewNote&&o.editMode?(Object(r["p"])(),Object(r["d"])("button",{key:0,class:"delete-button",onClick:t[4]||(t[4]=function(){return s.handleDeleteClick&&s.handleDeleteClick.apply(s,arguments)})}," Delete ")):Object(r["e"])("",!0),!n.isNewNote&&o.editMode?(Object(r["p"])(),Object(r["d"])("button",{key:1,class:"edit-button",onClick:t[5]||(t[5]=function(){return s.handleEditClick&&s.handleEditClick.apply(s,arguments)})}," Done ")):Object(r["e"])("",!0),n.isNewNote||o.editMode?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:2,class:"edit-button",onClick:t[6]||(t[6]=function(){return s.handleEditClick&&s.handleEditClick.apply(s,arguments)})}," Edit ")),n.isNewNote&&o.editMode?(Object(r["p"])(),Object(r["d"])("button",{key:3,class:"add-button",onClick:t[7]||(t[7]=function(){return s.handleAddClick&&s.handleAddClick.apply(s,arguments)})},Object(r["y"])(o.isAdding?"Adding...":"Add"),1)):Object(r["e"])("",!0)])])})),_={name:"NoteCard",methods:{updateCard:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.put("updateNote/".concat(this.note._id),t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addCard:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.post("newNote",t);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),deleteCard:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.delete("deleteNote/".concat(this.note._id));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleEditClick:function(){var e=this;if(this.editMode){var t={title:this.title,content:this.content,isFavorite:this.isFavorite};this.title&&this.content&&(this.updateCard(t),setTimeout((function(){return e.$store.dispatch("loadNotes")}),1e3))}this.title&&this.content&&(this.editMode=!this.editMode)},handleAddClick:function(){var e=this,t={title:this.title,content:this.content,isFavorite:this.isFavorite,username:this.$store.state.username};this.title&&this.content&&(this.addCard(t),this.isAdding=!this.isAdding,setTimeout((function(){return e.$router.push("/")}),1e3))},handleDeleteClick:function(){var e=this;this.editMode=!this.editMode,this.deleteCard(),setTimeout((function(){return e.$store.dispatch("loadNotes")}),1e3)}},data:function(){return{title:this.note.title,content:this.note.content,isFavorite:this.note.isFavorite,editMode:this.isNewNote,isAdding:!1}},props:{note:{type:Object,default:null},isNewNote:{type:Boolean,default:!1}}};n("ddb7");_.render=M,_.__scopeId="data-v-9c683278";var $=_,P={name:"HomePage",data:function(){return{}},mounted:function(){this.loadNotes()},components:{"note-card":$},methods:{loadNotes:function(){this.$store.dispatch("loadNotes")}},computed:{notes:function(){return this.$store.state.notes}}};n("acd7");P.render=j,P.__scopeId="data-v-582cfd73";var E=P,q=Object(r["F"])("data-v-10faf426");Object(r["s"])("data-v-10faf426");var L={id:"favourites-page"};Object(r["q"])();var B=q((function(e,t,n,a,o,s){var c=Object(r["w"])("note-card");return Object(r["p"])(),Object(r["d"])("div",L,[Object(r["g"])("ul",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(s.filteredNotes,(function(e){return Object(r["p"])(),Object(r["d"])("li",{key:e._id},[Object(r["g"])(c,{label:e.title,note:e},null,8,["label","note"])])})),128))])])})),D={name:"FavoritesPage",data:function(){return{}},mounted:function(){this.loadNotes()},components:{"note-card":$},methods:{loadNotes:function(){this.$store.dispatch("loadNotes")}},computed:{filteredNotes:function(){return this.$store.getters.getFavoriteNotes()}}};n("0bb9");D.render=B,D.__scopeId="data-v-10faf426";var S=D,T={id:"create-new-note"};function V(e,t,n,a,o,s){var c=Object(r["w"])("note-card");return Object(r["p"])(),Object(r["d"])("div",T,[Object(r["g"])(c,{label:o.note.title,note:o.note,isNewNote:!0},null,8,["label","note"])])}var H={name:"CreateNewNotePage",components:{"note-card":$},data:function(){return{note:{title:"",content:"",isFavorite:!1}}}};H.render=V;var I=H,K={id:"account-page"},J={id:"loginForm"},z={key:0},G={key:1},Q={class:"form-item"},W=Object(r["f"])(" Username: "),X={class:"form-item"},Y=Object(r["f"])(" Password: "),Z={key:4};function ee(e,t,n,a,o,s){return Object(r["p"])(),Object(r["d"])("div",K,[Object(r["g"])("div",J,[o.createNewUserAccount?(Object(r["p"])(),Object(r["d"])("h2",z,"Create an account")):(Object(r["p"])(),Object(r["d"])("h2",G,"Login")),Object(r["g"])("div",Q,[Object(r["g"])("label",null,[W,Object(r["E"])(Object(r["g"])("input",{type:"text",autocomplete:"current-username","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.data.username=e}),"data-test":"text"},null,512),[[r["B"],o.data.username]])])]),Object(r["g"])("div",X,[Object(r["g"])("label",null,[Y,Object(r["E"])(Object(r["g"])("input",{type:"password",autocomplete:"current-password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.data.password=e}),"data-test":"password-input"},null,512),[[r["B"],o.data.password]])])]),o.createNewUserAccount?(Object(r["p"])(),Object(r["d"])("button",{key:2,onClick:t[3]||(t[3]=function(){return s.signup&&s.signup.apply(s,arguments)}),"data-test":"signup-button"}," Signup ")):(Object(r["p"])(),Object(r["d"])("button",{key:3,onClick:t[4]||(t[4]=function(){return s.login&&s.login.apply(s,arguments)}),"data-test":"login-button"},"Login")),Object(r["g"])("p",{class:"form-button",onClick:t[5]||(t[5]=function(){return s.toggleForm&&s.toggleForm.apply(s,arguments)})},Object(r["y"])(o.createNewUserAccount?"Back to login":"Create a new account"),1),o.errors?(Object(r["p"])(),Object(r["d"])("ul",Z,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.errors,(function(e,t){return Object(r["p"])(),Object(r["d"])("li",{class:"error",key:t},Object(r["y"])(e),1)})),128))])):Object(r["e"])("",!0)])])}var te={data:function(){return{createNewUserAccount:!1,data:{username:"",password:""},errors:[]}},methods:{toggleForm:function(){this.createNewUserAccount=!this.createNewUserAccount},login:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.post("loginUser",{username:e.data.username,password:e.data.password});case 2:n=t.sent,"success"===n.data.status?(e.$store.commit("setUsername",e.data.username),e.$router.push("/")):e.errors.push(n.data.message);case 4:case"end":return t.stop()}}),t)})))()},signup:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.post("newUser",{username:e.data.username,password:e.data.password});case 2:n=t.sent,"success"===n.data.status?e.toggleForm():e.errors.push(n.data.message);case 4:case"end":return t.stop()}}),t)})))()}}};te.render=ee;var ne=te,re=Object(o["a"])({history:Object(o["b"])(),routes:[{path:"/",component:E,meta:{requiresAuth:!0}},{path:"/favourites",component:S,meta:{requiresAuth:!0}},{path:"/new",component:I,meta:{requiresAuth:!0}},{path:"/login",component:ne}]});re.beforeEach(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.matched.some((function(e){return e.meta.requiresAuth})),a&&!f.state.username?r("/login"):r();case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var ae=n("d8e1"),oe=n.n(ae),se={class:"navbar"},ce=Object(r["g"])("a",{class:"navbar-logo",href:"/"},[Object(r["g"])("img",{alt:"Note Keeper",id:"logo",class:"logo",src:oe.a}),Object(r["g"])("h1",null,"Note Keeper")],-1),ie={class:"navbar-contents"},ue=Object(r["g"])("p",{id:"description"}," Note Keeper is your one-stop shop for all your note keeping needs. ",-1);function de(e,t,n,a,o,s){var c=Object(r["w"])("router-link"),i=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("div",se,[ce,Object(r["g"])("nav",ie,[Object(r["g"])("ul",null,[Object(r["g"])("li",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.links,(function(e){return Object(r["p"])(),Object(r["d"])(c,{key:e,to:o.paths[e]},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["y"])(e),1)]})),_:2},1032,["to"])})),128))])])]),this.$store.state.username?(Object(r["p"])(),Object(r["d"])("div",{key:0,class:"logout-button",onClick:t[1]||(t[1]=function(){return s.handleLogout&&s.handleLogout.apply(s,arguments)})}," Logout, "+Object(r["y"])(this.$store.state.username),1)):Object(r["e"])("",!0)]),ue,Object(r["g"])(i)])}var le={name:"App",data:function(){return{links:["Home","Favourites","Create new note"],paths:{Home:"/",Favourites:"/favourites","Create new note":"/new"}}},mounted:function(){this.authUser()},methods:{authUser:function(){this.$store.dispatch("authUser")},handleLogout:function(){this.$store.dispatch("logoutUser"),this.$router.push("/login")}}};n("3e2a"),n("e19a");le.render=de;var pe=le;Object(r["c"])(pe).use(re).use(f).mount("#app")},6910:function(e,t,n){},acd7:function(e,t,n){"use strict";n("6910")},c30d:function(e,t,n){},c711:function(e,t,n){},d8e1:function(e,t,n){e.exports=n.p+"img/note-keeper.efd0a70a.png"},ddb7:function(e,t,n){"use strict";n("0286")},e19a:function(e,t,n){"use strict";n("3d00")}});
//# sourceMappingURL=app.1e39819a.js.map