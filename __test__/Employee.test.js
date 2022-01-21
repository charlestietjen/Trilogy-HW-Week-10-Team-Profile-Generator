const Employee = require("../lib/Employee.js");

test('creates employee object', () => {
    const employee = new Employee('John Doe', 'Manager', "1", 'john@company.com');

    expect(employee.name).toBe('John Doe');
    expect(employee.title).toBe('Manager');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toBe('john@company.com');
})