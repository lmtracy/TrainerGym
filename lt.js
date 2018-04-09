class Sapphire {
    constructor() {
        this.pokemons = []
    }

    add(pokemon) {
        this.pokemons.push(pokemon)
    }

    all(){
        return this.pokemons
    }
}

//Individual class
class LaurenPokemon {
    constructor(name, hp, attack, defense, abilities, pic) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
        this.pic = pic
    }
}
let sapphire = new Sapphire()

//API for Snorlax
axios.get(`https://pokeapi.co/api/v2/pokemon/249/`)
.then((response) => {
    let { name, stats, abilities } = response.data

    abilities = getAbilities(abilities)
    let hp = getStat(stats, "hp")
    let attack = getStat(stats, "attack")
    let defense = getStat(stats, "special-defense")
    let pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png`;

    let pokemon = new LaurenPokemon(name, hp, attack, defense, abilities, pic)
    sapphire.add(pokemon)
})
    //API for Snorlax
 axios.get(`https://pokeapi.co/api/v2/pokemon/143/`)
 .then((response) => {
     let { name, stats, abilities } = response.data

     abilities = getAbilities(abilities)
     let hp = getStat(stats, "hp")
     let attack = getStat(stats, "attack")
     let defense = getStat(stats, "special-defense")
     let pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png`;

     let pokemon = new LaurenPokemon(name, hp, attack, defense, abilities, pic)
     sapphire.add(pokemon)
 })

 //API for Snorlax
 axios.get(`https://pokeapi.co/api/v2/pokemon/175/`)
    .then((response) => {
        let { name, stats, abilities } = response.data

        abilities = getAbilities(abilities)
        let hp = getStat(stats, "hp")
        let attack = getStat(stats, "attack")
        let defense = getStat(stats, "special-defense")
        let pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png`;

        let pokemon = new LaurenPokemon(name, hp, attack, defense, abilities, pic)
        sapphire.add(pokemon)
})

//functions to return API data
function getStat(stats, name) {
    let stat = stats.find(el => el.stat.name === name)
    return stat.base_stat;
}

function getAbilities(ability) {
    let abilities = []
    ability.forEach(el => abilities.push(el.ability.name))
    return abilities.join(", ")
}