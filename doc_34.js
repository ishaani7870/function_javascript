
function check(value) {
    var max=0;
    var sec=0;
    var sum=0;
    var i=0;
    while(i<value.length){
        if(value[i]>max){
            sec=max
            max=value[i]
        }
        else if(sec<value[i] && value[i]<max){
            sec=value[i]}
        i=i+1
        sum=sec+max;
    
    }
    //console.log("sec",sec);
    //console.log("max",max);
    console.log(max+"+"+sec+"="+sum);
    
    }check([10, 14, 2, 23, 19])
    check([99, 2, 2, 23, 19])