# nginx配置

    server {
         listen       80;
         server_name  xrz.36kr.com;
         gzip on;
         gzip_comp_level 9;
         gzip_types application/javascript text/css application/font-woff;
         root /Users/sky/work/kr-data;  #使用自己的项目绝对路径
         location / {
             try_files  /dist/$uri  /.tmp/$uri  /src/$uri /dist/index.html =404;
         }
        location /n/api {
            proxy_pass http://127.0.0.1:4243;
            expires 0;
        }
        location /n {
            rewrite ^/n(.*)$ $1 break;
            try_files  /dist/$1  /.tmp/$1  /src/$1 /dist/index.html =404;
            expires 0;
        }
        location / {
            try_files  /dist/$uri  /.tmp/$uri  /src/$uri /dist/index.html =404;
            expires 0;
        }
     }

# 编辑/etc/hosts
  127.0.0.1 xrz.36kr.com

  192.168.2.8 nrongtest03.36kr.com

# 运行项目

	cnpm i
	bower i
	./gulp serve
# 浏览器访问
http://xrz.36kr.com


