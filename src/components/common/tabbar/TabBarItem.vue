<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img class="item-img" src="../../assets/img/icon_home.png" alt="">
    <div>首页</div> -->
    <!-- 数据写死的，需要添加插槽 插槽插入的内容是所在组件引用时的内容-->
    <!-- 注意：slot标签上使用v-show，程序功能是无法实现的，必须要改成v-if -->
    <!-- <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-active-icon"></slot> -->

    <!-- 由于插槽会被插入的内容替换，插槽绑定的class被替换后就不会生效 则需在外层加个div,绑定class -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active-icon"></slot></div>
    <!-- <div :class="{'text-active':isActive}"><slot name="item-text"></slot></div> -->
    <!-- 点击时的颜色也需要用户动态传入 ,不需要修改组件源码。这样才能完整的封装组件不用改动-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    
  </div>   
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false,
      }
    },
    computed: {
      isActive() {
        // this.$route.path获取当前的活跃状态的路由   this.path为点击时父组件传进来的path
        // 父组件传进来path: /home -> item1(/home)  => true
        // 父组件传进来path: /home -> item2(/category)  => false
        // 父组件传进来path: /home -> item3(/shoppingcart)  => false
        // 父组件传进来path: /home -> item4(/user)  => false
        // return this.$route.path.indexOf(this.path) !== -1;
        return this.$route.path === this.path;
      },
      activeStyle() {
        return  this.isActive ? {'color':this.activeColor}:{};
      }
    },
    methods: {
      // 写函数时省略了小括号，Vue会默认将浏览器生成的event事件对象作为参数传入到方法
      itemClick(){
        // this.$router.push()
        this.$router.replace(this.path);
      }
    }
}
</script>

<style>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px; 

    display: flex;
    flex-flow: column  wrap;
    justify-content: space-around;
    align-items: center;
  }

.tab-bar-item img{
    width: 22px;
    height: 22px;
    margin-top:2px;
  }
.tab-bar-item div{
  margin-top:-3px;
}
/* 点击时的颜色也需要动态决定 */
/* .text-active{
  color: #1ab4b6;
} */
</style>