module.exports = function(sequelize, DataTypes){
    var totalDuration;
    var Post = sequelize.define("Post", {
        day:{
            type: DataTypes.STRING,
            default: "Day"

        },
        exercises: [
            {
            type: DataTypes.STRING,
            allowNull: false, 
            validate:{
                len:[1]
            },
            name: {
                type:DataTypes.STRING,
                defaultValue: "Enter an exercise type"
            },
            duration: {
                type:DataTypes.INTEGER,
                defaultValue: "Enter an exercise duration in minutes"
            },
            weight: {
                type: DataTypes.INTEGER
            },
            distance: {
                type: DataTypes.INTEGER

            }
            //Add more DataType
        

        }
    
    
    ]

    });
    return Post;
}

