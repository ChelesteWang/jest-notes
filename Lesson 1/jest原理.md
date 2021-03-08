# Jest 原理与简易实现

业务代码

```js

function add(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

function multi(a, b) {
    return a * b
}

```
测试代码实现

```js
function expect(result) {
    return {
        toBe: function (actual) {
            if (result !== actual) {
                throw new Error(`预测值与实际值不一致 ${actual} !== ${result}`)
            }
        }
    }
}

function test(desc, fn) {
    try {
        fn()
        console.log(`${desc} 通过测试`)
    } catch (e) {
        console.log(`${desc} 未通过测试 ${e}`)
    }
}

test('测试加法 3 + 6', () => {
    expect(add(3, 6)).toBe(9);
})

test('测试减法 6 - 3', () => {
    expect(minus(6, 3)).toBe(3);
})

test('测试乘法 3 * 5', () => {
    expect(multi(3, 5)).toBe(15);
})

```