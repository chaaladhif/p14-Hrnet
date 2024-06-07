# HRNet

HRNet est une application de gestion des employés développée avec React et Redux. Elle permet d'ajouter, de consulter et de rechercher des employés facilement et efficacement.

## Installation

Pour installer et exécuter ce projet localement, suivez les étapes ci-dessous :

1. Clonez le dépôt : git clone https://github.com/chaaladhif/hrnet.git
2. Accédez au répertoire du projet : cd hrnet
3. Installez les dépendances : npm install
   L'application sera disponible à l'adresse http://localhost:3000

# Architecture du Projet

src/
|-- components/ # Composants réutilisables
| |-- form/ # Formulaire pour ajouter des employés
| |-- loader/ # Loader pour les états de chargement
| |-- modal/ # Composant Modal personnalisé
|-- pages/ # Pages de l'application
| |-- createEmployee/ # Page pour créer un employé
| |-- employeeList/ # Page pour afficher la liste des employés
|-- store/ # Configuration de Redux store
| |-- index.js # Fichier principal de Redux store
|-- App.js # Composant principal de l'application
|-- index.js # Point d'entrée de l'application
|-- style.css # Styles globaux de l'application

# Dépendances

React : Bibliothèque JavaScript pour construire des interfaces utilisateur
Redux : Gestionnaire d'état prévisible pour les applications JavaScript
React Data Table Component : Bibliothèque pour les tables de données
React Redux : Liens officiels de React pour Redux

# Contribuer

Les contributions sont les bienvenues ! Veuillez suivre ces étapes pour contribuer :

Fork le projet.
Créez votre branche de fonctionnalité (git checkout -b feature/AmazingFeature).
Commitez vos changements (git commit -m 'Add some AmazingFeature').
Pushez vers la branche (git push origin feature/AmazingFeature).
Ouvrez une Pull Request.
