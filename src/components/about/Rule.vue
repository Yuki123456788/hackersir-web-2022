<template lang="pug">
div
  //- Heading
  div.my-4.mx-md-3.mx-1.py-5.py-md-6.border.border-2.border-dark.rounded
    div.row.mx-2.align-items-center
      div.col-md-9.order-md-1.order-2.text-md-start.text-center
        h1.mb-5 Rule
        p 黑客社社團規章
        p(style={'font-size':'20px'}) 以下為當前最新版本：{{ ruleVersion | substring(0,8) }}，詳細變更紀錄請至 #[a(href='https://github.com/HackerSir/Articles-of-association' target='_blank') 這裡] 查詢
      div.col-md-3.order-md-2.order-1
        img(src="static/image/Law.png" class="img-fluid" alt="")
  //- Content
  div.container.text-start
    vue-markdown(:source="rule")
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  data: function () {
    return {
      // 社規 commit 編號
      ruleVersion: '',
      rule: '<i class="fas fa-spinner fa-spin"></i> 載入中...'
    }
  },
  components: {
    VueMarkdown
  },
  mounted () {
    // 由 GitHub 取得最新版本號
    this.$http.get('https://api.github.com/repos/HackerSir/Articles-of-association/commits/master')
      .then(response => {
        this.ruleVersion = response.data.sha
        // 利用 RawGit https://rawgit.com/ 作為 CDN
        let ruleUrl = 'https://cdn.rawgit.com/HackerSir/Articles-of-association/' + this.ruleVersion + '/rules.md'
        // 讀取 rules.md
        this.$http.get(ruleUrl)
          .then(response => {
            this.rule = response.data
          })
      })
  }
}
</script>
