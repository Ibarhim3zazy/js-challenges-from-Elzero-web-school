// Challeng From vid num 37 (*.*);

// Challenge 1

console.log("_______________Challenge 1_________________");

let a = 10;

a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : console.log("Unknown");

// Challenge 2

console.log("_______________Challenge 2_________________");

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

if (st.charAt(st.indexOf("W")) === "W") {
  console.log("Good");
}

if (typeof st.length !== "string") {
  console.log("Good");
}

if ((typeof st.length).toString() === "number") {
  console.log("Good");
}

if (st.substr(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
