const ClientService = require('../Services/ClientService');
const AuthenticateController = require('./AuthenticateController');

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

    async updateClient(request, result){
        try {
            const client = await ClientService.updateClient(request.params.id, request.body)
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification du client"})
        }
    }

    async deleteClient(request, result){
        try {
            const client = await ClientService.deleteClient(request.params.id);
            result.json(client);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppresion du client"})
        }
    }
    
    async login(request, result){
        try {
            // Destructuration
            const {email, password} = request.body;
            const user = await ClientService.login(email, password);
            result.json({token : AuthenticateController.generateToken(user)});
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la connexion"})
        }
    }

}

module.exports = new ClientController();