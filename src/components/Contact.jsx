import React from 'react'
import "../styleComponents/Contact.scss";
import ScrollToTop from './ScrollToTop.jsx';

function Contact() {
  return (
    <div>
        <h1 id='contact'>Pour me contacter</h1>
        <a href="mailto:undia42@gmail.com"><p className='whrite-me'>Whrite-me</p></a>
        <ScrollToTop />
        </div>
  )
}

export default Contact
