-- Création de la base de données 
CREATE DATABASE voyage_mars;

-- Utilisation de la base de données 
USE voyage_mars;


-- Création des tables

CREATE TABLE Categories(
   CA_ID INT auto_increment,
   CA_Libelle VARCHAR(150) NOT NULL,
   PRIMARY KEY(CA_ID)
) ENGINE = INNODB;

CREATE TABLE Clients(
   CL_ID INT auto_increment,
   CL_Nom VARCHAR(150) NOT NULL,
   CL_Prenom VARCHAR(100) NOT NULL,
   CL_Adresse VARCHAR(255),
   CL_CodePostal CHAR(7),
   CL_Ville VARCHAR(150),
   CL_Mail VARCHAR(255) NOT NULL,
   CL_Telephone CHAR(13),
   CL_Password TEXT NOT NULL,
   PRIMARY KEY(CL_ID),
   UNIQUE(CL_Mail),
   UNIQUE(CL_Telephone)
) ENGINE = INNODB;

CREATE TABLE Paiements(
   PA_ID INT auto_increment,
   PA_Montant DECIMAL(11,2) NOT NULL,
   PA_DatePaiement DATE NOT NULL,
   PA_Methode VARCHAR(50) NOT NULL,
   PA_Statut VARCHAR(50) NOT NULL,
   PRIMARY KEY(PA_ID)
) ENGINE = INNODB;

CREATE TABLE Destinations(
   DE_ID INT auto_increment,
   DE_Libelle VARCHAR(255) NOT NULL,
   DE_Description TEXT,
   DE_Prix DECIMAL(11,2) NOT NULL,
   DE_Disponibilite BOOLEAN NOT NULL,
   CA_ID INT NOT NULL,
   PRIMARY KEY(DE_ID),
   FOREIGN KEY(CA_ID) REFERENCES Categories(CA_ID)
) ENGINE = INNODB;

CREATE TABLE Reservations(
   RE_ID INT auto_increment,
   RE_DateReservation DATE NOT NULL,
   RE_DateDebut DATE NOT NULL,
   RE_DateFin DATE NOT NULL,
   DE_ID INT NOT NULL,
   CL_ID INT NOT NULL,
   PRIMARY KEY(RE_ID),
   FOREIGN KEY(DE_ID) REFERENCES Destinations(DE_ID),
   FOREIGN KEY(CL_ID) REFERENCES Clients(CL_ID)
) ENGINE = INNODB;

CREATE TABLE Regler(
   RE_ID INT auto_increment,
   PA_ID INT,
   PRIMARY KEY(RE_ID, PA_ID),
   FOREIGN KEY(RE_ID) REFERENCES Reservations(RE_ID),
   FOREIGN KEY(PA_ID) REFERENCES Paiements(PA_ID)
) ENGINE = INNODB;

-- CRUD

-- CREATE (INSERT)

-- Insertion des catégories
INSERT INTO Categories (CA_ID, CA_Libelle) VALUES 
(1, 'Plage'),
(2, 'Montagne'),
(3, 'Ville'),
(4, 'Nature'),
(5, 'Aventure'),
(6, 'Culture'),
(7, 'Gastronomie'),
(8, 'Historique'),
(9, 'Luxe'),
(10, 'Romantique'),
(11, 'Sport'),
(12, 'Spa'),
(13, 'Ecotourisme'),
(14, 'Safari'),
(15, 'Croisière'),
(16, 'Camping'),
(17, 'Festival'),
(18, 'Randonnée'),
(19, 'Ski'),
(20, 'Île');


