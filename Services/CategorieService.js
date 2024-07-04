const Categorie = require('../Models/Categorie');

class CategorieService {
    async getAllCategorie(){
        return await Categorie.findAll();
    }

    async getCategorieByID(categorieID){
        return await Categorie.findByPk(categorieID);
    }

    async addCategorie(categorie){
        // INSERT INTO CATEGORIES (CA_Libelle) VALUES("Test Catégorie");
        return await Categorie.create(categorie);
    }
}

module.exports = new CategorieService();