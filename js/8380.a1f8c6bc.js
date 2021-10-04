(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8380],{18380:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});var r=e(59713),s=e.n(r),o=e(6479),a=e.n(o),p=(e(67294),e(3905));function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){s()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var c={};function i(t){var n=t.components,e=a()(t,["components"]);return(0,p.kt)("wrapper",u(u(u({},c),e),{},{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h3",null,"title"),(0,p.kt)("p",null,"Given an array of strings, group anagrams together."),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",u({parentName:"pre"},{className:"language-js"}),'Input: ["eat", "tea", "tan", "ate", "nat", "bat"],\nOutput:\n[\n  ["ate","eat","tea"],\n  ["nat","tan"],\n  ["bat"]\n]\n')),(0,p.kt)("p",null,"Note:"),(0,p.kt)("p",null,"All inputs will be in lowercase.\nThe order of your output does not matter."),(0,p.kt)("h3",null,"analyze"),(0,p.kt)("pre",null,(0,p.kt)("code",u({parentName:"pre"},{className:"language-js"}),"/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nvar groupAnagrams = function (strs) {\n  const tmpObj = {}\n\n  for (let i = 0; i < strs.length; i++) {\n    const sortStr = strs[i].split('').sort().join('')\n    if (tmpObj[sortStr]) {\n      tmpObj[sortStr].push(strs[i])\n    } else {\n      tmpObj[sortStr] = [strs[i]]\n    }\n  }\n\n  const result = []\n\n  const keyArr = Object.keys(tmpObj)\n  for (let i = 0; i < keyArr.length; i++) {\n    result.push(tmpObj[keyArr[i]])\n  }\n\n  return result\n}\n")))}i.isMDXComponent=!0}}]);