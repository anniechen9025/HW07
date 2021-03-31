// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "Project title",
    message: "Please name your project title:",
},
{
    type: "input",
    name: "description1",
    message: "Description Portion(DP-1): What was your motivation?"
},
{
    type: "input",
    name: "description2",
    message: "DP-2: Why did you build this project?",
},
{
    type: "input",
    name: "description3",
    message: "DP-3: What problem does it solve?",
},
{
    type: "input",
    name: "description4",
    message: "DP-4: What did you learn?",
},
{
    type: "input",
    name: "installation",
    message: "Installation: What are the steps required to install your project? (provide step-by-step description)",
},
{
    type: "input",
    name: "Usage",
    message: "Usage-instruction: Please provide instructions and examples for use",
},
{
    type: "input",
    name: "screenshot",
    message: "Usage-screenshot: Please type the path of your image you are using(ex:assets/images/screenshot.png)",
},
{
    type: "input",
    name: "credit",
    message: "Credit: Please list out your collaborators, if any, with links to their GitHub Profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
},
{
    type: "input",
    name: "license",
    message: "License: Please list",
},
{
    type: "input",
    name: "badges",
    message: "Badges: Please list out your Badges",
},
{
    type: "input",
    name: "Features",
    message: "Features: Please list out your features here",
},
{
    type: "input",
    name: "contribute",
    message: "Contributes: Please explain how would you like other developers to contribute it for your application or package.",
},
{
    type: "input",
    name: "tests",
    message: "Test: Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
}];

//TODO: Create README.md Context


// TODO: Create a function to write README file
function writeToFile(readmeFile, context) {
    fs.writeFile("README.md",context,error=>{
        if(error){
            console.log(error);
        }else{
            console.log("Sucess")
        };
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
        console.log(data);
    })
}

// Function call to initialize app
init();
