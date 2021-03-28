<template>
    <!-- scroll,上拉加载  -->
    <better-scroll class="tab-menu" ref="scroll" :probe-type="0" :pull-up-load="true" >
        <div class="menu-content" > 
            <div class="menu-item" 
                :class="{'active': currentIndex === index}"
                v-for="(item, index) in tabmenus" 
                :key="index" 
                @click="menuClick(index, item.maitKey, item.miniWallkey)">
                {{item.title}}
            </div>
        </div>
    </better-scroll>
  
</template>

<script>
import BetterScroll from 'components/common/scroll/BetterScroll.vue'
export default {
    name: 'TabMenu',
    props: {
        tabmenus: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            currentIndex: 0,
            key: {}
        }
    },
    components:{
        BetterScroll,
    },
    methods: {
        menuClick(index, maitKey, miniWallkey){
            this.currentIndex = index;
            this.key.maitKey = maitKey;
            this.key.miniWallkey = miniWallkey;
            this.$emit('selectmenu', this.key);
        }
    }
}
</script>

<style scoped>
.tab-menu{
    float: left;
    width: 25%;
    height:calc(100% - 49px);
    background-color: #f6f6f6;
    overflow: hidden;  
}

.menu-item{
    width: 100%;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
}

.active{
    background-color: #fff;
    color: var(--color-high-text);
    font-weight: 700;
    border-left: 3px solid var(--color-high-text);
}
</style>