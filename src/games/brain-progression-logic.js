import readlineSync from 'readline-sync';
import { getRandomNum, makeProgression } from '../utils.js';
import greeting from '../cli.js';

const playGame = () => {
  let name;
  for (let i = 0; i <= 3; i += 1) {
    if (i === 0) {
      name = greeting();
      console.log('What number is missing in the progression?');
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
      return;
    }

    const progressionLength = 10;
    const firstEl = getRandomNum(1, 20);
    const progressionStep = getRandomNum(1, 10);
    const progression = makeProgression(firstEl, progressionStep, progressionLength);
    const indexOfRemoveElement = getRandomNum(1, 10);

    const hiddenElement = progression[indexOfRemoveElement];
    progression[indexOfRemoveElement] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer:');

    if (Number(answer) === hiddenElement) {
      console.log('Correct!');
    } else {
      console.log(`"${answer} is wrong answer ;(. Correct answer was ${hiddenElement}."`);
      return;
    }
  }
};
export default playGame;
