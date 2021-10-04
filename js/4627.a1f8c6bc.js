(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4627],{94627:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var o=t(59713),n=t.n(o),a=t(6479),b=t.n(a),c=(t(67294),t(3905));function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var i={};function p(e){var r=e.components,t=b()(e,["components"]);return(0,c.kt)("wrapper",s(s(s({},i),t),{},{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h3",null,"执行 brew install 命令长时间卡在 Updating Homebrew 的解决方法"),(0,c.kt)("p",null,"执行 brew 命令安装软件的时候，跟以下 3 个仓库地址有关："),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"brew.git")),(0,c.kt)("pre",null,(0,c.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# 替换成阿里巴巴的 brew.git 仓库地址:\ncd "$(brew --repo)"\ngit remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git\n\n#=======================================================\n\n# 还原为官方提供的 brew.git 仓库地址\ncd "$(brew --repo)"\ngit remote set-url origin https://github.com/Homebrew/brew.git\n')),(0,c.kt)("ol",s({},{start:2}),(0,c.kt)("li",{parentName:"ol"},"homebrew-core.git")),(0,c.kt)("pre",null,(0,c.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# 替换成阿里巴巴的 homebrew-core.git 仓库地址:\ncd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"\ngit remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git\n\n#=======================================================\n\n# 还原为官方提供的 homebrew-core.git 仓库地址\ncd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"\ngit remote set-url origin https://github.com/Homebrew/homebrew-core.git\n')),(0,c.kt)("ol",s({},{start:3}),(0,c.kt)("li",{parentName:"ol"},"homebrew-bottles")),(0,c.kt)("pre",null,(0,c.kt)("code",s({parentName:"pre"},{className:"language-js"}),"# 替换成阿里巴巴的 homebrew-bottles 访问地址:\necho 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc\nsource ~/.zshrc\n\n#=======================================================\n\n# 还原为官方提供的 homebrew-bottles 访问地址\nvi ~/.zshrc\n# 然后，删除 HOMEBREW_BOTTLE_DOMAIN 这一行配置\nsource ~/.zshrc\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"see ",(0,c.kt)("a",s({parentName:"p"},{href:"https://learnku.com/articles/18908"}),"执行 brew install 命令长时间卡在 Updating Homebrew 的解决方法"))))}p.isMDXComponent=!0}}]);