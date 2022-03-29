import React from 'react'

// IMAGES
import image1 from '../../public/images/story-details/img-1.png'
import image2 from '../../public/images/story-details/img-2.png'
import image3 from '../../public/images/story-details/img-3.png'
// LAYOUT
import StoriesSvg from './layout/StoriesSvg';

export default function StoryDetails() {
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
          <div className='story-container'>

          </div>
          <div className='container-2'>
            <h1 className='container-2__heading'>1. Please tell us about Impact Hub Dhaka and how it has formed?</h1>
            <div className='container'>
              <div className='content-container'>
                <p>
                  Impact Hub Dhaka is an innovation lab, an inspiring space, 
                  and a locally rooted globally connected community. We 
                  are part of the fast-growing global Impact Hub network of 
                  impact entrepreneurs and innovators with more than 
                  16,000 members in over 100 cities around the world. 
                  Globally, Impact Hub offers their members a unique 
                  ecosystem of resources, collaborative spaces, 
                  entrepreneurial communities, and capacity building 
                  programs that inspire, connect and enable impact.
                </p>
                <p>
                  Impact Hub Dhaka was formed because we believe with an 
                  Impact Hub in Dhaka we will have the ability to 
                  revolutionize the entrepreneurship ecosystem of Dhaka and 
                  enable entrepreneurs and organizations to be more impact 
                  driven and sustainable. 
                </p>
              </div>
              <div className='img-container'>
                <img src={image2.src} alt='image'/>
              </div>
            </div>
          </div>
          <div className='container-2'>
            <h2 className='container-2__heading'>2. With what vision Impact Hub Dhaka has been launched?</h2>
            <div className='container'>
              <div className='img-container'>
                <img src={image3.src} alt='image'/>
              </div>
              <div className='content-container'>
                <p>
                  Impact Hub Dhaka is an innovation lab, an inspiring space, 
                  and a locally rooted globally connected community. We 
                  are part of the fast-growing global Impact Hub network of 
                  impact entrepreneurs and innovators with more than 
                  16,000 members in over 100 cities around the world. 
                  Globally, Impact Hub offers their members a unique 
                  ecosystem of resources, collaborative spaces, 
                  entrepreneurial communities, and capacity building 
                  programs that inspire, connect and enable impact.
                </p>
                <p>
                  Impact Hub Dhaka was formed because we believe with an 
                  Impact Hub in Dhaka we will have the ability to 
                  revolutionize the entrepreneurship ecosystem of Dhaka and 
                  enable entrepreneurs and organizations to be more impact 
                  driven and sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
