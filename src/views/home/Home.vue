<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <main-nav-bar/>
    
    <better-scroll class="scroll-content">
      <!-- 轮播图 banner -->
      <home-swiper :banners="banners"/>
      <!-- 推荐信息 -->
      <recommend-view :recommends="recommends"/>
      <!-- 本周流行 -->
      <feature-view/>
      <!-- TabControl -->
      <tab-control class="tab-control" :titles="titles" v-on:tab-click="getType"/>
      <!-- 商品list -->
      <goods-list :goods="goods[goodtype].list"/>
    </better-scroll>
 
      
  </div>
</template>

<script>
import MainNavBar from 'components/content/mainNavBar/MainNavBar.vue'
import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
import RecommendView from 'views/home/childComps/RecommendView.vue'
import FeatureView from 'views/home/childComps/FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BetterScroll from 'components/common/scroll/BetterScroll.vue'

// 请求接口返回的接口函数
import {getHomeMultidata, getHomeGoods} from 'network/home.js'


export default {
    name: 'Home',
    components: {
      MainNavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      BetterScroll,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: [],   //TabControl
        goodtype: 'pop',
        goods: {   //初始化存储商品信息  page：为当前的第几页，list为当前加载的数据列表
          'pop': {page: 0, list: []},
          'sell': {page: 0, list: []},
          'new': {page: 0, list: []}
        },
        
      }
    },
    created() {  //组件创建完成后回调的生命周期函数,this为当前的组件对象
      
      // 首页接口：getHomeMultidata() 
      // getHomeMultidata().then(res => {  //请求成功回调  
      //   console.log(res.data);  //接口请求成功的数据
      //   // 由于函数执行完毕后，函数内部的定义的局部变量就会内存回收。所以需要将res存储在data中
      //   this.banners = res.data.banner.list;  // 这里箭头函数的this为外层created()中的this
      //   this.recommends = res.data.recommend.list;
      // }).catch(err => {  //请求失败回调 
      //   console.log(err);
      // });

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

      // 设置goods-wrapper高度
      // console.log(parseInt(clientHeight)-49 + 'px');
      // document.querySelector('.wrapper').style.height = parseInt(clientHeight)-49 + 'px';
    },
    methods: {
      /** 事件监听相关的点击 */
      getType(type){
        this.goodtype = type;
      },

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