(self.webpackChunkblog=self.webpackChunkblog||[]).push([[986],{30986:n=>{n.exports="### 64. Minimum Path Sum\n\nGiven a m x n grid filled with `non-negative numbers`, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.\n\nNote: You can only `move either down or right` at any point in time.\n\nExample 1:\n\n```js\n1 3 1\n1 5 1\n4 2 1\n\nInput: grid = [[1,3,1],[1,5,1],[4,2,1]]\nOutput: 7\nExplanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.\n```\n\nExample 2:\n\n```js\n1 2 3\n4 5 6\n\nInput: grid = [[1,2,3],[4,5,6]]\nOutput: 12\n```\n\n* m == grid.length\n* n == grid[i].length\n* 1 <= m, n <= 200\n* 0 <= grid[i][j] <= 100\n\n### analyze\n\n动态规划一:\n\n```js\n/**\n * @param {number[][]} grid\n * @return {number}\n */\nvar minPathSum = function (grid) {\n  const m = grid.length\n  const n = grid[0].length\n  const cache = {}\n  return findMinCount(m - 1, n - 1, grid, cache)\n}\n\nfunction findMinCount(x, y, grid, cache) {\n  if (cache[`${x}~${y}`]) {\n    return cache[`${x}~${y}`]\n  }\n\n  let count = 0\n\n  if (x === 0 && y === 0) {\n    count = grid[0][0]\n  } else if (x === 0) {\n    count = findMinCount(0, y - 1, grid, cache) + grid[0][y]\n  } else if (y === 0) {\n    count = findMinCount(x - 1, y, grid, cache) + grid[x][0]\n  }\n\n  if (x > 0 && y > 0) {\n    count = Math.min(findMinCount(x - 1, y, grid, cache), findMinCount(x, y - 1, grid, cache)) + grid[x][y]\n  }\n\n  cache[`${x}~${y}`] = count\n\n  return count\n}\n```\n\n动态规划二:\n\n```js\n/**\n * @param {number[][]} grid\n * @return {number}\n */\nvar minPathSum = function (grid) {\n  const mLength = grid.length\n  const nLength = grid[0].length\n  const cache = []\n  for (let m = mLength - 1; m >= 0; m--) {\n    for (let n = nLength - 1; n >= 0; n--) {\n      if (!cache[m]) cache[m] = []\n      if (m + 1 >= mLength && n + 1 >= nLength) {\n        cache[m][n] = grid[m][n]\n      } else if (m + 1 >= mLength) {\n        cache[m][n] = cache[m][n + 1] + grid[m][n]\n      } else if (n + 1 >= nLength) {\n        cache[m][n] = cache[m + 1][n] + grid[m][n]\n      } else {\n        cache[m][n] = Math.min(cache[m + 1][n], cache[m][n + 1]) + grid[m][n]\n      }\n    }\n  }\n  return cache[0][0]\n}\n```\n\n### Similar Title\n\n120"}}]);