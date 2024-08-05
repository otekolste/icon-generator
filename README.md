# Icon Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description
For freelance developers who want to bolster their own profiles by creating webpages and applications, creating a logo for your fresh site can be a frustrating endeavor, especially if you're not artistically-inclined. This application aims to take the pain out of logo creation by allowing users to generate a simple geometric logo that displays text, up to 3 characters, and is color-customizable. 
Creating this project allowed me to practice the process of test-driven development: when creating the shape classes and functions, I followed the cycle of writing a failing test, writing a passing test, refactoring the code, and so on. I also created this project via object-oriented programming; the various shape classes and associated functions, in particular, reflect this. Furthermore, I continued to get practice using the inquirer package and asyncronous programming, and got to learn about the basics of SVG files through writing code to generate them!  

## Installation
Make sure you have node installed on your machine!
Download the contents of the repo by clicking the green <>CODE button on the top right of the GitHub page. Once you've downloaded it and extracted the files, open it up in your desired IDE. You can open a terminal directly in VS code or navigate to the folder in your terminal. Make sure to run "npm i" to download the inquirer and jest packages.

## Usage
If you want to check out the tests, you can run "npm test" in the termianl and check the output in your terminal.
To start the application itself, run "node index." Follow the prompts in the terminal to create your logo! It will ask you to input text up to 3 characters (try to input more than 3 characters - it will correct you!), color for your text (can be a color word or hex code), pick a shape from a list of 3, then pick a color for your shape. The code will do the rest for you!
Once you've finished, the icon will be generated into a file entitled "logo.svg." Check out some examples in the "examples" folder as well.

Check out a walkthrough video [here.](https://app.screencastify.com/v3/watch/WuyKuyx9HCuzYi1h24Br)

## Credits

I used the [inquirer package](https://www.npmjs.com/package/inquirer) for the prompting and the [https://www.npmjs.com/package/jest?activeTab=readme](jest package) for testing.

## License

This project covered by the MIT license. You can check it out in the file entitled "LICENSE" or by clicking the badge at the top of this page.


