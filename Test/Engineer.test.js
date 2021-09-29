const Engineer = require("../lib/Engineer");

const Engineer1 = new Engineer('John', 3, 'john793a@yahoo.com', 'John-gitHub');

test("can set GitHub username from the constructor argument", () => {
    expect(Engineer1.github).toEqual('John-gitHub');

});

test("can get gitHub username from getGithub()", () => {
    expect(Engineer1.getGithub()).toEqual('john-gitHub');

});

test("getRole() needs to return \"Engineer\"", () => {
    expect(Engineer1.getRole()).toEqual("Engineer");

});









