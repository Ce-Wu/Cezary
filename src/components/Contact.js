import React, { useState, useEffect } from 'react'
import '../style/contact.scss'

function Contact() {
  const [counter, setCounter] = useState(35000)

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1000), 500);
    return () => clearInterval(timer);
  }, [counter]);

  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  
  const validateEmail = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const email = event.target.value;
    if (emailRegex.test(email) && email != '') {
      setIsValid(true);
      setMessage('You can send email');
    } else {
      setIsValid(false);
      setMessage("Whoops, make sure it's an email");
    }
  };

  return (
    <div className='contact'>
        <div className='contact-counting'>
            <p><span>{counter}+</span> already joined</p>
        </div>
        <div className='text-contact'>
        <h2>Stay up-to-date with what we're doing</h2>
        </div>
       <div className='input-box'>
       <div className='input-items'>
        <input type='email' placeholder='Enter your email address' onChange={validateEmail}/>
        <div className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>
      </div>
        <button 
        className='contact-button'
        >
          <span>Contact Us</span>
        </button>
    </div>
    </div>
  )
}

export default Contact