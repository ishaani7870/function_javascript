
// function check(value) {
//     for(i=0;i<10; i++){
//     var a = require("readline-sync");
//     var user = a.question("Enter any number")
    
//             for(j=0; j<user; j++)
            
            
//             if(j%2==0){
//                     console.log("even");
//             }
//             else if(j%2!=0){
//                     console.log("odd");
//             }
//             if(user>="a"){
//                     console.log("its string");
//             }
//     }
//     }check()


// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// for(i=0; i<array.length;i++){
//   count=0;
//   for(j=2; j<array[i]; j++){
//       if(array[i]%j==0){
//         count=count+1
//       }
//   }
//   if(count==0){
//     console.log('prim',array[i]);
//   }
//   else{
//     console.log('notpprriimmee',array[i]);
//   }
// }

// const array1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (i=0;i<array1.length;i++){
//     count=0;
//     for (j=2; j<array1[i];j++){
//         if (array1[i]%j==0){
//             count=count+1
//         }

//     }
//     if (count==0){
//         console.log('even number',array1[i]);
//     }
//     else{
//         console.log('odd number',array1[i]);
//     }
// }


let countDown = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}
let newYear = countDown;
countDown = null;
newYear(30);


let countDown1 = function k(fromNumber){
    console.log(fromNumber);

    let nextNumber = fromNumber - 2;

    if (nextNumber>0){
        k(nextNumber);
    }
}
let lastYear = countDown1;
countDown1 = null;
lastYear(31);

let countDown3 = function y(fromNumber){
    console.log(fromNumber);

    let lastNumber = fromNumber - 4;

    if (lastNumber>0){
        y(lastNumber);
    }
}

let firstYear = countDown3;
countDown3 = null;
firstYear


let countDown4=function x(fromNumber){
    console.log(fromNumber);
    let nextNumber = fromNumber -2;
    if (nextNumber>0){
        e(nextNumber);
    }
}
let lastNumber = countDown4;
countDown4=null;
lastYear(28);

// var string='ishaani';

// function compare(a, b) {
//     if (a > b) {
//         return -1;
//     } else if (a < b) {
//         return 1;
//     }
//     return 10;
// }


let input = require("readline-sync");
num = input.questionInt("enter the number");
if (num%2==0 && num %3==0){
    console.log("even");
}
else{
    console.log("odd");
}
