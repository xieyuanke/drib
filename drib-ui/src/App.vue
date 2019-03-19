<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import index from "./pages/index"
export default {
  name: 'App',
  components:{
    index
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
