let check = 0 //set counter for base intialization to use as a semaphore
let checkMoves = 0 //set counter for base initialization to use as a semaphore
let urls = [] //initialize empty list to store urls of move data
let randomMove = [] //store random moves
let randomIndex = Math.floor(Math.random() * Math.floor(urls.length)) //store a random number to use as an index
let grabFour = 0 //counter to count 4 moves

class Moves {
    constructor(name, priority, power, accuracy, pp) {
        this["name"] = name
        this["priority"] = priority
        this["power"] = power
        this["accuracy"] = accuracy
        this["pp"] = pp
    }
}

class MartinPokemon {
    constructor(dex_num) {
        this.dex_num = dex_num

        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.dex_num}/`)
            .then((response) => {
                check++ //increment on creation

                let info = response.data
                this["name"] = (info.forms[0].name).charAt(0).toUpperCase() + (info.forms[0].name).slice(1) //set first letter upper
                this["hp"] = info.stats[5].base_stat
                this["attack"] = info.stats[4].base_stat
                this["defense"] = info.stats[3].base_stat
                this["abilities"] = []
                for (let i = 0; i < info.abilities.length; i++) {
                    this["abilities"].push((info.abilities[i].ability.name).charAt(0).toUpperCase() + (info.abilities[i].ability.name).slice(1)) //set first letter upper
                }
                this["sprite"] = info.sprites.front_default
                this["moves"] = []
                this["shiny"] = info.sprites.front_shiny

                for (let i = 0; i < info.moves.length; i++) {
                    urls.push(info.moves[i].move.url) //push all the moves a pokemon can learn into array
                    console.log(info.moves[i].move.name)
                }
                for (let i = 0; i < urls.length; i++) {
                    if (grabFour === 4) {
                        grabFour = 0
                        urls.length = 0
                        break
                    }
                    ++grabFour
                    randomMove.push(urls[Math.floor(Math.random() * Math.floor(urls.length))])
                    console.log(randomMove)
                }


                // checkCreated() still need to check if needed as library
            }) //call checkCreated() on new object call
    }

    addMove() {
        //randomize move
        let grabRandom = randomMove[Math.floor(Math.random() * Math.floor(randomMove.length))]
        console.log(grabRandom)
        axios.get(grabRandom)
            .then((response) => {
                let info = response.data

                checkMoves++
                let move = new Moves(info.names[2].name, info.priority, info.power, info.accuracy, info.pp)
                if (this.moves.length === 0) { //if moves list is empty push
                    this.moves.push(move)
                } else {
                    for (let i = 0; i < this.moves.length; i++) {
                        console.log(this.moves[i].name)
                        console.log(move.name)
                        if (this.moves[i].name === move.name) { //if move already exists, remove the move
                            if (randomIndex !== -1) {
                                console.log(randomMove)
                                randomMove.splice(randomIndex, 1) //splice the list based on index and return it without the move
                                console.log(randomMove)
                            }
                        } else if (this.moves.length < 4) {
                            // addMove(pokemon) //otherwise call function again and let RNG give us a new 
                            this.moves.push(move) //otherwise push the move to the array
                        }
                    }
                }
                // checkCreatedMoves() need to check if still need
            })
    }
}

class Sause {
    constructor(pokemon) {
        //initialized with array of pokemon
        this.pokemon = pokemon
    }

    all() {
        //return array of pokemon objects
        return this.pokemon
    }

    get(pokemon) {
        // return pokemon retrieved from trainer
        for (let i = 0; i < this.pokemon.length; i++) {
            if (pokemon === this.pokemon[i].name) {
                return this.pokemon[i]
            }
        }

    }
}

function checkCreated() {
    if (check === 3) { //if called 3 times, all the pokemon have been created so do main
        createMove()
    }
}

// function checkCreatedMoves() {
//     if (checkMoves === 12) { //if called 12 times, all the moves have been created so add them.
//         console.log("Loaded Moves")

//         setTimeout(main(), 15000)

//     }
// }