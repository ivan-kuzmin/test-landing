(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"1zWx":function(t,e,n){t.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px","desktop-hd":"1919px",Button:"Button_Button__26YoF",Button_secondary:"Button_Button_secondary__24rRv"}},"8u59":function(t,e,n){t.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px","desktop-hd":"1919px",Rate:"Rate_Rate__2I8Mz"}},"9/5/":function(t,e,n){(function(e){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,i=parseInt,r="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=r||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,_=Math.min,p=function(){return u.Date.now()};function f(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(f(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=f(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var r=a.test(t);return r||c.test(t)?i(t.slice(2),r?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var o,a,c,i,r,l,u=0,s=!1,b=!1,k=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=o,c=a;return o=a=void 0,u=e,i=t.apply(c,n)}function x(t){return u=t,r=setTimeout(h,e),s?v(t):i}function g(t){var n=t-l;return void 0===l||n>=e||n<0||b&&t-u>=c}function h(){var t=p();if(g(t))return B(t);r=setTimeout(h,function(t){var n=e-(t-l);return b?_(n,c-(t-u)):n}(t))}function B(t){return r=void 0,k&&o?v(t):(o=a=void 0,i)}function y(){var t=p(),n=g(t);if(o=arguments,a=this,l=t,n){if(void 0===r)return x(l);if(b)return r=setTimeout(h,e),v(l)}return void 0===r&&(r=setTimeout(h,e)),i}return e=m(e)||0,f(n)&&(s=!!n.leading,c=(b="maxWait"in n)?d(m(n.maxWait)||0,e):c,k="trailing"in n?!!n.trailing:k),y.cancel=function(){void 0!==r&&clearTimeout(r),u=0,o=l=a=r=void 0},y.flush=function(){return void 0===r?i:B(p())},y}}).call(this,n("ntbh"))},"L0/N":function(t,e,n){t.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px","desktop-hd":"1919px",WidgetBlock:"WidgetBlock_WidgetBlock__1UbgD",WidgetBlock_darkMode:"WidgetBlock_WidgetBlock_darkMode__Swvff",WidgetBlock__content:"WidgetBlock_WidgetBlock__content__GgwZJ",WidgetBlock__title:"WidgetBlock_WidgetBlock__title__1d49P","WidgetBlock__theme-button":"WidgetBlock_WidgetBlock__theme-button__hjkGv",WidgetBlock__inputs:"WidgetBlock_WidgetBlock__inputs__1I4PP","WidgetBlock__inputs-start":"WidgetBlock_WidgetBlock__inputs-start__IjByT","WidgetBlock__inputs-end":"WidgetBlock_WidgetBlock__inputs-end__26aX_",WidgetBlock__divider:"WidgetBlock_WidgetBlock__divider__QWb6I",WidgetBlock__divider_darkMode:"WidgetBlock_WidgetBlock__divider_darkMode__3TQVI",WidgetBlock__address:"WidgetBlock_WidgetBlock__address__2O34_",WidgetBlock__rate:"WidgetBlock_WidgetBlock__rate__33gSM"}},NNWm:function(t,e,n){t.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px","desktop-hd":"1919px",ThemeButton:"ThemeButton_ThemeButton__EpxdU",ThemeButton__label:"ThemeButton_ThemeButton__label__XTVyO",ThemeButton__checkbox:"ThemeButton_ThemeButton__checkbox__3Gpp-",ThemeButton__checkbox_light:"ThemeButton_ThemeButton__checkbox_light__OZbZL",ThemeButton__checkmark:"ThemeButton_ThemeButton__checkmark__3ufx8",ThemeButton__checkmark_darkMode:"ThemeButton_ThemeButton__checkmark_darkMode__3-3Lg"}},"R3+a":function(t,e,n){"use strict";var o,a,c=n("HALo"),i=n("q1tI"),r=n.n(i),l=n("9Koi"),u=n("9/5/"),s=n.n(u),d=n("Qyje"),_=n.n(d),p=n("MLMA"),f=n("NNWm"),m=n.n(f),b=r.a.createElement,k=Object(p.j)(m.a,"ThemeButton"),v=function(t){var e=t.className,n=t.darkMode;return b("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("circle",{cx:"12",cy:"12",r:"11.5",fill:"#FBFBFB"}),b("path",n?{d:"M7.5 12.5L10.5 16L18 7"}:{d:"M14.8284 9.17169L9.17157 14.8285M14.8284 14.8285L9.17157 9.17169"}))},x=function(t){var e=t.className,n=t.darkMode,o=t.setDarkMode;return b("button",{type:"button",className:k(null,[e]),onClick:function(){o(!n)}},b("span",{className:k("label")},"Dark"),b("div",{className:k("checkbox",{light:!n})},b(v,Object(c.a)({className:k("checkmark",{darkMode:n})},{darkMode:n}))))},g=n("dhJC");function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var B,y=function(t){return i.createElement("svg",h({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),o||(o=i.createElement("circle",{cx:12,cy:12,r:7.5,stroke:"currentColor"})),a||(a=i.createElement("path",{d:"M15.182 9.525a.5.5 0 00-.707-.707l.707.707zm-6.364 4.95a.5.5 0 10.707.707l-.707-.707zm5.657.707a.5.5 0 10.707-.707l-.707.707zm-4.95-6.364a.5.5 0 00-.707.707l.707-.707zm4.95 0l-5.657 5.657.707.707 5.657-5.657-.707-.707zm.707 5.657L9.525 8.818l-.707.707 5.657 5.657.707-.707z",fill:"currentColor"})))},j=n("sAwW"),w=n.n(j),O=r.a.createElement,N=Object(p.j)(w.a,"Input"),W=function(t){var e=t.className,n=t.label,o=t.darkMode,a=t.children,i=t.value,r=t.onChange,l=t.resetButton,u=Object(g.a)(t,["className","label","darkMode","children","value","onChange","resetButton"]);return O("div",{className:N(null,[e])},O("label",{className:N("label")},n,O("input",Object(c.a)({type:"text",className:N("input",{darkMode:o,withSelect:!!a}),value:i,onChange:function(t){r(t.target.value)}},u)),l&&!!i&&O("button",{type:"button",className:N("reset-icon"),onClick:function(){return r("")}},O(y,null))),!!a&&O("div",{className:N("select",{darkMode:o})},a))},I=n("TSDZ");function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var E,C=function(t){return i.createElement("svg",M({width:12,height:6,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),B||(B=i.createElement("path",{d:"M11.5.5L6 5.5.5.5",stroke:"#F4EEE7",strokeLinecap:"round",strokeLinejoin:"round"})))},S=n("sYE4"),T=n.n(S),L=r.a.createElement,P=Object(p.j)(T.a,"Select"),A=function(t){var e=t.className,n=t.list,o=t.darkMode,a=t.value,r=t.onChange,l=Object(i.useState)(!1),u=l[0],s=l[1];return L("div",{className:P(null,[e])},L("button",{type:"button",className:P("button"),onClick:function(){s(!u)}},a,L(C,{className:P("icon")})),n&&u&&L(I.a,Object(c.a)({className:P("menu"),onChange:function(t){r(t),s(!1)}},{list:n,setIsOpen:s,darkMode:o})))},F=n("ww3E"),z=n("Y+rp"),D=n.n(z),R=r.a.createElement,$=Object(p.j)(D.a,"Buy"),G=function(t){var e=t.className,n=t.fiatAmount,o=t.fiatCurrency,a=t.amount,c=t.currency,r=t.address,u=Object(l.a)().t("widget.widget_block",{returnObjects:!0}),s={fiat_amount:n,fiat_currency:o,amount:a,currency:c,address:r};Object(i.useEffect)((function(){E=window.dataLayer||[]}));return R("a",{className:$(null,[e]),href:"https://exchange.mercuryo.io/".concat(_.a.stringify(s,{addQueryPrefix:!0,filter:function(t,e){return e||void 0}})),onClick:function(){E&&E.push({event:"autoEvent",eventCategory:"buy-btc",eventAction:"success",eventLabel:"click"})},target:"_blank",rel:"noopener noreferrer nofollow"},R(F.a,{className:$("button")},u.buy))},Q=n("8u59"),U=n.n(Q),J=r.a.createElement,Y=Object(p.j)(U.a,"Rate"),Z=function(t){var e=t.className,n=t.currency,o=t.fiatCurrency,a=t.widgetID,c=Object(l.a)().t("widget.widget_block",{returnObjects:!0}),u=Object(i.useState)(""),s=u[0],d=u[1],p=Object(i.useState)(!0),f=p[0],m=p[1],b=_.a.stringify({widget_id:a},{addQueryPrefix:!0});return Object(i.useEffect)((function(){!function(){var t,e;m(!0),fetch("".concat(null===(t=window)||void 0===t||null===(e=t.__APP_CONFIG__)||void 0===e?void 0:e.apiUrl,"/widget/rates").concat(b)).then((function(t){return t.json()})).then((function(t){var e,a,c,i=null===(e=t.data)||void 0===e||null===(a=e.buy)||void 0===a||null===(c=a[n])||void 0===c?void 0:c[o];200===t.status&&i&&(d(i),m(!1))}))}()}),[n,o]),J("div",{className:Y(null,[e])},J("span",null,c.price," ",!f&&!!s&&J(r.a.Fragment,null,"1\xa0",n,"\xa0=\xa0",s,"\xa0",o)))},q=n("L0/N"),X=n.n(q),H=r.a.createElement,K=Object(p.j)(X.a,"WidgetBlock"),V=s()((function(t,e,n,o,a){var c,i,r,l,u={widget_id:null===(c=window)||void 0===c||null===(i=c.__APP_CONFIG__)||void 0===i?void 0:i.exchangeWidgetId,from:t,to:e,amount:n};fetch("".concat(null===(r=window)||void 0===r||null===(l=r.__APP_CONFIG__)||void 0===l?void 0:l.apiUrl,"/widget/buy/rate").concat(_.a.stringify(u,{addQueryPrefix:!0}))).then((function(t){return t.json()})).then((function(t){if(200!==t.status)throw t;o(t)})).catch((function(e){var n=e.code,o=e.data;a(n,o,t)}))}),500);e.a=function(t){var e=t.className,n=Object(l.a)().t,o=Object(i.useState)({fiat:["EUR"],crypto:["BTC"]}),a=o[0],r=o[1],u=Object(i.useContext)(p.a).setError,s=Object(i.useState)(!0),d=s[0],_=s[1],f=Object(i.useState)("BTC"),m=f[0],b=f[1],k=Object(i.useState)("EUR"),v=k[0],g=k[1],h=Object(i.useState)(""),B=h[0],y=h[1],j=Object(i.useState)(""),w=j[0],O=j[1],N=Object(i.useState)(""),I=N[0],M=N[1],E=Object(i.useState)(""),C=E[0],S=E[1],T=function(t){return new RegExp("^\\d+\\.?\\d{0,".concat(t,"}$"))},L=function(t){return t.replace(/^[0]((0\.)?\d+)$/,"$1").replace(/[,]$/,".")},P=function(t){var e,n,o,c=null===a||void 0===a||null===(e=a.config)||void 0===e||null===(n=e.display_options)||void 0===n||null===(o=n[t])||void 0===o?void 0:o.display_digits;return+c>=0?c:2};Object(i.useEffect)((function(){var t,e,n,o;S(null===(t=window)||void 0===t||null===(e=t.__APP_CONFIG__)||void 0===e?void 0:e.exchangeWidgetId),fetch("".concat(null===(n=window)||void 0===n||null===(o=n.__APP_CONFIG__)||void 0===o?void 0:o.apiUrl,"/lib/currencies")).then((function(t){return t.json()})).then((function(t){if(200!==t.status)throw t;r(t.data)}))}),[]);var F=function(){y(""),O("")},z=function(t,e,n){var o="";400005===t?o="".concat(n,": minimum ").concat(+e[n].min,", maximum ").concat(+e[n].max,"."):e&&(o=e.amount),u(o||"An error occurred. Please try again later."),n===v?y(""):n===m&&O("")};return H("div",{className:K({darkMode:d},[e])},H("div",{className:K("content")},H("div",{className:K("title")},n("widget.widget_block.title")),H(x,Object(c.a)({className:K("theme-button")},{darkMode:d,setDarkMode:_})),H("div",{className:K("inputs")},H("div",{className:K("inputs-start")},H(W,Object(c.a)({className:K("fiat"),label:"Fiat",value:w,onChange:function(t){var e=L(t);if(""===e)F();else if(e>=0&&T(P(v)).test(e)){O(e);e>0&&V(v,m,e.replace(/[.]$/,""),(function(t){var e=t.data.amount;y(e),u("")}),z)}},placeholder:"0.00"},{darkMode:d}),H(A,Object(c.a)({value:v,onChange:function(t){if(u(""),g(t),w){V(t,m,w,(function(t){var e=t.data.amount;y(e),u("")}),z)}},list:a.fiat},{darkMode:d}))),H("div",{className:K("divider",{darkMode:d})},"="),H(W,Object(c.a)({className:K("crypto"),label:"Crypto",value:B,onChange:function(t){var e=L(t);if(""===e)F();else if(e>=0&&T(P(m)).test(e)){y(e);e>0&&V(m,v,e.replace(/[.]$/,""),(function(t){var e=t.data.fiat_amount;O(e),u("")}),z)}},placeholder:"0.00"},{darkMode:d}),H(A,Object(c.a)({value:m,onChange:function(t){if(u(""),b(t),B){V(t,v,B,(function(t){var e=t.data.fiat_amount;O(e),u("")}),z)}},list:a.crypto},{darkMode:d})))),H("div",{className:K("inputs-end")},H(W,Object(c.a)({className:K("address"),label:n("widget.widget_block.address",{currency:m}),value:I,onChange:M},{darkMode:d},{resetButton:!0})),H(G,{fiatAmount:w,fiatCurrency:v,amount:B,currency:m,address:I}))),C&&H(Z,Object(c.a)({className:K("rate")},{currency:m,fiatCurrency:v,widgetID:C}))))}},"Y+rp":function(t,e,n){t.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px","desktop-hd":"1919px",Buy__button:"Buy_Buy__button__3i6Ng"}},sAwW:function(t,e,n){t.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px","desktop-hd":"1919px",Input:"Input_Input__71EJK",Input__label:"Input_Input__label__3OzlW",Input__label__input:"Input_Input__label__input__1jks3",Input__input:"Input_Input__input__1zJtj",Input__input_darkMode:"Input_Input__input_darkMode__26UMx",Input__input_withSelect:"Input_Input__input_withSelect__3lktY","Input__reset-icon":"Input_Input__reset-icon__1nQNL",Input__select:"Input_Input__select__2MNkR",Input__select_darkMode:"Input_Input__select_darkMode__2O_xh"}},sYE4:function(t,e,n){t.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px","desktop-hd":"1919px",Select:"Select_Select__2dy_o",Select__button:"Select_Select__button__5YhDG",Select__icon:"Select_Select__icon__2EQ82",Select__menu:"Select_Select__menu__2XqmD"}},ww3E:function(t,e,n){"use strict";var o=n("HALo"),a=n("dhJC"),c=n("q1tI"),i=n.n(c),r=n("MLMA"),l=n("1zWx"),u=n.n(l),s=i.a.createElement,d=Object(r.j)(u.a,"Button");e.a=function(t){var e=t.children,n=t.className,c=t.secondary,i=t.type,r=void 0===i?"button":i,l=Object(a.a)(t,["children","className","secondary","type"]);return s("button",Object(o.a)({type:r,className:d({secondary:c},[n,"base-box"])},l),e)}}}]);