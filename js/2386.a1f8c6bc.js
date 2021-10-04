(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2386],{62386:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>c});var r=t(59713),u=t.n(r),a=t(6479),l=t.n(a),p=(t(67294),t(3905));function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){u()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var o={};function c(n){var e=n.components,t=l()(n,["components"]);return(0,p.kt)("wrapper",m(m(m({},o),t),{},{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h3",null,"title"),(0,p.kt)("p",null,"给定两个数组, 编写一个函数来计算它们的交集。"),(0,p.kt)("p",null,"示例 1:"),(0,p.kt)("pre",null,(0,p.kt)("code",m({parentName:"pre"},{className:"language-js"}),"输入: nums1 = [1,2,2,1], nums2 = [2,2]\n输出: [2,2]\n")),(0,p.kt)("p",null,"示例 2:"),(0,p.kt)("pre",null,(0,p.kt)("code",m({parentName:"pre"},{className:"language-js"}),"输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]\n输出: [4,9]\n")),(0,p.kt)("p",null,"说明:"),(0,p.kt)("p",null,"输出结果中",(0,p.kt)("inlineCode",{parentName:"p"},"每个元素出现的次数, 应与元素在两个数组中出现的次数一致"),"。\n我们",(0,p.kt)("inlineCode",{parentName:"p"},"可以不考虑输出结果的顺序"),"。"),(0,p.kt)("p",null,"进阶:"),(0,p.kt)("p",null,"如果给定的数组已经排好序呢？你将如何优化你的算法？\n如果 nums1 的大小比 nums2 小很多，哪种方法更优？\n如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？"),(0,p.kt)("h3",null,"解题"),(0,p.kt)("p",null,"思路: 使用字典 Map 的数据结构来统计次数。"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"将 num1、nums2 各自出现的次数分别统计存进 nums1Map 与 nums2Map 中;"),(0,p.kt)("li",{parentName:"ol"},"根据题目说明中的条件",(0,p.kt)("inlineCode",{parentName:"li"},"可以不考虑输出结果的顺序"),", 因而可以以 num1、nums2 相同的 key 中较小的值为输出次数, 将其输出;")),(0,p.kt)("pre",null,(0,p.kt)("code",m({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number[]}\n */\nvar intersect = function(nums1, nums2) {\n  const nums1Map = getMap(nums1)\n  const nums2Map = getMap(nums2)\n\n  const result = []\n\n  nums1Map.forEach((nums1Value, key) => {\n    const nums2MapHasKey = nums2Map.get(key)\n    if (nums2MapHasKey) {\n      for (let i = 0; i < Math.min(nums1Value, nums2MapHasKey); i++) {\n        result.push(key)\n      }\n    }\n  })\n\n  return result\n};\n\nvar getMap = function(arr) {\n  const map = new Map()\n  for (let i = 0; i < arr.length; i++) {\n    const getValue = map.get(arr[i])\n    if (!getValue) {\n      map.set(arr[i], 1)\n    } else {\n      map.set(arr[i], getValue + 1)\n    }\n  }\n  return map\n}\n")),(0,p.kt)("h3",null,"进阶"),(0,p.kt)("p",null,"如果给定的两个数组是排好序的, 是否有其它解法呢?"),(0,p.kt)("h3",null,"相关题"),(0,p.kt)("p",null,"202、205、242、290、349、451"))}c.isMDXComponent=!0}}]);