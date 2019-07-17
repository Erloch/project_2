$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log("ive been clicked");
    var newChar = {
        charName: $("#charName").val().trim(),
        
        charH: $("#charH").parseInt().val(),
        charD: $("#charD").parseInt().val(),
        charS: $("#charS").parseInt().val()
    }
    console.log(newChar)

    $.post("api/new", newChar)
        .then(function(res){
console.log(res)
           
        })
})

