var randomNumber1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","./dice"+randomNumber1+".png");
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","./dice"+randomNumber2+".png");


if (randomNumber1>randomNumber2){
document.querySelector("h1").textContent="player 1 wins";
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").textContent="palyer 2 wins";
}
else{
    document.querySelector("h1").textContent="tie game" ;
}