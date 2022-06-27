<template lang="pug">
  div
    //- Heading
    div.my-4.mx-md-3.mx-1.py-5.py-md-6.border.border-2.border-dark.rounded
      div.row.mx-2.align-items-center
        div.col-md-9.order-md-1.order-2.text-md-start.text-center
          h1.mb-5 History
          p.small.text-muted 羅馬不是一天造成的
          p.small.text-muted 現在的黑客社，也是由許許多多的學長姐們慢慢打造起來的。感謝有他們！
        div.col-md-3.order-md-2.order-1
          img.img-fluid(src="static/image/History.png" alt="...")
    //- Content(Not Yet)
    div.container
      div.d-flex.flex-column.align-items-center(v-for="event in timelineEvents")
        div.col-md-6.col-12.border.rounded-3.p-4.my-2
          p.text-start.text-muted(v-if= "event.date")
            small {{ event.date }}
          h3.bg-secondary.text-white.rounded-3.w-50.p-1.mx-auto(v-if ="event.title") {{ event.title }}
          p.text-center(v-if ="event.description") {{ event.description }}
          div.ratio.ratio-1x1.w-25.mx-auto.d-block.mb-2(v-if= "event.image")
            img.img-fluid.rounded-circle(:src="event.image" alt="" style="object-fit: cover;")
          div.d-flex.justify-content-end
            a.p-2.m-1.btn.btn-outline-warning.rounded-circle(v-if= "event.link" :href="event.link" target="_blank")
              svg.m-1(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20")
                g(fill="currentColor")
                  path(fill-rule="evenodd" d="M10 16.5c4.897 0 9-2.308 9-5.5s-4.103-5.5-9-5.5S1 7.808 1 11s4.103 5.5 9 5.5Zm0-9c3.94 0 7 1.722 7 3.5s-3.06 3.5-7 3.5s-7-1.722-7-3.5s3.06-3.5 7-3.5Z" clip-rule="evenodd")
                  path(d="M9 3.5a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0v-3Zm4.02.304a1 1 0 0 1 1.96.392l-.5 2.5a1 1 0 1 1-1.96-.392l.5-2.5Zm-6.04 0a1 1 0 0 0-1.96.392l.5 2.5a1 1 0 0 0 1.96-.392l-.5-2.5ZM2.858 4.986a1 1 0 1 0-1.715 1.029l1.5 2.5a1 1 0 1 0 1.715-1.03l-1.5-2.5Zm14.284 0a1 1 0 0 1 1.716 1.029l-1.5 2.5a1 1 0 1 1-1.716-1.03l1.5-2.5Z")
                  path(fill-rule="evenodd" d="M10 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Zm0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" clip-rule="evenodd")
        div.row.my-2
          svg(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16")
            g(transform="rotate(180 8 8)")
              path(fill="currentColor" d="M4.646 4.854a.5.5 0 0 0 .708 0L7.5 2.707V9.5a.5.5 0 0 0 1 0V2.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708ZM8 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z")
      div.d-flex.flex-column.align-items-center
        div.col-md-6.col-12.border.rounded-3.p-4.my-2
          p.text-start.text-muted.m-0
            small Now
          h3.bg-secondary.text-white.rounded-3.w-50.mt-1.mx-auto Now
          p.text-center Lorem
          div.ratio.ratio-1x1.w-25.mx-auto.d-block.mb-2
            img.img-fluid.rounded-circle(src="" alt="" style="object-fit: cover;")
</template>

<script>
// var moment = require('moment')
export default {
  data: function () {
    return {
      timelineEvents: {}
    }
  },
  mounted () {
    this.$http.get('static/data/timeline.json').then(response => {
      this.timelineEvents = response.data
    })
  }
}
</script>
