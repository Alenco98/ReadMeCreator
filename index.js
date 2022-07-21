// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO Create an array of questions
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "ProjectTitle",
            message: "Please enter a project title",
        },
        {
            type: "input",
            name: "Description",
            message: "Input a description of this project",
        },

        {
            type: "input",
            name: "installation",
            message: "How do I install this project?",
        },
        {
            type: "input",
            name: "test",
            message: "How do I even test this program?",
        },

        {
            type: "input",
            name: "usage",
            message: "What do I do with this project? How do I use it?",
        },
        {
            type: "input",
            name: "Contributing",
            message: "How did you even contribute to this?",
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username",
        },   
        {
            type: "input",
            name: "email",
            message: "Please type your email?",
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license do you want ?",
            choices: ["MIT", "APACHE-2.0", "GPL", "BSD3.0", "None"]
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(answer) {
    return `
# ${answer.ProjectTitle}
 ## Project description
${answer.Description}
  ## Table of Contents ##
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Licence](#Wireframe)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Question](#Question)
## Installation
To install necessary Dependencies, Run the following Command line :
\'\'\'
${answer.installation}
\'\'\'
## Usage
${answer.usage}
## Contributing 
${answer.Contributing}
 ## Tests
 In order to test This Application run the command line :
 \'\'\'
 ${answer.test}
 \'\'\'
 ## Question
My Contact :
<img src="https://github.com/${answer.github}.png" alt="GitHub Profile Pic" width="125" height="125">
- Github Account :  [${answer.github}](https://github.com/${answer.github})
- Email Address :  ${answer.email}
  `;
}

// TODO: Create a function to initialize app
init()
    .then(answer => {
        const md = writeToFile(answer);
        return writeFileAsync("README.md", md)
    })
    .then(() => console.log("successfully  generate README.md"))
    .catch(err => console.log(err));

    