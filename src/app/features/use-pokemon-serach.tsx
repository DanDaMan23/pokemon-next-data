"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation"

export default function usePokemonSearch() {
  const pokemonSchema = yup
    .object({
      pokemonName: yup.string().trim().required("Pokemon Name Required")
    })
    .required()
  type PokemonData = yup.InferType<typeof pokemonSchema>

  const pokemonFormHandler = useForm<PokemonData>({
    resolver: yupResolver(pokemonSchema)
  })

  const { push } = useRouter()

  const onSubmit = pokemonFormHandler.handleSubmit(
    ({ pokemonName }: PokemonData) => {
      push(`/pokemon-info/${pokemonName}`)
    }
  )

  return { pokemonFormHandler, onSubmit }
}
