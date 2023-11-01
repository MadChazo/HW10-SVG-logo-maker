// Superclass Shape
class Shape {
  constructor() {}
  setColor(color) {
    this.color = color;
  }
  setText(text, color) {
    this.text = text;
    this.textColor = color;
  }
}

// Circle class
class Circle extends Shape {
  constructor() {
    super();
  }
  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
  }
  addText() {
    return `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}" font-family="serif" font-size="45">
${this.text}
</text>`;
  }
}

// Triangle class
class Triangle extends Shape {
  constructor() {
    super();
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
  addText() {
    return `<text x="50%" y="75%" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}" font-family="serif" font-size="45">
${this.text}
</text>`;
  }
}

// Square class
class Square extends Shape {
  constructor() {
    super();
  }
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
  }
  addText() {
    return `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}" font-family="serif" font-size="45">
${this.text}
</text>`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
