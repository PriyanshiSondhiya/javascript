//scope - function, block, global

//execution context
//js sabse pehle jese hi aapka function dekhta hai sabse pehele s banata hai exectuion context, ye ek process hai jo ki do different phases mein chalta hai, memory phase and execution phase (function dekhte hi js ek dibba imagine krta hai usi me sare variable store hote h usi me code chlta hai ye ek hypothetical scenario hai)

//dynamic scoping vs lexical scoping  js use lexical

//****lexical *    a lexically scoped hai abcd function me physically available hai/
function abcd() {
  let a = 2;
  function defg() {

  }
}


//*********dynamic scoping -> kaha se call kr rhe ho uspe depend kregaki kya value milegi */
let a = 12;

function abcd() {
  console.log(a);
}

function defg() {
  let a = 13;
  abcd();
}
console.log(defg());
//lexical scpoed o/p 12 dynamic scoped 13
console.log("a");




//closures hote hai functions jo ki kisi parent fun ke andr ho aur andr wala func return ho rha ho and returning func use kre, parent func ka koi variable

function abcd() {
  let a = 12;
  return function() {
    console.log(a);
  };
}

abcd();

//************closure use */
//ye sach hai fnc ke khatam hone pe aapka fnc and uske variabe khtm ho jate hai, pr jab bhi closure bnta hai to aapka fnc or uska variables ka ek backlink banaya jata hai (copy) or usla naam hota hai [[environment]]
function countforMe() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  };
}

let fnc = countforMe();
fnc();
fnc();

let func2 = countforMe();
func2();
func2();

//*********encapsulation */
function clickLimiter() {
  let click =0;
  return function () {
    if(click < 5){
      click++;
      console.log(`clicked : ${click} times`);
    }else{
      console.error("LIMIT EXCEED");
    }

  };
}

let fnc1 = clickLimiter();
fnc1();
fnc1();

let fnc2 = clickLimiter();
fnc2();
fnc2();
fnc2()
fnc2()
fnc2()
fnc2()


