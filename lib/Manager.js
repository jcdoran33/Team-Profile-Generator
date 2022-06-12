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
        // do we need the above 3? Or just the officeNum definition below?
        this.officeNum = officeNum;
    };

    getRole() {
        return "Manager";
    };

    getOfficeNum () {
        return this.officeNum;
    };
}

//do module export for manager class
module.exports = Manager;