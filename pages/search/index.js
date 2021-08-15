const { request } = require('../../utils/index')

Page({
  data: {
    windowHeight: '400',
    keyword: '',
    list: [],
    loading: true
  },

  onConfirm(e) {
    const keyword = e.detail.value
    if (keyword) {
      this.setData({
        params: {
          keyword
        }
      })
      this.setData({ list: [], loading: true })
      request('search', {
        keyword,
        num: 18,
      }).then(({ list }) => {
        this.setData({ list, loading: false })
      }).catch(() => {
        this.setData({ loading: false })
      })
    } else {
      wx.showToast({
        title: '关键字不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    // 更新导航栏标题
    wx.setNavigationBarTitle({
      title: '搜索' + keyword
    })
    this.setData({ keyword: '' })
  }
})