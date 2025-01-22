// const { reject, log } = require("async");

// const { log } = require("async");

// let p1 = new Promise(() => {});
// console.log(p1);

// let p2 = new Promise((resolve, reject) => {
//     resolve("Success");
// });
// console.log(p2);

// p2.then((res)=>{
//     console.log(res);
    
// });
// p2.catch(err => console.log(err));

// p2.finally(() => console.log("final"));

// let p3 = new Promise((resolve, reject) => {
//     reject("Failure");
// });
// console.log(p3);
// //!Method Chaining
// p3.then(res=>console.log("Success"))
// .catch(err=>console.log("Failure"))
// .finally(() => console.log("Final"))

//!API Fetchingg

function fetchusers (){
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    response.then(res => {
        //  console.log(res);
        // console.log(res.json);
        return res.json().then(data=>{
            // console.log(data);
            let store = document.getElementById("store")
            data.map(user=>{
                console.log(user);
                store.innerHTML += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                </tr>
                `
            })
            
        })
        
    })
    .catch(err=>console.log(err))
    
}
fetchusers();

