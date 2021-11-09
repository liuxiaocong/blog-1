(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4990],{14990:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>u});var t=r(59713),s=r.n(t),o=r(6479),a=r.n(o),c=(r(67294),r(3905));function p(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){s()(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var i={};function u(n){var e=n.components,r=a()(n,["components"]);return(0,c.kt)("wrapper",l(l(l({},i),r),{},{components:e,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'server {\n    listen       8080 ssl http2;\n    listen       [::]:8080 ssl http2;\n    server_name  frp.muyunyun.cn;\n\n    location / {\n        proxy_pass http://127.0.0.1:8080;\n        proxy_set_header Host $host:443;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n\n    ssl_certificate "/etc/nginx/ssl/frp.muyunyun.cn/fullchain.cer";\n    ssl_certificate_key "/etc/nginx/ssl/frp.muyunyun.cn/frp.muyunyun.cn.key";\n    ssl_session_cache shared:SSL:1m;\n    ssl_session_timeout  10m;\n    ssl_ciphers HIGH:!aNULL:!MD5;\n    ssl_prefer_server_ciphers on;\n\n    # Load configuration files for the default server block.\n    include /etc/nginx/default.d/*.conf;\n\n    error_page 404 /404.html;\n        location = /40x.html {\n    }\n\n    error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n    }\n}\n')),(0,c.kt)("p",null,"nginx 配置文件, ",(0,c.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")),(0,c.kt)("pre",null,(0,c.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'user www-data;\nworker_processes 1;\n# pid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\n# error_log  /var/log/nginx/error.log warn;\n\nevents {\n        worker_connections 768;\n        # multi_accept on;\n}\n\nhttp {\n\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n    charset utf-8,gbk;\n    client_max_body_size 20m;\n\n    set_real_ip_from 127.0.0.1;\n    real_ip_header X-Forwarded-For;\n\n\n    log_format  main  \'$remote_addr  - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n    keepalive_timeout  65;\n    gzip  on;\n    include /etc/nginx/conf.d/*.conf;\n}\n\nstream {\n    map $ssl_preread_server_name $backend_name {\n        frp.muyunyun.cn        frp_muyunyun_cn;\n        default web;\n    }\n\n\n   upstream frp_muyunyun_cn {\n        server 127.0.0.1:8080;\n   }\n\n   upstream web {\n        server 127.0.0.1:80;\n   }\n\n   server {\n        listen       443 reuseport;\n        listen  [::]:443 reuseport;\n        proxy_pass   $backend_name;\n        ssl_preread  on;\n   }\n\n}\n')))}u.isMDXComponent=!0}}]);