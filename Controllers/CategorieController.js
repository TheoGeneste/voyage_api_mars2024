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
}

module.exports = new CategorieController()