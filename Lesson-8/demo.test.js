import { createObject, getData, runCallback } from './demo'
import axios from 'axios'
jest.mock('axios')

// 1. 捕获函数的调用和返回结果，以及 this 和调用顺序
// 2. 它可以让我们自由的设置返回结果
// 3. 改变函数内部实现

// 使用 jest mock 创建函数
test('test runCallback ', () => {
    // fn 可自行传入函数
    const func = jest.fn()
    // const func = jest.fn(fn) === func.mockImplemenration()
    // 设置 func 返回值
    func.mockReturnValue('data')
    // 设置 func  调用一次的返回值
    func.mockReturnValueOnce('data')
    runCallback(func)
    // 回调是否被调用
    expect(func).toBeCalled()
    // console.log(func.mock)
    // 回调调用几次
    expect(func.mock.calls.length).toBe(1)
    expect(func.mock.result[0].value).toBe(123)
    expect(func.mock.calls[0]).toEqual(['abc'])
})

// 构造函数调用时
test('test createObject', () => {
    const func = jest.fn()
    createObject(func)
    console.log(func.mock)
})

test('test getData', async () => {
    // 改变函数的内部实现
    axios.get.mockResolvedValue({
        data: 'hello'
    })
    await getData().then((data) => {
        expect(data).toBe('hello')
    })
})