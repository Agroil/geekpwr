(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{QLEG:function(t,n,e){"use strict";e.r(n),e.d(n,"BlogModule",function(){return y});var o=e("ofXK"),c=e("Z48m"),i=e("Od8d"),r=e("fXoL"),a=e("tyNb"),g=e("YYwF");const l=function(t){return["/article",t]},b=function(t){return{pageTitle:t}};function s(t,n){if(1&t&&(r.Pb(0,"a",13),r.Lb(1,"div",14),r.Pb(2,"div",15),r.Pb(3,"h2"),r.xc(4),r.Ob(),r.Pb(5,"p"),r.xc(6),r.Ob(),r.Pb(7,"p"),r.Pb(8,"span",16),r.xc(9),r.Ob(),r.Pb(10,"span",17),r.xc(11),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&t){const t=r.ac().$implicit;r.gc("routerLink",r.jc(8,l,t.urlTitle))("state",r.jc(10,b,t.pageTitle)),r.yb(1),r.uc("background-image","url("+t.imageUrl+")"),r.yb(3),r.yc(t.title),r.yb(2),r.yc(t.description),r.yb(3),r.yc(t.date),r.yb(2),r.yc(t.category)}}function P(t,n){if(1&t&&(r.Lb(0,"iframe",18),r.bc(1,"safe")),2&t){const t=r.ac().$implicit;r.gc("src",r.dc(1,1,t.videoUrl,"resourceUrl"),r.rc)}}const O=function(){return[3,4]},d=function(t,n,e,o,c){return{"col-lg-4 col-xl-4":t,"col-lg-6 col-xl-6":n,"col-12":e,"my-4":o,"mt-4":c}};function f(t,n){if(1&t&&(r.Pb(0,"div",10),r.wc(1,s,12,12,"a",11),r.wc(2,P,2,4,"iframe",12),r.Ob()),2&t){const t=n.$implicit,e=n.index;r.gc("ngClass",r.lc(4,d,!t.videoUrl&&(e<3||4<e),!t.videoUrl&&r.ic(3,O).includes(e),t.videoUrl,!t.videoUrl,t.videoUrl)),r.yb(1),r.gc("ngIf",!t.videoUrl),r.yb(1),r.gc("ngIf",t.videoUrl)}}function h(t,n){if(1&t&&(r.Pb(0,"div",8),r.wc(1,f,3,10,"div",9),r.Ob()),2&t){const t=r.ac().$implicit;r.gc("@fadeAnimation",void 0),r.yb(1),r.gc("ngForOf",t)}}function C(t,n){if(1&t){const t=r.Qb();r.Pb(0,"a",23),r.Wb("click",function(n){r.pc(t);const e=r.ac(3);return e.setPageArticles(n,e.currentPage-1)}),r.Pb(1,"span",24),r.Lb(2,"span",25),r.Ob(),r.Pb(3,"span",26),r.Pb(4,"span",27),r.xc(5," Previous "),r.Ob(),r.Pb(6,"span",28),r.Lb(7,"span",25),r.Ob(),r.Ob(),r.Ob()}}function M(t,n){if(1&t){const t=r.Qb();r.Pb(0,"a",23),r.Wb("click",function(n){r.pc(t);const e=r.ac(3);return e.setPageArticles(n,e.currentPage+1)}),r.Pb(1,"span",29),r.Lb(2,"span",25),r.Ob(),r.Pb(3,"span",26),r.Pb(4,"span",27),r.xc(5," Next "),r.Ob(),r.Pb(6,"span",30),r.Lb(7,"span",25),r.Ob(),r.Ob(),r.Ob()}}function _(t,n){if(1&t&&(r.Pb(0,"div",19),r.Pb(1,"div",20),r.wc(2,C,8,0,"a",21),r.Ob(),r.Pb(3,"div",22),r.wc(4,M,8,0,"a",21),r.Ob(),r.Ob()),2&t){const t=r.ac().index,n=r.ac();r.gc("@fadeAnimation",void 0),r.yb(2),r.gc("ngIf",t>0),r.yb(2),r.gc("ngIf",t<n.articles.length-1)}}function m(t,n){if(1&t&&(r.Nb(0),r.wc(1,h,2,2,"div",6),r.wc(2,_,5,3,"div",7),r.Mb()),2&t){const t=n.index,e=r.ac();r.yb(1),r.gc("ngIf",e.currentPage===t),r.yb(1),r.gc("ngIf",e.currentPage===t)}}let p=(()=>{class t{constructor(t){this.articlesService=t}ngOnInit(){this.currentPage=this.articlesService.currentPage,this.articles=this.articlesService.getData()}setPageArticles(t,n){t.preventDefault(),this.currentPage=n,this.articlesService.currentPage=n,window.scrollTo({top:200,behavior:"smooth"})}}return t.\u0275fac=function(n){return new(n||t)(r.Kb(c.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-blog"]],decls:11,vars:1,consts:[[1,"blog-header-bg"],[1,"container"],[1,"title"],[1,"blog-content","container"],[1,"title","my-5"],[4,"ngFor","ngForOf"],["class","row mt-5",4,"ngIf"],["class","row my-5 py-5",4,"ngIf"],[1,"row","mt-5"],["class","col-xs-12 col-sm-12 col-md-12",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-xs-12","col-sm-12","col-md-12",3,"ngClass"],["class","article-body-item",3,"routerLink","state",4,"ngIf"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",3,"src",4,"ngIf"],[1,"article-body-item",3,"routerLink","state"],[1,"article-body-item-preview"],[1,"article-body-item-info","p-5"],[1,"pull-left"],[1,"pull-right"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",3,"src"],[1,"row","my-5","py-5"],[1,"col-6","text-left"],["class","animated-arrow",3,"click",4,"ngIf"],[1,"col-6","text-right"],[1,"animated-arrow",3,"click"],[1,"the-arrow","left","rotate-180"],[1,"shaft"],[1,"main"],[1,"text"],[1,"the-arrow","right","rotate-180"],[1,"the-arrow","left"],[1,"the-arrow","right"]],template:function(t,n){1&t&&(r.Pb(0,"article"),r.Pb(1,"section",0),r.Pb(2,"ul",1),r.Pb(3,"li",2),r.xc(4,"Place, where the"),r.Ob(),r.Pb(5,"li",2),r.xc(6,"stories live"),r.Ob(),r.Ob(),r.Ob(),r.Pb(7,"section",3),r.Pb(8,"h1",4),r.xc(9,"Articles"),r.Ob(),r.wc(10,m,3,2,"ng-container",5),r.Ob(),r.Ob()),2&t&&(r.yb(10),r.gc("ngForOf",n.articles))},directives:[o.j,o.k,o.i,a.i],pipes:[g.a],styles:['.blog-header-bg[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(posts-bg.e4f178b152f291c945b2.png);background-position:center 50%;background-repeat:no-repeat;background-size:cover;width:100%;padding-top:12%;padding-bottom:9%;position:relative}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style:none;color:#fff}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:72px;font-weight:bolder;line-height:1}.blog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px;font-weight:bolder;color:#666}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]{height:400px;width:100%;display:block;background-color:#fff}.blog-content[_ngcontent-%COMP%]   .article-body-item-preview[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:48%;transition:height .5s ease;margin-bottom:-15px;transform:translateZ(0);position:relative;z-index:1}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]{position:relative;margin-top:15px;padding:12px;height:52%;transition:height .5s ease;background-color:#fff}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:10px;font-weight:bolder;color:#1a1a1a}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#1a1a1a;line-height:1.2}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{position:absolute;bottom:.6rem;right:3rem;left:3rem}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#919191}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active, .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus, .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover{text-decoration:none;cursor:pointer}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-preview[_ngcontent-%COMP%]{height:43%;-webkit-animation:cover 2s infinite alternate;animation:cover 2s infinite alternate}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-info[_ngcontent-%COMP%]{height:57%;transition:height .5s ease}@media (hover),(min--moz-device-pixel-ratio:0),(min-width:0\\0){.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active, .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus, .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:none}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-preview[_ngcontent-%COMP%]{height:43%;-webkit-animation:cover 2s infinite alternate;animation:cover 2s infinite alternate}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-info[_ngcontent-%COMP%]{height:57%;transition:height .5s ease}}.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:620px}.pull-left[_ngcontent-%COMP%]{float:left}.pull-right[_ngcontent-%COMP%]{float:right}.the-arrow[_ngcontent-%COMP%]{width:64px;transition:all .2s}.the-arrow.left[_ngcontent-%COMP%]{position:absolute;top:60%;left:0}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:0;background-color:#999}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(0)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{width:64px;transition-delay:.2s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:8px;transition-delay:.3s;transition:all .5s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(40deg)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform:rotate(-40deg)}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{background-color:#999;display:block;height:1px;position:relative;transition:all .2s;transition-delay:0;will-change:transform}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#999;content:"";display:block;height:1px;position:absolute;top:0;right:0}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform-origin:top right}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform-origin:bottom right}.animated-arrow[_ngcontent-%COMP%]{display:inline-block;color:#999;font-size:1.25em;text-decoration:none;position:relative;cursor:pointer}.animated-arrow[_ngcontent-%COMP%]:hover{color:#eaeaea}.animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#eaeaea}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%]{display:flex;align-items:center}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]{margin:0 16px 0 0;line-height:1}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .the-arrow[_ngcontent-%COMP%]{position:relative}.rotate-180[_ngcontent-%COMP%]{transform:rotate(180deg)}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]{flex-direction:row-reverse}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0 0 0 16px}@media (max-width:760px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px}}@media (max-width:590px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:50px}}@media (max-width:460px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:34px}}@media (max-width:1200px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:540px}}@media (max-width:990px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:388px}}@media (max-width:768px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:296px}}@media (max-width:500px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:250px}}@media (max-width:360px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:185px}}'],data:{animation:i.a}}),t})();var u=e("+G0P");const w=[{path:"",component:p}];let y=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},imports:[[o.b,a.j.forChild(w),u.a]]}),t})()}}]);