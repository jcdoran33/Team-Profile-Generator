//require - the Employee.js file AND the Manager.js file
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test ("Constructor should set an office number", () => {
    const obj = new Manager(1, "Mike", "email@email.com", 5)
    expect(obj.officeNum).toEqual(5);
});