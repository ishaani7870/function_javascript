
// function result(max,min,step) {
//     range = max+step;
//     empaty=[];
//     for(i=min;i<=range;i=i+step){
//         if(i!=range){
//             empaty.push(i)
//         }
//     }
//     console.log(empaty);

// }result(15,9,6);



// function result(max,min,step){
//     range=max+step;
//     empaty=[];
//     for (i=min;i<=range;i=i+step){
//         if (i!=range){
//             empaty.push(i)
//         }
//     }
//     console.log(empaty);
// }result(30,5,7);

// var i = 5;

// for (var i = 0; i < 10; i++) {
  // some code
// }

// Here i is 10


// const array1 = [-4,-3,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (i=0;i<array1.length;i++){
//     count=0;
//     for (j=2; j<array1[i];j++){
//         if (array1[i]%j==0){
//             count=count+1
//         }
        
//     }
//     if (count==0){
//         console.log('prime',array1[i]);
//     }
//     else{
//         console.log('not prime',array1[0]);
//     }

// }

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);
