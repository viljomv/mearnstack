var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
//  var covid=coivd_data.reduce((c1,c2)=>c1[2]>c2[2]?c1:c2)
//  console.log(covid); 

// q2 district with higest 1 dose vaccination rate
// var covid=coivd_data.reduce((c1,c2)=>c1[5]>c2[5]?c1:c2)[5]
// console.log(covid);

// var covide=coivd_data.filter(c=>c[5]==covid)
// console.log(covide);


// q3 district with lowest death cases

//  var covid=coivd_data.reduce((c1,c2)=>c1[3]<c2[3]?c1:c2)
//  console.log(covid);

// q4 sort district with +ve cases

var sortdist=coivd_data.sort((n1,n2)=>n1[3]-n2[3])
console.log(sortdist);

// q5 sort the districts based on 1st dose

//  var sortdist=coivd_data.sort((c1,c2)=>c1[5]-c2[5])
//  console.log(sortdist);

// q6 is there any states with +ve cases > 60000

// var covid=coivd_data.some(cov=>cov[2]>60000)
// console.log(covid);

// q7 print trissur details

// var covid=coivd_data.filter(cov=>cov[1]=="thrissur")
// console.log(covid);

// q8 total number of +ve cases

// var total_positive=coivd_data.map(d=>d[2]).reduce((tp1,tp2)=>tp1+tp2)
// console.log(total_positive);


// q9 total number of cured cases

// var total_cur=coivd_data.map(c=>c[4]).reduce((tc1,tc2)=>tc1+tc2)
// console.log(total_cur);


// q10 cured numbers of iduky

//  var covid=coivd_data.find(cov=>cov[1]=="iduky")[4]
//  console.log(covid);

// q11 total number of death cases
 
// var total_death=coivd_data.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2)
// console.log(total_death);


