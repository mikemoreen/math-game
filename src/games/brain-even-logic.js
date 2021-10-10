import readlineSync from 'readline-sync';
import { getRandomNum, isEven } from '../utils.js';
import greeting from '../cli.js';

const playGame = () => {
  let name;
  for (let i = 0; i <= 3; i += 1) {
    if (i === 0) {
      name = greeting();
      console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const randomNum = getRandomNum();
    console.log(`Question: ${randomNum}`);
    let answer = readlineSync.question('Your answer:');
    if (answer !== 'no' && answer !== 'yes') {
      answer = 'no';
    }

    if (isEven(randomNum)&& answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return;
    }
    if (!isEven(randomNum)&& answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return;
    }

    console.log('Correct!');
  }
};
export default playGame;