// Challenge From vid num 17 (*.*);
let TitleVar = "3zazy" , DescriptionVar = "3zazy web school", DataVar = "25/10";
let overwrite = `<div>
  <h3>Hello ${TitleVar}</h3>
  <p>${DescriptionVar}</p>
  <span>${DataVar}</span>
  </div>`;
  document.write(`${overwrite.repeat(4)}`);
