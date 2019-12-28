import React, { Component } from 'react'
import './css/style.css'
import social1 from './assets/social1.png'
import social2 from './assets/social2.png'
import social3 from './assets/social3.png'
import social4 from './assets/social4.png'
import logo1 from './assets/logo1.png'
import logo2 from './assets/logo2.png'
import logo3 from './assets/logo3.png'

class AboutComponent extends Component {
  render () {
    return (
      <div>
        <div className='logo'>
          <img src={logo1} alt='' className='partners' />
          <img src={logo2} alt='' className='partners' />
          <img src={logo3} alt='' className='partners' />
          <img src={logo1} alt='' className='partners' />
          <img src={logo2} alt='' className='partners' />
          <img src={logo3} alt='' className='partners' />
        </div>
        <div className='about-wrapper'>
          <div className='contact'>
            <button className='btn-contact'>Contact Us</button>
          </div>
          <div className='social'>
            <img src={social1} alt='' />
            <img src={social2} alt='' className='soc_icon' />
            <img src={social3} alt='' className='soc_icon' />
            <img src={social4} alt='' className='soc_icon' />
            <p className='footer_text'>© 2017 - 2019 Deviserweb Ltd.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutComponent
