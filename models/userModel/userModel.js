const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('Users', userSchema, "user");

module.exports = User;