const express = require('express');
const PaiementController = require('../Controllers/PaiementController');
const router = express.Router();

// Toutes les routes sont précédé de /paiements
router.get('/', (request, result) => {PaiementController.getAllPaiement(request, result)});
router.get('/:id', (request, result) => {PaiementController.getPaiementByID(request, result)});
router.post('/', (request, result) => {PaiementController.addPaiement(request, result)});

module.exports = router;