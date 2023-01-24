const { request, readFavorites } = require('../../utils/index')

Page({
  data: {
    detail: {},
    briefList: []
  },

  onLoad(options) {
    const id = parseInt(options.id)
    this.id = id
    // 堆栈里面的页面的数据
    const pages = getCurrentPages()
    const prevPage = pages[pages.length - 2]
    if (prevPage) {
      const result = prevPage.data.list.find(item => item.id === id)
      readFavorites().then(value => {
        this.setData({
          toggled: value.some(item => item.id === id)
        })
      })
      this.update(result)
    } else {
      // 外部链接进入时需要调用详情接口
      request('detail', { id }).then(result => {
        const detail = result
        this.setData({ detail, loading: false })
        this.update(detail)
      }).catch(() => {
        this.setData({ loading: false })
      })
    }
  },

  onShareAppMessage() {
    return {
      title: this.title,
      path: '/pages/detail/index?id=' + this.id,
      success() {
        wx.showToast({
          title: '已转发',
        })
      },
      fail() {
        wx.showToast({
          title: '转发失败',
        })
      }
    }
  },

  update(result) {
    if (result) {
      const title = result.name
      wx.setNavigationBarTitle({ title })
      this.title = title
      this.setData({ detail: result })
    }
  }
})