## 项目搭建

### 概览

本项目使用Vue3+TypeScript+Vant实现三湘银行秒杀系统移动端页面

网址： http://www.xiezuoye.top/sanxiangseckill

备注：网页端F12打开浏览器调试工具，Ctrl+Shift+M（或点击那个“小手机”），再刷新页面即可看到移动端界面

### 代码规范

#### 集成editorconfig配置

EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

#### 使用prettier工具

Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

#### 使用ESLint检测

ESLint是一个用来识别 ECMAScript 并且按照规则给出报告的代码检测工具，使用它可以避免低级错误和统一代码的风格。如果每次在代码提交之前都进行一次eslint代码检查，就不会因为某个字段未定义为undefined或null这样的错误而导致服务崩溃，可以有效的控制项目代码的质量。

### 第三方库集成

#### vue-router集成

Vue Router 是 [Vue.js](http://v3.vuejs.org/) 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。

##### 路由模式选择

history模式，history模式的URL中没有#，它使用传统的路由分发模式，就是说用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的处理。

使用history模式通常本地调试没有什么问题，但是一旦发布到测试或生产环境，则会出现页面白屏或者刷新页面白屏的现象，这种问题的出现是因为前端和服务端没有做相应的配置。

##### 前端配置

router/index.ts

```js
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
```

vue.config.js

```js
publicPath:
    process.env.NODE_ENV === "production" ? "/sanxiangseckillmobile" : "/"
```

##### 服务器nginx配置

```
location / {
    try_files $uri $uri/ /sanxiangseckillmobile/index.html;
}
```

##### 路由导航守卫

进行一些网址访问权限的控制，如用户未登录不能进入“我的信息”以及“我的秒杀界面”，将会跳转回到登录页面

#### vuex集成

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter

我的项目主要分成4个模块，分别为home、login、guide、product。

##### login

userBaseInfo存储用户基本信息，userAccountInfo存储用户账户信息。

##### home

swiperImages轮播图、currentProducts当前产品信息、futureProducts未来产品信息、announcements公告信息。

##### guide

questions存放常见问题信息。

##### product

productList存放产品列表信息。

#### Vant集成

Vant 是一个轻量、可靠的移动端组件库。

我在项目中大量使用了vant组件，包括button、cell、icon、image、popup、toast、datetimePicker、field、form、passwordInput、picker、radio、search、overlay、empty、progress、swipe、pagination

#### axios集成

TS封装axios，三种拦截器封装：对应axios所有实例对应的拦截器，自定义config中取出的拦截器，单个请求对config的拦截

#### 移动端开发flexible+rem

flexible.js正是利用rem单位相对根元素<html>的font-size来做计算，而我们需要做的就是根据不同的屏幕算出html的font-size，而页面内的大小单位都根据rem来写，从而实现了自适应。

### 打包优化

#### 静态CDN

CDN 全称 Content Delivery Network，即内容分发网络。其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。

CDN 的工作原理 就是将源站的资源缓存CDN各个节点上，当请求命中了某个节点的资源缓存时，立即返回客户端，避免每个请求的资源都通过源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验。

我的项目在public/index.html中引入了相关CDN资源

```html
<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/vant/3.4.8/index.min.css" />
<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/vue-router@next"></script>
<script src="https://unpkg.com/vuex@next"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/vant/3.4.8/vant.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.24.0/axios.min.js"></script>
```

vue.config.js配置

```js
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      vant: "vant",
      axios: "axios"
    }
  }
```

#### 路由懒加载

没有使用懒加载时，导入的组件会被打包到一起，所以体积会越来越大

使用懒加载后，打包时一个组件会对应一个js组件，只有用户点击使用时才会请求对应的组件

因此路由懒加载能加快首屏优化时间

#### 图片压缩

利用webpack-image-loader对图片进行压缩，小图片base64展示（减少http请求数量），大图片进行压缩

#### 静态资源开启缓存

服务器nginx配置

```
	# 对css 和js 文件，缓存时长设置为1年
    location ~* \.(css|js)$ {
    	add_header Cache-Control "public, max-age=86400, immutable";
    }
```

### 跨域配置

#### 前端配置

vue.config.js

因为后端是两个人写得，所有用的不同的端口

```js
  devServer: {
    proxy: {
      "^/api/hyh": {
        target: "http://124.221.252.162:8077", // 后台接口地址
        pathRewrite: {
          "^/api/hyh": "" // /api/hyh -> ""
        },
        changeOrigin: true //是否跨域
      },
      "^/api/yhy": {
        target: "http://124.221.252.162:8082",
        pathRewrite: {
          "^/api/yhy": ""
        },
        changeOrigin: true
      }
    }
  },
```

#### 服务器nginx配置

```
    location /api/hyh {
		proxy_pass http://124.221.252.162:8077/;
		add_header Access-Control-Allow-Origin *;
		add_header Access-Control-Allow-Methods "GET, POST, PUT, OPTIONS";
    }

    location /api/yhy {
		proxy_pass http://124.221.252.162:8082/;
		add_header Access-Control-Allow-Origin *;
		add_header Access-Control-Allow-Methods "GET, POST, PUT, OPTIONS";
    }
```

### 其他

#### utils工具类

##### cache

对缓存进行公共管理，解决localstorage只能存字符串的弊端，支持对象类型的存取

##### date-format

对tz时间、utc时间、时间戳进行对应格式化

#### global

1. 通过全局变量app.config.globalProperties添加一个可以在应用的任何组件实例中访问的全局 property

   本项目中添加全局$filters

2. 对自定义工具类或者按需引入组件进行统一app注册，使得main.js中的注册更加清晰

#### 自动识别手机端或电脑端并跳转到对应界面

public/index.html

```html
<script type="text/javascript">
      const mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
      const browser = navigator.userAgent.toLowerCase();
      let isMobile = false;
      for (var i=0; i<mobileAgent.length; i++){
        if (browser.indexOf(mobileAgent[i])!=-1){
          isMobile = true;
          //  location.href = 'http://www.xiezuoye.top/sanxiangseckillmobile/'; // 手机端网址
           break;
         }
       }
       if (!isMobile) {
        location.href = 'http://www.xiezuoye.top/sanxiangseckill/'; // 网页端网址
       }
</script>
```



## 页面设计和实现

### 首页 home

#### 设计介绍

首页由四部分组成，轮播图，当前秒杀产品，未来秒杀产品预览，活动公告

##### home-image-swipe 首页轮播图

接收父组件home传来的swiperImages，通过vant-swipe进行展示，由于网页端和移动端共用首页轮播图，网页端的图片是长宽3：2显示，不利于移动端显示，要只显示图片的右半部分，修改图片的backgroundPosition: '85% 0%'和backgroundSize: '200% 100%'

##### home-current-products当前秒杀产品

选项卡展示，上面动态显示秒杀产品的开始时间，下面调用自己手写的组件product-detail-info，传入对应的产品信息，显示所选择的秒杀产品详细信息，点击可以跳转进入对应的产品详情页面

##### home-future-products. 未来秒杀产品预览

因为过多的轮播图可能会有点单调，所以这边采取左右滑动可以显示更多未来秒杀产品预览信息的形式进行展示

##### home-announcements 活动公告

上下滑动可以显示更多的活动信息

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220523152224692.png" alt="image-20220523152224692" style="zoom:25%;" />

### 登录 login

#### 设计介绍

调用自己编写的表单组件，向表单组件中传入contentFormConfig配置信息，接收表单传来的handleSubmit事件异步调用vuex store中的accountLoginAction，完成登录验证，登录成功后跳转到首页，登录失败则显示失败信息

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/c8ac132d6f3c0facb3f6decb81db75d.jpg" alt="c8ac132d6f3c0facb3f6decb81db75d" style="zoom: 25%;" />

### 注册 register

#### 设计介绍

与登录同理，调用自己编写的表单组件，向表单组件中传入contentFormConfig配置信息，接收表单传来的handleSubmit事件异步调用vuex store中的accountRegisterAction

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/9d7c83e55642455cdc7850ea558a4e4.jpg" alt="9d7c83e55642455cdc7850ea558a4e4" style="zoom:25%;" />

### 我的资料 my-info

#### 设计介绍

主要由2部分组成，我的账户信息，我的基本信息

##### my-info-account 我的账户信息

显示用户id，注册天数，账号，已购产品数量，资料完善程度等信息

##### my-info-base 我的基本信息

我的基本信息又分为 基本信息展示，编辑信息，绑定/解绑银行卡

###### 基本信息展示

调用vant的组件van-cell，基本信息包含手机号，姓名，证件类型，证件号码，卡号等等，其中 带※号的所有内容要必须全部完善才能购买产品，点击编辑按钮进入编辑信息界面

###### 编辑信息

调用自己编写的组件zc-form，并输入相关配置信息，点击绑定/解绑按钮显示对应的银行卡解绑/绑定弹窗

###### 绑定/解绑银行卡 bind-card

调用van-form

#### 效果图

概览

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/e10b1bb12fba06780472f4a10ecab65.jpg" alt="e10b1bb12fba06780472f4a10ecab65" style="zoom:25%;" />

完善资料

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/a7f4c81d395f23450ae432a9bf9b4e8.jpg" alt="a7f4c81d395f23450ae432a9bf9b4e8" style="zoom:25%;" />

解绑/绑定银行卡

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/1a1e51c7d55e6a3ca407b12199129be.jpg" alt="1a1e51c7d55e6a3ca407b12199129be" style="zoom:25%;" />



### 我的秒杀 my-product

#### 设计介绍

我的秒杀筛选条件分为活动状态，支付起始/结束时间，支付状态筛选

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/b6a25114fa80543624f9cacfe847ded.jpg" alt="b6a25114fa80543624f9cacfe847ded" style="zoom:25%;" />

### 产品列表 product-list

#### 设计介绍

筛选条件有关键词、起购金额，产品期限，风险等级以及（七日年化，业绩比较，机构金额和有效期限）的升序降序排列选择

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/f5b82e37a23bef07dba977df3d1f097.jpg" alt="f5b82e37a23bef07dba977df3d1f097" style="zoom:25%;" />

### 服务指南 guide

#### 设计介绍

服务指南由服务指南和常见问题组成

##### 服务指南 guide-manual

购买产品的介绍说明

##### 常见问题 guide-question

购买产品遇到的常见问题说明

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/f67526bb7cb0a29127c33c101be03d6.jpg" alt="f67526bb7cb0a29127c33c101be03d6" style="zoom:25%;" />

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/9454076e798a1ed378b0d92a13f9246.jpg" alt="9454076e798a1ed378b0d92a13f9246" style="zoom:25%;" />

### 产品详情 product-detail

#### 设计介绍

产品详情页由2部分组成，主要产品详情和其他产品详情信息

##### 主要产品详情 product-detail-main

显示主要的产品详情信息，秒杀中的产品点击抢弹窗显示订单详情弹窗

点击弹窗中的确认并前往支付将进行秒杀排队，如果秒杀成功将进入支付页面

调用自己封装的product-detail-info组件，传入对应的配置信息即可以显示

##### 其他产品详情 product-detail-order

上面是一个可以左右滑动的导航栏，包括产品概览，购买说明，产品说明书等等

下面是具体的其他产品详情信息

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220523215912959.png" alt="image-20220523215912959" style="zoom:25%;" />

订单详情弹窗

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220524085947712.png" alt="image-20220524085947712" style="zoom:25%;" />

### 支付 pay

#### 设计介绍

界面的最上方显示步骤进度条

主要由四部分组成，分别为选择支付方式，支付，支付成功和订单详情弹窗

##### 选择支付方式 pay-choice

提供三湘银行卡、微信、支付宝三种支付方式进行选择

##### 支付 pay-ing

输入银行卡密码

##### 支付成功 pay-complete

显示订单金额等信息

##### 订单详情弹窗 order-preview

展示产品信息和买入信息，由跳转过来的弹窗通过params传递信息，通过route.params获取信息并放入缓存cache中进行保存，保证页面刷新后还能正常显示，此外，缓存信息还进行过期时间戳判断，过期期限为1天，若缓存过期，则跳转回首页

#### 效果图

选择支付方式

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220524090148341.png" alt="image-20220524090148341" style="zoom:25%;" />

银行卡支付

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220524090205730.png" alt="image-20220524090205730" style="zoom:25%;" />

支付成功

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220524090226518.png" alt="image-20220524090226518" style="zoom:25%;" />

### 404页面 not-found

#### 设计介绍

调用van-empty显示用户访问不存在路径的界面效果

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220523212616251.png" alt="image-20220523212616251" style="zoom:25%;" />



## 自定义组件和设计

### 导航头 nav-header

#### 设计介绍

fixed定位显示在页面最上方，当用户点击右边分类小图标的时候顶部弹出弹出层，点击对应的按钮则跳转到对应的界面

#### 效果图

弹出层不显示效果

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220523212838107.png" alt="image-20220523212838107" style="zoom:25%;" />

弹出层显示效果

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220523212432248.png" alt="image-20220523212432248" style="zoom:25%;" />

### 导航尾 nav-footer

#### 设计介绍

位于界面最下方，显示导航尾图标，以及版权信息等

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220523213444221.png" alt="image-20220523213444221" style="zoom:25%;" />

### 页面标题 nav-title

#### 设计介绍

页面标题

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220523215307669.png" alt="image-20220523215307669" style="zoom:25%;" />

### 表单 zc-form

#### 设计介绍

传入表单的配置信息，例如label，placeholder，title等信息，并且父组件需要传入对应的v-model信息，来完成表单的双向绑定，但是，为了不违反单向数据流，子组件也就是该表单需要先深拷贝对应的v-model信息formData，深层监听formData，当监听到formData发生改变，通知父组件变化

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220523215428471.png" alt="image-20220523215428471" style="zoom:25%;" />

### 表格排序组件 zc-table-column-sort

#### 设计介绍

v-for遍历显示从父组件传来配置数据信息，flex一行进行显示，当点击上三角按钮时为升序，下三角为降序，再次点击时取消排序，当三角按钮被点击时，触发自定义事件sortOptionsChange，传递给父组件对应的prop（哪一栏）和state（升序、降序、不排序）信息，父组件接收到子组件传来的信息进行对应的后端请求

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220524083719141.png" alt="image-20220524083719141" style="zoom:50%;" />

### 产品详细信息 product-detail-info

#### 设计介绍

显示理财产品的详细信息，动态显示距离秒杀活动结束/开始时间，点击抢进行对应界面的跳转

#### 效果图

<img src="F:/study/大三下/移动应用交互设计/三湘银行秒杀系统.assets/image-20220524091719568.png" alt="image-20220524091719568" style="zoom:33%;" />



## 自我评价

1. 代码规范

   文件、变量命名规范，注释丰富，

   TS进行类型声明，

   代码目录结构分层清晰

   使用了editorconfig、prettier、ESLint等工具保证代码规范性

2. 封装性高

   vuex+TS封装

   axios+TS封装

   utils工具类封装

   封装6个自定义组件

3. 前端技术丰富

   路由导航守卫beforeEach

   vuex模块module管理、mutation修改state数据、action异步操作

   axios请求响应拦截

   TypeScript类型检测与对vuex、axios等封装

   vant移动端组件库使用

   flexible+rem+flex移动端布局

   proxy代理前端跨域配置

   项目部署到服务器

   首屏加载优化

4. 项目完成度高

   包含首页、登录、注册、服务指南、产品列表、产品详情、支付、我的资料、我的秒杀、404页面

   除了手机端页面外，还有网页端页面、后端管理端页面
