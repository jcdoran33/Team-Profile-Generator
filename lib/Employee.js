// create class "Employee" that will be PARENT class to all 
//the other classes (intern, amnager, engineer)
class Employee {
    //add constructor with properties: id, name, email
    constructor(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    };

    //create function which gets the name
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
        return this.role;
    };

};





// do the module export
module.exports = Employee;