import React from 'react';

const HomeNewsLetterForm = () => {
    return (
        <div className='home_news_letter_left_form'>
            <input type="email" placeholder='Email Address'/>
            <input type="text" placeholder='Subject'/>
            <input type="text" placeholder='Give us your feedback'/>
            <button>Submit</button>
        </div>
    );
};

export default HomeNewsLetterForm;