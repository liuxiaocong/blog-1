(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5603],{25603:(t,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>c});var n=l(59713),u=l.n(n),a=l(6479),r=l.n(a),k=(l(67294),l(3905));function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function p(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){u()(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}var i={};function c(t){var e=t.components,l=r()(t,["components"]);return(0,k.kt)("wrapper",p(p(p({},i),l),{},{components:e,mdxType:"MDXLayout"}),(0,k.kt)("h3",null,"HTTP 协议主要特点"),(0,k.kt)("p",null,"无状态, 无连接"),(0,k.kt)("h3",null,"HTTP 报文组成部分"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},"请求报文: 请求行 请求头 空行 请求体"),(0,k.kt)("li",{parentName:"ul"},"响应报文: 响应行 响应头 空行 响应体")),(0,k.kt)("blockquote",null,(0,k.kt)("p",{parentName:"blockquote"},"请求行里包括请求方法, url, http 版本; 响应行里包括状态码, http 版本, 状态说明;")),(0,k.kt)("h3",null,"HTTP 协议类: POST 和 GET 的区别"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},"Get 有长度限制, Post 没有"),(0,k.kt)("li",{parentName:"ul"},"Get 请求, 倒退按钮是无害的, Post 会重新发起请求"),(0,k.kt)("li",{parentName:"ul"},"Get 会主动缓存, Post 不会"),(0,k.kt)("li",{parentName:"ul"},"Get 请求通过 url 传递, Post 通过 request body 传递")),(0,k.kt)("h3",null,"HTTP 状态码"),(0,k.kt)("blockquote",null,(0,k.kt)("p",{parentName:"blockquote"},"1xx:")),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},"101: 需要切换协议(使用 Websocket 开始阶段是 http 协议, 中间切换到 WebSocket 协议, 此时返回的状态码是 101 表示后续协议还需切换)")),(0,k.kt)("blockquote",null,(0,k.kt)("p",{parentName:"blockquote"},"2xx: 成功状态码")),(0,k.kt)("blockquote",null,(0,k.kt)("p",{parentName:"blockquote"},"3xx: 重定向状态码")),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},"301: 永久重定向"),(0,k.kt)("li",{parentName:"ul"},"302: 临时重定向"),(0,k.kt)("li",{parentName:"ul"},"304: not Modified")),(0,k.kt)("p",null,"(永久重定向中搜索引擎不会保留原有的地址, 临时重定向中搜索引擎会保留原有的地址)"),(0,k.kt)("blockquote",null,(0,k.kt)("p",{parentName:"blockquote"},"4xx: 客户端错误状态码")),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},"400: Bad Request(错误的请求)"),(0,k.kt)("li",{parentName:"ul"},"401: Unauthorized(未认证)"),(0,k.kt)("li",{parentName:"ul"},"403: Forbidden Request(拒绝访问)"),(0,k.kt)("li",{parentName:"ul"},"404: Not Found(未找到)")),(0,k.kt)("blockquote",null,(0,k.kt)("p",{parentName:"blockquote"},"5xx: 服务端错误状态码")),(0,k.kt)("h3",null,"HTTP 事物时延"),(0,k.kt)("p",null,"DNS 解析、连接、传输、处理。"),(0,k.kt)("h3",null,"HTTP 连接"),(0,k.kt)("p",null,"管道化连接: 依赖于 Http/1.1 是持久连接的。"),(0,k.kt)("h3",null,"强缓存和协商缓存"),(0,k.kt)("blockquote",null,(0,k.kt)("p",{parentName:"blockquote"},"强缓存是不经过服务器的, 协商缓存是经过服务器的")),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},"强缓存相关字段(Expires(响应头), Cache-Control(响应头))"),(0,k.kt)("li",{parentName:"ul"},"协商缓存相关字段(Last-Modified(响应头), If-Modified-Since(请求头), Etag(响应头), If-None-Match(请求头))")),(0,k.kt)("p",null,"如下为 HTTP 缓存机制流程图:"),(0,k.kt)("p",null,(0,k.kt)("img",p({parentName:"p"},{src:"http://with.muyunyun.cn/7aa47d51ccc2fe5a66f75c542f014f2e.jpg-400",alt:null}))),(0,k.kt)("h3",null,"HTTP 2.0"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},"二进制流"),(0,k.kt)("li",{parentName:"ul"},"多路复用"),(0,k.kt)("li",{parentName:"ul"},"资源推送优先级")),(0,k.kt)("h3",null,"HTTPS"),(0,k.kt)("p",null,"客户端和服务端都有自己的公钥和私钥, 下面来表述下 HTTPS 的双向加密建立。"),(0,k.kt)("ol",null,(0,k.kt)("li",{parentName:"ol"},"客户端通知服务端建立请求"),(0,k.kt)("li",{parentName:"ol"},"服务端发送公钥"),(0,k.kt)("li",{parentName:"ol"},"客户端发送'验证串+服务端公钥' && 客户端公钥"),(0,k.kt)("li",{parentName:"ol"},"服务端使用私钥取得验证串与客户端公钥一起发送给客户端"),(0,k.kt)("li",{parentName:"ol"},"客户端使用客户端私钥来获取验证串是否匹配")),(0,k.kt)("h4",null,"协议解析"),(0,k.kt)("p",null,"多了一个 ",(0,k.kt)("inlineCode",{parentName:"p"},"upgrade-insecure-requests")," 的字段。该字段让页面打开后的请求自动变为 ",(0,k.kt)("inlineCode",{parentName:"p"},"https"),"。"))}c.isMDXComponent=!0}}]);