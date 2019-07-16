module.exports = function(sequelize, DataTypes) {
  var CharCreate = sequelize.define("CharCreate", {
    char_name: DataTypes.STRING,
    img: DataTypes.STRING,
    health:DataTypes.INT,
    def:DataTypes.INT,
    stren:DataTypes.INT,
    xp:DataTypes.INT
  });
  return CharCreate;
};