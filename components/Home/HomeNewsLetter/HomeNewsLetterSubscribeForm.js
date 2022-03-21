import React from 'react';

const HomeNewsLetterSubscribeForm = () => {
    return (
        <div className='home_news_letter_right_form'>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email Address'/>
            <button>Submit</button>
        </div>
    );
};

export default HomeNewsLetterSubscribeForm;