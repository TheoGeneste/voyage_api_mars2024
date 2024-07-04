const Destination = require('../Models/Destination');

class DestinationService {

    async getAllDestination(){
        return await Destination.findAll();
    }
}

module.exports = new DestinationService();