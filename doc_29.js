function limit(value) {

    var a = require("readline-sync");
    var number=a.questionInt("Enter any number") 
    for(i=3;i<number;i++){
        if(i%3==0 || i%5==0){
            console.log(i);
        }
    }
       
   }limit()