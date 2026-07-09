//****************************local storage */
//setItem
localStorage.setItem("name", "harsh");

//getItem
let val = localStorage.getItem("score");

//removeItem
localStorage.removeItem("score");

//updateItem
localStorage.setItem("name", "Harshita");


//**************************Session storage */
//All methods are same like local storage but it stores data temporarily
sessionStorage.setItem("name", "harsh");

sessionStorage.clear("name");



//***********************cookies */
//browser me chota data store krne k liye cookies ka use hota hai

//cookies - ~4kb
//localStorage sessionStorage - ~5Mb

//cookies me jo bhi data store karoge wo data page reload par automatically server par jaayega