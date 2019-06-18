import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default {
  /**
   * mock bootstrap
   */
  bootstrap () {
    let mock = new MockAdapter(axios)
    console.log('开启请求拦截')
    mock.onGet('/wenku/get').reply(config => {
      // let { url } = JSON.parse(config.data) // 不需要请求参数，这里固定响应一个地址
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, { code: 200, msg: '成功', data: 'http://134.175.29.44/mockData.docx' }])
        }, 1000)
      })
    })
    mock.onGet('/wenku/get').reply(200,
      // let { url } = JSON.parse(config.data) // 不需要请求参数，这里固定响应一个地址
      { code: 200, msg: '成功', data: 'http://134.175.29.44/mockData.docx' }
    )
  }
}
