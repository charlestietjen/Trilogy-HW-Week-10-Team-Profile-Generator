const Manager = require('../lib/Manager');

test('Creates a manager class', () => {
    const manager = new Manager('John', 'Manager', 1, 'john@company', "20");

    expect(manager.office).toEqual(expect.any(String));
    expect(manager.office).toEqual("20");
});