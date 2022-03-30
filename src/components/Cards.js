import React from 'react'
import '../style/cards.scss'
import LogoChrome from '../assets/logo-chrome.svg'
import LogoFirefox from '../assets/logo-firefox.svg'
import LogoOpera from '../assets/logo-opera.svg'


function Cards() {
    const buttonTitle = 'Add & Install Extension'
    const data = [
        {
            id: 1,
            logo: LogoChrome,
            name: 'Add to Chrome',
            version: 'Minumum version 62',
        },
        {
            id: 2,
            logo: LogoFirefox,
            name: 'Add to Firefox',
            version: 'Minumum version 55',
        },
        {
            id: 3,
            logo: LogoOpera,
            name: 'Add to Opera',
            version: 'Minumum version 46',
        },
    ]
  return (
    <div className='download'>
        <div className='download-info'>
        <h2>Download the extension</h2>
        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like to prioritize</p>
        </div>
        <div className='card-box'>   
            {data.map((el) => {
                return (
                    <div className='card-body' key={el.id}>
                        <img src={el.logo}/>
                        <h3>{el.name}</h3>
                        <p>{el.version}</p>
                        <div className='dots'></div>
                        <button className='button'><span>{buttonTitle}</span></button>
                    </div>
                )
            })}
            </div>
    </div>
  )
}

export default Cards