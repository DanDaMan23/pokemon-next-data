"use client"

import "./pokemon-search.scss"
import usePokemonSearch from "./use-pokemon-serach"

export default function PokemonSearch() {
  const {
    pokemonFormHandler: {
      register,
      formState: { errors }
    },
    onSubmit
  } = usePokemonSearch()

  return (
    <div className='pokemon-search'>
      <form onSubmit={onSubmit}>
        <input {...register("pokemonName")} />
        {errors.pokemonName && <p>{errors.pokemonName.message}</p>}
        <input type='submit' />
      </form>
    </div>
  )
}
