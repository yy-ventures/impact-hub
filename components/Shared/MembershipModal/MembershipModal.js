import React,{ useState } from 'react';
import Button from '../Button/Button';

const MembershipModal = ({handleCloseModal, optionTitle}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [organization, setOrganization] = useState('')
    const [hubPackage, setHubPackage] = useState('')
    const [organizationBrief, setOrganizationBrief] = useState('')
    const [whyBecome, setWhyBecome] = useState('')
    const [didHear, setDidHear] = useState('')

    console.log(hubPackage)
    const handleContact = e => {
        let phoneNumber = e.target.value
        if(isNaN(phoneNumber) || Number(phoneNumber) < 0){
            alert("Please Input a Valid number!")
        }else{
            setContact(phoneNumber)
        }
    } 

    let bookingFormData = new FormData()

    bookingFormData.append('first_name', firstName)
    bookingFormData.append('last_name', lastName)
    bookingFormData.append('email', email)
    bookingFormData.append('contact_number', contact)
    bookingFormData.append('organization', organization)
    bookingFormData.append('first_name', hubPackage)
    bookingFormData.append('what_you_do', organizationBrief)
    bookingFormData.append('description', whyBecome)
    bookingFormData.append('about', didHear)

    // submit
    const HandleOnSubmit = e => {
        e.preventDefault()
        fetch('https://ihd.yyventures.org/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingFormData)
        })
    }

    return ( 
        <section className='membership_modal' onClick={handleCloseModal}>
            <div className='membership_modal_container'>
                <form className='membership_modal_form' onSubmit={HandleOnSubmit}>
                    <div className='membership_modal_form_input_container'>
                        <input type="text" placeholder='First Name' required value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <input type="text" placeholder='Last Name' required value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className='membership_modal_form_input_container'>
                        <input type="email" placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type="text" placeholder='Contact no.' required value={contact} onChange={handleContact}/>
                    </div>
                    <div className='membership_modal_form_input_container'>
                        <input type="text" placeholder='Organization or Company' required value={organization} onChange={e => setOrganization(e.target.value)}/>
                    </div>
                    <div className='membership_modal_form_option_container'>
                        <p>Choose Membership Package</p>
                        <select value={hubPackage} onChange={e => setHubPackage(e.target.value)}>
                            <option value="1">{optionTitle} 1day/month</option>
                            <option value="2">Hub connect 1day/month</option>
                            <option value="3">Hub connect 1day/month</option>
                            <option value="4">Hub connect 1day/month</option>
                            <option value="5">Hub connect 1day/month</option>
                            <option value="6">Hub connect 1day/month</option>
                        </select>
                    </div>
                    <div className='membership_modal_form_textarea'>
                        <p>Please tell us a little about you or your organisation/company – and the work you do there</p>
                        <textarea required onChange={e => setOrganizationBrief(e.target.value)} value={organizationBrief}></textarea>
                    </div>
                    <div className='membership_modal_form_textarea'>
                        <p>Please shortly describe why you would like to become a member</p>
                        <textarea required onChange={e => setWhyBecome(e.target.value)} value={whyBecome}></textarea>
                    </div>
                    <div className='membership_modal_form_textarea'>
                        <p>How did your hear about us?</p>
                        <textarea required onChange={e => setDidHear(e.target.value)} value={didHear}></textarea>
                    </div>
                    <div className='membership_modal_form_submit'>
                        <Button text="submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MembershipModal;