# 烹饪无忧

> 原生食谱类微信小应用，持深色模式。如果您喜欢本项目, 欢迎点赞，谢谢！

## 效果截图:
![效果截图](https://github.com/51fe/wx-cusine/blob/master/snapshots/home.jpg?raw=true)
![效果截图](https://github.com/51fe/wx-cusine/blob/master/snapshots/detail.jpg?raw=true)
![效果截图](https://github.com/51fe/wx-cusine/blob/master/snapshots/category.jpg?raw=true)
![效果截图](https://github.com/51fe/wx-cusine/blob/master/snapshots/home-dark.jpg?raw=true)

## 扫码体验:
![扫码体验](https://github.com/51fe/wx-cusine/blob/master/snapshots/qr-code.jpg?raw=true)

## 获取云服务：
后台使用的京东万象 > API > 生活服务 >[菜谱大全](https://wx.jdcloud.com/market/datas/26/11072)云服务（每天免费使用1000次，够用了），运行前需要去京东云申请一个账号

## 修改appkey
打开utils/config.js，将appkey的值修改成您的开发者秘钥，可参看接口参数

``` js
const config = {
  baseUrl: 'https://way.jd.com/jisuapi/',
  appkey: '需要修改',
  ...
}
```

本项目基于 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)创建。