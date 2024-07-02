const Client = require('../Models/Client');

class ClientService {

    async getAllClient(){
        return await Client.findAll();
    }
}

module.exports = new ClientService();