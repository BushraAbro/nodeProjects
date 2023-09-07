import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation from "chalk-animation";

let score =0;

const sleep =()=> {
    return new Promise(
        (res)=>{
            setTimeout(res,2000);
    })
}
async function welcomeScreen() 
{
let title = chalkAnimation.neon(`Number Guessing Game \n`);   
await sleep(); 
title.stop();
}

function scoreboard(){
console.log(chalk.yellowBright(`
            YOUR SCORE
        *****************
                ${score}
        *****************`))
}
function generateNumber(){
    return Math.floor(Math.random()*9);

}

async function  getUserInput(){
    let actualNumber = generateNumber();
    for(let i =0; i<3; i++){
    const result = await inquirer.prompt(
    [
        {type:"number",
        name:"userGuess",
    message: "Guess the number \n  "
}]
)
if(result.userGuess == actualNumber){
    console.log(chalk.greenBright(`        Congratulations! You have got it right!
       ***************!!!!!!!!!****************
    `))
    score++;
    break;
}
else {
   // console.log(`Sorry! you are wrong! Try again`);
    console.log(`Wrong! you are left with `+ chalk.bold(` ${3-(i+1)} `)+`attempt(s) \n `);
}
}
console.log(`       The actual Number is `+chalk.bold.blueBright(`${actualNumber}`))
scoreboard();
}

async function repeatGame() {
    do{
      await getUserInput();
        var repeat = await inquirer.prompt({
            type:"input",
            name: "restart",
            message:"Do you want to continue? y/n: \n"
            
        });
    }while(repeat.restart == 'y'|| repeat.restart== 'Y' || repeat.restart == 'yes' || repeat.restart=='YES');
    
} 
async function main() {
    await welcomeScreen();
   await repeatGame();
}
main();