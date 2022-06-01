const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.post('/',auth, multer, stuffCtrl.createThing);

//Modifier un thing avec updateOne
router.put('/:id',auth,multer, stuffCtrl.modifyThing)  

//Supprimer un thing avec DeleteOne
router.delete('/:id',auth , stuffCtrl.deleteThing)

//Trouver un seul objet selon l'id de l'objet
router.get('/:id',auth, stuffCtrl.getOneThing)

//Afficher toutes les données 
router.get('/',auth , stuffCtrl.getAllStuff);


/*
save()  – enregistre un Thing ;

find()  – retourne tous les Things ;

findOne()  – retourne un seul Thing basé sur la fonction de comparaison qu'on lui passe (souvent pour récupérer un Thing par son identifiant unique).

La méthode  router.get()  permet de réagir uniquement aux requêtes de type GET.

Maintenant, nous devons appliquer le middleware auth à nos routes stuff , qui sont celles à protéger. Dans notre routeur stuff , nous importons notre middleware et le passons comme argument aux routes à protéger
*/



module.exports = router;