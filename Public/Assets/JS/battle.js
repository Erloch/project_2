// $("#battle-button").on("click", function(event){
//     event.preventDefault();
//     alert("click Me")
    
// })

// Function to save the selected character
function saveSelectedCharacter(selectedValue) {
    console.log('the selected Character', selectedValue.value);
    window.localStorage.setItem('character', selectedValue.value);
}

// Function to save the selected opponent
function saveSelectedOpponent(selectedValue) {
    console.log('the selected Opponent', selectedValue.value);
    window.localStorage.setItem('opponent', selectedValue.value);
}
