<template>
  <tab-bar>
      <!-- TabBar组件中的内容是TabBar中插槽中要插入的内容 -->
      <tab-bar-item path="/home" activeColor="#ff5777"> <!-- activeColor="#ff5777"不传颜色，为默认的颜色 -->
        <!-- TabBarItem组件中的内容是其插槽中要插入的内容 -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">  <!-- 运用起的别名 -->
        <img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
// 运用起的别名
import TabBar from 'components/common/tabbar/TabBar.vue' ;
import TabBarItem from 'components/common/tabbar/TabBarItem.vue' ;
export default {
    name: 'MainTabBar',
    components: {
        TabBar,   
        TabBarItem
    }
}
</script>

<style>

</style>