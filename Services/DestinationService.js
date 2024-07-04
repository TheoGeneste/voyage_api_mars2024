const Destination = require('../Models/Destination');

class DestinationService {

    async getAllDestination(){
        return await Destination.findAll();
    }

    async getDestinationByID(destinationID){
        return await Destination.findByPk(destinationID);
    }
}

module.exports = new DestinationService();