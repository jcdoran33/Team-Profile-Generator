// require all classes (Manager, Engineer, Intern)
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//require the Inquirer package to use for prompt
const inquirer = require("inquirer");
const path = require('path');
//require fs for writing files
const fs = require("fs");
//import page template source file? sample.html

//creat variables for foler and html file name
//folder??
// let fileName = "index.html";

//empty array for the team member objects
let teamMembers = [];
//empty array for employee ID #'s, so that an ID cannot be repeated
//based on this, for each new team member obj, will ahave to add their ID to this array, and check when creating a new team member if the ID is taken already
let employeeIds = [];

//SHould I create arrays here for all the groups of questions? (Manager questions, Intern, EMployee questions)

inquirer
    .prompt([
        //need to add to initial prompt 1. ask for company name for use in fileName of HTML
        {
            type: "input",
            message: "To get started building your team's profile, you need to first add the manager. Press Enter to get started.",
            name: "intro",
        },
        {
            type: "input",
            message: "What is the Manager's employee ID number?",
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
                //generateHtml will contruct the page based on user inputs (stored in the arrays)
                // generateHtml();
                generateCards();
                return console.log("All done! Creating team webpage.");
            } else if (response.employeeType === "Manager") {
                return managerPrompt();
            } else if (response.employeeType === "Engineer") {
                return engineerPrompt();
            } else if (response.employeeType === "Intern") {
                return internPrompt();
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

//define internPrompt for when user selects Intern as employee type to add
function internPrompt() {
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
                message: "What is the employee's school?",
                name: "school",
            }
        ])
        .then((response) => {
            //first create a new Engineer obj, passing in prompt responses
            const newEntry = new Intern(response.id, response.name, response.email, response.school);
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

//define generateHtml function, which will use our inputs to create the webpage

function generateHtml(cardsArray) {
    console.log("generateHtml has been launched!");
    //Note: This function is just to create all teh html content. In a separate function, use fs to write file
    // console.log("Test: " + cardsArray);
    //define any variable here (arrays?)
    let re = /,/gi; // regular expression so we can replace alll of the commas
    let cardsString = cardsArray.toString().replace(re,"");
        // console.log("Cards string test of foramt: " + cardsString);

    //using a variable instead of return (this way we can also pass it to the writeFile function)
    let allHtmlContent = 
    `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- link to bootstrap CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <!-- link to my custom stylesheet -->
  <link rel="stylesheet" href="./dist/style.css">
  <title>Example HTML</title>
</head>

<body>
  <div class="container-fluid p-3" id="header-banner">
    <header id="header-text">My Team</header>
  </div>

  <div class="container p-4" id="main-section">
    <div class="row d-flex justify-content-center" id="card-container">
    ${cardsString}
    </div>
  </div>
</body>

</html>
    `;
    console.log("HTML check: ", allHtmlContent); // to test that the HTML content was created as intended

    // Finally, pass the allHtmlContent variable to the writeFile function
    writeFile(allHtmlContent);
    

};

function generateCards() {
    console.log("generateCards function has been launched!");
    //this function should generate the block of html that will contain all the cards
    //so that it can be pasted into the html generate in generateHtml()
    //first, generate the html for a single card with appropriate variables inserted

    //define var cards array as empty array so that we can reference it later and send to generateHtml func...
    let cardsArray = [];
    //start with a loop that will loop through the team members array, and create a card for each one
    for (let i = 0; i < teamMembers.length; i++) {
        //first create empty arrays...
        let empId = [];
        let empName = [];
        let empEmail = [];
        let empSpecial = [];
        let empRole = [];
        // then redefine the arrays...
        empId[i] = teamMembers[i].id;
        empName[i] = teamMembers[i].name;
        empEmail[i] = teamMembers[i].email;

        //define for the special question...
        if (teamMembers[i] instanceof Manager) {
            empSpecial[i] = "Office Number: " + teamMembers[i].officeNum;
            empRole[i] = "Manager";
        } else if (teamMembers[i] instanceof Engineer) {
            empRole[i] = "Engineer";
            empSpecial[i] = `Github: <a href="https://github.com/${teamMembers[i].github}" target="_blank">${teamMembers[i].github}</a>`;
        } else if (teamMembers[i] instanceof Intern) {
            empSpecial[i] = "School: " + teamMembers[i].school;
            empRole[i] = "Intern";
        };

        //now have to go thru those above arrays and create a card for each....
        //it should create ONE card, then push it to the array
        //...then later in the main generator function, we can loop thru the cardsArray and append each one into proper html spot
        let cardBlock = `
            <div class="card m-2" style="width: 18rem;">
            <div class="card-header bg-primary" id="name">
              ${empName[i]}
            </div>
            <div class="card-header bg-secondary" id="role">
              ${empRole[i]}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-light" id="id">ID: ${empId[i]}</li>
              <li class="list-group-item bg-light" id="email"><a href="mailto:${empEmail[i]}">Email: ${empEmail[i]}</a></li>
              <li class="list-group-item bg-light" id="special">${empSpecial[i]}</li>
            </ul>
          </div>
            `;
        cardsArray.push(cardBlock);
        console.log(cardsArray);
        
    };

    //at the end we want to pass the cardsArray to the function generateHtml - so generateHtml(cardsArray)
    // console.log("Test to check if it is defined at line 301:" + cardsArray);
    generateHtml(cardsArray);

};

function writeFile(content) {
    fs.writeFile("index.html", content, (err) => err ? console.error(err) : console.log("Success! Webpage has been created."));
};