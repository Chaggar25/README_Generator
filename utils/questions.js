const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        name: 'reason',
        message: 'Why did you build this project?',
    },
    {
        name: 'Test',
        message: 'Provide instructions on how to test your application.',
    },
    {
        name: 'learn',
        message: 'What did you learn?',
    },
    {
        name: 'install',
        message: 'What are the steps required to install your project?',
    },
    {
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        name: 'image',
        message: 'Provide screenshot file name.',
    },
    {
        name: 'alt',
        message: 'Provide screenshot alt text.',
    },
    {
        name: 'deployment',
        message: 'Provide deployment link.',
    },
    {
        name: 'confirmCredits',
        type: 'confirm',
        message: 'Did you have any collaborators?',
    },
    {
        name: 'credits',
        message: 'Please list your collaborators?',
        when: (answers) => answers.confirmCredits === true,
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose a license.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'ISC License (ISC)', 'The Unlicense', 'none']
    },
    {
        name: 'confirmContribute',
        type: 'confirm',
        message: 'Would you like to allow others to contribute?',
    },
    {
        name: 'problem',
        message: 'What problem does it solve.',
    },
    {
        name: 'github',
        message: 'Provide your GitHub username.',
    },
    {
        name: 'email',
        message: 'Provide your email.',
    }
];
// Array is exported
module.exports = questions;