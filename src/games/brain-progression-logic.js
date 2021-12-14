import generateRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const makeProgression = (firstElementOfProgression, progressionStep, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstElementOfProgression + progressionStep * i;
  }
  return progression;
};
const generateRound = () => {
  const progressionLength = 10;
  const firstEl = generateRandomNumber(1, 20);
  const progressionStep = generateRandomNumber(1, 10);
  const progression = makeProgression(firstEl, progressionStep, progressionLength);
  const indexOfRemoveElement = generateRandomNumber(0, 9);

  const hiddenElement = progression[indexOfRemoveElement];
  progression[indexOfRemoveElement] = '..';
  const question = `Question: ${progression.join(' ')}`;
  const answer = hiddenElement.toString();
  return { question, answer };
};
export { description, generateRound };
