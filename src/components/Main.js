import React from 'react'
import "../style/main.scss"
import Features3 from '../components/Features3'
import ilustrationHero from '../assets/illustration-hero.svg'

function Main() {

  const chrome = "Get it on Chrome"
  const firefox = "Get it on Firefox"

  return (
    <div className='main'>
<Features3/>
      <div className='simple-bookmark-box'>
        <div className='ilustration-box'>
          <img src={ilustrationHero} alt='tablet picture'/>
        </div>
        <div className='info-box'>
          <h2>A Simple Bookmark Manager</h2>
          <p>A clean and simple interface to organize your favourite websites. Open a new browser tab see your sites load instantly. Try it for free.</p>
          <div className='buttons-box'>
          <a href='#' className='button b-chrom'><p>{chrome}</p></a>
          <a href='#' className='button b-firefox'><p>{firefox}</p></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Main