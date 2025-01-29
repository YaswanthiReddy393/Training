// let ele = document.getElementsByClassName("test");
// // ele[0].style.backgroundColor="dodgerblue"
// console.log(ele);
// console.log(Array.isArray(ele));

// //spread operator

// let x = [...ele]
// console.log(x, Array.isArray(x));
// x.map(element =>{
//     console.log(element);
//     element.style.backgroundColor="tomato";
// }
// )

// let ele = document.querySelector("#demo")
// console.log(ele);
// let ele = document.querySelector(".test")
// console.log(ele);

// let ele = document.querySelectorAll(".test")
// console.log(ele);

// let bgColor = document.querySelectorAll(".bgColor");
// [...bgColor].map(element =>{
//     // console.log(element);
//     element.addEventListener("mouseover",()=>{
//         element.style.backgroundColor = element.innerText;
//     })
// })

let ele = document.createElement("h1");
ele.innerText = "Dynamic html element";
ele.setAttribute("id","demo")
console.log(ele);
document.body.appendChild(ele);


