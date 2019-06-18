import axios from 'axios'// 封装axios请求，分别暴露所有的请求，需要发出请求时导入此文件

let base = 'https://jxust.xpixy.com'// 待更改为ip地址
// let base = 'localhost:8080'// 待更改为ip地址
// url大小写问题 协议和域名部分是不区分大小写的，但是路径部分则根据服务器平台而定。Windows 和 Mac OS X 系统是不区分大小写的，而采用UNIX和Linux系的服务器系统是区分大小写的，请大家要注意。
export const ApiDownload = params => { return axios.get(`${base}/wenku/get?url=${params}`).then(res => res.data) }
