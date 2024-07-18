const express = require('express');
const ClientController = require('../Controllers/ClientController');
// Constante pour pouvoir specifier des routes
const router = express.Router();
// Toutes les routes seront précédé par /clients

router.get("/", (request, result) => {ClientController.getAllClient(request, result)});
router.get("/:clientID", (request, result) => {ClientController.getClientByID(request, result)});
router.post("/", (request, result) =>{ClientController.addClient(request,result)});
router.patch("/:id", (request, result) => {ClientController.updateClient(request,result)});
router.delete("/:id", (request, result) => {ClientController.deleteClient(request,result)});

module.exports = router;