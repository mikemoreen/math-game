
import readlineSync from 'readline-sync';
import { getRandomNum, isEven } from "./functions.js"
import greeting from './cli.js';



export const playGame = () =>{
    
    let name;
    for(let i = 0; i<=3; i+=1){
        if (i===0){
            name = greeting()
            console.log("Answer 'yes' if the number is even, otherwise answer 'no'.")
        }
        if(i===3){
            console.log(`Congratulations, ${name}`)
            return
        }
        const randomNum = getRandomNum()
        console.log(`Question: ${randomNum}`)
        let answer = readlineSync.question("Your answer:")
        if(answer!=="no" && answer!=="yes"){
            answer ="no"
        }


    
        if (isEven(randomNum)==="yes" && answer ==="no"){
            
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.")
            return
        }
        else if (isEven(randomNum)==="no" && answer ==="yes"){
            
            rconsole.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
            return 
        }
        else{
            console.log("Correct!")
            
        }    

    }
    
    
    
    


}
