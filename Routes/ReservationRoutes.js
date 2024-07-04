const express = require('express');
const ReservationController = require('../Controllers/ReservationController');
const router = express.Router();

// Toutes les routes sont précédé de /reservations
router.get('/', (request, result) => {ReservationController.getAllReservation(request, result)});
router.get('/:id', (request, result) => {ReservationController.getReservationByID(request, result)});
router.post('/', (request, result) => {ReservationController.addReservation(request, result)});

module.exports = router;