
console.log("this is loaded")



$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log("ive been clicked");
    var newChar = {
        charName: $("#charName").val().trim(),
        charH: parseInt($("#charH").val()),
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

