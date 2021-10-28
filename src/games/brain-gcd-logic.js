import { getRandomNum, findGcd } from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';
const game = () => {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  const realAnswer = findGcd(randomNum1, randomNum2).toString();
  const question = `Question: ${randomNum1} ${randomNum2}`;
  return { question, realAnswer };
};
export { task, game };
