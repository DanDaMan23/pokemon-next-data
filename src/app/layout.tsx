"use client"

import type { Metadata } from "next"
import { useRouter } from "next/navigation"

import "./global-styles.scss"
import PokemonSearch from "./features/pokemon-search"

const metadata: Metadata = {
  title: "Pokemon App",
  description: "Created with Next.js"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { replace } = useRouter()

  return (
    <html lang='en'>
      <body>
        <div className='header'>
          <button
            type='button'
            className='pokemon-home-button'
            onClick={() => replace("/")}
          >
            <h1>Pokemon</h1>
          </button>
        </div>
        <PokemonSearch />
        {children}
      </body>
    </html>
  )
}
