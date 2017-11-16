$(document).ready(function() {
// User must select a character to begin the game.

//Character stats

//Fighter
var fighter = {
    name: "fighter",
    health: 200,
    attack: 60,
    defense: 30

};
$("#fighter").append("Health: " + fighter.health);
//Black Mage
var blackMage = {
    name: "blackMage",
    health: 150,
    attack: 60,
    defense: 20
};
$("#blackMage").append("Health: " + blackMage.health);
//Thief 
var thief = {
    name: "thief",
    health: 175,
    attack: 50,
    defense: 50
};
$("#thief").append("Health: " + thief.health);
//Red Mage
var redMage = {
    name: "redMage",
    health: 160,
    attack: 50,
    defense: 50
};
var characterArray = [fighter, blackMage, thief, redMage];
$("#redMage").append("Health: " + redMage.health);
//Once player has selected their character, they must select a defender.
var selectedChar = "";
var thunderdome = $("#combatMenu");
var state = 0; //State determines at what point the game's settings are at. As the player makes choices, the state is changed to allow more options.

$(".character").on("click", function () {
    selectedChar = $(this).attr("id");
    //As the player clicks a character, 
    var playerChar = $("#selectedChar");
    var defendingChar = $("#defender");
    if ($(this).hasClass("character") === true) {
        $("#charHeader").append("YOUR CHARACTER");
        //Depending on what character is selected, jQuery removes that option and places it into the selected Character div. The state changes to 1 so the enemy can be selected.
        if (selectedChar == "fighter") {
            // $("#selectedChar").addClass("character");
            playerChar.append("<img class='player' data-arrayId='0' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#fighter").remove();
            $("#plyrHp").html("Player Health:" + fighter.health);
            state = 1;
        };
        if (selectedChar == "blackMage") {
            playerChar.append("<img class='player'  data-arrayId='1' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#blackMage").remove();
            playerChar.addClass(selectedChar);
            $("#plyrHp").html("Player Health:" + blackMage.health);
            state = 1;
        };
        if (selectedChar == "thief") {
            playerChar.append("<img class='player' data-arrayId='2' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#thief").remove();
            $("#plyrHp").html("Player Health: " + thief.health);
            state = 1;
        };
        if (selectedChar == "redMage") {
            playerChar.append("<img class='player' data-arrayId='3' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#redMage").remove();
            $("#plyrHp").html("Player Health:" + redMage.health);
            state = 1;
        }
        $(".col-md-3").removeClass("character").addClass("enemy");
        
        //Once a character has been selected, the state changes to 1 where the player can now pick an enemy to face.
    }
    if (($(this).hasClass("enemy") === true) && (state === 1)) {
        $("#defHeader").append("YOUR ENEMY");        
        if (selectedChar == "fighter") {
            defendingChar.append("<img class='defender' data-arrayId='0' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#fighter").remove();
            $("#enemHp").html("Enemy Health: " + fighter.health);
            state = 2;
        };
        if (selectedChar == "blackmage") {
            defendingChar.append("<img class='defender'data-arrayId='1' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#blackMage").remove();
            $("#enemHp").html("Enemy Health: " + blackMage.health);
            state = 2;
        };
        if (selectedChar == "thief") {
            defendingChar.append("<img class='defender' data-arrayId='2' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#thief").remove();
            $("#enemHp").html("Enemy Health: " + thief.health);
            state = 2;
        };
        if (selectedChar == "redmage") {
            defendingChar.append("<img class='defender' data-arrayId='3' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#redMage").remove();
            $("#enemHp").html("Enemy Health: " + redMage.health);
            state = 2;
            
        };
    }

    //jQuery should insert an "attack" button once the defender is selected in the charSelect div.
    if(state == 2) {
        $("#combatBtn").addClass("btnActive");
       
    }
    
    
});
var player;
var enemy;
var defeatedEnemies = []
//Every time the player attacks, the game should subtract the amount of the attack from the defender's health, and increase the player's attack. The game should display the totals in the combatMenu div.
$("#combatBtn").on("click", function() {
    var player = $(".player").attr("data-arrayId");
    var enemy = $(".defender").attr("data-arrayId");
    selectedChar = characterArray[player];
    currEnemy = characterArray[enemy];

    var newHealth = selectedChar.health - currEnemy.defense;
    var damage = currEnemy.health - selectedChar.attack
    selectedChar.attack = selectedChar.attack + selectedChar.attack
    selectedChar.health = newHealth
    //If the player's HP runs out, they lose the game and must restart.
    if(selectedChar.health < 10) {
        alert("You lose")
        $(".btn-danger").addClass("btnActive");
        $(".enemy").remove()
        
    }
    //The defender should counterattack at a flat number, which will never increase.
    
    currEnemy.health = damage;
    if(currEnemy.health < 10) {
        alert("enemy defeated")
        $(".defender").remove();
        $("#defHeader").empty();
        defeatedEnemies.push(currEnemy);
        state = 1;
        //The player should now pick a new defender to begin combat, and fight each other character in the game.
    }
    
    $("#enemHp").html("Enemy Health: " + currEnemy.health);
    $("#plyrHp").html("Player Health: " + selectedChar.health);
    console.log(selectedChar.health)
    console.log(currEnemy.health);
    //If the player eliminates all other characters, they win the game and are prompted to restart the game.
    if (defeatedEnemies.length == 3){
        alert ("You've won!")
        $(".btn-danger").addClass("btnActive");
        
    }
});})
$(".btn-danger").on("click", function() {
    location.reload();
});













