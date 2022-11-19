
function check(value) {
        
    var a = require("readline-sync");
    var number=a.questionInt("Enter any number") 
    let ex=0
    let str="";
    let i= number;
    while(i>0){
        rev=i%10;
        ex=rev*rev
        str=str+ex
        i=i/10-(i%10)*0.1}
       console.log(str);
    }check()