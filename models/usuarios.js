const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  altura: {
    type: Double,
    required: true,
  },
  peso: {
    type: Double,
    required: true,
  },
  foto: {
    type: String,
    required: false,
  },
});

const Usuarios = mongoose.model('Usuarios', usuariosSchema);

module.exports = Usuarios;
