var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transaction:{creditTransaction:[],debitTransaction:[]}},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transaction:{creditTransaction:[],debitTransaction:[]}},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transaction:{creditTransaction:[],debitTransaction:[]}},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transaction:{creditTransaction:[],debitTransaction:[]}},

}

//1003 name
// console.log(users[1003].personName);

//1005 exist or not?

// console.log("1005" in users);

// function authenticate(ac_num,password){
//     //chk acno exist
//     if(ac_num in users){
//         let pwd=users[ac_num].password
//         if(pwd==password){
//             return 1
//         }
//         else{
//             return -1
//         }
//     }
//     else{
//         return 0
//     }
  
// }
// console.log(authenticate(1000,"userone"));

function validateAccountNumber(acno) {
    return acno in users ? true : false
}
function fundTransfer(from_acno, to_acno, amount) {
    if (validateAccountNumber(from_acno) && validateAccountNumber(to_acno)){
            let curBal=users[from_acno].balance
            if(amount>curBal){
                console.log("insufficient balance");
            }
            else{
                users[from_acno].balance-=amount
                let frm_acno_balance=balanceEnquiry(from_acno)
                console.log(`you acno ${from_acno} account has been debited with ${amount} avl bal ${frm_acno_balance} `);
                users[to_acno].balance+=amount
                let to_acno_balance=balanceEnquiry(to_acno)
                console.log(`you acno ${to_acno} account has been credited with ${amount} avl bal ${to_acno_balance} `);
                let CrTrans={from:from_acno,amount:amount}
                let dbTrans={to:to_acno,amount:amount}
                users[from_acno].transaction.debitTransaction.push(dbTrans)
                users[to_acno].transaction.creditTransaction.push(CrTrans)               
            }
        }
        else{
            console.log("invalid account number");
        }
    }
    
    
    
    function balanceEnquiry(acno){
        if(validateAccountNumber(acno)){
            return users[acno].balance
        }
        else{
            console.log("invalid account number");
        }
    
    }
    console.log(fundTransfer(1000,1001,4000));
    console.log(users[from_acno]);