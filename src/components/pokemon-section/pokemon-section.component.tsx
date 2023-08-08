"use client"

import IPokemon from "@/interfaces/pokemon-interface"
import "./pokemon-section.component.scss"
import Image from "next/image"

export default function PokemonSection({
  id,
  name,
  imageLink,
  types
}: IPokemon) {
  return (
    <div className='pokemon-section'>
      <div className='image-section'>
        <img src={imageLink} alt={name} />
      </div>
      <div className='stats-section'>
        <h3 className='pokemon-name'>{name}</h3>
        <ul className='pokemon-types'>
          {types.map((type) => (
            <li key={`${type} ${name}`} className="type">{type}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
