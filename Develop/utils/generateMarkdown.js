// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '[License](#license)';
  } return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return '## License'
  } return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project-title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. ${renderLicenseLink(data.license)}
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
${data.installation-instructions}

## Usage
${data.usage-information}

${renderLicenseSection(data.license)}

## Contributing
${data.contribution-guidelines}

## Tests
${data.test-instructions}

## Questions
This is the link to my Github profile: https://github.com/${data.username}
If you have additional question, this is my email address: ${data.email}




`;
}

module.exports = generateMarkdown;
