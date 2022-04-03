import React from 'react';
import HomeImpacts from '../Home/HomeImpacts/HomeImpacts'
import globalMap from '../../public/global_map.png'

const GlobalNetwork = () => {
    return (
        <section className='global_network'>
            <div className='global_network_container'>
                <div className='global_network_container_header'>
                    <div className='global_network_container_header_left'>
                        <div>
                            <h1>
                               <span className='mark'>Impact Hub Dhaka</span>
                               <span>is part of a Global</span>
                               <span>Network</span>
                            </h1>
                        </div>
                        <div className='para_medium'>
                            <p>We believe a better world is created through the combined accomplishments of compassionate, creative, and committed individuals focused on a common purpose.</p>
                        </div>
                        <div>
                            <p>From Amsterdam to Johannesburg, Jakarta to San Francisco, Impact Hub has evolved into a rapidly expanding, diverse global network of over 17.000+ members in 100+ locations. Each community is a wealth of innovative programs, events, and cutting-edge content. Step into any one of our Impact Hubs worldwide and immerse yourself in the local experience of a global movement.</p>
                        </div>
                    </div>
                    <div className='global_network_container_header_right'>
                        <img src={globalMap.src}/>
                    </div>
                </div>
            </div>
            <HomeImpacts/>
        </section>
    );
};

export default GlobalNetwork;