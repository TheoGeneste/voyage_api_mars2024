const express = require('express');
const router = express.Router();
const CategorieController = require('../Controllers/CategorieController');

// Toutes les routes seront précédé de /categories

router.get("/", (request, result) => {CategorieController.getAllCategorie(request, result)});
router.get("/:id", (request, result) => {CategorieController.getCategoerieById(request, result)});
router.post("/", (request, result) => {CategorieController.addCategorie(request, result)});
router.patch('/:id', (request, result) => {CategorieController.updateCategorie(request, result)});
router.delete('/:id', (request, result) => {CategorieController.deleteCategorie(request, result)});


module.exports = router;