<template>
  <div class="header">
    <!--logo-->
    <logo></logo>
    <!--导航-->
    <navs></navs>
  </div>
</template>

<script>
  import logo from "../commons/logo"
  import navs from "../commons/navs"
    export default {
        name: "headers",
        components:{
          logo,
          navs
        }
    }
</script>

<style>

</style>
