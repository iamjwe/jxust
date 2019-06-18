<template>
    <div v-bind:class="{ home: phone }" ref="home">
      <component v-bind:is="currentSearch"  v-bind:class="{ search: phone }"></component>
      <component v-bind:is="currentStep"></component>
      <component v-bind:is="currentIssue"></component>
      <component v-bind:is="currentFooter"></component>
  </div>
</template>

<script>
import search_pc from '@/components-pc/search.vue'
import step_pc from '@/components-pc/step.vue'
import issue_pc from '@/components-pc/issue.vue'
// 此处用footer，会导致标签名无效
import footer_pc from '@/components-pc/footer.vue'
import search_phone from '@/components-phone/search.vue'
import step_phone from '@/components-phone/step.vue'
import issue_phone from '@/components-phone/issue.vue'
// 此处用footer，会导致标签名无效
import footer_phone from '@/components-phone/footer.vue'
export default {
  name: 'home',
  data () {
    return {
      phone: false,
      currentSearch: search_pc,
      currentStep: step_pc,
      currentIssue: issue_pc,
      currentFooter: footer_pc
    }
  },
  components: {
    search_pc,
    step_pc,
    issue_pc,
    footer_pc,
    search_phone,
    step_phone,
    issue_phone,
    footer_phone
  },
  mounted () {
    let w = document.documentElement.offsetWidth || document.body.offsetWidth
    if (w <= 480) {
      this.phone = true
      this.currentSearch = search_phone
      this.currentStep = step_phone
      this.currentIssue = issue_phone
      this.currentFooter = footer_phone
    }
  }
}
</script>
<style lang='scss' scoped>
  .home{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .search{
    flex: 2 1 100px;
  }
</style>