-- Insertion des clients
INSERT INTO Clients (CL_ID, CL_Nom, CL_Prenom, CL_Adresse, CL_CodePostal, CL_Ville, CL_Mail, CL_Telephone) VALUES 
(1, 'Dupont', 'Jean', '10 rue de la Paix', '75001', 'Paris', 'jean.dupont@mail.com', '0601234567'),
(2, 'Martin', 'Marie', '20 avenue de la Liberté', '69002', 'Lyon', 'marie.martin@mail.com', '0612345678'),
(3, 'Bernard', 'Paul', '30 boulevard des Capucines', '13001', 'Marseille', 'paul.bernard@mail.com', '0623456789'),
(4, 'Dubois', 'Lucie', '40 rue de Rivoli', '75004', 'Paris', 'lucie.dubois@mail.com', '0634567890'),
(5, 'Moreau', 'Alice', '50 avenue des Champs-Élysées', '75008', 'Paris', 'alice.moreau@mail.com', '0645678901'),
(6, 'Fournier', 'Hugo', '60 boulevard Saint-Germain', '75005', 'Paris', 'hugo.fournier@mail.com', '0656789012'),
(7, 'Girard', 'Emma', '70 rue du Faubourg Saint-Honoré', '75008', 'Paris', 'emma.girard@mail.com', '0667890123'),
(8, 'Lefevre', 'Lucas', '80 avenue Montaigne', '75008', 'Paris', 'lucas.lefevre@mail.com', '0678901234'),
(9, 'Roux', 'Clara', '90 rue de la Boétie', '75008', 'Paris', 'clara.roux@mail.com', '0689012345'),
(10, 'Petit', 'Louis', '100 avenue des Ternes', '75017', 'Paris', 'louis.petit@mail.com', '0690123456'),
(11, 'Durand', 'Juliette', '110 boulevard Haussmann', '75008', 'Paris', 'juliette.durand@mail.com', '0612345670'),
(12, 'Lemoine', 'Victor', '120 rue du Bac', '75007', 'Paris', 'victor.lemoine@mail.com', '0623456781'),
(13, 'Leroy', 'Elodie', '130 avenue de la République', '75011', 'Paris', 'elodie.leroy@mail.com', '0634567892'),
(14, 'Rousseau', 'Antoine', '140 rue de Rennes', '75006', 'Paris', 'antoine.rousseau@mail.com', '0645678903'),
(15, 'Blanc', 'Sarah', '150 avenue de l\'Opéra', '75009', 'Paris', 'sarah.blanc@mail.com', '0656789014'),
(16, 'Gautier', 'Théo', '160 rue de Sèvres', '75007', 'Paris', 'theo.gautier@mail.com', '0667890125'),
(17, 'Perrin', 'Chloé', '170 rue de la Pépinière', '75008', 'Paris', 'chloe.perrin@mail.com', '0678901236'),
(18, 'Robin', 'Thomas', '180 avenue Kléber', '75016', 'Paris', 'thomas.robin@mail.com', '0689012347'),
(19, 'Clement', 'Léa', '190 rue de Vaugirard', '75015', 'Paris', 'lea.clement@mail.com', '0690123458'),
(20, 'Meyer', 'Arthur', '200 avenue de Suffren', '75015', 'Paris', 'arthur.meyer@mail.com', '0612345679');

-- Insertion des paiements avec statuts variés
INSERT INTO Paiements (PA_ID, PA_Montant, PA_DatePaiement, PA_Methode, PA_Statut) VALUES 
(1, 100.00, '2024-01-01', 'Carte de crédit', 'Payé'),
(2, 200.00, '2024-01-02', 'PayPal', 'Traité'),
(3, 300.00, '2024-01-03', 'Virement bancaire', 'En attente'),
(4, 400.00, '2024-01-04', 'Carte de crédit', 'Payé'),
(5, 500.00, '2024-01-05', 'Carte de crédit', 'Remboursé'),
(6, 600.00, '2024-01-06', 'PayPal', 'Traité'),
(7, 700.00, '2024-01-07', 'Carte de crédit', 'En attente'),
(8, 800.00, '2024-01-08', 'Virement bancaire', 'Payé'),
(9, 900.00, '2024-01-09', 'Carte de crédit', 'En attente'),
(10, 1000.00, '2024-01-10', 'Carte de crédit', 'Payé'),
(11, 1100.00, '2024-01-11', 'PayPal', 'Traité'),
(12, 1200.00, '2024-01-12', 'Carte de crédit', 'En attente'),
(13, 1300.00, '2024-01-13', 'Virement bancaire', 'Payé'),
(14, 1400.00, '2024-01-14', 'Carte de crédit', 'Remboursé'),
(15, 1500.00, '2024-01-15', 'Carte de crédit', 'Traité'),
(16, 1600.00, '2024-01-16', 'PayPal', 'Payé'),
(17, 1700.00, '2024-01-17', 'Carte de crédit', 'En attente'),
(18, 1800.00, '2024-01-18', 'Virement bancaire', 'Payé'),
(19, 1900.00, '2024-01-19', 'Carte de crédit', 'En attente'),
(20, 2000.00, '2024-01-20', 'Carte de crédit', 'Payé');

