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

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have +1 added to it
        window.alert("Welcome Robot Gladiators! Round " + (i + 1) );

        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check what's going on at the moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);

    }

    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}