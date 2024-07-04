const PaiementService = require("../Services/PaiementService");

class PaiementController{
    async getAllPaiement(request, result){
        try {
            const paiements = await PaiementService.getAllPaiement();
            result.json(paiements);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des paiements"})
        }
    }
}

module.exports = new PaiementController();