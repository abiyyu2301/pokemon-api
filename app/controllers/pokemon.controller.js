const Pokemon = require('../models/pokemon.model.js')

const errorHandling = (req, res, err) => {
    if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Pokemon with id ${req.params.limit}`
        })
    } 
    else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.id
        })
    }
}

exports.getPokemons = (req, res) => {
    const {limit} = req.params
    Pokemon.getPokemons(limit, (err, data) => {
        if (err) {
            errorHandling(req, res, err)
        }
        res.send(data)
    })
}