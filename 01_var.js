const name = "Antarik"
let age = 20
var phno="8240******"
city ="kol"
let job
//name = "Sayak" cannot be changed as it is declared as constant
age = "21"
phno = "9831******"  //is not used as it has issue in scope
city = "ben"    //never used this 
console.table([name,age,phno,city,job]) 

// primitive datatypes : number , string , null , undefined , symbol , bigint(number with n at end) , boolean

// reference(non-primitive) : array , objects , functions
const array =["a","b","c"];
let isObject={
    rank : 50,
    clg : "ju",
}
let isFunc = function(){
    console.log("hello");
    
}
console.log(typeof 123498320843797797789798797);


// stack(primitive) , heap(non-primitive)