<template lang="pug">
  extends layout/BaseLayout.pug
  block content
    //- Heading
    div#Hi.container.mb-3.my-md-0.py-md-6.pt-md-3.py-5
      div.row.align-items-center
        div.col-lg-5.col-md-6.order-md-1.order-2.text-md-start.text-center
          h1 Hi
          h1 This is HackerSir.
          p.md-lg-5
            small.text-muted Feng Chia University
          a.btn.btn-warning.col-md-5(href="#Intro" class="" data-scroll style="border-radius: 1.5vw;") Who are we?
        div.col-lg-7.col-md-6.order-md-2.order-1.mb-md-0.mb-grid-gutter.mb-5
          img.img-fluid.rounded-start(src="static/image/HackerSir_Circle.png" alt="...")
    //- Intro
    div#Intro
      section.bg-faded-primary.position-relative.py-md-7.my-5.pad-y(style="background-color: #D4F1F4;")
        div.container.my-2.my-md-0
          div.row.align-items-center
            div.col-md-5.mb-md-0.mb-5.pb-md-0.pb-3
              img.d-block.mx-md-0.mx-auto.img-fluid.rounded-start(src="static/image/Intro.png" alt="Illustration" style="max-height:600px")
            div.col-lg-6.offset-lg-1.col-md-7.text-md-start.text-center
              div.mx-md-0.mx-auto(style="max-width: 500px;")
                h2.mb-md-5.mb-4 About HackerSir
                //- One
                div.d-md-flex.align-items-start.d-block.mb-4.pb-2
                  svg.me-md-4.mb-md-0.mb-4(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="36" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48")
                    g(fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4")
                      path(d="m38 21l5 9l-5 1v6h-3l-6-1l-1 7H13l-2-10.381C7.92 29.703 6 25.576 6 21c0-8.837 7.163-16 16-16s16 7.163 16 16Z")
                      path(d="M17 19a5 5 0 1 1 5 5v3m0 6v1")
                  div.ps-md-2
                    h3.h5.mb-2 推廣資安概念
                    p.mb-0.fs-sm.text-muted 我們每週都有社課，也會不定時舉辦資安相關的講座
                //- Two
                div.d-md-flex.align-items-start.d-block.mb-4.pb-2
                  svg.me-md-4.mb-md-0.mb-4(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="36" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48")
                    g(fill="none")
                      path(d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14")
                      path(stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14m2.44 3.13L22 34")
                  div.ps-md-2
                    h3.h5.mb-2 加強資安技術
                    p.mb-0.fs-sm.text-muted 我們每週的社課都會實做，也會不定期舉辦工作坊
                //- Three
                div.d-md-flex.align-items-start.d-block.mb-4.pb-2
                  svg.me-md-4.mb-md-0.mb-4(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48")
                    g(fill="none" stroke="#000" stroke-width="4")
                      path(stroke-linecap="round" stroke-linejoin="round" d="M10 10C10.5 13 11 14.5 11.5 18C11.9 20.8 12 25.1667 12 27C9.83333 28 5 30 5 34C5 38 10 43 24 43C38 43 43 38 43 34C43 30 36 27 36 27C36 27 36 21.5 36.5 18C37 14.5 37.5 13 38 10")
                      path(stroke-linecap="round" stroke-linejoin="round" d="M36 27C36 31 35 35 23.5 35")
                      ellipse(cx="24" cy="10" rx="14" ry="5")
                  div.ps-md-2
                    h3.h5.mb-2 提倡黑客精神
                    p.mb-0.fs-sm.text-muted 提倡資源共享、開放及分權，並樂於改善、加強我們現有的軟硬體等
    //- Goal
    div#Goal(style="padding-top: 5rem")
      div.container.text-center.py-5.my-md-5.rounded(style="background-color: antiquewhite;")
          div.container.mb-5
            h4.text-center 兩大目標
            div.card-body
              div.row
                div.col
                  div.container.pb-2
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                  h4 資訊安全
                div.col
                  div.container.pb-2
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="#000" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M10 10C10.5 13 11 14.5 11.5 18C11.9 20.8 12 25.1667 12 27C9.83333 28 5 30 5 34C5 38 10 43 24 43C38 43 43 38 43 34C43 30 36 27 36 27C36 27 36 21.5 36.5 18C37 14.5 37.5 13 38 10"/><path stroke-linecap="round" stroke-linejoin="round" d="M36 27C36 31 35 35 23.5 35"/><ellipse cx="24" cy="10" rx="14" ry="5"/></g></svg>
                  h4 黑客精神
          div.container.text-center.py-5.mb-3
            div.container
              h4.text-center 四大支線
              div.card-body
                div.row
                  div.col-md.col-sm-12.mx-md-2
                    div.row
                      div.col-md.col-sm-12.mx-md-2.my-2
                        div.container.pb-2
                          svg(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48")
                            g(fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4")
                              path(d="m38 21l5 9l-5 1v6h-3l-6-1l-1 7H13l-2-10.381C7.92 29.703 6 25.576 6 21c0-8.837 7.163-16 16-16s16 7.163 16 16Z")
                              path(d="M17 19a5 5 0 1 1 5 5v3m0 6v1")
                        h4 推廣資安概念
                      div.col-md.col-sm-12.mx-md-2.my-2
                        div.container.pb-2
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="black" d="M5.719 14.75a.997.997 0 0 1-.664-.252L-.005 10l5.341-4.748a1 1 0 0 1 1.328 1.495L3.005 10l3.378 3.002a1 1 0 0 1-.664 1.748zm8.945-.002L20.005 10l-5.06-4.498a.999.999 0 1 0-1.328 1.495L16.995 10l-3.659 3.252a1 1 0 0 0 1.328 1.496zm-4.678 1.417l2-12a1 1 0 1 0-1.972-.329l-2 12a1 1 0 1 0 1.972.329z"/></svg>
                        h4 程式設計普及化
                  div.col-md.col-sm-12.mx-md-2
                    div.row
                      div.col-md.col-sm-12.mx-md-2.my-2
                        div.container.pb-2
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="M12 2c5.523 0 10 4.477 10 10c0 4.4-2.841 8.136-6.789 9.473l-.226.074l-2.904-7.55A2.016 2.016 0 0 0 14 12a2 2 0 1 0-2.083 1.998l-2.903 7.549l-.225-.074A10.001 10.001 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-4.099 14.872l1.48-3.849A3.999 3.999 0 0 1 12 8a3.999 3.999 0 0 1 2.62 7.023c.565 1.474 1.059 2.757 1.479 3.85A8 8 0 0 0 12 4z"/></svg>
                        h4 提倡開放原始碼
                      div.col-md.col-sm-12.mx-md-2.my-2
                        div.container.pb-2
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M9 7h6v2h-4v2h4v2h-4v2h4v2H9V7M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5m2 0v14h14V5H5Z"/></svg>
                        h4 建立安全的E化校園
    //- What will we do
    div#Activities.container.pad-y.mb-4.text-center
        div.container.pb-4
          h4 HackerSir 會做什麼？
        div.container
          div.row
            div.col-md.col-sm-12.mx-md-2.my-2.py-3.border.rounded.shadow-sm
              div.container
                h4 每週社課
                p.text-muted 預計每週二、四晚上19:00～21:00會有社課
            div.col-md.col-sm-12.mx-md-2.my-2.py-3.border.rounded.shadow-sm
              div.container
                h4 講座＆工作坊
                p.text-muted 不定期舉行
          div.row
            div.col-md.col-sm-12.mx-md-2.my-2.py-3.border.rounded.shadow-sm
              div.container
                h4 比賽
                p.text-muted 金盾獎、...
            router-link.col-md.col-sm-12.mx-md-2.my-2.py-3.py-3.border.rounded.shadow-sm.btn.btn-outline-primary(:to="{name:'Activity'}")
              div.container
                h4 More
                p 看最近活動
    //- Join Us
    div#JoinUs.container.mb-5.my-md-0.py-5.py-md-6.w-75
        div.row.align-items-center
          div.col-lg-8.col-md-7.order-md-1.order-2.text-md-start.text-center
            div.row.mb-4
              h2 加入我們
            div.row.mb-3
             p 想了解更多資安知識，心動不如馬上行動 !
            a.btn.btn-warning.col-md-5(href="#" style="border-radius: 1.5vw;") Join us
          div.col-lg-4.col-md-5.order-md-2.order-1.mb-md-0.mb-grid-gutter
            img.img-fluid(src="/static/image/JoinUs.png" alt="...")
</template>

<style scoped lang="stylus">
.pad-y {
  padding-top: 7rem;
  padding-bottom: 7rem;
}

.display-1 {
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}

.display-3 {
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}

.list-group-item {
  font-size: 2rem;
}

a.link-icon {
  color: #9b0e27;

  &:hover {
    color: #c60d25;
  }
}
</style>
