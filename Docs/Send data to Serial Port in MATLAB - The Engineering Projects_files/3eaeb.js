!function(){var e={},t=function(){var e,t,n,a={rootMargin:"200px 0px",threshold:.01},i=[];d();var r=document.querySelector("body");function d(){e=[].slice.call(document.querySelectorAll("img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)")),n&&n.disconnect(),"IntersectionObserver"in window?(n=new IntersectionObserver(l,a),e.forEach((function(e){e.getAttribute("data-lazy-loaded")||n.observe(e)})),window.addEventListener("beforeprint",c),window.matchMedia&&window.matchMedia("print").addListener((function(e){e.matches&&c()}))):o()}function o(){for(n&&n.disconnect();e.length>0;)s(e[0])}function l(t){for(var a=0;a<t.length;a++){var i=t[a];i.intersectionRatio>0&&(n.unobserve(i.target),s(i.target))}0===e.length&&n.disconnect()}function c(){if(!t&&(e.length>0||i.length>0)){(t=document.createElement("div")).id="loadingWarning",t.style.fontWeight="bold",t.innerText=jetpackLazyImagesL10n.loading_warning;var n=document.createElement("style");n.innerHTML="#loadingWarning { display: none; }\n@media print {\n#loadingWarning { display: block; }\nbody > #loadingWarning ~ * { display: none !important; }\n}",t.appendChild(n),r.insertBefore(t,r.firstChild)}e.length>0&&o(),t&&alert(jetpackLazyImagesL10n.loading_warning)}function s(t){var n;if(t instanceof HTMLImageElement){var a=t.getAttribute("data-lazy-srcset"),r=t.getAttribute("data-lazy-sizes");t.removeAttribute("data-lazy-srcset"),t.removeAttribute("data-lazy-sizes"),t.removeAttribute("data-lazy-src"),t.classList.add("jetpack-lazy-image--handled"),t.setAttribute("data-lazy-loaded",1),r&&t.setAttribute("sizes",r),a?t.setAttribute("srcset",a):t.removeAttribute("srcset"),t.setAttribute("loading","eager"),i.push(t);var d=e.indexOf(t);d>=0&&e.splice(d,1),t.complete?g.call(t,null):(t.addEventListener("load",g,{once:!0}),t.addEventListener("error",g,{once:!0}));try{n=new Event("jetpack-lazy-loaded-image",{bubbles:!0,cancelable:!0})}catch(o){(n=document.createEvent("Event")).initEvent("jetpack-lazy-loaded-image",!0,!0)}t.dispatchEvent(n)}}function g(){var n=i.indexOf(this);n>=0&&i.splice(n,1),t&&0===e.length&&0===i.length&&(t.parentNode.removeChild(t),t=null)}r&&(r.addEventListener("is.post-load",d),r.addEventListener("jetpack-lazy-images-load",d))};"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t);var n=window;for(var a in e)n[a]=e[a];e.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})}();
;/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1};C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);t=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return t}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(n=g(b.commentReplyTitleId))&&n.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),n=t&&t.firstChild.textContent,d=this,o=m(d,"belowelement"),i=m(d,"commentid"),r=m(d,"respondelement"),t=m(d,"postid"),n=m(d,"replyto")||n;o&&i&&r&&t&&!1===v.addComment.moveForm(o,i,r,t,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i=g(e);h=g(n);var r,l,a,m,c,s=g(b.parentIdFieldId),y=g(b.postIdFieldId),p=(c=g(b.commentReplyTitleId))&&c.firstChild,u=p&&p.nextSibling;if(i&&h&&s){void 0===o&&(o=p&&p.textContent),m=h,e=b.temporaryFormId,n=g(e),c=(c=g(b.commentReplyTitleId))?c.firstChild.textContent:"",n||((n=E.createElement("div")).id=e,n.style.display="none",n.textContent=c,m.parentNode.insertBefore(n,m)),d&&y&&(y.value=d),s.value=t,I.style.display="",i.parentNode.insertBefore(h,i.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(r=C.elements[f],l=!1,"getComputedStyle"in v?a=v.getComputedStyle(r):E.documentElement.currentStyle&&(a=r.currentStyle),(r.offsetWidth<=0&&r.offsetHeight<=0||"hidden"===a.visibility)&&(l=!0),"hidden"!==r.type&&!r.disabled&&!l){r.focus();break}}catch(e){}return!1}}}}(window);
;!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var o=a.data(this,"mousewheel-line-height");j*=o,m*=o,l*=o}else if(2===g.deltaMode){var p=a.data(this,"mousewheel-page-height");j*=p,m*=p,l*=p}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||n<f)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var q=this.getBoundingClientRect();b.offsetX=b.clientX-q.left,b.offsetY=b.clientY-q.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.deltaMode=0,h.unshift(b,j,l,m),e&&window.clearTimeout(e),e=window.setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120==0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in window.document||window.document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.on("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.off("mousewheel",a)}})});
;!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof module&&module.exports?module.exports=a:a(jQuery,window,document)}(function(a){!function(b){var c="function"==typeof define&&define.amd,d="undefined"!=typeof module&&module.exports,e="https:"==document.location.protocol?"https:":"http:";c||(d?require("jquery-mousewheel")(a):a.event.special.mousewheel||a("head").append(decodeURI("%3Cscript src="+e+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),function(){var b,c="mCustomScrollbar",d={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},e=0,f={},g=window.attachEvent&&!window.addEventListener?1:0,h=!1,i=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],j={init:function(b){var b=a.extend(!0,{},d,b),c=k.call(this);if(b.live){var g=b.liveSelector||this.selector||".mCustomScrollbar",h=a(g);if("off"===b.live)return void m(g);f[g]=setTimeout(function(){h.mCustomScrollbar(b),"once"===b.live&&h.length&&m(g)},500)}else m(g);return b.setWidth=b.set_width?b.set_width:b.setWidth,b.setHeight=b.set_height?b.set_height:b.setHeight,b.axis=b.horizontalScroll?"x":n(b.axis),b.scrollInertia=b.scrollInertia>0&&b.scrollInertia<17?17:b.scrollInertia,"object"!=typeof b.mouseWheel&&1==b.mouseWheel&&(b.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),b.mouseWheel.scrollAmount=b.mouseWheelPixels?b.mouseWheelPixels:b.mouseWheel.scrollAmount,b.mouseWheel.normalizeDelta=b.advanced.normalizeMouseWheelDelta?b.advanced.normalizeMouseWheelDelta:b.mouseWheel.normalizeDelta,b.scrollButtons.scrollType=o(b.scrollButtons.scrollType),l(b),a(c).each(function(){var c=a(this);if(!c.data("mCS")){c.data("mCS",{idx:++e,opt:b,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:c.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var d=c.data("mCS"),f=d.opt,g=c.data("mcs-axis"),h=c.data("mcs-scrollbar-position"),k=c.data("mcs-theme");g&&(f.axis=g),h&&(f.scrollbarPosition=h),k&&(f.theme=k,l(f)),p.call(this),d&&f.callbacks.onCreate&&"function"==typeof f.callbacks.onCreate&&f.callbacks.onCreate.call(this),a("#mCSB_"+d.idx+"_container img:not(."+i[2]+")").addClass(i[2]),j.update.call(null,c)}})},update:function(b,c){var d=b||k.call(this);return a(d).each(function(){var b=a(this);if(b.data("mCS")){var d=b.data("mCS"),e=d.opt,f=a("#mCSB_"+d.idx+"_container"),g=a("#mCSB_"+d.idx),h=[a("#mCSB_"+d.idx+"_dragger_vertical"),a("#mCSB_"+d.idx+"_dragger_horizontal")];if(!f.length)return;d.tweenRunning&&U(b),c&&d&&e.callbacks.onBeforeUpdate&&"function"==typeof e.callbacks.onBeforeUpdate&&e.callbacks.onBeforeUpdate.call(this),b.hasClass(i[3])&&b.removeClass(i[3]),b.hasClass(i[4])&&b.removeClass(i[4]),g.css("max-height","none"),g.height()!==b.height()&&g.css("max-height",b.height()),r.call(this),"y"===e.axis||e.advanced.autoExpandHorizontalScroll||f.css("width",q(f)),d.overflowed=w.call(this),A.call(this),e.autoDraggerLength&&t.call(this),u.call(this),y.call(this);var j=[Math.abs(f[0].offsetTop),Math.abs(f[0].offsetLeft)];"x"!==e.axis&&(d.overflowed[0]?h[0].height()>h[0].parent().height()?x.call(this):(V(b,j[0].toString(),{dir:"y",dur:0,overwrite:"none"}),d.contentReset.y=null):(x.call(this),"y"===e.axis?z.call(this):"yx"===e.axis&&d.overflowed[1]&&V(b,j[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==e.axis&&(d.overflowed[1]?h[1].width()>h[1].parent().width()?x.call(this):(V(b,j[1].toString(),{dir:"x",dur:0,overwrite:"none"}),d.contentReset.x=null):(x.call(this),"x"===e.axis?z.call(this):"yx"===e.axis&&d.overflowed[0]&&V(b,j[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),c&&d&&(2===c&&e.callbacks.onImageLoad&&"function"==typeof e.callbacks.onImageLoad?e.callbacks.onImageLoad.call(this):3===c&&e.callbacks.onSelectorChange&&"function"==typeof e.callbacks.onSelectorChange?e.callbacks.onSelectorChange.call(this):e.callbacks.onUpdate&&"function"==typeof e.callbacks.onUpdate&&e.callbacks.onUpdate.call(this)),S.call(this)}})},scrollTo:function(b,c){if(void 0!==b&&null!=b){var d=k.call(this);return a(d).each(function(){var d=a(this);if(d.data("mCS")){var e=d.data("mCS"),f=e.opt,g={trigger:"external",scrollInertia:f.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},h=a.extend(!0,{},g,c),i=Q.call(this,b),j=h.scrollInertia>0&&h.scrollInertia<17?17:h.scrollInertia;i[0]=R.call(this,i[0],"y"),i[1]=R.call(this,i[1],"x"),h.moveDragger&&(i[0]*=e.scrollRatio.y,i[1]*=e.scrollRatio.x),h.dur=ca()?0:j,setTimeout(function(){null!==i[0]&&void 0!==i[0]&&"x"!==f.axis&&e.overflowed[0]&&(h.dir="y",h.overwrite="all",V(d,i[0].toString(),h)),null!==i[1]&&void 0!==i[1]&&"y"!==f.axis&&e.overflowed[1]&&(h.dir="x",h.overwrite="none",V(d,i[1].toString(),h))},h.timeout)}})}},stop:function(){var b=k.call(this);return a(b).each(function(){var b=a(this);b.data("mCS")&&U(b)})},disable:function(b){var c=k.call(this);return a(c).each(function(){var c=a(this);if(c.data("mCS")){c.data("mCS");S.call(this,"remove"),z.call(this),b&&x.call(this),A.call(this,!0),c.addClass(i[3])}})},destroy:function(){var b=k.call(this);return a(b).each(function(){var d=a(this);if(d.data("mCS")){var e=d.data("mCS"),f=e.opt,g=a("#mCSB_"+e.idx),h=a("#mCSB_"+e.idx+"_container"),j=a(".mCSB_"+e.idx+"_scrollbar");f.live&&m(f.liveSelector||a(b).selector),S.call(this,"remove"),z.call(this),x.call(this),d.removeData("mCS"),Z(this,"mcs"),j.remove(),h.find("img."+i[2]).removeClass(i[2]),g.replaceWith(h.contents()),d.removeClass(c+" _mCS_"+e.idx+" "+i[6]+" "+i[7]+" "+i[5]+" "+i[3]).addClass(i[4])}})}},k=function(){return"object"!=typeof a(this)||a(this).length<1?".mCustomScrollbar":this},l=function(b){var c=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],d=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],e=["minimal","minimal-dark"],f=["minimal","minimal-dark"],g=["minimal","minimal-dark"];b.autoDraggerLength=!(a.inArray(b.theme,c)>-1)&&b.autoDraggerLength,b.autoExpandScrollbar=!(a.inArray(b.theme,d)>-1)&&b.autoExpandScrollbar,b.scrollButtons.enable=!(a.inArray(b.theme,e)>-1)&&b.scrollButtons.enable,b.autoHideScrollbar=a.inArray(b.theme,f)>-1||b.autoHideScrollbar,b.scrollbarPosition=a.inArray(b.theme,g)>-1?"outside":b.scrollbarPosition},m=function(a){f[a]&&(clearTimeout(f[a]),Z(f,a))},n=function(a){return"yx"===a||"xy"===a||"auto"===a?"yx":"x"===a||"horizontal"===a?"x":"y"},o=function(a){return"stepped"===a||"pixels"===a||"step"===a||"click"===a?"stepped":"stepless"},p=function(){var b=a(this),d=b.data("mCS"),e=d.opt,f=e.autoExpandScrollbar?" "+i[1]+"_expand":"",g=["<div id='mCSB_"+d.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+e.theme+" mCSB_scrollTools_vertical"+f+"'><div class='"+i[12]+"'><div id='mCSB_"+d.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar'></div></div><div class='mCSB_draggerRail'></div></div></div>","<div id='mCSB_"+d.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+e.theme+" mCSB_scrollTools_horizontal"+f+"'><div class='"+i[12]+"'><div id='mCSB_"+d.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar'></div></div></div><div class='mCSB_draggerRail'></div></div></div>"],h="yx"===e.axis?"mCSB_vertical_horizontal":"x"===e.axis?"mCSB_horizontal":"mCSB_vertical",j="yx"===e.axis?g[0]+g[1]:"x"===e.axis?g[1]:g[0],k="yx"===e.axis?"<div id='mCSB_"+d.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",l=e.autoHideScrollbar?" "+i[6]:"",m="x"!==e.axis&&"rtl"===d.langDir?" "+i[7]:"";e.setWidth&&b.css("width",e.setWidth),e.setHeight&&b.css("height",e.setHeight),e.setLeft="y"!==e.axis&&"rtl"===d.langDir?"989999px":e.setLeft,b.addClass(c+" _mCS_"+d.idx+l+m).wrapInner("<div id='mCSB_"+d.idx+"' class='mCustomScrollBox mCS-"+e.theme+" "+h+"'><div id='mCSB_"+d.idx+"_container' class='mCSB_container' style='position:relative; top:"+e.setTop+"; left:"+e.setLeft+";' dir='"+d.langDir+"' /></div>");var n=a("#mCSB_"+d.idx),o=a("#mCSB_"+d.idx+"_container");"y"===e.axis||e.advanced.autoExpandHorizontalScroll||o.css("width",q(o)),"outside"===e.scrollbarPosition?("static"===b.css("position")&&b.css("position","relative"),b.css("overflow","visible"),n.addClass("mCSB_outside").after(j)):(n.addClass("mCSB_inside").append(j),o.wrap(k)),s.call(this);var p=[a("#mCSB_"+d.idx+"_dragger_vertical"),a("#mCSB_"+d.idx+"_dragger_horizontal")];p[0].css("min-height",p[0].height()),p[1].css("min-width",p[1].width())},q=function(b){var c=[b[0].scrollWidth,Math.max.apply(Math,b.children().map(function(){return a(this).outerWidth(!0)}).get())],d=b.parent().width();return c[0]>d?c[0]:c[1]>d?c[1]:"100%"},r=function(){var b=a(this),c=b.data("mCS"),d=c.opt,e=a("#mCSB_"+c.idx+"_container");if(d.advanced.autoExpandHorizontalScroll&&"y"!==d.axis){e.css({width:"auto","min-width":0,"overflow-x":"scroll"});var f=Math.ceil(e[0].scrollWidth);3===d.advanced.autoExpandHorizontalScroll||2!==d.advanced.autoExpandHorizontalScroll&&f>e.parent().width()?e.css({width:f,"min-width":"100%","overflow-x":"inherit"}):e.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(e[0].getBoundingClientRect().right+.4)-Math.floor(e[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},s=function(){var b=a(this),c=b.data("mCS"),d=c.opt,e=a(".mCSB_"+c.idx+"_scrollbar:first"),f=aa(d.scrollButtons.tabindex)?"tabindex='"+d.scrollButtons.tabindex+"'":"",g=["<a href='#' class='"+i[13]+"' "+f+" />","<a href='#' class='"+i[14]+"' "+f+" />","<a href='#' class='"+i[15]+"' "+f+" />","<a href='#' class='"+i[16]+"' "+f+" />"],h=["x"===d.axis?g[2]:g[0],"x"===d.axis?g[3]:g[1],g[2],g[3]];d.scrollButtons.enable&&e.prepend(h[0]).append(h[1]).next(".mCSB_scrollTools").prepend(h[2]).append(h[3])},t=function(){var b=a(this),c=b.data("mCS"),d=a("#mCSB_"+c.idx),e=a("#mCSB_"+c.idx+"_container"),f=[a("#mCSB_"+c.idx+"_dragger_vertical"),a("#mCSB_"+c.idx+"_dragger_horizontal")],h=[d.height()/e.outerHeight(!1),d.width()/e.outerWidth(!1)],i=[parseInt(f[0].css("min-height")),Math.round(h[0]*f[0].parent().height()),parseInt(f[1].css("min-width")),Math.round(h[1]*f[1].parent().width())],j=g&&i[1]<i[0]?i[0]:i[1],k=g&&i[3]<i[2]?i[2]:i[3];f[0].css({height:j,"max-height":f[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":i[0]+"px"}),f[1].css({width:k,"max-width":f[1].parent().width()-10})},u=function(){var b=a(this),c=b.data("mCS"),d=a("#mCSB_"+c.idx),e=a("#mCSB_"+c.idx+"_container"),f=[a("#mCSB_"+c.idx+"_dragger_vertical"),a("#mCSB_"+c.idx+"_dragger_horizontal")],g=[e.outerHeight(!1)-d.height(),e.outerWidth(!1)-d.width()],h=[g[0]/(f[0].parent().height()-f[0].height()),g[1]/(f[1].parent().width()-f[1].width())];c.scrollRatio={y:h[0],x:h[1]}},v=function(a,b,c){var d=c?i[0]+"_expanded":"",e=a.closest(".mCSB_scrollTools");"active"===b?(a.toggleClass(i[0]+" "+d),e.toggleClass(i[1]),a[0]._draggable=a[0]._draggable?0:1):a[0]._draggable||("hide"===b?(a.removeClass(i[0]),e.removeClass(i[1])):(a.addClass(i[0]),e.addClass(i[1])))},w=function(){var b=a(this),c=b.data("mCS"),d=a("#mCSB_"+c.idx),e=a("#mCSB_"+c.idx+"_container"),f=null==c.overflowed?e.height():e.outerHeight(!1),g=null==c.overflowed?e.width():e.outerWidth(!1),h=e[0].scrollHeight,i=e[0].scrollWidth;return h>f&&(f=h),i>g&&(g=i),[f>d.height(),g>d.width()]},x=function(){var b=a(this),c=b.data("mCS"),d=c.opt,e=a("#mCSB_"+c.idx),f=a("#mCSB_"+c.idx+"_container"),g=[a("#mCSB_"+c.idx+"_dragger_vertical"),a("#mCSB_"+c.idx+"_dragger_horizontal")];if(U(b),("x"!==d.axis&&!c.overflowed[0]||"y"===d.axis&&c.overflowed[0])&&(g[0].add(f).css("top",0),V(b,"_resetY")),"y"!==d.axis&&!c.overflowed[1]||"x"===d.axis&&c.overflowed[1]){var h=dx=0;"rtl"===c.langDir&&(h=e.width()-f.outerWidth(!1),dx=Math.abs(h/c.scrollRatio.x)),f.css("left",h),g[1].css("left",dx),V(b,"_resetX")}},y=function(){function b(){f=setTimeout(function(){a.event.special.mousewheel?(clearTimeout(f),F.call(c[0])):b()},100)}var c=a(this),d=c.data("mCS"),e=d.opt;if(!d.bindEvents){if(C.call(this),e.contentTouchScroll&&D.call(this),E.call(this),e.mouseWheel.enable){var f;b()}K.call(this),M.call(this),e.advanced.autoScrollOnFocus&&L.call(this),e.scrollButtons.enable&&N.call(this),e.keyboard.enable&&O.call(this),d.bindEvents=!0}},z=function(){var b=a(this),c=b.data("mCS"),d=c.opt,e="mCS_"+c.idx,f=".mCSB_"+c.idx+"_scrollbar",g=a("#mCSB_"+c.idx+",#mCSB_"+c.idx+"_container,#mCSB_"+c.idx+"_container_wrapper,"+f+" ."+i[12]+",#mCSB_"+c.idx+"_dragger_vertical,#mCSB_"+c.idx+"_dragger_horizontal,"+f+">a"),h=a("#mCSB_"+c.idx+"_container");d.advanced.releaseDraggableSelectors&&g.add(a(d.advanced.releaseDraggableSelectors)),d.advanced.extraDraggableSelectors&&g.add(a(d.advanced.extraDraggableSelectors)),c.bindEvents&&(a(document).add(a(!H()||top.document)).unbind("."+e),g.each(function(){a(this).unbind("."+e)}),clearTimeout(b[0]._focusTimeout),Z(b[0],"_focusTimeout"),clearTimeout(c.sequential.step),Z(c.sequential,"step"),clearTimeout(h[0].onCompleteTimeout),Z(h[0],"onCompleteTimeout"),c.bindEvents=!1)},A=function(b){var c=a(this),d=c.data("mCS"),e=d.opt,f=a("#mCSB_"+d.idx+"_container_wrapper"),g=f.length?f:a("#mCSB_"+d.idx+"_container"),h=[a("#mCSB_"+d.idx+"_scrollbar_vertical"),a("#mCSB_"+d.idx+"_scrollbar_horizontal")],j=[h[0].find(".mCSB_dragger"),h[1].find(".mCSB_dragger")];"x"!==e.axis&&(d.overflowed[0]&&!b?(h[0].add(j[0]).add(h[0].children("a")).css("display","block"),g.removeClass(i[8]+" "+i[10])):(e.alwaysShowScrollbar?(2!==e.alwaysShowScrollbar&&j[0].css("display","none"),g.removeClass(i[10])):(h[0].css("display","none"),g.addClass(i[10])),g.addClass(i[8]))),"y"!==e.axis&&(d.overflowed[1]&&!b?(h[1].add(j[1]).add(h[1].children("a")).css("display","block"),g.removeClass(i[9]+" "+i[11])):(e.alwaysShowScrollbar?(2!==e.alwaysShowScrollbar&&j[1].css("display","none"),g.removeClass(i[11])):(h[1].css("display","none"),g.addClass(i[11])),g.addClass(i[9]))),d.overflowed[0]||d.overflowed[1]?c.removeClass(i[5]):c.addClass(i[5])},B=function(b){var c=b.type,d=b.target.ownerDocument!==document&&null!==frameElement?[a(frameElement).offset().top,a(frameElement).offset().left]:null,e=H()&&b.target.ownerDocument!==top.document&&null!==frameElement?[a(b.view.frameElement).offset().top,a(b.view.frameElement).offset().left]:[0,0];switch(c){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return d?[b.originalEvent.pageY-d[0]+e[0],b.originalEvent.pageX-d[1]+e[1],!1]:[b.originalEvent.pageY,b.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var f=b.originalEvent.touches[0]||b.originalEvent.changedTouches[0],g=b.originalEvent.touches.length||b.originalEvent.changedTouches.length;return b.target.ownerDocument!==document?[f.screenY,f.screenX,g>1]:[f.pageY,f.pageX,g>1];default:return d?[b.pageY-d[0]+e[0],b.pageX-d[1]+e[1],!1]:[b.pageY,b.pageX,!1]}},C=function(){function b(a,b,d,e){if(m[0].idleTimer=j.scrollInertia<233?250:0,c.attr("id")===l[1])var g="x",h=(c[0].offsetLeft-b+e)*i.scrollRatio.x;else var g="y",h=(c[0].offsetTop-a+d)*i.scrollRatio.y;V(f,h.toString(),{dir:g,drag:!0})}var c,d,e,f=a(this),i=f.data("mCS"),j=i.opt,k="mCS_"+i.idx,l=["mCSB_"+i.idx+"_dragger_vertical","mCSB_"+i.idx+"_dragger_horizontal"],m=a("#mCSB_"+i.idx+"_container"),n=a("#"+l[0]+",#"+l[1]),o=j.advanced.releaseDraggableSelectors?n.add(a(j.advanced.releaseDraggableSelectors)):n,p=j.advanced.extraDraggableSelectors?a(!H()||top.document).add(a(j.advanced.extraDraggableSelectors)):a(!H()||top.document);n.bind("contextmenu."+k,function(a){a.preventDefault()}).bind("mousedown."+k+" touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,function(b){if(b.stopImmediatePropagation(),b.preventDefault(),$(b)){h=!0,g&&(document.onselectstart=function(){return!1}),I.call(m,!1),U(f),c=a(this);var i=c.offset(),k=B(b)[0]-i.top,l=B(b)[1]-i.left,n=c.height()+i.top,o=c.width()+i.left;k<n&&k>0&&l<o&&l>0&&(d=k,e=l),v(c,"active",j.autoExpandScrollbar)}}).bind("touchmove."+k,function(a){a.stopImmediatePropagation(),a.preventDefault();var f=c.offset(),g=B(a)[0]-f.top,h=B(a)[1]-f.left;b(d,e,g,h)}),a(document).add(p).bind("mousemove."+k+" pointermove."+k+" MSPointerMove."+k,function(a){if(c){var f=c.offset(),g=B(a)[0]-f.top,h=B(a)[1]-f.left;if(d===g&&e===h)return;b(d,e,g,h)}}).add(o).bind("mouseup."+k+" touchend."+k+" pointerup."+k+" MSPointerUp."+k,function(a){c&&(v(c,"active",j.autoExpandScrollbar),c=null),h=!1,g&&(document.onselectstart=null),I.call(m,!0)})},D=function(){function c(a){if(!_(a)||h||B(a)[2])return void(b=0);b=1,v=0,w=0,j=1,x.removeClass("mCS_touch_action");var c=D.offset();k=B(a)[0]-c.top,l=B(a)[1]-c.left,K=[B(a)[0],B(a)[1]]}function d(a){if(_(a)&&!h&&!B(a)[2]&&(z.documentTouchScroll||a.preventDefault(),a.stopImmediatePropagation(),(!w||v)&&j)){p=X();var b=C.offset(),c=B(a)[0]-b.top,d=B(a)[1]-b.left;if(F.push(c),G.push(d),K[2]=Math.abs(B(a)[0]-K[0]),K[3]=Math.abs(B(a)[1]-K[1]),y.overflowed[0])var e=E[0].parent().height()-E[0].height(),f=k-c>0&&c-k>-e*y.scrollRatio.y&&(2*K[3]<K[2]||"yx"===z.axis);if(y.overflowed[1])var g=E[1].parent().width()-E[1].width(),m=l-d>0&&d-l>-g*y.scrollRatio.x&&(2*K[2]<K[3]||"yx"===z.axis);f||m?(N||a.preventDefault(),v=1):(w=1,x.addClass("mCS_touch_action")),N&&a.preventDefault(),t="yx"===z.axis?[k-c,l-d]:"x"===z.axis?[null,l-d]:[k-c,null],D[0].idleTimer=250,y.overflowed[0]&&i(t[0],I,"mcsLinearOut","y","all",!0),y.overflowed[1]&&i(t[1],I,"mcsLinearOut","x",J,!0)}}function e(a){if(!_(a)||h||B(a)[2])return void(b=0);b=1,a.stopImmediatePropagation(),U(x),o=X();var c=C.offset();m=B(a)[0]-c.top,n=B(a)[1]-c.left,F=[],G=[]}function f(a){if(_(a)&&!h&&!B(a)[2]){j=0,a.stopImmediatePropagation(),v=0,w=0,q=X();var b=C.offset(),c=B(a)[0]-b.top,d=B(a)[1]-b.left;if(!(q-p>30)){s=1e3/(q-o);var e=s<2.5,f=e?[F[F.length-2],G[G.length-2]]:[0,0];r=e?[c-f[0],d-f[1]]:[c-m,d-n];var k=[Math.abs(r[0]),Math.abs(r[1])];s=e?[Math.abs(r[0]/4),Math.abs(r[1]/4)]:[s,s];var l=[Math.abs(D[0].offsetTop)-r[0]*g(k[0]/s[0],s[0]),Math.abs(D[0].offsetLeft)-r[1]*g(k[1]/s[1],s[1])];t="yx"===z.axis?[l[0],l[1]]:"x"===z.axis?[null,l[1]]:[l[0],null],u=[4*k[0]+z.scrollInertia,4*k[1]+z.scrollInertia];var x=parseInt(z.contentTouchScroll)||0;t[0]=k[0]>x?t[0]:0,t[1]=k[1]>x?t[1]:0,y.overflowed[0]&&i(t[0],u[0],"mcsEaseOut","y",J,!1),y.overflowed[1]&&i(t[1],u[1],"mcsEaseOut","x",J,!1)}}}function g(a,b){var c=[1.5*b,2*b,b/1.5,b/2];return a>90?b>4?c[0]:c[3]:a>60?b>3?c[3]:c[2]:a>30?b>8?c[1]:b>6?c[0]:b>4?b:c[2]:b>8?b:c[3]}function i(a,b,c,d,e,f){a&&V(x,a.toString(),{dur:b,scrollEasing:c,dir:d,overwrite:e,drag:f})}var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x=a(this),y=x.data("mCS"),z=y.opt,A="mCS_"+y.idx,C=a("#mCSB_"+y.idx),D=a("#mCSB_"+y.idx+"_container"),E=[a("#mCSB_"+y.idx+"_dragger_vertical"),a("#mCSB_"+y.idx+"_dragger_horizontal")],F=[],G=[],I=0,J="yx"===z.axis?"none":"all",K=[],L=D.find("iframe"),M=["touchstart."+A+" pointerdown."+A+" MSPointerDown."+A,"touchmove."+A+" pointermove."+A+" MSPointerMove."+A,"touchend."+A+" pointerup."+A+" MSPointerUp."+A],N=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;D.bind(M[0],function(a){c(a)}).bind(M[1],function(a){d(a)}),C.bind(M[0],function(a){e(a)}).bind(M[2],function(a){f(a)}),L.length&&L.each(function(){a(this).bind("load",function(){H(this)&&a(this.contentDocument||this.contentWindow.document).bind(M[0],function(a){c(a),e(a)}).bind(M[1],function(a){d(a)}).bind(M[2],function(a){f(a)})})})},E=function(){function c(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function d(a,b,c){j.type=c&&e?"stepped":"stepless",j.scrollAmount=10,P(f,a,b,"mcsLinearOut",c?60:null)}var e,f=a(this),g=f.data("mCS"),i=g.opt,j=g.sequential,k="mCS_"+g.idx,l=a("#mCSB_"+g.idx+"_container"),m=l.parent();l.bind("mousedown."+k,function(a){b||e||(e=1,h=!0)}).add(document).bind("mousemove."+k,function(a){if(!b&&e&&c()){var f=l.offset(),h=B(a)[0]-f.top+l[0].offsetTop,k=B(a)[1]-f.left+l[0].offsetLeft;h>0&&h<m.height()&&k>0&&k<m.width()?j.step&&d("off",null,"stepped"):("x"!==i.axis&&g.overflowed[0]&&(h<0?d("on",38):h>m.height()&&d("on",40)),"y"!==i.axis&&g.overflowed[1]&&(k<0?d("on",37):k>m.width()&&d("on",39)))}}).bind("mouseup."+k+" dragend."+k,function(a){b||(e&&(e=0,d("off",null)),h=!1)})},F=function(){function b(b,f){if(U(c),!J(c,b.target)){var j="auto"!==e.mouseWheel.deltaFactor?parseInt(e.mouseWheel.deltaFactor):g&&b.deltaFactor<100?100:b.deltaFactor||100,k=e.scrollInertia;if("x"===e.axis||"x"===e.mouseWheel.axis)var l="x",m=[Math.round(j*d.scrollRatio.x),parseInt(e.mouseWheel.scrollAmount)],n="auto"!==e.mouseWheel.scrollAmount?m[1]:m[0]>=h.width()?.9*h.width():m[0],o=Math.abs(a("#mCSB_"+d.idx+"_container")[0].offsetLeft),p=i[1][0].offsetLeft,q=i[1].parent().width()-i[1].width(),r="y"===e.mouseWheel.axis?b.deltaY||f:b.deltaX;else var l="y",m=[Math.round(j*d.scrollRatio.y),parseInt(e.mouseWheel.scrollAmount)],n="auto"!==e.mouseWheel.scrollAmount?m[1]:m[0]>=h.height()?.9*h.height():m[0],o=Math.abs(a("#mCSB_"+d.idx+"_container")[0].offsetTop),p=i[0][0].offsetTop,q=i[0].parent().height()-i[0].height(),r=b.deltaY||f;"y"===l&&!d.overflowed[0]||"x"===l&&!d.overflowed[1]||((e.mouseWheel.invert||b.webkitDirectionInvertedFromDevice)&&(r=-r),e.mouseWheel.normalizeDelta&&(r=r<0?-1:1),(r>0&&0!==p||r<0&&p!==q||e.mouseWheel.preventDefault)&&(b.stopImmediatePropagation(),b.preventDefault()),b.deltaFactor<5&&!e.mouseWheel.normalizeDelta&&(n=b.deltaFactor,k=17),V(c,(o-r*n).toString(),{dir:l,dur:k}))}}if(a(this).data("mCS")){var c=a(this),d=c.data("mCS"),e=d.opt,f="mCS_"+d.idx,h=a("#mCSB_"+d.idx),i=[a("#mCSB_"+d.idx+"_dragger_vertical"),a("#mCSB_"+d.idx+"_dragger_horizontal")],j=a("#mCSB_"+d.idx+"_container").find("iframe");j.length&&j.each(function(){a(this).bind("load",function(){H(this)&&a(this.contentDocument||this.contentWindow.document).bind("mousewheel."+f,function(a,c){b(a,c)})})}),h.bind("mousewheel."+f,function(a,c){b(a,c)})}},G=new Object,H=function(b){var c=!1,d=!1,e=null;if(void 0===b?d="#empty":void 0!==a(b).attr("id")&&(d=a(b).attr("id")),!1!==d&&void 0!==G[d])return G[d];if(b){try{var f=b.contentDocument||b.contentWindow.document;e=f.body.innerHTML}catch(a){}c=null!==e}else{try{var f=top.document;e=f.body.innerHTML}catch(a){}c=null!==e}return!1!==d&&(G[d]=c),c},I=function(a){var b=this.find("iframe");if(b.length){var c=a?"auto":"none";b.css("pointer-events",c)}},J=function(b,c){var d=c.nodeName.toLowerCase(),e=b.data("mCS").opt.mouseWheel.disableOver,f=["select","textarea"];return a.inArray(d,e)>-1&&!(a.inArray(d,f)>-1&&!a(c).is(":focus"))},K=function(){var b,c=a(this),d=c.data("mCS"),e="mCS_"+d.idx,f=a("#mCSB_"+d.idx+"_container"),g=f.parent(),j=a(".mCSB_"+d.idx+"_scrollbar ."+i[12]);j.bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,function(c){h=!0,a(c.target).hasClass("mCSB_dragger")||(b=1)}).bind("touchend."+e+" pointerup."+e+" MSPointerUp."+e,function(a){h=!1}).bind("click."+e,function(e){if(b&&(b=0,a(e.target).hasClass(i[12])||a(e.target).hasClass("mCSB_draggerRail"))){U(c);var h=a(this),j=h.find(".mCSB_dragger");if(h.parent(".mCSB_scrollTools_horizontal").length>0){if(!d.overflowed[1])return;var k="x",l=e.pageX>j.offset().left?-1:1,m=Math.abs(f[0].offsetLeft)-l*(.9*g.width())}else{if(!d.overflowed[0])return;var k="y",l=e.pageY>j.offset().top?-1:1,m=Math.abs(f[0].offsetTop)-l*(.9*g.height())}V(c,m.toString(),{dir:k,scrollEasing:"mcsEaseInOut"})}})},L=function(){var b=a(this),c=b.data("mCS"),d=c.opt,e="mCS_"+c.idx,f=a("#mCSB_"+c.idx+"_container"),g=f.parent();f.bind("focusin."+e,function(c){var e=a(document.activeElement),h=f.find(".mCustomScrollBox").length;e.is(d.advanced.autoScrollOnFocus)&&(U(b),clearTimeout(b[0]._focusTimeout),b[0]._focusTimer=h?17*h:0,b[0]._focusTimeout=setTimeout(function(){var a=[ba(e)[0],ba(e)[1]],c=[f[0].offsetTop,f[0].offsetLeft],h=[c[0]+a[0]>=0&&c[0]+a[0]<g.height()-e.outerHeight(!1),c[1]+a[1]>=0&&c[0]+a[1]<g.width()-e.outerWidth(!1)],i="yx"!==d.axis||h[0]||h[1]?"all":"none";"x"===d.axis||h[0]||V(b,a[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:i,dur:0}),"y"===d.axis||h[1]||V(b,a[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:i,dur:0})},b[0]._focusTimer))})},M=function(){var b=a(this),c=b.data("mCS"),d="mCS_"+c.idx,e=a("#mCSB_"+c.idx+"_container").parent();e.bind("scroll."+d,function(b){0===e.scrollTop()&&0===e.scrollLeft()||a(".mCSB_"+c.idx+"_scrollbar").css("visibility","hidden")})},N=function(){var b=a(this),c=b.data("mCS"),d=c.opt,e=c.sequential,f="mCS_"+c.idx,g=".mCSB_"+c.idx+"_scrollbar";a(g+">a").bind("contextmenu."+f,function(a){a.preventDefault()}).bind("mousedown."+f+" touchstart."+f+" pointerdown."+f+" MSPointerDown."+f+" mouseup."+f+" touchend."+f+" pointerup."+f+" MSPointerUp."+f+" mouseout."+f+" pointerout."+f+" MSPointerOut."+f+" click."+f,function(f){function g(a,c){e.scrollAmount=d.scrollButtons.scrollAmount,P(b,a,c)}if(f.preventDefault(),$(f)){var i=a(this).attr("class");switch(e.type=d.scrollButtons.scrollType,f.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===e.type)return;h=!0,c.tweenRunning=!1,g("on",i);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===e.type)return;h=!1,e.dir&&g("off",i);break;case"click":if("stepped"!==e.type||c.tweenRunning)return;g("on",i)}}})},O=function(){function b(b){function g(a,b){f.type=e.keyboard.scrollType,f.scrollAmount=e.keyboard.scrollAmount,"stepped"===f.type&&d.tweenRunning||P(c,a,b)}switch(b.type){case"blur":d.tweenRunning&&f.dir&&g("off",null);break;case"keydown":case"keyup":var h=b.keyCode?b.keyCode:b.which,l="on";if("x"!==e.axis&&(38===h||40===h)||"y"!==e.axis&&(37===h||39===h)){if((38===h||40===h)&&!d.overflowed[0]||(37===h||39===h)&&!d.overflowed[1])return;"keyup"===b.type&&(l="off"),a(document.activeElement).is(k)||(b.preventDefault(),b.stopImmediatePropagation(),g(l,h))}else if(33===h||34===h){if((d.overflowed[0]||d.overflowed[1])&&(b.preventDefault(),b.stopImmediatePropagation()),"keyup"===b.type){U(c);var m=34===h?-1:1;if("x"===e.axis||"yx"===e.axis&&d.overflowed[1]&&!d.overflowed[0])var n="x",o=Math.abs(i[0].offsetLeft)-m*(.9*j.width());else var n="y",o=Math.abs(i[0].offsetTop)-m*(.9*j.height());V(c,o.toString(),{dir:n,scrollEasing:"mcsEaseInOut"})}}else if((35===h||36===h)&&!a(document.activeElement).is(k)&&((d.overflowed[0]||d.overflowed[1])&&(b.preventDefault(),b.stopImmediatePropagation()),"keyup"===b.type)){if("x"===e.axis||"yx"===e.axis&&d.overflowed[1]&&!d.overflowed[0])var n="x",o=35===h?Math.abs(j.width()-i.outerWidth(!1)):0;else var n="y",o=35===h?Math.abs(j.height()-i.outerHeight(!1)):0;V(c,o.toString(),{dir:n,scrollEasing:"mcsEaseInOut"})}}}var c=a(this),d=c.data("mCS"),e=d.opt,f=d.sequential,g="mCS_"+d.idx,h=a("#mCSB_"+d.idx),i=a("#mCSB_"+d.idx+"_container"),j=i.parent(),k="input,textarea,select,datalist,keygen,[contenteditable='true']",l=i.find("iframe"),m=["blur."+g+" keydown."+g+" keyup."+g];l.length&&l.each(function(){a(this).bind("load",function(){H(this)&&a(this.contentDocument||this.contentWindow.document).bind(m[0],function(a){b(a)})})}),h.attr("tabindex","0").bind(m[0],function(a){b(a)})},P=function(b,c,d,e,f){function g(a){j.snapAmount&&(k.scrollAmount=j.snapAmount instanceof Array?"x"===k.dir[0]?j.snapAmount[1]:j.snapAmount[0]:j.snapAmount);var c="stepped"!==k.type,d=f||(a?c?n/1.5:o:1e3/60),i=a?c?7.5:40:2.5,m=[Math.abs(l[0].offsetTop),Math.abs(l[0].offsetLeft)],p=[h.scrollRatio.y>10?10:h.scrollRatio.y,h.scrollRatio.x>10?10:h.scrollRatio.x],q="x"===k.dir[0]?m[1]+k.dir[1]*(p[1]*i):m[0]+k.dir[1]*(p[0]*i),r="x"===k.dir[0]?m[1]+k.dir[1]*parseInt(k.scrollAmount):m[0]+k.dir[1]*parseInt(k.scrollAmount),s="auto"!==k.scrollAmount?r:q,t=e||(a?c?"mcsLinearOut":"mcsEaseInOut":"mcsLinear"),u=!!a;if(a&&d<17&&(s="x"===k.dir[0]?m[1]:m[0]),V(b,s.toString(),{dir:k.dir[0],scrollEasing:t,dur:d,onComplete:u}),a)return void(k.dir=!1);clearTimeout(k.step),k.step=setTimeout(function(){g()},d)}var h=b.data("mCS"),j=h.opt,k=h.sequential,l=a("#mCSB_"+h.idx+"_container"),m="stepped"===k.type,n=j.scrollInertia<26?26:j.scrollInertia,o=j.scrollInertia<1?17:j.scrollInertia;switch(c){case"on":if(k.dir=[d===i[16]||d===i[15]||39===d||37===d?"x":"y",d===i[13]||d===i[15]||38===d||37===d?-1:1],U(b),aa(d)&&"stepped"===k.type)return;g(m);break;case"off":!function(){clearTimeout(k.step),Z(k,"step"),U(b)}(),(m||h.tweenRunning&&k.dir)&&g(!0)}},Q=function(b){var c=a(this).data("mCS").opt,d=[];return"function"==typeof b&&(b=b()),b instanceof Array?d=b.length>1?[b[0],b[1]]:"x"===c.axis?[null,b[0]]:[b[0],null]:(d[0]=b.y?b.y:b.x||"x"===c.axis?null:b,d[1]=b.x?b.x:b.y||"y"===c.axis?null:b),"function"==typeof d[0]&&(d[0]=d[0]()),"function"==typeof d[1]&&(d[1]=d[1]()),d},R=function(b,c){if(null!=b&&void 0!==b){var d=a(this),e=d.data("mCS"),f=e.opt,g=a("#mCSB_"+e.idx+"_container"),h=g.parent(),i=typeof b;c||(c="x"===f.axis?"x":"y");var k="x"===c?g.outerWidth(!1)-h.width():g.outerHeight(!1)-h.height(),l="x"===c?g[0].offsetLeft:g[0].offsetTop,m="x"===c?"left":"top";switch(i){case"function":return b();case"object":var n=b.jquery?b:a(b);if(!n.length)return;return"x"===c?ba(n)[1]:ba(n)[0];case"string":case"number":if(aa(b))return Math.abs(b);if(-1!==b.indexOf("%"))return Math.abs(k*parseInt(b)/100);if(-1!==b.indexOf("-="))return Math.abs(l-parseInt(b.split("-=")[1]));if(-1!==b.indexOf("+=")){var o=l+parseInt(b.split("+=")[1]);return o>=0?0:Math.abs(o)}if(-1!==b.indexOf("px")&&aa(b.split("px")[0]))return Math.abs(b.split("px")[0]);if("top"===b||"left"===b)return 0;if("bottom"===b)return Math.abs(h.height()-g.outerHeight(!1));if("right"===b)return Math.abs(h.width()-g.outerWidth(!1));if("first"===b||"last"===b){var n=g.find(":"+b);return"x"===c?ba(n)[1]:ba(n)[0]}return a(b).length?"x"===c?ba(a(b))[1]:ba(a(b))[0]:(g.css(m,b),void j.update.call(null,d[0]))}}},S=function(b){function c(){if(clearTimeout(l[0].autoUpdate),0===g.parents("html").length)return void(g=null);l[0].autoUpdate=setTimeout(function(){return k.advanced.updateOnSelectorChange&&(h.poll.change.n=e(),h.poll.change.n!==h.poll.change.o)?(h.poll.change.o=h.poll.change.n,void f(3)):k.advanced.updateOnContentResize&&(h.poll.size.n=g[0].scrollHeight+g[0].scrollWidth+l[0].offsetHeight+g[0].offsetHeight+g[0].offsetWidth,h.poll.size.n!==h.poll.size.o)?(h.poll.size.o=h.poll.size.n,void f(1)):!k.advanced.updateOnImageLoad||"auto"===k.advanced.updateOnImageLoad&&"y"===k.axis||(h.poll.img.n=l.find("img").length,h.poll.img.n===h.poll.img.o)?void((k.advanced.updateOnSelectorChange||k.advanced.updateOnContentResize||k.advanced.updateOnImageLoad)&&c()):(h.poll.img.o=h.poll.img.n,
void l.find("img").each(function(){d(this)}))},k.advanced.autoUpdateTimeout)}function d(b){function c(){this.onload=null,a(b).addClass(i[2]),f(2)}if(a(b).hasClass(i[2]))return void f();var d=new Image;d.onload=function(a,b){return function(){return b.apply(a,arguments)}}(d,c),d.src=b.src}function e(){!0===k.advanced.updateOnSelectorChange&&(k.advanced.updateOnSelectorChange="*");var a=0,b=l.find(k.advanced.updateOnSelectorChange);return k.advanced.updateOnSelectorChange&&b.length>0&&b.each(function(){a+=this.offsetHeight+this.offsetWidth}),a}function f(a){clearTimeout(l[0].autoUpdate),j.update.call(null,g[0],a)}var g=a(this),h=g.data("mCS"),k=h.opt,l=a("#mCSB_"+h.idx+"_container");if(b)return clearTimeout(l[0].autoUpdate),void Z(l[0],"autoUpdate");c()},T=function(a,b,c){return Math.round(a/b)*b-c},U=function(b){var c=b.data("mCS");a("#mCSB_"+c.idx+"_container,#mCSB_"+c.idx+"_container_wrapper,#mCSB_"+c.idx+"_dragger_vertical,#mCSB_"+c.idx+"_dragger_horizontal").each(function(){Y.call(this)})},V=function(b,c,d){function e(a){return h&&i.callbacks[a]&&"function"==typeof i.callbacks[a]}function f(){return[i.callbacks.alwaysTriggerOffsets||t>=u[0]+x,i.callbacks.alwaysTriggerOffsets||t<=-y]}function g(){var a=[m[0].offsetTop,m[0].offsetLeft],c=[r[0].offsetTop,r[0].offsetLeft],e=[m.outerHeight(!1),m.outerWidth(!1)],f=[l.height(),l.width()];b[0].mcs={content:m,top:a[0],left:a[1],draggerTop:c[0],draggerLeft:c[1],topPct:Math.round(100*Math.abs(a[0])/(Math.abs(e[0])-f[0])),leftPct:Math.round(100*Math.abs(a[1])/(Math.abs(e[1])-f[1])),direction:d.dir}}var h=b.data("mCS"),i=h.opt,j={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:i.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},d=a.extend(j,d),k=[d.dur,d.drag?0:d.dur],l=a("#mCSB_"+h.idx),m=a("#mCSB_"+h.idx+"_container"),n=m.parent(),o=i.callbacks.onTotalScrollOffset?Q.call(b,i.callbacks.onTotalScrollOffset):[0,0],p=i.callbacks.onTotalScrollBackOffset?Q.call(b,i.callbacks.onTotalScrollBackOffset):[0,0];if(h.trigger=d.trigger,0===n.scrollTop()&&0===n.scrollLeft()||(a(".mCSB_"+h.idx+"_scrollbar").css("visibility","visible"),n.scrollTop(0).scrollLeft(0)),"_resetY"!==c||h.contentReset.y||(e("onOverflowYNone")&&i.callbacks.onOverflowYNone.call(b[0]),h.contentReset.y=1),"_resetX"!==c||h.contentReset.x||(e("onOverflowXNone")&&i.callbacks.onOverflowXNone.call(b[0]),h.contentReset.x=1),"_resetY"!==c&&"_resetX"!==c){if(!h.contentReset.y&&b[0].mcs||!h.overflowed[0]||(e("onOverflowY")&&i.callbacks.onOverflowY.call(b[0]),h.contentReset.x=null),!h.contentReset.x&&b[0].mcs||!h.overflowed[1]||(e("onOverflowX")&&i.callbacks.onOverflowX.call(b[0]),h.contentReset.x=null),i.snapAmount){var q=i.snapAmount instanceof Array?"x"===d.dir?i.snapAmount[1]:i.snapAmount[0]:i.snapAmount;c=T(c,q,i.snapOffset)}switch(d.dir){case"x":var r=a("#mCSB_"+h.idx+"_dragger_horizontal"),s="left",t=m[0].offsetLeft,u=[l.width()-m.outerWidth(!1),r.parent().width()-r.width()],w=[c,0===c?0:c/h.scrollRatio.x],x=o[1],y=p[1],z=x>0?x/h.scrollRatio.x:0,A=y>0?y/h.scrollRatio.x:0;break;case"y":var r=a("#mCSB_"+h.idx+"_dragger_vertical"),s="top",t=m[0].offsetTop,u=[l.height()-m.outerHeight(!1),r.parent().height()-r.height()],w=[c,0===c?0:c/h.scrollRatio.y],x=o[0],y=p[0],z=x>0?x/h.scrollRatio.y:0,A=y>0?y/h.scrollRatio.y:0}w[1]<0||0===w[0]&&0===w[1]?w=[0,0]:w[1]>=u[1]?w=[u[0],u[1]]:w[0]=-w[0],b[0].mcs||(g(),e("onInit")&&i.callbacks.onInit.call(b[0])),clearTimeout(m[0].onCompleteTimeout),W(r[0],s,Math.round(w[1]),k[1],d.scrollEasing),!h.tweenRunning&&(0===t&&w[0]>=0||t===u[0]&&w[0]<=u[0])||W(m[0],s,Math.round(w[0]),k[0],d.scrollEasing,d.overwrite,{onStart:function(){d.callbacks&&d.onStart&&!h.tweenRunning&&(e("onScrollStart")&&(g(),i.callbacks.onScrollStart.call(b[0])),h.tweenRunning=!0,v(r),h.cbOffsets=f())},onUpdate:function(){d.callbacks&&d.onUpdate&&e("whileScrolling")&&(g(),i.callbacks.whileScrolling.call(b[0]))},onComplete:function(){if(d.callbacks&&d.onComplete){"yx"===i.axis&&clearTimeout(m[0].onCompleteTimeout);var a=m[0].idleTimer||0;m[0].onCompleteTimeout=setTimeout(function(){e("onScroll")&&(g(),i.callbacks.onScroll.call(b[0])),e("onTotalScroll")&&w[1]>=u[1]-z&&h.cbOffsets[0]&&(g(),i.callbacks.onTotalScroll.call(b[0])),e("onTotalScrollBack")&&w[1]<=A&&h.cbOffsets[1]&&(g(),i.callbacks.onTotalScrollBack.call(b[0])),h.tweenRunning=!1,m[0].idleTimer=0,v(r,"hide")},a)}}})}},W=function(a,b,c,d,e,f,g){function h(){t.stop||(q||m.call(),q=X()-p,i(),q>=t.time&&(t.time=q>t.time?q+k-(q-t.time):q+k-1,t.time<q+1&&(t.time=q+1)),t.time<d?t.id=l(h):o.call())}function i(){d>0?(t.currVal=j(t.time,r,u,d,e),s[b]=Math.round(t.currVal)+"px"):s[b]=c+"px",n.call()}function j(a,b,c,d,e){switch(e){case"linear":case"mcsLinear":return c*a/d+b;case"mcsLinearOut":return a/=d,a--,c*Math.sqrt(1-a*a)+b;case"easeInOutSmooth":return(a/=d/2)<1?c/2*a*a+b:(a--,-c/2*(a*(a-2)-1)+b);case"easeInOutStrong":return(a/=d/2)<1?c/2*Math.pow(2,10*(a-1))+b:(a--,c/2*(2-Math.pow(2,-10*a))+b);case"easeInOut":case"mcsEaseInOut":return(a/=d/2)<1?c/2*a*a*a+b:(a-=2,c/2*(a*a*a+2)+b);case"easeOutSmooth":return a/=d,a--,-c*(a*a*a*a-1)+b;case"easeOutStrong":return c*(1-Math.pow(2,-10*a/d))+b;case"easeOut":case"mcsEaseOut":default:var f=(a/=d)*a,g=f*a;return b+c*(.499999999999997*g*f+-2.5*f*f+5.5*g+-6.5*f+4*a)}}a._mTween||(a._mTween={top:{},left:{}});var k,l,g=g||{},m=g.onStart||function(){},n=g.onUpdate||function(){},o=g.onComplete||function(){},p=X(),q=0,r=a.offsetTop,s=a.style,t=a._mTween[b];"left"===b&&(r=a.offsetLeft);var u=c-r;t.stop=0,"none"!==f&&function(){null!=t.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(t.id):clearTimeout(t.id),t.id=null)}(),function(){k=1e3/60,t.time=q+k,l=window.requestAnimationFrame?window.requestAnimationFrame:function(a){return i(),setTimeout(a,.01)},t.id=l(h)}()},X=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Y=function(){var a=this;a._mTween||(a._mTween={top:{},left:{}});for(var b=["top","left"],c=0;c<b.length;c++){var d=b[c];a._mTween[d].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(a._mTween[d].id):clearTimeout(a._mTween[d].id),a._mTween[d].id=null,a._mTween[d].stop=1)}},Z=function(a,b){try{delete a[b]}catch(c){a[b]=null}},$=function(a){return!(a.which&&1!==a.which)},_=function(a){var b=a.originalEvent.pointerType;return!(b&&"touch"!==b&&2!==b)},aa=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},ba=function(a){var b=a.parents(".mCSB_container");return[a.offset().top-b.offset().top,a.offset().left-b.offset().left]},ca=function(){var a=function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)if(a[b]+"Hidden"in document)return a[b]+"Hidden";return null}();return!!a&&document[a]};a.fn[c]=function(b){return j[b]?j[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist"):j.init.apply(this,arguments)},a[c]=function(b){return j[b]?j[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist"):j.init.apply(this,arguments)},a[c].defaults=d,window[c]=!0,a(window).bind("load",function(){a(".mCustomScrollbar")[c](),a.extend(a.expr[":"],{mcsInView:a.expr[":"].mcsInView||function(b){var c,d,e=a(b),f=e.parents(".mCSB_container");if(f.length)return c=f.parent(),d=[f[0].offsetTop,f[0].offsetLeft],d[0]+ba(e)[0]>=0&&d[0]+ba(e)[0]<c.height()-e.outerHeight(!1)&&d[1]+ba(e)[1]>=0&&d[1]+ba(e)[1]<c.width()-e.outerWidth(!1)},mcsInSight:a.expr[":"].mcsInSight||function(b,c,d){var e,f,g,h,i=a(b),j=i.parents(".mCSB_container"),k="exact"===d[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(j.length)return e=[i.outerHeight(!1),i.outerWidth(!1)],g=[j[0].offsetTop+ba(i)[0],j[0].offsetLeft+ba(i)[1]],f=[j.parent()[0].offsetHeight,j.parent()[0].offsetWidth],h=[e[0]<f[0]?k[0]:k[1],e[1]<f[1]?k[0]:k[1]],g[0]-f[0]*h[0][0]<0&&g[0]+e[0]-f[0]*h[0][1]>=0&&g[1]-f[1]*h[1][0]<0&&g[1]+e[1]-f[1]*h[1][1]>=0},mcsOverflow:a.expr[":"].mcsOverflow||function(b){var c=a(b).data("mCS");if(c)return c.overflowed[0]||c.overflowed[1]}})})}()}()});
;/*! This file is auto-generated */
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);
;/*
 * Inline Form Validation Engine 2.6.2, jQuery plugin
 *
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 *
 * 2.0 Rewrite by Olivier Refalo
 * http://www.crionics.com
 *
 * Form validation engine allowing custom regex rules to be added.
 * Licensed under the MIT License
 */
 (function($) {

	"use strict";

	var methods = {

		/**
		* Kind of the constructor, called before any action
		* @param {Map} user options
		*/
		init: function(options) {
			var form = this;
			if (!form.data('jqv') || form.data('jqv') == null ) {
				options = methods._saveOptions(form, options);
				// bind all formError elements to close on click
				$(document).on("click", ".formError", function() {
					$(this).addClass('hide-form-message').fadeOut(250, function() {
						// remove prompt once invisible
						$(this).closest('.formError').remove();
					});
				});
			}
			return this;
		 },
		/**
		* Attachs jQuery.validationEngine to form.submit and field.blur events
		* Takes an optional params: a list of options
		* ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
		*/
		attach: function(userOptions) {

			var form = this;
			var options;

			if(userOptions)
				options = methods._saveOptions(form, userOptions);
			else
				options = form.data('jqv');

			options.validateAttribute = (form.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
			if (options.binded) {

				// delegate fields
				form.on(options.validationEventTrigger, "["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
				form.on("click", "["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]", methods._onFieldEvent);
				form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]", {"delay": 300}, methods._onFieldEvent);
			}
			if (options.autoPositionUpdate) {
				$(window).bind("resize", {
					"noAnimation": true,
					"formElem": form
				}, methods.updatePromptsPosition);
			}
			form.on("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			// bind form.submit
			form.on("submit", methods._onSubmitEvent);
			return this;
		},
		/**
		* Unregisters any bindings that may point to jQuery.validaitonEngine
		*/
		detach: function() {

			var form = this;
			var options = form.data('jqv');

			// unbind fields
			form.off(options.validationEventTrigger, "["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
			form.off("click", "["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]", methods._onFieldEvent);
			form.off(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]", methods._onFieldEvent);

			// unbind form.submit
			form.off("submit", methods._onSubmitEvent);
			form.removeData('jqv');

			form.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			if (options.autoPositionUpdate)
				$(window).off("resize", methods.updatePromptsPosition);

			return this;
		},
		/**
		* Validates either a form or a list of fields, shows prompts accordingly.
		* Note: There is no ajax form validation with this method, only field ajax validation are evaluated
		*
		* @return true if the form validates, false if it fails
		*/
		validate: function(userOptions) {
			var element = $(this);
			var valid = null;
			var options;

			if (element.is("form") || element.hasClass("validationEngineContainer")) {
				if (element.hasClass('validating')) {
					// form is already validating.
					// Should abort old validation and start new one. I don't know how to implement it.
					return false;
				} else {
					element.addClass('validating');
					if(userOptions)
						options = methods._saveOptions(element, userOptions);
					else
						options = element.data('jqv');
					var valid = methods._validateFields(this);

					// If the form doesn't validate, clear the 'validating' class before the user has a chance to submit again
					setTimeout(function(){
						element.removeClass('validating');
					}, 100);
					if (valid && options.onSuccess) {
						options.onSuccess();
					} else if (!valid && options.onFailure) {
						options.onFailure();
					}
				}
			} else if (element.is('form') || element.hasClass('validationEngineContainer')) {
				element.removeClass('validating');
			} else {
				// field validation
		                var form = element.closest('form, .validationEngineContainer');
		                options = (form.data('jqv')) ? form.data('jqv') : $.validationEngine.defaults;
		                valid = methods._validateField(element, options);

		                if (valid && options.onFieldSuccess)
		                    options.onFieldSuccess();
		                else if (options.onFieldFailure && options.InvalidFields.length > 0) {
		                    options.onFieldFailure();
		                }

		                return !valid;
			}
			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, valid);
			}
			return valid;
		},
		/**
		*  Redraw prompts position, useful when you change the DOM state when validating
		*/
		updatePromptsPosition: function(event) {

			if (event && this == window) {
				var form = event.data.formElem;
				var noAnimation = event.data.noAnimation;
			}
			else
				var form = $(this.closest('form, .validationEngineContainer'));

			var options = form.data('jqv');
			// No option, take default one
			if (!options)
				options = methods._saveOptions(form, options);
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){
				var field = $(this);
				if (options.prettySelect && field.is(":hidden"))
				  field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
				var prompt = methods._getPrompt(field);
				var promptText = $(prompt).find(".formErrorContent").html();

				if(prompt)
					methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
			});
			return this;
		},
		/**
		* Displays a prompt on a element.
		* Note that the element needs an id!
		*
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
		*/
		showPrompt: function(promptText, type, promptPosition, showArrow) {
			var form = this.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			// No option, take default one
			if(!options)
				options = methods._saveOptions(this, options);
			if(promptPosition)
				options.promptPosition=promptPosition;
			options.showArrow = showArrow==true;

			methods._showPrompt(this, promptText, type, false, options);
			return this;
		},
		/**
		* Closes form error prompts, CAN be invidual
		*/
		hide: function() {
			 var form = $(this).closest('form, .validationEngineContainer');
			 var options = form.data('jqv');
			 // No option, take default one
			 if (!options)
				options = methods._saveOptions(form, options);
			 var fadeDuration = (options && options.fadeDuration) ? options.fadeDuration : 0.3;
			 var closingtag;

			 if(form.is("form") || form.hasClass("validationEngineContainer")) {
				 closingtag = "parentForm"+methods._getClassName($(form).attr("id"));
			 } else {
				 closingtag = methods._getClassName($(form).attr("id")) +"formError";
			 }
			 $('.'+closingtag).fadeTo(fadeDuration, 0, function() {
				 $(this).closest('.formError').remove();
			 });
			 return this;
		 },
		 /**
		 * Closes all error prompts on the page
		 */
		 hideAll: function() {
			 var form = this;
			 var options = form.data('jqv');
			 var duration = options ? options.fadeDuration:300;
			 $('.formError').fadeTo(duration, 0, function() {
				 $(this).closest('.formError').remove();
			 });
			 return this;
		 },
		/**
		* Typically called when user exists a field using tab or a mouse click, triggers a field
		* validation
		*/
		_onFieldEvent: function(event) {
			var field = $(this);
			var form = field.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			// No option, take default one
			if (!options)
				options = methods._saveOptions(form, options);
			options.eventTrigger = "field";

            if (options.notEmpty == true){

                if(field.val().length > 0){
                    // validate the current field
                    window.setTimeout(function() {
                        methods._validateField(field, options);
                    }, (event.data) ? event.data.delay : 0);

                }

            }else{

                // validate the current field
                window.setTimeout(function() {
                    methods._validateField(field, options);
                }, (event.data) ? event.data.delay : 0);

            }




		},
		/**
		* Called when the form is submited, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @return false if form submission needs to be cancelled
		*/
		_onSubmitEvent: function() {
			var form = $(this);
			var options = form.data('jqv');

			//check if it is trigger from skipped button
			if (form.data("jqv_submitButton")){
				var submitButton = $("#" + form.data("jqv_submitButton"));
				if (submitButton){
					if (submitButton.length > 0){
						if (submitButton.hasClass("validate-skip") || submitButton.attr("data-validation-engine-skip") == "true")
							return true;
					}
				}
			}

			options.eventTrigger = "submit";

			// validate each field
			// (- skip field ajax validation, not necessary IF we will perform an ajax form validation)
			var r=methods._validateFields(form);

			if (r && options.ajaxFormValidation) {
				methods._validateFormWithAjax(form, options);
				// cancel form auto-submission - process with async call onAjaxFormComplete
				return false;
			}

			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, r);
			}
			return r;
		},
		/**
		* Return true if the ajax field validations passed so far
		* @param {Object} options
		* @return true, is all ajax validation passed so far (remember ajax is async)
		*/
		_checkAjaxStatus: function(options) {
			var status = true;
			$.each(options.ajaxValidCache, function(key, value) {
				if (!value) {
					status = false;
					// break the each
					return false;
				}
			});
			return status;
		},

		/**
		* Return true if the ajax field is validated
		* @param {String} fieldid
		* @param {Object} options
		* @return true, if validation passed, false if false or doesn't exist
		*/
		_checkAjaxFieldStatus: function(fieldid, options) {
			return options.ajaxValidCache[fieldid] == true;
		},
		/**
		* Validates form fields, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @param {skipAjaxFieldValidation}
		*            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
		*
		* @return true if form is valid, false if not, undefined if ajax form validation is done
		*/
		_validateFields: function(form) {
			var options = form.data('jqv');

			// this variable is set to true if an error is found
			var errorFound = false;

			// Trigger hook, start validation
			form.trigger("jqv.form.validating");
			// first, evaluate status of non ajax fields
			var first_err=null;
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each( function() {
				var field = $(this);
				var names = [];
				if ($.inArray(field.attr('name'), names) < 0) {
					errorFound |= methods._validateField(field, options);
					if (errorFound && first_err==null)
						if (field.is(":hidden") && options.prettySelect)
							first_err = field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
						else {

							//Check if we need to adjust what element to show the prompt on
							//and and such scroll to instead
							if(field.data('jqv-prompt-at') instanceof jQuery ){
								field = field.data('jqv-prompt-at');
							} else if(field.data('jqv-prompt-at')) {
								field = $(field.data('jqv-prompt-at'));
							}
							first_err=field;
						}
					if (options.doNotShowAllErrosOnSubmit)
						return false;
					names.push(field.attr('name'));

					//if option set, stop checking validation rules after one error is found
					if(options.showOneMessage == true && errorFound){
						return false;
					}
				}
			});

			// second, check to see if all ajax calls completed ok
			// errorFound |= !methods._checkAjaxStatus(options);

			// third, check status and scroll the container accordingly
			form.trigger("jqv.form.result", [errorFound]);

			if (errorFound) {
				if (options.scroll) {
					var destination=first_err.offset().top;
					var fixleft = first_err.offset().left;

					//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
					var positionType=options.promptPosition;
					if (typeof(positionType)=='string' && positionType.indexOf(":")!=-1)
						positionType=positionType.substring(0,positionType.indexOf(":"));

					if (positionType!="bottomRight" && positionType!="bottomLeft") {
						var prompt_err= methods._getPrompt(first_err);
						if (prompt_err) {
							destination=prompt_err.offset().top;
						}
					}

					// Offset the amount the page scrolls by an amount in px to accomodate fixed elements at top of page
					if (options.scrollOffset) {
						destination -= options.scrollOffset;
					}

					// get the position of the first error, there should be at least one, no need to check this
					//var destination = form.find(".formError:not('.greenPopup'):first").offset().top;
					if (options.isOverflown) {
						var overflowDIV = $(options.overflownDIV);
						if(!overflowDIV.length) return false;
						var scrollContainerScroll = overflowDIV.scrollTop();
						var scrollContainerPos = -parseInt(overflowDIV.offset().top);

						destination += scrollContainerScroll + scrollContainerPos - 5;
						var scrollContainer = $(options.overflownDIV).filter(":not(:animated)");

						scrollContainer.animate({ scrollTop: destination }, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});

					} else {
						$("html, body").animate({
							scrollTop: destination
						}, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});
						$("html, body").animate({scrollLeft: fixleft},1100)
					}

				} else if(options.focusFirstField)
					first_err.focus();
				return false;
			}
			return true;
		},
		/**
		* This method is called to perform an ajax form validation.
		* During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
		*
		* @param {jqObject} form
		* @param {Map} options
		*/
		_validateFormWithAjax: function(form, options) {

			var data = form.serialize();
									var type = (options.ajaxFormValidationMethod) ? options.ajaxFormValidationMethod : "GET";
			var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
									var dataType = (options.dataType) ? options.dataType : "json";
			$.ajax({
				type: type,
				url: url,
				cache: false,
				dataType: dataType,
				data: data,
				form: form,
				methods: methods,
				options: options,
				beforeSend: function() {
					return options.onBeforeAjaxFormValidation(form, options);
				},
				error: function(data, transport) {
					if (options.onFailure) {
						options.onFailure(data, transport);
					} else {
						methods._ajaxError(data, transport);
					}
				},
				success: function(json) {
					if ((dataType == "json") && (json !== true)) {
						// getting to this case doesn't necessary means that the form is invalid
						// the server may return green or closing prompt actions
						// this flag helps figuring it out
						var errorInForm=false;
						for (var i = 0; i < json.length; i++) {
							var value = json[i];

							var errorFieldId = value[0];
							var errorField = $($("#" + errorFieldId)[0]);

							// make sure we found the element
							if (errorField.length == 1) {

								// promptText or selector
								var msg = value[2];
								// if the field is valid
								if (value[1] == true) {

									if (msg == ""  || !msg){
										// if for some reason, status==true and error="", just close the prompt
										methods._closePrompt(errorField);
									} else {
										// the field is valid, but we are displaying a green prompt
										if (options.allrules[msg]) {
											var txt = options.allrules[msg].alertTextOk;
											if (txt)
												msg = txt;
										}
										if (options.showPrompts) methods._showPrompt(errorField, msg, "pass", false, options, true);
									}
								} else {
									// the field is invalid, show the red error prompt
									errorInForm|=true;
									if (options.allrules[msg]) {
										var txt = options.allrules[msg].alertText;
										if (txt)
											msg = txt;
									}
									if(options.showPrompts) methods._showPrompt(errorField, msg, "", false, options, true);
								}
							}
						}
						options.onAjaxFormComplete(!errorInForm, form, json, options);
					} else
						options.onAjaxFormComplete(true, form, json, options);

				}
			});

		},
		/**
		* Validates field, shows prompts accordingly
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules
		* @param {Map}
		*            user options
		* @return false if field is valid (It is inversed for *fields*, it return false on validate and true on errors.)
		*/
		_validateField: function(field, options, skipAjaxValidation) {
			if (!field.attr("id")) {
				field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
				++$.validationEngine.fieldIdCounter;
			}

			if(field.hasClass(options.ignoreFieldsWithClass))
				return false;

           if (!options.validateNonVisibleFields && (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden")))
				return false;

			var rulesParsing = field.attr(options.validateAttribute);
			var getRules = /validate\[(.*)\]/.exec(rulesParsing);

			if (!getRules)
				return false;
			var str = getRules[1];
			var rules = str.split(/\[|,|\]/);

			// true if we ran the ajax validation, tells the logic to stop messing with prompts
			var isAjaxValidator = false;
			var fieldName = field.attr("name");
			var promptText = "";
			var promptType = "";
			var required = false;
			var limitErrors = false;
			options.isError = false;
			options.showArrow = options.showArrow ==true;

			// If the programmer wants to limit the amount of error messages per field,
			if (options.maxErrorsPerField > 0) {
				limitErrors = true;
			}

			var form = $(field.closest("form, .validationEngineContainer"));
			// Fix for adding spaces in the rules
			for (var i = 0; i < rules.length; i++) {
				rules[i] = rules[i].toString().replace(" ", "");//.toString to worked on IE8
				// Remove any parsing errors
				if (rules[i] === '') {
					delete rules[i];
				}
			}

			for (var i = 0, field_errors = 0; i < rules.length; i++) {

				// If we are limiting errors, and have hit the max, break
				if (limitErrors && field_errors >= options.maxErrorsPerField) {
					// If we haven't hit a required yet, check to see if there is one in the validation rules for this
					// field and that it's index is greater or equal to our current index
					if (!required) {
						var have_required = $.inArray('required', rules);
						required = (have_required != -1 &&  have_required >= i);
					}
					break;
				}


				var errorMsg = undefined;
				switch (rules[i]) {

					case "required":
						required = true;
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
						break;
					case "custom":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
						break;
					case "groupRequired":
						// Check is its the first of group, if not, reload validation with first field
						// AND continue normal validation on present field
						var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
						var firstOfGroup = form.find(classGroup).eq(0);
						if(firstOfGroup[0] != field[0]){

							methods._validateField(firstOfGroup, options, skipAjaxValidation);
							options.showArrow = true;

						}
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
						if(errorMsg)  required = true;
						options.showArrow = false;
						break;
					case "ajax":
						// AJAX defaults to returning it's loading message
						errorMsg = methods._ajax(field, rules, i, options);
						if (errorMsg) {
							promptType = "load";
						}
						break;
					case "minSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
						break;
					case "maxSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
						break;
					case "min":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
						break;
					case "max":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
						break;
					case "past":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._past);
						break;
					case "future":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._future);
						break;
					case "dateRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;

					case "dateTimeRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateTimeRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;
					case "maxCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
						break;
					case "minCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
						break;
					case "equals":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
						break;
					case "funcCall":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
						break;
					case "creditCard":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
						break;
					case "condRequired":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);
						if (errorMsg !== undefined) {
							required = true;
						}
						break;
					case "funcCallRequired":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCallRequired);
						if (errorMsg !== undefined) {
							required = true;
						}
						break;

					default:
				}

				var end_validation = false;

				// If we were passed back an message object, check what the status was to determine what to do
				if (typeof errorMsg == "object") {
					switch (errorMsg.status) {
						case "_break":
							end_validation = true;
							break;
						// If we have an error message, set errorMsg to the error message
						case "_error":
							errorMsg = errorMsg.message;
							break;
						// If we want to throw an error, but not show a prompt, return early with true
						case "_error_no_prompt":
							return true;
							break;
						// Anything else we continue on
						default:
							break;
					}
				}

				//funcCallRequired, first in rules, and has error, skip anything else
				if( i==0 && str.indexOf('funcCallRequired')==0 && errorMsg !== undefined ){
					if(promptText != '') {
						promptText += "<br/>";
					}
					promptText += errorMsg;
					options.isError=true;
					field_errors++;
					end_validation=true;
				}

				// If it has been specified that validation should end now, break
				if (end_validation) {
					break;
				}

				// If we have a string, that means that we have an error, so add it to the error message.
				if (typeof errorMsg == 'string') {
					if(promptText != '') {
						promptText += "<br/>";
					}
					promptText += errorMsg;
					options.isError = true;
					field_errors++;
				}
			}
			// If the rules required is not added, an empty field is not validated
			//the 3rd condition is added so that even empty password fields should be equal
			//otherwise if one is filled and another left empty, the "equal" condition would fail
			//which does not make any sense
			if(!required && !(field.val()) && field.val().length < 1 && $.inArray('equals', rules) < 0) options.isError = false;

			// Hack for radio/checkbox group button, the validation go into the
			// first radio/checkbox of the group
			var fieldType = field.prop("type");
			var positionType=field.data("promptPosition") || options.promptPosition;

			if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").length > 1) {
				if(positionType === 'inline') {
					field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:last"));
				} else {
				field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
				}
				options.showArrow = options.showArrowOnRadioAndCheckbox;
			}

			if(field.is(":hidden") && options.prettySelect) {
				field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
			}

			if (options.isError && options.showPrompts){
				methods._showPrompt(field, promptText, promptType, false, options);
			}else{
				if (!isAjaxValidator) methods._closePrompt(field);
			}

			if (!isAjaxValidator) {
				field.trigger("jqv.field.result", [field, options.isError, promptText]);
			}

			/* Record error */
			var errindex = $.inArray(field[0], options.InvalidFields);
			if (errindex == -1) {
				if (options.isError)
				options.InvalidFields.push(field[0]);
			} else if (!options.isError) {
				options.InvalidFields.splice(errindex, 1);
			}

			methods._handleStatusCssClasses(field, options);

			/* run callback function for each field */
			if (options.isError && options.onFieldFailure)
				options.onFieldFailure(field);

			if (!options.isError && options.onFieldSuccess)
				options.onFieldSuccess(field);

			return options.isError;
		},
		/**
		* Handling css classes of fields indicating result of validation
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules
		* @private
		*/
		_handleStatusCssClasses: function(field, options) {
			/* remove all classes */
			if(options.addSuccessCssClassToField)
				field.removeClass(options.addSuccessCssClassToField);

			if(options.addFailureCssClassToField)
				field.removeClass(options.addFailureCssClassToField);

			/* Add classes */
			if (options.addSuccessCssClassToField && !options.isError)
				field.addClass(options.addSuccessCssClassToField);

			if (options.addFailureCssClassToField && options.isError)
				field.addClass(options.addFailureCssClassToField);
		},

		 /********************
		  * _getErrorMessage
		  *
		  * @param form
		  * @param field
		  * @param rule
		  * @param rules
		  * @param i
		  * @param options
		  * @param originalValidationMethod
		  * @return {*}
		  * @private
		  */
		 _getErrorMessage:function (form, field, rule, rules, i, options, originalValidationMethod) {
			 // If we are using the custon validation type, build the index for the rule.
			 // Otherwise if we are doing a function call, make the call and return the object
			 // that is passed back.
	 		 var rule_index = jQuery.inArray(rule, rules);
			 if (rule === "custom" || rule === "funcCall" || rule === "funcCallRequired") {
				 var custom_validation_type = rules[rule_index + 1];
				 rule = rule + "[" + custom_validation_type + "]";
				 // Delete the rule from the rules array so that it doesn't try to call the
			    // same rule over again
			    delete(rules[rule_index]);
			 }
			 // Change the rule to the composite rule, if it was different from the original
			 var alteredRule = rule;


			 var element_classes = (field.attr("data-validation-engine")) ? field.attr("data-validation-engine") : field.attr("class");
			 var element_classes_array = element_classes.split(" ");

			 // Call the original validation method. If we are dealing with dates or checkboxes, also pass the form
			 var errorMsg;
			 if (rule == "future" || rule == "past"  || rule == "maxCheckbox" || rule == "minCheckbox") {
				 errorMsg = originalValidationMethod(form, field, rules, i, options);
			 } else {
				 errorMsg = originalValidationMethod(field, rules, i, options);
			 }

			 // If the original validation method returned an error and we have a custom error message,
			 // return the custom message instead. Otherwise return the original error message.
			 if (errorMsg != undefined) {
				 var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, alteredRule, options);
				 if (custom_message) errorMsg = custom_message;
			 }
			 return errorMsg;

		 },
		 _getCustomErrorMessage:function (field, classes, rule, options) {
			var custom_message = false;
			var validityProp = /^custom\[.*\]$/.test(rule) ? methods._validityProp["custom"] : methods._validityProp[rule];
			 // If there is a validityProp for this rule, check to see if the field has an attribute for it
			if (validityProp != undefined) {
				custom_message = field.attr("data-errormessage-"+validityProp);
				// If there was an error message for it, return the message
				if (custom_message != undefined)
					return custom_message;
			}
			custom_message = field.attr("data-errormessage");
			 // If there is an inline custom error message, return it
			if (custom_message != undefined)
				return custom_message;
			var id = '#' + field.attr("id");
			// If we have custom messages for the element's id, get the message for the rule from the id.
			// Otherwise, if we have custom messages for the element's classes, use the first class message we find instead.
			if (typeof options.custom_error_messages[id] != "undefined" &&
				typeof options.custom_error_messages[id][rule] != "undefined" ) {
						  custom_message = options.custom_error_messages[id][rule]['message'];
			} else if (classes.length > 0) {
				for (var i = 0; i < classes.length && classes.length > 0; i++) {
					 var element_class = "." + classes[i];
					if (typeof options.custom_error_messages[element_class] != "undefined" &&
						typeof options.custom_error_messages[element_class][rule] != "undefined") {
							custom_message = options.custom_error_messages[element_class][rule]['message'];
							break;
					}
				}
			}
			if (!custom_message &&
				typeof options.custom_error_messages[rule] != "undefined" &&
				typeof options.custom_error_messages[rule]['message'] != "undefined"){
					 custom_message = options.custom_error_messages[rule]['message'];
			 }
			 return custom_message;
		 },
		 _validityProp: {
			 "required": "value-missing",
			 "custom": "custom-error",
			 "groupRequired": "value-missing",
			 "ajax": "custom-error",
			 "minSize": "range-underflow",
			 "maxSize": "range-overflow",
			 "min": "range-underflow",
			 "max": "range-overflow",
			 "past": "type-mismatch",
			 "future": "type-mismatch",
			 "dateRange": "type-mismatch",
			 "dateTimeRange": "type-mismatch",
			 "maxCheckbox": "range-overflow",
			 "minCheckbox": "range-underflow",
			 "equals": "pattern-mismatch",
			 "funcCall": "custom-error",
			 "funcCallRequired": "custom-error",
			 "creditCard": "pattern-mismatch",
			 "condRequired": "value-missing"
		 },
		/**
		* Required validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @param {bool} condRequired flag when method is used for internal purpose in condRequired check
		* @return an error string if validation failed
		*/
		_required: function(field, rules, i, options, condRequired) {
			switch (field.prop("type")) {
				case "radio":
				case "checkbox":
					// new validation style to only check dependent field
					if (condRequired) {
						if (!field.prop('checked')) {
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
						}
						break;
					}
					// old validation style
					var form = field.closest("form, .validationEngineContainer");
					var name = field.attr("name");
					if (form.find("input[name='" + name + "']:checked").length == 0) {
						if (form.find("input[name='" + name + "']:visible").length == 1)
							return options.allrules[rules[i]].alertTextCheckboxe;
						else
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
					}
					break;
				case "text":
				case "password":
				case "textarea":
				case "file":
				case "select-one":
				case "select-multiple":
				default:
					var field_val      = $.trim( field.val()                               );
					var dv_placeholder = $.trim( field.attr("data-validation-placeholder") );
					var placeholder    = $.trim( field.attr("placeholder")                 );
					if (
						   ( !field_val                                    )
						|| ( dv_placeholder && field_val == dv_placeholder )
						|| ( placeholder    && field_val == placeholder    )
					) {
						return options.allrules[rules[i]].alertText;
					}
					break;
			}
		},
		/**
		* Validate that 1 from the group field is required
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_groupRequired: function(field, rules, i, options) {
			var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
			var isValid = false;
			// Check all fields from the group
			field.closest("form, .validationEngineContainer").find(classGroup).each(function(){
				if(!methods._required($(this), rules, i, options)){
					isValid = true;
					return false;
				}
			});

			if(!isValid) {
		  return options.allrules[rules[i]].alertText;
		}
		},
		/**
		* Validate rules
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_custom: function(field, rules, i, options) {
			var customRule = rules[i + 1];
			var rule = options.allrules[customRule];
			var fn;
			if(!rule) {
				alert("jqv:custom rule not found - "+customRule);
				return;
			}

			if(rule["regex"]) {
				 var ex=rule.regex;
					if(!ex) {
						alert("jqv:custom regex not found - "+customRule);
						return;
					}
					var pattern = new RegExp(ex);

					if (!pattern.test(field.val())) return options.allrules[customRule].alertText;

			} else if(rule["func"]) {
				fn = rule["func"];

				if (typeof(fn) !== "function") {
					alert("jqv:custom parameter 'function' is no function - "+customRule);
						return;
				}

				if (!fn(field, rules, i, options))
					return options.allrules[customRule].alertText;
			} else {
				alert("jqv:custom type not allowed "+customRule);
					return;
			}
		},
		/**
		* Validate custom function outside of the engine scope
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_funcCall: function(field, rules, i, options) {
			var functionName = rules[i + 1];
			var fn;
			if(functionName.indexOf('.') >-1)
			{
				var namespaces = functionName.split('.');
				var scope = window;
				while(namespaces.length)
				{
					scope = scope[namespaces.shift()];
				}
				fn = scope;
			}
			else
				fn = window[functionName] || options.customFunctions[functionName];
			if (typeof(fn) == 'function')
				return fn(field, rules, i, options);

		},
		_funcCallRequired: function(field, rules, i, options) {
			return methods._funcCall(field,rules,i,options);
		},
		/**
		* Field match
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_equals: function(field, rules, i, options) {
			var equalsField = rules[i + 1];

			if (field.val() != $("#" + equalsField).val())
				return options.allrules.equals.alertText;
		},
		/**
		* Check the maximum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxSize: function(field, rules, i, options) {
			var max = rules[i + 1];
			var len = field.val().length;

			if (len > max) {
				var rule = options.allrules.maxSize;
				return rule.alertText + max + rule.alertText2;
			}
		},
		/**
		* Check the minimum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minSize: function(field, rules, i, options) {
			var min = rules[i + 1];
			var len = field.val().length;

			if (len < min) {
				var rule = options.allrules.minSize;
				return rule.alertText + min + rule.alertText2;
			}
		},
		/**
		* Check number minimum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_min: function(field, rules, i, options) {
			var min = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len < min) {
				var rule = options.allrules.min;
				if (rule.alertText2) return rule.alertText + min + rule.alertText2;
				return rule.alertText + min;
			}
		},
		/**
		* Check number maximum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_max: function(field, rules, i, options) {
			var max = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len >max ) {
				var rule = options.allrules.max;
				if (rule.alertText2) return rule.alertText + max + rule.alertText2;
				//orefalo: to review, also do the translations
				return rule.alertText + max;
			}
		},
		/**
		* Checks date is in the past
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_past: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate > pdate ) {
				var rule = options.allrules.past;
				if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks date is in the future
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_future: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate < pdate ) {
				var rule = options.allrules.future;
				if (rule.alertText2)
					return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks if valid date
		*
		* @param {string} date string
		* @return a bool based on determination of valid date
		*/
		_isDate: function (value) {
			var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
			return dateRegEx.test(value);
		},
		/**
		* Checks if valid date time
		*
		* @param {string} date string
		* @return a bool based on determination of valid date time
		*/
		_isDateTime: function (value){
			var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
			return dateTimeRegEx.test(value);
		},
		//Checks if the start date is before the end date
		//returns true if end is later than start
		_dateCompare: function (start, end) {
			return (new Date(start.toString()) < new Date(end.toString()));
		},
		/**
		* Checks date range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are not both dates
			if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Checks date time range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateTimeRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are not both dates
			if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Max number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").length;
			if (groupSize > nbCheck) {
				options.showArrow = false;
				if (options.allrules.maxCheckbox.alertText2)
					 return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
				return options.allrules.maxCheckbox.alertText;
			}
		},
		/**
		* Min number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").length;
			if (groupSize < nbCheck) {
				options.showArrow = false;
				return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
			}
		},
		/**
		* Checks that it is a valid credit card number according to the
		* Luhn checksum algorithm.
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_creditCard: function(field, rules, i, options) {
			//spaces and dashes may be valid characters, but must be stripped to calculate the checksum.
			var valid = false, cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');

			var numDigits = cardNumber.length;
			if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {

				var sum = 0, i = numDigits - 1, pos = 1, digit, luhn = new String();
				do {
					digit = parseInt(cardNumber.charAt(i));
					luhn += (pos++ % 2 == 0) ? digit * 2 : digit;
				} while (--i >= 0)

				for (i = 0; i < luhn.length; i++) {
					sum += parseInt(luhn.charAt(i));
				}
				valid = sum % 10 == 0;
			}
			if (!valid) return options.allrules.creditCard.alertText;
		},
		/**
		* Ajax field validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return nothing! the ajax validator handles the prompts itself
		*/
		 _ajax: function(field, rules, i, options) {

			 var errorSelector = rules[i + 1];
			 var rule = options.allrules[errorSelector];
			 var extraData = rule.extraData;
			 var extraDataDynamic = rule.extraDataDynamic;
			 var data = {
				"fieldId" : field.attr("id"),
				"fieldValue" : field.val()
			 };

			 if (typeof extraData === "object") {
				$.extend(data, extraData);
			 } else if (typeof extraData === "string") {
				var tempData = extraData.split("&");
				for(var i = 0; i < tempData.length; i++) {
					var values = tempData[i].split("=");
					if (values[0] && values[0]) {
						data[values[0]] = values[1];
					}
				}
			 }

			 if (extraDataDynamic) {
				 var tmpData = [];
				 var domIds = String(extraDataDynamic).split(",");
				 for (var i = 0; i < domIds.length; i++) {
					 var id = domIds[i];
					 if ($(id).length) {
						 var inputValue = field.closest("form, .validationEngineContainer").find(id).val();
						 var keyValue = id.replace('#', '') + '=' + escape(inputValue);
						 data[id.replace('#', '')] = inputValue;
					 }
				 }
			 }

			 // If a field change event triggered this we want to clear the cache for this ID
			 if (options.eventTrigger == "field") {
				delete(options.ajaxValidCache[field.attr("id")]);
			 }

			 // If there is an error or if the the field is already validated, do not re-execute AJAX
			 if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
				 $.ajax({
					 type: options.ajaxFormValidationMethod,
					 url: rule.url,
					 cache: false,
					 dataType: "json",
					 data: data,
					 field: field,
					 rule: rule,
					 methods: methods,
					 options: options,
					 beforeSend: function() {},
					 error: function(data, transport) {
						if (options.onFailure) {
							options.onFailure(data, transport);
						} else {
							methods._ajaxError(data, transport);
						}
					 },
					 success: function(json) {

						 // asynchronously called on success, data is the json answer from the server
						 var errorFieldId = json[0];
						 //var errorField = $($("#" + errorFieldId)[0]);
						 var errorField = $("#"+ errorFieldId).eq(0);

						 // make sure we found the element
						 if (errorField.length == 1) {
							 var status = json[1];
							 // read the optional msg from the server
							 var msg = json[2];
							 if (!status) {
								 // Houston we got a problem - display an red prompt
								 options.ajaxValidCache[errorFieldId] = false;
								 options.isError = true;

								 // resolve the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertText;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
									msg = rule.alertText;

								 if (options.showPrompts) methods._showPrompt(errorField, msg, "", true, options);
							 } else {
								 options.ajaxValidCache[errorFieldId] = true;

								 // resolves the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertTextOk;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
								 msg = rule.alertTextOk;

								 if (options.showPrompts) {
									 // see if we should display a green prompt
									 if (msg)
										methods._showPrompt(errorField, msg, "pass", true, options);
									 else
										methods._closePrompt(errorField);
								}

								 // If a submit form triggered this, we want to re-submit the form
								 if (options.eventTrigger == "submit")
									field.closest("form").submit();
							 }
						 }
						 errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
					 }
				 });

				 return rule.alertTextLoad;
			 }
		 },
		/**
		* Common method to handle ajax errors
		*
		* @param {Object} data
		* @param {Object} transport
		*/
		_ajaxError: function(data, transport) {
			if(data.status == 0 && transport == null)
				alert("The page is not served from a server! ajax call failed");
			else if(typeof console != "undefined")
				console.log("Ajax error: " + data.status + " " + transport);
		},
		/**
		* date -> string
		*
		* @param {Object} date
		*/
		_dateToString: function(date) {
			return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
		},
		/**
		* Parses an ISO date
		* @param {String} d
		*/
		_parseDate: function(d) {

			var dateParts = d.split("-");
			if(dateParts==d)
				dateParts = d.split("/");
			if(dateParts==d) {
				dateParts = d.split(".");
				return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
			}
			return new Date(dateParts[0], (dateParts[1] - 1) ,dateParts[2]);
		},
		/**
		* Builds or updates a prompt with the given information
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		 _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
		 	//Check if we need to adjust what element to show the prompt on
			if(field.data('jqv-prompt-at') instanceof jQuery ){
				field = field.data('jqv-prompt-at');
			} else if(field.data('jqv-prompt-at')) {
				field = $(field.data('jqv-prompt-at'));
			}

			 var prompt = methods._getPrompt(field);
			 // The ajax submit errors are not see has an error in the form,
			 // When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
			 // Because no error was found befor submitting
			 if(ajaxform) prompt = false;
			 // Check that there is indded text
			 if($.trim(promptText)){
				 if (prompt)
					methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
				 else
					methods._buildPrompt(field, promptText, type, ajaxed, options);
			}
		 },
		/**
		* Builds and shades a prompt for the given field.
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_buildPrompt: function(field, promptText, type, ajaxed, options) {

			// create the prompt
			var prompt = $('<div>');
			prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
			// add a class name to identify the parent form of the prompt
			prompt.addClass("parentForm"+methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));
			prompt.addClass("formError");

			switch (type) {
				case "pass":
					prompt.addClass("greenPopup");
					break;
				case "load":
					prompt.addClass("blackPopup");
					break;
				default:
					/* it has error  */
					//alert("unknown popup type:"+type);
			}
			if (ajaxed)
				prompt.addClass("ajaxed");

			// create the prompt content
			var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);

			// determine position type
			var positionType=field.data("promptPosition") || options.promptPosition;

			// create the css arrow pointing at the field
			// note that there is no triangle on max-checkbox and radio
			if (options.showArrow) {
				var arrow = $('<div>').addClass("formErrorArrow");

				//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
				if (typeof(positionType)=='string')
				{
					var pos=positionType.indexOf(":");
					if(pos!=-1)
						positionType=positionType.substring(0,pos);
				}

				switch (positionType) {
					case "bottomLeft":
					case "bottomRight":
						prompt.find(".formErrorContent").before(arrow);
						arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
						break;
					case "topLeft":
					case "topRight":
						arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
						prompt.append(arrow);
						break;
				}
			}
			// Add custom prompt class
			if (options.addPromptClass)
				prompt.addClass(options.addPromptClass);

            // Add custom prompt class defined in element
            var requiredOverride = field.attr('data-required-class');
            if(requiredOverride !== undefined) {
                prompt.addClass(requiredOverride);
            } else {
                if(options.prettySelect) {
                    if($('#' + field.attr('id')).next().is('select')) {
                        var prettyOverrideClass = $('#' + field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');
                        if(prettyOverrideClass !== undefined) {
                            prompt.addClass(prettyOverrideClass);
                        }
                    }
                }
            }

			prompt.css({
				"opacity": 0
			});
			if(positionType === 'inline') {
				prompt.addClass("inline");
				if(typeof field.attr('data-prompt-target') !== 'undefined' && $('#'+field.attr('data-prompt-target')).length > 0) {
					prompt.appendTo($('#'+field.attr('data-prompt-target')));
				} else {
					field.after(prompt);
				}
			} else {
				field.before(prompt);
			}

			var pos = methods._calculatePosition(field, prompt, options);
			// Support RTL layouts by @yasser_lotfy ( Yasser Lotfy )
			if ($('body').hasClass('rtl')) {
				prompt.css({
					// 'position': positionType === 'inline' ? 'relative' : 'absolute',
					// "top": pos.callerTopPosition,
					// "left": "initial",
					// "right": pos.callerleftPosition,
					// "marginTop": pos.marginTopSize,
					"opacity": 0
				}).data("callerField", field);
		    	} else {
				prompt.css({
					// 'position': positionType === 'inline' ? 'relative' : 'absolute',
					// "top": pos.callerTopPosition,
					// "left": pos.callerleftPosition,
					// "right": "initial",
					// "marginTop": pos.marginTopSize,
					"opacity": 0
				}).data("callerField", field);
		    	}


			if (options.autoHidePrompt) {
				setTimeout(function(){
					prompt.animate({
						"opacity": 0
					},function(){
						prompt.closest('.formError').remove();
					});
				}, options.autoHideDelay);
			}
			return prompt.animate({
				"opacity": 1
			});
		},
		/**
		* Updates the prompt text field - the field for which the prompt
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {

			if (prompt) {
				if (typeof type !== "undefined") {
					if (type == "pass")
						prompt.addClass("greenPopup");
					else
						prompt.removeClass("greenPopup");

					if (type == "load")
						prompt.addClass("blackPopup");
					else
						prompt.removeClass("blackPopup");
				}
				if (ajaxed)
					prompt.addClass("ajaxed");
				else
					prompt.removeClass("ajaxed");

				prompt.find(".formErrorContent").html(promptText);
				$(prompt).removeClass("run-animation");
				//prompt.addClass("run-animation");
				setTimeout(function(){
					$(prompt).addClass("run-animation");
				},100)

				var pos = methods._calculatePosition(field, prompt, options);
				// Support RTL layouts by @yasser_lotfy ( Yasser Lotfy )
				if ($('body').hasClass('rtl')) {
					var css = {"top": pos.callerTopPosition,
					"left": "initial",
					"right": pos.callerleftPosition,
					"marginTop": pos.marginTopSize,
					"opacity": 1};
				} else {
					var css = {"top": pos.callerTopPosition,
					"left": pos.callerleftPosition,
					"right": "initial",
					"marginTop": pos.marginTopSize,
					"opacity": 1};
				}

                prompt.css({
                    "opacity": 0,
                   // "display": "block"
                });

				if (noAnimation)
					prompt.css(css);
				else
					prompt.animate(css);
			}
		},
		/**
		* Closes the prompt associated with the given field
		*
		* @param {jqObject}
		*            field
		*/
		 _closePrompt: function(field) {
			 var prompt = methods._getPrompt(field);
			 if (prompt)
				 prompt.fadeTo("fast", 0, function() {
					 prompt.closest('.formError').remove();
				 });
		 },
		 closePrompt: function(field) {
			 return methods._closePrompt(field);
		 },
		/**
		* Returns the error prompt matching the field if any
		*
		* @param {jqObject}
		*            field
		* @return undefined or the error prompt (jqObject)
		*/
		_getPrompt: function(field) {
				var formId = $(field).closest('form, .validationEngineContainer').attr('id');
			var className = methods._getClassName(field.attr("id")) + "formError";
				var match = $("." + methods._escapeExpression(className) + '.parentForm' + methods._getClassName(formId))[0];
			if (match)
			return $(match);
		},
		/**
		  * Returns the escapade classname
		  *
		  * @param {selector}
		  *            className
		  */
		  _escapeExpression: function (selector) {
			  return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
		  },
		/**
		 * returns true if we are in a RTLed document
		 *
		 * @param {jqObject} field
		 */
		isRTL: function(field)
		{
			var $document = $(document);
			var $body = $('body');
			var rtl =
				(field && field.hasClass('rtl')) ||
				(field && (field.attr('dir') || '').toLowerCase()==='rtl') ||
				$document.hasClass('rtl') ||
				($document.attr('dir') || '').toLowerCase()==='rtl' ||
				$body.hasClass('rtl') ||
				($body.attr('dir') || '').toLowerCase()==='rtl';
			return Boolean(rtl);
		},
		/**
		* Calculates prompt position
		*
		* @param {jqObject}
		*            field
		* @param {jqObject}
		*            the prompt
		* @param {Map}
		*            options
		* @return positions
		*/
		_calculatePosition: function (field, promptElmt, options) {

			var promptTopPosition, promptleftPosition, marginTopSize;
			var fieldWidth 	= field.width();
			var fieldLeft 	= field.position().left;
			var fieldTop 	=  field.position().top;
			var fieldHeight 	=  field.height();
			var promptHeight = promptElmt.height();


			// is the form contained in an overflown container?
			promptTopPosition = promptleftPosition = 0;
			// compensation for the arrow
			marginTopSize = -promptHeight;


			//prompt positioning adjustment support
			//now you can adjust prompt position
			//usage: positionType:Xshift,Yshift
			//for example:
			//   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
			//   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
			//You can use +pixels, - pixels. If no sign is provided than + is default.
			var positionType=field.data("promptPosition") || options.promptPosition;
			var shift1="";
			var shift2="";
			var shiftX=0;
			var shiftY=0;
			if (typeof(positionType)=='string') {
				//do we have any position adjustments ?
				if (positionType.indexOf(":")!=-1) {
					shift1=positionType.substring(positionType.indexOf(":")+1);
					positionType=positionType.substring(0,positionType.indexOf(":"));

					//if any advanced positioning will be needed (percents or something else) - parser should be added here
					//for now we use simple parseInt()

					//do we have second parameter?
					if (shift1.indexOf(",") !=-1) {
						shift2=shift1.substring(shift1.indexOf(",") +1);
						shift1=shift1.substring(0,shift1.indexOf(","));
						shiftY=parseInt(shift2);
						if (isNaN(shiftY)) shiftY=0;
					};

					shiftX=parseInt(shift1);
					if (isNaN(shift1)) shift1=0;

				};
			};


			switch (positionType) {
				default:
				case "topRight":
					promptleftPosition +=  fieldLeft + fieldWidth - 27;
					promptTopPosition +=  fieldTop;
					break;

				case "topLeft":
					promptTopPosition +=  fieldTop;
					promptleftPosition += fieldLeft;
					break;

				case "centerRight":
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;
					promptleftPosition= fieldLeft + field.outerWidth(true)+5;
					break;
				case "centerLeft":
					promptleftPosition = fieldLeft - (promptElmt.width() + 2);
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;

					break;

				case "bottomLeft":
					promptTopPosition = fieldTop + field.height() + 5;
					marginTopSize = 0;
					promptleftPosition = fieldLeft;
					break;
				case "bottomRight":
					promptleftPosition = fieldLeft + fieldWidth - 27;
					promptTopPosition =  fieldTop +  field.height() + 5;
					marginTopSize = 0;
					break;
				case "inline":
					promptleftPosition = 0;
					promptTopPosition = 0;
					marginTopSize = 0;
			};



			//apply adjusments if any
			promptleftPosition += shiftX;
			promptTopPosition  += shiftY;

			return {
				"callerTopPosition": promptTopPosition + "px",
				"callerleftPosition": promptleftPosition + "px",
				"marginTopSize": marginTopSize + "px"
			};
		},
		/**
		* Saves the user options and variables in the form.data
		*
		* @param {jqObject}
		*            form - the form where the user option should be saved
		* @param {Map}
		*            options - the user options
		* @return the user options (extended from the defaults)
		*/
		 _saveOptions: function(form, options) {

			 // is there a language localisation ?
			 if ($.validationEngineLanguage)
			 var allRules = $.validationEngineLanguage.allRules;
			 else
			 $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
			 // --- Internals DO NOT TOUCH or OVERLOAD ---
			 // validation rules and i18
			 $.validationEngine.defaults.allrules = allRules;

			 var userOptions = $.extend(true,{},$.validationEngine.defaults,options);

			 form.data('jqv', userOptions);
			 return userOptions;
		 },

		 /**
		 * Removes forbidden characters from class name
		 * @param {String} className
		 */
		 _getClassName: function(className) {
			 if(className)
				 return className.replace(/:/g, "_").replace(/\./g, "_");
					  },
		/**
		 * Escape special character for jQuery selector
		 * http://totaldev.com/content/escaping-characters-get-valid-jquery-id
		 * @param {String} selector
		 */
		 _jqSelector: function(str){
			return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
		},
		/**
		* Conditionally required field
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		* user options
		* @return an error string if validation failed
		*/
		_condRequired: function(field, rules, i, options) {
			var idx, dependingField;

			for(idx = (i + 1); idx < rules.length; idx++) {
				dependingField = jQuery("#" + rules[idx]).first();

				/* Use _required for determining wether dependingField has a value.
				 * There is logic there for handling all field types, and default value; so we won't replicate that here
				 * Indicate this special use by setting the last parameter to true so we only validate the dependingField on chackboxes and radio buttons (#462)
				 */
				if (dependingField.length && methods._required(dependingField, ["required"], 0, options, true) == undefined) {
					/* We now know any of the depending fields has a value,
					 * so we can validate this field as per normal required code
					 */
					return methods._required(field, ["required"], 0, options);
				}
			}
		},

	    _submitButtonClick: function(event) {
	        var button = $(this);
	        var form = button.closest('form, .validationEngineContainer');
	        form.data("jqv_submitButton", button.attr("id"));
	    }
		  };

	 /**
	 * Plugin entry point.
	 * You may pass an action as a parameter or a list of options.
	 * if none, the init and attach methods are being called.
	 * Remember: if you pass options, the attached method is NOT called automatically
	 *
	 * @param {String}
	 *            method (optional) action
	 */
	 $.fn.validationEngine = function(method) {

		 var form = $(this);
		 if(!form[0]) return form;  // stop here if the form does not exist

		 if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

			 // make sure init is called once
			 if(method != "showPrompt" && method != "hide" && method != "hideAll")
			 methods.init.apply(form);

			 return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
		 } else if (typeof method == 'object' || !method) {

			 // default constructor with or without arguments
			 methods.init.apply(form, arguments);
			 return methods.attach.apply(form);
		 } else {
			 $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
		 }
	};



	// LEAK GLOBAL OPTIONS
	$.validationEngine= {fieldIdCounter: 0,defaults:{

		// Name of the event triggering field validation
		validationEventTrigger: "blur",
		// Automatically scroll viewport to the first error
		scroll: true,
		// Focus on the first input
		focusFirstField:true,
		// Show prompts, set to false to disable prompts
		showPrompts: true,
		// Should we attempt to validate non-visible input fields contained in the form? (Useful in cases of tabbed containers, e.g. jQuery-UI tabs)
		validateNonVisibleFields: false,
		// ignore the validation for fields with this specific class (Useful in cases of tabbed containers AND hidden fields we don't want to validate)
		ignoreFieldsWithClass: 'ignoreMe',
		// Opening box position, possible locations are: topLeft,
		// topRight, bottomLeft, centerRight, bottomRight, inline
		// inline gets inserted after the validated field or into an element specified in data-prompt-target
		promptPosition: "topRight",
		bindMethod:"bind",
		// internal, automatically set to true when it parse a _ajax rule
		inlineAjax: false,
		// if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
		ajaxFormValidation: false,
		// The url to send the submit ajax validation (default to action)
		ajaxFormValidationURL: false,
		// HTTP method used for ajax validation
		ajaxFormValidationMethod: 'get',
		// Ajax form validation callback method: boolean onComplete(form, status, errors, options)
		// retuns false if the form.submit event needs to be canceled.
		onAjaxFormComplete: $.noop,
		// called right before the ajax call, may return false to cancel
		onBeforeAjaxFormValidation: $.noop,
		// Stops form from submitting and execute function assiciated with it
		onValidationComplete: false,

		// Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
		doNotShowAllErrosOnSubmit: false,
		// Object where you store custom messages to override the default error messages
		custom_error_messages:{},
		// true if you want to validate the input fields on blur event
		binded: true,
		// set to true if you want to validate the input fields on blur only if the field it's not empty
		notEmpty: false,
		// set to true, when the prompt arrow needs to be displayed
		showArrow: true,
		// set to false, determines if the prompt arrow should be displayed when validating
		// checkboxes and radio buttons
		showArrowOnRadioAndCheckbox: false,
		// did one of the validation fail ? kept global to stop further ajax validations
		isError: false,
		// Limit how many displayed errors a field can have
		maxErrorsPerField: false,

		// Caches field validation status, typically only bad status are created.
		// the array is used during ajax form validation to detect issues early and prevent an expensive submit
		ajaxValidCache: {},
		// Auto update prompt position after window resize
		autoPositionUpdate: false,

		InvalidFields: [],
		onFieldSuccess: false,
		onFieldFailure: false,
		onSuccess: false,
		onFailure: false,
		validateAttribute: "class",
		addSuccessCssClassToField: "",
		addFailureCssClassToField: "",

		// Auto-hide prompt
		autoHidePrompt: false,
		// Delay before auto-hide
		autoHideDelay: 10000,
		// Fade out duration while hiding the validations
		fadeDuration: 300,
	 // Use Prettify select library
	 prettySelect: false,
	 // Add css class on prompt
	 addPromptClass : "",
	 // Custom ID uses prefix
	 usePrefix: "",
	 // Custom ID uses suffix
	 useSuffix: "",
	 // Only show one message per error prompt
	 showOneMessage: false
	}};
	$(function(){$.validationEngine.defaults.promptPosition = methods.isRTL()?'topLeft':"topRight"});
})(jQuery);
;(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required",
                    "alertTextDateRange": "* Both date range fields are required"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Range"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Time Range"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters required"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* You must fill one of the following fields"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Invalid credit card number"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* Invalid phone number"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* Invalid email address"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date": {                    
                    //	Check if date is valid by leap year
			"func": function (field) {
					var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
					var match = pattern.exec(field.val());
					if (match == null)
					   return false;
	
					var year = match[1];
					var month = match[2]*1;
					var day = match[3]*1;					
					var date = new Date(year, month - 1, day); // because months starts from 0.
	
					return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
				},                		
			 "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* This name is already taken",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
	                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);

;jQuery(function(a){function b(a,b){this.sitekey=a,this.element=b,this.captchaObj=null}function c(b,c,d){a('input[type="hidden"]',b).last().validationEngine("showPrompt",c,d,"inline")}var d={render:function(){},getResponse:function(){return!0},reset:function(){}};b.prototype.render=function(){var a=this;grecaptcha.ready(function(){a.captchaObj=grecaptcha.render(a.element,{sitekey:a.sitekey})})},b.prototype.getResponse=function(){return grecaptcha.getResponse(this.captchaObj)},b.prototype.reset=function(){grecaptcha.reset(this.captchaObj)},a.fn.dtInitContactForm=function(){return this.each(function(){var e=a(this),f="";f=e.hasClass("privacy-form")?'<p class="dt-privacy-message">'+dtLocal.contactMessages.terms+"<p>":"";var g=d;dtLocal.captchaSiteKey&&(g=new b(dtLocal.captchaSiteKey,e.find(".the7-g-captcha")[0])),g.render(),e.validationEngine({binded:!1,promptPosition:"inline",scroll:!1,autoHidePrompt:!1,maxErrorsPerField:1,custom_error_messages:{required:{message:dtLocal.contactMessages.required+f}},fadeDuration:500,addPromptClass:"run-animation",onAjaxFormComplete:function(){},addSuccessCssClassToField:"field-success",onBeforeAjaxFormValidation:function(b,c){var d=a(b);d.find(".formError").removeClass("first"),d.find("input").removeClass("error-field"),d.find("textarea").removeClass("error-field")},onFailure:function(b,c){var d=a(b);d.find(".formError .close-message").length<=0&&d.find(".formError").append('<span class="close-message"></span>')},onValidationComplete:function(b,d){var e=a(b);if(e.find(".greenPopup").length>0&&e.find(".greenPopup").remove(),e.find(".formError").removeClass("first"),e.find("input").removeClass("error-field"),e.find("textarea").removeClass("error-field"),e.find(".formError").each(function(b,c){a(c).eq(b).addClass("first"),a(c).prev().addClass("error-field")}),a(".formError .close-message").remove(),e.find(".formError .close-message").length<=0&&e.find(".formError").append('<span class="close-message"></span>'),e.find("input.the7-form-terms").hasClass("field-success")&&e.find(".dt-privacy-message").addClass("hide-privacy-message"),d){var f=g.getResponse();if(!f)return void c(e,dtLocal.contactMessages.fillTheCaptchaError,"error");var h={widget_id:a('input[name="widget_id"]',e).val(),send_message:a('input[name="send_message"]',e).val(),security_token:a('input[name="security_token"]',e).val(),gcaptcha_token:f,fields:{}};e.find('input[type="text"], textarea').each(function(){var b=a(this);h.fields[b.attr("name")]=b.val()}),a.post(dtLocal.REST.baseUrl+dtLocal.REST.endpoints.sendMail,h,function(d){var f,h=a(b),i=d.success?"pass":"error";c(h,d.errors,i),e.find(".formError").addClass("field-success"),h.validationEngine("showPrompt","","","topRight"),g.reset(),d.success&&(h.find('input[type="text"], textarea').val(""),h.find('input[type="checkbox"]').removeProp("checked"),e.find(".formError .close-message").length<=0&&(e.find(".formError").append('<span class="close-message"></span>'),e.find(".formError .close-message").on("click",function(){e.find(".greenPopup").remove(),clearTimeout(f)})),clearTimeout(f),f=setTimeout(function(){e.find(".greenPopup").remove()},11e3))})}}}),e.find(".dt-btn.dt-btn-submit").on("click",function(b){b.preventDefault(),a(this).parents("form").submit()}),e.find(".clear-form").on("click",function(b){b.preventDefault();var c=a(this).parents("form");c.length>0&&(c.find('input[type="text"], textarea').val(""),c.validationEngine("hide"))})})},a("form.dt-contact-form.dt-form").dtInitContactForm()});