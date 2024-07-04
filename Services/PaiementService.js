const Paiement = require("../Models/Paiement");

class PaiementService {
    async getAllPaiement(){
        return await Paiement.findAll();
    }

    async getPaiementByID(paiementID){
        return await Paiement.findByPk(paiementID);
    }

    async addPaiement(paiement){
        return await Paiement.create(paiement);
    }
}

module.exports = new PaiementService();