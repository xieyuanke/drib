<template>
<div>
  <div class="sec-one">
    <div class="sec-two">
      <!--头部导航-->
      <headers></headers>
      <!--球球-->
      <hx-box></hx-box>
      <!--介绍-->
      <probable></probable>
      <!--下一页箭头-->
      <img src="../../static/syxg/img/arrow-down.png" alt="" class="jt">
    </div>
  </div>
  <div class="foo">
    &copy; 2018 - 2020 drib 版权所有 隐私政策 | 联系我们 QQ:76212031
  </div>
</div>
</template>

<script>
    import headers from "../components/commons/headers"
    import hxBox from "../components/index/hxBox"
    import probable from "../components/index/probable"
    export default {
        name: "index",
        components:{
          headers,
          hxBox,
          probable
        }
    }
</script>

<style scoped>
</style>
