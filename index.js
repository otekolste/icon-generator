const inquirer = require('inquirer');
const Shapes = require('./lib/shapes.js');
const fs = require('fs');
const checkInput = require('./lib/checkInput');

inquirer
    .prompt([ // Sets up inquirer prompts
        { // Gets the text to go into the logo
            type:'input',
            message: 'Welcome to the logo generator! To start, please enter what text you would like to display, up to 3 characters:',
            name: 'logoText',
            validate: checkInput.check // This function ensures the user has inputed no more than 3 characters
        },
        { // Gets the color for the text
            type:'input',
            message: 'Now, input a color keyword or code for your text:',
            name: 'logoTextColor'

        },
        { // Gets the shape of the logo
            type: 'list',
            message: 'Next, pick your desired shape:',
            name: 'logoShape',
            choices: ['Triangle','Circle','Square']

        },
        { // Gets the color of the shape for the logo
            type: 'input',
            message: 'Finally, enter a color keyword or code for your shape:',
            name: 'logoColor',
        }
    ])
    .then((response) => { // Takes the information, creates the logo from it, and writes it to "logo.svg"
        fs.writeFile('logo.svg',createShape(response), (error) =>
            error ? console.error(`Sorry, something went wrong: ${error}`) : console.log('Successfully generated logo.svg!') // If there's an error, it will be written to the console
    );
    })
    .catch((error) => {
        console.log(`Sorry, something went wrong: ${error}`) // If something goes wrong during the previous async functions, it will print a message to the console
        
    })

function createShape(response) {
        let newLogo;
        switch(response.logoShape) { // Checks which shape the user selected, and creates the object accordingly
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
        newLogo.setColor(response.logoColor); // Sets the color of the shape from the user input
        newLogo.setText(response.logoText); // Sets the text in the shape from the user input
        // Returns a string that will be written to an SVG file, 300x200, that takes all of the user input and puts it into the logo
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
        <g>
            ${newLogo.render()}
            <text x="50%" y="50%" font-variant="small-caps" font-size="300%" dominant-baseline="middle" text-anchor="middle" fill="${response.logoTextColor}">${response.logoText}</text>
        </g>
</svg>`;

    }


    