module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=12)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("typegoose")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports=require("ejs")},function(e,t,n){"use strict";n.r(t);var o=n(2);var r=n(1);n.d(t,"ArticleModel",function(){return s});var i=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class a extends o.Typegoose{}i([Object(o.prop)(),c("design:type",String)],a.prototype,"title",void 0),i([Object(o.prop)(),c("design:type",String)],a.prototype,"description",void 0),i([Object(o.prop)(),c("design:type",String)],a.prototype,"content",void 0);const s=(new a).getModelForClass(a,{schemaOptions:{collection:"articles"}});r.model("articles",new a)},function(e,t,n){"use strict";n.r(t);var o=n(3),r=n.n(o),i=n(5),c=n.n(i),a=n(11),s=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(c,a)}s((o=o.apply(e,t||[])).next())})};const l=(e,t)=>s(void 0,void 0,void 0,function*(){const{_id:n}=e.params;if(!n){const e=yield a.ArticleModel.find();return void t.status(200).send(e)}const o=yield a.ArticleModel.findById(n);t.status(200).send(o)}),d=(e,t)=>s(void 0,void 0,void 0,function*(){const{body:n}=e,o={title:n.title,description:n.description,content:n.content};yield new a.ArticleModel(o).save(),t.status(201).send(`New article ${o.title} has been created!`)}),u=(e,t)=>s(void 0,void 0,void 0,function*(){const{body:n}=e;n._id||t.status(500).send("Resource _id is not specified!"),yield a.ArticleModel.findOneAndUpdate({_id:n._id},n,{upsert:!1}),t.status(200).send(`Article ${n.title} has been updated!`)}),f=(e,t)=>s(void 0,void 0,void 0,function*(){const{body:n}=e;n._id||t.status(500).send("Resource _id is not specified!"),yield a.ArticleModel.findByIdAndDelete(n._id),t.status(200).send(`Article ${n.title} has been deleted!`)});var p=n(1),m=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(c,a)}s((o=o.apply(e,t||[])).next())})};const v=(e,t)=>m(void 0,void 0,void 0,function*(){const e=(yield p.connection.db.listCollections().toArray()).map(e=>e.name);t.status(200).send(e)});var y=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(c,a)}s((o=o.apply(e,t||[])).next())})};const b=(e,t)=>y(void 0,void 0,void 0,function*(){const n=e.params.collectionName;console.log("collectionName: ",n);try{const e=yield p.model(n).find();t.status(200).send(e)}catch(e){t.status(500).send(e)}});var h=n(6),g=n(0),x=n.n(g);n(7);n(8);n(9);const w=x.a.createElement(x.a.Fragment,null,x.a.createElement(class extends x.a.Component{render(){return x.a.createElement("header",{className:"site-header"},x.a.createElement("h2",null,"Site header!"))}},null),x.a.createElement("div",{className:"container"},x.a.createElement(class extends x.a.Component{render(){return x.a.createElement("nav",{className:"main-menu"},x.a.createElement("ul",{className:"main-menu__list"},[{label:"Home",href:"/"},{label:"Article",href:"/article"},{label:"About",href:"/about"},{label:"Contacts",href:"/contacts"}].map(({label:e,href:t})=>x.a.createElement("li",{key:t,className:"main-menu__item"},x.a.createElement("a",{href:t,className:"main-menu__link"},e)))))}},null),x.a.createElement("div",{className:"row no-gutters"},x.a.createElement("div",{className:"col-8"},x.a.createElement(class extends x.a.Component{render(){return x.a.createElement("div",null,x.a.createElement("h1",null,"Home page"))}},null)),x.a.createElement("div",{className:"col-4"},x.a.createElement(class extends x.a.Component{render(){return x.a.createElement("aside",{className:"site-sidebar"},"Site sidebar")}},null)))),x.a.createElement(class extends x.a.Component{render(){return x.a.createElement("footer",{className:"site-footer"},"Site footer")}},null));var E=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(c,a)}s((o=o.apply(e,t||[])).next())})};const O=n(4),j=(e,t)=>E(void 0,void 0,void 0,function*(){const e=yield a.ArticleModel.find();t.render("index",{App:Object(h.renderToString)(w),ssr:!0,articles:e})}),_=(e,t)=>E(void 0,void 0,void 0,function*(){t.sendFile(O.resolve(process.cwd(),"admin/dist/index.html"))}),N="/",A="/admin-panel",S="/rest/collection",P="/rest/document/:collectionName",R="/rest/article";p.connect("mongodb://localhost:27017/blog-cms",{useNewUrlParser:!0}),n(11);const M=n(4),$=r()();var q;$.set("view engine","ejs"),$.engine("ejs",n(10).renderFile),$.set("views","app/views"),$.use(c.a.json()),$.use(r.a.static(M.resolve(process.cwd(),"app/dist"))),$.use(r.a.static(M.resolve(process.cwd(),"admin/dist"))),(q=$).get(N,j),q.get(`${A}*`,_),q.get(`${R}/:_id`,l),q.post(`${R}`,d),q.patch(`${R}`,u),q.delete(`${R}`,f),q.get(S,v),q.get(P,b),$.listen(Object({BROWSER:!0}).PORT||3e3,()=>{console.log(`Server is listening on port ${Object({BROWSER:!0}).PORT||3e3}`)})}]);
//# sourceMappingURL=server.js.map