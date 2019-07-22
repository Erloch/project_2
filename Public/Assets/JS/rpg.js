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
        enemyAttackBack:parseInt(Math.floor(Math.random() * 20)) ,
        randomAttack: parseInt(Math.floor(Math.random() * 20)),
        killCounter: "0"
      },
      "bowser": {
        name: "Bowser",
        health: 100,
        attack: 14,
        imageUrl: "Images/bowser.gif",
        enemyAttackBack: parseInt(Math.floor(Math.random() * 20)),
        randomAttack: parseInt(Math.floor(Math.random() * 20)), 
      },
      "link": {
        name: "Link",
        health: 100,
        attack: 8,
        imageUrl: "Images/link.gif",
        enemyAttackBack: parseInt(Math.floor(Math.random() * 20)),
        randomAttack: parseInt(Math.floor(Math.random() * 20)), 
      },
      "megaman": {
        name: "Megaman",
        health: 100,
        attack: 7,
        imageUrl: "Images/megaman.gif",
        enemyAttackBack: parseInt(Math.floor(Math.random() * 20)),
        randomAttack: parseInt(Math.floor(Math.random() * 20)),
      },
      "pacman": {
        name: "Pacman",
        health: 100,
        attack: 8,
        enemyAttackBack:parseInt(Math.floor(Math.random() * 20)),
       
        imageUrl: "Images/pacman.gif",
        randomAttack: parseInt(Math.floor(Math.random() * 20)),  
      },
      "pikachu": {
        name: "Pikachu",
        health: 100,
        attack: 9,
        enemyAttackBack: parseInt(Math.floor(Math.random() * 20)),
        randomAttack: parseInt(Math.floor(Math.random() * 20)),
        imageUrl: "Images/pikachu.gif",
        
      },
      "charizard": {
        name: "Charizard",
        health: 100,
        attack: 9,
        randomAttack:parseInt(Math.floor(Math.random() * 20)),
        enemyAttackBack: parseInt(Math.floor(Math.random() * 20)),
        imageUrl: "Images/charzard.gif",
       
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
  
    
    var updateCharacter = function(charObj, areaRender) {
      // First we empty the area so that we can re-render the new object
      $(areaRender).empty();
      renderCharacter(charObj, areaRender);
    };
  
   
  
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
  
    
    var updateHealth = function logHealth (){
      if (oppStats.health > 0) {
        renderMessage("Enemy Health:" + oppStats.health)
      }
      if (yourStats.health > 0) {
        renderMessage("Your Health:" + yourStats.health)
      }
    }

    // When you click the attack button, run the following game logic...
    $("#attack-button").on("click", function(event) {
      var exp_sound = document.getElementById("attack-button2")
      function playAudio() {
        exp_sound.play();
      }
      playAudio();



       if (yourStats.name =true){

        // Creates messages for our attack and our opponents counter attack.
        var attackMessage = "You attacked " + oppStats.name + " for " + yourStats.attack * turnCounter + " damage.";
        var counterAttackMessage = oppStats.name + " attacked you back for " + oppStats.enemyAttackBack + " damage.";
        clearMessage();
       
      }
   
       
 


        // Reduce opponent-select's health by your attack value.
        oppStats.health -= yourStats.attack * turnCounter;

        // If the enemy still has health..
        if (oppStats.health > 0)  {
          // Render the enemy's updated character card.
          
  
          // Render the combat messages.
          renderMessage(attackMessage);
          renderMessage(counterAttackMessage);
  
          // Reduce your health by the opponent's attack value.
          yourStats.health -= oppStats.enemyAttackBack;
  
          // Render the player's updated character card.
          updateCharacter(yourStats)
        
  
          // If you have less than zero health the game ends.
          // We call the restartGame function to allow the user to restart the game and play again.
          if (yourStats.health > 0){
            updateHealth();
          }
          
          
          
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



          killCount++;
          renderMessage("Kill Count: " + killCount)
          
        

      
        }
       

          var newButton = $("<button>")
          $("#new-fight-button").append(newButton)
          $("#new-fight-button").on("click", function () {
            window.location = "../../newcharacter.html"
          })
          }
        turnCounter++;

    })


///  SUPER ATTACK BUTTON

$("#super-attack").on("click", function() {
  var laser_sound = document.getElementById("laser-attack")
  function playAudio() {
    laser_sound.play();
  }
  playAudio();
  
  
  if (yourStats.name = true){
    var attackMessage = "You attacked " + oppStats.name + " for " +yourStats.randomAttack * turnCounter + " damage.";
    var counterAttackMessage = oppStats.name + " attacked you back for " + oppStats.enemyAttackBack + " damage.";
    clearMessage();
    }
    
   
    // Reduce opponent-select's health by your attack value.
    oppStats.health -= yourStats.randomAttack * turnCounter;
  
    // If the enemy still has health..
    if (yourStats.health > 0) {
      // Render the enemy's updated character card.
   

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
        
      }
    }
    
  
    else {
    //   // If the enemy has less than zero health they are defeated.
    //   // Remove your opponent's character card.
    //   $("#opponent-select").empty();

      var gameStateMessage = "You have defeated " + oppStats.name + ", you can choose to fight another enemy.";
      renderMessage(gameStateMessage);
      
      }
      

    killCount++
    turnCounter++
    

    
    });
  

  
    $("#super-attack").on("click", function() {
      $(this).prop("disabled", true);
      console.log("off switch")
    })