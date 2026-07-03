let h1 = document.querySelector("h1");
//h1.textContent = ("hello harsh kese ho");
h1.innerHTML = "<i>Hey</>";
console.dir(h1);

// set attribute, get attribute **** attribute= like href, src 
let a = document.querySelector("a");
console.dir(a);
//a.href = "https://www.google.com";

//** (a tag ka konsa attribute set kr rhe ho, app uski value kya rkhna chahte ho)
a.setAttribute("href", "https://www.google.com");
let img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1773332598289-ed0444ad1d6f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

console.log(a.getAttribute("href"));

//a.removeAttribute("href");


//****Dynamic DOM manipulation createElement, appendchild, remove child, prepend */ 1-create 2-append/prepend

let h5 = document.createElement("h5");
h5.textContent = "ghar par jaao khana khaao";
document.querySelector("body").append(h5);

//h1.remove();
// h1.style.color = "red";
// h1.style.backgroundColor = "pink";

h1.classList.add("hulu");


