document.querySelector(".i1").style.visibility = "hidden";
document.querySelector(".i2").style.visibility = "hidden";

var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);


switch(randomNumber1){
  case 1:document.querySelector(".img1").src="images/dice1.png";
  break;
  case 2:document.querySelector(".img1").src="images/dice2.png";
  break;
  case 3:document.querySelector(".img1").src="images/dice3.png";
  break;
  case 4:document.querySelector(".img1").src="images/dice4.png";
  break;
  case 5:document.querySelector(".img1").src="images/dice5.png";
  break;
  case 6:document.querySelector(".img1").src="images/dice6.png";
}
switch(randomNumber2){
  case 1:document.querySelector(".img2").src="images/dice1.png";
  break;
  case 2:document.querySelector(".img2").src="images/dice2.png";
  break;
  case 3:document.querySelector(".img2").src="images/dice3.png";
  break;
  case 4:document.querySelector(".img2").src="images/dice4.png";
  break;
  case 5:document.querySelector(".img2").src="images/dice5.png";
  break;
  case 6:document.querySelector(".img2").src="images/dice6.png";
}

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
  document.querySelector(".i1").style.visibility = "visible";
} else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins";
  document.querySelector(".i2").style.visibility = "visible";
} else {
  document.querySelector("h1").innerHTML="Draw";
}
