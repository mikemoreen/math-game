import readlineSync from 'readline-sync';
import { getRandomNum, isPrime } from '../utils.js';
import greeting from '../cli.js';

const playGame = () => {
  let name;
  for (let i = 0; i <= 3; i += 1) {
    if (i === 0) {
      name = greeting();
      console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
      return;
    }
    const randomNum = getRandomNum(1, 100);

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer:');

    if (isPrime(randomNum) === true && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return;
    }
    if (isPrime(randomNum) === false && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return;
    }

    console.log('Correct!');
  }
};
export { playGame };
