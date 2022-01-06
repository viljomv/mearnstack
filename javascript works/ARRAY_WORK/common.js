// find common elements from two array
 var arr1=[10,11,20,21]
 var arr2=[11,12,20,21]
//     for(var i=0;i<arr1.length;i++){
//         for(var j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 console.log(arr1[i])
//             }
//         }
//     }
// for(let i of arr1){
//     for(let j of arr2){
//         if(i==j){
//             console.log(i);
//         }

//     }
// }
let p1=0,p2=0;
while(p1<arr1.length && p2<arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log("common elements",arr1[p1]);
        p1++;
        p2++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++
    }
    else if(arr1[p1]<arr2[p2]){
        p1++
    }
}
    
