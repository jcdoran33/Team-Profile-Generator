//require the Employee.js file and the Intern.js file
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Intern object should set a school property", () => {
    const obj = new Intern(3, "Isaac", "isaac@gmail.com", "Rutgers");
    expect(obj.school).toBeTruthy();
    expect(obj.school).toEqual("Rutgers");
});

