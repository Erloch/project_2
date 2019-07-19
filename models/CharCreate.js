module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    char: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER
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