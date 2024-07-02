const express = require('express');
const router = express.Router();
const CategorieController = require('../Controllers/CategorieController');

// Toutes les routes seront précédé de /categories
router.get("/", (request, result) => {CategorieController.getAllCategorie(request, result)});


module.exports = router;