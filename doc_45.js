
function check() {
    for(i=0; i<10; i++){
    let a=require("readline-sync");
    let user= a.questionInt("Enter any number");
    
            if(user%2==0){
                    a=user*100;
                    console.log(a);
            }
            else if(user%2!=0){
                    b=user*(-1)
                    console.log(b);
                    }
            }
    }check()