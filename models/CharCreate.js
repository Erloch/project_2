module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    char: {
      type: DataTypes.STRING
    },

    wins: {
      type: DataTypes.INTEGER,
      DEFAULTVALUE:  0,
    },

    charS: {
      type: DataTypes.INTEGER
    },

    charD: {
      type: DataTypes.INTEGER
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
