const express = require('express');
const ClientController = require('../Controllers/ClientController');
// Constante pour pouvoir specifier des routes
const router = express.Router();
// Toutes les routes seront précédé par /clients

router.get("/", (request, result) => {ClientController.getAllClient(request, result)});

module.exports = router;