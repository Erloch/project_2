// Execute this code when the DOM has fully loaded.

    // VARIABLE DECLARATION
    // ===================================================================
  
    // Creating an object to hold our characters.
  
    var yourCharacter = localStorage.getItem("character")
    var yourOpponent = localStorage.getItem("opponent")

    console.log(yourCharacter);
    console.log(yourOpponent);

   
    
    
    var characters = {
      "mario": {
        name: "Mario",
        health: 100,
        attack: 8,
        imageUrl: "Images/mario.gif",
        enemyAttackBack: 15,
        
      },
      "bowser": {
        name: "Bowser",
        health: 100,
        attack: 14,
        imageUrl: "Images/bowser.gif",
        enemyAttackBack: 5
      },
      "link": {
        name: "Link",
        health: 100,
        attack: 8,
        imageUrl: "Images/link.gif",
        enemyAttackBack: 20
      },
      "megaman": {
        name: "Megaman",
        health: 100,
        attack: 7,
        imageUrl: "Images/megaman.gif",
        enemyAttackBack: 25
      },
      "pacman": {
        name: "Pacman",
        health: 100,
        attack: 8,
        imageUrl: "Images/pacman.gif"
      },
      "pikachu": {
        name: "Pikachu",
        health: 100,
        attack: 9,
        imageUrl: "Images/pikachu.gif"
      },
      "charizard": {
        name: "Charizard",
        health: 100,
        attack: 9,
        imageUrl: "Images/charzard.gif"
      }

    };
  

    var yourStats = characters[yourCharacter]
    
    console.log(yourStats);

    var oppStats = characters[yourOpponent]
    console.log(oppStats)


    // Will be populated when the player selects a character.
    var character_select;


    // Populated with all the characters the player didn't select.
    // var combatants = [];
    // Will be populated when the player chooses an opponent.
    var opponent_select;


    // Will keep track of turns during combat. Used for calculating player damage.
    var turnCounter = 1;
    // Tracks number of defeated opponents.
    var killCount = 0;
  
    // FUNCTIONS
    // ===================================================================
  
    // This function will render a character card to the page.
    // The character rendered, the area they are rendered to, and their status is determined by the arguments passed in.
    var renderCharacter = function(character, renderArea) {
      // This block of code builds the character card, and renders it to the page.
      var charDiv = $("<div class='character' data-name='" + character.name + "'>");
      var charName = $("<div class='character-name'>").text(character.name);
      var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);     
      var charHealth = $("<div class='character-health'>").text(character.health);
      charDiv.append(charName).append(charImage).append(charHealth);
      $(renderArea).append(charDiv);
      


    
    }
  
    // this function will load all the characters into the character section to be selected
    // var initializeGame = function() {
    //   // Loop through the characters object and call the renderCharacter function on each character to render their card.

    //   for (var key in characters) {
    //     renderCharacter(characters[key], "#players-form");
    //   }
    // };
  
    // // remember to run the function here
    // initializeGame();
  
    // This function handles updating the selected player or the current opponent-select. If there is no selected player/opponent-select this
    // function will also place the character based on the areaRender chosen (e.g. #selected-character or #opponent-select)
    var updateCharacter = function(charObj, areaRender) {
      // First we empty the area so that we can re-render the new object
      $(areaRender).empty();
      renderCharacter(charObj, areaRender);
    };
  
    // This function will render the available-to-attack enemies. This should be run once after a character has been selected
    // var renderEnemies = function(enemyArr) {
    //   for (var i = 0; i < enemyArr.length; i++) {
    //     renderCharacter(enemyArr[i], "#available-to-attack-section");
    //   }
    // };
  
    // Function to handle rendering game messages.
    var renderMessage = function(message) {
      // Builds the message and appends it to the page.
      var gameMessageSet = $("#game-message");
      var newMessage = $("<div>").text(message);
      gameMessageSet.append(newMessage);
    };
  
    // Function which handles restarting the game after victory or defeat.
    var restartGame = function(resultMessage) {
      // When the 'Restart' button is clicked, reload the page.
      var restart = $("<button>Restart</button>").click(function() {
        location.reload();
      });
  
      // Build div that will display the victory/defeat message.
      var gameState = $("<div>").text(resultMessage);
  
      // Render the restart button and victory/defeat message to the page.
      $("body").append(gameState);
      $("body").append(restart);
    };
  
    // Function to clear the game message section
    var clearMessage = function() {
      var gameMessage = $("#game-message");
  
      gameMessage.text("");
    };
  
    // ===================================================================
  
    // On click event for selecting our character.
    // $("#players-form").on("click", ".character", function() {
    //   // Saving the clicked character's name.
    //   var name = $(this).attr("data-name");
  
    //   // If a player character has not yet been chosen...
    //   if (!yourCharacter) {
    //     // We populate character-select with the selected character's information.
    //     yourCharacter = characters[name];
    //     // We then loop through the remaining characters and push them to the combatants array.
    //     // for (var key in characters) {
    //     //   if (key !== name) {
    //     //     combatants.push(characters[key]);
    //     //   }
    //     // }
  
      
  
    //     // Then render our selected character and our combatants.
    //     updateCharacter(yourCharacter);
    //     // renderEnemies(combatants);
    //   }
    // });
  
    // Creates an on click event for each enemy.
    // $("#available-to-attack-section").on("click", ".character", function() {
    //   // Saving the opponent's name.
    //   var name = $(this).attr("data-name");
  
    //   // If there is no opponent-select, the clicked enemy will become the opponent-select.
    //   // if ($("#opponent-select").children().length === 0) {
    //   //   opponent_select = characters[name];
    //   //   updateCharacter(yourOpponent, "#opponent-select");
  
    //   //   // remove element as it will now be a new opponent-select
    //   //   $(this).remove();
    //   //   clearMessage();
    //   // }
    // });


    // When you click the attack button, run the following game logic...
    $("#attack-button").on("click", function() {
      var exp_sound = document.getElementById("attack-button2")
      
      
      function playAudio() {
        exp_sound.play();
      }
      playAudio();
      // If there is a opponent-select, combat will occ
      // if ($("#opponent-select").children().length !== 0) {
       


       if (yourStats.name =true){
        // Creates messages for our attack and our opponents counter attack.
        var attackMessage = "You attacked " + oppStats.name + " for " + yourStats.attack * turnCounter + " damage.";
        var counterAttackMessage = oppStats.name + " attacked you back for " + oppStats.enemyAttackBack + " damage.";
        clearMessage();
        console.log(
          'GO ROB')
        }
        else {
          console.log("FUCK YOU ROB")
        }
       
  
        // Reduce opponent-select's health by your attack value.
        oppStats.health -= yourStats.attack * turnCounter;
  console.log(oppStats)
        // If the enemy still has health..
        if (oppStats.health > 0) {
          // Render the enemy's updated character card.
          updateCharacter(oppStats);
  
          // Render the combat messages.
          renderMessage(attackMessage);
          renderMessage(counterAttackMessage);
  
          // Reduce your health by the opponent's attack value.
          yourStats.health -= oppStats.enemyAttackBack;
  
          // Render the player's updated character card.
          updateCharacter(yourStats)
  
          // If you have less than zero health the game ends.
          // We call the restartGame function to allow the user to restart the game and play again.
          if (yourStats.health <= 0) {
            clearMessage();
            restartGame("You have been defeated...GAME OVER!!!");
            $("#attack-button").off("click");
          }
        }
        else {
          // If the enemy has less than zero health they are defeated.
          // Remove your opponent's character card.
          // $("#opponent-select").empty();
  
          var gameStateMessage = "You have defeated " + oppStats.name + ", you can choose to fight another enemy.";
          renderMessage(gameStateMessage);
  
          // Increment your kill count.
          killCount++;
  
          // If you have killed all of your opponents you win.
          // Call the restartGame function to allow the user to restart the game and play again.
          // if (killCount >= combatants.length) {
          //   clearMessage();
          //   $("#attack-button").off("click");
          //   restartGame("You Won!!!! GAME OVER!!!");
          // }
        }
        // Increment turn counter. This is used for determining how much damage the player does.
        turnCounter++;
  
      // else {
      //   // If there is no opponent-select, render an error message.
      //   clearMessage();
      //   renderMessage("No enemy here.");
      // }
    });


