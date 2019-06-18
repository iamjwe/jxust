<template>
  <div class="issue">
    <div class="container">
      <blockquote class="issue-title">常见问题</blockquote>
      <div class="issue-list">
        <el-row :gutter="20">
          <el-col :span="24">
            <p class="question">1、怎么免费下载百度文库文档？</p>
            <p> 答：使用百度文库一键下载功能，免下载券下载文档。</p>
            <p class="question">2、提示已达下载上限，下载不了怎么办？</p>
            <p>答：每天限制下载三次，您可以明天再来。</p>
            <p class="question">3、没有财富值在哪里可以下载？</p>
            <p> 答：使用本站自动代下载功能，免财富值下载文档。</p>
            <p class="question">4、如何下载百度文库付费文档？</p>
            <p> 答：本网站仅提供下载券文档自动代下载，付费文档无法下载，请到百度网站付费下载。</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {}
}
</script>

<style lang='scss' scoped>
  .issue{
    width: 100%;
  }
  .container{
    margin: 10px auto;
  }
  .issue-list p{
    margin: 0;
    font-size: 12px;
    color: #333;
    text-align: left;
  }
  .issue-title{
    text-align: left;
    margin: 0;
    margin-bottom:3px;
    padding:0px;
    line-height:22px;
    border-left:5px solid #009688;
    border-radius:0 2px 2px 0;
    background-color:#f2f2f2
  }
  .issue-list .question{
    color: #97999B;
  }
</style>
