<template lang="pug">
  div
    //- Heading
    div.my-4.mx-md-3.mx-1.py-5.py-md-6.border.border-2.border-dark.rounded
      div.row.mx-2.align-items-center
        div.col-md-9.order-md-1.order-2.text-md-start.text-center
          h1.mb-5 Successive Cadre
          p.small.text-muted 羅馬不是一天造成的
          p.small.text-muted 現在的黑客社，也是由許許多多的學長姐們慢慢打造起來的。感謝有他們！
        div.col-md-3.order-md-2.order-1
          img.img-fluid(src="static/image/Cadres.png" alt="...")
    //- Content
    div.container.mb-5
      //- dropdown
      div.dropdown.d-flex.justify-content-start
        button.btn.btn-secondary.dropdown-toggle.mx-md-2(type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false") Select
        ul.dropdown-menu(aria-labelledby="dropdownMenuButton1")
          li(v-for="(nthYearCadres, nthYear) in cadres")
            router-link.dropdown-item(:to="{name:'Cadre', params:{year:nthYear, cadre: 1}}") 第{{ nthYear }}屆

      div.container.text-center.mb-4
        span.h2.p-2.border.border-4.rounded-3 第{{ selectedYear }}屆
      //- people
      div.d-flex.flex-column.flex-md-row(v-if="selectedYear")
        div.card
          div.card-body.d-flex.flex-wrap.justify-content-center(style="overflow-x: auto")
            div.d-flex.flex-column.align-items-center(v-for="(cadre, nthCadre) in cadres[selectedYear]" data-bs-toggle="modal" data-bs-target="#detailModal")
              router-link.avatar.m-1(:to="{name:'Cadre', params:{year: selectedYear, cadre: nthCadre}}" :style="{ 'background-image': 'url(' + cadre.avatar + ')' }")
              div.border.rounded.px-1.mx-1
                span.mb-0.small {{ cadre.job }}
                span /
                span.mb-0.small {{ cadre.nickname || cadre.name }}
        //- Modal
        div#detailModal.modal.fade(tabindex="-1" aria-labelledby="DetailModalLabel" aria-hidden="true" v-if="selectedCadreData")
          div.modal-dialog.modal-dialog-centered.modal-dialog-scrollable
            div.modal-content
              div.modal-header.row.mx-2.d-flex.align-items-center
                div.col-md-3.col-5.order-1
                  img.img-fluid.rounded-circle(:src="selectedCadreData.avatar" alt="" style="object-fit: cover;")
                div.col-md-9.col-7.order-2.text-start
                  div.row.d-flex.align-items-center
                    div.col-md-8.row.d-flex.align-items-end
                      h2.mb-0.col-md-12.col-7.px-md-1.px-0 {{ selectedCadreData.name }}
                      p.small.col-md-12.col-5.text-muted.mb-0.px-md-1.px-0 {{ selectedCadreData.nickname }}
                    div.col-md-4.px-md-1.px-0.mt-md-0.mt-1
                      small.px-1.border.rounded-3.bg-light.bg-gradient {{ selectedCadreData.job }}
              div.modal-body
                div.d-flex.align-items-md-center.flex-md-row.flex-column.align-items-center
                  div.text-start
                    h4 {{ selectedCadreData.department }}
                    p 簡介：{{ selectedCadreData.description }}
              div.modal-footer
                button.btn.btn-secondary(type="button" data-bs-dismiss="modal") Close
</template>

<style lang="stylus" scoped>
.avatar {
  margin: 2px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: black 1px solid;
  background: no-repeat center center / contain;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  text-decoration: none;
  color: black;
  & > .avatar-title, & > .avatar-nickname {
    background: rgba(255, 255, 255, 0.7);
  }

  &:hover > .avatar-title, &:hover > .avatar-nickname {
    font-size: 1.2rem;
  }
}
.nav-wizard > li {
  float: left;
}
.nav-wizard > li > a {
  position: relative;
  background-color: #eeeeee;
  display: block;
  padding: 10px 15px;
}
.nav-wizard > li > a .badge {
  margin-left: 3px;
  color: #eeeeee;
  background-color: #428bca;
}
.nav-wizard > li:not(:first-child) > a {
  padding-left: 34px;
}
.nav-wizard > li:not(:first-child) > a:before {
  width: 0px;
  height: 0px;
  border-top: 20px inset transparent;
  border-bottom: 20px inset transparent;
  border-left: 20px solid #ffffff;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
}
.nav-wizard > li:not(:last-child) > a {
  margin-right: 6px;
}
.nav-wizard > li:not(:last-child) > a:after {
  width: 0px;
  height: 0px;
  border-top: 20px inset transparent;
  border-bottom: 20px inset transparent;
  border-left: 20px solid #eeeeee;
  position: absolute;
  content: "";
  top: 0;
  right: -20px;
  z-index: 2;
}
.nav-wizard > li:first-child > a {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.nav-wizard > li:last-child > a {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.nav-wizard > li.done:hover > a,
.nav-wizard > li:hover > a {
  background-color: #d5d5d5;
}
.nav-wizard > li.done:hover > a:before,
.nav-wizard > li:hover > a:before {
  border-right-color: #d5d5d5;
}
.nav-wizard > li.done:hover > a:after,
.nav-wizard > li:hover > a:after {
  border-left-color: #d5d5d5;
}
.nav-wizard > li.done > a {
  background-color: #e2e2e2;
}
.nav-wizard > li.done > a:before {
  border-right-color: #e2e2e2;
}
.nav-wizard > li.done > a:after {
  border-left-color: #e2e2e2;
}
.nav-wizard > li.active > a,
.nav-wizard > li.active > a:hover,
.nav-wizard > li.active > a:focus {
  color: #ffffff;
  background-color: #428bca;
}
.nav-wizard > li.active > a:after {
  border-left-color: #428bca;
}
.nav-wizard > li.active > a .badge {
  color: #428bca;
  background-color: #ffffff;
}
.nav-wizard > li.disabled > a {
  color: #777777;
}
.nav-wizard > li.disabled > a:hover,
.nav-wizard > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  background-color: #eeeeee;
  cursor: default;
}
.nav-wizard > li.disabled > a:before {
  border-right-color: #eeeeee;
}
.nav-wizard > li.disabled > a:after {
  border-left-color: #eeeeee;
}
.nav-wizard.nav-justified > li {
  float: none;
}
.nav-wizard.nav-justified > li > a {
  padding: 10px 15px;
}
@media (max-width: 768px) {
  .nav-wizard.nav-justified > li > a {
    border-radius: 4px;
    margin-right: 0;
  }
  .nav-wizard.nav-justified > li > a:before,
  .nav-wizard.nav-justified > li > a:after {
    border: none !important;
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      selectedYear: null,
      selectedCadre: null,
      selectedCadreData: null,
      cadres: {}
    }
  },
  mounted () {
    this.$http.get('static/data/cadres.json').then(response => {
      this.cadres = response.data
      this.selectedYearUpdated()
      this.selectedCadreUpdated()
    })
  },
  watch: {
    '$route.params.year': function (year) {
      this.selectedYearUpdated()
    },
    '$route.params.cadre': function (cadre) {
      this.selectedCadreUpdated()
    }
  },
  methods: {
    selectedYearUpdated: function () {
      this.selectedYear = this.$route.params.year
      this.selectedCadreDataUpdated()
    },
    selectedCadreUpdated: function () {
      this.selectedCadre = this.$route.params.cadre
      this.selectedCadreDataUpdated()
    },
    selectedCadreDataUpdated: function () {
      if (this.selectedYear != null && this.selectedCadre != null) {
        this.selectedCadreData = this.cadres[this.selectedYear][this.selectedCadre]
      } else {
        this.selectedCadreData = null
      }
    }
  }
}
</script>
