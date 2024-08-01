const inquirer = require('inquirer');
const Shapes = require('./lib/shapes.js');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'Welcome to the logo generator! Please get started by picking your desired shape:',
            name: 'logoShape',
            choices: ['Triangle','Circle','Square']

        },
        {
            type: 'list',
            message: 'Next, pick a color:',
            name: 'logoColor',
            choices: ['red','orange','yellow','green','blue','purple','pink']
        },
        {
            type:'input',
            message: 'Finally, enter what text you would like to display:',
            name: 'logoText'
        }
    ])
    .then((response) => {
        console.log('thanks!');
    })