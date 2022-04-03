import React from 'react';

// LAYOUT

// COMPONENT
import HomeImpacts from '../Home/HomeImpacts/HomeImpacts'
import ButtonWhite from '../Shared/ButtonWhite/ButtonWhite';
// MAP
import globalMap from '../../public/global_map.png'

const GlobalLocations = () => {
    return (
        <section className='global_locations'>
            <div className='global_locations_container'>
                <div className='global_locations_container_filter'></div>
                <div className='global_locations_container_embed_container'>
                    <iframe src='https://impacthub.net/locationsmap/'></iframe>
                </div>
                <div className='global_locations_container_right'>
                    <h1><span>Join this</span>
                        <span>Global Network</span>
                    </h1>
                    <p>Impact Hub Dhaka is part of a global network of over 100+ connected communities that enable collaboration. We unite people from every profession, background and culture with imagination and drive to challenge the status quo. We see and do things differently – together we create the new normal.</p>
                    <ButtonWhite/>
                </div>
            </div>
        </section>
    );
};

export default GlobalLocations;