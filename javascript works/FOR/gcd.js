var num1=8;
var num2=24;
var factor=0;
for( let i=1;i<=num2;i++){
    if((num1%i==0)&&(num2%i==0)){
    factor=i;
    }
 
}
console.log(factor);
