const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs"); 


// Basic information for Engineer

function engineerInfo() {
    inquirer.prompt([
        {
            type:"input",
            name:"engineerName",
            message: "Engineer's Name:"
        },
        {
            type:"input",
            name:"engineerId",
            message:"Engineer's ID:"
        },
        {
            type:"input",
            name: "engineerEmail",
            message:"Engineer's Email:"
        },
        {
            type:"input",
            name:"engineerOffice",
            message:"Engineer's Office Number:"
        }
])}

// Basic information for Intern

function internInfo() {
    inquirer.prompt([
        {
            type:"input",
            name:"internName",
            message: "Intern's Name:"
        },
        {
            type:"input",
            name:"internId",
            message:"Intern's ID:"
        },
        {
            type:"input",
            name: "internEmail",
            message:"Intern's Email:"
        },
        {
            type:"input",
            name:"internOffice",
            message:"Intern's Office Number:"
        }
])}

// Basic information for Manager

function managerInfo() {
    inquirer.prompt([
        {
            type:"input",
            name:"managerName",
            message: "Engineer's Name:"
        },
        {
            type:"input",
            name:"managerId",
            message:"Engineer's ID:"
        },
        {
            type:"input",
            name: "managerEmail",
            message:"manager's Email:"
        },
        {
            type:"input",
            name:"managerOffice",
            message:"manager's Office Number:"
        }
])}


