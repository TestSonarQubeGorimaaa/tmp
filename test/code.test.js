const { add } = require("./../utils/code");

test("Addition de 2 nombres", () => {
    expect(add(2, 3)).toBe(5);
});
