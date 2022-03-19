import React from 'react';
import commonShape from '../../public/common_path.png';

const Faq = () => {
    return (
        <section className='faq_container'>
            <div className='faq_container_content'>
                <div className='faq_container_content_left'>
                    <h1>
                        <span>Questions you may come across before</span>
                        starting your journey:
                    </h1>
                    <p>Impact Hub Dhaka founders bring in more than 35 years experience of building social businesses, technology companies and social impact projects in Bangladesh.</p>
                    <p>We’re looking for community managers, business developers and community hosts to join our growing team! Get in touch at dhaka@impacthub.net.</p>
                </div>
                <div className='faq_container_content_right'>
                    <h1>Come create with us!</h1>
                    <img src={commonShape.src}/>
                </div>
            </div>
        </section>
    );
};

export default Faq;