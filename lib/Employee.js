// create class "Employee" that will be PARENT class to all 
//the other classes (intern, amnager, engineer)
class Employee {
    //add constructor with properties: id, name, email
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    };

    //create methods which get the name, ID, email, role
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };

};


// do the module export
module.exports = Employee;