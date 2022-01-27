// Challeng From vid num 22 (*.*);
// Challenge 1
console.log("_______________Challenge 1_________________");

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
  [++a] [+] [+] [b++] [+] [+] [c++] [-] [+] [a++]
  [++a]
  Value: 11
  Explain: pre increment
  [+]
  Explain: addition
  [+]
  Explain: unary plus
  [b++]
  Value: 20
  Explain: plus increment
  [+]
  Explain: addition
  [+]
  Explain: unary plus
  [c++]
  Value: 80
  Explain: post increment
  [-]
  Explain: subtraction
  [+]
  Explain: unary plus
  [a++]
  Value: 11
  Explain: plus increment
*/

// output from previous calc
// a= 12
// b= 21
// c= 81
console.log(++a + -b + +c++ - -a++ + +a);
/*
  [++a] [+] [-] [b] [+] [+] [c++] [-] [-] [a++] [+] [+] [a]
  [++a]
  Value: 13
  Explain: pre increment
  [+]
  Explain: addition
  [-]
  Explain: unary negation
  [b]
  Value: -21
  Explain: variable (let)
  [+]
  Explain: addition
  [+]
  Explain: unary plus
  [c++]
  Value: 81
  Explain: post increment
  [-]
  Explain: subtraction
  [-]
  Explain: unary negation
  [a++]
  Value: 13
  Explain: post increment
  [+]
  Explain: addition
  [+]
  Explain: unary plus
  [a]
  Value: 14
  Explain: variable (let)
*/

// output from previous calc
// a= 14
// b= 21
// c= 82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  [--c] [+] [+] [b] [+] [--a] [*] [+] [b++] [-] [+] [b] [*] [a] [+] [--a] [-] [+] [true]
  [--c]
  Value: 81
  Explain: pre decrement
  [+]
  Explain: addition
  [+]
  Explain: unary plus
  [b]
  Value: 21
  Explain: variable (let)
  [+]
  Explain: addition
  [--a]
  Value: 13
  Explain: pre decrement
  [*]
  Explain: multiplication
  [+]
  Explain: unary plus
  [b++]
  Value: 21
  Explain: post increment
  [-]
  Explain: subtraction
  [+]
  Explain: unary plus
  [b]
  Value: 22
  Explain: variable (let)
  [*]
  Explain: multiplication
  [a]
  Value: 13
  Explain: variable (let)
  [+]
  Explain: addition
  [--a]
  Value: 12
  Explain: pre decrement
  [-]
  Explain: subtraction
  [+]
  Explain: unary plus
  [true]
  Value: 1
  Explain: having unary plus
*/

// output from previous calc
// a= 12
// b= 22
// c= 81
// Done (*.*)


// Challenge 2
console.log("_______________Challenge 2_________________");

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log((f - e) * -d * ++g); // 2000
// g have pre increment so (g= 2)
console.log((g * ++e) + ++f + -d); // 173
