module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    char_name: DataTypes.STRING,
    img: DataTypes.STRING,
    health: DataTypes.INTEGER,
    def: DataTypes.INTEGER,
    stren: DataTypes.INTEGER,
    xp: DataTypes.INTEGER
  });
  return Character
  // Character.associate = function(){
  //   // look at authors join sequalize
  // }
}
