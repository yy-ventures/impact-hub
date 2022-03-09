import React from 'react';
import HomeOfferCard from './HomeOfferCard/HomeOfferCard';
import offerData from '../../../static/Data/offer.json';

const HomeOffer = () => {
    
    return (
        <section className='home_offer'>
            <div className='home_offer_header'>
                <h3>What we offer</h3>
            </div>
            <div className='home_offer_body'>
                {offerData.map((offer, index) => <HomeOfferCard offer={offer} key={index}/>)}
            </div>
        </section>
    );
};

export default HomeOffer;