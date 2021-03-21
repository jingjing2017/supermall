<template>
  <div id="tab-bar">
    <!-- 老师的 用一个插槽，组件中写入的内容就是要插入插槽的内容-->
    <slot></slot>

    <!-- 我的 -->
    <!-- <div class="tab-bar-item">
      <router-link class="btn" to="/home">
          <img class="item-img" src="../../assets/img/icon_home.png" alt="">
          首页
      </router-link>
    </div>
    <div class="tab-bar-item">
      <router-link class="btn" to="/types">
          <img class="item-img" src="../../assets/img/icon_bottom_product1.png" alt="">
          分类
      </router-link>
    </div>
    <div class="tab-bar-item">
      <router-link class="btn" to="/shopping">
          <img class="item-img" src="../../assets/img/icon_bottom_shoppingcart1.png" alt="">
          购物车
      </router-link>
    </div>
    <div class="tab-bar-item">
      <router-link class="btn" to="/user">
          <img class="item-img" src="../../assets/img/icon_bottom_mine1.png" alt="">
          我的
      </router-link>
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
/* 仅在这个局部的style中生效 */
*{
  max-width: 750px;
  margin: 0 auto;
}
/* 老师的 */
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 小阴影 */
    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
  }

</style>