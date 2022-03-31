import React, { useState } from 'react'
import illustrationFeaturesSimple from '../assets/illustration-features-tab-1.svg'
import illustrationFeaturesSpeedy from '../assets/illustration-features-tab-2.svg'
import illustrationFeaturesEasy from '../assets/illustration-features-tab-3.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'

import '../style/features.scss'

function Features() {

  const Simple = () => {
    return(
      <div>
        <div className="features-wrapper">
        <div className="features-options-items">
          <img src={illustrationFeaturesSimple} />
          <div className="info-box">
            <h2>Bookmark in one click</h2>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
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

  const Speedy = () => {
    return(<div>
      <div className="features-wrapper pos-left">
        <div className="features-options-items">
          <img className='pos-margin' src={illustrationFeaturesSpeedy} />
          <div className="info-box">
            <h2>Inteligent search</h2>
            <p>
              Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks
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
    )}

  const Easy = () => {
    return(<div>
      <div className="features-wrapper pos-left">
        <div className="features-options-items">
          <img className='pos-margin' src={illustrationFeaturesEasy} />
          <div className="info-box">
            <h2>Share your bookmarks</h2>
            <p>
              Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button
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
    )}

  const more = 'More Info'

  const [activeId, setActiveId] = useState('active')

  const activeIdOn = () => {
    setActiveId('inactive')
  }
  

  return (
    <div className="features" id="features">
      <Router>
        <div className="feature-title">
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="features-options-menu">
          <NavLink
            to="simple"
            onClick={activeIdOn}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <div className="features-options-menu-item" id={activeId}>
              <p>Simple Bookmarking</p>
            </div>
          </NavLink>
          <NavLink
            to="speedy"
            onClick={activeIdOn}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <div className="features-options-menu-item" id="one">
              <p>Speedy Searching</p>
            </div>
          </NavLink>
          <NavLink
            to="easy"
            onClick={activeIdOn}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <div className="features-options-menu-item" id="one">
              <p>Easy Sharing</p>
            </div>
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Simple/>}/>
          <Route path="simple" element={<Simple/>}/>
          <Route path="speedy" element={<Speedy />} />
          <Route path="easy" element={<Easy />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Features
