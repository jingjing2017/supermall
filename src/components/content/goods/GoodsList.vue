<template>
    <!-- <div class="goods-list" > -->
    <grid-view :cols="2" :line-space="5" v-if="goods">
        <goods-item v-for="(good, index) in goods" :key="index" :good="good" />
    </grid-view>
    <!-- </div> -->
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem.vue'
import GridView from 'components/common/gridView/GridView.vue'
export default {
    name: "GoodsList",
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        },
    },
    components: {
        GoodsItem,
        GridView
    },
    //已经被渲染到dom
    mounted() {
        
    }
}
</script>

<style scoped>
/* 设置淘宝瀑布流 */
.goods-list{
    padding: 0 1.5%;
    -moz-column-count:2; 
	-webkit-column-count:2; 
    column-count: 2;
    column-gap: 6px;
    margin-bottom: 55px;
}

</style>