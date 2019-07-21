
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

// function charCreat() {
//     window.open("/new/character")
// }

$("#submit").on("click", function(event){
    event.preventDefault();
    var newPlayer = {
        username: $("#userName").val().trim(),
        email: $("#userEmail").val().trim(),
        password: $("#password").val().trim(),
    };
    $.post("/api/player/signup", newPlayer)
    .then(function(data){
        console.log("Data is here" ,data[0].message)
        console.log("Data is here" ,typeof(data[0].message))
        if(data[0].message === "This email is already taken!"){
            alert("That email is already taken!")
        }else{
            $("#userName").val("")
            $("#userEmail").val("")
            $("#password").val("")
            window.open("/new/character")
        }
    })
})


