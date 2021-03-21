<template>
  <div class="nav-bar">
      <!-- 注： 不能直接给插槽添加样式布局，应外层套个div布局 -->
      <div class="nav-bar-left">
        <slot name="nav_left"></slot>
      </div>
      <div class="nav-bar-center">
        <slot name="nav_center"></slot>
      </div>
      <div class="nav-bar-right">
        <slot name="nav_right"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar{  /**导航栏一般高度是44px */
    max-width:750px;
    margin: 0 auto;
    height: 44px;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    font-weight: 700;
    font-size: 15px;
  }
  .nav-bar-left,.nav-bar-right{
      width: 45px;
  }
  /* .nav-bar-left{
      margin-left: 3%;
  }
  .nav-bar-right{
      margin-right: 3%;
  } */
  .nav-bar img{
      width: 22px;
  }
</style>