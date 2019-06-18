import { ApiDownload } from '../../api/api'

export let request = function (url) {
  let result = { success: false }
  return new Promise(function (resolve, reject) {
    ApiDownload(url).then((res) => {
      console.log(res)
      switch (res.code) {
        case 200:
          result.success = true
          result.msg = res.data
          break
        case 551:
        case 552:
        case 553:
        case 554:
          result.msg = res.message
          break
        default:
          result.msg = '出错啦，您可以选择加入xxx群反馈错误'
      }
      resolve(result)
    }, (error) => {
      result.msg = '请求失败'
      console.error(error)
      resolve(result)
    })
  })
}
