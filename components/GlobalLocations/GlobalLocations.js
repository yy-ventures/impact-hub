import React from 'react';
import HomeImpacts from '../Home/HomeImpacts/HomeImpacts'
import globalMap from '../../public/global_map.png'

const GlobalLocations = () => {
    return (
        <section className='global_locations'>
            <div className='global_locations_container'>
                <div className='global_locations_container_information'></div>
                <div className='global_locations_container_embed_container'>
                    <iframe src='https://impacthub.net/locationsmap/'></iframe>
                </div>
                <div className='global_locations_container_right'>
                    <div>
                        <h1>Join this</h1>
                        <h1>Global Network</h1>
                    </div>
                    <div>
                        <p>Impact Hub Dhaka is part of a global network of over 100+ connected communities that enable collaboration. We unite people from every profession, background and culture with imagination and drive to challenge the status quo. We see and do things differently – together we create the new normal.</p>
                    </div>
                    <div>
                        <a href='#' class="button">Sign up to Impact HUB Dhaka</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalLocations;