import "./pokemon-type-pill.component.scss"

interface PokemonTypePillProps {
  type: string
}

export default function PokemonTypePill({ type }: PokemonTypePillProps) {
  return (
    <div
      className='pokemon-type-pill'
      style={{ backgroundColor: `var(--${type}-type)` }}
    >
      <p>{type}</p>
    </div>
  )
}
