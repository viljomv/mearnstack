// data structure
    // linear ds(consecuting  memmory location and sequtionly)
        //Arrays
        //stack
        //queue
        //
    //
        // no linear(not consecuting)
            //tree

// ARRAYS
// define []
// is length is not fixed
// it is possible to store same and different type of objects
// inseration order is preserved
//  duplication are allowed

var expenses=[20000,25000,30000,35000,40000,45000,45000]
// for(let i=0;i<=expenses.length;i++){
//     console.log(expenses[i]);
// }



// for( let amount of expenses){
//     console.log(amount);
// }
 




// for(let amount of expenses){
//     if(amount>25000){
//         console.log(amount);
//     }
// }


// let sum=0;
// for(let amount of expenses){
    
//     sum+=amount
// }
// console.log(sum);

// find max expenses

// var max_exp=0
// for(let amount of expenses){
//     if(amount>max_exp)
//     max_exp=amount
// }
// console.log( "max exp",max_exp);

//minimum expenses

// var min_exp=expenses[0];
// for(let amount of expenses){
//     if(amount<min_exp)
//     min_exp=amount
// }
// console.log("min exp", min_exp);
// expenses.push(70000) //add (70000)
// console.log(expenses);


//to remove duplication
// var st=new Set();
// for(let amount of expenses){
//     st.add(amount)
// }
// console.log(st);

 //to another remove duplication
  var unique=[]
  for(let amount of expenses){
      if(unique.includes(amount)){

      }
      else{
        unique.push(amount)
  }
 
  }
  console.log(unique)




