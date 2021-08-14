const { baseUrl, appkey, storageKey } = require('./config')

/**
 * 请求封装
 * @param {String} url 
 * @param {Object} params 
 * @param {Boolean} once 
 */
const request = (url, params, once = true) => {
  function hideLoading(once) {
    if (once) {
      wx.hideLoading()
    } else {
      wx.hideNavigationBarLoading()
    }
  }

  function handleError(reject, errMsg) {
    const content = errMsg || '网络出错了~'
    wx.showModal({
      title: '提示',
      confirmText: '重试',
      content,
      success (res) {
        if (res.confirm) {
          request(url, params, once)
        }
      }
    })
  }

  const promise = new Promise((resolve, reject) => {
    if (once) {
      wx.showLoading({
        title: '加载中',
        icon: 'loading'
      })
    } else {
      wx.showNavigationBarLoading()
    }
    wx.request({
      url: baseUrl + url + '.json',
      data: { 
        ...params,
        appkey
      },
      success: ({ data }) => {
        hideLoading(once)
        if (data.code === '10000') {
          resolve(data.result.result)
        } else {
          handleError(reject, data && data.msg)
        }
      },
      fail: res => {
        hideLoading(once)
        handleError(reject, res.data && res.data.result.msg)
      }
    })
  })
  return promise
}

const readFavorites = () => {
  const promise = new Promise((resolve, reject) => {
    wx.getStorage({
      key: storageKey,
      success(res) {
        resolve(res.data)
      },
      fail() { },
    })
  })
  return promise
}

module.exports = {
  request,
  readFavorites
}
