module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    charName: DataTypes.STRING,
    charI: DataTypes.STRING,
    charH: DataTypes.INTEGER,
    charD: DataTypes.INTEGER,
    charS: DataTypes.INTEGER,
    charX: DataTypes.INTEGER
  });

  // Character.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Character.belongsTo(models.User.username, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  
  return Character;
};