/*
Name: David Posso
Date Created: 9/22/18
Most recent revision: 9/23/18
*/

function welcome(){
  alert("Welcome to Lucky Sevens. Enter the amount you want to bet. If you want to play again after each round, you can enter a different amount and click on 'Play Again'");
}

function play(){

  var startingBet = document.getElementById("startingBet").value;//Getting the starting bet from input
  var die1 = 0;
  var die2 = 0;
  var sumOfDice = 0;
  var rollTally = 0;//Number of rolls
  var maxHeld = 0;//Maximum amount of money reached

  if(startingBet > 0){

    var money = startingBet;
    var moneyHeld = [money];//Array that keeps track of the amount after each roll

    do{

      rollTally++;//Increase the number of rolls by one every time the loop runs

      //Generating 2 random numbers between 1 and 6 to mitigate dice rolls.
      die1 = Math.floor(Math.random() * 6) + 1;
      die2 = Math.floor(Math.random() * 6) + 1;
      sumOfDice = die1 + die2;//Sum of the dice

      //Winning case
      if (sumOfDice == 7){

        money = money + 4;//Player wins $4
        moneyHeld.push(money);//adding current amount held to moneyHeld array
      }
      //Losing case
      else{

        money--;//Player loses $1
        moneyHeld.push(money);//adding current amount held to moneyHeld array

      }


    } while(money>0);

    var maxAmount = Math.max(...moneyHeld);//finds max value in moneyHeld array
    var numRolls = moneyHeld.indexOf(maxAmount);//finds index of max value in moneyHeld array

    if(numRolls<1){
      //For the case where the Highest amount is actually the starting bet. Holding the first position
      //in moneyHeld,
      numRolls = 0;
    }

    //Displaying Results
    document.getElementById("result").innerHTML = ('<hr width="75%" align="center" height="60px" color="green" /><br/><center><br/><br/><h1>Results</h1><table class="table table-striped" border="1" style="width: 80% height: 100% border-collapse: collapse"><tr><td>Starting Bet</td><td>$' + startingBet + '.00</td></tr><tr><td>Total Rolls Before Going Broke</td><td>'+ rollTally +'</td></tr><tr><td>Highest Amount Won</td><td>$' + maxAmount + '</td></tr><tr><td>Roll Count at Highest Amount Won</td><td>'+ numRolls + '</td></tr></table></center>');

    //changing value of Play button to let player play again
    document.getElementById("button").value = ("Play Again");

  }

  else{
    alert("ENTER A VALID AMOUNT IN ORDER TO PLAY!");
  }


}
