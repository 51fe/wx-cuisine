const { request } = require('../../utils/index')

Page({
  data: {
    vtabs: [],
    activeTab: 0,
    loading: false
  },

  onLoad() {
    this.setData({ loading: true })
    request('recipe_class',).then(vtabs => {
      this.setData({ vtabs, loading: false })
    }).catch(() => {
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