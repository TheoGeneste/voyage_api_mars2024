const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');


class Client extends Model{

}

Client.init({
    CL_ID : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    CL_Nom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Adresse : {
        type : DataTypes.STRING,
        allowNull : true
    },
    CL_CodePostal : {
        type : DataTypes.CHAR,
        allowNull : true,
        length : 7
    },
    CL_Ville : {
        type : DataTypes.STRING,
        allowNull : true
    },
    CL_Mail : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    CL_Telephone : {
        type : DataTypes.CHAR,
        allowNull : false,
        length : 13,
        unique : true
    }
},{
    sequelize,
    modelName : "Client",
    tableName : "clients",
    timestamps : false
})

module.exports = Client;