module.exports = (sequelize, DataTypes) => {
  const exercise = sequelize.define('Exercise', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Exercise: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Equipment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ExerciseType : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    MajorMuscle : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    MinorMuscle : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Time_of_workout: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    Sets: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });

  return exercise;
};
