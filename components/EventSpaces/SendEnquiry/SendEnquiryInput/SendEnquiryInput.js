import React, { useState } from 'react';
import Button from '../../../Shared/Button/Button';

const SendEnquiryInput = () => {
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');

    // form state
    const [eventPackage, setEventPackage] = useState(1)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [date, setDate] = useState('')



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
        let bookingFormData = new FormData()

        bookingFormData.append('first_name', firstName)
        bookingFormData.append('last_name', lastName)
        bookingFormData.append('email', email)
        bookingFormData.append('contact_number', contact)
        bookingFormData.append('organization', organization)
        bookingFormData.append('package_id', selectedPackageId)
        bookingFormData.append('package_type_id', '1')
        bookingFormData.append('what_you_do', organizationBrief)
        bookingFormData.append('description', whyBecome)
        bookingFormData.append('about', didHear)
        
        await fetch('https://ihd.yyventures.org/api/booking', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + window.localStorage.getItem("token"),
            },
            body: bookingFormData
        })
        .then(res => {
            console.log(res)
        })
        .then(data => {
            if(data){
                form.current.reset()
            }
        })
    } 
    return (
        <form onSubmit={HandleOnSubmit}>
            <div className='enquiry_body_form_header'>
                <div><h3>Space you would like to rent</h3></div>
                <div>
                    <select onChange={e => setEventPackage(e.target.value)}>
                        <option selected value='1'>Event Space</option>
                        <option value='2'>Hub Cafe</option>
                        <option value='3'>Workshop Space</option>
                        <option value='4'>Board Meeting Room</option>
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
                    <input type='time' value={endTime} onChange={e => setLastName(e.target.value)} />
                </div>
            </div>
            <div className='enquiry_body_form_footer'>
                <Button text='Submit' type='secondary' />
            </div>
        </form>
    );
};

export default SendEnquiryInput;