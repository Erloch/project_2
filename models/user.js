module.exports = function(sequelize, Sequelize) {
 
    var Player = sequelize.define('Player', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        username: {
            type: Sequelize.TEXT,
            allowNull: false
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
 
    });
        Player.associate = function(models) {
          
          Player.hasOne(models.Character, {
            onDelete: "cascade"
          });
        };
      
        return Player;
      
}