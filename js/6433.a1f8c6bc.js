(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6433],{26433:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>c});var l=t(59713),r=t.n(l),i=t(6479),s=t.n(i),o=(t(67294),t(3905));function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var p={};function c(n){var e=n.components,t=s()(n,["components"]);return(0,o.kt)("wrapper",u(u(u({},p),t),{},{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",null,"Title"),(0,o.kt)("p",null,"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list."),(0,o.kt)("p",null,"You may assume the two numbers do not contain any leading zero, except the number 0 itself."),(0,o.kt)("h3",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)\nOutput: 7 -> 0 -> 8\nExplanation: 342 + 465 = 807.\n")),(0,o.kt)("h3",null,"Analyze"),(0,o.kt)("p",null,"核心: 根据 sum 的值来决定是否要处理进位"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Keyword: single linked list\n\n/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function(l1, l2) {\n  let flag = 0\n  let head = null,\n      temp = null\n  while (l1 || l2) {\n    let sum = flag\n    if (l1) {\n      sum += l1.val\n      l1 = l1.next\n    }\n\n    if (l2) {\n      sum += l2.val\n      l2 = l2.next\n    }\n\n    const list = new ListNode(sum % 10)\n    if (head === null) {\n      head = list\n      temp = list\n    } else {\n      temp.next = list\n      temp = list\n    }\n\n    // 处理进位\n    flag = 0\n    if (sum >= 10) {\n      flag = 1\n    }\n  }\n\n  if (flag === 1) {\n    const result = new ListNode(1)\n    temp.next = result\n    temp = result\n  }\n  return head\n}\n")),(0,o.kt)("h3",null,"Sister Title"),(0,o.kt)("p",null,"445"))}c.isMDXComponent=!0}}]);