// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generatePage = require("./utils/generateMarkdown");

// TODO: Create a function to initialize app
function init() {
    inquirer
    // TODO: Create an array of questions for user input
        .prompt([
            {
                type: "input",
                name: "title",
                message: "Please Provide your project title?",
                validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
            },
            {
                type: "input",
                name: "badge",
                message: "Please provide the badges links that you want",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "description",
                message: "Please provide your project's description",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "installation",
                message: "Please provide the installation instructions",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "usage",
                message: "Please provide the project usage",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "list",
                name: "license",
                message: "Please provide the project licence from the list or your badge link",
                choices: ["Apache License 2.0",
                    "BSD 3 license",
                    "BSD 2 license",
                    "GNU GPL V3",
                    "GNU GPL",
                    "MIT license",
                    "Mozilla Public License 2.0",
                    "N/A License"],
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "contributors",
                message: "Please provide the contributing parties",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "test",
                message: "Please provide the project tests",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "username",
                message: "Github Username?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "email",
                message: "E-mail?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "repo",
                message: "What is your repo link?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
        ])
        .then((answers) => {
            const markdownString = generatePage(answers);
            writeToFile("README.md", markdownString);
        });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`,
        data, (err) => err ? console.error(err) : console.log('Your README file has been successfully created!'));
}
// Function call to initialize app
init();
// Use `Inquirer.prompt().then((answers) => {}) ` to prompt the user for answers
// Then we'll use the user's `answers` to generatmarkdown (answers)
// and store the result in `markdownText`
// Use the generated `markdownText` to `writefile`
// Function call to initialize app
