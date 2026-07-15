//this keyword special keyword hai, kyuki jese ki baki sare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jata hai is baat se ki aap use kaha use kr rhe ho

//global scope
console.log(this);

//function scope
function abcd() {
  console.log(this);
}
abcd();

//method scope (method- function jo ki object k ander ho) this ki value pure obj ko refer kregi
let obj = {
  name: "harsh",
  sayName: function() {
    console.log(this);
    console.log(this.name);
  },
};
obj.sayName();

//event handler
document.querySelector("h1").addEventListener('click', function() {
  console.log(this);
  console.log(this.style.color = "blue");
});

//class scope
class Abcd {
  constructor() {
    console.log("hey");
    this.a = 10;
  }
}

let k = new Abcd;
console.log(k);

//**this ki value** hmesha parent se value lete h

//global - window
//function - window
//method with normal es5 fun - object
//method with arrow function es6 - window
//es5 func inside es5 method - window
//arrow fun inside es5 method - object
//es5 function as method es6 fun as inside method - object
//class - blank object  


//****call, apply, bind */
//functio ko call krte wqt aap set kr skte ho ki uske this ki value kya hogi

let obj2 = {
  name: "harsh",
  age : 26,
}

function abcd() {
  console.log(this);
}

abcd.call(obj2);

function abcd(a, b, c) {
  console.log(this, a, b, c);
}

abcd.call(obj2, 1, 2, 3);
abcd.apply(obj2, [1, 2, 3]);

let func = abcd.bind(obj2, 1, 2, 3);
func();