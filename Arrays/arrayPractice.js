//1-create an array with 3 fruit and print sec fruit 
let fruit = ['apple',' mango', "strawberry"];
console.log(fruit[1]);

//2-
fruit.unshift("mango");
fruit.push("pineapple");
fruit.pop();
fruit.push("kiwi");

//Insert "red" "blue at index 1 in this arr"

let colors = ["green", "yellow"];
colors.splice(1, 0, "red", "blue");


//extract middle 3 items
let items = [1, 2, 3, 4, 5];
let newItem = items.slice(1, 4);

//sort this array alphabetically and then reverse it
let names = ["Zara", "Arjun", "Mira", "Bhavya"];


//use .map() to square each number
let num = [1, 2, 3, 4];

let newNum = num.map( function (val) {
  return val * val;
});

let nums = [5, 12, 8, 20, 3];
let newNums = nums.filter(function(val) {
  if(val > 10)return true;
})

let add = [10, 20, 30];
let newAdd = add.reduce((accumulator, val)=> {
  return accumulator + val;
}, 0);

let n1 = [12, 15, 3, 8, 20];
let ans1 = n1.find(function (val) {
  if(val <  10) return val;
});


let n2 = [45, 60, 28, 90];
let ans2 = n2.some(function (val) {
  return val < 35;
})

let n3 = [2, 4, 6, 8, 10];
let ans3 = n3.every(function (val) {
  return val % 2 == 0
})

let fullName = ["Harsh", "Sharma"];
let [p, q] = fullName;

let r = [1, 2];
let s = [3, 4];

let d = [...r,...s];

let countries = ["USA", "UK"];
countries = ["India", ...countries];


