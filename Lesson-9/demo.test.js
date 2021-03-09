import { generateConfig, generateAnthorConfig } from "./demo";

// 基于快照测试
test("test generateConfig", () => {
  expect(generateConfig()).toMatchInlineSnapshot(`
    Object {
      "port": 8080,
      "server": "http://localhost",
    }
  `);
});

test("test generateAnthorConfig", () => {
  expect(generateAnthorConfig()).toMatchInlineSnapshot(
    {
      // 允许 Date 类型是所有值
      date: expect.any(Date),
    },
    `
    Object {
      "date": Any<Date>,
    }
  `
  );
});
