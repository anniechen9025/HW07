// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "project",
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
    type: "confirm",
    name: "table",
    message: "Do you want a table of contents? (only need it when your readme is long)",
},
{
    type: "input",
    name: "installation",
    message: "Installation: What are the steps required to install your project? (provide step-by-step description)",
},
{
    type: "input",
    name: "usage",
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
    type: "rawlist",
    name: "license",
    message: "License: Please picck license below:",
    chois:[ "MIT", "ISC", "GNU GPLv2", "GNU GPLv3", "Apache License 2.0"]
},
{
    type: "input",
    name: "badges",
    message: "Badges: Please list out your Badges",
},
{
    type: "input",
    name: "features",
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
},
{
    type: "input",
    name: "github",
    message: "Please insert your github username",
},
{
    type: "input",
    name: "email",
    message: "Please input your email",
}];

// TODO: Create a function to write README file
function writeToFile(context) {
    console.log(context);
    fs.writeFile("README.md", context, error => {
        if (error) {
            console.log(error);
        } else {
            console.log("Sucess")
        };
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        //TODO: Create README.md Context
        let projecttitle = `# <${data.project}>`;

        let description = `## Description
        ${data.description1}
        ${data.description2}
        ${data.description3}
        ${data.description4}`;
        
        let tbinsta = " - [Installation](#installation)";
        let tbusage = " - [Usage](#usage)";
        let tbcredit =" - [Credits](#credits)";
        let tblincs = " - [License](#license)";
        let tbbadge = " - [Badges](#badges";
        let tbfeatu = " - [Features](#features";
        let tbcontri = " - [Contributes](#contributes)";
        let tbtest = " - [Tests](#tests";
        let tbques = " - [Questions](#questions";
        let table = `## Table of Contents
${tbinsta}
${tbusage}
${tbcredit}
${tblincs}
${tbbadge}
${tbfeatu}
${tbcontri}
${tbtest}
${tbques}
        `;

        let install = `## Installation
        ${data.installation}
        `;

        let usage = `## Usage
        ${data.usage}
        ![Screenshot of HW website](${data.screenshot})
        `;

        let credit = `## Credits
        ${data.credit}
        `;

        let lincense = `## License
        ${data.lincese}
        `;

        let badges = `## Badges
        ${data.badges}
        `;

        let features = `## Features
        ${data.features}
        `;

        let contribute = `## How to Contribute
        ${data.contribute}
        `;

        let tests = `## Tests
        ${data.tests}
        `;

        let question = `## Quesrions
        Please feel free to contact: 
        Github:https://github.com/${data.github}/
        Email:${data.email}`;

        // console.log(data);
        if (data.project === "") {
            projecttitle = "";
        };
        if (data.description1 === "" && data.description2 === "" && data.description3 === "" && data.description4 === "") {
            description = "";
        };
        if (data.table === false) {
            table = "";
        };
        if (data.installation === "") {
            install = "";
            tbinsta = "";
        };
        if (data.usage === "" && data.screenshot === "") {
            usage = "";
            tbusage = "";
        };
        if (data.credit === "") {
            credit = "";
            tbcredit = "";
        };
        if (data.lincense === "") {
            lincense = "";
            tblincs = "";
        };
        if (data.badges === "") {
            badges = "";
            tbbadge = "";
        };
        if (data.features === "") {
            features = "";
            tbfeatu = "";
        };
        if (data.contribute === "") {
            contribute = "";
            tbcontri = "";
        };
        if (data.tests === "") {
            tests = "";
            tbtest = "";
        };
        let context =`${projecttitle}

${description} 

${table} 

${install} 

${usage} 

${credit} 

${lincense} 

${badges} 

${features} 

${contribute} 

${tests}

${question}`;
        writeToFile(context);
    });
};

// Function call to initialize app
init();
