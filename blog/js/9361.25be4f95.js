(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9361],{39361:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>k});var a=t(59713),l=t.n(a),r=t(6479),o=t.n(r),p=(t(67294),t(3905));function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s={};function k(e){var n=e.components,t=o()(e,["components"]);return(0,p.kt)("wrapper",i(i(i({},s),t),{},{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h3",null,"Roadmap"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",i({parentName:"li"},{href:"https://github.com/Microsoft/TypeScript/wiki/Roadmap"}),"roadmap")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",i({parentName:"li"},{href:"https://www.typescriptlang.org/docs/handbook/release-notes/overview.html"}),"overview"))),(0,p.kt)("h3",null,"1.3"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",i({parentName:"li"},{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-3.html#tuple-types"}),"Tuple types"))),(0,p.kt)("h3",null,"1.4"),(0,p.kt)("p",null,"enum"),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"enum MyFlags {\n  None = 0,\n  Neat = 1,\n  Cool = 2,\n  Awesome = 4,\n  Best = Neat | Cool | Awesome\n}\nvar b = MyFlags.Best; // emits var b = 7;\n")),(0,p.kt)("p",null,"why b is 7?"),(0,p.kt)("p",null,"todo: look for ",(0,p.kt)("a",i({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/enums.html#numeric-enums"}),"Enums")),(0,p.kt)("h3",null,"1.5"),(0,p.kt)("p",null,"todo: read ",(0,p.kt)("a",i({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-5.html"}),"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-5.html")),(0,p.kt)("h3",null,"3.7"),(0,p.kt)("h4",null,"Optional Chaining Operator(可选链操作符)"),(0,p.kt)("p",null,"Optional Chaining Operator can help us ",(0,p.kt)("inlineCode",{parentName:"p"},"reduce some code")," when we judge ",(0,p.kt)("inlineCode",{parentName:"p"},"foo.bar.baz")," as follow:"),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// Before\nif (foo && foo.bar && foo.bar.baz) {\n  // ...\n}\n\n// After\nif (foo?.bar?.baz) {\n  // ...\n}\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"?:"),": check in ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),"undefined ?: 1 // undefined\nnull ?: 1      // undefined\n0 ?: 1         // 1\n'' ?: 1        // 1\nNaN ?: 1       // 1\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("inlineCode",{parentName:"p"},"&&")," has different behaviour. Not only ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"null"),", but ",(0,p.kt)("inlineCode",{parentName:"p"},"falsy value")," will be also checked. eg:")),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),"undefined && 1 // undefined\nnull && 1      // null\n0 && 1         // 0\n'' && 1        // ''\nNaN && 1       // NaN\n")),(0,p.kt)("h4",null,"Nullish Coalescing Operator(空值合并操作符)"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"??")," means you can take the value that isn't ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),"undefined ?? 1 // 1\nnull ?? 1      // 1\n0 ?? 1         // 0\n'' ?? 1        // ''\n")),(0,p.kt)("p",null,"You can use it when using ",(0,p.kt)("inlineCode",{parentName:"p"},"0")," as true such as:"),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),"if (typeof value !== 'number') return\n// before\nlet valueStash = value === 0 || value ? value : defaultValue\n\n// after\nlet valueStash = value ?? defaultValue\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("inlineCode",{parentName:"p"},"||")," has different behaviour. Not only ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"null"),", but ",(0,p.kt)("inlineCode",{parentName:"p"},"falsy value")," will be also checked. eg:")),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),"undefined || 1 // 1\nnull || 1      // 1\n0 || 1         // 1\n'' || 1        // 1\n")))}k.isMDXComponent=!0}}]);