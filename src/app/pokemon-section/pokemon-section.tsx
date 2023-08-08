import PokemonCard from "@/components/pokemon-card/pokemon-card.component"

async function getData(link: string) {
  const res = await fetch(link)

  if (!res.ok) {
    throw new Error("Pokemon fetch failed")
  }

  return res.json()
}

interface PokemonSectionProps {
  link: string
  name: string
}

export default async function PokemonSection({
  link,
  name
}: PokemonSectionProps) {
  const {
    id,
    types,
    sprites: { front_default }
  } = await getData(link)

  return (
    <PokemonCard
      key={name}
      id={id}
      name={name}
      types={types.map((type: { type: { name: string } }) => type.type.name)}
      imageLink={front_default}
    />
  )
}
