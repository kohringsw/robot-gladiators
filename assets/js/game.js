// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// wrap the game in a startGame() function

// when the player wins or loses call an endGame() function 
    // AND give the player's stats 
    // AND ask if the player wants to play again 
    // AND (if yes) call startGame() function to restart the game

// after a player skips or defeats an enemy (and there are still more robots to fight) ask the player if they would like to shop
    // if no, continue as normal
    // if yes, call shop() function
    // in the shop() function ask the player if they want to "refill" health, "upgrade" attack, or "leave" the shop
        // if refill, subtract money points and increase health
        // if upgrade, subtract money points and increase attack
        // if leave alery goodbye and exit the function 
        // if any other invalid option call shop() again

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
        
        // ask player if they'd like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player chooses to skip confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {

            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?")

            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye.");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
    
        // remove enemy's health by subtracting the amount set in the player attack variable
        enemyHealth = enemyHealth - playerAttack;

        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;
            console.log("playerMoney", playerMoney);

            // leave while() loop since enemy is dead
            break;
        }

            else {
                window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
            }

        // remove the players health by subtracting the amount set in the enemy attack variable
        playerHealth = playerHealth - enemyAttack;

        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        }

        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// startGame function
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);

            // if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                shop();
            }
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// endGame function
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }

    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }

    else {
        window.alert("Thank you for play Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    console.log("entered the shop");
}

// startGame() function call
startGame();