let dragonite = new MartinPokemon(149)
let porygonZ = new MartinPokemon(474)
let scrafty = new MartinPokemon(560)

let martinParty = [dragonite, porygonZ, scrafty]
let sause = new Sause(party)

let laurenParty = sapphire.all()
let martinParty = sause.all() //show all functionality by overwriting previous array

function displayPokemon(){
    for(let i = 0; i < laurenParty.length; i++){
        //add pokemon object stats to screen using laurenParty[i] or martinParty[i]
    }
}