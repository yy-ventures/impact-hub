import React from 'react';

const HomeOfferCard = ({offer}) => {
    const { img, title } = offer;
    return (
        <div className='home_offer_body_card'>
            <div className='home_offer_body_card_back'>
                <img src={`/images/spaces/${img}.webp`}/>
                <div className='home_offer_body_card_back_overlay'>
                    <div className='home_offer_body_card_back_overlay_content'>
                        <h4>{title}</h4>
                    </div>
                </div>
            </div>
            <div className='home_offer_body_card_front'>
                <img src={`/images/spaces/${img}.webp`}/>
                <div className='home_offer_body_card_front_overlay'>
                    <div className='home_offer_body_card_front_overlay_content'>
                        <h4>{title}</h4>
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default HomeOfferCard;