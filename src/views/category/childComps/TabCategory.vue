<template>
    <div>
        <grid-view class="tab-category" :cols="3" :lineSpace="15" :v-margin="20" v-if="tabcategory">
            <div class="category-item" v-for="item in tabcategory">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <div>{{item.title}}</div>
                </a>
            </div>
        </grid-view>
    </div>
</template>

<script>
import GridView from 'components/common/gridView/GridView.vue'
export default {
    name: 'TabCategory',
    props: {
        tabcategory: {
            type: Array,
            default: []
        }
    },
    components: {
        GridView,
    }
}
</script>

<style scoped>
.category-item{
    width: 100%;
    text-align: center;
    font-size: 12px;
}
.category-item img{
    width: 80%;
}
</style>