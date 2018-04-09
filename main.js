let dragonite = new MartinPokemon(149)
let porygonZ = new MartinPokemon(474)
let scrafty = new MartinPokemon(560)

let martinParty = [dragonite, porygonZ, scrafty]
let sause = new Sause(martinParty)

let laurenParty = sapphire.all()
martinParty = sause.all() //show all functionality by overwriting previous array

function displayPokemon(){
    // need to change classes to target them better (one at a time)
    let martinPokemon = document.querySelectorAll(".pokeThumb")
    let laurenPokemon = document.querySelectorAll(".pokeThumb") 

    //need to create empty img tags for these
    let martinMainPokemon = document.querySelectorAll(".pokeMS") 
    let laurenMainPokemon = document.querySelectorAll(".pokeLT")

    martinPokemon.addEventListener("click", (event) => {
        // martinMainPokemon.src = martinParty[0]
        //add a p tag to display stats?
        // martinMainPokemon.innerHTML = <u>${martinParty[0].name}:</u> <br/>
								// <u>HP</u>: ${martinParty[0].hp} <br/>
								// <u>Attack</u>: ${martinParty[0].attack} <br/>
								// <u>Defense</u>: ${martinParty[0].defense} <br/>
								// <u>Abilities</u>: <br/> ${martinParty[0].abilities[0]} <br/> ${martinParty[0].abilities[1]} <br/>
    })

    martinPokemon.addEventListener("click", (event) => {
        // martinMainPokemon.src = martinParty[1]
        // martinMainPokemon.innerHTML = <u>${martinParty[1].name}:</u> <br/>
								// <u>HP</u>: ${martinParty[1].hp} <br/>
								// <u>Attack</u>: ${martinParty[1].attack} <br/>
								// <u>Defense</u>: ${martinParty[1].defense} <br/>
								// <u>Abilities</u>: <br/> ${martinParty[1].abilities[0]} <br/> ${martinParty[1].abilities[1]} <br/>   
    })
    
    martinPokemon.addEventListener("click", (event) => {
        // martinMainPokemon.src = martinParty[2]
        // martinMainPokemon.innerHTML = <u>${martinParty[2].name}:</u> <br/>
								// <u>HP</u>: ${martinParty[2].hp} <br/>
								// <u>Attack</u>: ${martinParty[2].attack} <br/>
								// <u>Defense</u>: ${martinParty[2].defense} <br/>
								// <u>Abilities</u>: <br/> ${martinParty[2].abilities[0]} <br/> ${martinParty[2].abilities[1]} <br/>   
    })

    laurenPokemon.addEventListener("click", (event) => {
        // laurenMainPokemon.src = laurenParty[0]
        //add a p tag to display stats?
        // laurenMainPokemon.innerHTML = <u>${laurenParty[0].name}:</u> <br/>
								// <u>HP</u>: ${laurenParty[0].hp} <br/>
								// <u>Attack</u>: ${laurenParty[0].attack} <br/>
								// <u>Defense</u>: ${laurenParty[0].defense} <br/>
								// <u>Abilities</u>: <br/> ${laurenParty[0].abilities[0]} <br/> ${laurenParty[0].abilities[1]} <br/>
    })

    laurenPokemon.addEventListener("click", (event) => {
        // laurenMainPokemon.src = laurenParty[1]
        // laurenMainPokemon.innerHTML = <u>${laurenParty[1].name}:</u> <br/>
								// <u>HP</u>: ${laurenParty[1].hp} <br/>
								// <u>Attack</u>: ${laurenParty[1].attack} <br/>
								// <u>Defense</u>: ${laurenParty[1].defense} <br/>
								// <u>Abilities</u>: <br/> ${laurenParty[1].abilities[0]} <br/> ${laurenParty[1].abilities[1]} <br/>   
    })
    
    laurenPokemon.addEventListener("click", (event) => {
        // laurenMainPokemon.src = laurenParty[2]
        // laurenMainPokemon.innerHTML = <u>${laurenParty[2].name}:</u> <br/>
								// <u>HP</u>: ${laurenParty[2].hp} <br/>
								// <u>Attack</u>: ${laurenParty[2].attack} <br/>
								// <u>Defense</u>: ${laurenParty[2].defense} <br/>
								// <u>Abilities</u>: <br/> ${laurenParty[2].abilities[0]} <br/> ${laurenParty[2].abilities[1]} <br/>   
    })
}

displayPokemon()