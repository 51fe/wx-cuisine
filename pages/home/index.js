const { navs } = require('../../utils/config')
const { request } = require('../../utils/index')

Page({
  data: {
    navs,
    currentId: '',
    windowHeight: 400,
    list: [],
    loading: false
  },
  
  onLoad(options) {
    this.hasMore = false
    this.start = 0
    wx.getSystemInfo({
      success: res => {
        this.setData({
          windowHeight: res.windowHeight
        })
      }
    })
    let item = navs[0]
    // 根据时间段推荐
    const hour = new Date().getHours()
    if (9 <= hour && hour < 14) {
      item = navs[1]
    } else if (14 <= hour && hour < 18) {
      item = navs[2]
    } else if (18 <= hour && hour < 20) {
      item = navs[3]
    } else if (20 <= hour && hour < 23) {
      item = navs[4]
    }
    let id = item.id
    // 传递的参数优先
    const optionId = options.id || id
    const found = navs.find(item => item.id === optionId)
    if (found) {
      id = found.id
    } else {
      // 不重复
      id = optionId
      this.setData({
        navs: navs.concat(options)
      })
    }
    // 构造参数
    this.handleSelect({
      currentTarget: { id }
    })
  },

  fetchData() {
    const num = 18
    this.setData({ loading: true })
    request('byclass', {
      classid: this.data.currentId,
      start: this.start,
      num,
    }).then(result => {
      const list = this.data.list.concat(result.list)
      this.start += num
      this.hasMore = list.length < result.total
      this.setData({ list, loading: false })
    }).catch(() => {
      this.setData({ loading: false })
    })
  },

  loadMore() {
    if (this.hasMore) {
      this.fetchData();
    }
  },

  handleSelect(e) {
    const currentId = e.currentTarget.id
    // 避免重复提交
    if (this.data.currentId === currentId) {
      return
    }
    const found = this.data.navs.find(item => item.id === currentId)
    if (found) {
      // 更新导航栏标题
      wx.setNavigationBarTitle({
        title: found.name
      })
    }
    // 重置
    this.setData({ currentId, list: [] })
    this.start = 0
    this.fetchData()
  }
})