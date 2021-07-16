// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "BSD 3 license":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    case "BSD 2 license":
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]";
    case "GNU GPL V3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
    case "GNU GPL V2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]"
   
    case "IBM Public License Version 1.0":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
    default:
      return "";
  }
}
// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  
**${data.title}**

 ![Github Badge] (https://img.shields.io/badge/Badges-${data.badge}-green)

## Description 

${data.description}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Test](#test)
- [Repository Link](#repo)
- [GitHub Username](#username)
- [E-mail](#email)


## Installation

  ${data.installation}

## Usage

${data.usage}

## License

![Github licence](http://img.shields.io/badge/license-${data.license}-red.svg)

## Contributors

${data.contributors}

## Test

${data.test}

## Github Username

${data.username}

## E-mail
${data.email}

## Repository

- [Project Repo](${data.repo})


`;
}


module.exports = generateMarkdown;

