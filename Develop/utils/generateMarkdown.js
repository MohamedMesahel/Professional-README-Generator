// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  
**${data.title}**

 ![Github Badge] (https://img.shields.io/badge/Badges-${data.badge}-green)

## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#tests)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
- [Questions](#questions)


## Installation

  ${data.install}

## Usage

${data.usage}

## Licence

![Github licence](http://img.shields.io/badge/license-${data.license}-red.svg)

## Contributors

${data.contributors}

## Test

${data.test}


## Repository

- [Project Repo](${data.repo})

## GitHub

- [GitHub Profile](${githubInfo.profile})
## Questions
  If you have any questions about this projects, please contact me directly at ${githubInfo.email}. 
  You can view more of my projects at https://github.com/${data.github}.
`;
}


module.exports = generateMarkdown;

