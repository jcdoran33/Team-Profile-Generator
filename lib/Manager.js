//create a manager class that is a sub class to Employee class
//First, require the Employee.js file
const Employee = require("./Employee");

//now define class
class Manager extends Employee {
    constructor (id, name, email, officeNum) {
        super(1, "Manager Mike", "manager@email.com");

        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNum = officeNum;
    };
}