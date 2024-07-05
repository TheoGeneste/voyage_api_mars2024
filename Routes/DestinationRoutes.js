const express = require('express');
const router = express.Router();
const DestinationController = require('../Controllers/DestinationController');

// Toutes les routes seront précédé par /destinations
router.get("/", (request, result) => {DestinationController.getAllDestination(request, result)});
router.get("/:id", (request, result) => {DestinationController.getDestinationByID(request, result)});
router.post("/", (request, result) => {DestinationController.addDestination(request, result)});
router.patch("/:id", (request, result) => {DestinationController.updateDestination(request, result)});

module.exports = router;