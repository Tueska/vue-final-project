(function(e){function t(t){for(var o,n,l=t[0],i=t[1],s=t[2],b=0,u=[];b<l.length;b++)n=l[b],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(u.length)u.shift()();return a.push.apply(a,s||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],o=!0,l=1;l<c.length;l++){var i=c[l];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=n(n.s=c[0]))}return e}var o={},r={app:0},a=[];function n(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=o,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"0a69":function(e,t,c){},7064:function(e,t,c){"use strict";c("fc21")},7494:function(e,t,c){},"77d9":function(e,t,c){e.exports=c.p+"img/controller.43bd9dcb.svg"},"80ab":function(e,t,c){"use strict";c("b5bf")},"98a4":function(e,t,c){"use strict";c("7494")},"9e69":function(e,t,c){"use strict";c("c615")},ac6d:function(e,t,c){e.exports=c.p+"img/chevron.6fa1c62d.svg"},b5bf:function(e,t,c){},bd1d:function(e,t,c){"use strict";c("0a69")},bf99:function(e,t,c){e.exports=c.p+"img/magnifying-glass.9e088f9b.svg"},c615:function(e,t,c){},cd49:function(e,t,c){"use strict";c.r(t);var o=c("7a23");const r={key:0,id:"errormessage"},a=Object(o["createTextVNode"])(" Error"),n=Object(o["createVNode"])("br",null,null,-1),l=Object(o["createTextVNode"])("API not reachable "),i={key:1,class:"grid"};function s(e,t,c,s,d,b){const u=Object(o["resolveComponent"])("Navbar"),p=Object(o["resolveComponent"])("GameInfo"),j=Object(o["resolveComponent"])("Game");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(u,{onGameListUpdateEvent:e.gameListUpdateEvent},null,8,["onGameListUpdateEvent"]),"Error"==this.gameList?(Object(o["openBlock"])(),Object(o["createBlock"])("h1",r,[a,n,l])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",{class:{hideInfoBox:!e.infoBoxVisible},id:"gameInfoBox",onClick:t[2]||(t[2]=t=>e.toggleInfobox())},[Object(o["createVNode"])(p,{game:this.gameID,onClick:t[1]||(t[1]=Object(o["withModifiers"])(()=>{},["stop"]))},null,8,["game"])],2),"Error"!=e.gameList?(Object(o["openBlock"])(),Object(o["createBlock"])("div",i,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.gameList,t=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t.id},[Object(o["createVNode"])(j,{class:"grid-item",game:t,onClick:c=>e.getGameInfo(t.id)},null,8,["game","onClick"])]))),128))])):Object(o["createCommentVNode"])("",!0)],64)}var d=c("9ab4"),b=c("ce1f");const u=Object(o["withScopeId"])("data-v-3e9376a6");Object(o["pushScopeId"])("data-v-3e9376a6");const p={id:"game"},j={id:"overlay"},O={class:"text"},m={id:"image"},f={id:"description"},g={id:"genre"};Object(o["popScopeId"])();const h=u((e,t,c,r,a,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",p,[Object(o["createVNode"])("a",null,[Object(o["createVNode"])("img",{src:e.game.thumbnail,alt:e.game.short_description},null,8,["src","alt"]),Object(o["createVNode"])("div",j,[Object(o["createVNode"])("div",O,[Object(o["createVNode"])("h2",m,Object(o["toDisplayString"])(e.game.title),1),Object(o["createVNode"])("p",f,Object(o["toDisplayString"])(e.game.short_description),1),Object(o["createVNode"])("p",g,Object(o["toDisplayString"])(e.game.genre),1)])])])])));var V=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(d["b"])(t,e),t=Object(d["a"])([Object(b["a"])({props:{game:Object}})],t),t}(b["b"]),N=V;c("80ab");N.render=h,N.__scopeId="data-v-3e9376a6";var y=N;const v={key:0,ref:"top",id:"gameInfo"},k=Object(o["createVNode"])("br",null,null,-1),I=Object(o["createVNode"])("br",null,null,-1),x=Object(o["createVNode"])("br",null,null,-1),B=Object(o["createVNode"])("br",null,null,-1),w=Object(o["createVNode"])("br",null,null,-1),D=Object(o["createVNode"])("b",{class:"rose"},"Platform:",-1),S=Object(o["createTextVNode"])(),L=Object(o["createVNode"])("br",null,null,-1),T=Object(o["createVNode"])("b",{class:"rose"},"Genre:",-1),_=Object(o["createTextVNode"])(),C=Object(o["createVNode"])("br",null,null,-1),U=Object(o["createVNode"])("b",{class:"rose"},"Release Date:",-1),G=Object(o["createTextVNode"])(),P=Object(o["createVNode"])("br",null,null,-1),q=Object(o["createVNode"])("b",{class:"rose"},"Developer:",-1),E=Object(o["createTextVNode"])(),M=Object(o["createVNode"])("br",null,null,-1),R=Object(o["createVNode"])("b",{class:"rose"},"Publisher:",-1),A=Object(o["createTextVNode"])(),F=Object(o["createVNode"])("br",null,null,-1),$=Object(o["createVNode"])("h2",{class:"rose"},"Description",-1),W=Object(o["createVNode"])("h2",{class:"rose"},"Minimum System requirements:",-1),J=Object(o["createVNode"])("br",null,null,-1),z={key:0},H=Object(o["createVNode"])("td",{class:"rose"},"Processor:",-1),K=Object(o["createVNode"])("td",{class:"rose"},"Memory:",-1),Q=Object(o["createVNode"])("td",{class:"rose"},"Graphics:",-1),X=Object(o["createVNode"])("td",{class:"rose"},"Storage:",-1),Y={key:1};function Z(e,t,c,r,a,n){const l=Object(o["resolveComponent"])("Gallery");return"Error"!=e.gameInfo?(Object(o["openBlock"])(),Object(o["createBlock"])("div",v,[Object(o["createVNode"])("table",null,[Object(o["createVNode"])("td",null,[Object(o["createVNode"])("img",{src:this.gameInfo.thumbnail,alt:this.gameInfo.title+" Thumbnail"},null,8,["src","alt"]),k,Object(o["createVNode"])("h1",null,Object(o["toDisplayString"])(this.gameInfo.title),1),I,Object(o["createVNode"])("a",{href:e.gameInfo.game_url,target:"_blank",class:"button"},"Play Game",8,["href"]),x,B,w,Object(o["createVNode"])("p",null,[D,S,L,Object(o["createTextVNode"])(Object(o["toDisplayString"])(this.gameInfo.platform),1)]),Object(o["createVNode"])("p",null,[T,_,C,Object(o["createTextVNode"])(Object(o["toDisplayString"])(this.gameInfo.genre),1)]),Object(o["createVNode"])("p",null,[U,G,P,Object(o["createTextVNode"])(Object(o["toDisplayString"])(this.gameInfo.release_date),1)]),Object(o["createVNode"])("p",null,[q,E,M,Object(o["createTextVNode"])(Object(o["toDisplayString"])(this.gameInfo.developer),1)]),Object(o["createVNode"])("p",null,[R,A,F,Object(o["createTextVNode"])(Object(o["toDisplayString"])(this.gameInfo.publisher),1)])]),(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.description),null,{default:Object(o["withCtx"])(()=>[$,Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(this.gameInfo.description),1),W,J,"web browser"!=e.gameInfo.platform.toLowerCase()||null!=e.gameInfo.minimum_system_requirements?(Object(o["openBlock"])(),Object(o["createBlock"])("table",z,[Object(o["createVNode"])("tr",null,[H,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.gameInfo.minimum_system_requirements.processor),1)]),Object(o["createVNode"])("tr",null,[K,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.gameInfo.minimum_system_requirements.memory),1)]),Object(o["createVNode"])("tr",null,[Q,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.gameInfo.minimum_system_requirements.graphics),1)]),Object(o["createVNode"])("tr",null,[X,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.gameInfo.minimum_system_requirements.storage),1)])])):(Object(o["openBlock"])(),Object(o["createBlock"])("p",Y,"Unknown / Web Browser Game"))]),_:1}))]),Object(o["createVNode"])(l,{screenshots:this.gameInfo.screenshots},null,8,["screenshots"])],512)):Object(o["createCommentVNode"])("",!0)}var ee=c("bc3a"),te=c.n(ee);const ce={key:0,class:"images"};function oe(e,t,c,r,a,n){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[this.screenshots.length>0?(Object(o["openBlock"])(),Object(o["createBlock"])("div",ce,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(this.screenshots,(t,c)=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:["image",{imageHighlight:c==this.imageID}],key:t},[Object(o["createVNode"])("img",{src:t.image,onClick:t=>e.selectImage(c)},null,8,["src","onClick"])],2))),128))])):Object(o["createCommentVNode"])("",!0),this.screenshots.length>0?(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:1,ref:"imageLarge",id:"imageLarge",src:this.screenshots[this.imageID].image},null,8,["src"])):Object(o["createCommentVNode"])("",!0)],64)}var re=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.imageID=0,t}return Object(d["b"])(t,e),t.prototype.selectImage=function(e){this.imageID=e,this.$refs.imageLarge.scrollIntoView()},t=Object(d["a"])([Object(b["a"])({props:{screenshots:Object}})],t),t}(b["b"]),ae=re;c("bd1d");ae.render=oe;var ne=ae,le=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.game=1,t.gameInfo="Error",t.imageID=0,t.description="td",t}return Object(d["b"])(t,e),t=Object(d["a"])([Object(b["a"])({components:{Gallery:ne},props:{game:Number},watch:{$windowWidth:function(e){this.description=e<=650?"tr":"td"},game:function(e){var t=this;this.imageID=0,te()({method:"GET",url:"https://free-to-play-games-database.p.rapidapi.com/api/game",headers:{"x-rapidapi-key":"d19335f5f2mshd18d3d2f7703cebp124fe3jsn36f8a0db2672","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"},params:{id:e}}).then((function(e){var c;t.gameInfo=e.data,null===(c=t.$refs.top)||void 0===c||c.scrollTo(0,0)})).catch((function(){t.gameInfo="Error"}))}}})],t),t}(b["b"]),ie=le;c("9e69");ie.render=Z;var se=ie,de=c("bf99"),be=c.n(de),ue=c("77d9"),pe=c.n(ue),je=c("ac6d"),Oe=c.n(je);const me=Object(o["withScopeId"])("data-v-2ee2c886");Object(o["pushScopeId"])("data-v-2ee2c886");const fe={id:"navbar"},ge={id:"flexbox"},he={id:"search"},Ve=Object(o["createVNode"])("img",{src:be.a},null,-1),Ne={id:"logo"},ye={id:"drop"},ve=Object(o["createVNode"])("button",{class:"dropButton"}," Sort by ",-1),ke={class:"dropdown-content"},Ie=Object(o["createVNode"])("span",null,"Relevance",-1),xe=Object(o["createVNode"])("br",null,null,-1),Be=Object(o["createVNode"])("span",null,"Release date",-1),we=Object(o["createVNode"])("br",null,null,-1),De=Object(o["createVNode"])("span",null,"Popularity",-1),Se=Object(o["createVNode"])("br",null,null,-1),Le=Object(o["createVNode"])("span",null,"Alphabetical",-1),Te=Object(o["createVNode"])("br",null,null,-1),_e=Object(o["createVNode"])("img",{src:Oe.a},null,-1),Ce=Object(o["createVNode"])("button",{class:"dropButton"}," Platform ",-1),Ue={class:"dropdown-content"},Ge=Object(o["createVNode"])("span",null,"All",-1),Pe=Object(o["createVNode"])("br",null,null,-1),qe=Object(o["createVNode"])("span",null,"PC",-1),Ee=Object(o["createVNode"])("br",null,null,-1),Me=Object(o["createVNode"])("span",null,"Browser",-1),Re=Object(o["createVNode"])("br",null,null,-1),Ae=Object(o["createVNode"])("img",{src:Oe.a},null,-1);Object(o["popScopeId"])();const Fe=me((e,t,c,r,a,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",fe,[Object(o["createVNode"])("div",ge,[Object(o["createVNode"])("div",he,[Ve,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"searchInput",type:"text",placeholder:"Search games...","onUpdate:modelValue":t[1]||(t[1]=t=>e.query=t),onChange:t[2]||(t[2]=(...t)=>e.search&&e.search(...t))},null,544),[[o["vModelText"],e.query]])]),Object(o["createVNode"])("div",Ne,[Object(o["createVNode"])("img",{src:pe.a,onClick:t[3]||(t[3]=(...t)=>e.scrollToTop&&e.scrollToTop(...t))})]),Object(o["createVNode"])("div",ye,[Object(o["createVNode"])("div",{class:"dropdown",onChange:t[8]||(t[8]=(...t)=>e.checkboxUpdate&&e.checkboxUpdate(...t))},[ve,Object(o["createVNode"])("div",ke,[Object(o["createVNode"])("label",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{checked:"true",type:"radio",value:"relevance","onUpdate:modelValue":t[4]||(t[4]=t=>e.sortby=t)},null,512),[[o["vModelRadio"],e.sortby]]),Ie]),xe,Object(o["createVNode"])("label",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"radio",value:"release-date","onUpdate:modelValue":t[5]||(t[5]=t=>e.sortby=t)},null,512),[[o["vModelRadio"],e.sortby]]),Be]),we,Object(o["createVNode"])("label",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"radio",value:"popularity","onUpdate:modelValue":t[6]||(t[6]=t=>e.sortby=t)},null,512),[[o["vModelRadio"],e.sortby]]),De]),Se,Object(o["createVNode"])("label",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"radio",value:"alphabetical","onUpdate:modelValue":t[7]||(t[7]=t=>e.sortby=t)},null,512),[[o["vModelRadio"],e.sortby]]),Le]),Te]),_e],32),Object(o["createVNode"])("div",{class:"dropdown",onChange:t[12]||(t[12]=(...t)=>e.checkboxUpdate&&e.checkboxUpdate(...t))},[Ce,Object(o["createVNode"])("div",Ue,[Object(o["createVNode"])("label",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{checked:"true",type:"radio",value:"all","onUpdate:modelValue":t[9]||(t[9]=t=>e.platform=t)},null,512),[[o["vModelRadio"],e.platform]]),Ge]),Pe,Object(o["createVNode"])("label",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"radio",value:"pc","onUpdate:modelValue":t[10]||(t[10]=t=>e.platform=t)},null,512),[[o["vModelRadio"],e.platform]]),qe]),Ee,Object(o["createVNode"])("label",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"radio",value:"browser","onUpdate:modelValue":t[11]||(t[11]=t=>e.platform=t)},null,512),[[o["vModelRadio"],e.platform]]),Me]),Re]),Ae],32)])])])));var $e=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.gameList=[],t}return Object(d["b"])(t,e),t.prototype.created=function(){this.sendRequest()},t.prototype.sendRequest=function(){var e=this;te()({method:"GET",url:"https://free-to-play-games-database.p.rapidapi.com/api/games",headers:{"x-rapidapi-key":"d19335f5f2mshd18d3d2f7703cebp124fe3jsn36f8a0db2672","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"},params:{"sort-by":this.querySortBy,platform:this.queryPlatform}}).then((function(t){e.allGames=t.data,e.gameList=t.data})).catch((function(){e.gameList="Error"}))},t.prototype.scrollToTop=function(){window.scrollTo(0,0)},t.prototype.checkboxUpdate=function(){this.querySortBy=this.sortby,this.queryPlatform=this.platform,this.sendRequest()},t.prototype.search=function(){this.filterList(this.query)},t.prototype.filterList=function(e){var t=this.allGames,c=t.filter((function(t){return t.title.toLowerCase().match(e.toLowerCase())}));this.gameList=c},t=Object(d["a"])([Object(b["a"])({data:function(){return{query:"",platform:"all",sortby:"relevance"}},watch:{gameList:function(e){this.gameList=e,this.$emit("gameListUpdateEvent",e)}}})],t),t}(b["b"]),We=$e;c("98a4");We.render=Fe,We.__scopeId="data-v-2ee2c886";var Je=We,ze=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.gameList=[],t.gameInfo="Error",t.infoBoxVisible=!1,t.gameID=0,t}return Object(d["b"])(t,e),t.prototype.gameListUpdateEvent=function(e){this.gameList=e},t.prototype.toggleInfobox=function(){this.infoBoxVisible=!this.infoBoxVisible},t.prototype.getGameInfo=function(e){this.gameID=e,this.toggleInfobox()},t=Object(d["a"])([Object(b["a"])({components:{Game:y,GameInfo:se,Navbar:Je}})],t),t}(b["b"]),He=ze;c("7064");He.render=s;var Ke=He,Qe=c("9149"),Xe=Object(o["createApp"])(Ke);Xe.use(Qe["VueWindowSizePlugin"]),Xe.mount("#app")},fc21:function(e,t,c){}});
//# sourceMappingURL=app.09cddbb9.js.map