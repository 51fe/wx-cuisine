const { briefList, baseUrl, appkey, storageKey } = require('./config')

const request = (url, params) => {
  const promise = new Promise((resolve, reject) => {
    wx.showLoading({ title: '加载中', mask: false })
    wx.request({
      url: baseUrl + url,
      data: {
        ...params,
        appkey
      },
      success: ({ data }) => {
        wx.hideLoading()
        if (data.code === '10000') {
          resolve(data.result.result)
        } else {
          wx.showToast({
            title:  data.msg || '请求出错',
            icon: 'error',
            duration: 2000
          })
        }
      },
      fail: res => {
        wx.hideLoading()
        wx.showToast({
          title: res.errMsg ? '请求出错' : res.data.result.msg,
          icon: 'error',
          duration: 2000
        })
        reject(res)
      }
    })
  })
  return promise
}

const getBriefList = result => briefList.map(item => {
  const key = item[0]
  return {
    key,
    value: result[key],
    description: item[1]
  }
})

const readFavorites = () => {
  const promise = new Promise((resolve, reject) => {
    wx.getStorage({
      key: storageKey,
      success (res) {
        resolve(res.data)
      },
      fail(res) {},
    })
  })
  return promise
}

module.exports = {
  request,
  getBriefList,
  readFavorites
}
