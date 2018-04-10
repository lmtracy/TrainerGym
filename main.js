let dragonite = new MartinPokemon(149)
let porygonZ = new MartinPokemon(474)
let scrafty = new MartinPokemon(560)

let martinParty = [dragonite, porygonZ, scrafty]
let sause = new Sause(martinParty)

let laurenParty = sapphire.all()
martinParty = sause.all() //show all functionality by overwriting previous array

function displayPokemon(){
    // need to change classes to target them better (one at a time)
    let martinPokemonOne = document.querySelector("#martin-thumb-one")
    let martinPokemonTwo = document.querySelector("#martin-thumb-two")
    let martinPokemonThree = document.querySelector("#martin-thumb-three")

    let laurenPokemonOne = document.querySelector("#lauren-thumb-one")
    let laurenPokemonTwo = document.querySelector("#lauren-thumb-two")
    let laurenPokemonThree = document.querySelector("#lauren-thumb-three")

    //need to tag empty img tags for these
    let martinMainPokemon = document.querySelector("#martin-main")
    let laurenMainPokemon = document.querySelector("#lauren-main")

    //need to tag empty p tags for these
    let martinMainPokemonStats = document.querySelector("#martin-main-stats")
    let laurenMainPokemonStats = document.querySelector("#lauren-main-stats")

    martinPokemonOne.addEventListener("click", (event) => {
        martinMainPokemon.src = martinParty[0].sprite
        martinMainPokemonStats.innerHTML =` <u>${martinParty[0].name}:</u> <br/>
								<u>HP</u>: ${martinParty[0].hp} <br/>
								<u>Attack</u>: ${martinParty[0].attack} <br/>
								<u>Defense</u>: ${martinParty[0].defense} <br/>
								<u>Abilities</u>: <br/> ${martinParty[0].abilities[0]} <br/> ${martinParty[0].abilities[1]} <br/>
                                `
                            })

    martinPokemonTwo.addEventListener("click", (event) => {
        martinMainPokemon.src = martinParty[1].sprite
        martinMainPokemonStats.innerHTML = `<u>${martinParty[1].name}:</u> <br/>
								<u>HP</u>: ${martinParty[1].hp} <br/>
								<u>Attack</u>: ${martinParty[1].attack} <br/>
								<u>Defense</u>: ${martinParty[1].defense} <br/>
								<u>Abilities</u>: <br/> ${martinParty[1].abilities[0]} <br/> ${martinParty[1].abilities[1]} <br/>
                                `
                            })

    martinPokemonThree.addEventListener("click", (event) => {
        martinMainPokemon.src = martinParty[2].sprite
        martinMainPokemonStats.innerHTML = `<u>${martinParty[2].name}:</u> <br/>
								<u>HP</u>: ${martinParty[2].hp} <br/>
								<u>Attack</u>: ${martinParty[2].attack} <br/>
								<u>Defense</u>: ${martinParty[2].defense} <br/>
								<u>Abilities</u>: <br/> ${martinParty[2].abilities[0]} <br/> ${martinParty[2].abilities[1]} <br/>
                                `
                            })


    laurenPokemonOne.addEventListener("click", (event) => {
        laurenMainPokemon.src = laurenParty[0].pic
        for (let i = 0; i < laurenParty.length; i++) {
          if (laurenParty[i].name === `Lugia`) {
            laurenMainPokemonStats.innerHTML = `<u>${laurenParty[0].name}:</u> <br/>
                    <u>HP</u>: ${laurenParty[0].hp} <br/>
                    <u>Attack</u>: ${laurenParty[0].attack} <br/>
                    <u>Defense</u>: ${laurenParty[0].defense} <br/>
                    <u>Abilities</u>: <br/> ${laurenParty[0].abilities[0]} <br/> ${laurenParty[0].abilities[1]} <br/>
                                    `
                                }
          }
})

    laurenPokemonTwo.addEventListener("click", (event) => {
      laurenMainPokemon.src = laurenParty[1].pic
      for (let i = 0; i < laurenParty.length; i++) {
        if (laurenParty[i].name === `Snorlax`) {
        laurenMainPokemonStats.innerHTML = `<u>${laurenParty[1].name}:</u> <br/>
								<u>HP</u>: ${laurenParty[1].hp} <br/>
								<u>Attack</u>: ${laurenParty[1].attack} <br/>
								<u>Defense</u>: ${laurenParty[1].defense} <br/>
								<u>Abilities</u>: <br/> ${laurenParty[1].abilities[0]} <br/> ${laurenParty[1].abilities[1]} <br/>
                                `
                            }
            }
  })

    laurenPokemonThree.addEventListener("click", (event) => {
      laurenMainPokemon.src = laurenParty[2].pic

      for (let i = 0; i < laurenParty.length; i++) {
        if (laurenParty[i].name === `Togepi`) {
          laurenMainPokemonStats.innerHTML = `<u>${laurenParty[2].name}:</u> <br/>
  								<u>HP</u>: ${laurenParty[2].hp} <br/>
  								<u>Attack</u>: ${laurenParty[2].attack} <br/>
  								<u>Defense</u>: ${laurenParty[2].defense} <br/>
  								<u>Abilities</u>: <br/> ${laurenParty[2].abilities[0]} <br/> ${laurenParty[2].abilities[1]} <br/>
                                  `
                              }
            }
})
}
displayPokemon()


let doBattle = document.querySelector(".button")
let battleResult = document.querySelector(".result")
let randomWinner = []

doBattle.addEventListener("click", (event) => {
    for(let i = 0; i < martinParty.length; i++){
        if(martinParty[i].sprite === martinMainPokemon.src 
            && laurenParty[i].pic === laurenMainPokemon.src){
                random.winner.push(martinParty[i])
                random.winner.push(laurenParty[i])
                
                battleResult.innerHTML = `${randomWinner[Math.floor(Math.random() * Math.floor(randomWinner.length))]} wins!`
            
    }
}
})