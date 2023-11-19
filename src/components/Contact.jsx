import React from 'react'
import "../styleComponents/Contact.scss";
import ScrollToTop from './ScrollToTop';

function Contact() {
  return (
    <div>
        <h1 id='contact'>Pour me contacter</h1>
        <p className='whrite-me'><a href="mailto:undia42@gmail.com">Whrite-me</a></p>
        <ScrollToTop />
        </div>
  )
}

export default Contact
