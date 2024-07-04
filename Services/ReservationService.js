const Reservation = require("../Models/Reservation");

class ReservationService{

    async getAllReservation(){
        return await Reservation.findAll();
    }

    async getReservationByID(reservationID){
        return await Reservation.findByPk(reservationID);
    }

    async addReservation(reservation){
        return await Reservation.create(reservation);
    }
}

module.exports = new ReservationService();