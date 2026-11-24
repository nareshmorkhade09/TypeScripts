//enums means group of name constraint .

// enum Direction {
//     up = "up",
//     down = "down",
//     left = "left",
//     right = "right"
// }

// console.log(Direction.down);

enum paymentStatus{
    pending = "PENDING",
    success = "SUCCESS",
    failed = "FAILED"
}

function getPaymentStatus(status: paymentStatus){
    console.log(status);
}

getPaymentStatus(paymentStatus.success);

