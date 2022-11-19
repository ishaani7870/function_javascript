
let num=[33, 67, 98, 34]
let empaty=[];
for(i=0; i<num.length; i++){
        modul=num[i]%10 
        floor=num[i]/10-(num[i]%10)*0.1
        sum=modul+floor

        empaty.push(sum);
                
}console.log(empaty);