<template>
    <div class="goods-list" >
        <goods-item v-for="(good, index) in goods" :key="index" :good="good" />
    </div>
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem.vue'
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
        GoodsItem
    },
    //已经被渲染到dom
    mounted() {
        
    }
    
//     methods: {
//         getHeight(index){
//              console.log(document.getElementsByClassName('img').clientHeight);
//             // console.log(document.getElementsByClassName('img_img').offsetHeight);
//             // return {
//             //     height: parseInt(parseInt(this.goods[index].showLarge.h) * 0.45) + 'px'
//             // }
// //             let img =new Image()
// //             img.src = this.goods[index].showLarge.img;
// //             img.onload=function () {
// //                 console.log('图片原始高度', img.clientHeight)
// // //                 console.log('图片原始宽度',img.width)
// //             }
//         }
//     }
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