import generateRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const findGcd = (firstNumber, secondNumber) => {
  const minNumber = Math.min(firstNumber, secondNumber);
  const maxNumber = Math.max(firstNumber, secondNumber);
  const remainder = maxNumber % minNumber;

  if (minNumber === 0) {
    return maxNumber;
  }
  if (remainder === 0) {
    return minNumber;
  }

  return findGcd(remainder, minNumber);
};
const generateRound = () => {
  const randomNum1 = generateRandomNumber(1, 100);
  const randomNum2 = generateRandomNumber(1, 100);
  const answer = findGcd(randomNum1, randomNum2).toString();
  const question = `Question: ${randomNum1} ${randomNum2}`;
  return { question, answer };
};
export { description, generateRound };
