// Challenge From vid num 26 (*.*);
// Challenge 1

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.floor(Math.min(a,b,c,d)));  // 2

console.log(Math.pow(a, Math.floor(d))); // 10_000

console.log(Math.floor(d)); // 2
console.log(Math.round(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(parseInt(d)); // 2

console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => string
console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); // 67
