// require the lib -> Employee.js file
const { default: TestRunner } = require("jest-runner");
const Employee = require("../lib/Employee");

//run tests....
test("Initialization of Employee class", () => {
    const obj = new Employee(id, name, email, role);
    //how do we test to see that a class anme Employee was created?
    expect(obj).toEqual(Employee(id, name, email, role));
});