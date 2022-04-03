import React from 'react';
import HeadingDescription from '../../Shared/HeadingDescription/HeadingDescription';
import TitleBlock from '../../Shared/TitleBlock/TitleBlock';
import partnerShape from '../../../public/partners_path.png';
import SendEnquiryInput from './SendEnquiryInput/SendEnquiryInput';

const SendEnquiry = () => {
    return (
        <section className='enquiry'>
            <div className='enquiry_header'>
                <div>
                    <HeadingDescription 
                        parentClass="enquiry_header"
                        span='' 
                        heading='Booking Enquiry' />
                    <p>If you are a member, please enter the email address you used to register your membership. If you have booked a space before, please use the same email address again.</p>
                </div>
                <TitleBlock 
                    title="Come create with us!"
                    parentClass="membership_container_header"
                    shape={partnerShape.src}
                />
            </div>
            <div className='enquiry_body'>
                <div className='enquiry_body_form'>
                    <SendEnquiryInput/>
                </div>
            </div>
        </section>
    );
};

export default SendEnquiry;