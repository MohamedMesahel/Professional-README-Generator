// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)] ";
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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3 license":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2 license":
      return "(https://opensource.org/licenses/BSD-2-Clause)";
    case "GNU GPL V3":
      return "(https://www.gnu.org/licenses/gpl-3.0)"
    case "GNU GPL V2":
      return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"

    case "IBM Public License Version 1.0":
      return "(https://opensource.org/licenses/IPL-1.0)";
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadgeAndBadge(license) {
  switch (license) {
    case "N/A License":
      return "";
    default:
      return `${renderLicenseBadge(license)}${renderLicenseLink(license)} \n\n`;
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

This project is license under ${renderLicenseBadgeAndBadge(data.license)}

## Contributors

${data.contributors}

## Test
 Unit test are written in ${data.test}.


## Github Username

${data.username}

## E-mail
${data.email}

## Repository

- [Project Repo](${data.repo})


`;
}


module.exports = generateMarkdown;

