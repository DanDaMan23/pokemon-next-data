"use client"

import { useRouter } from "next/navigation"

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error }: ErrorProps) {
  const { replace } = useRouter()

  return (
    <div>
      <h2>{error.message}</h2>
      <button type='button' onClick={() => replace("/")}>
        Go to home page
      </button>
    </div>
  )
}
