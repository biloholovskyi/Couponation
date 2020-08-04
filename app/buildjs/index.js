!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n,t){var o=t(1),i=t(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);e.exports=i.locals||{}},function(e,n,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function r(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],i=0;i<e.length;i++){var a=e[i],c=n.base?a[0]+n.base:a[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=r(d),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(s[u].references++,s[u].updater(h)):s.push({identifier:d,updater:v(h,n),references:1}),o.push(d)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function h(e,n,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(n,i);else{var a=document.createTextNode(i),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(a,s[n]):e.appendChild(a)}}function f(e,n,t){var o=t.css,i=t.media,a=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,p=0;function v(e,n){var t,o,i;if(n.singleton){var a=p++;t=m||(m=l(n)),o=h.bind(null,t,a,!1),i=h.bind(null,t,a,!0)}else t=l(n),o=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var i=r(t[o]);s[i].references--}for(var a=c(e,n),l=0;l<t.length;l++){var d=r(t[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}t=a}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=(s=o,r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(c," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}var s,r,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n){$(document).ready((function(){$(".Drop").on("click",(function(){$(this).children(".dropdown-menu").toggleClass("active"),$(this).toggleClass("active"),$(this).children("button").find(".plus").toggleClass("active"),$(this).children("button").find(".minus").toggleClass("active")})),$(".newtwork__droplist").on("click",(function(){$(this).toggleClass("show"),$(this).children(".network_arrow").toggleClass("active"),$(".network__page .admin__content .drop-info").toggleClass("network-hidden")}))}))},function(e,n){var t;window.onscroll=function(){(t=window.pageYOffset||document.createElement.scrollTop)>80&&($(".header").addClass("active"),$(".alphabet-single-wrap").addClass("active"),$(".mobile-menu").addClass("shadow")),80>t&&($(".header").removeClass("active"),$(".alphabet-single-wrap").removeClass("active"),$(".mobile-menu").removeClass("shadow"))},$(document).ready((function(){var e=$("#sticky"),n=e.offset().top;e.css("marginTop");$(window).scroll((function(){var t=$(window).scrollTop();t>=n&&(e.addClass("shadows"),e.css({marginTop:0,position:"fixed",top:63}),$(".header").removeClass("active")),t<n&&(e.removeClass("shadows"),e.css({marginTop:0,position:"relative",top:0}),$(".mobile__nav").find(".firstAnhors").addClass("active").siblings().removeClass("active"))}))})),$(document).ready((function(){var e=$("#abc"),n=e.offset().top;e.css("marginTop");$(window).scroll((function(){var t=$(window).scrollTop();t>=n&&(e.addClass("stikyAbc"),e.css({marginTop:0,position:"fixed",top:63})),t<n&&(e.removeClass("stikyAbc"),e.css({marginTop:0,position:"relative",top:0}))}))}))},function(e,n){$(".anhors").on("click",(function(e){e.preventDefault();var n=$(this).attr("href"),t=$(n).offset().top-150;$("body, html").animate({scrollTop:t},800)}))},function(e,n){$((function(){$("textarea[id='text-count']").keyup((function(){number=$("textarea[id='text-count']").val().length,$("#count").html(+number)}))})),$((function(){$("input[id='text-counter']").keyup((function(){number=$("input[id='text-counter']").val().length,$("#counter").html(+number)}))}))},function(e,n){$("#addSHopBtn").on("click",(function(){$(".addShops__modal--overlay").addClass("active"),$("body").css({overflow:"hidden",position:"relative",height:"100vh"})})),$(".shops__modal--close").on("click",(function(){$(".addShops__modal--overlay").removeClass("active"),$("input").val(""),$("textarea").val(""),$(".admin-form .double .input-item").removeClass("input"),$("textarea").removeClass("input"),$("#count").html("0"),$("#counter").html("0"),$("body").css({overflow:"visible",position:"relative",height:"100%"})}))},function(e,n,t){"use strict";t.r(n);t(0),t(4),t(5),t(6);function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,i;return n=e,(t=[{key:"show",value:function(e){e.currentTarget.classList.toggle("show"),e.currentTarget.parentElement.classList.toggle("show"),e.currentTarget.classList.contains("show")?this.showNext(e.currentTarget.parentElement):this.hiddenNext(e.currentTarget.parentElement)}},{key:"showNext",value:function(e){var n=e.nextElementSibling;n&&n.classList.contains("hidden")&&(n.classList.remove("hidden-no"),this.showNext(n))}},{key:"hiddenNext",value:function(e){var n=e.nextElementSibling;n&&n.classList.contains("hidden")&&(n.classList.add("hidden-no"),this.hiddenNext(n))}}])&&o(n.prototype,t),i&&o(n,i),e}();t(7);function a(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,(t=[{key:"toggle",value:function(){document.querySelector(".dashboard .admin__content .general__block .general__statistic p img").classList.toggle("show"),document.querySelector(".dashboard .admin__content .general__block .general__statistic .hover-block").classList.toggle("show")}},{key:"filterToggle",value:function(e){e.target.classList.contains("hover-block")||e.target.closest(".hover-block")||(document.querySelectorAll(".type-select-js").forEach((function(n){n!==e.currentTarget&&n.classList.remove("show")})),e.currentTarget.classList.toggle("show"))}}])&&a(n.prototype,t),o&&a(n,o),e}(),r=(t(8),new i),c=new s;$(document).ready((function(e){$("#saveChange").on("click",(function(){$(".shop_succefully").css("display","flex"),setTimeout((function(){$(".shop_succefully").css("display","none")}),3e3)})),$("#savePass").on("click",(function(){$(".pass__succes").css("display","flex"),setTimeout((function(){$(".pass__succes").css("display","none")}),3e3)})),$("#createCoupon").on("click",(function(){$(this).parents(".admin__modal--overlay").hide(),$(".shop_succefully").css("display","flex"),setTimeout((function(){$(".shop_succefully").css("display","none")}),3e3)})),$(".new_user").on("click",(function(){$(".invite__user--overlay").css("display","flex"),$("body").css({overflow:"hidden",position:"relative",height:"100vh"})})),$(".invite__user--close").on("click",(function(){$(".invite__user--overlay").css("display","none"),$(".small-form__form input").val(""),$(".small-form__form").removeClass("input"),$("body").css({overflow:"visible",position:"relative",height:"100%"})})),$(".smile__block .smile").on("click",(function(){$(this).children(".smile__selected").toggleClass("active"),$(this).toggleClass("active")})),$("#change-emoji").on("click",(function(){$(".change__emoji--overlay").addClass("active"),$("body").css({overflow:"hidden",position:"relative",height:"100vh"})})),$(".change__emoji--close").on("click",(function(){$(".change__emoji--overlay").removeClass("active"),$("body").css({overflow:"visible",position:"relative",height:"100%"})})),document.querySelectorAll(".api-sources__table .api-table__body tr td.name--width").forEach((function(e){e.addEventListener("click",(function(e){return r.show(e)}))})),document.querySelector(".dashboard .admin__content .general__block .general__statistic p")&&document.querySelector(".dashboard .admin__content .general__block .general__statistic p").addEventListener("click",c.toggle),document.querySelectorAll(".type-select-js").forEach((function(e){e.addEventListener("click",(function(e){return c.filterToggle(e)}))})),document.querySelectorAll("textarea").forEach((function(e){e.value=""})),$(".mobile__nav .shopLinks").on("click",(function(e){return function(e){$(e.currentTarget).hasClass("active")||($(e.currentTarget).siblings().removeClass("active"),$(e.currentTarget).addClass("active"))}(e)})),$(".categories-btn").on("click",(function(){$(this).hide(),$(this).parents(".categories-items").children(".hidden-category ").css("display","flex")})),$("#coupon-slider").owlCarousel({loop:!1,nav:!0,navText:"",dots:!1,autoplay:!1,margin:10,items:5,responsive:{0:{items:2,dots:!0},575:{items:3},767:{items:4},991:{items:5}}}),$(".main-slider__body").owlCarousel({loop:!1,nav:!0,navText:"",dots:!1,autoplay:!1,margin:10,items:5,responsive:{0:{items:2},575:{items:3},767:{items:4},991:{items:5}}}),$(".small-form__form input,.small-form__form textarea").on("input",(function(e){return function(e){var n=$(e.currentTarget);""===n.val()?(n.parent("form").removeClass("input"),n.parent(".input-item").removeClass("input")):(n.parent("form").addClass("input"),n.parent(".input-item").addClass("input"))}(e)})),$(".addNewCoupon").on("click",(function(){$(".admin__modal--overlay").css({display:"flex"}),$("body").css({overflow:"hidden",position:"relative",height:"100vh"})})),$(".getCode").on("click",(function(){$(".getCode__modal--overlay").css({display:"flex"}),$("body").css({overflow:"hidden",position:"relative",height:"100vh"})})),$(".getCode__modal--close").on("click",(function(){$(".getCode__modal--overlay").css({display:"none"}),$("body").css({overflow:"visible",position:"relative",height:"100%"})})),$(".change_shop").on("click",(function(){$(".shop__modal--overlay").css({display:"flex"}),$("body").css({overflow:"hidden",position:"relative",height:"100vh"})})),$(".adm__modal--close").on("click",(function(){$(".admin__modal--overlay").css({display:"none"}),$(".shop__modal--overlay").css({display:"none"}),$("input").val(""),$("textarea").val(""),$(".admin-form .double .input-item").removeClass("input"),$("textarea").removeClass("input"),$("#count").html("0"),$("#counter").html("0"),$("body").css({overflow:"visible",position:"relative",height:"100%"})})),$(".block").on("click",(function(){$(this).hide(),$(this).parent(".coupon__btn--section").find(".unblock").show()})),$(".unblock").on("click",(function(){$(this).hide(),$(this).parent(".coupon__btn--section").find(".block").show()})),$(".adm-tab__head .tabs .tab").on("click",(function(e){!function(e){var n=$(".adm-tab__head .tabs .tab"),t=$(e.currentTarget);n.removeClass("active"),t.addClass("active");var o=t.attr("id").split("tab-")[1];$(".adm-tab__body").removeClass("show"),$("#body-"+o).addClass("show")}(e)})),$(".grf-tab__head .tabs .tab").on("click",(function(e){!function(e){var n=$(".grf-tab__head .tabs .tab"),t=$(e.currentTarget);n.removeClass("active"),t.addClass("active");var o=t.attr("id").split("tab-")[1];$(".grf-tab__body").removeClass("show"),$("#body-"+o).addClass("show")}(e)})),$(".user-tab__head .tabs .tab").on("click",(function(e){!function(e){var n=$(".user-tab__head .tabs .tab"),t=$(e.currentTarget);n.removeClass("active"),t.addClass("active");var o=t.attr("id").split("tab-")[1];$(".user-tab__body").removeClass("show"),$("#body-"+o).addClass("show")}(e)})),$(".stat-tab__head .tabs .tab").on("click",(function(e){!function(e){var n=$(".stat-tab__head .tabs .tab"),t=$(e.currentTarget);n.removeClass("active"),t.addClass("active");var o=t.attr("id").split("tab-")[1];$(".stat-tab__body").removeClass("show"),$("#body-"+o).addClass("show")}(e)})),$(".moder-tab__head .tabs .tab").on("click",(function(e){!function(e){var n=$(".moder-tab__head .tabs .tab"),t=$(e.currentTarget);n.removeClass("active"),t.addClass("active");var o=t.attr("id").split("tab-")[1];$(".moder-tab__body").removeClass("show"),$("#body-"+o).addClass("show")}(e)})),$(".burder-btn").on("click",(function(){$(this).toggleClass("active"),$(this).parents(".header").children(".header__logo").toggleClass("active"),$(".close-menu").toggleClass("active"),$(".mobile-menu").toggleClass("active"),$(".header").css("border-bottom","none"),$(".stikyAbc").css("z-index","18"),$(".mobile__nav").css("z-index","18"),$(".mobile-menu").hasClass("active")&&$(".header").css("box-shadow","none")})),$(".close-menu").on("click",(function(){$(this).toggleClass("active"),$(this).parents(".header").children(".header__logo").toggleClass("active"),$(".burder-btn").toggleClass("active"),$(".mobile-menu").toggleClass("active"),$(".header").css("box-shadow","0 6px 16px rgba(0,0,0,.12)"),$(".header").css("border-bottom","1px solid #ebebeb"),$(".stikyAbc").css("z-index","20"),$(".mobile__nav").css("z-index","20")})),$((function(){var e=window.location.href;$(".top-category__body .categoryItem").each((function(){var n=$(this).attr("href");-1!==e.indexOf(n)&&$(this).addClass("active")}))})),$(".subscribe").on("click",(function(){$(".subscribe__modal").css("display","flex"),$(".getCode__modal--overlay").css("display","none"),$("body").css({overflow:"visible",position:"relative",height:"100%"}),setTimeout((function(){$(".subscribe__modal").css("display","none")}),3e3)})),$(".publish").on("click",(function(){$(this).toggleClass("active")}))})),$(document).on("click",(function(e){var n=$(".admin__modal, .shop__modal, .getCode__modal, .change__emoji--modal, .invite__user--modal, .shops__modal"),t=$(".addNewCoupon, .change_shop, .getCode, #change-emoji,.new_user, #addSHopBtn");t.is(e.target)||0!==t.has(e.target).length||n.is(e.target)||0!==n.has(e.target).length||($(".admin__modal--overlay").css({display:"none"}),$(".shop__modal--overlay").css({display:"none"}),$(".getCode__modal--overlay").css({display:"none"}),$(".change__emoji--overlay").removeClass("active"),$(".invite__user--overlay").css({display:"none"}),$(".addShops__modal--overlay").removeClass("active"),$("body").css({overflow:"visible",position:"relative",height:"100%"}))}));var l=document.querySelector(".publish");l.addEventListener("click",(function(){l.innerHTML="unpublish"===l.innerHTML?l.innerHTML="publish":l.innerHTML="unpublish"})),$(window).resize((function(){}))}]);