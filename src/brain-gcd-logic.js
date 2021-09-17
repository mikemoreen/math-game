import readlineSync from 'readline-sync';
import { getRandomNum, findGcd } from './functions.js';
import greeting from './cli.js';

const playGame = () => {
  let name;
  for (let i = 0; i <= 3; i += 1) {
    if (i === 0) {
      name = greeting();
      console.log('Find the greatest common divisor of given numbers.');
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
      return;
    }
    const randomNum1 = getRandomNum(1, 100);
    const randomNum2 = getRandomNum(1, 100);
    const gcd = findGcd(randomNum1, randomNum2);

    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const answer = readlineSync.question('Your answer:');

    if (Number(answer) === gcd) {
      console.log('Correct!');
    } else {
      console.log(`"${answer} is wrong answer ;(. Correct answer was ${gcd}."`);
      return;
    }
  }
};
export { playGame };
