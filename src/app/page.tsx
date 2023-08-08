import PokemonSection from "@/components/pokemon-section/pokemon-section.component"

import "./app.scss"

export default function Home() {
  return (
    <main className='app'>
      <PokemonSection
        id={1}
        name='bulbasaur'
        types={["grass", "poison"]}
        imageLink='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      />
      <PokemonSection
        id={4}
        name='charmander'
        types={["fire", "poison"]}
        imageLink='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
      />
    </main>
  )
}
