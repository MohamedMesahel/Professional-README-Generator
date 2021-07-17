
// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  
  return `
# Project Title
 ${data.title}

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
 
 This project is licensed under ${data.licence}


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

