const Reservation = require("../Models/Reservation");

class ReservationService{

    async getAllReservation(){
        return await Reservation.findAll();
    }

    async getReservationByID(reservationID){
        return await Reservation.findByPk(reservationID);
    }
}

module.exports = new ReservationService();