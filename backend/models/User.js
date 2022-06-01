const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

/* COMMENTAIRES 
bcrypt  est un package de cryptage que vous pouvez installer avec  npm  .

mongoose-unique-validator  améliore les messages d'erreur lors de l'enregistrement de données uniques.
*/