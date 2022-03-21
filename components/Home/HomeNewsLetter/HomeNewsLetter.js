import React, { useState } from 'react';
import HomeNewsLetterForm from './HomeNewsLetterForm';
import HomeNewsLetterSubscribeForm from './HomeNewsLetterSubscribeForm';

const HomeNewsLetter = () => {
    const [showForm, setShowForm] = useState(true)
    const [showSubscribe, setShowSubscribe] = useState(true)
    const [hideForm, setHideForm] = useState(true)
    const [hideSubscribe, setHideSubscribe] = useState(false)

    const HandleShowForm = () => {
        setShowForm(false)
        setShowSubscribe(true)
        setHideSubscribe(true)
    }
    const HandleShowSubscribeForm = () => {
        setShowForm(true)
        setShowSubscribe(false)
        setHideForm(false)
    }
    const HideForm = () => {
        setHideForm(true)
        setShowForm(true)
        setShowSubscribe(true)
    }
    const HideSubscribe = () => {
        setHideForm(true)
        setShowForm(true)
        setShowSubscribe(true)
        setHideSubscribe(false)
    }
    return (
        <section className='home_news_letter'>
            <div className='home_news_letter_left'>
                {showForm && <div>
                    <h4>Newsletter</h4>
                    <p>If you’re interested in social impact, subscribe below and get curated weekly Impact news.</p>
                    {hideForm && <button onClick={HandleShowSubscribeForm}>Show More</button>}
                    {!hideForm && <button onClick={HideForm}>Hide Form</button>}
                </div>}
                {!showForm && <HomeNewsLetterForm />}
            </div>
            <div className='home_news_letter_right'>
                {showSubscribe && <div>
                    <div className='home_news_letter_right_header'>
                        <h2>Let’s talk</h2>
                        <h3>How may we help you?</h3>
                    </div>
                    {!hideSubscribe && <button onClick={HandleShowForm}>Show Form</button>}
                    {hideSubscribe && <button onClick={HideSubscribe}>Hide Form</button>}
                </div>}
                {!showSubscribe && <HomeNewsLetterSubscribeForm/>}
            </div>
        </section>
    );
};

export default HomeNewsLetter;