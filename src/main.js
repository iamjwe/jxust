import Vue from 'vue'
import App from './App.vue'
// import Mock from './mock'
import { Button, Input, Dialog, Row, Col } from 'element-ui'
import { MessageBox, Field, Indicator } from 'mint-ui'
import myUtil from './common/js/util'
import system from './common/js/System'
Vue.component(Field.name, Field)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Dialog.name, Dialog)// 样式文件需要单独引入。
Vue.prototype.$mintMsgbox = MessageBox
Vue.prototype.$mintIndicator = Indicator
Vue.prototype.$myUtil = myUtil
Vue.prototype.$system = system
// Mock.bootstrap()// 开启请求拦截，上线时删除这两句
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
