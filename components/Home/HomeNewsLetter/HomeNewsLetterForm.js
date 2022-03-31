import React, { useState } from 'react';
import PushNotify from '../../Shared/PushNotify/PushNotify';

const HomeNewsLetterForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("first_choice");
  const [feedback, setFeedback] = useState("");

  // error message
  const [error, setError] = useState("");

    // push
    const [showPush, setShowPush] = useState(false)

    const HandleSubmit = async e => {
        e.preventDefault()
        let newsLetterData = new FormData();

    newsLetterData.append("email", email);
    newsLetterData.append("subject", subject);
    newsLetterData.append("message", feedback);

        await fetch("http://ihd.yyventures.org/api/help", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"),
            },
            body: newsLetterData,
        })
        .then((res) => res.json())
        .then(data => {
            if (data.success) {
                setShowPush(true)
                setEmail('')
                setSubject('')
                setFeedback('')
            }
            if(!data.success) {
                setError(data.errors)
            }
        }) 
        .catch(err => err);
    }
    return (
        <div className='home_news_letter_left_form'>
            <form onSubmit={HandleSubmit}>
                <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} required />
                <select value={subject} onChange={e => setSubject(e.target.value)} required>
                    <option value='first_choice'>First Choice</option>
                    <option value='second_choice'>Second Choice</option>
                    <option value='third_choice'>Third Choice</option>
                </select>
                <textarea type="text" placeholder='Give us your feedback' value={feedback} onChange={e => setFeedback(e.target.value)} required />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <p>{error}</p>
            {showPush && <PushNotify setShowPush={setShowPush}/>}
        </div>
  );
};

export default HomeNewsLetterForm;
