// function getScore(...scores){
//   let total =0;
//   scores.forEach(function(val){
//     total = total + val;
//   });

//   return total;
// }

// console.log(getScore(10, 12, 14, 18));


function abcd (val){
  val();
}

abcd(function() {
  console.log("hey");
});

function outer() {
  let count =0;
  return function() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();