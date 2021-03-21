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
    props: {
      probeType:{
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
        return{
          scroll: null,
        }
    },
    mounted() {

      // 1.创建BScroll对象
      // document.querySelector('.wrapper')拿到的元素是不准确的，可能多个地方定义同一个class="wrapper"
      // vue中想明确的拿到某个元素： 给这个元素直接绑定 ref=""  父组件直接访问子组件this.$refs.refs属性值
      // console.log(this.$refs.wrapper);
      this.scroll = new BScroll(this.$refs.wrapper, { 
        click: true,
        // probeType: 3,   //每次设置为3为实时监听，即使是不实时监听滚动的position，也是影响性能的
        probeType: this.probeType,  //动态传入,决定是否需要实时监听
        pullUpLoad: this.pullUpLoad,   // 动态传入是否需要监听上拉加载事件
        // 新版配置
        mouseWheel: true,
        observeImage: true,
        observeDOM: true,
      });

      // 2.监听滚动的位置,需要参数。事件名：scroll
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        // 实时监听的位置传递给父组件，父组件中处理相应的操作
        this.$emit('scroll-position',position);
      });

      // 回到顶部的方法: 根据传入参数回到(x,y)坐标的位置 ,time:为多少事件内滚动到指定的坐标位置
      // this.scroll.scrollTo(x, y, time);

      // 3.监听是否滚动到底部，上拉加载的功能，事件名：pullingUp
      this.scroll.on('pullingUp', () => {   //滚动到最底部回调函数，只能回调一次，即只能下拉加载一次，函数自动回收
        console.log("上拉加载更多~~");
        // 上拉加载的事件传递给父组件，告知父组件已经滚动到底部了，在父组件中处理发送网络请求
        this.$emit('pulling-up');
      });
    },
    methods: {
      // 封装scrollTo()方法，外部直接使用,不需要实时监听
      scrollTo(x, y, time=300){   //time默认值为300ms  time没有传显示默认值
        this.scroll.scrollTo(x, y, time);
      },
      // 封装finishPullUp()方法：上拉加载完成第一次网络请求数据后，再次请求
      finishPullUp(){
        setTimeout(() => {   //延时调用下一次的上拉加载更多
            this.scroll.finishPullUp();
        }, 2000);
      }
      
    }
}
</script>

<style scoped>

</style>