(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"4ik+":function(t,e,o){"use strict";var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=o("FWf1");e.filter=function(t,e){return function(o){return o.lift(new i(t,e))}};var i=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.predicate,this.thisArg))},t}(),s=function(t){function e(e,o,r){var n=t.call(this,e)||this;return n.predicate=o,n.thisArg=r,n.count=0,n}return r(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(o){return void this.destination.error(o)}e&&this.destination.next(t)},e}(n.Subscriber)},FWf1:function(t,e,o){"use strict";var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=o("pshJ"),i=o("GiSu"),s=o("zB/H"),c=o("p//D"),a=o("n3uD"),u=o("MkmW"),p=function(t){function e(o,r,n){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=i.empty;break;case 1:if(!o){s.destination=i.empty;break}if("object"==typeof o){o instanceof e?(s.syncErrorThrowable=o.syncErrorThrowable,s.destination=o,o.add(s)):(s.syncErrorThrowable=!0,s.destination=new l(s,o));break}default:s.syncErrorThrowable=!0,s.destination=new l(s,o,r,n)}return s}return r(e,t),e.prototype[c.rxSubscriber]=function(){return this},e.create=function(t,o,r){var n=new e(t,o,r);return n.syncErrorThrowable=!1,n},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(s.Subscription);e.Subscriber=p;var l=function(t){function e(e,o,r,s){var c,a=t.call(this)||this;a._parentSubscriber=e;var u=a;return n.isFunction(o)?c=o:o&&(c=o.next,r=o.error,s=o.complete,o!==i.empty&&(u=Object.create(o),n.isFunction(u.unsubscribe)&&a.add(u.unsubscribe.bind(u)),u.unsubscribe=a.unsubscribe.bind(a))),a._context=u,a._next=c,a._error=r,a._complete=s,a}return r(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;a.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,o=a.config.useDeprecatedSynchronousErrorHandling;if(this._error)o&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)o?(e.syncErrorValue=t,e.syncErrorThrown=!0):u.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),o)throw t;u.hostReportError(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var o=function(){return t._complete.call(t._context)};a.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,o),this.unsubscribe()):(this.__tryOrUnsub(o),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(o){if(this.unsubscribe(),a.config.useDeprecatedSynchronousErrorHandling)throw o;u.hostReportError(o)}},e.prototype.__tryOrSetError=function(t,e,o){if(!a.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,o)}catch(r){return a.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(u.hostReportError(r),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(p);e.SafeSubscriber=l},GMZp:function(t,e,o){"use strict";e.isObject=function(t){return null!==t&&"object"==typeof t}},GiSu:function(t,e,o){"use strict";var r=o("n3uD"),n=o("MkmW");e.empty={closed:!0,next:function(t){},error:function(t){if(r.config.useDeprecatedSynchronousErrorHandling)throw t;n.hostReportError(t)},complete:function(){}}},LBXl:function(t,e,o){"use strict";e.UnsubscriptionError=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}()},MkmW:function(t,e,o){"use strict";e.hostReportError=function(t){setTimeout(function(){throw t},0)}},bw5h:function(t,e,o){"use strict";o.r(e),o.d(e,"CategoryModule",function(){return x});var r=o("ofXK"),n=o("tyNb"),i=o("4ik+"),s=o("8UQ/"),c=o("fXoL"),a=o("jhN1"),u=o("jSPT"),p=o("Knxr"),l=o("YYwF");function h(t,e){1&t&&(c.Qb(0),c.Sb(1,"p",18),c.Bc(2," Looking for reaching your target audience in such a way your users expect from you? Consider motion graphics and animated promotional videos for business! "),c.Rb(),c.Sb(3,"p",19),c.Bc(4," There are too many pros of animated promotional videos to fit them in just a few words, but in a nutshell, this is the top way to attract attention to your business, easily explain any complex concept, visualize your problem-solving ideas with motion graphics and make your users dwell on your website and social media profiles. Being the top-consumed content type to date, promotion animation is able to power and skyrocket your marketing strategy. "),c.Rb(),c.Sb(5,"p",19),c.Bc(6," Wonder what are the other benefits an animated promo video can bring to your table? Reach us to discover them! "),c.Rb(),c.Pb())}function b(t,e){1&t&&(c.Qb(0),c.Sb(1,"p",18),c.Bc(2," Want to get an all-in-one solution for your marketing strategies, interaction with customers and partners, and attracting investments to your future projects? Creative video production potential goes beyond these tasks! "),c.Rb(),c.Sb(3,"p",19),c.Bc(4," In 2021, an average Internet user is expected to spend 100 minutes per day watching online videos. This is the right time and place to catch their attention with your brand voice, marketing message, and unique value proposition revealed in your engaging video. What is more, the potential of video production for business is so unlimited that it can be easily used for any project, regardless of the specifics. The only thing you need is some technical skills and knowledge, a bit of creativity, and a video production agency you may consult with any time. "),c.Rb(),c.Sb(5,"p",19),c.Bc(6," Ready to sharpen your video marketing strategy for 2020 and beyond? We are here to make your ideas happen! "),c.Rb(),c.Pb())}function d(t,e){1&t&&(c.Qb(0),c.Sb(1,"p",18),c.Bc(2," In a dynamic mobile application market, the winner is the one who can offer the best solution to the user's problem for a reasonable fee, combining simplicity and quality within one application. The simplicity and quality as the parts of the whole may be described with one word - mobile user experience. "),c.Rb(),c.Sb(3,"p",19),c.Bc(4," The experience your mobile app offers to your users may become your competitive edge or the reason to never use your solution again. "),c.Rb(),c.Sb(5,"p",19),c.Bc(6," With the first and the ultimate goal in mind, we are here to offer you the high-end mobile UI/UX design creation to meet the changing expectations of your target users, follow the latest mobile and web design trends, and add value to your offer through the engaging and enjoyable mobile user experience (UX). "),c.Rb(),c.Sb(7,"p",19),c.Bc(8," The top-notch UI and UX design will never be a challenge for your project since our mobile developers are right here to help with your mobile design architecture and prototyping. Feel free to review the successful projects we\u2019ve contributed to and get in touch with us for more details and instant assistance in mobile UI design and development! "),c.Rb(),c.Pb())}const f=function(t){return["/post",t]},g=function(t,e,o){return{pageTitle:t,metaKeywords:e,metaDescritpion:o}},y=function(t){return{active:t}};function m(t,e){if(1&t&&(c.Sb(0,"div",20),c.Sb(1,"a",21),c.Zb("touchstart",function(){return e.$implicit.active=1})("touchend",function(){return e.$implicit.active=0})("mouseleave",function(){return e.$implicit.active=0}),c.Ob(2,"app-picture",22),c.Sb(3,"div",23),c.Sb(4,"h3"),c.Bc(5),c.Rb(),c.Sb(6,"p"),c.Bc(7),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&t){const t=e.$implicit;c.Bb(1),c.jc("routerLink",c.nc(6,f,t.urlTitle))("state",c.oc(8,g,t.pageTitle,t.metaKeywords,t.metaDescritpion))("ngClass",c.nc(12,y,t.active)),c.Bb(1),c.jc("imagesData",t.imagePreview),c.Bb(3),c.Cc(t.title),c.Bb(2),c.Cc(t.subtitle)}}let v=(()=>{class t{constructor(t,e,o,r){this.router=t,this.postsService=e,this.titleService=o,this.metaService=r,this.title="",this.videoUrl="",this.reelVideoUrl="",this.pageTitle="",this.metaKeywords=[],this.metaDescritpion="",this.categories=["video","animation","mobile"],this.router.events.pipe(Object(i.filter)(t=>t instanceof n.c)).subscribe(t=>{if(this.categories.indexOf(t.url)){const e=t.url.split("/").filter(t=>!!t),o=e[e.length-1];this.categories.includes(o)&&(this.workMode=o,this.setStatic(),this.getDataByCategory()),this.pageTitle&&this.titleService.setTitle(this.pageTitle),Array.isArray(this.metaKeywords)&&this.metaKeywords.length&&this.metaService.updateTag({name:"keywords",content:this.metaKeywords.join(",")}),this.metaDescritpion&&this.metaService.updateTag({name:"description",content:this.metaDescritpion})}})}ngOnInit(){}ngOnDestroy(){}goToPost(t){this.postsService.currentPost=t,localStorage.setItem("current_post",JSON.stringify(t)),this.router.navigate(["/post"])}setStatic(){switch(this.workMode){case"video":this.title="Video Production",this.reelVideoUrl="https://player.vimeo.com/video/481588124?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ",this.pageTitle="Creative video production | Geek Powr Media",this.metaKeywords=["creative video production","video production","video production agency"],this.metaDescritpion="Want to get an all-in-one solution for your marketing strategies, interaction with customers and partners, and attracting investments to your future projects? Video production agency potential goes beyond these tasks!";break;case"animation":this.title="Promo animation",this.reelVideoUrl="https://player.vimeo.com/video/479983049?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/f5ClCTAuIZc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W2YoihjFTJ0",this.pageTitle="Promo animation - get animated promotional videos`",this.metaKeywords=["promo animation","animated promotional video","promotion animation","animated promo video","animated promotional videos for business"],this.metaDescritpion="Consider motion graphics and animated promotional videos for business!";break;case"mobile":this.title="Mobile & Platforms",this.reelVideoUrl="https://player.vimeo.com/video/479493339?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/CVsI_okkQEk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=CVsI_okkQEk",this.pageTitle="Mobile web design | Geek Powr Media",this.metaKeywords=["architecture mobile design","mobile web design","mobile ui design","mobile ux","mobile design ui / ux","mobile ux design","ux design for mobile developers"],this.metaDescritpion="Create a unique mobile design ui/ux with us. Our professionals implement only the best ideas."}}trackByFn(t,e){return e.id}sortByOrder(t,e){return t.order<e.order?-1:t.order>e.order?1:0}getDataByCategory(){const t=this.postsService.getData().filter(t=>t.category===this.workMode);this.data=t.sort(this.sortByOrder)}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(n.e),c.Nb(s.a),c.Nb(a.d),c.Nb(a.c))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-category"]],decls:31,vars:15,consts:[[1,"category"],[1,"category-header"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right",3,"click"],[1,"video-background"],[1,"video-foreground"],["frameBorder","0","allowfullscreen","","loading","lazy",3,"src"],[1,"category-body"],[1,"row","flex-column-reverse"],[1,"col-12"],[1,"row",3,"ngSwitch"],[4,"ngSwitchCase"],[1,"category-body-title","w-100"],["class","col-lg-4 p-0",4,"ngFor","ngForOf","ngForTrackBy"],["videoPopUp",""],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",1,"frame",3,"src"],[1,"col-12","mt-5","pt-5","category-paragraph"],[1,"col-12","category-paragraph"],[1,"col-lg-4","p-0"],[1,"category-body-item",3,"routerLink","state","ngClass","touchstart","touchend","mouseleave"],[3,"imagesData"],[1,"category-body-item-info"]],template:function(t,e){if(1&t){const t=c.Tb();c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Sb(3,"div",3),c.Sb(4,"div",4),c.Sb(5,"h1"),c.Bc(6),c.Rb(),c.Sb(7,"button",5),c.Zb("click",function(){return c.tc(t),c.rc(28).open()}),c.Bc(8," View Latest Reel "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(9,"div",6),c.Sb(10,"div",7),c.Ob(11,"iframe",8),c.ec(12,"safe"),c.Rb(),c.Rb(),c.Rb(),c.Sb(13,"div",9),c.Sb(14,"div",2),c.Sb(15,"div",10),c.Sb(16,"div",11),c.Sb(17,"div",12),c.Ac(18,h,7,0,"ng-container",13),c.Ac(19,b,7,0,"ng-container",13),c.Ac(20,d,9,0,"ng-container",13),c.Rb(),c.Rb(),c.Sb(21,"div",11),c.Sb(22,"div",3),c.Sb(23,"div",14),c.Sb(24,"h2"),c.Bc(25,"Latest and Greatest"),c.Rb(),c.Rb(),c.Ac(26,m,8,14,"div",15),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(27,"app-video-popup",null,16),c.Ob(29,"iframe",17),c.ec(30,"safe"),c.Rb()}2&t&&(c.Bb(6),c.Cc(e.title),c.Bb(5),c.jc("src",c.gc(12,9,e.videoUrl,"resourceUrl"),c.vc),c.Bb(6),c.jc("ngSwitch",e.workMode),c.Bb(1),c.jc("ngSwitchCase","animation"),c.Bb(1),c.jc("ngSwitchCase","video"),c.Bb(1),c.jc("ngSwitchCase","mobile"),c.Bb(6),c.jc("ngForOf",e.data)("ngForTrackBy",e.trackByFn),c.Bb(3),c.jc("src",c.gc(30,12,e.reelVideoUrl,"resourceUrl"),c.vc))},directives:[r.m,r.n,r.j,u.a,n.h,r.i,p.a],pipes:[l.a],styles:[".category-header[_ngcontent-%COMP%]{height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden}.category-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .category-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:200px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:48px;margin-bottom:30px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.category-body[_ngcontent-%COMP%]{padding-bottom:50px}.category-body-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .category-body-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px;font-family:gilroy-bold;font-style:normal;font-weight:700;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-body-item[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:406px;outline:1px solid #fff;margin:1px;background-color:#000;background-position:top;background-repeat:no-repeat;background-size:135%;display:block}.category-body-item.active[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover{text-decoration:none;-webkit-animation:shrink 2s infinite alternate;animation:shrink 2s infinite alternate;color:#fff}.category-body-item.active[_ngcontent-%COMP%]   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]{height:150px;background-color:#fff;border-top:1px solid #cdcdcd}.category-body-item.active[_ngcontent-%COMP%]   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item.active[_ngcontent-%COMP%]   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.category-body-item-info[_ngcontent-%COMP%]{height:120px;position:absolute;bottom:0;width:100%;border-top:1px solid #fff;transition:all .5s ease;background-color:#1a1a1a}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;font-size:24px;margin-top:22px}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;line-height:24px;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-left:70px;margin-right:10px}.category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:14px;margin-top:24px}.category-paragraph[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;font-weight:400;font-size:18px;color:#fff}.video-background[_ngcontent-%COMP%]{background:#000;position:relative;top:-100%;right:0;bottom:0;left:0;z-index:-99;height:100%}.video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .video-foreground[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media (min-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{height:300%;top:-100%}}@media (max-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{width:300%;left:-100%}}@-webkit-keyframes shrink{0%{background-size:135%}to{background-size:150%}}@keyframes shrink{0%{background-size:135%}to{background-size:150%}}"]}),t})();var _=o("+G0P"),w=o("4NX6"),S=o("AKxs");const O=[{path:"",component:v}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({imports:[[r.c,n.i.forChild(O),_.a,S.a,w.a]]}),t})()},mbIT:function(t,e,o){"use strict";e.isArray=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}()},n3uD:function(t,e,o){"use strict";var r=!1;e.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=t},get useDeprecatedSynchronousErrorHandling(){return r}}},"p//D":function(t,e,o){"use strict";e.rxSubscriber=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),e.$$rxSubscriber=e.rxSubscriber},pshJ:function(t,e,o){"use strict";e.isFunction=function(t){return"function"==typeof t}},"zB/H":function(t,e,o){"use strict";var r=o("mbIT"),n=o("GMZp"),i=o("pshJ"),s=o("LBXl");function c(t){return t.reduce(function(t,e){return t.concat(e instanceof s.UnsubscriptionError?e.errors:e)},[])}e.Subscription=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var e;if(!this.closed){var o=this._parentOrParents,a=this._ctorUnsubscribe,u=this._unsubscribe,p=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,o instanceof t)o.remove(this);else if(null!==o)for(var l=0;l<o.length;++l)o[l].remove(this);if(i.isFunction(u)){a&&(this._unsubscribe=void 0);try{u.call(this)}catch(d){e=d instanceof s.UnsubscriptionError?c(d.errors):[d]}}if(r.isArray(p)){l=-1;for(var h=p.length;++l<h;){var b=p[l];if(n.isObject(b))try{b.unsubscribe()}catch(d){e=e||[],d instanceof s.UnsubscriptionError?e=e.concat(c(d.errors)):e.push(d)}}}if(e)throw new s.UnsubscriptionError(e)}},t.prototype.add=function(e){var o=e;if(!e)return t.EMPTY;switch(typeof e){case"function":o=new t(e);case"object":if(o===this||o.closed||"function"!=typeof o.unsubscribe)return o;if(this.closed)return o.unsubscribe(),o;if(!(o instanceof t)){var r=o;(o=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var n=o._parentOrParents;if(null===n)o._parentOrParents=this;else if(n instanceof t){if(n===this)return o;o._parentOrParents=[n,this]}else{if(-1!==n.indexOf(this))return o;n.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[o]:i.push(o),o},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var o=e.indexOf(t);-1!==o&&e.splice(o,1)}},t.EMPTY=((e=new t).closed=!0,e),t}()}}]);