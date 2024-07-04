const Categorie = require('../Models/Categorie');

class CategorieService {
    async getAllCategorie(){
        return await Categorie.findAll();
    }

    async getCategorieByID(categorieID){
        return await Categorie.findByPk(categorieID);
    }
}

module.exports = new CategorieService();