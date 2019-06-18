<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="8">
        <p class="icon"><i class="fa fa-anchor fa-3x"></i></p>
        <p class="title">第一步</p>
        <p class="desc">Copy links to download<br/>
          复制需要下载的百度文库网址</p>
      </el-col>
      <el-col :span="8">
        <p class="icon"><i class="fa fa-cloud-download fa-3x"></i></p>
        <p class="title">第二步</p>
        <p class="desc">Click the download button<br/>
          点击下载按钮</p>
      </el-col>
      <el-col :span="8">
        <p class="icon"><i class="fa fa-clock-o fa-3x"></i></p>
        <p class="title">第三步</p>
        <p class="desc">Wait 5 seconds to complete download<br/>
          等待5秒钟，完成下载</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang='scss' scoped>
  .container{
    margin-top: 50px;
    padding: 0 15px;
  }
  div {
    text-align: center;
  }

  .icon i {
    font-size: 40px;
  }

  .title {
    color: #292C34;
    margin: 1em 0 0;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }

  .desc {
    color: #97999B;
    margin: .5em 0;
    font-size: 14px;
    line-height: 25px;
  }
</style>
