// document.querySelector("h1").innerHTML="SPICE GAME";
// Java script code for generating random no on dice
function myFunction1()
{

var ranNum1 = Math.random();
var diceNum1 = ranNum1*6 + 1;
diceNum1 = Math.floor(diceNum1);

if(diceNum1 == 1)
{
  document.getElementById("img-1").src="images/dice1.png";
}
if(diceNum1 == 2)
{
  document.getElementById("img-1").src="images/dice2.png";
}
if(diceNum1 == 3)
{
  document.getElementById("img-1").src="images/dice3.png";
}
if(diceNum1 == 4)
{
  document.getElementById("img-1").src="images/dice4.png";
}
if(diceNum1 == 5)
{
  document.getElementById("img-1").src="images/dice5.png";
}
if(diceNum1 == 6)
{
  document.getElementById("img-1").src="images/dice6.png";
}

// code for the second dice
var ranNum2 = Math.random();
var diceNum2 = ranNum2*6 + 1;
diceNum2 = Math.floor(diceNum2);

if(diceNum2 == 1)
{
  document.getElementById("img-2").src="images/dice1.png";
}
if(diceNum2 == 2)
{
  document.getElementById("img-2").src="images/dice2.png";
}
if(diceNum2 == 3)
{
  document.getElementById("img-2").src="images/dice3.png";
}
if(diceNum2 == 4)
{
  document.getElementById("img-2").src="images/dice4.png";
}
if(diceNum2 == 5)
{
  document.getElementById("img-2").src="images/dice5.png";
}
if(diceNum2 == 6)
{
  document.getElementById("img-2").src="images/dice6.png";
}

//for printing output which player has won the match
if(diceNum1 == diceNum2)
{
  document.querySelector("h2").innerHTML="🏆 The Game has been drawn. 🏆";
  document.getElementById("text-1").innerHTML="DRAW";
  document.getElementById("text-1").style.backgroundColor="white";

  document.getElementById("text-2").innerHTML="DRAW";
  document.getElementById("text-2").style.backgroundColor="white";
}
if(diceNum1 > diceNum2)
{
  document.querySelector("h2").innerHTML="🏆Player-1 has won the Game";
  document.getElementById("text-1").innerHTML="WON";
  document.getElementById("text-1").style.backgroundColor="green";

  document.getElementById("text-2").innerHTML="LOSE";
  document.getElementById("text-2").style.backgroundColor="red";
}
if(diceNum1 < diceNum2)
{
  document.querySelector("h2").innerHTML="Player-2 has won the Game🏆";
  document.getElementById("text-2").innerHTML="WON";
  document.getElementById("text-2").style.backgroundColor="green";

  document.getElementById("text-1").innerHTML="LOSE";
  document.getElementById("text-1").style.backgroundColor="red";
}

}



function forWin()
{

}
