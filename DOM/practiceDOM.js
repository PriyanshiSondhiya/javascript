let heading = document.querySelector("#heading");
heading.textContent = " Welcome to Sheriyans !";

let lis = document.querySelectorAll("li");
lis.forEach(function (val)  {
 console.log(val.textContent);
});

let p = document.querySelector("p");
p.innerHTML = "<b>Updated</b> by JavaScript";