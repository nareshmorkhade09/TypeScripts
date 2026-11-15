"use strict";
// string
Object.defineProperty(exports, "__esModule", { value: true });
// let firstname : string = "naresh";
// let middleName : string = 'mahesh';
// let lastname : string = `morkhade`;
// console.log(firstname);
// console.log(middleName);
// console.log(lastname);
//string concate
let firstname = "naresh";
let lastname = `morkhade`;
let fullName = firstname + " " + lastname; // you can write this like: `${firstname} ${lastname}`
console.log(fullName);
//methods for to make words in lower case or uppercase
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toLocaleUpperCase());
// calculate the total lenght of the text
console.log(fullName.length);
//Boolean 
let islogin = true;
console.log(islogin);
// for example
if (islogin) {
    console.log("it is a true condition");
}
else {
    console.log("it is a false condition");
}
//
//# sourceMappingURL=stringbooleandatatype.js.map