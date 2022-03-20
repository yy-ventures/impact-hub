import React, { useRef, useState } from 'react';
import Button from '../../Shared/Button/Button';

const MembershipModal = ({id}) => {
    
    return (
        <section className='membership_modal'>
            <div className='membership_modal_container'>
                <form className='membership_modal_form'>
                    <div className='membership_modal_form_input_container'>
                        <input type="text" placeholder='First Name' required />
                        <input type="text" placeholder='Last Name' required />
                    </div>
                    <div className='membership_modal_form_input_container'>
                        <input type="email" placeholder='Email' required />
                        <input type="text" placeholder='Contact no.' required />
                    </div>
                    <div className='membership_modal_form_input_container'>
                        <input type="text" placeholder='Organization or Company' required />
                    </div>
                    <div className='membership_modal_form_option_container'>
                        <p>Choose Membership Package</p>
                        <select>
                            <option>Select Packages</option>
                            <option>Hub connect 1day/month</option>
                            <option>Hub connect 1day/month</option>
                            <option>Hub connect 1day/month</option>
                            <option>Hub connect 1day/month</option>
                            <option>Hub connect 1day/month</option>
                        </select>
                    </div>
                    <div className='membership_modal_form_textarea'>
                        <p>Please tell us a little about you or your organisation/company – and the work you do there</p>
                        <textarea required></textarea>
                    </div>
                    <div className='membership_modal_form_textarea'>
                        <p>Please shortly describe why you would like to become a member</p>
                        <textarea required></textarea>
                    </div>
                    <div className='membership_modal_form_textarea'>
                        <p>How did your hear about us?</p>
                        <textarea required></textarea>
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