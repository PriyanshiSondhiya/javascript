// let obj = {
//   name: "Harsh", 
//   age: 26,
//   khana: "Dal Chawal",
// };

// console.log(obj.name);
// console.log(obj['age']);

//obj k andr aa naam ki property dhundho jo ki galt hai
//  let aa = "name";
// // obj.aa; ye glt hai

// console.log(obj[aa]); //right


//****Nesting and Deep object
//object k andr object ki property access krna


//****destructuring:- bar bar deep obj access krne se accha variable me store krlen
//let {lat, lng} = user.address.locations;


// computed property
let role = "admin";


//****Looping */
let obj = {
  name: "Harsh",
  age: 26,
  email: "test@test.com",
  address: {
    city: "Bhopal",
  },
  [role] : "Harsh",
};

for(let key in obj) {
  console.log(key, ":" , obj[key]);
}

console.log(Object.keys(obj));

console.log(Object.entries(obj))

// ******Copying objects: spread, Object.assign, deep clone
//spread op
let obj2 = {...obj};

//Object.assign use to copy and assign
// let obj3 = Object.assign({}, obj);
let obj3 = Object.assign({price: Infinity}, obj);

//****🚨🚨🚨🚨jab hm object k andr object wale object ko clone krte hai spread operator se tb object to copy ho jata h pr deepobject ka reference pass hota hai copy wale obj me change kroge to original obj bhi change ho jayega ye na ho iselye :- */
//Nested obj copy krna h to ye method use kro

let obj4 = JSON.parse(JSON.stringify(obj));
obj4.address.city ="Indore";


//**** optional chaining and computed properties
//optional chaining :- if property present ni hogi to undefined dega error ni dega
console.log(obj?.addresses?.city);




