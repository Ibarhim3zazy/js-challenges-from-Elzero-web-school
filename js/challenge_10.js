// Challenge From vid num 70 (*.*);

// Challenge 1

console.log("_______________Challenge 1_________________");

// let names = function (...name) {
//   return `String [${name.join("], [")}] => Done !`;
// }

let names = (...name) => `String [${name.join("], [")}] => Done !`;

//String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// Challenge 2

console.log("_______________Challenge 2_________________");

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => parseInt(one) + parseInt(two) + parseInt(nums);
console.log(calc(10, myNumbers[0], myNumbers[1])); //80
