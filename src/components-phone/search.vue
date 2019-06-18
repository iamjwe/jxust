<template>
  <div class="search">
    <div class="bg">
      <div class="container">
        <el-row class="row-label">
          <div class="label-box">
            <h1>百度文库免费下载！</h1>
          </div>
        </el-row>
        <el-row :gutter="10" type="flex" justify="center" class="row-search">
          <el-input class="input-search"
                    placeholder="请复制粘贴百度文库完整网站"
                    v-model="url">
          </el-input>
          <div class="phone-download">
            <el-button class="phone-btn" @click="clickBtn" >代下</el-button>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '../common/js/request'
import { checkUrl } from '../common/js/validate'
export default {
  data () {
    return {
      url: ''
    }
  },
  components: {},
  methods: {
    clickBtn () {
      // 数据校验
      if (this.checkSystemStatus()) {
        let checkResult = checkUrl(this.url)
        if (checkResult.result) {
          this.$mintIndicator.open('加载中...')
          request(this.url).then(resJson => {
            this.$mintIndicator.close()
            this.responseDealWith(resJson)
          })
        } else {
          this.$mintMsgbox.alert(checkResult.message, '操作失败')
        }
      }
    },
    checkSystemStatus () {
      if (this.$system.STATUS_NOW === this.$system.STATUS.IS_MAINTAINING) {
        this.$mintMsgbox.alert('系统维护中...', '操作失败')
        return false
      } else {
        return true
      }
    },
    responseDealWith (json) {
      this.requestSuccess = true
      if (json.success) {
        window.location = json.msg
      } else {
        this.$mintMsgbox.alert(json.msg, '操作失败')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .search{
    width: 100%;
  }
  .bg {
    background: url(../assets/down_bg1.jpg) no-repeat 0px 0px;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .container{
    width: 100%;
  }
  .input-search /deep/ .el-input__inner{
    height: 28px;
  }
  .row-label {
    .label-box {
      text-align: center;
    }

    h1 {
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-weight: 400px;
      /*padding-top: 35px;*/
      font-size: 20px;
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
      position: relative;
      line-height: 1.3;
      color: red;
    }
    .input-search{
      padding-top: 50px;
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
  .phone-download{
    position: absolute;
    right: 40px;
    top: 50px;
    width: 30px;
    height: 30px;
  }
  .phone-btn{
    border-color: #5daf34;
    background-color: #5daf34;
    color: white;
    height: 28px;
    padding: 2px 20px;
  }
</style>
