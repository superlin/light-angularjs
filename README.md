light angularjs
===
##简介
基于[mgechev/light-angularjs](https://github.com/mgechev/light-angularjs)修改，实现了angularjs核心，并实现了部分指令

##使用
1. 安装Node.js及npm环境
2. 下载源码到本地，并解压缩
3. 使用命令``npm install``安装所需要的库
4. 运行``grunt serve``，启动服务
5. 访问``localhost:9000``查看demo（一般会自动打开）

##说明
实现了angular的核心部分

1. Scope：双向数据绑定，diget循环
2. DOMCompiler：文档编译，启动
3. Provider：controller、service、directive
4. 部分指令：ngl-click、ngl-bind、ngl-model、mgl-controller、ngl-repeate
