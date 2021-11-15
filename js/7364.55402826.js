(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7364],{17364:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var r=t(59713),p=t.n(r),a=t(6479),l=t.n(a),u=(t(67294),t(3905));function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){p()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var c={};function m(n){var e=n.components,t=l()(n,["components"]);return(0,u.kt)("wrapper",o(o(o({},c),t),{},{components:e,mdxType:"MDXLayout"}),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",o({parentName:"li"},{href:"#%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E4%B9%8B%E6%97%85"}),"内网穿透之旅")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",o({parentName:"li"},{href:"#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BA%91%E4%B8%BB%E6%9C%BA-nginx-%E9%85%8D%E7%BD%AE"}),"服务端(云主机) nginx 配置")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",o({parentName:"li"},{href:"#frp-%E9%85%8D%E7%BD%AE"}),"frp 配置")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",o({parentName:"li"},{href:"#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BA%91%E4%B8%BB%E6%9C%BA%E9%85%8D%E7%BD%AE"}),"服务端(云主机)配置"),(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",o({parentName:"li"},{href:"#%E8%BF%9B%E4%B8%80%E6%AD%A5%E5%9C%B0%E4%BD%BF%E7%94%A8-pm2-%E8%BF%90%E8%A1%8C-frps"}),"进一步地使用 pm2 运行 frps")))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",o({parentName:"li"},{href:"#%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A0%91%E8%8E%93%E6%B4%BE%E9%85%8D%E7%BD%AE"}),"客户端(树莓派)配置")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",o({parentName:"li"},{href:"#%E5%AE%89%E8%A3%85-nodejs"}),"安装 Node.js")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",o({parentName:"li"},{href:"#%E6%B7%BB%E5%8A%A0-ssh-%E6%9C%8D%E5%8A%A1"}),"添加 SSH 服务"))),(0,u.kt)("h3",null,"内网穿透之旅"),(0,u.kt)("p",null,"Todo: 解读 frp。"),(0,u.kt)("h3",null,"服务端(云主机) nginx 配置"),(0,u.kt)("p",null,"首先将域名(楼主为 frp.muyunyun.cn )解析到你的服务器 ip，接下来的步骤会用到服务器以下四个端口，为了方面后续的调试运行，需放开以下几个端口的安全策略， 90（Nginx 接收 http 请求用），6000（转发映射 SSH 服务用），8080（转发映射 http 服务用）端口、7000（\t服务器端 frps 运行端口）。"),(0,u.kt)("p",null,"配置 Nginx，转发对 frp.muyunyun.cn 域名请求到 8080 端口。"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")," 设置如下:"),(0,u.kt)("p",null,"Todo: 需要修改"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"user www-data;\nworker_processes auto;\npid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\nload_module /usr/lib/nginx/modules/ngx_stream_module.so;\n\nstream {\n    map $ssl_preread_server_name $backend_name {\n        frp.muyunyun.cn        frp_muyunyun_cn;\n        default web;\n    }\n\n\n   upstream frp_muyunyun_cn {\n        server 127.0.0.1:8080;\n   }\n\n   upstream web {\n        server 127.0.0.1:80;\n   }\n\n}\n\nevents {\n        worker_connections 768;\n        # multi_accept on;\n}\n\nhttp {\n        ##\n        # Basic Settings\n        ##\n\n        sendfile on;\n        tcp_nopush on;\n        tcp_nodelay on;\n        keepalive_timeout 65;\n        types_hash_max_size 2048;\n        # server_tokens off;\n\n        # server_names_hash_bucket_size 64;\n        # server_name_in_redirect off;\n\n        include /etc/nginx/mime.types;\n        default_type application/octet-stream;\n\n                ##\n        # SSL Settings\n        ##\n\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE\n        ssl_prefer_server_ciphers on;\n\n        ##\n        # Logging Settings\n        ##\n\n        access_log /var/log/nginx/access.log;\n        error_log /var/log/nginx/error.log;\n\n        ##\n        # Gzip Settings\n        ##\n\n        gzip on;\n\n        # gzip_vary on;\n        # gzip_proxied any;\n        # gzip_comp_level 6;\n        # gzip_buffers 16 8k;\n        # gzip_http_version 1.1;\n        # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n\n        ##\n        # Virtual Host Configs\n        ##\n\n        include /etc/nginx/conf.d/*.conf;\n        include /etc/nginx/sites-enabled/*;\n}\n")),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'server {\n    server_name      frp.muyunyun.cn;\n    listen           80;\n\n    location / {\n        proxy_pass http://127.0.0.1:8080;\n        proxy_set_header Host $host:80;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}\n\n新建 /etc/nginx/conf.d/frp.muyunyun.cn.conf ， 并在 /etc/nginx/conf.d/frp.muyunyun.cn.conf 写入以下内容:\n\nserver {\n    listen       8080 ssl http2;\n    listen       [::]:8080 ssl http2;\n    server_name  frp.muyunyun.cn;\n\n    location / {\n        proxy_pass http://127.0.0.1:8080;\n        proxy_set_header Host $host:443;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n\n    ssl_certificate "/etc/nginx/ssl/frp.muyunyun.cn/fullchain.cer";\n    ssl_certificate_key "/etc/nginx/ssl/frp.muyunyun.cn/frp.muyunyun.cn.key";\n    ssl_session_cache shared:SSL:1m;\n    ssl_session_timeout  10m;\n    ssl_ciphers HIGH:!aNULL:!MD5;\n    ssl_prefer_server_ciphers on;\n\n    # Load configuration files for the default server block.\n    include /etc/nginx/default.d/*.conf;\n\n    error_page 404 /404.html;\n        location = /40x.html {\n    }\n\n    error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n    }\n}\n')),(0,u.kt)("h3",null,"frp 配置"),(0,u.kt)("h3",null,"服务端(云主机)配置"),(0,u.kt)("p",null,"在云主机端执行如下命令:"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"cd /opt/\nsudo wget https://github.com/fatedier/frp/releases/download/v0.37.0/frp_0.37.0_linux_386.tar.gz\nsudo tar zxvf frp_0.37.0_linux_386.tar.gz\n")),(0,u.kt)("p",null,"进入 ",(0,u.kt)("inlineCode",{parentName:"p"},"/opt/frp_0.37.0_linux_arm64")),(0,u.kt)("p",null,(0,u.kt)("img",o({parentName:"p"},{src:"http://with.muyunyun.cn/32f4ce6995482f6e086b85d2bdd06a01.jpg",alt:null}))),(0,u.kt)("p",null,"备份客户端 frpc 的配置文件 frpc.ini"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo cp frps.ini frps.ini_backup\n")),(0,u.kt)("p",null,"修改服务端配置文件 frps.ini，增加一行 ",(0,u.kt)("inlineCode",{parentName:"p"},"vhost_http_port = 8080"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-diff"}),"[common]\nbind_port = 7000\n+ vhost_http_port = 8080\n")),(0,u.kt)("p",null,"以上配置含义为: 服务端 frps 程序运行在 7000 端口，并将指向 8080 端口的请求转发到客户端。"),(0,u.kt)("p",null,"运行如下命令，开启 frp 的服务端程序"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"./frps -c frps.ini\n")),(0,u.kt)("p",null,(0,u.kt)("img",o({parentName:"p"},{src:"http://with.muyunyun.cn/eb0a4e394f5b656b3e67c13c6ab1eb82.jpg",alt:null}))),(0,u.kt)("h4",null,"进一步地使用 pm2 运行 frps"),(0,u.kt)("p",null,"安装 node 环境"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},(0,u.kt)("a",o({parentName:"p"},{href:"https://cloud.tencent.com/document/product/213/38237#.E6.AD.A5.E9.AA.A43.EF.BC.9A.E5.AE.89.E8.A3.85-node.js-.E5.A4.9A.E7.89.88.E6.9C.AC.EF.BC.88.E5.8F.AF.E9.80.89.EF.BC.89"}),"安装 Node.js 多版本"))),(0,u.kt)("p",null,"全局安装 pm2"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm i pm2 -g\n")),(0,u.kt)("p",null,"使用 pm2 守护运行 frps 服务"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'sudo echo "/opt/frp_0.37.0_linux_386/frps -c /opt/frp_0.37.0_linux_386/frps.ini" > /opt/frp_0.37.0_linux_386/start_frpc.sh\npm2 start /opt/frp_0.37.0_linux_386/start_frps.sh\npm2 save\n')),(0,u.kt)("p",null,(0,u.kt)("img",o({parentName:"p"},{src:"http://with.muyunyun.cn/e52ef19b14366896e5de3c6bf7bce609.jpg",alt:null}))),(0,u.kt)("h3",null,"客户端(树莓派)配置"),(0,u.kt)("p",null,"在树莓派内执行以下命令，下载 frp，并解压。"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"cd /opt/\nsudo wget https://github.com/fatedier/frp/releases/download/v0.37.0/frp_0.37.0_linux_arm64.tar.gz\nsudo tar zxvf frp_0.37.0_linux_arm64.tar.gz\n")),(0,u.kt)("p",null,"进入 ",(0,u.kt)("inlineCode",{parentName:"p"},"/opt/frp_0.37.0_linux_arm64")),(0,u.kt)("p",null,"备份客户端 frpc 的配置文件 frpc.ini"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo cp frpc.ini frpc.ini_backup\n")),(0,u.kt)("p",null,"编辑 frpc.ini，备份如下:"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"[common]\nserver_addr = 127.0.0.1\nserver_port = 7000\n\n[ssh]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 22\nremiote_port = 6000\n")),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sudo vim frpc.ini\n")),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"[common]\nserver_addr = 81.69.252.246\nserver_port = 7000\n\n[web]\ntype = http\nlocal_port = 8080\ncustom_domains = frp.muyunyun.cn\n")),(0,u.kt)("p",null,"启动客户端"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"./frpc -c frpc.ini\n")),(0,u.kt)("p",null,"接着从公网访问 frp.muyunyun.cn:90，验证内网穿透是否成功。"),(0,u.kt)("p",null,(0,u.kt)("img",o({parentName:"p"},{src:"http://with.muyunyun.cn/c61981adbdaba27efbc45b26c1921891.jpg-400",alt:null}))),(0,u.kt)("p",null,"可以看到来自公网的请求在树莓派的 frp 客户端已经有了反应，接着我们在树莓派搭建一个简单服务。"),(0,u.kt)("h3",null,"安装 Node.js"),(0,u.kt)("p",null,"使用 ARMv8 版本的稳定版 Node.js。"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"cd /opt/\nsudo wget https://nodejs.org/dist/v14.18.0/node-v14.18.0-linux-arm64.tar.xz\nsudo tar xvf node-v14.18.0-linux-arm64.tar.xz\n")),(0,u.kt)("p",null,"将 Node.js 添加到系统变量"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'sudo echo "export NODE_HOME=/opt/node-v14.18.0-linux-arm64" >> ~/.bashrc\nsudo echo "export PATH=\\$NODE_HOME/bin:\\$PATH" >> ~/.bashrc\nsource ~/.bashrc\n')),(0,u.kt)("p",null,"此时在树莓派中输入 node -v，可以看到对应版本如下:"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"ubuntu@ubuntu:~$ node -v\nv14.18.0\nubuntu@ubuntu:~$ npm -v\n6.14.15\n")),(0,u.kt)("p",null,"接着安装 http-server 服务"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install http-server -g\n")),(0,u.kt)("p",null,"在 /opt 文件夹 新建 frp.muyunyun.cn 文件夹, 并创建 hello.txt 文件。"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'sudo mkdir /opt/frp.muyunyun.cn\nsudo chmod 777 -R /opt/frp.muyunyun.cn\nsudo touch /opt/frp.muyunyun.cn/hello.txt\nsudo chmod 777 -R /opt/frp.muyunyun.cn/hello.txt\nsudo echo "Hello World!" > /opt/frp.muyunyun.cn/hello.txt\n')),(0,u.kt)("p",null,"安装 pm2"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install pm2 -g\n")),(0,u.kt)("p",null,"使用 pm2 守护运行 http-server 服务"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'cd /opt/frp_0.37.0_linux_arm64\nsudo touch start_http_server.sh\nsudo chmod 777 start_http_server.sh\nsudo echo "http-server /opt/frp.muyunyun.cn -p 8080" > start_http_server.sh\npm2 start /opt/frp_0.37.0_linux_arm64/start_http_server.sh\npm2 save\n')),(0,u.kt)("p",null,"使用 pm2 守护运行 frpc 服务"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'sudo touch /opt/frp_0.37.0_linux_arm64/start_frpc.sh\nsudo chmod 777 /opt/frp_0.37.0_linux_arm64/start_frpc.sh\nsudo echo "/opt/frp_0.37.0_linux_arm64/frpc -c /opt/frp_0.37.0_linux_arm64/frpc.ini" > /opt/frp_0.37.0_linux_arm64/start_frpc.sh\ncd /opt/frp_0.37.0_linux_arm64/\npm2 start /opt/frp_0.37.0_linux_arm64/start_frpc.sh\npm2 save\n')),(0,u.kt)("p",null,"可以使用 ",(0,u.kt)("inlineCode",{parentName:"p"},"pm2 list")," 查看当前树莓派中的服务列表。"),(0,u.kt)("p",null,(0,u.kt)("img",o({parentName:"p"},{src:"http://with.muyunyun.cn/442c4a0b41ad3bc6fcbb09f6d162bd06.jpg",alt:null}))),(0,u.kt)("p",null,"在公网访问 frp.muyunyun.cn:90。💐💐💐至此有了外网可以访问的家庭服务器。"),(0,u.kt)("p",null,(0,u.kt)("img",o({parentName:"p"},{src:"http://with.muyunyun.cn/fac7d7c9a8098d72f98cd6f4485347cd.jpg",alt:null}))),(0,u.kt)("h3",null,"添加 SSH 服务"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"[ssh]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 22\nremote_port = 6000\n")),(0,u.kt)("p",null,"如上配置是指将树莓派的默认 ssh 的 22 号端口映射到 frp.muyunyun.cn 的 6000 端口。"),(0,u.kt)("p",null,"重启 frpc 服务:"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"cd /opt/frp_0.37.0_linux_arm64\npm2 restart start_frpc.sh\n")),(0,u.kt)("p",null,"通过公网 frp.muyunyun.cn 的 6000 端口进行 ssh 登录。"),(0,u.kt)("pre",null,(0,u.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"ssh ubuntu@frp.muyunyun.cn -p 6000\n")),(0,u.kt)("p",null,(0,u.kt)("img",o({parentName:"p"},{src:"http://with.muyunyun.cn/43431e73e8a218fb9e0a494f61f8f0df.jpg",alt:null}))))}m.isMDXComponent=!0}}]);