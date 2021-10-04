const Manager = require ("../lib/Manager");

const Manager1 = new Manager('John', 3, 'john793a@yahoo.com', 7891);

test("can set office number from the constructor argument", () => {
    expect(Manager1.officeNum).toEqual(7891);

});

test("can get office number from getOffice()", () => {
    expect(Manager1.getOffice()).toEqual(7891);

})

test("getRole() needs to return \"Manager\"", () => {
    expect(Manager1.getRole()).toEqual("Manager");

});