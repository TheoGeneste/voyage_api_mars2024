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

    async getPaiementByID(request, result){
        try {
            const paiement = await PaiementService.getPaiementByID(request.params.id);
            result.json(paiement);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du paiement"})
        }
    }

    async addPaiement(request, result){
        try {
            const paiement = await PaiementService.addPaiement(request.body);
            result.json(paiement);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout du paiement"})
        }
    }

    async updatePaiement(request, result){
        try {
            const paiement = await PaiementService.updatePaiement(request.params.id, request.body);
            result.json(paiement);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification du paiement"})
        }
    }

    async deletePaiement(request, result){
        try {
            const paiement = await PaiementService.deletePaiement(request.params.id);
            result.json(paiement);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression du paiement"})
        }
    }
}

module.exports = new PaiementController();