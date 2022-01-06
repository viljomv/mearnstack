// class
// object
// reference

var baleno={
    colors:["red","white","black","blue"],
    varients:["petrol"],
    price:"8lak",
    manufacture:"nexa",
    getvarient(){
        return this.varients
    }
}
var glanza={
    manufacture:"toyota",
    price:"9lak"
}
glanza.__proto__==baleno

console.log(glanza.varients);