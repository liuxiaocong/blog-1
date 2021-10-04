(self.webpackChunkblog=self.webpackChunkblog||[]).push([[449],{40449:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var r=t(59713),o=t.n(r),c=t(6479),s=t.n(c),p=(t(67294),t(3905));function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var l={};function u(n){var e=n.components,t=s()(n,["components"]);return(0,p.kt)("wrapper",i(i(i({},l),t),{},{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h3",null,"同步 setState 的问题"),(0,p.kt)("p",null,"而在现有 setState 逻辑实现中, 每调用一次 setState 就会执行 render 一次。因此在如下代码中, 每次点击增加按钮, 因为 click 方法里调用了 10 次 setState 函数, 页面也会被渲染 10 次。而我们希望的是每点击一次增加按钮只执行 render 函数一次。"),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),"export default class B extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      count: 0\n    }\n    this.click = this.click.bind(this)\n  }\n\n  click() {\n    for (let i = 0; i < 10; i++) {\n      this.setState({ // 在先前的逻辑中, 没调用一次 setState 就会 render 一次\n        count: ++this.state.count\n      })\n    }\n  }\n\n  render() {\n    console.log(this.state.count)\n    return (\n      <div>\n        <button onClick={this.click}>增加</button>\n        <div>{this.state.count}</div>\n      </div>\n    )\n  }\n}\n")),(0,p.kt)("h3",null,"异步调用 setState"),(0,p.kt)("p",null,"查阅 setState 的 api, 其形式如下:"),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),"setState(updater, [callback])\n")),(0,p.kt)("p",null,"它能接收两个参数, 其中第一个参数 updater 可以为对象或者为函数 (",(0,p.kt)("inlineCode",{parentName:"p"},"(prevState, props) => stateChange"),"), 第二个参数为回调函数；"),(0,p.kt)("p",null,"确定优化思路为: 将多次 setState 后跟着的值进行浅合并, 并借助事件循环等所有值合并好之后再进行渲染界面。"),(0,p.kt)("pre",null,(0,p.kt)("code",i({parentName:"pre"},{className:"language-js"}),"let componentArr = []\n\n// 异步渲染\nfunction asyncRender(updater, component, cb) {\n  if (componentArr.length === 0) {\n    defer(() => render())       // 利用事件循环, 延迟渲染函数的调用\n  }\n\n  if (cb) defer(cb)             // 调用回调函数\n  if (_.isFunction(updater)) {  // 处理 setState 后跟函数的情况\n    updater = updater(component.state, component.props)\n  }\n  // 浅合并逻辑\n  component.state = Object.assign({}, component.state, updater)\n  if (componentArr.includes(component)) {\n    component.state = Object.assign({}, component.state, updater)\n  } else {\n    componentArr.push(component)\n  }\n}\n\nfunction render() {\n  let component\n  while (component = componentArr.shift()) {\n    renderComponent(component) // rerender\n  }\n}\n\n// 事件循环, 关于 promise 的事件循环和 setTimeout 的事件循环后续会单独写篇文章。\nconst defer = function(fn) {\n  return Promise.resolve().then(() => fn())\n}\n")),(0,p.kt)("p",null,"此时, 每点击一次增加按钮 render 函数只执行一次了。"))}u.isMDXComponent=!0}}]);