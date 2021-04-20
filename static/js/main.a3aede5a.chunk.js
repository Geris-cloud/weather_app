(this["webpackJsonpcurrent-weather"]=this["webpackJsonpcurrent-weather"]||[]).push([[0],{22:function(n,e,a){"use strict";a.r(e);var t,r,i=a(0),o=a(9),c=a.n(o),s=a(7),d=a(3),p=a(4),h=" 0 10px 5px rgba(0, 0, 0, 0.8)",b="rgba(255, 255, 255, 0.6)",g=p.a.div(t||(t=Object(d.a)(["\nmax-width: 1920px;\nmargin: 0 auto;\nbackground-size: cover;\nbackground-position: center;\nbackground-repeat: no-repeat;\nfont-family: 'Roboto Condensed', sans-serif;\n"]))),m=p.a.section(r||(r=Object(d.a)(["\nheight: 100vh;\nbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));\npadding: 5vh 5%;\noverflow: hidden;\n\n.input-wrapper {\n  width: 100%;\n  margin-bottom: 10vh;\n  border-radius: 0 0 16px 16px;\n  box-shadow: ",";\n  background-color: ",";\n\n  .input-bar {\n    width: 80%;\n    padding: 5px;\n    border-radius: 0 0 0 16px;\n    text-align: center;\n    font-size: 30px; \n    transition: 0.4s ease;\n\n    background: none;\n    border: none;\n    outline: none;\n\n    :focus {\n      background-color: ",";\n    }\n  }\n  .srch-btn {\n    width: 20%;\n    padding: 5px 0;\n    font-size: 2rem;\n    border: none;\n    border-left: 1px solid #fff;\n    border-radius: 0 0 16px 0;\n    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.6);\n    background: none;\n  }\n}\n\n.date-wrapper,\n.weather-wrapper{\n  width: 100%;\n  padding: 3vh;\n  margin-bottom: 5vh;\n  border-radius: 25px;\n  font-size: 45px;\n  text-align: center;\n  box-shadow: ",";\n\n  background-color: ",";\n  text-shadow: 0 2px 2px rgb(55, 55, 55);\n  \n  .location {\n    margin-bottom: 3vh;\n  }\n\n  .date {\n    font-size: 30px;\n  }\n\n  .deg {\n    font-size: 65px;\n    margin-bottom: 3vh;\n  }\n}\n\n@media (min-width: 360px){\n  .date-wrapper,\n  .weather-wrapper{\n    font-size: 50px;\n}\n\n@media (min-width: 411px) {\n  .input-wrapper {\n    margin-bottom: 15vh;\n  }\n  .date-wrapper,\n  .weather-wrapper{\n    margin-bottom: 10vh;\n  }\n}\n\n@media (min-height: 660px) and (orientation: portrait) {\n  .input-wrapper {\n    margin-bottom: 15vh;\n    }\n  .date-wrapper,\n  .weather-wrapper{\n    margin-bottom: 10vh;\n    }\n  }\n}\n\n@media (min-width: 768px) and (orientation: portrait) {\n  .input-wrapper {\n    margin-bottom: 20vh;\n  }\n  .date-wrapper,\n  .weather-wrapper{\n    margin-bottom: 10vh;\n  }\n}\n\n@media(min-width: 1020px) {\n  padding: 5vh 10%;\n\n  .input-wrapper {\n    width: 60%;\n    margin: 0 auto 20vh auto;\n\n    .srch-btn {\n      cursor: pointer;\n      transition: 0.4s ease;\n\n      :hover {\n        transform: translate(5%, 0);\n      }\n    }\n  }\n\n  .date-wrapper,\n  .weather-wrapper{\n    width: 60%;\n    margin: 7vh auto 0;\n  }\n}\n"])),h,b,b,h,b),l=a.p+"static/media/sky.5a21cf74.jpg",u=a.p+"static/media/bgc.2394d7e9.jpg",w=a.p+"static/media/rain.d32b3978.jpg",x=a.p+"static/media/lightning.073fe1ba.jpg",j=a.p+"static/media/clouds.e73c5378.jpg",v=a(1),f="https://api.openweathermap.org/data/2.5/weather",k="49ebaa43590359392604012bb8ae7231",O=function(n){if(!n.ok)throw Error(n.statusText);return n};"geolocation"in navigator?console.log("ok"):console.log("nope");var N=function(){var n=(new window.Date).toDateString(),e=Object(i.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(i.useState)(),c=Object(s.a)(o,2),d=c[0],p=c[1],h=function(){fetch("".concat(f,"?q=").concat(t,"&APPID=").concat(k,"&units=metric")).then(O).then((function(n){return n.json()})).then((function(n){p(n),r(""),console.log(n)})).catch((function(n){console.log("Error:",n),window.alert("We can't find this city, please try again"),r("")}))},b={backgroundImage:"url(".concat(u,")"),transition:"0.4s ease"};return function(){if(void 0!==d)switch(d.weather[0].main.length){case 12:b.backgroundImage="url(".concat(x);break;case 7:b.backgroundImage="url(".concat(w,")");break;case 5:b.backgroundImage="url(".concat(l);break;case 6:b.backgroundImage="url(".concat(j,")");break;default:b.backgroundImage="url(".concat(u,")")}}(),Object(v.jsx)(g,{style:b,children:Object(v.jsx)(m,{children:Object(v.jsxs)("main",{children:[Object(v.jsxs)("div",{className:"input-wrapper",children:[Object(v.jsx)("input",{type:"text",className:"input-bar",placeholder:"Search....",onChange:function(n){return r(n.target.value)},value:t,onKeyPress:function(n){13===n.which&&h()}}),Object(v.jsx)("button",{className:"srch-btn",onClick:h,children:Object(v.jsx)("i",{className:"fas fa-search"})})]}),void 0!==d?Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"date-wrapper",children:[Object(v.jsx)("div",{className:"location",children:d.name}),Object(v.jsx)("div",{className:"date",children:n.slice(3)})]}),Object(v.jsxs)("div",{className:"weather-wrapper",children:[Object(v.jsxs)("div",{className:"deg",children:[Math.round(d.main.temp),"\xb0C"]}),Object(v.jsx)("div",{className:"weather",children:d.weather[0].main})]})]}):Object(v.jsxs)("div",{className:"date-wrapper",children:[Object(v.jsx)("div",{className:"location",children:"Enter a city to view weather information"}),Object(v.jsx)("div",{className:"date",children:n.slice(3)})]})]})})})};c.a.render(Object(v.jsx)(N,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a3aede5a.chunk.js.map