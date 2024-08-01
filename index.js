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
        console.log(response.logoShape);
        fs.writeFile('logo.svg',createShape(response), (error) =>
            error ? console.error(`Sorry, something went wrong: ${error}`) : console.log('Successfully generated logo.svg!')
    );
     //   console.log('thanks!');
    })

function createShape(response) {
        let newLogo;
        switch(response.logoShape) {
            case 'Triangle':
                newLogo = new Shapes.Triangle();
                break;
            case 'Square':
                newLogo = new Shapes.Square();
                break;
            case 'Circle':
                newLogo = new Shapes.Circle();
                break;
        } 
        newLogo.setColor(response.logoColor);
        newLogo.setText(response.logoText);
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g>
            ${newLogo.render()}
            <text x="50%" y="50%" font-variant="small-caps" font-size="75%" dominant-baseline="middle" text-anchor="middle" fill="white">${response.logoText}</text>
        </g>
</svg>`;


    }

    