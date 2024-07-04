const CategorieService = require('../Services/CategorieService');

class CategorieController{
    async getAllCategorie(request, result){
        try {
           const categories = await CategorieService.getAllCategorie();
           result.json(categories);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des catégories."})
        }
    }

    async getCategoerieById(request, result){
        try {
            const categorie = await CategorieService.getCategorieByID(request.params.id);
            result.json(categorie);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de la catégorie"})
        }
    }

    async addCategorie(request, result){
        try {
            const categorie = await CategorieService.addCategorie(request.body);
            result.json(categorie);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout de la catégorie"})
        }
    }
}

module.exports = new CategorieController()