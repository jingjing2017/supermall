<template>
  <div id="category">
    <!-- 顶部导航栏 -->
    <nav-bar class="category-nav">
      <span slot="nav_center">商品分类</span>
    </nav-bar>
      
    <!-- 左侧菜单 -->
    <tab-menu :tabmenus="menuList" @selectmenu="getMaitKey"/>

    <!-- scroll,上拉加载  -->
    <better-scroll class="category-content" ref="scroll" :probe-type="0" :pull-up-load="true" >
      <!-- 右侧分类 -->
      <tab-category :tabcategory="categoryList"/>
      <!-- 右侧商品内容 -->
    </better-scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabMenu from 'views/category/childComps/TabMenu.vue'
import TabCategory from 'views/category/childComps/TabCategory.vue'
import BetterScroll from 'components/common/scroll/BetterScroll.vue'

import {getCategoryMenu, getCategory} from 'network/category.js'

export default {
  name: "Category",
  data() {
    return {
      menuList: [],
      categoryList: [],
      maitKey: 0,
    }
  },
  components: {
    NavBar,
    TabMenu,
    TabCategory,
    BetterScroll
  },
  created() {
    this.getCategoryMenu();
    // this.getCategory(this.maitKey)
  },
  methods: {
    // 来自子组件TabMenu的事件，获取maintKey
    getMaitKey(item){
      this.maitKey = item;
      console.log("选择menu点击：",this.maitKey);
      // 选择不同的menu后更新选择的类别的接口
      this.getCategory(this.maitKey);
    },

    // 菜单接口
    getCategoryMenu(){
      getCategoryMenu().then(res => {  //请求成功回调  
        // console.log(res.data.category);  //接口请求成功的数据
        this.menuList = res.data.category.list; 
        // console.log(this.menuList);
        this.maitKey = this.menuList[0].maitKey;
        console.log("menu接口中：",this.maitKey);
        // 得到数据后获取分类接口
        this.getCategory(this.maitKey);
      }).catch(err => {  //请求失败回调 
        console.log(err);
      });
    },

    // 分类接口
    getCategory(maitKey){
       getCategory(maitKey).then(res => {  //请求成功回调  
          // console.log(res.data.list);  //接口请求成功的数据
          this.categoryList = res.data.list;
          console.log(this.categoryList);
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
</style>