<template lang="pug">
div
  //- Heading
  div.my-4.mx-md-3.mx-1.py-5.py-md-6.border.border-2.border-dark.rounded
    div.row.mx-2.align-items-center
      div.col-md-9.order-md-1.order-2.text-md-start.text-center
        h1.mb-5 Cooperations
        p.small.text-muted 我們有許許多多的合作夥伴，他們來自世界各地、四面八方。
        p.small.text-muted 感謝有他們，和我們並肩走來 !
      div.col-md-3.order-md-2.order-1
        img.img-fluid(src="static/image/Cooperation.png" alt="...")

  //- Content
  div.container
    div.card.my-3(v-for="(partnersOfType, partnerType) in partners")
      div(v-for="partner in partnersOfType")
        div.d-flex.align-items-md-center.flex-md-row.flex-column.align-items-center
          div.flex-shrink-md-0
            img.img-cor.p-2(:src='partner.image')
          div.flex-grow-md-1.ms-md-3
            div.card-body.text-md-start.text-center
              h2.card-title {{ partner.name }}
              h2.card-title {{ partner.cht_name }}
              p.card-subtitle.mb-4.text-muted {{ partnerType }}
              p.card-text(v-for="descriptionParagraph in partner.description") {{ descriptionParagraph }}
              div.mb-5
</template>

<style scoped>
.img-cor {
  max-width: 250px;
  margin: 0.5rem;
}
</style>

<script>
export default {
  data: function () {
    return {
      partners: {}
    }
  },
  mounted () {
    this.$http.get('static/data/partners.json').then(response => {
      this.partners = response.data
    })
  }
}
</script>
