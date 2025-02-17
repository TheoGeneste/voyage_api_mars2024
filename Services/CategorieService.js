const Categorie = require('../Models/Categorie');

class CategorieService {
    async getAllCategorie(){
        return await Categorie.findAll();
    }

    async getCategorieByID(categorieID){
        return await Categorie.findByPk(categorieID, {include : "destinations"});
    }

    async addCategorie(categorie){
        // INSERT INTO CATEGORIES (CA_Libelle) VALUES("Test Catégorie");
        return await Categorie.create(categorie);
    }

    async updateCategorie(id, categorie){
        // Equivalent de UPDATE CATEGORIE SET CA_LIBELLE = categorie WHERE CA_ID = id;
        return await Categorie.update(categorie,{
            where : {
                CA_ID : id
            }
        } )
    }

    async deleteCategorie(id){
        return await Categorie.destroy({
            where : {
                CA_ID : id
            }
        })
    }
}

module.exports = new CategorieService();