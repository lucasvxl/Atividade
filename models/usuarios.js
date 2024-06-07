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
  telefone: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: false,
  },
});

const usuarios = mongoose.model('Usuarios', usuariosSchema);

module.exports = usuarios;