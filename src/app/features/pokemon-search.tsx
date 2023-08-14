"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import "./pokemon-search.scss"
import { FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function PokemonSearch() {
  const pokemonSchema = yup
    .object({ pokemonName: yup.string().trim().required() })
    .required()
  type PokemonData = yup.InferType<typeof pokemonSchema>

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PokemonData>({ resolver: yupResolver(pokemonSchema) })

  const { push } = useRouter()

  const onSubmit = handleSubmit(({ pokemonName }: PokemonData) => {
    push(`/pokemon-info/${pokemonName}`)
  })

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
