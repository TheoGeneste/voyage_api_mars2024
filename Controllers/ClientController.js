const ClientService = require('../Services/ClientService');

class ClientController {

    async getAllClient(request, result){
        try {
            const clients = await ClientService.getAllClient();
            result.json(clients);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des clients"})
        }
    }

    async getClientByID(request, result){
        try {
           const client = await ClientService.getClientByID(request.params.clientID)
           result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du client"})
        }
    }

    async addClient(request, result){
        try {
            const client = await ClientService.addClient(request.body);
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout du client"})
        }
    }
}

module.exports = new ClientController();