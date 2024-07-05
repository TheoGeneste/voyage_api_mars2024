const DestinationService = require('../Services/DestinationService');

class DestinationController {

    async getAllDestination(request, result){
        try {
            const destinations = await DestinationService.getAllDestination();
            result.json(destinations);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération des destinations"})
        }
    }

    async getDestinationByID(request, result){
        try {
            const destination = await DestinationService.getDestinationByID(request.params.id);
            result.json(destination);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération de la destination"})
        }
    }

    async addDestination(request, result){
        try {
            const destination = await DestinationService.addDestination(request.body);
            result.json(destination);
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de l'ajout de la destination"})
        }
    }

    async updateDestination(request, result){
        try {  
            const destination = await DestinationService.updateDestinaiton(request.params.id, request.body);
            result.json(destination);            
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de la destination"})
        }
    }

    async deleteDestination(request, result){
        try {
            const destination = await DestinationService.deleteDestination(request.params.id);
            result.json(destination);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression de la destination"})
        }
    }
}

module.exports = new DestinationController();