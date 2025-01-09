function test(a,b){
    console.log(a+b);
    return a+b;
    // console.log(a+b);
    
}
test(2,4)

let a = (c,d) => {console.log(c*d)}
a(2,6)

//!anonymous function and function expression

let x = function () {
    console.log("Helloo");
    
}
x();

//!anonymous and IIFE
(
    function () {
        console.log("Helloo");
        
    }  
)();

//!Naming Function
function Name() {
    console.log("Yashu");
    
}
Name();