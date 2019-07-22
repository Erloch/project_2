module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    char: {
      type: DataTypes.STRING
    },

    wins: {
      type: DataTypes.INTEGER,
      DEFAULTVALUE:  0,
    }
    
  });

  Character.associate = function(models) {

    Character.belongsTo(models.Player, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Character;
};
