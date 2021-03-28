<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="home-nav">
      <!-- <img slot="nav_left" src="~assets/img/tabbar/icon_nav_cell.png" alt=""> -->
      <span slot="nav_center">购物街</span>
      <!-- <img slot="nav_right" src="~assets/img/tabbar/sear_bg.png" alt=""> -->
    </nav-bar>
    
    <!-- scroll,上拉加载 
        :probe-type:动态传入是否需要实时监听 
        :pull-up-load：是否需要监听上拉加载事件  
        @scroll-position实时获取滚动位置的事件 
    -->
    <better-scroll class="scroll-content" 
                    ref="scroll" 
                    :probe-type="3" 
                    @scroll-position="contentScroll"
                    :pull-up-load="true"     
                    @pulling-up="LoadMoreList">
      <!-- 轮播图 banner -->
      <home-swiper :banners="banners"/>
      <!-- 推荐信息 -->
      <recommend-view :recommends="recommends"/>
      <!-- 本周流行 -->
      <feature-view/>
      <!-- TabControl -->
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" v-on:tab-click="getType"/>
      <!-- 商品list -->
      <goods-list :goods="goods[goodtype].list"/>
    </better-scroll>
 
    <!-- BackTop回到顶部 -->
    <!-- 方法1 通过子组件div元素监听到点击事件后，传递给父组件 -->
    <!-- <back-top class="back-top" v-on:back-top-click="backTop" v-show="isback_top"></back-top> -->
    <!-- 方法2 组件不能直接监听点击的，监听组件的原生事件 @click.native=""-->
    <back-top class="back-top" @click.native="backTop" v-show="isback_top"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
import RecommendView from 'views/home/childComps/RecommendView.vue'
import FeatureView from 'views/home/childComps/FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BetterScroll from 'components/common/scroll/BetterScroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'
// 请求接口返回的接口函数
import {getHomeMultidata, getHomeGoods} from 'network/home.js'


export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      BetterScroll,
      BackTop,
    },
    data() {
      return {
        banners: [],
        recommends: [], 
        goodtype: 'pop',
        goods: {   //初始化存储商品信息  page：为当前的第几页，list为当前加载的数据列表
          'pop': {page: 0, list: []},
          'sell': {page: 0, list: []},
          'new': {page: 0, list: []}
        },
        isback_top: false,

      }
    },
    created() {  //组件创建完成后回调的生命周期函数,this为当前的组件对象
      // created()函数中一般不写详细的代码逻辑部分，详细的代码逻辑部分一般写在methods中
      // 1.请求多个数据 
      this.getHomeMultidata();

      // 2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('sell');
      this.getHomeGoods('new');
    },
    mounted() {
      //获取屏幕大小
      // let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;    
      // console.log("屏幕大小:",clientHeight);
    },
    methods: {
      /** 
       * 事件监听相关的点击 
       */
      getType(index){
        switch (index) {
          case 0:
            this.goodtype = 'pop'
            break
          case 1:
            this.goodtype = 'new'
            break
          case 2:
            this.goodtype = 'sell'
            break
        }
      },

      // 接收来自子组件BackTop的回调顶部的点击
      backTop(){
        // 调用this.scroll.scrollTo()回到顶部的方法，根据传入参数回到(x,y)坐标的位置
        // this.$refs.scroll.scroll.scrollTo(0, 0, 300);

        // 使用封装的scrollTo()
        this.$refs.scroll.scrollTo(0, 0);
      },

      // 接收来自子组件BetterScroll的实时监听位置的数据
      contentScroll(position){
        // console.log(position);

        // 判断backtop是否显示
        this.isback_top = (-position.y) > 1000;
      },

      // 接收来自子组件BetterScroll的监听： 已经上拉滚动到底部
      LoadMoreList(){
        // console.log('上拉加载更多')
        // console.log(this.goodtype, typeof this.goodtype);
        // 已滚动到底部，请求列表页接口，下一页
        this.getHomeGoods(this.goodtype);
        // 避免获取的可滚动的高度时，图片未加载完成
        this.$refs.scroll.scroll.refresh();
      },
      
      /**
       * 网络请求相关的方法
       */
      // methods是个属性，要调用方法需要再包装一层
      // 首页接口：getHomeMultidata()
      getHomeMultidata(){
        getHomeMultidata().then(res => {  //请求成功回调  
          console.log(res.data);  //接口请求成功的数据
          // 由于函数执行完毕后，函数内部的定义的局部变量就会内存回收。所以需要将res存储在data中
          this.banners = res.data.banner.list;  // 这里箭头函数的this为外层created()中的this
          this.recommends = res.data.recommend.list;
        }).catch(err => {  //请求失败回调 
          console.log(err);
        });
      },

      // 列表页接口：getHomeGoods()
      getHomeGoods(type){  //type为goods类型
        // page需要动态获取，默认值page=0
        const page = this.goods[type].page + 1;  
        getHomeGoods(type, page).then(res => { 
          console.log(res.data); 
          this.titles = res.data.filter.list; 
          this.goods[type].list.push(...res.data.list);  //数组res.data.list中的数据push到this.goods[type].list中
          this.goods[type].page = page;
          // 等第一次数据请求完成后，并且将新的数据展示出来后，再次上拉加载bscroll.finishPullUp();
          this.$refs.scroll.finishPullUp();
        }).catch(err => { 
          console.log(err);
        });
      },
      
    },
    
}

</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
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
/* 设置better-scroll滚动的wrapper */
.scroll-content{
  /*方法1 */
  /* height: calc(100% - 49px); */
  /* 方法2 */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

  overflow: hidden;
  /* border: 1px solid red; */
}

/* 添加tabControl滚动到上方停留在页面TabNav下面，与TabNav一样悬停不滚动，下拉到tabControl下方后，再滚动 */
.tab-control{
  position: sticky;  /**很多浏览器（IE等）不支持这个属性，移动端都支持 原理：当滚动到指定高度时，position的值自动被浏览器改为fixed */
  top: 44px;   /* 设置滚动到距离多少的位置停留不滚动 */
  z-index: 9;
}

</style>