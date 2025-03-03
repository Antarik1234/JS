let myDate =new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2004,11,20,6,30)  // syntax 1
let myCreatedDate1 = new Date("2004-12-20") // yyyymmdd
let myCreatedDate2 = new Date("12-20-2004") // mmddyyyy

// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

