(self.webpackChunkblog=self.webpackChunkblog||[]).push([[186],{60186:n=>{n.exports="### 移动端场景下使用 charles 代理的优点\n\n* 解决`移动端真机接口调用不便查看`的问题。\n* 有利于解决`发布到线上环境判断接口是否正常`的问题。?待确认\n\n### 设置代理\n\n* 场景: 代理查询接口请求数据, 解决`移动端真机接口调用不便查看`的问题。\n* 步骤\n  1. 打开 charles, 配置手机可以代理的端口。\n    ![](http://with.muyunyun.cn/ec841f0461fa4b37cc333d24127785ee.jpg-muyy)\n  2. 打开手机, 设置代理地址。\n  3. Charles 上设置要抓包的 https 地址。(http 地址则不需要进行这一步)\n  4. 手机装证书。按照下图所示找到手机证书的教程。注意此时手机一定要连代理，然后用手机浏览器访问 chls.pro/ssl。浏览器会自动下载软件然后安装。(如果无法自动下载, 请确认内网互联, 手机抓包配置是否正确。)\n\n### 使用本地前端代码调试测试环境数据\n\n* `使用场景`: 使用本地前端代码调试测试环境数据\n* 方法: 将测试环境域名代理到本地。\n\n> 此时需要注意将系统设置中的网络代理一栏, 取消勾选。然后重启 Charles。\n\n![](http://with.muyunyun.cn/863fdb087e9b32eabf0c4b3a607235f8.jpg)\n\n\n"}}]);