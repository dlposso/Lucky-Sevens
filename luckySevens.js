/*
Name: David Posso
Date Created: 9/22/18
Most recent revision: 9/22/18
*/


function play(){

var initialBet = document.getElementById("initialBet").value;
var money = initialBet;
var die1 = 0;
var die2 = 0;
var dice = 0;
var rollTally = 0;
var unluckyCounter = 0;
var moneyHeld = [initialBet];
var win = 4;
var loss = 1;
var maxHeld = 0;

  if(money > 0){
  do{

    rollTally++;
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dice = die1 + die2;

    //Winning case
    if (dice == 7){
      money = money + win;//wins $4

      var last_element = moneyHeld[moneyHeld.length - 1];//value of the last element
      //of moneyHeld array that is used to show current money held by player after
      //last roll

      var last_updated = last_element + win;
      //adds $4 to previous roll winnings and stores in last_updated
      moneyHeld.push(last_updated);
    }
    //Losing case
    else{
      money--;
      unluckyCounter++;

      var last_element = moneyHeld[moneyHeld.length - 1];
      var last_updated = last_element - loss;
      moneyHeld.push(last_updated);
      rollTally = rollTally++;
    }


  } while(money>0);

  var totalMax = Math.max(...moneyHeld);//find max value in moneyHeld array
  var numRolls = moneyHeld.indexOf(totalMax);//finds number of rolls till max moneyHeld array

  if(numRolls<1){
    numRolls = 0;
  }

  document.getElementById("p1").innerHTML = ('<hr/><br/><center><br/><br/><h1>Results</h1><table border="1" style="width: 100% height: 100% border-collapse: collapse"><tr><td>Starting Bet</td><td>$' + initialBet + '.00</td></tr><tr><td>Total Rolls Before Going Broke</td><td>'+ rollTally +'</td></tr><tr><td>Highest Amount Won</td><td>$' + totalMax + '</td></tr><tr><td>Roll Count at Highest Amount Won</td><td>'+ numRolls + '</td></tr></table></center>');
  document.getElementById("p2").innerHTML = ("Play Again");

}

else{
  alert("You Do NOT Have Enough Money To Play");
}

}
