(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"+GtA":function(e,t,r){e.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px",PersonStory:"PersonStory_PersonStory__3wVIk",PersonStory__container:"PersonStory_PersonStory__container__Yhs-j",PersonStory__content:"PersonStory_PersonStory__content__YR97s",PersonStory__information:"PersonStory_PersonStory__information__1YrVa","PersonStory__character-block":"PersonStory_PersonStory__character-block__153qZ",PersonStory__character:"PersonStory_PersonStory__character__14uAO","PersonStory__character-image":"PersonStory_PersonStory__character-image__3aD1D","PersonStory__text-content":"PersonStory_PersonStory__text-content__3Gr2e","PersonStory__first-block":"PersonStory_PersonStory__first-block__3BiOL","PersonStory__first-block_relative":"PersonStory_PersonStory__first-block_relative__2gdNW",PersonStory__title:"PersonStory_PersonStory__title__22MEw",PersonStory__subtitle:"PersonStory_PersonStory__subtitle__2tvJi","PersonStory__second-block":"PersonStory_PersonStory__second-block__ZhmzF","PersonStory__second-subtitle":"PersonStory_PersonStory__second-subtitle__ShtR8"}},GWqn:function(e,t,r){"use strict";var c=r("q1tI"),a=r.n(c),n=r("MLMA"),o=r("2ByH"),l=r("Womt"),s=r("z/o8"),i=r("+GtA"),_=r.n(i),u=a.a.createElement,d=Object(n.j)(_.a,"PersonStory"),m=new l.g,v=new o.FBXLoader,h=function(e){var t=e.fbx,r=e.texture,a=e.containerRef,n=e.color,o=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e,c,i,_,u,d,h,p=function(e){return e instanceof TouchEvent?{x:e.targetTouches[0].pageX,y:e.targetTouches[0].pageY}:{x:e.clientX,y:e.clientY}},S=function(){var e;s.a.to(null===(e=c)||void 0===e?void 0:e.rotation,{duration:1,x:0,y:0}),h.set(0,0)},f=function(e){if(e.preventDefault(),a.current){var t=a.current.clientWidth,r=document.documentElement.clientHeight,n=p(e).x,o=p(e).y;if(t<n)c&&S();else{var l=n/t*2-1,s=-o/r*2+1;h.set(l,s)}}},b=function(){if(c){var e=-h.y/3.2,t=1.5*h.x;s.a.to(c.rotation,{duration:1.5,x:e,y:t})}},y=function(){document.body.clientWidth<468||c&&s.a.to(c.rotation,{duration:1.5,y:20})};return function(){if(a.current&&o.current){h=new l.h,_=new l.b,u=new l.f;var s=o.current.clientWidth/o.current.clientHeight;(d=new l.e(1,s,1,1e5)).position.set(0,1,180),u.background=new l.c(n),function(){var a=m.load(r),n=new l.d({map:a});v.load(t,(function(t){t.traverse((function(e){e.isMesh&&(e.material=n)})),(c=t).scale.set(.013,.013,.013),c.position.y=1.2,(e=new l.a(t)).clipAction(t.animations[0]).play(),u.add(c)}))}(),(i=new l.i({antialias:!0,alpha:!0})).setPixelRatio(window.devicePixelRatio),i.setSize(280,280),i.shadowMap.enabled=!0,o.current.appendChild(i.domElement),window.addEventListener("mousemove",b),a.current.addEventListener("mousemove",f),a.current.addEventListener("mouseout",S),a.current.addEventListener("click",y)}}(),function t(){if(_){requestAnimationFrame(t);var r=_.getDelta();e&&e.update(r),i.render(u,d)}}(),function(){a.current&&o.current&&(window.removeEventListener("mousemove",b),a.current.removeEventListener("mousemove",f),a.current.removeEventListener("mouseout",S),a.current.removeEventListener("click",y))}}),[]),u("div",{className:d("character"),ref:o})},p=a.a.memo(h),S=a.a.createElement,f=Object(n.j)(_.a,"PersonStory");t.a=function(e){var t=e.children,r=e.className,a=e.title,o=e.subtitle,l=e.classNames,s=e.title2,i=e.subtitle2,_=e.fbx,u=e.texture,d=e.color,m=e.progress,v=void 0===m?0:m,h=e.isRelativeFirstBlock,b=e.translateY,y=e.image,x=Object(c.useRef)(null),z=Object(c.useRef)(null),P=Object(c.useState)(!1),g=P[0],q=P[1],w=!(!s&&!i),M=h?Object(n.l)(v,.35,.5)*-(b||0):Object(n.l)(v,.35,.5)*(-(b||0)-200)+200,k=w?{"--scale":"".concat(1-.6*Object(n.l)(v,.35,.45)),"--scale-mobile":"".concat(1-.5*Object(n.l)(v,.35,.45))}:{},C=w?{transform:"translateY(".concat(-150*Object(n.l)(v,.35,.45),"px)"),opacity:1-Object(n.l)(v,.35,.4)}:{transform:"translateY(".concat(100*(1-Object(n.l)(v,.25,.35)),"px)"),opacity:Object(n.l)(v,.25,.35)},N={"--translateY":"".concat(M,"px"),opacity:Object(n.l)(v,.35,.45)};return Object(c.useEffect)((function(){q(window.matchMedia("(max-width: 486px)").matches)}),[g]),S("section",{className:f(null,[r]),ref:x},S("div",{className:f("container")},S("div",{className:f("content")},S("div",{className:f("information")},S("div",{className:f("character-block"),style:k},g?S("img",{className:f("character-image"),src:y,alt:"character"}):S(p,{containerRef:x,fbx:_,texture:u,color:d})),S("div",{className:f("text-content")},S("div",{ref:z,className:f("first-block",{relative:h}),style:C},S("h4",{className:f("title",[null===l||void 0===l?void 0:l.title])},a),S("p",{className:f("subtitle",["p1",null===l||void 0===l?void 0:l.subtitle])},o)),w&&S("div",{className:f("second-block"),style:N},S("h4",{className:f("title",[null===l||void 0===l?void 0:l.title2])},s),S("p",{className:f("second-subtitle",["p2",null===l||void 0===l?void 0:l.subtitle2])},i)))),t)))}},"Ga3/":function(e,t,r){e.exports={"mobile-xxs":"320px","mobile-xs":"414px",mobile:"486px",tablet:"768px","desktop-sm":"992px",desktop:"1024px","desktop-lg":"1280px",SquareCard:"SquareCard_SquareCard__SHLix",SquareCard__content:"SquareCard_SquareCard__content__dsEu6",SquareCard__content_hidden:"SquareCard_SquareCard__content_hidden__1R6q6",SquareCard__square:"SquareCard_SquareCard__square__2lq4c",SquareCard__background:"SquareCard_SquareCard__background__VdkKC",SquareCard__progress:"SquareCard_SquareCard__progress__2MIXr","SquareCard__progress-mobile":"SquareCard_SquareCard__progress-mobile__1HJZz","SquareCard__text-block":"SquareCard_SquareCard__text-block__Br_Sc",SquareCard__title:"SquareCard_SquareCard__title__3d-bD",SquareCard__description:"SquareCard_SquareCard__description__3rptI"}},q1Ey:function(e,t,r){"use strict";var c,a,n=r("xvhg"),o=r("q1tI"),l=r.n(o),s=r("MLMA"),i=r("Nl3p");function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e}).apply(this,arguments)}var u,d,m=function(e){return o.createElement("svg",_({viewBox:"0 0 115 115",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c||(c=o.createElement("path",{d:"M115 57.5c0 31.756-25.744 57.5-57.5 57.5S0 89.256 0 57.5 25.744 0 57.5 0 115 25.744 115 57.5z",fill:"#5835FF"})),a||(a=o.createElement("path",{d:"M100.872 79.228l.828-1.733-10.106-4.827-.828 1.733 10.106 4.827zM103.467 73.558l.475-1.86-7.395-1.89 8.583-2.761.436-1.706-10.852-2.772-.475 1.86 7.394 1.89-8.582 2.76-.436 1.706 10.852 2.773zM106.111 55.883l-.205-1.909-4.295.463-.314-2.911c-.213-1.973-1.674-2.99-3.758-2.765-2.084.224-3.295 1.53-3.083 3.502l.52 4.82 11.135-1.2zm-6.17-1.266l-3.5.377-.278-2.577c-.09-.827.408-1.589 1.585-1.716s1.825.512 1.914 1.339l.278 2.577zM104.219 43.956l-.673-1.798-4.03 1.51-.776-2.067 3.222-3.668-.662-1.768-.599.225-2.906 3.327c-.99-1.047-2.353-1.22-3.717-.71-2.007.753-2.811 2.302-2.037 4.37l1.69 4.509 10.488-3.93zm-6.232.285l-3.356 1.258-.893-2.383c-.393-1.048-.114-1.854 1.055-2.292 1.169-.438 1.908-.014 2.301 1.035l.893 2.382zM95.58 29.967c.97 1.352.653 2.584-.322 3.284l-3.093 2.22c-.975.7-2.244.607-3.214-.745-.97-1.352-.653-2.584.321-3.284l3.094-2.22c.975-.7 2.243-.606 3.214.745zm1.43-1.026c-1.568-2.184-3.775-2.707-5.842-1.223l-2.937 2.109c-2.067 1.483-2.277 3.742-.71 5.926 1.568 2.183 3.775 2.706 5.842 1.222l2.937-2.108c2.067-1.484 2.277-3.742.71-5.926zM87.889 19.383c-.93-.734-1.95-.99-3.038-.75l.203-1.185-.816-.645-3.671 4.645 3.238 2.56.992-1.256-1.732-1.369.893-1.13c.912-.38 1.936-.203 2.751.442 1.18.932 1.272 2.209.449 3.25l-2.322 2.938c-.823 1.041-2.07 1.096-3.237.173-1.168-.922-1.352-2.108-.588-3.075l.04-.05-1.506-1.19-.04.05c-1.627 2.058-.768 4.247.94 5.596 2.183 1.727 4.4 1.582 5.977-.414l2.242-2.837c1.528-1.933 1.245-4.155-.775-5.753zM79.937 14.339l-1.766-.753-1.689 3.958-2.03-.866-.431-4.863-1.737-.74-.25.588.402 4.399c-1.442-.006-2.507.861-3.079 2.2-.84 1.973-.275 3.623 1.756 4.49l4.43 1.889 4.394-10.302zm-4.095 4.707l-1.406 3.296-2.34-.998c-1.03-.44-1.42-1.197-.93-2.345.49-1.148 1.306-1.391 2.336-.952l2.34.999zM68.409 10.119l-7.11-1.143-.266 1.659 5.213.838-.498 3.096-4.454-.716-.254 1.58 4.455.716-.493 3.064-5.197-.835-.267 1.659 7.093 1.14 1.778-11.058zM53.555 8.915c-2.807.23-4.11 1.766-3.956 3.647.161 1.962 1.94 2.522 3.976 3.062l.23.061c1.673.441 2.477.648 2.554 1.59.064.78-.687 1.42-1.962 1.524-1.164.096-2.29-.326-2.413-1.825l-1.914.157c.22 2.695 2.094 3.617 4.455 3.424 2.503-.205 3.911-1.637 3.752-3.582-.15-1.818-1.495-2.366-3.665-2.991l-.263-.075c-1.758-.498-2.66-.73-2.732-1.606-.068-.83.599-1.51 1.97-1.623 1.1-.09 2.572.24 2.708 1.898l1.914-.157c-.215-2.615-2.326-3.695-4.654-3.504zM41.551 11.443c-2.66.92-3.541 2.732-2.924 4.516.644 1.86 2.507 1.96 4.612 1.977l.238.003c1.73.01 2.56.011 2.869.903.256.741-.312 1.547-1.521 1.966-1.104.381-2.3.253-2.791-1.168l-1.815.628c.884 2.555 2.928 2.982 5.166 2.208 2.374-.821 3.382-2.558 2.743-4.403-.596-1.724-2.035-1.92-4.293-1.985l-.273-.007c-1.827-.046-2.758-.045-3.046-.877-.272-.786.205-1.611 1.505-2.061 1.043-.36 2.55-.408 3.095 1.164l1.814-.627c-.858-2.48-3.17-3-5.379-2.237zM15.122 32.236l-.956 1.665 9.71 5.58.957-1.665-9.71-5.58zM12.105 37.693l-.615 1.818 7.23 2.445-8.768 2.102-.564 1.668 10.61 3.588.615-1.819-7.23-2.445 8.768-2.102.564-1.667-10.61-3.588zM8.127 55.115l.06 1.92 4.318-.136.092 2.926c.062 1.983 1.442 3.109 3.537 3.043 2.095-.066 3.402-1.276 3.34-3.259l-.153-4.845-11.194.351zm6.057 1.731l3.518-.11.082 2.59c.026.832-.528 1.554-1.711 1.59-1.184.038-1.782-.647-1.808-1.48l-.081-2.59zM9.108 67.152l.535 1.844 4.134-1.2.615 2.12-3.49 3.413.526 1.813.614-.179 3.15-3.096c.908 1.119 2.254 1.394 3.652.989 2.06-.598 2.978-2.081 2.363-4.202l-1.343-4.625-10.756 3.123zm6.236.189l3.442-1 .71 2.444c.312 1.075-.028 1.857-1.227 2.205-1.198.348-1.903-.13-2.216-1.206l-.709-2.443zM16.66 81.756c-.864-1.422-.455-2.626.57-3.25l3.253-1.98c1.025-.623 2.283-.433 3.148.988.865 1.421.456 2.626-.57 3.25l-3.252 1.98c-1.025.623-2.283.433-3.148-.988zm-1.503.915c1.398 2.296 3.559 2.985 5.732 1.662l3.089-1.88c2.173-1.322 2.554-3.558 1.157-5.854-1.398-2.296-3.559-2.985-5.732-1.663l-3.089 1.88c-2.173 1.323-2.554 3.559-1.157 5.855zM23.526 92.893c.87.803 1.87 1.136 2.973.978l-.293 1.167.765.705 4.013-4.352-3.035-2.799-1.084 1.177 1.623 1.496-.976 1.059c-.939.31-1.946.056-2.71-.649-1.106-1.02-1.101-2.3-.2-3.275l2.537-2.753c.9-.976 2.148-.936 3.242.073 1.093 1.008 1.187 2.205.352 3.11l-.043.047L32.1 90.18l.044-.047c1.778-1.929 1.087-4.177-.512-5.652-2.047-1.887-4.267-1.91-5.992-.04l-2.451 2.658c-1.67 1.811-1.557 4.049.336 5.795zM31.072 98.526l1.704.885 1.984-3.819 1.96 1.018.06 4.882 1.675.87.295-.568-.067-4.416c1.436.115 2.565-.669 3.236-1.961.989-1.903.55-3.591-1.41-4.609l-4.273-2.22-5.164 9.938zm4.44-4.382l1.653-3.18 2.257 1.172c.994.517 1.326 1.302.75 2.41-.575 1.107-1.408 1.287-2.402.77l-2.257-1.172zM42.247 103.609l7.002 1.68.392-1.634-5.135-1.232.731-3.05 4.388 1.053.373-1.556-4.387-1.052.724-3.018 5.118 1.227.392-1.633-6.986-1.676-2.612 10.891zM56.967 105.937c2.816-.016 4.231-1.448 4.22-3.336-.011-1.968-1.743-2.662-3.731-3.355l-.225-.078c-1.635-.567-2.42-.835-2.426-1.779-.004-.783.792-1.364 2.072-1.371 1.168-.007 2.26.498 2.268 2.002l1.92-.01c-.016-2.705-1.814-3.766-4.182-3.753-2.512.015-4.024 1.336-4.013 3.288.01 1.824 1.31 2.472 3.427 3.26l.257.094c1.715.631 2.597.929 2.602 1.809.005.832-.712 1.461-2.088 1.469-1.104.006-2.546-.434-2.556-2.098l-1.92.011c.015 2.624 2.038 3.861 4.375 3.847zM69.127 104.327c2.724-.716 3.739-2.455 3.259-4.281-.5-1.903-2.35-2.145-4.448-2.321l-.237-.02c-1.725-.143-2.553-.206-2.793-1.12-.2-.758.428-1.518 1.666-1.844 1.13-.296 2.312-.078 2.695 1.377l1.856-.489c-.687-2.615-2.693-3.196-4.983-2.594-2.43.639-3.566 2.294-3.07 4.182.464 1.764 1.884 2.07 4.13 2.306l.272.028c1.819.183 2.747.254 2.971 1.105.212.804-.326 1.591-1.657 1.941-1.068.28-2.574.213-2.997-1.396l-1.857.488c.667 2.538 2.934 3.232 5.193 2.638zM48.311 50.218l16.634-4.535c.998-.272 1.702.965.959 1.684l-7.263 7.028 6.15 6.357a1 1 0 01-.436 1.655L48.16 67.16c-1.002.295-1.728-.951-.977-1.678l7.146-6.915-6.473-6.69a1 1 0 01.455-1.66z",fill:"#fff"})))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e}).apply(this,arguments)}var h=function(e){return o.createElement("svg",v({width:102,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u||(u=o.createElement("rect",{width:102,height:32,rx:16,fill:"#5835FF"})),d||(d=o.createElement("path",{d:"M23.466 20h1.32v-7.7h-1.32V20zm3.297 0h1.32v-5.247l3.3 5.247h1.21v-7.7h-1.32v5.247l-3.3-5.247h-1.21V20zm10.453 0h1.32v-2.97h2.013c1.364 0 2.167-.924 2.167-2.365 0-1.441-.803-2.365-2.167-2.365h-3.333V20zm1.32-4.125v-2.42h1.782c.572 0 1.056.396 1.056 1.21s-.484 1.21-1.056 1.21h-1.782zM44.198 20h1.32v-2.959h1.518L48.62 20h1.298v-.44l-1.441-2.673c.913-.385 1.353-1.221 1.353-2.222 0-1.474-.803-2.365-2.321-2.365h-3.311V20zm1.32-4.081v-2.464h1.749c.77 0 1.221.374 1.221 1.232s-.451 1.232-1.221 1.232h-1.749zm8.747 3.036c-1.144 0-1.705-.671-1.705-1.496v-2.618c0-.825.56-1.496 1.705-1.496 1.144 0 1.705.671 1.705 1.496v2.618c0 .825-.561 1.496-1.705 1.496zm0 1.21c1.848 0 3.025-1.023 3.025-2.772v-2.486c0-1.749-1.177-2.772-3.025-2.772-1.848 0-3.025 1.023-3.025 2.772v2.486c0 1.749 1.177 2.772 3.025 2.772zm7.44 0c.815 0 1.474-.297 1.959-.891l.395.726h.716v-4.07h-2.839v1.1h1.519v.99c-.33.594-.957.935-1.672.935-1.035 0-1.629-.649-1.629-1.562v-2.574c0-.913.65-1.474 1.672-1.474 1.023 0 1.629.561 1.629 1.408v.044h1.32v-.044c0-1.804-1.398-2.618-2.894-2.618-1.913 0-3.047 1.023-3.047 2.772v2.486c0 1.694 1.1 2.772 2.871 2.772zM66.65 20h1.32v-2.959h1.518L71.071 20h1.298v-.44l-1.44-2.673c.912-.385 1.352-1.221 1.352-2.222 0-1.474-.803-2.365-2.32-2.365h-3.312V20zm1.32-4.081v-2.464h1.75c.77 0 1.22.374 1.22 1.232s-.45 1.232-1.22 1.232h-1.75zM73.911 20h4.95v-1.155h-3.63v-2.156h3.102v-1.1H75.23v-2.134h3.619V12.3h-4.94V20zm8.985.165c1.936 0 2.915-.979 2.915-2.277 0-1.353-1.188-1.837-2.552-2.321l-.154-.055c-1.122-.396-1.66-.583-1.66-1.232 0-.539.55-.935 1.43-.935.802 0 1.55.352 1.55 1.386h1.32c0-1.859-1.232-2.596-2.86-2.596-1.727 0-2.772.902-2.772 2.244 0 1.254.891 1.705 2.343 2.255l.176.066c1.177.44 1.782.649 1.782 1.254 0 .572-.495 1.001-1.44 1.001-.76 0-1.75-.308-1.75-1.452h-1.32c0 1.804 1.386 2.662 2.992 2.662zm7.058 0c1.936 0 2.915-.979 2.915-2.277 0-1.353-1.188-1.837-2.552-2.321l-.154-.055c-1.122-.396-1.661-.583-1.661-1.232 0-.539.55-.935 1.43-.935.803 0 1.55.352 1.55 1.386h1.32c0-1.859-1.231-2.596-2.86-2.596-1.726 0-2.771.902-2.771 2.244 0 1.254.89 1.705 2.343 2.255l.176.066c1.177.44 1.782.649 1.782 1.254 0 .572-.495 1.001-1.441 1.001-.76 0-1.75-.308-1.75-1.452h-1.32c0 1.804 1.387 2.662 2.993 2.662zM8.062 16.241l4.122-7c.247-.42.93-.256.93.223v4.684h4.39c.372 0 .612.37.438.678l-3.892 6.925c-.24.429-.935.269-.935-.215v-4.608H8.497c-.378 0-.617-.378-.435-.687z",fill:"#fff"})))},p=r("Ga3/"),S=r.n(p),f=l.a.createElement,b=Object(s.j)(S.a,"SquareCard");t.a=function(e){var t=e.className,r=e.children,c=e.title,a=e.titleClassName,_=e.description,u=e.isProgress,d=e.setShowSwitcher,v=Object(s.r)(),p=Object(n.a)(v,2),S=p[0],y=p[1];return Object(o.useEffect)((function(){"function"===typeof d&&d(!(y>.5))}),[y>.5]),f(i.a,{className:b(null,[t]),ref:S},f("div",{className:b("content",{hidden:y<=.25}),style:{"--transform":"translateY(".concat(200*(1-Object(s.l)(y,.2,.3)),"px)")}},f("div",{className:b("square")},f("img",{className:b("background"),src:"/static/img/stories/square_card_background.png",alt:"square card background"}),u&&f(l.a.Fragment,null,f(m,{className:b("progress")}),f(h,{className:b("progress-mobile")})),f("div",{className:b("text-block")},f("h2",{className:b("title",[a])},c),f("div",null,f("p",{className:b("description",["p2"])},_),f("div",{className:b("block")},r))))))}}}]);