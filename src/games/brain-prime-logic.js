import generateRandomNumber from '../utils.js';

const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
const generateRound = () => {
  const num = generateRandomNumber();
  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return { question, answer };
};

export { description, generateRound };
