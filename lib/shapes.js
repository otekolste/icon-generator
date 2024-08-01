class Shape {
    constructor() {
        this.color = 'blue';
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

module.exports = {
    Shape,
    Triangle
}


