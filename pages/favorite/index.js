const { readFavorites } = require('../../utils/index')

Page({
  data: {
    list: []
  },
  
  onShow() {
    readFavorites().then(list => {
      this.setData({list})
    })
  },
  
  goDetail(e) {
    const id = e.currentTarget.id
    wx.navigateTo({
      url: '/pages/detail/index?id=' + id,
    })
  }
})