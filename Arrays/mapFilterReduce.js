let arr2 = [11, 62, 3, 4, 25];

// arr2.forEach(function (val) {
//   console.log(val + 5);
// })


//****map sirf tab use krna hai jab apko ek naya array bnana hai pichle array k data k basis pr
let newarr2 = arr2.map (function (val) {
  console.log( val + 12);
})

//jab bhi apko aisa koi case dikh jaye jaha par ek array se naya array banega and wo naya array kuch values rakhega tab map lagega

//*****Filter
let arr3 = [1, 2, 3, 4, 5, 6];

let newArr3 = arr3.filter(function(val) {
  if(val > 4)return true;
}); 


//****Reduce */
let ans =  arr3.reduce (function(accumulator, val){
  return accumulator + val;
 }, 0);


 //****find */
 let va = arr3.find(function (val){
  return val === 1;
 });

 //*********some: ek element condition bhi true hogi to true  */
 let value = arr3.some(function (val) {
  return val > 5;
 });

 // ****every:ek element condition bhi false hogi to false

 let value2 = arr.every(function (val) {
  return val < 7;
 });


 //Destructuring
 let [a, b, , , e] = arr3;

 //spread operator:- array ki sare values coppy krdega
 let arr4 = [...arr3];