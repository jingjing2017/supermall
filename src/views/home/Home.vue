<template>
  <div id="home">
    <main-nav-bar/>

    <!-- 轮播图 banner -->
    <home-swiper :banners="banners"/>
    <!-- 推荐信息 -->
    <recommend-view :recommends="recommends"/>
    <!-- 本周流行 -->
    <feature-view/>

    <ul>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
      <li>恋爱</li>
    </ul>
  </div>
</template>

<script>
import MainNavBar from 'components/content/mainNavBar/MainNavBar.vue'
import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
import RecommendView from 'views/home/childComps/RecommendView.vue'
import FeatureView from 'views/home/childComps/FeatureView.vue'

import {getHomeMultidata} from 'network/home.js'


export default {
    name: 'Home',
    components: {
      MainNavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    created() {  //组件创建完成后回调的生命周期函数,this为当前的组件对象
      // 1.请求多个数据  getHomeMultidata()获取接口数据
      getHomeMultidata().then(res => {  //请求成功回调  
        console.log(res);  //接口请求成功的数据

        // 由于函数执行完毕后，函数内部的定义的局部变量就会内存回收。所以需要将res存储在data中
        this.banners = res.data.banner.list;  // 这里箭头函数的this为外层created()中的this
        this.recommends = res.data.recommend.list;
      }).catch(err => {  //请求失败回调 
        console.log(err);
      })
    }
}

</script>

<style>

</style>