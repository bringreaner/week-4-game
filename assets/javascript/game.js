//create variables
//total wins
var totalWins = 0;
//total losses
var totalLosses = 0;
//crystals
var redCrystal = 0;
var purpleCrystal = 0;
var yellowCrystal = 0;
var blueCrystal = 0;
var endGoal = 0;
var userScore = 0;

$(document).ready(function () {
    //create functions
    resetGame();
    //on start and reset generate random number for each crystal between 1 and 12
    //on start and reset generate random number needed to win between 19 and 120
    function resetGame() {
        redCrystal = Math.ceil(Math.random() * 12);
        purpleCrystal = Math.ceil(Math.random() * 12);
        yellowCrystal = Math.ceil(Math.random() * 12);
        blueCrystal = Math.ceil(Math.random() * 12);
        endGoal = Math.ceil(Math.random() * 101) + 19;
        userScore = 0;

        console.log(redCrystal);
        console.log(purpleCrystal);
        console.log(yellowCrystal);
        console.log(blueCrystal);
        console.log(endGoal);
    //display goal
    $("#endGoal").html(endGoal);
    }

    function userWon() {
        totalWins++;
        $("#totalWins").html(totalWins);
        alert("You won!");
        resetGame();
    }

    function userLost() {
        totalLosses++;
        $("#totalLosses").html(totalLosses);
        alert("You lost!");
        resetGame();
    }


    //onclick the score goes up by # allocated to the crystal and displays score
    $("#redCrystal").on("click", function () {
        userScore = userScore + redCrystal;
        $("#userScore").html(userScore);
        console.log(userScore);
                //if the total = the # needed to win, wins ++ and reset game. alert win
                if (endGoal === userScore) {
                    userWon();
                }
                //else if total exceeds the goal, lossess ++ and game reset. alert loss
                else if (userScore > endGoal) {
                    userLost();
                }
    })

    $("#purpleCrystal").on("click", function () {
        userScore = userScore + purpleCrystal;
        $("#userScore").html(userScore);
        console.log(userScore);
                //if the total = the # needed to win, wins ++ and reset game. alert win
                if (endGoal === userScore) {
                    userWon();
                }
                //else if total exceeds the goal, lossess ++ and game reset. alert loss
                else if (userScore > endGoal) {
                    userLost();
                }
    })

    $("#yellowCrystal").on("click", function () {
        userScore = userScore + yellowCrystal;
        $("#userScore").html(userScore);
        console.log(userScore);
                //if the total = the # needed to win, wins ++ and reset game. alert win
                if (endGoal === userScore) {
                    userWon();
                }
                //else if total exceeds the goal, lossess ++ and game reset. alert loss
                else if (userScore > endGoal) {
                    userLost();
                }
    })

    $("#blueCrystal").on("click", function () {
        userScore = userScore + blueCrystal;
        $("#userScore").html(userScore);
        console.log(userScore);
        console.log(endGoal);

                //if the total = the # needed to win, wins ++ and reset game. alert win
                if (endGoal === userScore) {
                    userWon();
                }
                //else if total exceeds the goal, lossess ++ and game reset. alert loss
                else if (userScore > endGoal) {
                    userLost();
                }
    })
    //end of .ready
})