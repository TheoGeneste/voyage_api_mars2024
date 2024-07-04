const ReservationService = require("../Services/ReservationService");

class ReservationController{
    async getAllReservation(request, result){
        try {
            const reservations = await ReservationService.getAllReservation();
            result.json(reservations);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des réservations"})
        }
    }
}

module.exports = new ReservationController();