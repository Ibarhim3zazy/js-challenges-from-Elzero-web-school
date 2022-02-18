// Challenge From vid num 56 (*.*);

// Challenge 1

console.log("_______________Challenge 1_________________");

let myAdmins = ["Ahmed", "Osama", "Sayed", "stop", "Ibrahim"];
let myEmployees = ["Amged", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let n = '';
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "stop") {
    adminNum = myAdmins.slice(0,myAdmins.indexOf("stop")).length;
    break;
  }else {
    adminNum = myAdmins.length;
  }
}
document.write(`<div>We Have ${adminNum} Admins</div><hr>`);

for (let i = 0; i < adminNum; i++) {
  let nq = '';
  n++;
  document.write(`
    <div>The Admin For Team ${n} Is ${myAdmins[i]}
    <h3>Team Members:</h3><br>
  `);
  for (let q = 0; q < myEmployees.length; q++) {
    if (myAdmins[i][0] === myEmployees[q][0]) {
      nq++;
      document.write(`
        <span>- ${nq} ${myEmployees[q]}</span></p>
      `);
    }
  }
  document.write(`</div><hr>`);
}
