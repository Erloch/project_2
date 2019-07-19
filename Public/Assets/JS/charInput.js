
console.log("this is loaded")

$("#battle-button").on("click", function (event) {
    event.preventDefault();
    console.log("ive been clicked");
    var newChar = {
        char: $("#character-select").val(),
        wins: parseInt($("#wins").val()),
        charS: parseInt($("#charS").val()),
        charD: parseInt($("#charD").val())
    }
    console.log(newChar)

    $.ajax({
        url: "/api/character",
        type: "POST",
        data: newChar
    }).then(function (res) {
        console.log(res, "Data Posted")

        openWin();
    })
});
        function openWin(){
            window.open("/battlePg")
        }

$("#submit").on("click", function(event){
    event.preventDeafault();
    function charCreat() {
        window.open("/new/character")
    }
    charCreat();
});

$("#").on("click", function(event){
    event.preventDeafault();
    function charCreat() {
        window.open("/new/character")
    }
    charCreat();
});



