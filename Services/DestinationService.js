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

    async updateDestinaiton(id, destination){
        return await Destination.update(destination, {
            where : {
                DE_ID : id
            }
        })
    }

    async deleteDestination(id){
        return await Destination.destroy({where:{DE_ID : id}});
    }
    
}

module.exports = new DestinationService();