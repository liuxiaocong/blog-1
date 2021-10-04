(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6763],{76763:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>d});var a=t(59713),l=t.n(a),r=t(6479),o=t.n(r),p=(t(67294),t(3905));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u={};function d(e){var n=e.components,t=o()(e,["components"]);return(0,p.kt)("wrapper",c(c(c({},u),t),{},{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h3",null,"背景与边框"),(0,p.kt)("p",null,"以下为与背景与边框相关比较有用的属性。"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"background-origin"),": 属性值有 ",(0,p.kt)("inlineCode",{parentName:"li"},"border-box/padding-box/content-box"),"。默认为 ",(0,p.kt)("inlineCode",{parentName:"li"},"padding-box"),"。"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"background-clip"),": The background-clip CSS property sets whether an element's background extends underneath its border box, padding box, or content box. 属性值有 ",(0,p.kt)("inlineCode",{parentName:"li"},"border-box/padding-box/content-box"),"。默认值为 ",(0,p.kt)("inlineCode",{parentName:"li"},"border-box"),"。")),(0,p.kt)("h4",null,"图片自适应"),(0,p.kt)("pre",null,(0,p.kt)("code",c({parentName:"pre"},{className:"language-css"}),".demo {\n  width: 200px;\n  height: 100px;\n  background-size: cover;\n}\n")),(0,p.kt)("h4",null,"半透明边框"),(0,p.kt)("pre",null,(0,p.kt)("code",c({parentName:"pre"},{className:"language-html"}),'<style>\n  body {\n    background: black;\n  }\n  .translucent-border {\n    width: 100px;\n    height: 100px;\n    border: 10px solid rgba(255, 255, 255, .5);\n    background: white;\n    background-clip: padding-box; /* 这个属性能让背景和边框分离 */\n  }\n</style>\n<body>\n  <div class="translucent-border"></div>\n</body>\n')),(0,p.kt)("p",null,"效果图"),(0,p.kt)("p",null,(0,p.kt)("img",c({parentName:"p"},{src:"http://with.muyunyun.cn/8e59c47dabc2eef7eb923b25811d1e44.jpg-200",alt:null}))),(0,p.kt)("p",null,(0,p.kt)("a",c({parentName:"p"},{href:"https://codepen.io/MuYunyun/pen/vPyOpB"}),"半透明边框")),(0,p.kt)("h4",null,"多重边框"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"方案一: ",(0,p.kt)("inlineCode",{parentName:"li"},"box-shadow"))),(0,p.kt)("pre",null,(0,p.kt)("code",c({parentName:"pre"},{className:"language-css"}),".demo {\n  background: white;\n  box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink;\n}\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"方案二: ",(0,p.kt)("inlineCode",{parentName:"li"},"outline"))),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"It seemd no way to set radius with outline.")),(0,p.kt)("pre",null,(0,p.kt)("code",c({parentName:"pre"},{className:"language-css"}),".demo {\n  background: white;\n  border: 10px solid #655;\n  outline: 5px solid deeppink;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("img",c({parentName:"p"},{src:"http://with.muyunyun.cn/622ab7417df7af16671522a3849690b7.jpg-200",alt:null}))),(0,p.kt)("h4",null,"背景定位"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"偏移量与容器内边距相同\n",(0,p.kt)("a",c({parentName:"p"},{href:"http://play.csssecrets.io/background-origin"}),"background-origin 属性用法"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"使用 ",(0,p.kt)("inlineCode",{parentName:"p"},"calc"),":\n",(0,p.kt)("a",c({parentName:"p"},{href:"http://dabblet.com/gist/b5fcb42d055427ab6c1a"}),"calc 使用")))),(0,p.kt)("pre",null,(0,p.kt)("code",c({parentName:"pre"},{className:"language-css"}),".demo {\n  background-position: calc(100% - 20px) calc(100% - 10px) /* calc 里面的 -、+ 前后要各加个空格 */\n}\n")),(0,p.kt)("ul",c({},{className:"contains-task-list"}),(0,p.kt)("li",c({parentName:"ul"},{className:"task-list-item"}),(0,p.kt)("input",c({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","阅读到边框内圆角")))}d.isMDXComponent=!0}}]);