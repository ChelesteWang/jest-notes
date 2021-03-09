import axios from 'axios'

// 异步回调函数
export const fetchData1 = (fn) => {
    axios.get('').then((response) => {
        fn(response.data)
    })
}

// 返回 Promise 对象
export const fetchData2 = (fn) => {
    return axios.get('')
}

