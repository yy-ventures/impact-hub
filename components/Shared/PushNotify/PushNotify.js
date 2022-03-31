import React from 'react';
import pushCross from '../../../public/cross.svg'

const PushNotify = ({setShowPush}) => {

    const HandleClosePush = e => {
        e.preventDefault()
        setShowPush(false)
    } 
    return (
        <div className='push_notification'>
            <img src={pushCross.src} onClick={setShowPush && HandleClosePush}/>
            <h2>Thank You For The Submission!</h2>
        </div>
    );
};

export default PushNotify;