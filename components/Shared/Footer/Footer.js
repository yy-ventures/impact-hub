import React from 'react';
import ihdWhite from '../../../public/ihd_white.png'
import mapShape from '../../../public/map_shape.svg'
import fb from '../../../public/social/icon_fb.png'
import linked from '../../../public/social/icon_linkedin.png'
import insta from '../../../public/social/icon_insta.png'
import Link from 'next/link';

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
            <div className='footer_middle'>
                <div className='footer_middle_content'>
                    <h4>Find us at</h4>
                    <p>Located in: Grameen Telecom Bhaban Address: R952+66V, 9th Floor, Grameen Telecom Bhaban, Zoo Road, Dhaka 1216</p>
                    <div className='footer_middle_content_social'>
                        <Link href="#">
                            <a><img src={fb.src}/></a>
                        </Link>
                        <Link href="#">
                            <a><img src={linked.src}/></a>
                        </Link>
                        <Link href="#">
                            <a><img src={insta.src}/></a>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className='footer_right'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14601.179410948627!2d90.3505441!3d23.808112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc090596a1ecbdba9!2sImpact%20Hub%20Dhaka!5e0!3m2!1sen!2sbd!4v1647247493467!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                    <img src={mapShape.src}/>
            </div>  
        </footer>
    );
};

export default Footer;