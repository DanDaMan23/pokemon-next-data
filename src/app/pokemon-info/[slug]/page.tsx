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
  console.log(abilities)

  return (
    <main className='pokemon-info-page'>
      <img src={sprites.front_default} alt={name} />
      <h1 className="pokemon-name">{name}</h1>
      <ul className='pokemon-type'>
        {types.map(({ type: { name } }: { type: { name: string } }) => (
          <li key={name}>{name}</li>
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
    </main>
  )
}
