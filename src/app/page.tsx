import PokemonCard from "@/components/pokemon-card/pokemon-card.component"

import "./app.scss"
import IPokemon from "@/interfaces/pokemon-interface"

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")

  if (!res.ok) {
    throw new Error("Pokemon API Failed")
  }

  return res.json()
}

export default async function Home() {
  const { results, next } = await getData()

  console.log(results)

  return (
    <main className='app'>
      {results.map((pokemon: IPokemon) => (
        <PokemonCard
          key={pokemon.name}
          id={1}
          name={pokemon.name}
          types={["grass", "poison"]}
          imageLink='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        />
      ))}

      {/* <PokemonCard
        id={4}
        name='charmander'
        types={["fire", "poison"]}
        imageLink='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
      /> */}
    </main>
  )
}
