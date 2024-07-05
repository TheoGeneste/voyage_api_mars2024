const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');
const Reservation = require('./Reservation');
const Regler = require("./Regler");

class Paiement extends Model{

}

Paiement.init({
    PA_ID : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement :true
    },
    PA_Montant : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },
    PA_DatePaiement : {
        type : DataTypes.DATE,
        allowNull : false,
        defaultValue : new Date()
    },
    PA_Methode : {
        type : DataTypes.STRING,
        allowNull : false
    },
    PA_Statut : {
        type: DataTypes.STRING,
        allowNull : false
    }    
},{
    sequelize,
    modelName: "Paiement",
    tableName : "paiements",
    timestamps : false
})

Paiement.belongsToMany(Reservation, {as : 'reservations', foreignKey : "PA_ID" , through: Regler});
Reservation.belongsToMany(Paiement, {as : 'paiements', foreignKey : 'RE_ID', through: Regler});

module.exports = Paiement;