// Jest自动执行test设置
// Jest自动监听并执行test
// 修改package.json，加一个 ==–watchAll ==

//     "scripts": {
//     "test": "jest --watchAll"
// },

// Jest常见的匹配器
// 普通匹配器（常用的）
// 测试值的最简单方法是完全相等。

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// toBe用于Object.is测试完全相等。如果要检查对象的值，请toEqual改用：

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// toEqual 递归检查对象或数组的每个字段。

// 真实性
// 在测试中，有时需要进行区分undefined，null以及false。

// toBeNull仅匹配 null
// toBeUndefined 仅匹配 undefined
// toBeDefined 与…相反 toBeUndefined
// toBeTruthy匹配if语句视为真实的任何内容
// toBeFalsy匹配if语句视为假的任何内容

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

// 比较大小匹配器
// 比较数字的大多数方法都具有匹配器等效项。

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

// 对于浮点相等，请使用toBeCloseTo代替toEqual，因为您不希望测试依赖于微小的舍入误差。

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // console.log(value) 计算精度问题
    // 0.30000000000000004
    //expect(value).toBe(0.3);  所以toBe会直接报错的
    expect(value).toBeCloseTo(0.3); // 只能用toBeCloseTo 
});

// 字符串匹配
// 您可以使用toMatch以下命令针对正则表达式检查字符串：

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// 数组匹配器
// 您可以使用以下命令检查数组或可迭代项是否包含特定项目toContain：

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

// 异常匹配器
// 如果要测试特定函数在调用时是否引发错误，请使用toThrow。

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});

// › Press f to run only failed tests. 仅运行失败的测试
// › Press o to only run tests related to changed files. 仅运行与更改的文件相关的测试
// › Press p to filter by a filename regex pattern. 按文件名正则表达式模式过滤
// › Press t to filter by a test name regex pattern. 按测试名称正则表达式模式过滤
// › Press q to quit watch mode. 退出观看模式 
// › Press Enter to trigger a test run. 触发测试运行