-- Insertion des destinations
INSERT INTO Destinations (DE_ID, DE_Libelle, DE_Description, DE_Prix, DE_Disponibilite, CA_ID) VALUES 
(1, 'Paris', 'Visitez la ville lumière', 300.00, TRUE, 3),
(2, 'Chamonix', 'Ski dans les Alpes', 500.00, TRUE, 2),
(3, 'Nice', 'Profitez de la Côte d\'Azur', 400.00, TRUE, 1),
(4, 'Lyon', 'Découverte de la gastronomie', 350.00, TRUE, 7),
(5, 'Bordeaux', 'Visite des vignobles', 450.00, TRUE, 6),
(6, 'Marseille', 'Balade dans le Vieux-Port', 370.00, TRUE, 3),
(7, 'Strasbourg', 'Marché de Noël', 320.00, TRUE, 8),
(8, 'Toulouse', 'Découverte de l\'aéronautique', 340.00, TRUE, 6),
(9, 'Nantes', 'Visite du château des Ducs', 330.00, TRUE, 8),
(10, 'Lille', 'Découverte de l\'architecture flamande', 310.00, TRUE, 3),
(11, 'Cannes', 'Festival de Cannes', 600.00, TRUE, 17),
(12, 'Saint-Tropez', 'Séjour de luxe', 700.00, TRUE, 9),
(13, 'Lourdes', 'Visite spirituelle', 280.00, TRUE, 6),
(14, 'Avignon', 'Festival de théâtre', 420.00, TRUE, 17),
(15, 'Biarritz', 'Surf et plage', 380.00, TRUE, 1),
(16, 'Mont Saint-Michel', 'Visite du Mont', 360.00, TRUE, 8),
(17, 'Versailles', 'Visite du château', 390.00, TRUE, 8),
(18, 'Deauville', 'Séjour balnéaire', 410.00, TRUE, 1),
(19, 'Château de Chambord', 'Visite du château', 350.00, TRUE, 8),
(20, 'Îles d\'Hyères', 'Excursion en mer', 450.00, TRUE, 20);

-- Insertion des réservations
INSERT INTO Reservations (RE_ID, RE_DateReservation, RE_DateDebut, RE_DateFin, DE_ID, CL_ID) VALUES 
(1, '2024-02-01', '2024-02-10', '2024-02-15', 1, 1),
(2, '2024-02-02', '2024-02-15', '2024-02-20', 2, 2),
(3, '2024-02-03', '2024-02-20', '2024-02-25', 3, 3),
(4, '2024-02-04', '2024-02-25', '2024-03-01', 4, 4),
(5, '2024-02-05', '2024-03-01', '2024-03-05', 5, 5),
(6, '2024-02-06', '2024-03-05', '2024-03-10', 6, 6),
(7, '2024-02-07', '2024-03-10', '2024-03-15', 7, 7),
(8, '2024-02-08', '2024-03-15', '2024-03-20', 8, 8),
(9, '2024-02-09', '2024-03-20', '2024-03-25', 9, 9),
(10, '2024-02-10', '2024-03-25', '2024-03-30', 10, 10),
(11, '2024-02-11', '2024-03-30', '2024-04-05', 11, 11),
(12, '2024-02-12', '2024-04-05', '2024-04-10', 12, 12),
(13, '2024-02-13', '2024-04-10', '2024-04-15', 13, 13),
(14, '2024-02-14', '2024-04-15', '2024-04-20', 14, 14),
(15, '2024-02-15', '2024-04-20', '2024-04-25', 15, 15),
(16, '2024-02-16', '2024-04-25', '2024-04-30', 16, 16),
(17, '2024-02-17', '2024-04-30', '2024-05-05', 17, 17),
(18, '2024-02-18', '2024-05-05', '2024-05-10', 18, 18),
(19, '2024-02-19', '2024-05-10', '2024-05-15', 19, 19),
(20, '2024-02-20', '2024-05-15', '2024-05-20', 20, 20);

-- Insertion des relations de règlement
INSERT INTO Regler (RE_ID, PA_ID) VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20);

-- READ (SELECT)

SELECT CA_ID, CA_Libelle FROM Categories;

SELECT CL_ID, CL_Nom, CL_Prenom, CL_Adresse, CL_CodePostal, CL_Ville, CL_Mail, CL_Telephone FROM Clients;

SELECT DE_ID, DE_Libelle, DE_Description, DE_Prix, DE_Disponibilite, CA_ID FROM Destinations;

