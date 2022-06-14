//create class "Engineer" that will be a subclass of Employee

//require the Employee.js file
const Employee = require("./Employee");

//define subclass Engineer
class Engineer extends Employee {
    constructor (id, name, email, github) {
        super(2, "Engineer Eric", "engineereric@gmail.com");

        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
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

    getRole() {
        return "Engineer";
    };

    getGithub () {
        return this.github;
    };
}

//export module Engineer
module.exports = Engineer;