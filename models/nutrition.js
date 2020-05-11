module.exports = function(sequelize, DataType){
    const Nutrition = sequelize("Nutrition",{
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        description: {
            type: DataType.TEXT,
            allowNull: false,
        },
        calories: {
            type: DataType.INTEGER,
            allowNull: false,
        },

    });
    return Nutrition;
}