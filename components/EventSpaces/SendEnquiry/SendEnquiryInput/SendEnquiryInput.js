import React, { useState } from 'react';
import Button from '../../../Shared/Button/Button';

const SendEnquiryInput = () => {
    
    // form state
    const [eventPackage, setEventPackage] = useState('event_space')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [date, setDate] = useState('')

    //start time & end time
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');

    // error checking
    const [error, setError] = useState('')

    // number input check
    const handleContact = e => {
        let phoneNumber = e.target.value
        if(isNaN(phoneNumber) || Number(phoneNumber) < 0){
            alert("Please Input a Valid number!")
        }else{
            setContact(phoneNumber)
        }
    } 

    // submit
    const HandleOnSubmit = async (e) => {
        e.preventDefault()
        let sendEnquiry = new FormData()

        sendEnquiry.append('space', eventPackage)
        sendEnquiry.append('first_name', firstName)
        sendEnquiry.append('last_name', lastName)
        sendEnquiry.append('email', email)
        sendEnquiry.append('phone', contact)
        sendEnquiry.append('date', date)
        sendEnquiry.append('start_time', startTime)
        sendEnquiry.append('end_time', endTime)
        
        await fetch('https://ihd.yyventures.org/api/space-booking', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + window.localStorage.getItem("token"),
            },
            body: sendEnquiry
        })
        .then((res) => res.json())
        .then(data => {
            if (data.success) {
                alert('Thank you! we have received your query!')
                setStartTime('00:00')
                setEndTime('00:00')
                setFirstName('')
                setLastName('')
                setEmail('')
                setContact('')
                setDate('')
                setEventPackage('event_space')
            }
            if(!data.success) {
                setError(data.errors)
            }
        }) 
        .catch(err => err);
    } 
    return (
        <form onSubmit={HandleOnSubmit}>
            <div className='enquiry_body_form_header'>
                <div><h3>Space you would like to rent</h3></div>
                <div>
                    <select value={eventPackage} onChange={e => setEventPackage(e.target.value)}>
                        <option selected value='event_space'>Event Space</option>
                        <option value='hub_space'>Hub Cafe</option>
                        <option value='workshop_space'>Workshop Space</option>
                        <option value='board_meeting_room'>Board Meeting Room</option>
                    </select>
                </div>
            </div>
            <div className='enquiry_body_form_body'>
                <div className='enquiry_body_form_body_container enquiry_body_form_body_container_first'>
                    <input type='text' placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <input type='text' placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className='enquiry_body_form_body_container'>
                    <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='enquiry_body_form_body_container'>
                    <input type='text' placeholder='Contact No.' value={contact} onChange={handleContact}/>
                </div>
                <div className='enquiry_body_form_body_container'>
                    <input type='date' placeholder='dd/mm//yy' value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <div className='enquiry_body_form_body_label'>
                    <h3>Start Time</h3>
                </div>
                <div className='enquiry_body_form_body_container'>
                    <input type='time' value={startTime} onChange={e => setStartTime(e.target.value)} />
                </div>
                <div className='enquiry_body_form_body_label'>
                    <h3>End Time</h3>
                </div>
                <div className='enquiry_body_form_body_container'>
                    <input type='time' value={endTime} onChange={e => setEndTime(e.target.value)} />
                </div>
            </div>
            <div className='enquiry_body_form_footer'>
                <Button text='Submit' type='secondary' />
            </div>
            <div>
                <p>{error}</p>
            </div>
        </form>
    );
};

export default SendEnquiryInput;