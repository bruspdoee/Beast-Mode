module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        exercise: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        equipment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        exercise_type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        major_muscle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        minor_muscle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        example: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        time_of_workout: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        sets: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
        // createdAt: {
        //     type: DataTypes.DATE,
        // },
        // updatedAt: {
        //     type: DataTypes.DATE,
        // },
    });
    return Exercise;
};