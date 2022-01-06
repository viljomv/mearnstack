var num=5;
var flag=0;//any name consider(flag in used this prgrm)
for(let i=2;i<num;i++){
    if(num%i==0){
        flag=1;
        break;
    }
}
console.log(flag==0?"prime":"not prime");

//prime 1,7-