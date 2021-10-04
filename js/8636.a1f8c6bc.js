(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8636],{68636:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var r=t(59713),a=t.n(r),o=t(6479),p=t.n(o),s=(t(67294),t(3905));function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b={};function u(e){var n=e.components,t=p()(e,["components"]);return(0,s.kt)("wrapper",l(l(l({},b),t),{},{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h3",null,"Button 组件"),(0,s.kt)("h4",null,"样式自定义覆盖"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-js"}),"getClassName = () => {\n  const { className, type } = this.props\n  const classStr = ClassNames('mobile-btn', className, {\n    ['mobile-btn-primary']: type === 'primary',\n  })\n  return classStr\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-scss"}),".mobile-btn {\n  ...\n  &-primary {\n    background: $btn-background;\n  }\n}\n")),(0,s.kt)("p",null,"这里有个样式优先级的知识点, 如果想让传进来的自定义样式 ",(0,s.kt)("inlineCode",{parentName:"p"},"className")," 中的 background 覆盖掉 ",(0,s.kt)("inlineCode",{parentName:"p"},"mobile-btn-promary")," 的 ",(0,s.kt)("inlineCode",{parentName:"p"},"background"),", 需做如下改动:"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-scss"}),".mobile-btn {\n  ...\n}\n\n&.mobile-btn-primary {\n  background: $btn-background;\n}\n")),(0,s.kt)("h3",null,"难点"),(0,s.kt)("p",null,"在移动端中, 手指移到 button 按钮上时如何模拟 pc 端的 hover 状态?"))}u.isMDXComponent=!0}}]);