//access the value

let key = "age";
const user = {
   age: 26,
  "first-name": "Harsh",
}

console.log(user["first-name"]);
console.log(user[key]);

//from the obj below print the latitude
const locations = {
  city: "Bhopal",
  coordinates: {
    lat: 23.2,
    lng: 77.4,
  },

};

console.log(locations.coordinates.lat);

//what will happen if coordinates is missing
console.log(locations?.coordinatee?.lat);

//destructure the city and lat from the location object above
let {city}  = locations;
let{lat} = locations.coordinates;

//use for in loop
const course = {
  title: "javascript",
  duration: " 4 weeks",
};

for(key in course){
  console.log(key);
}

Object.entries(course).forEach(function (val) {
  console.log(val[0] + ":" + val[1]);
});

//copy this obj using spread operator
const obj5 = {info: {score: 80}};
const copy = JSON.parse(JSON.stringify(obj5));
obj5.score = 50;
console.log(copy);

//use variable to dynamically assign a property
const keyy = "role";
let objj = {
  name: "harsh",
  [keyy]: "admin",
};

console.log(objj);
