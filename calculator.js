class Calculator {
    constructor(value1, value2){
        this.a = value1;
        this.b = value2;
        this.addition = this.a + this.b;
        this.multiply = this.a * this.b;
        this.subtract = this.a - this.b;
        this.divide = this.a / this.b;
    }
}

module.exports = Calculator;