SELECT DE_ID, DE_Libelle, DE_Description, DE_Prix, DE_Disponibilite, CA_Libelle FROM Destinations DE
INNER JOIN Categories CA ON CA.CA_ID =  DE.CA_ID;

SELECT PA_ID, PA_Montant, PA_DatePaiement, PA_Methode, PA_Statut FROM Paiements;

SELECT RE_ID, PA_ID FROM Regler;

SELECT REG.RE_ID, REG.PA_ID, RE.RE_DateReservation, RE.RE_DateDebut, RE.RE_DateFin,PA_Montant, PA_DatePaiement, PA_Methode, PA_Statut FROM Regler REG
INNER JOIN Reservations RE ON RE.RE_ID = REG.RE_ID
INNER JOIN Paiements PA ON PA.PA_ID = REG.PA_ID;

SELECT RE_ID, RE_DateReservation, RE_DateDebut, RE_DateFin, DE_ID, CL_ID FROM Reservations;

SELECT RE.RE_ID, RE.RE_DateReservation, RE.RE_DateDebut, RE.RE_DateFin, CL.CL_Nom, CL.CL_Prenom, CL.CL_Adresse, CL.CL_CodePostal, CL.CL_Ville, 
CL.CL_Mail, CL.CL_Telephone, DE.DE_Libelle, DE.DE_Description, DE.DE_Prix, DE.DE_Disponibilite
FROM Reservations RE
INNER JOIN Clients CL ON CL.CL_ID = RE.CL_ID
INNER JOIN Destinations DE ON DE.DE_ID = RE.DE_ID;


-- Lister les clients ayant effectué une réservation pour une destination de la catégorie 'Plage' 
SELECT CL.CL_ID, CL.CL_Nom, CL.CL_Prenom, CL.CL_Mail, D.DE_Libelle 
FROM Clients CL
JOIN Reservations R ON CL.CL_ID = R.CL_ID
JOIN Destinations D ON R.DE_ID = D.DE_ID
JOIN Categories C ON D.CA_ID = C.CA_ID
WHERE C.CA_Libelle = 'Plage';

-- Obtenir le nombre total de réservations et le montant total des paiements par statut de paiement

SELECT P.PA_Statut, COUNT(R.RE_ID) AS TotalReservations, SUM(P.PA_Montant) AS TotalMontant
FROM Paiements P
JOIN Regler RGL ON P.PA_ID = RGL.PA_ID
JOIN Reservations R ON RGL.RE_ID = R.RE_ID
GROUP BY P.PA_Statut;

-- Trouver les destinations qui ont été réservées au moins deux fois par le même client
SELECT D.DE_Libelle, CL.CL_Nom, CL.CL_Prenom, COUNT(R.RE_ID) AS NombreReservations
FROM Destinations D
JOIN Reservations R ON D.DE_ID = R.DE_ID
JOIN Clients CL ON R.CL_ID = CL.CL_ID
GROUP BY D.DE_Libelle, CL.CL_Nom, CL.CL_Prenom
HAVING COUNT(R.RE_ID) >= 2;

-- Lister les destinations disponibles avec leurs catégories, triées par prix décroissant
SELECT D.DE_Libelle, D.DE_Prix, C.CA_Libelle
FROM Destinations D
JOIN Categories C ON D.CA_ID = C.CA_ID
WHERE D.DE_Disponibilite = TRUE
ORDER BY D.DE_Prix DESC;

-- Afficher le détail des réservations (client, destination, dates) pour lesquelles le paiement est en attente
SELECT CL.CL_Nom, CL.CL_Prenom, D.DE_Libelle, R.RE_DateDebut, R.RE_DateFin
FROM Clients CL
JOIN Reservations R ON CL.CL_ID = R.CL_ID
JOIN Destinations D ON R.DE_ID = D.DE_ID
JOIN Regler RGL ON R.RE_ID = RGL.RE_ID
JOIN Paiements P ON RGL.PA_ID = P.PA_ID
WHERE P.PA_Statut = 'En attente';

