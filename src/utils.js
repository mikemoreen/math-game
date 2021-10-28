const getRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

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

const makeProgression = (firstElementOfProgression, progressionStep, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstElementOfProgression + progressionStep * i;
  }
  return progression;
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export {
  getRandomNum,
  isEven,
  findGcd,
  makeProgression,
  isPrime,
};
