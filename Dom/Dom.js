// console.log("Hii")


// ***************** Selecting the HTML tag   **************
// 1. By ID 
let H1 = document.getElementById("heading");
console.log(H1)

// // 2. By className
// let paragraph = document.getElementsByClassName("paraclass") ;
// console.log(paragraph)

// 3. By Tagname
let paragraph1 = document.getElementsByTagName("p")
console.log(paragraph1)


// *************** chnaging the content of tags ****************
H1.innerText = "<u>HII</u>"
H1.textContent = "<u>HII</u>"
H1.innerHTML = "<u>HII</u>"
paragraph1[0].innerHTML = "Changed para"

// // outer HTML will change the entire element 
paragraph1[0].outerHTML = "shhhhhhhh"
paragraph1_0 = document.getElementById("para")
paragraph1_0.innerHTML = "Ram"


// ! **************** Changing the attribute ***********
H1.setAttribute("src", "./img1.jpg");
H1.setAttribute("style", "color:re");
H1.removeAttribute("style")
H1.removeAttribute("src")


//  ******************* creating element ************************

let Myimg = document.createElement("img");
Myimg.setAttribute("src", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg")
Myimg.setAttribute("width", "100%");
Myimg.setAttribute("height", "600px");


// // this will add directoly to the body tag
// document.body.appendChild(Myimg);

let myBox = document.getElementById("MyBox");
myBox.appendChild(Myimg)

//  // Adding a new element directly by innerHTML
// myBox.innerHTML = "<img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'> "





// *************************** Controlling css ************************
// 1. Style 
// 2. ClassList


H1.style.backgroundColor = "red";

// list of css classes
console.log(H1.classList)
console.log(H1.classList.contains("Style1"))

H1.classList.add("Style6")
H1.classList.remove("Style6")
H1.classList.replace("Style6, Style3")
H1.classList.toggle()



// ************************* Events *********************
// For appling events we have 3 methods 
//  1. Event attributes (In HTML)
//  2. Event OnClick ( In JS)
//  3. Event Listeneres (In JS) 


