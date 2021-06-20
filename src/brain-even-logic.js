
import readlineSync from 'readline-sync';
import { getRandom } from "./random.js"


export const isEven = (num) => num%2===0?"yes":"no"

export const playGame = (countOfGames,name) =>{
    if(countOfGames===0){
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
        return playGame(countOfGames-1,name)
    }



}
