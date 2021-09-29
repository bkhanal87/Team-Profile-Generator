const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

const Employee1 = new Employee('John', 3, 'john793a@yahoo.com');

test("can produce instance of Employee", () => {
    expect(Employee1 instanceof Employee).toEqual(true);

});

test("can set name from the constructor argument", () => {
    expect(Employee1.name).toEqual('John');

});

test("can set id from the constructor argument", () => {
    expect(Employee1.id).toEqual(3);

});

test("can set email from the constructor argument", () => {
    expect(Employee1.email).toEqual('john793a@yahoo.com');

});

test("can get name from getName()", () => {
    expect(Employee1.getName()).toEqual('john');

});

test("can get id from getId()", () => {
    expect(Employee1.getId()).toEqual(3);

});

test("can get email from getEmail()", () => {
    expect(Employee1.getEmail()).toEqual('john793a@yahoo.com');

});

test("getRole() needs to return \"Employee\"", () => {
    expect(Employee1.getRole()).toEqual("Employee");

});

