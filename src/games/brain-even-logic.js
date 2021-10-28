import { getRandomNum, isEven } from '../utils.js';

const task = "Answer 'yes' if the number is even, otherwise answer 'no'.";
const game = () => {
  const num = getRandomNum();
  const question = `Question: ${num}`;
  const realAnswer = isEven(num) ? 'yes' : 'no';
  return { question, realAnswer };
};

export { task, game };
