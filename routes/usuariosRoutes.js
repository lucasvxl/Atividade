const express = require('express');
const router = express.Router();
const Usuarios = require('../models/usuarios');

// Rota para obter todos os usuario 
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuarios.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para obter um usuario por ID
router.get('/:id', getUsuarios, (req, res) => {
  res.json(res.usuarios);
});

// Rota para criar um novo usuario
router.post('/', async (req, res) => {
  const usuarios = new Usuarios({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    endereco: req.body.endereco,
    foto: req.body.foto,
  });

  try {
    const newUsuarios = await Usuarioso.save();
    res.status(201).json(newUsuarios);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para atualizar um usuario por ID
router.put('/:id', getUsuarios, async (req, res) => {
  if (req.body.nome != null) {
    res.usuarios.nome = req.body.nome;
  }
  if (req.body.email != null) {
    res.usuarios.email = req.body.email;
  }
  if (req.body.telefone != null) {
    res.usuarios.telefone = req.body.telefone;
  }
  if (req.body.endereco != null) {
    res.usuarios.endereco = req.body.endereco;
  }
  if (req.body.foto != null) {
    res.usuarios.foto = req.body.foto;
  }

  try {
    const updatedUsuarios = await res.usuarios.save();
    res.json(updatedUsuarios);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para excluir um usuario por ID
router.delete('/:id', getUsuarios, async (req, res) => {
  try {
    await res.usuarios.deleteOne();
    res.json({ message: 'Usuario excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUsuarios(req, res, next) {
  try {
    const usuarios = await usuarios.findById(req.params.id);
    if (usuarios == null) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }
    res.usuarios = usuarios;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
