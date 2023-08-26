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

const ROWS = 3;
const COLS = 3;

// number of symbols in each wheel
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

// symbols payout multuiplier (bet * value)

const SYMBOLS_VALUES = {
    A: 5,
    5: 4,
    C: 6,
    D: 2
}

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

// spin function

const spin = () => {
    const symbols = [];
    for(const[symbol, count] of Object.entries(SYMBOLS_COUNT)){
        //console.log(symbol, count);
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
   // console.log(symbols);
   const reels = [];
    for(let i = 0; i< COLS; i++){//generate values of each column
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j =0; j<ROWS; j++){
            //Math.floor(Math.random() * (max - min + 1)) + min, where min is the minimum value and max is the maximum value
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);// round= down so that you never a value greater than the length
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);

        }
    } 
    return reels;
};
//transpose matrix (2d array)
//transpose array to clearly show the user their latest spin results.

/*
[[a, b, c], [d, d, d], [a, a, a]]
[a, d, a]
[b, d, a]
[c, d, a]
*/

 const transposeReels = (reels) => {
    const rows = [];
    for(let i=0; i<ROWS; i++){
        rows.push([]);
        for(let j =0;j<COLS; j++){
             rows[i].push(reels[j][i]);
        }
    }
    return rows;
 };

let balance = deposit();
const lines = getNumberOfLines();
const bet = getBet();
const reels = spin();
const rows = transposeReels(reels);


console.log(lines);
console.log(balance);
console.log(bet);
console.log(reels);
console.log(rows);