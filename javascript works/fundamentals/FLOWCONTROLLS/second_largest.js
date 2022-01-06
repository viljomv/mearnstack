// var num=25;
// var num1=40;
// var num2=70;
// if((num>num1)&&(num>num2)){
//     console.log("num1 is largest ");
// }
// else if((num1>num)&&(num1>num2)){
//     console.log("num1 is largest");
// }
// else if((num2>num)&&(num2>num1)){
//     console.log("num2 is largest")
// }
var num=15,num1=40,num2=70;
if((num>num1)&&(num>num2)){
    if(num1>num2){
        console.log("second is num1");
        console.log(num,num1,num2);
}
else{
    console.log("second is num2");
    console.log(num,num2,num1);
}
}
    else if((num1>num)&&(num1>num2)){
        if(num>num2){
            console.log("second is num");
            console.log(num1,num,num2);
        }
        else{
            console.log("second is num2");
            console.log(num1,num2,num);
        }
}
else if((num2>num)&&(num2>num1)){
    if(num>num1){
        console.log("second is num");
        console.log(num2,num,num1);
    }
    else{
        console.log("second is num1")
        console.log(num2,num1,num);
    }
}