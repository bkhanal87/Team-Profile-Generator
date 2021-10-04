const Engineer = require("../lib/Engineer");

const Engineer1 = new Engineer('John', 3, 'john793a@yahoo.com', 'john-Github');

test("can set Github username from the constructor", () => {
    expect(Engineer1.Github).toEqual('john-Github');

});

test("can get Github username from getGithub()", () => {
    expect(Engineer1.getGithub()).toEqual('john-Github');

});

test("getRole() needs to return \"Engineer\"", () => {
    expect(Engineer1.getRole()).toEqual("Engineer");

});









