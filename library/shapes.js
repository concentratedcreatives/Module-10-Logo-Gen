<<<<<<< HEAD
//Deines the Shape class
class Shape {
    constructor() { this.color = 'white'; }
    setColor(color) { this.color = color; }
}
//Defines the Circle, Triangle, and Square classes
class Circle extends Shape { render() { return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`; } }
class Triangle extends Shape { render() { return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`; } }
class Square extends Shape { render() { return `<rect x="50" y="30" width="200" height="200" fill="${this.color}" />`; } }

//Export the Classes
=======
//Deines the Shape class
class Shape {
    constructor() { this.color = 'white'; }
    setColor(color) { this.color = color; }
}
//Defines the Circle, Triangle, and Square classes
class Circle extends Shape { render() { return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`; } }
class Triangle extends Shape { render() { return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`; } }
class Square extends Shape { render() { return `<rect x="50" y="30" width="200" height="200" fill="${this.color}" />`; } }

//Export the Classes
>>>>>>> 3858ae6d5eeb67ce2df34d92c63ea7a3359b210a
module.exports = { Triangle, Square, Circle };