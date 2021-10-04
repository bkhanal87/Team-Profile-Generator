const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs"); 

const OUTPUT_DIR = path.resolve(__dirname, "./dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const employeeAnswersArr = [];


const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the name of the team's manager?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the email address of the team's manager?",
    },
    {
        type: "input",
        name: "officeNum",
        message: "What is the team manager's office number?",
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name:"teamMember",
        choices: [
            "Engineer",
            "Intern",
            "Finish building my team",
        ],
    },
];
    
const engineerQuestions = [
    {
      type: "input",
      name: "engineerName",
      message: "What is the name of the engineer you would like to add?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's ID?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the email address for the engineer?",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?",
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name:"teamMember",
        choices: [
            "Engineer",
            "Intern",
            "Finish building my team",
        ],
    },
];

const internQuestions = [
     {
       type: "input",
       name: "internName",
       message: "What is the intern's name?",
     },
     {
       type: "input",
       name: "internId",
       message: "What is the intern's ID?",
     },
     {
       type: "input",
       name: "internEmail",
       message: "What is the intern's email address?",
     },
     {
       type: "input",
       name: "internSchool",
       message: "What is the intern's school name?",
     },
     {
        type: "list",
        message: "Which type of team member would you like to add?",
        name:"teamMember",
        choices: [
            "Engineer",
            "Intern",
            "Finish building my team",
        ],
    },
 ];

function engineerInfo() {
     inquirer
        .prompt(engineerQuestions)
        .then(answers => {
            let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            employeeAnswersArr.push(engineer);
            if (answers.teamMember === "Engineer") {
                engineerInfo();
            } else if (answers.teamMember === "Intern") {
                internInfo();
            } else {
                writeHtml();
            }
        })
 }

function internInfo() {
    inquirer
       .prompt(internQuestions)
       .then(answers => {
           let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
           employeeAnswersArr.push(intern);
           if (answers.teamMember === "Engineer") {
               engineerInfo();
           } else if (answers.teamMember === "Intern") {
               internInfo();
           } else {
               writeHtml();
           }
       })
}

function init() {
    inquirer 
        .prompt(managerQuestions)
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNum);
            employeeAnswersArr.push(manager);
            if (answers.teamMember === "Engineer") {
                console.log("engineer was the answer");
                engineerInfo();
            } else if (answers.teamMember === "Intern"){
                console.log("intern was the answer");
                internInfo();
            } else {
                writeHtml();
            }
        })
}

function writeHtml() {
    const writeHtml = fs.writeFile(outputPath, render(employeeAnswersArr), (err) => {
        err ? console.log(err) : console.log("Html generated!")
    })
}

init();
