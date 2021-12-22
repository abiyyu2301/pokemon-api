const sql = require('./db.js')

// CONSTRUCTOR
const Pokemon = (pokemon) => {
    this.tile = pokemon.title
    this.description = pokemon.description
    this.published = pokemon.published
}

const handlePokemonsData = (res) => {
    let pokemon = []
    for (const item in res) {
        const {pok_id, pok_name, type_name} = res[item]
        let pokemonIndex = pokemon.findIndex(e => e.id === pok_id)
        if (pokemonIndex === -1) {  // Pokemon is not yet registered
            const poke_data = {
                'id': pok_id,
                'name': pok_name,
                'types': [type_name]
            }
            pokemon.push(poke_data)
            continue
        }
        pokemon[pokemonIndex].types.push(type_name)
    }
    return pokemon
}

Pokemon.getPokemons = (limit, result) => {
    let query = `SELECT * FROM pokemon_data_types WHERE pok_id <= ${limit};`
    sql.query(query, (err, res) => {
        if (err) {
            console.log(err)
            result(null, err)
            return
        }
        const pokemons = handlePokemonsData(res)
        console.log(pokemons)
        result(null, {pokemons})
    })
}

module.exports = Pokemon