import React from 'react';

const HomeOfferCard = ({offer}) => {
    const { img1, img2, title, sub_title } = offer;
    return (
        <div className='home_offer_body_card'>
            <div className='home_offer_body_card_back'>
                <img src={`../../../../static/assets/${img1}.jpg`}/>
                <div className='home_offer_body_card_back_overlay'>
                    <div className='home_offer_body_card_back_overlay_content'>
                        <h4>{title}</h4>
                        <p>{sub_title}</p>
                    </div>
                </div>
            </div>
            <div className='home_offer_body_card_front'>
                <img src={`../../../../static/assets/${img2}.jpg`}/>
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