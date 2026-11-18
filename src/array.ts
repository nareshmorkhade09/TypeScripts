let mark : number [] = [10,20,30];
console.log(mark);

//Alternative for the above array.

//array<type>

let marks : Array<string> = [
    "mohit",
    "ram",
    "shyam"
];

console.log(marks);

//way of to use arrays in TS.

let price : number[] = [10,20,30];
let ename : string[] = ["mohan","pavan","yogesh"]
let statusCode : boolean[] = [true,false,true]


//array methods
let fruits : string[] = ["apple"];
fruits.push("banana"); //means adding the banana word into the array
fruits.pop() //removing the last character
console.log(fruits);
console.log(fruits[0]); //we will get index of character. 
console.log(fruits.length); // we will get total lenght of characheter.

//multitype array

let data :  (string | number)[] = [
    "mohit",
    222,
    "pavan",
    455
]





