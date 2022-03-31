import React, { useState } from 'react';
import PushNotify from '../../Shared/PushNotify/PushNotify';

const HomeNewsLetterSubscribeForm = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let subscribeFrom = new FormData();

    // push
    const [showPush, setShowPush] = useState(false)

    const HandleSubmit = async e => {
        e.preventDefault()
        let subscribeFrom = new FormData();

        subscribeFrom.append('name', clientName)
        subscribeFrom.append('email', email)

        await fetch("http://ihd.yyventures.org/api/newsletter", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"),
            },
            body: subscribeFrom,
        })
            .then((res) => res.json())
            .then(data => {
                if (data.success) {
                    setShowPush(true)
                    setEmail('')
                    setClientName('')
                }
                if(!data.success) {
                    setError(data.errors)
                }
            }) 
            .catch(err => err);
    }
    return (
        <div className='home_news_letter_right_form'>
            <form onSubmit={HandleSubmit}>
                <input type="text" placeholder='Name' value={clientName} onChange={e => setClientName(e.target.value)} required/>
                <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} required/>
                <button>Submit</button>
            </form>
            <p>{error}</p>
            {showPush && <PushNotify setShowPush={setShowPush}/>}
        </div>
    );
};

export default HomeNewsLetterSubscribeForm;
