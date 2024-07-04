const Destination = require('../Models/Destination');

class DestinationService {

    async getAllDestination(){
        return await Destination.findAll();
    }

    async getDestinationByID(destinationID){
        return await Destination.findByPk(destinationID);
    }

    async addDestination(destination){
        return await Destination.create(destination);
    }
}

module.exports = new DestinationService();