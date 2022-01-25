import generateRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRound = () => {
  const randomNum1 = generateRandomNumber();
  const randomNum2 = generateRandomNumber();
  const index = generateRandomNumber(0, 2);
  const operator = operators[index];
  const operation = operations[operator];

  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const answer = operation(randomNum1, randomNum2).toString();
  return { question, answer };
};

export { description, generateRound };
