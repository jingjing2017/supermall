<template>
  <div class="box">
    <h2>我是详情页</h2>
    <!-- <p>我是详情页的内容</p> -->
  </div>
</template>

<script>
import {getGoodsDetail} from 'network/detail.js'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      goodDetail: {},
      detailBanner: [],

    }
  },
  created(){
    // 获取路由传递的id： $route.params.iid
    // console.log("iid",this.$route.params.iid);
    this.iid = this.$route.params.iid;
    this.getGoodsDetail(this.iid);
  },
  methods: {
    getGoodsDetail(iid){
      getGoodsDetail(iid).then(res => {  //请求成功回调  
          this.goodDetail = res.result;
          console.log("商品详情接口：",res.result);  //接口请求成功的数据

          this.detailBanner = res.result.itemInfo.topImages;

        }).catch(err => {  //请求失败回调 
          console.log(err);
        });
    }
  }

}
</script>

<style scoped>
.box{
  position: relative;
  width: 200px;
  height: 300px;
  border:  1px solid red;

  /* display: table-cell;
  text-align: center;
  vertical-align: middle; */

}
.box h2{
  height: 120px;
  width: 120px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 1px solid red;
}
</style>