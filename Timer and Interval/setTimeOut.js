// setTimeout(function() {
//   console.log("hey!");
// }, 8000);

// setInterval(function () {
//   console.log("hey");
// }, 2000);

let count = 10;
let interval = setInterval(function () {
 if(count < 0 ){
  clearInterval(interval);
 }
 else{
   console.log(count);
   count--;
 }
}, 1000);