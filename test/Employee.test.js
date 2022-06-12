// require the lib -> Employee.js file
const { default: TestRunner } = require("jest-runner");
const Employee = require("../lib/Employee");

//run tests....
test("Initialization of Employee class", () => {
    const obj = new Employee(id, name, email);
    //how do we test to see that a class anme Employee was created?
    expect(obj).toEqual(Employee(id, name, email));
});

test("Constructor initialized with a name", () => {
    const obj = new Employee(5, "Steve", "email@email.com");
    expect(obj.name).toEqual("Steve");
});