///  SUPER ATTACK BUTTON

$("#super-attack").on("click", function() {
  var laser_sound = document.getElementById("laser-attack")
  console.log("in attack button click 2: ", laser_sound);
  
  function playAudio() {
    laser_sound.play();
  }
  playAudio();
  // If there is a opponent-select, combat will occ
  // if ($("#opponent-select").children().length !== 0) {
    // Creates messages for our attack and our opponents counter attack.
    
    
    if (yourCharacter = true){
    var attackMessage = "You attacked " + oppStats.name + " for " +yourStats.attack * turnCounter + " damage.";
    var counterAttackMessage = oppStats.name + " attacked you back for " + oppStats.enemyAttackBack + " damage.";
    clearMessage();
    }
    
   
    // Reduce opponent-select's health by your attack value.
    oppStats.health -= yourStats.attack * turnCounter;

    // If the enemy still has health..
    if (yourStats.health > 0) {
      // Render the enemy's updated character card.
      updateCharacter(oppStats);

      // Render the combat messages.
      renderMessage(attackMessage);
      renderMessage(counterAttackMessage);

      // Reduce your health by the opponent's attack value.
      yourStats.health -= oppStats.enemyAttackBack;

      // Render the player's updated character card.
      updateCharacter(yourStats);

      // If you have less than zero health the game ends.
      // We call the restartGame function to allow the user to restart the game and play again.
      if (yourStats.health <= 0) {
        clearMessage();
        restartGame("You have been defeated...GAME OVER!!!");
        $("super-attack").off("click");
      }
    }
  
    // else {
    //   // If the enemy has less than zero health they are defeated.
    //   // Remove your opponent's character card.
    //   $("#opponent-select").empty();

      var gameStateMessage = "You have defeated " + oppStats.name + ", you can choose to fight another enemy.";
      renderMessage(gameStateMessage);

      // Increment your kill count.
      killCount++;

      // If you have killed all of your opponents you win.
      // Call the restartGame function to allow the user to restart the game and play again.
      // if (killCount >= combatants.length) {
      //   clearMessage();
      //   $("#super-attack").off("click");
      //   restartGame("You Won!!!! GAME OVER!!!");
        
      // };
    })
    // Increment turn counter. This is used for determining how much damage the player does
  //     else {
  //   // If there is no opponent-select, render an error message.
  //   clearMessage();
  //   renderMessage("No enemy here.");
  // }


// function openWin() {
//   window.open("../../homePg");
// }


// $("#battle-button").on('click', function () {
//   alert("it hit this")
//   console.log("Link to page is working")
// openWin(
