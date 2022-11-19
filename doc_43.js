
let list= ["a", 1, "2", 5, "b", "q"]
var a=require("readline-sync");
var user=a.questionInt("Enter any number")

var i=0;
j=list.length-user
while(i<user){
       
        console.log(list[j]);
        i=i+1;
        j=j+1}
