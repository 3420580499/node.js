# node.js
  a node.js note
# node命令的使用    
  node xxx.js          
# 全局对象      
  在浏览器中全局对象是window，在Node中全局对象是global      
# 第三方模块    
  1.以js文件的形式存在，提供实现项目具体功能的API接口      
  2.以命令行工具形式存在，辅助项目的开发(比如：npm(node已经安装了))        
# node_modules文件夹问题       
  1.文件夹以及文件过多，当我们将整体拷贝给别人的时候，传输速度会很慢    
  2.复杂的模块依赖关系要被记录，确保模块的版本和当前保持一致，否则会导致当前项目运行报错     
# package.json文件的作用    
  项目描述文件，记录了当前项目信息，例如项目名称，版本，作者，GitHub地址，当前项目依赖了哪些第三方模块等，可以使用npm init -y(不填写任何信息，全部使用默认值)命令生成     
# 项目依赖  
  在项目的开发阶段和线上运营阶段，都需要依赖的第三方包，称为项目依赖      
  使用npm install 包名命令下载的文件会被添加到package.json文件的dependencies字段中         
# 开发依赖   
  在项目的开发阶段需要的依赖，线上运营不需要的第三方包，称为开发依赖          
  使用npm install 包名--save--dev命令将包添加到package.json文件的devDependencies字段中   
# package-lock.json文件的作用  
  锁定包的版本，确保再次下载时不会因为版本不同而产生问题     
  加快下载速度，因为文件中已经记录了项目所依赖第三方包的树形结构和包的下载地址，重新安装时只需下载即可，不需要做额外的工作    
# URL的组成   
  传输协议：//服务器IP或域名：端口号 /资源所在位置   
  http://www.bj.com/new/one.html      网站应用默认端口是80端口，浏览器会给你自动加上
  http:超文本传输协议，提供了一种发布和接收HTML页面的方法 