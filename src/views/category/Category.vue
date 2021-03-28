<template>
  <div id="category">
    <!-- 顶部导航栏 -->
    <nav-bar class="category-nav">
      <span slot="nav_center">商品分类</span>
    </nav-bar>
      
    <!-- 左侧菜单 -->
    <tab-menu :tabmenus="menuList" @selectmenu="getMaitKey"/>

    <!-- scroll,上拉加载  -->
    <better-scroll class="category-content" 
                    ref="scroll" 
                    :probe-type="0" 
                    :pull-up-load="true" >
      <!-- 右侧分类 -->
      <tab-category :tabcategory="categoryList"/>
      <!-- TabControl -->
      <tab-control  class="tab-control" :titles="['综合','新品','销量']"  v-on:tab-click="getType" />
      <!-- 右侧商品列表 -->
      <goods-list :goods="categoryGoodsList"/>
    </better-scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabMenu from 'views/category/childComps/TabMenu.vue'
import BetterScroll from 'components/common/scroll/BetterScroll.vue'
import TabCategory from 'views/category/childComps/TabCategory.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'

import {getCategoryMenu, getCategory, getCategoryDetail} from 'network/category.js'

export default {
  name: "Category",
  data() {
    return {
      menuList: [],
      categoryList: [],
      maitKey: 0,
      miniWallkey: 0,
      titleList: [],
      goodtype: 'pop',
      categoryGoodsList: []
    }
  },
  components: {
    NavBar,
    TabMenu,
    TabCategory,
    BetterScroll,
    TabControl,
    GoodsList,
    
  },
  created() {
    this.getCategoryMenu();
    // this.getCategory(this.maitKey)
  },
  methods: {
    // 来自子组件TabMenu的事件，获取maintKey
    getMaitKey(key){
      // console.log(key);
      this.maitKey = key.maitKey;
      this.miniWallkey = key.miniWallkey;
      // console.log("选择menu点击：",this.maitKey,this.miniWallkey);
      // 选择不同的menu后更新选择的类别的接口
      this.getCategory(this.maitKey);
      this.getCategoryDetail(this.miniWallkey, this.goodtype);
    },

    // 来自TabControl组件的获取点击的是第几个tab
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
        this.getCategoryDetail(this.miniWallkey, this.goodtype);
    },

    // 菜单接口
    getCategoryMenu(){
      getCategoryMenu().then(res => {  //请求成功回调  
        this.menuList = res.data.category.list; 
        console.log("菜单接口:",this.menuList);
        this.maitKey = this.menuList[0].maitKey;   //默认为第一个menuList的maitKey
        this.miniWallkey = this.menuList[0].miniWallkey;  //默认为第一个menuList的miniWallkey
        // console.log("menu接口中：",this.maitKey , this.miniWallkey);
        // 得到数据后获取分类接口
        this.getCategory(this.maitKey);
        // 得到数据后获取商品列表接口
        // console.log("menu接口中：",this.miniWallkey, this.goodtype);
        this.getCategoryDetail(this.miniWallkey, this.goodtype);
      }).catch(err => {  //请求失败回调 
        console.log(err);
      });
    },

    // 分类接口
    getCategory(maitKey){
       getCategory(maitKey).then(res => {  //请求成功回调  
          this.categoryList = res.data.list;
          // console.log("分类接口:",this.categoryList);
        }).catch(err => {  //请求失败回调 
          console.log(err);
        });
    },

    // 商品列表接口
    getCategoryDetail(miniWallkey, type){
       getCategoryDetail(miniWallkey, type).then(res => {  //请求成功回调  
          this.categoryGoodsList = res;
          // console.log("商品列表接口:",this.categoryGoodsList);  //接口请求成功的数据;
        }).catch(err => {  //请求失败回调 
          console.log(err);
        });
    },

  }
  
}
</script>

<style scoped>
#category{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.category-nav{
  color: #fff;
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* 设置scroll 上拉加载 高度*/
.category-content{
  float: left;
  width: 75%;
  height:calc(100% - 49px);
  overflow: hidden;
}

/* 添加tabControl滚动到上方停留在页面TabNav下面，与TabNav一样悬停不滚动，下拉到tabControl下方后，再滚动 */
.tab-control{
  width: 100%;
  position: sticky;  /**很多浏览器（IE等）不支持这个属性，移动端都支持 原理：当滚动到指定高度时，position的值自动被浏览器改为fixed */
  top: 44px;   /* 设置滚动到距离多少的位置停留不滚动 */
  z-index: 9;
}
</style>