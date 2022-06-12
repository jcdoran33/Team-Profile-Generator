// require the lib -> Employee.js file
const { default: TestRunner } = require("jest-runner");
const Employee = require("../lib/Employee");

//run tests....
test("Initialization of Employee class", () => {
    const obj = new Employee(7, "Paul", "paul@email.net");
    //how do we test to see that a class anme Employee was created?
    // expect(obj).toEqual(new Employee(7, "Paul", "paul@email.net"));
    expect(obj instanceof Employee).toEqual(true);
});

test("Constructor initialized with a name", () => {
    const obj = new Employee(5, "Steve", "email@email.com");
    expect(obj.name).toEqual("Steve");
});

test("Constructor created with an ID", () => {
    const obj = new Employee(5, "Steve", "email@email.com");
    expect(obj.id).toBeTruthy();
});

test("Constructor initiated with an email", () => {
    const obj = new Employee(5, "Steve", "email@email.com");
    expect(obj.email).toBeTruthy();
});

test("Method getName functions correctly", () => {
    const obj = new Employee(2, "Jack", "jack@email.com");
    expect(obj.getName()).toEqual(obj.name);
});

test("Method getId function correctly", () => {
    const obj = new Employee(2, "Jack", "jack@email.com");
    expect(obj.getId()).toEqual(obj.id);
});

