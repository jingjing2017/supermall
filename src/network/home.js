// 封装首页的所有网络请求

// 导入request
import {request} from 'network/request.js'

export function getHomeMultidata(){   //获取接口数据
    // 方法2和方法3 Promise 最终方案
    return request({   
        url: '/home/multidata'
    })
}

