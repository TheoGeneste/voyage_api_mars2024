const { DataTypes, Model } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Regler extends Model{

}

Regler.init({
    RE_ID : {
        type : DataTypes.INTEGER,
        references : {
            model : 'Reservation',
            key : 'RE_ID'
        }
    },
    PA_ID : {
        type : DataTypes.INTEGER,
        references : {
            model : 'Paiement',
            key : 'PA_ID'
        }
    }
},{
    sequelize,
    modelName : 'Regler',
    tableName : 'regler',
    timestamps : false
})

module.exports = Regler;