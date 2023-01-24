# 烹饪无忧

> 食谱类微信原生小程序。业务比较简单，没有使用 WePY、mpvue 框架，也没有使用 UniApp、Taro 多端工具生成。如果您喜欢本项目, 欢迎点赞，谢谢！

## 特性

- 可以根据当前时间段推荐食谱；
- 食谱分类能附加导航；
- 可以离线访问详情页面；
- 可以转发详情页面；
- 支持深色模式；
- 使用免费云服务（Serverless）；
- 界面整洁，无广告

## 效果截图

- 首页

![cuisine-home.jpg](https://www.riafan.com/uploads/2108/cuisine-home.jpg)

- 详情

![cuisine-detail.jpg](https://www.riafan.com/uploads/2108/cuisine-detail.jpg)

- 分类

![cuisine-category.jpg](https://www.riafan.com/uploads/2108/cuisine-category.jpg)

- 黑夜模式

![cuisine-home-dark.jpg](https://www.riafan.com/uploads/2108/cuisine-home-dark.jpg)

## 扫码体验

![cuisine-qr-code.jpg](https://www.riafan.com/uploads/2108/cuisine-qr-code.jpg)

## 获取云服务

后台使用的京东万象 > API > 生活服务 >[菜谱大全](https://wx.jdcloud.com/market/datas/26/11072)云服务（每天免费使用 1000 次，够用了），运行前需要去京东云申请一个账号

## 修改 appkey

打开 utils/config.js，将 appkey 的值修改成您的开发者秘钥，可参看接口参数

```js
const config = {
  baseUrl: 'https://way.jd.com/jisuapi/',
  appkey: '需要修改',
  ...
}
```

本项目基于[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)创建。
