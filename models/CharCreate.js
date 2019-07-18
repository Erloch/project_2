module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    charName: DataTypes.STRING,
    charI: DataTypes.STRING,
    charH: DataTypes.INTEGER,
    charD: DataTypes.INTEGER,
    charS: DataTypes.INTEGER,
    charX: DataTypes.INTEGER
  });
  return Character;
};