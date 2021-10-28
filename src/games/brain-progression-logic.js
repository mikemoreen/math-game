import { getRandomNum, makeProgression } from '../utils.js';

const task = 'What number is missing in the progression?';
const game = () => {
  

    const progressionLength = 10;
    const firstEl = getRandomNum(1, 20);
    const progressionStep = getRandomNum(1, 10);
    const progression = makeProgression(firstEl, progressionStep, progressionLength);
    const indexOfRemoveElement = getRandomNum(0, 9);

    const hiddenElement = progression[indexOfRemoveElement];
    progression[indexOfRemoveElement] = '..';
    const question = `Question: ${progression.join(' ')}`;
    const realAnswer = hiddenElement .toString();
    return {question, realAnswer}
    
};
export { task, game }
