<template>
    <div class="goods-item" ref="goodsitem" :style="{'min-height': minheight}">
        <a :href="good.link">
            <div class="img">
                <img class="good_img" :src="good.showLarge.img" alt=""  ref="goodimg">
            </div>
            <div class="text-content">
                <p>{{good.title}}</p>
                <div class="price-count">
                    <span class="price">¥{{good.price}}</span>
                    <img src="~assets/img/common/collect.svg" alt="">
                    <span>{{good.cfav}}</span>
                </div>
            </div>
        </a>
    </div>
    
</template>

<script>
export default {
    name: 'GoodsItem',
    props: {
        good: {
            type: Object,
            difault() {
                return {}
            }
        }
    },
    data() {
        return {
            minheight: 0,
        }
    },
    //已经被渲染到dom
    mounted() {
        // console.log(this.$refs.goodsitem);
        this.$refs['goodimg'].addEventListener('load', function () {   
            // 获取ref="goodsitem"元素的高度
            this.minheight = parseInt(this.offsetHeight) + 46 + 'px';      
        })

    },
    methods: {
        
    }

}
</script>

<style scoped>
.goods-item{
    font-size: 13px;
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