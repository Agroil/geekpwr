!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{QLEG:function(e,o,i){"use strict";i.r(o),i.d(o,"BlogModule",function(){return I});var a=i("ofXK"),c=i("Z48m"),r=i("Od8d"),g=i("fXoL"),l=i("tyNb"),s=i("YYwF"),b=function(t){return["/article",t]},f=function(t){return{pageTitle:t}},P=function(t){return{active:t}};function O(t,n){if(1&t){var e=g.Qb();g.Pb(0,"a",13),g.Wb("touchstart",function(){return g.pc(e),g.ac().$implicit.active=1})("touchend",function(){return g.pc(e),g.ac().$implicit.active=0})("mouseleave",function(){return g.pc(e),g.ac().$implicit.active=0}),g.Lb(1,"div",14),g.Pb(2,"div",15),g.Pb(3,"h2"),g.xc(4),g.Ob(),g.Pb(5,"p"),g.xc(6),g.Ob(),g.Pb(7,"p"),g.Pb(8,"span",16),g.xc(9),g.Ob(),g.Pb(10,"span",17),g.xc(11),g.Ob(),g.Ob(),g.Ob(),g.Ob()}if(2&t){var o=g.ac().$implicit;g.gc("routerLink",g.jc(9,b,o.urlTitle))("state",g.jc(11,f,o.pageTitle))("ngClass",g.jc(13,P,o.active)),g.yb(1),g.uc("background-image","url("+o.imageUrl+")"),g.yb(3),g.yc(o.title),g.yb(2),g.yc(o.description),g.yb(3),g.yc(o.date),g.yb(2),g.yc(o.category)}}function h(t,n){if(1&t&&(g.Lb(0,"iframe",18),g.bc(1,"safe")),2&t){var e=g.ac().$implicit;g.gc("src",g.dc(1,1,e.videoUrl,"resourceUrl"),g.rc)}}var d=function(){return[3,4]},p=function(t,n,e,o,i){return{"col-lg-4 col-xl-4":t,"col-lg-6 col-xl-6":n,"col-12":e,"my-4":o,"mt-4":i}};function C(t,n){if(1&t&&(g.Pb(0,"div",10),g.wc(1,O,12,15,"a",11),g.wc(2,h,2,4,"iframe",12),g.Ob()),2&t){var e=n.$implicit,o=n.index;g.gc("ngClass",g.lc(4,p,!e.videoUrl&&(o<3||4<o),!e.videoUrl&&g.ic(3,d).includes(o),e.videoUrl,!e.videoUrl,e.videoUrl)),g.yb(1),g.gc("ngIf",!e.videoUrl),g.yb(1),g.gc("ngIf",e.videoUrl)}}function M(t,n){if(1&t&&(g.Pb(0,"div",8),g.wc(1,C,3,10,"div",9),g.Ob()),2&t){var e=g.ac().$implicit;g.gc("@fadeAnimation",void 0),g.yb(1),g.gc("ngForOf",e)}}function _(t,n){if(1&t){var e=g.Qb();g.Pb(0,"a",23),g.Wb("click",function(t){g.pc(e);var n=g.ac(3);return n.setPageArticles(t,n.currentPage-1)}),g.Pb(1,"span",24),g.Lb(2,"span",25),g.Ob(),g.Pb(3,"span",26),g.Pb(4,"span",27),g.xc(5," Previous "),g.Ob(),g.Pb(6,"span",28),g.Lb(7,"span",25),g.Ob(),g.Ob(),g.Ob()}}function m(t,n){if(1&t){var e=g.Qb();g.Pb(0,"a",23),g.Wb("click",function(t){g.pc(e);var n=g.ac(3);return n.setPageArticles(t,n.currentPage+1)}),g.Pb(1,"span",29),g.Lb(2,"span",25),g.Ob(),g.Pb(3,"span",26),g.Pb(4,"span",27),g.xc(5," Next "),g.Ob(),g.Pb(6,"span",30),g.Lb(7,"span",25),g.Ob(),g.Ob(),g.Ob()}}function u(t,n){if(1&t&&(g.Pb(0,"div",19),g.Pb(1,"div",20),g.wc(2,_,8,0,"a",21),g.Ob(),g.Pb(3,"div",22),g.wc(4,m,8,0,"a",21),g.Ob(),g.Ob()),2&t){var e=g.ac().index,o=g.ac();g.gc("@fadeAnimation",void 0),g.yb(2),g.gc("ngIf",e>0),g.yb(2),g.gc("ngIf",e<o.articles.length-1)}}function w(t,n){if(1&t&&(g.Nb(0),g.wc(1,M,2,2,"div",6),g.wc(2,u,5,3,"div",7),g.Mb()),2&t){var e=n.index,o=g.ac();g.yb(1),g.gc("ngIf",o.currentPage===e),g.yb(1),g.gc("ngIf",o.currentPage===e)}}var v,x,y=((v=function(){function e(n){t(this,e),this.articlesService=n}var o,i,a;return o=e,(i=[{key:"ngOnInit",value:function(){this.currentPage=this.articlesService.currentPage,this.articles=this.articlesService.getData()}},{key:"setPageArticles",value:function(t,n){t.preventDefault(),this.currentPage=n,this.articlesService.currentPage=n,window.scrollTo({top:200,behavior:"smooth"})}}])&&n(o.prototype,i),a&&n(o,a),e}()).\u0275fac=function(t){return new(t||v)(g.Kb(c.a))},v.\u0275cmp=g.Eb({type:v,selectors:[["app-blog"]],decls:11,vars:1,consts:[[1,"blog-header-bg"],[1,"container"],[1,"title"],[1,"blog-content","container"],[1,"title","my-5"],[4,"ngFor","ngForOf"],["class","row mt-5",4,"ngIf"],["class","row my-5 py-5",4,"ngIf"],[1,"row","mt-5"],["class","col-xs-12 col-sm-12 col-md-12",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-xs-12","col-sm-12","col-md-12",3,"ngClass"],["class","article-body-item",3,"routerLink","state","ngClass","touchstart","touchend","mouseleave",4,"ngIf"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",3,"src",4,"ngIf"],[1,"article-body-item",3,"routerLink","state","ngClass","touchstart","touchend","mouseleave"],[1,"article-body-item-preview"],[1,"article-body-item-info","p-5"],[1,"pull-left"],[1,"pull-right"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",3,"src"],[1,"row","my-5","py-5"],[1,"col-6","text-left"],["class","animated-arrow",3,"click",4,"ngIf"],[1,"col-6","text-right"],[1,"animated-arrow",3,"click"],[1,"the-arrow","left","rotate-180"],[1,"shaft"],[1,"main"],[1,"text"],[1,"the-arrow","right","rotate-180"],[1,"the-arrow","left"],[1,"the-arrow","right"]],template:function(t,n){1&t&&(g.Pb(0,"article"),g.Pb(1,"section",0),g.Pb(2,"ul",1),g.Pb(3,"li",2),g.xc(4,"Place, where the"),g.Ob(),g.Pb(5,"li",2),g.xc(6,"stories live"),g.Ob(),g.Ob(),g.Ob(),g.Pb(7,"section",3),g.Pb(8,"h1",4),g.xc(9,"Articles"),g.Ob(),g.wc(10,w,3,2,"ng-container",5),g.Ob(),g.Ob()),2&t&&(g.yb(10),g.gc("ngForOf",n.articles))},directives:[a.k,a.l,a.j,l.i],pipes:[s.a],styles:['.blog-header-bg[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(posts-bg.e4f178b152f291c945b2.png);background-position:center 50%;background-repeat:no-repeat;background-size:cover;width:100%;padding-top:12%;padding-bottom:9%;position:relative}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style:none;color:#fff}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:72px;font-weight:bolder;line-height:1}.blog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px;font-weight:bolder;color:#666}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]{height:400px;width:100%;display:block;background-color:#fff}.blog-content[_ngcontent-%COMP%]   .article-body-item-preview[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:48%;transition:height .5s ease;margin-bottom:-15px;transform:translateZ(0);position:relative;z-index:1}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]{position:relative;margin-top:15px;padding:12px;height:52%;transition:height .5s ease;background-color:#fff}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:10px;font-weight:bolder;color:#1a1a1a}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#1a1a1a;line-height:1.2}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{position:absolute;bottom:.6rem;right:3rem;left:3rem}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#919191}.blog-content[_ngcontent-%COMP%]   .article-body-item.active[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover{text-decoration:none;cursor:pointer}.blog-content[_ngcontent-%COMP%]   .article-body-item.active[_ngcontent-%COMP%]   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-preview[_ngcontent-%COMP%]{height:43%;-webkit-animation:cover 2s infinite alternate;animation:cover 2s infinite alternate}.blog-content[_ngcontent-%COMP%]   .article-body-item.active[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-info[_ngcontent-%COMP%]{height:57%;transition:height .5s ease}.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:620px}.pull-left[_ngcontent-%COMP%]{float:left}.pull-right[_ngcontent-%COMP%]{float:right}.the-arrow[_ngcontent-%COMP%]{width:64px;transition:all .2s}.the-arrow.left[_ngcontent-%COMP%]{position:absolute;top:60%;left:0}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:0;background-color:#999}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(0)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{width:64px;transition-delay:.2s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:8px;transition-delay:.3s;transition:all .5s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(40deg)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform:rotate(-40deg)}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{background-color:#999;display:block;height:1px;position:relative;transition:all .2s;transition-delay:0;will-change:transform}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#999;content:"";display:block;height:1px;position:absolute;top:0;right:0}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform-origin:top right}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform-origin:bottom right}.animated-arrow[_ngcontent-%COMP%]{display:inline-block;color:#999;font-size:1.25em;text-decoration:none;position:relative;cursor:pointer}.animated-arrow[_ngcontent-%COMP%]:hover{color:#eaeaea}.animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#eaeaea}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%]{display:flex;align-items:center}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]{margin:0 16px 0 0;line-height:1}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .the-arrow[_ngcontent-%COMP%]{position:relative}.rotate-180[_ngcontent-%COMP%]{transform:rotate(180deg)}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]{flex-direction:row-reverse}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0 0 0 16px}@media (max-width:760px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px}}@media (max-width:590px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:50px}}@media (max-width:460px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:34px}}@media (max-width:1200px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:540px}}@media (max-width:990px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:388px}}@media (max-width:768px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:296px}}@media (max-width:500px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:250px}}@media (max-width:360px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:185px}}'],data:{animation:r.a}}),v),k=i("+G0P"),z=[{path:"",component:y}],I=((x=function n(){t(this,n)}).\u0275mod=g.Ib({type:x}),x.\u0275inj=g.Hb({factory:function(t){return new(t||x)},imports:[[a.c,l.j.forChild(z),k.a]]}),x)}}])}();