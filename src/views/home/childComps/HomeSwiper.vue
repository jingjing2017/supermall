<template>
<!-- 轮播图 banner -->
  <swiper v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
    <a :href="item.link">
        <img :src="item.image" alt="">
    </a>
    </swiper-item>
</swiper>
</template>

<script>
// import Swiper from 'components/common/swiper/Swiper.vue'
// import SwiperItem from 'components/common/swiper/SwiperItem.vue'
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name: 'HomeSwiper',
    props: {
        banners: {
            type:  Array,
            default: []
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>