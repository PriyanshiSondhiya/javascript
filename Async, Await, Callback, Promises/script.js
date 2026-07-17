//*****************************************************************************************callback************ */
//ek function ko agr aap ek or function bhej de rhe ho parameter me, to wo parameter wala functionkehlata hai callback
function run(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}
run(function () {
  console.log("hey");
})

//callback hell
function getProfile (username, cd) {
  setTimeout(() => {
     cd({username: username, age: 26, email: "huihui@hui.com"});
  }, 5000);
}

function savedPost(id, cb){
 console.log("fetching saved posts...");
 setTimeout(()=> {
  cb({id : id, saved: [1, 2, 3, 45, 4]} )
 }, 3000);
}

getProfile("harsh", function(data) {
  console.log(data);
  savedPost(data.id, function(saved) {
    console.log(saved);
  });

});


//********************************************************************************************************Promise**/
//aap ek promise bnate ho jo ki do statesme se ek state me ja skta hai and wo ya to resolve hoga ya reject hoga pr code dono ke liye likhna odta hai

let pr = new Promise(function(res, rej){
  setTimeout(()=> {
   let rn = Math.floor(Math.random() * 10);
   if(rn < 5) res("resolved with" + rn);
   else rej("rejected with" + rn);
  }, 3000);
});

//resolve/reject
pr.then(function(val){
  console.log(val);
}).catch(function (val) {
  console.log(val);
})

//*********************************************************************************************async await*****/
async function abcd () {
  try {
    let val = await pr;
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}

abcd();