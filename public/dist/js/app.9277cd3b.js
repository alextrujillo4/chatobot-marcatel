(function(t){function e(e){for(var a,r,n=e[0],l=e[1],o=e[2],d=0,f=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,o||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(c.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},c=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var u=l;c.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1cdc":function(t,e,s){"use strict";var a=s("a73e"),i=s.n(a);i.a},"26e0":function(t,e,s){"use strict";var a=s("b54c"),i=s.n(a);i.a},2891:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("div",{staticClass:"row justify-content-center main"},[a("div",{staticClass:"col-md-8 no-padding"},[a("div",{staticClass:"bg",style:{"background-image":"url("+s("bc3a4")+")"}}),a("app-header"),a("app-chat")],1)])])},c=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-md-12 heading"},[t._v(t._s(t.welcomeTitle))])])])},n=[],l=s("a1bc"),o=s.n(l),u={data:function(){return{welcomeTitle:o.a.locale.strings.welcomeTitle}}},d=u,f=(s("26e0"),s("2877")),g=Object(f["a"])(d,r,n,!1,null,"2e3467ba",null),v=g.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-md-12 chat-window scrollbar scrollbar-chat"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 welcome pb-3"},[t._v(t._s(t.greeting))])]),t._l(t.chat,(function(e,a){return s("div",{key:a,staticClass:"row pt-2",attrs:{id:"top"+e.nid}},[s("div",{staticClass:"col-md-12"},[e.question?s("div",{staticClass:"row"},[s("div",{staticClass:"col mb-2 text-left d-flex justify-content-end"},[s("div",{staticClass:"question"},[t._v(t._s(e.question))])])]):t._e(),Object.keys(e.answer).length>1?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9 text-left"},[t._l(e.answer.items,(function(e,a){return s("div",{key:a,staticClass:"row pb-2"},[e.simpleResponse?s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"answerText"},[t._v(t._s(e.simpleResponse.textToSpeech))])]):t._e(),e.basicCard?s("div",{staticClass:"col-md-12"},[s("chat-basic-card",{attrs:{basicCard:e.basicCard}})],1):t._e(),e.listSelect?s("div",{staticClass:"col-md-12"},[s("chat-list-select",{attrs:{listSelect:e.listSelect}})],1):t._e(),e.carouselSelect?s("div",{staticClass:"col-md-12"},[s("chat-carousel-select",{attrs:{carouselSelect:e.carouselSelect}})],1):t._e(),e.image?s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[e.image.imageUri?s("div",{staticClass:"view overlay"},[s("img",{staticClass:"card-img-top image-only",attrs:{src:e.image.imageUri}}),s("div",{staticClass:"mask rgba-white-slight"})]):t._e()])]):t._e(),"linkOutSuggestion"==e.message?s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"suggestions link"},[e.linkOutSuggestion?s("div",[s("a",{attrs:{href:e.linkOutSuggestion.uri,target:"_blank"}},[t._v(" "+t._s(e.linkOutSuggestion.destinationName)+" "),s("i",{staticClass:"fas fa-external-link-alt",staticStyle:{"margin-left":"3px"}})])]):t._e()])]):t._e()])})),e.answer.suggestions?s("div",{staticClass:"col-md-12"},t._l(e.answer.suggestions,(function(e,a){return s("div",{key:a,staticClass:"suggestions",on:{click:function(s){return t.clickSubmit(e.title)}}},[e.title?s("div",[t._v(t._s(e.title))]):t._e()])})),0):t._e()],2)]):s("div",{staticClass:"row"},[t._m(0,!0)])])])})),s("div",{attrs:{id:"bottom"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 time-date"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("p",{staticClass:"time"},[t._v(" "+t._s(t.time)+" "),s("br")]),s("p",{staticClass:"date"},[t._v(t._s(t.date))])]),t._m(1)])])])],2)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10 col-sm-10 col-10 search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:t.config.locale.strings.queryTitle,disabled:!!t.queryFlag,id:"queryinput",autofocus:""},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},input:function(e){e.target.composing||(t.query=e.target.value)}}})]),s("div",{staticClass:"col-md-2 col-sm-2 col-2 text-center"},[s("button",{staticClass:"sendBtn btn btn-primary",attrs:{type:"button",disabled:""==t.query},on:{click:t.submit}},[s("i",{staticClass:"send fas fa-arrow-right"})])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col md-8 text-left"},[a("div",{staticClass:"loader"},[a("img",{attrs:{src:s("c608")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6"},[s("p",{staticClass:"copyright"},[s("a",{staticClass:"copyright",attrs:{href:"https://www.marcatel.com/",target:"_blank"}},[t._v("Link a otra cosa Marcatel o algo ")])]),s("p",{staticClass:"copyright-version"},[t._v("Basado en version 1.0 por "),s("a",{attrs:{href:"https://amangarg.firebaseapp.com",target:"_blank"}},[t._v("Aman1707")]),s("br")])])}],b=(s("fb6a"),s("0d03"),s("4795"),s("c64e"),s("bc3a")),h=s.n(b),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[t.basicCard.image?s("div",{staticClass:"view overlay"},[t.basicCard.image.url?s("img",{staticClass:"card-img-top",attrs:{src:t.basicCard.image.url,alt:t.basicCard.image.accessibilityText}}):t._e(),s("div",{staticClass:"mask rgba-white-slight"})]):t._e(),s("div",{staticClass:"card-body"},[t.basicCard.title?s("h4",{staticClass:"card-title"},[t._v(" "+t._s(t.basicCard.title)+" ")]):t._e(),t.basicCard.subtitle?s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.basicCard.subtitle)+" ")]):t._e(),t.basicCard.formattedText?s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.basicCard.formattedText)+" ")]):t._e(),t._l(t.basicCard.buttons,(function(e,a){return s("div",{key:a},[e.openUriAction?[s("div",{staticClass:"suggestions link"},[s("a",{attrs:{href:e.openUriAction.uri,target:"_blank"}},[t._v(" "+t._s(e.title)+" "),s("i",{staticClass:"fas fa-external-link-alt",staticStyle:{"margin-left":"3px"}})])])]:[e.title?s("div",{staticClass:"suggestions",on:{click:function(s){return t.clickSubmit(e.title)}}},[t._v(t._s(e.title))]):t._e()]],2)}))],2)])},_=[],y={props:["basicCard"]},w=y,k=(s("dd26"),Object(f["a"])(w,C,_,!1,null,"fac882ee",null)),x=k.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t.listSelect.title?s("h4",{staticClass:"card-title"},[t._v(" "+t._s(t.listSelect.title)+" ")]):t._e(),t.listSelect.subtitle?s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.listSelect.subtitle)+" ")]):t._e(),t.listSelect.items.length>1?[s("ul",{staticClass:"list-group"},t._l(t.listSelect.items,(function(e,a){return s("li",{key:a,staticClass:"list-group-item flex-column align-items-start",on:{click:function(s){return t.clickSubmit(e.title)}}},[s("div",{staticClass:"row"},[""!=e.image.imageUri?[s("div",{staticClass:"col-md-9"},[e.title?s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",{staticClass:"h5 mb-0"},[t._v(" "+t._s(e.title))])]):t._e(),e.description?s("p",{staticClass:"mt-2 mb-0"},[t._v(" "+t._s(e.description)+" ")]):t._e()]),s("div",{staticClass:"col-md-3"},[s("img",{staticClass:"img-fluid rounded",attrs:{src:e.image.imageUri}})])]:[s("div",{staticClass:"col-md-12"},[e.title?s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",{staticClass:"h5 mb-0"},[t._v(" "+t._s(e.title)+" ")])]):t._e(),e.description?s("p",{staticClass:"mt-2 mb-0"},[t._v(" "+t._s(e.description)+" ")]):t._e()])]],2)])})),0)]:t._e()],2)])},q=[],O={props:["listSelect"]},j=O,T=(s("1cdc"),Object(f["a"])(j,S,q,!1,null,"38c412b0",null)),P=T.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carousel-cards","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"},[t._l(t.carouselSelect.items,(function(t){return[s("li",{key:t.info.key,class:{active:1==t.info.key},attrs:{"data-target":"#carousel-cards","data-slide-to":t.info.key}})]}))],2),s("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},[t._l(t.carouselSelect.items,(function(e){return[s("div",{key:e.info.key,staticClass:"carousel-item",class:{active:1==e.info.key}},[s("div",{staticClass:"view"},[s("img",{staticClass:"d-block w-100",attrs:{src:e.image.imageUri}}),s("div",{staticClass:"mask rgba-black-light"})]),s("div",{staticClass:"carousel-caption"},[e.title?s("h3",{staticClass:"h3-responsive"},[t._v(" "+t._s(e.title)+" ")]):t._e(),e.description?s("p",[t._v(t._s(e.description))]):t._e()])])]}))],2),t._m(0),t._m(1)])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carousel-cards",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel-cards",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])}],M={props:["carouselSelect"]},D=M,U=(s("cc55"),Object(f["a"])(D,E,B,!1,null,"387c120d",null)),z=U.exports,A=o.a.locale.settings.recognitionLang,F=o.a.app.dialogflowUrl,I=(o.a.Dialogflow.agent,{components:{chatBasicCard:x,chatListSelect:P,chatCarouselSelect:z},data:function(){return{config:o.a,chat:[],query:"",time:"0",date:"0",week:["Dom","Lun","Mar","Mier","Jue","Vie","Sab"],greeting:"",id:1,queryFlag:!1,accessToken:""}},created:function(){},methods:{submit:function(){var t=this;if(t.query){setTimeout((function(){document.querySelector("#bottom").scrollIntoView({behavior:"smooth"})}),2);var e={};e.question=t.query,e.nid=t.id,e.answer={},t.chat.push(e),t.queryFlag=!0,h()({method:"post",url:F+"/12345678:detectIntent",headers:{authorization:"Bearer ".concat(this.accessToken)},data:{query_input:{text:{text:t.query,language_code:A}}}}).then((function(e){e=e.data,console.log(e.queryResult.webhookPayload.google.richResponse),t.chat[t.id-1].answer=e.queryResult.webhookPayload.google.richResponse,t.scroll(),t.id++,t.query="",t.queryFlag=!1,document.getElementById("queryinput").focus(),$("#queryinput").focus()}))["catch"]((function(e){t.query="",t.queryFlag=!1,document.getElementById("queryinput").focus(),$("#queryinput").focus()}))}},clickSubmit:function(t){var e=this;e.query=t,e.submit()},scroll:function(){var t=this,e="#top"+t.id;setTimeout((function(){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}),2)},updateTime:function(){var t=new Date,e=t.getHours(),s=e>=12?"PM":"AM";e%=12,e=e||12,this.time=this.zeroPadding(e,2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2)+" "+s,this.date=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+this.week[t.getDay()]},zeroPadding:function(t,e){for(var s="",a=0;a<e;a++)s+="0";return(s+t).slice(-e)}},mounted:function(){var t=this;t.updateTime(),setInterval((function(){t.updateTime()}),1e3);var e=(new Date).getHours();t.greeting=e<12&&e>=0?"Buenos Días":e>=16?"Buenas Noches":e>=12?"Buenas Tardes":"Hola!"}}),N=I,L=(s("c9b6"),Object(f["a"])(N,p,m,!1,null,"7a40cfb6",null)),R=L.exports,H={components:{appHeader:v,appChat:R}},J=H,V=(s("5c0b"),Object(f["a"])(J,i,c,!1,null,null,null)),Y=V.exports,G=s("9483");Object(G["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Y)}}).$mount("#app")},"579d":function(t,e,s){},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"9c0c":function(t,e,s){},a1bc:function(t,e){t.exports={Environment:{Debug:!1,Port:1707},Dialogflow:{agent:"marcatel-bot"},app:{muted:!0,googleIt:!1,dialogflowUrl:"https://dialogflow.googleapis.com/v2/projects/marcatel-bot/agent/sessions"},locale:{strings:{welcomeTitle:"Chatea conmigo",author:"",queryTitle:"Pregunta algo...",voiceTitle:"Adelante, te escucho..."},settings:{speechLang:"es-ES",recognitionLang:"es-ES"}},token:""}},a73e:function(t,e,s){},b54c:function(t,e,s){},bc3a4:function(t,e,s){t.exports=s.p+"img/chatBackground.944917e2.svg"},c608:function(t,e,s){t.exports=s.p+"img/typing.430e0fb8.svg"},c9b6:function(t,e,s){"use strict";var a=s("579d"),i=s.n(a);i.a},cbcf:function(t,e,s){},cc55:function(t,e,s){"use strict";var a=s("2891"),i=s.n(a);i.a},dd26:function(t,e,s){"use strict";var a=s("cbcf"),i=s.n(a);i.a}});