const Paiement = require("../Models/Paiement");

class PaiementService {
    async getAllPaiement(){
        return await Paiement.findAll();
    }
}

module.exports = new PaiementService();