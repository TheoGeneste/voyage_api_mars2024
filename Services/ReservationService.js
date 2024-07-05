const Reservation = require("../Models/Reservation");

class ReservationService{

    async getAllReservation(){
        return await Reservation.findAll({include : ['client', 'destination']});
    }

    async getReservationByID(reservationID){
        return await Reservation.findByPk(reservationID, {include : ['client', 'destination', 'paiements']});
    }

    async addReservation(reservation){
        return await Reservation.create(reservation);
    }

    async updateReservation(id, reservation){
        return await Reservation.update(reservation, {
            where : {
                RE_ID : id
            }
        })
    }

    async deleteReservation(id){
        return await Reservation.destroy({where : {RE_ID : id}})
    }
}

module.exports = new ReservationService();