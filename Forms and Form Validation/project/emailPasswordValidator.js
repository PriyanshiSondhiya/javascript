let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector(".error-message").textContent = "";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

let emailans = emailRegex.test(email.value);
let passwordans = passwordRegex.test(password.value);

let isValid = true;
if(!emailans) {
  document.querySelector(".error-message").textContent = "email is incorrect";
  document.querySelector(".error-message").style.display = "initial";
 isValid = false; 
}

if(!passwordans) {
  document.querySelector(".error-message").textContent = "Password is incorrect";
  document.querySelector(".error-message").style.display = "initial";
  isValid = false; 
}


});
