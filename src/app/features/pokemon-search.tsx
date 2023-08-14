"use client"

import usePokemonSearch from "./use-pokemon-serach"
import "./pokemon-search.scss"

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
        <div className='input-area'>
          <input
            {...register("pokemonName")}
            placeholder='Enter Pokemon Name'
          />
          {errors.pokemonName && <p className="error-message">{errors.pokemonName.message}</p>}
        </div>
        <div className='button-area'>
          <input type='submit' />
        </div>
      </form>
    </div>
  )
}
