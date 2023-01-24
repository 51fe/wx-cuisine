const { navs } = require('../../utils/config')
const { request } = require('../../utils/index')

Page({
  data: {
    navs,
    currentId: '',
    list: [],
    loading: true
  },

  onLoad(options) {
    this.hasMore = false
    this.start = 0
    let item = navs[4]
    // 根据时间段推荐
    const hour = new Date().getHours()
    if (10 <= hour && hour < 15) {
      item = navs[1]
    } else if (15 <= hour && hour < 18) {
      item = navs[2]
    } else if (18 <= hour && hour < 20) {
      item = navs[3]
    } else if (6 <= hour && hour < 10) {
      item = navs[0]
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
    const dataList = this.data.list
    this.setData({ loading: true })
    request('byclass', {
      classid: this.data.currentId,
      start: this.start,
      num,
    }, dataList.length === 0).then(result => {
      const list = dataList.concat(result.list)
      this.start += num
      this.hasMore = list.length < result.total
      this.setData({ list, loading: false })
    }).catch(() => {
      this.setData({ loading: false })
    })
  },

  loadMore(e) {
    if (this.hasMore) {
      this.fetchData();
    } else {
      wx.showToast({
        title: '没有更多了~',
        icon: 'none',
        duration: 2000
      })
    }
  },

  handleScroll(e) {
    if (e.detail.deltaY > 0) {
      // 保证只执行一次隐藏
      if (!this.hidden) {
        this.hidden = true
        wx.hideToast()
      }
    } else {
      this.hidden = false
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