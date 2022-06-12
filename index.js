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
let employeeIds = [];

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
        //then append newEntry object to the teamMembers array
        teamMembers.push(newEntry);
        console.log("Team members array: ", teamMembers);
    });
