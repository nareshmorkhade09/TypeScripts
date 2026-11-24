//let Username : string ="Mohit";

type Username = string; // here we are creating a type alias for the string data type and we can use this type alias in the future instead of using the string data type.

type Age = number;

let myName : Username = "Mohit";
let myAge : Age = 25;
console.log(myName);
console.log(myAge);

type user = {
    username : string,
    age : number,
}

let username1 : user = {
    username: "Rohit",
    age: 25
}
console.log(username1);

// Using function with type alias

type Addfunction = {
    (a: number, b: number): number;
};

let aadd: Addfunction = (x,y) => {
    return x+y;
}
console.log(aadd(5, 10));


// union and intersection type: means we can combine multiple types into one type using union and intersection type.

//union:EX::

type Id = string | number;

let userid : Id = 2333;
console.log(userid);

let usedrid1: Id = "mohit123";
console.log(usedrid1);


//intersection: EX:







