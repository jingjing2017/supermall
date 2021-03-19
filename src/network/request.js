import axios from 'axios'  

//方法3 instance(config)返回本来就是一个promise对象
export function request(config){  
    // 1/创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    });

    // 2.axios的拦截器
    // axios.interceptors : 全局的拦截器
    // (1) 请求拦截：
    instance.interceptors.request.use(config => {  //请求成功获取的到数据为config
        // console.log(config);
        // 请求拦截要做什么事呢？
        // 1.比如：config中的信息不符合服务器的要求，需要拦截到config中的信息进行某种变化后在返回给服务器

        // 2.比如：每次发送网络请求时，都希望在界面中显示一个请求的转动的图标（在每次发送网络请求时show()出图标，请求成功后，再去响应的拦截中将这个图标隐藏）

        // 3.比如：某些网络请求(如：登录(需要携带token))，必须携带一些特殊的信息。拦截时没有携带这些信息，跳转到登录页面，提示用户登录

        return config;       //拦截到config后必须返回，不然拿不到config，请求最终拿不到数据为失败
    }, err =>{  //请求失败
        console.log(err);
    });  
    // (2) 响应拦截： 
    instance.interceptors.response.use(res => {  //响应成功的拦截
        // console.log(res);    //res是响应成功的服务器返回的数据
        return res.data;  // 将结果中的data返回，这样最终的结果就只有data中的服务器中数据，没有axios框架添加的东西了
    }, err => {  //响应失败的拦截
        console.log(err); 
    });   //拦截instance的响应

    // console.log(instance(config));   //返回的是一个Promise对象
    // 3.发送真正的网络请求(异步操作)
    return instance(config);
}