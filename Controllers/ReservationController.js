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

    async getReservationByID(request, result){
        try {
            const reservation = await ReservationService.getReservationByID(request.params.id);
            result.json(reservation);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de la réservation"})
        }
    }

    async addReservation(request, result){
        try {
            const reservation = await ReservationService.addReservation(request.body);
            result.json(reservation);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout de la réservation"})
        }
    }

    async updateReservation(request, result){
        try {
            const reservation = await ReservationService.updateReservation(request.params.id, request.body);
            result.json(reservation);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de la réservation"})
        }
    }

    async deleteReservation(request, result){
        try {
            const reservation = await ReservationService.deleteReservation(request.params.id);
            result.json(reservation);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression de la réservation"})
        }
    }
}

module.exports = new ReservationController();