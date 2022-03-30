import React from 'react'

import illustrationFeaturesSimple from '../assets/illustration-features-tab-1.svg'

import '../style/features.scss'

function Features() {
  const simple = 'Simple Bookmarking'
  const speedy = 'Speedy Searching'
  const easy = 'Easy Sharing'
  const more = 'More Info'

  return (
    
    <div className="features" id="features">
      <div className="feature-title">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="features-options-menu">
        <div className='features-options-menu-item active' id='one'>
          <p>{simple}</p>
        </div>
        <div className='features-options-menu-item' id='two'>
        <a>
          <p>{speedy}</p>
        </a>
        </div>
        <div className='features-options-menu-item' id='three'>
        <a>
          <p>{easy}</p>
        </a>
        </div>
      </div>
      <div className='features-wrapper'>
        <div className="features-options-items">
        <img src={illustrationFeaturesSimple} />
        <div className="info-box">
          <h2>Bookmark in one click</h2>
          <p>
          Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
          </p>
          <div className="buttons-box">
            <a href="#" className="button b-chrom">
              <p>{more}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Features
