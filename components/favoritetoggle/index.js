const { storageKey } = require('../../utils/config')
const { readFavorites } = require('../../utils/index')

Component({
  properties: {
    favorite: {
      type: Object,
      default: {}
    },
    toggled: {
      type: Boolean,
      default: false
    }
  },

  data: {
    favorites: [],
    toggled: false
  },

  attached: function () {
    readFavorites().then(value => {
      this.data.favorites = value
    })
  },

  methods: {
    save(data, action) {
      wx.setStorage({
        key: storageKey,
        data,
        success() {
          wx.showToast({
            title: action + '收藏成功',
            icon: 'success',
            duration: 2000
          })
        },
        fail() {
          wx.showToast({
            title: action + '收藏失败',
            icon: 'error',
            duration: 2000
          })
        }
      })
    },

    toggle() {
      const toggled = this.data.toggled
      this.setData({
        toggled: !toggled
      })
      const index = this.data.favorites.findIndex(item => item.id == this.data.favorite.id)
      if (!toggled) {
        if (index === -1) {
          this.data.favorites.unshift(this.data.favorite)
          this.save(this.data.favorites, '添加')
        }
      } else {
        this.data.favorites.splice(index, 1)
        this.save(this.data.favorites, '取消')
      }
    }
  }
})
