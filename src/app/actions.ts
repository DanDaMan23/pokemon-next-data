export async function getInitialPokemonList() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")

  if (!res.ok) {
    throw new Error("Pokemon API Failed")
  }

  return res.json()
}
