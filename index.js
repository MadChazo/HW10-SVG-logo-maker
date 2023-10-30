// Packages needed for this app
const fs = require("fs");
const inquirer = require("inquirer");
const generateSVG = require("./lib/generateSVG.js")

//Questions array
const questions = [
  {
    type: "input",
    message: "Enter up to three characters for your logo.",
    name: "text",
    default: "",
    validate: function (input) {
      if (input.length > 3) {
        return "Text is too long.";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Enter a color keyword or a hexadecimal number for your text.",
    name: "textColor",
    default: "white",
  },
  {
    type: "list",
    message: "Choose a shape for your logo.",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
    default: "Circle",
  },
  {
    type: "input",
    message: "Enter a color keyword or a hexadecimal number for your shape.",
    name: "shapeColor",
    default: "black",
  },
];

// Write to SVG file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Logo created.")
  );
}

// Initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    var svgText = generateSVG(answers);
    writeToFile("logo.svg", svgText);
  });
}

// Function call to initialize app
init();
