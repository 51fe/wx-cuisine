# 烹饪无忧

> 原生食谱类微信小应用，根据当前时间段推荐食谱，支持深色模式。如果您喜欢本项目, 欢迎点赞，谢谢！

## 效果截图:
![效果截图](https://raw.githubusercontent.com/51fe/wx-cuisine/main/snapshots/home.jpg)
![效果截图](https://raw.githubusercontent.com/51fe/wx-cuisine/main/snapshots/detail.jpg)
![效果截图](https://raw.githubusercontent.com/51fe/wx-cuisine/main/snapshots/category.jpg)
![效果截图](https://raw.githubusercontent.com/51fe/wx-cuisine/main/snapshots/home-dark.jpg)

## 扫码体验:
![扫码体验](https://raw.githubusercontent.com/51fe/wx-cuisine/main/snapshots/qr-code.jpg)

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