-- Trouver les clients ayant effectué des paiements remboursés et afficher le montant total remboursé pour chaque client 
SELECT CL.CL_ID, CL.CL_Nom, CL.CL_Prenom, SUM(P.PA_Montant) AS MontantRembourse
FROM Clients CL
JOIN Reservations R ON CL.CL_ID = R.CL_ID
JOIN Regler RGL ON R.RE_ID = RGL.RE_ID
JOIN Paiements P ON RGL.PA_ID = P.PA_ID
WHERE P.PA_Statut = 'Remboursé'
GROUP BY CL.CL_ID, CL.CL_Nom, CL.CL_Prenom;

-- Obtenir les réservations et les montants de paiements pour les destinations de la catégorie 'Aventure' pour un mois donné
SELECT R.RE_ID, CL.CL_Nom, CL.CL_Prenom, D.DE_Libelle, P.PA_Montant, P.PA_DatePaiement
FROM Reservations R
JOIN Clients CL ON R.CL_ID = CL.CL_ID
JOIN Destinations D ON R.DE_ID = D.DE_ID
JOIN Categories C ON D.CA_ID = C.CA_ID
JOIN Regler RGL ON R.RE_ID = RGL.RE_ID
JOIN Paiements P ON RGL.PA_ID = P.PA_ID
WHERE C.CA_Libelle = 'Aventure' AND MONTH(R.RE_DateReservation) = 6 AND YEAR(R.RE_DateReservation) = 2024;

-- Lister les destinations et le nombre de réservations effectuées, triées par nombre de réservations décroissant
SELECT D.DE_Libelle, COUNT(R.RE_ID) AS NombreReservations
FROM Destinations D
JOIN Reservations R ON D.DE_ID = R.DE_ID
GROUP BY D.DE_Libelle
ORDER BY NombreReservations DESC;

-- Afficher le détail des clients ayant le même nombre de réservations et au moins une réservation pour chaque catégorie de destination
SELECT CL.CL_ID, CL.CL_Nom, CL.CL_Prenom, COUNT(R.RE_ID) AS NombreReservations
FROM Clients CL
JOIN Reservations R ON CL.CL_ID = R.CL_ID
JOIN Destinations D ON R.DE_ID = D.DE_ID
GROUP BY CL.CL_ID, CL.CL_Nom, CL.CL_Prenom
HAVING COUNT(DISTINCT D.CA_ID) = (SELECT COUNT(*) FROM Categories);

-- Trouver les destinations dont le prix moyen des réservations dépasse un certain seuil
SELECT D.DE_Libelle, AVG(D.DE_Prix) AS PrixMoyen
FROM Destinations D
JOIN Reservations R ON D.DE_ID = R.DE_ID
GROUP BY D.DE_Libelle
HAVING AVG(D.DE_Prix) > 400.00;

-- UPDATE 
UPDATE Categories 
SET CA_Libelle = 'Sports et Loisirs' 
WHERE CA_ID = 11;

UPDATE Clients 
SET CL_Adresse = '101 rue de la République', CL_Ville = 'Marseille', CL_CodePostal = '13002' 
WHERE CL_ID = 5;

UPDATE Paiements 
SET PA_Statut = 'Payé' 
WHERE PA_ID = 5;

UPDATE Destinations 
SET DE_Disponibilite = FALSE 
WHERE DE_ID = 3;

UPDATE Reservations 
SET RE_DateDebut = '2024-06-01', RE_DateFin = '2024-06-10' 
WHERE RE_ID = 10;

UPDATE Regler 
SET PA_ID = 3 
WHERE RE_ID = 1 AND PA_ID = 1;


-- DELETE 
DELETE FROM Categories 
WHERE CA_ID = 11;

DELETE FROM Clients 
WHERE CL_ID = 5;
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`voyage_mars`.`reservations`, CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`CL_ID`) 
-- REFERENCES `clients` (`CL_ID`))

DELETE FROM Paiements 
WHERE PA_ID = 5;
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`voyage_mars`.`regler`, CONSTRAINT `regler_ibfk_2` FOREIGN KEY (`PA_ID`) 
-- REFERENCES `paiements` (`PA_ID`))


DELETE FROM Destinations 
WHERE DE_ID = 3;
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`voyage_mars`.`reservations`, CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`DE_ID`) 
-- REFERENCES `destinations` (`DE_ID`))


DELETE FROM Reservations 
WHERE RE_ID = 10;
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`voyage_mars`.`regler`, CONSTRAINT `regler_ibfk_1` FOREIGN KEY (`RE_ID`) 
-- REFERENCES `reservations` (`RE_ID`))


DELETE FROM Regler 
WHERE RE_ID = 1 AND PA_ID = 1;