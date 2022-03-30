import React, { useState } from 'react';

const HomeNewsLetterForm = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [feedback, setFeedback] = useState('')

    const HandleSubmit = async e => {
        e.preventDefault()
        let newsLetterData = new FormData();

        newsLetterData.append('email', email)
        newsLetterData.append('subject', subject)
        newsLetterData.append('feedback', feedback)

        await fetch("https://ihd.yyventures.org/api/booking", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"),
            },
            body: newsLetterData,
        })
            .then((res) => {
                if (res.success) {
                    alert('Thank you! we have received your query!')
                    setEmail('')
                    setSubject('')
                    setFeedback('')
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className='home_news_letter_left_form'>
            <form onSubmit={HandleSubmit}>
                <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="text" placeholder='Subject' value={subject} onChange={e => setSubject(e.target.value)} required />
                <textarea type="text" placeholder='Give us your feedback' value={feedback} onChange={e => setFeedback(e.target.value)} required />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default HomeNewsLetterForm;