_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"5Xku":function(a,e,t){"use strict";t.r(e);var r=t("q1tI"),s=t.n(r),i=t("PWSX"),n=s.a.createElement;e.default=function(){return n("div",{className:"legacy"},n(i.a,{lang:"en"}))}},D6y4:function(a,e,t){a.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px","desktop-hd":"1919px",Preloader:"Preloader_Preloader__3LJFk",Preloader__circular:"Preloader_Preloader__circular__3X2Wu",rotate:"Preloader_rotate__2R2i-",Preloader__path:"Preloader_Preloader__path__3w_02",dash:"Preloader_dash__1yuok"}},PWSX:function(a,e,t){"use strict";var r=t("q1tI"),s=t.n(r),i=t("9Koi"),n=t("MLMA"),l=t("Zttt"),c=t("kGNW"),o=s.a.createElement;e.a=function(a){var e=a.lang,t=Object(r.useState)(""),s=t[0],_=t[1],m=Object(r.useState)(!1),d=m[0],u=m[1],v=Object(r.useState)(!1),g=v[0],w=v[1],N=Object(r.useState)(!1),p=N[0],f=N[1],h=Object(n.u)(),k=Object(r.useContext)(n.g).setData,b=Object(i.a)().t("referral_program",{returnObjects:!0}),x=function(){var a,e,t=null===(a=window)||void 0===a||null===(e=a.__APP_CONFIG__)||void 0===e?void 0:e.apiUrl;t&&fetch("".concat(t,"/user/data"),{credentials:"include"}).then((function(a){return a.json()})).then((function(a){u(!0),200===a.status&&a.data&&(_(a.data.referral),k(a.data))}))};Object(r.useEffect)((function(){document.dispatchEvent(new Event("referralPageLoaded"));var a=function(a){"mercuryoSignedIn"===a.data.type&&(f(!1),x())};return window.addEventListener("message",a),x(),function(){window.removeEventListener("message",a)}}),[]);var y=Object(r.useRef)(),P=function(){f(!1)};return o(l.a,{className:"referral-program",i18Name:"referral_program.head",lang:e},p&&o("div",{className:"iframe-backdrop",onClick:P,role:"button"},o("div",{className:"iframe-close",onClick:P,role:"button"}),o("div",{className:"iframe-container"},o("iframe",{src:"".concat(h,"/login"),width:"100%",height:"100%",frameBorder:"0",title:"Mercuryo wallet"})),o(c.a,null)),o("section",{className:"section__referral"},o("div",{className:"referral container"},o("div",{className:"referral__content"},o("div",{className:"referral__info"},o("h1",{className:"referral__info-title"},b.h1),o("div",{className:"referral__info-text"},b.content_description),s?o("div",{className:"referral__link"},o("div",{className:"referral__link-text"},b.share_link),o("div",{className:"referral__link-elem-wrap"},o("div",{className:"referral__link-input"},o("input",{id:"input-ref",type:"text",value:"https://mercuryoapp.app.link/".concat(s),ref:y}),o("div",{className:"referral__link-input--text"},"https://mercuryoapp.app.link/",s)),o("div",{className:"referral__link-btn"},o("button",{className:"btn_orange js-copy-ref",type:"button",onClick:function(){y.current.select(),y.current.setSelectionRange(0,99999),document.execCommand("copy"),w(!0),setTimeout((function(){w(!1)}),3e3)},disabled:g},g?b.copied:b.copy)))):o("div",{className:"referral__info-btn".concat(d?"":" referral__info-btn_hidden")},o("button",{type:"button",className:"btn_orange",onClick:function(){f(!0)}},b.start_earning))),o("div",{className:"referral__img"},o("img",{src:"https://ivan-kuzmin.github.io/test-landing/static/img/referral-program/ref_img.svg",alt:b.h1}))))),o("section",{className:"section__how-it-work container"},o("h2",{className:"text_center desktop_only"},b.how_it_works),o("div",{className:"how-it-work"},o("div",{className:"how-it-work__img"},o("img",{src:"https://ivan-kuzmin.github.io/test-landing/static/img/referral-program/work_img.svg",alt:b.how_it_works})),o("h2",{className:"text_center mobile_only"},b.how_it_works),o("div",{className:"how-it-work__list"},o("div",{className:"how-it-work__list-item"},o("div",{className:"how-it-work__list-item--icon"},o("img",{src:"https://ivan-kuzmin.github.io/test-landing/static/img/referral-program/work_1.svg",alt:b.sign_in})),o("div",{className:"how-it-work__list-item--text"},b.how_it_works1)),o("div",{className:"how-it-work__list-item"},o("div",{className:"how-it-work__list-item--icon"},o("img",{src:"https://ivan-kuzmin.github.io/test-landing/static/img/referral-program/work_2.svg",alt:b.how_it_works2})),o("div",{className:"how-it-work__list-item--text"},b.how_it_works2)),o("div",{className:"how-it-work__list-item"},o("div",{className:"how-it-work__list-item--icon"},o("img",{src:"https://ivan-kuzmin.github.io/test-landing/static/img/referral-program/work_3.svg",alt:b.get_royalty})),o("div",{className:"how-it-work__list-item--text"},b.how_it_works3))))),o("section",{className:"section__calculator"},o("div",{className:"calculator"},o("h2",{className:"calculator__title"},b.calculate),o("div",{className:"calculator__content"},o("div",{className:"calculator__ranges"},o("div",{className:"calculator__ranges-row"},o("div",{className:"calculator__ranges-row--number",id:"referred-value"},"600"),o("div",{className:"calculator__ranges-row--text"},b.how_many_users),o("div",{className:"calculator__ranges-row--slider-wrap"},o("div",{className:"calculator__ranges-row--slider slider__referred",id:"referred"}))),o("div",{className:"calculator__ranges-row"},o("div",{className:"calculator__ranges-row--number",id:"transaction-amount-value"},"600"),o("div",{className:"calculator__ranges-row--text"},b.transaction_amount),o("div",{className:"calculator__ranges-row--slider-wrap"},o("div",{className:"calculator__ranges-row--slider slider__transaction-amount",id:"transaction-amount"}))),o("div",{className:"calculator__ranges-row"},o("div",{className:"calculator__ranges-row--number",id:"transactions-user-value"},"600"),o("div",{className:"calculator__ranges-row--text"},b.transactions_per_user),o("div",{className:"calculator__ranges-row--slider-wrap"},o("div",{className:"calculator__ranges-row--slider slider__transactions-user",id:"transactions-user"})))),o("div",{className:"calculator__earn"},o("div",{className:"calculator__earn-cash",id:"earn-cash"},"500"),o("div",{className:"calculator__earn-text"},b.you_earn))))),o("section",{className:"section__advantages container"},o("h2",{className:"text_left"},b.advantages),o("div",{className:"advantages"},o("div",{className:"advantages__content"},o("div",{className:"advantages__item"},o("div",{className:"advantages__item-icon"},o("img",{src:"https://ivan-kuzmin.github.io/test-landing/static/img/referral-program/advantage_1.svg",alt:b.get_your_bonus})),o("div",{className:"advantages__item-text"},b.advantages1)),o("div",{className:"advantages__item"},o("div",{className:"advantages__item-icon"},o("img",{src:"https://ivan-kuzmin.github.io/test-landing/static/img/referral-program/advantage_2.svg",alt:b.invite_referrals})),o("div",{className:"advantages__item-text"},b.advantages2)),o("div",{className:"advantages__item"},o("div",{className:"advantages__item-icon"},o("img",{src:"https://ivan-kuzmin.github.io/test-landing/static/img/referral-program/advantage_3.svg",alt:"BTC"})),o("div",{className:"advantages__item-text"},b.advantages3))))))}},kGNW:function(a,e,t){"use strict";var r=t("q1tI"),s=t.n(r),i=t("MLMA"),n=t("D6y4"),l=t.n(n),c=s.a.createElement,o=Object(i.j)(l.a,"Preloader");e.a=function(a){var e=a.className,t=a.color;return c("div",{className:o(null,[e])},c("svg",{className:o("circular"),viewBox:"25 25 50 50"},c("circle",{className:o("path"),cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"4",strokeMiterlimit:"10",stroke:t||"var(--color-orange-primary)"})))}},t4i7:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/referral-program",function(){return t("5Xku")}])}},[["t4i7",1,2,0,3,4,5]]]);