//1. deposite moneuyy
//2. Determine number of lines to bet o
//3. collect a bet amount
//4. Spin the slot machine
//5. Check if the user won or lost
//6. if won +> give users there winning
//7. play again

/*
function deposit0(){
 return 1
}*/

//deposit()
//import package
const prompt = require("prompt-sync")();


const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numuberDepositAmount = parseFloat(depositAmount); // convert collected string to a float 0.0

        // check if number is valid, (isNaN()) checks if something is not a number

        if(isNaN(numuberDepositAmount) || numuberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again. ");
        } else {
            return numuberDepositAmount;
        }
    } 
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines); // convert collected string to a float 0.0
    
        // check if number is valid, (isNaN()) checks if something is not a number
    
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again. ");
        } else {
            return numberOfLines;
        }
     } 
    };
    
const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet); // convert collected string to a float 0.0
    
        // check if number is valid, (isNaN()) checks if something is not a number
    
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
            console.log("Invalid bet, try again. ");
        } else {
            return numberBet;
        }
     } 
    };


let balance = deposit();
const lines = getNumberOfLines();
const bet = getBet();

console.log(lines);
console.log(balance);
console.log(bet);
