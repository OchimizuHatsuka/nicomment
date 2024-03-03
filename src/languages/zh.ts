const zhLanguageMap = {
  // 单词
  sequence: '排序',
  search: '搜素',
  download: '下载',
  downloading: '下载中',
  settings: '设置',
  mail: '邮箱',
  password: '密码',
  second: '秒',
  minute: '分',
  duration: '时长',
  select: '选择',
  operate: '操作',
  in: '在',
  place: '处',
  insert: '插入',
  delete: '删除',
  add: '添加',
  hold: '把',   // 这个和do纯粹是为了日语...
  do: '做',
  close: '关闭',
  port: '端口',
  type: '类型',
  username: '用户名',
  thumbnail: '缩略图',
  title: '标题',
  status: '状态',
  completed: '完成',
  error: '错误',
  result: '结果',
  convert: '转换',
  converting: '转换中',

  // 词组
  keywordSearch: '关键词搜索',
  locationOfSave: '保存位置',
  smOrSoCode: 'sm/so号',
  doSearchPlease: '请先执行搜索',
  viewCounts: '播放量',
  likeCounts: '点赞量',
  favoriteCounts: '收藏量',
  commentCounts: '弹幕量',
  publishDate: '投稿日期',
  durationForVideoItem: '时　长',
  gotoVideoPage: '前往视频页',
  netErr: '网络错误',
  timeModify: '时间调整',
  danmakuPretreatment: '弹幕预处理',
  proxySettings: '代理设置',
  directConnect: '直连',
  multipleDownload: '批量下载',
  waitForDownload: '等待下载',
  niconicoDanmakuFile: 'niconico弹幕文件',
  startToConvert: '开始转换',
  danmakuConvert: '弹幕转换',
  pathOfDanmakuFiles: '弹幕文件路径',
  pathOfOutputDir: '输出文件夹路径',
  parameterForSubtitleFileGeneration: '字幕文件生成参数',
  videoWidth: '视频宽度',
  videoHeight: '视频高度',
  fontSize: '字体大小',
  opacity: '不透明度',
  durationOfScrollingDanmaku: '滚动弹幕持续时间',
  durationOfStaticDanmaku: '静止弹幕持续时间',
  danmakuFont: '弹幕字体',
  protectHeightForFooter: '底部预留高度',
  parameterForDanmakuFilter: '弹幕过滤参数',
  fliterByKeyWord: '关键词过滤',
  splitByHelfComma: '以半角逗号分隔',
  filterByRegex: '正则表达式过滤',
  splitByLineBreak: '以换行分隔',
  multipleSelect: '多选',
  dateForGettingComments: '弹幕获取时间点',
  autoConvertAfterDownloadingCommentsByClick: '单击弹幕下载后自动转换',
  convertDownloadedComments: '转换已下载的弹幕',
  settingsForDanmakuGetting: '弹幕获取设置',
  expectingQuantity: '期待获取量',

  // 短句，一般只会用在一个地方，变量名不一定和内容一一对应
  selectLocationOfSave: '选择保存位置',
  emptyKeywordHintForSearch: '搜索关键词不能为空',
  emptyLoginInfoHint: '登录信息不能为空',
  emptyCodeHintForSearch: 'sm/so号不能为空',
  tryLoginHint: '尝试登录中...',
  loginSuccessHint: '登录成功',
  loginFailHint: '登录失败，请核对登录信息并确认网络环境',
  startHintOfDownloadComments: '开始下载弹幕：',
  successHintOfDownloadComments: (title: string, total: number) => `弹幕保存完毕：${title}，实际保存${total}条`,
  successHintOfDownloadCommentsShort: (total: number) => `弹幕保存完毕，实际保存${total}条`,
  hintForImcompleteDownload: (total: number) => `下载因失败而中断，${total}条弹幕已保存`,
  failHintOfSaveComments: '文件创建失败',
  failHintOfDownloadComments: '弹幕下载失败',
  basicDateFormatForMoment: 'YYYY年MM月DD日 HH:mm:ss',
  allLoadedHintOfSearchResult: '你已经触碰到我的底线了ψ(╰_╯)',
  emptyHintOfSearchResult: '什么也没搜到...',
  noRecordOfSearchHistory: '暂无搜索记录',
  insertZeroSecondHint: '要插入秒数不能为0',
  timeRangeConflictHint: '要添加的修改时间段和其他时间段存在冲突',
  hintForTimelineChartOfTimeModify: '注：为便于操作，上图仅表示相对比例。',
  hintForDanmakuTimeModificationDeleted: '已删除时间调整',
  hintForDanmakuTimeModificationMinimum: '调整后时长不能小于1秒',
  proxyUrlHelpText: '开头不包含协议',
  proxyAuthHelpText: '若无需凭证请勿填写',
  retryFailedDownload: '重试失败的下载',
  selectDanmakuFileToConvert: '选择要转换的弹幕文件',
  selectDirPathForOutput: '选择导出文件夹路径',
  hintForNoDanmakuFiles: '弹幕文件列表不能为空',
  hintForConvertProgress: (current: number, total: number) => `转换进度：${current} / ${total}`,
  hintForConvertCompleted: (succeed: number, failed: number) => `转换完毕，成功${succeed}个，失败${failed}个`,
  hintForSavePathOfLogOfFailedConvert: '失败的相关日志已保存至logs文件夹',
  andSomeOtherFiles: (count: number) => `等${count}个文件`,
  clickHereToSelectFiles: '点击此处选择文件',
  clickHereToSelectDir: '点击此处选择文件夹',
  helpTextForNgScore: '为空或0时不过滤',
  helpTextForMultipleSelect: 'Ctrl + 左键单击',
  hintForEmptyItemInAssGeneration: '字幕文件生成参数中不能包含空项',
  hintForInvalidRegex: (index: number, regex: string) => `'第${index + 1}行存在无效的正则表达式：${regex}'`,
  hintForInvalidConfigForCommentsConvert: '因无效的弹幕转换配置，弹幕文件未能转换',
  hintForSucceededDownloadAndConvert: (title: string, total: number) => `弹幕保存并转换完毕：${title}，实际保存${total}条`,
  hintForFailedConvertWithSucceededDownload: (title: string, total: number) => `弹幕已保存但转换失败：${title}，实际保存${total}条，相关错误日志已记录到logs文件夹`,

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
