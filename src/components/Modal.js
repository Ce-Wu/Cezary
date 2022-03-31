import React, { useState, useEffect } from 'react'
import '../style/modal.scss'
import illustrationFeaturesEasy from '../assets/illustration-features-tab-3.svg'

function Modal() {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setModal(true), 30000) 
    return () => clearTimeout(timer)  
    
  }, [])

  const closeModal = () => {
    setModal(false)
  }

  const close = 'X'
  const more = 'More Info'

  return (
    <div className="container-modal" id="three">
      {modal && (
        <div className="modal-wrapper">
          <div className="features-options-items">
            <img className="img3" src={illustrationFeaturesEasy} />
            <div className="info-box-modal">
              <h2>Share your bookmarks</h2>
              <p>
                Easily share your bookmarks and collections with others. Create
                a sharable link that you can send at the click of a button.
              </p>
              <a><span>{more}</span></a>
            </div>
              <div className="buttons-box" onClick={closeModal}>
                <span>{close}</span>
              </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
