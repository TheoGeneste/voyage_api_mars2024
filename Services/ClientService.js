const Client = require('../Models/Client');

class ClientService {

    async getAllClient(){
        return await Client.findAll();
    }

    async getClientByID(clientId){
        return await Client.findByPk(clientId);
    }

    async addClient(client){
        return await Client.create(client);
    }
}

module.exports = new ClientService();