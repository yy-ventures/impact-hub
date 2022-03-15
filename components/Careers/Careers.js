import React from 'react';
import careersShape from '../../public/careers_path.png';

const Careers = () => {
    return (
        <section className='careers_container'>
            <div className='careers_container_content'>
                <div className='careers_container_content_left'>
                    <p>Impact Hub Dhaka founders bring in more than 35 years experience of building social businesses, technology companies and social impact projects in Bangladesh.</p>
                    <p>We’re looking for community managers, business developers and community hosts to join our growing team! Get in touch at dhaka@impacthub.net.</p>
                </div>
                <div className='careers_container_content_right'>
                    <h1>Excited to create impact together?</h1>
                    <img src={careersShape.src}/>
                </div>
            </div>
        </section>
    );
};

export default Careers;