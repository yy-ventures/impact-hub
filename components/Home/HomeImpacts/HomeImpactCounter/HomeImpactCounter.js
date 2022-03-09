import React from 'react';

const HomeImpactCounter = ({counter, index}) => {
    const { number, title1, title2 } = counter
    return (
        <div className="home_impacts_body_counter_card">
            <div className={`home_impacts_body_counter_card_${index+1}`}>
                <div>
                    <h2>{number > 10000 ? Math.abs(number / 1000) + "K" : number}</h2>
                </div>
                <div>
                    <p>{title1}</p>
                    <p>{title2}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeImpactCounter;