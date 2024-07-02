const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Categorie extends Model {

}

Categorie.init({
    CA_ID : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    CA_Libelle : {
        type: DataTypes.STRING,
        allowNull : false
    }
}, {
    sequelize,
    modelName : 'Categorie',
    tableName : "categories",
    timestamps : false
})

module.exports = Categorie;