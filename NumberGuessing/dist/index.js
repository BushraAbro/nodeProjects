import inquirer from "inquirer";
let score = 0;
function scoreboard() {
    console.log(`YOUR SCORE
*****************
${score}
*****************`);
}
function generateNumber() {
    return Math.floor(Math.random() * 9);
}
async function getUserInput() {
    const result = await inquirer.prompt([
        { type: "number",
            name: "userGuess",
            message: "Guess the number? \n"
        }
    ]);
    let actualNumber = generateNumber();
    if (result.userGuess == generateNumber) {
        console.log(`You have got it right!
    ************!!!!!!!!!*************`);
        console.log(actualNumber);
        score++;
    }
    else {
        console.log(`Sorry! you are wrong! Try again next time`);
        console.log(actualNumber);
    }
    scoreboard();
}
async function repeatGame() {
    do {
        await getUserInput();
        var repeat = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? y/n: \n"
        });
    } while (repeat.restart == 'y' || repeat.restart == 'Y' || repeat.restart == 'yes' || repeat.restart == 'YES');
}
async function main() {
    await repeatGame();
}
main();
