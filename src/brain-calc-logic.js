import { getRandomNum } from "./functions.js"
import greeting from './cli.js';
import readlineSync from 'readline-sync';

const operators = ["+","-","*"]
const operations = {
            "+": (a,b) => a+b,
            "-": (a,b) => a-b,
            "*": (a,b) => a*b
}


const playGame = () =>{
    
    let name;
    for(let i = 0; i<=3; i+=1){
        
        if (i===0){
            name = greeting()
            console.log("What is the result of the expression?")
        }
        if(i===3){
            console.log(`Congratulations, ${name}`)
            return
        }
        const randomNum1 = getRandomNum()
        const randomNum2 = getRandomNum()
        const index = getRandomNum(0,2)
        const operator = operators[index];
        const operation = operations[operator];

        console.log(`Question: ${randomNum1} ${operator} ${randomNum2}`)
        let answer = readlineSync.question("Your answer:")
        let realAnswer = operation(randomNum1, randomNum2)
        


    
        if (Number(answer)!==realAnswer){
            console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}.`)
            console.log(`Let's try again, ${name}`)
            return 
        }
        else{
            console.log("Correct!")
            
        }    

    }


}

export{playGame}