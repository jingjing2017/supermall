// 封装详情的所有网络请求

// 导入request
import {request} from 'network/request.js'

// 商品详情接口
export function getGoodsDetail(iid){   //获取接口数据
    // 方法2和方法3 Promise 最终方案
    return request({   
        url: '/detail',
        params: {
            iid
        }
    })
}