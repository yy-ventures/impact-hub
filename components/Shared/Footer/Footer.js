import React from 'react';
import ihdWhite from '../../../public/ihd_white.png'
import mapShape from '../../../public/map_shape.svg'
import fb from '../../../public/social/icon_fb.png'
import linked from '../../../public/social/icon_linkedin.png'
import insta from '../../../public/social/icon_insta.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_left'>
                <div className='footer_left_list'>
                    <ul>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Work With Us</a></li>
                        <li><a href='#'>Impact Blog</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='footer_left_logo'>
                    <img src={ihdWhite.src}/>
                </div>
            </div>
            <div className='footer_right'>
                <div className='footer_right_content'>
                    <h4>Find us at</h4>
                    <p>Located in: Grameen Telecom Bhaban Address: R952+66V, 9th Floor, Grameen Telecom Bhaban, Zoo Road, Dhaka 1216</p>
                    <div className='footer_right_content_social'>
                        <img src={fb.src}/>
                        <img src={linked.src}/>
                        <img src={insta.src}/>
                    </div>
                </div>
                
            </div>
            <div className='footer_right_map'>
                    <img src={mapShape.src}/>
                </div>  
        </footer>
    );
};

export default Footer;