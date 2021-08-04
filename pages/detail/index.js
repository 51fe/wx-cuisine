const { getBriefList, readFavorites } = require('../../utils/index')

Page({
  data: {
    windowHeight: 400,
    detail: {},
    briefList: []
  },

  onLoad(options) {
    const id = parseInt(options.id)
    // 堆栈里面的页面的数据
    const pages = getCurrentPages()
    const prevPage = pages[pages.length - 2]
    const result = prevPage.data.list.find(item => item.id === id)
    if (result) {
      wx.setNavigationBarTitle({
        title: result.name
      })
      this.setData({
        detail: result,
        briefList: getBriefList(result)
      })
      readFavorites().then(value => {
        this.setData({
          toggled: value.some(item => item.id === id)
        })
      })
    }
  }
})