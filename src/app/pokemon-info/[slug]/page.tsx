import PokemonTypePill from "@/components/pokemon-type-pill/pokemon-type-pill.component"
import "./pokemon-info-page.scss"

interface PageProps {
  params: { slug: string }
}

async function getData(link: string, errorMessage: string) {
  const res = await fetch(link)

  if (!res.ok) {
    throw new Error(errorMessage)
  }

  return res.json()
}

export default async function Page({ params: { slug } }: PageProps) {
  const { name, types, sprites, abilities } = await getData(
    `https://pokeapi.co/api/v2/pokemon/${slug}`,
    `${slug} does not exists`
  )

  return (
    <main className='pokemon-info-page'>
      <div className='container'>
        {/* Soon to be a carousel */}
        <div className='image-container'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={sprites.front_default} alt={name} />
        </div>

        <h1 className='pokemon-name'>{name}</h1>

        <h3>Types</h3>
        <ul className='pokemon-types'>
          {types.map(({ type: { name } }: { type: { name: string } }) => (
            <li key={name}>
              <PokemonTypePill key={name} type={name} />
            </li>
          ))}
        </ul>

        <h3>Abilities</h3>
        <ul className='pokemon-abilities'>
          {abilities.map(
            ({ ability: { name } }: { ability: { name: string } }) => (
              <li key={name}>{name}</li>
            )
          )}
        </ul>
      </div>
    </main>
  )
}
