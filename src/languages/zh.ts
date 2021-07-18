const zhLanguageMap = {
  sequence: '排序',
  search: '搜素',
  download: '下载',
  settings: '设置',
  mail: '邮箱',
  password: '密码',
  second: '秒',
  minute: '分',
  duration: '时长',

  keywordSearch: '关键词搜索',
  viewCount: '播放数',
  locationOfSave: '保存位置',
  smOrSoCode: 'sm/so号',
  doSearchPlease: '请先执行搜索',
  viewCounts: '播放量',
  likeCounts: '点赞量',
  favoriteCounts: '收藏量',
  commentCounts: '弹幕量',
  publishDate: '投稿日期',
  durationForVideoItem: '时　长',

  selectLocationOfSave: '选择保存位置',
  emptyKeywordHintForSearch: '搜索关键词不能为空',
  emptyLoginInfoHintForSearch: '登录信息不能为空',
  emptyCodeHintForSearch: 'sm/so号不能为空',
  tryLoginHint: '尝试登录中...',
  loginSuccessHint: '登录成功',
  loginFailHint: '登录失败，请核对登录信息并确认网络环境',
  startHintOfDownloadComments: '开始下载弹幕：',
  successHintOfDownloadComments: (title: string, total: number) => `弹幕保存成功：${title}，实际保存${total}条`,
  failHintOfSaveComments: '文件保存失败',
  failHintOfDownloadComments: '弹幕下载失败',
  basicDateFormatForMoment: 'YYYY年MM月DD日 HH:mm:ss',
  allLoadedHintOfSearchResult: '你已经触碰到我的底线了ψ(╰_╯)',

  sequenceTypes: {
    commentMost: '弹幕最多',
    commentLeast: '弹幕最少',
    publishLatest: '最新投稿',
    publishEarliest: '最早投稿',
    viewMost: '最多观看',
    viewLeast: '最少观看',
    commentLatest: '弹幕最近',
    commentEarliest: '弹幕最早',
    mylistMost: '我的列表最多',
    mylistLeast: '我的列表最少',
    durationMost: '时长最长',
    durationLeast: '时长最短',
  },
  durationTypes: {
    none: '不限制',
    '5-': '5分钟以内',
    '5-20': '5分钟~20分钟',
    '20-60': '20分钟~60分钟',
    '60+': '60分钟以上'
  },
  viewCountTypes: {
    none: '不限制',
    '1k-': '1千以内',
    '1k-5k': '1千到5千',
    '5k - 50k': '5千到5万',
    '50k - 100k': '5万到10万',
    '100k - 500k': '10万到50万',
    '500k+': '50万以上'
  },
}

export type LanguageMap = typeof zhLanguageMap

export default zhLanguageMap
