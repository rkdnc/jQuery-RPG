$(document).ready(function() {
// User must select a character to begin the game.

//Character stats

//Fighter
var fighter = {
    name: "fighter",
    health: 120,
    attack: 30,
    defense: 30,

};
$("#fighter").append("Health: " + fighter.health);
//Black Mage
var blackMage = {
    name: "blackMage",
    health: 80,
    attack: 60,
    defense: 20,
};
$("#blackMage").append("Health: " + blackMage.health);
//Thief 
var thief = {
    name: "thief",
    health: 90,
    attack: 25,
    defense: 30,
};
$("#thief").append("Health: " + thief.health);
//Red Mage
var redMage = {
    name: "redMage",
    health: 110,
    attack: 30,
    defense: 30,
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
            playerChar.append("<img class='player' id='fighter' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#fighter").remove();
            state = 1;
        };
        if (selectedChar == "blackMage") {
            playerChar.append("<img class='player' class='player' id='blackMage' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#blackMage").remove();
            playerChar.addClass(selectedChar);
            state = 1;
        };
        if (selectedChar == "thief") {
            playerChar.append("<img class='player' id='thief' src=assets/images/" + selectedChar + "-walk.gif>");;
            $("#thief").remove();
            state = 1;
        };
        if (selectedChar == "redMage") {
            playerChar.append("<img class='player' id='redMage' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#redMage").remove();
            state = 1;
        }
        $(".col-md-3").removeClass("character").addClass("enemy");
        
        //Once a character has been selected, the state changes to 1 where the player can now pick an enemy to face.
    }
    if (($(this).hasClass("enemy") === true) && (state === 1)) {
        $("#defHeader").append("YOUR ENEMY");        
        if (selectedChar == "fighter") {
            defendingChar.append("<img class='defender' id='fighter' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#fighter").remove();
            state = 2;
        };
        if (selectedChar == "blackMage") {
            defendingChar.append("<img class='defender' id='blackMage' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#blackMage").remove();
            state = 2;
        };
        if (selectedChar == "thief") {
            defendingChar.append("<img class='defender' id='thief' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#thief").remove();
            state = 2;
        };
        if (selectedChar == "redMage") {
            defendingChar.append("<img class='defender' id='redMage' src=assets/images/" + selectedChar + "-walk.gif>");
            $("#redMage").remove();
            state = 2;
            
        };
    }

    //jQuery should insert an "attack" button once the defender is selected in the charSelect div.
    if(state == 2) {
        $("#combatBtn").addClass("btnActive");
       
    }
    //For some reason, this only works when nested within this other click event.....but I'll take it.
    
});
$("#combatBtn").on("click", function() {
    var player = $(".player").attr("id");
    console.log(player);
    var enemy = $(".defender").attr("id");
});})





//Every time the player attacks, the game should subtract the amount of the attack from the defender's health, and increase the player's attack. The game should display the totals in the combatMenu div.

//The defender should counterattack at a flat number, which will never increase.

//Once the defender has reached 0 hit points, the character's sprite should be replaced with the dead sprite.

//The player should now pick a new defender to begin combat, and fight each other character in the game.

//If the player's HP runs out, they lose the game and must restart.

//If the player eliminates all other characters, they win the game and are prompted to restart the game.