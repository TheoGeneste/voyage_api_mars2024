const Client = require('../Models/Client');

class ClientService {

    async getAllClient(){
        return await Client.findAll();
    }

    async getClientByID(clientId){
        return await Client.findByPk(clientId);
    }
}

module.exports = new ClientService();