//require the Employee.js file and the Engineer.js file
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Constructor should initialize a github user name", () => {
    const obj = new Engineer(2, "Eric", "egineereric@gmail.com",  "eric123");
    expect(obj.github).toBeTruthy();
    expect(obj.github).toEqual("eric123");
});

test("The method getRole should always return Engineer", () => {
    const obj = new Engineer();
    expect(obj.getRole()).toEqual("Engineer");
});

test("The method getGithub should reutrn the input Github username", () => {
    const obj = new Engineer(2, "Eric", "egineereric@gmail.com",  "eric123");
    expect(obj.getGithub()).toEqual("eric123");
});