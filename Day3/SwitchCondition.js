let a = prompt("Enter the first number:")
let b = prompt("Enter the second number:")
let c = prompt("Enter the third number:")
switch (true) {
    case (a >= b && a >= c):
        greatest = a;
        break;
    case (b >= a && b >= c):
        greatest = b;
        break;
    case (c >= a && c >= b):
        greatest = c;
        break;
    default:
        console.log("Unexpected case");
}
console.log("The greatest number is:", greatest);