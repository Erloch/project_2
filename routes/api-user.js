var db = require("../models")
require("dotenv").config()
var bCrypt = require('bcryptjs');
// var salt = bCrypt.genSaltSync(process.env.SALT);
// var hash = bCrypt.hashSync(process.env.HASH , salt)

module.exports = function(app){
    app.get("/api/user", function(req,res){
        db.Player.findAll({})
        .then(function(dbUser){
            res.json(dbUser)
        })
    })

    app.post("/api/player/signup", function(req,res){
      console.log(req.body);
        db.Player.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(dbUser){
          console.log(dbUser);
          if(!dbUser){
              // console.log(typeof process.env.SALT);
              
            bCrypt.genSalt(parseInt(process.env.SALT), function(err,salt){
              bCrypt.hash(req.body.password, salt, function(err,hash){
                if(err) return (err);
                req.body.password = hash
                db.Player.create(req.body).then(function(dbUser){
                  res.json(dbUser)
                })
              })
            })
          } else{
            res.json([{ message: "This email is already taken!"}])
          }
        })
    })

    app.post("/api/player/signin", function(req,res){
        db.Player.findOne({
            where:{
              email: req.body.email
            }
        }).then(function(playerinfo){
            if(!playerinfo){
                res.json([{ message: "This Email has not yet been registered !"}])
             } else{
                bCrypt.compare(req.body.password, playerinfo.password, function(err,response){
                  if(err){
                    return(err)
                  }
                })
            //  res.json([{username:playerinfo.username, id:playerinfo.id}])
            res.json("/new/character")
            }
        })
    })
    app.get("/api/user_data", function (req, res) {
      console.log("This is req", req.body)
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      }
      else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user.id,
    });
  }
});
}