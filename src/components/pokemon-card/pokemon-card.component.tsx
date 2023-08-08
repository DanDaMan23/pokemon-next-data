"use client"

import { CSSProperties } from "react"
import IPokemon from "@/interfaces/pokemon-interface"
import "./pokemon-card.component.scss"

interface PokemonCardProps {
  className?: string
  style?: CSSProperties
}

export default function PokemonCard({
  name,
  imageLink,
  types,
  className = "",
  style = {}
}: IPokemon & PokemonCardProps) {
  return (
    <div className={`pokemon-section ${className}`} style={style}>
      <div className='image-section'>
        <img src={imageLink} alt={name} />
      </div>
      <div className='stats-section'>
        <h3 className='pokemon-name'>{name}</h3>
        <ul className='pokemon-types'>
          {types.map((type) => (
            <li key={`${type} ${name}`} className='type'>
              {type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
