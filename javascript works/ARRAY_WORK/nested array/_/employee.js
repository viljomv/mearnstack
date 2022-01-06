var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"viljo",25000,"hr",1989,2005],
    [1002,"shifas",7000,"developer",1989,2010],
    [1003,"adarsh",35000,"developer",2010,2015],
    [1004,"anik",35000,"markt",2011,2016],
    [1005,"dathan",40000,"ba",2020,2025],
]
// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);
// console.log(employees[employees.length-1][2]);
// var developer_details=[];
// for(let employee of employees){
//     if(employee[3]=="developer"){
//         developer_details.push(employee)
//     }
// }
// developer_details.sort((d1,d2)=>d2[2]-d1[2])
// console.log(developer_details[0][2]);

//print details of emp who names starts with a
// for(let employee of employees){
//     if(employee[1][0]=="A" || employee[1][0]=="a"){
//         console.log(employee);
//     }
// }

//print details of employess whos working period during 2010,2015
 for(let employee of employees){
     if(employee[4]>2009 && employee[5]<2016){
         console.log(employee);
     }
 }

