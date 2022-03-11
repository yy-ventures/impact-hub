import React from 'react';
import rightArrow from '../../../public/right_arrow.svg'
import Link from 'next/link'
const HomeGrid = () => {
    return (
        <section className='home_image_grid'>
            <div className='home_image_grid_header'>
                <div className='home_image_grid_header_left'>
                    <h4>The Impact Hub</h4>
                    <h2>Community</h2>
                </div>
                <div className='home_image_grid_header_right'>
                    <Link href="#">
                        <a><h4>view stories</h4></a>    
                    </Link>
                    <span><img src={rightArrow.src}/></span>
                </div>
            </div>
            <div className='home_image_grid_body'>
                <div className='home_image_grid_body_grid'>
                    <div className='home_image_grid_body_grid_images'>
                        <img src='/images/grid/1.jpg' />
                        <img src='/images/grid/2.jpg' />

                    </div>
                    <div className='home_image_grid_body_grid_images'>
                        <img src='/images/grid/3.jpg' />
                        <img src='/images/grid/4.jpg' />
                        <img src='/images/grid/5.jpg' />

                    </div>
                    <div className='home_image_grid_body_grid_images'>
                        <img src='/images/grid/6.jpg' />
                        <img src='/images/grid/7.jpg' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeGrid;