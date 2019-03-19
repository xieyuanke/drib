<template>
  <div class="module-box">
    <headers></headers>
    <div class="module">
      <module-left></module-left>
      <module-right></module-right>
    </div>
  </div>
</template>

<script>
    import headers from "../components/commons/headers"
    import moduleLeft from "../components/module/moduleLeft"
    import moduleRight from "../components/module/moduleRight"
    export default {
        name: "module",
        components:{
          headers,
          moduleLeft,
          moduleRight
        }
    }
</script>

<style scoped>

</style>
