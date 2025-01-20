let users = ["Bannu","Sharon","Yashu","Praneel"];
users.map((user,i)=>{
    console.log(user, i);
})

let x = users.map((user,i)=>{
    return user;
});
console.log(x);

let y = users.forEach((user,i)=>{
    return user;
});
console.log(y);
