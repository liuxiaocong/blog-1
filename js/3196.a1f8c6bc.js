(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3196],{33196:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});var r=t(59713),l=t.n(r),p=t(6479),u=t.n(p),a=(t(67294),t(3905));function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){l()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s={};function i(n){var e=n.components,t=u()(n,["components"]);return(0,a.kt)("wrapper",c(c(c({},s),t),{},{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",null,"title"),(0,a.kt)("p",null,"给定一个排序数组和一个目标值, 在数组中找到目标值, 并返回其索引。如果目标值不存在于数组中, 返回它将会被按顺序插入的位置。"),(0,a.kt)("p",null,"你可以假设数组中无重复元素。"),(0,a.kt)("p",null,"示例 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"输入: [1,3,5,6], 5\n输出: 2\n")),(0,a.kt)("p",null,"示例 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"输入: [1,3,5,6], 2\n输出: 1\n")),(0,a.kt)("p",null,"示例 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"输入: [1,3,5,6], 7\n输出: 4\n")),(0,a.kt)("p",null,"示例 4:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"输入: [1,3,5,6], 0\n输出: 0\n")),(0,a.kt)("h3",null,"analyze"),(0,a.kt)("p",null,"水题"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar searchInsert = function (nums, target) {\n  let i = 0\n  while (i < nums.length) {\n    if (target <= nums[i]) {\n      return i\n    }\n\n    if (target > nums[nums.length - 1]) {\n      return nums.length\n    }\n    i++\n  }\n};\n")))}i.isMDXComponent=!0}}]);