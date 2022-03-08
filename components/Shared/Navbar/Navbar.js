import React, { useState } from 'react';
import logo from '../../../static/assets/ihd_logo.svg'
import globeIcon from '../../../static/assets/globe-icon.svg'
import Link from 'next/link';
import SVGCursor from '../SVGCursor/SVGCursor';

const Navbar = () => {
    const [mousePoint, setMousePoint] = useState({x:203.5, y:-83})
    
    const HandleCursor = e => {
        setMousePoint({x: e.clientX, y: e.clientY})
    }
    console.log(mousePoint.x)
    return (
        <nav className='navbar_container' onMouseMove={HandleCursor}>
            <SVGCursor x={mousePoint.x} y={mousePoint.y}/>
            <div className='navbar_grid'>
                <div className='brand_logo'>
                    <Link href="/"><img src={logo.src} /></Link>
                </div>
                <div className='nav_list'>
                    <ul>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/about">Co-Working</Link></li>
                        <li><Link href="/about">Office Space</Link></li>
                        <li><Link href="/about">Event Space</Link></li>
                        <li><Link href="/about">Events</Link></li>
                        <li><Link href="/about">Stories</Link></li>
                    </ul>
                </div>
                <div className='language-container'>
                    <span className='language'><img src={globeIcon.src} /><p>english</p></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;