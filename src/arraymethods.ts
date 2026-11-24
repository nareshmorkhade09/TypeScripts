//Array method:
//Method: map,filter,reduce

// map: converts values and return new array along with new array values.

let number : number [] = [3,5,6,34,65];

let double = number.map(num => num*2);

console.log(double);

console.log(number);

//filter : filter the records from the array based on the provided value(in the return those record are match we will get that one.)

let user : string [] = ["Mohit","Rohit","Aman"];

let filteruser = user.filter(user => user.startsWith("M"));

console.log(filteruser);

//reduce: use where we want to convert multiple value into the single value(means sum of all the value).

let prices = [100,200,300]

let total = prices.reduce((sum,price) => sum +price,
0 //is a initial value for the total
)

console.log(total);






