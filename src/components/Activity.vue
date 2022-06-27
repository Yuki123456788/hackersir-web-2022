<template lang="pug">
  div
    //- Heading
    div.my-4.mx-md-3.mx-1.py-5.py-md-6.border.border-2.border-dark.rounded.d-flex.justify-content-center
      div.row.mx-2.align-items-center(style="width: 90%;")
        div.col-md-9.order-md-1.order-2.text-md-start.text-center
          h1.mb-5 Activities
          p.small.text-muted 我們有很多活動喔～
        div.col-md-3.order-md-2.order-1
          img.img-fluid(src="static/image/Activities.png" alt="...")
    //- Body
    div.container.align-middle.px-5.mb-5.text-center
      h2 傳送門
      div.row
        div.col-md.col-sm-12.mx-md-4.my-2.py-3.card.border-0.shadow.align-items-center
          div.ratio.ratio-1x1.rounded-3(style="background-color: #FFCE66;")
            img.card-img-top.rounded-circle(src="static/image/ClubLesson.png" style="object-fit: cover;" alt="")
          div.card-body
            h5.card-title.mb-3 社課
            a.btn.btn-primary(target="_blank" href="https://join.hackersir.org/course/") Go
        div.col-md.col-sm-12.mx-md-4.my-2.py-3.card.border-0.shadow.align-items-center
          div.ratio.ratio-1x1.rounded-3(style="background-color: #FFCE66;")
            img.card-img-top.rounded-circle(src="static/image/Workshop.png" style="object-fit: cover;" alt="")
          div.card-body
            h5.card-title.mb-3 講座＆工作坊
            a.btn.btn-primary(target="_blank" href="http://act.hackersir.org/") Go
        div.col-md.col-sm-12.mx-md-4.my-2.py-3.card.border-0.shadow.align-items-center
            div.ratio.ratio-1x1.rounded-3(style="background-color: #FFCE66;")
              img.card-img-top.rounded-circle(src="static/image/SocialMedia.png" style="object-fit: cover;" alt="")
            div.card-body
              h5.card-title.mb-3 關注粉專
              a.btn.btn-primary(target="_blank" href="https://www.facebook.com/HackerSir.tw/") Go
</template>
