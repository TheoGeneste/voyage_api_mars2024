const express = require('express');
const clientRoutes = require('./Routes/ClientRoutes');
const categorieRoutes = require('./Routes/CategorieRoutes');
const cors = require('cors');
const destinationRoutes = require('./Routes/DestinationRoutes');
const paiementRoutes = require('./Routes/PaiementRoutes');
const reservationRoutes = require('./Routes/ReservationRoutes');
const AuthenticateController = require('./Controllers/AuthenticateController');
const app = express();
const port = 3001;
// Précise que notre API fonctionne avec des fichiers JSON
app.use(express.json());
// 5 Types de requêtes possible => GET, POST, PATCH, DELETE, PUT 
app.use(cors());
// Premier parametre est la route pour acceder aux données
// Deuxieme parametre est la function fléché qui va faire le traitement, prend toujours deux parametre (request, result)
app.get('/hello', (request, result) => {
    // Envoie les donnée a l'utilisateur
    result.send('Hello World !!');
})

app.use('/clients', clientRoutes);
app.use('/categories',AuthenticateController.authenticateToken, categorieRoutes);
app.use('/destinations', destinationRoutes);
app.use('/paiements',AuthenticateController.authenticateToken, paiementRoutes);
app.use('/reservations',AuthenticateController.authenticateToken, reservationRoutes);

// Premier parametre le port sur lequel le server va écouté
// Deuxieme parametre une function fleché qui est faite au lancement uniquement du server
app.listen(port, () => {
    console.log("Votre Serveur est lancé sur http://127.0.0.1:"+port);
})
