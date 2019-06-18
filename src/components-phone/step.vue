<template>
  <div class="step">
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="8">
          <p class="icon"><i class="fa fa-anchor"></i></p>
          <p class="title">第一步</p>
          <p class="desc">复制需要下载的百度文库网址</p>
        </el-col>
        <el-col :span="8">
          <p class="icon"><i class="fa fa-cloud-download"></i></p>
          <p class="title">第二步</p>
          <p class="desc">点击下载按钮</p>
        </el-col>
        <el-col :span="8">
          <p class="icon"><i class="fa fa-clock-o"></i></p>
          <p class="title">第三步</p>
          <p class="desc">等待5秒钟，完成下载</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang='scss' scoped>
  .step{
    width: 100%;
  }
  .container{
    padding: 0 15px;
  }
  div {
    text-align: center;
  }
  .icon{
    margin: 10px 0 0 0;
  }
  .icon i {
    font-size: 25px;
  }

  .title {
    color: #292C34;
    margin: 1em 0 0;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    margin-top: 0;
  }

  .desc {
    color: #97999B;
    margin: .5em 0;
    font-size: 11px;
    line-height: 16px;
  }
</style>
