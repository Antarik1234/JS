let score ="33"

console.log(typeof(score));
console.log(typeof score); // both same

let numInVal = Number(score)

console.log(numInVal);
console.log(typeof(numInVal));

// "33" => 33
// "33ab" => NaN
// null => 0
// undefined => NaN
// true => 1 ; false => 0

let isTrue = 0

let booleanIsTrue = Boolean(isTrue)

console.log(booleanIsTrue);
// !0 => true ; 0 => false
// "" => false ; "filled" => true
