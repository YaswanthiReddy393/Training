// let mainEle = document.createElement("div");
// mainEle.setAttribute("id","mainblock");
// console.log(mainEle);
// let topEle = document.createElement("div");
// topEle.setAttribute("class","topblock");
// let image = document.createElement("img");
// image.src = "https://pixabay.com/photos/dog-corgi-cute-animal-4988985/";

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomblock");
// let h1 = document.createElement("h1");
// h1.innerText = "DOG";
// let btn = document.createElement("button");
// btn.innerText = "View More";
// // topEle.appendChild(image)
// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle) //must for displaying the content on the web page while creating html elements in js



//Hiding and showing the password

check.addEventListener("click",(event)=>{
    if(event.target.checked == true){
        password.setAttribute("type","text");
        show.innerText = "Hide Password";
    }else{
        password.setAttribute("type","password");
        show.innerText = "Show Password";
    }
})