//create class Intern that will be a subclass of Employee

//require the Employee.js file
const Employee = require("./Employee");

//define subclass Intern
class Intern extends Employee {
    constructor (id, name, email, school){
        super(3, "Intern Isaac", "isaac@gmail.com");

        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
    };

    // getName() {
    //     return this.name;
    // };

    // getId() {
    //     return this.id;
    // };

    // getEmail() {
    //     return this.email;
    // };

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };
};

module.exports = Intern;