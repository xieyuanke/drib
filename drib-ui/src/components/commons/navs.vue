<template>
  <ul class="nav">
    <li><router-link to="/index">首页</router-link></li>
    <li><router-link to="/module">组件</router-link></li>
    <li><router-link to="/cases">案例</router-link></li>
    <li><router-link to="/bigData">大数据</router-link></li>
    <li><router-link to="/teams">团队</router-link></li>
    <li></li>
  </ul>
</template>

<script>
    export default {
        name: "navs"
    }
</script>

<style scoped>
  .router-link-active{
    background: #fff;
    border-radius: 4px;
    color: #000;
  }
</style>
