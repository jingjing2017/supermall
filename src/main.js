import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入request
import {request} from './network/request.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// 方法2和方法3 Promise 最终方案
request({
  url: '/home/multidata'
}).then(res => {  //请求成功，promise成功的回调   res为网络请求成功的数据
  console.log(res);
}).catch(err => {  //请求失败，promise失败的回调 
  console.log(err);
});