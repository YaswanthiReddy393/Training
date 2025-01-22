let userdata = {
    name:"Yashu",
    age:21,
    City:"Nandyal"
}
console.log(userdata.name, typeof(userdata));

let x = JSON.stringify(userdata);
console.log(x, typeof(x));

let y = JSON.parse(x);
console.log(y,typeof(y));


