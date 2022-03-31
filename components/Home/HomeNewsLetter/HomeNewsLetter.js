import React, { useState } from 'react';

// COMPONENT
import HomeNewsLetterForm from './HomeNewsLetterForm';
import HomeNewsLetterSubscribeForm from './HomeNewsLetterSubscribeForm';
import Button from '../../Shared/Button/Button';

// LAYOUT
import layout2 from '../../../public/images/home/newsletter-layout.svg'

// ICON
import crossBtn from '../../../public/cross.svg'


const HomeNewsLetter = () => {
    const [showForm, setShowForm] = useState(true)
    const [showSubscribe, setShowSubscribe] = useState(true)
    
    const HandleShowForm = () => {
        setShowForm(false)
    }
    const HandleHideForm = () => {
        setShowForm(true)
    }
    
    const HandleShowSubscribeForm = () => {
        setShowSubscribe(false)
    }
    const HandleHideSubscribe = () => {
        setShowSubscribe(true)
    }
    return (
        <section className='home_news_letter'>
            <div className='home_news_letter_left'>
                {showForm && <div>
                    <h4>Newsletter</h4>
                    <p>If you’re interested in social impact, subscribe below and get curated weekly Impact news.</p>
                    {showForm && <button onClick={HandleShowForm}>Show More</button>}
                </div>}
                {!showForm && <HomeNewsLetterSubscribeForm/>}
                {!showForm && <div className="home_news_letter_left_cross">
                    <img src={crossBtn.src} alt="" onClick={HandleHideForm}/>
                </div>}
            </div>
            {showSubscribe && <Button text="Show Form" onClick={HandleShowSubscribeForm} />}
          </div>
        )}
        {!showSubscribe && <HomeNewsLetterForm />}
        {!showSubscribe && (
          <div className="home_news_letter_right_cross">
            <img src={crossBtn.src} alt="" onClick={HandleHideSubscribe} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeNewsLetter;
