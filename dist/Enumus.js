"use strict";
//enums means group of name constraint .
Object.defineProperty(exports, "__esModule", { value: true });
// enum Direction {
//     up = "up",
//     down = "down",
//     left = "left",
//     right = "right"
// }
// console.log(Direction.down);
var paymentStatus;
(function (paymentStatus) {
    paymentStatus["pending"] = "PENDING";
    paymentStatus["success"] = "SUCCESS";
    paymentStatus["failed"] = "FAILED";
})(paymentStatus || (paymentStatus = {}));
function getPaymentStatus(status) {
    console.log(status);
}
getPaymentStatus(paymentStatus.success);
//# sourceMappingURL=Enumus.js.map