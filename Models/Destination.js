const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Destination extends Model{

}

// Équivalent du new Destination();
Destination.init({
    DE_ID : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    DE_Libelle : {
        type : DataTypes.STRING,
        allowNull : false
    },
    DE_Description : {
        type : DataTypes.TEXT,
        allowNull : true  
    },
    DE_Prix : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },
    DE_Disponibilite : {
        type : DataTypes.TINYINT,
        defaultValue : 0,
        allowNull : false
    },
    CA_ID : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
},{
    sequelize,
    modelName : "Destination",
    tableName : "destinations",
    timestamps : false
})

module.exports = Destination;