var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
//  q1 //tottal number of accounts
//   console.log(accounts.length);

//q2 print all accounts numbers whose acc type savings
// accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno))

// q3 print balance of acno=1000
// var account=accounts.find(data=>data.acno==1000).balance
// console.log(account);

// q4 print all gpay transactions dettails
// var acc=accounts.map(data=>data.transactions).flat().filter(tran=>tran.method=="g-pay")
// console.log(acc);

//q5 print credit transactions of 1002

var creditTransaction=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
console.log(creditTransaction);

// q5 print debit transaction Of 1002

var debitTransaction=accounts.find(data=>data.acno==1002).transactions
console.log(debitTransaction);

var history={"debitTransaction":debitTransaction,"creditTransaction":creditTransaction}
console.log(history);