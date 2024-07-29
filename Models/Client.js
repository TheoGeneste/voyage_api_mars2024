const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');
const bcrypt = require('bcrypt');

class Client extends Model{
    async validatePassword(password){
        return await bcrypt.compare(password, this.CL_Password);
    }
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
    },
    CL_Password : {
        type : DataTypes.TEXT,
        allowNull : false
    }
},{
    sequelize,
    modelName : "Client",
    tableName : "clients",
    timestamps : false,
    hooks :{
        beforeCreate : async (client) => {
            client.CL_Password = await bcrypt.hash(client.CL_Password, 10)
        },
        beforeUpdate : async (client) => {
            console.log(client.CL_Password);
            if (client.changed('CL_Password')) {
                client.CL_Password = await bcrypt.hash(client.CL_Password, 10);
            }
        }
    }
})

module.exports = Client;