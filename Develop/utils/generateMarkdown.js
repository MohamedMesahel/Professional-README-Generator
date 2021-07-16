// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

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

