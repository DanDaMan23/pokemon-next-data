import type { Metadata } from "next"

import "./global-styles.scss"

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Created with Next.js"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='header'>
          <h1>Pokemon</h1>
        </div>
        {children}
      </body>
    </html>
  )
}
