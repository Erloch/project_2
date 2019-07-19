
console.log("this is loaded")



$("#battle-button").on("click", function (event) {
    event.preventDefault();
    console.log("ive been clicked");
    var newChar = {
        char: $("#charSelect").val(),
        wins: parseInt($("#wins").val()),
        charD: parseInt($("#charD").val()),
        charS: parseInt($("#charS").val())
    }
    console.log(newChar)

    $.ajax({
        url: "/api/character",
        type: "POST",
        data: newChar
    }).then(function (res) {
        console.log(res, "Data Posted")
    })
})


