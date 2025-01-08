for(let i = 1;i<=100;i++){
    if(i%2 == 0){
       console.log(i+" is a even number");
        
    }else{
       console.log(i+" is a odd number");
        
   }
}

/*factorial*/
let a = Number(prompt("Enter the number"))
let fact = 1;
for(let i = 1;i<=a;i++){
    fact = fact*i
    
}
console.log(fact);


let b = Number(prompt("Enter the number"))
let facto = 1;
for(let i = b;i>=1;i--){
    facto = facto*i
    
}
console.log(facto);

let c = 1
while (c<=5) {
    console.log("Heloo everyone");
    c++;
}
let d = 1
do{
    console.log("Helooooo");
    d++
}while (d<=5);