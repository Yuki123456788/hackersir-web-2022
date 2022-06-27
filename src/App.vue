<template lang="pug">
  div#app.d-flex.flex-column
    router-view.pb-3

    //- Footer
    footer.footer.bottom-0.text-center.align-items-center(style="background-color:darkgray;")
      div.container
        div.list-group.list-group-horizontal.justify-content-center
          //- facebook
          a.link-secondary.my-3.mx-md-3.mx-2(target="_blank" href="https://www.facebook.com/HackerSir.tw/")
            svg(xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16")
              path(d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z")
          //- instagram
          a.link-secondary.my-3.mx-md-3.mx-2(target="_blank" href="https://instagram.com/fcu_hackersir")
            svg(xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16")
              path(d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z")
          //- email
          a.link-secondary.my-3.mx-md-3.mx-2(target="_blank" href="mailto:contact@hackersir.org")
            svg(xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16")
              path(d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z")
          //- github
          a.link-secondary.my-3.mx-md-3.mx-2(target="_blank" href="https://github.com/HackerSir")
            svg(xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16")
              path(d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z")
          //- gitlab
          a.link-secondary.my-3.mx-md-3.mx-2(target="_blank" href="https://gitlab.com/HackerSir")
            svg(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1792 1664")
              path(fill="currentColor" d="m104 642l792 1015l-868-630q-18-13-25-34.5T3 950l101-308zm462 0h660L896 1657zM368 30l198 612H104L302 30q8-23 33-23t33 23zm1320 612l101 308q7 21 0 42.5t-25 34.5l-868 630l792-1015zm0 0h-462l198-612q8-23 33-23t33 23z")
          //- linktree
          a.link-secondary.my-3.mx-md-3.mx-2(target="_blank" href="https://linktr.ee/fcuhackersir")
            svg(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24")
              path(fill="currentColor" d="M7.953 15.066c-.08.163-.08.324-.08.486c.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585l-3.885 7.042zm15.945 0l-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586l3.885 7.04c.081.164.081.326.081.487c-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377Z")
        div.text-center.my-3
          small.text-muted Copyright © 2021-2022 Hackers' Club, Feng Chia University. All rights reserved.
    </footer>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);

#app {
  font-family: 'Noto Sans TC', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  & > div {
    min-height: calc(100vh - 60px - 60px);
  }
}

.page-title, .page-subtitle {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

.page-menu a {
  text-decoration:none;
  border-bottom: 2px solid white;
  color: white;
  transition: all .3s cubic-bezier(.33,.66,.66,1);
  transition-property: background, color;
  font-size: 1.5rem;
}

.page-menu a:hover {
  color: black;
  background: white;
}

.footer {
  background-color: #e3e3e3;
  padding-top: 15px;
  padding-bottom: 15px;
}

.card {
  background: rgba(255, 255, 255, .75);
  margin-bottom: 1rem;
}

nav.navbar {
  z-index: 99;
}
</style>
