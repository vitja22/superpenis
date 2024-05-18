let kaaka = window.innerWidth;
let kaka = window.innerHeight;
let bug = document.querySelector("img");
let bum = document.querySelector("h1");
let timeout = 300;
let scoreText = 0;

function randomNum(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min;
}
function changeBackground(color){
  document.body.style.backgroundColor = color;
}

bug.addEventListener("click",function(){
  bug.style.opacity = 0;
  changeBackground(color = "red")
  setTimeout(() => {
    changeBackground(color = "white")
  }, timeout)
  scoreText+=1;
  bum.innerText = "skolko pokuchal shukov: " + scoreText;
  bug.style.left = randomNum(5,80) + "%";
  bug.style.top = randomNum(5,80) + "%";

  bug.style.opacity = 1;
})