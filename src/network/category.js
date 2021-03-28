// 封装分类页面的所有网络请求

// 导入request
import {request} from 'network/request.js'

// 分类页面左侧菜单的接口
export function getCategoryMenu(){   //获取接口数据
    // 方法2和方法3 Promise 最终方案
    return request({   
        url: '/category'
    })
}

// 分类的接口
export function getCategory(maitKey){   //获取接口数据
    return request({   
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

// 商品列表接口
export function getCategoryDetail(miniWallkey, type) {
    return request({
      url: '/subcategory/detail',
      params: {
        miniWallkey,
        type
      }
    })
  }