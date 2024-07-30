const express = require('express');
const ClientController = require('../Controllers/ClientController');
const AuthenticateController = require('../Controllers/AuthenticateController');
// Constante pour pouvoir specifier des routes
const router = express.Router();
// Toutes les routes seront précédé par /clients

router.get("/",AuthenticateController.authenticateToken, (request, result) => {ClientController.getAllClient(request, result)});
router.get("/:clientID",AuthenticateController.authenticateToken, (request, result) => {ClientController.getClientByID(request, result)});
router.post("/", (request, result) =>{ClientController.addClient(request,result)});
router.patch("/:id",AuthenticateController.authenticateToken, (request, result) => {ClientController.updateClient(request,result)});
router.delete("/:id",AuthenticateController.authenticateToken, (request, result) => {ClientController.deleteClient(request,result)});
router.post('/login', (request, result) => {ClientController.login(request,result)});

module.exports = router;