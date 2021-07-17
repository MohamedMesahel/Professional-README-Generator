// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generatePage = require("./utils/generateMarkdown");

// Create a function to initialize app
function init() {
    inquirer
        // Create an array of questions for user input
        // Use `Inquirer.prompt().then((answers) => {}) ` to prompt the user for answers
        .prompt([
            {
                type: "input",
                name: "title",
                message: "Please Provide your project title?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
            },
            {
                type: "input",
                name: "badge",
                message: "Please provide the badges links that you want to add?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "description",
                message: "What is your project's description?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "installation",
                message: "Please provide the installation instructions?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "usage",
                message: "Please provide the project usage?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "list",
                name: "licence",
                message: "Please chose the project licence from the list?",
                choices: [
                    "Apache License 2.0 ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg) \nLink to opensource License (https://opensource.org/licenses/Apache-2.0)",
                    "BSD 3 license ![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg) \nLink to opensource License (https://opensource.org/licenses/BSD-3-Clause)",
                    "BSD 2 license ![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg) \nLink to opensource License (https://opensource.org/licenses/BSD-2-Clause)",
                    "IBM Public License Version 1.0 ![License](https://img.shields.io/badge/License-IPL%201.0-blue.svg) \nLink to opensource License (https://opensource.org/licenses/IPL-1.0)",
                    "MIT license ![License](https://img.shields.io/badge/License-MIT-yellow.svg) \nLink to opensource License (https://opensource.org/licenses/MIT)",
                    "Mozilla Public License 2.0 ![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg) \nLink to opensource License (https://opensource.org/licenses/MPL-2.0)",
                    "N/A License"],
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "contributors",
                message: "Please provide the contributing parties?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "test",
                message: "Please provide the project tests?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "username",
                message: "What is your github user name?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "email",
                message: "What is your E-mail?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
            {
                type: "input",
                name: "repo",
                message: "What is your repo link?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            },
        ])
        // Then we'll use the user's `answers` to generatmarkdown (answers)
        // and store the result in `markdownText`
        .then((answers) => {
            const markdownString = generatePage(answers);
            writeToFile("README.md", markdownString);
        });
}

// Create a function to write README file         
// Use the generated `markdownText` to `writefile`

function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`,
        data, (err) => err ? console.error(err) : console.log('Your README file has been successfully created!'));
}
// Call to initialize app
init();

