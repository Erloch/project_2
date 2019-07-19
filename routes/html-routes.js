// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var userLoggedIn = []

module.exports = function(app){
   
    // Routes
    // =============================================================
   
    // index route 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    // battle page route
    app.get("/homePg", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/homePg.html"));
    });
    
    
    // character create route
    app.get("/api/character", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/charCreate.html"));
    });
    // character select route
    app.get("/new/character", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/newcharacter.html"));
    });


    
    
    app.get("/new/character", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/newcharacter.html"));
    });
    // // authors route loads author-manager.html
    // app.get("/authors", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    // });
   
};
