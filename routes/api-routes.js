var db = require("../models");
// var passport = require("../config/passport");
// var Sequelize = require("sequelize");
// var route = require("router");
// const Op = Sequelize.Op;

module.exports = function(app){

app.get("/api/character", function(req, res){
    db.Character.findAll({
// include: [db.post]
    }).then(function(dbCharacter){
        res.json(dbCharacter);
    });
});
    app.get("/api/character/:id", function (req, res){
    db.Character.findOne({
        where: {
            id: req.params.id
        },
    }).then(function(dbCharacter){
res.json(dbCharacter);
    })
})

app.post("/api/character", function(req, res){
    console.log(req.body);

    db.Character.create({
        charName: req.body.charName,
        charI: req.body.charI,
        charH: req.body.charH,
        charD: req.body.charD,
        charS: req.body.charS,
        charX: req.body.charX
    }).then(function(dbCharacter){
        res.json(dbCharacter);
    }) ;
});

};

