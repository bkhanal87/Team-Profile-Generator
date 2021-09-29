const Intern = require ("../lib/Intern");

const Intern1 = new Intern('John', 3, 'john793a@yahoo.com', 'OSU');

test("can set school from the constructor argument", () => {
    expect(Intern1.school).toEqual('OSU');

});

test("can get school from getSchool()", () => {
    expect(Intern1.getSchool()).toEqual('OSU');

});

test("getRole() needs to return \"Intern\"", () => {
    expect(Intern1.getRole()).toEqual("Intern");

});