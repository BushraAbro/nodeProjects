#!//usr/bin/env.node
import inquirer from 'inquirer';
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import Choices from "inquirer/lib/objects/choices.js";

const sleep =()=> {
    return new Promise(
        (res)=>{
            setTimeout(res,2000);
    })
}
async function welcomeScreen() 
{
let title = chalkAnimation.glitch("Simple Calculator");   
await sleep(); 
title.stop();
console.log(` _____________________
| ___________________ |
||                0. ||
||___________________||
|  ___ ___ ___     _  |
| | 7 | 8 | 9 |   |x| |
| |___|___|___|   |_| |
| | 4 | 5 | 6 |   |-| |
| |___|___|___|   |_| |
| | 1 | 2 | 3 |   |+| |
| |___|___|___|   |_| |
| | . | 0 | = |   |/| |
| |___|___|___|   |_| |
| ____________________|`)
}
function calculate(operator:string, num1: number, num2:number){
  switch(operator){
    case "Addition":
      return num1+num2;
    case "Multiplication":
      return num1*num2;
    case "Subtraction":
      return num1-num2;
    case "Division":
      return num1/num2;
    default:
      return "Invalid operator";

  }
}
async function getInput() {
   const answers= await inquirer.prompt([
        {
            type:"list",
            name:"operator",
            message: "which operation you want to perform? \n",
            choices:["Multiplication", "Subtraction","Addition", "Division" ]
        },
        {
            type:"number",
            name:"num1",
            message:"Enter first number? \n"
        },
        {
        type:"number",
        name:"num2",
        message:"Enter second number? \n"
    }
])
   const result = calculate(answers.operator, answers.num1, answers.num2);
   console.log(`Result: ${result}`);
   };
 async function repeatCalc() {
    do{
      await getInput();
        var repeat = await inquirer.prompt({
            type:"input",
            name: "restart",
            message:"Do you want to continue? y/n: \n"
            
        });
    }while(repeat.restart == 'y'|| repeat.restart== 'Y' || repeat.restart == 'yes' || repeat.restart=='YES');
    
} 
async function  main(){
  welcomeScreen();
  await repeatCalc();
}
main();