const config = {
  baseUrl: 'https://way.jd.com/jisuapi/',
  appkey: '需要修改',
  storageKey: ' CUISINE_FAVORITES',
  navs: [{
    name: '早餐',
    id: '562',
  }, {
    name: '午餐',
    id: '563',
  }, {
    name: '下午茶',
    id: '564',
  }, {
    name: '晚餐',
    id: '565',
  }, {
    name: '夜宵',
    id: '566'
  }],
  briefList: [
    ['preparetime', '准备时间'],
    ['cookingtime', '制作时间'],
    ['peoplenum', '用餐人数']
  ]
}

module.exports = config