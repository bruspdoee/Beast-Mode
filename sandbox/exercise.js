
module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('Exercise', {
      day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      bodypart: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      time: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
  
    });
  
    return Exercise;
  };