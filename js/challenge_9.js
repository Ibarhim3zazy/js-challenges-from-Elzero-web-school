// Challenge From vid num 56 (*.*);

// Challenge 1

console.log("_______________Challenge 1_________________");

showDetails("Ibrahim",true, 22); // "Hello Ibrahim, Your Age IS 22, You Are Availabe For Hire"

function showDetails(v1, v2, v3) {
  let Name = (typeof v1 === 'string') ? v1 : (typeof v2 === 'string') ? v2 : (typeof v3 === 'string') ? v3 : "Unknown";
  let age = (typeof v1 === 'number') ? v1 : (typeof v2 === 'number') ? v2 : (typeof v3 === 'number') ? v3 : 0;
  let status = (typeof v1 === 'boolean') ? v1 : (typeof v2 === 'boolean') ? v2 : (typeof v3 === 'boolean') ? v3 : "Unknown";
  if (status === true) {
    status = "You Are Availabe For Hire";
  }else {
    status = "You Are Not Availabe For Hire";
  }
  console.log(`Hello ${Name}, Your Age IS ${age},  ${status}`);
}
