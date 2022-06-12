// require all classes (Manager, Engineer, Intern)
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//require the Inquirer package to use for prompt
const inquirer = require("inquirer");
//require fs for writing files
const fs = require("fs");
//import page template source file? sample.html

//creat variables for foler and html file name
//folder??
let fileName;

//empty array for the team member objects
let teamMembers = [];
//empty array for employee ID #'s, so that an ID cannot be repeated
//based on this, for each new team member obj, will ahave to add their ID to this array, and check when creating a new team member if the ID is taken already
let employeeIds = ["1"];

//SHould I create arrays here for all the groups of questions? (Manager questions, Intern, EMployee questions)

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the employee's office number?",
            name: "officeNum",
        },
    ])
    .then((response) => {
        //first create a new Manager obj, passing in prompt responses
        const newEntry = new Manager(response.id, response.name, response.email, response.officeNum);
        //check if ID number is already in employeeID array, IF so, return error, IF not, push to array
        if (employeeIds.includes(response.id)) {
            console.log("This ID is already used by an employee. Please enter a unique employee ID.");
        } else {
            employeeIds.push(response.id);
            teamMembers.push(newEntry);
        };
        //then push newEntry object to the teamMembers array
        console.log("Team members array: ", teamMembers);
    })
    // now, use another .then to launch the main (non first instance) of inquirer prompt?
    .then(() => {
        mainPromptFunc();
    });


//define function that will create the main prompt (that lets you choose the role you are entering)
function mainPromptFunc() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Which type of employee would you like to add to the team?",
            name: "employeeType",
            choices: ["Manager", "Engineer", "Intern", "All done adding employees"]
        }
    ])
    .then((response) => {
        if (response.employeeType === "All done adding employees") {
            return console.log("All done!");
            // need to add line here that launces the function that creates the html file
        } else if (response.employeeType === "Manager") {
            managerPrompt();
            return "Manager prompt luanched!";
        } else if (response.employeeType === "Engineer") {
            return engineerPrompt();
        } else if (response.employeeType === "Intern") {
            return internQuestions();
        } else {
            console.log("Error - the mainPromptFunc did not receive the correct input");
        }
    });
};

//define managerPrompt for when user selects Manager as employee type to add
function managerPrompt() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the employee's office number?",
            name: "officeNum",
        }
    ])
    .then((response) => {
        //first create a new Manager obj, passing in prompt responses
        const newEntry = new Manager(response.id, response.name, response.email, response.officeNum);
        //check if ID number is already in employeeID array, IF so, return error, IF not, push to array
        if (employeeIds.includes(response.id)) {
            console.log("This ID is already used by an employee. Please enter a unique employee ID.");
        } else {
            employeeIds.push(response.id);
            teamMembers.push(newEntry);
        };
        //then push newEntry object to the teamMembers array
        console.log("Team members array: ", teamMembers);
    })
    .then(() => {
        return mainPromptFunc();
    });
};

//define engineerPrompt for when user selects Engineer as employee type to add
function engineerPrompt() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the employee's Github username?",
            name: "github",
        }
    ])
    .then((response) => {
        //first create a new Engineer obj, passing in prompt responses
        const newEntry = new Engineer(response.id, response.name, response.email, response.github);
        //check if ID number is already in employeeID array, IF so, return error, IF not, push to array
        if (employeeIds.includes(response.id)) {
            console.log("This ID is already used by an employee. Please enter a unique employee ID.");
        } else {
            employeeIds.push(response.id);
            teamMembers.push(newEntry);
        };
        //then push newEntry object to the teamMembers array
        console.log("Team members array: ", teamMembers);
    })
    .then(() => {
        return mainPromptFunc();
    });
};