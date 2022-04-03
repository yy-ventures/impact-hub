import React from 'react'
import Link from 'next/link'

// IMAGES
import image1 from '../../public/images/story-details/img-1.png'

// LAYOUT
import StoriesSvg from './layout/StoriesSvg';

export default function StoryDetails({html}) {
  return (
    <div className='story-details'>
        <div className='top-layout'>
          <StoriesSvg/>
        </div>
        <div className='bottom-layout'>
          <StoriesSvg/>
        </div>
        <div className='box'>
          <div className='container-1'>
            <div className='img-container'>
              <img className='image' src={image1.src} alt='image'/>
            </div>
            <div className='content-container'>
              <h1 className='content-container__heading'>Creating A Bangladesh Where Everyone Thrives</h1>
              <p className='content-container__text body-global'>From Amsterdam to Johannesburg, Jakarta to San Francisco, Impact Hub has evolved into a rapidly expanding, diverse global network of over 17.000+ members in 100+ locations. Each community is a wealth of innovative programs, events, and cutting-edge content. Step into any one of our Impact Hubs worldwide and immerse yourself in the local experience of a global movement.</p>
            </div>
          </div>
          <div className='story-container' dangerouslySetInnerHTML={{__html: html}}></div>
          <div className='box_back'>
            <Link href='/stories'>back</Link>
          </div>
        </div>
    </div>
  )
}
