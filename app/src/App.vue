<template>
  <div id="app">
<keep-alive >
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
[v-cloak]{
  display: none!important;
}
@font-face {
  font-family: 'iconfont';  /* project id 939141 */
  src: url('//at.alicdn.com/t/font_939141_udt4nz13hf.eot');
  src: url('//at.alicdn.com/t/font_939141_udt4nz13hf.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_939141_udt4nz13hf.woff') format('woff'),
  url('//at.alicdn.com/t/font_939141_udt4nz13hf.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_939141_udt4nz13hf.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
#app{
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
body{
  background: #fff;
}
p{
  margin: 0px;
}
</style>
