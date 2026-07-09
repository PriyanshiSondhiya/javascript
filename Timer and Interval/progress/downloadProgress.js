let count = 0;
let progress = document.querySelector(".progress");
let percentage = document.querySelector(".percentage");
let speed = document.querySelector(".speed");

setInterval (function() {
  if(count <= 99) {
    count++;
    progress.style.width = `${count}%`;
     percentage.textContent = `${count}%`;
     speed.textContent = `${count}%`;

  }
}, 30);