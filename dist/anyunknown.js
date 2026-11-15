"use strict";
// Any type: If you define data type but forcefully you want to change it then in that case we use ANY.
Object.defineProperty(exports, "__esModule", { value: true });
let data = "Mohit";
data = 123;
data = true;
console.log(data);
//unknown type: unknown check first datatype then only it's allow to do operation other wise it not allow.
let value = "mohit";
if (typeof value === "string") {
    console.log(value.toLocaleUpperCase());
}
// use unknown when you don't know the value.
//# sourceMappingURL=anyunknown.js.map