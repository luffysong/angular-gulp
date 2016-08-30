#node版本需要
需要使用node6.0版本
# 运行项目

	cnpm i
	bower i
	./gulp serve
# 浏览器访问
http://localhost:4242

# nginx配置

    server {
         listen       80;
         server_name  xrz.com;
         gzip on;
         gzip_comp_level 9;
         gzip_types application/javascript text/css application/font-woff;
         root /Users/sky/work/kr-data;  //使用自己的项目绝对路径
         location / {
             try_files  /dist/$uri  /.tmp/$uri  /src/$uri /dist/index.html =404;
         }
         location /api {
             proxy_pass http://127.0.0.1:4242;
             expires 0;
         }
     }

