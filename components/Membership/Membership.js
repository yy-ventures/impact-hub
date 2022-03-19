import React from 'react';
import partnerShape from '../../public/partners_path.png';
import TitleBlock from '../Shared/TitleBlock/TitleBlock';

const Membership = () => {
    return (
        <section className='membership_container'>
            <div className='membership_container_header'>
                <div className='membership_container_header_content'>
                    <div>
                        <h4>The world is changing.</h4>
                        <h5>We are on the transitioning team.</h5>
                    </div>
                    <div>
                        <p>
                            Impact Hub Dhaka is part of a global network of over 100 connected communities that enable collaboration. We unite people from every profession, background and culture with imagination and drive to challenge the status quo. We see and do things differently – together we create the new normal.
                        </p>
                    </div>
                </div>
                <TitleBlock title="Come create with us!"
                    parentClass='membership_container_header'
                    shape={partnerShape.src}
                />
            </div>
        </section>
    );
};

export default Membership;