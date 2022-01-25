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
  const firstElement = generateRandomNumber(1, 20);
  const progressionStep = generateRandomNumber(1, 10);
  const progression = makeProgression(firstElement, progressionStep, progressionLength);
  const hiddenElementIndex = generateRandomNumber(0, 9);

  const hiddenElement = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = `${progression.join(' ')}`;
  const answer = hiddenElement.toString();
  return { question, answer };
};
export { description, generateRound };
