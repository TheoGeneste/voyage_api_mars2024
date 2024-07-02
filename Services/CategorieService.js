const Categorie = require('../Models/Categorie');

class CategorieService {
    async getAllCategorie(){
        return await Categorie.findAll();
    }
}

module.exports = new CategorieService();