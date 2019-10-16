'use strict';

class Calculator {
  constructor() {
    this.symbols = [];
  }

  static NUMBERS = '0123456789';

  static OPERATIONS = {
    DIVIDE: '/',
    MULTIPLY: '*',
    ADD: '+',
    SUBTRACT: '-',
  };

  _getOperationByOperator(operator) {
    const { OPERATIONS } = Calculator;

    switch (operator) {
      case OPERATIONS.ADD:
        return this._add;
      case OPERATIONS.SUBTRACT:
        return this._subtract;
      case OPERATIONS.MULTIPLY:
        return this._multiply;
      case OPERATIONS.DIVIDE:
        return this._divide;
    }
  }

  _parseString(string) {
    const splittedString = string
      .split('')
      .filter(element => element !== ' ')
      .map((element, index) =>
        Calculator.NUMBERS.includes(element) ? Number(element) : element,
      );
    let joinedNumbersStr = [];
    joinedNumbersStr = splittedString.reduce(
      (acc, symbol, symbolIndex, splitedString) => {},
      [],
    );

    console.log('splittedString from this._parseString()', splittedString);
    return splittedString;
  }

  tryCalculate(str) {
    this.symbols = this._parseString(str);

    this._countMultiplicationAndDivision();
    this._countSubtractionAndAddition();

    return this.symbols;
  }

  // 3 + 5 + (6 * 7) + (4 / 6)
  // 3 + 5 + 42 + 0.66667
  _countOperation(indexOperator, operator) {
    const operation = this._getOperationByOperator(operator);
    // take 2 symbols between operator and count this operation with them
    const result = operation(
      this.symbols[indexOperator - 1],
      this.symbols[indexOperator + 1],
    );
    this.symbols.splice(indexOperator - 1, 3, result);
  }

  _countMultiplicationAndDivision() {
    while (true) {
      const indexMultiply = this.symbols.indexOf(
        Calculator.OPERATIONS.MULTIPLY,
      );
      const indexDivide = this.symbols.indexOf(Calculator.OPERATIONS.DIVIDE);

      if (indexMultiply > 0) {
        this._countOperation(indexMultiply, Calculator.OPERATIONS.MULTIPLY);
      } else if (indexDivide > 0) {
        this._countOperation(indexDivide, Calculator.OPERATIONS.DIVIDE);
      } else {
        break;
      }
    }
  }

  _countSubtractionAndAddition() {
    while (true) {
      const indexAdd = this.symbols.indexOf(Calculator.OPERATIONS.ADD);
      const indexSubtract = this.symbols.indexOf(
        Calculator.OPERATIONS.SUBTRACT,
      );

      if (indexAdd > 0) {
        this._countOperation(indexAdd, Calculator.OPERATIONS.ADD);
      } else if (indexSubtract > 0) {
        this._countOperation(indexSubtract, Calculator.OPERATIONS.SUBTRACT);
      } else {
        break;
      }
    }
  }

  _add(a, b) {
    return a + b;
  }
  _subtract(a, b) {
    return a - b;
  }
  _multiply(a, b) {
    return a * b;
  }
  _divide(a, b) {
    return a / b;
  }
}

const calculator = new Calculator();
console.log(calculator.tryCalculate('6 + 4 * 89 * 9 * 4 + 5 * 7 / 5'));

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const resarr = arr.reduce((acc, number, numberIndex) => {
  console.log('acc', acc);  
  console.log('number', number);
  console.log('numberIndex', numberIndex);
  acc.push(number);
  return acc;
}, []);

console.log('resarr:', resarr);