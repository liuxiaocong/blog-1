(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2379],{42379:(t,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>i});var e=r(59713),s=r.n(e),l=r(6479),u=r.n(l),a=(r(67294),r(3905));function o(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function m(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var p={};function i(t){var n=t.components,r=u()(t,["components"]);return(0,a.kt)("wrapper",m(m(m({},p),r),{},{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",null,"title"),(0,a.kt)("p",null,"Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero."),(0,a.kt)("p",null,"Note:"),(0,a.kt)("p",null,"The solution set must not contain duplicate triplets."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"Given array nums = [-1, 0, 1, 2, -1, -4],\n\nA solution set is:\n[\n  [-1, 0, 1],\n  [-1, -1, 2]\n]\n")),(0,a.kt)("h3",null,"解题"),(0,a.kt)("p",null,"相关思路:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"排序;"),(0,a.kt)("li",{parentName:"ol"},"查找表;"),(0,a.kt)("li",{parentName:"ol"},"双指针;")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar threeSum = function (nums) {\n  const sortNums = nums.sort((r1, r2) => r1 - r2)\n  let targetValue\n  const cacheMap = new Map()\n  const result = []\n\n  for (let i = 0; i < sortNums.length - 2; i++) {\n    targetValue = -sortNums[i]\n    let l = i + 1\n    let r = sortNums.length - 1\n\n    while (l < r) {\n      let tmpArr = []\n      const mapValue = cacheMap.get(`${-targetValue}${sortNums[l]}${sortNums[r]}`)\n      if (sortNums[l] + sortNums[r] === targetValue && !mapValue) {\n        tmpArr.push(-targetValue)\n        tmpArr.push(sortNums[l])\n        tmpArr.push(sortNums[r])\n        result.push(tmpArr)\n        cacheMap.set(`${-targetValue}${sortNums[l]}${sortNums[r]}`, true)\n        l++\n        r--\n      } else if (sortNums[l] + sortNums[r] === targetValue && mapValue) {\n        l++\n      }else if (sortNums[l] + sortNums[r] > targetValue) {\n        r--\n      }else if (sortNums[l] + sortNums[r] < targetValue) {\n        l++\n      }\n    }\n  }\n\n  return result\n}\n")),(0,a.kt)("p",null,"此时通过测试用例的情况为 312/313, 差一个包含 3000 个 0 数组的测试用例没通过; 根据评论区的提示, 缺少了",(0,a.kt)("inlineCode",{parentName:"p"},"对解进行去重"),"这个步骤(卡主大部分人的原因), 优化如下:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar threeSum = function (nums) {\n  const sortNums = nums.sort((r1, r2) => r1 - r2)\n  let targetValue\n  const result = []\n\n  for (let i = 0; i < sortNums.length - 2; i++) {\n    // 针对下标 i 对应的值进行去重\n    if (i === 0 || nums[i] > nums[i - 1]) {\n      targetValue = -sortNums[i]\n      let l = i + 1\n      let r = sortNums.length - 1\n\n      while (l < r) {\n        let tmpArr = []\n        if (sortNums[l] + sortNums[r] === targetValue) {\n          tmpArr.push(-targetValue)\n          tmpArr.push(sortNums[l])\n          tmpArr.push(sortNums[r])\n          result.push(tmpArr)\n          l++\n          r--\n          // 针对下标 l 对应的值进行去重, r 同理\n          while (l < r && sortNums[l] === sortNums[l - 1]) {\n            l++\n          }\n          while (l < r && sortNums[r] === sortNums[r + 1]) {\n            r--\n          }\n        } else if (sortNums[l] + sortNums[r] > targetValue) {\n          r--\n        } else if (sortNums[l] + sortNums[r] < targetValue) {\n          l++\n        }\n      }\n    }\n  }\n\n  return result\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",m({parentName:"p"},{src:"http://with.muyunyun.cn/10dda8915d98182962f44344244e8b5a.jpg-400",alt:null}))),(0,a.kt)("h3",null,"Sister Title"),(0,a.kt)("p",null,"1、16、18"))}i.isMDXComponent=!0}}]);