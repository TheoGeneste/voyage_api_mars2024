const express = require('express');
const ReservationController = require('../Controllers/ReservationController');
const router = express.Router();

// Toutes les routes sont précédé de /reservations
router.get('/', (request, result) => {ReservationController.getAllReservation(request, result)});


module.exports = router;