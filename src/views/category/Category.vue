<template>
  <div>
      <h2>分类</h2>
      <better-scroll class="category-wrapper">     
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
          <div>分类的列表1</div>
      </better-scroll>
      
  </div>
</template>

<script>
import BetterScroll from 'components/common/scroll/BetterScroll.vue'
export default {
  name: "Category",
  data() {
    return {
      bscroll: null
    }
  },
  components: {
    BetterScroll
  },
  // // 组件创建完后调用
  // created() {
  //   // console.log(document.querySelector('.wrapper'));  //null
  // },
  // // 组件挂载到dom后调用
  // mounted() {
  //   // console.log(document.querySelector('.wrapper'));  //<div class="wrapper">...</div>
  //   /**
  //    * better-scroll：
  //    *    - 1)better-scroll要求是content标签外部必须包一个父标签，而且wrapper的内部只能是一个子标签
  //    *        <div class="wrapper">
  //    *          <ul class="content">...</ul>
  //    *        </div>
  //    *        注： wrapper必须有一个固定的高度
  //    *         .wrapper{
  //    *            height: 300px;
  //    *            background-color: pink;
  //    *            overflow: hidden;
  //    *          }
  //    *    - 2)默认情况下，BScroll是不能实时监听滚动位置
  //    *        - 要实时监听需要在new BScroll('.wrapper', { })中传入第二个对象中设置probeType属性
  //    *        - probeType属性：
  //    *          probe: 侦测
  //    *          probeType： 0和1  都是不侦测实时滚动的位置
  //    *          probeType：2  在手指滚动的过程中侦测，手指离开后惯性滚动过程中不侦测
  //    *          probeType：3  只要是滚动都要侦测
  //    *        - click: 默认值为false点击不生效
  //    *        - pullUpLoad属性：
  //    *            - 做上拉加载功能，默认为false，设置为true或Object时，可开启上拉加载
  //    *            - bscroll.on('pullingUp', () => {   //滚动到最底部回调函数
  //    *                console.log("上拉加载更多~~");  /滚动到最底部时打印：上拉加载更多~~
  //    *                // 可在滚动到底部时，发送网络请求，请求下一页的数据
  //    *              });
  //    *    - 3)bscroll.on()表示监听某一个事件
  //    */ 
  //   this.bscroll = new BScroll('.category-wrapper', { 
  //     probeType: 3,
  //     // click: true,
  //     // pullUpLoad: true
  //   });

  //   // 监听滚动,需要参数，实时获取滚动的位置。事件名：scroll
  //   this.bscroll.on('scroll', (position) => {
  //     console.log(position);
  //   });

  //   // 监听是否滚动到底部，上拉加载的功能，事件名：pullingUp
  //   // this.bscroll.on('pullingUp', () => {   //滚动到最底部回调函数，只能回调一次，即只能下拉加载一次，函数自动回收
  //   //   console.log("上拉加载更多~~");
  //   //   // 1.可在滚动到底部时，发送网络请求，请求更多页的数据

  //   //   // 2.等数据请求完成后，并且将新的数据展示出来后，再次上拉加载bscroll.finishPullUp();
  //   //   setTimeout( () => {   //延时调用下一次的上拉加载更多
  //   //     this.bscroll.finishPullUp();
  //   //   }, 3000)

  //   // });
  // }
}
</script>

<style scoped>
/* 设置局部滚动 */
.category-wrapper{
  height: 300px;
  background-color: pink;
  
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>