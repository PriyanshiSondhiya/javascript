const users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1783667578486-e70a5dc8e372?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "silent chaos in a loud world not for everyone"
  },
  {
    name: "riya sharma",
    pic: "https://plus.unsplash.com/premium_vector-1721077382049-f4deff3c4cf7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "coffee first, everything else later ☕"
  },
  {
    name: "aarav mehta",
    pic: "https://images.unsplash.com/photo-1524481905007-ea072534b820?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "building dreams one line of code at a time."
  },
  {
    name: "kavya singh",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=80",
    bio: "sunsets, playlists and good vibes only."
  },
  {
    name: "vihaan kapoor",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80",
    bio: "less talking, more creating."
  },
  {
    name: "ananya verma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    bio: "lost in books, found in adventures."
  },
  {
    name: "ishaan malhotra",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=80",
    bio: "gym, grind and a little bit of gaming."
  },
  {
    name: "meera joshi",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=80",
    bio: "collecting memories, not things."
  }
];


function showUsers(arr) {
  arr.forEach(function (user) {
    let card = document.createElement("div");
card.classList.add("card");

let bgImg = document.createElement("img");
bgImg.classList.add("bg-img");
bgImg.setAttribute(
  "src",
  user.pic
);

let blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = `url(${user.pic})`;
blurredLayer.classList.add("blurred-layer");


let content = document.createElement("div");
content.classList.add("content");

let h3 = document.createElement("h3");
h3.textContent = user.name;

let p = document.createElement("p");
p.textContent =
  user.bio;

content.appendChild(h3);
content.appendChild(p);

card.appendChild(bgImg);
card.appendChild(blurredLayer);
card.appendChild(content);

// Jahan card dikhana ho
document.querySelector(".cards").appendChild(card);
// ya
// document.querySelector("#main").appendChild(card);
  })
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);
}); 