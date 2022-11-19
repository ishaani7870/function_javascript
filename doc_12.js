
         
    var a = require("readline-sync");
    var number=a.questionInt("Enter any number")
               var result = 0;
               var i=number;
               while( i >= 1)  {
                 counter = i % 10;
                 result = result * 10 + counter;
                 i = i / 10 - (i % 10) * 0.1
               }
               console.log(result);
              //  var j=result
              //  fnl=0
              //  while (j>0){
              //      reverse=j%10
              //      fnl=fnl*10+reverse
              //      j=j/10-(j%10)*0.1}
   
   
              // console.log(fnl);
                 
      




















