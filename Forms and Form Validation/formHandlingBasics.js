let form = document.querySelector("form");
let nm = document.querySelector("#name");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  // if(nm.value.length <= 2){
  //   document.querySelector("#hide").style.display = "initial";
  // }else {
  //   document.querySelector("#hide").style.display = "none";
  // }

  const regex = /^[a-zA-Z0-9_]{3,16}$/;
  let ans = regex.test("aaa");
  console.log(ans);

});