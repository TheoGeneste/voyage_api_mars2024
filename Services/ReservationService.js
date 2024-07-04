const Reservation = require("../Models/Reservation");

class ReservationService{

    async getAllReservation(){
        return await Reservation.findAll();
    }
}

module.exports = new ReservationService();