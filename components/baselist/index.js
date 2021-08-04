Component({
  properties: {
    list: {
      type: Array,
      default: []
    }
  },

  methods: {
    goDetail(e) {
      const id = e.currentTarget.id
      wx.navigateTo({
        url: '/pages/detail/index?id=' + id
      })
    }
  }
})
