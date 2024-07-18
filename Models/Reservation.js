const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');
const Client = require("./Client");
const Destination = require('./Destination');

class Reservation extends Model{

}

Reservation.init({
    RE_ID: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    RE_DateReservation : {
        type : DataTypes.DATE,
        allowNull : false
    },
    RE_DateDebut : {
        type : DataTypes.DATE,
        allowNull : false
    },
    RE_DateFin : {
        type : DataTypes.DATE,
        allowNull : false
    },
    DE_ID : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Destination",
            key : "DE_ID"
        }
    },
    CL_ID : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : "Client",
            key : "CL_ID"
        }
    }
}, {
    sequelize,
    modelName : "Reservation",
    tableName : "reservations",
    timestamps : false
})

Client.hasMany(Reservation, {as : 'reservations', foreignKey: "CL_ID"});
Reservation.belongsTo(Client, {as : 'client', foreignKey  : 'CL_ID'});

Destination.hasMany(Reservation, {as : 'reservations', foreignKey : 'DE_ID'});
Reservation.belongsTo(Destination, {as : 'destination' , foreignKey : 'DE_ID'});


module.exports = Reservation;