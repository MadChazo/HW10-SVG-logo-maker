# SVG Logo Maker

## Table of Contents

• [Description](#description)  
• [Installation](#installation)  
• [Usage](#usage)  
• [License](#license)  
• [Tests](#tests)
• [Credits](#credits)

## Description

This application was created as a homework assignment for the University of Richmond coding boot camp. The task was to create an application capable of generating a simple SVG logo. While working on this project, I learned about SVG files and about testing applications using Jest.

## Installation

Clone this repository from GitHub. Before use, make sure you have Node.js installed, and run the `npm install` command in your terminal while in the directory containing the index.js and package.json files to install the required npm packages for this application.

## Usage

To invoke the application, make sure you are in the directory containing the index.js file in your terminal, then use the command `node index.js`. You will be prompted to answer questions pertaining to the logo you would like to create. Make sure that if you are entering a hexadecimal code you add the # to the beginning, or the color will not be applied. If you are using a color keyword and you see that your logo looks incomplete, it is possible that the color keyword was not recognized, so I reccommend using hexadecimal for very specific colors. See the sampleLogo files in the examples folder for an idea of how the finished product will look.

If everything has worked correctly, you should see a notice in the terminal that the logo has been created. The logo that is generated from your input will be named logo.svg. The file will be located in the same directory as the index.js file for this application. You are welcome to rename the file and make any other edits you see fit to make when you move it out of this directory. If you don't move the file out of the directory it is generated in, the next logo you generate will overwrite that file.


[Here is a link]() to a video demonstration of the application on Google Drive.

## License

The license that applies to this project is the MIT license. For more information about this license, please see the LICENSE file in the repo, or visit https://choosealicense.com/licenses/mit/.

## Tests

This application uses Jest version 29.7.0 for testing. Run `npm run test` to test the render function of the different shapes classes.

## Credits

This application was coded by me. The Node packages used are [Inquirer.js](https://www.npmjs.com/package/inquirer?activeTab=readme) version 8.2.4, the Node.js File System module, and [Jest.js](https://jestjs.io/) version 29.7.0 for testing. 