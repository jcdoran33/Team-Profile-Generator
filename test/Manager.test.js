//require - the Employee.js file AND the Manager.js file
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Constructor should set an office number", () => {
    const obj = new Manager(1, "Mike", "email@email.com", 5)
    expect(obj.officeNum).toEqual(5);
});

test("Method getRole should always return Manager", () => {
    const obj = new Manager();
    expect(obj.getRole()).toEqual("Manager");
});

test("The method getOfficeNum should return the input office number", () => {
    const obj = new Manager(1, "Paula", "paula@gmail.com", 17);
    expect(obj.getOfficeNum()).toEqual(obj.officeNum);
});