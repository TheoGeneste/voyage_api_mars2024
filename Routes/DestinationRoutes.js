const express = require('express');
const router = express.Router();
const DestinationController = require('../Controllers/DestinationController');

// Toutes les routes seront précédé par /destinations
router.get("/", (request, result) => {DestinationController.getAllDestination(request, result)});


module.exports = router;