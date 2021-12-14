import readlineSync from 'readline-sync';

const play = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const rounds = 3;
  for (let i = 0; i <= rounds; i += 1) {
    const { question, answer } = generateRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer:');

    if (answer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default play;
