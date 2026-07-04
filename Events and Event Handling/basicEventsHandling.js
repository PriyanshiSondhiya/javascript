let h1 = document.querySelector("h1");
// h1.addEventListener('click', function() {
//   h1.style.color = "red"; 
// });

//select the paragrapgh first
//realize kro kya hoga paragraph me
//p pe add kro event lisenter
//func me likho p.style.color = "green";

function dblclick() {
  h1.style.color = "yellow"; 
}

h1.addEventListener('dblclick',dblclick);

//************removing event listener */
h1.removeEventListener("dblclick", dblclick);

//****************** common events*/
let input = document.querySelector("input");
input.addEventListener("input", function () {
  console.log("clicked");
})

input.addEventListener("input", function (evt) {
  console.log(evt.data);
})

//****change event:- change events tab chalta hai jab aapka koi input select ya textarea mein koi change ho jaye */

let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(dets) {
  device.textContent = `${dets.target.value} Device Selected`;
});



