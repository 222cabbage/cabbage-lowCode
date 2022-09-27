<template>
  <div id="app">
    <HeaderLayout></HeaderLayout>
    <div class="contentBox">
      <LeftLayout></LeftLayout>
      <CenterLayout></CenterLayout>
      <RightLayout></RightLayout>
    </div>
  </div>
</template>
<script>
  import HeaderLayout from './layout/HeaderLayout.vue'
  import LeftLayout from './layout/LeftLayout.vue'
  import CenterLayout from './layout/CenterLayout.vue'
  import RightLayout from './layout/RightLayout.vue'
  export default {
    components:{
      HeaderLayout,
      LeftLayout,
      CenterLayout,
      RightLayout
    }
  }
</script>
<style lang="less">
* {
  margin: 0%;
  padding: 0;
}
.contentBox {
  display: flex;
}
</style>
