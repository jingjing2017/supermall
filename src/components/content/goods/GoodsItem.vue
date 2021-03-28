<template>
    <div class="goods-item" ref="goodsitem" @click="itemClick(good)">
        <div class="img">
            <!-- 由于接口goodslist的数据问题：首页商品图片为：good.showLarge.img，分类页面商品图片为：good.img -->
            <img class="good_img" :src="good.showLarge?good.showLarge.img:good.img" alt=""  ref="goodimg">
        </div>
        <div class="text-content">
            <p>{{good.title}}</p>
            <div class="price-count">
                <span class="price">¥{{good.price}}</span>
                <img src="~assets/img/common/collect.svg" alt="">
                <span>{{good.cfav}}</span>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'GoodsItem',
    props: {
        good: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    //已经被渲染到dom
    mounted() {
        // console.log("good.img",this.good.img);
        // console.log("good.showLarge",this.good.showLarge);  //存在返回this.good.showLarge，不存在返回undefined
    },
    methods: {
        itemClick(good){
            // 页面跳转
            this.$router.push('/detail/' + this.good.iid);
        }
    },
    computed: {
    //   getImg() {
    //     return this.good.showLarge.img || this.good.img || this.good.image || this.good.show.img
    //   }
    }
}
</script>

<style scoped>
.goods-item{
    font-size: 13px;
    padding-bottom: 47px;
    position: relative;
}
.goods-item .img{  /*图片的盒子,设置圆角*/
    border-radius: 6px;
    overflow: hidden;
}
.goods-item .img img{
    width: 100%;
    height: 100%;
    margin-bottom: -4px;
}
.text-content{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
.goods-item p{
    width: 100%;
    padding: 7px 2% 0 2%;
    overflow: hidden;/*超出部分隐藏*/
    text-overflow:ellipsis;/* 超出部分显示省略号 */
    white-space: nowrap;/*规定段落中的文本不进行换行 */
}
.price-count{
    display: flex;
    justify-content: center;
    height: 25px;
    line-height: 25px;
}
.price-count .price{
    color: var(--color-high-text);
}
.price-count img{
    width: 13px;
    margin: -4px 0 0 4px;
}
</style>