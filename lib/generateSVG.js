// Requires shapes.js classes
const shapes = require("./shapes.js");

// Generates SVG text for any shape
function generateSVG(data) {
  if (data.shape === "Circle") {
    var newShape = new shapes.Circle();
  } else if (data.shape === "Triangle") {
    var newShape = new shapes.Triangle();
  } else if (data.shape === "Square") {
    var newShape = new shapes.Square();
  }
  newShape.setColor(data.shapeColor);
  newShape.setText(data.text, data.textColor);
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${newShape.render()}
  ${newShape.addText()}
  </svg>`;
}

module.exports = generateSVG;
