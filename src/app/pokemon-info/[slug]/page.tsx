interface PageProps {
  params: { slug: string }
}

async function getData(link: string, errorMessage: string) {
  const res = await fetch(link)

  if (!res.ok) {
    throw new Error(errorMessage)
  }

  return res.json()
}

export default async function Page({ params: { slug } }: PageProps) {
  const { name, types, sprites, abilities } = await getData(
    `https://pokeapi.co/api/v2/pokemon/${slug}`,
    `${slug} does not exists`
  )

  //   console.log(types)
  //   console.log(sprites)
  //   console.log(abilities)

  return <main>{slug}</main>
}
