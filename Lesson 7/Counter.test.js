import Counter from './Counter'

let counter = null

// jest hook 对所有内部函数生效

// 所有测试开始之前
beforeAll(() => {
    // counter = new Counter()
})

// 所有测试结束之后
afterAll(() => {
    console.log("finish all test")
})

// 每个测试开始之前
beforeEach(() => {
    counter = new Counter()
})

// 每个测试结束之后
afterEach(() => {
    console.log("finish the test")
})

// 分组测试 describe

describe("test add", () => {
    test('Test Counter & addOne ', () => {
        counter.addOne()
        expect(counter.number).toBe(1)
    })
    test('Test Counter & addTwo ', () => {
        counter.addTwo()
        expect(counter.number).toBe(2)
    })
})

describe("test minus", () => {
    test('Test Counter & minusOne ', () => {
        counter.minusOne()
        expect(counter.number).toBe(-1)
    })
    test('Test Counter & minusTwo ', () => {
        counter.minusTwo()
        expect(counter.number).toBe(-2)
    })
})



