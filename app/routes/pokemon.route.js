const express = require('express')
const pokemon = require('../controllers/pokemon.controller.js')
const router = express.Router()
router.use(express.json())

router.get('/:limit', pokemon.getPokemons)

router.post('/', pokemon.addPokemon)

router.delete('/:id', pokemon.deletePokemon)

module.exports = router