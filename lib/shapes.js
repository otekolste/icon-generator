class Shape {
    constructor() {
        this.color = 'black';
        this.text = '';
    }
    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text;
    }
    render(){
        throw new Error('Function not implemented by child :(');
    }

}

class Triangle extends Shape {
    constructor(color, text) {
        super(color, text);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }

}

class Square extends Shape {
    constructor(color, text) {
        super(color, text);
    }
    render(){
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    }
} 

class Circle extends Shape{
    constructor(color, text) {
        super(color, text);
    }
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
}


