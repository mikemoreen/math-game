import { getRandomNum } from '../utils.js';

const task = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const game = () => {
  const randomNum1 = getRandomNum();
  const randomNum2 = getRandomNum();
  const index = getRandomNum(0, 2);
  const operator = operators[index];
  const operation = operations[operator];

  const question = `Question: ${randomNum1} ${operator} ${randomNum2}`;
  const realAnswer = operation(randomNum1, randomNum2).toString();
  return { question, realAnswer };
};

export { task, game };
