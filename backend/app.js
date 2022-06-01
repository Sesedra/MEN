//créer une app express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

//Connexion à mongodb
const app = express();

mongoose.connect('mongodb+srv://Sesedra:sese02760dra@cluster0.pqy4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;

/* Commentaires
app.put()  et  app.delete()  attribuent des middlewares aux 
requêtes de type PUT et de type DELETE.

Les méthodes  updateOne()  et  delete()  de votre modèle Thing 
permettent de mettre à jour ou de supprimer un Thing dans la base de données.

Vous avez ajouté un modèle de données User afin de stocker les informations utilisateur dans votre base de données.

Vous avez implémenté le cryptage de mot de passe sécurisé afin de stocker en toute sécurité les mots de passe utilisateur.

Vous avez créé et envoyé des tokens au front-end pour authentifier les requêtes.

Vous avez ajouté le middleware d'authentification pour sécuriser les routes dans votre API. De cette façon, seules les requêtes authentifiées seront gérées.
 */