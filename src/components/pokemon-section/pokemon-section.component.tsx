import "./pokemon-section.component.scss"

export default function PokemonSection() {
  return (
    <div className='pokemon-section'>
      <div className='image-section'>
        <img src='../../../public/vercel.svg' alt='Pokemon Picture' />
      </div>
      <div className='stats-section'>Stats</div>
    </div>
  )
}
