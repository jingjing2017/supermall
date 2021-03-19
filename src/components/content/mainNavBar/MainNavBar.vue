<template>
  <nav-bar class="home-nav">
    <!-- <img slot="nav_left" src="~assets/img/tabbar/icon_nav_cell.png" alt=""> -->
    <span slot="nav_center">购物街</span>
    <!-- <img slot="nav_right" src="~assets/img/tabbar/sear_bg.png" alt=""> -->
</nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    name: 'MainNavBar',
    components: {
      NavBar,
    }
}
</script>

<style>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    color: #fff;
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>