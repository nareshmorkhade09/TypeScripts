// Any type: If you define data type but forcefully you want to change it then in that case we use ANY.

let data : any = "Mohit";
data = 123;
data = true;
console.log(data)

//unknown type: unknown check first datatype then only it's allow to do operation other wise it not allow.

let value : unknown = "mohit";

if(typeof value === "string"){
   
console.log(value.toLocaleUpperCase());
}

// use unknown when you don't know the value.

