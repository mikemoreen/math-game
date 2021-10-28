import greeting from './cli.js';
import readlineSync from 'readline-sync';

const play = (task, game) => {
    
        let name = greeting();
        console.log(task);
          
        for (let i = 0; i <= 3; i += 1) {
          
          if (i === 3) {
            console.log(`Congratulations, ${name}!`);
            return;
          }
          const { question, realAnswer} = game();
          console.log(question);
          const answer = readlineSync.question('Your answer:');
      
          if (answer !== realAnswer) {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
            console.log(`Let's try again, ${name}!`);
            return;
          }
      
          console.log('Correct!');
        }
      
}
export default play