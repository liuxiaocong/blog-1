(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4457],{24457:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>c});var l=t(59713),r=t.n(l),o=t(6479),u=t.n(o),a=(t(67294),t(3905));function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s={};function c(n){var e=n.components,t=u()(n,["components"]);return(0,a.kt)("wrapper",p(p(p({},s),t),{},{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",null,"230. Kth Smallest Element in a BST"),(0,a.kt)("p",null,"Given a binary search tree, write a function kthSmallest to find the kth smallest element in it."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"Input: root = [3,1,4,null,2], k = 1\n    3\n  /   \\\n 1     4\n  \\\n   2\nOutput: 1\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"Input: root = [5,3,6,2,4,null,null,1], k = 3\n        5\n      /   \\\n     3     6\n    / \\\n   2   4\n  /\n 1\nOutput: 3\n")),(0,a.kt)("p",null,"Follow up:\nWhat if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?"),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("p",null,"The number of elements of the BST is between 1 to 10^4.\nYou may assume k is always valid, 1 ≤ k ≤ BST's total elements."),(0,a.kt)("h3",null,"Analyze"),(0,a.kt)("p",null,"思路: 中序遍历维护计数, 当计数值到达 k 时, 当前节点的 val 即为题目要求的第 k 小的值元素值。"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(root, k) {\n  const countResult = { value: 0 }\n  return analyzeCount(root, k, countResult)\n}\n\nvar analyzeCount = function(node, k, count) {\n  if (!node) return null\n  const pickLeft = analyzeCount(node.left, k, count)\n  if (typeof pickLeft === 'number') return pickLeft\n  count.value = count.value + 1\n  if (k === count.value) {\n    return node.val\n  }\n  const pickRight = analyzeCount(node.right, k, count)\n  if (typeof pickRight === 'number') return pickRight\n}\n")))}c.isMDXComponent=!0}}]);