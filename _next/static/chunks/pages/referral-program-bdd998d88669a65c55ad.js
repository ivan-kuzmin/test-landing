_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"5Xku":function(a,e,r){"use strict";r.r(e);var t=r("q1tI"),s=r.n(t),i=r("PWSX"),c=s.a.createElement;e.default=function(){return c("div",{className:"legacy"},c(i.a,{lang:"en"}))}},D6y4:function(a,e,r){a.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px",Preloader:"Preloader_Preloader__3LJFk",Preloader__circular:"Preloader_Preloader__circular__3X2Wu",rotate:"Preloader_rotate__2R2i-",Preloader__path:"Preloader_Preloader__path__3w_02",dash:"Preloader_dash__1yuok"}},PWSX:function(a,e,r){"use strict";var t=r("q1tI"),s=r.n(t),i=r("9Koi"),c=r("MLMA"),l=r("Zttt"),o=r("kGNW"),n=s.a.createElement;e.a=function(a){var e=a.lang,r=Object(t.useState)(""),s=r[0],_=r[1],m=Object(t.useState)(!1),d=m[0],u=m[1],v=Object(t.useState)(!1),g=v[0],w=v[1],N=Object(t.useState)(!1),f=N[0],p=N[1],k=Object(c.s)(),h=Object(t.useContext)(c.g).setData,b=Object(i.a)().t("referral_program",{returnObjects:!0}),x=function(){var a,e,r=null===(a=window)||void 0===a||null===(e=a.__APP_CONFIG__)||void 0===e?void 0:e.apiUrl;r&&fetch("".concat(r,"/user/data"),{credentials:"include"}).then((function(a){return a.json()})).then((function(a){u(!0),200===a.status&&a.data&&(_(a.data.referral),h(a.data))}))};Object(t.useEffect)((function(){document.dispatchEvent(new Event("referralPageLoaded"));var a=function(a){"mercuryoSignedIn"===a.data.type&&(p(!1),x())};return window.addEventListener("message",a),x(),function(){window.removeEventListener("message",a)}}),[]);var y=Object(t.useRef)(),P=function(){p(!1)};return n(l.a,{className:"referral-program",i18Name:"referral_program.head",lang:e},f&&n("div",{className:"iframe-backdrop",onClick:P,role:"button"},n("div",{className:"iframe-close",onClick:P,role:"button"}),n("div",{className:"iframe-container"},n("iframe",{src:"".concat(k,"/login"),width:"100%",height:"100%",frameBorder:"0",title:"Mercuryo wallet"})),n(o.a,null)),n("section",{className:"section__referral"},n("div",{className:"referral container"},n("div",{className:"referral__content"},n("div",{className:"referral__info"},n("h1",{className:"referral__info-title"},b.h1),n("div",{className:"referral__info-text"},b.content_description),s?n("div",{className:"referral__link"},n("div",{className:"referral__link-text"},b.share_link),n("div",{className:"referral__link-elem-wrap"},n("div",{className:"referral__link-input"},n("input",{id:"input-ref",type:"text",value:"https://mercuryoapp.app.link/".concat(s),ref:y}),n("div",{className:"referral__link-input--text"},"https://mercuryoapp.app.link/",s)),n("div",{className:"referral__link-btn"},n("button",{className:"btn_orange js-copy-ref",type:"button",onClick:function(){y.current.select(),y.current.setSelectionRange(0,99999),document.execCommand("copy"),w(!0),setTimeout((function(){w(!1)}),3e3)},disabled:g},g?b.copied:b.copy)))):n("div",{className:"referral__info-btn".concat(d?"":" referral__info-btn_hidden")},n("button",{type:"button",className:"btn_orange",onClick:function(){p(!0)}},b.start_earning))),n("div",{className:"referral__img"},n("img",{src:"/static/img/referral-program/ref_img.svg",alt:b.h1}))))),n("section",{className:"section__how-it-work container"},n("h2",{className:"text_center desktop_only"},b.how_it_works),n("div",{className:"how-it-work"},n("div",{className:"how-it-work__img"},n("img",{src:"/static/img/referral-program/work_img.svg",alt:b.how_it_works})),n("h2",{className:"text_center mobile_only"},b.how_it_works),n("div",{className:"how-it-work__list"},n("div",{className:"how-it-work__list-item"},n("div",{className:"how-it-work__list-item--icon"},n("img",{src:"/static/img/referral-program/work_1.svg",alt:b.sign_in})),n("div",{className:"how-it-work__list-item--text"},b.how_it_works1)),n("div",{className:"how-it-work__list-item"},n("div",{className:"how-it-work__list-item--icon"},n("img",{src:"/static/img/referral-program/work_2.svg",alt:b.how_it_works2})),n("div",{className:"how-it-work__list-item--text"},b.how_it_works2)),n("div",{className:"how-it-work__list-item"},n("div",{className:"how-it-work__list-item--icon"},n("img",{src:"/static/img/referral-program/work_3.svg",alt:b.get_royalty})),n("div",{className:"how-it-work__list-item--text"},b.how_it_works3))))),n("section",{className:"section__calculator"},n("div",{className:"calculator"},n("h2",{className:"calculator__title"},b.calculate),n("div",{className:"calculator__content"},n("div",{className:"calculator__ranges"},n("div",{className:"calculator__ranges-row"},n("div",{className:"calculator__ranges-row--number",id:"referred-value"},"600"),n("div",{className:"calculator__ranges-row--text"},b.how_many_users),n("div",{className:"calculator__ranges-row--slider-wrap"},n("div",{className:"calculator__ranges-row--slider slider__referred",id:"referred"}))),n("div",{className:"calculator__ranges-row"},n("div",{className:"calculator__ranges-row--number",id:"transaction-amount-value"},"600"),n("div",{className:"calculator__ranges-row--text"},b.transaction_amount),n("div",{className:"calculator__ranges-row--slider-wrap"},n("div",{className:"calculator__ranges-row--slider slider__transaction-amount",id:"transaction-amount"}))),n("div",{className:"calculator__ranges-row"},n("div",{className:"calculator__ranges-row--number",id:"transactions-user-value"},"600"),n("div",{className:"calculator__ranges-row--text"},b.transactions_per_user),n("div",{className:"calculator__ranges-row--slider-wrap"},n("div",{className:"calculator__ranges-row--slider slider__transactions-user",id:"transactions-user"})))),n("div",{className:"calculator__earn"},n("div",{className:"calculator__earn-cash",id:"earn-cash"},"500"),n("div",{className:"calculator__earn-text"},b.you_earn))))),n("section",{className:"section__advantages container"},n("h2",{className:"text_left"},b.advantages),n("div",{className:"advantages"},n("div",{className:"advantages__content"},n("div",{className:"advantages__item"},n("div",{className:"advantages__item-icon"},n("img",{src:"/static/img/referral-program/advantage_1.svg",alt:b.get_your_bonus})),n("div",{className:"advantages__item-text"},b.advantages1)),n("div",{className:"advantages__item"},n("div",{className:"advantages__item-icon"},n("img",{src:"/static/img/referral-program/advantage_2.svg",alt:b.invite_referrals})),n("div",{className:"advantages__item-text"},b.advantages2)),n("div",{className:"advantages__item"},n("div",{className:"advantages__item-icon"},n("img",{src:"/static/img/referral-program/advantage_3.svg",alt:"BTC"})),n("div",{className:"advantages__item-text"},b.advantages3))))))}},kGNW:function(a,e,r){"use strict";var t=r("q1tI"),s=r.n(t),i=r("MLMA"),c=r("D6y4"),l=r.n(c),o=s.a.createElement,n=Object(i.j)(l.a,"Preloader");e.a=function(a){var e=a.className,r=a.color;return o("div",{className:n(null,[e])},o("svg",{className:n("circular"),viewBox:"25 25 50 50"},o("circle",{className:n("path"),cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"4",strokeMiterlimit:"10",stroke:r||"var(--color-orange-primary)"})))}},t4i7:function(a,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/referral-program",function(){return r("5Xku")}])}},[["t4i7",0,2,1,3,4,5]]]);