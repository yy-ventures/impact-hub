import React from 'react'
// layout
import layout from '../../../public/images/global-network/button-layout.svg'
export default function ButtonWhite() {
  return (
    <a href='#' class="signup-button">
        <img className='layout' src={layout.src} alt='btn layout'/>
        <span>Sign up to Impact HUB Dhaka</span>
    </a>
  )
}
