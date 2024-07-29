const Client = require('../Models/Client');

class ClientService {

    async getAllClient(){
        return await Client.findAll();
    }

    async getClientByID(clientId){
        return await Client.findByPk(clientId, {include : 'reservations'});
    }

    async addClient(client){
        return await Client.create(client);
    }

    async updateClient(id, client){
        return await Client.update(client, {
            where : {
                CL_ID : id
            },
            individualHooks : true
        })
    }

    async deleteClient(id){
        return await Client.destroy({where : {CL_ID : id}})
    }

    async login(email,password){
        const client = await Client.findOne({where : {CL_Mail : email}});
        if (!client || !await client.validatePassword(password)) {
            throw new Error("Email ou password incorrect");
        }
        return client;
    }
}

module.exports = new ClientService();