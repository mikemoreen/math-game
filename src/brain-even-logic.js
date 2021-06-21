
import readlineSync from 'readline-sync';
import { getRandom } from "./random.js"
import greeting from './cli.js';

export const isEven = (num) => num%2===0?"yes":"no"

export const playGame = () =>{
    
    let name;
    for(let i = 0; i<=3; i+=1){
        if (i===0){
            name = greeting()
        }
        if(i===3){
            return `Congratulations, ${name}`
        }
        const randomNum = getRandom()
        console.log(`Question: ${randomNum}`)
        let answer = readlineSync.question("Your answer:")
        if(answer!=="no" && answer!=="yes"){
            answer ="no"
        }


    
        if (isEven(randomNum)==="yes" && answer ==="no"){
            
            return "'no' is wrong answer ;(. Correct answer was 'yes'."
        }
        else if (isEven(randomNum)==="no" && answer ==="yes"){
            
            return "'yes' is wrong answer ;(. Correct answer was 'no'."
        }
        else{
            console.log("Correct!")
            
        }    

    }
    
    
    
    


}
