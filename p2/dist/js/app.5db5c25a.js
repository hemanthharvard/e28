(function(e){function t(t){for(var o,a,i=t[0],l=t[1],d=t[2],s=0,b=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2dbb":function(e,t,n){"use strict";n("dfb8")},"3d56":function(e,t,n){"use strict";n("8936")},"3e2a":function(e,t,n){"use strict";n("c711")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,c=n("7a23"),r=n("6c02"),a=n("d8e1"),i=n.n(a),l={class:"navbar"},d=Object(c["g"])("a",{class:"navbar-logo",href:"/"},[Object(c["g"])("img",{alt:"Note Keeper",id:"logo",class:"logo",src:i.a}),Object(c["g"])("h1",null,"Note Keeper")],-1),u={class:"navbar-contents"},s=Object(c["g"])("p",{id:"description"}," Note Keeper is your one-stop shop for all your note keeping needs. ",-1);function b(e,t,n,o,r,a){var i=Object(c["w"])("router-link"),b=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])("div",l,[d,Object(c["g"])("nav",u,[Object(c["g"])("ul",null,[Object(c["g"])("li",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(r.links,(function(e){return Object(c["p"])(),Object(c["d"])(i,{key:e,to:r.paths[e]},{default:Object(c["B"])((function(){return[Object(c["f"])(Object(c["y"])(e),1)]})),_:2},1032,["to"])})),128))])])])]),s,Object(c["g"])(b,{notes:r.notes,onUpdateNotes:a.loadNotes},null,8,["notes","onUpdateNotes"])])}var p=n("bc3a").create({baseURL:null!==(o="http://e28data.hemanthkishen.com/data")&&void 0!==o?o:"http://localhost:8080/data",responseType:"json"}),O={name:"App",data:function(){return{notes:[],links:["Home","Favourites","Create new note"],paths:{Home:"/",Favourites:"/favourites","Create new note":"/new"}}},mounted:function(){this.loadNotes()},methods:{loadNotes:function(){var e=this;p.get("listNotes").then((function(t){e.notes=t.data.data}))}}};n("3e2a"),n("9a2f");O.render=b;var j=O,f=Object(c["C"])("data-v-3790bb46");Object(c["s"])("data-v-3790bb46");var v={id:"home-page"};Object(c["q"])();var h=f((function(e,t,n,o,r,a){var i=Object(c["w"])("note-card");return Object(c["p"])(),Object(c["d"])("div",v,[Object(c["g"])("ul",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(n.notes,(function(e){return Object(c["p"])(),Object(c["d"])("li",{key:e._id},[Object(c["g"])(i,{label:e.title,note:e},null,8,["label","note"])])})),128))])])})),g={id:"note-card"},y={key:0,class:"star"},m={key:1,class:"star"},k={key:2,class:"title"},w={key:3,class:"title"},M={key:4,class:"content"},x={key:5,class:"content"},_={key:6},N=Object(c["g"])("label",{for:"favorite"},"Favorite",-1),C={class:"button-wrapper"};function P(e,t,n,o,r,a){return Object(c["p"])(),Object(c["d"])("div",g,[!r.editMode&&n.note.isFavorite?(Object(c["p"])(),Object(c["d"])("div",y,"★")):Object(c["e"])("",!0),r.editMode||n.note.isFavorite?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("div",m,"☆")),r.editMode?(Object(c["p"])(),Object(c["d"])("div",k,[Object(c["g"])("input",{type:"text",id:"title",name:"title",value:n.note.title},null,8,["value"])])):(Object(c["p"])(),Object(c["d"])("div",w,[Object(c["g"])("p",null,Object(c["y"])(n.note.title),1)])),r.editMode?(Object(c["p"])(),Object(c["d"])("div",M,[Object(c["g"])("textarea",{id:"content",name:"content",rows:"6",cols:"30",value:n.note.content,maxlength:"200"},"\n      ",8,["value"])])):(Object(c["p"])(),Object(c["d"])("div",x,[Object(c["g"])("p",null,Object(c["y"])(n.note.content),1)])),r.editMode?(Object(c["p"])(),Object(c["d"])("div",_,[Object(c["g"])("input",{type:"checkbox",id:"favorite",name:"favorite",checked:n.note.isFavorite},null,8,["checked"]),N])):Object(c["e"])("",!0),Object(c["g"])("div",C,[Object(c["g"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return a.handleClick&&a.handleClick.apply(a,arguments)})},Object(c["y"])(r.editMode?"Done":"Edit"),1)])])}var F={methods:{handleClick:function(){this.editMode=!this.editMode}},data:function(){return{editMode:!1}},props:{note:{type:Object,default:null}}};n("3d56");F.render=P;var S=F,K={props:{notes:{type:Array,default:null}},components:{"note-card":S}};n("2dbb");K.render=h,K.__scopeId="data-v-3790bb46";var T=K;const U={};var A=U;const H={};var J=H;const q={};var B=q,D=Object(r["a"])({history:Object(r["b"])(),routes:[{path:"/",component:T},{path:"/favourites",component:A},{path:"/new",component:J},{path:"/:id",component:B,props:!0}]});Object(c["c"])(j).use(D).mount("#app")},8936:function(e,t,n){},"9a2f":function(e,t,n){"use strict";n("d828")},c711:function(e,t,n){},d828:function(e,t,n){},d8e1:function(e,t,n){e.exports=n.p+"img/note-keeper.efd0a70a.png"},dfb8:function(e,t,n){}});
//# sourceMappingURL=app.5db5c25a.js.map