// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generatePage = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please Provide your project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "list",
        name: "licence",
        message: "Please provide the project licence from the list or your badge link",
        choices: ["Apache License 2.0",
            "BSD 3 license",
            "BSD 2 license",
            "GNU General Public License(GPL)",
            "GNU Library",
            "MIT license",
            "Mozilla Public License 2.0",
            "Common Development and Distribution License",
            "Eclipse Public License version 2.0", "No License"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, 
    data, (err) => err ? console.error(err) : console.log('Your README file has been successfully created!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdownString = generateMarkdown(answers);
            writeToFile("README.md", markdownString);
        });
}

// Function call to initialize app
init();
// Use `Inquirer.prompt().then((answers) => {}) ` to prompt the user for answers
// Then we'll use the user's `answers` to generatmarkdown (answers)
// and store the result in `markdownText`
// Use the generated `markdownText` to `writefile`
// Function call to initialize app
