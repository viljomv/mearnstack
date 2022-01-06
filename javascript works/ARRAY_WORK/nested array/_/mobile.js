var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",9000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",9000,"mediatek","LED","4G"],
    ]

    //costly mobile

//    mobiles.sort((m1,m2)=>m2[3]-m1[3])
//    console.log(mobiles[0]);

   //lowest costly mobile

//    mobiles.sort((m1,m2)=>m1[3]-m2[3])
//    console.log(mobiles[0]);

// to find snapdragons processor mobiles
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon"){
//         console.log(mobile);
//     }
// }

//to find print costly mobile with processor snapdragon with 5g band
// var snap5g=[]
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon" && mobile[6]=="5g"){
//         snap5g.push(mobile)
//     }
// }
// snap5g.sort((m1,m2)=>m2[3]-m1[3])
// console.log(snap5g[0]);
//is there any mobile can i purchase below 10k?
//print samsung mobile details

// for(let mobile of mobiles){
//     if(mobile[3]<10000){
//         console.log("true")
        
//     }
//     else{
//         console.log("false"); 
//     }
// }

// var mob_names=mobiles.map(mob=>mob[2])
// console.log(mob_names);
 
// var prices=mobiles.map(mob=>mob[3])
// console.log(prices);

// var mobile1=mobiles.filter(mob=>mob[1]=="samsung")
// console.log(mobile1);

// var mobile1=mobiles.filter(mob=>mob[3]<25000).map(mob=>mob[2])
// console.log(mobile1);

// var mobile1=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000)
// console.log(mobile1);

// var mobile1=mobiles.filter(mob=>mob[6]=="5G")
// console.log(mobile1);

// var mobile1=mobiles.filter(mob=>mob[6]<25000)
// console.log(mobile1);
//  var mobile1=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2)  //reduce
//  console.log(mobile1);

//  var mobile1=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)
//  console.log(mobile1[2]);

// var mobile1=mobiles.some(mob=>mob[3]==10000)
// console.log(mobile1);

// var mobile1=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)   //some
// console.log(mobile1);

//var mobile1=mobiles.find(mob=>mob[1]=="redmi")
//console.log(mobile1);


var mobile1=mobiles.find(mob=>mob[0]=="1000")
console.log(mobile1);