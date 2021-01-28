!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9a8T":function(t,e,n){t.exports=function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e="Expected a function",n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof self&&self&&self.Object===Object&&self,s="object"==typeof t&&t&&t.Object===Object&&t||c||Function("return this")(),l=Object.prototype.toString,u=Math.max,d=Math.min,b=function(){return s.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function f(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=i.test(t);return c||r.test(t)?a(t.slice(2),c?2:8):o.test(t)?NaN:+t}var p=function(t,n,o){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(e);return m(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),function(t,n,o){var i,r,a,c,s,l,p=0,g=!1,v=!1,h=!0;if("function"!=typeof t)throw new TypeError(e);function w(e){var n=i,o=r;return i=r=void 0,p=e,c=t.apply(o,n)}function y(t){var e=t-l;return void 0===l||e>=n||e<0||v&&t-p>=a}function P(){var t=b();if(y(t))return k(t);s=setTimeout(P,function(t){var e=n-(t-l);return v?d(e,a-(t-p)):e}(t))}function k(t){return s=void 0,h&&i?w(t):(i=r=void 0,c)}function C(){var t=b(),e=y(t);if(i=arguments,r=this,l=t,e){if(void 0===s)return function(t){return p=t,s=setTimeout(P,n),g?w(t):c}(l);if(v)return s=setTimeout(P,n),w(l)}return void 0===s&&(s=setTimeout(P,n)),c}return n=f(n)||0,m(o)&&(g=!!o.leading,a=(v="maxWait"in o)?u(f(o.maxWait)||0,n):a,h="trailing"in o?!!o.trailing:h),C.cancel=function(){void 0!==s&&clearTimeout(s),p=0,i=l=r=s=void 0},C.flush=function(){return void 0===s?c:k(b())},C}(t,n,{leading:i,maxWait:n,trailing:r})},g=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,w=/^0o[0-7]+$/i,y=parseInt,P="object"==typeof self&&self&&self.Object===Object&&self,k="object"==typeof t&&t&&t.Object===Object&&t||P||Function("return this")(),C=Object.prototype.toString,x=Math.max,M=Math.min,O=function(){return k.Date.now()};function _(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Q(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==C.call(t)}(t))return NaN;if(_(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=_(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(g,"");var n=h.test(t);return n||w.test(t)?y(t.slice(2),n?2:8):v.test(t)?NaN:+t}var z=function(t,e,n){var o,i,r,a,c,s,l=0,u=!1,d=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=o,r=i;return o=i=void 0,l=e,a=t.apply(r,n)}function f(t){var n=t-s;return void 0===s||n>=e||n<0||d&&t-l>=r}function p(){var t=O();if(f(t))return g(t);c=setTimeout(p,function(t){var n=e-(t-s);return d?M(n,r-(t-l)):n}(t))}function g(t){return c=void 0,b&&o?m(t):(o=i=void 0,a)}function v(){var t=O(),n=f(t);if(o=arguments,i=this,s=t,n){if(void 0===c)return function(t){return l=t,c=setTimeout(p,e),u?m(t):a}(s);if(d)return c=setTimeout(p,e),m(s)}return void 0===c&&(c=setTimeout(p,e)),a}return e=Q(e)||0,_(n)&&(u=!!n.leading,r=(d="maxWait"in n)?x(Q(n.maxWait)||0,e):r,b="trailing"in n?!!n.trailing:b),v.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=s=i=c=void 0},v.flush=function(){return void 0===c?a:g(O())},v},q=function(){};function j(t){t&&t.forEach(function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes);if(function t(e){var n=void 0,o=void 0;for(n=0;n<e.length;n+=1){if((o=e[n]).dataset&&o.dataset.aos)return!0;if(o.children&&t(o.children))return!0}return!1}(e.concat(n)))return q()})}function S(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var N=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},A=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,L=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,F=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,T=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function I(){return navigator.userAgent||navigator.vendor||window.opera||""}var V=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return N(t,[{key:"phone",value:function(){var t=I();return!(!A.test(t)&&!L.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=I();return!(!F.test(t)&&!T.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}()),W=function(t,e){var n=void 0;return V.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:e}):n=new CustomEvent(t,{detail:e}),document.dispatchEvent(n)},$=function(t){return t.forEach(function(t,e){return function(t,e){var n=t.options,o=t.position,i=t.node,r=function(){t.animated&&(function(t,e){e&&e.forEach(function(e){return t.classList.remove(e)})}(i,n.animatedClassNames),W("aos:out",i),t.options.id&&W("aos:in:"+t.options.id,i),t.animated=!1)};n.mirror&&e>=o.out&&!n.once?r():e>=o.in?t.animated||(function(t,e){e&&e.forEach(function(e){return t.classList.add(e)})}(i,n.animatedClassNames),W("aos:in",i),t.options.id&&W("aos:in:"+t.options.id,i),t.animated=!0):t.animated&&!n.once&&r()}(t,window.pageYOffset)})},D=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}},U=function(t,e,n){var o=t.getAttribute("data-aos-"+e);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},X=function(t,e){return t.forEach(function(t,n){var o=U(t.node,"mirror",e.mirror),i=U(t.node,"once",e.once),r=U(t.node,"id"),a=e.useClassNames&&t.node.getAttribute("data-aos"),c=[e.animatedClassName].concat(a?a.split(" "):[]).filter(function(t){return"string"==typeof t});e.initClassName&&t.node.classList.add(e.initClassName),t.position={in:function(t,e,n){var o=window.innerHeight,i=U(t,"anchor"),r=U(t,"anchor-placement"),a=Number(U(t,"offset",r?0:e)),c=r||n,s=t;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var l=D(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":l+=s.offsetHeight/2;break;case"bottom-bottom":l+=s.offsetHeight;break;case"top-center":l+=o/2;break;case"center-center":l+=o/2+s.offsetHeight/2;break;case"bottom-center":l+=o/2+s.offsetHeight;break;case"top-top":l+=o;break;case"bottom-top":l+=o+s.offsetHeight;break;case"center-top":l+=o+s.offsetHeight/2}return l+a}(t.node,e.offset,e.anchorPlacement),out:o&&function(t,e){window;var n=U(t,"anchor"),o=U(t,"offset",e),i=t;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),D(i).top+i.offsetHeight-o}(t.node,e.offset)},t.options={once:i,mirror:o,animatedClassNames:c,id:r}}),t},B=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(t){return{node:t}})},H=[],G=!1,R={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},Y=function(){return document.all&&!window.atob},J=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(G=!0),G&&(H=X(H,R),$(H),window.addEventListener("scroll",p(function(){$(H)},R.throttleDelay)))},K=function(){if(H=B(),tt(R.disable)||Y())return Z();J()},Z=function(){H.forEach(function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),R.initClassName&&t.node.classList.remove(R.initClassName),R.animatedClassName&&t.node.classList.remove(R.animatedClassName)})},tt=function(t){return!0===t||"mobile"===t&&V.mobile()||"phone"===t&&V.phone()||"tablet"===t&&V.tablet()||"function"==typeof t&&!0===t()};return{init:function(t){return R=E(R,t),H=B(),R.disableMutationObserver||!!S()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),R.disableMutationObserver=!0),R.disableMutationObserver||function(t,e){var n=window.document,o=new(S())(j);q=e,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}(0,K),tt(R.disable)||Y()?Z():(document.querySelector("body").setAttribute("data-aos-easing",R.easing),document.querySelector("body").setAttribute("data-aos-duration",R.duration),document.querySelector("body").setAttribute("data-aos-delay",R.delay),-1===["DOMContentLoaded","load"].indexOf(R.startEvent)?document.addEventListener(R.startEvent,function(){J(!0)}):window.addEventListener("load",function(){J(!0)}),"DOMContentLoaded"===R.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&J(!0),window.addEventListener("resize",z(J,R.debounceDelay,!0)),window.addEventListener("orientationchange",z(J,R.debounceDelay,!0)),H)},refresh:J,refreshHard:K}}()},UeG6:function(e,o,i){"use strict";i.r(o),i.d(o,"WorksModule",function(){return T});var r=i("ofXK"),a=i("9a8T"),c=i.n(a),s=i("k3kC"),l=i.n(s),u=i("fXoL"),d=i("tyNb"),b=i("jSPT"),m=i("3Pt+"),f=i("cfV7"),p=i("5eHb"),g=function(t){return{active:t}};function v(t,e){if(1&t){var n=u.Rb();u.Qb(0,"fieldset"),u.Qb(1,"input",14),u.Xb("change",function(){u.rc(n);var t=e.$implicit;return u.bc(2).onStyleSelect(t)}),u.Pb(),u.Qb(2,"label",15),u.zc(3),u.Pb(),u.Pb()}if(2&t){var o=e.$implicit,i=u.bc(2);u.zb(1),u.Ab("id",o.value),u.zb(1),u.hc("ngClass",u.lc(4,g,o.value===i.selectedStyle)),u.Ab("for",o.value),u.zb(1),u.Ac(o.viewValue)}}function h(t,e){if(1&t){var n=u.Rb();u.Qb(0,"div",2),u.Qb(1,"div",3),u.Qb(2,"div",4),u.Qb(3,"div",5),u.Qb(4,"h3"),u.zc(5,"Quotes"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(6,"div",6),u.Qb(7,"div",4),u.Qb(8,"div",7),u.Qb(9,"div",8),u.Qb(10,"h2"),u.zc(11,"Which style of product would you like ?"),u.Pb(),u.Qb(12,"p"),u.zc(13," Our clients get the best results when they have our team dedicated to their business for extended periods of time. Ready to move forward? "),u.Pb(),u.Pb(),u.Pb(),u.Qb(14,"div",9),u.yc(15,v,4,6,"fieldset",10),u.Pb(),u.Pb(),u.Pb(),u.Qb(16,"div",11),u.Qb(17,"div",4),u.Qb(18,"div",12),u.Qb(19,"button",13),u.Xb("click",function(){return u.rc(n),u.bc().setStep("budget")}),u.zc(20," Next "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb()}if(2&t){var o=u.bc();u.zb(15),u.hc("ngForOf",o.productStyles)}}function w(t,e){if(1&t){var n=u.Rb();u.Qb(0,"fieldset"),u.Qb(1,"input",14),u.Xb("change",function(){u.rc(n);var t=e.$implicit;return u.bc(2).onCostSelect(t)}),u.Pb(),u.Qb(2,"label",15),u.zc(3),u.Pb(),u.Pb()}if(2&t){var o=e.$implicit,i=u.bc(2);u.zb(1),u.Ab("id",o.value),u.zb(1),u.hc("ngClass",u.lc(4,g,o.value===i.selectedCost)),u.Ab("for",o.value),u.zb(1),u.Ac(o.viewValue)}}function y(t,e){if(1&t){var n=u.Rb();u.Qb(0,"div",2),u.Qb(1,"div",3),u.Qb(2,"div",4),u.Qb(3,"div",5),u.Qb(4,"h3"),u.zc(5,"Quotes"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(6,"div",6),u.Qb(7,"div",4),u.Qb(8,"div",7),u.Qb(9,"div",8),u.Qb(10,"h2"),u.zc(11,"What is your budget?"),u.Pb(),u.Qb(12,"p"),u.zc(13," We are looking forward to provide you best looking product that meets your budget and deadline. "),u.Pb(),u.Pb(),u.Pb(),u.Qb(14,"div",9),u.yc(15,w,4,6,"fieldset",10),u.Pb(),u.Pb(),u.Pb(),u.Qb(16,"div",11),u.Qb(17,"div",4),u.Qb(18,"div",16),u.Qb(19,"button",13),u.Xb("click",function(){return u.rc(n),u.bc().setStep("style")}),u.zc(20," Prev "),u.Pb(),u.Pb(),u.Qb(21,"div",17),u.Qb(22,"button",13),u.Xb("click",function(){return u.rc(n),u.bc().setStep("contact")}),u.zc(23," Next "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb()}if(2&t){var o=u.bc();u.zb(15),u.hc("ngForOf",o.productCosts)}}function P(t,e){1&t&&(u.Qb(0,"span",29),u.zc(1," Please enter email. "),u.Pb())}function k(t,e){if(1&t){var n=u.Rb();u.Qb(0,"div",2),u.Qb(1,"div",3),u.Qb(2,"div",4),u.Qb(3,"div",5),u.Qb(4,"h3"),u.zc(5,"Quotes"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(6,"div",6),u.Qb(7,"div",4),u.Qb(8,"div",18),u.Qb(9,"div",8),u.Qb(10,"h2"),u.zc(11,"Leave us your contacts"),u.Pb(),u.Qb(12,"p"),u.zc(13,"We will come shortly with possible solutions"),u.Pb(),u.Pb(),u.Pb(),u.Qb(14,"div",19),u.Qb(15,"form",20),u.Xb("ngSubmit",function(){return u.rc(n),u.bc().sendContactForm()}),u.Qb(16,"div",21),u.Qb(17,"label",22),u.zc(18,"Email *"),u.Pb(),u.Qb(19,"div",5),u.Mb(20,"input",23),u.yc(21,P,2,0,"span",24),u.Pb(),u.Pb(),u.Qb(22,"div",21),u.Qb(23,"label",25),u.zc(24," Message "),u.Pb(),u.Qb(25,"div",5),u.Mb(26,"textarea",26),u.Pb(),u.Pb(),u.Qb(27,"div",27),u.Qb(28,"button",28),u.zc(29," Send "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(30,"div",11),u.Qb(31,"div",4),u.Qb(32,"div",16),u.Qb(33,"button",13),u.Xb("click",function(){return u.rc(n),u.bc().setStep("budget")}),u.zc(34," Prev "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb()}if(2&t){var o=u.bc();u.zb(15),u.hc("formGroup",o.contactForm),u.zb(6),u.hc("ngIf",(o.contactForm.get("email").hasError("required")||o.contactForm.get("email").hasError("whitespace"))&&(o.contactForm.get("email").dirty||o.contactForm.get("email").touched))}}var C,x,M,O,_=((C=function(){function e(n,o,i){t(this,e),this.emailService=n,this.formBuilder=o,this.toastrService=i,this.currentStep="style",this.isDisabled=this.mobileCheck(),this.productStyles=[{value:"video_production",viewValue:"Video production"},{value:"motion_graphics",viewValue:"Motion graphics"},{value:"2d_animation",viewValue:"2d animation"},{value:"3d_animation",viewValue:"3d animation"},{value:"ui_ux",viewValue:"Ui/Ux"}],this.productCosts=[{value:"5000",viewValue:"$5,000"},{value:"10000",viewValue:"$10,000"},{value:"20000",viewValue:"$20,000"},{value:"50000",viewValue:"$50,000"}]}return n(e,[{key:"ngOnInit",value:function(){this.contactForm=this.formBuilder.group({email:["",[m.j.required,this.noWhitespaceValidator,m.j.email]],message:["",m.j.maxLength(500)]})}},{key:"onStyleSelect",value:function(t){this.selectedStyle=t.value}},{key:"onCostSelect",value:function(t){this.selectedCost=t.value}},{key:"setStep",value:function(t){this.currentStep=t}},{key:"sendContactForm",value:function(){var t=this;this.contactForm.valid?this.emailService.sendFromQuotes(this.contactForm.value,this.selectedStyle,this.selectedCost).then(function(e){t.toastrService.success("Your request was sent to Geek Power.")}).catch(function(e){t.toastrService.error("Can't send your request to Geek Power, please use phone or email to contact with us.")}):this.contactForm.markAllAsTouched()}},{key:"noWhitespaceValidator",value:function(t){return 0!==(t.value||"").trim().length?null:{whitespace:!0}}},{key:"mobileCheck",value:function(){var t,e=!1;return(t=navigator.userAgent||navigator.vendor||window.opera)&&(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e}}]),e}()).\u0275fac=function(t){return new(t||C)(u.Lb(f.a),u.Lb(m.b),u.Lb(p.b))},C.\u0275cmp=u.Fb({type:C,selectors:[["app-quotes"]],decls:4,vars:4,consts:[[1,"quotes-wrapper"],["class","quotes-step",4,"ngIf"],[1,"quotes-step"],[1,"quotes-header"],[1,"row"],[1,"col"],[1,"quotes-body"],[1,"col-12","col-sm-8","quotes-body-text-wrapper"],[1,"quotes-body-text"],[1,"col-12","col-sm-4","quotes-body-select"],[4,"ngFor","ngForOf"],[1,"quotes-footer"],[1,"col-md-2","offset-md-10","text-center"],[1,"quotes-button","hvr-underline-from-left",3,"click"],["type","radio","name","select_style",3,"change"],[3,"ngClass"],[1,"col-md-2","text-center"],[1,"col-md-2","offset-md-8","text-center"],[1,"col-12","col-sm-6","quotes-body-text-wrapper"],[1,"col-12","col-sm-6","quotes-body-select"],["name","contactForm","novalidate","","autocomplete","off",3,"formGroup","ngSubmit"],[1,"form-group","py-4","row"],["for","nameField",1,"col-3","col-form-label"],["type","text","id","nameField","formControlName","email","required","",1,"form-control"],["class","error",4,"ngIf"],["for","messageField",1,"col-3","col-form-label"],["id","messageField","rows","1","formControlName","message",1,"form-control"],[1,"text-right"],["type","submit",1,"btn","btn-primary","mb-2","hvr-sweep-to-right"],[1,"error"]],template:function(t,e){1&t&&(u.Qb(0,"div",0),u.yc(1,h,21,1,"div",1),u.yc(2,y,24,1,"div",1),u.yc(3,k,35,2,"div",1),u.Pb()),2&t&&(u.hc("@.disabled",e.isDisabled),u.zb(1),u.hc("ngIf","style"===e.currentStep),u.zb(1),u.hc("ngIf","budget"===e.currentStep),u.zb(1),u.hc("ngIf","contact"===e.currentStep))},directives:[r.k,r.j,r.i,m.k,m.g,m.d,m.a,m.f,m.c,m.i],styles:[".quotes-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:center;align-content:center;height:100%}.quotes-header[_ngcontent-%COMP%]{position:fixed;top:40px}.quotes-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:600;font-size:24px;line-height:24px;letter-spacing:1px;color:#fff;opacity:.5}.quotes-body-text-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:center;align-content:center}.quotes-body-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-style:normal;font-weight:600;font-size:48px;line-height:48px;letter-spacing:1px;color:#fff;opacity:.5}.quotes-body-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:16px;line-height:24px;letter-spacing:1px;color:#fff;opacity:.5}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{display:none}.quotes-body-select[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{text-align:center;padding:6px}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{cursor:pointer;font-style:normal;font-weight:300;font-size:24px;line-height:24px;letter-spacing:1px;color:#fff;opacity:.5;transition:all .5s ease}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover{transform:scale(1.2);text-decoration:underline}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label.active[_ngcontent-%COMP%]{font-style:normal;font-weight:300;font-size:24px;line-height:24px;letter-spacing:1px;color:#fff;transform:scale(1.2);text-decoration:underline;opacity:1}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:600px}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none;border-bottom:2px solid #ccc;background:transparent;outline:none;box-shadow:none;font-size:14px}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{color:#666;background:transparent;border-color:#6b6b6b;outline:none;box-shadow:none}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{position:absolute}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:24px;text-transform:uppercase;font-weight:bolder;background-color:transparent;border-color:#fff;border-radius:0;line-height:2;padding-left:40px;padding-right:40px}.quotes-footer[_ngcontent-%COMP%]{position:fixed;bottom:40px;left:0;width:100%}.quotes-step[_ngcontent-%COMP%]{position:relative;margin:0 auto;width:95%}"]}),C),Q=["modal"],z=function(t){return{"background-image":t}},q=function(){return["/category/video"]},j=function(t){return{active:t}},S=function(){return["/category/animation"]},N=function(){return["/category/mobile"]},E=((M=function(){function e(n){var o=this;t(this,e),this.document=n,this.isMobile=!1,this.isWebP=!1,this.backgroundUrl="",l.a.then(function(t){o.isWebP=t}),this.isMobile="mobile"===this.document.documentElement.id}return n(e,[{key:"ngOnInit",value:function(){c.a.init(),this.setBackgroundUrl("video")}},{key:"ngAfterViewInit",value:function(){setTimeout(function(){return c.a.refreshHard()},500)}},{key:"setBackgroundUrl",value:function(t){var e=this.isMobile?"_md":"_xl";this.backgroundUrl=this.isWebP?"assets/images/categories/".concat(t,"/").concat(this.randomIntFromInterval(1,2)).concat(e,".webp"):"assets/images/categories/".concat(t,"/").concat(this.randomIntFromInterval(1,2)).concat(e,".png")}},{key:"randomIntFromInterval",value:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}}]),e}()).\u0275fac=function(t){return new(t||M)(u.Lb(r.d))},M.\u0275cmp=u.Fb({type:M,selectors:[["app-works"]],viewQuery:function(t,e){var n;1&t&&u.Dc(Q,!0),2&t&&u.oc(n=u.Yb())&&(e.modal=n.first)},decls:73,vars:18,consts:[[1,"works-wrapper"],[1,"container-fluid","h-100"],[1,"row","works-items","justify-content-center","h-100",3,"ngStyle"],[1,"col-12","col-lg-4","works-item","border-animated","draw",3,"routerLink","ngClass","mouseenter","touchstart","touchend","mouseleave"],["videoLink",""],[1,"works-item-content"],[1,"number"],[1,"works-item-content-hover"],["animationLink",""],["mobileLink",""],[1,"container","know-us"],[1,"my-5","text-center"],[1,"row"],["data-aos","fade-up",1,"col-12","text-left","mb-5"],["data-aos","fade-up",1,"col-12","text-left"],[1,"container-fluid","our-clients"],[1,"my-5"],["data-aos","fade-up",1,"row"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-one"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-two"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-three"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-four"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-five"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-six"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-seven"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-eight"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-ten"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-nine"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-eleven"],[1,"col-6","col-sm-3","our-clients-item","our-clients-item-twelve"],[1,"row","know-us"],[1,"yellow-button",3,"click"],["modal",""]],template:function(t,e){if(1&t){var n=u.Rb();u.Qb(0,"div",0),u.Qb(1,"div",1),u.Qb(2,"div",2),u.Qb(3,"a",3,4),u.Xb("mouseenter",function(){return e.setBackgroundUrl("video")})("touchstart",function(){u.rc(n);var t=u.pc(4);return e.setBackgroundUrl("video"),t.active=1})("touchend",function(){return u.rc(n),u.pc(4).active=0})("mouseleave",function(){return u.rc(n),u.pc(4).active=0}),u.Qb(5,"div",5),u.Qb(6,"div",6),u.zc(7,"01"),u.Pb(),u.Qb(8,"h4"),u.zc(9,"Video Production"),u.Pb(),u.Pb(),u.Qb(10,"div",7),u.Qb(11,"h3"),u.zc(12,"V"),u.Pb(),u.Pb(),u.Pb(),u.Qb(13,"a",3,8),u.Xb("mouseenter",function(){return e.setBackgroundUrl("animation")})("touchstart",function(){u.rc(n);var t=u.pc(14);return e.setBackgroundUrl("animation"),t.active=1})("touchend",function(){return u.rc(n),u.pc(14).active=0})("mouseleave",function(){return u.rc(n),u.pc(14).active=0}),u.Qb(15,"div",5),u.Qb(16,"div",6),u.zc(17,"02"),u.Pb(),u.Qb(18,"h4"),u.zc(19,"Animation"),u.Pb(),u.Pb(),u.Qb(20,"div",7),u.Qb(21,"h3"),u.zc(22,"A"),u.Pb(),u.Pb(),u.Pb(),u.Qb(23,"a",3,9),u.Xb("mouseenter",function(){return e.setBackgroundUrl("mobile")})("touchstart",function(){u.rc(n);var t=u.pc(24);return e.setBackgroundUrl("mobile"),t.active=1})("touchend",function(){return u.rc(n),u.pc(24).active=0})("mouseleave",function(){return u.rc(n),u.pc(24).active=0}),u.Qb(25,"div",5),u.Qb(26,"div",6),u.zc(27,"03"),u.Pb(),u.Qb(28,"h4"),u.zc(29,"Mobile & Platforms"),u.Pb(),u.Pb(),u.Qb(30,"div",7),u.Qb(31,"h3"),u.zc(32,"M"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(33,"div",10),u.Qb(34,"h1",11),u.zc(35,"Motion design"),u.Pb(),u.Qb(36,"div",12),u.Qb(37,"p",13),u.zc(38," 94% of the first users\u2019 impression is design-related. Want to skyrocket your design efforts with the help of top-notch motion graphics? Our motion design studio knows how to! "),u.Pb(),u.Qb(39,"p",13),u.zc(40," The best thing about motion design is that it has no usage limitations. Motion design elements are easy to complement your digital marketing strategy regardless of the channel and kindly lure your potential leads into your sales funnel. Creating stunning designs with a motion design agency can be the pitfalls-free way to deliver value to your customers giving them a chance to effortlessly consume your content on any platform. "),u.Pb(),u.Qb(41,"p",14),u.zc(42," Already lost in motion graphics agencies offers? Give us a try to get a better deal! "),u.Pb(),u.Pb(),u.Pb(),u.Qb(43,"div",15),u.Qb(44,"h2",16),u.zc(45,"Kudos"),u.Pb(),u.Qb(46,"div",17),u.Mb(47,"div",18),u.Mb(48,"div",19),u.Mb(49,"div",20),u.Mb(50,"div",21),u.Pb(),u.Qb(51,"div",17),u.Mb(52,"div",22),u.Mb(53,"div",23),u.Mb(54,"div",24),u.Mb(55,"div",25),u.Pb(),u.Qb(56,"div",17),u.Mb(57,"div",26),u.Mb(58,"div",27),u.Mb(59,"div",28),u.Mb(60,"div",29),u.Pb(),u.Pb(),u.Qb(61,"div",30),u.Qb(62,"h3"),u.zc(63,"Get to know us!"),u.Pb(),u.Qb(64,"p"),u.zc(65," Take 3-step survey and we will come "),u.Mb(66,"br"),u.zc(67," to you shortly with a solution "),u.Pb(),u.Qb(68,"button",31),u.Xb("click",function(){return u.rc(n),u.pc(71).open()}),u.zc(69,"Get a Quote"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(70,"app-video-popup",null,32),u.Mb(72,"app-quotes"),u.Pb()}if(2&t){var o=u.pc(4),i=u.pc(14),r=u.pc(24);u.zb(2),u.hc("ngStyle",u.lc(7,z,"url("+e.backgroundUrl+")")),u.zb(1),u.hc("routerLink",u.kc(9,q))("ngClass",u.lc(10,j,o.active)),u.zb(10),u.hc("routerLink",u.kc(12,S))("ngClass",u.lc(13,j,i.active)),u.zb(10),u.hc("routerLink",u.kc(15,N))("ngClass",u.lc(16,j,r.active))}},directives:[r.l,d.i,r.i,b.a,_],styles:['.works-items[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:50%;transition:background .5s ease-in;background-color:#1a1a1a;background-size:cover}.works-items[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{outline:1px solid hsla(0,0%,100%,.2);max-height:1080px;height:-webkit-fill-available;height:100vh}.works-items[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:active, .works-items[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .works-items[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:link, .works-items[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:visited{text-decoration:none}.works-item[_ngcontent-%COMP%]{cursor:pointer;background-color:transparent;transition:all 1s linear}.works-item[_ngcontent-%COMP%]:active, .works-item[_ngcontent-%COMP%]:focus, .works-item[_ngcontent-%COMP%]:hover{background-color:#1a1a1a;background-image:url(white-line_xl.45eb5c80c97a45cacd30.png);background-repeat:no-repeat;background-position:50%;background-size:270px}.works-item[_ngcontent-%COMP%]:active   h4[_ngcontent-%COMP%], .works-item[_ngcontent-%COMP%]:focus   h4[_ngcontent-%COMP%], .works-item[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]{-webkit-animation:blink 1s linear 0s 3;animation:blink 1s linear 0s 3;text-decoration:underline}.works-item[_ngcontent-%COMP%]:active   .works-item-content-hover[_ngcontent-%COMP%], .works-item[_ngcontent-%COMP%]:focus   .works-item-content-hover[_ngcontent-%COMP%], .works-item[_ngcontent-%COMP%]:hover   .works-item-content-hover[_ngcontent-%COMP%]{display:block}.works-item-content[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{margin-top:33px;margin-bottom:15px;font-size:14px}.works-item-content[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%], .works-item-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-left:48px;line-height:24px;letter-spacing:1px;color:#fff}.works-item-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:24px}.works-item-content-hover[_ngcontent-%COMP%]{display:none;height:80%;position:relative}.works-item-content-hover[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;font-size:240px;line-height:1;align-items:center;letter-spacing:1px;color:#fff;transform:translate3d(-50%,-50%,1px);position:absolute;top:50%;left:50%}.works-wrapper[_ngcontent-%COMP%]{background-color:#1a1a1a;position:relative;width:100%;min-height:678px}.border-animated[_ngcontent-%COMP%]{background:none;border:0;box-sizing:border-box;box-shadow:inset 0 0 0 2px transparent;color:transparent;font-size:inherit;font-weight:700;position:relative;vertical-align:middle}.border-animated[_ngcontent-%COMP%]:after, .border-animated[_ngcontent-%COMP%]:before{box-sizing:inherit;content:"";position:absolute;width:100%;height:100%}.draw[_ngcontent-%COMP%]{transition:color .25s}.draw[_ngcontent-%COMP%]:after, .draw[_ngcontent-%COMP%]:before{border:1px solid transparent;width:0;height:0}.draw[_ngcontent-%COMP%]:before{top:0;left:0}.draw[_ngcontent-%COMP%]:after{bottom:0;right:0}.draw.active[_ngcontent-%COMP%], .draw[_ngcontent-%COMP%]:hover{color:#fff}.draw.active[_ngcontent-%COMP%]:before, .draw[_ngcontent-%COMP%]:hover:before{width:100%;height:100%;border-top-color:#fff;border-right-color:#fff;transition:width .25s ease-out,height .25s ease-out .25s}.draw.active[_ngcontent-%COMP%]:after, .draw[_ngcontent-%COMP%]:hover:after{width:100%;height:100%;border-bottom-color:#fff;border-left-color:#fff;transition:border-color 0s ease-out .5s,width .25s ease-out .5s,height .25s ease-out .75s}.know-us[_ngcontent-%COMP%]{min-height:640px;background-color:#1a1a1a;display:flex;flex-wrap:nowrap;flex-direction:column;justify-content:center;align-items:center;align-content:center}.know-us[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;margin:20px}.know-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;font-size:64px;display:flex;align-items:center;letter-spacing:1px;text-transform:capitalize}.know-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .know-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;text-align:center;color:#fff}.know-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:18px;line-height:114%}@-webkit-keyframes blink{0%{opacity:0}50%{opacity:.5}to{opacity:1}}@keyframes blink{0%{opacity:0}50%{opacity:.5}to{opacity:1}}@media (max-width:767.98px){.know-us.container[_ngcontent-%COMP%], .know-us[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{padding-left:0;padding-right:0;margin-left:0;margin-right:0}}']}),M),A=((x=function e(){t(this,e)}).\u0275mod=u.Jb({type:x}),x.\u0275inj=u.Ib({factory:function(t){return new(t||x)},imports:[[r.c,m.e,m.h]]}),x),L=i("AKxs"),F=[{path:"",component:E}],T=((O=function e(){t(this,e)}).\u0275mod=u.Jb({type:O}),O.\u0275inj=u.Ib({factory:function(t){return new(t||O)},imports:[[r.c,d.j.forChild(F),A,L.a]]}),O)}}])}();