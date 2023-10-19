// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');
const { animationFrameScheduler } = require('rxjs');


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err): console.log('Success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers)
        const readme = `
        # ${ answers.title}
        ## ${ answers.reason}
        ## ${answers.Test}
        ## ${answers.learn}
        ## ${answers.install}
        ## ${answers.alt}
        ## ${answers.deployment}
        ## ${answers.confirmCredits}
        ## ${answers.license}
        ## ${answers.confirmContribute}
        ## ${answers.install}
        ## ${answers.problem}
        ## ${answers.github}
        ## ${answers.email}
        `
        writeToFile('readme.md', readme)
    })
}

// Function call to initialize app
init();
