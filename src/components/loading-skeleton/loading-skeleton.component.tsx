import Image from "next/image"

import "./loading-skeleton.component.scss"

export default function LoadingSkeleton() {
  return (
    <div className='loading-skeleton'>
      <div className='spinner'>
        <Image
          src='/images/pokeball_loading.png'
          alt='Pokeball Loading'
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}
