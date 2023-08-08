import PokemonSection from "./pokemon-section/pokemon-section"
import "./app.scss"

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")

  if (!res.ok) {
    throw new Error("Pokemon API Failed")
  }

  return res.json()
}

export default async function Home() {
  const { results, next } = await getData()

  return (
    <main className='app'>
      {results.map(({ url, name }: { url: string; name: string }) => (
        <PokemonSection key={name} link={url} name={name} />
      ))}
    </main>
  )
}
