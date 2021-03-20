<template>
<!-- 
  this.$refs:父组件获取某一个子组件：
    - ref="属性值"绑定在子组件上，通过 this.$refs.属性名 获取到的为绑定的组件对象
    - ref="属性值"绑定在普通的元素中，通过 this.$refs.属性名 获取到的为绑定的元素对象 
-->
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
// 导入better-scroll框架
import BScroll, { ObserveDom } from 'better-scroll'
export default {
    name: "BetterScroll",
    data() {
        return{
          scroll: null
        }
    },
    mounted() {
      // document.querySelector('.wrapper')拿到的元素是不准确的，可能多个地方定义同一个class="wrapper"
      // vue中想明确的拿到某个元素： 给这个元素直接绑定 ref=""  父组件直接访问子组件this.$refs.refs属性值
      // console.log(this.$refs.wrapper);
      this.scroll = new BScroll(this.$refs.wrapper, { 
        probeType: 3,
        click: true,
        pullUpLoad: true,
        // 新版配置
        mouseWheel: true,
        observeImage: true,
        observeDOM: true,
      });

      // 监听滚动,需要参数，实时获取滚动的位置。事件名：scroll
      this.scroll.on('scroll', (position) => {
        // console.log(position);
      });

      // 监听是否滚动到底部，上拉加载的功能，事件名：pullingUp
      this.scroll.on('pullingUp', () => {   //滚动到最底部回调函数，只能回调一次，即只能下拉加载一次，函数自动回收
          console.log("上拉加载更多~~");
          // 1.可在滚动到底部时，发送网络请求，请求更多页的数据
          // 2.等数据请求完成后，并且将新的数据展示出来后，再次上拉加载scroll.finishPullUp();
          setTimeout( () => {   //延时调用下一次的上拉加载更多
              this.scroll.finishPullUp();
          }, 3000)
      });
    },
}
</script>

<style scoped>

</style>