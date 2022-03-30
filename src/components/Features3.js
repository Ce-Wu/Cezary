import React, { useState, useEffect } from 'react'
import '../style/modal.scss'
import illustrationFeaturesEasy from '../assets/illustration-features-tab-3.svg'

function Features3() {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setModal(true), 30000)
    return () => clearInterval(timer)
  }, [modal])

  const closeModal = () => {
    setModal(false)
  }

  const more = 'X'

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
            </div>
              <div className="buttons-box">
                <p onClick={closeModal}>{more}</p>
              </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Features3
