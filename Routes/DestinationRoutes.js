const express = require('express');
const router = express.Router();
const DestinationController = require('../Controllers/DestinationController');
const AuthenticateController = require('../Controllers/AuthenticateController');

// Toutes les routes seront précédé par /destinations
router.get("/", (request, result) => {DestinationController.getAllDestination(request, result)});
router.get("/:id", (request, result) => {DestinationController.getDestinationByID(request, result)});
router.post("/",AuthenticateController.authenticateToken, (request, result) => {DestinationController.addDestination(request, result)});
router.patch("/:id",AuthenticateController.authenticateToken, (request, result) => {DestinationController.updateDestination(request, result)});
router.delete("/:id",AuthenticateController.authenticateToken, (request, result) => {DestinationController.deleteDestination(request, result)});

module.exports = router;