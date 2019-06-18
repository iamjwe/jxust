export let checkUrl = function (url) {
  if (url.trim() === '') {
    return { result: false, message: '请输入网址' }
  }
  return { result: true }
}
