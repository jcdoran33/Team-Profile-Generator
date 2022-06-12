//require the Employee.js file and the Intern.js file
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Intern object should set a school property", () => {
    const obj = new Intern(3, "Isaac", "isaac@gmail.com", "Rutgers");
    expect(obj.school).toBeTruthy();
    expect(obj.school).toEqual("Rutgers");
});

test("The method getRole should always return Intern", () => {
    const obj = new Intern();
    expect(obj.getRole()).toEqual("Intern");
});

test("Method getSchool() should return the school of the intern", () => {
    const obj = new Intern(3, "Isaac", "isaac@gmail.com", "Rutgers");
    expect(obj.getSchool()).toEqual("Rutgers");
});