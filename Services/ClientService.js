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

    async updateClient(id, client){
        return await Client.update(client, {
            where : {
                CL_ID : id
            }
        })
    }
}

module.exports = new ClientService();