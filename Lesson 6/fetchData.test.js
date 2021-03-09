import { fetchData1, fetchData2 } from './fetchData'

// 回调类型异步函数测试 

test('fetchData1 result === { success:true }', (done) => {
    fetchData1((data) => {
        expect(data).toEqual({
            success: true
        })
        done()
    })
})

// 返回 Promise 对象的异步函数测试

test('fetchData2 result === { success:true }', () => {
    return fetchData2().then((response) => {
        expect(response.data).toEqual({
            success: true
        })
    })
})

// 测试 404 

test('fetchData1 test 404 ', () => {

    // expect 语句至少执行依据
    expect.assertions(1)
    return fetchData2().catch((e) => {

        // e = Error : Request failed with status code 404
        expect(e.toString().indexOf('404') > -1).toBe(true)
    })
})

// 测试返回值包含对象

test('fetchData2 result === { success:true }', () => {
    return expect(fetchData2()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})

// 测试 404 

test('fetchData2 test 404 ', () => {
    return expect(fetchData2()).rejects.toThrow()
})

// 使用 aysnc & await 测试返回值包含对象 1

test('fetchData2 result === { success:true }', async () => {
    await expect(fetchData2()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})

// 测试 404 

test('fetchData2 test 404 ', async () => {
    await expect(fetchData2()).rejects.toThrow()
})

// 使用 aysnc & await 测试返回值包含对象 2

test('fetchData2 result === { success:true }', async () => {
    const response = await fetchData2()
    expect(response.data).toEqual({
        success: true
    })
})

// 测试 404 

test('fetchData2 test 404 ', async () => {
    expect.assertions(1)
    try {
        await fetchData2()
    } catch (error) {
        console.log(error.toString())
        expect(e.toString().indexOf('404') > -1).toBe(true)
    }
})