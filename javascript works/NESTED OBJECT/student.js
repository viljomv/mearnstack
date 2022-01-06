class student{
    constructor(name,age,gender){  //use constructor
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    printstudent(){
        console.log(this.name,this.age,this.gender);
    }
}
var obj=new student("viljo",25,"male")
// obj.setstudent("viljo",25,"male")
obj.printstudent()
var obj1=new student("dathan",30,"female")
// obj1.setstudent("dathan",30,"female")
obj1.printstudent()