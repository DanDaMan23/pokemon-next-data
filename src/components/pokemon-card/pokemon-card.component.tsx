"use client"

import { CSSProperties } from "react"
import IPokemon from "@/interfaces/pokemon-interface"
import "./pokemon-card.component.scss"
import PokemonTypePill from "../pokemon-type-pill/pokemon-type-pill.component"

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
    <div className={`pokemon-card ${className}`} style={style}>
      <div className='image-section'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageLink} alt={name} />
      </div>
      <div className='stats-section'>
        <h3 className='pokemon-name'>{name}</h3>
        <div className='pokemon-types'>
          {types.map((type) => (
            <PokemonTypePill key={`${type} ${name}`} type={type} />
          ))}
        </div>
      </div>
    </div>
  )
}
