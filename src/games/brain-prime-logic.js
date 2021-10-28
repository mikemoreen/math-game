import { getRandomNum, isPrime } from '../utils.js';

const task = "Answer 'yes' if given number is prime. Otherwise answer 'no'."
const game = () => {
  const num = getRandomNum();
  const question = `Question: ${num}`;
  const realAnswer = isPrime(num) ? 'yes' : 'no';
  return { question, realAnswer};
};

export { task, game }
