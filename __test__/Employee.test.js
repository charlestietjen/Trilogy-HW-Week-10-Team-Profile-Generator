const Employee = require("../lib/Employee.js");

test('creates employee object', () => {
    const employee = new Employee('John Doe', 'Manager', "1", 'john@company.com');

    expect(employee.getName()).toBe('John Doe');
    expect(employee.getRole()).toBe('Manager');
    expect(employee.getId()).toBe('1');
    expect(employee.getEmail()).toBe('john@company.com');
})