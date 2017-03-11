#文档  v.1.0.0

Web性能权威指南
后台管理类型
参考
http://www.itnose.net/detail/6649185.html
https://github.com/kenberkeley/vue-demo/tree/master/src/services/xhr
https://segmentfault.com/q/1010000007071229?_ea=1231525 (vue引用)
https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart (vuex)
http://www.mobile-patterns.com/recently-added (UI)

##VUEX 面向角色区分；


电商类型

角色：用户，商品

功能：商品橱窗，用户管理

前端模块

商品模块
用户模块

页面MAP（SPA模式）

首页
商品橱窗页 （采用不定列瀑布流显示）
商品详情页 （商品飞入购物车）
购物车页面 （以购商品列表）
结算页面   （地址栏，快递选择，支付选择）
用户登录页面  （图形验证码）
用户注册页面   （验证码）
用户基本信息页面  （用户基本信息，月购入信息的数据报表，与消费报表）
用户订单列表页面  （所有状态的商品信息）
用户订单详情页面  （单商品信息+支付+物流信息）


后台管理页面（后退）
管理员登陆页面
用户管理页面
商品管理页面

使用NodeJs+mongodb

##注意事项

插件与组件的区分；
插件是组件里面的一种；
插件与页面逻辑无关，组件与页面逻辑有关；

插件的引入(样式与JS文件)，SPA模式，CMD OR AMD

SPA 选择AMD

项目系统兼容情况
|----------------------------|
|  IOS  |  andriod  |  pc    |
|       |           |        |
------------------------------

##命名规则

###路由

以小写r开头+（模块名称）+文件名称，采用驼峰命名；


###组件

以小写c开头+（模块名称）+文件名称，采用驼峰命名；


###服务

以小写s开头+（模块名称）+文件名称，采用驼峰命名；

###Vuex

以小写x开头+Store，采用驼峰命名；


##文件引入顺序
1.公共类
2.服务类
3.Vuex
4.路由类
5.公共组件类/私有组件
6.页面类


##技术选型
字符图标使用icomoon
使用jquery 3.0 实测DOM操作速度超过zepTo，zepTo官方停止更新，以上原因选择jQuery3.0 压缩生产大小85kB。
使用webpack+vue+vuex+vue-router技术栈，自动化管理与测试，bower，es6，vuex架构模式，使用Vue-router路由映射功能。
跨域使用postMessage,使用worker进行线程，webSocket 推送
安全事项：
postMessage：中间人攻击
worker：僵尸进程
webSocket：中间人攻击


###问题

##目录结构

object
  |
  |-build  webpack编译后文件
  |-test 测试文件
  |-doc
  |  |-readme.md  帮助文档
  |  |-api  后台接口文档
  |  |-prototype  项目原型
  |  |-ui  项目UI
  |-node_modules
  |-src
  |  |-static  插件目录
  |  |  |-lib 类库
  |  |  |  |-jquery-3.1.1.min.js
  |  |  |-plugin  插件
  |  |  |  |-alert
  |  |  |  |  |-jquery.alert.js  插件文件
  |  |  |  |  |-jquery.alert.scss  插件样式
  |  |  |  |  |-readme.md  插件文档
  |  |  |  |-loading
  |  |  |  |-toast
  |  |-util   按功能划分的自定义公共方法
  |  |  |-analyticsUrl.js  解析URL工具类
  |  |  |-trimQs.js  获取主机名工具函数
  |  |-assets   静态资源
  |  |  |-font
  |  |  |-images
  |  |  |-sass
  |  |  |-icomoon  字符图标
  |  |-components  公共组件
  |  |  |-select  下拉列表组件（按功能分多组件化建文件夹管理，单文件化直接vue文件）
  |  |  |-navBar.vue  导航栏
  |  |-routers  路由
  |  |  |-map  路由映射
  |  |  |  |-index.js  映射入口文件（设置404等特殊页面路由，引入其他模块路由）
  |  |  |  |-auth.js  用户认证模块路由
  |  |  |-index.js 路由入口文件
  |  |-services  服务层(与后台数据交互提供服务，从模块层面划分)
  |  |  |-lib  服务工具函数(目前ajax函数)
  |  |  |  |-config.js  后台通信配置文件（包含基本Ajax请求路径和Ajax各状态处理方法）
  |  |  |  |-xhr.js  自定义ajax函数
  |  |  |-authService.js  用户认证服务
  |  |-vuex  vue官方架构模式
  |  |  |-moduleA  模块A
  |  |  |  |-actions.js
  |  |  |  |-mutation-type.js
  |  |  |  |-getters.js
  |  |  |-store.js
  |  |-views   按模块划分
  |  |  |-beforeStage  前台管理
  |  |  |  |-404  404模块
  |  |  |  |  |-components  404页面组件
  |  |  |  |  |  |-com      组件
  |  |  |  |  |  |  |-images   组件一静态图片资源
  |  |  |  |  |  |  |-com.vue  组件一文件
  |  |  |  |-index.vue  404页面
  |  |  |  |-auth 用户管理模块
  |  |  |  |-index 首页模块
  |-package.json
  |-webpack.config.js


