const firstNumInput = document.querySelector('.first-num');
const secondNumInput = document.querySelector('.second-num');
const signSelect = document.querySelector('.sign');
const resultTitle = document.querySelector('.result-value');
const resultBtn = document.querySelector('.result-btn');
const resetBtn = document.querySelector('.reset-btn');

const OPERATIONS = {
  sum: '+', subtract: '-', multiply: '*', divide: '/',
};

const calculateData = {
  num1: '', num2: '', sign: '+', result: '',
};

function calculate({ num1, num2, sign }) {
  switch (sign) {
    case OPERATIONS.sum:
      calculateData.result = sum(num1, num2);
      break;
    case OPERATIONS.subtract:
      calculateData.result = subtract(num1, num2);
      break;
    case OPERATIONS.multiply:
      calculateData.result = multiply(num1, num2);
      break;
    case OPERATIONS.divide:
      calculateData.result = divide(num1, num2);
      break;
  }
}

function sum(num1, num2) {
  return (+num1) + (+num2);
}

function subtract(num1, num2) {
  return (+num1) - (+num2);
}

function multiply(num1, num2) {
  return (+num1) * (+num2);
}

function divide(num1, num2) {
  return (+num1) / (+num2);
}

function resetCalculate() {
  calculateData.num2 = '';
  calculateData.num1 = '';
  calculateData.sign = '+';
  calculateData.result = '';
  resultTitle.textContent = '...';
  firstNumInput.value = '';
  secondNumInput.value = '';
  signSelect.value = '+';
}



firstNumInput.addEventListener('keyup', function(e) {
  calculateData.num1 = e.target.value;
});

secondNumInput.addEventListener('keyup', function(e) {
  calculateData.num2 = e.target.value;
});

signSelect.addEventListener('change', function(e) {
  calculateData.sign = e.target.value;
});

resultBtn.addEventListener('click', function(e) {
  calculate(calculateData);
  resultTitle.textContent = calculateData.result;
});

resetBtn.addEventListener('click', resetCalculate);

