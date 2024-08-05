class Shape {
    constructor() {
        this.color = 'black';
        this.text = '';
    }
    setColor(color) { // Function to assign the shape color
        this.color = color;
    }
    setText(text) { // Function to assign the associated text
        this.text = text;
    }
    render(){ // This error function is in place to alert me (or anyone) if they forgot to implement the render function in each child class
        throw new Error('Function not implemented by child :(');
    }

}

class Triangle extends Shape {
    constructor(color, text) {
        super(color, text); // Inherits these values from its parent class, Shape
    }
    render() { // Render function should return a string that will be written to an SVG file, creating a triangle with the default color of black
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }

}

class Square extends Shape {
    constructor(color, text) {
        super(color, text); // Inherits these values from its parent class, Shape
    }
    render(){ // Render function should return a string that will be written to an SVG file, creating a square with the default color of black
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`; 
    }
} 

class Circle extends Shape{
    constructor(color, text) {
        super(color, text); // Inherits these values from its parent class, Shape
    }
    render(){ // Render function should return a string that will be written to an SVG file, creating a circle with the default color of black
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
}


