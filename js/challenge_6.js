// Challenge From vid num 39 (*.*);

// Challenge 1

console.log("_______________Challenge 1_________________");

let job = "Manager";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    console.log("My salary is " + salary);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log("My salary is " + salary);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log("My salary is " + salary);
    break;
  default:
    salary = 4000;
    console.log("My salary is " + salary);
}

// Challenge 2

console.log("_______________Challenge 2_________________");

let holidays = 6;
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money ?? `none.`}`);
} else {
  money = 0;
  console.log(`My Money is ${money || `none.`}`);
}
