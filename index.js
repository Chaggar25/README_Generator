// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err): console.log('Success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
}

// Function call to initialize app
init();
