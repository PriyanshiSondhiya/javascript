function CreatePencil(name, price, color) {
 this.name = name;
 this.price = price;
 //this.company = "sheriyans";  :- instead of writing here and wasting memory use protoype
 this.color = color; 
 this.write = function(text) {
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = color;
  document.body.append(h1);
 }
}


//agar tumhara constructor func koi field apne prototype pr attach krle to us constructor se bnne wale sabhi new instances yani ki objs ke pass wo field chli jati hai
CreatePencil.prototype.company = "Sheriyans";

let pencil1 = new CreatePencil ("Natraj", 10, "black");
let pencil2 = new CreatePencil ("Doms", 10, "red");


//*********************************************************************class*******************************************
class CreatePencil2 {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }

   erase() {
    document.body.querySelectorAll("h1").forEach((elem) => {
      if (elem.style.color === this.color) {
        elem.remove();
      }
    });
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
}

let p1 = new CreatePencil2("natraj", "natraj", 10, "white");
let p2 = new CreatePencil2("apsara", "apsara", 15, "blue");


//*****************************************************************************Inheritance, super*****************/
class User{
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";

  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = this.name + ":" + text;
    document.body.appendChild(h1);
  }

  checkRole() {
    return `you are a ${this.role}`;
  }
}
 class Admin extends User {
    constructor(name, address, username, email){
       super(name, address, username, email);
       this.role = "admin";
    }

    remove() {
      document.querySelectorAll("h1").forEach(function (elem) {
        elem.remove();
      });
    }
  }

  let u1 = new User("Harsh", "Bhopal", "async123", "hey@heyhey.com");
  let a1 = new Admin("admini", "India", "adminnnn", "a@aa.a");


  //****************************************************************************************prototypal inheritance */
  //classical inheritance = classes bnanan or unhe extend kr dena
  //prototypal inheritance = object object se inherit krta hai


  let coffe = {
    color: "dark",
    drink: function() {
      console.log("gut gut gut");
    },
  }


  let arabiataCoffee = Object.create(coffe);
  console.log(arabiataCoffee);
  