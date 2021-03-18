// 配置别名
module.exports = {
    configurewebpack: {
        resolve: {
            alias: {  //别名
                // '@': 'src'  //默认已经配置好的
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}