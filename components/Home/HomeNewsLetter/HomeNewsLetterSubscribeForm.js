import React, { useState } from 'react';

const HomeNewsLetterSubscribeForm = () => {

    const [clientName, setClientName] = useState('')
    const [email, setEmail] = useState('')

    const HandleSubmit = async e => {
        e.preventDefault()
        let subscribeFrom = new FormData();

        subscribeFrom.append('client_name', clientName)
        subscribeFrom.append('email', email)

        await fetch("https://ihd.yyventures.org/api/booking", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + window.localStorage.getItem("token"),
            },
            body: subscribeFrom,
        })
            .then((res) => {
                if (res.success) {
                    alert('Thank you! we have received your query!')
                    setEmail('')
                    setClientName('')
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className='home_news_letter_right_form'>
            <form onSubmit={HandleSubmit}>
                <input type="text" placeholder='Name' onChange={e => setEmail(e.target.value)}/>
                <input type="email" placeholder='Email Address' onChange={e => setClientName(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HomeNewsLetterSubscribeForm;