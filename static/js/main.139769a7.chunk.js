(this["webpackJsonpcurrent-weather"]=this["webpackJsonpcurrent-weather"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var a,r,o=t(0),i=t.n(o),c=t(10),s=t.n(c),d=t(2),p=t(5),b=t(6),h=" 0 10px 5px rgba(0, 0, 0, 0.8)",u="rgba(255, 255, 255, 0.6)",l=b.a.div(a||(a=Object(p.a)(["\nmax-width: 1920px;\nmargin: 0 auto;\nbackground-size: cover;\nbackground-position: center;\nbackground-repeat: no-repeat;\nfont-family: 'Roboto Condensed', sans-serif;\n"]))),g=b.a.section(r||(r=Object(p.a)(["\nheight: 100vh;\nbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));\npadding: 5vh 5%;\noverflow: hidden;\n\n.input-wrapper {\n  width: 100%;\n  margin-bottom: 10vh;\n  border-radius: 0 0 16px 16px;\n  box-shadow: ",";\n  background-color: ",";\n  overflow: hidden;\n  tranform: translate(0,0);\n\n  .input-bar {\n    width: 75%;\n    padding: 5px;\n    text-align: center;\n    font-size: 30px; \n    transition: 0.4s ease;\n\n    background: none;\n    border: none;\n    outline: none;\n\n    :focus {\n      background-color: ",";\n    }\n  }\n  .geo-btn,\n  .srch-btn {\n    width: 10%;\n    padding: 5px 0;\n    font-size: 30px;\n    border: none;\n    border-right: 1px solid #fff;\n    border-radius: 0 0 0 16px;\n    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.6);\n    background: none;\n    z-index: 1;\n  }\n  .srch-btn {\n    width: 15%;\n    border-right: none;\n    border-left: 1px solid #fff;\n    border-radius: 0 0 16px 0;\n    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.6);\n  }\n}\n\n.date-wrapper,\n.weather-wrapper{\n  width: 100%;\n  padding: 3vh;\n  margin-bottom: 5vh;\n  border-radius: 25px;\n  font-size: 45px;\n  text-align: center;\n  box-shadow: ",";\n\n  background-color: ",";\n  text-shadow: 0 2px 2px rgb(55, 55, 55);\n  \n  .location {\n    margin-bottom: 3vh;\n  }\n\n  .date {\n    font-size: 30px;\n  }\n\n  .deg {\n    font-size: 65px;\n    margin-bottom: 3vh;\n  }\n}\n\n@media (min-width: 360px){\n  .date-wrapper,\n  .weather-wrapper{\n    font-size: 50px;\n}\n\n@media (min-width: 411px) {\n  .input-wrapper {\n    margin-bottom: 15vh;\n  }\n  .date-wrapper,\n  .weather-wrapper{\n    margin-bottom: 10vh;\n  }\n}\n\n@media (min-height: 660px) and (orientation: portrait) {\n  .input-wrapper {\n    margin-bottom: 15vh;\n    }\n  .date-wrapper,\n  .weather-wrapper{\n    margin-bottom: 10vh;\n    }\n  }\n}\n\n@media (min-width: 768px) and (orientation: portrait) {\n  .input-wrapper {\n    margin-bottom: 20vh;\n  }\n  .date-wrapper,\n  .weather-wrapper{\n    margin-bottom: 10vh;\n  }\n}\n\n@media(min-width: 1020px) {\n  padding: 5vh 10%;\n\n  .input-wrapper {\n    width: 60%;\n    margin: 0 auto 20vh auto;\n\n    .srch-btn,\n    .geo-btn {\n      cursor: pointer;\n      transition: 0.4s ease;\n      transform: translate(0, 0);\n\n      :hover {\n        transform: translate(5%, 0);\n      }\n    }\n    .geo-btn:hover {\n      transform: translate(-5%, 0);\n    }\n  }\n\n  .date-wrapper,\n  .weather-wrapper{\n    width: 60%;\n    margin: 7vh auto 0;\n  }\n}\n"])),h,u,u,h,u),m=t(3),w=t.p+"static/media/sky.f8175d23.jpg",f=t.p+"static/media/bgc.2394d7e9.jpg",x=t.p+"static/media/rain.d32b3978.jpg",j=t.p+"static/media/lightning.073fe1ba.jpg",v=t.p+"static/media/clouds.e73c5378.jpg",O=t.p+"static/media/snow.fb18a3ec.jpg",k=t(1),y="https://api.openweathermap.org/data/2.5/weather",N="49ebaa43590359392604012bb8ae7231",z=function(n){if(!n.ok)throw Error(n.statusText);return n};"geolocation"in navigator?console.log("ok"):console.log("you don't have geolocation function");var I=function(){var n=(new window.Date).toDateString(),e=i.a.createRef(),t=i.a.createRef(),a=Object(o.useCallback)((function(){m.a.fromTo(e.current,{opacity:0},{opacity:1,duration:1}),m.a.fromTo(t.current,{opacity:0,y:150},{opacity:1,duration:1,y:0,delay:1})}),[e,t]),r=Object(o.useState)(""),c=Object(d.a)(r,2),s=c[0],p=c[1],b=Object(o.useState)(),h=Object(d.a)(b,2),u=h[0],I=h[1],C=Object(o.useState)(),P=Object(d.a)(C,2),S=P[0],D=P[1],E=function(){m.a.to(e.current,{opacity:0,duration:1}),fetch("".concat(y,"?q=").concat(s,"&APPID=").concat(N,"&units=metric")).then(z).then((function(n){return n.json()})).then((function(n){I(n),console.log(n),p("")})).catch((function(n){console.log(n),window.alert("We can't find this city, please try again"),p(""),D(!0)}))},R={backgroundImage:"url(".concat(f,")")};return function(){if(void 0!==u)switch(u.weather[0].main){case"Thunderstorm":R.backgroundImage="url(".concat(j);break;case"Drizzle":case"Rain":R.backgroundImage="url(".concat(x,")");break;case"Snow":R.backgroundImage="url(".concat(O,")");break;case"Clear":R.backgroundImage="url(".concat(w);break;case"Clouds":R.backgroundImage="url(".concat(v,")");break;default:R.backgroundImage="url(".concat(f,")")}}(),Object(o.useEffect)((function(){void 0!==u?void 0===u.id&&!0!==S||(a(),u.id=void 0,D(!1)):!0===S&&(a(),D(!1))}),[a,S,u]),Object(o.useEffect)((function(){a()}),[]),Object(k.jsx)(l,{style:R,ref:e,children:Object(k.jsx)(g,{children:Object(k.jsxs)("main",{ref:t,children:[Object(k.jsxs)("div",{className:"input-wrapper",children:[Object(k.jsx)("button",{className:"geo-btn",onClick:function(){navigator.geolocation.getCurrentPosition((function(n){fetch("".concat(y,"?lat=").concat(n.coords.latitude,"&lon=").concat(n.coords.longitude,"&APPID=").concat(N,"&units=metric")).then(z).then((function(n){return n.json()})).then((function(n){I(n),p("")})).catch((function(n){window.alert("We can't locate your position"),p(""),D(!0)}))}))},children:Object(k.jsx)("i",{class:"fas fa-map-marker-alt"})}),Object(k.jsx)("input",{type:"text",className:"input-bar",placeholder:"Search....",onChange:function(n){p(n.target.value)},value:s,onKeyPress:function(n){13===n.which&&E()}}),Object(k.jsx)("button",{className:"srch-btn",onClick:E,children:Object(k.jsx)("i",{className:"fas fa-search"})})]}),void 0!==u?Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"date-wrapper",children:[Object(k.jsx)("div",{className:"location",children:u.name}),Object(k.jsx)("div",{className:"date",children:n.slice(3)})]}),Object(k.jsxs)("div",{className:"weather-wrapper",children:[Object(k.jsxs)("div",{className:"deg",children:[Math.round(u.main.temp),"\xb0C"]}),Object(k.jsx)("div",{className:"weather",children:u.weather[0].main})]})]}):Object(k.jsxs)("div",{className:"date-wrapper",children:[Object(k.jsx)("div",{className:"location",children:"Enter a city to view weather information"}),Object(k.jsx)("div",{className:"date",children:n.slice(3)})]})]})})})};s.a.render(Object(k.jsx)(I,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.139769a7.chunk.js.map