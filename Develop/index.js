// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'Please enter your project title',
            name: 'project-title',
        },
        {
            type: 'input',
            message: 'Please enter the description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter the installation instructions of your project',
            name: 'installation-instructions',
        },
        {
            type: 'input',
            message: 'Please enter the usage information of your project',
            name: 'usage-information',
        },
        {
            type: 'input',
            message: 'Please enter the contribution guidelines of your project',
            name: 'contribution-guidelines',
        },
        {
            type: 'input',
            message: 'Please enter the test instructions of your project',
            name: 'test-instructions',
        },
        {
            type: 'list',
            message: 'Please choose a license for your application',
            choices: ['None', 'Apache License 2.0', 'MIT License', 'BSD 2-Clause', 'Boost Software License 1.0'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please enter your Github username',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'email',
        },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile('./README.md', data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((inquirerResponses) => console.log('Creating README'));
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }))
}

// Function call to initialize app
init();
