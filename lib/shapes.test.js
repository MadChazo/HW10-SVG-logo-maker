const shapes = require("./shapes.js");

// Shape render tests
describe("shapes", () => {
  describe("Circle render", () => {
    it("should output XML usable to create a circle in an SVG file", () => {
      const shape = new shapes.Circle();
      shape.setColor("#ff0000");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="75" fill="#ff0000" />'
      );
    });
  });
  describe("Triangle render", () => {
    it("should output XML usable to create a triangle in an SVG file", () => {
      const shape = new shapes.Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
  describe("Square render", () => {
    it("should output XML usable to create a square in an SVG file", () => {
        const shape = new shapes.Square();
        shape.setColor("black")
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="black" />')
    })
  })
});
