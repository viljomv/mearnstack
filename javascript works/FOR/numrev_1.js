
var res="";
for( num=12345;num !=0;){
    let last_digit=num%10;
    res+=last_digit;
    num=Math.floor(num/10);
}
console.log(res);