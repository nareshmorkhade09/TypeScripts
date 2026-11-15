"use strict";
// never: yesi value jo kabhi exist hi nahi karati.ya aapako error return karega.never used for impossible state and for error handling.
// note: never and void are completely different.
Object.defineProperty(exports, "__esModule", { value: true });
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
function greet() {
    console.log("retuning void");
}
const results = greet();
console.log(results);
//# sourceMappingURL=neverdatatype.js.map