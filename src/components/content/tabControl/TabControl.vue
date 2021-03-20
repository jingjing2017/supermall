<template>
  <div class="tab-control">
    <!-- 只是文字不相同的时候，没必要写插槽 -->
    <!-- <slot></slot> -->
    <div class="tab-control-item" v-for="(item, index) in titles" @click="activeClick(index, item.sort)">
      <span :class="{'active': index === currentIndex}">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0    //记录当前active状态的下标
      }
    },
    methods: {
      activeClick(index, type){
        this.currentIndex = index;
        // console.log(type);
        // 子组件发送一个事件和值（type），事件名为tabClick
        this.$emit("tab-click", type); 
      }
    }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 5px 4px;
  font-size: 14px;
}
.active{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>