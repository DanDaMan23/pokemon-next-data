import PokemonSection from "./pokemon-section/pokemon-section"
import "./app.scss"
import Link from "next/link"
import { getInitialPokemonList } from "./actions"


export default async function Home() {
  const { results, next } = await getInitialPokemonList()

  return (
    <main className='app'>
      {results.map(({ url, name }: { url: string; name: string }) => (
        <Link key={name} href={`/pokemon-info/${name}`}>
          <PokemonSection link={url} name={name} />
        </Link>
      ))}
    </main>
  )
}
