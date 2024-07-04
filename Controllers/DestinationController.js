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
}

module.exports = new DestinationController();