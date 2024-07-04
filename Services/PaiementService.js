const Paiement = require("../Models/Paiement");

class PaiementService {
    async getAllPaiement(){
        return await Paiement.findAll();
    }

    async getPaiementByID(paiementID){
        return await Paiement.findByPk(paiementID);
    }
}

module.exports = new PaiementService();