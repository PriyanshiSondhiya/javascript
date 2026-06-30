let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.pop(); //remove from last
arr.shift(); //remove from first
arr.unshift(0); //add at first position
arr.splice(2,1); //beech se remove krta hai (kaha se value hatani hai, kitni value hatani hai)
let newarr = arr.slice(0,4); //main array change ni krta hai new variable me values deta hai (kaha se, kaha tak (uske ek pehele wala))

arr.reverse();
let asc = arr.sort(function(a,b) {
  return a-b; //a-b asc    , b-a desc
});