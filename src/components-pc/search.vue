<template>
  <div class="bg">
    <div class="container">
      <el-row class="row-label">
        <div class="label-box">
          <h1>百度文库免费下载！</h1>
        </div>
      </el-row>
      <el-row class="row-desc">
        <div class="desc-box">
          不让真理淹没在无聊繁琐的世事中！
        </div>
      </el-row>
      <el-row :gutter="10" type="flex" justify="center" class="row-search">
        <el-col :span="14">
          <el-input class="input-search"
                    placeholder="复制百度文库网页地址，例：https://wenku.baidu.com/view/5b9a6625f242336c1fb95e0d.html"
                    v-model="url">
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="success" @click="clickBtn">一键代下</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="row-tip">
        <div class="tip-box">
          <p>请大家珍惜下载次数，本网站的自动代下仅用于教学及学习研究之用。</p>
        </div>
      </el-row>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="closeDialog"
        center>
        <span>{{dialogMessage}}</span>
        <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false"  v-show="!requestSuccess">确 定</el-button>
    <el-button type="primary" @click="skipToDownload"  v-show="requestSuccess">跳转并下载</el-button>
  </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { request } from '../common/js/request'
import { checkUrl } from '../common/js/validate'
export default {
  // props: {
  //   isMaintainIng: Boolean
  // },
  data () {
    return {
      url: '',
      dialogVisible: false,
      dialogMessage: '',
      requestSuccess: false, // 控制两个弹窗按钮的选择显示
      downloadUrl: '',
      loading: false
    }
  },
  components: {},
  methods: {
    clickBtn () {
      // 第一步：检查系统状态
      if (this.checkSystemStatus()) {
        // 第二步：校验url
        let checkResult = checkUrl(this.url)
        if (checkResult.result) {
          // 第三步：发送请求
          request(this.url).then(resJson => {
            // 第四步：根据响应 做出处理
            this.responseDealWith(resJson)
          })
        } else {
          // url校验失败 弹窗显示失败原因
          this.openDialog(checkResult.message)
        }
      }
    },
    responseDealWith (json) {
      this.requestSuccess = true
      if (json.success) {
        this.openDialog(`您的下载地址为： ${json.msg}`)
        this.downloadUrl = json.msg
      } else {
        this.requestSuccess = false
        this.openDialog(` ${json.msg}`)
      }
    },
    skipToDownload () {
      if (!this.$myUtil.isEmpty(this.downloadUrl)) {
        window.open(this.downloadUrl)
      } else {
        this.requestSuccess = false
        this.openDialog('下载错误，地址为空，欢迎反馈您的问题')
      }
    },
    checkSystemStatus () {
      if (this.$system.STATUS_NOW === this.$system.STATUS.IS_MAINTAINING) {
        this.openDialog('系统维护中...')
        return false
      } else {
        return true
      }
    },
    openDialog (msg) {
      this.dialogVisible = true
      this.dialogMessage = msg
    },
    closeDialog () {
      this.dialogVisible = false
      this.dialogMessage = ''
    }
  }
}
</script>

<style lang='scss' scoped>
  .bg {
    background: url(../assets/down_bg1.jpg) no-repeat 0px -165px;
    background-size: cover;
    min-height: 400px;
    width: 100%;
    padding-top: 110px;
  }

  .row-label {
    .label-box {
      text-align: center;
    }

    h1 {
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-weight: 400px;
      font-size: 50px;
      margin: 0;
    }
  }

  .row-desc {
    .desc-box {
      text-align: center;
      margin: 2em 0 4em;
      font-size: 22px;
      color: #fff;
      margin-bottom: 66px;
    }
  }

  .row-search {
    .input-search /deep/ input::-webkit-input-placeholder {
      line-height: 1.3;
      color: red;
    }
  }

  .row-tip {
    .tip-box {
      text-align: center;
      margin: 2em 0 4em;
      font-size: 18px;
      color: #fff;
      margin-bottom: 66px;
    }
  }
</style>
