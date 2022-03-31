import React from 'react';

const Cookies = ({setCookie}) => {
    const handleOffCookie = () => {
        setCookie(true)
        sessionStorage.setItem('cookie', true)
    }
    return (
        <section className='cookie_section'>
            <p>This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish.</p>  
            <button onClick={handleOffCookie}>Accept</button>
        </section>
    );
};

export default Cookies;