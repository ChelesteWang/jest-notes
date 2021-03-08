import { add, minus, multi } from "./math";

test('测试加法 3 + 6', () => {
    expect(add(3, 6)).toBe(9);
})

test('测试减法 6 - 3', () => {
    expect(minus(6, 3)).toBe(3);
})

test('测试乘法 3 * 5', () => {
    expect(multi(3, 5)).toBe(15);
})