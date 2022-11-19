
function fizz_buzz(value) {
    var a = require("readline-sync");
    var number = a.question("Enter any number");
    if(number%3==0 && number%5==0){
        console.log("fizz_buzz");
    }
    else if(number%3==0){
        console.log("Fizz");
    }
    else if(number%5==0){
        console.log("Buss");
    }
    else{
        console.log("Your number is:-",number);
    }
}fizz_buzz();