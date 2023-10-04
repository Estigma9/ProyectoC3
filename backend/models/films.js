
module.exports = (sequelize, type)=>{
    return sequelize.define('films', {
        //Model attributes are defined here
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: type.TEXT,
            allowNull: false, 
        },
        description: {
            type: type.TEXT,
            allowNull: false, 
        },
        score: {
            type: type.TEXT,
            allowNull: false, 
        },
        director: {
            type: type.TEXT,
            allowNull: false, 
        },
        year: {
            type: type.TEXT,
            allowNull: false, 
        },
    },
    {
        timestamps: false,
    }
    );
};


