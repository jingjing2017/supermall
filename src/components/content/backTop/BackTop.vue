<template>
<!-- 方法1 通过子组件div元素监听到点击事件后，传递给父组件 -->
  <!-- <div class="back-top" @click="backTopClick"> -->
<!-- 方法2 组件不能直接监听点击的，组件上监听点击事件 @click.native=""-->
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name: "BackTop",
    methods: {
        // 方法1 通过子组件div元素监听到点击事件后，传递给父组件
        backTopClick() {
            this.$emit("back-top-click");
        }
    }
}
</script>

<style scoped>
/* 设置局部style */
.back-top{
    position: fixed;
    bottom: 49px;
    width: 11%;
    /* right: calc((100%/2 - 375px) + 1%); */
    right: 1%;
    z-index: 99;
}
.back-top img{
    width: 100%;
}
</style>