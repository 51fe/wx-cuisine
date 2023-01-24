const { request } = require('../../utils/index')

Page({
  data: {
    vtabs: [],
    activeTab: 0,
    loading: true
  },

  onLoad() {
    this.setData({ loading: true })
    wx.showLoading({
      title: '加载中',
      icon: 'loading'
    })
    request('recipe_class',).then(vtabs => {
      wx.hideLoading()
      this.setData({ vtabs, loading: false })
    }).catch(() => {
      wx.hideLoading()
      this.setData({ loading: false })
    })
  },

  handleSelect(e) {
    const id = e.currentTarget.id
    const name = e.currentTarget.dataset.name
    wx.reLaunch({
      url: '/pages/home/index?name=' + name + '&id=' + id,
    })
  }
})