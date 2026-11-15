// never: yesi value jo kabhi exist hi nahi karati.ya aapako error return karega.never used for impossible state and for error handling.
// note: never and void are completely different.

// function throwError(message:string): never {
//     throw new Error(message);
// }

// throwError("404 error");

// function infinityloop() : never{
//     while(true){
//         console.log("Running..")
//     }
// }

// infinityloop();

// void: means it does not return anything but it stop function at a perticular time.

function greet() : void{
    console.log("retuning void")
}

const results = greet();
console.log(results);


