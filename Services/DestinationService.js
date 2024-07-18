const Destination = require('../Models/Destination');

class DestinationService {

    async getAllDestination(){
        return await Destination.findAll({include : 'categorie'});
    }

    async getDestinationByID(destinationID){
        return await Destination.findByPk(destinationID, {include : ['reservations', 'categorie']});
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