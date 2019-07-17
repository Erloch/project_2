var db = require("../models");
var passport = require("../config/passport");
var Sequelize = require("sequelize");
var route = require("router");
const Op = Sequelize.Op;

module.exports = function(app){
app.get("/api/character/:id", function (req, res){
    db.character.findOne({}).then(function(dbcharacter){
res.json(dbcharacter);
    })
})

app.post("/api/character/", function(req, res){
    console.log(req.body);

    // dbcharacter.create({
    //     char_name: req.body.char_name,
    //     img: req.body.img,
    //     health: req.body.health,
    //     def: req.body.def,
    //     stren: req.body.stren,
    //     xp: req.body.xp
    // }).then(function(){
    //     res.json(dbcharacter);
    // }) 
})
}

