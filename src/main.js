// main.js
import validator from "validator";

const email = "patient@smilecare.com";
const amail = "patsmilecare.com";
const cmail = "p@milecare.om";


console.log(`${email} — валідний email?`, validator.isEmail(email));
console.log(`${amail} — валідний email?`, validator.isEmail(amail));
console.log(`${cmail} — валідний email?`, validator.isEmail(cmail));
