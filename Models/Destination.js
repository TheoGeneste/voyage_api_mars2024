const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');
const Categorie = require('./Categorie');

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
        allowNull : false,
        references : {
            model : 'Categorie',
            key : "CA_ID"
        }
    }
},{
    sequelize,
    modelName : "Destination",
    tableName : "destinations",
    timestamps : false
})

Categorie.hasMany(Destination, {as :'destinations', foreignKey: 'CA_ID'});
Destination.belongsTo(Categorie, {as : 'categorie', foreignKey : 'CA_ID'});


module.exports = Destination;