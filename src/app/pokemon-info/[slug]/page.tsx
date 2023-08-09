

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
  const res = await getData(
    `https://pokeapi.co/api/v2/pokemon/${slug}`,
    `${slug} does not exists`
  )

  console.log(res)

  return <main>{slug}</main>
}
