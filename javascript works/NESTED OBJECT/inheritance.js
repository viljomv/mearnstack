class parent{
    bike(){
        console.log("passion pro");
    }
}
class child  extends parent{
    bike(){
        super.bike()
        console.log("glamour");
    }

}
var ch=new child()
ch.bike()