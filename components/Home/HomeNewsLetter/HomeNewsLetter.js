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
  const [showForm, setShowForm] = useState(true);
  const [hideForm, setHideForm] = useState(true);

  const [showSubscribe, setShowSubscribe] = useState(true);
  const [hideSubscribe, setHideSubscribe] = useState(false);

  const HandleShowForm = () => {
    setShowForm(false);
  };
  const HandleHideForm = () => {
    setShowForm(true);
  };

  const HandleShowSubscribeForm = () => {
    setShowSubscribe(false);
  };
  const HandleHideSubscribe = () => {
    setShowSubscribe(true);
  };
  return (
    <section className="home_news_letter">
        <div className="home_impacts_layout"><img src={layout2.src}/></div>
      <div className="home_news_letter_left">
        {showForm && (
          <div>
            <h4>Newsletter</h4>
            <p className="home_news_letter_left_para">
              If you’re interested in social impact, subscribe below and get curated weekly Impact news.
            </p>
            {showForm && <Button text="Show More" type="secondary" onClick={HandleShowForm} />}
          </div>
        )}
        {!showForm && <HomeNewsLetterSubscribeForm />}
        {!showForm && (
          <div className="home_news_letter_left_cross">
            <img src={crossBtn.src} alt="" onClick={HandleHideForm} />
          </div>
        )}
      </div>
      <div className="home_news_letter_right">
        {showSubscribe && (
          <div>
            <div className="home_news_letter_right_header">
              <h2>Let’s talk</h2>
              <h3>How may we help you?</h3>
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
