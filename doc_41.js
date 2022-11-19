
let list = [[4], [-1, -3], [5, 7], [9,3,4,5,6,11], [13, 15, 17]];
let max=0;
for(i=0;i<list.length;i++){
        if(list[i].length>max){
                max=list[i].length
                empaty=list[i]
        }
}
console.log(max,empaty);

min=max;
for(i=0; i<list.length;i++){
        if(list[i].length<min){
                min=list[i].length
                minimum_list=list[i]
                
        
        }
}console.log(min,minimum_list);








